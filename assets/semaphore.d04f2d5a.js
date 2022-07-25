import{N as t}from"./vendor.e1c4da11.js";var r="object"==typeof t&&t&&t.Object===Object&&t,e=r,n="object"==typeof self&&self&&self.Object===Object&&self,o=e||n||Function("return this")(),u=o.Symbol,c=u,a=Object.prototype,f=a.hasOwnProperty,i=a.toString,s=c?c.toStringTag:void 0;var p=function(t){var r=f.call(t,s),e=t[s];try{t[s]=void 0;var n=!0}catch(u){}var o=i.call(t);return n&&(r?t[s]=e:delete t[s]),o},l=Object.prototype.toString;var y=p,b=function(t){return l.call(t)},j=u?u.toStringTag:void 0;var v=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":j&&j in Object(t)?y(t):b(t)};var g=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},h=v,d=g;var O=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},x=function(t){if(!d(t))return!1;var r=h(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},m=O;var A=function(t){return null!=t&&m(t.length)&&!x(t)};var S=function(){};var w=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n};var k=function(t){return null!=t&&"object"==typeof t},F=v,T=k;var B,E,P,q,I,N,U,H,C=function(t){return T(t)&&"[object Arguments]"==F(t)},D=k,J=Object.prototype,M=J.hasOwnProperty,G=J.propertyIsEnumerable,L=C(function(){return arguments}())?C:function(t){return D(t)&&M.call(t,"callee")&&!G.call(t,"callee")},R=Array.isArray,V={exports:{}};B=V,P=o,q=function(){return!1},I=(E=V.exports)&&!E.nodeType&&E,N=I&&B&&!B.nodeType&&B,U=N&&N.exports===I?P.Buffer:void 0,H=(U?U.isBuffer:void 0)||q,B.exports=H;var W=/^(?:0|[1-9]\d*)$/;var $=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&W.test(t))&&t>-1&&t%1==0&&t<r},z=v,K=O,Q=k,X={};X["[object Float32Array]"]=X["[object Float64Array]"]=X["[object Int8Array]"]=X["[object Int16Array]"]=X["[object Int32Array]"]=X["[object Uint8Array]"]=X["[object Uint8ClampedArray]"]=X["[object Uint16Array]"]=X["[object Uint32Array]"]=!0,X["[object Arguments]"]=X["[object Array]"]=X["[object ArrayBuffer]"]=X["[object Boolean]"]=X["[object DataView]"]=X["[object Date]"]=X["[object Error]"]=X["[object Function]"]=X["[object Map]"]=X["[object Number]"]=X["[object Object]"]=X["[object RegExp]"]=X["[object Set]"]=X["[object String]"]=X["[object WeakMap]"]=!1;var Y=function(t){return Q(t)&&K(t.length)&&!!X[z(t)]};var Z=function(t){return function(r){return t(r)}},_={exports:{}};!function(t,e){var n=r,o=e&&!e.nodeType&&e,u=o&&t&&!t.nodeType&&t,c=u&&u.exports===o&&n.process,a=function(){try{var t=u&&u.require&&u.require("util").types;return t||c&&c.binding&&c.binding("util")}catch(r){}}();t.exports=a}(_,_.exports);var tt=Y,rt=Z,et=_.exports,nt=et&&et.isTypedArray,ot=nt?rt(nt):tt,ut=w,ct=L,at=R,ft=V.exports,it=$,st=ot,pt=Object.prototype.hasOwnProperty;var lt=function(t,r){var e=at(t),n=!e&&ct(t),o=!e&&!n&&ft(t),u=!e&&!n&&!o&&st(t),c=e||n||o||u,a=c?ut(t.length,String):[],f=a.length;for(var i in t)!r&&!pt.call(t,i)||c&&("length"==i||o&&("offset"==i||"parent"==i)||u&&("buffer"==i||"byteLength"==i||"byteOffset"==i)||it(i,f))||a.push(i);return a},yt=Object.prototype;var bt=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||yt)};var jt=function(t,r){return function(e){return t(r(e))}}(Object.keys,Object),vt=bt,gt=jt,ht=Object.prototype.hasOwnProperty;var dt=lt,Ot=function(t){if(!vt(t))return gt(t);var r=[];for(var e in Object(t))ht.call(t,e)&&"constructor"!=e&&r.push(e);return r},xt=A;var mt,At,St,wt,kt=function(t){return xt(t)?dt(t):Ot(t)},Ft={},Tt={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},Bt=function(t){throw{name:"SyntaxError",message:t,at:mt,text:St}},Et=function(t){return t&&t!==At&&Bt("Expected '"+t+"' instead of '"+At+"'"),At=St.charAt(mt),mt+=1,At},Pt=function(){var t,r="";for("-"===At&&(r="-",Et("-"));At>="0"&&At<="9";)r+=At,Et();if("."===At)for(r+=".";Et()&&At>="0"&&At<="9";)r+=At;if("e"===At||"E"===At)for(r+=At,Et(),"-"!==At&&"+"!==At||(r+=At,Et());At>="0"&&At<="9";)r+=At,Et();if(t=+r,isFinite(t))return t;Bt("Bad number")},qt=function(){var t,r,e,n="";if('"'===At)for(;Et();){if('"'===At)return Et(),n;if("\\"===At)if(Et(),"u"===At){for(e=0,r=0;r<4&&(t=parseInt(Et(),16),isFinite(t));r+=1)e=16*e+t;n+=String.fromCharCode(e)}else{if("string"!=typeof Tt[At])break;n+=Tt[At]}else n+=At}Bt("Bad string")},It=function(){for(;At&&At<=" ";)Et()};wt=function(){switch(It(),At){case"{":return function(){var t,r={};if("{"===At){if(Et("{"),It(),"}"===At)return Et("}"),r;for(;At;){if(t=qt(),It(),Et(":"),Object.hasOwnProperty.call(r,t)&&Bt('Duplicate key "'+t+'"'),r[t]=wt(),It(),"}"===At)return Et("}"),r;Et(","),It()}}Bt("Bad object")}();case"[":return function(){var t=[];if("["===At){if(Et("["),It(),"]"===At)return Et("]"),t;for(;At;){if(t.push(wt()),It(),"]"===At)return Et("]"),t;Et(","),It()}}Bt("Bad array")}();case'"':return qt();case"-":return Pt();default:return At>="0"&&At<="9"?Pt():function(){switch(At){case"t":return Et("t"),Et("r"),Et("u"),Et("e"),!0;case"f":return Et("f"),Et("a"),Et("l"),Et("s"),Et("e"),!1;case"n":return Et("n"),Et("u"),Et("l"),Et("l"),null}Bt("Unexpected '"+At+"'")}()}};var Nt,Ut,Ht,Ct=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,Dt={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function Jt(t){return Ct.lastIndex=0,Ct.test(t)?'"'+t.replace(Ct,(function(t){var r=Dt[t];return"string"==typeof r?r:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+t+'"'}function Mt(t,r){var e,n,o,u,c,a=Nt,f=r[t];switch(f&&"object"==typeof f&&"function"==typeof f.toJSON&&(f=f.toJSON(t)),"function"==typeof Ht&&(f=Ht.call(r,t,f)),typeof f){case"string":return Jt(f);case"number":return isFinite(f)?String(f):"null";case"boolean":case"null":return String(f);case"object":if(!f)return"null";if(Nt+=Ut,c=[],"[object Array]"===Object.prototype.toString.apply(f)){for(u=f.length,e=0;e<u;e+=1)c[e]=Mt(e,f)||"null";return o=0===c.length?"[]":Nt?"[\n"+Nt+c.join(",\n"+Nt)+"\n"+a+"]":"["+c.join(",")+"]",Nt=a,o}if(Ht&&"object"==typeof Ht)for(u=Ht.length,e=0;e<u;e+=1)"string"==typeof(n=Ht[e])&&(o=Mt(n,f))&&c.push(Jt(n)+(Nt?": ":":")+o);else for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(o=Mt(n,f))&&c.push(Jt(n)+(Nt?": ":":")+o);return o=0===c.length?"{}":Nt?"{\n"+Nt+c.join(",\n"+Nt)+"\n"+a+"}":"{"+c.join(",")+"}",Nt=a,o}}Ft.parse=function(t,r){var e;return St=t,mt=0,At=" ",e=wt(),It(),At&&Bt("Syntax error"),"function"==typeof r?function t(e,n){var o,u,c=e[n];if(c&&"object"==typeof c)for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(void 0!==(u=t(c,o))?c[o]=u:delete c[o]);return r.call(e,n,c)}({"":e},""):e},Ft.stringify=function(t,r,e){var n;if(Nt="",Ut="","number"==typeof e)for(n=0;n<e;n+=1)Ut+=" ";else"string"==typeof e&&(Ut=e);if(Ht=r,r&&"function"!=typeof r&&("object"!=typeof r||"number"!=typeof r.length))throw new Error("JSON.stringify");return Mt("",{"":t})};var Gt={exports:{}};!function(t,r){var e;e=function(t){setTimeout(t,0)},"undefined"!=typeof process&&process&&"function"==typeof process.nextTick&&(e=process.nextTick),t.exports=function(t){var r={capacity:t||1,current:0,queue:[],firstHere:!1,take:function(){if(!1===r.firstHere){r.current++,r.firstHere=!0;var t=1}else t=0;var e={n:1};"function"==typeof arguments[0]?e.task=arguments[0]:e.n=arguments[0],arguments.length>=2&&("function"==typeof arguments[1]?e.task=arguments[1]:e.n=arguments[1]);var n=e.task;if(e.task=function(){n(r.leave)},r.current+e.n-t>r.capacity)return 1===t&&(r.current--,r.firstHere=!1),r.queue.push(e);r.current+=e.n-t,e.task(r.leave),1===t&&(r.firstHere=!1)},leave:function(t){if(t=t||1,r.current-=t,r.queue.length){var n=r.queue[0];n.n+r.current>r.capacity||(r.queue.shift(),r.current+=n.n,e(n.task))}else if(r.current<0)throw new Error("leave called too many times.")},available:function(t){return t=t||1,r.current+t<=r.capacity}};return r}}(Gt);export{g as a,R as b,A as i,Ft as j,kt as k,S as n,Gt as s};
