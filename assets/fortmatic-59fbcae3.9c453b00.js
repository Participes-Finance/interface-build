import{G as n}from"./vendor.e1c4da11.js";function e(n,e,r,t,o,u,i){try{var a=n[u](i),c=a.value}catch(s){return void r(s)}a.done?e(c):Promise.resolve(c).then(t,o)}function r(n){return function(){var r=this,t=arguments;return new Promise((function(o,u){var i=n.apply(r,t);function a(n){e(i,o,u,a,c,"next",n)}function c(n){e(i,o,u,a,c,"throw",n)}a(void 0)}))}}function t(e){var t,o=e.apiKey,u=e.networkId,i=e.preferred,a=e.label,c=e.iconSrc;return{name:a||"Fortmatic",svg:e.svg||'\n  <svg \n    height="40" \n    viewBox="0 0 40 40" \n    width="40" \n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path d="m2744.99995 1155h9.99997 10.00008v9.98139h-10.00008-9.99997-9.99998v9.9814.64001 9.28323.05815 9.9234h-9.99997v-9.9234-.05815-9.28323-.64001-9.9814-9.98139h9.99997zm9.99961 29.88552h-9.94167v-9.92324h19.93595v10.27235c0 2.55359-1.01622 5.00299-2.82437 6.80909-1.80867 1.8061-4.26182 2.82181-6.82018 2.82335h-.34973z" \n      fill="#617bff" \n      fill-rule="evenodd" \n      transform="translate(-2725 -1155)"/>\n  </svg>\n',iconSrc:c,wallet:(t=r(regeneratorRuntime.mark((function e(t){var i,a,c,s,f,v,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,import("./fortmatic.635862b7.js").then((function(n){return n.f}));case 2:return i=e.sent,a=i.default,c=new a(o,1===u?void 0:n(u)),s=c.getProvider(),f=t.BigNumber,v=t.getAddress,e.abrupt("return",{provider:s,instance:c,interface:{name:"Fortmatic",connect:function(){return c.user.login().then((function(n){return d=!0,n}))},disconnect:function(){return c.user.logout()},address:{get:function(){return d?v(s):Promise.resolve()}},network:{get:function(){return Promise.resolve(u)}},balance:{get:function(){var n=r(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",d&&c.user.getBalances().then((function(n){return n[0]?f(n[0].crypto_amount).times(f("1000000000000000000")).toString(10):null})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},dashboard:function(){return c.user.settings()}}});case 8:case"end":return e.stop()}}),e)}))),function(n){return t.apply(this,arguments)}),type:"sdk",desktop:!0,mobile:!0,preferred:i}}export default t;
