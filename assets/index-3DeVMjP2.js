(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();function U6(c,a){const e=Object.create(null),r=c.split(",");for(let s=0;s<r.length;s++)e[r[s]]=!0;return a?s=>!!e[s.toLowerCase()]:s=>!!e[s]}const c2={},G1=[],K2=()=>{},vf=()=>!1,z3=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),I6=c=>c.startsWith("onUpdate:"),h2=Object.assign,q6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},zf=Object.prototype.hasOwnProperty,G=(c,a)=>zf.call(c,a),R=Array.isArray,j1=c=>u3(c)==="[object Map]",P5=c=>u3(c)==="[object Set]",O=c=>typeof c=="function",v2=c=>typeof c=="string",a4=c=>typeof c=="symbol",r2=c=>c!==null&&typeof c=="object",F5=c=>(r2(c)||O(c))&&O(c.then)&&O(c.catch),B5=Object.prototype.toString,u3=c=>B5.call(c),uf=c=>u3(c).slice(8,-1),R5=c=>u3(c)==="[object Object]",W6=c=>v2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,Z4=U6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),h3=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},hf=/-(\w)/g,X2=h3(c=>c.replace(hf,(a,e)=>e?e.toUpperCase():"")),Vf=/\B([A-Z])/g,e4=h3(c=>c.replace(Vf,"-$1").toLowerCase()),V3=h3(c=>c.charAt(0).toUpperCase()+c.slice(1)),Z3=h3(c=>c?`on${V3(c)}`:""),D1=(c,a)=>!Object.is(c,a),c6=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},i3=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},pf=c=>{const a=parseFloat(c);return isNaN(a)?c:a},Mf=c=>{const a=v2(c)?Number(c):NaN;return isNaN(a)?c:a};let L8;const u6=()=>L8||(L8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function p3(c){if(R(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],s=v2(r)?gf(r):p3(r);if(s)for(const i in s)a[i]=s[i]}return a}else if(v2(c)||r2(c))return c}const df=/;(?![^(]*\))/g,Cf=/:([^]+)/,Lf=/\/\*[^]*?\*\//g;function gf(c){const a={};return c.replace(Lf,"").split(df).forEach(e=>{if(e){const r=e.split(Cf);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function a1(c){let a="";if(v2(c))a=c;else if(R(c))for(let e=0;e<c.length;e++){const r=a1(c[e]);r&&(a+=r+" ")}else if(r2(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const xf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bf=U6(xf);function D5(c){return!!c||c===""}const Y2=c=>v2(c)?c:c==null?"":R(c)||r2(c)&&(c.toString===B5||!O(c.toString))?JSON.stringify(c,E5,2):String(c),E5=(c,a)=>a&&a.__v_isRef?E5(c,a.value):j1(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,s],i)=>(e[a6(r,i)+" =>"]=s,e),{})}:P5(a)?{[`Set(${a.size})`]:[...a.values()].map(e=>a6(e))}:a4(a)?a6(a):r2(a)&&!R(a)&&!R5(a)?String(a):a,a6=(c,a="")=>{var e;return a4(c)?`Symbol(${(e=c.description)!=null?e:a})`:c};let D2;class Nf{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=D2,!a&&D2&&(this.index=(D2.scopes||(D2.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=D2;try{return D2=this,a()}finally{D2=e}}}on(){D2=this}off(){D2=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sf(c,a=D2){a&&a.active&&a.effects.push(c)}function wf(){return D2}const G6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},_5=c=>(c.w&V1)>0,$5=c=>(c.n&V1)>0,kf=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=V1},yf=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const s=a[r];_5(s)&&!$5(s)?s.delete(c):a[e++]=s,s.w&=~V1,s.n&=~V1}a.length=e}},h6=new WeakMap;let t4=0,V1=1;const V6=30;let E2;const B1=Symbol(""),p6=Symbol("");class j6{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Sf(this,r)}run(){if(!this.active)return this.fn();let a=E2,e=u1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=E2,E2=this,u1=!0,V1=1<<++t4,t4<=V6?kf(this):g8(this),this.fn()}finally{t4<=V6&&yf(this),V1=1<<--t4,E2=this.parent,u1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){E2===this?this.deferStop=!0:this.active&&(g8(this),this.onStop&&this.onStop(),this.active=!1)}}function g8(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let u1=!0;const O5=[];function r4(){O5.push(u1),u1=!1}function s4(){const c=O5.pop();u1=c===void 0?!0:c}function N2(c,a,e){if(u1&&E2){let r=h6.get(c);r||h6.set(c,r=new Map);let s=r.get(e);s||r.set(e,s=G6()),U5(s)}}function U5(c,a){let e=!1;t4<=V6?$5(c)||(c.n|=V1,e=!_5(c)):e=!c.has(E2),e&&(c.add(E2),E2.deps.push(c))}function e1(c,a,e,r,s,i){const n=h6.get(c);if(!n)return;let l=[];if(a==="clear")l=[...n.values()];else if(e==="length"&&R(c)){const f=Number(r);n.forEach((o,t)=>{(t==="length"||!a4(t)&&t>=f)&&l.push(o)})}else switch(e!==void 0&&l.push(n.get(e)),a){case"add":R(c)?W6(e)&&l.push(n.get("length")):(l.push(n.get(B1)),j1(c)&&l.push(n.get(p6)));break;case"delete":R(c)||(l.push(n.get(B1)),j1(c)&&l.push(n.get(p6)));break;case"set":j1(c)&&l.push(n.get(B1));break}if(l.length===1)l[0]&&M6(l[0]);else{const f=[];for(const o of l)o&&f.push(...o);M6(G6(f))}}function M6(c,a){const e=R(c)?c:[...c];for(const r of e)r.computed&&x8(r);for(const r of e)r.computed||x8(r)}function x8(c,a){(c!==E2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Af=U6("__proto__,__v_isRef,__isVue"),I5=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(a4)),b8=Tf();function Tf(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=j(this);for(let i=0,n=this.length;i<n;i++)N2(r,"get",i+"");const s=r[a](...e);return s===-1||s===!1?r[a](...e.map(j)):s}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){r4();const r=j(this)[a].apply(this,e);return s4(),r}}),c}function Pf(c){const a=j(this);return N2(a,"has",c),a.hasOwnProperty(c)}class q5{constructor(a=!1,e=!1){this._isReadonly=a,this._shallow=e}get(a,e,r){const s=this._isReadonly,i=this._shallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return i;if(e==="__v_raw")return r===(s?i?Gf:K5:i?j5:G5).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(r)?a:void 0;const n=R(a);if(!s){if(n&&G(b8,e))return Reflect.get(b8,e,r);if(e==="hasOwnProperty")return Pf}const l=Reflect.get(a,e,r);return(a4(e)?I5.has(e):Af(e))||(s||N2(a,"get",e),i)?l:S2(l)?n&&W6(e)?l:l.value:r2(l)?s?Y5(l):d3(l):l}}class W5 extends q5{constructor(a=!1){super(!1,a)}set(a,e,r,s){let i=a[e];if(!this._shallow){const f=J1(i);if(!n3(r)&&!J1(r)&&(i=j(i),r=j(r)),!R(a)&&S2(i)&&!S2(r))return f?!1:(i.value=r,!0)}const n=R(a)&&W6(e)?Number(e)<a.length:G(a,e),l=Reflect.set(a,e,r,s);return a===j(s)&&(n?D1(r,i)&&e1(a,"set",e,r):e1(a,"add",e,r)),l}deleteProperty(a,e){const r=G(a,e);a[e];const s=Reflect.deleteProperty(a,e);return s&&r&&e1(a,"delete",e,void 0),s}has(a,e){const r=Reflect.has(a,e);return(!a4(e)||!I5.has(e))&&N2(a,"has",e),r}ownKeys(a){return N2(a,"iterate",R(a)?"length":B1),Reflect.ownKeys(a)}}class Ff extends q5{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const Bf=new W5,Rf=new Ff,Df=new W5(!0),K6=c=>c,M3=c=>Reflect.getPrototypeOf(c);function D4(c,a,e=!1,r=!1){c=c.__v_raw;const s=j(c),i=j(a);e||(D1(a,i)&&N2(s,"get",a),N2(s,"get",i));const{has:n}=M3(s),l=r?K6:e?Q6:V4;if(n.call(s,a))return l(c.get(a));if(n.call(s,i))return l(c.get(i));c!==s&&c.get(a)}function E4(c,a=!1){const e=this.__v_raw,r=j(e),s=j(c);return a||(D1(c,s)&&N2(r,"has",c),N2(r,"has",s)),c===s?e.has(c):e.has(c)||e.has(s)}function _4(c,a=!1){return c=c.__v_raw,!a&&N2(j(c),"iterate",B1),Reflect.get(c,"size",c)}function N8(c){c=j(c);const a=j(this);return M3(a).has.call(a,c)||(a.add(c),e1(a,"add",c,c)),this}function S8(c,a){a=j(a);const e=j(this),{has:r,get:s}=M3(e);let i=r.call(e,c);i||(c=j(c),i=r.call(e,c));const n=s.call(e,c);return e.set(c,a),i?D1(a,n)&&e1(e,"set",c,a):e1(e,"add",c,a),this}function w8(c){const a=j(this),{has:e,get:r}=M3(a);let s=e.call(a,c);s||(c=j(c),s=e.call(a,c)),r&&r.call(a,c);const i=a.delete(c);return s&&e1(a,"delete",c,void 0),i}function k8(){const c=j(this),a=c.size!==0,e=c.clear();return a&&e1(c,"clear",void 0,void 0),e}function $4(c,a){return function(r,s){const i=this,n=i.__v_raw,l=j(n),f=a?K6:c?Q6:V4;return!c&&N2(l,"iterate",B1),n.forEach((o,t)=>r.call(s,f(o),f(t),i))}}function O4(c,a,e){return function(...r){const s=this.__v_raw,i=j(s),n=j1(i),l=c==="entries"||c===Symbol.iterator&&n,f=c==="keys"&&n,o=s[c](...r),t=e?K6:a?Q6:V4;return!a&&N2(i,"iterate",f?p6:B1),{next(){const{value:v,done:z}=o.next();return z?{value:v,done:z}:{value:l?[t(v[0]),t(v[1])]:t(v),done:z}},[Symbol.iterator](){return this}}}}function o1(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function Ef(){const c={get(i){return D4(this,i)},get size(){return _4(this)},has:E4,add:N8,set:S8,delete:w8,clear:k8,forEach:$4(!1,!1)},a={get(i){return D4(this,i,!1,!0)},get size(){return _4(this)},has:E4,add:N8,set:S8,delete:w8,clear:k8,forEach:$4(!1,!0)},e={get(i){return D4(this,i,!0)},get size(){return _4(this,!0)},has(i){return E4.call(this,i,!0)},add:o1("add"),set:o1("set"),delete:o1("delete"),clear:o1("clear"),forEach:$4(!0,!1)},r={get(i){return D4(this,i,!0,!0)},get size(){return _4(this,!0)},has(i){return E4.call(this,i,!0)},add:o1("add"),set:o1("set"),delete:o1("delete"),clear:o1("clear"),forEach:$4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=O4(i,!1,!1),e[i]=O4(i,!0,!1),a[i]=O4(i,!1,!0),r[i]=O4(i,!0,!0)}),[c,e,a,r]}const[_f,$f,Of,Uf]=Ef();function Y6(c,a){const e=a?c?Uf:Of:c?$f:_f;return(r,s,i)=>s==="__v_isReactive"?!c:s==="__v_isReadonly"?c:s==="__v_raw"?r:Reflect.get(G(e,s)&&s in r?e:r,s,i)}const If={get:Y6(!1,!1)},qf={get:Y6(!1,!0)},Wf={get:Y6(!0,!1)},G5=new WeakMap,j5=new WeakMap,K5=new WeakMap,Gf=new WeakMap;function jf(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kf(c){return c.__v_skip||!Object.isExtensible(c)?0:jf(uf(c))}function d3(c){return J1(c)?c:X6(c,!1,Bf,If,G5)}function Yf(c){return X6(c,!1,Df,qf,j5)}function Y5(c){return X6(c,!0,Rf,Wf,K5)}function X6(c,a,e,r,s){if(!r2(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=s.get(c);if(i)return i;const n=Kf(c);if(n===0)return c;const l=new Proxy(c,n===2?r:e);return s.set(c,l),l}function K1(c){return J1(c)?K1(c.__v_raw):!!(c&&c.__v_isReactive)}function J1(c){return!!(c&&c.__v_isReadonly)}function n3(c){return!!(c&&c.__v_isShallow)}function X5(c){return K1(c)||J1(c)}function j(c){const a=c&&c.__v_raw;return a?j(a):c}function Q5(c){return i3(c,"__v_skip",!0),c}const V4=c=>r2(c)?d3(c):c,Q6=c=>r2(c)?Y5(c):c;function J5(c){u1&&E2&&(c=j(c),U5(c.dep||(c.dep=G6())))}function Z5(c,a){c=j(c);const e=c.dep;e&&M6(e)}function S2(c){return!!(c&&c.__v_isRef===!0)}function C2(c){return Xf(c,!1)}function Xf(c,a){return S2(c)?c:new Qf(c,a)}class Qf{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:j(a),this._value=e?a:V4(a)}get value(){return J5(this),this._value}set value(a){const e=this.__v_isShallow||n3(a)||J1(a);a=e?a:j(a),D1(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:V4(a),Z5(this))}}function Jf(c){return S2(c)?c.value:c}const Zf={get:(c,a,e)=>Jf(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const s=c[a];return S2(s)&&!S2(e)?(s.value=e,!0):Reflect.set(c,a,e,r)}};function c7(c){return K1(c)?c:new Proxy(c,Zf)}class co{constructor(a,e,r,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new j6(a,()=>{this._dirty||(this._dirty=!0,Z5(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const a=j(this);return J5(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function ao(c,a,e=!1){let r,s;const i=O(c);return i?(r=c,s=K2):(r=c.get,s=c.set),new co(r,s,i||!s,e)}function h1(c,a,e,r){let s;try{s=r?c(...r):c()}catch(i){C3(i,a,e)}return s}function B2(c,a,e,r){if(O(c)){const i=h1(c,a,e,r);return i&&F5(i)&&i.catch(n=>{C3(n,a,e)}),i}const s=[];for(let i=0;i<c.length;i++)s.push(B2(c[i],a,e,r));return s}function C3(c,a,e,r=!0){const s=a?a.vnode:null;if(a){let i=a.parent;const n=a.proxy,l=e;for(;i;){const o=i.ec;if(o){for(let t=0;t<o.length;t++)if(o[t](c,n,l)===!1)return}i=i.parent}const f=a.appContext.config.errorHandler;if(f){h1(f,null,10,[c,n,l]);return}}eo(c,e,s,r)}function eo(c,a,e,r=!0){console.error(c)}let p4=!1,d6=!1;const L2=[];let G2=0;const Y1=[];let Z2=null,k1=0;const a7=Promise.resolve();let J6=null;function e7(c){const a=J6||a7;return c?a.then(this?c.bind(this):c):a}function ro(c){let a=G2+1,e=L2.length;for(;a<e;){const r=a+e>>>1,s=L2[r],i=M4(s);i<c||i===c&&s.pre?a=r+1:e=r}return a}function Z6(c){(!L2.length||!L2.includes(c,p4&&c.allowRecurse?G2+1:G2))&&(c.id==null?L2.push(c):L2.splice(ro(c.id),0,c),r7())}function r7(){!p4&&!d6&&(d6=!0,J6=a7.then(i7))}function so(c){const a=L2.indexOf(c);a>G2&&L2.splice(a,1)}function io(c){R(c)?Y1.push(...c):(!Z2||!Z2.includes(c,c.allowRecurse?k1+1:k1))&&Y1.push(c),r7()}function y8(c,a,e=p4?G2+1:0){for(;e<L2.length;e++){const r=L2[e];if(r&&r.pre){if(c&&r.id!==c.uid)continue;L2.splice(e,1),e--,r()}}}function s7(c){if(Y1.length){const a=[...new Set(Y1)];if(Y1.length=0,Z2){Z2.push(...a);return}for(Z2=a,Z2.sort((e,r)=>M4(e)-M4(r)),k1=0;k1<Z2.length;k1++)Z2[k1]();Z2=null,k1=0}}const M4=c=>c.id==null?1/0:c.id,no=(c,a)=>{const e=M4(c)-M4(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function i7(c){d6=!1,p4=!0,L2.sort(no);try{for(G2=0;G2<L2.length;G2++){const a=L2[G2];a&&a.active!==!1&&h1(a,null,14)}}finally{G2=0,L2.length=0,s7(),p4=!1,J6=null,(L2.length||Y1.length)&&i7()}}function lo(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||c2;let s=e;const i=a.startsWith("update:"),n=i&&a.slice(7);if(n&&n in r){const t=`${n==="modelValue"?"model":n}Modifiers`,{number:v,trim:z}=r[t]||c2;z&&(s=e.map(M=>v2(M)?M.trim():M)),v&&(s=e.map(pf))}let l,f=r[l=Z3(a)]||r[l=Z3(X2(a))];!f&&i&&(f=r[l=Z3(e4(a))]),f&&B2(f,c,6,s);const o=r[l+"Once"];if(o){if(!c.emitted)c.emitted={};else if(c.emitted[l])return;c.emitted[l]=!0,B2(o,c,6,s)}}function n7(c,a,e=!1){const r=a.emitsCache,s=r.get(c);if(s!==void 0)return s;const i=c.emits;let n={},l=!1;if(!O(c)){const f=o=>{const t=n7(o,a,!0);t&&(l=!0,h2(n,t))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!i&&!l?(r2(c)&&r.set(c,null),null):(R(i)?i.forEach(f=>n[f]=null):h2(n,i),r2(c)&&r.set(c,n),n)}function L3(c,a){return!c||!z3(a)?!1:(a=a.slice(2).replace(/Once$/,""),G(c,a[0].toLowerCase()+a.slice(1))||G(c,e4(a))||G(c,a))}let y2=null,g3=null;function l3(c){const a=y2;return y2=c,g3=c&&c.type.__scopeId||null,a}function l7(c){g3=c}function f7(){g3=null}function o7(c,a=y2,e){if(!a||c._n)return c;const r=(...s)=>{r._d&&U8(-1);const i=l3(a);let n;try{n=c(...s)}finally{l3(i),r._d&&U8(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function e6(c){const{type:a,vnode:e,proxy:r,withProxy:s,props:i,propsOptions:[n],slots:l,attrs:f,emit:o,render:t,renderCache:v,data:z,setupState:M,ctx:y,inheritAttrs:w}=c;let E,h;const g=l3(c);try{if(e.shapeFlag&4){const N=s||r,_=N;E=W2(t.call(_,N,v,i,M,z,y)),h=f}else{const N=a;E=W2(N.length>1?N(i,{attrs:f,slots:l,emit:o}):N(i,null)),h=a.props?f:fo(f)}}catch(N){z4.length=0,C3(N,c,1),E=o2(O2)}let C=E;if(h&&w!==!1){const N=Object.keys(h),{shapeFlag:_}=C;N.length&&_&7&&(n&&N.some(I6)&&(h=oo(h,n)),C=p1(C,h))}return e.dirs&&(C=p1(C),C.dirs=C.dirs?C.dirs.concat(e.dirs):e.dirs),e.transition&&(C.transition=e.transition),E=C,l3(g),E}const fo=c=>{let a;for(const e in c)(e==="class"||e==="style"||z3(e))&&((a||(a={}))[e]=c[e]);return a},oo=(c,a)=>{const e={};for(const r in c)(!I6(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function to(c,a,e){const{props:r,children:s,component:i}=c,{props:n,children:l,patchFlag:f}=a,o=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return r?A8(r,n,o):!!n;if(f&8){const t=a.dynamicProps;for(let v=0;v<t.length;v++){const z=t[v];if(n[z]!==r[z]&&!L3(o,z))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===n?!1:r?n?A8(r,n,o):!0:!!n;return!1}function A8(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(a[i]!==c[i]&&!L3(e,i))return!0}return!1}function mo({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const t7="components";function x1(c,a){return vo(t7,c,!0,a)||c}const Ho=Symbol.for("v-ndc");function vo(c,a,e=!0,r=!1){const s=y2||M2;if(s){const i=s.type;if(c===t7){const l=tt(i,!1);if(l&&(l===a||l===X2(a)||l===V3(X2(a))))return i}const n=T8(s[c]||i[c],a)||T8(s.appContext[c],a);return!n&&r?i:n}}function T8(c,a){return c&&(c[a]||c[X2(a)]||c[V3(X2(a))])}const zo=c=>c.__isSuspense;function uo(c,a){a&&a.pendingBranch?R(c)?a.effects.push(...c):a.effects.push(c):io(c)}function m7(c,a){return c0(c,null,a)}const U4={};function X1(c,a,e){return c0(c,a,e)}function c0(c,a,{immediate:e,deep:r,flush:s,onTrack:i,onTrigger:n}=c2){var l;const f=wf()===((l=M2)==null?void 0:l.scope)?M2:null;let o,t=!1,v=!1;if(S2(c)?(o=()=>c.value,t=n3(c)):K1(c)?(o=()=>c,r=!0):R(c)?(v=!0,t=c.some(N=>K1(N)||n3(N)),o=()=>c.map(N=>{if(S2(N))return N.value;if(K1(N))return T1(N);if(O(N))return h1(N,f,2)})):O(c)?a?o=()=>h1(c,f,2):o=()=>{if(!(f&&f.isUnmounted))return z&&z(),B2(c,f,3,[M])}:o=K2,a&&r){const N=o;o=()=>T1(N())}let z,M=N=>{z=g.onStop=()=>{h1(N,f,4),z=g.onStop=void 0}},y;if(C4)if(M=K2,a?e&&B2(a,f,3,[o(),v?[]:void 0,M]):o(),s==="sync"){const N=vt();y=N.__watcherHandles||(N.__watcherHandles=[])}else return K2;let w=v?new Array(c.length).fill(U4):U4;const E=()=>{if(g.active)if(a){const N=g.run();(r||t||(v?N.some((_,s2)=>D1(_,w[s2])):D1(N,w)))&&(z&&z(),B2(a,f,3,[N,w===U4?void 0:v&&w[0]===U4?[]:w,M]),w=N)}else g.run()};E.allowRecurse=!!a;let h;s==="sync"?h=E:s==="post"?h=()=>b2(E,f&&f.suspense):(E.pre=!0,f&&(E.id=f.uid),h=()=>Z6(E));const g=new j6(o,h);a?e?E():w=g.run():s==="post"?b2(g.run.bind(g),f&&f.suspense):g.run();const C=()=>{g.stop(),f&&f.scope&&q6(f.scope.effects,g)};return y&&y.push(C),C}function ho(c,a,e){const r=this.proxy,s=v2(c)?c.includes(".")?H7(r,c):()=>r[c]:c.bind(r,r);let i;O(a)?i=a:(i=a.handler,e=a);const n=M2;Z1(this);const l=c0(s,i.bind(r),e);return n?Z1(n):R1(),l}function H7(c,a){const e=a.split(".");return()=>{let r=c;for(let s=0;s<e.length&&r;s++)r=r[e[s]];return r}}function T1(c,a){if(!r2(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),S2(c))T1(c.value,a);else if(R(c))for(let e=0;e<c.length;e++)T1(c[e],a);else if(P5(c)||j1(c))c.forEach(e=>{T1(e,a)});else if(R5(c))for(const e in c)T1(c[e],a);return c}function Vo(c,a){const e=y2;if(e===null)return c;const r=k3(e)||e.proxy,s=c.dirs||(c.dirs=[]);for(let i=0;i<a.length;i++){let[n,l,f,o=c2]=a[i];n&&(O(n)&&(n={mounted:n,updated:n}),n.deep&&T1(l),s.push({dir:n,instance:r,value:l,oldValue:void 0,arg:f,modifiers:o}))}return c}function b1(c,a,e,r){const s=c.dirs,i=a&&a.dirs;for(let n=0;n<s.length;n++){const l=s[n];i&&(l.oldValue=i[n].value);let f=l.dir[r];f&&(r4(),B2(f,e,8,[c.el,l,c,a]),s4())}}const v1=Symbol("_leaveCb"),I4=Symbol("_enterCb");function po(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return V7(()=>{c.isMounted=!0}),p7(()=>{c.isUnmounting=!0}),c}const F2=[Function,Array],v7={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:F2,onEnter:F2,onAfterEnter:F2,onEnterCancelled:F2,onBeforeLeave:F2,onLeave:F2,onAfterLeave:F2,onLeaveCancelled:F2,onBeforeAppear:F2,onAppear:F2,onAfterAppear:F2,onAppearCancelled:F2},Mo={name:"BaseTransition",props:v7,setup(c,{slots:a}){const e=it(),r=po();let s;return()=>{const i=a.default&&u7(a.default(),!0);if(!i||!i.length)return;let n=i[0];if(i.length>1){for(const w of i)if(w.type!==O2){n=w;break}}const l=j(c),{mode:f}=l;if(r.isLeaving)return r6(n);const o=P8(n);if(!o)return r6(n);const t=C6(o,l,r,e);L6(o,t);const v=e.subTree,z=v&&P8(v);let M=!1;const{getTransitionKey:y}=o.type;if(y){const w=y();s===void 0?s=w:w!==s&&(s=w,M=!0)}if(z&&z.type!==O2&&(!y1(o,z)||M)){const w=C6(z,l,r,e);if(L6(z,w),f==="out-in")return r.isLeaving=!0,w.afterLeave=()=>{r.isLeaving=!1,e.update.active!==!1&&e.update()},r6(n);f==="in-out"&&o.type!==O2&&(w.delayLeave=(E,h,g)=>{const C=z7(r,z);C[String(z.key)]=z,E[v1]=()=>{h(),E[v1]=void 0,delete t.delayedLeave},t.delayedLeave=g})}return n}}},Co=Mo;function z7(c,a){const{leavingVNodes:e}=c;let r=e.get(a.type);return r||(r=Object.create(null),e.set(a.type,r)),r}function C6(c,a,e,r){const{appear:s,mode:i,persisted:n=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:o,onEnterCancelled:t,onBeforeLeave:v,onLeave:z,onAfterLeave:M,onLeaveCancelled:y,onBeforeAppear:w,onAppear:E,onAfterAppear:h,onAppearCancelled:g}=a,C=String(c.key),N=z7(e,c),_=(D,q)=>{D&&B2(D,r,9,q)},s2=(D,q)=>{const Y=q[1];_(D,q),R(D)?D.every(z2=>z2.length<=1)&&Y():D.length<=1&&Y()},Z={mode:i,persisted:n,beforeEnter(D){let q=l;if(!e.isMounted)if(s)q=w||l;else return;D[v1]&&D[v1](!0);const Y=N[C];Y&&y1(c,Y)&&Y.el[v1]&&Y.el[v1](),_(q,[D])},enter(D){let q=f,Y=o,z2=t;if(!e.isMounted)if(s)q=E||f,Y=h||o,z2=g||t;else return;let P=!1;const X=D[I4]=f2=>{P||(P=!0,f2?_(z2,[D]):_(Y,[D]),Z.delayedLeave&&Z.delayedLeave(),D[I4]=void 0)};q?s2(q,[D,X]):X()},leave(D,q){const Y=String(c.key);if(D[I4]&&D[I4](!0),e.isUnmounting)return q();_(v,[D]);let z2=!1;const P=D[v1]=X=>{z2||(z2=!0,q(),X?_(y,[D]):_(M,[D]),D[v1]=void 0,N[Y]===c&&delete N[Y])};N[Y]=c,z?s2(z,[D,P]):P()},clone(D){return C6(D,a,e,r)}};return Z}function r6(c){if(x3(c))return c=p1(c),c.children=null,c}function P8(c){return x3(c)?c.children?c.children[0]:void 0:c}function L6(c,a){c.shapeFlag&6&&c.component?L6(c.component.subTree,a):c.shapeFlag&128?(c.ssContent.transition=a.clone(c.ssContent),c.ssFallback.transition=a.clone(c.ssFallback)):c.transition=a}function u7(c,a=!1,e){let r=[],s=0;for(let i=0;i<c.length;i++){let n=c[i];const l=e==null?n.key:String(e)+String(n.key!=null?n.key:i);n.type===k2?(n.patchFlag&128&&s++,r=r.concat(u7(n.children,a,l))):(a||n.type!==O2)&&r.push(l!=null?p1(n,{key:l}):n)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function n1(c,a){return O(c)?h2({name:c.name},a,{setup:c}):c}const c3=c=>!!c.type.__asyncLoader,x3=c=>c.type.__isKeepAlive;function Lo(c,a){h7(c,"a",a)}function go(c,a){h7(c,"da",a)}function h7(c,a,e=M2){const r=c.__wdc||(c.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return c()});if(b3(a,r,e),e){let s=e.parent;for(;s&&s.parent;)x3(s.parent.vnode)&&xo(r,a,e,s),s=s.parent}}function xo(c,a,e,r){const s=b3(a,c,r,!0);M7(()=>{q6(r[a],s)},e)}function b3(c,a,e=M2,r=!1){if(e){const s=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;r4(),Z1(e);const l=B2(a,e,c,n);return R1(),s4(),l});return r?s.unshift(i):s.push(i),i}}const l1=c=>(a,e=M2)=>(!C4||c==="sp")&&b3(c,(...r)=>a(...r),e),N3=l1("bm"),V7=l1("m"),bo=l1("bu"),No=l1("u"),p7=l1("bum"),M7=l1("um"),So=l1("sp"),wo=l1("rtg"),ko=l1("rtc");function yo(c,a=M2){b3("ec",c,a)}function a0(c,a,e,r){let s;const i=e&&e[r];if(R(c)||v2(c)){s=new Array(c.length);for(let n=0,l=c.length;n<l;n++)s[n]=a(c[n],n,void 0,i&&i[n])}else if(typeof c=="number"){s=new Array(c);for(let n=0;n<c;n++)s[n]=a(n+1,n,void 0,i&&i[n])}else if(r2(c))if(c[Symbol.iterator])s=Array.from(c,(n,l)=>a(n,l,void 0,i&&i[l]));else{const n=Object.keys(c);s=new Array(n.length);for(let l=0,f=n.length;l<f;l++){const o=n[l];s[l]=a(c[o],o,l,i&&i[l])}}else s=[];return e&&(e[r]=s),s}const g6=c=>c?A7(c)?k3(c)||c.proxy:g6(c.parent):null,v4=h2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>g6(c.parent),$root:c=>g6(c.root),$emit:c=>c.emit,$options:c=>e0(c),$forceUpdate:c=>c.f||(c.f=()=>Z6(c.update)),$nextTick:c=>c.n||(c.n=e7.bind(c.proxy)),$watch:c=>ho.bind(c)}),s6=(c,a)=>c!==c2&&!c.__isScriptSetup&&G(c,a),Ao={get({_:c},a){const{ctx:e,setupState:r,data:s,props:i,accessCache:n,type:l,appContext:f}=c;let o;if(a[0]!=="$"){const M=n[a];if(M!==void 0)switch(M){case 1:return r[a];case 2:return s[a];case 4:return e[a];case 3:return i[a]}else{if(s6(r,a))return n[a]=1,r[a];if(s!==c2&&G(s,a))return n[a]=2,s[a];if((o=c.propsOptions[0])&&G(o,a))return n[a]=3,i[a];if(e!==c2&&G(e,a))return n[a]=4,e[a];x6&&(n[a]=0)}}const t=v4[a];let v,z;if(t)return a==="$attrs"&&N2(c,"get",a),t(c);if((v=l.__cssModules)&&(v=v[a]))return v;if(e!==c2&&G(e,a))return n[a]=4,e[a];if(z=f.config.globalProperties,G(z,a))return z[a]},set({_:c},a,e){const{data:r,setupState:s,ctx:i}=c;return s6(s,a)?(s[a]=e,!0):r!==c2&&G(r,a)?(r[a]=e,!0):G(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:s,propsOptions:i}},n){let l;return!!e[n]||c!==c2&&G(c,n)||s6(a,n)||(l=i[0])&&G(l,n)||G(r,n)||G(v4,n)||G(s.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:G(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function F8(c){return R(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let x6=!0;function To(c){const a=e0(c),e=c.proxy,r=c.ctx;x6=!1,a.beforeCreate&&B8(a.beforeCreate,c,"bc");const{data:s,computed:i,methods:n,watch:l,provide:f,inject:o,created:t,beforeMount:v,mounted:z,beforeUpdate:M,updated:y,activated:w,deactivated:E,beforeDestroy:h,beforeUnmount:g,destroyed:C,unmounted:N,render:_,renderTracked:s2,renderTriggered:Z,errorCaptured:D,serverPrefetch:q,expose:Y,inheritAttrs:z2,components:P,directives:X,filters:f2}=a;if(o&&Po(o,r,null),n)for(const i2 in n){const K=n[i2];O(K)&&(r[i2]=K.bind(e))}if(s){const i2=s.call(e,e);r2(i2)&&(c.data=d3(i2))}if(x6=!0,i)for(const i2 in i){const K=i[i2],Q2=O(K)?K.bind(e,e):O(K.get)?K.get.bind(e,e):K2,$1=!O(K)&&O(K.set)?K.set.bind(e):K2,T2=n2({get:Q2,set:$1});Object.defineProperty(r,i2,{enumerable:!0,configurable:!0,get:()=>T2.value,set:P2=>T2.value=P2})}if(l)for(const i2 in l)d7(l[i2],r,e,i2);if(f){const i2=O(f)?f.call(e):f;Reflect.ownKeys(i2).forEach(K=>{_o(K,i2[K])})}t&&B8(t,c,"c");function t2(i2,K){R(K)?K.forEach(Q2=>i2(Q2.bind(e))):K&&i2(K.bind(e))}if(t2(N3,v),t2(V7,z),t2(bo,M),t2(No,y),t2(Lo,w),t2(go,E),t2(yo,D),t2(ko,s2),t2(wo,Z),t2(p7,g),t2(M7,N),t2(So,q),R(Y))if(Y.length){const i2=c.exposed||(c.exposed={});Y.forEach(K=>{Object.defineProperty(i2,K,{get:()=>e[K],set:Q2=>e[K]=Q2})})}else c.exposed||(c.exposed={});_&&c.render===K2&&(c.render=_),z2!=null&&(c.inheritAttrs=z2),P&&(c.components=P),X&&(c.directives=X)}function Po(c,a,e=K2){R(c)&&(c=b6(c));for(const r in c){const s=c[r];let i;r2(s)?"default"in s?i=a3(s.from||r,s.default,!0):i=a3(s.from||r):i=a3(s),S2(i)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:n=>i.value=n}):a[r]=i}}function B8(c,a,e){B2(R(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function d7(c,a,e,r){const s=r.includes(".")?H7(e,r):()=>e[r];if(v2(c)){const i=a[c];O(i)&&X1(s,i)}else if(O(c))X1(s,c.bind(e));else if(r2(c))if(R(c))c.forEach(i=>d7(i,a,e,r));else{const i=O(c.handler)?c.handler.bind(e):a[c.handler];O(i)&&X1(s,i,c)}}function e0(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:s,optionsCache:i,config:{optionMergeStrategies:n}}=c.appContext,l=i.get(a);let f;return l?f=l:!s.length&&!e&&!r?f=a:(f={},s.length&&s.forEach(o=>f3(f,o,n,!0)),f3(f,a,n)),r2(a)&&i.set(a,f),f}function f3(c,a,e,r=!1){const{mixins:s,extends:i}=a;i&&f3(c,i,e,!0),s&&s.forEach(n=>f3(c,n,e,!0));for(const n in a)if(!(r&&n==="expose")){const l=Fo[n]||e&&e[n];c[n]=l?l(c[n],a[n]):a[n]}return c}const Fo={data:R8,props:D8,emits:D8,methods:m4,computed:m4,beforeCreate:g2,created:g2,beforeMount:g2,mounted:g2,beforeUpdate:g2,updated:g2,beforeDestroy:g2,beforeUnmount:g2,destroyed:g2,unmounted:g2,activated:g2,deactivated:g2,errorCaptured:g2,serverPrefetch:g2,components:m4,directives:m4,watch:Ro,provide:R8,inject:Bo};function R8(c,a){return a?c?function(){return h2(O(c)?c.call(this,this):c,O(a)?a.call(this,this):a)}:a:c}function Bo(c,a){return m4(b6(c),b6(a))}function b6(c){if(R(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function g2(c,a){return c?[...new Set([].concat(c,a))]:a}function m4(c,a){return c?h2(Object.create(null),c,a):a}function D8(c,a){return c?R(c)&&R(a)?[...new Set([...c,...a])]:h2(Object.create(null),F8(c),F8(a??{})):a}function Ro(c,a){if(!c)return a;if(!a)return c;const e=h2(Object.create(null),c);for(const r in a)e[r]=g2(c[r],a[r]);return e}function C7(){return{app:null,config:{isNativeTag:vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Do=0;function Eo(c,a){return function(r,s=null){O(r)||(r=h2({},r)),s!=null&&!r2(s)&&(s=null);const i=C7(),n=new WeakSet;let l=!1;const f=i.app={_uid:Do++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zt,get config(){return i.config},set config(o){},use(o,...t){return n.has(o)||(o&&O(o.install)?(n.add(o),o.install(f,...t)):O(o)&&(n.add(o),o(f,...t))),f},mixin(o){return i.mixins.includes(o)||i.mixins.push(o),f},component(o,t){return t?(i.components[o]=t,f):i.components[o]},directive(o,t){return t?(i.directives[o]=t,f):i.directives[o]},mount(o,t,v){if(!l){const z=o2(r,s);return z.appContext=i,t&&a?a(z,o):c(z,o,v),l=!0,f._container=o,o.__vue_app__=f,k3(z.component)||z.component.proxy}},unmount(){l&&(c(null,f._container),delete f._container.__vue_app__)},provide(o,t){return i.provides[o]=t,f},runWithContext(o){o3=f;try{return o()}finally{o3=null}}};return f}}let o3=null;function _o(c,a){if(M2){let e=M2.provides;const r=M2.parent&&M2.parent.provides;r===e&&(e=M2.provides=Object.create(r)),e[c]=a}}function a3(c,a,e=!1){const r=M2||y2;if(r||o3){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:o3._context.provides;if(s&&c in s)return s[c];if(arguments.length>1)return e&&O(a)?a.call(r&&r.proxy):a}}function $o(c,a,e,r=!1){const s={},i={};i3(i,w3,1),c.propsDefaults=Object.create(null),L7(c,a,s,i);for(const n in c.propsOptions[0])n in s||(s[n]=void 0);e?c.props=r?s:Yf(s):c.type.props?c.props=s:c.props=i,c.attrs=i}function Oo(c,a,e,r){const{props:s,attrs:i,vnode:{patchFlag:n}}=c,l=j(s),[f]=c.propsOptions;let o=!1;if((r||n>0)&&!(n&16)){if(n&8){const t=c.vnode.dynamicProps;for(let v=0;v<t.length;v++){let z=t[v];if(L3(c.emitsOptions,z))continue;const M=a[z];if(f)if(G(i,z))M!==i[z]&&(i[z]=M,o=!0);else{const y=X2(z);s[y]=N6(f,l,y,M,c,!1)}else M!==i[z]&&(i[z]=M,o=!0)}}}else{L7(c,a,s,i)&&(o=!0);let t;for(const v in l)(!a||!G(a,v)&&((t=e4(v))===v||!G(a,t)))&&(f?e&&(e[v]!==void 0||e[t]!==void 0)&&(s[v]=N6(f,l,v,void 0,c,!0)):delete s[v]);if(i!==l)for(const v in i)(!a||!G(a,v))&&(delete i[v],o=!0)}o&&e1(c,"set","$attrs")}function L7(c,a,e,r){const[s,i]=c.propsOptions;let n=!1,l;if(a)for(let f in a){if(Z4(f))continue;const o=a[f];let t;s&&G(s,t=X2(f))?!i||!i.includes(t)?e[t]=o:(l||(l={}))[t]=o:L3(c.emitsOptions,f)||(!(f in r)||o!==r[f])&&(r[f]=o,n=!0)}if(i){const f=j(e),o=l||c2;for(let t=0;t<i.length;t++){const v=i[t];e[v]=N6(s,f,v,o[v],c,!G(o,v))}}return n}function N6(c,a,e,r,s,i){const n=c[e];if(n!=null){const l=G(n,"default");if(l&&r===void 0){const f=n.default;if(n.type!==Function&&!n.skipFactory&&O(f)){const{propsDefaults:o}=s;e in o?r=o[e]:(Z1(s),r=o[e]=f.call(null,a),R1())}else r=f}n[0]&&(i&&!l?r=!1:n[1]&&(r===""||r===e4(e))&&(r=!0))}return r}function g7(c,a,e=!1){const r=a.propsCache,s=r.get(c);if(s)return s;const i=c.props,n={},l=[];let f=!1;if(!O(c)){const t=v=>{f=!0;const[z,M]=g7(v,a,!0);h2(n,z),M&&l.push(...M)};!e&&a.mixins.length&&a.mixins.forEach(t),c.extends&&t(c.extends),c.mixins&&c.mixins.forEach(t)}if(!i&&!f)return r2(c)&&r.set(c,G1),G1;if(R(i))for(let t=0;t<i.length;t++){const v=X2(i[t]);E8(v)&&(n[v]=c2)}else if(i)for(const t in i){const v=X2(t);if(E8(v)){const z=i[t],M=n[v]=R(z)||O(z)?{type:z}:h2({},z);if(M){const y=O8(Boolean,M.type),w=O8(String,M.type);M[0]=y>-1,M[1]=w<0||y<w,(y>-1||G(M,"default"))&&l.push(v)}}}const o=[n,l];return r2(c)&&r.set(c,o),o}function E8(c){return c[0]!=="$"}function _8(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function $8(c,a){return _8(c)===_8(a)}function O8(c,a){return R(a)?a.findIndex(e=>$8(e,c)):O(a)&&$8(a,c)?0:-1}const x7=c=>c[0]==="_"||c==="$stable",r0=c=>R(c)?c.map(W2):[W2(c)],Uo=(c,a,e)=>{if(a._n)return a;const r=o7((...s)=>r0(a(...s)),e);return r._c=!1,r},b7=(c,a,e)=>{const r=c._ctx;for(const s in c){if(x7(s))continue;const i=c[s];if(O(i))a[s]=Uo(s,i,r);else if(i!=null){const n=r0(i);a[s]=()=>n}}},N7=(c,a)=>{const e=r0(a);c.slots.default=()=>e},Io=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=j(a),i3(a,"_",e)):b7(a,c.slots={})}else c.slots={},a&&N7(c,a);i3(c.slots,w3,1)},qo=(c,a,e)=>{const{vnode:r,slots:s}=c;let i=!0,n=c2;if(r.shapeFlag&32){const l=a._;l?e&&l===1?i=!1:(h2(s,a),!e&&l===1&&delete s._):(i=!a.$stable,b7(a,s)),n=a}else a&&(N7(c,a),n={default:1});if(i)for(const l in s)!x7(l)&&n[l]==null&&delete s[l]};function S6(c,a,e,r,s=!1){if(R(c)){c.forEach((z,M)=>S6(z,a&&(R(a)?a[M]:a),e,r,s));return}if(c3(r)&&!s)return;const i=r.shapeFlag&4?k3(r.component)||r.component.proxy:r.el,n=s?null:i,{i:l,r:f}=c,o=a&&a.r,t=l.refs===c2?l.refs={}:l.refs,v=l.setupState;if(o!=null&&o!==f&&(v2(o)?(t[o]=null,G(v,o)&&(v[o]=null)):S2(o)&&(o.value=null)),O(f))h1(f,l,12,[n,t]);else{const z=v2(f),M=S2(f);if(z||M){const y=()=>{if(c.f){const w=z?G(v,f)?v[f]:t[f]:f.value;s?R(w)&&q6(w,i):R(w)?w.includes(i)||w.push(i):z?(t[f]=[i],G(v,f)&&(v[f]=t[f])):(f.value=[i],c.k&&(t[c.k]=f.value))}else z?(t[f]=n,G(v,f)&&(v[f]=n)):M&&(f.value=n,c.k&&(t[c.k]=n))};n?(y.id=-1,b2(y,e)):y()}}}const b2=uo;function Wo(c){return Go(c)}function Go(c,a){const e=u6();e.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:n,createText:l,createComment:f,setText:o,setElementText:t,parentNode:v,nextSibling:z,setScopeId:M=K2,insertStaticContent:y}=c,w=(m,H,u,V=null,p=null,x=null,S=!1,L=null,b=!!H.dynamicChildren)=>{if(m===H)return;m&&!y1(m,H)&&(V=R4(m),P2(m,p,x,!0),m=null),H.patchFlag===-2&&(b=!1,H.dynamicChildren=null);const{type:d,ref:F,shapeFlag:A}=H;switch(d){case S3:E(m,H,u,V);break;case O2:h(m,H,u,V);break;case i6:m==null&&g(H,u,V,S);break;case k2:P(m,H,u,V,p,x,S,L,b);break;default:A&1?_(m,H,u,V,p,x,S,L,b):A&6?X(m,H,u,V,p,x,S,L,b):(A&64||A&128)&&d.process(m,H,u,V,p,x,S,L,b,O1)}F!=null&&p&&S6(F,m&&m.ref,x,H||m,!H)},E=(m,H,u,V)=>{if(m==null)r(H.el=l(H.children),u,V);else{const p=H.el=m.el;H.children!==m.children&&o(p,H.children)}},h=(m,H,u,V)=>{m==null?r(H.el=f(H.children||""),u,V):H.el=m.el},g=(m,H,u,V)=>{[m.el,m.anchor]=y(m.children,H,u,V,m.el,m.anchor)},C=({el:m,anchor:H},u,V)=>{let p;for(;m&&m!==H;)p=z(m),r(m,u,V),m=p;r(H,u,V)},N=({el:m,anchor:H})=>{let u;for(;m&&m!==H;)u=z(m),s(m),m=u;s(H)},_=(m,H,u,V,p,x,S,L,b)=>{S=S||H.type==="svg",m==null?s2(H,u,V,p,x,S,L,b):q(m,H,p,x,S,L,b)},s2=(m,H,u,V,p,x,S,L)=>{let b,d;const{type:F,props:A,shapeFlag:B,transition:$,dirs:U}=m;if(b=m.el=n(m.type,x,A&&A.is,A),B&8?t(b,m.children):B&16&&D(m.children,b,null,V,p,x&&F!=="foreignObject",S,L),U&&b1(m,null,V,"created"),Z(b,m,m.scopeId,S,V),A){for(const Q in A)Q!=="value"&&!Z4(Q)&&i(b,Q,null,A[Q],x,m.children,V,p,d2);"value"in A&&i(b,"value",null,A.value),(d=A.onVnodeBeforeMount)&&q2(d,V,m)}U&&b1(m,null,V,"beforeMount");const J=jo(p,$);J&&$.beforeEnter(b),r(b,H,u),((d=A&&A.onVnodeMounted)||J||U)&&b2(()=>{d&&q2(d,V,m),J&&$.enter(b),U&&b1(m,null,V,"mounted")},p)},Z=(m,H,u,V,p)=>{if(u&&M(m,u),V)for(let x=0;x<V.length;x++)M(m,V[x]);if(p){let x=p.subTree;if(H===x){const S=p.vnode;Z(m,S,S.scopeId,S.slotScopeIds,p.parent)}}},D=(m,H,u,V,p,x,S,L,b=0)=>{for(let d=b;d<m.length;d++){const F=m[d]=L?z1(m[d]):W2(m[d]);w(null,F,H,u,V,p,x,S,L)}},q=(m,H,u,V,p,x,S)=>{const L=H.el=m.el;let{patchFlag:b,dynamicChildren:d,dirs:F}=H;b|=m.patchFlag&16;const A=m.props||c2,B=H.props||c2;let $;u&&N1(u,!1),($=B.onVnodeBeforeUpdate)&&q2($,u,H,m),F&&b1(H,m,u,"beforeUpdate"),u&&N1(u,!0);const U=p&&H.type!=="foreignObject";if(d?Y(m.dynamicChildren,d,L,u,V,U,x):S||K(m,H,L,null,u,V,U,x,!1),b>0){if(b&16)z2(L,H,A,B,u,V,p);else if(b&2&&A.class!==B.class&&i(L,"class",null,B.class,p),b&4&&i(L,"style",A.style,B.style,p),b&8){const J=H.dynamicProps;for(let Q=0;Q<J.length;Q++){const m2=J[Q],R2=A[m2],U1=B[m2];(U1!==R2||m2==="value")&&i(L,m2,R2,U1,p,m.children,u,V,d2)}}b&1&&m.children!==H.children&&t(L,H.children)}else!S&&d==null&&z2(L,H,A,B,u,V,p);(($=B.onVnodeUpdated)||F)&&b2(()=>{$&&q2($,u,H,m),F&&b1(H,m,u,"updated")},V)},Y=(m,H,u,V,p,x,S)=>{for(let L=0;L<H.length;L++){const b=m[L],d=H[L],F=b.el&&(b.type===k2||!y1(b,d)||b.shapeFlag&70)?v(b.el):u;w(b,d,F,null,V,p,x,S,!0)}},z2=(m,H,u,V,p,x,S)=>{if(u!==V){if(u!==c2)for(const L in u)!Z4(L)&&!(L in V)&&i(m,L,u[L],null,S,H.children,p,x,d2);for(const L in V){if(Z4(L))continue;const b=V[L],d=u[L];b!==d&&L!=="value"&&i(m,L,d,b,S,H.children,p,x,d2)}"value"in V&&i(m,"value",u.value,V.value)}},P=(m,H,u,V,p,x,S,L,b)=>{const d=H.el=m?m.el:l(""),F=H.anchor=m?m.anchor:l("");let{patchFlag:A,dynamicChildren:B,slotScopeIds:$}=H;$&&(L=L?L.concat($):$),m==null?(r(d,u,V),r(F,u,V),D(H.children,u,F,p,x,S,L,b)):A>0&&A&64&&B&&m.dynamicChildren?(Y(m.dynamicChildren,B,u,p,x,S,L),(H.key!=null||p&&H===p.subTree)&&S7(m,H,!0)):K(m,H,u,F,p,x,S,L,b)},X=(m,H,u,V,p,x,S,L,b)=>{H.slotScopeIds=L,m==null?H.shapeFlag&512?p.ctx.activate(H,u,V,S,b):f2(H,u,V,p,x,S,b):U2(m,H,b)},f2=(m,H,u,V,p,x,S)=>{const L=m.component=st(m,V,p);if(x3(m)&&(L.ctx.renderer=O1),nt(L),L.asyncDep){if(p&&p.registerDep(L,t2),!m.el){const b=L.subTree=o2(O2);h(null,b,H,u)}return}t2(L,m,H,u,p,x,S)},U2=(m,H,u)=>{const V=H.component=m.component;if(to(m,H,u))if(V.asyncDep&&!V.asyncResolved){i2(V,H,u);return}else V.next=H,so(V.update),V.update();else H.el=m.el,V.vnode=H},t2=(m,H,u,V,p,x,S)=>{const L=()=>{if(m.isMounted){let{next:F,bu:A,u:B,parent:$,vnode:U}=m,J=F,Q;N1(m,!1),F?(F.el=U.el,i2(m,F,S)):F=U,A&&c6(A),(Q=F.props&&F.props.onVnodeBeforeUpdate)&&q2(Q,$,F,U),N1(m,!0);const m2=e6(m),R2=m.subTree;m.subTree=m2,w(R2,m2,v(R2.el),R4(R2),m,p,x),F.el=m2.el,J===null&&mo(m,m2.el),B&&b2(B,p),(Q=F.props&&F.props.onVnodeUpdated)&&b2(()=>q2(Q,$,F,U),p)}else{let F;const{el:A,props:B}=H,{bm:$,m:U,parent:J}=m,Q=c3(H);if(N1(m,!1),$&&c6($),!Q&&(F=B&&B.onVnodeBeforeMount)&&q2(F,J,H),N1(m,!0),A&&J3){const m2=()=>{m.subTree=e6(m),J3(A,m.subTree,m,p,null)};Q?H.type.__asyncLoader().then(()=>!m.isUnmounted&&m2()):m2()}else{const m2=m.subTree=e6(m);w(null,m2,u,V,m,p,x),H.el=m2.el}if(U&&b2(U,p),!Q&&(F=B&&B.onVnodeMounted)){const m2=H;b2(()=>q2(F,J,m2),p)}(H.shapeFlag&256||J&&c3(J.vnode)&&J.vnode.shapeFlag&256)&&m.a&&b2(m.a,p),m.isMounted=!0,H=u=V=null}},b=m.effect=new j6(L,()=>Z6(d),m.scope),d=m.update=()=>b.run();d.id=m.uid,N1(m,!0),d()},i2=(m,H,u)=>{H.component=m;const V=m.vnode.props;m.vnode=H,m.next=null,Oo(m,H.props,V,u),qo(m,H.children,u),r4(),y8(m),s4()},K=(m,H,u,V,p,x,S,L,b=!1)=>{const d=m&&m.children,F=m?m.shapeFlag:0,A=H.children,{patchFlag:B,shapeFlag:$}=H;if(B>0){if(B&128){$1(d,A,u,V,p,x,S,L,b);return}else if(B&256){Q2(d,A,u,V,p,x,S,L,b);return}}$&8?(F&16&&d2(d,p,x),A!==d&&t(u,A)):F&16?$&16?$1(d,A,u,V,p,x,S,L,b):d2(d,p,x,!0):(F&8&&t(u,""),$&16&&D(A,u,V,p,x,S,L,b))},Q2=(m,H,u,V,p,x,S,L,b)=>{m=m||G1,H=H||G1;const d=m.length,F=H.length,A=Math.min(d,F);let B;for(B=0;B<A;B++){const $=H[B]=b?z1(H[B]):W2(H[B]);w(m[B],$,u,null,p,x,S,L,b)}d>F?d2(m,p,x,!0,!1,A):D(H,u,V,p,x,S,L,b,A)},$1=(m,H,u,V,p,x,S,L,b)=>{let d=0;const F=H.length;let A=m.length-1,B=F-1;for(;d<=A&&d<=B;){const $=m[d],U=H[d]=b?z1(H[d]):W2(H[d]);if(y1($,U))w($,U,u,null,p,x,S,L,b);else break;d++}for(;d<=A&&d<=B;){const $=m[A],U=H[B]=b?z1(H[B]):W2(H[B]);if(y1($,U))w($,U,u,null,p,x,S,L,b);else break;A--,B--}if(d>A){if(d<=B){const $=B+1,U=$<F?H[$].el:V;for(;d<=B;)w(null,H[d]=b?z1(H[d]):W2(H[d]),u,U,p,x,S,L,b),d++}}else if(d>B)for(;d<=A;)P2(m[d],p,x,!0),d++;else{const $=d,U=d,J=new Map;for(d=U;d<=B;d++){const w2=H[d]=b?z1(H[d]):W2(H[d]);w2.key!=null&&J.set(w2.key,d)}let Q,m2=0;const R2=B-U+1;let U1=!1,M8=0;const l4=new Array(R2);for(d=0;d<R2;d++)l4[d]=0;for(d=$;d<=A;d++){const w2=m[d];if(m2>=R2){P2(w2,p,x,!0);continue}let I2;if(w2.key!=null)I2=J.get(w2.key);else for(Q=U;Q<=B;Q++)if(l4[Q-U]===0&&y1(w2,H[Q])){I2=Q;break}I2===void 0?P2(w2,p,x,!0):(l4[I2-U]=d+1,I2>=M8?M8=I2:U1=!0,w(w2,H[I2],u,null,p,x,S,L,b),m2++)}const d8=U1?Ko(l4):G1;for(Q=d8.length-1,d=R2-1;d>=0;d--){const w2=U+d,I2=H[w2],C8=w2+1<F?H[w2+1].el:V;l4[d]===0?w(null,I2,u,C8,p,x,S,L,b):U1&&(Q<0||d!==d8[Q]?T2(I2,u,C8,2):Q--)}}},T2=(m,H,u,V,p=null)=>{const{el:x,type:S,transition:L,children:b,shapeFlag:d}=m;if(d&6){T2(m.component.subTree,H,u,V);return}if(d&128){m.suspense.move(H,u,V);return}if(d&64){S.move(m,H,u,O1);return}if(S===k2){r(x,H,u);for(let A=0;A<b.length;A++)T2(b[A],H,u,V);r(m.anchor,H,u);return}if(S===i6){C(m,H,u);return}if(V!==2&&d&1&&L)if(V===0)L.beforeEnter(x),r(x,H,u),b2(()=>L.enter(x),p);else{const{leave:A,delayLeave:B,afterLeave:$}=L,U=()=>r(x,H,u),J=()=>{A(x,()=>{U(),$&&$()})};B?B(x,U,J):J()}else r(x,H,u)},P2=(m,H,u,V=!1,p=!1)=>{const{type:x,props:S,ref:L,children:b,dynamicChildren:d,shapeFlag:F,patchFlag:A,dirs:B}=m;if(L!=null&&S6(L,null,u,m,!0),F&256){H.ctx.deactivate(m);return}const $=F&1&&B,U=!c3(m);let J;if(U&&(J=S&&S.onVnodeBeforeUnmount)&&q2(J,H,m),F&6)g1(m.component,u,V);else{if(F&128){m.suspense.unmount(u,V);return}$&&b1(m,null,H,"beforeUnmount"),F&64?m.type.remove(m,H,u,p,O1,V):d&&(x!==k2||A>0&&A&64)?d2(d,H,u,!1,!0):(x===k2&&A&384||!p&&F&16)&&d2(b,H,u),V&&W(m)}(U&&(J=S&&S.onVnodeUnmounted)||$)&&b2(()=>{J&&q2(J,H,m),$&&b1(m,null,H,"unmounted")},u)},W=m=>{const{type:H,el:u,anchor:V,transition:p}=m;if(H===k2){p2(u,V);return}if(H===i6){N(m);return}const x=()=>{s(u),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(m.shapeFlag&1&&p&&!p.persisted){const{leave:S,delayLeave:L}=p,b=()=>S(u,x);L?L(m.el,x,b):b()}else x()},p2=(m,H)=>{let u;for(;m!==H;)u=z(m),s(m),m=u;s(H)},g1=(m,H,u)=>{const{bum:V,scope:p,update:x,subTree:S,um:L}=m;V&&c6(V),p.stop(),x&&(x.active=!1,P2(S,m,H,u)),L&&b2(L,H),b2(()=>{m.isUnmounted=!0},H),H&&H.pendingBranch&&!H.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===H.pendingId&&(H.deps--,H.deps===0&&H.resolve())},d2=(m,H,u,V=!1,p=!1,x=0)=>{for(let S=x;S<m.length;S++)P2(m[S],H,u,V,p)},R4=m=>m.shapeFlag&6?R4(m.component.subTree):m.shapeFlag&128?m.suspense.next():z(m.anchor||m.el),p8=(m,H,u)=>{m==null?H._vnode&&P2(H._vnode,null,null,!0):w(H._vnode||null,m,H,null,null,null,u),y8(),s7(),H._vnode=m},O1={p:w,um:P2,m:T2,r:W,mt:f2,mc:D,pc:K,pbc:Y,n:R4,o:c};let Q3,J3;return a&&([Q3,J3]=a(O1)),{render:p8,hydrate:Q3,createApp:Eo(p8,Q3)}}function N1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function jo(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function S7(c,a,e=!1){const r=c.children,s=a.children;if(R(r)&&R(s))for(let i=0;i<r.length;i++){const n=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=z1(s[i]),l.el=n.el),e||S7(n,l)),l.type===S3&&(l.el=n.el)}}function Ko(c){const a=c.slice(),e=[0];let r,s,i,n,l;const f=c.length;for(r=0;r<f;r++){const o=c[r];if(o!==0){if(s=e[e.length-1],c[s]<o){a[r]=s,e.push(r);continue}for(i=0,n=e.length-1;i<n;)l=i+n>>1,c[e[l]]<o?i=l+1:n=l;o<c[e[i]]&&(i>0&&(a[r]=e[i-1]),e[i]=r)}}for(i=e.length,n=e[i-1];i-- >0;)e[i]=n,n=a[n];return e}const Yo=c=>c.__isTeleport,k2=Symbol.for("v-fgt"),S3=Symbol.for("v-txt"),O2=Symbol.for("v-cmt"),i6=Symbol.for("v-stc"),z4=[];let _2=null;function H2(c=!1){z4.push(_2=c?null:[])}function Xo(){z4.pop(),_2=z4[z4.length-1]||null}let d4=1;function U8(c){d4+=c}function w7(c){return c.dynamicChildren=d4>0?_2||G1:null,Xo(),d4>0&&_2&&_2.push(c),c}function u2(c,a,e,r,s,i){return w7(I(c,a,e,r,s,i,!0))}function Qo(c,a,e,r,s){return w7(o2(c,a,e,r,s,!0))}function w6(c){return c?c.__v_isVNode===!0:!1}function y1(c,a){return c.type===a.type&&c.key===a.key}const w3="__vInternal",k7=({key:c})=>c??null,e3=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?v2(c)||S2(c)||O(c)?{i:y2,r:c,k:a,f:!!e}:c:null);function I(c,a=null,e=null,r=0,s=null,i=c===k2?0:1,n=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&k7(a),ref:a&&e3(a),scopeId:g3,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:y2};return l?(s0(f,e),i&128&&c.normalize(f)):e&&(f.shapeFlag|=v2(e)?8:16),d4>0&&!n&&_2&&(f.patchFlag>0||i&6)&&f.patchFlag!==32&&_2.push(f),f}const o2=Jo;function Jo(c,a=null,e=null,r=0,s=null,i=!1){if((!c||c===Ho)&&(c=O2),w6(c)){const l=p1(c,a,!0);return e&&s0(l,e),d4>0&&!i&&_2&&(l.shapeFlag&6?_2[_2.indexOf(c)]=l:_2.push(l)),l.patchFlag|=-2,l}if(mt(c)&&(c=c.__vccOpts),a){a=Zo(a);let{class:l,style:f}=a;l&&!v2(l)&&(a.class=a1(l)),r2(f)&&(X5(f)&&!R(f)&&(f=h2({},f)),a.style=p3(f))}const n=v2(c)?1:zo(c)?128:Yo(c)?64:r2(c)?4:O(c)?2:0;return I(c,a,e,r,s,n,i,!0)}function Zo(c){return c?X5(c)||w3 in c?h2({},c):c:null}function p1(c,a,e=!1){const{props:r,ref:s,patchFlag:i,children:n}=c,l=a?at(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:l,key:l&&k7(l),ref:a&&a.ref?e&&s?R(s)?s.concat(e3(a)):[s,e3(a)]:e3(a):s,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==k2?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&p1(c.ssContent),ssFallback:c.ssFallback&&p1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function y7(c=" ",a=0){return o2(S3,null,c,a)}function ct(c="",a=!1){return a?(H2(),Qo(O2,null,c)):o2(O2,null,c)}function W2(c){return c==null||typeof c=="boolean"?o2(O2):R(c)?o2(k2,null,c.slice()):typeof c=="object"?z1(c):o2(S3,null,String(c))}function z1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:p1(c)}function s0(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(R(a))e=16;else if(typeof a=="object")if(r&65){const s=a.default;s&&(s._c&&(s._d=!1),s0(c,s()),s._c&&(s._d=!0));return}else{e=32;const s=a._;!s&&!(w3 in a)?a._ctx=y2:s===3&&y2&&(y2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else O(a)?(a={default:a,_ctx:y2},e=32):(a=String(a),r&64?(e=16,a=[y7(a)]):e=8);c.children=a,c.shapeFlag|=e}function at(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const s in r)if(s==="class")a.class!==r.class&&(a.class=a1([a.class,r.class]));else if(s==="style")a.style=p3([a.style,r.style]);else if(z3(s)){const i=a[s],n=r[s];n&&i!==n&&!(R(i)&&i.includes(n))&&(a[s]=i?[].concat(i,n):n)}else s!==""&&(a[s]=r[s])}return a}function q2(c,a,e,r=null){B2(c,a,7,[e,r])}const et=C7();let rt=0;function st(c,a,e){const r=c.type,s=(a?a.appContext:c.appContext)||et,i={uid:rt++,vnode:c,type:r,parent:a,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:g7(r,s),emitsOptions:n7(r,s),emit:null,emitted:null,propsDefaults:c2,inheritAttrs:r.inheritAttrs,ctx:c2,data:c2,props:c2,attrs:c2,slots:c2,refs:c2,setupState:c2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=lo.bind(null,i),c.ce&&c.ce(i),i}let M2=null;const it=()=>M2||y2;let i0,I1,I8="__VUE_INSTANCE_SETTERS__";(I1=u6()[I8])||(I1=u6()[I8]=[]),I1.push(c=>M2=c),i0=c=>{I1.length>1?I1.forEach(a=>a(c)):I1[0](c)};const Z1=c=>{i0(c),c.scope.on()},R1=()=>{M2&&M2.scope.off(),i0(null)};function A7(c){return c.vnode.shapeFlag&4}let C4=!1;function nt(c,a=!1){C4=a;const{props:e,children:r}=c.vnode,s=A7(c);$o(c,e,s,a),Io(c,r);const i=s?lt(c,a):void 0;return C4=!1,i}function lt(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=Q5(new Proxy(c.ctx,Ao));const{setup:r}=e;if(r){const s=c.setupContext=r.length>1?ot(c):null;Z1(c),r4();const i=h1(r,c,0,[c.props,s]);if(s4(),R1(),F5(i)){if(i.then(R1,R1),a)return i.then(n=>{q8(c,n,a)}).catch(n=>{C3(n,c,0)});c.asyncDep=i}else q8(c,i,a)}else T7(c,a)}function q8(c,a,e){O(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:r2(a)&&(c.setupState=c7(a)),T7(c,e)}let W8;function T7(c,a,e){const r=c.type;if(!c.render){if(!a&&W8&&!r.render){const s=r.template||e0(c).template;if(s){const{isCustomElement:i,compilerOptions:n}=c.appContext.config,{delimiters:l,compilerOptions:f}=r,o=h2(h2({isCustomElement:i,delimiters:l},n),f);r.render=W8(s,o)}}c.render=r.render||K2}{Z1(c),r4();try{To(c)}finally{s4(),R1()}}}function ft(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return N2(c,"get","$attrs"),a[e]}}))}function ot(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return ft(c)},slots:c.slots,emit:c.emit,expose:a}}function k3(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(c7(Q5(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in v4)return v4[e](c)},has(a,e){return e in a||e in v4}}))}function tt(c,a=!0){return O(c)?c.displayName||c.name:c.name||a&&c.__name}function mt(c){return O(c)&&"__vccOpts"in c}const n2=(c,a)=>ao(c,a,C4);function P7(c,a,e){const r=arguments.length;return r===2?r2(a)&&!R(a)?w6(a)?o2(c,null,[a]):o2(c,a):o2(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&w6(e)&&(e=[e]),o2(c,a,e))}const Ht=Symbol.for("v-scx"),vt=()=>a3(Ht),zt="3.3.13",ut="http://www.w3.org/2000/svg",A1=typeof document<"u"?document:null,G8=A1&&A1.createElement("template"),ht={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const s=a?A1.createElementNS(ut,c):A1.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:c=>A1.createTextNode(c),createComment:c=>A1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>A1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,s,i){const n=e?e.previousSibling:a.lastChild;if(s&&(s===i||s.nextSibling))for(;a.insertBefore(s.cloneNode(!0),e),!(s===i||!(s=s.nextSibling)););else{G8.innerHTML=r?`<svg>${c}</svg>`:c;const l=G8.content;if(r){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}a.insertBefore(l,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},t1="transition",f4="animation",L4=Symbol("_vtc"),n0=(c,{slots:a})=>P7(Co,Vt(c),a);n0.displayName="Transition";const F7={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};n0.props=h2({},v7,F7);const S1=(c,a=[])=>{R(c)?c.forEach(e=>e(...a)):c&&c(...a)},j8=c=>c?R(c)?c.some(a=>a.length>1):c.length>1:!1;function Vt(c){const a={};for(const P in c)P in F7||(a[P]=c[P]);if(c.css===!1)return a;const{name:e="v",type:r,duration:s,enterFromClass:i=`${e}-enter-from`,enterActiveClass:n=`${e}-enter-active`,enterToClass:l=`${e}-enter-to`,appearFromClass:f=i,appearActiveClass:o=n,appearToClass:t=l,leaveFromClass:v=`${e}-leave-from`,leaveActiveClass:z=`${e}-leave-active`,leaveToClass:M=`${e}-leave-to`}=c,y=pt(s),w=y&&y[0],E=y&&y[1],{onBeforeEnter:h,onEnter:g,onEnterCancelled:C,onLeave:N,onLeaveCancelled:_,onBeforeAppear:s2=h,onAppear:Z=g,onAppearCancelled:D=C}=a,q=(P,X,f2)=>{w1(P,X?t:l),w1(P,X?o:n),f2&&f2()},Y=(P,X)=>{P._isLeaving=!1,w1(P,v),w1(P,M),w1(P,z),X&&X()},z2=P=>(X,f2)=>{const U2=P?Z:g,t2=()=>q(X,P,f2);S1(U2,[X,t2]),K8(()=>{w1(X,P?f:i),m1(X,P?t:l),j8(U2)||Y8(X,r,w,t2)})};return h2(a,{onBeforeEnter(P){S1(h,[P]),m1(P,i),m1(P,n)},onBeforeAppear(P){S1(s2,[P]),m1(P,f),m1(P,o)},onEnter:z2(!1),onAppear:z2(!0),onLeave(P,X){P._isLeaving=!0;const f2=()=>Y(P,X);m1(P,v),Ct(),m1(P,z),K8(()=>{P._isLeaving&&(w1(P,v),m1(P,M),j8(N)||Y8(P,r,E,f2))}),S1(N,[P,f2])},onEnterCancelled(P){q(P,!1),S1(C,[P])},onAppearCancelled(P){q(P,!0),S1(D,[P])},onLeaveCancelled(P){Y(P),S1(_,[P])}})}function pt(c){if(c==null)return null;if(r2(c))return[n6(c.enter),n6(c.leave)];{const a=n6(c);return[a,a]}}function n6(c){return Mf(c)}function m1(c,a){a.split(/\s+/).forEach(e=>e&&c.classList.add(e)),(c[L4]||(c[L4]=new Set)).add(a)}function w1(c,a){a.split(/\s+/).forEach(r=>r&&c.classList.remove(r));const e=c[L4];e&&(e.delete(a),e.size||(c[L4]=void 0))}function K8(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let Mt=0;function Y8(c,a,e,r){const s=c._endId=++Mt,i=()=>{s===c._endId&&r()};if(e)return setTimeout(i,e);const{type:n,timeout:l,propCount:f}=dt(c,a);if(!n)return r();const o=n+"end";let t=0;const v=()=>{c.removeEventListener(o,z),i()},z=M=>{M.target===c&&++t>=f&&v()};setTimeout(()=>{t<f&&v()},l+1),c.addEventListener(o,z)}function dt(c,a){const e=window.getComputedStyle(c),r=y=>(e[y]||"").split(", "),s=r(`${t1}Delay`),i=r(`${t1}Duration`),n=X8(s,i),l=r(`${f4}Delay`),f=r(`${f4}Duration`),o=X8(l,f);let t=null,v=0,z=0;a===t1?n>0&&(t=t1,v=n,z=i.length):a===f4?o>0&&(t=f4,v=o,z=f.length):(v=Math.max(n,o),t=v>0?n>o?t1:f4:null,z=t?t===t1?i.length:f.length:0);const M=t===t1&&/\b(transform|all)(,|$)/.test(r(`${t1}Property`).toString());return{type:t,timeout:v,propCount:z,hasTransform:M}}function X8(c,a){for(;c.length<a.length;)c=c.concat(c);return Math.max(...a.map((e,r)=>Q8(e)+Q8(c[r])))}function Q8(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function Ct(){return document.body.offsetHeight}function Lt(c,a,e){const r=c[L4];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const l0=Symbol("_vod"),gt={beforeMount(c,{value:a},{transition:e}){c[l0]=c.style.display==="none"?"":c.style.display,e&&a?e.beforeEnter(c):o4(c,a)},mounted(c,{value:a},{transition:e}){e&&a&&e.enter(c)},updated(c,{value:a,oldValue:e},{transition:r}){!a!=!e&&(r?a?(r.beforeEnter(c),o4(c,!0),r.enter(c)):r.leave(c,()=>{o4(c,!1)}):o4(c,a))},beforeUnmount(c,{value:a}){o4(c,a)}};function o4(c,a){c.style.display=a?c[l0]:"none"}const xt=Symbol("");function bt(c,a,e){const r=c.style,s=v2(e);if(e&&!s){if(a&&!v2(a))for(const i in a)e[i]==null&&k6(r,i,"");for(const i in e)k6(r,i,e[i])}else{const i=r.display;if(s){if(a!==e){const n=r[xt];n&&(e+=";"+n),r.cssText=e}}else a&&c.removeAttribute("style");l0 in c&&(r.display=i)}}const J8=/\s*!important$/;function k6(c,a,e){if(R(e))e.forEach(r=>k6(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=Nt(c,a);J8.test(e)?c.setProperty(e4(r),e.replace(J8,""),"important"):c[r]=e}}const Z8=["Webkit","Moz","ms"],l6={};function Nt(c,a){const e=l6[a];if(e)return e;let r=X2(a);if(r!=="filter"&&r in c)return l6[a]=r;r=V3(r);for(let s=0;s<Z8.length;s++){const i=Z8[s]+r;if(i in c)return l6[a]=i}return a}const c5="http://www.w3.org/1999/xlink";function St(c,a,e,r,s){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(c5,a.slice(6,a.length)):c.setAttributeNS(c5,a,e);else{const i=bf(a);e==null||i&&!D5(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function wt(c,a,e,r,s,i,n){if(a==="innerHTML"||a==="textContent"){r&&n(r,s,i),c[a]=e??"";return}const l=c.tagName;if(a==="value"&&l!=="PROGRESS"&&!l.includes("-")){c._value=e;const o=l==="OPTION"?c.getAttribute("value"):c.value,t=e??"";o!==t&&(c.value=t),e==null&&c.removeAttribute(a);return}let f=!1;if(e===""||e==null){const o=typeof c[a];o==="boolean"?e=D5(e):e==null&&o==="string"?(e="",f=!0):o==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function kt(c,a,e,r){c.addEventListener(a,e,r)}function yt(c,a,e,r){c.removeEventListener(a,e,r)}const a5=Symbol("_vei");function At(c,a,e,r,s=null){const i=c[a5]||(c[a5]={}),n=i[a];if(r&&n)n.value=r;else{const[l,f]=Tt(a);if(r){const o=i[a]=Bt(r,s);kt(c,l,o,f)}else n&&(yt(c,l,n,f),i[a]=void 0)}}const e5=/(?:Once|Passive|Capture)$/;function Tt(c){let a;if(e5.test(c)){a={};let r;for(;r=c.match(e5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):e4(c.slice(2)),a]}let f6=0;const Pt=Promise.resolve(),Ft=()=>f6||(Pt.then(()=>f6=0),f6=Date.now());function Bt(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;B2(Rt(r,e.value),a,5,[r])};return e.value=c,e.attached=Ft(),e}function Rt(c,a){if(R(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>s=>!s._stopped&&r&&r(s))}else return a}const r5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Dt=(c,a,e,r,s=!1,i,n,l,f)=>{a==="class"?Lt(c,r,s):a==="style"?bt(c,e,r):z3(a)?I6(a)||At(c,a,e,r,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Et(c,a,r,s))?wt(c,a,r,i,n,l,f):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),St(c,a,r,s))};function Et(c,a,e,r){if(r)return!!(a==="innerHTML"||a==="textContent"||a in c&&r5(a)&&O(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const s=c.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return r5(a)&&v2(e)?!1:a in c}const _t=["ctrl","shift","alt","meta"],$t={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>_t.some(e=>c[`${e}Key`]&&!a.includes(e))},B7=(c,a)=>{const e=c._withMods||(c._withMods={}),r=a.join(".");return e[r]||(e[r]=(s,...i)=>{for(let n=0;n<a.length;n++){const l=$t[a[n]];if(l&&l(s,a))return}return c(s,...i)})},Ot=h2({patchProp:Dt},ht);let s5;function Ut(){return s5||(s5=Wo(Ot))}const It=(...c)=>{const a=Ut().createApp(...c),{mount:e}=a;return a.mount=r=>{const s=qt(r);if(!s)return;const i=a._component;!O(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const n=e(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),n},a};function qt(c){return v2(c)?document.querySelector(c):c}const o6=[{songName:"1.5 кг Отличного Пюре - Эмо.mp3",sort:181,bestParties:[{start:25,end:84}],notAggressive:!0},{songName:"Angel Vivaldi - A Martian Winter.mp3"},{songName:"Angel Vivaldi - An Erisian Autumn.mp3",sort:50,bestParties:[{start:78,end:104},{start:176,end:220},{start:246,end:268}],notAggressive:!0},{songName:"As I Lay Dying - Forever.mp3",sort:210,bestParties:[{start:0,end:25}]},{songName:"As I Lay Dying - Nothing Left [2007].mp3",sort:40,bestParties:[{start:0,end:57}]},{songName:"As I Lay Dying - The Sound Оf Truth.mp3",sort:60,bestParties:[{start:0,end:36},{start:59,end:121}]},{songName:"Aspirin Rose - Fucking Perfect (Pink cover).mp3"},{songName:"August Burns Red - A Shot Below The Belt.mp3",sort:142,bestParties:[{start:0,end:30},{start:90,end:114},{start:164,end:175}]},{songName:"August Burns Red - Barbarian.mp3",sort:20,bestParties:[{start:21,end:32},{start:70,end:88},{start:113,end:152}]},{songName:"August Burns Red - Consumer.mp3"},{songName:"August Burns Red - Indonesia.mp3",sort:141,bestParties:[{start:84,end:117},{start:161,end:180}]},{songName:"August Burns Red - Meridian.mp3",notAggressive:!0},{songName:"August Burns Red - Truth of a Liar.mp3"},{songName:"August Burns Red - Your Little Suburbia Is in Ruins.mp3",sort:70,bestParties:[{start:12,end:27},{start:107,end:125},{start:146,end:178}]},{songName:"Anaal Nathrakh - Between Shit and Piss We Are Born.mp3"},{songName:"Anaal Nathrakh - In The Constellation Of The Black Widow.mp3",sort:220,bestParties:[{start:65,end:85},{start:114,end:141}]},{songName:"Between the Buried and Me - All Bodies.mp3"},{songName:"Between The Buried And Me - Ants Of The Sky.mp3",sort:113,bestParties:[{start:0,end:108}]},{songName:"Between The Buried And Me - Sun Of Nothing.mp3"},{songName:"Between The Buried And Me - Swim To The Moon.mp3",sort:10,bestParties:[{start:135,end:160},{start:500,end:551},{start:982,end:1022}]},{songName:"Breakwater - Eleven.mp3"},{songName:"Breakwater - five.mp3"},{songName:"Bullet For My Valentine - Hand Of Blood.mp3"},{songName:"Cerebral Bore - The Bald Cadaver.mp3",sort:280,bestParties:[{start:5.5,end:50}]},{songName:"Children Of Bodom - Are You Dead Yet.mp3",sort:110,bestParties:[{start:82,end:114}]},{songName:"Cosmonauts Day - The Captain.mp3",notAggressive:!0},{songName:"Death In Vegas - Dirge.mp3"},{songName:"Dragonforce - The Flame of Youth.mp3",sort:120,bestParties:[{start:46,end:65},{start:289,end:317}]},{songName:"If These Trees Could Talk - From Roots to Needles.mp3",notAggressive:!0},{songName:"In Flames - Clayman.mp3",sort:130,bestParties:[{start:0,end:21}]},{songName:"In Flames - Reflect the Storm.mp3"},{songName:"Killing Floor - Abandon All.mp3"},{songName:"Killing Floor OST - Wake.mp3",notAggressive:!0},{songName:"Long Distance Calling - Black Paper Planes.mp3",notAggressive:!0},{songName:"Machine Head - Beautiful Mourning.mp3"},{songName:"Machine Head - Hallowed Be Thy Name.mp3"},{songName:"Machine Head - Halo.mp3"},{songName:"Ozoi The Maid - Unfortunately.mp3",sort:112,bestParties:[{start:59,end:84},{start:165,end:218},{start:240,end:253}]},{songName:"Ozoi The Maid Yakui The Maid - Lanterns.mp3",sort:111,bestParties:[{start:146,end:218}]},{songName:"Ozoi The Maid Yakui The Maid - Wonderland.mp3",sort:30,bestParties:[{start:115,end:243},{start:355,end:442}]},{songName:"Ozoi The Maid, Yakui The Maid - Frontier.mp3"},{songName:"Psygnosis - FIIIX 2.0.mp3"},{songName:"Psygnosis - Lost in Oblivion.mp3",sort:140,bestParties:[{start:292,end:356}]},{songName:"Psygnosis - MehMeh.mp3"},{songName:"Psygnosis - Phrase 7.mp3",notAggressive:!0},{songName:"Psygnosis - Synaptic Plasticity.mp3"},{songName:"Psygnosis - The Judgement.mp3"},{songName:"Raunchy - To the Lighthouse.mp3"},{songName:"Raunchy - Twelve Feet Tall.mp3",sort:150,bestParties:[{start:65,end:96}]},{songName:"Raunchy - Wasteland Discotheque.mp3",sort:190,bestParties:[{start:0,end:34},{start:63,end:101}]},{songName:"Rhapsody - The Mighty Ride of the Firelord.mp3"},{songName:"Rhapsody of Fire - Wisdom of the Kings.mp3"},{songName:"Rise Of The Northstar - The New Path.mp3"},{songName:"Rise Of The Northstar - What The Fuck.mp3",sort:160,bestParties:[{start:45,end:79}]},{songName:"Siberian Meat Grinder feat Distemper - Пламя в Груди.mp3",sort:211,bestParties:[{start:49,end:68}]},{songName:"The Doors - Alabama song.mp3",notAggressive:!0},{songName:"The Doors - The End.mp3",notAggressive:!0},{songName:"The Faceless - Shake The Disease.mp3"},{songName:"The Five Stars - Atom Bomb Baby.mp3",notAggressive:!0},{songName:"The HAARP Machine - Esoteric Agenda.mp3"},{songName:"Toundra - Bizancio Byzantium.mp3",sort:180,bestParties:[{start:127,end:224},{start:406,end:480}],notAggressive:!0},{songName:"URO & .corridoiokraut. - Nappi.mp3",notAggressive:!0},{songName:"What Mad Universe - Colossus.mp3",notAggressive:!0},{songName:"What Mad Universe - the world of leviathan.mp3",notAggressive:!0},{songName:"What Mad Universe - head of column.mp3",sort:170,bestParties:[{start:30,end:65}],notAggressive:!0},{songName:"What Mad Universe - mythical sacred firebird.mp3",notAggressive:!0},{songName:"What Mad Universe - Nebula My Love.mp3",sort:80,bestParties:[{start:162,end:246},{start:260,end:358}],notAggressive:!0},{songName:"What Mad Universe - Starborne.mp3",sort:90,bestParties:[{start:85,end:105},{start:144,end:185}],notAggressive:!0},{songName:"Within The Ruins - Ataxia II.mp3"},{songName:"Within The Ruins - Beautiful Agony.mp3"},{songName:"ZEROMANCER - Dr. Online.mp3"},{songName:"zYnthetic - Abandon All v3.mp3",sort:100,bestParties:[{start:0,end:30},{start:60,end:89}],notAggressive:!0},{songName:"zYnthetic - SSplug.mp3"}];function Wt(){N3(()=>{c.value=o6,a.value=o6.filter(C=>C.sort),e.value=o6.filter(C=>C.notAggressive),s.value=z.value.length});const c=C2([]),a=C2([]),e=C2([]),r=C2(0),s=C2(0),i=n2(()=>{const C="/player_with_my_favorite_music/";return z.value[r.value]?`${C}music/${z.value[r.value]}`:""}),n=n2(()=>[...a.value].sort((C,N)=>C.sort-N.sort)),l=d3([{label:"All music",id:1,url:"all"},{label:"Top",id:2,url:"top"},{label:"Top Shorts",id:4,url:"shorts"},{label:"Not aggressive",id:3,url:"not_aggressive"}]),f=C2(1);function o(C){!(f.value===4&&C.id===2)&&!(f.value===2&&C.id===4)&&(r.value=0),f.value=C.id,s.value=z.value.length}m7(()=>{});const t=n2(()=>{switch(f.value){case 1:return c.value.map(C=>C.songName);case 2:return n.value.map(C=>C.songName);case 3:return e.value.map(C=>C.songName);case 4:return n.value.filter(C=>C==null?void 0:C.bestParties).map(C=>C.songName)}}),v=n2(()=>{var C;return f.value===4&&((C=n.value[r.value])==null?void 0:C.bestParties)||[]}),z=n2(()=>h.value?M():t.value);function M(){return t.value.map(C=>({value:C,sort:Math.random()})).sort((C,N)=>C.sort-N.sort).map(({value:C})=>C)}function y(){r.value+=1,r.value>=z.value.length&&(r.value=0)}function w(){r.value=(r.value-1+z.value.length)%z.value.length}function E(C){r.value=C}const h=C2(!1);function g(){h.value=!h.value}return{totalNumbSongs:s,defaultTrackList:c,topTrackList:a,currentBestParties:v,nextTrack:y,previousTrack:w,pathToCurrentFile:i,sortingTopTrackList:n,currentTrackIndex:r,changeTab:o,selectTrack:E,tabsOption:l,tabSelected:f,isRandomTracks:h,handlerRandomBtn:g,currentTracks:z}}const Gt=n1({name:"TrackList",props:{currentTracks:{type:Array,default:()=>[]},currentTrackIndex:{type:Number,default:0}},emits:["select-track-from-list"],setup(c,{emit:a}){const e=n2(()=>{var i;return(i=c.currentTracks)==null?void 0:i.map(n=>{const l=n.lastIndexOf("/"),f=n==null?void 0:n.lastIndexOf(".");return n&&n.substring(l+1,f)||""})});X1(()=>c.currentTrackIndex,()=>{r()});async function r(){await e7();const i=document.querySelector(".selected");i==null||i.scrollIntoView({behavior:"smooth",block:"center"})}function s(i){a("select-track-from-list",i)}return{currentTracksWithCorrectNames:e,selectTrackFromList:s}}}),L1=(c,a)=>{const e=c.__vccOpts||c;for(const[r,s]of a)e[r]=s;return e},jt=["onClick"];function Kt(c,a,e,r,s,i){return H2(),u2("div",null,[I("ul",{ref:"sidebarRef",class:"sidebar",onClick:a[0]||(a[0]=B7(()=>{},["stop"]))},[(H2(!0),u2(k2,null,a0(c.currentTracksWithCorrectNames,(n,l)=>(H2(),u2("li",{key:l,class:a1({selected:l===c.currentTrackIndex}),onClick:f=>c.selectTrackFromList(l)},Y2(l+1)+". "+Y2(n),11,jt))),128))],512)])}const Yt=L1(Gt,[["render",Kt],["__scopeId","data-v-463b579b"]]),Xt=n1({props:{tabOptions:{type:Array,default:()=>[]},tabSelected:{type:Number,default:1}},emits:["change-tab"],setup(c,{emit:a}){function e(r){c.tabSelected!==r.id&&a("change-tab",r)}return{btnHandler:e}}}),Qt={class:"tabs"},Jt=["onClick"];function Zt(c,a,e,r,s,i){return H2(),u2("div",Qt,[(H2(!0),u2(k2,null,a0(c.tabOptions,(n,l)=>(H2(),u2("button",{key:l,class:a1({active:n.id===c.tabSelected}),onClick:f=>c.btnHandler(n)},Y2(n.label),11,Jt))),128))])}const cm=L1(Xt,[["render",Zt],["__scopeId","data-v-d0076b1d"]]),am="modulepreload",em=function(c){return"/player_with_my_favorite_music/"+c},i5={},J2=function(a,e,r){let s=Promise.resolve();if(e&&e.length>0){const i=document.getElementsByTagName("link");s=Promise.all(e.map(n=>{if(n=em(n),n in i5)return;i5[n]=!0;const l=n.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(!!r)for(let v=i.length-1;v>=0;v--){const z=i[v];if(z.href===n&&(!l||z.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${f}`))return;const t=document.createElement("link");if(t.rel=l?"stylesheet":am,l||(t.as="script",t.crossOrigin=""),t.href=n,document.head.appendChild(t),l)return new Promise((v,z)=>{t.addEventListener("load",v),t.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${n}`)))})}))}return s.then(()=>a()).catch(i=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i})},rm=n1({name:"MainInfoBand",props:{songName:{type:String,default:""}},setup(c){const a=C2({});N3(async()=>{const i=Object.assign({"/src/assets/images/1.5 кг Отличного Пюре.jpg":()=>J2(()=>import("./1.5 кг Отличного Пюре-OtALhitf.js"),__vite__mapDeps([])),"/src/assets/images/Anaal Nathrakh.jpeg":()=>J2(()=>import("./Anaal Nathrakh-7BxhGCGJ.js"),__vite__mapDeps([])),"/src/assets/images/As I Lay Dying.jpg":()=>J2(()=>import("./As I Lay Dying-28Nx7ZD0.js"),__vite__mapDeps([])),"/src/assets/images/August Burns Red.jpg":()=>J2(()=>import("./August Burns Red-MIqwgacb.js"),__vite__mapDeps([])),"/src/assets/images/Between The Buried And Me.webp":()=>J2(()=>import("./Between The Buried And Me-TSs49cb7.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid Yakui The Maid.jpg":()=>J2(()=>import("./Ozoi The Maid Yakui The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid.jpg":()=>J2(()=>import("./Ozoi The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/What Mad Universe.jpg":()=>J2(()=>import("./What Mad Universe-s6ECnjUY.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.png":()=>J2(()=>import("./default_logo-9B2Fgjf-.js"),__vite__mapDeps([]))});for(const n in i){const l=n.replace(/^.*\/(.*)\.\w+$/,"$1");a.value[l]=(await i[n]()).default}});const e=n2(()=>{var n;const i=(n=c.songName)==null?void 0:n.lastIndexOf(".");return c.songName&&c.songName.substring(0,i)||""}),r=n2(()=>{const[i,n]=e.value.split(" - ");return{bandName:i,songName:n}}),s=n2(()=>{const{bandName:i}=r.value;return a.value[i]||a.value.default_logo});return X1(()=>c.songName,()=>{var i,n;"mediaSession"in navigator&&s.value&&(navigator.mediaSession.metadata=new MediaMetadata({title:((i=r.value)==null?void 0:i.songName)||"",artist:((n=r.value)==null?void 0:n.bandName)||"",artwork:[{src:s.value,sizes:"96x96",type:"image/jpg"},{src:s.value,sizes:"128x128",type:"image/png"},{src:s.value,sizes:"192x192",type:"image/png"},{src:s.value,sizes:"256x256",type:"image/png"},{src:s.value,sizes:"384x384",type:"image/png"},{src:s.value,sizes:"512x512",type:"image/png"}]}))}),{getInfoBand:r,getLogoImage:s}}}),sm=["src"],im={class:"artist-info"},nm={class:"band"},lm={class:"song"};function fm(c,a,e,r,s,i){return H2(),u2("div",null,[I("img",{src:c.getLogoImage,class:"album-image",alt:""},null,8,sm),I("div",im,[I("div",nm,Y2(c.getInfoBand.bandName),1),I("div",lm,Y2(c.getInfoBand.songName),1)])])}const om=L1(rm,[["render",fm],["__scopeId","data-v-1e275766"]]),tm=n1({name:"VolumeControl",props:{volume:{type:Number,default:.8}},emits:["volume-change"],setup(c,{emit:a}){const e=n2(()=>c.volume*100),r=n2(()=>c.volume>0?'<i class="fas fa-volume-up"/>':'<i class="fas fa-volume-off"/>');function s(l){a("volume-change",l.target.value/100)}function i(l){a("volume-change",l)}function n(){c.volume>0?i(0):i(.8)}return{convertToValue:e,volumeHandler:s,onIconVolumeClick:n,iconVolume:r}}}),mm={class:"volume-control"},Hm=["innerHTML"],vm=["value"];function zm(c,a,e,r,s,i){return H2(),u2("div",mm,[I("button",{class:"player-button",onClick:a[0]||(a[0]=(...n)=>c.onIconVolumeClick&&c.onIconVolumeClick(...n))},[I("span",{innerHTML:c.iconVolume},null,8,Hm)]),I("input",{type:"range",value:c.convertToValue,min:"0",max:"100",step:"1",onInput:a[1]||(a[1]=(...n)=>c.volumeHandler&&c.volumeHandler(...n))},null,40,vm)])}const um=L1(tm,[["render",zm],["__scopeId","data-v-f820814e"]]),hm=n1({name:"ProgressControl",props:{currentTime:{type:Number,default:0},totalTime:{type:Number,default:0},bestParties:{type:Array,default:()=>[]}},emits:["time-change","time-change-line"],setup(c,{emit:a}){const e=n2(()=>c.currentTime/c.totalTime*100),r=n2(()=>l(c.currentTime)),s=n2(()=>""),i=n2(()=>l(c.totalTime)),n=n2(()=>{var v;const t=(100/c.totalTime).toFixed(2);return(v=c.bestParties)==null?void 0:v.map(z=>({start:`${z.start*t}%`,end:`${100-z.end*t}%`}))});function l(t){const v=Math.floor(t/60),z=Math.floor(t%60);return`${v}:${String(z).padStart(2,"0")}`}function f(t){const v=t.currentTarget.parentNode,{clientWidth:z}=v,M=v.getBoundingClientRect(),y=t.clientX-M.left;a("time-change-line",y/z)}function o(t){a("time-change",t)}return{convertToValue:e,convertCurrentTime:r,convertTotalTime:i,timeHandler:o,timeHandlerEmit:f,convertBestPartiesInPercentage:n,convertCurrentTimeSeconds:s}}}),Vm={class:"progress-control"},pm=["value"],Mm={class:"time-display"},dm={key:0,class:"line"};function Cm(c,a,e,r,s,i){return H2(),u2("div",Vm,[I("input",{id:"progressRange",type:"range",min:"0",max:"100",value:c.convertToValue,step:"1",onInput:a[0]||(a[0]=(...n)=>c.timeHandler&&c.timeHandler(...n))},null,40,pm),I("div",Mm,[I("span",null,Y2(c.convertCurrentTime),1),I("span",null,Y2(c.convertCurrentTimeSeconds),1),I("span",null,Y2(c.convertTotalTime),1)]),c.bestParties.length?(H2(),u2("div",dm,[(H2(!0),u2(k2,null,a0(c.convertBestPartiesInPercentage,(n,l)=>(H2(),u2("div",{key:l,style:p3({left:n.start,right:n.end}),class:"best-section",onClick:a[1]||(a[1]=(...f)=>c.timeHandlerEmit&&c.timeHandlerEmit(...f))},null,4))),128))])):ct("",!0)])}const Lm=L1(hm,[["render",Cm],["__scopeId","data-v-02246172"]]),gm=n1({name:"MainControl",props:{isPlaying:{type:Boolean,default:!1}},emits:["previous","play-pause","next"],setup(c,{emit:a}){function e(){a("previous")}const r=n2(()=>c.isPlaying?'<i class="fas fa-pause"/>':' <i class="fas fa-play"/>');function s(){a("play-pause")}function i(){a("next")}return{previousButtonHandler:e,playerButtonHandler:s,iconPlayerButton:r,nextButtonHandler:i}}}),R7=c=>(l7("data-v-ce3c9d83"),c=c(),f7(),c),xm={class:"main-control"},bm=R7(()=>I("i",{class:"fas fa-step-backward"},null,-1)),Nm=[bm],Sm=["innerHTML"],wm=R7(()=>I("i",{class:"fas fa-step-forward"},null,-1)),km=[wm];function ym(c,a,e,r,s,i){return H2(),u2("div",xm,[I("button",{class:"player-button",onClick:a[0]||(a[0]=(...n)=>c.previousButtonHandler&&c.previousButtonHandler(...n))},Nm),I("button",{class:"player-button",onClick:a[1]||(a[1]=(...n)=>c.playerButtonHandler&&c.playerButtonHandler(...n))},[I("span",{innerHTML:c.iconPlayerButton},null,8,Sm)]),I("button",{class:"player-button",onClick:a[2]||(a[2]=(...n)=>c.nextButtonHandler&&c.nextButtonHandler(...n))},km)])}const Am=L1(gm,[["render",ym],["__scopeId","data-v-ce3c9d83"]]),Tm=n1({name:"OtherControl",props:{currentNumbSong:{type:Number,default:0},totalNumbSongs:{type:Number,default:0},isRandomTracks:{type:Boolean,default:!1},isRepeatMode:{type:Boolean,default:!1},isShowTrackList:{type:Boolean,default:!1},isDarkTheme:{type:Boolean,default:!1}},emits:["random-click","show-list-click","repeat-mode-click","change-theme"],setup(c,{emit:a}){function e(){a("random-click")}function r(){a("repeat-mode-click")}function s(){a("show-list-click",event)}function i(){a("change-theme",event)}return{iconClickRandomHandler:e,iconClickRepeatModeHandler:r,iconClickShowListHandler:s,iconClickChangeThemeHandler:i}}}),i4=c=>(l7("data-v-f71f9cb9"),c=c(),f7(),c),Pm={class:"other"},Fm=i4(()=>I("i",{class:"fas fa-shuffle"},null,-1)),Bm=[Fm],Rm=i4(()=>I("i",{class:"fas fa-repeat"},null,-1)),Dm=[Rm],Em={class:"song-display"},_m=i4(()=>I("i",{class:"fa-solid fa-toggle-off"},null,-1)),$m=[_m],Om=i4(()=>I("i",{class:"fa-solid fa-toggle-on"},null,-1)),Um=[Om],Im=i4(()=>I("i",{class:"fas fa-bars fa-rotate-90"},null,-1)),qm=[Im],Wm=i4(()=>I("i",{class:"fas fa-bars"},null,-1)),Gm=[Wm];function jm(c,a,e,r,s,i){return H2(),u2("div",Pm,[I("button",{class:a1({active:c.isRandomTracks}),onClick:a[0]||(a[0]=(...n)=>c.iconClickRandomHandler&&c.iconClickRandomHandler(...n))},Bm,2),I("button",{class:a1({active:c.isRepeatMode}),onClick:a[1]||(a[1]=(...n)=>c.iconClickRepeatModeHandler&&c.iconClickRepeatModeHandler(...n))},Dm,2),I("div",Em,[I("span",null,Y2(c.currentNumbSong),1),y7("/"),I("span",null,Y2(c.totalNumbSongs),1)]),c.isDarkTheme?(H2(),u2("button",{key:1,onClick:a[3]||(a[3]=(...n)=>c.iconClickChangeThemeHandler&&c.iconClickChangeThemeHandler(...n))},Um)):(H2(),u2("button",{key:0,onClick:a[2]||(a[2]=(...n)=>c.iconClickChangeThemeHandler&&c.iconClickChangeThemeHandler(...n))},$m)),c.isShowTrackList?(H2(),u2("button",{key:2,class:a1({active:c.isShowTrackList}),onClick:a[4]||(a[4]=(...n)=>c.iconClickShowListHandler&&c.iconClickShowListHandler(...n))},qm,2)):(H2(),u2("button",{key:3,onClick:a[5]||(a[5]=B7((...n)=>c.iconClickShowListHandler&&c.iconClickShowListHandler(...n),["stop"]))},Gm))])}const Km=L1(Tm,[["render",jm],["__scopeId","data-v-f71f9cb9"]]),Ym=n1({name:"MainComponent",components:{TrackList:Yt,PageTabs:cm,MainInfoBand:om,VolumeControl:um,ProgressControl:Lm,MainControl:Am,OtherControl:Km},setup(){const{currentBestParties:c,nextTrack:a,previousTrack:e,pathToCurrentFile:r,sortingTopTrackList:s,currentTrackIndex:i,changeTab:n,selectTrack:l,tabsOption:f,tabSelected:o,isRandomTracks:t,handlerRandomBtn:v,totalNumbSongs:z,currentTracks:M}=Wt();N3(async()=>{w(),h.value=document.getElementById("audioPlayer");const W=[["play",()=>{U2(),navigator.mediaSession.playbackState="playing"}],["pause",()=>{U2(),navigator.mediaSession.playbackState="paused"}],["nexttrack",()=>{a()}],["previoustrack",()=>{e()}],["seekto",p2=>{h.value.currentTime=p2.seekTime}]];for(const[p2,g1]of W)try{navigator.mediaSession.setActionHandler(p2,g1)}catch{console.log(`The media session action "${p2}" is not supported yet.`)}});const y=C2(!1);function w(){(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")==="dark"?y.value=!0:y.value=!1}async function E(){y.value=!y.value}const h=C2(null),g=C2(0),C=C2(.8);function N(W){P(W),f2.value&&X()}function _(){T2.value?h.value.currentTime=0:a()}function s2(W){if(h.value){const p2=W.target;h.value.currentTime=Number(p2.value)/100*(h.value.duration||0)}}function Z(W){h.value&&(h.value.currentTime=W*(h.value.duration||0))}function D(W){g.value=W.target.currentTime}function q(W){C.value=W.target.volume}function Y(W){h.value.volume=W}const z2=C2(0);function P(W){const p2=W.target;z2.value=p2.duration,navigator.mediaSession.setPositionState({duration:p2.duration,playbackRate:1,position:0})}function X(){var W;try{(W=h.value)==null||W.play().then(p2=>p2)}catch(p2){console.log("error",p2)}}const f2=C2(!1);function U2(){var W;f2.value=!f2.value,f2.value?X():(W=h.value)==null||W.pause()}function t2(W){console.log(W);const p2=s.value[i.value].bestParties;for(let g1=0;g1<p2.length;g1++){const d2=p2[g1];if(W<d2.start){console.log("start"),h.value.currentTime=d2.start;return}else if(W>=d2.start&&W<=d2.end){console.log("continue"),W>=d2.end-2;return}}console.log("nextTrack"),_()}m7(()=>{o.value===4&&f2.value&&i&&t2(g.value)});function i2(){h.value.currentTime<=20||o.value===4?e():h.value.currentTime=0}const K=C2(!1);function Q2(){K.value=!K.value}function $1(W){l(W),f2.value?X():U2()}const T2=C2(!1);function P2(){T2.value=!T2.value}return{audioPlayer:h,totalNumbSongs:z,isPlaying:f2,currentTime:g,volume:C,onVolumeUpdate:q,totalTime:z2,isRandomTracks:t,pathToCurrentFile:r,currentTracks:M,currentTrackIndex:i,handlerCanPlay:N,handlerEnded:_,handlerTimeChange:s2,handlerTimeChangeLine:Z,onTimeUpdate:D,setVolume:Y,setTotalTime:P,playTrack:X,togglePlayPause:U2,nextTrack:a,previousTrackHandler:i2,handlerRandomBtn:v,handlerShowListBtn:Q2,handlerSelectTrack:$1,tabsOption:f,tabSelected:o,changeTab:n,isShowTrackList:K,repeatModeChange:P2,isRepeatMode:T2,currentBestParties:c,isDarkTheme:y,handlerChangeThemeBtn:E}}}),Xm={class:"container"},Qm=["src"];function Jm(c,a,e,r,s,i){const n=x1("TrackList"),l=x1("PageTabs"),f=x1("MainInfoBand"),o=x1("VolumeControl"),t=x1("ProgressControl"),v=x1("MainControl"),z=x1("OtherControl");return H2(),u2("main",{class:a1([c.isDarkTheme?"dark":"light"]),onClick:a[4]||(a[4]=M=>c.isShowTrackList=!1)},[I("div",Xm,[o2(n0,{name:"slide"},{default:o7(()=>[Vo(o2(n,{"current-track-index":c.currentTrackIndex,"current-tracks":c.currentTracks,class:"track_list",onSelectTrackFromList:c.handlerSelectTrack},null,8,["current-track-index","current-tracks","onSelectTrackFromList"]),[[gt,c.isShowTrackList]])]),_:1}),o2(l,{"tab-selected":c.tabSelected,"tab-options":c.tabsOption,onChangeTab:c.changeTab},null,8,["tab-selected","tab-options","onChangeTab"]),o2(f,{"song-name":c.currentTracks[c.currentTrackIndex]},null,8,["song-name"]),o2(o,{volume:c.volume,onVolumeChange:c.setVolume},null,8,["volume","onVolumeChange"]),o2(t,{"best-parties":c.currentBestParties,"current-time":c.currentTime,"total-time":c.totalTime,onTimeChange:c.handlerTimeChange,onTimeChangeLine:c.handlerTimeChangeLine},null,8,["best-parties","current-time","total-time","onTimeChange","onTimeChangeLine"]),o2(v,{"is-playing":c.isPlaying,onPrevious:c.previousTrackHandler,onNext:c.nextTrack,onPlayPause:c.togglePlayPause},null,8,["is-playing","onPrevious","onNext","onPlayPause"]),o2(z,{"current-numb-song":c.currentTrackIndex+1,"total-numb-songs":c.totalNumbSongs,"is-random-tracks":c.isRandomTracks,"is-show-track-list":c.isShowTrackList,"is-repeat-mode":c.isRepeatMode,"is-dark-theme":c.isDarkTheme,onRepeatModeClick:c.repeatModeChange,onRandomClick:c.handlerRandomBtn,onShowListClick:c.handlerShowListBtn,onChangeTheme:c.handlerChangeThemeBtn},null,8,["current-numb-song","total-numb-songs","is-random-tracks","is-show-track-list","is-repeat-mode","is-dark-theme","onRepeatModeClick","onRandomClick","onShowListClick","onChangeTheme"]),I("audio",{id:"audioPlayer",ref:"audioPlayer",src:c.pathToCurrentFile,preload:"metadata",onVolumechange:a[0]||(a[0]=(...M)=>c.onVolumeUpdate&&c.onVolumeUpdate(...M)),onTimeupdate:a[1]||(a[1]=(...M)=>c.onTimeUpdate&&c.onTimeUpdate(...M)),onCanplay:a[2]||(a[2]=(...M)=>c.handlerCanPlay&&c.handlerCanPlay(...M)),onEnded:a[3]||(a[3]=(...M)=>c.handlerEnded&&c.handlerEnded(...M))},null,40,Qm)])],2)}const Zm=L1(Ym,[["render",Jm]]);function n5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function k(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?n5(Object(e),!0).forEach(function(r){V2(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):n5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function t3(c){"@babel/helpers - typeof";return t3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},t3(c)}function cH(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function l5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function aH(c,a,e){return a&&l5(c.prototype,a),e&&l5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function V2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function f0(c,a){return rH(c)||iH(c,a)||D7(c,a)||lH()}function w4(c){return eH(c)||sH(c)||D7(c)||nH()}function eH(c){if(Array.isArray(c))return y6(c)}function rH(c){if(Array.isArray(c))return c}function sH(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function iH(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,i=!1,n,l;try{for(e=e.call(c);!(s=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));s=!0);}catch(f){i=!0,l=f}finally{try{!s&&e.return!=null&&e.return()}finally{if(i)throw l}}return r}}function D7(c,a){if(c){if(typeof c=="string")return y6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return y6(c,a)}}function y6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function nH(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lH(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var f5=function(){},o0={},E7={},_7=null,$7={mark:f5,measure:f5};try{typeof window<"u"&&(o0=window),typeof document<"u"&&(E7=document),typeof MutationObserver<"u"&&(_7=MutationObserver),typeof performance<"u"&&($7=performance)}catch{}var fH=o0.navigator||{},o5=fH.userAgent,t5=o5===void 0?"":o5,M1=o0,e2=E7,m5=_7,q4=$7;M1.document;var f1=!!e2.documentElement&&!!e2.head&&typeof e2.addEventListener=="function"&&typeof e2.createElement=="function",O7=~t5.indexOf("MSIE")||~t5.indexOf("Trident/"),W4,G4,j4,K4,Y4,r1="___FONT_AWESOME___",A6=16,U7="fa",I7="svg-inline--fa",E1="data-fa-i2svg",T6="data-fa-pseudo-element",oH="data-fa-pseudo-element-pending",t0="data-prefix",m0="data-icon",H5="fontawesome-i2svg",tH="async",mH=["HTML","HEAD","STYLE","SCRIPT"],q7=function(){try{return!0}catch{return!1}}(),a2="classic",l2="sharp",H0=[a2,l2];function k4(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[a2]}})}var g4=k4((W4={},V2(W4,a2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),V2(W4,l2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),W4)),x4=k4((G4={},V2(G4,a2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),V2(G4,l2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),G4)),b4=k4((j4={},V2(j4,a2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),V2(j4,l2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),j4)),HH=k4((K4={},V2(K4,a2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),V2(K4,l2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),K4)),vH=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,W7="fa-layers-text",zH=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,uH=k4((Y4={},V2(Y4,a2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),V2(Y4,l2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Y4)),G7=[1,2,3,4,5,6,7,8,9,10],hH=G7.concat([11,12,13,14,15,16,17,18,19,20]),VH=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],P1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},N4=new Set;Object.keys(x4[a2]).map(N4.add.bind(N4));Object.keys(x4[l2]).map(N4.add.bind(N4));var pH=[].concat(H0,w4(N4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",P1.GROUP,P1.SWAP_OPACITY,P1.PRIMARY,P1.SECONDARY]).concat(G7.map(function(c){return"".concat(c,"x")})).concat(hH.map(function(c){return"w-".concat(c)})),u4=M1.FontAwesomeConfig||{};function MH(c){var a=e2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function dH(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(e2&&typeof e2.querySelector=="function"){var CH=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];CH.forEach(function(c){var a=f0(c,2),e=a[0],r=a[1],s=dH(MH(e));s!=null&&(u4[r]=s)})}var j7={styleDefault:"solid",familyDefault:"classic",cssPrefix:U7,replacementClass:I7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};u4.familyPrefix&&(u4.cssPrefix=u4.familyPrefix);var c4=k(k({},j7),u4);c4.autoReplaceSvg||(c4.observeMutations=!1);var T={};Object.keys(j7).forEach(function(c){Object.defineProperty(T,c,{enumerable:!0,set:function(e){c4[c]=e,h4.forEach(function(r){return r(T)})},get:function(){return c4[c]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(a){c4.cssPrefix=a,h4.forEach(function(e){return e(T)})},get:function(){return c4.cssPrefix}});M1.FontAwesomeConfig=T;var h4=[];function LH(c){return h4.push(c),function(){h4.splice(h4.indexOf(c),1)}}var H1=A6,j2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gH(c){if(!(!c||!f1)){var a=e2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=e2.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}return e2.head.insertBefore(a,r),c}}var xH="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function S4(){for(var c=12,a="";c-- >0;)a+=xH[Math.random()*62|0];return a}function n4(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function v0(c){return c.classList?n4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function K7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bH(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(K7(c[e]),'" ')},"").trim()}function y3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function z0(c){return c.size!==j2.size||c.x!==j2.x||c.y!==j2.y||c.rotate!==j2.rotate||c.flipX||c.flipY}function NH(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(n," ").concat(l)},o={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:f,path:o}}function SH(c){var a=c.transform,e=c.width,r=e===void 0?A6:e,s=c.height,i=s===void 0?A6:s,n=c.startCentered,l=n===void 0?!1:n,f="";return l&&O7?f+="translate(".concat(a.x/H1-r/2,"em, ").concat(a.y/H1-i/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/H1,"em), calc(-50% + ").concat(a.y/H1,"em)) "):f+="translate(".concat(a.x/H1,"em, ").concat(a.y/H1,"em) "),f+="scale(".concat(a.size/H1*(a.flipX?-1:1),", ").concat(a.size/H1*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var wH=`:root, :host {
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
}`;function Y7(){var c=U7,a=I7,e=T.cssPrefix,r=T.replacementClass,s=wH;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(l,".".concat(r))}return s}var v5=!1;function t6(){T.autoAddCss&&!v5&&(gH(Y7()),v5=!0)}var kH={mixout:function(){return{dom:{css:Y7,insertCss:t6}}},hooks:function(){return{beforeDOMElementCreation:function(){t6()},beforeI2svg:function(){t6()}}}},s1=M1||{};s1[r1]||(s1[r1]={});s1[r1].styles||(s1[r1].styles={});s1[r1].hooks||(s1[r1].hooks={});s1[r1].shims||(s1[r1].shims=[]);var $2=s1[r1],X7=[],yH=function c(){e2.removeEventListener("DOMContentLoaded",c),m3=1,X7.map(function(a){return a()})},m3=!1;f1&&(m3=(e2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(e2.readyState),m3||e2.addEventListener("DOMContentLoaded",yH));function AH(c){f1&&(m3?setTimeout(c,0):X7.push(c))}function y4(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?K7(c):"<".concat(a," ").concat(bH(r),">").concat(i.map(y4).join(""),"</").concat(a,">")}function z5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var TH=function(a,e){return function(r,s,i,n){return a.call(e,r,s,i,n)}},m6=function(a,e,r,s){var i=Object.keys(a),n=i.length,l=s!==void 0?TH(e,s):e,f,o,t;for(r===void 0?(f=1,t=a[i[0]]):(f=0,t=r);f<n;f++)o=i[f],t=l(t,a[o],o,a);return t};function PH(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function P6(c){var a=PH(c);return a.length===1?a[0].toString(16):null}function FH(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function u5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function F6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=u5(a);typeof $2.hooks.addPack=="function"&&!s?$2.hooks.addPack(c,u5(a)):$2.styles[c]=k(k({},$2.styles[c]||{}),i),c==="fas"&&F6("fa",a)}var X4,Q4,J4,q1=$2.styles,BH=$2.shims,RH=(X4={},V2(X4,a2,Object.values(b4[a2])),V2(X4,l2,Object.values(b4[l2])),X4),u0=null,Q7={},J7={},Z7={},cc={},ac={},DH=(Q4={},V2(Q4,a2,Object.keys(g4[a2])),V2(Q4,l2,Object.keys(g4[l2])),Q4);function EH(c){return~pH.indexOf(c)}function _H(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!EH(s)?s:null}var ec=function(){var a=function(i){return m6(q1,function(n,l,f){return n[f]=m6(l,i,{}),n},{})};Q7=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var l=i[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){s[f.toString(16)]=n})}return s}),J7=a(function(s,i,n){if(s[n]=n,i[2]){var l=i[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){s[f]=n})}return s}),ac=a(function(s,i,n){var l=i[2];return s[n]=n,l.forEach(function(f){s[f]=n}),s});var e="far"in q1||T.autoFetchSvg,r=m6(BH,function(s,i){var n=i[0],l=i[1],f=i[2];return l==="far"&&!e&&(l="fas"),typeof n=="string"&&(s.names[n]={prefix:l,iconName:f}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:l,iconName:f}),s},{names:{},unicodes:{}});Z7=r.names,cc=r.unicodes,u0=A3(T.styleDefault,{family:T.familyDefault})};LH(function(c){u0=A3(c.styleDefault,{family:T.familyDefault})});ec();function h0(c,a){return(Q7[c]||{})[a]}function $H(c,a){return(J7[c]||{})[a]}function F1(c,a){return(ac[c]||{})[a]}function rc(c){return Z7[c]||{prefix:null,iconName:null}}function OH(c){var a=cc[c],e=h0("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function d1(){return u0}var V0=function(){return{prefix:null,iconName:null,rest:[]}};function A3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?a2:e,s=g4[r][c],i=x4[r][c]||x4[r][s],n=c in $2.styles?c:null;return i||n||null}var h5=(J4={},V2(J4,a2,Object.keys(b4[a2])),V2(J4,l2,Object.keys(b4[l2])),J4);function T3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},V2(a,a2,"".concat(T.cssPrefix,"-").concat(a2)),V2(a,l2,"".concat(T.cssPrefix,"-").concat(l2)),a),n=null,l=a2;(c.includes(i[a2])||c.some(function(o){return h5[a2].includes(o)}))&&(l=a2),(c.includes(i[l2])||c.some(function(o){return h5[l2].includes(o)}))&&(l=l2);var f=c.reduce(function(o,t){var v=_H(T.cssPrefix,t);if(q1[t]?(t=RH[l].includes(t)?HH[l][t]:t,n=t,o.prefix=t):DH[l].indexOf(t)>-1?(n=t,o.prefix=A3(t,{family:l})):v?o.iconName=v:t!==T.replacementClass&&t!==i[a2]&&t!==i[l2]&&o.rest.push(t),!s&&o.prefix&&o.iconName){var z=n==="fa"?rc(o.iconName):{},M=F1(o.prefix,o.iconName);z.prefix&&(n=null),o.iconName=z.iconName||M||o.iconName,o.prefix=z.prefix||o.prefix,o.prefix==="far"&&!q1.far&&q1.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},V0());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===l2&&(q1.fass||T.autoFetchSvg)&&(f.prefix="fass",f.iconName=F1(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=d1()||"fas"),f}var UH=function(){function c(){cH(this,c),this.definitions={}}return aH(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){e.definitions[l]=k(k({},e.definitions[l]||{}),n[l]),F6(l,n[l]);var f=b4[a2][l];f&&F6(f,n[l]),ec()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var n=s[i],l=n.prefix,f=n.iconName,o=n.icon,t=o[2];e[l]||(e[l]={}),t.length>0&&t.forEach(function(v){typeof v=="string"&&(e[l][v]=o)}),e[l][f]=o}),e}}]),c}(),V5=[],W1={},Q1={},IH=Object.keys(Q1);function qH(c,a){var e=a.mixoutsTo;return V5=c,W1={},Object.keys(Q1).forEach(function(r){IH.indexOf(r)===-1&&delete Q1[r]}),V5.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(e[n]=s[n]),t3(s[n])==="object"&&Object.keys(s[n]).forEach(function(l){e[n]||(e[n]={}),e[n][l]=s[n][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(n){W1[n]||(W1[n]=[]),W1[n].push(i[n])})}r.provides&&r.provides(Q1)}),e}function B6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=W1[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function _1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=W1[c]||[];s.forEach(function(i){i.apply(null,e)})}function i1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Q1[c]?Q1[c].apply(null,a):void 0}function R6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||d1();if(a)return a=F1(e,a)||a,z5(sc.definitions,e,a)||z5($2.styles,e,a)}var sc=new UH,WH=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,_1("noAuto")},GH={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return f1?(_1("beforeI2svg",a),i1("pseudoElements2svg",a),i1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,AH(function(){KH({autoReplaceSvgRoot:e}),_1("watch",a)})}},jH={icon:function(a){if(a===null)return null;if(t3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:F1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=A3(a[0]);return{prefix:r,iconName:F1(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(T.cssPrefix,"-"))>-1||a.match(vH))){var s=T3(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||d1(),iconName:F1(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=d1();return{prefix:i,iconName:F1(i,a)||a}}}},A2={noAuto:WH,config:T,dom:GH,parse:jH,library:sc,findIconDefinition:R6,toHtml:y4},KH=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?e2:e;(Object.keys($2.styles).length>0||T.autoFetchSvg)&&f1&&T.autoReplaceSvg&&A2.dom.i2svg({node:r})};function P3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return y4(r)})}}),Object.defineProperty(c,"node",{get:function(){if(f1){var r=e2.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function YH(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(z0(n)&&e.found&&!r.found){var l=e.width,f=e.height,o={x:l/f/2,y:.5};s.style=y3(k(k({},i),{},{"transform-origin":"".concat(o.x+n.x/16,"em ").concat(o.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function XH(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(T.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},s),{},{id:n}),children:r}]}]}function p0(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,n=c.transform,l=c.symbol,f=c.title,o=c.maskId,t=c.titleId,v=c.extra,z=c.watchable,M=z===void 0?!1:z,y=r.found?r:e,w=y.width,E=y.height,h=s==="fak",g=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(q){return v.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(v.classes).join(" "),C={children:[],attributes:k(k({},v.attributes),{},{"data-prefix":s,"data-icon":i,class:g,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(E)})},N=h&&!~v.classes.indexOf("fa-fw")?{width:"".concat(w/E*16*.0625,"em")}:{};M&&(C.attributes[E1]=""),f&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(t||S4())},children:[f]}),delete C.attributes.title);var _=k(k({},C),{},{prefix:s,iconName:i,main:e,mask:r,maskId:o,transform:n,symbol:l,styles:k(k({},N),v.styles)}),s2=r.found&&e.found?i1("generateAbstractMask",_)||{children:[],attributes:{}}:i1("generateAbstractIcon",_)||{children:[],attributes:{}},Z=s2.children,D=s2.attributes;return _.children=Z,_.attributes=D,l?XH(_):YH(_)}function p5(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,n=c.extra,l=c.watchable,f=l===void 0?!1:l,o=k(k(k({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});f&&(o[E1]="");var t=k({},n.styles);z0(s)&&(t.transform=SH({transform:s,startCentered:!0,width:e,height:r}),t["-webkit-transform"]=t.transform);var v=y3(t);v.length>0&&(o.style=v);var z=[];return z.push({tag:"span",attributes:o,children:[a]}),i&&z.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),z}function QH(c){var a=c.content,e=c.title,r=c.extra,s=k(k(k({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=y3(r.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var H6=$2.styles;function D6(c){var a=c[0],e=c[1],r=c.slice(4),s=f0(r,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(P1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(P1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(P1.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var JH={found:!1,width:512,height:512};function ZH(c,a){!q7&&!T.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function E6(c,a){var e=a;return a==="fa"&&T.styleDefault!==null&&(a=d1()),new Promise(function(r,s){if(i1("missingIconAbstract"),e==="fa"){var i=rc(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&H6[a]&&H6[a][c]){var n=H6[a][c];return r(D6(n))}ZH(c,a),r(k(k({},JH),{},{icon:T.showMissingIcons&&c?i1("missingIconAbstract")||{}:{}}))})}var M5=function(){},_6=T.measurePerformance&&q4&&q4.mark&&q4.measure?q4:{mark:M5,measure:M5},H4='FA "6.5.1"',cv=function(a){return _6.mark("".concat(H4," ").concat(a," begins")),function(){return ic(a)}},ic=function(a){_6.mark("".concat(H4," ").concat(a," ends")),_6.measure("".concat(H4," ").concat(a),"".concat(H4," ").concat(a," begins"),"".concat(H4," ").concat(a," ends"))},M0={begin:cv,end:ic},r3=function(){};function d5(c){var a=c.getAttribute?c.getAttribute(E1):null;return typeof a=="string"}function av(c){var a=c.getAttribute?c.getAttribute(t0):null,e=c.getAttribute?c.getAttribute(m0):null;return a&&e}function ev(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(T.replacementClass)}function rv(){if(T.autoReplaceSvg===!0)return s3.replace;var c=s3[T.autoReplaceSvg];return c||s3.replace}function sv(c){return e2.createElementNS("http://www.w3.org/2000/svg",c)}function iv(c){return e2.createElement(c)}function nc(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?sv:iv:e;if(typeof c=="string")return e2.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(nc(n,{ceFn:r}))}),s}function nv(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var s3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(nc(s),e)}),e.getAttribute(E1)===null&&T.keepOriginalSource){var r=e2.createComment(nv(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~v0(e).indexOf(T.replacementClass))return s3.replace(a);var s=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,f){return f===T.replacementClass||f.match(s)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=r.map(function(l){return y4(l)}).join(`
`);e.setAttribute(E1,""),e.innerHTML=n}};function C5(c){c()}function lc(c,a){var e=typeof a=="function"?a:r3;if(c.length===0)e();else{var r=C5;T.mutateApproach===tH&&(r=M1.requestAnimationFrame||C5),r(function(){var s=rv(),i=M0.begin("mutate");c.map(s),i(),e()})}}var d0=!1;function fc(){d0=!0}function $6(){d0=!1}var H3=null;function L5(c){if(m5&&T.observeMutations){var a=c.treeCallback,e=a===void 0?r3:a,r=c.nodeCallback,s=r===void 0?r3:r,i=c.pseudoElementsCallback,n=i===void 0?r3:i,l=c.observeMutationsRoot,f=l===void 0?e2:l;H3=new m5(function(o){if(!d0){var t=d1();n4(o).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!d5(v.addedNodes[0])&&(T.searchPseudoElements&&n(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&T.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&d5(v.target)&&~VH.indexOf(v.attributeName))if(v.attributeName==="class"&&av(v.target)){var z=T3(v0(v.target)),M=z.prefix,y=z.iconName;v.target.setAttribute(t0,M||t),y&&v.target.setAttribute(m0,y)}else ev(v.target)&&s(v.target)})}}),f1&&H3.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function lv(){H3&&H3.disconnect()}function fv(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),n=i[0],l=i.slice(1);return n&&l.length>0&&(r[n]=l.join(":").trim()),r},{})),e}function ov(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=T3(v0(c));return s.prefix||(s.prefix=d1()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=$H(s.prefix,c.innerText)||h0(s.prefix,P6(c.innerText))),!s.iconName&&T.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function tv(c){var a=n4(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return T.autoA11y&&(e?a["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||S4()):(a["aria-hidden"]="true",a.focusable="false")),a}function mv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function g5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=ov(c),r=e.iconName,s=e.prefix,i=e.rest,n=tv(c),l=B6("parseNodeAttributes",{},c),f=a.styleParser?fv(c):[];return k({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:j2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:n}},l)}var Hv=$2.styles;function oc(c){var a=T.autoReplaceSvg==="nest"?g5(c,{styleParser:!1}):g5(c);return~a.extra.classes.indexOf(W7)?i1("generateLayersText",c,a):i1("generateSvgReplacementMutation",c,a)}var C1=new Set;H0.map(function(c){C1.add("fa-".concat(c))});Object.keys(g4[a2]).map(C1.add.bind(C1));Object.keys(g4[l2]).map(C1.add.bind(C1));C1=w4(C1);function x5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!f1)return Promise.resolve();var e=e2.documentElement.classList,r=function(v){return e.add("".concat(H5,"-").concat(v))},s=function(v){return e.remove("".concat(H5,"-").concat(v))},i=T.autoFetchSvg?C1:H0.map(function(t){return"fa-".concat(t)}).concat(Object.keys(Hv));i.includes("fa")||i.push("fa");var n=[".".concat(W7,":not([").concat(E1,"])")].concat(i.map(function(t){return".".concat(t,":not([").concat(E1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=n4(c.querySelectorAll(n))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();var f=M0.begin("onTree"),o=l.reduce(function(t,v){try{var z=oc(v);z&&t.push(z)}catch(M){q7||M.name==="MissingIcon"&&console.error(M)}return t},[]);return new Promise(function(t,v){Promise.all(o).then(function(z){lc(z,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),f(),t()})}).catch(function(z){f(),v(z)})})}function vv(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;oc(c).then(function(e){e&&lc([e],a)})}function zv(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:R6(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:R6(s||{})),c(r,k(k({},e),{},{mask:s}))}}var uv=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?j2:r,i=e.symbol,n=i===void 0?!1:i,l=e.mask,f=l===void 0?null:l,o=e.maskId,t=o===void 0?null:o,v=e.title,z=v===void 0?null:v,M=e.titleId,y=M===void 0?null:M,w=e.classes,E=w===void 0?[]:w,h=e.attributes,g=h===void 0?{}:h,C=e.styles,N=C===void 0?{}:C;if(a){var _=a.prefix,s2=a.iconName,Z=a.icon;return P3(k({type:"icon"},a),function(){return _1("beforeDOMElementCreation",{iconDefinition:a,params:e}),T.autoA11y&&(z?g["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(y||S4()):(g["aria-hidden"]="true",g.focusable="false")),p0({icons:{main:D6(Z),mask:f?D6(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:s2,transform:k(k({},j2),s),symbol:n,title:z,maskId:t,titleId:y,extra:{attributes:g,styles:N,classes:E}})})}},hv={mixout:function(){return{icon:zv(uv)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=x5,e.nodeCallback=vv,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?e2:r,i=e.callback,n=i===void 0?function(){}:i;return x5(s,n)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,n=r.titleId,l=r.prefix,f=r.transform,o=r.symbol,t=r.mask,v=r.maskId,z=r.extra;return new Promise(function(M,y){Promise.all([E6(s,l),t.iconName?E6(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var E=f0(w,2),h=E[0],g=E[1];M([e,p0({icons:{main:h,mask:g},prefix:l,iconName:s,transform:f,symbol:o,maskId:v,title:i,titleId:n,extra:z,watchable:!0})])}).catch(y)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.transform,l=e.styles,f=y3(l);f.length>0&&(s.style=f);var o;return z0(n)&&(o=i1("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),r.push(o||i.icon),{children:r,attributes:s}}}},Vv={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return P3({type:"layer"},function(){_1("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(l){Array.isArray(l)?l.map(function(f){n=n.concat(f.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(w4(i)).join(" ")},children:n}]})}}}},pv={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,n=r.classes,l=n===void 0?[]:n,f=r.attributes,o=f===void 0?{}:f,t=r.styles,v=t===void 0?{}:t;return P3({type:"counter",content:e},function(){return _1("beforeDOMElementCreation",{content:e,params:r}),QH({content:e.toString(),title:i,extra:{attributes:o,styles:v,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(w4(l))}})})}}}},Mv={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?j2:s,n=r.title,l=n===void 0?null:n,f=r.classes,o=f===void 0?[]:f,t=r.attributes,v=t===void 0?{}:t,z=r.styles,M=z===void 0?{}:z;return P3({type:"text",content:e},function(){return _1("beforeDOMElementCreation",{content:e,params:r}),p5({content:e,transform:k(k({},j2),i),title:l,extra:{attributes:v,styles:M,classes:["".concat(T.cssPrefix,"-layers-text")].concat(w4(o))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,n=r.extra,l=null,f=null;if(O7){var o=parseInt(getComputedStyle(e).fontSize,10),t=e.getBoundingClientRect();l=t.width/o,f=t.height/o}return T.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,p5({content:e.innerHTML,width:l,height:f,transform:i,title:s,extra:n,watchable:!0})])}}},dv=new RegExp('"',"ug"),b5=[1105920,1112319];function Cv(c){var a=c.replace(dv,""),e=FH(a,0),r=e>=b5[0]&&e<=b5[1],s=a.length===2?a[0]===a[1]:!1;return{value:P6(s?a[0]:a),isSecondary:r||s}}function N5(c,a){var e="".concat(oH).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=n4(c.children),n=i.filter(function(Z){return Z.getAttribute(T6)===a})[0],l=M1.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match(zH),o=l.getPropertyValue("font-weight"),t=l.getPropertyValue("content");if(n&&!f)return c.removeChild(n),r();if(f&&t!=="none"&&t!==""){var v=l.getPropertyValue("content"),z=~["Sharp"].indexOf(f[2])?l2:a2,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?x4[z][f[2].toLowerCase()]:uH[z][o],y=Cv(v),w=y.value,E=y.isSecondary,h=f[0].startsWith("FontAwesome"),g=h0(M,w),C=g;if(h){var N=OH(w);N.iconName&&N.prefix&&(g=N.iconName,M=N.prefix)}if(g&&!E&&(!n||n.getAttribute(t0)!==M||n.getAttribute(m0)!==C)){c.setAttribute(e,C),n&&c.removeChild(n);var _=mv(),s2=_.extra;s2.attributes[T6]=a,E6(g,M).then(function(Z){var D=p0(k(k({},_),{},{icons:{main:Z,mask:V0()},prefix:M,iconName:C,extra:s2,watchable:!0})),q=e2.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(q,c.firstChild):c.appendChild(q),q.outerHTML=D.map(function(Y){return y4(Y)}).join(`
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}