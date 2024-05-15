(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();function a0(c,e){const a=Object.create(null),s=c.split(",");for(let n=0;n<s.length;n++)a[s[n]]=!0;return e?n=>!!a[n.toLowerCase()]:n=>!!a[n]}const a2={},Y1=[],J2=()=>{},Tt=()=>!1,w3=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),s0=c=>c.startsWith("onUpdate:"),p2=Object.assign,n0=(c,e)=>{const a=c.indexOf(e);a>-1&&c.splice(a,1)},It=Object.prototype.hasOwnProperty,K=(c,e)=>It.call(c,e),W=Array.isArray,K1=c=>b3(c)==="[object Map]",a7=c=>b3(c)==="[object Set]",U=c=>typeof c=="function",H2=c=>typeof c=="string",a4=c=>typeof c=="symbol",r2=c=>c!==null&&typeof c=="object",s7=c=>(r2(c)||U(c))&&U(c.then)&&U(c.catch),n7=Object.prototype.toString,b3=c=>n7.call(c),Bt=c=>b3(c).slice(8,-1),r7=c=>b3(c)==="[object Object]",r0=c=>H2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,i3=a0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k3=c=>{const e=Object.create(null);return a=>e[a]||(e[a]=c(a))},Pt=/-(\w)/g,Q2=k3(c=>c.replace(Pt,(e,a)=>a?a.toUpperCase():"")),Ft=/\B([A-Z])/g,s4=k3(c=>c.replace(Ft,"-$1").toLowerCase()),x3=k3(c=>c.charAt(0).toUpperCase()+c.slice(1)),h6=k3(c=>c?`on${x3(c)}`:""),E1=(c,e)=>!Object.is(c,e),m6=(c,e)=>{for(let a=0;a<c.length;a++)c[a](e)},u3=(c,e,a)=>{Object.defineProperty(c,e,{configurable:!0,enumerable:!1,value:a})},Rt=c=>{const e=parseFloat(c);return isNaN(e)?c:e},Wt=c=>{const e=H2(c)?Number(c):NaN;return isNaN(e)?c:e};let O8;const b6=()=>O8||(O8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function N3(c){if(W(c)){const e={};for(let a=0;a<c.length;a++){const s=c[a],n=H2(s)?_t(s):N3(s);if(n)for(const r in n)e[r]=n[r]}return e}else if(H2(c)||r2(c))return c}const Dt=/;(?![^(]*\))/g,Et=/:([^]+)/,Ot=/\/\*[^]*?\*\//g;function _t(c){const e={};return c.replace(Ot,"").split(Dt).forEach(a=>{if(a){const s=a.split(Et);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function T2(c){let e="";if(H2(c))e=c;else if(W(c))for(let a=0;a<c.length;a++){const s=T2(c[a]);s&&(e+=s+" ")}else if(r2(c))for(const a in c)c[a]&&(e+=a+" ");return e.trim()}const $t="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ut=a0($t);function i7(c){return!!c||c===""}const I2=c=>H2(c)?c:c==null?"":W(c)||r2(c)&&(c.toString===n7||!U(c.toString))?JSON.stringify(c,o7,2):String(c),o7=(c,e)=>e&&e.__v_isRef?o7(c,e.value):K1(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((a,[s,n],r)=>(a[u6(s,r)+" =>"]=n,a),{})}:a7(e)?{[`Set(${e.size})`]:[...e.values()].map(a=>u6(a))}:a4(e)?u6(e):r2(e)&&!W(e)&&!r7(e)?String(e):e,u6=(c,e="")=>{var a;return a4(c)?`Symbol(${(a=c.description)!=null?a:e})`:c};let W2;class qt{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=W2,!e&&W2&&(this.index=(W2.scopes||(W2.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const a=W2;try{return W2=this,e()}finally{W2=a}}}on(){W2=this}off(){W2=this.parent}stop(e){if(this._active){let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.scopes)for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function Gt(c,e=W2){e&&e.active&&e.effects.push(c)}function jt(){return W2}const i0=c=>{const e=new Set(c);return e.w=0,e.n=0,e},t7=c=>(c.w&C1)>0,l7=c=>(c.n&C1)>0,Yt=({deps:c})=>{if(c.length)for(let e=0;e<c.length;e++)c[e].w|=C1},Kt=c=>{const{deps:e}=c;if(e.length){let a=0;for(let s=0;s<e.length;s++){const n=e[s];t7(n)&&!l7(n)?n.delete(c):e[a++]=n,n.w&=~C1,n.n&=~C1}e.length=a}},k6=new WeakMap;let m4=0,C1=1;const x6=30;let D2;const W1=Symbol(""),N6=Symbol("");class o0{constructor(e,a=null,s){this.fn=e,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,Gt(this,s)}run(){if(!this.active)return this.fn();let e=D2,a=g1;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=D2,D2=this,g1=!0,C1=1<<++m4,m4<=x6?Yt(this):_8(this),this.fn()}finally{m4<=x6&&Kt(this),C1=1<<--m4,D2=this.parent,g1=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){D2===this?this.deferStop=!0:this.active&&(_8(this),this.onStop&&this.onStop(),this.active=!1)}}function _8(c){const{deps:e}=c;if(e.length){for(let a=0;a<e.length;a++)e[a].delete(c);e.length=0}}let g1=!0;const f7=[];function n4(){f7.push(g1),g1=!1}function r4(){const c=f7.pop();g1=c===void 0?!0:c}function x2(c,e,a){if(g1&&D2){let s=k6.get(c);s||k6.set(c,s=new Map);let n=s.get(a);n||s.set(a,n=i0()),h7(n)}}function h7(c,e){let a=!1;m4<=x6?l7(c)||(c.n|=C1,a=!t7(c)):a=!c.has(D2),a&&(c.add(D2),D2.deps.push(c))}function n1(c,e,a,s,n,r){const i=k6.get(c);if(!i)return;let o=[];if(e==="clear")o=[...i.values()];else if(a==="length"&&W(c)){const t=Number(s);i.forEach((l,h)=>{(h==="length"||!a4(h)&&h>=t)&&o.push(l)})}else switch(a!==void 0&&o.push(i.get(a)),e){case"add":W(c)?r0(a)&&o.push(i.get("length")):(o.push(i.get(W1)),K1(c)&&o.push(i.get(N6)));break;case"delete":W(c)||(o.push(i.get(W1)),K1(c)&&o.push(i.get(N6)));break;case"set":K1(c)&&o.push(i.get(W1));break}if(o.length===1)o[0]&&S6(o[0]);else{const t=[];for(const l of o)l&&t.push(...l);S6(i0(t))}}function S6(c,e){const a=W(c)?c:[...c];for(const s of a)s.computed&&$8(s);for(const s of a)s.computed||$8(s)}function $8(c,e){(c!==D2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Xt=a0("__proto__,__v_isRef,__isVue"),m7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(a4)),U8=Jt();function Jt(){const c={};return["includes","indexOf","lastIndexOf"].forEach(e=>{c[e]=function(...a){const s=X(this);for(let r=0,i=this.length;r<i;r++)x2(s,"get",r+"");const n=s[e](...a);return n===-1||n===!1?s[e](...a.map(X)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{c[e]=function(...a){n4();const s=X(this)[e].apply(this,a);return r4(),s}}),c}function Qt(c){const e=X(this);return x2(e,"has",c),e.hasOwnProperty(c)}class u7{constructor(e=!1,a=!1){this._isReadonly=e,this._shallow=a}get(e,a,s){const n=this._isReadonly,r=this._shallow;if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return r;if(a==="__v_raw")return s===(n?r?hl:p7:r?H7:v7).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const i=W(e);if(!n){if(i&&K(U8,a))return Reflect.get(U8,a,s);if(a==="hasOwnProperty")return Qt}const o=Reflect.get(e,a,s);return(a4(a)?m7.has(a):Xt(a))||(n||x2(e,"get",a),r)?o:N2(o)?i&&r0(a)?o:o.value:r2(o)?n?z7(o):f0(o):o}}class d7 extends u7{constructor(e=!1){super(!1,e)}set(e,a,s,n){let r=e[a];if(!this._shallow){const t=Z1(r);if(!d3(s)&&!Z1(s)&&(r=X(r),s=X(s)),!W(e)&&N2(r)&&!N2(s))return t?!1:(r.value=s,!0)}const i=W(e)&&r0(a)?Number(a)<e.length:K(e,a),o=Reflect.set(e,a,s,n);return e===X(n)&&(i?E1(s,r)&&n1(e,"set",a,s):n1(e,"add",a,s)),o}deleteProperty(e,a){const s=K(e,a);e[a];const n=Reflect.deleteProperty(e,a);return n&&s&&n1(e,"delete",a,void 0),n}has(e,a){const s=Reflect.has(e,a);return(!a4(a)||!m7.has(a))&&x2(e,"has",a),s}ownKeys(e){return x2(e,"iterate",W(e)?"length":W1),Reflect.ownKeys(e)}}class Zt extends u7{constructor(e=!1){super(!0,e)}set(e,a){return!0}deleteProperty(e,a){return!0}}const cl=new d7,el=new Zt,al=new d7(!0),t0=c=>c,S3=c=>Reflect.getPrototypeOf(c);function _4(c,e,a=!1,s=!1){c=c.__v_raw;const n=X(c),r=X(e);a||(E1(e,r)&&x2(n,"get",e),x2(n,"get",r));const{has:i}=S3(n),o=s?t0:a?m0:V4;if(i.call(n,e))return o(c.get(e));if(i.call(n,r))return o(c.get(r));c!==n&&c.get(e)}function $4(c,e=!1){const a=this.__v_raw,s=X(a),n=X(c);return e||(E1(c,n)&&x2(s,"has",c),x2(s,"has",n)),c===n?a.has(c):a.has(c)||a.has(n)}function U4(c,e=!1){return c=c.__v_raw,!e&&x2(X(c),"iterate",W1),Reflect.get(c,"size",c)}function q8(c){c=X(c);const e=X(this);return S3(e).has.call(e,c)||(e.add(c),n1(e,"add",c,c)),this}function G8(c,e){e=X(e);const a=X(this),{has:s,get:n}=S3(a);let r=s.call(a,c);r||(c=X(c),r=s.call(a,c));const i=n.call(a,c);return a.set(c,e),r?E1(e,i)&&n1(a,"set",c,e):n1(a,"add",c,e),this}function j8(c){const e=X(this),{has:a,get:s}=S3(e);let n=a.call(e,c);n||(c=X(c),n=a.call(e,c)),s&&s.call(e,c);const r=e.delete(c);return n&&n1(e,"delete",c,void 0),r}function Y8(){const c=X(this),e=c.size!==0,a=c.clear();return e&&n1(c,"clear",void 0,void 0),a}function q4(c,e){return function(s,n){const r=this,i=r.__v_raw,o=X(i),t=e?t0:c?m0:V4;return!c&&x2(o,"iterate",W1),i.forEach((l,h)=>s.call(n,t(l),t(h),r))}}function G4(c,e,a){return function(...s){const n=this.__v_raw,r=X(n),i=K1(r),o=c==="entries"||c===Symbol.iterator&&i,t=c==="keys"&&i,l=n[c](...s),h=a?t0:e?m0:V4;return!e&&x2(r,"iterate",t?N6:W1),{next(){const{value:u,done:d}=l.next();return d?{value:u,done:d}:{value:o?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function m1(c){return function(...e){return c==="delete"?!1:c==="clear"?void 0:this}}function sl(){const c={get(r){return _4(this,r)},get size(){return U4(this)},has:$4,add:q8,set:G8,delete:j8,clear:Y8,forEach:q4(!1,!1)},e={get(r){return _4(this,r,!1,!0)},get size(){return U4(this)},has:$4,add:q8,set:G8,delete:j8,clear:Y8,forEach:q4(!1,!0)},a={get(r){return _4(this,r,!0)},get size(){return U4(this,!0)},has(r){return $4.call(this,r,!0)},add:m1("add"),set:m1("set"),delete:m1("delete"),clear:m1("clear"),forEach:q4(!0,!1)},s={get(r){return _4(this,r,!0,!0)},get size(){return U4(this,!0)},has(r){return $4.call(this,r,!0)},add:m1("add"),set:m1("set"),delete:m1("delete"),clear:m1("clear"),forEach:q4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{c[r]=G4(r,!1,!1),a[r]=G4(r,!0,!1),e[r]=G4(r,!1,!0),s[r]=G4(r,!0,!0)}),[c,a,e,s]}const[nl,rl,il,ol]=sl();function l0(c,e){const a=e?c?ol:il:c?rl:nl;return(s,n,r)=>n==="__v_isReactive"?!c:n==="__v_isReadonly"?c:n==="__v_raw"?s:Reflect.get(K(a,n)&&n in s?a:s,n,r)}const tl={get:l0(!1,!1)},ll={get:l0(!1,!0)},fl={get:l0(!0,!1)},v7=new WeakMap,H7=new WeakMap,p7=new WeakMap,hl=new WeakMap;function ml(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ul(c){return c.__v_skip||!Object.isExtensible(c)?0:ml(Bt(c))}function f0(c){return Z1(c)?c:h0(c,!1,cl,tl,v7)}function dl(c){return h0(c,!1,al,ll,H7)}function z7(c){return h0(c,!0,el,fl,p7)}function h0(c,e,a,s,n){if(!r2(c)||c.__v_raw&&!(e&&c.__v_isReactive))return c;const r=n.get(c);if(r)return r;const i=ul(c);if(i===0)return c;const o=new Proxy(c,i===2?s:a);return n.set(c,o),o}function X1(c){return Z1(c)?X1(c.__v_raw):!!(c&&c.__v_isReactive)}function Z1(c){return!!(c&&c.__v_isReadonly)}function d3(c){return!!(c&&c.__v_isShallow)}function V7(c){return X1(c)||Z1(c)}function X(c){const e=c&&c.__v_raw;return e?X(e):c}function g7(c){return u3(c,"__v_skip",!0),c}const V4=c=>r2(c)?f0(c):c,m0=c=>r2(c)?z7(c):c;function y7(c){g1&&D2&&(c=X(c),h7(c.dep||(c.dep=i0())))}function M7(c,e){c=X(c);const a=c.dep;a&&S6(a)}function N2(c){return!!(c&&c.__v_isRef===!0)}function t2(c){return vl(c,!1)}function vl(c,e){return N2(c)?c:new Hl(c,e)}class Hl{constructor(e,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?e:X(e),this._value=a?e:V4(e)}get value(){return y7(this),this._value}set value(e){const a=this.__v_isShallow||d3(e)||Z1(e);e=a?e:X(e),E1(e,this._rawValue)&&(this._rawValue=e,this._value=a?e:V4(e),M7(this))}}function pl(c){return N2(c)?c.value:c}const zl={get:(c,e,a)=>pl(Reflect.get(c,e,a)),set:(c,e,a,s)=>{const n=c[e];return N2(n)&&!N2(a)?(n.value=a,!0):Reflect.set(c,e,a,s)}};function C7(c){return X1(c)?c:new Proxy(c,zl)}class Vl{constructor(e,a,s,n){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new o0(e,()=>{this._dirty||(this._dirty=!0,M7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=s}get value(){const e=X(this);return y7(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function gl(c,e,a=!1){let s,n;const r=U(c);return r?(s=c,n=J2):(s=c.get,n=c.set),new Vl(s,n,r||!n,a)}function y1(c,e,a,s){let n;try{n=s?c(...s):c()}catch(r){A3(r,e,a)}return n}function F2(c,e,a,s){if(U(c)){const r=y1(c,e,a,s);return r&&s7(r)&&r.catch(i=>{A3(i,e,a)}),r}const n=[];for(let r=0;r<c.length;r++)n.push(F2(c[r],e,a,s));return n}function A3(c,e,a,s=!0){const n=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=a;for(;r;){const l=r.ec;if(l){for(let h=0;h<l.length;h++)if(l[h](c,i,o)===!1)return}r=r.parent}const t=e.appContext.config.errorHandler;if(t){y1(t,null,10,[c,i,o]);return}}yl(c,a,n,s)}function yl(c,e,a,s=!0){console.error(c)}let g4=!1,A6=!1;const M2=[];let K2=0;const J1=[];let a1=null,T1=0;const L7=Promise.resolve();let u0=null;function d0(c){const e=u0||L7;return c?e.then(this?c.bind(this):c):e}function Ml(c){let e=K2+1,a=M2.length;for(;e<a;){const s=e+a>>>1,n=M2[s],r=y4(n);r<c||r===c&&n.pre?e=s+1:a=s}return e}function v0(c){(!M2.length||!M2.includes(c,g4&&c.allowRecurse?K2+1:K2))&&(c.id==null?M2.push(c):M2.splice(Ml(c.id),0,c),w7())}function w7(){!g4&&!A6&&(A6=!0,u0=L7.then(k7))}function Cl(c){const e=M2.indexOf(c);e>K2&&M2.splice(e,1)}function Ll(c){W(c)?J1.push(...c):(!a1||!a1.includes(c,c.allowRecurse?T1+1:T1))&&J1.push(c),w7()}function K8(c,e,a=g4?K2+1:0){for(;a<M2.length;a++){const s=M2[a];if(s&&s.pre){if(c&&s.id!==c.uid)continue;M2.splice(a,1),a--,s()}}}function b7(c){if(J1.length){const e=[...new Set(J1)];if(J1.length=0,a1){a1.push(...e);return}for(a1=e,a1.sort((a,s)=>y4(a)-y4(s)),T1=0;T1<a1.length;T1++)a1[T1]();a1=null,T1=0}}const y4=c=>c.id==null?1/0:c.id,wl=(c,e)=>{const a=y4(c)-y4(e);if(a===0){if(c.pre&&!e.pre)return-1;if(e.pre&&!c.pre)return 1}return a};function k7(c){A6=!1,g4=!0,M2.sort(wl);try{for(K2=0;K2<M2.length;K2++){const e=M2[K2];e&&e.active!==!1&&y1(e,null,14)}}finally{K2=0,M2.length=0,b7(),g4=!1,u0=null,(M2.length||J1.length)&&k7()}}function bl(c,e,...a){if(c.isUnmounted)return;const s=c.vnode.props||a2;let n=a;const r=e.startsWith("update:"),i=r&&e.slice(7);if(i&&i in s){const h=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:d}=s[h]||a2;d&&(n=a.map(p=>H2(p)?p.trim():p)),u&&(n=a.map(Rt))}let o,t=s[o=h6(e)]||s[o=h6(Q2(e))];!t&&r&&(t=s[o=h6(s4(e))]),t&&F2(t,c,6,n);const l=s[o+"Once"];if(l){if(!c.emitted)c.emitted={};else if(c.emitted[o])return;c.emitted[o]=!0,F2(l,c,6,n)}}function x7(c,e,a=!1){const s=e.emitsCache,n=s.get(c);if(n!==void 0)return n;const r=c.emits;let i={},o=!1;if(!U(c)){const t=l=>{const h=x7(l,e,!0);h&&(o=!0,p2(i,h))};!a&&e.mixins.length&&e.mixins.forEach(t),c.extends&&t(c.extends),c.mixins&&c.mixins.forEach(t)}return!r&&!o?(r2(c)&&s.set(c,null),null):(W(r)?r.forEach(t=>i[t]=null):p2(i,r),r2(c)&&s.set(c,i),i)}function T3(c,e){return!c||!w3(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(c,e[0].toLowerCase()+e.slice(1))||K(c,s4(e))||K(c,e))}let A2=null,I3=null;function v3(c){const e=A2;return A2=c,I3=c&&c.type.__scopeId||null,e}function H0(c){I3=c}function p0(){I3=null}function T6(c,e=A2,a){if(!e||c._n)return c;const s=(...n)=>{s._d&&o5(-1);const r=v3(e);let i;try{i=c(...n)}finally{v3(r),s._d&&o5(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function d6(c){const{type:e,vnode:a,proxy:s,withProxy:n,props:r,propsOptions:[i],slots:o,attrs:t,emit:l,render:h,renderCache:u,data:d,setupState:p,ctx:w,inheritAttrs:y}=c;let T,H;const M=v3(c);try{if(a.shapeFlag&4){const N=n||s,O=N;T=Y2(h.call(O,N,u,r,p,d,w)),H=t}else{const N=e;T=Y2(N.length>1?N(r,{attrs:t,slots:o,emit:l}):N(r,null)),H=e.props?t:kl(t)}}catch(N){H4.length=0,A3(N,c,1),T=l2(_2)}let P=T;if(H&&y!==!1){const N=Object.keys(H),{shapeFlag:O}=P;N.length&&O&7&&(i&&N.some(s0)&&(H=xl(H,i)),P=L1(P,H))}return a.dirs&&(P=L1(P),P.dirs=P.dirs?P.dirs.concat(a.dirs):a.dirs),a.transition&&(P.transition=a.transition),T=P,v3(M),T}const kl=c=>{let e;for(const a in c)(a==="class"||a==="style"||w3(a))&&((e||(e={}))[a]=c[a]);return e},xl=(c,e)=>{const a={};for(const s in c)(!s0(s)||!(s.slice(9)in e))&&(a[s]=c[s]);return a};function Nl(c,e,a){const{props:s,children:n,component:r}=c,{props:i,children:o,patchFlag:t}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(a&&t>=0){if(t&1024)return!0;if(t&16)return s?X8(s,i,l):!!i;if(t&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(i[d]!==s[d]&&!T3(l,d))return!0}}}else return(n||o)&&(!o||!o.$stable)?!0:s===i?!1:s?i?X8(s,i,l):!0:!!i;return!1}function X8(c,e,a){const s=Object.keys(e);if(s.length!==Object.keys(c).length)return!0;for(let n=0;n<s.length;n++){const r=s[n];if(e[r]!==c[r]&&!T3(a,r))return!0}return!1}function Sl({vnode:c,parent:e},a){for(;e&&e.subTree===c;)(c=e.vnode).el=a,e=e.parent}const N7="components";function u1(c,e){return Tl(N7,c,!0,e)||c}const Al=Symbol.for("v-ndc");function Tl(c,e,a=!0,s=!1){const n=A2||V2;if(n){const r=n.type;if(c===N7){const o=xf(r,!1);if(o&&(o===e||o===Q2(e)||o===x3(Q2(e))))return r}const i=J8(n[c]||r[c],e)||J8(n.appContext[c],e);return!i&&s?r:i}}function J8(c,e){return c&&(c[e]||c[Q2(e)]||c[x3(Q2(e))])}const Il=c=>c.__isSuspense;function Bl(c,e){e&&e.pendingBranch?W(c)?e.effects.push(...c):e.effects.push(c):Ll(c)}function z0(c,e){return B3(c,null,e)}function Pl(c,e){return B3(c,null,{flush:"post"})}const j4={};function M1(c,e,a){return B3(c,e,a)}function B3(c,e,{immediate:a,deep:s,flush:n,onTrack:r,onTrigger:i}=a2){var o;const t=jt()===((o=V2)==null?void 0:o.scope)?V2:null;let l,h=!1,u=!1;if(N2(c)?(l=()=>c.value,h=d3(c)):X1(c)?(l=()=>c,s=!0):W(c)?(u=!0,h=c.some(N=>X1(N)||d3(N)),l=()=>c.map(N=>{if(N2(N))return N.value;if(X1(N))return P1(N);if(U(N))return y1(N,t,2)})):U(c)?e?l=()=>y1(c,t,2):l=()=>{if(!(t&&t.isUnmounted))return d&&d(),F2(c,t,3,[p])}:l=J2,e&&s){const N=l;l=()=>P1(N())}let d,p=N=>{d=M.onStop=()=>{y1(N,t,4),d=M.onStop=void 0}},w;if(L4)if(p=J2,e?a&&F2(e,t,3,[l(),u?[]:void 0,p]):l(),n==="sync"){const N=Af();w=N.__watcherHandles||(N.__watcherHandles=[])}else return J2;let y=u?new Array(c.length).fill(j4):j4;const T=()=>{if(M.active)if(e){const N=M.run();(s||h||(u?N.some((O,c2)=>E1(O,y[c2])):E1(N,y)))&&(d&&d(),F2(e,t,3,[N,y===j4?void 0:u&&y[0]===j4?[]:y,p]),y=N)}else M.run()};T.allowRecurse=!!e;let H;n==="sync"?H=T:n==="post"?H=()=>k2(T,t&&t.suspense):(T.pre=!0,t&&(T.id=t.uid),H=()=>v0(T));const M=new o0(l,H);e?a?T():y=M.run():n==="post"?k2(M.run.bind(M),t&&t.suspense):M.run();const P=()=>{M.stop(),t&&t.scope&&n0(t.scope.effects,M)};return w&&w.push(P),P}function Fl(c,e,a){const s=this.proxy,n=H2(c)?c.includes(".")?S7(s,c):()=>s[c]:c.bind(s,s);let r;U(e)?r=e:(r=e.handler,a=e);const i=V2;c4(this);const o=B3(n,r.bind(s),a);return i?c4(i):D1(),o}function S7(c,e){const a=e.split(".");return()=>{let s=c;for(let n=0;n<a.length&&s;n++)s=s[a[n]];return s}}function P1(c,e){if(!r2(c)||c.__v_skip||(e=e||new Set,e.has(c)))return c;if(e.add(c),N2(c))P1(c.value,e);else if(W(c))for(let a=0;a<c.length;a++)P1(c[a],e);else if(a7(c)||K1(c))c.forEach(a=>{P1(a,e)});else if(r7(c))for(const a in c)P1(c[a],e);return c}function H3(c,e){const a=A2;if(a===null)return c;const s=O3(a)||a.proxy,n=c.dirs||(c.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,t,l=a2]=e[r];i&&(U(i)&&(i={mounted:i,updated:i}),i.deep&&P1(o),n.push({dir:i,instance:s,value:o,oldValue:void 0,arg:t,modifiers:l}))}return c}function x1(c,e,a,s){const n=c.dirs,r=e&&e.dirs;for(let i=0;i<n.length;i++){const o=n[i];r&&(o.oldValue=r[i].value);let t=o.dir[s];t&&(n4(),F2(t,a,8,[c.el,o,c,e]),r4())}}const z1=Symbol("_leaveCb"),Y4=Symbol("_enterCb");function Rl(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return A4(()=>{c.isMounted=!0}),P7(()=>{c.isUnmounting=!0}),c}const P2=[Function,Array],A7={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:P2,onEnter:P2,onAfterEnter:P2,onEnterCancelled:P2,onBeforeLeave:P2,onLeave:P2,onAfterLeave:P2,onLeaveCancelled:P2,onBeforeAppear:P2,onAppear:P2,onAfterAppear:P2,onAppearCancelled:P2},Wl={name:"BaseTransition",props:A7,setup(c,{slots:e}){const a=G7(),s=Rl();let n;return()=>{const r=e.default&&I7(e.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const y of r)if(y.type!==_2){i=y;break}}const o=X(c),{mode:t}=o;if(s.isLeaving)return v6(i);const l=Q8(i);if(!l)return v6(i);const h=I6(l,o,s,a);B6(l,h);const u=a.subTree,d=u&&Q8(u);let p=!1;const{getTransitionKey:w}=l.type;if(w){const y=w();n===void 0?n=y:y!==n&&(n=y,p=!0)}if(d&&d.type!==_2&&(!I1(l,d)||p)){const y=I6(d,o,s,a);if(B6(d,y),t==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,a.update.active!==!1&&a.update()},v6(i);t==="in-out"&&l.type!==_2&&(y.delayLeave=(T,H,M)=>{const P=T7(s,d);P[String(d.key)]=d,T[z1]=()=>{H(),T[z1]=void 0,delete h.delayedLeave},h.delayedLeave=M})}return i}}},Dl=Wl;function T7(c,e){const{leavingVNodes:a}=c;let s=a.get(e.type);return s||(s=Object.create(null),a.set(e.type,s)),s}function I6(c,e,a,s){const{appear:n,mode:r,persisted:i=!1,onBeforeEnter:o,onEnter:t,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:u,onLeave:d,onAfterLeave:p,onLeaveCancelled:w,onBeforeAppear:y,onAppear:T,onAfterAppear:H,onAppearCancelled:M}=e,P=String(c.key),N=T7(a,c),O=(D,k)=>{D&&F2(D,s,9,k)},c2=(D,k)=>{const E=k[1];O(D,k),W(D)?D.every(i2=>i2.length<=1)&&E():D.length<=1&&E()},Z={mode:r,persisted:i,beforeEnter(D){let k=o;if(!a.isMounted)if(n)k=y||o;else return;D[z1]&&D[z1](!0);const E=N[P];E&&I1(c,E)&&E.el[z1]&&E.el[z1](),O(k,[D])},enter(D){let k=t,E=l,i2=h;if(!a.isMounted)if(n)k=T||t,E=H||l,i2=M||h;else return;let A=!1;const j=D[Y4]=u2=>{A||(A=!0,u2?O(i2,[D]):O(E,[D]),Z.delayedLeave&&Z.delayedLeave(),D[Y4]=void 0)};k?c2(k,[D,j]):j()},leave(D,k){const E=String(c.key);if(D[Y4]&&D[Y4](!0),a.isUnmounting)return k();O(u,[D]);let i2=!1;const A=D[z1]=j=>{i2||(i2=!0,k(),j?O(w,[D]):O(p,[D]),D[z1]=void 0,N[E]===c&&delete N[E])};N[E]=c,d?c2(d,[D,A]):A()},clone(D){return I6(D,e,a,s)}};return Z}function v6(c){if(P3(c))return c=L1(c),c.children=null,c}function Q8(c){return P3(c)?c.children?c.children[0]:void 0:c}function B6(c,e){c.shapeFlag&6&&c.component?B6(c.component.subTree,e):c.shapeFlag&128?(c.ssContent.transition=e.clone(c.ssContent),c.ssFallback.transition=e.clone(c.ssFallback)):c.transition=e}function I7(c,e=!1,a){let s=[],n=0;for(let r=0;r<c.length;r++){let i=c[r];const o=a==null?i.key:String(a)+String(i.key!=null?i.key:r);i.type===y2?(i.patchFlag&128&&n++,s=s.concat(I7(i.children,e,o))):(e||i.type!==_2)&&s.push(o!=null?L1(i,{key:o}):i)}if(n>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Z2(c,e){return U(c)?p2({name:c.name},e,{setup:c}):c}const o3=c=>!!c.type.__asyncLoader,P3=c=>c.type.__isKeepAlive;function El(c,e){B7(c,"a",e)}function Ol(c,e){B7(c,"da",e)}function B7(c,e,a=V2){const s=c.__wdc||(c.__wdc=()=>{let n=a;for(;n;){if(n.isDeactivated)return;n=n.parent}return c()});if(F3(e,s,a),a){let n=a.parent;for(;n&&n.parent;)P3(n.parent.vnode)&&_l(s,e,a,n),n=n.parent}}function _l(c,e,a,s){const n=F3(e,c,s,!0);W3(()=>{n0(s[e],n)},a)}function F3(c,e,a=V2,s=!1){if(a){const n=a[c]||(a[c]=[]),r=e.__weh||(e.__weh=(...i)=>{if(a.isUnmounted)return;n4(),c4(a);const o=F2(e,a,c,i);return D1(),r4(),o});return s?n.unshift(r):n.push(r),r}}const t1=c=>(e,a=V2)=>(!L4||c==="sp")&&F3(c,(...s)=>e(...s),a),R3=t1("bm"),A4=t1("m"),$l=t1("bu"),Ul=t1("u"),P7=t1("bum"),W3=t1("um"),ql=t1("sp"),Gl=t1("rtg"),jl=t1("rtc");function Yl(c,e=V2){F3("ec",c,e)}function M4(c,e,a,s){let n;const r=a&&a[s];if(W(c)||H2(c)){n=new Array(c.length);for(let i=0,o=c.length;i<o;i++)n[i]=e(c[i],i,void 0,r&&r[i])}else if(typeof c=="number"){n=new Array(c);for(let i=0;i<c;i++)n[i]=e(i+1,i,void 0,r&&r[i])}else if(r2(c))if(c[Symbol.iterator])n=Array.from(c,(i,o)=>e(i,o,void 0,r&&r[o]));else{const i=Object.keys(c);n=new Array(i.length);for(let o=0,t=i.length;o<t;o++){const l=i[o];n[o]=e(c[l],l,o,r&&r[o])}}else n=[];return a&&(a[s]=n),n}const P6=c=>c?j7(c)?O3(c)||c.proxy:P6(c.parent):null,v4=p2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>P6(c.parent),$root:c=>P6(c.root),$emit:c=>c.emit,$options:c=>V0(c),$forceUpdate:c=>c.f||(c.f=()=>v0(c.update)),$nextTick:c=>c.n||(c.n=d0.bind(c.proxy)),$watch:c=>Fl.bind(c)}),H6=(c,e)=>c!==a2&&!c.__isScriptSetup&&K(c,e),Kl={get({_:c},e){const{ctx:a,setupState:s,data:n,props:r,accessCache:i,type:o,appContext:t}=c;let l;if(e[0]!=="$"){const p=i[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return n[e];case 4:return a[e];case 3:return r[e]}else{if(H6(s,e))return i[e]=1,s[e];if(n!==a2&&K(n,e))return i[e]=2,n[e];if((l=c.propsOptions[0])&&K(l,e))return i[e]=3,r[e];if(a!==a2&&K(a,e))return i[e]=4,a[e];F6&&(i[e]=0)}}const h=v4[e];let u,d;if(h)return e==="$attrs"&&x2(c,"get",e),h(c);if((u=o.__cssModules)&&(u=u[e]))return u;if(a!==a2&&K(a,e))return i[e]=4,a[e];if(d=t.config.globalProperties,K(d,e))return d[e]},set({_:c},e,a){const{data:s,setupState:n,ctx:r}=c;return H6(n,e)?(n[e]=a,!0):s!==a2&&K(s,e)?(s[e]=a,!0):K(c.props,e)||e[0]==="$"&&e.slice(1)in c?!1:(r[e]=a,!0)},has({_:{data:c,setupState:e,accessCache:a,ctx:s,appContext:n,propsOptions:r}},i){let o;return!!a[i]||c!==a2&&K(c,i)||H6(e,i)||(o=r[0])&&K(o,i)||K(s,i)||K(v4,i)||K(n.config.globalProperties,i)},defineProperty(c,e,a){return a.get!=null?c._.accessCache[e]=0:K(a,"value")&&this.set(c,e,a.value,null),Reflect.defineProperty(c,e,a)}};function Z8(c){return W(c)?c.reduce((e,a)=>(e[a]=null,e),{}):c}let F6=!0;function Xl(c){const e=V0(c),a=c.proxy,s=c.ctx;F6=!1,e.beforeCreate&&c5(e.beforeCreate,c,"bc");const{data:n,computed:r,methods:i,watch:o,provide:t,inject:l,created:h,beforeMount:u,mounted:d,beforeUpdate:p,updated:w,activated:y,deactivated:T,beforeDestroy:H,beforeUnmount:M,destroyed:P,unmounted:N,render:O,renderTracked:c2,renderTriggered:Z,errorCaptured:D,serverPrefetch:k,expose:E,inheritAttrs:i2,components:A,directives:j,filters:u2}=e;if(l&&Jl(l,s,null),i)for(const o2 in i){const J=i[o2];U(J)&&(s[o2]=J.bind(a))}if(n){const o2=n.call(a,a);r2(o2)&&(c.data=f0(o2))}if(F6=!0,r)for(const o2 in r){const J=r[o2],U2=U(J)?J.bind(a,a):U(J.get)?J.get.bind(a,a):J2,c1=!U(J)&&U(J.set)?J.set.bind(a):J2,e1=G({get:U2,set:c1});Object.defineProperty(s,o2,{enumerable:!0,configurable:!0,get:()=>e1.value,set:C2=>e1.value=C2})}if(o)for(const o2 in o)F7(o[o2],s,a,o2);if(t){const o2=U(t)?t.call(a):t;Reflect.ownKeys(o2).forEach(J=>{sf(J,o2[J])})}h&&c5(h,c,"c");function h2(o2,J){W(J)?J.forEach(U2=>o2(U2.bind(a))):J&&o2(J.bind(a))}if(h2(R3,u),h2(A4,d),h2($l,p),h2(Ul,w),h2(El,y),h2(Ol,T),h2(Yl,D),h2(jl,c2),h2(Gl,Z),h2(P7,M),h2(W3,N),h2(ql,k),W(E))if(E.length){const o2=c.exposed||(c.exposed={});E.forEach(J=>{Object.defineProperty(o2,J,{get:()=>a[J],set:U2=>a[J]=U2})})}else c.exposed||(c.exposed={});O&&c.render===J2&&(c.render=O),i2!=null&&(c.inheritAttrs=i2),A&&(c.components=A),j&&(c.directives=j)}function Jl(c,e,a=J2){W(c)&&(c=R6(c));for(const s in c){const n=c[s];let r;r2(n)?"default"in n?r=t3(n.from||s,n.default,!0):r=t3(n.from||s):r=t3(n),N2(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):e[s]=r}}function c5(c,e,a){F2(W(c)?c.map(s=>s.bind(e.proxy)):c.bind(e.proxy),e,a)}function F7(c,e,a,s){const n=s.includes(".")?S7(a,s):()=>a[s];if(H2(c)){const r=e[c];U(r)&&M1(n,r)}else if(U(c))M1(n,c.bind(a));else if(r2(c))if(W(c))c.forEach(r=>F7(r,e,a,s));else{const r=U(c.handler)?c.handler.bind(a):e[c.handler];U(r)&&M1(n,r,c)}}function V0(c){const e=c.type,{mixins:a,extends:s}=e,{mixins:n,optionsCache:r,config:{optionMergeStrategies:i}}=c.appContext,o=r.get(e);let t;return o?t=o:!n.length&&!a&&!s?t=e:(t={},n.length&&n.forEach(l=>p3(t,l,i,!0)),p3(t,e,i)),r2(e)&&r.set(e,t),t}function p3(c,e,a,s=!1){const{mixins:n,extends:r}=e;r&&p3(c,r,a,!0),n&&n.forEach(i=>p3(c,i,a,!0));for(const i in e)if(!(s&&i==="expose")){const o=Ql[i]||a&&a[i];c[i]=o?o(c[i],e[i]):e[i]}return c}const Ql={data:e5,props:a5,emits:a5,methods:u4,computed:u4,beforeCreate:L2,created:L2,beforeMount:L2,mounted:L2,beforeUpdate:L2,updated:L2,beforeDestroy:L2,beforeUnmount:L2,destroyed:L2,unmounted:L2,activated:L2,deactivated:L2,errorCaptured:L2,serverPrefetch:L2,components:u4,directives:u4,watch:cf,provide:e5,inject:Zl};function e5(c,e){return e?c?function(){return p2(U(c)?c.call(this,this):c,U(e)?e.call(this,this):e)}:e:c}function Zl(c,e){return u4(R6(c),R6(e))}function R6(c){if(W(c)){const e={};for(let a=0;a<c.length;a++)e[c[a]]=c[a];return e}return c}function L2(c,e){return c?[...new Set([].concat(c,e))]:e}function u4(c,e){return c?p2(Object.create(null),c,e):e}function a5(c,e){return c?W(c)&&W(e)?[...new Set([...c,...e])]:p2(Object.create(null),Z8(c),Z8(e??{})):e}function cf(c,e){if(!c)return e;if(!e)return c;const a=p2(Object.create(null),c);for(const s in e)a[s]=L2(c[s],e[s]);return a}function R7(){return{app:null,config:{isNativeTag:Tt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ef=0;function af(c,e){return function(s,n=null){U(s)||(s=p2({},s)),n!=null&&!r2(n)&&(n=null);const r=R7(),i=new WeakSet;let o=!1;const t=r.app={_uid:ef++,_component:s,_props:n,_container:null,_context:r,_instance:null,version:Tf,get config(){return r.config},set config(l){},use(l,...h){return i.has(l)||(l&&U(l.install)?(i.add(l),l.install(t,...h)):U(l)&&(i.add(l),l(t,...h))),t},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),t},component(l,h){return h?(r.components[l]=h,t):r.components[l]},directive(l,h){return h?(r.directives[l]=h,t):r.directives[l]},mount(l,h,u){if(!o){const d=l2(s,n);return d.appContext=r,h&&e?e(d,l):c(d,l,u),o=!0,t._container=l,l.__vue_app__=t,O3(d.component)||d.component.proxy}},unmount(){o&&(c(null,t._container),delete t._container.__vue_app__)},provide(l,h){return r.provides[l]=h,t},runWithContext(l){z3=t;try{return l()}finally{z3=null}}};return t}}let z3=null;function sf(c,e){if(V2){let a=V2.provides;const s=V2.parent&&V2.parent.provides;s===a&&(a=V2.provides=Object.create(s)),a[c]=e}}function t3(c,e,a=!1){const s=V2||A2;if(s||z3){const n=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:z3._context.provides;if(n&&c in n)return n[c];if(arguments.length>1)return a&&U(e)?e.call(s&&s.proxy):e}}function nf(c,e,a,s=!1){const n={},r={};u3(r,E3,1),c.propsDefaults=Object.create(null),W7(c,e,n,r);for(const i in c.propsOptions[0])i in n||(n[i]=void 0);a?c.props=s?n:dl(n):c.type.props?c.props=n:c.props=r,c.attrs=r}function rf(c,e,a,s){const{props:n,attrs:r,vnode:{patchFlag:i}}=c,o=X(n),[t]=c.propsOptions;let l=!1;if((s||i>0)&&!(i&16)){if(i&8){const h=c.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(T3(c.emitsOptions,d))continue;const p=e[d];if(t)if(K(r,d))p!==r[d]&&(r[d]=p,l=!0);else{const w=Q2(d);n[w]=W6(t,o,w,p,c,!1)}else p!==r[d]&&(r[d]=p,l=!0)}}}else{W7(c,e,n,r)&&(l=!0);let h;for(const u in o)(!e||!K(e,u)&&((h=s4(u))===u||!K(e,h)))&&(t?a&&(a[u]!==void 0||a[h]!==void 0)&&(n[u]=W6(t,o,u,void 0,c,!0)):delete n[u]);if(r!==o)for(const u in r)(!e||!K(e,u))&&(delete r[u],l=!0)}l&&n1(c,"set","$attrs")}function W7(c,e,a,s){const[n,r]=c.propsOptions;let i=!1,o;if(e)for(let t in e){if(i3(t))continue;const l=e[t];let h;n&&K(n,h=Q2(t))?!r||!r.includes(h)?a[h]=l:(o||(o={}))[h]=l:T3(c.emitsOptions,t)||(!(t in s)||l!==s[t])&&(s[t]=l,i=!0)}if(r){const t=X(a),l=o||a2;for(let h=0;h<r.length;h++){const u=r[h];a[u]=W6(n,t,u,l[u],c,!K(l,u))}}return i}function W6(c,e,a,s,n,r){const i=c[a];if(i!=null){const o=K(i,"default");if(o&&s===void 0){const t=i.default;if(i.type!==Function&&!i.skipFactory&&U(t)){const{propsDefaults:l}=n;a in l?s=l[a]:(c4(n),s=l[a]=t.call(null,e),D1())}else s=t}i[0]&&(r&&!o?s=!1:i[1]&&(s===""||s===s4(a))&&(s=!0))}return s}function D7(c,e,a=!1){const s=e.propsCache,n=s.get(c);if(n)return n;const r=c.props,i={},o=[];let t=!1;if(!U(c)){const h=u=>{t=!0;const[d,p]=D7(u,e,!0);p2(i,d),p&&o.push(...p)};!a&&e.mixins.length&&e.mixins.forEach(h),c.extends&&h(c.extends),c.mixins&&c.mixins.forEach(h)}if(!r&&!t)return r2(c)&&s.set(c,Y1),Y1;if(W(r))for(let h=0;h<r.length;h++){const u=Q2(r[h]);s5(u)&&(i[u]=a2)}else if(r)for(const h in r){const u=Q2(h);if(s5(u)){const d=r[h],p=i[u]=W(d)||U(d)?{type:d}:p2({},d);if(p){const w=i5(Boolean,p.type),y=i5(String,p.type);p[0]=w>-1,p[1]=y<0||w<y,(w>-1||K(p,"default"))&&o.push(u)}}}const l=[i,o];return r2(c)&&s.set(c,l),l}function s5(c){return c[0]!=="$"}function n5(c){const e=c&&c.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:c===null?"null":""}function r5(c,e){return n5(c)===n5(e)}function i5(c,e){return W(e)?e.findIndex(a=>r5(a,c)):U(e)&&r5(e,c)?0:-1}const E7=c=>c[0]==="_"||c==="$stable",g0=c=>W(c)?c.map(Y2):[Y2(c)],of=(c,e,a)=>{if(e._n)return e;const s=T6((...n)=>g0(e(...n)),a);return s._c=!1,s},O7=(c,e,a)=>{const s=c._ctx;for(const n in c){if(E7(n))continue;const r=c[n];if(U(r))e[n]=of(n,r,s);else if(r!=null){const i=g0(r);e[n]=()=>i}}},_7=(c,e)=>{const a=g0(e);c.slots.default=()=>a},tf=(c,e)=>{if(c.vnode.shapeFlag&32){const a=e._;a?(c.slots=X(e),u3(e,"_",a)):O7(e,c.slots={})}else c.slots={},e&&_7(c,e);u3(c.slots,E3,1)},lf=(c,e,a)=>{const{vnode:s,slots:n}=c;let r=!0,i=a2;if(s.shapeFlag&32){const o=e._;o?a&&o===1?r=!1:(p2(n,e),!a&&o===1&&delete n._):(r=!e.$stable,O7(e,n)),i=e}else e&&(_7(c,e),i={default:1});if(r)for(const o in n)!E7(o)&&i[o]==null&&delete n[o]};function D6(c,e,a,s,n=!1){if(W(c)){c.forEach((d,p)=>D6(d,e&&(W(e)?e[p]:e),a,s,n));return}if(o3(s)&&!n)return;const r=s.shapeFlag&4?O3(s.component)||s.component.proxy:s.el,i=n?null:r,{i:o,r:t}=c,l=e&&e.r,h=o.refs===a2?o.refs={}:o.refs,u=o.setupState;if(l!=null&&l!==t&&(H2(l)?(h[l]=null,K(u,l)&&(u[l]=null)):N2(l)&&(l.value=null)),U(t))y1(t,o,12,[i,h]);else{const d=H2(t),p=N2(t);if(d||p){const w=()=>{if(c.f){const y=d?K(u,t)?u[t]:h[t]:t.value;n?W(y)&&n0(y,r):W(y)?y.includes(r)||y.push(r):d?(h[t]=[r],K(u,t)&&(u[t]=h[t])):(t.value=[r],c.k&&(h[c.k]=t.value))}else d?(h[t]=i,K(u,t)&&(u[t]=i)):p&&(t.value=i,c.k&&(h[c.k]=i))};i?(w.id=-1,k2(w,a)):w()}}}const k2=Bl;function ff(c){return hf(c)}function hf(c,e){const a=b6();a.__VUE__=!0;const{insert:s,remove:n,patchProp:r,createElement:i,createText:o,createComment:t,setText:l,setElementText:h,parentNode:u,nextSibling:d,setScopeId:p=J2,insertStaticContent:w}=c,y=(f,m,v,z=null,V=null,C=null,x=!1,L=null,b=!!m.dynamicChildren)=>{if(f===m)return;f&&!I1(f,m)&&(z=$1(f),C2(f,V,C,!0),f=null),m.patchFlag===-2&&(b=!1,m.dynamicChildren=null);const{type:g,ref:F,shapeFlag:I}=m;switch(g){case D3:T(f,m,v,z);break;case _2:H(f,m,v,z);break;case l3:f==null&&M(m,v,z,x);break;case y2:A(f,m,v,z,V,C,x,L,b);break;default:I&1?O(f,m,v,z,V,C,x,L,b):I&6?j(f,m,v,z,V,C,x,L,b):(I&64||I&128)&&g.process(f,m,v,z,V,C,x,L,b,h1)}F!=null&&V&&D6(F,f&&f.ref,C,m||f,!m)},T=(f,m,v,z)=>{if(f==null)s(m.el=o(m.children),v,z);else{const V=m.el=f.el;m.children!==f.children&&l(V,m.children)}},H=(f,m,v,z)=>{f==null?s(m.el=t(m.children||""),v,z):m.el=f.el},M=(f,m,v,z)=>{[f.el,f.anchor]=w(f.children,m,v,z,f.el,f.anchor)},P=({el:f,anchor:m},v,z)=>{let V;for(;f&&f!==m;)V=d(f),s(f,v,z),f=V;s(m,v,z)},N=({el:f,anchor:m})=>{let v;for(;f&&f!==m;)v=d(f),n(f),f=v;n(m)},O=(f,m,v,z,V,C,x,L,b)=>{x=x||m.type==="svg",f==null?c2(m,v,z,V,C,x,L,b):k(f,m,V,C,x,L,b)},c2=(f,m,v,z,V,C,x,L)=>{let b,g;const{type:F,props:I,shapeFlag:R,transition:_,dirs:Y}=f;if(b=f.el=i(f.type,C,I&&I.is,I),R&8?h(b,f.children):R&16&&D(f.children,b,null,z,V,C&&F!=="foreignObject",x,L),Y&&x1(f,null,z,"created"),Z(b,f,f.scopeId,x,z),I){for(const Q in I)Q!=="value"&&!i3(Q)&&r(b,Q,null,I[Q],C,f.children,z,V,w2);"value"in I&&r(b,"value",null,I.value),(g=I.onVnodeBeforeMount)&&G2(g,z,f)}Y&&x1(f,null,z,"beforeMount");const e2=mf(V,_);e2&&_.beforeEnter(b),s(b,m,v),((g=I&&I.onVnodeMounted)||e2||Y)&&k2(()=>{g&&G2(g,z,f),e2&&_.enter(b),Y&&x1(f,null,z,"mounted")},V)},Z=(f,m,v,z,V)=>{if(v&&p(f,v),z)for(let C=0;C<z.length;C++)p(f,z[C]);if(V){let C=V.subTree;if(m===C){const x=V.vnode;Z(f,x,x.scopeId,x.slotScopeIds,V.parent)}}},D=(f,m,v,z,V,C,x,L,b=0)=>{for(let g=b;g<f.length;g++){const F=f[g]=L?V1(f[g]):Y2(f[g]);y(null,F,m,v,z,V,C,x,L)}},k=(f,m,v,z,V,C,x)=>{const L=m.el=f.el;let{patchFlag:b,dynamicChildren:g,dirs:F}=m;b|=f.patchFlag&16;const I=f.props||a2,R=m.props||a2;let _;v&&N1(v,!1),(_=R.onVnodeBeforeUpdate)&&G2(_,v,m,f),F&&x1(m,f,v,"beforeUpdate"),v&&N1(v,!0);const Y=V&&m.type!=="foreignObject";if(g?E(f.dynamicChildren,g,L,v,z,Y,C):x||J(f,m,L,null,v,z,Y,C,!1),b>0){if(b&16)i2(L,m,I,R,v,z,V);else if(b&2&&I.class!==R.class&&r(L,"class",null,R.class,V),b&4&&r(L,"style",I.style,R.style,V),b&8){const e2=m.dynamicProps;for(let Q=0;Q<e2.length;Q++){const d2=e2[Q],R2=I[d2],U1=R[d2];(U1!==R2||d2==="value")&&r(L,d2,R2,U1,V,f.children,v,z,w2)}}b&1&&f.children!==m.children&&h(L,m.children)}else!x&&g==null&&i2(L,m,I,R,v,z,V);((_=R.onVnodeUpdated)||F)&&k2(()=>{_&&G2(_,v,m,f),F&&x1(m,f,v,"updated")},z)},E=(f,m,v,z,V,C,x)=>{for(let L=0;L<m.length;L++){const b=f[L],g=m[L],F=b.el&&(b.type===y2||!I1(b,g)||b.shapeFlag&70)?u(b.el):v;y(b,g,F,null,z,V,C,x,!0)}},i2=(f,m,v,z,V,C,x)=>{if(v!==z){if(v!==a2)for(const L in v)!i3(L)&&!(L in z)&&r(f,L,v[L],null,x,m.children,V,C,w2);for(const L in z){if(i3(L))continue;const b=z[L],g=v[L];b!==g&&L!=="value"&&r(f,L,g,b,x,m.children,V,C,w2)}"value"in z&&r(f,"value",v.value,z.value)}},A=(f,m,v,z,V,C,x,L,b)=>{const g=m.el=f?f.el:o(""),F=m.anchor=f?f.anchor:o("");let{patchFlag:I,dynamicChildren:R,slotScopeIds:_}=m;_&&(L=L?L.concat(_):_),f==null?(s(g,v,z),s(F,v,z),D(m.children,v,F,V,C,x,L,b)):I>0&&I&64&&R&&f.dynamicChildren?(E(f.dynamicChildren,R,v,V,C,x,L),(m.key!=null||V&&m===V.subTree)&&$7(f,m,!0)):J(f,m,v,F,V,C,x,L,b)},j=(f,m,v,z,V,C,x,L,b)=>{m.slotScopeIds=L,f==null?m.shapeFlag&512?V.ctx.activate(m,v,z,x,b):u2(m,v,z,V,C,x,b):$2(f,m,b)},u2=(f,m,v,z,V,C,x)=>{const L=f.component=Cf(f,z,V);if(P3(f)&&(L.ctx.renderer=h1),Lf(L),L.asyncDep){if(V&&V.registerDep(L,h2),!f.el){const b=L.subTree=l2(_2);H(null,b,m,v)}return}h2(L,f,m,v,V,C,x)},$2=(f,m,v)=>{const z=m.component=f.component;if(Nl(f,m,v))if(z.asyncDep&&!z.asyncResolved){o2(z,m,v);return}else z.next=m,Cl(z.update),z.update();else m.el=f.el,z.vnode=m},h2=(f,m,v,z,V,C,x)=>{const L=()=>{if(f.isMounted){let{next:F,bu:I,u:R,parent:_,vnode:Y}=f,e2=F,Q;N1(f,!1),F?(F.el=Y.el,o2(f,F,x)):F=Y,I&&m6(I),(Q=F.props&&F.props.onVnodeBeforeUpdate)&&G2(Q,_,F,Y),N1(f,!0);const d2=d6(f),R2=f.subTree;f.subTree=d2,y(R2,d2,u(R2.el),$1(R2),f,V,C),F.el=d2.el,e2===null&&Sl(f,d2.el),R&&k2(R,V),(Q=F.props&&F.props.onVnodeUpdated)&&k2(()=>G2(Q,_,F,Y),V)}else{let F;const{el:I,props:R}=m,{bm:_,m:Y,parent:e2}=f,Q=o3(m);if(N1(f,!1),_&&m6(_),!Q&&(F=R&&R.onVnodeBeforeMount)&&G2(F,e2,m),N1(f,!0),I&&q){const d2=()=>{f.subTree=d6(f),q(I,f.subTree,f,V,null)};Q?m.type.__asyncLoader().then(()=>!f.isUnmounted&&d2()):d2()}else{const d2=f.subTree=d6(f);y(null,d2,v,z,f,V,C),m.el=d2.el}if(Y&&k2(Y,V),!Q&&(F=R&&R.onVnodeMounted)){const d2=m;k2(()=>G2(F,e2,d2),V)}(m.shapeFlag&256||e2&&o3(e2.vnode)&&e2.vnode.shapeFlag&256)&&f.a&&k2(f.a,V),f.isMounted=!0,m=v=z=null}},b=f.effect=new o0(L,()=>v0(g),f.scope),g=f.update=()=>b.run();g.id=f.uid,N1(f,!0),g()},o2=(f,m,v)=>{m.component=f;const z=f.vnode.props;f.vnode=m,f.next=null,rf(f,m.props,z,v),lf(f,m.children,v),n4(),K8(f),r4()},J=(f,m,v,z,V,C,x,L,b=!1)=>{const g=f&&f.children,F=f?f.shapeFlag:0,I=m.children,{patchFlag:R,shapeFlag:_}=m;if(R>0){if(R&128){c1(g,I,v,z,V,C,x,L,b);return}else if(R&256){U2(g,I,v,z,V,C,x,L,b);return}}_&8?(F&16&&w2(g,V,C),I!==g&&h(v,I)):F&16?_&16?c1(g,I,v,z,V,C,x,L,b):w2(g,V,C,!0):(F&8&&h(v,""),_&16&&D(I,v,z,V,C,x,L,b))},U2=(f,m,v,z,V,C,x,L,b)=>{f=f||Y1,m=m||Y1;const g=f.length,F=m.length,I=Math.min(g,F);let R;for(R=0;R<I;R++){const _=m[R]=b?V1(m[R]):Y2(m[R]);y(f[R],_,v,null,V,C,x,L,b)}g>F?w2(f,V,C,!0,!1,I):D(m,v,z,V,C,x,L,b,I)},c1=(f,m,v,z,V,C,x,L,b)=>{let g=0;const F=m.length;let I=f.length-1,R=F-1;for(;g<=I&&g<=R;){const _=f[g],Y=m[g]=b?V1(m[g]):Y2(m[g]);if(I1(_,Y))y(_,Y,v,null,V,C,x,L,b);else break;g++}for(;g<=I&&g<=R;){const _=f[I],Y=m[R]=b?V1(m[R]):Y2(m[R]);if(I1(_,Y))y(_,Y,v,null,V,C,x,L,b);else break;I--,R--}if(g>I){if(g<=R){const _=R+1,Y=_<F?m[_].el:z;for(;g<=R;)y(null,m[g]=b?V1(m[g]):Y2(m[g]),v,Y,V,C,x,L,b),g++}}else if(g>R)for(;g<=I;)C2(f[g],V,C,!0),g++;else{const _=g,Y=g,e2=new Map;for(g=Y;g<=R;g++){const S2=m[g]=b?V1(m[g]):Y2(m[g]);S2.key!=null&&e2.set(S2.key,g)}let Q,d2=0;const R2=R-Y+1;let U1=!1,W8=0;const t4=new Array(R2);for(g=0;g<R2;g++)t4[g]=0;for(g=_;g<=I;g++){const S2=f[g];if(d2>=R2){C2(S2,V,C,!0);continue}let q2;if(S2.key!=null)q2=e2.get(S2.key);else for(Q=Y;Q<=R;Q++)if(t4[Q-Y]===0&&I1(S2,m[Q])){q2=Q;break}q2===void 0?C2(S2,V,C,!0):(t4[q2-Y]=g+1,q2>=W8?W8=q2:U1=!0,y(S2,m[q2],v,null,V,C,x,L,b),d2++)}const D8=U1?uf(t4):Y1;for(Q=D8.length-1,g=R2-1;g>=0;g--){const S2=Y+g,q2=m[S2],E8=S2+1<F?m[S2+1].el:z;t4[g]===0?y(null,q2,v,E8,V,C,x,L,b):U1&&(Q<0||g!==D8[Q]?e1(q2,v,E8,2):Q--)}}},e1=(f,m,v,z,V=null)=>{const{el:C,type:x,transition:L,children:b,shapeFlag:g}=f;if(g&6){e1(f.component.subTree,m,v,z);return}if(g&128){f.suspense.move(m,v,z);return}if(g&64){x.move(f,m,v,h1);return}if(x===y2){s(C,m,v);for(let I=0;I<b.length;I++)e1(b[I],m,v,z);s(f.anchor,m,v);return}if(x===l3){P(f,m,v);return}if(z!==2&&g&1&&L)if(z===0)L.beforeEnter(C),s(C,m,v),k2(()=>L.enter(C),V);else{const{leave:I,delayLeave:R,afterLeave:_}=L,Y=()=>s(C,m,v),e2=()=>{I(C,()=>{Y(),_&&_()})};R?R(C,Y,e2):e2()}else s(C,m,v)},C2=(f,m,v,z=!1,V=!1)=>{const{type:C,props:x,ref:L,children:b,dynamicChildren:g,shapeFlag:F,patchFlag:I,dirs:R}=f;if(L!=null&&D6(L,null,v,f,!0),F&256){m.ctx.deactivate(f);return}const _=F&1&&R,Y=!o3(f);let e2;if(Y&&(e2=x&&x.onVnodeBeforeUnmount)&&G2(e2,m,f),F&6)f6(f.component,v,z);else{if(F&128){f.suspense.unmount(v,z);return}_&&x1(f,null,m,"beforeUnmount"),F&64?f.type.remove(f,m,v,V,h1,z):g&&(C!==y2||I>0&&I&64)?w2(g,m,v,!1,!0):(C===y2&&I&384||!V&&F&16)&&w2(b,m,v),z&&E4(f)}(Y&&(e2=x&&x.onVnodeUnmounted)||_)&&k2(()=>{e2&&G2(e2,m,f),_&&x1(f,null,m,"unmounted")},v)},E4=f=>{const{type:m,el:v,anchor:z,transition:V}=f;if(m===y2){l6(v,z);return}if(m===l3){N(f);return}const C=()=>{n(v),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(f.shapeFlag&1&&V&&!V.persisted){const{leave:x,delayLeave:L}=V,b=()=>x(v,C);L?L(f.el,C,b):b()}else C()},l6=(f,m)=>{let v;for(;f!==m;)v=d(f),n(f),f=v;n(m)},f6=(f,m,v)=>{const{bum:z,scope:V,update:C,subTree:x,um:L}=f;z&&m6(z),V.stop(),C&&(C.active=!1,C2(x,f,m,v)),L&&k2(L,m),k2(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},w2=(f,m,v,z=!1,V=!1,C=0)=>{for(let x=C;x<f.length;x++)C2(f[x],m,v,z,V)},$1=f=>f.shapeFlag&6?$1(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),O4=(f,m,v)=>{f==null?m._vnode&&C2(m._vnode,null,null,!0):y(m._vnode||null,f,m,null,null,null,v),K8(),b7(),m._vnode=f},h1={p:y,um:C2,m:e1,r:E4,mt:u2,mc:D,pc:J,pbc:E,n:$1,o:c};let o4,q;return e&&([o4,q]=e(h1)),{render:O4,hydrate:o4,createApp:af(O4,o4)}}function N1({effect:c,update:e},a){c.allowRecurse=e.allowRecurse=a}function mf(c,e){return(!c||c&&!c.pendingBranch)&&e&&!e.persisted}function $7(c,e,a=!1){const s=c.children,n=e.children;if(W(s)&&W(n))for(let r=0;r<s.length;r++){const i=s[r];let o=n[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=n[r]=V1(n[r]),o.el=i.el),a||$7(i,o)),o.type===D3&&(o.el=i.el)}}function uf(c){const e=c.slice(),a=[0];let s,n,r,i,o;const t=c.length;for(s=0;s<t;s++){const l=c[s];if(l!==0){if(n=a[a.length-1],c[n]<l){e[s]=n,a.push(s);continue}for(r=0,i=a.length-1;r<i;)o=r+i>>1,c[a[o]]<l?r=o+1:i=o;l<c[a[r]]&&(r>0&&(e[s]=a[r-1]),a[r]=s)}}for(r=a.length,i=a[r-1];r-- >0;)a[r]=i,i=e[i];return a}const df=c=>c.__isTeleport,y2=Symbol.for("v-fgt"),D3=Symbol.for("v-txt"),_2=Symbol.for("v-cmt"),l3=Symbol.for("v-stc"),H4=[];let E2=null;function m2(c=!1){H4.push(E2=c?null:[])}function vf(){H4.pop(),E2=H4[H4.length-1]||null}let C4=1;function o5(c){C4+=c}function U7(c){return c.dynamicChildren=C4>0?E2||Y1:null,vf(),C4>0&&E2&&E2.push(c),c}function v2(c,e,a,s,n,r){return U7($(c,e,a,s,n,r,!0))}function Hf(c,e,a,s,n){return U7(l2(c,e,a,s,n,!0))}function E6(c){return c?c.__v_isVNode===!0:!1}function I1(c,e){return c.type===e.type&&c.key===e.key}const E3="__vInternal",q7=({key:c})=>c??null,f3=({ref:c,ref_key:e,ref_for:a})=>(typeof c=="number"&&(c=""+c),c!=null?H2(c)||N2(c)||U(c)?{i:A2,r:c,k:e,f:!!a}:c:null);function $(c,e=null,a=null,s=0,n=null,r=c===y2?0:1,i=!1,o=!1){const t={__v_isVNode:!0,__v_skip:!0,type:c,props:e,key:e&&q7(e),ref:e&&f3(e),scopeId:I3,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:A2};return o?(M0(t,a),r&128&&c.normalize(t)):a&&(t.shapeFlag|=H2(a)?8:16),C4>0&&!i&&E2&&(t.patchFlag>0||r&6)&&t.patchFlag!==32&&E2.push(t),t}const l2=pf;function pf(c,e=null,a=null,s=0,n=null,r=!1){if((!c||c===Al)&&(c=_2),E6(c)){const o=L1(c,e,!0);return a&&M0(o,a),C4>0&&!r&&E2&&(o.shapeFlag&6?E2[E2.indexOf(c)]=o:E2.push(o)),o.patchFlag|=-2,o}if(Nf(c)&&(c=c.__vccOpts),e){e=zf(e);let{class:o,style:t}=e;o&&!H2(o)&&(e.class=T2(o)),r2(t)&&(V7(t)&&!W(t)&&(t=p2({},t)),e.style=N3(t))}const i=H2(c)?1:Il(c)?128:df(c)?64:r2(c)?4:U(c)?2:0;return $(c,e,a,s,n,i,r,!0)}function zf(c){return c?V7(c)||E3 in c?p2({},c):c:null}function L1(c,e,a=!1){const{props:s,ref:n,patchFlag:r,children:i}=c,o=e?gf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:o,key:o&&q7(o),ref:e&&e.ref?a&&n?W(n)?n.concat(f3(e)):[n,f3(e)]:f3(e):n,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:e&&c.type!==y2?r===-1?16:r|16:r,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&L1(c.ssContent),ssFallback:c.ssFallback&&L1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function y0(c=" ",e=0){return l2(D3,null,c,e)}function Vf(c="",e=!1){return e?(m2(),Hf(_2,null,c)):l2(_2,null,c)}function Y2(c){return c==null||typeof c=="boolean"?l2(_2):W(c)?l2(y2,null,c.slice()):typeof c=="object"?V1(c):l2(D3,null,String(c))}function V1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:L1(c)}function M0(c,e){let a=0;const{shapeFlag:s}=c;if(e==null)e=null;else if(W(e))a=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),M0(c,n()),n._c&&(n._d=!0));return}else{a=32;const n=e._;!n&&!(E3 in e)?e._ctx=A2:n===3&&A2&&(A2.slots._===1?e._=1:(e._=2,c.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:A2},a=32):(e=String(e),s&64?(a=16,e=[y0(e)]):a=8);c.children=e,c.shapeFlag|=a}function gf(...c){const e={};for(let a=0;a<c.length;a++){const s=c[a];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=T2([e.class,s.class]));else if(n==="style")e.style=N3([e.style,s.style]);else if(w3(n)){const r=e[n],i=s[n];i&&r!==i&&!(W(r)&&r.includes(i))&&(e[n]=r?[].concat(r,i):i)}else n!==""&&(e[n]=s[n])}return e}function G2(c,e,a,s=null){F2(c,e,7,[a,s])}const yf=R7();let Mf=0;function Cf(c,e,a){const s=c.type,n=(e?e.appContext:c.appContext)||yf,r={uid:Mf++,vnode:c,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new qt(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:D7(s,n),emitsOptions:x7(s,n),emit:null,emitted:null,propsDefaults:a2,inheritAttrs:s.inheritAttrs,ctx:a2,data:a2,props:a2,attrs:a2,slots:a2,refs:a2,setupState:a2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=bl.bind(null,r),c.ce&&c.ce(r),r}let V2=null;const G7=()=>V2||A2;let C0,q1,t5="__VUE_INSTANCE_SETTERS__";(q1=b6()[t5])||(q1=b6()[t5]=[]),q1.push(c=>V2=c),C0=c=>{q1.length>1?q1.forEach(e=>e(c)):q1[0](c)};const c4=c=>{C0(c),c.scope.on()},D1=()=>{V2&&V2.scope.off(),C0(null)};function j7(c){return c.vnode.shapeFlag&4}let L4=!1;function Lf(c,e=!1){L4=e;const{props:a,children:s}=c.vnode,n=j7(c);nf(c,a,n,e),tf(c,s);const r=n?wf(c,e):void 0;return L4=!1,r}function wf(c,e){const a=c.type;c.accessCache=Object.create(null),c.proxy=g7(new Proxy(c.ctx,Kl));const{setup:s}=a;if(s){const n=c.setupContext=s.length>1?kf(c):null;c4(c),n4();const r=y1(s,c,0,[c.props,n]);if(r4(),D1(),s7(r)){if(r.then(D1,D1),e)return r.then(i=>{l5(c,i,e)}).catch(i=>{A3(i,c,0)});c.asyncDep=r}else l5(c,r,e)}else Y7(c,e)}function l5(c,e,a){U(e)?c.type.__ssrInlineRender?c.ssrRender=e:c.render=e:r2(e)&&(c.setupState=C7(e)),Y7(c,a)}let f5;function Y7(c,e,a){const s=c.type;if(!c.render){if(!e&&f5&&!s.render){const n=s.template||V0(c).template;if(n){const{isCustomElement:r,compilerOptions:i}=c.appContext.config,{delimiters:o,compilerOptions:t}=s,l=p2(p2({isCustomElement:r,delimiters:o},i),t);s.render=f5(n,l)}}c.render=s.render||J2}{c4(c),n4();try{Xl(c)}finally{r4(),D1()}}}function bf(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(e,a){return x2(c,"get","$attrs"),e[a]}}))}function kf(c){const e=a=>{c.exposed=a||{}};return{get attrs(){return bf(c)},slots:c.slots,emit:c.emit,expose:e}}function O3(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(C7(g7(c.exposed)),{get(e,a){if(a in e)return e[a];if(a in v4)return v4[a](c)},has(e,a){return a in e||a in v4}}))}function xf(c,e=!0){return U(c)?c.displayName||c.name:c.name||e&&c.__name}function Nf(c){return U(c)&&"__vccOpts"in c}const G=(c,e)=>gl(c,e,L4);function K7(c,e,a){const s=arguments.length;return s===2?r2(e)&&!W(e)?E6(e)?l2(c,null,[e]):l2(c,e):l2(c,null,e):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&E6(a)&&(a=[a]),l2(c,e,a))}const Sf=Symbol.for("v-scx"),Af=()=>t3(Sf),Tf="3.3.13",If="http://www.w3.org/2000/svg",B1=typeof document<"u"?document:null,h5=B1&&B1.createElement("template"),Bf={insert:(c,e,a)=>{e.insertBefore(c,a||null)},remove:c=>{const e=c.parentNode;e&&e.removeChild(c)},createElement:(c,e,a,s)=>{const n=e?B1.createElementNS(If,c):B1.createElement(c,a?{is:a}:void 0);return c==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:c=>B1.createTextNode(c),createComment:c=>B1.createComment(c),setText:(c,e)=>{c.nodeValue=e},setElementText:(c,e)=>{c.textContent=e},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>B1.querySelector(c),setScopeId(c,e){c.setAttribute(e,"")},insertStaticContent(c,e,a,s,n,r){const i=a?a.previousSibling:e.lastChild;if(n&&(n===r||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),a),!(n===r||!(n=n.nextSibling)););else{h5.innerHTML=s?`<svg>${c}</svg>`:c;const o=h5.content;if(s){const t=o.firstChild;for(;t.firstChild;)o.appendChild(t.firstChild);o.removeChild(t)}e.insertBefore(o,a)}return[i?i.nextSibling:e.firstChild,a?a.previousSibling:e.lastChild]}},d1="transition",l4="animation",w4=Symbol("_vtc"),V3=(c,{slots:e})=>K7(Dl,Pf(c),e);V3.displayName="Transition";const X7={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};V3.props=p2({},A7,X7);const S1=(c,e=[])=>{W(c)?c.forEach(a=>a(...e)):c&&c(...e)},m5=c=>c?W(c)?c.some(e=>e.length>1):c.length>1:!1;function Pf(c){const e={};for(const A in c)A in X7||(e[A]=c[A]);if(c.css===!1)return e;const{name:a="v",type:s,duration:n,enterFromClass:r=`${a}-enter-from`,enterActiveClass:i=`${a}-enter-active`,enterToClass:o=`${a}-enter-to`,appearFromClass:t=r,appearActiveClass:l=i,appearToClass:h=o,leaveFromClass:u=`${a}-leave-from`,leaveActiveClass:d=`${a}-leave-active`,leaveToClass:p=`${a}-leave-to`}=c,w=Ff(n),y=w&&w[0],T=w&&w[1],{onBeforeEnter:H,onEnter:M,onEnterCancelled:P,onLeave:N,onLeaveCancelled:O,onBeforeAppear:c2=H,onAppear:Z=M,onAppearCancelled:D=P}=e,k=(A,j,u2)=>{A1(A,j?h:o),A1(A,j?l:i),u2&&u2()},E=(A,j)=>{A._isLeaving=!1,A1(A,u),A1(A,p),A1(A,d),j&&j()},i2=A=>(j,u2)=>{const $2=A?Z:M,h2=()=>k(j,A,u2);S1($2,[j,h2]),u5(()=>{A1(j,A?t:r),v1(j,A?h:o),m5($2)||d5(j,s,y,h2)})};return p2(e,{onBeforeEnter(A){S1(H,[A]),v1(A,r),v1(A,i)},onBeforeAppear(A){S1(c2,[A]),v1(A,t),v1(A,l)},onEnter:i2(!1),onAppear:i2(!0),onLeave(A,j){A._isLeaving=!0;const u2=()=>E(A,j);v1(A,u),Df(),v1(A,d),u5(()=>{A._isLeaving&&(A1(A,u),v1(A,p),m5(N)||d5(A,s,T,u2))}),S1(N,[A,u2])},onEnterCancelled(A){k(A,!1),S1(P,[A])},onAppearCancelled(A){k(A,!0),S1(D,[A])},onLeaveCancelled(A){E(A),S1(O,[A])}})}function Ff(c){if(c==null)return null;if(r2(c))return[p6(c.enter),p6(c.leave)];{const e=p6(c);return[e,e]}}function p6(c){return Wt(c)}function v1(c,e){e.split(/\s+/).forEach(a=>a&&c.classList.add(a)),(c[w4]||(c[w4]=new Set)).add(e)}function A1(c,e){e.split(/\s+/).forEach(s=>s&&c.classList.remove(s));const a=c[w4];a&&(a.delete(e),a.size||(c[w4]=void 0))}function u5(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let Rf=0;function d5(c,e,a,s){const n=c._endId=++Rf,r=()=>{n===c._endId&&s()};if(a)return setTimeout(r,a);const{type:i,timeout:o,propCount:t}=Wf(c,e);if(!i)return s();const l=i+"end";let h=0;const u=()=>{c.removeEventListener(l,d),r()},d=p=>{p.target===c&&++h>=t&&u()};setTimeout(()=>{h<t&&u()},o+1),c.addEventListener(l,d)}function Wf(c,e){const a=window.getComputedStyle(c),s=w=>(a[w]||"").split(", "),n=s(`${d1}Delay`),r=s(`${d1}Duration`),i=v5(n,r),o=s(`${l4}Delay`),t=s(`${l4}Duration`),l=v5(o,t);let h=null,u=0,d=0;e===d1?i>0&&(h=d1,u=i,d=r.length):e===l4?l>0&&(h=l4,u=l,d=t.length):(u=Math.max(i,l),h=u>0?i>l?d1:l4:null,d=h?h===d1?r.length:t.length:0);const p=h===d1&&/\b(transform|all)(,|$)/.test(s(`${d1}Property`).toString());return{type:h,timeout:u,propCount:d,hasTransform:p}}function v5(c,e){for(;c.length<e.length;)c=c.concat(c);return Math.max(...e.map((a,s)=>H5(a)+H5(c[s])))}function H5(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function Df(){return document.body.offsetHeight}function Ef(c,e,a){const s=c[w4];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?c.removeAttribute("class"):a?c.setAttribute("class",e):c.className=e}const L0=Symbol("_vod"),g3={beforeMount(c,{value:e},{transition:a}){c[L0]=c.style.display==="none"?"":c.style.display,a&&e?a.beforeEnter(c):f4(c,e)},mounted(c,{value:e},{transition:a}){a&&e&&a.enter(c)},updated(c,{value:e,oldValue:a},{transition:s}){!e!=!a&&(s?e?(s.beforeEnter(c),f4(c,!0),s.enter(c)):s.leave(c,()=>{f4(c,!1)}):f4(c,e))},beforeUnmount(c,{value:e}){f4(c,e)}};function f4(c,e){c.style.display=e?c[L0]:"none"}const J7=Symbol("");function Q7(c){const e=G7();if(!e)return;const a=e.ut=(n=c(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>_6(r,n))},s=()=>{const n=c(e.proxy);O6(e.subTree,n),a(n)};Pl(s),A4(()=>{const n=new MutationObserver(s);n.observe(e.subTree.el.parentNode,{childList:!0}),W3(()=>n.disconnect())})}function O6(c,e){if(c.shapeFlag&128){const a=c.suspense;c=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{O6(a.activeBranch,e)})}for(;c.component;)c=c.component.subTree;if(c.shapeFlag&1&&c.el)_6(c.el,e);else if(c.type===y2)c.children.forEach(a=>O6(a,e));else if(c.type===l3){let{el:a,anchor:s}=c;for(;a&&(_6(a,e),a!==s);)a=a.nextSibling}}function _6(c,e){if(c.nodeType===1){const a=c.style;let s="";for(const n in e)a.setProperty(`--${n}`,e[n]),s+=`--${n}: ${e[n]};`;a[J7]=s}}function Of(c,e,a){const s=c.style,n=H2(a);if(a&&!n){if(e&&!H2(e))for(const r in e)a[r]==null&&$6(s,r,"");for(const r in a)$6(s,r,a[r])}else{const r=s.display;if(n){if(e!==a){const i=s[J7];i&&(a+=";"+i),s.cssText=a}}else e&&c.removeAttribute("style");L0 in c&&(s.display=r)}}const p5=/\s*!important$/;function $6(c,e,a){if(W(a))a.forEach(s=>$6(c,e,s));else if(a==null&&(a=""),e.startsWith("--"))c.setProperty(e,a);else{const s=_f(c,e);p5.test(a)?c.setProperty(s4(s),a.replace(p5,""),"important"):c[s]=a}}const z5=["Webkit","Moz","ms"],z6={};function _f(c,e){const a=z6[e];if(a)return a;let s=Q2(e);if(s!=="filter"&&s in c)return z6[e]=s;s=x3(s);for(let n=0;n<z5.length;n++){const r=z5[n]+s;if(r in c)return z6[e]=r}return e}const V5="http://www.w3.org/1999/xlink";function $f(c,e,a,s,n){if(s&&e.startsWith("xlink:"))a==null?c.removeAttributeNS(V5,e.slice(6,e.length)):c.setAttributeNS(V5,e,a);else{const r=Ut(e);a==null||r&&!i7(a)?c.removeAttribute(e):c.setAttribute(e,r?"":a)}}function Uf(c,e,a,s,n,r,i){if(e==="innerHTML"||e==="textContent"){s&&i(s,n,r),c[e]=a??"";return}const o=c.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){c._value=a;const l=o==="OPTION"?c.getAttribute("value"):c.value,h=a??"";l!==h&&(c.value=h),a==null&&c.removeAttribute(e);return}let t=!1;if(a===""||a==null){const l=typeof c[e];l==="boolean"?a=i7(a):a==null&&l==="string"?(a="",t=!0):l==="number"&&(a=0,t=!0)}try{c[e]=a}catch{}t&&c.removeAttribute(e)}function qf(c,e,a,s){c.addEventListener(e,a,s)}function Gf(c,e,a,s){c.removeEventListener(e,a,s)}const g5=Symbol("_vei");function jf(c,e,a,s,n=null){const r=c[g5]||(c[g5]={}),i=r[e];if(s&&i)i.value=s;else{const[o,t]=Yf(e);if(s){const l=r[e]=Jf(s,n);qf(c,o,l,t)}else i&&(Gf(c,o,i,t),r[e]=void 0)}}const y5=/(?:Once|Passive|Capture)$/;function Yf(c){let e;if(y5.test(c)){e={};let s;for(;s=c.match(y5);)c=c.slice(0,c.length-s[0].length),e[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):s4(c.slice(2)),e]}let V6=0;const Kf=Promise.resolve(),Xf=()=>V6||(Kf.then(()=>V6=0),V6=Date.now());function Jf(c,e){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;F2(Qf(s,a.value),e,5,[s])};return a.value=c,a.attached=Xf(),a}function Qf(c,e){if(W(e)){const a=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{a.call(c),c._stopped=!0},e.map(s=>n=>!n._stopped&&s&&s(n))}else return e}const M5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Zf=(c,e,a,s,n=!1,r,i,o,t)=>{e==="class"?Ef(c,s,n):e==="style"?Of(c,a,s):w3(e)?s0(e)||jf(c,e,a,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ch(c,e,s,n))?Uf(c,e,s,r,i,o,t):(e==="true-value"?c._trueValue=s:e==="false-value"&&(c._falseValue=s),$f(c,e,s,n))};function ch(c,e,a,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in c&&M5(e)&&U(a));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&c.tagName==="INPUT"||e==="type"&&c.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=c.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return M5(e)&&H2(a)?!1:e in c}const eh=["ctrl","shift","alt","meta"],ah={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,e)=>eh.some(a=>c[`${a}Key`]&&!e.includes(a))},g2=(c,e)=>{const a=c._withMods||(c._withMods={}),s=e.join(".");return a[s]||(a[s]=(n,...r)=>{for(let i=0;i<e.length;i++){const o=ah[e[i]];if(o&&o(n,e))return}return c(n,...r)})},sh=p2({patchProp:Zf},Bf);let C5;function nh(){return C5||(C5=ff(sh))}const rh=(...c)=>{const e=nh().createApp(...c),{mount:a}=e;return e.mount=s=>{const n=ih(s);if(!n)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.innerHTML="";const i=a(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),i},e};function ih(c){return H2(c)?document.querySelector(c):c}const K4=[{songName:"1.5 кг Отличного Пюре - Эмо.mp3",sort:181,bestParties:[{start:25,end:84}],notAggressive:!0},{songName:"Angel Vivaldi - A Martian Winter.mp3"},{songName:"Angel Vivaldi - An Erisian Autumn.mp3",sort:50,bestParties:[{start:78,end:104},{start:176,end:220},{start:246,end:268}],notAggressive:!0},{songName:"As I Lay Dying - Forever.mp3",sort:210,bestParties:[{start:0,end:25}]},{songName:"As I Lay Dying - Nothing Left [2007].mp3",sort:40,bestParties:[{start:0,end:57}]},{songName:"As I Lay Dying - The Sound Оf Truth.mp3",sort:60,bestParties:[{start:0,end:36},{start:59,end:121}]},{songName:"Aspirin Rose - Fucking Perfect (Pink cover).mp3"},{songName:"August Burns Red - A Shot Below The Belt.mp3",sort:142,bestParties:[{start:0,end:30},{start:90,end:114},{start:164,end:175}]},{songName:"August Burns Red - Barbarian.mp3",sort:20,bestParties:[{start:21,end:32},{start:70,end:88},{start:113,end:152}]},{songName:"August Burns Red - Chasing the Dragon.mp3",sort:151},{songName:"August Burns Red - Consumer.mp3"},{songName:"August Burns Red - Indonesia.mp3",sort:141,bestParties:[{start:84,end:117},{start:161,end:180}]},{songName:"August Burns Red - Meridian.mp3",notAggressive:!0},{songName:"August Burns Red - Truth of a Liar.mp3"},{songName:"August Burns Red - Your Little Suburbia Is in Ruins.mp3",sort:70,bestParties:[{start:12,end:27},{start:107,end:125},{start:146,end:178}]},{songName:"Anaal Nathrakh - Between Shit and Piss We Are Born.mp3"},{songName:"Anaal Nathrakh - In The Constellation Of The Black Widow.mp3",sort:220,bestParties:[{start:65,end:85},{start:114,end:141}]},{songName:"Between the Buried and Me - All Bodies.mp3"},{songName:"Between The Buried And Me - Ants Of The Sky.mp3",sort:113,bestParties:[{start:0,end:108}]},{songName:"Between The Buried And Me - Sun Of Nothing.mp3"},{songName:"Between The Buried And Me - Swim To The Moon.mp3",sort:10,bestParties:[{start:135,end:160},{start:500,end:551},{start:982,end:1022}]},{songName:"Breakwater - Eleven.mp3"},{songName:"Breakwater - five.mp3"},{songName:"Bullet For My Valentine - Hand Of Blood.mp3"},{songName:"Cerebral Bore - The Bald Cadaver.mp3",sort:280,bestParties:[{start:5.5,end:50}]},{songName:"Children Of Bodom - Are You Dead Yet.mp3",sort:110,bestParties:[{start:82,end:114}]},{songName:"Cosmonauts Day - The Captain.mp3",notAggressive:!0},{songName:"Death In Vegas - Dirge.mp3"},{songName:"Dragonforce - The Flame of Youth.mp3",sort:120,bestParties:[{start:46,end:65},{start:289,end:317}]},{songName:"If These Trees Could Talk - From Roots to Needles.mp3",notAggressive:!0},{songName:"In Flames - Clayman.mp3",sort:130,bestParties:[{start:0,end:21}]},{songName:"In Flames - Reflect the Storm.mp3"},{songName:"Killing Floor - Abandon All.mp3"},{songName:"Killing Floor OST - Wake.mp3",notAggressive:!0},{songName:"Long Distance Calling - Black Paper Planes.mp3",notAggressive:!0},{songName:"Machine Head - Beautiful Mourning.mp3"},{songName:"Machine Head - Hallowed Be Thy Name.mp3"},{songName:"Machine Head - Halo.mp3"},{songName:"Ozoi The Maid - Unfortunately.mp3",sort:112,bestParties:[{start:59,end:84},{start:165,end:218},{start:240,end:253}]},{songName:"Ozoi The Maid Yakui The Maid - Lanterns.mp3",sort:111,bestParties:[{start:146,end:218}]},{songName:"Ozoi The Maid Yakui The Maid - Wonderland.mp3",sort:30,bestParties:[{start:115,end:243},{start:355,end:442}]},{songName:"Ozoi The Maid, Yakui The Maid - Frontier.mp3"},{songName:"P.O.D. - Youth of the Nation.mp3",notAggressive:!0},{songName:"Psygnosis - FIIIX 2.0.mp3"},{songName:"Psygnosis - Lost in Oblivion.mp3",sort:140,bestParties:[{start:292,end:356}]},{songName:"Psygnosis - MehMeh.mp3"},{songName:"Psygnosis - Phrase 7.mp3",notAggressive:!0},{songName:"Psygnosis - Synaptic Plasticity.mp3"},{songName:"Psygnosis - The Judgement.mp3"},{songName:"Raunchy - To the Lighthouse.mp3"},{songName:"Raunchy - Twelve Feet Tall.mp3",sort:150,bestParties:[{start:65,end:96}]},{songName:"Raunchy - Wasteland Discotheque.mp3",sort:190,bestParties:[{start:0,end:34},{start:63,end:101}]},{songName:"Rhapsody - The Mighty Ride of the Firelord.mp3"},{songName:"Rhapsody of Fire - Wisdom of the Kings.mp3"},{songName:"Rise Of The Northstar - The New Path.mp3"},{songName:"Rise Of The Northstar - What The Fuck.mp3",sort:160,bestParties:[{start:45,end:79}]},{songName:"Siberian Meat Grinder feat Distemper - Пламя в Груди.mp3",sort:211,bestParties:[{start:49,end:68}]},{songName:"The Doors - Alabama song.mp3",notAggressive:!0},{songName:"The Doors - The End.mp3",notAggressive:!0},{songName:"The Faceless - Shake The Disease.mp3"},{songName:"The Five Stars - Atom Bomb Baby.mp3",notAggressive:!0},{songName:"The HAARP Machine - Esoteric Agenda.mp3"},{songName:"Toundra - Bizancio Byzantium.mp3",sort:180,bestParties:[{start:127,end:224},{start:406,end:480}],notAggressive:!0},{songName:"URO & .corridoiokraut. - Nappi.mp3",notAggressive:!0},{songName:"What Mad Universe - Colossus.mp3",notAggressive:!0},{songName:"What Mad Universe - the world of leviathan.mp3",notAggressive:!0},{songName:"What Mad Universe - head of column.mp3",sort:170,bestParties:[{start:30,end:65}],notAggressive:!0},{songName:"What Mad Universe - mythical sacred firebird.mp3",notAggressive:!0},{songName:"What Mad Universe - Nebula My Love.mp3",sort:80,bestParties:[{start:162,end:246},{start:260,end:358}],notAggressive:!0},{songName:"What Mad Universe - Starborne.mp3",sort:90,bestParties:[{start:85,end:105},{start:144,end:185}],notAggressive:!0},{songName:"Within The Ruins - Ataxia II.mp3"},{songName:"Between The Buried And Me - White Walls.mp3",sort:172,bestParties:[{start:264,end:378}]},{songName:"Raunchy - The Yeah Thing.mp3",sort:193,bestParties:[{start:14,end:65}]},{songName:"Within The Ruins - Beautiful Agony.mp3"},{songName:"ZEROMANCER - Dr. Online.mp3"},{songName:"zYnthetic - Abandon All v3.mp3",sort:100,bestParties:[{start:0,end:30},{start:60,end:89}],notAggressive:!0},{songName:"zYnthetic - SSplug.mp3"}],h4=[{label:"All music",id:1,url:"all"},{label:"Top",id:2,url:"top"},{label:"Top Shorts",id:4,url:"shorts"},{label:"Not aggressive",id:3,url:"not_aggressive"},{label:"Favorite",id:5,url:"favorite"}],H1=t2([]),g6=t2(0),X4=t2(!1);function w0(){const c=t2(K4),e=t2(K4.filter(k=>k.sort)),a=t2(K4.filter(k=>k.notAggressive)),s=t2(0);R3(()=>{c.value=K4,g6.value=y.value.length,c2()});const n=G(()=>{const k="/player_with_my_favorite_music/";return y.value[s.value]?`${k}music/${T.value.songName}`:""}),r=G(()=>[...e.value].sort((k,E)=>k.sort-E.sort)),i=t2(1);function o(k){!(i.value===4&&k.id===2)&&!(i.value===2&&k.id===4)&&(s.value=0),i.value=k.id,g6.value=w.value.length}function t(k){const E=k.split("&");if(E.length===2){const i2=E[0].split("=")[1],A=parseInt(E[1].split("=")[1]),j=h4.find(u2=>u2.url===i2);j&&(i.value=j.id,s.value=isNaN(A)?0:A)}}(()=>{const k=window.location.hash;k&&t(k)})(),z0(()=>{const k=h4.find(j=>j.id===i.value),E=k?k.url:"",i2=s.value.toString(),A=`/player_with_my_favorite_music/#tab=${E}&track=${i2}`;window.history.pushState({},"",A)});const h=G(()=>{switch(i.value){case 1:return c.value;case 2:return r.value;case 3:return a.value;case 4:return r.value;case 5:return u.value;default:return[]}}),u=G(()=>c.value.filter(k=>H1.value.includes(k.songName))),d=G(()=>u.value.length?h4:h4.slice(0,h4.length-1)),p=G(()=>{var k;return i.value===4?((k=r.value[s.value])==null?void 0:k.bestParties)||[{start:0,end:30}]:[]}),w=G(()=>X4.value?H():h.value),y=G(()=>w.value.map(k=>k.songName)),T=G(()=>w.value[s.value]);function H(){return h.value.map(k=>({...k,sort:Math.random()})).sort((k,E)=>k.sort-E.sort).map(({sort:k,...E})=>E)}function M(){s.value+=1,s.value>=w.value.length&&(s.value=0)}function P(){s.value=(s.value-1+w.value.length)%w.value.length}function N(k){s.value=k}function O(){X4.value=!X4.value}function c2(){const k=localStorage.getItem("favoriteSongs");k&&(H1.value=JSON.parse(k))}function Z(){localStorage.setItem("favoriteSongs",JSON.stringify(H1.value.slice(0)))}function D(){const k=T.value,E=H1.value.findIndex(i2=>i2===k.songName);E>=0?(H1.value.splice(E,1),H1.value.length||(i.value=1)):H1.value.push(k.songName),Z()}return{totalNumbSongs:g6,defaultTrackList:c,topTrackList:e,bestParties:p,nextTrack:M,previousTrack:P,pathToCurrentFile:n,sortingTopTrackList:r,currentTrackIndex:s,changeTab:o,selectTrack:N,tabSelected:i,isRandomTracks:X4,handlerRandomBtn:O,currentTracks:w,currentTracksList:y,currentSong:T,handleAddFavoriteSongBtn:D,favoriteSongs:H1,TabsOptionRender:d}}const oh=Z2({name:"TrackList",props:{currentTracks:{type:Array,default:()=>[]},currentTrackIndex:{type:Number,default:0}},emits:["select-track-from-list"],setup(c,{emit:e}){const a=G(()=>c.currentTracks.map(r=>{const i=r.lastIndexOf("/"),o=r==null?void 0:r.lastIndexOf(".");return r&&r.substring(i+1,o)||""}));M1(()=>c.currentTrackIndex,()=>{s()});async function s(){await d0();const r=document.querySelector(".tracks .selected");r==null||r.scrollIntoView({behavior:"smooth",block:"center"})}function n(r){e("select-track-from-list",r)}return{currentTracksWithCorrectNames:a,selectTrackFromList:n}}}),l1=(c,e)=>{const a=c.__vccOpts||c;for(const[s,n]of e)a[s]=n;return a},th=["onClick"];function lh(c,e,a,s,n,r){return m2(),v2("ul",{class:"sidebar tracks",onClick:e[0]||(e[0]=g2(()=>{},["stop"]))},[(m2(!0),v2(y2,null,M4(c.currentTracksWithCorrectNames,(i,o)=>(m2(),v2("li",{key:o,class:T2({selected:o===c.currentTrackIndex}),onClick:g2(t=>c.selectTrackFromList(o),["stop"])},I2(o+1)+". "+I2(i),11,th))),128))])}const fh=l1(oh,[["render",lh],["__scopeId","data-v-d47c1713"]]),hh=Z2({props:{tabSelected:{type:Number,default:1}},emits:["change-tab"],setup(c,{emit:e}){const{TabsOptionRender:a}=w0();function s(n){c.tabSelected!==n.id&&e("change-tab",n)}return{btnHandler:s,TabsOptionRender:a}}}),mh={class:"tabs"},uh=["onClick"];function dh(c,e,a,s,n,r){return m2(),v2("div",mh,[(m2(!0),v2(y2,null,M4(c.TabsOptionRender,i=>(m2(),v2("button",{key:i.id,class:T2({active:i.id===c.tabSelected}),onClick:g2(o=>c.btnHandler(i),["stop"])},I2(i.label),11,uh))),128))])}const vh=l1(hh,[["render",dh]]),Hh="modulepreload",ph=function(c){return"/player_with_my_favorite_music/"+c},L5={},j2=function(e,a,s){let n=Promise.resolve();if(a&&a.length>0){const r=document.getElementsByTagName("link");n=Promise.all(a.map(i=>{if(i=ph(i),i in L5)return;L5[i]=!0;const o=i.endsWith(".css"),t=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const d=r[u];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${t}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":Hh,o||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),o)return new Promise((u,d)=>{h.addEventListener("load",u),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}return n.then(()=>e()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})},b0=Z2({name:"MainInfoBand",props:{songName:{type:String,default:""},hasText:{type:Boolean,default:!1},isFavoriteSong:{type:Boolean,default:!1}},emits:["show-text-song","add-favorite"],setup(c,{emit:e}){const a=t2({}),s=t2(window.innerWidth),n=t2(window.innerHeight),r=()=>{s.value=window.innerWidth,n.value=window.innerHeight};R3(async()=>{const y=Object.assign({"/src/assets/images/1.5 кг Отличного Пюре.jpg":()=>j2(()=>import("./1.5 кг Отличного Пюре-OtALhitf.js"),__vite__mapDeps([])),"/src/assets/images/Anaal Nathrakh.jpg":()=>j2(()=>import("./Anaal Nathrakh-EzGp_TLw.js"),__vite__mapDeps([])),"/src/assets/images/As I Lay Dying.jpg":()=>j2(()=>import("./As I Lay Dying-28Nx7ZD0.js"),__vite__mapDeps([])),"/src/assets/images/August Burns Red.jpg":()=>j2(()=>import("./August Burns Red-MIqwgacb.js"),__vite__mapDeps([])),"/src/assets/images/Between The Buried And Me.webp":()=>j2(()=>import("./Between The Buried And Me-TSs49cb7.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid Yakui The Maid.jpg":()=>j2(()=>import("./Ozoi The Maid Yakui The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid.jpg":()=>j2(()=>import("./Ozoi The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/What Mad Universe.jpg":()=>j2(()=>import("./What Mad Universe-AmFbwRmj.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.png":()=>j2(()=>import("./default_logo-hDaDKpVk.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.svg":()=>j2(()=>import("./default_logo-KBf8q7n2.js"),__vite__mapDeps([]))});for(const T in y){const H=T.replace(/^.*\/(.*)\.\w+$/,"$1");a.value[H]=(await y[T]()).default}}),A4(()=>{window.addEventListener("resize",r)}),W3(()=>{window.removeEventListener("resize",r)});const i=G(()=>{var T;const y=(T=c.songName)==null?void 0:T.lastIndexOf(".");return c.songName&&c.songName.substring(0,y)||""}),o=G(()=>{const[y,T]=i.value.split(" - ");return{bandName:y,songName:T}}),t=G(()=>{const{bandName:y}=o.value;return a.value[y]||a.value.default_logo}),l=G(()=>{function y(T,H=1){return{width:`${H*T}px`,height:`${H*T}px`}}return s.value>n.value?y(n.value,.6):y(s.value,.8)});function h(){var y,T;if("mediaSession"in navigator&&t.value){const H=["96x96","128x128","192x192","256x256","384x384","512x512"];navigator.mediaSession.metadata=new MediaMetadata({title:((y=o.value)==null?void 0:y.songName)||"",artist:((T=o.value)==null?void 0:T.bandName)||"",artwork:H.map(M=>({src:t.value,sizes:M,type:"image/png"}))})}}z0(()=>{o.value&&t.value&&h()});const u=G(()=>c.hasText?"":"disabled"),d=G(()=>c.isFavoriteSong?"active":"");function p(){c.hasText&&e("show-text-song")}function w(){e("add-favorite")}return{getInfoBand:o,getLogoImage:t,getImageSizes:l,onIconShowTextClick:p,onIconAddFavoriteClick:w,iconHeartClass:d,iconShowTextClass:u}}}),w5=()=>{Q7(c=>({"5529be70":c.getImageSizes.width,"83ac0336":c.getImageSizes.height}))},b5=b0.setup;b0.setup=b5?(c,e)=>(w5(),b5(c,e)):w5;const Z7=c=>(H0("data-v-2fc8dabc"),c=c(),p0(),c),zh={class:"main-info"},Vh=["src"],gh={class:"main-panel"},yh=Z7(()=>$("i",{class:"fa-solid fa-heart"},null,-1)),Mh=[yh],Ch={class:"artist-info"},Lh={class:"band"},wh={class:"song"},bh=Z7(()=>$("i",{class:"fa-solid fa-text-height"},null,-1)),kh=[bh];function xh(c,e,a,s,n,r){return m2(),v2("div",zh,[$("img",{src:c.getLogoImage,class:"album-image",alt:""},null,8,Vh),$("div",gh,[$("button",{class:T2(["heart",c.iconHeartClass]),onClick:e[0]||(e[0]=g2((...i)=>c.onIconAddFavoriteClick&&c.onIconAddFavoriteClick(...i),["stop"]))},Mh,2),$("div",Ch,[$("div",Lh,I2(c.getInfoBand.bandName),1),$("div",wh,I2(c.getInfoBand.songName),1)]),$("button",{class:T2(["show-text",c.iconShowTextClass]),onClick:e[1]||(e[1]=g2((...i)=>c.onIconShowTextClick&&c.onIconShowTextClick(...i),["stop"]))},kh,2)])])}const Nh=l1(b0,[["render",xh],["__scopeId","data-v-2fc8dabc"]]),Sh=Z2({name:"VolumeControl",props:{volume:{type:Number,default:.8}},emits:["volume-change"],setup(c,{emit:e}){const a=G(()=>c.volume*100),s=G(()=>c.volume>0?'<i class="fas fa-volume-up"/>':'<i class="fas fa-volume-off"/>');function n(o){const t=parseFloat(o.target.value)/100;e("volume-change",t)}function r(o){e("volume-change",o)}function i(){c.volume>0?r(0):r(.8)}return{convertToValue:a,volumeHandler:n,onIconVolumeClick:i,iconVolume:s}}}),Ah={class:"volume-control"},Th=["innerHTML"],Ih=["value"];function Bh(c,e,a,s,n,r){return m2(),v2("div",Ah,[$("button",{class:"player-button margin",onClick:e[0]||(e[0]=g2((...i)=>c.onIconVolumeClick&&c.onIconVolumeClick(...i),["stop"]))},[$("span",{innerHTML:c.iconVolume},null,8,Th)]),$("input",{class:"margin",type:"range",value:c.convertToValue,min:"0",max:"100",step:"1",onInput:e[1]||(e[1]=(...i)=>c.volumeHandler&&c.volumeHandler(...i))},null,40,Ih)])}const Ph=l1(Sh,[["render",Bh],["__scopeId","data-v-841b27f2"]]),Fh=Z2({name:"ProgressControl",props:{currentTime:{type:Number,default:0},totalTime:{type:Number,default:0},bestParties:{type:Array,default:()=>[]}},emits:["time-change","time-change-line"],setup(c,{emit:e}){const a=G(()=>c.currentTime/c.totalTime*100),s=G(()=>o(c.currentTime)),n=G(()=>""),r=G(()=>o(c.totalTime)),i=G(()=>{const h=Number((100/c.totalTime).toFixed(2));return c.bestParties.map(u=>({left:`${u.start*h}%`,right:`${100-u.end*h}%`}))});function o(h){const u=Math.floor(h/60),d=Math.floor(h%60);return`${u}:${String(d).padStart(2,"0")}`}function t(h){const u=h.target.parentNode||null,d=(u==null?void 0:u.clientWidth)||0,p=u.getBoundingClientRect(),w=h.clientX-p.left;e("time-change",w/d*c.totalTime)}function l(h){const u=h.target;e("time-change",Number(u.value)/100*(c.totalTime||0))}return{convertToValue:a,convertCurrentTime:s,convertTotalTime:r,timeHandler:l,timeHandlerEmit:t,convertBestPartiesInPercentage:i,convertCurrentTimeSeconds:n}}}),Rh={class:"progress-control"},Wh=["value"],Dh={class:"time-display"},Eh={key:0,class:"line"};function Oh(c,e,a,s,n,r){return m2(),v2("div",Rh,[$("input",{type:"range",min:"0",max:"100",value:c.convertToValue,step:"1",onInput:e[0]||(e[0]=(...i)=>c.timeHandler&&c.timeHandler(...i))},null,40,Wh),$("div",Dh,[$("span",null,I2(c.convertCurrentTime),1),$("span",null,I2(c.convertCurrentTimeSeconds),1),$("span",null,I2(c.convertTotalTime),1)]),c.bestParties.length?(m2(),v2("div",Eh,[(m2(!0),v2(y2,null,M4(c.convertBestPartiesInPercentage,(i,o)=>(m2(),v2("div",{key:o,style:N3({left:i.left,right:i.right}),class:"best-section",onClick:e[1]||(e[1]=g2((...t)=>c.timeHandlerEmit&&c.timeHandlerEmit(...t),["stop"]))},null,4))),128))])):Vf("",!0)])}const _h=l1(Fh,[["render",Oh],["__scopeId","data-v-4c94b801"]]),$h=Z2({name:"MainControl",props:{isPlaying:{type:Boolean,default:!1}},emits:["previous","play-pause","next"],setup(c,{emit:e}){function a(){e("previous")}const s=G(()=>c.isPlaying?'<i class="fas fa-pause"/>':' <i class="fas fa-play"/>');function n(){e("play-pause")}function r(){e("next")}return{previousButtonHandler:a,playerButtonHandler:n,iconPlayerButton:s,nextButtonHandler:r}}}),cc=c=>(H0("data-v-1bded451"),c=c(),p0(),c),Uh={class:"main-control"},qh=cc(()=>$("i",{class:"fas fa-step-backward"},null,-1)),Gh=[qh],jh=["innerHTML"],Yh=cc(()=>$("i",{class:"fas fa-step-forward"},null,-1)),Kh=[Yh];function Xh(c,e,a,s,n,r){return m2(),v2("div",Uh,[$("button",{class:"player-button",onClick:e[0]||(e[0]=g2((...i)=>c.previousButtonHandler&&c.previousButtonHandler(...i),["stop"]))},Gh),$("button",{class:"player-button",onClick:e[1]||(e[1]=g2((...i)=>c.playerButtonHandler&&c.playerButtonHandler(...i),["stop"]))},[$("span",{innerHTML:c.iconPlayerButton},null,8,jh)]),$("button",{class:"player-button",onClick:e[2]||(e[2]=g2((...i)=>c.nextButtonHandler&&c.nextButtonHandler(...i),["stop"]))},Kh)])}const Jh=l1($h,[["render",Xh],["__scopeId","data-v-1bded451"]]),Qh=Z2({name:"OtherControl",props:{currentNumbSong:{type:Number,default:0},isRepeatMode:{type:Boolean,default:!1},isShowTrackList:{type:Boolean,default:!1},isDarkTheme:{type:Boolean,default:!1}},emits:["show-list-click","repeat-mode-click","change-theme"],setup(c,{emit:e}){const{totalNumbSongs:a,isRandomTracks:s,handlerRandomBtn:n}=w0();function r(){n()}function i(){e("repeat-mode-click")}function o(){e("show-list-click")}function t(){e("change-theme")}const l=G(()=>c.isDarkTheme?'<i class="fa-solid fa-toggle-on"/>':'<i class="fa-solid fa-toggle-off"/>'),h=G(()=>c.isShowTrackList?'<i class="fas fa-bars fa-rotate-90"/>':'<i class="fas fa-bars"/>');return{totalNumbSongs:a,isRandomTracks:s,iconClickRandomHandler:r,iconClickRepeatModeHandler:i,iconClickShowListHandler:o,iconClickChangeThemeHandler:t,iconToggle:l,iconBar:h}}}),ec=c=>(H0("data-v-14220f02"),c=c(),p0(),c),Zh={class:"other"},cm=ec(()=>$("i",{class:"fas fa-shuffle"},null,-1)),em=[cm],am=ec(()=>$("i",{class:"fas fa-repeat"},null,-1)),sm=[am],nm={class:"song-display"},rm=["innerHTML"],im=["innerHTML"];function om(c,e,a,s,n,r){return m2(),v2("div",Zh,[$("button",{class:T2({active:c.isRandomTracks}),onClick:e[0]||(e[0]=g2((...i)=>c.iconClickRandomHandler&&c.iconClickRandomHandler(...i),["stop"]))},em,2),$("button",{class:T2({active:c.isRepeatMode}),onClick:e[1]||(e[1]=g2((...i)=>c.iconClickRepeatModeHandler&&c.iconClickRepeatModeHandler(...i),["stop"]))},sm,2),$("div",nm,[$("span",null,I2(c.currentNumbSong),1),y0("/"),$("span",null,I2(c.totalNumbSongs),1)]),$("button",{onClick:e[2]||(e[2]=g2((...i)=>c.iconClickChangeThemeHandler&&c.iconClickChangeThemeHandler(...i),["stop"]))},[$("span",{innerHTML:c.iconToggle},null,8,rm)]),$("button",{class:T2({active:c.isShowTrackList}),onClick:e[3]||(e[3]=g2((...i)=>c.iconClickShowListHandler&&c.iconClickShowListHandler(...i),["stop"]))},[$("span",{innerHTML:c.iconBar},null,8,im)],2)])}const tm=l1(Qh,[["render",om],["__scopeId","data-v-14220f02"]]),lm=Z2({props:{songText:{type:String,default:""},songTextWithTimecodes:{type:Array,default:()=>[]},currentTime:{type:Number,default:0}},emits:["time-change"],setup(c,{emit:e}){const a=G(()=>[{label:"Timecodes",id:1,available:!!c.songTextWithTimecodes.length},{label:"Raw",id:2,available:!!c.songText.length}]),s=t2(1);function n(l){e("time-change",l-.5)}M1(()=>c.songText,()=>{!c.songText.length&&c.songTextWithTimecodes.length&&(s.value=1),!c.songTextWithTimecodes.length&&c.songText.length&&(s.value=2)},{immediate:!0});const r=G(()=>{const l=[];return c.songTextWithTimecodes.forEach((h,u)=>{var d,p;(p=(d=c.songTextWithTimecodes)==null?void 0:d[u+1])!=null&&p.seconds&&Number(c.songTextWithTimecodes[u+1].seconds-c.songTextWithTimecodes[u].seconds)>20?(l.push(h),l.push({seconds:c.songTextWithTimecodes[u].seconds+3,lyrics:"&#127925"})):l.push(h)}),l}),i=G(()=>{var l;if(c.songTextWithTimecodes.length){const h=(l=r.value)==null?void 0:l.findIndex((u,d,p)=>{var w;return c.currentTime>=u.seconds-1&&c.currentTime<((w=p==null?void 0:p[d+1])==null?void 0:w.seconds)});return h>=0?h:Object.keys(r.value).length-1}return 0});M1(()=>i.value,()=>{o()});async function o(){await d0();const l=document.querySelector(".song-text .selected");l==null||l.scrollIntoView({behavior:"smooth",block:"center"})}function t(l){l.available&&(s.value=l.id)}return{goToText:n,songTextWithMusicSymbol:r,tabsOption:a,idTabSelected:s,btnHandler:t,indexPlayingPartTimeCode:i}}}),fm={class:"tabs"},hm=["onClick"],mm={class:"song-text"},um=["textContent"],dm={class:"text-with-timestamps"},vm=["onClick","innerHTML"];function Hm(c,e,a,s,n,r){return m2(),v2("div",{class:"sidebar",onClick:e[0]||(e[0]=g2(()=>{},["stop"]))},[$("div",fm,[(m2(!0),v2(y2,null,M4(c.tabsOption,i=>(m2(),v2("button",{key:i.id,class:T2({active:i.id===c.idTabSelected,disabled:!i.available}),onClick:g2(o=>c.btnHandler(i),["stop"])},I2(i.label),11,hm))),128))]),$("div",mm,[H3($("span",{textContent:I2(c.songText)},null,8,um),[[g3,c.idTabSelected===2]]),H3($("div",dm,[y0(I2(c.currentTime)+" ",1),(m2(!0),v2(y2,null,M4(c.songTextWithMusicSymbol,(i,o)=>(m2(),v2("span",{key:o,class:T2({selected:o===c.indexPlayingPartTimeCode}),onClick:t=>c.goToText(i.seconds),innerHTML:`
${i.seconds} ${i.lyrics}
`},null,10,vm))),128))],512),[[g3,c.idTabSelected===1]])])])}const pm=l1(lm,[["render",Hm],["__scopeId","data-v-dc731ced"]]),zm={"1.5 кг Отличного Пюре - Эмо.mp3":`Каждый раз понимать, как легко потерять
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
(We are)`},Vm={"The Doors - The End.mp3":[{seconds:71,lyrics:"This is the end"},{seconds:74,lyrics:"Beautiful friend"},{seconds:79,lyrics:"This is the end"},{seconds:80,lyrics:"My only friend' the end"},{seconds:88,lyrics:"Of our elaborate plans' the end"},{seconds:96,lyrics:"Of everything that stands' the end"},{seconds:99,lyrics:"No safety or surprise' the end"},{seconds:105,lyrics:"I'll never look into your eyes, again"},{seconds:118,lyrics:"Can you picture what will be"},{seconds:123,lyrics:"So limitless and free"},{seconds:128,lyrics:"Desperately in need, of some, stranger's hand"},{seconds:136,lyrics:"In a, desperate land"},{seconds:190,lyrics:"Lost in a Roman, wilderness of pain"},{seconds:200,lyrics:"And all the children are insane"},{seconds:213,lyrics:"All the children are insane"},{seconds:333,lyrics:"Waiting for the summer rain' yeah"},{seconds:335,lyrics:"There's danger on the edge of town"},{seconds:358,lyrics:"Ride the King's highway' baby"},{seconds:360,lyrics:"Weird scenes inside the gold mine"},{seconds:361,lyrics:"Ride the highway west' baby"},{seconds:362,lyrics:"Ride the snake' ride the snake"},{seconds:363,lyrics:"To the lake' the ancient lake' baby"},{seconds:364,lyrics:"The snake is long' seven miles"},{seconds:365,lyrics:"Ride the snake, he's old' and his skin is cold"},{seconds:366,lyrics:"The west is the best"},{seconds:367,lyrics:"The west is the best"},{seconds:368,lyrics:"Get here' and we'll do the rest"},{seconds:370,lyrics:"The blue bus is callin' us"},{seconds:370,lyrics:"The blue bus is callin' us"},{seconds:370,lyrics:"Driver' where you taken' us"},{seconds:370,lyrics:"The killer awoke before dawn' he put his boots on"},{seconds:370,lyrics:"He took a face from the ancient gallery"},{seconds:371,lyrics:"And he walked on down the hall"},{seconds:371,lyrics:"He went into the room where his sister lived' and, then he"},{seconds:371,lyrics:"Paid a visit to his brother' and then he"},{seconds:371,lyrics:"He walked on down the hall' and"},{seconds:371,lyrics:"And he came to a door, and he looked inside"},{seconds:372,lyrics:"Father' yes son' I want to kill you"},{seconds:372,lyrics:"Mother, I want to, f**k you"},{seconds:372,lyrics:"C'mon baby' take a chance with us"},{seconds:372,lyrics:"C'mon baby' take a chance with us"},{seconds:372,lyrics:"C'mon baby' take a chance with us"},{seconds:372,lyrics:"And meet me at the back of the blue bus"},{seconds:373,lyrics:"Doin' a blue rock"},{seconds:374,lyrics:"On a blue bus"},{seconds:374,lyrics:"Doin' a blue rock"},{seconds:374,lyrics:"C'mon' yeah"},{seconds:374,lyrics:"Kill' kill' kill' kill' kill' kill"},{seconds:375,lyrics:"This is the end"},{seconds:375,lyrics:"Beautiful friend"},{seconds:375,lyrics:"This is the end"},{seconds:375,lyrics:"My only friend' the end"},{seconds:375,lyrics:"It hurts to set you free"},{seconds:375,lyrics:"But you'll never follow me"},{seconds:375,lyrics:"The end of laughter and soft lies"},{seconds:375,lyrics:"The end of nights we tried to die"},{seconds:376,lyrics:"This is the end"}],"August Burns Red - Truth of a Liar.mp3":[{seconds:14,lyrics:"Allow what's done to preach new"},{seconds:18,lyrics:"Insight to your life"},{seconds:21,lyrics:"Hindsight is perfect vision"},{seconds:25,lyrics:"The past is easiest to see"},{seconds:34,lyrics:"Clear a path, stand aside"},{seconds:37,lyrics:"We're carrying the torch now"},{seconds:44,lyrics:"Clear a path, stand aside"},{seconds:47,lyrics:"We're carrying the torch now"},{seconds:49,lyrics:"Clear a path, stand aside"},{seconds:52,lyrics:"There's no stopping us"},{seconds:54,lyrics:"Clear a path, stand aside"},{seconds:56,lyrics:"We're carrying the torch now"},{seconds:59,lyrics:"Clear a path, stand aside"},{seconds:61,lyrics:"There's no stopping us"},{seconds:69,lyrics:"Now I think you're everything"},{seconds:75,lyrics:"To everyone, to everyone"},{seconds:79,lyrics:"Go ahead, partake in it"},{seconds:83,lyrics:"Justify it"},{seconds:86,lyrics:"Become engulfed in it"},{seconds:88,lyrics:"It will eat you alive"},{seconds:95,lyrics:"This is not a one way road"},{seconds:99,lyrics:"You're headed for the dead end"},{seconds:102,lyrics:"This is not a one way road"},{seconds:105,lyrics:"You're headed for the dead end"},{seconds:109,lyrics:"This is not a one way road"},{seconds:112,lyrics:"You're headed for the dead end"},{seconds:116,lyrics:"This is not a one way road"},{seconds:119,lyrics:"You're headed for the dead end"},{seconds:123,lyrics:"You might think you're"},{seconds:125,lyrics:"Everything to everyone"},{seconds:128,lyrics:"Well pardon me if I intrude"},{seconds:133,lyrics:"You might think you're"},{seconds:135,lyrics:"Everything to everyone"},{seconds:138,lyrics:"You're not a perfect man"},{seconds:141,lyrics:"In a perfect world"},{seconds:143,lyrics:"Look at where your ignorance"},{seconds:145,lyrics:"Has brought you"},{seconds:148,lyrics:"All this will be buried like"},{seconds:150,lyrics:"The fall of Rome"},{seconds:152,lyrics:"Look at where your ignorance"},{seconds:155,lyrics:"Has brought you"},{seconds:158,lyrics:"You will come crashing down"},{seconds:163,lyrics:"But denial's what will kill you"},{seconds:169,lyrics:"But denial's what will kill you"},{seconds:174,lyrics:"But denial's what will kill you"},{seconds:194,lyrics:"All that you loved"},{seconds:195,lyrics:"All that you treasure"},{seconds:198,lyrics:"Will pass with time"},{seconds:200,lyrics:"Will pass with time"},{seconds:204,lyrics:"Blinded by the inability to see"},{seconds:209,lyrics:"Beyond flesh and blood"},{seconds:215,lyrics:"Blinded by the inability to see"},{seconds:220,lyrics:"Beyond flesh and blood"},{seconds:226,lyrics:"Shifting blame with a"},{seconds:228,lyrics:"Log in your eye"},{seconds:230,lyrics:"Insisting that a string"},{seconds:234,lyrics:"Tied to your limbs"},{seconds:236,lyrics:"Is what's to blame "},{seconds:239,lyrics:"Is what's to blame"},{seconds:241,lyrics:"Suck it up and bite the bullet"}],"ZEROMANCER - Dr. Online.mp3":[{seconds:18,lyrics:"It's the beginning of the end"},{seconds:21,lyrics:"You want things to go faster"},{seconds:25,lyrics:"It's the beginning of the end"},{seconds:29,lyrics:"Now everything′s too slow for you"},{seconds:33,lyrics:"It's the beginning of the end"},{seconds:36,lyrics:"You are one step closer"},{seconds:40,lyrics:"It's the beginning of the end"},{seconds:43,lyrics:"Say Amen"},{seconds:48,lyrics:"1-800-SUICIDE"},{seconds:51,lyrics:"Or maybe Doctor Online could help you die"},{seconds:55,lyrics:"You need wings fo fly"},{seconds:57,lyrics:"You need someone"},{seconds:59,lyrics:"To take your place"},{seconds:61,lyrics:"When you are gone"},{seconds:63,lyrics:"Is the beginning of the end"},{seconds:66,lyrics:"You know nothing last forever"},{seconds:70,lyrics:"A beginning of a trend"},{seconds:74,lyrics:"You need someone there to care for you"},{seconds:77,lyrics:"Is the beginning of the end"},{seconds:80,lyrics:"I don′t think you understand"},{seconds:84,lyrics:"Just a beginning of a flatline"},{seconds:89,lyrics:"Together"},{seconds:92,lyrics:"1-800-SUICIDE"},{seconds:95,lyrics:"Or maybe Doctor Online could help you die"},{seconds:99,lyrics:"You need wings fo fly"},{seconds:101,lyrics:"You need someone"},{seconds:103,lyrics:"To take your place"},{seconds:105,lyrics:"When you are gone"},{seconds:107,lyrics:"1-800-SUICIDE"},{seconds:110,lyrics:"Or maybe Doctor Online could help you die"},{seconds:114,lyrics:"You need wings fo fly"},{seconds:115,lyrics:"You need someone"},{seconds:117,lyrics:"To take your place"},{seconds:120,lyrics:"When you are gone"},{seconds:166,lyrics:"1-800-SUICIDE"},{seconds:169,lyrics:"Or maybe Doctor Online could help you die"},{seconds:173,lyrics:"You need wings fo fly"},{seconds:175,lyrics:"You need someone"},{seconds:177,lyrics:"To take your place"},{seconds:179,lyrics:"When you are gone"},{seconds:180,lyrics:"1-800-SUICIDE"},{seconds:184,lyrics:"Or maybe Doctor Online could help you die"},{seconds:188,lyrics:"You need wings fo fly"},{seconds:190,lyrics:"You need someone"},{seconds:191,lyrics:"To take your place"},{seconds:193,lyrics:"When you are gone"}],"August Burns Red - Chasing the Dragon.mp3":[{seconds:1,lyrics:"Living in a world of regrets"},{seconds:16,lyrics:"You never wanted this and you never will"},{seconds:18,lyrics:"X2"},{seconds:20,lyrics:"Watching your mirror image drowning in a lake of your own sorrows your own sorrows"},{seconds:30,lyrics:"But we will pray that you will pray you will look toward the skies"},{seconds:46,lyrics:"Look toward the skies which covers you like blankets and see his open arms"},{seconds:59,lyrics:"Look toward the skies"},{seconds:64,lyrics:"Look toward the skies"},{seconds:69,lyrics:"You claim you claim you were built to fall"},{seconds:74,lyrics:"You were never strong enough"},{seconds:80,lyrics:"You claim you claim you were built to fall"},{seconds:86,lyrics:"You were never strong enough"},{seconds:95,lyrics:"H****n has no healing to this unfortunate tragedy"},{seconds:105,lyrics:"Don't stray from what you've become now to who you were then"},{seconds:111,lyrics:"With a needle in your arm"},{seconds:126,lyrics:"Now affection has abandoned you can you still feel"},{seconds:129,lyrics:"Now affection has abandoned you can you still feel"},{seconds:139,lyrics:"Hold on"},{seconds:149,lyrics:"Hold on don't you die"},{seconds:151,lyrics:"Hold on don't you die on me"},{seconds:168,lyrics:"Living in a world of regrets you never wanted this and you never will"},{seconds:175,lyrics:"You claim you were built to fall you were never strong enough"},{seconds:224,lyrics:"You claim you were built to fall you were never strong enough"},{seconds:236,lyrics:"Save yourself"},{seconds:237,lyrics:"You claim you claim you were built to fall you were never strong enough"},{seconds:241,lyrics:"You claim you claim you were built to fall you were never strong enough"}],"August Burns Red - Indonesia.mp3":[{seconds:9,lyrics:"This plane is going down in flames and this time"},{seconds:14,lyrics:"There's no black box to capture your last words"},{seconds:18,lyrics:"A situation we can't make any sense of"},{seconds:24,lyrics:"Sacrifice costs all of us everything"},{seconds:30,lyrics:"This is the time to turn down our heads and turn up our hearts"},{seconds:37,lyrics:"There's no scale to balance this out"},{seconds:42,lyrics:"Some say may those who curse days curse this day"},{seconds:48,lyrics:"There's no scale to balance this out"},{seconds:63,lyrics:"How does a man wrap his mind around eternity"},{seconds:72,lyrics:"When he can't even explain his own composition"},{seconds:79,lyrics:"Don't you see it's bigger than you"},{seconds:80,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:97,lyrics:"And the white on his flag brings colors to shame colors to shame"},{seconds:103,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:108,lyrics:"And the white on his flag brings colors to shame colors to shame"},{seconds:121,lyrics:"The earth will swallow the water"},{seconds:125,lyrics:"The clouds refill the oceans"},{seconds:128,lyrics:"The earth will swallow the water and spit out"},{seconds:136,lyrics:"The clouds will refill refill the oceans"},{seconds:144,lyrics:"The earth will swallow the water and spit out"},{seconds:151,lyrics:"The clouds will refill refill the oceans"},{seconds:158,lyrics:"Humble and broken"},{seconds:161,lyrics:"This plane crashed down in flames"},{seconds:164,lyrics:"With a man who lived who died to better this world"},{seconds:188,lyrics:"David rest in peace"},{seconds:190,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:192,lyrics:"And the white on his flag brings colors to shame colors to shame"},{seconds:198,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:203,lyrics:"And the white on his flag brings colors to shame colors to shame"}],"Between The Buried And Me - Ants Of The Sky.mp3":[{seconds:0,lyrics:"My teeth taste funny today they seem more jagged than normal"},{seconds:5,lyrics:"I've been told that I have been grinding them"},{seconds:19,lyrics:"Like the gears during my dream hours"},{seconds:32,lyrics:"I wonder if its just my thoughts fusing into one frequent dream"},{seconds:37,lyrics:"One which parts with the night"},{seconds:61,lyrics:"There are frequent amongst the walking crawlers"},{seconds:109,lyrics:"I saw them dragging the other day"},{seconds:189,lyrics:"Scraping their knees and elbows against the bumpy pavement"},{seconds:195,lyrics:"Blood tracks have been filling the streets"},{seconds:200,lyrics:"Seems the high horse is taking them all home"},{seconds:208,lyrics:"I can't leave myself out"},{seconds:213,lyrics:"Why should we sleep today"},{seconds:279,lyrics:"Why should we awake tomorrow"},{seconds:283,lyrics:"We can just pop back a few and drift though this pre-programmed flight"},{seconds:294,lyrics:"Across all oceans a windy noisy trek"},{seconds:298,lyrics:"This seems to be what I've needed"},{seconds:299,lyrics:"The view used to be better lands are growing into one"},{seconds:318,lyrics:"We wanted it this way We were brought up to grow into one"},{seconds:388,lyrics:"I'm going to fly up soon and seek other lands"},{seconds:409,lyrics:"The soothing air of flight"},{seconds:411,lyrics:"A birds eye view into what I've always imagined life could be"},{seconds:420,lyrics:"Will it be sought after"},{seconds:429,lyrics:"It might just be useless writing and ideas that laziness will corrupt in the end"},{seconds:511,lyrics:"Bones of dust need hardening"},{seconds:526,lyrics:"I think the prescription is found"},{seconds:540,lyrics:"Sleep on fly on"},{seconds:594,lyrics:"In your mind you can fly"},{seconds:601,lyrics:"My teeth grin oddly today"},{seconds:607,lyrics:"They seem to gleam more than normal"},{seconds:658,lyrics:"Maybe it will be noticed"},{seconds:684,lyrics:"That's all we ever asked for grinning through it all"},{seconds:691,lyrics:"In the corner the thinker thinks I seem more jagged than normal"},{seconds:713,lyrics:"I am the episode of constant wandering"},{seconds:731,lyrics:"A nomad in my own surroundings"},{seconds:762,lyrics:"This hand produces the nerve"},{seconds:771,lyrics:"The walking dead"},{seconds:774,lyrics:"Walking dead"}],"1.5 кг Отличного Пюре - Эмо.mp3":[],"As I Lay Dying - Forever.mp3":[{seconds:2,lyrics:"Forever your eyes will hold the memory"},{seconds:7,lyrics:"I saw your heart as it overtook me"},{seconds:13,lyrics:"We tried so hard to understand and reason"},{seconds:18,lyrics:"But in the one moment 'I gave my heart away"},{seconds:32,lyrics:"And I gave my heart away"},{seconds:36,lyrics:"But in the moment"},{seconds:38,lyrics:"I gave my heart away"},{seconds:40,lyrics:"But in the moment"},{seconds:43,lyrics:"I gave my heart away"},{seconds:51,lyrics:"Your the perfect breath where' my mind lay beside me"},{seconds:56,lyrics:"And all I knew is what had overtaken me"},{seconds:62,lyrics:"With no explanation I am comforted"},{seconds:70,lyrics:"By my inability 'to understand"},{seconds:76,lyrics:"Forever your eyes will hold the memory"},{seconds:80,lyrics:"I saw your heart as it overtook me"},{seconds:87,lyrics:"We tried so hard to understand and reason"},{seconds:92,lyrics:"But in the one moment I gave my heart away"},{seconds:106,lyrics:"And I gave my heart away"},{seconds:108,lyrics:"But in the moment"},{seconds:111,lyrics:"I gave my heart away"},{seconds:114,lyrics:"But in the moment"},{seconds:117,lyrics:"I gave my heart away"},{seconds:146,lyrics:"Forever your eyes will hold the memory"},{seconds:156,lyrics:"Forever your eyes will hold the memory"},{seconds:168,lyrics:"Forever your eyes will hold the memory"},{seconds:226,lyrics:"When I wake from this dream "},{seconds:234,lyrics:"Will your smile still open my heart"},{seconds:242,lyrics:"And leave me transparent "},{seconds:251,lyrics:"When I wake from this dream "},{seconds:259,lyrics:"Will your smile still open my heart"}],"As I Lay Dying - The Sound Оf Truth.mp3":[{seconds:37,lyrics:"We have all heard what we wanted to hear"},{seconds:43,lyrics:"Truth that sounds right to our ears"},{seconds:48,lyrics:"We have all heard what we wanted to hear"},{seconds:54,lyrics:"Truth that sounds right to our ears"},{seconds:60,lyrics:"But what wisdom is there within us"},{seconds:66,lyrics:"To live based on the feeling of our hearts"},{seconds:71,lyrics:"How many times has instinct let us down"},{seconds:77,lyrics:"Never to be thought through"},{seconds:80,lyrics:"Never to be questioned no"},{seconds:86,lyrics:"Say what you really mean"},{seconds:89,lyrics:"When your ambition calls you calls you"},{seconds:95,lyrics:"For what use is there"},{seconds:98,lyrics:"Is there in praying"},{seconds:101,lyrics:"If you will only hear what you want to hear"},{seconds:121,lyrics:"We have all heard what we wanted to hear"},{seconds:127,lyrics:"Truth that sounds right to our ears"},{seconds:135,lyrics:"We speak of fighting to resist this world"},{seconds:141,lyrics:"But what about the battle within us"},{seconds:147,lyrics:"If we have chosen to live against the grain"},{seconds:153,lyrics:"Then why are we all facing the same way"},{seconds:170,lyrics:"There is no difference between us and them"},{seconds:176,lyrics:"If we all blindly seek truth from sentiments"},{seconds:217,lyrics:"We have all heard what we wanted to hear"},{seconds:223,lyrics:"Truth that sounds right to our ears"},{seconds:229,lyrics:"We have all heard what we wanted to hear"},{seconds:235,lyrics:"Truth that sounds right to our ears"},{seconds:240,lyrics:"We have all heard what we wanted to hear"},{seconds:246,lyrics:"Truth that sounds right to our ears"}],"August Burns Red - Meridian.mp3":[{seconds:0,lyrics:"The song called meridian"},{seconds:189,lyrics:"The people who survive the sword will find favor in the desert"},{seconds:196,lyrics:"I will build you up again and you will be rebuilt"},{seconds:203,lyrics:"I am the painter making this mess a masterpiece"},{seconds:220,lyrics:"I will rebuild"},{seconds:230,lyrics:"I will rebuild you up again"}],"Bullet For My Valentine - Hand Of Blood.mp3":[{seconds:30,lyrics:"There goes my Valentine again"},{seconds:33,lyrics:"Soaked in Red for what she said"},{seconds:36,lyrics:"And Now she's gone "},{seconds:38,lyrics:"Oh my god have i done it again "},{seconds:41,lyrics:"There's a pulse and its deafening"},{seconds:44,lyrics:"I can't help what i hear in my head "},{seconds:46,lyrics:"Its the switch that i flick when he says "},{seconds:52,lyrics:"Hand of Blood "},{seconds:53,lyrics:"I don't wana feel my heart is breaking "},{seconds:55,lyrics:"Hand OF Blood "},{seconds:55,lyrics:"I don't wana see my life is burning"},{seconds:59,lyrics:"I saw you look away "},{seconds:73,lyrics:"Is what you've seen too much to take or are you blind and seeing nothing "},{seconds:77,lyrics:"(I saw you run)I saw you run away "},{seconds:83,lyrics:"Is what i've done to much to take or are you scared of being nothing "},{seconds:89,lyrics:"Theres a stain on my hand, and its red"},{seconds:92,lyrics:"Oh my god, am i losing it "},{seconds:94,lyrics:"I can't help what I've done or I've said"},{seconds:97,lyrics:"It's the button i push when he says "},{seconds:99,lyrics:"Hand of Blood "},{seconds:100,lyrics:"I don't wana feel my heart is breaking "},{seconds:104,lyrics:"Hand OF Blood "},{seconds:106,lyrics:"I don't wana see my life is burning "},{seconds:120,lyrics:"I saw you look away "},{seconds:124,lyrics:"Is what youve seen to much to take or are you blind and seeing nothing "},{seconds:129,lyrics:"(I saw you run away) I saw you run away "},{seconds:134,lyrics:"Is what i've done to much to take or are you scared of being nothing"},{seconds:138,lyrics:"Ｓ Ｏ Ｌ Ｏ "},{seconds:182,lyrics:"MIA, , , , , , , "},{seconds:194,lyrics:"I saw you look away "},{seconds:197,lyrics:"Is what youve seen to much to take or are you blind and seeing nothing"},{seconds:202,lyrics:"(I saw you run away)I saw you run away "},{seconds:207,lyrics:"Is what i've done to much to take or are you scared of being nothing"}],"August Burns Red - Consumer.mp3":[{seconds:2,lyrics:"A front seat to your own flick"},{seconds:16,lyrics:"If only you could see how much your emotions waver"},{seconds:41,lyrics:"Words are flowing from your mouth at lightning speed"},{seconds:46,lyrics:"They're packing heat and are ready to kill"},{seconds:53,lyrics:"Cry"},{seconds:55,lyrics:"Frown"},{seconds:56,lyrics:"Hit"},{seconds:57,lyrics:"Yell"},{seconds:61,lyrics:"Let's watch where it takes you"},{seconds:66,lyrics:"You really don't have it that bad"},{seconds:72,lyrics:"Try looking through the glass of beauty"},{seconds:78,lyrics:"It will show you truth"},{seconds:81,lyrics:"We are all guilty of self centeredness"},{seconds:91,lyrics:"We have committed the crime"},{seconds:107,lyrics:"But what we fail to realize is the dent it leaves in our soul"},{seconds:118,lyrics:"Everyone is full of it in their own way"},{seconds:127,lyrics:"A young boy cannot comprehend social status"},{seconds:131,lyrics:"And this boy is better off than any of us"},{seconds:149,lyrics:"Life will pass by us like a summer storm"},{seconds:188,lyrics:"And if we consume ourselves with ourselves we will surely look back with sorrow"}],"Children Of Bodom - Are You Dead Yet.mp3":[],"August Burns Red - Barbarian.mp3":[{seconds:12,lyrics:"Chaos brings order"},{seconds:32,lyrics:"Who will you allow to lead you blindly until the end"},{seconds:44,lyrics:"You're like a little girl with a stupid crush"},{seconds:56,lyrics:"We all sing glory"},{seconds:77,lyrics:"We all choke ourselves with our own ignorance"},{seconds:88,lyrics:"There is so much more to life than your stupid desires"},{seconds:101,lyrics:"Nothing is everything and everything is something"},{seconds:107,lyrics:"Confused Troubled"},{seconds:115,lyrics:"Finding the meaning is looking through the vivid transparencies"},{seconds:124,lyrics:"Dance the night away because tomorrow"},{seconds:127,lyrics:"We will look back and talk about good times now gone forever"},{seconds:154,lyrics:"Trace lines around the image of your choice"},{seconds:160,lyrics:"Dance until the end my friend and find joy in every living thing"},{seconds:190,lyrics:"Optimism is not a choice it's a belief"}],"As I Lay Dying - Nothing Left [2007].mp3":[{seconds:22,lyrics:"Yeah"},{seconds:58,lyrics:"This world was never worthy"},{seconds:61,lyrics:"But how can I call it unfaithful"},{seconds:68,lyrics:"Every promise was fulfilled"},{seconds:72,lyrics:"As decay crawled from it's throat"},{seconds:80,lyrics:"Like the dead rising from an open grave"},{seconds:91,lyrics:"Like the dead rising from an open grave"},{seconds:118,lyrics:"Lips of splendor and tongue of deceit"},{seconds:122,lyrics:"All dying now as our fragile wrists hold only waste"},{seconds:129,lyrics:"Like those gasping for their last breath"},{seconds:135,lyrics:"We cannot hide there's nothing left"},{seconds:140,lyrics:"Like those gasping for their last breath"},{seconds:146,lyrics:"We cannot hide there's nothing left"},{seconds:148,lyrics:"Nothing left"},{seconds:154,lyrics:"Nothing left"},{seconds:163,lyrics:"There's nothing left"},{seconds:168,lyrics:"Nothing left"},{seconds:195,lyrics:"If all my sorrow has led me here"},{seconds:203,lyrics:"Then I would cry all of my tears"},{seconds:208,lyrics:"To have this chance again to have this chance again"},{seconds:215,lyrics:"To have this chance again to have this chance again"},{seconds:226,lyrics:"And know there's more than this"},{seconds:228,lyrics:"And know there's more than you"},{seconds:268,lyrics:"Like those gasping for their last breath"},{seconds:273,lyrics:"We cannot hide there's nothing left"},{seconds:277,lyrics:"Like those gasping for their last breath"},{seconds:283,lyrics:"We cannot hide there's nothing left"}],"Between The Buried And Me - Sun Of Nothing.mp3":[{seconds:4,lyrics:"Everywhere I look they are there"},{seconds:8,lyrics:"What is everyone doing"},{seconds:11,lyrics:"Going to a home"},{seconds:16,lyrics:"Everywhere I look they are there"},{seconds:20,lyrics:"What is everyone doing"},{seconds:23,lyrics:"Going to a home"},{seconds:28,lyrics:"To a place that makes us feel warm"},{seconds:30,lyrics:"A place that grants us a smile"},{seconds:33,lyrics:"Grants us a smile"},{seconds:37,lyrics:"Seems like a very simple idea but not hardly figured out"},{seconds:51,lyrics:"I just see faces"},{seconds:58,lyrics:"Faces staring blank as they go on with the routine"},{seconds:66,lyrics:"I just see faces"},{seconds:74,lyrics:"Faces staring blank as they go on with the routine"},{seconds:82,lyrics:"This routine"},{seconds:87,lyrics:"Nothing new it's time to go through with this"},{seconds:93,lyrics:"This routine"},{seconds:98,lyrics:"Nothing new it's time to go through with this"},{seconds:104,lyrics:"This routine"},{seconds:108,lyrics:"Nothing new it's time to go through with this"},{seconds:139,lyrics:"A spaceman that's what they say I am"},{seconds:147,lyrics:"Nothing but a spaceman always pushing it all away"},{seconds:164,lyrics:"Nothing but a spaceman always pushing it all away"},{seconds:175,lyrics:"Trying to get to that one place I call home"},{seconds:183,lyrics:"The journey begins"},{seconds:188,lyrics:"Forcing a new life with the unexplained"},{seconds:193,lyrics:"A creeping rush that surrounds me"},{seconds:198,lyrics:"Floating away"},{seconds:202,lyrics:"Floating away"},{seconds:203,lyrics:"Floating away"},{seconds:204,lyrics:"Floating away"},{seconds:205,lyrics:"Floating away"},{seconds:230,lyrics:"Always pushing it all away"},{seconds:234,lyrics:"Trying to get to that one place I call home"},{seconds:244,lyrics:"My own planet I allowed this wish"},{seconds:254,lyrics:"Unexpected not knowing why"},{seconds:264,lyrics:"Wonder why why"},{seconds:278,lyrics:"Wonder why I question it now"},{seconds:294,lyrics:"I'm my own planet"},{seconds:310,lyrics:"Not many can experience this sensation"},{seconds:320,lyrics:"Loneliness is creeping out"},{seconds:324,lyrics:"Or in however you think of it"},{seconds:333,lyrics:"But it sure is surrounding me"},{seconds:338,lyrics:"Maybe all the complaining is an accordance of boredom"},{seconds:347,lyrics:"I suppose it's too late"},{seconds:352,lyrics:"I am floating farther and farther away"},{seconds:362,lyrics:"I am floating farther I am floating"},{seconds:371,lyrics:"I did love I did laugh I did live"},{seconds:419,lyrics:"A spaceman they say I am a spaceman"},{seconds:443,lyrics:"A spaceman they say I am a spaceman"},{seconds:461,lyrics:"Planets everywhere my own destiny"},{seconds:475,lyrics:"I'm floating towards the sun"},{seconds:484,lyrics:"The sun of nothing floating towards the sun"},{seconds:500,lyrics:"The sun of nothing I have become the sun of nothing"},{seconds:513,lyrics:"Nothing is here memories are not clear"},{seconds:533,lyrics:"Floating to the sun the sun nothing"},{seconds:548,lyrics:"Floating to the sun the sun nothing"},{seconds:561,lyrics:"Floating floating floating"},{seconds:567,lyrics:"Floating to the sun farther away"},{seconds:588,lyrics:"I can't believe that's what it has come to"},{seconds:594,lyrics:"I never really had it all that bad"},{seconds:601,lyrics:"I just looked around and never thought about the blank stares"},{seconds:613,lyrics:"Blank stairs"},{seconds:625,lyrics:"They were looking into something much worse than what I thought I was"},{seconds:631,lyrics:"Selfishness is a very sticky quality of this species looking around"},{seconds:637,lyrics:"I don't see any faces yes I am lonely"},{seconds:643,lyrics:"It's to be expected I'll sleep now"},{seconds:646,lyrics:"Dream waves"}],"Killing Floor OST - Wake.mp3":[],"Machine Head - Beautiful Mourning.mp3":[{seconds:0,lyrics:"F**k you all"},{seconds:33,lyrics:"My redemption is knowing this will be over"},{seconds:39,lyrics:"My aggression I fear I've lost control"},{seconds:46,lyrics:"Who is this man I stare"},{seconds:49,lyrics:"Mirror reflects a stranger"},{seconds:52,lyrics:"Fist shatters the despair"},{seconds:55,lyrics:"Awake the pain to anger"},{seconds:57,lyrics:"How do I close thine eyes of murder"},{seconds:71,lyrics:"How do I close thine eyes of murder"},{seconds:79,lyrics:"Staring into me"},{seconds:87,lyrics:"My obsession is dying sinking me deeper"},{seconds:90,lyrics:"My depression this world has disavowed"},{seconds:98,lyrics:"Razor at wrist I seethe"},{seconds:102,lyrics:"The flesh is peeled apart now"},{seconds:104,lyrics:"Gone is my faded dream"},{seconds:107,lyrics:"Failure I welcome in thou"},{seconds:108,lyrics:"How do I close thine eyes of murder"},{seconds:109,lyrics:"How do I close thine eyes of murder"},{seconds:158,lyrics:"Staring into me"},{seconds:159,lyrics:"This lifetime in sorrow"},{seconds:165,lyrics:"God let the angels die"},{seconds:168,lyrics:"This is our last goodbye"},{seconds:177,lyrics:"In love and death we cry"},{seconds:188,lyrics:"Our last goodbye"},{seconds:198,lyrics:"No no no no"},{seconds:220,lyrics:"No no no no"},{seconds:225,lyrics:"Spit in the face of loss"},{seconds:228,lyrics:"Coward my own self hatred"},{seconds:231,lyrics:"No more I bear this cross"},{seconds:234,lyrics:"Suffer and rise from the dead"},{seconds:238,lyrics:"This lifetime in sorrow"},{seconds:244,lyrics:"God let the angels die"},{seconds:248,lyrics:"This is our last goodbye"},{seconds:255,lyrics:"In love and death we cry"}],"Machine Head - Hallowed Be Thy Name.mp3":[{seconds:13,lyrics:"I'm waiting in my cold cell"},{seconds:20,lyrics:"When the bell begins to chime"},{seconds:27,lyrics:"Reflecting on my past life"},{seconds:34,lyrics:"And it doesn't have much time"},{seconds:41,lyrics:"'Cause at 5 o'clock they'll take me to the gallows pole"},{seconds:55,lyrics:"The sands of time for me are running low"},{seconds:78,lyrics:"Running low oh yeah"},{seconds:106,lyrics:"When the priest comes to read me the last rites"},{seconds:109,lyrics:"I take a look through the bars at the last sights"},{seconds:111,lyrics:"Of a world that has gone very wrong for me"},{seconds:116,lyrics:"Can it be that there's some sort of error"},{seconds:118,lyrics:"Hard to stop the surmounting terror"},{seconds:120,lyrics:"Is it really the end not some crazy dream"},{seconds:125,lyrics:"Somebody please tell me that I'm dreaming"},{seconds:127,lyrics:"It's not easy to stop from screaming"},{seconds:130,lyrics:"But words escape me when I try to speak"},{seconds:135,lyrics:"Tears fall but why am I crying"},{seconds:137,lyrics:"After all I'm not afraid of dying"},{seconds:139,lyrics:"Do not believe that there never is an end"},{seconds:199,lyrics:"As the guards march me out to the courtyard"},{seconds:201,lyrics:"Somebody cries from a cell God be with you"},{seconds:204,lyrics:"If there's a God"},{seconds:205,lyrics:"Then why has he let me go go go"},{seconds:208,lyrics:"As I walk my life drifts before me"},{seconds:211,lyrics:"Though the end is near I'm not sorry"},{seconds:213,lyrics:"Catch my soul it's willing to fly away"},{seconds:217,lyrics:"Mark my words believe my soul lives on"},{seconds:220,lyrics:"Don't worry now that I have gone"},{seconds:222,lyrics:"I've gone beyond to see the truth truth truth"},{seconds:227,lyrics:"When you know that your time is close at hand"},{seconds:229,lyrics:"Maybe then you'll begin to understand"},{seconds:231,lyrics:"Life down here is just a strange illusion"},{seconds:394,lyrics:"Yeah yeah yeah"},{seconds:399,lyrics:"Hallowed be thy name"},{seconds:403,lyrics:"Yeah yeah yeah"},{seconds:407,lyrics:"Hallowed be thy name"}],"Dragonforce - The Flame of Youth.mp3":[{seconds:66,lyrics:"Close your eyes, hear the thunder and rain"},{seconds:68,lyrics:"Fear inside of the torturing pain"},{seconds:69,lyrics:"For the cries of the world and the last lives remain"},{seconds:75,lyrics:"Chain your heart swear to die for their gain"},{seconds:78,lyrics:"Deep inside slowly fading away"},{seconds:80,lyrics:"And the last breath remains and the fear turns to rage"},{seconds:84,lyrics:"Locked in a world by the fallen evil souls"},{seconds:87,lyrics:"Torn right apart for your life insane"},{seconds:89,lyrics:"Burning in my mind now to bring my life to hold"},{seconds:92,lyrics:"Reach out and die in the flames"},{seconds:94,lyrics:"See through the lies and their ever staring eyes"},{seconds:96,lyrics:"Now is the time to defend your ground"},{seconds:98,lyrics:"Destiny will call to remind us all now"},{seconds:101,lyrics:"Fly free so far from here, this life we now will end"},{seconds:105,lyrics:"In dreams of everlasting pain the fallen now rise again"},{seconds:110,lyrics:"Through the fire, through the flames like the sun will rise again"},{seconds:115,lyrics:"Lost in time, lost in space to the end of all their days"},{seconds:120,lyrics:"See their endless ways insanity, the quest deranged not meant to be"},{seconds:125,lyrics:"In flames will now forever burn eternally"},{seconds:130,lyrics:"So free your heart, leave your life far behind"},{seconds:134,lyrics:"In the cold of winter skies escape the pain inside"},{seconds:140,lyrics:"Now feel your soul lost in seas of all eternity"},{seconds:145,lyrics:"Every day this life defending and the flames of youth not ending"},{seconds:150,lyrics:"In a lifetime searching, we must fight through the eternal pain"},{seconds:176,lyrics:"So alone in a world far away, memories of a dream will remain"},{seconds:180,lyrics:"As the world falling calls and our lives all in vain"},{seconds:185,lyrics:"Fire in my soul will forever rise again"},{seconds:188,lyrics:"Nothing in my mind to remember now"},{seconds:190,lyrics:"Broken by the fear of the dark night calling"},{seconds:192,lyrics:"Ride free on endless seas, the final curtain falls"},{seconds:197,lyrics:"Cut the ground from down below, the time to lock and to load"},{seconds:202,lyrics:"Through the fire, through the rain, far across the distant plains"},{seconds:206,lyrics:"Feel the wind beneath the steel as your mind becomes insane"},{seconds:211,lyrics:"Save the pain from all humanity, that rides throughout our destiny"},{seconds:215,lyrics:"For freedom now we rise for all again"},{seconds:222,lyrics:"So free your heart, leave your life far behind"},{seconds:226,lyrics:"In the cold of winter skies escape the pain inside"},{seconds:231,lyrics:"Now feel your soul lost in seas of all eternity"},{seconds:235,lyrics:"Every day this life defending and the flames of youth not ending"},{seconds:241,lyrics:"In a lifetime searching, we must fight through the eternal pain"},{seconds:349,lyrics:"So free your heart, leave your life far behind"},{seconds:352,lyrics:"In the cold of winter skies escape the pain inside"},{seconds:358,lyrics:"And when the memories are all but left behind"},{seconds:363,lyrics:"And the days have gone forever, lost within my mind"},{seconds:368,lyrics:"Now feel your soul burn in seas of all eternity"},{seconds:372,lyrics:"Every day this life defending and the flames of youth not ending"},{seconds:378,lyrics:"In a lifetime searching, we must fight through the eternal pain"},{seconds:387,lyrics:"We fight through the eternal pain"}],"The Doors - Alabama song.mp3":[{seconds:11,lyrics:"Well, show me the way"},{seconds:13,lyrics:"To the next whisky bar"},{seconds:17,lyrics:"Oh, don't ask why"},{seconds:20,lyrics:"Oh, don't ask why"},{seconds:22,lyrics:"Show me the way"},{seconds:24,lyrics:"To the next whisky bar"},{seconds:28,lyrics:"Oh, don't ask why"},{seconds:31,lyrics:"Oh, don't ask why"},{seconds:34,lyrics:"For if we don't find"},{seconds:36,lyrics:"The next whisky bar"},{seconds:39,lyrics:"I tell you we must die"},{seconds:42,lyrics:"I tell you we must die"},{seconds:44,lyrics:"I tell you, I tell you"},{seconds:47,lyrics:"I tell you we must die"},{seconds:55,lyrics:"Oh, moon of Alabama"},{seconds:60,lyrics:"We now must say goodbye"},{seconds:66,lyrics:"We've lost our good old mama"},{seconds:73,lyrics:"And must have whisky, oh, you know why"},{seconds:81,lyrics:"Oh, moon of Alabama"},{seconds:83,lyrics:"We now must say goodbye"},{seconds:88,lyrics:"We've lost our good old mama"},{seconds:94,lyrics:"And must have whisky, oh, you know why"},{seconds:105,lyrics:"Well, show me the way"},{seconds:107,lyrics:"To the next little girl"},{seconds:111,lyrics:"Oh, don't ask why"},{seconds:114,lyrics:"Oh, don't ask why"},{seconds:116,lyrics:"Show me the way"},{seconds:118,lyrics:"To the next little girl"},{seconds:122,lyrics:"Oh, don't ask why"},{seconds:124,lyrics:"Oh, don't ask why"},{seconds:128,lyrics:"For if we don't find"},{seconds:130,lyrics:"The next little girl"},{seconds:133,lyrics:"I tell you we must die"},{seconds:135,lyrics:"I tell you we must die"},{seconds:138,lyrics:"I tell you, I tell you"},{seconds:141,lyrics:"I tell you we must die"},{seconds:171,lyrics:"Oh, moon of Alabama"},{seconds:175,lyrics:"We now must say goodbye"},{seconds:181,lyrics:"We've lost our good old mama"},{seconds:188,lyrics:"And must have whisky, oh, you know why"}],"P.O.D. - Youth of the Nation.mp3":[{seconds:33,lyrics:"Last day of the rest of my life"},{seconds:35,lyrics:"I wish I would've known"},{seconds:36,lyrics:"'Cause I didn't kiss my mama goodbye"},{seconds:37,lyrics:"I didn't tell her that I loved her and how much I care"},{seconds:39,lyrics:"Or thank my pops for all the talks"},{seconds:41,lyrics:"And all the wisdom he shared"},{seconds:42,lyrics:"Unaware, I just did what I always do"},{seconds:44,lyrics:"Everyday, the same routine"},{seconds:45,lyrics:"Before I skate off to school"},{seconds:47,lyrics:"But who knew that this day wasn't like the rest"},{seconds:49,lyrics:"Instead of taking a test"},{seconds:50,lyrics:"I took two to the chest"},{seconds:53,lyrics:"Call me blind, but I didn't see it coming"},{seconds:54,lyrics:"Everybody was running"},{seconds:55,lyrics:"But I couldn't hear nothing"},{seconds:57,lyrics:"Except gun blasts, it happened so fast"},{seconds:59,lyrics:"I don't really know this kid"},{seconds:60,lyrics:"Even though I sit by him in class"},{seconds:62,lyrics:"Maybe this kid was reaching out for love"},{seconds:64,lyrics:"Or maybe for a moment"},{seconds:65,lyrics:"He forgot who he was"},{seconds:67,lyrics:"Or maybe this kid just wanted to be hugged"},{seconds:69,lyrics:"Whatever it was"},{seconds:70,lyrics:"I know it's because"},{seconds:72,lyrics:"Chorus"},{seconds:73,lyrics:"We are, We are, the youth of the nation"},{seconds:77,lyrics:"We are, We are, the youth of the nation"},{seconds:82,lyrics:"We are, We are, the youth of the nation"},{seconds:87,lyrics:"We are, We are, the youth of the nation"},{seconds:92,lyrics:"Little Suzy, she was only twelve"},{seconds:93,lyrics:"She was given the world"},{seconds:94,lyrics:"With every chance to excel"},{seconds:96,lyrics:"Hang with the boys and hear the stories they tell"},{seconds:98,lyrics:"She might act kind of proud"},{seconds:100,lyrics:"But no respect for herself"},{seconds:101,lyrics:"She finds love in all the wrong places"},{seconds:103,lyrics:"The same situations"},{seconds:104,lyrics:"Just different faces"},{seconds:106,lyrics:"Changed up her pace since her daddy left her"},{seconds:108,lyrics:"Too bad he never told her"},{seconds:110,lyrics:"She deserved much better"},{seconds:111,lyrics:"Johnny boy always played the fool"},{seconds:113,lyrics:"He broke all the rules"},{seconds:114,lyrics:"So you would think he was cool"},{seconds:116,lyrics:"He was never really one of the guys"},{seconds:118,lyrics:"No matter how hard he tried"},{seconds:119,lyrics:"Often thought of suicide"},{seconds:121,lyrics:"It's kind of hard when you ain't got no friends"},{seconds:123,lyrics:"He put his life to an end"},{seconds:124,lyrics:"They might remember him then"},{seconds:126,lyrics:"You cross the line and there's no turning back"},{seconds:128,lyrics:"Told the world how he felt"},{seconds:129,lyrics:"With the sound of a gat"},{seconds:131,lyrics:"We are, We are, the youth of the nation"},{seconds:136,lyrics:"We are, We are, the youth of the nation"},{seconds:141,lyrics:"We are, We are, the youth of the nation"},{seconds:146,lyrics:"We are, We are, the youth of the nation"},{seconds:170,lyrics:"Who's to blame for the lives that tragedies claim"},{seconds:172,lyrics:"No matter what you say"},{seconds:173,lyrics:"It don't take away the pain"},{seconds:175,lyrics:"That I feel inside, I'm tired of all the lies"},{seconds:177,lyrics:"Don't nobody know why"},{seconds:178,lyrics:"It's the blind leading the blind"},{seconds:180,lyrics:"I guess that's the way the story goes"},{seconds:181,lyrics:"Will it ever make sense"},{seconds:183,lyrics:"Somebody's got to know"},{seconds:185,lyrics:"There's got to be more to life than this"},{seconds:186,lyrics:"There's got to be more to everything"},{seconds:188,lyrics:"I thought exists"},{seconds:190,lyrics:"We are, We are, the youth of the nation"},{seconds:195,lyrics:"We are, We are, the youth of the nation"},{seconds:199,lyrics:"We are, We are"},{seconds:201,lyrics:"We are, We are the youth of the nation"},{seconds:205,lyrics:"We are, We are"},{seconds:206,lyrics:"We are, We are the youth of the nation"},{seconds:210,lyrics:"We are, We are"},{seconds:211,lyrics:"We are, We are the youth of the nation"},{seconds:214,lyrics:"We are, We are"},{seconds:215,lyrics:"We are, We are the youth of the nation"},{seconds:219,lyrics:"We are, We are"},{seconds:221,lyrics:"We are, We are the youth of the nation"},{seconds:225,lyrics:"We are, We are"},{seconds:226,lyrics:"We are, We are the youth of the nation"},{seconds:231,lyrics:"We are the youth of the nation"},{seconds:235,lyrics:"We are the youth of the nation"},{seconds:240,lyrics:"We are the youth of the nation"},{seconds:245,lyrics:"We are"}],"The Faceless - Shake The Disease.mp3":[{seconds:47,lyrics:"I'm not going down on my knees"},{seconds:50,lyrics:"Begging you to adore me"},{seconds:56,lyrics:"Can't you see it's misery"},{seconds:59,lyrics:"And torture for me"},{seconds:65,lyrics:"When I'm misunderstood"},{seconds:69,lyrics:"Try as hard as you can I've tried as hard as I could"},{seconds:73,lyrics:"To make you see"},{seconds:77,lyrics:"How important it is for me"},{seconds:82,lyrics:"Here is a plea"},{seconds:84,lyrics:"From my heart to you"},{seconds:86,lyrics:"Nobody knows me"},{seconds:88,lyrics:"As well as you do"},{seconds:90,lyrics:"You know how hard it is for me"},{seconds:93,lyrics:"To shake the disease"},{seconds:95,lyrics:"That takes hold of my tongue"},{seconds:97,lyrics:"In situations like these"},{seconds:105,lyrics:"Understand me"},{seconds:109,lyrics:"Understand me"},{seconds:114,lyrics:"Understand me"},{seconds:118,lyrics:"Understand me"},{seconds:137,lyrics:"Some people have to be"},{seconds:140,lyrics:"Permanently together"},{seconds:147,lyrics:"Lovers devoted to"},{seconds:149,lyrics:"Each other forever"},{seconds:154,lyrics:"Now I've got things to do"},{seconds:159,lyrics:"And I've said before that I know you have too"},{seconds:163,lyrics:"When I'm not there"},{seconds:166,lyrics:"In spirit I'll be there"},{seconds:171,lyrics:"Here is a plea"},{seconds:173,lyrics:"From my heart to you"},{seconds:175,lyrics:"Nobody knows me"},{seconds:177,lyrics:"As well as you do"},{seconds:180,lyrics:"You know how hard it is for me"},{seconds:182,lyrics:"To shake the disease"},{seconds:185,lyrics:"That takes hold of my tongue"},{seconds:187,lyrics:"In situations like these"},{seconds:194,lyrics:"Understand me"},{seconds:199,lyrics:"Understand me"},{seconds:203,lyrics:"Understand me"},{seconds:208,lyrics:"Understand me"},{seconds:235,lyrics:"When I'm misunderstood"},{seconds:239,lyrics:"Try as hard as you can I've tried as hard as I could"},{seconds:243,lyrics:"To make you see"},{seconds:247,lyrics:"How important it is for me"},{seconds:252,lyrics:"Here is a plea"},{seconds:254,lyrics:"From my heart to you"},{seconds:256,lyrics:"Nobody knows me"},{seconds:258,lyrics:"As well as you do"},{seconds:260,lyrics:"You know how hard it is for me"},{seconds:263,lyrics:"To shake the disease"},{seconds:265,lyrics:"That takes hold of my tongue"},{seconds:267,lyrics:"In situations like these"},{seconds:270,lyrics:"Here is a plea"},{seconds:271,lyrics:"From my heart to you"},{seconds:273,lyrics:"Nobody knows me"},{seconds:275,lyrics:"As well as you do"},{seconds:277,lyrics:"You know how hard it is for me"},{seconds:280,lyrics:"To shake the disease"},{seconds:283,lyrics:"That takes hold of my tongue"},{seconds:285,lyrics:"In situations like these"}],"Raunchy - Wasteland Discotheque.mp3":[],"In Flames - Clayman.mp3":[],"Cerebral Bore - The Bald Cadaver.mp3":[{seconds:6,lyrics:"You disgust me"},{seconds:15,lyrics:"The bald cadaver she is mine"},{seconds:18,lyrics:"I will lick this rotting cunt"},{seconds:20,lyrics:"False messiah she is legion"},{seconds:23,lyrics:"Time has come to burn them all"},{seconds:29,lyrics:"Maggots infesting her hole"},{seconds:33,lyrics:"Devour her insides"},{seconds:50,lyrics:"They writhe inside your body"},{seconds:53,lyrics:"With glee they eat your organs raw"},{seconds:60,lyrics:"Bow to me ripping entrails severed torso"},{seconds:63,lyrics:"Feel my creed body dead f**k the head"},{seconds:66,lyrics:"You are here to die before me"},{seconds:69,lyrics:"I will consume you f**k you you are dead"},{seconds:113,lyrics:"You are a Marie curie *****"},{seconds:115,lyrics:"Colour of pee big tits racist"},{seconds:121,lyrics:"F**k the skin dome"},{seconds:125,lyrics:"To continue I must sever inches from you"},{seconds:134,lyrics:"Now you see"},{seconds:138,lyrics:"Death has come for you and not for me"},{seconds:141,lyrics:"She is weak at your peak"},{seconds:152,lyrics:"Trim back the bed sheet show me your balding head"},{seconds:158,lyrics:"In comes junkie mom she gets f**ked up"},{seconds:175,lyrics:"You are the vermin of this earth"},{seconds:178,lyrics:"You can't understand it's your time"},{seconds:180,lyrics:"I decimate your bloody corpse"},{seconds:184,lyrics:"Peeling back your skin I ejaculate on your face"},{seconds:195,lyrics:"Lived here died here now you're gone"}],"Raunchy - To the Lighthouse.mp3":[{seconds:41,lyrics:"You have become my ethereal darkness"},{seconds:47,lyrics:"My black highway and my heart split down the middle"},{seconds:52,lyrics:"Why do we keep doing this to ourselves"},{seconds:57,lyrics:"This never bliss, only sounds of hells bells"},{seconds:65,lyrics:"I want to take you away"},{seconds:68,lyrics:"Make you see the beauty in life again"},{seconds:76,lyrics:"To the lighthouse, she sings in the night"},{seconds:80,lyrics:"As we sail through the bay into a new day"},{seconds:85,lyrics:"And there it leads the way"},{seconds:93,lyrics:"For us phallic and proud"},{seconds:95,lyrics:"With it's light scattered all over"},{seconds:103,lyrics:"All over the crowd"},{seconds:122,lyrics:"Through mountains through water to find"},{seconds:127,lyrics:"What could lift us up to see the bliss on the horizon"},{seconds:133,lyrics:"A symbol of hope, a kicked up fire"},{seconds:138,lyrics:"To find tranquility inside the flames"},{seconds:145,lyrics:"I want to take you away"},{seconds:148,lyrics:"Make you see the beauty in life again"},{seconds:156,lyrics:"To the lighthouse, she sings in the night"},{seconds:160,lyrics:"As we sail through the bay into a new day"},{seconds:166,lyrics:"And there it leads the way"},{seconds:173,lyrics:"For us phallic and proud"},{seconds:175,lyrics:"With it's light scattered all over"},{seconds:184,lyrics:"All over the crowd"},{seconds:197,lyrics:"Uh, baby lets take it further down below"},{seconds:203,lyrics:"This rowboat is not for the two of us"},{seconds:208,lyrics:"Were not running on empty heart"},{seconds:218,lyrics:"You're my black sunrise"},{seconds:220,lyrics:"And my heart split down the middle"},{seconds:223,lyrics:"Baby, why do we keep doing this to ourselves"},{seconds:229,lyrics:"You're the sound of hells bells"},{seconds:230,lyrics:"But that's not a bad thing, right"},{seconds:234,lyrics:"Let's take it to the next step, let's do it all night"},{seconds:246,lyrics:"Were the young believers"},{seconds:251,lyrics:"Were nation builders"},{seconds:254,lyrics:"F**king for might"},{seconds:270,lyrics:"I want to take you away"},{seconds:272,lyrics:"Make you see the beauty in life again"},{seconds:280,lyrics:"To the lighthouse, she sings in the night"},{seconds:285,lyrics:"As we sail through the bay into a new day"},{seconds:290,lyrics:"And there it leads the way"},{seconds:298,lyrics:"For us phallic and proud"},{seconds:300,lyrics:"With it's light scattered all over"},{seconds:308,lyrics:"All over the crowd"}],"In Flames - Reflect the Storm.mp3":[{seconds:10,lyrics:"Shot for shot"},{seconds:12,lyrics:"Many bullets penetrate me"},{seconds:14,lyrics:"Embrace me"},{seconds:15,lyrics:"Tell me stories of gold and gods"},{seconds:19,lyrics:"The precision in your voice"},{seconds:21,lyrics:"Pierce the walls that I've built"},{seconds:23,lyrics:"Your eyes reach deep in me"},{seconds:38,lyrics:"Take a chance"},{seconds:40,lyrics:"Better come much bigger than this"},{seconds:42,lyrics:"One dark star"},{seconds:44,lyrics:"Spend another day with me"},{seconds:46,lyrics:"A dead surface that doesn't reflect"},{seconds:48,lyrics:"The storm underneath"},{seconds:51,lyrics:"I'll take the chance"},{seconds:53,lyrics:"Bring me the calm"},{seconds:55,lyrics:"And it leaves nothing"},{seconds:57,lyrics:"Expose the dark side"},{seconds:61,lyrics:"Awakened and emotional"},{seconds:66,lyrics:"Expose the dark side"},{seconds:71,lyrics:"Impossible to tame"},{seconds:77,lyrics:"Away from the light of the sun"},{seconds:82,lyrics:"Away I find what is real in me"},{seconds:92,lyrics:"Throw yourself into the eye of chaos"},{seconds:96,lyrics:"Infiltrate me"},{seconds:98,lyrics:"Sneak out before I awake"},{seconds:101,lyrics:"Take out the trash and burn it"},{seconds:103,lyrics:"Try to find a beautiful place to lay"},{seconds:107,lyrics:"These fragile bones of mine"},{seconds:110,lyrics:"Away from the light of the sun"},{seconds:119,lyrics:"Away I find what is real, "},{seconds:128,lyrics:"Away from the light of the sun"},{seconds:137,lyrics:"Away I find what is real in me"},{seconds:174,lyrics:"And it leaves nothing"},{seconds:177,lyrics:"Expose the dark side"},{seconds:180,lyrics:"Awakened and emotional"},{seconds:185,lyrics:"Expose the dark side"},{seconds:190,lyrics:"Impossible to tame"},{seconds:196,lyrics:"Away from the light of the sun"},{seconds:201,lyrics:"Away I find what is real, "},{seconds:212,lyrics:"Away from the light of the sun"},{seconds:219,lyrics:"Away I find what is real, "},{seconds:227,lyrics:"Away from the light of the sun"},{seconds:237,lyrics:"Away I find what is real in me"}],"Psygnosis - MehMeh.mp3":[],"The Five Stars - Atom Bomb Baby.mp3":[{seconds:0,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara bomb"},{seconds:6,lyrics:"Got a doll baby I love her so"},{seconds:9,lyrics:"Nothing else like her anywhere you go"},{seconds:12,lyrics:"Man she's anything but calm"},{seconds:15,lyrics:"A regular pint-sized atom bomb"},{seconds:18,lyrics:"Atom bomb baby little atom bomb"},{seconds:20,lyrics:"I want her in my wigwam"},{seconds:24,lyrics:"She's just the way I want her to be"},{seconds:26,lyrics:"A million times hotter than TNT"},{seconds:29,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara"},{seconds:35,lyrics:"Atom bomb baby loaded with power"},{seconds:38,lyrics:"Radioactive as a TV tower"},{seconds:41,lyrics:"A nuclear fission in her soul"},{seconds:44,lyrics:"Loves with electronic control"},{seconds:47,lyrics:"Atom bomb baby little atom bomb"},{seconds:50,lyrics:"I want her in my wigwam"},{seconds:53,lyrics:"She's just the way I want her to be"},{seconds:56,lyrics:"A million times hotter than TNT"},{seconds:59,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara"},{seconds:65,lyrics:"Atom bomb baby boy she can start"},{seconds:68,lyrics:"One of those chain reactions in my heart"},{seconds:71,lyrics:"A big explosion big and loud"},{seconds:74,lyrics:"Mushrooms me right up on a cloud"},{seconds:77,lyrics:"Atom bomb baby little atom bomb"},{seconds:80,lyrics:"I want her in my wigwam"},{seconds:82,lyrics:"She's just the way I want her to be"},{seconds:85,lyrics:"A million times hotter than TNT"},{seconds:88,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara"},{seconds:94,lyrics:"Atom bomb ladysh sweet as a plum"},{seconds:97,lyrics:"Carries more whallop than uranium"},{seconds:100,lyrics:"When she kisses there's no hitch"},{seconds:103,lyrics:"Zero power she turns on a switch"},{seconds:107,lyrics:"Atom bomb baby little atom bomb"},{seconds:109,lyrics:"I want her in my wigwam"},{seconds:112,lyrics:"She's just the way I want her to be"},{seconds:115,lyrics:"A million times hotter than TNT"},{seconds:118,lyrics:"Atom bomb baby little atom bomb"},{seconds:121,lyrics:"I want her in my wigwam"},{seconds:124,lyrics:"She's just the way I want her to be"},{seconds:127,lyrics:"A million times hotter than TNT"},{seconds:131,lyrics:"Atom bomb baby little atom bomb"}],"The HAARP Machine - Esoteric Agenda.mp3":[{seconds:30,lyrics:"There were no weapons of mass destruction"},{seconds:34,lyrics:"Mobile biological"},{seconds:37,lyrics:"Weapons labs the agenda was to remove Saddam Hussein"},{seconds:42,lyrics:"To reap the oil and establish a base"},{seconds:47,lyrics:"The Bush administration"},{seconds:49,lyrics:"Made a series of claims prior the Iraqi war abuse"},{seconds:54,lyrics:"And misuse of intelligence"},{seconds:61,lyrics:"There was no collusive"},{seconds:65,lyrics:"Relationship with"},{seconds:67,lyrics:"Al qaeda esoteric agenda"},{seconds:75,lyrics:"Esoteric agenda"},{seconds:106,lyrics:"Open your eyes and see this"},{seconds:111,lyrics:"World is not what it seems free your soul from"},{seconds:118,lyrics:"The ties that bind us all time is upon us"},{seconds:127,lyrics:"To wake up"},{seconds:142,lyrics:"The wars of the world are diversions"},{seconds:148,lyrics:"For the desires of the powers"},{seconds:154,lyrics:"The wars of the world are diversions"},{seconds:160,lyrics:"For the desires of the powers"},{seconds:165,lyrics:"They declare war as"},{seconds:167,lyrics:"The last option even though they always actively block every"},{seconds:172,lyrics:"Other viable policy in the same way the powers make"},{seconds:179,lyrics:"War the only option"},{seconds:183,lyrics:"Actively other viable policy in the same way the powers make"},{seconds:191,lyrics:"War the only option"}],"What Mad Universe - the world of leviathan.mp3":[],"Rise Of The Northstar - The New Path.mp3":[{seconds:34,lyrics:"His name is Raoh demonic Ken'oh"},{seconds:36,lyrics:"Fist of the violent star born in hell yo"},{seconds:38,lyrics:"Fallen heir who should've lost his fist"},{seconds:40,lyrics:"Rejected by his love and treated like a best"},{seconds:43,lyrics:"Evil grew up within him like a new option"},{seconds:45,lyrics:"He took his master's life without asking questions"},{seconds:48,lyrics:"Suffered the nuclear fire"},{seconds:50,lyrics:"He conquers a chaotic world takes the power"},{seconds:62,lyrics:"Rules on this sick world fallen brotherhood"},{seconds:65,lyrics:"Here comes the new lord fist against sword"},{seconds:67,lyrics:"Rules on this sick world fallen brotherhood"},{seconds:69,lyrics:"Here comes the new lord fist against sword"},{seconds:73,lyrics:"Nothing is written in advance"},{seconds:76,lyrics:"Everything changes smash your chance"},{seconds:78,lyrics:"One life one love several fates"},{seconds:80,lyrics:"Open a new path create the gate"},{seconds:83,lyrics:"Nothing is written in advance"},{seconds:85,lyrics:"Everything changes smash your chance"},{seconds:87,lyrics:"One life one love several fates"},{seconds:90,lyrics:"Open a new path create the gate"},{seconds:92,lyrics:"Genocide his life starts badly"},{seconds:95,lyrics:"His weakness saves his life baddack the movie"},{seconds:97,lyrics:"Arrived on earth broke his motherf**king head"},{seconds:99,lyrics:"Booyaka booyaka he could've been brain dead"},{seconds:102,lyrics:"He faced elites never gave up"},{seconds:104,lyrics:"This life could've been a tragedy if he didn't confront"},{seconds:107,lyrics:"His fear his faith his destiny"},{seconds:109,lyrics:"Never forget the sin goku story"},{seconds:112,lyrics:"Nothing is written in advance"},{seconds:114,lyrics:"Everything changes smash your chance"},{seconds:116,lyrics:"One life one love several fates"},{seconds:119,lyrics:"Open a new path create the gate"},{seconds:121,lyrics:"Nothing is written in advance"},{seconds:123,lyrics:"Everything changes smash your chance"},{seconds:126,lyrics:"One life one love several fates"},{seconds:128,lyrics:"Open a new path create the gate"},{seconds:140,lyrics:"One two three four five super yankees"},{seconds:143,lyrics:"Straight from the past straight from the nineties"},{seconds:145,lyrics:"Without any help or any support"},{seconds:147,lyrics:"Against the main vibe and ready to start"},{seconds:150,lyrics:"Get up stand up come on throw your hands up"},{seconds:152,lyrics:"They wanna force the fate and represent some codes"},{seconds:154,lyrics:"Stay true stay straight never forget create your own legacy"},{seconds:158,lyrics:"Never lose the target"},{seconds:198,lyrics:"Nothing is written in advance"},{seconds:200,lyrics:"Everything changes smash your chance"},{seconds:203,lyrics:"One life one love several fates"},{seconds:205,lyrics:"Open a new path create the gate"},{seconds:207,lyrics:"Nothing is written in advance"},{seconds:210,lyrics:"Everything changes smash your chance"},{seconds:212,lyrics:"One life one love several fates"},{seconds:215,lyrics:"Open a new path create the gate"}],"Machine Head - Halo.mp3":[{seconds:81,lyrics:"This is a call to arms"},{seconds:85,lyrics:"Will you stand beside me"},{seconds:94,lyrics:"This is our time to fight"},{seconds:98,lyrics:"No more compromising"},{seconds:101,lyrics:"And this blackened heart will sing"},{seconds:107,lyrics:"For sad solidarity"},{seconds:113,lyrics:"Halo over our demise"},{seconds:118,lyrics:"Following a god so blind"},{seconds:125,lyrics:"Shallow in their sickening"},{seconds:131,lyrics:"Swallow not the sh*t they feed"},{seconds:152,lyrics:"This is a right to life"},{seconds:156,lyrics:"Not the religious right's act"},{seconds:166,lyrics:"This is abortion's knife"},{seconds:169,lyrics:"Aiming at the womb of"},{seconds:172,lyrics:"The christian conspiracy"},{seconds:178,lyrics:"So open thine eyes and see the"},{seconds:187,lyrics:"Halo over our demise"},{seconds:193,lyrics:"Following a god so blind"},{seconds:199,lyrics:"Shallow in their sickening"},{seconds:205,lyrics:"Swallow not the sh*t they feed"},{seconds:253,lyrics:"Our time will come our time will come"},{seconds:275,lyrics:"Our time is now our time is now"},{seconds:408,lyrics:"And I won't pray for you"},{seconds:415,lyrics:"And I won't pray for you"},{seconds:422,lyrics:"And I won't pray for you"},{seconds:437,lyrics:"Halo"},{seconds:443,lyrics:"Follow"},{seconds:450,lyrics:"Shallow"},{seconds:456,lyrics:"Swallow"},{seconds:463,lyrics:"Halo over our demise"},{seconds:469,lyrics:"Following a god so blind"},{seconds:475,lyrics:"Shallow in their sickening"},{seconds:481,lyrics:"Swallow not the sh*t they feed"},{seconds:493,lyrics:"Sh*t they feed"},{seconds:498,lyrics:"Your words will never hold us down"},{seconds:501,lyrics:"Prayers won't be spared on you"},{seconds:504,lyrics:"Satisfaction denied"},{seconds:507,lyrics:"'Till you're dead and gone"},{seconds:513,lyrics:"Gone"},{seconds:515,lyrics:"Dead and gone"},{seconds:519,lyrics:"You're gone"},{seconds:522,lyrics:"You're gone"}],"zYnthetic - SSplug.mp3":[],"Anaal Nathrakh - Between Shit and Piss We Are Born.mp3":[],"Anaal Nathrakh - In The Constellation Of The Black Widow.mp3":[],"Angel Vivaldi - A Martian Winter.mp3":[],"Angel Vivaldi - An Erisian Autumn.mp3":[],"Aspirin Rose - Fucking Perfect (Pink cover).mp3":[],"August Burns Red - A Shot Below The Belt.mp3":[],"August Burns Red - Your Little Suburbia Is in Ruins.mp3":[],"Between the Buried and Me - All Bodies.mp3":[],"Between The Buried And Me - Swim To The Moon.mp3":[],"Breakwater - Eleven.mp3":[],"Breakwater - five.mp3":[],"Cosmonauts Day - The Captain.mp3":[],"Death In Vegas - Dirge.mp3":[],"If These Trees Could Talk - From Roots to Needles.mp3":[],"Killing Floor - Abandon All.mp3":[],"Long Distance Calling - Black Paper Planes.mp3":[],"Ozoi The Maid - Unfortunately.mp3":[],"Ozoi The Maid Yakui The Maid - Lanterns.mp3":[],"Ozoi The Maid Yakui The Maid - Wonderland.mp3":[],"Ozoi The Maid, Yakui The Maid - Frontier.mp3":[],"Psygnosis - FIIIX 2.0.mp3":[],"Psygnosis - Lost in Oblivion.mp3":[],"Psygnosis - Phrase 7.mp3":[],"Psygnosis - Synaptic Plasticity.mp3":[],"Psygnosis - The Judgement.mp3":[],"Raunchy - Twelve Feet Tall.mp3":[],"Rhapsody - The Mighty Ride of the Firelord.mp3":[],"Rhapsody of Fire - Wisdom of the Kings.mp3":[],"Rise Of The Northstar - What The Fuck.mp3":[],"Siberian Meat Grinder feat Distemper - Пламя в Груди.mp3":[],"Toundra - Bizancio Byzantium.mp3":[],"URO & .corridoiokraut. - Nappi.mp3":[],"What Mad Universe - Colossus.mp3":[],"What Mad Universe - head of column.mp3":[],"What Mad Universe - mythical sacred firebird.mp3":[],"What Mad Universe - Nebula My Love.mp3":[],"What Mad Universe - Starborne.mp3":[],"Within The Ruins - Ataxia II.mp3":[],"Within The Ruins - Beautiful Agony.mp3":[],"zYnthetic - Abandon All v3.mp3":[],"Between The Buried And Me - White Walls.mp3":[{seconds:80,lyrics:"The monsters are made "},{seconds:95,lyrics:"And we have proven that we will be one of them "},{seconds:116,lyrics:"The w***es take the stage flash our skills "},{seconds:129,lyrics:"Gotta draw em in gotta keep em on their toes "},{seconds:142,lyrics:"Don't show them how you truly are "},{seconds:149,lyrics:"Who would want honesty "},{seconds:163,lyrics:"Who would want a group of people that one can relate with "},{seconds:185,lyrics:"We need worship we need devotion "},{seconds:208,lyrics:"Becoming gods from the image that is thrown "},{seconds:226,lyrics:"Thrown out in their everyday lives to comfort "},{seconds:246,lyrics:"Its not a musical journey anymore "},{seconds:261,lyrics:"They chose Camilla and we stood by her the entire time "},{seconds:275,lyrics:"Monotonous expression a forced replica of a tired sound "},{seconds:289,lyrics:"Puppets for a greed-driven carnival "},{seconds:296,lyrics:"The same charade as the passing years "},{seconds:306,lyrics:"Force me out there "},{seconds:352,lyrics:"Don't give them a chance "},{seconds:355,lyrics:"They want to be fed fed a simple replication of past greatness "},{seconds:369,lyrics:"Things have changed we have changed "},{seconds:373,lyrics:"Personal happiness is what we strive to achieve "},{seconds:392,lyrics:"So you can love or hate it won't change a thing for us "},{seconds:443,lyrics:"Step back "},{seconds:462,lyrics:"Evaluate "},{seconds:468,lyrics:"Recognize "},{seconds:478,lyrics:"We just need to throw some new ideas in "},{seconds:497,lyrics:"It "},{seconds:525,lyrics:"Will eventually get out of this closed off circle we are part of "},{seconds:550,lyrics:"Its all the same "},{seconds:558,lyrics:"This is all we have when we die "},{seconds:600,lyrics:"Its whats left of us when we die "},{seconds:629,lyrics:"We will be remembered for this "},{seconds:643,lyrics:"White wall"}],"Raunchy - The Yeah Thing.mp3":[{seconds:27,lyrics:"Yeah"},{seconds:35,lyrics:"Here we go again"},{seconds:67,lyrics:"You got a killer sound there said the devil"},{seconds:71,lyrics:"So what did I say to him"},{seconds:73,lyrics:"Yeah you're right *****"},{seconds:75,lyrics:"And then we continued"},{seconds:78,lyrics:"Now this one is for you"},{seconds:80,lyrics:"F**k yeah it's on all the girls keep on dancing"},{seconds:85,lyrics:"We're ready to give them everything"},{seconds:90,lyrics:"There's no clarity but I can feel the music"},{seconds:97,lyrics:"I said before and I'll say it again"},{seconds:100,lyrics:"We're nothing without all our demons"},{seconds:103,lyrics:"This kind of devil music is the yeah thing"},{seconds:108,lyrics:"I said before and I'll say it again"},{seconds:110,lyrics:"We'll be here no matter what my friend"},{seconds:113,lyrics:"We are everything you'll ever need"},{seconds:117,lyrics:"Just bite the hand that feeds"},{seconds:120,lyrics:"Bring out your romance"},{seconds:124,lyrics:"Just sing for your halo"},{seconds:129,lyrics:"Bring out your feelings"},{seconds:134,lyrics:"And let all your love go"},{seconds:140,lyrics:"Bring out your romance"},{seconds:144,lyrics:"Just sing for your halo"},{seconds:149,lyrics:"Bring out your feelings"},{seconds:154,lyrics:"And let all your love go"},{seconds:186,lyrics:"Hell yeah"},{seconds:188,lyrics:"Walk away"},{seconds:189,lyrics:"Hell yeah"},{seconds:190,lyrics:"Walk away"},{seconds:191,lyrics:"Hell yeah"},{seconds:192,lyrics:"Walk away"},{seconds:194,lyrics:"Hell yeah"},{seconds:195,lyrics:"Walk away"},{seconds:198,lyrics:"And the devil just laughed and walked away"},{seconds:204,lyrics:"Just laughed and walked away"},{seconds:209,lyrics:"And the devil just laughed and walked away"},{seconds:214,lyrics:"Just laughed and walked away"},{seconds:217,lyrics:"Where the light is"},{seconds:220,lyrics:"There is darkness"},{seconds:222,lyrics:"Contradictions and all your temple"},{seconds:227,lyrics:"This is feeling and I don't know"},{seconds:230,lyrics:"How it gets that way"},{seconds:233,lyrics:"But it's on it's on and you f**king love it"},{seconds:238,lyrics:"And the devil just laughed and walked away"},{seconds:241,lyrics:"Bring out your romance"},{seconds:245,lyrics:"Just sing for your halo"},{seconds:251,lyrics:"Bring out your feelings"},{seconds:256,lyrics:"And let all your love go"},{seconds:261,lyrics:"Bring out your romance"},{seconds:265,lyrics:"Just sing for your halo"},{seconds:271,lyrics:"Bring out your feelings"},{seconds:276,lyrics:"And let all your love go"}]},k0=Z2({name:"MainComponent",components:{TrackList:fh,PageTabs:vh,MainInfoBand:Nh,VolumeControl:Ph,ProgressControl:_h,MainControl:Jh,OtherControl:tm,SongText:pm},setup(){const{bestParties:c,nextTrack:e,previousTrack:a,pathToCurrentFile:s,currentTrackIndex:n,changeTab:r,selectTrack:i,tabSelected:o,currentTracks:t,currentSong:l,currentTracksList:h,favoriteSongs:u,handleAddFavoriteSongBtn:d}=w0();R3(async()=>{w();const q=[["play",()=>{u2(),navigator.mediaSession.playbackState="playing"}],["pause",()=>{u2(),navigator.mediaSession.playbackState="paused"}],["nexttrack",()=>{e()}],["previoustrack",()=>{a()}],["seekto",f=>{console.log(f),H.value.currentTime=f.seekTime}]];for(const[f,m]of q)try{navigator.mediaSession.setActionHandler(f,m)}catch{console.log(`The media session action "${f}" is not supported yet.`)}});const p=t2(!1);function w(){const q=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches||localStorage.getItem("dark-color-scheme")&&JSON.parse(localStorage.getItem("dark-color-scheme"))?"dark":"light";p.value=q==="dark",y()}M1(p,()=>{y()});function y(){document.documentElement.style.setProperty("color-scheme",p.value?"dark":"light"),localStorage.setItem("dark-color-scheme",JSON.stringify(p.value))}function T(){p.value=!p.value}const H=t2(null),M=t2(0),P=t2(.8);function N(q){i2(q),j.value&&A()}function O(){w2.value?H.value.currentTime=0:e()}function c2(q){H.value.currentTime=q,j.value=!0,A()}function Z(q){console.log(q),M.value=q.target.currentTime,navigator.mediaSession.setPositionState({duration:E.value,playbackRate:1,position:M.value})}function D(q){P.value=q.target.volume}function k(q){H.value.volume=q}const E=t2(0);function i2(q){const f=q.target;E.value=f.duration,navigator.mediaSession.setPositionState({duration:E.value,playbackRate:1,position:0})}function A(){try{H.value.play().then(q=>q)}catch(q){console.log("error",q)}}const j=t2(!1);function u2(){j.value=!j.value,j.value?A():H.value.pause()}const $2=t2(!1);async function h2(q=!0){$2.value=!0;let f=20;const m=.01;async function v(z){return await new Promise(V=>{const C=setInterval(()=>{if(f>=0){const x=z?(P.value-m).toFixed(2):(P.value+m).toFixed(2);console.log(`${z?"-":"+"}`,x),f--,H.value.volume=Number(x)}else return clearInterval(C),$2.value=!1,V("done")},100)})}await v(q)}async function o2(q){for(let f=0;f<c.value.length;f++){const m=c.value[f];if(q<=m.start&&!$2.value){console.log("start"),H.value.volume=.6,H.value.currentTime=m.start,await h2(!1);return}else if(q>=m.start&&q<=m.end){console.log("continue"),q>=m.end-3&&q<=m.end-2&&!$2.value&&(console.log("end"),H.value.volume=.8,await h2(!0));return}}console.log("nextTrack"),O()}z0(async()=>{o.value===4&&j.value&&n&&await o2(M.value)});const J=t2("500px");A4(()=>{const q=document.querySelector(".main_control_ref"),f=document.querySelector(".container"),m=q.getBoundingClientRect(),v=f==null?void 0:f.getBoundingClientRect();J.value=`${Math.abs(m.top-v.top)+25}px`,H.value.volume=.8,document.addEventListener("keydown",o4)});function U2(){H.value.currentTime<=20||o.value===4?a():H.value.currentTime=0}const c1=t2(!1);function e1(){c1.value=!c1.value}const C2=t2(!1);function E4(){C2.value=!C2.value}function l6(){c1.value=!1,C2.value=!1}function f6(q){i(q),j.value=!0,A()}const w2=t2(!1);function $1(){w2.value=!w2.value}const O4=G(()=>zm[l.value.songName]||""),h1=G(()=>Vm[l.value.songName]||[]),o4=q=>{switch(q.key){case" ":u2();break;case"ArrowRight":console.log("ArrowRight"),e();break;case"ArrowLeft":console.log("ArrowLeft"),U2();break;case"ArrowUp":console.log("ArrowUp",H.value.volume),H.value.volume<=.9&&k(H.value.volume+.1);break;case"ArrowDown":console.log("ArrowDown",H.value.volume),H.value.volume>=.1&&k(H.value.volume-.1);break}};return{audioPlayer:H,isPlaying:j,currentTime:M,volume:P,onVolumeUpdate:D,totalTime:E,pathToCurrentFile:s,currentTracks:t,currentTrackIndex:n,currentTracksList:h,currentSong:l,handlerCanPlay:N,handlerEnded:O,handlerTimeChange:c2,onTimeUpdate:Z,setVolume:k,togglePlayPause:u2,nextTrack:e,previousTrackHandler:U2,handlerShowListBtn:e1,handlerSelectTrack:f6,tabSelected:o,changeTab:r,isShowTrackList:c1,repeatModeChange:$1,isRepeatMode:w2,bestParties:c,isDarkTheme:p,handlerChangeThemeBtn:T,handlerShowSongTextBtn:E4,handleAddFavoriteSongBtn:d,isShowSongText:C2,closeAllBars:l6,currentSongText:O4,currentSongTextWithTimecodes:h1,distanceBetweenComponents:J,favoriteSongs:u}}}),k5=()=>{Q7(c=>({f32e067c:c.distanceBetweenComponents}))},x5=k0.setup;k0.setup=x5?(c,e)=>(k5(),x5(c,e)):k5;const gm={class:"container"},ym=["src"];function Mm(c,e,a,s,n,r){const i=u1("TrackList"),o=u1("SongText"),t=u1("PageTabs"),l=u1("MainInfoBand"),h=u1("VolumeControl"),u=u1("ProgressControl"),d=u1("MainControl"),p=u1("OtherControl");return m2(),v2("main",{class:T2([c.isDarkTheme?"dark":"light"]),onClick:e[4]||(e[4]=g2((...w)=>c.closeAllBars&&c.closeAllBars(...w),["stop"]))},[$("div",gm,[l2(V3,{name:"slide-track-list"},{default:T6(()=>[H3(l2(i,{"current-track-index":c.currentTrackIndex,"current-tracks":c.currentTracksList,class:"top_bar",onSelectTrackFromList:c.handlerSelectTrack},null,8,["current-track-index","current-tracks","onSelectTrackFromList"]),[[g3,c.isShowTrackList]])]),_:1}),l2(V3,{name:"slide-song-text"},{default:T6(()=>[H3(l2(o,{"current-time":c.currentTime,"song-text":c.currentSongText,"song-text-with-timecodes":c.currentSongTextWithTimecodes,class:"top_bar",onTimeChange:c.handlerTimeChange},null,8,["current-time","song-text","song-text-with-timecodes","onTimeChange"]),[[g3,c.isShowSongText&&(c.currentSongText.length||c.currentSongTextWithTimecodes.length)]])]),_:1}),l2(t,{"tab-selected":c.tabSelected,onChangeTab:c.changeTab},null,8,["tab-selected","onChangeTab"]),l2(l,{"song-name":c.currentSong.songName,"has-text":!!c.currentSongText.length||!!c.currentSongTextWithTimecodes.length,"is-favorite-song":c.favoriteSongs.includes(c.currentSong.songName),onShowTextSong:c.handlerShowSongTextBtn,onAddFavorite:c.handleAddFavoriteSongBtn},null,8,["song-name","has-text","is-favorite-song","onShowTextSong","onAddFavorite"]),l2(h,{ref:"main_control_ref",class:"main_control_ref",volume:c.volume,onVolumeChange:c.setVolume},null,8,["volume","onVolumeChange"]),l2(u,{"best-parties":c.bestParties,"current-time":c.currentTime,"total-time":c.totalTime,onTimeChange:c.handlerTimeChange},null,8,["best-parties","current-time","total-time","onTimeChange"]),l2(d,{"is-playing":c.isPlaying,onPrevious:c.previousTrackHandler,onNext:c.nextTrack,onPlayPause:c.togglePlayPause},null,8,["is-playing","onPrevious","onNext","onPlayPause"]),l2(p,{"current-numb-song":c.currentTrackIndex+1,"is-show-track-list":c.isShowTrackList,"is-repeat-mode":c.isRepeatMode,"is-dark-theme":c.isDarkTheme,onRepeatModeClick:c.repeatModeChange,onShowListClick:c.handlerShowListBtn,onChangeTheme:c.handlerChangeThemeBtn},null,8,["current-numb-song","is-show-track-list","is-repeat-mode","is-dark-theme","onRepeatModeClick","onShowListClick","onChangeTheme"]),$("audio",{ref:"audioPlayer",src:c.pathToCurrentFile,preload:"metadata",onVolumechange:e[0]||(e[0]=(...w)=>c.onVolumeUpdate&&c.onVolumeUpdate(...w)),onTimeupdate:e[1]||(e[1]=(...w)=>c.onTimeUpdate&&c.onTimeUpdate(...w)),onCanplay:e[2]||(e[2]=(...w)=>c.handlerCanPlay&&c.handlerCanPlay(...w)),onEnded:e[3]||(e[3]=(...w)=>c.handlerEnded&&c.handlerEnded(...w))},null,40,ym)])],2)}const Cm=l1(k0,[["render",Mm]]);function N5(c,e){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);e&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable})),a.push.apply(a,s)}return a}function S(c){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?N5(Object(a),!0).forEach(function(s){z2(c,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):N5(Object(a)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(a,s))})}return c}function y3(c){"@babel/helpers - typeof";return y3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y3(c)}function Lm(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function S5(c,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function wm(c,e,a){return e&&S5(c.prototype,e),a&&S5(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function z2(c,e,a){return e in c?Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[e]=a,c}function x0(c,e){return km(c)||Nm(c,e)||ac(c,e)||Am()}function T4(c){return bm(c)||xm(c)||ac(c)||Sm()}function bm(c){if(Array.isArray(c))return U6(c)}function km(c){if(Array.isArray(c))return c}function xm(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Nm(c,e){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var s=[],n=!0,r=!1,i,o;try{for(a=a.call(c);!(n=(i=a.next()).done)&&(s.push(i.value),!(e&&s.length===e));n=!0);}catch(t){r=!0,o=t}finally{try{!n&&a.return!=null&&a.return()}finally{if(r)throw o}}return s}}function ac(c,e){if(c){if(typeof c=="string")return U6(c,e);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return U6(c,e)}}function U6(c,e){(e==null||e>c.length)&&(e=c.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=c[a];return s}function Sm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Am(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var A5=function(){},N0={},sc={},nc=null,rc={mark:A5,measure:A5};try{typeof window<"u"&&(N0=window),typeof document<"u"&&(sc=document),typeof MutationObserver<"u"&&(nc=MutationObserver),typeof performance<"u"&&(rc=performance)}catch{}var Tm=N0.navigator||{},T5=Tm.userAgent,I5=T5===void 0?"":T5,w1=N0,n2=sc,B5=nc,J4=rc;w1.document;var f1=!!n2.documentElement&&!!n2.head&&typeof n2.addEventListener=="function"&&typeof n2.createElement=="function",ic=~I5.indexOf("MSIE")||~I5.indexOf("Trident/"),Q4,Z4,c3,e3,a3,r1="___FONT_AWESOME___",q6=16,oc="fa",tc="svg-inline--fa",O1="data-fa-i2svg",G6="data-fa-pseudo-element",Im="data-fa-pseudo-element-pending",S0="data-prefix",A0="data-icon",P5="fontawesome-i2svg",Bm="async",Pm=["HTML","HEAD","STYLE","SCRIPT"],lc=function(){try{return!0}catch{return!1}}(),s2="classic",f2="sharp",T0=[s2,f2];function I4(c){return new Proxy(c,{get:function(a,s){return s in a?a[s]:a[s2]}})}var b4=I4((Q4={},z2(Q4,s2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),z2(Q4,f2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Q4)),k4=I4((Z4={},z2(Z4,s2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),z2(Z4,f2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Z4)),x4=I4((c3={},z2(c3,s2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),z2(c3,f2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),c3)),Fm=I4((e3={},z2(e3,s2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),z2(e3,f2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),e3)),Rm=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,fc="fa-layers-text",Wm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Dm=I4((a3={},z2(a3,s2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),z2(a3,f2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),a3)),hc=[1,2,3,4,5,6,7,8,9,10],Em=hc.concat([11,12,13,14,15,16,17,18,19,20]),Om=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],F1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},N4=new Set;Object.keys(k4[s2]).map(N4.add.bind(N4));Object.keys(k4[f2]).map(N4.add.bind(N4));var _m=[].concat(T0,T4(N4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",F1.GROUP,F1.SWAP_OPACITY,F1.PRIMARY,F1.SECONDARY]).concat(hc.map(function(c){return"".concat(c,"x")})).concat(Em.map(function(c){return"w-".concat(c)})),p4=w1.FontAwesomeConfig||{};function $m(c){var e=n2.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function Um(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(n2&&typeof n2.querySelector=="function"){var qm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];qm.forEach(function(c){var e=x0(c,2),a=e[0],s=e[1],n=Um($m(a));n!=null&&(p4[s]=n)})}var mc={styleDefault:"solid",familyDefault:"classic",cssPrefix:oc,replacementClass:tc,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};p4.familyPrefix&&(p4.cssPrefix=p4.familyPrefix);var e4=S(S({},mc),p4);e4.autoReplaceSvg||(e4.observeMutations=!1);var B={};Object.keys(mc).forEach(function(c){Object.defineProperty(B,c,{enumerable:!0,set:function(a){e4[c]=a,z4.forEach(function(s){return s(B)})},get:function(){return e4[c]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(e){e4.cssPrefix=e,z4.forEach(function(a){return a(B)})},get:function(){return e4.cssPrefix}});w1.FontAwesomeConfig=B;var z4=[];function Gm(c){return z4.push(c),function(){z4.splice(z4.indexOf(c),1)}}var p1=q6,X2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jm(c){if(!(!c||!f1)){var e=n2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var a=n2.head.childNodes,s=null,n=a.length-1;n>-1;n--){var r=a[n],i=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(s=r)}return n2.head.insertBefore(e,s),c}}var Ym="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function S4(){for(var c=12,e="";c-- >0;)e+=Ym[Math.random()*62|0];return e}function i4(c){for(var e=[],a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function I0(c){return c.classList?i4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function uc(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Km(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(uc(c[a]),'" ')},"").trim()}function _3(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(c[a].trim(),";")},"")}function B0(c){return c.size!==X2.size||c.x!==X2.x||c.y!==X2.y||c.rotate!==X2.rotate||c.flipX||c.flipY}function Xm(c){var e=c.transform,a=c.containerWidth,s=c.iconWidth,n={transform:"translate(".concat(a/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),t={transform:"".concat(r," ").concat(i," ").concat(o)},l={transform:"translate(".concat(s/2*-1," -256)")};return{outer:n,inner:t,path:l}}function Jm(c){var e=c.transform,a=c.width,s=a===void 0?q6:a,n=c.height,r=n===void 0?q6:n,i=c.startCentered,o=i===void 0?!1:i,t="";return o&&ic?t+="translate(".concat(e.x/p1-s/2,"em, ").concat(e.y/p1-r/2,"em) "):o?t+="translate(calc(-50% + ".concat(e.x/p1,"em), calc(-50% + ").concat(e.y/p1,"em)) "):t+="translate(".concat(e.x/p1,"em, ").concat(e.y/p1,"em) "),t+="scale(".concat(e.size/p1*(e.flipX?-1:1),", ").concat(e.size/p1*(e.flipY?-1:1),") "),t+="rotate(".concat(e.rotate,"deg) "),t}var Qm=`:root, :host {
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
}`;function dc(){var c=oc,e=tc,a=B.cssPrefix,s=B.replacementClass,n=Qm;if(a!==c||s!==e){var r=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");n=n.replace(r,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(o,".".concat(s))}return n}var F5=!1;function y6(){B.autoAddCss&&!F5&&(jm(dc()),F5=!0)}var Zm={mixout:function(){return{dom:{css:dc,insertCss:y6}}},hooks:function(){return{beforeDOMElementCreation:function(){y6()},beforeI2svg:function(){y6()}}}},i1=w1||{};i1[r1]||(i1[r1]={});i1[r1].styles||(i1[r1].styles={});i1[r1].hooks||(i1[r1].hooks={});i1[r1].shims||(i1[r1].shims=[]);var O2=i1[r1],vc=[],cu=function c(){n2.removeEventListener("DOMContentLoaded",c),M3=1,vc.map(function(e){return e()})},M3=!1;f1&&(M3=(n2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(n2.readyState),M3||n2.addEventListener("DOMContentLoaded",cu));function eu(c){f1&&(M3?setTimeout(c,0):vc.push(c))}function B4(c){var e=c.tag,a=c.attributes,s=a===void 0?{}:a,n=c.children,r=n===void 0?[]:n;return typeof c=="string"?uc(c):"<".concat(e," ").concat(Km(s),">").concat(r.map(B4).join(""),"</").concat(e,">")}function R5(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var au=function(e,a){return function(s,n,r,i){return e.call(a,s,n,r,i)}},M6=function(e,a,s,n){var r=Object.keys(e),i=r.length,o=n!==void 0?au(a,n):a,t,l,h;for(s===void 0?(t=1,h=e[r[0]]):(t=0,h=s);t<i;t++)l=r[t],h=o(h,e[l],l,e);return h};function su(c){for(var e=[],a=0,s=c.length;a<s;){var n=c.charCodeAt(a++);if(n>=55296&&n<=56319&&a<s){var r=c.charCodeAt(a++);(r&64512)==56320?e.push(((n&1023)<<10)+(r&1023)+65536):(e.push(n),a--)}else e.push(n)}return e}function j6(c){var e=su(c);return e.length===1?e[0].toString(16):null}function nu(c,e){var a=c.length,s=c.charCodeAt(e),n;return s>=55296&&s<=56319&&a>e+1&&(n=c.charCodeAt(e+1),n>=56320&&n<=57343)?(s-55296)*1024+n-56320+65536:s}function W5(c){return Object.keys(c).reduce(function(e,a){var s=c[a],n=!!s.icon;return n?e[s.iconName]=s.icon:e[a]=s,e},{})}function Y6(c,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=a.skipHooks,n=s===void 0?!1:s,r=W5(e);typeof O2.hooks.addPack=="function"&&!n?O2.hooks.addPack(c,W5(e)):O2.styles[c]=S(S({},O2.styles[c]||{}),r),c==="fas"&&Y6("fa",e)}var s3,n3,r3,G1=O2.styles,ru=O2.shims,iu=(s3={},z2(s3,s2,Object.values(x4[s2])),z2(s3,f2,Object.values(x4[f2])),s3),P0=null,Hc={},pc={},zc={},Vc={},gc={},ou=(n3={},z2(n3,s2,Object.keys(b4[s2])),z2(n3,f2,Object.keys(b4[f2])),n3);function tu(c){return~_m.indexOf(c)}function lu(c,e){var a=e.split("-"),s=a[0],n=a.slice(1).join("-");return s===c&&n!==""&&!tu(n)?n:null}var yc=function(){var e=function(r){return M6(G1,function(i,o,t){return i[t]=M6(o,r,{}),i},{})};Hc=e(function(n,r,i){if(r[3]&&(n[r[3]]=i),r[2]){var o=r[2].filter(function(t){return typeof t=="number"});o.forEach(function(t){n[t.toString(16)]=i})}return n}),pc=e(function(n,r,i){if(n[i]=i,r[2]){var o=r[2].filter(function(t){return typeof t=="string"});o.forEach(function(t){n[t]=i})}return n}),gc=e(function(n,r,i){var o=r[2];return n[i]=i,o.forEach(function(t){n[t]=i}),n});var a="far"in G1||B.autoFetchSvg,s=M6(ru,function(n,r){var i=r[0],o=r[1],t=r[2];return o==="far"&&!a&&(o="fas"),typeof i=="string"&&(n.names[i]={prefix:o,iconName:t}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:o,iconName:t}),n},{names:{},unicodes:{}});zc=s.names,Vc=s.unicodes,P0=$3(B.styleDefault,{family:B.familyDefault})};Gm(function(c){P0=$3(c.styleDefault,{family:B.familyDefault})});yc();function F0(c,e){return(Hc[c]||{})[e]}function fu(c,e){return(pc[c]||{})[e]}function R1(c,e){return(gc[c]||{})[e]}function Mc(c){return zc[c]||{prefix:null,iconName:null}}function hu(c){var e=Vc[c],a=F0("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function b1(){return P0}var R0=function(){return{prefix:null,iconName:null,rest:[]}};function $3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,s=a===void 0?s2:a,n=b4[s][c],r=k4[s][c]||k4[s][n],i=c in O2.styles?c:null;return r||i||null}var D5=(r3={},z2(r3,s2,Object.keys(x4[s2])),z2(r3,f2,Object.keys(x4[f2])),r3);function U3(c){var e,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.skipLookups,n=s===void 0?!1:s,r=(e={},z2(e,s2,"".concat(B.cssPrefix,"-").concat(s2)),z2(e,f2,"".concat(B.cssPrefix,"-").concat(f2)),e),i=null,o=s2;(c.includes(r[s2])||c.some(function(l){return D5[s2].includes(l)}))&&(o=s2),(c.includes(r[f2])||c.some(function(l){return D5[f2].includes(l)}))&&(o=f2);var t=c.reduce(function(l,h){var u=lu(B.cssPrefix,h);if(G1[h]?(h=iu[o].includes(h)?Fm[o][h]:h,i=h,l.prefix=h):ou[o].indexOf(h)>-1?(i=h,l.prefix=$3(h,{family:o})):u?l.iconName=u:h!==B.replacementClass&&h!==r[s2]&&h!==r[f2]&&l.rest.push(h),!n&&l.prefix&&l.iconName){var d=i==="fa"?Mc(l.iconName):{},p=R1(l.prefix,l.iconName);d.prefix&&(i=null),l.iconName=d.iconName||p||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!G1.far&&G1.fas&&!B.autoFetchSvg&&(l.prefix="fas")}return l},R0());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&o===f2&&(G1.fass||B.autoFetchSvg)&&(t.prefix="fass",t.iconName=R1(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||i==="fa")&&(t.prefix=b1()||"fas"),t}var mu=function(){function c(){Lm(this,c),this.definitions={}}return wm(c,[{key:"add",value:function(){for(var a=this,s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){a.definitions[o]=S(S({},a.definitions[o]||{}),i[o]),Y6(o,i[o]);var t=x4[s2][o];t&&Y6(t,i[o]),yc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,s){var n=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(n).map(function(r){var i=n[r],o=i.prefix,t=i.iconName,l=i.icon,h=l[2];a[o]||(a[o]={}),h.length>0&&h.forEach(function(u){typeof u=="string"&&(a[o][u]=l)}),a[o][t]=l}),a}}]),c}(),E5=[],j1={},Q1={},uu=Object.keys(Q1);function du(c,e){var a=e.mixoutsTo;return E5=c,j1={},Object.keys(Q1).forEach(function(s){uu.indexOf(s)===-1&&delete Q1[s]}),E5.forEach(function(s){var n=s.mixout?s.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(a[i]=n[i]),y3(n[i])==="object"&&Object.keys(n[i]).forEach(function(o){a[i]||(a[i]={}),a[i][o]=n[i][o]})}),s.hooks){var r=s.hooks();Object.keys(r).forEach(function(i){j1[i]||(j1[i]=[]),j1[i].push(r[i])})}s.provides&&s.provides(Q1)}),a}function K6(c,e){for(var a=arguments.length,s=new Array(a>2?a-2:0),n=2;n<a;n++)s[n-2]=arguments[n];var r=j1[c]||[];return r.forEach(function(i){e=i.apply(null,[e].concat(s))}),e}function _1(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),s=1;s<e;s++)a[s-1]=arguments[s];var n=j1[c]||[];n.forEach(function(r){r.apply(null,a)})}function o1(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return Q1[c]?Q1[c].apply(null,e):void 0}function X6(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,a=c.prefix||b1();if(e)return e=R1(a,e)||e,R5(Cc.definitions,a,e)||R5(O2.styles,a,e)}var Cc=new mu,vu=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,_1("noAuto")},Hu={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return f1?(_1("beforeI2svg",e),o1("pseudoElements2svg",e),o1("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,eu(function(){zu({autoReplaceSvgRoot:a}),_1("watch",e)})}},pu={icon:function(e){if(e===null)return null;if(y3(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:R1(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],s=$3(e[0]);return{prefix:s,iconName:R1(s,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(B.cssPrefix,"-"))>-1||e.match(Rm))){var n=U3(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||b1(),iconName:R1(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){var r=b1();return{prefix:r,iconName:R1(r,e)||e}}}},B2={noAuto:vu,config:B,dom:Hu,parse:pu,library:Cc,findIconDefinition:X6,toHtml:B4},zu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,s=a===void 0?n2:a;(Object.keys(O2.styles).length>0||B.autoFetchSvg)&&f1&&B.autoReplaceSvg&&B2.dom.i2svg({node:s})};function q3(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return B4(s)})}}),Object.defineProperty(c,"node",{get:function(){if(f1){var s=n2.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function Vu(c){var e=c.children,a=c.main,s=c.mask,n=c.attributes,r=c.styles,i=c.transform;if(B0(i)&&a.found&&!s.found){var o=a.width,t=a.height,l={x:o/t/2,y:.5};n.style=_3(S(S({},r),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:e}]}function gu(c){var e=c.prefix,a=c.iconName,s=c.children,n=c.attributes,r=c.symbol,i=r===!0?"".concat(e,"-").concat(B.cssPrefix,"-").concat(a):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},n),{},{id:i}),children:s}]}]}function W0(c){var e=c.icons,a=e.main,s=e.mask,n=c.prefix,r=c.iconName,i=c.transform,o=c.symbol,t=c.title,l=c.maskId,h=c.titleId,u=c.extra,d=c.watchable,p=d===void 0?!1:d,w=s.found?s:a,y=w.width,T=w.height,H=n==="fak",M=[B.replacementClass,r?"".concat(B.cssPrefix,"-").concat(r):""].filter(function(k){return u.classes.indexOf(k)===-1}).filter(function(k){return k!==""||!!k}).concat(u.classes).join(" "),P={children:[],attributes:S(S({},u.attributes),{},{"data-prefix":n,"data-icon":r,class:M,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(T)})},N=H&&!~u.classes.indexOf("fa-fw")?{width:"".concat(y/T*16*.0625,"em")}:{};p&&(P.attributes[O1]=""),t&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(h||S4())},children:[t]}),delete P.attributes.title);var O=S(S({},P),{},{prefix:n,iconName:r,main:a,mask:s,maskId:l,transform:i,symbol:o,styles:S(S({},N),u.styles)}),c2=s.found&&a.found?o1("generateAbstractMask",O)||{children:[],attributes:{}}:o1("generateAbstractIcon",O)||{children:[],attributes:{}},Z=c2.children,D=c2.attributes;return O.children=Z,O.attributes=D,o?gu(O):Vu(O)}function O5(c){var e=c.content,a=c.width,s=c.height,n=c.transform,r=c.title,i=c.extra,o=c.watchable,t=o===void 0?!1:o,l=S(S(S({},i.attributes),r?{title:r}:{}),{},{class:i.classes.join(" ")});t&&(l[O1]="");var h=S({},i.styles);B0(n)&&(h.transform=Jm({transform:n,startCentered:!0,width:a,height:s}),h["-webkit-transform"]=h.transform);var u=_3(h);u.length>0&&(l.style=u);var d=[];return d.push({tag:"span",attributes:l,children:[e]}),r&&d.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),d}function yu(c){var e=c.content,a=c.title,s=c.extra,n=S(S(S({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")}),r=_3(s.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[e]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var C6=O2.styles;function J6(c){var e=c[0],a=c[1],s=c.slice(4),n=x0(s,1),r=n[0],i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(F1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(F1.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(F1.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:a,icon:i}}var Mu={found:!1,width:512,height:512};function Cu(c,e){!lc&&!B.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function Q6(c,e){var a=e;return e==="fa"&&B.styleDefault!==null&&(e=b1()),new Promise(function(s,n){if(o1("missingIconAbstract"),a==="fa"){var r=Mc(c)||{};c=r.iconName||c,e=r.prefix||e}if(c&&e&&C6[e]&&C6[e][c]){var i=C6[e][c];return s(J6(i))}Cu(c,e),s(S(S({},Mu),{},{icon:B.showMissingIcons&&c?o1("missingIconAbstract")||{}:{}}))})}var _5=function(){},Z6=B.measurePerformance&&J4&&J4.mark&&J4.measure?J4:{mark:_5,measure:_5},d4='FA "6.5.1"',Lu=function(e){return Z6.mark("".concat(d4," ").concat(e," begins")),function(){return Lc(e)}},Lc=function(e){Z6.mark("".concat(d4," ").concat(e," ends")),Z6.measure("".concat(d4," ").concat(e),"".concat(d4," ").concat(e," begins"),"".concat(d4," ").concat(e," ends"))},D0={begin:Lu,end:Lc},h3=function(){};function $5(c){var e=c.getAttribute?c.getAttribute(O1):null;return typeof e=="string"}function wu(c){var e=c.getAttribute?c.getAttribute(S0):null,a=c.getAttribute?c.getAttribute(A0):null;return e&&a}function bu(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(B.replacementClass)}function ku(){if(B.autoReplaceSvg===!0)return m3.replace;var c=m3[B.autoReplaceSvg];return c||m3.replace}function xu(c){return n2.createElementNS("http://www.w3.org/2000/svg",c)}function Nu(c){return n2.createElement(c)}function wc(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,s=a===void 0?c.tag==="svg"?xu:Nu:a;if(typeof c=="string")return n2.createTextNode(c);var n=s(c.tag);Object.keys(c.attributes||[]).forEach(function(i){n.setAttribute(i,c.attributes[i])});var r=c.children||[];return r.forEach(function(i){n.appendChild(wc(i,{ceFn:s}))}),n}function Su(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var m3={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(n){a.parentNode.insertBefore(wc(n),a)}),a.getAttribute(O1)===null&&B.keepOriginalSource){var s=n2.createComment(Su(a));a.parentNode.replaceChild(s,a)}else a.remove()},nest:function(e){var a=e[0],s=e[1];if(~I0(a).indexOf(B.replacementClass))return m3.replace(e);var n=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var r=s[0].attributes.class.split(" ").reduce(function(o,t){return t===B.replacementClass||t.match(n)?o.toSvg.push(t):o.toNode.push(t),o},{toNode:[],toSvg:[]});s[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",r.toNode.join(" "))}var i=s.map(function(o){return B4(o)}).join(`
`);a.setAttribute(O1,""),a.innerHTML=i}};function U5(c){c()}function bc(c,e){var a=typeof e=="function"?e:h3;if(c.length===0)a();else{var s=U5;B.mutateApproach===Bm&&(s=w1.requestAnimationFrame||U5),s(function(){var n=ku(),r=D0.begin("mutate");c.map(n),r(),a()})}}var E0=!1;function kc(){E0=!0}function c0(){E0=!1}var C3=null;function q5(c){if(B5&&B.observeMutations){var e=c.treeCallback,a=e===void 0?h3:e,s=c.nodeCallback,n=s===void 0?h3:s,r=c.pseudoElementsCallback,i=r===void 0?h3:r,o=c.observeMutationsRoot,t=o===void 0?n2:o;C3=new B5(function(l){if(!E0){var h=b1();i4(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!$5(u.addedNodes[0])&&(B.searchPseudoElements&&i(u.target),a(u.target)),u.type==="attributes"&&u.target.parentNode&&B.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&$5(u.target)&&~Om.indexOf(u.attributeName))if(u.attributeName==="class"&&wu(u.target)){var d=U3(I0(u.target)),p=d.prefix,w=d.iconName;u.target.setAttribute(S0,p||h),w&&u.target.setAttribute(A0,w)}else bu(u.target)&&n(u.target)})}}),f1&&C3.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Au(){C3&&C3.disconnect()}function Tu(c){var e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(s,n){var r=n.split(":"),i=r[0],o=r.slice(1);return i&&o.length>0&&(s[i]=o.join(":").trim()),s},{})),a}function Iu(c){var e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",n=U3(I0(c));return n.prefix||(n.prefix=b1()),e&&a&&(n.prefix=e,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&s.length>0&&(n.iconName=fu(n.prefix,c.innerText)||F0(n.prefix,j6(c.innerText))),!n.iconName&&B.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function Bu(c){var e=i4(c.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),a=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return B.autoA11y&&(a?e["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(s||S4()):(e["aria-hidden"]="true",e.focusable="false")),e}function Pu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:X2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function G5(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Iu(c),s=a.iconName,n=a.prefix,r=a.rest,i=Bu(c),o=K6("parseNodeAttributes",{},c),t=e.styleParser?Tu(c):[];return S({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:n,transform:X2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:t,attributes:i}},o)}var Fu=O2.styles;function xc(c){var e=B.autoReplaceSvg==="nest"?G5(c,{styleParser:!1}):G5(c);return~e.extra.classes.indexOf(fc)?o1("generateLayersText",c,e):o1("generateSvgReplacementMutation",c,e)}var k1=new Set;T0.map(function(c){k1.add("fa-".concat(c))});Object.keys(b4[s2]).map(k1.add.bind(k1));Object.keys(b4[f2]).map(k1.add.bind(k1));k1=T4(k1);function j5(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!f1)return Promise.resolve();var a=n2.documentElement.classList,s=function(u){return a.add("".concat(P5,"-").concat(u))},n=function(u){return a.remove("".concat(P5,"-").concat(u))},r=B.autoFetchSvg?k1:T0.map(function(h){return"fa-".concat(h)}).concat(Object.keys(Fu));r.includes("fa")||r.push("fa");var i=[".".concat(fc,":not([").concat(O1,"])")].concat(r.map(function(h){return".".concat(h,":not([").concat(O1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=i4(c.querySelectorAll(i))}catch{}if(o.length>0)s("pending"),n("complete");else return Promise.resolve();var t=D0.begin("onTree"),l=o.reduce(function(h,u){try{var d=xc(u);d&&h.push(d)}catch(p){lc||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise(function(h,u){Promise.all(l).then(function(d){bc(d,function(){s("active"),s("complete"),n("pending"),typeof e=="function"&&e(),t(),h()})}).catch(function(d){t(),u(d)})})}function Ru(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;xc(c).then(function(a){a&&bc([a],e)})}function Wu(c){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(e||{}).icon?e:X6(e||{}),n=a.mask;return n&&(n=(n||{}).icon?n:X6(n||{})),c(s,S(S({},a),{},{mask:n}))}}var Du=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,n=s===void 0?X2:s,r=a.symbol,i=r===void 0?!1:r,o=a.mask,t=o===void 0?null:o,l=a.maskId,h=l===void 0?null:l,u=a.title,d=u===void 0?null:u,p=a.titleId,w=p===void 0?null:p,y=a.classes,T=y===void 0?[]:y,H=a.attributes,M=H===void 0?{}:H,P=a.styles,N=P===void 0?{}:P;if(e){var O=e.prefix,c2=e.iconName,Z=e.icon;return q3(S({type:"icon"},e),function(){return _1("beforeDOMElementCreation",{iconDefinition:e,params:a}),B.autoA11y&&(d?M["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(w||S4()):(M["aria-hidden"]="true",M.focusable="false")),W0({icons:{main:J6(Z),mask:t?J6(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:c2,transform:S(S({},X2),n),symbol:i,title:d,maskId:h,titleId:w,extra:{attributes:M,styles:N,classes:T}})})}},Eu={mixout:function(){return{icon:Wu(Du)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=j5,a.nodeCallback=Ru,a}}},provides:function(e){e.i2svg=function(a){var s=a.node,n=s===void 0?n2:s,r=a.callback,i=r===void 0?function(){}:r;return j5(n,i)},e.generateSvgReplacementMutation=function(a,s){var n=s.iconName,r=s.title,i=s.titleId,o=s.prefix,t=s.transform,l=s.symbol,h=s.mask,u=s.maskId,d=s.extra;return new Promise(function(p,w){Promise.all([Q6(n,o),h.iconName?Q6(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var T=x0(y,2),H=T[0],M=T[1];p([a,W0({icons:{main:H,mask:M},prefix:o,iconName:n,transform:t,symbol:l,maskId:u,title:r,titleId:i,extra:d,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(a){var s=a.children,n=a.attributes,r=a.main,i=a.transform,o=a.styles,t=_3(o);t.length>0&&(n.style=t);var l;return B0(i)&&(l=o1("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),s.push(l||r.icon),{children:s,attributes:n}}}},Ou={mixout:function(){return{layer:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.classes,r=n===void 0?[]:n;return q3({type:"layer"},function(){_1("beforeDOMElementCreation",{assembler:a,params:s});var i=[];return a(function(o){Array.isArray(o)?o.map(function(t){i=i.concat(t.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(T4(r)).join(" ")},children:i}]})}}}},_u={mixout:function(){return{counter:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.title,r=n===void 0?null:n,i=s.classes,o=i===void 0?[]:i,t=s.attributes,l=t===void 0?{}:t,h=s.styles,u=h===void 0?{}:h;return q3({type:"counter",content:a},function(){return _1("beforeDOMElementCreation",{content:a,params:s}),yu({content:a.toString(),title:r,extra:{attributes:l,styles:u,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(T4(o))}})})}}}},$u={mixout:function(){return{text:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.transform,r=n===void 0?X2:n,i=s.title,o=i===void 0?null:i,t=s.classes,l=t===void 0?[]:t,h=s.attributes,u=h===void 0?{}:h,d=s.styles,p=d===void 0?{}:d;return q3({type:"text",content:a},function(){return _1("beforeDOMElementCreation",{content:a,params:s}),O5({content:a,transform:S(S({},X2),r),title:o,extra:{attributes:u,styles:p,classes:["".concat(B.cssPrefix,"-layers-text")].concat(T4(l))}})})}}},provides:function(e){e.generateLayersText=function(a,s){var n=s.title,r=s.transform,i=s.extra,o=null,t=null;if(ic){var l=parseInt(getComputedStyle(a).fontSize,10),h=a.getBoundingClientRect();o=h.width/l,t=h.height/l}return B.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,O5({content:a.innerHTML,width:o,height:t,transform:r,title:n,extra:i,watchable:!0})])}}},Uu=new RegExp('"',"ug"),Y5=[1105920,1112319];function qu(c){var e=c.replace(Uu,""),a=nu(e,0),s=a>=Y5[0]&&a<=Y5[1],n=e.length===2?e[0]===e[1]:!1;return{value:j6(n?e[0]:e),isSecondary:s||n}}function K5(c,e){var a="".concat(Im).concat(e.replace(":","-"));return new Promise(function(s,n){if(c.getAttribute(a)!==null)return s();var r=i4(c.children),i=r.filter(function(Z){return Z.getAttribute(G6)===e})[0],o=w1.getComputedStyle(c,e),t=o.getPropertyValue("font-family").match(Wm),l=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(i&&!t)return c.removeChild(i),s();if(t&&h!=="none"&&h!==""){var u=o.getPropertyValue("content"),d=~["Sharp"].indexOf(t[2])?f2:s2,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(t[2])?k4[d][t[2].toLowerCase()]:Dm[d][l],w=qu(u),y=w.value,T=w.isSecondary,H=t[0].startsWith("FontAwesome"),M=F0(p,y),P=M;if(H){var N=hu(y);N.iconName&&N.prefix&&(M=N.iconName,p=N.prefix)}if(M&&!T&&(!i||i.getAttribute(S0)!==p||i.getAttribute(A0)!==P)){c.setAttribute(a,P),i&&c.removeChild(i);var O=Pu(),c2=O.extra;c2.attributes[G6]=e,Q6(M,p).then(function(Z){var D=W0(S(S({},O),{},{icons:{main:Z,mask:R0()},prefix:p,iconName:P,extra:c2,watchable:!0})),k=n2.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(k,c.firstChild):c.appendChild(k),k.outerHTML=D.map(function(E){return B4(E)}).join(`
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}