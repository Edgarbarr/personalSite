exports.ids=[5],exports.modules={148:function(e,t,a){"use strict";a.r(t);var n=a(351),r=a.n(n),o=a(0),i=a.n(o),l=a(348),c=a(18),s=c.d.div.withConfig({componentId:"f92qg6-0"})([':first-child::before{content:"";height:100%;width:100%;position:absolute;top:-100px;background-color:#484848;z-index:-2;}']),d=c.d.div.withConfig({componentId:"f92qg6-1"})(['width:100%;height:fit-content;position:relative;transform:skewY(-11deg);padding:0 5%;:last-child::before{content:"";height:100%;width:100%;position:absolute;bottom:-300px;background-color:#e6e6e6;}:last-child{z-index:-1;}']),p=c.d.div.withConfig({componentId:"f92qg6-2"})(["display:-webkit-flex;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;align-items:center;.media{width:58% !important;}@media screen and (max-width:768px){justify-content:center;.media{width:100% !important;}}"]),m=c.d.div.withConfig({componentId:"f92qg6-3"})(["--skew-padding:calc(100vw * 0.09719);background-color:transparent;transform:skewY(11deg);width:100%;padding:var(--skew-padding) 0;"]),u=c.d.div.withConfig({componentId:"f92qg6-4"})(["display:-webkit-flex;display:flex;width:38%;margin:2%;height:fit-content;border:0 solid #b68f40;border-width:3px 0 3px 0;padding:1% 0;flex-direction:row;flex-wrap:wrap;justify-content:center;p{width:100%;text-align:center;}h2{width:100%;text-align:center;}align-items:center;@media screen and (max-width:768px){width:75%}@media screen and (max-width:425px){width:100%}"]);t.default=function(){Object(l.a)(),window.onresize=function(){document.querySelectorAll(".inner-shit").forEach((function(e,t){e.style.setProperty("padding","".concat(.09719*window.innerWidth,"px 0")),0===t&&e.style.setProperty("padding-top","0"),3===t&&e.style.setProperty("padding-bottom","0")}))};var e=Object(o.useState)([{title:"Haven Of Happiness",tech:"React | HMTL5 | CSS3 | Firebase | Stripe",description:"An ecommerce app for handmade charms and keychains.",video:null},{title:"Trafalgar Trip Detail Page Mockup",tech:"React | HMTL5 | CSS3 | MongoDB | Express",description:"An online webpage that details a trip of the clients choosing.",video:"Trafalgar.mp4"},{title:"Trivia Game",tech:"React | PostgreSQL | Express | Javascript | Socket.io",description:"Trivia Game is an app that utilizes websockets get a real time response between users in a chat room. The users can participate in a trivia game with a theme of their choice.",video:"trivia.mp4"},{title:"REI System Design",tech:"PostgreSQL | MongoDB | K6 | AWS EC2 | Jest | Docker",description:"Scaled and deployed a back end for an outdoor clothing app store.",video:"systemdesign.mp4"}]),t=r()(e,2);return t[0],t[1],i.a.createElement(s,null,i.a.createElement(d,{style:{backgroundColor:"#484848",color:"white"}},i.a.createElement(m,null,i.a.createElement(p,null,i.a.createElement("img",{className:"media hohimage",src:"/assets/hoh.png",alt:"Haven of Happiness frontpage snapshot"}),i.a.createElement(u,null,i.a.createElement("h2",null,"Haven Of Happiness"),i.a.createElement("p",null,"React | HMTL5 | CSS3 | Firebase | Stripe"),i.a.createElement("p",null,"An ecommerce app for handmade charms and keychains."),i.a.createElement("p",null,"WORK IN PROGRESS!"),i.a.createElement("p",{className:"font-white"},"VISIT HERE:"," ",i.a.createElement("a",{href:"http://ec2-54-176-234-58.us-west-1.compute.amazonaws.com:5000",target:"_blank",rel:"noreferrer"},"Haven Of Happiness")))))),i.a.createElement(d,{style:{backgroundColor:"#e6e6e6"}},i.a.createElement(m,null,i.a.createElement(p,null,i.a.createElement("video",{className:"media",width:"820",autoPlay:!0,loop:!0,muted:!0,playsInline:!0},i.a.createElement("source",{src:"/assets/Trafalgar.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),i.a.createElement(u,null,i.a.createElement("h2",null,"Trafalgar Trip Detail Page Mockup"),i.a.createElement("p",null,"React | HMTL5 | CSS3 | MongoDB | Express"),i.a.createElement("p",null,"An online webpage that details a trip of the clients choosing."))))),i.a.createElement(d,{style:{backgroundColor:"#484848",color:"white"}},i.a.createElement(m,null,i.a.createElement(p,null,i.a.createElement("video",{className:"media",width:"820",autoPlay:!0,loop:!0,muted:!0,playsInline:!0},i.a.createElement("source",{src:"/assets/trivia.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),i.a.createElement(u,null,i.a.createElement("h2",null,"Trivia Game"),i.a.createElement("p",null,"React | PostgreSQL | Express | Javascript | Socket.io"),i.a.createElement("p",null,"Trivia Game is an app that utilizes websockets get a real time response between users in a chat room. The users can participate in a trivia game with a theme of their choice."))))),i.a.createElement(d,{style:{backgroundColor:"#e6e6e6"}},i.a.createElement(m,null,i.a.createElement(p,null,i.a.createElement("video",{className:"media",width:"820",autoPlay:!0,loop:!0,muted:!0,playsInline:!0},i.a.createElement("source",{src:"/assets/systemdesign.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),i.a.createElement(u,null,i.a.createElement("h2",null,"REI System Design"),i.a.createElement("p",null,"PostgreSQL | MongoDB | K6 | AWS EC2 | Jest | Docker"),i.a.createElement("p",null,"Scaled and deployed a back end for an outdoor clothing app store."))))))}},348:function(e,t,a){"use strict";var n=a(0);t.a=function(){return Object(n.useLayoutEffect)((function(){window.scrollTo(0,0)}),[]),null}},349:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},350:function(e,t,a){var n=a(349);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},351:function(e,t,a){var n=a(352),r=a(353),o=a(350),i=a(354);e.exports=function(e,t){return n(e)||r(e,t)||o(e,t)||i()}},352:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},353:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}}},354:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}};