(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();function e0(c,e){const a=Object.create(null),s=c.split(",");for(let n=0;n<s.length;n++)a[s[n]]=!0;return e?n=>!!a[n.toLowerCase()]:n=>!!a[n]}const s2={},Y1=[],c1=()=>{},Mt=()=>!1,w3=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),a0=c=>c.startsWith("onUpdate:"),z2=Object.assign,s0=(c,e)=>{const a=c.indexOf(e);a>-1&&c.splice(a,1)},Ct=Object.prototype.hasOwnProperty,K=(c,e)=>Ct.call(c,e),R=Array.isArray,K1=c=>L3(c)==="[object Map]",j5=c=>L3(c)==="[object Set]",$=c=>typeof c=="function",p2=c=>typeof c=="string",s4=c=>typeof c=="symbol",i2=c=>c!==null&&typeof c=="object",Y5=c=>(i2(c)||$(c))&&$(c.then)&&$(c.catch),K5=Object.prototype.toString,L3=c=>K5.call(c),bt=c=>L3(c).slice(8,-1),X5=c=>L3(c)==="[object Object]",n0=c=>p2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,i3=e0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),x3=c=>{const e=Object.create(null);return a=>e[a]||(e[a]=c(a))},wt=/-(\w)/g,Z1=x3(c=>c.replace(wt,(e,a)=>a?a.toUpperCase():"")),Lt=/\B([A-Z])/g,n4=x3(c=>c.replace(Lt,"-$1").toLowerCase()),J5=x3(c=>c.charAt(0).toUpperCase()+c.slice(1)),f6=x3(c=>c?`on${J5(c)}`:""),R1=(c,e)=>!Object.is(c,e),h6=(c,e)=>{for(let a=0;a<c.length;a++)c[a](e)},m3=(c,e,a)=>{Object.defineProperty(c,e,{configurable:!0,enumerable:!1,value:a})},xt=c=>{const e=parseFloat(c);return isNaN(e)?c:e},kt=c=>{const e=p2(c)?Number(c):NaN;return isNaN(e)?c:e};let W8;const w6=()=>W8||(W8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function k3(c){if(R(c)){const e={};for(let a=0;a<c.length;a++){const s=c[a],n=p2(s)?Tt(s):k3(s);if(n)for(const r in n)e[r]=n[r]}return e}else if(p2(c)||i2(c))return c}const Nt=/;(?![^(]*\))/g,St=/:([^]+)/,At=/\/\*[^]*?\*\//g;function Tt(c){const e={};return c.replace(At,"").split(Nt).forEach(a=>{if(a){const s=a.split(St);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function T2(c){let e="";if(p2(c))e=c;else if(R(c))for(let a=0;a<c.length;a++){const s=T2(c[a]);s&&(e+=s+" ")}else if(i2(c))for(const a in c)c[a]&&(e+=a+" ");return e.trim()}const It="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ft=e0(It);function Q5(c){return!!c||c===""}const P2=c=>p2(c)?c:c==null?"":R(c)||i2(c)&&(c.toString===K5||!$(c.toString))?JSON.stringify(c,Z5,2):String(c),Z5=(c,e)=>e&&e.__v_isRef?Z5(c,e.value):K1(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((a,[s,n],r)=>(a[d6(s,r)+" =>"]=n,a),{})}:j5(e)?{[`Set(${e.size})`]:[...e.values()].map(a=>d6(a))}:s4(e)?d6(e):i2(e)&&!R(e)&&!X5(e)?String(e):e,d6=(c,e="")=>{var a;return s4(c)?`Symbol(${(a=c.description)!=null?a:e})`:c};let O2;class Bt{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=O2,!e&&O2&&(this.index=(O2.scopes||(O2.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const a=O2;try{return O2=this,e()}finally{O2=a}}}on(){O2=this}off(){O2=this.parent}stop(e){if(this._active){let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.scopes)for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function Pt(c,e=O2){e&&e.active&&e.effects.push(c)}function Wt(){return O2}const r0=c=>{const e=new Set(c);return e.w=0,e.n=0,e},c7=c=>(c.w&y1)>0,e7=c=>(c.n&y1)>0,Rt=({deps:c})=>{if(c.length)for(let e=0;e<c.length;e++)c[e].w|=y1},_t=c=>{const{deps:e}=c;if(e.length){let a=0;for(let s=0;s<e.length;s++){const n=e[s];c7(n)&&!e7(n)?n.delete(c):e[a++]=n,n.w&=~y1,n.n&=~y1}e.length=a}},L6=new WeakMap;let m4=0,y1=1;const x6=30;let E2;const B1=Symbol(""),k6=Symbol("");class i0{constructor(e,a=null,s){this.fn=e,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,Pt(this,s)}run(){if(!this.active)return this.fn();let e=E2,a=z1;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=E2,E2=this,z1=!0,y1=1<<++m4,m4<=x6?Rt(this):R8(this),this.fn()}finally{m4<=x6&&_t(this),y1=1<<--m4,E2=this.parent,z1=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){E2===this?this.deferStop=!0:this.active&&(R8(this),this.onStop&&this.onStop(),this.active=!1)}}function R8(c){const{deps:e}=c;if(e.length){for(let a=0;a<e.length;a++)e[a].delete(c);e.length=0}}let z1=!0;const a7=[];function r4(){a7.push(z1),z1=!1}function i4(){const c=a7.pop();z1=c===void 0?!0:c}function N2(c,e,a){if(z1&&E2){let s=L6.get(c);s||L6.set(c,s=new Map);let n=s.get(a);n||s.set(a,n=r0()),s7(n)}}function s7(c,e){let a=!1;m4<=x6?e7(c)||(c.n|=y1,a=!c7(c)):a=!c.has(E2),a&&(c.add(E2),E2.deps.push(c))}function r1(c,e,a,s,n,r){const i=L6.get(c);if(!i)return;let o=[];if(e==="clear")o=[...i.values()];else if(a==="length"&&R(c)){const t=Number(s);i.forEach((l,h)=>{(h==="length"||!s4(h)&&h>=t)&&o.push(l)})}else switch(a!==void 0&&o.push(i.get(a)),e){case"add":R(c)?n0(a)&&o.push(i.get("length")):(o.push(i.get(B1)),K1(c)&&o.push(i.get(k6)));break;case"delete":R(c)||(o.push(i.get(B1)),K1(c)&&o.push(i.get(k6)));break;case"set":K1(c)&&o.push(i.get(B1));break}if(o.length===1)o[0]&&N6(o[0]);else{const t=[];for(const l of o)l&&t.push(...l);N6(r0(t))}}function N6(c,e){const a=R(c)?c:[...c];for(const s of a)s.computed&&_8(s);for(const s of a)s.computed||_8(s)}function _8(c,e){(c!==E2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Dt=e0("__proto__,__v_isRef,__isVue"),n7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(s4)),D8=Ot();function Ot(){const c={};return["includes","indexOf","lastIndexOf"].forEach(e=>{c[e]=function(...a){const s=X(this);for(let r=0,i=this.length;r<i;r++)N2(s,"get",r+"");const n=s[e](...a);return n===-1||n===!1?s[e](...a.map(X)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{c[e]=function(...a){r4();const s=X(this)[e].apply(this,a);return i4(),s}}),c}function Et(c){const e=X(this);return N2(e,"has",c),e.hasOwnProperty(c)}class r7{constructor(e=!1,a=!1){this._isReadonly=e,this._shallow=a}get(e,a,s){const n=this._isReadonly,r=this._shallow;if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return r;if(a==="__v_raw")return s===(n?r?el:l7:r?t7:o7).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const i=R(e);if(!n){if(i&&K(D8,a))return Reflect.get(D8,a,s);if(a==="hasOwnProperty")return Et}const o=Reflect.get(e,a,s);return(s4(a)?n7.has(a):Dt(a))||(n||N2(e,"get",a),r)?o:S2(o)?i&&n0(a)?o:o.value:i2(o)?n?f7(o):l0(o):o}}class i7 extends r7{constructor(e=!1){super(!1,e)}set(e,a,s,n){let r=e[a];if(!this._shallow){const t=c4(r);if(!u3(s)&&!c4(s)&&(r=X(r),s=X(s)),!R(e)&&S2(r)&&!S2(s))return t?!1:(r.value=s,!0)}const i=R(e)&&n0(a)?Number(a)<e.length:K(e,a),o=Reflect.set(e,a,s,n);return e===X(n)&&(i?R1(s,r)&&r1(e,"set",a,s):r1(e,"add",a,s)),o}deleteProperty(e,a){const s=K(e,a);e[a];const n=Reflect.deleteProperty(e,a);return n&&s&&r1(e,"delete",a,void 0),n}has(e,a){const s=Reflect.has(e,a);return(!s4(a)||!n7.has(a))&&N2(e,"has",a),s}ownKeys(e){return N2(e,"iterate",R(e)?"length":B1),Reflect.ownKeys(e)}}class Ut extends r7{constructor(e=!1){super(!0,e)}set(e,a){return!0}deleteProperty(e,a){return!0}}const $t=new i7,qt=new Ut,Gt=new i7(!0),o0=c=>c,N3=c=>Reflect.getPrototypeOf(c);function E4(c,e,a=!1,s=!1){c=c.__v_raw;const n=X(c),r=X(e);a||(R1(e,r)&&N2(n,"get",e),N2(n,"get",r));const{has:i}=N3(n),o=s?o0:a?h0:y4;if(i.call(n,e))return o(c.get(e));if(i.call(n,r))return o(c.get(r));c!==n&&c.get(e)}function U4(c,e=!1){const a=this.__v_raw,s=X(a),n=X(c);return e||(R1(c,n)&&N2(s,"has",c),N2(s,"has",n)),c===n?a.has(c):a.has(c)||a.has(n)}function $4(c,e=!1){return c=c.__v_raw,!e&&N2(X(c),"iterate",B1),Reflect.get(c,"size",c)}function O8(c){c=X(c);const e=X(this);return N3(e).has.call(e,c)||(e.add(c),r1(e,"add",c,c)),this}function E8(c,e){e=X(e);const a=X(this),{has:s,get:n}=N3(a);let r=s.call(a,c);r||(c=X(c),r=s.call(a,c));const i=n.call(a,c);return a.set(c,e),r?R1(e,i)&&r1(a,"set",c,e):r1(a,"add",c,e),this}function U8(c){const e=X(this),{has:a,get:s}=N3(e);let n=a.call(e,c);n||(c=X(c),n=a.call(e,c)),s&&s.call(e,c);const r=e.delete(c);return n&&r1(e,"delete",c,void 0),r}function $8(){const c=X(this),e=c.size!==0,a=c.clear();return e&&r1(c,"clear",void 0,void 0),a}function q4(c,e){return function(s,n){const r=this,i=r.__v_raw,o=X(i),t=e?o0:c?h0:y4;return!c&&N2(o,"iterate",B1),i.forEach((l,h)=>s.call(n,t(l),t(h),r))}}function G4(c,e,a){return function(...s){const n=this.__v_raw,r=X(n),i=K1(r),o=c==="entries"||c===Symbol.iterator&&i,t=c==="keys"&&i,l=n[c](...s),h=a?o0:e?h0:y4;return!e&&N2(r,"iterate",t?k6:B1),{next(){const{value:u,done:m}=l.next();return m?{value:u,done:m}:{value:o?[h(u[0]),h(u[1])]:h(u),done:m}},[Symbol.iterator](){return this}}}}function h1(c){return function(...e){return c==="delete"?!1:c==="clear"?void 0:this}}function jt(){const c={get(r){return E4(this,r)},get size(){return $4(this)},has:U4,add:O8,set:E8,delete:U8,clear:$8,forEach:q4(!1,!1)},e={get(r){return E4(this,r,!1,!0)},get size(){return $4(this)},has:U4,add:O8,set:E8,delete:U8,clear:$8,forEach:q4(!1,!0)},a={get(r){return E4(this,r,!0)},get size(){return $4(this,!0)},has(r){return U4.call(this,r,!0)},add:h1("add"),set:h1("set"),delete:h1("delete"),clear:h1("clear"),forEach:q4(!0,!1)},s={get(r){return E4(this,r,!0,!0)},get size(){return $4(this,!0)},has(r){return U4.call(this,r,!0)},add:h1("add"),set:h1("set"),delete:h1("delete"),clear:h1("clear"),forEach:q4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{c[r]=G4(r,!1,!1),a[r]=G4(r,!0,!1),e[r]=G4(r,!1,!0),s[r]=G4(r,!0,!0)}),[c,a,e,s]}const[Yt,Kt,Xt,Jt]=jt();function t0(c,e){const a=e?c?Jt:Xt:c?Kt:Yt;return(s,n,r)=>n==="__v_isReactive"?!c:n==="__v_isReadonly"?c:n==="__v_raw"?s:Reflect.get(K(a,n)&&n in s?a:s,n,r)}const Qt={get:t0(!1,!1)},Zt={get:t0(!1,!0)},cl={get:t0(!0,!1)},o7=new WeakMap,t7=new WeakMap,l7=new WeakMap,el=new WeakMap;function al(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sl(c){return c.__v_skip||!Object.isExtensible(c)?0:al(bt(c))}function l0(c){return c4(c)?c:f0(c,!1,$t,Qt,o7)}function nl(c){return f0(c,!1,Gt,Zt,t7)}function f7(c){return f0(c,!0,qt,cl,l7)}function f0(c,e,a,s,n){if(!i2(c)||c.__v_raw&&!(e&&c.__v_isReactive))return c;const r=n.get(c);if(r)return r;const i=sl(c);if(i===0)return c;const o=new Proxy(c,i===2?s:a);return n.set(c,o),o}function X1(c){return c4(c)?X1(c.__v_raw):!!(c&&c.__v_isReactive)}function c4(c){return!!(c&&c.__v_isReadonly)}function u3(c){return!!(c&&c.__v_isShallow)}function h7(c){return X1(c)||c4(c)}function X(c){const e=c&&c.__v_raw;return e?X(e):c}function d7(c){return m3(c,"__v_skip",!0),c}const y4=c=>i2(c)?l0(c):c,h0=c=>i2(c)?f7(c):c;function m7(c){z1&&E2&&(c=X(c),s7(c.dep||(c.dep=r0())))}function u7(c,e){c=X(c);const a=c.dep;a&&N6(a)}function S2(c){return!!(c&&c.__v_isRef===!0)}function d2(c){return rl(c,!1)}function rl(c,e){return S2(c)?c:new il(c,e)}class il{constructor(e,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?e:X(e),this._value=a?e:y4(e)}get value(){return m7(this),this._value}set value(e){const a=this.__v_isShallow||u3(e)||c4(e);e=a?e:X(e),R1(e,this._rawValue)&&(this._rawValue=e,this._value=a?e:y4(e),u7(this))}}function V2(c){return S2(c)?c.value:c}const ol={get:(c,e,a)=>V2(Reflect.get(c,e,a)),set:(c,e,a,s)=>{const n=c[e];return S2(n)&&!S2(a)?(n.value=a,!0):Reflect.set(c,e,a,s)}};function v7(c){return X1(c)?c:new Proxy(c,ol)}class tl{constructor(e,a,s,n){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new i0(e,()=>{this._dirty||(this._dirty=!0,u7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=s}get value(){const e=X(this);return m7(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ll(c,e,a=!1){let s,n;const r=$(c);return r?(s=c,n=c1):(s=c.get,n=c.set),new tl(s,n,r||!n,a)}function g1(c,e,a,s){let n;try{n=s?c(...s):c()}catch(r){S3(r,e,a)}return n}function W2(c,e,a,s){if($(c)){const r=g1(c,e,a,s);return r&&Y5(r)&&r.catch(i=>{S3(i,e,a)}),r}const n=[];for(let r=0;r<c.length;r++)n.push(W2(c[r],e,a,s));return n}function S3(c,e,a,s=!0){const n=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=a;for(;r;){const l=r.ec;if(l){for(let h=0;h<l.length;h++)if(l[h](c,i,o)===!1)return}r=r.parent}const t=e.appContext.config.errorHandler;if(t){g1(t,null,10,[c,i,o]);return}}fl(c,a,n,s)}function fl(c,e,a,s=!0){console.error(c)}let V4=!1,S6=!1;const C2=[];let Q2=0;const J1=[];let s1=null,N1=0;const p7=Promise.resolve();let d0=null;function hl(c){const e=d0||p7;return c?e.then(this?c.bind(this):c):e}function dl(c){let e=Q2+1,a=C2.length;for(;e<a;){const s=e+a>>>1,n=C2[s],r=M4(n);r<c||r===c&&n.pre?e=s+1:a=s}return e}function m0(c){(!C2.length||!C2.includes(c,V4&&c.allowRecurse?Q2+1:Q2))&&(c.id==null?C2.push(c):C2.splice(dl(c.id),0,c),H7())}function H7(){!V4&&!S6&&(S6=!0,d0=p7.then(g7))}function ml(c){const e=C2.indexOf(c);e>Q2&&C2.splice(e,1)}function ul(c){R(c)?J1.push(...c):(!s1||!s1.includes(c,c.allowRecurse?N1+1:N1))&&J1.push(c),H7()}function q8(c,e,a=V4?Q2+1:0){for(;a<C2.length;a++){const s=C2[a];if(s&&s.pre){if(c&&s.id!==c.uid)continue;C2.splice(a,1),a--,s()}}}function z7(c){if(J1.length){const e=[...new Set(J1)];if(J1.length=0,s1){s1.push(...e);return}for(s1=e,s1.sort((a,s)=>M4(a)-M4(s)),N1=0;N1<s1.length;N1++)s1[N1]();s1=null,N1=0}}const M4=c=>c.id==null?1/0:c.id,vl=(c,e)=>{const a=M4(c)-M4(e);if(a===0){if(c.pre&&!e.pre)return-1;if(e.pre&&!c.pre)return 1}return a};function g7(c){S6=!1,V4=!0,C2.sort(vl);try{for(Q2=0;Q2<C2.length;Q2++){const e=C2[Q2];e&&e.active!==!1&&g1(e,null,14)}}finally{Q2=0,C2.length=0,z7(),V4=!1,d0=null,(C2.length||J1.length)&&g7()}}function pl(c,e,...a){if(c.isUnmounted)return;const s=c.vnode.props||s2;let n=a;const r=e.startsWith("update:"),i=r&&e.slice(7);if(i&&i in s){const h=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:m}=s[h]||s2;m&&(n=a.map(v=>p2(v)?v.trim():v)),u&&(n=a.map(xt))}let o,t=s[o=f6(e)]||s[o=f6(Z1(e))];!t&&r&&(t=s[o=f6(n4(e))]),t&&W2(t,c,6,n);const l=s[o+"Once"];if(l){if(!c.emitted)c.emitted={};else if(c.emitted[o])return;c.emitted[o]=!0,W2(l,c,6,n)}}function y7(c,e,a=!1){const s=e.emitsCache,n=s.get(c);if(n!==void 0)return n;const r=c.emits;let i={},o=!1;if(!$(c)){const t=l=>{const h=y7(l,e,!0);h&&(o=!0,z2(i,h))};!a&&e.mixins.length&&e.mixins.forEach(t),c.extends&&t(c.extends),c.mixins&&c.mixins.forEach(t)}return!r&&!o?(i2(c)&&s.set(c,null),null):(R(r)?r.forEach(t=>i[t]=null):z2(i,r),i2(c)&&s.set(c,i),i)}function A3(c,e){return!c||!w3(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(c,e[0].toLowerCase()+e.slice(1))||K(c,n4(e))||K(c,e))}let B2=null,T3=null;function v3(c){const e=B2;return B2=c,T3=c&&c.type.__scopeId||null,e}function u0(c){T3=c}function v0(){T3=null}function A6(c,e=B2,a){if(!e||c._n)return c;const s=(...n)=>{s._d&&a5(-1);const r=v3(e);let i;try{i=c(...n)}finally{v3(r),s._d&&a5(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function m6(c){const{type:e,vnode:a,proxy:s,withProxy:n,props:r,propsOptions:[i],slots:o,attrs:t,emit:l,render:h,renderCache:u,data:m,setupState:v,ctx:H,inheritAttrs:M}=c;let F,C;const y=v3(c);try{if(a.shapeFlag&4){const x=n||s,D=x;F=J2(h.call(D,x,u,r,v,m,H)),C=t}else{const x=e;F=J2(x.length>1?x(r,{attrs:t,slots:o,emit:l}):x(r,null)),C=e.props?t:Hl(t)}}catch(x){H4.length=0,S3(x,c,1),F=l2(q2)}let B=F;if(C&&M!==!1){const x=Object.keys(C),{shapeFlag:D}=B;x.length&&D&7&&(i&&x.some(a0)&&(C=zl(C,i)),B=V1(B,C))}return a.dirs&&(B=V1(B),B.dirs=B.dirs?B.dirs.concat(a.dirs):a.dirs),a.transition&&(B.transition=a.transition),F=B,v3(y),F}const Hl=c=>{let e;for(const a in c)(a==="class"||a==="style"||w3(a))&&((e||(e={}))[a]=c[a]);return e},zl=(c,e)=>{const a={};for(const s in c)(!a0(s)||!(s.slice(9)in e))&&(a[s]=c[s]);return a};function gl(c,e,a){const{props:s,children:n,component:r}=c,{props:i,children:o,patchFlag:t}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(a&&t>=0){if(t&1024)return!0;if(t&16)return s?G8(s,i,l):!!i;if(t&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const m=h[u];if(i[m]!==s[m]&&!A3(l,m))return!0}}}else return(n||o)&&(!o||!o.$stable)?!0:s===i?!1:s?i?G8(s,i,l):!0:!!i;return!1}function G8(c,e,a){const s=Object.keys(e);if(s.length!==Object.keys(c).length)return!0;for(let n=0;n<s.length;n++){const r=s[n];if(e[r]!==c[r]&&!A3(a,r))return!0}return!1}function yl({vnode:c,parent:e},a){for(;e&&e.subTree===c;)(c=e.vnode).el=a,e=e.parent}const Vl=Symbol.for("v-ndc"),Ml=c=>c.__isSuspense;function Cl(c,e){e&&e.pendingBranch?R(c)?e.effects.push(...c):e.effects.push(c):ul(c)}function C4(c,e){return I3(c,null,e)}function bl(c,e){return I3(c,null,{flush:"post"})}const j4={};function P1(c,e,a){return I3(c,e,a)}function I3(c,e,{immediate:a,deep:s,flush:n,onTrack:r,onTrigger:i}=s2){var o;const t=Wt()===((o=y2)==null?void 0:o.scope)?y2:null;let l,h=!1,u=!1;if(S2(c)?(l=()=>c.value,h=u3(c)):X1(c)?(l=()=>c,s=!0):R(c)?(u=!0,h=c.some(x=>X1(x)||u3(x)),l=()=>c.map(x=>{if(S2(x))return x.value;if(X1(x))return T1(x);if($(x))return g1(x,t,2)})):$(c)?e?l=()=>g1(c,t,2):l=()=>{if(!(t&&t.isUnmounted))return m&&m(),W2(c,t,3,[v])}:l=c1,e&&s){const x=l;l=()=>T1(x())}let m,v=x=>{m=y.onStop=()=>{g1(x,t,4),m=y.onStop=void 0}},H;if(L4)if(v=c1,e?a&&W2(e,t,3,[l(),u?[]:void 0,v]):l(),n==="sync"){const x=gf();H=x.__watcherHandles||(x.__watcherHandles=[])}else return c1;let M=u?new Array(c.length).fill(j4):j4;const F=()=>{if(y.active)if(e){const x=y.run();(s||h||(u?x.some((D,c2)=>R1(D,M[c2])):R1(x,M)))&&(m&&m(),W2(e,t,3,[x,M===j4?void 0:u&&M[0]===j4?[]:M,v]),M=x)}else y.run()};F.allowRecurse=!!e;let C;n==="sync"?C=F:n==="post"?C=()=>k2(F,t&&t.suspense):(F.pre=!0,t&&(F.id=t.uid),C=()=>m0(F));const y=new i0(l,C);e?a?F():M=y.run():n==="post"?k2(y.run.bind(y),t&&t.suspense):y.run();const B=()=>{y.stop(),t&&t.scope&&s0(t.scope.effects,y)};return H&&H.push(B),B}function wl(c,e,a){const s=this.proxy,n=p2(c)?c.includes(".")?V7(s,c):()=>s[c]:c.bind(s,s);let r;$(e)?r=e:(r=e.handler,a=e);const i=y2;e4(this);const o=I3(n,r.bind(s),a);return i?e4(i):W1(),o}function V7(c,e){const a=e.split(".");return()=>{let s=c;for(let n=0;n<a.length&&s;n++)s=s[a[n]];return s}}function T1(c,e){if(!i2(c)||c.__v_skip||(e=e||new Set,e.has(c)))return c;if(e.add(c),S2(c))T1(c.value,e);else if(R(c))for(let a=0;a<c.length;a++)T1(c[a],e);else if(j5(c)||K1(c))c.forEach(a=>{T1(a,e)});else if(X5(c))for(const a in c)T1(c[a],e);return c}function p3(c,e){const a=B2;if(a===null)return c;const s=D3(a)||a.proxy,n=c.dirs||(c.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,t,l=s2]=e[r];i&&($(i)&&(i={mounted:i,updated:i}),i.deep&&T1(o),n.push({dir:i,instance:s,value:o,oldValue:void 0,arg:t,modifiers:l}))}return c}function w1(c,e,a,s){const n=c.dirs,r=e&&e.dirs;for(let i=0;i<n.length;i++){const o=n[i];r&&(o.oldValue=r[i].value);let t=o.dir[s];t&&(r4(),W2(t,a,8,[c.el,o,c,e]),i4())}}const p1=Symbol("_leaveCb"),Y4=Symbol("_enterCb");function Ll(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return W3(()=>{c.isMounted=!0}),L7(()=>{c.isUnmounting=!0}),c}const F2=[Function,Array],M7={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:F2,onEnter:F2,onAfterEnter:F2,onEnterCancelled:F2,onBeforeLeave:F2,onLeave:F2,onAfterLeave:F2,onLeaveCancelled:F2,onBeforeAppear:F2,onAppear:F2,onAfterAppear:F2,onAppearCancelled:F2},xl={name:"BaseTransition",props:M7,setup(c,{slots:e}){const a=W7(),s=Ll();let n;return()=>{const r=e.default&&b7(e.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const M of r)if(M.type!==q2){i=M;break}}const o=X(c),{mode:t}=o;if(s.isLeaving)return u6(i);const l=j8(i);if(!l)return u6(i);const h=T6(l,o,s,a);I6(l,h);const u=a.subTree,m=u&&j8(u);let v=!1;const{getTransitionKey:H}=l.type;if(H){const M=H();n===void 0?n=M:M!==n&&(n=M,v=!0)}if(m&&m.type!==q2&&(!S1(l,m)||v)){const M=T6(m,o,s,a);if(I6(m,M),t==="out-in")return s.isLeaving=!0,M.afterLeave=()=>{s.isLeaving=!1,a.update.active!==!1&&a.update()},u6(i);t==="in-out"&&l.type!==q2&&(M.delayLeave=(F,C,y)=>{const B=C7(s,m);B[String(m.key)]=m,F[p1]=()=>{C(),F[p1]=void 0,delete h.delayedLeave},h.delayedLeave=y})}return i}}},kl=xl;function C7(c,e){const{leavingVNodes:a}=c;let s=a.get(e.type);return s||(s=Object.create(null),a.set(e.type,s)),s}function T6(c,e,a,s){const{appear:n,mode:r,persisted:i=!1,onBeforeEnter:o,onEnter:t,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:u,onLeave:m,onAfterLeave:v,onLeaveCancelled:H,onBeforeAppear:M,onAppear:F,onAfterAppear:C,onAppearCancelled:y}=e,B=String(c.key),x=C7(a,c),D=(_,N)=>{_&&W2(_,s,9,N)},c2=(_,N)=>{const O=N[1];D(_,N),R(_)?_.every(e2=>e2.length<=1)&&O():_.length<=1&&O()},Q={mode:r,persisted:i,beforeEnter(_){let N=o;if(!a.isMounted)if(n)N=M||o;else return;_[p1]&&_[p1](!0);const O=x[B];O&&S1(c,O)&&O.el[p1]&&O.el[p1](),D(N,[_])},enter(_){let N=t,O=l,e2=h;if(!a.isMounted)if(n)N=F||t,O=C||l,e2=y||h;else return;let A=!1;const Y=_[Y4]=o2=>{A||(A=!0,o2?D(e2,[_]):D(O,[_]),Q.delayedLeave&&Q.delayedLeave(),_[Y4]=void 0)};N?c2(N,[_,Y]):Y()},leave(_,N){const O=String(c.key);if(_[Y4]&&_[Y4](!0),a.isUnmounting)return N();D(u,[_]);let e2=!1;const A=_[p1]=Y=>{e2||(e2=!0,N(),Y?D(H,[_]):D(v,[_]),_[p1]=void 0,x[O]===c&&delete x[O])};x[O]=c,m?c2(m,[_,A]):A()},clone(_){return T6(_,e,a,s)}};return Q}function u6(c){if(F3(c))return c=V1(c),c.children=null,c}function j8(c){return F3(c)?c.children?c.children[0]:void 0:c}function I6(c,e){c.shapeFlag&6&&c.component?I6(c.component.subTree,e):c.shapeFlag&128?(c.ssContent.transition=e.clone(c.ssContent),c.ssFallback.transition=e.clone(c.ssFallback)):c.transition=e}function b7(c,e=!1,a){let s=[],n=0;for(let r=0;r<c.length;r++){let i=c[r];const o=a==null?i.key:String(a)+String(i.key!=null?i.key:r);i.type===M2?(i.patchFlag&128&&n++,s=s.concat(b7(i.children,e,o))):(e||i.type!==q2)&&s.push(o!=null?V1(i,{key:o}):i)}if(n>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function e1(c,e){return $(c)?z2({name:c.name},e,{setup:c}):c}const o3=c=>!!c.type.__asyncLoader,F3=c=>c.type.__isKeepAlive;function Nl(c,e){w7(c,"a",e)}function Sl(c,e){w7(c,"da",e)}function w7(c,e,a=y2){const s=c.__wdc||(c.__wdc=()=>{let n=a;for(;n;){if(n.isDeactivated)return;n=n.parent}return c()});if(B3(e,s,a),a){let n=a.parent;for(;n&&n.parent;)F3(n.parent.vnode)&&Al(s,e,a,n),n=n.parent}}function Al(c,e,a,s){const n=B3(e,c,s,!0);p0(()=>{s0(s[e],n)},a)}function B3(c,e,a=y2,s=!1){if(a){const n=a[c]||(a[c]=[]),r=e.__weh||(e.__weh=(...i)=>{if(a.isUnmounted)return;r4(),e4(a);const o=W2(e,a,c,i);return W1(),i4(),o});return s?n.unshift(r):n.push(r),r}}const l1=c=>(e,a=y2)=>(!L4||c==="sp")&&B3(c,(...s)=>e(...s),a),P3=l1("bm"),W3=l1("m"),Tl=l1("bu"),Il=l1("u"),L7=l1("bum"),p0=l1("um"),Fl=l1("sp"),Bl=l1("rtg"),Pl=l1("rtc");function Wl(c,e=y2){B3("ec",c,e)}function b4(c,e,a,s){let n;const r=a&&a[s];if(R(c)||p2(c)){n=new Array(c.length);for(let i=0,o=c.length;i<o;i++)n[i]=e(c[i],i,void 0,r&&r[i])}else if(typeof c=="number"){n=new Array(c);for(let i=0;i<c;i++)n[i]=e(i+1,i,void 0,r&&r[i])}else if(i2(c))if(c[Symbol.iterator])n=Array.from(c,(i,o)=>e(i,o,void 0,r&&r[o]));else{const i=Object.keys(c);n=new Array(i.length);for(let o=0,t=i.length;o<t;o++){const l=i[o];n[o]=e(c[l],l,o,r&&r[o])}}else n=[];return a&&(a[s]=n),n}const F6=c=>c?R7(c)?D3(c)||c.proxy:F6(c.parent):null,p4=z2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>F6(c.parent),$root:c=>F6(c.root),$emit:c=>c.emit,$options:c=>H0(c),$forceUpdate:c=>c.f||(c.f=()=>m0(c.update)),$nextTick:c=>c.n||(c.n=hl.bind(c.proxy)),$watch:c=>wl.bind(c)}),v6=(c,e)=>c!==s2&&!c.__isScriptSetup&&K(c,e),Rl={get({_:c},e){const{ctx:a,setupState:s,data:n,props:r,accessCache:i,type:o,appContext:t}=c;let l;if(e[0]!=="$"){const v=i[e];if(v!==void 0)switch(v){case 1:return s[e];case 2:return n[e];case 4:return a[e];case 3:return r[e]}else{if(v6(s,e))return i[e]=1,s[e];if(n!==s2&&K(n,e))return i[e]=2,n[e];if((l=c.propsOptions[0])&&K(l,e))return i[e]=3,r[e];if(a!==s2&&K(a,e))return i[e]=4,a[e];B6&&(i[e]=0)}}const h=p4[e];let u,m;if(h)return e==="$attrs"&&N2(c,"get",e),h(c);if((u=o.__cssModules)&&(u=u[e]))return u;if(a!==s2&&K(a,e))return i[e]=4,a[e];if(m=t.config.globalProperties,K(m,e))return m[e]},set({_:c},e,a){const{data:s,setupState:n,ctx:r}=c;return v6(n,e)?(n[e]=a,!0):s!==s2&&K(s,e)?(s[e]=a,!0):K(c.props,e)||e[0]==="$"&&e.slice(1)in c?!1:(r[e]=a,!0)},has({_:{data:c,setupState:e,accessCache:a,ctx:s,appContext:n,propsOptions:r}},i){let o;return!!a[i]||c!==s2&&K(c,i)||v6(e,i)||(o=r[0])&&K(o,i)||K(s,i)||K(p4,i)||K(n.config.globalProperties,i)},defineProperty(c,e,a){return a.get!=null?c._.accessCache[e]=0:K(a,"value")&&this.set(c,e,a.value,null),Reflect.defineProperty(c,e,a)}};function Y8(c){return R(c)?c.reduce((e,a)=>(e[a]=null,e),{}):c}let B6=!0;function _l(c){const e=H0(c),a=c.proxy,s=c.ctx;B6=!1,e.beforeCreate&&K8(e.beforeCreate,c,"bc");const{data:n,computed:r,methods:i,watch:o,provide:t,inject:l,created:h,beforeMount:u,mounted:m,beforeUpdate:v,updated:H,activated:M,deactivated:F,beforeDestroy:C,beforeUnmount:y,destroyed:B,unmounted:x,render:D,renderTracked:c2,renderTriggered:Q,errorCaptured:_,serverPrefetch:N,expose:O,inheritAttrs:e2,components:A,directives:Y,filters:o2}=e;if(l&&Dl(l,s,null),i)for(const t2 in i){const J=i[t2];$(J)&&(s[t2]=J.bind(a))}if(n){const t2=n.call(a,a);i2(t2)&&(c.data=l0(t2))}if(B6=!0,r)for(const t2 in r){const J=r[t2],R2=$(J)?J.bind(a,a):$(J.get)?J.get.bind(a,a):c1,j2=!$(J)&&$(J.set)?J.set.bind(a):c1,a1=G({get:R2,set:j2});Object.defineProperty(s,t2,{enumerable:!0,configurable:!0,get:()=>a1.value,set:b2=>a1.value=b2})}if(o)for(const t2 in o)x7(o[t2],s,a,t2);if(t){const t2=$(t)?t.call(a):t;Reflect.ownKeys(t2).forEach(J=>{Gl(J,t2[J])})}h&&K8(h,c,"c");function h2(t2,J){R(J)?J.forEach(R2=>t2(R2.bind(a))):J&&t2(J.bind(a))}if(h2(P3,u),h2(W3,m),h2(Tl,v),h2(Il,H),h2(Nl,M),h2(Sl,F),h2(Wl,_),h2(Pl,c2),h2(Bl,Q),h2(L7,y),h2(p0,x),h2(Fl,N),R(O))if(O.length){const t2=c.exposed||(c.exposed={});O.forEach(J=>{Object.defineProperty(t2,J,{get:()=>a[J],set:R2=>a[J]=R2})})}else c.exposed||(c.exposed={});D&&c.render===c1&&(c.render=D),e2!=null&&(c.inheritAttrs=e2),A&&(c.components=A),Y&&(c.directives=Y)}function Dl(c,e,a=c1){R(c)&&(c=P6(c));for(const s in c){const n=c[s];let r;i2(n)?"default"in n?r=t3(n.from||s,n.default,!0):r=t3(n.from||s):r=t3(n),S2(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):e[s]=r}}function K8(c,e,a){W2(R(c)?c.map(s=>s.bind(e.proxy)):c.bind(e.proxy),e,a)}function x7(c,e,a,s){const n=s.includes(".")?V7(a,s):()=>a[s];if(p2(c)){const r=e[c];$(r)&&P1(n,r)}else if($(c))P1(n,c.bind(a));else if(i2(c))if(R(c))c.forEach(r=>x7(r,e,a,s));else{const r=$(c.handler)?c.handler.bind(a):e[c.handler];$(r)&&P1(n,r,c)}}function H0(c){const e=c.type,{mixins:a,extends:s}=e,{mixins:n,optionsCache:r,config:{optionMergeStrategies:i}}=c.appContext,o=r.get(e);let t;return o?t=o:!n.length&&!a&&!s?t=e:(t={},n.length&&n.forEach(l=>H3(t,l,i,!0)),H3(t,e,i)),i2(e)&&r.set(e,t),t}function H3(c,e,a,s=!1){const{mixins:n,extends:r}=e;r&&H3(c,r,a,!0),n&&n.forEach(i=>H3(c,i,a,!0));for(const i in e)if(!(s&&i==="expose")){const o=Ol[i]||a&&a[i];c[i]=o?o(c[i],e[i]):e[i]}return c}const Ol={data:X8,props:J8,emits:J8,methods:u4,computed:u4,beforeCreate:w2,created:w2,beforeMount:w2,mounted:w2,beforeUpdate:w2,updated:w2,beforeDestroy:w2,beforeUnmount:w2,destroyed:w2,unmounted:w2,activated:w2,deactivated:w2,errorCaptured:w2,serverPrefetch:w2,components:u4,directives:u4,watch:Ul,provide:X8,inject:El};function X8(c,e){return e?c?function(){return z2($(c)?c.call(this,this):c,$(e)?e.call(this,this):e)}:e:c}function El(c,e){return u4(P6(c),P6(e))}function P6(c){if(R(c)){const e={};for(let a=0;a<c.length;a++)e[c[a]]=c[a];return e}return c}function w2(c,e){return c?[...new Set([].concat(c,e))]:e}function u4(c,e){return c?z2(Object.create(null),c,e):e}function J8(c,e){return c?R(c)&&R(e)?[...new Set([...c,...e])]:z2(Object.create(null),Y8(c),Y8(e??{})):e}function Ul(c,e){if(!c)return e;if(!e)return c;const a=z2(Object.create(null),c);for(const s in e)a[s]=w2(c[s],e[s]);return a}function k7(){return{app:null,config:{isNativeTag:Mt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $l=0;function ql(c,e){return function(s,n=null){$(s)||(s=z2({},s)),n!=null&&!i2(n)&&(n=null);const r=k7(),i=new WeakSet;let o=!1;const t=r.app={_uid:$l++,_component:s,_props:n,_container:null,_context:r,_instance:null,version:yf,get config(){return r.config},set config(l){},use(l,...h){return i.has(l)||(l&&$(l.install)?(i.add(l),l.install(t,...h)):$(l)&&(i.add(l),l(t,...h))),t},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),t},component(l,h){return h?(r.components[l]=h,t):r.components[l]},directive(l,h){return h?(r.directives[l]=h,t):r.directives[l]},mount(l,h,u){if(!o){const m=l2(s,n);return m.appContext=r,h&&e?e(m,l):c(m,l,u),o=!0,t._container=l,l.__vue_app__=t,D3(m.component)||m.component.proxy}},unmount(){o&&(c(null,t._container),delete t._container.__vue_app__)},provide(l,h){return r.provides[l]=h,t},runWithContext(l){z3=t;try{return l()}finally{z3=null}}};return t}}let z3=null;function Gl(c,e){if(y2){let a=y2.provides;const s=y2.parent&&y2.parent.provides;s===a&&(a=y2.provides=Object.create(s)),a[c]=e}}function t3(c,e,a=!1){const s=y2||B2;if(s||z3){const n=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:z3._context.provides;if(n&&c in n)return n[c];if(arguments.length>1)return a&&$(e)?e.call(s&&s.proxy):e}}function jl(c,e,a,s=!1){const n={},r={};m3(r,_3,1),c.propsDefaults=Object.create(null),N7(c,e,n,r);for(const i in c.propsOptions[0])i in n||(n[i]=void 0);a?c.props=s?n:nl(n):c.type.props?c.props=n:c.props=r,c.attrs=r}function Yl(c,e,a,s){const{props:n,attrs:r,vnode:{patchFlag:i}}=c,o=X(n),[t]=c.propsOptions;let l=!1;if((s||i>0)&&!(i&16)){if(i&8){const h=c.vnode.dynamicProps;for(let u=0;u<h.length;u++){let m=h[u];if(A3(c.emitsOptions,m))continue;const v=e[m];if(t)if(K(r,m))v!==r[m]&&(r[m]=v,l=!0);else{const H=Z1(m);n[H]=W6(t,o,H,v,c,!1)}else v!==r[m]&&(r[m]=v,l=!0)}}}else{N7(c,e,n,r)&&(l=!0);let h;for(const u in o)(!e||!K(e,u)&&((h=n4(u))===u||!K(e,h)))&&(t?a&&(a[u]!==void 0||a[h]!==void 0)&&(n[u]=W6(t,o,u,void 0,c,!0)):delete n[u]);if(r!==o)for(const u in r)(!e||!K(e,u))&&(delete r[u],l=!0)}l&&r1(c,"set","$attrs")}function N7(c,e,a,s){const[n,r]=c.propsOptions;let i=!1,o;if(e)for(let t in e){if(i3(t))continue;const l=e[t];let h;n&&K(n,h=Z1(t))?!r||!r.includes(h)?a[h]=l:(o||(o={}))[h]=l:A3(c.emitsOptions,t)||(!(t in s)||l!==s[t])&&(s[t]=l,i=!0)}if(r){const t=X(a),l=o||s2;for(let h=0;h<r.length;h++){const u=r[h];a[u]=W6(n,t,u,l[u],c,!K(l,u))}}return i}function W6(c,e,a,s,n,r){const i=c[a];if(i!=null){const o=K(i,"default");if(o&&s===void 0){const t=i.default;if(i.type!==Function&&!i.skipFactory&&$(t)){const{propsDefaults:l}=n;a in l?s=l[a]:(e4(n),s=l[a]=t.call(null,e),W1())}else s=t}i[0]&&(r&&!o?s=!1:i[1]&&(s===""||s===n4(a))&&(s=!0))}return s}function S7(c,e,a=!1){const s=e.propsCache,n=s.get(c);if(n)return n;const r=c.props,i={},o=[];let t=!1;if(!$(c)){const h=u=>{t=!0;const[m,v]=S7(u,e,!0);z2(i,m),v&&o.push(...v)};!a&&e.mixins.length&&e.mixins.forEach(h),c.extends&&h(c.extends),c.mixins&&c.mixins.forEach(h)}if(!r&&!t)return i2(c)&&s.set(c,Y1),Y1;if(R(r))for(let h=0;h<r.length;h++){const u=Z1(r[h]);Q8(u)&&(i[u]=s2)}else if(r)for(const h in r){const u=Z1(h);if(Q8(u)){const m=r[h],v=i[u]=R(m)||$(m)?{type:m}:z2({},m);if(v){const H=e5(Boolean,v.type),M=e5(String,v.type);v[0]=H>-1,v[1]=M<0||H<M,(H>-1||K(v,"default"))&&o.push(u)}}}const l=[i,o];return i2(c)&&s.set(c,l),l}function Q8(c){return c[0]!=="$"}function Z8(c){const e=c&&c.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:c===null?"null":""}function c5(c,e){return Z8(c)===Z8(e)}function e5(c,e){return R(e)?e.findIndex(a=>c5(a,c)):$(e)&&c5(e,c)?0:-1}const A7=c=>c[0]==="_"||c==="$stable",z0=c=>R(c)?c.map(J2):[J2(c)],Kl=(c,e,a)=>{if(e._n)return e;const s=A6((...n)=>z0(e(...n)),a);return s._c=!1,s},T7=(c,e,a)=>{const s=c._ctx;for(const n in c){if(A7(n))continue;const r=c[n];if($(r))e[n]=Kl(n,r,s);else if(r!=null){const i=z0(r);e[n]=()=>i}}},I7=(c,e)=>{const a=z0(e);c.slots.default=()=>a},Xl=(c,e)=>{if(c.vnode.shapeFlag&32){const a=e._;a?(c.slots=X(e),m3(e,"_",a)):T7(e,c.slots={})}else c.slots={},e&&I7(c,e);m3(c.slots,_3,1)},Jl=(c,e,a)=>{const{vnode:s,slots:n}=c;let r=!0,i=s2;if(s.shapeFlag&32){const o=e._;o?a&&o===1?r=!1:(z2(n,e),!a&&o===1&&delete n._):(r=!e.$stable,T7(e,n)),i=e}else e&&(I7(c,e),i={default:1});if(r)for(const o in n)!A7(o)&&i[o]==null&&delete n[o]};function R6(c,e,a,s,n=!1){if(R(c)){c.forEach((m,v)=>R6(m,e&&(R(e)?e[v]:e),a,s,n));return}if(o3(s)&&!n)return;const r=s.shapeFlag&4?D3(s.component)||s.component.proxy:s.el,i=n?null:r,{i:o,r:t}=c,l=e&&e.r,h=o.refs===s2?o.refs={}:o.refs,u=o.setupState;if(l!=null&&l!==t&&(p2(l)?(h[l]=null,K(u,l)&&(u[l]=null)):S2(l)&&(l.value=null)),$(t))g1(t,o,12,[i,h]);else{const m=p2(t),v=S2(t);if(m||v){const H=()=>{if(c.f){const M=m?K(u,t)?u[t]:h[t]:t.value;n?R(M)&&s0(M,r):R(M)?M.includes(r)||M.push(r):m?(h[t]=[r],K(u,t)&&(u[t]=h[t])):(t.value=[r],c.k&&(h[c.k]=t.value))}else m?(h[t]=i,K(u,t)&&(u[t]=i)):v&&(t.value=i,c.k&&(h[c.k]=i))};i?(H.id=-1,k2(H,a)):H()}}}const k2=Cl;function Ql(c){return Zl(c)}function Zl(c,e){const a=w6();a.__VUE__=!0;const{insert:s,remove:n,patchProp:r,createElement:i,createText:o,createComment:t,setText:l,setElementText:h,parentNode:u,nextSibling:m,setScopeId:v=c1,insertStaticContent:H}=c,M=(f,d,p,z=null,g=null,w=null,k=!1,b=null,L=!!d.dynamicChildren)=>{if(f===d)return;f&&!S1(f,d)&&(z=E1(f),b2(f,g,w,!0),f=null),d.patchFlag===-2&&(L=!1,d.dynamicChildren=null);const{type:V,ref:P,shapeFlag:T}=d;switch(V){case R3:F(f,d,p,z);break;case q2:C(f,d,p,z);break;case l3:f==null&&y(d,p,z,k);break;case M2:A(f,d,p,z,g,w,k,b,L);break;default:T&1?D(f,d,p,z,g,w,k,b,L):T&6?Y(f,d,p,z,g,w,k,b,L):(T&64||T&128)&&V.process(f,d,p,z,g,w,k,b,L,Y2)}P!=null&&g&&R6(P,f&&f.ref,w,d||f,!d)},F=(f,d,p,z)=>{if(f==null)s(d.el=o(d.children),p,z);else{const g=d.el=f.el;d.children!==f.children&&l(g,d.children)}},C=(f,d,p,z)=>{f==null?s(d.el=t(d.children||""),p,z):d.el=f.el},y=(f,d,p,z)=>{[f.el,f.anchor]=H(f.children,d,p,z,f.el,f.anchor)},B=({el:f,anchor:d},p,z)=>{let g;for(;f&&f!==d;)g=m(f),s(f,p,z),f=g;s(d,p,z)},x=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=m(f),n(f),f=p;n(d)},D=(f,d,p,z,g,w,k,b,L)=>{k=k||d.type==="svg",f==null?c2(d,p,z,g,w,k,b,L):N(f,d,g,w,k,b,L)},c2=(f,d,p,z,g,w,k,b)=>{let L,V;const{type:P,props:T,shapeFlag:W,transition:E,dirs:j}=f;if(L=f.el=i(f.type,w,T&&T.is,T),W&8?h(L,f.children):W&16&&_(f.children,L,null,z,g,w&&P!=="foreignObject",k,b),j&&w1(f,null,z,"created"),Q(L,f,f.scopeId,k,z),T){for(const Z in T)Z!=="value"&&!i3(Z)&&r(L,Z,null,T[Z],w,f.children,z,g,L2);"value"in T&&r(L,"value",null,T.value),(V=T.onVnodeBeforeMount)&&X2(V,z,f)}j&&w1(f,null,z,"beforeMount");const a2=cf(g,E);a2&&E.beforeEnter(L),s(L,d,p),((V=T&&T.onVnodeMounted)||a2||j)&&k2(()=>{V&&X2(V,z,f),a2&&E.enter(L),j&&w1(f,null,z,"mounted")},g)},Q=(f,d,p,z,g)=>{if(p&&v(f,p),z)for(let w=0;w<z.length;w++)v(f,z[w]);if(g){let w=g.subTree;if(d===w){const k=g.vnode;Q(f,k,k.scopeId,k.slotScopeIds,g.parent)}}},_=(f,d,p,z,g,w,k,b,L=0)=>{for(let V=L;V<f.length;V++){const P=f[V]=b?H1(f[V]):J2(f[V]);M(null,P,d,p,z,g,w,k,b)}},N=(f,d,p,z,g,w,k)=>{const b=d.el=f.el;let{patchFlag:L,dynamicChildren:V,dirs:P}=d;L|=f.patchFlag&16;const T=f.props||s2,W=d.props||s2;let E;p&&L1(p,!1),(E=W.onVnodeBeforeUpdate)&&X2(E,p,d,f),P&&w1(d,f,p,"beforeUpdate"),p&&L1(p,!0);const j=g&&d.type!=="foreignObject";if(V?O(f.dynamicChildren,V,b,p,z,j,w):k||J(f,d,b,null,p,z,j,w,!1),L>0){if(L&16)e2(b,d,T,W,p,z,g);else if(L&2&&T.class!==W.class&&r(b,"class",null,W.class,g),L&4&&r(b,"style",T.style,W.style,g),L&8){const a2=d.dynamicProps;for(let Z=0;Z<a2.length;Z++){const u2=a2[Z],_2=T[u2],$1=W[u2];($1!==_2||u2==="value")&&r(b,u2,_2,$1,g,f.children,p,z,L2)}}L&1&&f.children!==d.children&&h(b,d.children)}else!k&&V==null&&e2(b,d,T,W,p,z,g);((E=W.onVnodeUpdated)||P)&&k2(()=>{E&&X2(E,p,d,f),P&&w1(d,f,p,"updated")},z)},O=(f,d,p,z,g,w,k)=>{for(let b=0;b<d.length;b++){const L=f[b],V=d[b],P=L.el&&(L.type===M2||!S1(L,V)||L.shapeFlag&70)?u(L.el):p;M(L,V,P,null,z,g,w,k,!0)}},e2=(f,d,p,z,g,w,k)=>{if(p!==z){if(p!==s2)for(const b in p)!i3(b)&&!(b in z)&&r(f,b,p[b],null,k,d.children,g,w,L2);for(const b in z){if(i3(b))continue;const L=z[b],V=p[b];L!==V&&b!=="value"&&r(f,b,V,L,k,d.children,g,w,L2)}"value"in z&&r(f,"value",p.value,z.value)}},A=(f,d,p,z,g,w,k,b,L)=>{const V=d.el=f?f.el:o(""),P=d.anchor=f?f.anchor:o("");let{patchFlag:T,dynamicChildren:W,slotScopeIds:E}=d;E&&(b=b?b.concat(E):E),f==null?(s(V,p,z),s(P,p,z),_(d.children,p,P,g,w,k,b,L)):T>0&&T&64&&W&&f.dynamicChildren?(O(f.dynamicChildren,W,p,g,w,k,b),(d.key!=null||g&&d===g.subTree)&&F7(f,d,!0)):J(f,d,p,P,g,w,k,b,L)},Y=(f,d,p,z,g,w,k,b,L)=>{d.slotScopeIds=b,f==null?d.shapeFlag&512?g.ctx.activate(d,p,z,k,L):o2(d,p,z,g,w,k,L):G2(f,d,L)},o2=(f,d,p,z,g,w,k)=>{const b=f.component=df(f,z,g);if(F3(f)&&(b.ctx.renderer=Y2),mf(b),b.asyncDep){if(g&&g.registerDep(b,h2),!f.el){const L=b.subTree=l2(q2);C(null,L,d,p)}return}h2(b,f,d,p,g,w,k)},G2=(f,d,p)=>{const z=d.component=f.component;if(gl(f,d,p))if(z.asyncDep&&!z.asyncResolved){t2(z,d,p);return}else z.next=d,ml(z.update),z.update();else d.el=f.el,z.vnode=d},h2=(f,d,p,z,g,w,k)=>{const b=()=>{if(f.isMounted){let{next:P,bu:T,u:W,parent:E,vnode:j}=f,a2=P,Z;L1(f,!1),P?(P.el=j.el,t2(f,P,k)):P=j,T&&h6(T),(Z=P.props&&P.props.onVnodeBeforeUpdate)&&X2(Z,E,P,j),L1(f,!0);const u2=m6(f),_2=f.subTree;f.subTree=u2,M(_2,u2,u(_2.el),E1(_2),f,g,w),P.el=u2.el,a2===null&&yl(f,u2.el),W&&k2(W,g),(Z=P.props&&P.props.onVnodeUpdated)&&k2(()=>X2(Z,E,P,j),g)}else{let P;const{el:T,props:W}=d,{bm:E,m:j,parent:a2}=f,Z=o3(d);if(L1(f,!1),E&&h6(E),!Z&&(P=W&&W.onVnodeBeforeMount)&&X2(P,a2,d),L1(f,!0),T&&q){const u2=()=>{f.subTree=m6(f),q(T,f.subTree,f,g,null)};Z?d.type.__asyncLoader().then(()=>!f.isUnmounted&&u2()):u2()}else{const u2=f.subTree=m6(f);M(null,u2,p,z,f,g,w),d.el=u2.el}if(j&&k2(j,g),!Z&&(P=W&&W.onVnodeMounted)){const u2=d;k2(()=>X2(P,a2,u2),g)}(d.shapeFlag&256||a2&&o3(a2.vnode)&&a2.vnode.shapeFlag&256)&&f.a&&k2(f.a,g),f.isMounted=!0,d=p=z=null}},L=f.effect=new i0(b,()=>m0(V),f.scope),V=f.update=()=>L.run();V.id=f.uid,L1(f,!0),V()},t2=(f,d,p)=>{d.component=f;const z=f.vnode.props;f.vnode=d,f.next=null,Yl(f,d.props,z,p),Jl(f,d.children,p),r4(),q8(f),i4()},J=(f,d,p,z,g,w,k,b,L=!1)=>{const V=f&&f.children,P=f?f.shapeFlag:0,T=d.children,{patchFlag:W,shapeFlag:E}=d;if(W>0){if(W&128){j2(V,T,p,z,g,w,k,b,L);return}else if(W&256){R2(V,T,p,z,g,w,k,b,L);return}}E&8?(P&16&&L2(V,g,w),T!==V&&h(p,T)):P&16?E&16?j2(V,T,p,z,g,w,k,b,L):L2(V,g,w,!0):(P&8&&h(p,""),E&16&&_(T,p,z,g,w,k,b,L))},R2=(f,d,p,z,g,w,k,b,L)=>{f=f||Y1,d=d||Y1;const V=f.length,P=d.length,T=Math.min(V,P);let W;for(W=0;W<T;W++){const E=d[W]=L?H1(d[W]):J2(d[W]);M(f[W],E,p,null,g,w,k,b,L)}V>P?L2(f,g,w,!0,!1,T):_(d,p,z,g,w,k,b,L,T)},j2=(f,d,p,z,g,w,k,b,L)=>{let V=0;const P=d.length;let T=f.length-1,W=P-1;for(;V<=T&&V<=W;){const E=f[V],j=d[V]=L?H1(d[V]):J2(d[V]);if(S1(E,j))M(E,j,p,null,g,w,k,b,L);else break;V++}for(;V<=T&&V<=W;){const E=f[T],j=d[W]=L?H1(d[W]):J2(d[W]);if(S1(E,j))M(E,j,p,null,g,w,k,b,L);else break;T--,W--}if(V>T){if(V<=W){const E=W+1,j=E<P?d[E].el:z;for(;V<=W;)M(null,d[V]=L?H1(d[V]):J2(d[V]),p,j,g,w,k,b,L),V++}}else if(V>W)for(;V<=T;)b2(f[V],g,w,!0),V++;else{const E=V,j=V,a2=new Map;for(V=j;V<=W;V++){const A2=d[V]=L?H1(d[V]):J2(d[V]);A2.key!=null&&a2.set(A2.key,V)}let Z,u2=0;const _2=W-j+1;let $1=!1,F8=0;const l4=new Array(_2);for(V=0;V<_2;V++)l4[V]=0;for(V=E;V<=T;V++){const A2=f[V];if(u2>=_2){b2(A2,g,w,!0);continue}let K2;if(A2.key!=null)K2=a2.get(A2.key);else for(Z=j;Z<=W;Z++)if(l4[Z-j]===0&&S1(A2,d[Z])){K2=Z;break}K2===void 0?b2(A2,g,w,!0):(l4[K2-j]=V+1,K2>=F8?F8=K2:$1=!0,M(A2,d[K2],p,null,g,w,k,b,L),u2++)}const B8=$1?ef(l4):Y1;for(Z=B8.length-1,V=_2-1;V>=0;V--){const A2=j+V,K2=d[A2],P8=A2+1<P?d[A2+1].el:z;l4[V]===0?M(null,K2,p,P8,g,w,k,b,L):$1&&(Z<0||V!==B8[Z]?a1(K2,p,P8,2):Z--)}}},a1=(f,d,p,z,g=null)=>{const{el:w,type:k,transition:b,children:L,shapeFlag:V}=f;if(V&6){a1(f.component.subTree,d,p,z);return}if(V&128){f.suspense.move(d,p,z);return}if(V&64){k.move(f,d,p,Y2);return}if(k===M2){s(w,d,p);for(let T=0;T<L.length;T++)a1(L[T],d,p,z);s(f.anchor,d,p);return}if(k===l3){B(f,d,p);return}if(z!==2&&V&1&&b)if(z===0)b.beforeEnter(w),s(w,d,p),k2(()=>b.enter(w),g);else{const{leave:T,delayLeave:W,afterLeave:E}=b,j=()=>s(w,d,p),a2=()=>{T(w,()=>{j(),E&&E()})};W?W(w,j,a2):a2()}else s(w,d,p)},b2=(f,d,p,z=!1,g=!1)=>{const{type:w,props:k,ref:b,children:L,dynamicChildren:V,shapeFlag:P,patchFlag:T,dirs:W}=f;if(b!=null&&R6(b,null,p,f,!0),P&256){d.ctx.deactivate(f);return}const E=P&1&&W,j=!o3(f);let a2;if(j&&(a2=k&&k.onVnodeBeforeUnmount)&&X2(a2,d,f),P&6)l6(f.component,p,z);else{if(P&128){f.suspense.unmount(p,z);return}E&&w1(f,null,d,"beforeUnmount"),P&64?f.type.remove(f,d,p,g,Y2,z):V&&(w!==M2||T>0&&T&64)?L2(V,d,p,!1,!0):(w===M2&&T&384||!g&&P&16)&&L2(L,d,p),z&&O4(f)}(j&&(a2=k&&k.onVnodeUnmounted)||E)&&k2(()=>{a2&&X2(a2,d,f),E&&w1(f,null,d,"unmounted")},p)},O4=f=>{const{type:d,el:p,anchor:z,transition:g}=f;if(d===M2){t6(p,z);return}if(d===l3){x(f);return}const w=()=>{n(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:k,delayLeave:b}=g,L=()=>k(p,w);b?b(f.el,w,L):L()}else w()},t6=(f,d)=>{let p;for(;f!==d;)p=m(f),n(f),f=p;n(d)},l6=(f,d,p)=>{const{bum:z,scope:g,update:w,subTree:k,um:b}=f;z&&h6(z),g.stop(),w&&(w.active=!1,b2(k,f,d,p)),b&&k2(b,d),k2(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},L2=(f,d,p,z=!1,g=!1,w=0)=>{for(let k=w;k<f.length;k++)b2(f[k],d,p,z,g)},E1=f=>f.shapeFlag&6?E1(f.component.subTree):f.shapeFlag&128?f.suspense.next():m(f.anchor||f.el),U1=(f,d,p)=>{f==null?d._vnode&&b2(d._vnode,null,null,!0):M(d._vnode||null,f,d,null,null,null,p),q8(),z7(),d._vnode=f},Y2={p:M,um:b2,m:a1,r:O4,mt:o2,mc:_,pc:J,pbc:O,n:E1,o:c};let t4,q;return e&&([t4,q]=e(Y2)),{render:U1,hydrate:t4,createApp:ql(U1,t4)}}function L1({effect:c,update:e},a){c.allowRecurse=e.allowRecurse=a}function cf(c,e){return(!c||c&&!c.pendingBranch)&&e&&!e.persisted}function F7(c,e,a=!1){const s=c.children,n=e.children;if(R(s)&&R(n))for(let r=0;r<s.length;r++){const i=s[r];let o=n[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=n[r]=H1(n[r]),o.el=i.el),a||F7(i,o)),o.type===R3&&(o.el=i.el)}}function ef(c){const e=c.slice(),a=[0];let s,n,r,i,o;const t=c.length;for(s=0;s<t;s++){const l=c[s];if(l!==0){if(n=a[a.length-1],c[n]<l){e[s]=n,a.push(s);continue}for(r=0,i=a.length-1;r<i;)o=r+i>>1,c[a[o]]<l?r=o+1:i=o;l<c[a[r]]&&(r>0&&(e[s]=a[r-1]),a[r]=s)}}for(r=a.length,i=a[r-1];r-- >0;)a[r]=i,i=e[i];return a}const af=c=>c.__isTeleport,M2=Symbol.for("v-fgt"),R3=Symbol.for("v-txt"),q2=Symbol.for("v-cmt"),l3=Symbol.for("v-stc"),H4=[];let U2=null;function m2(c=!1){H4.push(U2=c?null:[])}function sf(){H4.pop(),U2=H4[H4.length-1]||null}let w4=1;function a5(c){w4+=c}function B7(c){return c.dynamicChildren=w4>0?U2||Y1:null,sf(),w4>0&&U2&&U2.push(c),c}function v2(c,e,a,s,n,r){return B7(U(c,e,a,s,n,r,!0))}function nf(c,e,a,s,n){return B7(l2(c,e,a,s,n,!0))}function _6(c){return c?c.__v_isVNode===!0:!1}function S1(c,e){return c.type===e.type&&c.key===e.key}const _3="__vInternal",P7=({key:c})=>c??null,f3=({ref:c,ref_key:e,ref_for:a})=>(typeof c=="number"&&(c=""+c),c!=null?p2(c)||S2(c)||$(c)?{i:B2,r:c,k:e,f:!!a}:c:null);function U(c,e=null,a=null,s=0,n=null,r=c===M2?0:1,i=!1,o=!1){const t={__v_isVNode:!0,__v_skip:!0,type:c,props:e,key:e&&P7(e),ref:e&&f3(e),scopeId:T3,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:B2};return o?(y0(t,a),r&128&&c.normalize(t)):a&&(t.shapeFlag|=p2(a)?8:16),w4>0&&!i&&U2&&(t.patchFlag>0||r&6)&&t.patchFlag!==32&&U2.push(t),t}const l2=rf;function rf(c,e=null,a=null,s=0,n=null,r=!1){if((!c||c===Vl)&&(c=q2),_6(c)){const o=V1(c,e,!0);return a&&y0(o,a),w4>0&&!r&&U2&&(o.shapeFlag&6?U2[U2.indexOf(c)]=o:U2.push(o)),o.patchFlag|=-2,o}if(Hf(c)&&(c=c.__vccOpts),e){e=of(e);let{class:o,style:t}=e;o&&!p2(o)&&(e.class=T2(o)),i2(t)&&(h7(t)&&!R(t)&&(t=z2({},t)),e.style=k3(t))}const i=p2(c)?1:Ml(c)?128:af(c)?64:i2(c)?4:$(c)?2:0;return U(c,e,a,s,n,i,r,!0)}function of(c){return c?h7(c)||_3 in c?z2({},c):c:null}function V1(c,e,a=!1){const{props:s,ref:n,patchFlag:r,children:i}=c,o=e?lf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:o,key:o&&P7(o),ref:e&&e.ref?a&&n?R(n)?n.concat(f3(e)):[n,f3(e)]:f3(e):n,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:e&&c.type!==M2?r===-1?16:r|16:r,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&V1(c.ssContent),ssFallback:c.ssFallback&&V1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function g0(c=" ",e=0){return l2(R3,null,c,e)}function tf(c="",e=!1){return e?(m2(),nf(q2,null,c)):l2(q2,null,c)}function J2(c){return c==null||typeof c=="boolean"?l2(q2):R(c)?l2(M2,null,c.slice()):typeof c=="object"?H1(c):l2(R3,null,String(c))}function H1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:V1(c)}function y0(c,e){let a=0;const{shapeFlag:s}=c;if(e==null)e=null;else if(R(e))a=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),y0(c,n()),n._c&&(n._d=!0));return}else{a=32;const n=e._;!n&&!(_3 in e)?e._ctx=B2:n===3&&B2&&(B2.slots._===1?e._=1:(e._=2,c.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:B2},a=32):(e=String(e),s&64?(a=16,e=[g0(e)]):a=8);c.children=e,c.shapeFlag|=a}function lf(...c){const e={};for(let a=0;a<c.length;a++){const s=c[a];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=T2([e.class,s.class]));else if(n==="style")e.style=k3([e.style,s.style]);else if(w3(n)){const r=e[n],i=s[n];i&&r!==i&&!(R(r)&&r.includes(i))&&(e[n]=r?[].concat(r,i):i)}else n!==""&&(e[n]=s[n])}return e}function X2(c,e,a,s=null){W2(c,e,7,[a,s])}const ff=k7();let hf=0;function df(c,e,a){const s=c.type,n=(e?e.appContext:c.appContext)||ff,r={uid:hf++,vnode:c,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bt(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:S7(s,n),emitsOptions:y7(s,n),emit:null,emitted:null,propsDefaults:s2,inheritAttrs:s.inheritAttrs,ctx:s2,data:s2,props:s2,attrs:s2,slots:s2,refs:s2,setupState:s2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=pl.bind(null,r),c.ce&&c.ce(r),r}let y2=null;const W7=()=>y2||B2;let V0,q1,s5="__VUE_INSTANCE_SETTERS__";(q1=w6()[s5])||(q1=w6()[s5]=[]),q1.push(c=>y2=c),V0=c=>{q1.length>1?q1.forEach(e=>e(c)):q1[0](c)};const e4=c=>{V0(c),c.scope.on()},W1=()=>{y2&&y2.scope.off(),V0(null)};function R7(c){return c.vnode.shapeFlag&4}let L4=!1;function mf(c,e=!1){L4=e;const{props:a,children:s}=c.vnode,n=R7(c);jl(c,a,n,e),Xl(c,s);const r=n?uf(c,e):void 0;return L4=!1,r}function uf(c,e){const a=c.type;c.accessCache=Object.create(null),c.proxy=d7(new Proxy(c.ctx,Rl));const{setup:s}=a;if(s){const n=c.setupContext=s.length>1?pf(c):null;e4(c),r4();const r=g1(s,c,0,[c.props,n]);if(i4(),W1(),Y5(r)){if(r.then(W1,W1),e)return r.then(i=>{n5(c,i,e)}).catch(i=>{S3(i,c,0)});c.asyncDep=r}else n5(c,r,e)}else _7(c,e)}function n5(c,e,a){$(e)?c.type.__ssrInlineRender?c.ssrRender=e:c.render=e:i2(e)&&(c.setupState=v7(e)),_7(c,a)}let r5;function _7(c,e,a){const s=c.type;if(!c.render){if(!e&&r5&&!s.render){const n=s.template||H0(c).template;if(n){const{isCustomElement:r,compilerOptions:i}=c.appContext.config,{delimiters:o,compilerOptions:t}=s,l=z2(z2({isCustomElement:r,delimiters:o},i),t);s.render=r5(n,l)}}c.render=s.render||c1}{e4(c),r4();try{_l(c)}finally{i4(),W1()}}}function vf(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(e,a){return N2(c,"get","$attrs"),e[a]}}))}function pf(c){const e=a=>{c.exposed=a||{}};return{get attrs(){return vf(c)},slots:c.slots,emit:c.emit,expose:e}}function D3(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(v7(d7(c.exposed)),{get(e,a){if(a in e)return e[a];if(a in p4)return p4[a](c)},has(e,a){return a in e||a in p4}}))}function Hf(c){return $(c)&&"__vccOpts"in c}const G=(c,e)=>ll(c,e,L4);function D7(c,e,a){const s=arguments.length;return s===2?i2(e)&&!R(e)?_6(e)?l2(c,null,[e]):l2(c,e):l2(c,null,e):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&_6(a)&&(a=[a]),l2(c,e,a))}const zf=Symbol.for("v-scx"),gf=()=>t3(zf),yf="3.3.13",Vf="http://www.w3.org/2000/svg",A1=typeof document<"u"?document:null,i5=A1&&A1.createElement("template"),Mf={insert:(c,e,a)=>{e.insertBefore(c,a||null)},remove:c=>{const e=c.parentNode;e&&e.removeChild(c)},createElement:(c,e,a,s)=>{const n=e?A1.createElementNS(Vf,c):A1.createElement(c,a?{is:a}:void 0);return c==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:c=>A1.createTextNode(c),createComment:c=>A1.createComment(c),setText:(c,e)=>{c.nodeValue=e},setElementText:(c,e)=>{c.textContent=e},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>A1.querySelector(c),setScopeId(c,e){c.setAttribute(e,"")},insertStaticContent(c,e,a,s,n,r){const i=a?a.previousSibling:e.lastChild;if(n&&(n===r||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),a),!(n===r||!(n=n.nextSibling)););else{i5.innerHTML=s?`<svg>${c}</svg>`:c;const o=i5.content;if(s){const t=o.firstChild;for(;t.firstChild;)o.appendChild(t.firstChild);o.removeChild(t)}e.insertBefore(o,a)}return[i?i.nextSibling:e.firstChild,a?a.previousSibling:e.lastChild]}},d1="transition",f4="animation",x4=Symbol("_vtc"),g3=(c,{slots:e})=>D7(kl,Cf(c),e);g3.displayName="Transition";const O7={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};g3.props=z2({},M7,O7);const x1=(c,e=[])=>{R(c)?c.forEach(a=>a(...e)):c&&c(...e)},o5=c=>c?R(c)?c.some(e=>e.length>1):c.length>1:!1;function Cf(c){const e={};for(const A in c)A in O7||(e[A]=c[A]);if(c.css===!1)return e;const{name:a="v",type:s,duration:n,enterFromClass:r=`${a}-enter-from`,enterActiveClass:i=`${a}-enter-active`,enterToClass:o=`${a}-enter-to`,appearFromClass:t=r,appearActiveClass:l=i,appearToClass:h=o,leaveFromClass:u=`${a}-leave-from`,leaveActiveClass:m=`${a}-leave-active`,leaveToClass:v=`${a}-leave-to`}=c,H=bf(n),M=H&&H[0],F=H&&H[1],{onBeforeEnter:C,onEnter:y,onEnterCancelled:B,onLeave:x,onLeaveCancelled:D,onBeforeAppear:c2=C,onAppear:Q=y,onAppearCancelled:_=B}=e,N=(A,Y,o2)=>{k1(A,Y?h:o),k1(A,Y?l:i),o2&&o2()},O=(A,Y)=>{A._isLeaving=!1,k1(A,u),k1(A,v),k1(A,m),Y&&Y()},e2=A=>(Y,o2)=>{const G2=A?Q:y,h2=()=>N(Y,A,o2);x1(G2,[Y,h2]),t5(()=>{k1(Y,A?t:r),m1(Y,A?h:o),o5(G2)||l5(Y,s,M,h2)})};return z2(e,{onBeforeEnter(A){x1(C,[A]),m1(A,r),m1(A,i)},onBeforeAppear(A){x1(c2,[A]),m1(A,t),m1(A,l)},onEnter:e2(!1),onAppear:e2(!0),onLeave(A,Y){A._isLeaving=!0;const o2=()=>O(A,Y);m1(A,u),xf(),m1(A,m),t5(()=>{A._isLeaving&&(k1(A,u),m1(A,v),o5(x)||l5(A,s,F,o2))}),x1(x,[A,o2])},onEnterCancelled(A){N(A,!1),x1(B,[A])},onAppearCancelled(A){N(A,!0),x1(_,[A])},onLeaveCancelled(A){O(A),x1(D,[A])}})}function bf(c){if(c==null)return null;if(i2(c))return[p6(c.enter),p6(c.leave)];{const e=p6(c);return[e,e]}}function p6(c){return kt(c)}function m1(c,e){e.split(/\s+/).forEach(a=>a&&c.classList.add(a)),(c[x4]||(c[x4]=new Set)).add(e)}function k1(c,e){e.split(/\s+/).forEach(s=>s&&c.classList.remove(s));const a=c[x4];a&&(a.delete(e),a.size||(c[x4]=void 0))}function t5(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let wf=0;function l5(c,e,a,s){const n=c._endId=++wf,r=()=>{n===c._endId&&s()};if(a)return setTimeout(r,a);const{type:i,timeout:o,propCount:t}=Lf(c,e);if(!i)return s();const l=i+"end";let h=0;const u=()=>{c.removeEventListener(l,m),r()},m=v=>{v.target===c&&++h>=t&&u()};setTimeout(()=>{h<t&&u()},o+1),c.addEventListener(l,m)}function Lf(c,e){const a=window.getComputedStyle(c),s=H=>(a[H]||"").split(", "),n=s(`${d1}Delay`),r=s(`${d1}Duration`),i=f5(n,r),o=s(`${f4}Delay`),t=s(`${f4}Duration`),l=f5(o,t);let h=null,u=0,m=0;e===d1?i>0&&(h=d1,u=i,m=r.length):e===f4?l>0&&(h=f4,u=l,m=t.length):(u=Math.max(i,l),h=u>0?i>l?d1:f4:null,m=h?h===d1?r.length:t.length:0);const v=h===d1&&/\b(transform|all)(,|$)/.test(s(`${d1}Property`).toString());return{type:h,timeout:u,propCount:m,hasTransform:v}}function f5(c,e){for(;c.length<e.length;)c=c.concat(c);return Math.max(...e.map((a,s)=>h5(a)+h5(c[s])))}function h5(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function xf(){return document.body.offsetHeight}function kf(c,e,a){const s=c[x4];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?c.removeAttribute("class"):a?c.setAttribute("class",e):c.className=e}const M0=Symbol("_vod"),y3={beforeMount(c,{value:e},{transition:a}){c[M0]=c.style.display==="none"?"":c.style.display,a&&e?a.beforeEnter(c):h4(c,e)},mounted(c,{value:e},{transition:a}){a&&e&&a.enter(c)},updated(c,{value:e,oldValue:a},{transition:s}){!e!=!a&&(s?e?(s.beforeEnter(c),h4(c,!0),s.enter(c)):s.leave(c,()=>{h4(c,!1)}):h4(c,e))},beforeUnmount(c,{value:e}){h4(c,e)}};function h4(c,e){c.style.display=e?c[M0]:"none"}const E7=Symbol("");function Nf(c){const e=W7();if(!e)return;const a=e.ut=(n=c(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>O6(r,n))},s=()=>{const n=c(e.proxy);D6(e.subTree,n),a(n)};bl(s),W3(()=>{const n=new MutationObserver(s);n.observe(e.subTree.el.parentNode,{childList:!0}),p0(()=>n.disconnect())})}function D6(c,e){if(c.shapeFlag&128){const a=c.suspense;c=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{D6(a.activeBranch,e)})}for(;c.component;)c=c.component.subTree;if(c.shapeFlag&1&&c.el)O6(c.el,e);else if(c.type===M2)c.children.forEach(a=>D6(a,e));else if(c.type===l3){let{el:a,anchor:s}=c;for(;a&&(O6(a,e),a!==s);)a=a.nextSibling}}function O6(c,e){if(c.nodeType===1){const a=c.style;let s="";for(const n in e)a.setProperty(`--${n}`,e[n]),s+=`--${n}: ${e[n]};`;a[E7]=s}}function Sf(c,e,a){const s=c.style,n=p2(a);if(a&&!n){if(e&&!p2(e))for(const r in e)a[r]==null&&E6(s,r,"");for(const r in a)E6(s,r,a[r])}else{const r=s.display;if(n){if(e!==a){const i=s[E7];i&&(a+=";"+i),s.cssText=a}}else e&&c.removeAttribute("style");M0 in c&&(s.display=r)}}const d5=/\s*!important$/;function E6(c,e,a){if(R(a))a.forEach(s=>E6(c,e,s));else if(a==null&&(a=""),e.startsWith("--"))c.setProperty(e,a);else{const s=Af(c,e);d5.test(a)?c.setProperty(n4(s),a.replace(d5,""),"important"):c[s]=a}}const m5=["Webkit","Moz","ms"],H6={};function Af(c,e){const a=H6[e];if(a)return a;let s=Z1(e);if(s!=="filter"&&s in c)return H6[e]=s;s=J5(s);for(let n=0;n<m5.length;n++){const r=m5[n]+s;if(r in c)return H6[e]=r}return e}const u5="http://www.w3.org/1999/xlink";function Tf(c,e,a,s,n){if(s&&e.startsWith("xlink:"))a==null?c.removeAttributeNS(u5,e.slice(6,e.length)):c.setAttributeNS(u5,e,a);else{const r=Ft(e);a==null||r&&!Q5(a)?c.removeAttribute(e):c.setAttribute(e,r?"":a)}}function If(c,e,a,s,n,r,i){if(e==="innerHTML"||e==="textContent"){s&&i(s,n,r),c[e]=a??"";return}const o=c.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){c._value=a;const l=o==="OPTION"?c.getAttribute("value"):c.value,h=a??"";l!==h&&(c.value=h),a==null&&c.removeAttribute(e);return}let t=!1;if(a===""||a==null){const l=typeof c[e];l==="boolean"?a=Q5(a):a==null&&l==="string"?(a="",t=!0):l==="number"&&(a=0,t=!0)}try{c[e]=a}catch{}t&&c.removeAttribute(e)}function Ff(c,e,a,s){c.addEventListener(e,a,s)}function Bf(c,e,a,s){c.removeEventListener(e,a,s)}const v5=Symbol("_vei");function Pf(c,e,a,s,n=null){const r=c[v5]||(c[v5]={}),i=r[e];if(s&&i)i.value=s;else{const[o,t]=Wf(e);if(s){const l=r[e]=Df(s,n);Ff(c,o,l,t)}else i&&(Bf(c,o,i,t),r[e]=void 0)}}const p5=/(?:Once|Passive|Capture)$/;function Wf(c){let e;if(p5.test(c)){e={};let s;for(;s=c.match(p5);)c=c.slice(0,c.length-s[0].length),e[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):n4(c.slice(2)),e]}let z6=0;const Rf=Promise.resolve(),_f=()=>z6||(Rf.then(()=>z6=0),z6=Date.now());function Df(c,e){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;W2(Of(s,a.value),e,5,[s])};return a.value=c,a.attached=_f(),a}function Of(c,e){if(R(e)){const a=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{a.call(c),c._stopped=!0},e.map(s=>n=>!n._stopped&&s&&s(n))}else return e}const H5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Ef=(c,e,a,s,n=!1,r,i,o,t)=>{e==="class"?kf(c,s,n):e==="style"?Sf(c,a,s):w3(e)?a0(e)||Pf(c,e,a,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Uf(c,e,s,n))?If(c,e,s,r,i,o,t):(e==="true-value"?c._trueValue=s:e==="false-value"&&(c._falseValue=s),Tf(c,e,s,n))};function Uf(c,e,a,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in c&&H5(e)&&$(a));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&c.tagName==="INPUT"||e==="type"&&c.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=c.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return H5(e)&&p2(a)?!1:e in c}const $f=["ctrl","shift","alt","meta"],qf={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,e)=>$f.some(a=>c[`${a}Key`]&&!e.includes(a))},H2=(c,e)=>{const a=c._withMods||(c._withMods={}),s=e.join(".");return a[s]||(a[s]=(n,...r)=>{for(let i=0;i<e.length;i++){const o=qf[e[i]];if(o&&o(n,e))return}return c(n,...r)})},Gf=z2({patchProp:Ef},Mf);let z5;function jf(){return z5||(z5=Ql(Gf))}const Yf=(...c)=>{const e=jf().createApp(...c),{mount:a}=e;return e.mount=s=>{const n=Kf(s);if(!n)return;const r=e._component;!$(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.innerHTML="";const i=a(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),i},e};function Kf(c){return p2(c)?document.querySelector(c):c}const Xf=[{songName:"1.5 кг Отличного Пюре - Эмо.mp3",sort:181,bestParties:[{start:25,end:84}],notAggressive:!0},{songName:"Angel Vivaldi - A Martian Winter.mp3"},{songName:"Angel Vivaldi - An Erisian Autumn.mp3",sort:50,bestParties:[{start:78,end:104},{start:176,end:220},{start:246,end:268}],notAggressive:!0},{songName:"As I Lay Dying - Forever.mp3",sort:210,bestParties:[{start:0,end:25}]},{songName:"As I Lay Dying - Nothing Left.mp3",sort:40,bestParties:[{start:0,end:57}]},{songName:"As I Lay Dying - The Sound Of Truth.mp3",sort:60,bestParties:[{start:0,end:36},{start:59,end:121}]},{songName:"Aspirin Rose - Fucking Perfect (Pink cover).mp3"},{songName:"August Burns Red - A Shot Below The Belt.mp3",sort:142,bestParties:[{start:0,end:30},{start:90,end:114},{start:164,end:175}]},{songName:"August Burns Red - Barbarian.mp3",sort:20,bestParties:[{start:21,end:32},{start:70,end:88},{start:113,end:152}]},{songName:"August Burns Red - Chasing the Dragon.mp3",sort:151,bestParties:[{start:40,end:65}]},{songName:"August Burns Red - Consumer.mp3"},{songName:"August Burns Red - Indonesia.mp3",sort:141,bestParties:[{start:84,end:117},{start:161,end:180}]},{songName:"August Burns Red - Meridian.mp3",notAggressive:!0},{songName:"August Burns Red - Truth of a Liar.mp3"},{songName:"August Burns Red - Your Little Suburbia Is in Ruins.mp3",sort:70,bestParties:[{start:12,end:27},{start:107,end:125},{start:146,end:178}]},{songName:"Anaal Nathrakh - Between Shit and Piss We Are Born.mp3"},{songName:"Anaal Nathrakh - In The Constellation Of The Black Widow.mp3",sort:220,bestParties:[{start:65,end:85},{start:114,end:141}]},{songName:"Between the Buried and Me - All Bodies.mp3"},{songName:"Between The Buried And Me - Ants Of The Sky.mp3",sort:113,bestParties:[{start:0,end:108}]},{songName:"Between The Buried And Me - Sun Of Nothing.mp3"},{songName:"Between The Buried And Me - Swim To The Moon.mp3",sort:10,bestParties:[{start:135,end:160},{start:500,end:551},{start:982,end:1022}]},{songName:"Breakwater - Eleven.mp3"},{songName:"Breakwater - five.mp3"},{songName:"Bullet For My Valentine - Hand Of Blood.mp3"},{songName:"Cerebral Bore - The Bald Cadaver.mp3",sort:280,bestParties:[{start:5.5,end:50}]},{songName:"Children Of Bodom - Are You Dead Yet.mp3",sort:110,bestParties:[{start:82,end:114}]},{songName:"Cosmonauts Day - The Captain.mp3",notAggressive:!0},{songName:"Death In Vegas - Dirge.mp3"},{songName:"Dragonforce - The Flame of Youth.mp3",sort:120,bestParties:[{start:46,end:65},{start:289,end:317}]},{songName:"If These Trees Could Talk - From Roots to Needles.mp3",notAggressive:!0},{songName:"In Flames - Clayman.mp3",sort:130,bestParties:[{start:0,end:21}]},{songName:"In Flames - Reflect the Storm.mp3"},{songName:"Killing Floor - Abandon All.mp3"},{songName:"Killing Floor OST - Wake.mp3",notAggressive:!0},{songName:"Long Distance Calling - Black Paper Planes.mp3",notAggressive:!0},{songName:"Machine Head - Beautiful Mourning.mp3"},{songName:"Machine Head - Hallowed Be Thy Name.mp3"},{songName:"Machine Head - Halo.mp3"},{songName:"Ozoi The Maid - Unfortunately.mp3",sort:112,bestParties:[{start:59,end:84},{start:165,end:218},{start:240,end:253}]},{songName:"Ozoi The Maid Yakui The Maid - Lanterns.mp3",sort:111,bestParties:[{start:146,end:218}]},{songName:"Ozoi The Maid Yakui The Maid - Wonderland.mp3",sort:30,bestParties:[{start:115,end:243},{start:355,end:442}]},{songName:"Ozoi The Maid Yakui The Maid - Frontier.mp3"},{songName:"P.O.D. - Youth of the Nation.mp3",notAggressive:!0},{songName:"Psygnosis - FIIIX 2.0.mp3"},{songName:"Psygnosis - Lost in Oblivion.mp3",sort:140,bestParties:[{start:292,end:356}]},{songName:"Psygnosis - MehMeh.mp3"},{songName:"Psygnosis - Phrase 7.mp3",notAggressive:!0},{songName:"Psygnosis - Synaptic Plasticity.mp3"},{songName:"Psygnosis - The Judgement.mp3"},{songName:"Raunchy - To the Lighthouse.mp3"},{songName:"Raunchy - Twelve Feet Tall.mp3",sort:150,bestParties:[{start:65,end:96}]},{songName:"Raunchy - Wasteland Discotheque.mp3",sort:190,bestParties:[{start:0,end:34},{start:63,end:101}]},{songName:"Rhapsody - The Mighty Ride of the Firelord.mp3"},{songName:"Rhapsody of Fire - Wisdom of the Kings.mp3"},{songName:"Rise Of The Northstar - The New Path.mp3"},{songName:"Rise Of The Northstar - What The Fuck.mp3",sort:160,bestParties:[{start:45,end:79}]},{songName:"Siberian Meat Grinder feat Distemper - Пламя в Груди.mp3",sort:211,bestParties:[{start:49,end:68}]},{songName:"The Doors - Alabama song.mp3",notAggressive:!0},{songName:"The Doors - The End.mp3",notAggressive:!0},{songName:"The Faceless - Shake The Disease.mp3"},{songName:"The Five Stars - Atom Bomb Baby.mp3",notAggressive:!0},{songName:"The HAARP Machine - Esoteric Agenda.mp3"},{songName:"Toundra - Bizancio Byzantium.mp3",sort:180,bestParties:[{start:127,end:224},{start:406,end:480}],notAggressive:!0},{songName:"URO & .corridoiokraut. - Nappi.mp3",notAggressive:!0},{songName:"What Mad Universe - Colossus.mp3",notAggressive:!0,sort:171},{songName:"What Mad Universe - the world of leviathan.mp3",notAggressive:!0,sort:172},{songName:"What Mad Universe - head of column.mp3",sort:170,bestParties:[{start:30,end:65}],notAggressive:!0},{songName:"What Mad Universe - mythical sacred firebird.mp3",notAggressive:!0},{songName:"What Mad Universe - Nebula My Love.mp3",sort:80,bestParties:[{start:162,end:246},{start:260,end:358}],notAggressive:!0},{songName:"What Mad Universe - Starborne.mp3",sort:90,bestParties:[{start:85,end:105},{start:144,end:185}],notAggressive:!0},{songName:"Within The Ruins - Ataxia II.mp3"},{songName:"Between The Buried And Me - White Walls.mp3",sort:172,bestParties:[{start:111,end:155},{start:478,end:524}]},{songName:"Raunchy - The Yeah Thing.mp3",sort:193,bestParties:[{start:14,end:65}]},{songName:"Within The Ruins - Beautiful Agony.mp3"},{songName:"ZEROMANCER - Dr. Online.mp3"},{songName:"zYnthetic - Abandon All v3.mp3",sort:100,bestParties:[{start:0,end:30},{start:60,end:89}],notAggressive:!0},{songName:"zYnthetic - SSplug.mp3",notAggressive:!0},{songName:"Sunlight Ascending - (Winter) Diorama Dream.mp3",sort:255,bestParties:[{start:190,end:261}],notAggressive:!0},{songName:"Sum 41 - Still Waiting.mp3"},{songName:"Between The Buried And Me - Obfuscation.mp3",sort:119,bestParties:[{start:0,end:18.4},{start:142,end:258}]},{songName:"BATUSHKA - Yekteniya 4.mp3"},{songName:"In Flames - Trigger.mp3"},{songName:"Raunchy - Live The Myth.mp3"}],K4=Xf.sort((c,e)=>c.songName.localeCompare(e.songName));function Jf(c){return typeof c.sort=="number"&&c.bestParties!==void 0}function Qf(c){return typeof c.notAggressive=="boolean"}const d4=[{label:"All music",id:1,url:"all"},{label:"Top",id:2,url:"top"},{label:"Top Shorts",id:4,url:"shorts"},{label:"Not aggressive",id:3,url:"not_aggressive"},{label:"Favorite",id:5,url:"favorite"}],u1=d2([]),g6=d2(0),X4=d2(!1);function C0(){const c=d2(K4),e=d2(K4.filter(Jf)),a=d2(K4.filter(Qf)),s=d2(0);P3(()=>{c.value=K4,g6.value=M.value.length,c2()});const n=G(()=>{const N="/player_with_my_favorite_music/";return M.value[s.value]?`${N}music/${F.value.songName}`:""}),r=G(()=>[...e.value].sort((N,O)=>N.sort-O.sort)),i=d2(1);function o(N){!(i.value===4&&N.id===2)&&!(i.value===2&&N.id===4)&&(s.value=0),i.value=N.id,g6.value=H.value.length}function t(N){const O=N.split("&");if(O.length===2){const e2=O[0].split("=")[1],A=parseInt(O[1].split("=")[1]),Y=d4.find(o2=>o2.url===e2);Y&&(i.value=Y.id,s.value=isNaN(A)?0:A)}}(()=>{const N=window.location.hash;N&&t(N)})(),C4(()=>{const N=d4.find(Y=>Y.id===i.value),O=N?N.url:"",e2=s.value.toString(),A=`/player_with_my_favorite_music/#tab=${O}&track=${e2}`;window.history.pushState({},"",A)});const h=G(()=>{switch(i.value){case 1:return c.value;case 2:return r.value;case 3:return a.value;case 4:return r.value;case 5:return u.value;default:return[]}}),u=G(()=>c.value.filter(N=>u1.value.includes(N.songName))),m=G(()=>u.value.length?d4:d4.slice(0,d4.length-1)),v=G(()=>{var N;return i.value===4?((N=r.value[s.value])==null?void 0:N.bestParties)||[{start:0,end:30}]:[]}),H=G(()=>X4.value?C():h.value),M=G(()=>H.value.map(N=>N.songName)),F=G(()=>H.value[s.value]);function C(){return h.value.map(N=>({...N,sort:Math.random()})).sort((N,O)=>N.sort-O.sort)}function y(){console.log("nextTrack"),s.value=s.value>=H.value.length-1?0:s.value+1}function B(){s.value=s.value<=0?H.value.length-1:s.value-1}function x(N){s.value=N}function D(){X4.value=!X4.value}function c2(){const N=localStorage.getItem("favoriteSongs");N&&(u1.value=JSON.parse(N))}function Q(){localStorage.setItem("favoriteSongs",JSON.stringify(u1.value.slice(0)))}function _(){const N=F.value,O=u1.value.findIndex(e2=>e2===N.songName);O>=0?(u1.value.splice(O,1),u1.value.length||(i.value=1)):u1.value.push(N.songName),Q()}return{totalNumbSongs:g6,defaultTrackList:c,topTrackList:e,bestParties:v,nextTrack:y,previousTrack:B,pathToCurrentFile:n,currentTrackIndex:s,changeTab:o,selectTrack:x,tabSelected:i,isRandomTracks:X4,handlerRandomBtn:D,currentTracks:H,currentTracksList:M,currentSong:F,handleAddFavoriteSongBtn:_,favoriteSongs:u1,TabsOptionRender:m}}const Zf=["onClick"],ch=e1({__name:"TrackList",props:{currentTracks:{},currentTrackIndex:{}},emits:["select-track-from-list"],setup(c,{emit:e}){const a=c,s=e,n=G(()=>a.currentTracks.map(o=>{const t=o.lastIndexOf("/"),l=o==null?void 0:o.lastIndexOf(".");return o&&o.substring(t+1,l)||""}));P1(()=>a.currentTrackIndex,()=>{r()});function r(){const o=document.querySelector(".tracks .selected");o==null||o.scrollIntoView({behavior:"smooth",block:"center"})}function i(o){s("select-track-from-list",o)}return(o,t)=>(m2(),v2("ul",{class:"sidebar tracks",onClick:t[0]||(t[0]=H2(()=>{},["stop"]))},[(m2(!0),v2(M2,null,b4(n.value,(l,h)=>(m2(),v2("li",{key:h,class:T2({selected:h===o.currentTrackIndex}),onClick:H2(u=>i(h),["stop"])},P2(h+1)+". "+P2(l),11,Zf))),128))]))}}),O1=(c,e)=>{const a=c.__vccOpts||c;for(const[s,n]of e)a[s]=n;return a},eh=O1(ch,[["__scopeId","data-v-21d5be0c"]]),ah={class:"tabs"},sh=["onClick"],nh=e1({__name:"PageTabs",props:{tabSelected:{}},emits:["change-tab"],setup(c,{emit:e}){const a=c,s=e,{TabsOptionRender:n}=C0();function r(i){a.tabSelected!==i.id&&s("change-tab",i)}return(i,o)=>(m2(),v2("div",ah,[(m2(!0),v2(M2,null,b4(V2(n),t=>(m2(),v2("button",{key:t.id,class:T2({active:t.id===i.tabSelected}),onClick:H2(l=>r(t),["stop"])},P2(t.label),11,sh))),128))]))}}),rh="modulepreload",ih=function(c){return"/player_with_my_favorite_music/"+c},g5={},D2=function(e,a,s){let n=Promise.resolve();if(a&&a.length>0){const r=document.getElementsByTagName("link");n=Promise.all(a.map(i=>{if(i=ih(i),i in g5)return;g5[i]=!0;const o=i.endsWith(".css"),t=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const m=r[u];if(m.href===i&&(!o||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${t}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":rh,o||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),o)return new Promise((u,m)=>{h.addEventListener("load",u),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}return n.then(()=>e()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})},U7=c=>(u0("data-v-5aada119"),c=c(),v0(),c),oh={class:"main-info"},th=["src"],lh={class:"main-panel"},fh=U7(()=>U("i",{class:"fa-solid fa-heart"},null,-1)),hh=[fh],dh={class:"artist-info"},mh={class:"band"},uh={class:"song"},vh=U7(()=>U("i",{class:"fa-solid fa-text-height"},null,-1)),ph=[vh],Hh=e1({__name:"MainInfoBand",props:{songName:{},hasText:{type:Boolean},isFavoriteSong:{type:Boolean}},emits:["show-text-song","add-favorite"],setup(c,{emit:e}){const a=c,s=e,n=d2({});P3(async()=>{const v=Object.assign({"/src/assets/images/1.5 кг Отличного Пюре.jpg":()=>D2(()=>import("./1.5 кг Отличного Пюре-OtALhitf.js"),__vite__mapDeps([])),"/src/assets/images/Anaal Nathrakh.jpg":()=>D2(()=>import("./Anaal Nathrakh-EzGp_TLw.js"),__vite__mapDeps([])),"/src/assets/images/As I Lay Dying.jpg":()=>D2(()=>import("./As I Lay Dying-28Nx7ZD0.js"),__vite__mapDeps([])),"/src/assets/images/August Burns Red.jpg":()=>D2(()=>import("./August Burns Red-MIqwgacb.js"),__vite__mapDeps([])),"/src/assets/images/Between The Buried And Me.webp":()=>D2(()=>import("./Between The Buried And Me-TSs49cb7.js"),__vite__mapDeps([])),"/src/assets/images/In Flames.jpg":()=>D2(()=>import("./In Flames-R92cBTIn.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid Yakui The Maid.jpg":()=>D2(()=>import("./Ozoi The Maid Yakui The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/Ozoi The Maid.jpg":()=>D2(()=>import("./Ozoi The Maid-d4CbmncB.js"),__vite__mapDeps([])),"/src/assets/images/What Mad Universe.jpg":()=>D2(()=>import("./What Mad Universe-AmFbwRmj.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.png":()=>D2(()=>import("./default_logo-hDaDKpVk.js"),__vite__mapDeps([])),"/src/assets/images/default_logo.svg":()=>D2(()=>import("./default_logo-KBf8q7n2.js"),__vite__mapDeps([]))});for(const H in v){const M=H.replace(/^.*\/(.*)\.\w+$/,"$1");n.value[M]=(await v[H]()).default}});const r=G(()=>{var H;const v=(H=a.songName)==null?void 0:H.lastIndexOf(".");return a.songName&&a.songName.substring(0,v)||""}),i=G(()=>{const[v,H]=r.value.split(" - ");return{bandName:v,songName:H}}),o=G(()=>{const{bandName:v}=i.value;return n.value[v]||n.value.default_logo});function t(){var v,H;if("mediaSession"in navigator&&o.value){const M=["96x96","128x128","192x192","256x256","384x384","512x512"];navigator.mediaSession.metadata=new MediaMetadata({title:((v=i.value)==null?void 0:v.songName)||"",artist:((H=i.value)==null?void 0:H.bandName)||"",artwork:M.map(F=>({src:o.value,sizes:F,type:"image/png"}))})}}C4(()=>{i.value&&o.value&&t()});const l=G(()=>a.hasText?"":"disabled"),h=G(()=>a.isFavoriteSong?"active":"");function u(){a.hasText&&s("show-text-song")}function m(){s("add-favorite")}return(v,H)=>(m2(),v2("div",oh,[U("img",{src:o.value,class:"album-image",alt:""},null,8,th),U("div",lh,[U("button",{class:T2(["heart",h.value]),onClick:H2(m,["stop"])},hh,2),U("div",dh,[U("div",mh,P2(i.value.bandName),1),U("div",uh,P2(i.value.songName),1)]),U("button",{class:T2(["show-text",l.value]),onClick:H2(u,["stop"])},ph,2)])]))}}),zh=O1(Hh,[["__scopeId","data-v-5aada119"]]),gh={class:"volume-control"},yh=["innerHTML"],Vh=["value"],Mh=e1({__name:"VolumeControl",props:{volume:{}},emits:["volume-change"],setup(c,{emit:e}){const a=c,s=e,n=G(()=>a.volume*100),r=G(()=>a.volume>0?'<i class="fas fa-volume-up"/>':'<i class="fas fa-volume-off"/>');function i(l){const h=parseFloat(l.target.value)/100;s("volume-change",h)}function o(l){s("volume-change",l)}function t(){a.volume>0?o(0):o(.8)}return(l,h)=>(m2(),v2("div",gh,[U("button",{class:"player-button margin",onClick:H2(t,["stop"])},[U("span",{innerHTML:r.value},null,8,yh)]),U("input",{class:"margin",type:"range",value:n.value,min:"0",max:"100",step:"1",onInput:i},null,40,Vh)]))}}),Ch=O1(Mh,[["__scopeId","data-v-4b0a1860"]]),bh={class:"progress-control"},wh=["value"],Lh={class:"time-display"},xh={key:0,class:"line"},kh=e1({__name:"ProgressControl",props:{currentTime:{},totalTime:{},bestParties:{}},emits:["time-change","time-change-line"],setup(c,{emit:e}){const a=c,s=e,n=G(()=>a.currentTime/a.totalTime*100),r=G(()=>l(a.currentTime)),i=G(()=>""),o=G(()=>l(a.totalTime)),t=G(()=>{const m=Number((100/a.totalTime).toFixed(2));return a.bestParties.map(v=>({left:`${v.start*m}%`,right:`${100-v.end*m}%`}))});function l(m){const v=Math.floor(m/60),H=Math.floor(m%60);return`${v}:${String(H).padStart(2,"0")}`}function h(m){const v=m.target.parentNode||null,H=(v==null?void 0:v.clientWidth)||0,M=v.getBoundingClientRect(),F=m.clientX-M.left;s("time-change",F/H*a.totalTime)}function u(m){const v=m.target;s("time-change",Number(v.value)/100*(a.totalTime||0))}return(m,v)=>(m2(),v2("div",bh,[U("input",{type:"range",min:"0",max:"100",value:n.value,step:"1",onInput:u},null,40,wh),U("div",Lh,[U("span",null,P2(r.value),1),U("span",null,P2(i.value),1),U("span",null,P2(o.value),1)]),m.bestParties.length?(m2(),v2("div",xh,[(m2(!0),v2(M2,null,b4(t.value,(H,M)=>(m2(),v2("div",{key:M,style:k3({left:H.left,right:H.right}),class:"best-section",onClick:H2(h,["stop"])},null,4))),128))])):tf("",!0)]))}}),Nh=O1(kh,[["__scopeId","data-v-934532d8"]]),$7=c=>(u0("data-v-d315503b"),c=c(),v0(),c),Sh={class:"main-control"},Ah=$7(()=>U("i",{class:"fas fa-step-backward"},null,-1)),Th=[Ah],Ih=["innerHTML"],Fh=$7(()=>U("i",{class:"fas fa-step-forward"},null,-1)),Bh=[Fh],Ph=e1({__name:"MainControl",props:{isPlaying:{type:Boolean}},emits:["previous","play-pause","next"],setup(c,{emit:e}){const a=c,s=e;function n(){s("previous")}const r=G(()=>a.isPlaying?'<i class="fas fa-pause"/>':' <i class="fas fa-play"/>');function i(){s("play-pause")}function o(){s("next")}return(t,l)=>(m2(),v2("div",Sh,[U("button",{class:"player-button",onClick:H2(n,["stop"])},Th),U("button",{class:"player-button",onClick:H2(i,["stop"])},[U("span",{innerHTML:r.value},null,8,Ih)]),U("button",{class:"player-button",onClick:H2(o,["stop"])},Bh)]))}}),Wh=O1(Ph,[["__scopeId","data-v-d315503b"]]),q7=c=>(u0("data-v-6960fce5"),c=c(),v0(),c),Rh={class:"other"},_h=q7(()=>U("i",{class:"fas fa-shuffle"},null,-1)),Dh=[_h],Oh=q7(()=>U("i",{class:"fas fa-repeat"},null,-1)),Eh=[Oh],Uh={class:"song-display"},$h=["innerHTML"],qh=["innerHTML"],Gh=e1({__name:"OtherControl",props:{currentNumbSong:{},totalNumbSongs:{},isRandomTracks:{type:Boolean},isRepeatMode:{type:Boolean},isShowTrackList:{type:Boolean},isDarkTheme:{type:Boolean}},emits:["show-list-click","repeat-mode-click","change-theme"],setup(c,{emit:e}){const a=c,s=e,{totalNumbSongs:n,isRandomTracks:r,handlerRandomBtn:i}=C0();function o(){i()}function t(){s("repeat-mode-click")}function l(){s("show-list-click")}function h(){s("change-theme")}const u=G(()=>a.isDarkTheme?'<i class="fa-solid fa-toggle-on"/>':'<i class="fa-solid fa-toggle-off"/>'),m=G(()=>a.isShowTrackList?'<i class="fas fa-bars fa-rotate-90"/>':'<i class="fas fa-bars"/>');return(v,H)=>(m2(),v2("div",Rh,[U("button",{class:T2({active:V2(r)}),onClick:H2(o,["stop"])},Dh,2),U("button",{class:T2({active:v.isRepeatMode}),onClick:H2(t,["stop"])},Eh,2),U("div",Uh,[U("span",null,P2(v.currentNumbSong),1),g0("/"),U("span",null,P2(V2(n)),1)]),U("button",{onClick:H2(h,["stop"])},[U("span",{innerHTML:u.value},null,8,$h)]),U("button",{class:T2({active:v.isShowTrackList}),onClick:H2(l,["stop"])},[U("span",{innerHTML:m.value},null,8,qh)],2)]))}}),jh=O1(Gh,[["__scopeId","data-v-6960fce5"]]),Yh={class:"tabs"},Kh=["onClick"],Xh={class:"song-text"},Jh={class:"text-with-timestamps"},Qh=["onClick","innerHTML"],Zh=["innerHTML"],cd=e1({__name:"SongText",props:{songText:{},songTextWithTimecodes:{},currentTime:{}},emits:["time-change"],setup(c,{emit:e}){const a=c,s=e,n=G(()=>[{label:"Timecodes",id:1,available:!!a.songTextWithTimecodes.length},{label:"Raw",id:2,available:!!a.songText.length}]),r=d2(1);function i(m){s("time-change",m-.5)}C4(()=>{!a.songText.length&&a.songTextWithTimecodes.length&&(r.value=1),!a.songTextWithTimecodes.length&&a.songText.length&&(r.value=2)});const o=G(()=>{const m=[];return a.songTextWithTimecodes.forEach((v,H)=>{var M,F;(F=(M=a.songTextWithTimecodes)==null?void 0:M[H+1])!=null&&F.seconds&&Number(a.songTextWithTimecodes[H+1].seconds-a.songTextWithTimecodes[H].seconds)>20?(m.push(v),m.push({seconds:a.songTextWithTimecodes[H].seconds+3,lyrics:"&#127925"})):m.push(v)}),m}),t=G(()=>{var m;if(a.songTextWithTimecodes.length){if(a.currentTime>=o.value[o.value.length-1].seconds)return o.value.length-1;const v=(m=o.value)==null?void 0:m.findIndex((H,M,F)=>{var C;return a.currentTime>=H.seconds-1&&a.currentTime<((C=F==null?void 0:F[M+1])==null?void 0:C.seconds)});return v>0?v:0}return 0});C4(()=>{(t.value||a.songTextWithTimecodes.length)&&r.value===1&&l()}),P1(()=>a.songText,()=>{var m;(m=a.songText)!=null&&m.length&&r.value===2&&h()});function l(){const m=document.querySelector(".song-text .selected");m==null||m.scrollIntoView({behavior:"smooth",block:"center"})}function h(){const m=document.querySelector(".song-text .raw");m==null||m.scrollIntoView({behavior:"smooth",block:"start"})}function u(m){m.available&&(r.value=m.id)}return(m,v)=>(m2(),v2("div",{class:"sidebar",onClick:v[0]||(v[0]=H2(()=>{},["stop"]))},[U("div",Yh,[(m2(!0),v2(M2,null,b4(n.value,H=>(m2(),v2("button",{key:H.id,class:T2({active:H.id===r.value,disabled:!H.available}),onClick:H2(M=>u(H),["stop"])},P2(H.label),11,Kh))),128))]),U("div",Xh,[p3(U("div",Jh,[g0(P2(m.currentTime)+" ",1),(m2(!0),v2(M2,null,b4(o.value,(H,M)=>(m2(),v2("span",{key:M,class:T2({selected:M===t.value}),onClick:F=>i(H.seconds),innerHTML:`
${H.seconds} ${H.lyrics}
`},null,10,Qh))),128))],512),[[y3,r.value===1]]),p3(U("span",{class:"raw",innerHTML:m.songText},null,8,Zh),[[y3,r.value===2]])])]))}}),ed=O1(cd,[["__scopeId","data-v-1f3a2acc"]]),ad={"1.5 кг Отличного Пюре - Эмо.mp3":`Каждый раз понимать, как легко потерять
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
[Chorus]<br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw"><i>Like those gasping for their last breath<br>We cannot hide there's nothing left</i></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span><br><span class="ReferentFragmentdesktop__Highlight-sc-110r0d9-1 jAzSMw"><i>Like those gasping for their last breath<br>We cannot hide there's nothing left</i></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span><span tabindex="0" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none;z-index:-1"></span></span>`,"Toundra - Bizancio Byzantium.mp3":"","What Mad Universe - mythical sacred firebird.mp3":"","Cosmonauts Day - The Captain.mp3":"","What Mad Universe - the world of leviathan.mp3":"","Psygnosis - Synaptic Plasticity.mp3":"","Killing Floor OST - Wake.mp3":"","Killing Floor - Abandon All.mp3":"","Sunlight Ascending - (Winter) Diorama Dream.mp3":"","URO & .corridoiokraut. - Nappi.mp3":"","zYnthetic - Abandon All v3.mp3":"","What Mad Universe - Colossus.mp3":"","Breakwater - Eleven.mp3":"","Psygnosis - The Judgement.mp3":"","Psygnosis - Phrase 7.mp3":"","What Mad Universe - head of column.mp3":"","Psygnosis - MehMeh.mp3":"","Aspirin Rose - Fucking Perfect (Pink cover).mp3":"","zYnthetic - SSplug.mp3":"","What Mad Universe - Nebula My Love.mp3":"","Within The Ruins - Ataxia II.mp3":"","What Mad Universe - Starborne.mp3":"","Angel Vivaldi - An Erisian Autumn.mp3":"","Long Distance Calling - Black Paper Planes.mp3":"","Angel Vivaldi - A Martian Winter.mp3":"","Death In Vegas - Dirge.mp3":""},sd={"The Doors - The End.mp3":[{seconds:71,lyrics:"This is the end"},{seconds:74,lyrics:"Beautiful friend"},{seconds:79,lyrics:"This is the end"},{seconds:80,lyrics:"My only friend' the end"},{seconds:88,lyrics:"Of our elaborate plans' the end"},{seconds:96,lyrics:"Of everything that stands' the end"},{seconds:99,lyrics:"No safety or surprise' the end"},{seconds:105,lyrics:"I'll never look into your eyes, again"},{seconds:118,lyrics:"Can you picture what will be"},{seconds:123,lyrics:"So limitless and free"},{seconds:128,lyrics:"Desperately in need, of some, stranger's hand"},{seconds:136,lyrics:"In a, desperate land"},{seconds:190,lyrics:"Lost in a Roman, wilderness of pain"},{seconds:200,lyrics:"And all the children are insane"},{seconds:213,lyrics:"All the children are insane"},{seconds:333,lyrics:"Waiting for the summer rain' yeah"},{seconds:335,lyrics:"There's danger on the edge of town"},{seconds:358,lyrics:"Ride the King's highway' baby"},{seconds:360,lyrics:"Weird scenes inside the gold mine"},{seconds:361,lyrics:"Ride the highway west' baby"},{seconds:362,lyrics:"Ride the snake' ride the snake"},{seconds:363,lyrics:"To the lake' the ancient lake' baby"},{seconds:364,lyrics:"The snake is long' seven miles"},{seconds:365,lyrics:"Ride the snake, he's old' and his skin is cold"},{seconds:366,lyrics:"The west is the best"},{seconds:367,lyrics:"The west is the best"},{seconds:368,lyrics:"Get here' and we'll do the rest"},{seconds:370,lyrics:"The blue bus is callin' us"},{seconds:370,lyrics:"The blue bus is callin' us"},{seconds:370,lyrics:"Driver' where you taken' us"},{seconds:370,lyrics:"The killer awoke before dawn' he put his boots on"},{seconds:370,lyrics:"He took a face from the ancient gallery"},{seconds:371,lyrics:"And he walked on down the hall"},{seconds:371,lyrics:"He went into the room where his sister lived' and, then he"},{seconds:371,lyrics:"Paid a visit to his brother' and then he"},{seconds:371,lyrics:"He walked on down the hall' and"},{seconds:371,lyrics:"And he came to a door, and he looked inside"},{seconds:372,lyrics:"Father' yes son' I want to kill you"},{seconds:372,lyrics:"Mother, I want to, f**k you"},{seconds:372,lyrics:"C'mon baby' take a chance with us"},{seconds:372,lyrics:"C'mon baby' take a chance with us"},{seconds:372,lyrics:"C'mon baby' take a chance with us"},{seconds:372,lyrics:"And meet me at the back of the blue bus"},{seconds:373,lyrics:"Doin' a blue rock"},{seconds:374,lyrics:"On a blue bus"},{seconds:374,lyrics:"Doin' a blue rock"},{seconds:374,lyrics:"C'mon' yeah"},{seconds:374,lyrics:"Kill' kill' kill' kill' kill' kill"},{seconds:375,lyrics:"This is the end"},{seconds:375,lyrics:"Beautiful friend"},{seconds:375,lyrics:"This is the end"},{seconds:375,lyrics:"My only friend' the end"},{seconds:375,lyrics:"It hurts to set you free"},{seconds:375,lyrics:"But you'll never follow me"},{seconds:375,lyrics:"The end of laughter and soft lies"},{seconds:375,lyrics:"The end of nights we tried to die"},{seconds:376,lyrics:"This is the end"}],"August Burns Red - Truth of a Liar.mp3":[{seconds:14,lyrics:"Allow what's done to preach new"},{seconds:18,lyrics:"Insight to your life"},{seconds:21,lyrics:"Hindsight is perfect vision"},{seconds:25,lyrics:"The past is easiest to see"},{seconds:34,lyrics:"Clear a path, stand aside"},{seconds:37,lyrics:"We're carrying the torch now"},{seconds:44,lyrics:"Clear a path, stand aside"},{seconds:47,lyrics:"We're carrying the torch now"},{seconds:49,lyrics:"Clear a path, stand aside"},{seconds:52,lyrics:"There's no stopping us"},{seconds:54,lyrics:"Clear a path, stand aside"},{seconds:56,lyrics:"We're carrying the torch now"},{seconds:59,lyrics:"Clear a path, stand aside"},{seconds:61,lyrics:"There's no stopping us"},{seconds:69,lyrics:"Now I think you're everything"},{seconds:75,lyrics:"To everyone, to everyone"},{seconds:79,lyrics:"Go ahead, partake in it"},{seconds:83,lyrics:"Justify it"},{seconds:86,lyrics:"Become engulfed in it"},{seconds:88,lyrics:"It will eat you alive"},{seconds:95,lyrics:"This is not a one way road"},{seconds:99,lyrics:"You're headed for the dead end"},{seconds:102,lyrics:"This is not a one way road"},{seconds:105,lyrics:"You're headed for the dead end"},{seconds:109,lyrics:"This is not a one way road"},{seconds:112,lyrics:"You're headed for the dead end"},{seconds:116,lyrics:"This is not a one way road"},{seconds:119,lyrics:"You're headed for the dead end"},{seconds:123,lyrics:"You might think you're"},{seconds:125,lyrics:"Everything to everyone"},{seconds:128,lyrics:"Well pardon me if I intrude"},{seconds:133,lyrics:"You might think you're"},{seconds:135,lyrics:"Everything to everyone"},{seconds:138,lyrics:"You're not a perfect man"},{seconds:141,lyrics:"In a perfect world"},{seconds:143,lyrics:"Look at where your ignorance"},{seconds:145,lyrics:"Has brought you"},{seconds:148,lyrics:"All this will be buried like"},{seconds:150,lyrics:"The fall of Rome"},{seconds:152,lyrics:"Look at where your ignorance"},{seconds:155,lyrics:"Has brought you"},{seconds:158,lyrics:"You will come crashing down"},{seconds:163,lyrics:"But denial's what will kill you"},{seconds:169,lyrics:"But denial's what will kill you"},{seconds:174,lyrics:"But denial's what will kill you"},{seconds:194,lyrics:"All that you loved"},{seconds:195,lyrics:"All that you treasure"},{seconds:198,lyrics:"Will pass with time"},{seconds:200,lyrics:"Will pass with time"},{seconds:204,lyrics:"Blinded by the inability to see"},{seconds:209,lyrics:"Beyond flesh and blood"},{seconds:215,lyrics:"Blinded by the inability to see"},{seconds:220,lyrics:"Beyond flesh and blood"},{seconds:226,lyrics:"Shifting blame with a"},{seconds:228,lyrics:"Log in your eye"},{seconds:230,lyrics:"Insisting that a string"},{seconds:234,lyrics:"Tied to your limbs"},{seconds:236,lyrics:"Is what's to blame "},{seconds:239,lyrics:"Is what's to blame"},{seconds:241,lyrics:"Suck it up and bite the bullet"}],"ZEROMANCER - Dr. Online.mp3":[{seconds:18,lyrics:"It's the beginning of the end"},{seconds:21,lyrics:"You want things to go faster"},{seconds:25,lyrics:"It's the beginning of the end"},{seconds:29,lyrics:"Now everything′s too slow for you"},{seconds:33,lyrics:"It's the beginning of the end"},{seconds:36,lyrics:"You are one step closer"},{seconds:40,lyrics:"It's the beginning of the end"},{seconds:43,lyrics:"Say Amen"},{seconds:48,lyrics:"1-800-SUICIDE"},{seconds:51,lyrics:"Or maybe Doctor Online could help you die"},{seconds:55,lyrics:"You need wings fo fly"},{seconds:57,lyrics:"You need someone"},{seconds:59,lyrics:"To take your place"},{seconds:61,lyrics:"When you are gone"},{seconds:63,lyrics:"Is the beginning of the end"},{seconds:66,lyrics:"You know nothing last forever"},{seconds:70,lyrics:"A beginning of a trend"},{seconds:74,lyrics:"You need someone there to care for you"},{seconds:77,lyrics:"Is the beginning of the end"},{seconds:80,lyrics:"I don′t think you understand"},{seconds:84,lyrics:"Just a beginning of a flatline"},{seconds:89,lyrics:"Together"},{seconds:92,lyrics:"1-800-SUICIDE"},{seconds:95,lyrics:"Or maybe Doctor Online could help you die"},{seconds:99,lyrics:"You need wings fo fly"},{seconds:101,lyrics:"You need someone"},{seconds:103,lyrics:"To take your place"},{seconds:105,lyrics:"When you are gone"},{seconds:107,lyrics:"1-800-SUICIDE"},{seconds:110,lyrics:"Or maybe Doctor Online could help you die"},{seconds:114,lyrics:"You need wings fo fly"},{seconds:115,lyrics:"You need someone"},{seconds:117,lyrics:"To take your place"},{seconds:120,lyrics:"When you are gone"},{seconds:166,lyrics:"1-800-SUICIDE"},{seconds:169,lyrics:"Or maybe Doctor Online could help you die"},{seconds:173,lyrics:"You need wings fo fly"},{seconds:175,lyrics:"You need someone"},{seconds:177,lyrics:"To take your place"},{seconds:179,lyrics:"When you are gone"},{seconds:180,lyrics:"1-800-SUICIDE"},{seconds:184,lyrics:"Or maybe Doctor Online could help you die"},{seconds:188,lyrics:"You need wings fo fly"},{seconds:190,lyrics:"You need someone"},{seconds:191,lyrics:"To take your place"},{seconds:193,lyrics:"When you are gone"}],"August Burns Red - Chasing the Dragon.mp3":[{seconds:1,lyrics:"Living in a world of regrets"},{seconds:16,lyrics:"You never wanted this and you never will"},{seconds:18,lyrics:"X2"},{seconds:20,lyrics:"Watching your mirror image drowning in a lake of your own sorrows your own sorrows"},{seconds:30,lyrics:"But we will pray that you will pray you will look toward the skies"},{seconds:46,lyrics:"Look toward the skies which covers you like blankets and see his open arms"},{seconds:59,lyrics:"Look toward the skies"},{seconds:64,lyrics:"Look toward the skies"},{seconds:69,lyrics:"You claim you claim you were built to fall"},{seconds:74,lyrics:"You were never strong enough"},{seconds:80,lyrics:"You claim you claim you were built to fall"},{seconds:86,lyrics:"You were never strong enough"},{seconds:95,lyrics:"H****n has no healing to this unfortunate tragedy"},{seconds:105,lyrics:"Don't stray from what you've become now to who you were then"},{seconds:111,lyrics:"With a needle in your arm"},{seconds:126,lyrics:"Now affection has abandoned you can you still feel"},{seconds:129,lyrics:"Now affection has abandoned you can you still feel"},{seconds:139,lyrics:"Hold on"},{seconds:149,lyrics:"Hold on don't you die"},{seconds:151,lyrics:"Hold on don't you die on me"},{seconds:168,lyrics:"Living in a world of regrets you never wanted this and you never will"},{seconds:175,lyrics:"You claim you were built to fall you were never strong enough"},{seconds:224,lyrics:"You claim you were built to fall you were never strong enough"},{seconds:236,lyrics:"Save yourself"},{seconds:237,lyrics:"You claim you claim you were built to fall you were never strong enough"},{seconds:241,lyrics:"You claim you claim you were built to fall you were never strong enough"}],"August Burns Red - Indonesia.mp3":[{seconds:9,lyrics:"This plane is going down in flames and this time"},{seconds:14,lyrics:"There's no black box to capture your last words"},{seconds:18,lyrics:"A situation we can't make any sense of"},{seconds:24,lyrics:"Sacrifice costs all of us everything"},{seconds:30,lyrics:"This is the time to turn down our heads and turn up our hearts"},{seconds:37,lyrics:"There's no scale to balance this out"},{seconds:42,lyrics:"Some say may those who curse days curse this day"},{seconds:48,lyrics:"There's no scale to balance this out"},{seconds:63,lyrics:"How does a man wrap his mind around eternity"},{seconds:72,lyrics:"When he can't even explain his own composition"},{seconds:79,lyrics:"Don't you see it's bigger than you"},{seconds:80,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:97,lyrics:"And the white on his flag brings colors to shame colors to shame"},{seconds:103,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:108,lyrics:"And the white on his flag brings colors to shame colors to shame"},{seconds:121,lyrics:"The earth will swallow the water"},{seconds:125,lyrics:"The clouds refill the oceans"},{seconds:128,lyrics:"The earth will swallow the water and spit out"},{seconds:136,lyrics:"The clouds will refill refill the oceans"},{seconds:144,lyrics:"The earth will swallow the water and spit out"},{seconds:151,lyrics:"The clouds will refill refill the oceans"},{seconds:158,lyrics:"Humble and broken"},{seconds:161,lyrics:"This plane crashed down in flames"},{seconds:164,lyrics:"With a man who lived who died to better this world"},{seconds:188,lyrics:"David rest in peace"},{seconds:190,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:192,lyrics:"And the white on his flag brings colors to shame colors to shame"},{seconds:198,lyrics:"He sleeps in the mountains of Indonesia"},{seconds:203,lyrics:"And the white on his flag brings colors to shame colors to shame"}],"Between The Buried And Me - Ants Of The Sky.mp3":[{seconds:0,lyrics:"My teeth taste funny today they seem more jagged than normal"},{seconds:5,lyrics:"I've been told that I have been grinding them"},{seconds:19,lyrics:"Like the gears during my dream hours"},{seconds:32,lyrics:"I wonder if its just my thoughts fusing into one frequent dream"},{seconds:37,lyrics:"One which parts with the night"},{seconds:61,lyrics:"There are frequent amongst the walking crawlers"},{seconds:109,lyrics:"I saw them dragging the other day"},{seconds:189,lyrics:"Scraping their knees and elbows against the bumpy pavement"},{seconds:195,lyrics:"Blood tracks have been filling the streets"},{seconds:200,lyrics:"Seems the high horse is taking them all home"},{seconds:208,lyrics:"I can't leave myself out"},{seconds:213,lyrics:"Why should we sleep today"},{seconds:279,lyrics:"Why should we awake tomorrow"},{seconds:283,lyrics:"We can just pop back a few and drift though this pre-programmed flight"},{seconds:294,lyrics:"Across all oceans a windy noisy trek"},{seconds:298,lyrics:"This seems to be what I've needed"},{seconds:299,lyrics:"The view used to be better lands are growing into one"},{seconds:318,lyrics:"We wanted it this way We were brought up to grow into one"},{seconds:388,lyrics:"I'm going to fly up soon and seek other lands"},{seconds:409,lyrics:"The soothing air of flight"},{seconds:411,lyrics:"A birds eye view into what I've always imagined life could be"},{seconds:420,lyrics:"Will it be sought after"},{seconds:429,lyrics:"It might just be useless writing and ideas that laziness will corrupt in the end"},{seconds:511,lyrics:"Bones of dust need hardening"},{seconds:526,lyrics:"I think the prescription is found"},{seconds:540,lyrics:"Sleep on fly on"},{seconds:594,lyrics:"In your mind you can fly"},{seconds:601,lyrics:"My teeth grin oddly today"},{seconds:607,lyrics:"They seem to gleam more than normal"},{seconds:658,lyrics:"Maybe it will be noticed"},{seconds:684,lyrics:"That's all we ever asked for grinning through it all"},{seconds:691,lyrics:"In the corner the thinker thinks I seem more jagged than normal"},{seconds:713,lyrics:"I am the episode of constant wandering"},{seconds:731,lyrics:"A nomad in my own surroundings"},{seconds:762,lyrics:"This hand produces the nerve"},{seconds:771,lyrics:"The walking dead"},{seconds:774,lyrics:"Walking dead"}],"1.5 кг Отличного Пюре - Эмо.mp3":[],"As I Lay Dying - Forever.mp3":[{seconds:2,lyrics:"Forever your eyes will hold the memory"},{seconds:7,lyrics:"I saw your heart as it overtook me"},{seconds:13,lyrics:"We tried so hard to understand and reason"},{seconds:18,lyrics:"But in the one moment 'I gave my heart away"},{seconds:32,lyrics:"And I gave my heart away"},{seconds:36,lyrics:"But in the moment"},{seconds:38,lyrics:"I gave my heart away"},{seconds:40,lyrics:"But in the moment"},{seconds:43,lyrics:"I gave my heart away"},{seconds:51,lyrics:"Your the perfect breath where' my mind lay beside me"},{seconds:56,lyrics:"And all I knew is what had overtaken me"},{seconds:62,lyrics:"With no explanation I am comforted"},{seconds:70,lyrics:"By my inability 'to understand"},{seconds:76,lyrics:"Forever your eyes will hold the memory"},{seconds:80,lyrics:"I saw your heart as it overtook me"},{seconds:87,lyrics:"We tried so hard to understand and reason"},{seconds:92,lyrics:"But in the one moment I gave my heart away"},{seconds:106,lyrics:"And I gave my heart away"},{seconds:108,lyrics:"But in the moment"},{seconds:111,lyrics:"I gave my heart away"},{seconds:114,lyrics:"But in the moment"},{seconds:117,lyrics:"I gave my heart away"},{seconds:146,lyrics:"Forever your eyes will hold the memory"},{seconds:156,lyrics:"Forever your eyes will hold the memory"},{seconds:168,lyrics:"Forever your eyes will hold the memory"},{seconds:226,lyrics:"When I wake from this dream "},{seconds:234,lyrics:"Will your smile still open my heart"},{seconds:242,lyrics:"And leave me transparent "},{seconds:251,lyrics:"When I wake from this dream "},{seconds:259,lyrics:"Will your smile still open my heart"}],"As I Lay Dying - The Sound Of Truth.mp3":[{seconds:37,lyrics:"We have all heard what we wanted to hear"},{seconds:43,lyrics:"Truth that sounds right to our ears"},{seconds:48,lyrics:"We have all heard what we wanted to hear"},{seconds:54,lyrics:"Truth that sounds right to our ears"},{seconds:60,lyrics:"But what wisdom is there within us"},{seconds:66,lyrics:"To live based on the feeling of our hearts"},{seconds:71,lyrics:"How many times has instinct let us down"},{seconds:77,lyrics:"Never to be thought through"},{seconds:80,lyrics:"Never to be questioned no"},{seconds:86,lyrics:"Say what you really mean"},{seconds:89,lyrics:"When your ambition calls you calls you"},{seconds:95,lyrics:"For what use is there"},{seconds:98,lyrics:"Is there in praying"},{seconds:101,lyrics:"If you will only hear what you want to hear"},{seconds:121,lyrics:"We have all heard what we wanted to hear"},{seconds:127,lyrics:"Truth that sounds right to our ears"},{seconds:135,lyrics:"We speak of fighting to resist this world"},{seconds:141,lyrics:"But what about the battle within us"},{seconds:147,lyrics:"If we have chosen to live against the grain"},{seconds:153,lyrics:"Then why are we all facing the same way"},{seconds:170,lyrics:"There is no difference between us and them"},{seconds:176,lyrics:"If we all blindly seek truth from sentiments"},{seconds:217,lyrics:"We have all heard what we wanted to hear"},{seconds:223,lyrics:"Truth that sounds right to our ears"},{seconds:229,lyrics:"We have all heard what we wanted to hear"},{seconds:235,lyrics:"Truth that sounds right to our ears"},{seconds:240,lyrics:"We have all heard what we wanted to hear"},{seconds:246,lyrics:"Truth that sounds right to our ears"}],"August Burns Red - Meridian.mp3":[{seconds:0,lyrics:"The song called meridian"},{seconds:189,lyrics:"The people who survive the sword will find favor in the desert"},{seconds:196,lyrics:"I will build you up again and you will be rebuilt"},{seconds:203,lyrics:"I am the painter making this mess a masterpiece"},{seconds:220,lyrics:"I will rebuild"},{seconds:230,lyrics:"I will rebuild you up again"}],"Bullet For My Valentine - Hand Of Blood.mp3":[{seconds:30,lyrics:"There goes my Valentine again"},{seconds:33,lyrics:"Soaked in Red for what she said"},{seconds:36,lyrics:"And Now she's gone "},{seconds:38,lyrics:"Oh my god have i done it again "},{seconds:41,lyrics:"There's a pulse and its deafening"},{seconds:44,lyrics:"I can't help what i hear in my head "},{seconds:46,lyrics:"Its the switch that i flick when he says "},{seconds:52,lyrics:"Hand of Blood "},{seconds:53,lyrics:"I don't wana feel my heart is breaking "},{seconds:55,lyrics:"Hand OF Blood "},{seconds:55,lyrics:"I don't wana see my life is burning"},{seconds:59,lyrics:"I saw you look away "},{seconds:73,lyrics:"Is what you've seen too much to take or are you blind and seeing nothing "},{seconds:77,lyrics:"(I saw you run)I saw you run away "},{seconds:83,lyrics:"Is what i've done to much to take or are you scared of being nothing "},{seconds:89,lyrics:"Theres a stain on my hand, and its red"},{seconds:92,lyrics:"Oh my god, am i losing it "},{seconds:94,lyrics:"I can't help what I've done or I've said"},{seconds:97,lyrics:"It's the button i push when he says "},{seconds:99,lyrics:"Hand of Blood "},{seconds:100,lyrics:"I don't wana feel my heart is breaking "},{seconds:104,lyrics:"Hand OF Blood "},{seconds:106,lyrics:"I don't wana see my life is burning "},{seconds:120,lyrics:"I saw you look away "},{seconds:124,lyrics:"Is what youve seen to much to take or are you blind and seeing nothing "},{seconds:129,lyrics:"(I saw you run away) I saw you run away "},{seconds:134,lyrics:"Is what i've done to much to take or are you scared of being nothing"},{seconds:138,lyrics:"Ｓ Ｏ Ｌ Ｏ "},{seconds:182,lyrics:"MIA, , , , , , , "},{seconds:194,lyrics:"I saw you look away "},{seconds:197,lyrics:"Is what youve seen to much to take or are you blind and seeing nothing"},{seconds:202,lyrics:"(I saw you run away)I saw you run away "},{seconds:207,lyrics:"Is what i've done to much to take or are you scared of being nothing"}],"August Burns Red - Consumer.mp3":[{seconds:2,lyrics:"A front seat to your own flick"},{seconds:16,lyrics:"If only you could see how much your emotions waver"},{seconds:41,lyrics:"Words are flowing from your mouth at lightning speed"},{seconds:46,lyrics:"They're packing heat and are ready to kill"},{seconds:53,lyrics:"Cry"},{seconds:55,lyrics:"Frown"},{seconds:56,lyrics:"Hit"},{seconds:57,lyrics:"Yell"},{seconds:61,lyrics:"Let's watch where it takes you"},{seconds:66,lyrics:"You really don't have it that bad"},{seconds:72,lyrics:"Try looking through the glass of beauty"},{seconds:78,lyrics:"It will show you truth"},{seconds:81,lyrics:"We are all guilty of self centeredness"},{seconds:91,lyrics:"We have committed the crime"},{seconds:107,lyrics:"But what we fail to realize is the dent it leaves in our soul"},{seconds:118,lyrics:"Everyone is full of it in their own way"},{seconds:127,lyrics:"A young boy cannot comprehend social status"},{seconds:131,lyrics:"And this boy is better off than any of us"},{seconds:149,lyrics:"Life will pass by us like a summer storm"},{seconds:188,lyrics:"And if we consume ourselves with ourselves we will surely look back with sorrow"}],"Children Of Bodom - Are You Dead Yet.mp3":[],"August Burns Red - Barbarian.mp3":[{seconds:12,lyrics:"Chaos brings order"},{seconds:32,lyrics:"Who will you allow to lead you blindly until the end"},{seconds:44,lyrics:"You're like a little girl with a stupid crush"},{seconds:56,lyrics:"We all sing glory"},{seconds:77,lyrics:"We all choke ourselves with our own ignorance"},{seconds:88,lyrics:"There is so much more to life than your stupid desires"},{seconds:101,lyrics:"Nothing is everything and everything is something"},{seconds:107,lyrics:"Confused Troubled"},{seconds:115,lyrics:"Finding the meaning is looking through the vivid transparencies"},{seconds:124,lyrics:"Dance the night away because tomorrow"},{seconds:127,lyrics:"We will look back and talk about good times now gone forever"},{seconds:154,lyrics:"Trace lines around the image of your choice"},{seconds:160,lyrics:"Dance until the end my friend and find joy in every living thing"},{seconds:190,lyrics:"Optimism is not a choice it's a belief"}],"As I Lay Dying - Nothing Left.mp3":[{seconds:22,lyrics:"Yeah"},{seconds:58,lyrics:"This world was never worthy"},{seconds:61,lyrics:"But how can I call it unfaithful"},{seconds:68,lyrics:"Every promise was fulfilled"},{seconds:72,lyrics:"As decay crawled from it's throat"},{seconds:80,lyrics:"Like the dead rising from an open grave"},{seconds:91,lyrics:"Like the dead rising from an open grave"},{seconds:118,lyrics:"Lips of splendor and tongue of deceit"},{seconds:122,lyrics:"All dying now as our fragile wrists hold only waste"},{seconds:129,lyrics:"Like those gasping for their last breath"},{seconds:135,lyrics:"We cannot hide there's nothing left"},{seconds:140,lyrics:"Like those gasping for their last breath"},{seconds:146,lyrics:"We cannot hide there's nothing left"},{seconds:148,lyrics:"Nothing left"},{seconds:154,lyrics:"Nothing left"},{seconds:163,lyrics:"There's nothing left"},{seconds:168,lyrics:"Nothing left"},{seconds:195,lyrics:"If all my sorrow has led me here"},{seconds:203,lyrics:"Then I would cry all of my tears"},{seconds:208,lyrics:"To have this chance again to have this chance again"},{seconds:215,lyrics:"To have this chance again to have this chance again"},{seconds:226,lyrics:"And know there's more than this"},{seconds:228,lyrics:"And know there's more than you"},{seconds:268,lyrics:"Like those gasping for their last breath"},{seconds:273,lyrics:"We cannot hide there's nothing left"},{seconds:277,lyrics:"Like those gasping for their last breath"},{seconds:283,lyrics:"We cannot hide there's nothing left"}],"Between The Buried And Me - Sun Of Nothing.mp3":[{seconds:4,lyrics:"Everywhere I look they are there"},{seconds:8,lyrics:"What is everyone doing"},{seconds:11,lyrics:"Going to a home"},{seconds:16,lyrics:"Everywhere I look they are there"},{seconds:20,lyrics:"What is everyone doing"},{seconds:23,lyrics:"Going to a home"},{seconds:28,lyrics:"To a place that makes us feel warm"},{seconds:30,lyrics:"A place that grants us a smile"},{seconds:33,lyrics:"Grants us a smile"},{seconds:37,lyrics:"Seems like a very simple idea but not hardly figured out"},{seconds:51,lyrics:"I just see faces"},{seconds:58,lyrics:"Faces staring blank as they go on with the routine"},{seconds:66,lyrics:"I just see faces"},{seconds:74,lyrics:"Faces staring blank as they go on with the routine"},{seconds:82,lyrics:"This routine"},{seconds:87,lyrics:"Nothing new it's time to go through with this"},{seconds:93,lyrics:"This routine"},{seconds:98,lyrics:"Nothing new it's time to go through with this"},{seconds:104,lyrics:"This routine"},{seconds:108,lyrics:"Nothing new it's time to go through with this"},{seconds:139,lyrics:"A spaceman that's what they say I am"},{seconds:147,lyrics:"Nothing but a spaceman always pushing it all away"},{seconds:164,lyrics:"Nothing but a spaceman always pushing it all away"},{seconds:175,lyrics:"Trying to get to that one place I call home"},{seconds:183,lyrics:"The journey begins"},{seconds:188,lyrics:"Forcing a new life with the unexplained"},{seconds:193,lyrics:"A creeping rush that surrounds me"},{seconds:198,lyrics:"Floating away"},{seconds:202,lyrics:"Floating away"},{seconds:203,lyrics:"Floating away"},{seconds:204,lyrics:"Floating away"},{seconds:205,lyrics:"Floating away"},{seconds:230,lyrics:"Always pushing it all away"},{seconds:234,lyrics:"Trying to get to that one place I call home"},{seconds:244,lyrics:"My own planet I allowed this wish"},{seconds:254,lyrics:"Unexpected not knowing why"},{seconds:264,lyrics:"Wonder why why"},{seconds:278,lyrics:"Wonder why I question it now"},{seconds:294,lyrics:"I'm my own planet"},{seconds:310,lyrics:"Not many can experience this sensation"},{seconds:320,lyrics:"Loneliness is creeping out"},{seconds:324,lyrics:"Or in however you think of it"},{seconds:333,lyrics:"But it sure is surrounding me"},{seconds:338,lyrics:"Maybe all the complaining is an accordance of boredom"},{seconds:347,lyrics:"I suppose it's too late"},{seconds:352,lyrics:"I am floating farther and farther away"},{seconds:362,lyrics:"I am floating farther I am floating"},{seconds:371,lyrics:"I did love I did laugh I did live"},{seconds:419,lyrics:"A spaceman they say I am a spaceman"},{seconds:443,lyrics:"A spaceman they say I am a spaceman"},{seconds:461,lyrics:"Planets everywhere my own destiny"},{seconds:475,lyrics:"I'm floating towards the sun"},{seconds:484,lyrics:"The sun of nothing floating towards the sun"},{seconds:500,lyrics:"The sun of nothing I have become the sun of nothing"},{seconds:513,lyrics:"Nothing is here memories are not clear"},{seconds:533,lyrics:"Floating to the sun the sun nothing"},{seconds:548,lyrics:"Floating to the sun the sun nothing"},{seconds:561,lyrics:"Floating floating floating"},{seconds:567,lyrics:"Floating to the sun farther away"},{seconds:588,lyrics:"I can't believe that's what it has come to"},{seconds:594,lyrics:"I never really had it all that bad"},{seconds:601,lyrics:"I just looked around and never thought about the blank stares"},{seconds:613,lyrics:"Blank stairs"},{seconds:625,lyrics:"They were looking into something much worse than what I thought I was"},{seconds:631,lyrics:"Selfishness is a very sticky quality of this species looking around"},{seconds:637,lyrics:"I don't see any faces yes I am lonely"},{seconds:643,lyrics:"It's to be expected I'll sleep now"},{seconds:646,lyrics:"Dream waves"}],"Killing Floor OST - Wake.mp3":[],"Machine Head - Beautiful Mourning.mp3":[{seconds:0,lyrics:"F**k you all"},{seconds:33,lyrics:"My redemption is knowing this will be over"},{seconds:39,lyrics:"My aggression I fear I've lost control"},{seconds:46,lyrics:"Who is this man I stare"},{seconds:49,lyrics:"Mirror reflects a stranger"},{seconds:52,lyrics:"Fist shatters the despair"},{seconds:55,lyrics:"Awake the pain to anger"},{seconds:57,lyrics:"How do I close thine eyes of murder"},{seconds:71,lyrics:"How do I close thine eyes of murder"},{seconds:79,lyrics:"Staring into me"},{seconds:87,lyrics:"My obsession is dying sinking me deeper"},{seconds:90,lyrics:"My depression this world has disavowed"},{seconds:98,lyrics:"Razor at wrist I seethe"},{seconds:102,lyrics:"The flesh is peeled apart now"},{seconds:104,lyrics:"Gone is my faded dream"},{seconds:107,lyrics:"Failure I welcome in thou"},{seconds:108,lyrics:"How do I close thine eyes of murder"},{seconds:109,lyrics:"How do I close thine eyes of murder"},{seconds:158,lyrics:"Staring into me"},{seconds:159,lyrics:"This lifetime in sorrow"},{seconds:165,lyrics:"God let the angels die"},{seconds:168,lyrics:"This is our last goodbye"},{seconds:177,lyrics:"In love and death we cry"},{seconds:188,lyrics:"Our last goodbye"},{seconds:198,lyrics:"No no no no"},{seconds:220,lyrics:"No no no no"},{seconds:225,lyrics:"Spit in the face of loss"},{seconds:228,lyrics:"Coward my own self hatred"},{seconds:231,lyrics:"No more I bear this cross"},{seconds:234,lyrics:"Suffer and rise from the dead"},{seconds:238,lyrics:"This lifetime in sorrow"},{seconds:244,lyrics:"God let the angels die"},{seconds:248,lyrics:"This is our last goodbye"},{seconds:255,lyrics:"In love and death we cry"}],"Machine Head - Hallowed Be Thy Name.mp3":[{seconds:13,lyrics:"I'm waiting in my cold cell"},{seconds:20,lyrics:"When the bell begins to chime"},{seconds:27,lyrics:"Reflecting on my past life"},{seconds:34,lyrics:"And it doesn't have much time"},{seconds:41,lyrics:"'Cause at 5 o'clock they'll take me to the gallows pole"},{seconds:55,lyrics:"The sands of time for me are running low"},{seconds:78,lyrics:"Running low oh yeah"},{seconds:106,lyrics:"When the priest comes to read me the last rites"},{seconds:109,lyrics:"I take a look through the bars at the last sights"},{seconds:111,lyrics:"Of a world that has gone very wrong for me"},{seconds:116,lyrics:"Can it be that there's some sort of error"},{seconds:118,lyrics:"Hard to stop the surmounting terror"},{seconds:120,lyrics:"Is it really the end not some crazy dream"},{seconds:125,lyrics:"Somebody please tell me that I'm dreaming"},{seconds:127,lyrics:"It's not easy to stop from screaming"},{seconds:130,lyrics:"But words escape me when I try to speak"},{seconds:135,lyrics:"Tears fall but why am I crying"},{seconds:137,lyrics:"After all I'm not afraid of dying"},{seconds:139,lyrics:"Do not believe that there never is an end"},{seconds:199,lyrics:"As the guards march me out to the courtyard"},{seconds:201,lyrics:"Somebody cries from a cell God be with you"},{seconds:204,lyrics:"If there's a God"},{seconds:205,lyrics:"Then why has he let me go go go"},{seconds:208,lyrics:"As I walk my life drifts before me"},{seconds:211,lyrics:"Though the end is near I'm not sorry"},{seconds:213,lyrics:"Catch my soul it's willing to fly away"},{seconds:217,lyrics:"Mark my words believe my soul lives on"},{seconds:220,lyrics:"Don't worry now that I have gone"},{seconds:222,lyrics:"I've gone beyond to see the truth truth truth"},{seconds:227,lyrics:"When you know that your time is close at hand"},{seconds:229,lyrics:"Maybe then you'll begin to understand"},{seconds:231,lyrics:"Life down here is just a strange illusion"},{seconds:394,lyrics:"Yeah yeah yeah"},{seconds:399,lyrics:"Hallowed be thy name"},{seconds:403,lyrics:"Yeah yeah yeah"},{seconds:407,lyrics:"Hallowed be thy name"}],"Dragonforce - The Flame of Youth.mp3":[{seconds:66,lyrics:"Close your eyes, hear the thunder and rain"},{seconds:68,lyrics:"Fear inside of the torturing pain"},{seconds:69,lyrics:"For the cries of the world and the last lives remain"},{seconds:75,lyrics:"Chain your heart swear to die for their gain"},{seconds:78,lyrics:"Deep inside slowly fading away"},{seconds:80,lyrics:"And the last breath remains and the fear turns to rage"},{seconds:84,lyrics:"Locked in a world by the fallen evil souls"},{seconds:87,lyrics:"Torn right apart for your life insane"},{seconds:89,lyrics:"Burning in my mind now to bring my life to hold"},{seconds:92,lyrics:"Reach out and die in the flames"},{seconds:94,lyrics:"See through the lies and their ever staring eyes"},{seconds:96,lyrics:"Now is the time to defend your ground"},{seconds:98,lyrics:"Destiny will call to remind us all now"},{seconds:101,lyrics:"Fly free so far from here, this life we now will end"},{seconds:105,lyrics:"In dreams of everlasting pain the fallen now rise again"},{seconds:110,lyrics:"Through the fire, through the flames like the sun will rise again"},{seconds:115,lyrics:"Lost in time, lost in space to the end of all their days"},{seconds:120,lyrics:"See their endless ways insanity, the quest deranged not meant to be"},{seconds:125,lyrics:"In flames will now forever burn eternally"},{seconds:130,lyrics:"So free your heart, leave your life far behind"},{seconds:134,lyrics:"In the cold of winter skies escape the pain inside"},{seconds:140,lyrics:"Now feel your soul lost in seas of all eternity"},{seconds:145,lyrics:"Every day this life defending and the flames of youth not ending"},{seconds:150,lyrics:"In a lifetime searching, we must fight through the eternal pain"},{seconds:176,lyrics:"So alone in a world far away, memories of a dream will remain"},{seconds:180,lyrics:"As the world falling calls and our lives all in vain"},{seconds:185,lyrics:"Fire in my soul will forever rise again"},{seconds:188,lyrics:"Nothing in my mind to remember now"},{seconds:190,lyrics:"Broken by the fear of the dark night calling"},{seconds:192,lyrics:"Ride free on endless seas, the final curtain falls"},{seconds:197,lyrics:"Cut the ground from down below, the time to lock and to load"},{seconds:202,lyrics:"Through the fire, through the rain, far across the distant plains"},{seconds:206,lyrics:"Feel the wind beneath the steel as your mind becomes insane"},{seconds:211,lyrics:"Save the pain from all humanity, that rides throughout our destiny"},{seconds:215,lyrics:"For freedom now we rise for all again"},{seconds:222,lyrics:"So free your heart, leave your life far behind"},{seconds:226,lyrics:"In the cold of winter skies escape the pain inside"},{seconds:231,lyrics:"Now feel your soul lost in seas of all eternity"},{seconds:235,lyrics:"Every day this life defending and the flames of youth not ending"},{seconds:241,lyrics:"In a lifetime searching, we must fight through the eternal pain"},{seconds:349,lyrics:"So free your heart, leave your life far behind"},{seconds:352,lyrics:"In the cold of winter skies escape the pain inside"},{seconds:358,lyrics:"And when the memories are all but left behind"},{seconds:363,lyrics:"And the days have gone forever, lost within my mind"},{seconds:368,lyrics:"Now feel your soul burn in seas of all eternity"},{seconds:372,lyrics:"Every day this life defending and the flames of youth not ending"},{seconds:378,lyrics:"In a lifetime searching, we must fight through the eternal pain"},{seconds:387,lyrics:"We fight through the eternal pain"}],"The Doors - Alabama song.mp3":[{seconds:11,lyrics:"Well, show me the way"},{seconds:13,lyrics:"To the next whisky bar"},{seconds:17,lyrics:"Oh, don't ask why"},{seconds:20,lyrics:"Oh, don't ask why"},{seconds:22,lyrics:"Show me the way"},{seconds:24,lyrics:"To the next whisky bar"},{seconds:28,lyrics:"Oh, don't ask why"},{seconds:31,lyrics:"Oh, don't ask why"},{seconds:34,lyrics:"For if we don't find"},{seconds:36,lyrics:"The next whisky bar"},{seconds:39,lyrics:"I tell you we must die"},{seconds:42,lyrics:"I tell you we must die"},{seconds:44,lyrics:"I tell you, I tell you"},{seconds:47,lyrics:"I tell you we must die"},{seconds:55,lyrics:"Oh, moon of Alabama"},{seconds:60,lyrics:"We now must say goodbye"},{seconds:66,lyrics:"We've lost our good old mama"},{seconds:73,lyrics:"And must have whisky, oh, you know why"},{seconds:81,lyrics:"Oh, moon of Alabama"},{seconds:83,lyrics:"We now must say goodbye"},{seconds:88,lyrics:"We've lost our good old mama"},{seconds:94,lyrics:"And must have whisky, oh, you know why"},{seconds:105,lyrics:"Well, show me the way"},{seconds:107,lyrics:"To the next little girl"},{seconds:111,lyrics:"Oh, don't ask why"},{seconds:114,lyrics:"Oh, don't ask why"},{seconds:116,lyrics:"Show me the way"},{seconds:118,lyrics:"To the next little girl"},{seconds:122,lyrics:"Oh, don't ask why"},{seconds:124,lyrics:"Oh, don't ask why"},{seconds:128,lyrics:"For if we don't find"},{seconds:130,lyrics:"The next little girl"},{seconds:133,lyrics:"I tell you we must die"},{seconds:135,lyrics:"I tell you we must die"},{seconds:138,lyrics:"I tell you, I tell you"},{seconds:141,lyrics:"I tell you we must die"},{seconds:171,lyrics:"Oh, moon of Alabama"},{seconds:175,lyrics:"We now must say goodbye"},{seconds:181,lyrics:"We've lost our good old mama"},{seconds:188,lyrics:"And must have whisky, oh, you know why"}],"P.O.D. - Youth of the Nation.mp3":[{seconds:33,lyrics:"Last day of the rest of my life"},{seconds:35,lyrics:"I wish I would've known"},{seconds:36,lyrics:"'Cause I didn't kiss my mama goodbye"},{seconds:37,lyrics:"I didn't tell her that I loved her and how much I care"},{seconds:39,lyrics:"Or thank my pops for all the talks"},{seconds:41,lyrics:"And all the wisdom he shared"},{seconds:42,lyrics:"Unaware, I just did what I always do"},{seconds:44,lyrics:"Everyday, the same routine"},{seconds:45,lyrics:"Before I skate off to school"},{seconds:47,lyrics:"But who knew that this day wasn't like the rest"},{seconds:49,lyrics:"Instead of taking a test"},{seconds:50,lyrics:"I took two to the chest"},{seconds:53,lyrics:"Call me blind, but I didn't see it coming"},{seconds:54,lyrics:"Everybody was running"},{seconds:55,lyrics:"But I couldn't hear nothing"},{seconds:57,lyrics:"Except gun blasts, it happened so fast"},{seconds:59,lyrics:"I don't really know this kid"},{seconds:60,lyrics:"Even though I sit by him in class"},{seconds:62,lyrics:"Maybe this kid was reaching out for love"},{seconds:64,lyrics:"Or maybe for a moment"},{seconds:65,lyrics:"He forgot who he was"},{seconds:67,lyrics:"Or maybe this kid just wanted to be hugged"},{seconds:69,lyrics:"Whatever it was"},{seconds:70,lyrics:"I know it's because"},{seconds:72,lyrics:"Chorus"},{seconds:73,lyrics:"We are, We are, the youth of the nation"},{seconds:77,lyrics:"We are, We are, the youth of the nation"},{seconds:82,lyrics:"We are, We are, the youth of the nation"},{seconds:87,lyrics:"We are, We are, the youth of the nation"},{seconds:92,lyrics:"Little Suzy, she was only twelve"},{seconds:93,lyrics:"She was given the world"},{seconds:94,lyrics:"With every chance to excel"},{seconds:96,lyrics:"Hang with the boys and hear the stories they tell"},{seconds:98,lyrics:"She might act kind of proud"},{seconds:100,lyrics:"But no respect for herself"},{seconds:101,lyrics:"She finds love in all the wrong places"},{seconds:103,lyrics:"The same situations"},{seconds:104,lyrics:"Just different faces"},{seconds:106,lyrics:"Changed up her pace since her daddy left her"},{seconds:108,lyrics:"Too bad he never told her"},{seconds:110,lyrics:"She deserved much better"},{seconds:111,lyrics:"Johnny boy always played the fool"},{seconds:113,lyrics:"He broke all the rules"},{seconds:114,lyrics:"So you would think he was cool"},{seconds:116,lyrics:"He was never really one of the guys"},{seconds:118,lyrics:"No matter how hard he tried"},{seconds:119,lyrics:"Often thought of suicide"},{seconds:121,lyrics:"It's kind of hard when you ain't got no friends"},{seconds:123,lyrics:"He put his life to an end"},{seconds:124,lyrics:"They might remember him then"},{seconds:126,lyrics:"You cross the line and there's no turning back"},{seconds:128,lyrics:"Told the world how he felt"},{seconds:129,lyrics:"With the sound of a gat"},{seconds:131,lyrics:"We are, We are, the youth of the nation"},{seconds:136,lyrics:"We are, We are, the youth of the nation"},{seconds:141,lyrics:"We are, We are, the youth of the nation"},{seconds:146,lyrics:"We are, We are, the youth of the nation"},{seconds:170,lyrics:"Who's to blame for the lives that tragedies claim"},{seconds:172,lyrics:"No matter what you say"},{seconds:173,lyrics:"It don't take away the pain"},{seconds:175,lyrics:"That I feel inside, I'm tired of all the lies"},{seconds:177,lyrics:"Don't nobody know why"},{seconds:178,lyrics:"It's the blind leading the blind"},{seconds:180,lyrics:"I guess that's the way the story goes"},{seconds:181,lyrics:"Will it ever make sense"},{seconds:183,lyrics:"Somebody's got to know"},{seconds:185,lyrics:"There's got to be more to life than this"},{seconds:186,lyrics:"There's got to be more to everything"},{seconds:188,lyrics:"I thought exists"},{seconds:190,lyrics:"We are, We are, the youth of the nation"},{seconds:195,lyrics:"We are, We are, the youth of the nation"},{seconds:199,lyrics:"We are, We are"},{seconds:201,lyrics:"We are, We are the youth of the nation"},{seconds:205,lyrics:"We are, We are"},{seconds:206,lyrics:"We are, We are the youth of the nation"},{seconds:210,lyrics:"We are, We are"},{seconds:211,lyrics:"We are, We are the youth of the nation"},{seconds:214,lyrics:"We are, We are"},{seconds:215,lyrics:"We are, We are the youth of the nation"},{seconds:219,lyrics:"We are, We are"},{seconds:221,lyrics:"We are, We are the youth of the nation"},{seconds:225,lyrics:"We are, We are"},{seconds:226,lyrics:"We are, We are the youth of the nation"},{seconds:231,lyrics:"We are the youth of the nation"},{seconds:235,lyrics:"We are the youth of the nation"},{seconds:240,lyrics:"We are the youth of the nation"},{seconds:245,lyrics:"We are"}],"The Faceless - Shake The Disease.mp3":[{seconds:47,lyrics:"I'm not going down on my knees"},{seconds:50,lyrics:"Begging you to adore me"},{seconds:56,lyrics:"Can't you see it's misery"},{seconds:59,lyrics:"And torture for me"},{seconds:65,lyrics:"When I'm misunderstood"},{seconds:69,lyrics:"Try as hard as you can I've tried as hard as I could"},{seconds:73,lyrics:"To make you see"},{seconds:77,lyrics:"How important it is for me"},{seconds:82,lyrics:"Here is a plea"},{seconds:84,lyrics:"From my heart to you"},{seconds:86,lyrics:"Nobody knows me"},{seconds:88,lyrics:"As well as you do"},{seconds:90,lyrics:"You know how hard it is for me"},{seconds:93,lyrics:"To shake the disease"},{seconds:95,lyrics:"That takes hold of my tongue"},{seconds:97,lyrics:"In situations like these"},{seconds:105,lyrics:"Understand me"},{seconds:109,lyrics:"Understand me"},{seconds:114,lyrics:"Understand me"},{seconds:118,lyrics:"Understand me"},{seconds:137,lyrics:"Some people have to be"},{seconds:140,lyrics:"Permanently together"},{seconds:147,lyrics:"Lovers devoted to"},{seconds:149,lyrics:"Each other forever"},{seconds:154,lyrics:"Now I've got things to do"},{seconds:159,lyrics:"And I've said before that I know you have too"},{seconds:163,lyrics:"When I'm not there"},{seconds:166,lyrics:"In spirit I'll be there"},{seconds:171,lyrics:"Here is a plea"},{seconds:173,lyrics:"From my heart to you"},{seconds:175,lyrics:"Nobody knows me"},{seconds:177,lyrics:"As well as you do"},{seconds:180,lyrics:"You know how hard it is for me"},{seconds:182,lyrics:"To shake the disease"},{seconds:185,lyrics:"That takes hold of my tongue"},{seconds:187,lyrics:"In situations like these"},{seconds:194,lyrics:"Understand me"},{seconds:199,lyrics:"Understand me"},{seconds:203,lyrics:"Understand me"},{seconds:208,lyrics:"Understand me"},{seconds:235,lyrics:"When I'm misunderstood"},{seconds:239,lyrics:"Try as hard as you can I've tried as hard as I could"},{seconds:243,lyrics:"To make you see"},{seconds:247,lyrics:"How important it is for me"},{seconds:252,lyrics:"Here is a plea"},{seconds:254,lyrics:"From my heart to you"},{seconds:256,lyrics:"Nobody knows me"},{seconds:258,lyrics:"As well as you do"},{seconds:260,lyrics:"You know how hard it is for me"},{seconds:263,lyrics:"To shake the disease"},{seconds:265,lyrics:"That takes hold of my tongue"},{seconds:267,lyrics:"In situations like these"},{seconds:270,lyrics:"Here is a plea"},{seconds:271,lyrics:"From my heart to you"},{seconds:273,lyrics:"Nobody knows me"},{seconds:275,lyrics:"As well as you do"},{seconds:277,lyrics:"You know how hard it is for me"},{seconds:280,lyrics:"To shake the disease"},{seconds:283,lyrics:"That takes hold of my tongue"},{seconds:285,lyrics:"In situations like these"}],"Raunchy - Wasteland Discotheque.mp3":[],"In Flames - Clayman.mp3":[],"Cerebral Bore - The Bald Cadaver.mp3":[{seconds:6,lyrics:"You disgust me"},{seconds:15,lyrics:"The bald cadaver she is mine"},{seconds:18,lyrics:"I will lick this rotting cunt"},{seconds:20,lyrics:"False messiah she is legion"},{seconds:23,lyrics:"Time has come to burn them all"},{seconds:29,lyrics:"Maggots infesting her hole"},{seconds:33,lyrics:"Devour her insides"},{seconds:50,lyrics:"They writhe inside your body"},{seconds:53,lyrics:"With glee they eat your organs raw"},{seconds:60,lyrics:"Bow to me ripping entrails severed torso"},{seconds:63,lyrics:"Feel my creed body dead f**k the head"},{seconds:66,lyrics:"You are here to die before me"},{seconds:69,lyrics:"I will consume you f**k you you are dead"},{seconds:113,lyrics:"You are a Marie curie *****"},{seconds:115,lyrics:"Colour of pee big tits racist"},{seconds:121,lyrics:"F**k the skin dome"},{seconds:125,lyrics:"To continue I must sever inches from you"},{seconds:134,lyrics:"Now you see"},{seconds:138,lyrics:"Death has come for you and not for me"},{seconds:141,lyrics:"She is weak at your peak"},{seconds:152,lyrics:"Trim back the bed sheet show me your balding head"},{seconds:158,lyrics:"In comes junkie mom she gets f**ked up"},{seconds:175,lyrics:"You are the vermin of this earth"},{seconds:178,lyrics:"You can't understand it's your time"},{seconds:180,lyrics:"I decimate your bloody corpse"},{seconds:184,lyrics:"Peeling back your skin I ejaculate on your face"},{seconds:195,lyrics:"Lived here died here now you're gone"}],"Raunchy - To the Lighthouse.mp3":[{seconds:41,lyrics:"You have become my ethereal darkness"},{seconds:47,lyrics:"My black highway and my heart split down the middle"},{seconds:52,lyrics:"Why do we keep doing this to ourselves"},{seconds:57,lyrics:"This never bliss, only sounds of hells bells"},{seconds:65,lyrics:"I want to take you away"},{seconds:68,lyrics:"Make you see the beauty in life again"},{seconds:76,lyrics:"To the lighthouse, she sings in the night"},{seconds:80,lyrics:"As we sail through the bay into a new day"},{seconds:85,lyrics:"And there it leads the way"},{seconds:93,lyrics:"For us phallic and proud"},{seconds:95,lyrics:"With it's light scattered all over"},{seconds:103,lyrics:"All over the crowd"},{seconds:122,lyrics:"Through mountains through water to find"},{seconds:127,lyrics:"What could lift us up to see the bliss on the horizon"},{seconds:133,lyrics:"A symbol of hope, a kicked up fire"},{seconds:138,lyrics:"To find tranquility inside the flames"},{seconds:145,lyrics:"I want to take you away"},{seconds:148,lyrics:"Make you see the beauty in life again"},{seconds:156,lyrics:"To the lighthouse, she sings in the night"},{seconds:160,lyrics:"As we sail through the bay into a new day"},{seconds:166,lyrics:"And there it leads the way"},{seconds:173,lyrics:"For us phallic and proud"},{seconds:175,lyrics:"With it's light scattered all over"},{seconds:184,lyrics:"All over the crowd"},{seconds:197,lyrics:"Uh, baby lets take it further down below"},{seconds:203,lyrics:"This rowboat is not for the two of us"},{seconds:208,lyrics:"Were not running on empty heart"},{seconds:218,lyrics:"You're my black sunrise"},{seconds:220,lyrics:"And my heart split down the middle"},{seconds:223,lyrics:"Baby, why do we keep doing this to ourselves"},{seconds:229,lyrics:"You're the sound of hells bells"},{seconds:230,lyrics:"But that's not a bad thing, right"},{seconds:234,lyrics:"Let's take it to the next step, let's do it all night"},{seconds:246,lyrics:"Were the young believers"},{seconds:251,lyrics:"Were nation builders"},{seconds:254,lyrics:"F**king for might"},{seconds:270,lyrics:"I want to take you away"},{seconds:272,lyrics:"Make you see the beauty in life again"},{seconds:280,lyrics:"To the lighthouse, she sings in the night"},{seconds:285,lyrics:"As we sail through the bay into a new day"},{seconds:290,lyrics:"And there it leads the way"},{seconds:298,lyrics:"For us phallic and proud"},{seconds:300,lyrics:"With it's light scattered all over"},{seconds:308,lyrics:"All over the crowd"}],"In Flames - Reflect the Storm.mp3":[{seconds:10,lyrics:"Shot for shot"},{seconds:12,lyrics:"Many bullets penetrate me"},{seconds:14,lyrics:"Embrace me"},{seconds:15,lyrics:"Tell me stories of gold and gods"},{seconds:19,lyrics:"The precision in your voice"},{seconds:21,lyrics:"Pierce the walls that I've built"},{seconds:23,lyrics:"Your eyes reach deep in me"},{seconds:38,lyrics:"Take a chance"},{seconds:40,lyrics:"Better come much bigger than this"},{seconds:42,lyrics:"One dark star"},{seconds:44,lyrics:"Spend another day with me"},{seconds:46,lyrics:"A dead surface that doesn't reflect"},{seconds:48,lyrics:"The storm underneath"},{seconds:51,lyrics:"I'll take the chance"},{seconds:53,lyrics:"Bring me the calm"},{seconds:55,lyrics:"And it leaves nothing"},{seconds:57,lyrics:"Expose the dark side"},{seconds:61,lyrics:"Awakened and emotional"},{seconds:66,lyrics:"Expose the dark side"},{seconds:71,lyrics:"Impossible to tame"},{seconds:77,lyrics:"Away from the light of the sun"},{seconds:82,lyrics:"Away I find what is real in me"},{seconds:92,lyrics:"Throw yourself into the eye of chaos"},{seconds:96,lyrics:"Infiltrate me"},{seconds:98,lyrics:"Sneak out before I awake"},{seconds:101,lyrics:"Take out the trash and burn it"},{seconds:103,lyrics:"Try to find a beautiful place to lay"},{seconds:107,lyrics:"These fragile bones of mine"},{seconds:110,lyrics:"Away from the light of the sun"},{seconds:119,lyrics:"Away I find what is real, "},{seconds:128,lyrics:"Away from the light of the sun"},{seconds:137,lyrics:"Away I find what is real in me"},{seconds:174,lyrics:"And it leaves nothing"},{seconds:177,lyrics:"Expose the dark side"},{seconds:180,lyrics:"Awakened and emotional"},{seconds:185,lyrics:"Expose the dark side"},{seconds:190,lyrics:"Impossible to tame"},{seconds:196,lyrics:"Away from the light of the sun"},{seconds:201,lyrics:"Away I find what is real, "},{seconds:212,lyrics:"Away from the light of the sun"},{seconds:219,lyrics:"Away I find what is real, "},{seconds:227,lyrics:"Away from the light of the sun"},{seconds:237,lyrics:"Away I find what is real in me"}],"Psygnosis - MehMeh.mp3":[],"The Five Stars - Atom Bomb Baby.mp3":[{seconds:0,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara bomb"},{seconds:6,lyrics:"Got a doll baby I love her so"},{seconds:9,lyrics:"Nothing else like her anywhere you go"},{seconds:12,lyrics:"Man she's anything but calm"},{seconds:15,lyrics:"A regular pint-sized atom bomb"},{seconds:18,lyrics:"Atom bomb baby little atom bomb"},{seconds:20,lyrics:"I want her in my wigwam"},{seconds:24,lyrics:"She's just the way I want her to be"},{seconds:26,lyrics:"A million times hotter than TNT"},{seconds:29,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara"},{seconds:35,lyrics:"Atom bomb baby loaded with power"},{seconds:38,lyrics:"Radioactive as a TV tower"},{seconds:41,lyrics:"A nuclear fission in her soul"},{seconds:44,lyrics:"Loves with electronic control"},{seconds:47,lyrics:"Atom bomb baby little atom bomb"},{seconds:50,lyrics:"I want her in my wigwam"},{seconds:53,lyrics:"She's just the way I want her to be"},{seconds:56,lyrics:"A million times hotter than TNT"},{seconds:59,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara"},{seconds:65,lyrics:"Atom bomb baby boy she can start"},{seconds:68,lyrics:"One of those chain reactions in my heart"},{seconds:71,lyrics:"A big explosion big and loud"},{seconds:74,lyrics:"Mushrooms me right up on a cloud"},{seconds:77,lyrics:"Atom bomb baby little atom bomb"},{seconds:80,lyrics:"I want her in my wigwam"},{seconds:82,lyrics:"She's just the way I want her to be"},{seconds:85,lyrics:"A million times hotter than TNT"},{seconds:88,lyrics:"Bomb yeara bomb yeara bomb yeara bomb yeara"},{seconds:94,lyrics:"Atom bomb ladysh sweet as a plum"},{seconds:97,lyrics:"Carries more whallop than uranium"},{seconds:100,lyrics:"When she kisses there's no hitch"},{seconds:103,lyrics:"Zero power she turns on a switch"},{seconds:107,lyrics:"Atom bomb baby little atom bomb"},{seconds:109,lyrics:"I want her in my wigwam"},{seconds:112,lyrics:"She's just the way I want her to be"},{seconds:115,lyrics:"A million times hotter than TNT"},{seconds:118,lyrics:"Atom bomb baby little atom bomb"},{seconds:121,lyrics:"I want her in my wigwam"},{seconds:124,lyrics:"She's just the way I want her to be"},{seconds:127,lyrics:"A million times hotter than TNT"},{seconds:131,lyrics:"Atom bomb baby little atom bomb"}],"The HAARP Machine - Esoteric Agenda.mp3":[{seconds:30,lyrics:"There were no weapons of mass destruction"},{seconds:34,lyrics:"Mobile biological"},{seconds:37,lyrics:"Weapons labs the agenda was to remove Saddam Hussein"},{seconds:42,lyrics:"To reap the oil and establish a base"},{seconds:47,lyrics:"The Bush administration"},{seconds:49,lyrics:"Made a series of claims prior the Iraqi war abuse"},{seconds:54,lyrics:"And misuse of intelligence"},{seconds:61,lyrics:"There was no collusive"},{seconds:65,lyrics:"Relationship with"},{seconds:67,lyrics:"Al qaeda esoteric agenda"},{seconds:75,lyrics:"Esoteric agenda"},{seconds:106,lyrics:"Open your eyes and see this"},{seconds:111,lyrics:"World is not what it seems free your soul from"},{seconds:118,lyrics:"The ties that bind us all time is upon us"},{seconds:127,lyrics:"To wake up"},{seconds:142,lyrics:"The wars of the world are diversions"},{seconds:148,lyrics:"For the desires of the powers"},{seconds:154,lyrics:"The wars of the world are diversions"},{seconds:160,lyrics:"For the desires of the powers"},{seconds:165,lyrics:"They declare war as"},{seconds:167,lyrics:"The last option even though they always actively block every"},{seconds:172,lyrics:"Other viable policy in the same way the powers make"},{seconds:179,lyrics:"War the only option"},{seconds:183,lyrics:"Actively other viable policy in the same way the powers make"},{seconds:191,lyrics:"War the only option"}],"What Mad Universe - the world of leviathan.mp3":[],"Rise Of The Northstar - The New Path.mp3":[{seconds:34,lyrics:"His name is Raoh demonic Ken'oh"},{seconds:36,lyrics:"Fist of the violent star born in hell yo"},{seconds:38,lyrics:"Fallen heir who should've lost his fist"},{seconds:40,lyrics:"Rejected by his love and treated like a best"},{seconds:43,lyrics:"Evil grew up within him like a new option"},{seconds:45,lyrics:"He took his master's life without asking questions"},{seconds:48,lyrics:"Suffered the nuclear fire"},{seconds:50,lyrics:"He conquers a chaotic world takes the power"},{seconds:62,lyrics:"Rules on this sick world fallen brotherhood"},{seconds:65,lyrics:"Here comes the new lord fist against sword"},{seconds:67,lyrics:"Rules on this sick world fallen brotherhood"},{seconds:69,lyrics:"Here comes the new lord fist against sword"},{seconds:73,lyrics:"Nothing is written in advance"},{seconds:76,lyrics:"Everything changes smash your chance"},{seconds:78,lyrics:"One life one love several fates"},{seconds:80,lyrics:"Open a new path create the gate"},{seconds:83,lyrics:"Nothing is written in advance"},{seconds:85,lyrics:"Everything changes smash your chance"},{seconds:87,lyrics:"One life one love several fates"},{seconds:90,lyrics:"Open a new path create the gate"},{seconds:92,lyrics:"Genocide his life starts badly"},{seconds:95,lyrics:"His weakness saves his life baddack the movie"},{seconds:97,lyrics:"Arrived on earth broke his motherf**king head"},{seconds:99,lyrics:"Booyaka booyaka he could've been brain dead"},{seconds:102,lyrics:"He faced elites never gave up"},{seconds:104,lyrics:"This life could've been a tragedy if he didn't confront"},{seconds:107,lyrics:"His fear his faith his destiny"},{seconds:109,lyrics:"Never forget the sin goku story"},{seconds:112,lyrics:"Nothing is written in advance"},{seconds:114,lyrics:"Everything changes smash your chance"},{seconds:116,lyrics:"One life one love several fates"},{seconds:119,lyrics:"Open a new path create the gate"},{seconds:121,lyrics:"Nothing is written in advance"},{seconds:123,lyrics:"Everything changes smash your chance"},{seconds:126,lyrics:"One life one love several fates"},{seconds:128,lyrics:"Open a new path create the gate"},{seconds:140,lyrics:"One two three four five super yankees"},{seconds:143,lyrics:"Straight from the past straight from the nineties"},{seconds:145,lyrics:"Without any help or any support"},{seconds:147,lyrics:"Against the main vibe and ready to start"},{seconds:150,lyrics:"Get up stand up come on throw your hands up"},{seconds:152,lyrics:"They wanna force the fate and represent some codes"},{seconds:154,lyrics:"Stay true stay straight never forget create your own legacy"},{seconds:158,lyrics:"Never lose the target"},{seconds:198,lyrics:"Nothing is written in advance"},{seconds:200,lyrics:"Everything changes smash your chance"},{seconds:203,lyrics:"One life one love several fates"},{seconds:205,lyrics:"Open a new path create the gate"},{seconds:207,lyrics:"Nothing is written in advance"},{seconds:210,lyrics:"Everything changes smash your chance"},{seconds:212,lyrics:"One life one love several fates"},{seconds:215,lyrics:"Open a new path create the gate"}],"Machine Head - Halo.mp3":[{seconds:81,lyrics:"This is a call to arms"},{seconds:85,lyrics:"Will you stand beside me"},{seconds:94,lyrics:"This is our time to fight"},{seconds:98,lyrics:"No more compromising"},{seconds:101,lyrics:"And this blackened heart will sing"},{seconds:107,lyrics:"For sad solidarity"},{seconds:113,lyrics:"Halo over our demise"},{seconds:118,lyrics:"Following a god so blind"},{seconds:125,lyrics:"Shallow in their sickening"},{seconds:131,lyrics:"Swallow not the sh*t they feed"},{seconds:152,lyrics:"This is a right to life"},{seconds:156,lyrics:"Not the religious right's act"},{seconds:166,lyrics:"This is abortion's knife"},{seconds:169,lyrics:"Aiming at the womb of"},{seconds:172,lyrics:"The christian conspiracy"},{seconds:178,lyrics:"So open thine eyes and see the"},{seconds:187,lyrics:"Halo over our demise"},{seconds:193,lyrics:"Following a god so blind"},{seconds:199,lyrics:"Shallow in their sickening"},{seconds:205,lyrics:"Swallow not the sh*t they feed"},{seconds:253,lyrics:"Our time will come our time will come"},{seconds:275,lyrics:"Our time is now our time is now"},{seconds:408,lyrics:"And I won't pray for you"},{seconds:415,lyrics:"And I won't pray for you"},{seconds:422,lyrics:"And I won't pray for you"},{seconds:437,lyrics:"Halo"},{seconds:443,lyrics:"Follow"},{seconds:450,lyrics:"Shallow"},{seconds:456,lyrics:"Swallow"},{seconds:463,lyrics:"Halo over our demise"},{seconds:469,lyrics:"Following a god so blind"},{seconds:475,lyrics:"Shallow in their sickening"},{seconds:481,lyrics:"Swallow not the sh*t they feed"},{seconds:493,lyrics:"Sh*t they feed"},{seconds:498,lyrics:"Your words will never hold us down"},{seconds:501,lyrics:"Prayers won't be spared on you"},{seconds:504,lyrics:"Satisfaction denied"},{seconds:507,lyrics:"'Till you're dead and gone"},{seconds:513,lyrics:"Gone"},{seconds:515,lyrics:"Dead and gone"},{seconds:519,lyrics:"You're gone"},{seconds:522,lyrics:"You're gone"}],"zYnthetic - SSplug.mp3":[],"Anaal Nathrakh - Between Shit and Piss We Are Born.mp3":[],"Anaal Nathrakh - In The Constellation Of The Black Widow.mp3":[],"Angel Vivaldi - A Martian Winter.mp3":[],"Angel Vivaldi - An Erisian Autumn.mp3":[],"Aspirin Rose - Fucking Perfect (Pink cover).mp3":[],"August Burns Red - A Shot Below The Belt.mp3":[],"August Burns Red - Your Little Suburbia Is in Ruins.mp3":[],"Between the Buried and Me - All Bodies.mp3":[],"Between The Buried And Me - Swim To The Moon.mp3":[],"Breakwater - Eleven.mp3":[],"Breakwater - five.mp3":[],"Cosmonauts Day - The Captain.mp3":[],"Death In Vegas - Dirge.mp3":[],"If These Trees Could Talk - From Roots to Needles.mp3":[],"Killing Floor - Abandon All.mp3":[],"Long Distance Calling - Black Paper Planes.mp3":[],"Ozoi The Maid - Unfortunately.mp3":[],"Ozoi The Maid Yakui The Maid - Lanterns.mp3":[],"Ozoi The Maid Yakui The Maid - Wonderland.mp3":[],"Ozoi The Maid Yakui The Maid - Frontier.mp3":[],"Psygnosis - FIIIX 2.0.mp3":[],"Psygnosis - Lost in Oblivion.mp3":[],"Psygnosis - Phrase 7.mp3":[],"Psygnosis - Synaptic Plasticity.mp3":[],"Psygnosis - The Judgement.mp3":[],"Raunchy - Twelve Feet Tall.mp3":[],"Rhapsody - The Mighty Ride of the Firelord.mp3":[],"Rhapsody of Fire - Wisdom of the Kings.mp3":[],"Rise Of The Northstar - What The Fuck.mp3":[],"Siberian Meat Grinder feat Distemper - Пламя в Груди.mp3":[],"Toundra - Bizancio Byzantium.mp3":[],"URO & .corridoiokraut. - Nappi.mp3":[],"What Mad Universe - Colossus.mp3":[],"What Mad Universe - head of column.mp3":[],"What Mad Universe - mythical sacred firebird.mp3":[],"What Mad Universe - Nebula My Love.mp3":[],"What Mad Universe - Starborne.mp3":[],"Within The Ruins - Ataxia II.mp3":[],"Within The Ruins - Beautiful Agony.mp3":[],"zYnthetic - Abandon All v3.mp3":[],"Between The Buried And Me - White Walls.mp3":[{seconds:80,lyrics:"The monsters are made "},{seconds:95,lyrics:"And we have proven that we will be one of them "},{seconds:116,lyrics:"The w***es take the stage flash our skills "},{seconds:129,lyrics:"Gotta draw em in gotta keep em on their toes "},{seconds:142,lyrics:"Don't show them how you truly are "},{seconds:149,lyrics:"Who would want honesty "},{seconds:163,lyrics:"Who would want a group of people that one can relate with "},{seconds:185,lyrics:"We need worship we need devotion "},{seconds:208,lyrics:"Becoming gods from the image that is thrown "},{seconds:226,lyrics:"Thrown out in their everyday lives to comfort "},{seconds:246,lyrics:"Its not a musical journey anymore "},{seconds:261,lyrics:"They chose Camilla and we stood by her the entire time "},{seconds:275,lyrics:"Monotonous expression a forced replica of a tired sound "},{seconds:289,lyrics:"Puppets for a greed-driven carnival "},{seconds:296,lyrics:"The same charade as the passing years "},{seconds:306,lyrics:"Force me out there "},{seconds:352,lyrics:"Don't give them a chance "},{seconds:355,lyrics:"They want to be fed fed a simple replication of past greatness "},{seconds:369,lyrics:"Things have changed we have changed "},{seconds:373,lyrics:"Personal happiness is what we strive to achieve "},{seconds:392,lyrics:"So you can love or hate it won't change a thing for us "},{seconds:443,lyrics:"Step back "},{seconds:462,lyrics:"Evaluate "},{seconds:468,lyrics:"Recognize "},{seconds:478,lyrics:"We just need to throw some new ideas in "},{seconds:497,lyrics:"It "},{seconds:525,lyrics:"Will eventually get out of this closed off circle we are part of "},{seconds:550,lyrics:"Its all the same "},{seconds:558,lyrics:"This is all we have when we die "},{seconds:600,lyrics:"Its whats left of us when we die "},{seconds:629,lyrics:"We will be remembered for this "},{seconds:643,lyrics:"White wall"}],"Raunchy - The Yeah Thing.mp3":[{seconds:27,lyrics:"Yeah"},{seconds:35,lyrics:"Here we go again"},{seconds:67,lyrics:"You got a killer sound there said the devil"},{seconds:71,lyrics:"So what did I say to him"},{seconds:73,lyrics:"Yeah you're right *****"},{seconds:75,lyrics:"And then we continued"},{seconds:78,lyrics:"Now this one is for you"},{seconds:80,lyrics:"F**k yeah it's on all the girls keep on dancing"},{seconds:85,lyrics:"We're ready to give them everything"},{seconds:90,lyrics:"There's no clarity but I can feel the music"},{seconds:97,lyrics:"I said before and I'll say it again"},{seconds:100,lyrics:"We're nothing without all our demons"},{seconds:103,lyrics:"This kind of devil music is the yeah thing"},{seconds:108,lyrics:"I said before and I'll say it again"},{seconds:110,lyrics:"We'll be here no matter what my friend"},{seconds:113,lyrics:"We are everything you'll ever need"},{seconds:117,lyrics:"Just bite the hand that feeds"},{seconds:120,lyrics:"Bring out your romance"},{seconds:124,lyrics:"Just sing for your halo"},{seconds:129,lyrics:"Bring out your feelings"},{seconds:134,lyrics:"And let all your love go"},{seconds:140,lyrics:"Bring out your romance"},{seconds:144,lyrics:"Just sing for your halo"},{seconds:149,lyrics:"Bring out your feelings"},{seconds:154,lyrics:"And let all your love go"},{seconds:186,lyrics:"Hell yeah"},{seconds:188,lyrics:"Walk away"},{seconds:189,lyrics:"Hell yeah"},{seconds:190,lyrics:"Walk away"},{seconds:191,lyrics:"Hell yeah"},{seconds:192,lyrics:"Walk away"},{seconds:194,lyrics:"Hell yeah"},{seconds:195,lyrics:"Walk away"},{seconds:198,lyrics:"And the devil just laughed and walked away"},{seconds:204,lyrics:"Just laughed and walked away"},{seconds:209,lyrics:"And the devil just laughed and walked away"},{seconds:214,lyrics:"Just laughed and walked away"},{seconds:217,lyrics:"Where the light is"},{seconds:220,lyrics:"There is darkness"},{seconds:222,lyrics:"Contradictions and all your temple"},{seconds:227,lyrics:"This is feeling and I don't know"},{seconds:230,lyrics:"How it gets that way"},{seconds:233,lyrics:"But it's on it's on and you f**king love it"},{seconds:238,lyrics:"And the devil just laughed and walked away"},{seconds:241,lyrics:"Bring out your romance"},{seconds:245,lyrics:"Just sing for your halo"},{seconds:251,lyrics:"Bring out your feelings"},{seconds:256,lyrics:"And let all your love go"},{seconds:261,lyrics:"Bring out your romance"},{seconds:265,lyrics:"Just sing for your halo"},{seconds:271,lyrics:"Bring out your feelings"},{seconds:276,lyrics:"And let all your love go"}],"Sunlight Ascending - (Winter) Diorama Dream.mp3":[],"Sum 41 - Still Waiting.mp3":[{seconds:0,lyrics:"So am I still waiting"},{seconds:3,lyrics:"For this world to stop hating"},{seconds:5,lyrics:"Can't find a good reason"},{seconds:8,lyrics:"Can't find hope to believe in"},{seconds:22,lyrics:"Drop dead a bullet to my head"},{seconds:24,lyrics:"Your words are like a gun in hand"},{seconds:27,lyrics:"You can't change the state of the nation"},{seconds:29,lyrics:"We just need some motivation"},{seconds:32,lyrics:"Three times I see no conviction"},{seconds:34,lyrics:"Just lies and more contradiction"},{seconds:37,lyrics:"So tell me what would you say"},{seconds:39,lyrics:"I'd say it's time to listen"},{seconds:43,lyrics:"So am I still waiting"},{seconds:45,lyrics:"For this world to stop hating"},{seconds:48,lyrics:"Can't find a good reason"},{seconds:50,lyrics:"Can't find hope to believe in"},{seconds:58,lyrics:"Ignorance and understanding"},{seconds:60,lyrics:"We're the first ones to jump in line"},{seconds:63,lyrics:"Out of step for what we believe in"},{seconds:65,lyrics:"But whos left to start the pleading"},{seconds:68,lyrics:"How far will we take this"},{seconds:70,lyrics:"It's not hard to see through the sickness"},{seconds:73,lyrics:"So tell me what would you say"},{seconds:75,lyrics:"I'd say it's time to listen"},{seconds:79,lyrics:"So am I still waiting"},{seconds:82,lyrics:"For this world to stop hating"},{seconds:84,lyrics:"Can't find a good reason"},{seconds:87,lyrics:"Can't find hope to believe in"},{seconds:89,lyrics:"This can't last forever"},{seconds:94,lyrics:"Time won't make things better"},{seconds:99,lyrics:"I feel so alone"},{seconds:102,lyrics:"Can't help myself"},{seconds:105,lyrics:"And no one knows"},{seconds:107,lyrics:"If this is worthless"},{seconds:108,lyrics:"Tell me so"},{seconds:124,lyrics:"What have we done"},{seconds:127,lyrics:"We're in a war that can't be won"},{seconds:129,lyrics:"This can't be real"},{seconds:132,lyrics:"I don't know what to feel"},{seconds:135,lyrics:"So am I still waiting"},{seconds:138,lyrics:"For this world to stop hating"},{seconds:140,lyrics:"Can't find a good reason"},{seconds:143,lyrics:"Can't find hope to believe in"},{seconds:145,lyrics:"So am I still waiting"},{seconds:148,lyrics:"For this world to stop hating"},{seconds:150,lyrics:"Can't find a good reason"},{seconds:153,lyrics:"Can't find hope to believe in"}],"Between The Buried And Me - Obfuscation.mp3":[],"BATUSHKA - Yekteniya 4.mp3":[],"In Flames - Trigger.mp3":[{seconds:22,lyrics:"Have we lost the spark or a guide "},{seconds:24,lyrics:"What's the latest on the screen "},{seconds:27,lyrics:"Can't be too late to turn around"},{seconds:29,lyrics:"I need all the help from you"},{seconds:36,lyrics:"I need to find"},{seconds:40,lyrics:"Something to blame for a long lost time"},{seconds:43,lyrics:"I am running from something that I don't know"},{seconds:49,lyrics:"I am searching for something, which way to go "},{seconds:57,lyrics:"I am trying to separate what's real"},{seconds:61,lyrics:"I'm running in a wheel"},{seconds:66,lyrics:"Is it dark or is it bright "},{seconds:68,lyrics:"What's the latest on the screen "},{seconds:71,lyrics:"Please tell me my name"},{seconds:79,lyrics:"I haven't checked it today"},{seconds:86,lyrics:"I am running from something that I don't know"},{seconds:91,lyrics:"I am searching for something, which way to go "},{seconds:96,lyrics:"I am trying to separate what's real"},{seconds:100,lyrics:"I'm running in a wheel"},{seconds:106,lyrics:"From green to red our days pass by"},{seconds:109,lyrics:"Waiting for a sign to tell us why"},{seconds:111,lyrics:"Are we dancing all alone "},{seconds:115,lyrics:"Collect some stars to shine for you"},{seconds:120,lyrics:"And start today 'cause there's only a few"},{seconds:122,lyrics:"A sign of times my friend"},{seconds:128,lyrics:"My friend avoid infinity"},{seconds:131,lyrics:"Are you for real "},{seconds:138,lyrics:"Just scratch the surface"},{seconds:140,lyrics:"And you will find"},{seconds:143,lyrics:"Something to blame for a long lost time"},{seconds:148,lyrics:"From green to red our days pass by"},{seconds:150,lyrics:"Waiting for a sign to tell us why"},{seconds:153,lyrics:"Are we dancing all alone "},{seconds:158,lyrics:"Collect some stars to shine for you"},{seconds:161,lyrics:"And start today 'cause there's only a few"},{seconds:164,lyrics:"A sign of times my friend"},{seconds:167,lyrics:"Just scratch the surface"},{seconds:203,lyrics:"And you will find"},{seconds:205,lyrics:"Something to blame for a long lost time"},{seconds:212,lyrics:"From green to red our days pass by"},{seconds:215,lyrics:"Waiting for a sign to tell us why"},{seconds:218,lyrics:"Are we dancing all alone "},{seconds:224,lyrics:"Collect some stars to shine for you"},{seconds:226,lyrics:"And start today 'cause there's only a few"},{seconds:229,lyrics:"A sign of times my friend"},{seconds:232,lyrics:"From green to red our days pass by"},{seconds:236,lyrics:"Waiting for a sign to tell us why"},{seconds:239,lyrics:"Are we dancing all alone "},{seconds:242,lyrics:"Collect some stars to shine for you"},{seconds:247,lyrics:"And start today 'cause there's only a few"},{seconds:255,lyrics:"From green to red our days pass by"},{seconds:257,lyrics:"Waiting for a sign to tell us why"},{seconds:259,lyrics:"Collect some stars to shine for you"},{seconds:267,lyrics:"And start today 'cause there's only a few"}],"Raunchy - Live The Myth.mp3":[{seconds:67,lyrics:"I've been avoiding the light"},{seconds:69,lyrics:"I join the myth"},{seconds:71,lyrics:"I need to realize what I've missed"},{seconds:76,lyrics:"I crawl through shadows through space and time"},{seconds:81,lyrics:"And now I sense you at the end of the line"},{seconds:89,lyrics:"At the end of the night"},{seconds:94,lyrics:"Hold the line"},{seconds:98,lyrics:"As they transcend"},{seconds:103,lyrics:"The bringer of light"},{seconds:105,lyrics:"I caught a glimpse of you"},{seconds:108,lyrics:"Between the moment and the dead"},{seconds:114,lyrics:"Now I remember you still here"},{seconds:118,lyrics:"The stories in my head"},{seconds:133,lyrics:"This ride accelerates I live the myth"},{seconds:138,lyrics:"I celebrate the darkness of what I've kissed"},{seconds:143,lyrics:"I crawl through clouds the shadows for us"},{seconds:148,lyrics:"Then you start pleading with my heart"},{seconds:160,lyrics:"Hold the line"},{seconds:165,lyrics:"As they transcend"},{seconds:169,lyrics:"The bringer of light"},{seconds:171,lyrics:"I caught a glimpse of you"},{seconds:174,lyrics:"Between the moment and the dead"},{seconds:181,lyrics:"Now I remember you still here"},{seconds:185,lyrics:"The stories in my head"},{seconds:219,lyrics:"These words of flames"},{seconds:221,lyrics:"In my white shade serenade"},{seconds:224,lyrics:"I still remain"},{seconds:229,lyrics:"The meaning in shadows"},{seconds:231,lyrics:"The place I choose to live"},{seconds:233,lyrics:"Is in a dream forever"},{seconds:238,lyrics:"These words of flames"},{seconds:240,lyrics:"In my white shade serenade"},{seconds:242,lyrics:"I still remain I still remain"},{seconds:248,lyrics:"The meaning in shadows"},{seconds:250,lyrics:"The place I choose to live"},{seconds:252,lyrics:"Is life forever"},{seconds:257,lyrics:"As darkness falls the shadows for us"},{seconds:262,lyrics:"Between the moment and the dead"},{seconds:268,lyrics:"As I wake up I can hear the echoes"},{seconds:273,lyrics:"Teh laughter from the living dead"},{seconds:278,lyrics:"As darkness falls the shadows for us"},{seconds:283,lyrics:"Between the moment and the dead"},{seconds:286,lyrics:"I still remain remain remain"},{seconds:291,lyrics:"I caught a glimpse of you"},{seconds:294,lyrics:"Between the moment and the dead"},{seconds:301,lyrics:"Now I remember you still here"},{seconds:305,lyrics:"The stories in my head"},{seconds:310,lyrics:"I caught a glimpse of you"},{seconds:313,lyrics:"Between the moment and the dead"},{seconds:320,lyrics:"Now I remember you still here"},{seconds:324,lyrics:"The stories in my head"}]},nd={class:"container"},rd=["src"],id=e1({__name:"App",setup(c){Nf(q=>({"0553a8a4":J.value}));const{bestParties:e,nextTrack:a,previousTrack:s,pathToCurrentFile:n,currentTrackIndex:r,changeTab:i,selectTrack:o,tabSelected:t,currentTracks:l,currentSong:h,currentTracksList:u,favoriteSongs:m,handleAddFavoriteSongBtn:v}=C0();P3(async()=>{M();const q=[["play",()=>{G2(),navigator.mediaSession.playbackState="playing"}],["pause",()=>{G2(),navigator.mediaSession.playbackState="paused"}],["nexttrack",()=>{a()}],["previoustrack",()=>{R2()}],["seekto",f=>{console.log(f),y.value.currentTime=f.seekTime}]];for(const[f,d]of q)try{navigator.mediaSession.setActionHandler(f,d)}catch{console.log(`The media session action "${f}" is not supported yet.`)}});const H=d2(!1);function M(){const q=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches||localStorage.getItem("dark-color-scheme")&&JSON.parse(localStorage.getItem("dark-color-scheme"))?"dark":"light";H.value=q==="dark",F()}P1(H,()=>{F()});function F(){document.documentElement.style.setProperty("color-scheme",H.value?"dark":"light"),localStorage.setItem("dark-color-scheme",JSON.stringify(H.value))}function C(){H.value=!H.value}const y=d2(null),B=d2(0),x=d2(.8);function D(q){A(q),o2.value&&Y()}function c2(){L2.value?y.value.currentTime=0:a()}function Q(q){y.value.currentTime=q,o2.value=!0,Y()}function _(q){B.value=q.target.currentTime,navigator.mediaSession.setPositionState({duration:e2.value,playbackRate:1,position:B.value})}function N(q){x.value=q.target.volume}function O(q){y.value.volume=q}const e2=d2(0);function A(q){const f=q.target;e2.value=f.duration,navigator.mediaSession.setPositionState({duration:e2.value,playbackRate:1,position:0})}function Y(){try{y.value.play().then(q=>q)}catch(q){console.log("error",q)}}const o2=d2(!1);function G2(){o2.value=!o2.value,o2.value?Y():y.value.pause()}const h2=d2(!1);async function t2(q){for(let f=0;f<e.value.length;f++){const d=e.value[f];if(q<=d.start&&!h2.value){console.log("start"),y.value.currentTime=d.start;return}else if(q>=d.start&&q<=d.end){console.log("continue"),q>=d.end-3&&q<=d.end-2&&!h2.value&&console.log("end");return}}console.log("nextTrack"),c2()}C4(async()=>{t.value===4&&o2.value&&r&&await t2(B.value)});const J=d2("500px");W3(()=>{const q=document.querySelector(".main_control_ref"),f=document.querySelector(".container"),d=q.getBoundingClientRect(),p=f==null?void 0:f.getBoundingClientRect();J.value=`${Math.abs(d.top-p.top)+25}px`,y.value.volume=.8,document.addEventListener("keydown",t4)});function R2(){y.value.currentTime<=20||t.value===4?s():y.value.currentTime=0}const j2=d2(!1);function a1(){j2.value=!j2.value}const b2=d2(!1);function O4(){b2.value=!b2.value}function t6(){j2.value=!1,b2.value=!1}function l6(q){o(q),o2.value=!0,Y()}const L2=d2(!1);function E1(){L2.value=!L2.value}const U1=G(()=>ad[h.value.songName]||""),Y2=G(()=>sd[h.value.songName]||[]),t4=q=>{switch(q.key){case" ":G2();break;case"ArrowRight":a();break;case"ArrowLeft":R2();break;case"ArrowUp":y.value.volume<=.9&&O(y.value.volume+.1);break;case"ArrowDown":y.value.volume>=.1&&O(y.value.volume-.1);break}};return(q,f)=>(m2(),v2("main",{class:T2([H.value?"dark":"light"]),onClick:H2(t6,["stop"])},[U("div",nd,[l2(g3,{name:"slide-track-list"},{default:A6(()=>[p3(l2(eh,{"current-track-index":V2(r),"current-tracks":V2(u),class:"top_bar",onSelectTrackFromList:l6},null,8,["current-track-index","current-tracks"]),[[y3,j2.value]])]),_:1}),l2(g3,{name:"slide-song-text"},{default:A6(()=>[p3(l2(ed,{"current-time":B.value,"song-text":U1.value,"song-text-with-timecodes":Y2.value,class:"top_bar",onTimeChange:Q},null,8,["current-time","song-text","song-text-with-timecodes"]),[[y3,b2.value&&(U1.value.length||Y2.value.length)]])]),_:1}),l2(nh,{"tab-selected":V2(t),onChangeTab:V2(i)},null,8,["tab-selected","onChangeTab"]),l2(zh,{"song-name":V2(h).songName,"has-text":!!U1.value.length||!!Y2.value.length,"is-favorite-song":V2(m).includes(V2(h).songName),onShowTextSong:O4,onAddFavorite:V2(v)},null,8,["song-name","has-text","is-favorite-song","onAddFavorite"]),l2(Ch,{ref:"main_control_ref",class:"main_control_ref",volume:x.value,onClick:f[0]||(f[0]=H2(()=>{},["stop"])),onVolumeChange:O},null,8,["volume"]),l2(Nh,{"best-parties":V2(e),"current-time":B.value,"total-time":e2.value,onClick:f[1]||(f[1]=H2(()=>{},["stop"])),onTimeChange:Q},null,8,["best-parties","current-time","total-time"]),l2(Wh,{"is-playing":o2.value,onPrevious:R2,onNext:V2(a),onPlayPause:G2},null,8,["is-playing","onNext"]),l2(jh,{"current-numb-song":V2(r)+1,"is-show-track-list":j2.value,"is-repeat-mode":L2.value,"is-dark-theme":H.value,onRepeatModeClick:E1,onShowListClick:a1,onChangeTheme:C},null,8,["current-numb-song","is-show-track-list","is-repeat-mode","is-dark-theme"]),U("audio",{ref_key:"audioPlayer",ref:y,src:V2(n),preload:"metadata",onVolumechange:N,onTimeupdate:_,onCanplay:D,onEnded:c2},null,40,rd)])],2))}});function y5(c,e){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);e&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable})),a.push.apply(a,s)}return a}function S(c){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?y5(Object(a),!0).forEach(function(s){g2(c,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):y5(Object(a)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(a,s))})}return c}function V3(c){"@babel/helpers - typeof";return V3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V3(c)}function od(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function V5(c,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function td(c,e,a){return e&&V5(c.prototype,e),a&&V5(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function g2(c,e,a){return e in c?Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[e]=a,c}function b0(c,e){return fd(c)||dd(c,e)||G7(c,e)||ud()}function I4(c){return ld(c)||hd(c)||G7(c)||md()}function ld(c){if(Array.isArray(c))return U6(c)}function fd(c){if(Array.isArray(c))return c}function hd(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function dd(c,e){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var s=[],n=!0,r=!1,i,o;try{for(a=a.call(c);!(n=(i=a.next()).done)&&(s.push(i.value),!(e&&s.length===e));n=!0);}catch(t){r=!0,o=t}finally{try{!n&&a.return!=null&&a.return()}finally{if(r)throw o}}return s}}function G7(c,e){if(c){if(typeof c=="string")return U6(c,e);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return U6(c,e)}}function U6(c,e){(e==null||e>c.length)&&(e=c.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=c[a];return s}function md(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ud(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var M5=function(){},w0={},j7={},Y7=null,K7={mark:M5,measure:M5};try{typeof window<"u"&&(w0=window),typeof document<"u"&&(j7=document),typeof MutationObserver<"u"&&(Y7=MutationObserver),typeof performance<"u"&&(K7=performance)}catch{}var vd=w0.navigator||{},C5=vd.userAgent,b5=C5===void 0?"":C5,M1=w0,r2=j7,w5=Y7,J4=K7;M1.document;var f1=!!r2.documentElement&&!!r2.head&&typeof r2.addEventListener=="function"&&typeof r2.createElement=="function",X7=~b5.indexOf("MSIE")||~b5.indexOf("Trident/"),Q4,Z4,c3,e3,a3,i1="___FONT_AWESOME___",$6=16,J7="fa",Q7="svg-inline--fa",_1="data-fa-i2svg",q6="data-fa-pseudo-element",pd="data-fa-pseudo-element-pending",L0="data-prefix",x0="data-icon",L5="fontawesome-i2svg",Hd="async",zd=["HTML","HEAD","STYLE","SCRIPT"],Z7=function(){try{return!0}catch{return!1}}(),n2="classic",f2="sharp",k0=[n2,f2];function F4(c){return new Proxy(c,{get:function(a,s){return s in a?a[s]:a[n2]}})}var k4=F4((Q4={},g2(Q4,n2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),g2(Q4,f2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Q4)),N4=F4((Z4={},g2(Z4,n2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),g2(Z4,f2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Z4)),S4=F4((c3={},g2(c3,n2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),g2(c3,f2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),c3)),gd=F4((e3={},g2(e3,n2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),g2(e3,f2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),e3)),yd=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,cc="fa-layers-text",Vd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Md=F4((a3={},g2(a3,n2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),g2(a3,f2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),a3)),ec=[1,2,3,4,5,6,7,8,9,10],Cd=ec.concat([11,12,13,14,15,16,17,18,19,20]),bd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],I1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},A4=new Set;Object.keys(N4[n2]).map(A4.add.bind(A4));Object.keys(N4[f2]).map(A4.add.bind(A4));var wd=[].concat(k0,I4(A4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",I1.GROUP,I1.SWAP_OPACITY,I1.PRIMARY,I1.SECONDARY]).concat(ec.map(function(c){return"".concat(c,"x")})).concat(Cd.map(function(c){return"w-".concat(c)})),z4=M1.FontAwesomeConfig||{};function Ld(c){var e=r2.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function xd(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(r2&&typeof r2.querySelector=="function"){var kd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];kd.forEach(function(c){var e=b0(c,2),a=e[0],s=e[1],n=xd(Ld(a));n!=null&&(z4[s]=n)})}var ac={styleDefault:"solid",familyDefault:"classic",cssPrefix:J7,replacementClass:Q7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};z4.familyPrefix&&(z4.cssPrefix=z4.familyPrefix);var a4=S(S({},ac),z4);a4.autoReplaceSvg||(a4.observeMutations=!1);var I={};Object.keys(ac).forEach(function(c){Object.defineProperty(I,c,{enumerable:!0,set:function(a){a4[c]=a,g4.forEach(function(s){return s(I)})},get:function(){return a4[c]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(e){a4.cssPrefix=e,g4.forEach(function(a){return a(I)})},get:function(){return a4.cssPrefix}});M1.FontAwesomeConfig=I;var g4=[];function Nd(c){return g4.push(c),function(){g4.splice(g4.indexOf(c),1)}}var v1=$6,Z2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Sd(c){if(!(!c||!f1)){var e=r2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var a=r2.head.childNodes,s=null,n=a.length-1;n>-1;n--){var r=a[n],i=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(s=r)}return r2.head.insertBefore(e,s),c}}var Ad="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function T4(){for(var c=12,e="";c-- >0;)e+=Ad[Math.random()*62|0];return e}function o4(c){for(var e=[],a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function N0(c){return c.classList?o4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function sc(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Td(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(sc(c[a]),'" ')},"").trim()}function O3(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(c[a].trim(),";")},"")}function S0(c){return c.size!==Z2.size||c.x!==Z2.x||c.y!==Z2.y||c.rotate!==Z2.rotate||c.flipX||c.flipY}function Id(c){var e=c.transform,a=c.containerWidth,s=c.iconWidth,n={transform:"translate(".concat(a/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),t={transform:"".concat(r," ").concat(i," ").concat(o)},l={transform:"translate(".concat(s/2*-1," -256)")};return{outer:n,inner:t,path:l}}function Fd(c){var e=c.transform,a=c.width,s=a===void 0?$6:a,n=c.height,r=n===void 0?$6:n,i=c.startCentered,o=i===void 0?!1:i,t="";return o&&X7?t+="translate(".concat(e.x/v1-s/2,"em, ").concat(e.y/v1-r/2,"em) "):o?t+="translate(calc(-50% + ".concat(e.x/v1,"em), calc(-50% + ").concat(e.y/v1,"em)) "):t+="translate(".concat(e.x/v1,"em, ").concat(e.y/v1,"em) "),t+="scale(".concat(e.size/v1*(e.flipX?-1:1),", ").concat(e.size/v1*(e.flipY?-1:1),") "),t+="rotate(".concat(e.rotate,"deg) "),t}var Bd=`:root, :host {
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
}`;function nc(){var c=J7,e=Q7,a=I.cssPrefix,s=I.replacementClass,n=Bd;if(a!==c||s!==e){var r=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");n=n.replace(r,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(o,".".concat(s))}return n}var x5=!1;function y6(){I.autoAddCss&&!x5&&(Sd(nc()),x5=!0)}var Pd={mixout:function(){return{dom:{css:nc,insertCss:y6}}},hooks:function(){return{beforeDOMElementCreation:function(){y6()},beforeI2svg:function(){y6()}}}},o1=M1||{};o1[i1]||(o1[i1]={});o1[i1].styles||(o1[i1].styles={});o1[i1].hooks||(o1[i1].hooks={});o1[i1].shims||(o1[i1].shims=[]);var $2=o1[i1],rc=[],Wd=function c(){r2.removeEventListener("DOMContentLoaded",c),M3=1,rc.map(function(e){return e()})},M3=!1;f1&&(M3=(r2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(r2.readyState),M3||r2.addEventListener("DOMContentLoaded",Wd));function Rd(c){f1&&(M3?setTimeout(c,0):rc.push(c))}function B4(c){var e=c.tag,a=c.attributes,s=a===void 0?{}:a,n=c.children,r=n===void 0?[]:n;return typeof c=="string"?sc(c):"<".concat(e," ").concat(Td(s),">").concat(r.map(B4).join(""),"</").concat(e,">")}function k5(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var _d=function(e,a){return function(s,n,r,i){return e.call(a,s,n,r,i)}},V6=function(e,a,s,n){var r=Object.keys(e),i=r.length,o=n!==void 0?_d(a,n):a,t,l,h;for(s===void 0?(t=1,h=e[r[0]]):(t=0,h=s);t<i;t++)l=r[t],h=o(h,e[l],l,e);return h};function Dd(c){for(var e=[],a=0,s=c.length;a<s;){var n=c.charCodeAt(a++);if(n>=55296&&n<=56319&&a<s){var r=c.charCodeAt(a++);(r&64512)==56320?e.push(((n&1023)<<10)+(r&1023)+65536):(e.push(n),a--)}else e.push(n)}return e}function G6(c){var e=Dd(c);return e.length===1?e[0].toString(16):null}function Od(c,e){var a=c.length,s=c.charCodeAt(e),n;return s>=55296&&s<=56319&&a>e+1&&(n=c.charCodeAt(e+1),n>=56320&&n<=57343)?(s-55296)*1024+n-56320+65536:s}function N5(c){return Object.keys(c).reduce(function(e,a){var s=c[a],n=!!s.icon;return n?e[s.iconName]=s.icon:e[a]=s,e},{})}function j6(c,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=a.skipHooks,n=s===void 0?!1:s,r=N5(e);typeof $2.hooks.addPack=="function"&&!n?$2.hooks.addPack(c,N5(e)):$2.styles[c]=S(S({},$2.styles[c]||{}),r),c==="fas"&&j6("fa",e)}var s3,n3,r3,G1=$2.styles,Ed=$2.shims,Ud=(s3={},g2(s3,n2,Object.values(S4[n2])),g2(s3,f2,Object.values(S4[f2])),s3),A0=null,ic={},oc={},tc={},lc={},fc={},$d=(n3={},g2(n3,n2,Object.keys(k4[n2])),g2(n3,f2,Object.keys(k4[f2])),n3);function qd(c){return~wd.indexOf(c)}function Gd(c,e){var a=e.split("-"),s=a[0],n=a.slice(1).join("-");return s===c&&n!==""&&!qd(n)?n:null}var hc=function(){var e=function(r){return V6(G1,function(i,o,t){return i[t]=V6(o,r,{}),i},{})};ic=e(function(n,r,i){if(r[3]&&(n[r[3]]=i),r[2]){var o=r[2].filter(function(t){return typeof t=="number"});o.forEach(function(t){n[t.toString(16)]=i})}return n}),oc=e(function(n,r,i){if(n[i]=i,r[2]){var o=r[2].filter(function(t){return typeof t=="string"});o.forEach(function(t){n[t]=i})}return n}),fc=e(function(n,r,i){var o=r[2];return n[i]=i,o.forEach(function(t){n[t]=i}),n});var a="far"in G1||I.autoFetchSvg,s=V6(Ed,function(n,r){var i=r[0],o=r[1],t=r[2];return o==="far"&&!a&&(o="fas"),typeof i=="string"&&(n.names[i]={prefix:o,iconName:t}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:o,iconName:t}),n},{names:{},unicodes:{}});tc=s.names,lc=s.unicodes,A0=E3(I.styleDefault,{family:I.familyDefault})};Nd(function(c){A0=E3(c.styleDefault,{family:I.familyDefault})});hc();function T0(c,e){return(ic[c]||{})[e]}function jd(c,e){return(oc[c]||{})[e]}function F1(c,e){return(fc[c]||{})[e]}function dc(c){return tc[c]||{prefix:null,iconName:null}}function Yd(c){var e=lc[c],a=T0("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function C1(){return A0}var I0=function(){return{prefix:null,iconName:null,rest:[]}};function E3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,s=a===void 0?n2:a,n=k4[s][c],r=N4[s][c]||N4[s][n],i=c in $2.styles?c:null;return r||i||null}var S5=(r3={},g2(r3,n2,Object.keys(S4[n2])),g2(r3,f2,Object.keys(S4[f2])),r3);function U3(c){var e,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.skipLookups,n=s===void 0?!1:s,r=(e={},g2(e,n2,"".concat(I.cssPrefix,"-").concat(n2)),g2(e,f2,"".concat(I.cssPrefix,"-").concat(f2)),e),i=null,o=n2;(c.includes(r[n2])||c.some(function(l){return S5[n2].includes(l)}))&&(o=n2),(c.includes(r[f2])||c.some(function(l){return S5[f2].includes(l)}))&&(o=f2);var t=c.reduce(function(l,h){var u=Gd(I.cssPrefix,h);if(G1[h]?(h=Ud[o].includes(h)?gd[o][h]:h,i=h,l.prefix=h):$d[o].indexOf(h)>-1?(i=h,l.prefix=E3(h,{family:o})):u?l.iconName=u:h!==I.replacementClass&&h!==r[n2]&&h!==r[f2]&&l.rest.push(h),!n&&l.prefix&&l.iconName){var m=i==="fa"?dc(l.iconName):{},v=F1(l.prefix,l.iconName);m.prefix&&(i=null),l.iconName=m.iconName||v||l.iconName,l.prefix=m.prefix||l.prefix,l.prefix==="far"&&!G1.far&&G1.fas&&!I.autoFetchSvg&&(l.prefix="fas")}return l},I0());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&o===f2&&(G1.fass||I.autoFetchSvg)&&(t.prefix="fass",t.iconName=F1(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||i==="fa")&&(t.prefix=C1()||"fas"),t}var Kd=function(){function c(){od(this,c),this.definitions={}}return td(c,[{key:"add",value:function(){for(var a=this,s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){a.definitions[o]=S(S({},a.definitions[o]||{}),i[o]),j6(o,i[o]);var t=S4[n2][o];t&&j6(t,i[o]),hc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,s){var n=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(n).map(function(r){var i=n[r],o=i.prefix,t=i.iconName,l=i.icon,h=l[2];a[o]||(a[o]={}),h.length>0&&h.forEach(function(u){typeof u=="string"&&(a[o][u]=l)}),a[o][t]=l}),a}}]),c}(),A5=[],j1={},Q1={},Xd=Object.keys(Q1);function Jd(c,e){var a=e.mixoutsTo;return A5=c,j1={},Object.keys(Q1).forEach(function(s){Xd.indexOf(s)===-1&&delete Q1[s]}),A5.forEach(function(s){var n=s.mixout?s.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(a[i]=n[i]),V3(n[i])==="object"&&Object.keys(n[i]).forEach(function(o){a[i]||(a[i]={}),a[i][o]=n[i][o]})}),s.hooks){var r=s.hooks();Object.keys(r).forEach(function(i){j1[i]||(j1[i]=[]),j1[i].push(r[i])})}s.provides&&s.provides(Q1)}),a}function Y6(c,e){for(var a=arguments.length,s=new Array(a>2?a-2:0),n=2;n<a;n++)s[n-2]=arguments[n];var r=j1[c]||[];return r.forEach(function(i){e=i.apply(null,[e].concat(s))}),e}function D1(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),s=1;s<e;s++)a[s-1]=arguments[s];var n=j1[c]||[];n.forEach(function(r){r.apply(null,a)})}function t1(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return Q1[c]?Q1[c].apply(null,e):void 0}function K6(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,a=c.prefix||C1();if(e)return e=F1(a,e)||e,k5(mc.definitions,a,e)||k5($2.styles,a,e)}var mc=new Kd,Qd=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,D1("noAuto")},Zd={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return f1?(D1("beforeI2svg",e),t1("pseudoElements2svg",e),t1("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Rd(function(){em({autoReplaceSvgRoot:a}),D1("watch",e)})}},cm={icon:function(e){if(e===null)return null;if(V3(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:F1(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],s=E3(e[0]);return{prefix:s,iconName:F1(s,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(I.cssPrefix,"-"))>-1||e.match(yd))){var n=U3(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||C1(),iconName:F1(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){var r=C1();return{prefix:r,iconName:F1(r,e)||e}}}},I2={noAuto:Qd,config:I,dom:Zd,parse:cm,library:mc,findIconDefinition:K6,toHtml:B4},em=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,s=a===void 0?r2:a;(Object.keys($2.styles).length>0||I.autoFetchSvg)&&f1&&I.autoReplaceSvg&&I2.dom.i2svg({node:s})};function $3(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return B4(s)})}}),Object.defineProperty(c,"node",{get:function(){if(f1){var s=r2.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function am(c){var e=c.children,a=c.main,s=c.mask,n=c.attributes,r=c.styles,i=c.transform;if(S0(i)&&a.found&&!s.found){var o=a.width,t=a.height,l={x:o/t/2,y:.5};n.style=O3(S(S({},r),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:e}]}function sm(c){var e=c.prefix,a=c.iconName,s=c.children,n=c.attributes,r=c.symbol,i=r===!0?"".concat(e,"-").concat(I.cssPrefix,"-").concat(a):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},n),{},{id:i}),children:s}]}]}function F0(c){var e=c.icons,a=e.main,s=e.mask,n=c.prefix,r=c.iconName,i=c.transform,o=c.symbol,t=c.title,l=c.maskId,h=c.titleId,u=c.extra,m=c.watchable,v=m===void 0?!1:m,H=s.found?s:a,M=H.width,F=H.height,C=n==="fak",y=[I.replacementClass,r?"".concat(I.cssPrefix,"-").concat(r):""].filter(function(N){return u.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(u.classes).join(" "),B={children:[],attributes:S(S({},u.attributes),{},{"data-prefix":n,"data-icon":r,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(F)})},x=C&&!~u.classes.indexOf("fa-fw")?{width:"".concat(M/F*16*.0625,"em")}:{};v&&(B.attributes[_1]=""),t&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(h||T4())},children:[t]}),delete B.attributes.title);var D=S(S({},B),{},{prefix:n,iconName:r,main:a,mask:s,maskId:l,transform:i,symbol:o,styles:S(S({},x),u.styles)}),c2=s.found&&a.found?t1("generateAbstractMask",D)||{children:[],attributes:{}}:t1("generateAbstractIcon",D)||{children:[],attributes:{}},Q=c2.children,_=c2.attributes;return D.children=Q,D.attributes=_,o?sm(D):am(D)}function T5(c){var e=c.content,a=c.width,s=c.height,n=c.transform,r=c.title,i=c.extra,o=c.watchable,t=o===void 0?!1:o,l=S(S(S({},i.attributes),r?{title:r}:{}),{},{class:i.classes.join(" ")});t&&(l[_1]="");var h=S({},i.styles);S0(n)&&(h.transform=Fd({transform:n,startCentered:!0,width:a,height:s}),h["-webkit-transform"]=h.transform);var u=O3(h);u.length>0&&(l.style=u);var m=[];return m.push({tag:"span",attributes:l,children:[e]}),r&&m.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),m}function nm(c){var e=c.content,a=c.title,s=c.extra,n=S(S(S({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")}),r=O3(s.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[e]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var M6=$2.styles;function X6(c){var e=c[0],a=c[1],s=c.slice(4),n=b0(s,1),r=n[0],i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(I1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(I1.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(I1.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:a,icon:i}}var rm={found:!1,width:512,height:512};function im(c,e){!Z7&&!I.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function J6(c,e){var a=e;return e==="fa"&&I.styleDefault!==null&&(e=C1()),new Promise(function(s,n){if(t1("missingIconAbstract"),a==="fa"){var r=dc(c)||{};c=r.iconName||c,e=r.prefix||e}if(c&&e&&M6[e]&&M6[e][c]){var i=M6[e][c];return s(X6(i))}im(c,e),s(S(S({},rm),{},{icon:I.showMissingIcons&&c?t1("missingIconAbstract")||{}:{}}))})}var I5=function(){},Q6=I.measurePerformance&&J4&&J4.mark&&J4.measure?J4:{mark:I5,measure:I5},v4='FA "6.5.1"',om=function(e){return Q6.mark("".concat(v4," ").concat(e," begins")),function(){return uc(e)}},uc=function(e){Q6.mark("".concat(v4," ").concat(e," ends")),Q6.measure("".concat(v4," ").concat(e),"".concat(v4," ").concat(e," begins"),"".concat(v4," ").concat(e," ends"))},B0={begin:om,end:uc},h3=function(){};function F5(c){var e=c.getAttribute?c.getAttribute(_1):null;return typeof e=="string"}function tm(c){var e=c.getAttribute?c.getAttribute(L0):null,a=c.getAttribute?c.getAttribute(x0):null;return e&&a}function lm(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(I.replacementClass)}function fm(){if(I.autoReplaceSvg===!0)return d3.replace;var c=d3[I.autoReplaceSvg];return c||d3.replace}function hm(c){return r2.createElementNS("http://www.w3.org/2000/svg",c)}function dm(c){return r2.createElement(c)}function vc(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,s=a===void 0?c.tag==="svg"?hm:dm:a;if(typeof c=="string")return r2.createTextNode(c);var n=s(c.tag);Object.keys(c.attributes||[]).forEach(function(i){n.setAttribute(i,c.attributes[i])});var r=c.children||[];return r.forEach(function(i){n.appendChild(vc(i,{ceFn:s}))}),n}function mm(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var d3={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(n){a.parentNode.insertBefore(vc(n),a)}),a.getAttribute(_1)===null&&I.keepOriginalSource){var s=r2.createComment(mm(a));a.parentNode.replaceChild(s,a)}else a.remove()},nest:function(e){var a=e[0],s=e[1];if(~N0(a).indexOf(I.replacementClass))return d3.replace(e);var n=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var r=s[0].attributes.class.split(" ").reduce(function(o,t){return t===I.replacementClass||t.match(n)?o.toSvg.push(t):o.toNode.push(t),o},{toNode:[],toSvg:[]});s[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",r.toNode.join(" "))}var i=s.map(function(o){return B4(o)}).join(`
`);a.setAttribute(_1,""),a.innerHTML=i}};function B5(c){c()}function pc(c,e){var a=typeof e=="function"?e:h3;if(c.length===0)a();else{var s=B5;I.mutateApproach===Hd&&(s=M1.requestAnimationFrame||B5),s(function(){var n=fm(),r=B0.begin("mutate");c.map(n),r(),a()})}}var P0=!1;function Hc(){P0=!0}function Z6(){P0=!1}var C3=null;function P5(c){if(w5&&I.observeMutations){var e=c.treeCallback,a=e===void 0?h3:e,s=c.nodeCallback,n=s===void 0?h3:s,r=c.pseudoElementsCallback,i=r===void 0?h3:r,o=c.observeMutationsRoot,t=o===void 0?r2:o;C3=new w5(function(l){if(!P0){var h=C1();o4(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!F5(u.addedNodes[0])&&(I.searchPseudoElements&&i(u.target),a(u.target)),u.type==="attributes"&&u.target.parentNode&&I.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&F5(u.target)&&~bd.indexOf(u.attributeName))if(u.attributeName==="class"&&tm(u.target)){var m=U3(N0(u.target)),v=m.prefix,H=m.iconName;u.target.setAttribute(L0,v||h),H&&u.target.setAttribute(x0,H)}else lm(u.target)&&n(u.target)})}}),f1&&C3.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function um(){C3&&C3.disconnect()}function vm(c){var e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(s,n){var r=n.split(":"),i=r[0],o=r.slice(1);return i&&o.length>0&&(s[i]=o.join(":").trim()),s},{})),a}function pm(c){var e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",n=U3(N0(c));return n.prefix||(n.prefix=C1()),e&&a&&(n.prefix=e,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&s.length>0&&(n.iconName=jd(n.prefix,c.innerText)||T0(n.prefix,G6(c.innerText))),!n.iconName&&I.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function Hm(c){var e=o4(c.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),a=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return I.autoA11y&&(a?e["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(s||T4()):(e["aria-hidden"]="true",e.focusable="false")),e}function zm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Z2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function W5(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=pm(c),s=a.iconName,n=a.prefix,r=a.rest,i=Hm(c),o=Y6("parseNodeAttributes",{},c),t=e.styleParser?vm(c):[];return S({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:n,transform:Z2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:t,attributes:i}},o)}var gm=$2.styles;function zc(c){var e=I.autoReplaceSvg==="nest"?W5(c,{styleParser:!1}):W5(c);return~e.extra.classes.indexOf(cc)?t1("generateLayersText",c,e):t1("generateSvgReplacementMutation",c,e)}var b1=new Set;k0.map(function(c){b1.add("fa-".concat(c))});Object.keys(k4[n2]).map(b1.add.bind(b1));Object.keys(k4[f2]).map(b1.add.bind(b1));b1=I4(b1);function R5(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!f1)return Promise.resolve();var a=r2.documentElement.classList,s=function(u){return a.add("".concat(L5,"-").concat(u))},n=function(u){return a.remove("".concat(L5,"-").concat(u))},r=I.autoFetchSvg?b1:k0.map(function(h){return"fa-".concat(h)}).concat(Object.keys(gm));r.includes("fa")||r.push("fa");var i=[".".concat(cc,":not([").concat(_1,"])")].concat(r.map(function(h){return".".concat(h,":not([").concat(_1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=o4(c.querySelectorAll(i))}catch{}if(o.length>0)s("pending"),n("complete");else return Promise.resolve();var t=B0.begin("onTree"),l=o.reduce(function(h,u){try{var m=zc(u);m&&h.push(m)}catch(v){Z7||v.name==="MissingIcon"&&console.error(v)}return h},[]);return new Promise(function(h,u){Promise.all(l).then(function(m){pc(m,function(){s("active"),s("complete"),n("pending"),typeof e=="function"&&e(),t(),h()})}).catch(function(m){t(),u(m)})})}function ym(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zc(c).then(function(a){a&&pc([a],e)})}function Vm(c){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(e||{}).icon?e:K6(e||{}),n=a.mask;return n&&(n=(n||{}).icon?n:K6(n||{})),c(s,S(S({},a),{},{mask:n}))}}var Mm=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,n=s===void 0?Z2:s,r=a.symbol,i=r===void 0?!1:r,o=a.mask,t=o===void 0?null:o,l=a.maskId,h=l===void 0?null:l,u=a.title,m=u===void 0?null:u,v=a.titleId,H=v===void 0?null:v,M=a.classes,F=M===void 0?[]:M,C=a.attributes,y=C===void 0?{}:C,B=a.styles,x=B===void 0?{}:B;if(e){var D=e.prefix,c2=e.iconName,Q=e.icon;return $3(S({type:"icon"},e),function(){return D1("beforeDOMElementCreation",{iconDefinition:e,params:a}),I.autoA11y&&(m?y["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(H||T4()):(y["aria-hidden"]="true",y.focusable="false")),F0({icons:{main:X6(Q),mask:t?X6(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:c2,transform:S(S({},Z2),n),symbol:i,title:m,maskId:h,titleId:H,extra:{attributes:y,styles:x,classes:F}})})}},Cm={mixout:function(){return{icon:Vm(Mm)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=R5,a.nodeCallback=ym,a}}},provides:function(e){e.i2svg=function(a){var s=a.node,n=s===void 0?r2:s,r=a.callback,i=r===void 0?function(){}:r;return R5(n,i)},e.generateSvgReplacementMutation=function(a,s){var n=s.iconName,r=s.title,i=s.titleId,o=s.prefix,t=s.transform,l=s.symbol,h=s.mask,u=s.maskId,m=s.extra;return new Promise(function(v,H){Promise.all([J6(n,o),h.iconName?J6(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var F=b0(M,2),C=F[0],y=F[1];v([a,F0({icons:{main:C,mask:y},prefix:o,iconName:n,transform:t,symbol:l,maskId:u,title:r,titleId:i,extra:m,watchable:!0})])}).catch(H)})},e.generateAbstractIcon=function(a){var s=a.children,n=a.attributes,r=a.main,i=a.transform,o=a.styles,t=O3(o);t.length>0&&(n.style=t);var l;return S0(i)&&(l=t1("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),s.push(l||r.icon),{children:s,attributes:n}}}},bm={mixout:function(){return{layer:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.classes,r=n===void 0?[]:n;return $3({type:"layer"},function(){D1("beforeDOMElementCreation",{assembler:a,params:s});var i=[];return a(function(o){Array.isArray(o)?o.map(function(t){i=i.concat(t.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(I4(r)).join(" ")},children:i}]})}}}},wm={mixout:function(){return{counter:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.title,r=n===void 0?null:n,i=s.classes,o=i===void 0?[]:i,t=s.attributes,l=t===void 0?{}:t,h=s.styles,u=h===void 0?{}:h;return $3({type:"counter",content:a},function(){return D1("beforeDOMElementCreation",{content:a,params:s}),nm({content:a.toString(),title:r,extra:{attributes:l,styles:u,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(I4(o))}})})}}}},Lm={mixout:function(){return{text:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.transform,r=n===void 0?Z2:n,i=s.title,o=i===void 0?null:i,t=s.classes,l=t===void 0?[]:t,h=s.attributes,u=h===void 0?{}:h,m=s.styles,v=m===void 0?{}:m;return $3({type:"text",content:a},function(){return D1("beforeDOMElementCreation",{content:a,params:s}),T5({content:a,transform:S(S({},Z2),r),title:o,extra:{attributes:u,styles:v,classes:["".concat(I.cssPrefix,"-layers-text")].concat(I4(l))}})})}}},provides:function(e){e.generateLayersText=function(a,s){var n=s.title,r=s.transform,i=s.extra,o=null,t=null;if(X7){var l=parseInt(getComputedStyle(a).fontSize,10),h=a.getBoundingClientRect();o=h.width/l,t=h.height/l}return I.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,T5({content:a.innerHTML,width:o,height:t,transform:r,title:n,extra:i,watchable:!0})])}}},xm=new RegExp('"',"ug"),_5=[1105920,1112319];function km(c){var e=c.replace(xm,""),a=Od(e,0),s=a>=_5[0]&&a<=_5[1],n=e.length===2?e[0]===e[1]:!1;return{value:G6(n?e[0]:e),isSecondary:s||n}}function D5(c,e){var a="".concat(pd).concat(e.replace(":","-"));return new Promise(function(s,n){if(c.getAttribute(a)!==null)return s();var r=o4(c.children),i=r.filter(function(Q){return Q.getAttribute(q6)===e})[0],o=M1.getComputedStyle(c,e),t=o.getPropertyValue("font-family").match(Vd),l=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(i&&!t)return c.removeChild(i),s();if(t&&h!=="none"&&h!==""){var u=o.getPropertyValue("content"),m=~["Sharp"].indexOf(t[2])?f2:n2,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(t[2])?N4[m][t[2].toLowerCase()]:Md[m][l],H=km(u),M=H.value,F=H.isSecondary,C=t[0].startsWith("FontAwesome"),y=T0(v,M),B=y;if(C){var x=Yd(M);x.iconName&&x.prefix&&(y=x.iconName,v=x.prefix)}if(y&&!F&&(!i||i.getAttribute(L0)!==v||i.getAttribute(x0)!==B)){c.setAttribute(a,B),i&&c.removeChild(i);var D=zm(),c2=D.extra;c2.attributes[q6]=e,J6(y,v).then(function(Q){var _=F0(S(S({},D),{},{icons:{main:Q,mask:I0()},prefix:v,iconName:B,extra:c2,watchable:!0})),N=r2.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(N,c.firstChild):c.appendChild(N),N.outerHTML=_.map(function(O){return B4(O)}).join(`
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}