import{N as e}from"./vendor.e1c4da11.js";import{i as t}from"./subscriptionManager.dfce31ba.js";var n={exports:{}},r="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o=function(e){if(!e)return!1;var t=s.call(e);return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)},s=Object.prototype.toString;var i=function(e){return e.replace(/^\s+|\s+$/g,"")},a=r,u=o,p=function(e){if(!e)return{};for(var t,n={},r=i(e).split("\n"),o=0;o<r.length;o++){var s=r[o],a=s.indexOf(":"),u=i(s.slice(0,a)).toLowerCase(),p=i(s.slice(a+1));void 0===n[u]?n[u]=p:(t=n[u],"[object Array]"===Object.prototype.toString.call(t)?n[u].push(p):n[u]=[n[u],p])}return n},c=t;function d(e,t,n){var r=e;return u(t)?(n=t,"string"==typeof e&&(r={uri:e})):r=c(t,{uri:e}),r.callback=n,r}function f(e,t,n){return l(t=d(e,t,n))}function l(e){if(void 0===e.callback)throw new Error("callback argument missing");var t=!1,n=function(n,r,o){t||(t=!0,e.callback(n,r,o))};function r(){var e=void 0;if(e=u.response?u.response:u.responseText||function(e){try{if("document"===e.responseType)return e.responseXML;var t=e.responseXML&&"parsererror"===e.responseXML.documentElement.nodeName;if(""===e.responseType&&!t)return e.responseXML}catch(n){}return null}(u),h)try{e=JSON.parse(e)}catch(t){}return e}function o(e){return clearTimeout(c),e instanceof Error||(e=new Error(""+(e||"Unknown XMLHttpRequest Error"))),e.statusCode=0,n(e,v)}function s(){if(!a){var t;clearTimeout(c),t=e.useXDR&&void 0===u.status?200:1223===u.status?204:u.status;var o=v,s=null;return 0!==t?(o={body:r(),statusCode:t,method:l,headers:{},url:d,rawRequest:u},u.getAllResponseHeaders&&(o.headers=p(u.getAllResponseHeaders()))):s=new Error("Internal XMLHttpRequest Error"),n(s,o,o.body)}}var i,a,u=e.xhr||null;u||(u=e.cors||e.useXDR?new f.XDomainRequest:new f.XMLHttpRequest);var c,d=u.url=e.uri||e.url,l=u.method=e.method||"GET",w=e.body||e.data,m=u.headers=e.headers||{},y=!!e.sync,h=!1,v={body:void 0,headers:{},statusCode:0,method:l,url:d,rawRequest:u};if("json"in e&&!1!==e.json&&(h=!0,m.accept||m.Accept||(m.Accept="application/json"),"GET"!==l&&"HEAD"!==l&&(m["content-type"]||m["Content-Type"]||(m["Content-Type"]="application/json"),w=JSON.stringify(!0===e.json?w:e.json))),u.onreadystatechange=function(){4===u.readyState&&setTimeout(s,0)},u.onload=s,u.onerror=o,u.onprogress=function(){},u.onabort=function(){a=!0},u.ontimeout=o,u.open(l,d,!y,e.username,e.password),y||(u.withCredentials=!!e.withCredentials),!y&&e.timeout>0&&(c=setTimeout((function(){if(!a){a=!0,u.abort("timeout");var e=new Error("XMLHttpRequest timeout");e.code="ETIMEDOUT",o(e)}}),e.timeout)),u.setRequestHeader)for(i in m)m.hasOwnProperty(i)&&u.setRequestHeader(i,m[i]);else if(e.headers&&!function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(e.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in e&&(u.responseType=e.responseType),"beforeSend"in e&&"function"==typeof e.beforeSend&&e.beforeSend(u),u.send(w||null),u}n.exports=f,n.exports.default=f,f.XMLHttpRequest=a.XMLHttpRequest||function(){},f.XDomainRequest="withCredentials"in new f.XMLHttpRequest?f.XMLHttpRequest:a.XDomainRequest,function(e,t){for(var n=0;n<e.length;n++)t(e[n])}(["get","put","post","patch","head","delete"],(function(e){f["delete"===e?"del":e]=function(t,n,r){return(n=d(t,n,r)).method=e.toUpperCase(),l(n)}}));export{n as x};
