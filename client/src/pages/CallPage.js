import React, {useState, useEffect, useRef, useContext} from "react";
// import Sidebar from '../components/Sidebar'
// import VideoPlayer from '../components/VideoPlayer'
// import Notifications from '../components/Notifications'
import Peer from 'simple-peer';
import openSocket from 'socket.io-client';  
import styles from '../css/CallPage.module.css'


const  socket = openSocket('http://localhost:5000/');


export const CallPage = () => {
  const data = JSON.parse(localStorage.getItem('userData'));
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [stream, setStream] = useState();
    const [name, setName] = useState('');
    const [call, setCall] = useState({});
    const [idToCall, setIdToCall] = useState('');
      const [room, setRoom] = useState({});
  const [message,setMessage] = useState(' ')
    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();
  const toColl = () => {

      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
      }
      
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
      
          var getUserMedia = (
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia
          );
      
          if (!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
          }
      
          return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
          });
      
        };
      }
      // navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) => {
      //     setStream(currentStream);
      //     myVideo.current.srcObject = currentStream;
      //   });
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(function(stream) {
        setStream(stream);
        myVideo.current.srcObject = stream;
      })
      .catch(function(err) {
          console.log("An error occurred: " + err);
      });    
      socket.on('rooms', (room)=>setRoom(room) )
      socket.on("message", (message) => setMessage(message))

      // socket.on('adminID', (id) => setAdminID(id));
      socket.on('callUser', ({ from, name: callerName, signal }) => {
        setCall({ isReceivingCall: true, from, name: callerName, signal });
      });
  }
    
    const answerCall = () => {
      setCallAccepted(true);
      const peer = new Peer({ initiator: false, trickle: false, stream });
      peer.on('signal', (data) => {
        socket.emit('answerCall', { signal: data, to: call.from });
      });
      peer.on('stream', (currentStream) => {
        userVideo.current.srcObject = currentStream;
      });
  
      peer.signal(call.signal);
  
      connectionRef.current = peer;
    };
  
    const callUser = (id) => {
      const peer = new Peer({ initiator: true, trickle: false, stream });
  
      peer.on('signal', (data) => {
        socket.emit('callUser', { userToCall: id, signalData: data, from: id, name });
      });
  
      peer.on('stream', (currentStream) => {
        userVideo.current.srcObject = currentStream;
      });
  
      socket.on('callAccepted', (signal) => {
        setCallAccepted(true);
        peer.signal(signal);
      });
  
      connectionRef.current = peer;
    };
  
    const leaveCall = () => {
      setCallEnded(true);
  
      connectionRef.current.destroy();
  
      window.location.reload();
    };
    console.log(room);
  console.log(message);
  
    return (

        <div className={styles.container}>
            {/* <VideoPlayer name = {name} callAccepted = {callAccepted} myVideo = {myVideo} userVideo = {userVideo} callEnded = {callEnded} stream = {stream} call = {call} />

                <Sidebar me = {me} callAccepted = {callAccepted} name = { name} setName = {setName} callEnded = {callEnded} leaveCall = {leaveCall} callUser = {callUser} />

                <Notifications answerCall = {answerCall} call={call} callAccepted={callAccepted} /> */}
                        {/* <VideoPlayer props ={[name, callAccepted, myVideo, userVideo, callEnded, stream, call ]} /> */}
                        <div className="row">
                                <div className="row">
        <h1>{data.username} {data.usersurname}</h1>
        </div>
      {stream && (
      <div className="col-12">
        <video playsInline muted ref={myVideo} autoPlay style={{ width: '100%', height: '100%' }} />
      </div>
      )}
      {callAccepted && !callEnded && (
        <div className="col-6">
          <h3>{call.name}</h3>
          <video playsInline ref={userVideo} autoPlay style={{ width: '550px', height: '300px' }} />
        </div>
      )}
    </div>
    <div>
      {/* <form>
        <div>
          <div>
            <h3>Account Info</h3>
            <input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <h3>Make a call</h3>
            <input label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
            {callAccepted && !callEnded ? (
              <button type="button" onClick={leaveCall}>
                Hang Up
              </button>
            ) : (
              <button type="button" onClick={() => callUser(idToCall)}>
                Call
              </button>
            )}
          </div>
        </div>
      </form> */}
    </div>
    <button type="button" className={styles.callBtn+' btn-success'} onClick={()=>toColl()}>позвонить</button>
    {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} is calling:</h1>
          <button type="submit" onClick={answerCall}>
            Answer
          </button>
        </div>
      )}
                {/* <Sidebar props={[me, callAccepted, name, setName, callEnded, leaveCall, callUser]} /> */}

                {/* <Notifications props={[answerCall, call, callAccepted ]} /> */}
      

        </div>
    )

}