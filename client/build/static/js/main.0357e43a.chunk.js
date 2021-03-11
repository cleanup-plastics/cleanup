(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(60),s=n.n(i),r=(n(74),n(14)),c=n(6),o=n(7),l=n(10),d=n(9),h=(n(75),n(13)),u=n(21),j=n(11),b=n.n(j),p=n(30),m=n(8),g=b.a.create({baseURL:"/api"}),v=function(e){throw e},O={service:g,handleUpload:function(e){return g.post("/upload",e).then((function(e){return e.data})).catch(v)},createEvent:function(e){return g.post("/events",e).then((function(e){return e.data})).catch(v)},updateProfile:function(e){return g.post("/profile/user/",e).then((function(e){return e.data})).catch(v)}},f=n(2),x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={title:"",description:"",imageUrl:"",time:"",date:"",location:"",street:"",city:"",country:"",redirect:null},e.handleChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(u.a)({},n,a))},e.handleFileUpload=function(t){var n=new FormData;n.append("imageUrl",t.target.files[0]),O.handleUpload(n).then((function(t){e.setState({imageUrl:t.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},e.handleSubmit=function(t){t.preventDefault(),b.a.post("/api/events",{title:e.state.title,description:e.state.description,imageUrl:e.state.imageUrl,location:e.state.location,street:e.state.street,city:e.state.city,time:e.state.time,date:e.state.date,country:e.state.country,owner:e.props.user._id}).then((function(){e.setState({title:"",description:"",time:"",date:"",imageUrl:"",location:"",street:"",city:"",country:""})})).then((function(){e.setState({redirect:"/events"})}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;console.log("logging the props: ",this.props.user._id);var t=p.map((function(e){return Object(f.jsx)("option",{value:e,children:e},e)}));return this.state.redirect?Object(f.jsx)(h.a,{to:this.state.redirect}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Create a new event!"}),Object(f.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(f.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(f.jsx)("input",{type:"text",id:"title",name:"title",value:this.state.title,onChange:this.handleChange,required:!0}),Object(f.jsx)("label",{htmlFor:"description",children:"Description: "}),Object(f.jsx)("textarea",{name:"description",id:"description",cols:"30",rows:"8",value:this.state.description,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"date",children:"Date: "}),Object(f.jsx)("input",{type:"date",id:"date",name:"date",value:this.state.date,onChange:this.handleChange,required:!0}),Object(f.jsx)("label",{htmlFor:"time",children:"Time: "}),Object(f.jsx)("input",{type:"time",id:"time",name:"time",value:this.state.time,onChange:this.handleChange,required:!0}),Object(f.jsx)("label",{htmlFor:"image",children:"Image: "}),Object(f.jsx)("input",{type:"file",id:"image",name:"image",onChange:function(t){return e.handleFileUpload(t)}}),Object(f.jsx)("label",{htmlFor:"location",children:"Name of location: "}),Object(f.jsx)("input",{type:"text",id:"location",name:"location",value:this.state.location,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"street",children:"Street: "}),Object(f.jsx)("input",{type:"text",id:"street",name:"street",value:this.state.street,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"city",children:"City: "}),Object(f.jsx)("input",{type:"text",id:"city",name:"city",value:this.state.city,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"country",children:"Country: "}),Object(f.jsxs)("select",{name:"country",id:"country",value:this.state.country,onChange:this.handleChange,children:[Object(f.jsx)("option",{value:"",children:"All"}),t]}),Object(f.jsx)("button",{type:"submit",children:"Post this event!"})]}),Object(f.jsx)(m.b,{to:"/events",children:"Back to events"})]})}}]),n}(a.Component),y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).deleteEvent=function(){var t=e.props.event._id;b.a.delete("/api/events/".concat(t)).then((function(){e.props.getData()})).catch((function(e){console.log(e)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:this.props.event.description}),Object(f.jsxs)("p",{children:["Date: ",this.props.event.date]}),Object(f.jsxs)("p",{children:["Time: ",this.props.event.time]}),Object(f.jsxs)("p",{children:["Location: ",this.props.event.location]}),Object(f.jsxs)("p",{children:["Street: ",this.props.event.street]}),Object(f.jsx)("img",{src:this.props.event.imageUrl,alt:"event",style:{width:"200px"}}),this.props.userID===this.props.event.owner&&Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{children:Object(f.jsx)(m.b,{to:"/events/".concat(this.props.event._id,"/edit"),children:"Edit"})}),Object(f.jsx)("button",{onClick:this.deleteEvent,children:"Delete"})]})]})}}]),n}(a.Component),S=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={clickedEventId:"",toggled:!1},e.toggleEventDetails=function(t){t.preventDefault(),e.setState((function(e){return{clickedEventId:t.target.eventId.value,toggled:!e.toggled}}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:this.props.event.title}),Object(f.jsxs)("p",{children:["Country: ",this.props.event.country]}),Object(f.jsxs)("p",{children:["City: ",this.props.event.city]}),Object(f.jsxs)("form",{onSubmit:this.toggleEventDetails,children:[Object(f.jsx)("input",{type:"hidden",name:"eventId",value:this.props.event._id}),this.state.toggled?Object(f.jsx)("button",{children:"Hide details"}):Object(f.jsx)("button",{children:"Show details"})]}),this.state.toggled&&Object(f.jsx)(y,{event:this.props.event,userID:this.props.user,getData:this.props.getData})]})}}]),n}(a.Component),C=n(33),w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={viewport:{width:300,height:400,latitude:52.52,longitude:13.405,zoom:6},mounted:!1,selectedEvent:null,toggled:!1},e.onViewportChange=function(t){e.setState({viewport:Object(r.a)(Object(r.a)({},e.state.viewport),t)})},e.setSelectedEvent=function(t){e.setState({selectedEvent:t})},e.toggleEventDetails=function(t){e.setState((function(e){return{toggled:!e.toggled}}))},e.deselectEvent=function(t){e.setState({selectedEvent:null})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({mounted:!0})}},{key:"render",value:function(){var e=this;if(!this.props.events)return Object(f.jsx)(f.Fragment,{});var t=this.props.events;return Object(f.jsx)("div",{className:"mapBox",children:Object(f.jsxs)(C.c,Object(r.a)(Object(r.a)({mapboxApiAccessToken:"pk.eyJ1IjoiZWx2aWFzaSIsImEiOiJja2w1ZjFhNDgwbms4MzBwNmpmcTUzaXU5In0.tyY-4o-vyzl93U7XLFjekQ",mapStyle:"mapbox://styles/mapbox/streets-v11"},this.state.viewport),{},{onViewportChange:function(t){e.state.mounted&&e.setState({viewport:t})},children:[t.map((function(t){return Object(f.jsx)(C.a,{latitude:t.coordinates[1],longitude:t.coordinates[0],children:Object(f.jsx)("button",{className:"marker-btn",onClick:function(){return e.setSelectedEvent(t)},children:Object(f.jsx)("img",{src:"/pointer.svg",alt:"event pointer"})})},t._id)})),this.state.selectedEvent?Object(f.jsx)(C.b,{latitude:this.state.selectedEvent.coordinates[1],longitude:this.state.selectedEvent.coordinates[0],children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:this.state.selectedEvent.title}),Object(f.jsxs)("p",{children:["Date:",this.state.selectedEvent.date]}),Object(f.jsx)("button",{onClick:function(){return e.toggleEventDetails(e.state.selectedEvent)},children:this.state.toggled?"Hide details":"Show Details"}),Object(f.jsx)("p",{children:this.state.toggled&&Object(f.jsxs)("p",{children:[this.state.selectedEvent.description," ",Object(f.jsx)("br",{}),Object(f.jsx)("b",{children:"Location:"})," ",this.state.selectedEvent.location," ",Object(f.jsx)("br",{}),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("button",{children:Object(f.jsx)(m.b,{to:"/events/".concat(this.state.selectedEvent._id),children:"Save Event"})})})]})}),Object(f.jsx)("button",{onClick:this.deselectEvent,children:"Close"})]})}):null]}))})}}]),n}(a.Component),E=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={events:[]},e.getData=function(){b.a.get("/api/events").then((function(t){console.log("response from API"),e.setState({events:t.data})})).catch((function(e){console.log(e)}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getData(),console.log("the event componentdidmount")}},{key:"render",value:function(){var e=this,t=this.props.user._id,n=this.state.events.map((function(n){return Object(f.jsx)(S,{event:n,user:t,getData:e.getData},n._id)}));return console.log("state at events.js",this.state.events),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Events"}),Object(f.jsx)("button",{children:Object(f.jsx)(m.b,{to:"/events/create",children:"Create an event!"})}),Object(f.jsx)("div",{children:n}),Object(f.jsx)("div",{children:Object(f.jsx)(w,{events:this.state.events})})]})}}]),n}(a.Component),F=function(e,t,n){return b.a.post("/api/auth/signup",{username:e,email:t,password:n}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},k=function(e,t){return b.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return console.log("response data from login",e.data),e.data})).catch((function(e){return e.response.data}))},U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={username:"",email:"",password:"",message:""},e.handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(u.a)({},a,i))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,i=n.email,s=n.password;F(a,i,s).then((function(t){t.message?e.setState({message:t.message,username:"",email:"",password:""}):(console.log(t),e.props.setUser(t),e.props.history.push("/events"))}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Signup"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(f.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username"}),Object(f.jsx)("label",{htmlFor:"email",children:"eMail: "}),Object(f.jsx)("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleChange,id:"email"}),Object(f.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(f.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password"}),Object(f.jsx)("button",{type:"submit",children:"Sign Up"}),this.state.message&&Object(f.jsx)("h3",{children:this.state.message})]})]})}}]),n}(a.Component),D=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={username:"",password:"",message:""},e.handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(u.a)({},a,i))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,i=n.password;k(a,i).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(console.log("frontent used",t),e.props.setUser(t),e.props.history.push("/events"))})).catch((function(e){return console.log(e)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Login"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(f.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username"}),Object(f.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(f.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password"}),Object(f.jsx)("button",{type:"submit",children:"Log in"}),this.state.message&&Object(f.jsx)("h3",{children:this.state.message})]})]})}}]),n}(a.Component),T=function(e){b.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)}))};function I(e){return Object(f.jsx)("div",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(m.b,{to:"/",children:"Home"})}),e.user?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("li",{children:Object(f.jsx)(m.b,{to:"/events",children:"CleanUp Events"})}),Object(f.jsx)("li",{children:Object(f.jsx)(m.b,{to:"/profile/".concat(e.user._id),children:"Profile"})}),Object(f.jsx)("li",{children:Object(f.jsx)(m.b,{to:"/",onClick:function(){return T(e)},children:"Logout"})})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("li",{children:Object(f.jsx)(m.b,{to:"/signup",children:"Signup"})}),Object(f.jsx)("li",{children:Object(f.jsx)(m.b,{to:"/login",children:"Login"})})]})]})})}var A=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={user:null,editForm:!1},e.getData=function(){var t=e.props.match.params.id;console.log(t),b.a.get("/api/profile/user/".concat(t)).then((function(t){console.log(t),e.setState({user:t.data})})).catch((function(e){console.log(e)}))},e.toggleEditForm=function(){e.setState((function(e){return{editForm:!e.editForm}}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return console.log(this.props.user.username),this.state.user?Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:this.state.user.imageUrl,alt:"your profile pic"}),Object(f.jsx)("h4",{children:this.state.user.username}),Object(f.jsx)("p",{children:this.state.user.firstName}),Object(f.jsx)("p",{children:this.state.user.lastName}),Object(f.jsx)(m.b,{to:"/profile/user/".concat(this.props.user._id),children:Object(f.jsx)("button",{onClick:this.toggleEditForm,children:"Edit Profile"})})]}):Object(f.jsx)(f.Fragment,{})}}]),n}(a.Component),N=n(18),P=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getData=function(){var e=a.props.match.params.id;b.a.get("api/profile/user/".concat(e)).then((function(e){console.log(e),a.setState({user:e.data})})).catch((function(e){console.log(e)}))},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(u.a)({},t,n))},a.handleFileUpload=function(e){var t=new FormData;t.append("imageUrl",e.target.files[0]),console.log("THIS IS FILE UPLOAD"),O.handleUpload(t).then((function(e){console.log("THIS IS THE RESPONSE",e),a.setState({imageUrl:e.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},a.handleSubmit=function(e){e.preventDefault();var t=a.props.match.params.id;console.log(a.props,"PROPS AT EDIT PROFILE",t);var n=a.state.firstName;console.log("NAME: ",n);var i=a.state.lastName;console.log("LASTNAME: ",i);var s=a.state.imageUrl;console.log("PICTURE: ",s),b.a.put("/api/profile/user/".concat(t),{firstName:n,lastName:i,imageUrl:s}).then((function(e){console.log("PUT METHOD IS DONE",e),a.setState({redirect:"/profile/".concat(a.props.user._id)})})).catch((function(e){console.log("Error while updating the profile: ",e)}))},a.state={user:null,imageUrl:"",redirect:null},a.handleChange=a.handleChange.bind(Object(N.a)(a)),a.handleFileUpload=a.handleFileUpload.bind(Object(N.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return this.state.redirect?Object(f.jsx)(h.a,{to:this.state.redirect}):Object(f.jsxs)("div",{children:[Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{htmlFor:"firstName",children:"Name: "}),Object(f.jsx)("input",{type:"text",id:"firstName",name:"firstName",value:this.state.firstName,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"lastName",children:"Last Name: "}),Object(f.jsx)("input",{type:"text",id:"lastName",name:"lastName",value:this.state.lastName,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"imageUrl",children:"Profile Picture: "}),Object(f.jsx)("input",{type:"file",id:"imageUrl",name:"imageUrl",onChange:this.handleFileUpload}),Object(f.jsx)("button",{type:"submit",children:"Save Changes"})]}),Object(f.jsx)(m.b,{to:"/profile/".concat(this.props.user._id),children:"Back"})]})}}]),n}(a.Component),M=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getData=function(){var e=a.props.match.params.id;b.a.get("/api/events/".concat(e)).then((function(e){console.log("response from GET:",e.data),a.setState({event:e.data})})).catch((function(e){console.log(e)}))},a.saveEvent=function(e){e.preventDefault();var t=a.props.match.params.id,n=a.props.user._id;console.log(t),console.log(n),b.a.put("/api/user/saveEvent",{params:{savedEvents:t,currentUser:n}}).then((function(){console.log("axios put is done"),console.log("the STATE AFTER PUT",a.state.event),a.setState({redirect:"/".concat(n,"/savedEvents")})})).catch((function(e){console.log("Error while updating the event: ",e)}))},a.state={event:{},savedEvents:null,redirect:null},a.saveEvent=a.saveEvent.bind(Object(N.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getData(),console.log("the event componentdidmount")}},{key:"render",value:function(){var e=this;return this.state.redirect?Object(f.jsx)(h.a,{to:this.state.redirect}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:this.state.event.description}),Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Date:"})," ",this.state.event.date]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Time:"}),this.state.event.time]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Location:"}),this.state.event.location]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Street:"})," ",this.state.event.street]}),Object(f.jsx)("img",{src:this.state.event.imageUrl,alt:"event",style:{width:"200px"}}),Object(f.jsxs)("form",{onSubmit:function(t){return e.saveEvent(t)},children:[Object(f.jsx)("input",{type:"hidden",id:"savedEvents",name:"savedEvents",value:this.props.user._id}),Object(f.jsx)("button",{type:"submit",children:"Add to your List"})]})]})}}]),n}(a.Component),L=n(40),B=n.n(L),R=n(62),G=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={events:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getData(),console.log("the event componentdidmount")}},{key:"getData",value:function(){var e=Object(R.a)(B.a.mark((function e(){var t,n,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,console.log(t),e.prev=2,e.next=5,b.a.get("/api/".concat(t,"/savedEvents"));case 5:return n=e.sent,e.next=8,n;case 8:a=e.sent,console.log(a,"response at savedevents FE"),this.setState({events:a.data}),console.log("new state",this.state.events),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[2,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return this.state.events&&(e=this.state.events.map((function(e,t){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:e.title}),Object(f.jsxs)("p",{children:["Location: ",e.location]}),Object(f.jsxs)("p",{children:["City: ",e.city]}),Object(f.jsxs)("p",{children:["Date: ",e.date]}),Object(f.jsxs)("p",{children:["Time: ",e.time]})]},t)}))),Object(f.jsx)("div",{children:e})}}]),n}(a.Component),H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getData=function(){var e=a.props.match.params.id;b.a.get("/api/events/".concat(e)).then((function(e){a.setState({event:e.data})})).catch((function(e){console.log(e)}))},a.handleChange=function(e){var t=e.target.name,n=e.target.value,i=a.state.event;i[t]=n,a.setState({event:i})},a.handleFileUpload=function(e){var t=new FormData;t.append("imageUrl",e.target.files[0]),console.log("hello from UPLOAD!"),O.handleUpload(t).then((function(e){console.log("hello from response!",e),a.setState({imageUrl:e.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},a.handleSubmit=function(e){e.preventDefault();var t=a.props.match.params.id,n=a.state.event,i=n.title,s=n.date,r=n.time,c=n.description,o=n.location,l=n.street,d=n.city,h=n.country,u=a.state.imageUrl;console.log("imageurl:",u),b.a.put("/api/events/".concat(t),{title:i,date:s,time:r,description:c,location:o,street:l,city:d,country:h,imageUrl:u}).then((function(){console.log("axios put is done"),console.log("the STATE AFTER PUT",a.state.event),a.setState({redirect:"/events"})})).catch((function(e){console.log("Error while updating the event: ",e)}))},a.state={event:null,redirect:null,imageUrl:""},a.handleChange=a.handleChange.bind(Object(N.a)(a)),a.handleFileUpload=a.handleFileUpload.bind(Object(N.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this,t=p.map((function(e){return Object(f.jsx)("option",{value:e,children:e},e)}));return this.state.redirect?Object(f.jsx)(h.a,{to:this.state.redirect}):this.state.event?Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Edit this event:"}),Object(f.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(f.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(f.jsx)("input",{type:"text",id:"title",name:"title",value:this.state.event.title,onChange:this.handleChange,required:!0}),Object(f.jsx)("label",{htmlFor:"description",children:"Description: "}),Object(f.jsx)("textarea",{name:"description",id:"description",cols:"30",rows:"8",value:this.state.event.description,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"date",children:"Date: "}),Object(f.jsx)("input",{type:"date",id:"date",name:"date",value:this.state.event.date,onChange:this.handleChange,required:!0}),Object(f.jsx)("label",{htmlFor:"time",children:"Time: "}),Object(f.jsx)("input",{type:"time",id:"time",name:"time",value:this.state.event.time,onChange:this.handleChange,required:!0}),Object(f.jsx)("label",{htmlFor:"image",children:"Image: "}),Object(f.jsx)("input",{type:"file",id:"image",name:"image",onChange:function(t){return e.handleFileUpload(t)}}),Object(f.jsx)("label",{htmlFor:"location",children:"Name of location: "}),Object(f.jsx)("input",{type:"text",id:"location",name:"location",value:this.state.event.location,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"street",children:"Street: "}),Object(f.jsx)("input",{type:"text",id:"street",name:"street",value:this.state.event.street,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"city",children:"City: "}),Object(f.jsx)("input",{type:"text",id:"city",name:"city",value:this.state.event.city,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"country",children:"Country: "}),Object(f.jsxs)("select",{name:"country",id:"country",value:this.state.event.country,onChange:this.handleChange,children:[Object(f.jsx)("option",{value:"",children:"All"}),t]}),Object(f.jsx)("button",{type:"submit",children:"Edit"})]}),Object(f.jsx)(m.b,{to:"/events",children:"Back to events"})]}):Object(f.jsx)(f.Fragment,{})}}]),n}(a.Component),z=(n(118),n(69)),_=n.p+"static/media/image1.f86562ed.jpg",q=n.p+"static/media/image2.d8048ffb.jpg",J=n.p+"static/media/image3.d25b1944.jpg",K=n.p+"static/media/image4.f88dd7e4.jpg",V=n.p+"static/media/image5.8c06268f.jpg",W=n.p+"static/media/image6.2b6adda9.jpg",Z=n(68),Y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={accordionToggled:!1,clickedAccordionItem:""},e.toggleAccordion=function(t){console.log("acc-ID:",t.target.value),e.setState((function(e){return{accordionToggled:!e.accordionToggled,clickedAccordionItem:t.target.value}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)("header",{children:Object(f.jsx)("div",{className:"header-img"})}),Object(f.jsxs)("div",{className:"section",children:[Object(f.jsx)("h1",{children:"Welcome to cleanup - aiming for a plastic-free world"}),Object(f.jsx)("p",{children:"A recent study released by the 5 Gyres Institute estimates that there are currently 5.25 trillion plastic particles in the ocean. Sources of this waste are wide ranging including plastic fishing nets, food and beverage containers, microbeads from personal care items, cosmetics, straws, and bags just to name a few.. It is estimated that ingestion of plastic kills 1 million marine birds and 100,000 marine animals each year. It is more than a tremendous plastic problem in our food chain, plastics entangle marine animals and make movement impossible - killed by plastic bottles, can holders, plastic based fishing nets, because we have failed to recycle properly. Only 12% of our plastic waste will be recycled the rest goes into landfills or into the ocean.."}),Object(f.jsx)("a",{href:"https://www.5gyres.org/faq",target:"blank",children:"Read more"})]}),Object(f.jsxs)("div",{className:"section",children:[Object(f.jsx)("h2",{children:"What can you do?"}),Object(f.jsxs)("div",{className:"flex-container",children:[Object(f.jsxs)("div",{className:"flex-column info-box",children:[Object(f.jsx)("h3",{children:"Cleanup events"}),Object(f.jsx)("p",{children:"Join or organise a cleanup event in your neighbourhood or during your holidays!"})]}),Object(f.jsxs)("div",{className:"flex-column info-box",children:[Object(f.jsx)("h3",{children:"Avoid using plastic"}),Object(f.jsx)("p",{children:"Reduce the amount of plastic that you use and start transitioning to a zero-waste lifestyle!"})]})]})]}),Object(f.jsxs)("div",{className:"section",children:[Object(f.jsx)("h2",{children:"Some impressions from our cleanup events:"}),Object(f.jsxs)(z.a,{breakPoints:[{width:1,itemsToShow:1},{width:550,itemsToShow:2,itemsToScroll:1},{width:768,itemsToShow:3},{width:1200,itemsToShow:4}],children:[Object(f.jsx)("img",{src:_,alt:"no pic",className:"slider-img"}),Object(f.jsx)("img",{src:q,alt:"no pic",className:"slider-img"}),Object(f.jsx)("img",{src:J,alt:"no pic",className:"slider-img"}),Object(f.jsx)("img",{src:K,alt:"no pic",className:"slider-img"}),Object(f.jsx)("img",{src:V,alt:"no pic",className:"slider-img"}),Object(f.jsx)("img",{src:W,alt:"no pic",className:"slider-img"})]})]}),Object(f.jsx)("div",{className:"section flex-column",children:Z.map((function(t){return Object(f.jsxs)("div",{className:"accordion-container",children:[Object(f.jsx)("button",{onClick:e.toggleAccordion,value:t.id,children:t.label}),e.state.accordionToggled&&Object(f.jsx)("p",{children:t.content})]},t.id)}))})]})}}]),n}(a.Component),Q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={user:e.props.user},e.setUser=function(t){e.setState({user:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)(I,{user:this.state.user,setUser:this.setUser}),Object(f.jsx)(h.b,{exact:!0,path:"/",component:Y}),Object(f.jsx)(h.b,{exact:!0,path:"/events",render:function(t){return e.state.user?Object(f.jsx)(E,Object(r.a)({user:e.state.user},t)):Object(f.jsx)(h.a,{to:"/login"})}}),Object(f.jsx)(h.b,{exact:!0,path:"/events/create",render:function(t){return Object(f.jsx)(x,Object(r.a)({user:e.state.user},t))}}),Object(f.jsx)(h.b,{exact:!0,path:"/events/:id",render:function(t){return Object(f.jsx)(M,Object(r.a)({user:e.state.user},t))}}),Object(f.jsx)(h.b,{exact:!0,path:"/:id/savedEvents",render:function(t){return Object(f.jsx)(G,Object(r.a)({user:e.state.user},t))}}),Object(f.jsx)(h.b,{exact:!0,path:"/events/:id/edit",render:function(e){return Object(f.jsx)(H,Object(r.a)({},e))}}),Object(f.jsx)(h.b,{exact:!0,path:"/signup",render:function(t){return Object(f.jsx)(U,Object(r.a)({setUser:e.setUser},t))}}),Object(f.jsx)(h.b,{exact:!0,path:"/login",render:function(t){return Object(f.jsx)(D,Object(r.a)({setUser:e.setUser},t))}}),Object(f.jsx)(h.b,{exact:!0,path:"/profile/:id",render:function(t){return Object(f.jsx)(A,Object(r.a)({user:e.state.user},t))}}),Object(f.jsx)(h.b,{exact:!0,path:"/profile/user/:id",render:function(t){return Object(f.jsx)(P,Object(r.a)({user:e.state.user},t))}})]})}}]),n}(a.Component),X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,121)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};b.a.get("/api/auth/loggedin").then((function(e){var t=e.data;s.a.render(Object(f.jsx)(m.a,{children:Object(f.jsx)(Q,{user:t})}),document.getElementById("root"))})).catch((function(e){console.log(e)})),X()},30:function(e){e.exports=JSON.parse('["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands (the)","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands (the)","Colombia","Comoros (the)","Congo (the Democratic Republic)","Cook Islands (the)","Costa Rica","Croatia","Cuba","Cura\xe7ao","Cyprus","Czechia","C\xf4te d\'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic (the)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands (the) [Malvinas]","Faroe Islands (the)","Fiji","Finland","France","French Guiana","French Polynesia","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People\'s Republic of)","Korea (the Republic of)","Kuwait","Kyrgyzstan","Lao People\'s Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands (the)","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (the Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)","New Caledonia","New Zealand","Nicaragua","Niger (the)","Nigeria","Norfolk Island","Northern Mariana Islands (the)","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines (the)","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation (the)","Rwanda","R\xe9union","Saint Barth\xe9lemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan (the)","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands (the)","Tuvalu","Uganda","Ukraine","United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)","United States Minor Outlying Islands (the)","United States of America (the)","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Vietnam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"]')},68:function(e){e.exports=JSON.parse('[{"label":"WHAT ARE THE TOP FIVE SOURCES OF SINGLE-USE PLASTIC?","content":"plastic bags, water bottles, to-go containers, takeaway cups, straws","id":1},{"label":"IS COMPOSTABLE PLASTIC BETTER?","content":"Not exactly. Yes, it\'s made from non-petroleum sources. But you need a large composting facility to break down soy, bagasse (made from sugar) and PLA (made from corn) plastic. Because PLA is hard to break down, some recycling facilities consider it a contaminant. Only PHA (made from bacteria) is marine degradable \u2014 and only to a point: Within six months, it degrades by 30% in warm, tropical waters. New materials are being developed from natural sources that could eventually provide viable, biodegradable alternatives to petroleum-based plastic. These include methane, mushrooms, and even milk!","id":2},{"label":"WHERE DOES ALL THE PLASTIC GO? ","content":"Most plastic are made from petroleum and built to last \u2014 some for thousands of years. In the ocean, sunlight and waves break down most plastics into small microparticles, which never truly biodegrade. The result? 5 Gyres led research found there is an estimated 5.25 trillion particles of \u201cplastic smog\u201d weighing 270,000 tons in our oceans worldwide. Once in the water, microplastics attract persistent organic pollutants like flame retardants and other industrial chemicals linked to human health problems \u2014 even cancer. They can be one million times more toxic than the water around them. These pollutants can work their way up the food chain \u2014 and onto our plates.","id":3}]')},74:function(e,t,n){},75:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.0357e43a.chunk.js.map