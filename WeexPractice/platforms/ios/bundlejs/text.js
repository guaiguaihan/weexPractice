// { "framework": "Vue"} 

!function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=29)}({16:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["root"]},[r("text",{staticClass:["text"],on:{click:t.click}},[t._v(t._s(t.text))]),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:["a"],attrs:{href:"http://dotwe.org/raw/dist/c1b1a5fdcf0937df1d847f8812a7ccb2.bundle.wx"}},[r("text",{staticClass:["text"]},[t._v("跳转")])])}]},t.exports.render._withStripped=!0},2:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:{text:"我是韩小醋"},methods:{click:function(){this.text="nihao"}}}},29:function(t,e,r){var o,n,i=[];i.push(r(7)),o=r(2);var s=r(16);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/hanchenghai/Desktop/Practice/weexPractice/WeexPractice/src/text.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-76fbd18e",n.style=n.style||{},i.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),t.exports=o,t.exports.el="true",new Vue(t.exports)},7:function(t,e){t.exports={root:{display:"flex",backgroundColor:"#ADD8E6",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},text:{marginTop:100,width:80,backgroundColor:"#008000",color:"#FFFFFF",borderStyle:"solid",borderWidth:2,borderColor:"#FF0000",fontStyle:"italic",textDecoration:"underline",textDecorationColor:"#0088fb",fontWeight:"bold",borderRadius:10,textAlign:"center",lines:1,textOverflow:"ellipsis",opacity:.3},a:{backgroundColor:"#BC8F8F",width:300,height:50}}}});