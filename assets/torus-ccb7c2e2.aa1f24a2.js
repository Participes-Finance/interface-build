import{G as e}from"./vendor.e1c4da11.js";function r(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function t(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r,t,n,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void t(s)}a.done?r(u):Promise.resolve(u).then(n,o)}function i(e){return function(){var r=this,t=arguments;return new Promise((function(n,i){var c=e.apply(r,t);function a(e){o(c,n,i,a,u,"next",e)}function u(e){o(c,n,i,a,u,"throw",e)}a(void 0)}))}}function c(r){var n,o=r.networkId,c=r.preferred,a=r.label,u=r.iconSrc,s=r.svg,f=r.buttonPosition,l=r.modalZIndex,p=r.apiKey,d=r.buildEnv,g=r.enableLogging,h=r.enabledVerifiers,b=r.loginConfig,w=r.showTorusButton,v=r.integrity,m=r.whiteLabel,y=r.loginMethod,O=r.rpcUrl;return{name:a||"Torus",svg:s||'<svg width="257" height="277" viewBox="0 0 257 277" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="153.889" height="82.0741" fill="#0364FF" />\n<rect x="71.8135" width="82.0741" height="277" fill="#0364FF" />\n<path d="M215.443 82.0741C238.107 82.0741 256.48 63.7012 256.48 41.037C256.48 18.3729 238.107 0 215.443 \n0C192.779 0 174.406 18.3729 174.406 41.037C174.406 63.7012 192.779 82.0741 215.443 82.0741Z" fill="#0364FF" />\n</svg>',iconSrc:u,wallet:(n=i(regeneratorRuntime.mark((function r(n){var c,a,u,s,j;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=n.createModernProviderInterface,r.next=3,import("./torus.cjs.25a0fe26.js").then((function(e){return e.t}));case 3:return a=r.sent,u=a.default,s=new u({buttonPosition:f,modalZIndex:l,apiKey:p}),r.next=8,s.init({buildEnv:d,enableLogging:g,network:{host:O||e(o),chainId:o,networkName:"".concat(e(o)," Network")},showTorusButton:w,enabledVerifiers:h,loginConfig:b,integrity:v,whiteLabel:m});case 8:return j=s.provider,r.abrupt("return",{provider:j,interface:t(t({},c(j)),{},{name:"Torus",dashboard:function(){return s.showWallet("home")},connect:function(){var e=i(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.login({verifier:y});case 2:return r=e.sent,e.abrupt("return",{message:r[0]});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),disconnect:function(){return s.cleanUp()}}),instance:s});case 10:case"end":return r.stop()}}),r)}))),function(e){return n.apply(this,arguments)}),type:"sdk",desktop:!0,mobile:!0,preferred:c}}export default c;
