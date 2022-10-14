/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 321:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * ApexCharts v3.35.5
 * (c) 2018-2022 ApexCharts
 * Released under the MIT License.
 */
function t(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function e(e){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?t(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=l(t);if(e){var s=l(this).constructor;i=Reflect.construct(a,arguments,s)}else i=a.apply(this,arguments);return c(this,i)}}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var a,s,r=[],o=!0,n=!1;try{for(i=i.call(t);!(o=(a=i.next()).done)&&(r.push(a.value),!e||r.length!==e);o=!0);}catch(t){n=!0,s=t}finally{try{o||null==i.return||i.return()}finally{if(n)throw s}}return r}(t,e)||p(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(t){if("string"==typeof t)return f(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}var x=function(){function t(){a(this,t)}return r(t,[{key:"shadeRGBColor",value:function(t,e){var i=e.split(","),a=t<0?0:255,s=t<0?-1*t:t,r=parseInt(i[0].slice(4),10),o=parseInt(i[1],10),n=parseInt(i[2],10);return"rgb("+(Math.round((a-r)*s)+r)+","+(Math.round((a-o)*s)+o)+","+(Math.round((a-n)*s)+n)+")"}},{key:"shadeHexColor",value:function(t,e){var i=parseInt(e.slice(1),16),a=t<0?0:255,s=t<0?-1*t:t,r=i>>16,o=i>>8&255,n=255&i;return"#"+(16777216+65536*(Math.round((a-r)*s)+r)+256*(Math.round((a-o)*s)+o)+(Math.round((a-n)*s)+n)).toString(16).slice(1)}},{key:"shadeColor",value:function(e,i){return t.isColorHex(i)?this.shadeHexColor(e,i):this.shadeRGBColor(e,i)}}],[{key:"bind",value:function(t,e){return function(){return t.apply(e,arguments)}}},{key:"isObject",value:function(t){return t&&"object"===i(t)&&!Array.isArray(t)&&null!=t}},{key:"is",value:function(t,e){return Object.prototype.toString.call(e)==="[object "+t+"]"}},{key:"listToArray",value:function(t){var e,i=[];for(e=0;e<t.length;e++)i[e]=t[e];return i}},{key:"extend",value:function(t,e){var i=this;"function"!=typeof Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var a=arguments[i];if(null!=a)for(var s in a)a.hasOwnProperty(s)&&(e[s]=a[s])}return e});var a=Object.assign({},t);return this.isObject(t)&&this.isObject(e)&&Object.keys(e).forEach((function(s){i.isObject(e[s])&&s in t?a[s]=i.extend(t[s],e[s]):Object.assign(a,o({},s,e[s]))})),a}},{key:"extendArray",value:function(e,i){var a=[];return e.map((function(e){a.push(t.extend(i,e))})),e=a}},{key:"monthMod",value:function(t){return t%12}},{key:"clone",value:function(e){if(t.is("Array",e)){for(var a=[],s=0;s<e.length;s++)a[s]=this.clone(e[s]);return a}if(t.is("Null",e))return null;if(t.is("Date",e))return e;if("object"===i(e)){var r={};for(var o in e)e.hasOwnProperty(o)&&(r[o]=this.clone(e[o]));return r}return e}},{key:"log10",value:function(t){return Math.log(t)/Math.LN10}},{key:"roundToBase10",value:function(t){return Math.pow(10,Math.floor(Math.log10(t)))}},{key:"roundToBase",value:function(t,e){return Math.pow(e,Math.floor(Math.log(t)/Math.log(e)))}},{key:"parseNumber",value:function(t){return null===t?t:parseFloat(t)}},{key:"randomId",value:function(){return(Math.random()+1).toString(36).substring(4)}},{key:"noExponents",value:function(t){var e=String(t).split(/[eE]/);if(1===e.length)return e[0];var i="",a=t<0?"-":"",s=e[0].replace(".",""),r=Number(e[1])+1;if(r<0){for(i=a+"0.";r++;)i+="0";return i+s.replace(/^-/,"")}for(r-=s.length;r--;)i+="0";return s+i}},{key:"getDimensions",value:function(t){var e=getComputedStyle(t,null),i=t.clientHeight,a=t.clientWidth;return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom),[a-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),i]}},{key:"getBoundingClientRect",value:function(t){var e=t.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:t.clientWidth,height:t.clientHeight,x:e.left,y:e.top}}},{key:"getLargestStringFromArr",value:function(t){return t.reduce((function(t,e){return Array.isArray(e)&&(e=e.reduce((function(t,e){return t.length>e.length?t:e}))),t.length>e.length?t:e}),0)}},{key:"hexToRgba",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#999999",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6;"#"!==t.substring(0,1)&&(t="#999999");var i=t.replace("#","");i=i.match(new RegExp("(.{"+i.length/3+"})","g"));for(var a=0;a<i.length;a++)i[a]=parseInt(1===i[a].length?i[a]+i[a]:i[a],16);return void 0!==e&&i.push(e),"rgba("+i.join(",")+")"}},{key:"getOpacityFromRGBA",value:function(t){return parseFloat(t.replace(/^.*,(.+)\)/,"$1"))}},{key:"rgb2hex",value:function(t){return(t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&4===t.length?"#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2):""}},{key:"isColorHex",value:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t)}},{key:"getPolygonPos",value:function(t,e){for(var i=[],a=2*Math.PI/e,s=0;s<e;s++){var r={};r.x=t*Math.sin(s*a),r.y=-t*Math.cos(s*a),i.push(r)}return i}},{key:"polarToCartesian",value:function(t,e,i,a){var s=(a-90)*Math.PI/180;return{x:t+i*Math.cos(s),y:e+i*Math.sin(s)}}},{key:"escapeString",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x",i=t.toString().slice();return i=i.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi,e)}},{key:"negToZero",value:function(t){return t<0?0:t}},{key:"moveIndexInArray",value:function(t,e,i){if(i>=t.length)for(var a=i-t.length+1;a--;)t.push(void 0);return t.splice(i,0,t.splice(e,1)[0]),t}},{key:"extractNumber",value:function(t){return parseFloat(t.replace(/[^\d.]*/g,""))}},{key:"findAncestor",value:function(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}},{key:"setELstyles",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t.style.key=e[i])}},{key:"isNumber",value:function(t){return!isNaN(t)&&parseFloat(Number(t))===t&&!isNaN(parseInt(t,10))}},{key:"isFloat",value:function(t){return Number(t)===t&&t%1!=0}},{key:"isSafari",value:function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}},{key:"isFirefox",value:function(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1}},{key:"isIE11",value:function(){if(-1!==window.navigator.userAgent.indexOf("MSIE")||window.navigator.appVersion.indexOf("Trident/")>-1)return!0}},{key:"isIE",value:function(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("Trident/")>0){var i=t.indexOf("rv:");return parseInt(t.substring(i+3,t.indexOf(".",i)),10)}var a=t.indexOf("Edge/");return a>0&&parseInt(t.substring(a+5,t.indexOf(".",a)),10)}}]),t}(),b=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.setEasingFunctions()}return r(t,[{key:"setEasingFunctions",value:function(){var t;if(!this.w.globals.easing){switch(this.w.config.chart.animations.easing){case"linear":t="-";break;case"easein":t="<";break;case"easeout":t=">";break;case"easeinout":t="<>";break;case"swing":t=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1};break;case"bounce":t=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375};break;case"elastic":t=function(t){return t===!!t?t:Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1};break;default:t="<>"}this.w.globals.easing=t}}},{key:"animateLine",value:function(t,e,i,a){t.attr(e).animate(a).attr(i)}},{key:"animateMarker",value:function(t,e,i,a,s,r){e||(e=0),t.attr({r:e,width:e,height:e}).animate(a,s).attr({r:i,width:i.width,height:i.height}).afterAll((function(){r()}))}},{key:"animateCircle",value:function(t,e,i,a,s){t.attr({r:e.r,cx:e.cx,cy:e.cy}).animate(a,s).attr({r:i.r,cx:i.cx,cy:i.cy})}},{key:"animateRect",value:function(t,e,i,a,s){t.attr(e).animate(a).attr(i).afterAll((function(){return s()}))}},{key:"animatePathsGradually",value:function(t){var e=t.el,i=t.realIndex,a=t.j,s=t.fill,r=t.pathFrom,o=t.pathTo,n=t.speed,l=t.delay,h=this.w,c=0;h.config.chart.animations.animateGradually.enabled&&(c=h.config.chart.animations.animateGradually.delay),h.config.chart.animations.dynamicAnimation.enabled&&h.globals.dataChanged&&"bar"!==h.config.chart.type&&(c=0),this.morphSVG(e,i,a,"line"!==h.config.chart.type||h.globals.comboCharts?s:"stroke",r,o,n,l*c)}},{key:"showDelayedElements",value:function(){this.w.globals.delayedElements.forEach((function(t){t.el.classList.remove("apexcharts-element-hidden")}))}},{key:"animationCompleted",value:function(t){var e=this.w;e.globals.animationEnded||(e.globals.animationEnded=!0,this.showDelayedElements(),"function"==typeof e.config.chart.events.animationEnd&&e.config.chart.events.animationEnd(this.ctx,{el:t,w:e}))}},{key:"morphSVG",value:function(t,e,i,a,s,r,o,n){var l=this,h=this.w;s||(s=t.attr("pathFrom")),r||(r=t.attr("pathTo"));var c=function(t){return"radar"===h.config.chart.type&&(o=1),"M 0 ".concat(h.globals.gridHeight)};(!s||s.indexOf("undefined")>-1||s.indexOf("NaN")>-1)&&(s=c()),(!r||r.indexOf("undefined")>-1||r.indexOf("NaN")>-1)&&(r=c()),h.globals.shouldAnimate||(o=1),t.plot(s).animate(1,h.globals.easing,n).plot(s).animate(o,h.globals.easing,n).plot(r).afterAll((function(){x.isNumber(i)?i===h.globals.series[h.globals.maxValsInArrayIndex].length-2&&h.globals.shouldAnimate&&l.animationCompleted(t):"none"!==a&&h.globals.shouldAnimate&&(!h.globals.comboCharts&&e===h.globals.series.length-1||h.globals.comboCharts)&&l.animationCompleted(t),l.showDelayedElements()}))}}]),t}(),v=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"getDefaultFilter",value:function(t,e){var i=this.w;t.unfilter(!0),(new window.SVG.Filter).size("120%","180%","-5%","-40%"),"none"!==i.config.states.normal.filter?this.applyFilter(t,e,i.config.states.normal.filter.type,i.config.states.normal.filter.value):i.config.chart.dropShadow.enabled&&this.dropShadow(t,i.config.chart.dropShadow,e)}},{key:"addNormalFilter",value:function(t,e){var i=this.w;i.config.chart.dropShadow.enabled&&!t.node.classList.contains("apexcharts-marker")&&this.dropShadow(t,i.config.chart.dropShadow,e)}},{key:"addLightenFilter",value:function(t,e,i){var a=this,s=this.w,r=i.intensity;t.unfilter(!0);new window.SVG.Filter;t.filter((function(t){var i=s.config.chart.dropShadow;(i.enabled?a.addShadow(t,e,i):t).componentTransfer({rgb:{type:"linear",slope:1.5,intercept:r}})})),t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(t.filterer.node)}},{key:"addDarkenFilter",value:function(t,e,i){var a=this,s=this.w,r=i.intensity;t.unfilter(!0);new window.SVG.Filter;t.filter((function(t){var i=s.config.chart.dropShadow;(i.enabled?a.addShadow(t,e,i):t).componentTransfer({rgb:{type:"linear",slope:r}})})),t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(t.filterer.node)}},{key:"applyFilter",value:function(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;switch(i){case"none":this.addNormalFilter(t,e);break;case"lighten":this.addLightenFilter(t,e,{intensity:a});break;case"darken":this.addDarkenFilter(t,e,{intensity:a})}}},{key:"addShadow",value:function(t,e,i){var a=i.blur,s=i.top,r=i.left,o=i.color,n=i.opacity,l=t.flood(Array.isArray(o)?o[e]:o,n).composite(t.sourceAlpha,"in").offset(r,s).gaussianBlur(a).merge(t.source);return t.blend(t.source,l)}},{key:"dropShadow",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=e.top,s=e.left,r=e.blur,o=e.color,n=e.opacity,l=e.noUserSpaceOnUse,h=this.w;return t.unfilter(!0),x.isIE()&&"radialBar"===h.config.chart.type||(o=Array.isArray(o)?o[i]:o,t.filter((function(t){var e=null;e=x.isSafari()||x.isFirefox()||x.isIE()?t.flood(o,n).composite(t.sourceAlpha,"in").offset(s,a).gaussianBlur(r):t.flood(o,n).composite(t.sourceAlpha,"in").offset(s,a).gaussianBlur(r).merge(t.source),t.blend(t.source,e)})),l||t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(t.filterer.node)),t}},{key:"setSelectionFilter",value:function(t,e,i){var a=this.w;if(void 0!==a.globals.selectedDataPoints[e]&&a.globals.selectedDataPoints[e].indexOf(i)>-1){t.node.setAttribute("selected",!0);var s=a.config.states.active.filter;"none"!==s&&this.applyFilter(t,e,s.type,s.value)}}},{key:"_scaleFilterSize",value:function(t){!function(e){for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i,e[i])}({width:"200%",height:"200%",x:"-50%",y:"-50%"})}}]),t}(),m=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"drawLine",value:function(t,e,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#a8a8a8",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,n=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"butt",l=this.w,h=l.globals.dom.Paper.line().attr({x1:t,y1:e,x2:i,y2:a,stroke:s,"stroke-dasharray":r,"stroke-width":o,"stroke-linecap":n});return h}},{key:"drawRect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"#fefefe",o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,n=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,h=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,c=this.w,d=c.globals.dom.Paper.rect();return d.attr({x:t,y:e,width:i>0?i:0,height:a>0?a:0,rx:s,ry:s,opacity:o,"stroke-width":null!==n?n:0,stroke:null!==l?l:"none","stroke-dasharray":h}),d.node.setAttribute("fill",r),d}},{key:"drawPolygon",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e1e1e1",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none",s=this.w,r=s.globals.dom.Paper.polygon(t).attr({fill:a,stroke:e,"stroke-width":i});return r}},{key:"drawCircle",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.w;t<0&&(t=0);var a=i.globals.dom.Paper.circle(2*t);return null!==e&&a.attr(e),a}},{key:"drawPath",value:function(t){var e=t.d,i=void 0===e?"":e,a=t.stroke,s=void 0===a?"#a8a8a8":a,r=t.strokeWidth,o=void 0===r?1:r,n=t.fill,l=t.fillOpacity,h=void 0===l?1:l,c=t.strokeOpacity,d=void 0===c?1:c,g=t.classes,u=t.strokeLinecap,p=void 0===u?null:u,f=t.strokeDashArray,x=void 0===f?0:f,b=this.w;return null===p&&(p=b.config.stroke.lineCap),(i.indexOf("undefined")>-1||i.indexOf("NaN")>-1)&&(i="M 0 ".concat(b.globals.gridHeight)),b.globals.dom.Paper.path(i).attr({fill:n,"fill-opacity":h,stroke:s,"stroke-opacity":d,"stroke-linecap":p,"stroke-width":o,"stroke-dasharray":x,class:g})}},{key:"group",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w,i=e.globals.dom.Paper.group();return null!==t&&i.attr(t),i}},{key:"move",value:function(t,e){var i=["M",t,e].join(" ");return i}},{key:"line",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=null;return null===i?a=["L",t,e].join(" "):"H"===i?a=["H",t].join(" "):"V"===i&&(a=["V",e].join(" ")),a}},{key:"curve",value:function(t,e,i,a,s,r){var o=["C",t,e,i,a,s,r].join(" ");return o}},{key:"quadraticCurve",value:function(t,e,i,a){return["Q",t,e,i,a].join(" ")}},{key:"arc",value:function(t,e,i,a,s,r,o){var n=arguments.length>7&&void 0!==arguments[7]&&arguments[7],l="A";n&&(l="a");var h=[l,t,e,i,a,s,r,o].join(" ");return h}},{key:"renderPaths",value:function(t){var i,a=t.j,s=t.realIndex,r=t.pathFrom,o=t.pathTo,n=t.stroke,l=t.strokeWidth,h=t.strokeLinecap,c=t.fill,d=t.animationDelay,g=t.initialSpeed,u=t.dataChangeSpeed,p=t.className,f=t.shouldClipToGrid,x=void 0===f||f,m=t.bindEventsOnPaths,y=void 0===m||m,w=t.drawShadow,k=void 0===w||w,A=this.w,S=new v(this.ctx),C=new b(this.ctx),L=this.w.config.chart.animations.enabled,P=L&&this.w.config.chart.animations.dynamicAnimation.enabled,M=!!(L&&!A.globals.resized||P&&A.globals.dataChanged&&A.globals.shouldAnimate);M?i=r:(i=o,A.globals.animationEnded=!0);var T=A.config.stroke.dashArray,I=0;I=Array.isArray(T)?T[s]:A.config.stroke.dashArray;var z=this.drawPath({d:i,stroke:n,strokeWidth:l,fill:c,fillOpacity:1,classes:p,strokeLinecap:h,strokeDashArray:I});if(z.attr("index",s),x&&z.attr({"clip-path":"url(#gridRectMask".concat(A.globals.cuid,")")}),"none"!==A.config.states.normal.filter.type)S.getDefaultFilter(z,s);else if(A.config.chart.dropShadow.enabled&&k&&(!A.config.chart.dropShadow.enabledOnSeries||A.config.chart.dropShadow.enabledOnSeries&&-1!==A.config.chart.dropShadow.enabledOnSeries.indexOf(s))){var X=A.config.chart.dropShadow;S.dropShadow(z,X,s)}y&&(z.node.addEventListener("mouseenter",this.pathMouseEnter.bind(this,z)),z.node.addEventListener("mouseleave",this.pathMouseLeave.bind(this,z)),z.node.addEventListener("mousedown",this.pathMouseDown.bind(this,z))),z.attr({pathTo:o,pathFrom:r});var E={el:z,j:a,realIndex:s,pathFrom:r,pathTo:o,fill:c,strokeWidth:l,delay:d};return!L||A.globals.resized||A.globals.dataChanged?!A.globals.resized&&A.globals.dataChanged||C.showDelayedElements():C.animatePathsGradually(e(e({},E),{},{speed:g})),A.globals.dataChanged&&P&&M&&C.animatePathsGradually(e(e({},E),{},{speed:u})),z}},{key:"drawPattern",value:function(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#a8a8a8",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=this.w,o=r.globals.dom.Paper.pattern(e,i,(function(r){"horizontalLines"===t?r.line(0,0,i,0).stroke({color:a,width:s+1}):"verticalLines"===t?r.line(0,0,0,e).stroke({color:a,width:s+1}):"slantedLines"===t?r.line(0,0,e,i).stroke({color:a,width:s}):"squares"===t?r.rect(e,i).fill("none").stroke({color:a,width:s}):"circles"===t&&r.circle(e).fill("none").stroke({color:a,width:s})}));return o}},{key:"drawGradient",value:function(t,e,i,a,s){var r,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,h=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,c=this.w;e.length<9&&0===e.indexOf("#")&&(e=x.hexToRgba(e,a)),i.length<9&&0===i.indexOf("#")&&(i=x.hexToRgba(i,s));var d=0,g=1,u=1,p=null;null!==n&&(d=void 0!==n[0]?n[0]/100:0,g=void 0!==n[1]?n[1]/100:1,u=void 0!==n[2]?n[2]/100:1,p=void 0!==n[3]?n[3]/100:null);var f=!("donut"!==c.config.chart.type&&"pie"!==c.config.chart.type&&"polarArea"!==c.config.chart.type&&"bubble"!==c.config.chart.type);if(r=null===l||0===l.length?c.globals.dom.Paper.gradient(f?"radial":"linear",(function(t){t.at(d,e,a),t.at(g,i,s),t.at(u,i,s),null!==p&&t.at(p,e,a)})):c.globals.dom.Paper.gradient(f?"radial":"linear",(function(t){(Array.isArray(l[h])?l[h]:l).forEach((function(e){t.at(e.offset/100,e.color,e.opacity)}))})),f){var b=c.globals.gridWidth/2,v=c.globals.gridHeight/2;"bubble"!==c.config.chart.type?r.attr({gradientUnits:"userSpaceOnUse",cx:b,cy:v,r:o}):r.attr({cx:.5,cy:.5,r:.8,fx:.2,fy:.2})}else"vertical"===t?r.from(0,0).to(0,1):"diagonal"===t?r.from(0,0).to(1,1):"horizontal"===t?r.from(0,1).to(1,1):"diagonal2"===t&&r.from(1,0).to(0,1);return r}},{key:"getTextBasedOnMaxWidth",value:function(t){var e=t.text,i=t.maxWidth,a=t.fontSize,s=t.fontFamily,r=this.getTextRects(e,a,s),o=r.width/e.length,n=Math.floor(i/o);return i<r.width?e.slice(0,n-3)+"...":e}},{key:"drawText",value:function(t){var i=this,a=t.x,s=t.y,r=t.text,o=t.textAnchor,n=t.fontSize,l=t.fontFamily,h=t.fontWeight,c=t.foreColor,d=t.opacity,g=t.maxWidth,u=t.cssClass,p=void 0===u?"":u,f=t.isPlainText,x=void 0===f||f,b=this.w;void 0===r&&(r="");var v=r;o||(o="start"),c&&c.length||(c=b.config.chart.foreColor),l=l||b.config.chart.fontFamily,h=h||"regular";var m,y={maxWidth:g,fontSize:n=n||"11px",fontFamily:l};return Array.isArray(r)?m=b.globals.dom.Paper.text((function(t){for(var a=0;a<r.length;a++)v=r[a],g&&(v=i.getTextBasedOnMaxWidth(e({text:r[a]},y))),0===a?t.tspan(v):t.tspan(v).newLine()})):(g&&(v=this.getTextBasedOnMaxWidth(e({text:r},y))),m=x?b.globals.dom.Paper.plain(r):b.globals.dom.Paper.text((function(t){return t.tspan(v)}))),m.attr({x:a,y:s,"text-anchor":o,"dominant-baseline":"auto","font-size":n,"font-family":l,"font-weight":h,fill:c,class:"apexcharts-text "+p}),m.node.style.fontFamily=l,m.node.style.opacity=d,m}},{key:"drawMarker",value:function(t,e,i){t=t||0;var a=i.pSize||0,s=null;if("square"===i.shape||"rect"===i.shape){var r=void 0===i.pRadius?a/2:i.pRadius;null!==e&&a||(a=0,r=0);var o=1.2*a+r,n=this.drawRect(o,o,o,o,r);n.attr({x:t-o/2,y:e-o/2,cx:t,cy:e,class:i.class?i.class:"",fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,stroke:i.pointStrokeColor,"stroke-width":i.pointStrokeWidth?i.pointStrokeWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}),s=n}else"circle"!==i.shape&&i.shape||(x.isNumber(e)||(a=0,e=0),s=this.drawCircle(a,{cx:t,cy:e,class:i.class?i.class:"",stroke:i.pointStrokeColor,fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,"stroke-width":i.pointStrokeWidth?i.pointStrokeWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}));return s}},{key:"pathMouseEnter",value:function(t,e){var i=this.w,a=new v(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10);if("function"==typeof i.config.chart.events.dataPointMouseEnter&&i.config.chart.events.dataPointMouseEnter(e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}),this.ctx.events.fireEvent("dataPointMouseEnter",[e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}]),("none"===i.config.states.active.filter.type||"true"!==t.node.getAttribute("selected"))&&"none"!==i.config.states.hover.filter.type&&!i.globals.isTouchDevice){var o=i.config.states.hover.filter;a.applyFilter(t,s,o.type,o.value)}}},{key:"pathMouseLeave",value:function(t,e){var i=this.w,a=new v(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10);"function"==typeof i.config.chart.events.dataPointMouseLeave&&i.config.chart.events.dataPointMouseLeave(e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}),this.ctx.events.fireEvent("dataPointMouseLeave",[e,this.ctx,{seriesIndex:s,dataPointIndex:r,w:i}]),"none"!==i.config.states.active.filter.type&&"true"===t.node.getAttribute("selected")||"none"!==i.config.states.hover.filter.type&&a.getDefaultFilter(t,s)}},{key:"pathMouseDown",value:function(t,e){var i=this.w,a=new v(this.ctx),s=parseInt(t.node.getAttribute("index"),10),r=parseInt(t.node.getAttribute("j"),10),o="false";if("true"===t.node.getAttribute("selected")){if(t.node.setAttribute("selected","false"),i.globals.selectedDataPoints[s].indexOf(r)>-1){var n=i.globals.selectedDataPoints[s].indexOf(r);i.globals.selectedDataPoints[s].splice(n,1)}}else{if(!i.config.states.active.allowMultipleDataPointsSelection&&i.globals.selectedDataPoints.length>0){i.globals.selectedDataPoints=[];var l=i.globals.dom.Paper.select(".apexcharts-series path").members,h=i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members,c=function(t){Array.prototype.forEach.call(t,(function(t){t.node.setAttribute("selected","false"),a.getDefaultFilter(t,s)}))};c(l),c(h)}t.node.setAttribute("selected","true"),o="true",void 0===i.globals.selectedDataPoints[s]&&(i.globals.selectedDataPoints[s]=[]),i.globals.selectedDataPoints[s].push(r)}if("true"===o){var d=i.config.states.active.filter;if("none"!==d)a.applyFilter(t,s,d.type,d.value);else if("none"!==i.config.states.hover.filter&&!i.globals.isTouchDevice){var g=i.config.states.hover.filter;a.applyFilter(t,s,g.type,g.value)}}else if("none"!==i.config.states.active.filter.type)if("none"===i.config.states.hover.filter.type||i.globals.isTouchDevice)a.getDefaultFilter(t,s);else{g=i.config.states.hover.filter;a.applyFilter(t,s,g.type,g.value)}"function"==typeof i.config.chart.events.dataPointSelection&&i.config.chart.events.dataPointSelection(e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:s,dataPointIndex:r,w:i}),e&&this.ctx.events.fireEvent("dataPointSelection",[e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:s,dataPointIndex:r,w:i}])}},{key:"rotateAroundCenter",value:function(t){var e={};return t&&"function"==typeof t.getBBox&&(e=t.getBBox()),{x:e.x+e.width/2,y:e.y+e.height/2}}},{key:"getTextRects",value:function(t,e,i,a){var s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=this.w,o=this.drawText({x:-200,y:-200,text:t,textAnchor:"start",fontSize:e,fontFamily:i,foreColor:"#fff",opacity:0});a&&o.attr("transform",a),r.globals.dom.Paper.add(o);var n=o.bbox();return s||(n=o.node.getBoundingClientRect()),o.remove(),{width:n.width,height:n.height}}},{key:"placeTextWithEllipsis",value:function(t,e,i){if("function"==typeof t.getComputedTextLength&&(t.textContent=e,e.length>0&&t.getComputedTextLength()>=i/1.1)){for(var a=e.length-3;a>0;a-=3)if(t.getSubStringLength(0,a)<=i/1.1)return void(t.textContent=e.substring(0,a)+"...");t.textContent="."}}}],[{key:"setAttrs",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i,e[i])}}]),t}(),y=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"getStackedSeriesTotals",value:function(){var t=this.w,e=[];if(0===t.globals.series.length)return e;for(var i=0;i<t.globals.series[t.globals.maxValsInArrayIndex].length;i++){for(var a=0,s=0;s<t.globals.series.length;s++)void 0!==t.globals.series[s][i]&&(a+=t.globals.series[s][i]);e.push(a)}return t.globals.stackedSeriesTotals=e,e}},{key:"getSeriesTotalByIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?this.w.config.series.reduce((function(t,e){return t+e}),0):this.w.globals.series[t].reduce((function(t,e){return t+e}),0)}},{key:"isSeriesNull",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return 0===(null===t?this.w.config.series.filter((function(t){return null!==t})):this.w.config.series[t].data.filter((function(t){return null!==t}))).length}},{key:"seriesHaveSameValues",value:function(t){return this.w.globals.series[t].every((function(t,e,i){return t===i[0]}))}},{key:"getCategoryLabels",value:function(t){var e=this.w,i=t.slice();return e.config.xaxis.convertedCatToNumeric&&(i=t.map((function(t,i){return e.config.xaxis.labels.formatter(t-e.globals.minX+1)}))),i}},{key:"getLargestSeries",value:function(){var t=this.w;t.globals.maxValsInArrayIndex=t.globals.series.map((function(t){return t.length})).indexOf(Math.max.apply(Math,t.globals.series.map((function(t){return t.length}))))}},{key:"getLargestMarkerSize",value:function(){var t=this.w,e=0;return t.globals.markers.size.forEach((function(t){e=Math.max(e,t)})),t.config.markers.discrete&&t.config.markers.discrete.length&&t.config.markers.discrete.forEach((function(t){e=Math.max(e,t.size)})),e>0&&(e+=t.config.markers.hover.sizeOffset+1),t.globals.markers.largestSize=e,e}},{key:"getSeriesTotals",value:function(){var t=this.w;t.globals.seriesTotals=t.globals.series.map((function(t,e){var i=0;if(Array.isArray(t))for(var a=0;a<t.length;a++)i+=t[a];else i+=t;return i}))}},{key:"getSeriesTotalsXRange",value:function(t,e){var i=this.w;return i.globals.series.map((function(a,s){for(var r=0,o=0;o<a.length;o++)i.globals.seriesX[s][o]>t&&i.globals.seriesX[s][o]<e&&(r+=a[o]);return r}))}},{key:"getPercentSeries",value:function(){var t=this.w;t.globals.seriesPercent=t.globals.series.map((function(e,i){var a=[];if(Array.isArray(e))for(var s=0;s<e.length;s++){var r=t.globals.stackedSeriesTotals[s],o=0;r&&(o=100*e[s]/r),a.push(o)}else{var n=100*e/t.globals.seriesTotals.reduce((function(t,e){return t+e}),0);a.push(n)}return a}))}},{key:"getCalculatedRatios",value:function(){var t,e,i,a,s=this.w.globals,r=[],o=0,n=[],l=.1,h=0;if(s.yRange=[],s.isMultipleYAxis)for(var c=0;c<s.minYArr.length;c++)s.yRange.push(Math.abs(s.minYArr[c]-s.maxYArr[c])),n.push(0);else s.yRange.push(Math.abs(s.minY-s.maxY));s.xRange=Math.abs(s.maxX-s.minX),s.zRange=Math.abs(s.maxZ-s.minZ);for(var d=0;d<s.yRange.length;d++)r.push(s.yRange[d]/s.gridHeight);if(e=s.xRange/s.gridWidth,i=Math.abs(s.initialMaxX-s.initialMinX)/s.gridWidth,t=s.yRange/s.gridWidth,a=s.xRange/s.gridHeight,(o=s.zRange/s.gridHeight*16)||(o=1),s.minY!==Number.MIN_VALUE&&0!==Math.abs(s.minY)&&(s.hasNegs=!0),s.isMultipleYAxis){n=[];for(var g=0;g<r.length;g++)n.push(-s.minYArr[g]/r[g])}else n.push(-s.minY/r[0]),s.minY!==Number.MIN_VALUE&&0!==Math.abs(s.minY)&&(l=-s.minY/t,h=s.minX/e);return{yRatio:r,invertedYRatio:t,zRatio:o,xRatio:e,initialXRatio:i,invertedXRatio:a,baseLineInvertedY:l,baseLineY:n,baseLineX:h}}},{key:"getLogSeries",value:function(t){var e=this,i=this.w;return i.globals.seriesLog=t.map((function(t,a){return i.config.yaxis[a]&&i.config.yaxis[a].logarithmic?t.map((function(t){return null===t?null:e.getLogVal(i.config.yaxis[a].logBase,t,a)})):t})),i.globals.invalidLogScale?t:i.globals.seriesLog}},{key:"getBaseLog",value:function(t,e){return Math.log(e)/Math.log(t)}},{key:"getLogVal",value:function(t,e,i){if(0===e)return 0;var a=this.w,s=0===a.globals.minYArr[i]?-1:this.getBaseLog(t,a.globals.minYArr[i]),r=(0===a.globals.maxYArr[i]?0:this.getBaseLog(t,a.globals.maxYArr[i]))-s;return e<1?e/r:(this.getBaseLog(t,e)-s)/r}},{key:"getLogYRatios",value:function(t){var e=this,i=this.w,a=this.w.globals;return a.yLogRatio=t.slice(),a.logYRange=a.yRange.map((function(t,s){if(i.config.yaxis[s]&&e.w.config.yaxis[s].logarithmic){var r,o=-Number.MAX_VALUE,n=Number.MIN_VALUE;return a.seriesLog.forEach((function(t,e){t.forEach((function(t){i.config.yaxis[e]&&i.config.yaxis[e].logarithmic&&(o=Math.max(t,o),n=Math.min(t,n))}))})),r=Math.pow(a.yRange[s],Math.abs(n-o)/a.yRange[s]),a.yLogRatio[s]=r/a.gridHeight,r}})),a.invalidLogScale?t.slice():a.yLogRatio}}],[{key:"checkComboSeries",value:function(t){var e=!1,i=0,a=0;return t.length&&void 0!==t[0].type&&t.forEach((function(t){"bar"!==t.type&&"column"!==t.type&&"candlestick"!==t.type&&"boxPlot"!==t.type||i++,void 0!==t.type&&a++})),a>0&&(e=!0),{comboBarCount:i,comboCharts:e}}},{key:"extendArrayProps",value:function(t,e,i){return e.yaxis&&(e=t.extendYAxis(e,i)),e.annotations&&(e.annotations.yaxis&&(e=t.extendYAxisAnnotations(e)),e.annotations.xaxis&&(e=t.extendXAxisAnnotations(e)),e.annotations.points&&(e=t.extendPointAnnotations(e))),e}}]),t}(),w=function(){function t(e){a(this,t),this.w=e.w,this.annoCtx=e}return r(t,[{key:"setOrientations",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.w;if("vertical"===t.label.orientation){var a=null!==e?e:0,s=i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a,"']"));if(null!==s){var r=s.getBoundingClientRect();s.setAttribute("x",parseFloat(s.getAttribute("x"))-r.height+4),"top"===t.label.position?s.setAttribute("y",parseFloat(s.getAttribute("y"))+r.width):s.setAttribute("y",parseFloat(s.getAttribute("y"))-r.width);var o=this.annoCtx.graphics.rotateAroundCenter(s),n=o.x,l=o.y;s.setAttribute("transform","rotate(-90 ".concat(n," ").concat(l,")"))}}}},{key:"addBackgroundToAnno",value:function(t,e){var i=this.w;if(!t||void 0===e.label.text||void 0!==e.label.text&&!String(e.label.text).trim())return null;var a=i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),s=t.getBoundingClientRect(),r=e.label.style.padding.left,o=e.label.style.padding.right,n=e.label.style.padding.top,l=e.label.style.padding.bottom;"vertical"===e.label.orientation&&(n=e.label.style.padding.left,l=e.label.style.padding.right,r=e.label.style.padding.top,o=e.label.style.padding.bottom);var h=s.left-a.left-r,c=s.top-a.top-n,d=this.annoCtx.graphics.drawRect(h-i.globals.barPadForNumericAxis,c,s.width+r+o,s.height+n+l,e.label.borderRadius,e.label.style.background,1,e.label.borderWidth,e.label.borderColor,0);return e.id&&d.node.classList.add(e.id),d}},{key:"annotationsBackground",value:function(){var t=this,e=this.w,i=function(i,a,s){var r=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations .apexcharts-").concat(s,"-annotation-label[rel='").concat(a,"']"));if(r){var o=r.parentNode,n=t.addBackgroundToAnno(r,i);n&&(o.insertBefore(n.node,r),i.label.mouseEnter&&n.node.addEventListener("mouseenter",i.label.mouseEnter.bind(t,i)),i.label.mouseLeave&&n.node.addEventListener("mouseleave",i.label.mouseLeave.bind(t,i)),i.label.click&&n.node.addEventListener("click",i.label.click.bind(t,i)))}};e.config.annotations.xaxis.map((function(t,e){i(t,e,"xaxis")})),e.config.annotations.yaxis.map((function(t,e){i(t,e,"yaxis")})),e.config.annotations.points.map((function(t,e){i(t,e,"point")}))}},{key:"getY1Y2",value:function(t,e){var i,a="y1"===t?e.y:e.y2,s=this.w;if(this.annoCtx.invertAxis){var r=s.globals.labels.indexOf(a);s.config.xaxis.convertedCatToNumeric&&(r=s.globals.categoryLabels.indexOf(a));var o=s.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child("+(r+1)+")");o&&(i=parseFloat(o.getAttribute("y")))}else{var n;if(s.config.yaxis[e.yAxisIndex].logarithmic)n=(a=new y(this.annoCtx.ctx).getLogVal(a,e.yAxisIndex))/s.globals.yLogRatio[e.yAxisIndex];else n=(a-s.globals.minYArr[e.yAxisIndex])/(s.globals.yRange[e.yAxisIndex]/s.globals.gridHeight);i=s.globals.gridHeight-n,!e.marker||void 0!==e.y&&null!==e.y||(i=0),s.config.yaxis[e.yAxisIndex]&&s.config.yaxis[e.yAxisIndex].reversed&&(i=n)}return i}},{key:"getX1X2",value:function(t,e){var i=this.w,a=this.annoCtx.invertAxis?i.globals.minY:i.globals.minX,s=this.annoCtx.invertAxis?i.globals.maxY:i.globals.maxX,r=this.annoCtx.invertAxis?i.globals.yRange[0]:i.globals.xRange,o=(e.x-a)/(r/i.globals.gridWidth);this.annoCtx.inversedReversedAxis&&(o=(s-e.x)/(r/i.globals.gridWidth)),"category"!==i.config.xaxis.type&&!i.config.xaxis.convertedCatToNumeric||this.annoCtx.invertAxis||i.globals.dataFormatXNumeric||(o=this.getStringX(e.x));var n=(e.x2-a)/(r/i.globals.gridWidth);return this.annoCtx.inversedReversedAxis&&(n=(s-e.x2)/(r/i.globals.gridWidth)),"category"!==i.config.xaxis.type&&!i.config.xaxis.convertedCatToNumeric||this.annoCtx.invertAxis||i.globals.dataFormatXNumeric||(n=this.getStringX(e.x2)),void 0!==e.x&&null!==e.x||!e.marker||(o=i.globals.gridWidth),"x1"===t?o:n}},{key:"getStringX",value:function(t){var e=this.w,i=t;e.config.xaxis.convertedCatToNumeric&&e.globals.categoryLabels.length&&(t=e.globals.categoryLabels.indexOf(t)+1);var a=e.globals.labels.indexOf(t),s=e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child("+(a+1)+")");return s&&(i=parseFloat(s.getAttribute("x"))),i}}]),t}(),k=function(){function t(e){a(this,t),this.w=e.w,this.annoCtx=e,this.invertAxis=this.annoCtx.invertAxis,this.helpers=new w(this.annoCtx)}return r(t,[{key:"addXaxisAnnotation",value:function(t,e,i){var a,s=this.w,r=this.helpers.getX1X2("x1",t),o=t.label.text,n=t.strokeDashArray;if(x.isNumber(r)){if(null===t.x2||void 0===t.x2){var l=this.annoCtx.graphics.drawLine(r+t.offsetX,0+t.offsetY,r+t.offsetX,s.globals.gridHeight+t.offsetY,t.borderColor,n,t.borderWidth);e.appendChild(l.node),t.id&&l.node.classList.add(t.id)}else{if((a=this.helpers.getX1X2("x2",t))<r){var h=r;r=a,a=h}var c=this.annoCtx.graphics.drawRect(r+t.offsetX,0+t.offsetY,a-r,s.globals.gridHeight+t.offsetY,0,t.fillColor,t.opacity,1,t.borderColor,n);c.node.classList.add("apexcharts-annotation-rect"),c.attr("clip-path","url(#gridRectMask".concat(s.globals.cuid,")")),e.appendChild(c.node),t.id&&c.node.classList.add(t.id)}var d="top"===t.label.position?4:s.globals.gridHeight,g=this.annoCtx.graphics.getTextRects(o,parseFloat(t.label.style.fontSize)),u=this.annoCtx.graphics.drawText({x:r+t.label.offsetX,y:d+t.label.offsetY-("vertical"===t.label.orientation?"top"===t.label.position?g.width/2-12:-g.width/2:0),text:o,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});u.attr({rel:i}),e.appendChild(u.node),this.annoCtx.helpers.setOrientations(t,i)}}},{key:"drawXAxisAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-xaxis-annotations"});return e.config.annotations.xaxis.map((function(e,a){t.addXaxisAnnotation(e,i.node,a)})),i}}]),t}(),A=function(){function t(e){a(this,t),this.w=e.w,this.annoCtx=e,this.helpers=new w(this.annoCtx)}return r(t,[{key:"addYaxisAnnotation",value:function(t,e,i){var a,s=this.w,r=t.strokeDashArray,o=this.helpers.getY1Y2("y1",t),n=t.label.text;if(null===t.y2||void 0===t.y2){var l=this.annoCtx.graphics.drawLine(0+t.offsetX,o+t.offsetY,this._getYAxisAnnotationWidth(t),o+t.offsetY,t.borderColor,r,t.borderWidth);e.appendChild(l.node),t.id&&l.node.classList.add(t.id)}else{if((a=this.helpers.getY1Y2("y2",t))>o){var h=o;o=a,a=h}var c=this.annoCtx.graphics.drawRect(0+t.offsetX,a+t.offsetY,this._getYAxisAnnotationWidth(t),o-a,0,t.fillColor,t.opacity,1,t.borderColor,r);c.node.classList.add("apexcharts-annotation-rect"),c.attr("clip-path","url(#gridRectMask".concat(s.globals.cuid,")")),e.appendChild(c.node),t.id&&c.node.classList.add(t.id)}var d="right"===t.label.position?s.globals.gridWidth:0,g=this.annoCtx.graphics.drawText({x:d+t.label.offsetX,y:(null!=a?a:o)+t.label.offsetY-3,text:n,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});g.attr({rel:i}),e.appendChild(g.node)}},{key:"_getYAxisAnnotationWidth",value:function(t){var e=this.w;e.globals.gridWidth;return(t.width.indexOf("%")>-1?e.globals.gridWidth*parseInt(t.width,10)/100:parseInt(t.width,10))+t.offsetX}},{key:"drawYAxisAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-yaxis-annotations"});return e.config.annotations.yaxis.map((function(e,a){t.addYaxisAnnotation(e,i.node,a)})),i}}]),t}(),S=function(){function t(e){a(this,t),this.w=e.w,this.annoCtx=e,this.helpers=new w(this.annoCtx)}return r(t,[{key:"addPointAnnotation",value:function(t,e,i){this.w;var a=this.helpers.getX1X2("x1",t),s=this.helpers.getY1Y2("y1",t);if(x.isNumber(a)){var r={pSize:t.marker.size,pointStrokeWidth:t.marker.strokeWidth,pointFillColor:t.marker.fillColor,pointStrokeColor:t.marker.strokeColor,shape:t.marker.shape,pRadius:t.marker.radius,class:"apexcharts-point-annotation-marker ".concat(t.marker.cssClass," ").concat(t.id?t.id:"")},o=this.annoCtx.graphics.drawMarker(a+t.marker.offsetX,s+t.marker.offsetY,r);e.appendChild(o.node);var n=t.label.text?t.label.text:"",l=this.annoCtx.graphics.drawText({x:a+t.label.offsetX,y:s+t.label.offsetY-t.marker.size-parseFloat(t.label.style.fontSize)/1.6,text:n,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,fontWeight:t.label.style.fontWeight,foreColor:t.label.style.color,cssClass:"apexcharts-point-annotation-label ".concat(t.label.style.cssClass," ").concat(t.id?t.id:"")});if(l.attr({rel:i}),e.appendChild(l.node),t.customSVG.SVG){var h=this.annoCtx.graphics.group({class:"apexcharts-point-annotations-custom-svg "+t.customSVG.cssClass});h.attr({transform:"translate(".concat(a+t.customSVG.offsetX,", ").concat(s+t.customSVG.offsetY,")")}),h.node.innerHTML=t.customSVG.SVG,e.appendChild(h.node)}if(t.image.path){var c=t.image.width?t.image.width:20,d=t.image.height?t.image.height:20;o=this.annoCtx.addImage({x:a+t.image.offsetX-c/2,y:s+t.image.offsetY-d/2,width:c,height:d,path:t.image.path,appendTo:".apexcharts-point-annotations"})}t.mouseEnter&&o.node.addEventListener("mouseenter",t.mouseEnter.bind(this,t)),t.mouseLeave&&o.node.addEventListener("mouseleave",t.mouseLeave.bind(this,t)),t.click&&o.node.addEventListener("click",t.click.bind(this,t))}}},{key:"drawPointAnnotations",value:function(){var t=this,e=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-point-annotations"});return e.config.annotations.points.map((function(e,a){t.addPointAnnotation(e,i.node,a)})),i}}]),t}();var C={name:"en",options:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Selection",selectionZoom:"Selection Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Panning",reset:"Reset Zoom"}}},L=function(){function t(){a(this,t),this.yAxis={show:!0,showAlways:!1,showForNullSeries:!0,seriesName:void 0,opposite:!1,reversed:!1,logarithmic:!1,logBase:10,tickAmount:void 0,forceNiceScale:!1,max:void 0,min:void 0,floating:!1,decimalsInFloat:void 0,labels:{show:!0,minWidth:0,maxWidth:160,offsetX:0,offsetY:0,align:void 0,rotate:0,padding:20,style:{colors:[],fontSize:"11px",fontWeight:400,fontFamily:void 0,cssClass:""},formatter:void 0},axisBorder:{show:!1,color:"#e0e0e0",width:1,offsetX:0,offsetY:0},axisTicks:{show:!1,color:"#e0e0e0",width:6,offsetX:0,offsetY:0},title:{text:void 0,rotate:-90,offsetY:0,offsetX:0,style:{color:void 0,fontSize:"11px",fontWeight:900,fontFamily:void 0,cssClass:""}},tooltip:{enabled:!1,offsetX:0},crosshairs:{show:!0,position:"front",stroke:{color:"#b6b6b6",width:1,dashArray:0}}},this.pointAnnotation={id:void 0,x:0,y:null,yAxisIndex:0,seriesIndex:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,marker:{size:4,fillColor:"#fff",strokeWidth:2,strokeColor:"#333",shape:"circle",offsetX:0,offsetY:0,radius:2,cssClass:""},label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",offsetX:0,offsetY:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}},customSVG:{SVG:void 0,cssClass:void 0,offsetX:0,offsetY:0},image:{path:void 0,width:20,height:20,offsetX:0,offsetY:0}},this.yAxisAnnotation={id:void 0,y:0,y2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,width:"100%",yAxisIndex:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"end",position:"right",offsetX:0,offsetY:-3,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.xAxisAnnotation={id:void 0,x:0,x2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",orientation:"vertical",position:"top",offsetX:0,offsetY:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.text={x:0,y:0,text:"",textAnchor:"start",foreColor:void 0,fontSize:"13px",fontFamily:void 0,fontWeight:400,appendTo:".apexcharts-annotations",backgroundColor:"transparent",borderColor:"#c2c2c2",borderRadius:0,borderWidth:0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2}}return r(t,[{key:"init",value:function(){return{annotations:{position:"front",yaxis:[this.yAxisAnnotation],xaxis:[this.xAxisAnnotation],points:[this.pointAnnotation],texts:[],images:[],shapes:[]},chart:{animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{delay:150,enabled:!0},dynamicAnimation:{enabled:!0,speed:350}},background:"transparent",locales:[C],defaultLocale:"en",dropShadow:{enabled:!1,enabledOnSeries:void 0,top:2,left:2,blur:4,color:"#000",opacity:.35},events:{animationEnd:void 0,beforeMount:void 0,mounted:void 0,updated:void 0,click:void 0,mouseMove:void 0,mouseLeave:void 0,legendClick:void 0,markerClick:void 0,selection:void 0,dataPointSelection:void 0,dataPointMouseEnter:void 0,dataPointMouseLeave:void 0,beforeZoom:void 0,beforeResetZoom:void 0,zoomed:void 0,scrolled:void 0,brushScrolled:void 0},foreColor:"#373d3f",fontFamily:"Helvetica, Arial, sans-serif",height:"auto",parentHeightOffset:15,redrawOnParentResize:!0,redrawOnWindowResize:!0,id:void 0,group:void 0,offsetX:0,offsetY:0,selection:{enabled:!1,type:"x",fill:{color:"#24292e",opacity:.1},stroke:{width:1,color:"#24292e",opacity:.4,dashArray:3},xaxis:{min:void 0,max:void 0},yaxis:{min:void 0,max:void 0}},sparkline:{enabled:!1},brush:{enabled:!1,autoScaleYaxis:!0,target:void 0},stacked:!1,stackType:"normal",toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:void 0,columnDelimiter:",",headerCategory:"category",headerValue:"value",dateFormatter:function(t){return new Date(t).toDateString()}},png:{filename:void 0},svg:{filename:void 0}},autoSelected:"zoom"},type:"line",width:"100%",zoom:{enabled:!0,type:"x",autoScaleYaxis:!1,zoomedArea:{fill:{color:"#90CAF9",opacity:.4},stroke:{color:"#0D47A1",opacity:.4,width:1}}}},plotOptions:{area:{fillTo:"origin"},bar:{horizontal:!1,columnWidth:"70%",barHeight:"70%",distributed:!1,borderRadius:0,rangeBarOverlap:!0,rangeBarGroupRows:!1,colors:{ranges:[],backgroundBarColors:[],backgroundBarOpacity:1,backgroundBarRadius:0},dataLabels:{position:"top",maxItems:100,hideOverflowingLabels:!0,orientation:"horizontal"}},bubble:{minBubbleRadius:void 0,maxBubbleRadius:void 0},candlestick:{colors:{upward:"#00B746",downward:"#EF403C"},wick:{useFillColor:!0}},boxPlot:{colors:{upper:"#00E396",lower:"#008FFB"}},heatmap:{radius:2,enableShades:!0,shadeIntensity:.5,reverseNegativeShade:!1,distributed:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},treemap:{enableShades:!0,shadeIntensity:.5,distributed:!1,reverseNegativeShade:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},radialBar:{inverseOrder:!1,startAngle:0,endAngle:360,offsetX:0,offsetY:0,hollow:{margin:5,size:"50%",background:"transparent",image:void 0,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:!0,position:"front",dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#f2f2f2",strokeWidth:"97%",opacity:1,margin:5,dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},dataLabels:{show:!0,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:0,formatter:function(t){return t}},value:{show:!0,fontSize:"14px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:16,formatter:function(t){return t+"%"}},total:{show:!1,label:"Total",fontSize:"16px",fontWeight:600,fontFamily:void 0,color:void 0,formatter:function(t){return t.globals.seriesTotals.reduce((function(t,e){return t+e}),0)/t.globals.series.length+"%"}}}},pie:{customScale:1,offsetX:0,offsetY:0,startAngle:0,endAngle:360,expandOnClick:!0,dataLabels:{offset:0,minAngleToShowLabel:10},donut:{size:"65%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:-10,formatter:function(t){return t}},value:{show:!0,fontSize:"20px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:10,formatter:function(t){return t}},total:{show:!1,showAlways:!1,label:"Total",fontSize:"16px",fontWeight:400,fontFamily:void 0,color:void 0,formatter:function(t){return t.globals.seriesTotals.reduce((function(t,e){return t+e}),0)}}}}},polarArea:{rings:{strokeWidth:1,strokeColor:"#e8e8e8"},spokes:{strokeWidth:1,connectorColors:"#e8e8e8"}},radar:{size:void 0,offsetX:0,offsetY:0,polygons:{strokeWidth:1,strokeColors:"#e8e8e8",connectorColors:"#e8e8e8",fill:{colors:void 0}}}},colors:void 0,dataLabels:{enabled:!0,enabledOnSeries:void 0,formatter:function(t){return null!==t?t:""},textAnchor:"middle",distributed:!1,offsetX:0,offsetY:0,style:{fontSize:"12px",fontFamily:void 0,fontWeight:600,colors:void 0},background:{enabled:!0,foreColor:"#fff",borderRadius:2,padding:4,opacity:.9,borderWidth:1,borderColor:"#fff",dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]},image:{src:[],width:void 0,height:void 0},pattern:{style:"squares",width:6,height:6,strokeWidth:2}},forecastDataPoints:{count:0,fillOpacity:.5,strokeWidth:void 0,dashArray:4},grid:{show:!0,borderColor:"#e0e0e0",strokeDashArray:0,position:"back",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},row:{colors:void 0,opacity:.5},column:{colors:void 0,opacity:.5},padding:{top:0,right:10,bottom:0,left:12}},labels:[],legend:{show:!0,showForSingleSeries:!1,showForNullSeries:!0,showForZeroSeries:!0,floating:!1,position:"bottom",horizontalAlign:"center",inverseOrder:!1,fontSize:"12px",fontFamily:void 0,fontWeight:400,width:void 0,height:void 0,formatter:void 0,tooltipHoverFormatter:void 0,offsetX:-20,offsetY:4,customLegendItems:[],labels:{colors:void 0,useSeriesColors:!1},markers:{width:12,height:12,strokeWidth:0,fillColors:void 0,strokeColor:"#fff",radius:12,customHTML:void 0,offsetX:0,offsetY:0,onClick:void 0},itemMargin:{horizontal:5,vertical:2},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0}},markers:{discrete:[],size:0,colors:void 0,strokeColors:"#fff",strokeWidth:2,strokeOpacity:.9,strokeDashArray:0,fillOpacity:1,shape:"circle",width:8,height:8,radius:2,offsetX:0,offsetY:0,onClick:void 0,onDblClick:void 0,showNullDataPoints:!0,hover:{size:void 0,sizeOffset:3}},noData:{text:void 0,align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:void 0,fontSize:"14px",fontFamily:void 0}},responsive:[],series:void 0,states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"lighten",value:.1}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"darken",value:.5}}},title:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"14px",fontWeight:900,fontFamily:void 0,color:void 0}},subtitle:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:30,floating:!1,style:{fontSize:"12px",fontWeight:400,fontFamily:void 0,color:void 0}},stroke:{show:!0,curve:"smooth",lineCap:"butt",width:2,colors:void 0,dashArray:0,fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]}}},tooltip:{enabled:!0,enabledOnSeries:void 0,shared:!0,followCursor:!1,intersect:!1,inverseOrder:!1,custom:void 0,fillSeriesColor:!1,theme:"light",cssClass:"",style:{fontSize:"12px",fontFamily:void 0},onDatasetHover:{highlightDataSeries:!1},x:{show:!0,format:"dd MMM",formatter:void 0},y:{formatter:void 0,title:{formatter:function(t){return t?t+": ":""}}},z:{formatter:void 0,title:"Size: "},marker:{show:!0,fillColors:void 0},items:{display:"flex"},fixed:{enabled:!1,position:"topRight",offsetX:0,offsetY:0}},xaxis:{type:"category",categories:[],convertedCatToNumeric:!1,offsetX:0,offsetY:0,overwriteCategories:void 0,labels:{show:!0,rotate:-45,rotateAlways:!1,hideOverlappingLabels:!0,trim:!1,minHeight:void 0,maxHeight:120,showDuplicates:!0,style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""},offsetX:0,offsetY:0,format:void 0,formatter:void 0,datetimeUTC:!0,datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"HH:mm",minute:"HH:mm:ss",second:"HH:mm:ss"}},group:{groups:[],style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""}},axisBorder:{show:!0,color:"#e0e0e0",width:"100%",height:1,offsetX:0,offsetY:0},axisTicks:{show:!0,color:"#e0e0e0",height:6,offsetX:0,offsetY:0},tickAmount:void 0,tickPlacement:"on",min:void 0,max:void 0,range:void 0,floating:!1,decimalsInFloat:void 0,position:"bottom",title:{text:void 0,offsetX:0,offsetY:0,style:{color:void 0,fontSize:"12px",fontWeight:900,fontFamily:void 0,cssClass:""}},crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3},fill:{type:"solid",color:"#B1B9C4",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}},dropShadow:{enabled:!1,left:0,top:0,blur:1,opacity:.4}},tooltip:{enabled:!0,offsetY:0,formatter:void 0,style:{fontSize:"12px",fontFamily:void 0}}},yaxis:this.yAxis,theme:{mode:"light",palette:"palette1",monochrome:{enabled:!1,color:"#008FFB",shadeTo:"light",shadeIntensity:.65}}}}}]),t}(),P=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.graphics=new m(this.ctx),this.w.globals.isBarHorizontal&&(this.invertAxis=!0),this.helpers=new w(this),this.xAxisAnnotations=new k(this),this.yAxisAnnotations=new A(this),this.pointsAnnotations=new S(this),this.w.globals.isBarHorizontal&&this.w.config.yaxis[0].reversed&&(this.inversedReversedAxis=!0),this.xDivision=this.w.globals.gridWidth/this.w.globals.dataPoints}return r(t,[{key:"drawAxesAnnotations",value:function(){var t=this.w;if(t.globals.axisCharts){for(var e=this.yAxisAnnotations.drawYAxisAnnotations(),i=this.xAxisAnnotations.drawXAxisAnnotations(),a=this.pointsAnnotations.drawPointAnnotations(),s=t.config.chart.animations.enabled,r=[e,i,a],o=[i.node,e.node,a.node],n=0;n<3;n++)t.globals.dom.elGraphical.add(r[n]),!s||t.globals.resized||t.globals.dataChanged||"scatter"!==t.config.chart.type&&"bubble"!==t.config.chart.type&&t.globals.dataPoints>1&&o[n].classList.add("apexcharts-element-hidden"),t.globals.delayedElements.push({el:o[n],index:0});this.helpers.annotationsBackground()}}},{key:"drawImageAnnos",value:function(){var t=this;this.w.config.annotations.images.map((function(e,i){t.addImage(e,i)}))}},{key:"drawTextAnnos",value:function(){var t=this;this.w.config.annotations.texts.map((function(e,i){t.addText(e,i)}))}},{key:"addXaxisAnnotation",value:function(t,e,i){this.xAxisAnnotations.addXaxisAnnotation(t,e,i)}},{key:"addYaxisAnnotation",value:function(t,e,i){this.yAxisAnnotations.addYaxisAnnotation(t,e,i)}},{key:"addPointAnnotation",value:function(t,e,i){this.pointsAnnotations.addPointAnnotation(t,e,i)}},{key:"addText",value:function(t,e){var i=t.x,a=t.y,s=t.text,r=t.textAnchor,o=t.foreColor,n=t.fontSize,l=t.fontFamily,h=t.fontWeight,c=t.cssClass,d=t.backgroundColor,g=t.borderWidth,u=t.strokeDashArray,p=t.borderRadius,f=t.borderColor,x=t.appendTo,b=void 0===x?".apexcharts-annotations":x,v=t.paddingLeft,m=void 0===v?4:v,y=t.paddingRight,w=void 0===y?4:y,k=t.paddingBottom,A=void 0===k?2:k,S=t.paddingTop,C=void 0===S?2:S,L=this.w,P=this.graphics.drawText({x:i,y:a,text:s,textAnchor:r||"start",fontSize:n||"12px",fontWeight:h||"regular",fontFamily:l||L.config.chart.fontFamily,foreColor:o||L.config.chart.foreColor,cssClass:c}),M=L.globals.dom.baseEl.querySelector(b);M&&M.appendChild(P.node);var T=P.bbox();if(s){var I=this.graphics.drawRect(T.x-m,T.y-C,T.width+m+w,T.height+A+C,p,d||"transparent",1,g,f,u);M.insertBefore(I.node,P.node)}}},{key:"addImage",value:function(t,e){var i=this.w,a=t.path,s=t.x,r=void 0===s?0:s,o=t.y,n=void 0===o?0:o,l=t.width,h=void 0===l?20:l,c=t.height,d=void 0===c?20:c,g=t.appendTo,u=void 0===g?".apexcharts-annotations":g,p=i.globals.dom.Paper.image(a);p.size(h,d).move(r,n);var f=i.globals.dom.baseEl.querySelector(u);return f&&f.appendChild(p.node),p}},{key:"addXaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"xaxis",contextMethod:i.addXaxisAnnotation}),i}},{key:"addYaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"yaxis",contextMethod:i.addYaxisAnnotation}),i}},{key:"addPointAnnotationExternal",value:function(t,e,i){return void 0===this.invertAxis&&(this.invertAxis=i.w.globals.isBarHorizontal),this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"point",contextMethod:i.addPointAnnotation}),i}},{key:"addAnnotationExternal",value:function(t){var e=t.params,i=t.pushToMemory,a=t.context,s=t.type,r=t.contextMethod,o=a,n=o.w,l=n.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations")),h=l.childNodes.length+1,c=new L,d=Object.assign({},"xaxis"===s?c.xAxisAnnotation:"yaxis"===s?c.yAxisAnnotation:c.pointAnnotation),g=x.extend(d,e);switch(s){case"xaxis":this.addXaxisAnnotation(g,l,h);break;case"yaxis":this.addYaxisAnnotation(g,l,h);break;case"point":this.addPointAnnotation(g,l,h)}var u=n.globals.dom.baseEl.querySelector(".apexcharts-".concat(s,"-annotations .apexcharts-").concat(s,"-annotation-label[rel='").concat(h,"']")),p=this.helpers.addBackgroundToAnno(u,g);return p&&l.insertBefore(p.node,u),i&&n.globals.memory.methodsToExec.push({context:o,id:g.id?g.id:x.randomId(),method:r,label:"addAnnotation",params:e}),a}},{key:"clearAnnotations",value:function(t){var e=t.w,i=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");e.globals.memory.methodsToExec.map((function(t,i){"addText"!==t.label&&"addAnnotation"!==t.label||e.globals.memory.methodsToExec.splice(i,1)})),i=x.listToArray(i),Array.prototype.forEach.call(i,(function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}))}},{key:"removeAnnotation",value:function(t,e){var i=t.w,a=i.globals.dom.baseEl.querySelectorAll(".".concat(e));a&&(i.globals.memory.methodsToExec.map((function(t,a){t.id===e&&i.globals.memory.methodsToExec.splice(a,1)})),Array.prototype.forEach.call(a,(function(t){t.parentElement.removeChild(t)})))}}]),t}(),M=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.opts=null,this.seriesIndex=0}return r(t,[{key:"clippedImgArea",value:function(t){var e=this.w,i=e.config,a=parseInt(e.globals.gridWidth,10),s=parseInt(e.globals.gridHeight,10),r=a>s?a:s,o=t.image,n=0,l=0;void 0===t.width&&void 0===t.height?void 0!==i.fill.image.width&&void 0!==i.fill.image.height?(n=i.fill.image.width+1,l=i.fill.image.height):(n=r+1,l=r):(n=t.width,l=t.height);var h=document.createElementNS(e.globals.SVGNS,"pattern");m.setAttrs(h,{id:t.patternID,patternUnits:t.patternUnits?t.patternUnits:"userSpaceOnUse",width:n+"px",height:l+"px"});var c=document.createElementNS(e.globals.SVGNS,"image");h.appendChild(c),c.setAttributeNS(window.SVG.xlink,"href",o),m.setAttrs(c,{x:0,y:0,preserveAspectRatio:"none",width:n+"px",height:l+"px"}),c.style.opacity=t.opacity,e.globals.dom.elDefs.node.appendChild(h)}},{key:"getSeriesIndex",value:function(t){var e=this.w;return("bar"===e.config.chart.type||"rangeBar"===e.config.chart.type)&&e.config.plotOptions.bar.distributed||"heatmap"===e.config.chart.type||"treemap"===e.config.chart.type?this.seriesIndex=t.seriesNumber:this.seriesIndex=t.seriesNumber%e.globals.series.length,this.seriesIndex}},{key:"fillPath",value:function(t){var e=this.w;this.opts=t;var i,a,s,r=this.w.config;this.seriesIndex=this.getSeriesIndex(t);var o=this.getFillColors()[this.seriesIndex];void 0!==e.globals.seriesColors[this.seriesIndex]&&(o=e.globals.seriesColors[this.seriesIndex]),"function"==typeof o&&(o=o({seriesIndex:this.seriesIndex,dataPointIndex:t.dataPointIndex,value:t.value,w:e}));var n=this.getFillType(this.seriesIndex),l=Array.isArray(r.fill.opacity)?r.fill.opacity[this.seriesIndex]:r.fill.opacity;t.color&&(o=t.color);var h=o;if(-1===o.indexOf("rgb")?o.length<9&&(h=x.hexToRgba(o,l)):o.indexOf("rgba")>-1&&(l=x.getOpacityFromRGBA(o)),t.opacity&&(l=t.opacity),"pattern"===n&&(a=this.handlePatternFill(a,o,l,h)),"gradient"===n&&(s=this.handleGradientFill(o,l,this.seriesIndex)),"image"===n){var c=r.fill.image.src,d=t.patternID?t.patternID:"";this.clippedImgArea({opacity:l,image:Array.isArray(c)?t.seriesNumber<c.length?c[t.seriesNumber]:c[0]:c,width:t.width?t.width:void 0,height:t.height?t.height:void 0,patternUnits:t.patternUnits,patternID:"pattern".concat(e.globals.cuid).concat(t.seriesNumber+1).concat(d)}),i="url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber+1).concat(d,")")}else i="gradient"===n?s:"pattern"===n?a:h;return t.solid&&(i=h),i}},{key:"getFillType",value:function(t){var e=this.w;return Array.isArray(e.config.fill.type)?e.config.fill.type[t]:e.config.fill.type}},{key:"getFillColors",value:function(){var t=this.w,e=t.config,i=this.opts,a=[];return t.globals.comboCharts?"line"===t.config.series[this.seriesIndex].type?Array.isArray(t.globals.stroke.colors)?a=t.globals.stroke.colors:a.push(t.globals.stroke.colors):Array.isArray(t.globals.fill.colors)?a=t.globals.fill.colors:a.push(t.globals.fill.colors):"line"===e.chart.type?Array.isArray(t.globals.stroke.colors)?a=t.globals.stroke.colors:a.push(t.globals.stroke.colors):Array.isArray(t.globals.fill.colors)?a=t.globals.fill.colors:a.push(t.globals.fill.colors),void 0!==i.fillColors&&(a=[],Array.isArray(i.fillColors)?a=i.fillColors.slice():a.push(i.fillColors)),a}},{key:"handlePatternFill",value:function(t,e,i,a){var s=this.w.config,r=this.opts,o=new m(this.ctx),n=void 0===s.fill.pattern.strokeWidth?Array.isArray(s.stroke.width)?s.stroke.width[this.seriesIndex]:s.stroke.width:Array.isArray(s.fill.pattern.strokeWidth)?s.fill.pattern.strokeWidth[this.seriesIndex]:s.fill.pattern.strokeWidth,l=e;Array.isArray(s.fill.pattern.style)?t=void 0!==s.fill.pattern.style[r.seriesNumber]?o.drawPattern(s.fill.pattern.style[r.seriesNumber],s.fill.pattern.width,s.fill.pattern.height,l,n,i):a:t=o.drawPattern(s.fill.pattern.style,s.fill.pattern.width,s.fill.pattern.height,l,n,i);return t}},{key:"handleGradientFill",value:function(t,e,i){var a,s=this.w.config,r=this.opts,o=new m(this.ctx),n=new x,l=s.fill.gradient.type,h=t,c=void 0===s.fill.gradient.opacityFrom?e:Array.isArray(s.fill.gradient.opacityFrom)?s.fill.gradient.opacityFrom[i]:s.fill.gradient.opacityFrom;h.indexOf("rgba")>-1&&(c=x.getOpacityFromRGBA(h));var d=void 0===s.fill.gradient.opacityTo?e:Array.isArray(s.fill.gradient.opacityTo)?s.fill.gradient.opacityTo[i]:s.fill.gradient.opacityTo;if(void 0===s.fill.gradient.gradientToColors||0===s.fill.gradient.gradientToColors.length)a="dark"===s.fill.gradient.shade?n.shadeColor(-1*parseFloat(s.fill.gradient.shadeIntensity),t.indexOf("rgb")>-1?x.rgb2hex(t):t):n.shadeColor(parseFloat(s.fill.gradient.shadeIntensity),t.indexOf("rgb")>-1?x.rgb2hex(t):t);else if(s.fill.gradient.gradientToColors[r.seriesNumber]){var g=s.fill.gradient.gradientToColors[r.seriesNumber];a=g,g.indexOf("rgba")>-1&&(d=x.getOpacityFromRGBA(g))}else a=t;if(s.fill.gradient.inverseColors){var u=h;h=a,a=u}return h.indexOf("rgb")>-1&&(h=x.rgb2hex(h)),a.indexOf("rgb")>-1&&(a=x.rgb2hex(a)),o.drawGradient(l,h,a,c,d,r.size,s.fill.gradient.stops,s.fill.gradient.colorStops,i)}}]),t}(),T=function(){function t(e,i){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"setGlobalMarkerSize",value:function(){var t=this.w;if(t.globals.markers.size=Array.isArray(t.config.markers.size)?t.config.markers.size:[t.config.markers.size],t.globals.markers.size.length>0){if(t.globals.markers.size.length<t.globals.series.length+1)for(var e=0;e<=t.globals.series.length;e++)void 0===t.globals.markers.size[e]&&t.globals.markers.size.push(t.globals.markers.size[0])}else t.globals.markers.size=t.config.series.map((function(e){return t.config.markers.size}))}},{key:"plotChartMarkers",value:function(t,e,i,a){var s,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=this.w,n=e,l=t,h=null,c=new m(this.ctx),d=o.config.markers.discrete&&o.config.markers.discrete.length;if((o.globals.markers.size[e]>0||r||d)&&(h=c.group({class:r||d?"":"apexcharts-series-markers"})).attr("clip-path","url(#gridRectMarkerMask".concat(o.globals.cuid,")")),Array.isArray(l.x))for(var g=0;g<l.x.length;g++){var u=i;1===i&&0===g&&(u=0),1===i&&1===g&&(u=1);var p="apexcharts-marker";"line"!==o.config.chart.type&&"area"!==o.config.chart.type||o.globals.comboCharts||o.config.tooltip.intersect||(p+=" no-pointer-events");var f=Array.isArray(o.config.markers.size)?o.globals.markers.size[e]>0:o.config.markers.size>0;if(f||r||d){x.isNumber(l.y[g])?p+=" w".concat(x.randomId()):p="apexcharts-nullpoint";var b=this.getMarkerConfig({cssClass:p,seriesIndex:e,dataPointIndex:u});o.config.series[n].data[u]&&(o.config.series[n].data[u].fillColor&&(b.pointFillColor=o.config.series[n].data[u].fillColor),o.config.series[n].data[u].strokeColor&&(b.pointStrokeColor=o.config.series[n].data[u].strokeColor)),a&&(b.pSize=a),(s=c.drawMarker(l.x[g],l.y[g],b)).attr("rel",u),s.attr("j",u),s.attr("index",e),s.node.setAttribute("default-marker-size",b.pSize);var y=new v(this.ctx);y.setSelectionFilter(s,e,u),this.addEvents(s),h&&h.add(s)}else void 0===o.globals.pointsArray[e]&&(o.globals.pointsArray[e]=[]),o.globals.pointsArray[e].push([l.x[g],l.y[g]])}return h}},{key:"getMarkerConfig",value:function(t){var e=t.cssClass,i=t.seriesIndex,a=t.dataPointIndex,s=void 0===a?null:a,r=t.finishRadius,o=void 0===r?null:r,n=this.w,l=this.getMarkerStyle(i),h=n.globals.markers.size[i],c=n.config.markers;return null!==s&&c.discrete.length&&c.discrete.map((function(t){t.seriesIndex===i&&t.dataPointIndex===s&&(l.pointStrokeColor=t.strokeColor,l.pointFillColor=t.fillColor,h=t.size,l.pointShape=t.shape)})),{pSize:null===o?h:o,pRadius:c.radius,width:Array.isArray(c.width)?c.width[i]:c.width,height:Array.isArray(c.height)?c.height[i]:c.height,pointStrokeWidth:Array.isArray(c.strokeWidth)?c.strokeWidth[i]:c.strokeWidth,pointStrokeColor:l.pointStrokeColor,pointFillColor:l.pointFillColor,shape:l.pointShape||(Array.isArray(c.shape)?c.shape[i]:c.shape),class:e,pointStrokeOpacity:Array.isArray(c.strokeOpacity)?c.strokeOpacity[i]:c.strokeOpacity,pointStrokeDashArray:Array.isArray(c.strokeDashArray)?c.strokeDashArray[i]:c.strokeDashArray,pointFillOpacity:Array.isArray(c.fillOpacity)?c.fillOpacity[i]:c.fillOpacity,seriesIndex:i}}},{key:"addEvents",value:function(t){var e=this.w,i=new m(this.ctx);t.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this.ctx,t)),t.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this.ctx,t)),t.node.addEventListener("mousedown",i.pathMouseDown.bind(this.ctx,t)),t.node.addEventListener("click",e.config.markers.onClick),t.node.addEventListener("dblclick",e.config.markers.onDblClick),t.node.addEventListener("touchstart",i.pathMouseDown.bind(this.ctx,t),{passive:!0})}},{key:"getMarkerStyle",value:function(t){var e=this.w,i=e.globals.markers.colors,a=e.config.markers.strokeColor||e.config.markers.strokeColors;return{pointStrokeColor:Array.isArray(a)?a[t]:a,pointFillColor:Array.isArray(i)?i[t]:i}}}]),t}(),I=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled}return r(t,[{key:"draw",value:function(t,e,i){var a=this.w,s=new m(this.ctx),r=i.realIndex,o=i.pointsPos,n=i.zRatio,l=i.elParent,h=s.group({class:"apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type)});if(h.attr("clip-path","url(#gridRectMarkerMask".concat(a.globals.cuid,")")),Array.isArray(o.x))for(var c=0;c<o.x.length;c++){var d=e+1,g=!0;0===e&&0===c&&(d=0),0===e&&1===c&&(d=1);var u=0,p=a.globals.markers.size[r];if(n!==1/0){p=a.globals.seriesZ[r][d]/n;var f=a.config.plotOptions.bubble;f.minBubbleRadius&&p<f.minBubbleRadius&&(p=f.minBubbleRadius),f.maxBubbleRadius&&p>f.maxBubbleRadius&&(p=f.maxBubbleRadius)}a.config.chart.animations.enabled||(u=p);var x=o.x[c],b=o.y[c];if(u=u||0,null!==b&&void 0!==a.globals.series[r][d]||(g=!1),g){var v=this.drawPoint(x,b,u,p,r,d,e);h.add(v)}l.add(h)}}},{key:"drawPoint",value:function(t,e,i,a,s,r,o){var n=this.w,l=s,h=new b(this.ctx),c=new v(this.ctx),d=new M(this.ctx),g=new T(this.ctx),u=new m(this.ctx),p=g.getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:l,dataPointIndex:r,finishRadius:"bubble"===n.config.chart.type||n.globals.comboCharts&&n.config.series[s]&&"bubble"===n.config.series[s].type?a:null});a=p.pSize;var f,x=d.fillPath({seriesNumber:s,dataPointIndex:r,color:p.pointFillColor,patternUnits:"objectBoundingBox",value:n.globals.series[s][o]});if("circle"===p.shape?f=u.drawCircle(i):"square"!==p.shape&&"rect"!==p.shape||(f=u.drawRect(0,0,p.width-p.pointStrokeWidth/2,p.height-p.pointStrokeWidth/2,p.pRadius)),n.config.series[l].data[r]&&n.config.series[l].data[r].fillColor&&(x=n.config.series[l].data[r].fillColor),f.attr({x:t-p.width/2-p.pointStrokeWidth/2,y:e-p.height/2-p.pointStrokeWidth/2,cx:t,cy:e,fill:x,"fill-opacity":p.pointFillOpacity,stroke:p.pointStrokeColor,r:a,"stroke-width":p.pointStrokeWidth,"stroke-dasharray":p.pointStrokeDashArray,"stroke-opacity":p.pointStrokeOpacity}),n.config.chart.dropShadow.enabled){var y=n.config.chart.dropShadow;c.dropShadow(f,y,s)}if(!this.initialAnim||n.globals.dataChanged||n.globals.resized)n.globals.animationEnded=!0;else{var w=n.config.chart.animations.speed;h.animateMarker(f,0,"circle"===p.shape?a:{width:p.width,height:p.height},w,n.globals.easing,(function(){window.setTimeout((function(){h.animationCompleted(f)}),100)}))}if(n.globals.dataChanged&&"circle"===p.shape)if(this.dynamicAnim){var k,A,S,C,L=n.config.chart.animations.dynamicAnimation.speed;null!=(C=n.globals.previousPaths[s]&&n.globals.previousPaths[s][o])&&(k=C.x,A=C.y,S=void 0!==C.r?C.r:a);for(var P=0;P<n.globals.collapsedSeries.length;P++)n.globals.collapsedSeries[P].index===s&&(L=1,a=0);0===t&&0===e&&(a=0),h.animateCircle(f,{cx:k,cy:A,r:S},{cx:t,cy:e,r:a},L,n.globals.easing)}else f.attr({r:a});return f.attr({rel:r,j:r,index:s,"default-marker-size":a}),c.setSelectionFilter(f,s,r),g.addEvents(f),f.node.classList.add("apexcharts-marker"),f}},{key:"centerTextInBubble",value:function(t){var e=this.w;return{y:t+=parseInt(e.config.dataLabels.style.fontSize,10)/4}}}]),t}(),z=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"dataLabelsCorrection",value:function(t,e,i,a,s,r,o){var n=this.w,l=!1,h=new m(this.ctx).getTextRects(i,o),c=h.width,d=h.height;e<0&&(e=0),e>n.globals.gridHeight+d&&(e=n.globals.gridHeight+d/2),void 0===n.globals.dataLabelsRects[a]&&(n.globals.dataLabelsRects[a]=[]),n.globals.dataLabelsRects[a].push({x:t,y:e,width:c,height:d});var g=n.globals.dataLabelsRects[a].length-2,u=void 0!==n.globals.lastDrawnDataLabelsIndexes[a]?n.globals.lastDrawnDataLabelsIndexes[a][n.globals.lastDrawnDataLabelsIndexes[a].length-1]:0;if(void 0!==n.globals.dataLabelsRects[a][g]){var p=n.globals.dataLabelsRects[a][u];(t>p.x+p.width+2||e>p.y+p.height+2||t+c<p.x)&&(l=!0)}return(0===s||r)&&(l=!0),{x:t,y:e,textRects:h,drawnextLabel:l}}},{key:"drawDataLabel",value:function(t,e,i){var a=this,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2,r=this.w,o=new m(this.ctx),n=r.config.dataLabels,l=0,h=0,c=i,d=null;if(!n.enabled||!Array.isArray(t.x))return d;d=o.group({class:"apexcharts-data-labels"});for(var g=0;g<t.x.length;g++)if(l=t.x[g]+n.offsetX,h=t.y[g]+n.offsetY+s,!isNaN(l)){1===i&&0===g&&(c=0),1===i&&1===g&&(c=1);var u=r.globals.series[e][c],p="",f=function(t){return r.config.dataLabels.formatter(t,{ctx:a.ctx,seriesIndex:e,dataPointIndex:c,w:r})};if("bubble"===r.config.chart.type){p=f(u=r.globals.seriesZ[e][c]),h=t.y[g];var x=new I(this.ctx),b=x.centerTextInBubble(h,e,c);h=b.y}else void 0!==u&&(p=f(u));this.plotDataLabelsText({x:l,y:h,text:p,i:e,j:c,parent:d,offsetCorrection:!0,dataLabelsConfig:r.config.dataLabels})}return d}},{key:"plotDataLabelsText",value:function(t){var e=this.w,i=new m(this.ctx),a=t.x,s=t.y,r=t.i,o=t.j,n=t.text,l=t.textAnchor,h=t.fontSize,c=t.parent,d=t.dataLabelsConfig,g=t.color,u=t.alwaysDrawDataLabel,p=t.offsetCorrection;if(!(Array.isArray(e.config.dataLabels.enabledOnSeries)&&e.config.dataLabels.enabledOnSeries.indexOf(r)<0)){var f={x:a,y:s,drawnextLabel:!0,textRects:null};p&&(f=this.dataLabelsCorrection(a,s,n,r,o,u,parseInt(d.style.fontSize,10))),e.globals.zoomed||(a=f.x,s=f.y),f.textRects&&(a<-10-f.textRects.width||a>e.globals.gridWidth+f.textRects.width+10)&&(n="");var x=e.globals.dataLabels.style.colors[r];(("bar"===e.config.chart.type||"rangeBar"===e.config.chart.type)&&e.config.plotOptions.bar.distributed||e.config.dataLabels.distributed)&&(x=e.globals.dataLabels.style.colors[o]),"function"==typeof x&&(x=x({series:e.globals.series,seriesIndex:r,dataPointIndex:o,w:e})),g&&(x=g);var b=d.offsetX,y=d.offsetY;if("bar"!==e.config.chart.type&&"rangeBar"!==e.config.chart.type||(b=0,y=0),f.drawnextLabel){var w=i.drawText({width:100,height:parseInt(d.style.fontSize,10),x:a+b,y:s+y,foreColor:x,textAnchor:l||d.textAnchor,text:n,fontSize:h||d.style.fontSize,fontFamily:d.style.fontFamily,fontWeight:d.style.fontWeight||"normal"});if(w.attr({class:"apexcharts-datalabel",cx:a,cy:s}),d.dropShadow.enabled){var k=d.dropShadow;new v(this.ctx).dropShadow(w,k)}c.add(w),void 0===e.globals.lastDrawnDataLabelsIndexes[r]&&(e.globals.lastDrawnDataLabelsIndexes[r]=[]),e.globals.lastDrawnDataLabelsIndexes[r].push(o)}}}},{key:"addBackgroundToDataLabel",value:function(t,e){var i=this.w,a=i.config.dataLabels.background,s=a.padding,r=a.padding/2,o=e.width,n=e.height,l=new m(this.ctx).drawRect(e.x-s,e.y-r/2,o+2*s,n+r,a.borderRadius,"transparent"===i.config.chart.background?"#fff":i.config.chart.background,a.opacity,a.borderWidth,a.borderColor);a.dropShadow.enabled&&new v(this.ctx).dropShadow(l,a.dropShadow);return l}},{key:"dataLabelsBackground",value:function(){var t=this.w;if("bubble"!==t.config.chart.type)for(var e=t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"),i=0;i<e.length;i++){var a=e[i],s=a.getBBox(),r=null;if(s.width&&s.height&&(r=this.addBackgroundToDataLabel(a,s)),r){a.parentNode.insertBefore(r.node,a);var o=a.getAttribute("fill");t.config.chart.animations.enabled&&!t.globals.resized&&!t.globals.dataChanged?r.animate().attr({fill:o}):r.attr({fill:o}),a.setAttribute("fill",t.config.dataLabels.background.foreColor)}}}},{key:"bringForward",value:function(){for(var t=this.w,e=t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"),i=t.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"),a=0;a<e.length;a++)i&&i.insertBefore(e[a],i.nextSibling)}}]),t}(),X=function(){function t(e){a(this,t),this.w=e.w,this.barCtx=e}return r(t,[{key:"handleBarDataLabels",value:function(t){var e=t.x,i=t.y,a=t.y1,s=t.y2,r=t.i,o=t.j,n=t.realIndex,l=t.series,h=t.barHeight,c=t.barWidth,d=t.barYPosition,g=t.visibleSeries,u=t.renderedPath,p=this.w,f=new m(this.barCtx.ctx),x=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[n]:this.barCtx.strokeWidth,b=e+parseFloat(c*g),v=i+parseFloat(h*g);p.globals.isXNumeric&&!p.globals.isBarHorizontal&&(b=e+parseFloat(c*(g+1)),v=i+parseFloat(h*(g+1))-x);var y=e,w=i,k={},A=p.config.dataLabels,S=this.barCtx.barOptions.dataLabels;void 0!==d&&this.barCtx.isRangeBar&&(v=d,w=d);var C=A.offsetX,L=A.offsetY,P={width:0,height:0};if(p.config.dataLabels.enabled){var M=this.barCtx.series[r][o];P=f.getTextRects(p.globals.yLabelFormatters[0](M),parseFloat(A.style.fontSize))}var T={x:e,y:i,i:r,j:o,renderedPath:u,bcx:b,bcy:v,barHeight:h,barWidth:c,textRects:P,strokeWidth:x,dataLabelsX:y,dataLabelsY:w,barDataLabelsConfig:S,offX:C,offY:L};return k=this.barCtx.isHorizontal?this.calculateBarsDataLabelsPosition(T):this.calculateColumnsDataLabelsPosition(T),u.attr({cy:k.bcy,cx:k.bcx,j:o,val:l[r][o],barHeight:h,barWidth:c}),this.drawCalculatedDataLabels({x:k.dataLabelsX,y:k.dataLabelsY,val:this.barCtx.isRangeBar?[a,s]:l[r][o],i:n,j:o,barWidth:c,barHeight:h,textRects:P,dataLabelsConfig:A})}},{key:"calculateColumnsDataLabelsPosition",value:function(t){var e,i=this.w,a=t.i,s=t.j,r=t.y,o=t.bcx,n=t.barWidth,l=t.barHeight,h=t.textRects,c=t.dataLabelsY,d=t.barDataLabelsConfig,g=t.strokeWidth,u=t.offX,p=t.offY;l=Math.abs(l);var f="vertical"===i.config.plotOptions.bar.dataLabels.orientation;o-=g/2;var x=i.globals.gridWidth/i.globals.dataPoints;if(e=i.globals.isXNumeric?o-n/2+u:o-x+n/2+u,f){e=e+h.height/2-g/2-2}var b=this.barCtx.series[a][s]<0,v=r;switch(this.barCtx.isReversed&&(v=r-l+(b?2*l:0),r-=l),d.position){case"center":c=f?b?v+l/2+p:v+l/2-p:b?v-l/2+h.height/2+p:v+l/2+h.height/2-p;break;case"bottom":c=f?b?v+l+p:v+l-p:b?v-l+h.height+g+p:v+l-h.height/2+g-p;break;case"top":c=f?b?v+p:v-p:b?v-h.height/2-p:v+h.height+p}return i.config.chart.stacked||(c<0?c=0+g:c+h.height/3>i.globals.gridHeight&&(c=i.globals.gridHeight-g)),{bcx:o,bcy:r,dataLabelsX:e,dataLabelsY:c}}},{key:"calculateBarsDataLabelsPosition",value:function(t){var e=this.w,i=t.x,a=t.i,s=t.j,r=t.bcy,o=t.barHeight,n=t.barWidth,l=t.textRects,h=t.dataLabelsX,c=t.strokeWidth,d=t.barDataLabelsConfig,g=t.offX,u=t.offY,p=e.globals.gridHeight/e.globals.dataPoints;n=Math.abs(n);var f=r-(this.barCtx.isRangeBar?0:p)+o/2+l.height/2+u-3,x=this.barCtx.series[a][s]<0,b=i;switch(this.barCtx.isReversed&&(b=i+n-(x?2*n:0),i=e.globals.gridWidth-n),d.position){case"center":h=x?b+n/2-g:Math.max(l.width/2,b-n/2)+g;break;case"bottom":h=x?b+n-c-Math.round(l.width/2)-g:b-n+c+Math.round(l.width/2)+g;break;case"top":h=x?b-c+Math.round(l.width/2)-g:b-c-Math.round(l.width/2)+g}return e.config.chart.stacked||(h<0?h=h+l.width+c:h+l.width/2>e.globals.gridWidth&&(h=e.globals.gridWidth-l.width-c)),{bcx:i,bcy:r,dataLabelsX:h,dataLabelsY:f}}},{key:"drawCalculatedDataLabels",value:function(t){var i=t.x,a=t.y,s=t.val,r=t.i,o=t.j,n=t.textRects,l=t.barHeight,h=t.barWidth,c=t.dataLabelsConfig,d=this.w,g="rotate(0)";"vertical"===d.config.plotOptions.bar.dataLabels.orientation&&(g="rotate(-90, ".concat(i,", ").concat(a,")"));var u=new z(this.barCtx.ctx),p=new m(this.barCtx.ctx),f=c.formatter,x=null,b=d.globals.collapsedSeriesIndices.indexOf(r)>-1;if(c.enabled&&!b){x=p.group({class:"apexcharts-data-labels",transform:g});var v="";void 0!==s&&(v=f(s,{seriesIndex:r,dataPointIndex:o,w:d}));var y=d.globals.series[r][o]<0,w=d.config.plotOptions.bar.dataLabels.position;if("vertical"===d.config.plotOptions.bar.dataLabels.orientation&&("top"===w&&(c.textAnchor=y?"end":"start"),"center"===w&&(c.textAnchor="middle"),"bottom"===w&&(c.textAnchor=y?"end":"start")),this.barCtx.isRangeBar&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels)h<p.getTextRects(v,parseFloat(c.style.fontSize)).width&&(v="");d.config.chart.stacked&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels&&(this.barCtx.isHorizontal?n.width/1.6>Math.abs(h)&&(v=""):n.height/1.6>Math.abs(l)&&(v=""));var k=e({},c);this.barCtx.isHorizontal&&s<0&&("start"===c.textAnchor?k.textAnchor="end":"end"===c.textAnchor&&(k.textAnchor="start")),u.plotDataLabelsText({x:i,y:a,text:v,i:r,j:o,parent:x,dataLabelsConfig:k,alwaysDrawDataLabel:!0,offsetCorrection:!0})}return x}}]),t}(),E=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.legendInactiveClass="legend-mouseover-inactive"}return r(t,[{key:"getAllSeriesEls",value:function(){return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series")}},{key:"getSeriesByName",value:function(t){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(x.escapeString(t),"']"))}},{key:"isSeriesHidden",value:function(t){var e=this.getSeriesByName(t),i=parseInt(e.getAttribute("data:realIndex"),10);return{isHidden:e.classList.contains("apexcharts-series-collapsed"),realIndex:i}}},{key:"addCollapsedClassToSeries",value:function(t,e){var i=this.w;function a(i){for(var a=0;a<i.length;a++)i[a].index===e&&t.node.classList.add("apexcharts-series-collapsed")}a(i.globals.collapsedSeries),a(i.globals.ancillaryCollapsedSeries)}},{key:"toggleSeries",value:function(t){var e=this.isSeriesHidden(t);return this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,e.isHidden),e.isHidden}},{key:"showSeries",value:function(t){var e=this.isSeriesHidden(t);e.isHidden&&this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,!0)}},{key:"hideSeries",value:function(t){var e=this.isSeriesHidden(t);e.isHidden||this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex,!1)}},{key:"resetSeries",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.w,s=x.clone(a.globals.initialSeries);a.globals.previousPaths=[],i?(a.globals.collapsedSeries=[],a.globals.ancillaryCollapsedSeries=[],a.globals.collapsedSeriesIndices=[],a.globals.ancillaryCollapsedSeriesIndices=[]):s=this.emptyCollapsedSeries(s),a.config.series=s,t&&(e&&(a.globals.zoomed=!1,this.ctx.updateHelpers.revertDefaultAxisMinMax()),this.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled))}},{key:"emptyCollapsedSeries",value:function(t){for(var e=this.w,i=0;i<t.length;i++)e.globals.collapsedSeriesIndices.indexOf(i)>-1&&(t[i].data=[]);return t}},{key:"toggleSeriesOnHover",value:function(t,e){var i=this.w;e||(e=t.target);var a=i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");if("mousemove"===t.type){var s=parseInt(e.getAttribute("rel"),10)-1,r=null,o=null;i.globals.axisCharts||"radialBar"===i.config.chart.type?i.globals.axisCharts?(r=i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(s,"']")),o=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(s,"']"))):r=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s+1,"']")):r=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s+1,"'] path"));for(var n=0;n<a.length;n++)a[n].classList.add(this.legendInactiveClass);null!==r&&(i.globals.axisCharts||r.parentNode.classList.remove(this.legendInactiveClass),r.classList.remove(this.legendInactiveClass),null!==o&&o.classList.remove(this.legendInactiveClass))}else if("mouseout"===t.type)for(var l=0;l<a.length;l++)a[l].classList.remove(this.legendInactiveClass)}},{key:"highlightRangeInSeries",value:function(t,e){var i=this,a=this.w,s=a.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"),r=function(t){for(var e=0;e<s.length;e++)s[e].classList[t](i.legendInactiveClass)};if("mousemove"===t.type){var o=parseInt(e.getAttribute("rel"),10)-1;r("add"),function(t){for(var e=0;e<s.length;e++){var a=parseInt(s[e].getAttribute("val"),10);a>=t.from&&a<=t.to&&s[e].classList.remove(i.legendInactiveClass)}}(a.config.plotOptions.heatmap.colorScale.ranges[o])}else"mouseout"===t.type&&r("remove")}},{key:"getActiveConfigSeriesIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc",i=this.w,a=0;if(i.config.series.length>1)for(var s=i.config.series.map((function(e,a){var s=!1;return t&&(s="bar"===i.config.series[a].type||"column"===i.config.series[a].type),e.data&&e.data.length>0&&!s?a:-1})),r="asc"===e?0:s.length-1;"asc"===e?r<s.length:r>=0;"asc"===e?r++:r--)if(-1!==s[r]){a=s[r];break}return a}},{key:"getPreviousPaths",value:function(){var t=this.w;function e(e,i,a){for(var s=e[i].childNodes,r={type:a,paths:[],realIndex:e[i].getAttribute("data:realIndex")},o=0;o<s.length;o++)if(s[o].hasAttribute("pathTo")){var n=s[o].getAttribute("pathTo");r.paths.push({d:n})}t.globals.previousPaths.push(r)}t.globals.previousPaths=[];["line","area","bar","rangebar","candlestick","radar"].forEach((function(i){for(var a,s=(a=i,t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(a,"-series .apexcharts-series"))),r=0;r<s.length;r++)e(s,r,i)})),this.handlePrevBubbleScatterPaths("bubble"),this.handlePrevBubbleScatterPaths("scatter");var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type," .apexcharts-series"));if(i.length>0)for(var a=function(e){for(var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type," .apexcharts-series[data\\:realIndex='").concat(e,"'] rect")),a=[],s=function(t){var e=function(e){return i[t].getAttribute(e)},s={x:parseFloat(e("x")),y:parseFloat(e("y")),width:parseFloat(e("width")),height:parseFloat(e("height"))};a.push({rect:s,color:i[t].getAttribute("color")})},r=0;r<i.length;r++)s(r);t.globals.previousPaths.push(a)},s=0;s<i.length;s++)a(s);t.globals.axisCharts||(t.globals.previousPaths=t.globals.series)}},{key:"handlePrevBubbleScatterPaths",value:function(t){var e=this.w,i=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t,"-series .apexcharts-series"));if(i.length>0)for(var a=0;a<i.length;a++){for(var s=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t,"-series .apexcharts-series[data\\:realIndex='").concat(a,"'] circle")),r=[],o=0;o<s.length;o++)r.push({x:s[o].getAttribute("cx"),y:s[o].getAttribute("cy"),r:s[o].getAttribute("r")});e.globals.previousPaths.push(r)}}},{key:"clearPreviousPaths",value:function(){var t=this.w;t.globals.previousPaths=[],t.globals.allSeriesCollapsed=!1}},{key:"handleNoData",value:function(){var t=this.w,e=t.config.noData,i=new m(this.ctx),a=t.globals.svgWidth/2,s=t.globals.svgHeight/2,r="middle";if(t.globals.noData=!0,t.globals.animationEnded=!0,"left"===e.align?(a=10,r="start"):"right"===e.align&&(a=t.globals.svgWidth-10,r="end"),"top"===e.verticalAlign?s=50:"bottom"===e.verticalAlign&&(s=t.globals.svgHeight-50),a+=e.offsetX,s=s+parseInt(e.style.fontSize,10)+2+e.offsetY,void 0!==e.text&&""!==e.text){var o=i.drawText({x:a,y:s,text:e.text,textAnchor:r,fontSize:e.style.fontSize,fontFamily:e.style.fontFamily,foreColor:e.style.color,opacity:1,class:"apexcharts-text-nodata"});t.globals.dom.Paper.add(o)}}},{key:"setNullSeriesToZeroValues",value:function(t){for(var e=this.w,i=0;i<t.length;i++)if(0===t[i].length)for(var a=0;a<t[e.globals.maxValsInArrayIndex].length;a++)t[i].push(0);return t}},{key:"hasAllSeriesEqualX",value:function(){for(var t=!0,e=this.w,i=this.filteredSeriesX(),a=0;a<i.length-1;a++)if(i[a][0]!==i[a+1][0]){t=!1;break}return e.globals.allSeriesHasEqualX=t,t}},{key:"filteredSeriesX",value:function(){var t=this.w.globals.seriesX.map((function(t){return t.length>0?t:[]}));return t}}]),t}(),Y=function(){function t(e){a(this,t),this.w=e.w,this.barCtx=e}return r(t,[{key:"initVariables",value:function(t){var e=this.w;this.barCtx.series=t,this.barCtx.totalItems=0,this.barCtx.seriesLen=0,this.barCtx.visibleI=-1,this.barCtx.visibleItems=1;for(var i=0;i<t.length;i++)if(t[i].length>0&&(this.barCtx.seriesLen=this.barCtx.seriesLen+1,this.barCtx.totalItems+=t[i].length),e.globals.isXNumeric)for(var a=0;a<t[i].length;a++)e.globals.seriesX[i][a]>e.globals.minX&&e.globals.seriesX[i][a]<e.globals.maxX&&this.barCtx.visibleItems++;else this.barCtx.visibleItems=e.globals.dataPoints;0===this.barCtx.seriesLen&&(this.barCtx.seriesLen=1),this.barCtx.zeroSerieses=[],this.barCtx.radiusOnSeriesNumber=t.length-1,e.globals.comboCharts||this.checkZeroSeries({series:t})}},{key:"initialPositions",value:function(){var t,e,i,a,s,r,o,n,l=this.w,h=l.globals.dataPoints;this.barCtx.isRangeBar&&(h=l.globals.labels.length);var c=this.barCtx.seriesLen;if(l.config.plotOptions.bar.rangeBarGroupRows&&(c=1),this.barCtx.isHorizontal)s=(i=l.globals.gridHeight/h)/c,l.globals.isXNumeric&&(s=(i=l.globals.gridHeight/this.barCtx.totalItems)/this.barCtx.seriesLen),s=s*parseInt(this.barCtx.barOptions.barHeight,10)/100,n=this.barCtx.baseLineInvertedY+l.globals.padHorizontal+(this.barCtx.isReversed?l.globals.gridWidth:0)-(this.barCtx.isReversed?2*this.barCtx.baseLineInvertedY:0),e=(i-s*this.barCtx.seriesLen)/2;else{if(a=l.globals.gridWidth/this.barCtx.visibleItems,l.config.xaxis.convertedCatToNumeric&&(a=l.globals.gridWidth/l.globals.dataPoints),r=a/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100,l.globals.isXNumeric){var d=this.barCtx.xRatio;l.config.xaxis.convertedCatToNumeric&&(d=this.barCtx.initialXRatio),l.globals.minXDiff&&.5!==l.globals.minXDiff&&l.globals.minXDiff/d>0&&(a=l.globals.minXDiff/d),(r=a/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100)<1&&(r=1)}o=l.globals.gridHeight-this.barCtx.baseLineY[this.barCtx.yaxisIndex]-(this.barCtx.isReversed?l.globals.gridHeight:0)+(this.barCtx.isReversed?2*this.barCtx.baseLineY[this.barCtx.yaxisIndex]:0),t=l.globals.padHorizontal+(a-r*this.barCtx.seriesLen)/2}return{x:t,y:e,yDivision:i,xDivision:a,barHeight:s,barWidth:r,zeroH:o,zeroW:n}}},{key:"getPathFillColor",value:function(t,e,i,a){var s=this.w,r=new M(this.barCtx.ctx),o=null,n=this.barCtx.barOptions.distributed?i:e;this.barCtx.barOptions.colors.ranges.length>0&&this.barCtx.barOptions.colors.ranges.map((function(a){t[e][i]>=a.from&&t[e][i]<=a.to&&(o=a.color)}));return s.config.series[e].data[i]&&s.config.series[e].data[i].fillColor&&(o=s.config.series[e].data[i].fillColor),r.fillPath({seriesNumber:this.barCtx.barOptions.distributed?n:a,dataPointIndex:i,color:o,value:t[e][i]})}},{key:"getStrokeWidth",value:function(t,e,i){var a=0,s=this.w;return void 0===this.barCtx.series[t][e]||null===this.barCtx.series[t][e]?this.barCtx.isNullValue=!0:this.barCtx.isNullValue=!1,s.config.stroke.show&&(this.barCtx.isNullValue||(a=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[i]:this.barCtx.strokeWidth)),a}},{key:"barBackground",value:function(t){var e=t.j,i=t.i,a=t.x1,s=t.x2,r=t.y1,o=t.y2,n=t.elSeries,l=this.w,h=new m(this.barCtx.ctx),c=new E(this.barCtx.ctx).getActiveConfigSeriesIndex();if(this.barCtx.barOptions.colors.backgroundBarColors.length>0&&c===i){e>=this.barCtx.barOptions.colors.backgroundBarColors.length&&(e%=this.barCtx.barOptions.colors.backgroundBarColors.length);var d=this.barCtx.barOptions.colors.backgroundBarColors[e],g=h.drawRect(void 0!==a?a:0,void 0!==r?r:0,void 0!==s?s:l.globals.gridWidth,void 0!==o?o:l.globals.gridHeight,this.barCtx.barOptions.colors.backgroundBarRadius,d,this.barCtx.barOptions.colors.backgroundBarOpacity);n.add(g),g.node.classList.add("apexcharts-backgroundBar")}}},{key:"getColumnPaths",value:function(t){var e=t.barWidth,i=t.barXPosition,a=t.yRatio,s=t.y1,r=t.y2,o=t.strokeWidth,n=t.series,l=t.realIndex,h=t.i,c=t.j,d=t.w,g=new m(this.barCtx.ctx);(o=Array.isArray(o)?o[l]:o)||(o=0);var u={barWidth:e,strokeWidth:o,yRatio:a,barXPosition:i,y1:s,y2:r},p=this.getRoundedBars(d,u,n,h,c),f=i,x=i+e,b=g.move(f,s),v=g.move(f,s),y=g.line(x-o,s);return d.globals.previousPaths.length>0&&(v=this.barCtx.getPreviousPath(l,c,!1)),b=b+g.line(f,p.y2)+p.pathWithRadius+g.line(x-o,p.y2)+y+y+"z",v=v+g.line(f,s)+y+y+y+y+y+g.line(f,s),d.config.chart.stacked&&(this.barCtx.yArrj.push(p.y2WithRadius),this.barCtx.yArrjF.push(Math.abs(s-p.y2WithRadius)),this.barCtx.yArrjVal.push(this.barCtx.series[h][c])),{pathTo:b,pathFrom:v}}},{key:"getBarpaths",value:function(t){var e=t.barYPosition,i=t.barHeight,a=t.x1,s=t.x2,r=t.strokeWidth,o=t.series,n=t.realIndex,l=t.i,h=t.j,c=t.w,d=new m(this.barCtx.ctx);(r=Array.isArray(r)?r[n]:r)||(r=0);var g={barHeight:i,strokeWidth:r,barYPosition:e,x2:s,x1:a},u=this.getRoundedBars(c,g,o,l,h),p=d.move(a,e),f=d.move(a,e);c.globals.previousPaths.length>0&&(f=this.barCtx.getPreviousPath(n,h,!1));var x=e,b=e+i,v=d.line(a,b-r);return p=p+d.line(u.x2,x)+u.pathWithRadius+d.line(u.x2,b-r)+v+v+"z",f=f+d.line(a,x)+v+v+v+v+v+d.line(a,x),c.config.chart.stacked&&(this.barCtx.xArrj.push(u.x2WithRadius),this.barCtx.xArrjF.push(Math.abs(a-u.x2WithRadius)),this.barCtx.xArrjVal.push(this.barCtx.series[l][h])),{pathTo:p,pathFrom:f}}},{key:"getRoundedBars",value:function(t,e,i,a,s){var r=new m(this.barCtx.ctx),o=0,n=t.config.plotOptions.bar.borderRadius,l=Array.isArray(n);l?o=n[a>n.length-1?n.length-1:a]:o=n;if(t.config.chart.stacked&&i.length>1&&a!==this.barCtx.radiusOnSeriesNumber&&!l&&(o=0),this.barCtx.isHorizontal){var h="",c=e.x2;if(Math.abs(e.x1-e.x2)<o&&(o=Math.abs(e.x1-e.x2)),void 0!==i[a][s]||null!==i[a][s]){var d=this.barCtx.isReversed?i[a][s]>0:i[a][s]<0;d&&(o*=-1),c-=o,h=r.quadraticCurve(c+o,e.barYPosition,c+o,e.barYPosition+(d?-1*o:o))+r.line(c+o,e.barYPosition+e.barHeight-e.strokeWidth-(d?-1*o:o))+r.quadraticCurve(c+o,e.barYPosition+e.barHeight-e.strokeWidth,c,e.barYPosition+e.barHeight-e.strokeWidth)}return{pathWithRadius:h,x2WithRadius:c+o,x2:c}}var g="",u=e.y2;if(Math.abs(e.y1-e.y2)<o&&(o=Math.abs(e.y1-e.y2)),void 0!==i[a][s]||null!==i[a][s]){var p=i[a][s]<0;p&&(o*=-1),u+=o,g=r.quadraticCurve(e.barXPosition,u-o,e.barXPosition+(p?-1*o:o),u-o)+r.line(e.barXPosition+e.barWidth-e.strokeWidth-(p?-1*o:o),u-o)+r.quadraticCurve(e.barXPosition+e.barWidth-e.strokeWidth,u-o,e.barXPosition+e.barWidth-e.strokeWidth,u)}return{pathWithRadius:g,y2WithRadius:u-o,y2:u}}},{key:"checkZeroSeries",value:function(t){for(var e=t.series,i=this.w,a=0;a<e.length;a++){for(var s=0,r=0;r<e[i.globals.maxValsInArrayIndex].length;r++)s+=e[a][r];0===s&&this.barCtx.zeroSerieses.push(a)}for(var o=e.length-1;o>=0;o--)this.barCtx.zeroSerieses.indexOf(o)>-1&&o===this.radiusOnSeriesNumber&&(this.barCtx.radiusOnSeriesNumber-=1);for(var n=e.length-1;n>=0;n--)i.globals.collapsedSeriesIndices.indexOf(this.barCtx.radiusOnSeriesNumber)>-1&&(this.barCtx.radiusOnSeriesNumber-=1)}},{key:"getXForValue",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=i?e:null;return null!=t&&(a=e+t/this.barCtx.invertedYRatio-2*(this.barCtx.isReversed?t/this.barCtx.invertedYRatio:0)),a}},{key:"getYForValue",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=i?e:null;return null!=t&&(a=e-t/this.barCtx.yRatio[this.barCtx.yaxisIndex]+2*(this.barCtx.isReversed?t/this.barCtx.yRatio[this.barCtx.yaxisIndex]:0)),a}},{key:"getGoalValues",value:function(t,e,i,a,s){var r=this,n=this.w,l=[];return n.globals.seriesGoals[a]&&n.globals.seriesGoals[a][s]&&Array.isArray(n.globals.seriesGoals[a][s])&&n.globals.seriesGoals[a][s].forEach((function(a){var s;l.push((o(s={},t,"x"===t?r.getXForValue(a.value,e,!1):r.getYForValue(a.value,i,!1)),o(s,"attrs",a),s))})),l}},{key:"drawGoalLine",value:function(t){var e=t.barXPosition,i=t.barYPosition,a=t.goalX,s=t.goalY,r=t.barWidth,o=t.barHeight,n=new m(this.barCtx.ctx),l=n.group({className:"apexcharts-bar-goals-groups"}),h=null;return this.barCtx.isHorizontal?Array.isArray(a)&&a.forEach((function(t){var e=void 0!==t.attrs.strokeHeight?t.attrs.strokeHeight:o/2,a=i+e+o/2;h=n.drawLine(t.x,a-2*e,t.x,a,t.attrs.strokeColor?t.attrs.strokeColor:void 0,t.attrs.strokeDashArray,t.attrs.strokeWidth?t.attrs.strokeWidth:2,t.attrs.strokeLineCap),l.add(h)})):Array.isArray(s)&&s.forEach((function(t){var i=void 0!==t.attrs.strokeWidth?t.attrs.strokeWidth:r/2,a=e+i+r/2;h=n.drawLine(a-2*i,t.y,a,t.y,t.attrs.strokeColor?t.attrs.strokeColor:void 0,t.attrs.strokeDashArray,t.attrs.strokeHeight?t.attrs.strokeHeight:2,t.attrs.strokeLineCap),l.add(h)})),l}}]),t}(),F=function(){function t(e,i){a(this,t),this.ctx=e,this.w=e.w;var s=this.w;this.barOptions=s.config.plotOptions.bar,this.isHorizontal=this.barOptions.horizontal,this.strokeWidth=s.config.stroke.width,this.isNullValue=!1,this.isRangeBar=s.globals.seriesRangeBar.length&&this.isHorizontal,this.xyRatios=i,null!==this.xyRatios&&(this.xRatio=i.xRatio,this.initialXRatio=i.initialXRatio,this.yRatio=i.yRatio,this.invertedXRatio=i.invertedXRatio,this.invertedYRatio=i.invertedYRatio,this.baseLineY=i.baseLineY,this.baseLineInvertedY=i.baseLineInvertedY),this.yaxisIndex=0,this.seriesLen=0,this.barHelpers=new Y(this)}return r(t,[{key:"draw",value:function(t,i){var a=this.w,s=new m(this.ctx),r=new y(this.ctx,a);t=r.getLogSeries(t),this.series=t,this.yRatio=r.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t);var o=s.group({class:"apexcharts-bar-series apexcharts-plot-series"});a.config.dataLabels.enabled&&this.totalItems>this.barOptions.dataLabels.maxItems&&console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");for(var n=0,l=0;n<t.length;n++,l++){var h,c,d,g,u=void 0,p=void 0,f=[],b=[],v=a.globals.comboCharts?i[n]:n,w=s.group({class:"apexcharts-series",rel:n+1,seriesName:x.escapeString(a.globals.seriesNames[v]),"data:realIndex":v});this.ctx.series.addCollapsedClassToSeries(w,v),t[n].length>0&&(this.visibleI=this.visibleI+1);var k=0,A=0;this.yRatio.length>1&&(this.yaxisIndex=v),this.isReversed=a.config.yaxis[this.yaxisIndex]&&a.config.yaxis[this.yaxisIndex].reversed;var S=this.barHelpers.initialPositions();p=S.y,k=S.barHeight,c=S.yDivision,g=S.zeroW,u=S.x,A=S.barWidth,h=S.xDivision,d=S.zeroH,this.horizontal||b.push(u+A/2);for(var C=s.group({class:"apexcharts-datalabels","data:realIndex":v}),L=s.group({class:"apexcharts-bar-goals-markers",style:"pointer-events: none"}),P=0;P<a.globals.dataPoints;P++){var M=this.barHelpers.getStrokeWidth(n,P,v),T=null,I={indexes:{i:n,j:P,realIndex:v,bc:l},x:u,y:p,strokeWidth:M,elSeries:w};this.isHorizontal?(T=this.drawBarPaths(e(e({},I),{},{barHeight:k,zeroW:g,yDivision:c})),A=this.series[n][P]/this.invertedYRatio):(T=this.drawColumnPaths(e(e({},I),{},{xDivision:h,barWidth:A,zeroH:d})),k=this.series[n][P]/this.yRatio[this.yaxisIndex]);var z=this.barHelpers.drawGoalLine({barXPosition:T.barXPosition,barYPosition:T.barYPosition,goalX:T.goalX,goalY:T.goalY,barHeight:k,barWidth:A});z&&L.add(z),p=T.y,u=T.x,P>0&&b.push(u+A/2),f.push(p);var X=this.barHelpers.getPathFillColor(t,n,P,v);this.renderSeries({realIndex:v,pathFill:X,j:P,i:n,pathFrom:T.pathFrom,pathTo:T.pathTo,strokeWidth:M,elSeries:w,x:u,y:p,series:t,barHeight:k,barWidth:A,elDataLabelsWrap:C,elGoalsMarkers:L,visibleSeries:this.visibleI,type:"bar"})}a.globals.seriesXvalues[v]=b,a.globals.seriesYvalues[v]=f,o.add(w)}return o}},{key:"renderSeries",value:function(t){var e=t.realIndex,i=t.pathFill,a=t.lineFill,s=t.j,r=t.i,o=t.pathFrom,n=t.pathTo,l=t.strokeWidth,h=t.elSeries,c=t.x,d=t.y,g=t.y1,u=t.y2,p=t.series,f=t.barHeight,x=t.barWidth,b=t.barYPosition,y=t.elDataLabelsWrap,w=t.elGoalsMarkers,k=t.visibleSeries,A=t.type,S=this.w,C=new m(this.ctx);a||(a=this.barOptions.distributed?S.globals.stroke.colors[s]:S.globals.stroke.colors[e]),S.config.series[r].data[s]&&S.config.series[r].data[s].strokeColor&&(a=S.config.series[r].data[s].strokeColor),this.isNullValue&&(i="none");var L=s/S.config.chart.animations.animateGradually.delay*(S.config.chart.animations.speed/S.globals.dataPoints)/2.4,P=C.renderPaths({i:r,j:s,realIndex:e,pathFrom:o,pathTo:n,stroke:a,strokeWidth:l,strokeLineCap:S.config.stroke.lineCap,fill:i,animationDelay:L,initialSpeed:S.config.chart.animations.speed,dataChangeSpeed:S.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(A,"-area")});P.attr("clip-path","url(#gridRectMask".concat(S.globals.cuid,")"));var M=S.config.forecastDataPoints;M.count>0&&s>=S.globals.dataPoints-M.count&&(P.node.setAttribute("stroke-dasharray",M.dashArray),P.node.setAttribute("stroke-width",M.strokeWidth),P.node.setAttribute("fill-opacity",M.fillOpacity)),void 0!==g&&void 0!==u&&(P.attr("data-range-y1",g),P.attr("data-range-y2",u)),new v(this.ctx).setSelectionFilter(P,e,s),h.add(P);var T=new X(this).handleBarDataLabels({x:c,y:d,y1:g,y2:u,i:r,j:s,series:p,realIndex:e,barHeight:f,barWidth:x,barYPosition:b,renderedPath:P,visibleSeries:k});return null!==T&&y.add(T),h.add(y),w&&h.add(w),h}},{key:"drawBarPaths",value:function(t){var e=t.indexes,i=t.barHeight,a=t.strokeWidth,s=t.zeroW,r=t.x,o=t.y,n=t.yDivision,l=t.elSeries,h=this.w,c=e.i,d=e.j;h.globals.isXNumeric&&(o=(h.globals.seriesX[c][d]-h.globals.minX)/this.invertedXRatio-i);var g=o+i*this.visibleI;r=this.barHelpers.getXForValue(this.series[c][d],s);var u=this.barHelpers.getBarpaths({barYPosition:g,barHeight:i,x1:s,x2:r,strokeWidth:a,series:this.series,realIndex:e.realIndex,i:c,j:d,w:h});return h.globals.isXNumeric||(o+=n),this.barHelpers.barBackground({j:d,i:c,y1:g-i*this.visibleI,y2:i*this.seriesLen,elSeries:l}),{pathTo:u.pathTo,pathFrom:u.pathFrom,x:r,y:o,goalX:this.barHelpers.getGoalValues("x",s,null,c,d),barYPosition:g}}},{key:"drawColumnPaths",value:function(t){var e=t.indexes,i=t.x,a=t.y,s=t.xDivision,r=t.barWidth,o=t.zeroH,n=t.strokeWidth,l=t.elSeries,h=this.w,c=e.realIndex,d=e.i,g=e.j,u=e.bc;if(h.globals.isXNumeric){var p=c;h.globals.seriesX[c].length||(p=h.globals.maxValsInArrayIndex),i=(h.globals.seriesX[p][g]-h.globals.minX)/this.xRatio-r*this.seriesLen/2}var f=i+r*this.visibleI;a=this.barHelpers.getYForValue(this.series[d][g],o);var x=this.barHelpers.getColumnPaths({barXPosition:f,barWidth:r,y1:o,y2:a,strokeWidth:n,series:this.series,realIndex:e.realIndex,i:d,j:g,w:h});return h.globals.isXNumeric||(i+=s),this.barHelpers.barBackground({bc:u,j:g,i:d,x1:f-n/2-r*this.visibleI,x2:r*this.seriesLen+n/2,elSeries:l}),{pathTo:x.pathTo,pathFrom:x.pathFrom,x:i,y:a,goalY:this.barHelpers.getGoalValues("y",null,o,d,g),barXPosition:f}}},{key:"getPreviousPath",value:function(t,e){for(var i,a=this.w,s=0;s<a.globals.previousPaths.length;s++){var r=a.globals.previousPaths[s];r.paths&&r.paths.length>0&&parseInt(r.realIndex,10)===parseInt(t,10)&&void 0!==a.globals.previousPaths[s].paths[e]&&(i=a.globals.previousPaths[s].paths[e].d)}return i}}]),t}(),R=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.months31=[1,3,5,7,8,10,12],this.months30=[2,4,6,9,11],this.daysCntOfYear=[0,31,59,90,120,151,181,212,243,273,304,334]}return r(t,[{key:"isValidDate",value:function(t){return!isNaN(this.parseDate(t))}},{key:"getTimeStamp",value:function(t){return Date.parse(t)?this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(t).toISOString().substr(0,25)).getTime():new Date(t).getTime():t}},{key:"getDate",value:function(t){return this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(t).toUTCString()):new Date(t)}},{key:"parseDate",value:function(t){var e=Date.parse(t);if(!isNaN(e))return this.getTimeStamp(t);var i=Date.parse(t.replace(/-/g,"/").replace(/[a-z]+/gi," "));return i=this.getTimeStamp(i)}},{key:"parseDateWithTimezone",value:function(t){return Date.parse(t.replace(/-/g,"/").replace(/[a-z]+/gi," "))}},{key:"formatDate",value:function(t,e){var i=this.w.globals.locale,a=this.w.config.xaxis.labels.datetimeUTC,s=["\0"].concat(u(i.months)),r=["\x01"].concat(u(i.shortMonths)),o=["\x02"].concat(u(i.days)),n=["\x03"].concat(u(i.shortDays));function l(t,e){var i=t+"";for(e=e||2;i.length<e;)i="0"+i;return i}var h=a?t.getUTCFullYear():t.getFullYear();e=(e=(e=e.replace(/(^|[^\\])yyyy+/g,"$1"+h)).replace(/(^|[^\\])yy/g,"$1"+h.toString().substr(2,2))).replace(/(^|[^\\])y/g,"$1"+h);var c=(a?t.getUTCMonth():t.getMonth())+1;e=(e=(e=(e=e.replace(/(^|[^\\])MMMM+/g,"$1"+s[0])).replace(/(^|[^\\])MMM/g,"$1"+r[0])).replace(/(^|[^\\])MM/g,"$1"+l(c))).replace(/(^|[^\\])M/g,"$1"+c);var d=a?t.getUTCDate():t.getDate();e=(e=(e=(e=e.replace(/(^|[^\\])dddd+/g,"$1"+o[0])).replace(/(^|[^\\])ddd/g,"$1"+n[0])).replace(/(^|[^\\])dd/g,"$1"+l(d))).replace(/(^|[^\\])d/g,"$1"+d);var g=a?t.getUTCHours():t.getHours(),p=g>12?g-12:0===g?12:g;e=(e=(e=(e=e.replace(/(^|[^\\])HH+/g,"$1"+l(g))).replace(/(^|[^\\])H/g,"$1"+g)).replace(/(^|[^\\])hh+/g,"$1"+l(p))).replace(/(^|[^\\])h/g,"$1"+p);var f=a?t.getUTCMinutes():t.getMinutes();e=(e=e.replace(/(^|[^\\])mm+/g,"$1"+l(f))).replace(/(^|[^\\])m/g,"$1"+f);var x=a?t.getUTCSeconds():t.getSeconds();e=(e=e.replace(/(^|[^\\])ss+/g,"$1"+l(x))).replace(/(^|[^\\])s/g,"$1"+x);var b=a?t.getUTCMilliseconds():t.getMilliseconds();e=e.replace(/(^|[^\\])fff+/g,"$1"+l(b,3)),b=Math.round(b/10),e=e.replace(/(^|[^\\])ff/g,"$1"+l(b)),b=Math.round(b/10);var v=g<12?"AM":"PM";e=(e=(e=e.replace(/(^|[^\\])f/g,"$1"+b)).replace(/(^|[^\\])TT+/g,"$1"+v)).replace(/(^|[^\\])T/g,"$1"+v.charAt(0));var m=v.toLowerCase();e=(e=e.replace(/(^|[^\\])tt+/g,"$1"+m)).replace(/(^|[^\\])t/g,"$1"+m.charAt(0));var y=-t.getTimezoneOffset(),w=a||!y?"Z":y>0?"+":"-";if(!a){var k=(y=Math.abs(y))%60;w+=l(Math.floor(y/60))+":"+l(k)}e=e.replace(/(^|[^\\])K/g,"$1"+w);var A=(a?t.getUTCDay():t.getDay())+1;return e=(e=(e=(e=(e=e.replace(new RegExp(o[0],"g"),o[A])).replace(new RegExp(n[0],"g"),n[A])).replace(new RegExp(s[0],"g"),s[c])).replace(new RegExp(r[0],"g"),r[c])).replace(/\\(.)/g,"$1")}},{key:"getTimeUnitsfromTimestamp",value:function(t,e,i){var a=this.w;void 0!==a.config.xaxis.min&&(t=a.config.xaxis.min),void 0!==a.config.xaxis.max&&(e=a.config.xaxis.max);var s=this.getDate(t),r=this.getDate(e),o=this.formatDate(s,"yyyy MM dd HH mm ss fff").split(" "),n=this.formatDate(r,"yyyy MM dd HH mm ss fff").split(" ");return{minMillisecond:parseInt(o[6],10),maxMillisecond:parseInt(n[6],10),minSecond:parseInt(o[5],10),maxSecond:parseInt(n[5],10),minMinute:parseInt(o[4],10),maxMinute:parseInt(n[4],10),minHour:parseInt(o[3],10),maxHour:parseInt(n[3],10),minDate:parseInt(o[2],10),maxDate:parseInt(n[2],10),minMonth:parseInt(o[1],10)-1,maxMonth:parseInt(n[1],10)-1,minYear:parseInt(o[0],10),maxYear:parseInt(n[0],10)}}},{key:"isLeapYear",value:function(t){return t%4==0&&t%100!=0||t%400==0}},{key:"calculcateLastDaysOfMonth",value:function(t,e,i){return this.determineDaysOfMonths(t,e)-i}},{key:"determineDaysOfYear",value:function(t){var e=365;return this.isLeapYear(t)&&(e=366),e}},{key:"determineRemainingDaysOfYear",value:function(t,e,i){var a=this.daysCntOfYear[e]+i;return e>1&&this.isLeapYear()&&a++,a}},{key:"determineDaysOfMonths",value:function(t,e){var i=30;switch(t=x.monthMod(t),!0){case this.months30.indexOf(t)>-1:2===t&&(i=this.isLeapYear(e)?29:28);break;case this.months31.indexOf(t)>-1:default:i=31}return i}}]),t}(),H=function(t){n(s,F);var i=d(s);function s(){return a(this,s),i.apply(this,arguments)}return r(s,[{key:"draw",value:function(t,i){var a=this.w,s=new m(this.ctx);this.rangeBarOptions=this.w.config.plotOptions.rangeBar,this.series=t,this.seriesRangeStart=a.globals.seriesRangeStart,this.seriesRangeEnd=a.globals.seriesRangeEnd,this.barHelpers.initVariables(t);for(var r=s.group({class:"apexcharts-rangebar-series apexcharts-plot-series"}),o=0;o<t.length;o++){var n,l,h,c=void 0,d=void 0,g=void 0,u=a.globals.comboCharts?i[o]:o,p=s.group({class:"apexcharts-series",seriesName:x.escapeString(a.globals.seriesNames[u]),rel:o+1,"data:realIndex":u});this.ctx.series.addCollapsedClassToSeries(p,u),t[o].length>0&&(this.visibleI=this.visibleI+1);var f=0,b=0;this.yRatio.length>1&&(this.yaxisIndex=u);var v=this.barHelpers.initialPositions();d=v.y,h=v.zeroW,c=v.x,b=v.barWidth,n=v.xDivision,l=v.zeroH;for(var y=s.group({class:"apexcharts-datalabels","data:realIndex":u}),w=s.group({class:"apexcharts-rangebar-goals-markers",style:"pointer-events: none"}),k=0;k<a.globals.dataPoints;k++){var A=this.barHelpers.getStrokeWidth(o,k,u),S=this.seriesRangeStart[o][k],C=this.seriesRangeEnd[o][k],L=null,P=null,M={x:c,y:d,strokeWidth:A,elSeries:p};if(g=v.yDivision,f=v.barHeight,this.isHorizontal){P=d+f*this.visibleI;var T=this.seriesLen;a.config.plotOptions.bar.rangeBarGroupRows&&(T=1);var I=(g-f*T)/2;if(void 0===a.config.series[o].data[k])break;if(a.config.series[o].data[k].x){var z=this.detectOverlappingBars({i:o,j:k,barYPosition:P,srty:I,barHeight:f,yDivision:g,initPositions:v});f=z.barHeight,P=z.barYPosition}b=(L=this.drawRangeBarPaths(e({indexes:{i:o,j:k,realIndex:u},barHeight:f,barYPosition:P,zeroW:h,yDivision:g,y1:S,y2:C},M))).barWidth}else f=(L=this.drawRangeColumnPaths(e({indexes:{i:o,j:k,realIndex:u},zeroH:l,barWidth:b,xDivision:n},M))).barHeight;var X=this.barHelpers.drawGoalLine({barXPosition:L.barXPosition,barYPosition:P,goalX:L.goalX,goalY:L.goalY,barHeight:f,barWidth:b});X&&w.add(X),d=L.y,c=L.x;var E=this.barHelpers.getPathFillColor(t,o,k,u),Y=a.globals.stroke.colors[u];this.renderSeries({realIndex:u,pathFill:E,lineFill:Y,j:k,i:o,x:c,y:d,y1:S,y2:C,pathFrom:L.pathFrom,pathTo:L.pathTo,strokeWidth:A,elSeries:p,series:t,barHeight:f,barYPosition:P,barWidth:b,elDataLabelsWrap:y,elGoalsMarkers:w,visibleSeries:this.visibleI,type:"rangebar"})}r.add(p)}return r}},{key:"detectOverlappingBars",value:function(t){var e=t.i,i=t.j,a=t.barYPosition,s=t.srty,r=t.barHeight,o=t.yDivision,n=t.initPositions,l=this.w,h=[],c=l.config.series[e].data[i].rangeName,d=l.config.series[e].data[i].x,g=l.globals.labels.indexOf(d),u=l.globals.seriesRangeBar[e].findIndex((function(t){return t.x===d&&t.overlaps.length>0}));return a=l.config.plotOptions.bar.rangeBarGroupRows?s+o*g:s+r*this.visibleI+o*g,u>-1&&!l.config.plotOptions.bar.rangeBarOverlap&&(h=l.globals.seriesRangeBar[e][u].overlaps).indexOf(c)>-1&&(a=(r=n.barHeight/h.length)*this.visibleI+o*(100-parseInt(this.barOptions.barHeight,10))/100/2+r*(this.visibleI+h.indexOf(c))+o*g),{barYPosition:a,barHeight:r}}},{key:"drawRangeColumnPaths",value:function(t){var e=t.indexes,i=t.x;t.strokeWidth;var a=t.xDivision,s=t.barWidth,r=t.zeroH,o=this.w,n=e.i,l=e.j,h=this.yRatio[this.yaxisIndex],c=e.realIndex,d=this.getRangeValue(c,l),g=Math.min(d.start,d.end),u=Math.max(d.start,d.end);o.globals.isXNumeric&&(i=(o.globals.seriesX[n][l]-o.globals.minX)/this.xRatio-s/2);var p=i+s*this.visibleI;void 0===this.series[n][l]||null===this.series[n][l]?g=r:(g=r-g/h,u=r-u/h);var f=Math.abs(u-g),x=this.barHelpers.getColumnPaths({barXPosition:p,barWidth:s,y1:g,y2:u,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,realIndex:e.realIndex,i:c,j:l,w:o});return o.globals.isXNumeric||(i+=a),{pathTo:x.pathTo,pathFrom:x.pathFrom,barHeight:f,x:i,y:u,goalY:this.barHelpers.getGoalValues("y",null,r,n,l),barXPosition:p}}},{key:"drawRangeBarPaths",value:function(t){var e=t.indexes,i=t.y,a=t.y1,s=t.y2,r=t.yDivision,o=t.barHeight,n=t.barYPosition,l=t.zeroW,h=this.w,c=l+a/this.invertedYRatio,d=l+s/this.invertedYRatio,g=Math.abs(d-c),u=this.barHelpers.getBarpaths({barYPosition:n,barHeight:o,x1:c,x2:d,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,i:e.realIndex,realIndex:e.realIndex,j:e.j,w:h});return h.globals.isXNumeric||(i+=r),{pathTo:u.pathTo,pathFrom:u.pathFrom,barWidth:g,x:d,goalX:this.barHelpers.getGoalValues("x",l,null,e.realIndex,e.j),y:i}}},{key:"getRangeValue",value:function(t,e){var i=this.w;return{start:i.globals.seriesRangeStart[t][e],end:i.globals.seriesRangeEnd[t][e]}}},{key:"getTooltipValues",value:function(t){var e=t.ctx,i=t.seriesIndex,a=t.dataPointIndex,s=t.y1,r=t.y2,o=t.w,n=o.globals.seriesRangeStart[i][a],l=o.globals.seriesRangeEnd[i][a],h=o.globals.labels[a],c=o.config.series[i].name?o.config.series[i].name:"",d=o.config.tooltip.y.formatter,g=o.config.tooltip.y.title.formatter,u={w:o,seriesIndex:i,dataPointIndex:a,start:n,end:l};"function"==typeof g&&(c=g(c,u)),Number.isFinite(s)&&Number.isFinite(r)&&(n=s,l=r,o.config.series[i].data[a].x&&(h=o.config.series[i].data[a].x+":"),"function"==typeof d&&(h=d(h,u)));var p="",f="",x=o.globals.colors[i];if(void 0===o.config.tooltip.x.formatter)if("datetime"===o.config.xaxis.type){var b=new R(e);p=b.formatDate(b.getDate(n),o.config.tooltip.x.format),f=b.formatDate(b.getDate(l),o.config.tooltip.x.format)}else p=n,f=l;else p=o.config.tooltip.x.formatter(n),f=o.config.tooltip.x.formatter(l);return{start:n,end:l,startVal:p,endVal:f,ylabel:h,color:x,seriesName:c}}},{key:"buildCustomTooltipHTML",value:function(t){var e=t.color,i=t.seriesName;return'<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: '+e+'">'+(i||"")+'</span></div><div> <span class="category">'+t.ylabel+' </span> <span class="value start-value">'+t.start+'</span> <span class="separator">-</span> <span class="value end-value">'+t.end+"</span></div></div>"}}]),s}(),D=function(){function t(e){a(this,t),this.opts=e}return r(t,[{key:"line",value:function(){return{chart:{animations:{easing:"swing"}},dataLabels:{enabled:!1},stroke:{width:5,curve:"straight"},markers:{size:0,hover:{sizeOffset:6}},xaxis:{crosshairs:{width:1}}}}},{key:"sparkline",value:function(t){this.opts.yaxis[0].show=!1,this.opts.yaxis[0].title.text="",this.opts.yaxis[0].axisBorder.show=!1,this.opts.yaxis[0].axisTicks.show=!1,this.opts.yaxis[0].floating=!0;return x.extend(t,{grid:{show:!1,padding:{left:0,right:0,top:0,bottom:0}},legend:{show:!1},xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}},chart:{toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1}})}},{key:"bar",value:function(){return{chart:{stacked:!1,animations:{easing:"swing"}},plotOptions:{bar:{dataLabels:{position:"center"}}},dataLabels:{style:{colors:["#fff"]},background:{enabled:!1}},stroke:{width:0,lineCap:"round"},fill:{opacity:.85},legend:{markers:{shape:"square",radius:2,size:8}},tooltip:{shared:!1,intersect:!0},xaxis:{tooltip:{enabled:!1},tickPlacement:"between",crosshairs:{width:"barWidth",position:"back",fill:{type:"gradient"},dropShadow:{enabled:!1},stroke:{width:0}}}}}},{key:"candlestick",value:function(){var t=this;return{stroke:{width:1,colors:["#333"]},fill:{opacity:1},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(e){var i=e.seriesIndex,a=e.dataPointIndex,s=e.w;return t._getBoxTooltip(s,i,a,["Open","High","","Low","Close"],"candlestick")}},states:{active:{filter:{type:"none"}}},xaxis:{crosshairs:{width:1}}}}},{key:"boxPlot",value:function(){var t=this;return{chart:{animations:{dynamicAnimation:{enabled:!1}}},stroke:{width:1,colors:["#24292e"]},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(e){var i=e.seriesIndex,a=e.dataPointIndex,s=e.w;return t._getBoxTooltip(s,i,a,["Minimum","Q1","Median","Q3","Maximum"],"boxPlot")}},markers:{size:5,strokeWidth:1,strokeColors:"#111"},xaxis:{crosshairs:{width:1}}}}},{key:"rangeBar",value:function(){return{stroke:{width:0,lineCap:"square"},plotOptions:{bar:{borderRadius:0,dataLabels:{position:"center"}}},dataLabels:{enabled:!1,formatter:function(t,e){e.ctx;var i=e.seriesIndex,a=e.dataPointIndex,s=e.w,r=s.globals.seriesRangeStart[i][a];return s.globals.seriesRangeEnd[i][a]-r},background:{enabled:!1},style:{colors:["#fff"]}},tooltip:{shared:!1,followCursor:!0,custom:function(t){return t.w.config.plotOptions&&t.w.config.plotOptions.bar&&t.w.config.plotOptions.bar.horizontal?function(t){var e=new H(t.ctx,null),i=e.getTooltipValues(t),a=i.color,s=i.seriesName,r=i.ylabel,o=i.startVal,n=i.endVal;return e.buildCustomTooltipHTML({color:a,seriesName:s,ylabel:r,start:o,end:n})}(t):function(t){var e=new H(t.ctx,null),i=e.getTooltipValues(t),a=i.color,s=i.seriesName,r=i.ylabel,o=i.start,n=i.end;return e.buildCustomTooltipHTML({color:a,seriesName:s,ylabel:r,start:o,end:n})}(t)}},xaxis:{tickPlacement:"between",tooltip:{enabled:!1},crosshairs:{stroke:{width:0}}}}}},{key:"area",value:function(){return{stroke:{width:4,fill:{type:"solid",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}}},fill:{type:"gradient",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}},markers:{size:0,hover:{sizeOffset:6}},tooltip:{followCursor:!1}}}},{key:"brush",value:function(t){return x.extend(t,{chart:{toolbar:{autoSelected:"selection",show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:1},tooltip:{enabled:!1},xaxis:{tooltip:{enabled:!1}}})}},{key:"stacked100",value:function(t){t.dataLabels=t.dataLabels||{},t.dataLabels.formatter=t.dataLabels.formatter||void 0;var e=t.dataLabels.formatter;return t.yaxis.forEach((function(e,i){t.yaxis[i].min=0,t.yaxis[i].max=100})),"bar"===t.chart.type&&(t.dataLabels.formatter=e||function(t){return"number"==typeof t&&t?t.toFixed(0)+"%":t}),t}},{key:"convertCatToNumeric",value:function(t){return t.xaxis.convertedCatToNumeric=!0,t}},{key:"convertCatToNumericXaxis",value:function(t,e,i){t.xaxis.type="numeric",t.xaxis.labels=t.xaxis.labels||{},t.xaxis.labels.formatter=t.xaxis.labels.formatter||function(t){return x.isNumber(t)?Math.floor(t):t};var a=t.xaxis.labels.formatter,s=t.xaxis.categories&&t.xaxis.categories.length?t.xaxis.categories:t.labels;return i&&i.length&&(s=i.map((function(t){return Array.isArray(t)?t:String(t)}))),s&&s.length&&(t.xaxis.labels.formatter=function(t){return x.isNumber(t)?a(s[Math.floor(t)-1]):a(t)}),t.xaxis.categories=[],t.labels=[],t.xaxis.tickAmount=t.xaxis.tickAmount||"dataPoints",t}},{key:"bubble",value:function(){return{dataLabels:{style:{colors:["#fff"]}},tooltip:{shared:!1,intersect:!0},xaxis:{crosshairs:{width:0}},fill:{type:"solid",gradient:{shade:"light",inverse:!0,shadeIntensity:.55,opacityFrom:.4,opacityTo:.8}}}}},{key:"scatter",value:function(){return{dataLabels:{enabled:!1},tooltip:{shared:!1,intersect:!0},markers:{size:6,strokeWidth:1,hover:{sizeOffset:2}}}}},{key:"heatmap",value:function(){return{chart:{stacked:!1},fill:{opacity:1},dataLabels:{style:{colors:["#fff"]}},stroke:{colors:["#fff"]},tooltip:{followCursor:!0,marker:{show:!1},x:{show:!1}},legend:{position:"top",markers:{shape:"square",size:10,offsetY:2}},grid:{padding:{right:20}}}}},{key:"treemap",value:function(){return{chart:{zoom:{enabled:!1}},dataLabels:{style:{fontSize:14,fontWeight:600,colors:["#fff"]}},stroke:{show:!0,width:2,colors:["#fff"]},legend:{show:!1},fill:{gradient:{stops:[0,100]}},tooltip:{followCursor:!0,x:{show:!1}},grid:{padding:{left:0,right:0}},xaxis:{crosshairs:{show:!1},tooltip:{enabled:!1}}}}},{key:"pie",value:function(){return{chart:{toolbar:{show:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",stops:[0,100]}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"donut",value:function(){return{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",shadeIntensity:.35,stops:[80,100],opacityFrom:1,opacityTo:1}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"polarArea",value:function(){return this.opts.yaxis[0].tickAmount=this.opts.yaxis[0].tickAmount?this.opts.yaxis[0].tickAmount:6,{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},enabled:!1},stroke:{show:!0,width:2},fill:{opacity:.7},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"radar",value:function(){return this.opts.yaxis[0].labels.offsetY=this.opts.yaxis[0].labels.offsetY?this.opts.yaxis[0].labels.offsetY:6,{dataLabels:{enabled:!1,style:{fontSize:"11px"}},stroke:{width:2},markers:{size:3,strokeWidth:1,strokeOpacity:1},fill:{opacity:.2},tooltip:{shared:!1,intersect:!0,followCursor:!0},grid:{show:!1},xaxis:{labels:{formatter:function(t){return t},style:{colors:["#a8a8a8"],fontSize:"11px"}},tooltip:{enabled:!1},crosshairs:{show:!1}}}}},{key:"radialBar",value:function(){return{chart:{animations:{dynamicAnimation:{enabled:!0,speed:800}},toolbar:{show:!1}},fill:{gradient:{shade:"dark",shadeIntensity:.4,inverseColors:!1,type:"diagonal2",opacityFrom:1,opacityTo:1,stops:[70,98,100]}},legend:{show:!1,position:"right"},tooltip:{enabled:!1,fillSeriesColor:!0}}}},{key:"_getBoxTooltip",value:function(t,e,i,a,s){var r=t.globals.seriesCandleO[e][i],o=t.globals.seriesCandleH[e][i],n=t.globals.seriesCandleM[e][i],l=t.globals.seriesCandleL[e][i],h=t.globals.seriesCandleC[e][i];return t.config.series[e].type&&t.config.series[e].type!==s?'<div class="apexcharts-custom-tooltip">\n          '.concat(t.config.series[e].name?t.config.series[e].name:"series-"+(e+1),": <strong>").concat(t.globals.series[e][i],"</strong>\n        </div>"):'<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t.config.chart.type,'">')+"<div>".concat(a[0],': <span class="value">')+r+"</span></div>"+"<div>".concat(a[1],': <span class="value">')+o+"</span></div>"+(n?"<div>".concat(a[2],': <span class="value">')+n+"</span></div>":"")+"<div>".concat(a[3],': <span class="value">')+l+"</span></div>"+"<div>".concat(a[4],': <span class="value">')+h+"</span></div></div>"}}]),t}(),N=function(){function t(e){a(this,t),this.opts=e}return r(t,[{key:"init",value:function(t){var e=t.responsiveOverride,a=this.opts,s=new L,r=new D(a);this.chartType=a.chart.type,"histogram"===this.chartType&&(a.chart.type="bar",a=x.extend({plotOptions:{bar:{columnWidth:"99.99%"}}},a)),a=this.extendYAxis(a),a=this.extendAnnotations(a);var o=s.init(),n={};if(a&&"object"===i(a)){var l={};l=-1!==["line","area","bar","candlestick","boxPlot","rangeBar","histogram","bubble","scatter","heatmap","treemap","pie","polarArea","donut","radar","radialBar"].indexOf(a.chart.type)?r[a.chart.type]():r.line(),a.chart.brush&&a.chart.brush.enabled&&(l=r.brush(l)),a.chart.stacked&&"100%"===a.chart.stackType&&(a=r.stacked100(a)),this.checkForDarkTheme(window.Apex),this.checkForDarkTheme(a),a.xaxis=a.xaxis||window.Apex.xaxis||{},e||(a.xaxis.convertedCatToNumeric=!1),((a=this.checkForCatToNumericXAxis(this.chartType,l,a)).chart.sparkline&&a.chart.sparkline.enabled||window.Apex.chart&&window.Apex.chart.sparkline&&window.Apex.chart.sparkline.enabled)&&(l=r.sparkline(l)),n=x.extend(o,l)}var h=x.extend(n,window.Apex);return o=x.extend(h,a),o=this.handleUserInputErrors(o)}},{key:"checkForCatToNumericXAxis",value:function(t,e,i){var a=new D(i),s=("bar"===t||"boxPlot"===t)&&i.plotOptions&&i.plotOptions.bar&&i.plotOptions.bar.horizontal,r="pie"===t||"polarArea"===t||"donut"===t||"radar"===t||"radialBar"===t||"heatmap"===t,o="datetime"!==i.xaxis.type&&"numeric"!==i.xaxis.type,n=i.xaxis.tickPlacement?i.xaxis.tickPlacement:e.xaxis&&e.xaxis.tickPlacement;return s||r||!o||"between"===n||(i=a.convertCatToNumeric(i)),i}},{key:"extendYAxis",value:function(t,e){var i=new L;(void 0===t.yaxis||!t.yaxis||Array.isArray(t.yaxis)&&0===t.yaxis.length)&&(t.yaxis={}),t.yaxis.constructor!==Array&&window.Apex.yaxis&&window.Apex.yaxis.constructor!==Array&&(t.yaxis=x.extend(t.yaxis,window.Apex.yaxis)),t.yaxis.constructor!==Array?t.yaxis=[x.extend(i.yAxis,t.yaxis)]:t.yaxis=x.extendArray(t.yaxis,i.yAxis);var a=!1;t.yaxis.forEach((function(t){t.logarithmic&&(a=!0)}));var s=t.series;return e&&!s&&(s=e.config.series),a&&s.length!==t.yaxis.length&&s.length&&(t.yaxis=s.map((function(e,a){if(e.name||(s[a].name="series-".concat(a+1)),t.yaxis[a])return t.yaxis[a].seriesName=s[a].name,t.yaxis[a];var r=x.extend(i.yAxis,t.yaxis[0]);return r.show=!1,r}))),a&&s.length>1&&s.length!==t.yaxis.length&&console.warn("A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both."),t}},{key:"extendAnnotations",value:function(t){return void 0===t.annotations&&(t.annotations={},t.annotations.yaxis=[],t.annotations.xaxis=[],t.annotations.points=[]),t=this.extendYAxisAnnotations(t),t=this.extendXAxisAnnotations(t),t=this.extendPointAnnotations(t)}},{key:"extendYAxisAnnotations",value:function(t){var e=new L;return t.annotations.yaxis=x.extendArray(void 0!==t.annotations.yaxis?t.annotations.yaxis:[],e.yAxisAnnotation),t}},{key:"extendXAxisAnnotations",value:function(t){var e=new L;return t.annotations.xaxis=x.extendArray(void 0!==t.annotations.xaxis?t.annotations.xaxis:[],e.xAxisAnnotation),t}},{key:"extendPointAnnotations",value:function(t){var e=new L;return t.annotations.points=x.extendArray(void 0!==t.annotations.points?t.annotations.points:[],e.pointAnnotation),t}},{key:"checkForDarkTheme",value:function(t){t.theme&&"dark"===t.theme.mode&&(t.tooltip||(t.tooltip={}),"light"!==t.tooltip.theme&&(t.tooltip.theme="dark"),t.chart.foreColor||(t.chart.foreColor="#f6f7f8"),t.chart.background||(t.chart.background="#424242"),t.theme.palette||(t.theme.palette="palette4"))}},{key:"handleUserInputErrors",value:function(t){var e=t;if(e.tooltip.shared&&e.tooltip.intersect)throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");if("bar"===e.chart.type&&e.plotOptions.bar.horizontal){if(e.yaxis.length>1)throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");e.yaxis[0].reversed&&(e.yaxis[0].opposite=!0),e.xaxis.tooltip.enabled=!1,e.yaxis[0].tooltip.enabled=!1,e.chart.zoom.enabled=!1}return"bar"!==e.chart.type&&"rangeBar"!==e.chart.type||e.tooltip.shared&&"barWidth"===e.xaxis.crosshairs.width&&e.series.length>1&&(e.xaxis.crosshairs.width="tickWidth"),"candlestick"!==e.chart.type&&"boxPlot"!==e.chart.type||e.yaxis[0].reversed&&(console.warn("Reversed y-axis in ".concat(e.chart.type," chart is not supported.")),e.yaxis[0].reversed=!1),e}}]),t}(),O=function(){function t(){a(this,t)}return r(t,[{key:"initGlobalVars",value:function(t){t.series=[],t.seriesCandleO=[],t.seriesCandleH=[],t.seriesCandleM=[],t.seriesCandleL=[],t.seriesCandleC=[],t.seriesRangeStart=[],t.seriesRangeEnd=[],t.seriesRangeBar=[],t.seriesPercent=[],t.seriesGoals=[],t.seriesX=[],t.seriesZ=[],t.seriesNames=[],t.seriesTotals=[],t.seriesLog=[],t.seriesColors=[],t.stackedSeriesTotals=[],t.seriesXvalues=[],t.seriesYvalues=[],t.labels=[],t.hasGroups=!1,t.groups=[],t.categoryLabels=[],t.timescaleLabels=[],t.noLabelsProvided=!1,t.resizeTimer=null,t.selectionResizeTimer=null,t.delayedElements=[],t.pointsArray=[],t.dataLabelsRects=[],t.isXNumeric=!1,t.xaxisLabelsCount=0,t.skipLastTimelinelabel=!1,t.skipFirstTimelinelabel=!1,t.isDataXYZ=!1,t.isMultiLineX=!1,t.isMultipleYAxis=!1,t.maxY=-Number.MAX_VALUE,t.minY=Number.MIN_VALUE,t.minYArr=[],t.maxYArr=[],t.maxX=-Number.MAX_VALUE,t.minX=Number.MAX_VALUE,t.initialMaxX=-Number.MAX_VALUE,t.initialMinX=Number.MAX_VALUE,t.maxDate=0,t.minDate=Number.MAX_VALUE,t.minZ=Number.MAX_VALUE,t.maxZ=-Number.MAX_VALUE,t.minXDiff=Number.MAX_VALUE,t.yAxisScale=[],t.xAxisScale=null,t.xAxisTicksPositions=[],t.yLabelsCoords=[],t.yTitleCoords=[],t.barPadForNumericAxis=0,t.padHorizontal=0,t.xRange=0,t.yRange=[],t.zRange=0,t.dataPoints=0,t.xTickAmount=0}},{key:"globalVars",value:function(t){return{chartID:null,cuid:null,events:{beforeMount:[],mounted:[],updated:[],clicked:[],selection:[],dataPointSelection:[],zoomed:[],scrolled:[]},colors:[],clientX:null,clientY:null,fill:{colors:[]},stroke:{colors:[]},dataLabels:{style:{colors:[]}},radarPolygons:{fill:{colors:[]}},markers:{colors:[],size:t.markers.size,largestSize:0},animationEnded:!1,isTouchDevice:"ontouchstart"in window||navigator.msMaxTouchPoints,isDirty:!1,isExecCalled:!1,initialConfig:null,initialSeries:[],lastXAxis:[],lastYAxis:[],columnSeries:null,labels:[],timescaleLabels:[],noLabelsProvided:!1,allSeriesCollapsed:!1,collapsedSeries:[],collapsedSeriesIndices:[],ancillaryCollapsedSeries:[],ancillaryCollapsedSeriesIndices:[],risingSeries:[],dataFormatXNumeric:!1,capturedSeriesIndex:-1,capturedDataPointIndex:-1,selectedDataPoints:[],goldenPadding:35,invalidLogScale:!1,ignoreYAxisIndexes:[],yAxisSameScaleIndices:[],maxValsInArrayIndex:0,radialSize:0,selection:void 0,zoomEnabled:"zoom"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.zoom&&t.chart.zoom.enabled,panEnabled:"pan"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.pan,selectionEnabled:"selection"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.selection,yaxis:null,mousedown:!1,lastClientPosition:{},visibleXRange:void 0,yValueDecimal:0,total:0,SVGNS:"http://www.w3.org/2000/svg",svgWidth:0,svgHeight:0,noData:!1,locale:{},dom:{},memory:{methodsToExec:[]},shouldAnimate:!0,skipLastTimelinelabel:!1,skipFirstTimelinelabel:!1,delayedElements:[],axisCharts:!0,isDataXYZ:!1,resized:!1,resizeTimer:null,comboCharts:!1,dataChanged:!1,previousPaths:[],allSeriesHasEqualX:!0,pointsArray:[],dataLabelsRects:[],lastDrawnDataLabelsIndexes:[],hasNullValues:!1,easing:null,zoomed:!1,gridWidth:0,gridHeight:0,rotateXLabels:!1,defaultLabels:!1,xLabelFormatter:void 0,yLabelFormatters:[],xaxisTooltipFormatter:void 0,ttKeyFormatter:void 0,ttVal:void 0,ttZFormatter:void 0,LINE_HEIGHT_RATIO:1.618,xAxisLabelsHeight:0,xAxisGroupLabelsHeight:0,xAxisLabelsWidth:0,yAxisLabelsWidth:0,scaleX:1,scaleY:1,translateX:0,translateY:0,translateYAxisX:[],yAxisWidths:[],translateXAxisY:0,translateXAxisX:0,tooltip:null}}},{key:"init",value:function(t){var e=this.globalVars(t);return this.initGlobalVars(e),e.initialConfig=x.extend({},t),e.initialSeries=x.clone(t.series),e.lastXAxis=x.clone(e.initialConfig.xaxis),e.lastYAxis=x.clone(e.initialConfig.yaxis),e}}]),t}(),W=function(){function t(e){a(this,t),this.opts=e}return r(t,[{key:"init",value:function(){var t=new N(this.opts).init({responsiveOverride:!1});return{config:t,globals:(new O).init(t)}}}]),t}(),B=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.twoDSeries=[],this.threeDSeries=[],this.twoDSeriesX=[],this.seriesGoals=[],this.coreUtils=new y(this.ctx)}return r(t,[{key:"isMultiFormat",value:function(){return this.isFormatXY()||this.isFormat2DArray()}},{key:"isFormatXY",value:function(){var t=this.w.config.series.slice(),e=new E(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&null!==t[this.activeSeriesIndex].data[0]&&void 0!==t[this.activeSeriesIndex].data[0].x&&null!==t[this.activeSeriesIndex].data[0])return!0}},{key:"isFormat2DArray",value:function(){var t=this.w.config.series.slice(),e=new E(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&void 0!==t[this.activeSeriesIndex].data[0]&&null!==t[this.activeSeriesIndex].data[0]&&t[this.activeSeriesIndex].data[0].constructor===Array)return!0}},{key:"handleFormat2DArray",value:function(t,e){for(var i=this.w.config,a=this.w.globals,s="boxPlot"===i.chart.type||"boxPlot"===i.series[e].type,r=0;r<t[e].data.length;r++)if(void 0!==t[e].data[r][1]&&(Array.isArray(t[e].data[r][1])&&4===t[e].data[r][1].length&&!s?this.twoDSeries.push(x.parseNumber(t[e].data[r][1][3])):t[e].data[r].length>=5?this.twoDSeries.push(x.parseNumber(t[e].data[r][4])):this.twoDSeries.push(x.parseNumber(t[e].data[r][1])),a.dataFormatXNumeric=!0),"datetime"===i.xaxis.type){var o=new Date(t[e].data[r][0]);o=new Date(o).getTime(),this.twoDSeriesX.push(o)}else this.twoDSeriesX.push(t[e].data[r][0]);for(var n=0;n<t[e].data.length;n++)void 0!==t[e].data[n][2]&&(this.threeDSeries.push(t[e].data[n][2]),a.isDataXYZ=!0)}},{key:"handleFormatXY",value:function(t,e){var i=this.w.config,a=this.w.globals,s=new R(this.ctx),r=e;a.collapsedSeriesIndices.indexOf(e)>-1&&(r=this.activeSeriesIndex);for(var o=0;o<t[e].data.length;o++)void 0!==t[e].data[o].y&&(Array.isArray(t[e].data[o].y)?this.twoDSeries.push(x.parseNumber(t[e].data[o].y[t[e].data[o].y.length-1])):this.twoDSeries.push(x.parseNumber(t[e].data[o].y))),void 0!==t[e].data[o].goals&&Array.isArray(t[e].data[o].goals)?(void 0===this.seriesGoals[e]&&(this.seriesGoals[e]=[]),this.seriesGoals[e].push(t[e].data[o].goals)):(void 0===this.seriesGoals[e]&&(this.seriesGoals[e]=[]),this.seriesGoals[e].push(null));for(var n=0;n<t[r].data.length;n++){var l="string"==typeof t[r].data[n].x,h=Array.isArray(t[r].data[n].x),c=!h&&!!s.isValidDate(t[r].data[n].x.toString());if(l||c)if(l||i.xaxis.convertedCatToNumeric){var d=a.isBarHorizontal&&a.isRangeData;"datetime"!==i.xaxis.type||d?(this.fallbackToCategory=!0,this.twoDSeriesX.push(t[r].data[n].x)):this.twoDSeriesX.push(s.parseDate(t[r].data[n].x))}else"datetime"===i.xaxis.type?this.twoDSeriesX.push(s.parseDate(t[r].data[n].x.toString())):(a.dataFormatXNumeric=!0,a.isXNumeric=!0,this.twoDSeriesX.push(parseFloat(t[r].data[n].x)));else h?(this.fallbackToCategory=!0,this.twoDSeriesX.push(t[r].data[n].x)):(a.isXNumeric=!0,a.dataFormatXNumeric=!0,this.twoDSeriesX.push(t[r].data[n].x))}if(t[e].data[0]&&void 0!==t[e].data[0].z){for(var g=0;g<t[e].data.length;g++)this.threeDSeries.push(t[e].data[g].z);a.isDataXYZ=!0}}},{key:"handleRangeData",value:function(t,e){var i=this.w.globals,a={};return this.isFormat2DArray()?a=this.handleRangeDataFormat("array",t,e):this.isFormatXY()&&(a=this.handleRangeDataFormat("xy",t,e)),i.seriesRangeStart.push(a.start),i.seriesRangeEnd.push(a.end),i.seriesRangeBar.push(a.rangeUniques),i.seriesRangeBar.forEach((function(t,e){t&&t.forEach((function(t,e){t.y.forEach((function(e,i){for(var a=0;a<t.y.length;a++)if(i!==a){var s=e.y1,r=e.y2,o=t.y[a].y1;s<=t.y[a].y2&&o<=r&&(t.overlaps.indexOf(e.rangeName)<0&&t.overlaps.push(e.rangeName),t.overlaps.indexOf(t.y[a].rangeName)<0&&t.overlaps.push(t.y[a].rangeName))}}))}))})),a}},{key:"handleCandleStickBoxData",value:function(t,e){var i=this.w.globals,a={};return this.isFormat2DArray()?a=this.handleCandleStickBoxDataFormat("array",t,e):this.isFormatXY()&&(a=this.handleCandleStickBoxDataFormat("xy",t,e)),i.seriesCandleO[e]=a.o,i.seriesCandleH[e]=a.h,i.seriesCandleM[e]=a.m,i.seriesCandleL[e]=a.l,i.seriesCandleC[e]=a.c,a}},{key:"handleRangeDataFormat",value:function(t,e,i){var a=[],s=[],r=e[i].data.filter((function(t,e,i){return e===i.findIndex((function(e){return e.x===t.x}))})).map((function(t,e){return{x:t.x,overlaps:[],y:[]}})),o="Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts",n=new E(this.ctx).getActiveConfigSeriesIndex();if("array"===t){if(2!==e[n].data[0][1].length)throw new Error(o);for(var l=0;l<e[i].data.length;l++)a.push(e[i].data[l][1][0]),s.push(e[i].data[l][1][1])}else if("xy"===t){if(2!==e[n].data[0].y.length)throw new Error(o);for(var h=function(t){var o=x.randomId(),n=e[i].data[t].x,l={y1:e[i].data[t].y[0],y2:e[i].data[t].y[1],rangeName:o};e[i].data[t].rangeName=o;var h=r.findIndex((function(t){return t.x===n}));r[h].y.push(l),a.push(l.y1),s.push(l.y2)},c=0;c<e[i].data.length;c++)h(c)}return{start:a,end:s,rangeUniques:r}}},{key:"handleCandleStickBoxDataFormat",value:function(t,e,i){var a=this.w,s="boxPlot"===a.config.chart.type||"boxPlot"===a.config.series[i].type,r=[],o=[],n=[],l=[],h=[];if("array"===t)if(s&&6===e[i].data[0].length||!s&&5===e[i].data[0].length)for(var c=0;c<e[i].data.length;c++)r.push(e[i].data[c][1]),o.push(e[i].data[c][2]),s?(n.push(e[i].data[c][3]),l.push(e[i].data[c][4]),h.push(e[i].data[c][5])):(l.push(e[i].data[c][3]),h.push(e[i].data[c][4]));else for(var d=0;d<e[i].data.length;d++)Array.isArray(e[i].data[d][1])&&(r.push(e[i].data[d][1][0]),o.push(e[i].data[d][1][1]),s?(n.push(e[i].data[d][1][2]),l.push(e[i].data[d][1][3]),h.push(e[i].data[d][1][4])):(l.push(e[i].data[d][1][2]),h.push(e[i].data[d][1][3])));else if("xy"===t)for(var g=0;g<e[i].data.length;g++)Array.isArray(e[i].data[g].y)&&(r.push(e[i].data[g].y[0]),o.push(e[i].data[g].y[1]),s?(n.push(e[i].data[g].y[2]),l.push(e[i].data[g].y[3]),h.push(e[i].data[g].y[4])):(l.push(e[i].data[g].y[2]),h.push(e[i].data[g].y[3])));return{o:r,h:o,m:n,l:l,c:h}}},{key:"parseDataAxisCharts",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ctx,a=this.w.config,s=this.w.globals,r=new R(i),o=a.labels.length>0?a.labels.slice():a.xaxis.categories.slice();s.isRangeBar="rangeBar"===a.chart.type&&s.isBarHorizontal,s.hasGroups="category"===a.xaxis.type&&a.xaxis.group.groups.length>0,s.hasGroups&&(s.groups=a.xaxis.group.groups);for(var n=function(){for(var t=0;t<o.length;t++)if("string"==typeof o[t]){if(!r.isValidDate(o[t]))throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");e.twoDSeriesX.push(r.parseDate(o[t]))}else e.twoDSeriesX.push(o[t])},l=0;l<t.length;l++){if(this.twoDSeries=[],this.twoDSeriesX=[],this.threeDSeries=[],void 0===t[l].data)return void console.error("It is a possibility that you may have not included 'data' property in series.");if("rangeBar"!==a.chart.type&&"rangeArea"!==a.chart.type&&"rangeBar"!==t[l].type&&"rangeArea"!==t[l].type||(s.isRangeData=!0,this.handleRangeData(t,l)),this.isMultiFormat())this.isFormat2DArray()?this.handleFormat2DArray(t,l):this.isFormatXY()&&this.handleFormatXY(t,l),"candlestick"!==a.chart.type&&"candlestick"!==t[l].type&&"boxPlot"!==a.chart.type&&"boxPlot"!==t[l].type||this.handleCandleStickBoxData(t,l),s.series.push(this.twoDSeries),s.labels.push(this.twoDSeriesX),s.seriesX.push(this.twoDSeriesX),s.seriesGoals=this.seriesGoals,l!==this.activeSeriesIndex||this.fallbackToCategory||(s.isXNumeric=!0);else{"datetime"===a.xaxis.type?(s.isXNumeric=!0,n(),s.seriesX.push(this.twoDSeriesX)):"numeric"===a.xaxis.type&&(s.isXNumeric=!0,o.length>0&&(this.twoDSeriesX=o,s.seriesX.push(this.twoDSeriesX))),s.labels.push(this.twoDSeriesX);var h=t[l].data.map((function(t){return x.parseNumber(t)}));s.series.push(h)}s.seriesZ.push(this.threeDSeries),void 0!==t[l].name?s.seriesNames.push(t[l].name):s.seriesNames.push("series-"+parseInt(l+1,10)),void 0!==t[l].color?s.seriesColors.push(t[l].color):s.seriesColors.push(void 0)}return this.w}},{key:"parseDataNonAxisCharts",value:function(t){var e=this.w.globals,i=this.w.config;e.series=t.slice(),e.seriesNames=i.labels.slice();for(var a=0;a<e.series.length;a++)void 0===e.seriesNames[a]&&e.seriesNames.push("series-"+(a+1));return this.w}},{key:"handleExternalLabelsData",value:function(t){var e=this.w.config,i=this.w.globals;if(e.xaxis.categories.length>0)i.labels=e.xaxis.categories;else if(e.labels.length>0)i.labels=e.labels.slice();else if(this.fallbackToCategory){if(i.labels=i.labels[0],i.seriesRangeBar.length&&(i.seriesRangeBar.map((function(t){t.forEach((function(t){i.labels.indexOf(t.x)<0&&t.x&&i.labels.push(t.x)}))})),i.labels=i.labels.filter((function(t,e,i){return i.indexOf(t)===e}))),e.xaxis.convertedCatToNumeric)new D(e).convertCatToNumericXaxis(e,this.ctx,i.seriesX[0]),this._generateExternalLabels(t)}else this._generateExternalLabels(t)}},{key:"_generateExternalLabels",value:function(t){var e=this.w.globals,i=this.w.config,a=[];if(e.axisCharts){if(e.series.length>0)if(this.isFormatXY())for(var s=i.series.map((function(t,e){return t.data.filter((function(t,e,i){return i.findIndex((function(e){return e.x===t.x}))===e}))})),r=s.reduce((function(t,e,i,a){return a[t].length>e.length?t:i}),0),o=0;o<s[r].length;o++)a.push(o+1);else for(var n=0;n<e.series[e.maxValsInArrayIndex].length;n++)a.push(n+1);e.seriesX=[];for(var l=0;l<t.length;l++)e.seriesX.push(a);e.isXNumeric=!0}if(0===a.length){a=e.axisCharts?[]:e.series.map((function(t,e){return e+1}));for(var h=0;h<t.length;h++)e.seriesX.push(a)}e.labels=a,i.xaxis.convertedCatToNumeric&&(e.categoryLabels=a.map((function(t){return i.xaxis.labels.formatter(t)}))),e.noLabelsProvided=!0}},{key:"parseData",value:function(t){var e=this.w,i=e.config,a=e.globals;if(this.excludeCollapsedSeriesInYAxis(),this.fallbackToCategory=!1,this.ctx.core.resetGlobals(),this.ctx.core.isMultipleY(),a.axisCharts?this.parseDataAxisCharts(t):this.parseDataNonAxisCharts(t),this.coreUtils.getLargestSeries(),"bar"===i.chart.type&&i.chart.stacked){var s=new E(this.ctx);a.series=s.setNullSeriesToZeroValues(a.series)}this.coreUtils.getSeriesTotals(),a.axisCharts&&this.coreUtils.getStackedSeriesTotals(),this.coreUtils.getPercentSeries(),a.dataFormatXNumeric||a.isXNumeric&&("numeric"!==i.xaxis.type||0!==i.labels.length||0!==i.xaxis.categories.length)||this.handleExternalLabelsData(t);for(var r=this.coreUtils.getCategoryLabels(a.labels),o=0;o<r.length;o++)if(Array.isArray(r[o])){a.isMultiLineX=!0;break}}},{key:"excludeCollapsedSeriesInYAxis",value:function(){var t=this,e=this.w;e.globals.ignoreYAxisIndexes=e.globals.collapsedSeries.map((function(i,a){if(t.w.globals.isMultipleYAxis&&!e.config.chart.stacked)return i.index}))}}]),t}(),V=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.tooltipKeyFormat="dd MMM"}return r(t,[{key:"xLabelFormat",value:function(t,e,i,a){var s=this.w;if("datetime"===s.config.xaxis.type&&void 0===s.config.xaxis.labels.formatter&&void 0===s.config.tooltip.x.formatter){var r=new R(this.ctx);return r.formatDate(r.getDate(e),s.config.tooltip.x.format)}return t(e,i,a)}},{key:"defaultGeneralFormatter",value:function(t){return Array.isArray(t)?t.map((function(t){return t})):t}},{key:"defaultYFormatter",value:function(t,e,i){var a=this.w;return x.isNumber(t)&&(t=0!==a.globals.yValueDecimal?t.toFixed(void 0!==e.decimalsInFloat?e.decimalsInFloat:a.globals.yValueDecimal):a.globals.maxYArr[i]-a.globals.minYArr[i]<5?t.toFixed(1):t.toFixed(0)),t}},{key:"setLabelFormatters",value:function(){var t=this,e=this.w;return e.globals.xaxisTooltipFormatter=function(e){return t.defaultGeneralFormatter(e)},e.globals.ttKeyFormatter=function(e){return t.defaultGeneralFormatter(e)},e.globals.ttZFormatter=function(t){return t},e.globals.legendFormatter=function(e){return t.defaultGeneralFormatter(e)},void 0!==e.config.xaxis.labels.formatter?e.globals.xLabelFormatter=e.config.xaxis.labels.formatter:e.globals.xLabelFormatter=function(t){if(x.isNumber(t)){if(!e.config.xaxis.convertedCatToNumeric&&"numeric"===e.config.xaxis.type){if(x.isNumber(e.config.xaxis.decimalsInFloat))return t.toFixed(e.config.xaxis.decimalsInFloat);var i=e.globals.maxX-e.globals.minX;return i>0&&i<100?t.toFixed(1):t.toFixed(0)}if(e.globals.isBarHorizontal)if(e.globals.maxY-e.globals.minYArr<4)return t.toFixed(1);return t.toFixed(0)}return t},"function"==typeof e.config.tooltip.x.formatter?e.globals.ttKeyFormatter=e.config.tooltip.x.formatter:e.globals.ttKeyFormatter=e.globals.xLabelFormatter,"function"==typeof e.config.xaxis.tooltip.formatter&&(e.globals.xaxisTooltipFormatter=e.config.xaxis.tooltip.formatter),(Array.isArray(e.config.tooltip.y)||void 0!==e.config.tooltip.y.formatter)&&(e.globals.ttVal=e.config.tooltip.y),void 0!==e.config.tooltip.z.formatter&&(e.globals.ttZFormatter=e.config.tooltip.z.formatter),void 0!==e.config.legend.formatter&&(e.globals.legendFormatter=e.config.legend.formatter),e.config.yaxis.forEach((function(i,a){void 0!==i.labels.formatter?e.globals.yLabelFormatters[a]=i.labels.formatter:e.globals.yLabelFormatters[a]=function(s){return e.globals.xyCharts?Array.isArray(s)?s.map((function(e){return t.defaultYFormatter(e,i,a)})):t.defaultYFormatter(s,i,a):s}})),e.globals}},{key:"heatmapLabelFormatters",value:function(){var t=this.w;if("heatmap"===t.config.chart.type){t.globals.yAxisScale[0].result=t.globals.seriesNames.slice();var e=t.globals.seriesNames.reduce((function(t,e){return t.length>e.length?t:e}),0);t.globals.yAxisScale[0].niceMax=e,t.globals.yAxisScale[0].niceMin=e}}}]),t}(),G=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"getLabel",value:function(t,e,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"12px",o=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],n=this.w,l=void 0===t[a]?"":t[a],h=l,c=n.globals.xLabelFormatter,d=n.config.xaxis.labels.formatter,g=!1,u=new V(this.ctx),p=l;o&&(h=u.xLabelFormat(c,l,p,{i:a,dateFormatter:new R(this.ctx).formatDate,w:n}),void 0!==d&&(h=d(l,t[a],{i:a,dateFormatter:new R(this.ctx).formatDate,w:n})));var f=function(t){var i=null;return e.forEach((function(t){"month"===t.unit?i="year":"day"===t.unit?i="month":"hour"===t.unit?i="day":"minute"===t.unit&&(i="hour")})),i===t};e.length>0?(g=f(e[a].unit),i=e[a].position,h=e[a].value):"datetime"===n.config.xaxis.type&&void 0===d&&(h=""),void 0===h&&(h=""),h=Array.isArray(h)?h:h.toString();var x=new m(this.ctx),b={};b=n.globals.rotateXLabels&&o?x.getTextRects(h,parseInt(r,10),null,"rotate(".concat(n.config.xaxis.labels.rotate," 0 0)"),!1):x.getTextRects(h,parseInt(r,10));var v=!n.config.xaxis.labels.showDuplicates&&this.ctx.timeScale;return!Array.isArray(h)&&(0===h.indexOf("NaN")||0===h.toLowerCase().indexOf("invalid")||h.toLowerCase().indexOf("infinity")>=0||s.indexOf(h)>=0&&v)&&(h=""),{x:i,text:h,textRect:b,isBold:g}}},{key:"checkLabelBasedOnTickamount",value:function(t,e,i){var a=this.w,s=a.config.xaxis.tickAmount;return"dataPoints"===s&&(s=Math.round(a.globals.gridWidth/120)),s>i||t%Math.round(i/(s+1))==0||(e.text=""),e}},{key:"checkForOverflowingLabels",value:function(t,e,i,a,s){var r=this.w;if(0===t&&r.globals.skipFirstTimelinelabel&&(e.text=""),t===i-1&&r.globals.skipLastTimelinelabel&&(e.text=""),r.config.xaxis.labels.hideOverlappingLabels&&a.length>0){var o=s[s.length-1];e.x<o.textRect.width/(r.globals.rotateXLabels?Math.abs(r.config.xaxis.labels.rotate)/12:1.01)+o.x&&(e.text="")}return e}},{key:"checkForReversedLabels",value:function(t,e){var i=this.w;return i.config.yaxis[t]&&i.config.yaxis[t].reversed&&e.reverse(),e}},{key:"isYAxisHidden",value:function(t){var e=this.w,i=new y(this.ctx);return!e.config.yaxis[t].show||!e.config.yaxis[t].showForNullSeries&&i.isSeriesNull(t)&&-1===e.globals.collapsedSeriesIndices.indexOf(t)}},{key:"getYAxisForeColor",value:function(t,e){var i=this.w;return Array.isArray(t)&&i.globals.yAxisScale[e]&&this.ctx.theme.pushExtraColors(t,i.globals.yAxisScale[e].result.length,!1),t}},{key:"drawYAxisTicks",value:function(t,e,i,a,s,r,o){var n=this.w,l=new m(this.ctx),h=n.globals.translateY;if(a.show&&e>0){!0===n.config.yaxis[s].opposite&&(t+=a.width);for(var c=e;c>=0;c--){var d=h+e/10+n.config.yaxis[s].labels.offsetY-1;n.globals.isBarHorizontal&&(d=r*c),"heatmap"===n.config.chart.type&&(d+=r/2);var g=l.drawLine(t+i.offsetX-a.width+a.offsetX,d+a.offsetY,t+i.offsetX+a.offsetX,d+a.offsetY,a.color);o.add(g),h+=r}}}}]),t}(),j=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"scaleSvgNode",value:function(t,e){var i=parseFloat(t.getAttributeNS(null,"width")),a=parseFloat(t.getAttributeNS(null,"height"));t.setAttributeNS(null,"width",i*e),t.setAttributeNS(null,"height",a*e),t.setAttributeNS(null,"viewBox","0 0 "+i+" "+a)}},{key:"fixSvgStringForIe11",value:function(t){if(!x.isIE11())return t.replace(/&nbsp;/g,"&#160;");var e=0,i=t.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g,(function(t){return 2===++e?'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"':t}));return i=(i=i.replace(/xmlns:NS\d+=""/g,"")).replace(/NS\d+:(\w+:\w+=")/g,"$1")}},{key:"getSvgString",value:function(t){null==t&&(t=1);var e=this.w.globals.dom.Paper.svg();if(1!==t){var i=this.w.globals.dom.Paper.node.cloneNode(!0);this.scaleSvgNode(i,t),e=(new XMLSerializer).serializeToString(i)}return this.fixSvgStringForIe11(e)}},{key:"cleanup",value:function(){var t=this.w,e=t.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"),i=t.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");Array.prototype.forEach.call(a,(function(t){t.setAttribute("width",0)})),e&&e[0]&&(e[0].setAttribute("x",-500),e[0].setAttribute("x1",-500),e[0].setAttribute("x2",-500)),i&&i[0]&&(i[0].setAttribute("y",-100),i[0].setAttribute("y1",-100),i[0].setAttribute("y2",-100))}},{key:"svgUrl",value:function(){this.cleanup();var t=this.getSvgString(),e=new Blob([t],{type:"image/svg+xml;charset=utf-8"});return URL.createObjectURL(e)}},{key:"dataURI",value:function(t){var e=this;return new Promise((function(i){var a=e.w,s=t?t.scale||t.width/a.globals.svgWidth:1;e.cleanup();var r=document.createElement("canvas");r.width=a.globals.svgWidth*s,r.height=parseInt(a.globals.dom.elWrap.style.height,10)*s;var o="transparent"===a.config.chart.background?"#fff":a.config.chart.background,n=r.getContext("2d");n.fillStyle=o,n.fillRect(0,0,r.width*s,r.height*s);var l=e.getSvgString(s);if(window.canvg&&x.isIE11()){var h=window.canvg.Canvg.fromString(n,l,{ignoreClear:!0,ignoreDimensions:!0});h.start();var c=r.msToBlob();h.stop(),i({blob:c})}else{var d="data:image/svg+xml,"+encodeURIComponent(l),g=new Image;g.crossOrigin="anonymous",g.onload=function(){if(n.drawImage(g,0,0),r.msToBlob){var t=r.msToBlob();i({blob:t})}else{var e=r.toDataURL("image/png");i({imgURI:e})}},g.src=d}}))}},{key:"exportToSVG",value:function(){this.triggerDownload(this.svgUrl(),this.w.config.chart.toolbar.export.svg.filename,".svg")}},{key:"exportToPng",value:function(){var t=this;this.dataURI().then((function(e){var i=e.imgURI,a=e.blob;a?navigator.msSaveOrOpenBlob(a,t.w.globals.chartID+".png"):t.triggerDownload(i,t.w.config.chart.toolbar.export.png.filename,".png")}))}},{key:"exportToCSV",value:function(t){var e=this,i=t.series,a=t.fileName,s=t.columnDelimiter,r=void 0===s?",":s,o=t.lineDelimiter,n=void 0===o?"\n":o,l=this.w;i||(i=l.config.series);var h=[],c=[],d="",g=new B(this.ctx),u=new G(this.ctx),p=function(t){var i="";if(l.globals.axisCharts){if("category"===l.config.xaxis.type||l.config.xaxis.convertedCatToNumeric)if(l.globals.isBarHorizontal){var a=l.globals.yLabelFormatters[0],s=new E(e.ctx).getActiveConfigSeriesIndex();i=a(l.globals.labels[t],{seriesIndex:s,dataPointIndex:t,w:l})}else i=u.getLabel(l.globals.labels,l.globals.timescaleLabels,0,t).text;"datetime"===l.config.xaxis.type&&(l.config.xaxis.categories.length?i=l.config.xaxis.categories[t]:l.config.labels.length&&(i=l.config.labels[t]))}else i=l.config.labels[t];return Array.isArray(i)&&(i=i.join(" ")),x.isNumber(i)?i:i.split(r).join("")};h.push(l.config.chart.toolbar.export.csv.headerCategory),"boxPlot"===l.config.chart.type?(h.push("minimum"),h.push("q1"),h.push("median"),h.push("q3"),h.push("maximum")):"candlestick"===l.config.chart.type?(h.push("open"),h.push("high"),h.push("low"),h.push("close")):"rangeBar"===l.config.chart.type?(h.push("minimum"),h.push("maximum")):i.map((function(t,e){var i=t.name?t.name:"series-".concat(e);l.globals.axisCharts&&h.push(i.split(r).join("")?i.split(r).join(""):"series-".concat(e))})),l.globals.axisCharts||(h.push(l.config.chart.toolbar.export.csv.headerValue),c.push(h.join(r))),i.map((function(t,e){l.globals.axisCharts?function(t,e){if(h.length&&0===e&&c.push(h.join(r)),t.data&&t.data.length)for(var a=0;a<t.data.length;a++){h=[];var s=p(a);if(s||(g.isFormatXY()?s=i[e].data[a].x:g.isFormat2DArray()&&(s=i[e].data[a]?i[e].data[a][0]:"")),0===e){h.push((n=s,"datetime"===l.config.xaxis.type&&String(n).length>=10?l.config.chart.toolbar.export.csv.dateFormatter(s):x.isNumber(s)?s:s.split(r).join("")));for(var o=0;o<l.globals.series.length;o++)g.isFormatXY()?h.push(i[o].data[a].y):h.push(l.globals.series[o][a])}("candlestick"===l.config.chart.type||t.type&&"candlestick"===t.type)&&(h.pop(),h.push(l.globals.seriesCandleO[e][a]),h.push(l.globals.seriesCandleH[e][a]),h.push(l.globals.seriesCandleL[e][a]),h.push(l.globals.seriesCandleC[e][a])),("boxPlot"===l.config.chart.type||t.type&&"boxPlot"===t.type)&&(h.pop(),h.push(l.globals.seriesCandleO[e][a]),h.push(l.globals.seriesCandleH[e][a]),h.push(l.globals.seriesCandleM[e][a]),h.push(l.globals.seriesCandleL[e][a]),h.push(l.globals.seriesCandleC[e][a])),"rangeBar"===l.config.chart.type&&(h.pop(),h.push(l.globals.seriesRangeStart[e][a]),h.push(l.globals.seriesRangeEnd[e][a])),h.length&&c.push(h.join(r))}var n}(t,e):((h=[]).push(l.globals.labels[e].split(r).join("")),h.push(l.globals.series[e]),c.push(h.join(r)))})),d+=c.join(n),this.triggerDownload("data:text/csv; charset=utf-8,"+encodeURIComponent("\ufeff"+d),a||l.config.chart.toolbar.export.csv.filename,".csv")}},{key:"triggerDownload",value:function(t,e,i){var a=document.createElement("a");a.href=t,a.download=(e||this.w.globals.chartID)+i,document.body.appendChild(a),a.click(),document.body.removeChild(a)}}]),t}(),_=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.axesUtils=new G(e),this.xaxisLabels=i.globals.labels.slice(),i.globals.timescaleLabels.length>0&&!i.globals.isBarHorizontal&&(this.xaxisLabels=i.globals.timescaleLabels.slice()),i.config.xaxis.overwriteCategories&&(this.xaxisLabels=i.config.xaxis.overwriteCategories),this.drawnLabels=[],this.drawnLabelsRects=[],"top"===i.config.xaxis.position?this.offY=0:this.offY=i.globals.gridHeight+1,this.offY=this.offY+i.config.xaxis.axisBorder.offsetY,this.isCategoryBarHorizontal="bar"===i.config.chart.type&&i.config.plotOptions.bar.horizontal,this.xaxisFontSize=i.config.xaxis.labels.style.fontSize,this.xaxisFontFamily=i.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=i.config.xaxis.labels.style.colors,this.xaxisBorderWidth=i.config.xaxis.axisBorder.width,this.isCategoryBarHorizontal&&(this.xaxisBorderWidth=i.config.yaxis[0].axisBorder.width.toString()),this.xaxisBorderWidth.indexOf("%")>-1?this.xaxisBorderWidth=i.globals.gridWidth*parseInt(this.xaxisBorderWidth,10)/100:this.xaxisBorderWidth=parseInt(this.xaxisBorderWidth,10),this.xaxisBorderHeight=i.config.xaxis.axisBorder.height,this.yaxis=i.config.yaxis[0]}return r(t,[{key:"drawXaxis",value:function(){var t=this.w,e=new m(this.ctx),i=e.group({class:"apexcharts-xaxis",transform:"translate(".concat(t.config.xaxis.offsetX,", ").concat(t.config.xaxis.offsetY,")")}),a=e.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(t.globals.translateXAxisX,", ").concat(t.globals.translateXAxisY,")")});i.add(a);for(var s=[],r=0;r<this.xaxisLabels.length;r++)s.push(this.xaxisLabels[r]);if(this.drawXAxisLabelAndGroup(!0,e,a,s,t.globals.isXNumeric,(function(t,e){return e})),t.globals.hasGroups){var o=t.globals.groups;s=[];for(var n=0;n<o.length;n++)s.push(o[n].title);var l={};t.config.xaxis.group.style&&(l.xaxisFontSize=t.config.xaxis.group.style.fontSize,l.xaxisFontFamily=t.config.xaxis.group.style.fontFamily,l.xaxisForeColors=t.config.xaxis.group.style.colors,l.fontWeight=t.config.xaxis.group.style.fontWeight,l.cssClass=t.config.xaxis.group.style.cssClass),this.drawXAxisLabelAndGroup(!1,e,a,s,!1,(function(t,e){return o[t].cols*e}),l)}if(void 0!==t.config.xaxis.title.text){var h=e.group({class:"apexcharts-xaxis-title"}),c=e.drawText({x:t.globals.gridWidth/2+t.config.xaxis.title.offsetX,y:this.offY+parseFloat(this.xaxisFontSize)+t.globals.xAxisLabelsHeight+t.config.xaxis.title.offsetY,text:t.config.xaxis.title.text,textAnchor:"middle",fontSize:t.config.xaxis.title.style.fontSize,fontFamily:t.config.xaxis.title.style.fontFamily,fontWeight:t.config.xaxis.title.style.fontWeight,foreColor:t.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+t.config.xaxis.title.style.cssClass});h.add(c),i.add(h)}if(t.config.xaxis.axisBorder.show){var d=t.globals.barPadForNumericAxis,g=e.drawLine(t.globals.padHorizontal+t.config.xaxis.axisBorder.offsetX-d,this.offY,this.xaxisBorderWidth+d,this.offY,t.config.xaxis.axisBorder.color,0,this.xaxisBorderHeight);i.add(g)}return i}},{key:"drawXAxisLabelAndGroup",value:function(t,e,i,a,s,r){var o,n=this,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},h=[],c=[],d=this.w,g=l.xaxisFontSize||this.xaxisFontSize,u=l.xaxisFontFamily||this.xaxisFontFamily,p=l.xaxisForeColors||this.xaxisForeColors,f=l.fontWeight||d.config.xaxis.labels.style.fontWeight,x=l.cssClass||d.config.xaxis.labels.style.cssClass,b=d.globals.padHorizontal,v=a.length,m="category"===d.config.xaxis.type?d.globals.dataPoints:v;if(s){var y=m>1?m-1:m;o=d.globals.gridWidth/y,b=b+r(0,o)/2+d.config.xaxis.labels.offsetX}else o=d.globals.gridWidth/m,b=b+r(0,o)+d.config.xaxis.labels.offsetX;for(var w=function(s){var l=b-r(s,o)/2+d.config.xaxis.labels.offsetX;0===s&&1===v&&o/2===b&&1===m&&(l=d.globals.gridWidth/2);var y=n.axesUtils.getLabel(a,d.globals.timescaleLabels,l,s,h,g,t),w=28;d.globals.rotateXLabels&&t&&(w=22),t||(w=w+parseFloat(g)+(d.globals.xAxisLabelsHeight-d.globals.xAxisGroupLabelsHeight)+(d.globals.rotateXLabels?10:0)),y=void 0!==d.config.xaxis.tickAmount&&"dataPoints"!==d.config.xaxis.tickAmount&&"datetime"!==d.config.xaxis.type?n.axesUtils.checkLabelBasedOnTickamount(s,y,v):n.axesUtils.checkForOverflowingLabels(s,y,v,h,c);if(t&&y.text&&d.globals.xaxisLabelsCount++,d.config.xaxis.labels.show){var k=e.drawText({x:y.x,y:n.offY+d.config.xaxis.labels.offsetY+w-("top"===d.config.xaxis.position?d.globals.xAxisHeight+d.config.xaxis.axisTicks.height-2:0),text:y.text,textAnchor:"middle",fontWeight:y.isBold?600:f,fontSize:g,fontFamily:u,foreColor:Array.isArray(p)?t&&d.config.xaxis.convertedCatToNumeric?p[d.globals.minX+s-1]:p[s]:p,isPlainText:!1,cssClass:(t?"apexcharts-xaxis-label ":"apexcharts-xaxis-group-label ")+x});if(i.add(k),t){var A=document.createElementNS(d.globals.SVGNS,"title");A.textContent=Array.isArray(y.text)?y.text.join(" "):y.text,k.node.appendChild(A),""!==y.text&&(h.push(y.text),c.push(y))}}s<v-1&&(b+=r(s+1,o))},k=0;k<=v-1;k++)w(k)}},{key:"drawXaxisInversed",value:function(t){var e,i,a=this,s=this.w,r=new m(this.ctx),o=s.config.yaxis[0].opposite?s.globals.translateYAxisX[t]:0,n=r.group({class:"apexcharts-yaxis apexcharts-xaxis-inversed",rel:t}),l=r.group({class:"apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",transform:"translate("+o+", 0)"});n.add(l);var h=[];if(s.config.yaxis[t].show)for(var c=0;c<this.xaxisLabels.length;c++)h.push(this.xaxisLabels[c]);e=s.globals.gridHeight/h.length,i=-e/2.2;var d=s.globals.yLabelFormatters[0],g=s.config.yaxis[0].labels;if(g.show)for(var u=function(o){var n=void 0===h[o]?"":h[o];n=d(n,{seriesIndex:t,dataPointIndex:o,w:s});var c=a.axesUtils.getYAxisForeColor(g.style.colors,t),u=0;Array.isArray(n)&&(u=n.length/2*parseInt(g.style.fontSize,10));var p=r.drawText({x:g.offsetX-15,y:i+e+g.offsetY-u,text:n,textAnchor:a.yaxis.opposite?"start":"end",foreColor:Array.isArray(c)?c[o]:c,fontSize:g.style.fontSize,fontFamily:g.style.fontFamily,fontWeight:g.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+g.style.cssClass,maxWidth:g.maxWidth});l.add(p);var f=document.createElementNS(s.globals.SVGNS,"title");if(f.textContent=Array.isArray(n)?n.join(" "):n,p.node.appendChild(f),0!==s.config.yaxis[t].labels.rotate){var x=r.rotateAroundCenter(p.node);p.node.setAttribute("transform","rotate(".concat(s.config.yaxis[t].labels.rotate," 0 ").concat(x.y,")"))}i+=e},p=0;p<=h.length-1;p++)u(p);if(void 0!==s.config.yaxis[0].title.text){var f=r.group({class:"apexcharts-yaxis-title apexcharts-xaxis-title-inversed",transform:"translate("+o+", 0)"}),x=r.drawText({x:0,y:s.globals.gridHeight/2,text:s.config.yaxis[0].title.text,textAnchor:"middle",foreColor:s.config.yaxis[0].title.style.color,fontSize:s.config.yaxis[0].title.style.fontSize,fontWeight:s.config.yaxis[0].title.style.fontWeight,fontFamily:s.config.yaxis[0].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+s.config.yaxis[0].title.style.cssClass});f.add(x),n.add(f)}var b=0;this.isCategoryBarHorizontal&&s.config.yaxis[0].opposite&&(b=s.globals.gridWidth);var v=s.config.xaxis.axisBorder;if(v.show){var y=r.drawLine(s.globals.padHorizontal+v.offsetX+b,1+v.offsetY,s.globals.padHorizontal+v.offsetX+b,s.globals.gridHeight+v.offsetY,v.color,0);n.add(y)}return s.config.yaxis[0].axisTicks.show&&this.axesUtils.drawYAxisTicks(b,h.length,s.config.yaxis[0].axisBorder,s.config.yaxis[0].axisTicks,0,e,n),n}},{key:"drawXaxisTicks",value:function(t,e,i){var a=this.w,s=t;if(!(t<0||t-2>a.globals.gridWidth)){var r=this.offY+a.config.xaxis.axisTicks.offsetY;if(e=e+r+a.config.xaxis.axisTicks.height,"top"===a.config.xaxis.position&&(e=r-a.config.xaxis.axisTicks.height),a.config.xaxis.axisTicks.show){var o=new m(this.ctx).drawLine(t+a.config.xaxis.axisTicks.offsetX,r+a.config.xaxis.offsetY,s+a.config.xaxis.axisTicks.offsetX,e+a.config.xaxis.offsetY,a.config.xaxis.axisTicks.color);i.add(o),o.node.classList.add("apexcharts-xaxis-tick")}}}},{key:"getXAxisTicksPositions",value:function(){var t=this.w,e=[],i=this.xaxisLabels.length,a=t.globals.padHorizontal;if(t.globals.timescaleLabels.length>0)for(var s=0;s<i;s++)a=this.xaxisLabels[s].position,e.push(a);else for(var r=i,o=0;o<r;o++){var n=r;t.globals.isXNumeric&&"bar"!==t.config.chart.type&&(n-=1),a+=t.globals.gridWidth/n,e.push(a)}return e}},{key:"xAxisLabelCorrections",value:function(){var t=this.w,e=new m(this.ctx),i=t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"),s=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");if(t.globals.rotateXLabels||t.config.xaxis.labels.rotateAlways)for(var o=0;o<a.length;o++){var n=e.rotateAroundCenter(a[o]);n.y=n.y-1,n.x=n.x+1,a[o].setAttribute("transform","rotate(".concat(t.config.xaxis.labels.rotate," ").concat(n.x," ").concat(n.y,")")),a[o].setAttribute("text-anchor","end");i.setAttribute("transform","translate(0, ".concat(-10,")"));var l=a[o].childNodes;t.config.xaxis.labels.trim&&Array.prototype.forEach.call(l,(function(i){e.placeTextWithEllipsis(i,i.textContent,t.globals.xAxisLabelsHeight-("bottom"===t.config.legend.position?20:10))}))}else!function(){for(var i=t.globals.gridWidth/(t.globals.labels.length+1),s=0;s<a.length;s++){var r=a[s].childNodes;t.config.xaxis.labels.trim&&"datetime"!==t.config.xaxis.type&&Array.prototype.forEach.call(r,(function(t){e.placeTextWithEllipsis(t,t.textContent,i)}))}}();if(s.length>0){var h=s[s.length-1].getBBox(),c=s[0].getBBox();h.x<-20&&s[s.length-1].parentNode.removeChild(s[s.length-1]),c.x+c.width>t.globals.gridWidth&&!t.globals.isBarHorizontal&&s[0].parentNode.removeChild(s[0]);for(var d=0;d<r.length;d++)e.placeTextWithEllipsis(r[d],r[d].textContent,t.config.yaxis[0].labels.maxWidth-(t.config.yaxis[0].title.text?2*parseFloat(t.config.yaxis[0].title.style.fontSize):0)-15)}}}]),t}(),U=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.xaxisLabels=i.globals.labels.slice(),this.axesUtils=new G(e),this.isRangeBar=i.globals.seriesRangeBar.length,i.globals.timescaleLabels.length>0&&(this.xaxisLabels=i.globals.timescaleLabels.slice())}return r(t,[{key:"drawGridArea",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w,i=new m(this.ctx);null===t&&(t=i.group({class:"apexcharts-grid"}));var a=i.drawLine(e.globals.padHorizontal,1,e.globals.padHorizontal,e.globals.gridHeight,"transparent"),s=i.drawLine(e.globals.padHorizontal,e.globals.gridHeight,e.globals.gridWidth,e.globals.gridHeight,"transparent");return t.add(s),t.add(a),t}},{key:"drawGrid",value:function(){var t=null;return this.w.globals.axisCharts&&(t=this.renderGrid(),this.drawGridArea(t.el)),t}},{key:"createGridMask",value:function(){var t=this.w,e=t.globals,i=new m(this.ctx),a=Array.isArray(t.config.stroke.width)?0:t.config.stroke.width;if(Array.isArray(t.config.stroke.width)){var s=0;t.config.stroke.width.forEach((function(t){s=Math.max(s,t)})),a=s}e.dom.elGridRectMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elGridRectMask.setAttribute("id","gridRectMask".concat(e.cuid)),e.dom.elGridRectMarkerMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elGridRectMarkerMask.setAttribute("id","gridRectMarkerMask".concat(e.cuid)),e.dom.elForecastMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elForecastMask.setAttribute("id","forecastMask".concat(e.cuid)),e.dom.elNonForecastMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elNonForecastMask.setAttribute("id","nonForecastMask".concat(e.cuid));var r=t.config.chart.type,o=0,n=0;("bar"===r||"rangeBar"===r||"candlestick"===r||"boxPlot"===r||t.globals.comboBarCount>0)&&t.globals.isXNumeric&&!t.globals.isBarHorizontal&&(o=t.config.grid.padding.left,n=t.config.grid.padding.right,e.barPadForNumericAxis>o&&(o=e.barPadForNumericAxis,n=e.barPadForNumericAxis)),e.dom.elGridRect=i.drawRect(-a/2-o-2,-a/2,e.gridWidth+a+n+o+4,e.gridHeight+a,0,"#fff");var l=t.globals.markers.largestSize+1;e.dom.elGridRectMarker=i.drawRect(2*-l,2*-l,e.gridWidth+4*l,e.gridHeight+4*l,0,"#fff"),e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node),e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);var h=e.dom.baseEl.querySelector("defs");h.appendChild(e.dom.elGridRectMask),h.appendChild(e.dom.elForecastMask),h.appendChild(e.dom.elNonForecastMask),h.appendChild(e.dom.elGridRectMarkerMask)}},{key:"_drawGridLines",value:function(t){var e=t.i,i=t.x1,a=t.y1,s=t.x2,r=t.y2,o=t.xCount,n=t.parent,l=this.w;if(!(0===e&&l.globals.skipFirstTimelinelabel||e===o-1&&l.globals.skipLastTimelinelabel&&!l.config.xaxis.labels.formatter||"radar"===l.config.chart.type)){l.config.grid.xaxis.lines.show&&this._drawGridLine({x1:i,y1:a,x2:s,y2:r,parent:n});var h=0;if(l.globals.hasGroups&&"between"===l.config.xaxis.tickPlacement){var c=l.globals.groups;if(c){for(var d=0,g=0;d<e&&g<c.length;g++)d+=c[g].cols;d===e&&(h=.6*l.globals.xAxisLabelsHeight)}}new _(this.ctx).drawXaxisTicks(i,h,this.elg)}}},{key:"_drawGridLine",value:function(t){var e=t.x1,i=t.y1,a=t.x2,s=t.y2,r=t.parent,o=this.w,n=r.node.classList.contains("apexcharts-gridlines-horizontal"),l=o.config.grid.strokeDashArray,h=o.globals.barPadForNumericAxis,c=new m(this).drawLine(e-(n?h:0),i,a+(n?h:0),s,o.config.grid.borderColor,l);c.node.classList.add("apexcharts-gridline"),r.add(c)}},{key:"_drawGridBandRect",value:function(t){var e=t.c,i=t.x1,a=t.y1,s=t.x2,r=t.y2,o=t.type,n=this.w,l=new m(this.ctx),h=n.globals.barPadForNumericAxis;if("column"!==o||"datetime"!==n.config.xaxis.type){var c=n.config.grid[o].colors[e],d=l.drawRect(i-("row"===o?h:0),a,s+("row"===o?2*h:0),r,0,c,n.config.grid[o].opacity);this.elg.add(d),d.attr("clip-path","url(#gridRectMask".concat(n.globals.cuid,")")),d.node.classList.add("apexcharts-grid-".concat(o))}}},{key:"_drawXYLines",value:function(t){var e=this,i=t.xCount,a=t.tickAmount,s=this.w;if(s.config.grid.xaxis.lines.show||s.config.xaxis.axisTicks.show){var r,o=s.globals.padHorizontal,n=s.globals.gridHeight;s.globals.timescaleLabels.length?function(t){for(var a=t.xC,s=t.x1,r=t.y1,o=t.x2,n=t.y2,l=0;l<a;l++)s=e.xaxisLabels[l].position,o=e.xaxisLabels[l].position,e._drawGridLines({i:l,x1:s,y1:r,x2:o,y2:n,xCount:i,parent:e.elgridLinesV})}({xC:i,x1:o,y1:0,x2:r,y2:n}):(s.globals.isXNumeric&&(i=s.globals.xAxisScale.result.length),s.config.xaxis.convertedCatToNumeric&&(i=s.globals.xaxisLabelsCount),function(t){var a=t.xC,r=t.x1,o=t.y1,n=t.x2,l=t.y2;if(void 0!==s.config.xaxis.tickAmount&&"dataPoints"!==s.config.xaxis.tickAmount&&"on"===s.config.xaxis.tickPlacement)s.globals.dom.baseEl.querySelectorAll(".apexcharts-text.apexcharts-xaxis-label tspan:not(:empty)").forEach((function(t,a){var s=t.getBBox();e._drawGridLines({i:a,x1:s.x+s.width/2,y1:o,x2:s.x+s.width/2,y2:l,xCount:i,parent:e.elgridLinesV})}));else for(var h=0;h<a+(s.globals.isXNumeric?0:1);h++)0===h&&1===a&&1===s.globals.dataPoints&&(n=r=s.globals.gridWidth/2),e._drawGridLines({i:h,x1:r,y1:o,x2:n,y2:l,xCount:i,parent:e.elgridLinesV}),n=r+=s.globals.gridWidth/(s.globals.isXNumeric?a-1:a)}({xC:i,x1:o,y1:0,x2:r,y2:n}))}if(s.config.grid.yaxis.lines.show){var l=0,h=0,c=s.globals.gridWidth,d=a+1;this.isRangeBar&&(d=s.globals.labels.length);for(var g=0;g<d+(this.isRangeBar?1:0);g++)this._drawGridLine({x1:0,y1:l,x2:c,y2:h,parent:this.elgridLinesH}),h=l+=s.globals.gridHeight/(this.isRangeBar?d:a)}}},{key:"_drawInvertedXYLines",value:function(t){var e=t.xCount,i=this.w;if(i.config.grid.xaxis.lines.show||i.config.xaxis.axisTicks.show)for(var a,s=i.globals.padHorizontal,r=i.globals.gridHeight,o=0;o<e+1;o++){i.config.grid.xaxis.lines.show&&this._drawGridLine({x1:s,y1:0,x2:a,y2:r,parent:this.elgridLinesV}),new _(this.ctx).drawXaxisTicks(s,0,this.elg),a=s=s+i.globals.gridWidth/e+.3}if(i.config.grid.yaxis.lines.show)for(var n=0,l=0,h=i.globals.gridWidth,c=0;c<i.globals.dataPoints+1;c++)this._drawGridLine({x1:0,y1:n,x2:h,y2:l,parent:this.elgridLinesH}),l=n+=i.globals.gridHeight/i.globals.dataPoints}},{key:"renderGrid",value:function(){var t=this.w,e=new m(this.ctx);this.elg=e.group({class:"apexcharts-grid"}),this.elgridLinesH=e.group({class:"apexcharts-gridlines-horizontal"}),this.elgridLinesV=e.group({class:"apexcharts-gridlines-vertical"}),this.elg.add(this.elgridLinesH),this.elg.add(this.elgridLinesV),t.config.grid.show||(this.elgridLinesV.hide(),this.elgridLinesH.hide());for(var i,a=t.globals.yAxisScale.length?t.globals.yAxisScale[0].result.length-1:5,s=0;s<t.globals.series.length&&(void 0!==t.globals.yAxisScale[s]&&(a=t.globals.yAxisScale[s].result.length-1),!(a>2));s++);return!t.globals.isBarHorizontal||this.isRangeBar?(i=this.xaxisLabels.length,this.isRangeBar&&(a=t.globals.labels.length,t.config.xaxis.tickAmount&&t.config.xaxis.labels.formatter&&(i=t.config.xaxis.tickAmount)),this._drawXYLines({xCount:i,tickAmount:a})):(i=a,a=t.globals.xTickAmount,this._drawInvertedXYLines({xCount:i,tickAmount:a})),this.drawGridBands(i,a),{el:this.elg,xAxisTickWidth:t.globals.gridWidth/i}}},{key:"drawGridBands",value:function(t,e){var i=this.w;if(void 0!==i.config.grid.row.colors&&i.config.grid.row.colors.length>0)for(var a=0,s=i.globals.gridHeight/e,r=i.globals.gridWidth,o=0,n=0;o<e;o++,n++)n>=i.config.grid.row.colors.length&&(n=0),this._drawGridBandRect({c:n,x1:0,y1:a,x2:r,y2:s,type:"row"}),a+=i.globals.gridHeight/e;if(void 0!==i.config.grid.column.colors&&i.config.grid.column.colors.length>0)for(var l=i.globals.isBarHorizontal||"category"!==i.config.xaxis.type&&!i.config.xaxis.convertedCatToNumeric?t:t-1,h=i.globals.padHorizontal,c=i.globals.padHorizontal+i.globals.gridWidth/l,d=i.globals.gridHeight,g=0,u=0;g<t;g++,u++)u>=i.config.grid.column.colors.length&&(u=0),this._drawGridBandRect({c:u,x1:h,y1:0,x2:c,y2:d,type:"column"}),h+=i.globals.gridWidth/l}}]),t}(),q=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"niceScale",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4?arguments[4]:void 0,r=this.w,o=Math.abs(e-t);if("dataPoints"===(i=this._adjustTicksForSmallRange(i,a,o))&&(i=r.globals.dataPoints-1),t===Number.MIN_VALUE&&0===e||!x.isNumber(t)&&!x.isNumber(e)||t===Number.MIN_VALUE&&e===-Number.MAX_VALUE){t=0,e=i;var n=this.linearScale(t,e,i);return n}t>e?(console.warn("axis.min cannot be greater than axis.max"),e=t+.1):t===e&&(t=0===t?0:t-.5,e=0===e?2:e+.5);var l=[];o<1&&s&&("candlestick"===r.config.chart.type||"candlestick"===r.config.series[a].type||"boxPlot"===r.config.chart.type||"boxPlot"===r.config.series[a].type||r.globals.isRangeData)&&(e*=1.01);var h=i+1;h<2?h=2:h>2&&(h-=2);var c=o/h,d=Math.floor(x.log10(c)),g=Math.pow(10,d),u=Math.round(c/g);u<1&&(u=1);var p=u*g,f=p*Math.floor(t/p),b=p*Math.ceil(e/p),v=f;if(s&&o>2){for(;l.push(v),!((v+=p)>b););return{result:l,niceMin:l[0],niceMax:l[l.length-1]}}var m=t;(l=[]).push(m);for(var y=Math.abs(e-t)/i,w=0;w<=i;w++)m+=y,l.push(m);return l[l.length-2]>=e&&l.pop(),{result:l,niceMin:l[0],niceMax:l[l.length-1]}}},{key:"linearScale",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a=arguments.length>3?arguments[3]:void 0,s=Math.abs(e-t);"dataPoints"===(i=this._adjustTicksForSmallRange(i,a,s))&&(i=this.w.globals.dataPoints-1);var r=s/i;i===Number.MAX_VALUE&&(i=10,r=1);for(var o=[],n=t;i>=0;)o.push(n),n+=r,i-=1;return{result:o,niceMin:o[0],niceMax:o[o.length-1]}}},{key:"logarithmicScaleNice",value:function(t,e,i){e<=0&&(e=Math.max(t,i)),t<=0&&(t=Math.min(e,i));for(var a=[],s=Math.ceil(Math.log(e)/Math.log(i)+1),r=Math.floor(Math.log(t)/Math.log(i));r<s;r++)a.push(Math.pow(i,r));return{result:a,niceMin:a[0],niceMax:a[a.length-1]}}},{key:"logarithmicScale",value:function(t,e,i){e<=0&&(e=Math.max(t,i)),t<=0&&(t=Math.min(e,i));for(var a=[],s=Math.log(e)/Math.log(i),r=Math.log(t)/Math.log(i),o=s-r,n=Math.round(o),l=o/n,h=0,c=r;h<n;h++,c+=l)a.push(Math.pow(i,c));return a.push(Math.pow(i,s)),{result:a,niceMin:t,niceMax:e}}},{key:"_adjustTicksForSmallRange",value:function(t,e,i){var a=t;if(void 0!==e&&this.w.config.yaxis[e].labels.formatter&&void 0===this.w.config.yaxis[e].tickAmount){var s=this.w.config.yaxis[e].labels.formatter(1);x.isNumber(Number(s))&&!x.isFloat(s)&&(a=Math.ceil(i))}return a<t?a:t}},{key:"setYScaleForIndex",value:function(t,e,i){var a=this.w.globals,s=this.w.config,r=a.isBarHorizontal?s.xaxis:s.yaxis[t];void 0===a.yAxisScale[t]&&(a.yAxisScale[t]=[]);var o=Math.abs(i-e);if(r.logarithmic&&o<=5&&(a.invalidLogScale=!0),r.logarithmic&&o>5)a.allSeriesCollapsed=!1,a.yAxisScale[t]=this.logarithmicScale(e,i,r.logBase),a.yAxisScale[t]=r.forceNiceScale?this.logarithmicScaleNice(e,i,r.logBase):this.logarithmicScale(e,i,r.logBase);else if(i!==-Number.MAX_VALUE&&x.isNumber(i))if(a.allSeriesCollapsed=!1,void 0===r.min&&void 0===r.max||r.forceNiceScale){var n=void 0===s.yaxis[t].max&&void 0===s.yaxis[t].min||s.yaxis[t].forceNiceScale;a.yAxisScale[t]=this.niceScale(e,i,r.tickAmount?r.tickAmount:o<5&&o>1?o+1:5,t,n)}else a.yAxisScale[t]=this.linearScale(e,i,r.tickAmount,t);else a.yAxisScale[t]=this.linearScale(0,5,5)}},{key:"setXScale",value:function(t,e){var i=this.w,a=i.globals,s=i.config.xaxis,r=Math.abs(e-t);return e!==-Number.MAX_VALUE&&x.isNumber(e)?a.xAxisScale=this.linearScale(t,e,s.tickAmount?s.tickAmount:r<5&&r>1?r+1:5,0):a.xAxisScale=this.linearScale(0,5,5),a.xAxisScale}},{key:"setMultipleYScales",value:function(){var t=this,e=this.w.globals,i=this.w.config,a=e.minYArr.concat([]),s=e.maxYArr.concat([]),r=[];i.yaxis.forEach((function(e,o){var n=o;i.series.forEach((function(t,i){t.name===e.seriesName&&(n=i,o!==i?r.push({index:i,similarIndex:o,alreadyExists:!0}):r.push({index:i}))}));var l=a[n],h=s[n];t.setYScaleForIndex(o,l,h)})),this.sameScaleInMultipleAxes(a,s,r)}},{key:"sameScaleInMultipleAxes",value:function(t,e,i){var a=this,s=this.w.config,r=this.w.globals,o=[];i.forEach((function(t){t.alreadyExists&&(void 0===o[t.index]&&(o[t.index]=[]),o[t.index].push(t.index),o[t.index].push(t.similarIndex))})),r.yAxisSameScaleIndices=o,o.forEach((function(t,e){o.forEach((function(i,a){var s,r;e!==a&&(s=t,r=i,s.filter((function(t){return-1!==r.indexOf(t)}))).length>0&&(o[e]=o[e].concat(o[a]))}))}));var n=o.map((function(t){return t.filter((function(e,i){return t.indexOf(e)===i}))})).map((function(t){return t.sort()}));o=o.filter((function(t){return!!t}));var l=n.slice(),h=l.map((function(t){return JSON.stringify(t)}));l=l.filter((function(t,e){return h.indexOf(JSON.stringify(t))===e}));var c=[],d=[];t.forEach((function(t,i){l.forEach((function(a,s){a.indexOf(i)>-1&&(void 0===c[s]&&(c[s]=[],d[s]=[]),c[s].push({key:i,value:t}),d[s].push({key:i,value:e[i]}))}))}));var g=Array.apply(null,Array(l.length)).map(Number.prototype.valueOf,Number.MIN_VALUE),u=Array.apply(null,Array(l.length)).map(Number.prototype.valueOf,-Number.MAX_VALUE);c.forEach((function(t,e){t.forEach((function(t,i){g[e]=Math.min(t.value,g[e])}))})),d.forEach((function(t,e){t.forEach((function(t,i){u[e]=Math.max(t.value,u[e])}))})),t.forEach((function(t,e){d.forEach((function(t,i){var o=g[i],n=u[i];s.chart.stacked&&(n=0,t.forEach((function(t,e){t.value!==-Number.MAX_VALUE&&(n+=t.value),o!==Number.MIN_VALUE&&(o+=c[i][e].value)}))),t.forEach((function(i,l){t[l].key===e&&(void 0!==s.yaxis[e].min&&(o="function"==typeof s.yaxis[e].min?s.yaxis[e].min(r.minY):s.yaxis[e].min),void 0!==s.yaxis[e].max&&(n="function"==typeof s.yaxis[e].max?s.yaxis[e].max(r.maxY):s.yaxis[e].max),a.setYScaleForIndex(e,o,n))}))}))}))}},{key:"autoScaleY",value:function(t,e,i){t||(t=this);var a=t.w;if(a.globals.isMultipleYAxis||a.globals.collapsedSeries.length)return console.warn("autoScaleYaxis is not supported in a multi-yaxis chart."),e;var s=a.globals.seriesX[0],r=a.config.chart.stacked;return e.forEach((function(t,o){for(var n=0,l=0;l<s.length;l++)if(s[l]>=i.xaxis.min){n=l;break}var h,c,d=a.globals.minYArr[o],g=a.globals.maxYArr[o],u=a.globals.stackedSeriesTotals;a.globals.series.forEach((function(o,l){var p=o[n];r?(p=u[n],h=c=p,u.forEach((function(t,e){s[e]<=i.xaxis.max&&s[e]>=i.xaxis.min&&(t>c&&null!==t&&(c=t),o[e]<h&&null!==o[e]&&(h=o[e]))}))):(h=c=p,o.forEach((function(t,e){if(s[e]<=i.xaxis.max&&s[e]>=i.xaxis.min){var r=t,o=t;a.globals.series.forEach((function(i,a){null!==t&&(r=Math.min(i[e],r),o=Math.max(i[e],o))})),o>c&&null!==o&&(c=o),r<h&&null!==r&&(h=r)}}))),void 0===h&&void 0===c&&(h=d,c=g),c*=c<0?.9:1.1,0===(h*=h<0?1.1:.9)&&0===c&&(h=-1,c=1),c<0&&c<g&&(c=g),h<0&&h>d&&(h=d),e.length>1?(e[l].min=void 0===t.min?h:t.min,e[l].max=void 0===t.max?c:t.max):(e[0].min=void 0===t.min?h:t.min,e[0].max=void 0===t.max?c:t.max)}))})),e}}]),t}(),Z=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.scales=new q(e)}return r(t,[{key:"init",value:function(){this.setYRange(),this.setXRange(),this.setZRange()}},{key:"getMinYMaxY",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-Number.MAX_VALUE,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=this.w.config,r=this.w.globals,o=-Number.MAX_VALUE,n=Number.MIN_VALUE;null===a&&(a=t+1);var l=r.series,h=l,c=l;"candlestick"===s.chart.type?(h=r.seriesCandleL,c=r.seriesCandleH):"boxPlot"===s.chart.type?(h=r.seriesCandleO,c=r.seriesCandleC):r.isRangeData&&(h=r.seriesRangeStart,c=r.seriesRangeEnd);for(var d=t;d<a;d++){r.dataPoints=Math.max(r.dataPoints,l[d].length),r.categoryLabels.length&&(r.dataPoints=r.categoryLabels.filter((function(t){return void 0!==t})).length);for(var g=0;g<r.series[d].length;g++){var u=l[d][g];null!==u&&x.isNumber(u)?(void 0!==c[d][g]&&(o=Math.max(o,c[d][g]),e=Math.min(e,c[d][g])),void 0!==h[d][g]&&(e=Math.min(e,h[d][g]),i=Math.max(i,h[d][g])),"candlestick"!==this.w.config.chart.type&&"boxPlot"!==this.w.config.chart.type||(void 0!==r.seriesCandleC[d][g]&&(o=Math.max(o,r.seriesCandleO[d][g]),o=Math.max(o,r.seriesCandleH[d][g]),o=Math.max(o,r.seriesCandleL[d][g]),o=Math.max(o,r.seriesCandleC[d][g]),"boxPlot"===this.w.config.chart.type&&(o=Math.max(o,r.seriesCandleM[d][g]))),!s.series[d].type||"candlestick"===s.series[d].type&&"boxPlot"===s.series[d].type||(o=Math.max(o,r.series[d][g]),e=Math.min(e,r.series[d][g])),i=o),r.seriesGoals[d]&&r.seriesGoals[d][g]&&Array.isArray(r.seriesGoals[d][g])&&r.seriesGoals[d][g].forEach((function(t){n!==Number.MIN_VALUE&&(n=Math.min(n,t.value),e=n),o=Math.max(o,t.value),i=o})),x.isFloat(u)&&(u=x.noExponents(u),r.yValueDecimal=Math.max(r.yValueDecimal,u.toString().split(".")[1].length)),n>h[d][g]&&h[d][g]<0&&(n=h[d][g])):r.hasNullValues=!0}}return"rangeBar"===s.chart.type&&r.seriesRangeStart.length&&r.isBarHorizontal&&(n=e),"bar"===s.chart.type&&(n<0&&o<0&&(o=0),n===Number.MIN_VALUE&&(n=0)),{minY:n,maxY:o,lowestY:e,highestY:i}}},{key:"setYRange",value:function(){var t=this.w.globals,e=this.w.config;t.maxY=-Number.MAX_VALUE,t.minY=Number.MIN_VALUE;var i=Number.MAX_VALUE;if(t.isMultipleYAxis)for(var a=0;a<t.series.length;a++){var s=this.getMinYMaxY(a,i,null,a+1);t.minYArr.push(s.minY),t.maxYArr.push(s.maxY),i=s.lowestY}var r=this.getMinYMaxY(0,i,null,t.series.length);if(t.minY=r.minY,t.maxY=r.maxY,i=r.lowestY,e.chart.stacked&&this._setStackedMinMax(),("line"===e.chart.type||"area"===e.chart.type||"candlestick"===e.chart.type||"boxPlot"===e.chart.type||"rangeBar"===e.chart.type&&!t.isBarHorizontal)&&t.minY===Number.MIN_VALUE&&i!==-Number.MAX_VALUE&&i!==t.maxY){var o=t.maxY-i;(i>=0&&i<=10||void 0!==e.yaxis[0].min||void 0!==e.yaxis[0].max)&&(o=0),t.minY=i-5*o/100,i>0&&t.minY<0&&(t.minY=0),t.maxY=t.maxY+5*o/100}if(e.yaxis.forEach((function(e,i){void 0!==e.max&&("number"==typeof e.max?t.maxYArr[i]=e.max:"function"==typeof e.max&&(t.maxYArr[i]=e.max(t.isMultipleYAxis?t.maxYArr[i]:t.maxY)),t.maxY=t.maxYArr[i]),void 0!==e.min&&("number"==typeof e.min?t.minYArr[i]=e.min:"function"==typeof e.min&&(t.minYArr[i]=e.min(t.isMultipleYAxis?t.minYArr[i]===Number.MIN_VALUE?0:t.minYArr[i]:t.minY)),t.minY=t.minYArr[i])})),t.isBarHorizontal){["min","max"].forEach((function(i){void 0!==e.xaxis[i]&&"number"==typeof e.xaxis[i]&&("min"===i?t.minY=e.xaxis[i]:t.maxY=e.xaxis[i])}))}return t.isMultipleYAxis?(this.scales.setMultipleYScales(),t.minY=i,t.yAxisScale.forEach((function(e,i){t.minYArr[i]=e.niceMin,t.maxYArr[i]=e.niceMax}))):(this.scales.setYScaleForIndex(0,t.minY,t.maxY),t.minY=t.yAxisScale[0].niceMin,t.maxY=t.yAxisScale[0].niceMax,t.minYArr[0]=t.yAxisScale[0].niceMin,t.maxYArr[0]=t.yAxisScale[0].niceMax),{minY:t.minY,maxY:t.maxY,minYArr:t.minYArr,maxYArr:t.maxYArr,yAxisScale:t.yAxisScale}}},{key:"setXRange",value:function(){var t=this.w.globals,e=this.w.config,i="numeric"===e.xaxis.type||"datetime"===e.xaxis.type||"category"===e.xaxis.type&&!t.noLabelsProvided||t.noLabelsProvided||t.isXNumeric;if(t.isXNumeric&&function(){for(var e=0;e<t.series.length;e++)if(t.labels[e])for(var i=0;i<t.labels[e].length;i++)null!==t.labels[e][i]&&x.isNumber(t.labels[e][i])&&(t.maxX=Math.max(t.maxX,t.labels[e][i]),t.initialMaxX=Math.max(t.maxX,t.labels[e][i]),t.minX=Math.min(t.minX,t.labels[e][i]),t.initialMinX=Math.min(t.minX,t.labels[e][i]))}(),t.noLabelsProvided&&0===e.xaxis.categories.length&&(t.maxX=t.labels[t.labels.length-1],t.initialMaxX=t.labels[t.labels.length-1],t.minX=1,t.initialMinX=1),t.isXNumeric||t.noLabelsProvided||t.dataFormatXNumeric){var a;if(void 0===e.xaxis.tickAmount?(a=Math.round(t.svgWidth/150),"numeric"===e.xaxis.type&&t.dataPoints<30&&(a=t.dataPoints-1),a>t.dataPoints&&0!==t.dataPoints&&(a=t.dataPoints-1)):"dataPoints"===e.xaxis.tickAmount?(t.series.length>1&&(a=t.series[t.maxValsInArrayIndex].length-1),t.isXNumeric&&(a=t.maxX-t.minX-1)):a=e.xaxis.tickAmount,t.xTickAmount=a,void 0!==e.xaxis.max&&"number"==typeof e.xaxis.max&&(t.maxX=e.xaxis.max),void 0!==e.xaxis.min&&"number"==typeof e.xaxis.min&&(t.minX=e.xaxis.min),void 0!==e.xaxis.range&&(t.minX=t.maxX-e.xaxis.range),t.minX!==Number.MAX_VALUE&&t.maxX!==-Number.MAX_VALUE)if(e.xaxis.convertedCatToNumeric&&!t.dataFormatXNumeric){for(var s=[],r=t.minX-1;r<t.maxX;r++)s.push(r+1);t.xAxisScale={result:s,niceMin:s[0],niceMax:s[s.length-1]}}else t.xAxisScale=this.scales.setXScale(t.minX,t.maxX);else t.xAxisScale=this.scales.linearScale(1,a,a),t.noLabelsProvided&&t.labels.length>0&&(t.xAxisScale=this.scales.linearScale(1,t.labels.length,a-1),t.seriesX=t.labels.slice());i&&(t.labels=t.xAxisScale.result.slice())}return t.isBarHorizontal&&t.labels.length&&(t.xTickAmount=t.labels.length),this._handleSingleDataPoint(),this._getMinXDiff(),{minX:t.minX,maxX:t.maxX}}},{key:"setZRange",value:function(){var t=this.w.globals;if(t.isDataXYZ)for(var e=0;e<t.series.length;e++)if(void 0!==t.seriesZ[e])for(var i=0;i<t.seriesZ[e].length;i++)null!==t.seriesZ[e][i]&&x.isNumber(t.seriesZ[e][i])&&(t.maxZ=Math.max(t.maxZ,t.seriesZ[e][i]),t.minZ=Math.min(t.minZ,t.seriesZ[e][i]))}},{key:"_handleSingleDataPoint",value:function(){var t=this.w.globals,e=this.w.config;if(t.minX===t.maxX){var i=new R(this.ctx);if("datetime"===e.xaxis.type){var a=i.getDate(t.minX);e.xaxis.labels.datetimeUTC?a.setUTCDate(a.getUTCDate()-2):a.setDate(a.getDate()-2),t.minX=new Date(a).getTime();var s=i.getDate(t.maxX);e.xaxis.labels.datetimeUTC?s.setUTCDate(s.getUTCDate()+2):s.setDate(s.getDate()+2),t.maxX=new Date(s).getTime()}else("numeric"===e.xaxis.type||"category"===e.xaxis.type&&!t.noLabelsProvided)&&(t.minX=t.minX-2,t.initialMinX=t.minX,t.maxX=t.maxX+2,t.initialMaxX=t.maxX)}}},{key:"_getMinXDiff",value:function(){var t=this.w.globals;t.isXNumeric&&t.seriesX.forEach((function(e,i){1===e.length&&e.push(t.seriesX[t.maxValsInArrayIndex][t.seriesX[t.maxValsInArrayIndex].length-1]);var a=e.slice();a.sort((function(t,e){return t-e})),a.forEach((function(e,i){if(i>0){var s=e-a[i-1];s>0&&(t.minXDiff=Math.min(s,t.minXDiff))}})),1!==t.dataPoints&&t.minXDiff!==Number.MAX_VALUE||(t.minXDiff=.5)}))}},{key:"_setStackedMinMax",value:function(){var t=this.w.globals,e=[],i=[];if(t.series.length)for(var a=0;a<t.series[t.maxValsInArrayIndex].length;a++)for(var s=0,r=0,o=0;o<t.series.length;o++)null!==t.series[o][a]&&x.isNumber(t.series[o][a])&&(t.series[o][a]>0?s=s+parseFloat(t.series[o][a])+1e-4:r+=parseFloat(t.series[o][a])),o===t.series.length-1&&(e.push(s),i.push(r));for(var n=0;n<e.length;n++)t.maxY=Math.max(t.maxY,e[n]),t.minY=Math.min(t.minY,i[n])}}]),t}(),$=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.xaxisFontSize=i.config.xaxis.labels.style.fontSize,this.axisFontFamily=i.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=i.config.xaxis.labels.style.colors,this.isCategoryBarHorizontal="bar"===i.config.chart.type&&i.config.plotOptions.bar.horizontal,this.xAxisoffX=0,"bottom"===i.config.xaxis.position&&(this.xAxisoffX=i.globals.gridHeight),this.drawnLabels=[],this.axesUtils=new G(e)}return r(t,[{key:"drawYaxis",value:function(t){var e=this,i=this.w,a=new m(this.ctx),s=i.config.yaxis[t].labels.style,r=s.fontSize,o=s.fontFamily,n=s.fontWeight,l=a.group({class:"apexcharts-yaxis",rel:t,transform:"translate("+i.globals.translateYAxisX[t]+", 0)"});if(this.axesUtils.isYAxisHidden(t))return l;var h=a.group({class:"apexcharts-yaxis-texts-g"});l.add(h);var c=i.globals.yAxisScale[t].result.length-1,d=i.globals.gridHeight/c,g=i.globals.translateY,u=i.globals.yLabelFormatters[t],p=i.globals.yAxisScale[t].result.slice();p=this.axesUtils.checkForReversedLabels(t,p);var f="";if(i.config.yaxis[t].labels.show)for(var x=function(l){var x=p[l];x=u(x,l,i);var b=i.config.yaxis[t].labels.padding;i.config.yaxis[t].opposite&&0!==i.config.yaxis.length&&(b*=-1);var v=e.axesUtils.getYAxisForeColor(s.colors,t),m=a.drawText({x:b,y:g+c/10+i.config.yaxis[t].labels.offsetY+1,text:x,textAnchor:i.config.yaxis[t].opposite?"start":"end",fontSize:r,fontFamily:o,fontWeight:n,maxWidth:i.config.yaxis[t].labels.maxWidth,foreColor:Array.isArray(v)?v[l]:v,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+s.cssClass});l===c&&(f=m),h.add(m);var y=document.createElementNS(i.globals.SVGNS,"title");if(y.textContent=Array.isArray(x)?x.join(" "):x,m.node.appendChild(y),0!==i.config.yaxis[t].labels.rotate){var w=a.rotateAroundCenter(f.node),k=a.rotateAroundCenter(m.node);m.node.setAttribute("transform","rotate(".concat(i.config.yaxis[t].labels.rotate," ").concat(w.x," ").concat(k.y,")"))}g+=d},b=c;b>=0;b--)x(b);if(void 0!==i.config.yaxis[t].title.text){var v=a.group({class:"apexcharts-yaxis-title"}),y=0;i.config.yaxis[t].opposite&&(y=i.globals.translateYAxisX[t]);var w=a.drawText({x:y,y:i.globals.gridHeight/2+i.globals.translateY+i.config.yaxis[t].title.offsetY,text:i.config.yaxis[t].title.text,textAnchor:"end",foreColor:i.config.yaxis[t].title.style.color,fontSize:i.config.yaxis[t].title.style.fontSize,fontWeight:i.config.yaxis[t].title.style.fontWeight,fontFamily:i.config.yaxis[t].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+i.config.yaxis[t].title.style.cssClass});v.add(w),l.add(v)}var k=i.config.yaxis[t].axisBorder,A=31+k.offsetX;if(i.config.yaxis[t].opposite&&(A=-31-k.offsetX),k.show){var S=a.drawLine(A,i.globals.translateY+k.offsetY-2,A,i.globals.gridHeight+i.globals.translateY+k.offsetY+2,k.color,0,k.width);l.add(S)}return i.config.yaxis[t].axisTicks.show&&this.axesUtils.drawYAxisTicks(A,c,k,i.config.yaxis[t].axisTicks,t,d,l),l}},{key:"drawYaxisInversed",value:function(t){var e=this.w,i=new m(this.ctx),a=i.group({class:"apexcharts-xaxis apexcharts-yaxis-inversed"}),s=i.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(e.globals.translateXAxisX,", ").concat(e.globals.translateXAxisY,")")});a.add(s);var r=e.globals.yAxisScale[t].result.length-1,o=e.globals.gridWidth/r+.1,n=o+e.config.xaxis.labels.offsetX,l=e.globals.xLabelFormatter,h=e.globals.yAxisScale[t].result.slice(),c=e.globals.timescaleLabels;c.length>0&&(this.xaxisLabels=c.slice(),r=(h=c.slice()).length),h=this.axesUtils.checkForReversedLabels(t,h);var d=c.length;if(e.config.xaxis.labels.show)for(var g=d?0:r;d?g<d:g>=0;d?g++:g--){var u=h[g];u=l(u,g,e);var p=e.globals.gridWidth+e.globals.padHorizontal-(n-o+e.config.xaxis.labels.offsetX);if(c.length){var f=this.axesUtils.getLabel(h,c,p,g,this.drawnLabels,this.xaxisFontSize);p=f.x,u=f.text,this.drawnLabels.push(f.text),0===g&&e.globals.skipFirstTimelinelabel&&(u=""),g===h.length-1&&e.globals.skipLastTimelinelabel&&(u="")}var x=i.drawText({x:p,y:this.xAxisoffX+e.config.xaxis.labels.offsetY+30-("top"===e.config.xaxis.position?e.globals.xAxisHeight+e.config.xaxis.axisTicks.height-2:0),text:u,textAnchor:"middle",foreColor:Array.isArray(this.xaxisForeColors)?this.xaxisForeColors[t]:this.xaxisForeColors,fontSize:this.xaxisFontSize,fontFamily:this.xaxisFontFamily,fontWeight:e.config.xaxis.labels.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-xaxis-label "+e.config.xaxis.labels.style.cssClass});s.add(x),x.tspan(u);var b=document.createElementNS(e.globals.SVGNS,"title");b.textContent=u,x.node.appendChild(b),n+=o}return this.inversedYAxisTitleText(a),this.inversedYAxisBorder(a),a}},{key:"inversedYAxisBorder",value:function(t){var e=this.w,i=new m(this.ctx),a=e.config.xaxis.axisBorder;if(a.show){var s=0;"bar"===e.config.chart.type&&e.globals.isXNumeric&&(s-=15);var r=i.drawLine(e.globals.padHorizontal+s+a.offsetX,this.xAxisoffX,e.globals.gridWidth,this.xAxisoffX,a.color,0,a.height);t.add(r)}}},{key:"inversedYAxisTitleText",value:function(t){var e=this.w,i=new m(this.ctx);if(void 0!==e.config.xaxis.title.text){var a=i.group({class:"apexcharts-xaxis-title apexcharts-yaxis-title-inversed"}),s=i.drawText({x:e.globals.gridWidth/2+e.config.xaxis.title.offsetX,y:this.xAxisoffX+parseFloat(this.xaxisFontSize)+parseFloat(e.config.xaxis.title.style.fontSize)+e.config.xaxis.title.offsetY+20,text:e.config.xaxis.title.text,textAnchor:"middle",fontSize:e.config.xaxis.title.style.fontSize,fontFamily:e.config.xaxis.title.style.fontFamily,fontWeight:e.config.xaxis.title.style.fontWeight,foreColor:e.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+e.config.xaxis.title.style.cssClass});a.add(s),t.add(a)}}},{key:"yAxisTitleRotate",value:function(t,e){var i=this.w,a=new m(this.ctx),s={width:0,height:0},r={width:0,height:0},o=i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-texts-g"));null!==o&&(s=o.getBoundingClientRect());var n=i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-title text"));if(null!==n&&(r=n.getBoundingClientRect()),null!==n){var l=this.xPaddingForYAxisTitle(t,s,r,e);n.setAttribute("x",l.xPos-(e?10:0))}if(null!==n){var h=a.rotateAroundCenter(n);n.setAttribute("transform","rotate(".concat(e?-1*i.config.yaxis[t].title.rotate:i.config.yaxis[t].title.rotate," ").concat(h.x," ").concat(h.y,")"))}}},{key:"xPaddingForYAxisTitle",value:function(t,e,i,a){var s=this.w,r=0,o=0,n=10;return void 0===s.config.yaxis[t].title.text||t<0?{xPos:o,padd:0}:(a?(o=e.width+s.config.yaxis[t].title.offsetX+i.width/2+n/2,0===(r+=1)&&(o-=n/2)):(o=-1*e.width+s.config.yaxis[t].title.offsetX+n/2+i.width/2,s.globals.isBarHorizontal&&(n=25,o=-1*e.width-s.config.yaxis[t].title.offsetX-n)),{xPos:o,padd:n})}},{key:"setYAxisXPosition",value:function(t,e){var i=this.w,a=0,s=0,r=18,o=1;i.config.yaxis.length>1&&(this.multipleYs=!0),i.config.yaxis.map((function(n,l){var h=i.globals.ignoreYAxisIndexes.indexOf(l)>-1||!n.show||n.floating||0===t[l].width,c=t[l].width+e[l].width;n.opposite?i.globals.isBarHorizontal?(s=i.globals.gridWidth+i.globals.translateX-1,i.globals.translateYAxisX[l]=s-n.labels.offsetX):(s=i.globals.gridWidth+i.globals.translateX+o,h||(o=o+c+20),i.globals.translateYAxisX[l]=s-n.labels.offsetX+20):(a=i.globals.translateX-r,h||(r=r+c+20),i.globals.translateYAxisX[l]=a+n.labels.offsetX)}))}},{key:"setYAxisTextAlignments",value:function(){var t=this.w,e=t.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");(e=x.listToArray(e)).forEach((function(e,i){var a=t.config.yaxis[i];if(a&&void 0!==a.labels.align){var s=t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i,"'] .apexcharts-yaxis-texts-g")),r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i,"'] .apexcharts-yaxis-label"));r=x.listToArray(r);var o=s.getBoundingClientRect();"left"===a.labels.align?(r.forEach((function(t,e){t.setAttribute("text-anchor","start")})),a.opposite||s.setAttribute("transform","translate(-".concat(o.width,", 0)"))):"center"===a.labels.align?(r.forEach((function(t,e){t.setAttribute("text-anchor","middle")})),s.setAttribute("transform","translate(".concat(o.width/2*(a.opposite?1:-1),", 0)"))):"right"===a.labels.align&&(r.forEach((function(t,e){t.setAttribute("text-anchor","end")})),a.opposite&&s.setAttribute("transform","translate(".concat(o.width,", 0)")))}}))}}]),t}(),J=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.documentEvent=x.bind(this.documentEvent,this)}return r(t,[{key:"addEventListener",value:function(t,e){var i=this.w;i.globals.events.hasOwnProperty(t)?i.globals.events[t].push(e):i.globals.events[t]=[e]}},{key:"removeEventListener",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){var a=i.globals.events[t].indexOf(e);-1!==a&&i.globals.events[t].splice(a,1)}}},{key:"fireEvent",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){e&&e.length||(e=[]);for(var a=i.globals.events[t],s=a.length,r=0;r<s;r++)a[r].apply(null,e)}}},{key:"setupEventHandlers",value:function(){var t=this,e=this.w,i=this.ctx,a=e.globals.dom.baseEl.querySelector(e.globals.chartClass);this.ctx.eventList.forEach((function(t){a.addEventListener(t,(function(t){var a=Object.assign({},e,{seriesIndex:e.globals.capturedSeriesIndex,dataPointIndex:e.globals.capturedDataPointIndex});"mousemove"===t.type||"touchmove"===t.type?"function"==typeof e.config.chart.events.mouseMove&&e.config.chart.events.mouseMove(t,i,a):"mouseleave"===t.type||"touchleave"===t.type?"function"==typeof e.config.chart.events.mouseLeave&&e.config.chart.events.mouseLeave(t,i,a):("mouseup"===t.type&&1===t.which||"touchend"===t.type)&&("function"==typeof e.config.chart.events.click&&e.config.chart.events.click(t,i,a),i.ctx.events.fireEvent("click",[t,i,a]))}),{capture:!1,passive:!0})})),this.ctx.eventList.forEach((function(i){e.globals.dom.baseEl.addEventListener(i,t.documentEvent,{passive:!0})})),this.ctx.core.setupBrushHandler()}},{key:"documentEvent",value:function(t){var e=this.w,i=t.target.className;if("click"===t.type){var a=e.globals.dom.baseEl.querySelector(".apexcharts-menu");a&&a.classList.contains("apexcharts-menu-open")&&"apexcharts-menu-icon"!==i&&a.classList.remove("apexcharts-menu-open")}e.globals.clientX="touchmove"===t.type?t.touches[0].clientX:t.clientX,e.globals.clientY="touchmove"===t.type?t.touches[0].clientY:t.clientY}}]),t}(),Q=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"setCurrentLocaleValues",value:function(t){var e=this.w.config.chart.locales;window.Apex.chart&&window.Apex.chart.locales&&window.Apex.chart.locales.length>0&&(e=this.w.config.chart.locales.concat(window.Apex.chart.locales));var i=e.filter((function(e){return e.name===t}))[0];if(!i)throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");var a=x.extend(C,i);this.w.globals.locale=a.options}}]),t}(),K=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"drawAxis",value:function(t,e){var i,a,s=this.w.globals,r=this.w.config,o=new _(this.ctx),n=new $(this.ctx);s.axisCharts&&"radar"!==t&&(s.isBarHorizontal?(a=n.drawYaxisInversed(0),i=o.drawXaxisInversed(0),s.dom.elGraphical.add(i),s.dom.elGraphical.add(a)):(i=o.drawXaxis(),s.dom.elGraphical.add(i),r.yaxis.map((function(t,e){-1===s.ignoreYAxisIndexes.indexOf(e)&&(a=n.drawYaxis(e),s.dom.Paper.add(a))}))))}}]),t}(),tt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"drawXCrosshairs",value:function(){var t=this.w,e=new m(this.ctx),i=new v(this.ctx),a=t.config.xaxis.crosshairs.fill.gradient,s=t.config.xaxis.crosshairs.dropShadow,r=t.config.xaxis.crosshairs.fill.type,o=a.colorFrom,n=a.colorTo,l=a.opacityFrom,h=a.opacityTo,c=a.stops,d=s.enabled,g=s.left,u=s.top,p=s.blur,f=s.color,b=s.opacity,y=t.config.xaxis.crosshairs.fill.color;if(t.config.xaxis.crosshairs.show){"gradient"===r&&(y=e.drawGradient("vertical",o,n,l,h,null,c,null));var w=e.drawRect();1===t.config.xaxis.crosshairs.width&&(w=e.drawLine());var k=t.globals.gridHeight;(!x.isNumber(k)||k<0)&&(k=0);var A=t.config.xaxis.crosshairs.width;(!x.isNumber(A)||A<0)&&(A=0),w.attr({class:"apexcharts-xcrosshairs",x:0,y:0,y2:k,width:A,height:k,fill:y,filter:"none","fill-opacity":t.config.xaxis.crosshairs.opacity,stroke:t.config.xaxis.crosshairs.stroke.color,"stroke-width":t.config.xaxis.crosshairs.stroke.width,"stroke-dasharray":t.config.xaxis.crosshairs.stroke.dashArray}),d&&(w=i.dropShadow(w,{left:g,top:u,blur:p,color:f,opacity:b})),t.globals.dom.elGraphical.add(w)}}},{key:"drawYCrosshairs",value:function(){var t=this.w,e=new m(this.ctx),i=t.config.yaxis[0].crosshairs,a=t.globals.barPadForNumericAxis;if(t.config.yaxis[0].crosshairs.show){var s=e.drawLine(-a,0,t.globals.gridWidth+a,0,i.stroke.color,i.stroke.dashArray,i.stroke.width);s.attr({class:"apexcharts-ycrosshairs"}),t.globals.dom.elGraphical.add(s)}var r=e.drawLine(-a,0,t.globals.gridWidth+a,0,i.stroke.color,0,0);r.attr({class:"apexcharts-ycrosshairs-hidden"}),t.globals.dom.elGraphical.add(r)}}]),t}(),et=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"checkResponsiveConfig",value:function(t){var e=this,i=this.w,a=i.config;if(0!==a.responsive.length){var s=a.responsive.slice();s.sort((function(t,e){return t.breakpoint>e.breakpoint?1:e.breakpoint>t.breakpoint?-1:0})).reverse();var r=new N({}),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=s[0].breakpoint,o=window.innerWidth>0?window.innerWidth:screen.width;if(o>a){var n=y.extendArrayProps(r,i.globals.initialConfig,i);t=x.extend(n,t),t=x.extend(i.config,t),e.overrideResponsiveOptions(t)}else for(var l=0;l<s.length;l++)o<s[l].breakpoint&&(t=y.extendArrayProps(r,s[l].options,i),t=x.extend(i.config,t),e.overrideResponsiveOptions(t))};if(t){var n=y.extendArrayProps(r,t,i);n=x.extend(i.config,n),o(n=x.extend(n,t))}else o({})}}},{key:"overrideResponsiveOptions",value:function(t){var e=new N(t).init({responsiveOverride:!0});this.w.config=e}}]),t}(),it=function(){function t(e){a(this,t),this.ctx=e,this.colors=[],this.w=e.w;var i=this.w;this.isColorFn=!1,this.isHeatmapDistributed="treemap"===i.config.chart.type&&i.config.plotOptions.treemap.distributed||"heatmap"===i.config.chart.type&&i.config.plotOptions.heatmap.distributed,this.isBarDistributed=i.config.plotOptions.bar.distributed&&("bar"===i.config.chart.type||"rangeBar"===i.config.chart.type)}return r(t,[{key:"init",value:function(){this.setDefaultColors()}},{key:"setDefaultColors",value:function(){var t=this,e=this.w,i=new x;if(e.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(e.config.theme.mode)),void 0===e.config.colors?e.globals.colors=this.predefined():(e.globals.colors=e.config.colors,Array.isArray(e.config.colors)&&e.config.colors.length>0&&"function"==typeof e.config.colors[0]&&(e.globals.colors=e.config.series.map((function(i,a){var s=e.config.colors[a];return s||(s=e.config.colors[0]),"function"==typeof s?(t.isColorFn=!0,s({value:e.globals.axisCharts?e.globals.series[a][0]?e.globals.series[a][0]:0:e.globals.series[a],seriesIndex:a,dataPointIndex:a,w:e})):s})))),e.globals.seriesColors.map((function(t,i){t&&(e.globals.colors[i]=t)})),e.config.theme.monochrome.enabled){var a=[],s=e.globals.series.length;(this.isBarDistributed||this.isHeatmapDistributed)&&(s=e.globals.series[0].length*e.globals.series.length);for(var r=e.config.theme.monochrome.color,o=1/(s/e.config.theme.monochrome.shadeIntensity),n=e.config.theme.monochrome.shadeTo,l=0,h=0;h<s;h++){var c=void 0;"dark"===n?(c=i.shadeColor(-1*l,r),l+=o):(c=i.shadeColor(l,r),l+=o),a.push(c)}e.globals.colors=a.slice()}var d=e.globals.colors.slice();this.pushExtraColors(e.globals.colors);["fill","stroke"].forEach((function(i){void 0===e.config[i].colors?e.globals[i].colors=t.isColorFn?e.config.colors:d:e.globals[i].colors=e.config[i].colors.slice(),t.pushExtraColors(e.globals[i].colors)})),void 0===e.config.dataLabels.style.colors?e.globals.dataLabels.style.colors=d:e.globals.dataLabels.style.colors=e.config.dataLabels.style.colors.slice(),this.pushExtraColors(e.globals.dataLabels.style.colors,50),void 0===e.config.plotOptions.radar.polygons.fill.colors?e.globals.radarPolygons.fill.colors=["dark"===e.config.theme.mode?"#424242":"none"]:e.globals.radarPolygons.fill.colors=e.config.plotOptions.radar.polygons.fill.colors.slice(),this.pushExtraColors(e.globals.radarPolygons.fill.colors,20),void 0===e.config.markers.colors?e.globals.markers.colors=d:e.globals.markers.colors=e.config.markers.colors.slice(),this.pushExtraColors(e.globals.markers.colors)}},{key:"pushExtraColors",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.w,s=e||a.globals.series.length;if(null===i&&(i=this.isBarDistributed||this.isHeatmapDistributed||"heatmap"===a.config.chart.type&&a.config.plotOptions.heatmap.colorScale.inverse),i&&a.globals.series.length&&(s=a.globals.series[a.globals.maxValsInArrayIndex].length*a.globals.series.length),t.length<s)for(var r=s-t.length,o=0;o<r;o++)t.push(t[o])}},{key:"updateThemeOptions",value:function(t){t.chart=t.chart||{},t.tooltip=t.tooltip||{};var e=t.theme.mode||"light",i=t.theme.palette?t.theme.palette:"dark"===e?"palette4":"palette1",a=t.chart.foreColor?t.chart.foreColor:"dark"===e?"#f6f7f8":"#373d3f";return t.tooltip.theme=e,t.chart.foreColor=a,t.theme.palette=i,t}},{key:"predefined",value:function(){switch(this.w.config.theme.palette){case"palette1":this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"];break;case"palette2":this.colors=["#3f51b5","#03a9f4","#4caf50","#f9ce1d","#FF9800"];break;case"palette3":this.colors=["#33b2df","#546E7A","#d4526e","#13d8aa","#A5978B"];break;case"palette4":this.colors=["#4ecdc4","#c7f464","#81D4FA","#fd6a6a","#546E7A"];break;case"palette5":this.colors=["#2b908f","#f9a3a4","#90ee7e","#fa4443","#69d2e7"];break;case"palette6":this.colors=["#449DD1","#F86624","#EA3546","#662E9B","#C5D86D"];break;case"palette7":this.colors=["#D7263D","#1B998B","#2E294E","#F46036","#E2C044"];break;case"palette8":this.colors=["#662E9B","#F86624","#F9C80E","#EA3546","#43BCCD"];break;case"palette9":this.colors=["#5C4742","#A5978B","#8D5B4C","#5A2A27","#C4BBAF"];break;case"palette10":this.colors=["#A300D6","#7D02EB","#5653FE","#2983FF","#00B1F2"];break;default:this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]}return this.colors}}]),t}(),at=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"draw",value:function(){this.drawTitleSubtitle("title"),this.drawTitleSubtitle("subtitle")}},{key:"drawTitleSubtitle",value:function(t){var e=this.w,i="title"===t?e.config.title:e.config.subtitle,a=e.globals.svgWidth/2,s=i.offsetY,r="middle";if("left"===i.align?(a=10,r="start"):"right"===i.align&&(a=e.globals.svgWidth-10,r="end"),a+=i.offsetX,s=s+parseInt(i.style.fontSize,10)+i.margin/2,void 0!==i.text){var o=new m(this.ctx).drawText({x:a,y:s,text:i.text,textAnchor:r,fontSize:i.style.fontSize,fontFamily:i.style.fontFamily,fontWeight:i.style.fontWeight,foreColor:i.style.color,opacity:1});o.node.setAttribute("class","apexcharts-".concat(t,"-text")),e.globals.dom.Paper.add(o)}}}]),t}(),st=function(){function t(e){a(this,t),this.w=e.w,this.dCtx=e}return r(t,[{key:"getTitleSubtitleCoords",value:function(t){var e=this.w,i=0,a=0,s="title"===t?e.config.title.floating:e.config.subtitle.floating,r=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t,"-text"));if(null!==r&&!s){var o=r.getBoundingClientRect();i=o.width,a=e.globals.axisCharts?o.height+5:o.height}return{width:i,height:a}}},{key:"getLegendsRect",value:function(){var t=this.w,e=t.globals.dom.baseEl.querySelector(".apexcharts-legend");t.config.legend.height||"top"!==t.config.legend.position&&"bottom"!==t.config.legend.position||(e.style.maxHeight=t.globals.svgHeight/2+"px");var i=Object.assign({},x.getBoundingClientRect(e));return null!==e&&!t.config.legend.floating&&t.config.legend.show?this.dCtx.lgRect={x:i.x,y:i.y,height:i.height,width:0===i.height?0:i.width}:this.dCtx.lgRect={x:0,y:0,height:0,width:0},"left"!==t.config.legend.position&&"right"!==t.config.legend.position||1.5*this.dCtx.lgRect.width>t.globals.svgWidth&&(this.dCtx.lgRect.width=t.globals.svgWidth/1.5),this.dCtx.lgRect}},{key:"getLargestStringFromMultiArr",value:function(t,e){var i=t;if(this.w.globals.isMultiLineX){var a=e.map((function(t,e){return Array.isArray(t)?t.length:1})),s=Math.max.apply(Math,u(a));i=e[a.indexOf(s)]}return i}}]),t}(),rt=function(){function t(e){a(this,t),this.w=e.w,this.dCtx=e}return r(t,[{key:"getxAxisLabelsCoords",value:function(){var t,e=this.w,i=e.globals.labels.slice();if(e.config.xaxis.convertedCatToNumeric&&0===i.length&&(i=e.globals.categoryLabels),e.globals.timescaleLabels.length>0){var a=this.getxAxisTimeScaleLabelsCoords();t={width:a.width,height:a.height},e.globals.rotateXLabels=!1}else{this.dCtx.lgWidthForSideLegends="left"!==e.config.legend.position&&"right"!==e.config.legend.position||e.config.legend.floating?0:this.dCtx.lgRect.width;var s=e.globals.xLabelFormatter,r=x.getLargestStringFromArr(i),o=this.dCtx.dimHelpers.getLargestStringFromMultiArr(r,i);e.globals.isBarHorizontal&&(o=r=e.globals.yAxisScale[0].result.reduce((function(t,e){return t.length>e.length?t:e}),0));var n=new V(this.dCtx.ctx),l=r;r=n.xLabelFormat(s,r,l,{i:void 0,dateFormatter:new R(this.dCtx.ctx).formatDate,w:e}),o=n.xLabelFormat(s,o,l,{i:void 0,dateFormatter:new R(this.dCtx.ctx).formatDate,w:e}),(e.config.xaxis.convertedCatToNumeric&&void 0===r||""===String(r).trim())&&(o=r="1");var h=new m(this.dCtx.ctx),c=h.getTextRects(r,e.config.xaxis.labels.style.fontSize),d=c;if(r!==o&&(d=h.getTextRects(o,e.config.xaxis.labels.style.fontSize)),(t={width:c.width>=d.width?c.width:d.width,height:c.height>=d.height?c.height:d.height}).width*i.length>e.globals.svgWidth-this.dCtx.lgWidthForSideLegends-this.dCtx.yAxisWidth-this.dCtx.gridPad.left-this.dCtx.gridPad.right&&0!==e.config.xaxis.labels.rotate||e.config.xaxis.labels.rotateAlways){if(!e.globals.isBarHorizontal){e.globals.rotateXLabels=!0;var g=function(t){return h.getTextRects(t,e.config.xaxis.labels.style.fontSize,e.config.xaxis.labels.style.fontFamily,"rotate(".concat(e.config.xaxis.labels.rotate," 0 0)"),!1)};c=g(r),r!==o&&(d=g(o)),t.height=(c.height>d.height?c.height:d.height)/1.5,t.width=c.width>d.width?c.width:d.width}}else e.globals.rotateXLabels=!1}return e.config.xaxis.labels.show||(t={width:0,height:0}),{width:t.width,height:t.height}}},{key:"getxAxisGroupLabelsCoords",value:function(){var t,e=this.w;if(!e.globals.hasGroups)return{width:0,height:0};var i,a=(null===(t=e.config.xaxis.group.style)||void 0===t?void 0:t.fontSize)||e.config.xaxis.labels.style.fontSize,s=e.globals.groups.map((function(t){return t.title})),r=x.getLargestStringFromArr(s),o=this.dCtx.dimHelpers.getLargestStringFromMultiArr(r,s),n=new m(this.dCtx.ctx),l=n.getTextRects(r,a),h=l;return r!==o&&(h=n.getTextRects(o,a)),i={width:l.width>=h.width?l.width:h.width,height:l.height>=h.height?l.height:h.height},e.config.xaxis.labels.show||(i={width:0,height:0}),{width:i.width,height:i.height}}},{key:"getxAxisTitleCoords",value:function(){var t=this.w,e=0,i=0;if(void 0!==t.config.xaxis.title.text){var a=new m(this.dCtx.ctx).getTextRects(t.config.xaxis.title.text,t.config.xaxis.title.style.fontSize);e=a.width,i=a.height}return{width:e,height:i}}},{key:"getxAxisTimeScaleLabelsCoords",value:function(){var t,e=this.w;this.dCtx.timescaleLabels=e.globals.timescaleLabels.slice();var i=this.dCtx.timescaleLabels.map((function(t){return t.value})),a=i.reduce((function(t,e){return void 0===t?(console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"),0):t.length>e.length?t:e}),0);return 1.05*(t=new m(this.dCtx.ctx).getTextRects(a,e.config.xaxis.labels.style.fontSize)).width*i.length>e.globals.gridWidth&&0!==e.config.xaxis.labels.rotate&&(e.globals.overlappingXLabels=!0),t}},{key:"additionalPaddingXLabels",value:function(t){var e=this,i=this.w,a=i.globals,s=i.config,r=s.xaxis.type,o=t.width;a.skipLastTimelinelabel=!1,a.skipFirstTimelinelabel=!1;var n=i.config.yaxis[0].opposite&&i.globals.isBarHorizontal,l=function(t,n){(function(t){return-1!==a.collapsedSeriesIndices.indexOf(t)})(n)||function(t){if(e.dCtx.timescaleLabels&&e.dCtx.timescaleLabels.length){var n=e.dCtx.timescaleLabels[0],l=e.dCtx.timescaleLabels[e.dCtx.timescaleLabels.length-1].position+o/1.75-e.dCtx.yAxisWidthRight,h=n.position-o/1.75+e.dCtx.yAxisWidthLeft,c="right"===i.config.legend.position&&e.dCtx.lgRect.width>0?e.dCtx.lgRect.width:0;l>a.svgWidth-a.translateX-c&&(a.skipLastTimelinelabel=!0),h<-(t.show&&!t.floating||"bar"!==s.chart.type&&"candlestick"!==s.chart.type&&"rangeBar"!==s.chart.type&&"boxPlot"!==s.chart.type?10:o/1.75)&&(a.skipFirstTimelinelabel=!0)}else"datetime"===r?e.dCtx.gridPad.right<o&&!a.rotateXLabels&&(a.skipLastTimelinelabel=!0):"datetime"!==r&&e.dCtx.gridPad.right<o/2-e.dCtx.yAxisWidthRight&&!a.rotateXLabels&&!i.config.xaxis.labels.trim&&("between"!==i.config.xaxis.tickPlacement||i.globals.isBarHorizontal)&&(e.dCtx.xPadRight=o/2+1)}(t)};s.yaxis.forEach((function(t,i){n?(e.dCtx.gridPad.left<o&&(e.dCtx.xPadLeft=o/2+1),e.dCtx.xPadRight=o/2+1):l(t,i)}))}}]),t}(),ot=function(){function t(e){a(this,t),this.w=e.w,this.dCtx=e}return r(t,[{key:"getyAxisLabelsCoords",value:function(){var t=this,e=this.w,i=[],a=10,s=new G(this.dCtx.ctx);return e.config.yaxis.map((function(r,o){var n=e.globals.yAxisScale[o],l=0;if(!s.isYAxisHidden(o)&&r.labels.show&&void 0!==r.labels.minWidth&&(l=r.labels.minWidth),!s.isYAxisHidden(o)&&r.labels.show&&n.result.length){var h=e.globals.yLabelFormatters[o],c=n.niceMin===Number.MIN_VALUE?0:n.niceMin,d=String(c).length>String(n.niceMax).length?c:n.niceMax,g=h(d,{seriesIndex:o,dataPointIndex:-1,w:e}),u=g;if(void 0!==g&&0!==g.length||(g=d),e.globals.isBarHorizontal){a=0;var p=e.globals.labels.slice();g=h(g=x.getLargestStringFromArr(p),{seriesIndex:o,dataPointIndex:-1,w:e}),u=t.dCtx.dimHelpers.getLargestStringFromMultiArr(g,p)}var f=new m(t.dCtx.ctx),b="rotate(".concat(r.labels.rotate," 0 0)"),v=f.getTextRects(g,r.labels.style.fontSize,r.labels.style.fontFamily,b,!1),y=v;g!==u&&(y=f.getTextRects(u,r.labels.style.fontSize,r.labels.style.fontFamily,b,!1)),i.push({width:(l>y.width||l>v.width?l:y.width>v.width?y.width:v.width)+a,height:y.height>v.height?y.height:v.height})}else i.push({width:0,height:0})})),i}},{key:"getyAxisTitleCoords",value:function(){var t=this,e=this.w,i=[];return e.config.yaxis.map((function(e,a){if(e.show&&void 0!==e.title.text){var s=new m(t.dCtx.ctx),r="rotate(".concat(e.title.rotate," 0 0)"),o=s.getTextRects(e.title.text,e.title.style.fontSize,e.title.style.fontFamily,r,!1);i.push({width:o.width,height:o.height})}else i.push({width:0,height:0})})),i}},{key:"getTotalYAxisWidth",value:function(){var t=this.w,e=0,i=0,a=0,s=t.globals.yAxisScale.length>1?10:0,r=new G(this.dCtx.ctx),o=function(o,n){var l=t.config.yaxis[n].floating,h=0;o.width>0&&!l?(h=o.width+s,function(e){return t.globals.ignoreYAxisIndexes.indexOf(e)>-1}(n)&&(h=h-o.width-s)):h=l||r.isYAxisHidden(n)?0:5,t.config.yaxis[n].opposite?a+=h:i+=h,e+=h};return t.globals.yLabelsCoords.map((function(t,e){o(t,e)})),t.globals.yTitleCoords.map((function(t,e){o(t,e)})),t.globals.isBarHorizontal&&!t.config.yaxis[0].floating&&(e=t.globals.yLabelsCoords[0].width+t.globals.yTitleCoords[0].width+15),this.dCtx.yAxisWidthLeft=i,this.dCtx.yAxisWidthRight=a,e}}]),t}(),nt=function(){function t(e){a(this,t),this.w=e.w,this.dCtx=e}return r(t,[{key:"gridPadForColumnsInNumericAxis",value:function(t){var e=this.w;if(e.globals.noData||e.globals.allSeriesCollapsed)return 0;var i=function(t){return"bar"===t||"rangeBar"===t||"candlestick"===t||"boxPlot"===t},a=e.config.chart.type,s=0,r=i(a)?e.config.series.length:1;if(e.globals.comboBarCount>0&&(r=e.globals.comboBarCount),e.globals.collapsedSeries.forEach((function(t){i(t.type)&&(r-=1)})),e.config.chart.stacked&&(r=1),(i(a)||e.globals.comboBarCount>0)&&e.globals.isXNumeric&&!e.globals.isBarHorizontal&&r>0){var o,n,l=Math.abs(e.globals.initialMaxX-e.globals.initialMinX);l<=3&&(l=e.globals.dataPoints),o=l/t,e.globals.minXDiff&&e.globals.minXDiff/o>0&&(n=e.globals.minXDiff/o),n>t/2&&(n/=2),(s=n/r*parseInt(e.config.plotOptions.bar.columnWidth,10)/100)<1&&(s=1),s=s/(r>1?1:1.5)+5,e.globals.barPadForNumericAxis=s}return s}},{key:"gridPadFortitleSubtitle",value:function(){var t=this,e=this.w,i=e.globals,a=this.dCtx.isSparkline||!e.globals.axisCharts?0:10;["title","subtitle"].forEach((function(i){void 0!==e.config[i].text?a+=e.config[i].margin:a+=t.dCtx.isSparkline||!e.globals.axisCharts?0:5})),!e.config.legend.show||"bottom"!==e.config.legend.position||e.config.legend.floating||e.globals.axisCharts||(a+=10);var s=this.dCtx.dimHelpers.getTitleSubtitleCoords("title"),r=this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");i.gridHeight=i.gridHeight-s.height-r.height-a,i.translateY=i.translateY+s.height+r.height+a}},{key:"setGridXPosForDualYAxis",value:function(t,e){var i=this.w,a=new G(this.dCtx.ctx);i.config.yaxis.map((function(s,r){-1!==i.globals.ignoreYAxisIndexes.indexOf(r)||s.floating||a.isYAxisHidden(r)||(s.opposite&&(i.globals.translateX=i.globals.translateX-(e[r].width+t[r].width)-parseInt(i.config.yaxis[r].labels.style.fontSize,10)/1.2-12),i.globals.translateX<2&&(i.globals.translateX=2))}))}}]),t}(),lt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.lgRect={},this.yAxisWidth=0,this.yAxisWidthLeft=0,this.yAxisWidthRight=0,this.xAxisHeight=0,this.isSparkline=this.w.config.chart.sparkline.enabled,this.dimHelpers=new st(this),this.dimYAxis=new ot(this),this.dimXAxis=new rt(this),this.dimGrid=new nt(this),this.lgWidthForSideLegends=0,this.gridPad=this.w.config.grid.padding,this.xPadRight=0,this.xPadLeft=0}return r(t,[{key:"plotCoords",value:function(){var t=this,e=this.w,i=e.globals;this.lgRect=this.dimHelpers.getLegendsRect(),this.isSparkline&&(e.config.markers.discrete.length>0||e.config.markers.size>0)&&Object.entries(this.gridPad).forEach((function(e){var i=g(e,2),a=i[0],s=i[1];t.gridPad[a]=Math.max(s,t.w.globals.markers.largestSize/1.5)})),i.axisCharts?this.setDimensionsForAxisCharts():this.setDimensionsForNonAxisCharts(),this.dimGrid.gridPadFortitleSubtitle(),i.gridHeight=i.gridHeight-this.gridPad.top-this.gridPad.bottom,i.gridWidth=i.gridWidth-this.gridPad.left-this.gridPad.right-this.xPadRight-this.xPadLeft;var a=this.dimGrid.gridPadForColumnsInNumericAxis(i.gridWidth);i.gridWidth=i.gridWidth-2*a,i.translateX=i.translateX+this.gridPad.left+this.xPadLeft+(a>0?a+4:0),i.translateY=i.translateY+this.gridPad.top}},{key:"setDimensionsForAxisCharts",value:function(){var t=this,e=this.w,i=e.globals,a=this.dimYAxis.getyAxisLabelsCoords(),s=this.dimYAxis.getyAxisTitleCoords();e.globals.yLabelsCoords=[],e.globals.yTitleCoords=[],e.config.yaxis.map((function(t,i){e.globals.yLabelsCoords.push({width:a[i].width,index:i}),e.globals.yTitleCoords.push({width:s[i].width,index:i})})),this.yAxisWidth=this.dimYAxis.getTotalYAxisWidth();var r=this.dimXAxis.getxAxisLabelsCoords(),o=this.dimXAxis.getxAxisGroupLabelsCoords(),n=this.dimXAxis.getxAxisTitleCoords();this.conditionalChecksForAxisCoords(r,n,o),i.translateXAxisY=e.globals.rotateXLabels?this.xAxisHeight/8:-4,i.translateXAxisX=e.globals.rotateXLabels&&e.globals.isXNumeric&&e.config.xaxis.labels.rotate<=-45?-this.xAxisWidth/4:0,e.globals.isBarHorizontal&&(i.rotateXLabels=!1,i.translateXAxisY=parseInt(e.config.xaxis.labels.style.fontSize,10)/1.5*-1),i.translateXAxisY=i.translateXAxisY+e.config.xaxis.labels.offsetY,i.translateXAxisX=i.translateXAxisX+e.config.xaxis.labels.offsetX;var l=this.yAxisWidth,h=this.xAxisHeight;i.xAxisLabelsHeight=this.xAxisHeight-n.height,i.xAxisGroupLabelsHeight=i.xAxisLabelsHeight-r.height,i.xAxisLabelsWidth=this.xAxisWidth,i.xAxisHeight=this.xAxisHeight;var c=10;("radar"===e.config.chart.type||this.isSparkline)&&(l=0,h=i.goldenPadding),this.isSparkline&&(this.lgRect={height:0,width:0}),(this.isSparkline||"treemap"===e.config.chart.type)&&(l=0,h=0,c=0),this.isSparkline||this.dimXAxis.additionalPaddingXLabels(r);var d=function(){i.translateX=l,i.gridHeight=i.svgHeight-t.lgRect.height-h-(t.isSparkline||"treemap"===e.config.chart.type?0:e.globals.rotateXLabels?10:15),i.gridWidth=i.svgWidth-l};switch("top"===e.config.xaxis.position&&(c=i.xAxisHeight-e.config.xaxis.axisTicks.height-5),e.config.legend.position){case"bottom":i.translateY=c,d();break;case"top":i.translateY=this.lgRect.height+c,d();break;case"left":i.translateY=c,i.translateX=this.lgRect.width+l,i.gridHeight=i.svgHeight-h-12,i.gridWidth=i.svgWidth-this.lgRect.width-l;break;case"right":i.translateY=c,i.translateX=l,i.gridHeight=i.svgHeight-h-12,i.gridWidth=i.svgWidth-this.lgRect.width-l-5;break;default:throw new Error("Legend position not supported")}this.dimGrid.setGridXPosForDualYAxis(s,a),new $(this.ctx).setYAxisXPosition(a,s)}},{key:"setDimensionsForNonAxisCharts",value:function(){var t=this.w,e=t.globals,i=t.config,a=0;t.config.legend.show&&!t.config.legend.floating&&(a=20);var s="pie"===i.chart.type||"polarArea"===i.chart.type||"donut"===i.chart.type?"pie":"radialBar",r=i.plotOptions[s].offsetY,o=i.plotOptions[s].offsetX;if(!i.legend.show||i.legend.floating)return e.gridHeight=e.svgHeight-i.grid.padding.left+i.grid.padding.right,e.gridWidth=e.gridHeight,e.translateY=r,void(e.translateX=o+(e.svgWidth-e.gridWidth)/2);switch(i.legend.position){case"bottom":e.gridHeight=e.svgHeight-this.lgRect.height-e.goldenPadding,e.gridWidth=e.svgWidth,e.translateY=r-10,e.translateX=o+(e.svgWidth-e.gridWidth)/2;break;case"top":e.gridHeight=e.svgHeight-this.lgRect.height-e.goldenPadding,e.gridWidth=e.svgWidth,e.translateY=this.lgRect.height+r+10,e.translateX=o+(e.svgWidth-e.gridWidth)/2;break;case"left":e.gridWidth=e.svgWidth-this.lgRect.width-a,e.gridHeight="auto"!==i.chart.height?e.svgHeight:e.gridWidth,e.translateY=r,e.translateX=o+this.lgRect.width+a;break;case"right":e.gridWidth=e.svgWidth-this.lgRect.width-a-5,e.gridHeight="auto"!==i.chart.height?e.svgHeight:e.gridWidth,e.translateY=r,e.translateX=o+10;break;default:throw new Error("Legend position not supported")}}},{key:"conditionalChecksForAxisCoords",value:function(t,e,i){var a=this.w,s=a.globals.hasGroups?2:1,r=i.height+t.height+e.height,o=a.globals.isMultiLineX?1.2:a.globals.LINE_HEIGHT_RATIO,n=a.globals.rotateXLabels?22:10,l=a.globals.rotateXLabels&&"bottom"===a.config.legend.position?10:0;this.xAxisHeight=r*o+s*n+l,this.xAxisWidth=t.width,this.xAxisHeight-e.height>a.config.xaxis.labels.maxHeight&&(this.xAxisHeight=a.config.xaxis.labels.maxHeight),a.config.xaxis.labels.minHeight&&this.xAxisHeight<a.config.xaxis.labels.minHeight&&(this.xAxisHeight=a.config.xaxis.labels.minHeight),a.config.xaxis.floating&&(this.xAxisHeight=0);var h=0,c=0;a.config.yaxis.forEach((function(t){h+=t.labels.minWidth,c+=t.labels.maxWidth})),this.yAxisWidth<h&&(this.yAxisWidth=h),this.yAxisWidth>c&&(this.yAxisWidth=c)}}]),t}(),ht=function(){function t(e){a(this,t),this.w=e.w,this.lgCtx=e}return r(t,[{key:"getLegendStyles",value:function(){var t=document.createElement("style");t.setAttribute("type","text/css");var e=document.createTextNode("\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }");return t.appendChild(e),t}},{key:"getLegendBBox",value:function(){var t=this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),e=t.width;return{clwh:t.height,clww:e}}},{key:"appendToForeignObject",value:function(){var t=this.w.globals;t.dom.elLegendForeign=document.createElementNS(t.SVGNS,"foreignObject");var e=t.dom.elLegendForeign;e.setAttribute("x",0),e.setAttribute("y",0),e.setAttribute("width",t.svgWidth),e.setAttribute("height",t.svgHeight),t.dom.elLegendWrap.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),e.appendChild(t.dom.elLegendWrap),e.appendChild(this.getLegendStyles()),t.dom.Paper.node.insertBefore(e,t.dom.elGraphical.node)}},{key:"toggleDataSeries",value:function(t,e){var i=this,a=this.w;if(a.globals.axisCharts||"radialBar"===a.config.chart.type){a.globals.resized=!0;var s=null,r=null;if(a.globals.risingSeries=[],a.globals.axisCharts?(s=a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t,"']")),r=parseInt(s.getAttribute("data:realIndex"),10)):(s=a.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t+1,"']")),r=parseInt(s.getAttribute("rel"),10)-1),e)[{cs:a.globals.collapsedSeries,csi:a.globals.collapsedSeriesIndices},{cs:a.globals.ancillaryCollapsedSeries,csi:a.globals.ancillaryCollapsedSeriesIndices}].forEach((function(t){i.riseCollapsedSeries(t.cs,t.csi,r)}));else this.hideSeries({seriesEl:s,realIndex:r})}else{var o=a.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t+1,"'] path")),n=a.config.chart.type;if("pie"===n||"polarArea"===n||"donut"===n){var l=a.config.plotOptions.pie.donut.labels;new m(this.lgCtx.ctx).pathMouseDown(o.members[0],null),this.lgCtx.ctx.pie.printDataLabelsInner(o.members[0].node,l)}o.fire("click")}}},{key:"hideSeries",value:function(t){var e=t.seriesEl,i=t.realIndex,a=this.w,s=x.clone(a.config.series);if(a.globals.axisCharts){var r=!1;if(a.config.yaxis[i]&&a.config.yaxis[i].show&&a.config.yaxis[i].showAlways&&(r=!0,a.globals.ancillaryCollapsedSeriesIndices.indexOf(i)<0&&(a.globals.ancillaryCollapsedSeries.push({index:i,data:s[i].data.slice(),type:e.parentNode.className.baseVal.split("-")[1]}),a.globals.ancillaryCollapsedSeriesIndices.push(i))),!r){a.globals.collapsedSeries.push({index:i,data:s[i].data.slice(),type:e.parentNode.className.baseVal.split("-")[1]}),a.globals.collapsedSeriesIndices.push(i);var o=a.globals.risingSeries.indexOf(i);a.globals.risingSeries.splice(o,1)}}else a.globals.collapsedSeries.push({index:i,data:s[i]}),a.globals.collapsedSeriesIndices.push(i);for(var n=e.childNodes,l=0;l<n.length;l++)n[l].classList.contains("apexcharts-series-markers-wrap")&&(n[l].classList.contains("apexcharts-hide")?n[l].classList.remove("apexcharts-hide"):n[l].classList.add("apexcharts-hide"));a.globals.allSeriesCollapsed=a.globals.collapsedSeries.length===a.config.series.length,s=this._getSeriesBasedOnCollapsedState(s),this.lgCtx.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled)}},{key:"riseCollapsedSeries",value:function(t,e,i){var a=this.w,s=x.clone(a.config.series);if(t.length>0){for(var r=0;r<t.length;r++)t[r].index===i&&(a.globals.axisCharts?(s[i].data=t[r].data.slice(),t.splice(r,1),e.splice(r,1),a.globals.risingSeries.push(i)):(s[i]=t[r].data,t.splice(r,1),e.splice(r,1),a.globals.risingSeries.push(i)));s=this._getSeriesBasedOnCollapsedState(s),this.lgCtx.ctx.updateHelpers._updateSeries(s,a.config.chart.animations.dynamicAnimation.enabled)}}},{key:"_getSeriesBasedOnCollapsedState",value:function(t){var e=this.w;return e.globals.axisCharts?t.forEach((function(i,a){e.globals.collapsedSeriesIndices.indexOf(a)>-1&&(t[a].data=[])})):t.forEach((function(i,a){e.globals.collapsedSeriesIndices.indexOf(a)>-1&&(t[a]=0)})),t}}]),t}(),ct=function(){function t(e,i){a(this,t),this.ctx=e,this.w=e.w,this.onLegendClick=this.onLegendClick.bind(this),this.onLegendHovered=this.onLegendHovered.bind(this),this.isBarsDistributed="bar"===this.w.config.chart.type&&this.w.config.plotOptions.bar.distributed&&1===this.w.config.series.length,this.legendHelpers=new ht(this)}return r(t,[{key:"init",value:function(){var t=this.w,e=t.globals,i=t.config;if((i.legend.showForSingleSeries&&1===e.series.length||this.isBarsDistributed||e.series.length>1||!e.axisCharts)&&i.legend.show){for(;e.dom.elLegendWrap.firstChild;)e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);this.drawLegends(),x.isIE11()?document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()):this.legendHelpers.appendToForeignObject(),"bottom"===i.legend.position||"top"===i.legend.position?this.legendAlignHorizontal():"right"!==i.legend.position&&"left"!==i.legend.position||this.legendAlignVertical()}}},{key:"drawLegends",value:function(){var t=this,e=this.w,i=e.config.legend.fontFamily,a=e.globals.seriesNames,s=e.globals.colors.slice();if("heatmap"===e.config.chart.type){var r=e.config.plotOptions.heatmap.colorScale.ranges;a=r.map((function(t){return t.name?t.name:t.from+" - "+t.to})),s=r.map((function(t){return t.color}))}else this.isBarsDistributed&&(a=e.globals.labels.slice());e.config.legend.customLegendItems.length&&(a=e.config.legend.customLegendItems);for(var o=e.globals.legendFormatter,n=e.config.legend.inverseOrder,l=n?a.length-1:0;n?l>=0:l<=a.length-1;n?l--:l++){var h=o(a[l],{seriesIndex:l,w:e}),c=!1,d=!1;if(e.globals.collapsedSeries.length>0)for(var g=0;g<e.globals.collapsedSeries.length;g++)e.globals.collapsedSeries[g].index===l&&(c=!0);if(e.globals.ancillaryCollapsedSeriesIndices.length>0)for(var u=0;u<e.globals.ancillaryCollapsedSeriesIndices.length;u++)e.globals.ancillaryCollapsedSeriesIndices[u]===l&&(d=!0);var p=document.createElement("span");p.classList.add("apexcharts-legend-marker");var f=e.config.legend.markers.offsetX,b=e.config.legend.markers.offsetY,v=e.config.legend.markers.height,w=e.config.legend.markers.width,k=e.config.legend.markers.strokeWidth,A=e.config.legend.markers.strokeColor,S=e.config.legend.markers.radius,C=p.style;C.background=s[l],C.color=s[l],C.setProperty("background",s[l],"important"),e.config.legend.markers.fillColors&&e.config.legend.markers.fillColors[l]&&(C.background=e.config.legend.markers.fillColors[l]),void 0!==e.globals.seriesColors[l]&&(C.background=e.globals.seriesColors[l],C.color=e.globals.seriesColors[l]),C.height=Array.isArray(v)?parseFloat(v[l])+"px":parseFloat(v)+"px",C.width=Array.isArray(w)?parseFloat(w[l])+"px":parseFloat(w)+"px",C.left=(Array.isArray(f)?parseFloat(f[l]):parseFloat(f))+"px",C.top=(Array.isArray(b)?parseFloat(b[l]):parseFloat(b))+"px",C.borderWidth=Array.isArray(k)?k[l]:k,C.borderColor=Array.isArray(A)?A[l]:A,C.borderRadius=Array.isArray(S)?parseFloat(S[l])+"px":parseFloat(S)+"px",e.config.legend.markers.customHTML&&(Array.isArray(e.config.legend.markers.customHTML)?e.config.legend.markers.customHTML[l]&&(p.innerHTML=e.config.legend.markers.customHTML[l]()):p.innerHTML=e.config.legend.markers.customHTML()),m.setAttrs(p,{rel:l+1,"data:collapsed":c||d}),(c||d)&&p.classList.add("apexcharts-inactive-legend");var L=document.createElement("div"),P=document.createElement("span");P.classList.add("apexcharts-legend-text"),P.innerHTML=Array.isArray(h)?h.join(" "):h;var M=e.config.legend.labels.useSeriesColors?e.globals.colors[l]:e.config.legend.labels.colors;M||(M=e.config.chart.foreColor),P.style.color=M,P.style.fontSize=parseFloat(e.config.legend.fontSize)+"px",P.style.fontWeight=e.config.legend.fontWeight,P.style.fontFamily=i||e.config.chart.fontFamily,m.setAttrs(P,{rel:l+1,i:l,"data:default-text":encodeURIComponent(h),"data:collapsed":c||d}),L.appendChild(p),L.appendChild(P);var T=new y(this.ctx);if(!e.config.legend.showForZeroSeries)0===T.getSeriesTotalByIndex(l)&&T.seriesHaveSameValues(l)&&!T.isSeriesNull(l)&&-1===e.globals.collapsedSeriesIndices.indexOf(l)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(l)&&L.classList.add("apexcharts-hidden-zero-series");e.config.legend.showForNullSeries||T.isSeriesNull(l)&&-1===e.globals.collapsedSeriesIndices.indexOf(l)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(l)&&L.classList.add("apexcharts-hidden-null-series"),e.globals.dom.elLegendWrap.appendChild(L),e.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e.config.legend.horizontalAlign)),e.globals.dom.elLegendWrap.classList.add("apx-legend-position-"+e.config.legend.position),L.classList.add("apexcharts-legend-series"),L.style.margin="".concat(e.config.legend.itemMargin.vertical,"px ").concat(e.config.legend.itemMargin.horizontal,"px"),e.globals.dom.elLegendWrap.style.width=e.config.legend.width?e.config.legend.width+"px":"",e.globals.dom.elLegendWrap.style.height=e.config.legend.height?e.config.legend.height+"px":"",m.setAttrs(L,{rel:l+1,seriesName:x.escapeString(a[l]),"data:collapsed":c||d}),(c||d)&&L.classList.add("apexcharts-inactive-legend"),e.config.legend.onItemClick.toggleDataSeries||L.classList.add("apexcharts-no-click")}e.globals.dom.elWrap.addEventListener("click",t.onLegendClick,!0),e.config.legend.onItemHover.highlightDataSeries&&0===e.config.legend.customLegendItems.length&&(e.globals.dom.elWrap.addEventListener("mousemove",t.onLegendHovered,!0),e.globals.dom.elWrap.addEventListener("mouseout",t.onLegendHovered,!0))}},{key:"setLegendWrapXY",value:function(t,e){var i=this.w,a=i.globals.dom.baseEl.querySelector(".apexcharts-legend"),s=a.getBoundingClientRect(),r=0,o=0;if("bottom"===i.config.legend.position)o+=i.globals.svgHeight-s.height/2;else if("top"===i.config.legend.position){var n=new lt(this.ctx),l=n.dimHelpers.getTitleSubtitleCoords("title").height,h=n.dimHelpers.getTitleSubtitleCoords("subtitle").height;o=o+(l>0?l-10:0)+(h>0?h-10:0)}a.style.position="absolute",r=r+t+i.config.legend.offsetX,o=o+e+i.config.legend.offsetY,a.style.left=r+"px",a.style.top=o+"px","bottom"===i.config.legend.position?(a.style.top="auto",a.style.bottom=5-i.config.legend.offsetY+"px"):"right"===i.config.legend.position&&(a.style.left="auto",a.style.right=25+i.config.legend.offsetX+"px");["width","height"].forEach((function(t){a.style[t]&&(a.style[t]=parseInt(i.config.legend[t],10)+"px")}))}},{key:"legendAlignHorizontal",value:function(){var t=this.w;t.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right=0;var e=this.legendHelpers.getLegendBBox(),i=new lt(this.ctx),a=i.dimHelpers.getTitleSubtitleCoords("title"),s=i.dimHelpers.getTitleSubtitleCoords("subtitle"),r=0;"bottom"===t.config.legend.position?r=-e.clwh/1.8:"top"===t.config.legend.position&&(r=a.height+s.height+t.config.title.margin+t.config.subtitle.margin-10),this.setLegendWrapXY(20,r)}},{key:"legendAlignVertical",value:function(){var t=this.w,e=this.legendHelpers.getLegendBBox(),i=0;"left"===t.config.legend.position&&(i=20),"right"===t.config.legend.position&&(i=t.globals.svgWidth-e.clww-10),this.setLegendWrapXY(i,20)}},{key:"onLegendHovered",value:function(t){var e=this.w,i=t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker");if("heatmap"===e.config.chart.type||this.isBarsDistributed){if(i){var a=parseInt(t.target.getAttribute("rel"),10)-1;this.ctx.events.fireEvent("legendHover",[this.ctx,a,this.w]),new E(this.ctx).highlightRangeInSeries(t,t.target)}}else!t.target.classList.contains("apexcharts-inactive-legend")&&i&&new E(this.ctx).toggleSeriesOnHover(t,t.target)}},{key:"onLegendClick",value:function(t){var e=this.w;if(!e.config.legend.customLegendItems.length&&(t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker"))){var i=parseInt(t.target.getAttribute("rel"),10)-1,a="true"===t.target.getAttribute("data:collapsed"),s=this.w.config.chart.events.legendClick;"function"==typeof s&&s(this.ctx,i,this.w),this.ctx.events.fireEvent("legendClick",[this.ctx,i,this.w]);var r=this.w.config.legend.markers.onClick;"function"==typeof r&&t.target.classList.contains("apexcharts-legend-marker")&&(r(this.ctx,i,this.w),this.ctx.events.fireEvent("legendMarkerClick",[this.ctx,i,this.w])),"treemap"!==e.config.chart.type&&"heatmap"!==e.config.chart.type&&!this.isBarsDistributed&&e.config.legend.onItemClick.toggleDataSeries&&this.legendHelpers.toggleDataSeries(i,a)}}}]),t}(),dt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.ev=this.w.config.chart.events,this.selectedClass="apexcharts-selected",this.localeValues=this.w.globals.locale.toolbar,this.minX=i.globals.minX,this.maxX=i.globals.maxX}return r(t,[{key:"createToolbar",value:function(){var t=this,e=this.w,i=function(){return document.createElement("div")},a=i();if(a.setAttribute("class","apexcharts-toolbar"),a.style.top=e.config.chart.toolbar.offsetY+"px",a.style.right=3-e.config.chart.toolbar.offsetX+"px",e.globals.dom.elWrap.appendChild(a),this.elZoom=i(),this.elZoomIn=i(),this.elZoomOut=i(),this.elPan=i(),this.elSelection=i(),this.elZoomReset=i(),this.elMenuIcon=i(),this.elMenu=i(),this.elCustomIcons=[],this.t=e.config.chart.toolbar.tools,Array.isArray(this.t.customIcons))for(var s=0;s<this.t.customIcons.length;s++)this.elCustomIcons.push(i());var r=[],o=function(i,a,s){var o=i.toLowerCase();t.t[o]&&e.config.chart.zoom.enabled&&r.push({el:a,icon:"string"==typeof t.t[o]?t.t[o]:s,title:t.localeValues[i],class:"apexcharts-".concat(o,"-icon")})};o("zoomIn",this.elZoomIn,'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'),o("zoomOut",this.elZoomOut,'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');var n=function(i){t.t[i]&&e.config.chart[i].enabled&&r.push({el:"zoom"===i?t.elZoom:t.elSelection,icon:"string"==typeof t.t[i]?t.t[i]:"zoom"===i?'<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>':'<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',title:t.localeValues["zoom"===i?"selectionZoom":"selection"],class:e.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-".concat(i,"-icon")})};n("zoom"),n("selection"),this.t.pan&&e.config.chart.zoom.enabled&&r.push({el:this.elPan,icon:"string"==typeof this.t.pan?this.t.pan:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',title:this.localeValues.pan,class:e.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-pan-icon"}),o("reset",this.elZoomReset,'<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'),this.t.download&&r.push({el:this.elMenuIcon,icon:"string"==typeof this.t.download?this.t.download:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',title:this.localeValues.menu,class:"apexcharts-menu-icon"});for(var l=0;l<this.elCustomIcons.length;l++)r.push({el:this.elCustomIcons[l],icon:this.t.customIcons[l].icon,title:this.t.customIcons[l].title,index:this.t.customIcons[l].index,class:"apexcharts-toolbar-custom-icon "+this.t.customIcons[l].class});r.forEach((function(t,e){t.index&&x.moveIndexInArray(r,e,t.index)}));for(var h=0;h<r.length;h++)m.setAttrs(r[h].el,{class:r[h].class,title:r[h].title}),r[h].el.innerHTML=r[h].icon,a.appendChild(r[h].el);this._createHamburgerMenu(a),e.globals.zoomEnabled?this.elZoom.classList.add(this.selectedClass):e.globals.panEnabled?this.elPan.classList.add(this.selectedClass):e.globals.selectionEnabled&&this.elSelection.classList.add(this.selectedClass),this.addToolbarEventListeners()}},{key:"_createHamburgerMenu",value:function(t){this.elMenuItems=[],t.appendChild(this.elMenu),m.setAttrs(this.elMenu,{class:"apexcharts-menu"});var e=[{name:"exportSVG",title:this.localeValues.exportToSVG},{name:"exportPNG",title:this.localeValues.exportToPNG},{name:"exportCSV",title:this.localeValues.exportToCSV}];this.w.globals.allSeriesHasEqualX||e.splice(2,1);for(var i=0;i<e.length;i++)this.elMenuItems.push(document.createElement("div")),this.elMenuItems[i].innerHTML=e[i].title,m.setAttrs(this.elMenuItems[i],{class:"apexcharts-menu-item ".concat(e[i].name),title:e[i].title}),this.elMenu.appendChild(this.elMenuItems[i])}},{key:"addToolbarEventListeners",value:function(){var t=this;this.elZoomReset.addEventListener("click",this.handleZoomReset.bind(this)),this.elSelection.addEventListener("click",this.toggleZoomSelection.bind(this,"selection")),this.elZoom.addEventListener("click",this.toggleZoomSelection.bind(this,"zoom")),this.elZoomIn.addEventListener("click",this.handleZoomIn.bind(this)),this.elZoomOut.addEventListener("click",this.handleZoomOut.bind(this)),this.elPan.addEventListener("click",this.togglePanning.bind(this)),this.elMenuIcon.addEventListener("click",this.toggleMenu.bind(this)),this.elMenuItems.forEach((function(e){e.classList.contains("exportSVG")?e.addEventListener("click",t.handleDownload.bind(t,"svg")):e.classList.contains("exportPNG")?e.addEventListener("click",t.handleDownload.bind(t,"png")):e.classList.contains("exportCSV")&&e.addEventListener("click",t.handleDownload.bind(t,"csv"))}));for(var e=0;e<this.t.customIcons.length;e++)this.elCustomIcons[e].addEventListener("click",this.t.customIcons[e].click.bind(this,this.ctx,this.ctx.w))}},{key:"toggleZoomSelection",value:function(t){this.ctx.getSyncedCharts().forEach((function(e){e.ctx.toolbar.toggleOtherControls();var i="selection"===t?e.ctx.toolbar.elSelection:e.ctx.toolbar.elZoom,a="selection"===t?"selectionEnabled":"zoomEnabled";e.w.globals[a]=!e.w.globals[a],i.classList.contains(e.ctx.toolbar.selectedClass)?i.classList.remove(e.ctx.toolbar.selectedClass):i.classList.add(e.ctx.toolbar.selectedClass)}))}},{key:"getToolbarIconsReference",value:function(){var t=this.w;this.elZoom||(this.elZoom=t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")),this.elPan||(this.elPan=t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")),this.elSelection||(this.elSelection=t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))}},{key:"enableZoomPanFromToolbar",value:function(t){this.toggleOtherControls(),"pan"===t?this.w.globals.panEnabled=!0:this.w.globals.zoomEnabled=!0;var e="pan"===t?this.elPan:this.elZoom,i="pan"===t?this.elZoom:this.elPan;e&&e.classList.add(this.selectedClass),i&&i.classList.remove(this.selectedClass)}},{key:"togglePanning",value:function(){this.ctx.getSyncedCharts().forEach((function(t){t.ctx.toolbar.toggleOtherControls(),t.w.globals.panEnabled=!t.w.globals.panEnabled,t.ctx.toolbar.elPan.classList.contains(t.ctx.toolbar.selectedClass)?t.ctx.toolbar.elPan.classList.remove(t.ctx.toolbar.selectedClass):t.ctx.toolbar.elPan.classList.add(t.ctx.toolbar.selectedClass)}))}},{key:"toggleOtherControls",value:function(){var t=this,e=this.w;e.globals.panEnabled=!1,e.globals.zoomEnabled=!1,e.globals.selectionEnabled=!1,this.getToolbarIconsReference(),[this.elPan,this.elSelection,this.elZoom].forEach((function(e){e&&e.classList.remove(t.selectedClass)}))}},{key:"handleZoomIn",value:function(){var t=this.w;t.globals.isRangeBar&&(this.minX=t.globals.minY,this.maxX=t.globals.maxY);var e=(this.minX+this.maxX)/2,i=(this.minX+e)/2,a=(this.maxX+e)/2,s=this._getNewMinXMaxX(i,a);t.globals.disableZoomIn||this.zoomUpdateOptions(s.minX,s.maxX)}},{key:"handleZoomOut",value:function(){var t=this.w;if(t.globals.isRangeBar&&(this.minX=t.globals.minY,this.maxX=t.globals.maxY),!("datetime"===t.config.xaxis.type&&new Date(this.minX).getUTCFullYear()<1e3)){var e=(this.minX+this.maxX)/2,i=this.minX-(e-this.minX),a=this.maxX-(e-this.maxX),s=this._getNewMinXMaxX(i,a);t.globals.disableZoomOut||this.zoomUpdateOptions(s.minX,s.maxX)}}},{key:"_getNewMinXMaxX",value:function(t,e){var i=this.w.config.xaxis.convertedCatToNumeric;return{minX:i?Math.floor(t):t,maxX:i?Math.floor(e):e}}},{key:"zoomUpdateOptions",value:function(t,e){var i=this.w;if(void 0!==t||void 0!==e){if(!(i.config.xaxis.convertedCatToNumeric&&(t<1&&(t=1,e=i.globals.dataPoints),e-t<2))){var a={min:t,max:e},s=this.getBeforeZoomRange(a);s&&(a=s.xaxis);var r={xaxis:a},o=x.clone(i.globals.initialConfig.yaxis);if(i.config.chart.zoom.autoScaleYaxis)o=new q(this.ctx).autoScaleY(this.ctx,o,{xaxis:a});i.config.chart.group||(r.yaxis=o),this.w.globals.zoomed=!0,this.ctx.updateHelpers._updateOptions(r,!1,this.w.config.chart.animations.dynamicAnimation.enabled),this.zoomCallback(a,o)}}else this.handleZoomReset()}},{key:"zoomCallback",value:function(t,e){"function"==typeof this.ev.zoomed&&this.ev.zoomed(this.ctx,{xaxis:t,yaxis:e})}},{key:"getBeforeZoomRange",value:function(t,e){var i=null;return"function"==typeof this.ev.beforeZoom&&(i=this.ev.beforeZoom(this,{xaxis:t,yaxis:e})),i}},{key:"toggleMenu",value:function(){var t=this;window.setTimeout((function(){t.elMenu.classList.contains("apexcharts-menu-open")?t.elMenu.classList.remove("apexcharts-menu-open"):t.elMenu.classList.add("apexcharts-menu-open")}),0)}},{key:"handleDownload",value:function(t){var e=this.w,i=new j(this.ctx);switch(t){case"svg":i.exportToSVG(this.ctx);break;case"png":i.exportToPng(this.ctx);break;case"csv":i.exportToCSV({series:e.config.series,columnDelimiter:e.config.chart.toolbar.export.csv.columnDelimiter})}}},{key:"handleZoomReset",value:function(t){this.ctx.getSyncedCharts().forEach((function(t){var e=t.w;if(e.globals.lastXAxis.min=void 0,e.globals.lastXAxis.max=void 0,t.updateHelpers.revertDefaultAxisMinMax(),"function"==typeof e.config.chart.events.beforeResetZoom){var i=e.config.chart.events.beforeResetZoom(t,e);i&&t.updateHelpers.revertDefaultAxisMinMax(i)}"function"==typeof e.config.chart.events.zoomed&&t.ctx.toolbar.zoomCallback({min:e.config.xaxis.min,max:e.config.xaxis.max}),e.globals.zoomed=!1;var a=t.ctx.series.emptyCollapsedSeries(x.clone(e.globals.initialSeries));t.updateHelpers._updateSeries(a,e.config.chart.animations.dynamicAnimation.enabled)}))}},{key:"destroy",value:function(){this.elZoom=null,this.elZoomIn=null,this.elZoomOut=null,this.elPan=null,this.elSelection=null,this.elZoomReset=null,this.elMenuIcon=null}}]),t}(),gt=function(t){n(i,dt);var e=d(i);function i(t){var s;return a(this,i),(s=e.call(this,t)).ctx=t,s.w=t.w,s.dragged=!1,s.graphics=new m(s.ctx),s.eventList=["mousedown","mouseleave","mousemove","touchstart","touchmove","mouseup","touchend"],s.clientX=0,s.clientY=0,s.startX=0,s.endX=0,s.dragX=0,s.startY=0,s.endY=0,s.dragY=0,s.moveDirection="none",s}return r(i,[{key:"init",value:function(t){var e=this,i=t.xyRatios,a=this.w,s=this;this.xyRatios=i,this.zoomRect=this.graphics.drawRect(0,0,0,0),this.selectionRect=this.graphics.drawRect(0,0,0,0),this.gridRect=a.globals.dom.baseEl.querySelector(".apexcharts-grid"),this.zoomRect.node.classList.add("apexcharts-zoom-rect"),this.selectionRect.node.classList.add("apexcharts-selection-rect"),a.globals.dom.elGraphical.add(this.zoomRect),a.globals.dom.elGraphical.add(this.selectionRect),"x"===a.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,minY:0,maxX:a.globals.gridWidth,maxY:a.globals.gridHeight}).on("dragmove",this.selectionDragging.bind(this,"dragging")):"y"===a.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,maxX:a.globals.gridWidth}).on("dragmove",this.selectionDragging.bind(this,"dragging")):this.slDraggableRect=this.selectionRect.draggable().on("dragmove",this.selectionDragging.bind(this,"dragging")),this.preselectedSelection(),this.hoverArea=a.globals.dom.baseEl.querySelector("".concat(a.globals.chartClass," .apexcharts-svg")),this.hoverArea.classList.add("apexcharts-zoomable"),this.eventList.forEach((function(t){e.hoverArea.addEventListener(t,s.svgMouseEvents.bind(s,i),{capture:!1,passive:!0})}))}},{key:"destroy",value:function(){this.slDraggableRect&&(this.slDraggableRect.draggable(!1),this.slDraggableRect.off(),this.selectionRect.off()),this.selectionRect=null,this.zoomRect=null,this.gridRect=null}},{key:"svgMouseEvents",value:function(t,e){var i=this.w,a=this,s=this.ctx.toolbar,r=i.globals.zoomEnabled?i.config.chart.zoom.type:i.config.chart.selection.type,o=i.config.chart.toolbar.autoSelected;if(e.shiftKey?(this.shiftWasPressed=!0,s.enableZoomPanFromToolbar("pan"===o?"zoom":"pan")):this.shiftWasPressed&&(s.enableZoomPanFromToolbar(o),this.shiftWasPressed=!1),e.target){var n,l=e.target.classList;if(e.target.parentNode&&null!==e.target.parentNode&&(n=e.target.parentNode.classList),!(l.contains("apexcharts-selection-rect")||l.contains("apexcharts-legend-marker")||l.contains("apexcharts-legend-text")||n&&n.contains("apexcharts-toolbar"))){if(a.clientX="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientX:"touchend"===e.type?e.changedTouches[0].clientX:e.clientX,a.clientY="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientY:"touchend"===e.type?e.changedTouches[0].clientY:e.clientY,"mousedown"===e.type&&1===e.which){var h=a.gridRect.getBoundingClientRect();a.startX=a.clientX-h.left,a.startY=a.clientY-h.top,a.dragged=!1,a.w.globals.mousedown=!0}if(("mousemove"===e.type&&1===e.which||"touchmove"===e.type)&&(a.dragged=!0,i.globals.panEnabled?(i.globals.selection=null,a.w.globals.mousedown&&a.panDragging({context:a,zoomtype:r,xyRatios:t})):(a.w.globals.mousedown&&i.globals.zoomEnabled||a.w.globals.mousedown&&i.globals.selectionEnabled)&&(a.selection=a.selectionDrawing({context:a,zoomtype:r}))),"mouseup"===e.type||"touchend"===e.type||"mouseleave"===e.type){var c=a.gridRect.getBoundingClientRect();a.w.globals.mousedown&&(a.endX=a.clientX-c.left,a.endY=a.clientY-c.top,a.dragX=Math.abs(a.endX-a.startX),a.dragY=Math.abs(a.endY-a.startY),(i.globals.zoomEnabled||i.globals.selectionEnabled)&&a.selectionDrawn({context:a,zoomtype:r}),i.globals.panEnabled&&i.config.xaxis.convertedCatToNumeric&&a.delayedPanScrolled()),i.globals.zoomEnabled&&a.hideSelectionRect(this.selectionRect),a.dragged=!1,a.w.globals.mousedown=!1}this.makeSelectionRectDraggable()}}}},{key:"makeSelectionRectDraggable",value:function(){var t=this.w;if(this.selectionRect){var e=this.selectionRect.node.getBoundingClientRect();e.width>0&&e.height>0&&this.slDraggableRect.selectize({points:"l, r",pointSize:8,pointType:"rect"}).resize({constraint:{minX:0,minY:0,maxX:t.globals.gridWidth,maxY:t.globals.gridHeight}}).on("resizing",this.selectionDragging.bind(this,"resizing"))}}},{key:"preselectedSelection",value:function(){var t=this.w,e=this.xyRatios;if(!t.globals.zoomEnabled)if(void 0!==t.globals.selection&&null!==t.globals.selection)this.drawSelectionRect(t.globals.selection);else if(void 0!==t.config.chart.selection.xaxis.min&&void 0!==t.config.chart.selection.xaxis.max){var i=(t.config.chart.selection.xaxis.min-t.globals.minX)/e.xRatio,a={x:i,y:0,width:t.globals.gridWidth-(t.globals.maxX-t.config.chart.selection.xaxis.max)/e.xRatio-i,height:t.globals.gridHeight,translateX:0,translateY:0,selectionEnabled:!0};this.drawSelectionRect(a),this.makeSelectionRectDraggable(),"function"==typeof t.config.chart.events.selection&&t.config.chart.events.selection(this.ctx,{xaxis:{min:t.config.chart.selection.xaxis.min,max:t.config.chart.selection.xaxis.max},yaxis:{}})}}},{key:"drawSelectionRect",value:function(t){var e=t.x,i=t.y,a=t.width,s=t.height,r=t.translateX,o=void 0===r?0:r,n=t.translateY,l=void 0===n?0:n,h=this.w,c=this.zoomRect,d=this.selectionRect;if(this.dragged||null!==h.globals.selection){var g={transform:"translate("+o+", "+l+")"};h.globals.zoomEnabled&&this.dragged&&(a<0&&(a=1),c.attr({x:e,y:i,width:a,height:s,fill:h.config.chart.zoom.zoomedArea.fill.color,"fill-opacity":h.config.chart.zoom.zoomedArea.fill.opacity,stroke:h.config.chart.zoom.zoomedArea.stroke.color,"stroke-width":h.config.chart.zoom.zoomedArea.stroke.width,"stroke-opacity":h.config.chart.zoom.zoomedArea.stroke.opacity}),m.setAttrs(c.node,g)),h.globals.selectionEnabled&&(d.attr({x:e,y:i,width:a>0?a:0,height:s>0?s:0,fill:h.config.chart.selection.fill.color,"fill-opacity":h.config.chart.selection.fill.opacity,stroke:h.config.chart.selection.stroke.color,"stroke-width":h.config.chart.selection.stroke.width,"stroke-dasharray":h.config.chart.selection.stroke.dashArray,"stroke-opacity":h.config.chart.selection.stroke.opacity}),m.setAttrs(d.node,g))}}},{key:"hideSelectionRect",value:function(t){t&&t.attr({x:0,y:0,width:0,height:0})}},{key:"selectionDrawing",value:function(t){var e=t.context,i=t.zoomtype,a=this.w,s=e,r=this.gridRect.getBoundingClientRect(),o=s.startX-1,n=s.startY,l=!1,h=!1,c=s.clientX-r.left-o,d=s.clientY-r.top-n,g={};return Math.abs(c+o)>a.globals.gridWidth?c=a.globals.gridWidth-o:s.clientX-r.left<0&&(c=o),o>s.clientX-r.left&&(l=!0,c=Math.abs(c)),n>s.clientY-r.top&&(h=!0,d=Math.abs(d)),g="x"===i?{x:l?o-c:o,y:0,width:c,height:a.globals.gridHeight}:"y"===i?{x:0,y:h?n-d:n,width:a.globals.gridWidth,height:d}:{x:l?o-c:o,y:h?n-d:n,width:c,height:d},s.drawSelectionRect(g),s.selectionDragging("resizing"),g}},{key:"selectionDragging",value:function(t,e){var i=this,a=this.w,s=this.xyRatios,r=this.selectionRect,o=0;"resizing"===t&&(o=30);var n=function(t){return parseFloat(r.node.getAttribute(t))},l={x:n("x"),y:n("y"),width:n("width"),height:n("height")};a.globals.selection=l,"function"==typeof a.config.chart.events.selection&&a.globals.selectionEnabled&&(clearTimeout(this.w.globals.selectionResizeTimer),this.w.globals.selectionResizeTimer=window.setTimeout((function(){var t=i.gridRect.getBoundingClientRect(),e=r.node.getBoundingClientRect(),o={xaxis:{min:a.globals.xAxisScale.niceMin+(e.left-t.left)*s.xRatio,max:a.globals.xAxisScale.niceMin+(e.right-t.left)*s.xRatio},yaxis:{min:a.globals.yAxisScale[0].niceMin+(t.bottom-e.bottom)*s.yRatio[0],max:a.globals.yAxisScale[0].niceMax-(e.top-t.top)*s.yRatio[0]}};a.config.chart.events.selection(i.ctx,o),a.config.chart.brush.enabled&&void 0!==a.config.chart.events.brushScrolled&&a.config.chart.events.brushScrolled(i.ctx,o)}),o))}},{key:"selectionDrawn",value:function(t){var e=t.context,i=t.zoomtype,a=this.w,s=e,r=this.xyRatios,o=this.ctx.toolbar;if(s.startX>s.endX){var n=s.startX;s.startX=s.endX,s.endX=n}if(s.startY>s.endY){var l=s.startY;s.startY=s.endY,s.endY=l}var h=void 0,c=void 0;a.globals.isRangeBar?(h=a.globals.yAxisScale[0].niceMin+s.startX*r.invertedYRatio,c=a.globals.yAxisScale[0].niceMin+s.endX*r.invertedYRatio):(h=a.globals.xAxisScale.niceMin+s.startX*r.xRatio,c=a.globals.xAxisScale.niceMin+s.endX*r.xRatio);var d=[],g=[];if(a.config.yaxis.forEach((function(t,e){d.push(a.globals.yAxisScale[e].niceMax-r.yRatio[e]*s.startY),g.push(a.globals.yAxisScale[e].niceMax-r.yRatio[e]*s.endY)})),s.dragged&&(s.dragX>10||s.dragY>10)&&h!==c)if(a.globals.zoomEnabled){var u=x.clone(a.globals.initialConfig.yaxis),p=x.clone(a.globals.initialConfig.xaxis);if(a.globals.zoomed=!0,a.config.xaxis.convertedCatToNumeric&&(h=Math.floor(h),c=Math.floor(c),h<1&&(h=1,c=a.globals.dataPoints),c-h<2&&(c=h+1)),"xy"!==i&&"x"!==i||(p={min:h,max:c}),"xy"!==i&&"y"!==i||u.forEach((function(t,e){u[e].min=g[e],u[e].max=d[e]})),a.config.chart.zoom.autoScaleYaxis){var f=new q(s.ctx);u=f.autoScaleY(s.ctx,u,{xaxis:p})}if(o){var b=o.getBeforeZoomRange(p,u);b&&(p=b.xaxis?b.xaxis:p,u=b.yaxis?b.yaxis:u)}var v={xaxis:p};a.config.chart.group||(v.yaxis=u),s.ctx.updateHelpers._updateOptions(v,!1,s.w.config.chart.animations.dynamicAnimation.enabled),"function"==typeof a.config.chart.events.zoomed&&o.zoomCallback(p,u)}else if(a.globals.selectionEnabled){var m,y=null;m={min:h,max:c},"xy"!==i&&"y"!==i||(y=x.clone(a.config.yaxis)).forEach((function(t,e){y[e].min=g[e],y[e].max=d[e]})),a.globals.selection=s.selection,"function"==typeof a.config.chart.events.selection&&a.config.chart.events.selection(s.ctx,{xaxis:m,yaxis:y})}}},{key:"panDragging",value:function(t){var e=t.context,i=this.w,a=e;if(void 0!==i.globals.lastClientPosition.x){var s=i.globals.lastClientPosition.x-a.clientX,r=i.globals.lastClientPosition.y-a.clientY;Math.abs(s)>Math.abs(r)&&s>0?this.moveDirection="left":Math.abs(s)>Math.abs(r)&&s<0?this.moveDirection="right":Math.abs(r)>Math.abs(s)&&r>0?this.moveDirection="up":Math.abs(r)>Math.abs(s)&&r<0&&(this.moveDirection="down")}i.globals.lastClientPosition={x:a.clientX,y:a.clientY};var o=i.globals.isRangeBar?i.globals.minY:i.globals.minX,n=i.globals.isRangeBar?i.globals.maxY:i.globals.maxX;i.config.xaxis.convertedCatToNumeric||a.panScrolled(o,n)}},{key:"delayedPanScrolled",value:function(){var t=this.w,e=t.globals.minX,i=t.globals.maxX,a=(t.globals.maxX-t.globals.minX)/2;"left"===this.moveDirection?(e=t.globals.minX+a,i=t.globals.maxX+a):"right"===this.moveDirection&&(e=t.globals.minX-a,i=t.globals.maxX-a),e=Math.floor(e),i=Math.floor(i),this.updateScrolledChart({xaxis:{min:e,max:i}},e,i)}},{key:"panScrolled",value:function(t,e){var i=this.w,a=this.xyRatios,s=x.clone(i.globals.initialConfig.yaxis),r=a.xRatio,o=i.globals.minX,n=i.globals.maxX;i.globals.isRangeBar&&(r=a.invertedYRatio,o=i.globals.minY,n=i.globals.maxY),"left"===this.moveDirection?(t=o+i.globals.gridWidth/15*r,e=n+i.globals.gridWidth/15*r):"right"===this.moveDirection&&(t=o-i.globals.gridWidth/15*r,e=n-i.globals.gridWidth/15*r),i.globals.isRangeBar||(t<i.globals.initialMinX||e>i.globals.initialMaxX)&&(t=o,e=n);var l={min:t,max:e};i.config.chart.zoom.autoScaleYaxis&&(s=new q(this.ctx).autoScaleY(this.ctx,s,{xaxis:l}));var h={xaxis:{min:t,max:e}};i.config.chart.group||(h.yaxis=s),this.updateScrolledChart(h,t,e)}},{key:"updateScrolledChart",value:function(t,e,i){var a=this.w;this.ctx.updateHelpers._updateOptions(t,!1,!1),"function"==typeof a.config.chart.events.scrolled&&a.config.chart.events.scrolled(this.ctx,{xaxis:{min:e,max:i}})}}]),i}(),ut=function(){function t(e){a(this,t),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx}return r(t,[{key:"getNearestValues",value:function(t){var e=t.hoverArea,i=t.elGrid,a=t.clientX,s=t.clientY,r=this.w,o=i.getBoundingClientRect(),n=o.width,l=o.height,h=n/(r.globals.dataPoints-1),c=l/r.globals.dataPoints,d=this.hasBars();!r.globals.comboCharts&&!d||r.config.xaxis.convertedCatToNumeric||(h=n/r.globals.dataPoints);var g=a-o.left-r.globals.barPadForNumericAxis,u=s-o.top;g<0||u<0||g>n||u>l?(e.classList.remove("hovering-zoom"),e.classList.remove("hovering-pan")):r.globals.zoomEnabled?(e.classList.remove("hovering-pan"),e.classList.add("hovering-zoom")):r.globals.panEnabled&&(e.classList.remove("hovering-zoom"),e.classList.add("hovering-pan"));var p=Math.round(g/h),f=Math.floor(u/c);d&&!r.config.xaxis.convertedCatToNumeric&&(p=Math.ceil(g/h),p-=1);var b=null,v=null,m=[],y=[];if(r.globals.seriesXvalues.forEach((function(t){m.push([t[0]+1e-6].concat(t))})),r.globals.seriesYvalues.forEach((function(t){y.push([t[0]+1e-6].concat(t))})),m=m.map((function(t){return t.filter((function(t){return x.isNumber(t)}))})),y=y.map((function(t){return t.filter((function(t){return x.isNumber(t)}))})),r.globals.isXNumeric){var w=this.ttCtx.getElGrid().getBoundingClientRect(),k=g*(w.width/n),A=u*(w.height/l);b=(v=this.closestInMultiArray(k,A,m,y)).index,p=v.j,null!==b&&(m=r.globals.seriesXvalues[b],p=(v=this.closestInArray(k,m)).index)}return r.globals.capturedSeriesIndex=null===b?-1:b,(!p||p<1)&&(p=0),r.globals.isBarHorizontal?r.globals.capturedDataPointIndex=f:r.globals.capturedDataPointIndex=p,{capturedSeries:b,j:r.globals.isBarHorizontal?f:p,hoverX:g,hoverY:u}}},{key:"closestInMultiArray",value:function(t,e,i,a){var s=this.w,r=0,o=null,n=-1;s.globals.series.length>1?r=this.getFirstActiveXArray(i):o=0;var l=i[r][0],h=Math.abs(t-l);if(i.forEach((function(e){e.forEach((function(e,i){var a=Math.abs(t-e);a<h&&(h=a,n=i)}))})),-1!==n){var c=a[r][n],d=Math.abs(e-c);o=r,a.forEach((function(t,i){var a=Math.abs(e-t[n]);a<d&&(d=a,o=i)}))}return{index:o,j:n}}},{key:"getFirstActiveXArray",value:function(t){for(var e=this.w,i=0,a=t.map((function(t,e){return t.length>0?e:-1})),s=0;s<a.length;s++)if(-1!==a[s]&&-1===e.globals.collapsedSeriesIndices.indexOf(s)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(s)){i=a[s];break}return i}},{key:"closestInArray",value:function(t,e){for(var i=e[0],a=null,s=Math.abs(t-i),r=0;r<e.length;r++){var o=Math.abs(t-e[r]);o<s&&(s=o,a=r)}return{index:a}}},{key:"isXoverlap",value:function(t){var e=[],i=this.w.globals.seriesX.filter((function(t){return void 0!==t[0]}));if(i.length>0)for(var a=0;a<i.length-1;a++)void 0!==i[a][t]&&void 0!==i[a+1][t]&&i[a][t]!==i[a+1][t]&&e.push("unEqual");return 0===e.length}},{key:"isInitialSeriesSameLen",value:function(){for(var t=!0,e=this.w.globals.initialSeries,i=0;i<e.length-1;i++)if(e[i].data.length!==e[i+1].data.length){t=!1;break}return t}},{key:"getBarsHeight",value:function(t){return u(t).reduce((function(t,e){return t+e.getBBox().height}),0)}},{key:"getElMarkers",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers")}},{key:"getAllMarkers",value:function(){var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");(t=u(t)).sort((function(t,e){var i=Number(t.getAttribute("data:realIndex")),a=Number(e.getAttribute("data:realIndex"));return a<i?1:a>i?-1:0}));var e=[];return t.forEach((function(t){e.push(t.querySelector(".apexcharts-marker"))})),e}},{key:"hasMarkers",value:function(){return this.getElMarkers().length>0}},{key:"getElBars",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series")}},{key:"hasBars",value:function(){return this.getElBars().length>0}},{key:"getHoverMarkerSize",value:function(t){var e=this.w,i=e.config.markers.hover.size;return void 0===i&&(i=e.globals.markers.size[t]+e.config.markers.hover.sizeOffset),i}},{key:"toggleAllTooltipSeriesGroups",value:function(t){var e=this.w,i=this.ttCtx;0===i.allTooltipSeriesGroups.length&&(i.allTooltipSeriesGroups=e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));for(var a=i.allTooltipSeriesGroups,s=0;s<a.length;s++)"enable"===t?(a[s].classList.add("apexcharts-active"),a[s].style.display=e.config.tooltip.items.display):(a[s].classList.remove("apexcharts-active"),a[s].style.display="none")}}]),t}(),pt=function(){function t(e){a(this,t),this.w=e.w,this.ctx=e.ctx,this.ttCtx=e,this.tooltipUtil=new ut(e)}return r(t,[{key:"drawSeriesTexts",value:function(t){var e=t.shared,i=void 0===e||e,a=t.ttItems,s=t.i,r=void 0===s?0:s,o=t.j,n=void 0===o?null:o,l=t.y1,h=t.y2,c=t.e,d=this.w;void 0!==d.config.tooltip.custom?this.handleCustomTooltip({i:r,j:n,y1:l,y2:h,w:d}):this.toggleActiveInactiveSeries(i);var g=this.getValuesToPrint({i:r,j:n});this.printLabels({i:r,j:n,values:g,ttItems:a,shared:i,e:c});var u=this.ttCtx.getElTooltip();this.ttCtx.tooltipRect.ttWidth=u.getBoundingClientRect().width,this.ttCtx.tooltipRect.ttHeight=u.getBoundingClientRect().height}},{key:"printLabels",value:function(t){var i,a=this,s=t.i,r=t.j,o=t.values,n=t.ttItems,l=t.shared,h=t.e,c=this.w,d=[],g=function(t){return c.globals.seriesGoals[t]&&c.globals.seriesGoals[t][r]&&Array.isArray(c.globals.seriesGoals[t][r])},u=o.xVal,p=o.zVal,f=o.xAxisTTVal,x="",b=c.globals.colors[s];null!==r&&c.config.plotOptions.bar.distributed&&(b=c.globals.colors[r]);for(var v=function(t,o){var v=a.getFormatters(s);x=a.getSeriesName({fn:v.yLbTitleFormatter,index:s,seriesIndex:s,j:r}),"treemap"===c.config.chart.type&&(x=v.yLbTitleFormatter(String(c.config.series[s].data[r].x),{series:c.globals.series,seriesIndex:s,dataPointIndex:r,w:c}));var m=c.config.tooltip.inverseOrder?o:t;if(c.globals.axisCharts){var y=function(t){return v.yLbFormatter(c.globals.series[t][r],{series:c.globals.series,seriesIndex:t,dataPointIndex:r,w:c})};if(l)v=a.getFormatters(m),x=a.getSeriesName({fn:v.yLbTitleFormatter,index:m,seriesIndex:s,j:r}),b=c.globals.colors[m],i=y(m),g(m)&&(d=c.globals.seriesGoals[m][r].map((function(t){return{attrs:t,val:v.yLbFormatter(t.value,{seriesIndex:m,dataPointIndex:r,w:c})}})));else{var w,k=null==h||null===(w=h.target)||void 0===w?void 0:w.getAttribute("fill");k&&(b=-1!==k.indexOf("url")?document.querySelector(k.substr(4).slice(0,-1)).childNodes[0].getAttribute("stroke"):k),i=y(s),g(s)&&Array.isArray(c.globals.seriesGoals[s][r])&&(d=c.globals.seriesGoals[s][r].map((function(t){return{attrs:t,val:v.yLbFormatter(t.value,{seriesIndex:s,dataPointIndex:r,w:c})}})))}}null===r&&(i=v.yLbFormatter(c.globals.series[s],e(e({},c),{},{seriesIndex:s,dataPointIndex:s}))),a.DOMHandling({i:s,t:m,j:r,ttItems:n,values:{val:i,goalVals:d,xVal:u,xAxisTTVal:f,zVal:p},seriesName:x,shared:l,pColor:b})},m=0,y=c.globals.series.length-1;m<c.globals.series.length;m++,y--)v(m,y)}},{key:"getFormatters",value:function(t){var e,i=this.w,a=i.globals.yLabelFormatters[t];return void 0!==i.globals.ttVal?Array.isArray(i.globals.ttVal)?(a=i.globals.ttVal[t]&&i.globals.ttVal[t].formatter,e=i.globals.ttVal[t]&&i.globals.ttVal[t].title&&i.globals.ttVal[t].title.formatter):(a=i.globals.ttVal.formatter,"function"==typeof i.globals.ttVal.title.formatter&&(e=i.globals.ttVal.title.formatter)):e=i.config.tooltip.y.title.formatter,"function"!=typeof a&&(a=i.globals.yLabelFormatters[0]?i.globals.yLabelFormatters[0]:function(t){return t}),"function"!=typeof e&&(e=function(t){return t}),{yLbFormatter:a,yLbTitleFormatter:e}}},{key:"getSeriesName",value:function(t){var e=t.fn,i=t.index,a=t.seriesIndex,s=t.j,r=this.w;return e(String(r.globals.seriesNames[i]),{series:r.globals.series,seriesIndex:a,dataPointIndex:s,w:r})}},{key:"DOMHandling",value:function(t){t.i;var e=t.t,i=t.j,a=t.ttItems,s=t.values,r=t.seriesName,o=t.shared,n=t.pColor,l=this.w,h=this.ttCtx,c=s.val,d=s.goalVals,g=s.xVal,u=s.xAxisTTVal,p=s.zVal,f=null;f=a[e].children,l.config.tooltip.fillSeriesColor&&(a[e].style.backgroundColor=n,f[0].style.display="none"),h.showTooltipTitle&&(null===h.tooltipTitle&&(h.tooltipTitle=l.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")),h.tooltipTitle.innerHTML=g),h.isXAxisTooltipEnabled&&(h.xaxisTooltipText.innerHTML=""!==u?u:g);var x=a[e].querySelector(".apexcharts-tooltip-text-y-label");x&&(x.innerHTML=r||"");var b=a[e].querySelector(".apexcharts-tooltip-text-y-value");b&&(b.innerHTML=void 0!==c?c:""),f[0]&&f[0].classList.contains("apexcharts-tooltip-marker")&&(l.config.tooltip.marker.fillColors&&Array.isArray(l.config.tooltip.marker.fillColors)&&(n=l.config.tooltip.marker.fillColors[e]),f[0].style.backgroundColor=n),l.config.tooltip.marker.show||(f[0].style.display="none");var v=a[e].querySelector(".apexcharts-tooltip-text-goals-label"),m=a[e].querySelector(".apexcharts-tooltip-text-goals-value");if(d.length&&l.globals.seriesGoals[e]){var y=function(){var t="<div >",e="<div>";d.forEach((function(i,a){t+=' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(i.attrs.strokeColor,'; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(i.attrs.name,"</div>"),e+="<div>".concat(i.val,"</div>")})),v.innerHTML=t+"</div>",m.innerHTML=e+"</div>"};o?l.globals.seriesGoals[e][i]&&Array.isArray(l.globals.seriesGoals[e][i])?y():(v.innerHTML="",m.innerHTML=""):y()}else v.innerHTML="",m.innerHTML="";null!==p&&(a[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML=l.config.tooltip.z.title,a[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML=void 0!==p?p:"");o&&f[0]&&(null==c||l.globals.ancillaryCollapsedSeriesIndices.indexOf(e)>-1||l.globals.collapsedSeriesIndices.indexOf(e)>-1?f[0].parentNode.style.display="none":f[0].parentNode.style.display=l.config.tooltip.items.display)}},{key:"toggleActiveInactiveSeries",value:function(t){var e=this.w;if(t)this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");else{this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");var i=e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");i&&(i.classList.add("apexcharts-active"),i.style.display=e.config.tooltip.items.display)}}},{key:"getValuesToPrint",value:function(t){var e=t.i,i=t.j,a=this.w,s=this.ctx.series.filteredSeriesX(),r="",o="",n=null,l=null,h={series:a.globals.series,seriesIndex:e,dataPointIndex:i,w:a},c=a.globals.ttZFormatter;null===i?l=a.globals.series[e]:a.globals.isXNumeric&&"treemap"!==a.config.chart.type?(r=s[e][i],0===s[e].length&&(r=s[this.tooltipUtil.getFirstActiveXArray(s)][i])):r=void 0!==a.globals.labels[i]?a.globals.labels[i]:"";var d=r;a.globals.isXNumeric&&"datetime"===a.config.xaxis.type?r=new V(this.ctx).xLabelFormat(a.globals.ttKeyFormatter,d,d,{i:void 0,dateFormatter:new R(this.ctx).formatDate,w:this.w}):r=a.globals.isBarHorizontal?a.globals.yLabelFormatters[0](d,h):a.globals.xLabelFormatter(d,h);return void 0!==a.config.tooltip.x.formatter&&(r=a.globals.ttKeyFormatter(d,h)),a.globals.seriesZ.length>0&&a.globals.seriesZ[e].length>0&&(n=c(a.globals.seriesZ[e][i],a)),o="function"==typeof a.config.xaxis.tooltip.formatter?a.globals.xaxisTooltipFormatter(d,h):r,{val:Array.isArray(l)?l.join(" "):l,xVal:Array.isArray(r)?r.join(" "):r,xAxisTTVal:Array.isArray(o)?o.join(" "):o,zVal:n}}},{key:"handleCustomTooltip",value:function(t){var e=t.i,i=t.j,a=t.y1,s=t.y2,r=t.w,o=this.ttCtx.getElTooltip(),n=r.config.tooltip.custom;Array.isArray(n)&&n[e]&&(n=n[e]),o.innerHTML=n({ctx:this.ctx,series:r.globals.series,seriesIndex:e,dataPointIndex:i,y1:a,y2:s,w:r})}}]),t}(),ft=function(){function t(e){a(this,t),this.ttCtx=e,this.ctx=e.ctx,this.w=e.w}return r(t,[{key:"moveXCrosshairs",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.ttCtx,a=this.w,s=i.getElXCrosshairs(),r=t-i.xcrosshairsWidth/2,o=a.globals.labels.slice().length;if(null!==e&&(r=a.globals.gridWidth/o*e),null===s||a.globals.isBarHorizontal||(s.setAttribute("x",r),s.setAttribute("x1",r),s.setAttribute("x2",r),s.setAttribute("y2",a.globals.gridHeight),s.classList.add("apexcharts-active")),r<0&&(r=0),r>a.globals.gridWidth&&(r=a.globals.gridWidth),i.isXAxisTooltipEnabled){var n=r;"tickWidth"!==a.config.xaxis.crosshairs.width&&"barWidth"!==a.config.xaxis.crosshairs.width||(n=r+i.xcrosshairsWidth/2),this.moveXAxisTooltip(n)}}},{key:"moveYCrosshairs",value:function(t){var e=this.ttCtx;null!==e.ycrosshairs&&m.setAttrs(e.ycrosshairs,{y1:t,y2:t}),null!==e.ycrosshairsHidden&&m.setAttrs(e.ycrosshairsHidden,{y1:t,y2:t})}},{key:"moveXAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;if(null!==i.xaxisTooltip&&0!==i.xcrosshairsWidth){i.xaxisTooltip.classList.add("apexcharts-active");var a=i.xaxisOffY+e.config.xaxis.tooltip.offsetY+e.globals.translateY+1+e.config.xaxis.offsetY;if(t-=i.xaxisTooltip.getBoundingClientRect().width/2,!isNaN(t)){t+=e.globals.translateX;var s;s=new m(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML),i.xaxisTooltipText.style.minWidth=s.width+"px",i.xaxisTooltip.style.left=t+"px",i.xaxisTooltip.style.top=a+"px"}}}},{key:"moveYAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;null===i.yaxisTTEls&&(i.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));var a=parseInt(i.ycrosshairsHidden.getAttribute("y1"),10),s=e.globals.translateY+a,r=i.yaxisTTEls[t].getBoundingClientRect().height,o=e.globals.translateYAxisX[t]-2;e.config.yaxis[t].opposite&&(o-=26),s-=r/2,-1===e.globals.ignoreYAxisIndexes.indexOf(t)?(i.yaxisTTEls[t].classList.add("apexcharts-active"),i.yaxisTTEls[t].style.top=s+"px",i.yaxisTTEls[t].style.left=o+e.config.yaxis[t].tooltip.offsetX+"px"):i.yaxisTTEls[t].classList.remove("apexcharts-active")}},{key:"moveTooltip",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.w,s=this.ttCtx,r=s.getElTooltip(),o=s.tooltipRect,n=null!==i?parseFloat(i):1,l=parseFloat(t)+n+5,h=parseFloat(e)+n/2;if(l>a.globals.gridWidth/2&&(l=l-o.ttWidth-n-10),l>a.globals.gridWidth-o.ttWidth-10&&(l=a.globals.gridWidth-o.ttWidth),l<-20&&(l=-20),a.config.tooltip.followCursor){var c=s.getElGrid(),d=c.getBoundingClientRect();h=s.e.clientY+a.globals.translateY-d.top-o.ttHeight/2}else a.globals.isBarHorizontal||(o.ttHeight/2+h>a.globals.gridHeight&&(h=a.globals.gridHeight-o.ttHeight+a.globals.translateY),h<0&&(h=0));isNaN(l)||(l+=a.globals.translateX,r.style.left=l+"px",r.style.top=h+"px")}},{key:"moveMarkers",value:function(t,e){var i=this.w,a=this.ttCtx;if(i.globals.markers.size[t]>0)for(var s=i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t,"'] .apexcharts-marker")),r=0;r<s.length;r++)parseInt(s[r].getAttribute("rel"),10)===e&&(a.marker.resetPointsSize(),a.marker.enlargeCurrentPoint(e,s[r]));else a.marker.resetPointsSize(),this.moveDynamicPointOnHover(e,t)}},{key:"moveDynamicPointOnHover",value:function(t,e){var i,a,s=this.w,r=this.ttCtx,o=s.globals.pointsArray,n=r.tooltipUtil.getHoverMarkerSize(e),l=s.config.series[e].type;if(!l||"column"!==l&&"candlestick"!==l&&"boxPlot"!==l){i=o[e][t][0],a=o[e][t][1]?o[e][t][1]:0;var h=s.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e,"'] .apexcharts-series-markers circle"));h&&a<s.globals.gridHeight&&a>0&&(h.setAttribute("r",n),h.setAttribute("cx",i),h.setAttribute("cy",a)),this.moveXCrosshairs(i),r.fixedTooltip||this.moveTooltip(i,a,n)}}},{key:"moveDynamicPointsOnHover",value:function(t){var e,i=this.ttCtx,a=i.w,s=0,r=0,o=a.globals.pointsArray;e=new E(this.ctx).getActiveConfigSeriesIndex(!0);var n=i.tooltipUtil.getHoverMarkerSize(e);o[e]&&(s=o[e][t][0],r=o[e][t][1]);var l=i.tooltipUtil.getAllMarkers();if(null!==l)for(var h=0;h<a.globals.series.length;h++){var c=o[h];if(a.globals.comboCharts&&void 0===c&&l.splice(h,0,null),c&&c.length){var d=o[h][t][1];l[h].setAttribute("cx",s),null!==d&&!isNaN(d)&&d<a.globals.gridHeight+n&&d+n>0?(l[h]&&l[h].setAttribute("r",n),l[h]&&l[h].setAttribute("cy",d)):l[h]&&l[h].setAttribute("r",0)}}if(this.moveXCrosshairs(s),!i.fixedTooltip){var g=r||a.globals.gridHeight;this.moveTooltip(s,g,n)}}},{key:"moveStickyTooltipOverBars",value:function(t){var e=this.w,i=this.ttCtx,a=e.globals.columnSeries?e.globals.columnSeries.length:e.globals.series.length,s=a>=2&&a%2==0?Math.floor(a/2):Math.floor(a/2)+1;e.globals.isBarHorizontal&&(s=new E(this.ctx).getActiveConfigSeriesIndex(!1,"desc")+1);var r=e.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(s,"'] path[j='").concat(t,"'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(s,"'] path[j='").concat(t,"'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(s,"'] path[j='").concat(t,"'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(s,"'] path[j='").concat(t,"']")),o=r?parseFloat(r.getAttribute("cx")):0,n=r?parseFloat(r.getAttribute("cy")):0,l=r?parseFloat(r.getAttribute("barWidth")):0,h=r?parseFloat(r.getAttribute("barHeight")):0,c=i.getElGrid().getBoundingClientRect(),d=r.classList.contains("apexcharts-candlestick-area")||r.classList.contains("apexcharts-boxPlot-area");if(e.globals.isXNumeric?(r&&!d&&(o-=a%2!=0?l/2:0),r&&d&&e.globals.comboCharts&&(o-=l/2)):e.globals.isBarHorizontal||(o=i.xAxisTicksPositions[t-1]+i.dataPointsDividedWidth/2,isNaN(o)&&(o=i.xAxisTicksPositions[t]-i.dataPointsDividedWidth/2)),e.globals.isBarHorizontal?(n>e.globals.gridHeight/2&&(n-=i.tooltipRect.ttHeight),(n=n+e.config.grid.padding.top+h/3)+h>e.globals.gridHeight&&(n=e.globals.gridHeight-h)):e.config.tooltip.followCursor?n=i.e.clientY-c.top-i.tooltipRect.ttHeight/2:n+i.tooltipRect.ttHeight+15>e.globals.gridHeight&&(n=e.globals.gridHeight),n<-10&&(n=-10),e.globals.isBarHorizontal||this.moveXCrosshairs(o),!i.fixedTooltip){var g=n||e.globals.gridHeight;this.moveTooltip(o,g)}}}]),t}(),xt=function(){function t(e){a(this,t),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx,this.tooltipPosition=new ft(e)}return r(t,[{key:"drawDynamicPoints",value:function(){var t=this.w,e=new m(this.ctx),i=new T(this.ctx),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");a=u(a),t.config.chart.stacked&&a.sort((function(t,e){return parseFloat(t.getAttribute("data:realIndex"))-parseFloat(e.getAttribute("data:realIndex"))}));for(var s=0;s<a.length;s++){var r=a[s].querySelector(".apexcharts-series-markers-wrap");if(null!==r){var o=void 0,n="apexcharts-marker w".concat((Math.random()+1).toString(36).substring(4));"line"!==t.config.chart.type&&"area"!==t.config.chart.type||t.globals.comboCharts||t.config.tooltip.intersect||(n+=" no-pointer-events");var l=i.getMarkerConfig({cssClass:n,seriesIndex:Number(r.getAttribute("data:realIndex"))});(o=e.drawMarker(0,0,l)).node.setAttribute("default-marker-size",0);var h=document.createElementNS(t.globals.SVGNS,"g");h.classList.add("apexcharts-series-markers"),h.appendChild(o.node),r.appendChild(h)}}}},{key:"enlargeCurrentPoint",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=this.w;"bubble"!==s.config.chart.type&&this.newPointSize(t,e);var r=e.getAttribute("cx"),o=e.getAttribute("cy");if(null!==i&&null!==a&&(r=i,o=a),this.tooltipPosition.moveXCrosshairs(r),!this.fixedTooltip){if("radar"===s.config.chart.type){var n=this.ttCtx.getElGrid(),l=n.getBoundingClientRect();r=this.ttCtx.e.clientX-l.left}this.tooltipPosition.moveTooltip(r,o,s.config.markers.hover.size)}}},{key:"enlargePoints",value:function(t){for(var e=this.w,i=this,a=this.ttCtx,s=t,r=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),o=e.config.markers.hover.size,n=0;n<r.length;n++){var l=r[n].getAttribute("rel"),h=r[n].getAttribute("index");if(void 0===o&&(o=e.globals.markers.size[h]+e.config.markers.hover.sizeOffset),s===parseInt(l,10)){i.newPointSize(s,r[n]);var c=r[n].getAttribute("cx"),d=r[n].getAttribute("cy");i.tooltipPosition.moveXCrosshairs(c),a.fixedTooltip||i.tooltipPosition.moveTooltip(c,d,o)}else i.oldPointSize(r[n])}}},{key:"newPointSize",value:function(t,e){var i=this.w,a=i.config.markers.hover.size,s=0===t?e.parentNode.firstChild:e.parentNode.lastChild;if("0"!==s.getAttribute("default-marker-size")){var r=parseInt(s.getAttribute("index"),10);void 0===a&&(a=i.globals.markers.size[r]+i.config.markers.hover.sizeOffset),a<0&&(a=0),s.setAttribute("r",a)}}},{key:"oldPointSize",value:function(t){var e=parseFloat(t.getAttribute("default-marker-size"));t.setAttribute("r",e)}},{key:"resetPointsSize",value:function(){for(var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),e=0;e<t.length;e++){var i=parseFloat(t[e].getAttribute("default-marker-size"));x.isNumber(i)&&i>=0?t[e].setAttribute("r",i):t[e].setAttribute("r",0)}}}]),t}(),bt=function(){function t(e){a(this,t),this.w=e.w,this.ttCtx=e}return r(t,[{key:"getAttr",value:function(t,e){return parseFloat(t.target.getAttribute(e))}},{key:"handleHeatTreeTooltip",value:function(t){var e=t.e,i=t.opt,a=t.x,s=t.y,r=t.type,o=this.ttCtx,n=this.w;if(e.target.classList.contains("apexcharts-".concat(r,"-rect"))){var l=this.getAttr(e,"i"),h=this.getAttr(e,"j"),c=this.getAttr(e,"cx"),d=this.getAttr(e,"cy"),g=this.getAttr(e,"width"),u=this.getAttr(e,"height");if(o.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:l,j:h,shared:!1,e:e}),n.globals.capturedSeriesIndex=l,n.globals.capturedDataPointIndex=h,a=c+o.tooltipRect.ttWidth/2+g,s=d+o.tooltipRect.ttHeight/2-u/2,o.tooltipPosition.moveXCrosshairs(c+g/2),a>n.globals.gridWidth/2&&(a=c-o.tooltipRect.ttWidth/2+g),o.w.config.tooltip.followCursor){var p=n.globals.dom.elWrap.getBoundingClientRect();a=n.globals.clientX-p.left-(a>n.globals.gridWidth/2?o.tooltipRect.ttWidth:0),s=n.globals.clientY-p.top-(s>n.globals.gridHeight/2?o.tooltipRect.ttHeight:0)}}return{x:a,y:s}}},{key:"handleMarkerTooltip",value:function(t){var e,i,a=t.e,s=t.opt,r=t.x,o=t.y,n=this.w,l=this.ttCtx;if(a.target.classList.contains("apexcharts-marker")){var h=parseInt(s.paths.getAttribute("cx"),10),c=parseInt(s.paths.getAttribute("cy"),10),d=parseFloat(s.paths.getAttribute("val"));if(i=parseInt(s.paths.getAttribute("rel"),10),e=parseInt(s.paths.parentNode.parentNode.parentNode.getAttribute("rel"),10)-1,l.intersect){var g=x.findAncestor(s.paths,"apexcharts-series");g&&(e=parseInt(g.getAttribute("data:realIndex"),10))}if(l.tooltipLabels.drawSeriesTexts({ttItems:s.ttItems,i:e,j:i,shared:!l.showOnIntersect&&n.config.tooltip.shared,e:a}),"mouseup"===a.type&&l.markerClick(a,e,i),n.globals.capturedSeriesIndex=e,n.globals.capturedDataPointIndex=i,r=h,o=c+n.globals.translateY-1.4*l.tooltipRect.ttHeight,l.w.config.tooltip.followCursor){var u=l.getElGrid().getBoundingClientRect();o=l.e.clientY+n.globals.translateY-u.top}d<0&&(o=c),l.marker.enlargeCurrentPoint(i,s.paths,r,o)}return{x:r,y:o}}},{key:"handleBarTooltip",value:function(t){var e,i,a=t.e,s=t.opt,r=this.w,o=this.ttCtx,n=o.getElTooltip(),l=0,h=0,c=0,d=this.getBarTooltipXY({e:a,opt:s});e=d.i;var g=d.barHeight,u=d.j;r.globals.capturedSeriesIndex=e,r.globals.capturedDataPointIndex=u,r.globals.isBarHorizontal&&o.tooltipUtil.hasBars()||!r.config.tooltip.shared?(h=d.x,c=d.y,i=Array.isArray(r.config.stroke.width)?r.config.stroke.width[e]:r.config.stroke.width,l=h):r.globals.comboCharts||r.config.tooltip.shared||(l/=2),isNaN(c)?c=r.globals.svgHeight-o.tooltipRect.ttHeight:c<0&&(c=0);var p=parseInt(s.paths.parentNode.getAttribute("data:realIndex"),10),f=r.globals.isMultipleYAxis?r.config.yaxis[p]&&r.config.yaxis[p].reversed:r.config.yaxis[0].reversed;if(h+o.tooltipRect.ttWidth>r.globals.gridWidth&&!f?h-=o.tooltipRect.ttWidth:h<0&&(h=0),o.w.config.tooltip.followCursor){var x=o.getElGrid().getBoundingClientRect();c=o.e.clientY-x.top}null===o.tooltip&&(o.tooltip=r.globals.dom.baseEl.querySelector(".apexcharts-tooltip")),r.config.tooltip.shared||(r.globals.comboBarCount>0?o.tooltipPosition.moveXCrosshairs(l+i/2):o.tooltipPosition.moveXCrosshairs(l)),!o.fixedTooltip&&(!r.config.tooltip.shared||r.globals.isBarHorizontal&&o.tooltipUtil.hasBars())&&(f&&(h-=o.tooltipRect.ttWidth)<0&&(h=0),!f||r.globals.isBarHorizontal&&o.tooltipUtil.hasBars()||(c=c+g-2*(r.globals.series[e][u]<0?g:0)),o.tooltipRect.ttHeight+c>r.globals.gridHeight?c=r.globals.gridHeight-o.tooltipRect.ttHeight+r.globals.translateY:(c=c+r.globals.translateY-o.tooltipRect.ttHeight/2)<0&&(c=0),n.style.left=h+r.globals.translateX+"px",n.style.top=c+"px")}},{key:"getBarTooltipXY",value:function(t){var e=t.e,i=t.opt,a=this.w,s=null,r=this.ttCtx,o=0,n=0,l=0,h=0,c=0,d=e.target.classList;if(d.contains("apexcharts-bar-area")||d.contains("apexcharts-candlestick-area")||d.contains("apexcharts-boxPlot-area")||d.contains("apexcharts-rangebar-area")){var g=e.target,u=g.getBoundingClientRect(),p=i.elGrid.getBoundingClientRect(),f=u.height;c=u.height;var x=u.width,b=parseInt(g.getAttribute("cx"),10),v=parseInt(g.getAttribute("cy"),10);h=parseFloat(g.getAttribute("barWidth"));var m="touchmove"===e.type?e.touches[0].clientX:e.clientX;s=parseInt(g.getAttribute("j"),10),o=parseInt(g.parentNode.getAttribute("rel"),10)-1;var y=g.getAttribute("data-range-y1"),w=g.getAttribute("data-range-y2");a.globals.comboCharts&&(o=parseInt(g.parentNode.getAttribute("data:realIndex"),10)),r.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:o,j:s,y1:y?parseInt(y,10):null,y2:w?parseInt(w,10):null,shared:!r.showOnIntersect&&a.config.tooltip.shared,e:e}),a.config.tooltip.followCursor?a.globals.isBarHorizontal?(n=m-p.left+15,l=v-r.dataPointsDividedHeight+f/2-r.tooltipRect.ttHeight/2):(n=a.globals.isXNumeric?b-x/2:b-r.dataPointsDividedWidth+x/2,l=e.clientY-p.top-r.tooltipRect.ttHeight/2-15):a.globals.isBarHorizontal?((n=b)<r.xyRatios.baseLineInvertedY&&(n=b-r.tooltipRect.ttWidth),l=v-r.dataPointsDividedHeight+f/2-r.tooltipRect.ttHeight/2):(n=a.globals.isXNumeric?b-x/2:b-r.dataPointsDividedWidth+x/2,l=v)}return{x:n,y:l,barHeight:c,barWidth:h,i:o,j:s}}}]),t}(),vt=function(){function t(e){a(this,t),this.w=e.w,this.ttCtx=e}return r(t,[{key:"drawXaxisTooltip",value:function(){var t=this.w,e=this.ttCtx,i="bottom"===t.config.xaxis.position;e.xaxisOffY=i?t.globals.gridHeight+1:-t.globals.xAxisHeight-t.config.xaxis.axisTicks.height+3;var a=i?"apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom":"apexcharts-xaxistooltip apexcharts-xaxistooltip-top",s=t.globals.dom.elWrap;e.isXAxisTooltipEnabled&&(null===t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip")&&(e.xaxisTooltip=document.createElement("div"),e.xaxisTooltip.setAttribute("class",a+" apexcharts-theme-"+t.config.tooltip.theme),s.appendChild(e.xaxisTooltip),e.xaxisTooltipText=document.createElement("div"),e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"),e.xaxisTooltipText.style.fontFamily=t.config.xaxis.tooltip.style.fontFamily||t.config.chart.fontFamily,e.xaxisTooltipText.style.fontSize=t.config.xaxis.tooltip.style.fontSize,e.xaxisTooltip.appendChild(e.xaxisTooltipText)))}},{key:"drawYaxisTooltip",value:function(){for(var t=this.w,e=this.ttCtx,i=function(i){var a=t.config.yaxis[i].opposite||t.config.yaxis[i].crosshairs.opposite;e.yaxisOffX=a?t.globals.gridWidth+1:1;var s="apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i,a?" apexcharts-yaxistooltip-right":" apexcharts-yaxistooltip-left");t.globals.yAxisSameScaleIndices.map((function(e,a){e.map((function(e,a){a===i&&(s+=t.config.yaxis[a].show?" ":" apexcharts-yaxistooltip-hidden")}))}));var r=t.globals.dom.elWrap;null===t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i))&&(e.yaxisTooltip=document.createElement("div"),e.yaxisTooltip.setAttribute("class",s+" apexcharts-theme-"+t.config.tooltip.theme),r.appendChild(e.yaxisTooltip),0===i&&(e.yaxisTooltipText=[]),e.yaxisTooltipText[i]=document.createElement("div"),e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"),e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]))},a=0;a<t.config.yaxis.length;a++)i(a)}},{key:"setXCrosshairWidth",value:function(){var t=this.w,e=this.ttCtx,i=e.getElXCrosshairs();if(e.xcrosshairsWidth=parseInt(t.config.xaxis.crosshairs.width,10),t.globals.comboCharts){var a=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==a&&"barWidth"===t.config.xaxis.crosshairs.width){var s=parseFloat(a.getAttribute("barWidth"));e.xcrosshairsWidth=s}else if("tickWidth"===t.config.xaxis.crosshairs.width){var r=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/r}}else if("tickWidth"===t.config.xaxis.crosshairs.width){var o=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/o}else if("barWidth"===t.config.xaxis.crosshairs.width){var n=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==n){var l=parseFloat(n.getAttribute("barWidth"));e.xcrosshairsWidth=l}else e.xcrosshairsWidth=1}t.globals.isBarHorizontal&&(e.xcrosshairsWidth=0),null!==i&&e.xcrosshairsWidth>0&&i.setAttribute("width",e.xcrosshairsWidth)}},{key:"handleYCrosshair",value:function(){var t=this.w,e=this.ttCtx;e.ycrosshairs=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"),e.ycrosshairsHidden=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")}},{key:"drawYaxisTooltipText",value:function(t,e,i){var a=this.ttCtx,s=this.w,r=s.globals.yLabelFormatters[t];if(a.yaxisTooltips[t]){var o=a.getElGrid().getBoundingClientRect(),n=(e-o.top)*i.yRatio[t],l=s.globals.maxYArr[t]-s.globals.minYArr[t],h=s.globals.minYArr[t]+(l-n);a.tooltipPosition.moveYCrosshairs(e-o.top),a.yaxisTooltipText[t].innerHTML=r(h),a.tooltipPosition.moveYAxisTooltip(t)}}}]),t}(),mt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.tConfig=i.config.tooltip,this.tooltipUtil=new ut(this),this.tooltipLabels=new pt(this),this.tooltipPosition=new ft(this),this.marker=new xt(this),this.intersect=new bt(this),this.axesTooltip=new vt(this),this.showOnIntersect=this.tConfig.intersect,this.showTooltipTitle=this.tConfig.x.show,this.fixedTooltip=this.tConfig.fixed.enabled,this.xaxisTooltip=null,this.yaxisTTEls=null,this.isBarShared=!i.globals.isBarHorizontal&&this.tConfig.shared,this.lastHoverTime=Date.now()}return r(t,[{key:"getElTooltip",value:function(t){return t||(t=this),t.w.globals.dom.baseEl?t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip"):null}},{key:"getElXCrosshairs",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")}},{key:"getElGrid",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")}},{key:"drawTooltip",value:function(t){var e=this.w;this.xyRatios=t,this.isXAxisTooltipEnabled=e.config.xaxis.tooltip.enabled&&e.globals.axisCharts,this.yaxisTooltips=e.config.yaxis.map((function(t,i){return!!(t.show&&t.tooltip.enabled&&e.globals.axisCharts)})),this.allTooltipSeriesGroups=[],e.globals.axisCharts||(this.showTooltipTitle=!1);var i=document.createElement("div");if(i.classList.add("apexcharts-tooltip"),e.config.tooltip.cssClass&&i.classList.add(e.config.tooltip.cssClass),i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)),e.globals.dom.elWrap.appendChild(i),e.globals.axisCharts){this.axesTooltip.drawXaxisTooltip(),this.axesTooltip.drawYaxisTooltip(),this.axesTooltip.setXCrosshairWidth(),this.axesTooltip.handleYCrosshair();var a=new _(this.ctx);this.xAxisTicksPositions=a.getXAxisTicksPositions()}if(!e.globals.comboCharts&&!this.tConfig.intersect&&"rangeBar"!==e.config.chart.type||this.tConfig.shared||(this.showOnIntersect=!0),0!==e.config.markers.size&&0!==e.globals.markers.largestSize||this.marker.drawDynamicPoints(this),e.globals.collapsedSeries.length!==e.globals.series.length){this.dataPointsDividedHeight=e.globals.gridHeight/e.globals.dataPoints,this.dataPointsDividedWidth=e.globals.gridWidth/e.globals.dataPoints,this.showTooltipTitle&&(this.tooltipTitle=document.createElement("div"),this.tooltipTitle.classList.add("apexcharts-tooltip-title"),this.tooltipTitle.style.fontFamily=this.tConfig.style.fontFamily||e.config.chart.fontFamily,this.tooltipTitle.style.fontSize=this.tConfig.style.fontSize,i.appendChild(this.tooltipTitle));var s=e.globals.series.length;(e.globals.xyCharts||e.globals.comboCharts)&&this.tConfig.shared&&(s=this.showOnIntersect?1:e.globals.series.length),this.legendLabels=e.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"),this.ttItems=this.createTTElements(s),this.addSVGEvents()}}},{key:"createTTElements",value:function(t){for(var e=this,i=this.w,a=[],s=this.getElTooltip(),r=function(r){var o=document.createElement("div");o.classList.add("apexcharts-tooltip-series-group"),o.style.order=i.config.tooltip.inverseOrder?t-r:r+1,e.tConfig.shared&&e.tConfig.enabledOnSeries&&Array.isArray(e.tConfig.enabledOnSeries)&&e.tConfig.enabledOnSeries.indexOf(r)<0&&o.classList.add("apexcharts-tooltip-series-group-hidden");var n=document.createElement("span");n.classList.add("apexcharts-tooltip-marker"),n.style.backgroundColor=i.globals.colors[r],o.appendChild(n);var l=document.createElement("div");l.classList.add("apexcharts-tooltip-text"),l.style.fontFamily=e.tConfig.style.fontFamily||i.config.chart.fontFamily,l.style.fontSize=e.tConfig.style.fontSize,["y","goals","z"].forEach((function(t){var e=document.createElement("div");e.classList.add("apexcharts-tooltip-".concat(t,"-group"));var i=document.createElement("span");i.classList.add("apexcharts-tooltip-text-".concat(t,"-label")),e.appendChild(i);var a=document.createElement("span");a.classList.add("apexcharts-tooltip-text-".concat(t,"-value")),e.appendChild(a),l.appendChild(e)})),o.appendChild(l),s.appendChild(o),a.push(o)},o=0;o<t;o++)r(o);return a}},{key:"addSVGEvents",value:function(){var t=this.w,e=t.config.chart.type,i=this.getElTooltip(),a=!("bar"!==e&&"candlestick"!==e&&"boxPlot"!==e&&"rangeBar"!==e),s="area"===e||"line"===e||"scatter"===e||"bubble"===e||"radar"===e,r=t.globals.dom.Paper.node,o=this.getElGrid();o&&(this.seriesBound=o.getBoundingClientRect());var n,l=[],h=[],c={hoverArea:r,elGrid:o,tooltipEl:i,tooltipY:l,tooltipX:h,ttItems:this.ttItems};if(t.globals.axisCharts&&(s?n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker"):a?n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area"):"heatmap"!==e&&"treemap"!==e||(n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")),n&&n.length))for(var d=0;d<n.length;d++)l.push(n[d].getAttribute("cy")),h.push(n[d].getAttribute("cx"));if(t.globals.xyCharts&&!this.showOnIntersect||t.globals.comboCharts&&!this.showOnIntersect||a&&this.tooltipUtil.hasBars()&&this.tConfig.shared)this.addPathsEventListeners([r],c);else if(a&&!t.globals.comboCharts||s&&this.showOnIntersect)this.addDatapointEventsListeners(c);else if(!t.globals.axisCharts||"heatmap"===e||"treemap"===e){var g=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");this.addPathsEventListeners(g,c)}if(this.showOnIntersect){var u=t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");u.length>0&&this.addPathsEventListeners(u,c),this.tooltipUtil.hasBars()&&!this.tConfig.shared&&this.addDatapointEventsListeners(c)}}},{key:"drawFixedTooltipRect",value:function(){var t=this.w,e=this.getElTooltip(),i=e.getBoundingClientRect(),a=i.width+10,s=i.height+10,r=this.tConfig.fixed.offsetX,o=this.tConfig.fixed.offsetY,n=this.tConfig.fixed.position.toLowerCase();return n.indexOf("right")>-1&&(r=r+t.globals.svgWidth-a+10),n.indexOf("bottom")>-1&&(o=o+t.globals.svgHeight-s-10),e.style.left=r+"px",e.style.top=o+"px",{x:r,y:o,ttWidth:a,ttHeight:s}}},{key:"addDatapointEventsListeners",value:function(t){var e=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");this.addPathsEventListeners(e,t)}},{key:"addPathsEventListeners",value:function(t,e){for(var i=this,a=function(a){var s={paths:t[a],tooltipEl:e.tooltipEl,tooltipY:e.tooltipY,tooltipX:e.tooltipX,elGrid:e.elGrid,hoverArea:e.hoverArea,ttItems:e.ttItems};["mousemove","mouseup","touchmove","mouseout","touchend"].map((function(e){return t[a].addEventListener(e,i.onSeriesHover.bind(i,s),{capture:!1,passive:!0})}))},s=0;s<t.length;s++)a(s)}},{key:"onSeriesHover",value:function(t,e){var i=this,a=Date.now()-this.lastHoverTime;a>=100?this.seriesHover(t,e):(clearTimeout(this.seriesHoverTimeout),this.seriesHoverTimeout=setTimeout((function(){i.seriesHover(t,e)}),100-a))}},{key:"seriesHover",value:function(t,e){var i=this;this.lastHoverTime=Date.now();var a=[],s=this.w;s.config.chart.group&&(a=this.ctx.getGroupedCharts()),s.globals.axisCharts&&(s.globals.minX===-1/0&&s.globals.maxX===1/0||0===s.globals.dataPoints)||(a.length?a.forEach((function(a){var s=i.getElTooltip(a),r={paths:t.paths,tooltipEl:s,tooltipY:t.tooltipY,tooltipX:t.tooltipX,elGrid:t.elGrid,hoverArea:t.hoverArea,ttItems:a.w.globals.tooltip.ttItems};a.w.globals.minX===i.w.globals.minX&&a.w.globals.maxX===i.w.globals.maxX&&a.w.globals.tooltip.seriesHoverByContext({chartCtx:a,ttCtx:a.w.globals.tooltip,opt:r,e:e})})):this.seriesHoverByContext({chartCtx:this.ctx,ttCtx:this.w.globals.tooltip,opt:t,e:e}))}},{key:"seriesHoverByContext",value:function(t){var e=t.chartCtx,i=t.ttCtx,a=t.opt,s=t.e,r=e.w,o=this.getElTooltip();if(o){if(i.tooltipRect={x:0,y:0,ttWidth:o.getBoundingClientRect().width,ttHeight:o.getBoundingClientRect().height},i.e=s,i.tooltipUtil.hasBars()&&!r.globals.comboCharts&&!i.isBarShared)if(this.tConfig.onDatasetHover.highlightDataSeries)new E(e).toggleSeriesOnHover(s,s.target.parentNode);i.fixedTooltip&&i.drawFixedTooltipRect(),r.globals.axisCharts?i.axisChartsTooltips({e:s,opt:a,tooltipRect:i.tooltipRect}):i.nonAxisChartsTooltips({e:s,opt:a,tooltipRect:i.tooltipRect})}}},{key:"axisChartsTooltips",value:function(t){var e,i,a=t.e,s=t.opt,r=this.w,o=s.elGrid.getBoundingClientRect(),n="touchmove"===a.type?a.touches[0].clientX:a.clientX,l="touchmove"===a.type?a.touches[0].clientY:a.clientY;if(this.clientY=l,this.clientX=n,r.globals.capturedSeriesIndex=-1,r.globals.capturedDataPointIndex=-1,l<o.top||l>o.top+o.height)this.handleMouseOut(s);else{if(Array.isArray(this.tConfig.enabledOnSeries)&&!r.config.tooltip.shared){var h=parseInt(s.paths.getAttribute("index"),10);if(this.tConfig.enabledOnSeries.indexOf(h)<0)return void this.handleMouseOut(s)}var c=this.getElTooltip(),d=this.getElXCrosshairs(),g=r.globals.xyCharts||"bar"===r.config.chart.type&&!r.globals.isBarHorizontal&&this.tooltipUtil.hasBars()&&this.tConfig.shared||r.globals.comboCharts&&this.tooltipUtil.hasBars();if("mousemove"===a.type||"touchmove"===a.type||"mouseup"===a.type){if(r.globals.collapsedSeries.length+r.globals.ancillaryCollapsedSeries.length===r.globals.series.length)return;null!==d&&d.classList.add("apexcharts-active");var u=this.yaxisTooltips.filter((function(t){return!0===t}));if(null!==this.ycrosshairs&&u.length&&this.ycrosshairs.classList.add("apexcharts-active"),g&&!this.showOnIntersect)this.handleStickyTooltip(a,n,l,s);else if("heatmap"===r.config.chart.type||"treemap"===r.config.chart.type){var p=this.intersect.handleHeatTreeTooltip({e:a,opt:s,x:e,y:i,type:r.config.chart.type});e=p.x,i=p.y,c.style.left=e+"px",c.style.top=i+"px"}else this.tooltipUtil.hasBars()&&this.intersect.handleBarTooltip({e:a,opt:s}),this.tooltipUtil.hasMarkers()&&this.intersect.handleMarkerTooltip({e:a,opt:s,x:e,y:i});if(this.yaxisTooltips.length)for(var f=0;f<r.config.yaxis.length;f++)this.axesTooltip.drawYaxisTooltipText(f,l,this.xyRatios);s.tooltipEl.classList.add("apexcharts-active")}else"mouseout"!==a.type&&"touchend"!==a.type||this.handleMouseOut(s)}}},{key:"nonAxisChartsTooltips",value:function(t){var e=t.e,i=t.opt,a=t.tooltipRect,s=this.w,r=i.paths.getAttribute("rel"),o=this.getElTooltip(),n=s.globals.dom.elWrap.getBoundingClientRect();if("mousemove"===e.type||"touchmove"===e.type){o.classList.add("apexcharts-active"),this.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:parseInt(r,10)-1,shared:!1});var l=s.globals.clientX-n.left-a.ttWidth/2,h=s.globals.clientY-n.top-a.ttHeight-10;if(o.style.left=l+"px",o.style.top=h+"px",s.config.legend.tooltipHoverFormatter){var c=r-1,d=(0,s.config.legend.tooltipHoverFormatter)(this.legendLabels[c].getAttribute("data:default-text"),{seriesIndex:c,dataPointIndex:c,w:s});this.legendLabels[c].innerHTML=d}}else"mouseout"!==e.type&&"touchend"!==e.type||(o.classList.remove("apexcharts-active"),s.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)})))}},{key:"handleStickyTooltip",value:function(t,e,i,a){var s=this.w,r=this.tooltipUtil.getNearestValues({context:this,hoverArea:a.hoverArea,elGrid:a.elGrid,clientX:e,clientY:i}),o=r.j,n=r.capturedSeries,l=a.elGrid.getBoundingClientRect();r.hoverX<0||r.hoverX>l.width?this.handleMouseOut(a):null!==n?this.handleStickyCapturedSeries(t,n,a,o):(this.tooltipUtil.isXoverlap(o)||s.globals.isBarHorizontal)&&this.create(t,this,0,o,a.ttItems)}},{key:"handleStickyCapturedSeries",value:function(t,e,i,a){var s=this.w;if(!this.tConfig.shared&&null===s.globals.series[e][a])return void this.handleMouseOut(i);void 0!==s.globals.series[e][a]?this.tConfig.shared&&this.tooltipUtil.isXoverlap(a)&&this.tooltipUtil.isInitialSeriesSameLen()?this.create(t,this,e,a,i.ttItems):this.create(t,this,e,a,i.ttItems,!1):this.tooltipUtil.isXoverlap(a)&&this.create(t,this,0,a,i.ttItems)}},{key:"deactivateHoverFilter",value:function(){for(var t=this.w,e=new m(this.ctx),i=t.globals.dom.Paper.select(".apexcharts-bar-area"),a=0;a<i.length;a++)e.pathMouseLeave(i[a])}},{key:"handleMouseOut",value:function(t){var e=this.w,i=this.getElXCrosshairs();if(t.tooltipEl.classList.remove("apexcharts-active"),this.deactivateHoverFilter(),"bubble"!==e.config.chart.type&&this.marker.resetPointsSize(),null!==i&&i.classList.remove("apexcharts-active"),null!==this.ycrosshairs&&this.ycrosshairs.classList.remove("apexcharts-active"),this.isXAxisTooltipEnabled&&this.xaxisTooltip.classList.remove("apexcharts-active"),this.yaxisTooltips.length){null===this.yaxisTTEls&&(this.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));for(var a=0;a<this.yaxisTTEls.length;a++)this.yaxisTTEls[a].classList.remove("apexcharts-active")}e.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)}))}},{key:"markerClick",value:function(t,e,i){var a=this.w;"function"==typeof a.config.chart.events.markerClick&&a.config.chart.events.markerClick(t,this.ctx,{seriesIndex:e,dataPointIndex:i,w:a}),this.ctx.events.fireEvent("markerClick",[t,this.ctx,{seriesIndex:e,dataPointIndex:i,w:a}])}},{key:"create",value:function(t,e,i,a,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=this.w,n=e;"mouseup"===t.type&&this.markerClick(t,i,a),null===r&&(r=this.tConfig.shared);var l=this.tooltipUtil.hasMarkers(),h=this.tooltipUtil.getElBars();if(o.config.legend.tooltipHoverFormatter){var c=o.config.legend.tooltipHoverFormatter,d=Array.from(this.legendLabels);d.forEach((function(t){var e=t.getAttribute("data:default-text");t.innerHTML=decodeURIComponent(e)}));for(var g=0;g<d.length;g++){var u=d[g],p=parseInt(u.getAttribute("i"),10),f=decodeURIComponent(u.getAttribute("data:default-text")),x=c(f,{seriesIndex:r?p:i,dataPointIndex:a,w:o});if(r)u.innerHTML=o.globals.collapsedSeriesIndices.indexOf(p)<0?x:f;else if(u.innerHTML=p===i?x:f,i===p)break}}if(r){if(n.tooltipLabels.drawSeriesTexts({ttItems:s,i:i,j:a,shared:!this.showOnIntersect&&this.tConfig.shared}),l&&(o.globals.markers.largestSize>0?n.marker.enlargePoints(a):n.tooltipPosition.moveDynamicPointsOnHover(a)),this.tooltipUtil.hasBars()&&(this.barSeriesHeight=this.tooltipUtil.getBarsHeight(h),this.barSeriesHeight>0)){var b=new m(this.ctx),v=o.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a,"']"));this.deactivateHoverFilter(),this.tooltipPosition.moveStickyTooltipOverBars(a);for(var y=0;y<v.length;y++)b.pathMouseEnter(v[y])}}else n.tooltipLabels.drawSeriesTexts({shared:!1,ttItems:s,i:i,j:a}),this.tooltipUtil.hasBars()&&n.tooltipPosition.moveStickyTooltipOverBars(a),l&&n.tooltipPosition.moveMarkers(i,a)}}]),t}(),yt=function(t){n(s,F);var i=d(s);function s(){return a(this,s),i.apply(this,arguments)}return r(s,[{key:"draw",value:function(t,i){var a=this,s=this.w;this.graphics=new m(this.ctx),this.bar=new F(this.ctx,this.xyRatios);var r=new y(this.ctx,s);t=r.getLogSeries(t),this.yRatio=r.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t),"100%"===s.config.chart.stackType&&(t=s.globals.seriesPercent.slice()),this.series=t,this.totalItems=0,this.prevY=[],this.prevX=[],this.prevYF=[],this.prevXF=[],this.prevYVal=[],this.prevXVal=[],this.xArrj=[],this.xArrjF=[],this.xArrjVal=[],this.yArrj=[],this.yArrjF=[],this.yArrjVal=[];for(var o=0;o<t.length;o++)t[o].length>0&&(this.totalItems+=t[o].length);for(var n=this.graphics.group({class:"apexcharts-bar-series apexcharts-plot-series"}),l=0,h=0,c=function(r,o){var c=void 0,d=void 0,g=void 0,u=void 0,p=[],f=[],b=s.globals.comboCharts?i[r]:r;a.yRatio.length>1&&(a.yaxisIndex=b),a.isReversed=s.config.yaxis[a.yaxisIndex]&&s.config.yaxis[a.yaxisIndex].reversed;var v=a.graphics.group({class:"apexcharts-series",seriesName:x.escapeString(s.globals.seriesNames[b]),rel:r+1,"data:realIndex":b});a.ctx.series.addCollapsedClassToSeries(v,b);var m=a.graphics.group({class:"apexcharts-datalabels","data:realIndex":b}),y=0,w=0,k=a.initialPositions(l,h,c,d,g,u);h=k.y,y=k.barHeight,d=k.yDivision,u=k.zeroW,l=k.x,w=k.barWidth,c=k.xDivision,g=k.zeroH,a.yArrj=[],a.yArrjF=[],a.yArrjVal=[],a.xArrj=[],a.xArrjF=[],a.xArrjVal=[],1===a.prevY.length&&a.prevY[0].every((function(t){return isNaN(t)}))&&(a.prevY[0]=a.prevY[0].map((function(t){return g})),a.prevYF[0]=a.prevYF[0].map((function(t){return 0})));for(var A=0;A<s.globals.dataPoints;A++){var S=a.barHelpers.getStrokeWidth(r,A,b),C={indexes:{i:r,j:A,realIndex:b,bc:o},strokeWidth:S,x:l,y:h,elSeries:v},L=null;a.isHorizontal?(L=a.drawStackedBarPaths(e(e({},C),{},{zeroW:u,barHeight:y,yDivision:d})),w=a.series[r][A]/a.invertedYRatio):(L=a.drawStackedColumnPaths(e(e({},C),{},{xDivision:c,barWidth:w,zeroH:g})),y=a.series[r][A]/a.yRatio[a.yaxisIndex]),h=L.y,l=L.x,p.push(l),f.push(h);var P=a.barHelpers.getPathFillColor(t,r,A,b);v=a.renderSeries({realIndex:b,pathFill:P,j:A,i:r,pathFrom:L.pathFrom,pathTo:L.pathTo,strokeWidth:S,elSeries:v,x:l,y:h,series:t,barHeight:y,barWidth:w,elDataLabelsWrap:m,type:"bar",visibleSeries:0})}s.globals.seriesXvalues[b]=p,s.globals.seriesYvalues[b]=f,a.prevY.push(a.yArrj),a.prevYF.push(a.yArrjF),a.prevYVal.push(a.yArrjVal),a.prevX.push(a.xArrj),a.prevXF.push(a.xArrjF),a.prevXVal.push(a.xArrjVal),n.add(v)},d=0,g=0;d<t.length;d++,g++)c(d,g);return n}},{key:"initialPositions",value:function(t,e,i,a,s,r){var o,n,l=this.w;return this.isHorizontal?(o=(o=a=l.globals.gridHeight/l.globals.dataPoints)*parseInt(l.config.plotOptions.bar.barHeight,10)/100,r=this.baseLineInvertedY+l.globals.padHorizontal+(this.isReversed?l.globals.gridWidth:0)-(this.isReversed?2*this.baseLineInvertedY:0),e=(a-o)/2):(n=i=l.globals.gridWidth/l.globals.dataPoints,n=l.globals.isXNumeric&&l.globals.dataPoints>1?(i=l.globals.minXDiff/this.xRatio)*parseInt(this.barOptions.columnWidth,10)/100:n*parseInt(l.config.plotOptions.bar.columnWidth,10)/100,s=this.baseLineY[this.yaxisIndex]+(this.isReversed?l.globals.gridHeight:0)-(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),t=l.globals.padHorizontal+(i-n)/2),{x:t,y:e,yDivision:a,xDivision:i,barHeight:o,barWidth:n,zeroH:s,zeroW:r}}},{key:"drawStackedBarPaths",value:function(t){for(var e,i=t.indexes,a=t.barHeight,s=t.strokeWidth,r=t.zeroW,o=t.x,n=t.y,l=t.yDivision,h=t.elSeries,c=this.w,d=n,g=i.i,u=i.j,p=0,f=0;f<this.prevXF.length;f++)p+=this.prevXF[f][u];if(g>0){var x=r;this.prevXVal[g-1][u]<0?x=this.series[g][u]>=0?this.prevX[g-1][u]+p-2*(this.isReversed?p:0):this.prevX[g-1][u]:this.prevXVal[g-1][u]>=0&&(x=this.series[g][u]>=0?this.prevX[g-1][u]:this.prevX[g-1][u]-p+2*(this.isReversed?p:0)),e=x}else e=r;o=null===this.series[g][u]?e:e+this.series[g][u]/this.invertedYRatio-2*(this.isReversed?this.series[g][u]/this.invertedYRatio:0);var b=this.barHelpers.getBarpaths({barYPosition:d,barHeight:a,x1:e,x2:o,strokeWidth:s,series:this.series,realIndex:i.realIndex,i:g,j:u,w:c});return this.barHelpers.barBackground({j:u,i:g,y1:d,y2:a,elSeries:h}),n+=l,{pathTo:b.pathTo,pathFrom:b.pathFrom,x:o,y:n}}},{key:"drawStackedColumnPaths",value:function(t){var e=t.indexes,i=t.x,a=t.y,s=t.xDivision,r=t.barWidth,o=t.zeroH;t.strokeWidth;var n=t.elSeries,l=this.w,h=e.i,c=e.j,d=e.bc;if(l.globals.isXNumeric){var g=l.globals.seriesX[h][c];g||(g=0),i=(g-l.globals.minX)/this.xRatio-r/2}for(var u,p=i,f=0,x=0;x<this.prevYF.length;x++)f+=isNaN(this.prevYF[x][c])?0:this.prevYF[x][c];if(h>0&&!l.globals.isXNumeric||h>0&&l.globals.isXNumeric&&l.globals.seriesX[h-1][c]===l.globals.seriesX[h][c]){var b,v,m=Math.min(this.yRatio.length+1,h+1);if(void 0!==this.prevY[h-1])for(var y=1;y<m;y++)if(!isNaN(this.prevY[h-y][c])){v=this.prevY[h-y][c];break}for(var w=1;w<m;w++){if(this.prevYVal[h-w][c]<0){b=this.series[h][c]>=0?v-f+2*(this.isReversed?f:0):v;break}if(this.prevYVal[h-w][c]>=0){b=this.series[h][c]>=0?v:v+f-2*(this.isReversed?f:0);break}}void 0===b&&(b=l.globals.gridHeight),u=this.prevYF[0].every((function(t){return 0===t}))&&this.prevYF.slice(1,h).every((function(t){return t.every((function(t){return isNaN(t)}))}))?l.globals.gridHeight-o:b}else u=l.globals.gridHeight-o;a=u-this.series[h][c]/this.yRatio[this.yaxisIndex]+2*(this.isReversed?this.series[h][c]/this.yRatio[this.yaxisIndex]:0);var k=this.barHelpers.getColumnPaths({barXPosition:p,barWidth:r,y1:u,y2:a,yRatio:this.yRatio[this.yaxisIndex],strokeWidth:this.strokeWidth,series:this.series,realIndex:e.realIndex,i:h,j:c,w:l});return this.barHelpers.barBackground({bc:d,j:c,i:h,x1:p,x2:r,elSeries:n}),i+=s,{pathTo:k.pathTo,pathFrom:k.pathFrom,x:l.globals.isXNumeric?i-s:i,y:a}}}]),s}(),wt=function(t){n(s,F);var i=d(s);function s(){return a(this,s),i.apply(this,arguments)}return r(s,[{key:"draw",value:function(t,i){var a=this,s=this.w,r=new m(this.ctx),o=new M(this.ctx);this.candlestickOptions=this.w.config.plotOptions.candlestick,this.boxOptions=this.w.config.plotOptions.boxPlot,this.isHorizontal=s.config.plotOptions.bar.horizontal;var n=new y(this.ctx,s);t=n.getLogSeries(t),this.series=t,this.yRatio=n.getLogYRatios(this.yRatio),this.barHelpers.initVariables(t);for(var l=r.group({class:"apexcharts-".concat(s.config.chart.type,"-series apexcharts-plot-series")}),h=function(n){a.isBoxPlot="boxPlot"===s.config.chart.type||"boxPlot"===s.config.series[n].type;var h,c,d,g,u=void 0,p=void 0,f=[],b=[],v=s.globals.comboCharts?i[n]:n,m=r.group({class:"apexcharts-series",seriesName:x.escapeString(s.globals.seriesNames[v]),rel:n+1,"data:realIndex":v});a.ctx.series.addCollapsedClassToSeries(m,v),t[n].length>0&&(a.visibleI=a.visibleI+1);var y,w;a.yRatio.length>1&&(a.yaxisIndex=v);var k=a.barHelpers.initialPositions();p=k.y,y=k.barHeight,c=k.yDivision,g=k.zeroW,u=k.x,w=k.barWidth,h=k.xDivision,d=k.zeroH,b.push(u+w/2);for(var A=r.group({class:"apexcharts-datalabels","data:realIndex":v}),S=function(i){var r=a.barHelpers.getStrokeWidth(n,i,v),l=null,x={indexes:{i:n,j:i,realIndex:v},x:u,y:p,strokeWidth:r,elSeries:m};l=a.isHorizontal?a.drawHorizontalBoxPaths(e(e({},x),{},{yDivision:c,barHeight:y,zeroW:g})):a.drawVerticalBoxPaths(e(e({},x),{},{xDivision:h,barWidth:w,zeroH:d})),p=l.y,u=l.x,i>0&&b.push(u+w/2),f.push(p),l.pathTo.forEach((function(e,h){var c=!a.isBoxPlot&&a.candlestickOptions.wick.useFillColor?l.color[h]:s.globals.stroke.colors[n],d=o.fillPath({seriesNumber:v,dataPointIndex:i,color:l.color[h],value:t[n][i]});a.renderSeries({realIndex:v,pathFill:d,lineFill:c,j:i,i:n,pathFrom:l.pathFrom,pathTo:e,strokeWidth:r,elSeries:m,x:u,y:p,series:t,barHeight:y,barWidth:w,elDataLabelsWrap:A,visibleSeries:a.visibleI,type:s.config.chart.type})}))},C=0;C<s.globals.dataPoints;C++)S(C);s.globals.seriesXvalues[v]=b,s.globals.seriesYvalues[v]=f,l.add(m)},c=0;c<t.length;c++)h(c);return l}},{key:"drawVerticalBoxPaths",value:function(t){var e=t.indexes,i=t.x;t.y;var a=t.xDivision,s=t.barWidth,r=t.zeroH,o=t.strokeWidth,n=this.w,l=new m(this.ctx),h=e.i,c=e.j,d=!0,g=n.config.plotOptions.candlestick.colors.upward,u=n.config.plotOptions.candlestick.colors.downward,p="";this.isBoxPlot&&(p=[this.boxOptions.colors.lower,this.boxOptions.colors.upper]);var f=this.yRatio[this.yaxisIndex],x=e.realIndex,b=this.getOHLCValue(x,c),v=r,y=r;b.o>b.c&&(d=!1);var w=Math.min(b.o,b.c),k=Math.max(b.o,b.c),A=b.m;n.globals.isXNumeric&&(i=(n.globals.seriesX[x][c]-n.globals.minX)/this.xRatio-s/2);var S=i+s*this.visibleI;void 0===this.series[h][c]||null===this.series[h][c]?(w=r,k=r):(w=r-w/f,k=r-k/f,v=r-b.h/f,y=r-b.l/f,A=r-b.m/f);var C=l.move(S,r),L=l.move(S+s/2,w);return n.globals.previousPaths.length>0&&(L=this.getPreviousPath(x,c,!0)),C=this.isBoxPlot?[l.move(S,w)+l.line(S+s/2,w)+l.line(S+s/2,v)+l.line(S+s/4,v)+l.line(S+s-s/4,v)+l.line(S+s/2,v)+l.line(S+s/2,w)+l.line(S+s,w)+l.line(S+s,A)+l.line(S,A)+l.line(S,w+o/2),l.move(S,A)+l.line(S+s,A)+l.line(S+s,k)+l.line(S+s/2,k)+l.line(S+s/2,y)+l.line(S+s-s/4,y)+l.line(S+s/4,y)+l.line(S+s/2,y)+l.line(S+s/2,k)+l.line(S,k)+l.line(S,A)+"z"]:[l.move(S,k)+l.line(S+s/2,k)+l.line(S+s/2,v)+l.line(S+s/2,k)+l.line(S+s,k)+l.line(S+s,w)+l.line(S+s/2,w)+l.line(S+s/2,y)+l.line(S+s/2,w)+l.line(S,w)+l.line(S,k-o/2)],L+=l.move(S,w),n.globals.isXNumeric||(i+=a),{pathTo:C,pathFrom:L,x:i,y:k,barXPosition:S,color:this.isBoxPlot?p:d?[g]:[u]}}},{key:"drawHorizontalBoxPaths",value:function(t){var e=t.indexes;t.x;var i=t.y,a=t.yDivision,s=t.barHeight,r=t.zeroW,o=t.strokeWidth,n=this.w,l=new m(this.ctx),h=e.i,c=e.j,d=this.boxOptions.colors.lower;this.isBoxPlot&&(d=[this.boxOptions.colors.lower,this.boxOptions.colors.upper]);var g=this.invertedYRatio,u=e.realIndex,p=this.getOHLCValue(u,c),f=r,x=r,b=Math.min(p.o,p.c),v=Math.max(p.o,p.c),y=p.m;n.globals.isXNumeric&&(i=(n.globals.seriesX[u][c]-n.globals.minX)/this.invertedXRatio-s/2);var w=i+s*this.visibleI;void 0===this.series[h][c]||null===this.series[h][c]?(b=r,v=r):(b=r+b/g,v=r+v/g,f=r+p.h/g,x=r+p.l/g,y=r+p.m/g);var k=l.move(r,w),A=l.move(b,w+s/2);return n.globals.previousPaths.length>0&&(A=this.getPreviousPath(u,c,!0)),k=[l.move(b,w)+l.line(b,w+s/2)+l.line(f,w+s/2)+l.line(f,w+s/2-s/4)+l.line(f,w+s/2+s/4)+l.line(f,w+s/2)+l.line(b,w+s/2)+l.line(b,w+s)+l.line(y,w+s)+l.line(y,w)+l.line(b+o/2,w),l.move(y,w)+l.line(y,w+s)+l.line(v,w+s)+l.line(v,w+s/2)+l.line(x,w+s/2)+l.line(x,w+s-s/4)+l.line(x,w+s/4)+l.line(x,w+s/2)+l.line(v,w+s/2)+l.line(v,w)+l.line(y,w)+"z"],A+=l.move(b,w),n.globals.isXNumeric||(i+=a),{pathTo:k,pathFrom:A,x:v,y:i,barYPosition:w,color:d}}},{key:"getOHLCValue",value:function(t,e){var i=this.w;return{o:this.isBoxPlot?i.globals.seriesCandleH[t][e]:i.globals.seriesCandleO[t][e],h:this.isBoxPlot?i.globals.seriesCandleO[t][e]:i.globals.seriesCandleH[t][e],m:i.globals.seriesCandleM[t][e],l:this.isBoxPlot?i.globals.seriesCandleC[t][e]:i.globals.seriesCandleL[t][e],c:this.isBoxPlot?i.globals.seriesCandleL[t][e]:i.globals.seriesCandleC[t][e]}}}]),s}(),kt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"checkColorRange",value:function(){var t=this.w,e=!1,i=t.config.plotOptions[t.config.chart.type];return i.colorScale.ranges.length>0&&i.colorScale.ranges.map((function(t,i){t.from<=0&&(e=!0)})),e}},{key:"getShadeColor",value:function(t,e,i,a){var s=this.w,r=1,o=s.config.plotOptions[t].shadeIntensity,n=this.determineColor(t,e,i);s.globals.hasNegs||a?r=s.config.plotOptions[t].reverseNegativeShade?n.percent<0?n.percent/100*(1.25*o):(1-n.percent/100)*(1.25*o):n.percent<=0?1-(1+n.percent/100)*o:(1-n.percent/100)*o:(r=1-n.percent/100,"treemap"===t&&(r=(1-n.percent/100)*(1.25*o)));var l=n.color,h=new x;return s.config.plotOptions[t].enableShades&&(l="dark"===this.w.config.theme.mode?x.hexToRgba(h.shadeColor(-1*r,n.color),s.config.fill.opacity):x.hexToRgba(h.shadeColor(r,n.color),s.config.fill.opacity)),{color:l,colorProps:n}}},{key:"determineColor",value:function(t,e,i){var a=this.w,s=a.globals.series[e][i],r=a.config.plotOptions[t],o=r.colorScale.inverse?i:e;r.distributed&&"treemap"===a.config.chart.type&&(o=i);var n=a.globals.colors[o],l=null,h=Math.min.apply(Math,u(a.globals.series[e])),c=Math.max.apply(Math,u(a.globals.series[e]));r.distributed||"heatmap"!==t||(h=a.globals.minY,c=a.globals.maxY),void 0!==r.colorScale.min&&(h=r.colorScale.min<a.globals.minY?r.colorScale.min:a.globals.minY,c=r.colorScale.max>a.globals.maxY?r.colorScale.max:a.globals.maxY);var d=Math.abs(c)+Math.abs(h),g=100*s/(0===d?d-1e-6:d);r.colorScale.ranges.length>0&&r.colorScale.ranges.map((function(t,e){if(s>=t.from&&s<=t.to){n=t.color,l=t.foreColor?t.foreColor:null,h=t.from,c=t.to;var i=Math.abs(c)+Math.abs(h);g=100*s/(0===i?i-1e-6:i)}}));return{color:n,foreColor:l,percent:g}}},{key:"calculateDataLabels",value:function(t){var e=t.text,i=t.x,a=t.y,s=t.i,r=t.j,o=t.colorProps,n=t.fontSize,l=this.w.config.dataLabels,h=new m(this.ctx),c=new z(this.ctx),d=null;if(l.enabled){d=h.group({class:"apexcharts-data-labels"});var g=l.offsetX,u=l.offsetY,p=i+g,f=a+parseFloat(l.style.fontSize)/3+u;c.plotDataLabelsText({x:p,y:f,text:e,i:s,j:r,color:o.foreColor,parent:d,fontSize:n,dataLabelsConfig:l})}return d}},{key:"addListeners",value:function(t){var e=new m(this.ctx);t.node.addEventListener("mouseenter",e.pathMouseEnter.bind(this,t)),t.node.addEventListener("mouseleave",e.pathMouseLeave.bind(this,t)),t.node.addEventListener("mousedown",e.pathMouseDown.bind(this,t))}}]),t}(),At=function(){function t(e,i){a(this,t),this.ctx=e,this.w=e.w,this.xRatio=i.xRatio,this.yRatio=i.yRatio,this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.helpers=new kt(e),this.rectRadius=this.w.config.plotOptions.heatmap.radius,this.strokeWidth=this.w.config.stroke.show?this.w.config.stroke.width:0}return r(t,[{key:"draw",value:function(t){var e=this.w,i=new m(this.ctx),a=i.group({class:"apexcharts-heatmap"});a.attr("clip-path","url(#gridRectMask".concat(e.globals.cuid,")"));var s=e.globals.gridWidth/e.globals.dataPoints,r=e.globals.gridHeight/e.globals.series.length,o=0,n=!1;this.negRange=this.helpers.checkColorRange();var l=t.slice();e.config.yaxis[0].reversed&&(n=!0,l.reverse());for(var h=n?0:l.length-1;n?h<l.length:h>=0;n?h++:h--){var c=i.group({class:"apexcharts-series apexcharts-heatmap-series",seriesName:x.escapeString(e.globals.seriesNames[h]),rel:h+1,"data:realIndex":h});if(this.ctx.series.addCollapsedClassToSeries(c,h),e.config.chart.dropShadow.enabled){var d=e.config.chart.dropShadow;new v(this.ctx).dropShadow(c,d,h)}for(var g=0,u=e.config.plotOptions.heatmap.shadeIntensity,p=0;p<l[h].length;p++){var f=this.helpers.getShadeColor(e.config.chart.type,h,p,this.negRange),b=f.color,y=f.colorProps;if("image"===e.config.fill.type)b=new M(this.ctx).fillPath({seriesNumber:h,dataPointIndex:p,opacity:e.globals.hasNegs?y.percent<0?1-(1+y.percent/100):u+y.percent/100:y.percent/100,patternID:x.randomId(),width:e.config.fill.image.width?e.config.fill.image.width:s,height:e.config.fill.image.height?e.config.fill.image.height:r});var w=this.rectRadius,k=i.drawRect(g,o,s,r,w);if(k.attr({cx:g,cy:o}),k.node.classList.add("apexcharts-heatmap-rect"),c.add(k),k.attr({fill:b,i:h,index:h,j:p,val:l[h][p],"stroke-width":this.strokeWidth,stroke:e.config.plotOptions.heatmap.useFillColorAsStroke?b:e.globals.stroke.colors[0],color:b}),this.helpers.addListeners(k),e.config.chart.animations.enabled&&!e.globals.dataChanged){var A=1;e.globals.resized||(A=e.config.chart.animations.speed),this.animateHeatMap(k,g,o,s,r,A)}if(e.globals.dataChanged){var S=1;if(this.dynamicAnim.enabled&&e.globals.shouldAnimate){S=this.dynamicAnim.speed;var C=e.globals.previousPaths[h]&&e.globals.previousPaths[h][p]&&e.globals.previousPaths[h][p].color;C||(C="rgba(255, 255, 255, 0)"),this.animateHeatColor(k,x.isColorHex(C)?C:x.rgb2hex(C),x.isColorHex(b)?b:x.rgb2hex(b),S)}}var L=(0,e.config.dataLabels.formatter)(e.globals.series[h][p],{value:e.globals.series[h][p],seriesIndex:h,dataPointIndex:p,w:e}),P=this.helpers.calculateDataLabels({text:L,x:g+s/2,y:o+r/2,i:h,j:p,colorProps:y,series:l});null!==P&&c.add(P),g+=s}o+=r,a.add(c)}var T=e.globals.yAxisScale[0].result.slice();e.config.yaxis[0].reversed?T.unshift(""):T.push(""),e.globals.yAxisScale[0].result=T;var I=e.globals.gridHeight/e.globals.series.length;return e.config.yaxis[0].labels.offsetY=-I/2,a}},{key:"animateHeatMap",value:function(t,e,i,a,s,r){var o=new b(this.ctx);o.animateRect(t,{x:e+a/2,y:i+s/2,width:0,height:0},{x:e,y:i,width:a,height:s},r,(function(){o.animationCompleted(t)}))}},{key:"animateHeatColor",value:function(t,e,i,a){t.attr({fill:e}).animate(a).attr({fill:i})}}]),t}(),St=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"drawYAxisTexts",value:function(t,e,i,a){var s=this.w,r=s.config.yaxis[0],o=s.globals.yLabelFormatters[0];return new m(this.ctx).drawText({x:t+r.labels.offsetX,y:e+r.labels.offsetY,text:o(a,i),textAnchor:"middle",fontSize:r.labels.style.fontSize,fontFamily:r.labels.style.fontFamily,foreColor:Array.isArray(r.labels.style.colors)?r.labels.style.colors[i]:r.labels.style.colors})}}]),t}(),Ct=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animBeginArr=[0],this.animDur=0,this.donutDataLabels=this.w.config.plotOptions.pie.donut.labels,this.lineColorArr=void 0!==i.globals.stroke.colors?i.globals.stroke.colors:i.globals.colors,this.defaultSize=Math.min(i.globals.gridWidth,i.globals.gridHeight),this.centerY=this.defaultSize/2,this.centerX=i.globals.gridWidth/2,"radialBar"===i.config.chart.type?this.fullAngle=360:this.fullAngle=Math.abs(i.config.plotOptions.pie.endAngle-i.config.plotOptions.pie.startAngle),this.initialAngle=i.config.plotOptions.pie.startAngle%this.fullAngle,i.globals.radialSize=this.defaultSize/2.05-i.config.stroke.width-(i.config.chart.sparkline.enabled?0:i.config.chart.dropShadow.blur),this.donutSize=i.globals.radialSize*parseInt(i.config.plotOptions.pie.donut.size,10)/100,this.maxY=0,this.sliceLabels=[],this.sliceSizes=[],this.prevSectorAngleArr=[]}return r(t,[{key:"draw",value:function(t){var e=this,i=this.w,a=new m(this.ctx);if(this.ret=a.group({class:"apexcharts-pie"}),i.globals.noData)return this.ret;for(var s=0,r=0;r<t.length;r++)s+=x.negToZero(t[r]);var o=[],n=a.group();0===s&&(s=1e-5),t.forEach((function(t){e.maxY=Math.max(e.maxY,t)})),i.config.yaxis[0].max&&(this.maxY=i.config.yaxis[0].max),"back"===i.config.grid.position&&"polarArea"===this.chartType&&this.drawPolarElements(this.ret);for(var l=0;l<t.length;l++){var h=this.fullAngle*x.negToZero(t[l])/s;o.push(h),"polarArea"===this.chartType?(o[l]=this.fullAngle/t.length,this.sliceSizes.push(i.globals.radialSize*t[l]/this.maxY)):this.sliceSizes.push(i.globals.radialSize)}if(i.globals.dataChanged){for(var c,d=0,g=0;g<i.globals.previousPaths.length;g++)d+=x.negToZero(i.globals.previousPaths[g]);for(var u=0;u<i.globals.previousPaths.length;u++)c=this.fullAngle*x.negToZero(i.globals.previousPaths[u])/d,this.prevSectorAngleArr.push(c)}this.donutSize<0&&(this.donutSize=0);var p=i.config.plotOptions.pie.customScale,f=i.globals.gridWidth/2,b=i.globals.gridHeight/2,v=f-i.globals.gridWidth/2*p,y=b-i.globals.gridHeight/2*p;if("donut"===this.chartType){var w=a.drawCircle(this.donutSize);w.attr({cx:this.centerX,cy:this.centerY,fill:i.config.plotOptions.pie.donut.background?i.config.plotOptions.pie.donut.background:"transparent"}),n.add(w)}var k=this.drawArcs(o,t);if(this.sliceLabels.forEach((function(t){k.add(t)})),n.attr({transform:"translate(".concat(v,", ").concat(y,") scale(").concat(p,")")}),n.add(k),this.ret.add(n),this.donutDataLabels.show){var A=this.renderInnerDataLabels(this.donutDataLabels,{hollowSize:this.donutSize,centerX:this.centerX,centerY:this.centerY,opacity:this.donutDataLabels.show,translateX:v,translateY:y});this.ret.add(A)}return"front"===i.config.grid.position&&"polarArea"===this.chartType&&this.drawPolarElements(this.ret),this.ret}},{key:"drawArcs",value:function(t,e){var i=this.w,a=new v(this.ctx),s=new m(this.ctx),r=new M(this.ctx),o=s.group({class:"apexcharts-slices"}),n=this.initialAngle,l=this.initialAngle,h=this.initialAngle,c=this.initialAngle;this.strokeWidth=i.config.stroke.show?i.config.stroke.width:0;for(var d=0;d<t.length;d++){var g=s.group({class:"apexcharts-series apexcharts-pie-series",seriesName:x.escapeString(i.globals.seriesNames[d]),rel:d+1,"data:realIndex":d});o.add(g),l=c,h=(n=h)+t[d],c=l+this.prevSectorAngleArr[d];var u=h<n?this.fullAngle+h-n:h-n,p=r.fillPath({seriesNumber:d,size:this.sliceSizes[d],value:e[d]}),f=this.getChangedPath(l,c),b=s.drawPath({d:f,stroke:Array.isArray(this.lineColorArr)?this.lineColorArr[d]:this.lineColorArr,strokeWidth:0,fill:p,fillOpacity:i.config.fill.opacity,classes:"apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(d)});if(b.attr({index:0,j:d}),a.setSelectionFilter(b,0,d),i.config.chart.dropShadow.enabled){var y=i.config.chart.dropShadow;a.dropShadow(b,y,d)}this.addListeners(b,this.donutDataLabels),m.setAttrs(b.node,{"data:angle":u,"data:startAngle":n,"data:strokeWidth":this.strokeWidth,"data:value":e[d]});var w={x:0,y:0};"pie"===this.chartType||"polarArea"===this.chartType?w=x.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize/1.25+i.config.plotOptions.pie.dataLabels.offset,(n+u/2)%this.fullAngle):"donut"===this.chartType&&(w=x.polarToCartesian(this.centerX,this.centerY,(i.globals.radialSize+this.donutSize)/2+i.config.plotOptions.pie.dataLabels.offset,(n+u/2)%this.fullAngle)),g.add(b);var k=0;if(!this.initialAnim||i.globals.resized||i.globals.dataChanged?this.animBeginArr.push(0):(0===(k=u/this.fullAngle*i.config.chart.animations.speed)&&(k=1),this.animDur=k+this.animDur,this.animBeginArr.push(this.animDur)),this.dynamicAnim&&i.globals.dataChanged?this.animatePaths(b,{size:this.sliceSizes[d],endAngle:h,startAngle:n,prevStartAngle:l,prevEndAngle:c,animateStartingPos:!0,i:d,animBeginArr:this.animBeginArr,shouldSetPrevPaths:!0,dur:i.config.chart.animations.dynamicAnimation.speed}):this.animatePaths(b,{size:this.sliceSizes[d],endAngle:h,startAngle:n,i:d,totalItems:t.length-1,animBeginArr:this.animBeginArr,dur:k}),i.config.plotOptions.pie.expandOnClick&&"polarArea"!==this.chartType&&b.click(this.pieClicked.bind(this,d)),void 0!==i.globals.selectedDataPoints[0]&&i.globals.selectedDataPoints[0].indexOf(d)>-1&&this.pieClicked(d),i.config.dataLabels.enabled){var A=w.x,S=w.y,C=100*u/this.fullAngle+"%";if(0!==u&&i.config.plotOptions.pie.dataLabels.minAngleToShowLabel<t[d]){var L=i.config.dataLabels.formatter;void 0!==L&&(C=L(i.globals.seriesPercent[d][0],{seriesIndex:d,w:i}));var P=i.globals.dataLabels.style.colors[d],T=s.group({class:"apexcharts-datalabels"}),I=s.drawText({x:A,y:S,text:C,textAnchor:"middle",fontSize:i.config.dataLabels.style.fontSize,fontFamily:i.config.dataLabels.style.fontFamily,fontWeight:i.config.dataLabels.style.fontWeight,foreColor:P});if(T.add(I),i.config.dataLabels.dropShadow.enabled){var z=i.config.dataLabels.dropShadow;a.dropShadow(I,z)}I.node.classList.add("apexcharts-pie-label"),i.config.chart.animations.animate&&!1===i.globals.resized&&(I.node.classList.add("apexcharts-pie-label-delay"),I.node.style.animationDelay=i.config.chart.animations.speed/940+"s"),this.sliceLabels.push(T)}}}return o}},{key:"addListeners",value:function(t,e){var i=new m(this.ctx);t.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this,t)),t.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this,t)),t.node.addEventListener("mouseleave",this.revertDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mousedown",i.pathMouseDown.bind(this,t)),this.donutDataLabels.total.showAlways||(t.node.addEventListener("mouseenter",this.printDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mousedown",this.printDataLabelsInner.bind(this,t.node,e)))}},{key:"animatePaths",value:function(t,e){var i=this.w,a=e.endAngle<e.startAngle?this.fullAngle+e.endAngle-e.startAngle:e.endAngle-e.startAngle,s=a,r=e.startAngle,o=e.startAngle;void 0!==e.prevStartAngle&&void 0!==e.prevEndAngle&&(r=e.prevEndAngle,s=e.prevEndAngle<e.prevStartAngle?this.fullAngle+e.prevEndAngle-e.prevStartAngle:e.prevEndAngle-e.prevStartAngle),e.i===i.config.series.length-1&&(a+o>this.fullAngle?e.endAngle=e.endAngle-(a+o):a+o<this.fullAngle&&(e.endAngle=e.endAngle+(this.fullAngle-(a+o)))),a===this.fullAngle&&(a=this.fullAngle-.01),this.animateArc(t,r,o,a,s,e)}},{key:"animateArc",value:function(t,e,i,a,s,r){var o,n=this,l=this.w,h=new b(this.ctx),c=r.size;(isNaN(e)||isNaN(s))&&(e=i,s=a,r.dur=0);var d=a,g=i,u=e<i?this.fullAngle+e-i:e-i;l.globals.dataChanged&&r.shouldSetPrevPaths&&r.prevEndAngle&&(o=n.getPiePath({me:n,startAngle:r.prevStartAngle,angle:r.prevEndAngle<r.prevStartAngle?this.fullAngle+r.prevEndAngle-r.prevStartAngle:r.prevEndAngle-r.prevStartAngle,size:c}),t.attr({d:o})),0!==r.dur?t.animate(r.dur,l.globals.easing,r.animBeginArr[r.i]).afterAll((function(){"pie"!==n.chartType&&"donut"!==n.chartType&&"polarArea"!==n.chartType||this.animate(l.config.chart.animations.dynamicAnimation.speed).attr({"stroke-width":n.strokeWidth}),r.i===l.config.series.length-1&&h.animationCompleted(t)})).during((function(l){d=u+(a-u)*l,r.animateStartingPos&&(d=s+(a-s)*l,g=e-s+(i-(e-s))*l),o=n.getPiePath({me:n,startAngle:g,angle:d,size:c}),t.node.setAttribute("data:pathOrig",o),t.attr({d:o})})):(o=n.getPiePath({me:n,startAngle:g,angle:a,size:c}),r.isTrack||(l.globals.animationEnded=!0),t.node.setAttribute("data:pathOrig",o),t.attr({d:o,"stroke-width":n.strokeWidth}))}},{key:"pieClicked",value:function(t){var e,i=this.w,a=this,s=a.sliceSizes[t]+(i.config.plotOptions.pie.expandOnClick?4:0),r=i.globals.dom.Paper.select(".apexcharts-".concat(a.chartType.toLowerCase(),"-slice-").concat(t)).members[0];if("true"!==r.attr("data:pieClicked")){var o=i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");Array.prototype.forEach.call(o,(function(t){t.setAttribute("data:pieClicked","false");var e=t.getAttribute("data:pathOrig");t.setAttribute("d",e)})),r.attr("data:pieClicked","true");var n=parseInt(r.attr("data:startAngle"),10),l=parseInt(r.attr("data:angle"),10);e=a.getPiePath({me:a,startAngle:n,angle:l,size:s}),360!==l&&r.plot(e)}else{r.attr({"data:pieClicked":"false"}),this.revertDataLabelsInner(r.node,this.donutDataLabels);var h=r.attr("data:pathOrig");r.attr({d:h})}}},{key:"getChangedPath",value:function(t,e){var i="";return this.dynamicAnim&&this.w.globals.dataChanged&&(i=this.getPiePath({me:this,startAngle:t,angle:e-t,size:this.size})),i}},{key:"getPiePath",value:function(t){var e=t.me,i=t.startAngle,a=t.angle,s=t.size,r=i,o=Math.PI*(r-90)/180,n=a+i;Math.ceil(n)>=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle&&(n=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle-.01),Math.ceil(n)>this.fullAngle&&(n-=this.fullAngle);var l=Math.PI*(n-90)/180,h=e.centerX+s*Math.cos(o),c=e.centerY+s*Math.sin(o),d=e.centerX+s*Math.cos(l),g=e.centerY+s*Math.sin(l),u=x.polarToCartesian(e.centerX,e.centerY,e.donutSize,n),p=x.polarToCartesian(e.centerX,e.centerY,e.donutSize,r),f=a>180?1:0,b=["M",h,c,"A",s,s,0,f,1,d,g];return"donut"===e.chartType?[].concat(b,["L",u.x,u.y,"A",e.donutSize,e.donutSize,0,f,0,p.x,p.y,"L",h,c,"z"]).join(" "):"pie"===e.chartType||"polarArea"===e.chartType?[].concat(b,["L",e.centerX,e.centerY,"L",h,c]).join(" "):[].concat(b).join(" ")}},{key:"drawPolarElements",value:function(t){var e=this.w,i=new q(this.ctx),a=new m(this.ctx),s=new St(this.ctx),r=a.group(),o=a.group(),n=i.niceScale(0,Math.ceil(this.maxY),e.config.yaxis[0].tickAmount,0,!0),l=n.result.reverse(),h=n.result.length;this.maxY=n.niceMax;for(var c=e.globals.radialSize,d=c/(h-1),g=0;g<h-1;g++){var u=a.drawCircle(c);if(u.attr({cx:this.centerX,cy:this.centerY,fill:"none","stroke-width":e.config.plotOptions.polarArea.rings.strokeWidth,stroke:e.config.plotOptions.polarArea.rings.strokeColor}),e.config.yaxis[0].show){var p=s.drawYAxisTexts(this.centerX,this.centerY-c+parseInt(e.config.yaxis[0].labels.style.fontSize,10)/2,g,l[g]);o.add(p)}r.add(u),c-=d}this.drawSpokes(t),t.add(r),t.add(o)}},{key:"renderInnerDataLabels",value:function(t,e){var i=this.w,a=new m(this.ctx),s=a.group({class:"apexcharts-datalabels-group",transform:"translate(".concat(e.translateX?e.translateX:0,", ").concat(e.translateY?e.translateY:0,") scale(").concat(i.config.plotOptions.pie.customScale,")")}),r=t.total.show;s.node.style.opacity=e.opacity;var o,n,l=e.centerX,h=e.centerY;o=void 0===t.name.color?i.globals.colors[0]:t.name.color;var c=t.name.fontSize,d=t.name.fontFamily,g=t.name.fontWeight;n=void 0===t.value.color?i.config.chart.foreColor:t.value.color;var u=t.value.formatter,p="",f="";if(r?(o=t.total.color,c=t.total.fontSize,d=t.total.fontFamily,g=t.total.fontWeight,f=t.total.label,p=t.total.formatter(i)):1===i.globals.series.length&&(p=u(i.globals.series[0],i),f=i.globals.seriesNames[0]),f&&(f=t.name.formatter(f,t.total.show,i)),t.name.show){var x=a.drawText({x:l,y:h+parseFloat(t.name.offsetY),text:f,textAnchor:"middle",foreColor:o,fontSize:c,fontWeight:g,fontFamily:d});x.node.classList.add("apexcharts-datalabel-label"),s.add(x)}if(t.value.show){var b=t.name.show?parseFloat(t.value.offsetY)+16:t.value.offsetY,v=a.drawText({x:l,y:h+b,text:p,textAnchor:"middle",foreColor:n,fontWeight:t.value.fontWeight,fontSize:t.value.fontSize,fontFamily:t.value.fontFamily});v.node.classList.add("apexcharts-datalabel-value"),s.add(v)}return s}},{key:"printInnerLabels",value:function(t,e,i,a){var s,r=this.w;a?s=void 0===t.name.color?r.globals.colors[parseInt(a.parentNode.getAttribute("rel"),10)-1]:t.name.color:r.globals.series.length>1&&t.total.show&&(s=t.total.color);var o=r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),n=r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");i=(0,t.value.formatter)(i,r),a||"function"!=typeof t.total.formatter||(i=t.total.formatter(r));var l=e===t.total.label;e=t.name.formatter(e,l,r),null!==o&&(o.textContent=e),null!==n&&(n.textContent=i),null!==o&&(o.style.fill=s)}},{key:"printDataLabelsInner",value:function(t,e){var i=this.w,a=t.getAttribute("data:value"),s=i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"),10)-1];i.globals.series.length>1&&this.printInnerLabels(e,s,a,t);var r=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");null!==r&&(r.style.opacity=1)}},{key:"drawSpokes",value:function(t){var e=this,i=this.w,a=new m(this.ctx),s=i.config.plotOptions.polarArea.spokes;if(0!==s.strokeWidth){for(var r=[],o=360/i.globals.series.length,n=0;n<i.globals.series.length;n++)r.push(x.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize,i.config.plotOptions.pie.startAngle+o*n));r.forEach((function(i,r){var o=a.drawLine(i.x,i.y,e.centerX,e.centerY,Array.isArray(s.connectorColors)?s.connectorColors[r]:s.connectorColors);t.add(o)}))}}},{key:"revertDataLabelsInner",value:function(t,e,i){var a=this,s=this.w,r=s.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"),o=!1,n=s.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"),l=function(t){var i=t.makeSliceOut,s=t.printLabel;Array.prototype.forEach.call(n,(function(t){"true"===t.getAttribute("data:pieClicked")&&(i&&(o=!0),s&&a.printDataLabelsInner(t,e))}))};if(l({makeSliceOut:!0,printLabel:!1}),e.total.show&&s.globals.series.length>1)o&&!e.total.showAlways?l({makeSliceOut:!1,printLabel:!0}):this.printInnerLabels(e,e.total.label,e.total.formatter(s));else if(l({makeSliceOut:!1,printLabel:!0}),!o)if(s.globals.selectedDataPoints.length&&s.globals.series.length>1)if(s.globals.selectedDataPoints[0].length>0){var h=s.globals.selectedDataPoints[0],c=s.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(h));this.printDataLabelsInner(c,e)}else r&&s.globals.selectedDataPoints.length&&0===s.globals.selectedDataPoints[0].length&&(r.style.opacity=0);else r&&s.globals.series.length>1&&(r.style.opacity=0)}}]),t}(),Lt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animDur=0;var i=this.w;this.graphics=new m(this.ctx),this.lineColorArr=void 0!==i.globals.stroke.colors?i.globals.stroke.colors:i.globals.colors,this.defaultSize=i.globals.svgHeight<i.globals.svgWidth?i.globals.gridHeight+1.5*i.globals.goldenPadding:i.globals.gridWidth,this.isLog=i.config.yaxis[0].logarithmic,this.coreUtils=new y(this.ctx),this.maxValue=this.isLog?this.coreUtils.getLogVal(i.globals.maxY,0):i.globals.maxY,this.minValue=this.isLog?this.coreUtils.getLogVal(this.w.globals.minY,0):i.globals.minY,this.polygons=i.config.plotOptions.radar.polygons,this.strokeWidth=i.config.stroke.show?i.config.stroke.width:0,this.size=this.defaultSize/2.1-this.strokeWidth-i.config.chart.dropShadow.blur,i.config.xaxis.labels.show&&(this.size=this.size-i.globals.xAxisLabelsWidth/1.75),void 0!==i.config.plotOptions.radar.size&&(this.size=i.config.plotOptions.radar.size),this.dataRadiusOfPercent=[],this.dataRadius=[],this.angleArr=[],this.yaxisLabelsTextsPos=[]}return r(t,[{key:"draw",value:function(t){var i=this,a=this.w,s=new M(this.ctx),r=[],o=new z(this.ctx);t.length&&(this.dataPointsLen=t[a.globals.maxValsInArrayIndex].length),this.disAngle=2*Math.PI/this.dataPointsLen;var n=a.globals.gridWidth/2,l=a.globals.gridHeight/2,h=n+a.config.plotOptions.radar.offsetX,c=l+a.config.plotOptions.radar.offsetY,d=this.graphics.group({class:"apexcharts-radar-series apexcharts-plot-series",transform:"translate(".concat(h||0,", ").concat(c||0,")")}),g=[],u=null,p=null;if(this.yaxisLabels=this.graphics.group({class:"apexcharts-yaxis"}),t.forEach((function(t,n){var l=t.length===a.globals.dataPoints,h=i.graphics.group().attr({class:"apexcharts-series","data:longestSeries":l,seriesName:x.escapeString(a.globals.seriesNames[n]),rel:n+1,"data:realIndex":n});i.dataRadiusOfPercent[n]=[],i.dataRadius[n]=[],i.angleArr[n]=[],t.forEach((function(t,e){var a=Math.abs(i.maxValue-i.minValue);t+=Math.abs(i.minValue),i.isLog&&(t=i.coreUtils.getLogVal(t,0)),i.dataRadiusOfPercent[n][e]=t/a,i.dataRadius[n][e]=i.dataRadiusOfPercent[n][e]*i.size,i.angleArr[n][e]=e*i.disAngle})),g=i.getDataPointsPos(i.dataRadius[n],i.angleArr[n]);var c=i.createPaths(g,{x:0,y:0});u=i.graphics.group({class:"apexcharts-series-markers-wrap apexcharts-element-hidden"}),p=i.graphics.group({class:"apexcharts-datalabels","data:realIndex":n}),a.globals.delayedElements.push({el:u.node,index:n});var d={i:n,realIndex:n,animationDelay:n,initialSpeed:a.config.chart.animations.speed,dataChangeSpeed:a.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-radar",shouldClipToGrid:!1,bindEventsOnPaths:!1,stroke:a.globals.stroke.colors[n],strokeLineCap:a.config.stroke.lineCap},f=null;a.globals.previousPaths.length>0&&(f=i.getPreviousPath(n));for(var b=0;b<c.linePathsTo.length;b++){var m=i.graphics.renderPaths(e(e({},d),{},{pathFrom:null===f?c.linePathsFrom[b]:f,pathTo:c.linePathsTo[b],strokeWidth:Array.isArray(i.strokeWidth)?i.strokeWidth[n]:i.strokeWidth,fill:"none",drawShadow:!1}));h.add(m);var y=s.fillPath({seriesNumber:n}),w=i.graphics.renderPaths(e(e({},d),{},{pathFrom:null===f?c.areaPathsFrom[b]:f,pathTo:c.areaPathsTo[b],strokeWidth:0,fill:y,drawShadow:!1}));if(a.config.chart.dropShadow.enabled){var k=new v(i.ctx),A=a.config.chart.dropShadow;k.dropShadow(w,Object.assign({},A,{noUserSpaceOnUse:!0}),n)}h.add(w)}t.forEach((function(t,s){var r=new T(i.ctx).getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:n,dataPointIndex:s}),l=i.graphics.drawMarker(g[s].x,g[s].y,r);l.attr("rel",s),l.attr("j",s),l.attr("index",n),l.node.setAttribute("default-marker-size",r.pSize);var c=i.graphics.group({class:"apexcharts-series-markers"});c&&c.add(l),u.add(c),h.add(u);var d=a.config.dataLabels;if(d.enabled){var f=d.formatter(a.globals.series[n][s],{seriesIndex:n,dataPointIndex:s,w:a});o.plotDataLabelsText({x:g[s].x,y:g[s].y,text:f,textAnchor:"middle",i:n,j:n,parent:p,offsetCorrection:!1,dataLabelsConfig:e({},d)})}h.add(p)})),r.push(h)})),this.drawPolygons({parent:d}),a.config.xaxis.labels.show){var f=this.drawXAxisTexts();d.add(f)}return r.forEach((function(t){d.add(t)})),d.add(this.yaxisLabels),d}},{key:"drawPolygons",value:function(t){for(var e=this,i=this.w,a=t.parent,s=new St(this.ctx),r=i.globals.yAxisScale[0].result.reverse(),o=r.length,n=[],l=this.size/(o-1),h=0;h<o;h++)n[h]=l*h;n.reverse();var c=[],d=[];n.forEach((function(t,i){var a=x.getPolygonPos(t,e.dataPointsLen),s="";a.forEach((function(t,a){if(0===i){var r=e.graphics.drawLine(t.x,t.y,0,0,Array.isArray(e.polygons.connectorColors)?e.polygons.connectorColors[a]:e.polygons.connectorColors);d.push(r)}0===a&&e.yaxisLabelsTextsPos.push({x:t.x,y:t.y}),s+=t.x+","+t.y+" "})),c.push(s)})),c.forEach((function(t,s){var r=e.polygons.strokeColors,o=e.polygons.strokeWidth,n=e.graphics.drawPolygon(t,Array.isArray(r)?r[s]:r,Array.isArray(o)?o[s]:o,i.globals.radarPolygons.fill.colors[s]);a.add(n)})),d.forEach((function(t){a.add(t)})),i.config.yaxis[0].show&&this.yaxisLabelsTextsPos.forEach((function(t,i){var a=s.drawYAxisTexts(t.x,t.y,i,r[i]);e.yaxisLabels.add(a)}))}},{key:"drawXAxisTexts",value:function(){var t=this,i=this.w,a=i.config.xaxis.labels,s=this.graphics.group({class:"apexcharts-xaxis"}),r=x.getPolygonPos(this.size,this.dataPointsLen);return i.globals.labels.forEach((function(o,n){var l=i.config.xaxis.labels.formatter,h=new z(t.ctx);if(r[n]){var c=t.getTextPos(r[n],t.size),d=l(o,{seriesIndex:-1,dataPointIndex:n,w:i});h.plotDataLabelsText({x:c.newX,y:c.newY,text:d,textAnchor:c.textAnchor,i:n,j:n,parent:s,color:Array.isArray(a.style.colors)&&a.style.colors[n]?a.style.colors[n]:"#a8a8a8",dataLabelsConfig:e({textAnchor:c.textAnchor,dropShadow:{enabled:!1}},a),offsetCorrection:!1})}})),s}},{key:"createPaths",value:function(t,e){var i=this,a=[],s=[],r=[],o=[];if(t.length){s=[this.graphics.move(e.x,e.y)],o=[this.graphics.move(e.x,e.y)];var n=this.graphics.move(t[0].x,t[0].y),l=this.graphics.move(t[0].x,t[0].y);t.forEach((function(e,a){n+=i.graphics.line(e.x,e.y),l+=i.graphics.line(e.x,e.y),a===t.length-1&&(n+="Z",l+="Z")})),a.push(n),r.push(l)}return{linePathsFrom:s,linePathsTo:a,areaPathsFrom:o,areaPathsTo:r}}},{key:"getTextPos",value:function(t,e){var i="middle",a=t.x,s=t.y;return Math.abs(t.x)>=10?t.x>0?(i="start",a+=10):t.x<0&&(i="end",a-=10):i="middle",Math.abs(t.y)>=e-10&&(t.y<0?s-=10:t.y>0&&(s+=10)),{textAnchor:i,newX:a,newY:s}}},{key:"getPreviousPath",value:function(t){for(var e=this.w,i=null,a=0;a<e.globals.previousPaths.length;a++){var s=e.globals.previousPaths[a];s.paths.length>0&&parseInt(s.realIndex,10)===parseInt(t,10)&&void 0!==e.globals.previousPaths[a].paths[0]&&(i=e.globals.previousPaths[a].paths[0].d)}return i}},{key:"getDataPointsPos",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.dataPointsLen;t=t||[],e=e||[];for(var a=[],s=0;s<i;s++){var r={};r.x=t[s]*Math.sin(e[s]),r.y=-t[s]*Math.cos(e[s]),a.push(r)}return a}}]),t}(),Pt=function(t){n(i,Ct);var e=d(i);function i(t){var s;a(this,i),(s=e.call(this,t)).ctx=t,s.w=t.w,s.animBeginArr=[0],s.animDur=0;var r=s.w;return s.startAngle=r.config.plotOptions.radialBar.startAngle,s.endAngle=r.config.plotOptions.radialBar.endAngle,s.totalAngle=Math.abs(r.config.plotOptions.radialBar.endAngle-r.config.plotOptions.radialBar.startAngle),s.trackStartAngle=r.config.plotOptions.radialBar.track.startAngle,s.trackEndAngle=r.config.plotOptions.radialBar.track.endAngle,s.donutDataLabels=s.w.config.plotOptions.radialBar.dataLabels,s.radialDataLabels=s.donutDataLabels,s.trackStartAngle||(s.trackStartAngle=s.startAngle),s.trackEndAngle||(s.trackEndAngle=s.endAngle),360===s.endAngle&&(s.endAngle=359.99),s.margin=parseInt(r.config.plotOptions.radialBar.track.margin,10),s}return r(i,[{key:"draw",value:function(t){var e=this.w,i=new m(this.ctx),a=i.group({class:"apexcharts-radialbar"});if(e.globals.noData)return a;var s=i.group(),r=this.defaultSize/2,o=e.globals.gridWidth/2,n=this.defaultSize/2.05;e.config.chart.sparkline.enabled||(n=n-e.config.stroke.width-e.config.chart.dropShadow.blur);var l=e.globals.fill.colors;if(e.config.plotOptions.radialBar.track.show){var h=this.drawTracks({size:n,centerX:o,centerY:r,colorArr:l,series:t});s.add(h)}var c=this.drawArcs({size:n,centerX:o,centerY:r,colorArr:l,series:t}),d=360;e.config.plotOptions.radialBar.startAngle<0&&(d=this.totalAngle);var g=(360-d)/360;if(e.globals.radialSize=n-n*g,this.radialDataLabels.value.show){var u=Math.max(this.radialDataLabels.value.offsetY,this.radialDataLabels.name.offsetY);e.globals.radialSize+=u*g}return s.add(c.g),"front"===e.config.plotOptions.radialBar.hollow.position&&(c.g.add(c.elHollow),c.dataLabels&&c.g.add(c.dataLabels)),a.add(s),a}},{key:"drawTracks",value:function(t){var e=this.w,i=new m(this.ctx),a=i.group({class:"apexcharts-tracks"}),s=new v(this.ctx),r=new M(this.ctx),o=this.getStrokeWidth(t);t.size=t.size-o/2;for(var n=0;n<t.series.length;n++){var l=i.group({class:"apexcharts-radialbar-track apexcharts-track"});a.add(l),l.attr({rel:n+1}),t.size=t.size-o-this.margin;var h=e.config.plotOptions.radialBar.track,c=r.fillPath({seriesNumber:0,size:t.size,fillColors:Array.isArray(h.background)?h.background[n]:h.background,solid:!0}),d=this.trackStartAngle,g=this.trackEndAngle;Math.abs(g)+Math.abs(d)>=360&&(g=360-Math.abs(this.startAngle)-.1);var u=i.drawPath({d:"",stroke:c,strokeWidth:o*parseInt(h.strokeWidth,10)/100,fill:"none",strokeOpacity:h.opacity,classes:"apexcharts-radialbar-area"});if(h.dropShadow.enabled){var p=h.dropShadow;s.dropShadow(u,p)}l.add(u),u.attr("id","apexcharts-radialbarTrack-"+n),this.animatePaths(u,{centerX:t.centerX,centerY:t.centerY,endAngle:g,startAngle:d,size:t.size,i:n,totalItems:2,animBeginArr:0,dur:0,isTrack:!0,easing:e.globals.easing})}return a}},{key:"drawArcs",value:function(t){var e=this.w,i=new m(this.ctx),a=new M(this.ctx),s=new v(this.ctx),r=i.group(),o=this.getStrokeWidth(t);t.size=t.size-o/2;var n=e.config.plotOptions.radialBar.hollow.background,l=t.size-o*t.series.length-this.margin*t.series.length-o*parseInt(e.config.plotOptions.radialBar.track.strokeWidth,10)/100/2,h=l-e.config.plotOptions.radialBar.hollow.margin;void 0!==e.config.plotOptions.radialBar.hollow.image&&(n=this.drawHollowImage(t,r,l,n));var c=this.drawHollow({size:h,centerX:t.centerX,centerY:t.centerY,fill:n||"transparent"});if(e.config.plotOptions.radialBar.hollow.dropShadow.enabled){var d=e.config.plotOptions.radialBar.hollow.dropShadow;s.dropShadow(c,d)}var g=1;!this.radialDataLabels.total.show&&e.globals.series.length>1&&(g=0);var u=null;this.radialDataLabels.show&&(u=this.renderInnerDataLabels(this.radialDataLabels,{hollowSize:l,centerX:t.centerX,centerY:t.centerY,opacity:g})),"back"===e.config.plotOptions.radialBar.hollow.position&&(r.add(c),u&&r.add(u));var p=!1;e.config.plotOptions.radialBar.inverseOrder&&(p=!0);for(var f=p?t.series.length-1:0;p?f>=0:f<t.series.length;p?f--:f++){var b=i.group({class:"apexcharts-series apexcharts-radial-series",seriesName:x.escapeString(e.globals.seriesNames[f])});r.add(b),b.attr({rel:f+1,"data:realIndex":f}),this.ctx.series.addCollapsedClassToSeries(b,f),t.size=t.size-o-this.margin;var y=a.fillPath({seriesNumber:f,size:t.size,value:t.series[f]}),w=this.startAngle,k=void 0,A=x.negToZero(t.series[f]>100?100:t.series[f])/100,S=Math.round(this.totalAngle*A)+this.startAngle,C=void 0;e.globals.dataChanged&&(k=this.startAngle,C=Math.round(this.totalAngle*x.negToZero(e.globals.previousPaths[f])/100)+k),Math.abs(S)+Math.abs(w)>=360&&(S-=.01),Math.abs(C)+Math.abs(k)>=360&&(C-=.01);var L=S-w,P=Array.isArray(e.config.stroke.dashArray)?e.config.stroke.dashArray[f]:e.config.stroke.dashArray,T=i.drawPath({d:"",stroke:y,strokeWidth:o,fill:"none",fillOpacity:e.config.fill.opacity,classes:"apexcharts-radialbar-area apexcharts-radialbar-slice-"+f,strokeDashArray:P});if(m.setAttrs(T.node,{"data:angle":L,"data:value":t.series[f]}),e.config.chart.dropShadow.enabled){var I=e.config.chart.dropShadow;s.dropShadow(T,I,f)}s.setSelectionFilter(T,0,f),this.addListeners(T,this.radialDataLabels),b.add(T),T.attr({index:0,j:f});var z=0;!this.initialAnim||e.globals.resized||e.globals.dataChanged||(z=e.config.chart.animations.speed),e.globals.dataChanged&&(z=e.config.chart.animations.dynamicAnimation.speed),this.animDur=z/(1.2*t.series.length)+this.animDur,this.animBeginArr.push(this.animDur),this.animatePaths(T,{centerX:t.centerX,centerY:t.centerY,endAngle:S,startAngle:w,prevEndAngle:C,prevStartAngle:k,size:t.size,i:f,totalItems:2,animBeginArr:this.animBeginArr,dur:z,shouldSetPrevPaths:!0,easing:e.globals.easing})}return{g:r,elHollow:c,dataLabels:u}}},{key:"drawHollow",value:function(t){var e=new m(this.ctx).drawCircle(2*t.size);return e.attr({class:"apexcharts-radialbar-hollow",cx:t.centerX,cy:t.centerY,r:t.size,fill:t.fill}),e}},{key:"drawHollowImage",value:function(t,e,i,a){var s=this.w,r=new M(this.ctx),o=x.randomId(),n=s.config.plotOptions.radialBar.hollow.image;if(s.config.plotOptions.radialBar.hollow.imageClipped)r.clippedImgArea({width:i,height:i,image:n,patternID:"pattern".concat(s.globals.cuid).concat(o)}),a="url(#pattern".concat(s.globals.cuid).concat(o,")");else{var l=s.config.plotOptions.radialBar.hollow.imageWidth,h=s.config.plotOptions.radialBar.hollow.imageHeight;if(void 0===l&&void 0===h){var c=s.globals.dom.Paper.image(n).loaded((function(e){this.move(t.centerX-e.width/2+s.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-e.height/2+s.config.plotOptions.radialBar.hollow.imageOffsetY)}));e.add(c)}else{var d=s.globals.dom.Paper.image(n).loaded((function(e){this.move(t.centerX-l/2+s.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-h/2+s.config.plotOptions.radialBar.hollow.imageOffsetY),this.size(l,h)}));e.add(d)}}return a}},{key:"getStrokeWidth",value:function(t){var e=this.w;return t.size*(100-parseInt(e.config.plotOptions.radialBar.hollow.size,10))/100/(t.series.length+1)-this.margin}}]),i}(),Mt=function(){function t(e){a(this,t),this.w=e.w,this.lineCtx=e}return r(t,[{key:"sameValueSeriesFix",value:function(t,e){var i=this.w;if("line"===i.config.chart.type&&("gradient"===i.config.fill.type||"gradient"===i.config.fill.type[t])&&new y(this.lineCtx.ctx,i).seriesHaveSameValues(t)){var a=e[t].slice();a[a.length-1]=a[a.length-1]+1e-6,e[t]=a}return e}},{key:"calculatePoints",value:function(t){var e=t.series,i=t.realIndex,a=t.x,s=t.y,r=t.i,o=t.j,n=t.prevY,l=this.w,h=[],c=[];if(0===o){var d=this.lineCtx.categoryAxisCorrection+l.config.markers.offsetX;l.globals.isXNumeric&&(d=(l.globals.seriesX[i][0]-l.globals.minX)/this.lineCtx.xRatio+l.config.markers.offsetX),h.push(d),c.push(x.isNumber(e[r][0])?n+l.config.markers.offsetY:null),h.push(a+l.config.markers.offsetX),c.push(x.isNumber(e[r][o+1])?s+l.config.markers.offsetY:null)}else h.push(a+l.config.markers.offsetX),c.push(x.isNumber(e[r][o+1])?s+l.config.markers.offsetY:null);return{x:h,y:c}}},{key:"checkPreviousPaths",value:function(t){for(var e=t.pathFromLine,i=t.pathFromArea,a=t.realIndex,s=this.w,r=0;r<s.globals.previousPaths.length;r++){var o=s.globals.previousPaths[r];("line"===o.type||"area"===o.type)&&o.paths.length>0&&parseInt(o.realIndex,10)===parseInt(a,10)&&("line"===o.type?(this.lineCtx.appendPathFrom=!1,e=s.globals.previousPaths[r].paths[0].d):"area"===o.type&&(this.lineCtx.appendPathFrom=!1,i=s.globals.previousPaths[r].paths[0].d,s.config.stroke.show&&s.globals.previousPaths[r].paths[1]&&(e=s.globals.previousPaths[r].paths[1].d)))}return{pathFromLine:e,pathFromArea:i}}},{key:"determineFirstPrevY",value:function(t){var e=t.i,i=t.series,a=t.prevY,s=t.lineYPosition,r=this.w;if(void 0!==i[e][0])a=(s=r.config.chart.stacked&&e>0?this.lineCtx.prevSeriesY[e-1][0]:this.lineCtx.zeroY)-i[e][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]+2*(this.lineCtx.isReversed?i[e][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]:0);else if(r.config.chart.stacked&&e>0&&void 0===i[e][0])for(var o=e-1;o>=0;o--)if(null!==i[o][0]&&void 0!==i[o][0]){a=s=this.lineCtx.prevSeriesY[o][0];break}return{prevY:a,lineYPosition:s}}}]),t}(),Tt=function(){function t(e,i,s){a(this,t),this.ctx=e,this.w=e.w,this.xyRatios=i,this.pointsChart=!("bubble"!==this.w.config.chart.type&&"scatter"!==this.w.config.chart.type)||s,this.scatter=new I(this.ctx),this.noNegatives=this.w.globals.minX===Number.MAX_VALUE,this.lineHelpers=new Mt(this),this.markers=new T(this.ctx),this.prevSeriesY=[],this.categoryAxisCorrection=0,this.yaxisIndex=0}return r(t,[{key:"draw",value:function(t,e,i){var a=this.w,s=new m(this.ctx),r=a.globals.comboCharts?e:a.config.chart.type,o=s.group({class:"apexcharts-".concat(r,"-series apexcharts-plot-series")}),n=new y(this.ctx,a);this.yRatio=this.xyRatios.yRatio,this.zRatio=this.xyRatios.zRatio,this.xRatio=this.xyRatios.xRatio,this.baseLineY=this.xyRatios.baseLineY,t=n.getLogSeries(t),this.yRatio=n.getLogYRatios(this.yRatio);for(var l=[],h=0;h<t.length;h++){t=this.lineHelpers.sameValueSeriesFix(h,t);var c=a.globals.comboCharts?i[h]:h;this._initSerieVariables(t,h,c);var d=[],g=[],u=a.globals.padHorizontal+this.categoryAxisCorrection;this.ctx.series.addCollapsedClassToSeries(this.elSeries,c),a.globals.isXNumeric&&a.globals.seriesX.length>0&&(u=(a.globals.seriesX[c][0]-a.globals.minX)/this.xRatio),g.push(u);var p,f=u,x=f,b=this.zeroY;b=this.lineHelpers.determineFirstPrevY({i:h,series:t,prevY:b,lineYPosition:0}).prevY,d.push(b),p=b;var v=this._calculatePathsFrom({series:t,i:h,realIndex:c,prevX:x,prevY:b}),w=this._iterateOverDataPoints({series:t,realIndex:c,i:h,x:u,y:1,pX:f,pY:p,pathsFrom:v,linePaths:[],areaPaths:[],seriesIndex:i,lineYPosition:0,xArrj:g,yArrj:d});this._handlePaths({type:r,realIndex:c,i:h,paths:w}),this.elSeries.add(this.elPointsMain),this.elSeries.add(this.elDataLabelsWrap),l.push(this.elSeries)}if(a.config.chart.stacked)for(var k=l.length;k>0;k--)o.add(l[k-1]);else for(var A=0;A<l.length;A++)o.add(l[A]);return o}},{key:"_initSerieVariables",value:function(t,e,i){var a=this.w,s=new m(this.ctx);this.xDivision=a.globals.gridWidth/(a.globals.dataPoints-("on"===a.config.xaxis.tickPlacement?1:0)),this.strokeWidth=Array.isArray(a.config.stroke.width)?a.config.stroke.width[i]:a.config.stroke.width,this.yRatio.length>1&&(this.yaxisIndex=i),this.isReversed=a.config.yaxis[this.yaxisIndex]&&a.config.yaxis[this.yaxisIndex].reversed,this.zeroY=a.globals.gridHeight-this.baseLineY[this.yaxisIndex]-(this.isReversed?a.globals.gridHeight:0)+(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),this.areaBottomY=this.zeroY,(this.zeroY>a.globals.gridHeight||"end"===a.config.plotOptions.area.fillTo)&&(this.areaBottomY=a.globals.gridHeight),this.categoryAxisCorrection=this.xDivision/2,this.elSeries=s.group({class:"apexcharts-series",seriesName:x.escapeString(a.globals.seriesNames[i])}),this.elPointsMain=s.group({class:"apexcharts-series-markers-wrap","data:realIndex":i}),this.elDataLabelsWrap=s.group({class:"apexcharts-datalabels","data:realIndex":i});var r=t[e].length===a.globals.dataPoints;this.elSeries.attr({"data:longestSeries":r,rel:e+1,"data:realIndex":i}),this.appendPathFrom=!0}},{key:"_calculatePathsFrom",value:function(t){var e,i,a,s,r=t.series,o=t.i,n=t.realIndex,l=t.prevX,h=t.prevY,c=this.w,d=new m(this.ctx);if(null===r[o][0]){for(var g=0;g<r[o].length;g++)if(null!==r[o][g]){l=this.xDivision*g,h=this.zeroY-r[o][g]/this.yRatio[this.yaxisIndex],e=d.move(l,h),i=d.move(l,this.areaBottomY);break}}else e=d.move(l,h),i=d.move(l,this.areaBottomY)+d.line(l,h);if(a=d.move(-1,this.zeroY)+d.line(-1,this.zeroY),s=d.move(-1,this.zeroY)+d.line(-1,this.zeroY),c.globals.previousPaths.length>0){var u=this.lineHelpers.checkPreviousPaths({pathFromLine:a,pathFromArea:s,realIndex:n});a=u.pathFromLine,s=u.pathFromArea}return{prevX:l,prevY:h,linePath:e,areaPath:i,pathFromLine:a,pathFromArea:s}}},{key:"_handlePaths",value:function(t){var i=t.type,a=t.realIndex,s=t.i,r=t.paths,o=this.w,n=new m(this.ctx),l=new M(this.ctx);this.prevSeriesY.push(r.yArrj),o.globals.seriesXvalues[a]=r.xArrj,o.globals.seriesYvalues[a]=r.yArrj;var h=o.config.forecastDataPoints;if(h.count>0){var c=o.globals.seriesXvalues[a][o.globals.seriesXvalues[a].length-h.count-1],d=n.drawRect(c,0,o.globals.gridWidth,o.globals.gridHeight,0);o.globals.dom.elForecastMask.appendChild(d.node);var g=n.drawRect(0,0,c,o.globals.gridHeight,0);o.globals.dom.elNonForecastMask.appendChild(g.node)}this.pointsChart||o.globals.delayedElements.push({el:this.elPointsMain.node,index:a});var u={i:s,realIndex:a,animationDelay:s,initialSpeed:o.config.chart.animations.speed,dataChangeSpeed:o.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(i)};if("area"===i)for(var p=l.fillPath({seriesNumber:a}),f=0;f<r.areaPaths.length;f++){var x=n.renderPaths(e(e({},u),{},{pathFrom:r.pathFromArea,pathTo:r.areaPaths[f],stroke:"none",strokeWidth:0,strokeLineCap:null,fill:p}));this.elSeries.add(x)}if(o.config.stroke.show&&!this.pointsChart){var b=null;if("line"===i)b=l.fillPath({seriesNumber:a,i:s});else if("solid"===o.config.stroke.fill.type)b=o.globals.stroke.colors[a];else{var v=o.config.fill;o.config.fill=o.config.stroke.fill,b=l.fillPath({seriesNumber:a,i:s}),o.config.fill=v}for(var y=0;y<r.linePaths.length;y++){var w=e(e({},u),{},{pathFrom:r.pathFromLine,pathTo:r.linePaths[y],stroke:b,strokeWidth:this.strokeWidth,strokeLineCap:o.config.stroke.lineCap,fill:"none"}),k=n.renderPaths(w);if(this.elSeries.add(k),h.count>0){var A=n.renderPaths(w);A.node.setAttribute("stroke-dasharray",h.dashArray),h.strokeWidth&&A.node.setAttribute("stroke-width",h.strokeWidth),this.elSeries.add(A),A.attr("clip-path","url(#forecastMask".concat(o.globals.cuid,")")),k.attr("clip-path","url(#nonForecastMask".concat(o.globals.cuid,")"))}}}}},{key:"_iterateOverDataPoints",value:function(t){for(var e=t.series,i=t.realIndex,a=t.i,s=t.x,r=t.y,o=t.pX,n=t.pY,l=t.pathsFrom,h=t.linePaths,c=t.areaPaths,d=t.seriesIndex,g=t.lineYPosition,u=t.xArrj,p=t.yArrj,f=this.w,b=new m(this.ctx),v=this.yRatio,y=l.prevY,w=l.linePath,k=l.areaPath,A=l.pathFromLine,S=l.pathFromArea,C=x.isNumber(f.globals.minYArr[i])?f.globals.minYArr[i]:f.globals.minY,L=f.globals.dataPoints>1?f.globals.dataPoints-1:f.globals.dataPoints,P=0;P<L;P++){var M=void 0===e[a][P+1]||null===e[a][P+1];if(f.globals.isXNumeric){var T=f.globals.seriesX[i][P+1];void 0===f.globals.seriesX[i][P+1]&&(T=f.globals.seriesX[i][L-1]),s=(T-f.globals.minX)/this.xRatio}else s+=this.xDivision;if(f.config.chart.stacked)if(a>0&&f.globals.collapsedSeries.length<f.config.series.length-1){g=this.prevSeriesY[function(t){for(var e=t,i=0;i<f.globals.series.length;i++)if(f.globals.collapsedSeriesIndices.indexOf(t)>-1){e--;break}return e>=0?e:0}(a-1)][P+1]}else g=this.zeroY;else g=this.zeroY;r=M?g-C/v[this.yaxisIndex]+2*(this.isReversed?C/v[this.yaxisIndex]:0):g-e[a][P+1]/v[this.yaxisIndex]+2*(this.isReversed?e[a][P+1]/v[this.yaxisIndex]:0),u.push(s),p.push(r);var I=this.lineHelpers.calculatePoints({series:e,x:s,y:r,realIndex:i,i:a,j:P,prevY:y}),z=this._createPaths({series:e,i:a,realIndex:i,j:P,x:s,y:r,pX:o,pY:n,linePath:w,areaPath:k,linePaths:h,areaPaths:c,seriesIndex:d});c=z.areaPaths,h=z.linePaths,o=z.pX,n=z.pY,k=z.areaPath,w=z.linePath,this.appendPathFrom&&(A+=b.line(s,this.zeroY),S+=b.line(s,this.zeroY)),this.handleNullDataPoints(e,I,a,P,i),this._handleMarkersAndLabels({pointsPos:I,series:e,x:s,y:r,prevY:y,i:a,j:P,realIndex:i})}return{yArrj:p,xArrj:u,pathFromArea:S,areaPaths:c,pathFromLine:A,linePaths:h}}},{key:"_handleMarkersAndLabels",value:function(t){var e=t.pointsPos;t.series,t.x,t.y,t.prevY;var i=t.i,a=t.j,s=t.realIndex,r=this.w,o=new z(this.ctx);if(this.pointsChart)this.scatter.draw(this.elSeries,a,{realIndex:s,pointsPos:e,zRatio:this.zRatio,elParent:this.elPointsMain});else{r.globals.series[i].length>1&&this.elPointsMain.node.classList.add("apexcharts-element-hidden");var n=this.markers.plotChartMarkers(e,s,a+1);null!==n&&this.elPointsMain.add(n)}var l=o.drawDataLabel(e,s,a+1,null);null!==l&&this.elDataLabelsWrap.add(l)}},{key:"_createPaths",value:function(t){var e=t.series,i=t.i,a=t.realIndex,s=t.j,r=t.x,o=t.y,n=t.pX,l=t.pY,h=t.linePath,c=t.areaPath,d=t.linePaths,g=t.areaPaths,u=t.seriesIndex,p=this.w,f=new m(this.ctx),x=p.config.stroke.curve,b=this.areaBottomY;if(Array.isArray(p.config.stroke.curve)&&(x=Array.isArray(u)?p.config.stroke.curve[u[i]]:p.config.stroke.curve[i]),"smooth"===x){var v=.35*(r-n);p.globals.hasNullValues?(null!==e[i][s]&&(null!==e[i][s+1]?(h=f.move(n,l)+f.curve(n+v,l,r-v,o,r+1,o),c=f.move(n+1,l)+f.curve(n+v,l,r-v,o,r+1,o)+f.line(r,b)+f.line(n,b)+"z"):(h=f.move(n,l),c=f.move(n,l)+"z")),d.push(h),g.push(c)):(h+=f.curve(n+v,l,r-v,o,r,o),c+=f.curve(n+v,l,r-v,o,r,o)),n=r,l=o,s===e[i].length-2&&(c=c+f.curve(n,l,r,o,r,b)+f.move(r,o)+"z",p.globals.hasNullValues||(d.push(h),g.push(c)))}else{if(null===e[i][s+1]){h+=f.move(r,o);var y=p.globals.isXNumeric?(p.globals.seriesX[a][s]-p.globals.minX)/this.xRatio:r-this.xDivision;c=c+f.line(y,b)+f.move(r,o)+"z"}null===e[i][s]&&(h+=f.move(r,o),c+=f.move(r,b)),"stepline"===x?(h=h+f.line(r,null,"H")+f.line(null,o,"V"),c=c+f.line(r,null,"H")+f.line(null,o,"V")):"straight"===x&&(h+=f.line(r,o),c+=f.line(r,o)),s===e[i].length-2&&(c=c+f.line(r,b)+f.move(r,o)+"z",d.push(h),g.push(c))}return{linePaths:d,areaPaths:g,pX:n,pY:l,linePath:h,areaPath:c}}},{key:"handleNullDataPoints",value:function(t,e,i,a,s){var r=this.w;if(null===t[i][a]&&r.config.markers.showNullDataPoints||1===t[i].length){var o=this.markers.plotChartMarkers(e,s,a+1,this.strokeWidth-r.config.markers.strokeWidth/2,!0);null!==o&&this.elPointsMain.add(o)}}}]),t}();window.TreemapSquared={},window.TreemapSquared.generate=function(){function t(e,i,a,s){this.xoffset=e,this.yoffset=i,this.height=s,this.width=a,this.shortestEdge=function(){return Math.min(this.height,this.width)},this.getCoordinates=function(t){var e,i=[],a=this.xoffset,s=this.yoffset,o=r(t)/this.height,n=r(t)/this.width;if(this.width>=this.height)for(e=0;e<t.length;e++)i.push([a,s,a+o,s+t[e]/o]),s+=t[e]/o;else for(e=0;e<t.length;e++)i.push([a,s,a+t[e]/n,s+n]),a+=t[e]/n;return i},this.cutArea=function(e){var i;if(this.width>=this.height){var a=e/this.height,s=this.width-a;i=new t(this.xoffset+a,this.yoffset,s,this.height)}else{var r=e/this.width,o=this.height-r;i=new t(this.xoffset,this.yoffset+r,this.width,o)}return i}}function e(e,a,s,o,n){return o=void 0===o?0:o,n=void 0===n?0:n,function(t){var e,i,a=[];for(e=0;e<t.length;e++)for(i=0;i<t[e].length;i++)a.push(t[e][i]);return a}(i(function(t,e){var i,a=[],s=e/r(t);for(i=0;i<t.length;i++)a[i]=t[i]*s;return a}(e,a*s),[],new t(o,n,a,s),[]))}function i(t,e,s,o){var n,l,h;if(0!==t.length)return n=s.shortestEdge(),function(t,e,i){var s;if(0===t.length)return!0;(s=t.slice()).push(e);var r=a(t,i),o=a(s,i);return r>=o}(e,l=t[0],n)?(e.push(l),i(t.slice(1),e,s,o)):(h=s.cutArea(r(e),o),o.push(s.getCoordinates(e)),i(t,[],h,o)),o;o.push(s.getCoordinates(e))}function a(t,e){var i=Math.min.apply(Math,t),a=Math.max.apply(Math,t),s=r(t);return Math.max(Math.pow(e,2)*a/Math.pow(s,2),Math.pow(s,2)/(Math.pow(e,2)*i))}function s(t){return t&&t.constructor===Array}function r(t){var e,i=0;for(e=0;e<t.length;e++)i+=t[e];return i}function o(t){var e,i=0;if(s(t[0]))for(e=0;e<t.length;e++)i+=o(t[e]);else i=r(t);return i}return function t(i,a,r,n,l){n=void 0===n?0:n,l=void 0===l?0:l;var h,c,d=[],g=[];if(s(i[0])){for(c=0;c<i.length;c++)d[c]=o(i[c]);for(h=e(d,a,r,n,l),c=0;c<i.length;c++)g.push(t(i[c],h[c][2]-h[c][0],h[c][3]-h[c][1],h[c][0],h[c][1]))}else g=e(i,a,r,n,l);return g}}();var It,zt,Xt=function(){function t(e,i){a(this,t),this.ctx=e,this.w=e.w,this.strokeWidth=this.w.config.stroke.width,this.helpers=new kt(e),this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.labels=[]}return r(t,[{key:"draw",value:function(t){var e=this,i=this.w,a=new m(this.ctx),s=new M(this.ctx),r=a.group({class:"apexcharts-treemap"});if(i.globals.noData)return r;var o=[];return t.forEach((function(t){var e=t.map((function(t){return Math.abs(t)}));o.push(e)})),this.negRange=this.helpers.checkColorRange(),i.config.series.forEach((function(t,i){t.data.forEach((function(t){Array.isArray(e.labels[i])||(e.labels[i]=[]),e.labels[i].push(t.x)}))})),window.TreemapSquared.generate(o,i.globals.gridWidth,i.globals.gridHeight).forEach((function(o,n){var l=a.group({class:"apexcharts-series apexcharts-treemap-series",seriesName:x.escapeString(i.globals.seriesNames[n]),rel:n+1,"data:realIndex":n});if(i.config.chart.dropShadow.enabled){var h=i.config.chart.dropShadow;new v(e.ctx).dropShadow(r,h,n)}var c=a.group({class:"apexcharts-data-labels"});o.forEach((function(r,o){var h=r[0],c=r[1],d=r[2],g=r[3],u=a.drawRect(h,c,d-h,g-c,0,"#fff",1,e.strokeWidth,i.config.plotOptions.treemap.useFillColorAsStroke?f:i.globals.stroke.colors[n]);u.attr({cx:h,cy:c,index:n,i:n,j:o,width:d-h,height:g-c});var p=e.helpers.getShadeColor(i.config.chart.type,n,o,e.negRange),f=p.color;void 0!==i.config.series[n].data[o]&&i.config.series[n].data[o].fillColor&&(f=i.config.series[n].data[o].fillColor);var x=s.fillPath({color:f,seriesNumber:n,dataPointIndex:o});u.node.classList.add("apexcharts-treemap-rect"),u.attr({fill:x}),e.helpers.addListeners(u);var b={x:h+(d-h)/2,y:c+(g-c)/2,width:0,height:0},v={x:h,y:c,width:d-h,height:g-c};if(i.config.chart.animations.enabled&&!i.globals.dataChanged){var m=1;i.globals.resized||(m=i.config.chart.animations.speed),e.animateTreemap(u,b,v,m)}if(i.globals.dataChanged){var y=1;e.dynamicAnim.enabled&&i.globals.shouldAnimate&&(y=e.dynamicAnim.speed,i.globals.previousPaths[n]&&i.globals.previousPaths[n][o]&&i.globals.previousPaths[n][o].rect&&(b=i.globals.previousPaths[n][o].rect),e.animateTreemap(u,b,v,y))}var w=e.getFontSize(r),k=i.config.dataLabels.formatter(e.labels[n][o],{value:i.globals.series[n][o],seriesIndex:n,dataPointIndex:o,w:i}),A=e.helpers.calculateDataLabels({text:k,x:(h+d)/2,y:(c+g)/2+e.strokeWidth/2+w/3,i:n,j:o,colorProps:p,fontSize:w,series:t});i.config.dataLabels.enabled&&A&&e.rotateToFitLabel(A,w,k,h,c,d,g),l.add(u),null!==A&&l.add(A)})),l.add(c),r.add(l)})),r}},{key:"getFontSize",value:function(t){var e=this.w;var i,a,s,r,o=function t(e){var i,a=0;if(Array.isArray(e[0]))for(i=0;i<e.length;i++)a+=t(e[i]);else for(i=0;i<e.length;i++)a+=e[i].length;return a}(this.labels)/function t(e){var i,a=0;if(Array.isArray(e[0]))for(i=0;i<e.length;i++)a+=t(e[i]);else for(i=0;i<e.length;i++)a+=1;return a}(this.labels);return i=t[2]-t[0],a=t[3]-t[1],s=i*a,r=Math.pow(s,.5),Math.min(r/o,parseInt(e.config.dataLabels.style.fontSize,10))}},{key:"rotateToFitLabel",value:function(t,e,i,a,s,r,o){var n=new m(this.ctx),l=n.getTextRects(i,e);if(l.width+this.w.config.stroke.width+5>r-a&&l.width<=o-s){var h=n.rotateAroundCenter(t.node);t.node.setAttribute("transform","rotate(-90 ".concat(h.x," ").concat(h.y,")"))}}},{key:"animateTreemap",value:function(t,e,i,a){var s=new b(this.ctx);s.animateRect(t,{x:e.x,y:e.y,width:e.width,height:e.height},{x:i.x,y:i.y,width:i.width,height:i.height},a,(function(){s.animationCompleted(t)}))}}]),t}(),Et=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w,this.timeScaleArray=[],this.utc=this.w.config.xaxis.labels.datetimeUTC}return r(t,[{key:"calculateTimeScaleTicks",value:function(t,i){var a=this,s=this.w;if(s.globals.allSeriesCollapsed)return s.globals.labels=[],s.globals.timescaleLabels=[],[];var r=new R(this.ctx),o=(i-t)/864e5;this.determineInterval(o),s.globals.disableZoomIn=!1,s.globals.disableZoomOut=!1,o<.00011574074074074075?s.globals.disableZoomIn=!0:o>5e4&&(s.globals.disableZoomOut=!0);var n=r.getTimeUnitsfromTimestamp(t,i,this.utc),l=s.globals.gridWidth/o,h=l/24,c=h/60,d=c/60,g=Math.floor(24*o),u=Math.floor(1440*o),p=Math.floor(86400*o),f=Math.floor(o),x=Math.floor(o/30),b=Math.floor(o/365),v={minMillisecond:n.minMillisecond,minSecond:n.minSecond,minMinute:n.minMinute,minHour:n.minHour,minDate:n.minDate,minMonth:n.minMonth,minYear:n.minYear},m={firstVal:v,currentMillisecond:v.minMillisecond,currentSecond:v.minSecond,currentMinute:v.minMinute,currentHour:v.minHour,currentMonthDate:v.minDate,currentDate:v.minDate,currentMonth:v.minMonth,currentYear:v.minYear,daysWidthOnXAxis:l,hoursWidthOnXAxis:h,minutesWidthOnXAxis:c,secondsWidthOnXAxis:d,numberOfSeconds:p,numberOfMinutes:u,numberOfHours:g,numberOfDays:f,numberOfMonths:x,numberOfYears:b};switch(this.tickInterval){case"years":this.generateYearScale(m);break;case"months":case"half_year":this.generateMonthScale(m);break;case"months_days":case"months_fortnight":case"days":case"week_days":this.generateDayScale(m);break;case"hours":this.generateHourScale(m);break;case"minutes_fives":case"minutes":this.generateMinuteScale(m);break;case"seconds_tens":case"seconds_fives":case"seconds":this.generateSecondScale(m)}var y=this.timeScaleArray.map((function(t){var i={position:t.position,unit:t.unit,year:t.year,day:t.day?t.day:1,hour:t.hour?t.hour:0,month:t.month+1};return"month"===t.unit?e(e({},i),{},{day:1,value:t.value+1}):"day"===t.unit||"hour"===t.unit?e(e({},i),{},{value:t.value}):"minute"===t.unit?e(e({},i),{},{value:t.value,minute:t.value}):"second"===t.unit?e(e({},i),{},{value:t.value,minute:t.minute,second:t.second}):t}));return y.filter((function(t){var e=1,i=Math.ceil(s.globals.gridWidth/120),r=t.value;void 0!==s.config.xaxis.tickAmount&&(i=s.config.xaxis.tickAmount),y.length>i&&(e=Math.floor(y.length/i));var o=!1,n=!1;switch(a.tickInterval){case"years":"year"===t.unit&&(o=!0);break;case"half_year":e=7,"year"===t.unit&&(o=!0);break;case"months":e=1,"year"===t.unit&&(o=!0);break;case"months_fortnight":e=15,"year"!==t.unit&&"month"!==t.unit||(o=!0),30===r&&(n=!0);break;case"months_days":e=10,"month"===t.unit&&(o=!0),30===r&&(n=!0);break;case"week_days":e=8,"month"===t.unit&&(o=!0);break;case"days":e=1,"month"===t.unit&&(o=!0);break;case"hours":"day"===t.unit&&(o=!0);break;case"minutes_fives":r%5!=0&&(n=!0);break;case"seconds_tens":r%10!=0&&(n=!0);break;case"seconds_fives":r%5!=0&&(n=!0)}if("hours"===a.tickInterval||"minutes_fives"===a.tickInterval||"seconds_tens"===a.tickInterval||"seconds_fives"===a.tickInterval){if(!n)return!0}else if((r%e==0||o)&&!n)return!0}))}},{key:"recalcDimensionsBasedOnFormat",value:function(t,e){var i=this.w,a=this.formatDates(t),s=this.removeOverlappingTS(a);i.globals.timescaleLabels=s.slice(),new lt(this.ctx).plotCoords()}},{key:"determineInterval",value:function(t){var e=24*t,i=60*e;switch(!0){case t/365>5:this.tickInterval="years";break;case t>800:this.tickInterval="half_year";break;case t>180:this.tickInterval="months";break;case t>90:this.tickInterval="months_fortnight";break;case t>60:this.tickInterval="months_days";break;case t>30:this.tickInterval="week_days";break;case t>2:this.tickInterval="days";break;case e>2.4:this.tickInterval="hours";break;case i>15:this.tickInterval="minutes_fives";break;case i>5:this.tickInterval="minutes";break;case i>1:this.tickInterval="seconds_tens";break;case 60*i>20:this.tickInterval="seconds_fives";break;default:this.tickInterval="seconds"}}},{key:"generateYearScale",value:function(t){var e=t.firstVal,i=t.currentMonth,a=t.currentYear,s=t.daysWidthOnXAxis,r=t.numberOfYears,o=e.minYear,n=0,l=new R(this.ctx),h="year";if(e.minDate>1||e.minMonth>0){var c=l.determineRemainingDaysOfYear(e.minYear,e.minMonth,e.minDate);n=(l.determineDaysOfYear(e.minYear)-c+1)*s,o=e.minYear+1,this.timeScaleArray.push({position:n,value:o,unit:h,year:o,month:x.monthMod(i+1)})}else 1===e.minDate&&0===e.minMonth&&this.timeScaleArray.push({position:n,value:o,unit:h,year:a,month:x.monthMod(i+1)});for(var d=o,g=n,u=0;u<r;u++)d++,g=l.determineDaysOfYear(d-1)*s+g,this.timeScaleArray.push({position:g,value:d,unit:h,year:d,month:1})}},{key:"generateMonthScale",value:function(t){var e=t.firstVal,i=t.currentMonthDate,a=t.currentMonth,s=t.currentYear,r=t.daysWidthOnXAxis,o=t.numberOfMonths,n=a,l=0,h=new R(this.ctx),c="month",d=0;if(e.minDate>1){l=(h.determineDaysOfMonths(a+1,e.minYear)-i+1)*r,n=x.monthMod(a+1);var g=s+d,u=x.monthMod(n),p=n;0===n&&(c="year",p=g,u=1,g+=d+=1),this.timeScaleArray.push({position:l,value:p,unit:c,year:g,month:u})}else this.timeScaleArray.push({position:l,value:n,unit:c,year:s,month:x.monthMod(a)});for(var f=n+1,b=l,v=0,m=1;v<o;v++,m++){0===(f=x.monthMod(f))?(c="year",d+=1):c="month";var y=this._getYear(s,f,d);b=h.determineDaysOfMonths(f,y)*r+b;var w=0===f?y:f;this.timeScaleArray.push({position:b,value:w,unit:c,year:y,month:0===f?1:f}),f++}}},{key:"generateDayScale",value:function(t){var e=t.firstVal,i=t.currentMonth,a=t.currentYear,s=t.hoursWidthOnXAxis,r=t.numberOfDays,o=new R(this.ctx),n="day",l=e.minDate+1,h=l,c=function(t,e,i){return t>o.determineDaysOfMonths(e+1,i)?(h=1,n="month",g=e+=1,e):e},d=(24-e.minHour)*s,g=l,u=c(h,i,a);0===e.minHour&&1===e.minDate?(d=0,g=x.monthMod(e.minMonth),n="month",h=e.minDate,r++):1!==e.minDate&&0===e.minHour&&0===e.minMinute&&(d=0,l=e.minDate,g=l,u=c(h=l,i,a)),this.timeScaleArray.push({position:d,value:g,unit:n,year:this._getYear(a,u,0),month:x.monthMod(u),day:h});for(var p=d,f=0;f<r;f++){n="day",u=c(h+=1,u,this._getYear(a,u,0));var b=this._getYear(a,u,0);p=24*s+p;var v=1===h?x.monthMod(u):h;this.timeScaleArray.push({position:p,value:v,unit:n,year:b,month:x.monthMod(u),day:v})}}},{key:"generateHourScale",value:function(t){var e=t.firstVal,i=t.currentDate,a=t.currentMonth,s=t.currentYear,r=t.minutesWidthOnXAxis,o=t.numberOfHours,n=new R(this.ctx),l="hour",h=function(t,e){return t>n.determineDaysOfMonths(e+1,s)&&(f=1,e+=1),{month:e,date:f}},c=function(t,e){return t>n.determineDaysOfMonths(e+1,s)?e+=1:e},d=60-(e.minMinute+e.minSecond/60),g=d*r,u=e.minHour+1,p=u+1;60===d&&(g=0,p=(u=e.minHour)+1);var f=i,b=c(f,a);this.timeScaleArray.push({position:g,value:u,unit:l,day:f,hour:p,year:s,month:x.monthMod(b)});for(var v=g,m=0;m<o;m++){if(l="hour",p>=24)p=0,l="day",b=h(f+=1,b).month,b=c(f,b);var y=this._getYear(s,b,0);v=0===p&&0===m?d*r:60*r+v;var w=0===p?f:p;this.timeScaleArray.push({position:v,value:w,unit:l,hour:p,day:f,year:y,month:x.monthMod(b)}),p++}}},{key:"generateMinuteScale",value:function(t){for(var e=t.currentMillisecond,i=t.currentSecond,a=t.currentMinute,s=t.currentHour,r=t.currentDate,o=t.currentMonth,n=t.currentYear,l=t.minutesWidthOnXAxis,h=t.secondsWidthOnXAxis,c=t.numberOfMinutes,d=a+1,g=r,u=o,p=n,f=s,b=(60-i-e/1e3)*h,v=0;v<c;v++)d>=60&&(d=0,24===(f+=1)&&(f=0)),this.timeScaleArray.push({position:b,value:d,unit:"minute",hour:f,minute:d,day:g,year:this._getYear(p,u,0),month:x.monthMod(u)}),b+=l,d++}},{key:"generateSecondScale",value:function(t){for(var e=t.currentMillisecond,i=t.currentSecond,a=t.currentMinute,s=t.currentHour,r=t.currentDate,o=t.currentMonth,n=t.currentYear,l=t.secondsWidthOnXAxis,h=t.numberOfSeconds,c=i+1,d=a,g=r,u=o,p=n,f=s,b=(1e3-e)/1e3*l,v=0;v<h;v++)c>=60&&(c=0,++d>=60&&(d=0,24===++f&&(f=0))),this.timeScaleArray.push({position:b,value:c,unit:"second",hour:f,minute:d,second:c,day:g,year:this._getYear(p,u,0),month:x.monthMod(u)}),b+=l,c++}},{key:"createRawDateString",value:function(t,e){var i=t.year;return 0===t.month&&(t.month=1),i+="-"+("0"+t.month.toString()).slice(-2),"day"===t.unit?i+="day"===t.unit?"-"+("0"+e).slice(-2):"-01":i+="-"+("0"+(t.day?t.day:"1")).slice(-2),"hour"===t.unit?i+="hour"===t.unit?"T"+("0"+e).slice(-2):"T00":i+="T"+("0"+(t.hour?t.hour:"0")).slice(-2),"minute"===t.unit?i+=":"+("0"+e).slice(-2):i+=":"+(t.minute?("0"+t.minute).slice(-2):"00"),"second"===t.unit?i+=":"+("0"+e).slice(-2):i+=":00",this.utc&&(i+=".000Z"),i}},{key:"formatDates",value:function(t){var e=this,i=this.w;return t.map((function(t){var a=t.value.toString(),s=new R(e.ctx),r=e.createRawDateString(t,a),o=s.getDate(s.parseDate(r));if(e.utc||(o=s.getDate(s.parseDateWithTimezone(r))),void 0===i.config.xaxis.labels.format){var n="dd MMM",l=i.config.xaxis.labels.datetimeFormatter;"year"===t.unit&&(n=l.year),"month"===t.unit&&(n=l.month),"day"===t.unit&&(n=l.day),"hour"===t.unit&&(n=l.hour),"minute"===t.unit&&(n=l.minute),"second"===t.unit&&(n=l.second),a=s.formatDate(o,n)}else a=s.formatDate(o,i.config.xaxis.labels.format);return{dateString:r,position:t.position,value:a,unit:t.unit,year:t.year,month:t.month}}))}},{key:"removeOverlappingTS",value:function(t){var e,i=this,a=new m(this.ctx),s=!1;t.length>0&&t[0].value&&t.every((function(e){return e.value.length===t[0].value.length}))&&(s=!0,e=a.getTextRects(t[0].value).width);var r=0,o=t.map((function(o,n){if(n>0&&i.w.config.xaxis.labels.hideOverlappingLabels){var l=s?e:a.getTextRects(t[r].value).width,h=t[r].position;return o.position>h+l+10?(r=n,o):null}return o}));return o=o.filter((function(t){return null!==t}))}},{key:"_getYear",value:function(t,e,i){return t+Math.floor(e/12)+i}}]),t}(),Yt=function(){function t(e,i){a(this,t),this.ctx=i,this.w=i.w,this.el=e}return r(t,[{key:"setupElements",value:function(){var t=this.w.globals,e=this.w.config,i=e.chart.type;t.axisCharts=["line","area","bar","rangeBar","candlestick","boxPlot","scatter","bubble","radar","heatmap","treemap"].indexOf(i)>-1,t.xyCharts=["line","area","bar","rangeBar","candlestick","boxPlot","scatter","bubble"].indexOf(i)>-1,t.isBarHorizontal=("bar"===e.chart.type||"rangeBar"===e.chart.type||"boxPlot"===e.chart.type)&&e.plotOptions.bar.horizontal,t.chartClass=".apexcharts"+t.chartID,t.dom.baseEl=this.el,t.dom.elWrap=document.createElement("div"),m.setAttrs(t.dom.elWrap,{id:t.chartClass.substring(1),class:"apexcharts-canvas "+t.chartClass.substring(1)}),this.el.appendChild(t.dom.elWrap),t.dom.Paper=new window.SVG.Doc(t.dom.elWrap),t.dom.Paper.attr({class:"apexcharts-svg","xmlns:data":"ApexChartsNS",transform:"translate(".concat(e.chart.offsetX,", ").concat(e.chart.offsetY,")")}),t.dom.Paper.node.style.background=e.chart.background,this.setSVGDimensions(),t.dom.elGraphical=t.dom.Paper.group().attr({class:"apexcharts-inner apexcharts-graphical"}),t.dom.elAnnotations=t.dom.Paper.group().attr({class:"apexcharts-annotations"}),t.dom.elDefs=t.dom.Paper.defs(),t.dom.elLegendWrap=document.createElement("div"),t.dom.elLegendWrap.classList.add("apexcharts-legend"),t.dom.elWrap.appendChild(t.dom.elLegendWrap),t.dom.Paper.add(t.dom.elGraphical),t.dom.elGraphical.add(t.dom.elDefs)}},{key:"plotChartType",value:function(t,e){var i=this.w,a=i.config,s=i.globals,r={series:[],i:[]},o={series:[],i:[]},n={series:[],i:[]},l={series:[],i:[]},h={series:[],i:[]},c={series:[],i:[]},d={series:[],i:[]};s.series.map((function(e,g){var u=0;void 0!==t[g].type?("column"===t[g].type||"bar"===t[g].type?(s.series.length>1&&a.plotOptions.bar.horizontal&&console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"),h.series.push(e),h.i.push(g),u++,i.globals.columnSeries=h.series):"area"===t[g].type?(o.series.push(e),o.i.push(g),u++):"line"===t[g].type?(r.series.push(e),r.i.push(g),u++):"scatter"===t[g].type?(n.series.push(e),n.i.push(g)):"bubble"===t[g].type?(l.series.push(e),l.i.push(g),u++):"candlestick"===t[g].type?(c.series.push(e),c.i.push(g),u++):"boxPlot"===t[g].type?(d.series.push(e),d.i.push(g),u++):console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble"),u>1&&(s.comboCharts=!0)):(r.series.push(e),r.i.push(g))}));var g=new Tt(this.ctx,e),u=new wt(this.ctx,e);this.ctx.pie=new Ct(this.ctx);var p=new Pt(this.ctx);this.ctx.rangeBar=new H(this.ctx,e);var f=new Lt(this.ctx),x=[];if(s.comboCharts){if(o.series.length>0&&x.push(g.draw(o.series,"area",o.i)),h.series.length>0)if(i.config.chart.stacked){var b=new yt(this.ctx,e);x.push(b.draw(h.series,h.i))}else this.ctx.bar=new F(this.ctx,e),x.push(this.ctx.bar.draw(h.series,h.i));if(r.series.length>0&&x.push(g.draw(r.series,"line",r.i)),c.series.length>0&&x.push(u.draw(c.series,c.i)),d.series.length>0&&x.push(u.draw(d.series,d.i)),n.series.length>0){var v=new Tt(this.ctx,e,!0);x.push(v.draw(n.series,"scatter",n.i))}if(l.series.length>0){var m=new Tt(this.ctx,e,!0);x.push(m.draw(l.series,"bubble",l.i))}}else switch(a.chart.type){case"line":x=g.draw(s.series,"line");break;case"area":x=g.draw(s.series,"area");break;case"bar":if(a.chart.stacked)x=new yt(this.ctx,e).draw(s.series);else this.ctx.bar=new F(this.ctx,e),x=this.ctx.bar.draw(s.series);break;case"candlestick":x=new wt(this.ctx,e).draw(s.series);break;case"boxPlot":x=new wt(this.ctx,e).draw(s.series);break;case"rangeBar":x=this.ctx.rangeBar.draw(s.series);break;case"heatmap":x=new At(this.ctx,e).draw(s.series);break;case"treemap":x=new Xt(this.ctx,e).draw(s.series);break;case"pie":case"donut":case"polarArea":x=this.ctx.pie.draw(s.series);break;case"radialBar":x=p.draw(s.series);break;case"radar":x=f.draw(s.series);break;default:x=g.draw(s.series)}return x}},{key:"setSVGDimensions",value:function(){var t=this.w.globals,e=this.w.config;t.svgWidth=e.chart.width,t.svgHeight=e.chart.height;var i=x.getDimensions(this.el),a=e.chart.width.toString().split(/[0-9]+/g).pop();"%"===a?x.isNumber(i[0])&&(0===i[0].width&&(i=x.getDimensions(this.el.parentNode)),t.svgWidth=i[0]*parseInt(e.chart.width,10)/100):"px"!==a&&""!==a||(t.svgWidth=parseInt(e.chart.width,10));var s=e.chart.height.toString().split(/[0-9]+/g).pop();if("auto"!==t.svgHeight&&""!==t.svgHeight)if("%"===s){var r=x.getDimensions(this.el.parentNode);t.svgHeight=r[1]*parseInt(e.chart.height,10)/100}else t.svgHeight=parseInt(e.chart.height,10);else t.axisCharts?t.svgHeight=t.svgWidth/1.61:t.svgHeight=t.svgWidth/1.2;if(t.svgWidth<0&&(t.svgWidth=0),t.svgHeight<0&&(t.svgHeight=0),m.setAttrs(t.dom.Paper.node,{width:t.svgWidth,height:t.svgHeight}),"%"!==s){var o=e.chart.sparkline.enabled?0:t.axisCharts?e.chart.parentHeightOffset:0;t.dom.Paper.node.parentNode.parentNode.style.minHeight=t.svgHeight+o+"px"}t.dom.elWrap.style.width=t.svgWidth+"px",t.dom.elWrap.style.height=t.svgHeight+"px"}},{key:"shiftGraphPosition",value:function(){var t=this.w.globals,e=t.translateY,i={transform:"translate("+t.translateX+", "+e+")"};m.setAttrs(t.dom.elGraphical.node,i)}},{key:"resizeNonAxisCharts",value:function(){var t=this.w,e=t.globals,i=0,a=t.config.chart.sparkline.enabled?1:15;a+=t.config.grid.padding.bottom,"top"!==t.config.legend.position&&"bottom"!==t.config.legend.position||!t.config.legend.show||t.config.legend.floating||(i=new ct(this.ctx).legendHelpers.getLegendBBox().clwh+10);var s=t.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"),r=2.05*t.globals.radialSize;if(s&&!t.config.chart.sparkline.enabled&&0!==t.config.plotOptions.radialBar.startAngle){var o=x.getBoundingClientRect(s);r=o.bottom;var n=o.bottom-o.top;r=Math.max(2.05*t.globals.radialSize,n)}var l=r+e.translateY+i+a;e.dom.elLegendForeign&&e.dom.elLegendForeign.setAttribute("height",l),t.config.chart.height&&String(t.config.chart.height).indexOf("%")>0||(e.dom.elWrap.style.height=l+"px",m.setAttrs(e.dom.Paper.node,{height:l}),e.dom.Paper.node.parentNode.parentNode.style.minHeight=l+"px")}},{key:"coreCalculations",value:function(){new Z(this.ctx).init()}},{key:"resetGlobals",value:function(){var t=this,e=function(){return t.w.config.series.map((function(t){return[]}))},i=new O,a=this.w.globals;i.initGlobalVars(a),a.seriesXvalues=e(),a.seriesYvalues=e()}},{key:"isMultipleY",value:function(){if(this.w.config.yaxis.constructor===Array&&this.w.config.yaxis.length>1)return this.w.globals.isMultipleYAxis=!0,!0}},{key:"xySettings",value:function(){var t=null,e=this.w;if(e.globals.axisCharts){if("back"===e.config.xaxis.crosshairs.position)new tt(this.ctx).drawXCrosshairs();if("back"===e.config.yaxis[0].crosshairs.position)new tt(this.ctx).drawYCrosshairs();if("datetime"===e.config.xaxis.type&&void 0===e.config.xaxis.labels.formatter){this.ctx.timeScale=new Et(this.ctx);var i=[];isFinite(e.globals.minX)&&isFinite(e.globals.maxX)&&!e.globals.isBarHorizontal?i=this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minX,e.globals.maxX):e.globals.isBarHorizontal&&(i=this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minY,e.globals.maxY)),this.ctx.timeScale.recalcDimensionsBasedOnFormat(i)}t=new y(this.ctx).getCalculatedRatios()}return t}},{key:"updateSourceChart",value:function(t){this.ctx.w.globals.selection=void 0,this.ctx.updateHelpers._updateOptions({chart:{selection:{xaxis:{min:t.w.globals.minX,max:t.w.globals.maxX}}}},!1,!1)}},{key:"setupBrushHandler",value:function(){var t=this,i=this.w;if(i.config.chart.brush.enabled&&"function"!=typeof i.config.chart.events.selection){var a=i.config.chart.brush.targets||[i.config.chart.brush.target];a.forEach((function(e){var i=ApexCharts.getChartByID(e);i.w.globals.brushSource=t.ctx,"function"!=typeof i.w.config.chart.events.zoomed&&(i.w.config.chart.events.zoomed=function(){t.updateSourceChart(i)}),"function"!=typeof i.w.config.chart.events.scrolled&&(i.w.config.chart.events.scrolled=function(){t.updateSourceChart(i)})})),i.config.chart.events.selection=function(t,s){a.forEach((function(t){var a=ApexCharts.getChartByID(t),r=x.clone(i.config.yaxis);if(i.config.chart.brush.autoScaleYaxis&&1===a.w.globals.series.length){var o=new q(a);r=o.autoScaleY(a,r,s)}var n=a.w.config.yaxis.reduce((function(t,i,s){return[].concat(u(t),[e(e({},a.w.config.yaxis[s]),{},{min:r[0].min,max:r[0].max})])}),[]);a.ctx.updateHelpers._updateOptions({xaxis:{min:s.xaxis.min,max:s.xaxis.max},yaxis:n},!1,!1,!1,!1)}))}}}}]),t}(),Ft=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"_updateOptions",value:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return new Promise((function(n){var l=[e.ctx];r&&(l=e.ctx.getSyncedCharts()),e.ctx.w.globals.isExecCalled&&(l=[e.ctx],e.ctx.w.globals.isExecCalled=!1),l.forEach((function(r,h){var c=r.w;if(c.globals.shouldAnimate=s,a||(c.globals.resized=!0,c.globals.dataChanged=!0,s&&r.series.getPreviousPaths()),t&&"object"===i(t)&&(r.config=new N(t),t=y.extendArrayProps(r.config,t,c),r.w.globals.chartID!==e.ctx.w.globals.chartID&&delete t.series,c.config=x.extend(c.config,t),o&&(c.globals.lastXAxis=t.xaxis?x.clone(t.xaxis):[],c.globals.lastYAxis=t.yaxis?x.clone(t.yaxis):[],c.globals.initialConfig=x.extend({},c.config),c.globals.initialSeries=x.clone(c.config.series),t.series))){for(var d=0;d<c.globals.collapsedSeriesIndices.length;d++){var g=c.config.series[c.globals.collapsedSeriesIndices[d]];c.globals.collapsedSeries[d].data=c.globals.axisCharts?g.data.slice():g}for(var u=0;u<c.globals.ancillaryCollapsedSeriesIndices.length;u++){var p=c.config.series[c.globals.ancillaryCollapsedSeriesIndices[u]];c.globals.ancillaryCollapsedSeries[u].data=c.globals.axisCharts?p.data.slice():p}r.series.emptyCollapsedSeries(c.config.series)}return r.update(t).then((function(){h===l.length-1&&n(r)}))}))}))}},{key:"_updateSeries",value:function(t,e){var i=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(s){var r,o=i.w;return o.globals.shouldAnimate=e,o.globals.dataChanged=!0,e&&i.ctx.series.getPreviousPaths(),o.globals.axisCharts?(0===(r=t.map((function(t,e){return i._extendSeries(t,e)}))).length&&(r=[{data:[]}]),o.config.series=r):o.config.series=t.slice(),a&&(o.globals.initialConfig.series=x.clone(o.config.series),o.globals.initialSeries=x.clone(o.config.series)),i.ctx.update().then((function(){s(i.ctx)}))}))}},{key:"_extendSeries",value:function(t,i){var a=this.w,s=a.config.series[i];return e(e({},a.config.series[i]),{},{name:t.name?t.name:s&&s.name,color:t.color?t.color:s&&s.color,type:t.type?t.type:s&&s.type,data:t.data?t.data:s&&s.data})}},{key:"toggleDataPointSelection",value:function(t,e){var i=this.w,a=null,s=".apexcharts-series[data\\:realIndex='".concat(t,"']");return i.globals.axisCharts?a=i.globals.dom.Paper.select("".concat(s," path[j='").concat(e,"'], ").concat(s," circle[j='").concat(e,"'], ").concat(s," rect[j='").concat(e,"']")).members[0]:void 0===e&&(a=i.globals.dom.Paper.select("".concat(s," path[j='").concat(t,"']")).members[0],"pie"!==i.config.chart.type&&"polarArea"!==i.config.chart.type&&"donut"!==i.config.chart.type||this.ctx.pie.pieClicked(t)),a?(new m(this.ctx).pathMouseDown(a,null),a.node?a.node:null):(console.warn("toggleDataPointSelection: Element not found"),null)}},{key:"forceXAxisUpdate",value:function(t){var e=this.w;if(["min","max"].forEach((function(i){void 0!==t.xaxis[i]&&(e.config.xaxis[i]=t.xaxis[i],e.globals.lastXAxis[i]=t.xaxis[i])})),t.xaxis.categories&&t.xaxis.categories.length&&(e.config.xaxis.categories=t.xaxis.categories),e.config.xaxis.convertedCatToNumeric){var i=new D(t);t=i.convertCatToNumericXaxis(t,this.ctx)}return t}},{key:"forceYAxisUpdate",value:function(t){return t.chart&&t.chart.stacked&&"100%"===t.chart.stackType&&(Array.isArray(t.yaxis)?t.yaxis.forEach((function(e,i){t.yaxis[i].min=0,t.yaxis[i].max=100})):(t.yaxis.min=0,t.yaxis.max=100)),t}},{key:"revertDefaultAxisMinMax",value:function(t){var e=this,i=this.w,a=i.globals.lastXAxis,s=i.globals.lastYAxis;t&&t.xaxis&&(a=t.xaxis),t&&t.yaxis&&(s=t.yaxis),i.config.xaxis.min=a.min,i.config.xaxis.max=a.max;var r=function(t){void 0!==s[t]&&(i.config.yaxis[t].min=s[t].min,i.config.yaxis[t].max=s[t].max)};i.config.yaxis.map((function(t,a){i.globals.zoomed||void 0!==s[a]?r(a):void 0!==e.ctx.opts.yaxis[a]&&(t.min=e.ctx.opts.yaxis[a].min,t.max=e.ctx.opts.yaxis[a].max)}))}}]),t}();It="undefined"!=typeof window?window:void 0,zt=function(t,e){var a=(void 0!==this?this:t).SVG=function(t){if(a.supported)return t=new a.Doc(t),a.parser.draw||a.prepare(),t};if(a.ns="http://www.w3.org/2000/svg",a.xmlns="http://www.w3.org/2000/xmlns/",a.xlink="http://www.w3.org/1999/xlink",a.svgjs="http://svgjs.dev",a.supported=!0,!a.supported)return!1;a.did=1e3,a.eid=function(t){return"Svgjs"+d(t)+a.did++},a.create=function(t){var i=e.createElementNS(this.ns,t);return i.setAttribute("id",this.eid(t)),i},a.extend=function(){var t,e;e=(t=[].slice.call(arguments)).pop();for(var i=t.length-1;i>=0;i--)if(t[i])for(var s in e)t[i].prototype[s]=e[s];a.Set&&a.Set.inherit&&a.Set.inherit()},a.invent=function(t){var e="function"==typeof t.create?t.create:function(){this.constructor.call(this,a.create(t.create))};return t.inherit&&(e.prototype=new t.inherit),t.extend&&a.extend(e,t.extend),t.construct&&a.extend(t.parent||a.Container,t.construct),e},a.adopt=function(e){return e?e.instance?e.instance:((i="svg"==e.nodeName?e.parentNode instanceof t.SVGElement?new a.Nested:new a.Doc:"linearGradient"==e.nodeName?new a.Gradient("linear"):"radialGradient"==e.nodeName?new a.Gradient("radial"):a[d(e.nodeName)]?new(a[d(e.nodeName)]):new a.Element(e)).type=e.nodeName,i.node=e,e.instance=i,i instanceof a.Doc&&i.namespace().defs(),i.setData(JSON.parse(e.getAttribute("svgjs:data"))||{}),i):null;var i},a.prepare=function(){var t=e.getElementsByTagName("body")[0],i=(t?new a.Doc(t):a.adopt(e.documentElement).nested()).size(2,0);a.parser={body:t||e.documentElement,draw:i.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,poly:i.polyline().node,path:i.path().node,native:a.create("svg")}},a.parser={native:a.create("svg")},e.addEventListener("DOMContentLoaded",(function(){a.parser.draw||a.prepare()}),!1),a.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,transforms:/\)\s*,?\s*/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter:/[\s,]+/,hyphen:/([^e])\-/gi,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,dots:/\./g},a.utils={map:function(t,e){for(var i=t.length,a=[],s=0;s<i;s++)a.push(e(t[s]));return a},filter:function(t,e){for(var i=t.length,a=[],s=0;s<i;s++)e(t[s])&&a.push(t[s]);return a},filterSVGElements:function(e){return this.filter(e,(function(e){return e instanceof t.SVGElement}))}},a.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},a.Color=function(t){var e,s;this.r=0,this.g=0,this.b=0,t&&("string"==typeof t?a.regex.isRgb.test(t)?(e=a.regex.rgb.exec(t.replace(a.regex.whitespace,"")),this.r=parseInt(e[1]),this.g=parseInt(e[2]),this.b=parseInt(e[3])):a.regex.isHex.test(t)&&(e=a.regex.hex.exec(4==(s=t).length?["#",s.substring(1,2),s.substring(1,2),s.substring(2,3),s.substring(2,3),s.substring(3,4),s.substring(3,4)].join(""):s),this.r=parseInt(e[1],16),this.g=parseInt(e[2],16),this.b=parseInt(e[3],16)):"object"===i(t)&&(this.r=t.r,this.g=t.g,this.b=t.b))},a.extend(a.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+g(this.r)+g(this.g)+g(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(t){return this.destination=new a.Color(t),this},at:function(t){return this.destination?(t=t<0?0:t>1?1:t,new a.Color({r:~~(this.r+(this.destination.r-this.r)*t),g:~~(this.g+(this.destination.g-this.g)*t),b:~~(this.b+(this.destination.b-this.b)*t)})):this}}),a.Color.test=function(t){return t+="",a.regex.isHex.test(t)||a.regex.isRgb.test(t)},a.Color.isRgb=function(t){return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b},a.Color.isColor=function(t){return a.Color.isRgb(t)||a.Color.test(t)},a.Array=function(t,e){0==(t=(t||[]).valueOf()).length&&e&&(t=e.valueOf()),this.value=this.parse(t)},a.extend(a.Array,{toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(t){return t=t.valueOf(),Array.isArray(t)?t:this.split(t)}}),a.PointArray=function(t,e){a.Array.call(this,t,e||[[0,0]])},a.PointArray.prototype=new a.Array,a.PointArray.prototype.constructor=a.PointArray;for(var s={M:function(t,e,i){return e.x=i.x=t[0],e.y=i.y=t[1],["M",e.x,e.y]},L:function(t,e){return e.x=t[0],e.y=t[1],["L",t[0],t[1]]},H:function(t,e){return e.x=t[0],["H",t[0]]},V:function(t,e){return e.y=t[0],["V",t[0]]},C:function(t,e){return e.x=t[4],e.y=t[5],["C",t[0],t[1],t[2],t[3],t[4],t[5]]},Q:function(t,e){return e.x=t[2],e.y=t[3],["Q",t[0],t[1],t[2],t[3]]},Z:function(t,e,i){return e.x=i.x,e.y=i.y,["Z"]}},r="mlhvqtcsaz".split(""),o=0,n=r.length;o<n;++o)s[r[o]]=function(t){return function(e,i,a){if("H"==t)e[0]=e[0]+i.x;else if("V"==t)e[0]=e[0]+i.y;else if("A"==t)e[5]=e[5]+i.x,e[6]=e[6]+i.y;else for(var r=0,o=e.length;r<o;++r)e[r]=e[r]+(r%2?i.y:i.x);if(s&&"function"==typeof s[t])return s[t](e,i,a)}}(r[o].toUpperCase());a.PathArray=function(t,e){a.Array.call(this,t,e||[["M",0,0]])},a.PathArray.prototype=new a.Array,a.PathArray.prototype.constructor=a.PathArray,a.extend(a.PathArray,{toString:function(){return function(t){for(var e=0,i=t.length,a="";e<i;e++)a+=t[e][0],null!=t[e][1]&&(a+=t[e][1],null!=t[e][2]&&(a+=" ",a+=t[e][2],null!=t[e][3]&&(a+=" ",a+=t[e][3],a+=" ",a+=t[e][4],null!=t[e][5]&&(a+=" ",a+=t[e][5],a+=" ",a+=t[e][6],null!=t[e][7]&&(a+=" ",a+=t[e][7])))));return a+" "}(this.value)},move:function(t,e){var i=this.bbox();return i.x,i.y,this},at:function(t){if(!this.destination)return this;for(var e=this.value,i=this.destination.value,s=[],r=new a.PathArray,o=0,n=e.length;o<n;o++){s[o]=[e[o][0]];for(var l=1,h=e[o].length;l<h;l++)s[o][l]=e[o][l]+(i[o][l]-e[o][l])*t;"A"===s[o][0]&&(s[o][4]=+(0!=s[o][4]),s[o][5]=+(0!=s[o][5]))}return r.value=s,r},parse:function(t){if(t instanceof a.PathArray)return t.valueOf();var e,i={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0};t="string"==typeof t?t.replace(a.regex.numbersWithDots,h).replace(a.regex.pathLetters," $& ").replace(a.regex.hyphen,"$1 -").trim().split(a.regex.delimiter):t.reduce((function(t,e){return[].concat.call(t,e)}),[]);var r=[],o=new a.Point,n=new a.Point,l=0,c=t.length;do{a.regex.isPathLetter.test(t[l])?(e=t[l],++l):"M"==e?e="L":"m"==e&&(e="l"),r.push(s[e].call(null,t.slice(l,l+=i[e.toUpperCase()]).map(parseFloat),o,n))}while(c>l);return r},bbox:function(){return a.parser.draw||a.prepare(),a.parser.path.setAttribute("d",this.toString()),a.parser.path.getBBox()}}),a.Number=a.invent({create:function(t,e){this.value=0,this.unit=e||"","number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:t<0?-34e37:34e37:"string"==typeof t?(e=t.match(a.regex.numberAndUnit))&&(this.value=parseFloat(e[1]),"%"==e[5]?this.value/=100:"s"==e[5]&&(this.value*=1e3),this.unit=e[5]):t instanceof a.Number&&(this.value=t.valueOf(),this.unit=t.unit)},extend:{toString:function(){return("%"==this.unit?~~(1e8*this.value)/1e6:"s"==this.unit?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(t){return t=new a.Number(t),new a.Number(this+t,this.unit||t.unit)},minus:function(t){return t=new a.Number(t),new a.Number(this-t,this.unit||t.unit)},times:function(t){return t=new a.Number(t),new a.Number(this*t,this.unit||t.unit)},divide:function(t){return t=new a.Number(t),new a.Number(this/t,this.unit||t.unit)},to:function(t){var e=new a.Number(this);return"string"==typeof t&&(e.unit=t),e},morph:function(t){return this.destination=new a.Number(t),t.relative&&(this.destination.value+=this.value),this},at:function(t){return this.destination?new a.Number(this.destination).minus(this).times(t).plus(this):this}}}),a.Element=a.invent({create:function(t){this._stroke=a.defaults.attrs.stroke,this._event=null,this.dom={},(this.node=t)&&(this.type=t.nodeName,this.node.instance=this,this._stroke=t.getAttribute("stroke")||this._stroke)},extend:{x:function(t){return this.attr("x",t)},y:function(t){return this.attr("y",t)},cx:function(t){return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)},cy:function(t){return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},width:function(t){return this.attr("width",t)},height:function(t){return this.attr("height",t)},size:function(t,e){var i=u(this,t,e);return this.width(new a.Number(i.width)).height(new a.Number(i.height))},clone:function(t){this.writeDataToDom();var e=x(this.node.cloneNode(!0));return t?t.add(e):this.after(e),e},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(t){return this.after(t).remove(),t},addTo:function(t){return t.put(this)},putIn:function(t){return t.add(this)},id:function(t){return this.attr("id",t)},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return"none"!=this.style("display")},toString:function(){return this.attr("id")},classes:function(){var t=this.attr("class");return null==t?[]:t.trim().split(a.regex.delimiter)},hasClass:function(t){return-1!=this.classes().indexOf(t)},addClass:function(t){if(!this.hasClass(t)){var e=this.classes();e.push(t),this.attr("class",e.join(" "))}return this},removeClass:function(t){return this.hasClass(t)&&this.attr("class",this.classes().filter((function(e){return e!=t})).join(" ")),this},toggleClass:function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)},reference:function(t){return a.get(this.attr(t))},parent:function(e){var i=this;if(!i.node.parentNode)return null;if(i=a.adopt(i.node.parentNode),!e)return i;for(;i&&i.node instanceof t.SVGElement;){if("string"==typeof e?i.matches(e):i instanceof e)return i;if(!i.node.parentNode||"#document"==i.node.parentNode.nodeName)return null;i=a.adopt(i.node.parentNode)}},doc:function(){return this instanceof a.Doc?this:this.parent(a.Doc)},parents:function(t){var e=[],i=this;do{if(!(i=i.parent(t))||!i.node)break;e.push(i)}while(i.parent);return e},matches:function(t){return function(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}(this.node,t)},native:function(){return this.node},svg:function(t){var i=e.createElement("svg");if(!(t&&this instanceof a.Parent))return i.appendChild(t=e.createElement("svg")),this.writeDataToDom(),t.appendChild(this.node.cloneNode(!0)),i.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");i.innerHTML="<svg>"+t.replace(/\n/,"").replace(/<([\w:-]+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var s=0,r=i.firstChild.childNodes.length;s<r;s++)this.node.appendChild(i.firstChild.firstChild);return this},writeDataToDom:function(){return(this.each||this.lines)&&(this.each?this:this.lines()).each((function(){this.writeDataToDom()})),this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(t){return this.dom=t,this},is:function(t){return function(t,e){return t instanceof e}(this,t)}}}),a.easing={"-":function(t){return t},"<>":function(t){return-Math.cos(t*Math.PI)/2+.5},">":function(t){return Math.sin(t*Math.PI/2)},"<":function(t){return 1-Math.cos(t*Math.PI/2)}},a.morph=function(t){return function(e,i){return new a.MorphObj(e,i).at(t)}},a.Situation=a.invent({create:function(t){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new a.Number(t.duration).valueOf(),this.delay=new a.Number(t.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=t.ease,this.loop=0,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),a.FX=a.invent({create:function(t){this._target=t,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0,this.absPos=0,this._speed=1},extend:{animate:function(t,e,s){"object"===i(t)&&(e=t.ease,s=t.delay,t=t.duration);var r=new a.Situation({duration:t||1e3,delay:s||0,ease:a.easing[e||"-"]||e});return this.queue(r),this},target:function(t){return t&&t instanceof a.Element?(this._target=t,this):this._target},timeToAbsPos:function(t){return(t-this.situation.start)/(this.situation.duration/this._speed)},absPosToTime:function(t){return this.situation.duration/this._speed*t+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=t.requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){t.cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.active=!0,this.startCurrent()),this},startCurrent:function(){return this.situation.start=+new Date+this.situation.delay/this._speed,this.situation.finish=this.situation.start+this.situation.duration/this._speed,this.initAnimations().step()},queue:function(t){return("function"==typeof t||t instanceof a.Situation)&&this.situations.push(t),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){return this.stop(),this.situation=this.situations.shift(),this.situation&&(this.situation instanceof a.Situation?this.start():this.situation.call(this)),this},initAnimations:function(){var t,e=this.situation;if(e.init)return this;for(var i in e.animations){t=this.target()[i](),Array.isArray(t)||(t=[t]),Array.isArray(e.animations[i])||(e.animations[i]=[e.animations[i]]);for(var s=t.length;s--;)e.animations[i][s]instanceof a.Number&&(t[s]=new a.Number(t[s])),e.animations[i][s]=t[s].morph(e.animations[i][s])}for(var i in e.attrs)e.attrs[i]=new a.MorphObj(this.target().attr(i),e.attrs[i]);for(var i in e.styles)e.styles[i]=new a.MorphObj(this.target().style(i),e.styles[i]);return e.initialTransformation=this.target().matrixify(),e.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(t,e){var i=this.active;return this.active=!1,e&&this.clearQueue(),t&&this.situation&&(!i&&this.startCurrent(),this.atEnd()),this.stopAnimFrame(),this.clearCurrent()},after:function(t){var e=this.last();return this.target().on("finished.fx",(function i(a){a.detail.situation==e&&(t.call(this,e),this.off("finished.fx",i))})),this._callStart()},during:function(t){var e=this.last(),i=function(i){i.detail.situation==e&&t.call(this,i.detail.pos,a.morph(i.detail.pos),i.detail.eased,e)};return this.target().off("during.fx",i).on("during.fx",i),this.after((function(){this.off("during.fx",i)})),this._callStart()},afterAll:function(t){var e=function e(i){t.call(this),this.off("allfinished.fx",e)};return this.target().off("allfinished.fx",e).on("allfinished.fx",e),this._callStart()},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(t,e,i){return this.last()[i||"animations"][t]=e,this._callStart()},step:function(t){var e,i,a;t||(this.absPos=this.timeToAbsPos(+new Date)),!1!==this.situation.loops?(e=Math.max(this.absPos,0),i=Math.floor(e),!0===this.situation.loops||i<this.situation.loops?(this.pos=e-i,a=this.situation.loop,this.situation.loop=i):(this.absPos=this.situation.loops,this.pos=1,a=this.situation.loop-1,this.situation.loop=this.situation.loops),this.situation.reversing&&(this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-a)%2))):(this.absPos=Math.min(this.absPos,1),this.pos=this.absPos),this.pos<0&&(this.pos=0),this.situation.reversed&&(this.pos=1-this.pos);var s=this.situation.ease(this.pos);for(var r in this.situation.once)r>this.lastPos&&r<=s&&(this.situation.once[r].call(this.target(),this.pos,s),delete this.situation.once[r]);return this.active&&this.target().fire("during",{pos:this.pos,eased:s,fx:this,situation:this.situation}),this.situation?(this.eachAt(),1==this.pos&&!this.situation.reversed||this.situation.reversed&&0==this.pos?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.situations.length||(this.target().off(".fx"),this.active=!1)),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=s,this):this},eachAt:function(){var t,e=this,i=this.target(),s=this.situation;for(var r in s.animations)t=[].concat(s.animations[r]).map((function(t){return"string"!=typeof t&&t.at?t.at(s.ease(e.pos),e.pos):t})),i[r].apply(i,t);for(var r in s.attrs)t=[r].concat(s.attrs[r]).map((function(t){return"string"!=typeof t&&t.at?t.at(s.ease(e.pos),e.pos):t})),i.attr.apply(i,t);for(var r in s.styles)t=[r].concat(s.styles[r]).map((function(t){return"string"!=typeof t&&t.at?t.at(s.ease(e.pos),e.pos):t})),i.style.apply(i,t);if(s.transforms.length){t=s.initialTransformation,r=0;for(var o=s.transforms.length;r<o;r++){var n=s.transforms[r];n instanceof a.Matrix?t=n.relative?t.multiply((new a.Matrix).morph(n).at(s.ease(this.pos))):t.morph(n).at(s.ease(this.pos)):(n.relative||n.undo(t.extract()),t=t.multiply(n.at(s.ease(this.pos))))}i.matrix(t)}return this},once:function(t,e,i){var a=this.last();return i||(t=a.ease(t)),a.once[t]=e,this},_callStart:function(){return setTimeout(function(){this.start()}.bind(this),0),this}},parent:a.Element,construct:{animate:function(t,e,i){return(this.fx||(this.fx=new a.FX(this))).animate(t,e,i)},delay:function(t){return(this.fx||(this.fx=new a.FX(this))).delay(t)},stop:function(t,e){return this.fx&&this.fx.stop(t,e),this},finish:function(){return this.fx&&this.fx.finish(),this}}}),a.MorphObj=a.invent({create:function(t,e){return a.Color.isColor(e)?new a.Color(t).morph(e):a.regex.delimiter.test(t)?a.regex.pathLetters.test(t)?new a.PathArray(t).morph(e):new a.Array(t).morph(e):a.regex.numberAndUnit.test(e)?new a.Number(t).morph(e):(this.value=t,void(this.destination=e))},extend:{at:function(t,e){return e<1?this.value:this.destination},valueOf:function(){return this.value}}}),a.extend(a.FX,{attr:function(t,e,a){if("object"===i(t))for(var s in t)this.attr(s,t[s]);else this.add(t,e,"attrs");return this},plot:function(t,e,i,a){return 4==arguments.length?this.plot([t,e,i,a]):this.add("plot",new(this.target().morphArray)(t))}}),a.Box=a.invent({create:function(t,e,s,r){if(!("object"!==i(t)||t instanceof a.Element))return a.Box.call(this,null!=t.left?t.left:t.x,null!=t.top?t.top:t.y,t.width,t.height);4==arguments.length&&(this.x=t,this.y=e,this.width=s,this.height=r),b(this)}}),a.BBox=a.invent({create:function(t){if(a.Box.apply(this,[].slice.call(arguments)),t instanceof a.Element){var i;try{if(!e.documentElement.contains){for(var s=t.node;s.parentNode;)s=s.parentNode;if(s!=e)throw new Error("Element not in the dom")}i=t.node.getBBox()}catch(e){if(t instanceof a.Shape){a.parser.draw||a.prepare();var r=t.clone(a.parser.draw.instance).show();r&&r.node&&"function"==typeof r.node.getBBox&&(i=r.node.getBBox()),r&&"function"==typeof r.remove&&r.remove()}else i={x:t.node.clientLeft,y:t.node.clientTop,width:t.node.clientWidth,height:t.node.clientHeight}}a.Box.call(this,i)}},inherit:a.Box,parent:a.Element,construct:{bbox:function(){return new a.BBox(this)}}}),a.BBox.prototype.constructor=a.BBox,a.Matrix=a.invent({create:function(t){var e=f([1,0,0,1,0,0]);t=null===t?e:t instanceof a.Element?t.matrixify():"string"==typeof t?f(t.split(a.regex.delimiter).map(parseFloat)):6==arguments.length?f([].slice.call(arguments)):Array.isArray(t)?f(t):t&&"object"===i(t)?t:e;for(var s=m.length-1;s>=0;--s)this[m[s]]=null!=t[m[s]]?t[m[s]]:e[m[s]]},extend:{extract:function(){var t=p(this,0,1);p(this,1,0);var e=180/Math.PI*Math.atan2(t.y,t.x)-90;return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(e*Math.PI/180)+this.f*Math.sin(e*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(e*Math.PI/180)+this.e*Math.sin(-e*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),rotation:e,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new a.Matrix(this)}},clone:function(){return new a.Matrix(this)},morph:function(t){return this.destination=new a.Matrix(t),this},multiply:function(t){return new a.Matrix(this.native().multiply(function(t){return t instanceof a.Matrix||(t=new a.Matrix(t)),t}(t).native()))},inverse:function(){return new a.Matrix(this.native().inverse())},translate:function(t,e){return new a.Matrix(this.native().translate(t||0,e||0))},native:function(){for(var t=a.parser.native.createSVGMatrix(),e=m.length-1;e>=0;e--)t[m[e]]=this[m[e]];return t},toString:function(){return"matrix("+v(this.a)+","+v(this.b)+","+v(this.c)+","+v(this.d)+","+v(this.e)+","+v(this.f)+")"}},parent:a.Element,construct:{ctm:function(){return new a.Matrix(this.node.getCTM())},screenCTM:function(){if(this instanceof a.Nested){var t=this.rect(1,1),e=t.node.getScreenCTM();return t.remove(),new a.Matrix(e)}return new a.Matrix(this.node.getScreenCTM())}}}),a.Point=a.invent({create:function(t,e){var a;a=Array.isArray(t)?{x:t[0],y:t[1]}:"object"===i(t)?{x:t.x,y:t.y}:null!=t?{x:t,y:null!=e?e:t}:{x:0,y:0},this.x=a.x,this.y=a.y},extend:{clone:function(){return new a.Point(this)},morph:function(t,e){return this.destination=new a.Point(t,e),this}}}),a.extend(a.Element,{point:function(t,e){return new a.Point(t,e).transform(this.screenCTM().inverse())}}),a.extend(a.Element,{attr:function(t,e,s){if(null==t){for(t={},s=(e=this.node.attributes).length-1;s>=0;s--)t[e[s].nodeName]=a.regex.isNumber.test(e[s].nodeValue)?parseFloat(e[s].nodeValue):e[s].nodeValue;return t}if("object"===i(t))for(var r in t)this.attr(r,t[r]);else if(null===e)this.node.removeAttribute(t);else{if(null==e)return null==(e=this.node.getAttribute(t))?a.defaults.attrs[t]:a.regex.isNumber.test(e)?parseFloat(e):e;"stroke-width"==t?this.attr("stroke",parseFloat(e)>0?this._stroke:null):"stroke"==t&&(this._stroke=e),"fill"!=t&&"stroke"!=t||(a.regex.isImage.test(e)&&(e=this.doc().defs().image(e,0,0)),e instanceof a.Image&&(e=this.doc().defs().pattern(0,0,(function(){this.add(e)})))),"number"==typeof e?e=new a.Number(e):a.Color.isColor(e)?e=new a.Color(e):Array.isArray(e)&&(e=new a.Array(e)),"leading"==t?this.leading&&this.leading(e):"string"==typeof s?this.node.setAttributeNS(s,t,e.toString()):this.node.setAttribute(t,e.toString()),!this.rebuild||"font-size"!=t&&"x"!=t||this.rebuild(t,e)}return this}}),a.extend(a.Element,{transform:function(t,e){var s;return"object"!==i(t)?(s=new a.Matrix(this).extract(),"string"==typeof t?s[t]:s):(s=new a.Matrix(this),e=!!e||!!t.relative,null!=t.a&&(s=e?s.multiply(new a.Matrix(t)):new a.Matrix(t)),this.attr("transform",s))}}),a.extend(a.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){return(this.attr("transform")||"").split(a.regex.transforms).slice(0,-1).map((function(t){var e=t.trim().split("(");return[e[0],e[1].split(a.regex.delimiter).map((function(t){return parseFloat(t)}))]})).reduce((function(t,e){return"matrix"==e[0]?t.multiply(f(e[1])):t[e[0]].apply(t,e[1])}),new a.Matrix)},toParent:function(t){if(this==t)return this;var e=this.screenCTM(),i=t.screenCTM().inverse();return this.addTo(t).untransform().transform(i.multiply(e)),this},toDoc:function(){return this.toParent(this.doc())}}),a.Transformation=a.invent({create:function(t,e){if(arguments.length>1&&"boolean"!=typeof e)return this.constructor.call(this,[].slice.call(arguments));if(Array.isArray(t))for(var a=0,s=this.arguments.length;a<s;++a)this[this.arguments[a]]=t[a];else if(t&&"object"===i(t))for(a=0,s=this.arguments.length;a<s;++a)this[this.arguments[a]]=t[this.arguments[a]];this.inversed=!1,!0===e&&(this.inversed=!0)}}),a.Translate=a.invent({parent:a.Matrix,inherit:a.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),a.extend(a.Element,{style:function(t,e){if(0==arguments.length)return this.node.style.cssText||"";if(arguments.length<2)if("object"===i(t))for(var s in t)this.style(s,t[s]);else{if(!a.regex.isCss.test(t))return this.node.style[c(t)];for(t=t.split(/\s*;\s*/).filter((function(t){return!!t})).map((function(t){return t.split(/\s*:\s*/)}));e=t.pop();)this.style(e[0],e[1])}else this.node.style[c(t)]=null===e||a.regex.isBlank.test(e)?"":e;return this}}),a.Parent=a.invent({create:function(t){this.constructor.call(this,t)},inherit:a.Element,extend:{children:function(){return a.utils.map(a.utils.filterSVGElements(this.node.childNodes),(function(t){return a.adopt(t)}))},add:function(t,e){return null==e?this.node.appendChild(t.node):t.node!=this.node.childNodes[e]&&this.node.insertBefore(t.node,this.node.childNodes[e]),this},put:function(t,e){return this.add(t,e),t},has:function(t){return this.index(t)>=0},index:function(t){return[].slice.call(this.node.childNodes).indexOf(t.node)},get:function(t){return a.adopt(this.node.childNodes[t])},first:function(){return this.get(0)},last:function(){return this.get(this.node.childNodes.length-1)},each:function(t,e){for(var i=this.children(),s=0,r=i.length;s<r;s++)i[s]instanceof a.Element&&t.apply(i[s],[s,i]),e&&i[s]instanceof a.Container&&i[s].each(t,e);return this},removeElement:function(t){return this.node.removeChild(t.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),a.extend(a.Parent,{ungroup:function(t,e){return 0===e||this instanceof a.Defs||this.node==a.parser.draw||(t=t||(this instanceof a.Doc?this:this.parent(a.Parent)),e=e||1/0,this.each((function(){return this instanceof a.Defs?this:this instanceof a.Parent?this.ungroup(t,e-1):this.toParent(t)})),this.node.firstChild||this.remove()),this},flatten:function(t,e){return this.ungroup(t,e)}}),a.Container=a.invent({create:function(t){this.constructor.call(this,t)},inherit:a.Parent}),a.ViewBox=a.invent({parent:a.Container,construct:{}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach((function(t){a.Element.prototype[t]=function(e){return a.on(this.node,t,e),this}})),a.listeners=[],a.handlerMap=[],a.listenerId=0,a.on=function(t,e,i,s,r){var o=i.bind(s||t.instance||t),n=(a.handlerMap.indexOf(t)+1||a.handlerMap.push(t))-1,l=e.split(".")[0],h=e.split(".")[1]||"*";a.listeners[n]=a.listeners[n]||{},a.listeners[n][l]=a.listeners[n][l]||{},a.listeners[n][l][h]=a.listeners[n][l][h]||{},i._svgjsListenerId||(i._svgjsListenerId=++a.listenerId),a.listeners[n][l][h][i._svgjsListenerId]=o,t.addEventListener(l,o,r||{passive:!0})},a.off=function(t,e,i){var s=a.handlerMap.indexOf(t),r=e&&e.split(".")[0],o=e&&e.split(".")[1],n="";if(-1!=s)if(i){if("function"==typeof i&&(i=i._svgjsListenerId),!i)return;a.listeners[s][r]&&a.listeners[s][r][o||"*"]&&(t.removeEventListener(r,a.listeners[s][r][o||"*"][i],!1),delete a.listeners[s][r][o||"*"][i])}else if(o&&r){if(a.listeners[s][r]&&a.listeners[s][r][o]){for(var l in a.listeners[s][r][o])a.off(t,[r,o].join("."),l);delete a.listeners[s][r][o]}}else if(o)for(var h in a.listeners[s])for(var n in a.listeners[s][h])o===n&&a.off(t,[h,o].join("."));else if(r){if(a.listeners[s][r]){for(var n in a.listeners[s][r])a.off(t,[r,n].join("."));delete a.listeners[s][r]}}else{for(var h in a.listeners[s])a.off(t,h);delete a.listeners[s],delete a.handlerMap[s]}},a.extend(a.Element,{on:function(t,e,i,s){return a.on(this.node,t,e,i,s),this},off:function(t,e){return a.off(this.node,t,e),this},fire:function(e,i){return e instanceof t.Event?this.node.dispatchEvent(e):this.node.dispatchEvent(e=new a.CustomEvent(e,{detail:i,cancelable:!0})),this._event=e,this},event:function(){return this._event}}),a.Defs=a.invent({create:"defs",inherit:a.Container}),a.G=a.invent({create:"g",inherit:a.Container,extend:{x:function(t){return null==t?this.transform("x"):this.transform({x:t-this.x()},!0)}},construct:{group:function(){return this.put(new a.G)}}}),a.Doc=a.invent({create:function(t){t&&("svg"==(t="string"==typeof t?e.getElementById(t):t).nodeName?this.constructor.call(this,t):(this.constructor.call(this,a.create("svg")),t.appendChild(this.node),this.size("100%","100%")),this.namespace().defs())},inherit:a.Container,extend:{namespace:function(){return this.attr({xmlns:a.ns,version:"1.1"}).attr("xmlns:xlink",a.xlink,a.xmlns).attr("xmlns:svgjs",a.svgjs,a.xmlns)},defs:function(){var t;return this._defs||((t=this.node.getElementsByTagName("defs")[0])?this._defs=a.adopt(t):this._defs=new a.Defs,this.node.appendChild(this._defs.node)),this._defs},parent:function(){return this.node.parentNode&&"#document"!=this.node.parentNode.nodeName?this.node.parentNode:null},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,a.parser.draw&&!a.parser.draw.parentNode&&this.node.appendChild(a.parser.draw),this},clone:function(t){this.writeDataToDom();var e=this.node,i=x(e.cloneNode(!0));return t?(t.node||t).appendChild(i.node):e.parentNode.insertBefore(i.node,e.nextSibling),i}}}),a.extend(a.Element,{}),a.Gradient=a.invent({create:function(t){this.constructor.call(this,a.create(t+"Gradient")),this.type=t},inherit:a.Container,extend:{at:function(t,e,i){return this.put(new a.Stop).update(t,e,i)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="gradientTransform"),a.Container.prototype.attr.call(this,t,e,i)}},construct:{gradient:function(t,e){return this.defs().gradient(t,e)}}}),a.extend(a.Gradient,a.FX,{from:function(t,e){return"radial"==(this._target||this).type?this.attr({fx:new a.Number(t),fy:new a.Number(e)}):this.attr({x1:new a.Number(t),y1:new a.Number(e)})},to:function(t,e){return"radial"==(this._target||this).type?this.attr({cx:new a.Number(t),cy:new a.Number(e)}):this.attr({x2:new a.Number(t),y2:new a.Number(e)})}}),a.extend(a.Defs,{gradient:function(t,e){return this.put(new a.Gradient(t)).update(e)}}),a.Stop=a.invent({create:"stop",inherit:a.Element,extend:{update:function(t){return("number"==typeof t||t instanceof a.Number)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new a.Number(t.offset)),this}}}),a.Pattern=a.invent({create:"pattern",inherit:a.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="patternTransform"),a.Container.prototype.attr.call(this,t,e,i)}},construct:{pattern:function(t,e,i){return this.defs().pattern(t,e,i)}}}),a.extend(a.Defs,{pattern:function(t,e,i){return this.put(new a.Pattern).update(i).attr({x:0,y:0,width:t,height:e,patternUnits:"userSpaceOnUse"})}}),a.Shape=a.invent({create:function(t){this.constructor.call(this,t)},inherit:a.Element}),a.Symbol=a.invent({create:"symbol",inherit:a.Container,construct:{symbol:function(){return this.put(new a.Symbol)}}}),a.Use=a.invent({create:"use",inherit:a.Shape,extend:{element:function(t,e){return this.attr("href",(e||"")+"#"+t,a.xlink)}},construct:{use:function(t,e){return this.put(new a.Use).element(t,e)}}}),a.Rect=a.invent({create:"rect",inherit:a.Shape,construct:{rect:function(t,e){return this.put(new a.Rect).size(t,e)}}}),a.Circle=a.invent({create:"circle",inherit:a.Shape,construct:{circle:function(t){return this.put(new a.Circle).rx(new a.Number(t).divide(2)).move(0,0)}}}),a.extend(a.Circle,a.FX,{rx:function(t){return this.attr("r",t)},ry:function(t){return this.rx(t)}}),a.Ellipse=a.invent({create:"ellipse",inherit:a.Shape,construct:{ellipse:function(t,e){return this.put(new a.Ellipse).size(t,e).move(0,0)}}}),a.extend(a.Ellipse,a.Rect,a.FX,{rx:function(t){return this.attr("rx",t)},ry:function(t){return this.attr("ry",t)}}),a.extend(a.Circle,a.Ellipse,{x:function(t){return null==t?this.cx()-this.rx():this.cx(t+this.rx())},y:function(t){return null==t?this.cy()-this.ry():this.cy(t+this.ry())},cx:function(t){return null==t?this.attr("cx"):this.attr("cx",t)},cy:function(t){return null==t?this.attr("cy"):this.attr("cy",t)},width:function(t){return null==t?2*this.rx():this.rx(new a.Number(t).divide(2))},height:function(t){return null==t?2*this.ry():this.ry(new a.Number(t).divide(2))},size:function(t,e){var i=u(this,t,e);return this.rx(new a.Number(i.width).divide(2)).ry(new a.Number(i.height).divide(2))}}),a.Line=a.invent({create:"line",inherit:a.Shape,extend:{array:function(){return new a.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(t,e,i,s){return null==t?this.array():(t=void 0!==e?{x1:t,y1:e,x2:i,y2:s}:new a.PointArray(t).toLine(),this.attr(t))},move:function(t,e){return this.attr(this.array().move(t,e).toLine())},size:function(t,e){var i=u(this,t,e);return this.attr(this.array().size(i.width,i.height).toLine())}},construct:{line:function(t,e,i,s){return a.Line.prototype.plot.apply(this.put(new a.Line),null!=t?[t,e,i,s]:[0,0,0,0])}}}),a.Polyline=a.invent({create:"polyline",inherit:a.Shape,construct:{polyline:function(t){return this.put(new a.Polyline).plot(t||new a.PointArray)}}}),a.Polygon=a.invent({create:"polygon",inherit:a.Shape,construct:{polygon:function(t){return this.put(new a.Polygon).plot(t||new a.PointArray)}}}),a.extend(a.Polyline,a.Polygon,{array:function(){return this._array||(this._array=new a.PointArray(this.attr("points")))},plot:function(t){return null==t?this.array():this.clear().attr("points","string"==typeof t?t:this._array=new a.PointArray(t))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("points",this.array().move(t,e))},size:function(t,e){var i=u(this,t,e);return this.attr("points",this.array().size(i.width,i.height))}}),a.extend(a.Line,a.Polyline,a.Polygon,{morphArray:a.PointArray,x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},width:function(t){var e=this.bbox();return null==t?e.width:this.size(t,e.height)},height:function(t){var e=this.bbox();return null==t?e.height:this.size(e.width,t)}}),a.Path=a.invent({create:"path",inherit:a.Shape,extend:{morphArray:a.PathArray,array:function(){return this._array||(this._array=new a.PathArray(this.attr("d")))},plot:function(t){return null==t?this.array():this.clear().attr("d","string"==typeof t?t:this._array=new a.PathArray(t))},clear:function(){return delete this._array,this}},construct:{path:function(t){return this.put(new a.Path).plot(t||new a.PathArray)}}}),a.Image=a.invent({create:"image",inherit:a.Shape,extend:{load:function(e){if(!e)return this;var i=this,s=new t.Image;return a.on(s,"load",(function(){a.off(s);var t=i.parent(a.Pattern);null!==t&&(0==i.width()&&0==i.height()&&i.size(s.width,s.height),t&&0==t.width()&&0==t.height()&&t.size(i.width(),i.height()),"function"==typeof i._loaded&&i._loaded.call(i,{width:s.width,height:s.height,ratio:s.width/s.height,url:e}))})),a.on(s,"error",(function(t){a.off(s),"function"==typeof i._error&&i._error.call(i,t)})),this.attr("href",s.src=this.src=e,a.xlink)},loaded:function(t){return this._loaded=t,this},error:function(t){return this._error=t,this}},construct:{image:function(t,e,i){return this.put(new a.Image).load(t).size(e||0,i||e||0)}}}),a.Text=a.invent({create:function(){this.constructor.call(this,a.create("text")),this.dom.leading=new a.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",a.defaults.attrs["font-family"])},inherit:a.Shape,extend:{x:function(t){return null==t?this.attr("x"):this.attr("x",t)},text:function(t){if(void 0===t){t="";for(var e=this.node.childNodes,i=0,s=e.length;i<s;++i)0!=i&&3!=e[i].nodeType&&1==a.adopt(e[i]).dom.newLined&&(t+="\n"),t+=e[i].textContent;return t}if(this.clear().build(!0),"function"==typeof t)t.call(this,this);else{i=0;for(var r=(t=t.split("\n")).length;i<r;i++)this.tspan(t[i]).newLine()}return this.build(!1).rebuild()},size:function(t){return this.attr("font-size",t).rebuild()},leading:function(t){return null==t?this.dom.leading:(this.dom.leading=new a.Number(t),this.rebuild())},lines:function(){var t=(this.textPath&&this.textPath()||this).node,e=a.utils.map(a.utils.filterSVGElements(t.childNodes),(function(t){return a.adopt(t)}));return new a.Set(e)},rebuild:function(t){if("boolean"==typeof t&&(this._rebuild=t),this._rebuild){var e=this,i=0,s=this.dom.leading*new a.Number(this.attr("font-size"));this.lines().each((function(){this.dom.newLined&&(e.textPath()||this.attr("x",e.attr("x")),"\n"==this.text()?i+=s:(this.attr("dy",s+i),i=0))})),this.fire("rebuild")}return this},build:function(t){return this._build=!!t,this},setData:function(t){return this.dom=t,this.dom.leading=new a.Number(t.leading||1.3),this}},construct:{text:function(t){return this.put(new a.Text).text(t)},plain:function(t){return this.put(new a.Text).plain(t)}}}),a.Tspan=a.invent({create:"tspan",inherit:a.Shape,extend:{text:function(t){return null==t?this.node.textContent+(this.dom.newLined?"\n":""):("function"==typeof t?t.call(this,this):this.plain(t),this)},dx:function(t){return this.attr("dx",t)},dy:function(t){return this.attr("dy",t)},newLine:function(){var t=this.parent(a.Text);return this.dom.newLined=!0,this.dy(t.dom.leading*t.attr("font-size")).attr("x",t.x())}}}),a.extend(a.Text,a.Tspan,{plain:function(t){return!1===this._build&&this.clear(),this.node.appendChild(e.createTextNode(t)),this},tspan:function(t){var e=(this.textPath&&this.textPath()||this).node,i=new a.Tspan;return!1===this._build&&this.clear(),e.appendChild(i.node),i.text(t)},clear:function(){for(var t=(this.textPath&&this.textPath()||this).node;t.hasChildNodes();)t.removeChild(t.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),a.TextPath=a.invent({create:"textPath",inherit:a.Parent,parent:a.Text,construct:{morphArray:a.PathArray,array:function(){var t=this.track();return t?t.array():null},plot:function(t){var e=this.track(),i=null;return e&&(i=e.plot(t)),null==t?i:this},track:function(){var t=this.textPath();if(t)return t.reference("href")},textPath:function(){if(this.node.firstChild&&"textPath"==this.node.firstChild.nodeName)return a.adopt(this.node.firstChild)}}}),a.Nested=a.invent({create:function(){this.constructor.call(this,a.create("svg")),this.style("overflow","visible")},inherit:a.Container,construct:{nested:function(){return this.put(new a.Nested)}}});var l={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(t,e){return"color"==e?t:t+"-"+e}};function h(t,e,i,s){return i+s.replace(a.regex.dots," .")}function c(t){return t.toLowerCase().replace(/-(.)/g,(function(t,e){return e.toUpperCase()}))}function d(t){return t.charAt(0).toUpperCase()+t.slice(1)}function g(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function u(t,e,i){if(null==e||null==i){var a=t.bbox();null==e?e=a.width/a.height*i:null==i&&(i=a.height/a.width*e)}return{width:e,height:i}}function p(t,e,i){return{x:e*t.a+i*t.c+0,y:e*t.b+i*t.d+0}}function f(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}function x(e){for(var i=e.childNodes.length-1;i>=0;i--)e.childNodes[i]instanceof t.SVGElement&&x(e.childNodes[i]);return a.adopt(e).id(a.eid(e.nodeName))}function b(t){return null==t.x&&(t.x=0,t.y=0,t.width=0,t.height=0),t.w=t.width,t.h=t.height,t.x2=t.x+t.width,t.y2=t.y+t.height,t.cx=t.x+t.width/2,t.cy=t.y+t.height/2,t}function v(t){return Math.abs(t)>1e-37?t:0}["fill","stroke"].forEach((function(t){var e={};e[t]=function(e){if(void 0===e)return this;if("string"==typeof e||a.Color.isRgb(e)||e&&"function"==typeof e.fill)this.attr(t,e);else for(var i=l[t].length-1;i>=0;i--)null!=e[l[t][i]]&&this.attr(l.prefix(t,l[t][i]),e[l[t][i]]);return this},a.extend(a.Element,a.FX,e)})),a.extend(a.Element,a.FX,{translate:function(t,e){return this.transform({x:t,y:e})},matrix:function(t){return this.attr("transform",new a.Matrix(6==arguments.length?[].slice.call(arguments):t))},opacity:function(t){return this.attr("opacity",t)},dx:function(t){return this.x(new a.Number(t).plus(this instanceof a.FX?0:this.x()),!0)},dy:function(t){return this.y(new a.Number(t).plus(this instanceof a.FX?0:this.y()),!0)}}),a.extend(a.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(t){return this.node.getPointAtLength(t)}}),a.Set=a.invent({create:function(t){Array.isArray(t)?this.members=t:this.clear()},extend:{add:function(){for(var t=[].slice.call(arguments),e=0,i=t.length;e<i;e++)this.members.push(t[e]);return this},remove:function(t){var e=this.index(t);return e>-1&&this.members.splice(e,1),this},each:function(t){for(var e=0,i=this.members.length;e<i;e++)t.apply(this.members[e],[e,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(t){return this.index(t)>=0},index:function(t){return this.members.indexOf(t)},get:function(t){return this.members[t]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members}},construct:{set:function(t){return new a.Set(t)}}}),a.FX.Set=a.invent({create:function(t){this.set=t}}),a.Set.inherit=function(){var t=[];for(var e in a.Shape.prototype)"function"==typeof a.Shape.prototype[e]&&"function"!=typeof a.Set.prototype[e]&&t.push(e);for(var e in t.forEach((function(t){a.Set.prototype[t]=function(){for(var e=0,i=this.members.length;e<i;e++)this.members[e]&&"function"==typeof this.members[e][t]&&this.members[e][t].apply(this.members[e],arguments);return"animate"==t?this.fx||(this.fx=new a.FX.Set(this)):this}})),t=[],a.FX.prototype)"function"==typeof a.FX.prototype[e]&&"function"!=typeof a.FX.Set.prototype[e]&&t.push(e);t.forEach((function(t){a.FX.Set.prototype[t]=function(){for(var e=0,i=this.set.members.length;e<i;e++)this.set.members[e].fx[t].apply(this.set.members[e].fx,arguments);return this}}))},a.extend(a.Element,{}),a.extend(a.Element,{remember:function(t,e){if("object"===i(arguments[0]))for(var a in t)this.remember(a,t[a]);else{if(1==arguments.length)return this.memory()[t];this.memory()[t]=e}return this},forget:function(){if(0==arguments.length)this._memory={};else for(var t=arguments.length-1;t>=0;t--)delete this.memory()[arguments[t]];return this},memory:function(){return this._memory||(this._memory={})}}),a.get=function(t){var i=e.getElementById(function(t){var e=(t||"").toString().match(a.regex.reference);if(e)return e[1]}(t)||t);return a.adopt(i)},a.select=function(t,i){return new a.Set(a.utils.map((i||e).querySelectorAll(t),(function(t){return a.adopt(t)})))},a.extend(a.Parent,{select:function(t){return a.select(t,this.node)}});var m="abcdef".split("");if("function"!=typeof t.CustomEvent){var y=function(t,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var a=e.createEvent("CustomEvent");return a.initCustomEvent(t,i.bubbles,i.cancelable,i.detail),a};y.prototype=t.Event.prototype,a.CustomEvent=y}else a.CustomEvent=t.CustomEvent;return a}, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return zt(It,It.document)}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0,
/*! svg.filter.js - v2.0.2 - 2016-02-24
* https://github.com/wout/svg.filter.js
* Copyright (c) 2016 Wout Fierens; Licensed MIT */
function(){SVG.Filter=SVG.invent({create:"filter",inherit:SVG.Parent,extend:{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",autoSetIn:!0,put:function(t,e){return this.add(t,e),!t.attr("in")&&this.autoSetIn&&t.attr("in",this.source),t.attr("result")||t.attr("result",t),t},blend:function(t,e,i){return this.put(new SVG.BlendEffect(t,e,i))},colorMatrix:function(t,e){return this.put(new SVG.ColorMatrixEffect(t,e))},convolveMatrix:function(t){return this.put(new SVG.ConvolveMatrixEffect(t))},componentTransfer:function(t){return this.put(new SVG.ComponentTransferEffect(t))},composite:function(t,e,i){return this.put(new SVG.CompositeEffect(t,e,i))},flood:function(t,e){return this.put(new SVG.FloodEffect(t,e))},offset:function(t,e){return this.put(new SVG.OffsetEffect(t,e))},image:function(t){return this.put(new SVG.ImageEffect(t))},merge:function(){var t=[void 0];for(var e in arguments)t.push(arguments[e]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,t)))},gaussianBlur:function(t,e){return this.put(new SVG.GaussianBlurEffect(t,e))},morphology:function(t,e){return this.put(new SVG.MorphologyEffect(t,e))},diffuseLighting:function(t,e,i){return this.put(new SVG.DiffuseLightingEffect(t,e,i))},displacementMap:function(t,e,i,a,s){return this.put(new SVG.DisplacementMapEffect(t,e,i,a,s))},specularLighting:function(t,e,i,a){return this.put(new SVG.SpecularLightingEffect(t,e,i,a))},tile:function(){return this.put(new SVG.TileEffect)},turbulence:function(t,e,i,a,s){return this.put(new SVG.TurbulenceEffect(t,e,i,a,s))},toString:function(){return"url(#"+this.attr("id")+")"}}}),SVG.extend(SVG.Defs,{filter:function(t){var e=this.put(new SVG.Filter);return"function"==typeof t&&t.call(e,e),e}}),SVG.extend(SVG.Container,{filter:function(t){return this.defs().filter(t)}}),SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(t){return this.filterer=t instanceof SVG.Element?t:this.doc().filter(t),this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer),this.attr("filter",this.filterer),this.filterer},unfilter:function(t){return this.filterer&&!0===t&&this.filterer.remove(),delete this.filterer,this.attr("filter",null)}}),SVG.Effect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}}),SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Parent,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}});var t={blend:function(t,e){return this.parent()&&this.parent().blend(this,t,e)},colorMatrix:function(t,e){return this.parent()&&this.parent().colorMatrix(t,e).in(this)},convolveMatrix:function(t){return this.parent()&&this.parent().convolveMatrix(t).in(this)},componentTransfer:function(t){return this.parent()&&this.parent().componentTransfer(t).in(this)},composite:function(t,e){return this.parent()&&this.parent().composite(this,t,e)},flood:function(t,e){return this.parent()&&this.parent().flood(t,e)},offset:function(t,e){return this.parent()&&this.parent().offset(t,e).in(this)},image:function(t){return this.parent()&&this.parent().image(t)},merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments))},gaussianBlur:function(t,e){return this.parent()&&this.parent().gaussianBlur(t,e).in(this)},morphology:function(t,e){return this.parent()&&this.parent().morphology(t,e).in(this)},diffuseLighting:function(t,e,i){return this.parent()&&this.parent().diffuseLighting(t,e,i).in(this)},displacementMap:function(t,e,i,a){return this.parent()&&this.parent().displacementMap(this,t,e,i,a)},specularLighting:function(t,e,i,a){return this.parent()&&this.parent().specularLighting(t,e,i,a).in(this)},tile:function(){return this.parent()&&this.parent().tile().in(this)},turbulence:function(t,e,i,a,s){return this.parent()&&this.parent().turbulence(t,e,i,a,s).in(this)}};SVG.extend(SVG.Effect,t),SVG.extend(SVG.ParentEffect,t),SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){this.attr("in",t)}}});var e={blend:function(t,e,i){this.attr({in:t,in2:e,mode:i||"normal"})},colorMatrix:function(t,e){"matrix"==t&&(e=s(e)),this.attr({type:t,values:void 0===e?null:e})},convolveMatrix:function(t){t=s(t),this.attr({order:Math.sqrt(t.split(" ").length),kernelMatrix:t})},composite:function(t,e,i){this.attr({in:t,in2:e,operator:i})},flood:function(t,e){this.attr("flood-color",t),null!=e&&this.attr("flood-opacity",e)},offset:function(t,e){this.attr({dx:t,dy:e})},image:function(t){this.attr("href",t,SVG.xlink)},displacementMap:function(t,e,i,a,s){this.attr({in:t,in2:e,scale:i,xChannelSelector:a,yChannelSelector:s})},gaussianBlur:function(t,e){null!=t||null!=e?this.attr("stdDeviation",r(Array.prototype.slice.call(arguments))):this.attr("stdDeviation","0 0")},morphology:function(t,e){this.attr({operator:t,radius:e})},tile:function(){},turbulence:function(t,e,i,a,s){this.attr({numOctaves:e,seed:i,stitchTiles:a,baseFrequency:t,type:s})}},i={merge:function(){var t;if(arguments[0]instanceof SVG.Set){var e=this;arguments[0].each((function(t){this instanceof SVG.MergeNode?e.put(this):(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&e.put(new SVG.MergeNode(this))}))}else{t=Array.isArray(arguments[0])?arguments[0]:arguments;for(var i=0;i<t.length;i++)t[i]instanceof SVG.MergeNode?this.put(t[i]):this.put(new SVG.MergeNode(t[i]))}},componentTransfer:function(t){if(this.rgb=new SVG.Set,["r","g","b","a"].forEach(function(t){this[t]=new(SVG["Func"+t.toUpperCase()])("identity"),this.rgb.add(this[t]),this.node.appendChild(this[t].node)}.bind(this)),t)for(var e in t.rgb&&(["r","g","b"].forEach(function(e){this[e].attr(t.rgb)}.bind(this)),delete t.rgb),t)this[e].attr(t[e])},diffuseLighting:function(t,e,i){this.attr({surfaceScale:t,diffuseConstant:e,kernelUnitLength:i})},specularLighting:function(t,e,i,a){this.attr({surfaceScale:t,diffuseConstant:e,specularExponent:i,kernelUnitLength:a})}},a={distantLight:function(t,e){this.attr({azimuth:t,elevation:e})},pointLight:function(t,e,i){this.attr({x:t,y:e,z:i})},spotLight:function(t,e,i,a,s,r){this.attr({x:t,y:e,z:i,pointsAtX:a,pointsAtY:s,pointsAtZ:r})},mergeNode:function(t){this.attr("in",t)}};function s(t){return Array.isArray(t)&&(t=new SVG.Array(t)),t.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function r(t){if(!Array.isArray(t))return t;for(var e=0,i=t.length,a=[];e<i;e++)a.push(t[e]);return a.join(" ")}function o(){var t=function(){};for(var e in"function"==typeof arguments[arguments.length-1]&&(t=arguments[arguments.length-1],Array.prototype.splice.call(arguments,arguments.length-1,1)),arguments)for(var i in arguments[e])t(arguments[e][i],i,arguments[e])}["r","g","b","a"].forEach((function(t){a["Func"+t.toUpperCase()]=function(t){switch(this.attr("type",t),t){case"table":this.attr("tableValues",arguments[1]);break;case"linear":this.attr("slope",arguments[1]),this.attr("intercept",arguments[2]);break;case"gamma":this.attr("amplitude",arguments[1]),this.attr("exponent",arguments[2]),this.attr("offset",arguments[2])}}})),o(e,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.Effect,extend:{}})})),o(i,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.ParentEffect,extend:{}})})),o(a,(function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments)},inherit:SVG.ChildEffect,extend:{}})})),SVG.extend(SVG.MergeEffect,{in:function(t){return t instanceof SVG.MergeNode?this.add(t,0):this.add(new SVG.MergeNode(t),0),this}}),SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"):this.attr("in2",t)}}),SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}.call(void 0),function(){function t(t,s,r,o,n,l,h){for(var c=t.slice(s,r||h),d=o.slice(n,l||h),g=0,u={pos:[0,0],start:[0,0]},p={pos:[0,0],start:[0,0]};;){if(c[g]=e.call(u,c[g]),d[g]=e.call(p,d[g]),c[g][0]!=d[g][0]||"M"==c[g][0]||"A"==c[g][0]&&(c[g][4]!=d[g][4]||c[g][5]!=d[g][5])?(Array.prototype.splice.apply(c,[g,1].concat(a.call(u,c[g]))),Array.prototype.splice.apply(d,[g,1].concat(a.call(p,d[g])))):(c[g]=i.call(u,c[g]),d[g]=i.call(p,d[g])),++g==c.length&&g==d.length)break;g==c.length&&c.push(["C",u.pos[0],u.pos[1],u.pos[0],u.pos[1],u.pos[0],u.pos[1]]),g==d.length&&d.push(["C",p.pos[0],p.pos[1],p.pos[0],p.pos[1],p.pos[0],p.pos[1]])}return{start:c,dest:d}}function e(t){switch(t[0]){case"z":case"Z":t[0]="L",t[1]=this.start[0],t[2]=this.start[1];break;case"H":t[0]="L",t[2]=this.pos[1];break;case"V":t[0]="L",t[2]=t[1],t[1]=this.pos[0];break;case"T":t[0]="Q",t[3]=t[1],t[4]=t[2],t[1]=this.reflection[1],t[2]=this.reflection[0];break;case"S":t[0]="C",t[6]=t[4],t[5]=t[3],t[4]=t[2],t[3]=t[1],t[2]=this.reflection[1],t[1]=this.reflection[0]}return t}function i(t){var e=t.length;return this.pos=[t[e-2],t[e-1]],-1!="SCQT".indexOf(t[0])&&(this.reflection=[2*this.pos[0]-t[e-4],2*this.pos[1]-t[e-3]]),t}function a(t){var e=[t];switch(t[0]){case"M":return this.pos=this.start=[t[1],t[2]],e;case"L":t[5]=t[3]=t[1],t[6]=t[4]=t[2],t[1]=this.pos[0],t[2]=this.pos[1];break;case"Q":t[6]=t[4],t[5]=t[3],t[4]=1*t[4]/3+2*t[2]/3,t[3]=1*t[3]/3+2*t[1]/3,t[2]=1*this.pos[1]/3+2*t[2]/3,t[1]=1*this.pos[0]/3+2*t[1]/3;break;case"A":t=(e=function(t,e){var i,a,s,r,o,n,l,h,c,d,g,u,p,f,x,b,v,m,y,w,k,A,S,C,L,P,M=Math.abs(e[1]),T=Math.abs(e[2]),I=e[3]%360,z=e[4],X=e[5],E=e[6],Y=e[7],F=new SVG.Point(t),R=new SVG.Point(E,Y),H=[];if(0===M||0===T||F.x===R.x&&F.y===R.y)return[["C",F.x,F.y,R.x,R.y,R.x,R.y]];i=new SVG.Point((F.x-R.x)/2,(F.y-R.y)/2).transform((new SVG.Matrix).rotate(I)),(a=i.x*i.x/(M*M)+i.y*i.y/(T*T))>1&&(M*=a=Math.sqrt(a),T*=a);s=(new SVG.Matrix).rotate(I).scale(1/M,1/T).rotate(-I),F=F.transform(s),R=R.transform(s),r=[R.x-F.x,R.y-F.y],n=r[0]*r[0]+r[1]*r[1],o=Math.sqrt(n),r[0]/=o,r[1]/=o,l=n<4?Math.sqrt(1-n/4):0,z===X&&(l*=-1);h=new SVG.Point((R.x+F.x)/2+l*-r[1],(R.y+F.y)/2+l*r[0]),c=new SVG.Point(F.x-h.x,F.y-h.y),d=new SVG.Point(R.x-h.x,R.y-h.y),g=Math.acos(c.x/Math.sqrt(c.x*c.x+c.y*c.y)),c.y<0&&(g*=-1);u=Math.acos(d.x/Math.sqrt(d.x*d.x+d.y*d.y)),d.y<0&&(u*=-1);X&&g>u&&(u+=2*Math.PI);!X&&g<u&&(u-=2*Math.PI);for(f=Math.ceil(2*Math.abs(g-u)/Math.PI),b=[],v=g,p=(u-g)/f,x=4*Math.tan(p/4)/3,k=0;k<=f;k++)y=Math.cos(v),m=Math.sin(v),w=new SVG.Point(h.x+y,h.y+m),b[k]=[new SVG.Point(w.x+x*m,w.y-x*y),w,new SVG.Point(w.x-x*m,w.y+x*y)],v+=p;for(b[0][0]=b[0][1].clone(),b[b.length-1][2]=b[b.length-1][1].clone(),s=(new SVG.Matrix).rotate(I).scale(M,T).rotate(-I),k=0,A=b.length;k<A;k++)b[k][0]=b[k][0].transform(s),b[k][1]=b[k][1].transform(s),b[k][2]=b[k][2].transform(s);for(k=1,A=b.length;k<A;k++)S=(w=b[k-1][2]).x,C=w.y,L=(w=b[k][0]).x,P=w.y,E=(w=b[k][1]).x,Y=w.y,H.push(["C",S,C,L,P,E,Y]);return H}(this.pos,t))[0]}return t[0]="C",this.pos=[t[5],t[6]],this.reflection=[2*t[5]-t[3],2*t[6]-t[4]],e}function s(t,e){if(!1===e)return!1;for(var i=e,a=t.length;i<a;++i)if("M"==t[i][0])return i;return!1}SVG.extend(SVG.PathArray,{morph:function(e){for(var i=this.value,a=this.parse(e),r=0,o=0,n=!1,l=!1;!1!==r||!1!==o;){var h;n=s(i,!1!==r&&r+1),l=s(a,!1!==o&&o+1),!1===r&&(r=0==(h=new SVG.PathArray(c.start).bbox()).height||0==h.width?i.push(i[0])-1:i.push(["M",h.x+h.width/2,h.y+h.height/2])-1),!1===o&&(o=0==(h=new SVG.PathArray(c.dest).bbox()).height||0==h.width?a.push(a[0])-1:a.push(["M",h.x+h.width/2,h.y+h.height/2])-1);var c=t(i,r,n,a,o,l);i=i.slice(0,r).concat(c.start,!1===n?[]:i.slice(n)),a=a.slice(0,o).concat(c.dest,!1===l?[]:a.slice(l)),r=!1!==n&&r+c.start.length,o=!1!==l&&o+c.dest.length}return this.value=i,this.destination=new SVG.PathArray,this.destination.value=a,this}})}(),
/*! svg.draggable.js - v2.2.2 - 2019-01-08
* https://github.com/svgdotjs/svg.draggable.js
* Copyright (c) 2019 Wout Fierens; Licensed MIT */
function(){function t(t){t.remember("_draggable",this),this.el=t}t.prototype.init=function(t,e){var i=this;this.constraint=t,this.value=e,this.el.on("mousedown.drag",(function(t){i.start(t)})),this.el.on("touchstart.drag",(function(t){i.start(t)}))},t.prototype.transformPoint=function(t,e){var i=(t=t||window.event).changedTouches&&t.changedTouches[0]||t;return this.p.x=i.clientX-(e||0),this.p.y=i.clientY,this.p.matrixTransform(this.m)},t.prototype.getBBox=function(){var t=this.el.bbox();return this.el instanceof SVG.Nested&&(t=this.el.rbox()),(this.el instanceof SVG.G||this.el instanceof SVG.Use||this.el instanceof SVG.Nested)&&(t.x=this.el.x(),t.y=this.el.y()),t},t.prototype.start=function(t){if("click"!=t.type&&"mousedown"!=t.type&&"mousemove"!=t.type||1==(t.which||t.buttons)){var e=this;if(this.el.fire("beforedrag",{event:t,handler:this}),!this.el.event().defaultPrevented){t.preventDefault(),t.stopPropagation(),this.parent=this.parent||this.el.parent(SVG.Nested)||this.el.parent(SVG.Doc),this.p=this.parent.node.createSVGPoint(),this.m=this.el.node.getScreenCTM().inverse();var i,a=this.getBBox();if(this.el instanceof SVG.Text)switch(i=this.el.node.getComputedTextLength(),this.el.attr("text-anchor")){case"middle":i/=2;break;case"start":i=0}this.startPoints={point:this.transformPoint(t,i),box:a,transform:this.el.transform()},SVG.on(window,"mousemove.drag",(function(t){e.drag(t)})),SVG.on(window,"touchmove.drag",(function(t){e.drag(t)})),SVG.on(window,"mouseup.drag",(function(t){e.end(t)})),SVG.on(window,"touchend.drag",(function(t){e.end(t)})),this.el.fire("dragstart",{event:t,p:this.startPoints.point,m:this.m,handler:this})}}},t.prototype.drag=function(t){var e=this.getBBox(),i=this.transformPoint(t),a=this.startPoints.box.x+i.x-this.startPoints.point.x,s=this.startPoints.box.y+i.y-this.startPoints.point.y,r=this.constraint,o=i.x-this.startPoints.point.x,n=i.y-this.startPoints.point.y;if(this.el.fire("dragmove",{event:t,p:i,m:this.m,handler:this}),this.el.event().defaultPrevented)return i;if("function"==typeof r){var l=r.call(this.el,a,s,this.m);"boolean"==typeof l&&(l={x:l,y:l}),!0===l.x?this.el.x(a):!1!==l.x&&this.el.x(l.x),!0===l.y?this.el.y(s):!1!==l.y&&this.el.y(l.y)}else"object"==typeof r&&(null!=r.minX&&a<r.minX?o=(a=r.minX)-this.startPoints.box.x:null!=r.maxX&&a>r.maxX-e.width&&(o=(a=r.maxX-e.width)-this.startPoints.box.x),null!=r.minY&&s<r.minY?n=(s=r.minY)-this.startPoints.box.y:null!=r.maxY&&s>r.maxY-e.height&&(n=(s=r.maxY-e.height)-this.startPoints.box.y),null!=r.snapToGrid&&(a-=a%r.snapToGrid,s-=s%r.snapToGrid,o-=o%r.snapToGrid,n-=n%r.snapToGrid),this.el instanceof SVG.G?this.el.matrix(this.startPoints.transform).transform({x:o,y:n},!0):this.el.move(a,s));return i},t.prototype.end=function(t){var e=this.drag(t);this.el.fire("dragend",{event:t,p:e,m:this.m,handler:this}),SVG.off(window,"mousemove.drag"),SVG.off(window,"touchmove.drag"),SVG.off(window,"mouseup.drag"),SVG.off(window,"touchend.drag")},SVG.extend(SVG.Element,{draggable:function(e,i){"function"!=typeof e&&"object"!=typeof e||(i=e,e=!0);var a=this.remember("_draggable")||new t(this);return(e=void 0===e||e)?a.init(i||{},e):(this.off("mousedown.drag"),this.off("touchstart.drag")),this}})}.call(void 0),function(){function t(t){this.el=t,t.remember("_selectHandler",this),this.pointSelection={isSelected:!1},this.rectSelection={isSelected:!1},this.pointsList={lt:[0,0],rt:["width",0],rb:["width","height"],lb:[0,"height"],t:["width",0],r:["width","height"],b:["width","height"],l:[0,"height"]},this.pointCoord=function(t,e,i){var a="string"!=typeof t?t:e[t];return i?a/2:a},this.pointCoords=function(t,e){var i=this.pointsList[t];return{x:this.pointCoord(i[0],e,"t"===t||"b"===t),y:this.pointCoord(i[1],e,"r"===t||"l"===t)}}}t.prototype.init=function(t,e){var i=this.el.bbox();this.options={};var a=this.el.selectize.defaults.points;for(var s in this.el.selectize.defaults)this.options[s]=this.el.selectize.defaults[s],void 0!==e[s]&&(this.options[s]=e[s]);var r=["points","pointsExclude"];for(var s in r){var o=this.options[r[s]];"string"==typeof o?o=o.length>0?o.split(/\s*,\s*/i):[]:"boolean"==typeof o&&"points"===r[s]&&(o=o?a:[]),this.options[r[s]]=o}this.options.points=[a,this.options.points].reduce((function(t,e){return t.filter((function(t){return e.indexOf(t)>-1}))})),this.options.points=[this.options.points,this.options.pointsExclude].reduce((function(t,e){return t.filter((function(t){return e.indexOf(t)<0}))})),this.parent=this.el.parent(),this.nested=this.nested||this.parent.group(),this.nested.matrix(new SVG.Matrix(this.el).translate(i.x,i.y)),this.options.deepSelect&&-1!==["line","polyline","polygon"].indexOf(this.el.type)?this.selectPoints(t):this.selectRect(t),this.observe(),this.cleanup()},t.prototype.selectPoints=function(t){return this.pointSelection.isSelected=t,this.pointSelection.set||(this.pointSelection.set=this.parent.set(),this.drawPoints()),this},t.prototype.getPointArray=function(){var t=this.el.bbox();return this.el.array().valueOf().map((function(e){return[e[0]-t.x,e[1]-t.y]}))},t.prototype.drawPoints=function(){for(var t=this,e=this.getPointArray(),i=0,a=e.length;i<a;++i){var s=function(e){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var a=i.pageX||i.touches[0].pageX,s=i.pageY||i.touches[0].pageY;t.el.fire("point",{x:a,y:s,i:e,event:i})}}(i),r=this.drawPoint(e[i][0],e[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints+"_point").on("touchstart",s).on("mousedown",s);this.pointSelection.set.add(r)}},t.prototype.drawPoint=function(t,e){var i=this.options.pointType;switch(i){case"circle":return this.drawCircle(t,e);case"rect":return this.drawRect(t,e);default:if("function"==typeof i)return i.call(this,t,e);throw new Error("Unknown "+i+" point type!")}},t.prototype.drawCircle=function(t,e){return this.nested.circle(this.options.pointSize).center(t,e)},t.prototype.drawRect=function(t,e){return this.nested.rect(this.options.pointSize,this.options.pointSize).center(t,e)},t.prototype.updatePointSelection=function(){var t=this.getPointArray();this.pointSelection.set.each((function(e){this.cx()===t[e][0]&&this.cy()===t[e][1]||this.center(t[e][0],t[e][1])}))},t.prototype.updateRectSelection=function(){var t=this,e=this.el.bbox();if(this.rectSelection.set.get(0).attr({width:e.width,height:e.height}),this.options.points.length&&this.options.points.map((function(i,a){var s=t.pointCoords(i,e);t.rectSelection.set.get(a+1).center(s.x,s.y)})),this.options.rotationPoint){var i=this.rectSelection.set.length();this.rectSelection.set.get(i-1).center(e.width/2,20)}},t.prototype.selectRect=function(t){var e=this,i=this.el.bbox();function a(t){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var a=i.pageX||i.touches[0].pageX,s=i.pageY||i.touches[0].pageY;e.el.fire(t,{x:a,y:s,event:i})}}if(this.rectSelection.isSelected=t,this.rectSelection.set=this.rectSelection.set||this.parent.set(),this.rectSelection.set.get(0)||this.rectSelection.set.add(this.nested.rect(i.width,i.height).addClass(this.options.classRect)),this.options.points.length&&this.rectSelection.set.length()<2){this.options.points.map((function(t,s){var r=e.pointCoords(t,i),o=e.drawPoint(r.x,r.y).attr("class",e.options.classPoints+"_"+t).on("mousedown",a(t)).on("touchstart",a(t));e.rectSelection.set.add(o)})),this.rectSelection.set.each((function(){this.addClass(e.options.classPoints)}))}if(this.options.rotationPoint&&(this.options.points&&!this.rectSelection.set.get(9)||!this.options.points&&!this.rectSelection.set.get(1))){var s=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation();var i=t.pageX||t.touches[0].pageX,a=t.pageY||t.touches[0].pageY;e.el.fire("rot",{x:i,y:a,event:t})},r=this.drawPoint(i.width/2,20).attr("class",this.options.classPoints+"_rot").on("touchstart",s).on("mousedown",s);this.rectSelection.set.add(r)}},t.prototype.handler=function(){var t=this.el.bbox();this.nested.matrix(new SVG.Matrix(this.el).translate(t.x,t.y)),this.rectSelection.isSelected&&this.updateRectSelection(),this.pointSelection.isSelected&&this.updatePointSelection()},t.prototype.observe=function(){var t=this;if(MutationObserver)if(this.rectSelection.isSelected||this.pointSelection.isSelected)this.observerInst=this.observerInst||new MutationObserver((function(){t.handler()})),this.observerInst.observe(this.el.node,{attributes:!0});else try{this.observerInst.disconnect(),delete this.observerInst}catch(t){}else this.el.off("DOMAttrModified.select"),(this.rectSelection.isSelected||this.pointSelection.isSelected)&&this.el.on("DOMAttrModified.select",(function(){t.handler()}))},t.prototype.cleanup=function(){!this.rectSelection.isSelected&&this.rectSelection.set&&(this.rectSelection.set.each((function(){this.remove()})),this.rectSelection.set.clear(),delete this.rectSelection.set),!this.pointSelection.isSelected&&this.pointSelection.set&&(this.pointSelection.set.each((function(){this.remove()})),this.pointSelection.set.clear(),delete this.pointSelection.set),this.pointSelection.isSelected||this.rectSelection.isSelected||(this.nested.remove(),delete this.nested)},SVG.extend(SVG.Element,{selectize:function(e,i){return"object"==typeof e&&(i=e,e=!0),(this.remember("_selectHandler")||new t(this)).init(void 0===e||e,i||{}),this}}),SVG.Element.prototype.selectize.defaults={points:["lt","rt","rb","lb","t","r","b","l"],pointsExclude:[],classRect:"svg_select_boundingRect",classPoints:"svg_select_points",pointSize:7,rotationPoint:!0,deepSelect:!1,pointType:"circle"}}(),function(){(function(){function t(t){t.remember("_resizeHandler",this),this.el=t,this.parameters={},this.lastUpdateCall=null,this.p=t.doc().node.createSVGPoint()}t.prototype.transformPoint=function(t,e,i){return this.p.x=t-(this.offset.x-window.pageXOffset),this.p.y=e-(this.offset.y-window.pageYOffset),this.p.matrixTransform(i||this.m)},t.prototype._extractPosition=function(t){return{x:null!=t.clientX?t.clientX:t.touches[0].clientX,y:null!=t.clientY?t.clientY:t.touches[0].clientY}},t.prototype.init=function(t){var e=this;if(this.stop(),"stop"!==t){for(var i in this.options={},this.el.resize.defaults)this.options[i]=this.el.resize.defaults[i],void 0!==t[i]&&(this.options[i]=t[i]);this.el.on("lt.resize",(function(t){e.resize(t||window.event)})),this.el.on("rt.resize",(function(t){e.resize(t||window.event)})),this.el.on("rb.resize",(function(t){e.resize(t||window.event)})),this.el.on("lb.resize",(function(t){e.resize(t||window.event)})),this.el.on("t.resize",(function(t){e.resize(t||window.event)})),this.el.on("r.resize",(function(t){e.resize(t||window.event)})),this.el.on("b.resize",(function(t){e.resize(t||window.event)})),this.el.on("l.resize",(function(t){e.resize(t||window.event)})),this.el.on("rot.resize",(function(t){e.resize(t||window.event)})),this.el.on("point.resize",(function(t){e.resize(t||window.event)})),this.update()}},t.prototype.stop=function(){return this.el.off("lt.resize"),this.el.off("rt.resize"),this.el.off("rb.resize"),this.el.off("lb.resize"),this.el.off("t.resize"),this.el.off("r.resize"),this.el.off("b.resize"),this.el.off("l.resize"),this.el.off("rot.resize"),this.el.off("point.resize"),this},t.prototype.resize=function(t){var e=this;this.m=this.el.node.getScreenCTM().inverse(),this.offset={x:window.pageXOffset,y:window.pageYOffset};var i=this._extractPosition(t.detail.event);if(this.parameters={type:this.el.type,p:this.transformPoint(i.x,i.y),x:t.detail.x,y:t.detail.y,box:this.el.bbox(),rotation:this.el.transform().rotation},"text"===this.el.type&&(this.parameters.fontSize=this.el.attr()["font-size"]),void 0!==t.detail.i){var a=this.el.array().valueOf();this.parameters.i=t.detail.i,this.parameters.pointCoords=[a[t.detail.i][0],a[t.detail.i][1]]}switch(t.type){case"lt":this.calc=function(t,e){var i=this.snapToGrid(t,e);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y+i[1]).size(this.parameters.box.width-i[0],this.parameters.box.height-i[1])}};break;case"rt":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i,!0),this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).size(this.parameters.box.width+i[0],this.parameters.box.height-i[1])}};break;case"rb":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x,this.parameters.box.y).size(this.parameters.box.width+i[0],this.parameters.box.height+i[1])}};break;case"lb":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i,!0),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).size(this.parameters.box.width-i[0],this.parameters.box.height+i[1])}};break;case"t":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).height(this.parameters.box.height-i[1])}};break;case"r":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).width(this.parameters.box.width+i[0])}};break;case"b":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).height(this.parameters.box.height+i[1])}};break;case"l":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).width(this.parameters.box.width-i[0])}};break;case"rot":this.calc=function(t,e){var i=t+this.parameters.p.x,a=e+this.parameters.p.y,s=Math.atan2(this.parameters.p.y-this.parameters.box.y-this.parameters.box.height/2,this.parameters.p.x-this.parameters.box.x-this.parameters.box.width/2),r=Math.atan2(a-this.parameters.box.y-this.parameters.box.height/2,i-this.parameters.box.x-this.parameters.box.width/2),o=this.parameters.rotation+180*(r-s)/Math.PI+this.options.snapToAngle/2;this.el.center(this.parameters.box.cx,this.parameters.box.cy).rotate(o-o%this.options.snapToAngle,this.parameters.box.cx,this.parameters.box.cy)};break;case"point":this.calc=function(t,e){var i=this.snapToGrid(t,e,this.parameters.pointCoords[0],this.parameters.pointCoords[1]),a=this.el.array().valueOf();a[this.parameters.i][0]=this.parameters.pointCoords[0]+i[0],a[this.parameters.i][1]=this.parameters.pointCoords[1]+i[1],this.el.plot(a)}}this.el.fire("resizestart",{dx:this.parameters.x,dy:this.parameters.y,event:t}),SVG.on(window,"touchmove.resize",(function(t){e.update(t||window.event)})),SVG.on(window,"touchend.resize",(function(){e.done()})),SVG.on(window,"mousemove.resize",(function(t){e.update(t||window.event)})),SVG.on(window,"mouseup.resize",(function(){e.done()}))},t.prototype.update=function(t){if(t){var e=this._extractPosition(t),i=this.transformPoint(e.x,e.y),a=i.x-this.parameters.p.x,s=i.y-this.parameters.p.y;this.lastUpdateCall=[a,s],this.calc(a,s),this.el.fire("resizing",{dx:a,dy:s,event:t})}else this.lastUpdateCall&&this.calc(this.lastUpdateCall[0],this.lastUpdateCall[1])},t.prototype.done=function(){this.lastUpdateCall=null,SVG.off(window,"mousemove.resize"),SVG.off(window,"mouseup.resize"),SVG.off(window,"touchmove.resize"),SVG.off(window,"touchend.resize"),this.el.fire("resizedone")},t.prototype.snapToGrid=function(t,e,i,a){var s;return void 0!==a?s=[(i+t)%this.options.snapToGrid,(a+e)%this.options.snapToGrid]:(i=null==i?3:i,s=[(this.parameters.box.x+t+(1&i?0:this.parameters.box.width))%this.options.snapToGrid,(this.parameters.box.y+e+(2&i?0:this.parameters.box.height))%this.options.snapToGrid]),t<0&&(s[0]-=this.options.snapToGrid),e<0&&(s[1]-=this.options.snapToGrid),t-=Math.abs(s[0])<this.options.snapToGrid/2?s[0]:s[0]-(t<0?-this.options.snapToGrid:this.options.snapToGrid),e-=Math.abs(s[1])<this.options.snapToGrid/2?s[1]:s[1]-(e<0?-this.options.snapToGrid:this.options.snapToGrid),this.constraintToBox(t,e,i,a)},t.prototype.constraintToBox=function(t,e,i,a){var s,r,o=this.options.constraint||{};return void 0!==a?(s=i,r=a):(s=this.parameters.box.x+(1&i?0:this.parameters.box.width),r=this.parameters.box.y+(2&i?0:this.parameters.box.height)),void 0!==o.minX&&s+t<o.minX&&(t=o.minX-s),void 0!==o.maxX&&s+t>o.maxX&&(t=o.maxX-s),void 0!==o.minY&&r+e<o.minY&&(e=o.minY-r),void 0!==o.maxY&&r+e>o.maxY&&(e=o.maxY-r),[t,e]},t.prototype.checkAspectRatio=function(t,e){if(!this.options.saveAspectRatio)return t;var i=t.slice(),a=this.parameters.box.width/this.parameters.box.height,s=this.parameters.box.width+t[0],r=this.parameters.box.height-t[1],o=s/r;return o<a?(i[1]=s/a-this.parameters.box.height,e&&(i[1]=-i[1])):o>a&&(i[0]=this.parameters.box.width-r*a,e&&(i[0]=-i[0])),i},SVG.extend(SVG.Element,{resize:function(e){return(this.remember("_resizeHandler")||new t(this)).init(e||{}),this}}),SVG.Element.prototype.resize.defaults={snapToAngle:.1,snapToGrid:1,constraint:{},saveAspectRatio:!1}}).call(this)}(),void 0===window.Apex&&(window.Apex={});var Rt=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"initModules",value:function(){this.ctx.publicMethods=["updateOptions","updateSeries","appendData","appendSeries","toggleSeries","showSeries","hideSeries","setLocale","resetSeries","zoomX","toggleDataPointSelection","dataURI","exportToCSV","addXaxisAnnotation","addYaxisAnnotation","addPointAnnotation","clearAnnotations","removeAnnotation","paper","destroy"],this.ctx.eventList=["click","mousedown","mousemove","mouseleave","touchstart","touchmove","touchleave","mouseup","touchend"],this.ctx.animations=new b(this.ctx),this.ctx.axes=new K(this.ctx),this.ctx.core=new Yt(this.ctx.el,this.ctx),this.ctx.config=new N({}),this.ctx.data=new B(this.ctx),this.ctx.grid=new U(this.ctx),this.ctx.graphics=new m(this.ctx),this.ctx.coreUtils=new y(this.ctx),this.ctx.crosshairs=new tt(this.ctx),this.ctx.events=new J(this.ctx),this.ctx.exports=new j(this.ctx),this.ctx.localization=new Q(this.ctx),this.ctx.options=new L,this.ctx.responsive=new et(this.ctx),this.ctx.series=new E(this.ctx),this.ctx.theme=new it(this.ctx),this.ctx.formatters=new V(this.ctx),this.ctx.titleSubtitle=new at(this.ctx),this.ctx.legend=new ct(this.ctx),this.ctx.toolbar=new dt(this.ctx),this.ctx.dimensions=new lt(this.ctx),this.ctx.updateHelpers=new Ft(this.ctx),this.ctx.zoomPanSelection=new gt(this.ctx),this.ctx.w.globals.tooltip=new mt(this.ctx)}}]),t}(),Ht=function(){function t(e){a(this,t),this.ctx=e,this.w=e.w}return r(t,[{key:"clear",value:function(t){var e=t.isUpdating;this.ctx.zoomPanSelection&&this.ctx.zoomPanSelection.destroy(),this.ctx.toolbar&&this.ctx.toolbar.destroy(),this.ctx.animations=null,this.ctx.axes=null,this.ctx.annotations=null,this.ctx.core=null,this.ctx.data=null,this.ctx.grid=null,this.ctx.series=null,this.ctx.responsive=null,this.ctx.theme=null,this.ctx.formatters=null,this.ctx.titleSubtitle=null,this.ctx.legend=null,this.ctx.dimensions=null,this.ctx.options=null,this.ctx.crosshairs=null,this.ctx.zoomPanSelection=null,this.ctx.updateHelpers=null,this.ctx.toolbar=null,this.ctx.localization=null,this.ctx.w.globals.tooltip=null,this.clearDomElements({isUpdating:e})}},{key:"killSVG",value:function(t){t.each((function(t,e){this.removeClass("*"),this.off(),this.stop()}),!0),t.ungroup(),t.clear()}},{key:"clearDomElements",value:function(t){var e=this,i=t.isUpdating,a=this.w.globals.dom.Paper.node;a.parentNode&&a.parentNode.parentNode&&!i&&(a.parentNode.parentNode.style.minHeight="unset");var s=this.w.globals.dom.baseEl;s&&this.ctx.eventList.forEach((function(t){s.removeEventListener(t,e.ctx.events.documentEvent)}));var r=this.w.globals.dom;if(null!==this.ctx.el)for(;this.ctx.el.firstChild;)this.ctx.el.removeChild(this.ctx.el.firstChild);this.killSVG(r.Paper),r.Paper.remove(),r.elWrap=null,r.elGraphical=null,r.elAnnotations=null,r.elLegendWrap=null,r.baseEl=null,r.elGridRect=null,r.elGridRectMask=null,r.elGridRectMarkerMask=null,r.elForecastMask=null,r.elNonForecastMask=null,r.elDefs=null}}]),t}(),Dt=new WeakMap;var Nt=function(){function t(e,i){a(this,t),this.opts=i,this.ctx=this,this.w=new W(i).init(),this.el=e,this.w.globals.cuid=x.randomId(),this.w.globals.chartID=this.w.config.chart.id?x.escapeString(this.w.config.chart.id):this.w.globals.cuid,new Rt(this).initModules(),this.create=x.bind(this.create,this),this.windowResizeHandler=this._windowResizeHandler.bind(this),this.parentResizeHandler=this._parentResizeCallback.bind(this)}return r(t,[{key:"render",value:function(){var t=this;return new Promise((function(e,i){if(null!==t.el){void 0===Apex._chartInstances&&(Apex._chartInstances=[]),t.w.config.chart.id&&Apex._chartInstances.push({id:t.w.globals.chartID,group:t.w.config.chart.group,chart:t}),t.setLocale(t.w.config.chart.defaultLocale);var a=t.w.config.chart.events.beforeMount;if("function"==typeof a&&a(t,t.w),t.events.fireEvent("beforeMount",[t,t.w]),window.addEventListener("resize",t.windowResizeHandler),function(t,e){var i=!1;if(t.nodeType!==Node.DOCUMENT_FRAGMENT_NODE){var a=t.getBoundingClientRect();"none"!==t.style.display&&0!==a.width||(i=!0)}var s=new ResizeObserver((function(a){i&&e.call(t,a),i=!0}));t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?Array.from(t.children).forEach((function(t){return s.observe(t)})):s.observe(t),Dt.set(e,s)}(t.el.parentNode,t.parentResizeHandler),!t.css){var s=t.el.getRootNode&&t.el.getRootNode(),r=x.is("ShadowRoot",s),o=t.el.ownerDocument,n=o.getElementById("apexcharts-css");!r&&n||(t.css=document.createElement("style"),t.css.id="apexcharts-css",t.css.textContent='.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n}\n\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.apexcharts-text tspan {\n  font-family: inherit;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, 0.8);\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit;\n}\n\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #333;\n}\n\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-title:empty,\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-text-goals-label, \n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-goals-group, \n.apexcharts-tooltip-text-goals-label, \n.apexcharts-tooltip-text-goals-value {\n  display: flex;\n}\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0 !important;\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-box, .apexcharts-custom-tooltip {\n  padding: 4px 8px;\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0;\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: bold;\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px;\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777;\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-left: -6px;\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #ECEFF1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-top: -6px;\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1;\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none;\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_boundingRect, .svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n}\n.apexcharts-selection-rect + g .svg_select_boundingRect,\n.apexcharts-selection-rect + g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.apexcharts-selection-rect + g .svg_select_points_l,\n.apexcharts-selection-rect + g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2;\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon,\n.apexcharts-reset-icon,\n.apexcharts-pan-icon,\n.apexcharts-selection-icon,\n.apexcharts-menu-icon,\n.apexcharts-toolbar-custom-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6E8192;\n  text-align: center;\n}\n\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.76)\n}\n\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {\n  fill: #f3f4f5;\n}\n\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {\n  fill: #008FFB;\n}\n\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon,\n.apexcharts-menu-icon {\n  position: relative;\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px;\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-reset-icon,\n.apexcharts-menu-icon {\n  transform: scale(0.85);\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(0.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.62);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008FFB;\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee;\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  }\n}\n\n.apexcharts-datalabel.apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabels,\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-gridline,\n.apexcharts-annotation-rect,\n.apexcharts-xaxis-annotation-label,\n.apexcharts-yaxis-annotation-label,\n.apexcharts-point-annotation-label,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line,\n.apexcharts-zoom-rect,\n.apexcharts-toolbar svg,\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-radar-series path,\n.apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n/* Resize generated styles */\n\n@keyframes resizeanim {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.resize-triggers,\n.resize-triggers>div,\n.contract-trigger:before {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.resize-triggers>div {\n  background: #eee;\n  overflow: auto;\n}\n\n.contract-trigger:before {\n  width: 200%;\n  height: 200%;\n}',r?s.prepend(t.css):o.head.appendChild(t.css))}var l=t.create(t.w.config.series,{});if(!l)return e(t);t.mount(l).then((function(){"function"==typeof t.w.config.chart.events.mounted&&t.w.config.chart.events.mounted(t,t.w),t.events.fireEvent("mounted",[t,t.w]),e(l)})).catch((function(t){i(t)}))}else i(new Error("Element not found"))}))}},{key:"create",value:function(t,e){var i=this.w;new Rt(this).initModules();var a=this.w.globals;(a.noData=!1,a.animationEnded=!1,this.responsive.checkResponsiveConfig(e),i.config.xaxis.convertedCatToNumeric)&&new D(i.config).convertCatToNumericXaxis(i.config,this.ctx);if(null===this.el)return a.animationEnded=!0,null;if(this.core.setupElements(),"treemap"===i.config.chart.type&&(i.config.grid.show=!1,i.config.yaxis[0].show=!1),0===a.svgWidth)return a.animationEnded=!0,null;var s=y.checkComboSeries(t);a.comboCharts=s.comboCharts,a.comboBarCount=s.comboBarCount;var r=t.every((function(t){return t.data&&0===t.data.length}));(0===t.length||r)&&this.series.handleNoData(),this.events.setupEventHandlers(),this.data.parseData(t),this.theme.init(),new T(this).setGlobalMarkerSize(),this.formatters.setLabelFormatters(),this.titleSubtitle.draw(),a.noData&&a.collapsedSeries.length!==a.series.length&&!i.config.legend.showForSingleSeries||this.legend.init(),this.series.hasAllSeriesEqualX(),a.axisCharts&&(this.core.coreCalculations(),"category"!==i.config.xaxis.type&&this.formatters.setLabelFormatters(),this.ctx.toolbar.minX=i.globals.minX,this.ctx.toolbar.maxX=i.globals.maxX),this.formatters.heatmapLabelFormatters(),new y(this).getLargestMarkerSize(),this.dimensions.plotCoords();var o=this.core.xySettings();this.grid.createGridMask();var n=this.core.plotChartType(t,o),l=new z(this);l.bringForward(),i.config.dataLabels.background.enabled&&l.dataLabelsBackground(),this.core.shiftGraphPosition();var h={plot:{left:i.globals.translateX,top:i.globals.translateY,width:i.globals.gridWidth,height:i.globals.gridHeight}};return{elGraph:n,xyRatios:o,elInner:i.globals.dom.elGraphical,dimensions:h}}},{key:"mount",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=this,a=i.w;return new Promise((function(s,r){if(null===i.el)return r(new Error("Not enough data to display or target element not found"));(null===e||a.globals.allSeriesCollapsed)&&i.series.handleNoData(),"treemap"!==a.config.chart.type&&i.axes.drawAxis(a.config.chart.type,e.xyRatios),i.grid=new U(i);var o=i.grid.drawGrid();i.annotations=new P(i),i.annotations.drawImageAnnos(),i.annotations.drawTextAnnos(),"back"===a.config.grid.position&&o&&a.globals.dom.elGraphical.add(o.el);var n=new _(t.ctx),l=new $(t.ctx);if(null!==o&&(n.xAxisLabelCorrections(o.xAxisTickWidth),l.setYAxisTextAlignments(),a.config.yaxis.map((function(t,e){-1===a.globals.ignoreYAxisIndexes.indexOf(e)&&l.yAxisTitleRotate(e,t.opposite)}))),"back"===a.config.annotations.position&&(a.globals.dom.Paper.add(a.globals.dom.elAnnotations),i.annotations.drawAxesAnnotations()),Array.isArray(e.elGraph))for(var h=0;h<e.elGraph.length;h++)a.globals.dom.elGraphical.add(e.elGraph[h]);else a.globals.dom.elGraphical.add(e.elGraph);if("front"===a.config.grid.position&&o&&a.globals.dom.elGraphical.add(o.el),"front"===a.config.xaxis.crosshairs.position&&i.crosshairs.drawXCrosshairs(),"front"===a.config.yaxis[0].crosshairs.position&&i.crosshairs.drawYCrosshairs(),"front"===a.config.annotations.position&&(a.globals.dom.Paper.add(a.globals.dom.elAnnotations),i.annotations.drawAxesAnnotations()),!a.globals.noData){if(a.config.tooltip.enabled&&!a.globals.noData&&i.w.globals.tooltip.drawTooltip(e.xyRatios),a.globals.axisCharts&&(a.globals.isXNumeric||a.config.xaxis.convertedCatToNumeric||a.globals.isRangeBar))(a.config.chart.zoom.enabled||a.config.chart.selection&&a.config.chart.selection.enabled||a.config.chart.pan&&a.config.chart.pan.enabled)&&i.zoomPanSelection.init({xyRatios:e.xyRatios});else{var c=a.config.chart.toolbar.tools;["zoom","zoomin","zoomout","selection","pan","reset"].forEach((function(t){c[t]=!1}))}a.config.chart.toolbar.show&&!a.globals.allSeriesCollapsed&&i.toolbar.createToolbar()}a.globals.memory.methodsToExec.length>0&&a.globals.memory.methodsToExec.forEach((function(t){t.method(t.params,!1,t.context)})),a.globals.axisCharts||a.globals.noData||i.core.resizeNonAxisCharts(),s(i)}))}},{key:"destroy",value:function(){var t,e;window.removeEventListener("resize",this.windowResizeHandler),this.el.parentNode,t=this.parentResizeHandler,(e=Dt.get(t))&&(e.disconnect(),Dt.delete(t));var i=this.w.config.chart.id;i&&Apex._chartInstances.forEach((function(t,e){t.id===x.escapeString(i)&&Apex._chartInstances.splice(e,1)})),new Ht(this.ctx).clear({isUpdating:!1})}},{key:"updateOptions",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=this.w;return o.globals.selection=void 0,t.series&&(this.series.resetSeries(!1,!0,!1),t.series.length&&t.series[0].data&&(t.series=t.series.map((function(t,i){return e.updateHelpers._extendSeries(t,i)}))),this.updateHelpers.revertDefaultAxisMinMax()),t.xaxis&&(t=this.updateHelpers.forceXAxisUpdate(t)),t.yaxis&&(t=this.updateHelpers.forceYAxisUpdate(t)),o.globals.collapsedSeriesIndices.length>0&&this.series.clearPreviousPaths(),t.theme&&(t=this.theme.updateThemeOptions(t)),this.updateHelpers._updateOptions(t,i,a,s,r)}},{key:"updateSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(t,e,i)}},{key:"appendSeries",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.w.config.series.slice();return a.push(t),this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(a,e,i)}},{key:"appendData",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this;i.w.globals.dataChanged=!0,i.series.getPreviousPaths();for(var a=i.w.config.series.slice(),s=0;s<a.length;s++)if(null!==t[s]&&void 0!==t[s])for(var r=0;r<t[s].data.length;r++)a[s].data.push(t[s].data[r]);return i.w.config.series=a,e&&(i.w.globals.initialSeries=x.clone(i.w.config.series)),this.update()}},{key:"update",value:function(t){var e=this;return new Promise((function(i,a){new Ht(e.ctx).clear({isUpdating:!0});var s=e.create(e.w.config.series,t);if(!s)return i(e);e.mount(s).then((function(){"function"==typeof e.w.config.chart.events.updated&&e.w.config.chart.events.updated(e,e.w),e.events.fireEvent("updated",[e,e.w]),e.w.globals.isDirty=!0,i(e)})).catch((function(t){a(t)}))}))}},{key:"getSyncedCharts",value:function(){var t=this.getGroupedCharts(),e=[this];return t.length&&(e=[],t.forEach((function(t){e.push(t)}))),e}},{key:"getGroupedCharts",value:function(){var t=this;return Apex._chartInstances.filter((function(t){if(t.group)return!0})).map((function(e){return t.w.config.chart.group===e.group?e.chart:t}))}},{key:"toggleSeries",value:function(t){return this.series.toggleSeries(t)}},{key:"highlightSeriesOnLegendHover",value:function(t,e){return this.series.toggleSeriesOnHover(t,e)}},{key:"showSeries",value:function(t){this.series.showSeries(t)}},{key:"hideSeries",value:function(t){this.series.hideSeries(t)}},{key:"resetSeries",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.series.resetSeries(t,e)}},{key:"addEventListener",value:function(t,e){this.events.addEventListener(t,e)}},{key:"removeEventListener",value:function(t,e){this.events.removeEventListener(t,e)}},{key:"addXaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addXaxisAnnotationExternal(t,e,a)}},{key:"addYaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addYaxisAnnotationExternal(t,e,a)}},{key:"addPointAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addPointAnnotationExternal(t,e,a)}},{key:"clearAnnotations",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=this;t&&(e=t),e.annotations.clearAnnotations(e)}},{key:"removeAnnotation",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=this;e&&(i=e),i.annotations.removeAnnotation(i,t)}},{key:"getChartArea",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")}},{key:"getSeriesTotalXRange",value:function(t,e){return this.coreUtils.getSeriesTotalsXRange(t,e)}},{key:"getHighestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new Z(this.ctx);return e.getMinYMaxY(t).highestY}},{key:"getLowestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new Z(this.ctx);return e.getMinYMaxY(t).lowestY}},{key:"getSeriesTotal",value:function(){return this.w.globals.seriesTotals}},{key:"toggleDataPointSelection",value:function(t,e){return this.updateHelpers.toggleDataPointSelection(t,e)}},{key:"zoomX",value:function(t,e){this.ctx.toolbar.zoomUpdateOptions(t,e)}},{key:"setLocale",value:function(t){this.localization.setCurrentLocaleValues(t)}},{key:"dataURI",value:function(t){return new j(this.ctx).dataURI(t)}},{key:"exportToCSV",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new j(this.ctx);return e.exportToCSV(t)}},{key:"paper",value:function(){return this.w.globals.dom.Paper}},{key:"_parentResizeCallback",value:function(){this.w.globals.animationEnded&&this.w.config.chart.redrawOnParentResize&&this._windowResize()}},{key:"_windowResize",value:function(){var t=this;clearTimeout(this.w.globals.resizeTimer),this.w.globals.resizeTimer=window.setTimeout((function(){t.w.globals.resized=!0,t.w.globals.dataChanged=!1,t.ctx.update()}),150)}},{key:"_windowResizeHandler",value:function(){var t=this.w.config.chart.redrawOnWindowResize;"function"==typeof t&&(t=t()),t&&this._windowResize()}}],[{key:"getChartByID",value:function(t){var e=x.escapeString(t),i=Apex._chartInstances.filter((function(t){return t.id===e}))[0];return i&&i.chart}},{key:"initOnLoad",value:function(){for(var e=document.querySelectorAll("[data-apexcharts]"),i=0;i<e.length;i++){new t(e[i],JSON.parse(e[i].getAttribute("data-options"))).render()}}},{key:"exec",value:function(t,e){var i=this.getChartByID(t);if(i){i.w.globals.isExecCalled=!0;var a=null;if(-1!==i.publicMethods.indexOf(e)){for(var s=arguments.length,r=new Array(s>2?s-2:0),o=2;o<s;o++)r[o-2]=arguments[o];a=i[e].apply(i,r)}return a}}},{key:"merge",value:function(t,e){return x.extend(t,e)}}]),t}();module.exports=Nt;


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );

var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		// trim whitespace for custom property (issue gh-4926)
		if ( isCustomProp ) {

			// rtrim treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" );
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(1);
// Apex Charts

window.Apex = {
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2
  }
};
var series = {
  "monthDataSeries1": {
    "prices": [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9340.85],
    "dates": ["13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017", "17 Nov 2017", "20 Nov 2017", "21 Nov 2017", "22 Nov 2017", "23 Nov 2017", "24 Nov 2017", "27 Nov 2017", "28 Nov 2017", "29 Nov 2017", "30 Nov 2017", "01 Dec 2017", "04 Dec 2017", "05 Dec 2017", "06 Dec 2017", "07 Dec 2017", "08 Dec 2017"]
  },
  "monthDataSeries2": {
    "prices": [8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9040.85, 8340.7, 8165.5, 8122.9, 8107.85, 8128.0],
    "dates": ["13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017", "17 Nov 2017", "20 Nov 2017", "21 Nov 2017", "22 Nov 2017", "23 Nov 2017", "24 Nov 2017", "27 Nov 2017", "28 Nov 2017", "29 Nov 2017", "30 Nov 2017", "01 Dec 2017", "04 Dec 2017", "05 Dec 2017", "06 Dec 2017", "07 Dec 2017", "08 Dec 2017"]
  },
  "monthDataSeries3": {
    "prices": [7114.25, 7126.6, 7116.95, 7203.7, 7233.75, 7451.0, 7381.15, 7348.95, 7347.75, 7311.25, 7266.4, 7253.25, 7215.45, 7266.35, 7315.25, 7237.2, 7191.4, 7238.95, 7222.6, 7217.9, 7359.3, 7371.55, 7371.15, 7469.2, 7429.25, 7434.65, 7451.1, 7475.25, 7566.25, 7556.8, 7525.55, 7555.45, 7560.9, 7490.7, 7527.6, 7551.9, 7514.85, 7577.95, 7592.3, 7621.95, 7707.95, 7859.1, 7815.7, 7739.0, 7778.7, 7839.45, 7756.45, 7669.2, 7580.45, 7452.85, 7617.25, 7701.6, 7606.8, 7620.05, 7513.85, 7498.45, 7575.45, 7601.95, 7589.1, 7525.85, 7569.5, 7702.5, 7812.7, 7803.75, 7816.3, 7851.15, 7912.2, 7972.8, 8145.0, 8161.1, 8121.05, 8071.25, 8088.2, 8154.45, 8148.3, 8122.05, 8132.65, 8074.55, 7952.8, 7885.55, 7733.9, 7897.15, 7973.15, 7888.5, 7842.8, 7838.4, 7909.85, 7892.75, 7897.75, 7820.05, 7904.4, 7872.2, 7847.5, 7849.55, 7789.6, 7736.35, 7819.4, 7875.35, 7871.8, 8076.5, 8114.8, 8193.55, 8217.1, 8235.05, 8215.3, 8216.4, 8301.55, 8235.25, 8229.75, 8201.95, 8164.95, 8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2],
    "dates": ["02 Jun 2017", "05 Jun 2017", "06 Jun 2017", "07 Jun 2017", "08 Jun 2017", "09 Jun 2017", "12 Jun 2017", "13 Jun 2017", "14 Jun 2017", "15 Jun 2017", "16 Jun 2017", "19 Jun 2017", "20 Jun 2017", "21 Jun 2017", "22 Jun 2017", "23 Jun 2017", "27 Jun 2017", "28 Jun 2017", "29 Jun 2017", "30 Jun 2017", "03 Jul 2017", "04 Jul 2017", "05 Jul 2017", "06 Jul 2017", "07 Jul 2017", "10 Jul 2017", "11 Jul 2017", "12 Jul 2017", "13 Jul 2017", "14 Jul 2017", "17 Jul 2017", "18 Jul 2017", "19 Jul 2017", "20 Jul 2017", "21 Jul 2017", "24 Jul 2017", "25 Jul 2017", "26 Jul 2017", "27 Jul 2017", "28 Jul 2017", "31 Jul 2017", "01 Aug 2017", "02 Aug 2017", "03 Aug 2017", "04 Aug 2017", "07 Aug 2017", "08 Aug 2017", "09 Aug 2017", "10 Aug 2017", "11 Aug 2017", "14 Aug 2017", "16 Aug 2017", "17 Aug 2017", "18 Aug 2017", "21 Aug 2017", "22 Aug 2017", "23 Aug 2017", "24 Aug 2017", "28 Aug 2017", "29 Aug 2017", "30 Aug 2017", "31 Aug 2017", "01 Sep 2017", "04 Sep 2017", "05 Sep 2017", "06 Sep 2017", "07 Sep 2017", "08 Sep 2017", "11 Sep 2017", "12 Sep 2017", "13 Sep 2017", "14 Sep 2017", "15 Sep 2017", "18 Sep 2017", "19 Sep 2017", "20 Sep 2017", "21 Sep 2017", "22 Sep 2017", "25 Sep 2017", "26 Sep 2017", "27 Sep 2017", "28 Sep 2017", "29 Sep 2017", "03 Oct 2017", "04 Oct 2017", "05 Oct 2017", "06 Oct 2017", "09 Oct 2017", "10 Oct 2017", "11 Oct 2017", "12 Oct 2017", "13 Oct 2017", "16 Oct 2017", "17 Oct 2017", "18 Oct 2017", "19 Oct 2017", "23 Oct 2017", "24 Oct 2017", "25 Oct 2017", "26 Oct 2017", "27 Oct 2017", "30 Oct 2017", "31 Oct 2017", "01 Nov 2017", "02 Nov 2017", "03 Nov 2017", "06 Nov 2017", "07 Nov 2017", "08 Nov 2017", "09 Nov 2017", "10 Nov 2017", "13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017", "17 Nov 2017", "20 Nov 2017", "21 Nov 2017", "22 Nov 2017", "23 Nov 2017", "24 Nov 2017", "27 Nov 2017", "28 Nov 2017"]
  }
}; // Radial

var options444 = {
  chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0,
        // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },
      dataLabels: {
        showOn: 'always',
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#ABE5A1'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  series: [75],
  stroke: {
    lineCap: 'round'
  },
  labels: ['Percent']
};
var chart444 = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart-radial"), options444); // Vertical Bars

var optionsBar = {
  chart: {
    type: 'bar',
    height: 200,
    width: '100%',
    stacked: true,
    foreColor: '#999'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: false
      },
      columnWidth: '75%',
      endingShape: 'rounded'
    }
  },
  colors: ["#00C5A4", '#F3F2FC'],
  series: [{
    name: "Sessions",
    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19, 15, 10, 11, 15, 19, 23]
  }, {
    name: "Views",
    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19, 15, 10, 11, 15, 19, 23]
  }],
  labels: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4],
  xaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      show: false
    },
    labels: {
      show: false,
      style: {
        fontSize: '14px'
      }
    }
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    labels: {
      show: false
    }
  },
  legend: {
    floating: true,
    position: 'top',
    horizontalAlign: 'center',
    offsetY: 15
  },
  subtitle: {
    text: 'Sessions and Views'
  }
};
var optionsBarLg = {
  chart: {
    type: 'bar',
    height: 318,
    width: '100%',
    stacked: true,
    foreColor: '#999'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: false
      },
      columnWidth: '75%',
      endingShape: 'rounded'
    }
  },
  colors: ["#6086c5", '#d2f5fc'],
  series: [{
    name: "Sessions",
    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19, 15, 10, 11, 15, 19, 23]
  }, {
    name: "Views",
    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19, 15, 10, 11, 15, 19, 23]
  }],
  labels: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4],
  xaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      show: false
    },
    labels: {
      show: false,
      style: {
        fontSize: '14px'
      }
    }
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    labels: {
      show: false
    }
  },
  legend: {
    floating: true,
    position: 'top',
    horizontalAlign: 'center',
    offsetY: 15
  },
  subtitle: {
    text: 'Sessions and Views'
  }
};
var chartBar = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector('#bar-vertical-candle'), optionsBar);
var chartBarLg = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector('#bar-vertical-candle-lg'), optionsBarLg); // 3Cols

var options3col1 = {
  chart: {
    height: 200,
    type: 'bar',
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: 'rounded',
      columnWidth: '55%'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      }
    }
  }
};
var col3Chart1 = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart-col-1"), options3col1);
var options3col2 = {
  chart: {
    height: 200,
    type: 'line',
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: 'rounded',
      columnWidth: '55%'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      }
    }
  }
};
var col3Chart2 = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart-col-2"), options3col2);
var options3col3 = {
  chart: {
    height: 200,
    type: 'area',
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: 'rounded',
      columnWidth: '55%'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      }
    }
  }
};
var col3Chart3 = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart-col-3"), options3col3); // Combined

var options777 = {
  chart: {
    height: 397,
    type: 'line',
    toolbar: {
      show: false
    }
  },
  series: [{
    name: 'Website Blog',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Social Media',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
  stroke: {
    width: [0, 4]
  },
  // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [{
    title: {
      text: 'Website Blog'
    }
  }, {
    opposite: true,
    title: {
      text: 'Social Media'
    }
  }]
};
var chart777 = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart-combined"), options777); // Area

var options = {
  chart: {
    height: 350,
    type: 'area',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  series: [{
    name: "STOCK ABC",
    data: series.monthDataSeries1.prices
  }],
  title: {
    text: 'Fundamental Analysis of Stocks',
    align: 'left'
  },
  subtitle: {
    text: 'Price Movements',
    align: 'left'
  },
  labels: series.monthDataSeries1.dates,
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    opposite: true
  },
  legend: {
    horizontalAlign: 'left'
  }
};
var chart = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart-apex-area"), options); // Area Negative

var options2 = {
  chart: {
    height: 350,
    type: 'area' // zoom: {
    //     enabled: false
    // }

  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  series: [{
    name: 'north',
    data: [{
      x: 1996,
      y: 322
    }, {
      x: 1997,
      y: 324
    }, {
      x: 1998,
      y: 329
    }, {
      x: 1999,
      y: 342
    }, {
      x: 2000,
      y: 348
    }, {
      x: 2001,
      y: 334
    }, {
      x: 2002,
      y: 325
    }, {
      x: 2003,
      y: 316
    }, {
      x: 2004,
      y: 318
    }, {
      x: 2005,
      y: 330
    }, {
      x: 2006,
      y: 355
    }, {
      x: 2007,
      y: 366
    }, {
      x: 2008,
      y: 337
    }, {
      x: 2009,
      y: 352
    }, {
      x: 2010,
      y: 377
    }, {
      x: 2011,
      y: 383
    }, {
      x: 2012,
      y: 344
    }, {
      x: 2013,
      y: 366
    }, {
      x: 2014,
      y: 389
    }, {
      x: 2015,
      y: 334
    }]
  }, {
    name: 'south',
    data: [{
      x: 1996,
      y: 162
    }, {
      x: 1997,
      y: 90
    }, {
      x: 1998,
      y: 50
    }, {
      x: 1999,
      y: 77
    }, {
      x: 2000,
      y: 35
    }, {
      x: 2001,
      y: -45
    }, {
      x: 2002,
      y: -88
    }, {
      x: 2003,
      y: -120
    }, {
      x: 2004,
      y: -156
    }, {
      x: 2005,
      y: -123
    }, {
      x: 2006,
      y: -88
    }, {
      x: 2007,
      y: -66
    }, {
      x: 2008,
      y: -45
    }, {
      x: 2009,
      y: -29
    }, {
      x: 2010,
      y: -45
    }, {
      x: 2011,
      y: -88
    }, {
      x: 2012,
      y: -132
    }, {
      x: 2013,
      y: -146
    }, {
      x: 2014,
      y: -169
    }, {
      x: 2015,
      y: -184
    }]
  }],
  title: {
    text: 'Area with Negative Values',
    align: 'left',
    style: {
      fontSize: '14px'
    }
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    tickAmount: 4,
    floating: false,
    labels: {
      style: {
        color: '#8e8da4'
      },
      offsetY: -7,
      offsetX: 0
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  fill: {
    opacity: 0.5,
    gradient: {
      enabled: false
    }
  },
  tooltip: {
    x: {
      format: "yyyy"
    },
    fixed: {
      enabled: false,
      position: 'topRight'
    }
  },
  grid: {
    yaxis: {
      lines: {
        offsetX: -30
      }
    },
    padding: {
      left: 20
    }
  }
};
var chart2 = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart-apex-negative"), options2); // Column

var options3 = {
  chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: 'rounded',
      columnWidth: '55%'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      }
    }
  }
};
var chart3 = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart-apex-column"), options3); // Stacked Bar

var options4 = {
  chart: {
    height: 350,
    type: 'bar',
    stacked: true
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  series: [{
    name: 'Marine Sprite',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'Striking Calf',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'Tank Picture',
    data: [12, 17, 11, 9, 15, 11, 20]
  }, {
    name: 'Bucket Slope',
    data: [9, 7, 5, 8, 6, 9, 4]
  }, {
    name: 'Reborn Kid',
    data: [25, 12, 19, 32, 25, 24, 10]
  }],
  title: {
    text: 'Fiction Books Sales'
  },
  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    labels: {
      formatter: function (val) {
        return val + "K";
      }
    }
  },
  yaxis: {
    title: {
      text: undefined
    }
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K";
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40
  }
};
var chart4 = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart-apex-stacked"), options4); // Dashboard Commerce chart > Variation 2

var optionsCommerce = {
  chart: {
    height: 274,
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  series: [{
    name: 'Marine',
    data: [44, 55, 41, 37, 22, 43]
  }, {
    name: 'Striking',
    data: [53, 32, 33, 52, 13, 43]
  }, {
    name: 'Tank',
    data: [12, 17, 11, 9, 15, 11]
  }, {
    name: 'Bucket',
    data: [9, 7, 5, 8, 6, 9]
  }, {
    name: 'Reborn',
    data: [25, 12, 19, 32, 25, 24]
  }],
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K";
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center'
  }
};
var chartCommerce = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart-apex-stacked-commerce"), optionsCommerce); // Sparklines

var randomizeArray = function (arg) {
  var array = arg.slice();
  var currentIndex = array.length,
      temporaryValue,
      randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];
var options1 = {
  chart: {
    type: 'line',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true
    }
  },
  series: [{
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
  }],
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
};
var options22 = {
  chart: {
    type: 'line',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true
    }
  },
  series: [{
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
};
var options33 = {
  chart: {
    type: 'line',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true
    }
  },
  series: [{
    data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
  }],
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
};
var options44 = {
  chart: {
    type: 'line',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true
    }
  },
  series: [{
    data: [15, 75, 47, 65, 14, 2, 41, 54, 4, 27, 15]
  }],
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
};
var options5 = {
  chart: {
    type: 'bar',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '80%'
    }
  },
  series: [{
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
  }],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
};
var options6 = {
  chart: {
    type: 'bar',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '80%'
    }
  },
  series: [{
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
};
var options7 = {
  chart: {
    type: 'bar',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '80%'
    }
  },
  series: [{
    data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
  }],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
};
var options8 = {
  chart: {
    type: 'bar',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '80%'
    }
  },
  colors: ["#4a47c4"],
  stroke: {
    width: 0,
    curve: 'smooth'
  },
  series: [{
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
  }],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
};
var options9 = {
  chart: {
    type: 'area',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true
    }
  },
  colors: ["#3ac47d"],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  series: [{
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
  }],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  }
}; // Dashboard Charts

var dashSpark1 = {
  chart: {
    type: 'area',
    height: 152,
    sparkline: {
      enabled: true
    }
  },
  colors: ["#3f6ad8"],
  stroke: {
    width: 5,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  }
};
var dashSpark4 = {
  chart: {
    type: 'area',
    height: 152,
    sparkline: {
      enabled: true
    }
  },
  colors: ["rgba(255,255,255,.8)"],
  stroke: {
    width: 5,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.2,
      opacityTo: 0.7,
      stops: [0, 90, 100]
    }
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  }
};
var dashSpark2 = {
  chart: {
    type: 'area',
    height: 152,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    width: 5,
    curve: 'smooth'
  },
  colors: ['#f7b924'],
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  }
};
var dashSpark3 = {
  chart: {
    type: 'area',
    height: 152,
    sparkline: {
      enabled: true
    }
  },
  colors: ['#3ac47d'],
  stroke: {
    width: 5,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  }
};
var dashSpark33 = {
  chart: {
    type: 'area',
    height: 332,
    sparkline: {
      enabled: true
    }
  },
  colors: ['#3ac47d'],
  stroke: {
    width: 5,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  }
};
var dashSparkLines1 = {
  chart: {
    type: 'line',
    height: 100,
    sparkline: {
      enabled: true
    }
  },
  colors: ["#3ac47d"],
  stroke: {
    width: 3,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: true
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  }
};
var dashSparkLines2 = {
  chart: {
    type: 'line',
    height: 100,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    width: 3,
    curve: 'smooth'
  },
  colors: ['#007bff'],
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: true
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  }
};
var dashSparkLines3 = {
  chart: {
    type: 'line',
    height: 100,
    sparkline: {
      enabled: true
    }
  },
  colors: ['#f7b924'],
  stroke: {
    width: 3,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: true
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  }
};
var dashSparkLines4 = {
  chart: {
    type: 'line',
    height: 100,
    sparkline: {
      enabled: true
    }
  },
  colors: ['#d92550'],
  stroke: {
    width: 3,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: true
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  }
};
var dashSparkLinesSimple1 = {
  chart: {
    type: 'line',
    height: 120,
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: false
  },
  colors: ["#3ac47d"],
  stroke: {
    width: 3,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  }
};
var dashSparkLinesSimple2 = {
  chart: {
    type: 'bar',
    height: 120,
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: false
  },
  stroke: {
    width: 3,
    curve: 'smooth'
  },
  colors: ['#007bff'],
  markers: {
    size: 0
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  }
};
var dashSparkLinesSimple3 = {
  chart: {
    type: 'area',
    height: 120,
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    enabled: false
  },
  colors: ['#f7b924'],
  stroke: {
    width: 3,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  }
};
var sparklinesBigPrimary = {
  chart: {
    height: 265,
    type: 'bar',
    stacked: false,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: 'rounded',
      borderRadius: 5
    }
  },
  colors: ['#E00520'],
  stroke: {
    width: 0,
    colors: ['#fff'],
    curve: 'smooth'
  },
  series: [{
    name: 'Marine',
    data: [20, 25, 21, 27, 12, 5]
  }],
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K";
      }
    }
  },
  fill: {
    opacity: .8
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center'
  }
};
var dashSparkLinesTrans2 = {
  chart: {
    type: 'bar',
    height: 174,
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  },
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  colors: ['rgba(255,255,255,.3)'],
  markers: {
    size: 0
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  }
};
var dashSparkLinesTrans3 = {
  chart: {
    type: 'line',
    height: 148,
    sparkline: {
      enabled: true
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: false
    }
  },
  colors: ['rgba(255,255,255,.3)'],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  series: [{
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  }
}; // Apex Charts Init

$(document).ready(() => {
  setTimeout(function () {
    if (document.getElementById('chart-apex-area')) {
      chart.render();
    }

    if (document.getElementById('chart-apex-negative')) {
      chart2.render();
    }

    if (document.getElementById('chart-apex-column')) {
      chart3.render();
    }

    if (document.getElementById('chart-apex-stacked')) {
      chart4.render();
    }

    if (document.getElementById('chart-col-1')) {
      col3Chart1.render();
    }

    if (document.getElementById('chart-col-2')) {
      col3Chart2.render();
    }

    if (document.getElementById('chart-col-3')) {
      col3Chart3.render();
    }

    if (document.getElementById('sparkline-chart1')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#sparkline-chart1"), options1).render();
    }

    if (document.getElementById('sparkline-chart2')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#sparkline-chart2"), options22).render();
    }

    if (document.getElementById('sparkline-chart3')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#sparkline-chart3"), options33).render();
    }

    if (document.getElementById('sparkline-chart4')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#sparkline-chart4"), options44).render();
    }

    if (document.getElementById('sparkline-chart5')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#sparkline-chart5"), options5).render();
    }

    if (document.getElementById('sparkline-chart6')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#sparkline-chart6"), options6).render();
    }

    if (document.getElementById('sparkline-chart7')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#sparkline-chart7"), options7).render();
    }

    if (document.getElementById('sparkline-chart8')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#sparkline-chart8"), options8).render();
    }

    if (document.getElementById('sparkline-chart9')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#sparkline-chart9"), options9).render();
    } // Dashboard Charts


    if (document.getElementById('dashboard-sparkline-1')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparkline-1"), dashSpark1).render();
    }

    if (document.getElementById('dashboard-sparkline-4')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparkline-4"), dashSpark4).render();
    }

    if (document.getElementById('dashboard-sparkline-2')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparkline-2"), dashSpark2).render();
    }

    if (document.getElementById('dashboard-sparkline-3')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparkline-3"), dashSpark3).render();
    }

    if (document.getElementById('dashboard-sparklines-1')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparklines-1"), dashSparkLines1).render();
    }

    if (document.getElementById('dashboard-sparklines-2')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparklines-2"), dashSparkLines2).render();
    }

    if (document.getElementById('dashboard-sparklines-3')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparklines-3"), dashSparkLines3).render();
    }

    if (document.getElementById('dashboard-sparklines-4')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparklines-4"), dashSparkLines4).render();
    }

    if (document.getElementById('dashboard-sparklines-primary')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparklines-primary"), sparklinesBigPrimary).render();
    }

    if (document.getElementById('dashboard-sparklines-simple-1')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparklines-simple-1"), dashSparkLinesSimple1).render();
    }

    if (document.getElementById('dashboard-sparklines-simple-2')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparklines-simple-2"), dashSparkLinesSimple2).render();
    }

    if (document.getElementById('dashboard-sparklines-simple-3')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparklines-simple-3"), dashSparkLinesSimple3).render();
    }

    if (document.getElementById('dashboard-sparklines-transparent-2')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparklines-transparent-2"), dashSparkLinesTrans2).render();
    }

    if (document.getElementById('dashboard-sparklines-transparent-3')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparklines-transparent-3"), dashSparkLinesTrans3).render();
    }

    if (document.getElementById('dashboard-sparkline-carousel-1')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparkline-carousel-1"), dashSparkLinesSimple1).render();
    }

    if (document.getElementById('dashboard-sparkline-carousel-2')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparkline-carousel-2"), dashSparkLinesSimple2).render();
    }

    if (document.getElementById('dashboard-sparkline-carousel-3')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparkline-carousel-3"), dashSparkLinesSimple3).render();
    }

    if (document.getElementById('sparkline-carousel-3')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#sparkline-carousel-3"), dashSparkLinesSimple1).render();
    }

    if (document.getElementById('dashboard-sparkline-11')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparkline-11"), options7).render();
    }

    if (document.getElementById('dashboard-sparkline-22')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparkline-22"), options8).render();
    }

    if (document.getElementById('dashboard-sparkline-33')) {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparkline-33"), options9).render();
    }

    if (document.getElementById('chart-apex-stacked-commerce')) {
      chartCommerce.render();
    }

    if (document.getElementById('chart-radial')) {
      chart444.render();
    }

    if (document.getElementById('chart-combined')) {
      chart777.render();
    }

    if (document.getElementById('bar-vertical-candle')) {
      chartBar.render();
    }

    if (document.getElementById('bar-vertical-candle-lg')) {
      chartBarLg.render();
    }
  }, 1000);
  $('.minimal-tab-btn-1').one('click', function () {
    setTimeout(function () {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart-combined-tab"), options777).render();
    }, 500);
  });
  $('.dd-chart-btn').one('click', function () {
    setTimeout(function () {
      if (document.getElementById('dashboard-sparkline-carousel-3-pop')) {
        new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparkline-carousel-3-pop"), dashSparkLinesSimple3).render();
      }
    }, 500);
  });
  $('.dd-chart-btn-2').one('click', function () {
    setTimeout(function () {
      if (document.getElementById('dashboard-sparkline-carousel-4-pop')) {
        new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparkline-carousel-4-pop"), dashSparkLinesSimple2).render();
      }
    }, 500);
  });
  $('.minimal-tab-btn-3').one('click', function () {
    setTimeout(function () {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart-combined-tab-3"), optionsCommerce).render();
    }, 500);
  });
  $('.second-tab-toggle').one('click', function () {
    setTimeout(function () {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparklines-333"), dashSparkLines4).render();
    }, 500);
  });
  $('.second-tab-toggle-alt').one('click', function () {
    setTimeout(function () {
      new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#dashboard-sparkline-37"), dashSpark33).render();
    }, 500);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=apex_charts.00170efabac3a0e8f00f.js.map