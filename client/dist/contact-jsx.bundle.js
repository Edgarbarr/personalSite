(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{32:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n.n(a),o=n(50),l=n.n(o),i=n(0),c=n.n(i),u=n(63),s=n.n(u),m=n(64),p=n.n(m),d=n(12).b.div.withConfig({componentId:"too2c4-0"})([".group{position:relative;margin:45px 0;.form-input{background:none;background-color:white;color:black;font-size:18px;padding:10px 10px 10px 5px;display:block;width:100%;border:none;border-radius:0;border-bottom:1px solid #b68f40;margin:25px 0;background-color:#f3f3f3;transition:background-color .4s;:focus{outline:none;background-color:#f3f3f3;}:focus ~ .form-input-label{top:-14px;font-size:12px;color:darkgrey;}}.form-input-label{color:black;font-size:16px;font-weight:normal;position:absolute;pointer-events:none;left:5px;top:10px;transition:300ms ease all;&.shrink{top:-14px;font-size:12px;color:black;}}}"]),f=function(e){var t=e.handleChange,n=e.label,a=p()(e,["handleChange","label"]);return c.a.createElement(d,null,c.a.createElement("div",{className:"group"},c.a.createElement("input",s()({className:"form-input",onChange:t},a)),n?c.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null))},b=n(47);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=n(66);t.default=function(){Object(b.a)();var e=Object(i.useReducer)((function(e,t){return h(h({},e),t)}),{name:"",email:"",subject:"",message:""}),t=l()(e,2),n=t[0],a=t[1],o=function(e){a(r()({},e.target.id,e.target.value))},u=function(e){document.getElementById("email_response").className="display",document.getElementById("email_response").textContent=e},s=n.name,m=n.message,p=n.email,d=n.subject;return c.a.createElement("div",null,c.a.createElement("form",{id:"form",style:{backgroundColor:"#f3f3f3",height:"fit-content",padding:"5% 3% 2% 3%"}},c.a.createElement("h1",null,"Send me an email:"),c.a.createElement("div",null,c.a.createElement(f,{type:"text",label:"name",value:s,id:"name",handleChange:o,required:!0}),c.a.createElement(f,{type:"email",label:"email",value:p,id:"email",onChange:o,required:!0})),c.a.createElement("div",null,c.a.createElement(f,{type:"text",label:"subject",value:d,id:"subject",onChange:o,required:!0})),c.a.createElement("div",null,c.a.createElement(f,{type:"textarea",label:"message",value:m,id:"message",onChange:o,required:!0})),c.a.createElement("button",{type:"submit",className:"button submit",onClick:function(e){e.preventDefault();var t=document.getElementById("form");if(!1===t.checkValidity())t.reportValidity();else{var a=n.name,r=n.email,o=n.subject,l=n.message;v.post("/api/form",{name:a,email:r,subject:o,message:l}).then((function(e){t.reset(),u(e.data)}))}}},"Submit"),c.a.createElement("div",null,c.a.createElement("span",{id:"email_response",className:"display_none"}))))}},47:function(e,t,n){"use strict";var a=n(0);t.a=function(){return Object(a.useLayoutEffect)((function(){window.scrollTo(0,0)}),[]),null}}}]);