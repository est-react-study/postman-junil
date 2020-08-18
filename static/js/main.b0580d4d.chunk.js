(this["webpackJsonppostman-junil"]=this["webpackJsonppostman-junil"]||[]).push([[0],{21:function(n,t,e){n.exports=e(52)},26:function(n,t,e){},52:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e.n(r),c=e(11),o=e.n(c),i=(e(26),e(2)),u=e(0);function b(){var n=Object(i.a)(["\n  border-bottom: 2px solid #06F;\n  padding: 15px;\n  margin: 0;\n  font-size: 21px;\n  font-weight: 400;\n"]);return b=function(){return n},n}var l=Object(u.a)(b()),s=function(){return Object(u.b)("section",null,Object(u.b)("h2",{css:l},"History"))},d=function(){return a.a.createElement("aside",{className:"asideContainer"},a.a.createElement(s,null))},f=e(4),p=e(3),j=["GET","POST","PUT","PATCH","DELETE"],O=["Params","Headers","Body"],v=Object(p.atom)({key:"methodState",default:j[0]}),g=Object(p.atom)({key:"tabState",default:0}),m=Object(p.atom)({key:"headersState",default:[]}),x=Object(p.selector)({key:"headersSelector",get:function(n){return(0,n.get)(m).reduce((function(n,t){var e=t.key,r=t.value;return[e.trim(),r.trim()].includes("")||(n[e]=r),n}),{})}}),h=Object(p.atom)({key:"paramsState",default:[]});function y(){var n=Object(i.a)(["\n  && {\n    padding: 20px;\n    \n    .noneData {\n      background: #f5f5f5;\n      border-radius: 3px;\n      border: 1px solid #ddd;\n      padding: 20px 0;\n      text-align: center;\n      color: #666;\n      font-size: 13px;\n    }\n    \n    ul {\n      max-width: 1000px;\n    }\n    \n    li {\n      margin-bottom: 5px;\n    }\n  }\n"]);return y=function(){return n},n}function k(){var n=Object(i.a)(['\n  && {\n    display: flex;\n    border-bottom: 1px dotted #ddd;\n    padding: 0 10px;\n    \n    li {\n      padding: 15px 10px;\n      position: relative;\n      color: #aaa;\n      font-size: 13px;\n      cursor: pointer;\n      transition: color 0.3s;\n      \n      &::after {\n        content: "";\n        display: block;\n        position: absolute;\n        left: 50%;\n        right: 50%;\n        height: 3px;\n        background: #06F;\n        bottom: -1px;\n        transition-property: left, right;\n        transition-duration: 0.3s;\n      }\n      \n      &:hover {\n        color: #000;\n      }\n      \n      &.active {\n        color: #000;\n        &::after {\n          left: 0;\n          right: 0;\n        }\n      }\n    }\n  }\n']);return k=function(){return n},n}function E(){var n=Object(i.a)(["\n  margin-left: 5px;\n  width: 85px;\n  font-weight: bold;\n  height: 36px;\n  padding: 0 10px;\n"]);return E=function(){return n},n}function C(){var n=Object(i.a)(["\n  ","\n  border-radius: 0 3px 3px 0;\n  margin-left: -1px;\n  width: calc(100% - 190px);\n"]);return C=function(){return n},n}function w(){var n=Object(i.a)(["\n  ","\n  border-radius: 3px 0 0 3px;\n  width: 100px;\n"]);return w=function(){return n},n}function S(){var n=Object(i.a)(["\n  border: 1px solid #bbb;\n  background: #f5f5f5;\n  border-radius: 2px;\n  font-size: 13px;\n  height: 36px;\n  padding: 0 10px;\n  box-sizing: border-box;\n  transition: background-color 0.15s;\n  \n  &:focus {\n    background: #fff;\n    outline: none;\n  }\n"]);return S=function(){return n},n}function z(){var n=Object(i.a)(["\n  padding: 10px;\n  border-bottom: 1px solid #ddd;\n  display: flex;\n"]);return z=function(){return n},n}var R=Object(u.a)(z()),D=Object(u.a)(S()),N=Object(u.a)(w(),D),T=Object(u.a)(C(),D),A=Object(u.a)(E()),F=Object(u.a)(k()),P=Object(u.a)(y()),B=e(8);function H(){var n=Object(i.a)(["\n    ","\n    ","\n  "]);return H=function(){return n},n}function I(){var n=Object(i.a)(["\n  border: none;\n  border-radius: 2px;\n  background-color: #09F;\n  color: #fff;\n  padding: 7px 10px;\n  transition-property: background-color, opacity;\n  transition-duration: 0.2s;\n  box-sizing: border-box;\n  \n  &:not(:disabled) {\n    &:hover,\n    &:focus {\n      background-color: #06F;\n      outline: none;\n    }\n  }\n  \n  &:disabled {\n    opacity: 0.5\n  }\n"]);return I=function(){return n},n}var J=Object(u.a)(I()),U=function(n){var t=n.overrideCss,e=Object(B.a)(n,["overrideCss"]),r=Object(u.a)(H(),J,t);return Object(u.b)("button",Object.assign({},e,{css:r}),e.children)},V=/^https?:\/\/[a-zA-Z0-9\uac00-\ud7a3._-]+\.[a-zA-Z]+$/,W=function(n){return n.length>0&&V.test(n)},Z=function(){var n=Object(p.useRecoilState)(v),t=Object(f.a)(n,2),e=t[0],a=t[1],c=Object(p.useRecoilValue)(h),o=Object(p.useRecoilValue)(x),i=Object(r.useState)(""),b=Object(f.a)(i,2),l=b[0],s=b[1],d=Object(r.useState)(!0),O=Object(f.a)(d,2),g=O[0],m=O[1],y=function(){if(!W(l))return m(!0);var n="".concat(l).concat(function(n){var t=n.filter((function(n){var t=n.key,e=n.value;return![t.trim(),e.trim()].includes("")})).map((function(n){var t=n.key,e=n.value;return"".concat(t,"=").concat(encodeURIComponent(e))})).join("&");return t.length?"?".concat(t):""}(c));fetch(n,{headers:o}).then((function(n){return n.json()})).then(console.log)};return Object(u.b)("div",{css:R},Object(u.b)("select",{value:e,onChange:function(n){var t=n.target;a(t.value)},css:N},j.map((function(n,t){return Object(u.b)("option",{value:n,key:t},n)}))),Object(u.b)("input",{type:"text",css:T,onChange:function(n){var t=n.target;s(t.value),m(!W(l))},onKeyDown:function(n){13===n.keyCode&&y()}}),Object(u.b)(U,{type:"button",overrideCss:A,onClick:y,disabled:g,children:"Send"}))};function $(){var n=Object(i.a)(["\n  ","\n  ","\n"]);return $=function(){return n},n}function q(){var n=Object(i.a)(["\n  p {\n    margin: 0;\n    padding: 0;\n  }\n"]);return q=function(){return n},n}function G(){var n=Object(i.a)(["\n  ul, li {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n"]);return G=function(){return n},n}var K=Object(u.a)(G()),L=Object(u.a)(q()),M=Object(u.a)($(),K,L),_=e(7),Q=e(20),X=e(12);function Y(){var n=Object(i.a)(["\n        ","\n        ","\n      "]);return Y=function(){return n},n}var nn=function(n){var t=n.overrideCss,e=Object(B.a)(n,["overrideCss"]);return Object(u.b)("input",Object.assign({},e,{css:Object(u.a)(Y(),"\n  padding: 10px;\n  background: #fff;\n  border-radius: 2px;\n  border: 1px solid #bbb;\n  font-size: 13px;\n  box-sizing: border-box;\n  \n  + input,\n  + button,\n  + select {\n    margin-left: 5px;\n  }\n  \n  &:focus {\n    outline: none;\n  }\n",t)}))};function tn(){var n=Object(i.a)(["margin-top: 10px;"]);return tn=function(){return n},n}function en(){var n=Object(i.a)(["\n  width: calc(50% - 2.5px)  \n"]);return en=function(){return n},n}var rn=Object(u.a)(en()),an=function(n){var t=n.data,e=n.setData,r=function(n,r){return function(a){var c=Object(X.a)(t);c[r]=Object(Q.a)({},c[r],Object(_.a)({},n,a.target.value)),e(c)}};return Object(u.b)("div",{css:P},0!==t.length?Object(u.b)("ul",null,t.map((function(n,t){var e=n.key,a=n.value;return Object(u.b)("li",{key:t},Object(u.b)(nn,{type:"text",value:e,onChange:r("key",t),overrideCss:rn,placeholder:"key"}),Object(u.b)(nn,{type:"text",value:a,onChange:r("value",t),overrideCss:rn,placeholder:"value"}))}))):Object(u.b)("p",{className:"noneData"},"\ud604\uc7ac \ub4f1\ub85d\ub41c \ud30c\ub77c\ubbf8\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),Object(u.b)("div",{css:Object(u.a)(tn())},Object(u.b)(U,{type:"button",onClick:function(){return e([].concat(Object(X.a)(t),[{key:"",value:""}]))},children:"\ucd94\uac00"})))},cn=function(){var n=Object(p.useRecoilState)(h),t=Object(f.a)(n,2),e=t[0],r=t[1];return a.a.createElement("article",null,a.a.createElement(an,{data:e,setData:r}))},on=function(){var n=Object(p.useRecoilState)(m),t=Object(f.a)(n,2),e=t[0],r=t[1];return a.a.createElement("article",null,a.a.createElement(an,{data:e,setData:r}))},un=function(){return a.a.createElement("article",null)},bn=function(){var n=Object(p.useRecoilState)(g),t=Object(f.a)(n,2),e=t[0],r=t[1];return Object(u.b)("div",{css:M},Object(u.b)("ul",{css:F},O.map((function(n,t){return Object(u.b)("li",{key:t,className:t===e?"active":"",onClick:function(){return r(t)}},n)}))),0===e?Object(u.b)(cn,null):1===e?Object(u.b)(on,null):2===e?Object(u.b)(un,null):"")};function ln(){var n=Object(i.a)(["\n  font-size: 21px;\n  margin: 0;\n  padding: 15px;\n  font-weight: 400;\n"]);return ln=function(){return n},n}var sn=Object(u.a)(ln()),dn=function(){return Object(u.b)("section",null,Object(u.b)("h3",{css:sn},"Request"),Object(u.b)(Z,null),Object(u.b)(bn,null))},fn=function(){return a.a.createElement("section",{className:"formContainer"},a.a.createElement(dn,null))},pn=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(d,null),a.a.createElement(fn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(p.RecoilRoot,null,a.a.createElement(a.a.StrictMode,null,a.a.createElement(pn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.b0580d4d.chunk.js.map