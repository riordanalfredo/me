(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},149:function(e,t,a){e.exports=a.p+"static/media/resume.dfeb341d.pdf"},240:function(e,t,a){},258:function(e,t,a){},260:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),c=a.n(r),i=a(8),o=a(9),s=a(11),m=a(10),u=a(12),d=a(264),E=a(238),h=a(239),p=a(30),b=a.n(p),f=(a(103),a(84)),g=a.n(f),v=a(85),y=a.n(v),k=a(86),w=a.n(k),O=a(21),x=a(97),j=a(267),S=a(262),N=a(266),C=a(263),A=a(88),I=a(265),M=a(87),R=a.n(M);A.bootstrapUtils.addStyle(I.a,"custom");var z=function(e){function t(e,a){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e,a))).handleClick=n.handleClick.bind(Object(O.a)(Object(O.a)(n))),n.state={size:"300px",isLoading:!1,styling:R.a},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){var e=this;this.setState({isLoading:!0}),setTimeout(function(){e.setState({isLoading:!1})},2e3)}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props,n=t.text,r=(t.link,t.download,t.extraText);return l.a.createElement("a",{href:a(149),download:"resume.pdf"},l.a.createElement(I.a,{bsStyle:"custom",disabled:e,onClick:e?null:this.handleClick,bsSize:"lg"},e?n.toLowerCase()+"ing...":n,e?null:r))}}]),t}(n.Component),T=function(e){var t=e.id,a=e.label,n=e.help,r=Object(x.a)(e,["id","label","help"]);return l.a.createElement(j.a,{controlId:t},l.a.createElement(S.a,null,a),l.a.createElement(N.a,r),n&&l.a.createElement(C.a,null,n))},D=function(e){function t(e,a){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e,a))).handleChange=n.handleChange.bind(Object(O.a)(Object(O.a)(n))),n.state={value:""},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getValidationState",value:function(){var e=this.state.value.length;return e>10?"success":e>5?"warning":e>0?"error":null}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return l.a.createElement("form",{className:"hide"},l.a.createElement(j.a,{controlId:"formBasicText",validationState:this.getValidationState(),bsSize:"lg"},l.a.createElement(S.a,null,"Your Name"),l.a.createElement(N.a,{type:"text",value:this.state.value,placeholder:"ex. Riordan D Alfredo",onChange:this.handleChange}),l.a.createElement(N.a.Feedback,null)),l.a.createElement(T,{id:"formControlsEmail",type:"text",label:"Email Address",placeholder:"ex. abc@abc.com",bsSize:"lg"}),l.a.createElement(j.a,{controlId:"formControlsSelect",bsSize:"lg"},l.a.createElement(S.a,null,"Occasion"),l.a.createElement(N.a,{componentClass:"select",placeholder:"select"},l.a.createElement("option",{value:"select",defaultValue:!0,disabled:!0},"Choose one..."),l.a.createElement("option",{value:"hire"},"Hire me!"),l.a.createElement("option",{value:"project"},"Project Discussion"),l.a.createElement("option",{value:"appreciation"},"Project Appreciation"),l.a.createElement("option",{value:"other"},"Other..."))),l.a.createElement(j.a,{controlId:"formControlsTextarea",bsSize:"lg"},l.a.createElement(S.a,null,"Message"),l.a.createElement(N.a,{componentClass:"textarea"})),l.a.createElement(z,{type:"submit",bsStyle:"warning",bsSize:"lg",block:!0},"Submit"))}}]),t}(n.Component),U=a(92),L=a.n(U),H=a(93),J=a.n(H),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={list:[{key:1,title:"Kimply Colour Game",linkUrl:"https://play.google.com/store/apps/details?id=com.kimplycolor.game&hl=en_US",desc:"A simple coloring game",bg:"https://picsum.photos/400/500/?random"},{key:2,title:"Switch Puzzle Game",linkUrl:"https://bit.do/switchy",desc:"A Puzzle game web application",bg:"https://picsum.photos/400/500/?image=0"},{key:3,title:"PPIA Monash Survival Guide",linkUrl:"https://bit.do/survivalguide",desc:"Survival Guide Web Application ",bg:"https://picsum.photos/400/500/?image=19"}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.list,t=this.props.setting;return l.a.createElement(L.a,t,e.map(function(e){return l.a.createElement("div",{key:e.key,style:J.a["card-carousel"]},l.a.createElement(B,{title:e.title,linkUrl:e.linkUrl,desc:e.desc,bg:e.bg}))}))}}]),t}(n.Component),B=function(e){var t=e.title,a=e.bg,n=e.linkUrl,r=e.desc,c=(e.languages,{background:"-webkit-linear-gradient(0.9turn,#c39d63, #fad8a0)",backgroundImage:"url(".concat(a,")")});return l.a.createElement("div",{className:"card"},l.a.createElement("a",{href:n},l.a.createElement("div",{className:"card-pic",style:c})),l.a.createElement("div",{className:"card-desc"},l.a.createElement("a",{href:n},l.a.createElement("h2",null,t)),l.a.createElement("p",null,r)))},P=a(15),_=a.n(P),F=a(31),G=a.n(F),V=a(94),Y=a.n(V),q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(K,null),l.a.createElement(X,null),l.a.createElement(Q,null))}}]),t}(n.Component),K=function(){return l.a.createElement(_.a,{bottom:!0},l.a.createElement("p",{className:G.a.download},"Please kindly download my resume below for your reference."),l.a.createElement(z,{text:"DOWNLOAD",extraText:" RESUME",link:"../MyResume/resume.pdf",download:"resume.pdf"}))},X=function(){return l.a.createElement(_.a,{bottom:!0},l.a.createElement("div",{className:G.a.theBox},l.a.createElement("h2",null,"Education "),l.a.createElement(Y.a,{style:{padding:"2vh"}},l.a.createElement(E.a,null,l.a.createElement(h.a,{md:4},l.a.createElement("h4",null,"2015-2016"),l.a.createElement("b",null,"Major in Science Studies"),l.a.createElement("p",null,"Saint Joseph High School ",l.a.createElement("br",null)," Malang, East Java"),l.a.createElement("i",null,"Indonesia")),l.a.createElement(h.a,{md:4},l.a.createElement("h4",null,"2016-2017"),l.a.createElement("b",null,"Diploma of Engineering, Engineering"),l.a.createElement("p",null,"Monash College ",l.a.createElement("br",null)," Melbourne, Victoria "),l.a.createElement("i",null,"Australia")),l.a.createElement(h.a,{md:4},l.a.createElement("h4",null,"2017-2019"),l.a.createElement("b",null,"Bachelor of Software Engineering (Honours)"),l.a.createElement("p",null,"Monash University ",l.a.createElement("br",null)," Melbourne, Victoria "),l.a.createElement("i",null,"Australia"))))))},Q=function(){return l.a.createElement(_.a,{bottom:!0},l.a.createElement("div",{className:G.a.theBox},l.a.createElement("h2",null,"Research Studies"),l.a.createElement("div",{className:G.a.research},l.a.createElement("h4",null,"Vulnerability Analysis of Hybrid Android Apps"),l.a.createElement("b",null," (Monash Summer Scholarship 2018)"),l.a.createElement("p",null,"Hybrid Android apps contain functions implemented in Javascript, which makes it possible to benefit from traditional web-based techniques. While there are already quite e few tools that can be used for detecting Javascript-related vulnerabilities in traditional web applications, there are no available techniques that can be used for detecting Javascript related vulnerabilities in hybrid Android apps.",l.a.createElement("br",null),"The output of this project is expected to be a toolchain that (1) extracts the Javascript code from Android apps and (2) analyses the extracted code for identifying potential vulnerabilities."),l.a.createElement("small",null,l.a.createElement("i",null,"Currently the project is under process. The result will be published in here.")))))},Z=(a(240),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={planets:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"solarSystem"},l.a.createElement($,{desc:"Full Stack Framework"}),l.a.createElement(ee,{label:"MongoDB",logo:"fas fa-database",line:350,size:90,duration:20,type:1,extra:5}),l.a.createElement(ee,{label:"ExpressJS",logo:"fab fa-node-js",line:500,size:90,duration:18,type:2,extra:20}),l.a.createElement(ee,{label:"NodeJS",logo:"fab fa-node-js",line:600,size:100,duration:40,type:3,extra:70}),l.a.createElement(ee,{label:"React",logo:"fab fa-react",line:750,size:80,duration:15,type:4,extra:75}))}}]),t}(n.Component)),$=function(e){var t=e.desc;return l.a.createElement("div",{className:"sun"},l.a.createElement("h1",null,t))},ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={label:e.label,logo:e.logo,line:e.line,size:e.size,type:e.type,duration:e.duration,extra:e.extra},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.label,a=e.logo,n=e.line,r=e.size,c=e.duration,i=e.type,o=e.extra,s={position:"relative",top:"50%",left:"50%",margin:"-"+r/2+"px",width:r+"px",height:r+"px",padding:r/6+"px",textAlign:"center",backgroundColor:"white",borderRadius:"50%",animation:"rot"+i+" "+c+"s infinite linear"},m={position:"relative",margin:"-"+(.8*parseInt(n)+parseInt(o))+"px auto",border:"solid 1px grey",width:n+"px",height:n+"px",borderRadius:"50%"};return l.a.createElement("div",{style:m},l.a.createElement("div",{className:"planet",style:s},l.a.createElement("i",{className:a}),l.a.createElement("br",null),l.a.createElement("label",null,t)))}}]),t}(n.Component),te=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("svg",{width:"100",height:"10"},l.a.createElement("defs",null,l.a.createElement("linearGradient",{id:"linear",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},l.a.createElement("stop",{offset:"0%",stopColor:"#c39d63"}),l.a.createElement("stop",{offset:"100%",stopColor:"#fad8a0"}))),l.a.createElement("rect",{x:"0",y:"0",width:"600",height:"200",fill:"url(#linear)"}))}}]),t}(n.Component),ae=a(96),ne=a.n(ae),le=(a(242),300),re=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={loading:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;document.getElementById("footer").style.bottom=e<t?"-60px":"0px",e=t;var a=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.getElementById("progressBar").style.width=a+"%"}}},{key:"render",value:function(){return this.state.loading?null:l.a.createElement("div",{className:"App"},l.a.createElement("main",null,l.a.createElement(ve,null),l.a.createElement(b.a,{minDeviceWidth:1224},l.a.createElement(b.a,{minWidth:1224},l.a.createElement(d.a,{className:"introduction",id:"introduction"},l.a.createElement(E.a,{className:"full-height"},l.a.createElement(me,{size:1224})),l.a.createElement(E.a,null,l.a.createElement(_.a,null,l.a.createElement(oe,{pic:ue})))),l.a.createElement(de,null),l.a.createElement(Ee,null),l.a.createElement(be,null),l.a.createElement(fe,null)),l.a.createElement(b.a,{minWidth:le,maxWidth:1224},l.a.createElement(d.a,{className:"introduction",id:"introduction"},l.a.createElement(E.a,{className:"full-height"},l.a.createElement(me,{size:le})),l.a.createElement(E.a,null,l.a.createElement(_.a,null,l.a.createElement(oe,{pic:ue})))),l.a.createElement(de,{mobile:!0}),l.a.createElement(Ee,null),l.a.createElement(be,null),l.a.createElement(fe,null))),l.a.createElement(b.a,{maxDeviceWidth:1224},l.a.createElement(d.a,{className:"introduction",id:"introduction"},l.a.createElement(E.a,null,l.a.createElement(me,null))),l.a.createElement(de,{mobile:!0}),l.a.createElement(Ee,null),l.a.createElement(be,null),l.a.createElement(fe,null))),l.a.createElement(ye,{id:"footer"}))}}]),t}(n.Component),ce=function(e){var t=e.position;return l.a.createElement("span",{className:"anchor",id:t}," ")},ie=function(e){var t=e.name,a=e.link;return l.a.createElement("a",{href:a},l.a.createElement("h3",{className:"anchorLink"},t))},oe=function(){return l.a.createElement("div",{className:"card-horizontal"},l.a.createElement(ue,null),l.a.createElement(_.a,{left:!0},l.a.createElement(se,null)))},se=function(){return l.a.createElement("div",{className:"card-content"},l.a.createElement(te,null),l.a.createElement("div",{className:"content"},l.a.createElement("p",null,"Welcome to my portfolio website. This website is under construction at the moment. It is planned to be finished by ",l.a.createElement("b",null,"30 November 2018"),"."),l.a.createElement("h3",null,"STAY TUNED!")))},me=function(e){var t;return l.a.createElement("div",{className:"myName "+(t=e,{size:t.size}.valueOf()==={mobile:le}.valueOf()?"hidden":"show")},l.a.createElement("p",{align:"center"},"Melbourne",l.a.createElement("img",{alt:"Australia flag",src:w.a,width:30,style:{borderRadius:"3px",border:"3px white"}})," Based"),l.a.createElement("h1",null,"RIORDAN"),l.a.createElement("h1",null,"DERVIN"),l.a.createElement("h1",null,"ALFREDO"),l.a.createElement("h3",null,"freelance full-stack developer"))},ue=function(){return l.a.createElement("div",{className:"picture"},l.a.createElement("div",{id:"pp"}))},de=function(e){var t=e.mobile,a={dots:!0,infinite:!0,speed:500,slidesToShow:t?1:3,slidesToScroll:1,arrows:!t};return l.a.createElement("div",{className:"projects"},l.a.createElement(ce,{position:"projects"}),l.a.createElement(d.a,null,l.a.createElement(te,null),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"PROJECTS"),l.a.createElement(_.a,{bottom:!0}," ",l.a.createElement(W,{setting:a}),"  "))))},Ee=function(){return l.a.createElement("div",{className:"skills white"},l.a.createElement(ce,{position:"skills"}),l.a.createElement(d.a,null,l.a.createElement(te,null),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"SKILLS & INTERESTS"),l.a.createElement(_.a,{bottom:!0},l.a.createElement("h2",null,"My Full-Stack Framework"),l.a.createElement(Z,null),l.a.createElement("p",null,"Diagram above is MERN framework for my Full-Stack Web Development. ")),l.a.createElement(_.a,{bottom:!0},l.a.createElement(te,null),l.a.createElement("h2",null,"Languages and Software"),l.a.createElement(he,null)),l.a.createElement(_.a,{bottom:!0},l.a.createElement(te,null),l.a.createElement("h2",null,"Interests and Hobbies"),l.a.createElement(pe,null)))))},he=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={skills:[{key:0,name:"HTML5",logo:"fab fa-html5"},{key:1,name:"CSS3",logo:"fab fa-css3"},{key:2,name:"JavaScript",logo:"fab fa-js-square"},{key:3,name:"Python",logo:"fab fa-python"},{key:4,name:"Java",logo:"fab fa-java"},{key:5,name:"GitHub",logo:"fab fa-github"},{key:6,name:"GitLab",logo:"fab fa-gitlab"},{key:7,name:"WordPress",logo:"fab fa-wordpress"},{key:8,name:"Windows",logo:"fab fa-windows"},{key:9,name:"Linux",logo:"fab fa-linux"},{key:10,name:"MacOS",logo:"fab fa-apple"},{key:11,name:"Docker",logo:"fab fa-docker"}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.skills,t={color:"#fad8a0",fontSize:"7em",transition:"1s"},a={margin:"30px auto"};return l.a.createElement("div",null,l.a.createElement(d.a,null,e.map(function(e){return l.a.createElement(h.a,{key:e.key,className:"otherSkills",md:3,xs:6,style:a},l.a.createElement("i",{className:e.logo,style:t}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,e.name))})))}}]),t}(n.Component),pe=function(){return l.a.createElement("div",{style:{textAlign:"center",margin:"30px auto",width:"60vw"}},l.a.createElement("p",null,"I am interested in Artificial Intelligence (AI), User Experience & User Interface (UI & UX), Software testing, and Astronomy topics. In leisure time, I create graphic design, doodling, and playing video / board games. Sometimes, I read ",l.a.createElement("a",{href:"https://medium.com/"},"Medium")," to gain knowledge and read memes / graphic novels to refresh my mind."))},be=function(){return l.a.createElement("div",{className:"resume"},l.a.createElement(ce,{position:"resume"}),l.a.createElement(d.a,null,l.a.createElement(te,null),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"RESUME & EDUCATION"),l.a.createElement(q,null))))},fe=function(){return l.a.createElement("div",{className:"contact white"},l.a.createElement(ce,{position:"contact"}),l.a.createElement(d.a,null,l.a.createElement(te,null),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"CONTACT ME"),l.a.createElement("div",{className:"contact-form"},l.a.createElement(D,null),l.a.createElement(_.a,{bottom:!0},l.a.createElement(ge,null))))))},ge=function(){var e=encodeURI("Hello from /me website");return l.a.createElement("div",{className:"contact-temp"},l.a.createElement(d.a,null,l.a.createElement(E.a,{style:{textAlign:"center"}},l.a.createElement(h.a,{md:4},l.a.createElement("a",{href:"mailto:riordan.alfredo@gmail.com"},l.a.createElement("i",{className:"material-icons contact-icon"},"email")),l.a.createElement("p",null,"Email me")),l.a.createElement(h.a,{md:4},l.a.createElement("a",{href:"https://www.linkedin.com/in/riordan-alfredo/"},l.a.createElement("i",{className:"fab fa-linkedin-in contact-icon"}," ")),l.a.createElement("p",null,"Connect me in LinkedIn")),l.a.createElement(h.a,{md:4},l.a.createElement("a",{href:"https://wa.me/61449091145/?text="+e},l.a.createElement("i",{className:"fab fa-whatsapp contact-icon"}," ")),l.a.createElement("p",null,"Chat in WhatsApp")))))},ve=function(){return l.a.createElement("div",{className:"header",id:"navbar"},l.a.createElement(d.a,null,l.a.createElement(E.a,null,l.a.createElement(h.a,{md:2,xs:2},l.a.createElement("a",{href:"#introduction"},l.a.createElement("img",{alt:"mylogo",src:y.a,width:110}))),l.a.createElement(h.a,{md:10,className:"text-right",xsHidden:!0,smHidden:!0},l.a.createElement(ie,{name:"HOME",link:"#introduction"}),l.a.createElement(ie,{name:"PROJECTS",link:"#projects"}),l.a.createElement(ie,{name:"SKILLS",link:"#skills"}),l.a.createElement(ie,{name:"RESUME",link:"#resume"}),l.a.createElement(ie,{name:"CONTACT",link:"#contact"})),l.a.createElement(h.a,{xs:10,mdHidden:!0,lgHidden:!0},"EY"))),l.a.createElement("div",{className:"progress-container"},l.a.createElement("div",{className:"progress-bar",id:"progressBar"}," ")))},ye=function(e){var t=e.id;return l.a.createElement("footer",{id:t},"Developed with React",l.a.createElement(ne.a,null,l.a.createElement("img",{alt:"reactlogo",src:g.a,width:30})),l.a.createElement("br",null),"by ",l.a.createElement("b",null," Riordan Dervin Alfredo "),"\xa9 2018")},ke=re;a(258);c.a.render(l.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",function(){var e="".concat("/me","/service-worker.js");navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})})},31:function(e,t,a){e.exports={theBox:"MyResume_theBox__EJEC3",download:"MyResume_download__3SRnh",research:"MyResume_research__20PcJ"}},84:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},85:function(e,t,a){e.exports=a.p+"static/media/blank.3259ebad.png"},86:function(e,t,a){e.exports=a.p+"static/media/aus.6f3c76ba.png"},87:function(e,t,a){},93:function(e,t,a){},98:function(e,t,a){e.exports=a(260)}},[[98,2,1]]]);
//# sourceMappingURL=main.68bc678e.chunk.js.map