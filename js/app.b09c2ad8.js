(function(e){function t(t){for(var n,a,u=t[0],c=t[1],i=t[2],l=0,m=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function u(e){return c.p+"js/"+({"custom_model~squeezenet":"custom_model~squeezenet",custom_model:"custom_model",squeezenet:"squeezenet"}[e]||e)+"."+{"custom_model~squeezenet":"aa050466",custom_model:"252f5c34",squeezenet:"841de099"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"custom_model~squeezenet":1,custom_model:1,squeezenet:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({"custom_model~squeezenet":"custom_model~squeezenet",custom_model:"custom_model",squeezenet:"squeezenet"}[e]||e)+"."+{"custom_model~squeezenet":"b52bbd9f",custom_model:"34ffa3eb",squeezenet:"aed74564"}[e]+".css",o=c.p+n,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var i=s[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===o))return t()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){i=m[u],l=i.getAttribute("data-href");if(l===n||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],d.parentNode.removeChild(d),r(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var m=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",m.name="ChunkLoadError",m.type=n,m.request=a,r[1](m)}o[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/tractjs/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var m=0;m<i.length;m++)t(i[m]);var d=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("router-link",{attrs:{to:"/"}},[r("h1",{staticClass:"white--text font-weight-regular"},[e._v("tractjs")])])],1)]),r("v-content",{staticClass:"ma-4"},[r("router-view")],1)],1)},o=[],s=r("2877"),u=r("6544"),c=r.n(u),i=r("7496"),l=r("40dc"),m=r("a75b"),d={},f=Object(s["a"])(d,a,o,!1,null,null,null),p=f.exports;c()(f,{VApp:i["a"],VAppBar:l["a"],VContent:m["a"]});var h=r("f309"),v=r("fcf4");n["a"].use(h["a"]);var b=new h["a"]({theme:{themes:{light:{primary:v["a"].green.lighten1}}}}),_=(r("7db0"),r("d81d"),r("d3b7"),r("8c4f")),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("h2",{staticClass:"display-1"},[e._v("Demos")]),r("div",{staticClass:"d-flex flex-wrap mt-2 mb-6 pl-1"},e._l(e.demos,(function(t,n){return r("v-hover",{key:n,scopedSlots:e._u([{key:"default",fn:function(n){var a=n.hover;return[r("v-card",{staticClass:"ma-2 ml-0",attrs:{href:t.href,"min-height":"110",width:"300",elevation:a?4:2}},[r("v-card-title",[e._v(e._s(t.title))]),r("v-card-subtitle",[e._v(e._s(t.text))])],1)]}}],null,!0)})})),1),r("h2",{staticClass:"display-1"},[e._v("Resources")]),r("v-list",e._l(e.resources,(function(t,n){return r("v-list-item",{key:n,staticClass:"pa-0"},[r("v-btn",{staticClass:"pl-1",attrs:{text:"",href:t.href}},[r("span",{staticClass:"body-1 custom-transform-class text-none mr-2"},[e._v(e._s(t.title))]),r("v-icon",{attrs:{color:"primary"}},[e._v("mdi-open-in-new")])],1)],1)})),1)],1)},y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"body-1"},[e._v(" tractjs is an experimental Javascript library which wraps "),r("a",{attrs:{href:"https://github.com/snipsco/tract"}},[e._v("tract")]),e._v(" compiled to WebAssembly to run ONNX models in the browser. ")])}],w=r("5f35"),j=r.n(w),q={name:"App",components:{},data:function(){return{demos:[{title:"SqueezeNet inference",text:"Run SqueezeNet, trained on ImageNet, in the browser.",href:"squeezenet"},{title:"Custom model inference",text:"Upload a .onnx file and run data through it.",href:"custom-model"}],resources:[{title:"tractjs API documentation",href:j.a.publicPath+"docs"},{title:"tractjs on Github",href:"https://github.com/bminixhofer/tract-js"},{title:"tract on Github",href:"https://github.com/snipsco/tract"},{title:"tract on docs.rs",href:"https://docs.rs/tract-core/0.6.3/tract_core/"}]}}},C=q,x=r("8336"),z=r("b0af"),k=r("99d9"),O=r("ce87"),P=r("132d"),S=r("8860"),E=r("da13"),N=Object(s["a"])(C,g,y,!1,null,null,null),A=N.exports;c()(N,{VBtn:x["a"],VCard:z["a"],VCardSubtitle:k["a"],VCardTitle:k["b"],VHover:O["a"],VIcon:P["a"],VList:S["a"],VListItem:E["a"]});var V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{staticClass:"display-1"},[e._v("404 Not Found")])},T=[],L={},M=Object(s["a"])(L,V,T,!1,null,null,null),B=M.exports,D=r("6607");n["a"].use(_["a"]);var I=D.map((function(e){var t;switch(e.path){case"/":t=A;break;case"/squeezenet":t=function(){return Promise.all([r.e("custom_model~squeezenet"),r.e("squeezenet")]).then(r.bind(null,"3b1b"))};break;case"/custom-model":t=function(){return Promise.all([r.e("custom_model~squeezenet"),r.e("custom_model")]).then(r.bind(null,"33ba"))};break;case"*":t=B}return e.component=t,e})),$=new _["a"]({mode:"history",base:"/tractjs/",routes:I});$.beforeEach((function(e,t,r){var n=e.matched.reverse().find((function(e){return e.meta&&e.meta.title}));n&&(document.title=n.meta.title),r()}));var J=$;n["a"].config.productionTip=!1,new n["a"]({vuetify:b,router:J,render:function(e){return e(p)}}).$mount("#app")},"5f35":function(e,t,r){e.exports={transpileDependencies:["vuetify"],publicPath:"/tractjs/",chainWebpack:function(e){return e.resolve.symlinks(!1)}}},6607:function(e){e.exports=JSON.parse('[{"path":"/","name":"Home","meta":{"title":"tractjs"}},{"path":"/squeezenet","name":"Squeezenet","meta":{"title":"Squeezenet Demo - tractjs"}},{"path":"/custom-model","name":"CustomModel","meta":{"title":"Custom Model - tractjs"}},{"path":"*","name":"404","meta":{"title":"404 Page Not Found - tractjs"}}]')}});
//# sourceMappingURL=app.b09c2ad8.js.map