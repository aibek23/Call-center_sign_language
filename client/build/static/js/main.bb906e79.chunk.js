(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,a,t){},109:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(55),o=t.n(l),c=t(18),s=t(1),i=t(24),m=t(56),u=t.n(m),d=function(){return r.a.createElement("div",{className:"Home_Page"},r.a.createElement("div",{className:"blur"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:u.a.title},r.a.createElement("h2",null,"kosg.su"),r.a.createElement("h4",null,"\u0441\u0435\u0440\u0432\u0438\u0441 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0441\u0443\u0440\u0434\u043e\u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f\u043c \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0443\u044e \u0441\u0440\u0435\u0434\u0443 \u0434\u043b\u044f \u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043e\u0432 \u043f\u043e \u0441\u043b\u0443\u0445\u0443 \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0437\u0430\u0442\u0440\u0430\u0442\u0430\u043c\u0438, \u0430 \u0433\u043b\u0443\u0445\u0438\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u044f\u043c \u043d\u0430\u0440\u0430\u0432\u043d\u0435 \u0441\u043e \u0432\u0441\u0435\u043c\u0438."),r.a.createElement(c.b,{className:"nav-link",to:"/"},"\u0432\u044b\u0439\u0442\u0438")))))},p=t(34),g=t(59),v=t.n(g),_=t(60),f=t.n(_),b=t(2),E=t.n(b),h=t(22),O=t(43),N=t.n(O),j=t(62),w=(t(54),j.a.connect("https://kosg.su",{reconnection:!1})),C=function(e){var a,t=JSON.parse(localStorage.getItem("userData")),l=t.username,o=t.usersurname,c=t.userEmail,i=Object(n.useState)(!1),m=Object(s.a)(i,2),u=m[0],d=m[1],g=Object(n.useState)(!1),_=Object(s.a)(g,2),b=_[0],O=(_[1],Object(n.useState)()),j=Object(s.a)(O,2),C=j[0],x=j[1],k=Object(n.useState)({}),P=Object(s.a)(k,2),y=P[0],S=P[1],I=Object(n.useState)([]),A=Object(s.a)(I,2),U=A[0],D=A[1],M=Object(n.useState)(!0),T=Object(s.a)(M,2),H=(T[0],T[1]),R=Object(n.useState)(),B=Object(s.a)(R,2),F=B[0],G=B[1],J=Object(n.useRef)(),z=Object(n.useRef)(),W=Object(n.useRef)(),q=Object(n.useRef)(w),L=Object(n.useState)(),Y=Object(s.a)(L,2),Q=Y[0],V=Y[1],X=Object(n.useState)(),K=Object(s.a)(X,2),$=K[0],Z=K[1],ee=Object(n.useState)(!1),ae=Object(s.a)(ee,2),te=(ae[0],ae[1]),ne=null,re=[],le=t.userId,oe=Object(n.useRef)("".concat(l,"_").concat(le,"_").concat((new Date).toLocaleDateString(),"_").concat((new Date).getTime())),ce=new Audio(v.a),se=new Audio(f.a),ie=Object(n.useState)({screen1:!0,screen2:!1}),me=Object(s.a)(ie,2),ue=me[0],de=me[1],pe=Object(n.useState)(!1),ge=Object(s.a)(pe,2),ve=ge[0],_e=ge[1],fe=Object(n.useState)(!1),be=Object(s.a)(fe,2),Ee=be[0],he=be[1],Oe=Object(n.useState)(100),Ne=Object(s.a)(Oe,2),je=Ne[0],we=Ne[1];function Ce(){te(!1),q.current.emit("screenData:end",oe.current),ne=null,re=[]}Object(n.useEffect)((function(){console.log(),e.props?(a="room"+e.props.operator,q.current.emit("user:connect",oe.current),void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var a=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return a?new Promise((function(t,n){a.call(navigator,e,t,n)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){x(e),J.current.srcObject=e})).catch((function(e){console.log("An error occurred: "+e)})),navigator.mediaDevices.getDisplayMedia({video:!0}).then((function(e){V(e)})).catch((function(e){console.log("An error occurred: "+e)})),navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){Z(e)})).catch((function(e){console.log("An error occurred: "+e)})),w.emit("createRoom",c,a,le),w.on("callUser",(function(e){var a=e.from,t=e.name,n=e.signal,r=e.surname;S({isReceivingCall:!0,from:a,name:t,signal:n,surname:r})})),w.on("update",(function(e){return console.log(e)})),w.on("connect_error",(function(e){return console.log(e)})),w.on("callEndeMessage",(function(e){Ce(),setTimeout((function(){window.location.reload()}),1500)})),w.on("connect_failed",(function(e){return console.log(e)})),w.io.on("error",(function(e){console.log(e instanceof Error),h.b.error("\u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u2116".concat(e.message),{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),console.log(e.data)}))):(w.emit("createRoom",c),w.on("busy__room",(function(e){H(e)})),w.on("update",(function(e){return console.log(e)})),w.on("connect_error",(function(e){console.log(e),setTimeout((function(){window.location.reload()}),3e3)})),w.on("disconnect",(function(){window.location.reload()})),w.on("connect_failed",(function(e){return console.log(e)})),w.on("callEndeMessage",(function(){window.location.reload()})),w.on("callUser",(function(e){var a=e.from,t=e.name,n=e.signal;S({isReceivingCall:!0,from:a,name:t,signal:n})})),w.on("online_room",(function(e){D(e)})),void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var a=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return a?new Promise((function(t,n){a.call(navigator,e,t,n)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){x(e),J.current.srcObject=e})).catch((function(e){console.log("An error occurred: "+e)})))}),[]),Object(n.useEffect)((function(){var e=Math.floor(Math.random()*U.length);if(U[e]){var a=U[e];G(a.operator),H(!1)}}),[U]);var xe=function(){!function(){var e;Q&&$&&!ne&&(te(!0),e="unavailable"===$?Q:new MediaStream([].concat(Object(p.a)(Q.getVideoTracks()),Object(p.a)($.getAudioTracks()))),(ne=new MediaRecorder(e)).ondataavailable=function(e){var a=e.data;re.push(a),q.current.emit("screenData:start",{username:oe.current,data:a})},ne.onstop=Ce,ne.start(150))}(),d(!0),ce.loop=!1,ce.pause();var a=new N.a({initiator:!1,trickle:!1,stream:C});a.on("signal",(function(a){w.emit("answerCall",{signal:a,to:y.from,room:"room"+e.props.operator})})),a.on("stream",(function(e){z.current.srcObject=e})),a.on("error",(function(e){console.log(e),(e="RTCError: User-Initiated Abort, reason=Close called")&&(h.b.error("\u0441\u0432\u044f\u0437\u044c \u043f\u0440\u0435\u0440\u0432\u0430\u043d\u0430 \u2116".concat(e.message),{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),Ce(),w.emit("callEnde",y.from),W.current.destroy(),setTimeout((function(){window.location.reload()}),1500))})),a.signal(y.signal),W.current=a};window.onerror=function(e,a,t,n,r){return"Uncaught Error: Connection failed."===e&&(Ce(),h.b.error("Connection failed",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),setTimeout((function(){window.location.reload()}),3500)),!1};var ke=function(){window.scrollTo(0,document.documentElement.scrollHeight),Ce(),w.emit("callEnde",y.from),W.current.destroy(),setTimeout((function(){window.location.reload()}),1500)};Object(n.useEffect)((function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),y.isReceivingCall?(ce.loop=!0,ce.play()):(ce.loop=!1,ce.pause())}),[y]),Object(n.useEffect)((function(){576>=window.innerWidth&&_e(!0)}),[]);var Pe=function(){de({screen1:!ue.screen1,screen2:ue.screen1})};Object(n.useEffect)((function(){if(je){var e=setInterval((function(){we(je-1)}),1e3);return function(){return clearInterval(e)}}}),[je]);return r.a.createElement("div",{className:"container",onClick:function(){we(8)}},r.a.createElement(h.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),r.a.createElement("h1",{className:E.a.title_callOperator},"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a \u0436\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430"),r.a.createElement("div",{className:"Operators-row"},ve?r.a.createElement("div",{className:E.a.modal_container+" "+"".concat(Ee&&E.a.is_open)},r.a.createElement("div",{className:E.a.modal_content},r.a.createElement("div",{className:E.a.video_operator+" "+E.a.video+" "+"".concat(ue.screen2&&E.a.video_player_little),onClick:function(){Pe()}},r.a.createElement("video",{playsInline:!0,ref:J,muted:!0,autoPlay:!0,className:E.a.video_player_user+" "+E.a.video_player})),u&&!b&&r.a.createElement("div",{className:E.a.video+" "+"".concat(ue.screen1&&E.a.video_player_little),onClick:function(){Pe()}},r.a.createElement("video",{ref:z,autoPlay:!0,className:E.a.video_player_operator+" "+E.a.video_player}),r.a.createElement("h6",{className:E.a.user_name},y.name," ",y.surname," "),r.a.createElement("h6",{className:E.a.user_name},y.email," ")),je&&r.a.createElement("div",{className:E.a.HangUp_div},r.a.createElement("button",{type:"button",className:E.a.call_btn_h,onClick:ke})))):r.a.createElement("div",{className:E.a.container},r.a.createElement("div",{className:E.a.operatot_video_row},r.a.createElement("div",{className:"col-6 p-2"},r.a.createElement("video",{playsInline:!0,ref:J,muted:!0,autoPlay:!0,className:E.a.video_player_user+" "+E.a.video_player})),u&&!b&&r.a.createElement("div",{className:"col-6 p-2"},r.a.createElement("video",{ref:z,autoPlay:!0,className:E.a.video_player_operator+" "+E.a.video_player}),r.a.createElement("h6",{className:E.a.user_name},y.name," ",y.surname," "))))),y.isReceivingCall&&!u&&r.a.createElement("div",{className:E.a.btn_call_text},r.a.createElement("p",{className:E.a.btn_call_name},y.name),r.a.createElement("button",{className:E.a.btn_call,onClick:function(){xe()}},r.a.createElement("div",{className:E.a.btn_call__ico},r.a.createElement("i",{className:"fas fa-phone-alt"})))),r.a.createElement("div",{className:E.a.wraper_callBtn},u&&!b?r.a.createElement("div",{className:E.a.HangUp_div},r.a.createElement("button",{type:"button",className:E.a.call_btn_h,onClick:ke})):U.length?r.a.createElement("div",{className:E.a.HangUp_div},r.a.createElement("button",{type:"button",className:E.a.callBtn,onClick:function(){!function(e){se.loop=!0,se.play();var a=new N.a({initiator:!0,trickle:!1,stream:C});a.on("error",(function(e){console.log(e)})),a.on("signal",(function(a){w.emit("callUser",{userToCall:e,signalData:a,from:c,name:l,surname:o})})),a.on("stream",(function(e){se.loop=!1,se.pause(),z.current.srcObject=e})),w.on("callAccepted",(function(e){d(!0),a.signal(e)})),W.current=a}(F),d(!0),576>=window.innerWidth&&(he(!0),console.log(Ee))}})):e.props?"":r.a.createElement("div",{className:E.a.HangUp_div},r.a.createElement("div",{className:"row"},r.a.createElement("h4",{className:E.a.title_callOperator_er},"\u043f\u0440\u043e\u0441\u0438\u043c \u043f\u043e\u0434\u043e\u0436\u0434\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0438\u043d\u0443\u0442 \u0432\u0441\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0437\u0430\u043d\u044f\u0442\u044b"),r.a.createElement("h5",{className:E.a.title_callOperator_er},"\u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u0437\u0435\u043b\u0435\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0435\u0433\u043e \u0434\u043b\u044f \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u0435\u043d\u0438\u044f \u0432\u0438\u0434\u0435\u043e\u0437\u0432\u043e\u043d\u043a\u0430")))))},x=t(14),k=t.n(x),P=t(23),y=t(37),S=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(null),o=Object(s.a)(l,2),c=o[0],i=o[1];return{loading:t,request:Object(n.useCallback)((function(e){var a,t,n,l,o,c=arguments;return k.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:"GET",t=c.length>2&&void 0!==c[2]?c[2]:null,n=c.length>3&&void 0!==c[3]?c[3]:{},r(!0),s.prev=4,t&&(t=JSON.stringify(t),n["Content-Type"]="application/json"),s.next=8,k.a.awrap(fetch(e,{method:a,body:t,headers:n}));case 8:return l=s.sent,s.next=11,k.a.awrap(l.json());case 11:if(o=s.sent,l.ok){s.next=14;break}throw new Error(o.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 14:return r(!1),s.abrupt("return",o);case 18:throw s.prev=18,s.t0=s.catch(4),r(!1),i(s.t0.message),s.t0;case 23:case"end":return s.stop()}}),null,null,[[4,18]])}),[]),error:c,clearError:Object(n.useCallback)((function(){return i(null)}),[])}};function I(){}var A=Object(n.createContext)({token:null,userEmail:null,userId:null,login:I,logout:I,isAuthenticated:!1}),U=t(4),D=t.n(U),M=function(){var e=Object(n.useContext)(A),a=S(),t=a.loading,l=a.request,o=a.error,c=a.clearError,i=Object(n.useState)({username:"",surname:"",email:"",password:""}),m=Object(s.a)(i,2),u=m[0],d=m[1],p=Object(n.useState)({email:"",password:""}),g=Object(s.a)(p,2),v=g[0],_=g[1],f=Object(n.useState)(!0),b=Object(s.a)(f,2),E=b[0],O=b[1],N=Object(n.useState)({activebtn1:!0,activebtn2:!1}),j=Object(s.a)(N,2),w=j[0],C=j[1];Object(n.useEffect)((function(){o&&h.b.error("".concat(o),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),c()}),[o,c]);var x=function(e){d(Object(y.a)({},u,Object(P.a)({},e.target.name,e.target.value)))},I=function(e){_(Object(y.a)({},v,Object(P.a)({},e.target.name,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(h.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row justify-content-center  align-content-center",style:{height:"100%",marginTop:"50px"}},r.a.createElement("div",{className:"col-md-offset-3 col-md-6 "},r.a.createElement("div",{className:D.a.tab,role:"tabpanel"},r.a.createElement("ul",{className:"nav "+D.a.nav_tabs,role:"tablist"},r.a.createElement("li",{role:"presentation",className:w.activebtn1?D.a.active:""},r.a.createElement("button",{"aria-controls":"home",role:"tab","data-toggle":"tab",onClick:function(){C({activebtn1:!0,activebtn2:!1})}},"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443")),r.a.createElement("li",{role:"presentation",className:w.activebtn2?D.a.active:""},r.a.createElement("button",{href:"#Section2","aria-controls":"profile",role:"tab","data-toggle":"tab",onClick:function(){C({activebtn1:!1,activebtn2:!0})}},"\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"))),r.a.createElement("div",{className:D.a.tab_content+" tabs"},w.activebtn1?r.a.createElement("div",{role:"tabpanel",className:"tab-pane",id:"Section1"},r.a.createElement("form",{className:D.a.form_horizontal},r.a.createElement("div",{className:"form-group "+D.a.form_group},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email"),r.a.createElement("input",{type:"email",className:"form-control "+D.a.form_control,id:"email",name:"email",value:v.email,onChange:I})),r.a.createElement("div",{className:D.a.form_group+" form-group "},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"\u043f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("input",{type:"password",className:D.a.form_control+" form-control",id:"password",name:"password",value:v.password,onChange:I})),r.a.createElement("div",{className:"form-group "+D.a.form_group},r.a.createElement("div",{className:" form-check "+D.a.main_checkbox_+" form-check"},r.a.createElement("input",{className:"form-check-input",style:{marginLeft:"0px"},type:"checkbox",defaultChecked:E,onChange:function(){O(!E)}}),r.a.createElement("label",{className:"form-check-label",htmlFor:"flexCheckChecked"}," \u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"))),r.a.createElement("div",{className:"form-group forgot_pass"},r.a.createElement("button",{type:"submit",className:"btn btn-warning w-100",style:{fontWeight:"bold",color:"#fff",borderRadius:"20px"},disabled:t,onClick:function(){var a;return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.awrap(l("/api/auth/login","POST",Object(y.a)({},v)));case 3:a=t.sent,e.login(a.token,a.userId,a.email,a.username,a.surname,E),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),null,null,[[0,7]])}},"\u0412\u043e\u0439\u0442\u0438")))):r.a.createElement("div",{role:"tabpanel",className:"tab-pane  ",id:"Section2"},r.a.createElement("form",{className:D.a.form_horizontal},r.a.createElement("div",{className:"form-group "+D.a.form_group},r.a.createElement("label",{htmlFor:"exampleInputEmail2"},"\u0438\u043c\u044f"),r.a.createElement("input",{placeholder:"\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f",id:"exampleInputEmail2",type:"text",name:"username",className:"form-control "+D.a.form_control,value:u.username,onChange:x})),r.a.createElement("div",{className:D.a.form_group,style:{}},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"\u0444\u0430\u043c\u0438\u043b\u0438\u044f"),r.a.createElement("input",{placeholder:"\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044f",id:"exampleInputEmail1",type:"text",name:"surname",className:"form-control "+D.a.form_control,value:u.surname,onChange:x})),r.a.createElement("div",{className:D.a.form_group},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email"),r.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",id:"email",type:"text",name:"email",className:"form-control "+D.a.form_control,value:u.email,onChange:x})),r.a.createElement("div",{className:D.a.form_group+" form-group "},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"\u043f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("input",{type:"password",className:D.a.form_control+" form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"password",name:"password",value:u.password,onChange:x})),r.a.createElement("div",{className:"form-group "+D.a.form_group},r.a.createElement("div",{className:" form-check "+D.a.main_checkbox_+" form-check"},r.a.createElement("input",{className:"form-check-input",style:{marginLeft:"0px"},type:"checkbox",id:"flexCheckChecked",defaultChecked:E,onChange:function(){O(!E)}}),r.a.createElement("label",{className:"form-check-label",htmlFor:"flexCheckChecked"}," \u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"))),r.a.createElement("div",{className:"form-group forgot_pass"},r.a.createElement("button",{type:"submit",className:"btn btn-warning w-100",onClick:function(){var e;return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,k.a.awrap(l("/api/auth/register","POST",Object(y.a)({},u)));case 3:e=a.sent,h.b.info("".concat(e.message),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),null,null,[[0,7]])},disabled:t,style:{fontWeight:"bold",color:"#fff",borderRadius:"20px"}},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))))))))))},T=function(e){var a=e.props,t=Object(n.useState)(!1),l=Object(s.a)(t,2),o=(l[0],l[1]),m=Object(n.useState)(!1),u=Object(s.a)(m,2),d=u[0],p=u[1],g=Object(n.useState)(!1),v=Object(s.a)(g,2),_=v[0],f=v[1],b=JSON.parse(localStorage.getItem("userData"));Object(n.useEffect)((function(){null!==a&&o(!0)}),[]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));switch(e&&"admin@gmail.com"===e.userEmail&&f(!0),e&&e.userEmail){case"operator1@gmail.com":case"operator2@gmail.com":case"operator3@gmail.com":case"operator4@gmail.com":case"operator5@gmail.com":p(!0)}}));var E=Object(i.g)(),h=Object(n.useContext)(A);return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark  navbarbg"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(c.c,{className:"navbar-brand",to:"/HomePage"},"\u0433\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"},b?d?r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{className:"nav-link",to:"/CallPage"},"\u043f\u0440\u0438\u0435\u043c \u0437\u0432\u043e\u043d\u043a\u043e\u0432")):r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{className:"nav-link",to:"/CallPage"},"\u043f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c")):" ",_?r.a.createElement(c.c,{className:"nav-link",to:"/AdminPanel"},"\u0430\u0434\u043c\u0438\u043d \u043f\u0430\u043d\u0435\u043b\u044c"):""),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/AuthPage",onClick:function(e){e.preventDefault(),h.logout(),E.push("/AuthPage")}},b?"\u0432\u044b\u0439\u0442\u0438":"\u0432\u0445\u043e\u0434 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442")))))))},H=function(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"col-xl-8 mt-3"},r.a.createElement("div",{className:"row mt-3 p-3 d-flex flex-row list-group-item-primary align-self-center justify-content-center  shadow-lg rounded-3 align-items-center"},r.a.createElement("h5",{className:"col-3  m-0"}," Operator1 "),"  ",r.a.createElement("span",{className:"col-2  text-center text-success rounded-3"},"online")," ",r.a.createElement("p",{className:"col-6 m-0 text-center"}," 01.11.2022 ",r.a.createElement("p",{className:"text-warning  m-0"}," 26h 30m")," "))),r.a.createElement("div",{className:"col-xl-8 mt-3"},r.a.createElement("div",{className:"row mt-3 p-3 d-flex flex-row list-group-item-primary align-self-center justify-content-center  shadow-lg rounded-3 align-items-center"},r.a.createElement("h5",{className:"col-3  m-0"}," Operator1 "),"  ",r.a.createElement("span",{className:"col-2  text-center text-success rounded-3"},"online")," ",r.a.createElement("p",{className:"col-6 m-0 text-center"}," 01.11.2022 ",r.a.createElement("p",{className:"text-warning  m-0"}," 26h 30m")," "))),r.a.createElement("div",{className:"col-xl-8 mt-3"},r.a.createElement("div",{className:"row mt-3 p-3 d-flex flex-row list-group-item-primary align-self-center justify-content-center  shadow-lg rounded-3 align-items-center"},r.a.createElement("h5",{className:"col-3  m-0"}," Operator1 "),"  ",r.a.createElement("span",{className:"col-2  text-center text-success rounded-3"},"online")," ",r.a.createElement("p",{className:"col-6 m-0 text-center"}," 01.11.2022 ",r.a.createElement("p",{className:"text-warning  m-0"}," 26h 30m")," "))),r.a.createElement("div",{className:"col-xl-8 mt-3"},r.a.createElement("div",{className:"row mt-3 p-3 d-flex flex-row list-group-item-primary align-self-center justify-content-center  shadow-lg rounded-3 align-items-center"},r.a.createElement("h5",{className:"col-3  m-0"}," Operator1 "),"  ",r.a.createElement("span",{className:"col-2  text-center text-success rounded-3"},"online")," ",r.a.createElement("p",{className:"col-6 m-0 text-center"}," 01.11.2022 ",r.a.createElement("p",{className:"text-warning  m-0"}," 26h 30m")," "))))},R=function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),l=t[0],o=t[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));switch(console.log(e),e&&e.userEmail){case"operator1@gmail.com":o({operator:1});break;case"operator2@gmail.com":o({operator:2});break;case"operator3@gmail.com":o({operator:3});break;case"operator4@gmail.com":o({operator:4});break;case"operator5@gmail.com":o({operator:5})}}),[0]),e?r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{props:l}),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/CallPage"},r.a.createElement(C,{props:l})),r.a.createElement(i.b,{path:"/AdminPanel",exact:!0},r.a.createElement(H,null)),r.a.createElement(i.a,{to:"/HomePage"})),r.a.createElement(i.b,{path:"/HomePage",exact:!0},r.a.createElement(d,null))):r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{props:l}),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/HomePage",exact:!0},r.a.createElement(d,null)),r.a.createElement(i.b,{path:"/AuthPage",exact:!0},r.a.createElement(M,null)),r.a.createElement(i.a,{to:"/HomePage"})))},B=function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(!1),o=Object(s.a)(l,2),c=o[0],i=o[1],m=Object(n.useState)(null),u=Object(s.a)(m,2),d=u[0],p=u[1],g=Object(n.useState)(null),v=Object(s.a)(g,2),_=v[0],f=v[1],b=Object(n.useCallback)((function(e,a,t,n,l,o){r(e),p(a),f(t),o&&localStorage.setItem("userData",JSON.stringify({userId:a,token:e,username:n,usersurname:l,userEmail:t}))}),[]),E=Object(n.useCallback)((function(){r(null),p(null),f(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&b(e.token,e.userId,e.userEmail),i(!0)}),[b]),{login:b,logout:E,token:t,userId:d,ready:c,userEmail:_}},F=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(!0),o=Object(s.a)(l,2),c=o[0],i=o[1],m=Object(n.useState)(0),u=Object(s.a)(m,2),d=u[0],p=u[1];Object(n.useEffect)((function(){var e=null;return t&&!1===c?e=setInterval((function(){p((function(e){return e+10}))}),10):clearInterval(e),function(){clearInterval(e)}}),[t,c]);return{handleStart:function(){r(!0),i(!1)},handlePauseResume:function(){i(!c)},time:d}},G=Object(n.createContext)({handleStart:function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=(a[1],Object(n.useState)(!0)),l=Object(s.a)(r,2),o=l[0],c=(l[1],Object(n.useState)(0)),i=Object(s.a)(c,2),m=i[0],u=i[1],d=S().request,p=Object(n.useContext)(A).token;Object(n.useEffect)((function(){var e=null;return t&&!1===o?e=setInterval((function(){u((function(e){return e+10}))}),10):clearInterval(e),function(){clearInterval(e)}}),[t,o]);return Object(n.useCallback)((function(){return k.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("ok"),e.next=4,k.a.awrap(d("/api/time/seva","Post",{TIME:m},{Authorization:"Bearer ".concat(p)}));case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),null,null,[[0,6]])}),[p,d])(),o}}),J=function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"2rem"}},r.a.createElement("div",{className:"preloader-wrapper active"},r.a.createElement("div",{className:"spinner-layer spinner-red-only"},r.a.createElement("div",{className:"circle-clipper left"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"gap-patch"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"circle-clipper right"},r.a.createElement("div",{className:"circle"})))))};t(107),t(108);var z=function(){var e=B(),a=e.token,t=e.login,n=e.logout,l=e.userId,o=e.ready,s=e.userEmail,i=F(),m=i.handleStart,u=i.handlePauseResume,d=i.time,p=!!a,g=R(p);return o?r.a.createElement(A.Provider,{value:{token:a,login:t,logout:n,userId:l,isAuthenticated:p,userEmail:s}},r.a.createElement(G.Provider,{value:{handleStart:m,handlePauseResume:u,time:d}},r.a.createElement(c.a,null,g))):r.a.createElement(J,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},2:function(e,a,t){e.exports={title_callOperator:"CallPage_title_callOperator__3cs4q",title_callOperator_er:"CallPage_title_callOperator_er__hYOia",container:"CallPage_container__eN9HE",video_row:"CallPage_video_row__22ncA",video:"CallPage_video__1DmAL",video_player:"CallPage_video_player__RuGnu",user_name:"CallPage_user_name__3uwkM",HangUp_div:"CallPage_HangUp_div__4S_Qe",operatot_video_row:"CallPage_operatot_video_row__2BOxG",call_btn_h:"CallPage_call_btn_h__3QMf6",callBtn:"CallPage_callBtn__12BiQ",btn_call_text:"CallPage_btn_call_text__2bTlu",btn_call_name:"CallPage_btn_call_name__1t9zK",btn_call:"CallPage_btn_call__19a2Y",hoverWave:"CallPage_hoverWave__1duGy",wraper_callBtn:"CallPage_wraper_callBtn__erATv",video_player_operator:"CallPage_video_player_operator__QUi1V",video_operator:"CallPage_video_operator__Et4fq",video_player_user:"CallPage_video_player_user__2FA7Y",video_player_little:"CallPage_video_player_little__1IupX",modal_container:"CallPage_modal_container__1G2Pb",is_open:"CallPage_is_open__3hinh",modal_content:"CallPage_modal_content__1CR3b",close:"CallPage_close__1dUX8",btn_call__ico:"CallPage_btn_call__ico__2pV0w","btn-call__ico":"CallPage_btn-call__ico__25UA2",shake:"CallPage_shake__3feiu"}},4:function(e,a,t){e.exports={nav_link:"AuthPage_nav_link__3M4nD",active:"AuthPage_active__1aP5l",tab:"AuthPage_tab__20ryx",nav_tabs:"AuthPage_nav_tabs__2FLUy",tab_content:"AuthPage_tab_content__3XYfg","form-bg":"AuthPage_form-bg__2lQPp",form_horizontal:"AuthPage_form_horizontal__3Mdyq",form_group:"AuthPage_form_group__27dYa",form_control:"AuthPage_form_control__1v0Yv",main_checkbox:"AuthPage_main_checkbox__20G2h",text:"AuthPage_text__26lEr",btn:"AuthPage_btn__2dr-I",forgot_pass:"AuthPage_forgot_pass__AOt9q"}},56:function(e,a,t){e.exports={title:"HomePage_title__1gT9s"}},59:function(e,a,t){e.exports=t.p+"static/media/skayp-call.8a6a4544.mp3"},60:function(e,a,t){e.exports=t.p+"static/media/toot.1e3e7b81.mp3"},63:function(e,a,t){e.exports=t(109)},95:function(e,a){},97:function(e,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.bb906e79.chunk.js.map