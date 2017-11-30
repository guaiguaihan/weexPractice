// { "framework": "Vue"} 

!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=25)}({0:function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<n.length;o++){var s=n[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),e.push(s))}},e}},1:function(e,n){e.exports=function(e,n,t,r,o){var a,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(a=e,s=e.default);var u="function"==typeof s?s.options:s;n&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns),r&&(u._scopeId=r);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):t&&(c=t),c){var l=u.functional,d=l?u.render:u.beforeCreate;l?u.render=function(e,n){return c.call(n),d(e,n)}:u.beforeCreate=d?[].concat(d,c):[c]}return{esModule:a,exports:s,options:u}}},16:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{value:""}},methods:{input:function(e){console.log(e)},focus:function(e){console.log(e)},blur:function(e){console.log(e)}}}},2:function(e,n,t){function r(e){for(var n=0;n<e.length;n++){var t=e[n],r=l[t.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](t.parts[o]);for(;o<t.parts.length;o++)r.parts.push(a(t.parts[o]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{for(var s=[],o=0;o<t.parts.length;o++)s.push(a(t.parts[o]));l[t.id]={id:t.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function a(e){var n,t,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(x){var a=p++;r=f||(f=o()),n=s.bind(null,r,a,!1),t=s.bind(null,r,a,!0)}else r=o(),n=i.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}function s(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(n,o);else{var a=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(a,s[n]):e.appendChild(a)}}function i(e,n){var t=n.css,r=n.media,o=n.sourceMap;if(r&&e.setAttribute("media",r),o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=t(3),l={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,n,t){v=t;var o=c(e,n);return r(o),function(n){for(var t=[],a=0;a<o.length;a++){var s=o[a],i=l[s.id];i.refs--,t.push(i)}n?(o=c(e,n),r(o)):o=[];for(var a=0;a<t.length;a++){var i=t[a];if(0===i.refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete l[i.id]}}}};var g=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},25:function(e,n,t){"use strict";var r=t(9);r.el="#root",new Vue(r)},3:function(e,n){e.exports=function(e,n){for(var t=[],r={},o=0;o<n.length;o++){var a=n[o],s=a[0],i=a[1],u=a[2],c=a[3],l={id:e+":"+o,css:i,media:u,sourceMap:c};r[s]?r[s].parts.push(l):t.push(r[s]={id:s,parts:[l]})}return t}},37:function(e,n,t){n=e.exports=t(0)(),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*伪类格式*/\n.textarea:disabled {\n    background-color: lightgray;\n}\n.textarea:active {\n    background-color: cornflowerblue;\n}\n.textarea:focus {\n    background-color: green;\n}\n.textarea:enabled {\n    background-color: palegoldenrod;\n}\n","",{version:3,sources:["/Users/hanchenghai/Desktop/Practice/weexPractice/WeexPractice/src/textArea.vue?fe502a0a"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+CA,QAAA;AACA;IACA,4BAAA;CACA;AAEA;IACA,iCAAA;CACA;AAEA;IACA,wBAAA;CACA;AAEA;IACA,gCAAA;CACA",file:"textArea.vue",sourcesContent:["\n\x3c!--1.pxlacehold 设置占位符,提醒用户应该输入什么内容,或者输入的规则,只能输入数字等等--\x3e\n\x3c!--2.disabled 设置是否支持用户输入,设置为true--\x3e\n\x3c!--3.autofocus进入页面是否自动获得焦点--\x3e\n\x3c!--4.rows 组件允许显示的行数--\x3e\n\x3c!--5.如何将数据和变量进行绑定--\x3e\n\x3c!--6.慎用伪类,前方有坑--\x3e\n\x3c!--7.高度和行数同时设置,会怎么样--\x3e\n\x3c!--8.textarea事件检测--\x3e\n\n\n<template>\n    <div>\n\n        <textarea class=\"textarea\" placeholder=\"请输入您的姓名\" disabled='false' autofocus=\"true\" rows='10' v-model='value'\n                  @input='input' @focus='focus' @blur='blur'>\n        </textarea>\n\n    </div>\n</template>\n\n\n<script>\n    export default {\n        data: function () {\n            return {\n                value: '',\n            }\n        },\n        methods: {\n            input(e) {\n                console.log(e)\n\n            },\n            focus(e) {\n                console.log(e)\n            },\n            blur(e) {\n                console.log(e)\n            }\n        }\n    }\n\n<\/script>\n\n\n<style>\n    /*伪类格式*/\n    .textarea:disabled {\n        background-color: lightgray;\n    }\n\n    .textarea:active {\n        background-color: cornflowerblue;\n    }\n\n    .textarea:focus {\n        background-color: green;\n    }\n\n    .textarea:enabled {\n        background-color: palegoldenrod;\n    }\n</style>"],sourceRoot:""}])},46:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"textarea",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{placeholder:"请输入您的姓名",disabled:"false",autofocus:"true",rows:"10"},domProps:{value:e.value},on:{input:[function(n){n.target.composing||(e.value=n.target.value)},e.input],focus:e.focus,blur:e.blur}})])},staticRenderFns:[]},e.exports.render._withStripped=!0},55:function(e,n,t){var r=t(37);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(2)("3da4cfa1",r,!1)},9:function(e,n,t){function r(e){o||t(55)}var o=!1,a=t(1)(t(16),t(46),r,null,null);a.options.__file="/Users/hanchenghai/Desktop/Practice/weexPractice/WeexPractice/src/textArea.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] textArea.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports}});
//# sourceMappingURL=textArea.web.js.map