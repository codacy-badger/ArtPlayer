(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.ArtplayerToolGithub = factory());
}(this, function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var issuesDanmuku = createCommonjsModule(function (module, exports) {
	!function(t,e){module.exports=e();}(commonjsGlobal,function(){var o=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t};var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(t){o(e,t,r[t]);});}return e};var t,a=(function(t){var e=function(i){var u,t=Object.prototype,s=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",n=e.toStringTag||"@@toStringTag";function a(t,e,r,n){var o=e&&e.prototype instanceof c?e:c,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(i,a,c){var u=f;return function(t,e){if(u===p)throw new Error("Generator is already running");if(u===y){if("throw"===t)throw e;return S()}for(c.method=t,c.arg=e;;){var r=c.delegate;if(r){var n=O(r,c);if(n){if(n===d)continue;return n}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===f)throw u=y,c.arg;c.dispatchException(c.arg);}else"return"===c.method&&c.abrupt("return",c.arg);u=p;var o=h(i,a,c);if("normal"===o.type){if(u=c.done?y:l,o.arg===d)continue;return {value:o.arg,done:c.done}}"throw"===o.type&&(u=y,c.method="throw",c.arg=o.arg);}}}(t,r,a),i}function h(t,e,r){try{return {type:"normal",arg:t.call(e,r)}}catch(t){return {type:"throw",arg:t}}}i.wrap=a;var f="suspendedStart",l="suspendedYield",p="executing",y="completed",d={};function c(){}function g(){}function v(){}var m={};m[o]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(P([])));b&&b!==t&&s.call(b,o)&&(m=b);var k=v.prototype=c.prototype=Object.create(m);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)};});}function L(u){var e;this._invoke=function(r,n){function t(){return new Promise(function(t,e){!function e(t,r,n,o){var i=h(u[t],u,r);if("throw"!==i.type){var a=i.arg,c=a.value;return c&&"object"==typeof c&&s.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,n,o);},function(t){e("throw",t,n,o);}):Promise.resolve(c).then(function(t){a.value=t,n(a);},function(t){return e("throw",t,n,o)})}o(i.arg);}(r,n,t,e);})}return e=e?e.then(t,t):t()};}function O(t,e){var r=t.iterator[e.method];if(r===u){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=u,O(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method");}return d}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=u),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e);}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e;}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0);}function P(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=u,t.done=!0,t};return n.next=n}}return {next:S}}function S(){return {value:u,done:!0}}return g.prototype=k.constructor=v,v.constructor=g,v[n]=g.displayName="GeneratorFunction",i.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return !!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,n in t||(t[n]="GeneratorFunction")),t.prototype=Object.create(k),t},i.awrap=function(t){return {__await:t}},x(L.prototype),L.prototype[r]=function(){return this},i.AsyncIterator=L,i.async=function(t,e,r,n){var o=new L(a(t,e,r,n));return i.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},x(k),k[n]="Generator",k[o]=function(){return this},k.toString=function(){return "[object Generator]"},i.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=P,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=u);},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=u),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return "break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r);}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=u),d}},i}(t.exports);try{regeneratorRuntime=e;}catch(t){Function("r","regeneratorRuntime = r")(e);}}(t={exports:{}},t.exports),t.exports);function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value;}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o);}var c=function(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){u(n,e,r,o,i,"next",t);}function i(t){u(n,e,r,o,i,"throw",t);}o(void 0);})}};var s=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}var h=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t},f="danmuku_settings";function l(t){var e=JSON.parse(window.localStorage.getItem(f))||{};return t?e[t]:e}function p(t,e){var r=Object.assign({},l(),o({},t,e));return window.localStorage.setItem(f,JSON.stringify(r))}function y(){return window.localStorage.removeItem(f)}function d(e){return Object.keys(e).map(function(t){return "".concat(t,"=").concat(window.encodeURIComponent(e[t]||""))}).join("&")}function g(t,e,r){if(!t)throw r&&r(),new Error("Danmuku Error: ".concat(e))}return function(){function e(t){s(this,e),this.options=Object.assign({},e.DEFAULT,t),this.limit=0,this.remaining=0,this.userInfo=null,this.token=null,this.isLogin=!1,this.init();}var t,r,n,o;return h(e,[{key:"init",value:(o=c(a.mark(function t(){var e,r,n,o,i;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(window.location.href.match(/([^?=&]+)(=([^&]*))/g)||[]).reduce(function(t,e){return t[e.slice(0,e.indexOf("="))]=e.slice(e.indexOf("=")+1),t},{}),r=e.code)return t.next=4,this.getToken(r);t.next=15;break;case 4:return g((n=t.sent).access_token,"Can not get token, Please login again!"),p("token",n.access_token),t.next=9,this.getUserInfo(n.access_token);case 9:g((o=t.sent).id,"Can not get user info, Please login again!"),p("userInfo",o),g(i=l("redirect_uri"),"Can not get redirect url, Please login again!"),window.history.replaceState(null,"",i);case 15:this.userInfo=l("userInfo"),this.token=l("token"),this.isLogin=!!this.userInfo&&!!this.token;case 18:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})},{key:"login",value:function(){y(),p("redirect_uri",window.location.href),window.location.href="http://github.com/login/oauth/authorize?".concat(d({state:"issues-danmuku",client_id:this.options.clientID,redirect_uri:window.location.href,scope:"public_repo"}));}},{key:"logout",value:function(){y(),window.location.reload();}},{key:"request",value:(n=c(a.mark(function t(e,r,n){var o,i;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=e.toUpperCase(),n=n&&JSON.stringify(n),o={"Content-Type":"application/json",Accept:"application/json"},this.token&&(o.Authorization="token ".concat(this.token)),t.prev=4,t.next=7,fetch(r,{method:e,headers:o,body:n});case 7:if(404===(i=t.sent).status)return t.abrupt("return",Promise.reject(new Error("Unauthorized")));t.next=12;break;case 12:if(401===i.status)return t.next=15,y();t.next=18;break;case 15:return t.abrupt("return",window.location.reload());case 18:return this.limit=Number(i.headers.get("X-RateLimit-Limit")),this.remaining=Number(i.headers.get("X-RateLimit-Remaining")),t.abrupt("return",i.json());case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(4),console.warn(t.t0,r);case 26:case"end":return t.stop()}},t,this,[[4,23]])})),function(t,e,r){return n.apply(this,arguments)})},{key:"urlQuery",value:function(t){return i({client_id:this.options.clientID,client_secret:this.options.clientSecret,t:Date.now()},t)}},{key:"getToken",value:function(t){var e=this.urlQuery({code:t,redirect_uri:window.location.href});return this.request("get","".concat(this.options.proxy,"?").concat(d(e)))}},{key:"getUserInfo",value:function(t){return this.request("get","https://api.github.com/user?access_token=".concat(t))}},{key:"load",value:(r=c(a.mark(function t(){var e;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.request("get","https://api.github.com/repos/".concat(this.options.api,"/comments?").concat(d(this.urlQuery({per_page:this.options.perPage,page:1}))));case 2:return e=t.sent,g(Array.isArray(e),"Can not get the danmuku, Please try again!"),t.abrupt("return",e.map(function(t){var e=JSON.parse(t.body);return i({id:t.id},e)}));case 5:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)})},{key:"send",value:(t=c(a.mark(function t(){var e,r,n,o=arguments;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=0<o.length&&void 0!==o[0]?o[0]:{},r=this.urlQuery({body:JSON.stringify(e)}),t.next=4,this.request("post","https://api.github.com/repos/".concat(this.options.api,"/comments"),r);case 4:return g((n=t.sent).id,"Can not send the danmu, Please try again!"),t.abrupt("return",JSON.parse(n.body));case 7:case"end":return t.stop()}},t,this)})),function(){return t.apply(this,arguments)})}],[{key:"DEFAULT",get:function(){return {api:"",clientID:"",clientSecret:"",perPage:1e3,proxy:"https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token"}}}]),e}()});
	});

	return issuesDanmuku;

}));
//# sourceMappingURL=artplayer-tool-github.js.map
