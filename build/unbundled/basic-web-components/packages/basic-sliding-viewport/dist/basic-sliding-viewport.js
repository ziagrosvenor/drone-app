!function e(t,n,r){function o(c,a){if(!n[c]){if(!t[c]){var u="function"==typeof require&&require;if(!a&&u)return u(c,!0);if(i)return i(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var s=n[c]={exports:{}};t[c][0].call(s.exports,function(e){var n=t[c][1][e];return o(n?n:e)},s,s.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){var t=e.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()});return t}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var c=o.get;if(void 0!==c)return c.call(r)};Object.defineProperty(n,"__esModule",{value:!0});var l={};n.default=function(e){var t=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"attributeChangedCallback",value:function(e,n,r){u(Object.getPrototypeOf(t.prototype),"attributeChangedCallback",this)&&u(Object.getPrototypeOf(t.prototype),"attributeChangedCallback",this).call(this);var o=l[e];o||(o=c(e),l[e]=o),o in this&&!(o in HTMLElement.prototype)&&(this[o]=r)}},{key:"createdCallback",value:function(){var e=this;u(Object.getPrototypeOf(t.prototype),"createdCallback",this)&&u(Object.getPrototypeOf(t.prototype),"createdCallback",this).call(this);var n=[].slice.call(this.attributes);n.forEach(function(t){e.attributeChangedCallback(t.name,void 0,t.value)})}}]),t}(e);return t}},{}],2:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){if("function"==typeof t)return t(e);var n=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(e);return a(t,n.prototype,l),n}function a(e,t){var n=arguments.length<=2||void 0===arguments[2]?[]:arguments[2];return Object.getOwnPropertyNames(e).forEach(function(r){if(n.indexOf(r)<0){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o)}}),t}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var t=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,null,[{key:"compose",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(c,this)}}]),t}(e);return t};var l=["constructor"]},{}],3:[function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){var n,o=Array.prototype.map.call(e,function(e){if("slot"===e.localName||"content"===e.localName){var n=void 0;return e.assignedNodes?n=e.assignedNodes({flatten:!0}):e.getDistributedNodes&&(n=e.getDistributedNodes()),n?a(n,t):[]}return e instanceof HTMLElement?[e]:e instanceof Text&&t?[e]:[]}),i=(n=[]).concat.apply(n,r(o));return i}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var t=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return c(t,e),u(t,[{key:"distributedChildren",get:function(){return a(this.children,!1)}},{key:"distributedChildNodes",get:function(){return a(this.childNodes,!0)}},{key:"distributedTextContent",get:function(){var e=this.distributedChildNodes.map(function(e){return e.textContent});return e.join("")}}]),t}(e);return t}},{}],4:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var c=Object.getPrototypeOf(t);null!==c&&e(c,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var a=i.set;void 0!==a&&a.call(o,r)}return r};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var t=function(t){function n(){return r(this,n),o(this,Object.getPrototypeOf(n).apply(this,arguments))}return i(n,t),c(n,[{key:"content",get:function(){return this.distributedChildren},set:function(t){"content"in e.prototype&&a(Object.getPrototypeOf(n.prototype),"content",t,this)}}]),n}(e);return t}},{}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){var t=function(t){function n(){return o(this,n),i(this,Object.getPrototypeOf(n).apply(this,arguments))}return c(n,t),u(n,[{key:"attachedCallback",value:function(){s(Object.getPrototypeOf(n.prototype),"attachedCallback",this)&&s(Object.getPrototypeOf(n.prototype),"attachedCallback",this).call(this),this.selectedFraction=0}},{key:"selectedFraction",get:function(){return this[b]},set:function(t){"selectedFraction"in e.prototype&&l(Object.getPrototypeOf(n.prototype),"selectedFraction",t,this),this[b]=t;var r=new CustomEvent("selection-fraction-changed");this.dispatchEvent(r)}}]),n}(e);return t}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var c=Object.getPrototypeOf(t);null!==c&&e(c,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var a=i.set;void 0!==a&&a.call(o,r)}return r},s=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var c=o.get;if(void 0!==c)return c.call(r)};Object.defineProperty(n,"__esModule",{value:!0}),n.default=a;var f=e("./createSymbol"),p=r(f),b=(0,p.default)("selectedFraction");a.helpers={dampedSelection:function(e,t){var n=void 0,r=t-1;return n=e<0?-a.helpers.damping(-e):e>=r?r+a.helpers.damping(e-r):e},damping:function(e){var t=-1/(e+1)+1;return t},elementSelection:function(e){var t=e.selectedIndex;if(!(t<0)){var n=e.selectedFraction||0;return t+n}},selectionParts:function(e){var t=e<0?Math.ceil(e):Math.floor(e),n=e-t;return{index:t,fraction:n}},wrappedSelection:function(e,t){return(e%t+t)%t},wrappedSelectionParts:function(e,t,n){return n&&(e=a.helpers.wrappedSelection(e,t)),a.helpers.selectionParts(e)}}},{"./createSymbol":9}],6:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){e[y]=new MutationObserver(function(){return e.contentChanged()}),e[y].observe(e,{characterData:!0,childList:!0,subtree:!0})}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var c=o.get;if(void 0!==c)return c.call(r)};Object.defineProperty(n,"__esModule",{value:!0});var s=e("./createSymbol"),f=r(s),p=e("./microtask"),b=r(p),y=(0,f.default)("contentChangeObserver");n.default=function(e){var t=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return c(t,e),u(t,[{key:"createdCallback",value:function(){var e=this;l(Object.getPrototypeOf(t.prototype),"createdCallback",this)&&l(Object.getPrototypeOf(t.prototype),"createdCallback",this).call(this),a(this),(0,b.default)(function(){return e.contentChanged()})}},{key:"contentChanged",value:function(){l(Object.getPrototypeOf(t.prototype),"contentChanged",this)&&l(Object.getPrototypeOf(t.prototype),"contentChanged",this).call(this);var e=new CustomEvent("content-changed");this.dispatchEvent(e)}}]),t}(e);return t}},{"./createSymbol":9,"./microtask":10}],7:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var c=o.get;if(void 0!==c)return c.call(r)};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var t=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"createdCallback",value:function(){var e=this;if(a(Object.getPrototypeOf(t.prototype),"createdCallback",this)&&a(Object.getPrototypeOf(t.prototype),"createdCallback",this).call(this),this.shadowRoot){this.$={};var n=this.shadowRoot.querySelectorAll("[id]");[].forEach.call(n,function(t){var n=t.getAttribute("id");e.$[n]=t})}}}]),t}(e);return t}},{}],8:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){var t=document.createElement("template"),n=document.createElement("div");for(n.innerHTML=e;n.childNodes.length>0;)t.content.appendChild(n.childNodes[0]);return t}function a(e){[].forEach.call(e.content.querySelectorAll("slot"),function(e){var t=document.createElement("content");e.parentNode.replaceChild(t,e)})}function u(e,t){window.WebComponents.ShadowCSS.shimStyling(e.content,t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var c=o.get;if(void 0!==c)return c.call(r)};Object.defineProperty(n,"__esModule",{value:!0});var f="undefined"!=typeof HTMLElement.prototype.createShadowRoot;n.default=function(e){var t=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),l(t,[{key:"createdCallback",value:function(){s(Object.getPrototypeOf(t.prototype),"createdCallback",this)&&s(Object.getPrototypeOf(t.prototype),"createdCallback",this).call(this);var e=this.template;if(e){"string"==typeof e&&(e=c(e)),f&&a(e),window.ShadowDOMPolyfill&&u(e,this.localName);var n=f?this.createShadowRoot():this.attachShadow({mode:"open"}),r=document.importNode(e.content,!0);n.appendChild(r)}}}]),t}(e);return t}},{}],9:[function(e,t,n){"use strict";function r(e){return"function"==typeof Symbol?Symbol(e):"_"+e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},{}],10:[function(e,t,n){"use strict";function r(e){i.push(e),c.textContent=++a}function o(){for(;i.length>0;){var e=i.shift();e()}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r;var i=[],c=document.createTextNode(""),a=0,u=new MutationObserver(o);u.observe(c,{characterData:!0})},{}],11:[function(e,t,n){"use strict";function r(e,t,n){var r=e.classList,o="undefined"==typeof n?!r.contains(t):n;return o?r.add(t):r.remove(t),o}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},{}],12:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var c=o.get;if(void 0!==c)return c.call(r)};Object.defineProperty(n,"__esModule",{value:!0});var l=e("../../basic-component-mixins/src/Composable"),s=r(l),f=e("../../basic-component-mixins/src/ShadowTemplate"),p=r(f),b=e("../../basic-component-mixins/src/ShadowElementReferences"),y=r(b),d=e("../../basic-component-mixins/src/AttributeMarshalling"),h=r(d),v=e("../../basic-component-mixins/src/DistributedChildren"),O=r(v),m=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return c(t,e),a(t,[{key:"log",value:function(e){u(Object.getPrototypeOf(t.prototype),"log",this)&&u(Object.getPrototypeOf(t.prototype),"log",this).call(this,e),console.log(this.localName+": "+e)}}]),t}((0,s.default)(HTMLElement).compose(p.default,y.default,h.default,O.default));n.default=m},{"../../basic-component-mixins/src/AttributeMarshalling":1,"../../basic-component-mixins/src/Composable":2,"../../basic-component-mixins/src/DistributedChildren":3,"../../basic-component-mixins/src/ShadowElementReferences":7,"../../basic-component-mixins/src/ShadowTemplate":8}],13:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(){if(this.selectedItem){var e=h.default.helpers.elementSelection(this),t=this.items?this.items.length:0,n=h.default.helpers.dampedSelection(e,t),r=100*-n,o="translateX("+r+"%)";this.$.slidingContainer.style.webkitTransform=o,this.$.slidingContainer.style.transform=o}}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var c=Object.getPrototypeOf(t);null!==c&&e(c,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var a=i.set;void 0!==a&&a.call(o,r)}return r},s=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var c=o.get;if(void 0!==c)return c.call(r)};Object.defineProperty(n,"__esModule",{value:!0});var f=e("../../basic-component-mixins/src/createSymbol"),p=r(f),b=e("../../basic-element-base/src/ElementBase"),y=r(b),d=e("../../basic-component-mixins/src/FractionalSelection"),h=r(d),v=e("../../basic-spread-items/src/SpreadItems"),O=(r(v),e("../../basic-component-mixins/src/toggleClass")),m=r(O),g=(0,p.default)("selectedItem"),w=y.default.compose(h.default),j=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return c(t,e),u(t,[{key:"attachedCallback",value:function(){s(Object.getPrototypeOf(t.prototype),"attachedCallback",this)&&s(Object.getPrototypeOf(t.prototype),"attachedCallback",this).call(this),this.render()}},{key:"createdCallback",value:function(){s(Object.getPrototypeOf(t.prototype),"createdCallback",this)&&s(Object.getPrototypeOf(t.prototype),"createdCallback",this).call(this),this.selectedFraction=0,this.showTransition=!0}},{key:"render",value:function(){s(Object.getPrototypeOf(t.prototype),"render",this)&&s(Object.getPrototypeOf(t.prototype),"render",this).call(this),requestAnimationFrame(a.bind(this))}},{key:"content",get:function(){return this.$.slidingContainer.content}},{key:"items",get:function(){return this.$.slidingContainer.items}},{key:"selectedFraction",get:function(){return s(Object.getPrototypeOf(t.prototype),"selectedFraction",this)},set:function(e){"selectedFraction"in w.prototype&&l(Object.getPrototypeOf(t.prototype),"selectedFraction",e,this),this.render()}},{key:"selectedIndex",get:function(){var e=this.items,t=this.selectedItem;return e&&t?e.indexOf(t):-1},set:function(e){"selectedIndex"in w.prototype&&l(Object.getPrototypeOf(t.prototype),"selectedIndex",e,this);var n=this.items&&this.items[e];n&&(this.selectedItem=n)}},{key:"selectedItem",get:function(){return this[g]},set:function(e){"selectedItem"in w.prototype&&l(Object.getPrototypeOf(t.prototype),"selectedItem",e,this),this[g]=e,this.render()}},{key:"showTransition",get:function(){return s(Object.getPrototypeOf(t.prototype),"showTransition",this)||this.classList.contains("showTransition")},set:function(e){"showTransition"in w.prototype&&l(Object.getPrototypeOf(t.prototype),"showTransition",e,this),(0,m.default)(this,"showTransition",e)}},{key:"template",get:function(){return"\n      <style>\n      :host {\n        display: block;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #slidingContainer {\n        height: 100%;\n        position: absolute;\n        /*\n         Set width for IE/Edge. It's not clear why they need this, and the other\n         browsers don't.\n         */\n        width: 100%;\n        will-change: transform;\n      }\n\n      :host(.showTransition) #slidingContainer {\n        -webkit-transition: -webkit-transform 0.2s ease-out;\n        transition: transform 0.2s ease-out;\n      }\n      </style>\n\n      <basic-spread-items id=\"slidingContainer\">\n        <slot></slot>\n      </basic-spread-items>\n    "}}]),t}(w);document.registerElement("basic-sliding-viewport",j),n.default=j},{"../../basic-component-mixins/src/FractionalSelection":5,"../../basic-component-mixins/src/createSymbol":9,"../../basic-component-mixins/src/toggleClass":11,"../../basic-element-base/src/ElementBase":12,"../../basic-spread-items/src/SpreadItems":14}],14:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var c=o.get;if(void 0!==c)return c.call(r)};Object.defineProperty(n,"__esModule",{value:!0});var l=e("../../basic-element-base/src/ElementBase"),s=r(l),f=e("../../basic-component-mixins/src/DistributedChildrenAsContent"),p=r(f),b=e("../../basic-component-mixins/src/ObserveContentChanges"),y=r(b),d=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return c(t,e),a(t,[{key:"attachedCallback",value:function(){u(Object.getPrototypeOf(t.prototype),"attachedCallback",this)&&u(Object.getPrototypeOf(t.prototype),"attachedCallback",this).call(this),this.itemsChanged()}},{key:"itemsChanged",value:function(){u(Object.getPrototypeOf(t.prototype),"itemsChanged",this)&&u(Object.getPrototypeOf(t.prototype),"itemsChanged",this).call(this);var e=this.items,n=e.length;this.$.spreadContainer.style.width=100*n+"%";var r=100/n+"%";[].forEach.call(e,function(e){e.style.width=r})}},{key:"items",get:function(){return this.content}},{key:"template",get:function(){return'\n      <style>\n      :host {\n        display: block;\n      }\n\n      #spreadContainer {\n        display: -webkit-flex;\n        display: flex;\n        height: 100%;\n        position: relative;\n      }\n\n      #spreadContainer ::content > * {\n        object-fit: contain;\n        object-fit: var(--basic-item-object-fit, contain);\n        height: 100%;\n        -webkit-user-drag: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n      }\n      </style>\n\n      <div id="spreadContainer">\n        <slot></slot>\n      </div>\n    '}}]),t}(s.default.compose(p.default,y.default));document.registerElement("basic-spread-items",d),n.default=d},{"../../basic-component-mixins/src/DistributedChildrenAsContent":4,"../../basic-component-mixins/src/ObserveContentChanges":6,"../../basic-element-base/src/ElementBase":12}]},{},[13]);