(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();function I6(c,a){const e=Object.create(null),r=c.split(",");for(let s=0;s<r.length;s++)e[r[s]]=!0;return a?s=>!!e[s.toLowerCase()]:s=>!!e[s]}const c2={},G1=[],K2=()=>{},mf=()=>!1,z3=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),q6=c=>c.startsWith("onUpdate:"),h2=Object.assign,W6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Hf=Object.prototype.hasOwnProperty,W=(c,a)=>Hf.call(c,a),R=Array.isArray,j1=c=>u3(c)==="[object Map]",D5=c=>u3(c)==="[object Set]",O=c=>typeof c=="function",z2=c=>typeof c=="string",a4=c=>typeof c=="symbol",r2=c=>c!==null&&typeof c=="object",E5=c=>(r2(c)||O(c))&&O(c.then)&&O(c.catch),_5=Object.prototype.toString,u3=c=>_5.call(c),vf=c=>u3(c).slice(8,-1),$5=c=>u3(c)==="[object Object]",G6=c=>z2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,Z4=I6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),h3=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},zf=/-(\w)/g,Y2=h3(c=>c.replace(zf,(a,e)=>e?e.toUpperCase():"")),uf=/\B([A-Z])/g,e4=h3(c=>c.replace(uf,"-$1").toLowerCase()),V3=h3(c=>c.charAt(0).toUpperCase()+c.slice(1)),c6=h3(c=>c?`on${V3(c)}`:""),D1=(c,a)=>!Object.is(c,a),a6=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},i3=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},hf=c=>{const a=parseFloat(c);return isNaN(a)?c:a},Vf=c=>{const a=z2(c)?Number(c):NaN;return isNaN(a)?c:a};let N8;const h6=()=>N8||(N8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function p3(c){if(R(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],s=z2(r)?Cf(r):p3(r);if(s)for(const i in s)a[i]=s[i]}return a}else if(z2(c)||r2(c))return c}const pf=/;(?![^(]*\))/g,Mf=/:([^]+)/,df=/\/\*[^]*?\*\//g;function Cf(c){const a={};return c.replace(df,"").split(pf).forEach(e=>{if(e){const r=e.split(Mf);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function Z2(c){let a="";if(z2(c))a=c;else if(R(c))for(let e=0;e<c.length;e++){const r=Z2(c[e]);r&&(a+=r+" ")}else if(r2(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Lf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gf=I6(Lf);function O5(c){return!!c||c===""}const a1=c=>z2(c)?c:c==null?"":R(c)||r2(c)&&(c.toString===_5||!O(c.toString))?JSON.stringify(c,U5,2):String(c),U5=(c,a)=>a&&a.__v_isRef?U5(c,a.value):j1(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,s],i)=>(e[e6(r,i)+" =>"]=s,e),{})}:D5(a)?{[`Set(${a.size})`]:[...a.values()].map(e=>e6(e))}:a4(a)?e6(a):r2(a)&&!R(a)&&!$5(a)?String(a):a,e6=(c,a="")=>{var e;return a4(c)?`Symbol(${(e=c.description)!=null?e:a})`:c};let D2;class xf{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=D2,!a&&D2&&(this.index=(D2.scopes||(D2.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=D2;try{return D2=this,a()}finally{D2=e}}}on(){D2=this}off(){D2=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function bf(c,a=D2){a&&a.active&&a.effects.push(c)}function Nf(){return D2}const j6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},I5=c=>(c.w&V1)>0,q5=c=>(c.n&V1)>0,Sf=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=V1},wf=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const s=a[r];I5(s)&&!q5(s)?s.delete(c):a[e++]=s,s.w&=~V1,s.n&=~V1}a.length=e}},V6=new WeakMap;let t4=0,V1=1;const p6=30;let E2;const B1=Symbol(""),M6=Symbol("");class K6{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,bf(this,r)}run(){if(!this.active)return this.fn();let a=E2,e=u1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=E2,E2=this,u1=!0,V1=1<<++t4,t4<=p6?Sf(this):S8(this),this.fn()}finally{t4<=p6&&wf(this),V1=1<<--t4,E2=this.parent,u1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){E2===this?this.deferStop=!0:this.active&&(S8(this),this.onStop&&this.onStop(),this.active=!1)}}function S8(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let u1=!0;const W5=[];function r4(){W5.push(u1),u1=!1}function s4(){const c=W5.pop();u1=c===void 0?!0:c}function S2(c,a,e){if(u1&&E2){let r=V6.get(c);r||V6.set(c,r=new Map);let s=r.get(e);s||r.set(e,s=j6()),G5(s)}}function G5(c,a){let e=!1;t4<=p6?q5(c)||(c.n|=V1,e=!I5(c)):e=!c.has(E2),e&&(c.add(E2),E2.deps.push(c))}function c1(c,a,e,r,s,i){const n=V6.get(c);if(!n)return;let l=[];if(a==="clear")l=[...n.values()];else if(e==="length"&&R(c)){const f=Number(r);n.forEach((o,m)=>{(m==="length"||!a4(m)&&m>=f)&&l.push(o)})}else switch(e!==void 0&&l.push(n.get(e)),a){case"add":R(c)?G6(e)&&l.push(n.get("length")):(l.push(n.get(B1)),j1(c)&&l.push(n.get(M6)));break;case"delete":R(c)||(l.push(n.get(B1)),j1(c)&&l.push(n.get(M6)));break;case"set":j1(c)&&l.push(n.get(B1));break}if(l.length===1)l[0]&&d6(l[0]);else{const f=[];for(const o of l)o&&f.push(...o);d6(j6(f))}}function d6(c,a){const e=R(c)?c:[...c];for(const r of e)r.computed&&w8(r);for(const r of e)r.computed||w8(r)}function w8(c,a){(c!==E2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const kf=I6("__proto__,__v_isRef,__isVue"),j5=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(a4)),k8=yf();function yf(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=j(this);for(let i=0,n=this.length;i<n;i++)S2(r,"get",i+"");const s=r[a](...e);return s===-1||s===!1?r[a](...e.map(j)):s}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){r4();const r=j(this)[a].apply(this,e);return s4(),r}}),c}function Af(c){const a=j(this);return S2(a,"has",c),a.hasOwnProperty(c)}class K5{constructor(a=!1,e=!1){this._isReadonly=a,this._shallow=e}get(a,e,r){const s=this._isReadonly,i=this._shallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return i;if(e==="__v_raw")return r===(s?i?qf:J5:i?Q5:X5).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(r)?a:void 0;const n=R(a);if(!s){if(n&&W(k8,e))return Reflect.get(k8,e,r);if(e==="hasOwnProperty")return Af}const l=Reflect.get(a,e,r);return(a4(e)?j5.has(e):kf(e))||(s||S2(a,"get",e),i)?l:w2(l)?n&&G6(e)?l:l.value:r2(l)?s?Z5(l):d3(l):l}}class Y5 extends K5{constructor(a=!1){super(!1,a)}set(a,e,r,s){let i=a[e];if(!this._shallow){const f=J1(i);if(!n3(r)&&!J1(r)&&(i=j(i),r=j(r)),!R(a)&&w2(i)&&!w2(r))return f?!1:(i.value=r,!0)}const n=R(a)&&G6(e)?Number(e)<a.length:W(a,e),l=Reflect.set(a,e,r,s);return a===j(s)&&(n?D1(r,i)&&c1(a,"set",e,r):c1(a,"add",e,r)),l}deleteProperty(a,e){const r=W(a,e);a[e];const s=Reflect.deleteProperty(a,e);return s&&r&&c1(a,"delete",e,void 0),s}has(a,e){const r=Reflect.has(a,e);return(!a4(e)||!j5.has(e))&&S2(a,"has",e),r}ownKeys(a){return S2(a,"iterate",R(a)?"length":B1),Reflect.ownKeys(a)}}class Tf extends K5{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const Pf=new Y5,Ff=new Tf,Bf=new Y5(!0),Y6=c=>c,M3=c=>Reflect.getPrototypeOf(c);function D4(c,a,e=!1,r=!1){c=c.__v_raw;const s=j(c),i=j(a);e||(D1(a,i)&&S2(s,"get",a),S2(s,"get",i));const{has:n}=M3(s),l=r?Y6:e?J6:V4;if(n.call(s,a))return l(c.get(a));if(n.call(s,i))return l(c.get(i));c!==s&&c.get(a)}function E4(c,a=!1){const e=this.__v_raw,r=j(e),s=j(c);return a||(D1(c,s)&&S2(r,"has",c),S2(r,"has",s)),c===s?e.has(c):e.has(c)||e.has(s)}function _4(c,a=!1){return c=c.__v_raw,!a&&S2(j(c),"iterate",B1),Reflect.get(c,"size",c)}function y8(c){c=j(c);const a=j(this);return M3(a).has.call(a,c)||(a.add(c),c1(a,"add",c,c)),this}function A8(c,a){a=j(a);const e=j(this),{has:r,get:s}=M3(e);let i=r.call(e,c);i||(c=j(c),i=r.call(e,c));const n=s.call(e,c);return e.set(c,a),i?D1(a,n)&&c1(e,"set",c,a):c1(e,"add",c,a),this}function T8(c){const a=j(this),{has:e,get:r}=M3(a);let s=e.call(a,c);s||(c=j(c),s=e.call(a,c)),r&&r.call(a,c);const i=a.delete(c);return s&&c1(a,"delete",c,void 0),i}function P8(){const c=j(this),a=c.size!==0,e=c.clear();return a&&c1(c,"clear",void 0,void 0),e}function $4(c,a){return function(r,s){const i=this,n=i.__v_raw,l=j(n),f=a?Y6:c?J6:V4;return!c&&S2(l,"iterate",B1),n.forEach((o,m)=>r.call(s,f(o),f(m),i))}}function O4(c,a,e){return function(...r){const s=this.__v_raw,i=j(s),n=j1(i),l=c==="entries"||c===Symbol.iterator&&n,f=c==="keys"&&n,o=s[c](...r),m=e?Y6:a?J6:V4;return!a&&S2(i,"iterate",f?M6:B1),{next(){const{value:v,done:z}=o.next();return z?{value:v,done:z}:{value:l?[m(v[0]),m(v[1])]:m(v),done:z}},[Symbol.iterator](){return this}}}}function f1(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function Rf(){const c={get(i){return D4(this,i)},get size(){return _4(this)},has:E4,add:y8,set:A8,delete:T8,clear:P8,forEach:$4(!1,!1)},a={get(i){return D4(this,i,!1,!0)},get size(){return _4(this)},has:E4,add:y8,set:A8,delete:T8,clear:P8,forEach:$4(!1,!0)},e={get(i){return D4(this,i,!0)},get size(){return _4(this,!0)},has(i){return E4.call(this,i,!0)},add:f1("add"),set:f1("set"),delete:f1("delete"),clear:f1("clear"),forEach:$4(!0,!1)},r={get(i){return D4(this,i,!0,!0)},get size(){return _4(this,!0)},has(i){return E4.call(this,i,!0)},add:f1("add"),set:f1("set"),delete:f1("delete"),clear:f1("clear"),forEach:$4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=O4(i,!1,!1),e[i]=O4(i,!0,!1),a[i]=O4(i,!1,!0),r[i]=O4(i,!0,!0)}),[c,e,a,r]}const[Df,Ef,_f,$f]=Rf();function X6(c,a){const e=a?c?$f:_f:c?Ef:Df;return(r,s,i)=>s==="__v_isReactive"?!c:s==="__v_isReadonly"?c:s==="__v_raw"?r:Reflect.get(W(e,s)&&s in r?e:r,s,i)}const Of={get:X6(!1,!1)},Uf={get:X6(!1,!0)},If={get:X6(!0,!1)},X5=new WeakMap,Q5=new WeakMap,J5=new WeakMap,qf=new WeakMap;function Wf(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gf(c){return c.__v_skip||!Object.isExtensible(c)?0:Wf(vf(c))}function d3(c){return J1(c)?c:Q6(c,!1,Pf,Of,X5)}function jf(c){return Q6(c,!1,Bf,Uf,Q5)}function Z5(c){return Q6(c,!0,Ff,If,J5)}function Q6(c,a,e,r,s){if(!r2(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=s.get(c);if(i)return i;const n=Gf(c);if(n===0)return c;const l=new Proxy(c,n===2?r:e);return s.set(c,l),l}function K1(c){return J1(c)?K1(c.__v_raw):!!(c&&c.__v_isReactive)}function J1(c){return!!(c&&c.__v_isReadonly)}function n3(c){return!!(c&&c.__v_isShallow)}function c7(c){return K1(c)||J1(c)}function j(c){const a=c&&c.__v_raw;return a?j(a):c}function a7(c){return i3(c,"__v_skip",!0),c}const V4=c=>r2(c)?d3(c):c,J6=c=>r2(c)?Z5(c):c;function e7(c){u1&&E2&&(c=j(c),G5(c.dep||(c.dep=j6())))}function r7(c,a){c=j(c);const e=c.dep;e&&d6(e)}function w2(c){return!!(c&&c.__v_isRef===!0)}function M2(c){return Kf(c,!1)}function Kf(c,a){return w2(c)?c:new Yf(c,a)}class Yf{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:j(a),this._value=e?a:V4(a)}get value(){return e7(this),this._value}set value(a){const e=this.__v_isShallow||n3(a)||J1(a);a=e?a:j(a),D1(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:V4(a),r7(this))}}function Xf(c){return w2(c)?c.value:c}const Qf={get:(c,a,e)=>Xf(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const s=c[a];return w2(s)&&!w2(e)?(s.value=e,!0):Reflect.set(c,a,e,r)}};function s7(c){return K1(c)?c:new Proxy(c,Qf)}class Jf{constructor(a,e,r,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new K6(a,()=>{this._dirty||(this._dirty=!0,r7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const a=j(this);return e7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function Zf(c,a,e=!1){let r,s;const i=O(c);return i?(r=c,s=K2):(r=c.get,s=c.set),new Jf(r,s,i||!s,e)}function h1(c,a,e,r){let s;try{s=r?c(...r):c()}catch(i){C3(i,a,e)}return s}function B2(c,a,e,r){if(O(c)){const i=h1(c,a,e,r);return i&&E5(i)&&i.catch(n=>{C3(n,a,e)}),i}const s=[];for(let i=0;i<c.length;i++)s.push(B2(c[i],a,e,r));return s}function C3(c,a,e,r=!0){const s=a?a.vnode:null;if(a){let i=a.parent;const n=a.proxy,l=e;for(;i;){const o=i.ec;if(o){for(let m=0;m<o.length;m++)if(o[m](c,n,l)===!1)return}i=i.parent}const f=a.appContext.config.errorHandler;if(f){h1(f,null,10,[c,n,l]);return}}co(c,e,s,r)}function co(c,a,e,r=!0){console.error(c)}let p4=!1,C6=!1;const L2=[];let G2=0;const Y1=[];let Q2=null,k1=0;const i7=Promise.resolve();let Z6=null;function ao(c){const a=Z6||i7;return c?a.then(this?c.bind(this):c):a}function eo(c){let a=G2+1,e=L2.length;for(;a<e;){const r=a+e>>>1,s=L2[r],i=M4(s);i<c||i===c&&s.pre?a=r+1:e=r}return a}function c0(c){(!L2.length||!L2.includes(c,p4&&c.allowRecurse?G2+1:G2))&&(c.id==null?L2.push(c):L2.splice(eo(c.id),0,c),n7())}function n7(){!p4&&!C6&&(C6=!0,Z6=i7.then(f7))}function ro(c){const a=L2.indexOf(c);a>G2&&L2.splice(a,1)}function so(c){R(c)?Y1.push(...c):(!Q2||!Q2.includes(c,c.allowRecurse?k1+1:k1))&&Y1.push(c),n7()}function F8(c,a,e=p4?G2+1:0){for(;e<L2.length;e++){const r=L2[e];if(r&&r.pre){if(c&&r.id!==c.uid)continue;L2.splice(e,1),e--,r()}}}function l7(c){if(Y1.length){const a=[...new Set(Y1)];if(Y1.length=0,Q2){Q2.push(...a);return}for(Q2=a,Q2.sort((e,r)=>M4(e)-M4(r)),k1=0;k1<Q2.length;k1++)Q2[k1]();Q2=null,k1=0}}const M4=c=>c.id==null?1/0:c.id,io=(c,a)=>{const e=M4(c)-M4(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function f7(c){C6=!1,p4=!0,L2.sort(io);try{for(G2=0;G2<L2.length;G2++){const a=L2[G2];a&&a.active!==!1&&h1(a,null,14)}}finally{G2=0,L2.length=0,l7(),p4=!1,Z6=null,(L2.length||Y1.length)&&f7()}}function no(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||c2;let s=e;const i=a.startsWith("update:"),n=i&&a.slice(7);if(n&&n in r){const m=`${n==="modelValue"?"model":n}Modifiers`,{number:v,trim:z}=r[m]||c2;z&&(s=e.map(M=>z2(M)?M.trim():M)),v&&(s=e.map(hf))}let l,f=r[l=c6(a)]||r[l=c6(Y2(a))];!f&&i&&(f=r[l=c6(e4(a))]),f&&B2(f,c,6,s);const o=r[l+"Once"];if(o){if(!c.emitted)c.emitted={};else if(c.emitted[l])return;c.emitted[l]=!0,B2(o,c,6,s)}}function o7(c,a,e=!1){const r=a.emitsCache,s=r.get(c);if(s!==void 0)return s;const i=c.emits;let n={},l=!1;if(!O(c)){const f=o=>{const m=o7(o,a,!0);m&&(l=!0,h2(n,m))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!i&&!l?(r2(c)&&r.set(c,null),null):(R(i)?i.forEach(f=>n[f]=null):h2(n,i),r2(c)&&r.set(c,n),n)}function L3(c,a){return!c||!z3(a)?!1:(a=a.slice(2).replace(/Once$/,""),W(c,a[0].toLowerCase()+a.slice(1))||W(c,e4(a))||W(c,a))}let y2=null,g3=null;function l3(c){const a=y2;return y2=c,g3=c&&c.type.__scopeId||null,a}function a0(c){g3=c}function e0(){g3=null}function t7(c,a=y2,e){if(!a||c._n)return c;const r=(...s)=>{r._d&&G8(-1);const i=l3(a);let n;try{n=c(...s)}finally{l3(i),r._d&&G8(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function r6(c){const{type:a,vnode:e,proxy:r,withProxy:s,props:i,propsOptions:[n],slots:l,attrs:f,emit:o,render:m,renderCache:v,data:z,setupState:M,ctx:T,inheritAttrs:w}=c;let E,h;const g=l3(c);try{if(e.shapeFlag&4){const N=s||r,_=N;E=W2(m.call(_,N,v,i,M,z,T)),h=f}else{const N=a;E=W2(N.length>1?N(i,{attrs:f,slots:l,emit:o}):N(i,null)),h=a.props?f:lo(f)}}catch(N){z4.length=0,C3(N,c,1),E=o2(O2)}let C=E;if(h&&w!==!1){const N=Object.keys(h),{shapeFlag:_}=C;N.length&&_&7&&(n&&N.some(q6)&&(h=fo(h,n)),C=p1(C,h))}return e.dirs&&(C=p1(C),C.dirs=C.dirs?C.dirs.concat(e.dirs):e.dirs),e.transition&&(C.transition=e.transition),E=C,l3(g),E}const lo=c=>{let a;for(const e in c)(e==="class"||e==="style"||z3(e))&&((a||(a={}))[e]=c[e]);return a},fo=(c,a)=>{const e={};for(const r in c)(!q6(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function oo(c,a,e){const{props:r,children:s,component:i}=c,{props:n,children:l,patchFlag:f}=a,o=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return r?B8(r,n,o):!!n;if(f&8){const m=a.dynamicProps;for(let v=0;v<m.length;v++){const z=m[v];if(n[z]!==r[z]&&!L3(o,z))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===n?!1:r?n?B8(r,n,o):!0:!!n;return!1}function B8(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(a[i]!==c[i]&&!L3(e,i))return!0}return!1}function to({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const m7="components";function x1(c,a){return Ho(m7,c,!0,a)||c}const mo=Symbol.for("v-ndc");function Ho(c,a,e=!0,r=!1){const s=y2||d2;if(s){const i=s.type;if(c===m7){const l=tt(i,!1);if(l&&(l===a||l===Y2(a)||l===V3(Y2(a))))return i}const n=R8(s[c]||i[c],a)||R8(s.appContext[c],a);return!n&&r?i:n}}function R8(c,a){return c&&(c[a]||c[Y2(a)]||c[V3(Y2(a))])}const vo=c=>c.__isSuspense;function zo(c,a){a&&a.pendingBranch?R(c)?a.effects.push(...c):a.effects.push(c):so(c)}function uo(c,a){return r0(c,null,a)}const U4={};function X1(c,a,e){return r0(c,a,e)}function r0(c,a,{immediate:e,deep:r,flush:s,onTrack:i,onTrigger:n}=c2){var l;const f=Nf()===((l=d2)==null?void 0:l.scope)?d2:null;let o,m=!1,v=!1;if(w2(c)?(o=()=>c.value,m=n3(c)):K1(c)?(o=()=>c,r=!0):R(c)?(v=!0,m=c.some(N=>K1(N)||n3(N)),o=()=>c.map(N=>{if(w2(N))return N.value;if(K1(N))return T1(N);if(O(N))return h1(N,f,2)})):O(c)?a?o=()=>h1(c,f,2):o=()=>{if(!(f&&f.isUnmounted))return z&&z(),B2(c,f,3,[M])}:o=K2,a&&r){const N=o;o=()=>T1(N())}let z,M=N=>{z=g.onStop=()=>{h1(N,f,4),z=g.onStop=void 0}},T;if(C4)if(M=K2,a?e&&B2(a,f,3,[o(),v?[]:void 0,M]):o(),s==="sync"){const N=vt();T=N.__watcherHandles||(N.__watcherHandles=[])}else return K2;let w=v?new Array(c.length).fill(U4):U4;const E=()=>{if(g.active)if(a){const N=g.run();(r||m||(v?N.some((_,s2)=>D1(_,w[s2])):D1(N,w)))&&(z&&z(),B2(a,f,3,[N,w===U4?void 0:v&&w[0]===U4?[]:w,M]),w=N)}else g.run()};E.allowRecurse=!!a;let h;s==="sync"?h=E:s==="post"?h=()=>b2(E,f&&f.suspense):(E.pre=!0,f&&(E.id=f.uid),h=()=>c0(E));const g=new K6(o,h);a?e?E():w=g.run():s==="post"?b2(g.run.bind(g),f&&f.suspense):g.run();const C=()=>{g.stop(),f&&f.scope&&W6(f.scope.effects,g)};return T&&T.push(C),C}function ho(c,a,e){const r=this.proxy,s=z2(c)?c.includes(".")?H7(r,c):()=>r[c]:c.bind(r,r);let i;O(a)?i=a:(i=a.handler,e=a);const n=d2;Z1(this);const l=r0(s,i.bind(r),e);return n?Z1(n):R1(),l}function H7(c,a){const e=a.split(".");return()=>{let r=c;for(let s=0;s<e.length&&r;s++)r=r[e[s]];return r}}function T1(c,a){if(!r2(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),w2(c))T1(c.value,a);else if(R(c))for(let e=0;e<c.length;e++)T1(c[e],a);else if(D5(c)||j1(c))c.forEach(e=>{T1(e,a)});else if($5(c))for(const e in c)T1(c[e],a);return c}function Vo(c,a){const e=y2;if(e===null)return c;const r=k3(e)||e.proxy,s=c.dirs||(c.dirs=[]);for(let i=0;i<a.length;i++){let[n,l,f,o=c2]=a[i];n&&(O(n)&&(n={mounted:n,updated:n}),n.deep&&T1(l),s.push({dir:n,instance:r,value:l,oldValue:void 0,arg:f,modifiers:o}))}return c}function b1(c,a,e,r){const s=c.dirs,i=a&&a.dirs;for(let n=0;n<s.length;n++){const l=s[n];i&&(l.oldValue=i[n].value);let f=l.dir[r];f&&(r4(),B2(f,e,8,[c.el,l,c,a]),s4())}}const v1=Symbol("_leaveCb"),I4=Symbol("_enterCb");function po(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return s0(()=>{c.isMounted=!0}),V7(()=>{c.isUnmounting=!0}),c}const F2=[Function,Array],v7={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:F2,onEnter:F2,onAfterEnter:F2,onEnterCancelled:F2,onBeforeLeave:F2,onLeave:F2,onAfterLeave:F2,onLeaveCancelled:F2,onBeforeAppear:F2,onAppear:F2,onAfterAppear:F2,onAppearCancelled:F2},Mo={name:"BaseTransition",props:v7,setup(c,{slots:a}){const e=it(),r=po();let s;return()=>{const i=a.default&&u7(a.default(),!0);if(!i||!i.length)return;let n=i[0];if(i.length>1){for(const w of i)if(w.type!==O2){n=w;break}}const l=j(c),{mode:f}=l;if(r.isLeaving)return s6(n);const o=D8(n);if(!o)return s6(n);const m=L6(o,l,r,e);g6(o,m);const v=e.subTree,z=v&&D8(v);let M=!1;const{getTransitionKey:T}=o.type;if(T){const w=T();s===void 0?s=w:w!==s&&(s=w,M=!0)}if(z&&z.type!==O2&&(!y1(o,z)||M)){const w=L6(z,l,r,e);if(g6(z,w),f==="out-in")return r.isLeaving=!0,w.afterLeave=()=>{r.isLeaving=!1,e.update.active!==!1&&e.update()},s6(n);f==="in-out"&&o.type!==O2&&(w.delayLeave=(E,h,g)=>{const C=z7(r,z);C[String(z.key)]=z,E[v1]=()=>{h(),E[v1]=void 0,delete m.delayedLeave},m.delayedLeave=g})}return n}}},Co=Mo;function z7(c,a){const{leavingVNodes:e}=c;let r=e.get(a.type);return r||(r=Object.create(null),e.set(a.type,r)),r}function L6(c,a,e,r){const{appear:s,mode:i,persisted:n=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:o,onEnterCancelled:m,onBeforeLeave:v,onLeave:z,onAfterLeave:M,onLeaveCancelled:T,onBeforeAppear:w,onAppear:E,onAfterAppear:h,onAppearCancelled:g}=a,C=String(c.key),N=z7(e,c),_=(D,I)=>{D&&B2(D,r,9,I)},s2=(D,I)=>{const Y=I[1];_(D,I),R(D)?D.every(u2=>u2.length<=1)&&Y():D.length<=1&&Y()},Z={mode:i,persisted:n,beforeEnter(D){let I=l;if(!e.isMounted)if(s)I=w||l;else return;D[v1]&&D[v1](!0);const Y=N[C];Y&&y1(c,Y)&&Y.el[v1]&&Y.el[v1](),_(I,[D])},enter(D){let I=f,Y=o,u2=m;if(!e.isMounted)if(s)I=E||f,Y=h||o,u2=g||m;else return;let P=!1;const X=D[I4]=f2=>{P||(P=!0,f2?_(u2,[D]):_(Y,[D]),Z.delayedLeave&&Z.delayedLeave(),D[I4]=void 0)};I?s2(I,[D,X]):X()},leave(D,I){const Y=String(c.key);if(D[I4]&&D[I4](!0),e.isUnmounting)return I();_(v,[D]);let u2=!1;const P=D[v1]=X=>{u2||(u2=!0,I(),X?_(T,[D]):_(M,[D]),D[v1]=void 0,N[Y]===c&&delete N[Y])};N[Y]=c,z?s2(z,[D,P]):P()},clone(D){return L6(D,a,e,r)}};return Z}function s6(c){if(x3(c))return c=p1(c),c.children=null,c}function D8(c){return x3(c)?c.children?c.children[0]:void 0:c}function g6(c,a){c.shapeFlag&6&&c.component?g6(c.component.subTree,a):c.shapeFlag&128?(c.ssContent.transition=a.clone(c.ssContent),c.ssFallback.transition=a.clone(c.ssFallback)):c.transition=a}function u7(c,a=!1,e){let r=[],s=0;for(let i=0;i<c.length;i++){let n=c[i];const l=e==null?n.key:String(e)+String(n.key!=null?n.key:i);n.type===N2?(n.patchFlag&128&&s++,r=r.concat(u7(n.children,a,l))):(a||n.type!==O2)&&r.push(l!=null?p1(n,{key:l}):n)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function i1(c,a){return O(c)?h2({name:c.name},a,{setup:c}):c}const c3=c=>!!c.type.__asyncLoader,x3=c=>c.type.__isKeepAlive;function Lo(c,a){h7(c,"a",a)}function go(c,a){h7(c,"da",a)}function h7(c,a,e=d2){const r=c.__wdc||(c.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return c()});if(b3(a,r,e),e){let s=e.parent;for(;s&&s.parent;)x3(s.parent.vnode)&&xo(r,a,e,s),s=s.parent}}function xo(c,a,e,r){const s=b3(a,c,r,!0);p7(()=>{W6(r[a],s)},e)}function b3(c,a,e=d2,r=!1){if(e){const s=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;r4(),Z1(e);const l=B2(a,e,c,n);return R1(),s4(),l});return r?s.unshift(i):s.push(i),i}}const n1=c=>(a,e=d2)=>(!C4||c==="sp")&&b3(c,(...r)=>a(...r),e),N3=n1("bm"),s0=n1("m"),bo=n1("bu"),No=n1("u"),V7=n1("bum"),p7=n1("um"),So=n1("sp"),wo=n1("rtg"),ko=n1("rtc");function yo(c,a=d2){b3("ec",c,a)}function i0(c,a,e,r){let s;const i=e&&e[r];if(R(c)||z2(c)){s=new Array(c.length);for(let n=0,l=c.length;n<l;n++)s[n]=a(c[n],n,void 0,i&&i[n])}else if(typeof c=="number"){s=new Array(c);for(let n=0;n<c;n++)s[n]=a(n+1,n,void 0,i&&i[n])}else if(r2(c))if(c[Symbol.iterator])s=Array.from(c,(n,l)=>a(n,l,void 0,i&&i[l]));else{const n=Object.keys(c);s=new Array(n.length);for(let l=0,f=n.length;l<f;l++){const o=n[l];s[l]=a(c[o],o,l,i&&i[l])}}else s=[];return e&&(e[r]=s),s}const x6=c=>c?y7(c)?k3(c)||c.proxy:x6(c.parent):null,v4=h2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>x6(c.parent),$root:c=>x6(c.root),$emit:c=>c.emit,$options:c=>n0(c),$forceUpdate:c=>c.f||(c.f=()=>c0(c.update)),$nextTick:c=>c.n||(c.n=ao.bind(c.proxy)),$watch:c=>ho.bind(c)}),i6=(c,a)=>c!==c2&&!c.__isScriptSetup&&W(c,a),Ao={get({_:c},a){const{ctx:e,setupState:r,data:s,props:i,accessCache:n,type:l,appContext:f}=c;let o;if(a[0]!=="$"){const M=n[a];if(M!==void 0)switch(M){case 1:return r[a];case 2:return s[a];case 4:return e[a];case 3:return i[a]}else{if(i6(r,a))return n[a]=1,r[a];if(s!==c2&&W(s,a))return n[a]=2,s[a];if((o=c.propsOptions[0])&&W(o,a))return n[a]=3,i[a];if(e!==c2&&W(e,a))return n[a]=4,e[a];b6&&(n[a]=0)}}const m=v4[a];let v,z;if(m)return a==="$attrs"&&S2(c,"get",a),m(c);if((v=l.__cssModules)&&(v=v[a]))return v;if(e!==c2&&W(e,a))return n[a]=4,e[a];if(z=f.config.globalProperties,W(z,a))return z[a]},set({_:c},a,e){const{data:r,setupState:s,ctx:i}=c;return i6(s,a)?(s[a]=e,!0):r!==c2&&W(r,a)?(r[a]=e,!0):W(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:s,propsOptions:i}},n){let l;return!!e[n]||c!==c2&&W(c,n)||i6(a,n)||(l=i[0])&&W(l,n)||W(r,n)||W(v4,n)||W(s.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:W(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function E8(c){return R(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let b6=!0;function To(c){const a=n0(c),e=c.proxy,r=c.ctx;b6=!1,a.beforeCreate&&_8(a.beforeCreate,c,"bc");const{data:s,computed:i,methods:n,watch:l,provide:f,inject:o,created:m,beforeMount:v,mounted:z,beforeUpdate:M,updated:T,activated:w,deactivated:E,beforeDestroy:h,beforeUnmount:g,destroyed:C,unmounted:N,render:_,renderTracked:s2,renderTriggered:Z,errorCaptured:D,serverPrefetch:I,expose:Y,inheritAttrs:u2,components:P,directives:X,filters:f2}=a;if(o&&Po(o,r,null),n)for(const i2 in n){const K=n[i2];O(K)&&(r[i2]=K.bind(e))}if(s){const i2=s.call(e,e);r2(i2)&&(c.data=d3(i2))}if(b6=!0,i)for(const i2 in i){const K=i[i2],X2=O(K)?K.bind(e,e):O(K.get)?K.get.bind(e,e):K2,$1=!O(K)&&O(K.set)?K.set.bind(e):K2,T2=t2({get:X2,set:$1});Object.defineProperty(r,i2,{enumerable:!0,configurable:!0,get:()=>T2.value,set:P2=>T2.value=P2})}if(l)for(const i2 in l)M7(l[i2],r,e,i2);if(f){const i2=O(f)?f.call(e):f;Reflect.ownKeys(i2).forEach(K=>{_o(K,i2[K])})}m&&_8(m,c,"c");function H2(i2,K){R(K)?K.forEach(X2=>i2(X2.bind(e))):K&&i2(K.bind(e))}if(H2(N3,v),H2(s0,z),H2(bo,M),H2(No,T),H2(Lo,w),H2(go,E),H2(yo,D),H2(ko,s2),H2(wo,Z),H2(V7,g),H2(p7,N),H2(So,I),R(Y))if(Y.length){const i2=c.exposed||(c.exposed={});Y.forEach(K=>{Object.defineProperty(i2,K,{get:()=>e[K],set:X2=>e[K]=X2})})}else c.exposed||(c.exposed={});_&&c.render===K2&&(c.render=_),u2!=null&&(c.inheritAttrs=u2),P&&(c.components=P),X&&(c.directives=X)}function Po(c,a,e=K2){R(c)&&(c=N6(c));for(const r in c){const s=c[r];let i;r2(s)?"default"in s?i=a3(s.from||r,s.default,!0):i=a3(s.from||r):i=a3(s),w2(i)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:n=>i.value=n}):a[r]=i}}function _8(c,a,e){B2(R(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function M7(c,a,e,r){const s=r.includes(".")?H7(e,r):()=>e[r];if(z2(c)){const i=a[c];O(i)&&X1(s,i)}else if(O(c))X1(s,c.bind(e));else if(r2(c))if(R(c))c.forEach(i=>M7(i,a,e,r));else{const i=O(c.handler)?c.handler.bind(e):a[c.handler];O(i)&&X1(s,i,c)}}function n0(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:s,optionsCache:i,config:{optionMergeStrategies:n}}=c.appContext,l=i.get(a);let f;return l?f=l:!s.length&&!e&&!r?f=a:(f={},s.length&&s.forEach(o=>f3(f,o,n,!0)),f3(f,a,n)),r2(a)&&i.set(a,f),f}function f3(c,a,e,r=!1){const{mixins:s,extends:i}=a;i&&f3(c,i,e,!0),s&&s.forEach(n=>f3(c,n,e,!0));for(const n in a)if(!(r&&n==="expose")){const l=Fo[n]||e&&e[n];c[n]=l?l(c[n],a[n]):a[n]}return c}const Fo={data:$8,props:O8,emits:O8,methods:m4,computed:m4,beforeCreate:g2,created:g2,beforeMount:g2,mounted:g2,beforeUpdate:g2,updated:g2,beforeDestroy:g2,beforeUnmount:g2,destroyed:g2,unmounted:g2,activated:g2,deactivated:g2,errorCaptured:g2,serverPrefetch:g2,components:m4,directives:m4,watch:Ro,provide:$8,inject:Bo};function $8(c,a){return a?c?function(){return h2(O(c)?c.call(this,this):c,O(a)?a.call(this,this):a)}:a:c}function Bo(c,a){return m4(N6(c),N6(a))}function N6(c){if(R(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function g2(c,a){return c?[...new Set([].concat(c,a))]:a}function m4(c,a){return c?h2(Object.create(null),c,a):a}function O8(c,a){return c?R(c)&&R(a)?[...new Set([...c,...a])]:h2(Object.create(null),E8(c),E8(a??{})):a}function Ro(c,a){if(!c)return a;if(!a)return c;const e=h2(Object.create(null),c);for(const r in a)e[r]=g2(c[r],a[r]);return e}function d7(){return{app:null,config:{isNativeTag:mf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Do=0;function Eo(c,a){return function(r,s=null){O(r)||(r=h2({},r)),s!=null&&!r2(s)&&(s=null);const i=d7(),n=new WeakSet;let l=!1;const f=i.app={_uid:Do++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zt,get config(){return i.config},set config(o){},use(o,...m){return n.has(o)||(o&&O(o.install)?(n.add(o),o.install(f,...m)):O(o)&&(n.add(o),o(f,...m))),f},mixin(o){return i.mixins.includes(o)||i.mixins.push(o),f},component(o,m){return m?(i.components[o]=m,f):i.components[o]},directive(o,m){return m?(i.directives[o]=m,f):i.directives[o]},mount(o,m,v){if(!l){const z=o2(r,s);return z.appContext=i,m&&a?a(z,o):c(z,o,v),l=!0,f._container=o,o.__vue_app__=f,k3(z.component)||z.component.proxy}},unmount(){l&&(c(null,f._container),delete f._container.__vue_app__)},provide(o,m){return i.provides[o]=m,f},runWithContext(o){o3=f;try{return o()}finally{o3=null}}};return f}}let o3=null;function _o(c,a){if(d2){let e=d2.provides;const r=d2.parent&&d2.parent.provides;r===e&&(e=d2.provides=Object.create(r)),e[c]=a}}function a3(c,a,e=!1){const r=d2||y2;if(r||o3){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:o3._context.provides;if(s&&c in s)return s[c];if(arguments.length>1)return e&&O(a)?a.call(r&&r.proxy):a}}function $o(c,a,e,r=!1){const s={},i={};i3(i,w3,1),c.propsDefaults=Object.create(null),C7(c,a,s,i);for(const n in c.propsOptions[0])n in s||(s[n]=void 0);e?c.props=r?s:jf(s):c.type.props?c.props=s:c.props=i,c.attrs=i}function Oo(c,a,e,r){const{props:s,attrs:i,vnode:{patchFlag:n}}=c,l=j(s),[f]=c.propsOptions;let o=!1;if((r||n>0)&&!(n&16)){if(n&8){const m=c.vnode.dynamicProps;for(let v=0;v<m.length;v++){let z=m[v];if(L3(c.emitsOptions,z))continue;const M=a[z];if(f)if(W(i,z))M!==i[z]&&(i[z]=M,o=!0);else{const T=Y2(z);s[T]=S6(f,l,T,M,c,!1)}else M!==i[z]&&(i[z]=M,o=!0)}}}else{C7(c,a,s,i)&&(o=!0);let m;for(const v in l)(!a||!W(a,v)&&((m=e4(v))===v||!W(a,m)))&&(f?e&&(e[v]!==void 0||e[m]!==void 0)&&(s[v]=S6(f,l,v,void 0,c,!0)):delete s[v]);if(i!==l)for(const v in i)(!a||!W(a,v))&&(delete i[v],o=!0)}o&&c1(c,"set","$attrs")}function C7(c,a,e,r){const[s,i]=c.propsOptions;let n=!1,l;if(a)for(let f in a){if(Z4(f))continue;const o=a[f];let m;s&&W(s,m=Y2(f))?!i||!i.includes(m)?e[m]=o:(l||(l={}))[m]=o:L3(c.emitsOptions,f)||(!(f in r)||o!==r[f])&&(r[f]=o,n=!0)}if(i){const f=j(e),o=l||c2;for(let m=0;m<i.length;m++){const v=i[m];e[v]=S6(s,f,v,o[v],c,!W(o,v))}}return n}function S6(c,a,e,r,s,i){const n=c[e];if(n!=null){const l=W(n,"default");if(l&&r===void 0){const f=n.default;if(n.type!==Function&&!n.skipFactory&&O(f)){const{propsDefaults:o}=s;e in o?r=o[e]:(Z1(s),r=o[e]=f.call(null,a),R1())}else r=f}n[0]&&(i&&!l?r=!1:n[1]&&(r===""||r===e4(e))&&(r=!0))}return r}function L7(c,a,e=!1){const r=a.propsCache,s=r.get(c);if(s)return s;const i=c.props,n={},l=[];let f=!1;if(!O(c)){const m=v=>{f=!0;const[z,M]=L7(v,a,!0);h2(n,z),M&&l.push(...M)};!e&&a.mixins.length&&a.mixins.forEach(m),c.extends&&m(c.extends),c.mixins&&c.mixins.forEach(m)}if(!i&&!f)return r2(c)&&r.set(c,G1),G1;if(R(i))for(let m=0;m<i.length;m++){const v=Y2(i[m]);U8(v)&&(n[v]=c2)}else if(i)for(const m in i){const v=Y2(m);if(U8(v)){const z=i[m],M=n[v]=R(z)||O(z)?{type:z}:h2({},z);if(M){const T=W8(Boolean,M.type),w=W8(String,M.type);M[0]=T>-1,M[1]=w<0||T<w,(T>-1||W(M,"default"))&&l.push(v)}}}const o=[n,l];return r2(c)&&r.set(c,o),o}function U8(c){return c[0]!=="$"}function I8(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function q8(c,a){return I8(c)===I8(a)}function W8(c,a){return R(a)?a.findIndex(e=>q8(e,c)):O(a)&&q8(a,c)?0:-1}const g7=c=>c[0]==="_"||c==="$stable",l0=c=>R(c)?c.map(W2):[W2(c)],Uo=(c,a,e)=>{if(a._n)return a;const r=t7((...s)=>l0(a(...s)),e);return r._c=!1,r},x7=(c,a,e)=>{const r=c._ctx;for(const s in c){if(g7(s))continue;const i=c[s];if(O(i))a[s]=Uo(s,i,r);else if(i!=null){const n=l0(i);a[s]=()=>n}}},b7=(c,a)=>{const e=l0(a);c.slots.default=()=>e},Io=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=j(a),i3(a,"_",e)):x7(a,c.slots={})}else c.slots={},a&&b7(c,a);i3(c.slots,w3,1)},qo=(c,a,e)=>{const{vnode:r,slots:s}=c;let i=!0,n=c2;if(r.shapeFlag&32){const l=a._;l?e&&l===1?i=!1:(h2(s,a),!e&&l===1&&delete s._):(i=!a.$stable,x7(a,s)),n=a}else a&&(b7(c,a),n={default:1});if(i)for(const l in s)!g7(l)&&n[l]==null&&delete s[l]};function w6(c,a,e,r,s=!1){if(R(c)){c.forEach((z,M)=>w6(z,a&&(R(a)?a[M]:a),e,r,s));return}if(c3(r)&&!s)return;const i=r.shapeFlag&4?k3(r.component)||r.component.proxy:r.el,n=s?null:i,{i:l,r:f}=c,o=a&&a.r,m=l.refs===c2?l.refs={}:l.refs,v=l.setupState;if(o!=null&&o!==f&&(z2(o)?(m[o]=null,W(v,o)&&(v[o]=null)):w2(o)&&(o.value=null)),O(f))h1(f,l,12,[n,m]);else{const z=z2(f),M=w2(f);if(z||M){const T=()=>{if(c.f){const w=z?W(v,f)?v[f]:m[f]:f.value;s?R(w)&&W6(w,i):R(w)?w.includes(i)||w.push(i):z?(m[f]=[i],W(v,f)&&(v[f]=m[f])):(f.value=[i],c.k&&(m[c.k]=f.value))}else z?(m[f]=n,W(v,f)&&(v[f]=n)):M&&(f.value=n,c.k&&(m[c.k]=n))};n?(T.id=-1,b2(T,e)):T()}}}const b2=zo;function Wo(c){return Go(c)}function Go(c,a){const e=h6();e.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:n,createText:l,createComment:f,setText:o,setElementText:m,parentNode:v,nextSibling:z,setScopeId:M=K2,insertStaticContent:T}=c,w=(t,H,u,V=null,p=null,x=null,S=!1,L=null,b=!!H.dynamicChildren)=>{if(t===H)return;t&&!y1(t,H)&&(V=R4(t),P2(t,p,x,!0),t=null),H.patchFlag===-2&&(b=!1,H.dynamicChildren=null);const{type:d,ref:F,shapeFlag:y}=H;switch(d){case S3:E(t,H,u,V);break;case O2:h(t,H,u,V);break;case n6:t==null&&g(H,u,V,S);break;case N2:P(t,H,u,V,p,x,S,L,b);break;default:y&1?_(t,H,u,V,p,x,S,L,b):y&6?X(t,H,u,V,p,x,S,L,b):(y&64||y&128)&&d.process(t,H,u,V,p,x,S,L,b,O1)}F!=null&&p&&w6(F,t&&t.ref,x,H||t,!H)},E=(t,H,u,V)=>{if(t==null)r(H.el=l(H.children),u,V);else{const p=H.el=t.el;H.children!==t.children&&o(p,H.children)}},h=(t,H,u,V)=>{t==null?r(H.el=f(H.children||""),u,V):H.el=t.el},g=(t,H,u,V)=>{[t.el,t.anchor]=T(t.children,H,u,V,t.el,t.anchor)},C=({el:t,anchor:H},u,V)=>{let p;for(;t&&t!==H;)p=z(t),r(t,u,V),t=p;r(H,u,V)},N=({el:t,anchor:H})=>{let u;for(;t&&t!==H;)u=z(t),s(t),t=u;s(H)},_=(t,H,u,V,p,x,S,L,b)=>{S=S||H.type==="svg",t==null?s2(H,u,V,p,x,S,L,b):I(t,H,p,x,S,L,b)},s2=(t,H,u,V,p,x,S,L)=>{let b,d;const{type:F,props:y,shapeFlag:B,transition:$,dirs:U}=t;if(b=t.el=n(t.type,x,y&&y.is,y),B&8?m(b,t.children):B&16&&D(t.children,b,null,V,p,x&&F!=="foreignObject",S,L),U&&b1(t,null,V,"created"),Z(b,t,t.scopeId,S,V),y){for(const Q in y)Q!=="value"&&!Z4(Q)&&i(b,Q,null,y[Q],x,t.children,V,p,C2);"value"in y&&i(b,"value",null,y.value),(d=y.onVnodeBeforeMount)&&q2(d,V,t)}U&&b1(t,null,V,"beforeMount");const J=jo(p,$);J&&$.beforeEnter(b),r(b,H,u),((d=y&&y.onVnodeMounted)||J||U)&&b2(()=>{d&&q2(d,V,t),J&&$.enter(b),U&&b1(t,null,V,"mounted")},p)},Z=(t,H,u,V,p)=>{if(u&&M(t,u),V)for(let x=0;x<V.length;x++)M(t,V[x]);if(p){let x=p.subTree;if(H===x){const S=p.vnode;Z(t,S,S.scopeId,S.slotScopeIds,p.parent)}}},D=(t,H,u,V,p,x,S,L,b=0)=>{for(let d=b;d<t.length;d++){const F=t[d]=L?z1(t[d]):W2(t[d]);w(null,F,H,u,V,p,x,S,L)}},I=(t,H,u,V,p,x,S)=>{const L=H.el=t.el;let{patchFlag:b,dynamicChildren:d,dirs:F}=H;b|=t.patchFlag&16;const y=t.props||c2,B=H.props||c2;let $;u&&N1(u,!1),($=B.onVnodeBeforeUpdate)&&q2($,u,H,t),F&&b1(H,t,u,"beforeUpdate"),u&&N1(u,!0);const U=p&&H.type!=="foreignObject";if(d?Y(t.dynamicChildren,d,L,u,V,U,x):S||K(t,H,L,null,u,V,U,x,!1),b>0){if(b&16)u2(L,H,y,B,u,V,p);else if(b&2&&y.class!==B.class&&i(L,"class",null,B.class,p),b&4&&i(L,"style",y.style,B.style,p),b&8){const J=H.dynamicProps;for(let Q=0;Q<J.length;Q++){const v2=J[Q],R2=y[v2],U1=B[v2];(U1!==R2||v2==="value")&&i(L,v2,R2,U1,p,t.children,u,V,C2)}}b&1&&t.children!==H.children&&m(L,H.children)}else!S&&d==null&&u2(L,H,y,B,u,V,p);(($=B.onVnodeUpdated)||F)&&b2(()=>{$&&q2($,u,H,t),F&&b1(H,t,u,"updated")},V)},Y=(t,H,u,V,p,x,S)=>{for(let L=0;L<H.length;L++){const b=t[L],d=H[L],F=b.el&&(b.type===N2||!y1(b,d)||b.shapeFlag&70)?v(b.el):u;w(b,d,F,null,V,p,x,S,!0)}},u2=(t,H,u,V,p,x,S)=>{if(u!==V){if(u!==c2)for(const L in u)!Z4(L)&&!(L in V)&&i(t,L,u[L],null,S,H.children,p,x,C2);for(const L in V){if(Z4(L))continue;const b=V[L],d=u[L];b!==d&&L!=="value"&&i(t,L,d,b,S,H.children,p,x,C2)}"value"in V&&i(t,"value",u.value,V.value)}},P=(t,H,u,V,p,x,S,L,b)=>{const d=H.el=t?t.el:l(""),F=H.anchor=t?t.anchor:l("");let{patchFlag:y,dynamicChildren:B,slotScopeIds:$}=H;$&&(L=L?L.concat($):$),t==null?(r(d,u,V),r(F,u,V),D(H.children,u,F,p,x,S,L,b)):y>0&&y&64&&B&&t.dynamicChildren?(Y(t.dynamicChildren,B,u,p,x,S,L),(H.key!=null||p&&H===p.subTree)&&N7(t,H,!0)):K(t,H,u,F,p,x,S,L,b)},X=(t,H,u,V,p,x,S,L,b)=>{H.slotScopeIds=L,t==null?H.shapeFlag&512?p.ctx.activate(H,u,V,S,b):f2(H,u,V,p,x,S,b):U2(t,H,b)},f2=(t,H,u,V,p,x,S)=>{const L=t.component=st(t,V,p);if(x3(t)&&(L.ctx.renderer=O1),nt(L),L.asyncDep){if(p&&p.registerDep(L,H2),!t.el){const b=L.subTree=o2(O2);h(null,b,H,u)}return}H2(L,t,H,u,p,x,S)},U2=(t,H,u)=>{const V=H.component=t.component;if(oo(t,H,u))if(V.asyncDep&&!V.asyncResolved){i2(V,H,u);return}else V.next=H,ro(V.update),V.update();else H.el=t.el,V.vnode=H},H2=(t,H,u,V,p,x,S)=>{const L=()=>{if(t.isMounted){let{next:F,bu:y,u:B,parent:$,vnode:U}=t,J=F,Q;N1(t,!1),F?(F.el=U.el,i2(t,F,S)):F=U,y&&a6(y),(Q=F.props&&F.props.onVnodeBeforeUpdate)&&q2(Q,$,F,U),N1(t,!0);const v2=r6(t),R2=t.subTree;t.subTree=v2,w(R2,v2,v(R2.el),R4(R2),t,p,x),F.el=v2.el,J===null&&to(t,v2.el),B&&b2(B,p),(Q=F.props&&F.props.onVnodeUpdated)&&b2(()=>q2(Q,$,F,U),p)}else{let F;const{el:y,props:B}=H,{bm:$,m:U,parent:J}=t,Q=c3(H);if(N1(t,!1),$&&a6($),!Q&&(F=B&&B.onVnodeBeforeMount)&&q2(F,J,H),N1(t,!0),y&&Z3){const v2=()=>{t.subTree=r6(t),Z3(y,t.subTree,t,p,null)};Q?H.type.__asyncLoader().then(()=>!t.isUnmounted&&v2()):v2()}else{const v2=t.subTree=r6(t);w(null,v2,u,V,t,p,x),H.el=v2.el}if(U&&b2(U,p),!Q&&(F=B&&B.onVnodeMounted)){const v2=H;b2(()=>q2(F,J,v2),p)}(H.shapeFlag&256||J&&c3(J.vnode)&&J.vnode.shapeFlag&256)&&t.a&&b2(t.a,p),t.isMounted=!0,H=u=V=null}},b=t.effect=new K6(L,()=>c0(d),t.scope),d=t.update=()=>b.run();d.id=t.uid,N1(t,!0),d()},i2=(t,H,u)=>{H.component=t;const V=t.vnode.props;t.vnode=H,t.next=null,Oo(t,H.props,V,u),qo(t,H.children,u),r4(),F8(t),s4()},K=(t,H,u,V,p,x,S,L,b=!1)=>{const d=t&&t.children,F=t?t.shapeFlag:0,y=H.children,{patchFlag:B,shapeFlag:$}=H;if(B>0){if(B&128){$1(d,y,u,V,p,x,S,L,b);return}else if(B&256){X2(d,y,u,V,p,x,S,L,b);return}}$&8?(F&16&&C2(d,p,x),y!==d&&m(u,y)):F&16?$&16?$1(d,y,u,V,p,x,S,L,b):C2(d,p,x,!0):(F&8&&m(u,""),$&16&&D(y,u,V,p,x,S,L,b))},X2=(t,H,u,V,p,x,S,L,b)=>{t=t||G1,H=H||G1;const d=t.length,F=H.length,y=Math.min(d,F);let B;for(B=0;B<y;B++){const $=H[B]=b?z1(H[B]):W2(H[B]);w(t[B],$,u,null,p,x,S,L,b)}d>F?C2(t,p,x,!0,!1,y):D(H,u,V,p,x,S,L,b,y)},$1=(t,H,u,V,p,x,S,L,b)=>{let d=0;const F=H.length;let y=t.length-1,B=F-1;for(;d<=y&&d<=B;){const $=t[d],U=H[d]=b?z1(H[d]):W2(H[d]);if(y1($,U))w($,U,u,null,p,x,S,L,b);else break;d++}for(;d<=y&&d<=B;){const $=t[y],U=H[B]=b?z1(H[B]):W2(H[B]);if(y1($,U))w($,U,u,null,p,x,S,L,b);else break;y--,B--}if(d>y){if(d<=B){const $=B+1,U=$<F?H[$].el:V;for(;d<=B;)w(null,H[d]=b?z1(H[d]):W2(H[d]),u,U,p,x,S,L,b),d++}}else if(d>B)for(;d<=y;)P2(t[d],p,x,!0),d++;else{const $=d,U=d,J=new Map;for(d=U;d<=B;d++){const k2=H[d]=b?z1(H[d]):W2(H[d]);k2.key!=null&&J.set(k2.key,d)}let Q,v2=0;const R2=B-U+1;let U1=!1,g8=0;const l4=new Array(R2);for(d=0;d<R2;d++)l4[d]=0;for(d=$;d<=y;d++){const k2=t[d];if(v2>=R2){P2(k2,p,x,!0);continue}let I2;if(k2.key!=null)I2=J.get(k2.key);else for(Q=U;Q<=B;Q++)if(l4[Q-U]===0&&y1(k2,H[Q])){I2=Q;break}I2===void 0?P2(k2,p,x,!0):(l4[I2-U]=d+1,I2>=g8?g8=I2:U1=!0,w(k2,H[I2],u,null,p,x,S,L,b),v2++)}const x8=U1?Ko(l4):G1;for(Q=x8.length-1,d=R2-1;d>=0;d--){const k2=U+d,I2=H[k2],b8=k2+1<F?H[k2+1].el:V;l4[d]===0?w(null,I2,u,b8,p,x,S,L,b):U1&&(Q<0||d!==x8[Q]?T2(I2,u,b8,2):Q--)}}},T2=(t,H,u,V,p=null)=>{const{el:x,type:S,transition:L,children:b,shapeFlag:d}=t;if(d&6){T2(t.component.subTree,H,u,V);return}if(d&128){t.suspense.move(H,u,V);return}if(d&64){S.move(t,H,u,O1);return}if(S===N2){r(x,H,u);for(let y=0;y<b.length;y++)T2(b[y],H,u,V);r(t.anchor,H,u);return}if(S===n6){C(t,H,u);return}if(V!==2&&d&1&&L)if(V===0)L.beforeEnter(x),r(x,H,u),b2(()=>L.enter(x),p);else{const{leave:y,delayLeave:B,afterLeave:$}=L,U=()=>r(x,H,u),J=()=>{y(x,()=>{U(),$&&$()})};B?B(x,U,J):J()}else r(x,H,u)},P2=(t,H,u,V=!1,p=!1)=>{const{type:x,props:S,ref:L,children:b,dynamicChildren:d,shapeFlag:F,patchFlag:y,dirs:B}=t;if(L!=null&&w6(L,null,u,t,!0),F&256){H.ctx.deactivate(t);return}const $=F&1&&B,U=!c3(t);let J;if(U&&(J=S&&S.onVnodeBeforeUnmount)&&q2(J,H,t),F&6)g1(t.component,u,V);else{if(F&128){t.suspense.unmount(u,V);return}$&&b1(t,null,H,"beforeUnmount"),F&64?t.type.remove(t,H,u,p,O1,V):d&&(x!==N2||y>0&&y&64)?C2(d,H,u,!1,!0):(x===N2&&y&384||!p&&F&16)&&C2(b,H,u),V&&q(t)}(U&&(J=S&&S.onVnodeUnmounted)||$)&&b2(()=>{J&&q2(J,H,t),$&&b1(t,null,H,"unmounted")},u)},q=t=>{const{type:H,el:u,anchor:V,transition:p}=t;if(H===N2){p2(u,V);return}if(H===n6){N(t);return}const x=()=>{s(u),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(t.shapeFlag&1&&p&&!p.persisted){const{leave:S,delayLeave:L}=p,b=()=>S(u,x);L?L(t.el,x,b):b()}else x()},p2=(t,H)=>{let u;for(;t!==H;)u=z(t),s(t),t=u;s(H)},g1=(t,H,u)=>{const{bum:V,scope:p,update:x,subTree:S,um:L}=t;V&&a6(V),p.stop(),x&&(x.active=!1,P2(S,t,H,u)),L&&b2(L,H),b2(()=>{t.isUnmounted=!0},H),H&&H.pendingBranch&&!H.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===H.pendingId&&(H.deps--,H.deps===0&&H.resolve())},C2=(t,H,u,V=!1,p=!1,x=0)=>{for(let S=x;S<t.length;S++)P2(t[S],H,u,V,p)},R4=t=>t.shapeFlag&6?R4(t.component.subTree):t.shapeFlag&128?t.suspense.next():z(t.anchor||t.el),L8=(t,H,u)=>{t==null?H._vnode&&P2(H._vnode,null,null,!0):w(H._vnode||null,t,H,null,null,null,u),F8(),l7(),H._vnode=t},O1={p:w,um:P2,m:T2,r:q,mt:f2,mc:D,pc:K,pbc:Y,n:R4,o:c};let J3,Z3;return a&&([J3,Z3]=a(O1)),{render:L8,hydrate:J3,createApp:Eo(L8,J3)}}function N1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function jo(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function N7(c,a,e=!1){const r=c.children,s=a.children;if(R(r)&&R(s))for(let i=0;i<r.length;i++){const n=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=z1(s[i]),l.el=n.el),e||N7(n,l)),l.type===S3&&(l.el=n.el)}}function Ko(c){const a=c.slice(),e=[0];let r,s,i,n,l;const f=c.length;for(r=0;r<f;r++){const o=c[r];if(o!==0){if(s=e[e.length-1],c[s]<o){a[r]=s,e.push(r);continue}for(i=0,n=e.length-1;i<n;)l=i+n>>1,c[e[l]]<o?i=l+1:n=l;o<c[e[i]]&&(i>0&&(a[r]=e[i-1]),e[i]=r)}}for(i=e.length,n=e[i-1];i-- >0;)e[i]=n,n=a[n];return e}const Yo=c=>c.__isTeleport,N2=Symbol.for("v-fgt"),S3=Symbol.for("v-txt"),O2=Symbol.for("v-cmt"),n6=Symbol.for("v-stc"),z4=[];let _2=null;function l2(c=!1){z4.push(_2=c?null:[])}function Xo(){z4.pop(),_2=z4[z4.length-1]||null}let d4=1;function G8(c){d4+=c}function S7(c){return c.dynamicChildren=d4>0?_2||G1:null,Xo(),d4>0&&_2&&_2.push(c),c}function m2(c,a,e,r,s,i){return S7(G(c,a,e,r,s,i,!0))}function Qo(c,a,e,r,s){return S7(o2(c,a,e,r,s,!0))}function k6(c){return c?c.__v_isVNode===!0:!1}function y1(c,a){return c.type===a.type&&c.key===a.key}const w3="__vInternal",w7=({key:c})=>c??null,e3=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?z2(c)||w2(c)||O(c)?{i:y2,r:c,k:a,f:!!e}:c:null);function G(c,a=null,e=null,r=0,s=null,i=c===N2?0:1,n=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&w7(a),ref:a&&e3(a),scopeId:g3,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:y2};return l?(f0(f,e),i&128&&c.normalize(f)):e&&(f.shapeFlag|=z2(e)?8:16),d4>0&&!n&&_2&&(f.patchFlag>0||i&6)&&f.patchFlag!==32&&_2.push(f),f}const o2=Jo;function Jo(c,a=null,e=null,r=0,s=null,i=!1){if((!c||c===mo)&&(c=O2),k6(c)){const l=p1(c,a,!0);return e&&f0(l,e),d4>0&&!i&&_2&&(l.shapeFlag&6?_2[_2.indexOf(c)]=l:_2.push(l)),l.patchFlag|=-2,l}if(mt(c)&&(c=c.__vccOpts),a){a=Zo(a);let{class:l,style:f}=a;l&&!z2(l)&&(a.class=Z2(l)),r2(f)&&(c7(f)&&!R(f)&&(f=h2({},f)),a.style=p3(f))}const n=z2(c)?1:vo(c)?128:Yo(c)?64:r2(c)?4:O(c)?2:0;return G(c,a,e,r,s,n,i,!0)}function Zo(c){return c?c7(c)||w3 in c?h2({},c):c:null}function p1(c,a,e=!1){const{props:r,ref:s,patchFlag:i,children:n}=c,l=a?at(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:l,key:l&&w7(l),ref:a&&a.ref?e&&s?R(s)?s.concat(e3(a)):[s,e3(a)]:e3(a):s,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==N2?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&p1(c.ssContent),ssFallback:c.ssFallback&&p1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function k7(c=" ",a=0){return o2(S3,null,c,a)}function ct(c="",a=!1){return a?(l2(),Qo(O2,null,c)):o2(O2,null,c)}function W2(c){return c==null||typeof c=="boolean"?o2(O2):R(c)?o2(N2,null,c.slice()):typeof c=="object"?z1(c):o2(S3,null,String(c))}function z1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:p1(c)}function f0(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(R(a))e=16;else if(typeof a=="object")if(r&65){const s=a.default;s&&(s._c&&(s._d=!1),f0(c,s()),s._c&&(s._d=!0));return}else{e=32;const s=a._;!s&&!(w3 in a)?a._ctx=y2:s===3&&y2&&(y2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else O(a)?(a={default:a,_ctx:y2},e=32):(a=String(a),r&64?(e=16,a=[k7(a)]):e=8);c.children=a,c.shapeFlag|=e}function at(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const s in r)if(s==="class")a.class!==r.class&&(a.class=Z2([a.class,r.class]));else if(s==="style")a.style=p3([a.style,r.style]);else if(z3(s)){const i=a[s],n=r[s];n&&i!==n&&!(R(i)&&i.includes(n))&&(a[s]=i?[].concat(i,n):n)}else s!==""&&(a[s]=r[s])}return a}function q2(c,a,e,r=null){B2(c,a,7,[e,r])}const et=d7();let rt=0;function st(c,a,e){const r=c.type,s=(a?a.appContext:c.appContext)||et,i={uid:rt++,vnode:c,type:r,parent:a,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:L7(r,s),emitsOptions:o7(r,s),emit:null,emitted:null,propsDefaults:c2,inheritAttrs:r.inheritAttrs,ctx:c2,data:c2,props:c2,attrs:c2,slots:c2,refs:c2,setupState:c2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=no.bind(null,i),c.ce&&c.ce(i),i}let d2=null;const it=()=>d2||y2;let o0,I1,j8="__VUE_INSTANCE_SETTERS__";(I1=h6()[j8])||(I1=h6()[j8]=[]),I1.push(c=>d2=c),o0=c=>{I1.length>1?I1.forEach(a=>a(c)):I1[0](c)};const Z1=c=>{o0(c),c.scope.on()},R1=()=>{d2&&d2.scope.off(),o0(null)};function y7(c){return c.vnode.shapeFlag&4}let C4=!1;function nt(c,a=!1){C4=a;const{props:e,children:r}=c.vnode,s=y7(c);$o(c,e,s,a),Io(c,r);const i=s?lt(c,a):void 0;return C4=!1,i}function lt(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=a7(new Proxy(c.ctx,Ao));const{setup:r}=e;if(r){const s=c.setupContext=r.length>1?ot(c):null;Z1(c),r4();const i=h1(r,c,0,[c.props,s]);if(s4(),R1(),E5(i)){if(i.then(R1,R1),a)return i.then(n=>{K8(c,n,a)}).catch(n=>{C3(n,c,0)});c.asyncDep=i}else K8(c,i,a)}else A7(c,a)}function K8(c,a,e){O(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:r2(a)&&(c.setupState=s7(a)),A7(c,e)}let Y8;function A7(c,a,e){const r=c.type;if(!c.render){if(!a&&Y8&&!r.render){const s=r.template||n0(c).template;if(s){const{isCustomElement:i,compilerOptions:n}=c.appContext.config,{delimiters:l,compilerOptions:f}=r,o=h2(h2({isCustomElement:i,delimiters:l},n),f);r.render=Y8(s,o)}}c.render=r.render||K2}{Z1(c),r4();try{To(c)}finally{s4(),R1()}}}function ft(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return S2(c,"get","$attrs"),a[e]}}))}function ot(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return ft(c)},slots:c.slots,emit:c.emit,expose:a}}function k3(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(s7(a7(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in v4)return v4[e](c)},has(a,e){return e in a||e in v4}}))}function tt(c,a=!0){return O(c)?c.displayName||c.name:c.name||a&&c.__name}function mt(c){return O(c)&&"__vccOpts"in c}const t2=(c,a)=>Zf(c,a,C4);function T7(c,a,e){const r=arguments.length;return r===2?r2(a)&&!R(a)?k6(a)?o2(c,null,[a]):o2(c,a):o2(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&k6(e)&&(e=[e]),o2(c,a,e))}const Ht=Symbol.for("v-scx"),vt=()=>a3(Ht),zt="3.3.13",ut="http://www.w3.org/2000/svg",A1=typeof document<"u"?document:null,X8=A1&&A1.createElement("template"),ht={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const s=a?A1.createElementNS(ut,c):A1.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:c=>A1.createTextNode(c),createComment:c=>A1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>A1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,s,i){const n=e?e.previousSibling:a.lastChild;if(s&&(s===i||s.nextSibling))for(;a.insertBefore(s.cloneNode(!0),e),!(s===i||!(s=s.nextSibling)););else{X8.innerHTML=r?`<svg>${c}</svg>`:c;const l=X8.content;if(r){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}a.insertBefore(l,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},o1="transition",f4="animation",L4=Symbol("_vtc"),t0=(c,{slots:a})=>T7(Co,Vt(c),a);t0.displayName="Transition";const P7={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};t0.props=h2({},v7,P7);const S1=(c,a=[])=>{R(c)?c.forEach(e=>e(...a)):c&&c(...a)},Q8=c=>c?R(c)?c.some(a=>a.length>1):c.length>1:!1;function Vt(c){const a={};for(const P in c)P in P7||(a[P]=c[P]);if(c.css===!1)return a;const{name:e="v",type:r,duration:s,enterFromClass:i=`${e}-enter-from`,enterActiveClass:n=`${e}-enter-active`,enterToClass:l=`${e}-enter-to`,appearFromClass:f=i,appearActiveClass:o=n,appearToClass:m=l,leaveFromClass:v=`${e}-leave-from`,leaveActiveClass:z=`${e}-leave-active`,leaveToClass:M=`${e}-leave-to`}=c,T=pt(s),w=T&&T[0],E=T&&T[1],{onBeforeEnter:h,onEnter:g,onEnterCancelled:C,onLeave:N,onLeaveCancelled:_,onBeforeAppear:s2=h,onAppear:Z=g,onAppearCancelled:D=C}=a,I=(P,X,f2)=>{w1(P,X?m:l),w1(P,X?o:n),f2&&f2()},Y=(P,X)=>{P._isLeaving=!1,w1(P,v),w1(P,M),w1(P,z),X&&X()},u2=P=>(X,f2)=>{const U2=P?Z:g,H2=()=>I(X,P,f2);S1(U2,[X,H2]),J8(()=>{w1(X,P?f:i),t1(X,P?m:l),Q8(U2)||Z8(X,r,w,H2)})};return h2(a,{onBeforeEnter(P){S1(h,[P]),t1(P,i),t1(P,n)},onBeforeAppear(P){S1(s2,[P]),t1(P,f),t1(P,o)},onEnter:u2(!1),onAppear:u2(!0),onLeave(P,X){P._isLeaving=!0;const f2=()=>Y(P,X);t1(P,v),Ct(),t1(P,z),J8(()=>{P._isLeaving&&(w1(P,v),t1(P,M),Q8(N)||Z8(P,r,E,f2))}),S1(N,[P,f2])},onEnterCancelled(P){I(P,!1),S1(C,[P])},onAppearCancelled(P){I(P,!0),S1(D,[P])},onLeaveCancelled(P){Y(P),S1(_,[P])}})}function pt(c){if(c==null)return null;if(r2(c))return[l6(c.enter),l6(c.leave)];{const a=l6(c);return[a,a]}}function l6(c){return Vf(c)}function t1(c,a){a.split(/\s+/).forEach(e=>e&&c.classList.add(e)),(c[L4]||(c[L4]=new Set)).add(a)}function w1(c,a){a.split(/\s+/).forEach(r=>r&&c.classList.remove(r));const e=c[L4];e&&(e.delete(a),e.size||(c[L4]=void 0))}function J8(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let Mt=0;function Z8(c,a,e,r){const s=c._endId=++Mt,i=()=>{s===c._endId&&r()};if(e)return setTimeout(i,e);const{type:n,timeout:l,propCount:f}=dt(c,a);if(!n)return r();const o=n+"end";let m=0;const v=()=>{c.removeEventListener(o,z),i()},z=M=>{M.target===c&&++m>=f&&v()};setTimeout(()=>{m<f&&v()},l+1),c.addEventListener(o,z)}function dt(c,a){const e=window.getComputedStyle(c),r=T=>(e[T]||"").split(", "),s=r(`${o1}Delay`),i=r(`${o1}Duration`),n=c5(s,i),l=r(`${f4}Delay`),f=r(`${f4}Duration`),o=c5(l,f);let m=null,v=0,z=0;a===o1?n>0&&(m=o1,v=n,z=i.length):a===f4?o>0&&(m=f4,v=o,z=f.length):(v=Math.max(n,o),m=v>0?n>o?o1:f4:null,z=m?m===o1?i.length:f.length:0);const M=m===o1&&/\b(transform|all)(,|$)/.test(r(`${o1}Property`).toString());return{type:m,timeout:v,propCount:z,hasTransform:M}}function c5(c,a){for(;c.length<a.length;)c=c.concat(c);return Math.max(...a.map((e,r)=>a5(e)+a5(c[r])))}function a5(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function Ct(){return document.body.offsetHeight}function Lt(c,a,e){const r=c[L4];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const m0=Symbol("_vod"),gt={beforeMount(c,{value:a},{transition:e}){c[m0]=c.style.display==="none"?"":c.style.display,e&&a?e.beforeEnter(c):o4(c,a)},mounted(c,{value:a},{transition:e}){e&&a&&e.enter(c)},updated(c,{value:a,oldValue:e},{transition:r}){!a!=!e&&(r?a?(r.beforeEnter(c),o4(c,!0),r.enter(c)):r.leave(c,()=>{o4(c,!1)}):o4(c,a))},beforeUnmount(c,{value:a}){o4(c,a)}};function o4(c,a){c.style.display=a?c[m0]:"none"}const xt=Symbol("");function bt(c,a,e){const r=c.style,s=z2(e);if(e&&!s){if(a&&!z2(a))for(const i in a)e[i]==null&&y6(r,i,"");for(const i in e)y6(r,i,e[i])}else{const i=r.display;if(s){if(a!==e){const n=r[xt];n&&(e+=";"+n),r.cssText=e}}else a&&c.removeAttribute("style");m0 in c&&(r.display=i)}}const e5=/\s*!important$/;function y6(c,a,e){if(R(e))e.forEach(r=>y6(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=Nt(c,a);e5.test(e)?c.setProperty(e4(r),e.replace(e5,""),"important"):c[r]=e}}const r5=["Webkit","Moz","ms"],f6={};function Nt(c,a){const e=f6[a];if(e)return e;let r=Y2(a);if(r!=="filter"&&r in c)return f6[a]=r;r=V3(r);for(let s=0;s<r5.length;s++){const i=r5[s]+r;if(i in c)return f6[a]=i}return a}const s5="http://www.w3.org/1999/xlink";function St(c,a,e,r,s){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(s5,a.slice(6,a.length)):c.setAttributeNS(s5,a,e);else{const i=gf(a);e==null||i&&!O5(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function wt(c,a,e,r,s,i,n){if(a==="innerHTML"||a==="textContent"){r&&n(r,s,i),c[a]=e??"";return}const l=c.tagName;if(a==="value"&&l!=="PROGRESS"&&!l.includes("-")){c._value=e;const o=l==="OPTION"?c.getAttribute("value"):c.value,m=e??"";o!==m&&(c.value=m),e==null&&c.removeAttribute(a);return}let f=!1;if(e===""||e==null){const o=typeof c[a];o==="boolean"?e=O5(e):e==null&&o==="string"?(e="",f=!0):o==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function kt(c,a,e,r){c.addEventListener(a,e,r)}function yt(c,a,e,r){c.removeEventListener(a,e,r)}const i5=Symbol("_vei");function At(c,a,e,r,s=null){const i=c[i5]||(c[i5]={}),n=i[a];if(r&&n)n.value=r;else{const[l,f]=Tt(a);if(r){const o=i[a]=Bt(r,s);kt(c,l,o,f)}else n&&(yt(c,l,n,f),i[a]=void 0)}}const n5=/(?:Once|Passive|Capture)$/;function Tt(c){let a;if(n5.test(c)){a={};let r;for(;r=c.match(n5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):e4(c.slice(2)),a]}let o6=0;const Pt=Promise.resolve(),Ft=()=>o6||(Pt.then(()=>o6=0),o6=Date.now());function Bt(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;B2(Rt(r,e.value),a,5,[r])};return e.value=c,e.attached=Ft(),e}function Rt(c,a){if(R(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>s=>!s._stopped&&r&&r(s))}else return a}const l5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Dt=(c,a,e,r,s=!1,i,n,l,f)=>{a==="class"?Lt(c,r,s):a==="style"?bt(c,e,r):z3(a)?q6(a)||At(c,a,e,r,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Et(c,a,r,s))?wt(c,a,r,i,n,l,f):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),St(c,a,r,s))};function Et(c,a,e,r){if(r)return!!(a==="innerHTML"||a==="textContent"||a in c&&l5(a)&&O(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const s=c.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return l5(a)&&z2(e)?!1:a in c}const _t=["ctrl","shift","alt","meta"],$t={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>_t.some(e=>c[`${e}Key`]&&!a.includes(e))},F7=(c,a)=>{const e=c._withMods||(c._withMods={}),r=a.join(".");return e[r]||(e[r]=(s,...i)=>{for(let n=0;n<a.length;n++){const l=$t[a[n]];if(l&&l(s,a))return}return c(s,...i)})},Ot=h2({patchProp:Dt},ht);let f5;function Ut(){return f5||(f5=Wo(Ot))}const It=(...c)=>{const a=Ut().createApp(...c),{mount:e}=a;return a.mount=r=>{const s=qt(r);if(!s)return;const i=a._component;!O(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const n=e(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),n},a};function qt(c){return z2(c)?document.querySelector(c):c}const t6=[{songName:"1.5 кг Отличного Пюре - Эмо.mp3",sort:181,bestParties:[{start:25,end:84}],notAggressive:!0},{songName:"Angel Vivaldi - A Martian Winter.mp3"},{songName:"Angel Vivaldi - An Erisian Autumn.mp3",sort:50,bestParties:[{start:78,end:104},{start:246,end:268}],notAggressive:!0},{songName:"As I Lay Dying - Forever.mp3",sort:210,bestParties:[{start:0,end:25}]},{songName:"As I Lay Dying - Nothing Left [2007].mp3",sort:40,bestParties:[{start:0,end:57}]},{songName:"As I Lay Dying - The Sound Оf Truth.mp3",sort:60,bestParties:[{start:0,end:36},{start:59,end:121}]},{songName:"Aspirin Rose - Fucking Perfect (Pink cover).mp3"},{songName:"August Burns Red - A Shot Below The Belt.mp3",sort:142,bestParties:[{start:0,end:30},{start:90,end:114},{start:164,end:175}]},{songName:"August Burns Red - Barbarian.mp3",sort:20,bestParties:[{start:21,end:32},{start:70,end:88},{start:113,end:152}]},{songName:"August Burns Red - Consumer.mp3"},{songName:"August Burns Red - Indonesia.mp3",sort:141,bestParties:[{start:84,end:117},{start:161,end:180}]},{songName:"August Burns Red - Meridian.mp3",notAggressive:!0},{songName:"August Burns Red - Truth of a Liar.mp3"},{songName:"August Burns Red - Your Little Suburbia Is in Ruins.mp3",sort:70,bestParties:[{start:12,end:27},{start:107,end:125},{start:146,end:178}]},{songName:"Anaal Nathrakh - Between Shit and Piss We Are Born.mp3"},{songName:"Anaal Nathrakh - In The Constellation Of The Black Widow.mp3",sort:220,bestParties:[{start:65,end:85},{start:114,end:141}]},{songName:"Between the Buried and Me - All Bodies.mp3"},{songName:"Between The Buried And Me - Ants Of The Sky.mp3",sort:112,bestParties:[{start:0,end:108}]},{songName:"Between The Buried And Me - Sun Of Nothing.mp3"},{songName:"Between The Buried And Me - Swim To The Moon.mp3",sort:10,bestParties:[{start:135,end:160},{start:500,end:551},{start:982,end:1022}]},{songName:"Breakwater - Eleven.mp3"},{songName:"Breakwater - five.mp3"},{songName:"Bullet For My Valentine - Hand Of Blood.mp3"},{songName:"Cerebral Bore - The Bald Cadaver.mp3",sort:280,bestParties:[{start:5.5,end:50}]},{songName:"Children Of Bodom - Are You Dead Yet.mp3",sort:110,bestParties:[{start:82,end:114}]},{songName:"Cosmonauts Day - The Captain.mp3",notAggressive:!0},{songName:"Death In Vegas - Dirge.mp3"},{songName:"Dragonforce - The Flame of Youth.mp3",sort:120,bestParties:[{start:46,end:65},{start:289,end:317}]},{songName:"If These Trees Could Talk - From Roots to Needles.mp3",notAggressive:!0},{songName:"In Flames - Clayman.mp3",sort:130,bestParties:[{start:0,end:21}]},{songName:"In Flames - Reflect the Storm.mp3"},{songName:"Killing Floor - Abandon All.mp3"},{songName:"Killing Floor OST - Wake.mp3",notAggressive:!0},{songName:"Long Distance Calling - Black Paper Planes.mp3",notAggressive:!0},{songName:"Machine Head - Beautiful Mourning.mp3"},{songName:"Machine Head - Hallowed Be Thy Name.mp3"},{songName:"Machine Head - Halo.mp3"},{songName:"Ozoi The Maid - Unfortunately.mp3"},{songName:"Ozoi The Maid Yakui The Maid - Lanterns.mp3",sort:111,bestParties:[{start:146,end:218}]},{songName:"Ozoi The Maid Yakui The Maid - Wonderland.mp3",sort:30,bestParties:[{start:115,end:243},{start:355,end:442}]},{songName:"Ozoi The Maid, Yakui The Maid - Frontier.mp3"},{songName:"Psygnosis - FIIIX 2.0.mp3"},{songName:"Psygnosis - Lost in Oblivion.mp3",sort:140,bestParties:[{start:292,end:356}]},{songName:"Psygnosis - MehMeh.mp3"},{songName:"Psygnosis - Phrase 7.mp3",notAggressive:!0},{songName:"Psygnosis - Synaptic Plasticity.mp3"},{songName:"Psygnosis - The Judgement.mp3"},{songName:"Raunchy - To the Lighthouse.mp3"},{songName:"Raunchy - Twelve Feet Tall.mp3",sort:150,bestParties:[{start:65,end:96}]},{songName:"Raunchy - Wasteland Discotheque.mp3",sort:190,bestParties:[{start:0,end:34},{start:63,end:101}]},{songName:"Rhapsody - The Mighty Ride of the Firelord.mp3"},{songName:"Rhapsody of Fire - Wisdom of the Kings.mp3"},{songName:"Rise Of The Northstar - The New Path.mp3"},{songName:"Rise Of The Northstar - What The Fuck.mp3",sort:160,bestParties:[{start:45,end:79}]},{songName:"Siberian Meat Grinder feat Distemper - Пламя в Груди.mp3",sort:211,bestParties:[{start:49,end:68}]},{songName:"The Doors - Alabama song.mp3",notAggressive:!0},{songName:"The Doors - The End.mp3",notAggressive:!0},{songName:"The Faceless - Shake The Disease.mp3"},{songName:"The Five Stars - Atom Bomb Baby.mp3",notAggressive:!0},{songName:"The HAARP Machine - Esoteric Agenda.mp3"},{songName:"Toundra - Bizancio Byzantium.mp3",sort:180,bestParties:[{start:127,end:224},{start:406,end:480}],notAggressive:!0},{songName:"URO & .corridoiokraut. - Nappi.mp3",notAggressive:!0},{songName:"What Mad Universe - Colossus.mp3",notAggressive:!0},{songName:"What Mad Universe - the world of leviathan.mp3",notAggressive:!0},{songName:"What Mad Universe - head of column.mp3",sort:170,bestParties:[{start:30,end:65}],notAggressive:!0},{songName:"What Mad Universe - mythical sacred firebird.mp3",notAggressive:!0},{songName:"What Mad Universe - Nebula My Love.mp3",sort:80,bestParties:[{start:162,end:246},{start:260,end:358}],notAggressive:!0},{songName:"What Mad Universe - Starborne.mp3",sort:90,bestParties:[{start:85,end:105},{start:144,end:185}],notAggressive:!0},{songName:"Within The Ruins - Ataxia II.mp3"},{songName:"Within The Ruins - Beautiful Agony.mp3"},{songName:"ZEROMANCER - Dr. Online.mp3"},{songName:"zYnthetic - Abandon All v3.mp3",sort:100,bestParties:[{start:0,end:30},{start:60,end:89}],notAggressive:!0},{songName:"zYnthetic - SSplug.mp3"}];function Wt(){N3(()=>{c.value=t6,a.value=t6.filter(C=>C.sort),e.value=t6.filter(C=>C.notAggressive),s.value=z.value.length});const c=M2([]),a=M2([]),e=M2([]),r=M2(0),s=M2(0),i=t2(()=>{const C="/player_with_my_favorite_music/";return z.value[r.value]?`${C}music/${z.value[r.value]}`:""}),n=t2(()=>[...a.value].sort((C,N)=>C.sort-N.sort)),l=d3([{label:"All music",id:1,url:"all"},{label:"Top",id:2,url:"top"},{label:"Top Shorts",id:4,url:"shorts"},{label:"Not aggressive",id:3,url:"not_aggressive"}]),f=M2(1);function o(C){!(f.value===4&&C.id===2)&&!(f.value===2&&C.id===4)&&(r.value=0),f.value=C.id,s.value=z.value.length}const m=t2(()=>{switch(f.value){case 1:return c.value.map(C=>C.songName);case 2:return n.value.map(C=>C.songName);case 3:return e.value.map(C=>C.songName);case 4:return n.value.filter(C=>C==null?void 0:C.bestParties).map(C=>C.songName)}}),v=t2(()=>{var C;return f.value===4&&((C=n.value[r.value])==null?void 0:C.bestParties)||[]}),z=t2(()=>h.value?M():m.value);function M(){return m.value.map(C=>({value:C,sort:Math.random()})).sort((C,N)=>C.sort-N.sort).map(({value:C})=>C)}function T(){r.value+=1,r.value>=z.value.length&&(r.value=0)}function w(){r.value=(r.value-1+z.value.length)%z.value.length}function E(C){r.value=C}const h=M2(!1);function g(){h.value=!h.value}return{totalNumbSongs:s,defaultTrackList:c,topTrackList:a,currentBestParties:v,nextTrack:T,previousTrack:w,pathToCurrentFile:i,sortingTopTrackList:n,currentTrackIndex:r,changeTab:o,selectTrack:E,tabsOption:l,tabSelected:f,isRandomTracks:h,handlerRandomBtn:g,currentTracks:z}}const Gt=i1({name:"TrackList",props:{currentTracks:{type:Array,default:()=>[]},currentTrackIndex:{type:Number,default:0}},emits:["select-track-from-list"],setup(c,{emit:a}){s0(()=>{r.value&&i(r)});const e=M2(null),r=M2(null),s=t2(()=>{var l;return(l=c.currentTracks)==null?void 0:l.map(f=>{const o=f.lastIndexOf("/"),m=f==null?void 0:f.lastIndexOf(".");return f&&f.substring(o+1,m)||""})});X1(()=>c.currentTrackIndex,()=>{i(e)});function i(l){var o;const f=(o=l.value)==null?void 0:o.querySelector(".selected");f==null||f.scrollIntoView({behavior:"smooth"})}function n(l){a("select-track-from-list",l)}return{currentTracksWithCorrectNames:s,selectTrackFromList:n}}}),L1=(c,a)=>{const e=c.__vccOpts||c;for(const[r,s]of a)e[r]=s;return e},jt=["onClick"];function Kt(c,a,e,r,s,i){return l2(),m2("div",null,[G("ul",{ref:"sidebarRef",class:"sidebar",onClick:a[0]||(a[0]=F7(()=>{},["stop"]))},[(l2(!0),m2(N2,null,i0(c.currentTracksWithCorrectNames,(n,l)=>(l2(),m2("li",{key:l,class:Z2({selected:l===c.currentTrackIndex}),onClick:f=>c.selectTrackFromList(l)},a1(l+1)+". "+a1(n),11,jt))),128))],512)])}const Yt=L1(Gt,[["render",Kt],["__scopeId","data-v-765ac471"]]),Xt=i1({props:{tabOptions:{type:Array,default:()=>[]},tabSelected:{type:Number,default:1}},emits:["change-tab"],setup(c,{emit:a}){function e(r){c.tabSelected!==r.id&&a("change-tab",r)}return{btnHandler:e}}}),Qt={class:"tabs"},Jt=["onClick"];function Zt(c,a,e,r,s,i){return l2(),m2("div",Qt,[(l2(!0),m2(N2,null,i0(c.tabOptions,(n,l)=>(l2(),m2("button",{key:l,class:Z2({active:n.id===c.tabSelected}),onClick:f=>c.btnHandler(n)},a1(n.label),11,Jt))),128))])}const cm=L1(Xt,[["render",Zt],["__scopeId","data-v-c6105072"]]),am="modulepreload",em=function(c){return"/player_with_my_favorite_music/"+c},o5={},m1=function(a,e,r){let s=Promise.resolve();if(e&&e.length>0){const i=document.getElementsByTagName("link");s=Promise.all(e.map(n=>{if(n=em(n),n in o5)return;o5[n]=!0;const l=n.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(!!r)for(let v=i.length-1;v>=0;v--){const z=i[v];if(z.href===n&&(!l||z.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${f}`))return;const m=document.createElement("link");if(m.rel=l?"stylesheet":am,l||(m.as="script",m.crossOrigin=""),m.href=n,document.head.appendChild(m),l)return new Promise((v,z)=>{m.addEventListener("load",v),m.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${n}`)))})}))}return s.then(()=>a()).catch(i=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i})},rm=i1({name:"MainInfoBand",props:{songName:{type:String,default:""}},setup(c){const a=M2({});N3(async()=>{const i=Object.assign({"/src/assets/images/1.5 кг Отличного Пюре.jpg":()=>m1(()=>import("./1.5 кг Отличного Пюре-OtALhitf.js"),__vite__mapDeps([])),"/src/assets/images/Anaal Nathrakh.jpeg":()=>m1(()=>import("./Anaal Nathrakh-7BxhGCGJ.js"),__vite__mapDeps([])),"/src/assets/images/As I Lay Dying.jpg":()=>m1(()=>import("./As I Lay Dying-28Nx7ZD0.js"),__vite__mapDeps([])),"/src/assets/images/August Burns Red.jpg":()=>m1(()=>import("./August Burns Red-MIqwgacb.js"),__vite__mapDeps([])),"/src/assets/images/Between The Buried And Me.webp":()=>m1(()=>import("./Between The Buried And Me-TSs49cb7.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid Yakui The Maid.jpg":()=>m1(()=>import("./Ozoi The Maid Yakui The Maid-zIxRS9KQ.js"),__vite__mapDeps([])),"/src/assets/images/What Mad Universe.jpg":()=>m1(()=>import("./What Mad Universe-s6ECnjUY.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.png":()=>m1(()=>import("./default_logo-9B2Fgjf-.js"),__vite__mapDeps([]))});for(const n in i){const l=n.replace(/^.*\/(.*)\.\w+$/,"$1");a.value[l]=(await i[n]()).default}});const e=t2(()=>{var n;const i=(n=c.songName)==null?void 0:n.lastIndexOf(".");return c.songName&&c.songName.substring(0,i)||""}),r=t2(()=>{const[i,n]=e.value.split(" - ");return{bandName:i,songName:n}}),s=t2(()=>{const{bandName:i}=r.value;return a.value[i]||a.value.default_logo});return X1(()=>c.songName,()=>{var i,n;"mediaSession"in navigator&&s.value&&(navigator.mediaSession.metadata=new MediaMetadata({title:((i=r.value)==null?void 0:i.songName)||"",artist:((n=r.value)==null?void 0:n.bandName)||"",artwork:[{src:s.value,sizes:"96x96",type:"image/jpg"},{src:s.value,sizes:"128x128",type:"image/png"},{src:s.value,sizes:"192x192",type:"image/png"},{src:s.value,sizes:"256x256",type:"image/png"},{src:s.value,sizes:"384x384",type:"image/png"},{src:s.value,sizes:"512x512",type:"image/png"}]}))}),{getInfoBand:r,getLogoImage:s}}}),sm=["src"],im={class:"artist-info"},nm={class:"band"},lm={class:"song"};function fm(c,a,e,r,s,i){return l2(),m2(N2,null,[G("img",{src:c.getLogoImage,class:"album-image",alt:""},null,8,sm),G("div",im,[G("div",nm,a1(c.getInfoBand.bandName),1),G("div",lm,a1(c.getInfoBand.songName),1)])],64)}const om=L1(rm,[["render",fm],["__scopeId","data-v-7ed68be3"]]),tm=i1({name:"MainInfoBand",props:{volume:{type:Number,default:80}},emits:["volume-change"],setup(c,{emit:a}){const e=t2(()=>c.volume*100);function r(s){a("volume-change",s.target.value)}return{convertToValue:e,volumeHandler:r}}}),mm=c=>(a0("data-v-6f77a70e"),c=c(),e0(),c),Hm={class:"volume-control"},vm=mm(()=>G("button",{id:"volumeDownBtn",class:"player-button"},[G("i",{class:"fas fa-volume-up"})],-1)),zm=["value"];function um(c,a,e,r,s,i){return l2(),m2("div",Hm,[vm,G("input",{id:"volumeRange",class:"volume-control",type:"range",value:c.convertToValue,min:"0",max:"100",step:"1",onInput:a[0]||(a[0]=(...n)=>c.volumeHandler&&c.volumeHandler(...n))},null,40,zm)])}const hm=L1(tm,[["render",um],["__scopeId","data-v-6f77a70e"]]),Vm=i1({name:"ProgressControl",props:{currentTime:{type:Number,default:0},totalTime:{type:Number,default:0},bestParties:{type:Array,default:()=>[]}},emits:["time-change","time-change-line"],setup(c,{emit:a}){const e=t2(()=>c.currentTime/c.totalTime*100),r=t2(()=>n(c.currentTime)),s=t2(()=>n(c.totalTime)),i=t2(()=>{var m;const o=(100/c.totalTime).toFixed(2);return(m=c.bestParties)==null?void 0:m.map(v=>({start:`${v.start*o}%`,end:`${100-v.end*o}%`}))});function n(o){const m=Math.floor(o/60),v=Math.floor(o%60);return`${m}:${String(v).padStart(2,"0")}`}function l(o){const m=o.currentTarget.parentNode,{clientWidth:v}=m,z=m.getBoundingClientRect(),M=o.clientX-z.left;a("time-change-line",M/v)}function f(o){a("time-change",o)}return{convertToValue:e,convertCurrentTime:r,convertTotalTime:s,timeHandler:f,timeHandlerEmit:l,convertBestPartiesInPercentage:i}}}),pm={class:"progress-control"},Mm=["value"],dm={class:"time-display"},Cm={id:"currentTime"},Lm={id:"totalTime"},gm={key:0,class:"line"};function xm(c,a,e,r,s,i){return l2(),m2("div",pm,[G("input",{id:"progressRange",type:"range",min:"0",max:"100",value:c.convertToValue,step:"1",onInput:a[0]||(a[0]=(...n)=>c.timeHandler&&c.timeHandler(...n))},null,40,Mm),G("div",dm,[G("span",Cm,a1(c.convertCurrentTime),1),G("span",Lm,a1(c.convertTotalTime),1)]),c.bestParties.length?(l2(),m2("div",gm,[(l2(!0),m2(N2,null,i0(c.convertBestPartiesInPercentage,(n,l)=>(l2(),m2("div",{key:l,style:p3({left:n.start,right:n.end}),class:"best-section",onClick:a[1]||(a[1]=(...f)=>c.timeHandlerEmit&&c.timeHandlerEmit(...f))},null,4))),128))])):ct("",!0)])}const bm=L1(Vm,[["render",xm],["__scopeId","data-v-387c77b6"]]),Nm=i1({name:"MainControl",props:{isPlaying:{type:Boolean,default:!1}},emits:["previous","play-pause","next"],setup(c,{emit:a}){function e(){a("previous")}function r(){a("play-pause")}function s(){a("next")}return{previousButtonHandler:e,playerButtonHandler:r,nextButtonHandler:s}}}),y3=c=>(a0("data-v-e6d518fc"),c=c(),e0(),c),Sm={class:"main-control"},wm=y3(()=>G("i",{class:"fas fa-step-backward"},null,-1)),km=[wm],ym=y3(()=>G("i",{class:"fas fa-pause"},null,-1)),Am=[ym],Tm=y3(()=>G("i",{class:"fas fa-play"},null,-1)),Pm=[Tm],Fm=y3(()=>G("i",{class:"fas fa-step-forward"},null,-1)),Bm=[Fm];function Rm(c,a,e,r,s,i){return l2(),m2("div",Sm,[G("button",{class:"player-button",onClick:a[0]||(a[0]=(...n)=>c.previousButtonHandler&&c.previousButtonHandler(...n))},km),c.isPlaying?(l2(),m2("button",{key:0,class:"player-button",onClick:a[1]||(a[1]=(...n)=>c.playerButtonHandler&&c.playerButtonHandler(...n))},Am)):(l2(),m2("button",{key:1,class:"player-button",onClick:a[2]||(a[2]=(...n)=>c.playerButtonHandler&&c.playerButtonHandler(...n))},Pm)),G("button",{class:"player-button",onClick:a[3]||(a[3]=(...n)=>c.nextButtonHandler&&c.nextButtonHandler(...n))},Bm)])}const Dm=L1(Nm,[["render",Rm],["__scopeId","data-v-e6d518fc"]]),Em=i1({name:"OtherControl",props:{currentNumbSong:{type:Number,default:0},totalNumbSong:{type:Number,default:0},isRandomTracks:{type:Boolean,default:!1},isRepeatMode:{type:Boolean,default:!1},isShowTrackList:{type:Boolean,default:!1},isDarkTheme:{type:Boolean,default:!1}},emits:["random-click","show-list-click","repeat-mode-click","change-theme"],setup(c,{emit:a}){function e(){a("random-click")}function r(){a("repeat-mode-click")}function s(){a("show-list-click",event)}function i(){a("change-theme",event)}return{iconClickRandomHandler:e,iconClickRepeatModeHandler:r,iconClickShowListHandler:s,iconClickChangeThemeHandler:i}}}),i4=c=>(a0("data-v-2be11aa3"),c=c(),e0(),c),_m={class:"other"},$m=i4(()=>G("i",{class:"fas fa-shuffle"},null,-1)),Om=[$m],Um=i4(()=>G("i",{class:"fas fa-repeat"},null,-1)),Im=[Um],qm={class:"song-display"},Wm=i4(()=>G("i",{class:"fa-solid fa-toggle-off"},null,-1)),Gm=[Wm],jm=i4(()=>G("i",{class:"fa-solid fa-toggle-on"},null,-1)),Km=[jm],Ym=i4(()=>G("i",{class:"fas fa-bars fa-rotate-90"},null,-1)),Xm=[Ym],Qm=i4(()=>G("i",{class:"fas fa-bars"},null,-1)),Jm=[Qm];function Zm(c,a,e,r,s,i){return l2(),m2("div",_m,[G("button",{class:Z2({active:c.isRandomTracks}),onClick:a[0]||(a[0]=(...n)=>c.iconClickRandomHandler&&c.iconClickRandomHandler(...n))},Om,2),G("button",{class:Z2({active:c.isRepeatMode}),onClick:a[1]||(a[1]=(...n)=>c.iconClickRepeatModeHandler&&c.iconClickRepeatModeHandler(...n))},Im,2),G("div",qm,[G("span",null,a1(c.currentNumbSong),1),k7("/"),G("span",null,a1(c.totalNumbSong),1)]),c.isDarkTheme?(l2(),m2("button",{key:1,onClick:a[3]||(a[3]=(...n)=>c.iconClickChangeThemeHandler&&c.iconClickChangeThemeHandler(...n))},Km)):(l2(),m2("button",{key:0,onClick:a[2]||(a[2]=(...n)=>c.iconClickChangeThemeHandler&&c.iconClickChangeThemeHandler(...n))},Gm)),c.isShowTrackList?(l2(),m2("button",{key:2,class:Z2({active:c.isShowTrackList}),onClick:a[4]||(a[4]=(...n)=>c.iconClickShowListHandler&&c.iconClickShowListHandler(...n))},Xm,2)):(l2(),m2("button",{key:3,onClick:a[5]||(a[5]=F7((...n)=>c.iconClickShowListHandler&&c.iconClickShowListHandler(...n),["stop"]))},Jm))])}const cH=L1(Em,[["render",Zm],["__scopeId","data-v-2be11aa3"]]),aH=i1({name:"MainComponent",components:{TrackList:Yt,PageTabs:cm,MainInfoBand:om,VolumeControl:hm,ProgressControl:bm,MainControl:Dm,OtherControl:cH},setup(){const{currentBestParties:c,nextTrack:a,previousTrack:e,pathToCurrentFile:r,sortingTopTrackList:s,currentTrackIndex:i,changeTab:n,selectTrack:l,tabsOption:f,tabSelected:o,isRandomTracks:m,handlerRandomBtn:v,totalNumbSongs:z,currentTracks:M}=Wt();N3(async()=>{w(),h.value=document.getElementById("audioPlayer");const q=[["play",()=>{U2(),navigator.mediaSession.playbackState="playing"}],["pause",()=>{U2(),navigator.mediaSession.playbackState="paused"}],["nexttrack",()=>{a()}],["previoustrack",()=>{e()}],["seekto",p2=>{h.value.currentTime=p2.seekTime}]];for(const[p2,g1]of q)try{navigator.mediaSession.setActionHandler(p2,g1)}catch{console.log(`The media session action "${p2}" is not supported yet.`)}});const T=M2(null);function w(){(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")==="dark"?T.value=!0:T.value=!1}async function E(){T.value=!T.value}const h=M2(null),g=M2(0),C=M2(.8);function N(q){P(q),f2.value&&X()}function _(){T2.value?h.value.currentTime=0:a()}function s2(q){if(h.value){const p2=q.target;h.value.currentTime=Number(p2.value)/100*(h.value.duration||0)}}function Z(q){h.value&&(h.value.currentTime=q*(h.value.duration||0))}function D(q){g.value=q.target.currentTime}function I(q){C.value=q.target.volume}function Y(q){h.value.volume=q/100}const u2=M2(0);function P(q){const p2=q.target;u2.value=p2.duration,navigator.mediaSession.setPositionState({duration:p2.duration,playbackRate:1,position:0})}function X(){var q;try{(q=h.value)==null||q.play().then(p2=>p2)}catch(p2){console.log("error",p2)}}const f2=M2(!1);function U2(){var q;f2.value=!f2.value,f2.value?X():(q=h.value)==null||q.pause()}function H2(q){console.log(q);const p2=s.value[i.value].bestParties;for(let g1=0;g1<p2.length;g1++){const C2=p2[g1];if(q<C2.start){console.log("start"),h.value.currentTime=C2.start;return}else if(q>=C2.start&&q<=C2.end){console.log("continue"),q>=C2.end-2;return}}console.log("nextTrack"),_()}uo(()=>{o.value===4&&f2.value&&H2(g.value)});function i2(){h.value.currentTime<=20||o.value===4?e():h.value.currentTime=0}const K=M2(!1);function X2(){K.value=!K.value}function $1(q){l(q),f2.value?X():U2()}const T2=M2(!1);function P2(){T2.value=!T2.value}return{audioPlayer:h,totalNumbSongs:z,isPlaying:f2,currentTime:g,volume:C,onVolumeUpdate:I,totalTime:u2,isRandomTracks:m,pathToCurrentFile:r,currentTracks:M,currentTrackIndex:i,handlerCanPlay:N,handlerEnded:_,handlerTimeChange:s2,handlerTimeChangeLine:Z,onTimeUpdate:D,setVolume:Y,setTotalTime:P,playTrack:X,togglePlayPause:U2,nextTrack:a,previousTrackHandler:i2,handlerRandomBtn:v,handlerShowListBtn:X2,handlerSelectTrack:$1,tabsOption:f,tabSelected:o,changeTab:n,isShowTrackList:K,repeatModeChange:P2,isRepeatMode:T2,currentBestParties:c,isDarkTheme:T,handlerChangeThemeBtn:E}}}),eH={class:"container"},rH=["src"];function sH(c,a,e,r,s,i){const n=x1("TrackList"),l=x1("PageTabs"),f=x1("MainInfoBand"),o=x1("VolumeControl"),m=x1("ProgressControl"),v=x1("MainControl"),z=x1("OtherControl");return l2(),m2("main",{class:Z2([c.isDarkTheme?"dark":"light"]),onClick:a[4]||(a[4]=M=>c.isShowTrackList=!1)},[G("div",eH,[o2(t0,{name:"slide"},{default:t7(()=>[Vo(o2(n,{"current-track-index":c.currentTrackIndex,"current-tracks":c.currentTracks,class:"track_list",onSelectTrackFromList:c.handlerSelectTrack},null,8,["current-track-index","current-tracks","onSelectTrackFromList"]),[[gt,c.isShowTrackList]])]),_:1}),o2(l,{"tab-selected":c.tabSelected,"tab-options":c.tabsOption,onChangeTab:c.changeTab},null,8,["tab-selected","tab-options","onChangeTab"]),o2(f,{"song-name":c.currentTracks[c.currentTrackIndex]},null,8,["song-name"]),o2(o,{volume:c.volume,onVolumeChange:c.setVolume},null,8,["volume","onVolumeChange"]),o2(m,{"best-parties":c.currentBestParties,"current-time":c.currentTime,"total-time":c.totalTime,onTimeChange:c.handlerTimeChange,onTimeChangeLine:c.handlerTimeChangeLine},null,8,["best-parties","current-time","total-time","onTimeChange","onTimeChangeLine"]),o2(v,{"is-playing":c.isPlaying,onPrevious:c.previousTrackHandler,onNext:c.nextTrack,onPlayPause:c.togglePlayPause},null,8,["is-playing","onPrevious","onNext","onPlayPause"]),o2(z,{"current-numb-song":c.currentTrackIndex+1,"total-numb-song":c.totalNumbSongs,"is-random-tracks":c.isRandomTracks,"is-show-track-list":c.isShowTrackList,"is-repeat-mode":c.isRepeatMode,"is-dark-theme":c.isDarkTheme,onRepeatModeClick:c.repeatModeChange,onRandomClick:c.handlerRandomBtn,onShowListClick:c.handlerShowListBtn,onChangeTheme:c.handlerChangeThemeBtn},null,8,["current-numb-song","total-numb-song","is-random-tracks","is-show-track-list","is-repeat-mode","is-dark-theme","onRepeatModeClick","onRandomClick","onShowListClick","onChangeTheme"]),G("audio",{id:"audioPlayer",ref:"audioPlayer",src:c.pathToCurrentFile,preload:"metadata",onVolumechange:a[0]||(a[0]=(...M)=>c.onVolumeUpdate&&c.onVolumeUpdate(...M)),onTimeupdate:a[1]||(a[1]=(...M)=>c.onTimeUpdate&&c.onTimeUpdate(...M)),onCanplay:a[2]||(a[2]=(...M)=>c.handlerCanPlay&&c.handlerCanPlay(...M)),onEnded:a[3]||(a[3]=(...M)=>c.handlerEnded&&c.handlerEnded(...M))},null,40,rH)])],2)}const iH=L1(aH,[["render",sH]]);function t5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function k(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?t5(Object(e),!0).forEach(function(r){V2(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):t5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function t3(c){"@babel/helpers - typeof";return t3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},t3(c)}function nH(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function m5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function lH(c,a,e){return a&&m5(c.prototype,a),e&&m5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function V2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function H0(c,a){return oH(c)||mH(c,a)||B7(c,a)||vH()}function w4(c){return fH(c)||tH(c)||B7(c)||HH()}function fH(c){if(Array.isArray(c))return A6(c)}function oH(c){if(Array.isArray(c))return c}function tH(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function mH(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,i=!1,n,l;try{for(e=e.call(c);!(s=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));s=!0);}catch(f){i=!0,l=f}finally{try{!s&&e.return!=null&&e.return()}finally{if(i)throw l}}return r}}function B7(c,a){if(c){if(typeof c=="string")return A6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return A6(c,a)}}function A6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function HH(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vH(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var H5=function(){},v0={},R7={},D7=null,E7={mark:H5,measure:H5};try{typeof window<"u"&&(v0=window),typeof document<"u"&&(R7=document),typeof MutationObserver<"u"&&(D7=MutationObserver),typeof performance<"u"&&(E7=performance)}catch{}var zH=v0.navigator||{},v5=zH.userAgent,z5=v5===void 0?"":v5,M1=v0,e2=R7,u5=D7,q4=E7;M1.document;var l1=!!e2.documentElement&&!!e2.head&&typeof e2.addEventListener=="function"&&typeof e2.createElement=="function",_7=~z5.indexOf("MSIE")||~z5.indexOf("Trident/"),W4,G4,j4,K4,Y4,e1="___FONT_AWESOME___",T6=16,$7="fa",O7="svg-inline--fa",E1="data-fa-i2svg",P6="data-fa-pseudo-element",uH="data-fa-pseudo-element-pending",z0="data-prefix",u0="data-icon",h5="fontawesome-i2svg",hH="async",VH=["HTML","HEAD","STYLE","SCRIPT"],U7=function(){try{return!0}catch{return!1}}(),a2="classic",n2="sharp",h0=[a2,n2];function k4(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[a2]}})}var g4=k4((W4={},V2(W4,a2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),V2(W4,n2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),W4)),x4=k4((G4={},V2(G4,a2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),V2(G4,n2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),G4)),b4=k4((j4={},V2(j4,a2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),V2(j4,n2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),j4)),pH=k4((K4={},V2(K4,a2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),V2(K4,n2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),K4)),MH=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,I7="fa-layers-text",dH=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,CH=k4((Y4={},V2(Y4,a2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),V2(Y4,n2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Y4)),q7=[1,2,3,4,5,6,7,8,9,10],LH=q7.concat([11,12,13,14,15,16,17,18,19,20]),gH=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],P1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},N4=new Set;Object.keys(x4[a2]).map(N4.add.bind(N4));Object.keys(x4[n2]).map(N4.add.bind(N4));var xH=[].concat(h0,w4(N4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",P1.GROUP,P1.SWAP_OPACITY,P1.PRIMARY,P1.SECONDARY]).concat(q7.map(function(c){return"".concat(c,"x")})).concat(LH.map(function(c){return"w-".concat(c)})),u4=M1.FontAwesomeConfig||{};function bH(c){var a=e2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function NH(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(e2&&typeof e2.querySelector=="function"){var SH=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];SH.forEach(function(c){var a=H0(c,2),e=a[0],r=a[1],s=NH(bH(e));s!=null&&(u4[r]=s)})}var W7={styleDefault:"solid",familyDefault:"classic",cssPrefix:$7,replacementClass:O7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};u4.familyPrefix&&(u4.cssPrefix=u4.familyPrefix);var c4=k(k({},W7),u4);c4.autoReplaceSvg||(c4.observeMutations=!1);var A={};Object.keys(W7).forEach(function(c){Object.defineProperty(A,c,{enumerable:!0,set:function(e){c4[c]=e,h4.forEach(function(r){return r(A)})},get:function(){return c4[c]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(a){c4.cssPrefix=a,h4.forEach(function(e){return e(A)})},get:function(){return c4.cssPrefix}});M1.FontAwesomeConfig=A;var h4=[];function wH(c){return h4.push(c),function(){h4.splice(h4.indexOf(c),1)}}var H1=T6,j2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function kH(c){if(!(!c||!l1)){var a=e2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=e2.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}return e2.head.insertBefore(a,r),c}}var yH="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function S4(){for(var c=12,a="";c-- >0;)a+=yH[Math.random()*62|0];return a}function n4(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function V0(c){return c.classList?n4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function G7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function AH(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(G7(c[e]),'" ')},"").trim()}function A3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function p0(c){return c.size!==j2.size||c.x!==j2.x||c.y!==j2.y||c.rotate!==j2.rotate||c.flipX||c.flipY}function TH(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(n," ").concat(l)},o={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:f,path:o}}function PH(c){var a=c.transform,e=c.width,r=e===void 0?T6:e,s=c.height,i=s===void 0?T6:s,n=c.startCentered,l=n===void 0?!1:n,f="";return l&&_7?f+="translate(".concat(a.x/H1-r/2,"em, ").concat(a.y/H1-i/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/H1,"em), calc(-50% + ").concat(a.y/H1,"em)) "):f+="translate(".concat(a.x/H1,"em, ").concat(a.y/H1,"em) "),f+="scale(".concat(a.size/H1*(a.flipX?-1:1),", ").concat(a.size/H1*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var FH=`:root, :host {
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
}`;function j7(){var c=$7,a=O7,e=A.cssPrefix,r=A.replacementClass,s=FH;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(l,".".concat(r))}return s}var V5=!1;function m6(){A.autoAddCss&&!V5&&(kH(j7()),V5=!0)}var BH={mixout:function(){return{dom:{css:j7,insertCss:m6}}},hooks:function(){return{beforeDOMElementCreation:function(){m6()},beforeI2svg:function(){m6()}}}},r1=M1||{};r1[e1]||(r1[e1]={});r1[e1].styles||(r1[e1].styles={});r1[e1].hooks||(r1[e1].hooks={});r1[e1].shims||(r1[e1].shims=[]);var $2=r1[e1],K7=[],RH=function c(){e2.removeEventListener("DOMContentLoaded",c),m3=1,K7.map(function(a){return a()})},m3=!1;l1&&(m3=(e2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(e2.readyState),m3||e2.addEventListener("DOMContentLoaded",RH));function DH(c){l1&&(m3?setTimeout(c,0):K7.push(c))}function y4(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?G7(c):"<".concat(a," ").concat(AH(r),">").concat(i.map(y4).join(""),"</").concat(a,">")}function p5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var EH=function(a,e){return function(r,s,i,n){return a.call(e,r,s,i,n)}},H6=function(a,e,r,s){var i=Object.keys(a),n=i.length,l=s!==void 0?EH(e,s):e,f,o,m;for(r===void 0?(f=1,m=a[i[0]]):(f=0,m=r);f<n;f++)o=i[f],m=l(m,a[o],o,a);return m};function _H(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function F6(c){var a=_H(c);return a.length===1?a[0].toString(16):null}function $H(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function M5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function B6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=M5(a);typeof $2.hooks.addPack=="function"&&!s?$2.hooks.addPack(c,M5(a)):$2.styles[c]=k(k({},$2.styles[c]||{}),i),c==="fas"&&B6("fa",a)}var X4,Q4,J4,q1=$2.styles,OH=$2.shims,UH=(X4={},V2(X4,a2,Object.values(b4[a2])),V2(X4,n2,Object.values(b4[n2])),X4),M0=null,Y7={},X7={},Q7={},J7={},Z7={},IH=(Q4={},V2(Q4,a2,Object.keys(g4[a2])),V2(Q4,n2,Object.keys(g4[n2])),Q4);function qH(c){return~xH.indexOf(c)}function WH(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!qH(s)?s:null}var cc=function(){var a=function(i){return H6(q1,function(n,l,f){return n[f]=H6(l,i,{}),n},{})};Y7=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var l=i[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){s[f.toString(16)]=n})}return s}),X7=a(function(s,i,n){if(s[n]=n,i[2]){var l=i[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){s[f]=n})}return s}),Z7=a(function(s,i,n){var l=i[2];return s[n]=n,l.forEach(function(f){s[f]=n}),s});var e="far"in q1||A.autoFetchSvg,r=H6(OH,function(s,i){var n=i[0],l=i[1],f=i[2];return l==="far"&&!e&&(l="fas"),typeof n=="string"&&(s.names[n]={prefix:l,iconName:f}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:l,iconName:f}),s},{names:{},unicodes:{}});Q7=r.names,J7=r.unicodes,M0=T3(A.styleDefault,{family:A.familyDefault})};wH(function(c){M0=T3(c.styleDefault,{family:A.familyDefault})});cc();function d0(c,a){return(Y7[c]||{})[a]}function GH(c,a){return(X7[c]||{})[a]}function F1(c,a){return(Z7[c]||{})[a]}function ac(c){return Q7[c]||{prefix:null,iconName:null}}function jH(c){var a=J7[c],e=d0("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function d1(){return M0}var C0=function(){return{prefix:null,iconName:null,rest:[]}};function T3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?a2:e,s=g4[r][c],i=x4[r][c]||x4[r][s],n=c in $2.styles?c:null;return i||n||null}var d5=(J4={},V2(J4,a2,Object.keys(b4[a2])),V2(J4,n2,Object.keys(b4[n2])),J4);function P3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},V2(a,a2,"".concat(A.cssPrefix,"-").concat(a2)),V2(a,n2,"".concat(A.cssPrefix,"-").concat(n2)),a),n=null,l=a2;(c.includes(i[a2])||c.some(function(o){return d5[a2].includes(o)}))&&(l=a2),(c.includes(i[n2])||c.some(function(o){return d5[n2].includes(o)}))&&(l=n2);var f=c.reduce(function(o,m){var v=WH(A.cssPrefix,m);if(q1[m]?(m=UH[l].includes(m)?pH[l][m]:m,n=m,o.prefix=m):IH[l].indexOf(m)>-1?(n=m,o.prefix=T3(m,{family:l})):v?o.iconName=v:m!==A.replacementClass&&m!==i[a2]&&m!==i[n2]&&o.rest.push(m),!s&&o.prefix&&o.iconName){var z=n==="fa"?ac(o.iconName):{},M=F1(o.prefix,o.iconName);z.prefix&&(n=null),o.iconName=z.iconName||M||o.iconName,o.prefix=z.prefix||o.prefix,o.prefix==="far"&&!q1.far&&q1.fas&&!A.autoFetchSvg&&(o.prefix="fas")}return o},C0());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===n2&&(q1.fass||A.autoFetchSvg)&&(f.prefix="fass",f.iconName=F1(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=d1()||"fas"),f}var KH=function(){function c(){nH(this,c),this.definitions={}}return lH(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){e.definitions[l]=k(k({},e.definitions[l]||{}),n[l]),B6(l,n[l]);var f=b4[a2][l];f&&B6(f,n[l]),cc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var n=s[i],l=n.prefix,f=n.iconName,o=n.icon,m=o[2];e[l]||(e[l]={}),m.length>0&&m.forEach(function(v){typeof v=="string"&&(e[l][v]=o)}),e[l][f]=o}),e}}]),c}(),C5=[],W1={},Q1={},YH=Object.keys(Q1);function XH(c,a){var e=a.mixoutsTo;return C5=c,W1={},Object.keys(Q1).forEach(function(r){YH.indexOf(r)===-1&&delete Q1[r]}),C5.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(e[n]=s[n]),t3(s[n])==="object"&&Object.keys(s[n]).forEach(function(l){e[n]||(e[n]={}),e[n][l]=s[n][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(n){W1[n]||(W1[n]=[]),W1[n].push(i[n])})}r.provides&&r.provides(Q1)}),e}function R6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=W1[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function _1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=W1[c]||[];s.forEach(function(i){i.apply(null,e)})}function s1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Q1[c]?Q1[c].apply(null,a):void 0}function D6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||d1();if(a)return a=F1(e,a)||a,p5(ec.definitions,e,a)||p5($2.styles,e,a)}var ec=new KH,QH=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,_1("noAuto")},JH={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return l1?(_1("beforeI2svg",a),s1("pseudoElements2svg",a),s1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,DH(function(){cv({autoReplaceSvgRoot:e}),_1("watch",a)})}},ZH={icon:function(a){if(a===null)return null;if(t3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:F1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=T3(a[0]);return{prefix:r,iconName:F1(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(A.cssPrefix,"-"))>-1||a.match(MH))){var s=P3(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||d1(),iconName:F1(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=d1();return{prefix:i,iconName:F1(i,a)||a}}}},A2={noAuto:QH,config:A,dom:JH,parse:ZH,library:ec,findIconDefinition:D6,toHtml:y4},cv=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?e2:e;(Object.keys($2.styles).length>0||A.autoFetchSvg)&&l1&&A.autoReplaceSvg&&A2.dom.i2svg({node:r})};function F3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return y4(r)})}}),Object.defineProperty(c,"node",{get:function(){if(l1){var r=e2.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function av(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(p0(n)&&e.found&&!r.found){var l=e.width,f=e.height,o={x:l/f/2,y:.5};s.style=A3(k(k({},i),{},{"transform-origin":"".concat(o.x+n.x/16,"em ").concat(o.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function ev(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(A.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},s),{},{id:n}),children:r}]}]}function L0(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,n=c.transform,l=c.symbol,f=c.title,o=c.maskId,m=c.titleId,v=c.extra,z=c.watchable,M=z===void 0?!1:z,T=r.found?r:e,w=T.width,E=T.height,h=s==="fak",g=[A.replacementClass,i?"".concat(A.cssPrefix,"-").concat(i):""].filter(function(I){return v.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(v.classes).join(" "),C={children:[],attributes:k(k({},v.attributes),{},{"data-prefix":s,"data-icon":i,class:g,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(E)})},N=h&&!~v.classes.indexOf("fa-fw")?{width:"".concat(w/E*16*.0625,"em")}:{};M&&(C.attributes[E1]=""),f&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(m||S4())},children:[f]}),delete C.attributes.title);var _=k(k({},C),{},{prefix:s,iconName:i,main:e,mask:r,maskId:o,transform:n,symbol:l,styles:k(k({},N),v.styles)}),s2=r.found&&e.found?s1("generateAbstractMask",_)||{children:[],attributes:{}}:s1("generateAbstractIcon",_)||{children:[],attributes:{}},Z=s2.children,D=s2.attributes;return _.children=Z,_.attributes=D,l?ev(_):av(_)}function L5(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,n=c.extra,l=c.watchable,f=l===void 0?!1:l,o=k(k(k({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});f&&(o[E1]="");var m=k({},n.styles);p0(s)&&(m.transform=PH({transform:s,startCentered:!0,width:e,height:r}),m["-webkit-transform"]=m.transform);var v=A3(m);v.length>0&&(o.style=v);var z=[];return z.push({tag:"span",attributes:o,children:[a]}),i&&z.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),z}function rv(c){var a=c.content,e=c.title,r=c.extra,s=k(k(k({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=A3(r.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var v6=$2.styles;function E6(c){var a=c[0],e=c[1],r=c.slice(4),s=H0(r,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(P1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(P1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(P1.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var sv={found:!1,width:512,height:512};function iv(c,a){!U7&&!A.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function _6(c,a){var e=a;return a==="fa"&&A.styleDefault!==null&&(a=d1()),new Promise(function(r,s){if(s1("missingIconAbstract"),e==="fa"){var i=ac(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&v6[a]&&v6[a][c]){var n=v6[a][c];return r(E6(n))}iv(c,a),r(k(k({},sv),{},{icon:A.showMissingIcons&&c?s1("missingIconAbstract")||{}:{}}))})}var g5=function(){},$6=A.measurePerformance&&q4&&q4.mark&&q4.measure?q4:{mark:g5,measure:g5},H4='FA "6.5.1"',nv=function(a){return $6.mark("".concat(H4," ").concat(a," begins")),function(){return rc(a)}},rc=function(a){$6.mark("".concat(H4," ").concat(a," ends")),$6.measure("".concat(H4," ").concat(a),"".concat(H4," ").concat(a," begins"),"".concat(H4," ").concat(a," ends"))},g0={begin:nv,end:rc},r3=function(){};function x5(c){var a=c.getAttribute?c.getAttribute(E1):null;return typeof a=="string"}function lv(c){var a=c.getAttribute?c.getAttribute(z0):null,e=c.getAttribute?c.getAttribute(u0):null;return a&&e}function fv(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(A.replacementClass)}function ov(){if(A.autoReplaceSvg===!0)return s3.replace;var c=s3[A.autoReplaceSvg];return c||s3.replace}function tv(c){return e2.createElementNS("http://www.w3.org/2000/svg",c)}function mv(c){return e2.createElement(c)}function sc(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?tv:mv:e;if(typeof c=="string")return e2.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(sc(n,{ceFn:r}))}),s}function Hv(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var s3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(sc(s),e)}),e.getAttribute(E1)===null&&A.keepOriginalSource){var r=e2.createComment(Hv(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~V0(e).indexOf(A.replacementClass))return s3.replace(a);var s=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,f){return f===A.replacementClass||f.match(s)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=r.map(function(l){return y4(l)}).join(`
`);e.setAttribute(E1,""),e.innerHTML=n}};function b5(c){c()}function ic(c,a){var e=typeof a=="function"?a:r3;if(c.length===0)e();else{var r=b5;A.mutateApproach===hH&&(r=M1.requestAnimationFrame||b5),r(function(){var s=ov(),i=g0.begin("mutate");c.map(s),i(),e()})}}var x0=!1;function nc(){x0=!0}function O6(){x0=!1}var H3=null;function N5(c){if(u5&&A.observeMutations){var a=c.treeCallback,e=a===void 0?r3:a,r=c.nodeCallback,s=r===void 0?r3:r,i=c.pseudoElementsCallback,n=i===void 0?r3:i,l=c.observeMutationsRoot,f=l===void 0?e2:l;H3=new u5(function(o){if(!x0){var m=d1();n4(o).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!x5(v.addedNodes[0])&&(A.searchPseudoElements&&n(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&A.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&x5(v.target)&&~gH.indexOf(v.attributeName))if(v.attributeName==="class"&&lv(v.target)){var z=P3(V0(v.target)),M=z.prefix,T=z.iconName;v.target.setAttribute(z0,M||m),T&&v.target.setAttribute(u0,T)}else fv(v.target)&&s(v.target)})}}),l1&&H3.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vv(){H3&&H3.disconnect()}function zv(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),n=i[0],l=i.slice(1);return n&&l.length>0&&(r[n]=l.join(":").trim()),r},{})),e}function uv(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=P3(V0(c));return s.prefix||(s.prefix=d1()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=GH(s.prefix,c.innerText)||d0(s.prefix,F6(c.innerText))),!s.iconName&&A.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function hv(c){var a=n4(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return A.autoA11y&&(e?a["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||S4()):(a["aria-hidden"]="true",a.focusable="false")),a}function Vv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function S5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=uv(c),r=e.iconName,s=e.prefix,i=e.rest,n=hv(c),l=R6("parseNodeAttributes",{},c),f=a.styleParser?zv(c):[];return k({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:j2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:n}},l)}var pv=$2.styles;function lc(c){var a=A.autoReplaceSvg==="nest"?S5(c,{styleParser:!1}):S5(c);return~a.extra.classes.indexOf(I7)?s1("generateLayersText",c,a):s1("generateSvgReplacementMutation",c,a)}var C1=new Set;h0.map(function(c){C1.add("fa-".concat(c))});Object.keys(g4[a2]).map(C1.add.bind(C1));Object.keys(g4[n2]).map(C1.add.bind(C1));C1=w4(C1);function w5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!l1)return Promise.resolve();var e=e2.documentElement.classList,r=function(v){return e.add("".concat(h5,"-").concat(v))},s=function(v){return e.remove("".concat(h5,"-").concat(v))},i=A.autoFetchSvg?C1:h0.map(function(m){return"fa-".concat(m)}).concat(Object.keys(pv));i.includes("fa")||i.push("fa");var n=[".".concat(I7,":not([").concat(E1,"])")].concat(i.map(function(m){return".".concat(m,":not([").concat(E1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=n4(c.querySelectorAll(n))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();var f=g0.begin("onTree"),o=l.reduce(function(m,v){try{var z=lc(v);z&&m.push(z)}catch(M){U7||M.name==="MissingIcon"&&console.error(M)}return m},[]);return new Promise(function(m,v){Promise.all(o).then(function(z){ic(z,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),f(),m()})}).catch(function(z){f(),v(z)})})}function Mv(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;lc(c).then(function(e){e&&ic([e],a)})}function dv(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:D6(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:D6(s||{})),c(r,k(k({},e),{},{mask:s}))}}var Cv=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?j2:r,i=e.symbol,n=i===void 0?!1:i,l=e.mask,f=l===void 0?null:l,o=e.maskId,m=o===void 0?null:o,v=e.title,z=v===void 0?null:v,M=e.titleId,T=M===void 0?null:M,w=e.classes,E=w===void 0?[]:w,h=e.attributes,g=h===void 0?{}:h,C=e.styles,N=C===void 0?{}:C;if(a){var _=a.prefix,s2=a.iconName,Z=a.icon;return F3(k({type:"icon"},a),function(){return _1("beforeDOMElementCreation",{iconDefinition:a,params:e}),A.autoA11y&&(z?g["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(T||S4()):(g["aria-hidden"]="true",g.focusable="false")),L0({icons:{main:E6(Z),mask:f?E6(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:s2,transform:k(k({},j2),s),symbol:n,title:z,maskId:m,titleId:T,extra:{attributes:g,styles:N,classes:E}})})}},Lv={mixout:function(){return{icon:dv(Cv)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=w5,e.nodeCallback=Mv,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?e2:r,i=e.callback,n=i===void 0?function(){}:i;return w5(s,n)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,n=r.titleId,l=r.prefix,f=r.transform,o=r.symbol,m=r.mask,v=r.maskId,z=r.extra;return new Promise(function(M,T){Promise.all([_6(s,l),m.iconName?_6(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var E=H0(w,2),h=E[0],g=E[1];M([e,L0({icons:{main:h,mask:g},prefix:l,iconName:s,transform:f,symbol:o,maskId:v,title:i,titleId:n,extra:z,watchable:!0})])}).catch(T)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.transform,l=e.styles,f=A3(l);f.length>0&&(s.style=f);var o;return p0(n)&&(o=s1("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),r.push(o||i.icon),{children:r,attributes:s}}}},gv={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return F3({type:"layer"},function(){_1("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(l){Array.isArray(l)?l.map(function(f){n=n.concat(f.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(w4(i)).join(" ")},children:n}]})}}}},xv={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,n=r.classes,l=n===void 0?[]:n,f=r.attributes,o=f===void 0?{}:f,m=r.styles,v=m===void 0?{}:m;return F3({type:"counter",content:e},function(){return _1("beforeDOMElementCreation",{content:e,params:r}),rv({content:e.toString(),title:i,extra:{attributes:o,styles:v,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(w4(l))}})})}}}},bv={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?j2:s,n=r.title,l=n===void 0?null:n,f=r.classes,o=f===void 0?[]:f,m=r.attributes,v=m===void 0?{}:m,z=r.styles,M=z===void 0?{}:z;return F3({type:"text",content:e},function(){return _1("beforeDOMElementCreation",{content:e,params:r}),L5({content:e,transform:k(k({},j2),i),title:l,extra:{attributes:v,styles:M,classes:["".concat(A.cssPrefix,"-layers-text")].concat(w4(o))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,n=r.extra,l=null,f=null;if(_7){var o=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();l=m.width/o,f=m.height/o}return A.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,L5({content:e.innerHTML,width:l,height:f,transform:i,title:s,extra:n,watchable:!0})])}}},Nv=new RegExp('"',"ug"),k5=[1105920,1112319];function Sv(c){var a=c.replace(Nv,""),e=$H(a,0),r=e>=k5[0]&&e<=k5[1],s=a.length===2?a[0]===a[1]:!1;return{value:F6(s?a[0]:a),isSecondary:r||s}}function y5(c,a){var e="".concat(uH).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=n4(c.children),n=i.filter(function(Z){return Z.getAttribute(P6)===a})[0],l=M1.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match(dH),o=l.getPropertyValue("font-weight"),m=l.getPropertyValue("content");if(n&&!f)return c.removeChild(n),r();if(f&&m!=="none"&&m!==""){var v=l.getPropertyValue("content"),z=~["Sharp"].indexOf(f[2])?n2:a2,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?x4[z][f[2].toLowerCase()]:CH[z][o],T=Sv(v),w=T.value,E=T.isSecondary,h=f[0].startsWith("FontAwesome"),g=d0(M,w),C=g;if(h){var N=jH(w);N.iconName&&N.prefix&&(g=N.iconName,M=N.prefix)}if(g&&!E&&(!n||n.getAttribute(z0)!==M||n.getAttribute(u0)!==C)){c.setAttribute(e,C),n&&c.removeChild(n);var _=Vv(),s2=_.extra;s2.attributes[P6]=a,_6(g,M).then(function(Z){var D=L0(k(k({},_),{},{icons:{main:Z,mask:C0()},prefix:M,iconName:C,extra:s2,watchable:!0})),I=e2.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(I,c.firstChild):c.appendChild(I),I.outerHTML=D.map(function(Y){return y4(Y)}).join(`
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}