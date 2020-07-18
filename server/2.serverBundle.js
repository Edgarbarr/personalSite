exports.ids=[2],exports.modules={146:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(18),c=t(31);function l(){var e=f(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n    width: 100%;\n    height: 100%;\n    right: 0;\n    transition: .2s;\n    opacity: 1;\n    background-color: #B68F40;\n\n    h3 {\n        font-size: 3em;\n        text-align: center;\n    }\n"]);return l=function(){return e},e}function o(){var e=f(["\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: repeat(5,1fr);\n\n    &.three{\n        grid-template-columns: repeat(3,1fr);\n    }\n    picture {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    img {\n        display: flex;\n        justify-self: center;\n        align-self: center;\n        width: 60%;\n        height: auto;\n        max-height: 90%;\n    }\n\n    @media screen and (max-width: 768px){\n\n        overflow-x: auto;\n        grid-gap: 15px;\n        padding: 0 2%;\n        img {\n            width: 100%\n        }\n    }\n"]);return o=function(){return e},e}function s(){var e=f(["\n    position: relative;\n    height: 25%;\n    width: 100%;\n    display: flex;\n    background-color: transparent;\n    flex-direction: column;\n"]);return s=function(){return e},e}function m(){var e=f(["\n    position: relative;\n    overflow: hidden;\n    height: 2400px;\n    width: 100%;\n    background-color: transparent;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 1px 1px 5px black;\n"]);return m=function(){return e},e}function p(){var e=f(["\nwidth: 100%;\nposition: relative;\nbackground-color: transparent;\nheight: 600px;\ncolor: white;\npadding: 0;\nmargin: 0;\ndisplay: flex;\ntext-align: center;\njustify-content: center;\nalign-items: center;\n\n    h1 {\n        font-size: 3rem;\n    }\n    \n\n    :after{\n        content:'';\n        position: absolute;\n        opacity: 1;\n        background: url(\"fullstackdev.jpg\") no-repeat center center;\n        -webkit-background-size: cover;\n        -moz-background-size: cover;\n        -o-background-size: cover;\n        background-size: cover;\n        background-attachment: fixed;\n        z-index:-1;\n        width:100%;\n        height: 600px;\n        overflow:hidden;\n        top: 0; \n        left: 0; \n        \n    }\n    \n}\n\n"]);return p=function(){return e},e}function u(){var e=f(["\n\n    width: 100%;\n    position: relative;\n    background-color: transparent;\n    height: 600px;\n    color: white;\n    padding: 0;\n\tmargin: 0;\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    \n    \n    h1 {\n        font-size: 3rem;\n    }\n    :after{\n        content:'';\n        position: absolute;\n        opacity: 1;\n        background: url(\"https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/42645890_10212796284049303_53266828650086400_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_oc=AQnSSh145cP2yFA0acjRTvBa9ScAp5ZlChjbJPePbKuAdOQs_epQ_tk6ImB6rMZWXX5zW2_Nvi-rJjQ4VQ1JzNzr&_nc_ht=scontent-lax3-2.xx&oh=f4a192ae623791a6314f28802890aca3&oe=5F2CE1D9\") no-repeat center center;\n        -webkit-background-size: cover;\n        -moz-background-size: cover;\n        -o-background-size: cover;\n        background-size: cover;\n        background-attachment: fixed;\n        z-index:-1;\n        width:100%;\n        height: 600px;\n        overflow:hidden;\n        top: 0; \n        left: 0; \n    }\n\n\n    \n}\n\n"]);return u=function(){return e},e}function g(){var e=f(["\n    display: flex;\n    width: 40%;\n    height: 800px;\n    background-color: #B6CCA1;\n    \n    \n    &.about{\n        height: 800px;\n        width: 40%;\n        background-color: #B6CCA1;\n        box-shadow: 10px 10px 20px black;\n        .laptop-pic{\n            width:100%;\n            height: 100%;\n            overflow: hidden;\n            position: relative;\n            display: flex;\n            justify-content: center;\n            flex-direction: row;\n            img {\n                height: 100%;\n            }\n        }\n    }\n    \n    .picberet {\n        overflow: hidden;\n        position: relative;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        img {\n            height: 100%;\n        }\n    }\n   .armspic{\n       width:100%;\n       height: 100%;\n       position: relative;\n   }\n    .armspic div{\n        width: auto;\n        height: 50%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        position: absolute;\n        top:45%;\n        left: -5%;\n        \n        img{\n            width: auto;\n            height: 100%;\n            box-shadow: 3px 3px 5px 5px rgba(75, 75, 75, 0.486);\n        }\n    }\n    &.project {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n\n        .h1 {\n            padding: 5%;\n            font-size: 3em;\n            text-shadow: 1px 1px 1px white;\n        }\n    }\n    @media screen and (max-width: 768px){\n        width: 100%;\n        height: 400px;\n        overflow: hidden;\n        justify-content: center;\n        align-items: center;\n        text-align: center;\n\n        &.about {\n            display: none;\n        }\n        .armspic div{\n            height: 100%;\n            width: 100%;\n            position: static;\n            display: flex;\n            justify-content: center;\n            flex-direction: row;\n            img {\n                width: auto;\n                height: 100%;\n            }\n        }\n    }\n    .aside-title{\n        text-shadow: 1px 1px 1px white;\n    }\n\n"]);return g=function(){return e},e}function d(){var e=f(['\n    display: flex;\n    width: 60%;\n    height: 800px;\n    padding: 2%;\n    \n    &.about {\n        height: 800px;\n        width: 60%;\n        padding-left: 5%;\n        display: flex;\n        flex-direction: column;\n        flex-wrap: nowrap;\n        justify-content: space-evenly;\n\n        div p{\n            font-weight: 300;\n            width: 75%;\n            margin: 0;\n            text-align: justify;\n        }\n\n        h1 {\n            text-shadow: 1px 3px rgba(0, 0, 0, 0.144);\n            font-size: 3em;\n            font-weight: 500;\n        }\n        h2 {\n            color: goldenrod;\n            text-shadow: 1px 1px 1px  rgb(63, 63, 63) ;\n        }\n    }\n    \n    &.quote-container {\n        width: 100%;\n        height: 600px;\n        background-color: #B6CCA1;\n        color: white;\n        padding: 10px;\n        div {\n            \n        }\n    }\n    .quote {\n        display: flex;\n        font-size: 3em;\n        text-align: center;\n        align-items: center;\n        justify-content: center;\n        height: 100%;\n        width: 100%;\n        position: relative;\n    }\n    .quote:after {\n        position: absolute;\n        content: "";\n        width: 50%;\n        height: 50%;\n        right: 20%;\n        clip-path: polygon(0 0, 10% 0, 100% 100%, 90% 100%);\n        \n        background: #b68f4077;\n    \n    }\n    .quote:before {\n        position: absolute;\n        content: "";\n        width: 50%;\n        height: 50%;\n        left: 20%;\n        clip-path: polygon(0 0, 10% 0, 100% 100%, 90% 100%);\n        \n        background: #b68f4077;\n    \n    }\n    @media screen and (max-width: 768px){\n        width: 100%;\n        padding: 5%;\n        height: 600px;\n        overflow: hidden;\n        justify-content: center;\n \n        align-items: flex-start;\n\n        &.about{\n            width: 100%;\n\n        }\n        .quote {\n            font-size: 2.8em;\n            height: 100%;\n        }\n        \n    }\n']);return d=function(){return e},e}function h(){var e=f(["\n    font-family: 'Lato';\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    width: 100%;\n    background-color: white;\n    overflow: hidden;\n    @media screen and (max-width: 768px){\n        flex-wrap: wrap;\n        &.reverse {\n            flex-direction: column-reverse;\n        }\n    }\n"]);return h=function(){return e},e}function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var E=c.a.div(h()),b=c.a.div(d()),w=c.a.div(g()),x=c.a.div(u()),v=c.a.div(p()),y=c.a.div(m()),k=c.a.div(s()),j=c.a.div(o()),N=c.a.div(l()),z=t(341);function A(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var S=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("fade-in"),S.unobserve(e.target))}))}),{root:null,rootMargin:"0px",threshold:.5});n.default=function(){return Object(a.useEffect)((function(){A(document.querySelectorAll(".crip div")).forEach((function(e){S.observe(e)}))}),[]),Object(z.a)(),r.a.createElement("div",null,r.a.createElement(E,null,r.a.createElement(b,{className:"about"},r.a.createElement("h1",{className:"about-header"},"Develop your dreams"),r.a.createElement("div",null,r.a.createElement("h2",null,"Bring your vision to life."),r.a.createElement("p",null,"I’m a full stack developer based in Los Angeles, CA and I can provide you with beautiful, responsive web sites and applications to help bring more traffic and views to your business. Click the button below to contact me or keep scrolling to learn more.")),r.a.createElement(i.a,{to:"/contact"},r.a.createElement("button",{className:"button"},"Contact"))),r.a.createElement(w,{className:"about"},r.a.createElement("div",{className:"laptop-pic"},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:"./images/laptop.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/laptop.png"}))))),r.a.createElement(x,null,r.a.createElement("h1",null,"From United States Soldier")),r.a.createElement(E,null,r.a.createElement(w,null,r.a.createElement("h1",{className:"aside-title"},"My Story:")),r.a.createElement(b,{className:"tech"},r.a.createElement("div",{className:"quote"},r.a.createElement("span",null,"I joined the military back in 2013.")))),r.a.createElement(E,{className:"reverse"},r.a.createElement(b,{className:"tech"},r.a.createElement("div",{className:"quote "},r.a.createElement("span",null,"In the army, I was an electronics technician and in charge of the arms room."))),r.a.createElement(w,{className:"crip"},r.a.createElement("div",{className:"armspic"},r.a.createElement("div",null,r.a.createElement("picture",null,r.a.createElement("source",{srcSet:"./images/armspic.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/armspic.png"})))))),r.a.createElement(E,null,r.a.createElement(b,{className:"quote-container"},r.a.createElement("div",{className:"quote"},r.a.createElement("span",null,"While deployed, I read a book about coding and promised myself I would learn to code.")))),r.a.createElement(E,null,r.a.createElement(b,null,r.a.createElement("div",{className:"quote"},r.a.createElement("span",null,"I gained valuable leadership skills and built a strong work ethic."))),r.a.createElement(w,{className:"crip"},r.a.createElement("div",{className:"picberet"},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:"./images/soldierpic.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/soldierpic.png"}))))),r.a.createElement(E,{className:"reverse"},r.a.createElement(w,{className:"project"},r.a.createElement("h1",{className:"aside-title"},"Check out my projects page:"),r.a.createElement(i.a,{to:"/projects"},r.a.createElement("button",{className:"button"},"Projects"))),r.a.createElement(b,{className:"tech"},r.a.createElement("div",{className:"quote"},r.a.createElement("span",null,"After my enlistment, I went to Galvanize Software Immersive. But the learning didn't stop there...")))),r.a.createElement(v,null,r.a.createElement("h1",null,"To Full Stack Developer")),r.a.createElement(E,null,r.a.createElement(b,{className:"quote-container"},r.a.createElement("div",{className:"quote"},r.a.createElement("span",null,"Now I have the skills to contribute to your company's bottom line.")))),r.a.createElement(E,null,r.a.createElement(y,null,r.a.createElement(k,null,r.a.createElement(N,null,r.a.createElement("h3",null,"Front End Development")),r.a.createElement(j,null,r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/javascript.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/javascript.png"})),r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/css.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/css.png"})),r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/html.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/html.png"})),r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/bootstrap.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/bootstrap.png"})),r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/react.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/react.png"})))),r.a.createElement(k,null,r.a.createElement(N,null,r.a.createElement("h3",null,"Back End Development")),r.a.createElement(j,null,r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/node.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/node.png"})),r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/express.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/express.png"})),r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/npm.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/npm.png"})),r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/mongo.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/mongo.jpg"})),r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/postgres.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/postgres.png"})))),r.a.createElement(k,null,r.a.createElement(N,null,r.a.createElement("h3",null,"Testing & Dev Ops")),r.a.createElement(j,null,r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/aws.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/aws.png"})),r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/heroku.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/heroku.png"})),r.a.createElement("picture",null,r.a.createElement("img",{src:"./images/Nginx.svg"})),r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/jest.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/jest.jpg"})),r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/docker.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/docker.png"})))),r.a.createElement(k,null,r.a.createElement(N,null,r.a.createElement("h3",null,"Developer Tools & More")),r.a.createElement(j,{className:"three"},r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/git.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/git.png"})),r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/webpack.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/webpack.png"})),r.a.createElement("picture",null,r.a.createElement("source",{srcset:"./images/linux.webp",type:"image/webp"}),r.a.createElement("img",{src:"./images/linux.jpg"})))))))}},341:function(e,n,t){"use strict";var a=t(0);n.a=function(){return Object(a.useLayoutEffect)((function(){window.scrollTo(0,0)}),[]),null}}};