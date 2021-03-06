const { Blob, Buffer } = require('node:buffer')
const express = require('express')
const app = express()
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')
const server = require("http").createServer(app);
const cors = require("cors");
const User = require('./models/User')
const { log } = require('console')

const ffmpeg = require('fluent-ffmpeg')
const assert = require('assert');
const fs = require('fs');
const { mkdir, open, unlink, writeFile } = require('fs/promises')
const MongoGridFS = require('mongo-gridfs');
const { join, dirname } = require('path')
const { fileURLToPath } = require('url')
ffmpeg.setFfmpegPath(path)
const saveData = async (data, username) => {
	const videoPath = __dirname + '/video'

	const dirName = new Date().toLocaleDateString().replace(/\./g, '_')
	const dirPath = `${videoPath}/${dirName}`

	const fileName = `${Date.now()}-${username}.webm`
	const tempFilePath = `${dirPath}/temp-${fileName}`
	const finalFilePath = `${dirPath}/${fileName}`

	let fileHandle
	try {
		fileHandle = await open(dirPath)
	} catch {
		await mkdir(dirPath, {
			recursive: true,
		})
	} finally {
		if (fileHandle) {
			fileHandle.close()
		}
	}

	try {
		const videoBlob = new Blob(data, {
			type: 'video/webm'
		})
		const videoBuffer = Buffer.from(await videoBlob.arrayBuffer())
		await writeFile(tempFilePath, videoBuffer)
		ffmpeg(tempFilePath)
			.outputOptions([
				'-c:v libvpx-vp9',
				'-c:a copy',
				'-crf 35',
				'-b:v 0',
				'-vf scale=1280:720'
			])
			.on('end', async () => {
				await unlink(tempFilePath)
				console.log(`*** File ${fileName} created`)
			})
			.save(finalFilePath, dirPath)
	} catch (e) {
		console.log('*** saveData', e)
	}
}


app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth.routes'))
// app.use('/api/toCall', require('./jingle/create.channel'))
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});
app.use(cors());
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
	res.send('Running');
});
var operators = [];
const dataChunks = {};
const socketByUser = {};

io.on("connection", (socket) => {
	socket.on('user:connected', (username) => {
		if (!socketByUser[socket.id]) {
			socketByUser[socket.id] = username
		}
	})
	socket.on("createRoom", (user, operator) => {
		if (operator) {
			socket.join(operator)
			operators.push({ operator, id: socket.id })
		} else {
			socket.join(user)
		}
		io.sockets.emit('online_room', (operators));
	}
	);
	socket.on('screenData:start', ({ data, username }) => {
		if (dataChunks[username]) {
			dataChunks[username].push(data)
		} else {
			dataChunks[username] = [data]
		}
	})

	socket.on('screenData:end', (username) => {
		if (dataChunks[username] && dataChunks[username].length) {
			saveData(dataChunks[username], username)
			dataChunks[username] = []
		}
	})

	socket.on('callEnde', (data) => {
		operators.forEach(e => {
			if (e.operator == data) {
				io.sockets.in(data).emit("callEndeMessage", "true");
			}
		})
		console.log(data);
		if (dataChunks[data] && dataChunks[data].length) {
			saveData(dataChunks[data], data)
			dataChunks[data] = []
		}
	})
	socket.on("disconnect", () => {
		// socket.broadcast.emit("callEnded");
		operators.forEach((e, i) => {
			if (e.id == socket.id) {
				operators.splice(i, 1)
			}
		})
		const username = socketByUser[socket.id]
		if (dataChunks[username] && dataChunks[username].length) {
			saveData(dataChunks[username], username)
			dataChunks[username] = []
		}
	});
	socket.on("callUser", ({ userToCall, signalData, from, name, surname, email }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name, surname, email });
	});
	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
		operators.forEach((e, i) => {
			if (e.operator == data.to) {
				operators.splice(i, 1)
			}
		})
	});
	
	// console.log(socket.rooms,operators);
});
//create.channel
// app.use(express.json({ extended: true }))

// app.use('/api/auth', require('./routes/auth.routes'))
// app.use('/t', require('./routes/redirect.routes'))


if (process.env.NODE_ENV === 'production') {
	app.use('/', express.static(path.join(dirname, 'client', 'build')))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(dirname, 'client', 'build', 'index.html'))
	})
}


// const PORT = config.get('port') || 5000
// server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

async function start() {
	try {
		await mongoose.connect(config.get('mongoUri'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		})
		server.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
	} catch (e) {
		console.log('Server Error', e.message)
		process.exit(1)
	}
}

start()
