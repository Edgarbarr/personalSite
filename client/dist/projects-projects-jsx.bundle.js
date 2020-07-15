(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[4],{30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(43),o=n(16);function l(){var e=p(["\n    display: flex;\n    width: 38%;\n    margin: 2%;\n    height: fit-content;\n    border: 0 solid #b68f40;\n    border-width: 3px 0 3px 0;\n    padding: 1% 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    p {\n        width: 100%;\n        text-align: center;\n    }\n    h2 {\n        width: 100%;\n        text-align: center;\n    }\n    align-items: center;\n    @media screen and (max-width: 768px){\n        width: 75%\n    }\n    @media screen and (max-width: 425px){\n        width: 100%\n    }\n    \n    \n"]);return l=function(){return e},e}function c(){var e=p(["\n    --skew-padding: calc(100vw * 0.09719); \n    background-color: transparent;\n    transform: skewY(11deg);\n    width: 100%;\n    padding: var(--skew-padding) 0;\n"]);return c=function(){return e},e}function s(){var e=p(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n    .media {\n        width: 58% !important;\n    }\n    @media screen and (max-width: 768px){\n        justify-content: center;\n        .media{\n            width: 100% !important;\n        }\n    }\n"]);return s=function(){return e},e}function u(){var e=p(['\n    width: 100%;\n    height: fit-content;\n    position: relative;\n    transform: skewY(-11deg);    \n    padding: 0 5%;\n    :last-child::before {\n        content: "";\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        bottom: -300px;\n        background-color: #e6e6e6;\n    }\n    :last-child{\n        z-index: -1;\n    }\n    \n']);return u=function(){return e},e}function d(){var e=p(['\n    \n    :first-child::before{\n        content: "";\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        top: -100px;\n        background-color: #484848;\n        z-index: -2;  \n    } \n    \n']);return d=function(){return e},e}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var m=o.a.div(d()),h=o.a.div(u()),f=o.a.div(s()),g=o.a.div(c()),w=o.a.div(l());function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(){Object(i.a)(),window.onresize=function(){document.querySelectorAll(".inner-shit").forEach((function(e,t){e.style.setProperty("padding","".concat(.09719*window.innerWidth,"px 0")),0===t&&e.style.setProperty("padding-top","0"),3===t&&e.style.setProperty("padding-bottom","0")}))};var e=E(Object(a.useState)([{title:"Haven Of Happiness",tech:"React | HMTL5 | CSS3 | Firebase | Stripe",description:"An ecommerce app for handmade charms and keychains.",video:null},{title:"Trafalgar Trip Detail Page Mockup",tech:"React | HMTL5 | CSS3 | MongoDB | Express",description:"An online webpage that details a trip of the clients choosing.",video:"Trafalgar.mp4"},{title:"Trivia Game",tech:"React | PostgreSQL | Express | Javascript | Socket.io",description:"Trivia Game is an app that utilizes websockets get a real time response between users in a chat room. The users can participate in a trivia game with a theme of their choice.",video:"trivia.mp4"},{title:"REI System Design",tech:"PostgreSQL | MongoDB | K6 | AWS EC2 | Jest | Docker",description:"Scaled and deployed a back end for an outdoor clothing app store.",video:"systemdesign.mp4"}]),2);return e[0],e[1],r.a.createElement(m,null,r.a.createElement(h,{style:{backgroundColor:"#484848",color:"white"}},r.a.createElement(g,null,r.a.createElement(f,null,r.a.createElement("img",{className:"media hohimage",src:"hoh.png",alt:"Haven of Happiness frontpage snapshot"}),r.a.createElement(w,null,r.a.createElement("h2",null,"Haven Of Happiness"),r.a.createElement("p",null,"React | HMTL5 | CSS3 | Firebase | Stripe"),r.a.createElement("p",null,"An ecommerce app for handmade charms and keychains."),r.a.createElement("p",null,"WORK IN PROGRESS!"),r.a.createElement("p",{className:"font-white"},"VISIT HERE:"," ",r.a.createElement("a",{href:"http://ec2-54-176-234-58.us-west-1.compute.amazonaws.com:5000",target:"_blank",rel:"noreferrer"},"Haven Of Happiness")))))),r.a.createElement(h,{style:{backgroundColor:"#e6e6e6"}},r.a.createElement(g,null,r.a.createElement(f,null,r.a.createElement("video",{className:"media",width:"820",autoPlay:!0,loop:!0,muted:!0,playsInline:!0},r.a.createElement("source",{src:"Trafalgar.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),r.a.createElement(w,null,r.a.createElement("h2",null,"Trafalgar Trip Detail Page Mockup"),r.a.createElement("p",null,"React | HMTL5 | CSS3 | MongoDB | Express"),r.a.createElement("p",null,"An online webpage that details a trip of the clients choosing."))))),r.a.createElement(h,{style:{backgroundColor:"#484848",color:"white"}},r.a.createElement(g,null,r.a.createElement(f,null,r.a.createElement("video",{className:"media",width:"820",autoPlay:!0,loop:!0,muted:!0,playsInline:!0},r.a.createElement("source",{src:"trivia.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),r.a.createElement(w,null,r.a.createElement("h2",null,"Trivia Game"),r.a.createElement("p",null,"React | PostgreSQL | Express | Javascript | Socket.io"),r.a.createElement("p",null,"Trivia Game is an app that utilizes websockets get a real time response between users in a chat room. The users can participate in a trivia game with a theme of their choice."))))),r.a.createElement(h,{style:{backgroundColor:"#e6e6e6"}},r.a.createElement(g,null,r.a.createElement(f,null,r.a.createElement("video",{className:"media",width:"820",autoPlay:!0,loop:!0,muted:!0,playsInline:!0},r.a.createElement("source",{src:"systemdesign.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),r.a.createElement(w,null,r.a.createElement("h2",null,"REI System Design"),r.a.createElement("p",null,"PostgreSQL | MongoDB | K6 | AWS EC2 | Jest | Docker"),r.a.createElement("p",null,"Scaled and deployed a back end for an outdoor clothing app store."))))))}},43:function(e,t,n){"use strict";var a=n(0);t.a=function(){return Object(a.useLayoutEffect)((function(){window.scrollTo(0,0)}),[]),null}}}]);