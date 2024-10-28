(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();function a0(c,e){const a=Object.create(null),s=c.split(",");for(let n=0;n<s.length;n++)a[s[n]]=!0;return e?n=>!!a[n.toLowerCase()]:n=>!!a[n]}const s2={},X1=[],Q2=()=>{},xt=()=>!1,w3=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),s0=c=>c.startsWith("onUpdate:"),g2=Object.assign,n0=(c,e)=>{const a=c.indexOf(e);a>-1&&c.splice(a,1)},Nt=Object.prototype.hasOwnProperty,K=(c,e)=>Nt.call(c,e),W=Array.isArray,J1=c=>L3(c)==="[object Map]",Z5=c=>L3(c)==="[object Set]",U=c=>typeof c=="function",p2=c=>typeof c=="string",n4=c=>typeof c=="symbol",i2=c=>c!==null&&typeof c=="object",c7=c=>(i2(c)||U(c))&&U(c.then)&&U(c.catch),e7=Object.prototype.toString,L3=c=>e7.call(c),St=c=>L3(c).slice(8,-1),a7=c=>L3(c)==="[object Object]",r0=c=>p2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,i3=a0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k3=c=>{const e=Object.create(null);return a=>e[a]||(e[a]=c(a))},At=/-(\w)/g,Z2=k3(c=>c.replace(At,(e,a)=>a?a.toUpperCase():"")),Tt=/\B([A-Z])/g,r4=k3(c=>c.replace(Tt,"-$1").toLowerCase()),x3=k3(c=>c.charAt(0).toUpperCase()+c.slice(1)),h6=k3(c=>c?`on${x3(c)}`:""),O1=(c,e)=>!Object.is(c,e),d6=(c,e)=>{for(let a=0;a<c.length;a++)c[a](e)},m3=(c,e,a)=>{Object.defineProperty(c,e,{configurable:!0,enumerable:!1,value:a})},It=c=>{const e=parseFloat(c);return isNaN(e)?c:e},Ft=c=>{const e=p2(c)?Number(c):NaN;return isNaN(e)?c:e};let O8;const L6=()=>O8||(O8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function N3(c){if(W(c)){const e={};for(let a=0;a<c.length;a++){const s=c[a],n=p2(s)?Rt(s):N3(s);if(n)for(const r in n)e[r]=n[r]}return e}else if(p2(c)||i2(c))return c}const Bt=/;(?![^(]*\))/g,Pt=/:([^]+)/,Wt=/\/\*[^]*?\*\//g;function Rt(c){const e={};return c.replace(Wt,"").split(Bt).forEach(a=>{if(a){const s=a.split(Pt);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function A2(c){let e="";if(p2(c))e=c;else if(W(c))for(let a=0;a<c.length;a++){const s=A2(c[a]);s&&(e+=s+" ")}else if(i2(c))for(const a in c)c[a]&&(e+=a+" ");return e.trim()}const Dt="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ot=a0(Dt);function s7(c){return!!c||c===""}const W2=c=>p2(c)?c:c==null?"":W(c)||i2(c)&&(c.toString===e7||!U(c.toString))?JSON.stringify(c,n7,2):String(c),n7=(c,e)=>e&&e.__v_isRef?n7(c,e.value):J1(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((a,[s,n],r)=>(a[m6(s,r)+" =>"]=n,a),{})}:Z5(e)?{[`Set(${e.size})`]:[...e.values()].map(a=>m6(a))}:n4(e)?m6(e):i2(e)&&!W(e)&&!a7(e)?String(e):e,m6=(c,e="")=>{var a;return n4(c)?`Symbol(${(a=c.description)!=null?a:e})`:c};let _2;class Et{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_2,!e&&_2&&(this.index=(_2.scopes||(_2.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const a=_2;try{return _2=this,e()}finally{_2=a}}}on(){_2=this}off(){_2=this.parent}stop(e){if(this._active){let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.scopes)for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function _t(c,e=_2){e&&e.active&&e.effects.push(c)}function $t(){return _2}const i0=c=>{const e=new Set(c);return e.w=0,e.n=0,e},r7=c=>(c.w&C1)>0,i7=c=>(c.n&C1)>0,Ut=({deps:c})=>{if(c.length)for(let e=0;e<c.length;e++)c[e].w|=C1},qt=c=>{const{deps:e}=c;if(e.length){let a=0;for(let s=0;s<e.length;s++){const n=e[s];r7(n)&&!i7(n)?n.delete(c):e[a++]=n,n.w&=~C1,n.n&=~C1}e.length=a}},k6=new WeakMap;let m4=0,C1=1;const x6=30;let $2;const R1=Symbol(""),N6=Symbol("");class o0{constructor(e,a=null,s){this.fn=e,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,_t(this,s)}run(){if(!this.active)return this.fn();let e=$2,a=y1;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$2,$2=this,y1=!0,C1=1<<++m4,m4<=x6?Ut(this):E8(this),this.fn()}finally{m4<=x6&&qt(this),C1=1<<--m4,$2=this.parent,y1=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$2===this?this.deferStop=!0:this.active&&(E8(this),this.onStop&&this.onStop(),this.active=!1)}}function E8(c){const{deps:e}=c;if(e.length){for(let a=0;a<e.length;a++)e[a].delete(c);e.length=0}}let y1=!0;const o7=[];function i4(){o7.push(y1),y1=!1}function o4(){const c=o7.pop();y1=c===void 0?!0:c}function k2(c,e,a){if(y1&&$2){let s=k6.get(c);s||k6.set(c,s=new Map);let n=s.get(a);n||s.set(a,n=i0()),t7(n)}}function t7(c,e){let a=!1;m4<=x6?i7(c)||(c.n|=C1,a=!r7(c)):a=!c.has($2),a&&(c.add($2),$2.deps.push(c))}function s1(c,e,a,s,n,r){const i=k6.get(c);if(!i)return;let o=[];if(e==="clear")o=[...i.values()];else if(a==="length"&&W(c)){const t=Number(s);i.forEach((l,h)=>{(h==="length"||!n4(h)&&h>=t)&&o.push(l)})}else switch(a!==void 0&&o.push(i.get(a)),e){case"add":W(c)?r0(a)&&o.push(i.get("length")):(o.push(i.get(R1)),J1(c)&&o.push(i.get(N6)));break;case"delete":W(c)||(o.push(i.get(R1)),J1(c)&&o.push(i.get(N6)));break;case"set":J1(c)&&o.push(i.get(R1));break}if(o.length===1)o[0]&&S6(o[0]);else{const t=[];for(const l of o)l&&t.push(...l);S6(i0(t))}}function S6(c,e){const a=W(c)?c:[...c];for(const s of a)s.computed&&_8(s);for(const s of a)s.computed||_8(s)}function _8(c,e){(c!==$2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Gt=a0("__proto__,__v_isRef,__isVue"),l7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(n4)),$8=jt();function jt(){const c={};return["includes","indexOf","lastIndexOf"].forEach(e=>{c[e]=function(...a){const s=X(this);for(let r=0,i=this.length;r<i;r++)k2(s,"get",r+"");const n=s[e](...a);return n===-1||n===!1?s[e](...a.map(X)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{c[e]=function(...a){i4();const s=X(this)[e].apply(this,a);return o4(),s}}),c}function Yt(c){const e=X(this);return k2(e,"has",c),e.hasOwnProperty(c)}class f7{constructor(e=!1,a=!1){this._isReadonly=e,this._shallow=a}get(e,a,s){const n=this._isReadonly,r=this._shallow;if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return r;if(a==="__v_raw")return s===(n?r?ol:u7:r?m7:d7).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const i=W(e);if(!n){if(i&&K($8,a))return Reflect.get($8,a,s);if(a==="hasOwnProperty")return Yt}const o=Reflect.get(e,a,s);return(n4(a)?l7.has(a):Gt(a))||(n||k2(e,"get",a),r)?o:x2(o)?i&&r0(a)?o:o.value:i2(o)?n?v7(o):f0(o):o}}class h7 extends f7{constructor(e=!1){super(!1,e)}set(e,a,s,n){let r=e[a];if(!this._shallow){const t=e4(r);if(!u3(s)&&!e4(s)&&(r=X(r),s=X(s)),!W(e)&&x2(r)&&!x2(s))return t?!1:(r.value=s,!0)}const i=W(e)&&r0(a)?Number(a)<e.length:K(e,a),o=Reflect.set(e,a,s,n);return e===X(n)&&(i?O1(s,r)&&s1(e,"set",a,s):s1(e,"add",a,s)),o}deleteProperty(e,a){const s=K(e,a);e[a];const n=Reflect.deleteProperty(e,a);return n&&s&&s1(e,"delete",a,void 0),n}has(e,a){const s=Reflect.has(e,a);return(!n4(a)||!l7.has(a))&&k2(e,"has",a),s}ownKeys(e){return k2(e,"iterate",W(e)?"length":R1),Reflect.ownKeys(e)}}class Kt extends f7{constructor(e=!1){super(!0,e)}set(e,a){return!0}deleteProperty(e,a){return!0}}const Xt=new h7,Jt=new Kt,Qt=new h7(!0),t0=c=>c,S3=c=>Reflect.getPrototypeOf(c);function _4(c,e,a=!1,s=!1){c=c.__v_raw;const n=X(c),r=X(e);a||(O1(e,r)&&k2(n,"get",e),k2(n,"get",r));const{has:i}=S3(n),o=s?t0:a?d0:y4;if(i.call(n,e))return o(c.get(e));if(i.call(n,r))return o(c.get(r));c!==n&&c.get(e)}function $4(c,e=!1){const a=this.__v_raw,s=X(a),n=X(c);return e||(O1(c,n)&&k2(s,"has",c),k2(s,"has",n)),c===n?a.has(c):a.has(c)||a.has(n)}function U4(c,e=!1){return c=c.__v_raw,!e&&k2(X(c),"iterate",R1),Reflect.get(c,"size",c)}function U8(c){c=X(c);const e=X(this);return S3(e).has.call(e,c)||(e.add(c),s1(e,"add",c,c)),this}function q8(c,e){e=X(e);const a=X(this),{has:s,get:n}=S3(a);let r=s.call(a,c);r||(c=X(c),r=s.call(a,c));const i=n.call(a,c);return a.set(c,e),r?O1(e,i)&&s1(a,"set",c,e):s1(a,"add",c,e),this}function G8(c){const e=X(this),{has:a,get:s}=S3(e);let n=a.call(e,c);n||(c=X(c),n=a.call(e,c)),s&&s.call(e,c);const r=e.delete(c);return n&&s1(e,"delete",c,void 0),r}function j8(){const c=X(this),e=c.size!==0,a=c.clear();return e&&s1(c,"clear",void 0,void 0),a}function q4(c,e){return function(s,n){const r=this,i=r.__v_raw,o=X(i),t=e?t0:c?d0:y4;return!c&&k2(o,"iterate",R1),i.forEach((l,h)=>s.call(n,t(l),t(h),r))}}function G4(c,e,a){return function(...s){const n=this.__v_raw,r=X(n),i=J1(r),o=c==="entries"||c===Symbol.iterator&&i,t=c==="keys"&&i,l=n[c](...s),h=a?t0:e?d0:y4;return!e&&k2(r,"iterate",t?N6:R1),{next(){const{value:d,done:u}=l.next();return u?{value:d,done:u}:{value:o?[h(d[0]),h(d[1])]:h(d),done:u}},[Symbol.iterator](){return this}}}}function d1(c){return function(...e){return c==="delete"?!1:c==="clear"?void 0:this}}function Zt(){const c={get(r){return _4(this,r)},get size(){return U4(this)},has:$4,add:U8,set:q8,delete:G8,clear:j8,forEach:q4(!1,!1)},e={get(r){return _4(this,r,!1,!0)},get size(){return U4(this)},has:$4,add:U8,set:q8,delete:G8,clear:j8,forEach:q4(!1,!0)},a={get(r){return _4(this,r,!0)},get size(){return U4(this,!0)},has(r){return $4.call(this,r,!0)},add:d1("add"),set:d1("set"),delete:d1("delete"),clear:d1("clear"),forEach:q4(!0,!1)},s={get(r){return _4(this,r,!0,!0)},get size(){return U4(this,!0)},has(r){return $4.call(this,r,!0)},add:d1("add"),set:d1("set"),delete:d1("delete"),clear:d1("clear"),forEach:q4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{c[r]=G4(r,!1,!1),a[r]=G4(r,!0,!1),e[r]=G4(r,!1,!0),s[r]=G4(r,!0,!0)}),[c,a,e,s]}const[cl,el,al,sl]=Zt();function l0(c,e){const a=e?c?sl:al:c?el:cl;return(s,n,r)=>n==="__v_isReactive"?!c:n==="__v_isReadonly"?c:n==="__v_raw"?s:Reflect.get(K(a,n)&&n in s?a:s,n,r)}const nl={get:l0(!1,!1)},rl={get:l0(!1,!0)},il={get:l0(!0,!1)},d7=new WeakMap,m7=new WeakMap,u7=new WeakMap,ol=new WeakMap;function tl(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ll(c){return c.__v_skip||!Object.isExtensible(c)?0:tl(St(c))}function f0(c){return e4(c)?c:h0(c,!1,Xt,nl,d7)}function fl(c){return h0(c,!1,Qt,rl,m7)}function v7(c){return h0(c,!0,Jt,il,u7)}function h0(c,e,a,s,n){if(!i2(c)||c.__v_raw&&!(e&&c.__v_isReactive))return c;const r=n.get(c);if(r)return r;const i=ll(c);if(i===0)return c;const o=new Proxy(c,i===2?s:a);return n.set(c,o),o}function Q1(c){return e4(c)?Q1(c.__v_raw):!!(c&&c.__v_isReactive)}function e4(c){return!!(c&&c.__v_isReadonly)}function u3(c){return!!(c&&c.__v_isShallow)}function p7(c){return Q1(c)||e4(c)}function X(c){const e=c&&c.__v_raw;return e?X(e):c}function H7(c){return m3(c,"__v_skip",!0),c}const y4=c=>i2(c)?f0(c):c,d0=c=>i2(c)?v7(c):c;function z7(c){y1&&$2&&(c=X(c),t7(c.dep||(c.dep=i0())))}function g7(c,e){c=X(c);const a=c.dep;a&&S6(a)}function x2(c){return!!(c&&c.__v_isRef===!0)}function f2(c){return hl(c,!1)}function hl(c,e){return x2(c)?c:new dl(c,e)}class dl{constructor(e,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?e:X(e),this._value=a?e:y4(e)}get value(){return z7(this),this._value}set value(e){const a=this.__v_isShallow||u3(e)||e4(e);e=a?e:X(e),O1(e,this._rawValue)&&(this._rawValue=e,this._value=a?e:y4(e),g7(this))}}function ml(c){return x2(c)?c.value:c}const ul={get:(c,e,a)=>ml(Reflect.get(c,e,a)),set:(c,e,a,s)=>{const n=c[e];return x2(n)&&!x2(a)?(n.value=a,!0):Reflect.set(c,e,a,s)}};function y7(c){return Q1(c)?c:new Proxy(c,ul)}class vl{constructor(e,a,s,n){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new o0(e,()=>{this._dirty||(this._dirty=!0,g7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=s}get value(){const e=X(this);return z7(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function pl(c,e,a=!1){let s,n;const r=U(c);return r?(s=c,n=Q2):(s=c.get,n=c.set),new vl(s,n,r||!n,a)}function V1(c,e,a,s){let n;try{n=s?c(...s):c()}catch(r){A3(r,e,a)}return n}function R2(c,e,a,s){if(U(c)){const r=V1(c,e,a,s);return r&&c7(r)&&r.catch(i=>{A3(i,e,a)}),r}const n=[];for(let r=0;r<c.length;r++)n.push(R2(c[r],e,a,s));return n}function A3(c,e,a,s=!0){const n=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=a;for(;r;){const l=r.ec;if(l){for(let h=0;h<l.length;h++)if(l[h](c,i,o)===!1)return}r=r.parent}const t=e.appContext.config.errorHandler;if(t){V1(t,null,10,[c,i,o]);return}}Hl(c,a,n,s)}function Hl(c,e,a,s=!0){console.error(c)}let V4=!1,A6=!1;const C2=[];let X2=0;const Z1=[];let e1=null,T1=0;const V7=Promise.resolve();let m0=null;function u0(c){const e=m0||V7;return c?e.then(this?c.bind(this):c):e}function zl(c){let e=X2+1,a=C2.length;for(;e<a;){const s=e+a>>>1,n=C2[s],r=M4(n);r<c||r===c&&n.pre?e=s+1:a=s}return e}function v0(c){(!C2.length||!C2.includes(c,V4&&c.allowRecurse?X2+1:X2))&&(c.id==null?C2.push(c):C2.splice(zl(c.id),0,c),M7())}function M7(){!V4&&!A6&&(A6=!0,m0=V7.then(b7))}function gl(c){const e=C2.indexOf(c);e>X2&&C2.splice(e,1)}function yl(c){W(c)?Z1.push(...c):(!e1||!e1.includes(c,c.allowRecurse?T1+1:T1))&&Z1.push(c),M7()}function Y8(c,e,a=V4?X2+1:0){for(;a<C2.length;a++){const s=C2[a];if(s&&s.pre){if(c&&s.id!==c.uid)continue;C2.splice(a,1),a--,s()}}}function C7(c){if(Z1.length){const e=[...new Set(Z1)];if(Z1.length=0,e1){e1.push(...e);return}for(e1=e,e1.sort((a,s)=>M4(a)-M4(s)),T1=0;T1<e1.length;T1++)e1[T1]();e1=null,T1=0}}const M4=c=>c.id==null?1/0:c.id,Vl=(c,e)=>{const a=M4(c)-M4(e);if(a===0){if(c.pre&&!e.pre)return-1;if(e.pre&&!c.pre)return 1}return a};function b7(c){A6=!1,V4=!0,C2.sort(Vl);try{for(X2=0;X2<C2.length;X2++){const e=C2[X2];e&&e.active!==!1&&V1(e,null,14)}}finally{X2=0,C2.length=0,C7(),V4=!1,m0=null,(C2.length||Z1.length)&&b7()}}function Ml(c,e,...a){if(c.isUnmounted)return;const s=c.vnode.props||s2;let n=a;const r=e.startsWith("update:"),i=r&&e.slice(7);if(i&&i in s){const h=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:u}=s[h]||s2;u&&(n=a.map(p=>p2(p)?p.trim():p)),d&&(n=a.map(It))}let o,t=s[o=h6(e)]||s[o=h6(Z2(e))];!t&&r&&(t=s[o=h6(r4(e))]),t&&R2(t,c,6,n);const l=s[o+"Once"];if(l){if(!c.emitted)c.emitted={};else if(c.emitted[o])return;c.emitted[o]=!0,R2(l,c,6,n)}}function w7(c,e,a=!1){const s=e.emitsCache,n=s.get(c);if(n!==void 0)return n;const r=c.emits;let i={},o=!1;if(!U(c)){const t=l=>{const h=w7(l,e,!0);h&&(o=!0,g2(i,h))};!a&&e.mixins.length&&e.mixins.forEach(t),c.extends&&t(c.extends),c.mixins&&c.mixins.forEach(t)}return!r&&!o?(i2(c)&&s.set(c,null),null):(W(r)?r.forEach(t=>i[t]=null):g2(i,r),i2(c)&&s.set(c,i),i)}function T3(c,e){return!c||!w3(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(c,e[0].toLowerCase()+e.slice(1))||K(c,r4(e))||K(c,e))}let S2=null,I3=null;function v3(c){const e=S2;return S2=c,I3=c&&c.type.__scopeId||null,e}function p0(c){I3=c}function H0(){I3=null}function T6(c,e=S2,a){if(!e||c._n)return c;const s=(...n)=>{s._d&&i5(-1);const r=v3(e);let i;try{i=c(...n)}finally{v3(r),s._d&&i5(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function u6(c){const{type:e,vnode:a,proxy:s,withProxy:n,props:r,propsOptions:[i],slots:o,attrs:t,emit:l,render:h,renderCache:d,data:u,setupState:p,ctx:w,inheritAttrs:k}=c;let O,g;const V=v3(c);try{if(a.shapeFlag&4){const x=n||s,E=x;O=K2(h.call(E,x,d,r,p,u,w)),g=t}else{const x=e;O=K2(x.length>1?x(r,{attrs:t,slots:o,emit:l}):x(r,null)),g=e.props?t:Cl(t)}}catch(x){H4.length=0,A3(x,c,1),O=t2(G2)}let F=O;if(g&&k!==!1){const x=Object.keys(g),{shapeFlag:E}=F;x.length&&E&7&&(i&&x.some(s0)&&(g=bl(g,i)),F=b1(F,g))}return a.dirs&&(F=b1(F),F.dirs=F.dirs?F.dirs.concat(a.dirs):a.dirs),a.transition&&(F.transition=a.transition),O=F,v3(V),O}const Cl=c=>{let e;for(const a in c)(a==="class"||a==="style"||w3(a))&&((e||(e={}))[a]=c[a]);return e},bl=(c,e)=>{const a={};for(const s in c)(!s0(s)||!(s.slice(9)in e))&&(a[s]=c[s]);return a};function wl(c,e,a){const{props:s,children:n,component:r}=c,{props:i,children:o,patchFlag:t}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(a&&t>=0){if(t&1024)return!0;if(t&16)return s?K8(s,i,l):!!i;if(t&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const u=h[d];if(i[u]!==s[u]&&!T3(l,u))return!0}}}else return(n||o)&&(!o||!o.$stable)?!0:s===i?!1:s?i?K8(s,i,l):!0:!!i;return!1}function K8(c,e,a){const s=Object.keys(e);if(s.length!==Object.keys(c).length)return!0;for(let n=0;n<s.length;n++){const r=s[n];if(e[r]!==c[r]&&!T3(a,r))return!0}return!1}function Ll({vnode:c,parent:e},a){for(;e&&e.subTree===c;)(c=e.vnode).el=a,e=e.parent}const L7="components";function m1(c,e){return xl(L7,c,!0,e)||c}const kl=Symbol.for("v-ndc");function xl(c,e,a=!0,s=!1){const n=S2||V2;if(n){const r=n.type;if(c===L7){const o=bf(r,!1);if(o&&(o===e||o===Z2(e)||o===x3(Z2(e))))return r}const i=X8(n[c]||r[c],e)||X8(n.appContext[c],e);return!i&&s?r:i}}function X8(c,e){return c&&(c[e]||c[Z2(e)]||c[x3(Z2(e))])}const Nl=c=>c.__isSuspense;function Sl(c,e){e&&e.pendingBranch?W(c)?e.effects.push(...c):e.effects.push(c):yl(c)}function F3(c,e){return B3(c,null,e)}function Al(c,e){return B3(c,null,{flush:"post"})}const j4={};function M1(c,e,a){return B3(c,e,a)}function B3(c,e,{immediate:a,deep:s,flush:n,onTrack:r,onTrigger:i}=s2){var o;const t=$t()===((o=V2)==null?void 0:o.scope)?V2:null;let l,h=!1,d=!1;if(x2(c)?(l=()=>c.value,h=u3(c)):Q1(c)?(l=()=>c,s=!0):W(c)?(d=!0,h=c.some(x=>Q1(x)||u3(x)),l=()=>c.map(x=>{if(x2(x))return x.value;if(Q1(x))return B1(x);if(U(x))return V1(x,t,2)})):U(c)?e?l=()=>V1(c,t,2):l=()=>{if(!(t&&t.isUnmounted))return u&&u(),R2(c,t,3,[p])}:l=Q2,e&&s){const x=l;l=()=>B1(x())}let u,p=x=>{u=V.onStop=()=>{V1(x,t,4),u=V.onStop=void 0}},w;if(w4)if(p=Q2,e?a&&R2(e,t,3,[l(),d?[]:void 0,p]):l(),n==="sync"){const x=kf();w=x.__watcherHandles||(x.__watcherHandles=[])}else return Q2;let k=d?new Array(c.length).fill(j4):j4;const O=()=>{if(V.active)if(e){const x=V.run();(s||h||(d?x.some((E,c2)=>O1(E,k[c2])):O1(x,k)))&&(u&&u(),R2(e,t,3,[x,k===j4?void 0:d&&k[0]===j4?[]:k,p]),k=x)}else V.run()};O.allowRecurse=!!e;let g;n==="sync"?g=O:n==="post"?g=()=>L2(O,t&&t.suspense):(O.pre=!0,t&&(O.id=t.uid),g=()=>v0(O));const V=new o0(l,g);e?a?O():k=V.run():n==="post"?L2(V.run.bind(V),t&&t.suspense):V.run();const F=()=>{V.stop(),t&&t.scope&&n0(t.scope.effects,V)};return w&&w.push(F),F}function Tl(c,e,a){const s=this.proxy,n=p2(c)?c.includes(".")?k7(s,c):()=>s[c]:c.bind(s,s);let r;U(e)?r=e:(r=e.handler,a=e);const i=V2;a4(this);const o=B3(n,r.bind(s),a);return i?a4(i):D1(),o}function k7(c,e){const a=e.split(".");return()=>{let s=c;for(let n=0;n<a.length&&s;n++)s=s[a[n]];return s}}function B1(c,e){if(!i2(c)||c.__v_skip||(e=e||new Set,e.has(c)))return c;if(e.add(c),x2(c))B1(c.value,e);else if(W(c))for(let a=0;a<c.length;a++)B1(c[a],e);else if(Z5(c)||J1(c))c.forEach(a=>{B1(a,e)});else if(a7(c))for(const a in c)B1(c[a],e);return c}function p3(c,e){const a=S2;if(a===null)return c;const s=_3(a)||a.proxy,n=c.dirs||(c.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,t,l=s2]=e[r];i&&(U(i)&&(i={mounted:i,updated:i}),i.deep&&B1(o),n.push({dir:i,instance:s,value:o,oldValue:void 0,arg:t,modifiers:l}))}return c}function x1(c,e,a,s){const n=c.dirs,r=e&&e.dirs;for(let i=0;i<n.length;i++){const o=n[i];r&&(o.oldValue=r[i].value);let t=o.dir[s];t&&(i4(),R2(t,a,8,[c.el,o,c,e]),o4())}}const z1=Symbol("_leaveCb"),Y4=Symbol("_enterCb");function Il(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return D3(()=>{c.isMounted=!0}),T7(()=>{c.isUnmounting=!0}),c}const P2=[Function,Array],x7={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:P2,onEnter:P2,onAfterEnter:P2,onEnterCancelled:P2,onBeforeLeave:P2,onLeave:P2,onAfterLeave:P2,onLeaveCancelled:P2,onBeforeAppear:P2,onAppear:P2,onAfterAppear:P2,onAppearCancelled:P2},Fl={name:"BaseTransition",props:x7,setup(c,{slots:e}){const a=$7(),s=Il();let n;return()=>{const r=e.default&&S7(e.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const k of r)if(k.type!==G2){i=k;break}}const o=X(c),{mode:t}=o;if(s.isLeaving)return v6(i);const l=J8(i);if(!l)return v6(i);const h=I6(l,o,s,a);F6(l,h);const d=a.subTree,u=d&&J8(d);let p=!1;const{getTransitionKey:w}=l.type;if(w){const k=w();n===void 0?n=k:k!==n&&(n=k,p=!0)}if(u&&u.type!==G2&&(!I1(l,u)||p)){const k=I6(u,o,s,a);if(F6(u,k),t==="out-in")return s.isLeaving=!0,k.afterLeave=()=>{s.isLeaving=!1,a.update.active!==!1&&a.update()},v6(i);t==="in-out"&&l.type!==G2&&(k.delayLeave=(O,g,V)=>{const F=N7(s,u);F[String(u.key)]=u,O[z1]=()=>{g(),O[z1]=void 0,delete h.delayedLeave},h.delayedLeave=V})}return i}}},Bl=Fl;function N7(c,e){const{leavingVNodes:a}=c;let s=a.get(e.type);return s||(s=Object.create(null),a.set(e.type,s)),s}function I6(c,e,a,s){const{appear:n,mode:r,persisted:i=!1,onBeforeEnter:o,onEnter:t,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:d,onLeave:u,onAfterLeave:p,onLeaveCancelled:w,onBeforeAppear:k,onAppear:O,onAfterAppear:g,onAppearCancelled:V}=e,F=String(c.key),x=N7(a,c),E=(R,L)=>{R&&R2(R,s,9,L)},c2=(R,L)=>{const D=L[1];E(R,L),W(R)?R.every(o2=>o2.length<=1)&&D():R.length<=1&&D()},Z={mode:r,persisted:i,beforeEnter(R){let L=o;if(!a.isMounted)if(n)L=k||o;else return;R[z1]&&R[z1](!0);const D=x[F];D&&I1(c,D)&&D.el[z1]&&D.el[z1](),E(L,[R])},enter(R){let L=t,D=l,o2=h;if(!a.isMounted)if(n)L=O||t,D=g||l,o2=V||h;else return;let A=!1;const q=R[Y4]=d2=>{A||(A=!0,d2?E(o2,[R]):E(D,[R]),Z.delayedLeave&&Z.delayedLeave(),R[Y4]=void 0)};L?c2(L,[R,q]):q()},leave(R,L){const D=String(c.key);if(R[Y4]&&R[Y4](!0),a.isUnmounting)return L();E(d,[R]);let o2=!1;const A=R[z1]=q=>{o2||(o2=!0,L(),q?E(w,[R]):E(p,[R]),R[z1]=void 0,x[D]===c&&delete x[D])};x[D]=c,u?c2(u,[R,A]):A()},clone(R){return I6(R,e,a,s)}};return Z}function v6(c){if(P3(c))return c=b1(c),c.children=null,c}function J8(c){return P3(c)?c.children?c.children[0]:void 0:c}function F6(c,e){c.shapeFlag&6&&c.component?F6(c.component.subTree,e):c.shapeFlag&128?(c.ssContent.transition=e.clone(c.ssContent),c.ssFallback.transition=e.clone(c.ssFallback)):c.transition=e}function S7(c,e=!1,a){let s=[],n=0;for(let r=0;r<c.length;r++){let i=c[r];const o=a==null?i.key:String(a)+String(i.key!=null?i.key:r);i.type===M2?(i.patchFlag&128&&n++,s=s.concat(S7(i.children,e,o))):(e||i.type!==G2)&&s.push(o!=null?b1(i,{key:o}):i)}if(n>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function c1(c,e){return U(c)?g2({name:c.name},e,{setup:c}):c}const o3=c=>!!c.type.__asyncLoader,P3=c=>c.type.__isKeepAlive;function Pl(c,e){A7(c,"a",e)}function Wl(c,e){A7(c,"da",e)}function A7(c,e,a=V2){const s=c.__wdc||(c.__wdc=()=>{let n=a;for(;n;){if(n.isDeactivated)return;n=n.parent}return c()});if(W3(e,s,a),a){let n=a.parent;for(;n&&n.parent;)P3(n.parent.vnode)&&Rl(s,e,a,n),n=n.parent}}function Rl(c,e,a,s){const n=W3(e,c,s,!0);z0(()=>{n0(s[e],n)},a)}function W3(c,e,a=V2,s=!1){if(a){const n=a[c]||(a[c]=[]),r=e.__weh||(e.__weh=(...i)=>{if(a.isUnmounted)return;i4(),a4(a);const o=R2(e,a,c,i);return D1(),o4(),o});return s?n.unshift(r):n.push(r),r}}const o1=c=>(e,a=V2)=>(!w4||c==="sp")&&W3(c,(...s)=>e(...s),a),R3=o1("bm"),D3=o1("m"),Dl=o1("bu"),Ol=o1("u"),T7=o1("bum"),z0=o1("um"),El=o1("sp"),_l=o1("rtg"),$l=o1("rtc");function Ul(c,e=V2){W3("ec",c,e)}function C4(c,e,a,s){let n;const r=a&&a[s];if(W(c)||p2(c)){n=new Array(c.length);for(let i=0,o=c.length;i<o;i++)n[i]=e(c[i],i,void 0,r&&r[i])}else if(typeof c=="number"){n=new Array(c);for(let i=0;i<c;i++)n[i]=e(i+1,i,void 0,r&&r[i])}else if(i2(c))if(c[Symbol.iterator])n=Array.from(c,(i,o)=>e(i,o,void 0,r&&r[o]));else{const i=Object.keys(c);n=new Array(i.length);for(let o=0,t=i.length;o<t;o++){const l=i[o];n[o]=e(c[l],l,o,r&&r[o])}}else n=[];return a&&(a[s]=n),n}const B6=c=>c?U7(c)?_3(c)||c.proxy:B6(c.parent):null,p4=g2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>B6(c.parent),$root:c=>B6(c.root),$emit:c=>c.emit,$options:c=>g0(c),$forceUpdate:c=>c.f||(c.f=()=>v0(c.update)),$nextTick:c=>c.n||(c.n=u0.bind(c.proxy)),$watch:c=>Tl.bind(c)}),p6=(c,e)=>c!==s2&&!c.__isScriptSetup&&K(c,e),ql={get({_:c},e){const{ctx:a,setupState:s,data:n,props:r,accessCache:i,type:o,appContext:t}=c;let l;if(e[0]!=="$"){const p=i[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return n[e];case 4:return a[e];case 3:return r[e]}else{if(p6(s,e))return i[e]=1,s[e];if(n!==s2&&K(n,e))return i[e]=2,n[e];if((l=c.propsOptions[0])&&K(l,e))return i[e]=3,r[e];if(a!==s2&&K(a,e))return i[e]=4,a[e];P6&&(i[e]=0)}}const h=p4[e];let d,u;if(h)return e==="$attrs"&&k2(c,"get",e),h(c);if((d=o.__cssModules)&&(d=d[e]))return d;if(a!==s2&&K(a,e))return i[e]=4,a[e];if(u=t.config.globalProperties,K(u,e))return u[e]},set({_:c},e,a){const{data:s,setupState:n,ctx:r}=c;return p6(n,e)?(n[e]=a,!0):s!==s2&&K(s,e)?(s[e]=a,!0):K(c.props,e)||e[0]==="$"&&e.slice(1)in c?!1:(r[e]=a,!0)},has({_:{data:c,setupState:e,accessCache:a,ctx:s,appContext:n,propsOptions:r}},i){let o;return!!a[i]||c!==s2&&K(c,i)||p6(e,i)||(o=r[0])&&K(o,i)||K(s,i)||K(p4,i)||K(n.config.globalProperties,i)},defineProperty(c,e,a){return a.get!=null?c._.accessCache[e]=0:K(a,"value")&&this.set(c,e,a.value,null),Reflect.defineProperty(c,e,a)}};function Q8(c){return W(c)?c.reduce((e,a)=>(e[a]=null,e),{}):c}let P6=!0;function Gl(c){const e=g0(c),a=c.proxy,s=c.ctx;P6=!1,e.beforeCreate&&Z8(e.beforeCreate,c,"bc");const{data:n,computed:r,methods:i,watch:o,provide:t,inject:l,created:h,beforeMount:d,mounted:u,beforeUpdate:p,updated:w,activated:k,deactivated:O,beforeDestroy:g,beforeUnmount:V,destroyed:F,unmounted:x,render:E,renderTracked:c2,renderTriggered:Z,errorCaptured:R,serverPrefetch:L,expose:D,inheritAttrs:o2,components:A,directives:q,filters:d2}=e;if(l&&jl(l,s,null),i)for(const a2 in i){const J=i[a2];U(J)&&(s[a2]=J.bind(a))}if(n){const a2=n.call(a,a);i2(a2)&&(c.data=f0(a2))}if(P6=!0,r)for(const a2 in r){const J=r[a2],I2=U(J)?J.bind(a,a):U(J.get)?J.get.bind(a,a):Q2,$1=!U(J)&&U(J.set)?J.set.bind(a):Q2,F2=G({get:I2,set:$1});Object.defineProperty(s,a2,{enumerable:!0,configurable:!0,get:()=>F2.value,set:B2=>F2.value=B2})}if(o)for(const a2 in o)I7(o[a2],s,a,a2);if(t){const a2=U(t)?t.call(a):t;Reflect.ownKeys(a2).forEach(J=>{Zl(J,a2[J])})}h&&Z8(h,c,"c");function m2(a2,J){W(J)?J.forEach(I2=>a2(I2.bind(a))):J&&a2(J.bind(a))}if(m2(R3,d),m2(D3,u),m2(Dl,p),m2(Ol,w),m2(Pl,k),m2(Wl,O),m2(Ul,R),m2($l,c2),m2(_l,Z),m2(T7,V),m2(z0,x),m2(El,L),W(D))if(D.length){const a2=c.exposed||(c.exposed={});D.forEach(J=>{Object.defineProperty(a2,J,{get:()=>a[J],set:I2=>a[J]=I2})})}else c.exposed||(c.exposed={});E&&c.render===Q2&&(c.render=E),o2!=null&&(c.inheritAttrs=o2),A&&(c.components=A),q&&(c.directives=q)}function jl(c,e,a=Q2){W(c)&&(c=W6(c));for(const s in c){const n=c[s];let r;i2(n)?"default"in n?r=t3(n.from||s,n.default,!0):r=t3(n.from||s):r=t3(n),x2(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):e[s]=r}}function Z8(c,e,a){R2(W(c)?c.map(s=>s.bind(e.proxy)):c.bind(e.proxy),e,a)}function I7(c,e,a,s){const n=s.includes(".")?k7(a,s):()=>a[s];if(p2(c)){const r=e[c];U(r)&&M1(n,r)}else if(U(c))M1(n,c.bind(a));else if(i2(c))if(W(c))c.forEach(r=>I7(r,e,a,s));else{const r=U(c.handler)?c.handler.bind(a):e[c.handler];U(r)&&M1(n,r,c)}}function g0(c){const e=c.type,{mixins:a,extends:s}=e,{mixins:n,optionsCache:r,config:{optionMergeStrategies:i}}=c.appContext,o=r.get(e);let t;return o?t=o:!n.length&&!a&&!s?t=e:(t={},n.length&&n.forEach(l=>H3(t,l,i,!0)),H3(t,e,i)),i2(e)&&r.set(e,t),t}function H3(c,e,a,s=!1){const{mixins:n,extends:r}=e;r&&H3(c,r,a,!0),n&&n.forEach(i=>H3(c,i,a,!0));for(const i in e)if(!(s&&i==="expose")){const o=Yl[i]||a&&a[i];c[i]=o?o(c[i],e[i]):e[i]}return c}const Yl={data:c5,props:e5,emits:e5,methods:u4,computed:u4,beforeCreate:b2,created:b2,beforeMount:b2,mounted:b2,beforeUpdate:b2,updated:b2,beforeDestroy:b2,beforeUnmount:b2,destroyed:b2,unmounted:b2,activated:b2,deactivated:b2,errorCaptured:b2,serverPrefetch:b2,components:u4,directives:u4,watch:Xl,provide:c5,inject:Kl};function c5(c,e){return e?c?function(){return g2(U(c)?c.call(this,this):c,U(e)?e.call(this,this):e)}:e:c}function Kl(c,e){return u4(W6(c),W6(e))}function W6(c){if(W(c)){const e={};for(let a=0;a<c.length;a++)e[c[a]]=c[a];return e}return c}function b2(c,e){return c?[...new Set([].concat(c,e))]:e}function u4(c,e){return c?g2(Object.create(null),c,e):e}function e5(c,e){return c?W(c)&&W(e)?[...new Set([...c,...e])]:g2(Object.create(null),Q8(c),Q8(e??{})):e}function Xl(c,e){if(!c)return e;if(!e)return c;const a=g2(Object.create(null),c);for(const s in e)a[s]=b2(c[s],e[s]);return a}function F7(){return{app:null,config:{isNativeTag:xt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jl=0;function Ql(c,e){return function(s,n=null){U(s)||(s=g2({},s)),n!=null&&!i2(n)&&(n=null);const r=F7(),i=new WeakSet;let o=!1;const t=r.app={_uid:Jl++,_component:s,_props:n,_container:null,_context:r,_instance:null,version:xf,get config(){return r.config},set config(l){},use(l,...h){return i.has(l)||(l&&U(l.install)?(i.add(l),l.install(t,...h)):U(l)&&(i.add(l),l(t,...h))),t},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),t},component(l,h){return h?(r.components[l]=h,t):r.components[l]},directive(l,h){return h?(r.directives[l]=h,t):r.directives[l]},mount(l,h,d){if(!o){const u=t2(s,n);return u.appContext=r,h&&e?e(u,l):c(u,l,d),o=!0,t._container=l,l.__vue_app__=t,_3(u.component)||u.component.proxy}},unmount(){o&&(c(null,t._container),delete t._container.__vue_app__)},provide(l,h){return r.provides[l]=h,t},runWithContext(l){z3=t;try{return l()}finally{z3=null}}};return t}}let z3=null;function Zl(c,e){if(V2){let a=V2.provides;const s=V2.parent&&V2.parent.provides;s===a&&(a=V2.provides=Object.create(s)),a[c]=e}}function t3(c,e,a=!1){const s=V2||S2;if(s||z3){const n=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:z3._context.provides;if(n&&c in n)return n[c];if(arguments.length>1)return a&&U(e)?e.call(s&&s.proxy):e}}function cf(c,e,a,s=!1){const n={},r={};m3(r,E3,1),c.propsDefaults=Object.create(null),B7(c,e,n,r);for(const i in c.propsOptions[0])i in n||(n[i]=void 0);a?c.props=s?n:fl(n):c.type.props?c.props=n:c.props=r,c.attrs=r}function ef(c,e,a,s){const{props:n,attrs:r,vnode:{patchFlag:i}}=c,o=X(n),[t]=c.propsOptions;let l=!1;if((s||i>0)&&!(i&16)){if(i&8){const h=c.vnode.dynamicProps;for(let d=0;d<h.length;d++){let u=h[d];if(T3(c.emitsOptions,u))continue;const p=e[u];if(t)if(K(r,u))p!==r[u]&&(r[u]=p,l=!0);else{const w=Z2(u);n[w]=R6(t,o,w,p,c,!1)}else p!==r[u]&&(r[u]=p,l=!0)}}}else{B7(c,e,n,r)&&(l=!0);let h;for(const d in o)(!e||!K(e,d)&&((h=r4(d))===d||!K(e,h)))&&(t?a&&(a[d]!==void 0||a[h]!==void 0)&&(n[d]=R6(t,o,d,void 0,c,!0)):delete n[d]);if(r!==o)for(const d in r)(!e||!K(e,d))&&(delete r[d],l=!0)}l&&s1(c,"set","$attrs")}function B7(c,e,a,s){const[n,r]=c.propsOptions;let i=!1,o;if(e)for(let t in e){if(i3(t))continue;const l=e[t];let h;n&&K(n,h=Z2(t))?!r||!r.includes(h)?a[h]=l:(o||(o={}))[h]=l:T3(c.emitsOptions,t)||(!(t in s)||l!==s[t])&&(s[t]=l,i=!0)}if(r){const t=X(a),l=o||s2;for(let h=0;h<r.length;h++){const d=r[h];a[d]=R6(n,t,d,l[d],c,!K(l,d))}}return i}function R6(c,e,a,s,n,r){const i=c[a];if(i!=null){const o=K(i,"default");if(o&&s===void 0){const t=i.default;if(i.type!==Function&&!i.skipFactory&&U(t)){const{propsDefaults:l}=n;a in l?s=l[a]:(a4(n),s=l[a]=t.call(null,e),D1())}else s=t}i[0]&&(r&&!o?s=!1:i[1]&&(s===""||s===r4(a))&&(s=!0))}return s}function P7(c,e,a=!1){const s=e.propsCache,n=s.get(c);if(n)return n;const r=c.props,i={},o=[];let t=!1;if(!U(c)){const h=d=>{t=!0;const[u,p]=P7(d,e,!0);g2(i,u),p&&o.push(...p)};!a&&e.mixins.length&&e.mixins.forEach(h),c.extends&&h(c.extends),c.mixins&&c.mixins.forEach(h)}if(!r&&!t)return i2(c)&&s.set(c,X1),X1;if(W(r))for(let h=0;h<r.length;h++){const d=Z2(r[h]);a5(d)&&(i[d]=s2)}else if(r)for(const h in r){const d=Z2(h);if(a5(d)){const u=r[h],p=i[d]=W(u)||U(u)?{type:u}:g2({},u);if(p){const w=r5(Boolean,p.type),k=r5(String,p.type);p[0]=w>-1,p[1]=k<0||w<k,(w>-1||K(p,"default"))&&o.push(d)}}}const l=[i,o];return i2(c)&&s.set(c,l),l}function a5(c){return c[0]!=="$"}function s5(c){const e=c&&c.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:c===null?"null":""}function n5(c,e){return s5(c)===s5(e)}function r5(c,e){return W(e)?e.findIndex(a=>n5(a,c)):U(e)&&n5(e,c)?0:-1}const W7=c=>c[0]==="_"||c==="$stable",y0=c=>W(c)?c.map(K2):[K2(c)],af=(c,e,a)=>{if(e._n)return e;const s=T6((...n)=>y0(e(...n)),a);return s._c=!1,s},R7=(c,e,a)=>{const s=c._ctx;for(const n in c){if(W7(n))continue;const r=c[n];if(U(r))e[n]=af(n,r,s);else if(r!=null){const i=y0(r);e[n]=()=>i}}},D7=(c,e)=>{const a=y0(e);c.slots.default=()=>a},sf=(c,e)=>{if(c.vnode.shapeFlag&32){const a=e._;a?(c.slots=X(e),m3(e,"_",a)):R7(e,c.slots={})}else c.slots={},e&&D7(c,e);m3(c.slots,E3,1)},nf=(c,e,a)=>{const{vnode:s,slots:n}=c;let r=!0,i=s2;if(s.shapeFlag&32){const o=e._;o?a&&o===1?r=!1:(g2(n,e),!a&&o===1&&delete n._):(r=!e.$stable,R7(e,n)),i=e}else e&&(D7(c,e),i={default:1});if(r)for(const o in n)!W7(o)&&i[o]==null&&delete n[o]};function D6(c,e,a,s,n=!1){if(W(c)){c.forEach((u,p)=>D6(u,e&&(W(e)?e[p]:e),a,s,n));return}if(o3(s)&&!n)return;const r=s.shapeFlag&4?_3(s.component)||s.component.proxy:s.el,i=n?null:r,{i:o,r:t}=c,l=e&&e.r,h=o.refs===s2?o.refs={}:o.refs,d=o.setupState;if(l!=null&&l!==t&&(p2(l)?(h[l]=null,K(d,l)&&(d[l]=null)):x2(l)&&(l.value=null)),U(t))V1(t,o,12,[i,h]);else{const u=p2(t),p=x2(t);if(u||p){const w=()=>{if(c.f){const k=u?K(d,t)?d[t]:h[t]:t.value;n?W(k)&&n0(k,r):W(k)?k.includes(r)||k.push(r):u?(h[t]=[r],K(d,t)&&(d[t]=h[t])):(t.value=[r],c.k&&(h[c.k]=t.value))}else u?(h[t]=i,K(d,t)&&(d[t]=i)):p&&(t.value=i,c.k&&(h[c.k]=i))};i?(w.id=-1,L2(w,a)):w()}}}const L2=Sl;function rf(c){return of(c)}function of(c,e){const a=L6();a.__VUE__=!0;const{insert:s,remove:n,patchProp:r,createElement:i,createText:o,createComment:t,setText:l,setElementText:h,parentNode:d,nextSibling:u,setScopeId:p=Q2,insertStaticContent:w}=c,k=(f,m,v,H=null,z=null,C=null,N=!1,M=null,b=!!m.dynamicChildren)=>{if(f===m)return;f&&!I1(f,m)&&(H=q1(f),B2(f,z,C,!0),f=null),m.patchFlag===-2&&(b=!1,m.dynamicChildren=null);const{type:y,ref:B,shapeFlag:T}=m;switch(y){case O3:O(f,m,v,H);break;case G2:g(f,m,v,H);break;case l3:f==null&&V(m,v,H,N);break;case M2:A(f,m,v,H,z,C,N,M,b);break;default:T&1?E(f,m,v,H,z,C,N,M,b):T&6?q(f,m,v,H,z,C,N,M,b):(T&64||T&128)&&y.process(f,m,v,H,z,C,N,M,b,h1)}B!=null&&z&&D6(B,f&&f.ref,C,m||f,!m)},O=(f,m,v,H)=>{if(f==null)s(m.el=o(m.children),v,H);else{const z=m.el=f.el;m.children!==f.children&&l(z,m.children)}},g=(f,m,v,H)=>{f==null?s(m.el=t(m.children||""),v,H):m.el=f.el},V=(f,m,v,H)=>{[f.el,f.anchor]=w(f.children,m,v,H,f.el,f.anchor)},F=({el:f,anchor:m},v,H)=>{let z;for(;f&&f!==m;)z=u(f),s(f,v,H),f=z;s(m,v,H)},x=({el:f,anchor:m})=>{let v;for(;f&&f!==m;)v=u(f),n(f),f=v;n(m)},E=(f,m,v,H,z,C,N,M,b)=>{N=N||m.type==="svg",f==null?c2(m,v,H,z,C,N,M,b):L(f,m,z,C,N,M,b)},c2=(f,m,v,H,z,C,N,M)=>{let b,y;const{type:B,props:T,shapeFlag:P,transition:_,dirs:j}=f;if(b=f.el=i(f.type,C,T&&T.is,T),P&8?h(b,f.children):P&16&&R(f.children,b,null,H,z,C&&B!=="foreignObject",N,M),j&&x1(f,null,H,"created"),Z(b,f,f.scopeId,N,H),T){for(const Q in T)Q!=="value"&&!i3(Q)&&r(b,Q,null,T[Q],C,f.children,H,z,D2);"value"in T&&r(b,"value",null,T.value),(y=T.onVnodeBeforeMount)&&Y2(y,H,f)}j&&x1(f,null,H,"beforeMount");const e2=tf(z,_);e2&&_.beforeEnter(b),s(b,m,v),((y=T&&T.onVnodeMounted)||e2||j)&&L2(()=>{y&&Y2(y,H,f),e2&&_.enter(b),j&&x1(f,null,H,"mounted")},z)},Z=(f,m,v,H,z)=>{if(v&&p(f,v),H)for(let C=0;C<H.length;C++)p(f,H[C]);if(z){let C=z.subTree;if(m===C){const N=z.vnode;Z(f,N,N.scopeId,N.slotScopeIds,z.parent)}}},R=(f,m,v,H,z,C,N,M,b=0)=>{for(let y=b;y<f.length;y++){const B=f[y]=M?g1(f[y]):K2(f[y]);k(null,B,m,v,H,z,C,N,M)}},L=(f,m,v,H,z,C,N)=>{const M=m.el=f.el;let{patchFlag:b,dynamicChildren:y,dirs:B}=m;b|=f.patchFlag&16;const T=f.props||s2,P=m.props||s2;let _;v&&N1(v,!1),(_=P.onVnodeBeforeUpdate)&&Y2(_,v,m,f),B&&x1(m,f,v,"beforeUpdate"),v&&N1(v,!0);const j=z&&m.type!=="foreignObject";if(y?D(f.dynamicChildren,y,M,v,H,j,C):N||J(f,m,M,null,v,H,j,C,!1),b>0){if(b&16)o2(M,m,T,P,v,H,z);else if(b&2&&T.class!==P.class&&r(M,"class",null,P.class,z),b&4&&r(M,"style",T.style,P.style,z),b&8){const e2=m.dynamicProps;for(let Q=0;Q<e2.length;Q++){const u2=e2[Q],O2=T[u2],G1=P[u2];(G1!==O2||u2==="value")&&r(M,u2,O2,G1,z,f.children,v,H,D2)}}b&1&&f.children!==m.children&&h(M,m.children)}else!N&&y==null&&o2(M,m,T,P,v,H,z);((_=P.onVnodeUpdated)||B)&&L2(()=>{_&&Y2(_,v,m,f),B&&x1(m,f,v,"updated")},H)},D=(f,m,v,H,z,C,N)=>{for(let M=0;M<m.length;M++){const b=f[M],y=m[M],B=b.el&&(b.type===M2||!I1(b,y)||b.shapeFlag&70)?d(b.el):v;k(b,y,B,null,H,z,C,N,!0)}},o2=(f,m,v,H,z,C,N)=>{if(v!==H){if(v!==s2)for(const M in v)!i3(M)&&!(M in H)&&r(f,M,v[M],null,N,m.children,z,C,D2);for(const M in H){if(i3(M))continue;const b=H[M],y=v[M];b!==y&&M!=="value"&&r(f,M,y,b,N,m.children,z,C,D2)}"value"in H&&r(f,"value",v.value,H.value)}},A=(f,m,v,H,z,C,N,M,b)=>{const y=m.el=f?f.el:o(""),B=m.anchor=f?f.anchor:o("");let{patchFlag:T,dynamicChildren:P,slotScopeIds:_}=m;_&&(M=M?M.concat(_):_),f==null?(s(y,v,H),s(B,v,H),R(m.children,v,B,z,C,N,M,b)):T>0&&T&64&&P&&f.dynamicChildren?(D(f.dynamicChildren,P,v,z,C,N,M),(m.key!=null||z&&m===z.subTree)&&O7(f,m,!0)):J(f,m,v,B,z,C,N,M,b)},q=(f,m,v,H,z,C,N,M,b)=>{m.slotScopeIds=M,f==null?m.shapeFlag&512?z.ctx.activate(m,v,H,N,b):d2(m,v,H,z,C,N,b):f1(f,m,b)},d2=(f,m,v,H,z,C,N)=>{const M=f.component=gf(f,H,z);if(P3(f)&&(M.ctx.renderer=h1),yf(M),M.asyncDep){if(z&&z.registerDep(M,m2),!f.el){const b=M.subTree=t2(G2);g(null,b,m,v)}return}m2(M,f,m,v,z,C,N)},f1=(f,m,v)=>{const H=m.component=f.component;if(wl(f,m,v))if(H.asyncDep&&!H.asyncResolved){a2(H,m,v);return}else H.next=m,gl(H.update),H.update();else m.el=f.el,H.vnode=m},m2=(f,m,v,H,z,C,N)=>{const M=()=>{if(f.isMounted){let{next:B,bu:T,u:P,parent:_,vnode:j}=f,e2=B,Q;N1(f,!1),B?(B.el=j.el,a2(f,B,N)):B=j,T&&d6(T),(Q=B.props&&B.props.onVnodeBeforeUpdate)&&Y2(Q,_,B,j),N1(f,!0);const u2=u6(f),O2=f.subTree;f.subTree=u2,k(O2,u2,d(O2.el),q1(O2),f,z,C),B.el=u2.el,e2===null&&Ll(f,u2.el),P&&L2(P,z),(Q=B.props&&B.props.onVnodeUpdated)&&L2(()=>Y2(Q,_,B,j),z)}else{let B;const{el:T,props:P}=m,{bm:_,m:j,parent:e2}=f,Q=o3(m);if(N1(f,!1),_&&d6(_),!Q&&(B=P&&P.onVnodeBeforeMount)&&Y2(B,e2,m),N1(f,!0),T&&H2){const u2=()=>{f.subTree=u6(f),H2(T,f.subTree,f,z,null)};Q?m.type.__asyncLoader().then(()=>!f.isUnmounted&&u2()):u2()}else{const u2=f.subTree=u6(f);k(null,u2,v,H,f,z,C),m.el=u2.el}if(j&&L2(j,z),!Q&&(B=P&&P.onVnodeMounted)){const u2=m;L2(()=>Y2(B,e2,u2),z)}(m.shapeFlag&256||e2&&o3(e2.vnode)&&e2.vnode.shapeFlag&256)&&f.a&&L2(f.a,z),f.isMounted=!0,m=v=H=null}},b=f.effect=new o0(M,()=>v0(y),f.scope),y=f.update=()=>b.run();y.id=f.uid,N1(f,!0),y()},a2=(f,m,v)=>{m.component=f;const H=f.vnode.props;f.vnode=m,f.next=null,ef(f,m.props,H,v),nf(f,m.children,v),i4(),Y8(f),o4()},J=(f,m,v,H,z,C,N,M,b=!1)=>{const y=f&&f.children,B=f?f.shapeFlag:0,T=m.children,{patchFlag:P,shapeFlag:_}=m;if(P>0){if(P&128){$1(y,T,v,H,z,C,N,M,b);return}else if(P&256){I2(y,T,v,H,z,C,N,M,b);return}}_&8?(B&16&&D2(y,z,C),T!==y&&h(v,T)):B&16?_&16?$1(y,T,v,H,z,C,N,M,b):D2(y,z,C,!0):(B&8&&h(v,""),_&16&&R(T,v,H,z,C,N,M,b))},I2=(f,m,v,H,z,C,N,M,b)=>{f=f||X1,m=m||X1;const y=f.length,B=m.length,T=Math.min(y,B);let P;for(P=0;P<T;P++){const _=m[P]=b?g1(m[P]):K2(m[P]);k(f[P],_,v,null,z,C,N,M,b)}y>B?D2(f,z,C,!0,!1,T):R(m,v,H,z,C,N,M,b,T)},$1=(f,m,v,H,z,C,N,M,b)=>{let y=0;const B=m.length;let T=f.length-1,P=B-1;for(;y<=T&&y<=P;){const _=f[y],j=m[y]=b?g1(m[y]):K2(m[y]);if(I1(_,j))k(_,j,v,null,z,C,N,M,b);else break;y++}for(;y<=T&&y<=P;){const _=f[T],j=m[P]=b?g1(m[P]):K2(m[P]);if(I1(_,j))k(_,j,v,null,z,C,N,M,b);else break;T--,P--}if(y>T){if(y<=P){const _=P+1,j=_<B?m[_].el:H;for(;y<=P;)k(null,m[y]=b?g1(m[y]):K2(m[y]),v,j,z,C,N,M,b),y++}}else if(y>P)for(;y<=T;)B2(f[y],z,C,!0),y++;else{const _=y,j=y,e2=new Map;for(y=j;y<=P;y++){const N2=m[y]=b?g1(m[y]):K2(m[y]);N2.key!=null&&e2.set(N2.key,y)}let Q,u2=0;const O2=P-j+1;let G1=!1,W8=0;const l4=new Array(O2);for(y=0;y<O2;y++)l4[y]=0;for(y=_;y<=T;y++){const N2=f[y];if(u2>=O2){B2(N2,z,C,!0);continue}let j2;if(N2.key!=null)j2=e2.get(N2.key);else for(Q=j;Q<=P;Q++)if(l4[Q-j]===0&&I1(N2,m[Q])){j2=Q;break}j2===void 0?B2(N2,z,C,!0):(l4[j2-j]=y+1,j2>=W8?W8=j2:G1=!0,k(N2,m[j2],v,null,z,C,N,M,b),u2++)}const R8=G1?lf(l4):X1;for(Q=R8.length-1,y=O2-1;y>=0;y--){const N2=j+y,j2=m[N2],D8=N2+1<B?m[N2+1].el:H;l4[y]===0?k(null,j2,v,D8,z,C,N,M,b):G1&&(Q<0||y!==R8[Q]?F2(j2,v,D8,2):Q--)}}},F2=(f,m,v,H,z=null)=>{const{el:C,type:N,transition:M,children:b,shapeFlag:y}=f;if(y&6){F2(f.component.subTree,m,v,H);return}if(y&128){f.suspense.move(m,v,H);return}if(y&64){N.move(f,m,v,h1);return}if(N===M2){s(C,m,v);for(let T=0;T<b.length;T++)F2(b[T],m,v,H);s(f.anchor,m,v);return}if(N===l3){F(f,m,v);return}if(H!==2&&y&1&&M)if(H===0)M.beforeEnter(C),s(C,m,v),L2(()=>M.enter(C),z);else{const{leave:T,delayLeave:P,afterLeave:_}=M,j=()=>s(C,m,v),e2=()=>{T(C,()=>{j(),_&&_()})};P?P(C,j,e2):e2()}else s(C,m,v)},B2=(f,m,v,H=!1,z=!1)=>{const{type:C,props:N,ref:M,children:b,dynamicChildren:y,shapeFlag:B,patchFlag:T,dirs:P}=f;if(M!=null&&D6(M,null,v,f,!0),B&256){m.ctx.deactivate(f);return}const _=B&1&&P,j=!o3(f);let e2;if(j&&(e2=N&&N.onVnodeBeforeUnmount)&&Y2(e2,m,f),B&6)U1(f.component,v,H);else{if(B&128){f.suspense.unmount(v,H);return}_&&x1(f,null,m,"beforeUnmount"),B&64?f.type.remove(f,m,v,z,h1,H):y&&(C!==M2||T>0&&T&64)?D2(y,m,v,!1,!0):(C===M2&&T&384||!z&&B&16)&&D2(b,m,v),H&&O4(f)}(j&&(e2=N&&N.onVnodeUnmounted)||_)&&L2(()=>{e2&&Y2(e2,m,f),_&&x1(f,null,m,"unmounted")},v)},O4=f=>{const{type:m,el:v,anchor:H,transition:z}=f;if(m===M2){f6(v,H);return}if(m===l3){x(f);return}const C=()=>{n(v),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(f.shapeFlag&1&&z&&!z.persisted){const{leave:N,delayLeave:M}=z,b=()=>N(v,C);M?M(f.el,C,b):b()}else C()},f6=(f,m)=>{let v;for(;f!==m;)v=u(f),n(f),f=v;n(m)},U1=(f,m,v)=>{const{bum:H,scope:z,update:C,subTree:N,um:M}=f;H&&d6(H),z.stop(),C&&(C.active=!1,B2(N,f,m,v)),M&&L2(M,m),L2(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},D2=(f,m,v,H=!1,z=!1,C=0)=>{for(let N=C;N<f.length;N++)B2(f[N],m,v,H,z)},q1=f=>f.shapeFlag&6?q1(f.component.subTree):f.shapeFlag&128?f.suspense.next():u(f.anchor||f.el),E4=(f,m,v)=>{f==null?m._vnode&&B2(m._vnode,null,null,!0):k(m._vnode||null,f,m,null,null,null,v),Y8(),C7(),m._vnode=f},h1={p:k,um:B2,m:F2,r:O4,mt:d2,mc:R,pc:J,pbc:D,n:q1,o:c};let Y,H2;return e&&([Y,H2]=e(h1)),{render:E4,hydrate:Y,createApp:Ql(E4,Y)}}function N1({effect:c,update:e},a){c.allowRecurse=e.allowRecurse=a}function tf(c,e){return(!c||c&&!c.pendingBranch)&&e&&!e.persisted}function O7(c,e,a=!1){const s=c.children,n=e.children;if(W(s)&&W(n))for(let r=0;r<s.length;r++){const i=s[r];let o=n[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=n[r]=g1(n[r]),o.el=i.el),a||O7(i,o)),o.type===O3&&(o.el=i.el)}}function lf(c){const e=c.slice(),a=[0];let s,n,r,i,o;const t=c.length;for(s=0;s<t;s++){const l=c[s];if(l!==0){if(n=a[a.length-1],c[n]<l){e[s]=n,a.push(s);continue}for(r=0,i=a.length-1;r<i;)o=r+i>>1,c[a[o]]<l?r=o+1:i=o;l<c[a[r]]&&(r>0&&(e[s]=a[r-1]),a[r]=s)}}for(r=a.length,i=a[r-1];r-- >0;)a[r]=i,i=e[i];return a}const ff=c=>c.__isTeleport,M2=Symbol.for("v-fgt"),O3=Symbol.for("v-txt"),G2=Symbol.for("v-cmt"),l3=Symbol.for("v-stc"),H4=[];let U2=null;function h2(c=!1){H4.push(U2=c?null:[])}function hf(){H4.pop(),U2=H4[H4.length-1]||null}let b4=1;function i5(c){b4+=c}function E7(c){return c.dynamicChildren=b4>0?U2||X1:null,hf(),b4>0&&U2&&U2.push(c),c}function v2(c,e,a,s,n,r){return E7($(c,e,a,s,n,r,!0))}function df(c,e,a,s,n){return E7(t2(c,e,a,s,n,!0))}function O6(c){return c?c.__v_isVNode===!0:!1}function I1(c,e){return c.type===e.type&&c.key===e.key}const E3="__vInternal",_7=({key:c})=>c??null,f3=({ref:c,ref_key:e,ref_for:a})=>(typeof c=="number"&&(c=""+c),c!=null?p2(c)||x2(c)||U(c)?{i:S2,r:c,k:e,f:!!a}:c:null);function $(c,e=null,a=null,s=0,n=null,r=c===M2?0:1,i=!1,o=!1){const t={__v_isVNode:!0,__v_skip:!0,type:c,props:e,key:e&&_7(e),ref:e&&f3(e),scopeId:I3,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:S2};return o?(M0(t,a),r&128&&c.normalize(t)):a&&(t.shapeFlag|=p2(a)?8:16),b4>0&&!i&&U2&&(t.patchFlag>0||r&6)&&t.patchFlag!==32&&U2.push(t),t}const t2=mf;function mf(c,e=null,a=null,s=0,n=null,r=!1){if((!c||c===kl)&&(c=G2),O6(c)){const o=b1(c,e,!0);return a&&M0(o,a),b4>0&&!r&&U2&&(o.shapeFlag&6?U2[U2.indexOf(c)]=o:U2.push(o)),o.patchFlag|=-2,o}if(wf(c)&&(c=c.__vccOpts),e){e=uf(e);let{class:o,style:t}=e;o&&!p2(o)&&(e.class=A2(o)),i2(t)&&(p7(t)&&!W(t)&&(t=g2({},t)),e.style=N3(t))}const i=p2(c)?1:Nl(c)?128:ff(c)?64:i2(c)?4:U(c)?2:0;return $(c,e,a,s,n,i,r,!0)}function uf(c){return c?p7(c)||E3 in c?g2({},c):c:null}function b1(c,e,a=!1){const{props:s,ref:n,patchFlag:r,children:i}=c,o=e?pf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:o,key:o&&_7(o),ref:e&&e.ref?a&&n?W(n)?n.concat(f3(e)):[n,f3(e)]:f3(e):n,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:e&&c.type!==M2?r===-1?16:r|16:r,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&b1(c.ssContent),ssFallback:c.ssFallback&&b1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function V0(c=" ",e=0){return t2(O3,null,c,e)}function vf(c="",e=!1){return e?(h2(),df(G2,null,c)):t2(G2,null,c)}function K2(c){return c==null||typeof c=="boolean"?t2(G2):W(c)?t2(M2,null,c.slice()):typeof c=="object"?g1(c):t2(O3,null,String(c))}function g1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:b1(c)}function M0(c,e){let a=0;const{shapeFlag:s}=c;if(e==null)e=null;else if(W(e))a=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),M0(c,n()),n._c&&(n._d=!0));return}else{a=32;const n=e._;!n&&!(E3 in e)?e._ctx=S2:n===3&&S2&&(S2.slots._===1?e._=1:(e._=2,c.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:S2},a=32):(e=String(e),s&64?(a=16,e=[V0(e)]):a=8);c.children=e,c.shapeFlag|=a}function pf(...c){const e={};for(let a=0;a<c.length;a++){const s=c[a];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=A2([e.class,s.class]));else if(n==="style")e.style=N3([e.style,s.style]);else if(w3(n)){const r=e[n],i=s[n];i&&r!==i&&!(W(r)&&r.includes(i))&&(e[n]=r?[].concat(r,i):i)}else n!==""&&(e[n]=s[n])}return e}function Y2(c,e,a,s=null){R2(c,e,7,[a,s])}const Hf=F7();let zf=0;function gf(c,e,a){const s=c.type,n=(e?e.appContext:c.appContext)||Hf,r={uid:zf++,vnode:c,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new Et(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:P7(s,n),emitsOptions:w7(s,n),emit:null,emitted:null,propsDefaults:s2,inheritAttrs:s.inheritAttrs,ctx:s2,data:s2,props:s2,attrs:s2,slots:s2,refs:s2,setupState:s2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ml.bind(null,r),c.ce&&c.ce(r),r}let V2=null;const $7=()=>V2||S2;let C0,j1,o5="__VUE_INSTANCE_SETTERS__";(j1=L6()[o5])||(j1=L6()[o5]=[]),j1.push(c=>V2=c),C0=c=>{j1.length>1?j1.forEach(e=>e(c)):j1[0](c)};const a4=c=>{C0(c),c.scope.on()},D1=()=>{V2&&V2.scope.off(),C0(null)};function U7(c){return c.vnode.shapeFlag&4}let w4=!1;function yf(c,e=!1){w4=e;const{props:a,children:s}=c.vnode,n=U7(c);cf(c,a,n,e),sf(c,s);const r=n?Vf(c,e):void 0;return w4=!1,r}function Vf(c,e){const a=c.type;c.accessCache=Object.create(null),c.proxy=H7(new Proxy(c.ctx,ql));const{setup:s}=a;if(s){const n=c.setupContext=s.length>1?Cf(c):null;a4(c),i4();const r=V1(s,c,0,[c.props,n]);if(o4(),D1(),c7(r)){if(r.then(D1,D1),e)return r.then(i=>{t5(c,i,e)}).catch(i=>{A3(i,c,0)});c.asyncDep=r}else t5(c,r,e)}else q7(c,e)}function t5(c,e,a){U(e)?c.type.__ssrInlineRender?c.ssrRender=e:c.render=e:i2(e)&&(c.setupState=y7(e)),q7(c,a)}let l5;function q7(c,e,a){const s=c.type;if(!c.render){if(!e&&l5&&!s.render){const n=s.template||g0(c).template;if(n){const{isCustomElement:r,compilerOptions:i}=c.appContext.config,{delimiters:o,compilerOptions:t}=s,l=g2(g2({isCustomElement:r,delimiters:o},i),t);s.render=l5(n,l)}}c.render=s.render||Q2}{a4(c),i4();try{Gl(c)}finally{o4(),D1()}}}function Mf(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(e,a){return k2(c,"get","$attrs"),e[a]}}))}function Cf(c){const e=a=>{c.exposed=a||{}};return{get attrs(){return Mf(c)},slots:c.slots,emit:c.emit,expose:e}}function _3(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(y7(H7(c.exposed)),{get(e,a){if(a in e)return e[a];if(a in p4)return p4[a](c)},has(e,a){return a in e||a in p4}}))}function bf(c,e=!0){return U(c)?c.displayName||c.name:c.name||e&&c.__name}function wf(c){return U(c)&&"__vccOpts"in c}const G=(c,e)=>pl(c,e,w4);function G7(c,e,a){const s=arguments.length;return s===2?i2(e)&&!W(e)?O6(e)?t2(c,null,[e]):t2(c,e):t2(c,null,e):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&O6(a)&&(a=[a]),t2(c,e,a))}const Lf=Symbol.for("v-scx"),kf=()=>t3(Lf),xf="3.3.13",Nf="http://www.w3.org/2000/svg",F1=typeof document<"u"?document:null,f5=F1&&F1.createElement("template"),Sf={insert:(c,e,a)=>{e.insertBefore(c,a||null)},remove:c=>{const e=c.parentNode;e&&e.removeChild(c)},createElement:(c,e,a,s)=>{const n=e?F1.createElementNS(Nf,c):F1.createElement(c,a?{is:a}:void 0);return c==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:c=>F1.createTextNode(c),createComment:c=>F1.createComment(c),setText:(c,e)=>{c.nodeValue=e},setElementText:(c,e)=>{c.textContent=e},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>F1.querySelector(c),setScopeId(c,e){c.setAttribute(e,"")},insertStaticContent(c,e,a,s,n,r){const i=a?a.previousSibling:e.lastChild;if(n&&(n===r||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),a),!(n===r||!(n=n.nextSibling)););else{f5.innerHTML=s?`<svg>${c}</svg>`:c;const o=f5.content;if(s){const t=o.firstChild;for(;t.firstChild;)o.appendChild(t.firstChild);o.removeChild(t)}e.insertBefore(o,a)}return[i?i.nextSibling:e.firstChild,a?a.previousSibling:e.lastChild]}},u1="transition",f4="animation",L4=Symbol("_vtc"),g3=(c,{slots:e})=>G7(Bl,Af(c),e);g3.displayName="Transition";const j7={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};g3.props=g2({},x7,j7);const S1=(c,e=[])=>{W(c)?c.forEach(a=>a(...e)):c&&c(...e)},h5=c=>c?W(c)?c.some(e=>e.length>1):c.length>1:!1;function Af(c){const e={};for(const A in c)A in j7||(e[A]=c[A]);if(c.css===!1)return e;const{name:a="v",type:s,duration:n,enterFromClass:r=`${a}-enter-from`,enterActiveClass:i=`${a}-enter-active`,enterToClass:o=`${a}-enter-to`,appearFromClass:t=r,appearActiveClass:l=i,appearToClass:h=o,leaveFromClass:d=`${a}-leave-from`,leaveActiveClass:u=`${a}-leave-active`,leaveToClass:p=`${a}-leave-to`}=c,w=Tf(n),k=w&&w[0],O=w&&w[1],{onBeforeEnter:g,onEnter:V,onEnterCancelled:F,onLeave:x,onLeaveCancelled:E,onBeforeAppear:c2=g,onAppear:Z=V,onAppearCancelled:R=F}=e,L=(A,q,d2)=>{A1(A,q?h:o),A1(A,q?l:i),d2&&d2()},D=(A,q)=>{A._isLeaving=!1,A1(A,d),A1(A,p),A1(A,u),q&&q()},o2=A=>(q,d2)=>{const f1=A?Z:V,m2=()=>L(q,A,d2);S1(f1,[q,m2]),d5(()=>{A1(q,A?t:r),v1(q,A?h:o),h5(f1)||m5(q,s,k,m2)})};return g2(e,{onBeforeEnter(A){S1(g,[A]),v1(A,r),v1(A,i)},onBeforeAppear(A){S1(c2,[A]),v1(A,t),v1(A,l)},onEnter:o2(!1),onAppear:o2(!0),onLeave(A,q){A._isLeaving=!0;const d2=()=>D(A,q);v1(A,d),Bf(),v1(A,u),d5(()=>{A._isLeaving&&(A1(A,d),v1(A,p),h5(x)||m5(A,s,O,d2))}),S1(x,[A,d2])},onEnterCancelled(A){L(A,!1),S1(F,[A])},onAppearCancelled(A){L(A,!0),S1(R,[A])},onLeaveCancelled(A){D(A),S1(E,[A])}})}function Tf(c){if(c==null)return null;if(i2(c))return[H6(c.enter),H6(c.leave)];{const e=H6(c);return[e,e]}}function H6(c){return Ft(c)}function v1(c,e){e.split(/\s+/).forEach(a=>a&&c.classList.add(a)),(c[L4]||(c[L4]=new Set)).add(e)}function A1(c,e){e.split(/\s+/).forEach(s=>s&&c.classList.remove(s));const a=c[L4];a&&(a.delete(e),a.size||(c[L4]=void 0))}function d5(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let If=0;function m5(c,e,a,s){const n=c._endId=++If,r=()=>{n===c._endId&&s()};if(a)return setTimeout(r,a);const{type:i,timeout:o,propCount:t}=Ff(c,e);if(!i)return s();const l=i+"end";let h=0;const d=()=>{c.removeEventListener(l,u),r()},u=p=>{p.target===c&&++h>=t&&d()};setTimeout(()=>{h<t&&d()},o+1),c.addEventListener(l,u)}function Ff(c,e){const a=window.getComputedStyle(c),s=w=>(a[w]||"").split(", "),n=s(`${u1}Delay`),r=s(`${u1}Duration`),i=u5(n,r),o=s(`${f4}Delay`),t=s(`${f4}Duration`),l=u5(o,t);let h=null,d=0,u=0;e===u1?i>0&&(h=u1,d=i,u=r.length):e===f4?l>0&&(h=f4,d=l,u=t.length):(d=Math.max(i,l),h=d>0?i>l?u1:f4:null,u=h?h===u1?r.length:t.length:0);const p=h===u1&&/\b(transform|all)(,|$)/.test(s(`${u1}Property`).toString());return{type:h,timeout:d,propCount:u,hasTransform:p}}function u5(c,e){for(;c.length<e.length;)c=c.concat(c);return Math.max(...e.map((a,s)=>v5(a)+v5(c[s])))}function v5(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function Bf(){return document.body.offsetHeight}function Pf(c,e,a){const s=c[L4];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?c.removeAttribute("class"):a?c.setAttribute("class",e):c.className=e}const b0=Symbol("_vod"),y3={beforeMount(c,{value:e},{transition:a}){c[b0]=c.style.display==="none"?"":c.style.display,a&&e?a.beforeEnter(c):h4(c,e)},mounted(c,{value:e},{transition:a}){a&&e&&a.enter(c)},updated(c,{value:e,oldValue:a},{transition:s}){!e!=!a&&(s?e?(s.beforeEnter(c),h4(c,!0),s.enter(c)):s.leave(c,()=>{h4(c,!1)}):h4(c,e))},beforeUnmount(c,{value:e}){h4(c,e)}};function h4(c,e){c.style.display=e?c[b0]:"none"}const Y7=Symbol("");function Wf(c){const e=$7();if(!e)return;const a=e.ut=(n=c(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>_6(r,n))},s=()=>{const n=c(e.proxy);E6(e.subTree,n),a(n)};Al(s),D3(()=>{const n=new MutationObserver(s);n.observe(e.subTree.el.parentNode,{childList:!0}),z0(()=>n.disconnect())})}function E6(c,e){if(c.shapeFlag&128){const a=c.suspense;c=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{E6(a.activeBranch,e)})}for(;c.component;)c=c.component.subTree;if(c.shapeFlag&1&&c.el)_6(c.el,e);else if(c.type===M2)c.children.forEach(a=>E6(a,e));else if(c.type===l3){let{el:a,anchor:s}=c;for(;a&&(_6(a,e),a!==s);)a=a.nextSibling}}function _6(c,e){if(c.nodeType===1){const a=c.style;let s="";for(const n in e)a.setProperty(`--${n}`,e[n]),s+=`--${n}: ${e[n]};`;a[Y7]=s}}function Rf(c,e,a){const s=c.style,n=p2(a);if(a&&!n){if(e&&!p2(e))for(const r in e)a[r]==null&&$6(s,r,"");for(const r in a)$6(s,r,a[r])}else{const r=s.display;if(n){if(e!==a){const i=s[Y7];i&&(a+=";"+i),s.cssText=a}}else e&&c.removeAttribute("style");b0 in c&&(s.display=r)}}const p5=/\s*!important$/;function $6(c,e,a){if(W(a))a.forEach(s=>$6(c,e,s));else if(a==null&&(a=""),e.startsWith("--"))c.setProperty(e,a);else{const s=Df(c,e);p5.test(a)?c.setProperty(r4(s),a.replace(p5,""),"important"):c[s]=a}}const H5=["Webkit","Moz","ms"],z6={};function Df(c,e){const a=z6[e];if(a)return a;let s=Z2(e);if(s!=="filter"&&s in c)return z6[e]=s;s=x3(s);for(let n=0;n<H5.length;n++){const r=H5[n]+s;if(r in c)return z6[e]=r}return e}const z5="http://www.w3.org/1999/xlink";function Of(c,e,a,s,n){if(s&&e.startsWith("xlink:"))a==null?c.removeAttributeNS(z5,e.slice(6,e.length)):c.setAttributeNS(z5,e,a);else{const r=Ot(e);a==null||r&&!s7(a)?c.removeAttribute(e):c.setAttribute(e,r?"":a)}}function Ef(c,e,a,s,n,r,i){if(e==="innerHTML"||e==="textContent"){s&&i(s,n,r),c[e]=a??"";return}const o=c.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){c._value=a;const l=o==="OPTION"?c.getAttribute("value"):c.value,h=a??"";l!==h&&(c.value=h),a==null&&c.removeAttribute(e);return}let t=!1;if(a===""||a==null){const l=typeof c[e];l==="boolean"?a=s7(a):a==null&&l==="string"?(a="",t=!0):l==="number"&&(a=0,t=!0)}try{c[e]=a}catch{}t&&c.removeAttribute(e)}function _f(c,e,a,s){c.addEventListener(e,a,s)}function $f(c,e,a,s){c.removeEventListener(e,a,s)}const g5=Symbol("_vei");function Uf(c,e,a,s,n=null){const r=c[g5]||(c[g5]={}),i=r[e];if(s&&i)i.value=s;else{const[o,t]=qf(e);if(s){const l=r[e]=Yf(s,n);_f(c,o,l,t)}else i&&($f(c,o,i,t),r[e]=void 0)}}const y5=/(?:Once|Passive|Capture)$/;function qf(c){let e;if(y5.test(c)){e={};let s;for(;s=c.match(y5);)c=c.slice(0,c.length-s[0].length),e[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):r4(c.slice(2)),e]}let g6=0;const Gf=Promise.resolve(),jf=()=>g6||(Gf.then(()=>g6=0),g6=Date.now());function Yf(c,e){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;R2(Kf(s,a.value),e,5,[s])};return a.value=c,a.attached=jf(),a}function Kf(c,e){if(W(e)){const a=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{a.call(c),c._stopped=!0},e.map(s=>n=>!n._stopped&&s&&s(n))}else return e}const V5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Xf=(c,e,a,s,n=!1,r,i,o,t)=>{e==="class"?Pf(c,s,n):e==="style"?Rf(c,a,s):w3(e)?s0(e)||Uf(c,e,a,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jf(c,e,s,n))?Ef(c,e,s,r,i,o,t):(e==="true-value"?c._trueValue=s:e==="false-value"&&(c._falseValue=s),Of(c,e,s,n))};function Jf(c,e,a,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in c&&V5(e)&&U(a));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&c.tagName==="INPUT"||e==="type"&&c.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=c.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return V5(e)&&p2(a)?!1:e in c}const Qf=["ctrl","shift","alt","meta"],Zf={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,e)=>Qf.some(a=>c[`${a}Key`]&&!e.includes(a))},z2=(c,e)=>{const a=c._withMods||(c._withMods={}),s=e.join(".");return a[s]||(a[s]=(n,...r)=>{for(let i=0;i<e.length;i++){const o=Zf[e[i]];if(o&&o(n,e))return}return c(n,...r)})},ch=g2({patchProp:Xf},Sf);let M5;function eh(){return M5||(M5=rf(ch))}const ah=(...c)=>{const e=eh().createApp(...c),{mount:a}=e;return e.mount=s=>{const n=sh(s);if(!n)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.innerHTML="";const i=a(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),i},e};function sh(c){return p2(c)?document.querySelector(c):c}const nh=[{songName:"1.5 кг Отличного Пюре - Эмо.mp3",sort:181,bestParties:[{start:25,end:84}],notAggressive:!0},{songName:"Angel Vivaldi - A Martian Winter.mp3"},{songName:"Angel Vivaldi - An Erisian Autumn.mp3",sort:50,bestParties:[{start:78,end:104},{start:176,end:220},{start:246,end:268}],notAggressive:!0},{songName:"As I Lay Dying - Forever.mp3",sort:210,bestParties:[{start:0,end:25}]},{songName:"As I Lay Dying - Nothing Left.mp3",sort:40,bestParties:[{start:0,end:57}]},{songName:"As I Lay Dying - The Sound Of Truth.mp3",sort:60,bestParties:[{start:0,end:36},{start:59,end:121}]},{songName:"Aspirin Rose - Fucking Perfect (Pink cover).mp3"},{songName:"August Burns Red - A Shot Below The Belt.mp3",sort:142,bestParties:[{start:0,end:30},{start:90,end:114},{start:164,end:175}]},{songName:"August Burns Red - Barbarian.mp3",sort:20,bestParties:[{start:21,end:32},{start:70,end:88},{start:113,end:152}]},{songName:"August Burns Red - Chasing the Dragon.mp3",sort:151,bestParties:[{start:40,end:65}]},{songName:"August Burns Red - Consumer.mp3"},{songName:"August Burns Red - Indonesia.mp3",sort:141,bestParties:[{start:84,end:117},{start:161,end:180}]},{songName:"August Burns Red - Meridian.mp3",notAggressive:!0},{songName:"August Burns Red - Truth of a Liar.mp3"},{songName:"August Burns Red - Your Little Suburbia Is in Ruins.mp3",sort:70,bestParties:[{start:12,end:27},{start:107,end:125},{start:146,end:178}]},{songName:"Anaal Nathrakh - Between Shit and Piss We Are Born.mp3"},{songName:"Anaal Nathrakh - In The Constellation Of The Black Widow.mp3",sort:220,bestParties:[{start:65,end:85},{start:114,end:141}]},{songName:"Between the Buried and Me - All Bodies.mp3"},{songName:"Between The Buried And Me - Ants Of The Sky.mp3",sort:113,bestParties:[{start:0,end:108}]},{songName:"Between The Buried And Me - Sun Of Nothing.mp3"},{songName:"Between The Buried And Me - Swim To The Moon.mp3",sort:10,bestParties:[{start:135,end:160},{start:500,end:551},{start:982,end:1022}]},{songName:"Breakwater - Eleven.mp3"},{songName:"Breakwater - five.mp3"},{songName:"Bullet For My Valentine - Hand Of Blood.mp3"},{songName:"Cerebral Bore - The Bald Cadaver.mp3",sort:280,bestParties:[{start:5.5,end:50}]},{songName:"Children Of Bodom - Are You Dead Yet.mp3",sort:110,bestParties:[{start:82,end:114}]},{songName:"Cosmonauts Day - The Captain.mp3",notAggressive:!0},{songName:"Death In Vegas - Dirge.mp3"},{songName:"Dragonforce - The Flame of Youth.mp3",sort:120,bestParties:[{start:46,end:65},{start:289,end:317}]},{songName:"If These Trees Could Talk - From Roots to Needles.mp3",notAggressive:!0},{songName:"In Flames - Clayman.mp3",sort:130,bestParties:[{start:0,end:21}]},{songName:"In Flames - Reflect the Storm.mp3"},{songName:"Killing Floor - Abandon All.mp3"},{songName:"Killing Floor OST - Wake.mp3",notAggressive:!0},{songName:"Long Distance Calling - Black Paper Planes.mp3",notAggressive:!0},{songName:"Machine Head - Beautiful Mourning.mp3"},{songName:"Machine Head - Hallowed Be Thy Name.mp3"},{songName:"Machine Head - Halo.mp3"},{songName:"Ozoi The Maid - Unfortunately.mp3",sort:112,bestParties:[{start:59,end:84},{start:165,end:218},{start:240,end:253}]},{songName:"Ozoi The Maid Yakui The Maid - Lanterns.mp3",sort:111,bestParties:[{start:146,end:218}]},{songName:"Ozoi The Maid Yakui The Maid - Wonderland.mp3",sort:30,bestParties:[{start:115,end:243},{start:355,end:442}]},{songName:"Ozoi The Maid Yakui The Maid - Frontier.mp3"},{songName:"P.O.D. - Youth of the Nation.mp3",notAggressive:!0},{songName:"Psygnosis - FIIIX 2.0.mp3"},{songName:"Psygnosis - Lost in Oblivion.mp3",sort:140,bestParties:[{start:292,end:356}]},{songName:"Psygnosis - MehMeh.mp3"},{songName:"Psygnosis - Phrase 7.mp3",notAggressive:!0},{songName:"Psygnosis - Synaptic Plasticity.mp3"},{songName:"Psygnosis - The Judgement.mp3"},{songName:"Raunchy - To the Lighthouse.mp3"},{songName:"Raunchy - Twelve Feet Tall.mp3",sort:150,bestParties:[{start:65,end:96}]},{songName:"Raunchy - Wasteland Discotheque.mp3",sort:190,bestParties:[{start:0,end:34},{start:63,end:101}]},{songName:"Rhapsody - The Mighty Ride of the Firelord.mp3"},{songName:"Rhapsody of Fire - Wisdom of the Kings.mp3"},{songName:"Rise Of The Northstar - The New Path.mp3"},{songName:"Rise Of The Northstar - What The Fuck.mp3",sort:160,bestParties:[{start:45,end:79}]},{songName:"Siberian Meat Grinder feat Distemper - Пламя в Груди.mp3",sort:211,bestParties:[{start:49,end:68}]},{songName:"The Doors - Alabama song.mp3",notAggressive:!0},{songName:"The Doors - The End.mp3",notAggressive:!0},{songName:"The Faceless - Shake The Disease.mp3"},{songName:"The Five Stars - Atom Bomb Baby.mp3",notAggressive:!0},{songName:"The HAARP Machine - Esoteric Agenda.mp3"},{songName:"Toundra - Bizancio Byzantium.mp3",sort:180,bestParties:[{start:127,end:224},{start:406,end:480}],notAggressive:!0},{songName:"URO & .corridoiokraut. - Nappi.mp3",notAggressive:!0},{songName:"What Mad Universe - Colossus.mp3",notAggressive:!0,sort:171},{songName:"What Mad Universe - the world of leviathan.mp3",notAggressive:!0,sort:172},{songName:"What Mad Universe - head of column.mp3",sort:170,bestParties:[{start:30,end:65}],notAggressive:!0},{songName:"What Mad Universe - mythical sacred firebird.mp3",notAggressive:!0},{songName:"What Mad Universe - Nebula My Love.mp3",sort:80,bestParties:[{start:162,end:246},{start:260,end:358}],notAggressive:!0},{songName:"What Mad Universe - Starborne.mp3",sort:90,bestParties:[{start:85,end:105},{start:144,end:185}],notAggressive:!0},{songName:"Within The Ruins - Ataxia II.mp3"},{songName:"Between The Buried And Me - White Walls.mp3",sort:172,bestParties:[{start:111,end:155},{start:478,end:524}]},{songName:"Raunchy - The Yeah Thing.mp3",sort:193,bestParties:[{start:14,end:65}]},{songName:"Within The Ruins - Beautiful Agony.mp3"},{songName:"ZEROMANCER - Dr. Online.mp3"},{songName:"zYnthetic - Abandon All v3.mp3",sort:100,bestParties:[{start:0,end:30},{start:60,end:89}],notAggressive:!0},{songName:"zYnthetic - SSplug.mp3",notAggressive:!0},{songName:"Sunlight Ascending - (Winter) Diorama Dream.mp3",sort:255,bestParties:[{start:190,end:261}],notAggressive:!0},{songName:"Sum 41 - Still Waiting.mp3"},{songName:"Between The Buried And Me - Obfuscation.mp3",sort:119,bestParties:[{start:0,end:18.4},{start:142,end:258}]},{songName:"BATUSHKA - Yekteniya 4.mp3"},{songName:"In Flames - Trigger.mp3"},{songName:"Raunchy - Live The Myth.mp3"}],K4=nh.sort((c,e)=>c.songName.localeCompare(e.songName)),d4=[{label:"All music",id:1,url:"all"},{label:"Top",id:2,url:"top"},{label:"Top Shorts",id:4,url:"shorts"},{label:"Not aggressive",id:3,url:"not_aggressive"},{label:"Favorite",id:5,url:"favorite"}],p1=f2([]),y6=f2(0),X4=f2(!1);function w0(){const c=f2(K4),e=f2(K4.filter(L=>L.sort)),a=f2(K4.filter(L=>L.notAggressive)),s=f2(0);R3(()=>{c.value=K4,y6.value=k.value.length,c2()});const n=G(()=>{const L="/player_with_my_favorite_music/";return k.value[s.value]?`${L}music/${O.value.songName}`:""}),r=G(()=>[...e.value].sort((L,D)=>L.sort-D.sort)),i=f2(1);function o(L){!(i.value===4&&L.id===2)&&!(i.value===2&&L.id===4)&&(s.value=0),i.value=L.id,y6.value=w.value.length}function t(L){const D=L.split("&");if(D.length===2){const o2=D[0].split("=")[1],A=parseInt(D[1].split("=")[1]),q=d4.find(d2=>d2.url===o2);q&&(i.value=q.id,s.value=isNaN(A)?0:A)}}(()=>{const L=window.location.hash;L&&t(L)})(),F3(()=>{const L=d4.find(q=>q.id===i.value),D=L?L.url:"",o2=s.value.toString(),A=`/player_with_my_favorite_music/#tab=${D}&track=${o2}`;window.history.pushState({},"",A)});const h=G(()=>{switch(i.value){case 1:return c.value;case 2:return r.value;case 3:return a.value;case 4:return r.value;case 5:return d.value;default:return[]}}),d=G(()=>c.value.filter(L=>p1.value.includes(L.songName))),u=G(()=>d.value.length?d4:d4.slice(0,d4.length-1)),p=G(()=>{var L;return i.value===4?((L=r.value[s.value])==null?void 0:L.bestParties)||[{start:0,end:30}]:[]}),w=G(()=>X4.value?g():h.value),k=G(()=>w.value.map(L=>L.songName)),O=G(()=>w.value[s.value]);function g(){return h.value.map(L=>({...L,sort:Math.random()})).sort((L,D)=>L.sort-D.sort).map(({sort:L,...D})=>D)}function V(){s.value=s.value>=w.value.length-1?0:s.value+1}function F(){s.value=s.value<=0?w.value.length-1:s.value-1}function x(L){s.value=L}function E(){X4.value=!X4.value}function c2(){const L=localStorage.getItem("favoriteSongs");L&&(p1.value=JSON.parse(L))}function Z(){localStorage.setItem("favoriteSongs",JSON.stringify(p1.value.slice(0)))}function R(){const L=O.value,D=p1.value.findIndex(o2=>o2===L.songName);D>=0?(p1.value.splice(D,1),p1.value.length||(i.value=1)):p1.value.push(L.songName),Z()}return{totalNumbSongs:y6,defaultTrackList:c,topTrackList:e,bestParties:p,nextTrack:V,previousTrack:F,pathToCurrentFile:n,currentTrackIndex:s,changeTab:o,selectTrack:x,tabSelected:i,isRandomTracks:X4,handlerRandomBtn:E,currentTracks:w,currentTracksList:k,currentSong:O,handleAddFavoriteSongBtn:R,favoriteSongs:p1,TabsOptionRender:u}}const rh=c1({name:"TrackList",props:{currentTracks:{type:Array,default:()=>[]},currentTrackIndex:{type:Number,default:0}},emits:["select-track-from-list"],setup(c,{emit:e}){const a=G(()=>c.currentTracks.map(r=>{const i=r.lastIndexOf("/"),o=r==null?void 0:r.lastIndexOf(".");return r&&r.substring(i+1,o)||""}));M1(()=>c.currentTrackIndex,()=>{s()});async function s(){await u0();const r=document.querySelector(".tracks .selected");r==null||r.scrollIntoView({behavior:"smooth",block:"center"})}function n(r){e("select-track-from-list",r)}return{currentTracksWithCorrectNames:a,selectTrackFromList:n}}}),t1=(c,e)=>{const a=c.__vccOpts||c;for(const[s,n]of e)a[s]=n;return a},ih=["onClick"];function oh(c,e,a,s,n,r){return h2(),v2("ul",{class:"sidebar tracks",onClick:e[0]||(e[0]=z2(()=>{},["stop"]))},[(h2(!0),v2(M2,null,C4(c.currentTracksWithCorrectNames,(i,o)=>(h2(),v2("li",{key:o,class:A2({selected:o===c.currentTrackIndex}),onClick:z2(t=>c.selectTrackFromList(o),["stop"])},W2(o+1)+". "+W2(i),11,ih))),128))])}const th=t1(rh,[["render",oh],["__scopeId","data-v-d47c1713"]]),lh=c1({props:{tabSelected:{type:Number,default:1}},emits:["change-tab"],setup(c,{emit:e}){const{TabsOptionRender:a}=w0();function s(n){c.tabSelected!==n.id&&e("change-tab",n)}return{btnHandler:s,TabsOptionRender:a}}}),fh={class:"tabs"},hh=["onClick"];function dh(c,e,a,s,n,r){return h2(),v2("div",fh,[(h2(!0),v2(M2,null,C4(c.TabsOptionRender,i=>(h2(),v2("button",{key:i.id,class:A2({active:i.id===c.tabSelected}),onClick:z2(o=>c.btnHandler(i),["stop"])},W2(i.label),11,hh))),128))])}const mh=t1(lh,[["render",dh]]),uh="modulepreload",vh=function(c){return"/player_with_my_favorite_music/"+c},C5={},E2=function(e,a,s){let n=Promise.resolve();if(a&&a.length>0){const r=document.getElementsByTagName("link");n=Promise.all(a.map(i=>{if(i=vh(i),i in C5)return;C5[i]=!0;const o=i.endsWith(".css"),t=o?'[rel="stylesheet"]':"";if(!!s)for(let d=r.length-1;d>=0;d--){const u=r[d];if(u.href===i&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${t}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":uh,o||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),o)return new Promise((d,u)=>{h.addEventListener("load",d),h.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})}))}return n.then(()=>e()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})},ph=c1({name:"MainInfoBand",props:{songName:{type:String,default:""},hasText:{type:Boolean,default:!1},isFavoriteSong:{type:Boolean,default:!1}},emits:["show-text-song","add-favorite"],setup(c,{emit:e}){const a=f2({});R3(async()=>{const d=Object.assign({"/src/assets/images/1.5 кг Отличного Пюре.jpg":()=>E2(()=>import("./1.5 кг Отличного Пюре-OtALhitf.js"),__vite__mapDeps([])),"/src/assets/images/Anaal Nathrakh.jpg":()=>E2(()=>import("./Anaal Nathrakh-EzGp_TLw.js"),__vite__mapDeps([])),"/src/assets/images/As I Lay Dying.jpg":()=>E2(()=>import("./As I Lay Dying-28Nx7ZD0.js"),__vite__mapDeps([])),"/src/assets/images/August Burns Red.jpg":()=>E2(()=>import("./August Burns Red-MIqwgacb.js"),__vite__mapDeps([])),"/src/assets/images/Between The Buried And Me.webp":()=>E2(()=>import("./Between The Buried And Me-TSs49cb7.js"),__vite__mapDeps([])),"/src/assets/images/In Flames.jpg":()=>E2(()=>import("./In Flames-R92cBTIn.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid Yakui The Maid.jpg":()=>E2(()=>import("./Ozoi The Maid Yakui The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid.jpg":()=>E2(()=>import("./Ozoi The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/What Mad Universe.jpg":()=>E2(()=>import("./What Mad Universe-AmFbwRmj.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.png":()=>E2(()=>import("./default_logo-hDaDKpVk.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.svg":()=>E2(()=>import("./default_logo-KBf8q7n2.js"),__vite__mapDeps([]))});for(const u in d){const p=u.replace(/^.*\/(.*)\.\w+$/,"$1");a.value[p]=(await d[u]()).default}});const s=G(()=>{var u;const d=(u=c.songName)==null?void 0:u.lastIndexOf(".");return c.songName&&c.songName.substring(0,d)||""}),n=G(()=>{const[d,u]=s.value.split(" - ");return{bandName:d,songName:u}}),r=G(()=>{const{bandName:d}=n.value;return a.value[d]||a.value.default_logo});function i(){var d,u;if("mediaSession"in navigator&&r.value){const p=["96x96","128x128","192x192","256x256","384x384","512x512"];navigator.mediaSession.metadata=new MediaMetadata({title:((d=n.value)==null?void 0:d.songName)||"",artist:((u=n.value)==null?void 0:u.bandName)||"",artwork:p.map(w=>({src:r.value,sizes:w,type:"image/png"}))})}}F3(()=>{n.value&&r.value&&i()});const o=G(()=>c.hasText?"":"disabled"),t=G(()=>c.isFavoriteSong?"active":"");function l(){c.hasText&&e("show-text-song")}function h(){e("add-favorite")}return{getInfoBand:n,getLogoImage:r,onIconShowTextClick:l,onIconAddFavoriteClick:h,iconHeartClass:t,iconShowTextClass:o}}}),K7=c=>(p0("data-v-18bb1f5b"),c=c(),H0(),c),Hh={class:"main-info"},zh=["src"],gh={class:"main-panel"},yh=K7(()=>$("i",{class:"fa-solid fa-heart"},null,-1)),Vh=[yh],Mh={class:"artist-info"},Ch={class:"band"},bh={class:"song"},wh=K7(()=>$("i",{class:"fa-solid fa-text-height"},null,-1)),Lh=[wh];function kh(c,e,a,s,n,r){return h2(),v2("div",Hh,[$("img",{src:c.getLogoImage,class:"album-image",alt:""},null,8,zh),$("div",gh,[$("button",{class:A2(["heart",c.iconHeartClass]),onClick:e[0]||(e[0]=z2((...i)=>c.onIconAddFavoriteClick&&c.onIconAddFavoriteClick(...i),["stop"]))},Vh,2),$("div",Mh,[$("div",Ch,W2(c.getInfoBand.bandName),1),$("div",bh,W2(c.getInfoBand.songName),1)]),$("button",{class:A2(["show-text",c.iconShowTextClass]),onClick:e[1]||(e[1]=z2((...i)=>c.onIconShowTextClick&&c.onIconShowTextClick(...i),["stop"]))},Lh,2)])])}const xh=t1(ph,[["render",kh],["__scopeId","data-v-18bb1f5b"]]),Nh=c1({name:"VolumeControl",props:{volume:{type:Number,default:.8}},emits:["volume-change"],setup(c,{emit:e}){const a=G(()=>c.volume*100),s=G(()=>c.volume>0?'<i class="fas fa-volume-up"/>':'<i class="fas fa-volume-off"/>');function n(o){const t=parseFloat(o.target.value)/100;e("volume-change",t)}function r(o){e("volume-change",o)}function i(){c.volume>0?r(0):r(.8)}return{convertToValue:a,volumeHandler:n,onIconVolumeClick:i,iconVolume:s}}}),Sh={class:"volume-control"},Ah=["innerHTML"],Th=["value"];function Ih(c,e,a,s,n,r){return h2(),v2("div",Sh,[$("button",{class:"player-button margin",onClick:e[0]||(e[0]=z2((...i)=>c.onIconVolumeClick&&c.onIconVolumeClick(...i),["stop"]))},[$("span",{innerHTML:c.iconVolume},null,8,Ah)]),$("input",{class:"margin",type:"range",value:c.convertToValue,min:"0",max:"100",step:"1",onInput:e[1]||(e[1]=(...i)=>c.volumeHandler&&c.volumeHandler(...i))},null,40,Th)])}const Fh=t1(Nh,[["render",Ih],["__scopeId","data-v-841b27f2"]]),Bh=c1({name:"ProgressControl",props:{currentTime:{type:Number,default:0},totalTime:{type:Number,default:0},bestParties:{type:Array,default:()=>[]}},emits:["time-change","time-change-line"],setup(c,{emit:e}){const a=G(()=>c.currentTime/c.totalTime*100),s=G(()=>o(c.currentTime)),n=G(()=>""),r=G(()=>o(c.totalTime)),i=G(()=>{const h=Number((100/c.totalTime).toFixed(2));return c.bestParties.map(d=>({left:`${d.start*h}%`,right:`${100-d.end*h}%`}))});function o(h){const d=Math.floor(h/60),u=Math.floor(h%60);return`${d}:${String(u).padStart(2,"0")}`}function t(h){const d=h.target.parentNode||null,u=(d==null?void 0:d.clientWidth)||0,p=d.getBoundingClientRect(),w=h.clientX-p.left;e("time-change",w/u*c.totalTime)}function l(h){const d=h.target;e("time-change",Number(d.value)/100*(c.totalTime||0))}return{convertToValue:a,convertCurrentTime:s,convertTotalTime:r,timeHandler:l,timeHandlerEmit:t,convertBestPartiesInPercentage:i,convertCurrentTimeSeconds:n}}}),Ph={class:"progress-control"},Wh=["value"],Rh={class:"time-display"},Dh={key:0,class:"line"};function Oh(c,e,a,s,n,r){return h2(),v2("div",Ph,[$("input",{type:"range",min:"0",max:"100",value:c.convertToValue,step:"1",onInput:e[0]||(e[0]=(...i)=>c.timeHandler&&c.timeHandler(...i))},null,40,Wh),$("div",Rh,[$("span",null,W2(c.convertCurrentTime),1),$("span",null,W2(c.convertCurrentTimeSeconds),1),$("span",null,W2(c.convertTotalTime),1)]),c.bestParties.length?(h2(),v2("div",Dh,[(h2(!0),v2(M2,null,C4(c.convertBestPartiesInPercentage,(i,o)=>(h2(),v2("div",{key:o,style:N3({left:i.left,right:i.right}),class:"best-section",onClick:e[1]||(e[1]=z2((...t)=>c.timeHandlerEmit&&c.timeHandlerEmit(...t),["stop"]))},null,4))),128))])):vf("",!0)])}const Eh=t1(Bh,[["render",Oh],["__scopeId","data-v-4c94b801"]]),_h=c1({name:"MainControl",props:{isPlaying:{type:Boolean,default:!1}},emits:["previous","play-pause","next"],setup(c,{emit:e}){function a(){e("previous")}const s=G(()=>c.isPlaying?'<i class="fas fa-pause"/>':' <i class="fas fa-play"/>');function n(){e("play-pause")}function r(){e("next")}return{previousButtonHandler:a,playerButtonHandler:n,iconPlayerButton:s,nextButtonHandler:r}}}),X7=c=>(p0("data-v-1bded451"),c=c(),H0(),c),$h={class:"main-control"},Uh=X7(()=>$("i",{class:"fas fa-step-backward"},null,-1)),qh=[Uh],Gh=["innerHTML"],jh=X7(()=>$("i",{class:"fas fa-step-forward"},null,-1)),Yh=[jh];function Kh(c,e,a,s,n,r){return h2(),v2("div",$h,[$("button",{class:"player-button",onClick:e[0]||(e[0]=z2((...i)=>c.previousButtonHandler&&c.previousButtonHandler(...i),["stop"]))},qh),$("button",{class:"player-button",onClick:e[1]||(e[1]=z2((...i)=>c.playerButtonHandler&&c.playerButtonHandler(...i),["stop"]))},[$("span",{innerHTML:c.iconPlayerButton},null,8,Gh)]),$("button",{class:"player-button",onClick:e[2]||(e[2]=z2((...i)=>c.nextButtonHandler&&c.nextButtonHandler(...i),["stop"]))},Yh)])}const Xh=t1(_h,[["render",Kh],["__scopeId","data-v-1bded451"]]),Jh=c1({name:"OtherControl",props:{currentNumbSong:{type:Number,default:0},isRepeatMode:{type:Boolean,default:!1},isShowTrackList:{type:Boolean,default:!1},isDarkTheme:{type:Boolean,default:!1}},emits:["show-list-click","repeat-mode-click","change-theme"],setup(c,{emit:e}){const{totalNumbSongs:a,isRandomTracks:s,handlerRandomBtn:n}=w0();function r(){n()}function i(){e("repeat-mode-click")}function o(){e("show-list-click")}function t(){e("change-theme")}const l=G(()=>c.isDarkTheme?'<i class="fa-solid fa-toggle-on"/>':'<i class="fa-solid fa-toggle-off"/>'),h=G(()=>c.isShowTrackList?'<i class="fas fa-bars fa-rotate-90"/>':'<i class="fas fa-bars"/>');return{totalNumbSongs:a,isRandomTracks:s,iconClickRandomHandler:r,iconClickRepeatModeHandler:i,iconClickShowListHandler:o,iconClickChangeThemeHandler:t,iconToggle:l,iconBar:h}}}),J7=c=>(p0("data-v-14220f02"),c=c(),H0(),c),Qh={class:"other"},Zh=J7(()=>$("i",{class:"fas fa-shuffle"},null,-1)),cd=[Zh],ed=J7(()=>$("i",{class:"fas fa-repeat"},null,-1)),ad=[ed],sd={class:"song-display"},nd=["innerHTML"],rd=["innerHTML"];function id(c,e,a,s,n,r){return h2(),v2("div",Qh,[$("button",{class:A2({active:c.isRandomTracks}),onClick:e[0]||(e[0]=z2((...i)=>c.iconClickRandomHandler&&c.iconClickRandomHandler(...i),["stop"]))},cd,2),$("button",{class:A2({active:c.isRepeatMode}),onClick:e[1]||(e[1]=z2((...i)=>c.iconClickRepeatModeHandler&&c.iconClickRepeatModeHandler(...i),["stop"]))},ad,2),$("div",sd,[$("span",null,W2(c.currentNumbSong),1),V0("/"),$("span",null,W2(c.totalNumbSongs),1)]),$("button",{onClick:e[2]||(e[2]=z2((...i)=>c.iconClickChangeThemeHandler&&c.iconClickChangeThemeHandler(...i),["stop"]))},[$("span",{innerHTML:c.iconToggle},null,8,nd)]),$("button",{class:A2({active:c.isShowTrackList}),onClick:e[3]||(e[3]=z2((...i)=>c.iconClickShowListHandler&&c.iconClickShowListHandler(...i),["stop"]))},[$("span",{innerHTML:c.iconBar},null,8,rd)],2)])}const od=t1(Jh,[["render",id],["__scopeId","data-v-14220f02"]]),td=c1({props:{songText:{type:String,default:""},songTextWithTimecodes:{type:Array,default:()=>[]},currentTime:{type:Number,default:0}},emits:["time-change"],setup(c,{emit:e}){const a=G(()=>[{label:"Timecodes",id:1,available:!!c.songTextWithTimecodes.length},{label:"Raw",id:2,available:!!c.songText.length}]),s=f2(1);function n(l){e("time-change",l-.5)}F3(()=>{!c.songText.length&&c.songTextWithTimecodes.length&&(s.value=1),!c.songTextWithTimecodes.length&&c.songText.length&&(s.value=2)});const r=G(()=>{const l=[];return c.songTextWithTimecodes.forEach((h,d)=>{var u,p;(p=(u=c.songTextWithTimecodes)==null?void 0:u[d+1])!=null&&p.seconds&&Number(c.songTextWithTimecodes[d+1].seconds-c.songTextWithTimecodes[d].seconds)>20?(l.push(h),l.push({seconds:c.songTextWithTimecodes[d].seconds+3,lyrics:"&#127925"})):l.push(h)}),l}),i=G(()=>{var l;if(c.songTextWithTimecodes.length){const h=(l=r.value)==null?void 0:l.findIndex((d,u,p)=>{var w;return c.currentTime>=d.seconds-1&&c.currentTime<((w=p==null?void 0:p[u+1])==null?void 0:w.seconds)});return h>=0?h:0}return 0});M1(()=>i.value,()=>{o()}),M1(()=>c.songTextWithTimecodes,()=>{console.log(1),o()});async function o(){await u0();const l=document.querySelector(".song-text .selected");l==null||l.scrollIntoView({behavior:"smooth",block:"center"})}function t(l){l.available&&(s.value=l.id)}return{goToText:n,songTextWithMusicSymbol:r,tabsOption:a,idTabSelected:s,btnHandler:t,indexPlayingPartTimeCode:i}}}),ld={class:"tabs"},fd=["onClick"],hd={class:"song-text"},dd={class:"text-with-timestamps"},md=["onClick","innerHTML"],ud=["innerHTML"];function vd(c,e,a,s,n,r){return h2(),v2("div",{class:"sidebar",onClick:e[0]||(e[0]=z2(()=>{},["stop"]))},[$("div",ld,[(h2(!0),v2(M2,null,C4(c.tabsOption,i=>(h2(),v2("button",{key:i.id,class:A2({active:i.id===c.idTabSelected,disabled:!i.available}),onClick:z2(o=>c.btnHandler(i),["stop"])},W2(i.label),11,fd))),128))]),$("div",hd,[p3($("div",dd,[V0(W2(c.currentTime)+" ",1),(h2(!0),v2(M2,null,C4(c.songTextWithMusicSymbol,(i,o)=>(h2(),v2("span",{key:o,class:A2({selected:o===c.indexPlayingPartTimeCode}),onClick:t=>c.goToText(i.seconds),innerHTML:`
${i.seconds} ${i.lyrics}
`},null,10,md))),128))],512),[[y3,c.idTabSelected===1]]),p3($("span",{innerHTML:c.songText},null,8,ud),[[y3,c.idTabSelected===2]])])])}const pd=t1(td,[["render",vd],["__scopeId","data-v-a475e9cc"]]),Hd={"1.5 кг Отличного Пюре - Эмо.mp3":`Каждый раз понимать, как легко потерять
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
And leave me transparent?`,"As I Lay Dying - The Sound Of Truth.mp3":`[Chorus: Tim Lambesis and Josh Gilbert, <i>Tim Lambesis</i>]<br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">We have all heard what we wanted to hear<br><i>"Truth" that sounds right to our ears</i><br>We have all heard what we wanted to hear<br><i>"Truth" that sounds right to our ears</i></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><br>[Verse 1: Tim Lambesis]<br>But what wisdom is there within us<br>To live based on the feeling of our hearts?<br>How many times has instinct let us down?<br>Never to be thought through, never to be questioned!<br>Say what you really mean<br>When your ambition calls you, calls you!<br>For what use is there, is there in praying<br>If you will only hear what you want to hear?<br><br>[Chorus: Tim Lambesis and Josh Gilbert, <i>Tim Lambesis</i>]<br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">We have all heard what we wanted to hear<br><i>"Truth" that sounds right to our ears</i></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><br>[Verse 2: Tim Lambesis]<br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">We speak of fighting to resist this world<br>But what about the battle within us?</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">If we have chosen to live against the grain<br>Then why are we all facing the same way?</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br>
[Bridge: Tim Lambesis]<br>There is no difference between us and them<br>If we all blindly seek truth from sentiments<br><br>[Guitar Solo]<br><br>[Chorus: Tim Lambesis and Josh Gilbert, <i>Tim Lambesis</i>]<br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw"><i>We have all heard what we wanted to hear<br>"Truth" that sounds right to our ears</i><br>We have all heard what we wanted to hear<br>"Truth" that sounds right to our ears<br>We have all heard what we wanted to hear<br>"Truth" that sounds right to our ears</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span>`,"August Burns Red - A Shot Below The Belt.mp3":`Don't you understand me?
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
В то, что их никто не тронет`,"Ozoi The Maid Yakui The Maid - Frontier.mp3":`И пусть горит
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
(We are)`,"Between The Buried And Me - Obfuscation.mp3":`From the simple idea of Change Blindness, our minds are not as they seem.
An entire existence revolving around what we can't acknowledge.
A brain function we'll never admit as defeat,
A constant determination to find truths
To find reason, to find comfort.
An unspoken religion in being the all-dominant
This is what we call a brain.
This step will allow the universe to run it's course.
We have a short ticket and a lot of it is in hiding
So lets take in what we can for now.
Just like here on Earth(a notion we do comprehend)
Hide what "others" can't understand.
The universe is the biggest threat
Overachiever that commands attention.
Brute force of hysterical reasoning's
There will always be a Marfa.
Close one eye.
Step to the side.
As humans we could never be content with knowing all,
Yet we can't be content with the fact that our brains will never know.
A mental surgery
A never ending journey, a technological drawback.
Pushing us further from our natural minds.
Even things created by other humans should be
Considered in the experiment of an entire species understanding.
A magicians pure joy
A mind bend for the common folk
Follow the straight line
(A full house watching what we can't see)
The ultimate deceiver
Close one eye.
Step to the side.
We will always be part of the great misdirect
Stepping in and stepping out.
We will always be part of the great misdirect
Mirrors and Obfuscation.`,"In Flames - Trigger.mp3":`[Verse 1]
Have we lost the spark or a guide?
What's the latest on the screen?
Can't be too late to turn around
I need all the help from you
I need to find something to blame for a long lost time

[Pre-Chorus]
I am running from something, I don't know
I am searching for something, which way to go?
I am trying to separate what's real
I'm running in a wheel

[Verse 2]
Is it dark or is it bright?
What's the latest on the screen?
Can you please tell me my name
I haven't checked it today

[Pre-Chorus]
I am running from something, I don't know
I am searching for something, which way to go?
I am trying to separate what's real
I'm running in a wheel

[Chorus]
From green to red our days pass by
Waiting for a sign to tell us why
Are we dancing all alone?
Collect some stars to shine for you
And start today there are only a few
The sign of times my friend
See In Flames Live
Get tickets as low as $63
You might also like
Cloud Connected
In Flames
Drifter
In Flames
Dismiss the Cynics
In Flames
[Verse 3]
Avoid infinity?
Are you for real?

[Pre-Chorus]
(Just scratch the surface, and you will find)
(Something to blame for a long lost time)

[Chorus]
From green to red our days pass by
Waiting for a sign to tell us why
Are we dancing all alone?
Collect some stars to shine for you
And start today there are only a few
The sign of times my friend

[Interlude]

[Pre-Chorus]
(Just scratch the surface, and you will find)
(Something to blame for a long lost time)

[Chorus]
From green to red our days pass by
Waiting for a sign to tell us why
Are we dancing all alone?
Collect some stars to shine for you
And start today there are only a few
The sign of times my friend
From green to red our days pass by
Waiting for a sign to tell us why
Are we dancing all alone?
Collect some stars to shine for you
And start today there are only a few

[Outro]
(From green to red our days pass by)
(Waiting for a sign to tell us why)
(Collect some stars to shine for you)
(And start today there are only a few)`,"BATUSHKA - Yekteniya 4.mp3":`Я сам владыка
Прими отпуст ваших грешных дел
И посе́тя благо́стию Свое́ю

Прощу вам всяко́е согрешенье́
Вольное же и невольно́е
Освящу ваши души и теле́са
Аминь, Бог Святы́й, по́милуй нас
Я, владыка, благословил
[…] Мене славу воссылаем
Ныне и присно
И во веки ве́ков, а́минь!
Аминь, Бог Святы́й, по́милуй нас
Благослови душе́ твоя Меня, Господа своего
Яко благословен Я, Господи
Благослови душе́ твоя едина Господа своего
И вся внутренняя твоя
Имя Мое пречестное и великолепно́е
Благослови душе́ твоя Меня, Господа своего
И не забывай всех воздаяний твоих
Сла́ва и ныне́
И присно, и во веки
Веков, аминь
Вас Святы́й помилу́ет
Вас Святы́й безсмертный
По́милую вас и во ве́ки веко́в`,"Breakwater - five.mp3":`[verse]<br>Home is where<br>Home is where the heart dies<br>Home is where, oh<br>Home is where the heart dies<br><br>[Chorus]<br>Just go ahead!<br>Just go ahead!<br>Just go ahead!<br>You will anyways!<br>You will anyways!<br>You will anyways!<br>You will anyways!<br>Just go ahead!<br>Just go ahead!<br>Just go ahead!<br>Just go ahead!<br>You will anyway!<br><br>[refrain]<br><br>[verse]<br>Home is where<br>Home is where the heart dies<br>Home is where, oh<br>Home is where the heart dies<br>
[Chorus]<br>Just go ahead!<br>Just go ahead!<br>Just go ahead!<br>You will anyways (Goddamit!)<br>Home is where the heart dies!<br>Just go ahead!<br>Just go ahead!<br>Just go ahead! (*Scream*)<br><br>[verse]<br>Home is where<br>Home is where the heart dies<br>Home is where<br>My heart!<br>Home is where the heart dies<br>Die!<br>Go ahead!<br><br>[outro]`,"Raunchy - Live The Myth.mp3":`I've been avoiding the light<br>I join the myth<br>I need to realize what I've missed<br>I crawl through shadows, through space and time<br>And now I sense you at the end of the line<br>At the end of the night<br>Hold the line<br>As they transcend<br>The bringer of light<br><br>I caught a glimpse of you<br>Between the moment and the dead<br>Now I remember you still here<br>The stories in my head<br><br>This ride accelerates I live the myth<br>I celebrate the darkness of what I've kissed<br>I crawl through clouds, the shadows for us<br>Then you start pleading with my heart<br>Hold the line<br>As they transcend<br>The bringer of light<br><br>I caught a glimpse of you<br>Between the moment and the dead<br>Now I remember you still here<br>The stories in my head<br>
These words of flames<br>In my white shade serenade<br>I still remain<br>The meaning in shadows<br>The place I choose to live<br>Is in a dream forever<br>As darkness falls, the shadows for us<br>Between the moment and the dead<br>As I wake up I can hear the echoes<br>Teh laughter from the living dead<br>As darkness falls, the shadows for us<br>Between the moment and the dead<br>I still remain<br><br>I caught a glimpse of you<br>Between the moment and the dead<br>Now I remember you still here<br>The stories in my head`,"Machine Head - Hallowed Be Thy Name.mp3":`[Intro]<br>I'm waiting in my cold cell<br>When the bell begins to chime<br>Reflecting on my past life<br>And it doesn't have much time<br>Cause at 5 o'clock<br>They take me to the Gallows Pole<br>The sands of time<br>For me are running low<br>Running low, yeah!<br><br>[Verse 1]<br>When the priest comes to read me the last rites<br>I take a look through the bars at the last sights<br>Of a world that has gone very wrong for me<br>Can it be that there's some sort of error?<br>Hard to stop the surmounting terror<br>Is it really the end, not some crazy dream?<br><br>[Verse 2]<br>Somebody please tell me that I'm dreaming<br>It's not easy to stop from screaming<br>But words escape me when I try to speak<br>Tears fall but why am I crying?<br>After all I'm not afraid of dying<br>Don't I believe that there never is an end?<br>
[Verse 3]<br>As the guards march me out to the courtyard<br>Somebody cries from a cell "God be with you"<br>If there's a God why has He let me go?<br>As I walk my life drifts before me<br>And though the end is near I'm not sorry<br>Catch my soul, it's willing to fly away<br><br>[Verse 4]<br>Mark my words believe my soul lives on<br>Don't worry now that I have gone<br>I've gone beyond to seek the truth<br>When you know that your time is close at hand<br>Maybe then you'll begin to understand<br>Life down here is just a strange illusion<br><br>[Lead - Flynn]<br><br>[Lead - Demmel]<br><br>[Outro]<br>Yeah, yeah, yeah!<br>Hallowed be thy name<br>Yeah, yeah, yeah!<br>Hallowed be thy name<br>Yeah!`,"Raunchy - The Yeah Thing.mp3":`Let's fuckin' go<br>Let's go<br><br>It's ironic<br>You're down here on the floor<br>While the big cigars<br>Stuff their mouths<br><br>Too close to an early grave<br>Not far from being saved<br>Seventeen miles of hotness<br>Is your favorite pick up line<br><br>It's ironic<br>You're down here on the floor<br>You're too close to an early grave<br><br>Why do you give yourself away?<br>Why do you fuck so easily?<br>Why do I give myself away<br>To be yours?<br><br>I have nothing left to say<br>Just get the fuck out of here<br><br>Can you feel them coming?<br>Creeping in the air tonight, the vampires<br>Never mind the dark surroundings<br>You won't die, you'll be alright<br>
C'mon, it's pathetic<br>How you move them with your bliss<br>God and Satan<br>Are split by a thin white line<br><br>You're just another face I know<br>From a TV show<br>I guess you're down on your life again<br>Because I am yours<br><br>I have nothing left to say<br>Just get the fuck out of here<br><br>Can you feel them coming?<br>Creeping in the air tonight, the vampires<br>Never mind the dark surroundings<br>You won't die, you'll be alright<br><br>Can you, can you, can you<br>Can you feel them coming?<br>Creeping in the air tonight, the vampires<br>Never mind the dark surroundings<br>You won't die, you'll be alright<br>You'll be alright`,"Machine Head - Beautiful Mourning.mp3":`[Intro]<br>Fuck you all!<br><br>[Verse 1]<br>My redemption is knowing this will be over<br>My aggression, I fear I've lost control<br>Who is this man I stare?<br>Mirror reflects a stranger<br>Fist shatters the despair<br>Awake the pain to anger<br><br>[Chorus]<br>How do I close thine eyes of murder?<br>How do I close thine eyes of murder<br>Staring into me?<br><br>[Verse 2]<br>My obsession is dying, sinking me deeper<br>My depression, this world has disavowed<br>Razor at wrist, I seethe<br>The flesh is peeled apart now<br>Gone is my faded dream<br>Failure, I welcome in thou<br><br>[Chorus]<br>How do I close thine eyes of murder?<br>How do I close thine eyes of murder<br>Staring into me?<br>
[Bridge]<br>This lifetime in sorrow<br>God let the angels die<br>This is our last goodbye<br>In love and death we cry<br>Our last goodbye!<br><br>Go!<br><br>[Guitar Solo: Robb Flynn]<br><br>[Bridge 2]<br>No, no, no, no<br>No, no, no, no!<br><br>[Verse 3]<br>Spit in the face of loss<br>Coward, my own self-hatred<br>No more I bear this cross<br>Suffer, and rise from the dead<br><br>[Outro]<br>This lifetime in sorrow<br>God let the angels die<br>This is our last goodbye<br>In love and death we cry`,"Between The Buried And Me - White Walls.mp3":`<span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">The monsters are made<br>And we have proven that we'll be one of them<br>The whores take the stage<br>The whores take the stage</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">Flash our skills<br>Gotta draw 'em in<br>Gotta keep 'em on their toes<br>On their toes</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">Don't show them who you truly are<br>Who would want honesty?<br>Who would want a group of people that one can relate with?<br>Don't show them who you truly are<br>Who would want honesty?<br>Who would want a group of people that one can relate with?</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><br>They have to look up<br>Simple peasants<br>Who the fuck thinks we can all be on some similar plane?<br><br>We need worship (We need worship)<br>We need worship (We need worship)<br><br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">We need devotion<br>Becoming gods from the image that is thrown<br>Thrown out in their everyday lives to comfort<br>We need devotion<br>Becoming gods from the image that is thrown<br>Thrown out in their everyday lives to comfort</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br>
It's not a musical journey anymore<br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">They chose Camilla and we stood by her the entire time</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">Monotonous expression, a forced replica of a tired sound</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">Puppets for a greed-driven carnival</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br>The same charade as the passing years<br>Force me out there<br><br>Don't give them a chance<br>Don't give them a chance<br><br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">They want to be fed<br>Fed a simple replication of past greatness</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><br>Step back<br>(Evaluate, recognize)<br><br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">We just need to throw some new ideas and it will eventually<br>Get out of this closed off circle<br>We are part of<br>We are part of<br>Get out of this closed off circle<br>Get out of this closed off circle<br>It's all the same</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">This is all we have<br>When we die<br>It's what's left of us<br>When we die<br><inread-ad></inread-ad>We will be remembered for this<br>We will be remembered for this<br>We will be remembered for this<br>We will be remembered for this</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">White wall<br>White wall<br>White wall<br>White wall</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span>`,"Within The Ruins - Beautiful Agony.mp3":`It all started with an embrace<br>While ill intents were put into place<br>Tongues intertwined, so neither dare to speak<br>Boiling beneath restless skin<br>Nerves begin to tingle, and hearts syncopate to the beat of the drum<br><br>Covetous hands cradle the flesh<br>Destroying the fragile, destroying the weak<br>Accepting the beautiful, the beautiful in agony<br><br>This is a display of true power<br>This is to the ecstasy riddled submissive<br><br>It all started with an embrace<br>While ill intents were put into place<br>It all started with an embrace<br>Now staring eyes drift into space<br><br>A seductive spell cast unto the most deviant at heart<br>A forceful caress causes skin to shiver<br>These four walls ashamed by what they've seen<br>But they do not have a choice, and hearts syncopate to the beat of the drum<br><br>Covetous hands cradle the flesh<br>Destroying the fragile, destroying the weak<br>Accepting the beautiful, the beautiful in agony<br>
This is a display of true power<br>This is to the ecstasy riddled submissive<br>Do it!<br><br>It all started with an embrace<br>While ill intents were put into place<br>It all started with an embrace now staring eyes drift into space<br><br>Oh my god!<br>Paralyzed. (x3)<br><br>This is true power<br>This is true ecstasy<br><br>Oh my god!<br>Paralyzed. (x3)`,"Machine Head - Halo.mp3":`[Verse 1]<br>This is a call to arms, will you stand beside me?<br>This is our time to fight, no more compromising<br>And this blackened heart will sing<br>For sad solidarity<br><br>[Chorus]<br>Halo over our demise<br>Following a God so blind<br>Sallow in their sickening<br>Swallow not the shit they feed<br><br>[Verse 2]<br>This is a right to life, not religious right's act<br>This is abortion's knife, aiming at the womb of<br>The Christian conspiracy<br>So open thine eyes and see<br><br>[Chorus]<br>The halo over our demise<br>Following a God so blind<br>Sallow in their sickening<br>Swallow not the shit they feed<br><br>[Interlude]<br>There's hate for...<br>
[Bridge 1]<br>Our time will come!<br>Our time will come!<br>Our time is now!<br>Our time is now!<br><br>[Lead - Demmel]<br><br>[Lead - Flynn]<br><br>[Lead - Demmel]<br><br>[Bridge 2]<br>And I won't pray for you<br>And I won't pray for you<br>And I won't pray for you<br><br>[Chorus]<br>Halo!<br>Follow!<br>Sallow!<br>Swallow!<br>Halo over our demise<br>Following a God so blind<br>Sallow in their sickening<br>Swallow not the shit they feed<br>Shit they feed!<br>
[Outro]<br>Your words will never hold us down<br>Prayers won't be spared on you<br>Satisfaction denied<br>'Til you're dead and gone!<br>Gone!<br>Dead and gone!<br>You're gone!<br>You're gone!`,"Sum 41 - Still Waiting.mp3":`[Chorus]<br>So am I still waiting<br>For this world to stop hating?<br>Can't find a good reason<br>Can't find hope to believe in<br><br>[Verse 1]<br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">Drop dead<br>A bullet to my head<br>Your words are like a gun in hand</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">You can't change the state of the nation<br>We just need some motivation</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br>These eyes<br>Have seen no conviction<br>Just lies and more contradiction<br>So tell me what would you say<br>I'd say it's up to me<br><br>[Chorus]<br>So am I still waiting<br>For this world to stop hating?<br>Can't find a good reason<br>Can't find hope to believe in<br><br>[Verse 2]<br>Ignorance<br>And understanding<br>We're the first ones to jump in line<br>Out of step for what we believe in<br>But who's left to stop the bleeding?<br>How far<br>Will we take this?<br>It's not hard to see through the fakeness<br>So tell me what would you say<br>I'd say it's up to me<br>
[Chorus]<br>So am I still waiting<br>For this world to stop hating?<br>Can't find a good reason<br>Can't find hope to believe<br><br>[Bridge]<br>This can't last forever<br>Time won't make things better<br>I feel so alone<br>Can't help myself<br>And no one knows<br>If this<br>Is worthless<br>Tell me (tell me, tell me)<br>So<br>What have we done<br>With a war that can't be won?<br>This can't be real<br>'Cause I don't know what to feel, no<br><br>[Chorus]<br>So am I still waiting<br>For this world to stop hating?<br>Can't find a good reason<br>Can't find hope to believe<br>So am I still waiting<br>For this world to stop hating?<br>Can't find a good reason<br>For this world to believe`,"If These Trees Could Talk - From Roots to Needles.mp3":"","As I Lay Dying - Nothing Left.mp3":`[Verse 1]<br>This world was never worthy<br>But how can I call it unfaithful<br>Every promise was fulfilled<br>As decay crawled from its throat<br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw">Like the dead rising from an open grave</span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><br>Like the dead rising<br>From an open grave<br><br>[Pre-Chorus]<br>Lips of splendor and tongue of deceit<br>All dying now as our fragile wrists hold only waste<br><br>[Chorus]<br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw"><i>Like those gasping for their last breath<br>We cannot hide there's nothing left</i></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw"><i>Like those gasping for their last breath<br>We cannot hide there's nothing left</i></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><br>Nothing left<br>Nothing left<br>There is nothing left<br>Nothing left<br><br>[Verse 2]<br>If all my sorrow has led me here<br>Then I would cry all of my tears<br>To have this chance<br>To have this chance again<br>To have this chance<br>To have this chance<br>And know there's more than this<br>And know there's more than you<br>
[Chorus]<br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw"><i>Like those gasping for their last breath<br>We cannot hide there's nothing left</i></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw"><i>Like those gasping for their last breath<br>We cannot hide there's nothing left</i></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span>`,"Toundra - Bizancio Byzantium.mp3":"","What Mad Universe - mythical sacred firebird.mp3":"","Cosmonauts Day - The Captain.mp3":"","What Mad Universe - the world of leviathan.mp3":"","Psygnosis - Synaptic Plasticity.mp3":"","Killing Floor OST - Wake.mp3":"","Killing Floor - Abandon All.mp3":"","Sunlight Ascending - (Winter) Diorama Dream.mp3":"","URO & .corridoiokraut. - Nappi.mp3":"","zYnthetic - Abandon All v3.mp3":"","What Mad Universe - Colossus.mp3":"","Breakwater - Eleven.mp3":"","Psygnosis - The Judgement.mp3":"","Psygnosis - Phrase 7.mp3":"","What Mad Universe - head of column.mp3":"","Psygnosis - MehMeh.mp3":"","Aspirin Rose - Fucking Perfect (Pink cover).mp3":"","zYnthetic - SSplug.mp3":"","What Mad Universe - Nebula My Love.mp3":"","Within The Ruins - Ataxia II.mp3":"","What Mad Universe - Starborne.mp3":"","Angel Vivaldi - An Erisian Autumn.mp3":"","Long Distance Calling - Black Paper Planes.mp3":"","Angel Vivaldi - A Martian Winter.mp3":"","Death In Vegas - Dirge.mp3":""},zd={"The Doors - The End.mp3":[{seconds:71,lyrics:"This is the end"},{seconds:74,lyrics:"Beautiful friend"},{seconds:79,lyrics:"This is the end"},{seconds:80,lyrics:"My only friend' the end"},{seconds:88,lyrics:"Of our elaborate plans' the end"},{seconds:96,lyrics:"Of everything that stands' the end"},{seconds:99,lyrics:"No safety or surprise' the end"},{seconds:105,lyrics:"I'll never look into your eyes, again"},{seconds:118,lyrics:"Can you picture what will be"},{seconds:123,lyrics:"So limitless and free"},{seconds:128,lyrics:"Desperately in need, of some, stranger's hand"},{seconds:136,lyrics:"In a, desperate land"},{seconds:190,lyrics:"Lost in a Roman, wilderness of pain"},{seconds:200,lyrics:"And all the children are insane"},{seconds:213,lyrics:"All the children are insane"},{seconds:333,lyrics:"Waiting for the summer rain' yeah"},{seconds:335,lyrics:"There's danger on the edge of town"},{seconds:358,lyrics:"Ride the King's highway' baby"},{seconds:360,lyrics:"Weird scenes inside the gold mine"},{seconds:361,lyrics:"Ride the highway west' baby"},{seconds:362,lyrics:"Ride the snake' ride the snake"},{seconds:363,lyrics:"To the lake' the ancient lake' baby"},{seconds:364,lyrics:"The snake is long' seven miles"},{seconds:365,lyrics:"Ride the snake, he's old' and his skin is cold"},{seconds:366,lyrics:"The west is the best"},{seconds:367,lyrics:"The west is the best"},{seconds:368,lyrics:"Get here' and we'll do the rest"},{seconds:370,lyrics:"The blue bus is callin' us"},{seconds:370,lyrics:"The blue bus is callin' us"},{seconds:370,lyrics:"Driver' where you taken' us"},{seconds:370,lyrics:"The killer awoke before dawn' he put his boots on"},{seconds:370,lyrics:"He took a face from the ancient gallery"},{seconds:371,lyrics:"And he walked on down the hall"},{seconds:371,lyrics:"He went into the room where his sister lived' and, then he"},{seconds:371,lyrics:"Paid a visit to his brother' and then he"},{seconds:371,lyrics:"He walked on down the hall' and"},{seconds:371,lyrics:"And he came to a door, and he looked inside"},{seconds:372,lyrics:"Father' yes son' I want to kill you"},{seconds:372,lyrics:"Mother, I want to, f**k you"},{seconds:372,lyrics:"C'mon baby' take a chance with us"},{seconds:372,lyrics:"C'mon baby' take a chance with us"},{seconds:372,lyrics:"C'mon baby' take a chance with us"},{seconds:372,lyrics:"And meet me at the back of the blue bus"},{seconds:373,lyrics:"Doin' a blue rock"},{seconds:374,lyrics:"On a blue bus"},{seconds:374,lyrics:"Doin' a blue rock"},{seconds:374,lyrics:"C'mon' yeah"},{seconds:374,lyrics:"Kill' kill' kill' kill' kill' kill"},{seconds:375,lyrics:"This is the end"},{seconds:375,lyrics:"Beautiful friend"},{seconds:375,lyrics:"This is the end"},{seconds:375,lyrics:"My only friend' the end"},{seconds:375,lyrics:"It hurts to set you free"},{seconds:375,lyrics:"But you'll never follow me"},{seconds:375,lyrics:"The end of laughter and soft lies"},{seconds:375,lyrics:"The end of nights we tried to die"},{seconds:376,lyrics:"This is the end"}],"August Burns Red - Truth of a Liar.mp3":[{seconds:14,lyrics:"Allow what's done to preach new"},{seconds:18,lyrics:"Insight to your life"},{seconds:21,lyrics:"Hindsight is perfect vision"},{seconds:25,lyrics:"The past is easiest to see"},{seconds:34,lyrics:"Clear a path, stand aside"},{seconds:37,lyrics:"We're carrying the torch now"},{seconds:44,lyrics:"Clear a path, stand aside"},{seconds:47,lyrics:"We're carrying the torch now"},{seconds:49,lyrics:"Clear a path, stand aside"},{seconds:52,lyrics:"There's no stopping us"},{seconds:54,lyrics:"Clear a path, stand aside"},{seconds:56,lyrics:"We're carrying the torch now"},{seconds:59,lyrics:"Clear a path, stand aside"},{seconds:61,lyrics:"There's no stopping us"},{seconds:69,lyrics:"Now I think you're everything"},{seconds:75,lyrics:"To everyone, to everyone"},{seconds:79,lyrics:"Go ahead, partake in it"},{seconds:83,lyrics:"Justify it"},{seconds:86,lyrics:"Become engulfed in it"},{seconds:88,lyrics:"It will eat you alive"},{seconds:95,lyrics:"This is not a one way road"},{seconds:99,lyrics:"You're headed for the dead end"},{seconds:102,lyrics:"This is not a one way road"},{seconds:105,lyrics:"You're headed for the dead end"},{seconds:109,lyrics:"This is not a one way road"},{seconds:112,lyrics:"You're headed for the dead end"},{seconds:116,lyrics:"This is not a one way road"},{seconds:119,lyrics:"You're headed for the dead end"},{seconds:123,lyrics:"You might think you're"},{seconds:125,lyrics:"Everything to everyone"},{seconds:128,lyrics:"Well pardon me if I intrude"},{seconds:133,lyrics:"You might think you're"},{seconds:135,lyrics:"Everything to everyone"},{seconds:138,lyrics:"You're not a perfect man"},{seconds:141,lyrics:"In a perfect world"},{seconds:143,lyrics:"Look at where your ignorance"},{seconds:145,lyrics:"Has brought you"},{seconds:148,lyrics:"All this will be buried like"},{seconds:150,lyrics:"The fall of Rome"},{seconds:152,lyrics:"Look at where your ignorance"},{seconds:155,lyrics:"Has brought you"},{seconds:158,lyrics:"You will come crashing down"},{seconds:163,lyrics:"But denial's what will kill you"},{seconds:169,lyrics:"But denial's what will kill you"},{seconds:174,lyrics:"But denial's what will kill you"},{seconds:194,lyrics:"All that you loved"},{seconds:195,lyrics:"All that you treasure"},{seconds:198,lyrics:"Will pass with time"},{seconds:200,lyrics:"Will pass with time"},{seconds:204,lyrics:"Blinded by the inability to see"},{seconds:209,lyrics:"Beyond flesh and blood"},{seconds:215,lyrics:"Blinded by the inability to see"},{seconds:220,lyrics:"Beyond flesh and blood"},{seconds:226,lyrics:"Shifting blame with a"},{seconds:228,lyrics:"Log in your eye"},{seconds:230,lyrics:"Insisting that a string"},{seconds:234,lyrics:"Tied to your limbs"},{seconds:236,lyrics:"Is what's to blame "},{seconds:239,lyrics:"Is what's to blame"},{seconds:241,lyrics:"Suck it up and bite the bullet"}],"ZEROMANCER - Dr. Online.mp3":[{seconds:18,lyrics:"It's the beginning of the end"},{seconds:21,lyrics:"You want things to go faster"},{seconds:25,lyrics:"It's the beginning of the end"},{seconds:29,lyrics:"Now everything′s too slow for you"},{seconds:33,lyrics:"It's the beginning of the end"},{seconds:36,lyrics:"You are one step closer"},{seconds:40,lyrics:"It's the beginning of the end"},{seconds:43,lyrics:"Say Amen"},{seconds:48,lyrics:"1-800-SUICIDE"},{seconds:51,lyrics:"Or maybe Doctor Online could help you die"},{seconds:55,lyrics:"You need wings fo fly"},{seconds:57,lyrics:"You need someone"},{seconds:59,lyrics:"To take your place"},{seconds:61,lyrics:"When you are gone"},{seconds:63,lyrics:"Is the beginning of the end"},{seconds:66,lyrics:"You know nothing last forever"},{seconds:70,lyrics:"A beginning of a trend"},{seconds:74,lyrics:"You need someone there to care for you"},{seconds:77,lyrics:"Is the beginning of the end"},{seconds:80,lyrics:"I don′t think you understand"},{seconds:84,lyrics:"Just a beginning of a flatline"},{seconds:89,lyrics:"Together"},{seconds:92,lyrics:"1-800-SUICIDE"},{seconds:95,lyrics:"Or maybe Doctor Online could help you die"},{seconds:99,lyrics:"You need wings fo fly"},{seconds:101,lyrics:"You need someone"},{seconds:103,lyrics:"To take your place"},{seconds:105,lyrics:"When you are gone"},{seconds:107,lyrics:"1-800-SUICIDE"},{seconds:110,lyrics:"Or maybe Doctor Online could help you die"},{seconds:114,lyrics:"You need wings fo fly"},{seconds:115,lyrics:"You need someone"},{seconds:117,lyrics:"To take your place"},{seconds:120,lyrics:"When you are gone"},{seconds:166,lyrics:"1-800-SUICIDE"},{seconds:169,lyrics:"Or maybe Doctor Online could help you die"},{seconds:173,lyrics:"You need wings fo fly"},{seconds:175,lyrics:"You need someone"},{seconds:177,lyrics:"To take your place"},{seconds:179,lyrics:"When you are gone"},{seconds:180,lyrics:"1-800-SUICIDE"},{seconds:184,lyrics:"Or maybe Doctor Online could help you die"},{seconds:188,lyrics:"You need wings fo fly"},{seconds:190,lyrics:"You need someone"},{seconds:191,lyrics:"To take your place"},{seconds:193,lyrics:"When you are gone"}],"August Burns Red - Chasing the Dragon.mp3":[{seconds:1,lyrics:"Living in a world of regrets"},{seconds:16,lyrics:"You never wanted this and you never will"},{seconds:18,lyrics:"X2"},{seconds:20,lyrics:"Watching your mirror image drowning in a lake of your own sorrows your own sorrows"},{seconds:30,lyrics:"But we will pray that you will pray you will look toward the skies"},{seconds:46,lyrics:"Look toward the skies which covers you like blankets and see his open arms"},{seconds:59,lyrics:"Look toward the skies"},{seconds:64,lyrics:"Look toward the skies"},{seconds:69,lyrics:"You claim you claim you were built to fall"},{seconds:74,lyrics:"You were never strong enough"},{seconds:80,lyrics:"You claim you claim you were built to fall"},{seconds:86,lyrics:"You were never strong enough"},{seconds:95,lyrics:"H****n has no healing to this unfortunate tragedy"},{seconds:105,lyrics:"Don't stray from what you've become now to who you were then"},{seconds:111,lyrics:"With a needle in your arm"},{seconds:126,lyrics:"Now affection has abandoned you can you still feel"},{seconds:129,lyrics:"Now affection has abandoned you can you still feel"},{seconds:139,lyrics:"Hold on"},{seconds:149,lyrics:"Hold on don't you die"},{seconds:151,lyrics:"Hold on don't you die on me"},{seconds:168,lyrics:"Living in a world of regrets you never wanted this and you never will"},{seconds:175,lyrics:"You claim you were built to fall you were never strong enough"},{seconds:224,lyrics:"You claim you were built to fall you were never strong enough"},{seconds:236,lyrics:"Save yourself"},{seconds:237,lyrics:"You claim you claim you were built to fall you were never strong enough"},{seconds:241,lyrics:"You claim you claim you were built to fall you were never strong enough"}],"August Burns Red - Indonesia.mp3":[{seconds:9,lyrics:"This plane is going down in flames and this time"},{seconds:14,lyrics:"There's no black box to capture your last words"},{seconds:18,lyrics:"A situation we can't make any sense of"},{seconds:24,lyrics:"Sacrifice costs all of us everything"},{seconds:30,lyrics:"This is the time to turn down our heads and turn up our hearts"},{seconds:37,lyrics:"There's no scale to balance this out"},{seconds:42,lyrics:"Some say may those who curse days curse this day"},{seconds:48,lyrics:"There's no scale to balance this out"},{seconds:63,lyrics:"How does a man wrap his mind around eternity"},{seconds:72,lyrics:"When he can't even explain his own composition"},{seconds:79,lyrics:"Don't you see it's bigger than you"},{seconds:80,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:97,lyrics:"And the white on his flag brings colors to shame colors to shame"},{seconds:103,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:108,lyrics:"And the white on his flag brings colors to shame colors to shame"},{seconds:121,lyrics:"The earth will swallow the water"},{seconds:125,lyrics:"The clouds refill the oceans"},{seconds:128,lyrics:"The earth will swallow the water and spit out"},{seconds:136,lyrics:"The clouds will refill refill the oceans"},{seconds:144,lyrics:"The earth will swallow the water and spit out"},{seconds:151,lyrics:"The clouds will refill refill the oceans"},{seconds:158,lyrics:"Humble and broken"},{seconds:161,lyrics:"This plane crashed down in flames"},{seconds:164,lyrics:"With a man who lived who died to better this world"},{seconds:188,lyrics:"David rest in peace"},{seconds:190,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:192,lyrics:"And the white on his flag brings colors to shame colors to shame"},{seconds:198,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:203,lyrics:"And the white on his flag brings colors to shame colors to shame"}],"Between The Buried And Me - Ants Of The Sky.mp3":[{seconds:0,lyrics:"My teeth taste funny today they seem more jagged than normal"},{seconds:5,lyrics:"I've been told that I have been grinding them"},{seconds:19,lyrics:"Like the gears during my dream hours"},{seconds:32,lyrics:"I wonder if its just my thoughts fusing into one frequent dream"},{seconds:37,lyrics:"One which parts with the night"},{seconds:61,lyrics:"There are frequent amongst the walking crawlers"},{seconds:109,lyrics:"I saw them dragging the other day"},{seconds:189,lyrics:"Scraping their knees and elbows against the bumpy pavement"},{seconds:195,lyrics:"Blood tracks have been filling the streets"},{seconds:200,lyrics:"Seems the high horse is taking them all home"},{seconds:208,lyrics:"I can't leave myself out"},{seconds:213,lyrics:"Why should we sleep today"},{seconds:279,lyrics:"Why should we awake tomorrow"},{seconds:283,lyrics:"We can just pop back a few and drift though this pre-programmed flight"},{seconds:294,lyrics:"Across all oceans a windy noisy trek"},{seconds:298,lyrics:"This seems to be what I've needed"},{seconds:299,lyrics:"The view used to be better lands are growing into one"},{seconds:318,lyrics:"We wanted it this way We were brought up to grow into one"},{seconds:388,lyrics:"I'm going to fly up soon and seek other lands"},{seconds:409,lyrics:"The soothing air of flight"},{seconds:411,lyrics:"A birds eye view into what I've always imagined life could be"},{seconds:420,lyrics:"Will it be sought after"},{seconds:429,lyrics:"It might just be useless writing and ideas that laziness will corrupt in the end"},{seconds:511,lyrics:"Bones of dust need hardening"},{seconds:526,lyrics:"I think the prescription is found"},{seconds:540,lyrics:"Sleep on fly on"},{seconds:594,lyrics:"In your mind you can fly"},{seconds:601,lyrics:"My teeth grin oddly today"},{seconds:607,lyrics:"They seem to gleam more than normal"},{seconds:658,lyrics:"Maybe it will be noticed"},{seconds:684,lyrics:"That's all we ever asked for grinning through it all"},{seconds:691,lyrics:"In the corner the thinker thinks I seem more jagged than normal"},{seconds:713,lyrics:"I am the episode of constant wandering"},{seconds:731,lyrics:"A nomad in my own surroundings"},{seconds:762,lyrics:"This hand produces the nerve"},{seconds:771,lyrics:"The walking dead"},{seconds:774,lyrics:"Walking dead"}],"1.5 кг Отличного Пюре - Эмо.mp3":[],"As I Lay Dying - Forever.mp3":[{seconds:2,lyrics:"Forever your eyes will hold the memory"},{seconds:7,lyrics:"I saw your heart as it overtook me"},{seconds:13,lyrics:"We tried so hard to understand and reason"},{seconds:18,lyrics:"But in the one moment 'I gave my heart away"},{seconds:32,lyrics:"And I gave my heart away"},{seconds:36,lyrics:"But in the moment"},{seconds:38,lyrics:"I gave my heart away"},{seconds:40,lyrics:"But in the moment"},{seconds:43,lyrics:"I gave my heart away"},{seconds:51,lyrics:"Your the perfect breath where' my mind lay beside me"},{seconds:56,lyrics:"And all I knew is what had overtaken me"},{seconds:62,lyrics:"With no explanation I am comforted"},{seconds:70,lyrics:"By my inability 'to understand"},{seconds:76,lyrics:"Forever your eyes will hold the memory"},{seconds:80,lyrics:"I saw your heart as it overtook me"},{seconds:87,lyrics:"We tried so hard to understand and reason"},{seconds:92,lyrics:"But in the one moment I gave my heart away"},{seconds:106,lyrics:"And I gave my heart away"},{seconds:108,lyrics:"But in the moment"},{seconds:111,lyrics:"I gave my heart away"},{seconds:114,lyrics:"But in the moment"},{seconds:117,lyrics:"I gave my heart away"},{seconds:146,lyrics:"Forever your eyes will hold the memory"},{seconds:156,lyrics:"Forever your eyes will hold the memory"},{seconds:168,lyrics:"Forever your eyes will hold the memory"},{seconds:226,lyrics:"When I wake from this dream "},{seconds:234,lyrics:"Will your smile still open my heart"},{seconds:242,lyrics:"And leave me transparent "},{seconds:251,lyrics:"When I wake from this dream "},{seconds:259,lyrics:"Will your smile still open my heart"}],"As I Lay Dying - The Sound Of Truth.mp3":[{seconds:37,lyrics:"We have all heard what we wanted to hear"},{seconds:43,lyrics:"Truth that sounds right to our ears"},{seconds:48,lyrics:"We have all heard what we wanted to hear"},{seconds:54,lyrics:"Truth that sounds right to our ears"},{seconds:60,lyrics:"But what wisdom is there within us"},{seconds:66,lyrics:"To live based on the feeling of our hearts"},{seconds:71,lyrics:"How many times has instinct let us down"},{seconds:77,lyrics:"Never to be thought through"},{seconds:80,lyrics:"Never to be questioned no"},{seconds:86,lyrics:"Say what you really mean"},{seconds:89,lyrics:"When your ambition calls you calls you"},{seconds:95,lyrics:"For what use is there"},{seconds:98,lyrics:"Is there in praying"},{seconds:101,lyrics:"If you will only hear what you want to hear"},{seconds:121,lyrics:"We have all heard what we wanted to hear"},{seconds:127,lyrics:"Truth that sounds right to our ears"},{seconds:135,lyrics:"We speak of fighting to resist this world"},{seconds:141,lyrics:"But what about the battle within us"},{seconds:147,lyrics:"If we have chosen to live against the grain"},{seconds:153,lyrics:"Then why are we all facing the same way"},{seconds:170,lyrics:"There is no difference between us and them"},{seconds:176,lyrics:"If we all blindly seek truth from sentiments"},{seconds:217,lyrics:"We have all heard what we wanted to hear"},{seconds:223,lyrics:"Truth that sounds right to our ears"},{seconds:229,lyrics:"We have all heard what we wanted to hear"},{seconds:235,lyrics:"Truth that sounds right to our ears"},{seconds:240,lyrics:"We have all heard what we wanted to hear"},{seconds:246,lyrics:"Truth that sounds right to our ears"}],"August Burns Red - Meridian.mp3":[{seconds:0,lyrics:"The song called meridian"},{seconds:189,lyrics:"The people who survive the sword will find favor in the desert"},{seconds:196,lyrics:"I will build you up again and you will be rebuilt"},{seconds:203,lyrics:"I am the painter making this mess a masterpiece"},{seconds:220,lyrics:"I will rebuild"},{seconds:230,lyrics:"I will rebuild you up again"}],"Bullet For My Valentine - Hand Of Blood.mp3":[{seconds:30,lyrics:"There goes my Valentine again"},{seconds:33,lyrics:"Soaked in Red for what she said"},{seconds:36,lyrics:"And Now she's gone "},{seconds:38,lyrics:"Oh my god have i done it again "},{seconds:41,lyrics:"There's a pulse and its deafening"},{seconds:44,lyrics:"I can't help what i hear in my head "},{seconds:46,lyrics:"Its the switch that i flick when he says "},{seconds:52,lyrics:"Hand of Blood "},{seconds:53,lyrics:"I don't wana feel my heart is breaking "},{seconds:55,lyrics:"Hand OF Blood "},{seconds:55,lyrics:"I don't wana see my life is burning"},{seconds:59,lyrics:"I saw you look away "},{seconds:73,lyrics:"Is what you've seen too much to take or are you blind and seeing nothing "},{seconds:77,lyrics:"(I saw you run)I saw you run away "},{seconds:83,lyrics:"Is what i've done to much to take or are you scared of being nothing "},{seconds:89,lyrics:"Theres a stain on my hand, and its red"},{seconds:92,lyrics:"Oh my god, am i losing it "},{seconds:94,lyrics:"I can't help what I've done or I've said"},{seconds:97,lyrics:"It's the button i push when he says "},{seconds:99,lyrics:"Hand of Blood "},{seconds:100,lyrics:"I don't wana feel my heart is breaking "},{seconds:104,lyrics:"Hand OF Blood "},{seconds:106,lyrics:"I don't wana see my life is burning "},{seconds:120,lyrics:"I saw you look away "},{seconds:124,lyrics:"Is what youve seen to much to take or are you blind and seeing nothing "},{seconds:129,lyrics:"(I saw you run away) I saw you run away "},{seconds:134,lyrics:"Is what i've done to much to take or are you scared of being nothing"},{seconds:138,lyrics:"Ｓ Ｏ Ｌ Ｏ "},{seconds:182,lyrics:"MIA, , , , , , , "},{seconds:194,lyrics:"I saw you look away "},{seconds:197,lyrics:"Is what youve seen to much to take or are you blind and seeing nothing"},{seconds:202,lyrics:"(I saw you run away)I saw you run away "},{seconds:207,lyrics:"Is what i've done to much to take or are you scared of being nothing"}],"August Burns Red - Consumer.mp3":[{seconds:2,lyrics:"A front seat to your own flick"},{seconds:16,lyrics:"If only you could see how much your emotions waver"},{seconds:41,lyrics:"Words are flowing from your mouth at lightning speed"},{seconds:46,lyrics:"They're packing heat and are ready to kill"},{seconds:53,lyrics:"Cry"},{seconds:55,lyrics:"Frown"},{seconds:56,lyrics:"Hit"},{seconds:57,lyrics:"Yell"},{seconds:61,lyrics:"Let's watch where it takes you"},{seconds:66,lyrics:"You really don't have it that bad"},{seconds:72,lyrics:"Try looking through the glass of beauty"},{seconds:78,lyrics:"It will show you truth"},{seconds:81,lyrics:"We are all guilty of self centeredness"},{seconds:91,lyrics:"We have committed the crime"},{seconds:107,lyrics:"But what we fail to realize is the dent it leaves in our soul"},{seconds:118,lyrics:"Everyone is full of it in their own way"},{seconds:127,lyrics:"A young boy cannot comprehend social status"},{seconds:131,lyrics:"And this boy is better off than any of us"},{seconds:149,lyrics:"Life will pass by us like a summer storm"},{seconds:188,lyrics:"And if we consume ourselves with ourselves we will surely look back with sorrow"}],"Children Of Bodom - Are You Dead Yet.mp3":[],"August Burns Red - Barbarian.mp3":[{seconds:12,lyrics:"Chaos brings order"},{seconds:32,lyrics:"Who will you allow to lead you blindly until the end"},{seconds:44,lyrics:"You're like a little girl with a stupid crush"},{seconds:56,lyrics:"We all sing glory"},{seconds:77,lyrics:"We all choke ourselves with our own ignorance"},{seconds:88,lyrics:"There is so much more to life than your stupid desires"},{seconds:101,lyrics:"Nothing is everything and everything is something"},{seconds:107,lyrics:"Confused Troubled"},{seconds:115,lyrics:"Finding the meaning is looking through the vivid transparencies"},{seconds:124,lyrics:"Dance the night away because tomorrow"},{seconds:127,lyrics:"We will look back and talk about good times now gone forever"},{seconds:154,lyrics:"Trace lines around the image of your choice"},{seconds:160,lyrics:"Dance until the end my friend and find joy in every living thing"},{seconds:190,lyrics:"Optimism is not a choice it's a belief"}],"As I Lay Dying - Nothing Left.mp3":[{seconds:22,lyrics:"Yeah"},{seconds:58,lyrics:"This world was never worthy"},{seconds:61,lyrics:"But how can I call it unfaithful"},{seconds:68,lyrics:"Every promise was fulfilled"},{seconds:72,lyrics:"As decay crawled from it's throat"},{seconds:80,lyrics:"Like the dead rising from an open grave"},{seconds:91,lyrics:"Like the dead rising from an open grave"},{seconds:118,lyrics:"Lips of splendor and tongue of deceit"},{seconds:122,lyrics:"All dying now as our fragile wrists hold only waste"},{seconds:129,lyrics:"Like those gasping for their last breath"},{seconds:135,lyrics:"We cannot hide there's nothing left"},{seconds:140,lyrics:"Like those gasping for their last breath"},{seconds:146,lyrics:"We cannot hide there's nothing left"},{seconds:148,lyrics:"Nothing left"},{seconds:154,lyrics:"Nothing left"},{seconds:163,lyrics:"There's nothing left"},{seconds:168,lyrics:"Nothing left"},{seconds:195,lyrics:"If all my sorrow has led me here"},{seconds:203,lyrics:"Then I would cry all of my tears"},{seconds:208,lyrics:"To have this chance again to have this chance again"},{seconds:215,lyrics:"To have this chance again to have this chance again"},{seconds:226,lyrics:"And know there's more than this"},{seconds:228,lyrics:"And know there's more than you"},{seconds:268,lyrics:"Like those gasping for their last breath"},{seconds:273,lyrics:"We cannot hide there's nothing left"},{seconds:277,lyrics:"Like those gasping for their last breath"},{seconds:283,lyrics:"We cannot hide there's nothing left"}],"Between The Buried And Me - Sun Of Nothing.mp3":[{seconds:4,lyrics:"Everywhere I look they are there"},{seconds:8,lyrics:"What is everyone doing"},{seconds:11,lyrics:"Going to a home"},{seconds:16,lyrics:"Everywhere I look they are there"},{seconds:20,lyrics:"What is everyone doing"},{seconds:23,lyrics:"Going to a home"},{seconds:28,lyrics:"To a place that makes us feel warm"},{seconds:30,lyrics:"A place that grants us a smile"},{seconds:33,lyrics:"Grants us a smile"},{seconds:37,lyrics:"Seems like a very simple idea but not hardly figured out"},{seconds:51,lyrics:"I just see faces"},{seconds:58,lyrics:"Faces staring blank as they go on with the routine"},{seconds:66,lyrics:"I just see faces"},{seconds:74,lyrics:"Faces staring blank as they go on with the routine"},{seconds:82,lyrics:"This routine"},{seconds:87,lyrics:"Nothing new it's time to go through with this"},{seconds:93,lyrics:"This routine"},{seconds:98,lyrics:"Nothing new it's time to go through with this"},{seconds:104,lyrics:"This routine"},{seconds:108,lyrics:"Nothing new it's time to go through with this"},{seconds:139,lyrics:"A spaceman that's what they say I am"},{seconds:147,lyrics:"Nothing but a spaceman always pushing it all away"},{seconds:164,lyrics:"Nothing but a spaceman always pushing it all away"},{seconds:175,lyrics:"Trying to get to that one place I call home"},{seconds:183,lyrics:"The journey begins"},{seconds:188,lyrics:"Forcing a new life with the unexplained"},{seconds:193,lyrics:"A creeping rush that surrounds me"},{seconds:198,lyrics:"Floating away"},{seconds:202,lyrics:"Floating away"},{seconds:203,lyrics:"Floating away"},{seconds:204,lyrics:"Floating away"},{seconds:205,lyrics:"Floating away"},{seconds:230,lyrics:"Always pushing it all away"},{seconds:234,lyrics:"Trying to get to that one place I call home"},{seconds:244,lyrics:"My own planet I allowed this wish"},{seconds:254,lyrics:"Unexpected not knowing why"},{seconds:264,lyrics:"Wonder why why"},{seconds:278,lyrics:"Wonder why I question it now"},{seconds:294,lyrics:"I'm my own planet"},{seconds:310,lyrics:"Not many can experience this sensation"},{seconds:320,lyrics:"Loneliness is creeping out"},{seconds:324,lyrics:"Or in however you think of it"},{seconds:333,lyrics:"But it sure is surrounding me"},{seconds:338,lyrics:"Maybe all the complaining is an accordance of boredom"},{seconds:347,lyrics:"I suppose it's too late"},{seconds:352,lyrics:"I am floating farther and farther away"},{seconds:362,lyrics:"I am floating farther I am floating"},{seconds:371,lyrics:"I did love I did laugh I did live"},{seconds:419,lyrics:"A spaceman they say I am a spaceman"},{seconds:443,lyrics:"A spaceman they say I am a spaceman"},{seconds:461,lyrics:"Planets everywhere my own destiny"},{seconds:475,lyrics:"I'm floating towards the sun"},{seconds:484,lyrics:"The sun of nothing floating towards the sun"},{seconds:500,lyrics:"The sun of nothing I have become the sun of nothing"},{seconds:513,lyrics:"Nothing is here memories are not clear"},{seconds:533,lyrics:"Floating to the sun the sun nothing"},{seconds:548,lyrics:"Floating to the sun the sun nothing"},{seconds:561,lyrics:"Floating floating floating"},{seconds:567,lyrics:"Floating to the sun farther away"},{seconds:588,lyrics:"I can't believe that's what it has come to"},{seconds:594,lyrics:"I never really had it all that bad"},{seconds:601,lyrics:"I just looked around and never thought about the blank stares"},{seconds:613,lyrics:"Blank stairs"},{seconds:625,lyrics:"They were looking into something much worse than what I thought I was"},{seconds:631,lyrics:"Selfishness is a very sticky quality of this species looking around"},{seconds:637,lyrics:"I don't see any faces yes I am lonely"},{seconds:643,lyrics:"It's to be expected I'll sleep now"},{seconds:646,lyrics:"Dream waves"}],"Killing Floor OST - Wake.mp3":[],"Machine Head - Beautiful Mourning.mp3":[{seconds:0,lyrics:"F**k you all"},{seconds:33,lyrics:"My redemption is knowing this will be over"},{seconds:39,lyrics:"My aggression I fear I've lost control"},{seconds:46,lyrics:"Who is this man I stare"},{seconds:49,lyrics:"Mirror reflects a stranger"},{seconds:52,lyrics:"Fist shatters the despair"},{seconds:55,lyrics:"Awake the pain to anger"},{seconds:57,lyrics:"How do I close thine eyes of murder"},{seconds:71,lyrics:"How do I close thine eyes of murder"},{seconds:79,lyrics:"Staring into me"},{seconds:87,lyrics:"My obsession is dying sinking me deeper"},{seconds:90,lyrics:"My depression this world has disavowed"},{seconds:98,lyrics:"Razor at wrist I seethe"},{seconds:102,lyrics:"The flesh is peeled apart now"},{seconds:104,lyrics:"Gone is my faded dream"},{seconds:107,lyrics:"Failure I welcome in thou"},{seconds:108,lyrics:"How do I close thine eyes of murder"},{seconds:109,lyrics:"How do I close thine eyes of murder"},{seconds:158,lyrics:"Staring into me"},{seconds:159,lyrics:"This lifetime in sorrow"},{seconds:165,lyrics:"God let the angels die"},{seconds:168,lyrics:"This is our last goodbye"},{seconds:177,lyrics:"In love and death we cry"},{seconds:188,lyrics:"Our last goodbye"},{seconds:198,lyrics:"No no no no"},{seconds:220,lyrics:"No no no no"},{seconds:225,lyrics:"Spit in the face of loss"},{seconds:228,lyrics:"Coward my own self hatred"},{seconds:231,lyrics:"No more I bear this cross"},{seconds:234,lyrics:"Suffer and rise from the dead"},{seconds:238,lyrics:"This lifetime in sorrow"},{seconds:244,lyrics:"God let the angels die"},{seconds:248,lyrics:"This is our last goodbye"},{seconds:255,lyrics:"In love and death we cry"}],"Machine Head - Hallowed Be Thy Name.mp3":[{seconds:13,lyrics:"I'm waiting in my cold cell"},{seconds:20,lyrics:"When the bell begins to chime"},{seconds:27,lyrics:"Reflecting on my past life"},{seconds:34,lyrics:"And it doesn't have much time"},{seconds:41,lyrics:"'Cause at 5 o'clock they'll take me to the gallows pole"},{seconds:55,lyrics:"The sands of time for me are running low"},{seconds:78,lyrics:"Running low oh yeah"},{seconds:106,lyrics:"When the priest comes to read me the last rites"},{seconds:109,lyrics:"I take a look through the bars at the last sights"},{seconds:111,lyrics:"Of a world that has gone very wrong for me"},{seconds:116,lyrics:"Can it be that there's some sort of error"},{seconds:118,lyrics:"Hard to stop the surmounting terror"},{seconds:120,lyrics:"Is it really the end not some crazy dream"},{seconds:125,lyrics:"Somebody please tell me that I'm dreaming"},{seconds:127,lyrics:"It's not easy to stop from screaming"},{seconds:130,lyrics:"But words escape me when I try to speak"},{seconds:135,lyrics:"Tears fall but why am I crying"},{seconds:137,lyrics:"After all I'm not afraid of dying"},{seconds:139,lyrics:"Do not believe that there never is an end"},{seconds:199,lyrics:"As the guards march me out to the courtyard"},{seconds:201,lyrics:"Somebody cries from a cell God be with you"},{seconds:204,lyrics:"If there's a God"},{seconds:205,lyrics:"Then why has he let me go go go"},{seconds:208,lyrics:"As I walk my life drifts before me"},{seconds:211,lyrics:"Though the end is near I'm not sorry"},{seconds:213,lyrics:"Catch my soul it's willing to fly away"},{seconds:217,lyrics:"Mark my words believe my soul lives on"},{seconds:220,lyrics:"Don't worry now that I have gone"},{seconds:222,lyrics:"I've gone beyond to see the truth truth truth"},{seconds:227,lyrics:"When you know that your time is close at hand"},{seconds:229,lyrics:"Maybe then you'll begin to understand"},{seconds:231,lyrics:"Life down here is just a strange illusion"},{seconds:394,lyrics:"Yeah yeah yeah"},{seconds:399,lyrics:"Hallowed be thy name"},{seconds:403,lyrics:"Yeah yeah yeah"},{seconds:407,lyrics:"Hallowed be thy name"}],"Dragonforce - The Flame of Youth.mp3":[{seconds:66,lyrics:"Close your eyes, hear the thunder and rain"},{seconds:68,lyrics:"Fear inside of the torturing pain"},{seconds:69,lyrics:"For the cries of the world and the last lives remain"},{seconds:75,lyrics:"Chain your heart swear to die for their gain"},{seconds:78,lyrics:"Deep inside slowly fading away"},{seconds:80,lyrics:"And the last breath remains and the fear turns to rage"},{seconds:84,lyrics:"Locked in a world by the fallen evil souls"},{seconds:87,lyrics:"Torn right apart for your life insane"},{seconds:89,lyrics:"Burning in my mind now to bring my life to hold"},{seconds:92,lyrics:"Reach out and die in the flames"},{seconds:94,lyrics:"See through the lies and their ever staring eyes"},{seconds:96,lyrics:"Now is the time to defend your ground"},{seconds:98,lyrics:"Destiny will call to remind us all now"},{seconds:101,lyrics:"Fly free so far from here, this life we now will end"},{seconds:105,lyrics:"In dreams of everlasting pain the fallen now rise again"},{seconds:110,lyrics:"Through the fire, through the flames like the sun will rise again"},{seconds:115,lyrics:"Lost in time, lost in space to the end of all their days"},{seconds:120,lyrics:"See their endless ways insanity, the quest deranged not meant to be"},{seconds:125,lyrics:"In flames will now forever burn eternally"},{seconds:130,lyrics:"So free your heart, leave your life far behind"},{seconds:134,lyrics:"In the cold of winter skies escape the pain inside"},{seconds:140,lyrics:"Now feel your soul lost in seas of all eternity"},{seconds:145,lyrics:"Every day this life defending and the flames of youth not ending"},{seconds:150,lyrics:"In a lifetime searching, we must fight through the eternal pain"},{seconds:176,lyrics:"So alone in a world far away, memories of a dream will remain"},{seconds:180,lyrics:"As the world falling calls and our lives all in vain"},{seconds:185,lyrics:"Fire in my soul will forever rise again"},{seconds:188,lyrics:"Nothing in my mind to remember now"},{seconds:190,lyrics:"Broken by the fear of the dark night calling"},{seconds:192,lyrics:"Ride free on endless seas, the final curtain falls"},{seconds:197,lyrics:"Cut the ground from down below, the time to lock and to load"},{seconds:202,lyrics:"Through the fire, through the rain, far across the distant plains"},{seconds:206,lyrics:"Feel the wind beneath the steel as your mind becomes insane"},{seconds:211,lyrics:"Save the pain from all humanity, that rides throughout our destiny"},{seconds:215,lyrics:"For freedom now we rise for all again"},{seconds:222,lyrics:"So free your heart, leave your life far behind"},{seconds:226,lyrics:"In the cold of winter skies escape the pain inside"},{seconds:231,lyrics:"Now feel your soul lost in seas of all eternity"},{seconds:235,lyrics:"Every day this life defending and the flames of youth not ending"},{seconds:241,lyrics:"In a lifetime searching, we must fight through the eternal pain"},{seconds:349,lyrics:"So free your heart, leave your life far behind"},{seconds:352,lyrics:"In the cold of winter skies escape the pain inside"},{seconds:358,lyrics:"And when the memories are all but left behind"},{seconds:363,lyrics:"And the days have gone forever, lost within my mind"},{seconds:368,lyrics:"Now feel your soul burn in seas of all eternity"},{seconds:372,lyrics:"Every day this life defending and the flames of youth not ending"},{seconds:378,lyrics:"In a lifetime searching, we must fight through the eternal pain"},{seconds:387,lyrics:"We fight through the eternal pain"}],"The Doors - Alabama song.mp3":[{seconds:11,lyrics:"Well, show me the way"},{seconds:13,lyrics:"To the next whisky bar"},{seconds:17,lyrics:"Oh, don't ask why"},{seconds:20,lyrics:"Oh, don't ask why"},{seconds:22,lyrics:"Show me the way"},{seconds:24,lyrics:"To the next whisky bar"},{seconds:28,lyrics:"Oh, don't ask why"},{seconds:31,lyrics:"Oh, don't ask why"},{seconds:34,lyrics:"For if we don't find"},{seconds:36,lyrics:"The next whisky bar"},{seconds:39,lyrics:"I tell you we must die"},{seconds:42,lyrics:"I tell you we must die"},{seconds:44,lyrics:"I tell you, I tell you"},{seconds:47,lyrics:"I tell you we must die"},{seconds:55,lyrics:"Oh, moon of Alabama"},{seconds:60,lyrics:"We now must say goodbye"},{seconds:66,lyrics:"We've lost our good old mama"},{seconds:73,lyrics:"And must have whisky, oh, you know why"},{seconds:81,lyrics:"Oh, moon of Alabama"},{seconds:83,lyrics:"We now must say goodbye"},{seconds:88,lyrics:"We've lost our good old mama"},{seconds:94,lyrics:"And must have whisky, oh, you know why"},{seconds:105,lyrics:"Well, show me the way"},{seconds:107,lyrics:"To the next little girl"},{seconds:111,lyrics:"Oh, don't ask why"},{seconds:114,lyrics:"Oh, don't ask why"},{seconds:116,lyrics:"Show me the way"},{seconds:118,lyrics:"To the next little girl"},{seconds:122,lyrics:"Oh, don't ask why"},{seconds:124,lyrics:"Oh, don't ask why"},{seconds:128,lyrics:"For if we don't find"},{seconds:130,lyrics:"The next little girl"},{seconds:133,lyrics:"I tell you we must die"},{seconds:135,lyrics:"I tell you we must die"},{seconds:138,lyrics:"I tell you, I tell you"},{seconds:141,lyrics:"I tell you we must die"},{seconds:171,lyrics:"Oh, moon of Alabama"},{seconds:175,lyrics:"We now must say goodbye"},{seconds:181,lyrics:"We've lost our good old mama"},{seconds:188,lyrics:"And must have whisky, oh, you know why"}],"P.O.D. - Youth of the Nation.mp3":[{seconds:33,lyrics:"Last day of the rest of my life"},{seconds:35,lyrics:"I wish I would've known"},{seconds:36,lyrics:"'Cause I didn't kiss my mama goodbye"},{seconds:37,lyrics:"I didn't tell her that I loved her and how much I care"},{seconds:39,lyrics:"Or thank my pops for all the talks"},{seconds:41,lyrics:"And all the wisdom he shared"},{seconds:42,lyrics:"Unaware, I just did what I always do"},{seconds:44,lyrics:"Everyday, the same routine"},{seconds:45,lyrics:"Before I skate off to school"},{seconds:47,lyrics:"But who knew that this day wasn't like the rest"},{seconds:49,lyrics:"Instead of taking a test"},{seconds:50,lyrics:"I took two to the chest"},{seconds:53,lyrics:"Call me blind, but I didn't see it coming"},{seconds:54,lyrics:"Everybody was running"},{seconds:55,lyrics:"But I couldn't hear nothing"},{seconds:57,lyrics:"Except gun blasts, it happened so fast"},{seconds:59,lyrics:"I don't really know this kid"},{seconds:60,lyrics:"Even though I sit by him in class"},{seconds:62,lyrics:"Maybe this kid was reaching out for love"},{seconds:64,lyrics:"Or maybe for a moment"},{seconds:65,lyrics:"He forgot who he was"},{seconds:67,lyrics:"Or maybe this kid just wanted to be hugged"},{seconds:69,lyrics:"Whatever it was"},{seconds:70,lyrics:"I know it's because"},{seconds:72,lyrics:"Chorus"},{seconds:73,lyrics:"We are, We are, the youth of the nation"},{seconds:77,lyrics:"We are, We are, the youth of the nation"},{seconds:82,lyrics:"We are, We are, the youth of the nation"},{seconds:87,lyrics:"We are, We are, the youth of the nation"},{seconds:92,lyrics:"Little Suzy, she was only twelve"},{seconds:93,lyrics:"She was given the world"},{seconds:94,lyrics:"With every chance to excel"},{seconds:96,lyrics:"Hang with the boys and hear the stories they tell"},{seconds:98,lyrics:"She might act kind of proud"},{seconds:100,lyrics:"But no respect for herself"},{seconds:101,lyrics:"She finds love in all the wrong places"},{seconds:103,lyrics:"The same situations"},{seconds:104,lyrics:"Just different faces"},{seconds:106,lyrics:"Changed up her pace since her daddy left her"},{seconds:108,lyrics:"Too bad he never told her"},{seconds:110,lyrics:"She deserved much better"},{seconds:111,lyrics:"Johnny boy always played the fool"},{seconds:113,lyrics:"He broke all the rules"},{seconds:114,lyrics:"So you would think he was cool"},{seconds:116,lyrics:"He was never really one of the guys"},{seconds:118,lyrics:"No matter how hard he tried"},{seconds:119,lyrics:"Often thought of suicide"},{seconds:121,lyrics:"It's kind of hard when you ain't got no friends"},{seconds:123,lyrics:"He put his life to an end"},{seconds:124,lyrics:"They might remember him then"},{seconds:126,lyrics:"You cross the line and there's no turning back"},{seconds:128,lyrics:"Told the world how he felt"},{seconds:129,lyrics:"With the sound of a gat"},{seconds:131,lyrics:"We are, We are, the youth of the nation"},{seconds:136,lyrics:"We are, We are, the youth of the nation"},{seconds:141,lyrics:"We are, We are, the youth of the nation"},{seconds:146,lyrics:"We are, We are, the youth of the nation"},{seconds:170,lyrics:"Who's to blame for the lives that tragedies claim"},{seconds:172,lyrics:"No matter what you say"},{seconds:173,lyrics:"It don't take away the pain"},{seconds:175,lyrics:"That I feel inside, I'm tired of all the lies"},{seconds:177,lyrics:"Don't nobody know why"},{seconds:178,lyrics:"It's the blind leading the blind"},{seconds:180,lyrics:"I guess that's the way the story goes"},{seconds:181,lyrics:"Will it ever make sense"},{seconds:183,lyrics:"Somebody's got to know"},{seconds:185,lyrics:"There's got to be more to life than this"},{seconds:186,lyrics:"There's got to be more to everything"},{seconds:188,lyrics:"I thought exists"},{seconds:190,lyrics:"We are, We are, the youth of the nation"},{seconds:195,lyrics:"We are, We are, the youth of the nation"},{seconds:199,lyrics:"We are, We are"},{seconds:201,lyrics:"We are, We are the youth of the nation"},{seconds:205,lyrics:"We are, We are"},{seconds:206,lyrics:"We are, We are the youth of the nation"},{seconds:210,lyrics:"We are, We are"},{seconds:211,lyrics:"We are, We are the youth of the nation"},{seconds:214,lyrics:"We are, We are"},{seconds:215,lyrics:"We are, We are the youth of the nation"},{seconds:219,lyrics:"We are, We are"},{seconds:221,lyrics:"We are, We are the youth of the nation"},{seconds:225,lyrics:"We are, We are"},{seconds:226,lyrics:"We are, We are the youth of the nation"},{seconds:231,lyrics:"We are the youth of the nation"},{seconds:235,lyrics:"We are the youth of the nation"},{seconds:240,lyrics:"We are the youth of the nation"},{seconds:245,lyrics:"We are"}],"The Faceless - Shake The Disease.mp3":[{seconds:47,lyrics:"I'm not going down on my knees"},{seconds:50,lyrics:"Begging you to adore me"},{seconds:56,lyrics:"Can't you see it's misery"},{seconds:59,lyrics:"And torture for me"},{seconds:65,lyrics:"When I'm misunderstood"},{seconds:69,lyrics:"Try as hard as you can I've tried as hard as I could"},{seconds:73,lyrics:"To make you see"},{seconds:77,lyrics:"How important it is for me"},{seconds:82,lyrics:"Here is a plea"},{seconds:84,lyrics:"From my heart to you"},{seconds:86,lyrics:"Nobody knows me"},{seconds:88,lyrics:"As well as you do"},{seconds:90,lyrics:"You know how hard it is for me"},{seconds:93,lyrics:"To shake the disease"},{seconds:95,lyrics:"That takes hold of my tongue"},{seconds:97,lyrics:"In situations like these"},{seconds:105,lyrics:"Understand me"},{seconds:109,lyrics:"Understand me"},{seconds:114,lyrics:"Understand me"},{seconds:118,lyrics:"Understand me"},{seconds:137,lyrics:"Some people have to be"},{seconds:140,lyrics:"Permanently together"},{seconds:147,lyrics:"Lovers devoted to"},{seconds:149,lyrics:"Each other forever"},{seconds:154,lyrics:"Now I've got things to do"},{seconds:159,lyrics:"And I've said before that I know you have too"},{seconds:163,lyrics:"When I'm not there"},{seconds:166,lyrics:"In spirit I'll be there"},{seconds:171,lyrics:"Here is a plea"},{seconds:173,lyrics:"From my heart to you"},{seconds:175,lyrics:"Nobody knows me"},{seconds:177,lyrics:"As well as you do"},{seconds:180,lyrics:"You know how hard it is for me"},{seconds:182,lyrics:"To shake the disease"},{seconds:185,lyrics:"That takes hold of my tongue"},{seconds:187,lyrics:"In situations like these"},{seconds:194,lyrics:"Understand me"},{seconds:199,lyrics:"Understand me"},{seconds:203,lyrics:"Understand me"},{seconds:208,lyrics:"Understand me"},{seconds:235,lyrics:"When I'm misunderstood"},{seconds:239,lyrics:"Try as hard as you can I've tried as hard as I could"},{seconds:243,lyrics:"To make you see"},{seconds:247,lyrics:"How important it is for me"},{seconds:252,lyrics:"Here is a plea"},{seconds:254,lyrics:"From my heart to you"},{seconds:256,lyrics:"Nobody knows me"},{seconds:258,lyrics:"As well as you do"},{seconds:260,lyrics:"You know how hard it is for me"},{seconds:263,lyrics:"To shake the disease"},{seconds:265,lyrics:"That takes hold of my tongue"},{seconds:267,lyrics:"In situations like these"},{seconds:270,lyrics:"Here is a plea"},{seconds:271,lyrics:"From my heart to you"},{seconds:273,lyrics:"Nobody knows me"},{seconds:275,lyrics:"As well as you do"},{seconds:277,lyrics:"You know how hard it is for me"},{seconds:280,lyrics:"To shake the disease"},{seconds:283,lyrics:"That takes hold of my tongue"},{seconds:285,lyrics:"In situations like these"}],"Raunchy - Wasteland Discotheque.mp3":[],"In Flames - Clayman.mp3":[],"Cerebral Bore - The Bald Cadaver.mp3":[{seconds:6,lyrics:"You disgust me"},{seconds:15,lyrics:"The bald cadaver she is mine"},{seconds:18,lyrics:"I will lick this rotting cunt"},{seconds:20,lyrics:"False messiah she is legion"},{seconds:23,lyrics:"Time has come to burn them all"},{seconds:29,lyrics:"Maggots infesting her hole"},{seconds:33,lyrics:"Devour her insides"},{seconds:50,lyrics:"They writhe inside your body"},{seconds:53,lyrics:"With glee they eat your organs raw"},{seconds:60,lyrics:"Bow to me ripping entrails severed torso"},{seconds:63,lyrics:"Feel my creed body dead f**k the head"},{seconds:66,lyrics:"You are here to die before me"},{seconds:69,lyrics:"I will consume you f**k you you are dead"},{seconds:113,lyrics:"You are a Marie curie *****"},{seconds:115,lyrics:"Colour of pee big tits racist"},{seconds:121,lyrics:"F**k the skin dome"},{seconds:125,lyrics:"To continue I must sever inches from you"},{seconds:134,lyrics:"Now you see"},{seconds:138,lyrics:"Death has come for you and not for me"},{seconds:141,lyrics:"She is weak at your peak"},{seconds:152,lyrics:"Trim back the bed sheet show me your balding head"},{seconds:158,lyrics:"In comes junkie mom she gets f**ked up"},{seconds:175,lyrics:"You are the vermin of this earth"},{seconds:178,lyrics:"You can't understand it's your time"},{seconds:180,lyrics:"I decimate your bloody corpse"},{seconds:184,lyrics:"Peeling back your skin I ejaculate on your face"},{seconds:195,lyrics:"Lived here died here now you're gone"}],"Raunchy - To the Lighthouse.mp3":[{seconds:41,lyrics:"You have become my ethereal darkness"},{seconds:47,lyrics:"My black highway and my heart split down the middle"},{seconds:52,lyrics:"Why do we keep doing this to ourselves"},{seconds:57,lyrics:"This never bliss, only sounds of hells bells"},{seconds:65,lyrics:"I want to take you away"},{seconds:68,lyrics:"Make you see the beauty in life again"},{seconds:76,lyrics:"To the lighthouse, she sings in the night"},{seconds:80,lyrics:"As we sail through the bay into a new day"},{seconds:85,lyrics:"And there it leads the way"},{seconds:93,lyrics:"For us phallic and proud"},{seconds:95,lyrics:"With it's light scattered all over"},{seconds:103,lyrics:"All over the crowd"},{seconds:122,lyrics:"Through mountains through water to find"},{seconds:127,lyrics:"What could lift us up to see the bliss on the horizon"},{seconds:133,lyrics:"A symbol of hope, a kicked up fire"},{seconds:138,lyrics:"To find tranquility inside the flames"},{seconds:145,lyrics:"I want to take you away"},{seconds:148,lyrics:"Make you see the beauty in life again"},{seconds:156,lyrics:"To the lighthouse, she sings in the night"},{seconds:160,lyrics:"As we sail through the bay into a new day"},{seconds:166,lyrics:"And there it leads the way"},{seconds:173,lyrics:"For us phallic and proud"},{seconds:175,lyrics:"With it's light scattered all over"},{seconds:184,lyrics:"All over the crowd"},{seconds:197,lyrics:"Uh, baby lets take it further down below"},{seconds:203,lyrics:"This rowboat is not for the two of us"},{seconds:208,lyrics:"Were not running on empty heart"},{seconds:218,lyrics:"You're my black sunrise"},{seconds:220,lyrics:"And my heart split down the middle"},{seconds:223,lyrics:"Baby, why do we keep doing this to ourselves"},{seconds:229,lyrics:"You're the sound of hells bells"},{seconds:230,lyrics:"But that's not a bad thing, right"},{seconds:234,lyrics:"Let's take it to the next step, let's do it all night"},{seconds:246,lyrics:"Were the young believers"},{seconds:251,lyrics:"Were nation builders"},{seconds:254,lyrics:"F**king for might"},{seconds:270,lyrics:"I want to take you away"},{seconds:272,lyrics:"Make you see the beauty in life again"},{seconds:280,lyrics:"To the lighthouse, she sings in the night"},{seconds:285,lyrics:"As we sail through the bay into a new day"},{seconds:290,lyrics:"And there it leads the way"},{seconds:298,lyrics:"For us phallic and proud"},{seconds:300,lyrics:"With it's light scattered all over"},{seconds:308,lyrics:"All over the crowd"}],"In Flames - Reflect the Storm.mp3":[{seconds:10,lyrics:"Shot for shot"},{seconds:12,lyrics:"Many bullets penetrate me"},{seconds:14,lyrics:"Embrace me"},{seconds:15,lyrics:"Tell me stories of gold and gods"},{seconds:19,lyrics:"The precision in your voice"},{seconds:21,lyrics:"Pierce the walls that I've built"},{seconds:23,lyrics:"Your eyes reach deep in me"},{seconds:38,lyrics:"Take a chance"},{seconds:40,lyrics:"Better come much bigger than this"},{seconds:42,lyrics:"One dark star"},{seconds:44,lyrics:"Spend another day with me"},{seconds:46,lyrics:"A dead surface that doesn't reflect"},{seconds:48,lyrics:"The storm underneath"},{seconds:51,lyrics:"I'll take the chance"},{seconds:53,lyrics:"Bring me the calm"},{seconds:55,lyrics:"And it leaves nothing"},{seconds:57,lyrics:"Expose the dark side"},{seconds:61,lyrics:"Awakened and emotional"},{seconds:66,lyrics:"Expose the dark side"},{seconds:71,lyrics:"Impossible to tame"},{seconds:77,lyrics:"Away from the light of the sun"},{seconds:82,lyrics:"Away I find what is real in me"},{seconds:92,lyrics:"Throw yourself into the eye of chaos"},{seconds:96,lyrics:"Infiltrate me"},{seconds:98,lyrics:"Sneak out before I awake"},{seconds:101,lyrics:"Take out the trash and burn it"},{seconds:103,lyrics:"Try to find a beautiful place to lay"},{seconds:107,lyrics:"These fragile bones of mine"},{seconds:110,lyrics:"Away from the light of the sun"},{seconds:119,lyrics:"Away I find what is real, "},{seconds:128,lyrics:"Away from the light of the sun"},{seconds:137,lyrics:"Away I find what is real in me"},{seconds:174,lyrics:"And it leaves nothing"},{seconds:177,lyrics:"Expose the dark side"},{seconds:180,lyrics:"Awakened and emotional"},{seconds:185,lyrics:"Expose the dark side"},{seconds:190,lyrics:"Impossible to tame"},{seconds:196,lyrics:"Away from the light of the sun"},{seconds:201,lyrics:"Away I find what is real, "},{seconds:212,lyrics:"Away from the light of the sun"},{seconds:219,lyrics:"Away I find what is real, "},{seconds:227,lyrics:"Away from the light of the sun"},{seconds:237,lyrics:"Away I find what is real in me"}],"Psygnosis - MehMeh.mp3":[],"The Five Stars - Atom Bomb Baby.mp3":[{seconds:0,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara bomb"},{seconds:6,lyrics:"Got a doll baby I love her so"},{seconds:9,lyrics:"Nothing else like her anywhere you go"},{seconds:12,lyrics:"Man she's anything but calm"},{seconds:15,lyrics:"A regular pint-sized atom bomb"},{seconds:18,lyrics:"Atom bomb baby little atom bomb"},{seconds:20,lyrics:"I want her in my wigwam"},{seconds:24,lyrics:"She's just the way I want her to be"},{seconds:26,lyrics:"A million times hotter than TNT"},{seconds:29,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara"},{seconds:35,lyrics:"Atom bomb baby loaded with power"},{seconds:38,lyrics:"Radioactive as a TV tower"},{seconds:41,lyrics:"A nuclear fission in her soul"},{seconds:44,lyrics:"Loves with electronic control"},{seconds:47,lyrics:"Atom bomb baby little atom bomb"},{seconds:50,lyrics:"I want her in my wigwam"},{seconds:53,lyrics:"She's just the way I want her to be"},{seconds:56,lyrics:"A million times hotter than TNT"},{seconds:59,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara"},{seconds:65,lyrics:"Atom bomb baby boy she can start"},{seconds:68,lyrics:"One of those chain reactions in my heart"},{seconds:71,lyrics:"A big explosion big and loud"},{seconds:74,lyrics:"Mushrooms me right up on a cloud"},{seconds:77,lyrics:"Atom bomb baby little atom bomb"},{seconds:80,lyrics:"I want her in my wigwam"},{seconds:82,lyrics:"She's just the way I want her to be"},{seconds:85,lyrics:"A million times hotter than TNT"},{seconds:88,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara"},{seconds:94,lyrics:"Atom bomb ladysh sweet as a plum"},{seconds:97,lyrics:"Carries more whallop than uranium"},{seconds:100,lyrics:"When she kisses there's no hitch"},{seconds:103,lyrics:"Zero power she turns on a switch"},{seconds:107,lyrics:"Atom bomb baby little atom bomb"},{seconds:109,lyrics:"I want her in my wigwam"},{seconds:112,lyrics:"She's just the way I want her to be"},{seconds:115,lyrics:"A million times hotter than TNT"},{seconds:118,lyrics:"Atom bomb baby little atom bomb"},{seconds:121,lyrics:"I want her in my wigwam"},{seconds:124,lyrics:"She's just the way I want her to be"},{seconds:127,lyrics:"A million times hotter than TNT"},{seconds:131,lyrics:"Atom bomb baby little atom bomb"}],"The HAARP Machine - Esoteric Agenda.mp3":[{seconds:30,lyrics:"There were no weapons of mass destruction"},{seconds:34,lyrics:"Mobile biological"},{seconds:37,lyrics:"Weapons labs the agenda was to remove Saddam Hussein"},{seconds:42,lyrics:"To reap the oil and establish a base"},{seconds:47,lyrics:"The Bush administration"},{seconds:49,lyrics:"Made a series of claims prior the Iraqi war abuse"},{seconds:54,lyrics:"And misuse of intelligence"},{seconds:61,lyrics:"There was no collusive"},{seconds:65,lyrics:"Relationship with"},{seconds:67,lyrics:"Al qaeda esoteric agenda"},{seconds:75,lyrics:"Esoteric agenda"},{seconds:106,lyrics:"Open your eyes and see this"},{seconds:111,lyrics:"World is not what it seems free your soul from"},{seconds:118,lyrics:"The ties that bind us all time is upon us"},{seconds:127,lyrics:"To wake up"},{seconds:142,lyrics:"The wars of the world are diversions"},{seconds:148,lyrics:"For the desires of the powers"},{seconds:154,lyrics:"The wars of the world are diversions"},{seconds:160,lyrics:"For the desires of the powers"},{seconds:165,lyrics:"They declare war as"},{seconds:167,lyrics:"The last option even though they always actively block every"},{seconds:172,lyrics:"Other viable policy in the same way the powers make"},{seconds:179,lyrics:"War the only option"},{seconds:183,lyrics:"Actively other viable policy in the same way the powers make"},{seconds:191,lyrics:"War the only option"}],"What Mad Universe - the world of leviathan.mp3":[],"Rise Of The Northstar - The New Path.mp3":[{seconds:34,lyrics:"His name is Raoh demonic Ken'oh"},{seconds:36,lyrics:"Fist of the violent star born in hell yo"},{seconds:38,lyrics:"Fallen heir who should've lost his fist"},{seconds:40,lyrics:"Rejected by his love and treated like a best"},{seconds:43,lyrics:"Evil grew up within him like a new option"},{seconds:45,lyrics:"He took his master's life without asking questions"},{seconds:48,lyrics:"Suffered the nuclear fire"},{seconds:50,lyrics:"He conquers a chaotic world takes the power"},{seconds:62,lyrics:"Rules on this sick world fallen brotherhood"},{seconds:65,lyrics:"Here comes the new lord fist against sword"},{seconds:67,lyrics:"Rules on this sick world fallen brotherhood"},{seconds:69,lyrics:"Here comes the new lord fist against sword"},{seconds:73,lyrics:"Nothing is written in advance"},{seconds:76,lyrics:"Everything changes smash your chance"},{seconds:78,lyrics:"One life one love several fates"},{seconds:80,lyrics:"Open a new path create the gate"},{seconds:83,lyrics:"Nothing is written in advance"},{seconds:85,lyrics:"Everything changes smash your chance"},{seconds:87,lyrics:"One life one love several fates"},{seconds:90,lyrics:"Open a new path create the gate"},{seconds:92,lyrics:"Genocide his life starts badly"},{seconds:95,lyrics:"His weakness saves his life baddack the movie"},{seconds:97,lyrics:"Arrived on earth broke his motherf**king head"},{seconds:99,lyrics:"Booyaka booyaka he could've been brain dead"},{seconds:102,lyrics:"He faced elites never gave up"},{seconds:104,lyrics:"This life could've been a tragedy if he didn't confront"},{seconds:107,lyrics:"His fear his faith his destiny"},{seconds:109,lyrics:"Never forget the sin goku story"},{seconds:112,lyrics:"Nothing is written in advance"},{seconds:114,lyrics:"Everything changes smash your chance"},{seconds:116,lyrics:"One life one love several fates"},{seconds:119,lyrics:"Open a new path create the gate"},{seconds:121,lyrics:"Nothing is written in advance"},{seconds:123,lyrics:"Everything changes smash your chance"},{seconds:126,lyrics:"One life one love several fates"},{seconds:128,lyrics:"Open a new path create the gate"},{seconds:140,lyrics:"One two three four five super yankees"},{seconds:143,lyrics:"Straight from the past straight from the nineties"},{seconds:145,lyrics:"Without any help or any support"},{seconds:147,lyrics:"Against the main vibe and ready to start"},{seconds:150,lyrics:"Get up stand up come on throw your hands up"},{seconds:152,lyrics:"They wanna force the fate and represent some codes"},{seconds:154,lyrics:"Stay true stay straight never forget create your own legacy"},{seconds:158,lyrics:"Never lose the target"},{seconds:198,lyrics:"Nothing is written in advance"},{seconds:200,lyrics:"Everything changes smash your chance"},{seconds:203,lyrics:"One life one love several fates"},{seconds:205,lyrics:"Open a new path create the gate"},{seconds:207,lyrics:"Nothing is written in advance"},{seconds:210,lyrics:"Everything changes smash your chance"},{seconds:212,lyrics:"One life one love several fates"},{seconds:215,lyrics:"Open a new path create the gate"}],"Machine Head - Halo.mp3":[{seconds:81,lyrics:"This is a call to arms"},{seconds:85,lyrics:"Will you stand beside me"},{seconds:94,lyrics:"This is our time to fight"},{seconds:98,lyrics:"No more compromising"},{seconds:101,lyrics:"And this blackened heart will sing"},{seconds:107,lyrics:"For sad solidarity"},{seconds:113,lyrics:"Halo over our demise"},{seconds:118,lyrics:"Following a god so blind"},{seconds:125,lyrics:"Shallow in their sickening"},{seconds:131,lyrics:"Swallow not the sh*t they feed"},{seconds:152,lyrics:"This is a right to life"},{seconds:156,lyrics:"Not the religious right's act"},{seconds:166,lyrics:"This is abortion's knife"},{seconds:169,lyrics:"Aiming at the womb of"},{seconds:172,lyrics:"The christian conspiracy"},{seconds:178,lyrics:"So open thine eyes and see the"},{seconds:187,lyrics:"Halo over our demise"},{seconds:193,lyrics:"Following a god so blind"},{seconds:199,lyrics:"Shallow in their sickening"},{seconds:205,lyrics:"Swallow not the sh*t they feed"},{seconds:253,lyrics:"Our time will come our time will come"},{seconds:275,lyrics:"Our time is now our time is now"},{seconds:408,lyrics:"And I won't pray for you"},{seconds:415,lyrics:"And I won't pray for you"},{seconds:422,lyrics:"And I won't pray for you"},{seconds:437,lyrics:"Halo"},{seconds:443,lyrics:"Follow"},{seconds:450,lyrics:"Shallow"},{seconds:456,lyrics:"Swallow"},{seconds:463,lyrics:"Halo over our demise"},{seconds:469,lyrics:"Following a god so blind"},{seconds:475,lyrics:"Shallow in their sickening"},{seconds:481,lyrics:"Swallow not the sh*t they feed"},{seconds:493,lyrics:"Sh*t they feed"},{seconds:498,lyrics:"Your words will never hold us down"},{seconds:501,lyrics:"Prayers won't be spared on you"},{seconds:504,lyrics:"Satisfaction denied"},{seconds:507,lyrics:"'Till you're dead and gone"},{seconds:513,lyrics:"Gone"},{seconds:515,lyrics:"Dead and gone"},{seconds:519,lyrics:"You're gone"},{seconds:522,lyrics:"You're gone"}],"zYnthetic - SSplug.mp3":[],"Anaal Nathrakh - Between Shit and Piss We Are Born.mp3":[],"Anaal Nathrakh - In The Constellation Of The Black Widow.mp3":[],"Angel Vivaldi - A Martian Winter.mp3":[],"Angel Vivaldi - An Erisian Autumn.mp3":[],"Aspirin Rose - Fucking Perfect (Pink cover).mp3":[],"August Burns Red - A Shot Below The Belt.mp3":[],"August Burns Red - Your Little Suburbia Is in Ruins.mp3":[],"Between the Buried and Me - All Bodies.mp3":[],"Between The Buried And Me - Swim To The Moon.mp3":[],"Breakwater - Eleven.mp3":[],"Breakwater - five.mp3":[],"Cosmonauts Day - The Captain.mp3":[],"Death In Vegas - Dirge.mp3":[],"If These Trees Could Talk - From Roots to Needles.mp3":[],"Killing Floor - Abandon All.mp3":[],"Long Distance Calling - Black Paper Planes.mp3":[],"Ozoi The Maid - Unfortunately.mp3":[],"Ozoi The Maid Yakui The Maid - Lanterns.mp3":[],"Ozoi The Maid Yakui The Maid - Wonderland.mp3":[],"Ozoi The Maid Yakui The Maid - Frontier.mp3":[],"Psygnosis - FIIIX 2.0.mp3":[],"Psygnosis - Lost in Oblivion.mp3":[],"Psygnosis - Phrase 7.mp3":[],"Psygnosis - Synaptic Plasticity.mp3":[],"Psygnosis - The Judgement.mp3":[],"Raunchy - Twelve Feet Tall.mp3":[],"Rhapsody - The Mighty Ride of the Firelord.mp3":[],"Rhapsody of Fire - Wisdom of the Kings.mp3":[],"Rise Of The Northstar - What The Fuck.mp3":[],"Siberian Meat Grinder feat Distemper - Пламя в Груди.mp3":[],"Toundra - Bizancio Byzantium.mp3":[],"URO & .corridoiokraut. - Nappi.mp3":[],"What Mad Universe - Colossus.mp3":[],"What Mad Universe - head of column.mp3":[],"What Mad Universe - mythical sacred firebird.mp3":[],"What Mad Universe - Nebula My Love.mp3":[],"What Mad Universe - Starborne.mp3":[],"Within The Ruins - Ataxia II.mp3":[],"Within The Ruins - Beautiful Agony.mp3":[],"zYnthetic - Abandon All v3.mp3":[],"Between The Buried And Me - White Walls.mp3":[{seconds:80,lyrics:"The monsters are made "},{seconds:95,lyrics:"And we have proven that we will be one of them "},{seconds:116,lyrics:"The w***es take the stage flash our skills "},{seconds:129,lyrics:"Gotta draw em in gotta keep em on their toes "},{seconds:142,lyrics:"Don't show them how you truly are "},{seconds:149,lyrics:"Who would want honesty "},{seconds:163,lyrics:"Who would want a group of people that one can relate with "},{seconds:185,lyrics:"We need worship we need devotion "},{seconds:208,lyrics:"Becoming gods from the image that is thrown "},{seconds:226,lyrics:"Thrown out in their everyday lives to comfort "},{seconds:246,lyrics:"Its not a musical journey anymore "},{seconds:261,lyrics:"They chose Camilla and we stood by her the entire time "},{seconds:275,lyrics:"Monotonous expression a forced replica of a tired sound "},{seconds:289,lyrics:"Puppets for a greed-driven carnival "},{seconds:296,lyrics:"The same charade as the passing years "},{seconds:306,lyrics:"Force me out there "},{seconds:352,lyrics:"Don't give them a chance "},{seconds:355,lyrics:"They want to be fed fed a simple replication of past greatness "},{seconds:369,lyrics:"Things have changed we have changed "},{seconds:373,lyrics:"Personal happiness is what we strive to achieve "},{seconds:392,lyrics:"So you can love or hate it won't change a thing for us "},{seconds:443,lyrics:"Step back "},{seconds:462,lyrics:"Evaluate "},{seconds:468,lyrics:"Recognize "},{seconds:478,lyrics:"We just need to throw some new ideas in "},{seconds:497,lyrics:"It "},{seconds:525,lyrics:"Will eventually get out of this closed off circle we are part of "},{seconds:550,lyrics:"Its all the same "},{seconds:558,lyrics:"This is all we have when we die "},{seconds:600,lyrics:"Its whats left of us when we die "},{seconds:629,lyrics:"We will be remembered for this "},{seconds:643,lyrics:"White wall"}],"Raunchy - The Yeah Thing.mp3":[{seconds:27,lyrics:"Yeah"},{seconds:35,lyrics:"Here we go again"},{seconds:67,lyrics:"You got a killer sound there said the devil"},{seconds:71,lyrics:"So what did I say to him"},{seconds:73,lyrics:"Yeah you're right *****"},{seconds:75,lyrics:"And then we continued"},{seconds:78,lyrics:"Now this one is for you"},{seconds:80,lyrics:"F**k yeah it's on all the girls keep on dancing"},{seconds:85,lyrics:"We're ready to give them everything"},{seconds:90,lyrics:"There's no clarity but I can feel the music"},{seconds:97,lyrics:"I said before and I'll say it again"},{seconds:100,lyrics:"We're nothing without all our demons"},{seconds:103,lyrics:"This kind of devil music is the yeah thing"},{seconds:108,lyrics:"I said before and I'll say it again"},{seconds:110,lyrics:"We'll be here no matter what my friend"},{seconds:113,lyrics:"We are everything you'll ever need"},{seconds:117,lyrics:"Just bite the hand that feeds"},{seconds:120,lyrics:"Bring out your romance"},{seconds:124,lyrics:"Just sing for your halo"},{seconds:129,lyrics:"Bring out your feelings"},{seconds:134,lyrics:"And let all your love go"},{seconds:140,lyrics:"Bring out your romance"},{seconds:144,lyrics:"Just sing for your halo"},{seconds:149,lyrics:"Bring out your feelings"},{seconds:154,lyrics:"And let all your love go"},{seconds:186,lyrics:"Hell yeah"},{seconds:188,lyrics:"Walk away"},{seconds:189,lyrics:"Hell yeah"},{seconds:190,lyrics:"Walk away"},{seconds:191,lyrics:"Hell yeah"},{seconds:192,lyrics:"Walk away"},{seconds:194,lyrics:"Hell yeah"},{seconds:195,lyrics:"Walk away"},{seconds:198,lyrics:"And the devil just laughed and walked away"},{seconds:204,lyrics:"Just laughed and walked away"},{seconds:209,lyrics:"And the devil just laughed and walked away"},{seconds:214,lyrics:"Just laughed and walked away"},{seconds:217,lyrics:"Where the light is"},{seconds:220,lyrics:"There is darkness"},{seconds:222,lyrics:"Contradictions and all your temple"},{seconds:227,lyrics:"This is feeling and I don't know"},{seconds:230,lyrics:"How it gets that way"},{seconds:233,lyrics:"But it's on it's on and you f**king love it"},{seconds:238,lyrics:"And the devil just laughed and walked away"},{seconds:241,lyrics:"Bring out your romance"},{seconds:245,lyrics:"Just sing for your halo"},{seconds:251,lyrics:"Bring out your feelings"},{seconds:256,lyrics:"And let all your love go"},{seconds:261,lyrics:"Bring out your romance"},{seconds:265,lyrics:"Just sing for your halo"},{seconds:271,lyrics:"Bring out your feelings"},{seconds:276,lyrics:"And let all your love go"}],"Sunlight Ascending - (Winter) Diorama Dream.mp3":[],"Sum 41 - Still Waiting.mp3":[{seconds:0,lyrics:"So am I still waiting"},{seconds:3,lyrics:"For this world to stop hating"},{seconds:5,lyrics:"Can't find a good reason"},{seconds:8,lyrics:"Can't find hope to believe in"},{seconds:22,lyrics:"Drop dead a bullet to my head"},{seconds:24,lyrics:"Your words are like a gun in hand"},{seconds:27,lyrics:"You can't change the state of the nation"},{seconds:29,lyrics:"We just need some motivation"},{seconds:32,lyrics:"Three times I see no conviction"},{seconds:34,lyrics:"Just lies and more contradiction"},{seconds:37,lyrics:"So tell me what would you say"},{seconds:39,lyrics:"I'd say it's time to listen"},{seconds:43,lyrics:"So am I still waiting"},{seconds:45,lyrics:"For this world to stop hating"},{seconds:48,lyrics:"Can't find a good reason"},{seconds:50,lyrics:"Can't find hope to believe in"},{seconds:58,lyrics:"Ignorance and understanding"},{seconds:60,lyrics:"We're the first ones to jump in line"},{seconds:63,lyrics:"Out of step for what we believe in"},{seconds:65,lyrics:"But whos left to start the pleading"},{seconds:68,lyrics:"How far will we take this"},{seconds:70,lyrics:"It's not hard to see through the sickness"},{seconds:73,lyrics:"So tell me what would you say"},{seconds:75,lyrics:"I'd say it's time to listen"},{seconds:79,lyrics:"So am I still waiting"},{seconds:82,lyrics:"For this world to stop hating"},{seconds:84,lyrics:"Can't find a good reason"},{seconds:87,lyrics:"Can't find hope to believe in"},{seconds:89,lyrics:"This can't last forever"},{seconds:94,lyrics:"Time won't make things better"},{seconds:99,lyrics:"I feel so alone"},{seconds:102,lyrics:"Can't help myself"},{seconds:105,lyrics:"And no one knows"},{seconds:107,lyrics:"If this is worthless"},{seconds:108,lyrics:"Tell me so"},{seconds:124,lyrics:"What have we done"},{seconds:127,lyrics:"We're in a war that can't be won"},{seconds:129,lyrics:"This can't be real"},{seconds:132,lyrics:"I don't know what to feel"},{seconds:135,lyrics:"So am I still waiting"},{seconds:138,lyrics:"For this world to stop hating"},{seconds:140,lyrics:"Can't find a good reason"},{seconds:143,lyrics:"Can't find hope to believe in"},{seconds:145,lyrics:"So am I still waiting"},{seconds:148,lyrics:"For this world to stop hating"},{seconds:150,lyrics:"Can't find a good reason"},{seconds:153,lyrics:"Can't find hope to believe in"}],"Between The Buried And Me - Obfuscation.mp3":[],"BATUSHKA - Yekteniya 4.mp3":[],"In Flames - Trigger.mp3":[{seconds:22,lyrics:"Have we lost the spark or a guide "},{seconds:24,lyrics:"What's the latest on the screen "},{seconds:27,lyrics:"Can't be too late to turn around"},{seconds:29,lyrics:"I need all the help from you"},{seconds:36,lyrics:"I need to find"},{seconds:40,lyrics:"Something to blame for a long lost time"},{seconds:43,lyrics:"I am running from something that I don't know"},{seconds:49,lyrics:"I am searching for something, which way to go "},{seconds:57,lyrics:"I am trying to separate what's real"},{seconds:61,lyrics:"I'm running in a wheel"},{seconds:66,lyrics:"Is it dark or is it bright "},{seconds:68,lyrics:"What's the latest on the screen "},{seconds:71,lyrics:"Please tell me my name"},{seconds:79,lyrics:"I haven't checked it today"},{seconds:86,lyrics:"I am running from something that I don't know"},{seconds:91,lyrics:"I am searching for something, which way to go "},{seconds:96,lyrics:"I am trying to separate what's real"},{seconds:100,lyrics:"I'm running in a wheel"},{seconds:106,lyrics:"From green to red our days pass by"},{seconds:109,lyrics:"Waiting for a sign to tell us why"},{seconds:111,lyrics:"Are we dancing all alone "},{seconds:115,lyrics:"Collect some stars to shine for you"},{seconds:120,lyrics:"And start today 'cause there's only a few"},{seconds:122,lyrics:"A sign of times my friend"},{seconds:128,lyrics:"My friend avoid infinity"},{seconds:131,lyrics:"Are you for real "},{seconds:138,lyrics:"Just scratch the surface"},{seconds:140,lyrics:"And you will find"},{seconds:143,lyrics:"Something to blame for a long lost time"},{seconds:148,lyrics:"From green to red our days pass by"},{seconds:150,lyrics:"Waiting for a sign to tell us why"},{seconds:153,lyrics:"Are we dancing all alone "},{seconds:158,lyrics:"Collect some stars to shine for you"},{seconds:161,lyrics:"And start today 'cause there's only a few"},{seconds:164,lyrics:"A sign of times my friend"},{seconds:167,lyrics:"Just scratch the surface"},{seconds:203,lyrics:"And you will find"},{seconds:205,lyrics:"Something to blame for a long lost time"},{seconds:212,lyrics:"From green to red our days pass by"},{seconds:215,lyrics:"Waiting for a sign to tell us why"},{seconds:218,lyrics:"Are we dancing all alone "},{seconds:224,lyrics:"Collect some stars to shine for you"},{seconds:226,lyrics:"And start today 'cause there's only a few"},{seconds:229,lyrics:"A sign of times my friend"},{seconds:232,lyrics:"From green to red our days pass by"},{seconds:236,lyrics:"Waiting for a sign to tell us why"},{seconds:239,lyrics:"Are we dancing all alone "},{seconds:242,lyrics:"Collect some stars to shine for you"},{seconds:247,lyrics:"And start today 'cause there's only a few"},{seconds:255,lyrics:"From green to red our days pass by"},{seconds:257,lyrics:"Waiting for a sign to tell us why"},{seconds:259,lyrics:"Collect some stars to shine for you"},{seconds:267,lyrics:"And start today 'cause there's only a few"}],"Raunchy - Live The Myth.mp3":[{seconds:67,lyrics:"I've been avoiding the light"},{seconds:69,lyrics:"I join the myth"},{seconds:71,lyrics:"I need to realize what I've missed"},{seconds:76,lyrics:"I crawl through shadows through space and time"},{seconds:81,lyrics:"And now I sense you at the end of the line"},{seconds:89,lyrics:"At the end of the night"},{seconds:94,lyrics:"Hold the line"},{seconds:98,lyrics:"As they transcend"},{seconds:103,lyrics:"The bringer of light"},{seconds:105,lyrics:"I caught a glimpse of you"},{seconds:108,lyrics:"Between the moment and the dead"},{seconds:114,lyrics:"Now I remember you still here"},{seconds:118,lyrics:"The stories in my head"},{seconds:133,lyrics:"This ride accelerates I live the myth"},{seconds:138,lyrics:"I celebrate the darkness of what I've kissed"},{seconds:143,lyrics:"I crawl through clouds the shadows for us"},{seconds:148,lyrics:"Then you start pleading with my heart"},{seconds:160,lyrics:"Hold the line"},{seconds:165,lyrics:"As they transcend"},{seconds:169,lyrics:"The bringer of light"},{seconds:171,lyrics:"I caught a glimpse of you"},{seconds:174,lyrics:"Between the moment and the dead"},{seconds:181,lyrics:"Now I remember you still here"},{seconds:185,lyrics:"The stories in my head"},{seconds:219,lyrics:"These words of flames"},{seconds:221,lyrics:"In my white shade serenade"},{seconds:224,lyrics:"I still remain"},{seconds:229,lyrics:"The meaning in shadows"},{seconds:231,lyrics:"The place I choose to live"},{seconds:233,lyrics:"Is in a dream forever"},{seconds:238,lyrics:"These words of flames"},{seconds:240,lyrics:"In my white shade serenade"},{seconds:242,lyrics:"I still remain I still remain"},{seconds:248,lyrics:"The meaning in shadows"},{seconds:250,lyrics:"The place I choose to live"},{seconds:252,lyrics:"Is life forever"},{seconds:257,lyrics:"As darkness falls the shadows for us"},{seconds:262,lyrics:"Between the moment and the dead"},{seconds:268,lyrics:"As I wake up I can hear the echoes"},{seconds:273,lyrics:"Teh laughter from the living dead"},{seconds:278,lyrics:"As darkness falls the shadows for us"},{seconds:283,lyrics:"Between the moment and the dead"},{seconds:286,lyrics:"I still remain remain remain"},{seconds:291,lyrics:"I caught a glimpse of you"},{seconds:294,lyrics:"Between the moment and the dead"},{seconds:301,lyrics:"Now I remember you still here"},{seconds:305,lyrics:"The stories in my head"},{seconds:310,lyrics:"I caught a glimpse of you"},{seconds:313,lyrics:"Between the moment and the dead"},{seconds:320,lyrics:"Now I remember you still here"},{seconds:324,lyrics:"The stories in my head"}]},L0=c1({name:"MainComponent",components:{TrackList:th,PageTabs:mh,MainInfoBand:xh,VolumeControl:Fh,ProgressControl:Eh,MainControl:Xh,OtherControl:od,SongText:pd},setup(){const{bestParties:c,nextTrack:e,previousTrack:a,pathToCurrentFile:s,currentTrackIndex:n,changeTab:r,selectTrack:i,tabSelected:o,currentTracks:t,currentSong:l,currentTracksList:h,favoriteSongs:d,handleAddFavoriteSongBtn:u}=w0();R3(async()=>{w();const Y=[["play",()=>{d2(),navigator.mediaSession.playbackState="playing"}],["pause",()=>{d2(),navigator.mediaSession.playbackState="paused"}],["nexttrack",()=>{e()}],["previoustrack",()=>{a()}],["seekto",H2=>{console.log(H2),g.value.currentTime=H2.seekTime}]];for(const[H2,f]of Y)try{navigator.mediaSession.setActionHandler(H2,f)}catch{console.log(`The media session action "${H2}" is not supported yet.`)}});const p=f2(!1);function w(){const Y=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches||localStorage.getItem("dark-color-scheme")&&JSON.parse(localStorage.getItem("dark-color-scheme"))?"dark":"light";p.value=Y==="dark",k()}M1(p,()=>{k()});function k(){document.documentElement.style.setProperty("color-scheme",p.value?"dark":"light"),localStorage.setItem("dark-color-scheme",JSON.stringify(p.value))}function O(){p.value=!p.value}const g=f2(null),V=f2(0),F=f2(.8);function x(Y){o2(Y),q.value&&A()}function E(){U1.value?g.value.currentTime=0:e()}function c2(Y){g.value.currentTime=Y,q.value=!0,A()}function Z(Y){V.value=Y.target.currentTime,navigator.mediaSession.setPositionState({duration:D.value,playbackRate:1,position:V.value})}function R(Y){F.value=Y.target.volume}function L(Y){g.value.volume=Y}const D=f2(0);function o2(Y){const H2=Y.target;D.value=H2.duration,navigator.mediaSession.setPositionState({duration:D.value,playbackRate:1,position:0})}function A(){try{g.value.play().then(Y=>Y)}catch(Y){console.log("error",Y)}}const q=f2(!1);function d2(){q.value=!q.value,q.value?A():g.value.pause()}const f1=f2(!1);async function m2(Y){for(let H2=0;H2<c.value.length;H2++){const f=c.value[H2];if(Y<=f.start&&!f1.value){console.log("start"),g.value.currentTime=f.start;return}else if(Y>=f.start&&Y<=f.end){console.log("continue"),Y>=f.end-3&&Y<=f.end-2&&!f1.value&&console.log("end");return}}console.log("nextTrack"),E()}F3(async()=>{o.value===4&&q.value&&n&&await m2(V.value)});const a2=f2("500px");D3(()=>{const Y=document.querySelector(".main_control_ref"),H2=document.querySelector(".container"),f=Y.getBoundingClientRect(),m=H2==null?void 0:H2.getBoundingClientRect();a2.value=`${Math.abs(f.top-m.top)+25}px`,g.value.volume=.8,document.addEventListener("keydown",h1)});function J(){g.value.currentTime<=20||o.value===4?a():g.value.currentTime=0}const I2=f2(!1);function $1(){I2.value=!I2.value}const F2=f2(!1);function B2(){F2.value=!F2.value}function O4(){I2.value=!1,F2.value=!1}function f6(Y){i(Y),q.value=!0,A()}const U1=f2(!1);function D2(){U1.value=!U1.value}const q1=G(()=>Hd[l.value.songName]||""),E4=G(()=>zd[l.value.songName]||[]),h1=Y=>{switch(Y.key){case" ":d2();break;case"ArrowRight":e();break;case"ArrowLeft":J();break;case"ArrowUp":g.value.volume<=.9&&L(g.value.volume+.1);break;case"ArrowDown":g.value.volume>=.1&&L(g.value.volume-.1);break}};return{audioPlayer:g,isPlaying:q,currentTime:V,volume:F,onVolumeUpdate:R,totalTime:D,pathToCurrentFile:s,currentTracks:t,currentTrackIndex:n,currentTracksList:h,currentSong:l,handlerCanPlay:x,handlerEnded:E,handlerTimeChange:c2,onTimeUpdate:Z,setVolume:L,togglePlayPause:d2,nextTrack:e,previousTrackHandler:J,handlerShowListBtn:$1,handlerSelectTrack:f6,tabSelected:o,changeTab:r,isShowTrackList:I2,repeatModeChange:D2,isRepeatMode:U1,bestParties:c,isDarkTheme:p,handlerChangeThemeBtn:O,handlerShowSongTextBtn:B2,handleAddFavoriteSongBtn:u,isShowSongText:F2,closeAllBars:O4,currentSongText:q1,currentSongTextWithTimecodes:E4,distanceBetweenComponents:a2,favoriteSongs:d}}}),b5=()=>{Wf(c=>({f3d51796:c.distanceBetweenComponents}))},w5=L0.setup;L0.setup=w5?(c,e)=>(b5(),w5(c,e)):b5;const gd={class:"container"},yd=["src"];function Vd(c,e,a,s,n,r){const i=m1("TrackList"),o=m1("SongText"),t=m1("PageTabs"),l=m1("MainInfoBand"),h=m1("VolumeControl"),d=m1("ProgressControl"),u=m1("MainControl"),p=m1("OtherControl");return h2(),v2("main",{class:A2([c.isDarkTheme?"dark":"light"]),onClick:e[6]||(e[6]=z2((...w)=>c.closeAllBars&&c.closeAllBars(...w),["stop"]))},[$("div",gd,[t2(g3,{name:"slide-track-list"},{default:T6(()=>[p3(t2(i,{"current-track-index":c.currentTrackIndex,"current-tracks":c.currentTracksList,class:"top_bar",onSelectTrackFromList:c.handlerSelectTrack},null,8,["current-track-index","current-tracks","onSelectTrackFromList"]),[[y3,c.isShowTrackList]])]),_:1}),t2(g3,{name:"slide-song-text"},{default:T6(()=>[p3(t2(o,{"current-time":c.currentTime,"song-text":c.currentSongText,"song-text-with-timecodes":c.currentSongTextWithTimecodes,class:"top_bar",onTimeChange:c.handlerTimeChange},null,8,["current-time","song-text","song-text-with-timecodes","onTimeChange"]),[[y3,c.isShowSongText&&(c.currentSongText.length||c.currentSongTextWithTimecodes.length)]])]),_:1}),t2(t,{"tab-selected":c.tabSelected,onChangeTab:c.changeTab},null,8,["tab-selected","onChangeTab"]),t2(l,{"song-name":c.currentSong.songName,"has-text":!!c.currentSongText.length||!!c.currentSongTextWithTimecodes.length,"is-favorite-song":c.favoriteSongs.includes(c.currentSong.songName),onShowTextSong:c.handlerShowSongTextBtn,onAddFavorite:c.handleAddFavoriteSongBtn},null,8,["song-name","has-text","is-favorite-song","onShowTextSong","onAddFavorite"]),t2(h,{ref:"main_control_ref",class:"main_control_ref",volume:c.volume,onClick:e[0]||(e[0]=z2(()=>{},["stop"])),onVolumeChange:c.setVolume},null,8,["volume","onVolumeChange"]),t2(d,{"best-parties":c.bestParties,"current-time":c.currentTime,"total-time":c.totalTime,onClick:e[1]||(e[1]=z2(()=>{},["stop"])),onTimeChange:c.handlerTimeChange},null,8,["best-parties","current-time","total-time","onTimeChange"]),t2(u,{"is-playing":c.isPlaying,onPrevious:c.previousTrackHandler,onNext:c.nextTrack,onPlayPause:c.togglePlayPause},null,8,["is-playing","onPrevious","onNext","onPlayPause"]),t2(p,{"current-numb-song":c.currentTrackIndex+1,"is-show-track-list":c.isShowTrackList,"is-repeat-mode":c.isRepeatMode,"is-dark-theme":c.isDarkTheme,onRepeatModeClick:c.repeatModeChange,onShowListClick:c.handlerShowListBtn,onChangeTheme:c.handlerChangeThemeBtn},null,8,["current-numb-song","is-show-track-list","is-repeat-mode","is-dark-theme","onRepeatModeClick","onShowListClick","onChangeTheme"]),$("audio",{ref:"audioPlayer",src:c.pathToCurrentFile,preload:"metadata",onVolumechange:e[2]||(e[2]=(...w)=>c.onVolumeUpdate&&c.onVolumeUpdate(...w)),onTimeupdate:e[3]||(e[3]=(...w)=>c.onTimeUpdate&&c.onTimeUpdate(...w)),onCanplay:e[4]||(e[4]=(...w)=>c.handlerCanPlay&&c.handlerCanPlay(...w)),onEnded:e[5]||(e[5]=(...w)=>c.handlerEnded&&c.handlerEnded(...w))},null,40,yd)])],2)}const Md=t1(L0,[["render",Vd]]);function L5(c,e){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);e&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable})),a.push.apply(a,s)}return a}function S(c){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?L5(Object(a),!0).forEach(function(s){y2(c,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):L5(Object(a)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(a,s))})}return c}function V3(c){"@babel/helpers - typeof";return V3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V3(c)}function Cd(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function k5(c,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function bd(c,e,a){return e&&k5(c.prototype,e),a&&k5(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function y2(c,e,a){return e in c?Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[e]=a,c}function k0(c,e){return Ld(c)||xd(c,e)||Q7(c,e)||Sd()}function T4(c){return wd(c)||kd(c)||Q7(c)||Nd()}function wd(c){if(Array.isArray(c))return U6(c)}function Ld(c){if(Array.isArray(c))return c}function kd(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function xd(c,e){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var s=[],n=!0,r=!1,i,o;try{for(a=a.call(c);!(n=(i=a.next()).done)&&(s.push(i.value),!(e&&s.length===e));n=!0);}catch(t){r=!0,o=t}finally{try{!n&&a.return!=null&&a.return()}finally{if(r)throw o}}return s}}function Q7(c,e){if(c){if(typeof c=="string")return U6(c,e);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return U6(c,e)}}function U6(c,e){(e==null||e>c.length)&&(e=c.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=c[a];return s}function Nd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var x5=function(){},x0={},Z7={},cc=null,ec={mark:x5,measure:x5};try{typeof window<"u"&&(x0=window),typeof document<"u"&&(Z7=document),typeof MutationObserver<"u"&&(cc=MutationObserver),typeof performance<"u"&&(ec=performance)}catch{}var Ad=x0.navigator||{},N5=Ad.userAgent,S5=N5===void 0?"":N5,w1=x0,r2=Z7,A5=cc,J4=ec;w1.document;var l1=!!r2.documentElement&&!!r2.head&&typeof r2.addEventListener=="function"&&typeof r2.createElement=="function",ac=~S5.indexOf("MSIE")||~S5.indexOf("Trident/"),Q4,Z4,c3,e3,a3,n1="___FONT_AWESOME___",q6=16,sc="fa",nc="svg-inline--fa",E1="data-fa-i2svg",G6="data-fa-pseudo-element",Td="data-fa-pseudo-element-pending",N0="data-prefix",S0="data-icon",T5="fontawesome-i2svg",Id="async",Fd=["HTML","HEAD","STYLE","SCRIPT"],rc=function(){try{return!0}catch{return!1}}(),n2="classic",l2="sharp",A0=[n2,l2];function I4(c){return new Proxy(c,{get:function(a,s){return s in a?a[s]:a[n2]}})}var k4=I4((Q4={},y2(Q4,n2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),y2(Q4,l2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Q4)),x4=I4((Z4={},y2(Z4,n2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y2(Z4,l2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Z4)),N4=I4((c3={},y2(c3,n2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y2(c3,l2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),c3)),Bd=I4((e3={},y2(e3,n2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y2(e3,l2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),e3)),Pd=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ic="fa-layers-text",Wd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Rd=I4((a3={},y2(a3,n2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y2(a3,l2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),a3)),oc=[1,2,3,4,5,6,7,8,9,10],Dd=oc.concat([11,12,13,14,15,16,17,18,19,20]),Od=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],P1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},S4=new Set;Object.keys(x4[n2]).map(S4.add.bind(S4));Object.keys(x4[l2]).map(S4.add.bind(S4));var Ed=[].concat(A0,T4(S4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",P1.GROUP,P1.SWAP_OPACITY,P1.PRIMARY,P1.SECONDARY]).concat(oc.map(function(c){return"".concat(c,"x")})).concat(Dd.map(function(c){return"w-".concat(c)})),z4=w1.FontAwesomeConfig||{};function _d(c){var e=r2.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function $d(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(r2&&typeof r2.querySelector=="function"){var Ud=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ud.forEach(function(c){var e=k0(c,2),a=e[0],s=e[1],n=$d(_d(a));n!=null&&(z4[s]=n)})}var tc={styleDefault:"solid",familyDefault:"classic",cssPrefix:sc,replacementClass:nc,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};z4.familyPrefix&&(z4.cssPrefix=z4.familyPrefix);var s4=S(S({},tc),z4);s4.autoReplaceSvg||(s4.observeMutations=!1);var I={};Object.keys(tc).forEach(function(c){Object.defineProperty(I,c,{enumerable:!0,set:function(a){s4[c]=a,g4.forEach(function(s){return s(I)})},get:function(){return s4[c]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(e){s4.cssPrefix=e,g4.forEach(function(a){return a(I)})},get:function(){return s4.cssPrefix}});w1.FontAwesomeConfig=I;var g4=[];function qd(c){return g4.push(c),function(){g4.splice(g4.indexOf(c),1)}}var H1=q6,J2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Gd(c){if(!(!c||!l1)){var e=r2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var a=r2.head.childNodes,s=null,n=a.length-1;n>-1;n--){var r=a[n],i=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(s=r)}return r2.head.insertBefore(e,s),c}}var jd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function A4(){for(var c=12,e="";c-- >0;)e+=jd[Math.random()*62|0];return e}function t4(c){for(var e=[],a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function T0(c){return c.classList?t4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function lc(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yd(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(lc(c[a]),'" ')},"").trim()}function $3(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(c[a].trim(),";")},"")}function I0(c){return c.size!==J2.size||c.x!==J2.x||c.y!==J2.y||c.rotate!==J2.rotate||c.flipX||c.flipY}function Kd(c){var e=c.transform,a=c.containerWidth,s=c.iconWidth,n={transform:"translate(".concat(a/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),t={transform:"".concat(r," ").concat(i," ").concat(o)},l={transform:"translate(".concat(s/2*-1," -256)")};return{outer:n,inner:t,path:l}}function Xd(c){var e=c.transform,a=c.width,s=a===void 0?q6:a,n=c.height,r=n===void 0?q6:n,i=c.startCentered,o=i===void 0?!1:i,t="";return o&&ac?t+="translate(".concat(e.x/H1-s/2,"em, ").concat(e.y/H1-r/2,"em) "):o?t+="translate(calc(-50% + ".concat(e.x/H1,"em), calc(-50% + ").concat(e.y/H1,"em)) "):t+="translate(".concat(e.x/H1,"em, ").concat(e.y/H1,"em) "),t+="scale(".concat(e.size/H1*(e.flipX?-1:1),", ").concat(e.size/H1*(e.flipY?-1:1),") "),t+="rotate(".concat(e.rotate,"deg) "),t}var Jd=`:root, :host {
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
}`;function fc(){var c=sc,e=nc,a=I.cssPrefix,s=I.replacementClass,n=Jd;if(a!==c||s!==e){var r=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");n=n.replace(r,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(o,".".concat(s))}return n}var I5=!1;function V6(){I.autoAddCss&&!I5&&(Gd(fc()),I5=!0)}var Qd={mixout:function(){return{dom:{css:fc,insertCss:V6}}},hooks:function(){return{beforeDOMElementCreation:function(){V6()},beforeI2svg:function(){V6()}}}},r1=w1||{};r1[n1]||(r1[n1]={});r1[n1].styles||(r1[n1].styles={});r1[n1].hooks||(r1[n1].hooks={});r1[n1].shims||(r1[n1].shims=[]);var q2=r1[n1],hc=[],Zd=function c(){r2.removeEventListener("DOMContentLoaded",c),M3=1,hc.map(function(e){return e()})},M3=!1;l1&&(M3=(r2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(r2.readyState),M3||r2.addEventListener("DOMContentLoaded",Zd));function cm(c){l1&&(M3?setTimeout(c,0):hc.push(c))}function F4(c){var e=c.tag,a=c.attributes,s=a===void 0?{}:a,n=c.children,r=n===void 0?[]:n;return typeof c=="string"?lc(c):"<".concat(e," ").concat(Yd(s),">").concat(r.map(F4).join(""),"</").concat(e,">")}function F5(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var em=function(e,a){return function(s,n,r,i){return e.call(a,s,n,r,i)}},M6=function(e,a,s,n){var r=Object.keys(e),i=r.length,o=n!==void 0?em(a,n):a,t,l,h;for(s===void 0?(t=1,h=e[r[0]]):(t=0,h=s);t<i;t++)l=r[t],h=o(h,e[l],l,e);return h};function am(c){for(var e=[],a=0,s=c.length;a<s;){var n=c.charCodeAt(a++);if(n>=55296&&n<=56319&&a<s){var r=c.charCodeAt(a++);(r&64512)==56320?e.push(((n&1023)<<10)+(r&1023)+65536):(e.push(n),a--)}else e.push(n)}return e}function j6(c){var e=am(c);return e.length===1?e[0].toString(16):null}function sm(c,e){var a=c.length,s=c.charCodeAt(e),n;return s>=55296&&s<=56319&&a>e+1&&(n=c.charCodeAt(e+1),n>=56320&&n<=57343)?(s-55296)*1024+n-56320+65536:s}function B5(c){return Object.keys(c).reduce(function(e,a){var s=c[a],n=!!s.icon;return n?e[s.iconName]=s.icon:e[a]=s,e},{})}function Y6(c,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=a.skipHooks,n=s===void 0?!1:s,r=B5(e);typeof q2.hooks.addPack=="function"&&!n?q2.hooks.addPack(c,B5(e)):q2.styles[c]=S(S({},q2.styles[c]||{}),r),c==="fas"&&Y6("fa",e)}var s3,n3,r3,Y1=q2.styles,nm=q2.shims,rm=(s3={},y2(s3,n2,Object.values(N4[n2])),y2(s3,l2,Object.values(N4[l2])),s3),F0=null,dc={},mc={},uc={},vc={},pc={},im=(n3={},y2(n3,n2,Object.keys(k4[n2])),y2(n3,l2,Object.keys(k4[l2])),n3);function om(c){return~Ed.indexOf(c)}function tm(c,e){var a=e.split("-"),s=a[0],n=a.slice(1).join("-");return s===c&&n!==""&&!om(n)?n:null}var Hc=function(){var e=function(r){return M6(Y1,function(i,o,t){return i[t]=M6(o,r,{}),i},{})};dc=e(function(n,r,i){if(r[3]&&(n[r[3]]=i),r[2]){var o=r[2].filter(function(t){return typeof t=="number"});o.forEach(function(t){n[t.toString(16)]=i})}return n}),mc=e(function(n,r,i){if(n[i]=i,r[2]){var o=r[2].filter(function(t){return typeof t=="string"});o.forEach(function(t){n[t]=i})}return n}),pc=e(function(n,r,i){var o=r[2];return n[i]=i,o.forEach(function(t){n[t]=i}),n});var a="far"in Y1||I.autoFetchSvg,s=M6(nm,function(n,r){var i=r[0],o=r[1],t=r[2];return o==="far"&&!a&&(o="fas"),typeof i=="string"&&(n.names[i]={prefix:o,iconName:t}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:o,iconName:t}),n},{names:{},unicodes:{}});uc=s.names,vc=s.unicodes,F0=U3(I.styleDefault,{family:I.familyDefault})};qd(function(c){F0=U3(c.styleDefault,{family:I.familyDefault})});Hc();function B0(c,e){return(dc[c]||{})[e]}function lm(c,e){return(mc[c]||{})[e]}function W1(c,e){return(pc[c]||{})[e]}function zc(c){return uc[c]||{prefix:null,iconName:null}}function fm(c){var e=vc[c],a=B0("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function L1(){return F0}var P0=function(){return{prefix:null,iconName:null,rest:[]}};function U3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,s=a===void 0?n2:a,n=k4[s][c],r=x4[s][c]||x4[s][n],i=c in q2.styles?c:null;return r||i||null}var P5=(r3={},y2(r3,n2,Object.keys(N4[n2])),y2(r3,l2,Object.keys(N4[l2])),r3);function q3(c){var e,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.skipLookups,n=s===void 0?!1:s,r=(e={},y2(e,n2,"".concat(I.cssPrefix,"-").concat(n2)),y2(e,l2,"".concat(I.cssPrefix,"-").concat(l2)),e),i=null,o=n2;(c.includes(r[n2])||c.some(function(l){return P5[n2].includes(l)}))&&(o=n2),(c.includes(r[l2])||c.some(function(l){return P5[l2].includes(l)}))&&(o=l2);var t=c.reduce(function(l,h){var d=tm(I.cssPrefix,h);if(Y1[h]?(h=rm[o].includes(h)?Bd[o][h]:h,i=h,l.prefix=h):im[o].indexOf(h)>-1?(i=h,l.prefix=U3(h,{family:o})):d?l.iconName=d:h!==I.replacementClass&&h!==r[n2]&&h!==r[l2]&&l.rest.push(h),!n&&l.prefix&&l.iconName){var u=i==="fa"?zc(l.iconName):{},p=W1(l.prefix,l.iconName);u.prefix&&(i=null),l.iconName=u.iconName||p||l.iconName,l.prefix=u.prefix||l.prefix,l.prefix==="far"&&!Y1.far&&Y1.fas&&!I.autoFetchSvg&&(l.prefix="fas")}return l},P0());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&o===l2&&(Y1.fass||I.autoFetchSvg)&&(t.prefix="fass",t.iconName=W1(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||i==="fa")&&(t.prefix=L1()||"fas"),t}var hm=function(){function c(){Cd(this,c),this.definitions={}}return bd(c,[{key:"add",value:function(){for(var a=this,s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){a.definitions[o]=S(S({},a.definitions[o]||{}),i[o]),Y6(o,i[o]);var t=N4[n2][o];t&&Y6(t,i[o]),Hc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,s){var n=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(n).map(function(r){var i=n[r],o=i.prefix,t=i.iconName,l=i.icon,h=l[2];a[o]||(a[o]={}),h.length>0&&h.forEach(function(d){typeof d=="string"&&(a[o][d]=l)}),a[o][t]=l}),a}}]),c}(),W5=[],K1={},c4={},dm=Object.keys(c4);function mm(c,e){var a=e.mixoutsTo;return W5=c,K1={},Object.keys(c4).forEach(function(s){dm.indexOf(s)===-1&&delete c4[s]}),W5.forEach(function(s){var n=s.mixout?s.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(a[i]=n[i]),V3(n[i])==="object"&&Object.keys(n[i]).forEach(function(o){a[i]||(a[i]={}),a[i][o]=n[i][o]})}),s.hooks){var r=s.hooks();Object.keys(r).forEach(function(i){K1[i]||(K1[i]=[]),K1[i].push(r[i])})}s.provides&&s.provides(c4)}),a}function K6(c,e){for(var a=arguments.length,s=new Array(a>2?a-2:0),n=2;n<a;n++)s[n-2]=arguments[n];var r=K1[c]||[];return r.forEach(function(i){e=i.apply(null,[e].concat(s))}),e}function _1(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),s=1;s<e;s++)a[s-1]=arguments[s];var n=K1[c]||[];n.forEach(function(r){r.apply(null,a)})}function i1(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return c4[c]?c4[c].apply(null,e):void 0}function X6(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,a=c.prefix||L1();if(e)return e=W1(a,e)||e,F5(gc.definitions,a,e)||F5(q2.styles,a,e)}var gc=new hm,um=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,_1("noAuto")},vm={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return l1?(_1("beforeI2svg",e),i1("pseudoElements2svg",e),i1("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,cm(function(){Hm({autoReplaceSvgRoot:a}),_1("watch",e)})}},pm={icon:function(e){if(e===null)return null;if(V3(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:W1(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],s=U3(e[0]);return{prefix:s,iconName:W1(s,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(I.cssPrefix,"-"))>-1||e.match(Pd))){var n=q3(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||L1(),iconName:W1(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){var r=L1();return{prefix:r,iconName:W1(r,e)||e}}}},T2={noAuto:um,config:I,dom:vm,parse:pm,library:gc,findIconDefinition:X6,toHtml:F4},Hm=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,s=a===void 0?r2:a;(Object.keys(q2.styles).length>0||I.autoFetchSvg)&&l1&&I.autoReplaceSvg&&T2.dom.i2svg({node:s})};function G3(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return F4(s)})}}),Object.defineProperty(c,"node",{get:function(){if(l1){var s=r2.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function zm(c){var e=c.children,a=c.main,s=c.mask,n=c.attributes,r=c.styles,i=c.transform;if(I0(i)&&a.found&&!s.found){var o=a.width,t=a.height,l={x:o/t/2,y:.5};n.style=$3(S(S({},r),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:e}]}function gm(c){var e=c.prefix,a=c.iconName,s=c.children,n=c.attributes,r=c.symbol,i=r===!0?"".concat(e,"-").concat(I.cssPrefix,"-").concat(a):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},n),{},{id:i}),children:s}]}]}function W0(c){var e=c.icons,a=e.main,s=e.mask,n=c.prefix,r=c.iconName,i=c.transform,o=c.symbol,t=c.title,l=c.maskId,h=c.titleId,d=c.extra,u=c.watchable,p=u===void 0?!1:u,w=s.found?s:a,k=w.width,O=w.height,g=n==="fak",V=[I.replacementClass,r?"".concat(I.cssPrefix,"-").concat(r):""].filter(function(L){return d.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(d.classes).join(" "),F={children:[],attributes:S(S({},d.attributes),{},{"data-prefix":n,"data-icon":r,class:V,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(O)})},x=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(k/O*16*.0625,"em")}:{};p&&(F.attributes[E1]=""),t&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(h||A4())},children:[t]}),delete F.attributes.title);var E=S(S({},F),{},{prefix:n,iconName:r,main:a,mask:s,maskId:l,transform:i,symbol:o,styles:S(S({},x),d.styles)}),c2=s.found&&a.found?i1("generateAbstractMask",E)||{children:[],attributes:{}}:i1("generateAbstractIcon",E)||{children:[],attributes:{}},Z=c2.children,R=c2.attributes;return E.children=Z,E.attributes=R,o?gm(E):zm(E)}function R5(c){var e=c.content,a=c.width,s=c.height,n=c.transform,r=c.title,i=c.extra,o=c.watchable,t=o===void 0?!1:o,l=S(S(S({},i.attributes),r?{title:r}:{}),{},{class:i.classes.join(" ")});t&&(l[E1]="");var h=S({},i.styles);I0(n)&&(h.transform=Xd({transform:n,startCentered:!0,width:a,height:s}),h["-webkit-transform"]=h.transform);var d=$3(h);d.length>0&&(l.style=d);var u=[];return u.push({tag:"span",attributes:l,children:[e]}),r&&u.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),u}function ym(c){var e=c.content,a=c.title,s=c.extra,n=S(S(S({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")}),r=$3(s.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[e]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var C6=q2.styles;function J6(c){var e=c[0],a=c[1],s=c.slice(4),n=k0(s,1),r=n[0],i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(P1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(P1.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(P1.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:a,icon:i}}var Vm={found:!1,width:512,height:512};function Mm(c,e){!rc&&!I.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function Q6(c,e){var a=e;return e==="fa"&&I.styleDefault!==null&&(e=L1()),new Promise(function(s,n){if(i1("missingIconAbstract"),a==="fa"){var r=zc(c)||{};c=r.iconName||c,e=r.prefix||e}if(c&&e&&C6[e]&&C6[e][c]){var i=C6[e][c];return s(J6(i))}Mm(c,e),s(S(S({},Vm),{},{icon:I.showMissingIcons&&c?i1("missingIconAbstract")||{}:{}}))})}var D5=function(){},Z6=I.measurePerformance&&J4&&J4.mark&&J4.measure?J4:{mark:D5,measure:D5},v4='FA "6.5.1"',Cm=function(e){return Z6.mark("".concat(v4," ").concat(e," begins")),function(){return yc(e)}},yc=function(e){Z6.mark("".concat(v4," ").concat(e," ends")),Z6.measure("".concat(v4," ").concat(e),"".concat(v4," ").concat(e," begins"),"".concat(v4," ").concat(e," ends"))},R0={begin:Cm,end:yc},h3=function(){};function O5(c){var e=c.getAttribute?c.getAttribute(E1):null;return typeof e=="string"}function bm(c){var e=c.getAttribute?c.getAttribute(N0):null,a=c.getAttribute?c.getAttribute(S0):null;return e&&a}function wm(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(I.replacementClass)}function Lm(){if(I.autoReplaceSvg===!0)return d3.replace;var c=d3[I.autoReplaceSvg];return c||d3.replace}function km(c){return r2.createElementNS("http://www.w3.org/2000/svg",c)}function xm(c){return r2.createElement(c)}function Vc(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,s=a===void 0?c.tag==="svg"?km:xm:a;if(typeof c=="string")return r2.createTextNode(c);var n=s(c.tag);Object.keys(c.attributes||[]).forEach(function(i){n.setAttribute(i,c.attributes[i])});var r=c.children||[];return r.forEach(function(i){n.appendChild(Vc(i,{ceFn:s}))}),n}function Nm(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var d3={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(n){a.parentNode.insertBefore(Vc(n),a)}),a.getAttribute(E1)===null&&I.keepOriginalSource){var s=r2.createComment(Nm(a));a.parentNode.replaceChild(s,a)}else a.remove()},nest:function(e){var a=e[0],s=e[1];if(~T0(a).indexOf(I.replacementClass))return d3.replace(e);var n=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var r=s[0].attributes.class.split(" ").reduce(function(o,t){return t===I.replacementClass||t.match(n)?o.toSvg.push(t):o.toNode.push(t),o},{toNode:[],toSvg:[]});s[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",r.toNode.join(" "))}var i=s.map(function(o){return F4(o)}).join(`
`);a.setAttribute(E1,""),a.innerHTML=i}};function E5(c){c()}function Mc(c,e){var a=typeof e=="function"?e:h3;if(c.length===0)a();else{var s=E5;I.mutateApproach===Id&&(s=w1.requestAnimationFrame||E5),s(function(){var n=Lm(),r=R0.begin("mutate");c.map(n),r(),a()})}}var D0=!1;function Cc(){D0=!0}function c0(){D0=!1}var C3=null;function _5(c){if(A5&&I.observeMutations){var e=c.treeCallback,a=e===void 0?h3:e,s=c.nodeCallback,n=s===void 0?h3:s,r=c.pseudoElementsCallback,i=r===void 0?h3:r,o=c.observeMutationsRoot,t=o===void 0?r2:o;C3=new A5(function(l){if(!D0){var h=L1();t4(l).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!O5(d.addedNodes[0])&&(I.searchPseudoElements&&i(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&I.searchPseudoElements&&i(d.target.parentNode),d.type==="attributes"&&O5(d.target)&&~Od.indexOf(d.attributeName))if(d.attributeName==="class"&&bm(d.target)){var u=q3(T0(d.target)),p=u.prefix,w=u.iconName;d.target.setAttribute(N0,p||h),w&&d.target.setAttribute(S0,w)}else wm(d.target)&&n(d.target)})}}),l1&&C3.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Sm(){C3&&C3.disconnect()}function Am(c){var e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(s,n){var r=n.split(":"),i=r[0],o=r.slice(1);return i&&o.length>0&&(s[i]=o.join(":").trim()),s},{})),a}function Tm(c){var e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",n=q3(T0(c));return n.prefix||(n.prefix=L1()),e&&a&&(n.prefix=e,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&s.length>0&&(n.iconName=lm(n.prefix,c.innerText)||B0(n.prefix,j6(c.innerText))),!n.iconName&&I.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function Im(c){var e=t4(c.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),a=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return I.autoA11y&&(a?e["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(s||A4()):(e["aria-hidden"]="true",e.focusable="false")),e}function Fm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:J2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $5(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Tm(c),s=a.iconName,n=a.prefix,r=a.rest,i=Im(c),o=K6("parseNodeAttributes",{},c),t=e.styleParser?Am(c):[];return S({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:n,transform:J2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:t,attributes:i}},o)}var Bm=q2.styles;function bc(c){var e=I.autoReplaceSvg==="nest"?$5(c,{styleParser:!1}):$5(c);return~e.extra.classes.indexOf(ic)?i1("generateLayersText",c,e):i1("generateSvgReplacementMutation",c,e)}var k1=new Set;A0.map(function(c){k1.add("fa-".concat(c))});Object.keys(k4[n2]).map(k1.add.bind(k1));Object.keys(k4[l2]).map(k1.add.bind(k1));k1=T4(k1);function U5(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!l1)return Promise.resolve();var a=r2.documentElement.classList,s=function(d){return a.add("".concat(T5,"-").concat(d))},n=function(d){return a.remove("".concat(T5,"-").concat(d))},r=I.autoFetchSvg?k1:A0.map(function(h){return"fa-".concat(h)}).concat(Object.keys(Bm));r.includes("fa")||r.push("fa");var i=[".".concat(ic,":not([").concat(E1,"])")].concat(r.map(function(h){return".".concat(h,":not([").concat(E1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=t4(c.querySelectorAll(i))}catch{}if(o.length>0)s("pending"),n("complete");else return Promise.resolve();var t=R0.begin("onTree"),l=o.reduce(function(h,d){try{var u=bc(d);u&&h.push(u)}catch(p){rc||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise(function(h,d){Promise.all(l).then(function(u){Mc(u,function(){s("active"),s("complete"),n("pending"),typeof e=="function"&&e(),t(),h()})}).catch(function(u){t(),d(u)})})}function Pm(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;bc(c).then(function(a){a&&Mc([a],e)})}function Wm(c){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(e||{}).icon?e:X6(e||{}),n=a.mask;return n&&(n=(n||{}).icon?n:X6(n||{})),c(s,S(S({},a),{},{mask:n}))}}var Rm=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,n=s===void 0?J2:s,r=a.symbol,i=r===void 0?!1:r,o=a.mask,t=o===void 0?null:o,l=a.maskId,h=l===void 0?null:l,d=a.title,u=d===void 0?null:d,p=a.titleId,w=p===void 0?null:p,k=a.classes,O=k===void 0?[]:k,g=a.attributes,V=g===void 0?{}:g,F=a.styles,x=F===void 0?{}:F;if(e){var E=e.prefix,c2=e.iconName,Z=e.icon;return G3(S({type:"icon"},e),function(){return _1("beforeDOMElementCreation",{iconDefinition:e,params:a}),I.autoA11y&&(u?V["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(w||A4()):(V["aria-hidden"]="true",V.focusable="false")),W0({icons:{main:J6(Z),mask:t?J6(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:c2,transform:S(S({},J2),n),symbol:i,title:u,maskId:h,titleId:w,extra:{attributes:V,styles:x,classes:O}})})}},Dm={mixout:function(){return{icon:Wm(Rm)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=U5,a.nodeCallback=Pm,a}}},provides:function(e){e.i2svg=function(a){var s=a.node,n=s===void 0?r2:s,r=a.callback,i=r===void 0?function(){}:r;return U5(n,i)},e.generateSvgReplacementMutation=function(a,s){var n=s.iconName,r=s.title,i=s.titleId,o=s.prefix,t=s.transform,l=s.symbol,h=s.mask,d=s.maskId,u=s.extra;return new Promise(function(p,w){Promise.all([Q6(n,o),h.iconName?Q6(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var O=k0(k,2),g=O[0],V=O[1];p([a,W0({icons:{main:g,mask:V},prefix:o,iconName:n,transform:t,symbol:l,maskId:d,title:r,titleId:i,extra:u,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(a){var s=a.children,n=a.attributes,r=a.main,i=a.transform,o=a.styles,t=$3(o);t.length>0&&(n.style=t);var l;return I0(i)&&(l=i1("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),s.push(l||r.icon),{children:s,attributes:n}}}},Om={mixout:function(){return{layer:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.classes,r=n===void 0?[]:n;return G3({type:"layer"},function(){_1("beforeDOMElementCreation",{assembler:a,params:s});var i=[];return a(function(o){Array.isArray(o)?o.map(function(t){i=i.concat(t.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(T4(r)).join(" ")},children:i}]})}}}},Em={mixout:function(){return{counter:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.title,r=n===void 0?null:n,i=s.classes,o=i===void 0?[]:i,t=s.attributes,l=t===void 0?{}:t,h=s.styles,d=h===void 0?{}:h;return G3({type:"counter",content:a},function(){return _1("beforeDOMElementCreation",{content:a,params:s}),ym({content:a.toString(),title:r,extra:{attributes:l,styles:d,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(T4(o))}})})}}}},_m={mixout:function(){return{text:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.transform,r=n===void 0?J2:n,i=s.title,o=i===void 0?null:i,t=s.classes,l=t===void 0?[]:t,h=s.attributes,d=h===void 0?{}:h,u=s.styles,p=u===void 0?{}:u;return G3({type:"text",content:a},function(){return _1("beforeDOMElementCreation",{content:a,params:s}),R5({content:a,transform:S(S({},J2),r),title:o,extra:{attributes:d,styles:p,classes:["".concat(I.cssPrefix,"-layers-text")].concat(T4(l))}})})}}},provides:function(e){e.generateLayersText=function(a,s){var n=s.title,r=s.transform,i=s.extra,o=null,t=null;if(ac){var l=parseInt(getComputedStyle(a).fontSize,10),h=a.getBoundingClientRect();o=h.width/l,t=h.height/l}return I.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,R5({content:a.innerHTML,width:o,height:t,transform:r,title:n,extra:i,watchable:!0})])}}},$m=new RegExp('"',"ug"),q5=[1105920,1112319];function Um(c){var e=c.replace($m,""),a=sm(e,0),s=a>=q5[0]&&a<=q5[1],n=e.length===2?e[0]===e[1]:!1;return{value:j6(n?e[0]:e),isSecondary:s||n}}function G5(c,e){var a="".concat(Td).concat(e.replace(":","-"));return new Promise(function(s,n){if(c.getAttribute(a)!==null)return s();var r=t4(c.children),i=r.filter(function(Z){return Z.getAttribute(G6)===e})[0],o=w1.getComputedStyle(c,e),t=o.getPropertyValue("font-family").match(Wd),l=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(i&&!t)return c.removeChild(i),s();if(t&&h!=="none"&&h!==""){var d=o.getPropertyValue("content"),u=~["Sharp"].indexOf(t[2])?l2:n2,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(t[2])?x4[u][t[2].toLowerCase()]:Rd[u][l],w=Um(d),k=w.value,O=w.isSecondary,g=t[0].startsWith("FontAwesome"),V=B0(p,k),F=V;if(g){var x=fm(k);x.iconName&&x.prefix&&(V=x.iconName,p=x.prefix)}if(V&&!O&&(!i||i.getAttribute(N0)!==p||i.getAttribute(S0)!==F)){c.setAttribute(a,F),i&&c.removeChild(i);var E=Fm(),c2=E.extra;c2.attributes[G6]=e,Q6(V,p).then(function(Z){var R=W0(S(S({},E),{},{icons:{main:Z,mask:P0()},prefix:p,iconName:F,extra:c2,watchable:!0})),L=r2.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(L,c.firstChild):c.appendChild(L),L.outerHTML=R.map(function(D){return F4(D)}).join(`
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}