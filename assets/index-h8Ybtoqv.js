(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function K6(c,a){const e=Object.create(null),n=c.split(",");for(let r=0;r<n.length;r++)e[n[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}const e2={},j1=[],X2=()=>{},wt=()=>!1,V3=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),X6=c=>c.startsWith("onUpdate:"),v2=Object.assign,Q6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},xt=Object.prototype.hasOwnProperty,G=(c,a)=>xt.call(c,a),R=Array.isArray,Y1=c=>M3(c)==="[object Map]",Y5=c=>M3(c)==="[object Set]",_=c=>typeof c=="function",u2=c=>typeof c=="string",e4=c=>typeof c=="symbol",s2=c=>c!==null&&typeof c=="object",K5=c=>(s2(c)||_(c))&&_(c.then)&&_(c.catch),X5=Object.prototype.toString,M3=c=>X5.call(c),Nt=c=>M3(c).slice(8,-1),Q5=c=>M3(c)==="[object Object]",J6=c=>u2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,e3=K6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),C3=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},kt=/-(\w)/g,J2=C3(c=>c.replace(kt,(a,e)=>e?e.toUpperCase():"")),St=/\B([A-Z])/g,n4=C3(c=>c.replace(St,"-$1").toLowerCase()),g3=C3(c=>c.charAt(0).toUpperCase()+c.slice(1)),s6=C3(c=>c?`on${g3(c)}`:""),E1=(c,a)=>!Object.is(c,a),i6=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},l3=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},At=c=>{const a=parseFloat(c);return isNaN(a)?c:a},Tt=c=>{const a=u2(c)?Number(c):NaN;return isNaN(a)?c:a};let A8;const V6=()=>A8||(A8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function L3(c){if(R(c)){const a={};for(let e=0;e<c.length;e++){const n=c[e],r=u2(n)?It(n):L3(n);if(r)for(const s in r)a[s]=r[s]}return a}else if(u2(c)||s2(c))return c}const Pt=/;(?![^(]*\))/g,Ft=/:([^]+)/,Bt=/\/\*[^]*?\*\//g;function It(c){const a={};return c.replace(Bt,"").split(Pt).forEach(e=>{if(e){const n=e.split(Ft);n.length>1&&(a[n[0].trim()]=n[1].trim())}}),a}function Q2(c){let a="";if(u2(c))a=c;else if(R(c))for(let e=0;e<c.length;e++){const n=Q2(c[e]);n&&(a+=n+" ")}else if(s2(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Rt="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dt=K6(Rt);function J5(c){return!!c||c===""}const $2=c=>u2(c)?c:c==null?"":R(c)||s2(c)&&(c.toString===X5||!_(c.toString))?JSON.stringify(c,Z5,2):String(c),Z5=(c,a)=>a&&a.__v_isRef?Z5(c,a.value):Y1(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[n,r],s)=>(e[o6(n,s)+" =>"]=r,e),{})}:Y5(a)?{[`Set(${a.size})`]:[...a.values()].map(e=>o6(e))}:e4(a)?o6(a):s2(a)&&!R(a)&&!Q5(a)?String(a):a,o6=(c,a="")=>{var e;return e4(c)?`Symbol(${(e=c.description)!=null?e:a})`:c};let E2;class Et{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=E2,!a&&E2&&(this.index=(E2.scopes||(E2.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=E2;try{return E2=this,a()}finally{E2=e}}}on(){E2=this}off(){E2=this.parent}stop(a){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ot(c,a=E2){a&&a.active&&a.effects.push(c)}function _t(){return E2}const Z6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},c7=c=>(c.w&g1)>0,a7=c=>(c.n&g1)>0,Wt=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=g1},$t=c=>{const{deps:a}=c;if(a.length){let e=0;for(let n=0;n<a.length;n++){const r=a[n];c7(r)&&!a7(r)?r.delete(c):a[e++]=r,r.w&=~g1,r.n&=~g1}a.length=e}},M6=new WeakMap;let f4=0,g1=1;const C6=30;let O2;const R1=Symbol(""),g6=Symbol("");class c0{constructor(a,e=null,n){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Ot(this,n)}run(){if(!this.active)return this.fn();let a=O2,e=M1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=O2,O2=this,M1=!0,g1=1<<++f4,f4<=C6?Wt(this):T8(this),this.fn()}finally{f4<=C6&&$t(this),g1=1<<--f4,O2=this.parent,M1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){O2===this?this.deferStop=!0:this.active&&(T8(this),this.onStop&&this.onStop(),this.active=!1)}}function T8(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let M1=!0;const e7=[];function r4(){e7.push(M1),M1=!1}function s4(){const c=e7.pop();M1=c===void 0?!0:c}function k2(c,a,e){if(M1&&O2){let n=M6.get(c);n||M6.set(c,n=new Map);let r=n.get(e);r||n.set(e,r=Z6()),n7(r)}}function n7(c,a){let e=!1;f4<=C6?a7(c)||(c.n|=g1,e=!c7(c)):e=!c.has(O2),e&&(c.add(O2),O2.deps.push(c))}function i1(c,a,e,n,r,s){const i=M6.get(c);if(!i)return;let o=[];if(a==="clear")o=[...i.values()];else if(e==="length"&&R(c)){const t=Number(n);i.forEach((l,f)=>{(f==="length"||!e4(f)&&f>=t)&&o.push(l)})}else switch(e!==void 0&&o.push(i.get(e)),a){case"add":R(c)?J6(e)&&o.push(i.get("length")):(o.push(i.get(R1)),Y1(c)&&o.push(i.get(g6)));break;case"delete":R(c)||(o.push(i.get(R1)),Y1(c)&&o.push(i.get(g6)));break;case"set":Y1(c)&&o.push(i.get(R1));break}if(o.length===1)o[0]&&L6(o[0]);else{const t=[];for(const l of o)l&&t.push(...l);L6(Z6(t))}}function L6(c,a){const e=R(c)?c:[...c];for(const n of e)n.computed&&P8(n);for(const n of e)n.computed||P8(n)}function P8(c,a){(c!==O2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Ut=K6("__proto__,__v_isRef,__isVue"),r7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(e4)),F8=qt();function qt(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const n=j(this);for(let s=0,i=this.length;s<i;s++)k2(n,"get",s+"");const r=n[a](...e);return r===-1||r===!1?n[a](...e.map(j)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){r4();const n=j(this)[a].apply(this,e);return s4(),n}}),c}function Gt(c){const a=j(this);return k2(a,"has",c),a.hasOwnProperty(c)}class s7{constructor(a=!1,e=!1){this._isReadonly=a,this._shallow=e}get(a,e,n){const r=this._isReadonly,s=this._shallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return n===(r?s?sl:l7:s?t7:o7).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(n)?a:void 0;const i=R(a);if(!r){if(i&&G(F8,e))return Reflect.get(F8,e,n);if(e==="hasOwnProperty")return Gt}const o=Reflect.get(a,e,n);return(e4(e)?r7.has(e):Ut(e))||(r||k2(a,"get",e),s)?o:S2(o)?i&&J6(e)?o:o.value:s2(o)?r?f7(o):n0(o):o}}class i7 extends s7{constructor(a=!1){super(!1,a)}set(a,e,n,r){let s=a[e];if(!this._shallow){const t=Z1(s);if(!f3(n)&&!Z1(n)&&(s=j(s),n=j(n)),!R(a)&&S2(s)&&!S2(n))return t?!1:(s.value=n,!0)}const i=R(a)&&J6(e)?Number(e)<a.length:G(a,e),o=Reflect.set(a,e,n,r);return a===j(r)&&(i?E1(n,s)&&i1(a,"set",e,n):i1(a,"add",e,n)),o}deleteProperty(a,e){const n=G(a,e);a[e];const r=Reflect.deleteProperty(a,e);return r&&n&&i1(a,"delete",e,void 0),r}has(a,e){const n=Reflect.has(a,e);return(!e4(e)||!r7.has(e))&&k2(a,"has",e),n}ownKeys(a){return k2(a,"iterate",R(a)?"length":R1),Reflect.ownKeys(a)}}class jt extends s7{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const Yt=new i7,Kt=new jt,Xt=new i7(!0),a0=c=>c,y3=c=>Reflect.getPrototypeOf(c);function E4(c,a,e=!1,n=!1){c=c.__v_raw;const r=j(c),s=j(a);e||(E1(a,s)&&k2(r,"get",a),k2(r,"get",s));const{has:i}=y3(r),o=n?a0:e?s0:d4;if(i.call(r,a))return o(c.get(a));if(i.call(r,s))return o(c.get(s));c!==r&&c.get(a)}function O4(c,a=!1){const e=this.__v_raw,n=j(e),r=j(c);return a||(E1(c,r)&&k2(n,"has",c),k2(n,"has",r)),c===r?e.has(c):e.has(c)||e.has(r)}function _4(c,a=!1){return c=c.__v_raw,!a&&k2(j(c),"iterate",R1),Reflect.get(c,"size",c)}function B8(c){c=j(c);const a=j(this);return y3(a).has.call(a,c)||(a.add(c),i1(a,"add",c,c)),this}function I8(c,a){a=j(a);const e=j(this),{has:n,get:r}=y3(e);let s=n.call(e,c);s||(c=j(c),s=n.call(e,c));const i=r.call(e,c);return e.set(c,a),s?E1(a,i)&&i1(e,"set",c,a):i1(e,"add",c,a),this}function R8(c){const a=j(this),{has:e,get:n}=y3(a);let r=e.call(a,c);r||(c=j(c),r=e.call(a,c)),n&&n.call(a,c);const s=a.delete(c);return r&&i1(a,"delete",c,void 0),s}function D8(){const c=j(this),a=c.size!==0,e=c.clear();return a&&i1(c,"clear",void 0,void 0),e}function W4(c,a){return function(n,r){const s=this,i=s.__v_raw,o=j(i),t=a?a0:c?s0:d4;return!c&&k2(o,"iterate",R1),i.forEach((l,f)=>n.call(r,t(l),t(f),s))}}function $4(c,a,e){return function(...n){const r=this.__v_raw,s=j(r),i=Y1(s),o=c==="entries"||c===Symbol.iterator&&i,t=c==="keys"&&i,l=r[c](...n),f=e?a0:a?s0:d4;return!a&&k2(s,"iterate",t?g6:R1),{next(){const{value:h,done:v}=l.next();return v?{value:h,done:v}:{value:o?[f(h[0]),f(h[1])]:f(h),done:v}},[Symbol.iterator](){return this}}}}function u1(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function Qt(){const c={get(s){return E4(this,s)},get size(){return _4(this)},has:O4,add:B8,set:I8,delete:R8,clear:D8,forEach:W4(!1,!1)},a={get(s){return E4(this,s,!1,!0)},get size(){return _4(this)},has:O4,add:B8,set:I8,delete:R8,clear:D8,forEach:W4(!1,!0)},e={get(s){return E4(this,s,!0)},get size(){return _4(this,!0)},has(s){return O4.call(this,s,!0)},add:u1("add"),set:u1("set"),delete:u1("delete"),clear:u1("clear"),forEach:W4(!0,!1)},n={get(s){return E4(this,s,!0,!0)},get size(){return _4(this,!0)},has(s){return O4.call(this,s,!0)},add:u1("add"),set:u1("set"),delete:u1("delete"),clear:u1("clear"),forEach:W4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=$4(s,!1,!1),e[s]=$4(s,!0,!1),a[s]=$4(s,!1,!0),n[s]=$4(s,!0,!0)}),[c,e,a,n]}const[Jt,Zt,cl,al]=Qt();function e0(c,a){const e=a?c?al:cl:c?Zt:Jt;return(n,r,s)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?n:Reflect.get(G(e,r)&&r in n?e:n,r,s)}const el={get:e0(!1,!1)},nl={get:e0(!1,!0)},rl={get:e0(!0,!1)},o7=new WeakMap,t7=new WeakMap,l7=new WeakMap,sl=new WeakMap;function il(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ol(c){return c.__v_skip||!Object.isExtensible(c)?0:il(Nt(c))}function n0(c){return Z1(c)?c:r0(c,!1,Yt,el,o7)}function tl(c){return r0(c,!1,Xt,nl,t7)}function f7(c){return r0(c,!0,Kt,rl,l7)}function r0(c,a,e,n,r){if(!s2(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=r.get(c);if(s)return s;const i=ol(c);if(i===0)return c;const o=new Proxy(c,i===2?n:e);return r.set(c,o),o}function K1(c){return Z1(c)?K1(c.__v_raw):!!(c&&c.__v_isReactive)}function Z1(c){return!!(c&&c.__v_isReadonly)}function f3(c){return!!(c&&c.__v_isShallow)}function m7(c){return K1(c)||Z1(c)}function j(c){const a=c&&c.__v_raw;return a?j(a):c}function h7(c){return l3(c,"__v_skip",!0),c}const d4=c=>s2(c)?n0(c):c,s0=c=>s2(c)?f7(c):c;function u7(c){M1&&O2&&(c=j(c),n7(c.dep||(c.dep=Z6())))}function v7(c,a){c=j(c);const e=c.dep;e&&L6(e)}function S2(c){return!!(c&&c.__v_isRef===!0)}function h2(c){return ll(c,!1)}function ll(c,a){return S2(c)?c:new fl(c,a)}class fl{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:j(a),this._value=e?a:d4(a)}get value(){return u7(this),this._value}set value(a){const e=this.__v_isShallow||f3(a)||Z1(a);a=e?a:j(a),E1(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:d4(a),v7(this))}}function ml(c){return S2(c)?c.value:c}const hl={get:(c,a,e)=>ml(Reflect.get(c,a,e)),set:(c,a,e,n)=>{const r=c[a];return S2(r)&&!S2(e)?(r.value=e,!0):Reflect.set(c,a,e,n)}};function H7(c){return K1(c)?c:new Proxy(c,hl)}class ul{constructor(a,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new c0(a,()=>{this._dirty||(this._dirty=!0,v7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const a=j(this);return u7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function vl(c,a,e=!1){let n,r;const s=_(c);return s?(n=c,r=X2):(n=c.get,r=c.set),new ul(n,r,s||!r,e)}function C1(c,a,e,n){let r;try{r=n?c(...n):c()}catch(s){b3(s,a,e)}return r}function I2(c,a,e,n){if(_(c)){const s=C1(c,a,e,n);return s&&K5(s)&&s.catch(i=>{b3(i,a,e)}),s}const r=[];for(let s=0;s<c.length;s++)r.push(I2(c[s],a,e,n));return r}function b3(c,a,e,n=!0){const r=a?a.vnode:null;if(a){let s=a.parent;const i=a.proxy,o=e;for(;s;){const l=s.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](c,i,o)===!1)return}s=s.parent}const t=a.appContext.config.errorHandler;if(t){C1(t,null,10,[c,i,o]);return}}Hl(c,e,r,n)}function Hl(c,a,e,n=!0){console.error(c)}let p4=!1,y6=!1;const M2=[];let Y2=0;const X1=[];let r1=null,A1=0;const z7=Promise.resolve();let i0=null;function d7(c){const a=i0||z7;return c?a.then(this?c.bind(this):c):a}function zl(c){let a=Y2+1,e=M2.length;for(;a<e;){const n=a+e>>>1,r=M2[n],s=V4(r);s<c||s===c&&r.pre?a=n+1:e=n}return a}function o0(c){(!M2.length||!M2.includes(c,p4&&c.allowRecurse?Y2+1:Y2))&&(c.id==null?M2.push(c):M2.splice(zl(c.id),0,c),p7())}function p7(){!p4&&!y6&&(y6=!0,i0=z7.then(M7))}function dl(c){const a=M2.indexOf(c);a>Y2&&M2.splice(a,1)}function pl(c){R(c)?X1.push(...c):(!r1||!r1.includes(c,c.allowRecurse?A1+1:A1))&&X1.push(c),p7()}function E8(c,a,e=p4?Y2+1:0){for(;e<M2.length;e++){const n=M2[e];if(n&&n.pre){if(c&&n.id!==c.uid)continue;M2.splice(e,1),e--,n()}}}function V7(c){if(X1.length){const a=[...new Set(X1)];if(X1.length=0,r1){r1.push(...a);return}for(r1=a,r1.sort((e,n)=>V4(e)-V4(n)),A1=0;A1<r1.length;A1++)r1[A1]();r1=null,A1=0}}const V4=c=>c.id==null?1/0:c.id,Vl=(c,a)=>{const e=V4(c)-V4(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function M7(c){y6=!1,p4=!0,M2.sort(Vl);try{for(Y2=0;Y2<M2.length;Y2++){const a=M2[Y2];a&&a.active!==!1&&C1(a,null,14)}}finally{Y2=0,M2.length=0,V7(),p4=!1,i0=null,(M2.length||X1.length)&&M7()}}function Ml(c,a,...e){if(c.isUnmounted)return;const n=c.vnode.props||e2;let r=e;const s=a.startsWith("update:"),i=s&&a.slice(7);if(i&&i in n){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:h,trim:v}=n[f]||e2;v&&(r=e.map(M=>u2(M)?M.trim():M)),h&&(r=e.map(At))}let o,t=n[o=s6(a)]||n[o=s6(J2(a))];!t&&s&&(t=n[o=s6(n4(a))]),t&&I2(t,c,6,r);const l=n[o+"Once"];if(l){if(!c.emitted)c.emitted={};else if(c.emitted[o])return;c.emitted[o]=!0,I2(l,c,6,r)}}function C7(c,a,e=!1){const n=a.emitsCache,r=n.get(c);if(r!==void 0)return r;const s=c.emits;let i={},o=!1;if(!_(c)){const t=l=>{const f=C7(l,a,!0);f&&(o=!0,v2(i,f))};!e&&a.mixins.length&&a.mixins.forEach(t),c.extends&&t(c.extends),c.mixins&&c.mixins.forEach(t)}return!s&&!o?(s2(c)&&n.set(c,null),null):(R(s)?s.forEach(t=>i[t]=null):v2(i,s),s2(c)&&n.set(c,i),i)}function w3(c,a){return!c||!V3(a)?!1:(a=a.slice(2).replace(/Once$/,""),G(c,a[0].toLowerCase()+a.slice(1))||G(c,n4(a))||G(c,a))}let P2=null,x3=null;function m3(c){const a=P2;return P2=c,x3=c&&c.type.__scopeId||null,a}function t0(c){x3=c}function l0(){x3=null}function b6(c,a=P2,e){if(!a||c._n)return c;const n=(...r)=>{n._d&&J8(-1);const s=m3(a);let i;try{i=c(...r)}finally{m3(s),n._d&&J8(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function t6(c){const{type:a,vnode:e,proxy:n,withProxy:r,props:s,propsOptions:[i],slots:o,attrs:t,emit:l,render:f,renderCache:h,data:v,setupState:M,ctx:k,inheritAttrs:w}=c;let E,L;const p=m3(c);try{if(e.shapeFlag&4){const C=r||n,I=C;E=j2(f.call(I,C,h,s,M,v,k)),L=t}else{const C=a;E=j2(C.length>1?C(s,{attrs:t,slots:o,emit:l}):C(s,null)),L=a.props?t:Cl(t)}}catch(C){v4.length=0,b3(C,c,1),E=l2(U2)}let T=E;if(L&&w!==!1){const C=Object.keys(L),{shapeFlag:I}=T;C.length&&I&7&&(i&&C.some(X6)&&(L=gl(L,i)),T=L1(T,L))}return e.dirs&&(T=L1(T),T.dirs=T.dirs?T.dirs.concat(e.dirs):e.dirs),e.transition&&(T.transition=e.transition),E=T,m3(p),E}const Cl=c=>{let a;for(const e in c)(e==="class"||e==="style"||V3(e))&&((a||(a={}))[e]=c[e]);return a},gl=(c,a)=>{const e={};for(const n in c)(!X6(n)||!(n.slice(9)in a))&&(e[n]=c[n]);return e};function Ll(c,a,e){const{props:n,children:r,component:s}=c,{props:i,children:o,patchFlag:t}=a,l=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&t>=0){if(t&1024)return!0;if(t&16)return n?O8(n,i,l):!!i;if(t&8){const f=a.dynamicProps;for(let h=0;h<f.length;h++){const v=f[h];if(i[v]!==n[v]&&!w3(l,v))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===i?!1:n?i?O8(n,i,l):!0:!!i;return!1}function O8(c,a,e){const n=Object.keys(a);if(n.length!==Object.keys(c).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(a[s]!==c[s]&&!w3(e,s))return!0}return!1}function yl({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const g7="components";function v1(c,a){return wl(g7,c,!0,a)||c}const bl=Symbol.for("v-ndc");function wl(c,a,e=!0,n=!1){const r=P2||p2;if(r){const s=r.type;if(c===g7){const o=gf(s,!1);if(o&&(o===a||o===J2(a)||o===g3(J2(a))))return s}const i=_8(r[c]||s[c],a)||_8(r.appContext[c],a);return!i&&n?s:i}}function _8(c,a){return c&&(c[a]||c[J2(a)]||c[g3(J2(a))])}const xl=c=>c.__isSuspense;function Nl(c,a){a&&a.pendingBranch?R(c)?a.effects.push(...c):a.effects.push(c):pl(c)}function L7(c,a){return N3(c,null,a)}function kl(c,a){return N3(c,null,{flush:"post"})}const U4={};function Q1(c,a,e){return N3(c,a,e)}function N3(c,a,{immediate:e,deep:n,flush:r,onTrack:s,onTrigger:i}=e2){var o;const t=_t()===((o=p2)==null?void 0:o.scope)?p2:null;let l,f=!1,h=!1;if(S2(c)?(l=()=>c.value,f=f3(c)):K1(c)?(l=()=>c,n=!0):R(c)?(h=!0,f=c.some(C=>K1(C)||f3(C)),l=()=>c.map(C=>{if(S2(C))return C.value;if(K1(C))return F1(C);if(_(C))return C1(C,t,2)})):_(c)?a?l=()=>C1(c,t,2):l=()=>{if(!(t&&t.isUnmounted))return v&&v(),I2(c,t,3,[M])}:l=X2,a&&n){const C=l;l=()=>F1(C())}let v,M=C=>{v=p.onStop=()=>{C1(C,t,4),v=p.onStop=void 0}},k;if(C4)if(M=X2,a?e&&I2(a,t,3,[l(),h?[]:void 0,M]):l(),r==="sync"){const C=bf();k=C.__watcherHandles||(C.__watcherHandles=[])}else return X2;let w=h?new Array(c.length).fill(U4):U4;const E=()=>{if(p.active)if(a){const C=p.run();(n||f||(h?C.some((I,Z)=>E1(I,w[Z])):E1(C,w)))&&(v&&v(),I2(a,t,3,[C,w===U4?void 0:h&&w[0]===U4?[]:w,M]),w=C)}else p.run()};E.allowRecurse=!!a;let L;r==="sync"?L=E:r==="post"?L=()=>w2(E,t&&t.suspense):(E.pre=!0,t&&(E.id=t.uid),L=()=>o0(E));const p=new c0(l,L);a?e?E():w=p.run():r==="post"?w2(p.run.bind(p),t&&t.suspense):p.run();const T=()=>{p.stop(),t&&t.scope&&Q6(t.scope.effects,p)};return k&&k.push(T),T}function Sl(c,a,e){const n=this.proxy,r=u2(c)?c.includes(".")?y7(n,c):()=>n[c]:c.bind(n,n);let s;_(a)?s=a:(s=a.handler,e=a);const i=p2;c4(this);const o=N3(r,s.bind(n),e);return i?c4(i):D1(),o}function y7(c,a){const e=a.split(".");return()=>{let n=c;for(let r=0;r<e.length&&n;r++)n=n[e[r]];return n}}function F1(c,a){if(!s2(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),S2(c))F1(c.value,a);else if(R(c))for(let e=0;e<c.length;e++)F1(c[e],a);else if(Y5(c)||Y1(c))c.forEach(e=>{F1(e,a)});else if(Q5(c))for(const e in c)F1(c[e],a);return c}function W8(c,a){const e=P2;if(e===null)return c;const n=B3(e)||e.proxy,r=c.dirs||(c.dirs=[]);for(let s=0;s<a.length;s++){let[i,o,t,l=e2]=a[s];i&&(_(i)&&(i={mounted:i,updated:i}),i.deep&&F1(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:t,modifiers:l}))}return c}function x1(c,a,e,n){const r=c.dirs,s=a&&a.dirs;for(let i=0;i<r.length;i++){const o=r[i];s&&(o.oldValue=s[i].value);let t=o.dir[n];t&&(r4(),I2(t,e,8,[c.el,o,c,a]),s4())}}const p1=Symbol("_leaveCb"),q4=Symbol("_enterCb");function Al(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return N4(()=>{c.isMounted=!0}),k7(()=>{c.isUnmounting=!0}),c}const B2=[Function,Array],b7={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:B2,onEnter:B2,onAfterEnter:B2,onEnterCancelled:B2,onBeforeLeave:B2,onLeave:B2,onAfterLeave:B2,onLeaveCancelled:B2,onBeforeAppear:B2,onAppear:B2,onAfterAppear:B2,onAppearCancelled:B2},Tl={name:"BaseTransition",props:b7,setup(c,{slots:a}){const e=_7(),n=Al();let r;return()=>{const s=a.default&&x7(a.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const w of s)if(w.type!==U2){i=w;break}}const o=j(c),{mode:t}=o;if(n.isLeaving)return l6(i);const l=$8(i);if(!l)return l6(i);const f=w6(l,o,n,e);x6(l,f);const h=e.subTree,v=h&&$8(h);let M=!1;const{getTransitionKey:k}=l.type;if(k){const w=k();r===void 0?r=w:w!==r&&(r=w,M=!0)}if(v&&v.type!==U2&&(!T1(l,v)||M)){const w=w6(v,o,n,e);if(x6(v,w),t==="out-in")return n.isLeaving=!0,w.afterLeave=()=>{n.isLeaving=!1,e.update.active!==!1&&e.update()},l6(i);t==="in-out"&&l.type!==U2&&(w.delayLeave=(E,L,p)=>{const T=w7(n,v);T[String(v.key)]=v,E[p1]=()=>{L(),E[p1]=void 0,delete f.delayedLeave},f.delayedLeave=p})}return i}}},Pl=Tl;function w7(c,a){const{leavingVNodes:e}=c;let n=e.get(a.type);return n||(n=Object.create(null),e.set(a.type,n)),n}function w6(c,a,e,n){const{appear:r,mode:s,persisted:i=!1,onBeforeEnter:o,onEnter:t,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:h,onLeave:v,onAfterLeave:M,onLeaveCancelled:k,onBeforeAppear:w,onAppear:E,onAfterAppear:L,onAppearCancelled:p}=a,T=String(c.key),C=w7(e,c),I=(D,q)=>{D&&I2(D,n,9,q)},Z=(D,q)=>{const K=q[1];I(D,q),R(D)?D.every(z2=>z2.length<=1)&&K():D.length<=1&&K()},c2={mode:s,persisted:i,beforeEnter(D){let q=o;if(!e.isMounted)if(r)q=w||o;else return;D[p1]&&D[p1](!0);const K=C[T];K&&T1(c,K)&&K.el[p1]&&K.el[p1](),I(q,[D])},enter(D){let q=t,K=l,z2=f;if(!e.isMounted)if(r)q=E||t,K=L||l,z2=p||f;else return;let P=!1;const a2=D[q4]=d2=>{P||(P=!0,d2?I(z2,[D]):I(K,[D]),c2.delayedLeave&&c2.delayedLeave(),D[q4]=void 0)};q?Z(q,[D,a2]):a2()},leave(D,q){const K=String(c.key);if(D[q4]&&D[q4](!0),e.isUnmounting)return q();I(h,[D]);let z2=!1;const P=D[p1]=a2=>{z2||(z2=!0,q(),a2?I(k,[D]):I(M,[D]),D[p1]=void 0,C[K]===c&&delete C[K])};C[K]=c,v?Z(v,[D,P]):P()},clone(D){return w6(D,a,e,n)}};return c2}function l6(c){if(k3(c))return c=L1(c),c.children=null,c}function $8(c){return k3(c)?c.children?c.children[0]:void 0:c}function x6(c,a){c.shapeFlag&6&&c.component?x6(c.component.subTree,a):c.shapeFlag&128?(c.ssContent.transition=a.clone(c.ssContent),c.ssFallback.transition=a.clone(c.ssFallback)):c.transition=a}function x7(c,a=!1,e){let n=[],r=0;for(let s=0;s<c.length;s++){let i=c[s];const o=e==null?i.key:String(e)+String(i.key!=null?i.key:s);i.type===x2?(i.patchFlag&128&&r++,n=n.concat(x7(i.children,a,o))):(a||i.type!==U2)&&n.push(o!=null?L1(i,{key:o}):i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}/*! #__NO_SIDE_EFFECTS__ */function Z2(c,a){return _(c)?v2({name:c.name},a,{setup:c}):c}const n3=c=>!!c.type.__asyncLoader,k3=c=>c.type.__isKeepAlive;function Fl(c,a){N7(c,"a",a)}function Bl(c,a){N7(c,"da",a)}function N7(c,a,e=p2){const n=c.__wdc||(c.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(S3(a,n,e),e){let r=e.parent;for(;r&&r.parent;)k3(r.parent.vnode)&&Il(n,a,e,r),r=r.parent}}function Il(c,a,e,n){const r=S3(a,c,n,!0);T3(()=>{Q6(n[a],r)},e)}function S3(c,a,e=p2,n=!1){if(e){const r=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...i)=>{if(e.isUnmounted)return;r4(),c4(e);const o=I2(a,e,c,i);return D1(),s4(),o});return n?r.unshift(s):r.push(s),s}}const f1=c=>(a,e=p2)=>(!C4||c==="sp")&&S3(c,(...n)=>a(...n),e),A3=f1("bm"),N4=f1("m"),Rl=f1("bu"),Dl=f1("u"),k7=f1("bum"),T3=f1("um"),El=f1("sp"),Ol=f1("rtg"),_l=f1("rtc");function Wl(c,a=p2){S3("ec",c,a)}function f0(c,a,e,n){let r;const s=e&&e[n];if(R(c)||u2(c)){r=new Array(c.length);for(let i=0,o=c.length;i<o;i++)r[i]=a(c[i],i,void 0,s&&s[i])}else if(typeof c=="number"){r=new Array(c);for(let i=0;i<c;i++)r[i]=a(i+1,i,void 0,s&&s[i])}else if(s2(c))if(c[Symbol.iterator])r=Array.from(c,(i,o)=>a(i,o,void 0,s&&s[o]));else{const i=Object.keys(c);r=new Array(i.length);for(let o=0,t=i.length;o<t;o++){const l=i[o];r[o]=a(c[l],l,o,s&&s[o])}}else r=[];return e&&(e[n]=r),r}const N6=c=>c?W7(c)?B3(c)||c.proxy:N6(c.parent):null,u4=v2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>N6(c.parent),$root:c=>N6(c.root),$emit:c=>c.emit,$options:c=>m0(c),$forceUpdate:c=>c.f||(c.f=()=>o0(c.update)),$nextTick:c=>c.n||(c.n=d7.bind(c.proxy)),$watch:c=>Sl.bind(c)}),f6=(c,a)=>c!==e2&&!c.__isScriptSetup&&G(c,a),$l={get({_:c},a){const{ctx:e,setupState:n,data:r,props:s,accessCache:i,type:o,appContext:t}=c;let l;if(a[0]!=="$"){const M=i[a];if(M!==void 0)switch(M){case 1:return n[a];case 2:return r[a];case 4:return e[a];case 3:return s[a]}else{if(f6(n,a))return i[a]=1,n[a];if(r!==e2&&G(r,a))return i[a]=2,r[a];if((l=c.propsOptions[0])&&G(l,a))return i[a]=3,s[a];if(e!==e2&&G(e,a))return i[a]=4,e[a];k6&&(i[a]=0)}}const f=u4[a];let h,v;if(f)return a==="$attrs"&&k2(c,"get",a),f(c);if((h=o.__cssModules)&&(h=h[a]))return h;if(e!==e2&&G(e,a))return i[a]=4,e[a];if(v=t.config.globalProperties,G(v,a))return v[a]},set({_:c},a,e){const{data:n,setupState:r,ctx:s}=c;return f6(r,a)?(r[a]=e,!0):n!==e2&&G(n,a)?(n[a]=e,!0):G(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:n,appContext:r,propsOptions:s}},i){let o;return!!e[i]||c!==e2&&G(c,i)||f6(a,i)||(o=s[0])&&G(o,i)||G(n,i)||G(u4,i)||G(r.config.globalProperties,i)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:G(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function U8(c){return R(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let k6=!0;function Ul(c){const a=m0(c),e=c.proxy,n=c.ctx;k6=!1,a.beforeCreate&&q8(a.beforeCreate,c,"bc");const{data:r,computed:s,methods:i,watch:o,provide:t,inject:l,created:f,beforeMount:h,mounted:v,beforeUpdate:M,updated:k,activated:w,deactivated:E,beforeDestroy:L,beforeUnmount:p,destroyed:T,unmounted:C,render:I,renderTracked:Z,renderTriggered:c2,errorCaptured:D,serverPrefetch:q,expose:K,inheritAttrs:z2,components:P,directives:a2,filters:d2}=a;if(l&&ql(l,n,null),i)for(const i2 in i){const X=i[i2];_(X)&&(n[i2]=X.bind(e))}if(r){const i2=r.call(e,e);s2(i2)&&(c.data=n0(i2))}if(k6=!0,s)for(const i2 in s){const X=s[i2],c1=_(X)?X.bind(e,e):_(X.get)?X.get.bind(e,e):X2,a1=!_(X)&&_(X.set)?X.set.bind(e):X2,e1=Y({get:c1,set:a1});Object.defineProperty(n,i2,{enumerable:!0,configurable:!0,get:()=>e1.value,set:g2=>e1.value=g2})}if(o)for(const i2 in o)S7(o[i2],n,e,i2);if(t){const i2=_(t)?t.call(e):t;Reflect.ownKeys(i2).forEach(X=>{Ql(X,i2[X])})}f&&q8(f,c,"c");function t2(i2,X){R(X)?X.forEach(c1=>i2(c1.bind(e))):X&&i2(X.bind(e))}if(t2(A3,h),t2(N4,v),t2(Rl,M),t2(Dl,k),t2(Fl,w),t2(Bl,E),t2(Wl,D),t2(_l,Z),t2(Ol,c2),t2(k7,p),t2(T3,C),t2(El,q),R(K))if(K.length){const i2=c.exposed||(c.exposed={});K.forEach(X=>{Object.defineProperty(i2,X,{get:()=>e[X],set:c1=>e[X]=c1})})}else c.exposed||(c.exposed={});I&&c.render===X2&&(c.render=I),z2!=null&&(c.inheritAttrs=z2),P&&(c.components=P),a2&&(c.directives=a2)}function ql(c,a,e=X2){R(c)&&(c=S6(c));for(const n in c){const r=c[n];let s;s2(r)?"default"in r?s=r3(r.from||n,r.default,!0):s=r3(r.from||n):s=r3(r),S2(s)?Object.defineProperty(a,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):a[n]=s}}function q8(c,a,e){I2(R(c)?c.map(n=>n.bind(a.proxy)):c.bind(a.proxy),a,e)}function S7(c,a,e,n){const r=n.includes(".")?y7(e,n):()=>e[n];if(u2(c)){const s=a[c];_(s)&&Q1(r,s)}else if(_(c))Q1(r,c.bind(e));else if(s2(c))if(R(c))c.forEach(s=>S7(s,a,e,n));else{const s=_(c.handler)?c.handler.bind(e):a[c.handler];_(s)&&Q1(r,s,c)}}function m0(c){const a=c.type,{mixins:e,extends:n}=a,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=c.appContext,o=s.get(a);let t;return o?t=o:!r.length&&!e&&!n?t=a:(t={},r.length&&r.forEach(l=>h3(t,l,i,!0)),h3(t,a,i)),s2(a)&&s.set(a,t),t}function h3(c,a,e,n=!1){const{mixins:r,extends:s}=a;s&&h3(c,s,e,!0),r&&r.forEach(i=>h3(c,i,e,!0));for(const i in a)if(!(n&&i==="expose")){const o=Gl[i]||e&&e[i];c[i]=o?o(c[i],a[i]):a[i]}return c}const Gl={data:G8,props:j8,emits:j8,methods:m4,computed:m4,beforeCreate:L2,created:L2,beforeMount:L2,mounted:L2,beforeUpdate:L2,updated:L2,beforeDestroy:L2,beforeUnmount:L2,destroyed:L2,unmounted:L2,activated:L2,deactivated:L2,errorCaptured:L2,serverPrefetch:L2,components:m4,directives:m4,watch:Yl,provide:G8,inject:jl};function G8(c,a){return a?c?function(){return v2(_(c)?c.call(this,this):c,_(a)?a.call(this,this):a)}:a:c}function jl(c,a){return m4(S6(c),S6(a))}function S6(c){if(R(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function L2(c,a){return c?[...new Set([].concat(c,a))]:a}function m4(c,a){return c?v2(Object.create(null),c,a):a}function j8(c,a){return c?R(c)&&R(a)?[...new Set([...c,...a])]:v2(Object.create(null),U8(c),U8(a??{})):a}function Yl(c,a){if(!c)return a;if(!a)return c;const e=v2(Object.create(null),c);for(const n in a)e[n]=L2(c[n],a[n]);return e}function A7(){return{app:null,config:{isNativeTag:wt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kl=0;function Xl(c,a){return function(n,r=null){_(n)||(n=v2({},n)),r!=null&&!s2(r)&&(r=null);const s=A7(),i=new WeakSet;let o=!1;const t=s.app={_uid:Kl++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:wf,get config(){return s.config},set config(l){},use(l,...f){return i.has(l)||(l&&_(l.install)?(i.add(l),l.install(t,...f)):_(l)&&(i.add(l),l(t,...f))),t},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),t},component(l,f){return f?(s.components[l]=f,t):s.components[l]},directive(l,f){return f?(s.directives[l]=f,t):s.directives[l]},mount(l,f,h){if(!o){const v=l2(n,r);return v.appContext=s,f&&a?a(v,l):c(v,l,h),o=!0,t._container=l,l.__vue_app__=t,B3(v.component)||v.component.proxy}},unmount(){o&&(c(null,t._container),delete t._container.__vue_app__)},provide(l,f){return s.provides[l]=f,t},runWithContext(l){u3=t;try{return l()}finally{u3=null}}};return t}}let u3=null;function Ql(c,a){if(p2){let e=p2.provides;const n=p2.parent&&p2.parent.provides;n===e&&(e=p2.provides=Object.create(n)),e[c]=a}}function r3(c,a,e=!1){const n=p2||P2;if(n||u3){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:u3._context.provides;if(r&&c in r)return r[c];if(arguments.length>1)return e&&_(a)?a.call(n&&n.proxy):a}}function Jl(c,a,e,n=!1){const r={},s={};l3(s,F3,1),c.propsDefaults=Object.create(null),T7(c,a,r,s);for(const i in c.propsOptions[0])i in r||(r[i]=void 0);e?c.props=n?r:tl(r):c.type.props?c.props=r:c.props=s,c.attrs=s}function Zl(c,a,e,n){const{props:r,attrs:s,vnode:{patchFlag:i}}=c,o=j(r),[t]=c.propsOptions;let l=!1;if((n||i>0)&&!(i&16)){if(i&8){const f=c.vnode.dynamicProps;for(let h=0;h<f.length;h++){let v=f[h];if(w3(c.emitsOptions,v))continue;const M=a[v];if(t)if(G(s,v))M!==s[v]&&(s[v]=M,l=!0);else{const k=J2(v);r[k]=A6(t,o,k,M,c,!1)}else M!==s[v]&&(s[v]=M,l=!0)}}}else{T7(c,a,r,s)&&(l=!0);let f;for(const h in o)(!a||!G(a,h)&&((f=n4(h))===h||!G(a,f)))&&(t?e&&(e[h]!==void 0||e[f]!==void 0)&&(r[h]=A6(t,o,h,void 0,c,!0)):delete r[h]);if(s!==o)for(const h in s)(!a||!G(a,h))&&(delete s[h],l=!0)}l&&i1(c,"set","$attrs")}function T7(c,a,e,n){const[r,s]=c.propsOptions;let i=!1,o;if(a)for(let t in a){if(e3(t))continue;const l=a[t];let f;r&&G(r,f=J2(t))?!s||!s.includes(f)?e[f]=l:(o||(o={}))[f]=l:w3(c.emitsOptions,t)||(!(t in n)||l!==n[t])&&(n[t]=l,i=!0)}if(s){const t=j(e),l=o||e2;for(let f=0;f<s.length;f++){const h=s[f];e[h]=A6(r,t,h,l[h],c,!G(l,h))}}return i}function A6(c,a,e,n,r,s){const i=c[e];if(i!=null){const o=G(i,"default");if(o&&n===void 0){const t=i.default;if(i.type!==Function&&!i.skipFactory&&_(t)){const{propsDefaults:l}=r;e in l?n=l[e]:(c4(r),n=l[e]=t.call(null,a),D1())}else n=t}i[0]&&(s&&!o?n=!1:i[1]&&(n===""||n===n4(e))&&(n=!0))}return n}function P7(c,a,e=!1){const n=a.propsCache,r=n.get(c);if(r)return r;const s=c.props,i={},o=[];let t=!1;if(!_(c)){const f=h=>{t=!0;const[v,M]=P7(h,a,!0);v2(i,v),M&&o.push(...M)};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}if(!s&&!t)return s2(c)&&n.set(c,j1),j1;if(R(s))for(let f=0;f<s.length;f++){const h=J2(s[f]);Y8(h)&&(i[h]=e2)}else if(s)for(const f in s){const h=J2(f);if(Y8(h)){const v=s[f],M=i[h]=R(v)||_(v)?{type:v}:v2({},v);if(M){const k=Q8(Boolean,M.type),w=Q8(String,M.type);M[0]=k>-1,M[1]=w<0||k<w,(k>-1||G(M,"default"))&&o.push(h)}}}const l=[i,o];return s2(c)&&n.set(c,l),l}function Y8(c){return c[0]!=="$"}function K8(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function X8(c,a){return K8(c)===K8(a)}function Q8(c,a){return R(a)?a.findIndex(e=>X8(e,c)):_(a)&&X8(a,c)?0:-1}const F7=c=>c[0]==="_"||c==="$stable",h0=c=>R(c)?c.map(j2):[j2(c)],cf=(c,a,e)=>{if(a._n)return a;const n=b6((...r)=>h0(a(...r)),e);return n._c=!1,n},B7=(c,a,e)=>{const n=c._ctx;for(const r in c){if(F7(r))continue;const s=c[r];if(_(s))a[r]=cf(r,s,n);else if(s!=null){const i=h0(s);a[r]=()=>i}}},I7=(c,a)=>{const e=h0(a);c.slots.default=()=>e},af=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=j(a),l3(a,"_",e)):B7(a,c.slots={})}else c.slots={},a&&I7(c,a);l3(c.slots,F3,1)},ef=(c,a,e)=>{const{vnode:n,slots:r}=c;let s=!0,i=e2;if(n.shapeFlag&32){const o=a._;o?e&&o===1?s=!1:(v2(r,a),!e&&o===1&&delete r._):(s=!a.$stable,B7(a,r)),i=a}else a&&(I7(c,a),i={default:1});if(s)for(const o in r)!F7(o)&&i[o]==null&&delete r[o]};function T6(c,a,e,n,r=!1){if(R(c)){c.forEach((v,M)=>T6(v,a&&(R(a)?a[M]:a),e,n,r));return}if(n3(n)&&!r)return;const s=n.shapeFlag&4?B3(n.component)||n.component.proxy:n.el,i=r?null:s,{i:o,r:t}=c,l=a&&a.r,f=o.refs===e2?o.refs={}:o.refs,h=o.setupState;if(l!=null&&l!==t&&(u2(l)?(f[l]=null,G(h,l)&&(h[l]=null)):S2(l)&&(l.value=null)),_(t))C1(t,o,12,[i,f]);else{const v=u2(t),M=S2(t);if(v||M){const k=()=>{if(c.f){const w=v?G(h,t)?h[t]:f[t]:t.value;r?R(w)&&Q6(w,s):R(w)?w.includes(s)||w.push(s):v?(f[t]=[s],G(h,t)&&(h[t]=f[t])):(t.value=[s],c.k&&(f[c.k]=t.value))}else v?(f[t]=i,G(h,t)&&(h[t]=i)):M&&(t.value=i,c.k&&(f[c.k]=i))};i?(k.id=-1,w2(k,e)):k()}}}const w2=Nl;function nf(c){return rf(c)}function rf(c,a){const e=V6();e.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:i,createText:o,createComment:t,setText:l,setElementText:f,parentNode:h,nextSibling:v,setScopeId:M=X2,insertStaticContent:k}=c,w=(m,u,H,z=null,d=null,y=null,x=!1,g=null,b=!!u.dynamicChildren)=>{if(m===u)return;m&&!T1(m,u)&&(z=W1(m),g2(m,d,y,!0),m=null),u.patchFlag===-2&&(b=!1,u.dynamicChildren=null);const{type:V,ref:F,shapeFlag:S}=u;switch(V){case P3:E(m,u,H,z);break;case U2:L(m,u,H,z);break;case s3:m==null&&p(u,H,z,x);break;case x2:P(m,u,H,z,d,y,x,g,b);break;default:S&1?I(m,u,H,z,d,y,x,g,b):S&6?a2(m,u,H,z,d,y,x,g,b):(S&64||S&128)&&V.process(m,u,H,z,d,y,x,g,b,W)}F!=null&&d&&T6(F,m&&m.ref,y,u||m,!u)},E=(m,u,H,z)=>{if(m==null)n(u.el=o(u.children),H,z);else{const d=u.el=m.el;u.children!==m.children&&l(d,u.children)}},L=(m,u,H,z)=>{m==null?n(u.el=t(u.children||""),H,z):u.el=m.el},p=(m,u,H,z)=>{[m.el,m.anchor]=k(m.children,u,H,z,m.el,m.anchor)},T=({el:m,anchor:u},H,z)=>{let d;for(;m&&m!==u;)d=v(m),n(m,H,z),m=d;n(u,H,z)},C=({el:m,anchor:u})=>{let H;for(;m&&m!==u;)H=v(m),r(m),m=H;r(u)},I=(m,u,H,z,d,y,x,g,b)=>{x=x||u.type==="svg",m==null?Z(u,H,z,d,y,x,g,b):q(m,u,d,y,x,g,b)},Z=(m,u,H,z,d,y,x,g)=>{let b,V;const{type:F,props:S,shapeFlag:B,transition:O,dirs:$}=m;if(b=m.el=i(m.type,y,S&&S.is,S),B&8?f(b,m.children):B&16&&D(m.children,b,null,z,d,y&&F!=="foreignObject",x,g),$&&x1(m,null,z,"created"),c2(b,m,m.scopeId,x,z),S){for(const Q in S)Q!=="value"&&!e3(Q)&&s(b,Q,null,S[Q],y,m.children,z,d,y2);"value"in S&&s(b,"value",null,S.value),(V=S.onVnodeBeforeMount)&&G2(V,z,m)}$&&x1(m,null,z,"beforeMount");const J=sf(d,O);J&&O.beforeEnter(b),n(b,u,H),((V=S&&S.onVnodeMounted)||J||$)&&w2(()=>{V&&G2(V,z,m),J&&O.enter(b),$&&x1(m,null,z,"mounted")},d)},c2=(m,u,H,z,d)=>{if(H&&M(m,H),z)for(let y=0;y<z.length;y++)M(m,z[y]);if(d){let y=d.subTree;if(u===y){const x=d.vnode;c2(m,x,x.scopeId,x.slotScopeIds,d.parent)}}},D=(m,u,H,z,d,y,x,g,b=0)=>{for(let V=b;V<m.length;V++){const F=m[V]=g?V1(m[V]):j2(m[V]);w(null,F,u,H,z,d,y,x,g)}},q=(m,u,H,z,d,y,x)=>{const g=u.el=m.el;let{patchFlag:b,dynamicChildren:V,dirs:F}=u;b|=m.patchFlag&16;const S=m.props||e2,B=u.props||e2;let O;H&&N1(H,!1),(O=B.onVnodeBeforeUpdate)&&G2(O,H,u,m),F&&x1(u,m,H,"beforeUpdate"),H&&N1(H,!0);const $=d&&u.type!=="foreignObject";if(V?K(m.dynamicChildren,V,g,H,z,$,y):x||X(m,u,g,null,H,z,$,y,!1),b>0){if(b&16)z2(g,u,S,B,H,z,d);else if(b&2&&S.class!==B.class&&s(g,"class",null,B.class,d),b&4&&s(g,"style",S.style,B.style,d),b&8){const J=u.dynamicProps;for(let Q=0;Q<J.length;Q++){const m2=J[Q],D2=S[m2],$1=B[m2];($1!==D2||m2==="value")&&s(g,m2,D2,$1,d,m.children,H,z,y2)}}b&1&&m.children!==u.children&&f(g,u.children)}else!x&&V==null&&z2(g,u,S,B,H,z,d);((O=B.onVnodeUpdated)||F)&&w2(()=>{O&&G2(O,H,u,m),F&&x1(u,m,H,"updated")},z)},K=(m,u,H,z,d,y,x)=>{for(let g=0;g<u.length;g++){const b=m[g],V=u[g],F=b.el&&(b.type===x2||!T1(b,V)||b.shapeFlag&70)?h(b.el):H;w(b,V,F,null,z,d,y,x,!0)}},z2=(m,u,H,z,d,y,x)=>{if(H!==z){if(H!==e2)for(const g in H)!e3(g)&&!(g in z)&&s(m,g,H[g],null,x,u.children,d,y,y2);for(const g in z){if(e3(g))continue;const b=z[g],V=H[g];b!==V&&g!=="value"&&s(m,g,V,b,x,u.children,d,y,y2)}"value"in z&&s(m,"value",H.value,z.value)}},P=(m,u,H,z,d,y,x,g,b)=>{const V=u.el=m?m.el:o(""),F=u.anchor=m?m.anchor:o("");let{patchFlag:S,dynamicChildren:B,slotScopeIds:O}=u;O&&(g=g?g.concat(O):O),m==null?(n(V,H,z),n(F,H,z),D(u.children,H,F,d,y,x,g,b)):S>0&&S&64&&B&&m.dynamicChildren?(K(m.dynamicChildren,B,H,d,y,x,g),(u.key!=null||d&&u===d.subTree)&&R7(m,u,!0)):X(m,u,H,F,d,y,x,g,b)},a2=(m,u,H,z,d,y,x,g,b)=>{u.slotScopeIds=g,m==null?u.shapeFlag&512?d.ctx.activate(u,H,z,x,b):d2(u,H,z,d,y,x,b):A2(m,u,b)},d2=(m,u,H,z,d,y,x)=>{const g=m.component=df(m,z,d);if(k3(m)&&(g.ctx.renderer=W),pf(g),g.asyncDep){if(d&&d.registerDep(g,t2),!m.el){const b=g.subTree=l2(U2);L(null,b,u,H)}return}t2(g,m,u,H,d,y,x)},A2=(m,u,H)=>{const z=u.component=m.component;if(Ll(m,u,H))if(z.asyncDep&&!z.asyncResolved){i2(z,u,H);return}else z.next=u,dl(z.update),z.update();else u.el=m.el,z.vnode=u},t2=(m,u,H,z,d,y,x)=>{const g=()=>{if(m.isMounted){let{next:F,bu:S,u:B,parent:O,vnode:$}=m,J=F,Q;N1(m,!1),F?(F.el=$.el,i2(m,F,x)):F=$,S&&i6(S),(Q=F.props&&F.props.onVnodeBeforeUpdate)&&G2(Q,O,F,$),N1(m,!0);const m2=t6(m),D2=m.subTree;m.subTree=m2,w(D2,m2,h(D2.el),W1(D2),m,d,y),F.el=m2.el,J===null&&yl(m,m2.el),B&&w2(B,d),(Q=F.props&&F.props.onVnodeUpdated)&&w2(()=>G2(Q,O,F,$),d)}else{let F;const{el:S,props:B}=u,{bm:O,m:$,parent:J}=m,Q=n3(u);if(N1(m,!1),O&&i6(O),!Q&&(F=B&&B.onVnodeBeforeMount)&&G2(F,J,u),N1(m,!0),S&&R2){const m2=()=>{m.subTree=t6(m),R2(S,m.subTree,m,d,null)};Q?u.type.__asyncLoader().then(()=>!m.isUnmounted&&m2()):m2()}else{const m2=m.subTree=t6(m);w(null,m2,H,z,m,d,y),u.el=m2.el}if($&&w2($,d),!Q&&(F=B&&B.onVnodeMounted)){const m2=u;w2(()=>G2(F,J,m2),d)}(u.shapeFlag&256||J&&n3(J.vnode)&&J.vnode.shapeFlag&256)&&m.a&&w2(m.a,d),m.isMounted=!0,u=H=z=null}},b=m.effect=new c0(g,()=>o0(V),m.scope),V=m.update=()=>b.run();V.id=m.uid,N1(m,!0),V()},i2=(m,u,H)=>{u.component=m;const z=m.vnode.props;m.vnode=u,m.next=null,Zl(m,u.props,z,H),ef(m,u.children,H),r4(),E8(m),s4()},X=(m,u,H,z,d,y,x,g,b=!1)=>{const V=m&&m.children,F=m?m.shapeFlag:0,S=u.children,{patchFlag:B,shapeFlag:O}=u;if(B>0){if(B&128){a1(V,S,H,z,d,y,x,g,b);return}else if(B&256){c1(V,S,H,z,d,y,x,g,b);return}}O&8?(F&16&&y2(V,d,y),S!==V&&f(H,S)):F&16?O&16?a1(V,S,H,z,d,y,x,g,b):y2(V,d,y,!0):(F&8&&f(H,""),O&16&&D(S,H,z,d,y,x,g,b))},c1=(m,u,H,z,d,y,x,g,b)=>{m=m||j1,u=u||j1;const V=m.length,F=u.length,S=Math.min(V,F);let B;for(B=0;B<S;B++){const O=u[B]=b?V1(u[B]):j2(u[B]);w(m[B],O,H,null,d,y,x,g,b)}V>F?y2(m,d,y,!0,!1,S):D(u,H,z,d,y,x,g,b,S)},a1=(m,u,H,z,d,y,x,g,b)=>{let V=0;const F=u.length;let S=m.length-1,B=F-1;for(;V<=S&&V<=B;){const O=m[V],$=u[V]=b?V1(u[V]):j2(u[V]);if(T1(O,$))w(O,$,H,null,d,y,x,g,b);else break;V++}for(;V<=S&&V<=B;){const O=m[S],$=u[B]=b?V1(u[B]):j2(u[B]);if(T1(O,$))w(O,$,H,null,d,y,x,g,b);else break;S--,B--}if(V>S){if(V<=B){const O=B+1,$=O<F?u[O].el:z;for(;V<=B;)w(null,u[V]=b?V1(u[V]):j2(u[V]),H,$,d,y,x,g,b),V++}}else if(V>B)for(;V<=S;)g2(m[V],d,y,!0),V++;else{const O=V,$=V,J=new Map;for(V=$;V<=B;V++){const T2=u[V]=b?V1(u[V]):j2(u[V]);T2.key!=null&&J.set(T2.key,V)}let Q,m2=0;const D2=B-$+1;let $1=!1,N8=0;const o4=new Array(D2);for(V=0;V<D2;V++)o4[V]=0;for(V=O;V<=S;V++){const T2=m[V];if(m2>=D2){g2(T2,d,y,!0);continue}let q2;if(T2.key!=null)q2=J.get(T2.key);else for(Q=$;Q<=B;Q++)if(o4[Q-$]===0&&T1(T2,u[Q])){q2=Q;break}q2===void 0?g2(T2,d,y,!0):(o4[q2-$]=V+1,q2>=N8?N8=q2:$1=!0,w(T2,u[q2],H,null,d,y,x,g,b),m2++)}const k8=$1?of(o4):j1;for(Q=k8.length-1,V=D2-1;V>=0;V--){const T2=$+V,q2=u[T2],S8=T2+1<F?u[T2+1].el:z;o4[V]===0?w(null,q2,H,S8,d,y,x,g,b):$1&&(Q<0||V!==k8[Q]?e1(q2,H,S8,2):Q--)}}},e1=(m,u,H,z,d=null)=>{const{el:y,type:x,transition:g,children:b,shapeFlag:V}=m;if(V&6){e1(m.component.subTree,u,H,z);return}if(V&128){m.suspense.move(u,H,z);return}if(V&64){x.move(m,u,H,W);return}if(x===x2){n(y,u,H);for(let S=0;S<b.length;S++)e1(b[S],u,H,z);n(m.anchor,u,H);return}if(x===s3){T(m,u,H);return}if(z!==2&&V&1&&g)if(z===0)g.beforeEnter(y),n(y,u,H),w2(()=>g.enter(y),d);else{const{leave:S,delayLeave:B,afterLeave:O}=g,$=()=>n(y,u,H),J=()=>{S(y,()=>{$(),O&&O()})};B?B(y,$,J):J()}else n(y,u,H)},g2=(m,u,H,z=!1,d=!1)=>{const{type:y,props:x,ref:g,children:b,dynamicChildren:V,shapeFlag:F,patchFlag:S,dirs:B}=m;if(g!=null&&T6(g,null,H,m,!0),F&256){u.ctx.deactivate(m);return}const O=F&1&&B,$=!n3(m);let J;if($&&(J=x&&x.onVnodeBeforeUnmount)&&G2(J,u,m),F&6)r6(m.component,H,z);else{if(F&128){m.suspense.unmount(H,z);return}O&&x1(m,null,u,"beforeUnmount"),F&64?m.type.remove(m,u,H,d,W,z):V&&(y!==x2||S>0&&S&64)?y2(V,u,H,!1,!0):(y===x2&&S&384||!d&&F&16)&&y2(b,u,H),z&&R4(m)}($&&(J=x&&x.onVnodeUnmounted)||O)&&w2(()=>{J&&G2(J,u,m),O&&x1(m,null,u,"unmounted")},H)},R4=m=>{const{type:u,el:H,anchor:z,transition:d}=m;if(u===x2){n6(H,z);return}if(u===s3){C(m);return}const y=()=>{r(H),d&&!d.persisted&&d.afterLeave&&d.afterLeave()};if(m.shapeFlag&1&&d&&!d.persisted){const{leave:x,delayLeave:g}=d,b=()=>x(H,y);g?g(m.el,y,b):b()}else y()},n6=(m,u)=>{let H;for(;m!==u;)H=v(m),r(m),m=H;r(u)},r6=(m,u,H)=>{const{bum:z,scope:d,update:y,subTree:x,um:g}=m;z&&i6(z),d.stop(),y&&(y.active=!1,g2(x,m,u,H)),g&&w2(g,u),w2(()=>{m.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},y2=(m,u,H,z=!1,d=!1,y=0)=>{for(let x=y;x<m.length;x++)g2(m[x],u,H,z,d)},W1=m=>m.shapeFlag&6?W1(m.component.subTree):m.shapeFlag&128?m.suspense.next():v(m.anchor||m.el),D4=(m,u,H)=>{m==null?u._vnode&&g2(u._vnode,null,null,!0):w(u._vnode||null,m,u,null,null,null,H),E8(),V7(),u._vnode=m},W={p:w,um:g2,m:e1,r:R4,mt:d2,mc:D,pc:X,pbc:K,n:W1,o:c};let o2,R2;return a&&([o2,R2]=a(W)),{render:D4,hydrate:o2,createApp:Xl(D4,o2)}}function N1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function sf(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function R7(c,a,e=!1){const n=c.children,r=a.children;if(R(n)&&R(r))for(let s=0;s<n.length;s++){const i=n[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=V1(r[s]),o.el=i.el),e||R7(i,o)),o.type===P3&&(o.el=i.el)}}function of(c){const a=c.slice(),e=[0];let n,r,s,i,o;const t=c.length;for(n=0;n<t;n++){const l=c[n];if(l!==0){if(r=e[e.length-1],c[r]<l){a[n]=r,e.push(n);continue}for(s=0,i=e.length-1;s<i;)o=s+i>>1,c[e[o]]<l?s=o+1:i=o;l<c[e[s]]&&(s>0&&(a[n]=e[s-1]),e[s]=n)}}for(s=e.length,i=e[s-1];s-- >0;)e[s]=i,i=a[i];return e}const tf=c=>c.__isTeleport,x2=Symbol.for("v-fgt"),P3=Symbol.for("v-txt"),U2=Symbol.for("v-cmt"),s3=Symbol.for("v-stc"),v4=[];let _2=null;function V2(c=!1){v4.push(_2=c?null:[])}function lf(){v4.pop(),_2=v4[v4.length-1]||null}let M4=1;function J8(c){M4+=c}function D7(c){return c.dynamicChildren=M4>0?_2||j1:null,lf(),M4>0&&_2&&_2.push(c),c}function C2(c,a,e,n,r,s){return D7(U(c,a,e,n,r,s,!0))}function ff(c,a,e,n,r){return D7(l2(c,a,e,n,r,!0))}function P6(c){return c?c.__v_isVNode===!0:!1}function T1(c,a){return c.type===a.type&&c.key===a.key}const F3="__vInternal",E7=({key:c})=>c??null,i3=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?u2(c)||S2(c)||_(c)?{i:P2,r:c,k:a,f:!!e}:c:null);function U(c,a=null,e=null,n=0,r=null,s=c===x2?0:1,i=!1,o=!1){const t={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&E7(a),ref:a&&i3(a),scopeId:x3,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:P2};return o?(u0(t,e),s&128&&c.normalize(t)):e&&(t.shapeFlag|=u2(e)?8:16),M4>0&&!i&&_2&&(t.patchFlag>0||s&6)&&t.patchFlag!==32&&_2.push(t),t}const l2=mf;function mf(c,a=null,e=null,n=0,r=null,s=!1){if((!c||c===bl)&&(c=U2),P6(c)){const o=L1(c,a,!0);return e&&u0(o,e),M4>0&&!s&&_2&&(o.shapeFlag&6?_2[_2.indexOf(c)]=o:_2.push(o)),o.patchFlag|=-2,o}if(Lf(c)&&(c=c.__vccOpts),a){a=hf(a);let{class:o,style:t}=a;o&&!u2(o)&&(a.class=Q2(o)),s2(t)&&(m7(t)&&!R(t)&&(t=v2({},t)),a.style=L3(t))}const i=u2(c)?1:xl(c)?128:tf(c)?64:s2(c)?4:_(c)?2:0;return U(c,a,e,n,r,i,s,!0)}function hf(c){return c?m7(c)||F3 in c?v2({},c):c:null}function L1(c,a,e=!1){const{props:n,ref:r,patchFlag:s,children:i}=c,o=a?vf(n||{},a):n;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:o,key:o&&E7(o),ref:a&&a.ref?e&&r?R(r)?r.concat(i3(a)):[r,i3(a)]:i3(a):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==x2?s===-1?16:s|16:s,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&L1(c.ssContent),ssFallback:c.ssFallback&&L1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function O7(c=" ",a=0){return l2(P3,null,c,a)}function uf(c="",a=!1){return a?(V2(),ff(U2,null,c)):l2(U2,null,c)}function j2(c){return c==null||typeof c=="boolean"?l2(U2):R(c)?l2(x2,null,c.slice()):typeof c=="object"?V1(c):l2(P3,null,String(c))}function V1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:L1(c)}function u0(c,a){let e=0;const{shapeFlag:n}=c;if(a==null)a=null;else if(R(a))e=16;else if(typeof a=="object")if(n&65){const r=a.default;r&&(r._c&&(r._d=!1),u0(c,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(F3 in a)?a._ctx=P2:r===3&&P2&&(P2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else _(a)?(a={default:a,_ctx:P2},e=32):(a=String(a),n&64?(e=16,a=[O7(a)]):e=8);c.children=a,c.shapeFlag|=e}function vf(...c){const a={};for(let e=0;e<c.length;e++){const n=c[e];for(const r in n)if(r==="class")a.class!==n.class&&(a.class=Q2([a.class,n.class]));else if(r==="style")a.style=L3([a.style,n.style]);else if(V3(r)){const s=a[r],i=n[r];i&&s!==i&&!(R(s)&&s.includes(i))&&(a[r]=s?[].concat(s,i):i)}else r!==""&&(a[r]=n[r])}return a}function G2(c,a,e,n=null){I2(c,a,7,[e,n])}const Hf=A7();let zf=0;function df(c,a,e){const n=c.type,r=(a?a.appContext:c.appContext)||Hf,s={uid:zf++,vnode:c,type:n,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Et(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:P7(n,r),emitsOptions:C7(n,r),emit:null,emitted:null,propsDefaults:e2,inheritAttrs:n.inheritAttrs,ctx:e2,data:e2,props:e2,attrs:e2,slots:e2,refs:e2,setupState:e2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=Ml.bind(null,s),c.ce&&c.ce(s),s}let p2=null;const _7=()=>p2||P2;let v0,U1,Z8="__VUE_INSTANCE_SETTERS__";(U1=V6()[Z8])||(U1=V6()[Z8]=[]),U1.push(c=>p2=c),v0=c=>{U1.length>1?U1.forEach(a=>a(c)):U1[0](c)};const c4=c=>{v0(c),c.scope.on()},D1=()=>{p2&&p2.scope.off(),v0(null)};function W7(c){return c.vnode.shapeFlag&4}let C4=!1;function pf(c,a=!1){C4=a;const{props:e,children:n}=c.vnode,r=W7(c);Jl(c,e,r,a),af(c,n);const s=r?Vf(c,a):void 0;return C4=!1,s}function Vf(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=h7(new Proxy(c.ctx,$l));const{setup:n}=e;if(n){const r=c.setupContext=n.length>1?Cf(c):null;c4(c),r4();const s=C1(n,c,0,[c.props,r]);if(s4(),D1(),K5(s)){if(s.then(D1,D1),a)return s.then(i=>{c5(c,i,a)}).catch(i=>{b3(i,c,0)});c.asyncDep=s}else c5(c,s,a)}else $7(c,a)}function c5(c,a,e){_(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:s2(a)&&(c.setupState=H7(a)),$7(c,e)}let a5;function $7(c,a,e){const n=c.type;if(!c.render){if(!a&&a5&&!n.render){const r=n.template||m0(c).template;if(r){const{isCustomElement:s,compilerOptions:i}=c.appContext.config,{delimiters:o,compilerOptions:t}=n,l=v2(v2({isCustomElement:s,delimiters:o},i),t);n.render=a5(r,l)}}c.render=n.render||X2}{c4(c),r4();try{Ul(c)}finally{s4(),D1()}}}function Mf(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return k2(c,"get","$attrs"),a[e]}}))}function Cf(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return Mf(c)},slots:c.slots,emit:c.emit,expose:a}}function B3(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(H7(h7(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in u4)return u4[e](c)},has(a,e){return e in a||e in u4}}))}function gf(c,a=!0){return _(c)?c.displayName||c.name:c.name||a&&c.__name}function Lf(c){return _(c)&&"__vccOpts"in c}const Y=(c,a)=>vl(c,a,C4);function U7(c,a,e){const n=arguments.length;return n===2?s2(a)&&!R(a)?P6(a)?l2(c,null,[a]):l2(c,a):l2(c,null,a):(n>3?e=Array.prototype.slice.call(arguments,2):n===3&&P6(e)&&(e=[e]),l2(c,a,e))}const yf=Symbol.for("v-scx"),bf=()=>r3(yf),wf="3.3.13",xf="http://www.w3.org/2000/svg",P1=typeof document<"u"?document:null,e5=P1&&P1.createElement("template"),Nf={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,n)=>{const r=a?P1.createElementNS(xf,c):P1.createElement(c,e?{is:e}:void 0);return c==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:c=>P1.createTextNode(c),createComment:c=>P1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>P1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,n,r,s){const i=e?e.previousSibling:a.lastChild;if(r&&(r===s||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{e5.innerHTML=n?`<svg>${c}</svg>`:c;const o=e5.content;if(n){const t=o.firstChild;for(;t.firstChild;)o.appendChild(t.firstChild);o.removeChild(t)}a.insertBefore(o,e)}return[i?i.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},H1="transition",t4="animation",g4=Symbol("_vtc"),v3=(c,{slots:a})=>U7(Pl,kf(c),a);v3.displayName="Transition";const q7={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};v3.props=v2({},b7,q7);const k1=(c,a=[])=>{R(c)?c.forEach(e=>e(...a)):c&&c(...a)},n5=c=>c?R(c)?c.some(a=>a.length>1):c.length>1:!1;function kf(c){const a={};for(const P in c)P in q7||(a[P]=c[P]);if(c.css===!1)return a;const{name:e="v",type:n,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:i=`${e}-enter-active`,enterToClass:o=`${e}-enter-to`,appearFromClass:t=s,appearActiveClass:l=i,appearToClass:f=o,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:v=`${e}-leave-active`,leaveToClass:M=`${e}-leave-to`}=c,k=Sf(r),w=k&&k[0],E=k&&k[1],{onBeforeEnter:L,onEnter:p,onEnterCancelled:T,onLeave:C,onLeaveCancelled:I,onBeforeAppear:Z=L,onAppear:c2=p,onAppearCancelled:D=T}=a,q=(P,a2,d2)=>{S1(P,a2?f:o),S1(P,a2?l:i),d2&&d2()},K=(P,a2)=>{P._isLeaving=!1,S1(P,h),S1(P,M),S1(P,v),a2&&a2()},z2=P=>(a2,d2)=>{const A2=P?c2:p,t2=()=>q(a2,P,d2);k1(A2,[a2,t2]),r5(()=>{S1(a2,P?t:s),z1(a2,P?f:o),n5(A2)||s5(a2,n,w,t2)})};return v2(a,{onBeforeEnter(P){k1(L,[P]),z1(P,s),z1(P,i)},onBeforeAppear(P){k1(Z,[P]),z1(P,t),z1(P,l)},onEnter:z2(!1),onAppear:z2(!0),onLeave(P,a2){P._isLeaving=!0;const d2=()=>K(P,a2);z1(P,h),Pf(),z1(P,v),r5(()=>{P._isLeaving&&(S1(P,h),z1(P,M),n5(C)||s5(P,n,E,d2))}),k1(C,[P,d2])},onEnterCancelled(P){q(P,!1),k1(T,[P])},onAppearCancelled(P){q(P,!0),k1(D,[P])},onLeaveCancelled(P){K(P),k1(I,[P])}})}function Sf(c){if(c==null)return null;if(s2(c))return[m6(c.enter),m6(c.leave)];{const a=m6(c);return[a,a]}}function m6(c){return Tt(c)}function z1(c,a){a.split(/\s+/).forEach(e=>e&&c.classList.add(e)),(c[g4]||(c[g4]=new Set)).add(a)}function S1(c,a){a.split(/\s+/).forEach(n=>n&&c.classList.remove(n));const e=c[g4];e&&(e.delete(a),e.size||(c[g4]=void 0))}function r5(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let Af=0;function s5(c,a,e,n){const r=c._endId=++Af,s=()=>{r===c._endId&&n()};if(e)return setTimeout(s,e);const{type:i,timeout:o,propCount:t}=Tf(c,a);if(!i)return n();const l=i+"end";let f=0;const h=()=>{c.removeEventListener(l,v),s()},v=M=>{M.target===c&&++f>=t&&h()};setTimeout(()=>{f<t&&h()},o+1),c.addEventListener(l,v)}function Tf(c,a){const e=window.getComputedStyle(c),n=k=>(e[k]||"").split(", "),r=n(`${H1}Delay`),s=n(`${H1}Duration`),i=i5(r,s),o=n(`${t4}Delay`),t=n(`${t4}Duration`),l=i5(o,t);let f=null,h=0,v=0;a===H1?i>0&&(f=H1,h=i,v=s.length):a===t4?l>0&&(f=t4,h=l,v=t.length):(h=Math.max(i,l),f=h>0?i>l?H1:t4:null,v=f?f===H1?s.length:t.length:0);const M=f===H1&&/\b(transform|all)(,|$)/.test(n(`${H1}Property`).toString());return{type:f,timeout:h,propCount:v,hasTransform:M}}function i5(c,a){for(;c.length<a.length;)c=c.concat(c);return Math.max(...a.map((e,n)=>o5(e)+o5(c[n])))}function o5(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function Pf(){return document.body.offsetHeight}function Ff(c,a,e){const n=c[g4];n&&(a=(a?[a,...n]:[...n]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const H0=Symbol("_vod"),t5={beforeMount(c,{value:a},{transition:e}){c[H0]=c.style.display==="none"?"":c.style.display,e&&a?e.beforeEnter(c):l4(c,a)},mounted(c,{value:a},{transition:e}){e&&a&&e.enter(c)},updated(c,{value:a,oldValue:e},{transition:n}){!a!=!e&&(n?a?(n.beforeEnter(c),l4(c,!0),n.enter(c)):n.leave(c,()=>{l4(c,!1)}):l4(c,a))},beforeUnmount(c,{value:a}){l4(c,a)}};function l4(c,a){c.style.display=a?c[H0]:"none"}const G7=Symbol("");function j7(c){const a=_7();if(!a)return;const e=a.ut=(r=c(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(s=>B6(s,r))},n=()=>{const r=c(a.proxy);F6(a.subTree,r),e(r)};kl(n),N4(()=>{const r=new MutationObserver(n);r.observe(a.subTree.el.parentNode,{childList:!0}),T3(()=>r.disconnect())})}function F6(c,a){if(c.shapeFlag&128){const e=c.suspense;c=e.activeBranch,e.pendingBranch&&!e.isHydrating&&e.effects.push(()=>{F6(e.activeBranch,a)})}for(;c.component;)c=c.component.subTree;if(c.shapeFlag&1&&c.el)B6(c.el,a);else if(c.type===x2)c.children.forEach(e=>F6(e,a));else if(c.type===s3){let{el:e,anchor:n}=c;for(;e&&(B6(e,a),e!==n);)e=e.nextSibling}}function B6(c,a){if(c.nodeType===1){const e=c.style;let n="";for(const r in a)e.setProperty(`--${r}`,a[r]),n+=`--${r}: ${a[r]};`;e[G7]=n}}function Bf(c,a,e){const n=c.style,r=u2(e);if(e&&!r){if(a&&!u2(a))for(const s in a)e[s]==null&&I6(n,s,"");for(const s in e)I6(n,s,e[s])}else{const s=n.display;if(r){if(a!==e){const i=n[G7];i&&(e+=";"+i),n.cssText=e}}else a&&c.removeAttribute("style");H0 in c&&(n.display=s)}}const l5=/\s*!important$/;function I6(c,a,e){if(R(e))e.forEach(n=>I6(c,a,n));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const n=If(c,a);l5.test(e)?c.setProperty(n4(n),e.replace(l5,""),"important"):c[n]=e}}const f5=["Webkit","Moz","ms"],h6={};function If(c,a){const e=h6[a];if(e)return e;let n=J2(a);if(n!=="filter"&&n in c)return h6[a]=n;n=g3(n);for(let r=0;r<f5.length;r++){const s=f5[r]+n;if(s in c)return h6[a]=s}return a}const m5="http://www.w3.org/1999/xlink";function Rf(c,a,e,n,r){if(n&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(m5,a.slice(6,a.length)):c.setAttributeNS(m5,a,e);else{const s=Dt(a);e==null||s&&!J5(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function Df(c,a,e,n,r,s,i){if(a==="innerHTML"||a==="textContent"){n&&i(n,r,s),c[a]=e??"";return}const o=c.tagName;if(a==="value"&&o!=="PROGRESS"&&!o.includes("-")){c._value=e;const l=o==="OPTION"?c.getAttribute("value"):c.value,f=e??"";l!==f&&(c.value=f),e==null&&c.removeAttribute(a);return}let t=!1;if(e===""||e==null){const l=typeof c[a];l==="boolean"?e=J5(e):e==null&&l==="string"?(e="",t=!0):l==="number"&&(e=0,t=!0)}try{c[a]=e}catch{}t&&c.removeAttribute(a)}function Ef(c,a,e,n){c.addEventListener(a,e,n)}function Of(c,a,e,n){c.removeEventListener(a,e,n)}const h5=Symbol("_vei");function _f(c,a,e,n,r=null){const s=c[h5]||(c[h5]={}),i=s[a];if(n&&i)i.value=n;else{const[o,t]=Wf(a);if(n){const l=s[a]=qf(n,r);Ef(c,o,l,t)}else i&&(Of(c,o,i,t),s[a]=void 0)}}const u5=/(?:Once|Passive|Capture)$/;function Wf(c){let a;if(u5.test(c)){a={};let n;for(;n=c.match(u5);)c=c.slice(0,c.length-n[0].length),a[n[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):n4(c.slice(2)),a]}let u6=0;const $f=Promise.resolve(),Uf=()=>u6||($f.then(()=>u6=0),u6=Date.now());function qf(c,a){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;I2(Gf(n,e.value),a,5,[n])};return e.value=c,e.attached=Uf(),e}function Gf(c,a){if(R(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(n=>r=>!r._stopped&&n&&n(r))}else return a}const v5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,jf=(c,a,e,n,r=!1,s,i,o,t)=>{a==="class"?Ff(c,n,r):a==="style"?Bf(c,e,n):V3(a)?X6(a)||_f(c,a,e,n,i):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Yf(c,a,n,r))?Df(c,a,n,s,i,o,t):(a==="true-value"?c._trueValue=n:a==="false-value"&&(c._falseValue=n),Rf(c,a,n,r))};function Yf(c,a,e,n){if(n)return!!(a==="innerHTML"||a==="textContent"||a in c&&v5(a)&&_(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const r=c.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return v5(a)&&u2(e)?!1:a in c}const Kf=["ctrl","shift","alt","meta"],Xf={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>Kf.some(e=>c[`${e}Key`]&&!a.includes(e))},N2=(c,a)=>{const e=c._withMods||(c._withMods={}),n=a.join(".");return e[n]||(e[n]=(r,...s)=>{for(let i=0;i<a.length;i++){const o=Xf[a[i]];if(o&&o(r,a))return}return c(r,...s)})},Qf=v2({patchProp:jf},Nf);let H5;function Jf(){return H5||(H5=nf(Qf))}const Zf=(...c)=>{const a=Jf().createApp(...c),{mount:e}=a;return a.mount=n=>{const r=cm(n);if(!r)return;const s=a._component;!_(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const i=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},a};function cm(c){return u2(c)?document.querySelector(c):c}const G4=[{songName:"1.5 кг Отличного Пюре - Эмо.mp3",sort:181,bestParties:[{start:25,end:84}],notAggressive:!0},{songName:"Angel Vivaldi - A Martian Winter.mp3"},{songName:"Angel Vivaldi - An Erisian Autumn.mp3",sort:50,bestParties:[{start:78,end:104},{start:176,end:220},{start:246,end:268}],notAggressive:!0},{songName:"As I Lay Dying - Forever.mp3",sort:210,bestParties:[{start:0,end:25}]},{songName:"As I Lay Dying - Nothing Left [2007].mp3",sort:40,bestParties:[{start:0,end:57}]},{songName:"As I Lay Dying - The Sound Оf Truth.mp3",sort:60,bestParties:[{start:0,end:36},{start:59,end:121}]},{songName:"Aspirin Rose - Fucking Perfect (Pink cover).mp3"},{songName:"August Burns Red - A Shot Below The Belt.mp3",sort:142,bestParties:[{start:0,end:30},{start:90,end:114},{start:164,end:175}]},{songName:"August Burns Red - Barbarian.mp3",sort:20,bestParties:[{start:21,end:32},{start:70,end:88},{start:113,end:152}]},{songName:"August Burns Red - Consumer.mp3"},{songName:"August Burns Red - Indonesia.mp3",sort:141,bestParties:[{start:84,end:117},{start:161,end:180}]},{songName:"August Burns Red - Meridian.mp3",notAggressive:!0},{songName:"August Burns Red - Truth of a Liar.mp3"},{songName:"August Burns Red - Your Little Suburbia Is in Ruins.mp3",sort:70,bestParties:[{start:12,end:27},{start:107,end:125},{start:146,end:178}]},{songName:"Anaal Nathrakh - Between Shit and Piss We Are Born.mp3"},{songName:"Anaal Nathrakh - In The Constellation Of The Black Widow.mp3",sort:220,bestParties:[{start:65,end:85},{start:114,end:141}]},{songName:"Between the Buried and Me - All Bodies.mp3"},{songName:"Between The Buried And Me - Ants Of The Sky.mp3",sort:113,bestParties:[{start:0,end:108}]},{songName:"Between The Buried And Me - Sun Of Nothing.mp3"},{songName:"Between The Buried And Me - Swim To The Moon.mp3",sort:10,bestParties:[{start:135,end:160},{start:500,end:551},{start:982,end:1022}]},{songName:"Breakwater - Eleven.mp3"},{songName:"Breakwater - five.mp3"},{songName:"Bullet For My Valentine - Hand Of Blood.mp3"},{songName:"Cerebral Bore - The Bald Cadaver.mp3",sort:280,bestParties:[{start:5.5,end:50}]},{songName:"Children Of Bodom - Are You Dead Yet.mp3",sort:110,bestParties:[{start:82,end:114}]},{songName:"Cosmonauts Day - The Captain.mp3",notAggressive:!0},{songName:"Death In Vegas - Dirge.mp3"},{songName:"Dragonforce - The Flame of Youth.mp3",sort:120,bestParties:[{start:46,end:65},{start:289,end:317}]},{songName:"If These Trees Could Talk - From Roots to Needles.mp3",notAggressive:!0},{songName:"In Flames - Clayman.mp3",sort:130,bestParties:[{start:0,end:21}]},{songName:"In Flames - Reflect the Storm.mp3"},{songName:"Killing Floor - Abandon All.mp3"},{songName:"Killing Floor OST - Wake.mp3",notAggressive:!0},{songName:"Long Distance Calling - Black Paper Planes.mp3",notAggressive:!0},{songName:"Machine Head - Beautiful Mourning.mp3"},{songName:"Machine Head - Hallowed Be Thy Name.mp3"},{songName:"Machine Head - Halo.mp3"},{songName:"Ozoi The Maid - Unfortunately.mp3",sort:112,bestParties:[{start:59,end:84},{start:165,end:218},{start:240,end:253}]},{songName:"Ozoi The Maid Yakui The Maid - Lanterns.mp3",sort:111,bestParties:[{start:146,end:218}]},{songName:"Ozoi The Maid Yakui The Maid - Wonderland.mp3",sort:30,bestParties:[{start:115,end:243},{start:355,end:442}]},{songName:"Ozoi The Maid, Yakui The Maid - Frontier.mp3"},{songName:"Psygnosis - FIIIX 2.0.mp3"},{songName:"Psygnosis - Lost in Oblivion.mp3",sort:140,bestParties:[{start:292,end:356}]},{songName:"Psygnosis - MehMeh.mp3"},{songName:"Psygnosis - Phrase 7.mp3",notAggressive:!0},{songName:"Psygnosis - Synaptic Plasticity.mp3"},{songName:"Psygnosis - The Judgement.mp3"},{songName:"Raunchy - To the Lighthouse.mp3"},{songName:"Raunchy - Twelve Feet Tall.mp3",sort:150,bestParties:[{start:65,end:96}]},{songName:"Raunchy - Wasteland Discotheque.mp3",sort:190,bestParties:[{start:0,end:34},{start:63,end:101}]},{songName:"Rhapsody - The Mighty Ride of the Firelord.mp3"},{songName:"Rhapsody of Fire - Wisdom of the Kings.mp3"},{songName:"Rise Of The Northstar - The New Path.mp3"},{songName:"Rise Of The Northstar - What The Fuck.mp3",sort:160,bestParties:[{start:45,end:79}]},{songName:"Siberian Meat Grinder feat Distemper - Пламя в Груди.mp3",sort:211,bestParties:[{start:49,end:68}]},{songName:"The Doors - Alabama song.mp3",notAggressive:!0},{songName:"The Doors - The End.mp3",notAggressive:!0},{songName:"The Faceless - Shake The Disease.mp3"},{songName:"The Five Stars - Atom Bomb Baby.mp3",notAggressive:!0},{songName:"The HAARP Machine - Esoteric Agenda.mp3"},{songName:"Toundra - Bizancio Byzantium.mp3",sort:180,bestParties:[{start:127,end:224},{start:406,end:480}],notAggressive:!0},{songName:"URO & .corridoiokraut. - Nappi.mp3",notAggressive:!0},{songName:"What Mad Universe - Colossus.mp3",notAggressive:!0},{songName:"What Mad Universe - the world of leviathan.mp3",notAggressive:!0},{songName:"What Mad Universe - head of column.mp3",sort:170,bestParties:[{start:30,end:65}],notAggressive:!0},{songName:"What Mad Universe - mythical sacred firebird.mp3",notAggressive:!0},{songName:"What Mad Universe - Nebula My Love.mp3",sort:80,bestParties:[{start:162,end:246},{start:260,end:358}],notAggressive:!0},{songName:"What Mad Universe - Starborne.mp3",sort:90,bestParties:[{start:85,end:105},{start:144,end:185}],notAggressive:!0},{songName:"Within The Ruins - Ataxia II.mp3"},{songName:"Within The Ruins - Beautiful Agony.mp3"},{songName:"ZEROMANCER - Dr. Online.mp3"},{songName:"zYnthetic - Abandon All v3.mp3",sort:100,bestParties:[{start:0,end:30},{start:60,end:89}],notAggressive:!0},{songName:"zYnthetic - SSplug.mp3"}];function am(){const c=h2(G4),a=h2(G4.filter(C=>C.sort)),e=h2(G4.filter(C=>C.notAggressive)),n=h2(0),r=h2(0);A3(()=>{c.value=G4,r.value=v.value.length});const s=Y(()=>{const C="/player_with_my_favorite_music/";return v.value[n.value]?`${C}music/${M.value.songName}`:""}),i=Y(()=>[...a.value].sort((C,I)=>C.sort-I.sort)),o=h2(1);function t(C){!(o.value===4&&C.id===2)&&!(o.value===2&&C.id===4)&&(n.value=0),o.value=C.id,r.value=h.value.length}L7(()=>{});const l=Y(()=>{switch(o.value){case 1:return c.value;case 2:return i.value;case 3:return e.value;case 4:return i.value;default:return[]}}),f=Y(()=>o.value===4?i.value[n.value].bestParties:[]),h=Y(()=>p.value?k():l.value),v=Y(()=>h.value.map(C=>C.songName)),M=Y(()=>h.value[n.value]);function k(){return l.value.map(C=>({...C,sort:Math.random()})).sort((C,I)=>C.sort-I.sort).map(({sort:C,...I})=>I)}function w(){n.value+=1,n.value>=h.value.length&&(n.value=0)}function E(){n.value=(n.value-1+h.value.length)%h.value.length}function L(C){n.value=C}const p=h2(!1);function T(){p.value=!p.value}return{totalNumbSongs:r,defaultTrackList:c,topTrackList:a,bestParties:f,nextTrack:w,previousTrack:E,pathToCurrentFile:s,sortingTopTrackList:i,currentTrackIndex:n,changeTab:t,selectTrack:L,tabSelected:o,isRandomTracks:p,handlerRandomBtn:T,currentTracks:h,currentTracksList:v,currentSong:M}}const em=Z2({name:"TrackList",props:{currentTracks:{type:Array,default:()=>[]},currentTrackIndex:{type:Number,default:0}},emits:["select-track-from-list"],setup(c,{emit:a}){const e=Y(()=>{var s;return(s=c.currentTracks)==null?void 0:s.map(i=>{const o=i.lastIndexOf("/"),t=i==null?void 0:i.lastIndexOf(".");return i&&i.substring(o+1,t)||""})});Q1(()=>c.currentTrackIndex,()=>{n()});async function n(){await d7();const s=document.querySelector(".selected");s==null||s.scrollIntoView({behavior:"smooth",block:"center"})}function r(s){a("select-track-from-list",s)}return{currentTracksWithCorrectNames:e,selectTrackFromList:r}}}),m1=(c,a)=>{const e=c.__vccOpts||c;for(const[n,r]of a)e[n]=r;return e},nm=["onClick"];function rm(c,a,e,n,r,s){return V2(),C2("ul",{ref:"sidebarRef",class:"sidebar",onClick:a[0]||(a[0]=N2(()=>{},["stop"]))},[(V2(!0),C2(x2,null,f0(c.currentTracksWithCorrectNames,(i,o)=>(V2(),C2("li",{key:o,class:Q2({selected:o===c.currentTrackIndex}),onClick:N2(t=>c.selectTrackFromList(o),["stop"])},$2(o+1)+". "+$2(i),11,nm))),128))],512)}const sm=m1(em,[["render",rm],["__scopeId","data-v-5b23505f"]]),im=Z2({props:{tabSelected:{type:Number,default:1}},emits:["change-tab"],setup(c,{emit:a}){const e=[{label:"All music",id:1,url:"all"},{label:"Top",id:2,url:"top"},{label:"Top Shorts",id:4,url:"shorts"},{label:"Not aggressive",id:3,url:"not_aggressive"}];function n(r){c.tabSelected!==r.id&&a("change-tab",r)}return{btnHandler:n,tabsOption:e}}}),om={class:"tabs"},tm=["onClick"];function lm(c,a,e,n,r,s){return V2(),C2("div",om,[(V2(!0),C2(x2,null,f0(c.tabsOption,(i,o)=>(V2(),C2("button",{key:o,class:Q2({active:i.id===c.tabSelected}),onClick:N2(t=>c.btnHandler(i),["stop"])},$2(i.label),11,tm))),128))])}const fm=m1(im,[["render",lm],["__scopeId","data-v-0b829837"]]),mm="modulepreload",hm=function(c){return"/player_with_my_favorite_music/"+c},z5={},n1=function(a,e,n){let r=Promise.resolve();if(e&&e.length>0){const s=document.getElementsByTagName("link");r=Promise.all(e.map(i=>{if(i=hm(i),i in z5)return;z5[i]=!0;const o=i.endsWith(".css"),t=o?'[rel="stylesheet"]':"";if(!!n)for(let h=s.length-1;h>=0;h--){const v=s[h];if(v.href===i&&(!o||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${t}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":mm,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((h,v)=>{f.addEventListener("load",h),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>a()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})},z0=Z2({name:"MainInfoBand",props:{songName:{type:String,default:""}},setup(c){const a=h2({}),e=h2(window.innerWidth),n=h2(window.innerHeight),r=()=>{e.value=window.innerWidth,n.value=window.innerHeight};A3(async()=>{const l=Object.assign({"/src/assets/images/1.5 кг Отличного Пюре.jpg":()=>n1(()=>import("./1.5 кг Отличного Пюре-OtALhitf.js"),__vite__mapDeps([])),"/src/assets/images/Anaal Nathrakh.jpg":()=>n1(()=>import("./Anaal Nathrakh-EzGp_TLw.js"),__vite__mapDeps([])),"/src/assets/images/As I Lay Dying.jpg":()=>n1(()=>import("./As I Lay Dying-28Nx7ZD0.js"),__vite__mapDeps([])),"/src/assets/images/August Burns Red.jpg":()=>n1(()=>import("./August Burns Red-MIqwgacb.js"),__vite__mapDeps([])),"/src/assets/images/Between The Buried And Me.webp":()=>n1(()=>import("./Between The Buried And Me-TSs49cb7.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid Yakui The Maid.jpg":()=>n1(()=>import("./Ozoi The Maid Yakui The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid.jpg":()=>n1(()=>import("./Ozoi The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/What Mad Universe.jpg":()=>n1(()=>import("./What Mad Universe-s6ECnjUY.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.png":()=>n1(()=>import("./default_logo-hDaDKpVk.js"),__vite__mapDeps([]))});for(const f in l){const h=f.replace(/^.*\/(.*)\.\w+$/,"$1");a.value[h]=(await l[f]()).default}}),N4(()=>{window.addEventListener("resize",r)}),T3(()=>{window.removeEventListener("resize",r)});const s=Y(()=>{var f;const l=(f=c.songName)==null?void 0:f.lastIndexOf(".");return c.songName&&c.songName.substring(0,l)||""}),i=Y(()=>{const[l,f]=s.value.split(" - ");return{bandName:l,songName:f}}),o=Y(()=>{const{bandName:l}=i.value;return a.value[l]||a.value.default_logo}),t=Y(()=>{function l(f,h=1){return{width:`${h*f}px`,height:`${h*f}px`}}return e.value>n.value?l(n.value,.6):l(e.value,.8)});return Q1(()=>c.songName,()=>{var l,f;if("mediaSession"in navigator&&o.value){const h=["96x96","128x128","192x192","256x256","384x384","512x512"];navigator.mediaSession.metadata=new MediaMetadata({title:((l=i.value)==null?void 0:l.songName)||"",artist:((f=i.value)==null?void 0:f.bandName)||"",artwork:h.map(v=>({src:o.value,sizes:v,type:"image/png"}))})}}),{getInfoBand:i,getLogoImage:o,getImageSizes:t}}}),d5=()=>{j7(c=>({"22dc46c0":c.getImageSizes.width,"1edd976d":c.getImageSizes.height}))},p5=z0.setup;z0.setup=p5?(c,a)=>(d5(),p5(c,a)):d5;const um=["src"],vm={class:"artist-info"},Hm={class:"band"},zm={class:"song"};function dm(c,a,e,n,r,s){return V2(),C2("div",null,[U("img",{src:c.getLogoImage,class:"album-image",alt:""},null,8,um),U("div",vm,[U("div",Hm,$2(c.getInfoBand.bandName),1),U("div",zm,$2(c.getInfoBand.songName),1)])])}const pm=m1(z0,[["render",dm],["__scopeId","data-v-dbadf521"]]),Vm=Z2({name:"VolumeControl",props:{volume:{type:Number,default:.8},hasText:{type:Boolean,default:!1}},emits:["volume-change","show-text-song"],setup(c,{emit:a}){const e=Y(()=>c.volume*100),n=Y(()=>c.volume>0?'<i class="fas fa-volume-up"/>':'<i class="fas fa-volume-off"/>'),r=Y(()=>c.hasText?"":"disabled");function s(l){const f=parseFloat(l.target.value)/100;a("volume-change",f)}function i(l){a("volume-change",l)}function o(){c.hasText&&a("show-text-song")}function t(){c.volume>0?i(0):i(.8)}return{convertToValue:e,volumeHandler:s,onIconVolumeClick:t,onIconShowTextClick:o,iconVolume:n,iconShowTextClass:r}}}),Mm=c=>(t0("data-v-9b44ca47"),c=c(),l0(),c),Cm={class:"volume-control"},gm=["innerHTML"],Lm=["value"],ym=Mm(()=>U("i",{class:"fa-solid fa-text-height"},null,-1)),bm=[ym];function wm(c,a,e,n,r,s){return V2(),C2("div",Cm,[U("button",{class:"player-button margin",onClick:a[0]||(a[0]=N2((...i)=>c.onIconVolumeClick&&c.onIconVolumeClick(...i),["stop"]))},[U("span",{innerHTML:c.iconVolume},null,8,gm)]),U("input",{class:"margin",type:"range",value:c.convertToValue,min:"0",max:"100",step:"1",onInput:a[1]||(a[1]=(...i)=>c.volumeHandler&&c.volumeHandler(...i))},null,40,Lm),U("button",{class:Q2(["show-text",c.iconShowTextClass]),onClick:a[2]||(a[2]=N2((...i)=>c.onIconShowTextClick&&c.onIconShowTextClick(...i),["stop"]))},bm,2)])}const xm=m1(Vm,[["render",wm],["__scopeId","data-v-9b44ca47"]]),Nm=Z2({name:"ProgressControl",props:{currentTime:{type:Number,default:0},totalTime:{type:Number,default:0},bestParties:{type:Array,default:()=>[]}},emits:["time-change","time-change-line"],setup(c,{emit:a}){const e=Y(()=>c.currentTime/c.totalTime*100),n=Y(()=>o(c.currentTime)),r=Y(()=>""),s=Y(()=>o(c.totalTime)),i=Y(()=>{var h;const f=Number((100/c.totalTime).toFixed(2));return(h=c.bestParties)==null?void 0:h.map(v=>({left:`${v.start*f}%`,right:`${100-v.end*f}%`}))});function o(f){const h=Math.floor(f/60),v=Math.floor(f%60);return`${h}:${String(v).padStart(2,"0")}`}function t(f){var w;const h=((w=f.currentTarget)==null?void 0:w.parentNode)||null,{clientWidth:v}=h,M=h.getBoundingClientRect(),k=f.clientX-M.left;a("time-change-line",k/v)}function l(f){a("time-change",f)}return{convertToValue:e,convertCurrentTime:n,convertTotalTime:s,timeHandler:l,timeHandlerEmit:t,convertBestPartiesInPercentage:i,convertCurrentTimeSeconds:r}}}),km={class:"progress-control"},Sm=["value"],Am={class:"time-display"},Tm={key:0,class:"line"};function Pm(c,a,e,n,r,s){return V2(),C2("div",km,[U("input",{type:"range",min:"0",max:"100",value:c.convertToValue,step:"1",onInput:a[0]||(a[0]=(...i)=>c.timeHandler&&c.timeHandler(...i))},null,40,Sm),U("div",Am,[U("span",null,$2(c.convertCurrentTime),1),U("span",null,$2(c.convertCurrentTimeSeconds),1),U("span",null,$2(c.convertTotalTime),1)]),c.bestParties.length?(V2(),C2("div",Tm,[(V2(!0),C2(x2,null,f0(c.convertBestPartiesInPercentage,(i,o)=>(V2(),C2("div",{key:o,style:L3({left:i.left,right:i.right}),class:"best-section",onClick:a[1]||(a[1]=N2((...t)=>c.timeHandlerEmit&&c.timeHandlerEmit(...t),["stop"]))},null,4))),128))])):uf("",!0)])}const Fm=m1(Nm,[["render",Pm],["__scopeId","data-v-0d9f4faf"]]),Bm=Z2({name:"MainControl",props:{isPlaying:{type:Boolean,default:!1}},emits:["previous","play-pause","next"],setup(c,{emit:a}){function e(){a("previous")}const n=Y(()=>c.isPlaying?'<i class="fas fa-pause"/>':' <i class="fas fa-play"/>');function r(){a("play-pause")}function s(){a("next")}return{previousButtonHandler:e,playerButtonHandler:r,iconPlayerButton:n,nextButtonHandler:s}}}),Y7=c=>(t0("data-v-1bded451"),c=c(),l0(),c),Im={class:"main-control"},Rm=Y7(()=>U("i",{class:"fas fa-step-backward"},null,-1)),Dm=[Rm],Em=["innerHTML"],Om=Y7(()=>U("i",{class:"fas fa-step-forward"},null,-1)),_m=[Om];function Wm(c,a,e,n,r,s){return V2(),C2("div",Im,[U("button",{class:"player-button",onClick:a[0]||(a[0]=N2((...i)=>c.previousButtonHandler&&c.previousButtonHandler(...i),["stop"]))},Dm),U("button",{class:"player-button",onClick:a[1]||(a[1]=N2((...i)=>c.playerButtonHandler&&c.playerButtonHandler(...i),["stop"]))},[U("span",{innerHTML:c.iconPlayerButton},null,8,Em)]),U("button",{class:"player-button",onClick:a[2]||(a[2]=N2((...i)=>c.nextButtonHandler&&c.nextButtonHandler(...i),["stop"]))},_m)])}const $m=m1(Bm,[["render",Wm],["__scopeId","data-v-1bded451"]]),Um=Z2({name:"OtherControl",props:{currentNumbSong:{type:Number,default:0},totalNumbSongs:{type:Number,default:0},isRandomTracks:{type:Boolean,default:!1},isRepeatMode:{type:Boolean,default:!1},isShowTrackList:{type:Boolean,default:!1},isDarkTheme:{type:Boolean,default:!1}},emits:["random-click","show-list-click","repeat-mode-click","change-theme"],setup(c,{emit:a}){function e(){a("random-click")}function n(){a("repeat-mode-click")}function r(){a("show-list-click")}function s(){a("change-theme")}const i=Y(()=>c.isDarkTheme?'<i class="fa-solid fa-toggle-on"/>':'<i class="fa-solid fa-toggle-off"/>'),o=Y(()=>c.isShowTrackList?'<i class="fas fa-bars fa-rotate-90"/>':'<i class="fas fa-bars"/>');return{iconClickRandomHandler:e,iconClickRepeatModeHandler:n,iconClickShowListHandler:r,iconClickChangeThemeHandler:s,iconToggle:i,iconBar:o}}}),K7=c=>(t0("data-v-dbf63d29"),c=c(),l0(),c),qm={class:"other"},Gm=K7(()=>U("i",{class:"fas fa-shuffle"},null,-1)),jm=[Gm],Ym=K7(()=>U("i",{class:"fas fa-repeat"},null,-1)),Km=[Ym],Xm={class:"song-display"},Qm=["innerHTML"],Jm=["innerHTML"];function Zm(c,a,e,n,r,s){return V2(),C2("div",qm,[U("button",{class:Q2({active:c.isRandomTracks}),onClick:a[0]||(a[0]=N2((...i)=>c.iconClickRandomHandler&&c.iconClickRandomHandler(...i),["stop"]))},jm,2),U("button",{class:Q2({active:c.isRepeatMode}),onClick:a[1]||(a[1]=N2((...i)=>c.iconClickRepeatModeHandler&&c.iconClickRepeatModeHandler(...i),["stop"]))},Km,2),U("div",Xm,[U("span",null,$2(c.currentNumbSong),1),O7("/"),U("span",null,$2(c.totalNumbSongs),1)]),U("button",{onClick:a[2]||(a[2]=N2((...i)=>c.iconClickChangeThemeHandler&&c.iconClickChangeThemeHandler(...i),["stop"]))},[U("span",{innerHTML:c.iconToggle},null,8,Qm)]),U("button",{class:Q2({active:c.isShowTrackList}),onClick:a[3]||(a[3]=N2((...i)=>c.iconClickShowListHandler&&c.iconClickShowListHandler(...i),["stop"]))},[U("span",{innerHTML:c.iconBar},null,8,Jm)],2)])}const ch=m1(Um,[["render",Zm],["__scopeId","data-v-dbf63d29"]]),ah=Z2({props:{songText:{type:String,default:""}}}),eh={class:"sidebar"},nh=["textContent"];function rh(c,a,e,n,r,s){return V2(),C2("div",eh,[U("span",{textContent:$2(c.songText)},null,8,nh)])}const sh=m1(ah,[["render",rh],["__scopeId","data-v-a20903c5"]]),ih={"1.5 кг Отличного Пюре - Эмо.mp3":`Каждый раз понимать, как легко потерять
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
To take your place when you are gone`},d0=Z2({name:"MainComponent",components:{TrackList:sm,PageTabs:fm,MainInfoBand:pm,VolumeControl:xm,ProgressControl:Fm,MainControl:$m,OtherControl:ch,SongText:sh},setup(){const{bestParties:c,nextTrack:a,previousTrack:e,pathToCurrentFile:n,sortingTopTrackList:r,currentTrackIndex:s,changeTab:i,selectTrack:o,tabSelected:t,isRandomTracks:l,handlerRandomBtn:f,totalNumbSongs:h,currentTracks:v,currentSong:M,currentTracksList:k}=am();A3(async()=>{E();const W=[["play",()=>{t2(),navigator.mediaSession.playbackState="playing"}],["pause",()=>{t2(),navigator.mediaSession.playbackState="paused"}],["nexttrack",()=>{a()}],["previoustrack",()=>{e()}],["seekto",o2=>{console.log(o2)}]];for(const[o2,R2]of W)try{navigator.mediaSession.setActionHandler(o2,R2)}catch{console.log(`The media session action "${o2}" is not supported yet.`)}});const w=h2(!1);function E(){(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")==="dark"?w.value=!0:w.value=!1}function L(){w.value=!w.value}const p=h2(null),T=h2(0),C=h2(.8);function I(W){a2(W),A2.value&&d2()}function Z(){y2.value?p.value.currentTime=0:a()}function c2(W){if(p.value){const o2=W.target;p.value.currentTime=Number(o2.value)/100*(p.value.duration||0)}}function D(W){p.value&&(p.value.currentTime=W*(p.value.duration||0))}function q(W){T.value=W.target.currentTime,navigator.mediaSession.setPositionState({position:T.value})}function K(W){C.value=W.target.volume}function z2(W){p.value.volume=W}const P=h2(0);function a2(W){const o2=W.target;P.value=o2.duration,navigator.mediaSession.setPositionState({duration:o2.duration,playbackRate:1,position:0})}function d2(){var W;try{(W=p.value)==null||W.play().then(o2=>o2)}catch(o2){console.log("error",o2)}}const A2=h2(!1);function t2(){var W;A2.value=!A2.value,A2.value?d2():(W=p.value)==null||W.pause()}function i2(W){const o2=r.value[s.value].bestParties;for(let R2=0;R2<o2.length;R2++){const m=o2[R2];if(W<m.start){console.log("start"),p.value.currentTime=m.start;return}else if(W>=m.start&&W<=m.end){console.log("continue"),W>=m.end-2;return}}console.log("nextTrack"),Z()}L7(()=>{t.value===4&&A2.value&&s&&i2(T.value)});const X=h2("500px");N4(()=>{const W=document.querySelector(".main_control_ref"),o2=document.querySelector(".container"),R2=W.getBoundingClientRect(),m=o2==null?void 0:o2.getBoundingClientRect();X.value=`${Math.abs(R2.top-m.top)+18}px`});function c1(){p.value.currentTime<=20||t.value===4?e():p.value.currentTime=0}const a1=h2(!1);function e1(){a1.value=!a1.value}const g2=h2(!1);function R4(){g2.value=!g2.value}function n6(){a1.value=!1,g2.value=!1}function r6(W){o(W),A2.value?d2():t2()}const y2=h2(!1);function W1(){y2.value=!y2.value}const D4=Y(()=>ih[M.value.songName]||"");return{audioPlayer:p,isPlaying:A2,currentTime:T,volume:C,onVolumeUpdate:K,totalTime:P,isRandomTracks:l,pathToCurrentFile:n,currentTracks:v,currentTrackIndex:s,currentTracksList:k,totalNumbSongs:h,currentSong:M,handlerCanPlay:I,handlerEnded:Z,handlerTimeChange:c2,handlerTimeChangeLine:D,onTimeUpdate:q,setVolume:z2,playTrack:d2,togglePlayPause:t2,nextTrack:a,previousTrackHandler:c1,handlerRandomBtn:f,handlerShowListBtn:e1,handlerSelectTrack:r6,tabSelected:t,changeTab:i,isShowTrackList:a1,repeatModeChange:W1,isRepeatMode:y2,bestParties:c,isDarkTheme:w,handlerChangeThemeBtn:L,handlerShowSongTextBtn:R4,isShowSongText:g2,closeAllBars:n6,currentSongText:D4,distanceBetweenComponents:X}}}),V5=()=>{j7(c=>({"4390c8da":c.distanceBetweenComponents}))},M5=d0.setup;d0.setup=M5?(c,a)=>(V5(),M5(c,a)):V5;const oh={class:"container"},th=["src"];function lh(c,a,e,n,r,s){const i=v1("TrackList"),o=v1("SongText"),t=v1("PageTabs"),l=v1("MainInfoBand"),f=v1("VolumeControl"),h=v1("ProgressControl"),v=v1("MainControl"),M=v1("OtherControl");return V2(),C2("main",{class:Q2([c.isDarkTheme?"dark":"light"]),onClick:a[4]||(a[4]=N2((...k)=>c.closeAllBars&&c.closeAllBars(...k),["stop"]))},[U("div",oh,[l2(v3,{name:"slide-track-list"},{default:b6(()=>[W8(l2(i,{"current-track-index":c.currentTrackIndex,"current-tracks":c.currentTracksList,class:"top_bar",onSelectTrackFromList:c.handlerSelectTrack},null,8,["current-track-index","current-tracks","onSelectTrackFromList"]),[[t5,c.isShowTrackList]])]),_:1}),l2(v3,{name:"slide-song-text"},{default:b6(()=>[W8(l2(o,{"song-text":c.currentSongText,class:"top_bar"},null,8,["song-text"]),[[t5,c.isShowSongText]])]),_:1}),l2(t,{"tab-selected":c.tabSelected,onChangeTab:c.changeTab},null,8,["tab-selected","onChangeTab"]),l2(l,{"song-name":c.currentSong.songName},null,8,["song-name"]),l2(f,{"has-text":!!c.currentSongText.length,volume:c.volume,onVolumeChange:c.setVolume,onShowTextSong:c.handlerShowSongTextBtn},null,8,["has-text","volume","onVolumeChange","onShowTextSong"]),l2(h,{"best-parties":c.bestParties,"current-time":c.currentTime,"total-time":c.totalTime,onTimeChange:c.handlerTimeChange,onTimeChangeLine:c.handlerTimeChangeLine},null,8,["best-parties","current-time","total-time","onTimeChange","onTimeChangeLine"]),l2(v,{ref:"main_control_ref",class:"main_control_ref","is-playing":c.isPlaying,onPrevious:c.previousTrackHandler,onNext:c.nextTrack,onPlayPause:c.togglePlayPause},null,8,["is-playing","onPrevious","onNext","onPlayPause"]),l2(M,{"current-numb-song":c.currentTrackIndex+1,"total-numb-songs":c.totalNumbSongs,"is-random-tracks":c.isRandomTracks,"is-show-track-list":c.isShowTrackList,"is-repeat-mode":c.isRepeatMode,"is-dark-theme":c.isDarkTheme,onRepeatModeClick:c.repeatModeChange,onRandomClick:c.handlerRandomBtn,onShowListClick:c.handlerShowListBtn,onChangeTheme:c.handlerChangeThemeBtn},null,8,["current-numb-song","total-numb-songs","is-random-tracks","is-show-track-list","is-repeat-mode","is-dark-theme","onRepeatModeClick","onRandomClick","onShowListClick","onChangeTheme"]),U("audio",{ref:"audioPlayer",src:c.pathToCurrentFile,preload:"metadata",onVolumechange:a[0]||(a[0]=(...k)=>c.onVolumeUpdate&&c.onVolumeUpdate(...k)),onTimeupdate:a[1]||(a[1]=(...k)=>c.onTimeUpdate&&c.onTimeUpdate(...k)),onCanplay:a[2]||(a[2]=(...k)=>c.handlerCanPlay&&c.handlerCanPlay(...k)),onEnded:a[3]||(a[3]=(...k)=>c.handlerEnded&&c.handlerEnded(...k))},null,40,th)])],2)}const fh=m1(d0,[["render",lh]]);function C5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(c);a&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,n)}return e}function N(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?C5(Object(e),!0).forEach(function(n){H2(c,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):C5(Object(e)).forEach(function(n){Object.defineProperty(c,n,Object.getOwnPropertyDescriptor(e,n))})}return c}function H3(c){"@babel/helpers - typeof";return H3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},H3(c)}function mh(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function g5(c,a){for(var e=0;e<a.length;e++){var n=a[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(c,n.key,n)}}function hh(c,a,e){return a&&g5(c.prototype,a),e&&g5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function H2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function p0(c,a){return vh(c)||zh(c,a)||X7(c,a)||ph()}function k4(c){return uh(c)||Hh(c)||X7(c)||dh()}function uh(c){if(Array.isArray(c))return R6(c)}function vh(c){if(Array.isArray(c))return c}function Hh(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function zh(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var n=[],r=!0,s=!1,i,o;try{for(e=e.call(c);!(r=(i=e.next()).done)&&(n.push(i.value),!(a&&n.length===a));r=!0);}catch(t){s=!0,o=t}finally{try{!r&&e.return!=null&&e.return()}finally{if(s)throw o}}return n}}function X7(c,a){if(c){if(typeof c=="string")return R6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return R6(c,a)}}function R6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=c[e];return n}function dh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ph(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var L5=function(){},V0={},Q7={},J7=null,Z7={mark:L5,measure:L5};try{typeof window<"u"&&(V0=window),typeof document<"u"&&(Q7=document),typeof MutationObserver<"u"&&(J7=MutationObserver),typeof performance<"u"&&(Z7=performance)}catch{}var Vh=V0.navigator||{},y5=Vh.userAgent,b5=y5===void 0?"":y5,y1=V0,r2=Q7,w5=J7,j4=Z7;y1.document;var h1=!!r2.documentElement&&!!r2.head&&typeof r2.addEventListener=="function"&&typeof r2.createElement=="function",cc=~b5.indexOf("MSIE")||~b5.indexOf("Trident/"),Y4,K4,X4,Q4,J4,o1="___FONT_AWESOME___",D6=16,ac="fa",ec="svg-inline--fa",O1="data-fa-i2svg",E6="data-fa-pseudo-element",Mh="data-fa-pseudo-element-pending",M0="data-prefix",C0="data-icon",x5="fontawesome-i2svg",Ch="async",gh=["HTML","HEAD","STYLE","SCRIPT"],nc=function(){try{return!0}catch{return!1}}(),n2="classic",f2="sharp",g0=[n2,f2];function S4(c){return new Proxy(c,{get:function(e,n){return n in e?e[n]:e[n2]}})}var L4=S4((Y4={},H2(Y4,n2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),H2(Y4,f2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Y4)),y4=S4((K4={},H2(K4,n2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),H2(K4,f2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),K4)),b4=S4((X4={},H2(X4,n2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),H2(X4,f2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),X4)),Lh=S4((Q4={},H2(Q4,n2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),H2(Q4,f2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Q4)),yh=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,rc="fa-layers-text",bh=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,wh=S4((J4={},H2(J4,n2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),H2(J4,f2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),J4)),sc=[1,2,3,4,5,6,7,8,9,10],xh=sc.concat([11,12,13,14,15,16,17,18,19,20]),Nh=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},w4=new Set;Object.keys(y4[n2]).map(w4.add.bind(w4));Object.keys(y4[f2]).map(w4.add.bind(w4));var kh=[].concat(g0,k4(w4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B1.GROUP,B1.SWAP_OPACITY,B1.PRIMARY,B1.SECONDARY]).concat(sc.map(function(c){return"".concat(c,"x")})).concat(xh.map(function(c){return"w-".concat(c)})),H4=y1.FontAwesomeConfig||{};function Sh(c){var a=r2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Ah(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(r2&&typeof r2.querySelector=="function"){var Th=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Th.forEach(function(c){var a=p0(c,2),e=a[0],n=a[1],r=Ah(Sh(e));r!=null&&(H4[n]=r)})}var ic={styleDefault:"solid",familyDefault:"classic",cssPrefix:ac,replacementClass:ec,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};H4.familyPrefix&&(H4.cssPrefix=H4.familyPrefix);var a4=N(N({},ic),H4);a4.autoReplaceSvg||(a4.observeMutations=!1);var A={};Object.keys(ic).forEach(function(c){Object.defineProperty(A,c,{enumerable:!0,set:function(e){a4[c]=e,z4.forEach(function(n){return n(A)})},get:function(){return a4[c]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(a){a4.cssPrefix=a,z4.forEach(function(e){return e(A)})},get:function(){return a4.cssPrefix}});y1.FontAwesomeConfig=A;var z4=[];function Ph(c){return z4.push(c),function(){z4.splice(z4.indexOf(c),1)}}var d1=D6,K2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fh(c){if(!(!c||!h1)){var a=r2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=r2.head.childNodes,n=null,r=e.length-1;r>-1;r--){var s=e[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=s)}return r2.head.insertBefore(a,n),c}}var Bh="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function x4(){for(var c=12,a="";c-- >0;)a+=Bh[Math.random()*62|0];return a}function i4(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function L0(c){return c.classList?i4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function oc(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ih(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(oc(c[e]),'" ')},"").trim()}function I3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function y0(c){return c.size!==K2.size||c.x!==K2.x||c.y!==K2.y||c.rotate!==K2.rotate||c.flipX||c.flipY}function Rh(c){var a=c.transform,e=c.containerWidth,n=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),t={transform:"".concat(s," ").concat(i," ").concat(o)},l={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:t,path:l}}function Dh(c){var a=c.transform,e=c.width,n=e===void 0?D6:e,r=c.height,s=r===void 0?D6:r,i=c.startCentered,o=i===void 0?!1:i,t="";return o&&cc?t+="translate(".concat(a.x/d1-n/2,"em, ").concat(a.y/d1-s/2,"em) "):o?t+="translate(calc(-50% + ".concat(a.x/d1,"em), calc(-50% + ").concat(a.y/d1,"em)) "):t+="translate(".concat(a.x/d1,"em, ").concat(a.y/d1,"em) "),t+="scale(".concat(a.size/d1*(a.flipX?-1:1),", ").concat(a.size/d1*(a.flipY?-1:1),") "),t+="rotate(".concat(a.rotate,"deg) "),t}var Eh=`:root, :host {
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
}`;function tc(){var c=ac,a=ec,e=A.cssPrefix,n=A.replacementClass,r=Eh;if(e!==c||n!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");r=r.replace(s,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(o,".".concat(n))}return r}var N5=!1;function v6(){A.autoAddCss&&!N5&&(Fh(tc()),N5=!0)}var Oh={mixout:function(){return{dom:{css:tc,insertCss:v6}}},hooks:function(){return{beforeDOMElementCreation:function(){v6()},beforeI2svg:function(){v6()}}}},t1=y1||{};t1[o1]||(t1[o1]={});t1[o1].styles||(t1[o1].styles={});t1[o1].hooks||(t1[o1].hooks={});t1[o1].shims||(t1[o1].shims=[]);var W2=t1[o1],lc=[],_h=function c(){r2.removeEventListener("DOMContentLoaded",c),z3=1,lc.map(function(a){return a()})},z3=!1;h1&&(z3=(r2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(r2.readyState),z3||r2.addEventListener("DOMContentLoaded",_h));function Wh(c){h1&&(z3?setTimeout(c,0):lc.push(c))}function A4(c){var a=c.tag,e=c.attributes,n=e===void 0?{}:e,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?oc(c):"<".concat(a," ").concat(Ih(n),">").concat(s.map(A4).join(""),"</").concat(a,">")}function k5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var $h=function(a,e){return function(n,r,s,i){return a.call(e,n,r,s,i)}},H6=function(a,e,n,r){var s=Object.keys(a),i=s.length,o=r!==void 0?$h(e,r):e,t,l,f;for(n===void 0?(t=1,f=a[s[0]]):(t=0,f=n);t<i;t++)l=s[t],f=o(f,a[l],l,a);return f};function Uh(c){for(var a=[],e=0,n=c.length;e<n;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<n){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((r&1023)<<10)+(s&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function O6(c){var a=Uh(c);return a.length===1?a[0].toString(16):null}function qh(c,a){var e=c.length,n=c.charCodeAt(a),r;return n>=55296&&n<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function S5(c){return Object.keys(c).reduce(function(a,e){var n=c[e],r=!!n.icon;return r?a[n.iconName]=n.icon:a[e]=n,a},{})}function _6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.skipHooks,r=n===void 0?!1:n,s=S5(a);typeof W2.hooks.addPack=="function"&&!r?W2.hooks.addPack(c,S5(a)):W2.styles[c]=N(N({},W2.styles[c]||{}),s),c==="fas"&&_6("fa",a)}var Z4,c3,a3,q1=W2.styles,Gh=W2.shims,jh=(Z4={},H2(Z4,n2,Object.values(b4[n2])),H2(Z4,f2,Object.values(b4[f2])),Z4),b0=null,fc={},mc={},hc={},uc={},vc={},Yh=(c3={},H2(c3,n2,Object.keys(L4[n2])),H2(c3,f2,Object.keys(L4[f2])),c3);function Kh(c){return~kh.indexOf(c)}function Xh(c,a){var e=a.split("-"),n=e[0],r=e.slice(1).join("-");return n===c&&r!==""&&!Kh(r)?r:null}var Hc=function(){var a=function(s){return H6(q1,function(i,o,t){return i[t]=H6(o,s,{}),i},{})};fc=a(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var o=s[2].filter(function(t){return typeof t=="number"});o.forEach(function(t){r[t.toString(16)]=i})}return r}),mc=a(function(r,s,i){if(r[i]=i,s[2]){var o=s[2].filter(function(t){return typeof t=="string"});o.forEach(function(t){r[t]=i})}return r}),vc=a(function(r,s,i){var o=s[2];return r[i]=i,o.forEach(function(t){r[t]=i}),r});var e="far"in q1||A.autoFetchSvg,n=H6(Gh,function(r,s){var i=s[0],o=s[1],t=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:t}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:t}),r},{names:{},unicodes:{}});hc=n.names,uc=n.unicodes,b0=R3(A.styleDefault,{family:A.familyDefault})};Ph(function(c){b0=R3(c.styleDefault,{family:A.familyDefault})});Hc();function w0(c,a){return(fc[c]||{})[a]}function Qh(c,a){return(mc[c]||{})[a]}function I1(c,a){return(vc[c]||{})[a]}function zc(c){return hc[c]||{prefix:null,iconName:null}}function Jh(c){var a=uc[c],e=w0("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function b1(){return b0}var x0=function(){return{prefix:null,iconName:null,rest:[]}};function R3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,n=e===void 0?n2:e,r=L4[n][c],s=y4[n][c]||y4[n][r],i=c in W2.styles?c:null;return s||i||null}var A5=(a3={},H2(a3,n2,Object.keys(b4[n2])),H2(a3,f2,Object.keys(b4[f2])),a3);function D3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,s=(a={},H2(a,n2,"".concat(A.cssPrefix,"-").concat(n2)),H2(a,f2,"".concat(A.cssPrefix,"-").concat(f2)),a),i=null,o=n2;(c.includes(s[n2])||c.some(function(l){return A5[n2].includes(l)}))&&(o=n2),(c.includes(s[f2])||c.some(function(l){return A5[f2].includes(l)}))&&(o=f2);var t=c.reduce(function(l,f){var h=Xh(A.cssPrefix,f);if(q1[f]?(f=jh[o].includes(f)?Lh[o][f]:f,i=f,l.prefix=f):Yh[o].indexOf(f)>-1?(i=f,l.prefix=R3(f,{family:o})):h?l.iconName=h:f!==A.replacementClass&&f!==s[n2]&&f!==s[f2]&&l.rest.push(f),!r&&l.prefix&&l.iconName){var v=i==="fa"?zc(l.iconName):{},M=I1(l.prefix,l.iconName);v.prefix&&(i=null),l.iconName=v.iconName||M||l.iconName,l.prefix=v.prefix||l.prefix,l.prefix==="far"&&!q1.far&&q1.fas&&!A.autoFetchSvg&&(l.prefix="fas")}return l},x0());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&o===f2&&(q1.fass||A.autoFetchSvg)&&(t.prefix="fass",t.iconName=I1(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||i==="fa")&&(t.prefix=b1()||"fas"),t}var Zh=function(){function c(){mh(this,c),this.definitions={}}return hh(c,[{key:"add",value:function(){for(var e=this,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=N(N({},e.definitions[o]||{}),i[o]),_6(o,i[o]);var t=b4[n2][o];t&&_6(t,i[o]),Hc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(s){var i=r[s],o=i.prefix,t=i.iconName,l=i.icon,f=l[2];e[o]||(e[o]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(e[o][h]=l)}),e[o][t]=l}),e}}]),c}(),T5=[],G1={},J1={},cu=Object.keys(J1);function au(c,a){var e=a.mixoutsTo;return T5=c,G1={},Object.keys(J1).forEach(function(n){cu.indexOf(n)===-1&&delete J1[n]}),T5.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),H3(r[i])==="object"&&Object.keys(r[i]).forEach(function(o){e[i]||(e[i]={}),e[i][o]=r[i][o]})}),n.hooks){var s=n.hooks();Object.keys(s).forEach(function(i){G1[i]||(G1[i]=[]),G1[i].push(s[i])})}n.provides&&n.provides(J1)}),e}function W6(c,a){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];var s=G1[c]||[];return s.forEach(function(i){a=i.apply(null,[a].concat(n))}),a}function _1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),n=1;n<a;n++)e[n-1]=arguments[n];var r=G1[c]||[];r.forEach(function(s){s.apply(null,e)})}function l1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return J1[c]?J1[c].apply(null,a):void 0}function $6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||b1();if(a)return a=I1(e,a)||a,k5(dc.definitions,e,a)||k5(W2.styles,e,a)}var dc=new Zh,eu=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,_1("noAuto")},nu={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return h1?(_1("beforeI2svg",a),l1("pseudoElements2svg",a),l1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,Wh(function(){su({autoReplaceSvgRoot:e}),_1("watch",a)})}},ru={icon:function(a){if(a===null)return null;if(H3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:I1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],n=R3(a[0]);return{prefix:n,iconName:I1(n,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(A.cssPrefix,"-"))>-1||a.match(yh))){var r=D3(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||b1(),iconName:I1(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var s=b1();return{prefix:s,iconName:I1(s,a)||a}}}},F2={noAuto:eu,config:A,dom:nu,parse:ru,library:dc,findIconDefinition:$6,toHtml:A4},su=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,n=e===void 0?r2:e;(Object.keys(W2.styles).length>0||A.autoFetchSvg)&&h1&&A.autoReplaceSvg&&F2.dom.i2svg({node:n})};function E3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(n){return A4(n)})}}),Object.defineProperty(c,"node",{get:function(){if(h1){var n=r2.createElement("div");return n.innerHTML=c.html,n.children}}}),c}function iu(c){var a=c.children,e=c.main,n=c.mask,r=c.attributes,s=c.styles,i=c.transform;if(y0(i)&&e.found&&!n.found){var o=e.width,t=e.height,l={x:o/t/2,y:.5};r.style=I3(N(N({},s),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function ou(c){var a=c.prefix,e=c.iconName,n=c.children,r=c.attributes,s=c.symbol,i=s===!0?"".concat(a,"-").concat(A.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},r),{},{id:i}),children:n}]}]}function N0(c){var a=c.icons,e=a.main,n=a.mask,r=c.prefix,s=c.iconName,i=c.transform,o=c.symbol,t=c.title,l=c.maskId,f=c.titleId,h=c.extra,v=c.watchable,M=v===void 0?!1:v,k=n.found?n:e,w=k.width,E=k.height,L=r==="fak",p=[A.replacementClass,s?"".concat(A.cssPrefix,"-").concat(s):""].filter(function(q){return h.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(h.classes).join(" "),T={children:[],attributes:N(N({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:p,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(E)})},C=L&&!~h.classes.indexOf("fa-fw")?{width:"".concat(w/E*16*.0625,"em")}:{};M&&(T.attributes[O1]=""),t&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(f||x4())},children:[t]}),delete T.attributes.title);var I=N(N({},T),{},{prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:N(N({},C),h.styles)}),Z=n.found&&e.found?l1("generateAbstractMask",I)||{children:[],attributes:{}}:l1("generateAbstractIcon",I)||{children:[],attributes:{}},c2=Z.children,D=Z.attributes;return I.children=c2,I.attributes=D,o?ou(I):iu(I)}function P5(c){var a=c.content,e=c.width,n=c.height,r=c.transform,s=c.title,i=c.extra,o=c.watchable,t=o===void 0?!1:o,l=N(N(N({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});t&&(l[O1]="");var f=N({},i.styles);y0(r)&&(f.transform=Dh({transform:r,startCentered:!0,width:e,height:n}),f["-webkit-transform"]=f.transform);var h=I3(f);h.length>0&&(l.style=h);var v=[];return v.push({tag:"span",attributes:l,children:[a]}),s&&v.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),v}function tu(c){var a=c.content,e=c.title,n=c.extra,r=N(N(N({},n.attributes),e?{title:e}:{}),{},{class:n.classes.join(" ")}),s=I3(n.styles);s.length>0&&(r.style=s);var i=[];return i.push({tag:"span",attributes:r,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var z6=W2.styles;function U6(c){var a=c[0],e=c[1],n=c.slice(4),r=p0(n,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(B1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(B1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(B1.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:i}}var lu={found:!1,width:512,height:512};function fu(c,a){!nc&&!A.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function q6(c,a){var e=a;return a==="fa"&&A.styleDefault!==null&&(a=b1()),new Promise(function(n,r){if(l1("missingIconAbstract"),e==="fa"){var s=zc(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&z6[a]&&z6[a][c]){var i=z6[a][c];return n(U6(i))}fu(c,a),n(N(N({},lu),{},{icon:A.showMissingIcons&&c?l1("missingIconAbstract")||{}:{}}))})}var F5=function(){},G6=A.measurePerformance&&j4&&j4.mark&&j4.measure?j4:{mark:F5,measure:F5},h4='FA "6.5.1"',mu=function(a){return G6.mark("".concat(h4," ").concat(a," begins")),function(){return pc(a)}},pc=function(a){G6.mark("".concat(h4," ").concat(a," ends")),G6.measure("".concat(h4," ").concat(a),"".concat(h4," ").concat(a," begins"),"".concat(h4," ").concat(a," ends"))},k0={begin:mu,end:pc},o3=function(){};function B5(c){var a=c.getAttribute?c.getAttribute(O1):null;return typeof a=="string"}function hu(c){var a=c.getAttribute?c.getAttribute(M0):null,e=c.getAttribute?c.getAttribute(C0):null;return a&&e}function uu(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(A.replacementClass)}function vu(){if(A.autoReplaceSvg===!0)return t3.replace;var c=t3[A.autoReplaceSvg];return c||t3.replace}function Hu(c){return r2.createElementNS("http://www.w3.org/2000/svg",c)}function zu(c){return r2.createElement(c)}function Vc(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,n=e===void 0?c.tag==="svg"?Hu:zu:e;if(typeof c=="string")return r2.createTextNode(c);var r=n(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var s=c.children||[];return s.forEach(function(i){r.appendChild(Vc(i,{ceFn:n}))}),r}function du(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var t3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(Vc(r),e)}),e.getAttribute(O1)===null&&A.keepOriginalSource){var n=r2.createComment(du(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(a){var e=a[0],n=a[1];if(~L0(e).indexOf(A.replacementClass))return t3.replace(a);var r=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var s=n[0].attributes.class.split(" ").reduce(function(o,t){return t===A.replacementClass||t.match(r)?o.toSvg.push(t):o.toNode.push(t),o},{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var i=n.map(function(o){return A4(o)}).join(`
`);e.setAttribute(O1,""),e.innerHTML=i}};function I5(c){c()}function Mc(c,a){var e=typeof a=="function"?a:o3;if(c.length===0)e();else{var n=I5;A.mutateApproach===Ch&&(n=y1.requestAnimationFrame||I5),n(function(){var r=vu(),s=k0.begin("mutate");c.map(r),s(),e()})}}var S0=!1;function Cc(){S0=!0}function j6(){S0=!1}var d3=null;function R5(c){if(w5&&A.observeMutations){var a=c.treeCallback,e=a===void 0?o3:a,n=c.nodeCallback,r=n===void 0?o3:n,s=c.pseudoElementsCallback,i=s===void 0?o3:s,o=c.observeMutationsRoot,t=o===void 0?r2:o;d3=new w5(function(l){if(!S0){var f=b1();i4(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!B5(h.addedNodes[0])&&(A.searchPseudoElements&&i(h.target),e(h.target)),h.type==="attributes"&&h.target.parentNode&&A.searchPseudoElements&&i(h.target.parentNode),h.type==="attributes"&&B5(h.target)&&~Nh.indexOf(h.attributeName))if(h.attributeName==="class"&&hu(h.target)){var v=D3(L0(h.target)),M=v.prefix,k=v.iconName;h.target.setAttribute(M0,M||f),k&&h.target.setAttribute(C0,k)}else uu(h.target)&&r(h.target)})}}),h1&&d3.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function pu(){d3&&d3.disconnect()}function Vu(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(n,r){var s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(n[i]=o.join(":").trim()),n},{})),e}function Mu(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),n=c.innerText!==void 0?c.innerText.trim():"",r=D3(L0(c));return r.prefix||(r.prefix=b1()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Qh(r.prefix,c.innerText)||w0(r.prefix,O6(c.innerText))),!r.iconName&&A.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function Cu(c){var a=i4(c.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),e=c.getAttribute("title"),n=c.getAttribute("data-fa-title-id");return A.autoA11y&&(e?a["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(n||x4()):(a["aria-hidden"]="true",a.focusable="false")),a}function gu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function D5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Mu(c),n=e.iconName,r=e.prefix,s=e.rest,i=Cu(c),o=W6("parseNodeAttributes",{},c),t=a.styleParser?Vu(c):[];return N({iconName:n,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:K2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:t,attributes:i}},o)}var Lu=W2.styles;function gc(c){var a=A.autoReplaceSvg==="nest"?D5(c,{styleParser:!1}):D5(c);return~a.extra.classes.indexOf(rc)?l1("generateLayersText",c,a):l1("generateSvgReplacementMutation",c,a)}var w1=new Set;g0.map(function(c){w1.add("fa-".concat(c))});Object.keys(L4[n2]).map(w1.add.bind(w1));Object.keys(L4[f2]).map(w1.add.bind(w1));w1=k4(w1);function E5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!h1)return Promise.resolve();var e=r2.documentElement.classList,n=function(h){return e.add("".concat(x5,"-").concat(h))},r=function(h){return e.remove("".concat(x5,"-").concat(h))},s=A.autoFetchSvg?w1:g0.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Lu));s.includes("fa")||s.push("fa");var i=[".".concat(rc,":not([").concat(O1,"])")].concat(s.map(function(f){return".".concat(f,":not([").concat(O1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=i4(c.querySelectorAll(i))}catch{}if(o.length>0)n("pending"),r("complete");else return Promise.resolve();var t=k0.begin("onTree"),l=o.reduce(function(f,h){try{var v=gc(h);v&&f.push(v)}catch(M){nc||M.name==="MissingIcon"&&console.error(M)}return f},[]);return new Promise(function(f,h){Promise.all(l).then(function(v){Mc(v,function(){n("active"),n("complete"),r("pending"),typeof a=="function"&&a(),t(),f()})}).catch(function(v){t(),h(v)})})}function yu(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;gc(c).then(function(e){e&&Mc([e],a)})}function bu(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(a||{}).icon?a:$6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:$6(r||{})),c(n,N(N({},e),{},{mask:r}))}}var wu=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?K2:n,s=e.symbol,i=s===void 0?!1:s,o=e.mask,t=o===void 0?null:o,l=e.maskId,f=l===void 0?null:l,h=e.title,v=h===void 0?null:h,M=e.titleId,k=M===void 0?null:M,w=e.classes,E=w===void 0?[]:w,L=e.attributes,p=L===void 0?{}:L,T=e.styles,C=T===void 0?{}:T;if(a){var I=a.prefix,Z=a.iconName,c2=a.icon;return E3(N({type:"icon"},a),function(){return _1("beforeDOMElementCreation",{iconDefinition:a,params:e}),A.autoA11y&&(v?p["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(k||x4()):(p["aria-hidden"]="true",p.focusable="false")),N0({icons:{main:U6(c2),mask:t?U6(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:Z,transform:N(N({},K2),r),symbol:i,title:v,maskId:f,titleId:k,extra:{attributes:p,styles:C,classes:E}})})}},xu={mixout:function(){return{icon:bu(wu)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=E5,e.nodeCallback=yu,e}}},provides:function(a){a.i2svg=function(e){var n=e.node,r=n===void 0?r2:n,s=e.callback,i=s===void 0?function(){}:s;return E5(r,i)},a.generateSvgReplacementMutation=function(e,n){var r=n.iconName,s=n.title,i=n.titleId,o=n.prefix,t=n.transform,l=n.symbol,f=n.mask,h=n.maskId,v=n.extra;return new Promise(function(M,k){Promise.all([q6(r,o),f.iconName?q6(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var E=p0(w,2),L=E[0],p=E[1];M([e,N0({icons:{main:L,mask:p},prefix:o,iconName:r,transform:t,symbol:l,maskId:h,title:s,titleId:i,extra:v,watchable:!0})])}).catch(k)})},a.generateAbstractIcon=function(e){var n=e.children,r=e.attributes,s=e.main,i=e.transform,o=e.styles,t=I3(o);t.length>0&&(r.style=t);var l;return y0(i)&&(l=l1("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},Nu={mixout:function(){return{layer:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,s=r===void 0?[]:r;return E3({type:"layer"},function(){_1("beforeDOMElementCreation",{assembler:e,params:n});var i=[];return e(function(o){Array.isArray(o)?o.map(function(t){i=i.concat(t.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(k4(s)).join(" ")},children:i}]})}}}},ku={mixout:function(){return{counter:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,s=r===void 0?null:r,i=n.classes,o=i===void 0?[]:i,t=n.attributes,l=t===void 0?{}:t,f=n.styles,h=f===void 0?{}:f;return E3({type:"counter",content:e},function(){return _1("beforeDOMElementCreation",{content:e,params:n}),tu({content:e.toString(),title:s,extra:{attributes:l,styles:h,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(k4(o))}})})}}}},Su={mixout:function(){return{text:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?K2:r,i=n.title,o=i===void 0?null:i,t=n.classes,l=t===void 0?[]:t,f=n.attributes,h=f===void 0?{}:f,v=n.styles,M=v===void 0?{}:v;return E3({type:"text",content:e},function(){return _1("beforeDOMElementCreation",{content:e,params:n}),P5({content:e,transform:N(N({},K2),s),title:o,extra:{attributes:h,styles:M,classes:["".concat(A.cssPrefix,"-layers-text")].concat(k4(l))}})})}}},provides:function(a){a.generateLayersText=function(e,n){var r=n.title,s=n.transform,i=n.extra,o=null,t=null;if(cc){var l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/l,t=f.height/l}return A.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,P5({content:e.innerHTML,width:o,height:t,transform:s,title:r,extra:i,watchable:!0})])}}},Au=new RegExp('"',"ug"),O5=[1105920,1112319];function Tu(c){var a=c.replace(Au,""),e=qh(a,0),n=e>=O5[0]&&e<=O5[1],r=a.length===2?a[0]===a[1]:!1;return{value:O6(r?a[0]:a),isSecondary:n||r}}function _5(c,a){var e="".concat(Mh).concat(a.replace(":","-"));return new Promise(function(n,r){if(c.getAttribute(e)!==null)return n();var s=i4(c.children),i=s.filter(function(c2){return c2.getAttribute(E6)===a})[0],o=y1.getComputedStyle(c,a),t=o.getPropertyValue("font-family").match(bh),l=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(i&&!t)return c.removeChild(i),n();if(t&&f!=="none"&&f!==""){var h=o.getPropertyValue("content"),v=~["Sharp"].indexOf(t[2])?f2:n2,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(t[2])?y4[v][t[2].toLowerCase()]:wh[v][l],k=Tu(h),w=k.value,E=k.isSecondary,L=t[0].startsWith("FontAwesome"),p=w0(M,w),T=p;if(L){var C=Jh(w);C.iconName&&C.prefix&&(p=C.iconName,M=C.prefix)}if(p&&!E&&(!i||i.getAttribute(M0)!==M||i.getAttribute(C0)!==T)){c.setAttribute(e,T),i&&c.removeChild(i);var I=gu(),Z=I.extra;Z.attributes[E6]=a,q6(p,M).then(function(c2){var D=N0(N(N({},I),{},{icons:{main:c2,mask:x0()},prefix:M,iconName:T,extra:Z,watchable:!0})),q=r2.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(q,c.firstChild):c.appendChild(q),q.outerHTML=D.map(function(K){return A4(K)}).join(`
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}