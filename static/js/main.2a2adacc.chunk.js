(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){},114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(50),c=a.n(r),i=a(9),o=a(10),m=a(12),s=a(11),u=a(13),d=a(119),E=a(120),p=a(121),h=a(19),f=a.n(h),b=(a(65),a(51)),g=a.n(b),v=a(52),k=a.n(v),y=a(53),O=a.n(y),w=a(15),N=a(59),j=a(124),x=a(117),S=a(123),C=a(118),z=a(54),I=a(122);z.bootstrapUtils.addStyle(I.a,"custom");var R=function(e){function t(e,a){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(s.a)(t).call(this,e,a))).handleClick=n.handleClick.bind(Object(w.a)(Object(w.a)(n))),n.state={isLoading:!1},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){var e=this;this.setState({isLoading:!0}),setTimeout(function(){e.setState({isLoading:!1})},2e3)}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props,a=t.text,n=t.link;return l.a.createElement("a",{href:n},l.a.createElement(I.a,{bsStyle:"custom",disabled:e,onClick:e?null:this.handleClick,bsSize:"lg",block:!0},e?a+"ing...":a))}}]),t}(n.Component),T=function(e){var t=e.id,a=e.label,n=e.help,r=Object(N.a)(e,["id","label","help"]);return l.a.createElement(j.a,{controlId:t},l.a.createElement(x.a,null,a),l.a.createElement(S.a,r),n&&l.a.createElement(C.a,null,n))},A=function(e){function t(e,a){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(s.a)(t).call(this,e,a))).handleChange=n.handleChange.bind(Object(w.a)(Object(w.a)(n))),n.state={value:""},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getValidationState",value:function(){var e=this.state.value.length;return e>10?"success":e>5?"warning":e>0?"error":null}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return l.a.createElement("form",{className:"hide"},l.a.createElement(j.a,{controlId:"formBasicText",validationState:this.getValidationState(),bsSize:"lg"},l.a.createElement(x.a,null,"Your Name"),l.a.createElement(S.a,{type:"text",value:this.state.value,placeholder:"ex. Riordan D Alfredo",onChange:this.handleChange}),l.a.createElement(S.a.Feedback,null)),l.a.createElement(T,{id:"formControlsEmail",type:"text",label:"Email Address",placeholder:"ex. abc@abc.com",bsSize:"lg"}),l.a.createElement(j.a,{controlId:"formControlsSelect",bsSize:"lg"},l.a.createElement(x.a,null,"Occasion"),l.a.createElement(S.a,{componentClass:"select",placeholder:"select"},l.a.createElement("option",{value:"select",defaultValue:!0,disabled:!0},"Choose one..."),l.a.createElement("option",{value:"hire"},"Hire me!"),l.a.createElement("option",{value:"project"},"Project Discussion"),l.a.createElement("option",{value:"appreciation"},"Project Appreciation"),l.a.createElement("option",{value:"other"},"Other..."))),l.a.createElement(j.a,{controlId:"formControlsTextarea",bsSize:"lg"},l.a.createElement(x.a,null,"Message"),l.a.createElement(S.a,{componentClass:"textarea"})),l.a.createElement(R,{type:"submit",bsStyle:"warning",bsSize:"lg",block:!0},"Submit"))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={list:[{key:1,title:"Kimply Colour Game",linkUrl:"https://play.google.com/store/apps/details?id=com.kimplycolor.game&hl=en_US",desc:"A simple coloring game",bg:"https://picsum.photos/400/500/?random"},{key:2,title:"Switch Puzzle Game",linkUrl:"https://bit.do/switchy",desc:"Puzzle games web application",bg:"https://picsum.photos/400/500/?image=0"},{key:3,title:"PPIA Monash Survival Guide",linkUrl:"https://bit.do/survivalguide",desc:"Survival Guide Web Application ",bg:"https://picsum.photos/400/500/?image=19"}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.list;return l.a.createElement("div",null,l.a.createElement(d.a,null,l.a.createElement(E.a,null,e.map(function(e){return l.a.createElement(p.a,{key:e.key,md:4,xs:12},l.a.createElement(D,{title:e.title,linkUrl:e.linkUrl,desc:e.desc,bg:e.bg}))}))))}}]),t}(n.Component),D=function(e){var t=e.title,a=e.bg,n=e.linkUrl,r=e.desc,c={background:"-webkit-linear-gradient(0.9turn,#c39d63, #fad8a0)",backgroundImage:"url(".concat(a,")")};return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-pic",style:c}),l.a.createElement("div",{className:"card-desc"},l.a.createElement("a",{href:n},l.a.createElement("h2",null,t)),l.a.createElement("p",null,r)))},U=(a(111),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={planets:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"solarSystem"},l.a.createElement(H,{desc:"Full Stack Framework"}),l.a.createElement(M,{label:"MongoDB",logo:"fas fa-database",line:400,size:120,duration:20,type:1,extra:-25}),l.a.createElement(M,{label:"NodeJS",logo:"fab fa-node-js",line:530,size:100,duration:15,type:2,extra:40}),l.a.createElement(M,{label:"ExpressJS",logo:"fab fa-node-js",line:700,size:130,duration:40,type:3,extra:55}),l.a.createElement(M,{label:"React",logo:"fab fa-react",line:900,size:100,duration:15,type:4,extra:85}))}}]),t}(n.Component)),H=function(e){var t=e.desc;return l.a.createElement("div",{className:"sun"},l.a.createElement("h1",null,t))},M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={label:e.label,logo:e.logo,line:e.line,size:e.size,type:e.type,duration:e.duration,extra:e.extra},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.label,a=e.logo,n=e.line,r=e.size,c=e.duration,i=e.type,o=e.extra,m={position:"relative",top:"50%",left:"50%",margin:"-"+r/2+"px",width:r+"px",height:r+"px",padding:r/6+"px",textAlign:"center",backgroundColor:"white",borderRadius:"50%",animation:"rot"+i+" "+c+"s infinite linear"},s={position:"relative",margin:"-"+(.8*parseInt(n)+parseInt(o))+"px auto",border:"solid 1px grey",width:n+"px",height:n+"px",borderRadius:"50%"};return l.a.createElement("div",{style:s},l.a.createElement("div",{className:"planet",style:m},l.a.createElement("i",{className:a}),l.a.createElement("br",null),l.a.createElement("label",null,t)))}}]),t}(n.Component),W=a(24),B=a.n(W),P=a(58),G=a.n(P),J=300,F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={loading:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return this.state.loading?null:l.a.createElement("div",{className:"App"},l.a.createElement("main",null,l.a.createElement(le,null),l.a.createElement(f.a,{minDeviceWidth:1224},l.a.createElement(f.a,{minWidth:1224},l.a.createElement(d.a,{className:"introduction",id:"introduction"},l.a.createElement(E.a,{className:"full-height"},l.a.createElement(Q,{size:1224})),l.a.createElement(E.a,null,l.a.createElement(B.a,null,l.a.createElement(q,{pic:X})))),l.a.createElement(Z,null),l.a.createElement($,null),l.a.createElement(te,null),l.a.createElement(ae,null)),l.a.createElement(f.a,{minWidth:J,maxWidth:1224},l.a.createElement(d.a,{className:"introduction",id:"introduction"},l.a.createElement(E.a,null,l.a.createElement(X,null))),l.a.createElement(ae,null))),l.a.createElement(f.a,{maxDeviceWidth:1224},l.a.createElement(d.a,{className:"introduction",id:"introduction"},l.a.createElement(E.a,null,l.a.createElement(Q,null))),l.a.createElement("p",{className:"white"},l.a.createElement("i",null,"Mobile view is under development at the moment")),l.a.createElement(ae,null))),l.a.createElement(re,{id:"footer"}))}}]),t}(n.Component),K=function(e){var t=e.position;return l.a.createElement("span",{className:"anchor",id:t}," ")},V=function(e){var t=e.name,a=e.link;return l.a.createElement("a",{href:a},l.a.createElement("h3",{className:"anchorLink"},t))},Y=function(){return l.a.createElement("svg",{width:"100",height:"10"},l.a.createElement("defs",null,l.a.createElement("linearGradient",{id:"linear",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},l.a.createElement("stop",{offset:"0%",stopColor:"#c39d63"}),l.a.createElement("stop",{offset:"100%",stopColor:"#fad8a0"}))),l.a.createElement("rect",{x:"0",y:"0",width:"600",height:"200",fill:"url(#linear)"}))},q=function(){return l.a.createElement("div",{className:"card-horizontal"},l.a.createElement(X,null),l.a.createElement(B.a,{left:!0},l.a.createElement(_,null)))},_=function(){return l.a.createElement("div",{className:"card-content"},l.a.createElement(Y,null),l.a.createElement("div",{className:"content"},l.a.createElement("p",null,"Welcome to my portfolio website. This website is under construction at the moment. It is planned to be finish by ",l.a.createElement("b",null,"30 November 2018"),"."),l.a.createElement("h3",null,"STAY TUNED!")))},Q=function(e){var t;return l.a.createElement("div",{className:"myName "+(t=e,{size:t.size}.valueOf()==={mobile:J}.valueOf()?"hidden":"show")},l.a.createElement("p",null,l.a.createElement("i",null,"Hello, my name is")),l.a.createElement("h1",null,"RIORDAN"),l.a.createElement("h1",null,"DERVIN"),l.a.createElement("h1",null,"ALFREDO"),l.a.createElement("h3",null,"freelance full-stack developer"),l.a.createElement("p",{align:"center",style:{marginTop:"30px"}},"melbourne ",l.a.createElement("img",{alt:"Australia flag",src:O.a,width:30,style:{borderRadius:"3px",border:"3px white"}})," based"))},X=function(){return l.a.createElement("div",{className:"picture"},l.a.createElement("div",{id:"pp"}))},Z=function(){return l.a.createElement("div",{className:"projects"},l.a.createElement(K,{position:"projects"}),l.a.createElement(d.a,null,l.a.createElement(Y,null),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"PROJECTS"),l.a.createElement(B.a,{bottom:!0}," ",l.a.createElement(L,null),"  "))))},$=function(){return l.a.createElement("div",{className:"skills white"},l.a.createElement(K,{position:"skills"}),l.a.createElement(d.a,null,l.a.createElement(Y,null),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"SKILLS & INTERESTS"),l.a.createElement(U,null),l.a.createElement("br",null),l.a.createElement("p",null,"Diagram above is MERN framework for my Full-Stack Web Development. "),l.a.createElement(ee,null))))},ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={skills:[{name:"HTML5",logo:"fab fa-html5"},{name:"CSS3",logo:"fab fa-css3"},{name:"JavaScript",logo:"fab fa-js-square"},{name:"Python",logo:"fab fa-python"},{name:"Java",logo:"fab fa-java"},{name:"GitHub",logo:"fab fa-github"},{name:"GitLab",logo:"fab fa-gitlab"},{name:"WordPress",logo:"fab fa-wordpress"},{name:"Windows",logo:"fab fa-windows"},{name:"Linux",logo:"fab fa-linux"},{name:"MacOS",logo:"fab fa-apple"},{name:"Docker",logo:"fab fa-docker"}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.skills,t={color:"#fad8a0",fontSize:"7em",transition:"1s"},a={margin:"30px auto"};return l.a.createElement("div",null,l.a.createElement("h2",null,"OTHER NOTABLE SKILLS"),l.a.createElement(d.a,null,e.map(function(e){return l.a.createElement(p.a,{className:"otherSkills",md:3,style:a},l.a.createElement("i",{className:e.logo,style:t}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,e.name))})))}}]),t}(n.Component),te=function(){return l.a.createElement("div",{className:"resume"},l.a.createElement(K,{position:"resume"}),l.a.createElement(d.a,null,l.a.createElement(Y,null),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"RESUME & EDUCATION"))))},ae=function(){return l.a.createElement("div",{className:"contact white"},l.a.createElement(K,{position:"contact"}),l.a.createElement(d.a,null,l.a.createElement(Y,null),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"CONTACT ME"),l.a.createElement("div",{className:"contact-form"},l.a.createElement(A,null),l.a.createElement(ne,null)))))},ne=function(){var e=encodeURI("Hello from /me website");return l.a.createElement("div",{className:"contact-temp"},l.a.createElement(d.a,null,l.a.createElement(E.a,{style:{textAlign:"center"}},l.a.createElement(p.a,{md:4},l.a.createElement("a",{href:"mailto:riordan.alfredo@gmail.com"},l.a.createElement("i",{className:"material-icons contact-icon"},"email")),l.a.createElement("p",null,"Email me")),l.a.createElement(p.a,{md:4},l.a.createElement("a",{href:"https://www.linkedin.com/in/riordan-alfredo/"},l.a.createElement("i",{className:"fab fa-linkedin-in contact-icon"}," ")),l.a.createElement("p",null,"Connect me in LinkedIn")),l.a.createElement(p.a,{md:4},l.a.createElement("a",{href:"https://wa.me/61449091145/?text="+e},l.a.createElement("i",{className:"fab fa-whatsapp contact-icon"}," ")),l.a.createElement("p",null,"Chat in WhatsApp")))))},le=function(){return document.getElementById("progressBar")||(window.onscroll=function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.getElementById("progressBar").style.width=e+"%"}),l.a.createElement("div",{className:"header",id:"navbar"},l.a.createElement(d.a,null,l.a.createElement(E.a,null,l.a.createElement(p.a,{md:2,xs:2},l.a.createElement("a",{href:"#introduction"},l.a.createElement("img",{alt:"mylogo",src:k.a,width:110}))),l.a.createElement(p.a,{md:10,className:"text-right",xsHidden:!0,smHidden:!0},l.a.createElement(V,{name:"HOME",link:"#introduction"}),l.a.createElement(V,{name:"PROJECTS",link:"#projects"}),l.a.createElement(V,{name:"SKILLS",link:"#skills"}),l.a.createElement(V,{name:"RESUME",link:"#resume"}),l.a.createElement(V,{name:"CONTACT",link:"#contact"})),l.a.createElement(p.a,{xs:10,mdHidden:!0,lgHidden:!0},l.a.createElement("p",{className:"white text-right"},"HAMBURGER MENU")))),l.a.createElement("div",{className:"progress-container"},l.a.createElement("div",{className:"progress-bar",id:"progressBar"}," ")))},re=function(e){var t=e.id,a=window.pageYOffset;return window.onscroll=function(){var e=window.pageYOffset;document.getElementById("footer").style.bottom=a<e?"-60px":"0px",a=e},l.a.createElement("footer",{id:t},"Developed with React",l.a.createElement(G.a,null,l.a.createElement("img",{alt:"reactlogo",src:g.a,width:30})),l.a.createElement("br",null),"by ",l.a.createElement("b",null," Riordan Dervin Alfredo "),"\xa9 2018")},ce=F;a(114);c.a.render(l.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",function(){var e="".concat("/me","/service-worker.js");navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})})},51:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},52:function(e,t,a){e.exports=a.p+"static/media/blank.3259ebad.png"},53:function(e,t,a){e.exports=a.p+"static/media/aus.6f3c76ba.png"},60:function(e,t,a){e.exports=a(116)},65:function(e,t,a){}},[[60,2,1]]]);
//# sourceMappingURL=main.2a2adacc.chunk.js.map