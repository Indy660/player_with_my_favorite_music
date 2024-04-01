(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();function $6(c,a){const e=Object.create(null),r=c.split(",");for(let s=0;s<r.length;s++)e[r[s]]=!0;return a?s=>!!e[s.toLowerCase()]:s=>!!e[s]}const e2={},G1=[],Y2=()=>{},vf=()=>!1,z3=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),O6=c=>c.startsWith("onUpdate:"),v2=Object.assign,U6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},zf=Object.prototype.hasOwnProperty,W=(c,a)=>zf.call(c,a),D=Array.isArray,j1=c=>u3(c)==="[object Map]",F5=c=>u3(c)==="[object Set]",O=c=>typeof c=="function",m2=c=>typeof c=="string",a4=c=>typeof c=="symbol",i2=c=>c!==null&&typeof c=="object",B5=c=>(i2(c)||O(c))&&O(c.then)&&O(c.catch),R5=Object.prototype.toString,u3=c=>R5.call(c),uf=c=>u3(c).slice(8,-1),D5=c=>u3(c)==="[object Object]",I6=c=>m2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,Z4=$6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),h3=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},hf=/-(\w)/g,J2=h3(c=>c.replace(hf,(a,e)=>e?e.toUpperCase():"")),Vf=/\B([A-Z])/g,e4=h3(c=>c.replace(Vf,"-$1").toLowerCase()),V3=h3(c=>c.charAt(0).toUpperCase()+c.slice(1)),J3=h3(c=>c?`on${V3(c)}`:""),D1=(c,a)=>!Object.is(c,a),Z3=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},i3=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},pf=c=>{const a=parseFloat(c);return isNaN(a)?c:a},Mf=c=>{const a=m2(c)?Number(c):NaN;return isNaN(a)?c:a};let g8;const v6=()=>g8||(g8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function p3(c){if(D(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],s=m2(r)?gf(r):p3(r);if(s)for(const i in s)a[i]=s[i]}return a}else if(m2(c)||i2(c))return c}const df=/;(?![^(]*\))/g,Cf=/:([^]+)/,Lf=/\/\*[^]*?\*\//g;function gf(c){const a={};return c.replace(Lf,"").split(df).forEach(e=>{if(e){const r=e.split(Cf);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function X2(c){let a="";if(m2(c))a=c;else if(D(c))for(let e=0;e<c.length;e++){const r=X2(c[e]);r&&(a+=r+" ")}else if(i2(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const xf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bf=$6(xf);function E5(c){return!!c||c===""}const Q2=c=>m2(c)?c:c==null?"":D(c)||i2(c)&&(c.toString===R5||!O(c.toString))?JSON.stringify(c,_5,2):String(c),_5=(c,a)=>a&&a.__v_isRef?_5(c,a.value):j1(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,s],i)=>(e[c6(r,i)+" =>"]=s,e),{})}:F5(a)?{[`Set(${a.size})`]:[...a.values()].map(e=>c6(e))}:a4(a)?c6(a):i2(a)&&!D(a)&&!D5(a)?String(a):a,c6=(c,a="")=>{var e;return a4(c)?`Symbol(${(e=c.description)!=null?e:a})`:c};let _2;class Nf{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_2,!a&&_2&&(this.index=(_2.scopes||(_2.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=_2;try{return _2=this,a()}finally{_2=e}}}on(){_2=this}off(){_2=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sf(c,a=_2){a&&a.active&&a.effects.push(c)}function wf(){return _2}const q6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},$5=c=>(c.w&p1)>0,O5=c=>(c.n&p1)>0,kf=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=p1},yf=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const s=a[r];$5(s)&&!O5(s)?s.delete(c):a[e++]=s,s.w&=~p1,s.n&=~p1}a.length=e}},z6=new WeakMap;let o4=0,p1=1;const u6=30;let $2;const B1=Symbol(""),h6=Symbol("");class W6{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Sf(this,r)}run(){if(!this.active)return this.fn();let a=$2,e=h1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=$2,$2=this,h1=!0,p1=1<<++o4,o4<=u6?kf(this):x8(this),this.fn()}finally{o4<=u6&&yf(this),p1=1<<--o4,$2=this.parent,h1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$2===this?this.deferStop=!0:this.active&&(x8(this),this.onStop&&this.onStop(),this.active=!1)}}function x8(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let h1=!0;const U5=[];function r4(){U5.push(h1),h1=!1}function s4(){const c=U5.pop();h1=c===void 0?!0:c}function S2(c,a,e){if(h1&&$2){let r=z6.get(c);r||z6.set(c,r=new Map);let s=r.get(e);s||r.set(e,s=q6()),I5(s)}}function I5(c,a){let e=!1;o4<=u6?O5(c)||(c.n|=p1,e=!$5(c)):e=!c.has($2),e&&(c.add($2),$2.deps.push(c))}function r1(c,a,e,r,s,i){const n=z6.get(c);if(!n)return;let l=[];if(a==="clear")l=[...n.values()];else if(e==="length"&&D(c)){const f=Number(r);n.forEach((o,t)=>{(t==="length"||!a4(t)&&t>=f)&&l.push(o)})}else switch(e!==void 0&&l.push(n.get(e)),a){case"add":D(c)?I6(e)&&l.push(n.get("length")):(l.push(n.get(B1)),j1(c)&&l.push(n.get(h6)));break;case"delete":D(c)||(l.push(n.get(B1)),j1(c)&&l.push(n.get(h6)));break;case"set":j1(c)&&l.push(n.get(B1));break}if(l.length===1)l[0]&&V6(l[0]);else{const f=[];for(const o of l)o&&f.push(...o);V6(q6(f))}}function V6(c,a){const e=D(c)?c:[...c];for(const r of e)r.computed&&b8(r);for(const r of e)r.computed||b8(r)}function b8(c,a){(c!==$2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Af=$6("__proto__,__v_isRef,__isVue"),q5=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(a4)),N8=Tf();function Tf(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=G(this);for(let i=0,n=this.length;i<n;i++)S2(r,"get",i+"");const s=r[a](...e);return s===-1||s===!1?r[a](...e.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){r4();const r=G(this)[a].apply(this,e);return s4(),r}}),c}function Pf(c){const a=G(this);return S2(a,"has",c),a.hasOwnProperty(c)}class W5{constructor(a=!1,e=!1){this._isReadonly=a,this._shallow=e}get(a,e,r){const s=this._isReadonly,i=this._shallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return i;if(e==="__v_raw")return r===(s?i?Gf:Y5:i?K5:j5).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(r)?a:void 0;const n=D(a);if(!s){if(n&&W(N8,e))return Reflect.get(N8,e,r);if(e==="hasOwnProperty")return Pf}const l=Reflect.get(a,e,r);return(a4(e)?q5.has(e):Af(e))||(s||S2(a,"get",e),i)?l:w2(l)?n&&I6(e)?l:l.value:i2(l)?s?X5(l):K6(l):l}}class G5 extends W5{constructor(a=!1){super(!1,a)}set(a,e,r,s){let i=a[e];if(!this._shallow){const f=J1(i);if(!n3(r)&&!J1(r)&&(i=G(i),r=G(r)),!D(a)&&w2(i)&&!w2(r))return f?!1:(i.value=r,!0)}const n=D(a)&&I6(e)?Number(e)<a.length:W(a,e),l=Reflect.set(a,e,r,s);return a===G(s)&&(n?D1(r,i)&&r1(a,"set",e,r):r1(a,"add",e,r)),l}deleteProperty(a,e){const r=W(a,e);a[e];const s=Reflect.deleteProperty(a,e);return s&&r&&r1(a,"delete",e,void 0),s}has(a,e){const r=Reflect.has(a,e);return(!a4(e)||!q5.has(e))&&S2(a,"has",e),r}ownKeys(a){return S2(a,"iterate",D(a)?"length":B1),Reflect.ownKeys(a)}}class Ff extends W5{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const Bf=new G5,Rf=new Ff,Df=new G5(!0),G6=c=>c,M3=c=>Reflect.getPrototypeOf(c);function R4(c,a,e=!1,r=!1){c=c.__v_raw;const s=G(c),i=G(a);e||(D1(a,i)&&S2(s,"get",a),S2(s,"get",i));const{has:n}=M3(s),l=r?G6:e?X6:h4;if(n.call(s,a))return l(c.get(a));if(n.call(s,i))return l(c.get(i));c!==s&&c.get(a)}function D4(c,a=!1){const e=this.__v_raw,r=G(e),s=G(c);return a||(D1(c,s)&&S2(r,"has",c),S2(r,"has",s)),c===s?e.has(c):e.has(c)||e.has(s)}function E4(c,a=!1){return c=c.__v_raw,!a&&S2(G(c),"iterate",B1),Reflect.get(c,"size",c)}function S8(c){c=G(c);const a=G(this);return M3(a).has.call(a,c)||(a.add(c),r1(a,"add",c,c)),this}function w8(c,a){a=G(a);const e=G(this),{has:r,get:s}=M3(e);let i=r.call(e,c);i||(c=G(c),i=r.call(e,c));const n=s.call(e,c);return e.set(c,a),i?D1(a,n)&&r1(e,"set",c,a):r1(e,"add",c,a),this}function k8(c){const a=G(this),{has:e,get:r}=M3(a);let s=e.call(a,c);s||(c=G(c),s=e.call(a,c)),r&&r.call(a,c);const i=a.delete(c);return s&&r1(a,"delete",c,void 0),i}function y8(){const c=G(this),a=c.size!==0,e=c.clear();return a&&r1(c,"clear",void 0,void 0),e}function _4(c,a){return function(r,s){const i=this,n=i.__v_raw,l=G(n),f=a?G6:c?X6:h4;return!c&&S2(l,"iterate",B1),n.forEach((o,t)=>r.call(s,f(o),f(t),i))}}function $4(c,a,e){return function(...r){const s=this.__v_raw,i=G(s),n=j1(i),l=c==="entries"||c===Symbol.iterator&&n,f=c==="keys"&&n,o=s[c](...r),t=e?G6:a?X6:h4;return!a&&S2(i,"iterate",f?h6:B1),{next(){const{value:v,done:z}=o.next();return z?{value:v,done:z}:{value:l?[t(v[0]),t(v[1])]:t(v),done:z}},[Symbol.iterator](){return this}}}}function t1(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function Ef(){const c={get(i){return R4(this,i)},get size(){return E4(this)},has:D4,add:S8,set:w8,delete:k8,clear:y8,forEach:_4(!1,!1)},a={get(i){return R4(this,i,!1,!0)},get size(){return E4(this)},has:D4,add:S8,set:w8,delete:k8,clear:y8,forEach:_4(!1,!0)},e={get(i){return R4(this,i,!0)},get size(){return E4(this,!0)},has(i){return D4.call(this,i,!0)},add:t1("add"),set:t1("set"),delete:t1("delete"),clear:t1("clear"),forEach:_4(!0,!1)},r={get(i){return R4(this,i,!0,!0)},get size(){return E4(this,!0)},has(i){return D4.call(this,i,!0)},add:t1("add"),set:t1("set"),delete:t1("delete"),clear:t1("clear"),forEach:_4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=$4(i,!1,!1),e[i]=$4(i,!0,!1),a[i]=$4(i,!1,!0),r[i]=$4(i,!0,!0)}),[c,e,a,r]}const[_f,$f,Of,Uf]=Ef();function j6(c,a){const e=a?c?Uf:Of:c?$f:_f;return(r,s,i)=>s==="__v_isReactive"?!c:s==="__v_isReadonly"?c:s==="__v_raw"?r:Reflect.get(W(e,s)&&s in r?e:r,s,i)}const If={get:j6(!1,!1)},qf={get:j6(!1,!0)},Wf={get:j6(!0,!1)},j5=new WeakMap,K5=new WeakMap,Y5=new WeakMap,Gf=new WeakMap;function jf(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kf(c){return c.__v_skip||!Object.isExtensible(c)?0:jf(uf(c))}function K6(c){return J1(c)?c:Y6(c,!1,Bf,If,j5)}function Yf(c){return Y6(c,!1,Df,qf,K5)}function X5(c){return Y6(c,!0,Rf,Wf,Y5)}function Y6(c,a,e,r,s){if(!i2(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=s.get(c);if(i)return i;const n=Kf(c);if(n===0)return c;const l=new Proxy(c,n===2?r:e);return s.set(c,l),l}function K1(c){return J1(c)?K1(c.__v_raw):!!(c&&c.__v_isReactive)}function J1(c){return!!(c&&c.__v_isReadonly)}function n3(c){return!!(c&&c.__v_isShallow)}function Q5(c){return K1(c)||J1(c)}function G(c){const a=c&&c.__v_raw;return a?G(a):c}function J5(c){return i3(c,"__v_skip",!0),c}const h4=c=>i2(c)?K6(c):c,X6=c=>i2(c)?X5(c):c;function Z5(c){h1&&$2&&(c=G(c),I5(c.dep||(c.dep=q6())))}function c7(c,a){c=G(c);const e=c.dep;e&&V6(e)}function w2(c){return!!(c&&c.__v_isRef===!0)}function p2(c){return Xf(c,!1)}function Xf(c,a){return w2(c)?c:new Qf(c,a)}class Qf{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:G(a),this._value=e?a:h4(a)}get value(){return Z5(this),this._value}set value(a){const e=this.__v_isShallow||n3(a)||J1(a);a=e?a:G(a),D1(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:h4(a),c7(this))}}function Jf(c){return w2(c)?c.value:c}const Zf={get:(c,a,e)=>Jf(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const s=c[a];return w2(s)&&!w2(e)?(s.value=e,!0):Reflect.set(c,a,e,r)}};function a7(c){return K1(c)?c:new Proxy(c,Zf)}class co{constructor(a,e,r,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new W6(a,()=>{this._dirty||(this._dirty=!0,c7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const a=G(this);return Z5(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function ao(c,a,e=!1){let r,s;const i=O(c);return i?(r=c,s=Y2):(r=c.get,s=c.set),new co(r,s,i||!s,e)}function V1(c,a,e,r){let s;try{s=r?c(...r):c()}catch(i){d3(i,a,e)}return s}function B2(c,a,e,r){if(O(c)){const i=V1(c,a,e,r);return i&&B5(i)&&i.catch(n=>{d3(n,a,e)}),i}const s=[];for(let i=0;i<c.length;i++)s.push(B2(c[i],a,e,r));return s}function d3(c,a,e,r=!0){const s=a?a.vnode:null;if(a){let i=a.parent;const n=a.proxy,l=e;for(;i;){const o=i.ec;if(o){for(let t=0;t<o.length;t++)if(o[t](c,n,l)===!1)return}i=i.parent}const f=a.appContext.config.errorHandler;if(f){V1(f,null,10,[c,n,l]);return}}eo(c,e,s,r)}function eo(c,a,e,r=!0){console.error(c)}let V4=!1,p6=!1;const M2=[];let j2=0;const Y1=[];let a1=null,k1=0;const e7=Promise.resolve();let Q6=null;function r7(c){const a=Q6||e7;return c?a.then(this?c.bind(this):c):a}function ro(c){let a=j2+1,e=M2.length;for(;a<e;){const r=a+e>>>1,s=M2[r],i=p4(s);i<c||i===c&&s.pre?a=r+1:e=r}return a}function J6(c){(!M2.length||!M2.includes(c,V4&&c.allowRecurse?j2+1:j2))&&(c.id==null?M2.push(c):M2.splice(ro(c.id),0,c),s7())}function s7(){!V4&&!p6&&(p6=!0,Q6=e7.then(n7))}function so(c){const a=M2.indexOf(c);a>j2&&M2.splice(a,1)}function io(c){D(c)?Y1.push(...c):(!a1||!a1.includes(c,c.allowRecurse?k1+1:k1))&&Y1.push(c),s7()}function A8(c,a,e=V4?j2+1:0){for(;e<M2.length;e++){const r=M2[e];if(r&&r.pre){if(c&&r.id!==c.uid)continue;M2.splice(e,1),e--,r()}}}function i7(c){if(Y1.length){const a=[...new Set(Y1)];if(Y1.length=0,a1){a1.push(...a);return}for(a1=a,a1.sort((e,r)=>p4(e)-p4(r)),k1=0;k1<a1.length;k1++)a1[k1]();a1=null,k1=0}}const p4=c=>c.id==null?1/0:c.id,no=(c,a)=>{const e=p4(c)-p4(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function n7(c){p6=!1,V4=!0,M2.sort(no);try{for(j2=0;j2<M2.length;j2++){const a=M2[j2];a&&a.active!==!1&&V1(a,null,14)}}finally{j2=0,M2.length=0,i7(),V4=!1,Q6=null,(M2.length||Y1.length)&&n7()}}function lo(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||e2;let s=e;const i=a.startsWith("update:"),n=i&&a.slice(7);if(n&&n in r){const t=`${n==="modelValue"?"model":n}Modifiers`,{number:v,trim:z}=r[t]||e2;z&&(s=e.map(V=>m2(V)?V.trim():V)),v&&(s=e.map(pf))}let l,f=r[l=J3(a)]||r[l=J3(J2(a))];!f&&i&&(f=r[l=J3(e4(a))]),f&&B2(f,c,6,s);const o=r[l+"Once"];if(o){if(!c.emitted)c.emitted={};else if(c.emitted[l])return;c.emitted[l]=!0,B2(o,c,6,s)}}function l7(c,a,e=!1){const r=a.emitsCache,s=r.get(c);if(s!==void 0)return s;const i=c.emits;let n={},l=!1;if(!O(c)){const f=o=>{const t=l7(o,a,!0);t&&(l=!0,v2(n,t))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!i&&!l?(i2(c)&&r.set(c,null),null):(D(i)?i.forEach(f=>n[f]=null):v2(n,i),i2(c)&&r.set(c,n),n)}function C3(c,a){return!c||!z3(a)?!1:(a=a.slice(2).replace(/Once$/,""),W(c,a[0].toLowerCase()+a.slice(1))||W(c,e4(a))||W(c,a))}let T2=null,L3=null;function l3(c){const a=T2;return T2=c,L3=c&&c.type.__scopeId||null,a}function Z6(c){L3=c}function c0(){L3=null}function f7(c,a=T2,e){if(!a||c._n)return c;const r=(...s)=>{r._d&&I8(-1);const i=l3(a);let n;try{n=c(...s)}finally{l3(i),r._d&&I8(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function a6(c){const{type:a,vnode:e,proxy:r,withProxy:s,props:i,propsOptions:[n],slots:l,attrs:f,emit:o,render:t,renderCache:v,data:z,setupState:V,ctx:P,inheritAttrs:N}=c;let _,g;const p=l3(c);try{if(e.shapeFlag&4){const C=s||r,R=C;_=G2(t.call(R,C,v,i,V,z,P)),g=f}else{const C=a;_=G2(C.length>1?C(i,{attrs:f,slots:l,emit:o}):C(i,null)),g=a.props?f:fo(f)}}catch(C){v4.length=0,d3(C,c,1),_=o2(I2)}let A=_;if(g&&N!==!1){const C=Object.keys(g),{shapeFlag:R}=A;C.length&&R&7&&(n&&C.some(O6)&&(g=oo(g,n)),A=M1(A,g))}return e.dirs&&(A=M1(A),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition&&(A.transition=e.transition),_=A,l3(p),_}const fo=c=>{let a;for(const e in c)(e==="class"||e==="style"||z3(e))&&((a||(a={}))[e]=c[e]);return a},oo=(c,a)=>{const e={};for(const r in c)(!O6(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function to(c,a,e){const{props:r,children:s,component:i}=c,{props:n,children:l,patchFlag:f}=a,o=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return r?T8(r,n,o):!!n;if(f&8){const t=a.dynamicProps;for(let v=0;v<t.length;v++){const z=t[v];if(n[z]!==r[z]&&!C3(o,z))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===n?!1:r?n?T8(r,n,o):!0:!!n;return!1}function T8(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(a[i]!==c[i]&&!C3(e,i))return!0}return!1}function mo({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const o7="components";function x1(c,a){return vo(o7,c,!0,a)||c}const Ho=Symbol.for("v-ndc");function vo(c,a,e=!0,r=!1){const s=T2||V2;if(s){const i=s.type;if(c===o7){const l=tt(i,!1);if(l&&(l===a||l===J2(a)||l===V3(J2(a))))return i}const n=P8(s[c]||i[c],a)||P8(s.appContext[c],a);return!n&&r?i:n}}function P8(c,a){return c&&(c[a]||c[J2(a)]||c[V3(J2(a))])}const zo=c=>c.__isSuspense;function uo(c,a){a&&a.pendingBranch?D(c)?a.effects.push(...c):a.effects.push(c):io(c)}function t7(c,a){return a0(c,null,a)}const O4={};function X1(c,a,e){return a0(c,a,e)}function a0(c,a,{immediate:e,deep:r,flush:s,onTrack:i,onTrigger:n}=e2){var l;const f=wf()===((l=V2)==null?void 0:l.scope)?V2:null;let o,t=!1,v=!1;if(w2(c)?(o=()=>c.value,t=n3(c)):K1(c)?(o=()=>c,r=!0):D(c)?(v=!0,t=c.some(C=>K1(C)||n3(C)),o=()=>c.map(C=>{if(w2(C))return C.value;if(K1(C))return T1(C);if(O(C))return V1(C,f,2)})):O(c)?a?o=()=>V1(c,f,2):o=()=>{if(!(f&&f.isUnmounted))return z&&z(),B2(c,f,3,[V])}:o=Y2,a&&r){const C=o;o=()=>T1(C())}let z,V=C=>{z=p.onStop=()=>{V1(C,f,4),z=p.onStop=void 0}},P;if(d4)if(V=Y2,a?e&&B2(a,f,3,[o(),v?[]:void 0,V]):o(),s==="sync"){const C=vt();P=C.__watcherHandles||(C.__watcherHandles=[])}else return Y2;let N=v?new Array(c.length).fill(O4):O4;const _=()=>{if(p.active)if(a){const C=p.run();(r||t||(v?C.some((R,c2)=>D1(R,N[c2])):D1(C,N)))&&(z&&z(),B2(a,f,3,[C,N===O4?void 0:v&&N[0]===O4?[]:N,V]),N=C)}else p.run()};_.allowRecurse=!!a;let g;s==="sync"?g=_:s==="post"?g=()=>N2(_,f&&f.suspense):(_.pre=!0,f&&(_.id=f.uid),g=()=>J6(_));const p=new W6(o,g);a?e?_():N=p.run():s==="post"?N2(p.run.bind(p),f&&f.suspense):p.run();const A=()=>{p.stop(),f&&f.scope&&U6(f.scope.effects,p)};return P&&P.push(A),A}function ho(c,a,e){const r=this.proxy,s=m2(c)?c.includes(".")?m7(r,c):()=>r[c]:c.bind(r,r);let i;O(a)?i=a:(i=a.handler,e=a);const n=V2;Z1(this);const l=a0(s,i.bind(r),e);return n?Z1(n):R1(),l}function m7(c,a){const e=a.split(".");return()=>{let r=c;for(let s=0;s<e.length&&r;s++)r=r[e[s]];return r}}function T1(c,a){if(!i2(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),w2(c))T1(c.value,a);else if(D(c))for(let e=0;e<c.length;e++)T1(c[e],a);else if(F5(c)||j1(c))c.forEach(e=>{T1(e,a)});else if(D5(c))for(const e in c)T1(c[e],a);return c}function Vo(c,a){const e=T2;if(e===null)return c;const r=w3(e)||e.proxy,s=c.dirs||(c.dirs=[]);for(let i=0;i<a.length;i++){let[n,l,f,o=e2]=a[i];n&&(O(n)&&(n={mounted:n,updated:n}),n.deep&&T1(l),s.push({dir:n,instance:r,value:l,oldValue:void 0,arg:f,modifiers:o}))}return c}function b1(c,a,e,r){const s=c.dirs,i=a&&a.dirs;for(let n=0;n<s.length;n++){const l=s[n];i&&(l.oldValue=i[n].value);let f=l.dir[r];f&&(r4(),B2(f,e,8,[c.el,l,c,a]),s4())}}const z1=Symbol("_leaveCb"),U4=Symbol("_enterCb");function po(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return h7(()=>{c.isMounted=!0}),V7(()=>{c.isUnmounting=!0}),c}const F2=[Function,Array],H7={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:F2,onEnter:F2,onAfterEnter:F2,onEnterCancelled:F2,onBeforeLeave:F2,onLeave:F2,onAfterLeave:F2,onLeaveCancelled:F2,onBeforeAppear:F2,onAppear:F2,onAfterAppear:F2,onAppearCancelled:F2},Mo={name:"BaseTransition",props:H7,setup(c,{slots:a}){const e=it(),r=po();let s;return()=>{const i=a.default&&z7(a.default(),!0);if(!i||!i.length)return;let n=i[0];if(i.length>1){for(const N of i)if(N.type!==I2){n=N;break}}const l=G(c),{mode:f}=l;if(r.isLeaving)return e6(n);const o=F8(n);if(!o)return e6(n);const t=M6(o,l,r,e);d6(o,t);const v=e.subTree,z=v&&F8(v);let V=!1;const{getTransitionKey:P}=o.type;if(P){const N=P();s===void 0?s=N:N!==s&&(s=N,V=!0)}if(z&&z.type!==I2&&(!y1(o,z)||V)){const N=M6(z,l,r,e);if(d6(z,N),f==="out-in")return r.isLeaving=!0,N.afterLeave=()=>{r.isLeaving=!1,e.update.active!==!1&&e.update()},e6(n);f==="in-out"&&o.type!==I2&&(N.delayLeave=(_,g,p)=>{const A=v7(r,z);A[String(z.key)]=z,_[z1]=()=>{g(),_[z1]=void 0,delete t.delayedLeave},t.delayedLeave=p})}return n}}},Co=Mo;function v7(c,a){const{leavingVNodes:e}=c;let r=e.get(a.type);return r||(r=Object.create(null),e.set(a.type,r)),r}function M6(c,a,e,r){const{appear:s,mode:i,persisted:n=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:o,onEnterCancelled:t,onBeforeLeave:v,onLeave:z,onAfterLeave:V,onLeaveCancelled:P,onBeforeAppear:N,onAppear:_,onAfterAppear:g,onAppearCancelled:p}=a,A=String(c.key),C=v7(e,c),R=(E,q)=>{E&&B2(E,r,9,q)},c2=(E,q)=>{const K=q[1];R(E,q),D(E)?E.every(u2=>u2.length<=1)&&K():E.length<=1&&K()},a2={mode:i,persisted:n,beforeEnter(E){let q=l;if(!e.isMounted)if(s)q=N||l;else return;E[z1]&&E[z1](!0);const K=C[A];K&&y1(c,K)&&K.el[z1]&&K.el[z1](),R(q,[E])},enter(E){let q=f,K=o,u2=t;if(!e.isMounted)if(s)q=_||f,K=g||o,u2=p||t;else return;let T=!1;const J=E[U4]=h2=>{T||(T=!0,h2?R(u2,[E]):R(K,[E]),a2.delayedLeave&&a2.delayedLeave(),E[U4]=void 0)};q?c2(q,[E,J]):J()},leave(E,q){const K=String(c.key);if(E[U4]&&E[U4](!0),e.isUnmounting)return q();R(v,[E]);let u2=!1;const T=E[z1]=J=>{u2||(u2=!0,q(),J?R(P,[E]):R(V,[E]),E[z1]=void 0,C[K]===c&&delete C[K])};C[K]=c,z?c2(z,[E,T]):T()},clone(E){return M6(E,a,e,r)}};return a2}function e6(c){if(g3(c))return c=M1(c),c.children=null,c}function F8(c){return g3(c)?c.children?c.children[0]:void 0:c}function d6(c,a){c.shapeFlag&6&&c.component?d6(c.component.subTree,a):c.shapeFlag&128?(c.ssContent.transition=a.clone(c.ssContent),c.ssFallback.transition=a.clone(c.ssFallback)):c.transition=a}function z7(c,a=!1,e){let r=[],s=0;for(let i=0;i<c.length;i++){let n=c[i];const l=e==null?n.key:String(e)+String(n.key!=null?n.key:i);n.type===A2?(n.patchFlag&128&&s++,r=r.concat(z7(n.children,a,l))):(a||n.type!==I2)&&r.push(l!=null?M1(n,{key:l}):n)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function l1(c,a){return O(c)?v2({name:c.name},a,{setup:c}):c}const c3=c=>!!c.type.__asyncLoader,g3=c=>c.type.__isKeepAlive;function Lo(c,a){u7(c,"a",a)}function go(c,a){u7(c,"da",a)}function u7(c,a,e=V2){const r=c.__wdc||(c.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return c()});if(x3(a,r,e),e){let s=e.parent;for(;s&&s.parent;)g3(s.parent.vnode)&&xo(r,a,e,s),s=s.parent}}function xo(c,a,e,r){const s=x3(a,c,r,!0);p7(()=>{U6(r[a],s)},e)}function x3(c,a,e=V2,r=!1){if(e){const s=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;r4(),Z1(e);const l=B2(a,e,c,n);return R1(),s4(),l});return r?s.unshift(i):s.push(i),i}}const f1=c=>(a,e=V2)=>(!d4||c==="sp")&&x3(c,(...r)=>a(...r),e),b3=f1("bm"),h7=f1("m"),bo=f1("bu"),No=f1("u"),V7=f1("bum"),p7=f1("um"),So=f1("sp"),wo=f1("rtg"),ko=f1("rtc");function yo(c,a=V2){x3("ec",c,a)}function e0(c,a,e,r){let s;const i=e&&e[r];if(D(c)||m2(c)){s=new Array(c.length);for(let n=0,l=c.length;n<l;n++)s[n]=a(c[n],n,void 0,i&&i[n])}else if(typeof c=="number"){s=new Array(c);for(let n=0;n<c;n++)s[n]=a(n+1,n,void 0,i&&i[n])}else if(i2(c))if(c[Symbol.iterator])s=Array.from(c,(n,l)=>a(n,l,void 0,i&&i[l]));else{const n=Object.keys(c);s=new Array(n.length);for(let l=0,f=n.length;l<f;l++){const o=n[l];s[l]=a(c[o],o,l,i&&i[l])}}else s=[];return e&&(e[r]=s),s}const C6=c=>c?y7(c)?w3(c)||c.proxy:C6(c.parent):null,H4=v2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>C6(c.parent),$root:c=>C6(c.root),$emit:c=>c.emit,$options:c=>r0(c),$forceUpdate:c=>c.f||(c.f=()=>J6(c.update)),$nextTick:c=>c.n||(c.n=r7.bind(c.proxy)),$watch:c=>ho.bind(c)}),r6=(c,a)=>c!==e2&&!c.__isScriptSetup&&W(c,a),Ao={get({_:c},a){const{ctx:e,setupState:r,data:s,props:i,accessCache:n,type:l,appContext:f}=c;let o;if(a[0]!=="$"){const V=n[a];if(V!==void 0)switch(V){case 1:return r[a];case 2:return s[a];case 4:return e[a];case 3:return i[a]}else{if(r6(r,a))return n[a]=1,r[a];if(s!==e2&&W(s,a))return n[a]=2,s[a];if((o=c.propsOptions[0])&&W(o,a))return n[a]=3,i[a];if(e!==e2&&W(e,a))return n[a]=4,e[a];L6&&(n[a]=0)}}const t=H4[a];let v,z;if(t)return a==="$attrs"&&S2(c,"get",a),t(c);if((v=l.__cssModules)&&(v=v[a]))return v;if(e!==e2&&W(e,a))return n[a]=4,e[a];if(z=f.config.globalProperties,W(z,a))return z[a]},set({_:c},a,e){const{data:r,setupState:s,ctx:i}=c;return r6(s,a)?(s[a]=e,!0):r!==e2&&W(r,a)?(r[a]=e,!0):W(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:s,propsOptions:i}},n){let l;return!!e[n]||c!==e2&&W(c,n)||r6(a,n)||(l=i[0])&&W(l,n)||W(r,n)||W(H4,n)||W(s.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:W(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function B8(c){return D(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let L6=!0;function To(c){const a=r0(c),e=c.proxy,r=c.ctx;L6=!1,a.beforeCreate&&R8(a.beforeCreate,c,"bc");const{data:s,computed:i,methods:n,watch:l,provide:f,inject:o,created:t,beforeMount:v,mounted:z,beforeUpdate:V,updated:P,activated:N,deactivated:_,beforeDestroy:g,beforeUnmount:p,destroyed:A,unmounted:C,render:R,renderTracked:c2,renderTriggered:a2,errorCaptured:E,serverPrefetch:q,expose:K,inheritAttrs:u2,components:T,directives:J,filters:h2}=a;if(o&&Po(o,r,null),n)for(const n2 in n){const X=n[n2];O(X)&&(r[n2]=X.bind(e))}if(s){const n2=s.call(e,e);i2(n2)&&(c.data=K6(n2))}if(L6=!0,i)for(const n2 in i){const X=i[n2],R2=O(X)?X.bind(e,e):O(X.get)?X.get.bind(e,e):Y2,$1=!O(X)&&O(X.set)?X.set.bind(e):Y2,Z2=Y({get:R2,set:$1});Object.defineProperty(r,n2,{enumerable:!0,configurable:!0,get:()=>Z2.value,set:C2=>Z2.value=C2})}if(l)for(const n2 in l)M7(l[n2],r,e,n2);if(f){const n2=O(f)?f.call(e):f;Reflect.ownKeys(n2).forEach(X=>{_o(X,n2[X])})}t&&R8(t,c,"c");function l2(n2,X){D(X)?X.forEach(R2=>n2(R2.bind(e))):X&&n2(X.bind(e))}if(l2(b3,v),l2(h7,z),l2(bo,V),l2(No,P),l2(Lo,N),l2(go,_),l2(yo,E),l2(ko,c2),l2(wo,a2),l2(V7,p),l2(p7,C),l2(So,q),D(K))if(K.length){const n2=c.exposed||(c.exposed={});K.forEach(X=>{Object.defineProperty(n2,X,{get:()=>e[X],set:R2=>e[X]=R2})})}else c.exposed||(c.exposed={});R&&c.render===Y2&&(c.render=R),u2!=null&&(c.inheritAttrs=u2),T&&(c.components=T),J&&(c.directives=J)}function Po(c,a,e=Y2){D(c)&&(c=g6(c));for(const r in c){const s=c[r];let i;i2(s)?"default"in s?i=a3(s.from||r,s.default,!0):i=a3(s.from||r):i=a3(s),w2(i)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:n=>i.value=n}):a[r]=i}}function R8(c,a,e){B2(D(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function M7(c,a,e,r){const s=r.includes(".")?m7(e,r):()=>e[r];if(m2(c)){const i=a[c];O(i)&&X1(s,i)}else if(O(c))X1(s,c.bind(e));else if(i2(c))if(D(c))c.forEach(i=>M7(i,a,e,r));else{const i=O(c.handler)?c.handler.bind(e):a[c.handler];O(i)&&X1(s,i,c)}}function r0(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:s,optionsCache:i,config:{optionMergeStrategies:n}}=c.appContext,l=i.get(a);let f;return l?f=l:!s.length&&!e&&!r?f=a:(f={},s.length&&s.forEach(o=>f3(f,o,n,!0)),f3(f,a,n)),i2(a)&&i.set(a,f),f}function f3(c,a,e,r=!1){const{mixins:s,extends:i}=a;i&&f3(c,i,e,!0),s&&s.forEach(n=>f3(c,n,e,!0));for(const n in a)if(!(r&&n==="expose")){const l=Fo[n]||e&&e[n];c[n]=l?l(c[n],a[n]):a[n]}return c}const Fo={data:D8,props:E8,emits:E8,methods:t4,computed:t4,beforeCreate:g2,created:g2,beforeMount:g2,mounted:g2,beforeUpdate:g2,updated:g2,beforeDestroy:g2,beforeUnmount:g2,destroyed:g2,unmounted:g2,activated:g2,deactivated:g2,errorCaptured:g2,serverPrefetch:g2,components:t4,directives:t4,watch:Ro,provide:D8,inject:Bo};function D8(c,a){return a?c?function(){return v2(O(c)?c.call(this,this):c,O(a)?a.call(this,this):a)}:a:c}function Bo(c,a){return t4(g6(c),g6(a))}function g6(c){if(D(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function g2(c,a){return c?[...new Set([].concat(c,a))]:a}function t4(c,a){return c?v2(Object.create(null),c,a):a}function E8(c,a){return c?D(c)&&D(a)?[...new Set([...c,...a])]:v2(Object.create(null),B8(c),B8(a??{})):a}function Ro(c,a){if(!c)return a;if(!a)return c;const e=v2(Object.create(null),c);for(const r in a)e[r]=g2(c[r],a[r]);return e}function d7(){return{app:null,config:{isNativeTag:vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Do=0;function Eo(c,a){return function(r,s=null){O(r)||(r=v2({},r)),s!=null&&!i2(s)&&(s=null);const i=d7(),n=new WeakSet;let l=!1;const f=i.app={_uid:Do++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zt,get config(){return i.config},set config(o){},use(o,...t){return n.has(o)||(o&&O(o.install)?(n.add(o),o.install(f,...t)):O(o)&&(n.add(o),o(f,...t))),f},mixin(o){return i.mixins.includes(o)||i.mixins.push(o),f},component(o,t){return t?(i.components[o]=t,f):i.components[o]},directive(o,t){return t?(i.directives[o]=t,f):i.directives[o]},mount(o,t,v){if(!l){const z=o2(r,s);return z.appContext=i,t&&a?a(z,o):c(z,o,v),l=!0,f._container=o,o.__vue_app__=f,w3(z.component)||z.component.proxy}},unmount(){l&&(c(null,f._container),delete f._container.__vue_app__)},provide(o,t){return i.provides[o]=t,f},runWithContext(o){o3=f;try{return o()}finally{o3=null}}};return f}}let o3=null;function _o(c,a){if(V2){let e=V2.provides;const r=V2.parent&&V2.parent.provides;r===e&&(e=V2.provides=Object.create(r)),e[c]=a}}function a3(c,a,e=!1){const r=V2||T2;if(r||o3){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:o3._context.provides;if(s&&c in s)return s[c];if(arguments.length>1)return e&&O(a)?a.call(r&&r.proxy):a}}function $o(c,a,e,r=!1){const s={},i={};i3(i,S3,1),c.propsDefaults=Object.create(null),C7(c,a,s,i);for(const n in c.propsOptions[0])n in s||(s[n]=void 0);e?c.props=r?s:Yf(s):c.type.props?c.props=s:c.props=i,c.attrs=i}function Oo(c,a,e,r){const{props:s,attrs:i,vnode:{patchFlag:n}}=c,l=G(s),[f]=c.propsOptions;let o=!1;if((r||n>0)&&!(n&16)){if(n&8){const t=c.vnode.dynamicProps;for(let v=0;v<t.length;v++){let z=t[v];if(C3(c.emitsOptions,z))continue;const V=a[z];if(f)if(W(i,z))V!==i[z]&&(i[z]=V,o=!0);else{const P=J2(z);s[P]=x6(f,l,P,V,c,!1)}else V!==i[z]&&(i[z]=V,o=!0)}}}else{C7(c,a,s,i)&&(o=!0);let t;for(const v in l)(!a||!W(a,v)&&((t=e4(v))===v||!W(a,t)))&&(f?e&&(e[v]!==void 0||e[t]!==void 0)&&(s[v]=x6(f,l,v,void 0,c,!0)):delete s[v]);if(i!==l)for(const v in i)(!a||!W(a,v))&&(delete i[v],o=!0)}o&&r1(c,"set","$attrs")}function C7(c,a,e,r){const[s,i]=c.propsOptions;let n=!1,l;if(a)for(let f in a){if(Z4(f))continue;const o=a[f];let t;s&&W(s,t=J2(f))?!i||!i.includes(t)?e[t]=o:(l||(l={}))[t]=o:C3(c.emitsOptions,f)||(!(f in r)||o!==r[f])&&(r[f]=o,n=!0)}if(i){const f=G(e),o=l||e2;for(let t=0;t<i.length;t++){const v=i[t];e[v]=x6(s,f,v,o[v],c,!W(o,v))}}return n}function x6(c,a,e,r,s,i){const n=c[e];if(n!=null){const l=W(n,"default");if(l&&r===void 0){const f=n.default;if(n.type!==Function&&!n.skipFactory&&O(f)){const{propsDefaults:o}=s;e in o?r=o[e]:(Z1(s),r=o[e]=f.call(null,a),R1())}else r=f}n[0]&&(i&&!l?r=!1:n[1]&&(r===""||r===e4(e))&&(r=!0))}return r}function L7(c,a,e=!1){const r=a.propsCache,s=r.get(c);if(s)return s;const i=c.props,n={},l=[];let f=!1;if(!O(c)){const t=v=>{f=!0;const[z,V]=L7(v,a,!0);v2(n,z),V&&l.push(...V)};!e&&a.mixins.length&&a.mixins.forEach(t),c.extends&&t(c.extends),c.mixins&&c.mixins.forEach(t)}if(!i&&!f)return i2(c)&&r.set(c,G1),G1;if(D(i))for(let t=0;t<i.length;t++){const v=J2(i[t]);_8(v)&&(n[v]=e2)}else if(i)for(const t in i){const v=J2(t);if(_8(v)){const z=i[t],V=n[v]=D(z)||O(z)?{type:z}:v2({},z);if(V){const P=U8(Boolean,V.type),N=U8(String,V.type);V[0]=P>-1,V[1]=N<0||P<N,(P>-1||W(V,"default"))&&l.push(v)}}}const o=[n,l];return i2(c)&&r.set(c,o),o}function _8(c){return c[0]!=="$"}function $8(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function O8(c,a){return $8(c)===$8(a)}function U8(c,a){return D(a)?a.findIndex(e=>O8(e,c)):O(a)&&O8(a,c)?0:-1}const g7=c=>c[0]==="_"||c==="$stable",s0=c=>D(c)?c.map(G2):[G2(c)],Uo=(c,a,e)=>{if(a._n)return a;const r=f7((...s)=>s0(a(...s)),e);return r._c=!1,r},x7=(c,a,e)=>{const r=c._ctx;for(const s in c){if(g7(s))continue;const i=c[s];if(O(i))a[s]=Uo(s,i,r);else if(i!=null){const n=s0(i);a[s]=()=>n}}},b7=(c,a)=>{const e=s0(a);c.slots.default=()=>e},Io=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=G(a),i3(a,"_",e)):x7(a,c.slots={})}else c.slots={},a&&b7(c,a);i3(c.slots,S3,1)},qo=(c,a,e)=>{const{vnode:r,slots:s}=c;let i=!0,n=e2;if(r.shapeFlag&32){const l=a._;l?e&&l===1?i=!1:(v2(s,a),!e&&l===1&&delete s._):(i=!a.$stable,x7(a,s)),n=a}else a&&(b7(c,a),n={default:1});if(i)for(const l in s)!g7(l)&&n[l]==null&&delete s[l]};function b6(c,a,e,r,s=!1){if(D(c)){c.forEach((z,V)=>b6(z,a&&(D(a)?a[V]:a),e,r,s));return}if(c3(r)&&!s)return;const i=r.shapeFlag&4?w3(r.component)||r.component.proxy:r.el,n=s?null:i,{i:l,r:f}=c,o=a&&a.r,t=l.refs===e2?l.refs={}:l.refs,v=l.setupState;if(o!=null&&o!==f&&(m2(o)?(t[o]=null,W(v,o)&&(v[o]=null)):w2(o)&&(o.value=null)),O(f))V1(f,l,12,[n,t]);else{const z=m2(f),V=w2(f);if(z||V){const P=()=>{if(c.f){const N=z?W(v,f)?v[f]:t[f]:f.value;s?D(N)&&U6(N,i):D(N)?N.includes(i)||N.push(i):z?(t[f]=[i],W(v,f)&&(v[f]=t[f])):(f.value=[i],c.k&&(t[c.k]=f.value))}else z?(t[f]=n,W(v,f)&&(v[f]=n)):V&&(f.value=n,c.k&&(t[c.k]=n))};n?(P.id=-1,N2(P,e)):P()}}}const N2=uo;function Wo(c){return Go(c)}function Go(c,a){const e=v6();e.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:n,createText:l,createComment:f,setText:o,setElementText:t,parentNode:v,nextSibling:z,setScopeId:V=Y2,insertStaticContent:P}=c,N=(m,H,u,h=null,M=null,x=null,S=!1,L=null,b=!!H.dynamicChildren)=>{if(m===H)return;m&&!y1(m,H)&&(h=D2(m),C2(m,M,x,!0),m=null),H.patchFlag===-2&&(b=!1,H.dynamicChildren=null);const{type:d,ref:F,shapeFlag:k}=H;switch(d){case N3:_(m,H,u,h);break;case I2:g(m,H,u,h);break;case s6:m==null&&p(H,u,h,S);break;case A2:T(m,H,u,h,M,x,S,L,b);break;default:k&1?R(m,H,u,h,M,x,S,L,b):k&6?J(m,H,u,h,M,x,S,L,b):(k&64||k&128)&&d.process(m,H,u,h,M,x,S,L,b,O1)}F!=null&&M&&b6(F,m&&m.ref,x,H||m,!H)},_=(m,H,u,h)=>{if(m==null)r(H.el=l(H.children),u,h);else{const M=H.el=m.el;H.children!==m.children&&o(M,H.children)}},g=(m,H,u,h)=>{m==null?r(H.el=f(H.children||""),u,h):H.el=m.el},p=(m,H,u,h)=>{[m.el,m.anchor]=P(m.children,H,u,h,m.el,m.anchor)},A=({el:m,anchor:H},u,h)=>{let M;for(;m&&m!==H;)M=z(m),r(m,u,h),m=M;r(H,u,h)},C=({el:m,anchor:H})=>{let u;for(;m&&m!==H;)u=z(m),s(m),m=u;s(H)},R=(m,H,u,h,M,x,S,L,b)=>{S=S||H.type==="svg",m==null?c2(H,u,h,M,x,S,L,b):q(m,H,M,x,S,L,b)},c2=(m,H,u,h,M,x,S,L)=>{let b,d;const{type:F,props:k,shapeFlag:B,transition:$,dirs:U}=m;if(b=m.el=n(m.type,x,k&&k.is,k),B&8?t(b,m.children):B&16&&E(m.children,b,null,h,M,x&&F!=="foreignObject",S,L),U&&b1(m,null,h,"created"),a2(b,m,m.scopeId,S,h),k){for(const Q in k)Q!=="value"&&!Z4(Q)&&i(b,Q,null,k[Q],x,m.children,h,M,L2);"value"in k&&i(b,"value",null,k.value),(d=k.onVnodeBeforeMount)&&W2(d,h,m)}U&&b1(m,null,h,"beforeMount");const Z=jo(M,$);Z&&$.beforeEnter(b),r(b,H,u),((d=k&&k.onVnodeMounted)||Z||U)&&N2(()=>{d&&W2(d,h,m),Z&&$.enter(b),U&&b1(m,null,h,"mounted")},M)},a2=(m,H,u,h,M)=>{if(u&&V(m,u),h)for(let x=0;x<h.length;x++)V(m,h[x]);if(M){let x=M.subTree;if(H===x){const S=M.vnode;a2(m,S,S.scopeId,S.slotScopeIds,M.parent)}}},E=(m,H,u,h,M,x,S,L,b=0)=>{for(let d=b;d<m.length;d++){const F=m[d]=L?u1(m[d]):G2(m[d]);N(null,F,H,u,h,M,x,S,L)}},q=(m,H,u,h,M,x,S)=>{const L=H.el=m.el;let{patchFlag:b,dynamicChildren:d,dirs:F}=H;b|=m.patchFlag&16;const k=m.props||e2,B=H.props||e2;let $;u&&N1(u,!1),($=B.onVnodeBeforeUpdate)&&W2($,u,H,m),F&&b1(H,m,u,"beforeUpdate"),u&&N1(u,!0);const U=M&&H.type!=="foreignObject";if(d?K(m.dynamicChildren,d,L,u,h,U,x):S||X(m,H,L,null,u,h,U,x,!1),b>0){if(b&16)u2(L,H,k,B,u,h,M);else if(b&2&&k.class!==B.class&&i(L,"class",null,B.class,M),b&4&&i(L,"style",k.style,B.style,M),b&8){const Z=H.dynamicProps;for(let Q=0;Q<Z.length;Q++){const t2=Z[Q],E2=k[t2],U1=B[t2];(U1!==E2||t2==="value")&&i(L,t2,E2,U1,M,m.children,u,h,L2)}}b&1&&m.children!==H.children&&t(L,H.children)}else!S&&d==null&&u2(L,H,k,B,u,h,M);(($=B.onVnodeUpdated)||F)&&N2(()=>{$&&W2($,u,H,m),F&&b1(H,m,u,"updated")},h)},K=(m,H,u,h,M,x,S)=>{for(let L=0;L<H.length;L++){const b=m[L],d=H[L],F=b.el&&(b.type===A2||!y1(b,d)||b.shapeFlag&70)?v(b.el):u;N(b,d,F,null,h,M,x,S,!0)}},u2=(m,H,u,h,M,x,S)=>{if(u!==h){if(u!==e2)for(const L in u)!Z4(L)&&!(L in h)&&i(m,L,u[L],null,S,H.children,M,x,L2);for(const L in h){if(Z4(L))continue;const b=h[L],d=u[L];b!==d&&L!=="value"&&i(m,L,d,b,S,H.children,M,x,L2)}"value"in h&&i(m,"value",u.value,h.value)}},T=(m,H,u,h,M,x,S,L,b)=>{const d=H.el=m?m.el:l(""),F=H.anchor=m?m.anchor:l("");let{patchFlag:k,dynamicChildren:B,slotScopeIds:$}=H;$&&(L=L?L.concat($):$),m==null?(r(d,u,h),r(F,u,h),E(H.children,u,F,M,x,S,L,b)):k>0&&k&64&&B&&m.dynamicChildren?(K(m.dynamicChildren,B,u,M,x,S,L),(H.key!=null||M&&H===M.subTree)&&N7(m,H,!0)):X(m,H,u,F,M,x,S,L,b)},J=(m,H,u,h,M,x,S,L,b)=>{H.slotScopeIds=L,m==null?H.shapeFlag&512?M.ctx.activate(H,u,h,S,b):h2(H,u,h,M,x,S,b):k2(m,H,b)},h2=(m,H,u,h,M,x,S)=>{const L=m.component=st(m,h,M);if(g3(m)&&(L.ctx.renderer=O1),nt(L),L.asyncDep){if(M&&M.registerDep(L,l2),!m.el){const b=L.subTree=o2(I2);g(null,b,H,u)}return}l2(L,m,H,u,M,x,S)},k2=(m,H,u)=>{const h=H.component=m.component;if(to(m,H,u))if(h.asyncDep&&!h.asyncResolved){n2(h,H,u);return}else h.next=H,so(h.update),h.update();else H.el=m.el,h.vnode=H},l2=(m,H,u,h,M,x,S)=>{const L=()=>{if(m.isMounted){let{next:F,bu:k,u:B,parent:$,vnode:U}=m,Z=F,Q;N1(m,!1),F?(F.el=U.el,n2(m,F,S)):F=U,k&&Z3(k),(Q=F.props&&F.props.onVnodeBeforeUpdate)&&W2(Q,$,F,U),N1(m,!0);const t2=a6(m),E2=m.subTree;m.subTree=t2,N(E2,t2,v(E2.el),D2(E2),m,M,x),F.el=t2.el,Z===null&&mo(m,t2.el),B&&N2(B,M),(Q=F.props&&F.props.onVnodeUpdated)&&N2(()=>W2(Q,$,F,U),M)}else{let F;const{el:k,props:B}=H,{bm:$,m:U,parent:Z}=m,Q=c3(H);if(N1(m,!1),$&&Z3($),!Q&&(F=B&&B.onVnodeBeforeMount)&&W2(F,Z,H),N1(m,!0),k&&Q3){const t2=()=>{m.subTree=a6(m),Q3(k,m.subTree,m,M,null)};Q?H.type.__asyncLoader().then(()=>!m.isUnmounted&&t2()):t2()}else{const t2=m.subTree=a6(m);N(null,t2,u,h,m,M,x),H.el=t2.el}if(U&&N2(U,M),!Q&&(F=B&&B.onVnodeMounted)){const t2=H;N2(()=>W2(F,Z,t2),M)}(H.shapeFlag&256||Z&&c3(Z.vnode)&&Z.vnode.shapeFlag&256)&&m.a&&N2(m.a,M),m.isMounted=!0,H=u=h=null}},b=m.effect=new W6(L,()=>J6(d),m.scope),d=m.update=()=>b.run();d.id=m.uid,N1(m,!0),d()},n2=(m,H,u)=>{H.component=m;const h=m.vnode.props;m.vnode=H,m.next=null,Oo(m,H.props,h,u),qo(m,H.children,u),r4(),A8(m),s4()},X=(m,H,u,h,M,x,S,L,b=!1)=>{const d=m&&m.children,F=m?m.shapeFlag:0,k=H.children,{patchFlag:B,shapeFlag:$}=H;if(B>0){if(B&128){$1(d,k,u,h,M,x,S,L,b);return}else if(B&256){R2(d,k,u,h,M,x,S,L,b);return}}$&8?(F&16&&L2(d,M,x),k!==d&&t(u,k)):F&16?$&16?$1(d,k,u,h,M,x,S,L,b):L2(d,M,x,!0):(F&8&&t(u,""),$&16&&E(k,u,h,M,x,S,L,b))},R2=(m,H,u,h,M,x,S,L,b)=>{m=m||G1,H=H||G1;const d=m.length,F=H.length,k=Math.min(d,F);let B;for(B=0;B<k;B++){const $=H[B]=b?u1(H[B]):G2(H[B]);N(m[B],$,u,null,M,x,S,L,b)}d>F?L2(m,M,x,!0,!1,k):E(H,u,h,M,x,S,L,b,k)},$1=(m,H,u,h,M,x,S,L,b)=>{let d=0;const F=H.length;let k=m.length-1,B=F-1;for(;d<=k&&d<=B;){const $=m[d],U=H[d]=b?u1(H[d]):G2(H[d]);if(y1($,U))N($,U,u,null,M,x,S,L,b);else break;d++}for(;d<=k&&d<=B;){const $=m[k],U=H[B]=b?u1(H[B]):G2(H[B]);if(y1($,U))N($,U,u,null,M,x,S,L,b);else break;k--,B--}if(d>k){if(d<=B){const $=B+1,U=$<F?H[$].el:h;for(;d<=B;)N(null,H[d]=b?u1(H[d]):G2(H[d]),u,U,M,x,S,L,b),d++}}else if(d>B)for(;d<=k;)C2(m[d],M,x,!0),d++;else{const $=d,U=d,Z=new Map;for(d=U;d<=B;d++){const y2=H[d]=b?u1(H[d]):G2(H[d]);y2.key!=null&&Z.set(y2.key,d)}let Q,t2=0;const E2=B-U+1;let U1=!1,d8=0;const n4=new Array(E2);for(d=0;d<E2;d++)n4[d]=0;for(d=$;d<=k;d++){const y2=m[d];if(t2>=E2){C2(y2,M,x,!0);continue}let q2;if(y2.key!=null)q2=Z.get(y2.key);else for(Q=U;Q<=B;Q++)if(n4[Q-U]===0&&y1(y2,H[Q])){q2=Q;break}q2===void 0?C2(y2,M,x,!0):(n4[q2-U]=d+1,q2>=d8?d8=q2:U1=!0,N(y2,H[q2],u,null,M,x,S,L,b),t2++)}const C8=U1?Ko(n4):G1;for(Q=C8.length-1,d=E2-1;d>=0;d--){const y2=U+d,q2=H[y2],L8=y2+1<F?H[y2+1].el:h;n4[d]===0?N(null,q2,u,L8,M,x,S,L,b):U1&&(Q<0||d!==C8[Q]?Z2(q2,u,L8,2):Q--)}}},Z2=(m,H,u,h,M=null)=>{const{el:x,type:S,transition:L,children:b,shapeFlag:d}=m;if(d&6){Z2(m.component.subTree,H,u,h);return}if(d&128){m.suspense.move(H,u,h);return}if(d&64){S.move(m,H,u,O1);return}if(S===A2){r(x,H,u);for(let k=0;k<b.length;k++)Z2(b[k],H,u,h);r(m.anchor,H,u);return}if(S===s6){A(m,H,u);return}if(h!==2&&d&1&&L)if(h===0)L.beforeEnter(x),r(x,H,u),N2(()=>L.enter(x),M);else{const{leave:k,delayLeave:B,afterLeave:$}=L,U=()=>r(x,H,u),Z=()=>{k(x,()=>{U(),$&&$()})};B?B(x,U,Z):Z()}else r(x,H,u)},C2=(m,H,u,h=!1,M=!1)=>{const{type:x,props:S,ref:L,children:b,dynamicChildren:d,shapeFlag:F,patchFlag:k,dirs:B}=m;if(L!=null&&b6(L,null,u,m,!0),F&256){H.ctx.deactivate(m);return}const $=F&1&&B,U=!c3(m);let Z;if(U&&(Z=S&&S.onVnodeBeforeUnmount)&&W2(Z,H,m),F&6)H2(m.component,u,h);else{if(F&128){m.suspense.unmount(u,h);return}$&&b1(m,null,H,"beforeUnmount"),F&64?m.type.remove(m,H,u,M,O1,h):d&&(x!==A2||k>0&&k&64)?L2(d,H,u,!1,!0):(x===A2&&k&384||!M&&F&16)&&L2(b,H,u),h&&B4(m)}(U&&(Z=S&&S.onVnodeUnmounted)||$)&&N2(()=>{Z&&W2(Z,H,m),$&&b1(m,null,H,"unmounted")},u)},B4=m=>{const{type:H,el:u,anchor:h,transition:M}=m;if(H===A2){j(u,h);return}if(H===s6){C(m);return}const x=()=>{s(u),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(m.shapeFlag&1&&M&&!M.persisted){const{leave:S,delayLeave:L}=M,b=()=>S(u,x);L?L(m.el,x,b):b()}else x()},j=(m,H)=>{let u;for(;m!==H;)u=z(m),s(m),m=u;s(H)},H2=(m,H,u)=>{const{bum:h,scope:M,update:x,subTree:S,um:L}=m;h&&Z3(h),M.stop(),x&&(x.active=!1,C2(S,m,H,u)),L&&N2(L,H),N2(()=>{m.isUnmounted=!0},H),H&&H.pendingBranch&&!H.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===H.pendingId&&(H.deps--,H.deps===0&&H.resolve())},L2=(m,H,u,h=!1,M=!1,x=0)=>{for(let S=x;S<m.length;S++)C2(m[S],H,u,h,M)},D2=m=>m.shapeFlag&6?D2(m.component.subTree):m.shapeFlag&128?m.suspense.next():z(m.anchor||m.el),M8=(m,H,u)=>{m==null?H._vnode&&C2(H._vnode,null,null,!0):N(H._vnode||null,m,H,null,null,null,u),A8(),i7(),H._vnode=m},O1={p:N,um:C2,m:Z2,r:B4,mt:h2,mc:E,pc:X,pbc:K,n:D2,o:c};let X3,Q3;return a&&([X3,Q3]=a(O1)),{render:M8,hydrate:X3,createApp:Eo(M8,X3)}}function N1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function jo(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function N7(c,a,e=!1){const r=c.children,s=a.children;if(D(r)&&D(s))for(let i=0;i<r.length;i++){const n=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=u1(s[i]),l.el=n.el),e||N7(n,l)),l.type===N3&&(l.el=n.el)}}function Ko(c){const a=c.slice(),e=[0];let r,s,i,n,l;const f=c.length;for(r=0;r<f;r++){const o=c[r];if(o!==0){if(s=e[e.length-1],c[s]<o){a[r]=s,e.push(r);continue}for(i=0,n=e.length-1;i<n;)l=i+n>>1,c[e[l]]<o?i=l+1:n=l;o<c[e[i]]&&(i>0&&(a[r]=e[i-1]),e[i]=r)}}for(i=e.length,n=e[i-1];i-- >0;)e[i]=n,n=a[n];return e}const Yo=c=>c.__isTeleport,A2=Symbol.for("v-fgt"),N3=Symbol.for("v-txt"),I2=Symbol.for("v-cmt"),s6=Symbol.for("v-stc"),v4=[];let O2=null;function d2(c=!1){v4.push(O2=c?null:[])}function Xo(){v4.pop(),O2=v4[v4.length-1]||null}let M4=1;function I8(c){M4+=c}function S7(c){return c.dynamicChildren=M4>0?O2||G1:null,Xo(),M4>0&&O2&&O2.push(c),c}function x2(c,a,e,r,s,i){return S7(I(c,a,e,r,s,i,!0))}function Qo(c,a,e,r,s){return S7(o2(c,a,e,r,s,!0))}function N6(c){return c?c.__v_isVNode===!0:!1}function y1(c,a){return c.type===a.type&&c.key===a.key}const S3="__vInternal",w7=({key:c})=>c??null,e3=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?m2(c)||w2(c)||O(c)?{i:T2,r:c,k:a,f:!!e}:c:null);function I(c,a=null,e=null,r=0,s=null,i=c===A2?0:1,n=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&w7(a),ref:a&&e3(a),scopeId:L3,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:T2};return l?(i0(f,e),i&128&&c.normalize(f)):e&&(f.shapeFlag|=m2(e)?8:16),M4>0&&!n&&O2&&(f.patchFlag>0||i&6)&&f.patchFlag!==32&&O2.push(f),f}const o2=Jo;function Jo(c,a=null,e=null,r=0,s=null,i=!1){if((!c||c===Ho)&&(c=I2),N6(c)){const l=M1(c,a,!0);return e&&i0(l,e),M4>0&&!i&&O2&&(l.shapeFlag&6?O2[O2.indexOf(c)]=l:O2.push(l)),l.patchFlag|=-2,l}if(mt(c)&&(c=c.__vccOpts),a){a=Zo(a);let{class:l,style:f}=a;l&&!m2(l)&&(a.class=X2(l)),i2(f)&&(Q5(f)&&!D(f)&&(f=v2({},f)),a.style=p3(f))}const n=m2(c)?1:zo(c)?128:Yo(c)?64:i2(c)?4:O(c)?2:0;return I(c,a,e,r,s,n,i,!0)}function Zo(c){return c?Q5(c)||S3 in c?v2({},c):c:null}function M1(c,a,e=!1){const{props:r,ref:s,patchFlag:i,children:n}=c,l=a?at(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:l,key:l&&w7(l),ref:a&&a.ref?e&&s?D(s)?s.concat(e3(a)):[s,e3(a)]:e3(a):s,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==A2?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&M1(c.ssContent),ssFallback:c.ssFallback&&M1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function k7(c=" ",a=0){return o2(N3,null,c,a)}function ct(c="",a=!1){return a?(d2(),Qo(I2,null,c)):o2(I2,null,c)}function G2(c){return c==null||typeof c=="boolean"?o2(I2):D(c)?o2(A2,null,c.slice()):typeof c=="object"?u1(c):o2(N3,null,String(c))}function u1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:M1(c)}function i0(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(D(a))e=16;else if(typeof a=="object")if(r&65){const s=a.default;s&&(s._c&&(s._d=!1),i0(c,s()),s._c&&(s._d=!0));return}else{e=32;const s=a._;!s&&!(S3 in a)?a._ctx=T2:s===3&&T2&&(T2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else O(a)?(a={default:a,_ctx:T2},e=32):(a=String(a),r&64?(e=16,a=[k7(a)]):e=8);c.children=a,c.shapeFlag|=e}function at(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const s in r)if(s==="class")a.class!==r.class&&(a.class=X2([a.class,r.class]));else if(s==="style")a.style=p3([a.style,r.style]);else if(z3(s)){const i=a[s],n=r[s];n&&i!==n&&!(D(i)&&i.includes(n))&&(a[s]=i?[].concat(i,n):n)}else s!==""&&(a[s]=r[s])}return a}function W2(c,a,e,r=null){B2(c,a,7,[e,r])}const et=d7();let rt=0;function st(c,a,e){const r=c.type,s=(a?a.appContext:c.appContext)||et,i={uid:rt++,vnode:c,type:r,parent:a,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:L7(r,s),emitsOptions:l7(r,s),emit:null,emitted:null,propsDefaults:e2,inheritAttrs:r.inheritAttrs,ctx:e2,data:e2,props:e2,attrs:e2,slots:e2,refs:e2,setupState:e2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=lo.bind(null,i),c.ce&&c.ce(i),i}let V2=null;const it=()=>V2||T2;let n0,I1,q8="__VUE_INSTANCE_SETTERS__";(I1=v6()[q8])||(I1=v6()[q8]=[]),I1.push(c=>V2=c),n0=c=>{I1.length>1?I1.forEach(a=>a(c)):I1[0](c)};const Z1=c=>{n0(c),c.scope.on()},R1=()=>{V2&&V2.scope.off(),n0(null)};function y7(c){return c.vnode.shapeFlag&4}let d4=!1;function nt(c,a=!1){d4=a;const{props:e,children:r}=c.vnode,s=y7(c);$o(c,e,s,a),Io(c,r);const i=s?lt(c,a):void 0;return d4=!1,i}function lt(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=J5(new Proxy(c.ctx,Ao));const{setup:r}=e;if(r){const s=c.setupContext=r.length>1?ot(c):null;Z1(c),r4();const i=V1(r,c,0,[c.props,s]);if(s4(),R1(),B5(i)){if(i.then(R1,R1),a)return i.then(n=>{W8(c,n,a)}).catch(n=>{d3(n,c,0)});c.asyncDep=i}else W8(c,i,a)}else A7(c,a)}function W8(c,a,e){O(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:i2(a)&&(c.setupState=a7(a)),A7(c,e)}let G8;function A7(c,a,e){const r=c.type;if(!c.render){if(!a&&G8&&!r.render){const s=r.template||r0(c).template;if(s){const{isCustomElement:i,compilerOptions:n}=c.appContext.config,{delimiters:l,compilerOptions:f}=r,o=v2(v2({isCustomElement:i,delimiters:l},n),f);r.render=G8(s,o)}}c.render=r.render||Y2}{Z1(c),r4();try{To(c)}finally{s4(),R1()}}}function ft(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return S2(c,"get","$attrs"),a[e]}}))}function ot(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return ft(c)},slots:c.slots,emit:c.emit,expose:a}}function w3(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(a7(J5(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in H4)return H4[e](c)},has(a,e){return e in a||e in H4}}))}function tt(c,a=!0){return O(c)?c.displayName||c.name:c.name||a&&c.__name}function mt(c){return O(c)&&"__vccOpts"in c}const Y=(c,a)=>ao(c,a,d4);function T7(c,a,e){const r=arguments.length;return r===2?i2(a)&&!D(a)?N6(a)?o2(c,null,[a]):o2(c,a):o2(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&N6(e)&&(e=[e]),o2(c,a,e))}const Ht=Symbol.for("v-scx"),vt=()=>a3(Ht),zt="3.3.13",ut="http://www.w3.org/2000/svg",A1=typeof document<"u"?document:null,j8=A1&&A1.createElement("template"),ht={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const s=a?A1.createElementNS(ut,c):A1.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:c=>A1.createTextNode(c),createComment:c=>A1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>A1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,s,i){const n=e?e.previousSibling:a.lastChild;if(s&&(s===i||s.nextSibling))for(;a.insertBefore(s.cloneNode(!0),e),!(s===i||!(s=s.nextSibling)););else{j8.innerHTML=r?`<svg>${c}</svg>`:c;const l=j8.content;if(r){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}a.insertBefore(l,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},m1="transition",l4="animation",C4=Symbol("_vtc"),l0=(c,{slots:a})=>T7(Co,Vt(c),a);l0.displayName="Transition";const P7={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};l0.props=v2({},H7,P7);const S1=(c,a=[])=>{D(c)?c.forEach(e=>e(...a)):c&&c(...a)},K8=c=>c?D(c)?c.some(a=>a.length>1):c.length>1:!1;function Vt(c){const a={};for(const T in c)T in P7||(a[T]=c[T]);if(c.css===!1)return a;const{name:e="v",type:r,duration:s,enterFromClass:i=`${e}-enter-from`,enterActiveClass:n=`${e}-enter-active`,enterToClass:l=`${e}-enter-to`,appearFromClass:f=i,appearActiveClass:o=n,appearToClass:t=l,leaveFromClass:v=`${e}-leave-from`,leaveActiveClass:z=`${e}-leave-active`,leaveToClass:V=`${e}-leave-to`}=c,P=pt(s),N=P&&P[0],_=P&&P[1],{onBeforeEnter:g,onEnter:p,onEnterCancelled:A,onLeave:C,onLeaveCancelled:R,onBeforeAppear:c2=g,onAppear:a2=p,onAppearCancelled:E=A}=a,q=(T,J,h2)=>{w1(T,J?t:l),w1(T,J?o:n),h2&&h2()},K=(T,J)=>{T._isLeaving=!1,w1(T,v),w1(T,V),w1(T,z),J&&J()},u2=T=>(J,h2)=>{const k2=T?a2:p,l2=()=>q(J,T,h2);S1(k2,[J,l2]),Y8(()=>{w1(J,T?f:i),H1(J,T?t:l),K8(k2)||X8(J,r,N,l2)})};return v2(a,{onBeforeEnter(T){S1(g,[T]),H1(T,i),H1(T,n)},onBeforeAppear(T){S1(c2,[T]),H1(T,f),H1(T,o)},onEnter:u2(!1),onAppear:u2(!0),onLeave(T,J){T._isLeaving=!0;const h2=()=>K(T,J);H1(T,v),Ct(),H1(T,z),Y8(()=>{T._isLeaving&&(w1(T,v),H1(T,V),K8(C)||X8(T,r,_,h2))}),S1(C,[T,h2])},onEnterCancelled(T){q(T,!1),S1(A,[T])},onAppearCancelled(T){q(T,!0),S1(E,[T])},onLeaveCancelled(T){K(T),S1(R,[T])}})}function pt(c){if(c==null)return null;if(i2(c))return[i6(c.enter),i6(c.leave)];{const a=i6(c);return[a,a]}}function i6(c){return Mf(c)}function H1(c,a){a.split(/\s+/).forEach(e=>e&&c.classList.add(e)),(c[C4]||(c[C4]=new Set)).add(a)}function w1(c,a){a.split(/\s+/).forEach(r=>r&&c.classList.remove(r));const e=c[C4];e&&(e.delete(a),e.size||(c[C4]=void 0))}function Y8(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let Mt=0;function X8(c,a,e,r){const s=c._endId=++Mt,i=()=>{s===c._endId&&r()};if(e)return setTimeout(i,e);const{type:n,timeout:l,propCount:f}=dt(c,a);if(!n)return r();const o=n+"end";let t=0;const v=()=>{c.removeEventListener(o,z),i()},z=V=>{V.target===c&&++t>=f&&v()};setTimeout(()=>{t<f&&v()},l+1),c.addEventListener(o,z)}function dt(c,a){const e=window.getComputedStyle(c),r=P=>(e[P]||"").split(", "),s=r(`${m1}Delay`),i=r(`${m1}Duration`),n=Q8(s,i),l=r(`${l4}Delay`),f=r(`${l4}Duration`),o=Q8(l,f);let t=null,v=0,z=0;a===m1?n>0&&(t=m1,v=n,z=i.length):a===l4?o>0&&(t=l4,v=o,z=f.length):(v=Math.max(n,o),t=v>0?n>o?m1:l4:null,z=t?t===m1?i.length:f.length:0);const V=t===m1&&/\b(transform|all)(,|$)/.test(r(`${m1}Property`).toString());return{type:t,timeout:v,propCount:z,hasTransform:V}}function Q8(c,a){for(;c.length<a.length;)c=c.concat(c);return Math.max(...a.map((e,r)=>J8(e)+J8(c[r])))}function J8(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function Ct(){return document.body.offsetHeight}function Lt(c,a,e){const r=c[C4];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const f0=Symbol("_vod"),gt={beforeMount(c,{value:a},{transition:e}){c[f0]=c.style.display==="none"?"":c.style.display,e&&a?e.beforeEnter(c):f4(c,a)},mounted(c,{value:a},{transition:e}){e&&a&&e.enter(c)},updated(c,{value:a,oldValue:e},{transition:r}){!a!=!e&&(r?a?(r.beforeEnter(c),f4(c,!0),r.enter(c)):r.leave(c,()=>{f4(c,!1)}):f4(c,a))},beforeUnmount(c,{value:a}){f4(c,a)}};function f4(c,a){c.style.display=a?c[f0]:"none"}const xt=Symbol("");function bt(c,a,e){const r=c.style,s=m2(e);if(e&&!s){if(a&&!m2(a))for(const i in a)e[i]==null&&S6(r,i,"");for(const i in e)S6(r,i,e[i])}else{const i=r.display;if(s){if(a!==e){const n=r[xt];n&&(e+=";"+n),r.cssText=e}}else a&&c.removeAttribute("style");f0 in c&&(r.display=i)}}const Z8=/\s*!important$/;function S6(c,a,e){if(D(e))e.forEach(r=>S6(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=Nt(c,a);Z8.test(e)?c.setProperty(e4(r),e.replace(Z8,""),"important"):c[r]=e}}const c5=["Webkit","Moz","ms"],n6={};function Nt(c,a){const e=n6[a];if(e)return e;let r=J2(a);if(r!=="filter"&&r in c)return n6[a]=r;r=V3(r);for(let s=0;s<c5.length;s++){const i=c5[s]+r;if(i in c)return n6[a]=i}return a}const a5="http://www.w3.org/1999/xlink";function St(c,a,e,r,s){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(a5,a.slice(6,a.length)):c.setAttributeNS(a5,a,e);else{const i=bf(a);e==null||i&&!E5(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function wt(c,a,e,r,s,i,n){if(a==="innerHTML"||a==="textContent"){r&&n(r,s,i),c[a]=e??"";return}const l=c.tagName;if(a==="value"&&l!=="PROGRESS"&&!l.includes("-")){c._value=e;const o=l==="OPTION"?c.getAttribute("value"):c.value,t=e??"";o!==t&&(c.value=t),e==null&&c.removeAttribute(a);return}let f=!1;if(e===""||e==null){const o=typeof c[a];o==="boolean"?e=E5(e):e==null&&o==="string"?(e="",f=!0):o==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function kt(c,a,e,r){c.addEventListener(a,e,r)}function yt(c,a,e,r){c.removeEventListener(a,e,r)}const e5=Symbol("_vei");function At(c,a,e,r,s=null){const i=c[e5]||(c[e5]={}),n=i[a];if(r&&n)n.value=r;else{const[l,f]=Tt(a);if(r){const o=i[a]=Bt(r,s);kt(c,l,o,f)}else n&&(yt(c,l,n,f),i[a]=void 0)}}const r5=/(?:Once|Passive|Capture)$/;function Tt(c){let a;if(r5.test(c)){a={};let r;for(;r=c.match(r5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):e4(c.slice(2)),a]}let l6=0;const Pt=Promise.resolve(),Ft=()=>l6||(Pt.then(()=>l6=0),l6=Date.now());function Bt(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;B2(Rt(r,e.value),a,5,[r])};return e.value=c,e.attached=Ft(),e}function Rt(c,a){if(D(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>s=>!s._stopped&&r&&r(s))}else return a}const s5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Dt=(c,a,e,r,s=!1,i,n,l,f)=>{a==="class"?Lt(c,r,s):a==="style"?bt(c,e,r):z3(a)?O6(a)||At(c,a,e,r,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Et(c,a,r,s))?wt(c,a,r,i,n,l,f):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),St(c,a,r,s))};function Et(c,a,e,r){if(r)return!!(a==="innerHTML"||a==="textContent"||a in c&&s5(a)&&O(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const s=c.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return s5(a)&&m2(e)?!1:a in c}const _t=["ctrl","shift","alt","meta"],$t={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>_t.some(e=>c[`${e}Key`]&&!a.includes(e))},F7=(c,a)=>{const e=c._withMods||(c._withMods={}),r=a.join(".");return e[r]||(e[r]=(s,...i)=>{for(let n=0;n<a.length;n++){const l=$t[a[n]];if(l&&l(s,a))return}return c(s,...i)})},Ot=v2({patchProp:Dt},ht);let i5;function Ut(){return i5||(i5=Wo(Ot))}const It=(...c)=>{const a=Ut().createApp(...c),{mount:e}=a;return a.mount=r=>{const s=qt(r);if(!s)return;const i=a._component;!O(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const n=e(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),n},a};function qt(c){return m2(c)?document.querySelector(c):c}const I4=[{songName:"1.5 кг Отличного Пюре - Эмо.mp3",sort:181,bestParties:[{start:25,end:84}],songText:"@assets/texts/1.5 кг Отличного Пюре.txt",notAggressive:!0},{songName:"Angel Vivaldi - A Martian Winter.mp3"},{songName:"Angel Vivaldi - An Erisian Autumn.mp3",sort:50,bestParties:[{start:78,end:104},{start:176,end:220},{start:246,end:268}],notAggressive:!0},{songName:"As I Lay Dying - Forever.mp3",sort:210,bestParties:[{start:0,end:25}]},{songName:"As I Lay Dying - Nothing Left [2007].mp3",sort:40,bestParties:[{start:0,end:57}]},{songName:"As I Lay Dying - The Sound Оf Truth.mp3",sort:60,bestParties:[{start:0,end:36},{start:59,end:121}]},{songName:"Aspirin Rose - Fucking Perfect (Pink cover).mp3"},{songName:"August Burns Red - A Shot Below The Belt.mp3",sort:142,bestParties:[{start:0,end:30},{start:90,end:114},{start:164,end:175}]},{songName:"August Burns Red - Barbarian.mp3",sort:20,bestParties:[{start:21,end:32},{start:70,end:88},{start:113,end:152}]},{songName:"August Burns Red - Consumer.mp3"},{songName:"August Burns Red - Indonesia.mp3",sort:141,bestParties:[{start:84,end:117},{start:161,end:180}]},{songName:"August Burns Red - Meridian.mp3",notAggressive:!0},{songName:"August Burns Red - Truth of a Liar.mp3"},{songName:"August Burns Red - Your Little Suburbia Is in Ruins.mp3",sort:70,bestParties:[{start:12,end:27},{start:107,end:125},{start:146,end:178}]},{songName:"Anaal Nathrakh - Between Shit and Piss We Are Born.mp3"},{songName:"Anaal Nathrakh - In The Constellation Of The Black Widow.mp3",sort:220,bestParties:[{start:65,end:85},{start:114,end:141}]},{songName:"Between the Buried and Me - All Bodies.mp3"},{songName:"Between The Buried And Me - Ants Of The Sky.mp3",sort:113,bestParties:[{start:0,end:108}]},{songName:"Between The Buried And Me - Sun Of Nothing.mp3"},{songName:"Between The Buried And Me - Swim To The Moon.mp3",sort:10,bestParties:[{start:135,end:160},{start:500,end:551},{start:982,end:1022}]},{songName:"Breakwater - Eleven.mp3"},{songName:"Breakwater - five.mp3"},{songName:"Bullet For My Valentine - Hand Of Blood.mp3"},{songName:"Cerebral Bore - The Bald Cadaver.mp3",sort:280,bestParties:[{start:5.5,end:50}]},{songName:"Children Of Bodom - Are You Dead Yet.mp3",sort:110,bestParties:[{start:82,end:114}]},{songName:"Cosmonauts Day - The Captain.mp3",notAggressive:!0},{songName:"Death In Vegas - Dirge.mp3"},{songName:"Dragonforce - The Flame of Youth.mp3",sort:120,bestParties:[{start:46,end:65},{start:289,end:317}]},{songName:"If These Trees Could Talk - From Roots to Needles.mp3",notAggressive:!0},{songName:"In Flames - Clayman.mp3",sort:130,bestParties:[{start:0,end:21}]},{songName:"In Flames - Reflect the Storm.mp3"},{songName:"Killing Floor - Abandon All.mp3"},{songName:"Killing Floor OST - Wake.mp3",notAggressive:!0},{songName:"Long Distance Calling - Black Paper Planes.mp3",notAggressive:!0},{songName:"Machine Head - Beautiful Mourning.mp3"},{songName:"Machine Head - Hallowed Be Thy Name.mp3"},{songName:"Machine Head - Halo.mp3"},{songName:"Ozoi The Maid - Unfortunately.mp3",sort:112,bestParties:[{start:59,end:84},{start:165,end:218},{start:240,end:253}]},{songName:"Ozoi The Maid Yakui The Maid - Lanterns.mp3",sort:111,bestParties:[{start:146,end:218}]},{songName:"Ozoi The Maid Yakui The Maid - Wonderland.mp3",sort:30,bestParties:[{start:115,end:243},{start:355,end:442}]},{songName:"Ozoi The Maid, Yakui The Maid - Frontier.mp3"},{songName:"Psygnosis - FIIIX 2.0.mp3"},{songName:"Psygnosis - Lost in Oblivion.mp3",sort:140,bestParties:[{start:292,end:356}]},{songName:"Psygnosis - MehMeh.mp3"},{songName:"Psygnosis - Phrase 7.mp3",notAggressive:!0},{songName:"Psygnosis - Synaptic Plasticity.mp3"},{songName:"Psygnosis - The Judgement.mp3"},{songName:"Raunchy - To the Lighthouse.mp3"},{songName:"Raunchy - Twelve Feet Tall.mp3",sort:150,bestParties:[{start:65,end:96}]},{songName:"Raunchy - Wasteland Discotheque.mp3",sort:190,bestParties:[{start:0,end:34},{start:63,end:101}]},{songName:"Rhapsody - The Mighty Ride of the Firelord.mp3"},{songName:"Rhapsody of Fire - Wisdom of the Kings.mp3"},{songName:"Rise Of The Northstar - The New Path.mp3"},{songName:"Rise Of The Northstar - What The Fuck.mp3",sort:160,bestParties:[{start:45,end:79}]},{songName:"Siberian Meat Grinder feat Distemper - Пламя в Груди.mp3",sort:211,bestParties:[{start:49,end:68}]},{songName:"The Doors - Alabama song.mp3",notAggressive:!0},{songName:"The Doors - The End.mp3",notAggressive:!0},{songName:"The Faceless - Shake The Disease.mp3"},{songName:"The Five Stars - Atom Bomb Baby.mp3",notAggressive:!0},{songName:"The HAARP Machine - Esoteric Agenda.mp3"},{songName:"Toundra - Bizancio Byzantium.mp3",sort:180,bestParties:[{start:127,end:224},{start:406,end:480}],notAggressive:!0},{songName:"URO & .corridoiokraut. - Nappi.mp3",notAggressive:!0},{songName:"What Mad Universe - Colossus.mp3",notAggressive:!0},{songName:"What Mad Universe - the world of leviathan.mp3",notAggressive:!0},{songName:"What Mad Universe - head of column.mp3",sort:170,bestParties:[{start:30,end:65}],notAggressive:!0},{songName:"What Mad Universe - mythical sacred firebird.mp3",notAggressive:!0},{songName:"What Mad Universe - Nebula My Love.mp3",sort:80,bestParties:[{start:162,end:246},{start:260,end:358}],notAggressive:!0},{songName:"What Mad Universe - Starborne.mp3",sort:90,bestParties:[{start:85,end:105},{start:144,end:185}],notAggressive:!0},{songName:"Within The Ruins - Ataxia II.mp3"},{songName:"Within The Ruins - Beautiful Agony.mp3"},{songName:"ZEROMANCER - Dr. Online.mp3"},{songName:"zYnthetic - Abandon All v3.mp3",sort:100,bestParties:[{start:0,end:30},{start:60,end:89}],notAggressive:!0},{songName:"zYnthetic - SSplug.mp3"}];function Wt(){const c=p2(I4),a=p2(I4.filter(C=>C.sort)),e=p2(I4.filter(C=>C.notAggressive)),r=p2(0),s=p2(0);b3(()=>{c.value=I4,s.value=z.value.length});const i=Y(()=>{const C="/player_with_my_favorite_music/";return z.value[r.value]?`${C}music/${V.value.songName}`:""}),n=Y(()=>[...a.value].sort((C,R)=>C.sort-R.sort)),l=p2(1);function f(C){!(l.value===4&&C.id===2)&&!(l.value===2&&C.id===4)&&(r.value=0),l.value=C.id,s.value=v.value.length}t7(()=>{});const o=Y(()=>{switch(l.value){case 1:return c.value;case 2:return n.value;case 3:return e.value;case 4:return n.value;default:return[]}}),t=Y(()=>l.value===4?n.value[r.value].bestParties:[]),v=Y(()=>p.value?P():o.value),z=Y(()=>v.value.map(C=>C.songName)),V=Y(()=>v.value[r.value]);function P(){return o.value.map(C=>({...C,sort:Math.random()})).sort((C,R)=>C.sort-R.sort).map(({sort:C,...R})=>R)}function N(){r.value+=1,r.value>=v.value.length&&(r.value=0)}function _(){r.value=(r.value-1+v.value.length)%v.value.length}function g(C){r.value=C}const p=p2(!1);function A(){p.value=!p.value}return{totalNumbSongs:s,defaultTrackList:c,topTrackList:a,bestParties:t,nextTrack:N,previousTrack:_,pathToCurrentFile:i,sortingTopTrackList:n,currentTrackIndex:r,changeTab:f,selectTrack:g,tabSelected:l,isRandomTracks:p,handlerRandomBtn:A,currentTracks:v,currentTracksList:z,currentSong:V}}const Gt=l1({name:"TrackList",props:{currentTracks:{type:Array,default:()=>[]},currentTrackIndex:{type:Number,default:0}},emits:["select-track-from-list"],setup(c,{emit:a}){const e=Y(()=>{var i;return(i=c.currentTracks)==null?void 0:i.map(n=>{const l=n.lastIndexOf("/"),f=n==null?void 0:n.lastIndexOf(".");return n&&n.substring(l+1,f)||""})});X1(()=>c.currentTrackIndex,()=>{r()});async function r(){await r7();const i=document.querySelector(".selected");i==null||i.scrollIntoView({behavior:"smooth",block:"center"})}function s(i){a("select-track-from-list",i)}return{currentTracksWithCorrectNames:e,selectTrackFromList:s}}}),g1=(c,a)=>{const e=c.__vccOpts||c;for(const[r,s]of a)e[r]=s;return e},jt=["onClick"];function Kt(c,a,e,r,s,i){return d2(),x2("div",null,[I("ul",{ref:"sidebarRef",class:"sidebar",onClick:a[0]||(a[0]=F7(()=>{},["stop"]))},[(d2(!0),x2(A2,null,e0(c.currentTracksWithCorrectNames,(n,l)=>(d2(),x2("li",{key:l,class:X2({selected:l===c.currentTrackIndex}),onClick:f=>c.selectTrackFromList(l)},Q2(l+1)+". "+Q2(n),11,jt))),128))],512)])}const Yt=g1(Gt,[["render",Kt],["__scopeId","data-v-a7638e51"]]),Xt=l1({props:{tabSelected:{type:Number,default:1}},emits:["change-tab"],setup(c,{emit:a}){const e=[{label:"All music",id:1,url:"all"},{label:"Top",id:2,url:"top"},{label:"Top Shorts",id:4,url:"shorts"},{label:"Not aggressive",id:3,url:"not_aggressive"}];function r(s){c.tabSelected!==s.id&&a("change-tab",s)}return{btnHandler:r,tabsOption:e}}}),Qt={class:"tabs"},Jt=["onClick"];function Zt(c,a,e,r,s,i){return d2(),x2("div",Qt,[(d2(!0),x2(A2,null,e0(c.tabsOption,(n,l)=>(d2(),x2("button",{key:l,class:X2({active:n.id===c.tabSelected}),onClick:f=>c.btnHandler(n)},Q2(n.label),11,Jt))),128))])}const cm=g1(Xt,[["render",Zt],["__scopeId","data-v-cbda84b7"]]),am="modulepreload",em=function(c){return"/player_with_my_favorite_music/"+c},n5={},c1=function(a,e,r){let s=Promise.resolve();if(e&&e.length>0){const i=document.getElementsByTagName("link");s=Promise.all(e.map(n=>{if(n=em(n),n in n5)return;n5[n]=!0;const l=n.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(!!r)for(let v=i.length-1;v>=0;v--){const z=i[v];if(z.href===n&&(!l||z.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${f}`))return;const t=document.createElement("link");if(t.rel=l?"stylesheet":am,l||(t.as="script",t.crossOrigin=""),t.href=n,document.head.appendChild(t),l)return new Promise((v,z)=>{t.addEventListener("load",v),t.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${n}`)))})}))}return s.then(()=>a()).catch(i=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i})},rm=l1({name:"MainInfoBand",props:{songName:{type:String,default:""}},setup(c){const a=p2({});b3(async()=>{const i=Object.assign({"/src/assets/images/1.5 кг Отличного Пюре.jpg":()=>c1(()=>import("./1.5 кг Отличного Пюре-OtALhitf.js"),__vite__mapDeps([])),"/src/assets/images/Anaal Nathrakh.jpeg":()=>c1(()=>import("./Anaal Nathrakh-7BxhGCGJ.js"),__vite__mapDeps([])),"/src/assets/images/As I Lay Dying.jpg":()=>c1(()=>import("./As I Lay Dying-28Nx7ZD0.js"),__vite__mapDeps([])),"/src/assets/images/August Burns Red.jpg":()=>c1(()=>import("./August Burns Red-MIqwgacb.js"),__vite__mapDeps([])),"/src/assets/images/Between The Buried And Me.webp":()=>c1(()=>import("./Between The Buried And Me-TSs49cb7.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid Yakui The Maid.jpg":()=>c1(()=>import("./Ozoi The Maid Yakui The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid.jpg":()=>c1(()=>import("./Ozoi The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/What Mad Universe.jpg":()=>c1(()=>import("./What Mad Universe-s6ECnjUY.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.png":()=>c1(()=>import("./default_logo-9B2Fgjf-.js"),__vite__mapDeps([]))});for(const n in i){const l=n.replace(/^.*\/(.*)\.\w+$/,"$1");a.value[l]=(await i[n]()).default}});const e=Y(()=>{var n;const i=(n=c.songName)==null?void 0:n.lastIndexOf(".");return c.songName&&c.songName.substring(0,i)||""}),r=Y(()=>{const[i,n]=e.value.split(" - ");return{bandName:i,songName:n}}),s=Y(()=>{const{bandName:i}=r.value;return a.value[i]||a.value.default_logo});return X1(()=>c.songName,()=>{var i,n;if("mediaSession"in navigator&&s.value){const l=["96x96","128x128","192x192","256x256","384x384","512x512"];navigator.mediaSession.metadata=new MediaMetadata({title:((i=r.value)==null?void 0:i.songName)||"",artist:((n=r.value)==null?void 0:n.bandName)||"",artwork:l.map(f=>({src:s.value,sizes:f,type:"image/png"}))})}}),{getInfoBand:r,getLogoImage:s}}}),sm=["src"],im={class:"artist-info"},nm={class:"band"},lm={class:"song"};function fm(c,a,e,r,s,i){return d2(),x2("div",null,[I("img",{src:c.getLogoImage,class:"album-image",alt:""},null,8,sm),I("div",im,[I("div",nm,Q2(c.getInfoBand.bandName),1),I("div",lm,Q2(c.getInfoBand.songName),1)])])}const om=g1(rm,[["render",fm],["__scopeId","data-v-6da1fd8d"]]),tm=l1({name:"VolumeControl",props:{volume:{type:Number,default:.8}},emits:["volume-change","show-text-song"],setup(c,{emit:a}){const e=Y(()=>c.volume*100),r=Y(()=>c.volume>0?'<i class="fas fa-volume-up"/>':'<i class="fas fa-volume-off"/>'),s=Y(()=>c.isShowTrackList?'<i class="fas fa-bars fa-rotate-90"/>':'<i class="fas fa-bars"/>');function i(o){const t=parseFloat(o.target.value)/100;a("volume-change",t)}function n(o){a("volume-change",o)}function l(){a("show-text-song")}function f(){c.volume>0?n(0):n(.8)}return{convertToValue:e,volumeHandler:i,onIconVolumeClick:f,onIconShowTextClick:l,iconVolume:r,iconShowTextClass:s}}}),mm=c=>(Z6("data-v-f0791755"),c=c(),c0(),c),Hm={class:"volume-control"},vm=["innerHTML"],zm=["value"],um=mm(()=>I("i",{class:"fa-solid fa-text-height"},null,-1)),hm=[um];function Vm(c,a,e,r,s,i){return d2(),x2("div",Hm,[I("button",{class:"player-button margin",onClick:a[0]||(a[0]=(...n)=>c.onIconVolumeClick&&c.onIconVolumeClick(...n))},[I("span",{innerHTML:c.iconVolume},null,8,vm)]),I("input",{class:"margin",type:"range",value:c.convertToValue,min:"0",max:"100",step:"1",onInput:a[1]||(a[1]=(...n)=>c.volumeHandler&&c.volumeHandler(...n))},null,40,zm),I("button",{class:X2(["show-text",c.iconShowTextClass])},hm,2)])}const pm=g1(tm,[["render",Vm],["__scopeId","data-v-f0791755"]]),Mm=l1({name:"ProgressControl",props:{currentTime:{type:Number,default:0},totalTime:{type:Number,default:0},bestParties:{type:Array,default:()=>[]}},emits:["time-change","time-change-line"],setup(c,{emit:a}){const e=Y(()=>c.currentTime/c.totalTime*100),r=Y(()=>l(c.currentTime)),s=Y(()=>""),i=Y(()=>l(c.totalTime)),n=Y(()=>{var v;const t=Number((100/c.totalTime).toFixed(2));return(v=c.bestParties)==null?void 0:v.map(z=>({left:`${z.start*t}%`,right:`${100-z.end*t}%`}))});function l(t){const v=Math.floor(t/60),z=Math.floor(t%60);return`${v}:${String(z).padStart(2,"0")}`}function f(t){var N;const v=((N=t.currentTarget)==null?void 0:N.parentNode)||null,{clientWidth:z}=v,V=v.getBoundingClientRect(),P=t.clientX-V.left;a("time-change-line",P/z)}function o(t){a("time-change",t)}return{convertToValue:e,convertCurrentTime:r,convertTotalTime:i,timeHandler:o,timeHandlerEmit:f,convertBestPartiesInPercentage:n,convertCurrentTimeSeconds:s}}}),dm={class:"progress-control"},Cm=["value"],Lm={class:"time-display"},gm={key:0,class:"line"};function xm(c,a,e,r,s,i){return d2(),x2("div",dm,[I("input",{type:"range",min:"0",max:"100",value:c.convertToValue,step:"1",onInput:a[0]||(a[0]=(...n)=>c.timeHandler&&c.timeHandler(...n))},null,40,Cm),I("div",Lm,[I("span",null,Q2(c.convertCurrentTime),1),I("span",null,Q2(c.convertCurrentTimeSeconds),1),I("span",null,Q2(c.convertTotalTime),1)]),c.bestParties.length?(d2(),x2("div",gm,[(d2(!0),x2(A2,null,e0(c.convertBestPartiesInPercentage,(n,l)=>(d2(),x2("div",{key:l,style:p3({left:n.left,right:n.right}),class:"best-section",onClick:a[1]||(a[1]=(...f)=>c.timeHandlerEmit&&c.timeHandlerEmit(...f))},null,4))),128))])):ct("",!0)])}const bm=g1(Mm,[["render",xm],["__scopeId","data-v-2ad491a9"]]),Nm=l1({name:"MainControl",props:{isPlaying:{type:Boolean,default:!1}},emits:["previous","play-pause","next"],setup(c,{emit:a}){function e(){a("previous")}const r=Y(()=>c.isPlaying?'<i class="fas fa-pause"/>':' <i class="fas fa-play"/>');function s(){a("play-pause")}function i(){a("next")}return{previousButtonHandler:e,playerButtonHandler:s,iconPlayerButton:r,nextButtonHandler:i}}}),B7=c=>(Z6("data-v-48d95773"),c=c(),c0(),c),Sm={class:"main-control"},wm=B7(()=>I("i",{class:"fas fa-step-backward"},null,-1)),km=[wm],ym=["innerHTML"],Am=B7(()=>I("i",{class:"fas fa-step-forward"},null,-1)),Tm=[Am];function Pm(c,a,e,r,s,i){return d2(),x2("div",Sm,[I("button",{class:"player-button",onClick:a[0]||(a[0]=(...n)=>c.previousButtonHandler&&c.previousButtonHandler(...n))},km),I("button",{class:"player-button",onClick:a[1]||(a[1]=(...n)=>c.playerButtonHandler&&c.playerButtonHandler(...n))},[I("span",{innerHTML:c.iconPlayerButton},null,8,ym)]),I("button",{class:"player-button",onClick:a[2]||(a[2]=(...n)=>c.nextButtonHandler&&c.nextButtonHandler(...n))},Tm)])}const Fm=g1(Nm,[["render",Pm],["__scopeId","data-v-48d95773"]]),Bm=l1({name:"OtherControl",props:{currentNumbSong:{type:Number,default:0},totalNumbSongs:{type:Number,default:0},isRandomTracks:{type:Boolean,default:!1},isRepeatMode:{type:Boolean,default:!1},isShowTrackList:{type:Boolean,default:!1},isDarkTheme:{type:Boolean,default:!1}},emits:["random-click","show-list-click","repeat-mode-click","change-theme"],setup(c,{emit:a}){function e(){a("random-click")}function r(){a("repeat-mode-click")}function s(){a("show-list-click")}function i(){a("change-theme")}const n=Y(()=>c.isDarkTheme?'<i class="fa-solid fa-toggle-on"/>':'<i class="fa-solid fa-toggle-off"/>'),l=Y(()=>c.isShowTrackList?'<i class="fas fa-bars fa-rotate-90"/>':'<i class="fas fa-bars"/>');return{iconClickRandomHandler:e,iconClickRepeatModeHandler:r,iconClickShowListHandler:s,iconClickChangeThemeHandler:i,iconToggle:n,iconBar:l}}}),R7=c=>(Z6("data-v-b1b8d557"),c=c(),c0(),c),Rm={class:"other"},Dm=R7(()=>I("i",{class:"fas fa-shuffle"},null,-1)),Em=[Dm],_m=R7(()=>I("i",{class:"fas fa-repeat"},null,-1)),$m=[_m],Om={class:"song-display"},Um=["innerHTML"],Im=["innerHTML"];function qm(c,a,e,r,s,i){return d2(),x2("div",Rm,[I("button",{class:X2({active:c.isRandomTracks}),onClick:a[0]||(a[0]=(...n)=>c.iconClickRandomHandler&&c.iconClickRandomHandler(...n))},Em,2),I("button",{class:X2({active:c.isRepeatMode}),onClick:a[1]||(a[1]=(...n)=>c.iconClickRepeatModeHandler&&c.iconClickRepeatModeHandler(...n))},$m,2),I("div",Om,[I("span",null,Q2(c.currentNumbSong),1),k7("/"),I("span",null,Q2(c.totalNumbSongs),1)]),I("button",{onClick:a[2]||(a[2]=(...n)=>c.iconClickChangeThemeHandler&&c.iconClickChangeThemeHandler(...n))},[I("span",{innerHTML:c.iconToggle},null,8,Um)]),I("button",{class:X2({active:c.isShowTrackList}),onClick:a[3]||(a[3]=F7((...n)=>c.iconClickShowListHandler&&c.iconClickShowListHandler(...n),["stop"]))},[I("span",{innerHTML:c.iconBar},null,8,Im)],2)])}const Wm=g1(Bm,[["render",qm],["__scopeId","data-v-b1b8d557"]]),Gm=l1({name:"MainComponent",components:{TrackList:Yt,PageTabs:cm,MainInfoBand:om,VolumeControl:pm,ProgressControl:bm,MainControl:Fm,OtherControl:Wm},setup(){const{bestParties:c,nextTrack:a,previousTrack:e,pathToCurrentFile:r,sortingTopTrackList:s,currentTrackIndex:i,changeTab:n,selectTrack:l,tabSelected:f,isRandomTracks:o,handlerRandomBtn:t,totalNumbSongs:v,currentTracks:z,currentSong:V,currentTracksList:P}=Wt();b3(async()=>{_(),p.value=document.getElementById("audioPlayer");const j=[["play",()=>{l2(),navigator.mediaSession.playbackState="playing"}],["pause",()=>{l2(),navigator.mediaSession.playbackState="paused"}],["nexttrack",()=>{a()}],["previoustrack",()=>{e()}],["seekto",H2=>{console.log(H2),p.value.currentTime=H2.seekTime}]];for(const[H2,L2]of j)try{navigator.mediaSession.setActionHandler(H2,L2)}catch{console.log(`The media session action "${H2}" is not supported yet.`)}});const N=p2(!1);function _(){(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")==="dark"?N.value=!0:N.value=!1}function g(){N.value=!N.value}const p=p2(null),A=p2(0),C=p2(.8);function R(j){J(j),k2.value&&h2()}function c2(){C2.value?p.value.currentTime=0:a()}function a2(j){if(p.value){const H2=j.target;p.value.currentTime=Number(H2.value)/100*(p.value.duration||0)}}function E(j){p.value&&(p.value.currentTime=j*(p.value.duration||0))}function q(j){A.value=j.target.currentTime}function K(j){C.value=j.target.volume}function u2(j){p.value.volume=j}const T=p2(0);function J(j){const H2=j.target;T.value=H2.duration,navigator.mediaSession.setPositionState({duration:H2.duration,playbackRate:1,position:0})}function h2(){var j;try{(j=p.value)==null||j.play().then(H2=>H2)}catch(H2){console.log("error",H2)}}const k2=p2(!1);function l2(){var j;k2.value=!k2.value,k2.value?h2():(j=p.value)==null||j.pause()}function n2(j){const H2=s.value[i.value].bestParties;for(let L2=0;L2<H2.length;L2++){const D2=H2[L2];if(j<D2.start){console.log("start"),p.value.currentTime=D2.start;return}else if(j>=D2.start&&j<=D2.end){console.log("continue"),j>=D2.end-2;return}}console.log("nextTrack"),c2()}t7(()=>{f.value===4&&k2.value&&i&&n2(A.value)});function X(){p.value.currentTime<=20||f.value===4?e():p.value.currentTime=0}const R2=p2(!1);function $1(){R2.value=!R2.value}function Z2(j){l(j),k2.value?h2():l2()}const C2=p2(!1);function B4(){C2.value=!C2.value}return{audioPlayer:p,totalNumbSongs:v,isPlaying:k2,currentTime:A,volume:C,onVolumeUpdate:K,totalTime:T,isRandomTracks:o,pathToCurrentFile:r,currentTracks:z,currentTrackIndex:i,handlerCanPlay:R,handlerEnded:c2,handlerTimeChange:a2,handlerTimeChangeLine:E,onTimeUpdate:q,setVolume:u2,setTotalTime:J,playTrack:h2,togglePlayPause:l2,nextTrack:a,previousTrackHandler:X,handlerRandomBtn:t,handlerShowListBtn:$1,handlerSelectTrack:Z2,tabSelected:f,changeTab:n,isShowTrackList:R2,repeatModeChange:B4,isRepeatMode:C2,bestParties:c,currentTracksList:P,currentSong:V,isDarkTheme:N,handlerChangeThemeBtn:g}}}),jm={class:"container"},Km=["src"];function Ym(c,a,e,r,s,i){const n=x1("TrackList"),l=x1("PageTabs"),f=x1("MainInfoBand"),o=x1("VolumeControl"),t=x1("ProgressControl"),v=x1("MainControl"),z=x1("OtherControl");return d2(),x2("main",{class:X2([c.isDarkTheme?"dark":"light"]),onClick:a[4]||(a[4]=V=>c.isShowTrackList=!1)},[I("div",jm,[o2(l0,{name:"slide"},{default:f7(()=>[Vo(o2(n,{"current-track-index":c.currentTrackIndex,"current-tracks":c.currentTracksList,class:"track_list",onSelectTrackFromList:c.handlerSelectTrack},null,8,["current-track-index","current-tracks","onSelectTrackFromList"]),[[gt,c.isShowTrackList]])]),_:1}),o2(l,{"tab-selected":c.tabSelected,onChangeTab:c.changeTab},null,8,["tab-selected","onChangeTab"]),o2(f,{"song-name":c.currentSong.songName},null,8,["song-name"]),o2(o,{"song-text":c.currentSong.songText||"",volume:c.volume,onVolumeChange:c.setVolume},null,8,["song-text","volume","onVolumeChange"]),o2(t,{"best-parties":c.bestParties,"current-time":c.currentTime,"total-time":c.totalTime,onTimeChange:c.handlerTimeChange,onTimeChangeLine:c.handlerTimeChangeLine},null,8,["best-parties","current-time","total-time","onTimeChange","onTimeChangeLine"]),o2(v,{"is-playing":c.isPlaying,onPrevious:c.previousTrackHandler,onNext:c.nextTrack,onPlayPause:c.togglePlayPause},null,8,["is-playing","onPrevious","onNext","onPlayPause"]),o2(z,{"current-numb-song":c.currentTrackIndex+1,"total-numb-songs":c.totalNumbSongs,"is-random-tracks":c.isRandomTracks,"is-show-track-list":c.isShowTrackList,"is-repeat-mode":c.isRepeatMode,"is-dark-theme":c.isDarkTheme,onRepeatModeClick:c.repeatModeChange,onRandomClick:c.handlerRandomBtn,onShowListClick:c.handlerShowListBtn,onChangeTheme:c.handlerChangeThemeBtn},null,8,["current-numb-song","total-numb-songs","is-random-tracks","is-show-track-list","is-repeat-mode","is-dark-theme","onRepeatModeClick","onRandomClick","onShowListClick","onChangeTheme"]),I("audio",{id:"audioPlayer",ref:"audioPlayer",src:c.pathToCurrentFile,preload:"metadata",onVolumechange:a[0]||(a[0]=(...V)=>c.onVolumeUpdate&&c.onVolumeUpdate(...V)),onTimeupdate:a[1]||(a[1]=(...V)=>c.onTimeUpdate&&c.onTimeUpdate(...V)),onCanplay:a[2]||(a[2]=(...V)=>c.handlerCanPlay&&c.handlerCanPlay(...V)),onEnded:a[3]||(a[3]=(...V)=>c.handlerEnded&&c.handlerEnded(...V))},null,40,Km)])],2)}const Xm=g1(Gm,[["render",Ym]]);function l5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function w(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?l5(Object(e),!0).forEach(function(r){z2(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):l5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function t3(c){"@babel/helpers - typeof";return t3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},t3(c)}function Qm(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function f5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Jm(c,a,e){return a&&f5(c.prototype,a),e&&f5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function z2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function o0(c,a){return cH(c)||eH(c,a)||D7(c,a)||sH()}function S4(c){return Zm(c)||aH(c)||D7(c)||rH()}function Zm(c){if(Array.isArray(c))return w6(c)}function cH(c){if(Array.isArray(c))return c}function aH(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function eH(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,i=!1,n,l;try{for(e=e.call(c);!(s=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));s=!0);}catch(f){i=!0,l=f}finally{try{!s&&e.return!=null&&e.return()}finally{if(i)throw l}}return r}}function D7(c,a){if(c){if(typeof c=="string")return w6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return w6(c,a)}}function w6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function rH(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sH(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o5=function(){},t0={},E7={},_7=null,$7={mark:o5,measure:o5};try{typeof window<"u"&&(t0=window),typeof document<"u"&&(E7=document),typeof MutationObserver<"u"&&(_7=MutationObserver),typeof performance<"u"&&($7=performance)}catch{}var iH=t0.navigator||{},t5=iH.userAgent,m5=t5===void 0?"":t5,d1=t0,s2=E7,H5=_7,q4=$7;d1.document;var o1=!!s2.documentElement&&!!s2.head&&typeof s2.addEventListener=="function"&&typeof s2.createElement=="function",O7=~m5.indexOf("MSIE")||~m5.indexOf("Trident/"),W4,G4,j4,K4,Y4,s1="___FONT_AWESOME___",k6=16,U7="fa",I7="svg-inline--fa",E1="data-fa-i2svg",y6="data-fa-pseudo-element",nH="data-fa-pseudo-element-pending",m0="data-prefix",H0="data-icon",v5="fontawesome-i2svg",lH="async",fH=["HTML","HEAD","STYLE","SCRIPT"],q7=function(){try{return!0}catch{return!1}}(),r2="classic",f2="sharp",v0=[r2,f2];function w4(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[r2]}})}var L4=w4((W4={},z2(W4,r2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),z2(W4,f2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),W4)),g4=w4((G4={},z2(G4,r2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),z2(G4,f2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),G4)),x4=w4((j4={},z2(j4,r2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),z2(j4,f2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),j4)),oH=w4((K4={},z2(K4,r2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),z2(K4,f2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),K4)),tH=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,W7="fa-layers-text",mH=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,HH=w4((Y4={},z2(Y4,r2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),z2(Y4,f2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Y4)),G7=[1,2,3,4,5,6,7,8,9,10],vH=G7.concat([11,12,13,14,15,16,17,18,19,20]),zH=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],P1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},b4=new Set;Object.keys(g4[r2]).map(b4.add.bind(b4));Object.keys(g4[f2]).map(b4.add.bind(b4));var uH=[].concat(v0,S4(b4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",P1.GROUP,P1.SWAP_OPACITY,P1.PRIMARY,P1.SECONDARY]).concat(G7.map(function(c){return"".concat(c,"x")})).concat(vH.map(function(c){return"w-".concat(c)})),z4=d1.FontAwesomeConfig||{};function hH(c){var a=s2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function VH(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(s2&&typeof s2.querySelector=="function"){var pH=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pH.forEach(function(c){var a=o0(c,2),e=a[0],r=a[1],s=VH(hH(e));s!=null&&(z4[r]=s)})}var j7={styleDefault:"solid",familyDefault:"classic",cssPrefix:U7,replacementClass:I7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};z4.familyPrefix&&(z4.cssPrefix=z4.familyPrefix);var c4=w(w({},j7),z4);c4.autoReplaceSvg||(c4.observeMutations=!1);var y={};Object.keys(j7).forEach(function(c){Object.defineProperty(y,c,{enumerable:!0,set:function(e){c4[c]=e,u4.forEach(function(r){return r(y)})},get:function(){return c4[c]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(a){c4.cssPrefix=a,u4.forEach(function(e){return e(y)})},get:function(){return c4.cssPrefix}});d1.FontAwesomeConfig=y;var u4=[];function MH(c){return u4.push(c),function(){u4.splice(u4.indexOf(c),1)}}var v1=k6,K2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function dH(c){if(!(!c||!o1)){var a=s2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=s2.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}return s2.head.insertBefore(a,r),c}}var CH="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function N4(){for(var c=12,a="";c-- >0;)a+=CH[Math.random()*62|0];return a}function i4(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function z0(c){return c.classList?i4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function K7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function LH(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(K7(c[e]),'" ')},"").trim()}function k3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function u0(c){return c.size!==K2.size||c.x!==K2.x||c.y!==K2.y||c.rotate!==K2.rotate||c.flipX||c.flipY}function gH(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(n," ").concat(l)},o={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:f,path:o}}function xH(c){var a=c.transform,e=c.width,r=e===void 0?k6:e,s=c.height,i=s===void 0?k6:s,n=c.startCentered,l=n===void 0?!1:n,f="";return l&&O7?f+="translate(".concat(a.x/v1-r/2,"em, ").concat(a.y/v1-i/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/v1,"em), calc(-50% + ").concat(a.y/v1,"em)) "):f+="translate(".concat(a.x/v1,"em, ").concat(a.y/v1,"em) "),f+="scale(".concat(a.size/v1*(a.flipX?-1:1),", ").concat(a.size/v1*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var bH=`:root, :host {
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
}`;function Y7(){var c=U7,a=I7,e=y.cssPrefix,r=y.replacementClass,s=bH;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(l,".".concat(r))}return s}var z5=!1;function f6(){y.autoAddCss&&!z5&&(dH(Y7()),z5=!0)}var NH={mixout:function(){return{dom:{css:Y7,insertCss:f6}}},hooks:function(){return{beforeDOMElementCreation:function(){f6()},beforeI2svg:function(){f6()}}}},i1=d1||{};i1[s1]||(i1[s1]={});i1[s1].styles||(i1[s1].styles={});i1[s1].hooks||(i1[s1].hooks={});i1[s1].shims||(i1[s1].shims=[]);var U2=i1[s1],X7=[],SH=function c(){s2.removeEventListener("DOMContentLoaded",c),m3=1,X7.map(function(a){return a()})},m3=!1;o1&&(m3=(s2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(s2.readyState),m3||s2.addEventListener("DOMContentLoaded",SH));function wH(c){o1&&(m3?setTimeout(c,0):X7.push(c))}function k4(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?K7(c):"<".concat(a," ").concat(LH(r),">").concat(i.map(k4).join(""),"</").concat(a,">")}function u5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var kH=function(a,e){return function(r,s,i,n){return a.call(e,r,s,i,n)}},o6=function(a,e,r,s){var i=Object.keys(a),n=i.length,l=s!==void 0?kH(e,s):e,f,o,t;for(r===void 0?(f=1,t=a[i[0]]):(f=0,t=r);f<n;f++)o=i[f],t=l(t,a[o],o,a);return t};function yH(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function A6(c){var a=yH(c);return a.length===1?a[0].toString(16):null}function AH(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function h5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function T6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=h5(a);typeof U2.hooks.addPack=="function"&&!s?U2.hooks.addPack(c,h5(a)):U2.styles[c]=w(w({},U2.styles[c]||{}),i),c==="fas"&&T6("fa",a)}var X4,Q4,J4,q1=U2.styles,TH=U2.shims,PH=(X4={},z2(X4,r2,Object.values(x4[r2])),z2(X4,f2,Object.values(x4[f2])),X4),h0=null,Q7={},J7={},Z7={},cc={},ac={},FH=(Q4={},z2(Q4,r2,Object.keys(L4[r2])),z2(Q4,f2,Object.keys(L4[f2])),Q4);function BH(c){return~uH.indexOf(c)}function RH(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!BH(s)?s:null}var ec=function(){var a=function(i){return o6(q1,function(n,l,f){return n[f]=o6(l,i,{}),n},{})};Q7=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var l=i[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){s[f.toString(16)]=n})}return s}),J7=a(function(s,i,n){if(s[n]=n,i[2]){var l=i[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){s[f]=n})}return s}),ac=a(function(s,i,n){var l=i[2];return s[n]=n,l.forEach(function(f){s[f]=n}),s});var e="far"in q1||y.autoFetchSvg,r=o6(TH,function(s,i){var n=i[0],l=i[1],f=i[2];return l==="far"&&!e&&(l="fas"),typeof n=="string"&&(s.names[n]={prefix:l,iconName:f}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:l,iconName:f}),s},{names:{},unicodes:{}});Z7=r.names,cc=r.unicodes,h0=y3(y.styleDefault,{family:y.familyDefault})};MH(function(c){h0=y3(c.styleDefault,{family:y.familyDefault})});ec();function V0(c,a){return(Q7[c]||{})[a]}function DH(c,a){return(J7[c]||{})[a]}function F1(c,a){return(ac[c]||{})[a]}function rc(c){return Z7[c]||{prefix:null,iconName:null}}function EH(c){var a=cc[c],e=V0("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function C1(){return h0}var p0=function(){return{prefix:null,iconName:null,rest:[]}};function y3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?r2:e,s=L4[r][c],i=g4[r][c]||g4[r][s],n=c in U2.styles?c:null;return i||n||null}var V5=(J4={},z2(J4,r2,Object.keys(x4[r2])),z2(J4,f2,Object.keys(x4[f2])),J4);function A3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},z2(a,r2,"".concat(y.cssPrefix,"-").concat(r2)),z2(a,f2,"".concat(y.cssPrefix,"-").concat(f2)),a),n=null,l=r2;(c.includes(i[r2])||c.some(function(o){return V5[r2].includes(o)}))&&(l=r2),(c.includes(i[f2])||c.some(function(o){return V5[f2].includes(o)}))&&(l=f2);var f=c.reduce(function(o,t){var v=RH(y.cssPrefix,t);if(q1[t]?(t=PH[l].includes(t)?oH[l][t]:t,n=t,o.prefix=t):FH[l].indexOf(t)>-1?(n=t,o.prefix=y3(t,{family:l})):v?o.iconName=v:t!==y.replacementClass&&t!==i[r2]&&t!==i[f2]&&o.rest.push(t),!s&&o.prefix&&o.iconName){var z=n==="fa"?rc(o.iconName):{},V=F1(o.prefix,o.iconName);z.prefix&&(n=null),o.iconName=z.iconName||V||o.iconName,o.prefix=z.prefix||o.prefix,o.prefix==="far"&&!q1.far&&q1.fas&&!y.autoFetchSvg&&(o.prefix="fas")}return o},p0());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===f2&&(q1.fass||y.autoFetchSvg)&&(f.prefix="fass",f.iconName=F1(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=C1()||"fas"),f}var _H=function(){function c(){Qm(this,c),this.definitions={}}return Jm(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){e.definitions[l]=w(w({},e.definitions[l]||{}),n[l]),T6(l,n[l]);var f=x4[r2][l];f&&T6(f,n[l]),ec()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var n=s[i],l=n.prefix,f=n.iconName,o=n.icon,t=o[2];e[l]||(e[l]={}),t.length>0&&t.forEach(function(v){typeof v=="string"&&(e[l][v]=o)}),e[l][f]=o}),e}}]),c}(),p5=[],W1={},Q1={},$H=Object.keys(Q1);function OH(c,a){var e=a.mixoutsTo;return p5=c,W1={},Object.keys(Q1).forEach(function(r){$H.indexOf(r)===-1&&delete Q1[r]}),p5.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(e[n]=s[n]),t3(s[n])==="object"&&Object.keys(s[n]).forEach(function(l){e[n]||(e[n]={}),e[n][l]=s[n][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(n){W1[n]||(W1[n]=[]),W1[n].push(i[n])})}r.provides&&r.provides(Q1)}),e}function P6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=W1[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function _1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=W1[c]||[];s.forEach(function(i){i.apply(null,e)})}function n1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Q1[c]?Q1[c].apply(null,a):void 0}function F6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||C1();if(a)return a=F1(e,a)||a,u5(sc.definitions,e,a)||u5(U2.styles,e,a)}var sc=new _H,UH=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,_1("noAuto")},IH={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return o1?(_1("beforeI2svg",a),n1("pseudoElements2svg",a),n1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,wH(function(){WH({autoReplaceSvgRoot:e}),_1("watch",a)})}},qH={icon:function(a){if(a===null)return null;if(t3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:F1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=y3(a[0]);return{prefix:r,iconName:F1(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(y.cssPrefix,"-"))>-1||a.match(tH))){var s=A3(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||C1(),iconName:F1(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=C1();return{prefix:i,iconName:F1(i,a)||a}}}},P2={noAuto:UH,config:y,dom:IH,parse:qH,library:sc,findIconDefinition:F6,toHtml:k4},WH=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?s2:e;(Object.keys(U2.styles).length>0||y.autoFetchSvg)&&o1&&y.autoReplaceSvg&&P2.dom.i2svg({node:r})};function T3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return k4(r)})}}),Object.defineProperty(c,"node",{get:function(){if(o1){var r=s2.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function GH(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(u0(n)&&e.found&&!r.found){var l=e.width,f=e.height,o={x:l/f/2,y:.5};s.style=k3(w(w({},i),{},{"transform-origin":"".concat(o.x+n.x/16,"em ").concat(o.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function jH(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(y.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:w(w({},s),{},{id:n}),children:r}]}]}function M0(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,n=c.transform,l=c.symbol,f=c.title,o=c.maskId,t=c.titleId,v=c.extra,z=c.watchable,V=z===void 0?!1:z,P=r.found?r:e,N=P.width,_=P.height,g=s==="fak",p=[y.replacementClass,i?"".concat(y.cssPrefix,"-").concat(i):""].filter(function(q){return v.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(v.classes).join(" "),A={children:[],attributes:w(w({},v.attributes),{},{"data-prefix":s,"data-icon":i,class:p,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(_)})},C=g&&!~v.classes.indexOf("fa-fw")?{width:"".concat(N/_*16*.0625,"em")}:{};V&&(A.attributes[E1]=""),f&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(t||N4())},children:[f]}),delete A.attributes.title);var R=w(w({},A),{},{prefix:s,iconName:i,main:e,mask:r,maskId:o,transform:n,symbol:l,styles:w(w({},C),v.styles)}),c2=r.found&&e.found?n1("generateAbstractMask",R)||{children:[],attributes:{}}:n1("generateAbstractIcon",R)||{children:[],attributes:{}},a2=c2.children,E=c2.attributes;return R.children=a2,R.attributes=E,l?jH(R):GH(R)}function M5(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,n=c.extra,l=c.watchable,f=l===void 0?!1:l,o=w(w(w({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});f&&(o[E1]="");var t=w({},n.styles);u0(s)&&(t.transform=xH({transform:s,startCentered:!0,width:e,height:r}),t["-webkit-transform"]=t.transform);var v=k3(t);v.length>0&&(o.style=v);var z=[];return z.push({tag:"span",attributes:o,children:[a]}),i&&z.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),z}function KH(c){var a=c.content,e=c.title,r=c.extra,s=w(w(w({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=k3(r.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var t6=U2.styles;function B6(c){var a=c[0],e=c[1],r=c.slice(4),s=o0(r,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(P1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(P1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(P1.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var YH={found:!1,width:512,height:512};function XH(c,a){!q7&&!y.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function R6(c,a){var e=a;return a==="fa"&&y.styleDefault!==null&&(a=C1()),new Promise(function(r,s){if(n1("missingIconAbstract"),e==="fa"){var i=rc(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&t6[a]&&t6[a][c]){var n=t6[a][c];return r(B6(n))}XH(c,a),r(w(w({},YH),{},{icon:y.showMissingIcons&&c?n1("missingIconAbstract")||{}:{}}))})}var d5=function(){},D6=y.measurePerformance&&q4&&q4.mark&&q4.measure?q4:{mark:d5,measure:d5},m4='FA "6.5.1"',QH=function(a){return D6.mark("".concat(m4," ").concat(a," begins")),function(){return ic(a)}},ic=function(a){D6.mark("".concat(m4," ").concat(a," ends")),D6.measure("".concat(m4," ").concat(a),"".concat(m4," ").concat(a," begins"),"".concat(m4," ").concat(a," ends"))},d0={begin:QH,end:ic},r3=function(){};function C5(c){var a=c.getAttribute?c.getAttribute(E1):null;return typeof a=="string"}function JH(c){var a=c.getAttribute?c.getAttribute(m0):null,e=c.getAttribute?c.getAttribute(H0):null;return a&&e}function ZH(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(y.replacementClass)}function cv(){if(y.autoReplaceSvg===!0)return s3.replace;var c=s3[y.autoReplaceSvg];return c||s3.replace}function av(c){return s2.createElementNS("http://www.w3.org/2000/svg",c)}function ev(c){return s2.createElement(c)}function nc(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?av:ev:e;if(typeof c=="string")return s2.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(nc(n,{ceFn:r}))}),s}function rv(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var s3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(nc(s),e)}),e.getAttribute(E1)===null&&y.keepOriginalSource){var r=s2.createComment(rv(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~z0(e).indexOf(y.replacementClass))return s3.replace(a);var s=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,f){return f===y.replacementClass||f.match(s)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=r.map(function(l){return k4(l)}).join(`
`);e.setAttribute(E1,""),e.innerHTML=n}};function L5(c){c()}function lc(c,a){var e=typeof a=="function"?a:r3;if(c.length===0)e();else{var r=L5;y.mutateApproach===lH&&(r=d1.requestAnimationFrame||L5),r(function(){var s=cv(),i=d0.begin("mutate");c.map(s),i(),e()})}}var C0=!1;function fc(){C0=!0}function E6(){C0=!1}var H3=null;function g5(c){if(H5&&y.observeMutations){var a=c.treeCallback,e=a===void 0?r3:a,r=c.nodeCallback,s=r===void 0?r3:r,i=c.pseudoElementsCallback,n=i===void 0?r3:i,l=c.observeMutationsRoot,f=l===void 0?s2:l;H3=new H5(function(o){if(!C0){var t=C1();i4(o).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!C5(v.addedNodes[0])&&(y.searchPseudoElements&&n(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&y.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&C5(v.target)&&~zH.indexOf(v.attributeName))if(v.attributeName==="class"&&JH(v.target)){var z=A3(z0(v.target)),V=z.prefix,P=z.iconName;v.target.setAttribute(m0,V||t),P&&v.target.setAttribute(H0,P)}else ZH(v.target)&&s(v.target)})}}),o1&&H3.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function sv(){H3&&H3.disconnect()}function iv(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),n=i[0],l=i.slice(1);return n&&l.length>0&&(r[n]=l.join(":").trim()),r},{})),e}function nv(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=A3(z0(c));return s.prefix||(s.prefix=C1()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=DH(s.prefix,c.innerText)||V0(s.prefix,A6(c.innerText))),!s.iconName&&y.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function lv(c){var a=i4(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return y.autoA11y&&(e?a["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(r||N4()):(a["aria-hidden"]="true",a.focusable="false")),a}function fv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function x5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=nv(c),r=e.iconName,s=e.prefix,i=e.rest,n=lv(c),l=P6("parseNodeAttributes",{},c),f=a.styleParser?iv(c):[];return w({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:K2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:n}},l)}var ov=U2.styles;function oc(c){var a=y.autoReplaceSvg==="nest"?x5(c,{styleParser:!1}):x5(c);return~a.extra.classes.indexOf(W7)?n1("generateLayersText",c,a):n1("generateSvgReplacementMutation",c,a)}var L1=new Set;v0.map(function(c){L1.add("fa-".concat(c))});Object.keys(L4[r2]).map(L1.add.bind(L1));Object.keys(L4[f2]).map(L1.add.bind(L1));L1=S4(L1);function b5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!o1)return Promise.resolve();var e=s2.documentElement.classList,r=function(v){return e.add("".concat(v5,"-").concat(v))},s=function(v){return e.remove("".concat(v5,"-").concat(v))},i=y.autoFetchSvg?L1:v0.map(function(t){return"fa-".concat(t)}).concat(Object.keys(ov));i.includes("fa")||i.push("fa");var n=[".".concat(W7,":not([").concat(E1,"])")].concat(i.map(function(t){return".".concat(t,":not([").concat(E1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=i4(c.querySelectorAll(n))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();var f=d0.begin("onTree"),o=l.reduce(function(t,v){try{var z=oc(v);z&&t.push(z)}catch(V){q7||V.name==="MissingIcon"&&console.error(V)}return t},[]);return new Promise(function(t,v){Promise.all(o).then(function(z){lc(z,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),f(),t()})}).catch(function(z){f(),v(z)})})}function tv(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;oc(c).then(function(e){e&&lc([e],a)})}function mv(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:F6(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:F6(s||{})),c(r,w(w({},e),{},{mask:s}))}}var Hv=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?K2:r,i=e.symbol,n=i===void 0?!1:i,l=e.mask,f=l===void 0?null:l,o=e.maskId,t=o===void 0?null:o,v=e.title,z=v===void 0?null:v,V=e.titleId,P=V===void 0?null:V,N=e.classes,_=N===void 0?[]:N,g=e.attributes,p=g===void 0?{}:g,A=e.styles,C=A===void 0?{}:A;if(a){var R=a.prefix,c2=a.iconName,a2=a.icon;return T3(w({type:"icon"},a),function(){return _1("beforeDOMElementCreation",{iconDefinition:a,params:e}),y.autoA11y&&(z?p["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(P||N4()):(p["aria-hidden"]="true",p.focusable="false")),M0({icons:{main:B6(a2),mask:f?B6(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:c2,transform:w(w({},K2),s),symbol:n,title:z,maskId:t,titleId:P,extra:{attributes:p,styles:C,classes:_}})})}},vv={mixout:function(){return{icon:mv(Hv)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=b5,e.nodeCallback=tv,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?s2:r,i=e.callback,n=i===void 0?function(){}:i;return b5(s,n)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,n=r.titleId,l=r.prefix,f=r.transform,o=r.symbol,t=r.mask,v=r.maskId,z=r.extra;return new Promise(function(V,P){Promise.all([R6(s,l),t.iconName?R6(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var _=o0(N,2),g=_[0],p=_[1];V([e,M0({icons:{main:g,mask:p},prefix:l,iconName:s,transform:f,symbol:o,maskId:v,title:i,titleId:n,extra:z,watchable:!0})])}).catch(P)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.transform,l=e.styles,f=k3(l);f.length>0&&(s.style=f);var o;return u0(n)&&(o=n1("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),r.push(o||i.icon),{children:r,attributes:s}}}},zv={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return T3({type:"layer"},function(){_1("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(l){Array.isArray(l)?l.map(function(f){n=n.concat(f.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers")].concat(S4(i)).join(" ")},children:n}]})}}}},uv={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,n=r.classes,l=n===void 0?[]:n,f=r.attributes,o=f===void 0?{}:f,t=r.styles,v=t===void 0?{}:t;return T3({type:"counter",content:e},function(){return _1("beforeDOMElementCreation",{content:e,params:r}),KH({content:e.toString(),title:i,extra:{attributes:o,styles:v,classes:["".concat(y.cssPrefix,"-layers-counter")].concat(S4(l))}})})}}}},hv={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?K2:s,n=r.title,l=n===void 0?null:n,f=r.classes,o=f===void 0?[]:f,t=r.attributes,v=t===void 0?{}:t,z=r.styles,V=z===void 0?{}:z;return T3({type:"text",content:e},function(){return _1("beforeDOMElementCreation",{content:e,params:r}),M5({content:e,transform:w(w({},K2),i),title:l,extra:{attributes:v,styles:V,classes:["".concat(y.cssPrefix,"-layers-text")].concat(S4(o))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,n=r.extra,l=null,f=null;if(O7){var o=parseInt(getComputedStyle(e).fontSize,10),t=e.getBoundingClientRect();l=t.width/o,f=t.height/o}return y.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,M5({content:e.innerHTML,width:l,height:f,transform:i,title:s,extra:n,watchable:!0})])}}},Vv=new RegExp('"',"ug"),N5=[1105920,1112319];function pv(c){var a=c.replace(Vv,""),e=AH(a,0),r=e>=N5[0]&&e<=N5[1],s=a.length===2?a[0]===a[1]:!1;return{value:A6(s?a[0]:a),isSecondary:r||s}}function S5(c,a){var e="".concat(nH).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=i4(c.children),n=i.filter(function(a2){return a2.getAttribute(y6)===a})[0],l=d1.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match(mH),o=l.getPropertyValue("font-weight"),t=l.getPropertyValue("content");if(n&&!f)return c.removeChild(n),r();if(f&&t!=="none"&&t!==""){var v=l.getPropertyValue("content"),z=~["Sharp"].indexOf(f[2])?f2:r2,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?g4[z][f[2].toLowerCase()]:HH[z][o],P=pv(v),N=P.value,_=P.isSecondary,g=f[0].startsWith("FontAwesome"),p=V0(V,N),A=p;if(g){var C=EH(N);C.iconName&&C.prefix&&(p=C.iconName,V=C.prefix)}if(p&&!_&&(!n||n.getAttribute(m0)!==V||n.getAttribute(H0)!==A)){c.setAttribute(e,A),n&&c.removeChild(n);var R=fv(),c2=R.extra;c2.attributes[y6]=a,R6(p,V).then(function(a2){var E=M0(w(w({},R),{},{icons:{main:a2,mask:p0()},prefix:V,iconName:A,extra:c2,watchable:!0})),q=s2.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(q,c.firstChild):c.appendChild(q),q.outerHTML=E.map(function(K){return k4(K)}).join(`
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}