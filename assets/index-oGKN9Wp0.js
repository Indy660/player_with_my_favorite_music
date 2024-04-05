(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function Y6(c,a){const e=Object.create(null),n=c.split(",");for(let r=0;r<n.length;r++)e[n[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}const n2={},j1=[],X2=()=>{},gt=()=>!1,p3=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),K6=c=>c.startsWith("onUpdate:"),u2=Object.assign,X6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Lt=Object.prototype.hasOwnProperty,G=(c,a)=>Lt.call(c,a),R=Array.isArray,Y1=c=>V3(c)==="[object Map]",q5=c=>V3(c)==="[object Set]",_=c=>typeof c=="function",h2=c=>typeof c=="string",e4=c=>typeof c=="symbol",i2=c=>c!==null&&typeof c=="object",G5=c=>(i2(c)||_(c))&&_(c.then)&&_(c.catch),j5=Object.prototype.toString,V3=c=>j5.call(c),bt=c=>V3(c).slice(8,-1),Y5=c=>V3(c)==="[object Object]",Q6=c=>h2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,a3=Y6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),M3=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},yt=/-(\w)/g,J2=M3(c=>c.replace(yt,(a,e)=>e?e.toUpperCase():"")),wt=/\B([A-Z])/g,n4=M3(c=>c.replace(wt,"-$1").toLowerCase()),C3=M3(c=>c.charAt(0).toUpperCase()+c.slice(1)),r6=M3(c=>c?`on${C3(c)}`:""),E1=(c,a)=>!Object.is(c,a),s6=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},t3=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},xt=c=>{const a=parseFloat(c);return isNaN(a)?c:a},Nt=c=>{const a=h2(c)?Number(c):NaN;return isNaN(a)?c:a};let S8;const p6=()=>S8||(S8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function g3(c){if(R(c)){const a={};for(let e=0;e<c.length;e++){const n=c[e],r=h2(n)?Tt(n):g3(n);if(r)for(const s in r)a[s]=r[s]}return a}else if(h2(c)||i2(c))return c}const kt=/;(?![^(]*\))/g,St=/:([^]+)/,At=/\/\*[^]*?\*\//g;function Tt(c){const a={};return c.replace(At,"").split(kt).forEach(e=>{if(e){const n=e.split(St);n.length>1&&(a[n[0].trim()]=n[1].trim())}}),a}function Q2(c){let a="";if(h2(c))a=c;else if(R(c))for(let e=0;e<c.length;e++){const n=Q2(c[e]);n&&(a+=n+" ")}else if(i2(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Pt="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ft=Y6(Pt);function K5(c){return!!c||c===""}const $2=c=>h2(c)?c:c==null?"":R(c)||i2(c)&&(c.toString===j5||!_(c.toString))?JSON.stringify(c,X5,2):String(c),X5=(c,a)=>a&&a.__v_isRef?X5(c,a.value):Y1(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[n,r],s)=>(e[i6(n,s)+" =>"]=r,e),{})}:q5(a)?{[`Set(${a.size})`]:[...a.values()].map(e=>i6(e))}:e4(a)?i6(a):i2(a)&&!R(a)&&!Y5(a)?String(a):a,i6=(c,a="")=>{var e;return e4(c)?`Symbol(${(e=c.description)!=null?e:a})`:c};let E2;class Bt{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=E2,!a&&E2&&(this.index=(E2.scopes||(E2.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=E2;try{return E2=this,a()}finally{E2=e}}}on(){E2=this}off(){E2=this.parent}stop(a){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function It(c,a=E2){a&&a.active&&a.effects.push(c)}function Rt(){return E2}const J6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},Q5=c=>(c.w&g1)>0,J5=c=>(c.n&g1)>0,Dt=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=g1},Et=c=>{const{deps:a}=c;if(a.length){let e=0;for(let n=0;n<a.length;n++){const r=a[n];Q5(r)&&!J5(r)?r.delete(c):a[e++]=r,r.w&=~g1,r.n&=~g1}a.length=e}},V6=new WeakMap;let f4=0,g1=1;const M6=30;let O2;const R1=Symbol(""),C6=Symbol("");class Z6{constructor(a,e=null,n){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,It(this,n)}run(){if(!this.active)return this.fn();let a=O2,e=M1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=O2,O2=this,M1=!0,g1=1<<++f4,f4<=M6?Dt(this):A8(this),this.fn()}finally{f4<=M6&&Et(this),g1=1<<--f4,O2=this.parent,M1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){O2===this?this.deferStop=!0:this.active&&(A8(this),this.onStop&&this.onStop(),this.active=!1)}}function A8(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let M1=!0;const Z5=[];function r4(){Z5.push(M1),M1=!1}function s4(){const c=Z5.pop();M1=c===void 0?!0:c}function k2(c,a,e){if(M1&&O2){let n=V6.get(c);n||V6.set(c,n=new Map);let r=n.get(e);r||n.set(e,r=J6()),c7(r)}}function c7(c,a){let e=!1;f4<=M6?J5(c)||(c.n|=g1,e=!Q5(c)):e=!c.has(O2),e&&(c.add(O2),O2.deps.push(c))}function i1(c,a,e,n,r,s){const i=V6.get(c);if(!i)return;let o=[];if(a==="clear")o=[...i.values()];else if(e==="length"&&R(c)){const t=Number(n);i.forEach((l,m)=>{(m==="length"||!e4(m)&&m>=t)&&o.push(l)})}else switch(e!==void 0&&o.push(i.get(e)),a){case"add":R(c)?Q6(e)&&o.push(i.get("length")):(o.push(i.get(R1)),Y1(c)&&o.push(i.get(C6)));break;case"delete":R(c)||(o.push(i.get(R1)),Y1(c)&&o.push(i.get(C6)));break;case"set":Y1(c)&&o.push(i.get(R1));break}if(o.length===1)o[0]&&g6(o[0]);else{const t=[];for(const l of o)l&&t.push(...l);g6(J6(t))}}function g6(c,a){const e=R(c)?c:[...c];for(const n of e)n.computed&&T8(n);for(const n of e)n.computed||T8(n)}function T8(c,a){(c!==O2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Ot=Y6("__proto__,__v_isRef,__isVue"),a7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(e4)),P8=_t();function _t(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const n=j(this);for(let s=0,i=this.length;s<i;s++)k2(n,"get",s+"");const r=n[a](...e);return r===-1||r===!1?n[a](...e.map(j)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){r4();const n=j(this)[a].apply(this,e);return s4(),n}}),c}function Wt(c){const a=j(this);return k2(a,"has",c),a.hasOwnProperty(c)}class e7{constructor(a=!1,e=!1){this._isReadonly=a,this._shallow=e}get(a,e,n){const r=this._isReadonly,s=this._shallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return n===(r?s?al:i7:s?s7:r7).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(n)?a:void 0;const i=R(a);if(!r){if(i&&G(P8,e))return Reflect.get(P8,e,n);if(e==="hasOwnProperty")return Wt}const o=Reflect.get(a,e,n);return(e4(e)?a7.has(e):Ot(e))||(r||k2(a,"get",e),s)?o:S2(o)?i&&Q6(e)?o:o.value:i2(o)?r?o7(o):e0(o):o}}class n7 extends e7{constructor(a=!1){super(!1,a)}set(a,e,n,r){let s=a[e];if(!this._shallow){const t=Z1(s);if(!l3(n)&&!Z1(n)&&(s=j(s),n=j(n)),!R(a)&&S2(s)&&!S2(n))return t?!1:(s.value=n,!0)}const i=R(a)&&Q6(e)?Number(e)<a.length:G(a,e),o=Reflect.set(a,e,n,r);return a===j(r)&&(i?E1(n,s)&&i1(a,"set",e,n):i1(a,"add",e,n)),o}deleteProperty(a,e){const n=G(a,e);a[e];const r=Reflect.deleteProperty(a,e);return r&&n&&i1(a,"delete",e,void 0),r}has(a,e){const n=Reflect.has(a,e);return(!e4(e)||!a7.has(e))&&k2(a,"has",e),n}ownKeys(a){return k2(a,"iterate",R(a)?"length":R1),Reflect.ownKeys(a)}}class $t extends e7{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const Ut=new n7,qt=new $t,Gt=new n7(!0),c0=c=>c,L3=c=>Reflect.getPrototypeOf(c);function D4(c,a,e=!1,n=!1){c=c.__v_raw;const r=j(c),s=j(a);e||(E1(a,s)&&k2(r,"get",a),k2(r,"get",s));const{has:i}=L3(r),o=n?c0:e?r0:d4;if(i.call(r,a))return o(c.get(a));if(i.call(r,s))return o(c.get(s));c!==r&&c.get(a)}function E4(c,a=!1){const e=this.__v_raw,n=j(e),r=j(c);return a||(E1(c,r)&&k2(n,"has",c),k2(n,"has",r)),c===r?e.has(c):e.has(c)||e.has(r)}function O4(c,a=!1){return c=c.__v_raw,!a&&k2(j(c),"iterate",R1),Reflect.get(c,"size",c)}function F8(c){c=j(c);const a=j(this);return L3(a).has.call(a,c)||(a.add(c),i1(a,"add",c,c)),this}function B8(c,a){a=j(a);const e=j(this),{has:n,get:r}=L3(e);let s=n.call(e,c);s||(c=j(c),s=n.call(e,c));const i=r.call(e,c);return e.set(c,a),s?E1(a,i)&&i1(e,"set",c,a):i1(e,"add",c,a),this}function I8(c){const a=j(this),{has:e,get:n}=L3(a);let r=e.call(a,c);r||(c=j(c),r=e.call(a,c)),n&&n.call(a,c);const s=a.delete(c);return r&&i1(a,"delete",c,void 0),s}function R8(){const c=j(this),a=c.size!==0,e=c.clear();return a&&i1(c,"clear",void 0,void 0),e}function _4(c,a){return function(n,r){const s=this,i=s.__v_raw,o=j(i),t=a?c0:c?r0:d4;return!c&&k2(o,"iterate",R1),i.forEach((l,m)=>n.call(r,t(l),t(m),s))}}function W4(c,a,e){return function(...n){const r=this.__v_raw,s=j(r),i=Y1(s),o=c==="entries"||c===Symbol.iterator&&i,t=c==="keys"&&i,l=r[c](...n),m=e?c0:a?r0:d4;return!a&&k2(s,"iterate",t?C6:R1),{next(){const{value:u,done:v}=l.next();return v?{value:u,done:v}:{value:o?[m(u[0]),m(u[1])]:m(u),done:v}},[Symbol.iterator](){return this}}}}function u1(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function jt(){const c={get(s){return D4(this,s)},get size(){return O4(this)},has:E4,add:F8,set:B8,delete:I8,clear:R8,forEach:_4(!1,!1)},a={get(s){return D4(this,s,!1,!0)},get size(){return O4(this)},has:E4,add:F8,set:B8,delete:I8,clear:R8,forEach:_4(!1,!0)},e={get(s){return D4(this,s,!0)},get size(){return O4(this,!0)},has(s){return E4.call(this,s,!0)},add:u1("add"),set:u1("set"),delete:u1("delete"),clear:u1("clear"),forEach:_4(!0,!1)},n={get(s){return D4(this,s,!0,!0)},get size(){return O4(this,!0)},has(s){return E4.call(this,s,!0)},add:u1("add"),set:u1("set"),delete:u1("delete"),clear:u1("clear"),forEach:_4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=W4(s,!1,!1),e[s]=W4(s,!0,!1),a[s]=W4(s,!1,!0),n[s]=W4(s,!0,!0)}),[c,e,a,n]}const[Yt,Kt,Xt,Qt]=jt();function a0(c,a){const e=a?c?Qt:Xt:c?Kt:Yt;return(n,r,s)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?n:Reflect.get(G(e,r)&&r in n?e:n,r,s)}const Jt={get:a0(!1,!1)},Zt={get:a0(!1,!0)},cl={get:a0(!0,!1)},r7=new WeakMap,s7=new WeakMap,i7=new WeakMap,al=new WeakMap;function el(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nl(c){return c.__v_skip||!Object.isExtensible(c)?0:el(bt(c))}function e0(c){return Z1(c)?c:n0(c,!1,Ut,Jt,r7)}function rl(c){return n0(c,!1,Gt,Zt,s7)}function o7(c){return n0(c,!0,qt,cl,i7)}function n0(c,a,e,n,r){if(!i2(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=r.get(c);if(s)return s;const i=nl(c);if(i===0)return c;const o=new Proxy(c,i===2?n:e);return r.set(c,o),o}function K1(c){return Z1(c)?K1(c.__v_raw):!!(c&&c.__v_isReactive)}function Z1(c){return!!(c&&c.__v_isReadonly)}function l3(c){return!!(c&&c.__v_isShallow)}function t7(c){return K1(c)||Z1(c)}function j(c){const a=c&&c.__v_raw;return a?j(a):c}function l7(c){return t3(c,"__v_skip",!0),c}const d4=c=>i2(c)?e0(c):c,r0=c=>i2(c)?o7(c):c;function f7(c){M1&&O2&&(c=j(c),c7(c.dep||(c.dep=J6())))}function m7(c,a){c=j(c);const e=c.dep;e&&g6(e)}function S2(c){return!!(c&&c.__v_isRef===!0)}function d2(c){return sl(c,!1)}function sl(c,a){return S2(c)?c:new il(c,a)}class il{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:j(a),this._value=e?a:d4(a)}get value(){return f7(this),this._value}set value(a){const e=this.__v_isShallow||l3(a)||Z1(a);a=e?a:j(a),E1(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:d4(a),m7(this))}}function ol(c){return S2(c)?c.value:c}const tl={get:(c,a,e)=>ol(Reflect.get(c,a,e)),set:(c,a,e,n)=>{const r=c[a];return S2(r)&&!S2(e)?(r.value=e,!0):Reflect.set(c,a,e,n)}};function h7(c){return K1(c)?c:new Proxy(c,tl)}class ll{constructor(a,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Z6(a,()=>{this._dirty||(this._dirty=!0,m7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const a=j(this);return f7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function fl(c,a,e=!1){let n,r;const s=_(c);return s?(n=c,r=X2):(n=c.get,r=c.set),new ll(n,r,s||!r,e)}function C1(c,a,e,n){let r;try{r=n?c(...n):c()}catch(s){b3(s,a,e)}return r}function I2(c,a,e,n){if(_(c)){const s=C1(c,a,e,n);return s&&G5(s)&&s.catch(i=>{b3(i,a,e)}),s}const r=[];for(let s=0;s<c.length;s++)r.push(I2(c[s],a,e,n));return r}function b3(c,a,e,n=!0){const r=a?a.vnode:null;if(a){let s=a.parent;const i=a.proxy,o=e;for(;s;){const l=s.ec;if(l){for(let m=0;m<l.length;m++)if(l[m](c,i,o)===!1)return}s=s.parent}const t=a.appContext.config.errorHandler;if(t){C1(t,null,10,[c,i,o]);return}}ml(c,e,r,n)}function ml(c,a,e,n=!0){console.error(c)}let p4=!1,L6=!1;const M2=[];let Y2=0;const X1=[];let r1=null,A1=0;const u7=Promise.resolve();let s0=null;function v7(c){const a=s0||u7;return c?a.then(this?c.bind(this):c):a}function hl(c){let a=Y2+1,e=M2.length;for(;a<e;){const n=a+e>>>1,r=M2[n],s=V4(r);s<c||s===c&&r.pre?a=n+1:e=n}return a}function i0(c){(!M2.length||!M2.includes(c,p4&&c.allowRecurse?Y2+1:Y2))&&(c.id==null?M2.push(c):M2.splice(hl(c.id),0,c),H7())}function H7(){!p4&&!L6&&(L6=!0,s0=u7.then(d7))}function ul(c){const a=M2.indexOf(c);a>Y2&&M2.splice(a,1)}function vl(c){R(c)?X1.push(...c):(!r1||!r1.includes(c,c.allowRecurse?A1+1:A1))&&X1.push(c),H7()}function D8(c,a,e=p4?Y2+1:0){for(;e<M2.length;e++){const n=M2[e];if(n&&n.pre){if(c&&n.id!==c.uid)continue;M2.splice(e,1),e--,n()}}}function z7(c){if(X1.length){const a=[...new Set(X1)];if(X1.length=0,r1){r1.push(...a);return}for(r1=a,r1.sort((e,n)=>V4(e)-V4(n)),A1=0;A1<r1.length;A1++)r1[A1]();r1=null,A1=0}}const V4=c=>c.id==null?1/0:c.id,Hl=(c,a)=>{const e=V4(c)-V4(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function d7(c){L6=!1,p4=!0,M2.sort(Hl);try{for(Y2=0;Y2<M2.length;Y2++){const a=M2[Y2];a&&a.active!==!1&&C1(a,null,14)}}finally{Y2=0,M2.length=0,z7(),p4=!1,s0=null,(M2.length||X1.length)&&d7()}}function zl(c,a,...e){if(c.isUnmounted)return;const n=c.vnode.props||n2;let r=e;const s=a.startsWith("update:"),i=s&&a.slice(7);if(i&&i in n){const m=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:v}=n[m]||n2;v&&(r=e.map(M=>h2(M)?M.trim():M)),u&&(r=e.map(xt))}let o,t=n[o=r6(a)]||n[o=r6(J2(a))];!t&&s&&(t=n[o=r6(n4(a))]),t&&I2(t,c,6,r);const l=n[o+"Once"];if(l){if(!c.emitted)c.emitted={};else if(c.emitted[o])return;c.emitted[o]=!0,I2(l,c,6,r)}}function p7(c,a,e=!1){const n=a.emitsCache,r=n.get(c);if(r!==void 0)return r;const s=c.emits;let i={},o=!1;if(!_(c)){const t=l=>{const m=p7(l,a,!0);m&&(o=!0,u2(i,m))};!e&&a.mixins.length&&a.mixins.forEach(t),c.extends&&t(c.extends),c.mixins&&c.mixins.forEach(t)}return!s&&!o?(i2(c)&&n.set(c,null),null):(R(s)?s.forEach(t=>i[t]=null):u2(i,s),i2(c)&&n.set(c,i),i)}function y3(c,a){return!c||!p3(a)?!1:(a=a.slice(2).replace(/Once$/,""),G(c,a[0].toLowerCase()+a.slice(1))||G(c,n4(a))||G(c,a))}let P2=null,w3=null;function f3(c){const a=P2;return P2=c,w3=c&&c.type.__scopeId||null,a}function o0(c){w3=c}function t0(){w3=null}function b6(c,a=P2,e){if(!a||c._n)return c;const n=(...r)=>{n._d&&Q8(-1);const s=f3(a);let i;try{i=c(...r)}finally{f3(s),n._d&&Q8(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function o6(c){const{type:a,vnode:e,proxy:n,withProxy:r,props:s,propsOptions:[i],slots:o,attrs:t,emit:l,render:m,renderCache:u,data:v,setupState:M,ctx:k,inheritAttrs:w}=c;let E,L;const p=f3(c);try{if(e.shapeFlag&4){const C=r||n,I=C;E=j2(m.call(I,C,u,s,M,v,k)),L=t}else{const C=a;E=j2(C.length>1?C(s,{attrs:t,slots:o,emit:l}):C(s,null)),L=a.props?t:dl(t)}}catch(C){v4.length=0,b3(C,c,1),E=l2(U2)}let T=E;if(L&&w!==!1){const C=Object.keys(L),{shapeFlag:I}=T;C.length&&I&7&&(i&&C.some(K6)&&(L=pl(L,i)),T=L1(T,L))}return e.dirs&&(T=L1(T),T.dirs=T.dirs?T.dirs.concat(e.dirs):e.dirs),e.transition&&(T.transition=e.transition),E=T,f3(p),E}const dl=c=>{let a;for(const e in c)(e==="class"||e==="style"||p3(e))&&((a||(a={}))[e]=c[e]);return a},pl=(c,a)=>{const e={};for(const n in c)(!K6(n)||!(n.slice(9)in a))&&(e[n]=c[n]);return e};function Vl(c,a,e){const{props:n,children:r,component:s}=c,{props:i,children:o,patchFlag:t}=a,l=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&t>=0){if(t&1024)return!0;if(t&16)return n?E8(n,i,l):!!i;if(t&8){const m=a.dynamicProps;for(let u=0;u<m.length;u++){const v=m[u];if(i[v]!==n[v]&&!y3(l,v))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===i?!1:n?i?E8(n,i,l):!0:!!i;return!1}function E8(c,a,e){const n=Object.keys(a);if(n.length!==Object.keys(c).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(a[s]!==c[s]&&!y3(e,s))return!0}return!1}function Ml({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const V7="components";function v1(c,a){return gl(V7,c,!0,a)||c}const Cl=Symbol.for("v-ndc");function gl(c,a,e=!0,n=!1){const r=P2||p2;if(r){const s=r.type;if(c===V7){const o=pf(s,!1);if(o&&(o===a||o===J2(a)||o===C3(J2(a))))return s}const i=O8(r[c]||s[c],a)||O8(r.appContext[c],a);return!i&&n?s:i}}function O8(c,a){return c&&(c[a]||c[J2(a)]||c[C3(J2(a))])}const Ll=c=>c.__isSuspense;function bl(c,a){a&&a.pendingBranch?R(c)?a.effects.push(...c):a.effects.push(c):vl(c)}function M7(c,a){return x3(c,null,a)}function yl(c,a){return x3(c,null,{flush:"post"})}const $4={};function Q1(c,a,e){return x3(c,a,e)}function x3(c,a,{immediate:e,deep:n,flush:r,onTrack:s,onTrigger:i}=n2){var o;const t=Rt()===((o=p2)==null?void 0:o.scope)?p2:null;let l,m=!1,u=!1;if(S2(c)?(l=()=>c.value,m=l3(c)):K1(c)?(l=()=>c,n=!0):R(c)?(u=!0,m=c.some(C=>K1(C)||l3(C)),l=()=>c.map(C=>{if(S2(C))return C.value;if(K1(C))return F1(C);if(_(C))return C1(C,t,2)})):_(c)?a?l=()=>C1(c,t,2):l=()=>{if(!(t&&t.isUnmounted))return v&&v(),I2(c,t,3,[M])}:l=X2,a&&n){const C=l;l=()=>F1(C())}let v,M=C=>{v=p.onStop=()=>{C1(C,t,4),v=p.onStop=void 0}},k;if(C4)if(M=X2,a?e&&I2(a,t,3,[l(),u?[]:void 0,M]):l(),r==="sync"){const C=Cf();k=C.__watcherHandles||(C.__watcherHandles=[])}else return X2;let w=u?new Array(c.length).fill($4):$4;const E=()=>{if(p.active)if(a){const C=p.run();(n||m||(u?C.some((I,c2)=>E1(I,w[c2])):E1(C,w)))&&(v&&v(),I2(a,t,3,[C,w===$4?void 0:u&&w[0]===$4?[]:w,M]),w=C)}else p.run()};E.allowRecurse=!!a;let L;r==="sync"?L=E:r==="post"?L=()=>w2(E,t&&t.suspense):(E.pre=!0,t&&(E.id=t.uid),L=()=>i0(E));const p=new Z6(l,L);a?e?E():w=p.run():r==="post"?w2(p.run.bind(p),t&&t.suspense):p.run();const T=()=>{p.stop(),t&&t.scope&&X6(t.scope.effects,p)};return k&&k.push(T),T}function wl(c,a,e){const n=this.proxy,r=h2(c)?c.includes(".")?C7(n,c):()=>n[c]:c.bind(n,n);let s;_(a)?s=a:(s=a.handler,e=a);const i=p2;c4(this);const o=x3(r,s.bind(n),e);return i?c4(i):D1(),o}function C7(c,a){const e=a.split(".");return()=>{let n=c;for(let r=0;r<e.length&&n;r++)n=n[e[r]];return n}}function F1(c,a){if(!i2(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),S2(c))F1(c.value,a);else if(R(c))for(let e=0;e<c.length;e++)F1(c[e],a);else if(q5(c)||Y1(c))c.forEach(e=>{F1(e,a)});else if(Y5(c))for(const e in c)F1(c[e],a);return c}function _8(c,a){const e=P2;if(e===null)return c;const n=F3(e)||e.proxy,r=c.dirs||(c.dirs=[]);for(let s=0;s<a.length;s++){let[i,o,t,l=n2]=a[s];i&&(_(i)&&(i={mounted:i,updated:i}),i.deep&&F1(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:t,modifiers:l}))}return c}function x1(c,a,e,n){const r=c.dirs,s=a&&a.dirs;for(let i=0;i<r.length;i++){const o=r[i];s&&(o.oldValue=s[i].value);let t=o.dir[n];t&&(r4(),I2(t,e,8,[c.el,o,c,a]),s4())}}const p1=Symbol("_leaveCb"),U4=Symbol("_enterCb");function xl(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return A3(()=>{c.isMounted=!0}),w7(()=>{c.isUnmounting=!0}),c}const B2=[Function,Array],g7={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:B2,onEnter:B2,onAfterEnter:B2,onEnterCancelled:B2,onBeforeLeave:B2,onLeave:B2,onAfterLeave:B2,onLeaveCancelled:B2,onBeforeAppear:B2,onAppear:B2,onAfterAppear:B2,onAppearCancelled:B2},Nl={name:"BaseTransition",props:g7,setup(c,{slots:a}){const e=D7(),n=xl();let r;return()=>{const s=a.default&&b7(a.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const w of s)if(w.type!==U2){i=w;break}}const o=j(c),{mode:t}=o;if(n.isLeaving)return t6(i);const l=W8(i);if(!l)return t6(i);const m=y6(l,o,n,e);w6(l,m);const u=e.subTree,v=u&&W8(u);let M=!1;const{getTransitionKey:k}=l.type;if(k){const w=k();r===void 0?r=w:w!==r&&(r=w,M=!0)}if(v&&v.type!==U2&&(!T1(l,v)||M)){const w=y6(v,o,n,e);if(w6(v,w),t==="out-in")return n.isLeaving=!0,w.afterLeave=()=>{n.isLeaving=!1,e.update.active!==!1&&e.update()},t6(i);t==="in-out"&&l.type!==U2&&(w.delayLeave=(E,L,p)=>{const T=L7(n,v);T[String(v.key)]=v,E[p1]=()=>{L(),E[p1]=void 0,delete m.delayedLeave},m.delayedLeave=p})}return i}}},kl=Nl;function L7(c,a){const{leavingVNodes:e}=c;let n=e.get(a.type);return n||(n=Object.create(null),e.set(a.type,n)),n}function y6(c,a,e,n){const{appear:r,mode:s,persisted:i=!1,onBeforeEnter:o,onEnter:t,onAfterEnter:l,onEnterCancelled:m,onBeforeLeave:u,onLeave:v,onAfterLeave:M,onLeaveCancelled:k,onBeforeAppear:w,onAppear:E,onAfterAppear:L,onAppearCancelled:p}=a,T=String(c.key),C=L7(e,c),I=(D,q)=>{D&&I2(D,n,9,q)},c2=(D,q)=>{const K=q[1];I(D,q),R(D)?D.every(H2=>H2.length<=1)&&K():D.length<=1&&K()},a2={mode:s,persisted:i,beforeEnter(D){let q=o;if(!e.isMounted)if(r)q=w||o;else return;D[p1]&&D[p1](!0);const K=C[T];K&&T1(c,K)&&K.el[p1]&&K.el[p1](),I(q,[D])},enter(D){let q=t,K=l,H2=m;if(!e.isMounted)if(r)q=E||t,K=L||l,H2=p||m;else return;let P=!1;const J=D[U4]=z2=>{P||(P=!0,z2?I(H2,[D]):I(K,[D]),a2.delayedLeave&&a2.delayedLeave(),D[U4]=void 0)};q?c2(q,[D,J]):J()},leave(D,q){const K=String(c.key);if(D[U4]&&D[U4](!0),e.isUnmounting)return q();I(u,[D]);let H2=!1;const P=D[p1]=J=>{H2||(H2=!0,q(),J?I(k,[D]):I(M,[D]),D[p1]=void 0,C[K]===c&&delete C[K])};C[K]=c,v?c2(v,[D,P]):P()},clone(D){return y6(D,a,e,n)}};return a2}function t6(c){if(N3(c))return c=L1(c),c.children=null,c}function W8(c){return N3(c)?c.children?c.children[0]:void 0:c}function w6(c,a){c.shapeFlag&6&&c.component?w6(c.component.subTree,a):c.shapeFlag&128?(c.ssContent.transition=a.clone(c.ssContent),c.ssFallback.transition=a.clone(c.ssFallback)):c.transition=a}function b7(c,a=!1,e){let n=[],r=0;for(let s=0;s<c.length;s++){let i=c[s];const o=e==null?i.key:String(e)+String(i.key!=null?i.key:s);i.type===x2?(i.patchFlag&128&&r++,n=n.concat(b7(i.children,a,o))):(a||i.type!==U2)&&n.push(o!=null?L1(i,{key:o}):i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}/*! #__NO_SIDE_EFFECTS__ */function Z2(c,a){return _(c)?u2({name:c.name},a,{setup:c}):c}const e3=c=>!!c.type.__asyncLoader,N3=c=>c.type.__isKeepAlive;function Sl(c,a){y7(c,"a",a)}function Al(c,a){y7(c,"da",a)}function y7(c,a,e=p2){const n=c.__wdc||(c.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(k3(a,n,e),e){let r=e.parent;for(;r&&r.parent;)N3(r.parent.vnode)&&Tl(n,a,e,r),r=r.parent}}function Tl(c,a,e,n){const r=k3(a,c,n,!0);l0(()=>{X6(n[a],r)},e)}function k3(c,a,e=p2,n=!1){if(e){const r=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...i)=>{if(e.isUnmounted)return;r4(),c4(e);const o=I2(a,e,c,i);return D1(),s4(),o});return n?r.unshift(s):r.push(s),s}}const f1=c=>(a,e=p2)=>(!C4||c==="sp")&&k3(c,(...n)=>a(...n),e),S3=f1("bm"),A3=f1("m"),Pl=f1("bu"),Fl=f1("u"),w7=f1("bum"),l0=f1("um"),Bl=f1("sp"),Il=f1("rtg"),Rl=f1("rtc");function Dl(c,a=p2){k3("ec",c,a)}function f0(c,a,e,n){let r;const s=e&&e[n];if(R(c)||h2(c)){r=new Array(c.length);for(let i=0,o=c.length;i<o;i++)r[i]=a(c[i],i,void 0,s&&s[i])}else if(typeof c=="number"){r=new Array(c);for(let i=0;i<c;i++)r[i]=a(i+1,i,void 0,s&&s[i])}else if(i2(c))if(c[Symbol.iterator])r=Array.from(c,(i,o)=>a(i,o,void 0,s&&s[o]));else{const i=Object.keys(c);r=new Array(i.length);for(let o=0,t=i.length;o<t;o++){const l=i[o];r[o]=a(c[l],l,o,s&&s[o])}}else r=[];return e&&(e[n]=r),r}const x6=c=>c?E7(c)?F3(c)||c.proxy:x6(c.parent):null,u4=u2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>x6(c.parent),$root:c=>x6(c.root),$emit:c=>c.emit,$options:c=>m0(c),$forceUpdate:c=>c.f||(c.f=()=>i0(c.update)),$nextTick:c=>c.n||(c.n=v7.bind(c.proxy)),$watch:c=>wl.bind(c)}),l6=(c,a)=>c!==n2&&!c.__isScriptSetup&&G(c,a),El={get({_:c},a){const{ctx:e,setupState:n,data:r,props:s,accessCache:i,type:o,appContext:t}=c;let l;if(a[0]!=="$"){const M=i[a];if(M!==void 0)switch(M){case 1:return n[a];case 2:return r[a];case 4:return e[a];case 3:return s[a]}else{if(l6(n,a))return i[a]=1,n[a];if(r!==n2&&G(r,a))return i[a]=2,r[a];if((l=c.propsOptions[0])&&G(l,a))return i[a]=3,s[a];if(e!==n2&&G(e,a))return i[a]=4,e[a];N6&&(i[a]=0)}}const m=u4[a];let u,v;if(m)return a==="$attrs"&&k2(c,"get",a),m(c);if((u=o.__cssModules)&&(u=u[a]))return u;if(e!==n2&&G(e,a))return i[a]=4,e[a];if(v=t.config.globalProperties,G(v,a))return v[a]},set({_:c},a,e){const{data:n,setupState:r,ctx:s}=c;return l6(r,a)?(r[a]=e,!0):n!==n2&&G(n,a)?(n[a]=e,!0):G(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:n,appContext:r,propsOptions:s}},i){let o;return!!e[i]||c!==n2&&G(c,i)||l6(a,i)||(o=s[0])&&G(o,i)||G(n,i)||G(u4,i)||G(r.config.globalProperties,i)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:G(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function $8(c){return R(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let N6=!0;function Ol(c){const a=m0(c),e=c.proxy,n=c.ctx;N6=!1,a.beforeCreate&&U8(a.beforeCreate,c,"bc");const{data:r,computed:s,methods:i,watch:o,provide:t,inject:l,created:m,beforeMount:u,mounted:v,beforeUpdate:M,updated:k,activated:w,deactivated:E,beforeDestroy:L,beforeUnmount:p,destroyed:T,unmounted:C,render:I,renderTracked:c2,renderTriggered:a2,errorCaptured:D,serverPrefetch:q,expose:K,inheritAttrs:H2,components:P,directives:J,filters:z2}=a;if(l&&_l(l,n,null),i)for(const o2 in i){const X=i[o2];_(X)&&(n[o2]=X.bind(e))}if(r){const o2=r.call(e,e);i2(o2)&&(c.data=e0(o2))}if(N6=!0,s)for(const o2 in s){const X=s[o2],c1=_(X)?X.bind(e,e):_(X.get)?X.get.bind(e,e):X2,a1=!_(X)&&_(X.set)?X.set.bind(e):X2,e1=Y({get:c1,set:a1});Object.defineProperty(n,o2,{enumerable:!0,configurable:!0,get:()=>e1.value,set:g2=>e1.value=g2})}if(o)for(const o2 in o)x7(o[o2],n,e,o2);if(t){const o2=_(t)?t.call(e):t;Reflect.ownKeys(o2).forEach(X=>{jl(X,o2[X])})}m&&U8(m,c,"c");function t2(o2,X){R(X)?X.forEach(c1=>o2(c1.bind(e))):X&&o2(X.bind(e))}if(t2(S3,u),t2(A3,v),t2(Pl,M),t2(Fl,k),t2(Sl,w),t2(Al,E),t2(Dl,D),t2(Rl,c2),t2(Il,a2),t2(w7,p),t2(l0,C),t2(Bl,q),R(K))if(K.length){const o2=c.exposed||(c.exposed={});K.forEach(X=>{Object.defineProperty(o2,X,{get:()=>e[X],set:c1=>e[X]=c1})})}else c.exposed||(c.exposed={});I&&c.render===X2&&(c.render=I),H2!=null&&(c.inheritAttrs=H2),P&&(c.components=P),J&&(c.directives=J)}function _l(c,a,e=X2){R(c)&&(c=k6(c));for(const n in c){const r=c[n];let s;i2(r)?"default"in r?s=n3(r.from||n,r.default,!0):s=n3(r.from||n):s=n3(r),S2(s)?Object.defineProperty(a,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):a[n]=s}}function U8(c,a,e){I2(R(c)?c.map(n=>n.bind(a.proxy)):c.bind(a.proxy),a,e)}function x7(c,a,e,n){const r=n.includes(".")?C7(e,n):()=>e[n];if(h2(c)){const s=a[c];_(s)&&Q1(r,s)}else if(_(c))Q1(r,c.bind(e));else if(i2(c))if(R(c))c.forEach(s=>x7(s,a,e,n));else{const s=_(c.handler)?c.handler.bind(e):a[c.handler];_(s)&&Q1(r,s,c)}}function m0(c){const a=c.type,{mixins:e,extends:n}=a,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=c.appContext,o=s.get(a);let t;return o?t=o:!r.length&&!e&&!n?t=a:(t={},r.length&&r.forEach(l=>m3(t,l,i,!0)),m3(t,a,i)),i2(a)&&s.set(a,t),t}function m3(c,a,e,n=!1){const{mixins:r,extends:s}=a;s&&m3(c,s,e,!0),r&&r.forEach(i=>m3(c,i,e,!0));for(const i in a)if(!(n&&i==="expose")){const o=Wl[i]||e&&e[i];c[i]=o?o(c[i],a[i]):a[i]}return c}const Wl={data:q8,props:G8,emits:G8,methods:m4,computed:m4,beforeCreate:L2,created:L2,beforeMount:L2,mounted:L2,beforeUpdate:L2,updated:L2,beforeDestroy:L2,beforeUnmount:L2,destroyed:L2,unmounted:L2,activated:L2,deactivated:L2,errorCaptured:L2,serverPrefetch:L2,components:m4,directives:m4,watch:Ul,provide:q8,inject:$l};function q8(c,a){return a?c?function(){return u2(_(c)?c.call(this,this):c,_(a)?a.call(this,this):a)}:a:c}function $l(c,a){return m4(k6(c),k6(a))}function k6(c){if(R(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function L2(c,a){return c?[...new Set([].concat(c,a))]:a}function m4(c,a){return c?u2(Object.create(null),c,a):a}function G8(c,a){return c?R(c)&&R(a)?[...new Set([...c,...a])]:u2(Object.create(null),$8(c),$8(a??{})):a}function Ul(c,a){if(!c)return a;if(!a)return c;const e=u2(Object.create(null),c);for(const n in a)e[n]=L2(c[n],a[n]);return e}function N7(){return{app:null,config:{isNativeTag:gt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ql=0;function Gl(c,a){return function(n,r=null){_(n)||(n=u2({},n)),r!=null&&!i2(r)&&(r=null);const s=N7(),i=new WeakSet;let o=!1;const t=s.app={_uid:ql++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:gf,get config(){return s.config},set config(l){},use(l,...m){return i.has(l)||(l&&_(l.install)?(i.add(l),l.install(t,...m)):_(l)&&(i.add(l),l(t,...m))),t},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),t},component(l,m){return m?(s.components[l]=m,t):s.components[l]},directive(l,m){return m?(s.directives[l]=m,t):s.directives[l]},mount(l,m,u){if(!o){const v=l2(n,r);return v.appContext=s,m&&a?a(v,l):c(v,l,u),o=!0,t._container=l,l.__vue_app__=t,F3(v.component)||v.component.proxy}},unmount(){o&&(c(null,t._container),delete t._container.__vue_app__)},provide(l,m){return s.provides[l]=m,t},runWithContext(l){h3=t;try{return l()}finally{h3=null}}};return t}}let h3=null;function jl(c,a){if(p2){let e=p2.provides;const n=p2.parent&&p2.parent.provides;n===e&&(e=p2.provides=Object.create(n)),e[c]=a}}function n3(c,a,e=!1){const n=p2||P2;if(n||h3){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:h3._context.provides;if(r&&c in r)return r[c];if(arguments.length>1)return e&&_(a)?a.call(n&&n.proxy):a}}function Yl(c,a,e,n=!1){const r={},s={};t3(s,P3,1),c.propsDefaults=Object.create(null),k7(c,a,r,s);for(const i in c.propsOptions[0])i in r||(r[i]=void 0);e?c.props=n?r:rl(r):c.type.props?c.props=r:c.props=s,c.attrs=s}function Kl(c,a,e,n){const{props:r,attrs:s,vnode:{patchFlag:i}}=c,o=j(r),[t]=c.propsOptions;let l=!1;if((n||i>0)&&!(i&16)){if(i&8){const m=c.vnode.dynamicProps;for(let u=0;u<m.length;u++){let v=m[u];if(y3(c.emitsOptions,v))continue;const M=a[v];if(t)if(G(s,v))M!==s[v]&&(s[v]=M,l=!0);else{const k=J2(v);r[k]=S6(t,o,k,M,c,!1)}else M!==s[v]&&(s[v]=M,l=!0)}}}else{k7(c,a,r,s)&&(l=!0);let m;for(const u in o)(!a||!G(a,u)&&((m=n4(u))===u||!G(a,m)))&&(t?e&&(e[u]!==void 0||e[m]!==void 0)&&(r[u]=S6(t,o,u,void 0,c,!0)):delete r[u]);if(s!==o)for(const u in s)(!a||!G(a,u))&&(delete s[u],l=!0)}l&&i1(c,"set","$attrs")}function k7(c,a,e,n){const[r,s]=c.propsOptions;let i=!1,o;if(a)for(let t in a){if(a3(t))continue;const l=a[t];let m;r&&G(r,m=J2(t))?!s||!s.includes(m)?e[m]=l:(o||(o={}))[m]=l:y3(c.emitsOptions,t)||(!(t in n)||l!==n[t])&&(n[t]=l,i=!0)}if(s){const t=j(e),l=o||n2;for(let m=0;m<s.length;m++){const u=s[m];e[u]=S6(r,t,u,l[u],c,!G(l,u))}}return i}function S6(c,a,e,n,r,s){const i=c[e];if(i!=null){const o=G(i,"default");if(o&&n===void 0){const t=i.default;if(i.type!==Function&&!i.skipFactory&&_(t)){const{propsDefaults:l}=r;e in l?n=l[e]:(c4(r),n=l[e]=t.call(null,a),D1())}else n=t}i[0]&&(s&&!o?n=!1:i[1]&&(n===""||n===n4(e))&&(n=!0))}return n}function S7(c,a,e=!1){const n=a.propsCache,r=n.get(c);if(r)return r;const s=c.props,i={},o=[];let t=!1;if(!_(c)){const m=u=>{t=!0;const[v,M]=S7(u,a,!0);u2(i,v),M&&o.push(...M)};!e&&a.mixins.length&&a.mixins.forEach(m),c.extends&&m(c.extends),c.mixins&&c.mixins.forEach(m)}if(!s&&!t)return i2(c)&&n.set(c,j1),j1;if(R(s))for(let m=0;m<s.length;m++){const u=J2(s[m]);j8(u)&&(i[u]=n2)}else if(s)for(const m in s){const u=J2(m);if(j8(u)){const v=s[m],M=i[u]=R(v)||_(v)?{type:v}:u2({},v);if(M){const k=X8(Boolean,M.type),w=X8(String,M.type);M[0]=k>-1,M[1]=w<0||k<w,(k>-1||G(M,"default"))&&o.push(u)}}}const l=[i,o];return i2(c)&&n.set(c,l),l}function j8(c){return c[0]!=="$"}function Y8(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function K8(c,a){return Y8(c)===Y8(a)}function X8(c,a){return R(a)?a.findIndex(e=>K8(e,c)):_(a)&&K8(a,c)?0:-1}const A7=c=>c[0]==="_"||c==="$stable",h0=c=>R(c)?c.map(j2):[j2(c)],Xl=(c,a,e)=>{if(a._n)return a;const n=b6((...r)=>h0(a(...r)),e);return n._c=!1,n},T7=(c,a,e)=>{const n=c._ctx;for(const r in c){if(A7(r))continue;const s=c[r];if(_(s))a[r]=Xl(r,s,n);else if(s!=null){const i=h0(s);a[r]=()=>i}}},P7=(c,a)=>{const e=h0(a);c.slots.default=()=>e},Ql=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=j(a),t3(a,"_",e)):T7(a,c.slots={})}else c.slots={},a&&P7(c,a);t3(c.slots,P3,1)},Jl=(c,a,e)=>{const{vnode:n,slots:r}=c;let s=!0,i=n2;if(n.shapeFlag&32){const o=a._;o?e&&o===1?s=!1:(u2(r,a),!e&&o===1&&delete r._):(s=!a.$stable,T7(a,r)),i=a}else a&&(P7(c,a),i={default:1});if(s)for(const o in r)!A7(o)&&i[o]==null&&delete r[o]};function A6(c,a,e,n,r=!1){if(R(c)){c.forEach((v,M)=>A6(v,a&&(R(a)?a[M]:a),e,n,r));return}if(e3(n)&&!r)return;const s=n.shapeFlag&4?F3(n.component)||n.component.proxy:n.el,i=r?null:s,{i:o,r:t}=c,l=a&&a.r,m=o.refs===n2?o.refs={}:o.refs,u=o.setupState;if(l!=null&&l!==t&&(h2(l)?(m[l]=null,G(u,l)&&(u[l]=null)):S2(l)&&(l.value=null)),_(t))C1(t,o,12,[i,m]);else{const v=h2(t),M=S2(t);if(v||M){const k=()=>{if(c.f){const w=v?G(u,t)?u[t]:m[t]:t.value;r?R(w)&&X6(w,s):R(w)?w.includes(s)||w.push(s):v?(m[t]=[s],G(u,t)&&(u[t]=m[t])):(t.value=[s],c.k&&(m[c.k]=t.value))}else v?(m[t]=i,G(u,t)&&(u[t]=i)):M&&(t.value=i,c.k&&(m[c.k]=i))};i?(k.id=-1,w2(k,e)):k()}}}const w2=bl;function Zl(c){return cf(c)}function cf(c,a){const e=p6();e.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:i,createText:o,createComment:t,setText:l,setElementText:m,parentNode:u,nextSibling:v,setScopeId:M=X2,insertStaticContent:k}=c,w=(f,h,H,z=null,d=null,b=null,x=!1,g=null,y=!!h.dynamicChildren)=>{if(f===h)return;f&&!T1(f,h)&&(z=W1(f),g2(f,d,b,!0),f=null),h.patchFlag===-2&&(y=!1,h.dynamicChildren=null);const{type:V,ref:F,shapeFlag:S}=h;switch(V){case T3:E(f,h,H,z);break;case U2:L(f,h,H,z);break;case r3:f==null&&p(h,H,z,x);break;case x2:P(f,h,H,z,d,b,x,g,y);break;default:S&1?I(f,h,H,z,d,b,x,g,y):S&6?J(f,h,H,z,d,b,x,g,y):(S&64||S&128)&&V.process(f,h,H,z,d,b,x,g,y,W)}F!=null&&d&&A6(F,f&&f.ref,b,h||f,!h)},E=(f,h,H,z)=>{if(f==null)n(h.el=o(h.children),H,z);else{const d=h.el=f.el;h.children!==f.children&&l(d,h.children)}},L=(f,h,H,z)=>{f==null?n(h.el=t(h.children||""),H,z):h.el=f.el},p=(f,h,H,z)=>{[f.el,f.anchor]=k(f.children,h,H,z,f.el,f.anchor)},T=({el:f,anchor:h},H,z)=>{let d;for(;f&&f!==h;)d=v(f),n(f,H,z),f=d;n(h,H,z)},C=({el:f,anchor:h})=>{let H;for(;f&&f!==h;)H=v(f),r(f),f=H;r(h)},I=(f,h,H,z,d,b,x,g,y)=>{x=x||h.type==="svg",f==null?c2(h,H,z,d,b,x,g,y):q(f,h,d,b,x,g,y)},c2=(f,h,H,z,d,b,x,g)=>{let y,V;const{type:F,props:S,shapeFlag:B,transition:O,dirs:$}=f;if(y=f.el=i(f.type,b,S&&S.is,S),B&8?m(y,f.children):B&16&&D(f.children,y,null,z,d,b&&F!=="foreignObject",x,g),$&&x1(f,null,z,"created"),a2(y,f,f.scopeId,x,z),S){for(const Q in S)Q!=="value"&&!a3(Q)&&s(y,Q,null,S[Q],b,f.children,z,d,b2);"value"in S&&s(y,"value",null,S.value),(V=S.onVnodeBeforeMount)&&G2(V,z,f)}$&&x1(f,null,z,"beforeMount");const Z=af(d,O);Z&&O.beforeEnter(y),n(y,h,H),((V=S&&S.onVnodeMounted)||Z||$)&&w2(()=>{V&&G2(V,z,f),Z&&O.enter(y),$&&x1(f,null,z,"mounted")},d)},a2=(f,h,H,z,d)=>{if(H&&M(f,H),z)for(let b=0;b<z.length;b++)M(f,z[b]);if(d){let b=d.subTree;if(h===b){const x=d.vnode;a2(f,x,x.scopeId,x.slotScopeIds,d.parent)}}},D=(f,h,H,z,d,b,x,g,y=0)=>{for(let V=y;V<f.length;V++){const F=f[V]=g?V1(f[V]):j2(f[V]);w(null,F,h,H,z,d,b,x,g)}},q=(f,h,H,z,d,b,x)=>{const g=h.el=f.el;let{patchFlag:y,dynamicChildren:V,dirs:F}=h;y|=f.patchFlag&16;const S=f.props||n2,B=h.props||n2;let O;H&&N1(H,!1),(O=B.onVnodeBeforeUpdate)&&G2(O,H,h,f),F&&x1(h,f,H,"beforeUpdate"),H&&N1(H,!0);const $=d&&h.type!=="foreignObject";if(V?K(f.dynamicChildren,V,g,H,z,$,b):x||X(f,h,g,null,H,z,$,b,!1),y>0){if(y&16)H2(g,h,S,B,H,z,d);else if(y&2&&S.class!==B.class&&s(g,"class",null,B.class,d),y&4&&s(g,"style",S.style,B.style,d),y&8){const Z=h.dynamicProps;for(let Q=0;Q<Z.length;Q++){const m2=Z[Q],D2=S[m2],$1=B[m2];($1!==D2||m2==="value")&&s(g,m2,D2,$1,d,f.children,H,z,b2)}}y&1&&f.children!==h.children&&m(g,h.children)}else!x&&V==null&&H2(g,h,S,B,H,z,d);((O=B.onVnodeUpdated)||F)&&w2(()=>{O&&G2(O,H,h,f),F&&x1(h,f,H,"updated")},z)},K=(f,h,H,z,d,b,x)=>{for(let g=0;g<h.length;g++){const y=f[g],V=h[g],F=y.el&&(y.type===x2||!T1(y,V)||y.shapeFlag&70)?u(y.el):H;w(y,V,F,null,z,d,b,x,!0)}},H2=(f,h,H,z,d,b,x)=>{if(H!==z){if(H!==n2)for(const g in H)!a3(g)&&!(g in z)&&s(f,g,H[g],null,x,h.children,d,b,b2);for(const g in z){if(a3(g))continue;const y=z[g],V=H[g];y!==V&&g!=="value"&&s(f,g,V,y,x,h.children,d,b,b2)}"value"in z&&s(f,"value",H.value,z.value)}},P=(f,h,H,z,d,b,x,g,y)=>{const V=h.el=f?f.el:o(""),F=h.anchor=f?f.anchor:o("");let{patchFlag:S,dynamicChildren:B,slotScopeIds:O}=h;O&&(g=g?g.concat(O):O),f==null?(n(V,H,z),n(F,H,z),D(h.children,H,F,d,b,x,g,y)):S>0&&S&64&&B&&f.dynamicChildren?(K(f.dynamicChildren,B,H,d,b,x,g),(h.key!=null||d&&h===d.subTree)&&F7(f,h,!0)):X(f,h,H,F,d,b,x,g,y)},J=(f,h,H,z,d,b,x,g,y)=>{h.slotScopeIds=g,f==null?h.shapeFlag&512?d.ctx.activate(h,H,z,x,y):z2(h,H,z,d,b,x,y):A2(f,h,y)},z2=(f,h,H,z,d,b,x)=>{const g=f.component=uf(f,z,d);if(N3(f)&&(g.ctx.renderer=W),vf(g),g.asyncDep){if(d&&d.registerDep(g,t2),!f.el){const y=g.subTree=l2(U2);L(null,y,h,H)}return}t2(g,f,h,H,d,b,x)},A2=(f,h,H)=>{const z=h.component=f.component;if(Vl(f,h,H))if(z.asyncDep&&!z.asyncResolved){o2(z,h,H);return}else z.next=h,ul(z.update),z.update();else h.el=f.el,z.vnode=h},t2=(f,h,H,z,d,b,x)=>{const g=()=>{if(f.isMounted){let{next:F,bu:S,u:B,parent:O,vnode:$}=f,Z=F,Q;N1(f,!1),F?(F.el=$.el,o2(f,F,x)):F=$,S&&s6(S),(Q=F.props&&F.props.onVnodeBeforeUpdate)&&G2(Q,O,F,$),N1(f,!0);const m2=o6(f),D2=f.subTree;f.subTree=m2,w(D2,m2,u(D2.el),W1(D2),f,d,b),F.el=m2.el,Z===null&&Ml(f,m2.el),B&&w2(B,d),(Q=F.props&&F.props.onVnodeUpdated)&&w2(()=>G2(Q,O,F,$),d)}else{let F;const{el:S,props:B}=h,{bm:O,m:$,parent:Z}=f,Q=e3(h);if(N1(f,!1),O&&s6(O),!Q&&(F=B&&B.onVnodeBeforeMount)&&G2(F,Z,h),N1(f,!0),S&&R2){const m2=()=>{f.subTree=o6(f),R2(S,f.subTree,f,d,null)};Q?h.type.__asyncLoader().then(()=>!f.isUnmounted&&m2()):m2()}else{const m2=f.subTree=o6(f);w(null,m2,H,z,f,d,b),h.el=m2.el}if($&&w2($,d),!Q&&(F=B&&B.onVnodeMounted)){const m2=h;w2(()=>G2(F,Z,m2),d)}(h.shapeFlag&256||Z&&e3(Z.vnode)&&Z.vnode.shapeFlag&256)&&f.a&&w2(f.a,d),f.isMounted=!0,h=H=z=null}},y=f.effect=new Z6(g,()=>i0(V),f.scope),V=f.update=()=>y.run();V.id=f.uid,N1(f,!0),V()},o2=(f,h,H)=>{h.component=f;const z=f.vnode.props;f.vnode=h,f.next=null,Kl(f,h.props,z,H),Jl(f,h.children,H),r4(),D8(f),s4()},X=(f,h,H,z,d,b,x,g,y=!1)=>{const V=f&&f.children,F=f?f.shapeFlag:0,S=h.children,{patchFlag:B,shapeFlag:O}=h;if(B>0){if(B&128){a1(V,S,H,z,d,b,x,g,y);return}else if(B&256){c1(V,S,H,z,d,b,x,g,y);return}}O&8?(F&16&&b2(V,d,b),S!==V&&m(H,S)):F&16?O&16?a1(V,S,H,z,d,b,x,g,y):b2(V,d,b,!0):(F&8&&m(H,""),O&16&&D(S,H,z,d,b,x,g,y))},c1=(f,h,H,z,d,b,x,g,y)=>{f=f||j1,h=h||j1;const V=f.length,F=h.length,S=Math.min(V,F);let B;for(B=0;B<S;B++){const O=h[B]=y?V1(h[B]):j2(h[B]);w(f[B],O,H,null,d,b,x,g,y)}V>F?b2(f,d,b,!0,!1,S):D(h,H,z,d,b,x,g,y,S)},a1=(f,h,H,z,d,b,x,g,y)=>{let V=0;const F=h.length;let S=f.length-1,B=F-1;for(;V<=S&&V<=B;){const O=f[V],$=h[V]=y?V1(h[V]):j2(h[V]);if(T1(O,$))w(O,$,H,null,d,b,x,g,y);else break;V++}for(;V<=S&&V<=B;){const O=f[S],$=h[B]=y?V1(h[B]):j2(h[B]);if(T1(O,$))w(O,$,H,null,d,b,x,g,y);else break;S--,B--}if(V>S){if(V<=B){const O=B+1,$=O<F?h[O].el:z;for(;V<=B;)w(null,h[V]=y?V1(h[V]):j2(h[V]),H,$,d,b,x,g,y),V++}}else if(V>B)for(;V<=S;)g2(f[V],d,b,!0),V++;else{const O=V,$=V,Z=new Map;for(V=$;V<=B;V++){const T2=h[V]=y?V1(h[V]):j2(h[V]);T2.key!=null&&Z.set(T2.key,V)}let Q,m2=0;const D2=B-$+1;let $1=!1,x8=0;const o4=new Array(D2);for(V=0;V<D2;V++)o4[V]=0;for(V=O;V<=S;V++){const T2=f[V];if(m2>=D2){g2(T2,d,b,!0);continue}let q2;if(T2.key!=null)q2=Z.get(T2.key);else for(Q=$;Q<=B;Q++)if(o4[Q-$]===0&&T1(T2,h[Q])){q2=Q;break}q2===void 0?g2(T2,d,b,!0):(o4[q2-$]=V+1,q2>=x8?x8=q2:$1=!0,w(T2,h[q2],H,null,d,b,x,g,y),m2++)}const N8=$1?ef(o4):j1;for(Q=N8.length-1,V=D2-1;V>=0;V--){const T2=$+V,q2=h[T2],k8=T2+1<F?h[T2+1].el:z;o4[V]===0?w(null,q2,H,k8,d,b,x,g,y):$1&&(Q<0||V!==N8[Q]?e1(q2,H,k8,2):Q--)}}},e1=(f,h,H,z,d=null)=>{const{el:b,type:x,transition:g,children:y,shapeFlag:V}=f;if(V&6){e1(f.component.subTree,h,H,z);return}if(V&128){f.suspense.move(h,H,z);return}if(V&64){x.move(f,h,H,W);return}if(x===x2){n(b,h,H);for(let S=0;S<y.length;S++)e1(y[S],h,H,z);n(f.anchor,h,H);return}if(x===r3){T(f,h,H);return}if(z!==2&&V&1&&g)if(z===0)g.beforeEnter(b),n(b,h,H),w2(()=>g.enter(b),d);else{const{leave:S,delayLeave:B,afterLeave:O}=g,$=()=>n(b,h,H),Z=()=>{S(b,()=>{$(),O&&O()})};B?B(b,$,Z):Z()}else n(b,h,H)},g2=(f,h,H,z=!1,d=!1)=>{const{type:b,props:x,ref:g,children:y,dynamicChildren:V,shapeFlag:F,patchFlag:S,dirs:B}=f;if(g!=null&&A6(g,null,H,f,!0),F&256){h.ctx.deactivate(f);return}const O=F&1&&B,$=!e3(f);let Z;if($&&(Z=x&&x.onVnodeBeforeUnmount)&&G2(Z,h,f),F&6)n6(f.component,H,z);else{if(F&128){f.suspense.unmount(H,z);return}O&&x1(f,null,h,"beforeUnmount"),F&64?f.type.remove(f,h,H,d,W,z):V&&(b!==x2||S>0&&S&64)?b2(V,h,H,!1,!0):(b===x2&&S&384||!d&&F&16)&&b2(y,h,H),z&&I4(f)}($&&(Z=x&&x.onVnodeUnmounted)||O)&&w2(()=>{Z&&G2(Z,h,f),O&&x1(f,null,h,"unmounted")},H)},I4=f=>{const{type:h,el:H,anchor:z,transition:d}=f;if(h===x2){e6(H,z);return}if(h===r3){C(f);return}const b=()=>{r(H),d&&!d.persisted&&d.afterLeave&&d.afterLeave()};if(f.shapeFlag&1&&d&&!d.persisted){const{leave:x,delayLeave:g}=d,y=()=>x(H,b);g?g(f.el,b,y):y()}else b()},e6=(f,h)=>{let H;for(;f!==h;)H=v(f),r(f),f=H;r(h)},n6=(f,h,H)=>{const{bum:z,scope:d,update:b,subTree:x,um:g}=f;z&&s6(z),d.stop(),b&&(b.active=!1,g2(x,f,h,H)),g&&w2(g,h),w2(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},b2=(f,h,H,z=!1,d=!1,b=0)=>{for(let x=b;x<f.length;x++)g2(f[x],h,H,z,d)},W1=f=>f.shapeFlag&6?W1(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),R4=(f,h,H)=>{f==null?h._vnode&&g2(h._vnode,null,null,!0):w(h._vnode||null,f,h,null,null,null,H),D8(),z7(),h._vnode=f},W={p:w,um:g2,m:e1,r:I4,mt:z2,mc:D,pc:X,pbc:K,n:W1,o:c};let e2,R2;return a&&([e2,R2]=a(W)),{render:R4,hydrate:e2,createApp:Gl(R4,e2)}}function N1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function af(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function F7(c,a,e=!1){const n=c.children,r=a.children;if(R(n)&&R(r))for(let s=0;s<n.length;s++){const i=n[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=V1(r[s]),o.el=i.el),e||F7(i,o)),o.type===T3&&(o.el=i.el)}}function ef(c){const a=c.slice(),e=[0];let n,r,s,i,o;const t=c.length;for(n=0;n<t;n++){const l=c[n];if(l!==0){if(r=e[e.length-1],c[r]<l){a[n]=r,e.push(n);continue}for(s=0,i=e.length-1;s<i;)o=s+i>>1,c[e[o]]<l?s=o+1:i=o;l<c[e[s]]&&(s>0&&(a[n]=e[s-1]),e[s]=n)}}for(s=e.length,i=e[s-1];s-- >0;)e[s]=i,i=a[i];return e}const nf=c=>c.__isTeleport,x2=Symbol.for("v-fgt"),T3=Symbol.for("v-txt"),U2=Symbol.for("v-cmt"),r3=Symbol.for("v-stc"),v4=[];let _2=null;function V2(c=!1){v4.push(_2=c?null:[])}function rf(){v4.pop(),_2=v4[v4.length-1]||null}let M4=1;function Q8(c){M4+=c}function B7(c){return c.dynamicChildren=M4>0?_2||j1:null,rf(),M4>0&&_2&&_2.push(c),c}function C2(c,a,e,n,r,s){return B7(U(c,a,e,n,r,s,!0))}function sf(c,a,e,n,r){return B7(l2(c,a,e,n,r,!0))}function T6(c){return c?c.__v_isVNode===!0:!1}function T1(c,a){return c.type===a.type&&c.key===a.key}const P3="__vInternal",I7=({key:c})=>c??null,s3=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?h2(c)||S2(c)||_(c)?{i:P2,r:c,k:a,f:!!e}:c:null);function U(c,a=null,e=null,n=0,r=null,s=c===x2?0:1,i=!1,o=!1){const t={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&I7(a),ref:a&&s3(a),scopeId:w3,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:P2};return o?(u0(t,e),s&128&&c.normalize(t)):e&&(t.shapeFlag|=h2(e)?8:16),M4>0&&!i&&_2&&(t.patchFlag>0||s&6)&&t.patchFlag!==32&&_2.push(t),t}const l2=of;function of(c,a=null,e=null,n=0,r=null,s=!1){if((!c||c===Cl)&&(c=U2),T6(c)){const o=L1(c,a,!0);return e&&u0(o,e),M4>0&&!s&&_2&&(o.shapeFlag&6?_2[_2.indexOf(c)]=o:_2.push(o)),o.patchFlag|=-2,o}if(Vf(c)&&(c=c.__vccOpts),a){a=tf(a);let{class:o,style:t}=a;o&&!h2(o)&&(a.class=Q2(o)),i2(t)&&(t7(t)&&!R(t)&&(t=u2({},t)),a.style=g3(t))}const i=h2(c)?1:Ll(c)?128:nf(c)?64:i2(c)?4:_(c)?2:0;return U(c,a,e,n,r,i,s,!0)}function tf(c){return c?t7(c)||P3 in c?u2({},c):c:null}function L1(c,a,e=!1){const{props:n,ref:r,patchFlag:s,children:i}=c,o=a?ff(n||{},a):n;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:o,key:o&&I7(o),ref:a&&a.ref?e&&r?R(r)?r.concat(s3(a)):[r,s3(a)]:s3(a):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==x2?s===-1?16:s|16:s,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&L1(c.ssContent),ssFallback:c.ssFallback&&L1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function R7(c=" ",a=0){return l2(T3,null,c,a)}function lf(c="",a=!1){return a?(V2(),sf(U2,null,c)):l2(U2,null,c)}function j2(c){return c==null||typeof c=="boolean"?l2(U2):R(c)?l2(x2,null,c.slice()):typeof c=="object"?V1(c):l2(T3,null,String(c))}function V1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:L1(c)}function u0(c,a){let e=0;const{shapeFlag:n}=c;if(a==null)a=null;else if(R(a))e=16;else if(typeof a=="object")if(n&65){const r=a.default;r&&(r._c&&(r._d=!1),u0(c,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(P3 in a)?a._ctx=P2:r===3&&P2&&(P2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else _(a)?(a={default:a,_ctx:P2},e=32):(a=String(a),n&64?(e=16,a=[R7(a)]):e=8);c.children=a,c.shapeFlag|=e}function ff(...c){const a={};for(let e=0;e<c.length;e++){const n=c[e];for(const r in n)if(r==="class")a.class!==n.class&&(a.class=Q2([a.class,n.class]));else if(r==="style")a.style=g3([a.style,n.style]);else if(p3(r)){const s=a[r],i=n[r];i&&s!==i&&!(R(s)&&s.includes(i))&&(a[r]=s?[].concat(s,i):i)}else r!==""&&(a[r]=n[r])}return a}function G2(c,a,e,n=null){I2(c,a,7,[e,n])}const mf=N7();let hf=0;function uf(c,a,e){const n=c.type,r=(a?a.appContext:c.appContext)||mf,s={uid:hf++,vnode:c,type:n,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bt(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:S7(n,r),emitsOptions:p7(n,r),emit:null,emitted:null,propsDefaults:n2,inheritAttrs:n.inheritAttrs,ctx:n2,data:n2,props:n2,attrs:n2,slots:n2,refs:n2,setupState:n2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=zl.bind(null,s),c.ce&&c.ce(s),s}let p2=null;const D7=()=>p2||P2;let v0,U1,J8="__VUE_INSTANCE_SETTERS__";(U1=p6()[J8])||(U1=p6()[J8]=[]),U1.push(c=>p2=c),v0=c=>{U1.length>1?U1.forEach(a=>a(c)):U1[0](c)};const c4=c=>{v0(c),c.scope.on()},D1=()=>{p2&&p2.scope.off(),v0(null)};function E7(c){return c.vnode.shapeFlag&4}let C4=!1;function vf(c,a=!1){C4=a;const{props:e,children:n}=c.vnode,r=E7(c);Yl(c,e,r,a),Ql(c,n);const s=r?Hf(c,a):void 0;return C4=!1,s}function Hf(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=l7(new Proxy(c.ctx,El));const{setup:n}=e;if(n){const r=c.setupContext=n.length>1?df(c):null;c4(c),r4();const s=C1(n,c,0,[c.props,r]);if(s4(),D1(),G5(s)){if(s.then(D1,D1),a)return s.then(i=>{Z8(c,i,a)}).catch(i=>{b3(i,c,0)});c.asyncDep=s}else Z8(c,s,a)}else O7(c,a)}function Z8(c,a,e){_(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:i2(a)&&(c.setupState=h7(a)),O7(c,e)}let c5;function O7(c,a,e){const n=c.type;if(!c.render){if(!a&&c5&&!n.render){const r=n.template||m0(c).template;if(r){const{isCustomElement:s,compilerOptions:i}=c.appContext.config,{delimiters:o,compilerOptions:t}=n,l=u2(u2({isCustomElement:s,delimiters:o},i),t);n.render=c5(r,l)}}c.render=n.render||X2}{c4(c),r4();try{Ol(c)}finally{s4(),D1()}}}function zf(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return k2(c,"get","$attrs"),a[e]}}))}function df(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return zf(c)},slots:c.slots,emit:c.emit,expose:a}}function F3(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(h7(l7(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in u4)return u4[e](c)},has(a,e){return e in a||e in u4}}))}function pf(c,a=!0){return _(c)?c.displayName||c.name:c.name||a&&c.__name}function Vf(c){return _(c)&&"__vccOpts"in c}const Y=(c,a)=>fl(c,a,C4);function _7(c,a,e){const n=arguments.length;return n===2?i2(a)&&!R(a)?T6(a)?l2(c,null,[a]):l2(c,a):l2(c,null,a):(n>3?e=Array.prototype.slice.call(arguments,2):n===3&&T6(e)&&(e=[e]),l2(c,a,e))}const Mf=Symbol.for("v-scx"),Cf=()=>n3(Mf),gf="3.3.13",Lf="http://www.w3.org/2000/svg",P1=typeof document<"u"?document:null,a5=P1&&P1.createElement("template"),bf={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,n)=>{const r=a?P1.createElementNS(Lf,c):P1.createElement(c,e?{is:e}:void 0);return c==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:c=>P1.createTextNode(c),createComment:c=>P1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>P1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,n,r,s){const i=e?e.previousSibling:a.lastChild;if(r&&(r===s||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{a5.innerHTML=n?`<svg>${c}</svg>`:c;const o=a5.content;if(n){const t=o.firstChild;for(;t.firstChild;)o.appendChild(t.firstChild);o.removeChild(t)}a.insertBefore(o,e)}return[i?i.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},H1="transition",t4="animation",g4=Symbol("_vtc"),u3=(c,{slots:a})=>_7(kl,yf(c),a);u3.displayName="Transition";const W7={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};u3.props=u2({},g7,W7);const k1=(c,a=[])=>{R(c)?c.forEach(e=>e(...a)):c&&c(...a)},e5=c=>c?R(c)?c.some(a=>a.length>1):c.length>1:!1;function yf(c){const a={};for(const P in c)P in W7||(a[P]=c[P]);if(c.css===!1)return a;const{name:e="v",type:n,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:i=`${e}-enter-active`,enterToClass:o=`${e}-enter-to`,appearFromClass:t=s,appearActiveClass:l=i,appearToClass:m=o,leaveFromClass:u=`${e}-leave-from`,leaveActiveClass:v=`${e}-leave-active`,leaveToClass:M=`${e}-leave-to`}=c,k=wf(r),w=k&&k[0],E=k&&k[1],{onBeforeEnter:L,onEnter:p,onEnterCancelled:T,onLeave:C,onLeaveCancelled:I,onBeforeAppear:c2=L,onAppear:a2=p,onAppearCancelled:D=T}=a,q=(P,J,z2)=>{S1(P,J?m:o),S1(P,J?l:i),z2&&z2()},K=(P,J)=>{P._isLeaving=!1,S1(P,u),S1(P,M),S1(P,v),J&&J()},H2=P=>(J,z2)=>{const A2=P?a2:p,t2=()=>q(J,P,z2);k1(A2,[J,t2]),n5(()=>{S1(J,P?t:s),z1(J,P?m:o),e5(A2)||r5(J,n,w,t2)})};return u2(a,{onBeforeEnter(P){k1(L,[P]),z1(P,s),z1(P,i)},onBeforeAppear(P){k1(c2,[P]),z1(P,t),z1(P,l)},onEnter:H2(!1),onAppear:H2(!0),onLeave(P,J){P._isLeaving=!0;const z2=()=>K(P,J);z1(P,u),kf(),z1(P,v),n5(()=>{P._isLeaving&&(S1(P,u),z1(P,M),e5(C)||r5(P,n,E,z2))}),k1(C,[P,z2])},onEnterCancelled(P){q(P,!1),k1(T,[P])},onAppearCancelled(P){q(P,!0),k1(D,[P])},onLeaveCancelled(P){K(P),k1(I,[P])}})}function wf(c){if(c==null)return null;if(i2(c))return[f6(c.enter),f6(c.leave)];{const a=f6(c);return[a,a]}}function f6(c){return Nt(c)}function z1(c,a){a.split(/\s+/).forEach(e=>e&&c.classList.add(e)),(c[g4]||(c[g4]=new Set)).add(a)}function S1(c,a){a.split(/\s+/).forEach(n=>n&&c.classList.remove(n));const e=c[g4];e&&(e.delete(a),e.size||(c[g4]=void 0))}function n5(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let xf=0;function r5(c,a,e,n){const r=c._endId=++xf,s=()=>{r===c._endId&&n()};if(e)return setTimeout(s,e);const{type:i,timeout:o,propCount:t}=Nf(c,a);if(!i)return n();const l=i+"end";let m=0;const u=()=>{c.removeEventListener(l,v),s()},v=M=>{M.target===c&&++m>=t&&u()};setTimeout(()=>{m<t&&u()},o+1),c.addEventListener(l,v)}function Nf(c,a){const e=window.getComputedStyle(c),n=k=>(e[k]||"").split(", "),r=n(`${H1}Delay`),s=n(`${H1}Duration`),i=s5(r,s),o=n(`${t4}Delay`),t=n(`${t4}Duration`),l=s5(o,t);let m=null,u=0,v=0;a===H1?i>0&&(m=H1,u=i,v=s.length):a===t4?l>0&&(m=t4,u=l,v=t.length):(u=Math.max(i,l),m=u>0?i>l?H1:t4:null,v=m?m===H1?s.length:t.length:0);const M=m===H1&&/\b(transform|all)(,|$)/.test(n(`${H1}Property`).toString());return{type:m,timeout:u,propCount:v,hasTransform:M}}function s5(c,a){for(;c.length<a.length;)c=c.concat(c);return Math.max(...a.map((e,n)=>i5(e)+i5(c[n])))}function i5(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function kf(){return document.body.offsetHeight}function Sf(c,a,e){const n=c[g4];n&&(a=(a?[a,...n]:[...n]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const H0=Symbol("_vod"),o5={beforeMount(c,{value:a},{transition:e}){c[H0]=c.style.display==="none"?"":c.style.display,e&&a?e.beforeEnter(c):l4(c,a)},mounted(c,{value:a},{transition:e}){e&&a&&e.enter(c)},updated(c,{value:a,oldValue:e},{transition:n}){!a!=!e&&(n?a?(n.beforeEnter(c),l4(c,!0),n.enter(c)):n.leave(c,()=>{l4(c,!1)}):l4(c,a))},beforeUnmount(c,{value:a}){l4(c,a)}};function l4(c,a){c.style.display=a?c[H0]:"none"}const $7=Symbol("");function Af(c){const a=D7();if(!a)return;const e=a.ut=(r=c(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(s=>F6(s,r))},n=()=>{const r=c(a.proxy);P6(a.subTree,r),e(r)};yl(n),A3(()=>{const r=new MutationObserver(n);r.observe(a.subTree.el.parentNode,{childList:!0}),l0(()=>r.disconnect())})}function P6(c,a){if(c.shapeFlag&128){const e=c.suspense;c=e.activeBranch,e.pendingBranch&&!e.isHydrating&&e.effects.push(()=>{P6(e.activeBranch,a)})}for(;c.component;)c=c.component.subTree;if(c.shapeFlag&1&&c.el)F6(c.el,a);else if(c.type===x2)c.children.forEach(e=>P6(e,a));else if(c.type===r3){let{el:e,anchor:n}=c;for(;e&&(F6(e,a),e!==n);)e=e.nextSibling}}function F6(c,a){if(c.nodeType===1){const e=c.style;let n="";for(const r in a)e.setProperty(`--${r}`,a[r]),n+=`--${r}: ${a[r]};`;e[$7]=n}}function Tf(c,a,e){const n=c.style,r=h2(e);if(e&&!r){if(a&&!h2(a))for(const s in a)e[s]==null&&B6(n,s,"");for(const s in e)B6(n,s,e[s])}else{const s=n.display;if(r){if(a!==e){const i=n[$7];i&&(e+=";"+i),n.cssText=e}}else a&&c.removeAttribute("style");H0 in c&&(n.display=s)}}const t5=/\s*!important$/;function B6(c,a,e){if(R(e))e.forEach(n=>B6(c,a,n));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const n=Pf(c,a);t5.test(e)?c.setProperty(n4(n),e.replace(t5,""),"important"):c[n]=e}}const l5=["Webkit","Moz","ms"],m6={};function Pf(c,a){const e=m6[a];if(e)return e;let n=J2(a);if(n!=="filter"&&n in c)return m6[a]=n;n=C3(n);for(let r=0;r<l5.length;r++){const s=l5[r]+n;if(s in c)return m6[a]=s}return a}const f5="http://www.w3.org/1999/xlink";function Ff(c,a,e,n,r){if(n&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(f5,a.slice(6,a.length)):c.setAttributeNS(f5,a,e);else{const s=Ft(a);e==null||s&&!K5(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function Bf(c,a,e,n,r,s,i){if(a==="innerHTML"||a==="textContent"){n&&i(n,r,s),c[a]=e??"";return}const o=c.tagName;if(a==="value"&&o!=="PROGRESS"&&!o.includes("-")){c._value=e;const l=o==="OPTION"?c.getAttribute("value"):c.value,m=e??"";l!==m&&(c.value=m),e==null&&c.removeAttribute(a);return}let t=!1;if(e===""||e==null){const l=typeof c[a];l==="boolean"?e=K5(e):e==null&&l==="string"?(e="",t=!0):l==="number"&&(e=0,t=!0)}try{c[a]=e}catch{}t&&c.removeAttribute(a)}function If(c,a,e,n){c.addEventListener(a,e,n)}function Rf(c,a,e,n){c.removeEventListener(a,e,n)}const m5=Symbol("_vei");function Df(c,a,e,n,r=null){const s=c[m5]||(c[m5]={}),i=s[a];if(n&&i)i.value=n;else{const[o,t]=Ef(a);if(n){const l=s[a]=Wf(n,r);If(c,o,l,t)}else i&&(Rf(c,o,i,t),s[a]=void 0)}}const h5=/(?:Once|Passive|Capture)$/;function Ef(c){let a;if(h5.test(c)){a={};let n;for(;n=c.match(h5);)c=c.slice(0,c.length-n[0].length),a[n[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):n4(c.slice(2)),a]}let h6=0;const Of=Promise.resolve(),_f=()=>h6||(Of.then(()=>h6=0),h6=Date.now());function Wf(c,a){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;I2($f(n,e.value),a,5,[n])};return e.value=c,e.attached=_f(),e}function $f(c,a){if(R(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(n=>r=>!r._stopped&&n&&n(r))}else return a}const u5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Uf=(c,a,e,n,r=!1,s,i,o,t)=>{a==="class"?Sf(c,n,r):a==="style"?Tf(c,e,n):p3(a)?K6(a)||Df(c,a,e,n,i):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):qf(c,a,n,r))?Bf(c,a,n,s,i,o,t):(a==="true-value"?c._trueValue=n:a==="false-value"&&(c._falseValue=n),Ff(c,a,n,r))};function qf(c,a,e,n){if(n)return!!(a==="innerHTML"||a==="textContent"||a in c&&u5(a)&&_(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const r=c.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return u5(a)&&h2(e)?!1:a in c}const Gf=["ctrl","shift","alt","meta"],jf={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>Gf.some(e=>c[`${e}Key`]&&!a.includes(e))},N2=(c,a)=>{const e=c._withMods||(c._withMods={}),n=a.join(".");return e[n]||(e[n]=(r,...s)=>{for(let i=0;i<a.length;i++){const o=jf[a[i]];if(o&&o(r,a))return}return c(r,...s)})},Yf=u2({patchProp:Uf},bf);let v5;function Kf(){return v5||(v5=Zl(Yf))}const Xf=(...c)=>{const a=Kf().createApp(...c),{mount:e}=a;return a.mount=n=>{const r=Qf(n);if(!r)return;const s=a._component;!_(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const i=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},a};function Qf(c){return h2(c)?document.querySelector(c):c}const q4=[{songName:"1.5 кг Отличного Пюре - Эмо.mp3",sort:181,bestParties:[{start:25,end:84}],notAggressive:!0},{songName:"Angel Vivaldi - A Martian Winter.mp3"},{songName:"Angel Vivaldi - An Erisian Autumn.mp3",sort:50,bestParties:[{start:78,end:104},{start:176,end:220},{start:246,end:268}],notAggressive:!0},{songName:"As I Lay Dying - Forever.mp3",sort:210,bestParties:[{start:0,end:25}]},{songName:"As I Lay Dying - Nothing Left [2007].mp3",sort:40,bestParties:[{start:0,end:57}]},{songName:"As I Lay Dying - The Sound Оf Truth.mp3",sort:60,bestParties:[{start:0,end:36},{start:59,end:121}]},{songName:"Aspirin Rose - Fucking Perfect (Pink cover).mp3"},{songName:"August Burns Red - A Shot Below The Belt.mp3",sort:142,bestParties:[{start:0,end:30},{start:90,end:114},{start:164,end:175}]},{songName:"August Burns Red - Barbarian.mp3",sort:20,bestParties:[{start:21,end:32},{start:70,end:88},{start:113,end:152}]},{songName:"August Burns Red - Consumer.mp3"},{songName:"August Burns Red - Indonesia.mp3",sort:141,bestParties:[{start:84,end:117},{start:161,end:180}]},{songName:"August Burns Red - Meridian.mp3",notAggressive:!0},{songName:"August Burns Red - Truth of a Liar.mp3"},{songName:"August Burns Red - Your Little Suburbia Is in Ruins.mp3",sort:70,bestParties:[{start:12,end:27},{start:107,end:125},{start:146,end:178}]},{songName:"Anaal Nathrakh - Between Shit and Piss We Are Born.mp3"},{songName:"Anaal Nathrakh - In The Constellation Of The Black Widow.mp3",sort:220,bestParties:[{start:65,end:85},{start:114,end:141}]},{songName:"Between the Buried and Me - All Bodies.mp3"},{songName:"Between The Buried And Me - Ants Of The Sky.mp3",sort:113,bestParties:[{start:0,end:108}]},{songName:"Between The Buried And Me - Sun Of Nothing.mp3"},{songName:"Between The Buried And Me - Swim To The Moon.mp3",sort:10,bestParties:[{start:135,end:160},{start:500,end:551},{start:982,end:1022}]},{songName:"Breakwater - Eleven.mp3"},{songName:"Breakwater - five.mp3"},{songName:"Bullet For My Valentine - Hand Of Blood.mp3"},{songName:"Cerebral Bore - The Bald Cadaver.mp3",sort:280,bestParties:[{start:5.5,end:50}]},{songName:"Children Of Bodom - Are You Dead Yet.mp3",sort:110,bestParties:[{start:82,end:114}]},{songName:"Cosmonauts Day - The Captain.mp3",notAggressive:!0},{songName:"Death In Vegas - Dirge.mp3"},{songName:"Dragonforce - The Flame of Youth.mp3",sort:120,bestParties:[{start:46,end:65},{start:289,end:317}]},{songName:"If These Trees Could Talk - From Roots to Needles.mp3",notAggressive:!0},{songName:"In Flames - Clayman.mp3",sort:130,bestParties:[{start:0,end:21}]},{songName:"In Flames - Reflect the Storm.mp3"},{songName:"Killing Floor - Abandon All.mp3"},{songName:"Killing Floor OST - Wake.mp3",notAggressive:!0},{songName:"Long Distance Calling - Black Paper Planes.mp3",notAggressive:!0},{songName:"Machine Head - Beautiful Mourning.mp3"},{songName:"Machine Head - Hallowed Be Thy Name.mp3"},{songName:"Machine Head - Halo.mp3"},{songName:"Ozoi The Maid - Unfortunately.mp3",sort:112,bestParties:[{start:59,end:84},{start:165,end:218},{start:240,end:253}]},{songName:"Ozoi The Maid Yakui The Maid - Lanterns.mp3",sort:111,bestParties:[{start:146,end:218}]},{songName:"Ozoi The Maid Yakui The Maid - Wonderland.mp3",sort:30,bestParties:[{start:115,end:243},{start:355,end:442}]},{songName:"Ozoi The Maid, Yakui The Maid - Frontier.mp3"},{songName:"Psygnosis - FIIIX 2.0.mp3"},{songName:"Psygnosis - Lost in Oblivion.mp3",sort:140,bestParties:[{start:292,end:356}]},{songName:"Psygnosis - MehMeh.mp3"},{songName:"Psygnosis - Phrase 7.mp3",notAggressive:!0},{songName:"Psygnosis - Synaptic Plasticity.mp3"},{songName:"Psygnosis - The Judgement.mp3"},{songName:"Raunchy - To the Lighthouse.mp3"},{songName:"Raunchy - Twelve Feet Tall.mp3",sort:150,bestParties:[{start:65,end:96}]},{songName:"Raunchy - Wasteland Discotheque.mp3",sort:190,bestParties:[{start:0,end:34},{start:63,end:101}]},{songName:"Rhapsody - The Mighty Ride of the Firelord.mp3"},{songName:"Rhapsody of Fire - Wisdom of the Kings.mp3"},{songName:"Rise Of The Northstar - The New Path.mp3"},{songName:"Rise Of The Northstar - What The Fuck.mp3",sort:160,bestParties:[{start:45,end:79}]},{songName:"Siberian Meat Grinder feat Distemper - Пламя в Груди.mp3",sort:211,bestParties:[{start:49,end:68}]},{songName:"The Doors - Alabama song.mp3",notAggressive:!0},{songName:"The Doors - The End.mp3",notAggressive:!0},{songName:"The Faceless - Shake The Disease.mp3"},{songName:"The Five Stars - Atom Bomb Baby.mp3",notAggressive:!0},{songName:"The HAARP Machine - Esoteric Agenda.mp3"},{songName:"Toundra - Bizancio Byzantium.mp3",sort:180,bestParties:[{start:127,end:224},{start:406,end:480}],notAggressive:!0},{songName:"URO & .corridoiokraut. - Nappi.mp3",notAggressive:!0},{songName:"What Mad Universe - Colossus.mp3",notAggressive:!0},{songName:"What Mad Universe - the world of leviathan.mp3",notAggressive:!0},{songName:"What Mad Universe - head of column.mp3",sort:170,bestParties:[{start:30,end:65}],notAggressive:!0},{songName:"What Mad Universe - mythical sacred firebird.mp3",notAggressive:!0},{songName:"What Mad Universe - Nebula My Love.mp3",sort:80,bestParties:[{start:162,end:246},{start:260,end:358}],notAggressive:!0},{songName:"What Mad Universe - Starborne.mp3",sort:90,bestParties:[{start:85,end:105},{start:144,end:185}],notAggressive:!0},{songName:"Within The Ruins - Ataxia II.mp3"},{songName:"Within The Ruins - Beautiful Agony.mp3"},{songName:"ZEROMANCER - Dr. Online.mp3"},{songName:"zYnthetic - Abandon All v3.mp3",sort:100,bestParties:[{start:0,end:30},{start:60,end:89}],notAggressive:!0},{songName:"zYnthetic - SSplug.mp3"}];function Jf(){const c=d2(q4),a=d2(q4.filter(C=>C.sort)),e=d2(q4.filter(C=>C.notAggressive)),n=d2(0),r=d2(0);S3(()=>{c.value=q4,r.value=v.value.length});const s=Y(()=>{const C="/player_with_my_favorite_music/";return v.value[n.value]?`${C}music/${M.value.songName}`:""}),i=Y(()=>[...a.value].sort((C,I)=>C.sort-I.sort)),o=d2(1);function t(C){!(o.value===4&&C.id===2)&&!(o.value===2&&C.id===4)&&(n.value=0),o.value=C.id,r.value=u.value.length}M7(()=>{});const l=Y(()=>{switch(o.value){case 1:return c.value;case 2:return i.value;case 3:return e.value;case 4:return i.value;default:return[]}}),m=Y(()=>o.value===4?i.value[n.value].bestParties:[]),u=Y(()=>p.value?k():l.value),v=Y(()=>u.value.map(C=>C.songName)),M=Y(()=>u.value[n.value]);function k(){return l.value.map(C=>({...C,sort:Math.random()})).sort((C,I)=>C.sort-I.sort).map(({sort:C,...I})=>I)}function w(){n.value+=1,n.value>=u.value.length&&(n.value=0)}function E(){n.value=(n.value-1+u.value.length)%u.value.length}function L(C){n.value=C}const p=d2(!1);function T(){p.value=!p.value}return{totalNumbSongs:r,defaultTrackList:c,topTrackList:a,bestParties:m,nextTrack:w,previousTrack:E,pathToCurrentFile:s,sortingTopTrackList:i,currentTrackIndex:n,changeTab:t,selectTrack:L,tabSelected:o,isRandomTracks:p,handlerRandomBtn:T,currentTracks:u,currentTracksList:v,currentSong:M}}const Zf=Z2({name:"TrackList",props:{currentTracks:{type:Array,default:()=>[]},currentTrackIndex:{type:Number,default:0}},emits:["select-track-from-list"],setup(c,{emit:a}){const e=Y(()=>{var s;return(s=c.currentTracks)==null?void 0:s.map(i=>{const o=i.lastIndexOf("/"),t=i==null?void 0:i.lastIndexOf(".");return i&&i.substring(o+1,t)||""})});Q1(()=>c.currentTrackIndex,()=>{n()});async function n(){await v7();const s=document.querySelector(".selected");s==null||s.scrollIntoView({behavior:"smooth",block:"center"})}function r(s){a("select-track-from-list",s)}return{currentTracksWithCorrectNames:e,selectTrackFromList:r}}}),m1=(c,a)=>{const e=c.__vccOpts||c;for(const[n,r]of a)e[n]=r;return e},cm=["onClick"];function am(c,a,e,n,r,s){return V2(),C2("ul",{ref:"sidebarRef",class:"sidebar",onClick:a[0]||(a[0]=N2(()=>{},["stop"]))},[(V2(!0),C2(x2,null,f0(c.currentTracksWithCorrectNames,(i,o)=>(V2(),C2("li",{key:o,class:Q2({selected:o===c.currentTrackIndex}),onClick:N2(t=>c.selectTrackFromList(o),["stop"])},$2(o+1)+". "+$2(i),11,cm))),128))],512)}const em=m1(Zf,[["render",am],["__scopeId","data-v-5b23505f"]]),nm=Z2({props:{tabSelected:{type:Number,default:1}},emits:["change-tab"],setup(c,{emit:a}){const e=[{label:"All music",id:1,url:"all"},{label:"Top",id:2,url:"top"},{label:"Top Shorts",id:4,url:"shorts"},{label:"Not aggressive",id:3,url:"not_aggressive"}];function n(r){c.tabSelected!==r.id&&a("change-tab",r)}return{btnHandler:n,tabsOption:e}}}),rm={class:"tabs"},sm=["onClick"];function im(c,a,e,n,r,s){return V2(),C2("div",rm,[(V2(!0),C2(x2,null,f0(c.tabsOption,(i,o)=>(V2(),C2("button",{key:o,class:Q2({active:i.id===c.tabSelected}),onClick:N2(t=>c.btnHandler(i),["stop"])},$2(i.label),11,sm))),128))])}const om=m1(nm,[["render",im],["__scopeId","data-v-0b829837"]]),tm="modulepreload",lm=function(c){return"/player_with_my_favorite_music/"+c},H5={},n1=function(a,e,n){let r=Promise.resolve();if(e&&e.length>0){const s=document.getElementsByTagName("link");r=Promise.all(e.map(i=>{if(i=lm(i),i in H5)return;H5[i]=!0;const o=i.endsWith(".css"),t=o?'[rel="stylesheet"]':"";if(!!n)for(let u=s.length-1;u>=0;u--){const v=s[u];if(v.href===i&&(!o||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${t}`))return;const m=document.createElement("link");if(m.rel=o?"stylesheet":tm,o||(m.as="script",m.crossOrigin=""),m.href=i,document.head.appendChild(m),o)return new Promise((u,v)=>{m.addEventListener("load",u),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>a()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})},fm=Z2({name:"MainInfoBand",props:{songName:{type:String,default:""}},setup(c){const a=d2({});S3(async()=>{const s=Object.assign({"/src/assets/images/1.5 кг Отличного Пюре.jpg":()=>n1(()=>import("./1.5 кг Отличного Пюре-OtALhitf.js"),__vite__mapDeps([])),"/src/assets/images/Anaal Nathrakh.jpeg":()=>n1(()=>import("./Anaal Nathrakh-7BxhGCGJ.js"),__vite__mapDeps([])),"/src/assets/images/As I Lay Dying.jpg":()=>n1(()=>import("./As I Lay Dying-28Nx7ZD0.js"),__vite__mapDeps([])),"/src/assets/images/August Burns Red.jpg":()=>n1(()=>import("./August Burns Red-MIqwgacb.js"),__vite__mapDeps([])),"/src/assets/images/Between The Buried And Me.webp":()=>n1(()=>import("./Between The Buried And Me-TSs49cb7.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid Yakui The Maid.jpg":()=>n1(()=>import("./Ozoi The Maid Yakui The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid.jpg":()=>n1(()=>import("./Ozoi The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/What Mad Universe.jpg":()=>n1(()=>import("./What Mad Universe-s6ECnjUY.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.png":()=>n1(()=>import("./default_logo-9B2Fgjf-.js"),__vite__mapDeps([]))});for(const i in s){const o=i.replace(/^.*\/(.*)\.\w+$/,"$1");a.value[o]=(await s[i]()).default}});const e=Y(()=>{var i;const s=(i=c.songName)==null?void 0:i.lastIndexOf(".");return c.songName&&c.songName.substring(0,s)||""}),n=Y(()=>{const[s,i]=e.value.split(" - ");return{bandName:s,songName:i}}),r=Y(()=>{const{bandName:s}=n.value;return a.value[s]||a.value.default_logo});return Q1(()=>c.songName,()=>{var s,i;if("mediaSession"in navigator&&r.value){const o=["96x96","128x128","192x192","256x256","384x384","512x512"];navigator.mediaSession.metadata=new MediaMetadata({title:((s=n.value)==null?void 0:s.songName)||"",artist:((i=n.value)==null?void 0:i.bandName)||"",artwork:o.map(t=>({src:r.value,sizes:t,type:"image/png"}))})}}),{getInfoBand:n,getLogoImage:r}}}),mm=["src"],hm={class:"artist-info"},um={class:"band"},vm={class:"song"};function Hm(c,a,e,n,r,s){return V2(),C2("div",null,[U("img",{src:c.getLogoImage,class:"album-image",alt:""},null,8,mm),U("div",hm,[U("div",um,$2(c.getInfoBand.bandName),1),U("div",vm,$2(c.getInfoBand.songName),1)])])}const zm=m1(fm,[["render",Hm],["__scopeId","data-v-3d5196ba"]]),dm=Z2({name:"VolumeControl",props:{volume:{type:Number,default:.8},hasText:{type:Boolean,default:!1}},emits:["volume-change","show-text-song"],setup(c,{emit:a}){const e=Y(()=>c.volume*100),n=Y(()=>c.volume>0?'<i class="fas fa-volume-up"/>':'<i class="fas fa-volume-off"/>'),r=Y(()=>c.hasText?"":"disabled");function s(l){const m=parseFloat(l.target.value)/100;a("volume-change",m)}function i(l){a("volume-change",l)}function o(){c.hasText&&a("show-text-song")}function t(){c.volume>0?i(0):i(.8)}return{convertToValue:e,volumeHandler:s,onIconVolumeClick:t,onIconShowTextClick:o,iconVolume:n,iconShowTextClass:r}}}),pm=c=>(o0("data-v-9b44ca47"),c=c(),t0(),c),Vm={class:"volume-control"},Mm=["innerHTML"],Cm=["value"],gm=pm(()=>U("i",{class:"fa-solid fa-text-height"},null,-1)),Lm=[gm];function bm(c,a,e,n,r,s){return V2(),C2("div",Vm,[U("button",{class:"player-button margin",onClick:a[0]||(a[0]=N2((...i)=>c.onIconVolumeClick&&c.onIconVolumeClick(...i),["stop"]))},[U("span",{innerHTML:c.iconVolume},null,8,Mm)]),U("input",{class:"margin",type:"range",value:c.convertToValue,min:"0",max:"100",step:"1",onInput:a[1]||(a[1]=(...i)=>c.volumeHandler&&c.volumeHandler(...i))},null,40,Cm),U("button",{class:Q2(["show-text",c.iconShowTextClass]),onClick:a[2]||(a[2]=N2((...i)=>c.onIconShowTextClick&&c.onIconShowTextClick(...i),["stop"]))},Lm,2)])}const ym=m1(dm,[["render",bm],["__scopeId","data-v-9b44ca47"]]),wm=Z2({name:"ProgressControl",props:{currentTime:{type:Number,default:0},totalTime:{type:Number,default:0},bestParties:{type:Array,default:()=>[]}},emits:["time-change","time-change-line"],setup(c,{emit:a}){const e=Y(()=>c.currentTime/c.totalTime*100),n=Y(()=>o(c.currentTime)),r=Y(()=>""),s=Y(()=>o(c.totalTime)),i=Y(()=>{var u;const m=Number((100/c.totalTime).toFixed(2));return(u=c.bestParties)==null?void 0:u.map(v=>({left:`${v.start*m}%`,right:`${100-v.end*m}%`}))});function o(m){const u=Math.floor(m/60),v=Math.floor(m%60);return`${u}:${String(v).padStart(2,"0")}`}function t(m){var w;const u=((w=m.currentTarget)==null?void 0:w.parentNode)||null,{clientWidth:v}=u,M=u.getBoundingClientRect(),k=m.clientX-M.left;a("time-change-line",k/v)}function l(m){a("time-change",m)}return{convertToValue:e,convertCurrentTime:n,convertTotalTime:s,timeHandler:l,timeHandlerEmit:t,convertBestPartiesInPercentage:i,convertCurrentTimeSeconds:r}}}),xm={class:"progress-control"},Nm=["value"],km={class:"time-display"},Sm={key:0,class:"line"};function Am(c,a,e,n,r,s){return V2(),C2("div",xm,[U("input",{type:"range",min:"0",max:"100",value:c.convertToValue,step:"1",onInput:a[0]||(a[0]=(...i)=>c.timeHandler&&c.timeHandler(...i))},null,40,Nm),U("div",km,[U("span",null,$2(c.convertCurrentTime),1),U("span",null,$2(c.convertCurrentTimeSeconds),1),U("span",null,$2(c.convertTotalTime),1)]),c.bestParties.length?(V2(),C2("div",Sm,[(V2(!0),C2(x2,null,f0(c.convertBestPartiesInPercentage,(i,o)=>(V2(),C2("div",{key:o,style:g3({left:i.left,right:i.right}),class:"best-section",onClick:a[1]||(a[1]=N2((...t)=>c.timeHandlerEmit&&c.timeHandlerEmit(...t),["stop"]))},null,4))),128))])):lf("",!0)])}const Tm=m1(wm,[["render",Am],["__scopeId","data-v-0d9f4faf"]]),Pm=Z2({name:"MainControl",props:{isPlaying:{type:Boolean,default:!1}},emits:["previous","play-pause","next"],setup(c,{emit:a}){function e(){a("previous")}const n=Y(()=>c.isPlaying?'<i class="fas fa-pause"/>':' <i class="fas fa-play"/>');function r(){a("play-pause")}function s(){a("next")}return{previousButtonHandler:e,playerButtonHandler:r,iconPlayerButton:n,nextButtonHandler:s}}}),U7=c=>(o0("data-v-1bded451"),c=c(),t0(),c),Fm={class:"main-control"},Bm=U7(()=>U("i",{class:"fas fa-step-backward"},null,-1)),Im=[Bm],Rm=["innerHTML"],Dm=U7(()=>U("i",{class:"fas fa-step-forward"},null,-1)),Em=[Dm];function Om(c,a,e,n,r,s){return V2(),C2("div",Fm,[U("button",{class:"player-button",onClick:a[0]||(a[0]=N2((...i)=>c.previousButtonHandler&&c.previousButtonHandler(...i),["stop"]))},Im),U("button",{class:"player-button",onClick:a[1]||(a[1]=N2((...i)=>c.playerButtonHandler&&c.playerButtonHandler(...i),["stop"]))},[U("span",{innerHTML:c.iconPlayerButton},null,8,Rm)]),U("button",{class:"player-button",onClick:a[2]||(a[2]=N2((...i)=>c.nextButtonHandler&&c.nextButtonHandler(...i),["stop"]))},Em)])}const _m=m1(Pm,[["render",Om],["__scopeId","data-v-1bded451"]]),Wm=Z2({name:"OtherControl",props:{currentNumbSong:{type:Number,default:0},totalNumbSongs:{type:Number,default:0},isRandomTracks:{type:Boolean,default:!1},isRepeatMode:{type:Boolean,default:!1},isShowTrackList:{type:Boolean,default:!1},isDarkTheme:{type:Boolean,default:!1}},emits:["random-click","show-list-click","repeat-mode-click","change-theme"],setup(c,{emit:a}){function e(){a("random-click")}function n(){a("repeat-mode-click")}function r(){a("show-list-click")}function s(){a("change-theme")}const i=Y(()=>c.isDarkTheme?'<i class="fa-solid fa-toggle-on"/>':'<i class="fa-solid fa-toggle-off"/>'),o=Y(()=>c.isShowTrackList?'<i class="fas fa-bars fa-rotate-90"/>':'<i class="fas fa-bars"/>');return{iconClickRandomHandler:e,iconClickRepeatModeHandler:n,iconClickShowListHandler:r,iconClickChangeThemeHandler:s,iconToggle:i,iconBar:o}}}),q7=c=>(o0("data-v-dbf63d29"),c=c(),t0(),c),$m={class:"other"},Um=q7(()=>U("i",{class:"fas fa-shuffle"},null,-1)),qm=[Um],Gm=q7(()=>U("i",{class:"fas fa-repeat"},null,-1)),jm=[Gm],Ym={class:"song-display"},Km=["innerHTML"],Xm=["innerHTML"];function Qm(c,a,e,n,r,s){return V2(),C2("div",$m,[U("button",{class:Q2({active:c.isRandomTracks}),onClick:a[0]||(a[0]=N2((...i)=>c.iconClickRandomHandler&&c.iconClickRandomHandler(...i),["stop"]))},qm,2),U("button",{class:Q2({active:c.isRepeatMode}),onClick:a[1]||(a[1]=N2((...i)=>c.iconClickRepeatModeHandler&&c.iconClickRepeatModeHandler(...i),["stop"]))},jm,2),U("div",Ym,[U("span",null,$2(c.currentNumbSong),1),R7("/"),U("span",null,$2(c.totalNumbSongs),1)]),U("button",{onClick:a[2]||(a[2]=N2((...i)=>c.iconClickChangeThemeHandler&&c.iconClickChangeThemeHandler(...i),["stop"]))},[U("span",{innerHTML:c.iconToggle},null,8,Km)]),U("button",{class:Q2({active:c.isShowTrackList}),onClick:a[3]||(a[3]=N2((...i)=>c.iconClickShowListHandler&&c.iconClickShowListHandler(...i),["stop"]))},[U("span",{innerHTML:c.iconBar},null,8,Xm)],2)])}const Jm=m1(Wm,[["render",Qm],["__scopeId","data-v-dbf63d29"]]),Zm=Z2({props:{songText:{type:String,default:""}}}),ch={class:"sidebar"},ah=["textContent"];function eh(c,a,e,n,r,s){return V2(),C2("div",ch,[U("span",{textContent:$2(c.songText)},null,8,ah)])}const nh=m1(Zm,[["render",eh],["__scopeId","data-v-a20903c5"]]),rh={"1.5 кг Отличного Пюре - Эмо.mp3":`Каждый раз понимать, как легко потерять
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
In the sign of the black widow`,"Between the Buried and Me - All Bodies.mp3":`We all create this imagery
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
To take your place when you are gone`},z0=Z2({name:"MainComponent",components:{TrackList:em,PageTabs:om,MainInfoBand:zm,VolumeControl:ym,ProgressControl:Tm,MainControl:_m,OtherControl:Jm,SongText:nh},setup(){const{bestParties:c,nextTrack:a,previousTrack:e,pathToCurrentFile:n,sortingTopTrackList:r,currentTrackIndex:s,changeTab:i,selectTrack:o,tabSelected:t,isRandomTracks:l,handlerRandomBtn:m,totalNumbSongs:u,currentTracks:v,currentSong:M,currentTracksList:k}=Jf();S3(async()=>{E();const W=[["play",()=>{t2(),navigator.mediaSession.playbackState="playing"}],["pause",()=>{t2(),navigator.mediaSession.playbackState="paused"}],["nexttrack",()=>{a()}],["previoustrack",()=>{e()}],["seekto",e2=>{console.log(e2),p.value.currentTime=e2.seekTime}]];for(const[e2,R2]of W)try{navigator.mediaSession.setActionHandler(e2,R2)}catch{console.log(`The media session action "${e2}" is not supported yet.`)}});const w=d2(!1);function E(){(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")==="dark"?w.value=!0:w.value=!1}function L(){w.value=!w.value}const p=d2(null),T=d2(0),C=d2(.8);function I(W){J(W),A2.value&&z2()}function c2(){b2.value?p.value.currentTime=0:a()}function a2(W){if(p.value){const e2=W.target;p.value.currentTime=Number(e2.value)/100*(p.value.duration||0)}}function D(W){p.value&&(p.value.currentTime=W*(p.value.duration||0))}function q(W){T.value=W.target.currentTime}function K(W){C.value=W.target.volume}function H2(W){p.value.volume=W}const P=d2(0);function J(W){const e2=W.target;P.value=e2.duration,navigator.mediaSession.setPositionState({duration:e2.duration,playbackRate:1,position:0})}function z2(){var W;try{(W=p.value)==null||W.play().then(e2=>e2)}catch(e2){console.log("error",e2)}}const A2=d2(!1);function t2(){var W;A2.value=!A2.value,A2.value?z2():(W=p.value)==null||W.pause()}function o2(W){const e2=r.value[s.value].bestParties;for(let R2=0;R2<e2.length;R2++){const f=e2[R2];if(W<f.start){console.log("start"),p.value.currentTime=f.start;return}else if(W>=f.start&&W<=f.end){console.log("continue"),W>=f.end-2;return}}console.log("nextTrack"),c2()}M7(()=>{t.value===4&&A2.value&&s&&o2(T.value)});const X=d2("500px");A3(()=>{const W=document.querySelector(".main_control_ref"),e2=document.querySelector(".container"),R2=W.getBoundingClientRect(),f=e2==null?void 0:e2.getBoundingClientRect();X.value=`${Math.abs(R2.top-f.top)+18}px`});function c1(){p.value.currentTime<=20||t.value===4?e():p.value.currentTime=0}const a1=d2(!1);function e1(){a1.value=!a1.value}const g2=d2(!1);function I4(){g2.value=!g2.value}function e6(){a1.value=!1,g2.value=!1}function n6(W){o(W),A2.value?z2():t2()}const b2=d2(!1);function W1(){b2.value=!b2.value}const R4=Y(()=>rh[M.value.songName]||"");return{audioPlayer:p,isPlaying:A2,currentTime:T,volume:C,onVolumeUpdate:K,totalTime:P,isRandomTracks:l,pathToCurrentFile:n,currentTracks:v,currentTrackIndex:s,currentTracksList:k,totalNumbSongs:u,currentSong:M,handlerCanPlay:I,handlerEnded:c2,handlerTimeChange:a2,handlerTimeChangeLine:D,onTimeUpdate:q,setVolume:H2,setTotalTime:J,playTrack:z2,togglePlayPause:t2,nextTrack:a,previousTrackHandler:c1,handlerRandomBtn:m,handlerShowListBtn:e1,handlerSelectTrack:n6,tabSelected:t,changeTab:i,isShowTrackList:a1,repeatModeChange:W1,isRepeatMode:b2,bestParties:c,isDarkTheme:w,handlerChangeThemeBtn:L,handlerShowSongTextBtn:I4,isShowSongText:g2,closeAllBars:e6,currentSongText:R4,distanceBetweenComponents:X}}}),z5=()=>{Af(c=>({"4f91bfaa":c.distanceBetweenComponents}))},d5=z0.setup;z0.setup=d5?(c,a)=>(z5(),d5(c,a)):z5;const sh={class:"container"},ih=["src"];function oh(c,a,e,n,r,s){const i=v1("TrackList"),o=v1("SongText"),t=v1("PageTabs"),l=v1("MainInfoBand"),m=v1("VolumeControl"),u=v1("ProgressControl"),v=v1("MainControl"),M=v1("OtherControl");return V2(),C2("main",{class:Q2([c.isDarkTheme?"dark":"light"]),onClick:a[4]||(a[4]=N2((...k)=>c.closeAllBars&&c.closeAllBars(...k),["stop"]))},[U("div",sh,[l2(u3,{name:"slide-track-list"},{default:b6(()=>[_8(l2(i,{"current-track-index":c.currentTrackIndex,"current-tracks":c.currentTracksList,class:"top_bar",onSelectTrackFromList:c.handlerSelectTrack},null,8,["current-track-index","current-tracks","onSelectTrackFromList"]),[[o5,c.isShowTrackList]])]),_:1}),l2(u3,{name:"slide-song-text"},{default:b6(()=>[_8(l2(o,{"song-text":c.currentSongText,class:"top_bar"},null,8,["song-text"]),[[o5,c.isShowSongText]])]),_:1}),l2(t,{"tab-selected":c.tabSelected,onChangeTab:c.changeTab},null,8,["tab-selected","onChangeTab"]),l2(l,{"song-name":c.currentSong.songName},null,8,["song-name"]),l2(m,{"has-text":!!c.currentSongText.length,volume:c.volume,onVolumeChange:c.setVolume,onShowTextSong:c.handlerShowSongTextBtn},null,8,["has-text","volume","onVolumeChange","onShowTextSong"]),l2(u,{"best-parties":c.bestParties,"current-time":c.currentTime,"total-time":c.totalTime,onTimeChange:c.handlerTimeChange,onTimeChangeLine:c.handlerTimeChangeLine},null,8,["best-parties","current-time","total-time","onTimeChange","onTimeChangeLine"]),l2(v,{ref:"main_control_ref",class:"main_control_ref","is-playing":c.isPlaying,onPrevious:c.previousTrackHandler,onNext:c.nextTrack,onPlayPause:c.togglePlayPause},null,8,["is-playing","onPrevious","onNext","onPlayPause"]),l2(M,{"current-numb-song":c.currentTrackIndex+1,"total-numb-songs":c.totalNumbSongs,"is-random-tracks":c.isRandomTracks,"is-show-track-list":c.isShowTrackList,"is-repeat-mode":c.isRepeatMode,"is-dark-theme":c.isDarkTheme,onRepeatModeClick:c.repeatModeChange,onRandomClick:c.handlerRandomBtn,onShowListClick:c.handlerShowListBtn,onChangeTheme:c.handlerChangeThemeBtn},null,8,["current-numb-song","total-numb-songs","is-random-tracks","is-show-track-list","is-repeat-mode","is-dark-theme","onRepeatModeClick","onRandomClick","onShowListClick","onChangeTheme"]),U("audio",{ref:"audioPlayer",src:c.pathToCurrentFile,preload:"metadata",onVolumechange:a[0]||(a[0]=(...k)=>c.onVolumeUpdate&&c.onVolumeUpdate(...k)),onTimeupdate:a[1]||(a[1]=(...k)=>c.onTimeUpdate&&c.onTimeUpdate(...k)),onCanplay:a[2]||(a[2]=(...k)=>c.handlerCanPlay&&c.handlerCanPlay(...k)),onEnded:a[3]||(a[3]=(...k)=>c.handlerEnded&&c.handlerEnded(...k))},null,40,ih)])],2)}const th=m1(z0,[["render",oh]]);function p5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(c);a&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,n)}return e}function N(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?p5(Object(e),!0).forEach(function(n){v2(c,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):p5(Object(e)).forEach(function(n){Object.defineProperty(c,n,Object.getOwnPropertyDescriptor(e,n))})}return c}function v3(c){"@babel/helpers - typeof";return v3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},v3(c)}function lh(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function V5(c,a){for(var e=0;e<a.length;e++){var n=a[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(c,n.key,n)}}function fh(c,a,e){return a&&V5(c.prototype,a),e&&V5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function v2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function d0(c,a){return hh(c)||vh(c,a)||G7(c,a)||zh()}function N4(c){return mh(c)||uh(c)||G7(c)||Hh()}function mh(c){if(Array.isArray(c))return I6(c)}function hh(c){if(Array.isArray(c))return c}function uh(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function vh(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var n=[],r=!0,s=!1,i,o;try{for(e=e.call(c);!(r=(i=e.next()).done)&&(n.push(i.value),!(a&&n.length===a));r=!0);}catch(t){s=!0,o=t}finally{try{!r&&e.return!=null&&e.return()}finally{if(s)throw o}}return n}}function G7(c,a){if(c){if(typeof c=="string")return I6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return I6(c,a)}}function I6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=c[e];return n}function Hh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var M5=function(){},p0={},j7={},Y7=null,K7={mark:M5,measure:M5};try{typeof window<"u"&&(p0=window),typeof document<"u"&&(j7=document),typeof MutationObserver<"u"&&(Y7=MutationObserver),typeof performance<"u"&&(K7=performance)}catch{}var dh=p0.navigator||{},C5=dh.userAgent,g5=C5===void 0?"":C5,b1=p0,s2=j7,L5=Y7,G4=K7;b1.document;var h1=!!s2.documentElement&&!!s2.head&&typeof s2.addEventListener=="function"&&typeof s2.createElement=="function",X7=~g5.indexOf("MSIE")||~g5.indexOf("Trident/"),j4,Y4,K4,X4,Q4,o1="___FONT_AWESOME___",R6=16,Q7="fa",J7="svg-inline--fa",O1="data-fa-i2svg",D6="data-fa-pseudo-element",ph="data-fa-pseudo-element-pending",V0="data-prefix",M0="data-icon",b5="fontawesome-i2svg",Vh="async",Mh=["HTML","HEAD","STYLE","SCRIPT"],Z7=function(){try{return!0}catch{return!1}}(),r2="classic",f2="sharp",C0=[r2,f2];function k4(c){return new Proxy(c,{get:function(e,n){return n in e?e[n]:e[r2]}})}var L4=k4((j4={},v2(j4,r2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),v2(j4,f2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),j4)),b4=k4((Y4={},v2(Y4,r2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),v2(Y4,f2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Y4)),y4=k4((K4={},v2(K4,r2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),v2(K4,f2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),K4)),Ch=k4((X4={},v2(X4,r2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),v2(X4,f2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),X4)),gh=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,cc="fa-layers-text",Lh=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bh=k4((Q4={},v2(Q4,r2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),v2(Q4,f2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Q4)),ac=[1,2,3,4,5,6,7,8,9,10],yh=ac.concat([11,12,13,14,15,16,17,18,19,20]),wh=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},w4=new Set;Object.keys(b4[r2]).map(w4.add.bind(w4));Object.keys(b4[f2]).map(w4.add.bind(w4));var xh=[].concat(C0,N4(w4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B1.GROUP,B1.SWAP_OPACITY,B1.PRIMARY,B1.SECONDARY]).concat(ac.map(function(c){return"".concat(c,"x")})).concat(yh.map(function(c){return"w-".concat(c)})),H4=b1.FontAwesomeConfig||{};function Nh(c){var a=s2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function kh(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(s2&&typeof s2.querySelector=="function"){var Sh=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Sh.forEach(function(c){var a=d0(c,2),e=a[0],n=a[1],r=kh(Nh(e));r!=null&&(H4[n]=r)})}var ec={styleDefault:"solid",familyDefault:"classic",cssPrefix:Q7,replacementClass:J7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};H4.familyPrefix&&(H4.cssPrefix=H4.familyPrefix);var a4=N(N({},ec),H4);a4.autoReplaceSvg||(a4.observeMutations=!1);var A={};Object.keys(ec).forEach(function(c){Object.defineProperty(A,c,{enumerable:!0,set:function(e){a4[c]=e,z4.forEach(function(n){return n(A)})},get:function(){return a4[c]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(a){a4.cssPrefix=a,z4.forEach(function(e){return e(A)})},get:function(){return a4.cssPrefix}});b1.FontAwesomeConfig=A;var z4=[];function Ah(c){return z4.push(c),function(){z4.splice(z4.indexOf(c),1)}}var d1=R6,K2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Th(c){if(!(!c||!h1)){var a=s2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=s2.head.childNodes,n=null,r=e.length-1;r>-1;r--){var s=e[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=s)}return s2.head.insertBefore(a,n),c}}var Ph="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function x4(){for(var c=12,a="";c-- >0;)a+=Ph[Math.random()*62|0];return a}function i4(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function g0(c){return c.classList?i4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function nc(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fh(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(nc(c[e]),'" ')},"").trim()}function B3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function L0(c){return c.size!==K2.size||c.x!==K2.x||c.y!==K2.y||c.rotate!==K2.rotate||c.flipX||c.flipY}function Bh(c){var a=c.transform,e=c.containerWidth,n=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),t={transform:"".concat(s," ").concat(i," ").concat(o)},l={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:t,path:l}}function Ih(c){var a=c.transform,e=c.width,n=e===void 0?R6:e,r=c.height,s=r===void 0?R6:r,i=c.startCentered,o=i===void 0?!1:i,t="";return o&&X7?t+="translate(".concat(a.x/d1-n/2,"em, ").concat(a.y/d1-s/2,"em) "):o?t+="translate(calc(-50% + ".concat(a.x/d1,"em), calc(-50% + ").concat(a.y/d1,"em)) "):t+="translate(".concat(a.x/d1,"em, ").concat(a.y/d1,"em) "),t+="scale(".concat(a.size/d1*(a.flipX?-1:1),", ").concat(a.size/d1*(a.flipY?-1:1),") "),t+="rotate(".concat(a.rotate,"deg) "),t}var Rh=`:root, :host {
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
}`;function rc(){var c=Q7,a=J7,e=A.cssPrefix,n=A.replacementClass,r=Rh;if(e!==c||n!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");r=r.replace(s,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(o,".".concat(n))}return r}var y5=!1;function u6(){A.autoAddCss&&!y5&&(Th(rc()),y5=!0)}var Dh={mixout:function(){return{dom:{css:rc,insertCss:u6}}},hooks:function(){return{beforeDOMElementCreation:function(){u6()},beforeI2svg:function(){u6()}}}},t1=b1||{};t1[o1]||(t1[o1]={});t1[o1].styles||(t1[o1].styles={});t1[o1].hooks||(t1[o1].hooks={});t1[o1].shims||(t1[o1].shims=[]);var W2=t1[o1],sc=[],Eh=function c(){s2.removeEventListener("DOMContentLoaded",c),H3=1,sc.map(function(a){return a()})},H3=!1;h1&&(H3=(s2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(s2.readyState),H3||s2.addEventListener("DOMContentLoaded",Eh));function Oh(c){h1&&(H3?setTimeout(c,0):sc.push(c))}function S4(c){var a=c.tag,e=c.attributes,n=e===void 0?{}:e,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?nc(c):"<".concat(a," ").concat(Fh(n),">").concat(s.map(S4).join(""),"</").concat(a,">")}function w5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var _h=function(a,e){return function(n,r,s,i){return a.call(e,n,r,s,i)}},v6=function(a,e,n,r){var s=Object.keys(a),i=s.length,o=r!==void 0?_h(e,r):e,t,l,m;for(n===void 0?(t=1,m=a[s[0]]):(t=0,m=n);t<i;t++)l=s[t],m=o(m,a[l],l,a);return m};function Wh(c){for(var a=[],e=0,n=c.length;e<n;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<n){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((r&1023)<<10)+(s&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function E6(c){var a=Wh(c);return a.length===1?a[0].toString(16):null}function $h(c,a){var e=c.length,n=c.charCodeAt(a),r;return n>=55296&&n<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function x5(c){return Object.keys(c).reduce(function(a,e){var n=c[e],r=!!n.icon;return r?a[n.iconName]=n.icon:a[e]=n,a},{})}function O6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.skipHooks,r=n===void 0?!1:n,s=x5(a);typeof W2.hooks.addPack=="function"&&!r?W2.hooks.addPack(c,x5(a)):W2.styles[c]=N(N({},W2.styles[c]||{}),s),c==="fas"&&O6("fa",a)}var J4,Z4,c3,q1=W2.styles,Uh=W2.shims,qh=(J4={},v2(J4,r2,Object.values(y4[r2])),v2(J4,f2,Object.values(y4[f2])),J4),b0=null,ic={},oc={},tc={},lc={},fc={},Gh=(Z4={},v2(Z4,r2,Object.keys(L4[r2])),v2(Z4,f2,Object.keys(L4[f2])),Z4);function jh(c){return~xh.indexOf(c)}function Yh(c,a){var e=a.split("-"),n=e[0],r=e.slice(1).join("-");return n===c&&r!==""&&!jh(r)?r:null}var mc=function(){var a=function(s){return v6(q1,function(i,o,t){return i[t]=v6(o,s,{}),i},{})};ic=a(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var o=s[2].filter(function(t){return typeof t=="number"});o.forEach(function(t){r[t.toString(16)]=i})}return r}),oc=a(function(r,s,i){if(r[i]=i,s[2]){var o=s[2].filter(function(t){return typeof t=="string"});o.forEach(function(t){r[t]=i})}return r}),fc=a(function(r,s,i){var o=s[2];return r[i]=i,o.forEach(function(t){r[t]=i}),r});var e="far"in q1||A.autoFetchSvg,n=v6(Uh,function(r,s){var i=s[0],o=s[1],t=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:t}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:t}),r},{names:{},unicodes:{}});tc=n.names,lc=n.unicodes,b0=I3(A.styleDefault,{family:A.familyDefault})};Ah(function(c){b0=I3(c.styleDefault,{family:A.familyDefault})});mc();function y0(c,a){return(ic[c]||{})[a]}function Kh(c,a){return(oc[c]||{})[a]}function I1(c,a){return(fc[c]||{})[a]}function hc(c){return tc[c]||{prefix:null,iconName:null}}function Xh(c){var a=lc[c],e=y0("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function y1(){return b0}var w0=function(){return{prefix:null,iconName:null,rest:[]}};function I3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,n=e===void 0?r2:e,r=L4[n][c],s=b4[n][c]||b4[n][r],i=c in W2.styles?c:null;return s||i||null}var N5=(c3={},v2(c3,r2,Object.keys(y4[r2])),v2(c3,f2,Object.keys(y4[f2])),c3);function R3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,s=(a={},v2(a,r2,"".concat(A.cssPrefix,"-").concat(r2)),v2(a,f2,"".concat(A.cssPrefix,"-").concat(f2)),a),i=null,o=r2;(c.includes(s[r2])||c.some(function(l){return N5[r2].includes(l)}))&&(o=r2),(c.includes(s[f2])||c.some(function(l){return N5[f2].includes(l)}))&&(o=f2);var t=c.reduce(function(l,m){var u=Yh(A.cssPrefix,m);if(q1[m]?(m=qh[o].includes(m)?Ch[o][m]:m,i=m,l.prefix=m):Gh[o].indexOf(m)>-1?(i=m,l.prefix=I3(m,{family:o})):u?l.iconName=u:m!==A.replacementClass&&m!==s[r2]&&m!==s[f2]&&l.rest.push(m),!r&&l.prefix&&l.iconName){var v=i==="fa"?hc(l.iconName):{},M=I1(l.prefix,l.iconName);v.prefix&&(i=null),l.iconName=v.iconName||M||l.iconName,l.prefix=v.prefix||l.prefix,l.prefix==="far"&&!q1.far&&q1.fas&&!A.autoFetchSvg&&(l.prefix="fas")}return l},w0());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&o===f2&&(q1.fass||A.autoFetchSvg)&&(t.prefix="fass",t.iconName=I1(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||i==="fa")&&(t.prefix=y1()||"fas"),t}var Qh=function(){function c(){lh(this,c),this.definitions={}}return fh(c,[{key:"add",value:function(){for(var e=this,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=N(N({},e.definitions[o]||{}),i[o]),O6(o,i[o]);var t=y4[r2][o];t&&O6(t,i[o]),mc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(s){var i=r[s],o=i.prefix,t=i.iconName,l=i.icon,m=l[2];e[o]||(e[o]={}),m.length>0&&m.forEach(function(u){typeof u=="string"&&(e[o][u]=l)}),e[o][t]=l}),e}}]),c}(),k5=[],G1={},J1={},Jh=Object.keys(J1);function Zh(c,a){var e=a.mixoutsTo;return k5=c,G1={},Object.keys(J1).forEach(function(n){Jh.indexOf(n)===-1&&delete J1[n]}),k5.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),v3(r[i])==="object"&&Object.keys(r[i]).forEach(function(o){e[i]||(e[i]={}),e[i][o]=r[i][o]})}),n.hooks){var s=n.hooks();Object.keys(s).forEach(function(i){G1[i]||(G1[i]=[]),G1[i].push(s[i])})}n.provides&&n.provides(J1)}),e}function _6(c,a){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];var s=G1[c]||[];return s.forEach(function(i){a=i.apply(null,[a].concat(n))}),a}function _1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),n=1;n<a;n++)e[n-1]=arguments[n];var r=G1[c]||[];r.forEach(function(s){s.apply(null,e)})}function l1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return J1[c]?J1[c].apply(null,a):void 0}function W6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||y1();if(a)return a=I1(e,a)||a,w5(uc.definitions,e,a)||w5(W2.styles,e,a)}var uc=new Qh,cu=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,_1("noAuto")},au={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return h1?(_1("beforeI2svg",a),l1("pseudoElements2svg",a),l1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,Oh(function(){nu({autoReplaceSvgRoot:e}),_1("watch",a)})}},eu={icon:function(a){if(a===null)return null;if(v3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:I1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],n=I3(a[0]);return{prefix:n,iconName:I1(n,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(A.cssPrefix,"-"))>-1||a.match(gh))){var r=R3(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||y1(),iconName:I1(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var s=y1();return{prefix:s,iconName:I1(s,a)||a}}}},F2={noAuto:cu,config:A,dom:au,parse:eu,library:uc,findIconDefinition:W6,toHtml:S4},nu=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,n=e===void 0?s2:e;(Object.keys(W2.styles).length>0||A.autoFetchSvg)&&h1&&A.autoReplaceSvg&&F2.dom.i2svg({node:n})};function D3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(n){return S4(n)})}}),Object.defineProperty(c,"node",{get:function(){if(h1){var n=s2.createElement("div");return n.innerHTML=c.html,n.children}}}),c}function ru(c){var a=c.children,e=c.main,n=c.mask,r=c.attributes,s=c.styles,i=c.transform;if(L0(i)&&e.found&&!n.found){var o=e.width,t=e.height,l={x:o/t/2,y:.5};r.style=B3(N(N({},s),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function su(c){var a=c.prefix,e=c.iconName,n=c.children,r=c.attributes,s=c.symbol,i=s===!0?"".concat(a,"-").concat(A.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},r),{},{id:i}),children:n}]}]}function x0(c){var a=c.icons,e=a.main,n=a.mask,r=c.prefix,s=c.iconName,i=c.transform,o=c.symbol,t=c.title,l=c.maskId,m=c.titleId,u=c.extra,v=c.watchable,M=v===void 0?!1:v,k=n.found?n:e,w=k.width,E=k.height,L=r==="fak",p=[A.replacementClass,s?"".concat(A.cssPrefix,"-").concat(s):""].filter(function(q){return u.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(u.classes).join(" "),T={children:[],attributes:N(N({},u.attributes),{},{"data-prefix":r,"data-icon":s,class:p,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(E)})},C=L&&!~u.classes.indexOf("fa-fw")?{width:"".concat(w/E*16*.0625,"em")}:{};M&&(T.attributes[O1]=""),t&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(m||x4())},children:[t]}),delete T.attributes.title);var I=N(N({},T),{},{prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:N(N({},C),u.styles)}),c2=n.found&&e.found?l1("generateAbstractMask",I)||{children:[],attributes:{}}:l1("generateAbstractIcon",I)||{children:[],attributes:{}},a2=c2.children,D=c2.attributes;return I.children=a2,I.attributes=D,o?su(I):ru(I)}function S5(c){var a=c.content,e=c.width,n=c.height,r=c.transform,s=c.title,i=c.extra,o=c.watchable,t=o===void 0?!1:o,l=N(N(N({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});t&&(l[O1]="");var m=N({},i.styles);L0(r)&&(m.transform=Ih({transform:r,startCentered:!0,width:e,height:n}),m["-webkit-transform"]=m.transform);var u=B3(m);u.length>0&&(l.style=u);var v=[];return v.push({tag:"span",attributes:l,children:[a]}),s&&v.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),v}function iu(c){var a=c.content,e=c.title,n=c.extra,r=N(N(N({},n.attributes),e?{title:e}:{}),{},{class:n.classes.join(" ")}),s=B3(n.styles);s.length>0&&(r.style=s);var i=[];return i.push({tag:"span",attributes:r,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var H6=W2.styles;function $6(c){var a=c[0],e=c[1],n=c.slice(4),r=d0(n,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(B1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(B1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(B1.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:i}}var ou={found:!1,width:512,height:512};function tu(c,a){!Z7&&!A.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function U6(c,a){var e=a;return a==="fa"&&A.styleDefault!==null&&(a=y1()),new Promise(function(n,r){if(l1("missingIconAbstract"),e==="fa"){var s=hc(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&H6[a]&&H6[a][c]){var i=H6[a][c];return n($6(i))}tu(c,a),n(N(N({},ou),{},{icon:A.showMissingIcons&&c?l1("missingIconAbstract")||{}:{}}))})}var A5=function(){},q6=A.measurePerformance&&G4&&G4.mark&&G4.measure?G4:{mark:A5,measure:A5},h4='FA "6.5.1"',lu=function(a){return q6.mark("".concat(h4," ").concat(a," begins")),function(){return vc(a)}},vc=function(a){q6.mark("".concat(h4," ").concat(a," ends")),q6.measure("".concat(h4," ").concat(a),"".concat(h4," ").concat(a," begins"),"".concat(h4," ").concat(a," ends"))},N0={begin:lu,end:vc},i3=function(){};function T5(c){var a=c.getAttribute?c.getAttribute(O1):null;return typeof a=="string"}function fu(c){var a=c.getAttribute?c.getAttribute(V0):null,e=c.getAttribute?c.getAttribute(M0):null;return a&&e}function mu(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(A.replacementClass)}function hu(){if(A.autoReplaceSvg===!0)return o3.replace;var c=o3[A.autoReplaceSvg];return c||o3.replace}function uu(c){return s2.createElementNS("http://www.w3.org/2000/svg",c)}function vu(c){return s2.createElement(c)}function Hc(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,n=e===void 0?c.tag==="svg"?uu:vu:e;if(typeof c=="string")return s2.createTextNode(c);var r=n(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var s=c.children||[];return s.forEach(function(i){r.appendChild(Hc(i,{ceFn:n}))}),r}function Hu(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var o3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(Hc(r),e)}),e.getAttribute(O1)===null&&A.keepOriginalSource){var n=s2.createComment(Hu(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(a){var e=a[0],n=a[1];if(~g0(e).indexOf(A.replacementClass))return o3.replace(a);var r=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var s=n[0].attributes.class.split(" ").reduce(function(o,t){return t===A.replacementClass||t.match(r)?o.toSvg.push(t):o.toNode.push(t),o},{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var i=n.map(function(o){return S4(o)}).join(`
`);e.setAttribute(O1,""),e.innerHTML=i}};function P5(c){c()}function zc(c,a){var e=typeof a=="function"?a:i3;if(c.length===0)e();else{var n=P5;A.mutateApproach===Vh&&(n=b1.requestAnimationFrame||P5),n(function(){var r=hu(),s=N0.begin("mutate");c.map(r),s(),e()})}}var k0=!1;function dc(){k0=!0}function G6(){k0=!1}var z3=null;function F5(c){if(L5&&A.observeMutations){var a=c.treeCallback,e=a===void 0?i3:a,n=c.nodeCallback,r=n===void 0?i3:n,s=c.pseudoElementsCallback,i=s===void 0?i3:s,o=c.observeMutationsRoot,t=o===void 0?s2:o;z3=new L5(function(l){if(!k0){var m=y1();i4(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!T5(u.addedNodes[0])&&(A.searchPseudoElements&&i(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&A.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&T5(u.target)&&~wh.indexOf(u.attributeName))if(u.attributeName==="class"&&fu(u.target)){var v=R3(g0(u.target)),M=v.prefix,k=v.iconName;u.target.setAttribute(V0,M||m),k&&u.target.setAttribute(M0,k)}else mu(u.target)&&r(u.target)})}}),h1&&z3.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function zu(){z3&&z3.disconnect()}function du(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(n,r){var s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(n[i]=o.join(":").trim()),n},{})),e}function pu(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),n=c.innerText!==void 0?c.innerText.trim():"",r=R3(g0(c));return r.prefix||(r.prefix=y1()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Kh(r.prefix,c.innerText)||y0(r.prefix,E6(c.innerText))),!r.iconName&&A.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function Vu(c){var a=i4(c.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),e=c.getAttribute("title"),n=c.getAttribute("data-fa-title-id");return A.autoA11y&&(e?a["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(n||x4()):(a["aria-hidden"]="true",a.focusable="false")),a}function Mu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function B5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=pu(c),n=e.iconName,r=e.prefix,s=e.rest,i=Vu(c),o=_6("parseNodeAttributes",{},c),t=a.styleParser?du(c):[];return N({iconName:n,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:K2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:t,attributes:i}},o)}var Cu=W2.styles;function pc(c){var a=A.autoReplaceSvg==="nest"?B5(c,{styleParser:!1}):B5(c);return~a.extra.classes.indexOf(cc)?l1("generateLayersText",c,a):l1("generateSvgReplacementMutation",c,a)}var w1=new Set;C0.map(function(c){w1.add("fa-".concat(c))});Object.keys(L4[r2]).map(w1.add.bind(w1));Object.keys(L4[f2]).map(w1.add.bind(w1));w1=N4(w1);function I5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!h1)return Promise.resolve();var e=s2.documentElement.classList,n=function(u){return e.add("".concat(b5,"-").concat(u))},r=function(u){return e.remove("".concat(b5,"-").concat(u))},s=A.autoFetchSvg?w1:C0.map(function(m){return"fa-".concat(m)}).concat(Object.keys(Cu));s.includes("fa")||s.push("fa");var i=[".".concat(cc,":not([").concat(O1,"])")].concat(s.map(function(m){return".".concat(m,":not([").concat(O1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=i4(c.querySelectorAll(i))}catch{}if(o.length>0)n("pending"),r("complete");else return Promise.resolve();var t=N0.begin("onTree"),l=o.reduce(function(m,u){try{var v=pc(u);v&&m.push(v)}catch(M){Z7||M.name==="MissingIcon"&&console.error(M)}return m},[]);return new Promise(function(m,u){Promise.all(l).then(function(v){zc(v,function(){n("active"),n("complete"),r("pending"),typeof a=="function"&&a(),t(),m()})}).catch(function(v){t(),u(v)})})}function gu(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pc(c).then(function(e){e&&zc([e],a)})}function Lu(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(a||{}).icon?a:W6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:W6(r||{})),c(n,N(N({},e),{},{mask:r}))}}var bu=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?K2:n,s=e.symbol,i=s===void 0?!1:s,o=e.mask,t=o===void 0?null:o,l=e.maskId,m=l===void 0?null:l,u=e.title,v=u===void 0?null:u,M=e.titleId,k=M===void 0?null:M,w=e.classes,E=w===void 0?[]:w,L=e.attributes,p=L===void 0?{}:L,T=e.styles,C=T===void 0?{}:T;if(a){var I=a.prefix,c2=a.iconName,a2=a.icon;return D3(N({type:"icon"},a),function(){return _1("beforeDOMElementCreation",{iconDefinition:a,params:e}),A.autoA11y&&(v?p["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(k||x4()):(p["aria-hidden"]="true",p.focusable="false")),x0({icons:{main:$6(a2),mask:t?$6(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:c2,transform:N(N({},K2),r),symbol:i,title:v,maskId:m,titleId:k,extra:{attributes:p,styles:C,classes:E}})})}},yu={mixout:function(){return{icon:Lu(bu)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=I5,e.nodeCallback=gu,e}}},provides:function(a){a.i2svg=function(e){var n=e.node,r=n===void 0?s2:n,s=e.callback,i=s===void 0?function(){}:s;return I5(r,i)},a.generateSvgReplacementMutation=function(e,n){var r=n.iconName,s=n.title,i=n.titleId,o=n.prefix,t=n.transform,l=n.symbol,m=n.mask,u=n.maskId,v=n.extra;return new Promise(function(M,k){Promise.all([U6(r,o),m.iconName?U6(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var E=d0(w,2),L=E[0],p=E[1];M([e,x0({icons:{main:L,mask:p},prefix:o,iconName:r,transform:t,symbol:l,maskId:u,title:s,titleId:i,extra:v,watchable:!0})])}).catch(k)})},a.generateAbstractIcon=function(e){var n=e.children,r=e.attributes,s=e.main,i=e.transform,o=e.styles,t=B3(o);t.length>0&&(r.style=t);var l;return L0(i)&&(l=l1("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},wu={mixout:function(){return{layer:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,s=r===void 0?[]:r;return D3({type:"layer"},function(){_1("beforeDOMElementCreation",{assembler:e,params:n});var i=[];return e(function(o){Array.isArray(o)?o.map(function(t){i=i.concat(t.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(N4(s)).join(" ")},children:i}]})}}}},xu={mixout:function(){return{counter:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,s=r===void 0?null:r,i=n.classes,o=i===void 0?[]:i,t=n.attributes,l=t===void 0?{}:t,m=n.styles,u=m===void 0?{}:m;return D3({type:"counter",content:e},function(){return _1("beforeDOMElementCreation",{content:e,params:n}),iu({content:e.toString(),title:s,extra:{attributes:l,styles:u,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(N4(o))}})})}}}},Nu={mixout:function(){return{text:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?K2:r,i=n.title,o=i===void 0?null:i,t=n.classes,l=t===void 0?[]:t,m=n.attributes,u=m===void 0?{}:m,v=n.styles,M=v===void 0?{}:v;return D3({type:"text",content:e},function(){return _1("beforeDOMElementCreation",{content:e,params:n}),S5({content:e,transform:N(N({},K2),s),title:o,extra:{attributes:u,styles:M,classes:["".concat(A.cssPrefix,"-layers-text")].concat(N4(l))}})})}}},provides:function(a){a.generateLayersText=function(e,n){var r=n.title,s=n.transform,i=n.extra,o=null,t=null;if(X7){var l=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();o=m.width/l,t=m.height/l}return A.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,S5({content:e.innerHTML,width:o,height:t,transform:s,title:r,extra:i,watchable:!0})])}}},ku=new RegExp('"',"ug"),R5=[1105920,1112319];function Su(c){var a=c.replace(ku,""),e=$h(a,0),n=e>=R5[0]&&e<=R5[1],r=a.length===2?a[0]===a[1]:!1;return{value:E6(r?a[0]:a),isSecondary:n||r}}function D5(c,a){var e="".concat(ph).concat(a.replace(":","-"));return new Promise(function(n,r){if(c.getAttribute(e)!==null)return n();var s=i4(c.children),i=s.filter(function(a2){return a2.getAttribute(D6)===a})[0],o=b1.getComputedStyle(c,a),t=o.getPropertyValue("font-family").match(Lh),l=o.getPropertyValue("font-weight"),m=o.getPropertyValue("content");if(i&&!t)return c.removeChild(i),n();if(t&&m!=="none"&&m!==""){var u=o.getPropertyValue("content"),v=~["Sharp"].indexOf(t[2])?f2:r2,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(t[2])?b4[v][t[2].toLowerCase()]:bh[v][l],k=Su(u),w=k.value,E=k.isSecondary,L=t[0].startsWith("FontAwesome"),p=y0(M,w),T=p;if(L){var C=Xh(w);C.iconName&&C.prefix&&(p=C.iconName,M=C.prefix)}if(p&&!E&&(!i||i.getAttribute(V0)!==M||i.getAttribute(M0)!==T)){c.setAttribute(e,T),i&&c.removeChild(i);var I=Mu(),c2=I.extra;c2.attributes[D6]=a,U6(p,M).then(function(a2){var D=x0(N(N({},I),{},{icons:{main:a2,mask:w0()},prefix:M,iconName:T,extra:c2,watchable:!0})),q=s2.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(q,c.firstChild):c.appendChild(q),q.outerHTML=D.map(function(K){return S4(K)}).join(`
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}