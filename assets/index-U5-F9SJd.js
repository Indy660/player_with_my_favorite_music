(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();function M0(c,e){const a=Object.create(null),n=c.split(",");for(let r=0;r<n.length;r++)a[n[r]]=!0;return e?r=>!!a[r.toLowerCase()]:r=>!!a[r]}const o2={},s4=[],i1=()=>{},yl=()=>!1,R3=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),g0=c=>c.startsWith("onUpdate:"),M2=Object.assign,C0=(c,e)=>{const a=c.indexOf(e);a>-1&&c.splice(a,1)},bl=Object.prototype.hasOwnProperty,e2=(c,e)=>bl.call(c,e),U=Array.isArray,i4=c=>E3(c)==="[object Map]",I7=c=>E3(c)==="[object Set]",j=c=>typeof c=="function",p2=c=>typeof c=="string",H4=c=>typeof c=="symbol",h2=c=>c!==null&&typeof c=="object",F7=c=>(h2(c)||j(c))&&j(c.then)&&j(c.catch),R7=Object.prototype.toString,E3=c=>R7.call(c),wl=c=>E3(c).slice(8,-1),E7=c=>E3(c)==="[object Object]",L0=c=>p2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,p3=M0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),D3=c=>{const e=Object.create(null);return a=>e[a]||(e[a]=c(a))},xl=/-(\w)/g,o1=D3(c=>c.replace(xl,(e,a)=>a?a.toUpperCase():"")),kl=/\B([A-Z])/g,z4=D3(c=>c.replace(kl,"-$1").toLowerCase()),_3=D3(c=>c.charAt(0).toUpperCase()+c.slice(1)),L6=D3(c=>c?`on${_3(c)}`:""),X1=(c,e)=>!Object.is(c,e),y6=(c,e)=>{for(let a=0;a<c.length;a++)c[a](e)},w3=(c,e,a)=>{Object.defineProperty(c,e,{configurable:!0,enumerable:!1,value:a})},Nl=c=>{const e=parseFloat(c);return isNaN(e)?c:e},Sl=c=>{const e=p2(c)?Number(c):NaN;return isNaN(e)?c:e};let r5;const O6=()=>r5||(r5=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function O3(c){if(U(c)){const e={};for(let a=0;a<c.length;a++){const n=c[a],r=p2(n)?Bl(n):O3(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(p2(c)||h2(c))return c}const Al=/;(?![^(]*\))/g,Tl=/:([^]+)/,Pl=/\/\*[^]*?\*\//g;function Bl(c){const e={};return c.replace(Pl,"").split(Al).forEach(a=>{if(a){const n=a.split(Tl);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function t1(c){let e="";if(p2(c))e=c;else if(U(c))for(let a=0;a<c.length;a++){const n=t1(c[a]);n&&(e+=n+" ")}else if(h2(c))for(const a in c)c[a]&&(e+=a+" ");return e.trim()}const Il="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fl=M0(Il);function D7(c){return!!c||c===""}const Q2=c=>p2(c)?c:c==null?"":U(c)||h2(c)&&(c.toString===R7||!j(c.toString))?JSON.stringify(c,_7,2):String(c),_7=(c,e)=>e&&e.__v_isRef?_7(c,e.value):i4(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((a,[n,r],s)=>(a[b6(n,s)+" =>"]=r,a),{})}:I7(e)?{[`Set(${e.size})`]:[...e.values()].map(a=>b6(a))}:H4(e)?b6(e):h2(e)&&!U(e)&&!E7(e)?String(e):e,b6=(c,e="")=>{var a;return H4(c)?`Symbol(${(a=c.description)!=null?a:e})`:c};let j2;class Rl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=j2,!e&&j2&&(this.index=(j2.scopes||(j2.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const a=j2;try{return j2=this,e()}finally{j2=a}}}on(){j2=this}off(){j2=this.parent}stop(e){if(this._active){let a,n;for(a=0,n=this.effects.length;a<n;a++)this.effects[a].stop();for(a=0,n=this.cleanups.length;a<n;a++)this.cleanups[a]();if(this.scopes)for(a=0,n=this.scopes.length;a<n;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function El(c,e=j2){e&&e.active&&e.effects.push(c)}function Dl(){return j2}const y0=c=>{const e=new Set(c);return e.w=0,e.n=0,e},O7=c=>(c.w&P1)>0,W7=c=>(c.n&P1)>0,_l=({deps:c})=>{if(c.length)for(let e=0;e<c.length;e++)c[e].w|=P1},Ol=c=>{const{deps:e}=c;if(e.length){let a=0;for(let n=0;n<e.length;n++){const r=e[n];O7(r)&&!W7(r)?r.delete(c):e[a++]=r,r.w&=~P1,r.n&=~P1}e.length=a}},W6=new WeakMap;let b4=0,P1=1;const $6=30;let Y2;const Y1=Symbol(""),U6=Symbol("");class b0{constructor(e,a=null,n){this.fn=e,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,El(this,n)}run(){if(!this.active)return this.fn();let e=Y2,a=S1;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Y2,Y2=this,S1=!0,P1=1<<++b4,b4<=$6?_l(this):s5(this),this.fn()}finally{b4<=$6&&Ol(this),P1=1<<--b4,Y2=this.parent,S1=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Y2===this?this.deferStop=!0:this.active&&(s5(this),this.onStop&&this.onStop(),this.active=!1)}}function s5(c){const{deps:e}=c;if(e.length){for(let a=0;a<e.length;a++)e[a].delete(c);e.length=0}}let S1=!0;const $7=[];function p4(){$7.push(S1),S1=!1}function V4(){const c=$7.pop();S1=c===void 0?!0:c}function P2(c,e,a){if(S1&&Y2){let n=W6.get(c);n||W6.set(c,n=new Map);let r=n.get(a);r||n.set(a,r=y0()),U7(r)}}function U7(c,e){let a=!1;b4<=$6?W7(c)||(c.n|=P1,a=!O7(c)):a=!c.has(Y2),a&&(c.add(Y2),Y2.deps.push(c))}function u1(c,e,a,n,r,s){const i=W6.get(c);if(!i)return;let t=[];if(e==="clear")t=[...i.values()];else if(a==="length"&&U(c)){const o=Number(n);i.forEach((f,l)=>{(l==="length"||!H4(l)&&l>=o)&&t.push(f)})}else switch(a!==void 0&&t.push(i.get(a)),e){case"add":U(c)?L0(a)&&t.push(i.get("length")):(t.push(i.get(Y1)),i4(c)&&t.push(i.get(U6)));break;case"delete":U(c)||(t.push(i.get(Y1)),i4(c)&&t.push(i.get(U6)));break;case"set":i4(c)&&t.push(i.get(Y1));break}if(t.length===1)t[0]&&q6(t[0]);else{const o=[];for(const f of t)f&&o.push(...f);q6(y0(o))}}function q6(c,e){const a=U(c)?c:[...c];for(const n of a)n.computed&&i5(n);for(const n of a)n.computed||i5(n)}function i5(c,e){(c!==Y2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Wl=M0("__proto__,__v_isRef,__isVue"),q7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(H4)),t5=$l();function $l(){const c={};return["includes","indexOf","lastIndexOf"].forEach(e=>{c[e]=function(...a){const n=r2(this);for(let s=0,i=this.length;s<i;s++)P2(n,"get",s+"");const r=n[e](...a);return r===-1||r===!1?n[e](...a.map(r2)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{c[e]=function(...a){p4();const n=r2(this)[e].apply(this,a);return V4(),n}}),c}function Ul(c){const e=r2(this);return P2(e,"has",c),e.hasOwnProperty(c)}class G7{constructor(e=!1,a=!1){this._isReadonly=e,this._shallow=a}get(e,a,n){const r=this._isReadonly,s=this._shallow;if(a==="__v_isReactive")return!r;if(a==="__v_isReadonly")return r;if(a==="__v_isShallow")return s;if(a==="__v_raw")return n===(r?s?nf:X7:s?K7:Y7).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const i=U(e);if(!r){if(i&&e2(t5,a))return Reflect.get(t5,a,n);if(a==="hasOwnProperty")return Ul}const t=Reflect.get(e,a,n);return(H4(a)?q7.has(a):Wl(a))||(r||P2(e,"get",a),s)?t:B2(t)?i&&L0(a)?t:t.value:h2(t)?r?J7(t):$3(t):t}}class j7 extends G7{constructor(e=!1){super(!1,e)}set(e,a,n,r){let s=e[a];if(!this._shallow){const o=h4(s);if(!x3(n)&&!h4(n)&&(s=r2(s),n=r2(n)),!U(e)&&B2(s)&&!B2(n))return o?!1:(s.value=n,!0)}const i=U(e)&&L0(a)?Number(a)<e.length:e2(e,a),t=Reflect.set(e,a,n,r);return e===r2(r)&&(i?X1(n,s)&&u1(e,"set",a,n):u1(e,"add",a,n)),t}deleteProperty(e,a){const n=e2(e,a);e[a];const r=Reflect.deleteProperty(e,a);return r&&n&&u1(e,"delete",a,void 0),r}has(e,a){const n=Reflect.has(e,a);return(!H4(a)||!q7.has(a))&&P2(e,"has",a),n}ownKeys(e){return P2(e,"iterate",U(e)?"length":Y1),Reflect.ownKeys(e)}}class ql extends G7{constructor(e=!1){super(!0,e)}set(e,a){return!0}deleteProperty(e,a){return!0}}const Gl=new j7,jl=new ql,Yl=new j7(!0),w0=c=>c,W3=c=>Reflect.getPrototypeOf(c);function e3(c,e,a=!1,n=!1){c=c.__v_raw;const r=r2(c),s=r2(e);a||(X1(e,s)&&P2(r,"get",e),P2(r,"get",s));const{has:i}=W3(r),t=n?w0:a?N0:P4;if(i.call(r,e))return t(c.get(e));if(i.call(r,s))return t(c.get(s));c!==r&&c.get(e)}function a3(c,e=!1){const a=this.__v_raw,n=r2(a),r=r2(c);return e||(X1(c,r)&&P2(n,"has",c),P2(n,"has",r)),c===r?a.has(c):a.has(c)||a.has(r)}function n3(c,e=!1){return c=c.__v_raw,!e&&P2(r2(c),"iterate",Y1),Reflect.get(c,"size",c)}function o5(c){c=r2(c);const e=r2(this);return W3(e).has.call(e,c)||(e.add(c),u1(e,"add",c,c)),this}function l5(c,e){e=r2(e);const a=r2(this),{has:n,get:r}=W3(a);let s=n.call(a,c);s||(c=r2(c),s=n.call(a,c));const i=r.call(a,c);return a.set(c,e),s?X1(e,i)&&u1(a,"set",c,e):u1(a,"add",c,e),this}function f5(c){const e=r2(this),{has:a,get:n}=W3(e);let r=a.call(e,c);r||(c=r2(c),r=a.call(e,c)),n&&n.call(e,c);const s=e.delete(c);return r&&u1(e,"delete",c,void 0),s}function h5(){const c=r2(this),e=c.size!==0,a=c.clear();return e&&u1(c,"clear",void 0,void 0),a}function r3(c,e){return function(n,r){const s=this,i=s.__v_raw,t=r2(i),o=e?w0:c?N0:P4;return!c&&P2(t,"iterate",Y1),i.forEach((f,l)=>n.call(r,o(f),o(l),s))}}function s3(c,e,a){return function(...n){const r=this.__v_raw,s=r2(r),i=i4(s),t=c==="entries"||c===Symbol.iterator&&i,o=c==="keys"&&i,f=r[c](...n),l=a?w0:e?N0:P4;return!e&&P2(s,"iterate",o?U6:Y1),{next(){const{value:m,done:v}=f.next();return v?{value:m,done:v}:{value:t?[l(m[0]),l(m[1])]:l(m),done:v}},[Symbol.iterator](){return this}}}}function C1(c){return function(...e){return c==="delete"?!1:c==="clear"?void 0:this}}function Kl(){const c={get(s){return e3(this,s)},get size(){return n3(this)},has:a3,add:o5,set:l5,delete:f5,clear:h5,forEach:r3(!1,!1)},e={get(s){return e3(this,s,!1,!0)},get size(){return n3(this)},has:a3,add:o5,set:l5,delete:f5,clear:h5,forEach:r3(!1,!0)},a={get(s){return e3(this,s,!0)},get size(){return n3(this,!0)},has(s){return a3.call(this,s,!0)},add:C1("add"),set:C1("set"),delete:C1("delete"),clear:C1("clear"),forEach:r3(!0,!1)},n={get(s){return e3(this,s,!0,!0)},get size(){return n3(this,!0)},has(s){return a3.call(this,s,!0)},add:C1("add"),set:C1("set"),delete:C1("delete"),clear:C1("clear"),forEach:r3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=s3(s,!1,!1),a[s]=s3(s,!0,!1),e[s]=s3(s,!1,!0),n[s]=s3(s,!0,!0)}),[c,a,e,n]}const[Xl,Ql,Jl,Zl]=Kl();function x0(c,e){const a=e?c?Zl:Jl:c?Ql:Xl;return(n,r,s)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?n:Reflect.get(e2(a,r)&&r in n?a:n,r,s)}const cf={get:x0(!1,!1)},ef={get:x0(!1,!0)},af={get:x0(!0,!1)},Y7=new WeakMap,K7=new WeakMap,X7=new WeakMap,nf=new WeakMap;function rf(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sf(c){return c.__v_skip||!Object.isExtensible(c)?0:rf(wl(c))}function $3(c){return h4(c)?c:k0(c,!1,Gl,cf,Y7)}function Q7(c){return k0(c,!1,Yl,ef,K7)}function J7(c){return k0(c,!0,jl,af,X7)}function k0(c,e,a,n,r){if(!h2(c)||c.__v_raw&&!(e&&c.__v_isReactive))return c;const s=r.get(c);if(s)return s;const i=sf(c);if(i===0)return c;const t=new Proxy(c,i===2?n:a);return r.set(c,t),t}function t4(c){return h4(c)?t4(c.__v_raw):!!(c&&c.__v_isReactive)}function h4(c){return!!(c&&c.__v_isReadonly)}function x3(c){return!!(c&&c.__v_isShallow)}function Z7(c){return t4(c)||h4(c)}function r2(c){const e=c&&c.__v_raw;return e?r2(e):c}function cc(c){return w3(c,"__v_skip",!0),c}const P4=c=>h2(c)?$3(c):c,N0=c=>h2(c)?J7(c):c;function ec(c){S1&&Y2&&(c=r2(c),U7(c.dep||(c.dep=y0())))}function ac(c,e){c=r2(c);const a=c.dep;a&&q6(a)}function B2(c){return!!(c&&c.__v_isRef===!0)}function v2(c){return nc(c,!1)}function tf(c){return nc(c,!0)}function nc(c,e){return B2(c)?c:new of(c,e)}class of{constructor(e,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?e:r2(e),this._value=a?e:P4(e)}get value(){return ec(this),this._value}set value(e){const a=this.__v_isShallow||x3(e)||h4(e);e=a?e:r2(e),X1(e,this._rawValue)&&(this._rawValue=e,this._value=a?e:P4(e),ac(this))}}function o4(c){return B2(c)?c.value:c}const lf={get:(c,e,a)=>o4(Reflect.get(c,e,a)),set:(c,e,a,n)=>{const r=c[e];return B2(r)&&!B2(a)?(r.value=a,!0):Reflect.set(c,e,a,n)}};function rc(c){return t4(c)?c:new Proxy(c,lf)}class ff{constructor(e,a,n,r){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new b0(e,()=>{this._dirty||(this._dirty=!0,ac(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=r2(this);return ec(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function hf(c,e,a=!1){let n,r;const s=j(c);return s?(n=c,r=i1):(n=c.get,r=c.set),new ff(n,r,s||!r,a)}function A1(c,e,a,n){let r;try{r=n?c(...n):c()}catch(s){U3(s,e,a)}return r}function O2(c,e,a,n){if(j(c)){const s=A1(c,e,a,n);return s&&F7(s)&&s.catch(i=>{U3(i,e,a)}),s}const r=[];for(let s=0;s<c.length;s++)r.push(O2(c[s],e,a,n));return r}function U3(c,e,a,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const i=e.proxy,t=a;for(;s;){const f=s.ec;if(f){for(let l=0;l<f.length;l++)if(f[l](c,i,t)===!1)return}s=s.parent}const o=e.appContext.config.errorHandler;if(o){A1(o,null,10,[c,i,t]);return}}mf(c,a,r,n)}function mf(c,e,a,n=!0){console.error(c)}let B4=!1,G6=!1;const w2=[];let r1=0;const l4=[];let h1=null,W1=0;const sc=Promise.resolve();let S0=null;function A0(c){const e=S0||sc;return c?e.then(this?c.bind(this):c):e}function uf(c){let e=r1+1,a=w2.length;for(;e<a;){const n=e+a>>>1,r=w2[n],s=I4(r);s<c||s===c&&r.pre?e=n+1:a=n}return e}function T0(c){(!w2.length||!w2.includes(c,B4&&c.allowRecurse?r1+1:r1))&&(c.id==null?w2.push(c):w2.splice(uf(c.id),0,c),ic())}function ic(){!B4&&!G6&&(G6=!0,S0=sc.then(oc))}function vf(c){const e=w2.indexOf(c);e>r1&&w2.splice(e,1)}function df(c){U(c)?l4.push(...c):(!h1||!h1.includes(c,c.allowRecurse?W1+1:W1))&&l4.push(c),ic()}function m5(c,e,a=B4?r1+1:0){for(;a<w2.length;a++){const n=w2[a];if(n&&n.pre){if(c&&n.id!==c.uid)continue;w2.splice(a,1),a--,n()}}}function tc(c){if(l4.length){const e=[...new Set(l4)];if(l4.length=0,h1){h1.push(...e);return}for(h1=e,h1.sort((a,n)=>I4(a)-I4(n)),W1=0;W1<h1.length;W1++)h1[W1]();h1=null,W1=0}}const I4=c=>c.id==null?1/0:c.id,Hf=(c,e)=>{const a=I4(c)-I4(e);if(a===0){if(c.pre&&!e.pre)return-1;if(e.pre&&!c.pre)return 1}return a};function oc(c){G6=!1,B4=!0,w2.sort(Hf);try{for(r1=0;r1<w2.length;r1++){const e=w2[r1];e&&e.active!==!1&&A1(e,null,14)}}finally{r1=0,w2.length=0,tc(),B4=!1,S0=null,(w2.length||l4.length)&&oc()}}function zf(c,e,...a){if(c.isUnmounted)return;const n=c.vnode.props||o2;let r=a;const s=e.startsWith("update:"),i=s&&e.slice(7);if(i&&i in n){const l=`${i==="modelValue"?"model":i}Modifiers`,{number:m,trim:v}=n[l]||o2;v&&(r=a.map(H=>p2(H)?H.trim():H)),m&&(r=a.map(Nl))}let t,o=n[t=L6(e)]||n[t=L6(o1(e))];!o&&s&&(o=n[t=L6(z4(e))]),o&&O2(o,c,6,r);const f=n[t+"Once"];if(f){if(!c.emitted)c.emitted={};else if(c.emitted[t])return;c.emitted[t]=!0,O2(f,c,6,r)}}function lc(c,e,a=!1){const n=e.emitsCache,r=n.get(c);if(r!==void 0)return r;const s=c.emits;let i={},t=!1;if(!j(c)){const o=f=>{const l=lc(f,e,!0);l&&(t=!0,M2(i,l))};!a&&e.mixins.length&&e.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}return!s&&!t?(h2(c)&&n.set(c,null),null):(U(s)?s.forEach(o=>i[o]=null):M2(i,s),h2(c)&&n.set(c,i),i)}function q3(c,e){return!c||!R3(e)?!1:(e=e.slice(2).replace(/Once$/,""),e2(c,e[0].toLowerCase()+e.slice(1))||e2(c,z4(e))||e2(c,e))}let R2=null,G3=null;function k3(c){const e=R2;return R2=c,G3=c&&c.type.__scopeId||null,e}function P0(c){G3=c}function B0(){G3=null}function V3(c,e=R2,a){if(!e||c._n)return c;const n=(...r)=>{n._d&&b5(-1);const s=k3(e);let i;try{i=c(...r)}finally{k3(s),n._d&&b5(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function w6(c){const{type:e,vnode:a,proxy:n,withProxy:r,props:s,propsOptions:[i],slots:t,attrs:o,emit:f,render:l,renderCache:m,data:v,setupState:H,ctx:b,inheritAttrs:g}=c;let I,p;const V=k3(c);try{if(a.shapeFlag&4){const x=r||n,N=x;I=n1(l.call(N,x,m,s,H,v,b)),p=o}else{const x=e;I=n1(x.length>1?x(s,{attrs:o,slots:t,emit:f}):x(s,null)),p=e.props?o:pf(o)}}catch(x){N4.length=0,U3(x,c,1),I=u2(J2)}let w=I;if(p&&g!==!1){const x=Object.keys(p),{shapeFlag:N}=w;x.length&&N&7&&(i&&x.some(g0)&&(p=Vf(p,i)),w=B1(w,p))}return a.dirs&&(w=B1(w),w.dirs=w.dirs?w.dirs.concat(a.dirs):a.dirs),a.transition&&(w.transition=a.transition),I=w,k3(V),I}const pf=c=>{let e;for(const a in c)(a==="class"||a==="style"||R3(a))&&((e||(e={}))[a]=c[a]);return e},Vf=(c,e)=>{const a={};for(const n in c)(!g0(n)||!(n.slice(9)in e))&&(a[n]=c[n]);return a};function Mf(c,e,a){const{props:n,children:r,component:s}=c,{props:i,children:t,patchFlag:o}=e,f=s.emitsOptions;if(e.dirs||e.transition)return!0;if(a&&o>=0){if(o&1024)return!0;if(o&16)return n?u5(n,i,f):!!i;if(o&8){const l=e.dynamicProps;for(let m=0;m<l.length;m++){const v=l[m];if(i[v]!==n[v]&&!q3(f,v))return!0}}}else return(r||t)&&(!t||!t.$stable)?!0:n===i?!1:n?i?u5(n,i,f):!0:!!i;return!1}function u5(c,e,a){const n=Object.keys(e);if(n.length!==Object.keys(c).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==c[s]&&!q3(a,s))return!0}return!1}function gf({vnode:c,parent:e},a){for(;e&&e.subTree===c;)(c=e.vnode).el=a,e=e.parent}const fc="components";function l1(c,e){return Lf(fc,c,!0,e)||c}const Cf=Symbol.for("v-ndc");function Lf(c,e,a=!0,n=!1){const r=R2||L2;if(r){const s=r.type;if(c===fc){const t=zh(s,!1);if(t&&(t===e||t===o1(e)||t===_3(o1(e))))return s}const i=v5(r[c]||s[c],e)||v5(r.appContext[c],e);return!i&&n?s:i}}function v5(c,e){return c&&(c[e]||c[o1(e)]||c[_3(o1(e))])}const yf=c=>c.__isSuspense;function bf(c,e){e&&e.pendingBranch?U(c)?e.effects.push(...c):e.effects.push(c):df(c)}function hc(c,e){return j3(c,null,e)}function wf(c,e){return j3(c,null,{flush:"post"})}const i3={};function T1(c,e,a){return j3(c,e,a)}function j3(c,e,{immediate:a,deep:n,flush:r,onTrack:s,onTrigger:i}=o2){var t;const o=Dl()===((t=L2)==null?void 0:t.scope)?L2:null;let f,l=!1,m=!1;if(B2(c)?(f=()=>c.value,l=x3(c)):t4(c)?(f=()=>c,n=!0):U(c)?(m=!0,l=c.some(x=>t4(x)||x3(x)),f=()=>c.map(x=>{if(B2(x))return x.value;if(t4(x))return q1(x);if(j(x))return A1(x,o,2)})):j(c)?e?f=()=>A1(c,o,2):f=()=>{if(!(o&&o.isUnmounted))return v&&v(),O2(c,o,3,[H])}:f=i1,e&&n){const x=f;f=()=>q1(x())}let v,H=x=>{v=V.onStop=()=>{A1(x,o,4),v=V.onStop=void 0}},b;if(R4)if(H=i1,e?a&&O2(e,o,3,[f(),m?[]:void 0,H]):f(),r==="sync"){const x=Mh();b=x.__watcherHandles||(x.__watcherHandles=[])}else return i1;let g=m?new Array(c.length).fill(i3):i3;const I=()=>{if(V.active)if(e){const x=V.run();(n||l||(m?x.some((N,q)=>X1(N,g[q])):X1(x,g)))&&(v&&v(),O2(e,o,3,[x,g===i3?void 0:m&&g[0]===i3?[]:g,H]),g=x)}else V.run()};I.allowRecurse=!!e;let p;r==="sync"?p=I:r==="post"?p=()=>S2(I,o&&o.suspense):(I.pre=!0,o&&(I.id=o.uid),p=()=>T0(I));const V=new b0(f,p);e?a?I():g=V.run():r==="post"?S2(V.run.bind(V),o&&o.suspense):V.run();const w=()=>{V.stop(),o&&o.scope&&C0(o.scope.effects,V)};return b&&b.push(w),w}function xf(c,e,a){const n=this.proxy,r=p2(c)?c.includes(".")?mc(n,c):()=>n[c]:c.bind(n,n);let s;j(e)?s=e:(s=e.handler,a=e);const i=L2;m4(this);const t=j3(r,s.bind(n),a);return i?m4(i):K1(),t}function mc(c,e){const a=e.split(".");return()=>{let n=c;for(let r=0;r<a.length&&n;r++)n=n[a[r]];return n}}function q1(c,e){if(!h2(c)||c.__v_skip||(e=e||new Set,e.has(c)))return c;if(e.add(c),B2(c))q1(c.value,e);else if(U(c))for(let a=0;a<c.length;a++)q1(c[a],e);else if(I7(c)||i4(c))c.forEach(a=>{q1(a,e)});else if(E7(c))for(const a in c)q1(c[a],e);return c}function d5(c,e){const a=R2;if(a===null)return c;const n=c6(a)||a.proxy,r=c.dirs||(c.dirs=[]);for(let s=0;s<e.length;s++){let[i,t,o,f=o2]=e[s];i&&(j(i)&&(i={mounted:i,updated:i}),i.deep&&q1(t),r.push({dir:i,instance:n,value:t,oldValue:void 0,arg:o,modifiers:f}))}return c}function E1(c,e,a,n){const r=c.dirs,s=e&&e.dirs;for(let i=0;i<r.length;i++){const t=r[i];s&&(t.oldValue=s[i].value);let o=t.dir[n];o&&(p4(),O2(o,a,8,[c.el,t,c,e]),V4())}}const x1=Symbol("_leaveCb"),t3=Symbol("_enterCb");function kf(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return G4(()=>{c.isMounted=!0}),zc(()=>{c.isUnmounting=!0}),c}const _2=[Function,Array],uc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_2,onEnter:_2,onAfterEnter:_2,onEnterCancelled:_2,onBeforeLeave:_2,onLeave:_2,onAfterLeave:_2,onLeaveCancelled:_2,onBeforeAppear:_2,onAppear:_2,onAfterAppear:_2,onAppearCancelled:_2},Nf={name:"BaseTransition",props:uc,setup(c,{slots:e}){const a=Nc(),n=kf();let r;return()=>{const s=e.default&&dc(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const g of s)if(g.type!==J2){i=g;break}}const t=r2(c),{mode:o}=t;if(n.isLeaving)return x6(i);const f=H5(i);if(!f)return x6(i);const l=j6(f,t,n,a);Y6(f,l);const m=a.subTree,v=m&&H5(m);let H=!1;const{getTransitionKey:b}=f.type;if(b){const g=b();r===void 0?r=g:g!==r&&(r=g,H=!0)}if(v&&v.type!==J2&&(!$1(f,v)||H)){const g=j6(v,t,n,a);if(Y6(v,g),o==="out-in")return n.isLeaving=!0,g.afterLeave=()=>{n.isLeaving=!1,a.update.active!==!1&&a.update()},x6(i);o==="in-out"&&f.type!==J2&&(g.delayLeave=(I,p,V)=>{const w=vc(n,v);w[String(v.key)]=v,I[x1]=()=>{p(),I[x1]=void 0,delete l.delayedLeave},l.delayedLeave=V})}return i}}},Sf=Nf;function vc(c,e){const{leavingVNodes:a}=c;let n=a.get(e.type);return n||(n=Object.create(null),a.set(e.type,n)),n}function j6(c,e,a,n){const{appear:r,mode:s,persisted:i=!1,onBeforeEnter:t,onEnter:o,onAfterEnter:f,onEnterCancelled:l,onBeforeLeave:m,onLeave:v,onAfterLeave:H,onLeaveCancelled:b,onBeforeAppear:g,onAppear:I,onAfterAppear:p,onAppearCancelled:V}=e,w=String(c.key),x=vc(a,c),N=($,Y)=>{$&&O2($,n,9,Y)},q=($,Y)=>{const a2=Y[1];N($,Y),U($)?$.every(H2=>H2.length<=1)&&a2():$.length<=1&&a2()},X={mode:s,persisted:i,beforeEnter($){let Y=t;if(!a.isMounted)if(r)Y=g||t;else return;$[x1]&&$[x1](!0);const a2=x[w];a2&&$1(c,a2)&&a2.el[x1]&&a2.el[x1](),N(Y,[$])},enter($){let Y=o,a2=f,H2=l;if(!a.isMounted)if(r)Y=I||o,a2=p||f,H2=V||l;else return;let D=!1;const Z=$[t3]=y2=>{D||(D=!0,y2?N(H2,[$]):N(a2,[$]),X.delayedLeave&&X.delayedLeave(),$[t3]=void 0)};Y?q(Y,[$,Z]):Z()},leave($,Y){const a2=String(c.key);if($[t3]&&$[t3](!0),a.isUnmounting)return Y();N(m,[$]);let H2=!1;const D=$[x1]=Z=>{H2||(H2=!0,Y(),Z?N(b,[$]):N(H,[$]),$[x1]=void 0,x[a2]===c&&delete x[a2])};x[a2]=c,v?q(v,[$,D]):D()},clone($){return j6($,e,a,n)}};return X}function x6(c){if(Y3(c))return c=B1(c),c.children=null,c}function H5(c){return Y3(c)?c.children?c.children[0]:void 0:c}function Y6(c,e){c.shapeFlag&6&&c.component?Y6(c.component.subTree,e):c.shapeFlag&128?(c.ssContent.transition=e.clone(c.ssContent),c.ssFallback.transition=e.clone(c.ssFallback)):c.transition=e}function dc(c,e=!1,a){let n=[],r=0;for(let s=0;s<c.length;s++){let i=c[s];const t=a==null?i.key:String(a)+String(i.key!=null?i.key:s);i.type===A2?(i.patchFlag&128&&r++,n=n.concat(dc(i.children,e,t))):(e||i.type!==J2)&&n.push(t!=null?B1(i,{key:t}):i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}/*! #__NO_SIDE_EFFECTS__ */function W2(c,e){return j(c)?M2({name:c.name},e,{setup:c}):c}const M3=c=>!!c.type.__asyncLoader,Y3=c=>c.type.__isKeepAlive;function Af(c,e){Hc(c,"a",e)}function Tf(c,e){Hc(c,"da",e)}function Hc(c,e,a=L2){const n=c.__wdc||(c.__wdc=()=>{let r=a;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(K3(e,n,a),a){let r=a.parent;for(;r&&r.parent;)Y3(r.parent.vnode)&&Pf(n,e,a,r),r=r.parent}}function Pf(c,e,a,n){const r=K3(e,c,n,!0);Q3(()=>{C0(n[e],r)},a)}function K3(c,e,a=L2,n=!1){if(a){const r=a[c]||(a[c]=[]),s=e.__weh||(e.__weh=(...i)=>{if(a.isUnmounted)return;p4(),m4(a);const t=O2(e,a,c,i);return K1(),V4(),t});return n?r.unshift(s):r.push(s),s}}const p1=c=>(e,a=L2)=>(!R4||c==="sp")&&K3(c,(...n)=>e(...n),a),X3=p1("bm"),G4=p1("m"),Bf=p1("bu"),If=p1("u"),zc=p1("bum"),Q3=p1("um"),Ff=p1("sp"),Rf=p1("rtg"),Ef=p1("rtc");function Df(c,e=L2){K3("ec",c,e)}function I0(c,e,a,n){let r;const s=a&&a[n];if(U(c)||p2(c)){r=new Array(c.length);for(let i=0,t=c.length;i<t;i++)r[i]=e(c[i],i,void 0,s&&s[i])}else if(typeof c=="number"){r=new Array(c);for(let i=0;i<c;i++)r[i]=e(i+1,i,void 0,s&&s[i])}else if(h2(c))if(c[Symbol.iterator])r=Array.from(c,(i,t)=>e(i,t,void 0,s&&s[t]));else{const i=Object.keys(c);r=new Array(i.length);for(let t=0,o=i.length;t<o;t++){const f=i[t];r[t]=e(c[f],f,t,s&&s[t])}}else r=[];return a&&(a[n]=r),r}const K6=c=>c?Sc(c)?c6(c)||c.proxy:K6(c.parent):null,k4=M2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>K6(c.parent),$root:c=>K6(c.root),$emit:c=>c.emit,$options:c=>F0(c),$forceUpdate:c=>c.f||(c.f=()=>T0(c.update)),$nextTick:c=>c.n||(c.n=A0.bind(c.proxy)),$watch:c=>xf.bind(c)}),k6=(c,e)=>c!==o2&&!c.__isScriptSetup&&e2(c,e),_f={get({_:c},e){const{ctx:a,setupState:n,data:r,props:s,accessCache:i,type:t,appContext:o}=c;let f;if(e[0]!=="$"){const H=i[e];if(H!==void 0)switch(H){case 1:return n[e];case 2:return r[e];case 4:return a[e];case 3:return s[e]}else{if(k6(n,e))return i[e]=1,n[e];if(r!==o2&&e2(r,e))return i[e]=2,r[e];if((f=c.propsOptions[0])&&e2(f,e))return i[e]=3,s[e];if(a!==o2&&e2(a,e))return i[e]=4,a[e];X6&&(i[e]=0)}}const l=k4[e];let m,v;if(l)return e==="$attrs"&&P2(c,"get",e),l(c);if((m=t.__cssModules)&&(m=m[e]))return m;if(a!==o2&&e2(a,e))return i[e]=4,a[e];if(v=o.config.globalProperties,e2(v,e))return v[e]},set({_:c},e,a){const{data:n,setupState:r,ctx:s}=c;return k6(r,e)?(r[e]=a,!0):n!==o2&&e2(n,e)?(n[e]=a,!0):e2(c.props,e)||e[0]==="$"&&e.slice(1)in c?!1:(s[e]=a,!0)},has({_:{data:c,setupState:e,accessCache:a,ctx:n,appContext:r,propsOptions:s}},i){let t;return!!a[i]||c!==o2&&e2(c,i)||k6(e,i)||(t=s[0])&&e2(t,i)||e2(n,i)||e2(k4,i)||e2(r.config.globalProperties,i)},defineProperty(c,e,a){return a.get!=null?c._.accessCache[e]=0:e2(a,"value")&&this.set(c,e,a.value,null),Reflect.defineProperty(c,e,a)}};function z5(c){return U(c)?c.reduce((e,a)=>(e[a]=null,e),{}):c}let X6=!0;function Of(c){const e=F0(c),a=c.proxy,n=c.ctx;X6=!1,e.beforeCreate&&p5(e.beforeCreate,c,"bc");const{data:r,computed:s,methods:i,watch:t,provide:o,inject:f,created:l,beforeMount:m,mounted:v,beforeUpdate:H,updated:b,activated:g,deactivated:I,beforeDestroy:p,beforeUnmount:V,destroyed:w,unmounted:x,render:N,renderTracked:q,renderTriggered:X,errorCaptured:$,serverPrefetch:Y,expose:a2,inheritAttrs:H2,components:D,directives:Z,filters:y2}=e;if(f&&Wf(f,n,null),i)for(const n2 in i){const c2=i[n2];j(c2)&&(n[n2]=c2.bind(a))}if(r){const n2=r.call(a,a);h2(n2)&&(c.data=$3(n2))}if(X6=!0,s)for(const n2 in s){const c2=s[n2],$2=j(c2)?c2.bind(a,a):j(c2.get)?c2.get.bind(a,a):i1,U2=!j(c2)&&j(c2.set)?c2.set.bind(a):i1,D2=K({get:$2,set:U2});Object.defineProperty(n,n2,{enumerable:!0,configurable:!0,get:()=>D2.value,set:V2=>D2.value=V2})}if(t)for(const n2 in t)pc(t[n2],n,a,n2);if(o){const n2=j(o)?o.call(a):o;Reflect.ownKeys(n2).forEach(c2=>{g3(c2,n2[c2])})}l&&p5(l,c,"c");function s2(n2,c2){U(c2)?c2.forEach($2=>n2($2.bind(a))):c2&&n2(c2.bind(a))}if(s2(X3,m),s2(G4,v),s2(Bf,H),s2(If,b),s2(Af,g),s2(Tf,I),s2(Df,$),s2(Ef,q),s2(Rf,X),s2(zc,V),s2(Q3,x),s2(Ff,Y),U(a2))if(a2.length){const n2=c.exposed||(c.exposed={});a2.forEach(c2=>{Object.defineProperty(n2,c2,{get:()=>a[c2],set:$2=>a[c2]=$2})})}else c.exposed||(c.exposed={});N&&c.render===i1&&(c.render=N),H2!=null&&(c.inheritAttrs=H2),D&&(c.components=D),Z&&(c.directives=Z)}function Wf(c,e,a=i1){U(c)&&(c=Q6(c));for(const n in c){const r=c[n];let s;h2(r)?"default"in r?s=v1(r.from||n,r.default,!0):s=v1(r.from||n):s=v1(r),B2(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):e[n]=s}}function p5(c,e,a){O2(U(c)?c.map(n=>n.bind(e.proxy)):c.bind(e.proxy),e,a)}function pc(c,e,a,n){const r=n.includes(".")?mc(a,n):()=>a[n];if(p2(c)){const s=e[c];j(s)&&T1(r,s)}else if(j(c))T1(r,c.bind(a));else if(h2(c))if(U(c))c.forEach(s=>pc(s,e,a,n));else{const s=j(c.handler)?c.handler.bind(a):e[c.handler];j(s)&&T1(r,s,c)}}function F0(c){const e=c.type,{mixins:a,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=c.appContext,t=s.get(e);let o;return t?o=t:!r.length&&!a&&!n?o=e:(o={},r.length&&r.forEach(f=>N3(o,f,i,!0)),N3(o,e,i)),h2(e)&&s.set(e,o),o}function N3(c,e,a,n=!1){const{mixins:r,extends:s}=e;s&&N3(c,s,a,!0),r&&r.forEach(i=>N3(c,i,a,!0));for(const i in e)if(!(n&&i==="expose")){const t=$f[i]||a&&a[i];c[i]=t?t(c[i],e[i]):e[i]}return c}const $f={data:V5,props:M5,emits:M5,methods:w4,computed:w4,beforeCreate:k2,created:k2,beforeMount:k2,mounted:k2,beforeUpdate:k2,updated:k2,beforeDestroy:k2,beforeUnmount:k2,destroyed:k2,unmounted:k2,activated:k2,deactivated:k2,errorCaptured:k2,serverPrefetch:k2,components:w4,directives:w4,watch:qf,provide:V5,inject:Uf};function V5(c,e){return e?c?function(){return M2(j(c)?c.call(this,this):c,j(e)?e.call(this,this):e)}:e:c}function Uf(c,e){return w4(Q6(c),Q6(e))}function Q6(c){if(U(c)){const e={};for(let a=0;a<c.length;a++)e[c[a]]=c[a];return e}return c}function k2(c,e){return c?[...new Set([].concat(c,e))]:e}function w4(c,e){return c?M2(Object.create(null),c,e):e}function M5(c,e){return c?U(c)&&U(e)?[...new Set([...c,...e])]:M2(Object.create(null),z5(c),z5(e??{})):e}function qf(c,e){if(!c)return e;if(!e)return c;const a=M2(Object.create(null),c);for(const n in e)a[n]=k2(c[n],e[n]);return a}function Vc(){return{app:null,config:{isNativeTag:yl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gf=0;function jf(c,e){return function(n,r=null){j(n)||(n=M2({},n)),r!=null&&!h2(r)&&(r=null);const s=Vc(),i=new WeakSet;let t=!1;const o=s.app={_uid:Gf++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:gh,get config(){return s.config},set config(f){},use(f,...l){return i.has(f)||(f&&j(f.install)?(i.add(f),f.install(o,...l)):j(f)&&(i.add(f),f(o,...l))),o},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),o},component(f,l){return l?(s.components[f]=l,o):s.components[f]},directive(f,l){return l?(s.directives[f]=l,o):s.directives[f]},mount(f,l,m){if(!t){const v=u2(n,r);return v.appContext=s,l&&e?e(v,f):c(v,f,m),t=!0,o._container=f,f.__vue_app__=o,c6(v.component)||v.component.proxy}},unmount(){t&&(c(null,o._container),delete o._container.__vue_app__)},provide(f,l){return s.provides[f]=l,o},runWithContext(f){S3=o;try{return f()}finally{S3=null}}};return o}}let S3=null;function g3(c,e){if(L2){let a=L2.provides;const n=L2.parent&&L2.parent.provides;n===a&&(a=L2.provides=Object.create(n)),a[c]=e}}function v1(c,e,a=!1){const n=L2||R2;if(n||S3){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:S3._context.provides;if(r&&c in r)return r[c];if(arguments.length>1)return a&&j(e)?e.call(n&&n.proxy):e}}function Yf(c,e,a,n=!1){const r={},s={};w3(s,Z3,1),c.propsDefaults=Object.create(null),Mc(c,e,r,s);for(const i in c.propsOptions[0])i in r||(r[i]=void 0);a?c.props=n?r:Q7(r):c.type.props?c.props=r:c.props=s,c.attrs=s}function Kf(c,e,a,n){const{props:r,attrs:s,vnode:{patchFlag:i}}=c,t=r2(r),[o]=c.propsOptions;let f=!1;if((n||i>0)&&!(i&16)){if(i&8){const l=c.vnode.dynamicProps;for(let m=0;m<l.length;m++){let v=l[m];if(q3(c.emitsOptions,v))continue;const H=e[v];if(o)if(e2(s,v))H!==s[v]&&(s[v]=H,f=!0);else{const b=o1(v);r[b]=J6(o,t,b,H,c,!1)}else H!==s[v]&&(s[v]=H,f=!0)}}}else{Mc(c,e,r,s)&&(f=!0);let l;for(const m in t)(!e||!e2(e,m)&&((l=z4(m))===m||!e2(e,l)))&&(o?a&&(a[m]!==void 0||a[l]!==void 0)&&(r[m]=J6(o,t,m,void 0,c,!0)):delete r[m]);if(s!==t)for(const m in s)(!e||!e2(e,m))&&(delete s[m],f=!0)}f&&u1(c,"set","$attrs")}function Mc(c,e,a,n){const[r,s]=c.propsOptions;let i=!1,t;if(e)for(let o in e){if(p3(o))continue;const f=e[o];let l;r&&e2(r,l=o1(o))?!s||!s.includes(l)?a[l]=f:(t||(t={}))[l]=f:q3(c.emitsOptions,o)||(!(o in n)||f!==n[o])&&(n[o]=f,i=!0)}if(s){const o=r2(a),f=t||o2;for(let l=0;l<s.length;l++){const m=s[l];a[m]=J6(r,o,m,f[m],c,!e2(f,m))}}return i}function J6(c,e,a,n,r,s){const i=c[a];if(i!=null){const t=e2(i,"default");if(t&&n===void 0){const o=i.default;if(i.type!==Function&&!i.skipFactory&&j(o)){const{propsDefaults:f}=r;a in f?n=f[a]:(m4(r),n=f[a]=o.call(null,e),K1())}else n=o}i[0]&&(s&&!t?n=!1:i[1]&&(n===""||n===z4(a))&&(n=!0))}return n}function gc(c,e,a=!1){const n=e.propsCache,r=n.get(c);if(r)return r;const s=c.props,i={},t=[];let o=!1;if(!j(c)){const l=m=>{o=!0;const[v,H]=gc(m,e,!0);M2(i,v),H&&t.push(...H)};!a&&e.mixins.length&&e.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}if(!s&&!o)return h2(c)&&n.set(c,s4),s4;if(U(s))for(let l=0;l<s.length;l++){const m=o1(s[l]);g5(m)&&(i[m]=o2)}else if(s)for(const l in s){const m=o1(l);if(g5(m)){const v=s[l],H=i[m]=U(v)||j(v)?{type:v}:M2({},v);if(H){const b=y5(Boolean,H.type),g=y5(String,H.type);H[0]=b>-1,H[1]=g<0||b<g,(b>-1||e2(H,"default"))&&t.push(m)}}}const f=[i,t];return h2(c)&&n.set(c,f),f}function g5(c){return c[0]!=="$"}function C5(c){const e=c&&c.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:c===null?"null":""}function L5(c,e){return C5(c)===C5(e)}function y5(c,e){return U(e)?e.findIndex(a=>L5(a,c)):j(e)&&L5(e,c)?0:-1}const Cc=c=>c[0]==="_"||c==="$stable",R0=c=>U(c)?c.map(n1):[n1(c)],Xf=(c,e,a)=>{if(e._n)return e;const n=V3((...r)=>R0(e(...r)),a);return n._c=!1,n},Lc=(c,e,a)=>{const n=c._ctx;for(const r in c){if(Cc(r))continue;const s=c[r];if(j(s))e[r]=Xf(r,s,n);else if(s!=null){const i=R0(s);e[r]=()=>i}}},yc=(c,e)=>{const a=R0(e);c.slots.default=()=>a},Qf=(c,e)=>{if(c.vnode.shapeFlag&32){const a=e._;a?(c.slots=r2(e),w3(e,"_",a)):Lc(e,c.slots={})}else c.slots={},e&&yc(c,e);w3(c.slots,Z3,1)},Jf=(c,e,a)=>{const{vnode:n,slots:r}=c;let s=!0,i=o2;if(n.shapeFlag&32){const t=e._;t?a&&t===1?s=!1:(M2(r,e),!a&&t===1&&delete r._):(s=!e.$stable,Lc(e,r)),i=e}else e&&(yc(c,e),i={default:1});if(s)for(const t in r)!Cc(t)&&i[t]==null&&delete r[t]};function Z6(c,e,a,n,r=!1){if(U(c)){c.forEach((v,H)=>Z6(v,e&&(U(e)?e[H]:e),a,n,r));return}if(M3(n)&&!r)return;const s=n.shapeFlag&4?c6(n.component)||n.component.proxy:n.el,i=r?null:s,{i:t,r:o}=c,f=e&&e.r,l=t.refs===o2?t.refs={}:t.refs,m=t.setupState;if(f!=null&&f!==o&&(p2(f)?(l[f]=null,e2(m,f)&&(m[f]=null)):B2(f)&&(f.value=null)),j(o))A1(o,t,12,[i,l]);else{const v=p2(o),H=B2(o);if(v||H){const b=()=>{if(c.f){const g=v?e2(m,o)?m[o]:l[o]:o.value;r?U(g)&&C0(g,s):U(g)?g.includes(s)||g.push(s):v?(l[o]=[s],e2(m,o)&&(m[o]=l[o])):(o.value=[s],c.k&&(l[c.k]=o.value))}else v?(l[o]=i,e2(m,o)&&(m[o]=i)):H&&(o.value=i,c.k&&(l[c.k]=i))};i?(b.id=-1,S2(b,a)):b()}}}const S2=bf;function Zf(c){return ch(c)}function ch(c,e){const a=O6();a.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:i,createText:t,createComment:o,setText:f,setElementText:l,parentNode:m,nextSibling:v,setScopeId:H=i1,insertStaticContent:b}=c,g=(h,u,d,z=null,C=null,L=null,P=!1,k=null,A=!!u.dynamicChildren)=>{if(h===u)return;h&&!$1(h,u)&&(z=M(h),V2(h,C,L,!0),h=null),u.patchFlag===-2&&(A=!1,u.dynamicChildren=null);const{type:y,ref:O,shapeFlag:R}=u;switch(y){case J3:I(h,u,d,z);break;case J2:p(h,u,d,z);break;case C3:h==null&&V(u,d,z,P);break;case A2:D(h,u,d,z,C,L,P,k,A);break;default:R&1?N(h,u,d,z,C,L,P,k,A):R&6?Z(h,u,d,z,C,L,P,k,A):(R&64||R&128)&&y.process(h,u,d,z,C,L,P,k,A,S)}O!=null&&C&&Z6(O,h&&h.ref,L,u||h,!u)},I=(h,u,d,z)=>{if(h==null)n(u.el=t(u.children),d,z);else{const C=u.el=h.el;u.children!==h.children&&f(C,u.children)}},p=(h,u,d,z)=>{h==null?n(u.el=o(u.children||""),d,z):u.el=h.el},V=(h,u,d,z)=>{[h.el,h.anchor]=b(h.children,u,d,z,h.el,h.anchor)},w=({el:h,anchor:u},d,z)=>{let C;for(;h&&h!==u;)C=v(h),n(h,d,z),h=C;n(u,d,z)},x=({el:h,anchor:u})=>{let d;for(;h&&h!==u;)d=v(h),r(h),h=d;r(u)},N=(h,u,d,z,C,L,P,k,A)=>{P=P||u.type==="svg",h==null?q(u,d,z,C,L,P,k,A):Y(h,u,C,L,P,k,A)},q=(h,u,d,z,C,L,P,k)=>{let A,y;const{type:O,props:R,shapeFlag:W,transition:G,dirs:Q}=h;if(A=h.el=i(h.type,L,R&&R.is,R),W&8?l(A,h.children):W&16&&$(h.children,A,null,z,C,L&&O!=="foreignObject",P,k),Q&&E1(h,null,z,"created"),X(A,h,h.scopeId,P,z),R){for(const i2 in R)i2!=="value"&&!p3(i2)&&s(A,i2,null,R[i2],L,h.children,z,C,C2);"value"in R&&s(A,"value",null,R.value),(y=R.onVnodeBeforeMount)&&e1(y,z,h)}Q&&E1(h,null,z,"beforeMount");const t2=eh(C,G);t2&&G.beforeEnter(A),n(A,u,d),((y=R&&R.onVnodeMounted)||t2||Q)&&S2(()=>{y&&e1(y,z,h),t2&&G.enter(A),Q&&E1(h,null,z,"mounted")},C)},X=(h,u,d,z,C)=>{if(d&&H(h,d),z)for(let L=0;L<z.length;L++)H(h,z[L]);if(C){let L=C.subTree;if(u===L){const P=C.vnode;X(h,P,P.scopeId,P.slotScopeIds,C.parent)}}},$=(h,u,d,z,C,L,P,k,A=0)=>{for(let y=A;y<h.length;y++){const O=h[y]=k?k1(h[y]):n1(h[y]);g(null,O,u,d,z,C,L,P,k)}},Y=(h,u,d,z,C,L,P)=>{const k=u.el=h.el;let{patchFlag:A,dynamicChildren:y,dirs:O}=u;A|=h.patchFlag&16;const R=h.props||o2,W=u.props||o2;let G;d&&D1(d,!1),(G=W.onVnodeBeforeUpdate)&&e1(G,d,u,h),O&&E1(u,h,d,"beforeUpdate"),d&&D1(d,!0);const Q=C&&u.type!=="foreignObject";if(y?a2(h.dynamicChildren,y,k,d,z,Q,L):P||c2(h,u,k,null,d,z,Q,L,!1),A>0){if(A&16)H2(k,u,R,W,d,z,C);else if(A&2&&R.class!==W.class&&s(k,"class",null,W.class,C),A&4&&s(k,"style",R.style,W.style,C),A&8){const t2=u.dynamicProps;for(let i2=0;i2<t2.length;i2++){const z2=t2[i2],G2=R[z2],c4=W[z2];(c4!==G2||z2==="value")&&s(k,z2,G2,c4,C,h.children,d,z,C2)}}A&1&&h.children!==u.children&&l(k,u.children)}else!P&&y==null&&H2(k,u,R,W,d,z,C);((G=W.onVnodeUpdated)||O)&&S2(()=>{G&&e1(G,d,u,h),O&&E1(u,h,d,"updated")},z)},a2=(h,u,d,z,C,L,P)=>{for(let k=0;k<u.length;k++){const A=h[k],y=u[k],O=A.el&&(A.type===A2||!$1(A,y)||A.shapeFlag&70)?m(A.el):d;g(A,y,O,null,z,C,L,P,!0)}},H2=(h,u,d,z,C,L,P)=>{if(d!==z){if(d!==o2)for(const k in d)!p3(k)&&!(k in z)&&s(h,k,d[k],null,P,u.children,C,L,C2);for(const k in z){if(p3(k))continue;const A=z[k],y=d[k];A!==y&&k!=="value"&&s(h,k,y,A,P,u.children,C,L,C2)}"value"in z&&s(h,"value",d.value,z.value)}},D=(h,u,d,z,C,L,P,k,A)=>{const y=u.el=h?h.el:t(""),O=u.anchor=h?h.anchor:t("");let{patchFlag:R,dynamicChildren:W,slotScopeIds:G}=u;G&&(k=k?k.concat(G):G),h==null?(n(y,d,z),n(O,d,z),$(u.children,d,O,C,L,P,k,A)):R>0&&R&64&&W&&h.dynamicChildren?(a2(h.dynamicChildren,W,d,C,L,P,k),(u.key!=null||C&&u===C.subTree)&&bc(h,u,!0)):c2(h,u,d,O,C,L,P,k,A)},Z=(h,u,d,z,C,L,P,k,A)=>{u.slotScopeIds=k,h==null?u.shapeFlag&512?C.ctx.activate(u,d,z,P,A):y2(u,d,z,C,L,P,A):I2(h,u,A)},y2=(h,u,d,z,C,L,P)=>{const k=h.component=mh(h,z,C);if(Y3(h)&&(k.ctx.renderer=S),uh(k),k.asyncDep){if(C&&C.registerDep(k,s2),!h.el){const A=k.subTree=u2(J2);p(null,A,u,d)}return}s2(k,h,u,d,C,L,P)},I2=(h,u,d)=>{const z=u.component=h.component;if(Mf(h,u,d))if(z.asyncDep&&!z.asyncResolved){n2(z,u,d);return}else z.next=u,vf(z.update),z.update();else u.el=h.el,z.vnode=u},s2=(h,u,d,z,C,L,P)=>{const k=()=>{if(h.isMounted){let{next:O,bu:R,u:W,parent:G,vnode:Q}=h,t2=O,i2;D1(h,!1),O?(O.el=Q.el,n2(h,O,P)):O=Q,R&&y6(R),(i2=O.props&&O.props.onVnodeBeforeUpdate)&&e1(i2,G,O,Q),D1(h,!0);const z2=w6(h),G2=h.subTree;h.subTree=z2,g(G2,z2,m(G2.el),M(G2),h,C,L),O.el=z2.el,t2===null&&gf(h,z2.el),W&&S2(W,C),(i2=O.props&&O.props.onVnodeUpdated)&&S2(()=>e1(i2,G,O,Q),C)}else{let O;const{el:R,props:W}=u,{bm:G,m:Q,parent:t2}=h,i2=M3(u);if(D1(h,!1),G&&y6(G),!i2&&(O=W&&W.onVnodeBeforeMount)&&e1(O,t2,u),D1(h,!0),R&&F){const z2=()=>{h.subTree=w6(h),F(R,h.subTree,h,C,null)};i2?u.type.__asyncLoader().then(()=>!h.isUnmounted&&z2()):z2()}else{const z2=h.subTree=w6(h);g(null,z2,d,z,h,C,L),u.el=z2.el}if(Q&&S2(Q,C),!i2&&(O=W&&W.onVnodeMounted)){const z2=u;S2(()=>e1(O,t2,z2),C)}(u.shapeFlag&256||t2&&M3(t2.vnode)&&t2.vnode.shapeFlag&256)&&h.a&&S2(h.a,C),h.isMounted=!0,u=d=z=null}},A=h.effect=new b0(k,()=>T0(y),h.scope),y=h.update=()=>A.run();y.id=h.uid,D1(h,!0),y()},n2=(h,u,d)=>{u.component=h;const z=h.vnode.props;h.vnode=u,h.next=null,Kf(h,u.props,z,d),Jf(h,u.children,d),p4(),m5(h),V4()},c2=(h,u,d,z,C,L,P,k,A=!1)=>{const y=h&&h.children,O=h?h.shapeFlag:0,R=u.children,{patchFlag:W,shapeFlag:G}=u;if(W>0){if(W&128){U2(y,R,d,z,C,L,P,k,A);return}else if(W&256){$2(y,R,d,z,C,L,P,k,A);return}}G&8?(O&16&&C2(y,C,L),R!==y&&l(d,R)):O&16?G&16?U2(y,R,d,z,C,L,P,k,A):C2(y,C,L,!0):(O&8&&l(d,""),G&16&&$(R,d,z,C,L,P,k,A))},$2=(h,u,d,z,C,L,P,k,A)=>{h=h||s4,u=u||s4;const y=h.length,O=u.length,R=Math.min(y,O);let W;for(W=0;W<R;W++){const G=u[W]=A?k1(u[W]):n1(u[W]);g(h[W],G,d,null,C,L,P,k,A)}y>O?C2(h,C,L,!0,!1,R):$(u,d,z,C,L,P,k,A,R)},U2=(h,u,d,z,C,L,P,k,A)=>{let y=0;const O=u.length;let R=h.length-1,W=O-1;for(;y<=R&&y<=W;){const G=h[y],Q=u[y]=A?k1(u[y]):n1(u[y]);if($1(G,Q))g(G,Q,d,null,C,L,P,k,A);else break;y++}for(;y<=R&&y<=W;){const G=h[R],Q=u[W]=A?k1(u[W]):n1(u[W]);if($1(G,Q))g(G,Q,d,null,C,L,P,k,A);else break;R--,W--}if(y>R){if(y<=W){const G=W+1,Q=G<O?u[G].el:z;for(;y<=W;)g(null,u[y]=A?k1(u[y]):n1(u[y]),d,Q,C,L,P,k,A),y++}}else if(y>W)for(;y<=R;)V2(h[y],C,L,!0),y++;else{const G=y,Q=y,t2=new Map;for(y=Q;y<=W;y++){const F2=u[y]=A?k1(u[y]):n1(u[y]);F2.key!=null&&t2.set(F2.key,y)}let i2,z2=0;const G2=W-Q+1;let c4=!1,e5=0;const g4=new Array(G2);for(y=0;y<G2;y++)g4[y]=0;for(y=G;y<=R;y++){const F2=h[y];if(z2>=G2){V2(F2,C,L,!0);continue}let c1;if(F2.key!=null)c1=t2.get(F2.key);else for(i2=Q;i2<=W;i2++)if(g4[i2-Q]===0&&$1(F2,u[i2])){c1=i2;break}c1===void 0?V2(F2,C,L,!0):(g4[c1-Q]=y+1,c1>=e5?e5=c1:c4=!0,g(F2,u[c1],d,null,C,L,P,k,A),z2++)}const a5=c4?ah(g4):s4;for(i2=a5.length-1,y=G2-1;y>=0;y--){const F2=Q+y,c1=u[F2],n5=F2+1<O?u[F2+1].el:z;g4[y]===0?g(null,c1,d,n5,C,L,P,k,A):c4&&(i2<0||y!==a5[i2]?D2(c1,d,n5,2):i2--)}}},D2=(h,u,d,z,C=null)=>{const{el:L,type:P,transition:k,children:A,shapeFlag:y}=h;if(y&6){D2(h.component.subTree,u,d,z);return}if(y&128){h.suspense.move(u,d,z);return}if(y&64){P.move(h,u,d,S);return}if(P===A2){n(L,u,d);for(let R=0;R<A.length;R++)D2(A[R],u,d,z);n(h.anchor,u,d);return}if(P===C3){w(h,u,d);return}if(z!==2&&y&1&&k)if(z===0)k.beforeEnter(L),n(L,u,d),S2(()=>k.enter(L),C);else{const{leave:R,delayLeave:W,afterLeave:G}=k,Q=()=>n(L,u,d),t2=()=>{R(L,()=>{Q(),G&&G()})};W?W(L,Q,t2):t2()}else n(L,u,d)},V2=(h,u,d,z=!1,C=!1)=>{const{type:L,props:P,ref:k,children:A,dynamicChildren:y,shapeFlag:O,patchFlag:R,dirs:W}=h;if(k!=null&&Z6(k,null,d,h,!0),O&256){u.ctx.deactivate(h);return}const G=O&1&&W,Q=!M3(h);let t2;if(Q&&(t2=P&&P.onVnodeBeforeUnmount)&&e1(t2,u,h),O&6)Z1(h.component,d,z);else{if(O&128){h.suspense.unmount(d,z);return}G&&E1(h,null,u,"beforeUnmount"),O&64?h.type.remove(h,u,d,C,S,z):y&&(L!==A2||R>0&&R&64)?C2(y,u,d,!1,!0):(L===A2&&R&384||!C&&O&16)&&C2(A,u,d),z&&g1(h)}(Q&&(t2=P&&P.onVnodeUnmounted)||G)&&S2(()=>{t2&&e1(t2,u,h),G&&E1(h,null,u,"unmounted")},d)},g1=h=>{const{type:u,el:d,anchor:z,transition:C}=h;if(u===A2){q2(d,z);return}if(u===C3){x(h);return}const L=()=>{r(d),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(h.shapeFlag&1&&C&&!C.persisted){const{leave:P,delayLeave:k}=C,A=()=>P(d,L);k?k(h.el,L,A):A()}else L()},q2=(h,u)=>{let d;for(;h!==u;)d=v(h),r(h),h=d;r(u)},Z1=(h,u,d)=>{const{bum:z,scope:C,update:L,subTree:P,um:k}=h;z&&y6(z),C.stop(),L&&(L.active=!1,V2(P,h,u,d)),k&&S2(k,u),S2(()=>{h.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},C2=(h,u,d,z=!1,C=!1,L=0)=>{for(let P=L;P<h.length;P++)V2(h[P],u,d,z,C)},M=h=>h.shapeFlag&6?M(h.component.subTree):h.shapeFlag&128?h.suspense.next():v(h.anchor||h.el),T=(h,u,d)=>{h==null?u._vnode&&V2(u._vnode,null,null,!0):g(u._vnode||null,h,u,null,null,null,d),m5(),tc(),u._vnode=h},S={p:g,um:V2,m:D2,r:g1,mt:y2,mc:$,pc:c2,pbc:a2,n:M,o:c};let _,F;return e&&([_,F]=e(S)),{render:T,hydrate:_,createApp:jf(T,_)}}function D1({effect:c,update:e},a){c.allowRecurse=e.allowRecurse=a}function eh(c,e){return(!c||c&&!c.pendingBranch)&&e&&!e.persisted}function bc(c,e,a=!1){const n=c.children,r=e.children;if(U(n)&&U(r))for(let s=0;s<n.length;s++){const i=n[s];let t=r[s];t.shapeFlag&1&&!t.dynamicChildren&&((t.patchFlag<=0||t.patchFlag===32)&&(t=r[s]=k1(r[s]),t.el=i.el),a||bc(i,t)),t.type===J3&&(t.el=i.el)}}function ah(c){const e=c.slice(),a=[0];let n,r,s,i,t;const o=c.length;for(n=0;n<o;n++){const f=c[n];if(f!==0){if(r=a[a.length-1],c[r]<f){e[n]=r,a.push(n);continue}for(s=0,i=a.length-1;s<i;)t=s+i>>1,c[a[t]]<f?s=t+1:i=t;f<c[a[s]]&&(s>0&&(e[n]=a[s-1]),a[s]=n)}}for(s=a.length,i=a[s-1];s-- >0;)a[s]=i,i=e[i];return a}const nh=c=>c.__isTeleport,A2=Symbol.for("v-fgt"),J3=Symbol.for("v-txt"),J2=Symbol.for("v-cmt"),C3=Symbol.for("v-stc"),N4=[];let K2=null;function b2(c=!1){N4.push(K2=c?null:[])}function rh(){N4.pop(),K2=N4[N4.length-1]||null}let F4=1;function b5(c){F4+=c}function wc(c){return c.dynamicChildren=F4>0?K2||s4:null,rh(),F4>0&&K2&&K2.push(c),c}function x2(c,e,a,n,r,s){return wc(J(c,e,a,n,r,s,!0))}function sh(c,e,a,n,r){return wc(u2(c,e,a,n,r,!0))}function c0(c){return c?c.__v_isVNode===!0:!1}function $1(c,e){return c.type===e.type&&c.key===e.key}const Z3="__vInternal",xc=({key:c})=>c??null,L3=({ref:c,ref_key:e,ref_for:a})=>(typeof c=="number"&&(c=""+c),c!=null?p2(c)||B2(c)||j(c)?{i:R2,r:c,k:e,f:!!a}:c:null);function J(c,e=null,a=null,n=0,r=null,s=c===A2?0:1,i=!1,t=!1){const o={__v_isVNode:!0,__v_skip:!0,type:c,props:e,key:e&&xc(e),ref:e&&L3(e),scopeId:G3,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:R2};return t?(E0(o,a),s&128&&c.normalize(o)):a&&(o.shapeFlag|=p2(a)?8:16),F4>0&&!i&&K2&&(o.patchFlag>0||s&6)&&o.patchFlag!==32&&K2.push(o),o}const u2=ih;function ih(c,e=null,a=null,n=0,r=null,s=!1){if((!c||c===Cf)&&(c=J2),c0(c)){const t=B1(c,e,!0);return a&&E0(t,a),F4>0&&!s&&K2&&(t.shapeFlag&6?K2[K2.indexOf(c)]=t:K2.push(t)),t.patchFlag|=-2,t}if(ph(c)&&(c=c.__vccOpts),e){e=th(e);let{class:t,style:o}=e;t&&!p2(t)&&(e.class=t1(t)),h2(o)&&(Z7(o)&&!U(o)&&(o=M2({},o)),e.style=O3(o))}const i=p2(c)?1:yf(c)?128:nh(c)?64:h2(c)?4:j(c)?2:0;return J(c,e,a,n,r,i,s,!0)}function th(c){return c?Z7(c)||Z3 in c?M2({},c):c:null}function B1(c,e,a=!1){const{props:n,ref:r,patchFlag:s,children:i}=c,t=e?lh(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:t,key:t&&xc(t),ref:e&&e.ref?a&&r?U(r)?r.concat(L3(e)):[r,L3(e)]:L3(e):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:e&&c.type!==A2?s===-1?16:s|16:s,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&B1(c.ssContent),ssFallback:c.ssFallback&&B1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function kc(c=" ",e=0){return u2(J3,null,c,e)}function oh(c="",e=!1){return e?(b2(),sh(J2,null,c)):u2(J2,null,c)}function n1(c){return c==null||typeof c=="boolean"?u2(J2):U(c)?u2(A2,null,c.slice()):typeof c=="object"?k1(c):u2(J3,null,String(c))}function k1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:B1(c)}function E0(c,e){let a=0;const{shapeFlag:n}=c;if(e==null)e=null;else if(U(e))a=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),E0(c,r()),r._c&&(r._d=!0));return}else{a=32;const r=e._;!r&&!(Z3 in e)?e._ctx=R2:r===3&&R2&&(R2.slots._===1?e._=1:(e._=2,c.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:R2},a=32):(e=String(e),n&64?(a=16,e=[kc(e)]):a=8);c.children=e,c.shapeFlag|=a}function lh(...c){const e={};for(let a=0;a<c.length;a++){const n=c[a];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=t1([e.class,n.class]));else if(r==="style")e.style=O3([e.style,n.style]);else if(R3(r)){const s=e[r],i=n[r];i&&s!==i&&!(U(s)&&s.includes(i))&&(e[r]=s?[].concat(s,i):i)}else r!==""&&(e[r]=n[r])}return e}function e1(c,e,a,n=null){O2(c,e,7,[a,n])}const fh=Vc();let hh=0;function mh(c,e,a){const n=c.type,r=(e?e.appContext:c.appContext)||fh,s={uid:hh++,vnode:c,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gc(n,r),emitsOptions:lc(n,r),emit:null,emitted:null,propsDefaults:o2,inheritAttrs:n.inheritAttrs,ctx:o2,data:o2,props:o2,attrs:o2,slots:o2,refs:o2,setupState:o2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=zf.bind(null,s),c.ce&&c.ce(s),s}let L2=null;const Nc=()=>L2||R2;let D0,e4,w5="__VUE_INSTANCE_SETTERS__";(e4=O6()[w5])||(e4=O6()[w5]=[]),e4.push(c=>L2=c),D0=c=>{e4.length>1?e4.forEach(e=>e(c)):e4[0](c)};const m4=c=>{D0(c),c.scope.on()},K1=()=>{L2&&L2.scope.off(),D0(null)};function Sc(c){return c.vnode.shapeFlag&4}let R4=!1;function uh(c,e=!1){R4=e;const{props:a,children:n}=c.vnode,r=Sc(c);Yf(c,a,r,e),Qf(c,n);const s=r?vh(c,e):void 0;return R4=!1,s}function vh(c,e){const a=c.type;c.accessCache=Object.create(null),c.proxy=cc(new Proxy(c.ctx,_f));const{setup:n}=a;if(n){const r=c.setupContext=n.length>1?Hh(c):null;m4(c),p4();const s=A1(n,c,0,[c.props,r]);if(V4(),K1(),F7(s)){if(s.then(K1,K1),e)return s.then(i=>{x5(c,i,e)}).catch(i=>{U3(i,c,0)});c.asyncDep=s}else x5(c,s,e)}else Ac(c,e)}function x5(c,e,a){j(e)?c.type.__ssrInlineRender?c.ssrRender=e:c.render=e:h2(e)&&(c.setupState=rc(e)),Ac(c,a)}let k5;function Ac(c,e,a){const n=c.type;if(!c.render){if(!e&&k5&&!n.render){const r=n.template||F0(c).template;if(r){const{isCustomElement:s,compilerOptions:i}=c.appContext.config,{delimiters:t,compilerOptions:o}=n,f=M2(M2({isCustomElement:s,delimiters:t},i),o);n.render=k5(r,f)}}c.render=n.render||i1}{m4(c),p4();try{Of(c)}finally{V4(),K1()}}}function dh(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(e,a){return P2(c,"get","$attrs"),e[a]}}))}function Hh(c){const e=a=>{c.exposed=a||{}};return{get attrs(){return dh(c)},slots:c.slots,emit:c.emit,expose:e}}function c6(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(rc(cc(c.exposed)),{get(e,a){if(a in e)return e[a];if(a in k4)return k4[a](c)},has(e,a){return a in e||a in k4}}))}function zh(c,e=!0){return j(c)?c.displayName||c.name:c.name||e&&c.__name}function ph(c){return j(c)&&"__vccOpts"in c}const K=(c,e)=>hf(c,e,R4);function e6(c,e,a){const n=arguments.length;return n===2?h2(e)&&!U(e)?c0(e)?u2(c,null,[e]):u2(c,e):u2(c,null,e):(n>3?a=Array.prototype.slice.call(arguments,2):n===3&&c0(a)&&(a=[a]),u2(c,e,a))}const Vh=Symbol.for("v-scx"),Mh=()=>v1(Vh),gh="3.3.13",Ch="http://www.w3.org/2000/svg",U1=typeof document<"u"?document:null,N5=U1&&U1.createElement("template"),Lh={insert:(c,e,a)=>{e.insertBefore(c,a||null)},remove:c=>{const e=c.parentNode;e&&e.removeChild(c)},createElement:(c,e,a,n)=>{const r=e?U1.createElementNS(Ch,c):U1.createElement(c,a?{is:a}:void 0);return c==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:c=>U1.createTextNode(c),createComment:c=>U1.createComment(c),setText:(c,e)=>{c.nodeValue=e},setElementText:(c,e)=>{c.textContent=e},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>U1.querySelector(c),setScopeId(c,e){c.setAttribute(e,"")},insertStaticContent(c,e,a,n,r,s){const i=a?a.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),a),!(r===s||!(r=r.nextSibling)););else{N5.innerHTML=n?`<svg>${c}</svg>`:c;const t=N5.content;if(n){const o=t.firstChild;for(;o.firstChild;)t.appendChild(o.firstChild);t.removeChild(o)}e.insertBefore(t,a)}return[i?i.nextSibling:e.firstChild,a?a.previousSibling:e.lastChild]}},L1="transition",C4="animation",E4=Symbol("_vtc"),A3=(c,{slots:e})=>e6(Sf,yh(c),e);A3.displayName="Transition";const Tc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};A3.props=M2({},uc,Tc);const _1=(c,e=[])=>{U(c)?c.forEach(a=>a(...e)):c&&c(...e)},S5=c=>c?U(c)?c.some(e=>e.length>1):c.length>1:!1;function yh(c){const e={};for(const D in c)D in Tc||(e[D]=c[D]);if(c.css===!1)return e;const{name:a="v",type:n,duration:r,enterFromClass:s=`${a}-enter-from`,enterActiveClass:i=`${a}-enter-active`,enterToClass:t=`${a}-enter-to`,appearFromClass:o=s,appearActiveClass:f=i,appearToClass:l=t,leaveFromClass:m=`${a}-leave-from`,leaveActiveClass:v=`${a}-leave-active`,leaveToClass:H=`${a}-leave-to`}=c,b=bh(r),g=b&&b[0],I=b&&b[1],{onBeforeEnter:p,onEnter:V,onEnterCancelled:w,onLeave:x,onLeaveCancelled:N,onBeforeAppear:q=p,onAppear:X=V,onAppearCancelled:$=w}=e,Y=(D,Z,y2)=>{O1(D,Z?l:t),O1(D,Z?f:i),y2&&y2()},a2=(D,Z)=>{D._isLeaving=!1,O1(D,m),O1(D,H),O1(D,v),Z&&Z()},H2=D=>(Z,y2)=>{const I2=D?X:V,s2=()=>Y(Z,D,y2);_1(I2,[Z,s2]),A5(()=>{O1(Z,D?o:s),y1(Z,D?l:t),S5(I2)||T5(Z,n,g,s2)})};return M2(e,{onBeforeEnter(D){_1(p,[D]),y1(D,s),y1(D,i)},onBeforeAppear(D){_1(q,[D]),y1(D,o),y1(D,f)},onEnter:H2(!1),onAppear:H2(!0),onLeave(D,Z){D._isLeaving=!0;const y2=()=>a2(D,Z);y1(D,m),kh(),y1(D,v),A5(()=>{D._isLeaving&&(O1(D,m),y1(D,H),S5(x)||T5(D,n,I,y2))}),_1(x,[D,y2])},onEnterCancelled(D){Y(D,!1),_1(w,[D])},onAppearCancelled(D){Y(D,!0),_1($,[D])},onLeaveCancelled(D){a2(D),_1(N,[D])}})}function bh(c){if(c==null)return null;if(h2(c))return[N6(c.enter),N6(c.leave)];{const e=N6(c);return[e,e]}}function N6(c){return Sl(c)}function y1(c,e){e.split(/\s+/).forEach(a=>a&&c.classList.add(a)),(c[E4]||(c[E4]=new Set)).add(e)}function O1(c,e){e.split(/\s+/).forEach(n=>n&&c.classList.remove(n));const a=c[E4];a&&(a.delete(e),a.size||(c[E4]=void 0))}function A5(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let wh=0;function T5(c,e,a,n){const r=c._endId=++wh,s=()=>{r===c._endId&&n()};if(a)return setTimeout(s,a);const{type:i,timeout:t,propCount:o}=xh(c,e);if(!i)return n();const f=i+"end";let l=0;const m=()=>{c.removeEventListener(f,v),s()},v=H=>{H.target===c&&++l>=o&&m()};setTimeout(()=>{l<o&&m()},t+1),c.addEventListener(f,v)}function xh(c,e){const a=window.getComputedStyle(c),n=b=>(a[b]||"").split(", "),r=n(`${L1}Delay`),s=n(`${L1}Duration`),i=P5(r,s),t=n(`${C4}Delay`),o=n(`${C4}Duration`),f=P5(t,o);let l=null,m=0,v=0;e===L1?i>0&&(l=L1,m=i,v=s.length):e===C4?f>0&&(l=C4,m=f,v=o.length):(m=Math.max(i,f),l=m>0?i>f?L1:C4:null,v=l?l===L1?s.length:o.length:0);const H=l===L1&&/\b(transform|all)(,|$)/.test(n(`${L1}Property`).toString());return{type:l,timeout:m,propCount:v,hasTransform:H}}function P5(c,e){for(;c.length<e.length;)c=c.concat(c);return Math.max(...e.map((a,n)=>B5(a)+B5(c[n])))}function B5(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function kh(){return document.body.offsetHeight}function Nh(c,e,a){const n=c[E4];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?c.removeAttribute("class"):a?c.setAttribute("class",e):c.className=e}const _0=Symbol("_vod"),I5={beforeMount(c,{value:e},{transition:a}){c[_0]=c.style.display==="none"?"":c.style.display,a&&e?a.beforeEnter(c):L4(c,e)},mounted(c,{value:e},{transition:a}){a&&e&&a.enter(c)},updated(c,{value:e,oldValue:a},{transition:n}){!e!=!a&&(n?e?(n.beforeEnter(c),L4(c,!0),n.enter(c)):n.leave(c,()=>{L4(c,!1)}):L4(c,e))},beforeUnmount(c,{value:e}){L4(c,e)}};function L4(c,e){c.style.display=e?c[_0]:"none"}const Pc=Symbol("");function Bc(c){const e=Nc();if(!e)return;const a=e.ut=(r=c(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>a0(s,r))},n=()=>{const r=c(e.proxy);e0(e.subTree,r),a(r)};wf(n),G4(()=>{const r=new MutationObserver(n);r.observe(e.subTree.el.parentNode,{childList:!0}),Q3(()=>r.disconnect())})}function e0(c,e){if(c.shapeFlag&128){const a=c.suspense;c=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{e0(a.activeBranch,e)})}for(;c.component;)c=c.component.subTree;if(c.shapeFlag&1&&c.el)a0(c.el,e);else if(c.type===A2)c.children.forEach(a=>e0(a,e));else if(c.type===C3){let{el:a,anchor:n}=c;for(;a&&(a0(a,e),a!==n);)a=a.nextSibling}}function a0(c,e){if(c.nodeType===1){const a=c.style;let n="";for(const r in e)a.setProperty(`--${r}`,e[r]),n+=`--${r}: ${e[r]};`;a[Pc]=n}}function Sh(c,e,a){const n=c.style,r=p2(a);if(a&&!r){if(e&&!p2(e))for(const s in e)a[s]==null&&n0(n,s,"");for(const s in a)n0(n,s,a[s])}else{const s=n.display;if(r){if(e!==a){const i=n[Pc];i&&(a+=";"+i),n.cssText=a}}else e&&c.removeAttribute("style");_0 in c&&(n.display=s)}}const F5=/\s*!important$/;function n0(c,e,a){if(U(a))a.forEach(n=>n0(c,e,n));else if(a==null&&(a=""),e.startsWith("--"))c.setProperty(e,a);else{const n=Ah(c,e);F5.test(a)?c.setProperty(z4(n),a.replace(F5,""),"important"):c[n]=a}}const R5=["Webkit","Moz","ms"],S6={};function Ah(c,e){const a=S6[e];if(a)return a;let n=o1(e);if(n!=="filter"&&n in c)return S6[e]=n;n=_3(n);for(let r=0;r<R5.length;r++){const s=R5[r]+n;if(s in c)return S6[e]=s}return e}const E5="http://www.w3.org/1999/xlink";function Th(c,e,a,n,r){if(n&&e.startsWith("xlink:"))a==null?c.removeAttributeNS(E5,e.slice(6,e.length)):c.setAttributeNS(E5,e,a);else{const s=Fl(e);a==null||s&&!D7(a)?c.removeAttribute(e):c.setAttribute(e,s?"":a)}}function Ph(c,e,a,n,r,s,i){if(e==="innerHTML"||e==="textContent"){n&&i(n,r,s),c[e]=a??"";return}const t=c.tagName;if(e==="value"&&t!=="PROGRESS"&&!t.includes("-")){c._value=a;const f=t==="OPTION"?c.getAttribute("value"):c.value,l=a??"";f!==l&&(c.value=l),a==null&&c.removeAttribute(e);return}let o=!1;if(a===""||a==null){const f=typeof c[e];f==="boolean"?a=D7(a):a==null&&f==="string"?(a="",o=!0):f==="number"&&(a=0,o=!0)}try{c[e]=a}catch{}o&&c.removeAttribute(e)}function Bh(c,e,a,n){c.addEventListener(e,a,n)}function Ih(c,e,a,n){c.removeEventListener(e,a,n)}const D5=Symbol("_vei");function Fh(c,e,a,n,r=null){const s=c[D5]||(c[D5]={}),i=s[e];if(n&&i)i.value=n;else{const[t,o]=Rh(e);if(n){const f=s[e]=_h(n,r);Bh(c,t,f,o)}else i&&(Ih(c,t,i,o),s[e]=void 0)}}const _5=/(?:Once|Passive|Capture)$/;function Rh(c){let e;if(_5.test(c)){e={};let n;for(;n=c.match(_5);)c=c.slice(0,c.length-n[0].length),e[n[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):z4(c.slice(2)),e]}let A6=0;const Eh=Promise.resolve(),Dh=()=>A6||(Eh.then(()=>A6=0),A6=Date.now());function _h(c,e){const a=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=a.attached)return;O2(Oh(n,a.value),e,5,[n])};return a.value=c,a.attached=Dh(),a}function Oh(c,e){if(U(e)){const a=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{a.call(c),c._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const O5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Wh=(c,e,a,n,r=!1,s,i,t,o)=>{e==="class"?Nh(c,n,r):e==="style"?Sh(c,a,n):R3(e)?g0(e)||Fh(c,e,a,n,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$h(c,e,n,r))?Ph(c,e,n,s,i,t,o):(e==="true-value"?c._trueValue=n:e==="false-value"&&(c._falseValue=n),Th(c,e,n,r))};function $h(c,e,a,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in c&&O5(e)&&j(a));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&c.tagName==="INPUT"||e==="type"&&c.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=c.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return O5(e)&&p2(a)?!1:e in c}const Uh=["ctrl","shift","alt","meta"],qh={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,e)=>Uh.some(a=>c[`${a}Key`]&&!e.includes(a))},T2=(c,e)=>{const a=c._withMods||(c._withMods={}),n=e.join(".");return a[n]||(a[n]=(r,...s)=>{for(let i=0;i<e.length;i++){const t=qh[e[i]];if(t&&t(r,e))return}return c(r,...s)})},Gh=M2({patchProp:Wh},Lh);let W5;function jh(){return W5||(W5=Zf(Gh))}const Yh=(...c)=>{const e=jh().createApp(...c),{mount:a}=e;return e.mount=n=>{const r=Kh(n);if(!r)return;const s=e._component;!j(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const i=a(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},e};function Kh(c){return p2(c)?document.querySelector(c):c}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const a4=typeof document<"u";function Xh(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const m2=Object.assign;function T6(c,e){const a={};for(const n in e){const r=e[n];a[n]=Z2(r)?r.map(c):c(r)}return a}const S4=()=>{},Z2=Array.isArray,Ic=/#/g,Qh=/&/g,Jh=/\//g,Zh=/=/g,cm=/\?/g,Fc=/\+/g,em=/%5B/g,am=/%5D/g,Rc=/%5E/g,nm=/%60/g,Ec=/%7B/g,rm=/%7C/g,Dc=/%7D/g,sm=/%20/g;function O0(c){return encodeURI(""+c).replace(rm,"|").replace(em,"[").replace(am,"]")}function im(c){return O0(c).replace(Ec,"{").replace(Dc,"}").replace(Rc,"^")}function r0(c){return O0(c).replace(Fc,"%2B").replace(sm,"+").replace(Ic,"%23").replace(Qh,"%26").replace(nm,"`").replace(Ec,"{").replace(Dc,"}").replace(Rc,"^")}function tm(c){return r0(c).replace(Zh,"%3D")}function om(c){return O0(c).replace(Ic,"%23").replace(cm,"%3F")}function lm(c){return c==null?"":om(c).replace(Jh,"%2F")}function D4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}const fm=/\/$/,hm=c=>c.replace(fm,"");function P6(c,e,a="/"){let n,r={},s="",i="";const t=e.indexOf("#");let o=e.indexOf("?");return t<o&&t>=0&&(o=-1),o>-1&&(n=e.slice(0,o),s=e.slice(o+1,t>-1?t:e.length),r=c(s)),t>-1&&(n=n||e.slice(0,t),i=e.slice(t,e.length)),n=dm(n??e,a),{fullPath:n+(s&&"?")+s+i,path:n,query:r,hash:D4(i)}}function mm(c,e){const a=e.query?c(e.query):"";return e.path+(a&&"?")+a+(e.hash||"")}function um(c,e,a){const n=e.matched.length-1,r=a.matched.length-1;return n>-1&&n===r&&u4(e.matched[n],a.matched[r])&&_c(e.params,a.params)&&c(e.query)===c(a.query)&&e.hash===a.hash}function u4(c,e){return(c.aliasOf||c)===(e.aliasOf||e)}function _c(c,e){if(Object.keys(c).length!==Object.keys(e).length)return!1;for(const a in c)if(!vm(c[a],e[a]))return!1;return!0}function vm(c,e){return Z2(c)?$5(c,e):Z2(e)?$5(e,c):c===e}function $5(c,e){return Z2(e)?c.length===e.length&&c.every((a,n)=>a===e[n]):c.length===1&&c[0]===e}function dm(c,e){if(c.startsWith("/"))return c;if(!c)return e;const a=e.split("/"),n=c.split("/"),r=n[n.length-1];(r===".."||r===".")&&n.push("");let s=a.length-1,i,t;for(i=0;i<n.length;i++)if(t=n[i],t!==".")if(t==="..")s>1&&s--;else break;return a.slice(0,s).join("/")+"/"+n.slice(i).join("/")}var _4;(function(c){c.pop="pop",c.push="push"})(_4||(_4={}));var T3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(T3||(T3={}));const B6="";function Hm(c){if(!c)if(a4){const e=document.querySelector("base");c=e&&e.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),hm(c)}const zm=/^[^#]+#/;function pm(c,e){return c.replace(zm,"#")+e}function Vm(c,e){const a=document.documentElement.getBoundingClientRect(),n=c.getBoundingClientRect();return{behavior:e.behavior,left:n.left-a.left-(e.left||0),top:n.top-a.top-(e.top||0)}}const Mm=()=>({left:window.scrollX,top:window.scrollY});function gm(c){let e;if("el"in c){const a=c.el,n=typeof a=="string"&&a.startsWith("#"),r=typeof a=="string"?n?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!r)return;e=Vm(r,c)}else e=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function U5(c,e){return(history.state?history.state.position-e:-1)+c}const s0=new Map;function Cm(c,e){s0.set(c,e)}function Lm(c){const e=s0.get(c);return s0.delete(c),e}function ym(c=""){let e=[],a=[B6],n=0;c=Hm(c);function r(t){n++,n!==a.length&&a.splice(n),a.push(t)}function s(t,o,{direction:f,delta:l}){const m={direction:f,delta:l,type:_4.pop};for(const v of e)v(t,o,m)}const i={location:B6,state:{},base:c,createHref:pm.bind(null,c),replace(t){a.splice(n--,1),r(t)},push(t,o){r(t)},listen(t){return e.push(t),()=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)}},destroy(){e=[],a=[B6],n=0},go(t,o=!0){const f=this.location,l=t<0?T3.back:T3.forward;n=Math.max(0,Math.min(n+t,a.length-1)),o&&s(this.location,f,{direction:l,delta:t})}};return Object.defineProperty(i,"location",{enumerable:!0,get:()=>a[n]}),i}function bm(c){return typeof c=="string"||c&&typeof c=="object"}function Oc(c){return typeof c=="string"||typeof c=="symbol"}const b1={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wc=Symbol("");var q5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(q5||(q5={}));function v4(c,e){return m2(new Error,{type:c,[Wc]:!0},e)}function f1(c,e){return c instanceof Error&&Wc in c&&(e==null||!!(c.type&e))}const G5="[^/]+?",wm={sensitive:!1,strict:!1,start:!0,end:!0},xm=/[.+*?^${}()[\]/\\]/g;function km(c,e){const a=m2({},wm,e),n=[];let r=a.start?"^":"";const s=[];for(const f of c){const l=f.length?[]:[90];a.strict&&!f.length&&(r+="/");for(let m=0;m<f.length;m++){const v=f[m];let H=40+(a.sensitive?.25:0);if(v.type===0)m||(r+="/"),r+=v.value.replace(xm,"\\$&"),H+=40;else if(v.type===1){const{value:b,repeatable:g,optional:I,regexp:p}=v;s.push({name:b,repeatable:g,optional:I});const V=p||G5;if(V!==G5){H+=10;try{new RegExp(`(${V})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${b}" (${V}): `+x.message)}}let w=g?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;m||(w=I&&f.length<2?`(?:/${w})`:"/"+w),I&&(w+="?"),r+=w,H+=20,I&&(H+=-8),g&&(H+=-20),V===".*"&&(H+=-50)}l.push(H)}n.push(l)}if(a.strict&&a.end){const f=n.length-1;n[f][n[f].length-1]+=.7000000000000001}a.strict||(r+="/?"),a.end?r+="$":a.strict&&(r+="(?:/|$)");const i=new RegExp(r,a.sensitive?"":"i");function t(f){const l=f.match(i),m={};if(!l)return null;for(let v=1;v<l.length;v++){const H=l[v]||"",b=s[v-1];m[b.name]=H&&b.repeatable?H.split("/"):H}return m}function o(f){let l="",m=!1;for(const v of c){(!m||!l.endsWith("/"))&&(l+="/"),m=!1;for(const H of v)if(H.type===0)l+=H.value;else if(H.type===1){const{value:b,repeatable:g,optional:I}=H,p=b in f?f[b]:"";if(Z2(p)&&!g)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const V=Z2(p)?p.join("/"):p;if(!V)if(I)v.length<2&&(l.endsWith("/")?l=l.slice(0,-1):m=!0);else throw new Error(`Missing required param "${b}"`);l+=V}}return l||"/"}return{re:i,score:n,keys:s,parse:t,stringify:o}}function Nm(c,e){let a=0;for(;a<c.length&&a<e.length;){const n=e[a]-c[a];if(n)return n;a++}return c.length<e.length?c.length===1&&c[0]===80?-1:1:c.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Sm(c,e){let a=0;const n=c.score,r=e.score;for(;a<n.length&&a<r.length;){const s=Nm(n[a],r[a]);if(s)return s;a++}if(Math.abs(r.length-n.length)===1){if(j5(n))return 1;if(j5(r))return-1}return r.length-n.length}function j5(c){const e=c[c.length-1];return c.length>0&&e[e.length-1]<0}const Am={type:0,value:""},Tm=/[a-zA-Z0-9_]/;function Pm(c){if(!c)return[[]];if(c==="/")return[[Am]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function e(H){throw new Error(`ERR (${a})/"${f}": ${H}`)}let a=0,n=a;const r=[];let s;function i(){s&&r.push(s),s=[]}let t=0,o,f="",l="";function m(){f&&(a===0?s.push({type:0,value:f}):a===1||a===2||a===3?(s.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:f,regexp:l,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),f="")}function v(){f+=o}for(;t<c.length;){if(o=c[t++],o==="\\"&&a!==2){n=a,a=4;continue}switch(a){case 0:o==="/"?(f&&m(),i()):o===":"?(m(),a=1):v();break;case 4:v(),a=n;break;case 1:o==="("?a=2:Tm.test(o)?v():(m(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&t--);break;case 2:o===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+o:a=3:l+=o;break;case 3:m(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&t--,l="";break;default:e("Unknown state");break}}return a===2&&e(`Unfinished custom RegExp for param "${f}"`),m(),i(),r}function Bm(c,e,a){const n=km(Pm(c.path),a),r=m2(n,{record:c,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Im(c,e){const a=[],n=new Map;e=X5({strict:!1,end:!0,sensitive:!1},e);function r(l){return n.get(l)}function s(l,m,v){const H=!v,b=Fm(l);b.aliasOf=v&&v.record;const g=X5(e,l),I=[b];if("alias"in l){const w=typeof l.alias=="string"?[l.alias]:l.alias;for(const x of w)I.push(m2({},b,{components:v?v.record.components:b.components,path:x,aliasOf:v?v.record:b}))}let p,V;for(const w of I){const{path:x}=w;if(m&&x[0]!=="/"){const N=m.record.path,q=N[N.length-1]==="/"?"":"/";w.path=m.record.path+(x&&q+x)}if(p=Bm(w,m,g),v?v.alias.push(p):(V=V||p,V!==p&&V.alias.push(p),H&&l.name&&!K5(p)&&i(l.name)),b.children){const N=b.children;for(let q=0;q<N.length;q++)s(N[q],p,v&&v.children[q])}v=v||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&o(p)}return V?()=>{i(V)}:S4}function i(l){if(Oc(l)){const m=n.get(l);m&&(n.delete(l),a.splice(a.indexOf(m),1),m.children.forEach(i),m.alias.forEach(i))}else{const m=a.indexOf(l);m>-1&&(a.splice(m,1),l.record.name&&n.delete(l.record.name),l.children.forEach(i),l.alias.forEach(i))}}function t(){return a}function o(l){let m=0;for(;m<a.length&&Sm(l,a[m])>=0&&(l.record.path!==a[m].record.path||!$c(l,a[m]));)m++;a.splice(m,0,l),l.record.name&&!K5(l)&&n.set(l.record.name,l)}function f(l,m){let v,H={},b,g;if("name"in l&&l.name){if(v=n.get(l.name),!v)throw v4(1,{location:l});g=v.record.name,H=m2(Y5(m.params,v.keys.filter(V=>!V.optional).concat(v.parent?v.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),l.params&&Y5(l.params,v.keys.map(V=>V.name))),b=v.stringify(H)}else if(l.path!=null)b=l.path,v=a.find(V=>V.re.test(b)),v&&(H=v.parse(b),g=v.record.name);else{if(v=m.name?n.get(m.name):a.find(V=>V.re.test(m.path)),!v)throw v4(1,{location:l,currentLocation:m});g=v.record.name,H=m2({},m.params,l.params),b=v.stringify(H)}const I=[];let p=v;for(;p;)I.unshift(p.record),p=p.parent;return{name:g,path:b,params:H,matched:I,meta:Em(I)}}return c.forEach(l=>s(l)),{addRoute:s,resolve:f,removeRoute:i,getRoutes:t,getRecordMatcher:r}}function Y5(c,e){const a={};for(const n of e)n in c&&(a[n]=c[n]);return a}function Fm(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:Rm(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function Rm(c){const e={},a=c.props||!1;if("component"in c)e.default=a;else for(const n in c.components)e[n]=typeof a=="object"?a[n]:a;return e}function K5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function Em(c){return c.reduce((e,a)=>m2(e,a.meta),{})}function X5(c,e){const a={};for(const n in c)a[n]=n in e?e[n]:c[n];return a}function $c(c,e){return e.children.some(a=>a===c||$c(c,a))}function Dm(c){const e={};if(c===""||c==="?")return e;const n=(c[0]==="?"?c.slice(1):c).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Fc," "),i=s.indexOf("="),t=D4(i<0?s:s.slice(0,i)),o=i<0?null:D4(s.slice(i+1));if(t in e){let f=e[t];Z2(f)||(f=e[t]=[f]),f.push(o)}else e[t]=o}return e}function Q5(c){let e="";for(let a in c){const n=c[a];if(a=tm(a),n==null){n!==void 0&&(e+=(e.length?"&":"")+a);continue}(Z2(n)?n.map(s=>s&&r0(s)):[n&&r0(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+a,s!=null&&(e+="="+s))})}return e}function _m(c){const e={};for(const a in c){const n=c[a];n!==void 0&&(e[a]=Z2(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const Om=Symbol(""),J5=Symbol(""),W0=Symbol(""),Uc=Symbol(""),i0=Symbol("");function y4(){let c=[];function e(n){return c.push(n),()=>{const r=c.indexOf(n);r>-1&&c.splice(r,1)}}function a(){c=[]}return{add:e,list:()=>c.slice(),reset:a}}function N1(c,e,a,n,r,s=i=>i()){const i=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((t,o)=>{const f=v=>{v===!1?o(v4(4,{from:a,to:e})):v instanceof Error?o(v):bm(v)?o(v4(2,{from:e,to:v})):(i&&n.enterCallbacks[r]===i&&typeof v=="function"&&i.push(v),t())},l=s(()=>c.call(n&&n.instances[r],e,a,f));let m=Promise.resolve(l);c.length<3&&(m=m.then(f)),m.catch(v=>o(v))})}function I6(c,e,a,n,r=s=>s()){const s=[];for(const i of c)for(const t in i.components){let o=i.components[t];if(!(e!=="beforeRouteEnter"&&!i.instances[t]))if(Wm(o)){const l=(o.__vccOpts||o)[e];l&&s.push(N1(l,a,n,i,t,r))}else{let f=o();s.push(()=>f.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${i.path}"`));const m=Xh(l)?l.default:l;i.components[t]=m;const H=(m.__vccOpts||m)[e];return H&&N1(H,a,n,i,t,r)()}))}}return s}function Wm(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function Z5(c){const e=v1(W0),a=v1(Uc),n=K(()=>e.resolve(o4(c.to))),r=K(()=>{const{matched:o}=n.value,{length:f}=o,l=o[f-1],m=a.matched;if(!l||!m.length)return-1;const v=m.findIndex(u4.bind(null,l));if(v>-1)return v;const H=c7(o[f-2]);return f>1&&c7(l)===H&&m[m.length-1].path!==H?m.findIndex(u4.bind(null,o[f-2])):v}),s=K(()=>r.value>-1&&Gm(a.params,n.value.params)),i=K(()=>r.value>-1&&r.value===a.matched.length-1&&_c(a.params,n.value.params));function t(o={}){return qm(o)?e[o4(c.replace)?"replace":"push"](o4(c.to)).catch(S4):Promise.resolve()}return{route:n,href:K(()=>n.value.href),isActive:s,isExactActive:i,navigate:t}}const $m=W2({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Z5,setup(c,{slots:e}){const a=$3(Z5(c)),{options:n}=v1(W0),r=K(()=>({[e7(c.activeClass,n.linkActiveClass,"router-link-active")]:a.isActive,[e7(c.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const s=e.default&&e.default(a);return c.custom?s:e6("a",{"aria-current":a.isExactActive?c.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:r.value},s)}}}),Um=$m;function qm(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const e=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return c.preventDefault&&c.preventDefault(),!0}}function Gm(c,e){for(const a in e){const n=e[a],r=c[a];if(typeof n=="string"){if(n!==r)return!1}else if(!Z2(r)||r.length!==n.length||n.some((s,i)=>s!==r[i]))return!1}return!0}function c7(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const e7=(c,e,a)=>c??e??a,jm=W2({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:e,slots:a}){const n=v1(i0),r=K(()=>c.route||n.value),s=v1(J5,0),i=K(()=>{let f=o4(s);const{matched:l}=r.value;let m;for(;(m=l[f])&&!m.components;)f++;return f}),t=K(()=>r.value.matched[i.value]);g3(J5,K(()=>i.value+1)),g3(Om,t),g3(i0,r);const o=v2();return T1(()=>[o.value,t.value,c.name],([f,l,m],[v,H,b])=>{l&&(l.instances[m]=f,H&&H!==l&&f&&f===v&&(l.leaveGuards.size||(l.leaveGuards=H.leaveGuards),l.updateGuards.size||(l.updateGuards=H.updateGuards))),f&&l&&(!H||!u4(l,H)||!v)&&(l.enterCallbacks[m]||[]).forEach(g=>g(f))},{flush:"post"}),()=>{const f=r.value,l=c.name,m=t.value,v=m&&m.components[l];if(!v)return a7(a.default,{Component:v,route:f});const H=m.props[l],b=H?H===!0?f.params:typeof H=="function"?H(f):H:null,I=e6(v,m2({},b,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(m.instances[l]=null)},ref:o}));return a7(a.default,{Component:I,route:f})||I}}});function a7(c,e){if(!c)return null;const a=c(e);return a.length===1?a[0]:a}const Ym=jm;function Km(c){const e=Im(c.routes,c),a=c.parseQuery||Dm,n=c.stringifyQuery||Q5,r=c.history,s=y4(),i=y4(),t=y4(),o=tf(b1);let f=b1;a4&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=T6.bind(null,M=>""+M),m=T6.bind(null,lm),v=T6.bind(null,D4);function H(M,T){let S,_;return Oc(M)?(S=e.getRecordMatcher(M),_=T):_=M,e.addRoute(_,S)}function b(M){const T=e.getRecordMatcher(M);T&&e.removeRoute(T)}function g(){return e.getRoutes().map(M=>M.record)}function I(M){return!!e.getRecordMatcher(M)}function p(M,T){if(T=m2({},T||o.value),typeof M=="string"){const d=P6(a,M,T.path),z=e.resolve({path:d.path},T),C=r.createHref(d.fullPath);return m2(d,z,{params:v(z.params),hash:D4(d.hash),redirectedFrom:void 0,href:C})}let S;if(M.path!=null)S=m2({},M,{path:P6(a,M.path,T.path).path});else{const d=m2({},M.params);for(const z in d)d[z]==null&&delete d[z];S=m2({},M,{params:m(d)}),T.params=m(T.params)}const _=e.resolve(S,T),F=M.hash||"";_.params=l(v(_.params));const h=mm(n,m2({},M,{hash:im(F),path:_.path})),u=r.createHref(h);return m2({fullPath:h,hash:F,query:n===Q5?_m(M.query):M.query||{}},_,{redirectedFrom:void 0,href:u})}function V(M){return typeof M=="string"?P6(a,M,o.value.path):m2({},M)}function w(M,T){if(f!==M)return v4(8,{from:T,to:M})}function x(M){return X(M)}function N(M){return x(m2(V(M),{replace:!0}))}function q(M){const T=M.matched[M.matched.length-1];if(T&&T.redirect){const{redirect:S}=T;let _=typeof S=="function"?S(M):S;return typeof _=="string"&&(_=_.includes("?")||_.includes("#")?_=V(_):{path:_},_.params={}),m2({query:M.query,hash:M.hash,params:_.path!=null?{}:M.params},_)}}function X(M,T){const S=f=p(M),_=o.value,F=M.state,h=M.force,u=M.replace===!0,d=q(S);if(d)return X(m2(V(d),{state:typeof d=="object"?m2({},F,d.state):F,force:h,replace:u}),T||S);const z=S;z.redirectedFrom=T;let C;return!h&&um(n,_,S)&&(C=v4(16,{to:z,from:_}),D2(_,_,!0,!1)),(C?Promise.resolve(C):a2(z,_)).catch(L=>f1(L)?f1(L,2)?L:U2(L):c2(L,z,_)).then(L=>{if(L){if(f1(L,2))return X(m2({replace:u},V(L.to),{state:typeof L.to=="object"?m2({},F,L.to.state):F,force:h}),T||z)}else L=D(z,_,!0,u,F);return H2(z,_,L),L})}function $(M,T){const S=w(M,T);return S?Promise.reject(S):Promise.resolve()}function Y(M){const T=q2.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(M):M()}function a2(M,T){let S;const[_,F,h]=Xm(M,T);S=I6(_.reverse(),"beforeRouteLeave",M,T);for(const d of _)d.leaveGuards.forEach(z=>{S.push(N1(z,M,T))});const u=$.bind(null,M,T);return S.push(u),C2(S).then(()=>{S=[];for(const d of s.list())S.push(N1(d,M,T));return S.push(u),C2(S)}).then(()=>{S=I6(F,"beforeRouteUpdate",M,T);for(const d of F)d.updateGuards.forEach(z=>{S.push(N1(z,M,T))});return S.push(u),C2(S)}).then(()=>{S=[];for(const d of h)if(d.beforeEnter)if(Z2(d.beforeEnter))for(const z of d.beforeEnter)S.push(N1(z,M,T));else S.push(N1(d.beforeEnter,M,T));return S.push(u),C2(S)}).then(()=>(M.matched.forEach(d=>d.enterCallbacks={}),S=I6(h,"beforeRouteEnter",M,T,Y),S.push(u),C2(S))).then(()=>{S=[];for(const d of i.list())S.push(N1(d,M,T));return S.push(u),C2(S)}).catch(d=>f1(d,8)?d:Promise.reject(d))}function H2(M,T,S){t.list().forEach(_=>Y(()=>_(M,T,S)))}function D(M,T,S,_,F){const h=w(M,T);if(h)return h;const u=T===b1,d=a4?history.state:{};S&&(_||u?r.replace(M.fullPath,m2({scroll:u&&d&&d.scroll},F)):r.push(M.fullPath,F)),o.value=M,D2(M,T,S,u),U2()}let Z;function y2(){Z||(Z=r.listen((M,T,S)=>{if(!Z1.listening)return;const _=p(M),F=q(_);if(F){X(m2(F,{replace:!0}),_).catch(S4);return}f=_;const h=o.value;a4&&Cm(U5(h.fullPath,S.delta),Mm()),a2(_,h).catch(u=>f1(u,12)?u:f1(u,2)?(X(u.to,_).then(d=>{f1(d,20)&&!S.delta&&S.type===_4.pop&&r.go(-1,!1)}).catch(S4),Promise.reject()):(S.delta&&r.go(-S.delta,!1),c2(u,_,h))).then(u=>{u=u||D(_,h,!1),u&&(S.delta&&!f1(u,8)?r.go(-S.delta,!1):S.type===_4.pop&&f1(u,20)&&r.go(-1,!1)),H2(_,h,u)}).catch(S4)}))}let I2=y4(),s2=y4(),n2;function c2(M,T,S){U2(M);const _=s2.list();return _.length?_.forEach(F=>F(M,T,S)):console.error(M),Promise.reject(M)}function $2(){return n2&&o.value!==b1?Promise.resolve():new Promise((M,T)=>{I2.add([M,T])})}function U2(M){return n2||(n2=!M,y2(),I2.list().forEach(([T,S])=>M?S(M):T()),I2.reset()),M}function D2(M,T,S,_){const{scrollBehavior:F}=c;if(!a4||!F)return Promise.resolve();const h=!S&&Lm(U5(M.fullPath,0))||(_||!S)&&history.state&&history.state.scroll||null;return A0().then(()=>F(M,T,h)).then(u=>u&&gm(u)).catch(u=>c2(u,M,T))}const V2=M=>r.go(M);let g1;const q2=new Set,Z1={currentRoute:o,listening:!0,addRoute:H,removeRoute:b,hasRoute:I,getRoutes:g,resolve:p,options:c,push:x,replace:N,go:V2,back:()=>V2(-1),forward:()=>V2(1),beforeEach:s.add,beforeResolve:i.add,afterEach:t.add,onError:s2.add,isReady:$2,install(M){const T=this;M.component("RouterLink",Um),M.component("RouterView",Ym),M.config.globalProperties.$router=T,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>o4(o)}),a4&&!g1&&o.value===b1&&(g1=!0,x(r.location).catch(F=>{}));const S={};for(const F in b1)Object.defineProperty(S,F,{get:()=>o.value[F],enumerable:!0});M.provide(W0,T),M.provide(Uc,Q7(S)),M.provide(i0,o);const _=M.unmount;q2.add(M),M.unmount=function(){q2.delete(M),q2.size<1&&(f=b1,Z&&Z(),Z=null,o.value=b1,g1=!1,n2=!1),_()}}};function C2(M){return M.reduce((T,S)=>T.then(()=>Y(S)),Promise.resolve())}return Z1}function Xm(c,e){const a=[],n=[],r=[],s=Math.max(e.matched.length,c.matched.length);for(let i=0;i<s;i++){const t=e.matched[i];t&&(c.matched.find(f=>u4(f,t))?n.push(t):a.push(t));const o=c.matched[i];o&&(e.matched.find(f=>u4(f,o))||r.push(o))}return[a,n,r]}const o3=[{songName:"1.5 кг Отличного Пюре - Эмо.mp3",sort:181,bestParties:[{start:25,end:84}],notAggressive:!0},{songName:"Angel Vivaldi - A Martian Winter.mp3"},{songName:"Angel Vivaldi - An Erisian Autumn.mp3",sort:50,bestParties:[{start:78,end:104},{start:176,end:220},{start:246,end:268}],notAggressive:!0},{songName:"As I Lay Dying - Forever.mp3",sort:210,bestParties:[{start:0,end:25}]},{songName:"As I Lay Dying - Nothing Left [2007].mp3",sort:40,bestParties:[{start:0,end:57}]},{songName:"As I Lay Dying - The Sound Оf Truth.mp3",sort:60,bestParties:[{start:0,end:36},{start:59,end:121}]},{songName:"Aspirin Rose - Fucking Perfect (Pink cover).mp3"},{songName:"August Burns Red - A Shot Below The Belt.mp3",sort:142,bestParties:[{start:0,end:30},{start:90,end:114},{start:164,end:175}]},{songName:"August Burns Red - Barbarian.mp3",sort:20,bestParties:[{start:21,end:32},{start:70,end:88},{start:113,end:152}]},{songName:"August Burns Red - Chasing the Dragon.mp3",sort:151},{songName:"August Burns Red - Consumer.mp3"},{songName:"August Burns Red - Indonesia.mp3",sort:141,bestParties:[{start:84,end:117},{start:161,end:180}]},{songName:"August Burns Red - Meridian.mp3",notAggressive:!0},{songName:"August Burns Red - Truth of a Liar.mp3"},{songName:"August Burns Red - Your Little Suburbia Is in Ruins.mp3",sort:70,bestParties:[{start:12,end:27},{start:107,end:125},{start:146,end:178}]},{songName:"Anaal Nathrakh - Between Shit and Piss We Are Born.mp3"},{songName:"Anaal Nathrakh - In The Constellation Of The Black Widow.mp3",sort:220,bestParties:[{start:65,end:85},{start:114,end:141}]},{songName:"Between the Buried and Me - All Bodies.mp3"},{songName:"Between The Buried And Me - Ants Of The Sky.mp3",sort:113,bestParties:[{start:0,end:108}]},{songName:"Between The Buried And Me - Sun Of Nothing.mp3"},{songName:"Between The Buried And Me - Swim To The Moon.mp3",sort:10,bestParties:[{start:135,end:160},{start:500,end:551},{start:982,end:1022}]},{songName:"Breakwater - Eleven.mp3"},{songName:"Breakwater - five.mp3"},{songName:"Bullet For My Valentine - Hand Of Blood.mp3"},{songName:"Cerebral Bore - The Bald Cadaver.mp3",sort:280,bestParties:[{start:5.5,end:50}]},{songName:"Children Of Bodom - Are You Dead Yet.mp3",sort:110,bestParties:[{start:82,end:114}]},{songName:"Cosmonauts Day - The Captain.mp3",notAggressive:!0},{songName:"Death In Vegas - Dirge.mp3"},{songName:"Dragonforce - The Flame of Youth.mp3",sort:120,bestParties:[{start:46,end:65},{start:289,end:317}]},{songName:"If These Trees Could Talk - From Roots to Needles.mp3",notAggressive:!0},{songName:"In Flames - Clayman.mp3",sort:130,bestParties:[{start:0,end:21}]},{songName:"In Flames - Reflect the Storm.mp3"},{songName:"Killing Floor - Abandon All.mp3"},{songName:"Killing Floor OST - Wake.mp3",notAggressive:!0},{songName:"Long Distance Calling - Black Paper Planes.mp3",notAggressive:!0},{songName:"Machine Head - Beautiful Mourning.mp3"},{songName:"Machine Head - Hallowed Be Thy Name.mp3"},{songName:"Machine Head - Halo.mp3"},{songName:"Ozoi The Maid - Unfortunately.mp3",sort:112,bestParties:[{start:59,end:84},{start:165,end:218},{start:240,end:253}]},{songName:"Ozoi The Maid Yakui The Maid - Lanterns.mp3",sort:111,bestParties:[{start:146,end:218}]},{songName:"Ozoi The Maid Yakui The Maid - Wonderland.mp3",sort:30,bestParties:[{start:115,end:243},{start:355,end:442}]},{songName:"Ozoi The Maid, Yakui The Maid - Frontier.mp3"},{songName:"P.O.D. - Youth of the Nation.mp3",notAggressive:!0},{songName:"Psygnosis - FIIIX 2.0.mp3"},{songName:"Psygnosis - Lost in Oblivion.mp3",sort:140,bestParties:[{start:292,end:356}]},{songName:"Psygnosis - MehMeh.mp3"},{songName:"Psygnosis - Phrase 7.mp3",notAggressive:!0},{songName:"Psygnosis - Synaptic Plasticity.mp3"},{songName:"Psygnosis - The Judgement.mp3"},{songName:"Raunchy - To the Lighthouse.mp3"},{songName:"Raunchy - Twelve Feet Tall.mp3",sort:150,bestParties:[{start:65,end:96}]},{songName:"Raunchy - Wasteland Discotheque.mp3",sort:190,bestParties:[{start:0,end:34},{start:63,end:101}]},{songName:"Rhapsody - The Mighty Ride of the Firelord.mp3"},{songName:"Rhapsody of Fire - Wisdom of the Kings.mp3"},{songName:"Rise Of The Northstar - The New Path.mp3"},{songName:"Rise Of The Northstar - What The Fuck.mp3",sort:160,bestParties:[{start:45,end:79}]},{songName:"Siberian Meat Grinder feat Distemper - Пламя в Груди.mp3",sort:211,bestParties:[{start:49,end:68}]},{songName:"The Doors - Alabama song.mp3",notAggressive:!0},{songName:"The Doors - The End.mp3",notAggressive:!0},{songName:"The Faceless - Shake The Disease.mp3"},{songName:"The Five Stars - Atom Bomb Baby.mp3",notAggressive:!0},{songName:"The HAARP Machine - Esoteric Agenda.mp3"},{songName:"Toundra - Bizancio Byzantium.mp3",sort:180,bestParties:[{start:127,end:224},{start:406,end:480}],notAggressive:!0},{songName:"URO & .corridoiokraut. - Nappi.mp3",notAggressive:!0},{songName:"What Mad Universe - Colossus.mp3",notAggressive:!0},{songName:"What Mad Universe - the world of leviathan.mp3",notAggressive:!0},{songName:"What Mad Universe - head of column.mp3",sort:170,bestParties:[{start:30,end:65}],notAggressive:!0},{songName:"What Mad Universe - mythical sacred firebird.mp3",notAggressive:!0},{songName:"What Mad Universe - Nebula My Love.mp3",sort:80,bestParties:[{start:162,end:246},{start:260,end:358}],notAggressive:!0},{songName:"What Mad Universe - Starborne.mp3",sort:90,bestParties:[{start:85,end:105},{start:144,end:185}],notAggressive:!0},{songName:"Within The Ruins - Ataxia II.mp3"},{songName:"Within The Ruins - Beautiful Agony.mp3"},{songName:"ZEROMANCER - Dr. Online.mp3"},{songName:"zYnthetic - Abandon All v3.mp3",sort:100,bestParties:[{start:0,end:30},{start:60,end:89}],notAggressive:!0},{songName:"zYnthetic - SSplug.mp3"}],t0=[{label:"All music",id:1,url:"all"},{label:"Top",id:2,url:"top"},{label:"Top Shorts",id:4,url:"shorts"},{label:"Not aggressive",id:3,url:"not_aggressive"}];var Qm={VITE_BASE_URL:"/player_with_my_favorite_music/",BASE_URL:"/player_with_my_favorite_music/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function Jm(){const c=v2(o3),e=v2(o3.filter(N=>N.sort)),a=v2(o3.filter(N=>N.notAggressive)),n=v2(0),r=v2(0);X3(()=>{c.value=o3,r.value=H.value.length});const s=K(()=>{console.log(Qm);const N="/player_with_my_favorite_music/";return H.value[n.value]?`${N}music/${b.value.songName}`:""}),i=K(()=>[...e.value].sort((N,q)=>N.sort-q.sort)),t=v2(1);function o(N){!(t.value===4&&N.id===2)&&!(t.value===2&&N.id===4)&&(n.value=0),t.value=N.id,r.value=v.value.length}(()=>{const N=window.location.pathname.split("&");if(N.length===2){const q=N[0].split("=")[1],X=parseInt(N[1].split("=")[1]),$=t0.find(Y=>Y.url===q);$&&(t.value=$.id,n.value=isNaN(X)?0:X)}})(),hc(()=>{const N=t0.find(Y=>Y.id===t.value),q=N?N.url:"",X=n.value.toString(),$=new URLSearchParams(`tab=${q}&track=${X}`);window.history.pushState({},"",$)});const l=K(()=>{switch(t.value){case 1:return c.value;case 2:return i.value;case 3:return a.value;case 4:return i.value;default:return[]}}),m=K(()=>t.value===4?i.value[n.value].bestParties:[]),v=K(()=>w.value?g():l.value),H=K(()=>v.value.map(N=>N.songName)),b=K(()=>v.value[n.value]);function g(){return l.value.map(N=>({...N,sort:Math.random()})).sort((N,q)=>N.sort-q.sort).map(({sort:N,...q})=>q)}function I(){n.value+=1,n.value>=v.value.length&&(n.value=0)}function p(){n.value=(n.value-1+v.value.length)%v.value.length}function V(N){n.value=N}const w=v2(!1);function x(){w.value=!w.value}return{totalNumbSongs:r,defaultTrackList:c,topTrackList:e,bestParties:m,nextTrack:I,previousTrack:p,pathToCurrentFile:s,sortingTopTrackList:i,currentTrackIndex:n,changeTab:o,selectTrack:V,tabSelected:t,isRandomTracks:w,handlerRandomBtn:x,currentTracks:v,currentTracksList:H,currentSong:b}}const Zm=W2({name:"TrackList",props:{currentTracks:{type:Array,default:()=>[]},currentTrackIndex:{type:Number,default:0}},emits:["select-track-from-list"],setup(c,{emit:e}){const a=K(()=>c.currentTracks.map(s=>{const i=s.lastIndexOf("/"),t=s==null?void 0:s.lastIndexOf(".");return s&&s.substring(i+1,t)||""}));T1(()=>c.currentTrackIndex,()=>{n()});async function n(){await A0();const s=document.querySelector(".selected");s==null||s.scrollIntoView({behavior:"smooth",block:"center"})}function r(s){e("select-track-from-list",s)}return{currentTracksWithCorrectNames:a,selectTrackFromList:r}}}),V1=(c,e)=>{const a=c.__vccOpts||c;for(const[n,r]of e)a[n]=r;return a},cu=["onClick"];function eu(c,e,a,n,r,s){return b2(),x2("ul",{ref:"sidebarRef",class:"sidebar",onClick:e[0]||(e[0]=T2(()=>{},["stop"]))},[(b2(!0),x2(A2,null,I0(c.currentTracksWithCorrectNames,(i,t)=>(b2(),x2("li",{key:t,class:t1({selected:t===c.currentTrackIndex}),onClick:T2(o=>c.selectTrackFromList(t),["stop"])},Q2(t+1)+". "+Q2(i),11,cu))),128))],512)}const au=V1(Zm,[["render",eu],["__scopeId","data-v-fd0c6d96"]]),nu=W2({props:{tabSelected:{type:Number,default:1}},emits:["change-tab"],setup(c,{emit:e}){function a(n){c.tabSelected!==n.id&&e("change-tab",n)}return{btnHandler:a,TABS_OPTION:t0}}}),ru={class:"tabs"},su=["onClick"];function iu(c,e,a,n,r,s){return b2(),x2("div",ru,[(b2(!0),x2(A2,null,I0(c.TABS_OPTION,(i,t)=>(b2(),x2("button",{key:t,class:t1({active:i.id===c.tabSelected}),onClick:T2(o=>c.btnHandler(i),["stop"])},Q2(i.label),11,su))),128))])}const tu=V1(nu,[["render",iu],["__scopeId","data-v-41d4c74d"]]),ou="modulepreload",lu=function(c){return"/player_with_my_favorite_music/"+c},n7={},a1=function(e,a,n){let r=Promise.resolve();if(a&&a.length>0){const s=document.getElementsByTagName("link");r=Promise.all(a.map(i=>{if(i=lu(i),i in n7)return;n7[i]=!0;const t=i.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(!!n)for(let m=s.length-1;m>=0;m--){const v=s[m];if(v.href===i&&(!t||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${o}`))return;const l=document.createElement("link");if(l.rel=t?"stylesheet":ou,t||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),t)return new Promise((m,v)=>{l.addEventListener("load",m),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>e()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})},$0=W2({name:"MainInfoBand",props:{songName:{type:String,default:""}},setup(c){const e=v2({}),a=v2(window.innerWidth),n=v2(window.innerHeight),r=()=>{a.value=window.innerWidth,n.value=window.innerHeight};X3(async()=>{const f=Object.assign({"/src/assets/images/1.5 кг Отличного Пюре.jpg":()=>a1(()=>import("./1.5 кг Отличного Пюре-OtALhitf.js"),__vite__mapDeps([])),"/src/assets/images/Anaal Nathrakh.jpg":()=>a1(()=>import("./Anaal Nathrakh-EzGp_TLw.js"),__vite__mapDeps([])),"/src/assets/images/As I Lay Dying.jpg":()=>a1(()=>import("./As I Lay Dying-28Nx7ZD0.js"),__vite__mapDeps([])),"/src/assets/images/August Burns Red.jpg":()=>a1(()=>import("./August Burns Red-MIqwgacb.js"),__vite__mapDeps([])),"/src/assets/images/Between The Buried And Me.webp":()=>a1(()=>import("./Between The Buried And Me-TSs49cb7.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid Yakui The Maid.jpg":()=>a1(()=>import("./Ozoi The Maid Yakui The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid.jpg":()=>a1(()=>import("./Ozoi The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/What Mad Universe.jpg":()=>a1(()=>import("./What Mad Universe-AmFbwRmj.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.png":()=>a1(()=>import("./default_logo-hDaDKpVk.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.svg":()=>a1(()=>import("./default_logo-KBf8q7n2.js"),__vite__mapDeps([]))});for(const l in f){const m=l.replace(/^.*\/(.*)\.\w+$/,"$1");e.value[m]=(await f[l]()).default}}),G4(()=>{window.addEventListener("resize",r)}),Q3(()=>{window.removeEventListener("resize",r)});const s=K(()=>{var l;const f=(l=c.songName)==null?void 0:l.lastIndexOf(".");return c.songName&&c.songName.substring(0,f)||""}),i=K(()=>{const[f,l]=s.value.split(" - ");return{bandName:f,songName:l}}),t=K(()=>{const{bandName:f}=i.value;return e.value[f]||e.value.default_logo}),o=K(()=>{function f(l,m=1){return{width:`${m*l}px`,height:`${m*l}px`}}return a.value>n.value?f(n.value,.6):f(a.value,.8)});return T1(()=>c.songName,()=>{var f,l;if("mediaSession"in navigator&&t.value){const m=["96x96","128x128","192x192","256x256","384x384","512x512"];navigator.mediaSession.metadata=new MediaMetadata({title:((f=i.value)==null?void 0:f.songName)||"",artist:((l=i.value)==null?void 0:l.bandName)||"",artwork:m.map(v=>({src:t.value,sizes:v,type:"image/png"}))})}},{immediate:!0}),{getInfoBand:i,getLogoImage:t,getImageSizes:o}}}),r7=()=>{Bc(c=>({ef0b2b3c:c.getImageSizes.width,"6d03e80b":c.getImageSizes.height}))},s7=$0.setup;$0.setup=s7?(c,e)=>(r7(),s7(c,e)):r7;const fu=["src"],hu={class:"artist-info"},mu={class:"band"},uu={class:"song"};function vu(c,e,a,n,r,s){return b2(),x2("div",null,[J("img",{src:c.getLogoImage,class:"album-image",alt:""},null,8,fu),J("div",hu,[J("div",mu,Q2(c.getInfoBand.bandName),1),J("div",uu,Q2(c.getInfoBand.songName),1)])])}const du=V1($0,[["render",vu],["__scopeId","data-v-2eafb513"]]),Hu=W2({name:"VolumeControl",props:{volume:{type:Number,default:.8},hasText:{type:Boolean,default:!1}},emits:["volume-change","show-text-song"],setup(c,{emit:e}){const a=K(()=>c.volume*100),n=K(()=>c.volume>0?'<i class="fas fa-volume-up"/>':'<i class="fas fa-volume-off"/>'),r=K(()=>c.hasText?"":"disabled");function s(f){const l=parseFloat(f.target.value)/100;e("volume-change",l)}function i(f){e("volume-change",f)}function t(){c.hasText&&e("show-text-song")}function o(){c.volume>0?i(0):i(.8)}return{convertToValue:a,volumeHandler:s,onIconVolumeClick:o,onIconShowTextClick:t,iconVolume:n,iconShowTextClass:r}}}),zu=c=>(P0("data-v-a580e32d"),c=c(),B0(),c),pu={class:"volume-control"},Vu=["innerHTML"],Mu=["value"],gu=zu(()=>J("i",{class:"fa-solid fa-text-height"},null,-1)),Cu=[gu];function Lu(c,e,a,n,r,s){return b2(),x2("div",pu,[J("button",{class:"player-button margin",onClick:e[0]||(e[0]=T2((...i)=>c.onIconVolumeClick&&c.onIconVolumeClick(...i),["stop"]))},[J("span",{innerHTML:c.iconVolume},null,8,Vu)]),J("input",{class:"margin",type:"range",value:c.convertToValue,min:"0",max:"100",step:"1",onInput:e[1]||(e[1]=(...i)=>c.volumeHandler&&c.volumeHandler(...i))},null,40,Mu),J("button",{class:t1(["show-text",c.iconShowTextClass]),onClick:e[2]||(e[2]=T2((...i)=>c.onIconShowTextClick&&c.onIconShowTextClick(...i),["stop"]))},Cu,2)])}const yu=V1(Hu,[["render",Lu],["__scopeId","data-v-a580e32d"]]),bu=W2({name:"ProgressControl",props:{currentTime:{type:Number,default:0},totalTime:{type:Number,default:0},bestParties:{type:Array,default:()=>[]}},emits:["time-change","time-change-line"],setup(c,{emit:e}){const a=K(()=>c.currentTime/c.totalTime*100),n=K(()=>t(c.currentTime)),r=K(()=>""),s=K(()=>t(c.totalTime)),i=K(()=>{const l=Number((100/c.totalTime).toFixed(2));return c.bestParties.map(m=>({left:`${m.start*l}%`,right:`${100-m.end*l}%`}))});function t(l){const m=Math.floor(l/60),v=Math.floor(l%60);return`${m}:${String(v).padStart(2,"0")}`}function o(l){var g;const m=((g=l.currentTarget)==null?void 0:g.parentNode)||null,{clientWidth:v}=m,H=m.getBoundingClientRect(),b=l.clientX-H.left;e("time-change-line",b/v)}function f(l){e("time-change",l)}return{convertToValue:a,convertCurrentTime:n,convertTotalTime:s,timeHandler:f,timeHandlerEmit:o,convertBestPartiesInPercentage:i,convertCurrentTimeSeconds:r}}}),wu={class:"progress-control"},xu=["value"],ku={class:"time-display"},Nu={key:0,class:"line"};function Su(c,e,a,n,r,s){return b2(),x2("div",wu,[J("input",{type:"range",min:"0",max:"100",value:c.convertToValue,step:"1",onInput:e[0]||(e[0]=(...i)=>c.timeHandler&&c.timeHandler(...i))},null,40,xu),J("div",ku,[J("span",null,Q2(c.convertCurrentTime),1),J("span",null,Q2(c.convertCurrentTimeSeconds),1),J("span",null,Q2(c.convertTotalTime),1)]),c.bestParties.length?(b2(),x2("div",Nu,[(b2(!0),x2(A2,null,I0(c.convertBestPartiesInPercentage,(i,t)=>(b2(),x2("div",{key:t,style:O3({left:i.left,right:i.right}),class:"best-section",onClick:e[1]||(e[1]=T2((...o)=>c.timeHandlerEmit&&c.timeHandlerEmit(...o),["stop"]))},null,4))),128))])):oh("",!0)])}const Au=V1(bu,[["render",Su],["__scopeId","data-v-b6c0e591"]]),Tu=W2({name:"MainControl",props:{isPlaying:{type:Boolean,default:!1}},emits:["previous","play-pause","next"],setup(c,{emit:e}){function a(){e("previous")}const n=K(()=>c.isPlaying?'<i class="fas fa-pause"/>':' <i class="fas fa-play"/>');function r(){e("play-pause")}function s(){e("next")}return{previousButtonHandler:a,playerButtonHandler:r,iconPlayerButton:n,nextButtonHandler:s}}}),qc=c=>(P0("data-v-1bded451"),c=c(),B0(),c),Pu={class:"main-control"},Bu=qc(()=>J("i",{class:"fas fa-step-backward"},null,-1)),Iu=[Bu],Fu=["innerHTML"],Ru=qc(()=>J("i",{class:"fas fa-step-forward"},null,-1)),Eu=[Ru];function Du(c,e,a,n,r,s){return b2(),x2("div",Pu,[J("button",{class:"player-button",onClick:e[0]||(e[0]=T2((...i)=>c.previousButtonHandler&&c.previousButtonHandler(...i),["stop"]))},Iu),J("button",{class:"player-button",onClick:e[1]||(e[1]=T2((...i)=>c.playerButtonHandler&&c.playerButtonHandler(...i),["stop"]))},[J("span",{innerHTML:c.iconPlayerButton},null,8,Fu)]),J("button",{class:"player-button",onClick:e[2]||(e[2]=T2((...i)=>c.nextButtonHandler&&c.nextButtonHandler(...i),["stop"]))},Eu)])}const _u=V1(Tu,[["render",Du],["__scopeId","data-v-1bded451"]]),Ou=W2({name:"OtherControl",props:{currentNumbSong:{type:Number,default:0},totalNumbSongs:{type:Number,default:0},isRandomTracks:{type:Boolean,default:!1},isRepeatMode:{type:Boolean,default:!1},isShowTrackList:{type:Boolean,default:!1},isDarkTheme:{type:Boolean,default:!1}},emits:["random-click","show-list-click","repeat-mode-click","change-theme"],setup(c,{emit:e}){function a(){e("random-click")}function n(){e("repeat-mode-click")}function r(){e("show-list-click")}function s(){e("change-theme")}const i=K(()=>c.isDarkTheme?'<i class="fa-solid fa-toggle-on"/>':'<i class="fa-solid fa-toggle-off"/>'),t=K(()=>c.isShowTrackList?'<i class="fas fa-bars fa-rotate-90"/>':'<i class="fas fa-bars"/>');return{iconClickRandomHandler:a,iconClickRepeatModeHandler:n,iconClickShowListHandler:r,iconClickChangeThemeHandler:s,iconToggle:i,iconBar:t}}}),Gc=c=>(P0("data-v-dbf63d29"),c=c(),B0(),c),Wu={class:"other"},$u=Gc(()=>J("i",{class:"fas fa-shuffle"},null,-1)),Uu=[$u],qu=Gc(()=>J("i",{class:"fas fa-repeat"},null,-1)),Gu=[qu],ju={class:"song-display"},Yu=["innerHTML"],Ku=["innerHTML"];function Xu(c,e,a,n,r,s){return b2(),x2("div",Wu,[J("button",{class:t1({active:c.isRandomTracks}),onClick:e[0]||(e[0]=T2((...i)=>c.iconClickRandomHandler&&c.iconClickRandomHandler(...i),["stop"]))},Uu,2),J("button",{class:t1({active:c.isRepeatMode}),onClick:e[1]||(e[1]=T2((...i)=>c.iconClickRepeatModeHandler&&c.iconClickRepeatModeHandler(...i),["stop"]))},Gu,2),J("div",ju,[J("span",null,Q2(c.currentNumbSong),1),kc("/"),J("span",null,Q2(c.totalNumbSongs),1)]),J("button",{onClick:e[2]||(e[2]=T2((...i)=>c.iconClickChangeThemeHandler&&c.iconClickChangeThemeHandler(...i),["stop"]))},[J("span",{innerHTML:c.iconToggle},null,8,Yu)]),J("button",{class:t1({active:c.isShowTrackList}),onClick:e[3]||(e[3]=T2((...i)=>c.iconClickShowListHandler&&c.iconClickShowListHandler(...i),["stop"]))},[J("span",{innerHTML:c.iconBar},null,8,Ku)],2)])}const Qu=V1(Ou,[["render",Xu],["__scopeId","data-v-dbf63d29"]]),Ju=W2({props:{songText:{type:String,default:""}}}),Zu={class:"sidebar"},cv=["textContent"];function ev(c,e,a,n,r,s){return b2(),x2("div",Zu,[J("span",{textContent:Q2(c.songText)},null,8,cv)])}const av=V1(Ju,[["render",ev],["__scopeId","data-v-a20903c5"]]),nv={"1.5 кг Отличного Пюре - Эмо.mp3":`Каждый раз понимать, как легко потерять
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
(We are)`},U0=W2({name:"MainComponent",components:{TrackList:au,PageTabs:tu,MainInfoBand:du,VolumeControl:yu,ProgressControl:Au,MainControl:_u,OtherControl:Qu,SongText:av},setup(){const{bestParties:c,nextTrack:e,previousTrack:a,pathToCurrentFile:n,sortingTopTrackList:r,currentTrackIndex:s,changeTab:i,selectTrack:t,tabSelected:o,isRandomTracks:f,handlerRandomBtn:l,totalNumbSongs:m,currentTracks:v,currentSong:H,currentTracksList:b}=Jm();X3(async()=>{I();const F=[["play",()=>{n2(),navigator.mediaSession.playbackState="playing"}],["pause",()=>{n2(),navigator.mediaSession.playbackState="paused"}],["nexttrack",()=>{e()}],["previoustrack",()=>{a()}],["seekto",h=>{console.log(h),w.value.currentTime=h.seekTime}]];for(const[h,u]of F)try{navigator.mediaSession.setActionHandler(h,u)}catch{console.log(`The media session action "${h}" is not supported yet.`)}});const g=v2(!1);function I(){const F=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";g.value=F==="dark",p()}T1(g,()=>{p()});function p(){document.documentElement.style.setProperty("color-scheme",g.value?"dark":"light")}function V(){g.value=!g.value}const w=v2(null),x=v2(0),N=v2(.8);function q(F){y2(F),s2.value&&I2()}function X(){T.value?w.value.currentTime=0:e()}function $(F){if(w.value){const h=F.target;w.value.currentTime=Number(h.value)/100*(w.value.duration||0)}}function Y(F){w.value&&(w.value.currentTime=F*(w.value.duration||0))}function a2(F){x.value=F.target.currentTime,navigator.mediaSession.setPositionState({duration:Z.value,playbackRate:1,position:x.value})}function H2(F){N.value=F.target.volume}function D(F){w.value.volume=F}const Z=v2(0);function y2(F){const h=F.target;Z.value=h.duration,navigator.mediaSession.setPositionState({duration:h.duration,playbackRate:1,position:0})}function I2(){var F;try{(F=w.value)==null||F.play().then(h=>h)}catch(h){console.log("error",h)}}const s2=v2(!1);function n2(){var F;s2.value=!s2.value,s2.value?I2():(F=w.value)==null||F.pause()}const c2=v2(!1);function $2(F){const h=r.value[s.value].bestParties;for(let u=0;u<h.length;u++){const d=h[u];if(F<d.start&&!c2.value){console.log("start"),w.value.currentTime=d.start;return}else if(F>=d.start&&F<=d.end){console.log("continue"),F>=d.end-3&&!c2.value&&console.log("end");return}}console.log("nextTrack"),X()}hc(()=>{o.value===4&&s2.value&&s&&$2(x.value)});const U2=v2("500px");G4(()=>{const F=document.querySelector(".main_control_ref"),h=document.querySelector(".container"),u=F.getBoundingClientRect(),d=h==null?void 0:h.getBoundingClientRect();U2.value=`${Math.abs(u.top-d.top)+18}px`});function D2(){w.value.currentTime<=20||o.value===4?a():w.value.currentTime=0}const V2=v2(!1);function g1(){V2.value=!V2.value}const q2=v2(!1);function Z1(){q2.value=!q2.value}function C2(){V2.value=!1,q2.value=!1}function M(F){t(F),s2.value?I2():n2()}const T=v2(!1);function S(){T.value=!T.value}const _=K(()=>nv[H.value.songName]||"");return{audioPlayer:w,isPlaying:s2,currentTime:x,volume:N,onVolumeUpdate:H2,totalTime:Z,isRandomTracks:f,pathToCurrentFile:n,currentTracks:v,currentTrackIndex:s,currentTracksList:b,totalNumbSongs:m,currentSong:H,handlerCanPlay:q,handlerEnded:X,handlerTimeChange:$,handlerTimeChangeLine:Y,onTimeUpdate:a2,setVolume:D,togglePlayPause:n2,nextTrack:e,previousTrackHandler:D2,handlerRandomBtn:l,handlerShowListBtn:g1,handlerSelectTrack:M,tabSelected:o,changeTab:i,isShowTrackList:V2,repeatModeChange:S,isRepeatMode:T,bestParties:c,isDarkTheme:g,handlerChangeThemeBtn:V,handlerShowSongTextBtn:Z1,isShowSongText:q2,closeAllBars:C2,currentSongText:_,distanceBetweenComponents:U2}}}),i7=()=>{Bc(c=>({"9784c30e":c.distanceBetweenComponents}))},t7=U0.setup;U0.setup=t7?(c,e)=>(i7(),t7(c,e)):i7;const rv={class:"container"},sv=["src"];function iv(c,e,a,n,r,s){const i=l1("TrackList"),t=l1("SongText"),o=l1("PageTabs"),f=l1("MainInfoBand"),l=l1("VolumeControl"),m=l1("ProgressControl"),v=l1("MainControl"),H=l1("OtherControl"),b=l1("RouterView");return b2(),x2("main",{class:t1([c.isDarkTheme?"dark":"light"]),onClick:e[4]||(e[4]=T2((...g)=>c.closeAllBars&&c.closeAllBars(...g),["stop"]))},[J("div",rv,[u2(b,null,{default:V3(()=>[u2(A3,{name:"slide-track-list"},{default:V3(()=>[d5(u2(i,{"current-track-index":c.currentTrackIndex,"current-tracks":c.currentTracksList,class:"top_bar",onSelectTrackFromList:c.handlerSelectTrack},null,8,["current-track-index","current-tracks","onSelectTrackFromList"]),[[I5,c.isShowTrackList]])]),_:1}),u2(A3,{name:"slide-song-text"},{default:V3(()=>[d5(u2(t,{"song-text":c.currentSongText,class:"top_bar"},null,8,["song-text"]),[[I5,c.isShowSongText]])]),_:1}),u2(o,{"tab-selected":c.tabSelected,onChangeTab:c.changeTab},null,8,["tab-selected","onChangeTab"]),u2(f,{"song-name":c.currentSong.songName},null,8,["song-name"]),u2(l,{"has-text":!!c.currentSongText.length,volume:c.volume,onVolumeChange:c.setVolume,onShowTextSong:c.handlerShowSongTextBtn},null,8,["has-text","volume","onVolumeChange","onShowTextSong"]),u2(m,{"best-parties":c.bestParties,"current-time":c.currentTime,"total-time":c.totalTime,onTimeChange:c.handlerTimeChange,onTimeChangeLine:c.handlerTimeChangeLine},null,8,["best-parties","current-time","total-time","onTimeChange","onTimeChangeLine"]),u2(v,{ref:"main_control_ref",class:"main_control_ref","is-playing":c.isPlaying,onPrevious:c.previousTrackHandler,onNext:c.nextTrack,onPlayPause:c.togglePlayPause},null,8,["is-playing","onPrevious","onNext","onPlayPause"]),u2(H,{"current-numb-song":c.currentTrackIndex+1,"total-numb-songs":c.totalNumbSongs,"is-random-tracks":c.isRandomTracks,"is-show-track-list":c.isShowTrackList,"is-repeat-mode":c.isRepeatMode,"is-dark-theme":c.isDarkTheme,onRepeatModeClick:c.repeatModeChange,onRandomClick:c.handlerRandomBtn,onShowListClick:c.handlerShowListBtn,onChangeTheme:c.handlerChangeThemeBtn},null,8,["current-numb-song","total-numb-songs","is-random-tracks","is-show-track-list","is-repeat-mode","is-dark-theme","onRepeatModeClick","onRandomClick","onShowListClick","onChangeTheme"]),J("audio",{ref:"audioPlayer",src:c.pathToCurrentFile,preload:"metadata",onVolumechange:e[0]||(e[0]=(...g)=>c.onVolumeUpdate&&c.onVolumeUpdate(...g)),onTimeupdate:e[1]||(e[1]=(...g)=>c.onTimeUpdate&&c.onTimeUpdate(...g)),onCanplay:e[2]||(e[2]=(...g)=>c.handlerCanPlay&&c.handlerCanPlay(...g)),onEnded:e[3]||(e[3]=(...g)=>c.handlerEnded&&c.handlerEnded(...g))},null,40,sv)]),_:1})])],2)}const jc=V1(U0,[["render",iv]]);function o7(c,e){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(c);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),a.push.apply(a,n)}return a}function B(c){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?o7(Object(a),!0).forEach(function(n){g2(c,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):o7(Object(a)).forEach(function(n){Object.defineProperty(c,n,Object.getOwnPropertyDescriptor(a,n))})}return c}function P3(c){"@babel/helpers - typeof";return P3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P3(c)}function tv(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function l7(c,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(c,n.key,n)}}function ov(c,e,a){return e&&l7(c.prototype,e),a&&l7(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function g2(c,e,a){return e in c?Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[e]=a,c}function q0(c,e){return fv(c)||mv(c,e)||Yc(c,e)||vv()}function j4(c){return lv(c)||hv(c)||Yc(c)||uv()}function lv(c){if(Array.isArray(c))return o0(c)}function fv(c){if(Array.isArray(c))return c}function hv(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function mv(c,e){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var n=[],r=!0,s=!1,i,t;try{for(a=a.call(c);!(r=(i=a.next()).done)&&(n.push(i.value),!(e&&n.length===e));r=!0);}catch(o){s=!0,t=o}finally{try{!r&&a.return!=null&&a.return()}finally{if(s)throw t}}return n}}function Yc(c,e){if(c){if(typeof c=="string")return o0(c,e);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o0(c,e)}}function o0(c,e){(e==null||e>c.length)&&(e=c.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=c[a];return n}function uv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var f7=function(){},G0={},Kc={},Xc=null,Qc={mark:f7,measure:f7};try{typeof window<"u"&&(G0=window),typeof document<"u"&&(Kc=document),typeof MutationObserver<"u"&&(Xc=MutationObserver),typeof performance<"u"&&(Qc=performance)}catch{}var dv=G0.navigator||{},h7=dv.userAgent,m7=h7===void 0?"":h7,I1=G0,f2=Kc,u7=Xc,l3=Qc;I1.document;var M1=!!f2.documentElement&&!!f2.head&&typeof f2.addEventListener=="function"&&typeof f2.createElement=="function",Jc=~m7.indexOf("MSIE")||~m7.indexOf("Trident/"),f3,h3,m3,u3,v3,d1="___FONT_AWESOME___",l0=16,Zc="fa",c9="svg-inline--fa",Q1="data-fa-i2svg",f0="data-fa-pseudo-element",Hv="data-fa-pseudo-element-pending",j0="data-prefix",Y0="data-icon",v7="fontawesome-i2svg",zv="async",pv=["HTML","HEAD","STYLE","SCRIPT"],e9=function(){try{return!0}catch{return!1}}(),l2="classic",d2="sharp",K0=[l2,d2];function Y4(c){return new Proxy(c,{get:function(a,n){return n in a?a[n]:a[l2]}})}var O4=Y4((f3={},g2(f3,l2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),g2(f3,d2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),f3)),W4=Y4((h3={},g2(h3,l2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),g2(h3,d2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),h3)),$4=Y4((m3={},g2(m3,l2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),g2(m3,d2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),m3)),Vv=Y4((u3={},g2(u3,l2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),g2(u3,d2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),u3)),Mv=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,a9="fa-layers-text",gv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Cv=Y4((v3={},g2(v3,l2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),g2(v3,d2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),v3)),n9=[1,2,3,4,5,6,7,8,9,10],Lv=n9.concat([11,12,13,14,15,16,17,18,19,20]),yv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},U4=new Set;Object.keys(W4[l2]).map(U4.add.bind(U4));Object.keys(W4[d2]).map(U4.add.bind(U4));var bv=[].concat(K0,j4(U4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G1.GROUP,G1.SWAP_OPACITY,G1.PRIMARY,G1.SECONDARY]).concat(n9.map(function(c){return"".concat(c,"x")})).concat(Lv.map(function(c){return"w-".concat(c)})),A4=I1.FontAwesomeConfig||{};function wv(c){var e=f2.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function xv(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(f2&&typeof f2.querySelector=="function"){var kv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];kv.forEach(function(c){var e=q0(c,2),a=e[0],n=e[1],r=xv(wv(a));r!=null&&(A4[n]=r)})}var r9={styleDefault:"solid",familyDefault:"classic",cssPrefix:Zc,replacementClass:c9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};A4.familyPrefix&&(A4.cssPrefix=A4.familyPrefix);var d4=B(B({},r9),A4);d4.autoReplaceSvg||(d4.observeMutations=!1);var E={};Object.keys(r9).forEach(function(c){Object.defineProperty(E,c,{enumerable:!0,set:function(a){d4[c]=a,T4.forEach(function(n){return n(E)})},get:function(){return d4[c]}})});Object.defineProperty(E,"familyPrefix",{enumerable:!0,set:function(e){d4.cssPrefix=e,T4.forEach(function(a){return a(E)})},get:function(){return d4.cssPrefix}});I1.FontAwesomeConfig=E;var T4=[];function Nv(c){return T4.push(c),function(){T4.splice(T4.indexOf(c),1)}}var w1=l0,s1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Sv(c){if(!(!c||!M1)){var e=f2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var a=f2.head.childNodes,n=null,r=a.length-1;r>-1;r--){var s=a[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=s)}return f2.head.insertBefore(e,n),c}}var Av="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function q4(){for(var c=12,e="";c-- >0;)e+=Av[Math.random()*62|0];return e}function M4(c){for(var e=[],a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function X0(c){return c.classList?M4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function s9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Tv(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(s9(c[a]),'" ')},"").trim()}function a6(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(c[a].trim(),";")},"")}function Q0(c){return c.size!==s1.size||c.x!==s1.x||c.y!==s1.y||c.rotate!==s1.rotate||c.flipX||c.flipY}function Pv(c){var e=c.transform,a=c.containerWidth,n=c.iconWidth,r={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),t="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(s," ").concat(i," ").concat(t)},f={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:o,path:f}}function Bv(c){var e=c.transform,a=c.width,n=a===void 0?l0:a,r=c.height,s=r===void 0?l0:r,i=c.startCentered,t=i===void 0?!1:i,o="";return t&&Jc?o+="translate(".concat(e.x/w1-n/2,"em, ").concat(e.y/w1-s/2,"em) "):t?o+="translate(calc(-50% + ".concat(e.x/w1,"em), calc(-50% + ").concat(e.y/w1,"em)) "):o+="translate(".concat(e.x/w1,"em, ").concat(e.y/w1,"em) "),o+="scale(".concat(e.size/w1*(e.flipX?-1:1),", ").concat(e.size/w1*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Iv=`:root, :host {
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
}`;function i9(){var c=Zc,e=c9,a=E.cssPrefix,n=E.replacementClass,r=Iv;if(a!==c||n!==e){var s=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(t,".".concat(n))}return r}var d7=!1;function F6(){E.autoAddCss&&!d7&&(Sv(i9()),d7=!0)}var Fv={mixout:function(){return{dom:{css:i9,insertCss:F6}}},hooks:function(){return{beforeDOMElementCreation:function(){F6()},beforeI2svg:function(){F6()}}}},H1=I1||{};H1[d1]||(H1[d1]={});H1[d1].styles||(H1[d1].styles={});H1[d1].hooks||(H1[d1].hooks={});H1[d1].shims||(H1[d1].shims=[]);var X2=H1[d1],t9=[],Rv=function c(){f2.removeEventListener("DOMContentLoaded",c),B3=1,t9.map(function(e){return e()})},B3=!1;M1&&(B3=(f2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(f2.readyState),B3||f2.addEventListener("DOMContentLoaded",Rv));function Ev(c){M1&&(B3?setTimeout(c,0):t9.push(c))}function K4(c){var e=c.tag,a=c.attributes,n=a===void 0?{}:a,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?s9(c):"<".concat(e," ").concat(Tv(n),">").concat(s.map(K4).join(""),"</").concat(e,">")}function H7(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var Dv=function(e,a){return function(n,r,s,i){return e.call(a,n,r,s,i)}},R6=function(e,a,n,r){var s=Object.keys(e),i=s.length,t=r!==void 0?Dv(a,r):a,o,f,l;for(n===void 0?(o=1,l=e[s[0]]):(o=0,l=n);o<i;o++)f=s[o],l=t(l,e[f],f,e);return l};function _v(c){for(var e=[],a=0,n=c.length;a<n;){var r=c.charCodeAt(a++);if(r>=55296&&r<=56319&&a<n){var s=c.charCodeAt(a++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),a--)}else e.push(r)}return e}function h0(c){var e=_v(c);return e.length===1?e[0].toString(16):null}function Ov(c,e){var a=c.length,n=c.charCodeAt(e),r;return n>=55296&&n<=56319&&a>e+1&&(r=c.charCodeAt(e+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function z7(c){return Object.keys(c).reduce(function(e,a){var n=c[a],r=!!n.icon;return r?e[n.iconName]=n.icon:e[a]=n,e},{})}function m0(c,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,s=z7(e);typeof X2.hooks.addPack=="function"&&!r?X2.hooks.addPack(c,z7(e)):X2.styles[c]=B(B({},X2.styles[c]||{}),s),c==="fas"&&m0("fa",e)}var d3,H3,z3,n4=X2.styles,Wv=X2.shims,$v=(d3={},g2(d3,l2,Object.values($4[l2])),g2(d3,d2,Object.values($4[d2])),d3),J0=null,o9={},l9={},f9={},h9={},m9={},Uv=(H3={},g2(H3,l2,Object.keys(O4[l2])),g2(H3,d2,Object.keys(O4[d2])),H3);function qv(c){return~bv.indexOf(c)}function Gv(c,e){var a=e.split("-"),n=a[0],r=a.slice(1).join("-");return n===c&&r!==""&&!qv(r)?r:null}var u9=function(){var e=function(s){return R6(n4,function(i,t,o){return i[o]=R6(t,s,{}),i},{})};o9=e(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var t=s[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){r[o.toString(16)]=i})}return r}),l9=e(function(r,s,i){if(r[i]=i,s[2]){var t=s[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){r[o]=i})}return r}),m9=e(function(r,s,i){var t=s[2];return r[i]=i,t.forEach(function(o){r[o]=i}),r});var a="far"in n4||E.autoFetchSvg,n=R6(Wv,function(r,s){var i=s[0],t=s[1],o=s[2];return t==="far"&&!a&&(t="fas"),typeof i=="string"&&(r.names[i]={prefix:t,iconName:o}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:t,iconName:o}),r},{names:{},unicodes:{}});f9=n.names,h9=n.unicodes,J0=n6(E.styleDefault,{family:E.familyDefault})};Nv(function(c){J0=n6(c.styleDefault,{family:E.familyDefault})});u9();function Z0(c,e){return(o9[c]||{})[e]}function jv(c,e){return(l9[c]||{})[e]}function j1(c,e){return(m9[c]||{})[e]}function v9(c){return f9[c]||{prefix:null,iconName:null}}function Yv(c){var e=h9[c],a=Z0("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function F1(){return J0}var c8=function(){return{prefix:null,iconName:null,rest:[]}};function n6(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,n=a===void 0?l2:a,r=O4[n][c],s=W4[n][c]||W4[n][r],i=c in X2.styles?c:null;return s||i||null}var p7=(z3={},g2(z3,l2,Object.keys($4[l2])),g2(z3,d2,Object.keys($4[d2])),z3);function r6(c){var e,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.skipLookups,r=n===void 0?!1:n,s=(e={},g2(e,l2,"".concat(E.cssPrefix,"-").concat(l2)),g2(e,d2,"".concat(E.cssPrefix,"-").concat(d2)),e),i=null,t=l2;(c.includes(s[l2])||c.some(function(f){return p7[l2].includes(f)}))&&(t=l2),(c.includes(s[d2])||c.some(function(f){return p7[d2].includes(f)}))&&(t=d2);var o=c.reduce(function(f,l){var m=Gv(E.cssPrefix,l);if(n4[l]?(l=$v[t].includes(l)?Vv[t][l]:l,i=l,f.prefix=l):Uv[t].indexOf(l)>-1?(i=l,f.prefix=n6(l,{family:t})):m?f.iconName=m:l!==E.replacementClass&&l!==s[l2]&&l!==s[d2]&&f.rest.push(l),!r&&f.prefix&&f.iconName){var v=i==="fa"?v9(f.iconName):{},H=j1(f.prefix,f.iconName);v.prefix&&(i=null),f.iconName=v.iconName||H||f.iconName,f.prefix=v.prefix||f.prefix,f.prefix==="far"&&!n4.far&&n4.fas&&!E.autoFetchSvg&&(f.prefix="fas")}return f},c8());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===d2&&(n4.fass||E.autoFetchSvg)&&(o.prefix="fass",o.iconName=j1(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=F1()||"fas"),o}var Kv=function(){function c(){tv(this,c),this.definitions={}}return ov(c,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(t){a.definitions[t]=B(B({},a.definitions[t]||{}),i[t]),m0(t,i[t]);var o=$4[l2][t];o&&m0(o,i[t]),u9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(s){var i=r[s],t=i.prefix,o=i.iconName,f=i.icon,l=f[2];a[t]||(a[t]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(a[t][m]=f)}),a[t][o]=f}),a}}]),c}(),V7=[],r4={},f4={},Xv=Object.keys(f4);function Qv(c,e){var a=e.mixoutsTo;return V7=c,r4={},Object.keys(f4).forEach(function(n){Xv.indexOf(n)===-1&&delete f4[n]}),V7.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),P3(r[i])==="object"&&Object.keys(r[i]).forEach(function(t){a[i]||(a[i]={}),a[i][t]=r[i][t]})}),n.hooks){var s=n.hooks();Object.keys(s).forEach(function(i){r4[i]||(r4[i]=[]),r4[i].push(s[i])})}n.provides&&n.provides(f4)}),a}function u0(c,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var s=r4[c]||[];return s.forEach(function(i){e=i.apply(null,[e].concat(n))}),e}function J1(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];var r=r4[c]||[];r.forEach(function(s){s.apply(null,a)})}function z1(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return f4[c]?f4[c].apply(null,e):void 0}function v0(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,a=c.prefix||F1();if(e)return e=j1(a,e)||e,H7(d9.definitions,a,e)||H7(X2.styles,a,e)}var d9=new Kv,Jv=function(){E.autoReplaceSvg=!1,E.observeMutations=!1,J1("noAuto")},Zv={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M1?(J1("beforeI2svg",e),z1("pseudoElements2svg",e),z1("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;E.autoReplaceSvg===!1&&(E.autoReplaceSvg=!0),E.observeMutations=!0,Ev(function(){ed({autoReplaceSvgRoot:a}),J1("watch",e)})}},cd={icon:function(e){if(e===null)return null;if(P3(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:j1(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=n6(e[0]);return{prefix:n,iconName:j1(n,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(E.cssPrefix,"-"))>-1||e.match(Mv))){var r=r6(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||F1(),iconName:j1(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=F1();return{prefix:s,iconName:j1(s,e)||e}}}},E2={noAuto:Jv,config:E,dom:Zv,parse:cd,library:d9,findIconDefinition:v0,toHtml:K4},ed=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,n=a===void 0?f2:a;(Object.keys(X2.styles).length>0||E.autoFetchSvg)&&M1&&E.autoReplaceSvg&&E2.dom.i2svg({node:n})};function s6(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(n){return K4(n)})}}),Object.defineProperty(c,"node",{get:function(){if(M1){var n=f2.createElement("div");return n.innerHTML=c.html,n.children}}}),c}function ad(c){var e=c.children,a=c.main,n=c.mask,r=c.attributes,s=c.styles,i=c.transform;if(Q0(i)&&a.found&&!n.found){var t=a.width,o=a.height,f={x:t/o/2,y:.5};r.style=a6(B(B({},s),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function nd(c){var e=c.prefix,a=c.iconName,n=c.children,r=c.attributes,s=c.symbol,i=s===!0?"".concat(e,"-").concat(E.cssPrefix,"-").concat(a):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B(B({},r),{},{id:i}),children:n}]}]}function e8(c){var e=c.icons,a=e.main,n=e.mask,r=c.prefix,s=c.iconName,i=c.transform,t=c.symbol,o=c.title,f=c.maskId,l=c.titleId,m=c.extra,v=c.watchable,H=v===void 0?!1:v,b=n.found?n:a,g=b.width,I=b.height,p=r==="fak",V=[E.replacementClass,s?"".concat(E.cssPrefix,"-").concat(s):""].filter(function(Y){return m.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(m.classes).join(" "),w={children:[],attributes:B(B({},m.attributes),{},{"data-prefix":r,"data-icon":s,class:V,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(I)})},x=p&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/I*16*.0625,"em")}:{};H&&(w.attributes[Q1]=""),o&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(l||q4())},children:[o]}),delete w.attributes.title);var N=B(B({},w),{},{prefix:r,iconName:s,main:a,mask:n,maskId:f,transform:i,symbol:t,styles:B(B({},x),m.styles)}),q=n.found&&a.found?z1("generateAbstractMask",N)||{children:[],attributes:{}}:z1("generateAbstractIcon",N)||{children:[],attributes:{}},X=q.children,$=q.attributes;return N.children=X,N.attributes=$,t?nd(N):ad(N)}function M7(c){var e=c.content,a=c.width,n=c.height,r=c.transform,s=c.title,i=c.extra,t=c.watchable,o=t===void 0?!1:t,f=B(B(B({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});o&&(f[Q1]="");var l=B({},i.styles);Q0(r)&&(l.transform=Bv({transform:r,startCentered:!0,width:a,height:n}),l["-webkit-transform"]=l.transform);var m=a6(l);m.length>0&&(f.style=m);var v=[];return v.push({tag:"span",attributes:f,children:[e]}),s&&v.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),v}function rd(c){var e=c.content,a=c.title,n=c.extra,r=B(B(B({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),s=a6(n.styles);s.length>0&&(r.style=s);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var E6=X2.styles;function d0(c){var e=c[0],a=c[1],n=c.slice(4),r=q0(n,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(E.cssPrefix,"-").concat(G1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(E.cssPrefix,"-").concat(G1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(E.cssPrefix,"-").concat(G1.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:a,icon:i}}var sd={found:!1,width:512,height:512};function id(c,e){!e9&&!E.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function H0(c,e){var a=e;return e==="fa"&&E.styleDefault!==null&&(e=F1()),new Promise(function(n,r){if(z1("missingIconAbstract"),a==="fa"){var s=v9(c)||{};c=s.iconName||c,e=s.prefix||e}if(c&&e&&E6[e]&&E6[e][c]){var i=E6[e][c];return n(d0(i))}id(c,e),n(B(B({},sd),{},{icon:E.showMissingIcons&&c?z1("missingIconAbstract")||{}:{}}))})}var g7=function(){},z0=E.measurePerformance&&l3&&l3.mark&&l3.measure?l3:{mark:g7,measure:g7},x4='FA "6.5.1"',td=function(e){return z0.mark("".concat(x4," ").concat(e," begins")),function(){return H9(e)}},H9=function(e){z0.mark("".concat(x4," ").concat(e," ends")),z0.measure("".concat(x4," ").concat(e),"".concat(x4," ").concat(e," begins"),"".concat(x4," ").concat(e," ends"))},a8={begin:td,end:H9},y3=function(){};function C7(c){var e=c.getAttribute?c.getAttribute(Q1):null;return typeof e=="string"}function od(c){var e=c.getAttribute?c.getAttribute(j0):null,a=c.getAttribute?c.getAttribute(Y0):null;return e&&a}function ld(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(E.replacementClass)}function fd(){if(E.autoReplaceSvg===!0)return b3.replace;var c=b3[E.autoReplaceSvg];return c||b3.replace}function hd(c){return f2.createElementNS("http://www.w3.org/2000/svg",c)}function md(c){return f2.createElement(c)}function z9(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,n=a===void 0?c.tag==="svg"?hd:md:a;if(typeof c=="string")return f2.createTextNode(c);var r=n(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var s=c.children||[];return s.forEach(function(i){r.appendChild(z9(i,{ceFn:n}))}),r}function ud(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var b3={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(r){a.parentNode.insertBefore(z9(r),a)}),a.getAttribute(Q1)===null&&E.keepOriginalSource){var n=f2.createComment(ud(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(e){var a=e[0],n=e[1];if(~X0(a).indexOf(E.replacementClass))return b3.replace(e);var r=new RegExp("".concat(E.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var s=n[0].attributes.class.split(" ").reduce(function(t,o){return o===E.replacementClass||o.match(r)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",s.toNode.join(" "))}var i=n.map(function(t){return K4(t)}).join(`
`);a.setAttribute(Q1,""),a.innerHTML=i}};function L7(c){c()}function p9(c,e){var a=typeof e=="function"?e:y3;if(c.length===0)a();else{var n=L7;E.mutateApproach===zv&&(n=I1.requestAnimationFrame||L7),n(function(){var r=fd(),s=a8.begin("mutate");c.map(r),s(),a()})}}var n8=!1;function V9(){n8=!0}function p0(){n8=!1}var I3=null;function y7(c){if(u7&&E.observeMutations){var e=c.treeCallback,a=e===void 0?y3:e,n=c.nodeCallback,r=n===void 0?y3:n,s=c.pseudoElementsCallback,i=s===void 0?y3:s,t=c.observeMutationsRoot,o=t===void 0?f2:t;I3=new u7(function(f){if(!n8){var l=F1();M4(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!C7(m.addedNodes[0])&&(E.searchPseudoElements&&i(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&E.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&C7(m.target)&&~yv.indexOf(m.attributeName))if(m.attributeName==="class"&&od(m.target)){var v=r6(X0(m.target)),H=v.prefix,b=v.iconName;m.target.setAttribute(j0,H||l),b&&m.target.setAttribute(Y0,b)}else ld(m.target)&&r(m.target)})}}),M1&&I3.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vd(){I3&&I3.disconnect()}function dd(c){var e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(n,r){var s=r.split(":"),i=s[0],t=s.slice(1);return i&&t.length>0&&(n[i]=t.join(":").trim()),n},{})),a}function Hd(c){var e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),n=c.innerText!==void 0?c.innerText.trim():"",r=r6(X0(c));return r.prefix||(r.prefix=F1()),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=jv(r.prefix,c.innerText)||Z0(r.prefix,h0(c.innerText))),!r.iconName&&E.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function zd(c){var e=M4(c.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),a=c.getAttribute("title"),n=c.getAttribute("data-fa-title-id");return E.autoA11y&&(a?e["aria-labelledby"]="".concat(E.replacementClass,"-title-").concat(n||q4()):(e["aria-hidden"]="true",e.focusable="false")),e}function pd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:s1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function b7(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Hd(c),n=a.iconName,r=a.prefix,s=a.rest,i=zd(c),t=u0("parseNodeAttributes",{},c),o=e.styleParser?dd(c):[];return B({iconName:n,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:s1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:i}},t)}var Vd=X2.styles;function M9(c){var e=E.autoReplaceSvg==="nest"?b7(c,{styleParser:!1}):b7(c);return~e.extra.classes.indexOf(a9)?z1("generateLayersText",c,e):z1("generateSvgReplacementMutation",c,e)}var R1=new Set;K0.map(function(c){R1.add("fa-".concat(c))});Object.keys(O4[l2]).map(R1.add.bind(R1));Object.keys(O4[d2]).map(R1.add.bind(R1));R1=j4(R1);function w7(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M1)return Promise.resolve();var a=f2.documentElement.classList,n=function(m){return a.add("".concat(v7,"-").concat(m))},r=function(m){return a.remove("".concat(v7,"-").concat(m))},s=E.autoFetchSvg?R1:K0.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Vd));s.includes("fa")||s.push("fa");var i=[".".concat(a9,":not([").concat(Q1,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(Q1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var t=[];try{t=M4(c.querySelectorAll(i))}catch{}if(t.length>0)n("pending"),r("complete");else return Promise.resolve();var o=a8.begin("onTree"),f=t.reduce(function(l,m){try{var v=M9(m);v&&l.push(v)}catch(H){e9||H.name==="MissingIcon"&&console.error(H)}return l},[]);return new Promise(function(l,m){Promise.all(f).then(function(v){p9(v,function(){n("active"),n("complete"),r("pending"),typeof e=="function"&&e(),o(),l()})}).catch(function(v){o(),m(v)})})}function Md(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;M9(c).then(function(a){a&&p9([a],e)})}function gd(c){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:v0(e||{}),r=a.mask;return r&&(r=(r||{}).icon?r:v0(r||{})),c(n,B(B({},a),{},{mask:r}))}}var Cd=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?s1:n,s=a.symbol,i=s===void 0?!1:s,t=a.mask,o=t===void 0?null:t,f=a.maskId,l=f===void 0?null:f,m=a.title,v=m===void 0?null:m,H=a.titleId,b=H===void 0?null:H,g=a.classes,I=g===void 0?[]:g,p=a.attributes,V=p===void 0?{}:p,w=a.styles,x=w===void 0?{}:w;if(e){var N=e.prefix,q=e.iconName,X=e.icon;return s6(B({type:"icon"},e),function(){return J1("beforeDOMElementCreation",{iconDefinition:e,params:a}),E.autoA11y&&(v?V["aria-labelledby"]="".concat(E.replacementClass,"-title-").concat(b||q4()):(V["aria-hidden"]="true",V.focusable="false")),e8({icons:{main:d0(X),mask:o?d0(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:q,transform:B(B({},s1),r),symbol:i,title:v,maskId:l,titleId:b,extra:{attributes:V,styles:x,classes:I}})})}},Ld={mixout:function(){return{icon:gd(Cd)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=w7,a.nodeCallback=Md,a}}},provides:function(e){e.i2svg=function(a){var n=a.node,r=n===void 0?f2:n,s=a.callback,i=s===void 0?function(){}:s;return w7(r,i)},e.generateSvgReplacementMutation=function(a,n){var r=n.iconName,s=n.title,i=n.titleId,t=n.prefix,o=n.transform,f=n.symbol,l=n.mask,m=n.maskId,v=n.extra;return new Promise(function(H,b){Promise.all([H0(r,t),l.iconName?H0(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var I=q0(g,2),p=I[0],V=I[1];H([a,e8({icons:{main:p,mask:V},prefix:t,iconName:r,transform:o,symbol:f,maskId:m,title:s,titleId:i,extra:v,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,s=a.main,i=a.transform,t=a.styles,o=a6(t);o.length>0&&(r.style=o);var f;return Q0(i)&&(f=z1("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(f||s.icon),{children:n,attributes:r}}}},yd={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,s=r===void 0?[]:r;return s6({type:"layer"},function(){J1("beforeDOMElementCreation",{assembler:a,params:n});var i=[];return a(function(t){Array.isArray(t)?t.map(function(o){i=i.concat(o.abstract)}):i=i.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(E.cssPrefix,"-layers")].concat(j4(s)).join(" ")},children:i}]})}}}},bd={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,s=r===void 0?null:r,i=n.classes,t=i===void 0?[]:i,o=n.attributes,f=o===void 0?{}:o,l=n.styles,m=l===void 0?{}:l;return s6({type:"counter",content:a},function(){return J1("beforeDOMElementCreation",{content:a,params:n}),rd({content:a.toString(),title:s,extra:{attributes:f,styles:m,classes:["".concat(E.cssPrefix,"-layers-counter")].concat(j4(t))}})})}}}},wd={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?s1:r,i=n.title,t=i===void 0?null:i,o=n.classes,f=o===void 0?[]:o,l=n.attributes,m=l===void 0?{}:l,v=n.styles,H=v===void 0?{}:v;return s6({type:"text",content:a},function(){return J1("beforeDOMElementCreation",{content:a,params:n}),M7({content:a,transform:B(B({},s1),s),title:t,extra:{attributes:m,styles:H,classes:["".concat(E.cssPrefix,"-layers-text")].concat(j4(f))}})})}}},provides:function(e){e.generateLayersText=function(a,n){var r=n.title,s=n.transform,i=n.extra,t=null,o=null;if(Jc){var f=parseInt(getComputedStyle(a).fontSize,10),l=a.getBoundingClientRect();t=l.width/f,o=l.height/f}return E.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,M7({content:a.innerHTML,width:t,height:o,transform:s,title:r,extra:i,watchable:!0})])}}},xd=new RegExp('"',"ug"),x7=[1105920,1112319];function kd(c){var e=c.replace(xd,""),a=Ov(e,0),n=a>=x7[0]&&a<=x7[1],r=e.length===2?e[0]===e[1]:!1;return{value:h0(r?e[0]:e),isSecondary:n||r}}function k7(c,e){var a="".concat(Hv).concat(e.replace(":","-"));return new Promise(function(n,r){if(c.getAttribute(a)!==null)return n();var s=M4(c.children),i=s.filter(function(X){return X.getAttribute(f0)===e})[0],t=I1.getComputedStyle(c,e),o=t.getPropertyValue("font-family").match(gv),f=t.getPropertyValue("font-weight"),l=t.getPropertyValue("content");if(i&&!o)return c.removeChild(i),n();if(o&&l!=="none"&&l!==""){var m=t.getPropertyValue("content"),v=~["Sharp"].indexOf(o[2])?d2:l2,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?W4[v][o[2].toLowerCase()]:Cv[v][f],b=kd(m),g=b.value,I=b.isSecondary,p=o[0].startsWith("FontAwesome"),V=Z0(H,g),w=V;if(p){var x=Yv(g);x.iconName&&x.prefix&&(V=x.iconName,H=x.prefix)}if(V&&!I&&(!i||i.getAttribute(j0)!==H||i.getAttribute(Y0)!==w)){c.setAttribute(a,w),i&&c.removeChild(i);var N=pd(),q=N.extra;q.attributes[f0]=e,H0(V,H).then(function(X){var $=e8(B(B({},N),{},{icons:{main:X,mask:c8()},prefix:H,iconName:w,extra:q,watchable:!0})),Y=f2.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(Y,c.firstChild):c.appendChild(Y),Y.outerHTML=$.map(function(a2){return K4(a2)}).join(`
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}