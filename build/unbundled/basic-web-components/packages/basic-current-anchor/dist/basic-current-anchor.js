!function e(t,r,n){function o(a,c){if(!r[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var s=r[a]={exports:{}};t[a][0].call(s.exports,function(e){var r=t[a][1][e];return o(r?r:e)},s,s.exports,e,t,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){var t=e.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()});return t}var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)};Object.defineProperty(r,"__esModule",{value:!0});var u={};r.default=function(e){var t=function(e){function t(){return n(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"attributeChangedCallback",value:function(e,r,n){l(Object.getPrototypeOf(t.prototype),"attributeChangedCallback",this)&&l(Object.getPrototypeOf(t.prototype),"attributeChangedCallback",this).call(this);var o=u[e];o||(o=a(e),u[e]=o),o in this&&!(o in HTMLElement.prototype)&&(this[o]=n)}},{key:"createdCallback",value:function(){var e=this;l(Object.getPrototypeOf(t.prototype),"createdCallback",this)&&l(Object.getPrototypeOf(t.prototype),"createdCallback",this).call(this);var r=[].slice.call(this.attributes);r.forEach(function(t){e.attributeChangedCallback(t.name,void 0,t.value)})}}]),t}(e);return t}},{}],2:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if("function"==typeof t)return t(e);var r=function(e){function t(){return n(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(e);return c(t,r.prototype,u),r}function c(e,t){var r=arguments.length<=2||void 0===arguments[2]?[]:arguments[2];return Object.getOwnPropertyNames(e).forEach(function(n){if(r.indexOf(n)<0){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o)}}),t}var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var t=function(e){function t(){return n(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),l(t,null,[{key:"compose",value:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(a,this)}}]),t}(e);return t};var u=["constructor"]},{}],3:[function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){var r,o=Array.prototype.map.call(e,function(e){if("slot"===e.localName||"content"===e.localName){var r=void 0;return e.assignedNodes?r=e.assignedNodes({flatten:!0}):e.getDistributedNodes&&(r=e.getDistributedNodes()),r?c(r,t):[]}return e instanceof HTMLElement?[e]:e instanceof Text&&t?[e]:[]}),i=(r=[]).concat.apply(r,n(o));return i}var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var t=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"distributedChildren",get:function(){return c(this.children,!1)}},{key:"distributedChildNodes",get:function(){return c(this.childNodes,!0)}},{key:"distributedTextContent",get:function(){var e=this.distributedChildNodes.map(function(e){return e.textContent});return e.join("")}}]),t}(e);return t}},{}],4:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var t=function(e){function t(){return n(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"createdCallback",value:function(){var e=this;if(c(Object.getPrototypeOf(t.prototype),"createdCallback",this)&&c(Object.getPrototypeOf(t.prototype),"createdCallback",this).call(this),this.shadowRoot){this.$={};var r=this.shadowRoot.querySelectorAll("[id]");[].forEach.call(r,function(t){var r=t.getAttribute("id");e.$[r]=t})}}}]),t}(e);return t}},{}],5:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){var t=document.createElement("template"),r=document.createElement("div");for(r.innerHTML=e;r.childNodes.length>0;)t.content.appendChild(r.childNodes[0]);return t}function c(e){[].forEach.call(e.content.querySelectorAll("slot"),function(e){var t=document.createElement("content");e.parentNode.replaceChild(t,e)})}function l(e,t){window.WebComponents.ShadowCSS.shimStyling(e.content,t)}var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)};Object.defineProperty(r,"__esModule",{value:!0});var f="undefined"!=typeof HTMLElement.prototype.createShadowRoot;r.default=function(e){var t=function(e){function t(){return n(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"createdCallback",value:function(){s(Object.getPrototypeOf(t.prototype),"createdCallback",this)&&s(Object.getPrototypeOf(t.prototype),"createdCallback",this).call(this);var e=this.template;if(e){"string"==typeof e&&(e=a(e)),f&&c(e),window.ShadowDOMPolyfill&&l(e,this.localName);var r=f?this.createShadowRoot():this.attachShadow({mode:"open"}),n=document.importNode(e.content,!0);r.appendChild(n)}}}]),t}(e);return t}},{}],6:[function(e,t,r){"use strict";function n(e){return"function"==typeof Symbol?Symbol(e):"_"+e}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n},{}],7:[function(e,t,r){"use strict";function n(e,t,r){var n=e.classList,o="undefined"==typeof r?!n.contains(t):r;return o?n.add(t):n.remove(t),o}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n},{}],8:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){var t=window.location.href,r=void 0;if(e.areaLink){var n=e.href;n.length<t.length&&"/"!==n.substr(-1)&&(n+="/"),r=t.substr(0,n.length)===n}else r=t===e.href;e.current=r}var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function e(t,r,n,o){var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,r,n,o)}else if("value"in i&&i.writable)i.value=n;else{var c=i.set;void 0!==c&&c.call(o,n)}return n},s=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},f=e("../../basic-component-mixins/src/createSymbol"),p=n(f),b=e("../../basic-wrapped-standard-element/src/WrappedStandardElement"),y=n(b),d=e("../../basic-component-mixins/src/toggleClass"),h=n(d),v=(0,p.default)("areaLink"),O=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"attachedCallback",value:function(){s(Object.getPrototypeOf(t.prototype),"attachedCallback",this)&&s(Object.getPrototypeOf(t.prototype),"attachedCallback",this).call(this),c(this)}},{key:"createdCallback",value:function(){var e=this;s(Object.getPrototypeOf(t.prototype),"createdCallback",this)&&s(Object.getPrototypeOf(t.prototype),"createdCallback",this).call(this),window.addEventListener("popstate",function(t){c(e)}),window.addEventListener("hashchange",function(t){c(e)}),"undefined"==typeof this.areaLink&&(this.areaLink=this.defaults.areaLink)}},{key:"areaLink",get:function(){return this[v]},set:function(e){this[v]="true"===String(e),c(this)}},{key:"current",get:function(){return this.classList.contains("current")},set:function(e){(0,h.default)(this,"current",e),this.dispatchEvent(new CustomEvent("current-changed"))}},{key:"defaults",get:function(){var e=s(Object.getPrototypeOf(t.prototype),"defaults",this)||{};return e.areaLink=!1,e}},{key:"href",get:function(){return s(Object.getPrototypeOf(t.prototype),"href",this)},set:function(e){u(Object.getPrototypeOf(t.prototype),"href",e,this),c(this)}},{key:"template",get:function(){return'\n      <style>\n      :host {\n        display: inline-block;\n      }\n\n      #inner {\n        color: inherit;\n        display: inline-block;\n        text-decoration: inherit;\n      }\n      </style>\n      <a id="inner"><slot></slot></a>'}}]),t}(y.default.wrap("a"));document.registerElement("basic-current-anchor",O)},{"../../basic-component-mixins/src/createSymbol":6,"../../basic-component-mixins/src/toggleClass":7,"../../basic-wrapped-standard-element/src/WrappedStandardElement":10}],9:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)};Object.defineProperty(r,"__esModule",{value:!0});var u=e("../../basic-component-mixins/src/Composable"),s=n(u),f=e("../../basic-component-mixins/src/ShadowTemplate"),p=n(f),b=e("../../basic-component-mixins/src/ShadowElementReferences"),y=n(b),d=e("../../basic-component-mixins/src/AttributeMarshalling"),h=n(d),v=e("../../basic-component-mixins/src/DistributedChildren"),O=n(v),g=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),c(t,[{key:"log",value:function(e){l(Object.getPrototypeOf(t.prototype),"log",this)&&l(Object.getPrototypeOf(t.prototype),"log",this).call(this,e),console.log(this.localName+": "+e)}}]),t}((0,s.default)(HTMLElement).compose(p.default,y.default,h.default,O.default));r.default=g},{"../../basic-component-mixins/src/AttributeMarshalling":1,"../../basic-component-mixins/src/Composable":2,"../../basic-component-mixins/src/DistributedChildren":3,"../../basic-component-mixins/src/ShadowElementReferences":4,"../../basic-component-mixins/src/ShadowTemplate":5}],10:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){var r={configurable:t.configurable,enumerable:t.enumerable};return t.get&&(r.get=function(){return this.inner[e]}),t.set&&(r.set=function(t){this.inner[e]=t}),t.writable&&(r.writable=t.writable),r}var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)};Object.defineProperty(r,"__esModule",{value:!0});var s=e("../../basic-element-base/src/ElementBase"),f=n(s),p={address:["scroll"],blockquote:["scroll"],caption:["scroll"],center:["scroll"],dd:["scroll"],dir:["scroll"],div:["scroll"],dl:["scroll"],dt:["scroll"],fieldset:["scroll"],form:["reset","scroll"],frame:["load"],h1:["scroll"],h2:["scroll"],h3:["scroll"],h4:["scroll"],h5:["scroll"],h6:["scroll"],iframe:["load"],img:["abort","error","load"],input:["abort","change","error","select","load"],keygen:["reset","select"],li:["scroll"],link:["load"],menu:["scroll"],object:["error","scroll"],ol:["scroll"],p:["scroll"],script:["error","load"],select:["change","scroll"],tbody:["scroll"],tfoot:["scroll"],thead:["scroll"],textarea:["change","select","scroll"]},b={abort:!0,change:!0,reset:!0},y=["address","article","aside","blockquote","canvas","dd","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","section","table","tfoot","ul","video"],d=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"createdCallback",value:function(){var e=this;u(Object.getPrototypeOf(t.prototype),"createdCallback",this)&&u(Object.getPrototypeOf(t.prototype),"createdCallback",this).call(this);var r=p[this.extends]||[];r.forEach(function(t){e.inner.addEventListener(t,function(r){var n=new Event(t,{bubbles:b[t]||!1});e.dispatchEvent(n)})})}},{key:"ariaLabel",get:function(){return this.inner.getAttribute("aria-label")},set:function(e){this.inner.setAttribute("aria-label",e)}},{key:"inner",get:function(){return this.$.inner}},{key:"template",get:function(){var e=y.indexOf(this.extends)>=0?"block":"inline-block";return"<style>:host { display: "+e+"}</style><"+this.extends+' id="inner"><content></content></'+this.extends}}],[{key:"wrap",value:function(e){var r=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),t}(t);r.prototype.extends=e;var n=document.createElement(e),l=n.constructor.prototype,u=Object.getOwnPropertyNames(l);return u.forEach(function(e){var t=Object.getOwnPropertyDescriptor(l,e),n=c(e,t);Object.defineProperty(r.prototype,e,n)}),r}}]),t}(f.default);r.default=d},{"../../basic-element-base/src/ElementBase":9}]},{},[8]);