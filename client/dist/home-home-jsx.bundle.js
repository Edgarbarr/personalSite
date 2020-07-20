(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[2],{32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),l=n(12);function c(){var e=h(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n    width: 100%;\n    height: 100%;\n    right: 0;\n    transition: .2s;\n    opacity: 1;\n    background-color: #B68F40;\n\n    h3 {\n        font-size: 3em;\n        text-align: center;\n    }\n"]);return c=function(){return e},e}function o(){var e=h(["\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: repeat(5,1fr);\n\n    &.three{\n        grid-template-columns: repeat(3,1fr);\n    }\n    picture {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    img {\n        display: flex;\n        justify-self: center;\n        align-self: center;\n        width: 60%;\n        height: auto;\n        max-height: 90%;\n    }\n\n    @media screen and (max-width: 768px){\n\n        overflow-x: auto;\n        grid-gap: 15px;\n        padding: 0 2%;\n        img {\n            width: 100%\n        }\n    }\n"]);return o=function(){return e},e}function s(){var e=h(["\n    position: relative;\n    height: 25%;\n    width: 100%;\n    display: flex;\n    background-color: transparent;\n    flex-direction: column;\n"]);return s=function(){return e},e}function d(){var e=h(["\n    position: relative;\n    overflow: hidden;\n    height: 2400px;\n    width: 100%;\n    background-color: transparent;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 1px 1px 5px black;\n"]);return d=function(){return e},e}function u(){var e=h(["\nwidth: 100%;\nposition: relative;\nbackground-color: transparent;\nheight: 600px;\ncolor: white;\npadding: 0;\nmargin: 0;\ndisplay: flex;\ntext-align: center;\njustify-content: center;\nalign-items: center;\n\n    h1 {\n        font-size: 3rem;\n    }\n    \n\n    :after{\n        content:'';\n        position: absolute;\n        opacity: 1;\n        background: url(\"fullstackdev.jpg\") no-repeat center center;\n        -webkit-background-size: cover;\n        -moz-background-size: cover;\n        -o-background-size: cover;\n        background-size: cover;\n        background-attachment: fixed;\n        background-position: 50% 10% !important;\n        z-index:-1;\n        width:100%;\n        height: 600px;\n        overflow:hidden;\n        top: 0; \n        left: 0; \n        \n    }\n    @media screen and (max-width: 768px){\n        :after{\n            background-attachment: unset;\n        }\n    }\n    \n}\n\n"]);return u=function(){return e},e}function m(){var e=h(["\n\n    width: 100%;\n    position: relative;\n    background-color: transparent;\n    height: 600px;\n    color: white;\n    padding: 0;\n\tmargin: 0;\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    \n    \n    h1 {\n        font-size: 3rem;\n    }\n    :after{\n        content:'';\n        position: absolute;\n        opacity: 1;\n        background: url(\"https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/42645890_10212796284049303_53266828650086400_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_oc=AQnSSh145cP2yFA0acjRTvBa9ScAp5ZlChjbJPePbKuAdOQs_epQ_tk6ImB6rMZWXX5zW2_Nvi-rJjQ4VQ1JzNzr&_nc_ht=scontent-lax3-2.xx&oh=f4a192ae623791a6314f28802890aca3&oe=5F2CE1D9\") no-repeat center center;\n        -webkit-background-size: cover;\n        -moz-background-size: cover;\n        -o-background-size: cover;\n        background-size: cover;\n        background-attachment: fixed;\n        background-position: 50% 90% !important;\n        z-index:-1;\n        width:100%;\n        height: 600px;\n        overflow:hidden;\n        top: 0; \n        left: 0; \n    }\n    \n    @media screen and (max-width: 768px){\n        :after{\n            background-attachment: unset;\n        }\n    }\n\n\n    \n}\n\n"]);return m=function(){return e},e}function p(){var e=h(["\n    display: flex;\n    width: 40%;\n    height: 800px;\n    background-color: #B6CCA1;\n    \n    \n    &.about{\n        height: 800px;\n        width: 40%;\n        background-color: #B6CCA1;\n        box-shadow: 10px 10px 20px black;\n        .laptop-pic{\n            width:100%;\n            height: 100%;\n            overflow: hidden;\n            position: relative;\n            display: flex;\n            justify-content: center;\n            flex-direction: row;\n            img {\n                height: 100%;\n            }\n        }\n    }\n    \n    .picberet {\n        overflow: hidden;\n        position: relative;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        img {\n            height: 100%;\n        }\n    }\n   .armspic{\n       width:100%;\n       height: 100%;\n       position: relative;\n   }\n    .armspic div{\n        width: auto;\n        height: 50%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        position: absolute;\n        top:45%;\n        left: -5%;\n        \n        img{\n            width: auto;\n            height: 100%;\n            box-shadow: 3px 3px 5px 5px rgba(75, 75, 75, 0.486);\n        }\n    }\n    &.project {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n\n        .h1 {\n            padding: 5%;\n            font-size: 3em;\n            text-shadow: 1px 1px 1px white;\n        }\n    }\n    @media screen and (max-width: 768px){\n        width: 100%;\n        height: 400px;\n        overflow: hidden;\n        justify-content: center;\n        align-items: center;\n        text-align: center;\n\n        &.about {\n            display: none;\n        }\n        .armspic div{\n            height: 100%;\n            width: 100%;\n            position: static;\n            display: flex;\n            justify-content: center;\n            flex-direction: row;\n            img {\n                width: auto;\n                height: 100%;\n            }\n        }\n    }\n    .aside-title{\n        text-shadow: 1px 1px 1px white;\n    }\n\n"]);return p=function(){return e},e}function f(){var e=h(['\n    display: flex;\n    width: 60%;\n    height: 800px;\n    padding: 2%;\n    \n    &.about {\n        height: 800px;\n        width: 60%;\n        padding-left: 5%;\n        display: flex;\n        flex-direction: column;\n        flex-wrap: nowrap;\n        justify-content: space-evenly;\n\n        div p{\n            font-weight: 300;\n            width: 75%;\n            margin: 0;\n            text-align: justify;\n        }\n\n        h1 {\n            text-shadow: 1px 3px rgba(0, 0, 0, 0.144);\n            font-size: 3em;\n            font-weight: 500;\n        }\n        h2 {\n            color: goldenrod;\n            text-shadow: 1px 1px 1px  rgb(63, 63, 63) ;\n        }\n    }\n    \n    &.quote-container {\n        width: 100%;\n        height: 600px;\n        background-color: #B6CCA1;\n        color: white;\n        padding: 10px;\n        div {\n            \n        }\n    }\n    .quote {\n        display: flex;\n        font-size: 3em;\n        text-align: center;\n        align-items: center;\n        justify-content: center;\n        height: 100%;\n        width: 100%;\n        position: relative;\n    }\n    .quote:after {\n        position: absolute;\n        content: "";\n        width: 50%;\n        height: 50%;\n        right: 20%;\n        clip-path: polygon(0 0, 10% 0, 100% 100%, 90% 100%);\n        \n        background: #b68f4077;\n    \n    }\n    .quote:before {\n        position: absolute;\n        content: "";\n        width: 50%;\n        height: 50%;\n        left: 20%;\n        clip-path: polygon(0 0, 10% 0, 100% 100%, 90% 100%);\n        \n        background: #b68f4077;\n    \n    }\n    @media screen and (max-width: 768px){\n        width: 100%;\n        padding: 5%;\n        height: 600px;\n        overflow: hidden;\n        justify-content: center;\n \n        align-items: flex-start;\n\n        &.about{\n            width: 100%;\n\n        }\n        .quote {\n            font-size: 2.8em;\n            height: 100%;\n        }\n        \n    }\n']);return f=function(){return e},e}function g(){var e=h(["\n    font-family: 'Lato';\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    width: 100%;\n    background-color: white;\n    overflow: hidden;\n    @media screen and (max-width: 768px){\n        flex-wrap: wrap;\n        &.reverse {\n            flex-direction: column-reverse;\n        }\n    }\n"]);return g=function(){return e},e}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var b=l.a.div(g()),y=l.a.div(f()),E=l.a.div(p()),v=l.a.div(m()),w=l.a.div(u()),x=l.a.div(d()),z=l.a.div(s()),N=l.a.div(o()),A=l.a.div(c()),k=n(44);n(70);function C(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var j=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("fade-in"),j.unobserve(e.target))}))}),{root:null,rootMargin:"0px",threshold:.5});t.default=function(){return Object(a.useEffect)((function(){[].concat(C(document.querySelectorAll(".crip div")),C(document.querySelectorAll(".qfi"))).forEach((function(e){j.observe(e)}))}),[]),Object(k.a)(),r.a.createElement("div",null,r.a.createElement(b,null,r.a.createElement(y,{className:"about"},r.a.createElement("h1",{className:"about-header"},"Develop your dreams"),r.a.createElement("div",null,r.a.createElement("h2",null,"Bring your vision to life."),r.a.createElement("p",null,"I’m a full stack developer based in Los Angeles, CA and I can provide you with beautiful, responsive web sites and applications to help bring more traffic and views to your business. Click the button below to contact me or keep scrolling to learn more.")),r.a.createElement(i.b,{to:"/contact"},r.a.createElement("button",{className:"button"},"Contact"))),r.a.createElement(E,{className:"about"},r.a.createElement("div",{className:"laptop-pic"},r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/laptop.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/laptop.png"}))))),r.a.createElement(v,{className:"background-element"},r.a.createElement("h1",{className:"base-element"},"From United States Soldier")),r.a.createElement(b,null,r.a.createElement(E,null,r.a.createElement("h1",{className:"aside-title"},"My Story:")),r.a.createElement(y,{className:"tech"},r.a.createElement("div",{className:"quote"},r.a.createElement("span",{className:"qfi"},"I joined the military back in 2013.")))),r.a.createElement(b,{className:"reverse"},r.a.createElement(y,{className:"tech"},r.a.createElement("div",{className:"quote "},r.a.createElement("span",{className:"qfi"},"In the army, I was an electronics technician and in charge of the arms room."))),r.a.createElement(E,{className:"crip"},r.a.createElement("div",{className:"armspic"},r.a.createElement("div",null,r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/armspic.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload","data-src":"./images/armspic.png"})))))),r.a.createElement(b,null,r.a.createElement(y,{className:"quote-container"},r.a.createElement("div",{className:"quote"},r.a.createElement("span",{className:"qfi"},"While deployed, I read a book about coding and promised myself I would learn to code.")))),r.a.createElement(b,null,r.a.createElement(y,null,r.a.createElement("div",{className:"quote"},r.a.createElement("span",{className:"qfi"},"I gained valuable leadership skills and built a strong work ethic."))),r.a.createElement(E,{className:"crip"},r.a.createElement("div",{className:"picberet"},r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/soldierpic.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload","data-src":"./images/soldierpic.png"}))))),r.a.createElement(b,{className:"reverse"},r.a.createElement(E,{className:"project"},r.a.createElement("h1",{className:"aside-title"},"Check out my projects page:"),r.a.createElement(i.b,{to:"/projects"},r.a.createElement("button",{className:"button"},"Projects"))),r.a.createElement(y,{className:"tech"},r.a.createElement("div",{className:"quote"},r.a.createElement("span",{className:"qfi"},"After my enlistment, I went to Galvanize Software Immersive. But the learning didn't stop there...")))),r.a.createElement(w,{className:"background-element"},r.a.createElement("h1",{className:"base-element"},"To Full Stack Developer")),r.a.createElement(b,null,r.a.createElement(y,{className:"quote-container"},r.a.createElement("div",{className:"quote"},r.a.createElement("span",{className:"qfi"},"Now I have the skills to contribute to your company's bottom line.")))),r.a.createElement(b,null,r.a.createElement(x,null,r.a.createElement(z,null,r.a.createElement(A,null,r.a.createElement("h3",null,"Front End Development")),r.a.createElement(N,null,r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/javascript.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/javascript.png"})),r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/css.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/css.png"})),r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/html.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/html.png"})),r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/bootstrap.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/bootstrap.png"})),r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/react.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/react.png"})))),r.a.createElement(z,null,r.a.createElement(A,null,r.a.createElement("h3",null,"Back End Development")),r.a.createElement(N,null,r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/node.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/node.png"})),r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/express.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/express.png"})),r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/npm.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/npm.png"})),r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/mongo.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/mongo.jpg"})),r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/postgres.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/postgres.png"})))),r.a.createElement(z,null,r.a.createElement(A,null,r.a.createElement("h3",null,"Testing & Dev Ops")),r.a.createElement(N,null,r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/aws.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/aws.png"})),r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/heroku.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/heroku.png"})),r.a.createElement("picture",null,r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/Nginx.svg"})),r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/jest.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/jest.jpg"})),r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/docker.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/docker.png"})))),r.a.createElement(z,null,r.a.createElement(A,null,r.a.createElement("h3",null,"Developer Tools & More")),r.a.createElement(N,{className:"three"},r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/git.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/git.png"})),r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/webpack.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/webpack.png"})),r.a.createElement("picture",null,r.a.createElement("source",{"data-srcset":"./images/linux.webp",type:"image/webp"}),r.a.createElement("img",{className:"lazyload qfi","data-src":"./images/linux.jpg"})))))))}},44:function(e,t,n){"use strict";var a=n(0);t.a=function(){return Object(a.useLayoutEffect)((function(){window.scrollTo(0,0)}),[]),null}},70:function(e,t,n){(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(n,a){var r=function(e,t,n){"use strict";var a,r;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in r=e.lazySizesConfig||e.lazysizesConfig||{},n)t in r||(r[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:r,noSupport:!0};var i=t.documentElement,l=e.HTMLPictureElement,c=e.addEventListener.bind(e),o=e.setTimeout,s=e.requestAnimationFrame||o,d=e.requestIdleCallback,u=/^picture$/i,m=["load","error","lazyincluded","_lazyloaded"],p={},f=Array.prototype.forEach,g=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e.getAttribute("class")||"")&&p[t]},h=function(e,t){g(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},b=function(e,t){var n;(n=g(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},y=function e(t,n,a){var r=a?"addEventListener":"removeEventListener";a&&e(t,n),m.forEach((function(e){t[r](e,n)}))},E=function(e,n,r,i,l){var c=t.createEvent("Event");return r||(r={}),r.instance=a,c.initEvent(n,!i,!l),c.detail=r,e.dispatchEvent(c),c},v=function(t,n){var a;!l&&(a=e.picturefill||r.pf)?(n&&n.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",n.src),a({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},w=function(e,t){return(getComputedStyle(e,null)||{})[t]},x=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},z=(pe=[],fe=[],ge=pe,he=function(){var e=ge;for(ge=pe.length?fe:pe,ue=!0,me=!1;e.length;)e.shift()();ue=!1},be=function(e,n){ue&&!n?e.apply(this,arguments):(ge.push(e),me||(me=!0,(t.hidden?o:s)(he)))},be._lsFlush=he,be),N=function(e,t){return t?function(){z(e)}:function(){var t=this,n=arguments;z((function(){e.apply(t,n)}))}},A=function(e){var t,a,r=function(){t=null,e()},i=function e(){var t=n.now()-a;t<99?o(e,99-t):(d||r)(r)};return function(){a=n.now(),t||(t=o(i,99))}},k=($=/^img$/i,Q=/^iframe$/i,J="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),K=0,X=0,Z=-1,G=function(e){X--,(!e||X<0||!e.target)&&(X=0)},V=function(e){return null==U&&(U="hidden"==w(t.body,"visibility")),U||!("hidden"==w(e.parentNode,"visibility")&&"hidden"==w(e,"visibility"))},Y=function(e,n){var a,r=e,l=V(e);for(P-=n,H+=n,W-=n,R+=n;l&&(r=r.offsetParent)&&r!=t.body&&r!=i;)(l=(w(r,"opacity")||1)>0)&&"visible"!=w(r,"overflow")&&(a=r.getBoundingClientRect(),l=R>a.left&&W<a.right&&H>a.top-1&&P<a.bottom+1);return l},ee=function(){var e,n,l,c,o,s,d,u,m,p,f,g,h=a.elements;if((M=r.loadMode)&&X<8&&(e=h.length)){for(n=0,Z++;n<e;n++)if(h[n]&&!h[n]._lazyRace)if(!J||a.prematureUnveil&&a.prematureUnveil(h[n]))ce(h[n]);else if((u=h[n].getAttribute("data-expand"))&&(s=1*u)||(s=K),p||(p=!r.expand||r.expand<1?i.clientHeight>500&&i.clientWidth>500?500:370:r.expand,a._defEx=p,f=p*r.expFactor,g=r.hFac,U=null,K<f&&X<1&&Z>2&&M>2&&!t.hidden?(K=f,Z=0):K=M>1&&Z>1&&X<6?p:0),m!==s&&(T=innerWidth+s*g,F=innerHeight+s,d=-1*s,m=s),l=h[n].getBoundingClientRect(),(H=l.bottom)>=d&&(P=l.top)<=F&&(R=l.right)>=d*g&&(W=l.left)<=T&&(H||R||W||P)&&(r.loadHidden||V(h[n]))&&(B&&X<3&&!u&&(M<3||Z<4)||Y(h[n],s))){if(ce(h[n]),o=!0,X>9)break}else!o&&B&&!c&&X<4&&Z<4&&M>2&&(O[0]||r.preloadAfterLoad)&&(O[0]||!u&&(H||R||W||P||"auto"!=h[n].getAttribute(r.sizesAttr)))&&(c=O[0]||h[n]);c&&!o&&ce(c)}},te=function(e){var t,a=0,i=r.throttleDelay,l=r.ricTimeout,c=function(){t=!1,a=n.now(),e()},s=d&&l>49?function(){d(c,{timeout:l}),l!==r.ricTimeout&&(l=r.ricTimeout)}:N((function(){o(c)}),!0);return function(e){var r;(e=!0===e)&&(l=33),t||(t=!0,(r=i-(n.now()-a))<0&&(r=0),e||r<9?s():o(s,r))}}(ee),ne=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(G(e),h(t,r.loadedClass),b(t,r.loadingClass),y(t,re),E(t,"lazyloaded"))},ae=N(ne),re=function(e){ae({target:e.target})},ie=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},le=N((function(e,t,n,a,i){var l,c,s,d,m,p;(m=E(e,"lazybeforeunveil",t)).defaultPrevented||(a&&(n?h(e,r.autosizesClass):e.setAttribute("sizes",a)),c=e.getAttribute(r.srcsetAttr),l=e.getAttribute(r.srcAttr),i&&(d=(s=e.parentNode)&&u.test(s.nodeName||"")),p=t.firesLoad||"src"in e&&(c||l||d),m={target:e},h(e,r.loadingClass),p&&(clearTimeout(I),I=o(G,2500),y(e,re,!0)),d&&f.call(s.getElementsByTagName("source"),ie),c?e.setAttribute("srcset",c):l&&!d&&(Q.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,l):e.src=l),i&&(c||d)&&v(e,{src:l})),e._lazyRace&&delete e._lazyRace,b(e,r.lazyClass),z((function(){var t=e.complete&&e.naturalWidth>1;p&&!t||(t&&h(e,"ls-is-cached"),ne(m),e._lazyCache=!0,o((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&X--}),!0)})),ce=function(e){if(!e._lazyRace){var t,n=$.test(e.nodeName),a=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),i="auto"==a;(!i&&B||!n||!e.getAttribute("src")&&!e.srcset||e.complete||g(e,r.errorClass)||!g(e,r.lazyClass))&&(t=E(e,"lazyunveilread").detail,i&&C.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,X++,le(e,t,i,a,n))}},oe=A((function(){r.loadMode=3,te()})),se=function(){3==r.loadMode&&(r.loadMode=2),oe()},de=function e(){B||(n.now()-D<999?o(e,999):(B=!0,r.loadMode=3,te(),c("scroll",se,!0)))},{_:function(){D=n.now(),a.elements=t.getElementsByClassName(r.lazyClass),O=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),c("scroll",te,!0),c("resize",te,!0),c("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+r.loadingClass);n.length&&n.forEach&&s((function(){n.forEach((function(e){e.complete&&ce(e)}))}))}})),e.MutationObserver?new MutationObserver(te).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i.addEventListener("DOMNodeInserted",te,!0),i.addEventListener("DOMAttrModified",te,!0),setInterval(te,999)),c("hashchange",te,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t.addEventListener(e,te,!0)})),/d$|^c/.test(t.readyState)?de():(c("load",de),t.addEventListener("DOMContentLoaded",te),o(de,2e4)),a.elements.length?(ee(),z._lsFlush()):te()},checkElems:te,unveil:ce,_aLSL:se}),C=(q=N((function(e,t,n,a){var r,i,l;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),u.test(t.nodeName||""))for(i=0,l=(r=t.getElementsByTagName("source")).length;i<l;i++)r[i].setAttribute("sizes",a);n.detail.dataAttr||v(e,n.detail)})),S=function(e,t,n){var a,r=e.parentNode;r&&(n=x(e,r,n),(a=E(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=a.detail.width)&&n!==e._lazysizesWidth&&q(e,r,a,n))},L=A((function(){var e,t=j.length;if(t)for(e=0;e<t;e++)S(j[e])})),{_:function(){j=t.getElementsByClassName(r.autosizesClass),c("resize",L)},checkElems:L,updateElem:S}),_=function e(){!e.i&&t.getElementsByClassName&&(e.i=!0,C._(),k._())};var j,q,S,L;var O,B,I,M,D,T,F,P,W,R,H,U,$,Q,J,K,X,Z,G,V,Y,ee,te,ne,ae,re,ie,le,ce,oe,se,de;var ue,me,pe,fe,ge,he,be;return o((function(){r.init&&_()})),a={cfg:r,autoSizer:C,loader:k,init:_,uP:v,aC:h,rC:b,hC:g,fire:E,gW:x,rAF:z}}(n,n.document,Date);n.lazySizes=r,"object"==t(e)&&e.exports&&(e.exports=r)}("undefined"!=typeof window?window:{})}).call(this,n(71)(e))},71:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}}]);