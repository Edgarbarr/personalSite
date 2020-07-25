(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{34:function(e,n,t){"use strict";t.r(n);var a=t(96),r=t.n(a),l=t(21),o=t.n(l),i=t(0),c=t.n(i),u=t(97),s=t.n(u),m=t(98),p=t.n(m),d=t(12),f=t.n(d);function b(){var e=f()(["\n\n.group {\n    position: relative;\n    margin: 45px 0;\n\n    .form-input {\n        background: none;\n        background-color: white;\n        color: black;\n        font-size: 18px;\n        padding: 10px 10px 10px 5px;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: 0;\n        border-bottom: 1px solid #b68f40;\n        margin: 25px 0;\n        background-color: #f3f3f3;\n        transition: background-color .4s;\n\n        :focus{\n            outline: none;\n            background-color: #f3f3f3;\n        }\n        :focus ~ .form-input-label {\n            top: -14px;\n            font-size: 12px;\n            color: darkgrey;\n        }\n    }\n    .form-input-label {\n        color: black;\n        font-size: 16px;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 5px;\n        top: 10px;\n        transition: 300ms ease all;\n\n        &.shrink {\n            top: -14px;\n            font-size: 12px;\n            color:  black;\n        }\n    }\n}\n"]);return b=function(){return e},e}var g=t(13).a.div(b()),v=function(e){var n=e.handleChange,t=e.label,a=p()(e,["handleChange","label"]);return c.a.createElement(g,null,c.a.createElement("div",{className:"group"},c.a.createElement("input",s()({className:"form-input",onChange:n},a)),t?c.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},t):null))},y=t(52);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var h=t(100);n.default=function(){Object(y.a)();var e=Object(i.useReducer)((function(e,n){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){r()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,{},n)}),{name:"",email:"",subject:"",message:""}),n=o()(e,2),t=n[0],a=n[1],l=function(e){a(r()({},e.target.id,e.target.value))},u=function(e){document.getElementById("email_response").className="display",document.getElementById("email_response").textContent=e},s=t.name,m=t.message,p=t.email,d=t.subject;return c.a.createElement("div",null,c.a.createElement("form",{id:"form",style:{backgroundColor:"#f3f3f3",height:"fit-content",padding:"5% 3% 2% 3%"}},c.a.createElement("h1",null,"Send me an email:"),c.a.createElement("div",null,c.a.createElement(v,{type:"text",label:"name",value:s,id:"name",handleChange:l,required:!0}),c.a.createElement(v,{type:"email",label:"email",value:p,id:"email",onChange:l,required:!0})),c.a.createElement("div",null,c.a.createElement(v,{type:"text",label:"subject",value:d,id:"subject",onChange:l,required:!0})),c.a.createElement("div",null,c.a.createElement(v,{type:"textarea",label:"message",value:m,id:"message",onChange:l,required:!0})),c.a.createElement("button",{type:"submit",className:"button submit",onClick:function(e){e.preventDefault();var n=document.getElementById("form");if(!1===n.checkValidity())n.reportValidity();else{var a=t.name,r=t.email,l=t.subject,o=t.message;h.post("/api/form",{name:a,email:r,subject:l,message:o}).then((function(e){n.reset(),u(e.data)}))}}},"Submit"),c.a.createElement("div",null,c.a.createElement("span",{id:"email_response",className:"display_none"}))))}},52:function(e,n,t){"use strict";var a=t(0);n.a=function(){return Object(a.useLayoutEffect)((function(){window.scrollTo(0,0)}),[]),null}}}]);