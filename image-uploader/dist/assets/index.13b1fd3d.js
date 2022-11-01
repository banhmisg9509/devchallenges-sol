(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/*!
  * @soerenmartius/vue3-clipboard v0.1.2
  * (c) 2021 Soeren Martius
  * @license MIT
  */var ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function si(e,t,n){return n={path:t,exports:{},require:function(r,o){return ii(r,o==null?n.path:o)}},e(n,n.exports),n.exports}function ii(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var ai=si(function(e,t){/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */(function(r,o){e.exports=o()})(ri,function(){return function(n){var r={};function o(s){if(r[s])return r[s].exports;var i=r[s]={i:s,l:!1,exports:{}};return n[s].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=n,o.c=r,o.d=function(s,i,a){o.o(s,i)||Object.defineProperty(s,i,{enumerable:!0,get:a})},o.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},o.t=function(s,i){if(i&1&&(s=o(s)),i&8||i&4&&typeof s=="object"&&s&&s.__esModule)return s;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:s}),i&2&&typeof s!="string")for(var l in s)o.d(a,l,function(u){return s[u]}.bind(null,l));return a},o.n=function(s){var i=s&&s.__esModule?function(){return s.default}:function(){return s};return o.d(i,"a",i),i},o.o=function(s,i){return Object.prototype.hasOwnProperty.call(s,i)},o.p="",o(o.s=6)}([function(n,r){function o(s){var i;if(s.nodeName==="SELECT")s.focus(),i=s.value;else if(s.nodeName==="INPUT"||s.nodeName==="TEXTAREA"){var a=s.hasAttribute("readonly");a||s.setAttribute("readonly",""),s.select(),s.setSelectionRange(0,s.value.length),a||s.removeAttribute("readonly"),i=s.value}else{s.hasAttribute("contenteditable")&&s.focus();var l=window.getSelection(),u=document.createRange();u.selectNodeContents(s),l.removeAllRanges(),l.addRange(u),i=l.toString()}return i}n.exports=o},function(n,r){function o(){}o.prototype={on:function(s,i,a){var l=this.e||(this.e={});return(l[s]||(l[s]=[])).push({fn:i,ctx:a}),this},once:function(s,i,a){var l=this;function u(){l.off(s,u),i.apply(a,arguments)}return u._=i,this.on(s,u,a)},emit:function(s){var i=[].slice.call(arguments,1),a=((this.e||(this.e={}))[s]||[]).slice(),l=0,u=a.length;for(l;l<u;l++)a[l].fn.apply(a[l].ctx,i);return this},off:function(s,i){var a=this.e||(this.e={}),l=a[s],u=[];if(l&&i)for(var d=0,p=l.length;d<p;d++)l[d].fn!==i&&l[d].fn._!==i&&u.push(l[d]);return u.length?a[s]=u:delete a[s],this}},n.exports=o,n.exports.TinyEmitter=o},function(n,r,o){var s=o(3),i=o(4);function a(p,v,b){if(!p&&!v&&!b)throw new Error("Missing required arguments");if(!s.string(v))throw new TypeError("Second argument must be a String");if(!s.fn(b))throw new TypeError("Third argument must be a Function");if(s.node(p))return l(p,v,b);if(s.nodeList(p))return u(p,v,b);if(s.string(p))return d(p,v,b);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function l(p,v,b){return p.addEventListener(v,b),{destroy:function(){p.removeEventListener(v,b)}}}function u(p,v,b){return Array.prototype.forEach.call(p,function(S){S.addEventListener(v,b)}),{destroy:function(){Array.prototype.forEach.call(p,function(S){S.removeEventListener(v,b)})}}}function d(p,v,b){return i(document.body,p,v,b)}n.exports=a},function(n,r){r.node=function(o){return o!==void 0&&o instanceof HTMLElement&&o.nodeType===1},r.nodeList=function(o){var s=Object.prototype.toString.call(o);return o!==void 0&&(s==="[object NodeList]"||s==="[object HTMLCollection]")&&"length"in o&&(o.length===0||r.node(o[0]))},r.string=function(o){return typeof o=="string"||o instanceof String},r.fn=function(o){var s=Object.prototype.toString.call(o);return s==="[object Function]"}},function(n,r,o){var s=o(5);function i(u,d,p,v,b){var S=l.apply(this,arguments);return u.addEventListener(p,S,b),{destroy:function(){u.removeEventListener(p,S,b)}}}function a(u,d,p,v,b){return typeof u.addEventListener=="function"?i.apply(null,arguments):typeof p=="function"?i.bind(null,document).apply(null,arguments):(typeof u=="string"&&(u=document.querySelectorAll(u)),Array.prototype.map.call(u,function(S){return i(S,d,p,v,b)}))}function l(u,d,p,v){return function(b){b.delegateTarget=s(b.target,d),b.delegateTarget&&v.call(u,b)}}n.exports=a},function(n,r){var o=9;if(typeof Element<"u"&&!Element.prototype.matches){var s=Element.prototype;s.matches=s.matchesSelector||s.mozMatchesSelector||s.msMatchesSelector||s.oMatchesSelector||s.webkitMatchesSelector}function i(a,l){for(;a&&a.nodeType!==o;){if(typeof a.matches=="function"&&a.matches(l))return a;a=a.parentNode}}n.exports=i},function(n,r,o){o.r(r);var s=o(0),i=o.n(s),a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},l=function(){function B(T,R){for(var P=0;P<R.length;P++){var N=R[P];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(T,N.key,N)}}return function(T,R,P){return R&&B(T.prototype,R),P&&B(T,P),T}}();function u(B,T){if(!(B instanceof T))throw new TypeError("Cannot call a class as a function")}var d=function(){function B(T){u(this,B),this.resolveOptions(T),this.initSelection()}return l(B,[{key:"resolveOptions",value:function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=R.action,this.container=R.container,this.emitter=R.emitter,this.target=R.target,this.text=R.text,this.trigger=R.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var R=this,P=document.documentElement.getAttribute("dir")=="rtl";this.removeFake(),this.fakeHandlerCallback=function(){return R.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[P?"right":"left"]="-9999px";var N=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=N+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=i()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=i()(this.target),this.copyText()}},{key:"copyText",value:function(){var R=void 0;try{R=document.execCommand(this.action)}catch{R=!1}this.handleResult(R)}},{key:"handleResult",value:function(R){this.emitter.emit(R?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"copy";if(this._action=R,this._action!=="copy"&&this._action!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(R){if(R!==void 0)if(R&&(typeof R>"u"?"undefined":a(R))==="object"&&R.nodeType===1){if(this.action==="copy"&&R.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(this.action==="cut"&&(R.hasAttribute("readonly")||R.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);this._target=R}else throw new Error('Invalid "target" value, use a valid Element')},get:function(){return this._target}}]),B}(),p=d,v=o(1),b=o.n(v),S=o(2),C=o.n(S),A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},k=function(){function B(T,R){for(var P=0;P<R.length;P++){var N=R[P];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(T,N.key,N)}}return function(T,R,P){return R&&B(T.prototype,R),P&&B(T,P),T}}();function Z(B,T){if(!(B instanceof T))throw new TypeError("Cannot call a class as a function")}function H(B,T){if(!B)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T&&(typeof T=="object"||typeof T=="function")?T:B}function L(B,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof T);B.prototype=Object.create(T&&T.prototype,{constructor:{value:B,enumerable:!1,writable:!0,configurable:!0}}),T&&(Object.setPrototypeOf?Object.setPrototypeOf(B,T):B.__proto__=T)}var ee=function(B){L(T,B);function T(R,P){Z(this,T);var N=H(this,(T.__proto__||Object.getPrototypeOf(T)).call(this));return N.resolveOptions(P),N.listenClick(R),N}return k(T,[{key:"resolveOptions",value:function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof P.action=="function"?P.action:this.defaultAction,this.target=typeof P.target=="function"?P.target:this.defaultTarget,this.text=typeof P.text=="function"?P.text:this.defaultText,this.container=A(P.container)==="object"?P.container:document.body}},{key:"listenClick",value:function(P){var N=this;this.listener=C()(P,"click",function(Ce){return N.onClick(Ce)})}},{key:"onClick",value:function(P){var N=P.delegateTarget||P.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new p({action:this.action(N),target:this.target(N),text:this.text(N),container:this.container,trigger:N,emitter:this})}},{key:"defaultAction",value:function(P){return me("action",P)}},{key:"defaultTarget",value:function(P){var N=me("target",P);if(N)return document.querySelector(N)}},{key:"defaultText",value:function(P){return me("text",P)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],N=typeof P=="string"?[P]:P,Ce=!!document.queryCommandSupported;return N.forEach(function(ut){Ce=Ce&&!!document.queryCommandSupported(ut)}),Ce}}]),T}(b.a);function me(B,T){var R="data-clipboard-"+B;if(!!T.hasAttribute(R))return T.getAttribute(R)}r.default=ee}]).default})}),Do=oi(ai);const Ot={autoSetContainer:!1,appendToBody:!0},li={config:e=>{const{autoSetContainer:t,appendToBody:n}=e;Ot.autoSetContainer=t||!1,Ot.appendToBody=n||!0},install:e=>{e.config.globalProperties.$vclipboard=Hr,e.directive("clipboard",{beforeMount(t,n){if(n.arg==="success")t._vClipboard_success=n.value;else if(n.arg==="error")t._vClipboard_error=n.value;else{const r=new Do(t,{text:()=>n.value,action:()=>n.arg==="cut"?"cut":"copy",container:Ot.autoSetContainer?t:void 0});r.on("success",o=>{const s=t._vClipboard_success;s&&s(o)}),r.on("error",o=>{const s=t._vClipboard_error;s&&s(o)}),t._vClipboard=r}},updated(t,n){n.arg==="success"?t._vClipboard_success=n.value:n.arg==="error"?t._vClipboard_error=n.value:(t._vClipboard.text=()=>n.value,t._vClipboard.action=()=>n.arg==="cut"?"cut":"copy")},unmounted(t,n){n.arg==="success"?delete t._vClipboard_success:n.arg==="error"?delete t._vClipboard_error:(t._vClipboard.destroy(),delete t._vClipboard)}})},toClipboard:(e,t)=>Hr(e,t)},Hr=(e,t="copy")=>new Promise((n,r)=>{const o=document.createElement("button"),s=new Do(o,{text:()=>e,action:()=>t});s.on("success",i=>{s.destroy(),n(i)}),s.on("error",i=>{s.destroy(),r(i)}),Ot.appendToBody&&document.body.appendChild(o),o.click(),Ot.appendToBody&&document.body.removeChild(o)});function lr(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const ci="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ui=lr(ci);function ko(e){return!!e||e===""}function cr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=re(r)?di(r):cr(r);if(o)for(const s in o)t[s]=o[s]}return t}else{if(re(e))return e;if(J(e))return e}}const fi=/;(?![^(]*\))/g,hi=/:(.+)/;function di(e){const t={};return e.split(fi).forEach(n=>{if(n){const r=n.split(hi);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Pt(e){let t="";if(re(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Pt(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Cn=e=>re(e)?e:e==null?"":F(e)||J(e)&&(e.toString===Fo||!$(e.toString))?JSON.stringify(e,Po,2):String(e),Po=(e,t)=>t&&t.__v_isRef?Po(e,t.value):pt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:Bo(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!F(t)&&!$o(t)?String(t):t,K={},dt=[],Ee=()=>{},pi=()=>!1,gi=/^on[^a-z]/,un=e=>gi.test(e),ur=e=>e.startsWith("onUpdate:"),le=Object.assign,fr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},mi=Object.prototype.hasOwnProperty,j=(e,t)=>mi.call(e,t),F=Array.isArray,pt=e=>fn(e)==="[object Map]",Bo=e=>fn(e)==="[object Set]",$=e=>typeof e=="function",re=e=>typeof e=="string",hr=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Mo=e=>J(e)&&$(e.then)&&$(e.catch),Fo=Object.prototype.toString,fn=e=>Fo.call(e),vi=e=>fn(e).slice(8,-1),$o=e=>fn(e)==="[object Object]",dr=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zt=lr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bi=/-(\w)/g,ke=hn(e=>e.replace(bi,(t,n)=>n?n.toUpperCase():"")),_i=/\B([A-Z])/g,wt=hn(e=>e.replace(_i,"-$1").toLowerCase()),dn=hn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Tn=hn(e=>e?`on${dn(e)}`:""),Bt=(e,t)=>!Object.is(e,t),Sn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},tn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},yi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let zr;const wi=()=>zr||(zr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ae;class Ei{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ae,!t&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ae;try{return Ae=this,t()}finally{Ae=n}}}on(){Ae=this}off(){Ae=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function xi(e,t=Ae){t&&t.active&&t.effects.push(e)}const pr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},No=e=>(e.w&qe)>0,Lo=e=>(e.n&qe)>0,Ci=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},Ti=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];No(o)&&!Lo(o)?o.delete(e):t[n++]=o,o.w&=~qe,o.n&=~qe}t.length=n}},Un=new WeakMap;let At=0,qe=1;const jn=30;let be;const ot=Symbol(""),Hn=Symbol("");class gr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xi(this,r)}run(){if(!this.active)return this.fn();let t=be,n=ze;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=be,be=this,ze=!0,qe=1<<++At,At<=jn?Ci(this):Wr(this),this.fn()}finally{At<=jn&&Ti(this),qe=1<<--At,be=this.parent,ze=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){be===this?this.deferStop=!0:this.active&&(Wr(this),this.onStop&&this.onStop(),this.active=!1)}}function Wr(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ze=!0;const Uo=[];function Et(){Uo.push(ze),ze=!1}function xt(){const e=Uo.pop();ze=e===void 0?!0:e}function pe(e,t,n){if(ze&&be){let r=Un.get(e);r||Un.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=pr()),jo(o)}}function jo(e,t){let n=!1;At<=jn?Lo(e)||(e.n|=qe,n=!No(e)):n=!e.has(be),n&&(e.add(be),be.deps.push(e))}function $e(e,t,n,r,o,s){const i=Un.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&F(e))i.forEach((l,u)=>{(u==="length"||u>=r)&&a.push(l)});else switch(n!==void 0&&a.push(i.get(n)),t){case"add":F(e)?dr(n)&&a.push(i.get("length")):(a.push(i.get(ot)),pt(e)&&a.push(i.get(Hn)));break;case"delete":F(e)||(a.push(i.get(ot)),pt(e)&&a.push(i.get(Hn)));break;case"set":pt(e)&&a.push(i.get(ot));break}if(a.length===1)a[0]&&zn(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);zn(pr(l))}}function zn(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Kr(r);for(const r of n)r.computed||Kr(r)}function Kr(e,t){(e!==be||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Si=lr("__proto__,__v_isRef,__isVue"),Ho=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(hr)),Ii=mr(),Ai=mr(!1,!0),Ri=mr(!0),Vr=Oi();function Oi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=z(this);for(let s=0,i=this.length;s<i;s++)pe(r,"get",s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(z)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Et();const r=z(this)[t].apply(this,n);return xt(),r}}),e}function mr(e=!1,t=!1){return function(r,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Vi:qo:t?Vo:Ko).get(r))return r;const i=F(r);if(!e&&i&&j(Vr,o))return Reflect.get(Vr,o,s);const a=Reflect.get(r,o,s);return(hr(o)?Ho.has(o):Si(o))||(e||pe(r,"get",o),t)?a:ne(a)?i&&dr(o)?a:a.value:J(a)?e?Yo(a):Mt(a):a}}const Di=zo(),ki=zo(!0);function zo(e=!1){return function(n,r,o,s){let i=n[r];if(bt(i)&&ne(i)&&!ne(o))return!1;if(!e&&(!nn(o)&&!bt(o)&&(i=z(i),o=z(o)),!F(n)&&ne(i)&&!ne(o)))return i.value=o,!0;const a=F(n)&&dr(r)?Number(r)<n.length:j(n,r),l=Reflect.set(n,r,o,s);return n===z(s)&&(a?Bt(o,i)&&$e(n,"set",r,o):$e(n,"add",r,o)),l}}function Pi(e,t){const n=j(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&$e(e,"delete",t,void 0),r}function Bi(e,t){const n=Reflect.has(e,t);return(!hr(t)||!Ho.has(t))&&pe(e,"has",t),n}function Mi(e){return pe(e,"iterate",F(e)?"length":ot),Reflect.ownKeys(e)}const Wo={get:Ii,set:Di,deleteProperty:Pi,has:Bi,ownKeys:Mi},Fi={get:Ri,set(e,t){return!0},deleteProperty(e,t){return!0}},$i=le({},Wo,{get:Ai,set:ki}),vr=e=>e,pn=e=>Reflect.getPrototypeOf(e);function Kt(e,t,n=!1,r=!1){e=e.__v_raw;const o=z(e),s=z(t);n||(t!==s&&pe(o,"get",t),pe(o,"get",s));const{has:i}=pn(o),a=r?vr:n?yr:Ft;if(i.call(o,t))return a(e.get(t));if(i.call(o,s))return a(e.get(s));e!==o&&e.get(t)}function Vt(e,t=!1){const n=this.__v_raw,r=z(n),o=z(e);return t||(e!==o&&pe(r,"has",e),pe(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function qt(e,t=!1){return e=e.__v_raw,!t&&pe(z(e),"iterate",ot),Reflect.get(e,"size",e)}function qr(e){e=z(e);const t=z(this);return pn(t).has.call(t,e)||(t.add(e),$e(t,"add",e,e)),this}function Yr(e,t){t=z(t);const n=z(this),{has:r,get:o}=pn(n);let s=r.call(n,e);s||(e=z(e),s=r.call(n,e));const i=o.call(n,e);return n.set(e,t),s?Bt(t,i)&&$e(n,"set",e,t):$e(n,"add",e,t),this}function Jr(e){const t=z(this),{has:n,get:r}=pn(t);let o=n.call(t,e);o||(e=z(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&$e(t,"delete",e,void 0),s}function Xr(){const e=z(this),t=e.size!==0,n=e.clear();return t&&$e(e,"clear",void 0,void 0),n}function Yt(e,t){return function(r,o){const s=this,i=s.__v_raw,a=z(i),l=t?vr:e?yr:Ft;return!e&&pe(a,"iterate",ot),i.forEach((u,d)=>r.call(o,l(u),l(d),s))}}function Jt(e,t,n){return function(...r){const o=this.__v_raw,s=z(o),i=pt(s),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=o[e](...r),d=n?vr:t?yr:Ft;return!t&&pe(s,"iterate",l?Hn:ot),{next(){const{value:p,done:v}=u.next();return v?{value:p,done:v}:{value:a?[d(p[0]),d(p[1])]:d(p),done:v}},[Symbol.iterator](){return this}}}}function Le(e){return function(...t){return e==="delete"?!1:this}}function Ni(){const e={get(s){return Kt(this,s)},get size(){return qt(this)},has:Vt,add:qr,set:Yr,delete:Jr,clear:Xr,forEach:Yt(!1,!1)},t={get(s){return Kt(this,s,!1,!0)},get size(){return qt(this)},has:Vt,add:qr,set:Yr,delete:Jr,clear:Xr,forEach:Yt(!1,!0)},n={get(s){return Kt(this,s,!0)},get size(){return qt(this,!0)},has(s){return Vt.call(this,s,!0)},add:Le("add"),set:Le("set"),delete:Le("delete"),clear:Le("clear"),forEach:Yt(!0,!1)},r={get(s){return Kt(this,s,!0,!0)},get size(){return qt(this,!0)},has(s){return Vt.call(this,s,!0)},add:Le("add"),set:Le("set"),delete:Le("delete"),clear:Le("clear"),forEach:Yt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Jt(s,!1,!1),n[s]=Jt(s,!0,!1),t[s]=Jt(s,!1,!0),r[s]=Jt(s,!0,!0)}),[e,n,t,r]}const[Li,Ui,ji,Hi]=Ni();function br(e,t){const n=t?e?Hi:ji:e?Ui:Li;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(j(n,o)&&o in r?n:r,o,s)}const zi={get:br(!1,!1)},Wi={get:br(!1,!0)},Ki={get:br(!0,!1)},Ko=new WeakMap,Vo=new WeakMap,qo=new WeakMap,Vi=new WeakMap;function qi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yi(e){return e.__v_skip||!Object.isExtensible(e)?0:qi(vi(e))}function Mt(e){return bt(e)?e:_r(e,!1,Wo,zi,Ko)}function Ji(e){return _r(e,!1,$i,Wi,Vo)}function Yo(e){return _r(e,!0,Fi,Ki,qo)}function _r(e,t,n,r,o){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=Yi(e);if(i===0)return e;const a=new Proxy(e,i===2?r:n);return o.set(e,a),a}function gt(e){return bt(e)?gt(e.__v_raw):!!(e&&e.__v_isReactive)}function bt(e){return!!(e&&e.__v_isReadonly)}function nn(e){return!!(e&&e.__v_isShallow)}function Jo(e){return gt(e)||bt(e)}function z(e){const t=e&&e.__v_raw;return t?z(t):e}function Xo(e){return tn(e,"__v_skip",!0),e}const Ft=e=>J(e)?Mt(e):e,yr=e=>J(e)?Yo(e):e;function Go(e){ze&&be&&(e=z(e),jo(e.dep||(e.dep=pr())))}function Zo(e,t){e=z(e),e.dep&&zn(e.dep)}function ne(e){return!!(e&&e.__v_isRef===!0)}function Rt(e){return Xi(e,!1)}function Xi(e,t){return ne(e)?e:new Gi(e,t)}class Gi{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:z(t),this._value=n?t:Ft(t)}get value(){return Go(this),this._value}set value(t){const n=this.__v_isShallow||nn(t)||bt(t);t=n?t:z(t),Bt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Ft(t),Zo(this))}}function Wn(e){return ne(e)?e.value:e}const Zi={get:(e,t,n)=>Wn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return ne(o)&&!ne(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Qo(e){return gt(e)?e:new Proxy(e,Zi)}function Qi(e){const t=F(e)?new Array(e.length):{};for(const n in e)t[n]=ta(e,n);return t}class ea{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function ta(e,t,n){const r=e[t];return ne(r)?r:new ea(e,t,n)}var es;class na{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[es]=!1,this._dirty=!0,this.effect=new gr(t,()=>{this._dirty||(this._dirty=!0,Zo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=z(this);return Go(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}es="__v_isReadonly";function ra(e,t,n=!1){let r,o;const s=$(e);return s?(r=e,o=Ee):(r=e.get,o=e.set),new na(r,o,s||!o,n)}function We(e,t,n,r){let o;try{o=r?e(...r):e()}catch(s){gn(s,t,n)}return o}function xe(e,t,n,r){if($(e)){const s=We(e,t,n,r);return s&&Mo(s)&&s.catch(i=>{gn(i,t,n)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(xe(e[s],t,n,r));return o}function gn(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,i,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){We(l,null,10,[e,i,a]);return}}oa(e,n,o,r)}function oa(e,t,n,r=!0){console.error(e)}let $t=!1,Kn=!1;const oe=[];let De=0;const mt=[];let Be=null,et=0;const ts=Promise.resolve();let wr=null;function sa(e){const t=wr||ts;return e?t.then(this?e.bind(this):e):t}function ia(e){let t=De+1,n=oe.length;for(;t<n;){const r=t+n>>>1;Nt(oe[r])<e?t=r+1:n=r}return t}function Er(e){(!oe.length||!oe.includes(e,$t&&e.allowRecurse?De+1:De))&&(e.id==null?oe.push(e):oe.splice(ia(e.id),0,e),ns())}function ns(){!$t&&!Kn&&(Kn=!0,wr=ts.then(os))}function aa(e){const t=oe.indexOf(e);t>De&&oe.splice(t,1)}function la(e){F(e)?mt.push(...e):(!Be||!Be.includes(e,e.allowRecurse?et+1:et))&&mt.push(e),ns()}function Gr(e,t=$t?De+1:0){for(;t<oe.length;t++){const n=oe[t];n&&n.pre&&(oe.splice(t,1),t--,n())}}function rs(e){if(mt.length){const t=[...new Set(mt)];if(mt.length=0,Be){Be.push(...t);return}for(Be=t,Be.sort((n,r)=>Nt(n)-Nt(r)),et=0;et<Be.length;et++)Be[et]();Be=null,et=0}}const Nt=e=>e.id==null?1/0:e.id,ca=(e,t)=>{const n=Nt(e)-Nt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function os(e){Kn=!1,$t=!0,oe.sort(ca);const t=Ee;try{for(De=0;De<oe.length;De++){const n=oe[De];n&&n.active!==!1&&We(n,null,14)}}finally{De=0,oe.length=0,rs(),$t=!1,wr=null,(oe.length||mt.length)&&os()}}function ua(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let o=n;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in r){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:p,trim:v}=r[d]||K;v&&(o=n.map(b=>b.trim())),p&&(o=n.map(yi))}let a,l=r[a=Tn(t)]||r[a=Tn(ke(t))];!l&&s&&(l=r[a=Tn(wt(t))]),l&&xe(l,e,6,o);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,xe(u,e,6,o)}}function ss(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let i={},a=!1;if(!$(e)){const l=u=>{const d=ss(u,t,!0);d&&(a=!0,le(i,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(J(e)&&r.set(e,null),null):(F(s)?s.forEach(l=>i[l]=null):le(i,s),J(e)&&r.set(e,i),i)}function mn(e,t){return!e||!un(t)?!1:(t=t.slice(2).replace(/Once$/,""),j(e,t[0].toLowerCase()+t.slice(1))||j(e,wt(t))||j(e,t))}let _e=null,is=null;function rn(e){const t=_e;return _e=e,is=e&&e.type.__scopeId||null,t}function fa(e,t=_e,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&ao(-1);const s=rn(t);let i;try{i=e(...o)}finally{rn(s),r._d&&ao(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function In(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:d,renderCache:p,data:v,setupState:b,ctx:S,inheritAttrs:C}=e;let A,k;const Z=rn(e);try{if(n.shapeFlag&4){const L=o||r;A=Oe(d.call(L,L,p,s,b,v,S)),k=l}else{const L=t;A=Oe(L.length>1?L(s,{attrs:l,slots:a,emit:u}):L(s,null)),k=t.props?l:ha(l)}}catch(L){Dt.length=0,gn(L,e,1),A=ue(at)}let H=A;if(k&&C!==!1){const L=Object.keys(k),{shapeFlag:ee}=H;L.length&&ee&7&&(i&&L.some(ur)&&(k=da(k,i)),H=_t(H,k))}return n.dirs&&(H=_t(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),A=H,rn(Z),A}const ha=e=>{let t;for(const n in e)(n==="class"||n==="style"||un(n))&&((t||(t={}))[n]=e[n]);return t},da=(e,t)=>{const n={};for(const r in e)(!ur(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function pa(e,t,n){const{props:r,children:o,component:s}=e,{props:i,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Zr(r,i,u):!!i;if(l&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const v=d[p];if(i[v]!==r[v]&&!mn(u,v))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?Zr(r,i,u):!0:!!i;return!1}function Zr(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!mn(n,s))return!0}return!1}function ga({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ma=e=>e.__isSuspense;function va(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):la(e)}function ba(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function An(e,t,n=!1){const r=te||_e;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&$(t)?t.call(r.proxy):t}}const Qr={};function Rn(e,t,n){return as(e,t,n)}function as(e,t,{immediate:n,deep:r,flush:o,onTrack:s,onTrigger:i}=K){const a=te;let l,u=!1,d=!1;if(ne(e)?(l=()=>e.value,u=nn(e)):gt(e)?(l=()=>e,r=!0):F(e)?(d=!0,u=e.some(k=>gt(k)||nn(k)),l=()=>e.map(k=>{if(ne(k))return k.value;if(gt(k))return rt(k);if($(k))return We(k,a,2)})):$(e)?t?l=()=>We(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return p&&p(),xe(e,a,3,[v])}:l=Ee,t&&r){const k=l;l=()=>rt(k())}let p,v=k=>{p=A.onStop=()=>{We(k,a,4)}};if(Ut)return v=Ee,t?n&&xe(t,a,3,[l(),d?[]:void 0,v]):l(),Ee;let b=d?[]:Qr;const S=()=>{if(!!A.active)if(t){const k=A.run();(r||u||(d?k.some((Z,H)=>Bt(Z,b[H])):Bt(k,b)))&&(p&&p(),xe(t,a,3,[k,b===Qr?void 0:b,v]),b=k)}else A.run()};S.allowRecurse=!!t;let C;o==="sync"?C=S:o==="post"?C=()=>ce(S,a&&a.suspense):(S.pre=!0,a&&(S.id=a.uid),C=()=>Er(S));const A=new gr(l,C);return t?n?S():b=A.run():o==="post"?ce(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&fr(a.scope.effects,A)}}function _a(e,t,n){const r=this.proxy,o=re(e)?e.includes(".")?ls(r,e):()=>r[e]:e.bind(r,r);let s;$(t)?s=t:(s=t.handler,n=t);const i=te;yt(this);const a=as(o,s.bind(r),n);return i?yt(i):st(),a}function ls(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function rt(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ne(e))rt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)rt(e[n],t);else if(Bo(e)||pt(e))e.forEach(n=>{rt(n,t)});else if($o(e))for(const n in e)rt(e[n],t);return e}function xr(e){return $(e)?{setup:e,name:e.name}:e}const Qt=e=>!!e.type.__asyncLoader,cs=e=>e.type.__isKeepAlive;function ya(e,t){us(e,"a",t)}function wa(e,t){us(e,"da",t)}function us(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(vn(t,r,n),n){let o=n.parent;for(;o&&o.parent;)cs(o.parent.vnode)&&Ea(r,t,n,o),o=o.parent}}function Ea(e,t,n,r){const o=vn(t,e,r,!0);ds(()=>{fr(r[t],o)},n)}function vn(e,t,n=te,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Et(),yt(n);const a=xe(t,n,e,i);return st(),xt(),a});return r?o.unshift(s):o.push(s),s}}const Ne=e=>(t,n=te)=>(!Ut||e==="sp")&&vn(e,(...r)=>t(...r),n),xa=Ne("bm"),fs=Ne("m"),Ca=Ne("bu"),hs=Ne("u"),Ta=Ne("bum"),ds=Ne("um"),Sa=Ne("sp"),Ia=Ne("rtg"),Aa=Ne("rtc");function Ra(e,t=te){vn("ec",e,t)}function Oa(e,t){const n=_e;if(n===null)return e;const r=_n(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,u=K]=t[s];$(i)&&(i={mounted:i,updated:i}),i.deep&&rt(a),o.push({dir:i,instance:r,value:a,oldValue:void 0,arg:l,modifiers:u})}return e}function Xe(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];s&&(a.oldValue=s[i].value);let l=a.dir[r];l&&(Et(),xe(l,n,8,[e.el,a,e,t]),xt())}}const ps="components",Da="directives";function ka(e,t){return gs(ps,e,!0,t)||e}const Pa=Symbol();function Ba(e){return gs(Da,e)}function gs(e,t,n=!0,r=!1){const o=_e||te;if(o){const s=o.type;if(e===ps){const a=cl(s,!1);if(a&&(a===t||a===ke(t)||a===dn(ke(t))))return s}const i=eo(o[e]||s[e],t)||eo(o.appContext[e],t);return!i&&r?s:i}}function eo(e,t){return e&&(e[t]||e[ke(t)]||e[dn(ke(t))])}const Vn=e=>e?Ss(e)?_n(e)||e.proxy:Vn(e.parent):null,on=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Vn(e.parent),$root:e=>Vn(e.root),$emit:e=>e.emit,$options:e=>Cr(e),$forceUpdate:e=>e.f||(e.f=()=>Er(e.update)),$nextTick:e=>e.n||(e.n=sa.bind(e.proxy)),$watch:e=>_a.bind(e)}),Ma={get({_:e},t){const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const b=i[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(r!==K&&j(r,t))return i[t]=1,r[t];if(o!==K&&j(o,t))return i[t]=2,o[t];if((u=e.propsOptions[0])&&j(u,t))return i[t]=3,s[t];if(n!==K&&j(n,t))return i[t]=4,n[t];qn&&(i[t]=0)}}const d=on[t];let p,v;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(n!==K&&j(n,t))return i[t]=4,n[t];if(v=l.config.globalProperties,j(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return o!==K&&j(o,t)?(o[t]=n,!0):r!==K&&j(r,t)?(r[t]=n,!0):j(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let a;return!!n[i]||e!==K&&j(e,i)||t!==K&&j(t,i)||(a=s[0])&&j(a,i)||j(r,i)||j(on,i)||j(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:j(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let qn=!0;function Fa(e){const t=Cr(e),n=e.proxy,r=e.ctx;qn=!1,t.beforeCreate&&to(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:a,provide:l,inject:u,created:d,beforeMount:p,mounted:v,beforeUpdate:b,updated:S,activated:C,deactivated:A,beforeDestroy:k,beforeUnmount:Z,destroyed:H,unmounted:L,render:ee,renderTracked:me,renderTriggered:B,errorCaptured:T,serverPrefetch:R,expose:P,inheritAttrs:N,components:Ce,directives:ut,filters:wn}=t;if(u&&$a(u,r,null,e.appContext.config.unwrapInjectedRef),i)for(const X in i){const V=i[X];$(V)&&(r[X]=V.bind(n))}if(o){const X=o.call(n,n);J(X)&&(e.data=Mt(X))}if(qn=!0,s)for(const X in s){const V=s[X],Ye=$(V)?V.bind(n,n):$(V.get)?V.get.bind(n,n):Ee,zt=!$(V)&&$(V.set)?V.set.bind(n):Ee,Je=ge({get:Ye,set:zt});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Te=>Je.value=Te})}if(a)for(const X in a)ms(a[X],r,n,X);if(l){const X=$(l)?l.call(n):l;Reflect.ownKeys(X).forEach(V=>{ba(V,X[V])})}d&&to(d,e,"c");function se(X,V){F(V)?V.forEach(Ye=>X(Ye.bind(n))):V&&X(V.bind(n))}if(se(xa,p),se(fs,v),se(Ca,b),se(hs,S),se(ya,C),se(wa,A),se(Ra,T),se(Aa,me),se(Ia,B),se(Ta,Z),se(ds,L),se(Sa,R),F(P))if(P.length){const X=e.exposed||(e.exposed={});P.forEach(V=>{Object.defineProperty(X,V,{get:()=>n[V],set:Ye=>n[V]=Ye})})}else e.exposed||(e.exposed={});ee&&e.render===Ee&&(e.render=ee),N!=null&&(e.inheritAttrs=N),Ce&&(e.components=Ce),ut&&(e.directives=ut)}function $a(e,t,n=Ee,r=!1){F(e)&&(e=Yn(e));for(const o in e){const s=e[o];let i;J(s)?"default"in s?i=An(s.from||o,s.default,!0):i=An(s.from||o):i=An(s),ne(i)&&r?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[o]=i}}function to(e,t,n){xe(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ms(e,t,n,r){const o=r.includes(".")?ls(n,r):()=>n[r];if(re(e)){const s=t[e];$(s)&&Rn(o,s)}else if($(e))Rn(o,e.bind(n));else if(J(e))if(F(e))e.forEach(s=>ms(s,t,n,r));else{const s=$(e.handler)?e.handler.bind(n):t[e.handler];$(s)&&Rn(o,s,e)}}function Cr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let l;return a?l=a:!o.length&&!n&&!r?l=t:(l={},o.length&&o.forEach(u=>sn(l,u,i,!0)),sn(l,t,i)),J(t)&&s.set(t,l),l}function sn(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&sn(e,s,n,!0),o&&o.forEach(i=>sn(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=Na[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Na={data:no,props:Ze,emits:Ze,methods:Ze,computed:Ze,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:Ze,directives:Ze,watch:Ua,provide:no,inject:La};function no(e,t){return t?e?function(){return le($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function La(e,t){return Ze(Yn(e),Yn(t))}function Yn(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ae(e,t){return e?[...new Set([].concat(e,t))]:t}function Ze(e,t){return e?le(le(Object.create(null),e),t):t}function Ua(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const r in t)n[r]=ae(e[r],t[r]);return n}function ja(e,t,n,r=!1){const o={},s={};tn(s,bn,1),e.propsDefaults=Object.create(null),vs(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=r?o:Ji(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Ha(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,a=z(o),[l]=e.propsOptions;let u=!1;if((r||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let v=d[p];if(mn(e.emitsOptions,v))continue;const b=t[v];if(l)if(j(s,v))b!==s[v]&&(s[v]=b,u=!0);else{const S=ke(v);o[S]=Jn(l,a,S,b,e,!1)}else b!==s[v]&&(s[v]=b,u=!0)}}}else{vs(e,t,o,s)&&(u=!0);let d;for(const p in a)(!t||!j(t,p)&&((d=wt(p))===p||!j(t,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(o[p]=Jn(l,a,p,void 0,e,!0)):delete o[p]);if(s!==a)for(const p in s)(!t||!j(t,p)&&!0)&&(delete s[p],u=!0)}u&&$e(e,"set","$attrs")}function vs(e,t,n,r){const[o,s]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(Zt(l))continue;const u=t[l];let d;o&&j(o,d=ke(l))?!s||!s.includes(d)?n[d]=u:(a||(a={}))[d]=u:mn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,i=!0)}if(s){const l=z(n),u=a||K;for(let d=0;d<s.length;d++){const p=s[d];n[p]=Jn(o,l,p,u[p],e,!j(u,p))}}return i}function Jn(e,t,n,r,o,s){const i=e[n];if(i!=null){const a=j(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&$(l)){const{propsDefaults:u}=o;n in u?r=u[n]:(yt(o),r=u[n]=l.call(null,t),st())}else r=l}i[0]&&(s&&!a?r=!1:i[1]&&(r===""||r===wt(n))&&(r=!0))}return r}function bs(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,i={},a=[];let l=!1;if(!$(e)){const d=p=>{l=!0;const[v,b]=bs(p,t,!0);le(i,v),b&&a.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!s&&!l)return J(e)&&r.set(e,dt),dt;if(F(s))for(let d=0;d<s.length;d++){const p=ke(s[d]);ro(p)&&(i[p]=K)}else if(s)for(const d in s){const p=ke(d);if(ro(p)){const v=s[d],b=i[p]=F(v)||$(v)?{type:v}:v;if(b){const S=io(Boolean,b.type),C=io(String,b.type);b[0]=S>-1,b[1]=C<0||S<C,(S>-1||j(b,"default"))&&a.push(p)}}}const u=[i,a];return J(e)&&r.set(e,u),u}function ro(e){return e[0]!=="$"}function oo(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function so(e,t){return oo(e)===oo(t)}function io(e,t){return F(t)?t.findIndex(n=>so(n,e)):$(t)&&so(t,e)?0:-1}const _s=e=>e[0]==="_"||e==="$stable",Tr=e=>F(e)?e.map(Oe):[Oe(e)],za=(e,t,n)=>{if(t._n)return t;const r=fa((...o)=>Tr(t(...o)),n);return r._c=!1,r},ys=(e,t,n)=>{const r=e._ctx;for(const o in e){if(_s(o))continue;const s=e[o];if($(s))t[o]=za(o,s,r);else if(s!=null){const i=Tr(s);t[o]=()=>i}}},ws=(e,t)=>{const n=Tr(t);e.slots.default=()=>n},Wa=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=z(t),tn(t,"_",n)):ys(t,e.slots={})}else e.slots={},t&&ws(e,t);tn(e.slots,bn,1)},Ka=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,i=K;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(le(o,t),!n&&a===1&&delete o._):(s=!t.$stable,ys(t,o)),i=t}else t&&(ws(e,t),i={default:1});if(s)for(const a in o)!_s(a)&&!(a in i)&&delete o[a]};function Es(){return{app:null,config:{isNativeTag:pi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Va=0;function qa(e,t){return function(r,o=null){$(r)||(r=Object.assign({},r)),o!=null&&!J(o)&&(o=null);const s=Es(),i=new Set;let a=!1;const l=s.app={_uid:Va++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:fl,get config(){return s.config},set config(u){},use(u,...d){return i.has(u)||(u&&$(u.install)?(i.add(u),u.install(l,...d)):$(u)&&(i.add(u),u(l,...d))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,d){return d?(s.components[u]=d,l):s.components[u]},directive(u,d){return d?(s.directives[u]=d,l):s.directives[u]},mount(u,d,p){if(!a){const v=ue(r,o);return v.appContext=s,d&&t?t(v,u):e(v,u,p),a=!0,l._container=u,u.__vue_app__=l,_n(v.component)||v.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return s.provides[u]=d,l}};return l}}function Xn(e,t,n,r,o=!1){if(F(e)){e.forEach((v,b)=>Xn(v,t&&(F(t)?t[b]:t),n,r,o));return}if(Qt(r)&&!o)return;const s=r.shapeFlag&4?_n(r.component)||r.component.proxy:r.el,i=o?null:s,{i:a,r:l}=e,u=t&&t.r,d=a.refs===K?a.refs={}:a.refs,p=a.setupState;if(u!=null&&u!==l&&(re(u)?(d[u]=null,j(p,u)&&(p[u]=null)):ne(u)&&(u.value=null)),$(l))We(l,a,12,[i,d]);else{const v=re(l),b=ne(l);if(v||b){const S=()=>{if(e.f){const C=v?j(p,l)?p[l]:d[l]:l.value;o?F(C)&&fr(C,s):F(C)?C.includes(s)||C.push(s):v?(d[l]=[s],j(p,l)&&(p[l]=d[l])):(l.value=[s],e.k&&(d[e.k]=l.value))}else v?(d[l]=i,j(p,l)&&(p[l]=i)):b&&(l.value=i,e.k&&(d[e.k]=i))};i?(S.id=-1,ce(S,n)):S()}}}const ce=va;function Ya(e){return Ja(e)}function Ja(e,t){const n=wi();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:i,createText:a,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:v,setScopeId:b=Ee,insertStaticContent:S}=e,C=(c,f,h,m=null,g=null,w=null,x=!1,y=null,E=!!f.dynamicChildren)=>{if(c===f)return;c&&!St(c,f)&&(m=Wt(c),Te(c,g,w,!0),c=null),f.patchFlag===-2&&(E=!1,f.dynamicChildren=null);const{type:_,ref:O,shapeFlag:I}=f;switch(_){case Sr:A(c,f,h,m);break;case at:k(c,f,h,m);break;case On:c==null&&Z(f,h,m,x);break;case Me:Ce(c,f,h,m,g,w,x,y,E);break;default:I&1?ee(c,f,h,m,g,w,x,y,E):I&6?ut(c,f,h,m,g,w,x,y,E):(I&64||I&128)&&_.process(c,f,h,m,g,w,x,y,E,ft)}O!=null&&g&&Xn(O,c&&c.ref,w,f||c,!f)},A=(c,f,h,m)=>{if(c==null)r(f.el=a(f.children),h,m);else{const g=f.el=c.el;f.children!==c.children&&u(g,f.children)}},k=(c,f,h,m)=>{c==null?r(f.el=l(f.children||""),h,m):f.el=c.el},Z=(c,f,h,m)=>{[c.el,c.anchor]=S(c.children,f,h,m,c.el,c.anchor)},H=({el:c,anchor:f},h,m)=>{let g;for(;c&&c!==f;)g=v(c),r(c,h,m),c=g;r(f,h,m)},L=({el:c,anchor:f})=>{let h;for(;c&&c!==f;)h=v(c),o(c),c=h;o(f)},ee=(c,f,h,m,g,w,x,y,E)=>{x=x||f.type==="svg",c==null?me(f,h,m,g,w,x,y,E):R(c,f,g,w,x,y,E)},me=(c,f,h,m,g,w,x,y)=>{let E,_;const{type:O,props:I,shapeFlag:D,transition:M,dirs:U}=c;if(E=c.el=i(c.type,w,I&&I.is,I),D&8?d(E,c.children):D&16&&T(c.children,E,null,m,g,w&&O!=="foreignObject",x,y),U&&Xe(c,null,m,"created"),I){for(const W in I)W!=="value"&&!Zt(W)&&s(E,W,null,I[W],w,c.children,m,g,Pe);"value"in I&&s(E,"value",null,I.value),(_=I.onVnodeBeforeMount)&&Ie(_,m,c)}B(E,c,c.scopeId,x,m),U&&Xe(c,null,m,"beforeMount");const q=(!g||g&&!g.pendingBranch)&&M&&!M.persisted;q&&M.beforeEnter(E),r(E,f,h),((_=I&&I.onVnodeMounted)||q||U)&&ce(()=>{_&&Ie(_,m,c),q&&M.enter(E),U&&Xe(c,null,m,"mounted")},g)},B=(c,f,h,m,g)=>{if(h&&b(c,h),m)for(let w=0;w<m.length;w++)b(c,m[w]);if(g){let w=g.subTree;if(f===w){const x=g.vnode;B(c,x,x.scopeId,x.slotScopeIds,g.parent)}}},T=(c,f,h,m,g,w,x,y,E=0)=>{for(let _=E;_<c.length;_++){const O=c[_]=y?je(c[_]):Oe(c[_]);C(null,O,f,h,m,g,w,x,y)}},R=(c,f,h,m,g,w,x)=>{const y=f.el=c.el;let{patchFlag:E,dynamicChildren:_,dirs:O}=f;E|=c.patchFlag&16;const I=c.props||K,D=f.props||K;let M;h&&Ge(h,!1),(M=D.onVnodeBeforeUpdate)&&Ie(M,h,f,c),O&&Xe(f,c,h,"beforeUpdate"),h&&Ge(h,!0);const U=g&&f.type!=="foreignObject";if(_?P(c.dynamicChildren,_,y,h,m,U,w):x||V(c,f,y,null,h,m,U,w,!1),E>0){if(E&16)N(y,f,I,D,h,m,g);else if(E&2&&I.class!==D.class&&s(y,"class",null,D.class,g),E&4&&s(y,"style",I.style,D.style,g),E&8){const q=f.dynamicProps;for(let W=0;W<q.length;W++){const Q=q[W],ve=I[Q],ht=D[Q];(ht!==ve||Q==="value")&&s(y,Q,ve,ht,g,c.children,h,m,Pe)}}E&1&&c.children!==f.children&&d(y,f.children)}else!x&&_==null&&N(y,f,I,D,h,m,g);((M=D.onVnodeUpdated)||O)&&ce(()=>{M&&Ie(M,h,f,c),O&&Xe(f,c,h,"updated")},m)},P=(c,f,h,m,g,w,x)=>{for(let y=0;y<f.length;y++){const E=c[y],_=f[y],O=E.el&&(E.type===Me||!St(E,_)||E.shapeFlag&70)?p(E.el):h;C(E,_,O,null,m,g,w,x,!0)}},N=(c,f,h,m,g,w,x)=>{if(h!==m){if(h!==K)for(const y in h)!Zt(y)&&!(y in m)&&s(c,y,h[y],null,x,f.children,g,w,Pe);for(const y in m){if(Zt(y))continue;const E=m[y],_=h[y];E!==_&&y!=="value"&&s(c,y,_,E,x,f.children,g,w,Pe)}"value"in m&&s(c,"value",h.value,m.value)}},Ce=(c,f,h,m,g,w,x,y,E)=>{const _=f.el=c?c.el:a(""),O=f.anchor=c?c.anchor:a("");let{patchFlag:I,dynamicChildren:D,slotScopeIds:M}=f;M&&(y=y?y.concat(M):M),c==null?(r(_,h,m),r(O,h,m),T(f.children,h,O,g,w,x,y,E)):I>0&&I&64&&D&&c.dynamicChildren?(P(c.dynamicChildren,D,h,g,w,x,y),(f.key!=null||g&&f===g.subTree)&&xs(c,f,!0)):V(c,f,h,O,g,w,x,y,E)},ut=(c,f,h,m,g,w,x,y,E)=>{f.slotScopeIds=y,c==null?f.shapeFlag&512?g.ctx.activate(f,h,m,x,E):wn(f,h,m,g,w,x,E):Fr(c,f,E)},wn=(c,f,h,m,g,w,x)=>{const y=c.component=ol(c,m,g);if(cs(c)&&(y.ctx.renderer=ft),sl(y),y.asyncDep){if(g&&g.registerDep(y,se),!c.el){const E=y.subTree=ue(at);k(null,E,f,h)}return}se(y,c,f,h,g,w,x)},Fr=(c,f,h)=>{const m=f.component=c.component;if(pa(c,f,h))if(m.asyncDep&&!m.asyncResolved){X(m,f,h);return}else m.next=f,aa(m.update),m.update();else f.el=c.el,m.vnode=f},se=(c,f,h,m,g,w,x)=>{const y=()=>{if(c.isMounted){let{next:O,bu:I,u:D,parent:M,vnode:U}=c,q=O,W;Ge(c,!1),O?(O.el=U.el,X(c,O,x)):O=U,I&&Sn(I),(W=O.props&&O.props.onVnodeBeforeUpdate)&&Ie(W,M,O,U),Ge(c,!0);const Q=In(c),ve=c.subTree;c.subTree=Q,C(ve,Q,p(ve.el),Wt(ve),c,g,w),O.el=Q.el,q===null&&ga(c,Q.el),D&&ce(D,g),(W=O.props&&O.props.onVnodeUpdated)&&ce(()=>Ie(W,M,O,U),g)}else{let O;const{el:I,props:D}=f,{bm:M,m:U,parent:q}=c,W=Qt(f);if(Ge(c,!1),M&&Sn(M),!W&&(O=D&&D.onVnodeBeforeMount)&&Ie(O,q,f),Ge(c,!0),I&&xn){const Q=()=>{c.subTree=In(c),xn(I,c.subTree,c,g,null)};W?f.type.__asyncLoader().then(()=>!c.isUnmounted&&Q()):Q()}else{const Q=c.subTree=In(c);C(null,Q,h,m,c,g,w),f.el=Q.el}if(U&&ce(U,g),!W&&(O=D&&D.onVnodeMounted)){const Q=f;ce(()=>Ie(O,q,Q),g)}(f.shapeFlag&256||q&&Qt(q.vnode)&&q.vnode.shapeFlag&256)&&c.a&&ce(c.a,g),c.isMounted=!0,f=h=m=null}},E=c.effect=new gr(y,()=>Er(_),c.scope),_=c.update=()=>E.run();_.id=c.uid,Ge(c,!0),_()},X=(c,f,h)=>{f.component=c;const m=c.vnode.props;c.vnode=f,c.next=null,Ha(c,f.props,m,h),Ka(c,f.children,h),Et(),Gr(),xt()},V=(c,f,h,m,g,w,x,y,E=!1)=>{const _=c&&c.children,O=c?c.shapeFlag:0,I=f.children,{patchFlag:D,shapeFlag:M}=f;if(D>0){if(D&128){zt(_,I,h,m,g,w,x,y,E);return}else if(D&256){Ye(_,I,h,m,g,w,x,y,E);return}}M&8?(O&16&&Pe(_,g,w),I!==_&&d(h,I)):O&16?M&16?zt(_,I,h,m,g,w,x,y,E):Pe(_,g,w,!0):(O&8&&d(h,""),M&16&&T(I,h,m,g,w,x,y,E))},Ye=(c,f,h,m,g,w,x,y,E)=>{c=c||dt,f=f||dt;const _=c.length,O=f.length,I=Math.min(_,O);let D;for(D=0;D<I;D++){const M=f[D]=E?je(f[D]):Oe(f[D]);C(c[D],M,h,null,g,w,x,y,E)}_>O?Pe(c,g,w,!0,!1,I):T(f,h,m,g,w,x,y,E,I)},zt=(c,f,h,m,g,w,x,y,E)=>{let _=0;const O=f.length;let I=c.length-1,D=O-1;for(;_<=I&&_<=D;){const M=c[_],U=f[_]=E?je(f[_]):Oe(f[_]);if(St(M,U))C(M,U,h,null,g,w,x,y,E);else break;_++}for(;_<=I&&_<=D;){const M=c[I],U=f[D]=E?je(f[D]):Oe(f[D]);if(St(M,U))C(M,U,h,null,g,w,x,y,E);else break;I--,D--}if(_>I){if(_<=D){const M=D+1,U=M<O?f[M].el:m;for(;_<=D;)C(null,f[_]=E?je(f[_]):Oe(f[_]),h,U,g,w,x,y,E),_++}}else if(_>D)for(;_<=I;)Te(c[_],g,w,!0),_++;else{const M=_,U=_,q=new Map;for(_=U;_<=D;_++){const fe=f[_]=E?je(f[_]):Oe(f[_]);fe.key!=null&&q.set(fe.key,_)}let W,Q=0;const ve=D-U+1;let ht=!1,Lr=0;const Tt=new Array(ve);for(_=0;_<ve;_++)Tt[_]=0;for(_=M;_<=I;_++){const fe=c[_];if(Q>=ve){Te(fe,g,w,!0);continue}let Se;if(fe.key!=null)Se=q.get(fe.key);else for(W=U;W<=D;W++)if(Tt[W-U]===0&&St(fe,f[W])){Se=W;break}Se===void 0?Te(fe,g,w,!0):(Tt[Se-U]=_+1,Se>=Lr?Lr=Se:ht=!0,C(fe,f[Se],h,null,g,w,x,y,E),Q++)}const Ur=ht?Xa(Tt):dt;for(W=Ur.length-1,_=ve-1;_>=0;_--){const fe=U+_,Se=f[fe],jr=fe+1<O?f[fe+1].el:m;Tt[_]===0?C(null,Se,h,jr,g,w,x,y,E):ht&&(W<0||_!==Ur[W]?Je(Se,h,jr,2):W--)}}},Je=(c,f,h,m,g=null)=>{const{el:w,type:x,transition:y,children:E,shapeFlag:_}=c;if(_&6){Je(c.component.subTree,f,h,m);return}if(_&128){c.suspense.move(f,h,m);return}if(_&64){x.move(c,f,h,ft);return}if(x===Me){r(w,f,h);for(let I=0;I<E.length;I++)Je(E[I],f,h,m);r(c.anchor,f,h);return}if(x===On){H(c,f,h);return}if(m!==2&&_&1&&y)if(m===0)y.beforeEnter(w),r(w,f,h),ce(()=>y.enter(w),g);else{const{leave:I,delayLeave:D,afterLeave:M}=y,U=()=>r(w,f,h),q=()=>{I(w,()=>{U(),M&&M()})};D?D(w,U,q):q()}else r(w,f,h)},Te=(c,f,h,m=!1,g=!1)=>{const{type:w,props:x,ref:y,children:E,dynamicChildren:_,shapeFlag:O,patchFlag:I,dirs:D}=c;if(y!=null&&Xn(y,null,h,c,!0),O&256){f.ctx.deactivate(c);return}const M=O&1&&D,U=!Qt(c);let q;if(U&&(q=x&&x.onVnodeBeforeUnmount)&&Ie(q,f,c),O&6)ni(c.component,h,m);else{if(O&128){c.suspense.unmount(h,m);return}M&&Xe(c,null,f,"beforeUnmount"),O&64?c.type.remove(c,f,h,g,ft,m):_&&(w!==Me||I>0&&I&64)?Pe(_,f,h,!1,!0):(w===Me&&I&384||!g&&O&16)&&Pe(E,f,h),m&&$r(c)}(U&&(q=x&&x.onVnodeUnmounted)||M)&&ce(()=>{q&&Ie(q,f,c),M&&Xe(c,null,f,"unmounted")},h)},$r=c=>{const{type:f,el:h,anchor:m,transition:g}=c;if(f===Me){ti(h,m);return}if(f===On){L(c);return}const w=()=>{o(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:x,delayLeave:y}=g,E=()=>x(h,w);y?y(c.el,w,E):E()}else w()},ti=(c,f)=>{let h;for(;c!==f;)h=v(c),o(c),c=h;o(f)},ni=(c,f,h)=>{const{bum:m,scope:g,update:w,subTree:x,um:y}=c;m&&Sn(m),g.stop(),w&&(w.active=!1,Te(x,c,f,h)),y&&ce(y,f),ce(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Pe=(c,f,h,m=!1,g=!1,w=0)=>{for(let x=w;x<c.length;x++)Te(c[x],f,h,m,g)},Wt=c=>c.shapeFlag&6?Wt(c.component.subTree):c.shapeFlag&128?c.suspense.next():v(c.anchor||c.el),Nr=(c,f,h)=>{c==null?f._vnode&&Te(f._vnode,null,null,!0):C(f._vnode||null,c,f,null,null,null,h),Gr(),rs(),f._vnode=c},ft={p:C,um:Te,m:Je,r:$r,mt:wn,mc:T,pc:V,pbc:P,n:Wt,o:e};let En,xn;return t&&([En,xn]=t(ft)),{render:Nr,hydrate:En,createApp:qa(Nr,En)}}function Ge({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function xs(e,t,n=!1){const r=e.children,o=t.children;if(F(r)&&F(o))for(let s=0;s<r.length;s++){const i=r[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=je(o[s]),a.el=i.el),n||xs(i,a))}}function Xa(e){const t=e.slice(),n=[0];let r,o,s,i,a;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(o=n[n.length-1],e[o]<u){t[r]=o,n.push(r);continue}for(s=0,i=n.length-1;s<i;)a=s+i>>1,e[n[a]]<u?s=a+1:i=a;u<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}const Ga=e=>e.__isTeleport,Me=Symbol(void 0),Sr=Symbol(void 0),at=Symbol(void 0),On=Symbol(void 0),Dt=[];let ye=null;function he(e=!1){Dt.push(ye=e?null:[])}function Za(){Dt.pop(),ye=Dt[Dt.length-1]||null}let Lt=1;function ao(e){Lt+=e}function Cs(e){return e.dynamicChildren=Lt>0?ye||dt:null,Za(),Lt>0&&ye&&ye.push(e),e}function Re(e,t,n,r,o,s){return Cs(Fe(e,t,n,r,o,s,!0))}function Gn(e,t,n,r,o){return Cs(ue(e,t,n,r,o,!0))}function Zn(e){return e?e.__v_isVNode===!0:!1}function St(e,t){return e.type===t.type&&e.key===t.key}const bn="__vInternal",Ts=({key:e})=>e!=null?e:null,en=({ref:e,ref_key:t,ref_for:n})=>e!=null?re(e)||ne(e)||$(e)?{i:_e,r:e,k:t,f:!!n}:e:null;function Fe(e,t=null,n=null,r=0,o=null,s=e===Me?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ts(t),ref:t&&en(t),scopeId:is,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return a?(Ir(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),Lt>0&&!i&&ye&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ye.push(l),l}const ue=Qa;function Qa(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===Pa)&&(e=at),Zn(e)){const a=_t(e,t,!0);return n&&Ir(a,n),Lt>0&&!s&&ye&&(a.shapeFlag&6?ye[ye.indexOf(e)]=a:ye.push(a)),a.patchFlag|=-2,a}if(ul(e)&&(e=e.__vccOpts),t){t=el(t);let{class:a,style:l}=t;a&&!re(a)&&(t.class=Pt(a)),J(l)&&(Jo(l)&&!F(l)&&(l=le({},l)),t.style=cr(l))}const i=re(e)?1:ma(e)?128:Ga(e)?64:J(e)?4:$(e)?2:0;return Fe(e,t,n,r,o,i,s,!0)}function el(e){return e?Jo(e)||bn in e?le({},e):e:null}function _t(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:i}=e,a=t?tl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Ts(a),ref:t&&t.ref?n&&o?F(o)?o.concat(en(t)):[o,en(t)]:en(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Me?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_t(e.ssContent),ssFallback:e.ssFallback&&_t(e.ssFallback),el:e.el,anchor:e.anchor}}function Qn(e=" ",t=0){return ue(Sr,null,e,t)}function Ue(e="",t=!1){return t?(he(),Gn(at,null,e)):ue(at,null,e)}function Oe(e){return e==null||typeof e=="boolean"?ue(at):F(e)?ue(Me,null,e.slice()):typeof e=="object"?je(e):ue(Sr,null,String(e))}function je(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:_t(e)}function Ir(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Ir(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(bn in t)?t._ctx=_e:o===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),r&64?(n=16,t=[Qn(t)]):n=8);e.children=t,e.shapeFlag|=n}function tl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=Pt([t.class,r.class]));else if(o==="style")t.style=cr([t.style,r.style]);else if(un(o)){const s=t[o],i=r[o];i&&s!==i&&!(F(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}function Ie(e,t,n,r=null){xe(e,t,7,[n,r])}const nl=Es();let rl=0;function ol(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||nl,s={uid:rl++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ei(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bs(r,o),emitsOptions:ss(r,o),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=ua.bind(null,s),e.ce&&e.ce(s),s}let te=null;const yt=e=>{te=e,e.scope.on()},st=()=>{te&&te.scope.off(),te=null};function Ss(e){return e.vnode.shapeFlag&4}let Ut=!1;function sl(e,t=!1){Ut=t;const{props:n,children:r}=e.vnode,o=Ss(e);ja(e,n,o,t),Wa(e,r);const s=o?il(e,t):void 0;return Ut=!1,s}function il(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Xo(new Proxy(e.ctx,Ma));const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?ll(e):null;yt(e),Et();const s=We(r,e,0,[e.props,o]);if(xt(),st(),Mo(s)){if(s.then(st,st),t)return s.then(i=>{lo(e,i,t)}).catch(i=>{gn(i,e,0)});e.asyncDep=s}else lo(e,s,t)}else Is(e,t)}function lo(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=Qo(t)),Is(e,n)}let co;function Is(e,t,n){const r=e.type;if(!e.render){if(!t&&co&&!r.render){const o=r.template||Cr(e).template;if(o){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,u=le(le({isCustomElement:s,delimiters:a},i),l);r.render=co(o,u)}}e.render=r.render||Ee}yt(e),Et(),Fa(e),xt(),st()}function al(e){return new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}})}function ll(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=al(e))},slots:e.slots,emit:e.emit,expose:t}}function _n(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qo(Xo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in on)return on[n](e)}}))}function cl(e,t=!0){return $(e)?e.displayName||e.name:e.name||t&&e.__name}function ul(e){return $(e)&&"__vccOpts"in e}const ge=(e,t)=>ra(e,t,Ut);function Dn(e,t,n){const r=arguments.length;return r===2?J(t)&&!F(t)?Zn(t)?ue(e,null,[t]):ue(e,t):ue(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zn(n)&&(n=[n]),ue(e,t,n))}const fl="3.2.41",hl="http://www.w3.org/2000/svg",tt=typeof document<"u"?document:null,uo=tt&&tt.createElement("template"),dl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?tt.createElementNS(hl,e):tt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>tt.createTextNode(e),createComment:e=>tt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>tt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const i=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{uo.innerHTML=r?`<svg>${e}</svg>`:e;const a=uo.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function pl(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function gl(e,t,n){const r=e.style,o=re(n);if(n&&!o){for(const s in n)er(r,s,n[s]);if(t&&!re(t))for(const s in t)n[s]==null&&er(r,s,"")}else{const s=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const fo=/\s*!important$/;function er(e,t,n){if(F(n))n.forEach(r=>er(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ml(e,t);fo.test(n)?e.setProperty(wt(r),n.replace(fo,""),"important"):e[r]=n}}const ho=["Webkit","Moz","ms"],kn={};function ml(e,t){const n=kn[t];if(n)return n;let r=ke(t);if(r!=="filter"&&r in e)return kn[t]=r;r=dn(r);for(let o=0;o<ho.length;o++){const s=ho[o]+r;if(s in e)return kn[t]=s}return t}const po="http://www.w3.org/1999/xlink";function vl(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(po,t.slice(6,t.length)):e.setAttributeNS(po,t,n);else{const s=ui(t);n==null||s&&!ko(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function bl(e,t,n,r,o,s,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,o,s),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ko(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function _l(e,t,n,r){e.addEventListener(t,n,r)}function yl(e,t,n,r){e.removeEventListener(t,n,r)}function wl(e,t,n,r,o=null){const s=e._vei||(e._vei={}),i=s[t];if(r&&i)i.value=r;else{const[a,l]=El(t);if(r){const u=s[t]=Tl(r,o);_l(e,a,u,l)}else i&&(yl(e,a,i,l),s[t]=void 0)}}const go=/(?:Once|Passive|Capture)$/;function El(e){let t;if(go.test(e)){t={};let r;for(;r=e.match(go);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):wt(e.slice(2)),t]}let Pn=0;const xl=Promise.resolve(),Cl=()=>Pn||(xl.then(()=>Pn=0),Pn=Date.now());function Tl(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;xe(Sl(r,n.value),t,5,[r])};return n.value=e,n.attached=Cl(),n}function Sl(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const mo=/^on[a-z]/,Il=(e,t,n,r,o=!1,s,i,a,l)=>{t==="class"?pl(e,r,o):t==="style"?gl(e,n,r):un(t)?ur(t)||wl(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Al(e,t,r,o))?bl(e,t,r,s,i,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),vl(e,t,r,o))};function Al(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&mo.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||mo.test(t)&&re(n)?!1:t in e}const Rl=le({patchProp:Il},dl);let vo;function Ol(){return vo||(vo=Ya(Rl))}const Dl=(...e)=>{const t=Ol().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=kl(r);if(!o)return;const s=t._component;!$(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function kl(e){return re(e)?document.querySelector(e):e}const Pl={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","&":"&amp;"};let Bl=0;var Ml=e=>e.replace(/[<>"&]/g,t=>Pl[t]||t),Fl=e=>e+Bl++;const nt={},$l=e=>{const{name:t,paths:n=[],d:r,polygons:o=[],points:s}=e;r&&n.push({d:r}),s&&o.push({points:s}),nt[t]=Object.assign({},e,{paths:n,polygons:o}),nt[t].minX||(nt[t].minX=0),nt[t].minY||(nt[t].minY=0)},Nl=(...e)=>{for(const t of e)$l(t)},Ll=xr({name:"OhVueIcon",props:{name:{type:String,validator:e=>!e||e in nt||(console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${e}".
Please make sure you have imported this icon before using it.`),!1)},title:String,fill:String,scale:{type:[Number,String],default:1},animation:{validator:e=>["spin","spin-pulse","wrench","ring","pulse","flash","float"].includes(e)},hover:Boolean,flip:{validator:e=>["horizontal","vertical","both"].includes(e)},speed:{validator:e=>e==="fast"||e==="slow"},label:String,inverse:Boolean},setup(e){const t=Rt([]),n=Mt({outerScale:1.2,x:null,y:null}),r=Mt({width:0,height:0}),o=ge(()=>{const C=Number(e.scale);return isNaN(C)||C<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),n.outerScale):C*n.outerScale}),s=ge(()=>({"ov-icon":!0,"ov-inverse":e.inverse,"ov-flip-horizontal":e.flip==="horizontal","ov-flip-vertical":e.flip==="vertical","ov-flip-both":e.flip==="both","ov-spin":e.animation==="spin","ov-spin-pulse":e.animation==="spin-pulse","ov-wrench":e.animation==="wrench","ov-ring":e.animation==="ring","ov-pulse":e.animation==="pulse","ov-flash":e.animation==="flash","ov-float":e.animation==="float","ov-hover":e.hover,"ov-fast":e.speed==="fast","ov-slow":e.speed==="slow"})),i=ge(()=>e.name?nt[e.name]:null),a=ge(()=>i.value?`${i.value.minX} ${i.value.minY} ${i.value.width} ${i.value.height}`:`0 0 ${u.value} ${d.value}`),l=ge(()=>{if(!i.value)return 1;const{width:C,height:A}=i.value;return Math.max(C,A)/16}),u=ge(()=>r.width||i.value&&i.value.width/l.value*o.value||0),d=ge(()=>r.height||i.value&&i.value.height/l.value*o.value||0),p=ge(()=>o.value!==1&&{fontSize:o.value+"em"}),v=ge(()=>{if(!i.value||!i.value.raw)return null;const C={};let A=i.value.raw;return A=A.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(k,Z,H)=>{const L=Fl("vat-");return C[H]=L,` id="${L}"`}),A=A.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(k,Z,H,L)=>{const ee=Z||L;return ee&&C[ee]?`#${C[ee]}`:k}),A}),b=ge(()=>i.value&&i.value.attr?i.value.attr:{}),S=()=>{if(!e.name&&e.name!==null&&t.value.length===0)return void console.warn('Invalid prop: prop "name" is required.');if(i.value)return;let C=0,A=0;t.value.forEach(k=>{k.outerScale=o.value,C=Math.max(C,k.width),A=Math.max(A,k.height)}),r.width=C,r.height=A,t.value.forEach(k=>{k.x=(C-k.width)/2,k.y=(A-k.height)/2})};return fs(()=>{S()}),hs(()=>{S()}),{...Qi(n),children:t,icon:i,klass:s,style:p,width:u,height:d,box:a,attribs:b,raw:v}},created(){const e=this.$parent;e&&e.children&&e.children.push(this)},render(){const e=Object.assign({role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":!(this.label||this.title),width:this.width,height:this.height,viewBox:this.box},this.attribs);this.attribs.stroke?e.stroke=this.fill?this.fill:"currentColor":e.fill=this.fill?this.fill:"currentColor",this.x&&(e.x=this.x.toString()),this.y&&(e.y=this.y.toString());let t={class:this.klass,style:this.style};if(t=Object.assign(t,e),this.raw){const o=this.title?`<title>${Ml(this.title)}</title>${this.raw}`:this.raw;t.innerHTML=o}const n=this.title?[Dn("title",this.title)]:[],r=(o,s,i)=>Dn(o,{...s,key:`${o}-${i}`});return Dn("svg",t,this.raw?void 0:n.concat([this.$slots.default?this.$slots.default():this.icon?[...this.icon.paths.map((o,s)=>r("path",o,s)),...this.icon.polygons.map((o,s)=>r("polygon",o,s))]:[]]))}});function Ar(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}Ar(`.ov-icon {
  display: inline-block;
  overflow: visible;
  vertical-align: -0.2em;
}
`);Ar(`/* ---------------- spin ---------------- */
.ov-spin:not(.ov-hover),
.ov-spin.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin {
  animation: ov-spin 1s linear infinite;
}

.ov-spin:not(.ov-hover).ov-fast,
.ov-spin.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-fast {
  animation: ov-spin 0.7s linear infinite;
}

.ov-spin:not(.ov-hover).ov-slow,
.ov-spin.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-slow {
  animation: ov-spin 2s linear infinite;
}

/* ---------------- spin-pulse ---------------- */

.ov-spin-pulse:not(.ov-hover),
.ov-spin-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse {
  animation: ov-spin 1s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-fast,
.ov-spin-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-fast {
  animation: ov-spin 0.7s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-slow,
.ov-spin-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-slow {
  animation: ov-spin 2s infinite steps(8);
}

@keyframes ov-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ---------------- wrench ---------------- */
.ov-wrench:not(.ov-hover),
.ov-wrench.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-wrench {
  animation: ov-wrench 2.5s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-fast,
.ov-wrench.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-fast {
  animation: ov-wrench 1.2s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-slow,
.ov-wrench.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-slow {
  animation: ov-wrench 3.7s ease infinite;
}

@keyframes ov-wrench {
  0% {
    transform: rotate(-12deg);
  }

  8% {
    transform: rotate(12deg);
  }

  10%, 28%, 30%, 48%, 50%, 68% {
    transform: rotate(24deg);
  }

  18%, 20%, 38%, 40%, 58%, 60% {
    transform: rotate(-24deg);
  }

  75%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- ring ---------------- */
.ov-ring:not(.ov-hover),
.ov-ring.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-ring {
  animation: ov-ring 2s ease infinite;
}

.ov-ring:not(.ov-hover).ov-fast,
.ov-ring.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-fast {
  animation: ov-ring 1s ease infinite;
}

.ov-ring:not(.ov-hover).ov-slow,
.ov-ring.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-slow {
  animation: ov-ring 3s ease infinite;
}

@keyframes ov-ring {
  0% {
    transform: rotate(-15deg);
  }

  2% {
    transform: rotate(15deg);
  }

  4%, 12% {
    transform: rotate(-18deg);
  }

  6% {
    transform: rotate(18deg);
  }

  8% {
    transform: rotate(-22deg);
  }

  10% {
    transform: rotate(22deg);
  }

  12% {
    transform: rotate(-18deg);
  }

  14% {
    transform: rotate(18deg);
  }

  16% {
    transform: rotate(-12deg);
  }

  18% {
    transform: rotate(12deg);
  }

  20%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- pulse ---------------- */
.ov-pulse:not(.ov-hover),
.ov-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-pulse {
  animation: ov-pulse 2s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-fast,
.ov-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-fast {
  animation: ov-pulse 1s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-slow,
.ov-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-slow {
  animation: ov-pulse 3s linear infinite;
}

@keyframes ov-pulse {
  0% {
    transform: scale(1.1);
  }

  50% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.1);
  }
}

/* ---------------- flash ---------------- */
.ov-flash:not(.ov-hover),
.ov-flash.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-flash {
  animation: ov-flash 2s ease infinite;
}

.ov-flash:not(.ov-hover).ov-fast,
.ov-flash.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-fast {
  animation: ov-flash 1s ease infinite;
}

.ov-flash:not(.ov-hover).ov-slow,
.ov-flash.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-slow {
  animation: ov-flash 3s ease infinite;
}

@keyframes ov-flash {
  0%, 100%, 50%{
    opacity: 1;
  }
  25%, 75%{
    opacity: 0;
  }
}

/* ---------------- float ---------------- */
.ov-float:not(.ov-hover),
.ov-float.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-float {
  animation: ov-float 2s linear infinite;
}

.ov-float:not(.ov-hover).ov-fast,
.ov-float.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-fast {
  animation: ov-float 1s linear infinite;
}

.ov-float:not(.ov-hover).ov-slow,
.ov-float.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-slow {
  animation: ov-float 3s linear infinite;
}

@keyframes ov-float {
  0%, 100% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(3px);
  }
}
`);Ar(`.ov-flip-horizontal {
  transform: scale(-1, 1);
}

.ov-flip-vertical {
  transform: scale(1, -1);
}

.ov-flip-both {
  transform: scale(-1, -1);
}

.ov-inverse {
  color: #fff;
}
`);const Ul={name:"md-checkcircle-round",minX:.48,minY:.48,width:23.04,height:23.04,raw:'<path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7a.996.996 0 111.41-1.41L10 14.17l6.88-6.88a.996.996 0 111.41 1.41l-7.59 7.59a.996.996 0 01-1.41 0z"/>'},jl=""+new URL("image.80539fd7.svg",import.meta.url).href,Hl=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},zl={},Wl={class:"w-full bg-[#F2F2F2] h-[6px] rounded-lg relative overflow-hidden"},Kl=Fe("div",{class:"absolute w-[30%] top-0 bottom-0 rounded-lg bg-[#2f80ed] animate-progress-bar"},null,-1),Vl=[Kl];function ql(e,t){return he(),Re("div",Wl,Vl)}const Yl=Hl(zl,[["render",ql]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Jl=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const s=e[n++];t[r++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=e[n++],i=e[n++],a=e[n++],l=((o&7)<<18|(s&63)<<12|(i&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],i=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(s&63)<<6|i&63)}}return t.join("")},Rs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const s=e[o],i=o+1<e.length,a=i?e[o+1]:0,l=o+2<e.length,u=l?e[o+2]:0,d=s>>2,p=(s&3)<<4|a>>4;let v=(a&15)<<2|u>>6,b=u&63;l||(b=64,i||(v=64)),r.push(n[d],n[p],n[v],n[b])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(As(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Jl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const s=n[e.charAt(o++)],a=o<e.length?n[e.charAt(o)]:0;++o;const u=o<e.length?n[e.charAt(o)]:64;++o;const p=o<e.length?n[e.charAt(o)]:64;if(++o,s==null||a==null||u==null||p==null)throw Error();const v=s<<2|a>>4;if(r.push(v),u!==64){const b=a<<4&240|u>>2;if(r.push(b),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Xl=function(e){const t=As(e);return Rs.encodeByteArray(t,!0)},an=function(e){return Xl(e).replace(/\./g,"")},Gl=function(e){try{return Rs.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function Zl(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ql(){return typeof indexedDB=="object"}function ec(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var s;t(((s=o.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function tc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=()=>tc().__FIREBASE_DEFAULTS__,rc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},oc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Gl(e[1]);return t&&JSON.parse(t)},Os=()=>{try{return nc()||rc()||oc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},sc=e=>{var t,n;return(n=(t=Os())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ic=e=>{const t=sc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ac=()=>{var e;return(e=Os())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",o=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[an(JSON.stringify(n)),an(JSON.stringify(i)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="FirebaseError";class Ct extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=uc,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ds.prototype.create)}}class Ds{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,s=this.errors[t],i=s?fc(s,r):"Error",a=`${this.serviceName}: ${i} (${o}).`;return new Ct(o,a,r)}}function fc(e,t){return e.replace(hc,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const hc=/\{\$([^}]+)}/g;function tr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const s=e[o],i=t[o];if(bo(s)&&bo(i)){if(!tr(s,i))return!1}else if(s!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function bo(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(e){return e&&e._delegate?e._delegate:e}class jt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new lc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(o)return null;throw s}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(gc(t))try{this.getOrInitializeService({instanceIdentifier:Qe})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:o});r.resolve(s)}catch{}}}}clearInstance(t=Qe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qe){return this.instances.has(t)}getOptions(t=Qe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&i.resolve(o)}return o}onInit(t,n){var r;const o=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(o,s);const i=this.instances.get(o);return i&&t(i,o),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pc(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qe){return this.component?this.component.multipleInstances?t:Qe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pc(e){return e===Qe?void 0:e}function gc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new dc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const vc={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},bc=Y.INFO,_c={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},yc=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=_c[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class wc{constructor(t){this.name=t,this._logLevel=bc,this._logHandler=yc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Ec=(e,t)=>t.some(n=>e instanceof n);let _o,yo;function xc(){return _o||(_o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cc(){return yo||(yo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ks=new WeakMap,nr=new WeakMap,Ps=new WeakMap,Bn=new WeakMap,Rr=new WeakMap;function Tc(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{n(Ke(e.result)),o()},i=()=>{r(e.error),o()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&ks.set(n,e)}).catch(()=>{}),Rr.set(t,e),t}function Sc(e){if(nr.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{n(),o()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});nr.set(e,t)}let rr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return nr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ps.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ke(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ic(e){rr=e(rr)}function Ac(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Mn(this),t,...n);return Ps.set(r,t.sort?t.sort():[t]),Ke(r)}:Cc().includes(e)?function(...t){return e.apply(Mn(this),t),Ke(ks.get(this))}:function(...t){return Ke(e.apply(Mn(this),t))}}function Rc(e){return typeof e=="function"?Ac(e):(e instanceof IDBTransaction&&Sc(e),Ec(e,xc())?new Proxy(e,rr):e)}function Ke(e){if(e instanceof IDBRequest)return Tc(e);if(Bn.has(e))return Bn.get(e);const t=Rc(e);return t!==e&&(Bn.set(e,t),Rr.set(t,e)),t}const Mn=e=>Rr.get(e);function Oc(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const i=indexedDB.open(e,t),a=Ke(i);return r&&i.addEventListener("upgradeneeded",l=>{r(Ke(i.result),l.oldVersion,l.newVersion,Ke(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),o&&l.addEventListener("versionchange",()=>o())}).catch(()=>{}),a}const Dc=["get","getKey","getAll","getAllKeys","count"],kc=["put","add","delete","clear"],Fn=new Map;function wo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Fn.get(t))return Fn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=kc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Dc.includes(n)))return;const s=async function(i,...a){const l=this.transaction(i,o?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),o&&l.done]))[0]};return Fn.set(t,s),s}Ic(e=>({...e,get:(t,n,r)=>wo(t,n)||e.get(t,n,r),has:(t,n)=>!!wo(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bc(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Bc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const or="@firebase/app",Eo="0.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new wc("@firebase/app"),Mc="@firebase/app-compat",Fc="@firebase/analytics-compat",$c="@firebase/analytics",Nc="@firebase/app-check-compat",Lc="@firebase/app-check",Uc="@firebase/auth",jc="@firebase/auth-compat",Hc="@firebase/database",zc="@firebase/database-compat",Wc="@firebase/functions",Kc="@firebase/functions-compat",Vc="@firebase/installations",qc="@firebase/installations-compat",Yc="@firebase/messaging",Jc="@firebase/messaging-compat",Xc="@firebase/performance",Gc="@firebase/performance-compat",Zc="@firebase/remote-config",Qc="@firebase/remote-config-compat",eu="@firebase/storage",tu="@firebase/storage-compat",nu="@firebase/firestore",ru="@firebase/firestore-compat",ou="firebase",su="9.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="[DEFAULT]",iu={[or]:"fire-core",[Mc]:"fire-core-compat",[$c]:"fire-analytics",[Fc]:"fire-analytics-compat",[Lc]:"fire-app-check",[Nc]:"fire-app-check-compat",[Uc]:"fire-auth",[jc]:"fire-auth-compat",[Hc]:"fire-rtdb",[zc]:"fire-rtdb-compat",[Wc]:"fire-fn",[Kc]:"fire-fn-compat",[Vc]:"fire-iid",[qc]:"fire-iid-compat",[Yc]:"fire-fcm",[Jc]:"fire-fcm-compat",[Xc]:"fire-perf",[Gc]:"fire-perf-compat",[Zc]:"fire-rc",[Qc]:"fire-rc-compat",[eu]:"fire-gcs",[tu]:"fire-gcs-compat",[nu]:"fire-fst",[ru]:"fire-fst-compat","fire-js":"fire-js",[ou]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Map,ir=new Map;function au(e,t){try{e.container.addComponent(t)}catch(n){lt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function cn(e){const t=e.name;if(ir.has(t))return lt.debug(`There were multiple attempts to register component ${t}.`),!1;ir.set(t,e);for(const n of ln.values())au(n,e);return!0}function lu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ve=new Ds("app","Firebase",cu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=su;function Bs(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:sr,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw Ve.create("bad-app-name",{appName:String(o)});if(n||(n=ac()),!n)throw Ve.create("no-options");const s=ln.get(o);if(s){if(tr(n,s.options)&&tr(r,s.config))return s;throw Ve.create("duplicate-app",{appName:o})}const i=new mc(o);for(const l of ir.values())i.addComponent(l);const a=new uu(n,r,i);return ln.set(o,a),a}function hu(e=sr){const t=ln.get(e);if(!t&&e===sr)return Bs();if(!t)throw Ve.create("no-app",{appName:e});return t}function vt(e,t,n){var r;let o=(r=iu[e])!==null&&r!==void 0?r:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${o}" with version "${t}":`];s&&a.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),lt.warn(a.join(" "));return}cn(new jt(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="firebase-heartbeat-database",pu=1,Ht="firebase-heartbeat-store";let $n=null;function Ms(){return $n||($n=Oc(du,pu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ht)}}}).catch(e=>{throw Ve.create("idb-open",{originalErrorMessage:e.message})})),$n}async function gu(e){var t;try{return(await Ms()).transaction(Ht).objectStore(Ht).get(Fs(e))}catch(n){if(n instanceof Ct)lt.warn(n.message);else{const r=Ve.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});lt.warn(r.message)}}}async function xo(e,t){var n;try{const o=(await Ms()).transaction(Ht,"readwrite");return await o.objectStore(Ht).put(t,Fs(e)),o.done}catch(r){if(r instanceof Ct)lt.warn(r.message);else{const o=Ve.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});lt.warn(o.message)}}}function Fs(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=1024,vu=30*24*60*60*1e3;class bu{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yu(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Co();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=vu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Co(),{heartbeatsToSend:n,unsentEntries:r}=_u(this._heartbeatsCache.heartbeats),o=an(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Co(){return new Date().toISOString().substring(0,10)}function _u(e,t=mu){const n=[];let r=e.slice();for(const o of e){const s=n.find(i=>i.agent===o.agent);if(s){if(s.dates.push(o.date),To(n)>t){s.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),To(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ql()?ec().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return xo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return xo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function To(e){return an(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(e){cn(new jt("platform-logger",t=>new Pc(t),"PRIVATE")),cn(new jt("heartbeat",t=>new bu(t),"PRIVATE")),vt(or,Eo,e),vt(or,Eo,"esm2017"),vt("fire-js","")}wu("");var Eu="firebase",xu="9.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt(Eu,xu,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="firebasestorage.googleapis.com",Ns="storageBucket",Cu=2*60*1e3,Tu=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G extends Ct{constructor(t,n,r=0){super(Nn(t),`Firebase Storage: ${n} (${Nn(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,G.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Nn(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Nn(e){return"storage/"+e}function Or(){const e="An unknown error occurred, please check the error payload for server response.";return new G("unknown",e)}function Su(e){return new G("object-not-found","Object '"+e+"' does not exist.")}function Iu(e){return new G("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Au(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new G("unauthenticated",e)}function Ru(){return new G("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Ou(e){return new G("unauthorized","User does not have permission to access '"+e+"'.")}function Du(){return new G("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function ku(){return new G("canceled","User canceled the upload/download.")}function Pu(e){return new G("invalid-url","Invalid URL '"+e+"'.")}function Bu(e){return new G("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function Mu(){return new G("no-default-bucket","No default bucket found. Did you set the '"+Ns+"' property when initializing the app?")}function Fu(){return new G("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function $u(){return new G("no-download-url","The given file does not have any download URLs.")}function ar(e){return new G("invalid-argument",e)}function Ls(){return new G("app-deleted","The Firebase app was deleted.")}function Nu(e){return new G("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function kt(e,t){return new G("invalid-format","String does not match format '"+e+"': "+t)}function It(e){throw new G("internal-error","Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=de.makeFromUrl(t,n)}catch{return new de(t,"")}if(r.path==="")return r;throw Bu(t)}static makeFromUrl(t,n){let r=null;const o="([A-Za-z0-9.\\-_]+)";function s(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+o+i,"i"),l={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",b=new RegExp(`^https?://${p}/${d}/b/${o}/o${v}`,"i"),S={bucket:1,path:3},C=n===$s?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",k=new RegExp(`^https?://${C}/${o}/${A}`,"i"),H=[{regex:a,indices:l,postModify:s},{regex:b,indices:S,postModify:u},{regex:k,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<H.length;L++){const ee=H[L],me=ee.regex.exec(t);if(me){const B=me[ee.indices.bucket];let T=me[ee.indices.path];T||(T=""),r=new de(B,T),ee.postModify(r);break}}if(r==null)throw Pu(t);return r}}class Lu{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(e,t,n){let r=1,o=null,s=null,i=!1,a=0;function l(){return a===2}let u=!1;function d(...A){u||(u=!0,t.apply(null,A))}function p(A){o=setTimeout(()=>{o=null,e(b,l())},A)}function v(){s&&clearTimeout(s)}function b(A,...k){if(u){v();return}if(A){v(),d.call(null,A,...k);return}if(l()||i){v(),d.call(null,A,...k);return}r<64&&(r*=2);let H;a===1?(a=2,H=0):H=(r+Math.random())*1e3,p(H)}let S=!1;function C(A){S||(S=!0,v(),!u&&(o!==null?(A||(a=2),clearTimeout(o),p(0)):A||(a=1)))}return p(0),s=setTimeout(()=>{i=!0,C(!0)},n),C}function ju(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(e){return e!==void 0}function zu(e){return typeof e=="object"&&!Array.isArray(e)}function Dr(e){return typeof e=="string"||e instanceof String}function So(e){return kr()&&e instanceof Blob}function kr(){return typeof Blob<"u"&&!Zl()}function Io(e,t,n,r){if(r<t)throw ar(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw ar(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function Us(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const o=t(r)+"="+t(e[r]);n=n+o+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(it||(it={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(e,t){const n=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||o||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t,n,r,o,s,i,a,l,u,d,p,v=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=o,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,S)=>{this.resolve_=b,this.reject_=S,this.start_()})}start_(){const t=(r,o)=>{if(o){r(!1,new Xt(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const i=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(i),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(i),this.pendingConnection_=null;const a=s.getErrorCode()===it.NO_ERROR,l=s.getStatus();if((!a||Wu(l,this.additionalRetryCodes_))&&this.retry){const d=s.getErrorCode()===it.ABORT;r(!1,new Xt(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Xt(u,s))})},n=(r,o)=>{const s=this.resolve_,i=this.reject_,a=o.connection;if(o.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Hu(l)?s(l):s()}catch(l){i(l)}else if(a!==null){const l=Or();l.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,l)):i(l)}else if(o.canceled){const l=this.appDelete_?Ls():ku();i(l)}else{const l=Du();i(l)}};this.canceled_?n(!1,new Xt(!1,null,!0)):this.backoffId_=Uu(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&ju(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xt{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function Vu(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function qu(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function Yu(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Ju(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Xu(e,t,n,r,o,s,i=!0){const a=Us(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return Yu(u,t),Vu(u,n),qu(u,s),Ju(u,r),new Ku(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Zu(...e){const t=Gu();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(kr())return new Blob(e);throw new G("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Qu(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(e){return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ln{constructor(t,n){this.data=t,this.contentType=n||null}}function js(e,t){switch(e){case we.RAW:return new Ln(Hs(t));case we.BASE64:case we.BASE64URL:return new Ln(zs(e,t));case we.DATA_URL:return new Ln(nf(t),rf(t))}throw Or()}function Hs(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,i=e.charCodeAt(++n);r=65536|(s&1023)<<10|i&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function tf(e){let t;try{t=decodeURIComponent(e)}catch{throw kt(we.DATA_URL,"Malformed data URL.")}return Hs(t)}function zs(e,t){switch(e){case we.BASE64:{const o=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(o||s)throw kt(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case we.BASE64URL:{const o=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(o||s)throw kt(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ef(t)}catch{throw kt(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class Ws{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw kt(we.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=of(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function nf(e){const t=new Ws(e);return t.base64?zs(we.BASE64,t.rest):tf(t.rest)}function rf(e){return new Ws(e).contentType}function of(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,n){let r=0,o="";So(t)?(this.data_=t,r=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(So(this.data_)){const r=this.data_,o=Qu(r,t,n);return o===null?null:new He(o)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new He(r,!0)}}static getBlob(...t){if(kr()){const n=t.map(r=>r instanceof He?r.data_:r);return new He(Zu.apply(null,n))}else{const n=t.map(i=>Dr(i)?js(we.RAW,i).data:i.data_);let r=0;n.forEach(i=>{r+=i.byteLength});const o=new Uint8Array(r);let s=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)o[s++]=i[a]}),new He(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(e){let t;try{t=JSON.parse(e)}catch{return null}return zu(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function af(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function Vs(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(e,t){return t}class ie{constructor(t,n,r,o){this.server=t,this.local=n||t,this.writable=!!r,this.xform=o||lf}}let Gt=null;function cf(e){return!Dr(e)||e.length<2?e:Vs(e)}function qs(){if(Gt)return Gt;const e=[];e.push(new ie("bucket")),e.push(new ie("generation")),e.push(new ie("metageneration")),e.push(new ie("name","fullPath",!0));function t(s,i){return cf(i)}const n=new ie("name");n.xform=t,e.push(n);function r(s,i){return i!==void 0?Number(i):i}const o=new ie("size");return o.xform=r,e.push(o),e.push(new ie("timeCreated")),e.push(new ie("updated")),e.push(new ie("md5Hash",null,!0)),e.push(new ie("cacheControl",null,!0)),e.push(new ie("contentDisposition",null,!0)),e.push(new ie("contentEncoding",null,!0)),e.push(new ie("contentLanguage",null,!0)),e.push(new ie("contentType",null,!0)),e.push(new ie("metadata","customMetadata",!0)),Gt=e,Gt}function uf(e,t){function n(){const r=e.bucket,o=e.fullPath,s=new de(r,o);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function ff(e,t,n){const r={};r.type="file";const o=n.length;for(let s=0;s<o;s++){const i=n[s];r[i.local]=i.xform(r,t[i.server])}return uf(r,e),r}function Ys(e,t,n){const r=Ks(t);return r===null?null:ff(e,r,n)}function hf(e,t,n,r){const o=Ks(t);if(o===null||!Dr(o.downloadTokens))return null;const s=o.downloadTokens;if(s.length===0)return null;const i=encodeURIComponent;return s.split(",").map(u=>{const d=e.bucket,p=e.fullPath,v="/b/"+i(d)+"/o/"+i(p),b=Pr(v,n,r),S=Us({alt:"media",token:u});return b+S})[0]}function df(e,t){const n={},r=t.length;for(let o=0;o<r;o++){const s=t[o];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class Js{constructor(t,n,r,o){this.url=t,this.method=n,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(e){if(!e)throw Or()}function pf(e,t){function n(r,o){const s=Ys(e,o,t);return Xs(s!==null),s}return n}function gf(e,t){function n(r,o){const s=Ys(e,o,t);return Xs(s!==null),hf(s,o,e.host,e._protocol)}return n}function Gs(e){function t(n,r){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=Ru():o=Au():n.getStatus()===402?o=Iu(e.bucket):n.getStatus()===403?o=Ou(e.path):o=r,o.status=n.getStatus(),o.serverResponse=r.serverResponse,o}return t}function mf(e){const t=Gs(e);function n(r,o){let s=t(r,o);return r.getStatus()===404&&(s=Su(e.path)),s.serverResponse=o.serverResponse,s}return n}function vf(e,t,n){const r=t.fullServerUrl(),o=Pr(r,e.host,e._protocol),s="GET",i=e.maxOperationRetryTime,a=new Js(o,s,gf(e,n),i);return a.errorHandler=mf(t),a}function bf(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function _f(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=bf(null,t)),r}function yf(e,t,n,r,o){const s=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let H="";for(let L=0;L<2;L++)H=H+Math.random().toString().slice(2);return H}const l=a();i["Content-Type"]="multipart/related; boundary="+l;const u=_f(t,r,o),d=df(u,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,v=`\r
--`+l+"--",b=He.getBlob(p,r,v);if(b===null)throw Fu();const S={name:u.fullPath},C=Pr(s,e.host,e._protocol),A="POST",k=e.maxUploadRetryTime,Z=new Js(C,A,pf(e,n),k);return Z.urlParams=S,Z.headers=i,Z.body=b.uploadData(),Z.errorHandler=Gs(t),Z}class wf{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=it.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=it.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=it.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,o){if(this.sent_)throw It("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const s in o)o.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,o[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw It("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw It("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw It("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw It("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Ef extends wf{initXhr(){this.xhr_.responseType="text"}}function Zs(){return new Ef}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,n){this._service=t,n instanceof de?this._location=n:this._location=de.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new ct(t,n)}get root(){const t=new de(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Vs(this._location.path)}get storage(){return this._service}get parent(){const t=sf(this._location.path);if(t===null)return null;const n=new de(this._location.bucket,t);return new ct(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Nu(t)}}function xf(e,t,n){e._throwIfRoot("uploadBytes");const r=yf(e.storage,e._location,qs(),new He(t,!0),n);return e.storage.makeRequestWithTokens(r,Zs).then(o=>({metadata:o,ref:e}))}function Cf(e,t,n=we.RAW,r){e._throwIfRoot("uploadString");const o=js(n,t),s=Object.assign({},r);return s.contentType==null&&o.contentType!=null&&(s.contentType=o.contentType),xf(e,o.data,s)}function Tf(e){e._throwIfRoot("getDownloadURL");const t=vf(e.storage,e._location,qs());return e.storage.makeRequestWithTokens(t,Zs).then(n=>{if(n===null)throw $u();return n})}function Sf(e,t){const n=af(e._location.path,t),r=new de(e._location.bucket,n);return new ct(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(e){return/^[A-Za-z]+:\/\//.test(e)}function Af(e,t){return new ct(e,t)}function Qs(e,t){if(e instanceof Br){const n=e;if(n._bucket==null)throw Mu();const r=new ct(n,n._bucket);return t!=null?Qs(r,t):r}else return t!==void 0?Sf(e,t):e}function Rf(e,t){if(t&&If(t)){if(e instanceof Br)return Af(e,t);throw ar("To use ref(service, url), the first argument must be a Storage instance.")}else return Qs(e,t)}function Ao(e,t){const n=t==null?void 0:t[Ns];return n==null?null:de.makeFromBucketSpec(n,e)}function Of(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=r;o&&(e._overrideAuthToken=typeof o=="string"?o:cc(o,e.app.options.projectId))}class Br{constructor(t,n,r,o,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=o,this._firebaseVersion=s,this._bucket=null,this._host=$s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Cu,this._maxUploadRetryTime=Tu,this._requests=new Set,o!=null?this._bucket=de.makeFromBucketSpec(o,this._host):this._bucket=Ao(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=de.makeFromBucketSpec(this._url,t):this._bucket=Ao(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Io("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Io("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ct(this,t)}_makeRequest(t,n,r,o,s=!0){if(this._deleted)return new Lu(Ls());{const i=Xu(t,this._appId,r,o,n,this._firebaseVersion,s);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,o).getPromise()}}const Ro="@firebase/storage",Oo="0.9.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="storage";function Df(e,t,n,r){return e=yn(e),Cf(e,t,n,r)}function kf(e){return e=yn(e),Tf(e)}function Pf(e,t){return e=yn(e),Rf(e,t)}function Bf(e=hu(),t){e=yn(e);const r=lu(e,ei).getImmediate({identifier:t}),o=ic("storage");return o&&Mf(r,...o),r}function Mf(e,t,n,r={}){Of(e,t,n,r)}function Ff(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new Br(n,r,o,t,fu)}function $f(){cn(new jt(ei,Ff,"PUBLIC").setMultipleInstances(!0)),vt(Ro,Oo,""),vt(Ro,Oo,"esm2017")}$f();const Nf={apiKey:"AIzaSyC7_ZtQ6QJ_xGqDHkiNk2Ifnto_i14u_yU",authDomain:"uploadimage-dev.firebaseapp.com",projectId:"uploadimage-dev",storageBucket:"uploadimage-dev.appspot.com",messagingSenderId:"385828794867",appId:"1:385828794867:web:abf57549d0c0a3b6a22286"},Lf=Bs(Nf),Uf=Bf(Lf),jf=async(e,t)=>{const n=Pf(Uf,"images/"+t);return await Df(n,e,"data_url"),await kf(n)},Hf={class:"w-[400px] flex flex-col items-center p-8 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-xl bg-white"},zf={key:1,class:"text-[10px] text-[#828282] mt-4 mb-8"},Wf=["src"],Kf=Fe("p",{class:"text-[#BDBDBD] text-xs mt-9"},"Drag & Drop your image here",-1),Vf={key:3,class:"text-[#BDBDBD] my-5"},qf={key:4,id:"imageInput",class:"cursor-pointer py-2 px-4 bg-[#2F80ED] hover:bg-[#2F80ED]/90 rounded-lg text-[#FFFFFF] text-xs"},Yf={key:6,class:"w-full h-[224px]"},Jf=["src"],Xf={key:7,class:"flex items-center w-full h-[34px] rounded-lg bg-[#f6f8f8] border border-[#e0e0e0] mt-6"},Gf={class:"text-[8px] text-[#4F4F4F] ml-2 truncate"},Zf={class:"flex-shrink-0 ml-auto btn text-[9px] w-[74px] h-[30px] rounded-lg bg-[#2F80ED] hover:bg-[#2F80ED]/90 text-white mr-[1px]"},Qf=xr({__name:"ImageUploader",setup(e){const t=Rt(!1),n=Rt("pending"),r=Rt("Copy Link"),o=Rt(""),s=ge(()=>n.value==="pending"?"Upload your image":n.value==="in-progress"?"Uploading...":n.value==="success"?"Uploaded Successfully!":""),i=()=>{r.value="Copied!",setTimeout(()=>{r.value="Copy Link"},3e3)},a=b=>{b.preventDefault(),t.value=!0},l=b=>{b.preventDefault(),t.value=!1},u=async b=>{try{n.value="in-progress";const S=await d(b);o.value=await jf(S,b.name),n.value="success"}catch(S){alert(S),n.value="pending"}},d=b=>new Promise((S,C)=>{const A=new FileReader;A.onload=()=>{S(A.result)},b.size>5*1e3*1e3&&C(new Error("Image should less than 5Mb")),A.onerror=C,A.readAsDataURL(b)}),p=async b=>{const C=b.target.files[0];C&&C.type.startsWith("image")&&await u(C)},v=async b=>{var C;b.preventDefault(),t.value=!1;const S=((C=b.dataTransfer)==null?void 0:C.files)[0];S&&S.type.startsWith("image")&&await u(S)};return(b,S)=>{const C=ka("v-icon"),A=Ba("clipboard");return he(),Re("div",Hf,[n.value==="success"?(he(),Gn(C,{key:0,name:"md-checkcircle-round",fill:"#219653",scale:"2"})):Ue("",!0),Fe("p",{class:Pt(["font-medium text-lg text-[#4f4f4f]",{"self-start":n.value==="in-progress","mt-[10px] mb-6":n.value==="success"}])},Cn(Wn(s)),3),n.value==="pending"?(he(),Re("p",zf," File should be JPEG, PNG, ... ")):Ue("",!0),n.value==="pending"?(he(),Re("div",{key:2,onDrop:v,onDragover:a,onDragexit:l,class:Pt(["border border-[#97BEF4] border-dashed rounded-xl bg-[#F6F8FB] w-full p-9 flex flex-col items-center",[t.value?"bg-blue-100":""]])},[Fe("img",{src:Wn(jl),alt:"placeholder img"},null,8,Wf),Kf],34)):Ue("",!0),n.value==="pending"?(he(),Re("p",Vf,"Or")):Ue("",!0),n.value==="pending"?(he(),Re("label",qf,[Qn(" Choose a file "),Fe("input",{hidden:"",type:"file",id:"imageInput",onChange:p,accept:"image/*"},null,32)])):Ue("",!0),n.value==="in-progress"?(he(),Gn(Yl,{key:5,class:"mt-[30px]"})):Ue("",!0),n.value==="success"?(he(),Re("div",Yf,[Fe("img",{src:o.value,alt:"success upload image",class:"w-full h-full object-cover rounded-xl border"},null,8,Jf)])):Ue("",!0),n.value==="success"?(he(),Re("div",Xf,[Fe("p",Gf,Cn(o.value),1),Oa((he(),Re("button",Zf,[Qn(Cn(r.value),1)])),[[A,o.value,"copy"],[A,i,"success"]])])):Ue("",!0)])}}}),eh=xr({__name:"App",setup(e){return(t,n)=>(he(),Re("main",{onDrop:n[0]||(n[0]=r=>r.preventDefault()),onDragover:n[1]||(n[1]=r=>r.preventDefault()),class:"w-screen min-h-screen flex justify-center items-center bg-gray-50"},[ue(Qf)],32))}});Nl(Ul);const Mr=Dl(eh);Mr.component("v-icon",Ll);Mr.use(li);Mr.mount("#app");
