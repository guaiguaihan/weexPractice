// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=22)}({0:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(r[o]=!0)}for(s=0;s<t.length;s++){var i=t[s];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},1:function(e,t){e.exports=function(e,t,n,r,s){var o,i=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(o=e,i=e.default);var a="function"==typeof i?i.options:i;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r);var l;if(s?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},a._ssrRegister=l):n&&(l=n),l){var u=a.functional,d=u?a.render:a.beforeCreate;u?a.render=function(e,t){return l.call(t),d(e,t)}:a.beforeCreate=d?[].concat(d,l):[l]}return{esModule:o,exports:i,options:a}}},14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=0;t.default={data:function(){},methods:{change:function(e){r++,console.info("nihao"+r),console.log(e.value)}}}},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(o(n.parts[s]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],s=0;s<n.parts.length;s++)i.push(o(n.parts[s]));u[n.id]={id:n.id,refs:1,parts:i}}}}function s(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(y){var o=p++;r=f||(f=s()),t=i.bind(null,r,o,!1),n=i.bind(null,r,o,!0)}else r=s(),t=c.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var s=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,s);else{var o=document.createTextNode(s),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function c(e,t){var n=t.css,r=t.media,s=t.sourceMap;if(r&&e.setAttribute("media",r),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(3),u={},d=a&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var s=l(e,t);return r(s),function(t){for(var n=[],o=0;o<s.length;o++){var i=s[o],c=u[i.id];c.refs--,n.push(c)}t?(s=l(e,t),r(s)):s=[];for(var o=0;o<n.length;o++){var c=n[o];if(0===c.refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete u[c.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},22:function(e,t,n){"use strict";var r=n(6);r.el="#root",new Vue(r)},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},s=0;s<t.length;s++){var o=t[s],i=o[0],c=o[1],a=o[2],l=o[3],u={id:e+":"+s,css:c,media:a,sourceMap:l};r[i]?r[i].parts.push(u):n.push(r[i]={id:i,parts:[u]})}return n}},34:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.switch {\n    border-radius: 5px;\n    background-color: red;\n}\n.wrap {\n    display: flex;\n    flex-direction: column;\n}\n\n\n","",{version:3,sources:["/Users/hanchenghai/Desktop/Practice/weexPractice/WeexPractice/src/Switch.vue?418e5842"],names:[],mappings:";AA4BA;IACA,mBAAA;IACA,sBAAA;CACA;AAEA;IACA,cAAA;IACA,uBAAA;CACA",file:"Switch.vue",sourcesContent:['<template>\n    <div class="wrap">\n        <switch class="switch" checked="false"></switch>\n        <switch class="switch" checked="true"></switch>\n        <switch class="switch" checked="false" disabled=true></switch>\n        <switch class="switch" checked="true" disabled=false  @change="change"></switch>\n    </div>\n</template>\n\n<script>\n    var count = 0;\n    export default {\n        data() {\n\n        },\n        methods: {\n            change(event) {\n                count ++;\n                console.info("nihao"+ count)\n                console.log(event.value)\n            }\n        },\n    }\n\n<\/script>\n\n\n<style>\n    .switch {\n        border-radius: 5px;\n        background-color: red;\n    }\n\n    .wrap {\n        display: flex;\n        flex-direction: column;\n    }\n\n\n</style>'],sourceRoot:""}])},43:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[n("switch",{staticClass:"switch",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{checked:"false"}}),e._v(" "),n("switch",{staticClass:"switch",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{checked:"true"}}),e._v(" "),n("switch",{staticClass:"switch",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{checked:"false",disabled:"true"}}),e._v(" "),n("switch",{staticClass:"switch",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{checked:"true",disabled:"false"},on:{change:e.change}})])},staticRenderFns:[]},e.exports.render._withStripped=!0},52:function(e,t,n){var r=n(34);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("04f87c2a",r,!1)},6:function(e,t,n){function r(e){s||n(52)}var s=!1,o=n(1)(n(14),n(43),r,null,null);o.options.__file="/Users/hanchenghai/Desktop/Practice/weexPractice/WeexPractice/src/Switch.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] Switch.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports}});
//# sourceMappingURL=Switch.web.js.map