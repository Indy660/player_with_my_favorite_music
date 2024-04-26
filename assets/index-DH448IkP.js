(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();function a0(c,e){const a=Object.create(null),s=c.split(",");for(let n=0;n<s.length;n++)a[s[n]]=!0;return e?n=>!!a[n.toLowerCase()]:n=>!!a[n]}const s2={},K1=[],X2=()=>{},It=()=>!1,w3=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),s0=c=>c.startsWith("onUpdate:"),H2=Object.assign,n0=(c,e)=>{const a=c.indexOf(e);a>-1&&c.splice(a,1)},Pt=Object.prototype.hasOwnProperty,Y=(c,e)=>Pt.call(c,e),D=Array.isArray,X1=c=>b3(c)==="[object Map]",a7=c=>b3(c)==="[object Set]",U=c=>typeof c=="function",d2=c=>typeof c=="string",n4=c=>typeof c=="symbol",i2=c=>c!==null&&typeof c=="object",s7=c=>(i2(c)||U(c))&&U(c.then)&&U(c.catch),n7=Object.prototype.toString,b3=c=>n7.call(c),Ft=c=>b3(c).slice(8,-1),r7=c=>b3(c)==="[object Object]",r0=c=>d2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,i3=a0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k3=c=>{const e=Object.create(null);return a=>e[a]||(e[a]=c(a))},Bt=/-(\w)/g,Q2=k3(c=>c.replace(Bt,(e,a)=>a?a.toUpperCase():"")),Rt=/\B([A-Z])/g,r4=k3(c=>c.replace(Rt,"-$1").toLowerCase()),x3=k3(c=>c.charAt(0).toUpperCase()+c.slice(1)),h6=k3(c=>c?`on${x3(c)}`:""),E1=(c,e)=>!Object.is(c,e),m6=(c,e)=>{for(let a=0;a<c.length;a++)c[a](e)},u3=(c,e,a)=>{Object.defineProperty(c,e,{configurable:!0,enumerable:!1,value:a})},Dt=c=>{const e=parseFloat(c);return isNaN(e)?c:e},Wt=c=>{const e=d2(c)?Number(c):NaN;return isNaN(e)?c:e};let E8;const b6=()=>E8||(E8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function N3(c){if(D(c)){const e={};for(let a=0;a<c.length;a++){const s=c[a],n=d2(s)?$t(s):N3(s);if(n)for(const r in n)e[r]=n[r]}return e}else if(d2(c)||i2(c))return c}const Et=/;(?![^(]*\))/g,Ot=/:([^]+)/,_t=/\/\*[^]*?\*\//g;function $t(c){const e={};return c.replace(_t,"").split(Et).forEach(a=>{if(a){const s=a.split(Ot);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function P2(c){let e="";if(d2(c))e=c;else if(D(c))for(let a=0;a<c.length;a++){const s=P2(c[a]);s&&(e+=s+" ")}else if(i2(c))for(const a in c)c[a]&&(e+=a+" ");return e.trim()}const Ut="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qt=a0(Ut);function i7(c){return!!c||c===""}const F2=c=>d2(c)?c:c==null?"":D(c)||i2(c)&&(c.toString===n7||!U(c.toString))?JSON.stringify(c,o7,2):String(c),o7=(c,e)=>e&&e.__v_isRef?o7(c,e.value):X1(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((a,[s,n],r)=>(a[u6(s,r)+" =>"]=n,a),{})}:a7(e)?{[`Set(${e.size})`]:[...e.values()].map(a=>u6(a))}:n4(e)?u6(e):i2(e)&&!D(e)&&!r7(e)?String(e):e,u6=(c,e="")=>{var a;return n4(c)?`Symbol(${(a=c.description)!=null?a:e})`:c};let W2;class Gt{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=W2,!e&&W2&&(this.index=(W2.scopes||(W2.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const a=W2;try{return W2=this,e()}finally{W2=a}}}on(){W2=this}off(){W2=this.parent}stop(e){if(this._active){let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.scopes)for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function jt(c,e=W2){e&&e.active&&e.effects.push(c)}function Yt(){return W2}const i0=c=>{const e=new Set(c);return e.w=0,e.n=0,e},t7=c=>(c.w&M1)>0,l7=c=>(c.n&M1)>0,Kt=({deps:c})=>{if(c.length)for(let e=0;e<c.length;e++)c[e].w|=M1},Xt=c=>{const{deps:e}=c;if(e.length){let a=0;for(let s=0;s<e.length;s++){const n=e[s];t7(n)&&!l7(n)?n.delete(c):e[a++]=n,n.w&=~M1,n.n&=~M1}e.length=a}},k6=new WeakMap;let d4=0,M1=1;const x6=30;let E2;const D1=Symbol(""),N6=Symbol("");class o0{constructor(e,a=null,s){this.fn=e,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,jt(this,s)}run(){if(!this.active)return this.fn();let e=E2,a=V1;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=E2,E2=this,V1=!0,M1=1<<++d4,d4<=x6?Kt(this):O8(this),this.fn()}finally{d4<=x6&&Xt(this),M1=1<<--d4,E2=this.parent,V1=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){E2===this?this.deferStop=!0:this.active&&(O8(this),this.onStop&&this.onStop(),this.active=!1)}}function O8(c){const{deps:e}=c;if(e.length){for(let a=0;a<e.length;a++)e[a].delete(c);e.length=0}}let V1=!0;const f7=[];function i4(){f7.push(V1),V1=!1}function o4(){const c=f7.pop();V1=c===void 0?!0:c}function x2(c,e,a){if(V1&&E2){let s=k6.get(c);s||k6.set(c,s=new Map);let n=s.get(a);n||s.set(a,n=i0()),h7(n)}}function h7(c,e){let a=!1;d4<=x6?l7(c)||(c.n|=M1,a=!t7(c)):a=!c.has(E2),a&&(c.add(E2),E2.deps.push(c))}function s1(c,e,a,s,n,r){const i=k6.get(c);if(!i)return;let o=[];if(e==="clear")o=[...i.values()];else if(a==="length"&&D(c)){const t=Number(s);i.forEach((f,h)=>{(h==="length"||!n4(h)&&h>=t)&&o.push(f)})}else switch(a!==void 0&&o.push(i.get(a)),e){case"add":D(c)?r0(a)&&o.push(i.get("length")):(o.push(i.get(D1)),X1(c)&&o.push(i.get(N6)));break;case"delete":D(c)||(o.push(i.get(D1)),X1(c)&&o.push(i.get(N6)));break;case"set":X1(c)&&o.push(i.get(D1));break}if(o.length===1)o[0]&&S6(o[0]);else{const t=[];for(const f of o)f&&t.push(...f);S6(i0(t))}}function S6(c,e){const a=D(c)?c:[...c];for(const s of a)s.computed&&_8(s);for(const s of a)s.computed||_8(s)}function _8(c,e){(c!==E2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Qt=a0("__proto__,__v_isRef,__isVue"),m7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(n4)),$8=Jt();function Jt(){const c={};return["includes","indexOf","lastIndexOf"].forEach(e=>{c[e]=function(...a){const s=K(this);for(let r=0,i=this.length;r<i;r++)x2(s,"get",r+"");const n=s[e](...a);return n===-1||n===!1?s[e](...a.map(K)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{c[e]=function(...a){i4();const s=K(this)[e].apply(this,a);return o4(),s}}),c}function Zt(c){const e=K(this);return x2(e,"has",c),e.hasOwnProperty(c)}class u7{constructor(e=!1,a=!1){this._isReadonly=e,this._shallow=a}get(e,a,s){const n=this._isReadonly,r=this._shallow;if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return r;if(a==="__v_raw")return s===(n?r?ml:z7:r?H7:v7).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const i=D(e);if(!n){if(i&&Y($8,a))return Reflect.get($8,a,s);if(a==="hasOwnProperty")return Zt}const o=Reflect.get(e,a,s);return(n4(a)?m7.has(a):Qt(a))||(n||x2(e,"get",a),r)?o:N2(o)?i&&r0(a)?o:o.value:i2(o)?n?p7(o):f0(o):o}}class d7 extends u7{constructor(e=!1){super(!1,e)}set(e,a,s,n){let r=e[a];if(!this._shallow){const t=e4(r);if(!d3(s)&&!e4(s)&&(r=K(r),s=K(s)),!D(e)&&N2(r)&&!N2(s))return t?!1:(r.value=s,!0)}const i=D(e)&&r0(a)?Number(a)<e.length:Y(e,a),o=Reflect.set(e,a,s,n);return e===K(n)&&(i?E1(s,r)&&s1(e,"set",a,s):s1(e,"add",a,s)),o}deleteProperty(e,a){const s=Y(e,a);e[a];const n=Reflect.deleteProperty(e,a);return n&&s&&s1(e,"delete",a,void 0),n}has(e,a){const s=Reflect.has(e,a);return(!n4(a)||!m7.has(a))&&x2(e,"has",a),s}ownKeys(e){return x2(e,"iterate",D(e)?"length":D1),Reflect.ownKeys(e)}}class cl extends u7{constructor(e=!1){super(!0,e)}set(e,a){return!0}deleteProperty(e,a){return!0}}const el=new d7,al=new cl,sl=new d7(!0),t0=c=>c,S3=c=>Reflect.getPrototypeOf(c);function _4(c,e,a=!1,s=!1){c=c.__v_raw;const n=K(c),r=K(e);a||(E1(e,r)&&x2(n,"get",e),x2(n,"get",r));const{has:i}=S3(n),o=s?t0:a?m0:M4;if(i.call(n,e))return o(c.get(e));if(i.call(n,r))return o(c.get(r));c!==n&&c.get(e)}function $4(c,e=!1){const a=this.__v_raw,s=K(a),n=K(c);return e||(E1(c,n)&&x2(s,"has",c),x2(s,"has",n)),c===n?a.has(c):a.has(c)||a.has(n)}function U4(c,e=!1){return c=c.__v_raw,!e&&x2(K(c),"iterate",D1),Reflect.get(c,"size",c)}function U8(c){c=K(c);const e=K(this);return S3(e).has.call(e,c)||(e.add(c),s1(e,"add",c,c)),this}function q8(c,e){e=K(e);const a=K(this),{has:s,get:n}=S3(a);let r=s.call(a,c);r||(c=K(c),r=s.call(a,c));const i=n.call(a,c);return a.set(c,e),r?E1(e,i)&&s1(a,"set",c,e):s1(a,"add",c,e),this}function G8(c){const e=K(this),{has:a,get:s}=S3(e);let n=a.call(e,c);n||(c=K(c),n=a.call(e,c)),s&&s.call(e,c);const r=e.delete(c);return n&&s1(e,"delete",c,void 0),r}function j8(){const c=K(this),e=c.size!==0,a=c.clear();return e&&s1(c,"clear",void 0,void 0),a}function q4(c,e){return function(s,n){const r=this,i=r.__v_raw,o=K(i),t=e?t0:c?m0:M4;return!c&&x2(o,"iterate",D1),i.forEach((f,h)=>s.call(n,t(f),t(h),r))}}function G4(c,e,a){return function(...s){const n=this.__v_raw,r=K(n),i=X1(r),o=c==="entries"||c===Symbol.iterator&&i,t=c==="keys"&&i,f=n[c](...s),h=a?t0:e?m0:M4;return!e&&x2(r,"iterate",t?N6:D1),{next(){const{value:u,done:d}=f.next();return d?{value:u,done:d}:{value:o?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function h1(c){return function(...e){return c==="delete"?!1:c==="clear"?void 0:this}}function nl(){const c={get(r){return _4(this,r)},get size(){return U4(this)},has:$4,add:U8,set:q8,delete:G8,clear:j8,forEach:q4(!1,!1)},e={get(r){return _4(this,r,!1,!0)},get size(){return U4(this)},has:$4,add:U8,set:q8,delete:G8,clear:j8,forEach:q4(!1,!0)},a={get(r){return _4(this,r,!0)},get size(){return U4(this,!0)},has(r){return $4.call(this,r,!0)},add:h1("add"),set:h1("set"),delete:h1("delete"),clear:h1("clear"),forEach:q4(!0,!1)},s={get(r){return _4(this,r,!0,!0)},get size(){return U4(this,!0)},has(r){return $4.call(this,r,!0)},add:h1("add"),set:h1("set"),delete:h1("delete"),clear:h1("clear"),forEach:q4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{c[r]=G4(r,!1,!1),a[r]=G4(r,!0,!1),e[r]=G4(r,!1,!0),s[r]=G4(r,!0,!0)}),[c,a,e,s]}const[rl,il,ol,tl]=nl();function l0(c,e){const a=e?c?tl:ol:c?il:rl;return(s,n,r)=>n==="__v_isReactive"?!c:n==="__v_isReadonly"?c:n==="__v_raw"?s:Reflect.get(Y(a,n)&&n in s?a:s,n,r)}const ll={get:l0(!1,!1)},fl={get:l0(!1,!0)},hl={get:l0(!0,!1)},v7=new WeakMap,H7=new WeakMap,z7=new WeakMap,ml=new WeakMap;function ul(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dl(c){return c.__v_skip||!Object.isExtensible(c)?0:ul(Ft(c))}function f0(c){return e4(c)?c:h0(c,!1,el,ll,v7)}function vl(c){return h0(c,!1,sl,fl,H7)}function p7(c){return h0(c,!0,al,hl,z7)}function h0(c,e,a,s,n){if(!i2(c)||c.__v_raw&&!(e&&c.__v_isReactive))return c;const r=n.get(c);if(r)return r;const i=dl(c);if(i===0)return c;const o=new Proxy(c,i===2?s:a);return n.set(c,o),o}function Q1(c){return e4(c)?Q1(c.__v_raw):!!(c&&c.__v_isReactive)}function e4(c){return!!(c&&c.__v_isReadonly)}function d3(c){return!!(c&&c.__v_isShallow)}function V7(c){return Q1(c)||e4(c)}function K(c){const e=c&&c.__v_raw;return e?K(e):c}function g7(c){return u3(c,"__v_skip",!0),c}const M4=c=>i2(c)?f0(c):c,m0=c=>i2(c)?p7(c):c;function M7(c){V1&&E2&&(c=K(c),h7(c.dep||(c.dep=i0())))}function y7(c,e){c=K(c);const a=c.dep;a&&S6(a)}function N2(c){return!!(c&&c.__v_isRef===!0)}function f2(c){return Hl(c,!1)}function Hl(c,e){return N2(c)?c:new zl(c,e)}class zl{constructor(e,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?e:K(e),this._value=a?e:M4(e)}get value(){return M7(this),this._value}set value(e){const a=this.__v_isShallow||d3(e)||e4(e);e=a?e:K(e),E1(e,this._rawValue)&&(this._rawValue=e,this._value=a?e:M4(e),y7(this))}}function pl(c){return N2(c)?c.value:c}const Vl={get:(c,e,a)=>pl(Reflect.get(c,e,a)),set:(c,e,a,s)=>{const n=c[e];return N2(n)&&!N2(a)?(n.value=a,!0):Reflect.set(c,e,a,s)}};function C7(c){return Q1(c)?c:new Proxy(c,Vl)}class gl{constructor(e,a,s,n){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new o0(e,()=>{this._dirty||(this._dirty=!0,y7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=s}get value(){const e=K(this);return M7(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ml(c,e,a=!1){let s,n;const r=U(c);return r?(s=c,n=X2):(s=c.get,n=c.set),new gl(s,n,r||!n,a)}function g1(c,e,a,s){let n;try{n=s?c(...s):c()}catch(r){A3(r,e,a)}return n}function B2(c,e,a,s){if(U(c)){const r=g1(c,e,a,s);return r&&s7(r)&&r.catch(i=>{A3(i,e,a)}),r}const n=[];for(let r=0;r<c.length;r++)n.push(B2(c[r],e,a,s));return n}function A3(c,e,a,s=!0){const n=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=a;for(;r;){const f=r.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](c,i,o)===!1)return}r=r.parent}const t=e.appContext.config.errorHandler;if(t){g1(t,null,10,[c,i,o]);return}}yl(c,a,n,s)}function yl(c,e,a,s=!0){console.error(c)}let y4=!1,A6=!1;const g2=[];let Y2=0;const J1=[];let e1=null,T1=0;const L7=Promise.resolve();let u0=null;function w7(c){const e=u0||L7;return c?e.then(this?c.bind(this):c):e}function Cl(c){let e=Y2+1,a=g2.length;for(;e<a;){const s=e+a>>>1,n=g2[s],r=C4(n);r<c||r===c&&n.pre?e=s+1:a=s}return e}function d0(c){(!g2.length||!g2.includes(c,y4&&c.allowRecurse?Y2+1:Y2))&&(c.id==null?g2.push(c):g2.splice(Cl(c.id),0,c),b7())}function b7(){!y4&&!A6&&(A6=!0,u0=L7.then(x7))}function Ll(c){const e=g2.indexOf(c);e>Y2&&g2.splice(e,1)}function wl(c){D(c)?J1.push(...c):(!e1||!e1.includes(c,c.allowRecurse?T1+1:T1))&&J1.push(c),b7()}function Y8(c,e,a=y4?Y2+1:0){for(;a<g2.length;a++){const s=g2[a];if(s&&s.pre){if(c&&s.id!==c.uid)continue;g2.splice(a,1),a--,s()}}}function k7(c){if(J1.length){const e=[...new Set(J1)];if(J1.length=0,e1){e1.push(...e);return}for(e1=e,e1.sort((a,s)=>C4(a)-C4(s)),T1=0;T1<e1.length;T1++)e1[T1]();e1=null,T1=0}}const C4=c=>c.id==null?1/0:c.id,bl=(c,e)=>{const a=C4(c)-C4(e);if(a===0){if(c.pre&&!e.pre)return-1;if(e.pre&&!c.pre)return 1}return a};function x7(c){A6=!1,y4=!0,g2.sort(bl);try{for(Y2=0;Y2<g2.length;Y2++){const e=g2[Y2];e&&e.active!==!1&&g1(e,null,14)}}finally{Y2=0,g2.length=0,k7(),y4=!1,u0=null,(g2.length||J1.length)&&x7()}}function kl(c,e,...a){if(c.isUnmounted)return;const s=c.vnode.props||s2;let n=a;const r=e.startsWith("update:"),i=r&&e.slice(7);if(i&&i in s){const h=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:d}=s[h]||s2;d&&(n=a.map(V=>d2(V)?V.trim():V)),u&&(n=a.map(Dt))}let o,t=s[o=h6(e)]||s[o=h6(Q2(e))];!t&&r&&(t=s[o=h6(r4(e))]),t&&B2(t,c,6,n);const f=s[o+"Once"];if(f){if(!c.emitted)c.emitted={};else if(c.emitted[o])return;c.emitted[o]=!0,B2(f,c,6,n)}}function N7(c,e,a=!1){const s=e.emitsCache,n=s.get(c);if(n!==void 0)return n;const r=c.emits;let i={},o=!1;if(!U(c)){const t=f=>{const h=N7(f,e,!0);h&&(o=!0,H2(i,h))};!a&&e.mixins.length&&e.mixins.forEach(t),c.extends&&t(c.extends),c.mixins&&c.mixins.forEach(t)}return!r&&!o?(i2(c)&&s.set(c,null),null):(D(r)?r.forEach(t=>i[t]=null):H2(i,r),i2(c)&&s.set(c,i),i)}function T3(c,e){return!c||!w3(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(c,e[0].toLowerCase()+e.slice(1))||Y(c,r4(e))||Y(c,e))}let A2=null,I3=null;function v3(c){const e=A2;return A2=c,I3=c&&c.type.__scopeId||null,e}function v0(c){I3=c}function H0(){I3=null}function T6(c,e=A2,a){if(!e||c._n)return c;const s=(...n)=>{s._d&&i5(-1);const r=v3(e);let i;try{i=c(...n)}finally{v3(r),s._d&&i5(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function d6(c){const{type:e,vnode:a,proxy:s,withProxy:n,props:r,propsOptions:[i],slots:o,attrs:t,emit:f,render:h,renderCache:u,data:d,setupState:V,ctx:b,inheritAttrs:M}=c;let T,H;const y=v3(c);try{if(a.shapeFlag&4){const N=n||s,E=N;T=j2(h.call(E,N,u,r,V,d,b)),H=t}else{const N=e;T=j2(N.length>1?N(r,{attrs:t,slots:o,emit:f}):N(r,null)),H=e.props?t:xl(t)}}catch(N){p4.length=0,A3(N,c,1),T=l2($2)}let F=T;if(H&&M!==!1){const N=Object.keys(H),{shapeFlag:E}=F;N.length&&E&7&&(i&&N.some(s0)&&(H=Nl(H,i)),F=y1(F,H))}return a.dirs&&(F=y1(F),F.dirs=F.dirs?F.dirs.concat(a.dirs):a.dirs),a.transition&&(F.transition=a.transition),T=F,v3(y),T}const xl=c=>{let e;for(const a in c)(a==="class"||a==="style"||w3(a))&&((e||(e={}))[a]=c[a]);return e},Nl=(c,e)=>{const a={};for(const s in c)(!s0(s)||!(s.slice(9)in e))&&(a[s]=c[s]);return a};function Sl(c,e,a){const{props:s,children:n,component:r}=c,{props:i,children:o,patchFlag:t}=e,f=r.emitsOptions;if(e.dirs||e.transition)return!0;if(a&&t>=0){if(t&1024)return!0;if(t&16)return s?K8(s,i,f):!!i;if(t&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(i[d]!==s[d]&&!T3(f,d))return!0}}}else return(n||o)&&(!o||!o.$stable)?!0:s===i?!1:s?i?K8(s,i,f):!0:!!i;return!1}function K8(c,e,a){const s=Object.keys(e);if(s.length!==Object.keys(c).length)return!0;for(let n=0;n<s.length;n++){const r=s[n];if(e[r]!==c[r]&&!T3(a,r))return!0}return!1}function Al({vnode:c,parent:e},a){for(;e&&e.subTree===c;)(c=e.vnode).el=a,e=e.parent}const S7="components";function m1(c,e){return Il(S7,c,!0,e)||c}const Tl=Symbol.for("v-ndc");function Il(c,e,a=!0,s=!1){const n=A2||p2;if(n){const r=n.type;if(c===S7){const o=Nf(r,!1);if(o&&(o===e||o===Q2(e)||o===x3(Q2(e))))return r}const i=X8(n[c]||r[c],e)||X8(n.appContext[c],e);return!i&&s?r:i}}function X8(c,e){return c&&(c[e]||c[Q2(e)]||c[x3(Q2(e))])}const Pl=c=>c.__isSuspense;function Fl(c,e){e&&e.pendingBranch?D(c)?e.effects.push(...c):e.effects.push(c):wl(c)}function z0(c,e){return P3(c,null,e)}function Bl(c,e){return P3(c,null,{flush:"post"})}const j4={};function Z1(c,e,a){return P3(c,e,a)}function P3(c,e,{immediate:a,deep:s,flush:n,onTrack:r,onTrigger:i}=s2){var o;const t=Yt()===((o=p2)==null?void 0:o.scope)?p2:null;let f,h=!1,u=!1;if(N2(c)?(f=()=>c.value,h=d3(c)):Q1(c)?(f=()=>c,s=!0):D(c)?(u=!0,h=c.some(N=>Q1(N)||d3(N)),f=()=>c.map(N=>{if(N2(N))return N.value;if(Q1(N))return F1(N);if(U(N))return g1(N,t,2)})):U(c)?e?f=()=>g1(c,t,2):f=()=>{if(!(t&&t.isUnmounted))return d&&d(),B2(c,t,3,[V])}:f=X2,e&&s){const N=f;f=()=>F1(N())}let d,V=N=>{d=y.onStop=()=>{g1(N,t,4),d=y.onStop=void 0}},b;if(w4)if(V=X2,e?a&&B2(e,t,3,[f(),u?[]:void 0,V]):f(),n==="sync"){const N=Tf();b=N.__watcherHandles||(N.__watcherHandles=[])}else return X2;let M=u?new Array(c.length).fill(j4):j4;const T=()=>{if(y.active)if(e){const N=y.run();(s||h||(u?N.some((E,e2)=>E1(E,M[e2])):E1(N,M)))&&(d&&d(),B2(e,t,3,[N,M===j4?void 0:u&&M[0]===j4?[]:M,V]),M=N)}else y.run()};T.allowRecurse=!!e;let H;n==="sync"?H=T:n==="post"?H=()=>k2(T,t&&t.suspense):(T.pre=!0,t&&(T.id=t.uid),H=()=>d0(T));const y=new o0(f,H);e?a?T():M=y.run():n==="post"?k2(y.run.bind(y),t&&t.suspense):y.run();const F=()=>{y.stop(),t&&t.scope&&n0(t.scope.effects,y)};return b&&b.push(F),F}function Rl(c,e,a){const s=this.proxy,n=d2(c)?c.includes(".")?A7(s,c):()=>s[c]:c.bind(s,s);let r;U(e)?r=e:(r=e.handler,a=e);const i=p2;a4(this);const o=P3(n,r.bind(s),a);return i?a4(i):W1(),o}function A7(c,e){const a=e.split(".");return()=>{let s=c;for(let n=0;n<a.length&&s;n++)s=s[a[n]];return s}}function F1(c,e){if(!i2(c)||c.__v_skip||(e=e||new Set,e.has(c)))return c;if(e.add(c),N2(c))F1(c.value,e);else if(D(c))for(let a=0;a<c.length;a++)F1(c[a],e);else if(a7(c)||X1(c))c.forEach(a=>{F1(a,e)});else if(r7(c))for(const a in c)F1(c[a],e);return c}function H3(c,e){const a=A2;if(a===null)return c;const s=_3(a)||a.proxy,n=c.dirs||(c.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,t,f=s2]=e[r];i&&(U(i)&&(i={mounted:i,updated:i}),i.deep&&F1(o),n.push({dir:i,instance:s,value:o,oldValue:void 0,arg:t,modifiers:f}))}return c}function x1(c,e,a,s){const n=c.dirs,r=e&&e.dirs;for(let i=0;i<n.length;i++){const o=n[i];r&&(o.oldValue=r[i].value);let t=o.dir[s];t&&(i4(),B2(t,a,8,[c.el,o,c,e]),o4())}}const z1=Symbol("_leaveCb"),Y4=Symbol("_enterCb");function Dl(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return T4(()=>{c.isMounted=!0}),B7(()=>{c.isUnmounting=!0}),c}const I2=[Function,Array],T7={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:I2,onEnter:I2,onAfterEnter:I2,onEnterCancelled:I2,onBeforeLeave:I2,onLeave:I2,onAfterLeave:I2,onLeaveCancelled:I2,onBeforeAppear:I2,onAppear:I2,onAfterAppear:I2,onAppearCancelled:I2},Wl={name:"BaseTransition",props:T7,setup(c,{slots:e}){const a=j7(),s=Dl();let n;return()=>{const r=e.default&&P7(e.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const M of r)if(M.type!==$2){i=M;break}}const o=K(c),{mode:t}=o;if(s.isLeaving)return v6(i);const f=Q8(i);if(!f)return v6(i);const h=I6(f,o,s,a);P6(f,h);const u=a.subTree,d=u&&Q8(u);let V=!1;const{getTransitionKey:b}=f.type;if(b){const M=b();n===void 0?n=M:M!==n&&(n=M,V=!0)}if(d&&d.type!==$2&&(!I1(f,d)||V)){const M=I6(d,o,s,a);if(P6(d,M),t==="out-in")return s.isLeaving=!0,M.afterLeave=()=>{s.isLeaving=!1,a.update.active!==!1&&a.update()},v6(i);t==="in-out"&&f.type!==$2&&(M.delayLeave=(T,H,y)=>{const F=I7(s,d);F[String(d.key)]=d,T[z1]=()=>{H(),T[z1]=void 0,delete h.delayedLeave},h.delayedLeave=y})}return i}}},El=Wl;function I7(c,e){const{leavingVNodes:a}=c;let s=a.get(e.type);return s||(s=Object.create(null),a.set(e.type,s)),s}function I6(c,e,a,s){const{appear:n,mode:r,persisted:i=!1,onBeforeEnter:o,onEnter:t,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:u,onLeave:d,onAfterLeave:V,onLeaveCancelled:b,onBeforeAppear:M,onAppear:T,onAfterAppear:H,onAppearCancelled:y}=e,F=String(c.key),N=I7(a,c),E=(W,k)=>{W&&B2(W,s,9,k)},e2=(W,k)=>{const O=k[1];E(W,k),D(W)?W.every(o2=>o2.length<=1)&&O():W.length<=1&&O()},Z={mode:r,persisted:i,beforeEnter(W){let k=o;if(!a.isMounted)if(n)k=M||o;else return;W[z1]&&W[z1](!0);const O=N[F];O&&I1(c,O)&&O.el[z1]&&O.el[z1](),E(k,[W])},enter(W){let k=t,O=f,o2=h;if(!a.isMounted)if(n)k=T||t,O=H||f,o2=y||h;else return;let A=!1;const X=W[Y4]=m2=>{A||(A=!0,m2?E(o2,[W]):E(O,[W]),Z.delayedLeave&&Z.delayedLeave(),W[Y4]=void 0)};k?e2(k,[W,X]):X()},leave(W,k){const O=String(c.key);if(W[Y4]&&W[Y4](!0),a.isUnmounting)return k();E(u,[W]);let o2=!1;const A=W[z1]=X=>{o2||(o2=!0,k(),X?E(b,[W]):E(V,[W]),W[z1]=void 0,N[O]===c&&delete N[O])};N[O]=c,d?e2(d,[W,A]):A()},clone(W){return I6(W,e,a,s)}};return Z}function v6(c){if(F3(c))return c=y1(c),c.children=null,c}function Q8(c){return F3(c)?c.children?c.children[0]:void 0:c}function P6(c,e){c.shapeFlag&6&&c.component?P6(c.component.subTree,e):c.shapeFlag&128?(c.ssContent.transition=e.clone(c.ssContent),c.ssFallback.transition=e.clone(c.ssFallback)):c.transition=e}function P7(c,e=!1,a){let s=[],n=0;for(let r=0;r<c.length;r++){let i=c[r];const o=a==null?i.key:String(a)+String(i.key!=null?i.key:r);i.type===L2?(i.patchFlag&128&&n++,s=s.concat(P7(i.children,e,o))):(e||i.type!==$2)&&s.push(o!=null?y1(i,{key:o}):i)}if(n>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function J2(c,e){return U(c)?H2({name:c.name},e,{setup:c}):c}const o3=c=>!!c.type.__asyncLoader,F3=c=>c.type.__isKeepAlive;function Ol(c,e){F7(c,"a",e)}function _l(c,e){F7(c,"da",e)}function F7(c,e,a=p2){const s=c.__wdc||(c.__wdc=()=>{let n=a;for(;n;){if(n.isDeactivated)return;n=n.parent}return c()});if(B3(e,s,a),a){let n=a.parent;for(;n&&n.parent;)F3(n.parent.vnode)&&$l(s,e,a,n),n=n.parent}}function $l(c,e,a,s){const n=B3(e,c,s,!0);D3(()=>{n0(s[e],n)},a)}function B3(c,e,a=p2,s=!1){if(a){const n=a[c]||(a[c]=[]),r=e.__weh||(e.__weh=(...i)=>{if(a.isUnmounted)return;i4(),a4(a);const o=B2(e,a,c,i);return W1(),o4(),o});return s?n.unshift(r):n.push(r),r}}const o1=c=>(e,a=p2)=>(!w4||c==="sp")&&B3(c,(...s)=>e(...s),a),R3=o1("bm"),T4=o1("m"),Ul=o1("bu"),ql=o1("u"),B7=o1("bum"),D3=o1("um"),Gl=o1("sp"),jl=o1("rtg"),Yl=o1("rtc");function Kl(c,e=p2){B3("ec",c,e)}function W3(c,e,a,s){let n;const r=a&&a[s];if(D(c)||d2(c)){n=new Array(c.length);for(let i=0,o=c.length;i<o;i++)n[i]=e(c[i],i,void 0,r&&r[i])}else if(typeof c=="number"){n=new Array(c);for(let i=0;i<c;i++)n[i]=e(i+1,i,void 0,r&&r[i])}else if(i2(c))if(c[Symbol.iterator])n=Array.from(c,(i,o)=>e(i,o,void 0,r&&r[o]));else{const i=Object.keys(c);n=new Array(i.length);for(let o=0,t=i.length;o<t;o++){const f=i[o];n[o]=e(c[f],f,o,r&&r[o])}}else n=[];return a&&(a[s]=n),n}const F6=c=>c?Y7(c)?_3(c)||c.proxy:F6(c.parent):null,z4=H2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>F6(c.parent),$root:c=>F6(c.root),$emit:c=>c.emit,$options:c=>p0(c),$forceUpdate:c=>c.f||(c.f=()=>d0(c.update)),$nextTick:c=>c.n||(c.n=w7.bind(c.proxy)),$watch:c=>Rl.bind(c)}),H6=(c,e)=>c!==s2&&!c.__isScriptSetup&&Y(c,e),Xl={get({_:c},e){const{ctx:a,setupState:s,data:n,props:r,accessCache:i,type:o,appContext:t}=c;let f;if(e[0]!=="$"){const V=i[e];if(V!==void 0)switch(V){case 1:return s[e];case 2:return n[e];case 4:return a[e];case 3:return r[e]}else{if(H6(s,e))return i[e]=1,s[e];if(n!==s2&&Y(n,e))return i[e]=2,n[e];if((f=c.propsOptions[0])&&Y(f,e))return i[e]=3,r[e];if(a!==s2&&Y(a,e))return i[e]=4,a[e];B6&&(i[e]=0)}}const h=z4[e];let u,d;if(h)return e==="$attrs"&&x2(c,"get",e),h(c);if((u=o.__cssModules)&&(u=u[e]))return u;if(a!==s2&&Y(a,e))return i[e]=4,a[e];if(d=t.config.globalProperties,Y(d,e))return d[e]},set({_:c},e,a){const{data:s,setupState:n,ctx:r}=c;return H6(n,e)?(n[e]=a,!0):s!==s2&&Y(s,e)?(s[e]=a,!0):Y(c.props,e)||e[0]==="$"&&e.slice(1)in c?!1:(r[e]=a,!0)},has({_:{data:c,setupState:e,accessCache:a,ctx:s,appContext:n,propsOptions:r}},i){let o;return!!a[i]||c!==s2&&Y(c,i)||H6(e,i)||(o=r[0])&&Y(o,i)||Y(s,i)||Y(z4,i)||Y(n.config.globalProperties,i)},defineProperty(c,e,a){return a.get!=null?c._.accessCache[e]=0:Y(a,"value")&&this.set(c,e,a.value,null),Reflect.defineProperty(c,e,a)}};function J8(c){return D(c)?c.reduce((e,a)=>(e[a]=null,e),{}):c}let B6=!0;function Ql(c){const e=p0(c),a=c.proxy,s=c.ctx;B6=!1,e.beforeCreate&&Z8(e.beforeCreate,c,"bc");const{data:n,computed:r,methods:i,watch:o,provide:t,inject:f,created:h,beforeMount:u,mounted:d,beforeUpdate:V,updated:b,activated:M,deactivated:T,beforeDestroy:H,beforeUnmount:y,destroyed:F,unmounted:N,render:E,renderTracked:e2,renderTriggered:Z,errorCaptured:W,serverPrefetch:k,expose:O,inheritAttrs:o2,components:A,directives:X,filters:m2}=e;if(f&&Jl(f,s,null),i)for(const c2 in i){const Q=i[c2];U(Q)&&(s[c2]=Q.bind(a))}if(n){const c2=n.call(a,a);i2(c2)&&(c.data=f0(c2))}if(B6=!0,r)for(const c2 in r){const Q=r[c2],Z2=U(Q)?Q.bind(a,a):U(Q.get)?Q.get.bind(a,a):X2,b1=!U(Q)&&U(Q.set)?Q.set.bind(a):X2,c1=j({get:Z2,set:b1});Object.defineProperty(s,c2,{enumerable:!0,configurable:!0,get:()=>c1.value,set:y2=>c1.value=y2})}if(o)for(const c2 in o)R7(o[c2],s,a,c2);if(t){const c2=U(t)?t.call(a):t;Reflect.ownKeys(c2).forEach(Q=>{nf(Q,c2[Q])})}h&&Z8(h,c,"c");function t2(c2,Q){D(Q)?Q.forEach(Z2=>c2(Z2.bind(a))):Q&&c2(Q.bind(a))}if(t2(R3,u),t2(T4,d),t2(Ul,V),t2(ql,b),t2(Ol,M),t2(_l,T),t2(Kl,W),t2(Yl,e2),t2(jl,Z),t2(B7,y),t2(D3,N),t2(Gl,k),D(O))if(O.length){const c2=c.exposed||(c.exposed={});O.forEach(Q=>{Object.defineProperty(c2,Q,{get:()=>a[Q],set:Z2=>a[Q]=Z2})})}else c.exposed||(c.exposed={});E&&c.render===X2&&(c.render=E),o2!=null&&(c.inheritAttrs=o2),A&&(c.components=A),X&&(c.directives=X)}function Jl(c,e,a=X2){D(c)&&(c=R6(c));for(const s in c){const n=c[s];let r;i2(n)?"default"in n?r=t3(n.from||s,n.default,!0):r=t3(n.from||s):r=t3(n),N2(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):e[s]=r}}function Z8(c,e,a){B2(D(c)?c.map(s=>s.bind(e.proxy)):c.bind(e.proxy),e,a)}function R7(c,e,a,s){const n=s.includes(".")?A7(a,s):()=>a[s];if(d2(c)){const r=e[c];U(r)&&Z1(n,r)}else if(U(c))Z1(n,c.bind(a));else if(i2(c))if(D(c))c.forEach(r=>R7(r,e,a,s));else{const r=U(c.handler)?c.handler.bind(a):e[c.handler];U(r)&&Z1(n,r,c)}}function p0(c){const e=c.type,{mixins:a,extends:s}=e,{mixins:n,optionsCache:r,config:{optionMergeStrategies:i}}=c.appContext,o=r.get(e);let t;return o?t=o:!n.length&&!a&&!s?t=e:(t={},n.length&&n.forEach(f=>z3(t,f,i,!0)),z3(t,e,i)),i2(e)&&r.set(e,t),t}function z3(c,e,a,s=!1){const{mixins:n,extends:r}=e;r&&z3(c,r,a,!0),n&&n.forEach(i=>z3(c,i,a,!0));for(const i in e)if(!(s&&i==="expose")){const o=Zl[i]||a&&a[i];c[i]=o?o(c[i],e[i]):e[i]}return c}const Zl={data:c5,props:e5,emits:e5,methods:v4,computed:v4,beforeCreate:C2,created:C2,beforeMount:C2,mounted:C2,beforeUpdate:C2,updated:C2,beforeDestroy:C2,beforeUnmount:C2,destroyed:C2,unmounted:C2,activated:C2,deactivated:C2,errorCaptured:C2,serverPrefetch:C2,components:v4,directives:v4,watch:ef,provide:c5,inject:cf};function c5(c,e){return e?c?function(){return H2(U(c)?c.call(this,this):c,U(e)?e.call(this,this):e)}:e:c}function cf(c,e){return v4(R6(c),R6(e))}function R6(c){if(D(c)){const e={};for(let a=0;a<c.length;a++)e[c[a]]=c[a];return e}return c}function C2(c,e){return c?[...new Set([].concat(c,e))]:e}function v4(c,e){return c?H2(Object.create(null),c,e):e}function e5(c,e){return c?D(c)&&D(e)?[...new Set([...c,...e])]:H2(Object.create(null),J8(c),J8(e??{})):e}function ef(c,e){if(!c)return e;if(!e)return c;const a=H2(Object.create(null),c);for(const s in e)a[s]=C2(c[s],e[s]);return a}function D7(){return{app:null,config:{isNativeTag:It,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let af=0;function sf(c,e){return function(s,n=null){U(s)||(s=H2({},s)),n!=null&&!i2(n)&&(n=null);const r=D7(),i=new WeakSet;let o=!1;const t=r.app={_uid:af++,_component:s,_props:n,_container:null,_context:r,_instance:null,version:If,get config(){return r.config},set config(f){},use(f,...h){return i.has(f)||(f&&U(f.install)?(i.add(f),f.install(t,...h)):U(f)&&(i.add(f),f(t,...h))),t},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),t},component(f,h){return h?(r.components[f]=h,t):r.components[f]},directive(f,h){return h?(r.directives[f]=h,t):r.directives[f]},mount(f,h,u){if(!o){const d=l2(s,n);return d.appContext=r,h&&e?e(d,f):c(d,f,u),o=!0,t._container=f,f.__vue_app__=t,_3(d.component)||d.component.proxy}},unmount(){o&&(c(null,t._container),delete t._container.__vue_app__)},provide(f,h){return r.provides[f]=h,t},runWithContext(f){p3=t;try{return f()}finally{p3=null}}};return t}}let p3=null;function nf(c,e){if(p2){let a=p2.provides;const s=p2.parent&&p2.parent.provides;s===a&&(a=p2.provides=Object.create(s)),a[c]=e}}function t3(c,e,a=!1){const s=p2||A2;if(s||p3){const n=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:p3._context.provides;if(n&&c in n)return n[c];if(arguments.length>1)return a&&U(e)?e.call(s&&s.proxy):e}}function rf(c,e,a,s=!1){const n={},r={};u3(r,O3,1),c.propsDefaults=Object.create(null),W7(c,e,n,r);for(const i in c.propsOptions[0])i in n||(n[i]=void 0);a?c.props=s?n:vl(n):c.type.props?c.props=n:c.props=r,c.attrs=r}function of(c,e,a,s){const{props:n,attrs:r,vnode:{patchFlag:i}}=c,o=K(n),[t]=c.propsOptions;let f=!1;if((s||i>0)&&!(i&16)){if(i&8){const h=c.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(T3(c.emitsOptions,d))continue;const V=e[d];if(t)if(Y(r,d))V!==r[d]&&(r[d]=V,f=!0);else{const b=Q2(d);n[b]=D6(t,o,b,V,c,!1)}else V!==r[d]&&(r[d]=V,f=!0)}}}else{W7(c,e,n,r)&&(f=!0);let h;for(const u in o)(!e||!Y(e,u)&&((h=r4(u))===u||!Y(e,h)))&&(t?a&&(a[u]!==void 0||a[h]!==void 0)&&(n[u]=D6(t,o,u,void 0,c,!0)):delete n[u]);if(r!==o)for(const u in r)(!e||!Y(e,u))&&(delete r[u],f=!0)}f&&s1(c,"set","$attrs")}function W7(c,e,a,s){const[n,r]=c.propsOptions;let i=!1,o;if(e)for(let t in e){if(i3(t))continue;const f=e[t];let h;n&&Y(n,h=Q2(t))?!r||!r.includes(h)?a[h]=f:(o||(o={}))[h]=f:T3(c.emitsOptions,t)||(!(t in s)||f!==s[t])&&(s[t]=f,i=!0)}if(r){const t=K(a),f=o||s2;for(let h=0;h<r.length;h++){const u=r[h];a[u]=D6(n,t,u,f[u],c,!Y(f,u))}}return i}function D6(c,e,a,s,n,r){const i=c[a];if(i!=null){const o=Y(i,"default");if(o&&s===void 0){const t=i.default;if(i.type!==Function&&!i.skipFactory&&U(t)){const{propsDefaults:f}=n;a in f?s=f[a]:(a4(n),s=f[a]=t.call(null,e),W1())}else s=t}i[0]&&(r&&!o?s=!1:i[1]&&(s===""||s===r4(a))&&(s=!0))}return s}function E7(c,e,a=!1){const s=e.propsCache,n=s.get(c);if(n)return n;const r=c.props,i={},o=[];let t=!1;if(!U(c)){const h=u=>{t=!0;const[d,V]=E7(u,e,!0);H2(i,d),V&&o.push(...V)};!a&&e.mixins.length&&e.mixins.forEach(h),c.extends&&h(c.extends),c.mixins&&c.mixins.forEach(h)}if(!r&&!t)return i2(c)&&s.set(c,K1),K1;if(D(r))for(let h=0;h<r.length;h++){const u=Q2(r[h]);a5(u)&&(i[u]=s2)}else if(r)for(const h in r){const u=Q2(h);if(a5(u)){const d=r[h],V=i[u]=D(d)||U(d)?{type:d}:H2({},d);if(V){const b=r5(Boolean,V.type),M=r5(String,V.type);V[0]=b>-1,V[1]=M<0||b<M,(b>-1||Y(V,"default"))&&o.push(u)}}}const f=[i,o];return i2(c)&&s.set(c,f),f}function a5(c){return c[0]!=="$"}function s5(c){const e=c&&c.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:c===null?"null":""}function n5(c,e){return s5(c)===s5(e)}function r5(c,e){return D(e)?e.findIndex(a=>n5(a,c)):U(e)&&n5(e,c)?0:-1}const O7=c=>c[0]==="_"||c==="$stable",V0=c=>D(c)?c.map(j2):[j2(c)],tf=(c,e,a)=>{if(e._n)return e;const s=T6((...n)=>V0(e(...n)),a);return s._c=!1,s},_7=(c,e,a)=>{const s=c._ctx;for(const n in c){if(O7(n))continue;const r=c[n];if(U(r))e[n]=tf(n,r,s);else if(r!=null){const i=V0(r);e[n]=()=>i}}},$7=(c,e)=>{const a=V0(e);c.slots.default=()=>a},lf=(c,e)=>{if(c.vnode.shapeFlag&32){const a=e._;a?(c.slots=K(e),u3(e,"_",a)):_7(e,c.slots={})}else c.slots={},e&&$7(c,e);u3(c.slots,O3,1)},ff=(c,e,a)=>{const{vnode:s,slots:n}=c;let r=!0,i=s2;if(s.shapeFlag&32){const o=e._;o?a&&o===1?r=!1:(H2(n,e),!a&&o===1&&delete n._):(r=!e.$stable,_7(e,n)),i=e}else e&&($7(c,e),i={default:1});if(r)for(const o in n)!O7(o)&&i[o]==null&&delete n[o]};function W6(c,e,a,s,n=!1){if(D(c)){c.forEach((d,V)=>W6(d,e&&(D(e)?e[V]:e),a,s,n));return}if(o3(s)&&!n)return;const r=s.shapeFlag&4?_3(s.component)||s.component.proxy:s.el,i=n?null:r,{i:o,r:t}=c,f=e&&e.r,h=o.refs===s2?o.refs={}:o.refs,u=o.setupState;if(f!=null&&f!==t&&(d2(f)?(h[f]=null,Y(u,f)&&(u[f]=null)):N2(f)&&(f.value=null)),U(t))g1(t,o,12,[i,h]);else{const d=d2(t),V=N2(t);if(d||V){const b=()=>{if(c.f){const M=d?Y(u,t)?u[t]:h[t]:t.value;n?D(M)&&n0(M,r):D(M)?M.includes(r)||M.push(r):d?(h[t]=[r],Y(u,t)&&(u[t]=h[t])):(t.value=[r],c.k&&(h[c.k]=t.value))}else d?(h[t]=i,Y(u,t)&&(u[t]=i)):V&&(t.value=i,c.k&&(h[c.k]=i))};i?(b.id=-1,k2(b,a)):b()}}}const k2=Fl;function hf(c){return mf(c)}function mf(c,e){const a=b6();a.__VUE__=!0;const{insert:s,remove:n,patchProp:r,createElement:i,createText:o,createComment:t,setText:f,setElementText:h,parentNode:u,nextSibling:d,setScopeId:V=X2,insertStaticContent:b}=c,M=(l,m,v,z=null,p=null,C=null,x=!1,L=null,w=!!m.dynamicChildren)=>{if(l===m)return;l&&!I1(l,m)&&(z=U1(l),y2(l,p,C,!0),l=null),m.patchFlag===-2&&(w=!1,m.dynamicChildren=null);const{type:g,ref:B,shapeFlag:I}=m;switch(g){case E3:T(l,m,v,z);break;case $2:H(l,m,v,z);break;case l3:l==null&&y(m,v,z,x);break;case L2:A(l,m,v,z,p,C,x,L,w);break;default:I&1?E(l,m,v,z,p,C,x,L,w):I&6?X(l,m,v,z,p,C,x,L,w):(I&64||I&128)&&g.process(l,m,v,z,p,C,x,L,w,f1)}B!=null&&p&&W6(B,l&&l.ref,C,m||l,!m)},T=(l,m,v,z)=>{if(l==null)s(m.el=o(m.children),v,z);else{const p=m.el=l.el;m.children!==l.children&&f(p,m.children)}},H=(l,m,v,z)=>{l==null?s(m.el=t(m.children||""),v,z):m.el=l.el},y=(l,m,v,z)=>{[l.el,l.anchor]=b(l.children,m,v,z,l.el,l.anchor)},F=({el:l,anchor:m},v,z)=>{let p;for(;l&&l!==m;)p=d(l),s(l,v,z),l=p;s(m,v,z)},N=({el:l,anchor:m})=>{let v;for(;l&&l!==m;)v=d(l),n(l),l=v;n(m)},E=(l,m,v,z,p,C,x,L,w)=>{x=x||m.type==="svg",l==null?e2(m,v,z,p,C,x,L,w):k(l,m,p,C,x,L,w)},e2=(l,m,v,z,p,C,x,L)=>{let w,g;const{type:B,props:I,shapeFlag:R,transition:_,dirs:G}=l;if(w=l.el=i(l.type,C,I&&I.is,I),R&8?h(w,l.children):R&16&&W(l.children,w,null,z,p,C&&B!=="foreignObject",x,L),G&&x1(l,null,z,"created"),Z(w,l,l.scopeId,x,z),I){for(const J in I)J!=="value"&&!i3(J)&&r(w,J,null,I[J],C,l.children,z,p,R2);"value"in I&&r(w,"value",null,I.value),(g=I.onVnodeBeforeMount)&&q2(g,z,l)}G&&x1(l,null,z,"beforeMount");const a2=uf(p,_);a2&&_.beforeEnter(w),s(w,m,v),((g=I&&I.onVnodeMounted)||a2||G)&&k2(()=>{g&&q2(g,z,l),a2&&_.enter(w),G&&x1(l,null,z,"mounted")},p)},Z=(l,m,v,z,p)=>{if(v&&V(l,v),z)for(let C=0;C<z.length;C++)V(l,z[C]);if(p){let C=p.subTree;if(m===C){const x=p.vnode;Z(l,x,x.scopeId,x.slotScopeIds,p.parent)}}},W=(l,m,v,z,p,C,x,L,w=0)=>{for(let g=w;g<l.length;g++){const B=l[g]=L?p1(l[g]):j2(l[g]);M(null,B,m,v,z,p,C,x,L)}},k=(l,m,v,z,p,C,x)=>{const L=m.el=l.el;let{patchFlag:w,dynamicChildren:g,dirs:B}=m;w|=l.patchFlag&16;const I=l.props||s2,R=m.props||s2;let _;v&&N1(v,!1),(_=R.onVnodeBeforeUpdate)&&q2(_,v,m,l),B&&x1(m,l,v,"beforeUpdate"),v&&N1(v,!0);const G=p&&m.type!=="foreignObject";if(g?O(l.dynamicChildren,g,L,v,z,G,C):x||Q(l,m,L,null,v,z,G,C,!1),w>0){if(w&16)o2(L,m,I,R,v,z,p);else if(w&2&&I.class!==R.class&&r(L,"class",null,R.class,p),w&4&&r(L,"style",I.style,R.style,p),w&8){const a2=m.dynamicProps;for(let J=0;J<a2.length;J++){const u2=a2[J],D2=I[u2],q1=R[u2];(q1!==D2||u2==="value")&&r(L,u2,D2,q1,p,l.children,v,z,R2)}}w&1&&l.children!==m.children&&h(L,m.children)}else!x&&g==null&&o2(L,m,I,R,v,z,p);((_=R.onVnodeUpdated)||B)&&k2(()=>{_&&q2(_,v,m,l),B&&x1(m,l,v,"updated")},z)},O=(l,m,v,z,p,C,x)=>{for(let L=0;L<m.length;L++){const w=l[L],g=m[L],B=w.el&&(w.type===L2||!I1(w,g)||w.shapeFlag&70)?u(w.el):v;M(w,g,B,null,z,p,C,x,!0)}},o2=(l,m,v,z,p,C,x)=>{if(v!==z){if(v!==s2)for(const L in v)!i3(L)&&!(L in z)&&r(l,L,v[L],null,x,m.children,p,C,R2);for(const L in z){if(i3(L))continue;const w=z[L],g=v[L];w!==g&&L!=="value"&&r(l,L,g,w,x,m.children,p,C,R2)}"value"in z&&r(l,"value",v.value,z.value)}},A=(l,m,v,z,p,C,x,L,w)=>{const g=m.el=l?l.el:o(""),B=m.anchor=l?l.anchor:o("");let{patchFlag:I,dynamicChildren:R,slotScopeIds:_}=m;_&&(L=L?L.concat(_):_),l==null?(s(g,v,z),s(B,v,z),W(m.children,v,B,p,C,x,L,w)):I>0&&I&64&&R&&l.dynamicChildren?(O(l.dynamicChildren,R,v,p,C,x,L),(m.key!=null||p&&m===p.subTree)&&U7(l,m,!0)):Q(l,m,v,B,p,C,x,L,w)},X=(l,m,v,z,p,C,x,L,w)=>{m.slotScopeIds=L,l==null?m.shapeFlag&512?p.ctx.activate(m,v,z,x,w):m2(m,v,z,p,C,x,w):w2(l,m,w)},m2=(l,m,v,z,p,C,x)=>{const L=l.component=Lf(l,z,p);if(F3(l)&&(L.ctx.renderer=f1),wf(L),L.asyncDep){if(p&&p.registerDep(L,t2),!l.el){const w=L.subTree=l2($2);H(null,w,m,v)}return}t2(L,l,m,v,p,C,x)},w2=(l,m,v)=>{const z=m.component=l.component;if(Sl(l,m,v))if(z.asyncDep&&!z.asyncResolved){c2(z,m,v);return}else z.next=m,Ll(z.update),z.update();else m.el=l.el,z.vnode=m},t2=(l,m,v,z,p,C,x)=>{const L=()=>{if(l.isMounted){let{next:B,bu:I,u:R,parent:_,vnode:G}=l,a2=B,J;N1(l,!1),B?(B.el=G.el,c2(l,B,x)):B=G,I&&m6(I),(J=B.props&&B.props.onVnodeBeforeUpdate)&&q2(J,_,B,G),N1(l,!0);const u2=d6(l),D2=l.subTree;l.subTree=u2,M(D2,u2,u(D2.el),U1(D2),l,p,C),B.el=u2.el,a2===null&&Al(l,u2.el),R&&k2(R,p),(J=B.props&&B.props.onVnodeUpdated)&&k2(()=>q2(J,_,B,G),p)}else{let B;const{el:I,props:R}=m,{bm:_,m:G,parent:a2}=l,J=o3(m);if(N1(l,!1),_&&m6(_),!J&&(B=R&&R.onVnodeBeforeMount)&&q2(B,a2,m),N1(l,!0),I&&$){const u2=()=>{l.subTree=d6(l),$(I,l.subTree,l,p,null)};J?m.type.__asyncLoader().then(()=>!l.isUnmounted&&u2()):u2()}else{const u2=l.subTree=d6(l);M(null,u2,v,z,l,p,C),m.el=u2.el}if(G&&k2(G,p),!J&&(B=R&&R.onVnodeMounted)){const u2=m;k2(()=>q2(B,a2,u2),p)}(m.shapeFlag&256||a2&&o3(a2.vnode)&&a2.vnode.shapeFlag&256)&&l.a&&k2(l.a,p),l.isMounted=!0,m=v=z=null}},w=l.effect=new o0(L,()=>d0(g),l.scope),g=l.update=()=>w.run();g.id=l.uid,N1(l,!0),g()},c2=(l,m,v)=>{m.component=l;const z=l.vnode.props;l.vnode=m,l.next=null,of(l,m.props,z,v),ff(l,m.children,v),i4(),Y8(l),o4()},Q=(l,m,v,z,p,C,x,L,w=!1)=>{const g=l&&l.children,B=l?l.shapeFlag:0,I=m.children,{patchFlag:R,shapeFlag:_}=m;if(R>0){if(R&128){b1(g,I,v,z,p,C,x,L,w);return}else if(R&256){Z2(g,I,v,z,p,C,x,L,w);return}}_&8?(B&16&&R2(g,p,C),I!==g&&h(v,I)):B&16?_&16?b1(g,I,v,z,p,C,x,L,w):R2(g,p,C,!0):(B&8&&h(v,""),_&16&&W(I,v,z,p,C,x,L,w))},Z2=(l,m,v,z,p,C,x,L,w)=>{l=l||K1,m=m||K1;const g=l.length,B=m.length,I=Math.min(g,B);let R;for(R=0;R<I;R++){const _=m[R]=w?p1(m[R]):j2(m[R]);M(l[R],_,v,null,p,C,x,L,w)}g>B?R2(l,p,C,!0,!1,I):W(m,v,z,p,C,x,L,w,I)},b1=(l,m,v,z,p,C,x,L,w)=>{let g=0;const B=m.length;let I=l.length-1,R=B-1;for(;g<=I&&g<=R;){const _=l[g],G=m[g]=w?p1(m[g]):j2(m[g]);if(I1(_,G))M(_,G,v,null,p,C,x,L,w);else break;g++}for(;g<=I&&g<=R;){const _=l[I],G=m[R]=w?p1(m[R]):j2(m[R]);if(I1(_,G))M(_,G,v,null,p,C,x,L,w);else break;I--,R--}if(g>I){if(g<=R){const _=R+1,G=_<B?m[_].el:z;for(;g<=R;)M(null,m[g]=w?p1(m[g]):j2(m[g]),v,G,p,C,x,L,w),g++}}else if(g>R)for(;g<=I;)y2(l[g],p,C,!0),g++;else{const _=g,G=g,a2=new Map;for(g=G;g<=R;g++){const S2=m[g]=w?p1(m[g]):j2(m[g]);S2.key!=null&&a2.set(S2.key,g)}let J,u2=0;const D2=R-G+1;let q1=!1,R8=0;const f4=new Array(D2);for(g=0;g<D2;g++)f4[g]=0;for(g=_;g<=I;g++){const S2=l[g];if(u2>=D2){y2(S2,p,C,!0);continue}let U2;if(S2.key!=null)U2=a2.get(S2.key);else for(J=G;J<=R;J++)if(f4[J-G]===0&&I1(S2,m[J])){U2=J;break}U2===void 0?y2(S2,p,C,!0):(f4[U2-G]=g+1,U2>=R8?R8=U2:q1=!0,M(S2,m[U2],v,null,p,C,x,L,w),u2++)}const D8=q1?df(f4):K1;for(J=D8.length-1,g=D2-1;g>=0;g--){const S2=G+g,U2=m[S2],W8=S2+1<B?m[S2+1].el:z;f4[g]===0?M(null,U2,v,W8,p,C,x,L,w):q1&&(J<0||g!==D8[J]?c1(U2,v,W8,2):J--)}}},c1=(l,m,v,z,p=null)=>{const{el:C,type:x,transition:L,children:w,shapeFlag:g}=l;if(g&6){c1(l.component.subTree,m,v,z);return}if(g&128){l.suspense.move(m,v,z);return}if(g&64){x.move(l,m,v,f1);return}if(x===L2){s(C,m,v);for(let I=0;I<w.length;I++)c1(w[I],m,v,z);s(l.anchor,m,v);return}if(x===l3){F(l,m,v);return}if(z!==2&&g&1&&L)if(z===0)L.beforeEnter(C),s(C,m,v),k2(()=>L.enter(C),p);else{const{leave:I,delayLeave:R,afterLeave:_}=L,G=()=>s(C,m,v),a2=()=>{I(C,()=>{G(),_&&_()})};R?R(C,G,a2):a2()}else s(C,m,v)},y2=(l,m,v,z=!1,p=!1)=>{const{type:C,props:x,ref:L,children:w,dynamicChildren:g,shapeFlag:B,patchFlag:I,dirs:R}=l;if(L!=null&&W6(L,null,v,l,!0),B&256){m.ctx.deactivate(l);return}const _=B&1&&R,G=!o3(l);let a2;if(G&&(a2=x&&x.onVnodeBeforeUnmount)&&q2(a2,m,l),B&6)f6(l.component,v,z);else{if(B&128){l.suspense.unmount(v,z);return}_&&x1(l,null,m,"beforeUnmount"),B&64?l.type.remove(l,m,v,p,f1,z):g&&(C!==L2||I>0&&I&64)?R2(g,m,v,!1,!0):(C===L2&&I&384||!p&&B&16)&&R2(w,m,v),z&&O4(l)}(G&&(a2=x&&x.onVnodeUnmounted)||_)&&k2(()=>{a2&&q2(a2,m,l),_&&x1(l,null,m,"unmounted")},v)},O4=l=>{const{type:m,el:v,anchor:z,transition:p}=l;if(m===L2){$1(v,z);return}if(m===l3){N(l);return}const C=()=>{n(v),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(l.shapeFlag&1&&p&&!p.persisted){const{leave:x,delayLeave:L}=p,w=()=>x(v,C);L?L(l.el,C,w):w()}else C()},$1=(l,m)=>{let v;for(;l!==m;)v=d(l),n(l),l=v;n(m)},f6=(l,m,v)=>{const{bum:z,scope:p,update:C,subTree:x,um:L}=l;z&&m6(z),p.stop(),C&&(C.active=!1,y2(x,l,m,v)),L&&k2(L,m),k2(()=>{l.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},R2=(l,m,v,z=!1,p=!1,C=0)=>{for(let x=C;x<l.length;x++)y2(l[x],m,v,z,p)},U1=l=>l.shapeFlag&6?U1(l.component.subTree):l.shapeFlag&128?l.suspense.next():d(l.anchor||l.el),k1=(l,m,v)=>{l==null?m._vnode&&y2(m._vnode,null,null,!0):M(m._vnode||null,l,m,null,null,null,v),Y8(),k7(),m._vnode=l},f1={p:M,um:y2,m:c1,r:O4,mt:m2,mc:W,pc:Q,pbc:O,n:U1,o:c};let l4,$;return e&&([l4,$]=e(f1)),{render:k1,hydrate:l4,createApp:sf(k1,l4)}}function N1({effect:c,update:e},a){c.allowRecurse=e.allowRecurse=a}function uf(c,e){return(!c||c&&!c.pendingBranch)&&e&&!e.persisted}function U7(c,e,a=!1){const s=c.children,n=e.children;if(D(s)&&D(n))for(let r=0;r<s.length;r++){const i=s[r];let o=n[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=n[r]=p1(n[r]),o.el=i.el),a||U7(i,o)),o.type===E3&&(o.el=i.el)}}function df(c){const e=c.slice(),a=[0];let s,n,r,i,o;const t=c.length;for(s=0;s<t;s++){const f=c[s];if(f!==0){if(n=a[a.length-1],c[n]<f){e[s]=n,a.push(s);continue}for(r=0,i=a.length-1;r<i;)o=r+i>>1,c[a[o]]<f?r=o+1:i=o;f<c[a[r]]&&(r>0&&(e[s]=a[r-1]),a[r]=s)}}for(r=a.length,i=a[r-1];r-- >0;)a[r]=i,i=e[i];return a}const vf=c=>c.__isTeleport,L2=Symbol.for("v-fgt"),E3=Symbol.for("v-txt"),$2=Symbol.for("v-cmt"),l3=Symbol.for("v-stc"),p4=[];let O2=null;function v2(c=!1){p4.push(O2=c?null:[])}function Hf(){p4.pop(),O2=p4[p4.length-1]||null}let L4=1;function i5(c){L4+=c}function q7(c){return c.dynamicChildren=L4>0?O2||K1:null,Hf(),L4>0&&O2&&O2.push(c),c}function V2(c,e,a,s,n,r){return q7(q(c,e,a,s,n,r,!0))}function zf(c,e,a,s,n){return q7(l2(c,e,a,s,n,!0))}function E6(c){return c?c.__v_isVNode===!0:!1}function I1(c,e){return c.type===e.type&&c.key===e.key}const O3="__vInternal",G7=({key:c})=>c??null,f3=({ref:c,ref_key:e,ref_for:a})=>(typeof c=="number"&&(c=""+c),c!=null?d2(c)||N2(c)||U(c)?{i:A2,r:c,k:e,f:!!a}:c:null);function q(c,e=null,a=null,s=0,n=null,r=c===L2?0:1,i=!1,o=!1){const t={__v_isVNode:!0,__v_skip:!0,type:c,props:e,key:e&&G7(e),ref:e&&f3(e),scopeId:I3,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:A2};return o?(M0(t,a),r&128&&c.normalize(t)):a&&(t.shapeFlag|=d2(a)?8:16),L4>0&&!i&&O2&&(t.patchFlag>0||r&6)&&t.patchFlag!==32&&O2.push(t),t}const l2=pf;function pf(c,e=null,a=null,s=0,n=null,r=!1){if((!c||c===Tl)&&(c=$2),E6(c)){const o=y1(c,e,!0);return a&&M0(o,a),L4>0&&!r&&O2&&(o.shapeFlag&6?O2[O2.indexOf(c)]=o:O2.push(o)),o.patchFlag|=-2,o}if(Sf(c)&&(c=c.__vccOpts),e){e=Vf(e);let{class:o,style:t}=e;o&&!d2(o)&&(e.class=P2(o)),i2(t)&&(V7(t)&&!D(t)&&(t=H2({},t)),e.style=N3(t))}const i=d2(c)?1:Pl(c)?128:vf(c)?64:i2(c)?4:U(c)?2:0;return q(c,e,a,s,n,i,r,!0)}function Vf(c){return c?V7(c)||O3 in c?H2({},c):c:null}function y1(c,e,a=!1){const{props:s,ref:n,patchFlag:r,children:i}=c,o=e?Mf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:o,key:o&&G7(o),ref:e&&e.ref?a&&n?D(n)?n.concat(f3(e)):[n,f3(e)]:f3(e):n,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:e&&c.type!==L2?r===-1?16:r|16:r,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&y1(c.ssContent),ssFallback:c.ssFallback&&y1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function g0(c=" ",e=0){return l2(E3,null,c,e)}function gf(c="",e=!1){return e?(v2(),zf($2,null,c)):l2($2,null,c)}function j2(c){return c==null||typeof c=="boolean"?l2($2):D(c)?l2(L2,null,c.slice()):typeof c=="object"?p1(c):l2(E3,null,String(c))}function p1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:y1(c)}function M0(c,e){let a=0;const{shapeFlag:s}=c;if(e==null)e=null;else if(D(e))a=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),M0(c,n()),n._c&&(n._d=!0));return}else{a=32;const n=e._;!n&&!(O3 in e)?e._ctx=A2:n===3&&A2&&(A2.slots._===1?e._=1:(e._=2,c.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:A2},a=32):(e=String(e),s&64?(a=16,e=[g0(e)]):a=8);c.children=e,c.shapeFlag|=a}function Mf(...c){const e={};for(let a=0;a<c.length;a++){const s=c[a];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=P2([e.class,s.class]));else if(n==="style")e.style=N3([e.style,s.style]);else if(w3(n)){const r=e[n],i=s[n];i&&r!==i&&!(D(r)&&r.includes(i))&&(e[n]=r?[].concat(r,i):i)}else n!==""&&(e[n]=s[n])}return e}function q2(c,e,a,s=null){B2(c,e,7,[a,s])}const yf=D7();let Cf=0;function Lf(c,e,a){const s=c.type,n=(e?e.appContext:c.appContext)||yf,r={uid:Cf++,vnode:c,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gt(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:E7(s,n),emitsOptions:N7(s,n),emit:null,emitted:null,propsDefaults:s2,inheritAttrs:s.inheritAttrs,ctx:s2,data:s2,props:s2,attrs:s2,slots:s2,refs:s2,setupState:s2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=kl.bind(null,r),c.ce&&c.ce(r),r}let p2=null;const j7=()=>p2||A2;let y0,G1,o5="__VUE_INSTANCE_SETTERS__";(G1=b6()[o5])||(G1=b6()[o5]=[]),G1.push(c=>p2=c),y0=c=>{G1.length>1?G1.forEach(e=>e(c)):G1[0](c)};const a4=c=>{y0(c),c.scope.on()},W1=()=>{p2&&p2.scope.off(),y0(null)};function Y7(c){return c.vnode.shapeFlag&4}let w4=!1;function wf(c,e=!1){w4=e;const{props:a,children:s}=c.vnode,n=Y7(c);rf(c,a,n,e),lf(c,s);const r=n?bf(c,e):void 0;return w4=!1,r}function bf(c,e){const a=c.type;c.accessCache=Object.create(null),c.proxy=g7(new Proxy(c.ctx,Xl));const{setup:s}=a;if(s){const n=c.setupContext=s.length>1?xf(c):null;a4(c),i4();const r=g1(s,c,0,[c.props,n]);if(o4(),W1(),s7(r)){if(r.then(W1,W1),e)return r.then(i=>{t5(c,i,e)}).catch(i=>{A3(i,c,0)});c.asyncDep=r}else t5(c,r,e)}else K7(c,e)}function t5(c,e,a){U(e)?c.type.__ssrInlineRender?c.ssrRender=e:c.render=e:i2(e)&&(c.setupState=C7(e)),K7(c,a)}let l5;function K7(c,e,a){const s=c.type;if(!c.render){if(!e&&l5&&!s.render){const n=s.template||p0(c).template;if(n){const{isCustomElement:r,compilerOptions:i}=c.appContext.config,{delimiters:o,compilerOptions:t}=s,f=H2(H2({isCustomElement:r,delimiters:o},i),t);s.render=l5(n,f)}}c.render=s.render||X2}{a4(c),i4();try{Ql(c)}finally{o4(),W1()}}}function kf(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(e,a){return x2(c,"get","$attrs"),e[a]}}))}function xf(c){const e=a=>{c.exposed=a||{}};return{get attrs(){return kf(c)},slots:c.slots,emit:c.emit,expose:e}}function _3(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(C7(g7(c.exposed)),{get(e,a){if(a in e)return e[a];if(a in z4)return z4[a](c)},has(e,a){return a in e||a in z4}}))}function Nf(c,e=!0){return U(c)?c.displayName||c.name:c.name||e&&c.__name}function Sf(c){return U(c)&&"__vccOpts"in c}const j=(c,e)=>Ml(c,e,w4);function X7(c,e,a){const s=arguments.length;return s===2?i2(e)&&!D(e)?E6(e)?l2(c,null,[e]):l2(c,e):l2(c,null,e):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&E6(a)&&(a=[a]),l2(c,e,a))}const Af=Symbol.for("v-scx"),Tf=()=>t3(Af),If="3.3.13",Pf="http://www.w3.org/2000/svg",P1=typeof document<"u"?document:null,f5=P1&&P1.createElement("template"),Ff={insert:(c,e,a)=>{e.insertBefore(c,a||null)},remove:c=>{const e=c.parentNode;e&&e.removeChild(c)},createElement:(c,e,a,s)=>{const n=e?P1.createElementNS(Pf,c):P1.createElement(c,a?{is:a}:void 0);return c==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:c=>P1.createTextNode(c),createComment:c=>P1.createComment(c),setText:(c,e)=>{c.nodeValue=e},setElementText:(c,e)=>{c.textContent=e},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>P1.querySelector(c),setScopeId(c,e){c.setAttribute(e,"")},insertStaticContent(c,e,a,s,n,r){const i=a?a.previousSibling:e.lastChild;if(n&&(n===r||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),a),!(n===r||!(n=n.nextSibling)););else{f5.innerHTML=s?`<svg>${c}</svg>`:c;const o=f5.content;if(s){const t=o.firstChild;for(;t.firstChild;)o.appendChild(t.firstChild);o.removeChild(t)}e.insertBefore(o,a)}return[i?i.nextSibling:e.firstChild,a?a.previousSibling:e.lastChild]}},u1="transition",h4="animation",b4=Symbol("_vtc"),V3=(c,{slots:e})=>X7(El,Bf(c),e);V3.displayName="Transition";const Q7={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};V3.props=H2({},T7,Q7);const S1=(c,e=[])=>{D(c)?c.forEach(a=>a(...e)):c&&c(...e)},h5=c=>c?D(c)?c.some(e=>e.length>1):c.length>1:!1;function Bf(c){const e={};for(const A in c)A in Q7||(e[A]=c[A]);if(c.css===!1)return e;const{name:a="v",type:s,duration:n,enterFromClass:r=`${a}-enter-from`,enterActiveClass:i=`${a}-enter-active`,enterToClass:o=`${a}-enter-to`,appearFromClass:t=r,appearActiveClass:f=i,appearToClass:h=o,leaveFromClass:u=`${a}-leave-from`,leaveActiveClass:d=`${a}-leave-active`,leaveToClass:V=`${a}-leave-to`}=c,b=Rf(n),M=b&&b[0],T=b&&b[1],{onBeforeEnter:H,onEnter:y,onEnterCancelled:F,onLeave:N,onLeaveCancelled:E,onBeforeAppear:e2=H,onAppear:Z=y,onAppearCancelled:W=F}=e,k=(A,X,m2)=>{A1(A,X?h:o),A1(A,X?f:i),m2&&m2()},O=(A,X)=>{A._isLeaving=!1,A1(A,u),A1(A,V),A1(A,d),X&&X()},o2=A=>(X,m2)=>{const w2=A?Z:y,t2=()=>k(X,A,m2);S1(w2,[X,t2]),m5(()=>{A1(X,A?t:r),d1(X,A?h:o),h5(w2)||u5(X,s,M,t2)})};return H2(e,{onBeforeEnter(A){S1(H,[A]),d1(A,r),d1(A,i)},onBeforeAppear(A){S1(e2,[A]),d1(A,t),d1(A,f)},onEnter:o2(!1),onAppear:o2(!0),onLeave(A,X){A._isLeaving=!0;const m2=()=>O(A,X);d1(A,u),Ef(),d1(A,d),m5(()=>{A._isLeaving&&(A1(A,u),d1(A,V),h5(N)||u5(A,s,T,m2))}),S1(N,[A,m2])},onEnterCancelled(A){k(A,!1),S1(F,[A])},onAppearCancelled(A){k(A,!0),S1(W,[A])},onLeaveCancelled(A){O(A),S1(E,[A])}})}function Rf(c){if(c==null)return null;if(i2(c))return[z6(c.enter),z6(c.leave)];{const e=z6(c);return[e,e]}}function z6(c){return Wt(c)}function d1(c,e){e.split(/\s+/).forEach(a=>a&&c.classList.add(a)),(c[b4]||(c[b4]=new Set)).add(e)}function A1(c,e){e.split(/\s+/).forEach(s=>s&&c.classList.remove(s));const a=c[b4];a&&(a.delete(e),a.size||(c[b4]=void 0))}function m5(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let Df=0;function u5(c,e,a,s){const n=c._endId=++Df,r=()=>{n===c._endId&&s()};if(a)return setTimeout(r,a);const{type:i,timeout:o,propCount:t}=Wf(c,e);if(!i)return s();const f=i+"end";let h=0;const u=()=>{c.removeEventListener(f,d),r()},d=V=>{V.target===c&&++h>=t&&u()};setTimeout(()=>{h<t&&u()},o+1),c.addEventListener(f,d)}function Wf(c,e){const a=window.getComputedStyle(c),s=b=>(a[b]||"").split(", "),n=s(`${u1}Delay`),r=s(`${u1}Duration`),i=d5(n,r),o=s(`${h4}Delay`),t=s(`${h4}Duration`),f=d5(o,t);let h=null,u=0,d=0;e===u1?i>0&&(h=u1,u=i,d=r.length):e===h4?f>0&&(h=h4,u=f,d=t.length):(u=Math.max(i,f),h=u>0?i>f?u1:h4:null,d=h?h===u1?r.length:t.length:0);const V=h===u1&&/\b(transform|all)(,|$)/.test(s(`${u1}Property`).toString());return{type:h,timeout:u,propCount:d,hasTransform:V}}function d5(c,e){for(;c.length<e.length;)c=c.concat(c);return Math.max(...e.map((a,s)=>v5(a)+v5(c[s])))}function v5(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function Ef(){return document.body.offsetHeight}function Of(c,e,a){const s=c[b4];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?c.removeAttribute("class"):a?c.setAttribute("class",e):c.className=e}const C0=Symbol("_vod"),g3={beforeMount(c,{value:e},{transition:a}){c[C0]=c.style.display==="none"?"":c.style.display,a&&e?a.beforeEnter(c):m4(c,e)},mounted(c,{value:e},{transition:a}){a&&e&&a.enter(c)},updated(c,{value:e,oldValue:a},{transition:s}){!e!=!a&&(s?e?(s.beforeEnter(c),m4(c,!0),s.enter(c)):s.leave(c,()=>{m4(c,!1)}):m4(c,e))},beforeUnmount(c,{value:e}){m4(c,e)}};function m4(c,e){c.style.display=e?c[C0]:"none"}const J7=Symbol("");function Z7(c){const e=j7();if(!e)return;const a=e.ut=(n=c(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>_6(r,n))},s=()=>{const n=c(e.proxy);O6(e.subTree,n),a(n)};Bl(s),T4(()=>{const n=new MutationObserver(s);n.observe(e.subTree.el.parentNode,{childList:!0}),D3(()=>n.disconnect())})}function O6(c,e){if(c.shapeFlag&128){const a=c.suspense;c=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{O6(a.activeBranch,e)})}for(;c.component;)c=c.component.subTree;if(c.shapeFlag&1&&c.el)_6(c.el,e);else if(c.type===L2)c.children.forEach(a=>O6(a,e));else if(c.type===l3){let{el:a,anchor:s}=c;for(;a&&(_6(a,e),a!==s);)a=a.nextSibling}}function _6(c,e){if(c.nodeType===1){const a=c.style;let s="";for(const n in e)a.setProperty(`--${n}`,e[n]),s+=`--${n}: ${e[n]};`;a[J7]=s}}function _f(c,e,a){const s=c.style,n=d2(a);if(a&&!n){if(e&&!d2(e))for(const r in e)a[r]==null&&$6(s,r,"");for(const r in a)$6(s,r,a[r])}else{const r=s.display;if(n){if(e!==a){const i=s[J7];i&&(a+=";"+i),s.cssText=a}}else e&&c.removeAttribute("style");C0 in c&&(s.display=r)}}const H5=/\s*!important$/;function $6(c,e,a){if(D(a))a.forEach(s=>$6(c,e,s));else if(a==null&&(a=""),e.startsWith("--"))c.setProperty(e,a);else{const s=$f(c,e);H5.test(a)?c.setProperty(r4(s),a.replace(H5,""),"important"):c[s]=a}}const z5=["Webkit","Moz","ms"],p6={};function $f(c,e){const a=p6[e];if(a)return a;let s=Q2(e);if(s!=="filter"&&s in c)return p6[e]=s;s=x3(s);for(let n=0;n<z5.length;n++){const r=z5[n]+s;if(r in c)return p6[e]=r}return e}const p5="http://www.w3.org/1999/xlink";function Uf(c,e,a,s,n){if(s&&e.startsWith("xlink:"))a==null?c.removeAttributeNS(p5,e.slice(6,e.length)):c.setAttributeNS(p5,e,a);else{const r=qt(e);a==null||r&&!i7(a)?c.removeAttribute(e):c.setAttribute(e,r?"":a)}}function qf(c,e,a,s,n,r,i){if(e==="innerHTML"||e==="textContent"){s&&i(s,n,r),c[e]=a??"";return}const o=c.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){c._value=a;const f=o==="OPTION"?c.getAttribute("value"):c.value,h=a??"";f!==h&&(c.value=h),a==null&&c.removeAttribute(e);return}let t=!1;if(a===""||a==null){const f=typeof c[e];f==="boolean"?a=i7(a):a==null&&f==="string"?(a="",t=!0):f==="number"&&(a=0,t=!0)}try{c[e]=a}catch{}t&&c.removeAttribute(e)}function Gf(c,e,a,s){c.addEventListener(e,a,s)}function jf(c,e,a,s){c.removeEventListener(e,a,s)}const V5=Symbol("_vei");function Yf(c,e,a,s,n=null){const r=c[V5]||(c[V5]={}),i=r[e];if(s&&i)i.value=s;else{const[o,t]=Kf(e);if(s){const f=r[e]=Jf(s,n);Gf(c,o,f,t)}else i&&(jf(c,o,i,t),r[e]=void 0)}}const g5=/(?:Once|Passive|Capture)$/;function Kf(c){let e;if(g5.test(c)){e={};let s;for(;s=c.match(g5);)c=c.slice(0,c.length-s[0].length),e[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):r4(c.slice(2)),e]}let V6=0;const Xf=Promise.resolve(),Qf=()=>V6||(Xf.then(()=>V6=0),V6=Date.now());function Jf(c,e){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;B2(Zf(s,a.value),e,5,[s])};return a.value=c,a.attached=Qf(),a}function Zf(c,e){if(D(e)){const a=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{a.call(c),c._stopped=!0},e.map(s=>n=>!n._stopped&&s&&s(n))}else return e}const M5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,ch=(c,e,a,s,n=!1,r,i,o,t)=>{e==="class"?Of(c,s,n):e==="style"?_f(c,a,s):w3(e)?s0(e)||Yf(c,e,a,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):eh(c,e,s,n))?qf(c,e,s,r,i,o,t):(e==="true-value"?c._trueValue=s:e==="false-value"&&(c._falseValue=s),Uf(c,e,s,n))};function eh(c,e,a,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in c&&M5(e)&&U(a));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&c.tagName==="INPUT"||e==="type"&&c.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=c.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return M5(e)&&d2(a)?!1:e in c}const ah=["ctrl","shift","alt","meta"],sh={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,e)=>ah.some(a=>c[`${a}Key`]&&!e.includes(a))},M2=(c,e)=>{const a=c._withMods||(c._withMods={}),s=e.join(".");return a[s]||(a[s]=(n,...r)=>{for(let i=0;i<e.length;i++){const o=sh[e[i]];if(o&&o(n,e))return}return c(n,...r)})},nh=H2({patchProp:ch},Ff);let y5;function rh(){return y5||(y5=hf(nh))}const ih=(...c)=>{const e=rh().createApp(...c),{mount:a}=e;return e.mount=s=>{const n=oh(s);if(!n)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.innerHTML="";const i=a(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),i},e};function oh(c){return d2(c)?document.querySelector(c):c}const K4=[{songName:"1.5 кг Отличного Пюре - Эмо.mp3",sort:181,bestParties:[{start:25,end:84}],notAggressive:!0},{songName:"Angel Vivaldi - A Martian Winter.mp3"},{songName:"Angel Vivaldi - An Erisian Autumn.mp3",sort:50,bestParties:[{start:78,end:104},{start:176,end:220},{start:246,end:268}],notAggressive:!0},{songName:"As I Lay Dying - Forever.mp3",sort:210,bestParties:[{start:0,end:25}]},{songName:"As I Lay Dying - Nothing Left [2007].mp3",sort:40,bestParties:[{start:0,end:57}]},{songName:"As I Lay Dying - The Sound Оf Truth.mp3",sort:60,bestParties:[{start:0,end:36},{start:59,end:121}]},{songName:"Aspirin Rose - Fucking Perfect (Pink cover).mp3"},{songName:"August Burns Red - A Shot Below The Belt.mp3",sort:142,bestParties:[{start:0,end:30},{start:90,end:114},{start:164,end:175}]},{songName:"August Burns Red - Barbarian.mp3",sort:20,bestParties:[{start:21,end:32},{start:70,end:88},{start:113,end:152}]},{songName:"August Burns Red - Chasing the Dragon.mp3",sort:151},{songName:"August Burns Red - Consumer.mp3"},{songName:"August Burns Red - Indonesia.mp3",sort:141,bestParties:[{start:84,end:117},{start:161,end:180}]},{songName:"August Burns Red - Meridian.mp3",notAggressive:!0},{songName:"August Burns Red - Truth of a Liar.mp3"},{songName:"August Burns Red - Your Little Suburbia Is in Ruins.mp3",sort:70,bestParties:[{start:12,end:27},{start:107,end:125},{start:146,end:178}]},{songName:"Anaal Nathrakh - Between Shit and Piss We Are Born.mp3"},{songName:"Anaal Nathrakh - In The Constellation Of The Black Widow.mp3",sort:220,bestParties:[{start:65,end:85},{start:114,end:141}]},{songName:"Between the Buried and Me - All Bodies.mp3"},{songName:"Between The Buried And Me - Ants Of The Sky.mp3",sort:113,bestParties:[{start:0,end:108}]},{songName:"Between The Buried And Me - Sun Of Nothing.mp3"},{songName:"Between The Buried And Me - Swim To The Moon.mp3",sort:10,bestParties:[{start:135,end:160},{start:500,end:551},{start:982,end:1022}]},{songName:"Breakwater - Eleven.mp3"},{songName:"Breakwater - five.mp3"},{songName:"Bullet For My Valentine - Hand Of Blood.mp3"},{songName:"Cerebral Bore - The Bald Cadaver.mp3",sort:280,bestParties:[{start:5.5,end:50}]},{songName:"Children Of Bodom - Are You Dead Yet.mp3",sort:110,bestParties:[{start:82,end:114}]},{songName:"Cosmonauts Day - The Captain.mp3",notAggressive:!0},{songName:"Death In Vegas - Dirge.mp3"},{songName:"Dragonforce - The Flame of Youth.mp3",sort:120,bestParties:[{start:46,end:65},{start:289,end:317}]},{songName:"If These Trees Could Talk - From Roots to Needles.mp3",notAggressive:!0},{songName:"In Flames - Clayman.mp3",sort:130,bestParties:[{start:0,end:21}]},{songName:"In Flames - Reflect the Storm.mp3"},{songName:"Killing Floor - Abandon All.mp3"},{songName:"Killing Floor OST - Wake.mp3",notAggressive:!0},{songName:"Long Distance Calling - Black Paper Planes.mp3",notAggressive:!0},{songName:"Machine Head - Beautiful Mourning.mp3"},{songName:"Machine Head - Hallowed Be Thy Name.mp3"},{songName:"Machine Head - Halo.mp3"},{songName:"Ozoi The Maid - Unfortunately.mp3",sort:112,bestParties:[{start:59,end:84},{start:165,end:218},{start:240,end:253}]},{songName:"Ozoi The Maid Yakui The Maid - Lanterns.mp3",sort:111,bestParties:[{start:146,end:218}]},{songName:"Ozoi The Maid Yakui The Maid - Wonderland.mp3",sort:30,bestParties:[{start:115,end:243},{start:355,end:442}]},{songName:"Ozoi The Maid, Yakui The Maid - Frontier.mp3"},{songName:"P.O.D. - Youth of the Nation.mp3",notAggressive:!0},{songName:"Psygnosis - FIIIX 2.0.mp3"},{songName:"Psygnosis - Lost in Oblivion.mp3",sort:140,bestParties:[{start:292,end:356}]},{songName:"Psygnosis - MehMeh.mp3"},{songName:"Psygnosis - Phrase 7.mp3",notAggressive:!0},{songName:"Psygnosis - Synaptic Plasticity.mp3"},{songName:"Psygnosis - The Judgement.mp3"},{songName:"Raunchy - To the Lighthouse.mp3"},{songName:"Raunchy - Twelve Feet Tall.mp3",sort:150,bestParties:[{start:65,end:96}]},{songName:"Raunchy - Wasteland Discotheque.mp3",sort:190,bestParties:[{start:0,end:34},{start:63,end:101}]},{songName:"Rhapsody - The Mighty Ride of the Firelord.mp3"},{songName:"Rhapsody of Fire - Wisdom of the Kings.mp3"},{songName:"Rise Of The Northstar - The New Path.mp3"},{songName:"Rise Of The Northstar - What The Fuck.mp3",sort:160,bestParties:[{start:45,end:79}]},{songName:"Siberian Meat Grinder feat Distemper - Пламя в Груди.mp3",sort:211,bestParties:[{start:49,end:68}]},{songName:"The Doors - Alabama song.mp3",notAggressive:!0},{songName:"The Doors - The End.mp3",notAggressive:!0},{songName:"The Faceless - Shake The Disease.mp3"},{songName:"The Five Stars - Atom Bomb Baby.mp3",notAggressive:!0},{songName:"The HAARP Machine - Esoteric Agenda.mp3"},{songName:"Toundra - Bizancio Byzantium.mp3",sort:180,bestParties:[{start:127,end:224},{start:406,end:480}],notAggressive:!0},{songName:"URO & .corridoiokraut. - Nappi.mp3",notAggressive:!0},{songName:"What Mad Universe - Colossus.mp3",notAggressive:!0},{songName:"What Mad Universe - the world of leviathan.mp3",notAggressive:!0},{songName:"What Mad Universe - head of column.mp3",sort:170,bestParties:[{start:30,end:65}],notAggressive:!0},{songName:"What Mad Universe - mythical sacred firebird.mp3",notAggressive:!0},{songName:"What Mad Universe - Nebula My Love.mp3",sort:80,bestParties:[{start:162,end:246},{start:260,end:358}],notAggressive:!0},{songName:"What Mad Universe - Starborne.mp3",sort:90,bestParties:[{start:85,end:105},{start:144,end:185}],notAggressive:!0},{songName:"Within The Ruins - Ataxia II.mp3"},{songName:"Within The Ruins - Beautiful Agony.mp3"},{songName:"ZEROMANCER - Dr. Online.mp3"},{songName:"zYnthetic - Abandon All v3.mp3",sort:100,bestParties:[{start:0,end:30},{start:60,end:89}],notAggressive:!0},{songName:"zYnthetic - SSplug.mp3"}],u4=[{label:"All music",id:1,url:"all"},{label:"Top",id:2,url:"top"},{label:"Top Shorts",id:4,url:"shorts"},{label:"Not aggressive",id:3,url:"not_aggressive"},{label:"Favorite",id:5,url:"favorite"}],v1=f2([]),g6=f2(0),X4=f2(!1);function L0(){const c=f2(K4),e=f2(K4.filter(k=>k.sort)),a=f2(K4.filter(k=>k.notAggressive)),s=f2(0);R3(()=>{c.value=K4,g6.value=M.value.length,e2()});const n=j(()=>{const k="/player_with_my_favorite_music/";return M.value[s.value]?`${k}music/${T.value.songName}`:""}),r=j(()=>[...e.value].sort((k,O)=>k.sort-O.sort)),i=f2(1);function o(k){!(i.value===4&&k.id===2)&&!(i.value===2&&k.id===4)&&(s.value=0),i.value=k.id,g6.value=b.value.length}function t(k){const O=k.split("&");if(O.length===2){const o2=O[0].split("=")[1],A=parseInt(O[1].split("=")[1]),X=u4.find(m2=>m2.url===o2);X&&(i.value=X.id,s.value=isNaN(A)?0:A)}}(()=>{const k=window.location.hash;k&&t(k)})(),z0(()=>{const k=u4.find(X=>X.id===i.value),O=k?k.url:"",o2=s.value.toString(),A=`/player_with_my_favorite_music/#tab=${O}&track=${o2}`;window.history.pushState({},"",A)});const h=j(()=>{switch(i.value){case 1:return c.value;case 2:return r.value;case 3:return a.value;case 4:return r.value;case 5:return u.value;default:return[]}}),u=j(()=>c.value.filter(k=>v1.value.includes(k.songName))),d=j(()=>u.value.length?u4:u4.slice(0,u4.length-1)),V=j(()=>{var k;return i.value===4?((k=r.value[s.value])==null?void 0:k.bestParties)||[{start:0,end:30}]:[]}),b=j(()=>X4.value?H():h.value),M=j(()=>b.value.map(k=>k.songName)),T=j(()=>b.value[s.value]);function H(){return h.value.map(k=>({...k,sort:Math.random()})).sort((k,O)=>k.sort-O.sort).map(({sort:k,...O})=>O)}function y(){s.value+=1,s.value>=b.value.length&&(s.value=0)}function F(){s.value=(s.value-1+b.value.length)%b.value.length}function N(k){s.value=k}function E(){X4.value=!X4.value}function e2(){const k=localStorage.getItem("favoriteSongs");k&&(v1.value=JSON.parse(k))}function Z(){localStorage.setItem("favoriteSongs",JSON.stringify(v1.value.slice(0)))}function W(){const k=T.value,O=v1.value.findIndex(o2=>o2===k.songName);O>=0?(v1.value.splice(O,1),v1.value.length||(i.value=1)):v1.value.push(k.songName),Z()}return{totalNumbSongs:g6,defaultTrackList:c,topTrackList:e,bestParties:V,nextTrack:y,previousTrack:F,pathToCurrentFile:n,sortingTopTrackList:r,currentTrackIndex:s,changeTab:o,selectTrack:N,tabSelected:i,isRandomTracks:X4,handlerRandomBtn:E,currentTracks:b,currentTracksList:M,currentSong:T,handleAddFavoriteSongBtn:W,favoriteSongs:v1,TabsOptionRender:d}}const th=J2({name:"TrackList",props:{currentTracks:{type:Array,default:()=>[]},currentTrackIndex:{type:Number,default:0}},emits:["select-track-from-list"],setup(c,{emit:e}){const a=j(()=>c.currentTracks.map(r=>{const i=r.lastIndexOf("/"),o=r==null?void 0:r.lastIndexOf(".");return r&&r.substring(i+1,o)||""}));Z1(()=>c.currentTrackIndex,()=>{s()});async function s(){await w7();const r=document.querySelector(".selected");r==null||r.scrollIntoView({behavior:"smooth",block:"center"})}function n(r){e("select-track-from-list",r)}return{currentTracksWithCorrectNames:a,selectTrackFromList:n}}}),t1=(c,e)=>{const a=c.__vccOpts||c;for(const[s,n]of e)a[s]=n;return a},lh=["onClick"];function fh(c,e,a,s,n,r){return v2(),V2("ul",{ref:"sidebarRef",class:"sidebar",onClick:e[0]||(e[0]=M2(()=>{},["stop"]))},[(v2(!0),V2(L2,null,W3(c.currentTracksWithCorrectNames,(i,o)=>(v2(),V2("li",{key:o,class:P2({selected:o===c.currentTrackIndex}),onClick:M2(t=>c.selectTrackFromList(o),["stop"])},F2(o+1)+". "+F2(i),11,lh))),128))],512)}const hh=t1(th,[["render",fh],["__scopeId","data-v-caaf57d0"]]),mh=J2({props:{tabSelected:{type:Number,default:1}},emits:["change-tab"],setup(c,{emit:e}){const{TabsOptionRender:a}=L0();function s(n){c.tabSelected!==n.id&&e("change-tab",n)}return{btnHandler:s,TabsOptionRender:a}}}),uh={class:"tabs"},dh=["onClick"];function vh(c,e,a,s,n,r){return v2(),V2("div",uh,[(v2(!0),V2(L2,null,W3(c.TabsOptionRender,i=>(v2(),V2("button",{key:i.id,class:P2({active:i.id===c.tabSelected}),onClick:M2(o=>c.btnHandler(i),["stop"])},F2(i.label),11,dh))),128))])}const Hh=t1(mh,[["render",vh],["__scopeId","data-v-e99f1d32"]]),zh="modulepreload",ph=function(c){return"/player_with_my_favorite_music/"+c},C5={},G2=function(e,a,s){let n=Promise.resolve();if(a&&a.length>0){const r=document.getElementsByTagName("link");n=Promise.all(a.map(i=>{if(i=ph(i),i in C5)return;C5[i]=!0;const o=i.endsWith(".css"),t=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const d=r[u];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${t}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":zh,o||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),o)return new Promise((u,d)=>{h.addEventListener("load",u),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}return n.then(()=>e()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})},w0=J2({name:"MainInfoBand",props:{songName:{type:String,default:""},hasText:{type:Boolean,default:!1},isFavoriteSong:{type:Boolean,default:!1}},emits:["show-text-song","add-favorite"],setup(c,{emit:e}){const a=f2({}),s=f2(window.innerWidth),n=f2(window.innerHeight),r=()=>{s.value=window.innerWidth,n.value=window.innerHeight};R3(async()=>{const M=Object.assign({"/src/assets/images/1.5 кг Отличного Пюре.jpg":()=>G2(()=>import("./1.5 кг Отличного Пюре-OtALhitf.js"),__vite__mapDeps([])),"/src/assets/images/Anaal Nathrakh.jpg":()=>G2(()=>import("./Anaal Nathrakh-EzGp_TLw.js"),__vite__mapDeps([])),"/src/assets/images/As I Lay Dying.jpg":()=>G2(()=>import("./As I Lay Dying-28Nx7ZD0.js"),__vite__mapDeps([])),"/src/assets/images/August Burns Red.jpg":()=>G2(()=>import("./August Burns Red-MIqwgacb.js"),__vite__mapDeps([])),"/src/assets/images/Between The Buried And Me.webp":()=>G2(()=>import("./Between The Buried And Me-TSs49cb7.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid Yakui The Maid.jpg":()=>G2(()=>import("./Ozoi The Maid Yakui The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid.jpg":()=>G2(()=>import("./Ozoi The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/What Mad Universe.jpg":()=>G2(()=>import("./What Mad Universe-AmFbwRmj.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.png":()=>G2(()=>import("./default_logo-hDaDKpVk.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.svg":()=>G2(()=>import("./default_logo-KBf8q7n2.js"),__vite__mapDeps([]))});for(const T in M){const H=T.replace(/^.*\/(.*)\.\w+$/,"$1");a.value[H]=(await M[T]()).default}}),T4(()=>{window.addEventListener("resize",r)}),D3(()=>{window.removeEventListener("resize",r)});const i=j(()=>{var T;const M=(T=c.songName)==null?void 0:T.lastIndexOf(".");return c.songName&&c.songName.substring(0,M)||""}),o=j(()=>{const[M,T]=i.value.split(" - ");return{bandName:M,songName:T}}),t=j(()=>{const{bandName:M}=o.value;return a.value[M]||a.value.default_logo}),f=j(()=>{function M(T,H=1){return{width:`${H*T}px`,height:`${H*T}px`}}return s.value>n.value?M(n.value,.6):M(s.value,.8)});function h(){var M,T;if("mediaSession"in navigator&&t.value){const H=["96x96","128x128","192x192","256x256","384x384","512x512"];navigator.mediaSession.metadata=new MediaMetadata({title:((M=o.value)==null?void 0:M.songName)||"",artist:((T=o.value)==null?void 0:T.bandName)||"",artwork:H.map(y=>({src:t.value,sizes:y,type:"image/png"}))})}}z0(()=>{o.value&&t.value&&h()});const u=j(()=>c.hasText?"":"disabled"),d=j(()=>c.isFavoriteSong?"active":"");function V(){c.hasText&&e("show-text-song")}function b(){e("add-favorite")}return{getInfoBand:o,getLogoImage:t,getImageSizes:f,onIconShowTextClick:V,onIconAddFavoriteClick:b,iconHeartClass:d,iconShowTextClass:u}}}),L5=()=>{Z7(c=>({"5529be70":c.getImageSizes.width,"83ac0336":c.getImageSizes.height}))},w5=w0.setup;w0.setup=w5?(c,e)=>(L5(),w5(c,e)):L5;const cc=c=>(v0("data-v-2fc8dabc"),c=c(),H0(),c),Vh={class:"main-info"},gh=["src"],Mh={class:"main-panel"},yh=cc(()=>q("i",{class:"fa-solid fa-heart"},null,-1)),Ch=[yh],Lh={class:"artist-info"},wh={class:"band"},bh={class:"song"},kh=cc(()=>q("i",{class:"fa-solid fa-text-height"},null,-1)),xh=[kh];function Nh(c,e,a,s,n,r){return v2(),V2("div",Vh,[q("img",{src:c.getLogoImage,class:"album-image",alt:""},null,8,gh),q("div",Mh,[q("button",{class:P2(["heart",c.iconHeartClass]),onClick:e[0]||(e[0]=M2((...i)=>c.onIconAddFavoriteClick&&c.onIconAddFavoriteClick(...i),["stop"]))},Ch,2),q("div",Lh,[q("div",wh,F2(c.getInfoBand.bandName),1),q("div",bh,F2(c.getInfoBand.songName),1)]),q("button",{class:P2(["show-text",c.iconShowTextClass]),onClick:e[1]||(e[1]=M2((...i)=>c.onIconShowTextClick&&c.onIconShowTextClick(...i),["stop"]))},xh,2)])])}const Sh=t1(w0,[["render",Nh],["__scopeId","data-v-2fc8dabc"]]),Ah=J2({name:"VolumeControl",props:{volume:{type:Number,default:.8}},emits:["volume-change"],setup(c,{emit:e}){const a=j(()=>c.volume*100),s=j(()=>c.volume>0?'<i class="fas fa-volume-up"/>':'<i class="fas fa-volume-off"/>');function n(o){const t=parseFloat(o.target.value)/100;e("volume-change",t)}function r(o){e("volume-change",o)}function i(){c.volume>0?r(0):r(.8)}return{convertToValue:a,volumeHandler:n,onIconVolumeClick:i,iconVolume:s}}}),Th={class:"volume-control"},Ih=["innerHTML"],Ph=["value"];function Fh(c,e,a,s,n,r){return v2(),V2("div",Th,[q("button",{class:"player-button margin",onClick:e[0]||(e[0]=M2((...i)=>c.onIconVolumeClick&&c.onIconVolumeClick(...i),["stop"]))},[q("span",{innerHTML:c.iconVolume},null,8,Ih)]),q("input",{class:"margin",type:"range",value:c.convertToValue,min:"0",max:"100",step:"1",onInput:e[1]||(e[1]=(...i)=>c.volumeHandler&&c.volumeHandler(...i))},null,40,Ph)])}const Bh=t1(Ah,[["render",Fh],["__scopeId","data-v-841b27f2"]]),Rh=J2({name:"ProgressControl",props:{currentTime:{type:Number,default:0},totalTime:{type:Number,default:0},bestParties:{type:Array,default:()=>[]}},emits:["time-change","time-change-line"],setup(c,{emit:e}){const a=j(()=>c.currentTime/c.totalTime*100),s=j(()=>o(c.currentTime)),n=j(()=>""),r=j(()=>o(c.totalTime)),i=j(()=>{const h=Number((100/c.totalTime).toFixed(2));return c.bestParties.map(u=>({left:`${u.start*h}%`,right:`${100-u.end*h}%`}))});function o(h){const u=Math.floor(h/60),d=Math.floor(h%60);return`${u}:${String(d).padStart(2,"0")}`}function t(h){var M;const u=((M=h.currentTarget)==null?void 0:M.parentNode)||null,{clientWidth:d}=u,V=u.getBoundingClientRect(),b=h.clientX-V.left;e("time-change-line",b/d)}function f(h){e("time-change",h)}return{convertToValue:a,convertCurrentTime:s,convertTotalTime:r,timeHandler:f,timeHandlerEmit:t,convertBestPartiesInPercentage:i,convertCurrentTimeSeconds:n}}}),Dh={class:"progress-control"},Wh=["value"],Eh={class:"time-display"},Oh={key:0,class:"line"};function _h(c,e,a,s,n,r){return v2(),V2("div",Dh,[q("input",{type:"range",min:"0",max:"100",value:c.convertToValue,step:"1",onInput:e[0]||(e[0]=(...i)=>c.timeHandler&&c.timeHandler(...i))},null,40,Wh),q("div",Eh,[q("span",null,F2(c.convertCurrentTime),1),q("span",null,F2(c.convertCurrentTimeSeconds),1),q("span",null,F2(c.convertTotalTime),1)]),c.bestParties.length?(v2(),V2("div",Oh,[(v2(!0),V2(L2,null,W3(c.convertBestPartiesInPercentage,(i,o)=>(v2(),V2("div",{key:o,style:N3({left:i.left,right:i.right}),class:"best-section",onClick:e[1]||(e[1]=M2((...t)=>c.timeHandlerEmit&&c.timeHandlerEmit(...t),["stop"]))},null,4))),128))])):gf("",!0)])}const $h=t1(Rh,[["render",_h],["__scopeId","data-v-b6c0e591"]]),Uh=J2({name:"MainControl",props:{isPlaying:{type:Boolean,default:!1}},emits:["previous","play-pause","next"],setup(c,{emit:e}){function a(){e("previous")}const s=j(()=>c.isPlaying?'<i class="fas fa-pause"/>':' <i class="fas fa-play"/>');function n(){e("play-pause")}function r(){e("next")}return{previousButtonHandler:a,playerButtonHandler:n,iconPlayerButton:s,nextButtonHandler:r}}}),ec=c=>(v0("data-v-1bded451"),c=c(),H0(),c),qh={class:"main-control"},Gh=ec(()=>q("i",{class:"fas fa-step-backward"},null,-1)),jh=[Gh],Yh=["innerHTML"],Kh=ec(()=>q("i",{class:"fas fa-step-forward"},null,-1)),Xh=[Kh];function Qh(c,e,a,s,n,r){return v2(),V2("div",qh,[q("button",{class:"player-button",onClick:e[0]||(e[0]=M2((...i)=>c.previousButtonHandler&&c.previousButtonHandler(...i),["stop"]))},jh),q("button",{class:"player-button",onClick:e[1]||(e[1]=M2((...i)=>c.playerButtonHandler&&c.playerButtonHandler(...i),["stop"]))},[q("span",{innerHTML:c.iconPlayerButton},null,8,Yh)]),q("button",{class:"player-button",onClick:e[2]||(e[2]=M2((...i)=>c.nextButtonHandler&&c.nextButtonHandler(...i),["stop"]))},Xh)])}const Jh=t1(Uh,[["render",Qh],["__scopeId","data-v-1bded451"]]),Zh=J2({name:"OtherControl",props:{currentNumbSong:{type:Number,default:0},isRepeatMode:{type:Boolean,default:!1},isShowTrackList:{type:Boolean,default:!1},isDarkTheme:{type:Boolean,default:!1}},emits:["show-list-click","repeat-mode-click","change-theme"],setup(c,{emit:e}){const{totalNumbSongs:a,isRandomTracks:s,handlerRandomBtn:n}=L0();function r(){n()}function i(){e("repeat-mode-click")}function o(){e("show-list-click")}function t(){e("change-theme")}const f=j(()=>c.isDarkTheme?'<i class="fa-solid fa-toggle-on"/>':'<i class="fa-solid fa-toggle-off"/>'),h=j(()=>c.isShowTrackList?'<i class="fas fa-bars fa-rotate-90"/>':'<i class="fas fa-bars"/>');return{totalNumbSongs:a,isRandomTracks:s,iconClickRandomHandler:r,iconClickRepeatModeHandler:i,iconClickShowListHandler:o,iconClickChangeThemeHandler:t,iconToggle:f,iconBar:h}}}),ac=c=>(v0("data-v-14220f02"),c=c(),H0(),c),cm={class:"other"},em=ac(()=>q("i",{class:"fas fa-shuffle"},null,-1)),am=[em],sm=ac(()=>q("i",{class:"fas fa-repeat"},null,-1)),nm=[sm],rm={class:"song-display"},im=["innerHTML"],om=["innerHTML"];function tm(c,e,a,s,n,r){return v2(),V2("div",cm,[q("button",{class:P2({active:c.isRandomTracks}),onClick:e[0]||(e[0]=M2((...i)=>c.iconClickRandomHandler&&c.iconClickRandomHandler(...i),["stop"]))},am,2),q("button",{class:P2({active:c.isRepeatMode}),onClick:e[1]||(e[1]=M2((...i)=>c.iconClickRepeatModeHandler&&c.iconClickRepeatModeHandler(...i),["stop"]))},nm,2),q("div",rm,[q("span",null,F2(c.currentNumbSong),1),g0("/"),q("span",null,F2(c.totalNumbSongs),1)]),q("button",{onClick:e[2]||(e[2]=M2((...i)=>c.iconClickChangeThemeHandler&&c.iconClickChangeThemeHandler(...i),["stop"]))},[q("span",{innerHTML:c.iconToggle},null,8,im)]),q("button",{class:P2({active:c.isShowTrackList}),onClick:e[3]||(e[3]=M2((...i)=>c.iconClickShowListHandler&&c.iconClickShowListHandler(...i),["stop"]))},[q("span",{innerHTML:c.iconBar},null,8,om)],2)])}const lm=t1(Zh,[["render",tm],["__scopeId","data-v-14220f02"]]),fm=J2({props:{songText:{type:[Object,String],default:""},currentTime:{type:Number,default:0}},emits:["time-change"],setup(c,{emit:e}){function a(s){e("time-change",s-.5)}return{goToText:a}}}),hm=["textContent"],mm={class:"text-with-timestamps"},um=["onClick","innerHTML"];function dm(c,e,a,s,n,r){return v2(),V2("div",{class:"sidebar",onClick:e[0]||(e[0]=M2(()=>{},["stop"]))},[H3(q("span",{textContent:F2(c.songText)},null,8,hm),[[g3,typeof c.songText=="string"]]),H3(q("div",mm,[g0(F2(c.currentTime)+" ",1),(v2(!0),V2(L2,null,W3(c.songText,(i,o)=>{var t;return v2(),V2("span",{key:o,class:P2({selected:c.currentTime>=i.seconds-1&&(c.currentTime<((t=c.songText[o+1])==null?void 0:t.seconds)||o===Object.keys(c.songText).length-1)}),onClick:f=>c.goToText(i.seconds),innerHTML:`
`+i.seconds+" "+i.lyrics+`
`},null,10,um)}),128))],512),[[g3,typeof c.songText=="object"]])])}const vm=t1(fm,[["render",dm],["__scopeId","data-v-fd15988c"]]),Hm={"1.5 кг Отличного Пюре - Эмо.mp3":`Каждый раз понимать, как легко потерять
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
(We are)`},b5={"The Doors - The End.mp3":[{seconds:71,lyrics:"This is the end"},{seconds:74,lyrics:"Beautiful friend"},{seconds:79,lyrics:"This is the end"},{seconds:80,lyrics:"My only friend' the end"},{seconds:88,lyrics:"Of our elaborate plans' the end"},{seconds:96,lyrics:"Of everything that stands' the end"},{seconds:99,lyrics:"No safety or surprise' the end"},{seconds:105,lyrics:"I'll never look into your eyes, again"},{seconds:118,lyrics:"Can you picture what will be"},{seconds:123,lyrics:"So limitless and free"},{seconds:128,lyrics:"Desperately in need, of some, stranger's hand"},{seconds:136,lyrics:"In a, desperate land"},{seconds:190,lyrics:"Lost in a Roman, wilderness of pain"},{seconds:200,lyrics:"And all the children are insane"},{seconds:213,lyrics:"All the children are insane"},{seconds:333,lyrics:"Waiting for the summer rain' yeah"},{seconds:335,lyrics:"There's danger on the edge of town"},{seconds:358,lyrics:"Ride the King's highway' baby"},{seconds:360,lyrics:"Weird scenes inside the gold mine"},{seconds:361,lyrics:"Ride the highway west' baby"},{seconds:362,lyrics:"Ride the snake' ride the snake"},{seconds:363,lyrics:"To the lake' the ancient lake' baby"},{seconds:364,lyrics:"The snake is long' seven miles"},{seconds:365,lyrics:"Ride the snake, he's old' and his skin is cold"},{seconds:366,lyrics:"The west is the best"},{seconds:367,lyrics:"The west is the best"},{seconds:368,lyrics:"Get here' and we'll do the rest"},{seconds:370,lyrics:"The blue bus is callin' us"},{seconds:370,lyrics:"The blue bus is callin' us"},{seconds:370,lyrics:"Driver' where you taken' us"},{seconds:370,lyrics:"The killer awoke before dawn' he put his boots on"},{seconds:370,lyrics:"He took a face from the ancient gallery"},{seconds:371,lyrics:"And he walked on down the hall"},{seconds:371,lyrics:"He went into the room where his sister lived' and, then he"},{seconds:371,lyrics:"Paid a visit to his brother' and then he"},{seconds:371,lyrics:"He walked on down the hall' and"},{seconds:371,lyrics:"And he came to a door, and he looked inside"},{seconds:372,lyrics:"Father' yes son' I want to kill you"},{seconds:372,lyrics:"Mother, I want to, f**k you"},{seconds:372,lyrics:"C'mon baby' take a chance with us"},{seconds:372,lyrics:"C'mon baby' take a chance with us"},{seconds:372,lyrics:"C'mon baby' take a chance with us"},{seconds:372,lyrics:"And meet me at the back of the blue bus"},{seconds:373,lyrics:"Doin' a blue rock"},{seconds:374,lyrics:"On a blue bus"},{seconds:374,lyrics:"Doin' a blue rock"},{seconds:374,lyrics:"C'mon' yeah"},{seconds:374,lyrics:"Kill' kill' kill' kill' kill' kill"},{seconds:375,lyrics:"This is the end"},{seconds:375,lyrics:"Beautiful friend"},{seconds:375,lyrics:"This is the end"},{seconds:375,lyrics:"My only friend' the end"},{seconds:375,lyrics:"It hurts to set you free"},{seconds:375,lyrics:"But you'll never follow me"},{seconds:375,lyrics:"The end of laughter and soft lies"},{seconds:375,lyrics:"The end of nights we tried to die"},{seconds:376,lyrics:"This is the end"}],"August Burns Red - Truth of a Liar.mp3":[{seconds:14,lyrics:"Allow what's done to preach new"},{seconds:18,lyrics:"Insight to your life"},{seconds:21,lyrics:"Hindsight is perfect vision"},{seconds:25,lyrics:"The past is easiest to see"},{seconds:34,lyrics:"Clear a path, stand aside"},{seconds:37,lyrics:"We're carrying the torch now"},{seconds:44,lyrics:"Clear a path, stand aside"},{seconds:47,lyrics:"We're carrying the torch now"},{seconds:49,lyrics:"Clear a path, stand aside"},{seconds:52,lyrics:"There's no stopping us"},{seconds:54,lyrics:"Clear a path, stand aside"},{seconds:56,lyrics:"We're carrying the torch now"},{seconds:59,lyrics:"Clear a path, stand aside"},{seconds:61,lyrics:"There's no stopping us"},{seconds:69,lyrics:"Now I think you're everything"},{seconds:75,lyrics:"To everyone, to everyone"},{seconds:79,lyrics:"Go ahead, partake in it"},{seconds:83,lyrics:"Justify it"},{seconds:86,lyrics:"Become engulfed in it"},{seconds:88,lyrics:"It will eat you alive"},{seconds:95,lyrics:"This is not a one way road"},{seconds:99,lyrics:"You're headed for the dead end"},{seconds:102,lyrics:"This is not a one way road"},{seconds:105,lyrics:"You're headed for the dead end"},{seconds:109,lyrics:"This is not a one way road"},{seconds:112,lyrics:"You're headed for the dead end"},{seconds:116,lyrics:"This is not a one way road"},{seconds:119,lyrics:"You're headed for the dead end"},{seconds:123,lyrics:"You might think you're"},{seconds:125,lyrics:"Everything to everyone"},{seconds:128,lyrics:"Well pardon me if I intrude"},{seconds:133,lyrics:"You might think you're"},{seconds:135,lyrics:"Everything to everyone"},{seconds:138,lyrics:"You're not a perfect man"},{seconds:141,lyrics:"In a perfect world"},{seconds:143,lyrics:"Look at where your ignorance"},{seconds:145,lyrics:"Has brought you"},{seconds:148,lyrics:"All this will be buried like"},{seconds:150,lyrics:"The fall of Rome"},{seconds:152,lyrics:"Look at where your ignorance"},{seconds:155,lyrics:"Has brought you"},{seconds:158,lyrics:"You will come crashing down"},{seconds:163,lyrics:"But denial's what will kill you"},{seconds:169,lyrics:"But denial's what will kill you"},{seconds:174,lyrics:"But denial's what will kill you"},{seconds:194,lyrics:"All that you loved"},{seconds:195,lyrics:"All that you treasure"},{seconds:198,lyrics:"Will pass with time"},{seconds:200,lyrics:"Will pass with time"},{seconds:204,lyrics:"Blinded by the inability to see"},{seconds:209,lyrics:"Beyond flesh and blood"},{seconds:215,lyrics:"Blinded by the inability to see"},{seconds:220,lyrics:"Beyond flesh and blood"},{seconds:226,lyrics:"Shifting blame with a"},{seconds:228,lyrics:"Log in your eye"},{seconds:230,lyrics:"Insisting that a string"},{seconds:234,lyrics:"Tied to your limbs"},{seconds:236,lyrics:"Is what's to blame "},{seconds:239,lyrics:"Is what's to blame"},{seconds:241,lyrics:"Suck it up and bite the bullet"}],"ZEROMANCER - Dr. Online.mp3":[{seconds:18,lyrics:"It's the beginning of the end"},{seconds:21,lyrics:"You want things to go faster"},{seconds:25,lyrics:"It's the beginning of the end"},{seconds:29,lyrics:"Now everything′s too slow for you"},{seconds:33,lyrics:"It's the beginning of the end"},{seconds:36,lyrics:"You are one step closer"},{seconds:40,lyrics:"It's the beginning of the end"},{seconds:43,lyrics:"Say Amen"},{seconds:48,lyrics:"1-800-SUICIDE"},{seconds:51,lyrics:"Or maybe Doctor Online could help you die"},{seconds:55,lyrics:"You need wings fo fly"},{seconds:57,lyrics:"You need someone"},{seconds:59,lyrics:"To take your place"},{seconds:61,lyrics:"When you are gone"},{seconds:63,lyrics:"Is the beginning of the end"},{seconds:66,lyrics:"You know nothing last forever"},{seconds:70,lyrics:"A beginning of a trend"},{seconds:74,lyrics:"You need someone there to care for you"},{seconds:77,lyrics:"Is the beginning of the end"},{seconds:80,lyrics:"I don′t think you understand"},{seconds:84,lyrics:"Just a beginning of a flatline"},{seconds:89,lyrics:"Together"},{seconds:92,lyrics:"1-800-SUICIDE"},{seconds:95,lyrics:"Or maybe Doctor Online could help you die"},{seconds:99,lyrics:"You need wings fo fly"},{seconds:101,lyrics:"You need someone"},{seconds:103,lyrics:"To take your place"},{seconds:105,lyrics:"When you are gone"},{seconds:107,lyrics:"1-800-SUICIDE"},{seconds:110,lyrics:"Or maybe Doctor Online could help you die"},{seconds:114,lyrics:"You need wings fo fly"},{seconds:115,lyrics:"You need someone"},{seconds:117,lyrics:"To take your place"},{seconds:120,lyrics:"When you are gone"},{seconds:166,lyrics:"1-800-SUICIDE"},{seconds:169,lyrics:"Or maybe Doctor Online could help you die"},{seconds:173,lyrics:"You need wings fo fly"},{seconds:175,lyrics:"You need someone"},{seconds:177,lyrics:"To take your place"},{seconds:179,lyrics:"When you are gone"},{seconds:180,lyrics:"1-800-SUICIDE"},{seconds:184,lyrics:"Or maybe Doctor Online could help you die"},{seconds:188,lyrics:"You need wings fo fly"},{seconds:190,lyrics:"You need someone"},{seconds:191,lyrics:"To take your place"},{seconds:193,lyrics:"When you are gone"}],"August Burns Red - Chasing the Dragon.mp3":[{seconds:1,lyrics:"Living in a world of regrets"},{seconds:16,lyrics:"You never wanted this and you never will"},{seconds:18,lyrics:"X2"},{seconds:20,lyrics:"Watching your mirror image drowning in a lake of your own sorrows your own sorrows"},{seconds:30,lyrics:"But we will pray that you will pray you will look toward the skies"},{seconds:46,lyrics:"Look toward the skies which covers you like blankets and see his open arms"},{seconds:59,lyrics:"Look toward the skies"},{seconds:64,lyrics:"Look toward the skies"},{seconds:69,lyrics:"You claim you claim you were built to fall"},{seconds:74,lyrics:"You were never strong enough"},{seconds:80,lyrics:"You claim you claim you were built to fall"},{seconds:86,lyrics:"You were never strong enough"},{seconds:95,lyrics:"H****n has no healing to this unfortunate tragedy"},{seconds:105,lyrics:"Don't stray from what you've become now to who you were then"},{seconds:111,lyrics:"With a needle in your arm"},{seconds:126,lyrics:"Now affection has abandoned you can you still feel"},{seconds:129,lyrics:"Now affection has abandoned you can you still feel"},{seconds:139,lyrics:"Hold on"},{seconds:149,lyrics:"Hold on don't you die"},{seconds:151,lyrics:"Hold on don't you die on me"},{seconds:168,lyrics:"Living in a world of regrets you never wanted this and you never will"},{seconds:175,lyrics:"You claim you were built to fall you were never strong enough"},{seconds:224,lyrics:"You claim you were built to fall you were never strong enough"},{seconds:236,lyrics:"Save yourself"},{seconds:237,lyrics:"You claim you claim you were built to fall you were never strong enough"},{seconds:241,lyrics:"You claim you claim you were built to fall you were never strong enough"}],"August Burns Red - Indonesia.mp3":[{seconds:9,lyrics:"This plane is going down in flames and this time"},{seconds:14,lyrics:"There's no black box to capture your last words"},{seconds:18,lyrics:"A situation we can't make any sense of"},{seconds:24,lyrics:"Sacrifice costs all of us everything"},{seconds:30,lyrics:"This is the time to turn down our heads and turn up our hearts"},{seconds:37,lyrics:"There's no scale to balance this out"},{seconds:42,lyrics:"Some say may those who curse days curse this day"},{seconds:48,lyrics:"There's no scale to balance this out"},{seconds:63,lyrics:"How does a man wrap his mind around eternity"},{seconds:72,lyrics:"When he can't even explain his own composition"},{seconds:79,lyrics:"Don't you see it's bigger than you"},{seconds:80,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:97,lyrics:"And the white on his flag brings colors to shame colors to shame"},{seconds:103,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:108,lyrics:"And the white on his flag brings colors to shame colors to shame"},{seconds:121,lyrics:"The earth will swallow the water"},{seconds:125,lyrics:"The clouds refill the oceans"},{seconds:128,lyrics:"The earth will swallow the water and spit out"},{seconds:136,lyrics:"The clouds will refill refill the oceans"},{seconds:144,lyrics:"The earth will swallow the water and spit out"},{seconds:151,lyrics:"The clouds will refill refill the oceans"},{seconds:158,lyrics:"Humble and broken"},{seconds:161,lyrics:"This plane crashed down in flames"},{seconds:164,lyrics:"With a man who lived who died to better this world"},{seconds:188,lyrics:"David rest in peace"},{seconds:190,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:192,lyrics:"And the white on his flag brings colors to shame colors to shame"},{seconds:198,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:203,lyrics:"And the white on his flag brings colors to shame colors to shame"}],"Between The Buried And Me - Ants Of The Sky.mp3":[{seconds:0,lyrics:"My teeth taste funny today they seem more jagged than normal"},{seconds:5,lyrics:"I've been told that I have been grinding them"},{seconds:19,lyrics:"Like the gears during my dream hours"},{seconds:32,lyrics:"I wonder if its just my thoughts fusing into one frequent dream"},{seconds:37,lyrics:"One which parts with the night"},{seconds:61,lyrics:"There are frequent amongst the walking crawlers"},{seconds:109,lyrics:"I saw them dragging the other day"},{seconds:189,lyrics:"Scraping their knees and elbows against the bumpy pavement"},{seconds:195,lyrics:"Blood tracks have been filling the streets"},{seconds:200,lyrics:"Seems the high horse is taking them all home"},{seconds:208,lyrics:"I can't leave myself out"},{seconds:213,lyrics:"Why should we sleep today"},{seconds:279,lyrics:"Why should we awake tomorrow"},{seconds:283,lyrics:"We can just pop back a few and drift though this pre-programmed flight"},{seconds:294,lyrics:"Across all oceans a windy noisy trek"},{seconds:298,lyrics:"This seems to be what I've needed"},{seconds:299,lyrics:"The view used to be better lands are growing into one"},{seconds:318,lyrics:"We wanted it this way We were brought up to grow into one"},{seconds:388,lyrics:"I'm going to fly up soon and seek other lands"},{seconds:409,lyrics:"The soothing air of flight"},{seconds:411,lyrics:"A birds eye view into what I've always imagined life could be"},{seconds:420,lyrics:"Will it be sought after"},{seconds:429,lyrics:"It might just be useless writing and ideas that laziness will corrupt in the end"},{seconds:511,lyrics:"Bones of dust need hardening"},{seconds:526,lyrics:"I think the prescription is found"},{seconds:540,lyrics:"Sleep on fly on"},{seconds:594,lyrics:"In your mind you can fly"},{seconds:601,lyrics:"My teeth grin oddly today"},{seconds:607,lyrics:"They seem to gleam more than normal"},{seconds:658,lyrics:"Maybe it will be noticed"},{seconds:684,lyrics:"That's all we ever asked for grinning through it all"},{seconds:691,lyrics:"In the corner the thinker thinks I seem more jagged than normal"},{seconds:713,lyrics:"I am the episode of constant wandering"},{seconds:731,lyrics:"A nomad in my own surroundings"},{seconds:762,lyrics:"This hand produces the nerve"},{seconds:771,lyrics:"The walking dead"},{seconds:774,lyrics:"Walking dead"}],"1.5 кг Отличного Пюре - Эмо.mp3":[],"As I Lay Dying - Forever.mp3":[{seconds:2,lyrics:"Forever your eyes will hold the memory"},{seconds:7,lyrics:"I saw your heart as it overtook me"},{seconds:13,lyrics:"We tried so hard to understand and reason"},{seconds:18,lyrics:"But in the one moment 'I gave my heart away"},{seconds:32,lyrics:"And I gave my heart away"},{seconds:36,lyrics:"But in the moment"},{seconds:38,lyrics:"I gave my heart away"},{seconds:40,lyrics:"But in the moment"},{seconds:43,lyrics:"I gave my heart away"},{seconds:51,lyrics:"Your the perfect breath where' my mind lay beside me"},{seconds:56,lyrics:"And all I knew is what had overtaken me"},{seconds:62,lyrics:"With no explanation I am comforted"},{seconds:70,lyrics:"By my inability 'to understand"},{seconds:76,lyrics:"Forever your eyes will hold the memory"},{seconds:80,lyrics:"I saw your heart as it overtook me"},{seconds:87,lyrics:"We tried so hard to understand and reason"},{seconds:92,lyrics:"But in the one moment I gave my heart away"},{seconds:106,lyrics:"And I gave my heart away"},{seconds:108,lyrics:"But in the moment"},{seconds:111,lyrics:"I gave my heart away"},{seconds:114,lyrics:"But in the moment"},{seconds:117,lyrics:"I gave my heart away"},{seconds:146,lyrics:"Forever your eyes will hold the memory"},{seconds:156,lyrics:"Forever your eyes will hold the memory"},{seconds:168,lyrics:"Forever your eyes will hold the memory"},{seconds:226,lyrics:"When I wake from this dream "},{seconds:234,lyrics:"Will your smile still open my heart"},{seconds:242,lyrics:"And leave me transparent "},{seconds:251,lyrics:"When I wake from this dream "},{seconds:259,lyrics:"Will your smile still open my heart"}],"As I Lay Dying - The Sound Оf Truth.mp3":[{seconds:37,lyrics:"We have all heard what we wanted to hear"},{seconds:43,lyrics:"Truth that sounds right to our ears"},{seconds:48,lyrics:"We have all heard what we wanted to hear"},{seconds:54,lyrics:"Truth that sounds right to our ears"},{seconds:60,lyrics:"But what wisdom is there within us"},{seconds:66,lyrics:"To live based on the feeling of our hearts"},{seconds:71,lyrics:"How many times has instinct let us down"},{seconds:77,lyrics:"Never to be thought through"},{seconds:80,lyrics:"Never to be questioned no"},{seconds:86,lyrics:"Say what you really mean"},{seconds:89,lyrics:"When your ambition calls you calls you"},{seconds:95,lyrics:"For what use is there"},{seconds:98,lyrics:"Is there in praying"},{seconds:101,lyrics:"If you will only hear what you want to hear"},{seconds:121,lyrics:"We have all heard what we wanted to hear"},{seconds:127,lyrics:"Truth that sounds right to our ears"},{seconds:135,lyrics:"We speak of fighting to resist this world"},{seconds:141,lyrics:"But what about the battle within us"},{seconds:147,lyrics:"If we have chosen to live against the grain"},{seconds:153,lyrics:"Then why are we all facing the same way"},{seconds:170,lyrics:"There is no difference between us and them"},{seconds:176,lyrics:"If we all blindly seek truth from sentiments"},{seconds:217,lyrics:"We have all heard what we wanted to hear"},{seconds:223,lyrics:"Truth that sounds right to our ears"},{seconds:229,lyrics:"We have all heard what we wanted to hear"},{seconds:235,lyrics:"Truth that sounds right to our ears"},{seconds:240,lyrics:"We have all heard what we wanted to hear"},{seconds:246,lyrics:"Truth that sounds right to our ears"}],"August Burns Red - Meridian.mp3":[{seconds:0,lyrics:"The song called meridian"},{seconds:189,lyrics:"The people who survive the sword will find favor in the desert"},{seconds:196,lyrics:"I will build you up again and you will be rebuilt"},{seconds:203,lyrics:"I am the painter making this mess a masterpiece"},{seconds:220,lyrics:"I will rebuild"},{seconds:230,lyrics:"I will rebuild you up again"}],"Bullet For My Valentine - Hand Of Blood.mp3":[{seconds:30,lyrics:"There goes my Valentine again"},{seconds:33,lyrics:"Soaked in Red for what she said"},{seconds:36,lyrics:"And Now she's gone "},{seconds:38,lyrics:"Oh my god have i done it again "},{seconds:41,lyrics:"There's a pulse and its deafening"},{seconds:44,lyrics:"I can't help what i hear in my head "},{seconds:46,lyrics:"Its the switch that i flick when he says "},{seconds:52,lyrics:"Hand of Blood "},{seconds:53,lyrics:"I don't wana feel my heart is breaking "},{seconds:55,lyrics:"Hand OF Blood "},{seconds:55,lyrics:"I don't wana see my life is burning"},{seconds:59,lyrics:"I saw you look away "},{seconds:73,lyrics:"Is what you've seen too much to take or are you blind and seeing nothing "},{seconds:77,lyrics:"(I saw you run)I saw you run away "},{seconds:83,lyrics:"Is what i've done to much to take or are you scared of being nothing "},{seconds:89,lyrics:"Theres a stain on my hand, and its red"},{seconds:92,lyrics:"Oh my god, am i losing it "},{seconds:94,lyrics:"I can't help what I've done or I've said"},{seconds:97,lyrics:"It's the button i push when he says "},{seconds:99,lyrics:"Hand of Blood "},{seconds:100,lyrics:"I don't wana feel my heart is breaking "},{seconds:104,lyrics:"Hand OF Blood "},{seconds:106,lyrics:"I don't wana see my life is burning "},{seconds:120,lyrics:"I saw you look away "},{seconds:124,lyrics:"Is what youve seen to much to take or are you blind and seeing nothing "},{seconds:129,lyrics:"(I saw you run away) I saw you run away "},{seconds:134,lyrics:"Is what i've done to much to take or are you scared of being nothing"},{seconds:138,lyrics:"Ｓ Ｏ Ｌ Ｏ "},{seconds:182,lyrics:"MIA, , , , , , , "},{seconds:194,lyrics:"I saw you look away "},{seconds:197,lyrics:"Is what youve seen to much to take or are you blind and seeing nothing"},{seconds:202,lyrics:"(I saw you run away)I saw you run away "},{seconds:207,lyrics:"Is what i've done to much to take or are you scared of being nothing"}],"August Burns Red - Consumer.mp3":[{seconds:2,lyrics:"A front seat to your own flick"},{seconds:16,lyrics:"If only you could see how much your emotions waver"},{seconds:41,lyrics:"Words are flowing from your mouth at lightning speed"},{seconds:46,lyrics:"They're packing heat and are ready to kill"},{seconds:53,lyrics:"Cry"},{seconds:55,lyrics:"Frown"},{seconds:56,lyrics:"Hit"},{seconds:57,lyrics:"Yell"},{seconds:61,lyrics:"Let's watch where it takes you"},{seconds:66,lyrics:"You really don't have it that bad"},{seconds:72,lyrics:"Try looking through the glass of beauty"},{seconds:78,lyrics:"It will show you truth"},{seconds:81,lyrics:"We are all guilty of self centeredness"},{seconds:91,lyrics:"We have committed the crime"},{seconds:107,lyrics:"But what we fail to realize is the dent it leaves in our soul"},{seconds:118,lyrics:"Everyone is full of it in their own way"},{seconds:127,lyrics:"A young boy cannot comprehend social status"},{seconds:131,lyrics:"And this boy is better off than any of us"},{seconds:149,lyrics:"Life will pass by us like a summer storm"},{seconds:188,lyrics:"And if we consume ourselves with ourselves we will surely look back with sorrow"}],"Children Of Bodom - Are You Dead Yet.mp3":[],"August Burns Red - Barbarian.mp3":[{seconds:12,lyrics:"Chaos brings order"},{seconds:13,lyrics:"Who will you allow to lead you blindly until the end"},{seconds:34,lyrics:"You're like a little girl with a stupid crush"},{seconds:56,lyrics:"We all sing glory"},{seconds:77,lyrics:"We all choke ourselves with our own ignorance"},{seconds:80,lyrics:"There is so much more to life than your stupid desires"},{seconds:94,lyrics:"Nothing is everything and everything is something"},{seconds:103,lyrics:"Confused Troubled"},{seconds:108,lyrics:"Finding the meaning is looking through the vivid transparencies"},{seconds:122,lyrics:"Dance the night away because tomorrow"},{seconds:127,lyrics:"We will look back and talk about good times now gone forever"},{seconds:155,lyrics:"Trace lines around the image of your choice"},{seconds:159,lyrics:"Dance until the end my friend and find joy in every living thing"},{seconds:203,lyrics:"Optimism is not a choice it's a belief"}],"As I Lay Dying - Nothing Left [2007].mp3":[{seconds:20,lyrics:"Yeah"},{seconds:42,lyrics:"This world was never worthy"},{seconds:46,lyrics:"But how can I call it unfaithful"},{seconds:50,lyrics:"Every promise was fulfilled"},{seconds:54,lyrics:"As decay crawled from it's throat"},{seconds:59,lyrics:"Like the dead rising from an open grave"},{seconds:67,lyrics:"Like the dead rising from an open grave"},{seconds:85,lyrics:"Lips of splendor and tongue of deceit"},{seconds:90,lyrics:"All dying now as our fragile wrists hold only waste"},{seconds:97,lyrics:"Like those gasping for their last breath"},{seconds:103,lyrics:"We cannot hide there's nothing left"},{seconds:108,lyrics:"Like those gasping for their last breath"},{seconds:113,lyrics:"We cannot hide there's nothing left"},{seconds:122,lyrics:"Nothing left"},{seconds:126,lyrics:"Nothing left"},{seconds:131,lyrics:"There's nothing left"},{seconds:137,lyrics:"Nothing left"},{seconds:139,lyrics:"If all my sorrow has led me here"},{seconds:144,lyrics:"Then I would cry all of my tears"},{seconds:149,lyrics:"To have this chance again to have this chance again"},{seconds:154,lyrics:"To have this chance again to have this chance again"},{seconds:158,lyrics:"And know there's more than this"},{seconds:161,lyrics:"And know there's more than you"},{seconds:185,lyrics:"Like those gasping for their last breath"},{seconds:190,lyrics:"We cannot hide there's nothing left"},{seconds:195,lyrics:"Like those gasping for their last breath"},{seconds:200,lyrics:"We cannot hide there's nothing left"}],"Between The Buried And Me - Sun Of Nothing.mp3":[{seconds:4,lyrics:"Everywhere I look they are there"},{seconds:8,lyrics:"What is everyone doing"},{seconds:11,lyrics:"Going to a home"},{seconds:16,lyrics:"Everywhere I look they are there"},{seconds:20,lyrics:"What is everyone doing"},{seconds:23,lyrics:"Going to a home"},{seconds:28,lyrics:"To a place that makes us feel warm"},{seconds:30,lyrics:"A place that grants us a smile"},{seconds:33,lyrics:"Grants us a smile"},{seconds:37,lyrics:"Seems like a very simple idea but not hardly figured out"},{seconds:51,lyrics:"I just see faces"},{seconds:58,lyrics:"Faces staring blank as they go on with the routine"},{seconds:66,lyrics:"I just see faces"},{seconds:74,lyrics:"Faces staring blank as they go on with the routine"},{seconds:82,lyrics:"This routine"},{seconds:87,lyrics:"Nothing new it's time to go through with this"},{seconds:93,lyrics:"This routine"},{seconds:98,lyrics:"Nothing new it's time to go through with this"},{seconds:104,lyrics:"This routine"},{seconds:108,lyrics:"Nothing new it's time to go through with this"},{seconds:139,lyrics:"A spaceman that's what they say I am"},{seconds:147,lyrics:"Nothing but a spaceman always pushing it all away"},{seconds:164,lyrics:"Nothing but a spaceman always pushing it all away"},{seconds:175,lyrics:"Trying to get to that one place I call home"},{seconds:183,lyrics:"The journey begins"},{seconds:188,lyrics:"Forcing a new life with the unexplained"},{seconds:193,lyrics:"A creeping rush that surrounds me"},{seconds:198,lyrics:"Floating away"},{seconds:202,lyrics:"Floating away"},{seconds:203,lyrics:"Floating away"},{seconds:204,lyrics:"Floating away"},{seconds:205,lyrics:"Floating away"},{seconds:230,lyrics:"Always pushing it all away"},{seconds:234,lyrics:"Trying to get to that one place I call home"},{seconds:244,lyrics:"My own planet I allowed this wish"},{seconds:254,lyrics:"Unexpected not knowing why"},{seconds:264,lyrics:"Wonder why why"},{seconds:278,lyrics:"Wonder why I question it now"},{seconds:294,lyrics:"I'm my own planet"},{seconds:310,lyrics:"Not many can experience this sensation"},{seconds:320,lyrics:"Loneliness is creeping out"},{seconds:324,lyrics:"Or in however you think of it"},{seconds:333,lyrics:"But it sure is surrounding me"},{seconds:338,lyrics:"Maybe all the complaining is an accordance of boredom"},{seconds:347,lyrics:"I suppose it's too late"},{seconds:352,lyrics:"I am floating farther and farther away"},{seconds:362,lyrics:"I am floating farther I am floating"},{seconds:371,lyrics:"I did love I did laugh I did live"},{seconds:419,lyrics:"A spaceman they say I am a spaceman"},{seconds:443,lyrics:"A spaceman they say I am a spaceman"},{seconds:461,lyrics:"Planets everywhere my own destiny"},{seconds:475,lyrics:"I'm floating towards the sun"},{seconds:484,lyrics:"The sun of nothing floating towards the sun"},{seconds:500,lyrics:"The sun of nothing I have become the sun of nothing"},{seconds:513,lyrics:"Nothing is here memories are not clear"},{seconds:533,lyrics:"Floating to the sun the sun nothing"},{seconds:548,lyrics:"Floating to the sun the sun nothing"},{seconds:561,lyrics:"Floating floating floating"},{seconds:567,lyrics:"Floating to the sun farther away"},{seconds:588,lyrics:"I can't believe that's what it has come to"},{seconds:594,lyrics:"I never really had it all that bad"},{seconds:601,lyrics:"I just looked around and never thought about the blank stares"},{seconds:613,lyrics:"Blank stairs"},{seconds:625,lyrics:"They were looking into something much worse than what I thought I was"},{seconds:631,lyrics:"Selfishness is a very sticky quality of this species looking around"},{seconds:637,lyrics:"I don't see any faces yes I am lonely"},{seconds:643,lyrics:"It's to be expected I'll sleep now"},{seconds:646,lyrics:"Dream waves"}],"Killing Floor OST - Wake.mp3":[],"Machine Head - Beautiful Mourning.mp3":[{seconds:0,lyrics:"F**k you all"},{seconds:33,lyrics:"My redemption is knowing this will be over"},{seconds:39,lyrics:"My aggression I fear I've lost control"},{seconds:46,lyrics:"Who is this man I stare"},{seconds:49,lyrics:"Mirror reflects a stranger"},{seconds:52,lyrics:"Fist shatters the despair"},{seconds:55,lyrics:"Awake the pain to anger"},{seconds:57,lyrics:"How do I close thine eyes of murder"},{seconds:71,lyrics:"How do I close thine eyes of murder"},{seconds:79,lyrics:"Staring into me"},{seconds:87,lyrics:"My obsession is dying sinking me deeper"},{seconds:90,lyrics:"My depression this world has disavowed"},{seconds:98,lyrics:"Razor at wrist I seethe"},{seconds:102,lyrics:"The flesh is peeled apart now"},{seconds:104,lyrics:"Gone is my faded dream"},{seconds:107,lyrics:"Failure I welcome in thou"},{seconds:108,lyrics:"How do I close thine eyes of murder"},{seconds:109,lyrics:"How do I close thine eyes of murder"},{seconds:158,lyrics:"Staring into me"},{seconds:159,lyrics:"This lifetime in sorrow"},{seconds:165,lyrics:"God let the angels die"},{seconds:168,lyrics:"This is our last goodbye"},{seconds:177,lyrics:"In love and death we cry"},{seconds:188,lyrics:"Our last goodbye"},{seconds:198,lyrics:"No no no no"},{seconds:220,lyrics:"No no no no"},{seconds:225,lyrics:"Spit in the face of loss"},{seconds:228,lyrics:"Coward my own self hatred"},{seconds:231,lyrics:"No more I bear this cross"},{seconds:234,lyrics:"Suffer and rise from the dead"},{seconds:238,lyrics:"This lifetime in sorrow"},{seconds:244,lyrics:"God let the angels die"},{seconds:248,lyrics:"This is our last goodbye"},{seconds:255,lyrics:"In love and death we cry"}],"Machine Head - Hallowed Be Thy Name.mp3":[{seconds:13,lyrics:"I'm waiting in my cold cell"},{seconds:20,lyrics:"When the bell begins to chime"},{seconds:27,lyrics:"Reflecting on my past life"},{seconds:34,lyrics:"And it doesn't have much time"},{seconds:41,lyrics:"'Cause at 5 o'clock they'll take me to the gallows pole"},{seconds:55,lyrics:"The sands of time for me are running low"},{seconds:78,lyrics:"Running low oh yeah"},{seconds:106,lyrics:"When the priest comes to read me the last rites"},{seconds:109,lyrics:"I take a look through the bars at the last sights"},{seconds:111,lyrics:"Of a world that has gone very wrong for me"},{seconds:116,lyrics:"Can it be that there's some sort of error"},{seconds:118,lyrics:"Hard to stop the surmounting terror"},{seconds:120,lyrics:"Is it really the end not some crazy dream"},{seconds:125,lyrics:"Somebody please tell me that I'm dreaming"},{seconds:127,lyrics:"It's not easy to stop from screaming"},{seconds:130,lyrics:"But words escape me when I try to speak"},{seconds:135,lyrics:"Tears fall but why am I crying"},{seconds:137,lyrics:"After all I'm not afraid of dying"},{seconds:139,lyrics:"Do not believe that there never is an end"},{seconds:199,lyrics:"As the guards march me out to the courtyard"},{seconds:201,lyrics:"Somebody cries from a cell God be with you"},{seconds:204,lyrics:"If there's a God"},{seconds:205,lyrics:"Then why has he let me go go go"},{seconds:208,lyrics:"As I walk my life drifts before me"},{seconds:211,lyrics:"Though the end is near I'm not sorry"},{seconds:213,lyrics:"Catch my soul it's willing to fly away"},{seconds:217,lyrics:"Mark my words believe my soul lives on"},{seconds:220,lyrics:"Don't worry now that I have gone"},{seconds:222,lyrics:"I've gone beyond to see the truth truth truth"},{seconds:227,lyrics:"When you know that your time is close at hand"},{seconds:229,lyrics:"Maybe then you'll begin to understand"},{seconds:231,lyrics:"Life down here is just a strange illusion"},{seconds:394,lyrics:"Yeah yeah yeah"},{seconds:399,lyrics:"Hallowed be thy name"},{seconds:403,lyrics:"Yeah yeah yeah"},{seconds:407,lyrics:"Hallowed be thy name"}],"Dragonforce - The Flame of Youth.mp3":[{seconds:66,lyrics:"Close your eyes, hear the thunder and rain"},{seconds:68,lyrics:"Fear inside of the torturing pain"},{seconds:69,lyrics:"For the cries of the world and the last lives remain"},{seconds:75,lyrics:"Chain your heart swear to die for their gain"},{seconds:78,lyrics:"Deep inside slowly fading away"},{seconds:80,lyrics:"And the last breath remains and the fear turns to rage"},{seconds:84,lyrics:"Locked in a world by the fallen evil souls"},{seconds:87,lyrics:"Torn right apart for your life insane"},{seconds:89,lyrics:"Burning in my mind now to bring my life to hold"},{seconds:92,lyrics:"Reach out and die in the flames"},{seconds:94,lyrics:"See through the lies and their ever staring eyes"},{seconds:96,lyrics:"Now is the time to defend your ground"},{seconds:98,lyrics:"Destiny will call to remind us all now"},{seconds:101,lyrics:"Fly free so far from here, this life we now will end"},{seconds:105,lyrics:"In dreams of everlasting pain the fallen now rise again"},{seconds:110,lyrics:"Through the fire, through the flames like the sun will rise again"},{seconds:115,lyrics:"Lost in time, lost in space to the end of all their days"},{seconds:120,lyrics:"See their endless ways insanity, the quest deranged not meant to be"},{seconds:125,lyrics:"In flames will now forever burn eternally"},{seconds:130,lyrics:"So free your heart, leave your life far behind"},{seconds:134,lyrics:"In the cold of winter skies escape the pain inside"},{seconds:140,lyrics:"Now feel your soul lost in seas of all eternity"},{seconds:145,lyrics:"Every day this life defending and the flames of youth not ending"},{seconds:150,lyrics:"In a lifetime searching, we must fight through the eternal pain"},{seconds:176,lyrics:"So alone in a world far away, memories of a dream will remain"},{seconds:180,lyrics:"As the world falling calls and our lives all in vain"},{seconds:185,lyrics:"Fire in my soul will forever rise again"},{seconds:188,lyrics:"Nothing in my mind to remember now"},{seconds:190,lyrics:"Broken by the fear of the dark night calling"},{seconds:192,lyrics:"Ride free on endless seas, the final curtain falls"},{seconds:197,lyrics:"Cut the ground from down below, the time to lock and to load"},{seconds:202,lyrics:"Through the fire, through the rain, far across the distant plains"},{seconds:206,lyrics:"Feel the wind beneath the steel as your mind becomes insane"},{seconds:211,lyrics:"Save the pain from all humanity, that rides throughout our destiny"},{seconds:215,lyrics:"For freedom now we rise for all again"},{seconds:222,lyrics:"So free your heart, leave your life far behind"},{seconds:226,lyrics:"In the cold of winter skies escape the pain inside"},{seconds:231,lyrics:"Now feel your soul lost in seas of all eternity"},{seconds:235,lyrics:"Every day this life defending and the flames of youth not ending"},{seconds:241,lyrics:"In a lifetime searching, we must fight through the eternal pain"},{seconds:349,lyrics:"So free your heart, leave your life far behind"},{seconds:352,lyrics:"In the cold of winter skies escape the pain inside"},{seconds:358,lyrics:"And when the memories are all but left behind"},{seconds:363,lyrics:"And the days have gone forever, lost within my mind"},{seconds:368,lyrics:"Now feel your soul burn in seas of all eternity"},{seconds:372,lyrics:"Every day this life defending and the flames of youth not ending"},{seconds:378,lyrics:"In a lifetime searching, we must fight through the eternal pain"},{seconds:387,lyrics:"We fight through the eternal pain"}],"The Doors - Alabama song.mp3":[{seconds:11,lyrics:"Well, show me the way"},{seconds:13,lyrics:"To the next whisky bar"},{seconds:17,lyrics:"Oh, don't ask why"},{seconds:20,lyrics:"Oh, don't ask why"},{seconds:22,lyrics:"Show me the way"},{seconds:24,lyrics:"To the next whisky bar"},{seconds:28,lyrics:"Oh, don't ask why"},{seconds:31,lyrics:"Oh, don't ask why"},{seconds:34,lyrics:"For if we don't find"},{seconds:36,lyrics:"The next whisky bar"},{seconds:39,lyrics:"I tell you we must die"},{seconds:42,lyrics:"I tell you we must die"},{seconds:44,lyrics:"I tell you, I tell you"},{seconds:47,lyrics:"I tell you we must die"},{seconds:55,lyrics:"Oh, moon of Alabama"},{seconds:60,lyrics:"We now must say goodbye"},{seconds:66,lyrics:"We've lost our good old mama"},{seconds:73,lyrics:"And must have whisky, oh, you know why"},{seconds:81,lyrics:"Oh, moon of Alabama"},{seconds:83,lyrics:"We now must say goodbye"},{seconds:88,lyrics:"We've lost our good old mama"},{seconds:94,lyrics:"And must have whisky, oh, you know why"},{seconds:105,lyrics:"Well, show me the way"},{seconds:107,lyrics:"To the next little girl"},{seconds:111,lyrics:"Oh, don't ask why"},{seconds:114,lyrics:"Oh, don't ask why"},{seconds:116,lyrics:"Show me the way"},{seconds:118,lyrics:"To the next little girl"},{seconds:122,lyrics:"Oh, don't ask why"},{seconds:124,lyrics:"Oh, don't ask why"},{seconds:128,lyrics:"For if we don't find"},{seconds:130,lyrics:"The next little girl"},{seconds:133,lyrics:"I tell you we must die"},{seconds:135,lyrics:"I tell you we must die"},{seconds:138,lyrics:"I tell you, I tell you"},{seconds:141,lyrics:"I tell you we must die"},{seconds:171,lyrics:"Oh, moon of Alabama"},{seconds:175,lyrics:"We now must say goodbye"},{seconds:181,lyrics:"We've lost our good old mama"},{seconds:188,lyrics:"And must have whisky, oh, you know why"}],"P.O.D. - Youth of the Nation.mp3":[{seconds:33,lyrics:"Last day of the rest of my life"},{seconds:35,lyrics:"I wish I would've known"},{seconds:36,lyrics:"'Cause I didn't kiss my mama goodbye"},{seconds:37,lyrics:"I didn't tell her that I loved her and how much I care"},{seconds:39,lyrics:"Or thank my pops for all the talks"},{seconds:41,lyrics:"And all the wisdom he shared"},{seconds:42,lyrics:"Unaware, I just did what I always do"},{seconds:44,lyrics:"Everyday, the same routine"},{seconds:45,lyrics:"Before I skate off to school"},{seconds:47,lyrics:"But who knew that this day wasn't like the rest"},{seconds:49,lyrics:"Instead of taking a test"},{seconds:50,lyrics:"I took two to the chest"},{seconds:53,lyrics:"Call me blind, but I didn't see it coming"},{seconds:54,lyrics:"Everybody was running"},{seconds:55,lyrics:"But I couldn't hear nothing"},{seconds:57,lyrics:"Except gun blasts, it happened so fast"},{seconds:59,lyrics:"I don't really know this kid"},{seconds:60,lyrics:"Even though I sit by him in class"},{seconds:62,lyrics:"Maybe this kid was reaching out for love"},{seconds:64,lyrics:"Or maybe for a moment"},{seconds:65,lyrics:"He forgot who he was"},{seconds:67,lyrics:"Or maybe this kid just wanted to be hugged"},{seconds:69,lyrics:"Whatever it was"},{seconds:70,lyrics:"I know it's because"},{seconds:72,lyrics:"Chorus"},{seconds:73,lyrics:"We are, We are, the youth of the nation"},{seconds:77,lyrics:"We are, We are, the youth of the nation"},{seconds:82,lyrics:"We are, We are, the youth of the nation"},{seconds:87,lyrics:"We are, We are, the youth of the nation"},{seconds:92,lyrics:"Little Suzy, she was only twelve"},{seconds:93,lyrics:"She was given the world"},{seconds:94,lyrics:"With every chance to excel"},{seconds:96,lyrics:"Hang with the boys and hear the stories they tell"},{seconds:98,lyrics:"She might act kind of proud"},{seconds:100,lyrics:"But no respect for herself"},{seconds:101,lyrics:"She finds love in all the wrong places"},{seconds:103,lyrics:"The same situations"},{seconds:104,lyrics:"Just different faces"},{seconds:106,lyrics:"Changed up her pace since her daddy left her"},{seconds:108,lyrics:"Too bad he never told her"},{seconds:110,lyrics:"She deserved much better"},{seconds:111,lyrics:"Johnny boy always played the fool"},{seconds:113,lyrics:"He broke all the rules"},{seconds:114,lyrics:"So you would think he was cool"},{seconds:116,lyrics:"He was never really one of the guys"},{seconds:118,lyrics:"No matter how hard he tried"},{seconds:119,lyrics:"Often thought of suicide"},{seconds:121,lyrics:"It's kind of hard when you ain't got no friends"},{seconds:123,lyrics:"He put his life to an end"},{seconds:124,lyrics:"They might remember him then"},{seconds:126,lyrics:"You cross the line and there's no turning back"},{seconds:128,lyrics:"Told the world how he felt"},{seconds:129,lyrics:"With the sound of a gat"},{seconds:131,lyrics:"We are, We are, the youth of the nation"},{seconds:136,lyrics:"We are, We are, the youth of the nation"},{seconds:141,lyrics:"We are, We are, the youth of the nation"},{seconds:146,lyrics:"We are, We are, the youth of the nation"},{seconds:170,lyrics:"Who's to blame for the lives that tragedies claim"},{seconds:172,lyrics:"No matter what you say"},{seconds:173,lyrics:"It don't take away the pain"},{seconds:175,lyrics:"That I feel inside, I'm tired of all the lies"},{seconds:177,lyrics:"Don't nobody know why"},{seconds:178,lyrics:"It's the blind leading the blind"},{seconds:180,lyrics:"I guess that's the way the story goes"},{seconds:181,lyrics:"Will it ever make sense"},{seconds:183,lyrics:"Somebody's got to know"},{seconds:185,lyrics:"There's got to be more to life than this"},{seconds:186,lyrics:"There's got to be more to everything"},{seconds:188,lyrics:"I thought exists"},{seconds:190,lyrics:"We are, We are, the youth of the nation"},{seconds:195,lyrics:"We are, We are, the youth of the nation"},{seconds:199,lyrics:"We are, We are"},{seconds:201,lyrics:"We are, We are the youth of the nation"},{seconds:205,lyrics:"We are, We are"},{seconds:206,lyrics:"We are, We are the youth of the nation"},{seconds:210,lyrics:"We are, We are"},{seconds:211,lyrics:"We are, We are the youth of the nation"},{seconds:214,lyrics:"We are, We are"},{seconds:215,lyrics:"We are, We are the youth of the nation"},{seconds:219,lyrics:"We are, We are"},{seconds:221,lyrics:"We are, We are the youth of the nation"},{seconds:225,lyrics:"We are, We are"},{seconds:226,lyrics:"We are, We are the youth of the nation"},{seconds:231,lyrics:"We are the youth of the nation"},{seconds:235,lyrics:"We are the youth of the nation"},{seconds:240,lyrics:"We are the youth of the nation"},{seconds:245,lyrics:"We are"}],"The Faceless - Shake The Disease.mp3":[{seconds:47,lyrics:"I'm not going down on my knees"},{seconds:50,lyrics:"Begging you to adore me"},{seconds:56,lyrics:"Can't you see it's misery"},{seconds:59,lyrics:"And torture for me"},{seconds:65,lyrics:"When I'm misunderstood"},{seconds:69,lyrics:"Try as hard as you can I've tried as hard as I could"},{seconds:73,lyrics:"To make you see"},{seconds:77,lyrics:"How important it is for me"},{seconds:82,lyrics:"Here is a plea"},{seconds:84,lyrics:"From my heart to you"},{seconds:86,lyrics:"Nobody knows me"},{seconds:88,lyrics:"As well as you do"},{seconds:90,lyrics:"You know how hard it is for me"},{seconds:93,lyrics:"To shake the disease"},{seconds:95,lyrics:"That takes hold of my tongue"},{seconds:97,lyrics:"In situations like these"},{seconds:105,lyrics:"Understand me"},{seconds:109,lyrics:"Understand me"},{seconds:114,lyrics:"Understand me"},{seconds:118,lyrics:"Understand me"},{seconds:137,lyrics:"Some people have to be"},{seconds:140,lyrics:"Permanently together"},{seconds:147,lyrics:"Lovers devoted to"},{seconds:149,lyrics:"Each other forever"},{seconds:154,lyrics:"Now I've got things to do"},{seconds:159,lyrics:"And I've said before that I know you have too"},{seconds:163,lyrics:"When I'm not there"},{seconds:166,lyrics:"In spirit I'll be there"},{seconds:171,lyrics:"Here is a plea"},{seconds:173,lyrics:"From my heart to you"},{seconds:175,lyrics:"Nobody knows me"},{seconds:177,lyrics:"As well as you do"},{seconds:180,lyrics:"You know how hard it is for me"},{seconds:182,lyrics:"To shake the disease"},{seconds:185,lyrics:"That takes hold of my tongue"},{seconds:187,lyrics:"In situations like these"},{seconds:194,lyrics:"Understand me"},{seconds:199,lyrics:"Understand me"},{seconds:203,lyrics:"Understand me"},{seconds:208,lyrics:"Understand me"},{seconds:235,lyrics:"When I'm misunderstood"},{seconds:239,lyrics:"Try as hard as you can I've tried as hard as I could"},{seconds:243,lyrics:"To make you see"},{seconds:247,lyrics:"How important it is for me"},{seconds:252,lyrics:"Here is a plea"},{seconds:254,lyrics:"From my heart to you"},{seconds:256,lyrics:"Nobody knows me"},{seconds:258,lyrics:"As well as you do"},{seconds:260,lyrics:"You know how hard it is for me"},{seconds:263,lyrics:"To shake the disease"},{seconds:265,lyrics:"That takes hold of my tongue"},{seconds:267,lyrics:"In situations like these"},{seconds:270,lyrics:"Here is a plea"},{seconds:271,lyrics:"From my heart to you"},{seconds:273,lyrics:"Nobody knows me"},{seconds:275,lyrics:"As well as you do"},{seconds:277,lyrics:"You know how hard it is for me"},{seconds:280,lyrics:"To shake the disease"},{seconds:283,lyrics:"That takes hold of my tongue"},{seconds:285,lyrics:"In situations like these"}],"Raunchy - Wasteland Discotheque.mp3":[],"In Flames - Clayman.mp3":[],"Cerebral Bore - The Bald Cadaver.mp3":[{seconds:6,lyrics:"You disgust me"},{seconds:15,lyrics:"The bald cadaver she is mine"},{seconds:18,lyrics:"I will lick this rotting cunt"},{seconds:20,lyrics:"False messiah she is legion"},{seconds:23,lyrics:"Time has come to burn them all"},{seconds:29,lyrics:"Maggots infesting her hole"},{seconds:33,lyrics:"Devour her insides"},{seconds:50,lyrics:"They writhe inside your body"},{seconds:53,lyrics:"With glee they eat your organs raw"},{seconds:60,lyrics:"Bow to me ripping entrails severed torso"},{seconds:63,lyrics:"Feel my creed body dead f**k the head"},{seconds:66,lyrics:"You are here to die before me"},{seconds:69,lyrics:"I will consume you f**k you you are dead"},{seconds:113,lyrics:"You are a Marie curie *****"},{seconds:115,lyrics:"Colour of pee big tits racist"},{seconds:121,lyrics:"F**k the skin dome"},{seconds:125,lyrics:"To continue I must sever inches from you"},{seconds:134,lyrics:"Now you see"},{seconds:138,lyrics:"Death has come for you and not for me"},{seconds:141,lyrics:"She is weak at your peak"},{seconds:152,lyrics:"Trim back the bed sheet show me your balding head"},{seconds:158,lyrics:"In comes junkie mom she gets f**ked up"},{seconds:175,lyrics:"You are the vermin of this earth"},{seconds:178,lyrics:"You can't understand it's your time"},{seconds:180,lyrics:"I decimate your bloody corpse"},{seconds:184,lyrics:"Peeling back your skin I ejaculate on your face"},{seconds:195,lyrics:"Lived here died here now you're gone"}],"Raunchy - To the Lighthouse.mp3":[{seconds:41,lyrics:"You have become my ethereal darkness"},{seconds:47,lyrics:"My black highway and my heart split down the middle"},{seconds:52,lyrics:"Why do we keep doing this to ourselves"},{seconds:57,lyrics:"This never bliss, only sounds of hells bells"},{seconds:65,lyrics:"I want to take you away"},{seconds:68,lyrics:"Make you see the beauty in life again"},{seconds:76,lyrics:"To the lighthouse, she sings in the night"},{seconds:80,lyrics:"As we sail through the bay into a new day"},{seconds:85,lyrics:"And there it leads the way"},{seconds:93,lyrics:"For us phallic and proud"},{seconds:95,lyrics:"With it's light scattered all over"},{seconds:103,lyrics:"All over the crowd"},{seconds:122,lyrics:"Through mountains through water to find"},{seconds:127,lyrics:"What could lift us up to see the bliss on the horizon"},{seconds:133,lyrics:"A symbol of hope, a kicked up fire"},{seconds:138,lyrics:"To find tranquility inside the flames"},{seconds:145,lyrics:"I want to take you away"},{seconds:148,lyrics:"Make you see the beauty in life again"},{seconds:156,lyrics:"To the lighthouse, she sings in the night"},{seconds:160,lyrics:"As we sail through the bay into a new day"},{seconds:166,lyrics:"And there it leads the way"},{seconds:173,lyrics:"For us phallic and proud"},{seconds:175,lyrics:"With it's light scattered all over"},{seconds:184,lyrics:"All over the crowd"},{seconds:197,lyrics:"Uh, baby lets take it further down below"},{seconds:203,lyrics:"This rowboat is not for the two of us"},{seconds:208,lyrics:"Were not running on empty heart"},{seconds:218,lyrics:"You're my black sunrise"},{seconds:220,lyrics:"And my heart split down the middle"},{seconds:223,lyrics:"Baby, why do we keep doing this to ourselves"},{seconds:229,lyrics:"You're the sound of hells bells"},{seconds:230,lyrics:"But that's not a bad thing, right"},{seconds:234,lyrics:"Let's take it to the next step, let's do it all night"},{seconds:246,lyrics:"Were the young believers"},{seconds:251,lyrics:"Were nation builders"},{seconds:254,lyrics:"F**king for might"},{seconds:270,lyrics:"I want to take you away"},{seconds:272,lyrics:"Make you see the beauty in life again"},{seconds:280,lyrics:"To the lighthouse, she sings in the night"},{seconds:285,lyrics:"As we sail through the bay into a new day"},{seconds:290,lyrics:"And there it leads the way"},{seconds:298,lyrics:"For us phallic and proud"},{seconds:300,lyrics:"With it's light scattered all over"},{seconds:308,lyrics:"All over the crowd"}],"In Flames - Reflect the Storm.mp3":[{seconds:10,lyrics:"Shot for shot"},{seconds:12,lyrics:"Many bullets penetrate me"},{seconds:14,lyrics:"Embrace me"},{seconds:15,lyrics:"Tell me stories of gold and gods"},{seconds:19,lyrics:"The precision in your voice"},{seconds:21,lyrics:"Pierce the walls that I've built"},{seconds:23,lyrics:"Your eyes reach deep in me"},{seconds:38,lyrics:"Take a chance"},{seconds:40,lyrics:"Better come much bigger than this"},{seconds:42,lyrics:"One dark star"},{seconds:44,lyrics:"Spend another day with me"},{seconds:46,lyrics:"A dead surface that doesn't reflect"},{seconds:48,lyrics:"The storm underneath"},{seconds:51,lyrics:"I'll take the chance"},{seconds:53,lyrics:"Bring me the calm"},{seconds:55,lyrics:"And it leaves nothing"},{seconds:57,lyrics:"Expose the dark side"},{seconds:61,lyrics:"Awakened and emotional"},{seconds:66,lyrics:"Expose the dark side"},{seconds:71,lyrics:"Impossible to tame"},{seconds:77,lyrics:"Away from the light of the sun"},{seconds:82,lyrics:"Away I find what is real in me"},{seconds:92,lyrics:"Throw yourself into the eye of chaos"},{seconds:96,lyrics:"Infiltrate me"},{seconds:98,lyrics:"Sneak out before I awake"},{seconds:101,lyrics:"Take out the trash and burn it"},{seconds:103,lyrics:"Try to find a beautiful place to lay"},{seconds:107,lyrics:"These fragile bones of mine"},{seconds:110,lyrics:"Away from the light of the sun"},{seconds:119,lyrics:"Away I find what is real, "},{seconds:128,lyrics:"Away from the light of the sun"},{seconds:137,lyrics:"Away I find what is real in me"},{seconds:174,lyrics:"And it leaves nothing"},{seconds:177,lyrics:"Expose the dark side"},{seconds:180,lyrics:"Awakened and emotional"},{seconds:185,lyrics:"Expose the dark side"},{seconds:190,lyrics:"Impossible to tame"},{seconds:196,lyrics:"Away from the light of the sun"},{seconds:201,lyrics:"Away I find what is real, "},{seconds:212,lyrics:"Away from the light of the sun"},{seconds:219,lyrics:"Away I find what is real, "},{seconds:227,lyrics:"Away from the light of the sun"},{seconds:237,lyrics:"Away I find what is real in me"}],"Psygnosis - MehMeh.mp3":[],"The Five Stars - Atom Bomb Baby.mp3":[{seconds:0,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara bomb"},{seconds:6,lyrics:"Got a doll baby I love her so"},{seconds:9,lyrics:"Nothing else like her anywhere you go"},{seconds:12,lyrics:"Man she's anything but calm"},{seconds:15,lyrics:"A regular pint-sized atom bomb"},{seconds:18,lyrics:"Atom bomb baby little atom bomb"},{seconds:20,lyrics:"I want her in my wigwam"},{seconds:24,lyrics:"She's just the way I want her to be"},{seconds:26,lyrics:"A million times hotter than TNT"},{seconds:29,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara"},{seconds:35,lyrics:"Atom bomb baby loaded with power"},{seconds:38,lyrics:"Radioactive as a TV tower"},{seconds:41,lyrics:"A nuclear fission in her soul"},{seconds:44,lyrics:"Loves with electronic control"},{seconds:47,lyrics:"Atom bomb baby little atom bomb"},{seconds:50,lyrics:"I want her in my wigwam"},{seconds:53,lyrics:"She's just the way I want her to be"},{seconds:56,lyrics:"A million times hotter than TNT"},{seconds:59,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara"},{seconds:65,lyrics:"Atom bomb baby boy she can start"},{seconds:68,lyrics:"One of those chain reactions in my heart"},{seconds:71,lyrics:"A big explosion big and loud"},{seconds:74,lyrics:"Mushrooms me right up on a cloud"},{seconds:77,lyrics:"Atom bomb baby little atom bomb"},{seconds:80,lyrics:"I want her in my wigwam"},{seconds:82,lyrics:"She's just the way I want her to be"},{seconds:85,lyrics:"A million times hotter than TNT"},{seconds:88,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara"},{seconds:94,lyrics:"Atom bomb ladysh sweet as a plum"},{seconds:97,lyrics:"Carries more whallop than uranium"},{seconds:100,lyrics:"When she kisses there's no hitch"},{seconds:103,lyrics:"Zero power she turns on a switch"},{seconds:107,lyrics:"Atom bomb baby little atom bomb"},{seconds:109,lyrics:"I want her in my wigwam"},{seconds:112,lyrics:"She's just the way I want her to be"},{seconds:115,lyrics:"A million times hotter than TNT"},{seconds:118,lyrics:"Atom bomb baby little atom bomb"},{seconds:121,lyrics:"I want her in my wigwam"},{seconds:124,lyrics:"She's just the way I want her to be"},{seconds:127,lyrics:"A million times hotter than TNT"},{seconds:131,lyrics:"Atom bomb baby little atom bomb"}],"The HAARP Machine - Esoteric Agenda.mp3":[{seconds:30,lyrics:"There were no weapons of mass destruction"},{seconds:34,lyrics:"Mobile biological"},{seconds:37,lyrics:"Weapons labs the agenda was to remove Saddam Hussein"},{seconds:42,lyrics:"To reap the oil and establish a base"},{seconds:47,lyrics:"The Bush administration"},{seconds:49,lyrics:"Made a series of claims prior the Iraqi war abuse"},{seconds:54,lyrics:"And misuse of intelligence"},{seconds:61,lyrics:"There was no collusive"},{seconds:65,lyrics:"Relationship with"},{seconds:67,lyrics:"Al qaeda esoteric agenda"},{seconds:75,lyrics:"Esoteric agenda"},{seconds:106,lyrics:"Open your eyes and see this"},{seconds:111,lyrics:"World is not what it seems free your soul from"},{seconds:118,lyrics:"The ties that bind us all time is upon us"},{seconds:127,lyrics:"To wake up"},{seconds:142,lyrics:"The wars of the world are diversions"},{seconds:148,lyrics:"For the desires of the powers"},{seconds:154,lyrics:"The wars of the world are diversions"},{seconds:160,lyrics:"For the desires of the powers"},{seconds:165,lyrics:"They declare war as"},{seconds:167,lyrics:"The last option even though they always actively block every"},{seconds:172,lyrics:"Other viable policy in the same way the powers make"},{seconds:179,lyrics:"War the only option"},{seconds:183,lyrics:"Actively other viable policy in the same way the powers make"},{seconds:191,lyrics:"War the only option"}],"What Mad Universe - the world of leviathan.mp3":[],"Rise Of The Northstar - The New Path.mp3":[{seconds:34,lyrics:"His name is Raoh demonic Ken'oh"},{seconds:36,lyrics:"Fist of the violent star born in hell yo"},{seconds:38,lyrics:"Fallen heir who should've lost his fist"},{seconds:40,lyrics:"Rejected by his love and treated like a best"},{seconds:43,lyrics:"Evil grew up within him like a new option"},{seconds:45,lyrics:"He took his master's life without asking questions"},{seconds:48,lyrics:"Suffered the nuclear fire"},{seconds:50,lyrics:"He conquers a chaotic world takes the power"},{seconds:62,lyrics:"Rules on this sick world fallen brotherhood"},{seconds:65,lyrics:"Here comes the new lord fist against sword"},{seconds:67,lyrics:"Rules on this sick world fallen brotherhood"},{seconds:69,lyrics:"Here comes the new lord fist against sword"},{seconds:73,lyrics:"Nothing is written in advance"},{seconds:76,lyrics:"Everything changes smash your chance"},{seconds:78,lyrics:"One life one love several fates"},{seconds:80,lyrics:"Open a new path create the gate"},{seconds:83,lyrics:"Nothing is written in advance"},{seconds:85,lyrics:"Everything changes smash your chance"},{seconds:87,lyrics:"One life one love several fates"},{seconds:90,lyrics:"Open a new path create the gate"},{seconds:92,lyrics:"Genocide his life starts badly"},{seconds:95,lyrics:"His weakness saves his life baddack the movie"},{seconds:97,lyrics:"Arrived on earth broke his motherf**king head"},{seconds:99,lyrics:"Booyaka booyaka he could've been brain dead"},{seconds:102,lyrics:"He faced elites never gave up"},{seconds:104,lyrics:"This life could've been a tragedy if he didn't confront"},{seconds:107,lyrics:"His fear his faith his destiny"},{seconds:109,lyrics:"Never forget the sin goku story"},{seconds:112,lyrics:"Nothing is written in advance"},{seconds:114,lyrics:"Everything changes smash your chance"},{seconds:116,lyrics:"One life one love several fates"},{seconds:119,lyrics:"Open a new path create the gate"},{seconds:121,lyrics:"Nothing is written in advance"},{seconds:123,lyrics:"Everything changes smash your chance"},{seconds:126,lyrics:"One life one love several fates"},{seconds:128,lyrics:"Open a new path create the gate"},{seconds:140,lyrics:"One two three four five super yankees"},{seconds:143,lyrics:"Straight from the past straight from the nineties"},{seconds:145,lyrics:"Without any help or any support"},{seconds:147,lyrics:"Against the main vibe and ready to start"},{seconds:150,lyrics:"Get up stand up come on throw your hands up"},{seconds:152,lyrics:"They wanna force the fate and represent some codes"},{seconds:154,lyrics:"Stay true stay straight never forget create your own legacy"},{seconds:158,lyrics:"Never lose the target"},{seconds:198,lyrics:"Nothing is written in advance"},{seconds:200,lyrics:"Everything changes smash your chance"},{seconds:203,lyrics:"One life one love several fates"},{seconds:205,lyrics:"Open a new path create the gate"},{seconds:207,lyrics:"Nothing is written in advance"},{seconds:210,lyrics:"Everything changes smash your chance"},{seconds:212,lyrics:"One life one love several fates"},{seconds:215,lyrics:"Open a new path create the gate"}],"Machine Head - Halo.mp3":[{seconds:81,lyrics:"This is a call to arms"},{seconds:85,lyrics:"Will you stand beside me"},{seconds:94,lyrics:"This is our time to fight"},{seconds:98,lyrics:"No more compromising"},{seconds:101,lyrics:"And this blackened heart will sing"},{seconds:107,lyrics:"For sad solidarity"},{seconds:113,lyrics:"Halo over our demise"},{seconds:118,lyrics:"Following a god so blind"},{seconds:125,lyrics:"Shallow in their sickening"},{seconds:131,lyrics:"Swallow not the sh*t they feed"},{seconds:152,lyrics:"This is a right to life"},{seconds:156,lyrics:"Not the religious right's act"},{seconds:166,lyrics:"This is abortion's knife"},{seconds:169,lyrics:"Aiming at the womb of"},{seconds:172,lyrics:"The christian conspiracy"},{seconds:178,lyrics:"So open thine eyes and see the"},{seconds:187,lyrics:"Halo over our demise"},{seconds:193,lyrics:"Following a god so blind"},{seconds:199,lyrics:"Shallow in their sickening"},{seconds:205,lyrics:"Swallow not the sh*t they feed"},{seconds:253,lyrics:"Our time will come our time will come"},{seconds:275,lyrics:"Our time is now our time is now"},{seconds:408,lyrics:"And I won't pray for you"},{seconds:415,lyrics:"And I won't pray for you"},{seconds:422,lyrics:"And I won't pray for you"},{seconds:437,lyrics:"Halo"},{seconds:443,lyrics:"Follow"},{seconds:450,lyrics:"Shallow"},{seconds:456,lyrics:"Swallow"},{seconds:463,lyrics:"Halo over our demise"},{seconds:469,lyrics:"Following a god so blind"},{seconds:475,lyrics:"Shallow in their sickening"},{seconds:481,lyrics:"Swallow not the sh*t they feed"},{seconds:493,lyrics:"Sh*t they feed"},{seconds:498,lyrics:"Your words will never hold us down"},{seconds:501,lyrics:"Prayers won't be spared on you"},{seconds:504,lyrics:"Satisfaction denied"},{seconds:507,lyrics:"'Till you're dead and gone"},{seconds:513,lyrics:"Gone"},{seconds:515,lyrics:"Dead and gone"},{seconds:519,lyrics:"You're gone"},{seconds:522,lyrics:"You're gone"}],"zYnthetic - SSplug.mp3":[]},b0=J2({name:"MainComponent",components:{TrackList:hh,PageTabs:Hh,MainInfoBand:Sh,VolumeControl:Bh,ProgressControl:$h,MainControl:Jh,OtherControl:lm,SongText:vm},setup(){const{bestParties:c,nextTrack:e,previousTrack:a,pathToCurrentFile:s,currentTrackIndex:n,changeTab:r,selectTrack:i,tabSelected:o,currentTracks:t,currentSong:f,currentTracksList:h,favoriteSongs:u,handleAddFavoriteSongBtn:d}=L0();R3(async()=>{b();const $=[["play",()=>{t2(),navigator.mediaSession.playbackState="playing"}],["pause",()=>{t2(),navigator.mediaSession.playbackState="paused"}],["nexttrack",()=>{e()}],["previoustrack",()=>{a()}],["seekto",l=>{console.log(l),H.value.currentTime=l.seekTime}]];for(const[l,m]of $)try{navigator.mediaSession.setActionHandler(l,m)}catch{console.log(`The media session action "${l}" is not supported yet.`)}});const V=f2(!1);function b(){const $=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches||localStorage.getItem("dark-color-scheme")&&JSON.parse(localStorage.getItem("dark-color-scheme"))?"dark":"light";V.value=$==="dark",M()}Z1(V,()=>{M()});function M(){document.documentElement.style.setProperty("color-scheme",V.value?"dark":"light"),localStorage.setItem("dark-color-scheme",JSON.stringify(V.value))}function T(){V.value=!V.value}const H=f2(null),y=f2(0),F=f2(.8);function N($){X($),w2.value&&m2()}function E(){k1.value?H.value.currentTime=0:e()}function e2($){const l=$.target;H.value.currentTime=Number(l.value)/100*(H.value.duration||0)}function Z($){H.value.currentTime=$,w2.value=!0,m2()}function W($){H.value.currentTime=$*(H.value.duration||0)}function k($){y.value=$.target.currentTime,navigator.mediaSession.setPositionState({duration:A.value,playbackRate:1,position:y.value})}function O($){F.value=$.target.volume}function o2($){H.value.volume=$}const A=f2(0);function X($){const l=$.target;A.value=l.duration,navigator.mediaSession.setPositionState({duration:A.value,playbackRate:1,position:0})}function m2(){try{H.value.play().then($=>$)}catch($){console.log("error",$)}}const w2=f2(!1);function t2(){w2.value=!w2.value,w2.value?m2():H.value.pause()}const c2=f2(!1);async function Q($=!0){c2.value=!0;let l=20;const m=.01;async function v(z){return await new Promise(p=>{const C=setInterval(()=>{if(l>=0){const x=z?(F.value-m).toFixed(2):(F.value+m).toFixed(2);console.log(`${z?"-":"+"}`,x),l--,H.value.volume=Number(x)}else return clearInterval(C),c2.value=!1,p("done")},100)})}await v($)}async function Z2($){for(let l=0;l<c.value.length;l++){const m=c.value[l];if($<=m.start&&!c2.value){console.log("start"),H.value.volume=.6,H.value.currentTime=m.start,await Q(!1);return}else if($>=m.start&&$<=m.end){console.log("continue"),$>=m.end-3&&$<=m.end-2&&!c2.value&&(console.log("end"),H.value.volume=.8,await Q(!0));return}}console.log("nextTrack"),E()}z0(async()=>{o.value===4&&w2.value&&n&&await Z2(y.value)});const b1=f2("500px");T4(()=>{const $=document.querySelector(".main_control_ref"),l=document.querySelector(".container"),m=$.getBoundingClientRect(),v=l==null?void 0:l.getBoundingClientRect();b1.value=`${Math.abs(m.top-v.top)+25}px`});function c1(){H.value.currentTime<=20||o.value===4?a():H.value.currentTime=0}const y2=f2(!1);function O4(){y2.value=!y2.value}const $1=f2(!1);function f6(){$1.value=!$1.value}function R2(){y2.value=!1,$1.value=!1}function U1($){i($),w2.value?m2():t2()}const k1=f2(!1);function f1(){k1.value=!k1.value}const l4=j(()=>{var $;return(($=b5[f.value.songName])==null?void 0:$.length)&&b5[f.value.songName]||Hm[f.value.songName]||""});return{audioPlayer:H,isPlaying:w2,currentTime:y,volume:F,onVolumeUpdate:O,totalTime:A,pathToCurrentFile:s,currentTracks:t,currentTrackIndex:n,currentTracksList:h,currentSong:f,handlerCanPlay:N,handlerEnded:E,handlerTimeChangeInput:e2,handlerTimeChangeLine:W,handlerTimeChangeBySongText:Z,onTimeUpdate:k,setVolume:o2,togglePlayPause:t2,nextTrack:e,previousTrackHandler:c1,handlerShowListBtn:O4,handlerSelectTrack:U1,tabSelected:o,changeTab:r,isShowTrackList:y2,repeatModeChange:f1,isRepeatMode:k1,bestParties:c,isDarkTheme:V,handlerChangeThemeBtn:T,handlerShowSongTextBtn:f6,handleAddFavoriteSongBtn:d,isShowSongText:$1,closeAllBars:R2,currentSongText:l4,distanceBetweenComponents:b1,favoriteSongs:u}}}),k5=()=>{Z7(c=>({"435822f6":c.distanceBetweenComponents}))},x5=b0.setup;b0.setup=x5?(c,e)=>(k5(),x5(c,e)):k5;const zm={class:"container"},pm=["src"];function Vm(c,e,a,s,n,r){const i=m1("TrackList"),o=m1("SongText"),t=m1("PageTabs"),f=m1("MainInfoBand"),h=m1("VolumeControl"),u=m1("ProgressControl"),d=m1("MainControl"),V=m1("OtherControl");return v2(),V2("main",{class:P2([c.isDarkTheme?"dark":"light"]),onClick:e[4]||(e[4]=M2((...b)=>c.closeAllBars&&c.closeAllBars(...b),["stop"]))},[q("div",zm,[l2(V3,{name:"slide-track-list"},{default:T6(()=>[H3(l2(i,{"current-track-index":c.currentTrackIndex,"current-tracks":c.currentTracksList,class:"top_bar",onSelectTrackFromList:c.handlerSelectTrack},null,8,["current-track-index","current-tracks","onSelectTrackFromList"]),[[g3,c.isShowTrackList]])]),_:1}),l2(V3,{name:"slide-song-text"},{default:T6(()=>[H3(l2(o,{"current-time":c.currentTime,"song-text":c.currentSongText,class:"top_bar",onTimeChange:c.handlerTimeChangeBySongText},null,8,["current-time","song-text","onTimeChange"]),[[g3,c.isShowSongText]])]),_:1}),l2(t,{"tab-selected":c.tabSelected,onChangeTab:c.changeTab},null,8,["tab-selected","onChangeTab"]),l2(f,{"song-name":c.currentSong.songName,"has-text":!!c.currentSongText.length,"is-favorite-song":c.favoriteSongs.includes(c.currentSong.songName),onShowTextSong:c.handlerShowSongTextBtn,onAddFavorite:c.handleAddFavoriteSongBtn},null,8,["song-name","has-text","is-favorite-song","onShowTextSong","onAddFavorite"]),l2(h,{ref:"main_control_ref",class:"main_control_ref",volume:c.volume,onVolumeChange:c.setVolume},null,8,["volume","onVolumeChange"]),l2(u,{"best-parties":c.bestParties,"current-time":c.currentTime,"total-time":c.totalTime,onTimeChange:c.handlerTimeChangeInput,onTimeChangeLine:c.handlerTimeChangeLine},null,8,["best-parties","current-time","total-time","onTimeChange","onTimeChangeLine"]),l2(d,{"is-playing":c.isPlaying,onPrevious:c.previousTrackHandler,onNext:c.nextTrack,onPlayPause:c.togglePlayPause},null,8,["is-playing","onPrevious","onNext","onPlayPause"]),l2(V,{"current-numb-song":c.currentTrackIndex+1,"is-show-track-list":c.isShowTrackList,"is-repeat-mode":c.isRepeatMode,"is-dark-theme":c.isDarkTheme,onRepeatModeClick:c.repeatModeChange,onShowListClick:c.handlerShowListBtn,onChangeTheme:c.handlerChangeThemeBtn},null,8,["current-numb-song","is-show-track-list","is-repeat-mode","is-dark-theme","onRepeatModeClick","onShowListClick","onChangeTheme"]),q("audio",{ref:"audioPlayer",src:c.pathToCurrentFile,preload:"metadata",onVolumechange:e[0]||(e[0]=(...b)=>c.onVolumeUpdate&&c.onVolumeUpdate(...b)),onTimeupdate:e[1]||(e[1]=(...b)=>c.onTimeUpdate&&c.onTimeUpdate(...b)),onCanplay:e[2]||(e[2]=(...b)=>c.handlerCanPlay&&c.handlerCanPlay(...b)),onEnded:e[3]||(e[3]=(...b)=>c.handlerEnded&&c.handlerEnded(...b))},null,40,pm)])],2)}const gm=t1(b0,[["render",Vm]]);function N5(c,e){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);e&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable})),a.push.apply(a,s)}return a}function S(c){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?N5(Object(a),!0).forEach(function(s){z2(c,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):N5(Object(a)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(a,s))})}return c}function M3(c){"@babel/helpers - typeof";return M3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M3(c)}function Mm(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function S5(c,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function ym(c,e,a){return e&&S5(c.prototype,e),a&&S5(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function z2(c,e,a){return e in c?Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[e]=a,c}function k0(c,e){return Lm(c)||bm(c,e)||sc(c,e)||xm()}function I4(c){return Cm(c)||wm(c)||sc(c)||km()}function Cm(c){if(Array.isArray(c))return U6(c)}function Lm(c){if(Array.isArray(c))return c}function wm(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function bm(c,e){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var s=[],n=!0,r=!1,i,o;try{for(a=a.call(c);!(n=(i=a.next()).done)&&(s.push(i.value),!(e&&s.length===e));n=!0);}catch(t){r=!0,o=t}finally{try{!n&&a.return!=null&&a.return()}finally{if(r)throw o}}return s}}function sc(c,e){if(c){if(typeof c=="string")return U6(c,e);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return U6(c,e)}}function U6(c,e){(e==null||e>c.length)&&(e=c.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=c[a];return s}function km(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var A5=function(){},x0={},nc={},rc=null,ic={mark:A5,measure:A5};try{typeof window<"u"&&(x0=window),typeof document<"u"&&(nc=document),typeof MutationObserver<"u"&&(rc=MutationObserver),typeof performance<"u"&&(ic=performance)}catch{}var Nm=x0.navigator||{},T5=Nm.userAgent,I5=T5===void 0?"":T5,C1=x0,r2=nc,P5=rc,Q4=ic;C1.document;var l1=!!r2.documentElement&&!!r2.head&&typeof r2.addEventListener=="function"&&typeof r2.createElement=="function",oc=~I5.indexOf("MSIE")||~I5.indexOf("Trident/"),J4,Z4,c3,e3,a3,n1="___FONT_AWESOME___",q6=16,tc="fa",lc="svg-inline--fa",O1="data-fa-i2svg",G6="data-fa-pseudo-element",Sm="data-fa-pseudo-element-pending",N0="data-prefix",S0="data-icon",F5="fontawesome-i2svg",Am="async",Tm=["HTML","HEAD","STYLE","SCRIPT"],fc=function(){try{return!0}catch{return!1}}(),n2="classic",h2="sharp",A0=[n2,h2];function P4(c){return new Proxy(c,{get:function(a,s){return s in a?a[s]:a[n2]}})}var k4=P4((J4={},z2(J4,n2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),z2(J4,h2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),J4)),x4=P4((Z4={},z2(Z4,n2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),z2(Z4,h2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Z4)),N4=P4((c3={},z2(c3,n2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),z2(c3,h2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),c3)),Im=P4((e3={},z2(e3,n2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),z2(e3,h2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),e3)),Pm=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,hc="fa-layers-text",Fm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Bm=P4((a3={},z2(a3,n2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),z2(a3,h2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),a3)),mc=[1,2,3,4,5,6,7,8,9,10],Rm=mc.concat([11,12,13,14,15,16,17,18,19,20]),Dm=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},S4=new Set;Object.keys(x4[n2]).map(S4.add.bind(S4));Object.keys(x4[h2]).map(S4.add.bind(S4));var Wm=[].concat(A0,I4(S4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B1.GROUP,B1.SWAP_OPACITY,B1.PRIMARY,B1.SECONDARY]).concat(mc.map(function(c){return"".concat(c,"x")})).concat(Rm.map(function(c){return"w-".concat(c)})),V4=C1.FontAwesomeConfig||{};function Em(c){var e=r2.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function Om(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(r2&&typeof r2.querySelector=="function"){var _m=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_m.forEach(function(c){var e=k0(c,2),a=e[0],s=e[1],n=Om(Em(a));n!=null&&(V4[s]=n)})}var uc={styleDefault:"solid",familyDefault:"classic",cssPrefix:tc,replacementClass:lc,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V4.familyPrefix&&(V4.cssPrefix=V4.familyPrefix);var s4=S(S({},uc),V4);s4.autoReplaceSvg||(s4.observeMutations=!1);var P={};Object.keys(uc).forEach(function(c){Object.defineProperty(P,c,{enumerable:!0,set:function(a){s4[c]=a,g4.forEach(function(s){return s(P)})},get:function(){return s4[c]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){s4.cssPrefix=e,g4.forEach(function(a){return a(P)})},get:function(){return s4.cssPrefix}});C1.FontAwesomeConfig=P;var g4=[];function $m(c){return g4.push(c),function(){g4.splice(g4.indexOf(c),1)}}var H1=q6,K2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Um(c){if(!(!c||!l1)){var e=r2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var a=r2.head.childNodes,s=null,n=a.length-1;n>-1;n--){var r=a[n],i=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(s=r)}return r2.head.insertBefore(e,s),c}}var qm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function A4(){for(var c=12,e="";c-- >0;)e+=qm[Math.random()*62|0];return e}function t4(c){for(var e=[],a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function T0(c){return c.classList?t4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function dc(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Gm(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(dc(c[a]),'" ')},"").trim()}function $3(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(c[a].trim(),";")},"")}function I0(c){return c.size!==K2.size||c.x!==K2.x||c.y!==K2.y||c.rotate!==K2.rotate||c.flipX||c.flipY}function jm(c){var e=c.transform,a=c.containerWidth,s=c.iconWidth,n={transform:"translate(".concat(a/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),t={transform:"".concat(r," ").concat(i," ").concat(o)},f={transform:"translate(".concat(s/2*-1," -256)")};return{outer:n,inner:t,path:f}}function Ym(c){var e=c.transform,a=c.width,s=a===void 0?q6:a,n=c.height,r=n===void 0?q6:n,i=c.startCentered,o=i===void 0?!1:i,t="";return o&&oc?t+="translate(".concat(e.x/H1-s/2,"em, ").concat(e.y/H1-r/2,"em) "):o?t+="translate(calc(-50% + ".concat(e.x/H1,"em), calc(-50% + ").concat(e.y/H1,"em)) "):t+="translate(".concat(e.x/H1,"em, ").concat(e.y/H1,"em) "),t+="scale(".concat(e.size/H1*(e.flipX?-1:1),", ").concat(e.size/H1*(e.flipY?-1:1),") "),t+="rotate(".concat(e.rotate,"deg) "),t}var Km=`:root, :host {
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
}`;function vc(){var c=tc,e=lc,a=P.cssPrefix,s=P.replacementClass,n=Km;if(a!==c||s!==e){var r=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");n=n.replace(r,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(o,".".concat(s))}return n}var B5=!1;function M6(){P.autoAddCss&&!B5&&(Um(vc()),B5=!0)}var Xm={mixout:function(){return{dom:{css:vc,insertCss:M6}}},hooks:function(){return{beforeDOMElementCreation:function(){M6()},beforeI2svg:function(){M6()}}}},r1=C1||{};r1[n1]||(r1[n1]={});r1[n1].styles||(r1[n1].styles={});r1[n1].hooks||(r1[n1].hooks={});r1[n1].shims||(r1[n1].shims=[]);var _2=r1[n1],Hc=[],Qm=function c(){r2.removeEventListener("DOMContentLoaded",c),y3=1,Hc.map(function(e){return e()})},y3=!1;l1&&(y3=(r2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(r2.readyState),y3||r2.addEventListener("DOMContentLoaded",Qm));function Jm(c){l1&&(y3?setTimeout(c,0):Hc.push(c))}function F4(c){var e=c.tag,a=c.attributes,s=a===void 0?{}:a,n=c.children,r=n===void 0?[]:n;return typeof c=="string"?dc(c):"<".concat(e," ").concat(Gm(s),">").concat(r.map(F4).join(""),"</").concat(e,">")}function R5(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var Zm=function(e,a){return function(s,n,r,i){return e.call(a,s,n,r,i)}},y6=function(e,a,s,n){var r=Object.keys(e),i=r.length,o=n!==void 0?Zm(a,n):a,t,f,h;for(s===void 0?(t=1,h=e[r[0]]):(t=0,h=s);t<i;t++)f=r[t],h=o(h,e[f],f,e);return h};function cu(c){for(var e=[],a=0,s=c.length;a<s;){var n=c.charCodeAt(a++);if(n>=55296&&n<=56319&&a<s){var r=c.charCodeAt(a++);(r&64512)==56320?e.push(((n&1023)<<10)+(r&1023)+65536):(e.push(n),a--)}else e.push(n)}return e}function j6(c){var e=cu(c);return e.length===1?e[0].toString(16):null}function eu(c,e){var a=c.length,s=c.charCodeAt(e),n;return s>=55296&&s<=56319&&a>e+1&&(n=c.charCodeAt(e+1),n>=56320&&n<=57343)?(s-55296)*1024+n-56320+65536:s}function D5(c){return Object.keys(c).reduce(function(e,a){var s=c[a],n=!!s.icon;return n?e[s.iconName]=s.icon:e[a]=s,e},{})}function Y6(c,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=a.skipHooks,n=s===void 0?!1:s,r=D5(e);typeof _2.hooks.addPack=="function"&&!n?_2.hooks.addPack(c,D5(e)):_2.styles[c]=S(S({},_2.styles[c]||{}),r),c==="fas"&&Y6("fa",e)}var s3,n3,r3,j1=_2.styles,au=_2.shims,su=(s3={},z2(s3,n2,Object.values(N4[n2])),z2(s3,h2,Object.values(N4[h2])),s3),P0=null,zc={},pc={},Vc={},gc={},Mc={},nu=(n3={},z2(n3,n2,Object.keys(k4[n2])),z2(n3,h2,Object.keys(k4[h2])),n3);function ru(c){return~Wm.indexOf(c)}function iu(c,e){var a=e.split("-"),s=a[0],n=a.slice(1).join("-");return s===c&&n!==""&&!ru(n)?n:null}var yc=function(){var e=function(r){return y6(j1,function(i,o,t){return i[t]=y6(o,r,{}),i},{})};zc=e(function(n,r,i){if(r[3]&&(n[r[3]]=i),r[2]){var o=r[2].filter(function(t){return typeof t=="number"});o.forEach(function(t){n[t.toString(16)]=i})}return n}),pc=e(function(n,r,i){if(n[i]=i,r[2]){var o=r[2].filter(function(t){return typeof t=="string"});o.forEach(function(t){n[t]=i})}return n}),Mc=e(function(n,r,i){var o=r[2];return n[i]=i,o.forEach(function(t){n[t]=i}),n});var a="far"in j1||P.autoFetchSvg,s=y6(au,function(n,r){var i=r[0],o=r[1],t=r[2];return o==="far"&&!a&&(o="fas"),typeof i=="string"&&(n.names[i]={prefix:o,iconName:t}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:o,iconName:t}),n},{names:{},unicodes:{}});Vc=s.names,gc=s.unicodes,P0=U3(P.styleDefault,{family:P.familyDefault})};$m(function(c){P0=U3(c.styleDefault,{family:P.familyDefault})});yc();function F0(c,e){return(zc[c]||{})[e]}function ou(c,e){return(pc[c]||{})[e]}function R1(c,e){return(Mc[c]||{})[e]}function Cc(c){return Vc[c]||{prefix:null,iconName:null}}function tu(c){var e=gc[c],a=F0("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function L1(){return P0}var B0=function(){return{prefix:null,iconName:null,rest:[]}};function U3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,s=a===void 0?n2:a,n=k4[s][c],r=x4[s][c]||x4[s][n],i=c in _2.styles?c:null;return r||i||null}var W5=(r3={},z2(r3,n2,Object.keys(N4[n2])),z2(r3,h2,Object.keys(N4[h2])),r3);function q3(c){var e,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.skipLookups,n=s===void 0?!1:s,r=(e={},z2(e,n2,"".concat(P.cssPrefix,"-").concat(n2)),z2(e,h2,"".concat(P.cssPrefix,"-").concat(h2)),e),i=null,o=n2;(c.includes(r[n2])||c.some(function(f){return W5[n2].includes(f)}))&&(o=n2),(c.includes(r[h2])||c.some(function(f){return W5[h2].includes(f)}))&&(o=h2);var t=c.reduce(function(f,h){var u=iu(P.cssPrefix,h);if(j1[h]?(h=su[o].includes(h)?Im[o][h]:h,i=h,f.prefix=h):nu[o].indexOf(h)>-1?(i=h,f.prefix=U3(h,{family:o})):u?f.iconName=u:h!==P.replacementClass&&h!==r[n2]&&h!==r[h2]&&f.rest.push(h),!n&&f.prefix&&f.iconName){var d=i==="fa"?Cc(f.iconName):{},V=R1(f.prefix,f.iconName);d.prefix&&(i=null),f.iconName=d.iconName||V||f.iconName,f.prefix=d.prefix||f.prefix,f.prefix==="far"&&!j1.far&&j1.fas&&!P.autoFetchSvg&&(f.prefix="fas")}return f},B0());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&o===h2&&(j1.fass||P.autoFetchSvg)&&(t.prefix="fass",t.iconName=R1(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||i==="fa")&&(t.prefix=L1()||"fas"),t}var lu=function(){function c(){Mm(this,c),this.definitions={}}return ym(c,[{key:"add",value:function(){for(var a=this,s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){a.definitions[o]=S(S({},a.definitions[o]||{}),i[o]),Y6(o,i[o]);var t=N4[n2][o];t&&Y6(t,i[o]),yc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,s){var n=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(n).map(function(r){var i=n[r],o=i.prefix,t=i.iconName,f=i.icon,h=f[2];a[o]||(a[o]={}),h.length>0&&h.forEach(function(u){typeof u=="string"&&(a[o][u]=f)}),a[o][t]=f}),a}}]),c}(),E5=[],Y1={},c4={},fu=Object.keys(c4);function hu(c,e){var a=e.mixoutsTo;return E5=c,Y1={},Object.keys(c4).forEach(function(s){fu.indexOf(s)===-1&&delete c4[s]}),E5.forEach(function(s){var n=s.mixout?s.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(a[i]=n[i]),M3(n[i])==="object"&&Object.keys(n[i]).forEach(function(o){a[i]||(a[i]={}),a[i][o]=n[i][o]})}),s.hooks){var r=s.hooks();Object.keys(r).forEach(function(i){Y1[i]||(Y1[i]=[]),Y1[i].push(r[i])})}s.provides&&s.provides(c4)}),a}function K6(c,e){for(var a=arguments.length,s=new Array(a>2?a-2:0),n=2;n<a;n++)s[n-2]=arguments[n];var r=Y1[c]||[];return r.forEach(function(i){e=i.apply(null,[e].concat(s))}),e}function _1(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),s=1;s<e;s++)a[s-1]=arguments[s];var n=Y1[c]||[];n.forEach(function(r){r.apply(null,a)})}function i1(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return c4[c]?c4[c].apply(null,e):void 0}function X6(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,a=c.prefix||L1();if(e)return e=R1(a,e)||e,R5(Lc.definitions,a,e)||R5(_2.styles,a,e)}var Lc=new lu,mu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,_1("noAuto")},uu={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return l1?(_1("beforeI2svg",e),i1("pseudoElements2svg",e),i1("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Jm(function(){vu({autoReplaceSvgRoot:a}),_1("watch",e)})}},du={icon:function(e){if(e===null)return null;if(M3(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:R1(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],s=U3(e[0]);return{prefix:s,iconName:R1(s,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match(Pm))){var n=q3(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||L1(),iconName:R1(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){var r=L1();return{prefix:r,iconName:R1(r,e)||e}}}},T2={noAuto:mu,config:P,dom:uu,parse:du,library:Lc,findIconDefinition:X6,toHtml:F4},vu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,s=a===void 0?r2:a;(Object.keys(_2.styles).length>0||P.autoFetchSvg)&&l1&&P.autoReplaceSvg&&T2.dom.i2svg({node:s})};function G3(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return F4(s)})}}),Object.defineProperty(c,"node",{get:function(){if(l1){var s=r2.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function Hu(c){var e=c.children,a=c.main,s=c.mask,n=c.attributes,r=c.styles,i=c.transform;if(I0(i)&&a.found&&!s.found){var o=a.width,t=a.height,f={x:o/t/2,y:.5};n.style=$3(S(S({},r),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:e}]}function zu(c){var e=c.prefix,a=c.iconName,s=c.children,n=c.attributes,r=c.symbol,i=r===!0?"".concat(e,"-").concat(P.cssPrefix,"-").concat(a):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},n),{},{id:i}),children:s}]}]}function R0(c){var e=c.icons,a=e.main,s=e.mask,n=c.prefix,r=c.iconName,i=c.transform,o=c.symbol,t=c.title,f=c.maskId,h=c.titleId,u=c.extra,d=c.watchable,V=d===void 0?!1:d,b=s.found?s:a,M=b.width,T=b.height,H=n==="fak",y=[P.replacementClass,r?"".concat(P.cssPrefix,"-").concat(r):""].filter(function(k){return u.classes.indexOf(k)===-1}).filter(function(k){return k!==""||!!k}).concat(u.classes).join(" "),F={children:[],attributes:S(S({},u.attributes),{},{"data-prefix":n,"data-icon":r,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(T)})},N=H&&!~u.classes.indexOf("fa-fw")?{width:"".concat(M/T*16*.0625,"em")}:{};V&&(F.attributes[O1]=""),t&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(h||A4())},children:[t]}),delete F.attributes.title);var E=S(S({},F),{},{prefix:n,iconName:r,main:a,mask:s,maskId:f,transform:i,symbol:o,styles:S(S({},N),u.styles)}),e2=s.found&&a.found?i1("generateAbstractMask",E)||{children:[],attributes:{}}:i1("generateAbstractIcon",E)||{children:[],attributes:{}},Z=e2.children,W=e2.attributes;return E.children=Z,E.attributes=W,o?zu(E):Hu(E)}function O5(c){var e=c.content,a=c.width,s=c.height,n=c.transform,r=c.title,i=c.extra,o=c.watchable,t=o===void 0?!1:o,f=S(S(S({},i.attributes),r?{title:r}:{}),{},{class:i.classes.join(" ")});t&&(f[O1]="");var h=S({},i.styles);I0(n)&&(h.transform=Ym({transform:n,startCentered:!0,width:a,height:s}),h["-webkit-transform"]=h.transform);var u=$3(h);u.length>0&&(f.style=u);var d=[];return d.push({tag:"span",attributes:f,children:[e]}),r&&d.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),d}function pu(c){var e=c.content,a=c.title,s=c.extra,n=S(S(S({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")}),r=$3(s.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[e]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var C6=_2.styles;function Q6(c){var e=c[0],a=c[1],s=c.slice(4),n=k0(s,1),r=n[0],i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(B1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(B1.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(B1.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:a,icon:i}}var Vu={found:!1,width:512,height:512};function gu(c,e){!fc&&!P.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function J6(c,e){var a=e;return e==="fa"&&P.styleDefault!==null&&(e=L1()),new Promise(function(s,n){if(i1("missingIconAbstract"),a==="fa"){var r=Cc(c)||{};c=r.iconName||c,e=r.prefix||e}if(c&&e&&C6[e]&&C6[e][c]){var i=C6[e][c];return s(Q6(i))}gu(c,e),s(S(S({},Vu),{},{icon:P.showMissingIcons&&c?i1("missingIconAbstract")||{}:{}}))})}var _5=function(){},Z6=P.measurePerformance&&Q4&&Q4.mark&&Q4.measure?Q4:{mark:_5,measure:_5},H4='FA "6.5.1"',Mu=function(e){return Z6.mark("".concat(H4," ").concat(e," begins")),function(){return wc(e)}},wc=function(e){Z6.mark("".concat(H4," ").concat(e," ends")),Z6.measure("".concat(H4," ").concat(e),"".concat(H4," ").concat(e," begins"),"".concat(H4," ").concat(e," ends"))},D0={begin:Mu,end:wc},h3=function(){};function $5(c){var e=c.getAttribute?c.getAttribute(O1):null;return typeof e=="string"}function yu(c){var e=c.getAttribute?c.getAttribute(N0):null,a=c.getAttribute?c.getAttribute(S0):null;return e&&a}function Cu(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(P.replacementClass)}function Lu(){if(P.autoReplaceSvg===!0)return m3.replace;var c=m3[P.autoReplaceSvg];return c||m3.replace}function wu(c){return r2.createElementNS("http://www.w3.org/2000/svg",c)}function bu(c){return r2.createElement(c)}function bc(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,s=a===void 0?c.tag==="svg"?wu:bu:a;if(typeof c=="string")return r2.createTextNode(c);var n=s(c.tag);Object.keys(c.attributes||[]).forEach(function(i){n.setAttribute(i,c.attributes[i])});var r=c.children||[];return r.forEach(function(i){n.appendChild(bc(i,{ceFn:s}))}),n}function ku(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var m3={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(n){a.parentNode.insertBefore(bc(n),a)}),a.getAttribute(O1)===null&&P.keepOriginalSource){var s=r2.createComment(ku(a));a.parentNode.replaceChild(s,a)}else a.remove()},nest:function(e){var a=e[0],s=e[1];if(~T0(a).indexOf(P.replacementClass))return m3.replace(e);var n=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var r=s[0].attributes.class.split(" ").reduce(function(o,t){return t===P.replacementClass||t.match(n)?o.toSvg.push(t):o.toNode.push(t),o},{toNode:[],toSvg:[]});s[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",r.toNode.join(" "))}var i=s.map(function(o){return F4(o)}).join(`
`);a.setAttribute(O1,""),a.innerHTML=i}};function U5(c){c()}function kc(c,e){var a=typeof e=="function"?e:h3;if(c.length===0)a();else{var s=U5;P.mutateApproach===Am&&(s=C1.requestAnimationFrame||U5),s(function(){var n=Lu(),r=D0.begin("mutate");c.map(n),r(),a()})}}var W0=!1;function xc(){W0=!0}function c0(){W0=!1}var C3=null;function q5(c){if(P5&&P.observeMutations){var e=c.treeCallback,a=e===void 0?h3:e,s=c.nodeCallback,n=s===void 0?h3:s,r=c.pseudoElementsCallback,i=r===void 0?h3:r,o=c.observeMutationsRoot,t=o===void 0?r2:o;C3=new P5(function(f){if(!W0){var h=L1();t4(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!$5(u.addedNodes[0])&&(P.searchPseudoElements&&i(u.target),a(u.target)),u.type==="attributes"&&u.target.parentNode&&P.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&$5(u.target)&&~Dm.indexOf(u.attributeName))if(u.attributeName==="class"&&yu(u.target)){var d=q3(T0(u.target)),V=d.prefix,b=d.iconName;u.target.setAttribute(N0,V||h),b&&u.target.setAttribute(S0,b)}else Cu(u.target)&&n(u.target)})}}),l1&&C3.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xu(){C3&&C3.disconnect()}function Nu(c){var e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(s,n){var r=n.split(":"),i=r[0],o=r.slice(1);return i&&o.length>0&&(s[i]=o.join(":").trim()),s},{})),a}function Su(c){var e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",n=q3(T0(c));return n.prefix||(n.prefix=L1()),e&&a&&(n.prefix=e,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&s.length>0&&(n.iconName=ou(n.prefix,c.innerText)||F0(n.prefix,j6(c.innerText))),!n.iconName&&P.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function Au(c){var e=t4(c.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),a=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return P.autoA11y&&(a?e["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(s||A4()):(e["aria-hidden"]="true",e.focusable="false")),e}function Tu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function G5(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Su(c),s=a.iconName,n=a.prefix,r=a.rest,i=Au(c),o=K6("parseNodeAttributes",{},c),t=e.styleParser?Nu(c):[];return S({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:n,transform:K2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:t,attributes:i}},o)}var Iu=_2.styles;function Nc(c){var e=P.autoReplaceSvg==="nest"?G5(c,{styleParser:!1}):G5(c);return~e.extra.classes.indexOf(hc)?i1("generateLayersText",c,e):i1("generateSvgReplacementMutation",c,e)}var w1=new Set;A0.map(function(c){w1.add("fa-".concat(c))});Object.keys(k4[n2]).map(w1.add.bind(w1));Object.keys(k4[h2]).map(w1.add.bind(w1));w1=I4(w1);function j5(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!l1)return Promise.resolve();var a=r2.documentElement.classList,s=function(u){return a.add("".concat(F5,"-").concat(u))},n=function(u){return a.remove("".concat(F5,"-").concat(u))},r=P.autoFetchSvg?w1:A0.map(function(h){return"fa-".concat(h)}).concat(Object.keys(Iu));r.includes("fa")||r.push("fa");var i=[".".concat(hc,":not([").concat(O1,"])")].concat(r.map(function(h){return".".concat(h,":not([").concat(O1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=t4(c.querySelectorAll(i))}catch{}if(o.length>0)s("pending"),n("complete");else return Promise.resolve();var t=D0.begin("onTree"),f=o.reduce(function(h,u){try{var d=Nc(u);d&&h.push(d)}catch(V){fc||V.name==="MissingIcon"&&console.error(V)}return h},[]);return new Promise(function(h,u){Promise.all(f).then(function(d){kc(d,function(){s("active"),s("complete"),n("pending"),typeof e=="function"&&e(),t(),h()})}).catch(function(d){t(),u(d)})})}function Pu(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Nc(c).then(function(a){a&&kc([a],e)})}function Fu(c){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(e||{}).icon?e:X6(e||{}),n=a.mask;return n&&(n=(n||{}).icon?n:X6(n||{})),c(s,S(S({},a),{},{mask:n}))}}var Bu=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,n=s===void 0?K2:s,r=a.symbol,i=r===void 0?!1:r,o=a.mask,t=o===void 0?null:o,f=a.maskId,h=f===void 0?null:f,u=a.title,d=u===void 0?null:u,V=a.titleId,b=V===void 0?null:V,M=a.classes,T=M===void 0?[]:M,H=a.attributes,y=H===void 0?{}:H,F=a.styles,N=F===void 0?{}:F;if(e){var E=e.prefix,e2=e.iconName,Z=e.icon;return G3(S({type:"icon"},e),function(){return _1("beforeDOMElementCreation",{iconDefinition:e,params:a}),P.autoA11y&&(d?y["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(b||A4()):(y["aria-hidden"]="true",y.focusable="false")),R0({icons:{main:Q6(Z),mask:t?Q6(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:e2,transform:S(S({},K2),n),symbol:i,title:d,maskId:h,titleId:b,extra:{attributes:y,styles:N,classes:T}})})}},Ru={mixout:function(){return{icon:Fu(Bu)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=j5,a.nodeCallback=Pu,a}}},provides:function(e){e.i2svg=function(a){var s=a.node,n=s===void 0?r2:s,r=a.callback,i=r===void 0?function(){}:r;return j5(n,i)},e.generateSvgReplacementMutation=function(a,s){var n=s.iconName,r=s.title,i=s.titleId,o=s.prefix,t=s.transform,f=s.symbol,h=s.mask,u=s.maskId,d=s.extra;return new Promise(function(V,b){Promise.all([J6(n,o),h.iconName?J6(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var T=k0(M,2),H=T[0],y=T[1];V([a,R0({icons:{main:H,mask:y},prefix:o,iconName:n,transform:t,symbol:f,maskId:u,title:r,titleId:i,extra:d,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(a){var s=a.children,n=a.attributes,r=a.main,i=a.transform,o=a.styles,t=$3(o);t.length>0&&(n.style=t);var f;return I0(i)&&(f=i1("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),s.push(f||r.icon),{children:s,attributes:n}}}},Du={mixout:function(){return{layer:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.classes,r=n===void 0?[]:n;return G3({type:"layer"},function(){_1("beforeDOMElementCreation",{assembler:a,params:s});var i=[];return a(function(o){Array.isArray(o)?o.map(function(t){i=i.concat(t.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(I4(r)).join(" ")},children:i}]})}}}},Wu={mixout:function(){return{counter:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.title,r=n===void 0?null:n,i=s.classes,o=i===void 0?[]:i,t=s.attributes,f=t===void 0?{}:t,h=s.styles,u=h===void 0?{}:h;return G3({type:"counter",content:a},function(){return _1("beforeDOMElementCreation",{content:a,params:s}),pu({content:a.toString(),title:r,extra:{attributes:f,styles:u,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(I4(o))}})})}}}},Eu={mixout:function(){return{text:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.transform,r=n===void 0?K2:n,i=s.title,o=i===void 0?null:i,t=s.classes,f=t===void 0?[]:t,h=s.attributes,u=h===void 0?{}:h,d=s.styles,V=d===void 0?{}:d;return G3({type:"text",content:a},function(){return _1("beforeDOMElementCreation",{content:a,params:s}),O5({content:a,transform:S(S({},K2),r),title:o,extra:{attributes:u,styles:V,classes:["".concat(P.cssPrefix,"-layers-text")].concat(I4(f))}})})}}},provides:function(e){e.generateLayersText=function(a,s){var n=s.title,r=s.transform,i=s.extra,o=null,t=null;if(oc){var f=parseInt(getComputedStyle(a).fontSize,10),h=a.getBoundingClientRect();o=h.width/f,t=h.height/f}return P.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,O5({content:a.innerHTML,width:o,height:t,transform:r,title:n,extra:i,watchable:!0})])}}},Ou=new RegExp('"',"ug"),Y5=[1105920,1112319];function _u(c){var e=c.replace(Ou,""),a=eu(e,0),s=a>=Y5[0]&&a<=Y5[1],n=e.length===2?e[0]===e[1]:!1;return{value:j6(n?e[0]:e),isSecondary:s||n}}function K5(c,e){var a="".concat(Sm).concat(e.replace(":","-"));return new Promise(function(s,n){if(c.getAttribute(a)!==null)return s();var r=t4(c.children),i=r.filter(function(Z){return Z.getAttribute(G6)===e})[0],o=C1.getComputedStyle(c,e),t=o.getPropertyValue("font-family").match(Fm),f=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(i&&!t)return c.removeChild(i),s();if(t&&h!=="none"&&h!==""){var u=o.getPropertyValue("content"),d=~["Sharp"].indexOf(t[2])?h2:n2,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(t[2])?x4[d][t[2].toLowerCase()]:Bm[d][f],b=_u(u),M=b.value,T=b.isSecondary,H=t[0].startsWith("FontAwesome"),y=F0(V,M),F=y;if(H){var N=tu(M);N.iconName&&N.prefix&&(y=N.iconName,V=N.prefix)}if(y&&!T&&(!i||i.getAttribute(N0)!==V||i.getAttribute(S0)!==F)){c.setAttribute(a,F),i&&c.removeChild(i);var E=Tu(),e2=E.extra;e2.attributes[G6]=e,J6(y,V).then(function(Z){var W=R0(S(S({},E),{},{icons:{main:Z,mask:B0()},prefix:V,iconName:F,extra:e2,watchable:!0})),k=r2.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(k,c.firstChild):c.appendChild(k),k.outerHTML=W.map(function(O){return F4(O)}).join(`
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}