(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function X6(c,a){const e=Object.create(null),n=c.split(",");for(let r=0;r<n.length;r++)e[n[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}const r2={},K1=[],Y2=()=>{},xt=()=>!1,g3=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),Q6=c=>c.startsWith("onUpdate:"),u2=Object.assign,J6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Nt=Object.prototype.hasOwnProperty,j=(c,a)=>Nt.call(c,a),D=Array.isArray,X1=c=>C3(c)==="[object Map]",K5=c=>C3(c)==="[object Set]",O=c=>typeof c=="function",m2=c=>typeof c=="string",n4=c=>typeof c=="symbol",o2=c=>c!==null&&typeof c=="object",X5=c=>(o2(c)||O(c))&&O(c.then)&&O(c.catch),Q5=Object.prototype.toString,C3=c=>Q5.call(c),kt=c=>C3(c).slice(8,-1),J5=c=>C3(c)==="[object Object]",Z6=c=>m2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,n3=X6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),L3=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},St=/-(\w)/g,X2=L3(c=>c.replace(St,(a,e)=>e?e.toUpperCase():"")),At=/\B([A-Z])/g,r4=L3(c=>c.replace(At,"-$1").toLowerCase()),y3=L3(c=>c.charAt(0).toUpperCase()+c.slice(1)),i6=L3(c=>c?`on${y3(c)}`:""),_1=(c,a)=>!Object.is(c,a),o6=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},h3=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},Tt=c=>{const a=parseFloat(c);return isNaN(a)?c:a},Pt=c=>{const a=m2(c)?Number(c):NaN;return isNaN(a)?c:a};let T8;const M6=()=>T8||(T8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function b3(c){if(D(c)){const a={};for(let e=0;e<c.length;e++){const n=c[e],r=m2(n)?Rt(n):b3(n);if(r)for(const s in r)a[s]=r[s]}return a}else if(m2(c)||o2(c))return c}const Bt=/;(?![^(]*\))/g,Ft=/:([^]+)/,It=/\/\*[^]*?\*\//g;function Rt(c){const a={};return c.replace(It,"").split(Bt).forEach(e=>{if(e){const n=e.split(Ft);n.length>1&&(a[n[0].trim()]=n[1].trim())}}),a}function K2(c){let a="";if(m2(c))a=c;else if(D(c))for(let e=0;e<c.length;e++){const n=K2(c[e]);n&&(a+=n+" ")}else if(o2(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Dt="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Et=X6(Dt);function Z5(c){return!!c||c===""}const _2=c=>m2(c)?c:c==null?"":D(c)||o2(c)&&(c.toString===Q5||!O(c.toString))?JSON.stringify(c,c7,2):String(c),c7=(c,a)=>a&&a.__v_isRef?c7(c,a.value):X1(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[n,r],s)=>(e[t6(n,s)+" =>"]=r,e),{})}:K5(a)?{[`Set(${a.size})`]:[...a.values()].map(e=>t6(e))}:n4(a)?t6(a):o2(a)&&!D(a)&&!J5(a)?String(a):a,t6=(c,a="")=>{var e;return n4(c)?`Symbol(${(e=c.description)!=null?e:a})`:c};let I2;class _t{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=I2,!a&&I2&&(this.index=(I2.scopes||(I2.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=I2;try{return I2=this,a()}finally{I2=e}}}on(){I2=this}off(){I2=this.parent}stop(a){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ot(c,a=I2){a&&a.active&&a.effects.push(c)}function Wt(){return I2}const c0=c=>{const a=new Set(c);return a.w=0,a.n=0,a},a7=c=>(c.w&M1)>0,e7=c=>(c.n&M1)>0,$t=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=M1},Ut=c=>{const{deps:a}=c;if(a.length){let e=0;for(let n=0;n<a.length;n++){const r=a[n];a7(r)&&!e7(r)?r.delete(c):a[e++]=r,r.w&=~M1,r.n&=~M1}a.length=e}},g6=new WeakMap;let m4=0,M1=1;const C6=30;let R2;const R1=Symbol(""),L6=Symbol("");class a0{constructor(a,e=null,n){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Ot(this,n)}run(){if(!this.active)return this.fn();let a=R2,e=p1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=R2,R2=this,p1=!0,M1=1<<++m4,m4<=C6?$t(this):P8(this),this.fn()}finally{m4<=C6&&Ut(this),M1=1<<--m4,R2=this.parent,p1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){R2===this?this.deferStop=!0:this.active&&(P8(this),this.onStop&&this.onStop(),this.active=!1)}}function P8(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let p1=!0;const n7=[];function s4(){n7.push(p1),p1=!1}function i4(){const c=n7.pop();p1=c===void 0?!0:c}function x2(c,a,e){if(p1&&R2){let n=g6.get(c);n||g6.set(c,n=new Map);let r=n.get(e);r||n.set(e,r=c0()),r7(r)}}function r7(c,a){let e=!1;m4<=C6?e7(c)||(c.n|=M1,e=!a7(c)):e=!c.has(R2),e&&(c.add(R2),R2.deps.push(c))}function r1(c,a,e,n,r,s){const i=g6.get(c);if(!i)return;let o=[];if(a==="clear")o=[...i.values()];else if(e==="length"&&D(c)){const t=Number(n);i.forEach((l,h)=>{(h==="length"||!n4(h)&&h>=t)&&o.push(l)})}else switch(e!==void 0&&o.push(i.get(e)),a){case"add":D(c)?Z6(e)&&o.push(i.get("length")):(o.push(i.get(R1)),X1(c)&&o.push(i.get(L6)));break;case"delete":D(c)||(o.push(i.get(R1)),X1(c)&&o.push(i.get(L6)));break;case"set":X1(c)&&o.push(i.get(R1));break}if(o.length===1)o[0]&&y6(o[0]);else{const t=[];for(const l of o)l&&t.push(...l);y6(c0(t))}}function y6(c,a){const e=D(c)?c:[...c];for(const n of e)n.computed&&B8(n);for(const n of e)n.computed||B8(n)}function B8(c,a){(c!==R2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const qt=X6("__proto__,__v_isRef,__isVue"),s7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(n4)),F8=Gt();function Gt(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const n=Y(this);for(let s=0,i=this.length;s<i;s++)x2(n,"get",s+"");const r=n[a](...e);return r===-1||r===!1?n[a](...e.map(Y)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){s4();const n=Y(this)[a].apply(this,e);return i4(),n}}),c}function jt(c){const a=Y(this);return x2(a,"has",c),a.hasOwnProperty(c)}class i7{constructor(a=!1,e=!1){this._isReadonly=a,this._shallow=e}get(a,e,n){const r=this._isReadonly,s=this._shallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return n===(r?s?il:f7:s?l7:t7).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(n)?a:void 0;const i=D(a);if(!r){if(i&&j(F8,e))return Reflect.get(F8,e,n);if(e==="hasOwnProperty")return jt}const o=Reflect.get(a,e,n);return(n4(e)?s7.has(e):qt(e))||(r||x2(a,"get",e),s)?o:N2(o)?i&&Z6(e)?o:o.value:o2(o)?r?h7(o):r0(o):o}}class o7 extends i7{constructor(a=!1){super(!1,a)}set(a,e,n,r){let s=a[e];if(!this._shallow){const t=c4(s);if(!m3(n)&&!c4(n)&&(s=Y(s),n=Y(n)),!D(a)&&N2(s)&&!N2(n))return t?!1:(s.value=n,!0)}const i=D(a)&&Z6(e)?Number(e)<a.length:j(a,e),o=Reflect.set(a,e,n,r);return a===Y(r)&&(i?_1(n,s)&&r1(a,"set",e,n):r1(a,"add",e,n)),o}deleteProperty(a,e){const n=j(a,e);a[e];const r=Reflect.deleteProperty(a,e);return r&&n&&r1(a,"delete",e,void 0),r}has(a,e){const n=Reflect.has(a,e);return(!n4(e)||!s7.has(e))&&x2(a,"has",e),n}ownKeys(a){return x2(a,"iterate",D(a)?"length":R1),Reflect.ownKeys(a)}}class Yt extends i7{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const Kt=new o7,Xt=new Yt,Qt=new o7(!0),e0=c=>c,w3=c=>Reflect.getPrototypeOf(c);function _4(c,a,e=!1,n=!1){c=c.__v_raw;const r=Y(c),s=Y(a);e||(_1(a,s)&&x2(r,"get",a),x2(r,"get",s));const{has:i}=w3(r),o=n?e0:e?i0:V4;if(i.call(r,a))return o(c.get(a));if(i.call(r,s))return o(c.get(s));c!==r&&c.get(a)}function O4(c,a=!1){const e=this.__v_raw,n=Y(e),r=Y(c);return a||(_1(c,r)&&x2(n,"has",c),x2(n,"has",r)),c===r?e.has(c):e.has(c)||e.has(r)}function W4(c,a=!1){return c=c.__v_raw,!a&&x2(Y(c),"iterate",R1),Reflect.get(c,"size",c)}function I8(c){c=Y(c);const a=Y(this);return w3(a).has.call(a,c)||(a.add(c),r1(a,"add",c,c)),this}function R8(c,a){a=Y(a);const e=Y(this),{has:n,get:r}=w3(e);let s=n.call(e,c);s||(c=Y(c),s=n.call(e,c));const i=r.call(e,c);return e.set(c,a),s?_1(a,i)&&r1(e,"set",c,a):r1(e,"add",c,a),this}function D8(c){const a=Y(this),{has:e,get:n}=w3(a);let r=e.call(a,c);r||(c=Y(c),r=e.call(a,c)),n&&n.call(a,c);const s=a.delete(c);return r&&r1(a,"delete",c,void 0),s}function E8(){const c=Y(this),a=c.size!==0,e=c.clear();return a&&r1(c,"clear",void 0,void 0),e}function $4(c,a){return function(n,r){const s=this,i=s.__v_raw,o=Y(i),t=a?e0:c?i0:V4;return!c&&x2(o,"iterate",R1),i.forEach((l,h)=>n.call(r,t(l),t(h),s))}}function U4(c,a,e){return function(...n){const r=this.__v_raw,s=Y(r),i=X1(s),o=c==="entries"||c===Symbol.iterator&&i,t=c==="keys"&&i,l=r[c](...n),h=e?e0:a?i0:V4;return!a&&x2(s,"iterate",t?L6:R1),{next(){const{value:u,done:v}=l.next();return v?{value:u,done:v}:{value:o?[h(u[0]),h(u[1])]:h(u),done:v}},[Symbol.iterator](){return this}}}}function m1(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function Jt(){const c={get(s){return _4(this,s)},get size(){return W4(this)},has:O4,add:I8,set:R8,delete:D8,clear:E8,forEach:$4(!1,!1)},a={get(s){return _4(this,s,!1,!0)},get size(){return W4(this)},has:O4,add:I8,set:R8,delete:D8,clear:E8,forEach:$4(!1,!0)},e={get(s){return _4(this,s,!0)},get size(){return W4(this,!0)},has(s){return O4.call(this,s,!0)},add:m1("add"),set:m1("set"),delete:m1("delete"),clear:m1("clear"),forEach:$4(!0,!1)},n={get(s){return _4(this,s,!0,!0)},get size(){return W4(this,!0)},has(s){return O4.call(this,s,!0)},add:m1("add"),set:m1("set"),delete:m1("delete"),clear:m1("clear"),forEach:$4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=U4(s,!1,!1),e[s]=U4(s,!0,!1),a[s]=U4(s,!1,!0),n[s]=U4(s,!0,!0)}),[c,e,a,n]}const[Zt,cl,al,el]=Jt();function n0(c,a){const e=a?c?el:al:c?cl:Zt;return(n,r,s)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?n:Reflect.get(j(e,r)&&r in n?e:n,r,s)}const nl={get:n0(!1,!1)},rl={get:n0(!1,!0)},sl={get:n0(!0,!1)},t7=new WeakMap,l7=new WeakMap,f7=new WeakMap,il=new WeakMap;function ol(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tl(c){return c.__v_skip||!Object.isExtensible(c)?0:ol(kt(c))}function r0(c){return c4(c)?c:s0(c,!1,Kt,nl,t7)}function ll(c){return s0(c,!1,Qt,rl,l7)}function h7(c){return s0(c,!0,Xt,sl,f7)}function s0(c,a,e,n,r){if(!o2(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=r.get(c);if(s)return s;const i=tl(c);if(i===0)return c;const o=new Proxy(c,i===2?n:e);return r.set(c,o),o}function Q1(c){return c4(c)?Q1(c.__v_raw):!!(c&&c.__v_isReactive)}function c4(c){return!!(c&&c.__v_isReadonly)}function m3(c){return!!(c&&c.__v_isShallow)}function m7(c){return Q1(c)||c4(c)}function Y(c){const a=c&&c.__v_raw;return a?Y(a):c}function u7(c){return h3(c,"__v_skip",!0),c}const V4=c=>o2(c)?r0(c):c,i0=c=>o2(c)?h7(c):c;function v7(c){p1&&R2&&(c=Y(c),r7(c.dep||(c.dep=c0())))}function H7(c,a){c=Y(c);const e=c.dep;e&&y6(e)}function N2(c){return!!(c&&c.__v_isRef===!0)}function f2(c){return fl(c,!1)}function fl(c,a){return N2(c)?c:new hl(c,a)}class hl{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:Y(a),this._value=e?a:V4(a)}get value(){return v7(this),this._value}set value(a){const e=this.__v_isShallow||m3(a)||c4(a);a=e?a:Y(a),_1(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:V4(a),H7(this))}}function ml(c){return N2(c)?c.value:c}const ul={get:(c,a,e)=>ml(Reflect.get(c,a,e)),set:(c,a,e,n)=>{const r=c[a];return N2(r)&&!N2(e)?(r.value=e,!0):Reflect.set(c,a,e,n)}};function d7(c){return Q1(c)?c:new Proxy(c,ul)}class vl{constructor(a,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new a0(a,()=>{this._dirty||(this._dirty=!0,H7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const a=Y(this);return v7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function Hl(c,a,e=!1){let n,r;const s=O(c);return s?(n=c,r=Y2):(n=c.get,r=c.set),new vl(n,r,s||!r,e)}function V1(c,a,e,n){let r;try{r=n?c(...n):c()}catch(s){x3(s,a,e)}return r}function P2(c,a,e,n){if(O(c)){const s=V1(c,a,e,n);return s&&X5(s)&&s.catch(i=>{x3(i,a,e)}),s}const r=[];for(let s=0;s<c.length;s++)r.push(P2(c[s],a,e,n));return r}function x3(c,a,e,n=!0){const r=a?a.vnode:null;if(a){let s=a.parent;const i=a.proxy,o=e;for(;s;){const l=s.ec;if(l){for(let h=0;h<l.length;h++)if(l[h](c,i,o)===!1)return}s=s.parent}const t=a.appContext.config.errorHandler;if(t){V1(t,null,10,[c,i,o]);return}}dl(c,e,r,n)}function dl(c,a,e,n=!0){console.error(c)}let M4=!1,b6=!1;const p2=[];let G2=0;const J1=[];let e1=null,A1=0;const z7=Promise.resolve();let o0=null;function p7(c){const a=o0||z7;return c?a.then(this?c.bind(this):c):a}function zl(c){let a=G2+1,e=p2.length;for(;a<e;){const n=a+e>>>1,r=p2[n],s=g4(r);s<c||s===c&&r.pre?a=n+1:e=n}return a}function t0(c){(!p2.length||!p2.includes(c,M4&&c.allowRecurse?G2+1:G2))&&(c.id==null?p2.push(c):p2.splice(zl(c.id),0,c),V7())}function V7(){!M4&&!b6&&(b6=!0,o0=z7.then(g7))}function pl(c){const a=p2.indexOf(c);a>G2&&p2.splice(a,1)}function Vl(c){D(c)?J1.push(...c):(!e1||!e1.includes(c,c.allowRecurse?A1+1:A1))&&J1.push(c),V7()}function _8(c,a,e=M4?G2+1:0){for(;e<p2.length;e++){const n=p2[e];if(n&&n.pre){if(c&&n.id!==c.uid)continue;p2.splice(e,1),e--,n()}}}function M7(c){if(J1.length){const a=[...new Set(J1)];if(J1.length=0,e1){e1.push(...a);return}for(e1=a,e1.sort((e,n)=>g4(e)-g4(n)),A1=0;A1<e1.length;A1++)e1[A1]();e1=null,A1=0}}const g4=c=>c.id==null?1/0:c.id,Ml=(c,a)=>{const e=g4(c)-g4(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function g7(c){b6=!1,M4=!0,p2.sort(Ml);try{for(G2=0;G2<p2.length;G2++){const a=p2[G2];a&&a.active!==!1&&V1(a,null,14)}}finally{G2=0,p2.length=0,M7(),M4=!1,o0=null,(p2.length||J1.length)&&g7()}}function gl(c,a,...e){if(c.isUnmounted)return;const n=c.vnode.props||r2;let r=e;const s=a.startsWith("update:"),i=s&&a.slice(7);if(i&&i in n){const h=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:v}=n[h]||r2;v&&(r=e.map(p=>m2(p)?p.trim():p)),u&&(r=e.map(Tt))}let o,t=n[o=i6(a)]||n[o=i6(X2(a))];!t&&s&&(t=n[o=i6(r4(a))]),t&&P2(t,c,6,r);const l=n[o+"Once"];if(l){if(!c.emitted)c.emitted={};else if(c.emitted[o])return;c.emitted[o]=!0,P2(l,c,6,r)}}function C7(c,a,e=!1){const n=a.emitsCache,r=n.get(c);if(r!==void 0)return r;const s=c.emits;let i={},o=!1;if(!O(c)){const t=l=>{const h=C7(l,a,!0);h&&(o=!0,u2(i,h))};!e&&a.mixins.length&&a.mixins.forEach(t),c.extends&&t(c.extends),c.mixins&&c.mixins.forEach(t)}return!s&&!o?(o2(c)&&n.set(c,null),null):(D(s)?s.forEach(t=>i[t]=null):u2(i,s),o2(c)&&n.set(c,i),i)}function N3(c,a){return!c||!g3(a)?!1:(a=a.slice(2).replace(/Once$/,""),j(c,a[0].toLowerCase()+a.slice(1))||j(c,r4(a))||j(c,a))}let S2=null,k3=null;function u3(c){const a=S2;return S2=c,k3=c&&c.type.__scopeId||null,a}function l0(c){k3=c}function f0(){k3=null}function r3(c,a=S2,e){if(!a||c._n)return c;const n=(...r)=>{n._d&&Z8(-1);const s=u3(a);let i;try{i=c(...r)}finally{u3(s),n._d&&Z8(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function l6(c){const{type:a,vnode:e,proxy:n,withProxy:r,props:s,propsOptions:[i],slots:o,attrs:t,emit:l,render:h,renderCache:u,data:v,setupState:p,ctx:P,inheritAttrs:M}=c;let E,C;const y=u3(c);try{if(e.shapeFlag&4){const w=r||n,N=w;E=q2(h.call(N,w,u,s,p,v,P)),C=t}else{const w=a;E=q2(w.length>1?w(s,{attrs:t,slots:o,emit:l}):w(s,null)),C=a.props?t:Cl(t)}}catch(w){d4.length=0,x3(w,c,1),E=t2(O2)}let x=E;if(C&&M!==!1){const w=Object.keys(C),{shapeFlag:N}=x;w.length&&N&7&&(i&&w.some(Q6)&&(C=Ll(C,i)),x=g1(x,C))}return e.dirs&&(x=g1(x),x.dirs=x.dirs?x.dirs.concat(e.dirs):e.dirs),e.transition&&(x.transition=e.transition),E=x,u3(y),E}const Cl=c=>{let a;for(const e in c)(e==="class"||e==="style"||g3(e))&&((a||(a={}))[e]=c[e]);return a},Ll=(c,a)=>{const e={};for(const n in c)(!Q6(n)||!(n.slice(9)in a))&&(e[n]=c[n]);return e};function yl(c,a,e){const{props:n,children:r,component:s}=c,{props:i,children:o,patchFlag:t}=a,l=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&t>=0){if(t&1024)return!0;if(t&16)return n?O8(n,i,l):!!i;if(t&8){const h=a.dynamicProps;for(let u=0;u<h.length;u++){const v=h[u];if(i[v]!==n[v]&&!N3(l,v))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===i?!1:n?i?O8(n,i,l):!0:!!i;return!1}function O8(c,a,e){const n=Object.keys(a);if(n.length!==Object.keys(c).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(a[s]!==c[s]&&!N3(e,s))return!0}return!1}function bl({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const L7="components";function a1(c,a){return xl(L7,c,!0,a)||c}const wl=Symbol.for("v-ndc");function xl(c,a,e=!0,n=!1){const r=S2||d2;if(r){const s=r.type;if(c===L7){const o=Lf(s,!1);if(o&&(o===a||o===X2(a)||o===y3(X2(a))))return s}const i=W8(r[c]||s[c],a)||W8(r.appContext[c],a);return!i&&n?s:i}}function W8(c,a){return c&&(c[a]||c[X2(a)]||c[y3(X2(a))])}const Nl=c=>c.__isSuspense;function kl(c,a){a&&a.pendingBranch?D(c)?a.effects.push(...c):a.effects.push(c):Vl(c)}function y7(c,a){return S3(c,null,a)}function Sl(c,a){return S3(c,null,{flush:"post"})}const q4={};function D1(c,a,e){return S3(c,a,e)}function S3(c,a,{immediate:e,deep:n,flush:r,onTrack:s,onTrigger:i}=r2){var o;const t=Wt()===((o=d2)==null?void 0:o.scope)?d2:null;let l,h=!1,u=!1;if(N2(c)?(l=()=>c.value,h=m3(c)):Q1(c)?(l=()=>c,n=!0):D(c)?(u=!0,h=c.some(w=>Q1(w)||m3(w)),l=()=>c.map(w=>{if(N2(w))return w.value;if(Q1(w))return B1(w);if(O(w))return V1(w,t,2)})):O(c)?a?l=()=>V1(c,t,2):l=()=>{if(!(t&&t.isUnmounted))return v&&v(),P2(c,t,3,[p])}:l=Y2,a&&n){const w=l;l=()=>B1(w())}let v,p=w=>{v=y.onStop=()=>{V1(w,t,4),v=y.onStop=void 0}},P;if(L4)if(p=Y2,a?e&&P2(a,t,3,[l(),u?[]:void 0,p]):l(),r==="sync"){const w=wf();P=w.__watcherHandles||(w.__watcherHandles=[])}else return Y2;let M=u?new Array(c.length).fill(q4):q4;const E=()=>{if(y.active)if(a){const w=y.run();(n||h||(u?w.some((N,G)=>_1(N,M[G])):_1(w,M)))&&(v&&v(),P2(a,t,3,[w,M===q4?void 0:u&&M[0]===q4?[]:M,p]),M=w)}else y.run()};E.allowRecurse=!!a;let C;r==="sync"?C=E:r==="post"?C=()=>y2(E,t&&t.suspense):(E.pre=!0,t&&(E.id=t.uid),C=()=>t0(E));const y=new a0(l,C);a?e?E():M=y.run():r==="post"?y2(y.run.bind(y),t&&t.suspense):y.run();const x=()=>{y.stop(),t&&t.scope&&J6(t.scope.effects,y)};return P&&P.push(x),x}function Al(c,a,e){const n=this.proxy,r=m2(c)?c.includes(".")?b7(n,c):()=>n[c]:c.bind(n,n);let s;O(a)?s=a:(s=a.handler,e=a);const i=d2;a4(this);const o=S3(r,s.bind(n),e);return i?a4(i):E1(),o}function b7(c,a){const e=a.split(".");return()=>{let n=c;for(let r=0;r<e.length&&n;r++)n=n[e[r]];return n}}function B1(c,a){if(!o2(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),N2(c))B1(c.value,a);else if(D(c))for(let e=0;e<c.length;e++)B1(c[e],a);else if(K5(c)||X1(c))c.forEach(e=>{B1(e,a)});else if(J5(c))for(const e in c)B1(c[e],a);return c}function $8(c,a){const e=S2;if(e===null)return c;const n=R3(e)||e.proxy,r=c.dirs||(c.dirs=[]);for(let s=0;s<a.length;s++){let[i,o,t,l=r2]=a[s];i&&(O(i)&&(i={mounted:i,updated:i}),i.deep&&B1(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:t,modifiers:l}))}return c}function x1(c,a,e,n){const r=c.dirs,s=a&&a.dirs;for(let i=0;i<r.length;i++){const o=r[i];s&&(o.oldValue=s[i].value);let t=o.dir[n];t&&(s4(),P2(t,e,8,[c.el,o,c,a]),i4())}}const d1=Symbol("_leaveCb"),G4=Symbol("_enterCb");function Tl(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return S4(()=>{c.isMounted=!0}),S7(()=>{c.isUnmounting=!0}),c}const T2=[Function,Array],w7={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:T2,onEnter:T2,onAfterEnter:T2,onEnterCancelled:T2,onBeforeLeave:T2,onLeave:T2,onAfterLeave:T2,onLeaveCancelled:T2,onBeforeAppear:T2,onAppear:T2,onAfterAppear:T2,onAppearCancelled:T2},Pl={name:"BaseTransition",props:w7,setup(c,{slots:a}){const e=W7(),n=Tl();let r;return()=>{const s=a.default&&N7(a.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const M of s)if(M.type!==O2){i=M;break}}const o=Y(c),{mode:t}=o;if(n.isLeaving)return f6(i);const l=U8(i);if(!l)return f6(i);const h=w6(l,o,n,e);x6(l,h);const u=e.subTree,v=u&&U8(u);let p=!1;const{getTransitionKey:P}=l.type;if(P){const M=P();r===void 0?r=M:M!==r&&(r=M,p=!0)}if(v&&v.type!==O2&&(!T1(l,v)||p)){const M=w6(v,o,n,e);if(x6(v,M),t==="out-in")return n.isLeaving=!0,M.afterLeave=()=>{n.isLeaving=!1,e.update.active!==!1&&e.update()},f6(i);t==="in-out"&&l.type!==O2&&(M.delayLeave=(E,C,y)=>{const x=x7(n,v);x[String(v.key)]=v,E[d1]=()=>{C(),E[d1]=void 0,delete h.delayedLeave},h.delayedLeave=y})}return i}}},Bl=Pl;function x7(c,a){const{leavingVNodes:e}=c;let n=e.get(a.type);return n||(n=Object.create(null),e.set(a.type,n)),n}function w6(c,a,e,n){const{appear:r,mode:s,persisted:i=!1,onBeforeEnter:o,onEnter:t,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:u,onLeave:v,onAfterLeave:p,onLeaveCancelled:P,onBeforeAppear:M,onAppear:E,onAfterAppear:C,onAppearCancelled:y}=a,x=String(c.key),w=x7(e,c),N=(R,W)=>{R&&P2(R,n,9,W)},G=(R,W)=>{const Q=W[1];N(R,W),D(R)?R.every(H2=>H2.length<=1)&&Q():R.length<=1&&Q()},K={mode:s,persisted:i,beforeEnter(R){let W=o;if(!e.isMounted)if(r)W=M||o;else return;R[d1]&&R[d1](!0);const Q=w[x];Q&&T1(c,Q)&&Q.el[d1]&&Q.el[d1](),N(W,[R])},enter(R){let W=t,Q=l,H2=h;if(!e.isMounted)if(r)W=E||t,Q=C||l,H2=y||h;else return;let B=!1;const c2=R[G4]=M2=>{B||(B=!0,M2?N(H2,[R]):N(Q,[R]),K.delayedLeave&&K.delayedLeave(),R[G4]=void 0)};W?G(W,[R,c2]):c2()},leave(R,W){const Q=String(c.key);if(R[G4]&&R[G4](!0),e.isUnmounting)return W();N(u,[R]);let H2=!1;const B=R[d1]=c2=>{H2||(H2=!0,W(),c2?N(P,[R]):N(p,[R]),R[d1]=void 0,w[Q]===c&&delete w[Q])};w[Q]=c,v?G(v,[R,B]):B()},clone(R){return w6(R,a,e,n)}};return K}function f6(c){if(A3(c))return c=g1(c),c.children=null,c}function U8(c){return A3(c)?c.children?c.children[0]:void 0:c}function x6(c,a){c.shapeFlag&6&&c.component?x6(c.component.subTree,a):c.shapeFlag&128?(c.ssContent.transition=a.clone(c.ssContent),c.ssFallback.transition=a.clone(c.ssFallback)):c.transition=a}function N7(c,a=!1,e){let n=[],r=0;for(let s=0;s<c.length;s++){let i=c[s];const o=e==null?i.key:String(e)+String(i.key!=null?i.key:s);i.type===b2?(i.patchFlag&128&&r++,n=n.concat(N7(i.children,a,o))):(a||i.type!==O2)&&n.push(o!=null?g1(i,{key:o}):i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}/*! #__NO_SIDE_EFFECTS__ */function Q2(c,a){return O(c)?u2({name:c.name},a,{setup:c}):c}const s3=c=>!!c.type.__asyncLoader,A3=c=>c.type.__isKeepAlive;function Fl(c,a){k7(c,"a",a)}function Il(c,a){k7(c,"da",a)}function k7(c,a,e=d2){const n=c.__wdc||(c.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(T3(a,n,e),e){let r=e.parent;for(;r&&r.parent;)A3(r.parent.vnode)&&Rl(n,a,e,r),r=r.parent}}function Rl(c,a,e,n){const r=T3(a,c,n,!0);B3(()=>{J6(n[a],r)},e)}function T3(c,a,e=d2,n=!1){if(e){const r=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...i)=>{if(e.isUnmounted)return;s4(),a4(e);const o=P2(a,e,c,i);return E1(),i4(),o});return n?r.unshift(s):r.push(s),s}}const t1=c=>(a,e=d2)=>(!L4||c==="sp")&&T3(c,(...n)=>a(...n),e),P3=t1("bm"),S4=t1("m"),Dl=t1("bu"),El=t1("u"),S7=t1("bum"),B3=t1("um"),_l=t1("sp"),Ol=t1("rtg"),Wl=t1("rtc");function $l(c,a=d2){T3("ec",c,a)}function h0(c,a,e,n){let r;const s=e&&e[n];if(D(c)||m2(c)){r=new Array(c.length);for(let i=0,o=c.length;i<o;i++)r[i]=a(c[i],i,void 0,s&&s[i])}else if(typeof c=="number"){r=new Array(c);for(let i=0;i<c;i++)r[i]=a(i+1,i,void 0,s&&s[i])}else if(o2(c))if(c[Symbol.iterator])r=Array.from(c,(i,o)=>a(i,o,void 0,s&&s[o]));else{const i=Object.keys(c);r=new Array(i.length);for(let o=0,t=i.length;o<t;o++){const l=i[o];r[o]=a(c[l],l,o,s&&s[o])}}else r=[];return e&&(e[n]=r),r}const N6=c=>c?$7(c)?R3(c)||c.proxy:N6(c.parent):null,H4=u2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>N6(c.parent),$root:c=>N6(c.root),$emit:c=>c.emit,$options:c=>m0(c),$forceUpdate:c=>c.f||(c.f=()=>t0(c.update)),$nextTick:c=>c.n||(c.n=p7.bind(c.proxy)),$watch:c=>Al.bind(c)}),h6=(c,a)=>c!==r2&&!c.__isScriptSetup&&j(c,a),Ul={get({_:c},a){const{ctx:e,setupState:n,data:r,props:s,accessCache:i,type:o,appContext:t}=c;let l;if(a[0]!=="$"){const p=i[a];if(p!==void 0)switch(p){case 1:return n[a];case 2:return r[a];case 4:return e[a];case 3:return s[a]}else{if(h6(n,a))return i[a]=1,n[a];if(r!==r2&&j(r,a))return i[a]=2,r[a];if((l=c.propsOptions[0])&&j(l,a))return i[a]=3,s[a];if(e!==r2&&j(e,a))return i[a]=4,e[a];k6&&(i[a]=0)}}const h=H4[a];let u,v;if(h)return a==="$attrs"&&x2(c,"get",a),h(c);if((u=o.__cssModules)&&(u=u[a]))return u;if(e!==r2&&j(e,a))return i[a]=4,e[a];if(v=t.config.globalProperties,j(v,a))return v[a]},set({_:c},a,e){const{data:n,setupState:r,ctx:s}=c;return h6(r,a)?(r[a]=e,!0):n!==r2&&j(n,a)?(n[a]=e,!0):j(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:n,appContext:r,propsOptions:s}},i){let o;return!!e[i]||c!==r2&&j(c,i)||h6(a,i)||(o=s[0])&&j(o,i)||j(n,i)||j(H4,i)||j(r.config.globalProperties,i)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:j(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function q8(c){return D(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let k6=!0;function ql(c){const a=m0(c),e=c.proxy,n=c.ctx;k6=!1,a.beforeCreate&&G8(a.beforeCreate,c,"bc");const{data:r,computed:s,methods:i,watch:o,provide:t,inject:l,created:h,beforeMount:u,mounted:v,beforeUpdate:p,updated:P,activated:M,deactivated:E,beforeDestroy:C,beforeUnmount:y,destroyed:x,unmounted:w,render:N,renderTracked:G,renderTriggered:K,errorCaptured:R,serverPrefetch:W,expose:Q,inheritAttrs:H2,components:B,directives:c2,filters:M2}=a;if(l&&Gl(l,n,null),i)for(const a2 in i){const J=i[a2];O(J)&&(n[a2]=J.bind(e))}if(r){const a2=r.call(e,e);o2(a2)&&(c.data=r0(a2))}if(k6=!0,s)for(const a2 in s){const J=s[a2],Z2=O(J)?J.bind(e,e):O(J.get)?J.get.bind(e,e):Y2,b1=!O(J)&&O(J.set)?J.set.bind(e):Y2,c1=X({get:Z2,set:b1});Object.defineProperty(n,a2,{enumerable:!0,configurable:!0,get:()=>c1.value,set:g2=>c1.value=g2})}if(o)for(const a2 in o)A7(o[a2],n,e,a2);if(t){const a2=O(t)?t.call(e):t;Reflect.ownKeys(a2).forEach(J=>{Jl(J,a2[J])})}h&&G8(h,c,"c");function e2(a2,J){D(J)?J.forEach(Z2=>a2(Z2.bind(e))):J&&a2(J.bind(e))}if(e2(P3,u),e2(S4,v),e2(Dl,p),e2(El,P),e2(Fl,M),e2(Il,E),e2($l,R),e2(Wl,G),e2(Ol,K),e2(S7,y),e2(B3,w),e2(_l,W),D(Q))if(Q.length){const a2=c.exposed||(c.exposed={});Q.forEach(J=>{Object.defineProperty(a2,J,{get:()=>e[J],set:Z2=>e[J]=Z2})})}else c.exposed||(c.exposed={});N&&c.render===Y2&&(c.render=N),H2!=null&&(c.inheritAttrs=H2),B&&(c.components=B),c2&&(c.directives=c2)}function Gl(c,a,e=Y2){D(c)&&(c=S6(c));for(const n in c){const r=c[n];let s;o2(r)?"default"in r?s=i3(r.from||n,r.default,!0):s=i3(r.from||n):s=i3(r),N2(s)?Object.defineProperty(a,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):a[n]=s}}function G8(c,a,e){P2(D(c)?c.map(n=>n.bind(a.proxy)):c.bind(a.proxy),a,e)}function A7(c,a,e,n){const r=n.includes(".")?b7(e,n):()=>e[n];if(m2(c)){const s=a[c];O(s)&&D1(r,s)}else if(O(c))D1(r,c.bind(e));else if(o2(c))if(D(c))c.forEach(s=>A7(s,a,e,n));else{const s=O(c.handler)?c.handler.bind(e):a[c.handler];O(s)&&D1(r,s,c)}}function m0(c){const a=c.type,{mixins:e,extends:n}=a,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=c.appContext,o=s.get(a);let t;return o?t=o:!r.length&&!e&&!n?t=a:(t={},r.length&&r.forEach(l=>v3(t,l,i,!0)),v3(t,a,i)),o2(a)&&s.set(a,t),t}function v3(c,a,e,n=!1){const{mixins:r,extends:s}=a;s&&v3(c,s,e,!0),r&&r.forEach(i=>v3(c,i,e,!0));for(const i in a)if(!(n&&i==="expose")){const o=jl[i]||e&&e[i];c[i]=o?o(c[i],a[i]):a[i]}return c}const jl={data:j8,props:Y8,emits:Y8,methods:u4,computed:u4,beforeCreate:C2,created:C2,beforeMount:C2,mounted:C2,beforeUpdate:C2,updated:C2,beforeDestroy:C2,beforeUnmount:C2,destroyed:C2,unmounted:C2,activated:C2,deactivated:C2,errorCaptured:C2,serverPrefetch:C2,components:u4,directives:u4,watch:Kl,provide:j8,inject:Yl};function j8(c,a){return a?c?function(){return u2(O(c)?c.call(this,this):c,O(a)?a.call(this,this):a)}:a:c}function Yl(c,a){return u4(S6(c),S6(a))}function S6(c){if(D(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function C2(c,a){return c?[...new Set([].concat(c,a))]:a}function u4(c,a){return c?u2(Object.create(null),c,a):a}function Y8(c,a){return c?D(c)&&D(a)?[...new Set([...c,...a])]:u2(Object.create(null),q8(c),q8(a??{})):a}function Kl(c,a){if(!c)return a;if(!a)return c;const e=u2(Object.create(null),c);for(const n in a)e[n]=C2(c[n],a[n]);return e}function T7(){return{app:null,config:{isNativeTag:xt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xl=0;function Ql(c,a){return function(n,r=null){O(n)||(n=u2({},n)),r!=null&&!o2(r)&&(r=null);const s=T7(),i=new WeakSet;let o=!1;const t=s.app={_uid:Xl++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:xf,get config(){return s.config},set config(l){},use(l,...h){return i.has(l)||(l&&O(l.install)?(i.add(l),l.install(t,...h)):O(l)&&(i.add(l),l(t,...h))),t},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),t},component(l,h){return h?(s.components[l]=h,t):s.components[l]},directive(l,h){return h?(s.directives[l]=h,t):s.directives[l]},mount(l,h,u){if(!o){const v=t2(n,r);return v.appContext=s,h&&a?a(v,l):c(v,l,u),o=!0,t._container=l,l.__vue_app__=t,R3(v.component)||v.component.proxy}},unmount(){o&&(c(null,t._container),delete t._container.__vue_app__)},provide(l,h){return s.provides[l]=h,t},runWithContext(l){H3=t;try{return l()}finally{H3=null}}};return t}}let H3=null;function Jl(c,a){if(d2){let e=d2.provides;const n=d2.parent&&d2.parent.provides;n===e&&(e=d2.provides=Object.create(n)),e[c]=a}}function i3(c,a,e=!1){const n=d2||S2;if(n||H3){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:H3._context.provides;if(r&&c in r)return r[c];if(arguments.length>1)return e&&O(a)?a.call(n&&n.proxy):a}}function Zl(c,a,e,n=!1){const r={},s={};h3(s,I3,1),c.propsDefaults=Object.create(null),P7(c,a,r,s);for(const i in c.propsOptions[0])i in r||(r[i]=void 0);e?c.props=n?r:ll(r):c.type.props?c.props=r:c.props=s,c.attrs=s}function cf(c,a,e,n){const{props:r,attrs:s,vnode:{patchFlag:i}}=c,o=Y(r),[t]=c.propsOptions;let l=!1;if((n||i>0)&&!(i&16)){if(i&8){const h=c.vnode.dynamicProps;for(let u=0;u<h.length;u++){let v=h[u];if(N3(c.emitsOptions,v))continue;const p=a[v];if(t)if(j(s,v))p!==s[v]&&(s[v]=p,l=!0);else{const P=X2(v);r[P]=A6(t,o,P,p,c,!1)}else p!==s[v]&&(s[v]=p,l=!0)}}}else{P7(c,a,r,s)&&(l=!0);let h;for(const u in o)(!a||!j(a,u)&&((h=r4(u))===u||!j(a,h)))&&(t?e&&(e[u]!==void 0||e[h]!==void 0)&&(r[u]=A6(t,o,u,void 0,c,!0)):delete r[u]);if(s!==o)for(const u in s)(!a||!j(a,u))&&(delete s[u],l=!0)}l&&r1(c,"set","$attrs")}function P7(c,a,e,n){const[r,s]=c.propsOptions;let i=!1,o;if(a)for(let t in a){if(n3(t))continue;const l=a[t];let h;r&&j(r,h=X2(t))?!s||!s.includes(h)?e[h]=l:(o||(o={}))[h]=l:N3(c.emitsOptions,t)||(!(t in n)||l!==n[t])&&(n[t]=l,i=!0)}if(s){const t=Y(e),l=o||r2;for(let h=0;h<s.length;h++){const u=s[h];e[u]=A6(r,t,u,l[u],c,!j(l,u))}}return i}function A6(c,a,e,n,r,s){const i=c[e];if(i!=null){const o=j(i,"default");if(o&&n===void 0){const t=i.default;if(i.type!==Function&&!i.skipFactory&&O(t)){const{propsDefaults:l}=r;e in l?n=l[e]:(a4(r),n=l[e]=t.call(null,a),E1())}else n=t}i[0]&&(s&&!o?n=!1:i[1]&&(n===""||n===r4(e))&&(n=!0))}return n}function B7(c,a,e=!1){const n=a.propsCache,r=n.get(c);if(r)return r;const s=c.props,i={},o=[];let t=!1;if(!O(c)){const h=u=>{t=!0;const[v,p]=B7(u,a,!0);u2(i,v),p&&o.push(...p)};!e&&a.mixins.length&&a.mixins.forEach(h),c.extends&&h(c.extends),c.mixins&&c.mixins.forEach(h)}if(!s&&!t)return o2(c)&&n.set(c,K1),K1;if(D(s))for(let h=0;h<s.length;h++){const u=X2(s[h]);K8(u)&&(i[u]=r2)}else if(s)for(const h in s){const u=X2(h);if(K8(u)){const v=s[h],p=i[u]=D(v)||O(v)?{type:v}:u2({},v);if(p){const P=J8(Boolean,p.type),M=J8(String,p.type);p[0]=P>-1,p[1]=M<0||P<M,(P>-1||j(p,"default"))&&o.push(u)}}}const l=[i,o];return o2(c)&&n.set(c,l),l}function K8(c){return c[0]!=="$"}function X8(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function Q8(c,a){return X8(c)===X8(a)}function J8(c,a){return D(a)?a.findIndex(e=>Q8(e,c)):O(a)&&Q8(a,c)?0:-1}const F7=c=>c[0]==="_"||c==="$stable",u0=c=>D(c)?c.map(q2):[q2(c)],af=(c,a,e)=>{if(a._n)return a;const n=r3((...r)=>u0(a(...r)),e);return n._c=!1,n},I7=(c,a,e)=>{const n=c._ctx;for(const r in c){if(F7(r))continue;const s=c[r];if(O(s))a[r]=af(r,s,n);else if(s!=null){const i=u0(s);a[r]=()=>i}}},R7=(c,a)=>{const e=u0(a);c.slots.default=()=>e},ef=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=Y(a),h3(a,"_",e)):I7(a,c.slots={})}else c.slots={},a&&R7(c,a);h3(c.slots,I3,1)},nf=(c,a,e)=>{const{vnode:n,slots:r}=c;let s=!0,i=r2;if(n.shapeFlag&32){const o=a._;o?e&&o===1?s=!1:(u2(r,a),!e&&o===1&&delete r._):(s=!a.$stable,I7(a,r)),i=a}else a&&(R7(c,a),i={default:1});if(s)for(const o in r)!F7(o)&&i[o]==null&&delete r[o]};function T6(c,a,e,n,r=!1){if(D(c)){c.forEach((v,p)=>T6(v,a&&(D(a)?a[p]:a),e,n,r));return}if(s3(n)&&!r)return;const s=n.shapeFlag&4?R3(n.component)||n.component.proxy:n.el,i=r?null:s,{i:o,r:t}=c,l=a&&a.r,h=o.refs===r2?o.refs={}:o.refs,u=o.setupState;if(l!=null&&l!==t&&(m2(l)?(h[l]=null,j(u,l)&&(u[l]=null)):N2(l)&&(l.value=null)),O(t))V1(t,o,12,[i,h]);else{const v=m2(t),p=N2(t);if(v||p){const P=()=>{if(c.f){const M=v?j(u,t)?u[t]:h[t]:t.value;r?D(M)&&J6(M,s):D(M)?M.includes(s)||M.push(s):v?(h[t]=[s],j(u,t)&&(u[t]=h[t])):(t.value=[s],c.k&&(h[c.k]=t.value))}else v?(h[t]=i,j(u,t)&&(u[t]=i)):p&&(t.value=i,c.k&&(h[c.k]=i))};i?(P.id=-1,y2(P,e)):P()}}}const y2=kl;function rf(c){return sf(c)}function sf(c,a){const e=M6();e.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:i,createText:o,createComment:t,setText:l,setElementText:h,parentNode:u,nextSibling:v,setScopeId:p=Y2,insertStaticContent:P}=c,M=(f,m,H,d=null,z=null,L=null,k=!1,g=null,b=!!m.dynamicChildren)=>{if(f===m)return;f&&!T1(f,m)&&(d=U1(f),g2(f,z,L,!0),f=null),m.patchFlag===-2&&(b=!1,m.dynamicChildren=null);const{type:V,ref:F,shapeFlag:A}=m;switch(V){case F3:E(f,m,H,d);break;case O2:C(f,m,H,d);break;case o3:f==null&&y(m,H,d,k);break;case b2:B(f,m,H,d,z,L,k,g,b);break;default:A&1?N(f,m,H,d,z,L,k,g,b):A&6?c2(f,m,H,d,z,L,k,g,b):(A&64||A&128)&&V.process(f,m,H,d,z,L,k,g,b,h1)}F!=null&&z&&T6(F,f&&f.ref,L,m||f,!m)},E=(f,m,H,d)=>{if(f==null)n(m.el=o(m.children),H,d);else{const z=m.el=f.el;m.children!==f.children&&l(z,m.children)}},C=(f,m,H,d)=>{f==null?n(m.el=t(m.children||""),H,d):m.el=f.el},y=(f,m,H,d)=>{[f.el,f.anchor]=P(f.children,m,H,d,f.el,f.anchor)},x=({el:f,anchor:m},H,d)=>{let z;for(;f&&f!==m;)z=v(f),n(f,H,d),f=z;n(m,H,d)},w=({el:f,anchor:m})=>{let H;for(;f&&f!==m;)H=v(f),r(f),f=H;r(m)},N=(f,m,H,d,z,L,k,g,b)=>{k=k||m.type==="svg",f==null?G(m,H,d,z,L,k,g,b):W(f,m,z,L,k,g,b)},G=(f,m,H,d,z,L,k,g)=>{let b,V;const{type:F,props:A,shapeFlag:I,transition:_,dirs:U}=f;if(b=f.el=i(f.type,L,A&&A.is,A),I&8?h(b,f.children):I&16&&R(f.children,b,null,d,z,L&&F!=="foreignObject",k,g),U&&x1(f,null,d,"created"),K(b,f,f.scopeId,k,d),A){for(const Z in A)Z!=="value"&&!n3(Z)&&s(b,Z,null,A[Z],L,f.children,d,z,B2);"value"in A&&s(b,"value",null,A.value),(V=A.onVnodeBeforeMount)&&$2(V,d,f)}U&&x1(f,null,d,"beforeMount");const n2=of(z,_);n2&&_.beforeEnter(b),n(b,m,H),((V=A&&A.onVnodeMounted)||n2||U)&&y2(()=>{V&&$2(V,d,f),n2&&_.enter(b),U&&x1(f,null,d,"mounted")},z)},K=(f,m,H,d,z)=>{if(H&&p(f,H),d)for(let L=0;L<d.length;L++)p(f,d[L]);if(z){let L=z.subTree;if(m===L){const k=z.vnode;K(f,k,k.scopeId,k.slotScopeIds,z.parent)}}},R=(f,m,H,d,z,L,k,g,b=0)=>{for(let V=b;V<f.length;V++){const F=f[V]=g?z1(f[V]):q2(f[V]);M(null,F,m,H,d,z,L,k,g)}},W=(f,m,H,d,z,L,k)=>{const g=m.el=f.el;let{patchFlag:b,dynamicChildren:V,dirs:F}=m;b|=f.patchFlag&16;const A=f.props||r2,I=m.props||r2;let _;H&&N1(H,!1),(_=I.onVnodeBeforeUpdate)&&$2(_,H,m,f),F&&x1(m,f,H,"beforeUpdate"),H&&N1(H,!0);const U=z&&m.type!=="foreignObject";if(V?Q(f.dynamicChildren,V,g,H,d,U,L):k||J(f,m,g,null,H,d,U,L,!1),b>0){if(b&16)H2(g,m,A,I,H,d,z);else if(b&2&&A.class!==I.class&&s(g,"class",null,I.class,z),b&4&&s(g,"style",A.style,I.style,z),b&8){const n2=m.dynamicProps;for(let Z=0;Z<n2.length;Z++){const h2=n2[Z],F2=A[h2],q1=I[h2];(q1!==F2||h2==="value")&&s(g,h2,F2,q1,z,f.children,H,d,B2)}}b&1&&f.children!==m.children&&h(g,m.children)}else!k&&V==null&&H2(g,m,A,I,H,d,z);((_=I.onVnodeUpdated)||F)&&y2(()=>{_&&$2(_,H,m,f),F&&x1(m,f,H,"updated")},d)},Q=(f,m,H,d,z,L,k)=>{for(let g=0;g<m.length;g++){const b=f[g],V=m[g],F=b.el&&(b.type===b2||!T1(b,V)||b.shapeFlag&70)?u(b.el):H;M(b,V,F,null,d,z,L,k,!0)}},H2=(f,m,H,d,z,L,k)=>{if(H!==d){if(H!==r2)for(const g in H)!n3(g)&&!(g in d)&&s(f,g,H[g],null,k,m.children,z,L,B2);for(const g in d){if(n3(g))continue;const b=d[g],V=H[g];b!==V&&g!=="value"&&s(f,g,V,b,k,m.children,z,L,B2)}"value"in d&&s(f,"value",H.value,d.value)}},B=(f,m,H,d,z,L,k,g,b)=>{const V=m.el=f?f.el:o(""),F=m.anchor=f?f.anchor:o("");let{patchFlag:A,dynamicChildren:I,slotScopeIds:_}=m;_&&(g=g?g.concat(_):_),f==null?(n(V,H,d),n(F,H,d),R(m.children,H,F,z,L,k,g,b)):A>0&&A&64&&I&&f.dynamicChildren?(Q(f.dynamicChildren,I,H,z,L,k,g),(m.key!=null||z&&m===z.subTree)&&D7(f,m,!0)):J(f,m,H,F,z,L,k,g,b)},c2=(f,m,H,d,z,L,k,g,b)=>{m.slotScopeIds=g,f==null?m.shapeFlag&512?z.ctx.activate(m,H,d,k,b):M2(m,H,d,z,L,k,b):J2(f,m,b)},M2=(f,m,H,d,z,L,k)=>{const g=f.component=pf(f,d,z);if(A3(f)&&(g.ctx.renderer=h1),Vf(g),g.asyncDep){if(z&&z.registerDep(g,e2),!f.el){const b=g.subTree=t2(O2);C(null,b,m,H)}return}e2(g,f,m,H,z,L,k)},J2=(f,m,H)=>{const d=m.component=f.component;if(yl(f,m,H))if(d.asyncDep&&!d.asyncResolved){a2(d,m,H);return}else d.next=m,pl(d.update),d.update();else m.el=f.el,d.vnode=m},e2=(f,m,H,d,z,L,k)=>{const g=()=>{if(f.isMounted){let{next:F,bu:A,u:I,parent:_,vnode:U}=f,n2=F,Z;N1(f,!1),F?(F.el=U.el,a2(f,F,k)):F=U,A&&o6(A),(Z=F.props&&F.props.onVnodeBeforeUpdate)&&$2(Z,_,F,U),N1(f,!0);const h2=l6(f),F2=f.subTree;f.subTree=h2,M(F2,h2,u(F2.el),U1(F2),f,z,L),F.el=h2.el,n2===null&&bl(f,h2.el),I&&y2(I,z),(Z=F.props&&F.props.onVnodeUpdated)&&y2(()=>$2(Z,_,F,U),z)}else{let F;const{el:A,props:I}=m,{bm:_,m:U,parent:n2}=f,Z=s3(m);if(N1(f,!1),_&&o6(_),!Z&&(F=I&&I.onVnodeBeforeMount)&&$2(F,n2,m),N1(f,!0),A&&$){const h2=()=>{f.subTree=l6(f),$(A,f.subTree,f,z,null)};Z?m.type.__asyncLoader().then(()=>!f.isUnmounted&&h2()):h2()}else{const h2=f.subTree=l6(f);M(null,h2,H,d,f,z,L),m.el=h2.el}if(U&&y2(U,z),!Z&&(F=I&&I.onVnodeMounted)){const h2=m;y2(()=>$2(F,n2,h2),z)}(m.shapeFlag&256||n2&&s3(n2.vnode)&&n2.vnode.shapeFlag&256)&&f.a&&y2(f.a,z),f.isMounted=!0,m=H=d=null}},b=f.effect=new a0(g,()=>t0(V),f.scope),V=f.update=()=>b.run();V.id=f.uid,N1(f,!0),V()},a2=(f,m,H)=>{m.component=f;const d=f.vnode.props;f.vnode=m,f.next=null,cf(f,m.props,d,H),nf(f,m.children,H),s4(),_8(f),i4()},J=(f,m,H,d,z,L,k,g,b=!1)=>{const V=f&&f.children,F=f?f.shapeFlag:0,A=m.children,{patchFlag:I,shapeFlag:_}=m;if(I>0){if(I&128){b1(V,A,H,d,z,L,k,g,b);return}else if(I&256){Z2(V,A,H,d,z,L,k,g,b);return}}_&8?(F&16&&B2(V,z,L),A!==V&&h(H,A)):F&16?_&16?b1(V,A,H,d,z,L,k,g,b):B2(V,z,L,!0):(F&8&&h(H,""),_&16&&R(A,H,d,z,L,k,g,b))},Z2=(f,m,H,d,z,L,k,g,b)=>{f=f||K1,m=m||K1;const V=f.length,F=m.length,A=Math.min(V,F);let I;for(I=0;I<A;I++){const _=m[I]=b?z1(m[I]):q2(m[I]);M(f[I],_,H,null,z,L,k,g,b)}V>F?B2(f,z,L,!0,!1,A):R(m,H,d,z,L,k,g,b,A)},b1=(f,m,H,d,z,L,k,g,b)=>{let V=0;const F=m.length;let A=f.length-1,I=F-1;for(;V<=A&&V<=I;){const _=f[V],U=m[V]=b?z1(m[V]):q2(m[V]);if(T1(_,U))M(_,U,H,null,z,L,k,g,b);else break;V++}for(;V<=A&&V<=I;){const _=f[A],U=m[I]=b?z1(m[I]):q2(m[I]);if(T1(_,U))M(_,U,H,null,z,L,k,g,b);else break;A--,I--}if(V>A){if(V<=I){const _=I+1,U=_<F?m[_].el:d;for(;V<=I;)M(null,m[V]=b?z1(m[V]):q2(m[V]),H,U,z,L,k,g,b),V++}}else if(V>I)for(;V<=A;)g2(f[V],z,L,!0),V++;else{const _=V,U=V,n2=new Map;for(V=U;V<=I;V++){const k2=m[V]=b?z1(m[V]):q2(m[V]);k2.key!=null&&n2.set(k2.key,V)}let Z,h2=0;const F2=I-U+1;let q1=!1,k8=0;const l4=new Array(F2);for(V=0;V<F2;V++)l4[V]=0;for(V=_;V<=A;V++){const k2=f[V];if(h2>=F2){g2(k2,z,L,!0);continue}let W2;if(k2.key!=null)W2=n2.get(k2.key);else for(Z=U;Z<=I;Z++)if(l4[Z-U]===0&&T1(k2,m[Z])){W2=Z;break}W2===void 0?g2(k2,z,L,!0):(l4[W2-U]=V+1,W2>=k8?k8=W2:q1=!0,M(k2,m[W2],H,null,z,L,k,g,b),h2++)}const S8=q1?tf(l4):K1;for(Z=S8.length-1,V=F2-1;V>=0;V--){const k2=U+V,W2=m[k2],A8=k2+1<F?m[k2+1].el:d;l4[V]===0?M(null,W2,H,A8,z,L,k,g,b):q1&&(Z<0||V!==S8[Z]?c1(W2,H,A8,2):Z--)}}},c1=(f,m,H,d,z=null)=>{const{el:L,type:k,transition:g,children:b,shapeFlag:V}=f;if(V&6){c1(f.component.subTree,m,H,d);return}if(V&128){f.suspense.move(m,H,d);return}if(V&64){k.move(f,m,H,h1);return}if(k===b2){n(L,m,H);for(let A=0;A<b.length;A++)c1(b[A],m,H,d);n(f.anchor,m,H);return}if(k===o3){x(f,m,H);return}if(d!==2&&V&1&&g)if(d===0)g.beforeEnter(L),n(L,m,H),y2(()=>g.enter(L),z);else{const{leave:A,delayLeave:I,afterLeave:_}=g,U=()=>n(L,m,H),n2=()=>{A(L,()=>{U(),_&&_()})};I?I(L,U,n2):n2()}else n(L,m,H)},g2=(f,m,H,d=!1,z=!1)=>{const{type:L,props:k,ref:g,children:b,dynamicChildren:V,shapeFlag:F,patchFlag:A,dirs:I}=f;if(g!=null&&T6(g,null,H,f,!0),F&256){m.ctx.deactivate(f);return}const _=F&1&&I,U=!s3(f);let n2;if(U&&(n2=k&&k.onVnodeBeforeUnmount)&&$2(n2,m,f),F&6)s6(f.component,H,d);else{if(F&128){f.suspense.unmount(H,d);return}_&&x1(f,null,m,"beforeUnmount"),F&64?f.type.remove(f,m,H,z,h1,d):V&&(L!==b2||A>0&&A&64)?B2(V,m,H,!1,!0):(L===b2&&A&384||!z&&F&16)&&B2(b,m,H),d&&E4(f)}(U&&(n2=k&&k.onVnodeUnmounted)||_)&&y2(()=>{n2&&$2(n2,m,f),_&&x1(f,null,m,"unmounted")},H)},E4=f=>{const{type:m,el:H,anchor:d,transition:z}=f;if(m===b2){$1(H,d);return}if(m===o3){w(f);return}const L=()=>{r(H),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(f.shapeFlag&1&&z&&!z.persisted){const{leave:k,delayLeave:g}=z,b=()=>k(H,L);g?g(f.el,L,b):b()}else L()},$1=(f,m)=>{let H;for(;f!==m;)H=v(f),r(f),f=H;r(m)},s6=(f,m,H)=>{const{bum:d,scope:z,update:L,subTree:k,um:g}=f;d&&o6(d),z.stop(),L&&(L.active=!1,g2(k,f,m,H)),g&&y2(g,m),y2(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},B2=(f,m,H,d=!1,z=!1,L=0)=>{for(let k=L;k<f.length;k++)g2(f[k],m,H,d,z)},U1=f=>f.shapeFlag&6?U1(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),w1=(f,m,H)=>{f==null?m._vnode&&g2(m._vnode,null,null,!0):M(m._vnode||null,f,m,null,null,null,H),_8(),M7(),m._vnode=f},h1={p:M,um:g2,m:c1,r:E4,mt:M2,mc:R,pc:J,pbc:Q,n:U1,o:c};let t4,$;return a&&([t4,$]=a(h1)),{render:w1,hydrate:t4,createApp:Ql(w1,t4)}}function N1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function of(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function D7(c,a,e=!1){const n=c.children,r=a.children;if(D(n)&&D(r))for(let s=0;s<n.length;s++){const i=n[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=z1(r[s]),o.el=i.el),e||D7(i,o)),o.type===F3&&(o.el=i.el)}}function tf(c){const a=c.slice(),e=[0];let n,r,s,i,o;const t=c.length;for(n=0;n<t;n++){const l=c[n];if(l!==0){if(r=e[e.length-1],c[r]<l){a[n]=r,e.push(n);continue}for(s=0,i=e.length-1;s<i;)o=s+i>>1,c[e[o]]<l?s=o+1:i=o;l<c[e[s]]&&(s>0&&(a[n]=e[s-1]),e[s]=n)}}for(s=e.length,i=e[s-1];s-- >0;)e[s]=i,i=a[i];return e}const lf=c=>c.__isTeleport,b2=Symbol.for("v-fgt"),F3=Symbol.for("v-txt"),O2=Symbol.for("v-cmt"),o3=Symbol.for("v-stc"),d4=[];let D2=null;function z2(c=!1){d4.push(D2=c?null:[])}function ff(){d4.pop(),D2=d4[d4.length-1]||null}let C4=1;function Z8(c){C4+=c}function E7(c){return c.dynamicChildren=C4>0?D2||K1:null,ff(),C4>0&&D2&&D2.push(c),c}function V2(c,a,e,n,r,s){return E7(q(c,a,e,n,r,s,!0))}function hf(c,a,e,n,r){return E7(t2(c,a,e,n,r,!0))}function P6(c){return c?c.__v_isVNode===!0:!1}function T1(c,a){return c.type===a.type&&c.key===a.key}const I3="__vInternal",_7=({key:c})=>c??null,t3=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?m2(c)||N2(c)||O(c)?{i:S2,r:c,k:a,f:!!e}:c:null);function q(c,a=null,e=null,n=0,r=null,s=c===b2?0:1,i=!1,o=!1){const t={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&_7(a),ref:a&&t3(a),scopeId:k3,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:S2};return o?(v0(t,e),s&128&&c.normalize(t)):e&&(t.shapeFlag|=m2(e)?8:16),C4>0&&!i&&D2&&(t.patchFlag>0||s&6)&&t.patchFlag!==32&&D2.push(t),t}const t2=mf;function mf(c,a=null,e=null,n=0,r=null,s=!1){if((!c||c===wl)&&(c=O2),P6(c)){const o=g1(c,a,!0);return e&&v0(o,e),C4>0&&!s&&D2&&(o.shapeFlag&6?D2[D2.indexOf(c)]=o:D2.push(o)),o.patchFlag|=-2,o}if(yf(c)&&(c=c.__vccOpts),a){a=uf(a);let{class:o,style:t}=a;o&&!m2(o)&&(a.class=K2(o)),o2(t)&&(m7(t)&&!D(t)&&(t=u2({},t)),a.style=b3(t))}const i=m2(c)?1:Nl(c)?128:lf(c)?64:o2(c)?4:O(c)?2:0;return q(c,a,e,n,r,i,s,!0)}function uf(c){return c?m7(c)||I3 in c?u2({},c):c:null}function g1(c,a,e=!1){const{props:n,ref:r,patchFlag:s,children:i}=c,o=a?Hf(n||{},a):n;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:o,key:o&&_7(o),ref:a&&a.ref?e&&r?D(r)?r.concat(t3(a)):[r,t3(a)]:t3(a):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==b2?s===-1?16:s|16:s,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&g1(c.ssContent),ssFallback:c.ssFallback&&g1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function O7(c=" ",a=0){return t2(F3,null,c,a)}function vf(c="",a=!1){return a?(z2(),hf(O2,null,c)):t2(O2,null,c)}function q2(c){return c==null||typeof c=="boolean"?t2(O2):D(c)?t2(b2,null,c.slice()):typeof c=="object"?z1(c):t2(F3,null,String(c))}function z1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:g1(c)}function v0(c,a){let e=0;const{shapeFlag:n}=c;if(a==null)a=null;else if(D(a))e=16;else if(typeof a=="object")if(n&65){const r=a.default;r&&(r._c&&(r._d=!1),v0(c,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(I3 in a)?a._ctx=S2:r===3&&S2&&(S2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else O(a)?(a={default:a,_ctx:S2},e=32):(a=String(a),n&64?(e=16,a=[O7(a)]):e=8);c.children=a,c.shapeFlag|=e}function Hf(...c){const a={};for(let e=0;e<c.length;e++){const n=c[e];for(const r in n)if(r==="class")a.class!==n.class&&(a.class=K2([a.class,n.class]));else if(r==="style")a.style=b3([a.style,n.style]);else if(g3(r)){const s=a[r],i=n[r];i&&s!==i&&!(D(s)&&s.includes(i))&&(a[r]=s?[].concat(s,i):i)}else r!==""&&(a[r]=n[r])}return a}function $2(c,a,e,n=null){P2(c,a,7,[e,n])}const df=T7();let zf=0;function pf(c,a,e){const n=c.type,r=(a?a.appContext:c.appContext)||df,s={uid:zf++,vnode:c,type:n,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new _t(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:B7(n,r),emitsOptions:C7(n,r),emit:null,emitted:null,propsDefaults:r2,inheritAttrs:n.inheritAttrs,ctx:r2,data:r2,props:r2,attrs:r2,slots:r2,refs:r2,setupState:r2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=gl.bind(null,s),c.ce&&c.ce(s),s}let d2=null;const W7=()=>d2||S2;let H0,G1,c5="__VUE_INSTANCE_SETTERS__";(G1=M6()[c5])||(G1=M6()[c5]=[]),G1.push(c=>d2=c),H0=c=>{G1.length>1?G1.forEach(a=>a(c)):G1[0](c)};const a4=c=>{H0(c),c.scope.on()},E1=()=>{d2&&d2.scope.off(),H0(null)};function $7(c){return c.vnode.shapeFlag&4}let L4=!1;function Vf(c,a=!1){L4=a;const{props:e,children:n}=c.vnode,r=$7(c);Zl(c,e,r,a),ef(c,n);const s=r?Mf(c,a):void 0;return L4=!1,s}function Mf(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=u7(new Proxy(c.ctx,Ul));const{setup:n}=e;if(n){const r=c.setupContext=n.length>1?Cf(c):null;a4(c),s4();const s=V1(n,c,0,[c.props,r]);if(i4(),E1(),X5(s)){if(s.then(E1,E1),a)return s.then(i=>{a5(c,i,a)}).catch(i=>{x3(i,c,0)});c.asyncDep=s}else a5(c,s,a)}else U7(c,a)}function a5(c,a,e){O(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:o2(a)&&(c.setupState=d7(a)),U7(c,e)}let e5;function U7(c,a,e){const n=c.type;if(!c.render){if(!a&&e5&&!n.render){const r=n.template||m0(c).template;if(r){const{isCustomElement:s,compilerOptions:i}=c.appContext.config,{delimiters:o,compilerOptions:t}=n,l=u2(u2({isCustomElement:s,delimiters:o},i),t);n.render=e5(r,l)}}c.render=n.render||Y2}{a4(c),s4();try{ql(c)}finally{i4(),E1()}}}function gf(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return x2(c,"get","$attrs"),a[e]}}))}function Cf(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return gf(c)},slots:c.slots,emit:c.emit,expose:a}}function R3(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(d7(u7(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in H4)return H4[e](c)},has(a,e){return e in a||e in H4}}))}function Lf(c,a=!0){return O(c)?c.displayName||c.name:c.name||a&&c.__name}function yf(c){return O(c)&&"__vccOpts"in c}const X=(c,a)=>Hl(c,a,L4);function q7(c,a,e){const n=arguments.length;return n===2?o2(a)&&!D(a)?P6(a)?t2(c,null,[a]):t2(c,a):t2(c,null,a):(n>3?e=Array.prototype.slice.call(arguments,2):n===3&&P6(e)&&(e=[e]),t2(c,a,e))}const bf=Symbol.for("v-scx"),wf=()=>i3(bf),xf="3.3.13",Nf="http://www.w3.org/2000/svg",P1=typeof document<"u"?document:null,n5=P1&&P1.createElement("template"),kf={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,n)=>{const r=a?P1.createElementNS(Nf,c):P1.createElement(c,e?{is:e}:void 0);return c==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:c=>P1.createTextNode(c),createComment:c=>P1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>P1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,n,r,s){const i=e?e.previousSibling:a.lastChild;if(r&&(r===s||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{n5.innerHTML=n?`<svg>${c}</svg>`:c;const o=n5.content;if(n){const t=o.firstChild;for(;t.firstChild;)o.appendChild(t.firstChild);o.removeChild(t)}a.insertBefore(o,e)}return[i?i.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},u1="transition",f4="animation",y4=Symbol("_vtc"),d3=(c,{slots:a})=>q7(Bl,Sf(c),a);d3.displayName="Transition";const G7={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};d3.props=u2({},w7,G7);const k1=(c,a=[])=>{D(c)?c.forEach(e=>e(...a)):c&&c(...a)},r5=c=>c?D(c)?c.some(a=>a.length>1):c.length>1:!1;function Sf(c){const a={};for(const B in c)B in G7||(a[B]=c[B]);if(c.css===!1)return a;const{name:e="v",type:n,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:i=`${e}-enter-active`,enterToClass:o=`${e}-enter-to`,appearFromClass:t=s,appearActiveClass:l=i,appearToClass:h=o,leaveFromClass:u=`${e}-leave-from`,leaveActiveClass:v=`${e}-leave-active`,leaveToClass:p=`${e}-leave-to`}=c,P=Af(r),M=P&&P[0],E=P&&P[1],{onBeforeEnter:C,onEnter:y,onEnterCancelled:x,onLeave:w,onLeaveCancelled:N,onBeforeAppear:G=C,onAppear:K=y,onAppearCancelled:R=x}=a,W=(B,c2,M2)=>{S1(B,c2?h:o),S1(B,c2?l:i),M2&&M2()},Q=(B,c2)=>{B._isLeaving=!1,S1(B,u),S1(B,p),S1(B,v),c2&&c2()},H2=B=>(c2,M2)=>{const J2=B?K:y,e2=()=>W(c2,B,M2);k1(J2,[c2,e2]),s5(()=>{S1(c2,B?t:s),v1(c2,B?h:o),r5(J2)||i5(c2,n,M,e2)})};return u2(a,{onBeforeEnter(B){k1(C,[B]),v1(B,s),v1(B,i)},onBeforeAppear(B){k1(G,[B]),v1(B,t),v1(B,l)},onEnter:H2(!1),onAppear:H2(!0),onLeave(B,c2){B._isLeaving=!0;const M2=()=>Q(B,c2);v1(B,u),Bf(),v1(B,v),s5(()=>{B._isLeaving&&(S1(B,u),v1(B,p),r5(w)||i5(B,n,E,M2))}),k1(w,[B,M2])},onEnterCancelled(B){W(B,!1),k1(x,[B])},onAppearCancelled(B){W(B,!0),k1(R,[B])},onLeaveCancelled(B){Q(B),k1(N,[B])}})}function Af(c){if(c==null)return null;if(o2(c))return[m6(c.enter),m6(c.leave)];{const a=m6(c);return[a,a]}}function m6(c){return Pt(c)}function v1(c,a){a.split(/\s+/).forEach(e=>e&&c.classList.add(e)),(c[y4]||(c[y4]=new Set)).add(a)}function S1(c,a){a.split(/\s+/).forEach(n=>n&&c.classList.remove(n));const e=c[y4];e&&(e.delete(a),e.size||(c[y4]=void 0))}function s5(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let Tf=0;function i5(c,a,e,n){const r=c._endId=++Tf,s=()=>{r===c._endId&&n()};if(e)return setTimeout(s,e);const{type:i,timeout:o,propCount:t}=Pf(c,a);if(!i)return n();const l=i+"end";let h=0;const u=()=>{c.removeEventListener(l,v),s()},v=p=>{p.target===c&&++h>=t&&u()};setTimeout(()=>{h<t&&u()},o+1),c.addEventListener(l,v)}function Pf(c,a){const e=window.getComputedStyle(c),n=P=>(e[P]||"").split(", "),r=n(`${u1}Delay`),s=n(`${u1}Duration`),i=o5(r,s),o=n(`${f4}Delay`),t=n(`${f4}Duration`),l=o5(o,t);let h=null,u=0,v=0;a===u1?i>0&&(h=u1,u=i,v=s.length):a===f4?l>0&&(h=f4,u=l,v=t.length):(u=Math.max(i,l),h=u>0?i>l?u1:f4:null,v=h?h===u1?s.length:t.length:0);const p=h===u1&&/\b(transform|all)(,|$)/.test(n(`${u1}Property`).toString());return{type:h,timeout:u,propCount:v,hasTransform:p}}function o5(c,a){for(;c.length<a.length;)c=c.concat(c);return Math.max(...a.map((e,n)=>t5(e)+t5(c[n])))}function t5(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function Bf(){return document.body.offsetHeight}function Ff(c,a,e){const n=c[y4];n&&(a=(a?[a,...n]:[...n]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const d0=Symbol("_vod"),l5={beforeMount(c,{value:a},{transition:e}){c[d0]=c.style.display==="none"?"":c.style.display,e&&a?e.beforeEnter(c):h4(c,a)},mounted(c,{value:a},{transition:e}){e&&a&&e.enter(c)},updated(c,{value:a,oldValue:e},{transition:n}){!a!=!e&&(n?a?(n.beforeEnter(c),h4(c,!0),n.enter(c)):n.leave(c,()=>{h4(c,!1)}):h4(c,a))},beforeUnmount(c,{value:a}){h4(c,a)}};function h4(c,a){c.style.display=a?c[d0]:"none"}const j7=Symbol("");function Y7(c){const a=W7();if(!a)return;const e=a.ut=(r=c(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(s=>F6(s,r))},n=()=>{const r=c(a.proxy);B6(a.subTree,r),e(r)};Sl(n),S4(()=>{const r=new MutationObserver(n);r.observe(a.subTree.el.parentNode,{childList:!0}),B3(()=>r.disconnect())})}function B6(c,a){if(c.shapeFlag&128){const e=c.suspense;c=e.activeBranch,e.pendingBranch&&!e.isHydrating&&e.effects.push(()=>{B6(e.activeBranch,a)})}for(;c.component;)c=c.component.subTree;if(c.shapeFlag&1&&c.el)F6(c.el,a);else if(c.type===b2)c.children.forEach(e=>B6(e,a));else if(c.type===o3){let{el:e,anchor:n}=c;for(;e&&(F6(e,a),e!==n);)e=e.nextSibling}}function F6(c,a){if(c.nodeType===1){const e=c.style;let n="";for(const r in a)e.setProperty(`--${r}`,a[r]),n+=`--${r}: ${a[r]};`;e[j7]=n}}function If(c,a,e){const n=c.style,r=m2(e);if(e&&!r){if(a&&!m2(a))for(const s in a)e[s]==null&&I6(n,s,"");for(const s in e)I6(n,s,e[s])}else{const s=n.display;if(r){if(a!==e){const i=n[j7];i&&(e+=";"+i),n.cssText=e}}else a&&c.removeAttribute("style");d0 in c&&(n.display=s)}}const f5=/\s*!important$/;function I6(c,a,e){if(D(e))e.forEach(n=>I6(c,a,n));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const n=Rf(c,a);f5.test(e)?c.setProperty(r4(n),e.replace(f5,""),"important"):c[n]=e}}const h5=["Webkit","Moz","ms"],u6={};function Rf(c,a){const e=u6[a];if(e)return e;let n=X2(a);if(n!=="filter"&&n in c)return u6[a]=n;n=y3(n);for(let r=0;r<h5.length;r++){const s=h5[r]+n;if(s in c)return u6[a]=s}return a}const m5="http://www.w3.org/1999/xlink";function Df(c,a,e,n,r){if(n&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(m5,a.slice(6,a.length)):c.setAttributeNS(m5,a,e);else{const s=Et(a);e==null||s&&!Z5(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function Ef(c,a,e,n,r,s,i){if(a==="innerHTML"||a==="textContent"){n&&i(n,r,s),c[a]=e??"";return}const o=c.tagName;if(a==="value"&&o!=="PROGRESS"&&!o.includes("-")){c._value=e;const l=o==="OPTION"?c.getAttribute("value"):c.value,h=e??"";l!==h&&(c.value=h),e==null&&c.removeAttribute(a);return}let t=!1;if(e===""||e==null){const l=typeof c[a];l==="boolean"?e=Z5(e):e==null&&l==="string"?(e="",t=!0):l==="number"&&(e=0,t=!0)}try{c[a]=e}catch{}t&&c.removeAttribute(a)}function _f(c,a,e,n){c.addEventListener(a,e,n)}function Of(c,a,e,n){c.removeEventListener(a,e,n)}const u5=Symbol("_vei");function Wf(c,a,e,n,r=null){const s=c[u5]||(c[u5]={}),i=s[a];if(n&&i)i.value=n;else{const[o,t]=$f(a);if(n){const l=s[a]=Gf(n,r);_f(c,o,l,t)}else i&&(Of(c,o,i,t),s[a]=void 0)}}const v5=/(?:Once|Passive|Capture)$/;function $f(c){let a;if(v5.test(c)){a={};let n;for(;n=c.match(v5);)c=c.slice(0,c.length-n[0].length),a[n[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):r4(c.slice(2)),a]}let v6=0;const Uf=Promise.resolve(),qf=()=>v6||(Uf.then(()=>v6=0),v6=Date.now());function Gf(c,a){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;P2(jf(n,e.value),a,5,[n])};return e.value=c,e.attached=qf(),e}function jf(c,a){if(D(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(n=>r=>!r._stopped&&n&&n(r))}else return a}const H5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Yf=(c,a,e,n,r=!1,s,i,o,t)=>{a==="class"?Ff(c,n,r):a==="style"?If(c,e,n):g3(a)?Q6(a)||Wf(c,a,e,n,i):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Kf(c,a,n,r))?Ef(c,a,n,s,i,o,t):(a==="true-value"?c._trueValue=n:a==="false-value"&&(c._falseValue=n),Df(c,a,n,r))};function Kf(c,a,e,n){if(n)return!!(a==="innerHTML"||a==="textContent"||a in c&&H5(a)&&O(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const r=c.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return H5(a)&&m2(e)?!1:a in c}const Xf=["ctrl","shift","alt","meta"],Qf={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>Xf.some(e=>c[`${e}Key`]&&!a.includes(e))},w2=(c,a)=>{const e=c._withMods||(c._withMods={}),n=a.join(".");return e[n]||(e[n]=(r,...s)=>{for(let i=0;i<a.length;i++){const o=Qf[a[i]];if(o&&o(r,a))return}return c(r,...s)})},Jf=u2({patchProp:Yf},kf);let d5;function Zf(){return d5||(d5=rf(Jf))}const ch=(...c)=>{const a=Zf().createApp(...c),{mount:e}=a;return a.mount=n=>{const r=ah(n);if(!r)return;const s=a._component;!O(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const i=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},a};function ah(c){return m2(c)?document.querySelector(c):c}const j4=[{songName:"1.5 кг Отличного Пюре - Эмо.mp3",sort:181,bestParties:[{start:25,end:84}],notAggressive:!0},{songName:"Angel Vivaldi - A Martian Winter.mp3"},{songName:"Angel Vivaldi - An Erisian Autumn.mp3",sort:50,bestParties:[{start:78,end:104},{start:176,end:220},{start:246,end:268}],notAggressive:!0},{songName:"As I Lay Dying - Forever.mp3",sort:210,bestParties:[{start:0,end:25}]},{songName:"As I Lay Dying - Nothing Left [2007].mp3",sort:40,bestParties:[{start:0,end:57}]},{songName:"As I Lay Dying - The Sound Оf Truth.mp3",sort:60,bestParties:[{start:0,end:36},{start:59,end:121}]},{songName:"Aspirin Rose - Fucking Perfect (Pink cover).mp3"},{songName:"August Burns Red - A Shot Below The Belt.mp3",sort:142,bestParties:[{start:0,end:30},{start:90,end:114},{start:164,end:175}]},{songName:"August Burns Red - Barbarian.mp3",sort:20,bestParties:[{start:21,end:32},{start:70,end:88},{start:113,end:152}]},{songName:"August Burns Red - Chasing the Dragon.mp3",sort:151},{songName:"August Burns Red - Consumer.mp3"},{songName:"August Burns Red - Indonesia.mp3",sort:141,bestParties:[{start:84,end:117},{start:161,end:180}]},{songName:"August Burns Red - Meridian.mp3",notAggressive:!0},{songName:"August Burns Red - Truth of a Liar.mp3"},{songName:"August Burns Red - Your Little Suburbia Is in Ruins.mp3",sort:70,bestParties:[{start:12,end:27},{start:107,end:125},{start:146,end:178}]},{songName:"Anaal Nathrakh - Between Shit and Piss We Are Born.mp3"},{songName:"Anaal Nathrakh - In The Constellation Of The Black Widow.mp3",sort:220,bestParties:[{start:65,end:85},{start:114,end:141}]},{songName:"Between the Buried and Me - All Bodies.mp3"},{songName:"Between The Buried And Me - Ants Of The Sky.mp3",sort:113,bestParties:[{start:0,end:108}]},{songName:"Between The Buried And Me - Sun Of Nothing.mp3"},{songName:"Between The Buried And Me - Swim To The Moon.mp3",sort:10,bestParties:[{start:135,end:160},{start:500,end:551},{start:982,end:1022}]},{songName:"Breakwater - Eleven.mp3"},{songName:"Breakwater - five.mp3"},{songName:"Bullet For My Valentine - Hand Of Blood.mp3"},{songName:"Cerebral Bore - The Bald Cadaver.mp3",sort:280,bestParties:[{start:5.5,end:50}]},{songName:"Children Of Bodom - Are You Dead Yet.mp3",sort:110,bestParties:[{start:82,end:114}]},{songName:"Cosmonauts Day - The Captain.mp3",notAggressive:!0},{songName:"Death In Vegas - Dirge.mp3"},{songName:"Dragonforce - The Flame of Youth.mp3",sort:120,bestParties:[{start:46,end:65},{start:289,end:317}]},{songName:"If These Trees Could Talk - From Roots to Needles.mp3",notAggressive:!0},{songName:"In Flames - Clayman.mp3",sort:130,bestParties:[{start:0,end:21}]},{songName:"In Flames - Reflect the Storm.mp3"},{songName:"Killing Floor - Abandon All.mp3"},{songName:"Killing Floor OST - Wake.mp3",notAggressive:!0},{songName:"Long Distance Calling - Black Paper Planes.mp3",notAggressive:!0},{songName:"Machine Head - Beautiful Mourning.mp3"},{songName:"Machine Head - Hallowed Be Thy Name.mp3"},{songName:"Machine Head - Halo.mp3"},{songName:"Ozoi The Maid - Unfortunately.mp3",sort:112,bestParties:[{start:59,end:84},{start:165,end:218},{start:240,end:253}]},{songName:"Ozoi The Maid Yakui The Maid - Lanterns.mp3",sort:111,bestParties:[{start:146,end:218}]},{songName:"Ozoi The Maid Yakui The Maid - Wonderland.mp3",sort:30,bestParties:[{start:115,end:243},{start:355,end:442}]},{songName:"Ozoi The Maid, Yakui The Maid - Frontier.mp3"},{songName:"P.O.D. - Youth of the Nation.mp3",notAggressive:!0},{songName:"Psygnosis - FIIIX 2.0.mp3"},{songName:"Psygnosis - Lost in Oblivion.mp3",sort:140,bestParties:[{start:292,end:356}]},{songName:"Psygnosis - MehMeh.mp3"},{songName:"Psygnosis - Phrase 7.mp3",notAggressive:!0},{songName:"Psygnosis - Synaptic Plasticity.mp3"},{songName:"Psygnosis - The Judgement.mp3"},{songName:"Raunchy - To the Lighthouse.mp3"},{songName:"Raunchy - Twelve Feet Tall.mp3",sort:150,bestParties:[{start:65,end:96}]},{songName:"Raunchy - Wasteland Discotheque.mp3",sort:190,bestParties:[{start:0,end:34},{start:63,end:101}]},{songName:"Rhapsody - The Mighty Ride of the Firelord.mp3"},{songName:"Rhapsody of Fire - Wisdom of the Kings.mp3"},{songName:"Rise Of The Northstar - The New Path.mp3"},{songName:"Rise Of The Northstar - What The Fuck.mp3",sort:160,bestParties:[{start:45,end:79}]},{songName:"Siberian Meat Grinder feat Distemper - Пламя в Груди.mp3",sort:211,bestParties:[{start:49,end:68}]},{songName:"The Doors - Alabama song.mp3",notAggressive:!0},{songName:"The Doors - The End.mp3",notAggressive:!0},{songName:"The Faceless - Shake The Disease.mp3"},{songName:"The Five Stars - Atom Bomb Baby.mp3",notAggressive:!0},{songName:"The HAARP Machine - Esoteric Agenda.mp3"},{songName:"Toundra - Bizancio Byzantium.mp3",sort:180,bestParties:[{start:127,end:224},{start:406,end:480}],notAggressive:!0},{songName:"URO & .corridoiokraut. - Nappi.mp3",notAggressive:!0},{songName:"What Mad Universe - Colossus.mp3",notAggressive:!0},{songName:"What Mad Universe - the world of leviathan.mp3",notAggressive:!0},{songName:"What Mad Universe - head of column.mp3",sort:170,bestParties:[{start:30,end:65}],notAggressive:!0},{songName:"What Mad Universe - mythical sacred firebird.mp3",notAggressive:!0},{songName:"What Mad Universe - Nebula My Love.mp3",sort:80,bestParties:[{start:162,end:246},{start:260,end:358}],notAggressive:!0},{songName:"What Mad Universe - Starborne.mp3",sort:90,bestParties:[{start:85,end:105},{start:144,end:185}],notAggressive:!0},{songName:"Within The Ruins - Ataxia II.mp3"},{songName:"Within The Ruins - Beautiful Agony.mp3"},{songName:"ZEROMANCER - Dr. Online.mp3"},{songName:"zYnthetic - Abandon All v3.mp3",sort:100,bestParties:[{start:0,end:30},{start:60,end:89}],notAggressive:!0},{songName:"zYnthetic - SSplug.mp3"}],R6=[{label:"All music",id:1,url:"all"},{label:"Top",id:2,url:"top"},{label:"Top Shorts",id:4,url:"shorts"},{label:"Not aggressive",id:3,url:"not_aggressive"}];var eh={VITE_BASE_URL:"/player_with_my_favorite_music/",BASE_URL:"/player_with_my_favorite_music/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function nh(){const c=f2(j4),a=f2(j4.filter(N=>N.sort)),e=f2(j4.filter(N=>N.notAggressive)),n=f2(0),r=f2(0);P3(()=>{c.value=j4,r.value=p.value.length});const s=X(()=>{console.log(eh);const N="/player_with_my_favorite_music/";return p.value[n.value]?`${N}music/${P.value.songName}`:""}),i=X(()=>[...a.value].sort((N,G)=>N.sort-G.sort)),o=f2(1);function t(N){!(o.value===4&&N.id===2)&&!(o.value===2&&N.id===4)&&(n.value=0),o.value=N.id,r.value=v.value.length}(()=>{const N=window.location.pathname.split("&");if(N.length===2){const G=N[0].split("=")[1],K=parseInt(N[1].split("=")[1]),R=R6.find(W=>W.url===G);R&&(o.value=R.id,n.value=isNaN(K)?0:K)}})(),y7(()=>{const N=R6.find(W=>W.id===o.value),G=N?N.url:"",K=n.value.toString(),R=new URLSearchParams(`#/tab=${G}&track=${K}`);window.history.pushState({},"",R)});const h=X(()=>{switch(o.value){case 1:return c.value;case 2:return i.value;case 3:return e.value;case 4:return i.value;default:return[]}}),u=X(()=>o.value===4?i.value[n.value].bestParties:[]),v=X(()=>x.value?M():h.value),p=X(()=>v.value.map(N=>N.songName)),P=X(()=>v.value[n.value]);function M(){return h.value.map(N=>({...N,sort:Math.random()})).sort((N,G)=>N.sort-G.sort).map(({sort:N,...G})=>G)}function E(){n.value+=1,n.value>=v.value.length&&(n.value=0)}function C(){n.value=(n.value-1+v.value.length)%v.value.length}function y(N){n.value=N}const x=f2(!1);function w(){x.value=!x.value}return{totalNumbSongs:r,defaultTrackList:c,topTrackList:a,bestParties:u,nextTrack:E,previousTrack:C,pathToCurrentFile:s,sortingTopTrackList:i,currentTrackIndex:n,changeTab:t,selectTrack:y,tabSelected:o,isRandomTracks:x,handlerRandomBtn:w,currentTracks:v,currentTracksList:p,currentSong:P}}const rh=Q2({name:"TrackList",props:{currentTracks:{type:Array,default:()=>[]},currentTrackIndex:{type:Number,default:0}},emits:["select-track-from-list"],setup(c,{emit:a}){const e=X(()=>c.currentTracks.map(s=>{const i=s.lastIndexOf("/"),o=s==null?void 0:s.lastIndexOf(".");return s&&s.substring(i+1,o)||""}));D1(()=>c.currentTrackIndex,()=>{n()});async function n(){await p7();const s=document.querySelector(".selected");s==null||s.scrollIntoView({behavior:"smooth",block:"center"})}function r(s){a("select-track-from-list",s)}return{currentTracksWithCorrectNames:e,selectTrackFromList:r}}}),l1=(c,a)=>{const e=c.__vccOpts||c;for(const[n,r]of a)e[n]=r;return e},sh=["onClick"];function ih(c,a,e,n,r,s){return z2(),V2("ul",{ref:"sidebarRef",class:"sidebar",onClick:a[0]||(a[0]=w2(()=>{},["stop"]))},[(z2(!0),V2(b2,null,h0(c.currentTracksWithCorrectNames,(i,o)=>(z2(),V2("li",{key:o,class:K2({selected:o===c.currentTrackIndex}),onClick:w2(t=>c.selectTrackFromList(o),["stop"])},_2(o+1)+". "+_2(i),11,sh))),128))],512)}const oh=l1(rh,[["render",ih],["__scopeId","data-v-fd0c6d96"]]),th=Q2({props:{tabSelected:{type:Number,default:1}},emits:["change-tab"],setup(c,{emit:a}){function e(n){c.tabSelected!==n.id&&a("change-tab",n)}return{btnHandler:e,TABS_OPTION:R6}}}),lh={class:"tabs"},fh=["onClick"];function hh(c,a,e,n,r,s){return z2(),V2("div",lh,[(z2(!0),V2(b2,null,h0(c.TABS_OPTION,(i,o)=>(z2(),V2("button",{key:o,class:K2({active:i.id===c.tabSelected}),onClick:w2(t=>c.btnHandler(i),["stop"])},_2(i.label),11,fh))),128))])}const mh=l1(th,[["render",hh],["__scopeId","data-v-41d4c74d"]]),uh="modulepreload",vh=function(c){return"/player_with_my_favorite_music/"+c},z5={},U2=function(a,e,n){let r=Promise.resolve();if(e&&e.length>0){const s=document.getElementsByTagName("link");r=Promise.all(e.map(i=>{if(i=vh(i),i in z5)return;z5[i]=!0;const o=i.endsWith(".css"),t=o?'[rel="stylesheet"]':"";if(!!n)for(let u=s.length-1;u>=0;u--){const v=s[u];if(v.href===i&&(!o||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${t}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":uh,o||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),o)return new Promise((u,v)=>{h.addEventListener("load",u),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>a()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})},z0=Q2({name:"MainInfoBand",props:{songName:{type:String,default:""}},setup(c){const a=f2({}),e=f2(window.innerWidth),n=f2(window.innerHeight),r=()=>{e.value=window.innerWidth,n.value=window.innerHeight};P3(async()=>{const l=Object.assign({"/src/assets/images/1.5 кг Отличного Пюре.jpg":()=>U2(()=>import("./1.5 кг Отличного Пюре-OtALhitf.js"),__vite__mapDeps([])),"/src/assets/images/Anaal Nathrakh.jpg":()=>U2(()=>import("./Anaal Nathrakh-EzGp_TLw.js"),__vite__mapDeps([])),"/src/assets/images/As I Lay Dying.jpg":()=>U2(()=>import("./As I Lay Dying-28Nx7ZD0.js"),__vite__mapDeps([])),"/src/assets/images/August Burns Red.jpg":()=>U2(()=>import("./August Burns Red-MIqwgacb.js"),__vite__mapDeps([])),"/src/assets/images/Between The Buried And Me.webp":()=>U2(()=>import("./Between The Buried And Me-TSs49cb7.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid Yakui The Maid.jpg":()=>U2(()=>import("./Ozoi The Maid Yakui The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid.jpg":()=>U2(()=>import("./Ozoi The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/What Mad Universe.jpg":()=>U2(()=>import("./What Mad Universe-AmFbwRmj.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.png":()=>U2(()=>import("./default_logo-hDaDKpVk.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.svg":()=>U2(()=>import("./default_logo-KBf8q7n2.js"),__vite__mapDeps([]))});for(const h in l){const u=h.replace(/^.*\/(.*)\.\w+$/,"$1");a.value[u]=(await l[h]()).default}}),S4(()=>{window.addEventListener("resize",r)}),B3(()=>{window.removeEventListener("resize",r)});const s=X(()=>{var h;const l=(h=c.songName)==null?void 0:h.lastIndexOf(".");return c.songName&&c.songName.substring(0,l)||""}),i=X(()=>{const[l,h]=s.value.split(" - ");return{bandName:l,songName:h}}),o=X(()=>{const{bandName:l}=i.value;return a.value[l]||a.value.default_logo}),t=X(()=>{function l(h,u=1){return{width:`${u*h}px`,height:`${u*h}px`}}return e.value>n.value?l(n.value,.6):l(e.value,.8)});return D1(()=>c.songName,()=>{var l,h;if("mediaSession"in navigator&&o.value){const u=["96x96","128x128","192x192","256x256","384x384","512x512"];navigator.mediaSession.metadata=new MediaMetadata({title:((l=i.value)==null?void 0:l.songName)||"",artist:((h=i.value)==null?void 0:h.bandName)||"",artwork:u.map(v=>({src:o.value,sizes:v,type:"image/png"}))})}},{immediate:!0}),{getInfoBand:i,getLogoImage:o,getImageSizes:t}}}),p5=()=>{Y7(c=>({ef0b2b3c:c.getImageSizes.width,"6d03e80b":c.getImageSizes.height}))},V5=z0.setup;z0.setup=V5?(c,a)=>(p5(),V5(c,a)):p5;const Hh=["src"],dh={class:"artist-info"},zh={class:"band"},ph={class:"song"};function Vh(c,a,e,n,r,s){return z2(),V2("div",null,[q("img",{src:c.getLogoImage,class:"album-image",alt:""},null,8,Hh),q("div",dh,[q("div",zh,_2(c.getInfoBand.bandName),1),q("div",ph,_2(c.getInfoBand.songName),1)])])}const Mh=l1(z0,[["render",Vh],["__scopeId","data-v-2eafb513"]]),gh=Q2({name:"VolumeControl",props:{volume:{type:Number,default:.8},hasText:{type:Boolean,default:!1}},emits:["volume-change","show-text-song"],setup(c,{emit:a}){const e=X(()=>c.volume*100),n=X(()=>c.volume>0?'<i class="fas fa-volume-up"/>':'<i class="fas fa-volume-off"/>'),r=X(()=>c.hasText?"":"disabled");function s(l){const h=parseFloat(l.target.value)/100;a("volume-change",h)}function i(l){a("volume-change",l)}function o(){c.hasText&&a("show-text-song")}function t(){c.volume>0?i(0):i(.8)}return{convertToValue:e,volumeHandler:s,onIconVolumeClick:t,onIconShowTextClick:o,iconVolume:n,iconShowTextClass:r}}}),Ch=c=>(l0("data-v-a580e32d"),c=c(),f0(),c),Lh={class:"volume-control"},yh=["innerHTML"],bh=["value"],wh=Ch(()=>q("i",{class:"fa-solid fa-text-height"},null,-1)),xh=[wh];function Nh(c,a,e,n,r,s){return z2(),V2("div",Lh,[q("button",{class:"player-button margin",onClick:a[0]||(a[0]=w2((...i)=>c.onIconVolumeClick&&c.onIconVolumeClick(...i),["stop"]))},[q("span",{innerHTML:c.iconVolume},null,8,yh)]),q("input",{class:"margin",type:"range",value:c.convertToValue,min:"0",max:"100",step:"1",onInput:a[1]||(a[1]=(...i)=>c.volumeHandler&&c.volumeHandler(...i))},null,40,bh),q("button",{class:K2(["show-text",c.iconShowTextClass]),onClick:a[2]||(a[2]=w2((...i)=>c.onIconShowTextClick&&c.onIconShowTextClick(...i),["stop"]))},xh,2)])}const kh=l1(gh,[["render",Nh],["__scopeId","data-v-a580e32d"]]),Sh=Q2({name:"ProgressControl",props:{currentTime:{type:Number,default:0},totalTime:{type:Number,default:0},bestParties:{type:Array,default:()=>[]}},emits:["time-change","time-change-line"],setup(c,{emit:a}){const e=X(()=>c.currentTime/c.totalTime*100),n=X(()=>o(c.currentTime)),r=X(()=>""),s=X(()=>o(c.totalTime)),i=X(()=>{const h=Number((100/c.totalTime).toFixed(2));return c.bestParties.map(u=>({left:`${u.start*h}%`,right:`${100-u.end*h}%`}))});function o(h){const u=Math.floor(h/60),v=Math.floor(h%60);return`${u}:${String(v).padStart(2,"0")}`}function t(h){var M;const u=((M=h.currentTarget)==null?void 0:M.parentNode)||null,{clientWidth:v}=u,p=u.getBoundingClientRect(),P=h.clientX-p.left;a("time-change-line",P/v)}function l(h){a("time-change",h)}return{convertToValue:e,convertCurrentTime:n,convertTotalTime:s,timeHandler:l,timeHandlerEmit:t,convertBestPartiesInPercentage:i,convertCurrentTimeSeconds:r}}}),Ah={class:"progress-control"},Th=["value"],Ph={class:"time-display"},Bh={key:0,class:"line"};function Fh(c,a,e,n,r,s){return z2(),V2("div",Ah,[q("input",{type:"range",min:"0",max:"100",value:c.convertToValue,step:"1",onInput:a[0]||(a[0]=(...i)=>c.timeHandler&&c.timeHandler(...i))},null,40,Th),q("div",Ph,[q("span",null,_2(c.convertCurrentTime),1),q("span",null,_2(c.convertCurrentTimeSeconds),1),q("span",null,_2(c.convertTotalTime),1)]),c.bestParties.length?(z2(),V2("div",Bh,[(z2(!0),V2(b2,null,h0(c.convertBestPartiesInPercentage,(i,o)=>(z2(),V2("div",{key:o,style:b3({left:i.left,right:i.right}),class:"best-section",onClick:a[1]||(a[1]=w2((...t)=>c.timeHandlerEmit&&c.timeHandlerEmit(...t),["stop"]))},null,4))),128))])):vf("",!0)])}const Ih=l1(Sh,[["render",Fh],["__scopeId","data-v-b6c0e591"]]),Rh=Q2({name:"MainControl",props:{isPlaying:{type:Boolean,default:!1}},emits:["previous","play-pause","next"],setup(c,{emit:a}){function e(){a("previous")}const n=X(()=>c.isPlaying?'<i class="fas fa-pause"/>':' <i class="fas fa-play"/>');function r(){a("play-pause")}function s(){a("next")}return{previousButtonHandler:e,playerButtonHandler:r,iconPlayerButton:n,nextButtonHandler:s}}}),K7=c=>(l0("data-v-1bded451"),c=c(),f0(),c),Dh={class:"main-control"},Eh=K7(()=>q("i",{class:"fas fa-step-backward"},null,-1)),_h=[Eh],Oh=["innerHTML"],Wh=K7(()=>q("i",{class:"fas fa-step-forward"},null,-1)),$h=[Wh];function Uh(c,a,e,n,r,s){return z2(),V2("div",Dh,[q("button",{class:"player-button",onClick:a[0]||(a[0]=w2((...i)=>c.previousButtonHandler&&c.previousButtonHandler(...i),["stop"]))},_h),q("button",{class:"player-button",onClick:a[1]||(a[1]=w2((...i)=>c.playerButtonHandler&&c.playerButtonHandler(...i),["stop"]))},[q("span",{innerHTML:c.iconPlayerButton},null,8,Oh)]),q("button",{class:"player-button",onClick:a[2]||(a[2]=w2((...i)=>c.nextButtonHandler&&c.nextButtonHandler(...i),["stop"]))},$h)])}const qh=l1(Rh,[["render",Uh],["__scopeId","data-v-1bded451"]]),Gh=Q2({name:"OtherControl",props:{currentNumbSong:{type:Number,default:0},totalNumbSongs:{type:Number,default:0},isRandomTracks:{type:Boolean,default:!1},isRepeatMode:{type:Boolean,default:!1},isShowTrackList:{type:Boolean,default:!1},isDarkTheme:{type:Boolean,default:!1}},emits:["random-click","show-list-click","repeat-mode-click","change-theme"],setup(c,{emit:a}){function e(){a("random-click")}function n(){a("repeat-mode-click")}function r(){a("show-list-click")}function s(){a("change-theme")}const i=X(()=>c.isDarkTheme?'<i class="fa-solid fa-toggle-on"/>':'<i class="fa-solid fa-toggle-off"/>'),o=X(()=>c.isShowTrackList?'<i class="fas fa-bars fa-rotate-90"/>':'<i class="fas fa-bars"/>');return{iconClickRandomHandler:e,iconClickRepeatModeHandler:n,iconClickShowListHandler:r,iconClickChangeThemeHandler:s,iconToggle:i,iconBar:o}}}),X7=c=>(l0("data-v-dbf63d29"),c=c(),f0(),c),jh={class:"other"},Yh=X7(()=>q("i",{class:"fas fa-shuffle"},null,-1)),Kh=[Yh],Xh=X7(()=>q("i",{class:"fas fa-repeat"},null,-1)),Qh=[Xh],Jh={class:"song-display"},Zh=["innerHTML"],cm=["innerHTML"];function am(c,a,e,n,r,s){return z2(),V2("div",jh,[q("button",{class:K2({active:c.isRandomTracks}),onClick:a[0]||(a[0]=w2((...i)=>c.iconClickRandomHandler&&c.iconClickRandomHandler(...i),["stop"]))},Kh,2),q("button",{class:K2({active:c.isRepeatMode}),onClick:a[1]||(a[1]=w2((...i)=>c.iconClickRepeatModeHandler&&c.iconClickRepeatModeHandler(...i),["stop"]))},Qh,2),q("div",Jh,[q("span",null,_2(c.currentNumbSong),1),O7("/"),q("span",null,_2(c.totalNumbSongs),1)]),q("button",{onClick:a[2]||(a[2]=w2((...i)=>c.iconClickChangeThemeHandler&&c.iconClickChangeThemeHandler(...i),["stop"]))},[q("span",{innerHTML:c.iconToggle},null,8,Zh)]),q("button",{class:K2({active:c.isShowTrackList}),onClick:a[3]||(a[3]=w2((...i)=>c.iconClickShowListHandler&&c.iconClickShowListHandler(...i),["stop"]))},[q("span",{innerHTML:c.iconBar},null,8,cm)],2)])}const em=l1(Gh,[["render",am],["__scopeId","data-v-dbf63d29"]]),nm=Q2({props:{songText:{type:String,default:""}}}),rm={class:"sidebar"},sm=["textContent"];function im(c,a,e,n,r,s){return z2(),V2("div",rm,[q("span",{textContent:_2(c.songText)},null,8,sm)])}const om=l1(nm,[["render",im],["__scopeId","data-v-a20903c5"]]),tm={"1.5 кг Отличного Пюре - Эмо.mp3":`Каждый раз понимать, как легко потерять
Потерять навсегда всё, чем жил ты вчера
Что хотел? Чем дышал? С кем ты был? Кого ждал?
Отрывать от себя, чувствуя, как опять
День за днём холодной ночью
Механизм часов неточных
Рёв турбины реактивной
Превращает в пульс пассивный
Нет ни сил, ни слёз, ни веры
Только дрожь в сердцах сверх меры
Почему же всё так сложно
В этом мире безнадёжном?
Почему так?
Суженый зрачок от боли
Крик, застывший комом в горле
Привкус соли от потери
Знают люди, знают звери
Что с того, что нельзя
Повернуть время вспять?
Что с того, что в глазах
Не убить этот страх?
Этот страх-пустоты
Знаю я, знаешь ты
Всё, чем жил я вчера
Не вернуть никогда
Смоется потоком мощным
Замок из песка непрочный
Прошибёт в холодных водах
Озарение кого-то
Нет ни сил, ни слёз, ни веры
Нет границы, у предела
Почему же всё так сложно
В этом мире безнадёжном?
Почему так?
Суженый зрачок от боли
Крик, застрявший комом в горле
Привкус соли от потери
Плачут люди, плачут звери
`,"As I Lay Dying - Forever.mp3":`Forever your eyes will hold the memory
I saw your heart as it overtook me
We tried so hard to understand and reason
But in that one moment I gave my heart away

I gave my heart away
In that moment I gave my heart away
In that moment I gave my heart away

With that perfect breath where my mind lay beside me
And all I knew is what had overtaken me
With no reason I am comforted by inability to understand

Forever your eyes will hold the memory
I saw your heart as it overtook me
We tried so hard to understand and reason
But in that one moment I gave my heart away

I gave my heart away
In that moment I gave my heart away
In that moment I gave my heart away

Forever your eyes will hold the memory
Forever your eyes will hold the memory
Forever your eyes will hold the memory

When I wake from this dream
Will your smile still open my heart
And leave me transparent?
When I wake from this dream
Will your smile still open my heart
And leave me transparent?`,"As I Lay Dying - Nothing Left [2007].mp3":`[Verse 1]
This world was never worthy
But how can I call it unfaithful
Every promise was fulfilled
As decay crawled from its throat
Like the dead rising from an open grave

Like the dead rising
From an open grave

[Pre-Chorus]
Lips of splendor and tongue of deceit
All dying now as our fragile wrists hold only waste

[Chorus]
Like those gasping for their last breath
We cannot hide there's nothing left
Like those gasping for their last breath
We cannot hide there's nothing left

Nothing left
Nothing left
There is nothing left
Nothing left

[Verse 2]
If all my sorrow has led me here
Then I would cry all of my tears
To have this chance
To have this chance again
To have this chance
To have this chance
And know there's more than this
And know there's more than you
[Chorus]
Like those gasping for their last breath
We cannot hide there's nothing left
Like those gasping for their last breath
We cannot hide there's nothing left`,"As I Lay Dying - The Sound Оf Truth.mp3":`[Chorus]
We have all heard what we wanted to hear
"Truth" that sounds right to our ears
We have all heard what we wanted to hear
"Truth" that sounds right to our ears

[Verse 1]
But what wisdom is there within us
To live based on the feeling of our hearts?
How many times has instinct let us down?
Never to be thought through, never to be questioned!
Say what you really mean
When your ambition calls you, calls you!
For what use is there, is there in praying
If you will only hear what you want to hear?

[Chorus]
We have all heard what we wanted to hear
"Truth" that sounds right to our ears

[Verse 2]
We speak of fighting to resist this world
But what about the battle within us?
If we have chosen to live against the grain
Then why are we all facing the same way?

[Bridge]
There is no difference between us and them
If we all blindly seek truth from sentiments

[Guitar Solo]

[Chorus]
We have all heard what we wanted to hear
"Truth" that sounds right to our ears
We have all heard what we wanted to hear
"Truth" that sounds right to our ears
We have all heard what we wanted to hear
"Truth" that sounds right to our ears`,"August Burns Red - A Shot Below The Belt.mp3":`Don't you understand me?
Don't you understand me?

This cloud over
My head is not okay
It's not okay

There are things
That I need to get done
Need to get done
There are things
That I need to get done
Need to get done

And it doesn't give you permission
To take a shot below the belt...

What a bittersweet symphony life is
But I wouldn't have it any other way

We have so little time
Let's not spend it in anger in anger
And I am
I am in the deep end
And I can't find air,I can't find air

I am throwing punches, With a blindfold on
I am throwing punches, With a blindfold on
I am throwing punches, With a blindfold on
I am throwing punches, With a blindfold on

Stop riding my tail
With your high beams on

Because I may just brake suddenly
I may just brake suddenly
I may just brake suddenly
I might just brake

I would rather not explode -
That's your job

I'm stuck in between two worlds...
In a maze of dreams and thoughts
What a bittersweet symphony life is
But I wouldn't have it any other way
Have it any other way`,"August Burns Red - Barbarian.mp3":`Chaos brings order
It brings order
Chaos brings order
It brings order

Who will you allow to lead you
Blindly until the end
Until the end
You're like a little girl with a stupid crush
With a stupid crush, crush

We are the glory, We all sing glory
We are the glory, We all sing glory
We are the glory, We all sing glory

We all choke ourselves with our own ignorance

There is so much more to life than your stupid desires
Nothing is everything, and everything is something
Confused
Troubled
Troubled

Finding the meaning is looking through the vivid transparencies
Dance the night away because tomorrow
We will look back and talk about good times now gone forever
Trace lines around the image of your choice
Dance until the end, my friend
Dance until the end, my friend
And find joy in every living thing
In every living thing, every living thing

Optimism is not a choice, it's a belief
Optimism is not a choice, it's a belief
Optimism is not a choice, it's a belief
Optimism is not a choice, it's a belief`,"August Burns Red - Consumer.mp3":`A front seat to your own flick, flick

If only you could see how much your emotions waver
Words are flowing from your mouth at lightning speed
They're packing heat
And are ready to kill
And are ready to kill
And are ready to kill
And are ready to kill

Cry, frown, hit, yell
Cry, frown, hit, yell

Let's watch where it takes you
You really don't have it that bad
You really don't have it that bad
You really don't have it that bad

Try looking through the glass of beauty
It will show you the truth

We are all guilty of self-centeredness
We have committed the crime
We have committed the crime

But what we fail to realize is the dent it leaves in our soul
But what we fail to realize is the dent it leaves in our soul
But what we fail to realize is the dent it
Everyone is full of it
Everyone is full of it, in their own way
Everyone is full of it, in their own way, in their own way

A young boy cannot comprehend social status, social status
And this boy is better off than any of us, any of us

Life will pass us by like a summer storm
And if we consume
We consume ourselves with ourselves
We will surely look back with sorrow
Sorrow, sorrow
Sorrow, sorrow`,"August Burns Red - Indonesia.mp3":`This plane's going down in flames
And this time there's no black box to capture your last words
A situation we can't make any sense of
Sacrifice costs all of us everything

This is the time to turn down our heads and turn up our hearts
There's no scale to, there's no scale to, balance this out
Some say may those who curse days, curse this day
There's no scale to, there's no scale to, balance this out
Oh

How does a man wrap his mind around eternity
When he can't even (When he can't even)
Explain his own (Explain his own) composition?
Don't you see it's bigger than you?

He sleeps in the mountains of Indonesia, and the white on his flag brings colors to shame, colors to shame
He sleeps in the mountains of Indonesia, and the white on his flag brings colors to shame, colors to shame

The earth will swallow the water
The clouds refill the oceans
The earth will swallow the water and spit out
The clouds will refill, refill the oceans
The earth will swallow (Old mountains crumble)
The water and spit out (Stronger ones rise)
The clouds will refill (This is the portrait)
Refill the oceans (Humble and broken)

This plane crashed down in flames (Down in flames)
With a man who lived, who died to better this world
David, rest in peace

He sleeps in the mountains of Indonesia, and the white on his flag brings colors to shame, colors to shame
He sleeps in the mountains of Indonesia, and the white on his flag brings colors to shame, colors to shame`,"August Burns Red - Meridian.mp3":`The people who survive the sword will find favor in the desert. [Jeremiah 31:2]
I will build you up again and you will be rebuilt. [Jeremiah 31:4]
I am the painter making this mess a masterpiece
I will rebuild you up again`,"August Burns Red - Truth of a Liar.mp3":`Allow what's done to preach new insight to your life
Hindsight is perfect vision
The past is easiest to see

Clear a path, Stand aside
We're carrying the torch now
Clear a path, Stand aside
We're carrying the torch now
Clear a path, Stand aside
There's no stopping us
Clear a path, Stand aside
We're carrying the torch now
Clear a path, Stand aside
There's no stopping us

You think you're everything to everyone
Go ahead, Partake in it, Justify it
Become engulfed in it
It will eat you alive

This is not a one way road
You're headed for the dead end
This is not a one way road
You're headed for the dead end

You might think you're everything to everyone
Well pardon me if I intrude
You might think you're everything to everyone
You're not a perfect man in a perfect world

Look at where your ignorance has brought you
All this will be buried, Like the fall of Rome

You can't let your ignorance exploit you
You will come crashing down

The truth hurts (The truth hurts)
The truth hurts (The truth hurts)
The truth hurts (The truth hurts)
But denial's what will kill you

All that you loved, all that you treasure, will pass with time
Blinded by the inability to see beyond flesh and blood
Blinded by the inability to see beyond flesh and blood

Shifting blame with a log in your eye
Insisting that a string tied to your limbs
Is what's to blame (Is what's to blame)

Suck it up and bite the bullet`,"August Burns Red - Your Little Suburbia Is in Ruins.mp3":`Open those eyes
Wake from peace
Open those eyes
Wake from peace

Orders are some favorite color
Same old same old is their battle cry
Why don't we keep searching for a new flavor?
Our hearts have become a routine
Our hearts have become a routine
Our hearts have become a routine

Worthy kings have broken backs for nothing
Worthy kings have broken backs

Unless we cherish all with pride
The lines on our face will turn into canyons of sorrow
Instead of hope
Instead of hope

They didn't die from the cold without but
They died from the cold within
They died from the cold within
They died from the cold within
They didn't die from the cold without but
They died from the cold withinAnd I just can't stop denying that our brothers
Are in miserable pain
And I just can't stop denying that our brothers
Are in miserable pain

Stop short
Lend a hand and break the chains of regularity that you lean so closely upon

Your little Suburbia is in ruins
Is in ruins

Tear down all the assumptions you hold
For I guarantee they are false
Sometimes the best feeling may be the one that kills`,"Anaal Nathrakh - Between Shit and Piss We Are Born.mp3":`Verse 1]
With bloodlust
Shall learn the truth
Your fucking mind
Tethers

[Pre-Chorus]
Inter feces et urinam nascimur
We are born covered in shit!

[Chorus]
And are you satisfied it's unto shit that you return?
Are you happy that it is in piss that you drown?

[Verse 2]
Where you will find your?..
Shall I get it... banish
Fucking sun

[Pre-Chorus]
Inter faeces et urinam nascimur
We are born covered in shit!

[Chorus]
And are you satisfied it's unto shit that you return?
Are you happy that it is in piss that you drown?

[Verse 3]
You might as well fucking inhale it
May as well let it flood your lungs
May as well get fucking acclimatized
You are swine and in shit you die

[Interlude]
Do you even know where you come from
You insignificant fuck?
You've never heard of...

[Pre-Chorus]
Inter faeces et urinam nascimur
We are born covered in shit

[Chorus]
And are you satisfied it's unto shit that you return?
Are you happy that it is in piss that you drown?

[Guitar Solo]

[Outro]
And it's what we deserve!`,"Anaal Nathrakh - In The Constellation Of The Black Widow.mp3":`In the constellation of ...

There is no courage, only despair
Only despair

And so the deaths of hopeless thousands were of no concern
A war has just one meaning
The powers who caused all this pain

Uranus and Pluto stood in conjunction in the sign of the Black Widow
In the sign of the black widow

There is no courage, only despair
Only despair

And so the deaths of hopeless thousands were of no concern
A war has just one meaning
The powers who caused all this pain
Uranus and Pluto stood in conjunction in the sign of the Black Widow
In the sign of the black widow

...?Decay?, on the verge of death
Carving the image of the unknown ...
There is no courage, only despair
Only despair

And so the deaths of hopeless thousands were of no concern
A war has just one meaning
The powers who caused all this pain

Uranus and Pluto stood in conjunction in the sign of the Black Widow
In the sign of the black widow`,"August Burns Red - Chasing the Dragon.mp3":`Living in a world of regrets.
You never wanted this and you never will
Living in a world of regrets.
You never wanted this and you never will
Watching your mirror image, drowning in a lake of your own sorrows, your own sorrows.
But we will pray, that you will pray, you will look toward the skies.
Look toward the skies, which covers you, like blankets, and see his open arms.
Look toward the skies.
Look toward the skies.
You claim, you claim you were built to fall.
You were never strong enough.
You claim, you claim you were built to fall.
You were never strong enough.
Heroin has no healing to this unfortunate tragedy.
Don't stray from what you've become now, to who you were then.
With a needle in your arm.
Now affection has abandoned you, can you still feel.
Now affection has abandoned you, can you still feel.
Hold on!
Hold on, don't you die.
Hold on, don't you die on me.
Living in a world of regrets you never wanted this and you never will.
You claim you were built to fall, you were never strong enough.
You claim you were built to fall, you were never strong enough.
Save yourself.
You claim, you claim you were built to fall
you were never strong enough.
You claim, you claim you were built to fall
you were never strong enough.`,"Between the Buried and Me - All Bodies.mp3":`We all create this imagery
We all increase this lunacy
We all create this imagery
We all increase this lunacy

Floating, melting
Open sores for exploration
Floating, melting

Exploding
Exploding worlds
Surrounding imagination?
This will conclude our story
The first date of existence seems to be changing

We are their property
We are their slaves
We surround all bodies
Focus-time stands still

We are their property
We are their slaves
We surround all bodies
Focus-time stands still

Keeper of the stars, I hope to never find
We are just mortal souls
Left to die
We all create this imagery
We all increase this lunacy
All bodies contortion
All bodies contortion

[The Discovery]

Ego controlled killing
The tables have turned
Obviously a poor creature of existence
We die one by one

We overlooked our control
Fire swarming, engulfing, transforming
Human restoration incomplete
The end

[The Landing]

This beautiful scenario
Can't last forever
We must go see the conclusion

This beautiful scenario
Can't last forever
We must go see the conclusion
Starting a new species, classify nothing
Life grows with trees on high

Nature create this mechanical lust
Nature form this force fed trust
Cancellation
Motivation
Creativity

Nature create this mechanical lust
Nature form this force fed trust
We will soon live in peace
We will soon die in peace

All bodies contortion
All bodies contortion
All bodies contortion
All bodies contortion

Keeper of the stars
I hope to never find
We are just mortal souls
Left to die`,"Between The Buried And Me - Ants Of The Sky.mp3":`Now
My teeth taste funny today
They seem more jagged than normal
I’ve been told, I’ve been told, I’ve been told
That I have been grinding like gears during my dream hours
I wonder if it’s just my thoughts fusing into one frequent dream

One which parts with the night
The night

I saw them dragging the other day
Other day
Scraping their knees

Seems the high horse is taking them all home
I can’t leave myself out
Seems the high horse is taking them all home
I can’t leave myself out, self out

Why should we sleep today?
Why should we awake tomorrow?
We can just pop back a few
And drift through
This pre-programmed flight
We can just pop back a few
And drift through
This pre-programmed flight

Across all oceans (a windy, noisy trek)
Across all oceans (a windy, noisy trek)
Across all oceans (a windy, noisy trek)
Across all oceans (a windy, noisy trek)
This seems to be what I’ve needed

We were brought up to grow into one
We were brought up to grow into one

I’m going to fly up soon, and seek other lands
The soothing air of flight
A bird’s eye view
Into what I’ve always imagined life could be
Will it be sought after?
It might just be useless
Writings and ideas, that laziness will corrupt in the end
Bones of dust need hardening
I think the prescription
I think the prescription is found

Sleep on
Sleep on, fly on
In your mind, you can fly
Sleep on
Sleep on, fly on
In your mind, you can fly
Sleep on
Sleep on, fly on
In your mind, you can fly
Sleep on
Sleep on, fly on
In your mind, you can fly
Sleep on
My teeth grin oddly
Today (today)
They seem to gleam more than
Normal (normal)
Maybe it will be noticed

The walking dead
Walking Dead`,"Between The Buried And Me - Sun Of Nothing.mp3":`Everywhere I look they are there
What is everyone doing?
Going to a home?
Everywhere I look they are there
What is everyone doing?
Going to a home?

To a place that makes us feel warm
A place that grants us a smile
Seems like a very simple idea, but not hardly figured out
(Looking everywhere)

I just see faces
Faces staring blank as they go on with the routine
I just see faces
Faces staring blank as they go on with the routine

This routine
Nothing new
It's time to go through with this
This routine
Nothing new
It's time to go through with this
This routine
Nothing new
It's time to go through with this

A spaceman
That's what they say I am
Nothing but a spaceman
A spaceman
That's what they say I am
Nothing but a spaceman
Always pushing it all away
Trying to get to that one place I call home

The journey begins
Forcing a new life with the unexplained
A creeping rush that surrounds me
Floating away
Floating away, floating away, floating away

Always pushing it all away
Trying to get to that one place I call home
My own planet
I allowed this wish
Unexpected
Not knowing why
Not knowing why

Wonder why I question it now

I'm my own planet
Not many can experience this sensation
Loneliness is creeping out, or in, however you think of it
But it sure is surrounding me
Maybe all the complaining is an occurance of boredom
I suppose it's too late

I am floating
I am floating
I am floating
I am floating
I did love, I did laugh, I did live
(Now I'm my own planet)

A spaceman
They say I am?
A spaceman
They say I am?
A spaceman
They say I am?
A spaceman
They say I am?

Planets everywhere
My own destiny?
I'm floating towards the sun
The sun of nothing
Floating towards the sun
The sun of nothing
I have become the sun of nothing
Nothing is here
Memories are not clear
Floating towards the sun
The sun of nothing
Floating towards the sun
The sun of nothing
Floating, floating, floating, floating
Further away

I can't believe that's what it has come to
I never really had it all that bad
I just looked around and never thought about the blank stares
Blank stares

They were looking into something much worse than what I thought I was
Selfishness is a very sticky quality of this species
Looking around, I don't see any faces
Yes, I am lonely
It's to be expected
I'll sleep now
(Dream waves)`,"Between The Buried And Me - Swim To The Moon.mp3":`[Verse 1: Thomas Rogers & Chuck Johnson]
It’s been a long night, away from it all
The grabbing authority of my peers
The rusty cage that never seems to open
When can I escape?
When can I swim to the moon?
I’ve heard this expression my entire life
Never realized how peaceful a statement it is
I’ve heard this expression my entire life
Never realized how peaceful a statement it is

[Verse 2]
All alone on the worlds waters, here I am
The sun’s slowly drifting past the edge of the world
All alone on the worlds waters, here I am
The sun’s slowly drifting past the edge of the world
I’m the loneliest boat on this entire body of water
Rest will give my awakening purpose
This is why I have come here in the first place
A peace I have never felt, a life I did not want to live
I will awake through sleep
The drifting drifter, look into the picture

[Pre-Chorus: The Foreshadowing]
No more panic, no more regret
No more hoping for a new mess

[Chorus]
Slide into the water
Become one with the sea
Life seems so much smaller
Swim to the moon

[Verse 3]
I awake with a cool breeze blowing through my dirty hair
Rested, stable, a first
A caffeine junkie’s longest wish: peace and quiet
No wake ups, no expectations
A strange feeling, suddenly drifting
No wake ups, no expectations
A strange feeling, suddenly drifting

[Instrumental Interlude - Drum Solo]

[Verse 4]
This “As Seen on TV” anchor is just another lie, I guess
Hoping for something not there
Filling a void that I can’t quite put my finger on
Filling a void

[Verse 5]
This loneliness I always seek
I’m in the middle of black water
No sign of human life in any direction
The most peaceful event of my life
Seems to have typically turned into a struggle
I’m in the middle of black water, no sign of human life
[Interlude]
Panic takes over my body
Panic takes over my body

[Verse 6]
I have indeed floated due to a non-reversible decision to flee
Just for a day I told myself
My survival skills were lost years ago
Here I am: no food, no clean water
And this extremely embarrassing attempt at a “get away outfit”
This is an inevitable death, inevitable death

[Chorus]
Slide into the water
Become one with the sea
Life seems so much smaller
Swim to the moon

[Instrumental Break (9:34-14:33)]

[Bridge]
Look into the picture
Look into the picture
Look into the picture
Look into the picture
[Pre-Chorus: Worry leaves my body]
This is what I lived to be
This very moment is the first time in my life that I’ve felt pure joy

[Chorus]
Slide into the water
Become one with the sea
Life seems so much smaller
Swim to the moon

[Chorus]
Slide into the water
Become one with the sea
Life seems so much smaller
Swim to the moon

[Chorus]
Slide into the water
Become one with the sea
Life seems so much smaller
Swim to the moon`,"Bullet For My Valentine - Hand Of Blood.mp3":`[Intro]
Oh!
There goes my valentine again
Soaked in red for what she said
And now she's gone!

[Verse 1]
Oh my god have I done it again?!
There's a pulse and it's deafening!
I can't help what I hear in my head!
It's the switch that I flick (When it says)

[Pre-Chorus]
(Hand of blood!)
I don't want to feel, my heart is breaking
(Hand of blood!)
I don't want to see, my life is burning!

[Chorus]
I saw you look away
Is what you've seen too much to take
Or are you blind and seeing nothing? (I saw you run!)
I saw you run away
Is what I've done too much to take
Or are you scared of being nothing?

[Verse 2]
There's a stain on my hand and it's red!
Oh my god, am I losing it?
I can't help what I've done or I've said
It's the button I push (When it says)

[Pre-Chorus]
(Hand of blood!)
I don't want to feel, my heart is breaking
(Hand of blood!)
I don't want to see, my life is burning!

[Chorus]
I saw you look away
Is what you've seen too much to take
Or are you blind and seeing nothing? (I saw you run!)
I saw you run away
Is what I've done too much to take
Or are you scared of being nothing?

[Guitar Solo]
No!

[Chorus]
I saw you look away
Is what you've seen too much to take
Or are you blind and seeing nothing? (I saw you run!)
I saw you run away
Is what I've done too much to take
Or are you scared of being nothing?`,"Cerebral Bore - The Bald Cadaver.mp3":`You disgust me

The bald cadaver, she is mine
I will lick this rotting cunt
False messiah, she is legion
Time has come to burn them all

Maggots infesting her hole
Devour her insides!

They writhe inside your body
With glee they eat your organs raw

Bow to me, ripping entrails, severed torso
Feel my creed, body dead, fuck the head

You are here to die, before me
I will consume you, fuck you, you are dead!

(Cancer ridden flesh)
It is tore, on the floor
(Retribution)
Stamp on your face

All your children lye in waiting, you will have your means no more..

You are, a marie curie bitch
Colour of pee, big tits, racist

Fuck the skin dome
To continue, I must sever, inches from you

Now, you see
Death has come for you and not for me
She is weak, at your peak

Trim back, the bed sheet, show me, your balding head
In comes, junkie mom, she gets, fucked up

You are the vermin of this earth
You can't understand it's your time
I decimate your bloody corpse
Peeling back your skin I ejaculate on your face

Lived here, died here, now you're gone`,"Children Of Bodom - Are You Dead Yet.mp3":`[Verse 1]
Don't hear, don't deem
Drown in before you dive
Don't care, commit
To your self destruction drive

[Instrumental Bridge]

[Verse 2]
I kiss the ground
With love beyond forever
Flip off the sky
With bleeding fingers till I die

[Instrumental Pre-Chorus]

[Chorus]
Enemy, take a one good look at me
Eradicate what you will always be
Your tainted flesh, polluted soul
Through a mirror I behold
Throw a punch, shards bleed on the floor
Tearing me apart but I don't care anymore
Should I regret or ask myself
Are you dead yet?

[Verse 3]
Wake up, don't cry
Regenerate to deny
The truth, the fiction
You live in blindfold on your eyes

[Instrumental Bridge]

[Verse 4]
Disclosure, self loathing
This time you've gone too far
Or could it be
My nemesis that you 're me?

[Chorus]
Enemy, take a one good look at me
Eradicate what you will always be
Your tainted flesh, polluted soul
Through a mirror I behold
Throw a punch, shards bleed on the floor
Tearing me apart but I don't care anymore
Should I regret or ask myself
Are you dead yet?

[Pre-Solo]
[Guitar Solo]

[Chorus]
Enemy, take a one good look at me
Eradicate what you will always be
Your tainted flesh, polluted soul
Through a mirror I behold
Throw a punch, shards bleed on the floor
Tearing me apart but I don't care anymore
Should I regret or ask myself
Are you dead yet?

[Outro]
Are you dead yet?`,"Dragonforce - The Flame of Youth.mp3":`Close your eyes hear the thunder and rain
Fear inside of the torturing pain
For the cries of the world
And the last lives remain

Chain your heart, swear to die for their gain
Deep inside slowly fading away
And the last breath's in van
And the fear turns to rage

Locked in a world by the fallen evil souls
Torn right apart for your life insane
Burning in my mind, now to bring my life to hold
Reach out and die in the flames

See through the lies and their ever staring eyes
Now is the time to defend your ground
Destiny will call to remind us all now
Fly free so far from here
This life we know will end
In dreams of everlasting pain
The fallen now rise again

Through the fire, through the flames
Like the sun will rise again
Lost in time, lost in space
To the end of all their days

See their endless ways, insanity
The quest deranged, not meant to be
In flames will now forever burn, eternally

[Chorus]
So free your heart, leave your life far behind
In the cold of winter skies, escape the pain inside
Now feel your soul lost in seas of all eternity
Everyday this life, defending
And the flames of youth not ending
In a lifetime, searching
We must fight through the eternal pain

So alone in the world far away
Memories of a dream will remain
As the world's falling cold
And our lives all in vain

Fire in my soul will forever rise again
Nothing in my mind to remember now
Broken by the fear of the dark night calling
Ride free on endless seas
The final curtain falls
Cut the ground from down below
The time to lock and to load
Through the fire, through the rain
Far across the distant plains
Feel the wind beneath the steel
As your mind becomes insane

Save the pain from all humanity
Their rides trough out our destiny
For freedom now we rise for all again

[Chorus]
So free your heart, leave your life far behind
In the cold of winter skies, escape the pain inside
Now feel your soul lost in seas of all eternity
Everyday this life, defending
And the flames of youth not ending
In a lifetime, searching
We must fight through the eternal pain

[Solos: Herman/Sam/Vadim/Herman/Sam]

So free your heart, leave your life far behind
In the cold of winter skies, escape the pain inside
And when the memories are all but left behind
And the days have gone forever, lost within my mind
Now feel your soul burn in seas of all eternity
Every day of this life defending
And the flames of youth not ending
In a lifetime searching
We must fight through the eternal pain
We fight through the eternal pain`,"In Flames - Clayman.mp3":`[Verse 1]
Your self control makes me feel alone
I've tried confidence, had it for breakfast today
I've lost the perfection, a mess without words
As the seasons change I'll continue to ignore
The image I project is me without me
The picture that I scanned is borrowed

[Verse 2]
After the education you stopped making sense to me
Seems to me that it's all the same
Time and time and time and time again
Slowly, what I believed in, turning into a lie
To aim and miss, my supernatural art
Spending too much time with myself
Trying to explain who I am

[Chorus]
How come it's possible
I wish there was a way
I feel so invincible
I'm the sculpture made out of clay

[Bridge]
I need someone to break the silence
Before it all falls apart
I need something to cling onto
Before I break you in parts

[Verse 3]
So afraid of what you may think
And all the plastic people that surrounds me
I have to find the path to where it all begins
To teach the world my supernatural art

[Chorus]
How come it's possible
I wish there was a way
I feel so invincible
I'm the sculpture made out of clay`,"In Flames - Reflect the Storm.mp3":`[Verse 1]
Shot for shot
Let the bullets penetrate me
Embrace me
Tell me stories of golden gods
The precision in your voice
Pierce the walls that I've built
Your eyes reach deep in me

[Pre-Verse 2]
Take a chance

[Verse 2]
They don't come much bigger than this
One dark star
Spend another day with me
A dead surface that doesn't reflect
The storm underneath
Take the chance
Bring me the calm

[Pre-Chorus]
And it leaves nothing
Expose the dark side
Aching and emotional
Expose the dark side
Impossible to tame

[Chorus]
Away from the light of the sun
Away I find what is really me

[Verse 3]
Throw yourself into the eye of chaos
Infiltrate me
Sneak out before I awake
Take out the trash and burn it
Try to find a beautiful place to lay
These fragile bones of mine

[Chorus]
Away from the light of the sun
Away I find what is really me
Away from the light of the sun
Away I find what is really me

[Guitar Solo]

[Pre-Chorus]
And it leaves nothing
Expose the dark side
Aching and emotional
Expose the dark side
Impossible to tame
[Chorus]
Away from the light of the sun
Away I find what is really me
Away from the light of the sun
Away I find what is really me
Away from the light of the sun
Away I find what is really me`,"Ozoi The Maid - Unfortunately.mp3":`Скорость
Погибель
Отчаянье
Радость
Амбиции
Стремления
Ложь и табу

На все возражения
Пытайся быть правильной
Не то неизбежно
Огребешь поражение

Сама себе выбрала
Себе быть Терезой
Жанной и Гвюдни
А теперь оправдания
Всё уже лучше
Куда уже дальше?
Вроде всё есть
Хотя нет ничего
Хотелось бы лучше хватит и этого
Говоришь всё что можно и вот достижения
Успех не успех если нет повторения
Учения мать на кабачке я кручу
Сама свою жизнь как хочу ворочу
И всё это ложь, пиздежь, провокация
Собой то я быть не сумела
Но жизнь продолжается
И вот она вот она я

Живу и всё дальше пытаюсь
Пытаться, не жить правильно
Я пытаюсь пытаться
Пытаться жить и быть а не
Казаться
Пытаться, пытаться, пытаться

Вот и всё конец всему
Что я хотела
Как же быть мне
Дальше плыть и
Без надежды как и раньше продолжать и...

Я не пробую сдержаться
Я сама со всем, блять, справлюсь
Неумелыми руками дальше
Чудо продолжая делать даже
Без оглядки на ожоги
И удары ножом в спину
Я пыталась делать лучше
Неудача мой фолловер
Я с разбега на рассвет бегу смотреть сквозь ветер с ливнем из окна
И снова здравствуй
Я хотела
Делать всё как надо, смело
Продолжать и не сдаваться
От себя не отрекаться
Ведь не так уж просто сдаться
За спиной я вечно буду
Слышать смех ведь я пытаюсь
Предать смысла промежутку
Между мыслью и могилой

Чем десяток сожалений
Без мечты я в жизнь не верю
Пусть сама я не мечтаю
Этой жизни не бывает

За спиной я вечно буду
Слышать смех ведь я пытаюсь
Предать смысла промежутку
Между мыслью и могилой

Чем десяток сожалений
Без мечты я в жизнь не верю
Пусть сама я не мечтаю
Этой жизни не бывает

Пара травм и жизнь без денег
Чем судьба найти сумеет?
Вам хватило, вы остались
Я продолжу убиваться

Миф о том что что-то нужно
Сила воли и таланты
Бред и грёзы тех кто в страхе
Избегает сам себя же
Оправдай же свою слабость
Тем что непригоден ты
Для жизни той о кой мечтаешь
Перед тем как сгинуть в ящик`,"Ozoi The Maid Yakui The Maid - Lanterns.mp3":`[Verse 1]
Мне не успеть
За той причиной
Мне не догнать
Тот самый поезд

И вновь продолжать
Тщетно бежать
Себя обогнать
Никак не выходит

И дождь неизбежно
Заполонит
Каждую рану
Сильнее терзая

Бежать бесполезно
Вижу уже
Где-то в дали
Всё так же маячат

[Verse 2]
Ночные огни
Немых светофоров
Манят меня
Но никак мне
Иначе покоя
Они не дадут
Ночью и днем
Я бы хотела
Уйти всё равно
Но не сумею
Хруст их костей
Идти продолжаю
И тщетно пытаться
Не разъебаться
Об мокрый асфальт
Мои переломы
Меня не заботят
Три сотрясенья
Картину не портят
И не мешают
Кричать во всё горло
О том, что не знаю
Сколько еще
Лет мне осталось
Мою сигарету
Никто не затушит
Смысл пытаться
Что-то исправить
Давно растворился
Мир слишком мягок
Чтоб из игры
Своей меня выгнать

[Chorus]
Сколько мне еще пытаться
На краю не оступаться
И не падать вновь по новой
С головою в тёмный омут?

В этом длинном коридоре
Нет дверей и комнат тёплых
Холод сводит мои руки
И на шёпот сходит голос

Я бегу вперед на скорость
Ничего не замечая
С каждым разом всё сильнее
Хочется остановиться

Оглянуться на прожектор
Старый образ кинопленкой
Промелькнет перед глазами
Сожаленьем озаряя

Чтобы убедить меня
Что прошлое за мной осталось
С ярым треском отключившись
Отражения сгорая
Будут в памяти моей
Воспламенившись исчезая
Криком доносить ту боль
Что всё еще у них осталась

Боль вся эта не изменит
Тех безумных обещаний
Что даны были друг другу
Среди ветхий стен несчастий

Не укажет назначений
Перепутий в моей жизни
Тьму вокруг ты не рассеешь
Думали я вам поверю

Думали я не узнаю
Что нет поводов мириться
С мерзостью вокруг, и как же
Я должна ужиться с вами?

Относиться с снисхождением
К вашим глупым нареканиям
От всеобщих сожалений
Я ни капли не страдала

Ложью были все попытки
Показаться вам такой же
Взор домов многоэтажных
Не позволит больше врать мне
О том что не вижу сути
И не придаю значения
Столь мне мерзкой этой вашей
Мелочности мотиваций

[Verse 3]
Мне страданья ваши чужды
Отношусь я беспристрастно
К одиночеству, что вяжет
И ломает ваши души

Хрупким ты своим рассудком
Не пытайся догадаться
Что же будет с теми, кто
С собою честным не остался

Не упрячешь ты в могилу
То, ради чего старался
Всем в награду достается
Сожаления отрада

Бегство ваше бесполезно
Не поможешь ты ни капли
В твоем мерзком положении
Остается лишь сдаваться

Мир усталости не знает
Не подарит ни мгновенья
Он не даст мне ни секунды
Миг на то чтоб отдышаться

И бежать вперед не зная
Чего ждать за поворотом
Лбом встречая все невзгоды
Непреклонной оставаться

Ночи свет мне обещает
Тех страданий, что не знала
Не спешу я увернуться
И пощады мне не надо

Так устала от попыток
И не пробую сдержаться
Сколько можно вновь пытаться
Всем вокруг собой являться?`,"Ozoi The Maid Yakui The Maid - Wonderland.mp3":`Это всё я заигралась
Замечталась, напросилась
Ночь красива бесконечно
Небо, звёзды, телевышки

Шум проводки я надеюсь
Мне позволит еще долго
Оставаться честной и
Пытаться продвигаться дальше

Verse 1
В этом ярком лживом мире
Мне не нужно оставаться
Выбор безальтернативный:
Это продолжать скитаться

За кордонами осталась
Вера наша в то, что раньше
Можно было всё исправить
Вслух сказав свое желанье

Всё испорчено, забыто
Но я поиск продолжаю
Руки изчернели вовсе
Но мне это не мешает

Хоть за что-то уцепиться
Не бежать больше от правды
А тогда простым казалось
За мечтой своей погнаться

Verse 2
Мое прошлое уходит
Я не помню эти лица
Может кто-то мне расскажет
О прошедших днях из жизни

Сколько раз я убегала
Спотыкалась на ошибках
Сколько боли приносила

Ничего теперь не стало

А ведь думала, что можно
Оставаться с собой честной
Что нет поводов для страха
Если жизнь моя не вечна

Справедливостью суждений
Не искупишь прегрешений
В тень измученных подъездов

Не упрячешь свои слёзы

Нет прощенья тем сомненьям
Что заставили остаться
По ту сторону препятствий
Содрогаться в своем страхе

Невозвратных изменений
Обращенных пылью в бегство
В жизни их рабов несчастных
Нет надежды на прощенье

Chorus
Чужды странствий направленья
Мне в попытках уберечься
Прибегать не приходилось
К вашим экстренным смещеньям

Центра тяжести на стулья
Отрекись и будь свободен
Ты же знаешь, это всё ведь
Говорит в тебе ребенок

Все желанья прыгнуть в пропасть
Расствориться и не слышать
Этих каверзных вопросов
От того кто неизвестен

Оставался всё то время
Что бродил ты непричастно
К общим бытовым проблемам
Выясняя что же лучше

Как себе остаться верным?
Объяснить никто не может
Голоса вопят все хором
И какой из них послушать?

Как же жить тебе возможно
Не ломаясь под законом?
Так расписанном жестоко
У людей в глазах, где ходят

Искры лишь когда есть вера
В то, что их никто не тронет`,"Ozoi The Maid, Yakui The Maid - Frontier.mp3":`И пусть горит
Наша с тобой мечта
Я как всегда
Справлюсь со всем сама

Мне не нужны
Твои оправданья
Я лишь хочу
Оставить себя одну

Одну и в темноте
Больше не надо
Предпринимать
Свои гнилые

Изыскания
Скорей ты прекрати
Нелепой поиски себе
Мечты

Verse 2
Все попытки неизбежно
Приведут меня к обману
Бесполезно убегать
От тех, к кому придем мы сами

Руки их давно размокли
Память их уже померкла
Души их забыты даже
Теми, кто привел к краху

Иглы по лесу мешают
Мне пробраться сквозь несчастья
Знаю я теперь недолго
Мне уже дышать осталось

Крики их всё громче режут
Тишину и мой рассудок
Их проклятья уже стали
Тем последним, что услышу

Перед тем как талая вода
Заполнит мою душу
Боль отчаянье и страх
И навсегда во мне заглушит

Радость тех обид и злобы
Их я бережно хранила
И сейчас уйду отсюда
Никому их не оставив

Мое прошлое уходит
Я не помню эти лица
Может кто-то мне расскажет
О прошедших днях из жизни?

Позади остались мысли
Что когда-то я желала
Притворить мечтою к жизни
Ничего теперь не стало`,"Psygnosis - FIIIX 2.0.mp3":`This curse which blessed me is Iost in the sky
When I watch around me I'm lost into my mind
All these things will get out one of this day
I'm lost in darkness next to all these shadows
I've host hу way, I'm lost into my soul
All these things will get out one of this day
Air around me (is still feels like a cage)

'Cause you never talk to me

I'm the only one. Alone
My plague is still bleeding and it will bleed again
I burn from the inside I wanna let it out
Pain inside me, the pain inside will reduce all to ashes (my tears are feed with pain)
I never stop crying everyday my tears flows for you
Like burry alive my body live, my soul is dead
Get the fuck out of me, get the fuck out of my head
I wanna kill all souvenirs I don't wanna remember all this shit
BUT I FUCKING MISS YOU

My tears are feed with pain and it burn my skin
Leave me alone, leave my memories, get out of here
Seeing you hurt me
My nightmares feed my hate

This curse which blessed me is lost in the sky
When I watch around me I'm lost into my mind
All these things will get out one о this day
I burn inside, it will fucking get out
The fire is bigger day after day
These things will get out one of these day

I've tried to burn everything and it burn my skin
I tried to bring this out, everything out
That was so close to you and you torn it
Into pieces, thousand pieces
A border separate us but it's still hard for me
To bring this out, everything out
There's a conflict in my mind and fire burn
Inside of me`,"Psygnosis - Lost in Oblivion.mp3":`I thought we were two but I was just alone
this crazy shit driving me to the unknown
I watch you fly away, I saw you change
“Shut up and obey” just can't be the way I choose

I thought that was real but it was just an illusion
It only led me to the bottom
I watch you fly away, I saw you change
That was the present day but now this is the end

Have you ever heard how sound the truth
Have you ever feel the way it break you down?

It will dump you, just like they always do
It tearing me inside just the way it break you down

I've stopped looking back on my past day
I've stopped complaining on my past fate
I was tired of being (the) one that's (has) been set aside
What didn’t kill me just bring pain inside

Open your eyes to the new world
Stop (to) cut your veins to drain your blood
Open up your lungs to breath the air
To see that all of this led you nowhere

All of this led me nowhere

I will submit you like no one before me, you will cry for hours
Life will quit your body wrapping
I love this life you are empty of sense you're just empty of everything,
Only a blade through your throat could save you.

Beneath our feet, the plague of our past had buried our souls
You'd better pray before I came, You'd better pray 'cause my gods are dead
I keep my head up now
I heard the truth

I'll Punch your face off
and Punch your eyes
I'll cut your throat off
Fuck you all

See what I've done, I owe it to anyone, you only put me down and now I'm standing here
See what I've done, I owe it to anyone, you only put me down and now I will never give in

I gotta go, I gotta scream, I'm gonna be homeless
I was tired to think, I stopped sinking, I have cured my sickness
I took a step back from what I have lived
I've stopped looking back on these past sufferings

Fuck them all

I will not be
the one you shape
It was tearing inside me
But i'm cured from illness

But this time I will not give in`,"Raunchy - To the Lighthouse.mp3":`You have become my ethereal darkness
My black highway and my heart split down the middle
Why do we keep doing this to ourselves?
This never bliss, only sounds of hells bells

I want to take you away
Make you see the beauty in life again
To the lighthouse, she sings in the night
As we sail through the bay into a new day

And there it leads the way
For us phallic and proud
With its light scattered all over
All over the crowd

Through mountains; through water to find
What could lift us up to see the bliss on the horizon
A symbol of hope, a kicked up fire
To find tranquility inside the flames

I want to take you away
Make you see the beauty in life again
To the lighthouse, she sings in the night
As we sail through the bay into a new day

And there it leads the way
For us phallic and proud
With its light scattered all over
All over the crowd

Uh, baby lets take it further down below
This rowboat is not for the two of us
Were not running on empty heart
Youre my black sunrise and my heart split down the middle
Baby, why do we keep doing this to ourselves?
Youre the sound of hells bells, but thats not a bad thing, right?
Lets take it to the next step, lets do it all night

Were the young believers
Were nation builders
Fucking for might

I want to take you away
Make you see the beauty in life again
To the lighthouse, she sings in the night
As we sail through the bay into a new day

And there it leads the way
For us phallic and proud
With its light scattered all over
All over the crowd`,"Raunchy - Twelve Feet Tall.mp3":`Avoiding the bypass
Feeling at least
Silence, overrated
Our time, we made it

Missing hours alone
Lack of inspiration
No time left for consideration

Nothing is gonna bring me down tonight
Nothing is gonna pass me by
My perfect night my attention
I wanna be the one
The center of
Twelve feet tall women
Gasping for heat burning
Fire-water green silk-cut-shag
Crank it up till it bleeds
Whisky/coke skirts fights birds choke
Lever to wheels high speed fuel peaks me

Like roaches surviving
Take it higher, we're climbing
Loose the losers
Choose the choosers
Nothing is gonna bring me down tonight
Nothing is gonna pass me by
My perfect night my attention
I wanna be the one

The center of
Twelve feet tall women
Gasping for heat burning
Fire-water green silk-cut-shag
Crank it up till it bleeds
Whisky/coke skirts fights birds choke
Lever to wheels high speed fuel peaks me`,"Raunchy - Wasteland Discotheque.mp3":`WARRIORRR YEAH!

You know it's right when you feel it's wrong
We all fall down and fall apart for love
But rest assured that we will take it to the wasteland discotheque
And make them turn their heads again
It's in the way we fucking move
It's in the way we fucking dance
(In this) Black house, Glass City

Thank you for all the times we shared
Now you want it, you want it so bad
Tap tap your toes to the beat
Like all the rest you're sweet, sweet, sweet
I've tasted all of them

A girl, a boy, one hell, like thieves we are
All in love with stolen heart
You think it's right when you tease on your knees
Like cheap dirty trash
We push ourselves in and out of relationships
Now I've lost myself in girls from the city
And girls that will say we all feel the same way
(In this) Black house, Glass City

Thank you for all the times we shared
Now you want it, you want it so bad
Tap tap your toes to the beat
Like all the rest you're sweet, sweet, sweet
I've tasted all of them

My job here is done - fuck yeah - and soon you'll be gone
If everyone loves everyone
The term has truly failed if the stars have fallen
Then desire is the new black fire

Thank you for all the times we shared
For the ones we shared and beyond
Now you want it, you want it so fucking bad
Tap tap your toes to the beat
Like all the rest you're sweet, sweet, sweet
I've tasted all of them

One girl, two girls, my hell, like thieves we are
All in love with stolen heart`,"Rhapsody - The Mighty Ride of the Firelord.mp3":`[Verse 1]
Cruel Akron bloody bastard I now spit on you
You can turn my bones to black ash but I'll move the moon
I will light your evil kingdom
And your heart will burn in flames
Mutilated or dismembered
We'll soon rise to eat your brain

[Pre-Chorus]
You will pay for your victims and for Airin's bloody rape
For Arwald my dear friend and all my crying wasted land
I call the rage of my dead
I call the black angels' tears

[Instrumental Break]

[Verse 2]
Also Dargor can't endure all, goes out from the cave
While the demons take the hero for their tragic game
Gods of earth save me from madness
From these rites of total shame
While descending in the red flame
Arwald dies but not in vain
[Pre-Chorus]
They will pay for this nightmare, for the symphony of pain
For Airin, my dead friend and all my crying wasted land
I call the Tharos' fire
I call the thunder roar

[Chorus]
Raise your voice and ride all
Ride all brave, raise your sword to the sky
And sing the epic symphony
For the mighty and proud firelord

[Long Instrumental]

[Verse 3/Spoken - Aresius]
Arwald's acid broke the silver chains
Before his very last breath
Akron laughing really doesn't know what now waits for him...
Gods are raging leading my red steel
Heads and limbs are falling down
It's in me the mystic messenger bringer of revenge
Revenge!
"Black angel, I call you! King Chaos is raging
In the torment of my heart...
I call the holy earthquake to end this bloody hell!"
Gods are raging leading my red steel
Heads and limbs are falling down
It's in me the mystic messenger bringer of revenge
Revenge!
While she comes, beloved sunlight
[Instrumental Break]

[Bridge]
On the river known as Aigor
Our hero found his way
All the demons desperately
Search for him now but in vain

[Pre-Chorus]
They will pay for this nightmare, for the symphony of pain
For Airin, my dead friend and all my crying wasted land
I call the Tharos' fire
I call the thunder roar

[Chorus]
Raise your voice and ride all
Ride all brave, raise your sword to the sky
And sing the epic symphony
For the mighty and proud firelord`,"Rhapsody of Fire - Wisdom of the Kings.mp3":`[Verse 1]
Removed the stones which hide the cave
Blind and dark along my way
I must go on wise and brave before a last hail
At the end of floor (At the end of floor) stairs of ancient stone (stairs of ancient stone)
Lead me to a vision, an unreal hall

[Verse 2]
And they appear in front of me
Lightened by a mystic flame
A new dimension I have to face beyond the gates
I can not believe (I can not believe) oh what now I see (oh what now I see)
When the two demons awake from the sleep

[Chorus]
Holy dragons keepers of time
Ride brave the blue skies and spell my eyes
Fly beyond these hills ride on the wind
The wisdom of the kings

[Instrumental Break]

[Verse 3]
Lost in a dream I'm under the spell
Of this sunny magic land
But Aresius said: "Become aware! All can hide the hell..."
Now it's time to go (Now it's time to go) to the mighty sword (to the mighty sword)
It's time to follow the kings' holy call
[Chorus]
Holy dragons keepers of time
Ride brave the blue skies and spell my eyes
Fly beyond these hills ride on the wind
The wisdom of the kings
Holy dragons keepers of time
Ride brave the blue skies and spell my eyes
Fly beyond these hills ride on the wind
The wisdom of the kings`,"Rise Of The Northstar - The New Path.mp3":`His name is Raoh, Demonic Ken'oh
Fist of the Violent Star, born in hell, yo
Fallen heir who should've lost his fist
Rejected by his love and treated like a beast

Evil grew up within him like a new option
He took his master's life without asking questions
Suffered the nuclear fire
He conquers a chaotic world, takes the power

Rules on this sick world, fallen brotherhood
Here comes the new lord, fist against sword
Rules on this sick world, fallen brotherhood
Here comes the new lord, fist against sword

Nothing is written in advance
Everything changes, smash your chance
One life, one love, several fates
Open a new path, create the gate
Nothing is written in advance
Everything changes, smash your chance
One life, one love, several fates
Open a new path, create the gate

Genocide, his life starts badly
His weakness saves his life, Baddack the movie
Arrived on earth, broke his motherfucking head
Booyaka Booyaka, he could've been brain dead

He faced elites, never gave up
This life could've been a tragedy if he didn't confront
His fear, his faith, his destiny
Never forget the Son Goku story

Nothing is written in advance
Everything changes, smash your chance
One life, one love, several fates
Open a new path, create the gate
Nothing is written in advance
Everything changes, smash your chance
One life, one love, several fates
Open a new path, create the gate

One, two, three, four, five, super Yankees
Straight from the past, straight from the nineties
Without any help or any support
Against the main vibe and ready to start

"Get up, stand up, come on throw your hands up!"
They wanna force the fate and represent some codes
Stay true, stay straight, never forget, create your own legacy
Never lose the target

[Solo]
Nothing is written in advance
Everything changes, smash your chance
One life, one love, several fates
Open a new path, create the gate
Nothing is written in advance
Everything changes, smash your chance
One life, one love, several fates
Open a new path, create the gate`,"Rise Of The Northstar - What The Fuck.mp3":`[Verse 1]
Hell yeah, coming at you once again, guess who's back?
The one original band in this sanitized scene comes to kill this track
Like Bejita, I come back stronger
And more vicious, sharp like Shura
Motherfucking industry cocksucker
You've sold out your wide-opened ass
Make me laugh, make me cry, let you die
When I see what your band wants and tries
I'm of another caliber, all together
Contracts torn to pieces like Mecha-Freezer

[Chorus]
Get the fuck off, motherfucker
Back the fuck off, fucking hustler
What the fuck, what the fuck?
I don't wanna, I don't need ya
Watch the fire of the Saiya
Get the fuck off, motherfucker
Back the fuck off, fucking hustler
What the fuck, what the fuck?
I don't wanna, I don't need ya
Watch the fire of the Saiya

[Verse 2]
This first album is a victory, created, composed and paid by ourselves
Dedicated to all our friends, supporters and sadly, our dead ones
You and your fake contracts, you don't enslave me
I know what you want from me, what you've got for me
Make money, money, money on my back
You're funny, funny, funny, let me smash your trap
Here is the next concept, respect what you are and fuck the rest
In this business I'm delivery guy
One team standing under the Koshien sky

[Chorus]
Get the fuck off, motherfucker
Back the fuck off, fucking hustler
What the fuck, what the fuck?
I don't wanna, I don't need ya
Watch the fire of the Saiya
Get the fuck off, motherfucker
Back the fuck off, fucking hustler
What the fuck, what the fuck?
I don't wanna, I don't need ya
Watch the fire of the Saiya

[Bridge]
You'll never tame my flame
This is my last chance
You'll never tame my flame
Until my last breath
You'll never tame my flame
You'll never tame my flame
You'll never tame my flame
Never forget my name
Put your middle fingers up
They can't stop the Great North Walk
Put your middle fingers up
They can't stop the Great North Walk
Check it out
[Guitar Solo]

[Chorus]
Get the fuck off, motherfucker
Back the fuck off, fucking hustler
What the fuck, what the fuck?
I don't wanna, I don't need ya
Watch the fire of the Saiya
Get the fuck off, motherfucker
Back the fuck off, fucking hustler
What the fuck, what the fuck?
I don't wanna, I don't need ya
Watch the fire of the Saiya`,"Siberian Meat Grinder feat Distemper - Пламя в Груди.mp3":`За самой темной ночью приходит новая заря
Сколько всего осталось позади, и все это не зря
И как бы ни было трудно, это пламя в груди никогда не умрет
Я знаю секрет победы, оставаться в игре и идти вперед

Из спальных районов, вагонов полных клонов
Врагов на перроне, трейн-ярдов, притонов
Эта музыка сплелась как суровая нить
То, что связала, уже не разъединить,
Не забыть, не выкинуть вон
Готовность как раньше все поставить на кон
Мы всё еще помним то, что ты позабыл
Ты душу даже не продал, ты ее подарил

За самой темной ночью приходит новая заря
Сколько всего осталось позади, и все это не зря
И как бы ни было трудно, это пламя в груди никогда не умрет
Я знаю секрет победы, оставаться в игре и идти вперед

Из тяжелых ботинок и скейтерских кед
Неудач, поражений и первых побед
Зинов, банок абры, затертых кассет
Нет стиля, есть шрамы, пора уже сдаться?
НЕТ! Вот из чего этот трек!
Из чувства, когда спиной к спине против всех
Оттачивый скилы, бери новый трюк
Бешеной собарке семь верст не крюк!

Это мир, где злоба лихо правит дураками
Жадность и насилие здесь царствуют веками
Один против толпы, снова ты или они
У тебя нет выбора - выплывай или тони
Сотни мертвых рук тебя потянут вниз
Шаг против течения, теперь давай держись
Не сворачивай с пути, не предавай свои мечты
Мы всего добились сами, значит, сможешь и ты
`,"The Doors - Alabama song.mp3":`[Verse 1]
Well, show me the way
To the next whiskey bar
Oh, don't ask why
Oh, don't ask why
Show me the way
To the next whiskey bar
Oh, don't ask why
Oh, don't ask why
For if we don't find
The next whiskey bar
I tell you we must die
I tell you we must die
I tell you, I tell you
I tell you we must die

[Chorus]
Oh, moon of Alabama
We now must say goodbye
We've lost our good old mama
And must have whiskey, oh, you know why
Oh, moon of Alabama
We now must say goodbye
We've lost our good old mama
And must have whiskey, oh, you know why
Yeah

[Verse 2]
Well, show me the way to the next little girl
Oh, don't ask why
Oh, don't ask why
Show me the way to the next little girl
Oh, don't ask why
Oh, don't ask why
For if we don't find
The next little girl
I tell you we must die
I tell you we must die
I tell you, I tell you
I tell you we must die

[Chorus]
Oh, moon of Alabama
We now must say goodbye
We've lost our good old mama
And must have whiskey, oh, you know why`,"The Doors - The End.mp3":`[Chorus]
This is the end
Beautiful friend
This is the end
My only friend, the end

[Verse 1]
Of our elaborate plans, the end
Of everything that stands, the end
No safety or surprise, the end
I'll never look into your eyes again

[Verse 2]
Can you picture what will be?
So limitless and free
Desperately in need
Of some stranger's hand
In a desperate land

[Verse 3]
Lost in a Roman wilderness of pain
And all the children are insane
All the children are insane
Waiting for the summer rain, yeah

[Verse 4]
There's danger on the edge of town
Ride the King's Highway, baby
Weird scenes inside the gold mine
Ride the highway west, baby
Ride the snake, ride the snake
To the lake, the ancient lake, baby
The snake, he's long, seven miles
Ride the snake
He's old and his skin is cold
The west is the best
The west is the best
Get here and we'll do the rest
The blue bus is calling us
The blue bus is calling us
Driver, where you taking us?

[Verse 5]
The killer awoke before dawn
He put his boots on
He took a face from the ancient gallery
And he walked on down the hall
He went into the room where his sister lived, and then he
Paid a visit to his brother, and then he
He walked on down the hall, and
And he came to a door
And he looked inside
"Father?" "Yes, son?" "I want to kill you"
"Mother? I want to..."
[Bridge]
Come on baby, take a chance with us
Come on baby, take a chance with us
Come on baby, take a chance with us
And meet me at the back of the blue bus
Doin' a blue rug, on a blue bus, doin' a
Come on yeah
Fuck, fuck-ah, yeah
Fuck, fuck
Fuck, fuck
Fuck, fuck, fuck yeah!
Come on baby, come on
Fuck me baby, fuck yeah
Woah
Fuck, fuck, fuck, yeah!
Fuck, yeah, come on baby
Fuck me baby, fuck fuck
Woah, woah, woah, yeah
Fuck yeah, do it, yeah
Come on!
Huh, huh, huh, huh, yeah
Alright
Kill, kill, kill, kill, kill, kill

[Chorus]
This is the end
Beautiful friend
This is the end
My only friend, the end
[Verse 6]
It hurts to set you free
But you'll never follow me
The end of laughter and soft lies
The end of nights we tried to die
This is the end`,"The Faceless - Shake The Disease.mp3":`I'm not going down on my knees
Begging you to adore me
Can't you see it's misery
And torture for me
When I'm misunderstood
Try as hard as you can, I've tried as hard as I could
To make you see
How important it is for me

Here is a plea
From my heart to you
Nobody knows me
As well as you do
You know how hard it is for me
To shake the disease
That takes hold of my tongue
In situations like these

Understand me

Some people have to be
Permanently together
Lovers devoted to
Each other forever
Now I've got things to do
And I've said before that I know you have too
When I'm not there
In spirit I'll be there
You might also like
I Am
The Faceless
The Spiraling Void
The Faceless
Autotheist Movement I: Create
The Faceless
Here is a plea
From my heart to you
Nobody knows me
As well as you do
You know how hard it is for me
To shake the disease
That takes hold of my tongue
In situations like these
Understand me`,"The Five Stars - Atom Bomb Baby.mp3":`Got a doll baby, I love her so
Nothing else like her anywhere you go
Man she's anything but calm
A regular pint-sized atom bomb

Atom bomb baby little atom bomb
I want her in my wigwam
She's just the way I want her to be
A million times hotter than TNT

Atom bomb baby, loaded with power
Radioactive as a TV tower
A nuclear fission in her soul
Loves with electronic control

Atom bomb baby little atom bomb
I want her in my wigwam
She's just the way I want her to be
A million times hotter than TNT

Atom bomb baby, boy she can start
One of those chain reactions in my heart
A big explosion, big and loud
Mushrooms me right up on a cloud

Atom bomb baby little atom bomb
I want her in my wigwam
She's just the way I want her to be
A million times hotter than TNT
Atom bomb baby, sweet as a plum
Carries more whallop than uranium
When she kisses, there's no hitch
Zero power she turns on a switch

Atom bomb baby little atom bomb
I want her in my wigwam
She's just the way I want her to be
A million times hotter than TNT`,"The HAARP Machine - Esoteric Agenda.mp3":`There were no weapons of mass destruction
Or mobile biological weapons labs
The agenda was to remove saddam hussein
To reap the oil and establish a base
The bush administration made a series of claims prior the
Iraqi war, abuse and misuse of intelligence
There was no collusive
Relationship with al qaeda
Esoteric agenda
Open your eyes and see this world
Is not what it seems free your soul
From the ties that bind us all
Time is upon us to wake up
The wars of the world
Are diversions
For the desires
Of the powers
They declare war as the last option
Even though they always actively block
Every other viable policy in the same way the powers
Make war the only option`,"ZEROMANCER - Dr. Online.mp3":`verse
It's the beginning of the end
You want things to go faster
It's the beginning of the end
Now everything's too slow for you
verse
It's the beginning of the end
You are one step closer
It's the beginning of the end
Say "Amen"
chorus
1-800-suicide
Or maybe Doctor Online could help you die
You need wings to fly, you need someone
To take your place when you are gone
verse
It's the beginning of the end
(You know) nothing lasts forever
A beginning of a trend
(You need) someone there to care for you
verse
It's the beginning of the end
I don't think you understand
Just a beginning of a flatline
Together
chorus
1-800-suicide
Or maybe Doctor Online could help you die
You need wings to fly, you need someone
To take your place when you are gone
chorus
1-800-suicide
Or maybe Doctor Online could help you die
You need wings to fly, you need someone
To take your place when you are gone
bridge
Thank you for calling 1-800-suicide
If you wish to self terminate by electric shock, press 1
For termination by overdose, press 2
If you would like to make a reservation to visit our drowning pool, please, press 3
For termination by hanging, please, press 4
For death by self inflicting gunshot, press 5
To speak to a representative, stay on the line
If you don't wish to die, please, hang up now
chorus
1-800-suicide
Or maybe Doctor Online could help you die
You need wings to fly, you need someone
To take your place when you are gone (1-800-suicide)
chorus
1-800-suicide
Or maybe Doctor Online could help you die (1-800-suicide)
You need wings to fly, you need someone
To take your place when you are gone`,"P.O.D. - Youth of the Nation.mp3":`Last day of the rest of my life
I wish I would've known
'Cause I didn't kiss my mama goodbye
I didn't tell her that I loved her, how much I care
Or thank my pops for all the talks
And all the wisdom he shared
Unaware, I just did what I always do
Everyday, the same routine
Before I skate off to school
But who knew that this day wasn't like the rest
Instead of taking a test
I took two to the chest
Call me blind, but I didn't see it coming
Everybody was running
But I couldn't hear nothing
Except gun blasts, it happened so fast
I didn't really know this kid
Though I sit by him in class
Maybe this kid was reaching out for love
Or maybe for a moment
He forgot who he was
Or maybe this kid just wanted to be hugged
Whatever it was
I know it's because
We are, we are, the youth of the nation
We are, we are, youth of the nation
We are, we are, the youth of the nation
We are, we are, youth of the nation
Little Suzy, she was only twelve
She was given the world
With every chance to excel
Hang with the boys and hear the stories they tell
She might act kind of proud
But no respect for herself
She finds love in all the wrong places
The same situations
Just different faces
Changed up her pace since her daddy left her
Too bad he never told her
She deserved much better
Johnny boy always played the fool
He broke all the rules
So you would think he was cool
He was never really one of the guys
No matter how hard he tried
Often thought of suicide
It's kind of hard when you ain't got no friends
He put his life to an end
They might remember him then
You cross the line and there's no turning back
Told the world how he felt
With the sound of a gat
We are, we are, the youth of the nation
We are, we are, youth of the nation
We are, we are, the youth of the nation
We are, we are, youth of the nation
Who's to blame for the lives that tragedies claim?
No matter what you say
It don't take away the pain
That I feel inside, I'm tired of all the lies
Don't nobody know why
It's the blind leading the blind
I guess that's the way that the story goes
Will it ever make sense
Somebody's got to know
There's got to be more to life than this
There's got to be more to everything
I thought exists
We are, we are, the youth of the nation
We are, we are, youth of the nation
We are, we are (we are, we are), the youth of the nation
We are, we are (we are, we are), youth of the nation
We are, we are (we are, we are)
The youth of the nation (the youth of a nation)
We are, we are (we are, we are)
Youth of the nation (youth of a nation)
We are, we are (we are, we are)
The youth of the nation (the youth of a nation)
We are, we are (we are, we are)
Youth of the nation (youth of the nation)
youth of the nation
(We are) youth of the nation
(We are) youth of the nation
(We are)`},p0=Q2({name:"MainComponent",components:{TrackList:oh,PageTabs:mh,MainInfoBand:Mh,VolumeControl:kh,ProgressControl:Ih,MainControl:qh,OtherControl:em,SongText:om},setup(){const{bestParties:c,nextTrack:a,previousTrack:e,pathToCurrentFile:n,sortingTopTrackList:r,currentTrackIndex:s,changeTab:i,selectTrack:o,tabSelected:t,isRandomTracks:l,handlerRandomBtn:h,totalNumbSongs:u,currentTracks:v,currentSong:p,currentTracksList:P}=nh();P3(async()=>{E();const $=[["play",()=>{a2(),navigator.mediaSession.playbackState="playing"}],["pause",()=>{a2(),navigator.mediaSession.playbackState="paused"}],["nexttrack",()=>{a()}],["previoustrack",()=>{e()}],["seekto",f=>{console.log(f),x.value.currentTime=f.seekTime}]];for(const[f,m]of $)try{navigator.mediaSession.setActionHandler(f,m)}catch{console.log(`The media session action "${f}" is not supported yet.`)}});const M=f2(!1);function E(){const $=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";M.value=$==="dark",C()}D1(M,()=>{C()});function C(){document.documentElement.style.setProperty("color-scheme",M.value?"dark":"light")}function y(){M.value=!M.value}const x=f2(null),w=f2(0),N=f2(.8);function G($){M2($),e2.value&&J2()}function K(){w1.value?x.value.currentTime=0:a()}function R($){if(x.value){const f=$.target;x.value.currentTime=Number(f.value)/100*(x.value.duration||0)}}function W($){x.value&&(x.value.currentTime=$*(x.value.duration||0))}function Q($){w.value=$.target.currentTime,navigator.mediaSession.setPositionState({duration:c2.value,playbackRate:1,position:w.value})}function H2($){N.value=$.target.volume}function B($){x.value.volume=$}const c2=f2(0);function M2($){const f=$.target;c2.value=f.duration,navigator.mediaSession.setPositionState({duration:f.duration,playbackRate:1,position:0})}function J2(){var $;try{($=x.value)==null||$.play().then(f=>f)}catch(f){console.log("error",f)}}const e2=f2(!1);function a2(){var $;e2.value=!e2.value,e2.value?J2():($=x.value)==null||$.pause()}const J=f2(!1);function Z2($){const f=r.value[s.value].bestParties;for(let m=0;m<f.length;m++){const H=f[m];if($<H.start&&!J.value){console.log("start"),x.value.currentTime=H.start;return}else if($>=H.start&&$<=H.end){console.log("continue"),$>=H.end-3&&!J.value&&console.log("end");return}}console.log("nextTrack"),K()}y7(()=>{t.value===4&&e2.value&&s&&Z2(w.value)});const b1=f2("500px");S4(()=>{const $=document.querySelector(".main_control_ref"),f=document.querySelector(".container"),m=$.getBoundingClientRect(),H=f==null?void 0:f.getBoundingClientRect();b1.value=`${Math.abs(m.top-H.top)+18}px`});function c1(){x.value.currentTime<=20||t.value===4?e():x.value.currentTime=0}const g2=f2(!1);function E4(){g2.value=!g2.value}const $1=f2(!1);function s6(){$1.value=!$1.value}function B2(){g2.value=!1,$1.value=!1}function U1($){o($),e2.value?J2():a2()}const w1=f2(!1);function h1(){w1.value=!w1.value}const t4=X(()=>tm[p.value.songName]||"");return{audioPlayer:x,isPlaying:e2,currentTime:w,volume:N,onVolumeUpdate:H2,totalTime:c2,isRandomTracks:l,pathToCurrentFile:n,currentTracks:v,currentTrackIndex:s,currentTracksList:P,totalNumbSongs:u,currentSong:p,handlerCanPlay:G,handlerEnded:K,handlerTimeChange:R,handlerTimeChangeLine:W,onTimeUpdate:Q,setVolume:B,togglePlayPause:a2,nextTrack:a,previousTrackHandler:c1,handlerRandomBtn:h,handlerShowListBtn:E4,handlerSelectTrack:U1,tabSelected:t,changeTab:i,isShowTrackList:g2,repeatModeChange:h1,isRepeatMode:w1,bestParties:c,isDarkTheme:M,handlerChangeThemeBtn:y,handlerShowSongTextBtn:s6,isShowSongText:$1,closeAllBars:B2,currentSongText:t4,distanceBetweenComponents:b1}}}),M5=()=>{Y7(c=>({"9784c30e":c.distanceBetweenComponents}))},g5=p0.setup;p0.setup=g5?(c,a)=>(M5(),g5(c,a)):M5;const lm={class:"container"},fm=["src"];function hm(c,a,e,n,r,s){const i=a1("TrackList"),o=a1("SongText"),t=a1("PageTabs"),l=a1("MainInfoBand"),h=a1("VolumeControl"),u=a1("ProgressControl"),v=a1("MainControl"),p=a1("OtherControl"),P=a1("RouterView");return z2(),V2("main",{class:K2([c.isDarkTheme?"dark":"light"]),onClick:a[4]||(a[4]=w2((...M)=>c.closeAllBars&&c.closeAllBars(...M),["stop"]))},[q("div",lm,[t2(P,null,{default:r3(()=>[t2(d3,{name:"slide-track-list"},{default:r3(()=>[$8(t2(i,{"current-track-index":c.currentTrackIndex,"current-tracks":c.currentTracksList,class:"top_bar",onSelectTrackFromList:c.handlerSelectTrack},null,8,["current-track-index","current-tracks","onSelectTrackFromList"]),[[l5,c.isShowTrackList]])]),_:1}),t2(d3,{name:"slide-song-text"},{default:r3(()=>[$8(t2(o,{"song-text":c.currentSongText,class:"top_bar"},null,8,["song-text"]),[[l5,c.isShowSongText]])]),_:1}),t2(t,{"tab-selected":c.tabSelected,onChangeTab:c.changeTab},null,8,["tab-selected","onChangeTab"]),t2(l,{"song-name":c.currentSong.songName},null,8,["song-name"]),t2(h,{"has-text":!!c.currentSongText.length,volume:c.volume,onVolumeChange:c.setVolume,onShowTextSong:c.handlerShowSongTextBtn},null,8,["has-text","volume","onVolumeChange","onShowTextSong"]),t2(u,{"best-parties":c.bestParties,"current-time":c.currentTime,"total-time":c.totalTime,onTimeChange:c.handlerTimeChange,onTimeChangeLine:c.handlerTimeChangeLine},null,8,["best-parties","current-time","total-time","onTimeChange","onTimeChangeLine"]),t2(v,{ref:"main_control_ref",class:"main_control_ref","is-playing":c.isPlaying,onPrevious:c.previousTrackHandler,onNext:c.nextTrack,onPlayPause:c.togglePlayPause},null,8,["is-playing","onPrevious","onNext","onPlayPause"]),t2(p,{"current-numb-song":c.currentTrackIndex+1,"total-numb-songs":c.totalNumbSongs,"is-random-tracks":c.isRandomTracks,"is-show-track-list":c.isShowTrackList,"is-repeat-mode":c.isRepeatMode,"is-dark-theme":c.isDarkTheme,onRepeatModeClick:c.repeatModeChange,onRandomClick:c.handlerRandomBtn,onShowListClick:c.handlerShowListBtn,onChangeTheme:c.handlerChangeThemeBtn},null,8,["current-numb-song","total-numb-songs","is-random-tracks","is-show-track-list","is-repeat-mode","is-dark-theme","onRepeatModeClick","onRandomClick","onShowListClick","onChangeTheme"]),q("audio",{ref:"audioPlayer",src:c.pathToCurrentFile,preload:"metadata",onVolumechange:a[0]||(a[0]=(...M)=>c.onVolumeUpdate&&c.onVolumeUpdate(...M)),onTimeupdate:a[1]||(a[1]=(...M)=>c.onTimeUpdate&&c.onTimeUpdate(...M)),onCanplay:a[2]||(a[2]=(...M)=>c.handlerCanPlay&&c.handlerCanPlay(...M)),onEnded:a[3]||(a[3]=(...M)=>c.handlerEnded&&c.handlerEnded(...M))},null,40,fm)]),_:1})])],2)}const mm=l1(p0,[["render",hm]]);function C5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(c);a&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,n)}return e}function S(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?C5(Object(e),!0).forEach(function(n){v2(c,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):C5(Object(e)).forEach(function(n){Object.defineProperty(c,n,Object.getOwnPropertyDescriptor(e,n))})}return c}function z3(c){"@babel/helpers - typeof";return z3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},z3(c)}function um(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function L5(c,a){for(var e=0;e<a.length;e++){var n=a[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(c,n.key,n)}}function vm(c,a,e){return a&&L5(c.prototype,a),e&&L5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function v2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function V0(c,a){return dm(c)||pm(c,a)||Q7(c,a)||Mm()}function A4(c){return Hm(c)||zm(c)||Q7(c)||Vm()}function Hm(c){if(Array.isArray(c))return D6(c)}function dm(c){if(Array.isArray(c))return c}function zm(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function pm(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var n=[],r=!0,s=!1,i,o;try{for(e=e.call(c);!(r=(i=e.next()).done)&&(n.push(i.value),!(a&&n.length===a));r=!0);}catch(t){s=!0,o=t}finally{try{!r&&e.return!=null&&e.return()}finally{if(s)throw o}}return n}}function Q7(c,a){if(c){if(typeof c=="string")return D6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return D6(c,a)}}function D6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=c[e];return n}function Vm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var y5=function(){},M0={},J7={},Z7=null,cc={mark:y5,measure:y5};try{typeof window<"u"&&(M0=window),typeof document<"u"&&(J7=document),typeof MutationObserver<"u"&&(Z7=MutationObserver),typeof performance<"u"&&(cc=performance)}catch{}var gm=M0.navigator||{},b5=gm.userAgent,w5=b5===void 0?"":b5,C1=M0,i2=J7,x5=Z7,Y4=cc;C1.document;var f1=!!i2.documentElement&&!!i2.head&&typeof i2.addEventListener=="function"&&typeof i2.createElement=="function",ac=~w5.indexOf("MSIE")||~w5.indexOf("Trident/"),K4,X4,Q4,J4,Z4,s1="___FONT_AWESOME___",E6=16,ec="fa",nc="svg-inline--fa",O1="data-fa-i2svg",_6="data-fa-pseudo-element",Cm="data-fa-pseudo-element-pending",g0="data-prefix",C0="data-icon",N5="fontawesome-i2svg",Lm="async",ym=["HTML","HEAD","STYLE","SCRIPT"],rc=function(){try{return!0}catch{return!1}}(),s2="classic",l2="sharp",L0=[s2,l2];function T4(c){return new Proxy(c,{get:function(e,n){return n in e?e[n]:e[s2]}})}var b4=T4((K4={},v2(K4,s2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),v2(K4,l2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),K4)),w4=T4((X4={},v2(X4,s2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),v2(X4,l2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),X4)),x4=T4((Q4={},v2(Q4,s2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),v2(Q4,l2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Q4)),bm=T4((J4={},v2(J4,s2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),v2(J4,l2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),J4)),wm=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,sc="fa-layers-text",xm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Nm=T4((Z4={},v2(Z4,s2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),v2(Z4,l2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Z4)),ic=[1,2,3,4,5,6,7,8,9,10],km=ic.concat([11,12,13,14,15,16,17,18,19,20]),Sm=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],F1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},N4=new Set;Object.keys(w4[s2]).map(N4.add.bind(N4));Object.keys(w4[l2]).map(N4.add.bind(N4));var Am=[].concat(L0,A4(N4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",F1.GROUP,F1.SWAP_OPACITY,F1.PRIMARY,F1.SECONDARY]).concat(ic.map(function(c){return"".concat(c,"x")})).concat(km.map(function(c){return"w-".concat(c)})),z4=C1.FontAwesomeConfig||{};function Tm(c){var a=i2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Pm(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(i2&&typeof i2.querySelector=="function"){var Bm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Bm.forEach(function(c){var a=V0(c,2),e=a[0],n=a[1],r=Pm(Tm(e));r!=null&&(z4[n]=r)})}var oc={styleDefault:"solid",familyDefault:"classic",cssPrefix:ec,replacementClass:nc,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};z4.familyPrefix&&(z4.cssPrefix=z4.familyPrefix);var e4=S(S({},oc),z4);e4.autoReplaceSvg||(e4.observeMutations=!1);var T={};Object.keys(oc).forEach(function(c){Object.defineProperty(T,c,{enumerable:!0,set:function(e){e4[c]=e,p4.forEach(function(n){return n(T)})},get:function(){return e4[c]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(a){e4.cssPrefix=a,p4.forEach(function(e){return e(T)})},get:function(){return e4.cssPrefix}});C1.FontAwesomeConfig=T;var p4=[];function Fm(c){return p4.push(c),function(){p4.splice(p4.indexOf(c),1)}}var H1=E6,j2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Im(c){if(!(!c||!f1)){var a=i2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=i2.head.childNodes,n=null,r=e.length-1;r>-1;r--){var s=e[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=s)}return i2.head.insertBefore(a,n),c}}var Rm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function k4(){for(var c=12,a="";c-- >0;)a+=Rm[Math.random()*62|0];return a}function o4(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function y0(c){return c.classList?o4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function tc(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Dm(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(tc(c[e]),'" ')},"").trim()}function D3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function b0(c){return c.size!==j2.size||c.x!==j2.x||c.y!==j2.y||c.rotate!==j2.rotate||c.flipX||c.flipY}function Em(c){var a=c.transform,e=c.containerWidth,n=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),t={transform:"".concat(s," ").concat(i," ").concat(o)},l={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:t,path:l}}function _m(c){var a=c.transform,e=c.width,n=e===void 0?E6:e,r=c.height,s=r===void 0?E6:r,i=c.startCentered,o=i===void 0?!1:i,t="";return o&&ac?t+="translate(".concat(a.x/H1-n/2,"em, ").concat(a.y/H1-s/2,"em) "):o?t+="translate(calc(-50% + ".concat(a.x/H1,"em), calc(-50% + ").concat(a.y/H1,"em)) "):t+="translate(".concat(a.x/H1,"em, ").concat(a.y/H1,"em) "),t+="scale(".concat(a.size/H1*(a.flipX?-1:1),", ").concat(a.size/H1*(a.flipY?-1:1),") "),t+="rotate(".concat(a.rotate,"deg) "),t}var Om=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function lc(){var c=ec,a=nc,e=T.cssPrefix,n=T.replacementClass,r=Om;if(e!==c||n!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");r=r.replace(s,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(o,".".concat(n))}return r}var k5=!1;function H6(){T.autoAddCss&&!k5&&(Im(lc()),k5=!0)}var Wm={mixout:function(){return{dom:{css:lc,insertCss:H6}}},hooks:function(){return{beforeDOMElementCreation:function(){H6()},beforeI2svg:function(){H6()}}}},i1=C1||{};i1[s1]||(i1[s1]={});i1[s1].styles||(i1[s1].styles={});i1[s1].hooks||(i1[s1].hooks={});i1[s1].shims||(i1[s1].shims=[]);var E2=i1[s1],fc=[],$m=function c(){i2.removeEventListener("DOMContentLoaded",c),p3=1,fc.map(function(a){return a()})},p3=!1;f1&&(p3=(i2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(i2.readyState),p3||i2.addEventListener("DOMContentLoaded",$m));function Um(c){f1&&(p3?setTimeout(c,0):fc.push(c))}function P4(c){var a=c.tag,e=c.attributes,n=e===void 0?{}:e,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?tc(c):"<".concat(a," ").concat(Dm(n),">").concat(s.map(P4).join(""),"</").concat(a,">")}function S5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var qm=function(a,e){return function(n,r,s,i){return a.call(e,n,r,s,i)}},d6=function(a,e,n,r){var s=Object.keys(a),i=s.length,o=r!==void 0?qm(e,r):e,t,l,h;for(n===void 0?(t=1,h=a[s[0]]):(t=0,h=n);t<i;t++)l=s[t],h=o(h,a[l],l,a);return h};function Gm(c){for(var a=[],e=0,n=c.length;e<n;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<n){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((r&1023)<<10)+(s&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function O6(c){var a=Gm(c);return a.length===1?a[0].toString(16):null}function jm(c,a){var e=c.length,n=c.charCodeAt(a),r;return n>=55296&&n<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function A5(c){return Object.keys(c).reduce(function(a,e){var n=c[e],r=!!n.icon;return r?a[n.iconName]=n.icon:a[e]=n,a},{})}function W6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.skipHooks,r=n===void 0?!1:n,s=A5(a);typeof E2.hooks.addPack=="function"&&!r?E2.hooks.addPack(c,A5(a)):E2.styles[c]=S(S({},E2.styles[c]||{}),s),c==="fas"&&W6("fa",a)}var c3,a3,e3,j1=E2.styles,Ym=E2.shims,Km=(c3={},v2(c3,s2,Object.values(x4[s2])),v2(c3,l2,Object.values(x4[l2])),c3),w0=null,hc={},mc={},uc={},vc={},Hc={},Xm=(a3={},v2(a3,s2,Object.keys(b4[s2])),v2(a3,l2,Object.keys(b4[l2])),a3);function Qm(c){return~Am.indexOf(c)}function Jm(c,a){var e=a.split("-"),n=e[0],r=e.slice(1).join("-");return n===c&&r!==""&&!Qm(r)?r:null}var dc=function(){var a=function(s){return d6(j1,function(i,o,t){return i[t]=d6(o,s,{}),i},{})};hc=a(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var o=s[2].filter(function(t){return typeof t=="number"});o.forEach(function(t){r[t.toString(16)]=i})}return r}),mc=a(function(r,s,i){if(r[i]=i,s[2]){var o=s[2].filter(function(t){return typeof t=="string"});o.forEach(function(t){r[t]=i})}return r}),Hc=a(function(r,s,i){var o=s[2];return r[i]=i,o.forEach(function(t){r[t]=i}),r});var e="far"in j1||T.autoFetchSvg,n=d6(Ym,function(r,s){var i=s[0],o=s[1],t=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:t}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:t}),r},{names:{},unicodes:{}});uc=n.names,vc=n.unicodes,w0=E3(T.styleDefault,{family:T.familyDefault})};Fm(function(c){w0=E3(c.styleDefault,{family:T.familyDefault})});dc();function x0(c,a){return(hc[c]||{})[a]}function Zm(c,a){return(mc[c]||{})[a]}function I1(c,a){return(Hc[c]||{})[a]}function zc(c){return uc[c]||{prefix:null,iconName:null}}function cu(c){var a=vc[c],e=x0("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function L1(){return w0}var N0=function(){return{prefix:null,iconName:null,rest:[]}};function E3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,n=e===void 0?s2:e,r=b4[n][c],s=w4[n][c]||w4[n][r],i=c in E2.styles?c:null;return s||i||null}var T5=(e3={},v2(e3,s2,Object.keys(x4[s2])),v2(e3,l2,Object.keys(x4[l2])),e3);function _3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,s=(a={},v2(a,s2,"".concat(T.cssPrefix,"-").concat(s2)),v2(a,l2,"".concat(T.cssPrefix,"-").concat(l2)),a),i=null,o=s2;(c.includes(s[s2])||c.some(function(l){return T5[s2].includes(l)}))&&(o=s2),(c.includes(s[l2])||c.some(function(l){return T5[l2].includes(l)}))&&(o=l2);var t=c.reduce(function(l,h){var u=Jm(T.cssPrefix,h);if(j1[h]?(h=Km[o].includes(h)?bm[o][h]:h,i=h,l.prefix=h):Xm[o].indexOf(h)>-1?(i=h,l.prefix=E3(h,{family:o})):u?l.iconName=u:h!==T.replacementClass&&h!==s[s2]&&h!==s[l2]&&l.rest.push(h),!r&&l.prefix&&l.iconName){var v=i==="fa"?zc(l.iconName):{},p=I1(l.prefix,l.iconName);v.prefix&&(i=null),l.iconName=v.iconName||p||l.iconName,l.prefix=v.prefix||l.prefix,l.prefix==="far"&&!j1.far&&j1.fas&&!T.autoFetchSvg&&(l.prefix="fas")}return l},N0());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&o===l2&&(j1.fass||T.autoFetchSvg)&&(t.prefix="fass",t.iconName=I1(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||i==="fa")&&(t.prefix=L1()||"fas"),t}var au=function(){function c(){um(this,c),this.definitions={}}return vm(c,[{key:"add",value:function(){for(var e=this,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=S(S({},e.definitions[o]||{}),i[o]),W6(o,i[o]);var t=x4[s2][o];t&&W6(t,i[o]),dc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(s){var i=r[s],o=i.prefix,t=i.iconName,l=i.icon,h=l[2];e[o]||(e[o]={}),h.length>0&&h.forEach(function(u){typeof u=="string"&&(e[o][u]=l)}),e[o][t]=l}),e}}]),c}(),P5=[],Y1={},Z1={},eu=Object.keys(Z1);function nu(c,a){var e=a.mixoutsTo;return P5=c,Y1={},Object.keys(Z1).forEach(function(n){eu.indexOf(n)===-1&&delete Z1[n]}),P5.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),z3(r[i])==="object"&&Object.keys(r[i]).forEach(function(o){e[i]||(e[i]={}),e[i][o]=r[i][o]})}),n.hooks){var s=n.hooks();Object.keys(s).forEach(function(i){Y1[i]||(Y1[i]=[]),Y1[i].push(s[i])})}n.provides&&n.provides(Z1)}),e}function $6(c,a){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];var s=Y1[c]||[];return s.forEach(function(i){a=i.apply(null,[a].concat(n))}),a}function W1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),n=1;n<a;n++)e[n-1]=arguments[n];var r=Y1[c]||[];r.forEach(function(s){s.apply(null,e)})}function o1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Z1[c]?Z1[c].apply(null,a):void 0}function U6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||L1();if(a)return a=I1(e,a)||a,S5(pc.definitions,e,a)||S5(E2.styles,e,a)}var pc=new au,ru=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,W1("noAuto")},su={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return f1?(W1("beforeI2svg",a),o1("pseudoElements2svg",a),o1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Um(function(){ou({autoReplaceSvgRoot:e}),W1("watch",a)})}},iu={icon:function(a){if(a===null)return null;if(z3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:I1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],n=E3(a[0]);return{prefix:n,iconName:I1(n,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(T.cssPrefix,"-"))>-1||a.match(wm))){var r=_3(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||L1(),iconName:I1(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var s=L1();return{prefix:s,iconName:I1(s,a)||a}}}},A2={noAuto:ru,config:T,dom:su,parse:iu,library:pc,findIconDefinition:U6,toHtml:P4},ou=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,n=e===void 0?i2:e;(Object.keys(E2.styles).length>0||T.autoFetchSvg)&&f1&&T.autoReplaceSvg&&A2.dom.i2svg({node:n})};function O3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(n){return P4(n)})}}),Object.defineProperty(c,"node",{get:function(){if(f1){var n=i2.createElement("div");return n.innerHTML=c.html,n.children}}}),c}function tu(c){var a=c.children,e=c.main,n=c.mask,r=c.attributes,s=c.styles,i=c.transform;if(b0(i)&&e.found&&!n.found){var o=e.width,t=e.height,l={x:o/t/2,y:.5};r.style=D3(S(S({},s),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function lu(c){var a=c.prefix,e=c.iconName,n=c.children,r=c.attributes,s=c.symbol,i=s===!0?"".concat(a,"-").concat(T.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},r),{},{id:i}),children:n}]}]}function k0(c){var a=c.icons,e=a.main,n=a.mask,r=c.prefix,s=c.iconName,i=c.transform,o=c.symbol,t=c.title,l=c.maskId,h=c.titleId,u=c.extra,v=c.watchable,p=v===void 0?!1:v,P=n.found?n:e,M=P.width,E=P.height,C=r==="fak",y=[T.replacementClass,s?"".concat(T.cssPrefix,"-").concat(s):""].filter(function(W){return u.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(u.classes).join(" "),x={children:[],attributes:S(S({},u.attributes),{},{"data-prefix":r,"data-icon":s,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(E)})},w=C&&!~u.classes.indexOf("fa-fw")?{width:"".concat(M/E*16*.0625,"em")}:{};p&&(x.attributes[O1]=""),t&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(h||k4())},children:[t]}),delete x.attributes.title);var N=S(S({},x),{},{prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:S(S({},w),u.styles)}),G=n.found&&e.found?o1("generateAbstractMask",N)||{children:[],attributes:{}}:o1("generateAbstractIcon",N)||{children:[],attributes:{}},K=G.children,R=G.attributes;return N.children=K,N.attributes=R,o?lu(N):tu(N)}function B5(c){var a=c.content,e=c.width,n=c.height,r=c.transform,s=c.title,i=c.extra,o=c.watchable,t=o===void 0?!1:o,l=S(S(S({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});t&&(l[O1]="");var h=S({},i.styles);b0(r)&&(h.transform=_m({transform:r,startCentered:!0,width:e,height:n}),h["-webkit-transform"]=h.transform);var u=D3(h);u.length>0&&(l.style=u);var v=[];return v.push({tag:"span",attributes:l,children:[a]}),s&&v.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),v}function fu(c){var a=c.content,e=c.title,n=c.extra,r=S(S(S({},n.attributes),e?{title:e}:{}),{},{class:n.classes.join(" ")}),s=D3(n.styles);s.length>0&&(r.style=s);var i=[];return i.push({tag:"span",attributes:r,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var z6=E2.styles;function q6(c){var a=c[0],e=c[1],n=c.slice(4),r=V0(n,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(F1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(F1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(F1.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:i}}var hu={found:!1,width:512,height:512};function mu(c,a){!rc&&!T.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function G6(c,a){var e=a;return a==="fa"&&T.styleDefault!==null&&(a=L1()),new Promise(function(n,r){if(o1("missingIconAbstract"),e==="fa"){var s=zc(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&z6[a]&&z6[a][c]){var i=z6[a][c];return n(q6(i))}mu(c,a),n(S(S({},hu),{},{icon:T.showMissingIcons&&c?o1("missingIconAbstract")||{}:{}}))})}var F5=function(){},j6=T.measurePerformance&&Y4&&Y4.mark&&Y4.measure?Y4:{mark:F5,measure:F5},v4='FA "6.5.1"',uu=function(a){return j6.mark("".concat(v4," ").concat(a," begins")),function(){return Vc(a)}},Vc=function(a){j6.mark("".concat(v4," ").concat(a," ends")),j6.measure("".concat(v4," ").concat(a),"".concat(v4," ").concat(a," begins"),"".concat(v4," ").concat(a," ends"))},S0={begin:uu,end:Vc},l3=function(){};function I5(c){var a=c.getAttribute?c.getAttribute(O1):null;return typeof a=="string"}function vu(c){var a=c.getAttribute?c.getAttribute(g0):null,e=c.getAttribute?c.getAttribute(C0):null;return a&&e}function Hu(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(T.replacementClass)}function du(){if(T.autoReplaceSvg===!0)return f3.replace;var c=f3[T.autoReplaceSvg];return c||f3.replace}function zu(c){return i2.createElementNS("http://www.w3.org/2000/svg",c)}function pu(c){return i2.createElement(c)}function Mc(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,n=e===void 0?c.tag==="svg"?zu:pu:e;if(typeof c=="string")return i2.createTextNode(c);var r=n(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var s=c.children||[];return s.forEach(function(i){r.appendChild(Mc(i,{ceFn:n}))}),r}function Vu(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var f3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(Mc(r),e)}),e.getAttribute(O1)===null&&T.keepOriginalSource){var n=i2.createComment(Vu(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(a){var e=a[0],n=a[1];if(~y0(e).indexOf(T.replacementClass))return f3.replace(a);var r=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var s=n[0].attributes.class.split(" ").reduce(function(o,t){return t===T.replacementClass||t.match(r)?o.toSvg.push(t):o.toNode.push(t),o},{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var i=n.map(function(o){return P4(o)}).join(`
`);e.setAttribute(O1,""),e.innerHTML=i}};function R5(c){c()}function gc(c,a){var e=typeof a=="function"?a:l3;if(c.length===0)e();else{var n=R5;T.mutateApproach===Lm&&(n=C1.requestAnimationFrame||R5),n(function(){var r=du(),s=S0.begin("mutate");c.map(r),s(),e()})}}var A0=!1;function Cc(){A0=!0}function Y6(){A0=!1}var V3=null;function D5(c){if(x5&&T.observeMutations){var a=c.treeCallback,e=a===void 0?l3:a,n=c.nodeCallback,r=n===void 0?l3:n,s=c.pseudoElementsCallback,i=s===void 0?l3:s,o=c.observeMutationsRoot,t=o===void 0?i2:o;V3=new x5(function(l){if(!A0){var h=L1();o4(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!I5(u.addedNodes[0])&&(T.searchPseudoElements&&i(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&T.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&I5(u.target)&&~Sm.indexOf(u.attributeName))if(u.attributeName==="class"&&vu(u.target)){var v=_3(y0(u.target)),p=v.prefix,P=v.iconName;u.target.setAttribute(g0,p||h),P&&u.target.setAttribute(C0,P)}else Hu(u.target)&&r(u.target)})}}),f1&&V3.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Mu(){V3&&V3.disconnect()}function gu(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(n,r){var s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(n[i]=o.join(":").trim()),n},{})),e}function Cu(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),n=c.innerText!==void 0?c.innerText.trim():"",r=_3(y0(c));return r.prefix||(r.prefix=L1()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Zm(r.prefix,c.innerText)||x0(r.prefix,O6(c.innerText))),!r.iconName&&T.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function Lu(c){var a=o4(c.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),e=c.getAttribute("title"),n=c.getAttribute("data-fa-title-id");return T.autoA11y&&(e?a["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(n||k4()):(a["aria-hidden"]="true",a.focusable="false")),a}function yu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function E5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Cu(c),n=e.iconName,r=e.prefix,s=e.rest,i=Lu(c),o=$6("parseNodeAttributes",{},c),t=a.styleParser?gu(c):[];return S({iconName:n,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:j2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:t,attributes:i}},o)}var bu=E2.styles;function Lc(c){var a=T.autoReplaceSvg==="nest"?E5(c,{styleParser:!1}):E5(c);return~a.extra.classes.indexOf(sc)?o1("generateLayersText",c,a):o1("generateSvgReplacementMutation",c,a)}var y1=new Set;L0.map(function(c){y1.add("fa-".concat(c))});Object.keys(b4[s2]).map(y1.add.bind(y1));Object.keys(b4[l2]).map(y1.add.bind(y1));y1=A4(y1);function _5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!f1)return Promise.resolve();var e=i2.documentElement.classList,n=function(u){return e.add("".concat(N5,"-").concat(u))},r=function(u){return e.remove("".concat(N5,"-").concat(u))},s=T.autoFetchSvg?y1:L0.map(function(h){return"fa-".concat(h)}).concat(Object.keys(bu));s.includes("fa")||s.push("fa");var i=[".".concat(sc,":not([").concat(O1,"])")].concat(s.map(function(h){return".".concat(h,":not([").concat(O1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=o4(c.querySelectorAll(i))}catch{}if(o.length>0)n("pending"),r("complete");else return Promise.resolve();var t=S0.begin("onTree"),l=o.reduce(function(h,u){try{var v=Lc(u);v&&h.push(v)}catch(p){rc||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise(function(h,u){Promise.all(l).then(function(v){gc(v,function(){n("active"),n("complete"),r("pending"),typeof a=="function"&&a(),t(),h()})}).catch(function(v){t(),u(v)})})}function wu(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Lc(c).then(function(e){e&&gc([e],a)})}function xu(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(a||{}).icon?a:U6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:U6(r||{})),c(n,S(S({},e),{},{mask:r}))}}var Nu=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?j2:n,s=e.symbol,i=s===void 0?!1:s,o=e.mask,t=o===void 0?null:o,l=e.maskId,h=l===void 0?null:l,u=e.title,v=u===void 0?null:u,p=e.titleId,P=p===void 0?null:p,M=e.classes,E=M===void 0?[]:M,C=e.attributes,y=C===void 0?{}:C,x=e.styles,w=x===void 0?{}:x;if(a){var N=a.prefix,G=a.iconName,K=a.icon;return O3(S({type:"icon"},a),function(){return W1("beforeDOMElementCreation",{iconDefinition:a,params:e}),T.autoA11y&&(v?y["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(P||k4()):(y["aria-hidden"]="true",y.focusable="false")),k0({icons:{main:q6(K),mask:t?q6(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:G,transform:S(S({},j2),r),symbol:i,title:v,maskId:h,titleId:P,extra:{attributes:y,styles:w,classes:E}})})}},ku={mixout:function(){return{icon:xu(Nu)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=_5,e.nodeCallback=wu,e}}},provides:function(a){a.i2svg=function(e){var n=e.node,r=n===void 0?i2:n,s=e.callback,i=s===void 0?function(){}:s;return _5(r,i)},a.generateSvgReplacementMutation=function(e,n){var r=n.iconName,s=n.title,i=n.titleId,o=n.prefix,t=n.transform,l=n.symbol,h=n.mask,u=n.maskId,v=n.extra;return new Promise(function(p,P){Promise.all([G6(r,o),h.iconName?G6(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var E=V0(M,2),C=E[0],y=E[1];p([e,k0({icons:{main:C,mask:y},prefix:o,iconName:r,transform:t,symbol:l,maskId:u,title:s,titleId:i,extra:v,watchable:!0})])}).catch(P)})},a.generateAbstractIcon=function(e){var n=e.children,r=e.attributes,s=e.main,i=e.transform,o=e.styles,t=D3(o);t.length>0&&(r.style=t);var l;return b0(i)&&(l=o1("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},Su={mixout:function(){return{layer:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,s=r===void 0?[]:r;return O3({type:"layer"},function(){W1("beforeDOMElementCreation",{assembler:e,params:n});var i=[];return e(function(o){Array.isArray(o)?o.map(function(t){i=i.concat(t.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(A4(s)).join(" ")},children:i}]})}}}},Au={mixout:function(){return{counter:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,s=r===void 0?null:r,i=n.classes,o=i===void 0?[]:i,t=n.attributes,l=t===void 0?{}:t,h=n.styles,u=h===void 0?{}:h;return O3({type:"counter",content:e},function(){return W1("beforeDOMElementCreation",{content:e,params:n}),fu({content:e.toString(),title:s,extra:{attributes:l,styles:u,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(A4(o))}})})}}}},Tu={mixout:function(){return{text:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?j2:r,i=n.title,o=i===void 0?null:i,t=n.classes,l=t===void 0?[]:t,h=n.attributes,u=h===void 0?{}:h,v=n.styles,p=v===void 0?{}:v;return O3({type:"text",content:e},function(){return W1("beforeDOMElementCreation",{content:e,params:n}),B5({content:e,transform:S(S({},j2),s),title:o,extra:{attributes:u,styles:p,classes:["".concat(T.cssPrefix,"-layers-text")].concat(A4(l))}})})}}},provides:function(a){a.generateLayersText=function(e,n){var r=n.title,s=n.transform,i=n.extra,o=null,t=null;if(ac){var l=parseInt(getComputedStyle(e).fontSize,10),h=e.getBoundingClientRect();o=h.width/l,t=h.height/l}return T.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,B5({content:e.innerHTML,width:o,height:t,transform:s,title:r,extra:i,watchable:!0})])}}},Pu=new RegExp('"',"ug"),O5=[1105920,1112319];function Bu(c){var a=c.replace(Pu,""),e=jm(a,0),n=e>=O5[0]&&e<=O5[1],r=a.length===2?a[0]===a[1]:!1;return{value:O6(r?a[0]:a),isSecondary:n||r}}function W5(c,a){var e="".concat(Cm).concat(a.replace(":","-"));return new Promise(function(n,r){if(c.getAttribute(e)!==null)return n();var s=o4(c.children),i=s.filter(function(K){return K.getAttribute(_6)===a})[0],o=C1.getComputedStyle(c,a),t=o.getPropertyValue("font-family").match(xm),l=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(i&&!t)return c.removeChild(i),n();if(t&&h!=="none"&&h!==""){var u=o.getPropertyValue("content"),v=~["Sharp"].indexOf(t[2])?l2:s2,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(t[2])?w4[v][t[2].toLowerCase()]:Nm[v][l],P=Bu(u),M=P.value,E=P.isSecondary,C=t[0].startsWith("FontAwesome"),y=x0(p,M),x=y;if(C){var w=cu(M);w.iconName&&w.prefix&&(y=w.iconName,p=w.prefix)}if(y&&!E&&(!i||i.getAttribute(g0)!==p||i.getAttribute(C0)!==x)){c.setAttribute(e,x),i&&c.removeChild(i);var N=yu(),G=N.extra;G.attributes[_6]=a,G6(y,p).then(function(K){var R=k0(S(S({},N),{},{icons:{main:K,mask:N0()},prefix:p,iconName:x,extra:G,watchable:!0})),W=i2.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(W,c.firstChild):c.appendChild(W),W.outerHTML=R.map(function(Q){return P4(Q)}).join(`
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}