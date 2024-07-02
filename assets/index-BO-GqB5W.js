(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function nc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vu={exports:{}},el={},Hu={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),rc=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),uc=Symbol.for("react.provider"),ac=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),dc=Symbol.for("react.memo"),fc=Symbol.for("react.lazy"),Ao=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=Ao&&e[Ao]||e["@@iterator"],typeof e=="function"?e:null)}var Wu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ju=Object.assign,Gu={};function ln(e,t,n){this.props=e,this.context=t,this.refs=Gu,this.updater=n||Wu}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ku(){}Ku.prototype=ln.prototype;function Fi(e,t,n){this.props=e,this.context=t,this.refs=Gu,this.updater=n||Wu}var Bi=Fi.prototype=new Ku;Bi.constructor=Fi;Ju(Bi,ln.prototype);Bi.isPureReactComponent=!0;var Mo=Array.isArray,Xu=Object.prototype.hasOwnProperty,$i={current:null},Yu={key:!0,ref:!0,__self:!0,__source:!0};function Zu(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Xu.call(t,r)&&!Yu.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Kn,type:e,key:i,ref:o,props:l,_owner:$i.current}}function mc(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ui(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function hc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ro=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hc(""+e.key):t.toString(36)}function yr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Kn:case rc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Sl(o,0):r,Mo(l)?(n="",e!=null&&(n=e.replace(Ro,"$&/")+"/"),yr(l,t,n,"",function(c){return c})):l!=null&&(Ui(l)&&(l=mc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Ro,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Mo(e))for(var u=0;u<e.length;u++){i=e[u];var a=r+Sl(i,u);o+=yr(i,t,n,a,l)}else if(a=pc(e),typeof a=="function")for(e=a.call(e),u=0;!(i=e.next()).done;)i=i.value,a=r+Sl(i,u++),o+=yr(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function tr(e,t,n){if(e==null)return e;var r=[],l=0;return yr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function vc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Sr={transition:null},gc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Sr,ReactCurrentOwner:$i};function qu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:tr,forEach:function(e,t,n){tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tr(e,function(){t++}),t},toArray:function(e){return tr(e,function(t){return t})||[]},only:function(e){if(!Ui(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=ln;L.Fragment=lc;L.Profiler=oc;L.PureComponent=Fi;L.StrictMode=ic;L.Suspense=cc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gc;L.act=qu;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ju({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=$i.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)Xu.call(t,a)&&!Yu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Kn,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:ac,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uc,_context:e},e.Consumer=e};L.createElement=Zu;L.createFactory=function(e){var t=Zu.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:sc,render:e}};L.isValidElement=Ui;L.lazy=function(e){return{$$typeof:fc,_payload:{_status:-1,_result:e},_init:vc}};L.memo=function(e,t){return{$$typeof:dc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Sr.transition;Sr.transition={};try{e()}finally{Sr.transition=t}};L.unstable_act=qu;L.useCallback=function(e,t){return ue.current.useCallback(e,t)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,t){return ue.current.useEffect(e,t)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ue.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";Hu.exports=L;var qe=Hu.exports;const yc=nc(qe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=qe,wc=Symbol.for("react.element"),kc=Symbol.for("react.fragment"),xc=Object.prototype.hasOwnProperty,Cc=Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ec={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)xc.call(t,r)&&!Ec.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:wc,type:e,key:i,ref:o,props:l,_owner:Cc.current}}el.Fragment=kc;el.jsx=bu;el.jsxs=bu;Vu.exports=el;var S=Vu.exports,Wl={},ea={exports:{}},ye={},ta={exports:{}},na={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,P){var j=E.length;E.push(P);e:for(;0<j;){var H=j-1>>>1,X=E[H];if(0<l(X,P))E[H]=P,E[j]=X,j=H;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var P=E[0],j=E.pop();if(j!==P){E[0]=j;e:for(var H=0,X=E.length,bn=X>>>1;H<bn;){var vt=2*(H+1)-1,yl=E[vt],gt=vt+1,er=E[gt];if(0>l(yl,j))gt<X&&0>l(er,yl)?(E[H]=er,E[gt]=j,H=gt):(E[H]=yl,E[vt]=j,H=vt);else if(gt<X&&0>l(er,j))E[H]=er,E[gt]=j,H=gt;else break e}}return P}function l(E,P){var j=E.sortIndex-P.sortIndex;return j!==0?j:E.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],c=[],h=1,m=null,p=3,y=!1,w=!1,k=!1,O=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=E)r(c),P.sortIndex=P.expirationTime,t(a,P);else break;P=n(c)}}function v(E){if(k=!1,f(E),!w)if(n(a)!==null)w=!0,vl(C);else{var P=n(c);P!==null&&gl(v,P.startTime-E)}}function C(E,P){w=!1,k&&(k=!1,d(_),_=-1),y=!0;var j=p;try{for(f(P),m=n(a);m!==null&&(!(m.expirationTime>P)||E&&!Ne());){var H=m.callback;if(typeof H=="function"){m.callback=null,p=m.priorityLevel;var X=H(m.expirationTime<=P);P=e.unstable_now(),typeof X=="function"?m.callback=X:m===n(a)&&r(a),f(P)}else r(a);m=n(a)}if(m!==null)var bn=!0;else{var vt=n(c);vt!==null&&gl(v,vt.startTime-P),bn=!1}return bn}finally{m=null,p=j,y=!1}}var T=!1,N=null,_=-1,V=5,z=-1;function Ne(){return!(e.unstable_now()-z<V)}function an(){if(N!==null){var E=e.unstable_now();z=E;var P=!0;try{P=N(!0,E)}finally{P?sn():(T=!1,N=null)}}else T=!1}var sn;if(typeof s=="function")sn=function(){s(an)};else if(typeof MessageChannel<"u"){var Do=new MessageChannel,tc=Do.port2;Do.port1.onmessage=an,sn=function(){tc.postMessage(null)}}else sn=function(){O(an,0)};function vl(E){N=E,T||(T=!0,sn())}function gl(E,P){_=O(function(){E(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,vl(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var j=p;p=P;try{return E()}finally{p=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,P){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var j=p;p=E;try{return P()}finally{p=j}},e.unstable_scheduleCallback=function(E,P,j){var H=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?H+j:H):j=H,E){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=j+X,E={id:h++,callback:P,priorityLevel:E,startTime:j,expirationTime:X,sortIndex:-1},j>H?(E.sortIndex=j,t(c,E),n(a)===null&&E===n(c)&&(k?(d(_),_=-1):k=!0,gl(v,j-H))):(E.sortIndex=X,t(a,E),w||y||(w=!0,vl(C))),E},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(E){var P=p;return function(){var j=p;p=P;try{return E.apply(this,arguments)}finally{p=j}}}})(na);ta.exports=na;var Tc=ta.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc=qe,ge=Tc;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ra=new Set,zn={};function Lt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(zn[e]=t,e=0;e<t.length;e++)ra.add(t[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jl=Object.prototype.hasOwnProperty,_c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oo={},Fo={};function Pc(e){return Jl.call(Fo,e)?!0:Jl.call(Oo,e)?!1:_c.test(e)?Fo[e]=!0:(Oo[e]=!0,!1)}function jc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lc(e,t,n,r){if(t===null||typeof t>"u"||jc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qi=/[\-:]([a-z])/g;function Vi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qi,Vi);ee[t]=new ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qi,Vi);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qi,Vi);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hi(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lc(t,n,l,r)&&(n=null),r||l===null?Pc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ke=Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),Dt=Symbol.for("react.portal"),At=Symbol.for("react.fragment"),Wi=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),la=Symbol.for("react.provider"),ia=Symbol.for("react.context"),Ji=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),Gi=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),oa=Symbol.for("react.offscreen"),Bo=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=Bo&&e[Bo]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,wl;function yn(e){if(wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||""}return`
`+wl+e}var kl=!1;function xl(e,t){if(!e||kl)return"";kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{kl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function zc(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=xl(e.type,!1),e;case 11:return e=xl(e.type.render,!1),e;case 1:return e=xl(e.type,!0),e;default:return""}}function Yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case At:return"Fragment";case Dt:return"Portal";case Gl:return"Profiler";case Wi:return"StrictMode";case Kl:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ia:return(e.displayName||"Context")+".Consumer";case la:return(e._context.displayName||"Context")+".Provider";case Ji:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gi:return t=e.displayName||null,t!==null?t:Yl(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return Yl(e(t))}catch{}}return null}function Ic(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yl(t);case 8:return t===Wi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ua(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dc(e){var t=ua(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rr(e){e._valueTracker||(e._valueTracker=Dc(e))}function aa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ua(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zl(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $o(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sa(e,t){t=t.checked,t!=null&&Hi(e,"checked",t,!1)}function ql(e,t){sa(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||Lr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sn=Array.isArray;function Wt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(Sn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function ca(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function da(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ti(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?da(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,fa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ac=["Webkit","ms","Moz","O"];Object.keys(xn).forEach(function(e){Ac.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xn[t]=xn[e]})});function pa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xn.hasOwnProperty(e)&&xn[e]?(""+t).trim():t+"px"}function ma(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=pa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Mc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ni(e,t){if(t){if(Mc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function ri(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var li=null;function Ki(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ii=null,Jt=null,Gt=null;function Ho(e){if(e=Zn(e)){if(typeof ii!="function")throw Error(g(280));var t=e.stateNode;t&&(t=il(t),ii(e.stateNode,e.type,t))}}function ha(e){Jt?Gt?Gt.push(e):Gt=[e]:Jt=e}function va(){if(Jt){var e=Jt,t=Gt;if(Gt=Jt=null,Ho(e),t)for(e=0;e<t.length;e++)Ho(t[e])}}function ga(e,t){return e(t)}function ya(){}var Cl=!1;function Sa(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return ga(e,t,n)}finally{Cl=!1,(Jt!==null||Gt!==null)&&(ya(),va())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=il(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var oi=!1;if(He)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){oi=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{oi=!1}function Rc(e,t,n,r,l,i,o,u,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Cn=!1,zr=null,Ir=!1,ui=null,Oc={onError:function(e){Cn=!0,zr=e}};function Fc(e,t,n,r,l,i,o,u,a){Cn=!1,zr=null,Rc.apply(Oc,arguments)}function Bc(e,t,n,r,l,i,o,u,a){if(Fc.apply(this,arguments),Cn){if(Cn){var c=zr;Cn=!1,zr=null}else throw Error(g(198));Ir||(Ir=!0,ui=c)}}function zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wo(e){if(zt(e)!==e)throw Error(g(188))}function $c(e){var t=e.alternate;if(!t){if(t=zt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Wo(l),e;if(i===r)return Wo(l),t;i=i.sibling}throw Error(g(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function ka(e){return e=$c(e),e!==null?xa(e):null}function xa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xa(e);if(t!==null)return t;e=e.sibling}return null}var Ca=ge.unstable_scheduleCallback,Jo=ge.unstable_cancelCallback,Uc=ge.unstable_shouldYield,Qc=ge.unstable_requestPaint,W=ge.unstable_now,Vc=ge.unstable_getCurrentPriorityLevel,Xi=ge.unstable_ImmediatePriority,Ea=ge.unstable_UserBlockingPriority,Dr=ge.unstable_NormalPriority,Hc=ge.unstable_LowPriority,Ta=ge.unstable_IdlePriority,tl=null,Oe=null;function Wc(e){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:Kc,Jc=Math.log,Gc=Math.LN2;function Kc(e){return e>>>=0,e===0?32:31-(Jc(e)/Gc|0)|0}var ir=64,or=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=wn(u):(i&=o,i!==0&&(r=wn(i)))}else o=n&~l,o!==0?r=wn(o):i!==0&&(r=wn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),l=1<<n,r|=e[n],t&=~l;return r}function Xc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ze(i),u=1<<o,a=l[o];a===-1?(!(u&n)||u&r)&&(l[o]=Xc(u,t)):a<=t&&(e.expiredLanes|=u),i&=~u}}function ai(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Na(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function Zc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-ze(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Yi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function _a(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pa,Zi,ja,La,za,si=!1,ur=[],rt=null,lt=null,it=null,An=new Map,Mn=new Map,be=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Go(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(t.pointerId)}}function fn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Zn(t),t!==null&&Zi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function bc(e,t,n,r,l){switch(t){case"focusin":return rt=fn(rt,e,t,n,r,l),!0;case"dragenter":return lt=fn(lt,e,t,n,r,l),!0;case"mouseover":return it=fn(it,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return An.set(i,fn(An.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Mn.set(i,fn(Mn.get(i)||null,e,t,n,r,l)),!0}return!1}function Ia(e){var t=wt(e.target);if(t!==null){var n=zt(t);if(n!==null){if(t=n.tag,t===13){if(t=wa(n),t!==null){e.blockedOn=t,za(e.priority,function(){ja(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);li=r,n.target.dispatchEvent(r),li=null}else return t=Zn(n),t!==null&&Zi(t),e.blockedOn=n,!1;t.shift()}return!0}function Ko(e,t,n){wr(e)&&n.delete(t)}function ed(){si=!1,rt!==null&&wr(rt)&&(rt=null),lt!==null&&wr(lt)&&(lt=null),it!==null&&wr(it)&&(it=null),An.forEach(Ko),Mn.forEach(Ko)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,si||(si=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,ed)))}function Rn(e){function t(l){return pn(l,e)}if(0<ur.length){pn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&pn(rt,e),lt!==null&&pn(lt,e),it!==null&&pn(it,e),An.forEach(t),Mn.forEach(t),n=0;n<be.length;n++)r=be[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(n=be[0],n.blockedOn===null);)Ia(n),n.blockedOn===null&&be.shift()}var Kt=Ke.ReactCurrentBatchConfig,Mr=!0;function td(e,t,n,r){var l=D,i=Kt.transition;Kt.transition=null;try{D=1,qi(e,t,n,r)}finally{D=l,Kt.transition=i}}function nd(e,t,n,r){var l=D,i=Kt.transition;Kt.transition=null;try{D=4,qi(e,t,n,r)}finally{D=l,Kt.transition=i}}function qi(e,t,n,r){if(Mr){var l=ci(e,t,n,r);if(l===null)Al(e,t,r,Rr,n),Go(e,r);else if(bc(l,e,t,n,r))r.stopPropagation();else if(Go(e,r),t&4&&-1<qc.indexOf(e)){for(;l!==null;){var i=Zn(l);if(i!==null&&Pa(i),i=ci(e,t,n,r),i===null&&Al(e,t,r,Rr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Al(e,t,r,null,n)}}var Rr=null;function ci(e,t,n,r){if(Rr=null,e=Ki(r),e=wt(e),e!==null)if(t=zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Rr=e,null}function Da(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vc()){case Xi:return 1;case Ea:return 4;case Dr:case Hc:return 16;case Ta:return 536870912;default:return 16}default:return 16}}var tt=null,bi=null,kr=null;function Aa(){if(kr)return kr;var e,t=bi,n=t.length,r,l="value"in tt?tt.value:tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return kr=l.slice(e,1<r?1-r:void 0)}function xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function Xo(){return!1}function Se(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ar:Xo,this.isPropagationStopped=Xo,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=Se(on),Yn=U({},on,{view:0,detail:0}),rd=Se(Yn),Tl,Nl,mn,nl=U({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Tl=e.screenX-mn.screenX,Nl=e.screenY-mn.screenY):Nl=Tl=0,mn=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Nl}}),Yo=Se(nl),ld=U({},nl,{dataTransfer:0}),id=Se(ld),od=U({},Yn,{relatedTarget:0}),_l=Se(od),ud=U({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),ad=Se(ud),sd=U({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cd=Se(sd),dd=U({},on,{data:0}),Zo=Se(dd),fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=md[e])?!!t[e]:!1}function to(){return hd}var vd=U({},Yn,{key:function(e){if(e.key){var t=fd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gd=Se(vd),yd=U({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=Se(yd),Sd=U({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),wd=Se(Sd),kd=U({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),xd=Se(kd),Cd=U({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ed=Se(Cd),Td=[9,13,27,32],no=He&&"CompositionEvent"in window,En=null;He&&"documentMode"in document&&(En=document.documentMode);var Nd=He&&"TextEvent"in window&&!En,Ma=He&&(!no||En&&8<En&&11>=En),bo=" ",eu=!1;function Ra(e,t){switch(e){case"keyup":return Td.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mt=!1;function _d(e,t){switch(e){case"compositionend":return Oa(t);case"keypress":return t.which!==32?null:(eu=!0,bo);case"textInput":return e=t.data,e===bo&&eu?null:e;default:return null}}function Pd(e,t){if(Mt)return e==="compositionend"||!no&&Ra(e,t)?(e=Aa(),kr=bi=tt=null,Mt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ma&&t.locale!=="ko"?null:t.data;default:return null}}var jd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jd[e.type]:t==="textarea"}function Fa(e,t,n,r){ha(r),t=Or(t,"onChange"),0<t.length&&(n=new eo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tn=null,On=null;function Ld(e){Xa(e,0)}function rl(e){var t=Ft(e);if(aa(t))return e}function zd(e,t){if(e==="change")return t}var Ba=!1;if(He){var Pl;if(He){var jl="oninput"in document;if(!jl){var nu=document.createElement("div");nu.setAttribute("oninput","return;"),jl=typeof nu.oninput=="function"}Pl=jl}else Pl=!1;Ba=Pl&&(!document.documentMode||9<document.documentMode)}function ru(){Tn&&(Tn.detachEvent("onpropertychange",$a),On=Tn=null)}function $a(e){if(e.propertyName==="value"&&rl(On)){var t=[];Fa(t,On,e,Ki(e)),Sa(Ld,t)}}function Id(e,t,n){e==="focusin"?(ru(),Tn=t,On=n,Tn.attachEvent("onpropertychange",$a)):e==="focusout"&&ru()}function Dd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(On)}function Ad(e,t){if(e==="click")return rl(t)}function Md(e,t){if(e==="input"||e==="change")return rl(t)}function Rd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Rd;function Fn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Jl.call(t,l)||!De(e[l],t[l]))return!1}return!0}function lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iu(e,t){var n=lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lu(n)}}function Ua(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ua(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qa(){for(var e=window,t=Lr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lr(e.document)}return t}function ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Od(e){var t=Qa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ua(n.ownerDocument.documentElement,n)){if(r!==null&&ro(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=iu(n,i);var o=iu(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fd=He&&"documentMode"in document&&11>=document.documentMode,Rt=null,di=null,Nn=null,fi=!1;function ou(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fi||Rt==null||Rt!==Lr(r)||(r=Rt,"selectionStart"in r&&ro(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nn&&Fn(Nn,r)||(Nn=r,r=Or(di,"onSelect"),0<r.length&&(t=new eo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rt)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ot={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},Ll={},Va={};He&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ot.animationend.animation,delete Ot.animationiteration.animation,delete Ot.animationstart.animation),"TransitionEvent"in window||delete Ot.transitionend.transition);function ll(e){if(Ll[e])return Ll[e];if(!Ot[e])return e;var t=Ot[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Va)return Ll[e]=t[n];return e}var Ha=ll("animationend"),Wa=ll("animationiteration"),Ja=ll("animationstart"),Ga=ll("transitionend"),Ka=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Ka.set(e,t),Lt(t,[e])}for(var zl=0;zl<uu.length;zl++){var Il=uu[zl],Bd=Il.toLowerCase(),$d=Il[0].toUpperCase()+Il.slice(1);pt(Bd,"on"+$d)}pt(Ha,"onAnimationEnd");pt(Wa,"onAnimationIteration");pt(Ja,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Ga,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ud=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function au(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bc(r,t,void 0,e),e.currentTarget=null}function Xa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,c=u.currentTarget;if(u=u.listener,a!==i&&l.isPropagationStopped())break e;au(l,u,c),i=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,c=u.currentTarget,u=u.listener,a!==i&&l.isPropagationStopped())break e;au(l,u,c),i=a}}}if(Ir)throw e=ui,Ir=!1,ui=null,e}function M(e,t){var n=t[gi];n===void 0&&(n=t[gi]=new Set);var r=e+"__bubble";n.has(r)||(Ya(t,e,2,!1),n.add(r))}function Dl(e,t,n){var r=0;t&&(r|=4),Ya(n,e,r,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[cr]){e[cr]=!0,ra.forEach(function(n){n!=="selectionchange"&&(Ud.has(n)||Dl(n,!1,e),Dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,Dl("selectionchange",!1,t))}}function Ya(e,t,n,r){switch(Da(t)){case 1:var l=td;break;case 4:l=nd;break;default:l=qi}n=l.bind(null,t,n,e),l=void 0,!oi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Al(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;u!==null;){if(o=wt(u),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}u=u.parentNode}}r=r.return}Sa(function(){var c=i,h=Ki(n),m=[];e:{var p=Ka.get(e);if(p!==void 0){var y=eo,w=e;switch(e){case"keypress":if(xr(n)===0)break e;case"keydown":case"keyup":y=gd;break;case"focusin":w="focus",y=_l;break;case"focusout":w="blur",y=_l;break;case"beforeblur":case"afterblur":y=_l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=wd;break;case Ha:case Wa:case Ja:y=ad;break;case Ga:y=xd;break;case"scroll":y=rd;break;case"wheel":y=Ed;break;case"copy":case"cut":case"paste":y=cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qo}var k=(t&4)!==0,O=!k&&e==="scroll",d=k?p!==null?p+"Capture":null:p;k=[];for(var s=c,f;s!==null;){f=s;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=Dn(s,d),v!=null&&k.push($n(s,v,f)))),O)break;s=s.return}0<k.length&&(p=new y(p,w,null,n,h),m.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==li&&(w=n.relatedTarget||n.fromElement)&&(wt(w)||w[We]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?wt(w):null,w!==null&&(O=zt(w),w!==O||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(k=Yo,v="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(k=qo,v="onPointerLeave",d="onPointerEnter",s="pointer"),O=y==null?p:Ft(y),f=w==null?p:Ft(w),p=new k(v,s+"leave",y,n,h),p.target=O,p.relatedTarget=f,v=null,wt(h)===c&&(k=new k(d,s+"enter",w,n,h),k.target=f,k.relatedTarget=O,v=k),O=v,y&&w)t:{for(k=y,d=w,s=0,f=k;f;f=It(f))s++;for(f=0,v=d;v;v=It(v))f++;for(;0<s-f;)k=It(k),s--;for(;0<f-s;)d=It(d),f--;for(;s--;){if(k===d||d!==null&&k===d.alternate)break t;k=It(k),d=It(d)}k=null}else k=null;y!==null&&su(m,p,y,k,!1),w!==null&&O!==null&&su(m,O,w,k,!0)}}e:{if(p=c?Ft(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var C=zd;else if(tu(p))if(Ba)C=Md;else{C=Dd;var T=Id}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Ad);if(C&&(C=C(e,c))){Fa(m,C,n,h);break e}T&&T(e,p,c),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&bl(p,"number",p.value)}switch(T=c?Ft(c):window,e){case"focusin":(tu(T)||T.contentEditable==="true")&&(Rt=T,di=c,Nn=null);break;case"focusout":Nn=di=Rt=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,ou(m,n,h);break;case"selectionchange":if(Fd)break;case"keydown":case"keyup":ou(m,n,h)}var N;if(no)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Mt?Ra(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Ma&&n.locale!=="ko"&&(Mt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Mt&&(N=Aa()):(tt=h,bi="value"in tt?tt.value:tt.textContent,Mt=!0)),T=Or(c,_),0<T.length&&(_=new Zo(_,e,null,n,h),m.push({event:_,listeners:T}),N?_.data=N:(N=Oa(n),N!==null&&(_.data=N)))),(N=Nd?_d(e,n):Pd(e,n))&&(c=Or(c,"onBeforeInput"),0<c.length&&(h=new Zo("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=N))}Xa(m,t)})}function $n(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Or(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Dn(e,n),i!=null&&r.unshift($n(e,i,l)),i=Dn(e,t),i!=null&&r.push($n(e,i,l))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function su(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,a=u.alternate,c=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&c!==null&&(u=c,l?(a=Dn(n,i),a!=null&&o.unshift($n(n,a,u))):l||(a=Dn(n,i),a!=null&&o.push($n(n,a,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Qd=/\r\n?/g,Vd=/\u0000|\uFFFD/g;function cu(e){return(typeof e=="string"?e:""+e).replace(Qd,`
`).replace(Vd,"")}function dr(e,t,n){if(t=cu(t),cu(e)!==t&&n)throw Error(g(425))}function Fr(){}var pi=null,mi=null;function hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,Hd=typeof clearTimeout=="function"?clearTimeout:void 0,du=typeof Promise=="function"?Promise:void 0,Wd=typeof queueMicrotask=="function"?queueMicrotask:typeof du<"u"?function(e){return du.resolve(null).then(e).catch(Jd)}:vi;function Jd(e){setTimeout(function(){throw e})}function Ml(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Rn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Rn(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),Re="__reactFiber$"+un,Un="__reactProps$"+un,We="__reactContainer$"+un,gi="__reactEvents$"+un,Gd="__reactListeners$"+un,Kd="__reactHandles$"+un;function wt(e){var t=e[Re];if(t)return t;for(var n=e.parentNode;n;){if(t=n[We]||n[Re]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fu(e);e!==null;){if(n=e[Re])return n;e=fu(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Re]||e[We],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function il(e){return e[Un]||null}var yi=[],Bt=-1;function mt(e){return{current:e}}function R(e){0>Bt||(e.current=yi[Bt],yi[Bt]=null,Bt--)}function A(e,t){Bt++,yi[Bt]=e.current,e.current=t}var ft={},le=mt(ft),de=mt(!1),Tt=ft;function qt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Br(){R(de),R(le)}function pu(e,t,n){if(le.current!==ft)throw Error(g(168));A(le,t),A(de,n)}function Za(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(g(108,Ic(e)||"Unknown",l));return U({},n,r)}function $r(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,Tt=le.current,A(le,e),A(de,de.current),!0}function mu(e,t,n){var r=e.stateNode;if(!r)throw Error(g(169));n?(e=Za(e,t,Tt),r.__reactInternalMemoizedMergedChildContext=e,R(de),R(le),A(le,e)):R(de),A(de,n)}var $e=null,ol=!1,Rl=!1;function qa(e){$e===null?$e=[e]:$e.push(e)}function Xd(e){ol=!0,qa(e)}function ht(){if(!Rl&&$e!==null){Rl=!0;var e=0,t=D;try{var n=$e;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,ol=!1}catch(l){throw $e!==null&&($e=$e.slice(e+1)),Ca(Xi,ht),l}finally{D=t,Rl=!1}}return null}var $t=[],Ut=0,Ur=null,Qr=0,we=[],ke=0,Nt=null,Ue=1,Qe="";function yt(e,t){$t[Ut++]=Qr,$t[Ut++]=Ur,Ur=e,Qr=t}function ba(e,t,n){we[ke++]=Ue,we[ke++]=Qe,we[ke++]=Nt,Nt=e;var r=Ue;e=Qe;var l=32-ze(r)-1;r&=~(1<<l),n+=1;var i=32-ze(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ue=1<<32-ze(t)+l|n<<l|r,Qe=i+e}else Ue=1<<i|n<<l|r,Qe=e}function lo(e){e.return!==null&&(yt(e,1),ba(e,1,0))}function io(e){for(;e===Ur;)Ur=$t[--Ut],$t[Ut]=null,Qr=$t[--Ut],$t[Ut]=null;for(;e===Nt;)Nt=we[--ke],we[ke]=null,Qe=we[--ke],we[ke]=null,Ue=we[--ke],we[ke]=null}var ve=null,he=null,F=!1,Le=null;function es(e,t){var n=xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,he=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nt!==null?{id:Ue,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,he=null,!0):!1;default:return!1}}function Si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wi(e){if(F){var t=he;if(t){var n=t;if(!hu(e,t)){if(Si(e))throw Error(g(418));t=ot(n.nextSibling);var r=ve;t&&hu(e,t)?es(r,n):(e.flags=e.flags&-4097|2,F=!1,ve=e)}}else{if(Si(e))throw Error(g(418));e.flags=e.flags&-4097|2,F=!1,ve=e}}}function vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function fr(e){if(e!==ve)return!1;if(!F)return vu(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hi(e.type,e.memoizedProps)),t&&(t=he)){if(Si(e))throw ts(),Error(g(418));for(;t;)es(e,t),t=ot(t.nextSibling)}if(vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ve?ot(e.stateNode.nextSibling):null;return!0}function ts(){for(var e=he;e;)e=ot(e.nextSibling)}function bt(){he=ve=null,F=!1}function oo(e){Le===null?Le=[e]:Le.push(e)}var Yd=Ke.ReactCurrentBatchConfig;function hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var r=n.stateNode}if(!r)throw Error(g(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gu(e){var t=e._init;return t(e._payload)}function ns(e){function t(d,s){if(e){var f=d.deletions;f===null?(d.deletions=[s],d.flags|=16):f.push(s)}}function n(d,s){if(!e)return null;for(;s!==null;)t(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function l(d,s){return d=ct(d,s),d.index=0,d.sibling=null,d}function i(d,s,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<s?(d.flags|=2,s):f):(d.flags|=2,s)):(d.flags|=1048576,s)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,s,f,v){return s===null||s.tag!==6?(s=Vl(f,d.mode,v),s.return=d,s):(s=l(s,f),s.return=d,s)}function a(d,s,f,v){var C=f.type;return C===At?h(d,s,f.props.children,v,f.key):s!==null&&(s.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ye&&gu(C)===s.type)?(v=l(s,f.props),v.ref=hn(d,s,f),v.return=d,v):(v=jr(f.type,f.key,f.props,null,d.mode,v),v.ref=hn(d,s,f),v.return=d,v)}function c(d,s,f,v){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=Hl(f,d.mode,v),s.return=d,s):(s=l(s,f.children||[]),s.return=d,s)}function h(d,s,f,v,C){return s===null||s.tag!==7?(s=Et(f,d.mode,v,C),s.return=d,s):(s=l(s,f),s.return=d,s)}function m(d,s,f){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Vl(""+s,d.mode,f),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case nr:return f=jr(s.type,s.key,s.props,null,d.mode,f),f.ref=hn(d,null,s),f.return=d,f;case Dt:return s=Hl(s,d.mode,f),s.return=d,s;case Ye:var v=s._init;return m(d,v(s._payload),f)}if(Sn(s)||cn(s))return s=Et(s,d.mode,f,null),s.return=d,s;pr(d,s)}return null}function p(d,s,f,v){var C=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:u(d,s,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:return f.key===C?a(d,s,f,v):null;case Dt:return f.key===C?c(d,s,f,v):null;case Ye:return C=f._init,p(d,s,C(f._payload),v)}if(Sn(f)||cn(f))return C!==null?null:h(d,s,f,v,null);pr(d,f)}return null}function y(d,s,f,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,u(s,d,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case nr:return d=d.get(v.key===null?f:v.key)||null,a(s,d,v,C);case Dt:return d=d.get(v.key===null?f:v.key)||null,c(s,d,v,C);case Ye:var T=v._init;return y(d,s,f,T(v._payload),C)}if(Sn(v)||cn(v))return d=d.get(f)||null,h(s,d,v,C,null);pr(s,v)}return null}function w(d,s,f,v){for(var C=null,T=null,N=s,_=s=0,V=null;N!==null&&_<f.length;_++){N.index>_?(V=N,N=null):V=N.sibling;var z=p(d,N,f[_],v);if(z===null){N===null&&(N=V);break}e&&N&&z.alternate===null&&t(d,N),s=i(z,s,_),T===null?C=z:T.sibling=z,T=z,N=V}if(_===f.length)return n(d,N),F&&yt(d,_),C;if(N===null){for(;_<f.length;_++)N=m(d,f[_],v),N!==null&&(s=i(N,s,_),T===null?C=N:T.sibling=N,T=N);return F&&yt(d,_),C}for(N=r(d,N);_<f.length;_++)V=y(N,d,_,f[_],v),V!==null&&(e&&V.alternate!==null&&N.delete(V.key===null?_:V.key),s=i(V,s,_),T===null?C=V:T.sibling=V,T=V);return e&&N.forEach(function(Ne){return t(d,Ne)}),F&&yt(d,_),C}function k(d,s,f,v){var C=cn(f);if(typeof C!="function")throw Error(g(150));if(f=C.call(f),f==null)throw Error(g(151));for(var T=C=null,N=s,_=s=0,V=null,z=f.next();N!==null&&!z.done;_++,z=f.next()){N.index>_?(V=N,N=null):V=N.sibling;var Ne=p(d,N,z.value,v);if(Ne===null){N===null&&(N=V);break}e&&N&&Ne.alternate===null&&t(d,N),s=i(Ne,s,_),T===null?C=Ne:T.sibling=Ne,T=Ne,N=V}if(z.done)return n(d,N),F&&yt(d,_),C;if(N===null){for(;!z.done;_++,z=f.next())z=m(d,z.value,v),z!==null&&(s=i(z,s,_),T===null?C=z:T.sibling=z,T=z);return F&&yt(d,_),C}for(N=r(d,N);!z.done;_++,z=f.next())z=y(N,d,_,z.value,v),z!==null&&(e&&z.alternate!==null&&N.delete(z.key===null?_:z.key),s=i(z,s,_),T===null?C=z:T.sibling=z,T=z);return e&&N.forEach(function(an){return t(d,an)}),F&&yt(d,_),C}function O(d,s,f,v){if(typeof f=="object"&&f!==null&&f.type===At&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:e:{for(var C=f.key,T=s;T!==null;){if(T.key===C){if(C=f.type,C===At){if(T.tag===7){n(d,T.sibling),s=l(T,f.props.children),s.return=d,d=s;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ye&&gu(C)===T.type){n(d,T.sibling),s=l(T,f.props),s.ref=hn(d,T,f),s.return=d,d=s;break e}n(d,T);break}else t(d,T);T=T.sibling}f.type===At?(s=Et(f.props.children,d.mode,v,f.key),s.return=d,d=s):(v=jr(f.type,f.key,f.props,null,d.mode,v),v.ref=hn(d,s,f),v.return=d,d=v)}return o(d);case Dt:e:{for(T=f.key;s!==null;){if(s.key===T)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){n(d,s.sibling),s=l(s,f.children||[]),s.return=d,d=s;break e}else{n(d,s);break}else t(d,s);s=s.sibling}s=Hl(f,d.mode,v),s.return=d,d=s}return o(d);case Ye:return T=f._init,O(d,s,T(f._payload),v)}if(Sn(f))return w(d,s,f,v);if(cn(f))return k(d,s,f,v);pr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,s!==null&&s.tag===6?(n(d,s.sibling),s=l(s,f),s.return=d,d=s):(n(d,s),s=Vl(f,d.mode,v),s.return=d,d=s),o(d)):n(d,s)}return O}var en=ns(!0),rs=ns(!1),Vr=mt(null),Hr=null,Qt=null,uo=null;function ao(){uo=Qt=Hr=null}function so(e){var t=Vr.current;R(Vr),e._currentValue=t}function ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xt(e,t){Hr=e,uo=Qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(uo!==e)if(e={context:e,memoizedValue:t,next:null},Qt===null){if(Hr===null)throw Error(g(308));Qt=e,Hr.dependencies={lanes:0,firstContext:e}}else Qt=Qt.next=e;return t}var kt=null;function co(e){kt===null?kt=[e]:kt.push(e)}function ls(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,co(t)):(n.next=l.next,l.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function is(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ve(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Je(e,n)}return l=r.interleaved,l===null?(t.next=t,co(r)):(t.next=l.next,l.next=t),r.interleaved=t,Je(e,n)}function Cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yi(e,n)}}function yu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wr(e,t,n,r){var l=e.updateQueue;Ze=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var a=u,c=a.next;a.next=null,o===null?i=c:o.next=c,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==o&&(u===null?h.firstBaseUpdate=c:u.next=c,h.lastBaseUpdate=a))}if(i!==null){var m=l.baseState;o=0,h=c=a=null,u=i;do{var p=u.lane,y=u.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,k=u;switch(p=t,y=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){m=w.call(y,m,p);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,p=typeof w=="function"?w.call(y,m,p):w,p==null)break e;m=U({},m,p);break e;case 2:Ze=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[u]:p.push(u))}else y={eventTime:y,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(c=h=y,a=m):h=h.next=y,o|=p;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;p=u,u=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(h===null&&(a=m),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=m}}function Su(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(g(191,l));l.call(r)}}}var qn={},Fe=mt(qn),Qn=mt(qn),Vn=mt(qn);function xt(e){if(e===qn)throw Error(g(174));return e}function po(e,t){switch(A(Vn,t),A(Qn,e),A(Fe,qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ti(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ti(t,e)}R(Fe),A(Fe,t)}function tn(){R(Fe),R(Qn),R(Vn)}function os(e){xt(Vn.current);var t=xt(Fe.current),n=ti(t,e.type);t!==n&&(A(Qn,e),A(Fe,n))}function mo(e){Qn.current===e&&(R(Fe),R(Qn))}var B=mt(0);function Jr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ol=[];function ho(){for(var e=0;e<Ol.length;e++)Ol[e]._workInProgressVersionPrimary=null;Ol.length=0}var Er=Ke.ReactCurrentDispatcher,Fl=Ke.ReactCurrentBatchConfig,_t=0,$=null,G=null,Y=null,Gr=!1,_n=!1,Hn=0,Zd=0;function te(){throw Error(g(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function go(e,t,n,r,l,i){if(_t=i,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?tf:nf,e=n(r,l),_n){i=0;do{if(_n=!1,Hn=0,25<=i)throw Error(g(301));i+=1,Y=G=null,t.updateQueue=null,Er.current=rf,e=n(r,l)}while(_n)}if(Er.current=Kr,t=G!==null&&G.next!==null,_t=0,Y=G=$=null,Gr=!1,t)throw Error(g(300));return e}function yo(){var e=Hn!==0;return Hn=0,e}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?$.memoizedState=Y=e:Y=Y.next=e,Y}function Te(){if(G===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=Y===null?$.memoizedState:Y.next;if(t!==null)Y=t,G=e;else{if(e===null)throw Error(g(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},Y===null?$.memoizedState=Y=e:Y=Y.next=e}return Y}function Wn(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=Te(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,a=null,c=i;do{var h=c.lane;if((_t&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(u=a=m,o=r):a=a.next=m,$.lanes|=h,Pt|=h}c=c.next}while(c!==null&&c!==i);a===null?o=r:a.next=u,De(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,$.lanes|=i,Pt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $l(e){var t=Te(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);De(i,t.memoizedState)||(ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function us(){}function as(e,t){var n=$,r=Te(),l=t(),i=!De(r.memoizedState,l);if(i&&(r.memoizedState=l,ce=!0),r=r.queue,So(ds.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Y!==null&&Y.memoizedState.tag&1){if(n.flags|=2048,Jn(9,cs.bind(null,n,r,l,t),void 0,null),Z===null)throw Error(g(349));_t&30||ss(n,t,l)}return l}function ss(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cs(e,t,n,r){t.value=n,t.getSnapshot=r,fs(t)&&ps(e)}function ds(e,t,n){return n(function(){fs(t)&&ps(e)})}function fs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function ps(e){var t=Je(e,1);t!==null&&Ie(t,e,1,-1)}function wu(e){var t=Me();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:e},t.queue=e,e=e.dispatch=ef.bind(null,$,e),[t.memoizedState,e]}function Jn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ms(){return Te().memoizedState}function Tr(e,t,n,r){var l=Me();$.flags|=e,l.memoizedState=Jn(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var l=Te();r=r===void 0?null:r;var i=void 0;if(G!==null){var o=G.memoizedState;if(i=o.destroy,r!==null&&vo(r,o.deps)){l.memoizedState=Jn(t,n,i,r);return}}$.flags|=e,l.memoizedState=Jn(1|t,n,i,r)}function ku(e,t){return Tr(8390656,8,e,t)}function So(e,t){return ul(2048,8,e,t)}function hs(e,t){return ul(4,2,e,t)}function vs(e,t){return ul(4,4,e,t)}function gs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,gs.bind(null,t,e),n)}function wo(){}function Ss(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ks(e,t,n){return _t&21?(De(n,t)||(n=Na(),$.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function qd(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Fl.transition;Fl.transition={};try{e(!1),t()}finally{D=n,Fl.transition=r}}function xs(){return Te().memoizedState}function bd(e,t,n){var r=st(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cs(e))Es(t,n);else if(n=ls(e,t,n,r),n!==null){var l=oe();Ie(n,e,r,l),Ts(n,t,r)}}function ef(e,t,n){var r=st(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cs(e))Es(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,De(u,o)){var a=t.interleaved;a===null?(l.next=l,co(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=ls(e,t,l,r),n!==null&&(l=oe(),Ie(n,e,r,l),Ts(n,t,r))}}function Cs(e){var t=e.alternate;return e===$||t!==null&&t===$}function Es(e,t){_n=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ts(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yi(e,n)}}var Kr={readContext:Ee,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},tf={readContext:Ee,useCallback:function(e,t){return Me().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:ku,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Tr(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tr(4,2,e,t)},useMemo:function(e,t){var n=Me();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Me();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bd.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Me();return e={current:e},t.memoizedState=e},useState:wu,useDebugValue:wo,useDeferredValue:function(e){return Me().memoizedState=e},useTransition:function(){var e=wu(!1),t=e[0];return e=qd.bind(null,e[1]),Me().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=Me();if(F){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),Z===null)throw Error(g(349));_t&30||ss(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ku(ds.bind(null,r,i,e),[e]),r.flags|=2048,Jn(9,cs.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Me(),t=Z.identifierPrefix;if(F){var n=Qe,r=Ue;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nf={readContext:Ee,useCallback:Ss,useContext:Ee,useEffect:So,useImperativeHandle:ys,useInsertionEffect:hs,useLayoutEffect:vs,useMemo:ws,useReducer:Bl,useRef:ms,useState:function(){return Bl(Wn)},useDebugValue:wo,useDeferredValue:function(e){var t=Te();return ks(t,G.memoizedState,e)},useTransition:function(){var e=Bl(Wn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:us,useSyncExternalStore:as,useId:xs,unstable_isNewReconciler:!1},rf={readContext:Ee,useCallback:Ss,useContext:Ee,useEffect:So,useImperativeHandle:ys,useInsertionEffect:hs,useLayoutEffect:vs,useMemo:ws,useReducer:$l,useRef:ms,useState:function(){return $l(Wn)},useDebugValue:wo,useDeferredValue:function(e){var t=Te();return G===null?t.memoizedState=e:ks(t,G.memoizedState,e)},useTransition:function(){var e=$l(Wn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:us,useSyncExternalStore:as,useId:xs,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return(e=e._reactInternals)?zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),l=st(e),i=Ve(r,l);i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(Ie(t,e,l,r),Cr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),l=st(e),i=Ve(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(Ie(t,e,l,r),Cr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=st(e),l=Ve(n,r);l.tag=2,t!=null&&(l.callback=t),t=ut(e,l,r),t!==null&&(Ie(t,e,r,n),Cr(t,e,r))}};function xu(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Fn(n,r)||!Fn(l,i):!0}function Ns(e,t,n){var r=!1,l=ft,i=t.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(l=fe(t)?Tt:le.current,r=t.contextTypes,i=(r=r!=null)?qt(e,l):ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Cu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function Ci(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},fo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ee(i):(i=fe(t)?Tt:le.current,l.context=qt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(xi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&al.enqueueReplaceState(l,l.state,null),Wr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=zc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ei(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lf=typeof WeakMap=="function"?WeakMap:Map;function _s(e,t,n){n=Ve(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yr||(Yr=!0,Ai=r),Ei(e,t)},n}function Ps(e,t,n){n=Ve(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ei(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ei(e,t),typeof r!="function"&&(at===null?at=new Set([this]):at.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Eu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Sf.bind(null,e,t,n),t.then(e,e))}function Tu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ve(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var of=Ke.ReactCurrentOwner,ce=!1;function ie(e,t,n,r){t.child=e===null?rs(t,null,n,r):en(t,e.child,n,r)}function _u(e,t,n,r,l){n=n.render;var i=t.ref;return Xt(t,l),r=go(e,t,n,r,i,l),n=yo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(F&&n&&lo(t),t.flags|=1,ie(e,t,r,l),t.child)}function Pu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Po(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,js(e,t,i,r,l)):(e=jr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fn,n(o,r)&&e.ref===t.ref)return Ge(e,t,l)}return t.flags|=1,e=ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function js(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Fn(i,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ge(e,t,l)}return Ti(e,t,n,r,l)}function Ls(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(Ht,me),me|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(Ht,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,A(Ht,me),me|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,A(Ht,me),me|=r;return ie(e,t,l,n),t.child}function zs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ti(e,t,n,r,l){var i=fe(n)?Tt:le.current;return i=qt(t,i),Xt(t,l),n=go(e,t,n,r,i,l),r=yo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(F&&r&&lo(t),t.flags|=1,ie(e,t,n,l),t.child)}function ju(e,t,n,r,l){if(fe(n)){var i=!0;$r(t)}else i=!1;if(Xt(t,l),t.stateNode===null)Nr(e,t),Ns(t,n,r),Ci(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=fe(n)?Tt:le.current,c=qt(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==c)&&Cu(t,o,r,c),Ze=!1;var p=t.memoizedState;o.state=p,Wr(t,r,o,l),a=t.memoizedState,u!==r||p!==a||de.current||Ze?(typeof h=="function"&&(xi(t,n,h,r),a=t.memoizedState),(u=Ze||xu(t,n,u,r,p,a,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,is(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Pe(t.type,u),o.props=c,m=t.pendingProps,p=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ee(a):(a=fe(n)?Tt:le.current,a=qt(t,a));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||p!==a)&&Cu(t,o,r,a),Ze=!1,p=t.memoizedState,o.state=p,Wr(t,r,o,l);var w=t.memoizedState;u!==m||p!==w||de.current||Ze?(typeof y=="function"&&(xi(t,n,y,r),w=t.memoizedState),(c=Ze||xu(t,n,c,r,p,w,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ni(e,t,n,r,i,l)}function Ni(e,t,n,r,l,i){zs(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&mu(t,n,!1),Ge(e,t,i);r=t.stateNode,of.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=en(t,e.child,null,i),t.child=en(t,null,u,i)):ie(e,t,u,i),t.memoizedState=r.state,l&&mu(t,n,!0),t.child}function Is(e){var t=e.stateNode;t.pendingContext?pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pu(e,t.context,!1),po(e,t.containerInfo)}function Lu(e,t,n,r,l){return bt(),oo(l),t.flags|=256,ie(e,t,n,r),t.child}var _i={dehydrated:null,treeContext:null,retryLane:0};function Pi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ds(e,t,n){var r=t.pendingProps,l=B.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),A(B,l&1),e===null)return wi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=dl(o,r,0,null),e=Et(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Pi(n),t.memoizedState=_i,e):ko(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return uf(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=ct(l,a),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=ct(u,i):(i=Et(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Pi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=_i,r}return i=e.child,e=i.sibling,r=ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ko(e,t){return t=dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mr(e,t,n,r){return r!==null&&oo(r),en(t,e.child,null,n),e=ko(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Ul(Error(g(422))),mr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=dl({mode:"visible",children:r.children},l,0,null),i=Et(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&en(t,e.child,null,o),t.child.memoizedState=Pi(o),t.memoizedState=_i,i);if(!(t.mode&1))return mr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(g(419)),r=Ul(i,r,void 0),mr(e,t,o,r)}if(u=(o&e.childLanes)!==0,ce||u){if(r=Z,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Je(e,l),Ie(r,e,l,-1))}return _o(),r=Ul(Error(g(421))),mr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=wf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,he=ot(l.nextSibling),ve=t,F=!0,Le=null,e!==null&&(we[ke++]=Ue,we[ke++]=Qe,we[ke++]=Nt,Ue=e.id,Qe=e.overflow,Nt=t),t=ko(t,r.children),t.flags|=4096,t)}function zu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ki(e.return,t,n)}function Ql(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function As(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ie(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zu(e,n,t);else if(e.tag===19)zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Jr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ql(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Jr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ql(t,!0,n,null,i);break;case"together":Ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Nr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function af(e,t,n){switch(t.tag){case 3:Is(t),bt();break;case 5:os(t);break;case 1:fe(t.type)&&$r(t);break;case 4:po(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;A(Vr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Ds(e,t,n):(A(B,B.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);A(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return As(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),A(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Ls(e,t,n)}return Ge(e,t,n)}var Ms,ji,Rs,Os;Ms=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ji=function(){};Rs=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,xt(Fe.current);var i=null;switch(n){case"input":l=Zl(e,l),r=Zl(e,r),i=[];break;case"select":l=U({},l,{value:void 0}),r=U({},r,{value:void 0}),i=[];break;case"textarea":l=ei(e,l),r=ei(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fr)}ni(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==u&&(a!=null||u!=null))if(c==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&M("scroll",e),i||u===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Os=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sf(e,t,n){var r=t.pendingProps;switch(io(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return fe(t.type)&&Br(),ne(t),null;case 3:return r=t.stateNode,tn(),R(de),R(le),ho(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Oi(Le),Le=null))),ji(e,t),ne(t),null;case 5:mo(t);var l=xt(Vn.current);if(n=t.type,e!==null&&t.stateNode!=null)Rs(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(g(166));return ne(t),null}if(e=xt(Fe.current),fr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Re]=t,r[Un]=i,e=(t.mode&1)!==0,n){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(l=0;l<kn.length;l++)M(kn[l],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":$o(r,i),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},M("invalid",r);break;case"textarea":Qo(r,i),M("invalid",r)}ni(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,u,e),l=["children",""+u]):zn.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&M("scroll",r)}switch(n){case"input":rr(r),Uo(r,i,!0);break;case"textarea":rr(r),Vo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Fr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=da(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Re]=t,e[Un]=r,Ms(e,t,!1,!1),t.stateNode=e;e:{switch(o=ri(n,r),n){case"dialog":M("cancel",e),M("close",e),l=r;break;case"iframe":case"object":case"embed":M("load",e),l=r;break;case"video":case"audio":for(l=0;l<kn.length;l++)M(kn[l],e);l=r;break;case"source":M("error",e),l=r;break;case"img":case"image":case"link":M("error",e),M("load",e),l=r;break;case"details":M("toggle",e),l=r;break;case"input":$o(e,r),l=Zl(e,r),M("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=U({},r,{value:void 0}),M("invalid",e);break;case"textarea":Qo(e,r),l=ei(e,r),M("invalid",e);break;default:l=r}ni(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var a=u[i];i==="style"?ma(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&fa(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&In(e,a):typeof a=="number"&&In(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&M("scroll",e):a!=null&&Hi(e,i,a,o))}switch(n){case"input":rr(e),Uo(e,r,!1);break;case"textarea":rr(e),Vo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Wt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Wt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Fr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Os(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(g(166));if(n=xt(Vn.current),xt(Fe.current),fr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Re]=t,(i=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Re]=t,t.stateNode=r}return ne(t),null;case 13:if(R(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&he!==null&&t.mode&1&&!(t.flags&128))ts(),bt(),t.flags|=98560,i=!1;else if(i=fr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(g(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(g(317));i[Re]=t}else bt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),i=!1}else Le!==null&&(Oi(Le),Le=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?K===0&&(K=3):_o())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return tn(),ji(e,t),e===null&&Bn(t.stateNode.containerInfo),ne(t),null;case 10:return so(t.type._context),ne(t),null;case 17:return fe(t.type)&&Br(),ne(t),null;case 19:if(R(B),i=t.memoizedState,i===null)return ne(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)vn(i,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Jr(e),o!==null){for(t.flags|=128,vn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(B,B.current&1|2),t.child}e=e.sibling}i.tail!==null&&W()>rn&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Jr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!F)return ne(t),null}else 2*W()-i.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=W(),t.sibling=null,n=B.current,A(B,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return No(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function cf(e,t){switch(io(t),t.tag){case 1:return fe(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),R(de),R(le),ho(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mo(t),null;case 13:if(R(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));bt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(B),null;case 4:return tn(),null;case 10:return so(t.type._context),null;case 22:case 23:return No(),null;case 24:return null;default:return null}}var hr=!1,re=!1,df=typeof WeakSet=="function"?WeakSet:Set,x=null;function Vt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Li(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Iu=!1;function ff(e,t){if(pi=Mr,e=Qa(),ro(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,a=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var y;m!==n||l!==0&&m.nodeType!==3||(u=o+l),m!==i||r!==0&&m.nodeType!==3||(a=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===e)break t;if(p===n&&++c===l&&(u=o),p===i&&++h===r&&(a=o),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(mi={focusedElem:e,selectionRange:n},Mr=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,O=w.memoizedState,d=t.stateNode,s=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:Pe(t.type,k),O);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(v){Q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return w=Iu,Iu=!1,w}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Li(t,n,i)}l=l.next}while(l!==r)}}function sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fs(e){var t=e.alternate;t!==null&&(e.alternate=null,Fs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Re],delete t[Un],delete t[gi],delete t[Gd],delete t[Kd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bs(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fr));else if(r!==4&&(e=e.child,e!==null))for(Ii(e,t,n),e=e.sibling;e!==null;)Ii(e,t,n),e=e.sibling}function Di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}var q=null,je=!1;function Xe(e,t,n){for(n=n.child;n!==null;)$s(e,t,n),n=n.sibling}function $s(e,t,n){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:re||Vt(n,t);case 6:var r=q,l=je;q=null,Xe(e,t,n),q=r,je=l,q!==null&&(je?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(je?(e=q,n=n.stateNode,e.nodeType===8?Ml(e.parentNode,n):e.nodeType===1&&Ml(e,n),Rn(e)):Ml(q,n.stateNode));break;case 4:r=q,l=je,q=n.stateNode.containerInfo,je=!0,Xe(e,t,n),q=r,je=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Li(n,t,o),l=l.next}while(l!==r)}Xe(e,t,n);break;case 1:if(!re&&(Vt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Q(n,t,u)}Xe(e,t,n);break;case 21:Xe(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Xe(e,t,n),re=r):Xe(e,t,n);break;default:Xe(e,t,n)}}function Au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new df),t.forEach(function(r){var l=kf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function _e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:q=u.stateNode,je=!1;break e;case 3:q=u.stateNode.containerInfo,je=!0;break e;case 4:q=u.stateNode.containerInfo,je=!0;break e}u=u.return}if(q===null)throw Error(g(160));$s(i,o,l),q=null,je=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){Q(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Us(t,e),t=t.sibling}function Us(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(t,e),Ae(e),r&4){try{Pn(3,e,e.return),sl(3,e)}catch(k){Q(e,e.return,k)}try{Pn(5,e,e.return)}catch(k){Q(e,e.return,k)}}break;case 1:_e(t,e),Ae(e),r&512&&n!==null&&Vt(n,n.return);break;case 5:if(_e(t,e),Ae(e),r&512&&n!==null&&Vt(n,n.return),e.flags&32){var l=e.stateNode;try{In(l,"")}catch(k){Q(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&sa(l,i),ri(u,o);var c=ri(u,i);for(o=0;o<a.length;o+=2){var h=a[o],m=a[o+1];h==="style"?ma(l,m):h==="dangerouslySetInnerHTML"?fa(l,m):h==="children"?In(l,m):Hi(l,h,m,c)}switch(u){case"input":ql(l,i);break;case"textarea":ca(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Wt(l,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?Wt(l,!!i.multiple,i.defaultValue,!0):Wt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Un]=i}catch(k){Q(e,e.return,k)}}break;case 6:if(_e(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(g(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){Q(e,e.return,k)}}break;case 3:if(_e(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rn(t.containerInfo)}catch(k){Q(e,e.return,k)}break;case 4:_e(t,e),Ae(e);break;case 13:_e(t,e),Ae(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Eo=W())),r&4&&Au(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||h,_e(t,e),re=c):_e(t,e),Ae(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(x=e,h=e.child;h!==null;){for(m=x=h;x!==null;){switch(p=x,y=p.child,p.tag){case 0:case 11:case 14:case 15:Pn(4,p,p.return);break;case 1:Vt(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){Q(r,n,k)}}break;case 5:Vt(p,p.return);break;case 22:if(p.memoizedState!==null){Ru(m);continue}}y!==null?(y.return=p,x=y):Ru(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=pa("display",o))}catch(k){Q(e,e.return,k)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){Q(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:_e(t,e),Ae(e),r&4&&Au(e);break;case 21:break;default:_e(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bs(n)){var r=n;break e}n=n.return}throw Error(g(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(In(l,""),r.flags&=-33);var i=Du(e);Di(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Du(e);Ii(e,u,o);break;default:throw Error(g(161))}}catch(a){Q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pf(e,t,n){x=e,Qs(e)}function Qs(e,t,n){for(var r=(e.mode&1)!==0;x!==null;){var l=x,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||hr;if(!o){var u=l.alternate,a=u!==null&&u.memoizedState!==null||re;u=hr;var c=re;if(hr=o,(re=a)&&!c)for(x=l;x!==null;)o=x,a=o.child,o.tag===22&&o.memoizedState!==null?Ou(l):a!==null?(a.return=o,x=a):Ou(l);for(;i!==null;)x=i,Qs(i),i=i.sibling;x=l,hr=u,re=c}Mu(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,x=i):Mu(e)}}function Mu(e){for(;x!==null;){var t=x;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Su(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Su(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Rn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}re||t.flags&512&&zi(t)}catch(p){Q(t,t.return,p)}}if(t===e){x=null;break}if(n=t.sibling,n!==null){n.return=t.return,x=n;break}x=t.return}}function Ru(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var n=t.sibling;if(n!==null){n.return=t.return,x=n;break}x=t.return}}function Ou(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{sl(4,t)}catch(a){Q(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){Q(t,l,a)}}var i=t.return;try{zi(t)}catch(a){Q(t,i,a)}break;case 5:var o=t.return;try{zi(t)}catch(a){Q(t,o,a)}}}catch(a){Q(t,t.return,a)}if(t===e){x=null;break}var u=t.sibling;if(u!==null){u.return=t.return,x=u;break}x=t.return}}var mf=Math.ceil,Xr=Ke.ReactCurrentDispatcher,xo=Ke.ReactCurrentOwner,Ce=Ke.ReactCurrentBatchConfig,I=0,Z=null,J=null,b=0,me=0,Ht=mt(0),K=0,Gn=null,Pt=0,cl=0,Co=0,jn=null,se=null,Eo=0,rn=1/0,Be=null,Yr=!1,Ai=null,at=null,vr=!1,nt=null,Zr=0,Ln=0,Mi=null,_r=-1,Pr=0;function oe(){return I&6?W():_r!==-1?_r:_r=W()}function st(e){return e.mode&1?I&2&&b!==0?b&-b:Yd.transition!==null?(Pr===0&&(Pr=Na()),Pr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Da(e.type)),e):1}function Ie(e,t,n,r){if(50<Ln)throw Ln=0,Mi=null,Error(g(185));Xn(e,n,r),(!(I&2)||e!==Z)&&(e===Z&&(!(I&2)&&(cl|=n),K===4&&et(e,b)),pe(e,r),n===1&&I===0&&!(t.mode&1)&&(rn=W()+500,ol&&ht()))}function pe(e,t){var n=e.callbackNode;Yc(e,t);var r=Ar(e,e===Z?b:0);if(r===0)n!==null&&Jo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Jo(n),t===1)e.tag===0?Xd(Fu.bind(null,e)):qa(Fu.bind(null,e)),Wd(function(){!(I&6)&&ht()}),n=null;else{switch(_a(r)){case 1:n=Xi;break;case 4:n=Ea;break;case 16:n=Dr;break;case 536870912:n=Ta;break;default:n=Dr}n=Ys(n,Vs.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vs(e,t){if(_r=-1,Pr=0,I&6)throw Error(g(327));var n=e.callbackNode;if(Yt()&&e.callbackNode!==n)return null;var r=Ar(e,e===Z?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qr(e,r);else{t=r;var l=I;I|=2;var i=Ws();(Z!==e||b!==t)&&(Be=null,rn=W()+500,Ct(e,t));do try{gf();break}catch(u){Hs(e,u)}while(!0);ao(),Xr.current=i,I=l,J!==null?t=0:(Z=null,b=0,t=K)}if(t!==0){if(t===2&&(l=ai(e),l!==0&&(r=l,t=Ri(e,l))),t===1)throw n=Gn,Ct(e,0),et(e,r),pe(e,W()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!hf(l)&&(t=qr(e,r),t===2&&(i=ai(e),i!==0&&(r=i,t=Ri(e,i))),t===1))throw n=Gn,Ct(e,0),et(e,r),pe(e,W()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(g(345));case 2:St(e,se,Be);break;case 3:if(et(e,r),(r&130023424)===r&&(t=Eo+500-W(),10<t)){if(Ar(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vi(St.bind(null,e,se,Be),t);break}St(e,se,Be);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-ze(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mf(r/1960))-r,10<r){e.timeoutHandle=vi(St.bind(null,e,se,Be),r);break}St(e,se,Be);break;case 5:St(e,se,Be);break;default:throw Error(g(329))}}}return pe(e,W()),e.callbackNode===n?Vs.bind(null,e):null}function Ri(e,t){var n=jn;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=qr(e,t),e!==2&&(t=se,se=n,t!==null&&Oi(t)),e}function Oi(e){se===null?se=e:se.push.apply(se,e)}function hf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!De(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Co,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function Fu(e){if(I&6)throw Error(g(327));Yt();var t=Ar(e,0);if(!(t&1))return pe(e,W()),null;var n=qr(e,t);if(e.tag!==0&&n===2){var r=ai(e);r!==0&&(t=r,n=Ri(e,r))}if(n===1)throw n=Gn,Ct(e,0),et(e,t),pe(e,W()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,se,Be),pe(e,W()),null}function To(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(rn=W()+500,ol&&ht())}}function jt(e){nt!==null&&nt.tag===0&&!(I&6)&&Yt();var t=I;I|=1;var n=Ce.transition,r=D;try{if(Ce.transition=null,D=1,e)return e()}finally{D=r,Ce.transition=n,I=t,!(I&6)&&ht()}}function No(){me=Ht.current,R(Ht)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hd(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(io(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:tn(),R(de),R(le),ho();break;case 5:mo(r);break;case 4:tn();break;case 13:R(B);break;case 19:R(B);break;case 10:so(r.type._context);break;case 22:case 23:No()}n=n.return}if(Z=e,J=e=ct(e.current,null),b=me=t,K=0,Gn=null,Co=cl=Pt=0,se=jn=null,kt!==null){for(t=0;t<kt.length;t++)if(n=kt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}kt=null}return e}function Hs(e,t){do{var n=J;try{if(ao(),Er.current=Kr,Gr){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(_t=0,Y=G=$=null,_n=!1,Hn=0,xo.current=null,n===null||n.return===null){K=1,Gn=t,J=null;break}e:{var i=e,o=n.return,u=n,a=t;if(t=b,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=u,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Tu(o);if(y!==null){y.flags&=-257,Nu(y,o,u,i,t),y.mode&1&&Eu(i,c,t),t=y,a=c;var w=t.updateQueue;if(w===null){var k=new Set;k.add(a),t.updateQueue=k}else w.add(a);break e}else{if(!(t&1)){Eu(i,c,t),_o();break e}a=Error(g(426))}}else if(F&&u.mode&1){var O=Tu(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Nu(O,o,u,i,t),oo(nn(a,u));break e}}i=a=nn(a,u),K!==4&&(K=2),jn===null?jn=[i]:jn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=_s(i,a,t);yu(i,d);break e;case 1:u=a;var s=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(at===null||!at.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Ps(i,u,t);yu(i,v);break e}}i=i.return}while(i!==null)}Gs(n)}catch(C){t=C,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function Ws(){var e=Xr.current;return Xr.current=Kr,e===null?Kr:e}function _o(){(K===0||K===3||K===2)&&(K=4),Z===null||!(Pt&268435455)&&!(cl&268435455)||et(Z,b)}function qr(e,t){var n=I;I|=2;var r=Ws();(Z!==e||b!==t)&&(Be=null,Ct(e,t));do try{vf();break}catch(l){Hs(e,l)}while(!0);if(ao(),I=n,Xr.current=r,J!==null)throw Error(g(261));return Z=null,b=0,K}function vf(){for(;J!==null;)Js(J)}function gf(){for(;J!==null&&!Uc();)Js(J)}function Js(e){var t=Xs(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Gs(e):J=t,xo.current=null}function Gs(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cf(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,J=null;return}}else if(n=sf(n,t,me),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);K===0&&(K=5)}function St(e,t,n){var r=D,l=Ce.transition;try{Ce.transition=null,D=1,yf(e,t,n,r)}finally{Ce.transition=l,D=r}return null}function yf(e,t,n,r){do Yt();while(nt!==null);if(I&6)throw Error(g(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Zc(e,i),e===Z&&(J=Z=null,b=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,Ys(Dr,function(){return Yt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var o=D;D=1;var u=I;I|=4,xo.current=null,ff(e,n),Us(n,e),Od(mi),Mr=!!pi,mi=pi=null,e.current=n,pf(n),Qc(),I=u,D=o,Ce.transition=i}else e.current=n;if(vr&&(vr=!1,nt=e,Zr=l),i=e.pendingLanes,i===0&&(at=null),Wc(n.stateNode),pe(e,W()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Yr)throw Yr=!1,e=Ai,Ai=null,e;return Zr&1&&e.tag!==0&&Yt(),i=e.pendingLanes,i&1?e===Mi?Ln++:(Ln=0,Mi=e):Ln=0,ht(),null}function Yt(){if(nt!==null){var e=_a(Zr),t=Ce.transition,n=D;try{if(Ce.transition=null,D=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Zr=0,I&6)throw Error(g(331));var l=I;for(I|=4,x=e.current;x!==null;){var i=x,o=i.child;if(x.flags&16){var u=i.deletions;if(u!==null){for(var a=0;a<u.length;a++){var c=u[a];for(x=c;x!==null;){var h=x;switch(h.tag){case 0:case 11:case 15:Pn(8,h,i)}var m=h.child;if(m!==null)m.return=h,x=m;else for(;x!==null;){h=x;var p=h.sibling,y=h.return;if(Fs(h),h===c){x=null;break}if(p!==null){p.return=y,x=p;break}x=y}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var O=k.sibling;k.sibling=null,k=O}while(k!==null)}}x=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,x=o;else e:for(;x!==null;){if(i=x,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,x=d;break e}x=i.return}}var s=e.current;for(x=s;x!==null;){o=x;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,x=f;else e:for(o=s;x!==null;){if(u=x,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:sl(9,u)}}catch(C){Q(u,u.return,C)}if(u===o){x=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,x=v;break e}x=u.return}}if(I=l,ht(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(tl,e)}catch{}r=!0}return r}finally{D=n,Ce.transition=t}}return!1}function Bu(e,t,n){t=nn(n,t),t=_s(e,t,1),e=ut(e,t,1),t=oe(),e!==null&&(Xn(e,1,t),pe(e,t))}function Q(e,t,n){if(e.tag===3)Bu(e,e,n);else for(;t!==null;){if(t.tag===3){Bu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(at===null||!at.has(r))){e=nn(n,e),e=Ps(t,e,1),t=ut(t,e,1),e=oe(),t!==null&&(Xn(t,1,e),pe(t,e));break}}t=t.return}}function Sf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(b&n)===n&&(K===4||K===3&&(b&130023424)===b&&500>W()-Eo?Ct(e,0):Co|=n),pe(e,t)}function Ks(e,t){t===0&&(e.mode&1?(t=or,or<<=1,!(or&130023424)&&(or=4194304)):t=1);var n=oe();e=Je(e,t),e!==null&&(Xn(e,t,n),pe(e,n))}function wf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ks(e,n)}function kf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(t),Ks(e,n)}var Xs;Xs=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,af(e,t,n);ce=!!(e.flags&131072)}else ce=!1,F&&t.flags&1048576&&ba(t,Qr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Nr(e,t),e=t.pendingProps;var l=qt(t,le.current);Xt(t,n),l=go(null,t,r,e,l,n);var i=yo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(i=!0,$r(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,fo(t),l.updater=al,t.stateNode=l,l._reactInternals=t,Ci(t,r,e,n),t=Ni(null,t,r,!0,i,n)):(t.tag=0,F&&i&&lo(t),ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Nr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Cf(r),e=Pe(r,e),l){case 0:t=Ti(null,t,r,e,n);break e;case 1:t=ju(null,t,r,e,n);break e;case 11:t=_u(null,t,r,e,n);break e;case 14:t=Pu(null,t,r,Pe(r.type,e),n);break e}throw Error(g(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Ti(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),ju(e,t,r,l,n);case 3:e:{if(Is(t),e===null)throw Error(g(387));r=t.pendingProps,i=t.memoizedState,l=i.element,is(e,t),Wr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=nn(Error(g(423)),t),t=Lu(e,t,r,n,l);break e}else if(r!==l){l=nn(Error(g(424)),t),t=Lu(e,t,r,n,l);break e}else for(he=ot(t.stateNode.containerInfo.firstChild),ve=t,F=!0,Le=null,n=rs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bt(),r===l){t=Ge(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return os(t),e===null&&wi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,hi(r,l)?o=null:i!==null&&hi(r,i)&&(t.flags|=32),zs(e,t),ie(e,t,o,n),t.child;case 6:return e===null&&wi(t),null;case 13:return Ds(e,t,n);case 4:return po(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),_u(e,t,r,l,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,A(Vr,r._currentValue),r._currentValue=o,i!==null)if(De(i.value,o)){if(i.children===l.children&&!de.current){t=Ge(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ve(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ki(i.return,n,t),u.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(g(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ki(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Xt(t,n),l=Ee(l),r=r(l),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,l=Pe(r,t.pendingProps),l=Pe(r.type,l),Pu(e,t,r,l,n);case 15:return js(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Nr(e,t),t.tag=1,fe(r)?(e=!0,$r(t)):e=!1,Xt(t,n),Ns(t,r,l),Ci(t,r,l,n),Ni(null,t,r,!0,e,n);case 19:return As(e,t,n);case 22:return Ls(e,t,n)}throw Error(g(156,t.tag))};function Ys(e,t){return Ca(e,t)}function xf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,t,n,r){return new xf(e,t,n,r)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cf(e){if(typeof e=="function")return Po(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ji)return 11;if(e===Gi)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Po(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case At:return Et(n.children,l,i,t);case Wi:o=8,l|=8;break;case Gl:return e=xe(12,n,t,l|2),e.elementType=Gl,e.lanes=i,e;case Kl:return e=xe(13,n,t,l),e.elementType=Kl,e.lanes=i,e;case Xl:return e=xe(19,n,t,l),e.elementType=Xl,e.lanes=i,e;case oa:return dl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case la:o=10;break e;case ia:o=9;break e;case Ji:o=11;break e;case Gi:o=14;break e;case Ye:o=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=xe(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Et(e,t,n,r){return e=xe(7,e,r,t),e.lanes=n,e}function dl(e,t,n,r){return e=xe(22,e,r,t),e.elementType=oa,e.lanes=n,e.stateNode={isHidden:!1},e}function Vl(e,t,n){return e=xe(6,e,null,t),e.lanes=n,e}function Hl(e,t,n){return t=xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ef(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function jo(e,t,n,r,l,i,o,u,a){return e=new Ef(e,t,n,u,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=xe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fo(i),e}function Tf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zs(e){if(!e)return ft;e=e._reactInternals;e:{if(zt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(fe(n))return Za(e,n,t)}return t}function qs(e,t,n,r,l,i,o,u,a){return e=jo(n,r,!0,e,l,i,o,u,a),e.context=Zs(null),n=e.current,r=oe(),l=st(n),i=Ve(r,l),i.callback=t??null,ut(n,i,l),e.current.lanes=l,Xn(e,l,r),pe(e,r),e}function fl(e,t,n,r){var l=t.current,i=oe(),o=st(l);return n=Zs(n),t.context===null?t.context=n:t.pendingContext=n,t=Ve(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(l,t,o),e!==null&&(Ie(e,l,o,i),Cr(e,l,o)),o}function br(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lo(e,t){$u(e,t),(e=e.alternate)&&$u(e,t)}function Nf(){return null}var bs=typeof reportError=="function"?reportError:function(e){console.error(e)};function zo(e){this._internalRoot=e}pl.prototype.render=zo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));fl(e,t,null,null)};pl.prototype.unmount=zo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jt(function(){fl(null,e,null,null)}),t[We]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=La();e={blockedOn:null,target:e,priority:t};for(var n=0;n<be.length&&t!==0&&t<be[n].priority;n++);be.splice(n,0,e),n===0&&Ia(e)}};function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uu(){}function _f(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=br(o);i.call(c)}}var o=qs(t,r,e,0,null,!1,!1,"",Uu);return e._reactRootContainer=o,e[We]=o.current,Bn(e.nodeType===8?e.parentNode:e),jt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=br(a);u.call(c)}}var a=jo(e,0,!1,null,null,!1,!1,"",Uu);return e._reactRootContainer=a,e[We]=a.current,Bn(e.nodeType===8?e.parentNode:e),jt(function(){fl(t,a,n,r)}),a}function hl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var a=br(o);u.call(a)}}fl(t,o,e,l)}else o=_f(n,t,e,l,r);return br(o)}Pa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(Yi(t,n|1),pe(t,W()),!(I&6)&&(rn=W()+500,ht()))}break;case 13:jt(function(){var r=Je(e,1);if(r!==null){var l=oe();Ie(r,e,1,l)}}),Lo(e,1)}};Zi=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=oe();Ie(t,e,134217728,n)}Lo(e,134217728)}};ja=function(e){if(e.tag===13){var t=st(e),n=Je(e,t);if(n!==null){var r=oe();Ie(n,e,t,r)}Lo(e,t)}};La=function(){return D};za=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};ii=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=il(r);if(!l)throw Error(g(90));aa(r),ql(r,l)}}}break;case"textarea":ca(e,n);break;case"select":t=n.value,t!=null&&Wt(e,!!n.multiple,t,!1)}};ga=To;ya=jt;var Pf={usingClientEntryPoint:!1,Events:[Zn,Ft,il,ha,va,To]},gn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jf={bundleType:gn.bundleType,version:gn.version,rendererPackageName:gn.rendererPackageName,rendererConfig:gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ka(e),e===null?null:e.stateNode},findFiberByHostInstance:gn.findFiberByHostInstance||Nf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{tl=gr.inject(jf),Oe=gr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pf;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Io(t))throw Error(g(200));return Tf(e,t,null,n)};ye.createRoot=function(e,t){if(!Io(e))throw Error(g(299));var n=!1,r="",l=bs;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=jo(e,1,!1,null,null,n,!1,r,l),e[We]=t.current,Bn(e.nodeType===8?e.parentNode:e),new zo(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=ka(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return jt(e)};ye.hydrate=function(e,t,n){if(!ml(t))throw Error(g(200));return hl(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!Io(e))throw Error(g(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=bs;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=qs(t,null,e,1,n??null,l,!1,i,o),e[We]=t.current,Bn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new pl(t)};ye.render=function(e,t,n){if(!ml(t))throw Error(g(200));return hl(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!ml(e))throw Error(g(40));return e._reactRootContainer?(jt(function(){hl(null,null,e,!1,function(){e._reactRootContainer=null,e[We]=null})}),!0):!1};ye.unstable_batchedUpdates=To;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ml(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return hl(e,t,n,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),ea.exports=ye;var Lf=ea.exports,Qu=Lf;Wl.createRoot=Qu.createRoot,Wl.hydrateRoot=Qu.hydrateRoot;const zf="/main_info_razrabotka_react/assets/delete_button-Bj6OTiOQ.png",If=`
1. Понятие шаблона проектирования, составляющие шаблона. Приведите примеры употребления шаблонов в неверных контекстах
Шаблон проектирования или паттерн (design pattern) в разработке ПО — повторимая архитектурная конструкция, представляющая собой решение проблемы проектирования в рамках некоторого часто возникающего контекста.
Шаблон – не законченный образец, не код; это пример решения задачи, который можно использовать в различных ситуациях.
Примеры неверного употребления:
● злоупотребление Singleton. Глобальные переменные не всегда хорошо
● усложнение программы за счет паттернов
● применение паттерна без оснований(Золотой молоток)
● Костыли для слабого языка программирования
Нужда в паттернах появляется тогда, когда люди выбирают для своего проекта язык программирования с недостаточным уровнем абстракции. В этом случае, паттерны — это костыль, который придаёт этому языку суперспособности.
Например, паттерн Стратегия в современных языках можно реализовать простой анонимной (лямбда) функцией.
Ещё паттерны могут показаться похожими на алгоритмы. Но у них есть разница. Алгоритм состоит из конкретных шагов, описывающих необходимые действия. Паттерны же лишь описывают подход, но не описывают шаги реализации.
2. Классификация паттернов проектирования, приведите
несколько примеров паттернов каждого класса
Паттерны бывают разные, т.к. решают разные проблемы. Обычно выделяют следующие категории:

 - Порождающие
Эти паттерны решают проблемы обеспечения гибкости создания объектов
- Структурные
Эти паттерны решают проблемы эффективного построения связей между объектами
- Поведенческие
Эти паттерны решают проблемы эффективного взаимодействия между объектами
-
- Порождающие (Creational) - Абстрактная фабрика, строитель, фабричный метод
Беспокоятся о гибком создании объектов без внесения в программу лишних зависимостей.
- Структурные (Structural) - Адаптер, мост, декоратор, фасад Показывают различные способы построения связей между объектами.
- Поведенческие (Behavioral) - Цепочка обязанностей, команда, итератор Заботятся об эффективной коммуникации между объектами
3. Функциональные интерфейсы. Понятие функционального интерфейса и использование в программах на языке Джава
В Java функциями являются объекты, реализующие функциональные интерфейсы – интерфейсы с только одним абстрактным методом.
Список стандартных функциональных интерфейсов: вопрос 13.

   4. Определение и использование функциональных интерфейсов. Аннотирование функциональных интерфейсов
Функциональные интерфейсы — это мощный механизм, предоставляемый Java 8, который дает нам возможность передавать функции в качестве параметров другим методам.
Аннотация @FunctionalInterface необязательная. Компилятор проверяет для интерфейсов, помеченных этой аннотацией, что в нем только один абстрактный метод.
Аннотация @FunctionalInterface используется, чтобы разработчики модуля A случайно не сломали зависящие от него модули. В случае ее наличия ошибки компиляции будут в модуле A.

   5. Понятие и использование лямбда-выражений в языке Джава. Примеры
Лямбда-выражение или просто лямбда в Java — упрощённая запись анонимного класса, реализующего функциональный интерфейс.
Функциональный интерфейс в Java — интерфейс, в котором объявлен только один абстрактный метод. Однако, методов по умолчанию (default) такой интерфейс может содержать сколько угодно, что можно видеть на примере java.util.function.Function. Функциональный интерфейс может быть отмечен аннотацией @FunctionalInterface, но это не обязательное условие, так как JVM считает функциональным любой интерфейс с одним абстрактным методом.

 Lambda-выражения в Java обычно имеют следующий синтаксис (аргументы) -> (тело). Например:
(арг1, арг2...) -> { тело }
(тип1 арг1, тип2 арг2...) -> { тело }
Далее идет несколько примеров настоящих Lambda-выражений:
(int a, int b) -> {  return a + b; }
() -> System.out.println("Hello World");
(String s) -> { System.out.println(s); }
() -> 42
() -> { return 3.1415 };
Примеры Lambda-выражений
Поток Thread можно проинициализировать двумя способами: // Старый способ:
new Thread(new Runnable() {
@Override
        public void run() {
            System.out.println("Hello from thread");
}

     }).start();
    // Новый способ:
    new Thread(
        () -> System.out.println("Hello from thread")
).start();
Управление событиями в Java 8 также можно осуществлять через Lambda-выражения. Далее представлены два способа добавления обработчика события ActionListener в компонент пользовательского интерфейса:
    // Старый способ:
    button.addActionListener(new ActionListener() {
        @Override
public void actionPerformed(ActionEvent e) { System.out.println("Кнопка нажата. Старый
способ!");}});
    // Новый способ:
    button.addActionListener( (e) -> {
            System.out.println("Кнопка нажата. Lambda!");

 });
Простой пример вывода всех элементов заданного массива. Заметьте, что есть более одного способа использования lambda-выражения. Ниже мы создаем lambda-выражение обычным способом, используя синтаксис стрелки, а также мы используем оператор двойного двоеточия (::), который в Java 8 конвертирует обычный метод в lambda-выражение:
    // Старый способ:
List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7);
    for(Integer n: list) { System.out.println(n);}
    // Новый способ:
List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7);
    list.forEach(n -> System.out.println(n));
● Лямбда-выражение является блоком кода с параметрами.
● Используйте лямбда-выражение, когда хотите выполнить блок кода в более
поздний момент времени.
● Лямбда-выражения могут быть преобразованы в функциональные
интерфейсы.
● Лямбда-выражения имеют доступ к final переменным из охватывающей
области видимости.

 import java.util.concurrent.atomic.AtomicInteger;
/**
* Output is: *1
* -7
*2
*0
*3
* -1
*/
public class Main { static int d = 10;
public static void main(String... $) { // static method reference a(Main::a);
{ // lambdas accessing different variables int a = 1;
AtomicInteger b = new AtomicInteger(2); b.set(-2);
d = 11; // effectively final variable
a(c -> (int) c + a - b.get() - d);
            // compiler will throw an error 'cause 'a'
            // is local and it's being modified by a lambda
            // a(c -> { a = 2; return a; });
            // but this will work just fine 'cause 'd' is e.f.
a(c -> { d = 2; return d; });
// and this too as the variable itself isn't // being modified by a lambda
a(c -> { b.set(0); return b.get(); });
}
        // object method reference
class B implements A {
@Override public int a(long a)
{ return (int) a * 3; } }
a(new B()::a);
        // anonymous class
a(new A() {
@Override public int a(long b)
{ return (int) -b; } });
}
static void a(A a)
    { System.out.println(a.a(1)); }
static int a(long a) { return (int) a; }
@FunctionalInterface interface A { int a(long a);

 @Override boolean equals(Object a); }
}
6. Паттерн “Стратегия. Пример использования функций м для параметризации поведения объектов
Шаблон «Стратегия» относится к группе поведенческих шаблонов.
Краткое определение шаблона «Стратегия»
Шаблон служит для переключения между семейством алгоритмов, когда объект меняет свое поведение, на основании изменения своего внутреннего состояния.
Картинка с Рефакторинг гуру для большего понимания?
Практические примеры применения шаблона «Стратегия»
● Сортировка (sorting): мы хотим отсортировать эти числа, но мы не знаем, будем ли мы использовать BrickSort, BubbleSort или какую-либо другую сортировку. Например, у вас есть веб-сайт, на котором страница отображает элементы в зависимости от популярности. Однако «Популярным» может быть много вещей (большинство просмотров, большинство подписчиков, дата создания, большая активность, наименьшее количество комментариев). В случае, если руководство еще не знает точно, как сделать заказ, и может захотеть поэкспериментировать с различными заказами на более поздний срок, вы создаете интерфейс (IOrderAlgorithm или что-то еще) с методом

 заказа и позволяете объекту Orderer делегировать порядок конкретной реализации интерфейса IOrderAlgorithm. Вы можете создать «CommentOrderer», «ActivityOrderer» и т. д. и просто отключить их при появлении новых требований.
● Игры (games): стратегии перемещения в пространстве игры — игрок ходит, либо бегает, но, возможно, в будущем он также сможет плавать, летать, телепортироваться, рыть под землей и др. Другой пример, когда в игре, например с различными персонажами, где каждый персонаж может иметь разные виды оружия, но в конкретный момент времени может использовать только одно из них. Так что контекстом здесь является персонаж «Король», «Командир», «Солдат» и оружие как стратегия где метод атаковать Attack() зависит от вида оружия. Так что, если конкретные классы оружия могут быть «Меч», «Топор», «Арбалет», «Лук и Стрелы» они все должны иметь метод Attack ().
● Хранение информации (storing information): стратегия сохранения информации: допустим, приложение имеет задачу сохранять информацию в базу данных. Но в дальнейшем может пригодиться возможность сохранения информации в файл или облачное хранилище. Именно из-за различия алгоритмов сохранения данных здесь применим паттерн Стратегия. Здесь контекстом будет объект, который сохраняет данные, а стратегией будет алгоритм сохранения информации.
В итоге: Паттерн «Стратегия» определяет семейство алгоритмов, инкапсулирует каждый из них и обеспечивает их взаимозаменяемость. Он позволяет модифицировать алгоритмы независимо от их использования на стороне клиента.
Пример:

 // Класс реализующий конкретную стратегию, должен реализовывать этот интерфейс
// Класс контекста использует этот интерфейс для вызова конкретной стратегии
interface Strategy {
    int execute(int a, int b);
}
// Реализуем алгоритм с использованием интерфейса стратегии
class ConcreteStrategyAdd implements Strategy {
public int execute(int a, int b) { System.out.println("Called ConcreteStrategyAdd's
execute()");
        return a + b;  // Do an addition with a and b
} }
class ConcreteStrategySubtract implements Strategy {
public int execute(int a, int b) { System.out.println("Called ConcreteStrategySubtract's
execute()");
        return a - b;  // Do a subtraction with a and b
} }
class ConcreteStrategyMultiply implements Strategy {
public int execute(int a, int b) { System.out.println("Called ConcreteStrategyMultiply's
execute()");
        return a * b;   // Do a multiplication with a and b
} }

 // Класс контекста использующий интерфейс стратегии
class Context {
    private Strategy strategy;
    // Constructor
    public Context() {
    }
    // Set new strategy
    public void setStrategy(Strategy strategy) {
        this.strategy = strategy;
    }
    public int executeStrategy(int a, int b) {
        return strategy.execute(a, b);
} }
// Тестовое приложение
class StrategyExample {
    public static void main(String[] args) {
        Context context = new Context();
        context.setStrategy(new ConcreteStrategyAdd());
        int resultA = context.executeStrategy(3,4);
        context.setStrategy(new ConcreteStrategySubtract());
        int resultB = context.executeStrategy(3,4);
        context.setStrategy(new ConcreteStrategyMultiply());
        int resultC = context.executeStrategy(3,4);
        System.out.println("Result A : " + resultA );
        System.out.println("Result B : " + resultB );

         System.out.println("Result C : " + resultC );
    }
}
7. Понятие чистой функции. Побочные эффекты функций. Чистота функций в ООП. Пример
Чистая (pure) функция – функция без побочных эффектов, результат
которой зависит только от значений ее параметров.
В императивных языках некоторые функции в процессе выполнения своих вычислений могут модифицировать значения глобальных переменных, осуществлять операции ввода-вывода, реагировать на исключительные ситуации, вызывая их обработчики. Такие функции называются функциями с побочными эффектами. Другим видом побочных эффектов является модификация переданных в функцию параметров (переменных), когда в процессе вычисления выходного значения функции изменяется и значение входного параметра.
Описывать функции без побочных эффектов позволяет практически любой язык программирования. Однако некоторые языки поощряют или даже требуют от некоторых видов функций использования побочных эффектов. Например, во многих объектно-ориентированных языках в функцию-член класса передаётся скрытый параметр — указатель на экземпляр класса, от имени которого вызывается соответствующая функция (например, в C++ этот параметр называется this, а в Object Pascal — self), который эта функция неявно модифицирует. Тем не менее, в языке C++ можно указать для метода класса модификатор const, тем самым сообщив компилятору о том, что метод не модифицирует данные класса.
Свойства чистой функции?

   8. Неизменяемый класс. Преимущества использования неизменяемых классов. Пример
В ООП чистота функций (методов) достигается с помощью использования неизменяемых (immutable) классов. Все методы неизменяемого класса являются чистыми. После создания объекта неизменяемого класса его состояние больше не меняется. При операциях с такими объектами создаются новые объекты, а не меняются существующие. Для того, чтобы гарантировать неизменяемость свойств объекта, следует использовать модификатор final для полей. Также неизменяемый класс как правило закрыт для наследования, т.к. иначе класс-наследник может добавить изменяемые поля.

 Для того чтобы сделать класс неизменяемым, необходимо выполнить следующие условия:
1. Не предоставляйте сеттеры или методы, которые изменяют поля или объекты, ссылающиеся на поля. Сеттеры подразумевают изменение состояния объекта а это то, чего мы хотим тут избежать.
2. Сделайте все поля final и private. Поля, обозначенные private, будут недоступными снаружи класса, а обозначение их final гарантирует, что вы не измените их даже случайно.
3. Не разрешайте субклассам переопределять методы. Самый простой способ это сделать – объявить класс как final. Финализированные классы в Java не могут быть переопределены.
4. Всегда помните, что ваши экземпляры переменных могут быть либо изменяемыми, либо неизменяемыми. Определите их и возвращайте новые объекты со скопированным содержимым для всех изменяемых объектов (ссылочные типы). Неизменяемые переменные (примитивные типы) могут быть безопасно возвращены без дополнительных усилий.
9. Использование неизменяемых полей класса. Преимущества неизменяемых объектов
Плюсы неизменяемых объектов:
 
 1. Проще понять работу класса
1. Отсутствует “действие на расстоянии”
2. Результат работы программы не зависит от истории 3. Проще проверять инварианты класса
2. Проще тестировать класс
3. Проще использовать в многопоточной среде 4. Можно использовать в качестве ключей Map
 Поскольку внутреннее состояние неизменяемого объекта остается постоянным во времени, мы можем безопасно разделить его между несколькими потоками .
Мы также можем свободно использовать его, и ни один из объектов, ссылающихся на него, не заметит никакой разницы, мы можем сказать, что неизменяемые объекты не имеют побочных эффектов .
10. Функциональное программирование. Понятие инварианта класса. Примеры
Стиль программирования, основные черты:
1. Предпочтение чистых функций (отсутствие побочных эффектов) 2. Функции как объекты первого класса (first-class citizen):
1. Могут храниться в переменных
2. Могут передаваться как параметры 3. Могут возвращаться как результат
Функциона́льное программи́рование — парадигма программирования, в которой процесс вычисления трактуется как вычисление значений функций в математическом понимании последних (в отличие от функций как подпрограмм в процедурном программировании).

 Функциональное программирование - это программирование с использованием математических функций. Для преобразования методов в математические функции нам нужно сделать их сигнатуры честными в том смысле, что они должны полностью отражать все возможные входные данные и результаты, и нам также необходимо убедиться, что метод работает только с теми значениями, которые мы передаем, и ничего больше.
Практики, которые помогают преобразовать методы в математические функции:
● Иммутабельность.
● Избегать исключения для управления потоком программы.
● Избавляться от примитивной одержимости.
● Делать nulls явными.
Инвариант класса – условие, которое должно выполняться на протяжении всего срока жизни объекта. В случае изменяемого объекта инвариант нужно проверять в каждом методе, изменяющем состояние (mutator method). Это можно забыть сделать, и инвариант будет нарушен. В неизменяемом классе инвариант достаточно проверять в конструкторе.
 
 11. Особенности многопоточной работы в Джава,
использование final для полей данных для обеспечения
потокобезопасности
Один поток – это одна единица исполнения кода. Каждый поток последовательно выполняет инструкции процесса, которому он принадлежит, параллельно с другими потоками этого процесса.
Следует отдельно обговорить фразу «параллельно с другими потоками». Известно, что на одно ядро процессора, в каждый момент времени, приходится одна единица исполнения. То есть одноядерный процессор может обрабатывать команды только последовательно, по одной за раз (в упрощенном случае). Однако запуск нескольких параллельных потоков возможен и в системах с одноядерными процессорами. В этом случае система будет периодически переключаться между потоками, поочередно давая выполняться то одному, то другому потоку. Такая схема называется псевдо-параллелизмом. Система запоминает состояние (контекст) каждого потока, перед тем как переключиться на другой поток, и восстанавливает его по возвращению к выполнению потока. В контекст потока входят такие параметры, как стек, набор значений регистров процессора, адрес исполняемой команды и прочее...
Проще говоря, при псевдопараллельном выполнении потоков процессор мечется между выполнением нескольких потоков, выполняя по очереди часть каждого из них.
 
  В Java процесс завершается тогда, когда завершается последний его поток. Даже если метод main() уже завершился, но еще выполняются порожденные им потоки, система будет ждать их завершения.
Однако это правило не относится к особому виду потоков – демонам. Если завершился последний обычный поток процесса, и остались только потоки-демоны, то они будут принудительно завершены и выполнение процесса закончится. Чаще всего потоки-демоны используются для выполнения фоновых задач, обслуживающих процесс в течение его жизни.
Объявить поток демоном достаточно просто — нужно перед запуском потока вызвать его метод setDaemon(true);
Проверить, является ли поток демоном, можно вызвав его метод boolean isDaemon();
   
  В языке Java модификатор final для полей имеет особый смысл при многопоточной работе: к полю с этим модификатором могут безопасно обращаться одновременно несколько потоков, и они гарантированно будут видеть одинаковое значение.
Для не-final полей без особой синхронизации потоков может быть так, что каждый поток видит свое значение поля.
12. Основное назначение паттерна “Строитель” (Builder) для разработки программ на языке Джава
Строитель (англ. Builder) — порождающий шаблон проектирования предоставляет способ создания составного объекта. Отделяет конструирование сложного объекта от его представления так, что в результате одного и того же процесса конструирования могут получаться разные представления. позволяет изменять внутреннее представление продукта; изолирует код, реализующий конструирование и представление; дает более тонкий контроль над процессом конструирования.
Паттерн Builder позволяет использовать изменяемый объект для задания свойств, а затем создания на их основе неизменяемого объекта. Как

 правило изменяемый Builder существует в рамках одного метода и снаружи не виден, так что это не нарушает функциональной чистоты.
Картинка с Рефакторинг гуру для большего понимания?
Итак, паттерн проектирования Builder можно разбить на следующие важные компоненты:
● Product (продукт) - Класс, который определяет сложный объект, который мы пытаемся шаг за шагом сконструировать, используя простые объекты.
● Builder (строитель) - абстрактный класс/интерфейс, который определяет все этапы, необходимые для производства сложного объекта-продукта. Как правило, здесь объявляются (абстрактно) все этапы (buildPart), а их реализация относится к классам конкретных строителей (ConcreteBuilder).
● ConcreteBuilder (конкретный строитель) - класс-строитель, который предоставляет фактический код для создания объекта-продукта. У нас может быть несколько разных ConcreteBuilder-классов, каждый из которых реализует различную разновидность или способ создания объекта-продукта.
● Director (распорядитель) - супервизионный класс, под конролем котрого строитель выполняет скоординированные этапы для создания объекта-продукта. Распорядитель обычно получает на вход строителя с этапами на выполнение в четком порядке для построения объекта-продукта.
 
 Пример со сборкой автомобилей с использованием паттерна проектирования Builder
  
  
   
 13. Стандартные функциональные интерфейсы в Джава и их методы:
Стандартные функциональные интерфейсы и их методы:
1. Function: R apply(T arg) - представляет функцию перехода от объекта типа T к объекту типа R
2. Supplier: T get() - не принимает никаких аргументов, но должен возвращать объект типа T
3. Consumer: void accept(T arg) - выполняет некоторое действие над объектом типа T, при этом ничего не возвращая
4. Predicate: boolean test(T arg) - проверяет соблюдение некоторого условия. Если оно соблюдается, то возвращается значение true. В качестве параметра лямбда-выражение принимает объект типа T
5. BiFunction: R apply(T arg1, U arg2)
6. BiConsumer: void accept(T arg1, U arg2)
7. BiPredicate: boolean test(T arg1, U arg2)
Также есть варианты этих интерфейсов для примитивных
типов int, long и double.
В своих программах имеет смысл определять свои функциональные
интерфейсы, а не пользоваться предопределенными, потому что:
1. Название интерфейса и метода лучше документирует его назначение 2. Можно использовать конкретные типы вместо типовых параметров,
что облегчает чтение
3. В среде разработки будет проще найти реализации этого интерфейса 4. Стандартные интерфейсы не предусматривают использование
checked exceptions
         
 14. Потоки Stream API в Джава и их использование
Можно взять кусок из номера 11 - Нельзя Thread - поток и Stream - поток. Но Thread это поток выполнения, а Stream это поток данных.
Stream API — это новый способ работать со структурами данных в функциональном стиле. Stream (поток) API (описание способов, которыми одна компьютерная программа может взаимодействовать с другой программой) — это по своей сути поток данных. Сам термин "поток" довольно размыт в программировании в целом и в Java в частности.
Поток (Stream) – это представление последовательности элементов, над которым можно производить операции. Операции делятся на две категории:
1. Нетерминальные(конвейерные) – их результат тоже является потоком, и к нему в свою очередь можно тоже применить операцию;
2. Терминальные – их результат уже не является потоком, и эти операции завершают работу с потоком:
 
  
  
   Можно почитать здесь, про методы взаимодейтсвия и т.д. https://habr.com/ru/company/luxoft/blog/270383/
15. Статический импорт и его использование для программирования Stream API
Статический импорт выглядит как
import static java.lang.Math.sqrt;
Оператор import, предваряемый ключевым словом static, можно
применять для импорта статических членов класса или интерфейса. Благодаря статическому импорту появляется возможность ссылаться на статические члены непосредственно по именам, не уточняя их именем класса.
    
  То есть после такого импорта sqrt нам больше не нужно писать Math.sqrt(16). Пишем просто sqrt(16).
Статический импорт - синтаксический сахар, т.к. Stream API использует большое количество статических методов, таких как Stream.of(), Stream.generate(), Stream.empty(), Stream.generate(), Stream.concate(), Stream.iterate(), то использование всех этих методов в коде с явным указанием класса может перегружать читаемость. Поэтому можно использовать статический импорт и получать понятный код.
// another way of importing things
// - especially for the lazy ones import static java.util.stream.Stream.*;
16. Назначение метода stream() интерфейса Collection. Примеры
        
      Способ создани я стрима
Шаблон создания
Пример
1. Классиче ский: Создани е стрима из коллекци и
collection.str eam()
 Collection<String> collection =
 Arrays.asList("a1", "a2", "a3");
 Stream<String> streamFromCollection = collection.stream();
   default Stream<E> stream()
Returns a sequential Stream with this collection as its source.
This method should be overridden when the spliterator() method cannot return a spliterator that is IMMUTABLE, CONCURRENT, or late-binding. (See spliterator() for details.)
public interface Stream<T> extends BaseStream<T,Stream<T>>
A sequence of elements supporting sequential and parallel aggregate operations. The following example illustrates an aggregate operation using Stream and IntStream:
     int sum = widgets.stream()
                      .filter(w -> w.getColor() == RED)
                      .mapToInt(w -> w.getWeight())
                      .sum();
17. Работа со Stream API. Нетерминальные операции потока Stream<T>: назначение и использование
1. Нетерминальные(конвейерные) – их результат тоже является потоком, и к нему в свою очередь можно тоже применить операцию;

  
  
  18. Работа со Stream API. Терминальные операции, назначение и использование. Примеры
2. Терминальные – их результат уже не является потоком, и эти операции завершают работу с потоком:
 
  19. Интерфейс Splititerator и его методы
Сплитератор — это интерфейс, который содержит 8 методов, причём четыре из них уже имеют реализацию по умолчанию. Используется для параллельного программирования, последовательная и параллельная обработка данных. Оставшиеся методы — это tryAdvance, trySplit, estimateSize и characteristics.
Spliterator . Это интерфейс, доступный в пакете java.util .
     Методы Spliterator:

 1. tryAdvance: полный аналог методов hasNext+next из Iterator; объединены в один, так как так его проще реализовывать (см. пример)
2. Метод estimateSize: может использоваться для оптимизации; например, в нашем MyStream мы могли бы его использовать для начального размера списка в методе toList
3. Метод trySplit: используется для возможности параллельного обхода коллекции
https://docs.oracle.com/javase/8/docs/api/java/util/Spliterator.html
API Note:
Spliterators, like Iterators, are for traversing the elements of a source. The Spliterator API was designed to support efficient parallel traversal in addition to sequential traversal, by supporting decomposition as well as single-element iteration. In addition, the protocol for accessing elements via a Spliterator is designed to impose smaller per-element overhead than Iterator, and to avoid the inherent race involved in having separate methods for hasNext() and next().
20. Понятие многопоточности и написание многопоточных программ на языке Джава
Смотреть пункт 11
Самый краткий и понятный сайт:
https://javarush.ru/groups/posts/2047-threadom-java-ne-isportishjh--chastjh-i---pot oki
21. Потоки (threads) в Джава. Создание потоков в Джава программах Подходы к созданию потоков: через наследование и реализацию интерфейса Runnable Thread API. Запуск потока с Runnable
https://javarush.ru/groups/posts/2047-threadom-java-ne-isportishjh--chastjh- i---potoki - тут всё есть
     
 Отличие Runnable от Thread?
  
  
  
 22. Потоки в Джава. Методы Thread API
 Подробности
23. Синхронизация потоков. Понятие синхронизации. Блок синхронизации
Синхронизация заключается в согласовании скоростей выполнения процессов или потоков путем приостановки одного потока до наступления некоторого события, а затем активизация этого потока при наступлении этого события. Например, поток - получатель должен обращаться за данными только после того, как данные помещены в буфер потоком – отправителем.
Другой поток можно подождать с помощью sleep, interrupt, join(пока другой не закончит)
Потоки прекрасно работают, если они не используют mutable shared state:
• shared – два или более потока обращаются к одним и тем же данным в
памяти
• mutable – данные являются изменяемыми
Т.е. все хорошо, если:
• каждый поток работает со своими изменяемыми данными (данные не являются shared)
• потоки работают с общими неизменяемыми данными (данные не являются mutable)
Блок синхронизации:

 synchronized (lock) { // lock может быть любым объектом // код блока }
1. Блок синхронизации для одного и того же lock может выполнять
одновременно только один поток
2. Если поток 2 выполняет блок синхронизации с lock после того, как поток 1
выполнил блок синхронизации с lock, то поток 2 “увидит” все изменения, внесенные потоком 1.
Смысл прост. Если один поток зашел внутрь блока кода, который помечен словом synchronized, он моментально захватывает мьютекс объекта, и все другие потоки, которые попытаются зайти в этот же блок или метод вынуждены ждать, пока предыдущий поток не завершит свою работу и не освободит монитор.
 
 24. Использование синхронизации потоков для пары процессов producer/reader(производители/потребители)
25. Реализация блока synchronized на основе мониторов
Блок synchronized реализован на основе мониторов:
• Монитор может быть в двух состояниях: свободен (released) и захвачен (acquired)
• При входе в блок synchronized происходит попытка захвата монитора:
• Если монитор свободен, то он становится захвачен
• Если монитор уже захвачен другим потоком, то текущий поток останавливается и ждет, пока другой поток не освободит монитор
• Если монитор захвачен текущим потоком, то он остается захвачен • При выходе из блока synchronized монитор освобождается
• Если при этом другие потоки ждали освобождения этого монитора,
то выбирается один из этих потоков, который захватывает монитор и входит в свой блок synchronized.
 
   26. Метод synchronized (lock), особенности его использования для потоков
Synchronized (с англ. "синхронизированный") - это ключевое слово, которое позволяет заблокировать доступ к методу или части кода, если его уже использует другой поток.
Lock - это монитор. Монитор - это специальный объект, который следит за "состоянием" метода или объекта. Он смотрит, "занят" он или "свободен" в данный момент.

    
 Блок synchronized можно написать перед названием метода, если нужно сделать потокобезопасным весь метод, а не только его часть. Два примера ниже идентичны
  27. Синхронизация потоков . Правила happens-before (hb)
Правила happens-before (hb):
1. В рамках одного потока любая операция happens-before любой операцией следующей за ней в исходном коде
2. Выход из synhronized блока happens-before входа в synhronized блок на том же мониторе
3. Запись volatile поля happens-before чтение того же самого volatile поля

 4. Завершение метода run экземпляра класса Thread happens-before выхода из метода join()
5. Вызов метода start() экземпляра класса Thread happens-before начало метода run() экземпляра того же треда
Связь happens-before транзитивна, т.е. если X happens-before Y, а Y happens-before Z, то X happens-before Z. Если X happens-before Y, то все изменения, внесенные до операции X, будут видны в коде, следующем за операцией Y. Семантика многопоточной работы в Java (Java Memory Model) описывается именно в терминах happens-before.
Упрощенно можно считать, что при входе в synchronized все переменные считываются из памяти, а при выходе – записываются в память. На нижнем уровне visibility гарантируется: • генерацией компилятором кода, записывающего в память содержимого регистров • инструкцией процессора вида “барьер памяти” (в Intel – MFENCE), которая гарантирует порядок записи данных процессором в память
Но даже при отсутствии отношения happens-before Java гарантирует, что при чтении поля мы всегда прочитаем значение, записанное одним из потоков, а не мусор. При этом не гарантируется “свежесть” значения или порядок, в котором мы видим изменения значения. Если сначала поток 1 установил значение поля x=1, а потом поток 2 установил значение x=2, то поток, который не использует синхронизацию для доступа к полю x, может увидеть любую последовательность значений: только 1; только 2; сначала 1, потом 2; сначала 2, потом 1.

   Другой источник
Правила «happens-before»
Последнее, чего мы коснемся сегодня, это принципы «happens before».

 Как ты уже знаешь, в Java основную часть работы по выделению времени и ресурсов потокам для выполнения их задач выполняет планировщик потоков.
Также ты не раз видел, как потоки выполняются в произвольном порядке, и чаще всего предсказать его невозможно.
Да и вообще, после «последовательного» программирования, которым мы занимались до этого, многопоточность выглядит рандомной штукой. Как ты уже убедился, ход работы многопоточной программы можно контролировать при помощи целого набора методов.
Но в дополнение к этому в многопоточности Java существует еще один «островок стабильности» — 4 правила под названием «happens-before».
Дословно с английского это переводится как «происходит перед», или «происходит раньше, чем». Понять смысл этих правил достаточно просто.
Представь, что у нас есть два потока — A и B. Каждый из этих потоков может выполнять операции 1 и 2.
И когда в каждом из правил мы говорим «A happens-before B», это означает, что все изменения, выполненные потоком A до момента операции 1 и изменения, которые повлекла эта операция, видны потоку B в момент выполнения операции 2 и после выполнения этой операции.
Каждое из этих правил дает гарантию, что при написании многопоточной программы одни события в 100% случаев будут происходить раньше, чем другие, и что поток B в момент выполнения операции 2 всегда будет в курсе изменений, которые поток А сделал во время операции 1.
Давай рассмотрим их.

 Правило 1.
Освобождение мьютекса happens before происходит раньше захвата этого же монитора другим потоком.
Ну, тут вроде все понятно. Если мьютекс объекта или класса захвачен одним потоком, например, потоком А, другой поток (поток B) не может в это же время его захватить. Нужно подождать, пока мьютекс не освободится.
Правило 2.
Метод Thread.start() happens before Thread.run().
Тоже ничего сложного. Ты уже знаешь: чтобы начал выполняться код внутри метода run(), необходимо вызвать у потока метод start(). Именно его, а не сам метод run()!
Это правило гарантирует, что установленные до запуска Thread.start() значения всех переменных будут видны внутри начавшего выполнение метода run().
Правило 3.
Завершение метода run() happens before выход из метода join().
Вернемся к нашим двум потокам — А и B.
Мы вызываем метод join() таким образом, чтобы поток B обязательно дождался завершения A, прежде чем выполнять свою работу.
Это означает, что метод run() объекта A обязательно отработает до самого конца. И все изменения в данных, которые произойдут в методе run() потока A стопроцентно будут видны в потоке B, когда он дождется завершения A и начнет работу сам.

 Правило 4.
Запись в volatile переменную happens-before чтение из той же переменной.
При использовании ключевого слова volatile мы, фактически, всегда будем получать актуальное значение. Даже в случае с long и double, о проблемах с которыми говорилось ранее.
Как ты уже понял, изменения, сделанные в одних потоках, далеко не всегда видны другим потокам. Но, конечно, очень часто встречаются ситуации, когда подобное поведение программы нас не устраивает.
Допустим, в потоке A мы присвоили значение переменной:
int z;
....
z= 555;
Если наш поток B должен вывести значение переменной z на консоль, он запросто может вывести 0, потому что не знает о присвоенном ей значении.
Так вот, Правило 4 гарантирует нам: если объявить переменную z как volatile, изменения ее значений в одном потоке всегда будут видны в другом потоке.
Если мы добавим в предыдущий код слово volatile...
volatile int z;
....
z= 555;
...ситуация, при которой поток B выведет в консоль 0, исключена. Запись в volatile-переменные происходит раньше, чем чтение из них.
28. Синхронизация потоков. Модификатор полей volatile и его использование
Модификатор полей volatile: private static volatile boolean ready = false; Правила happens-before гарантируют, что при чтении volatile поля мы читаем последнее записанное значение. Упрощенно можно представить, что любое обращение к volatile полю завернуто в блок synchronized. Но это не гарантирует атомарности операций! “counter++” все равно подвержено

 проблеме параллельности даже при наличии volatile. Но для примера producer/reader можно использовать volatile:
  Другой источник Модификатор volatile используют, когда нужно:
● обеспечить видимость данных — убедиться, что при обращении к переменной
любой поток получит её последнее записанное значение;

 ● исключить кэширование значений переменной и хранить их только в основной памяти.
Как только один поток записал что-то в volatile-переменную, значение идёт прямо в общую память и тут же доступно остальным потокам:
class CarSharingBase {
static volatile int your_car_ID = 3222233; }
Но учтите, что модификатор volatile никак не ограничивает одновременный доступ к данным. А значит, в работу одного потока с полем может вмешаться другой поток. Вот что будет, если два потока одновременно получат доступ к операции увеличения на единицу (i++):
int i = 0;
Поток 1: читает переменную (0) Поток 1: прибавляет единицу Поток 2: читает переменную (0) Поток 1: записывает значение (1) Поток 2: прибавляет единицу Поток 2: записывает значение (1)
Если бы два потока не мешали друг другу, а работали последовательно, мы получили бы на выходе значение «2», но вместо этого видим единицу. Чтобы такого не происходило, нужно обеспечить атомарность операции. Атомарными называют операции, которые могут быть выполнены только полностью. Если они не выполняются полностью, они не выполняются вообще, но прервать их невозможно.
В примере с увеличением на единицу мы видим сразу три действия: чтение, сложение, запись. Чтение и запись — операции атомарные, но между ними могут вклиниться действия другого потока. Поэтому составная операция инкремента (i++) полностью атомарной не является.
 
 Обратите внимание: с volatile-переменной возможны как атомарные, так и неатомарные операции. Ключевое слово volatile позволяет сделать так, чтобы все потоки читали одно и то же из основной памяти, но не более того.
Простейший способ гарантировать атомарность — выстроить потоки в очередь за ресурсами с помощью механизма synchronized. Представьте, что на электронный счёт одновременно переводят деньги два клиента. Уж лучше попросить одного из них немного подождать, чем допустить ошибки в денежных расчетах.
29. Синхронизация потоков. Атомарные операции. Механизм Wait/notify
https://metanit.com/java/tutorial/8.5.php - если лень читать ниже
Атомарная операция — это операция, которая выполняется полностью или не выполняется совсем, частичное выполнение невозможно.
Атомики - это классы, которые выполняют операции изменения своего значения атомарно, т.о. они поддерживают lock-free thread-safe использование переменных. Достигается это с помощью алгоритма compare-and-swap (CAS) и работает быстрее, чем аналогичные реализации с блокировками.
Как можно определить атомарность?
Атомарность операции чаще всего принято обозначать через ее признак неделимости: операция может либо примениться полностью, либо не примениться вообще. Хорошим примером будет запись значений в массив:
public class Curiousity {
public volatile int[] array;
public void nonAtomic() { array = new int[1]; array[0] = 1; }
public void probablyAtomic() { array = new int[] { 1 }; } }
При использовании метода nonAtomic существует вероятность того, что какой-то поток обратится к array[0] в тот момент, когда array[0] не проинициализирован, и получит неожиданное значение. При использовании probablyAtomic (при том условии, что массив сначала заполняется, а уже потом присваивается - я сейчас не могу гарантировать, что в java это именно так, но представим, что это правило действует в рамках примера) такого быть не должно: array всегда содержит либо null, либо проинициализированный массив, но в array[0] не может содержаться что-то,
 
 кроме 1. Эта операция неделима, и она не может примениться наполовину, как это было с nonAtomic - только либо полностью, либо никак, и весь остальной код может спокойно ожидать, что в array будет либо null, либо значения, не прибегая к дополнительным проверкам.
Кроме того, под атомарностью операции зачастую подразумевают видимость ее результата всем участникам системы, к которой это относится (в данном случае - потокам); это логично, но, на мой взгляд, не является обязательным признаком атомарности.
Почему это важно?
Атомарность зачастую проистекает из бизнес-требований приложений: банковские транзакции должны применяться целиком, билеты на концерты заказываться сразу в том количестве, в котором были указаны, и т.д. Конкретно в том контексте, который разбирается (многопоточность в java), задачи более примитивны, но произрастают из тех же требований: например, если пишется веб-приложение, то разбирающий HTTP-запросы сервер должен иметь очередь входящих запросов с атомарным добавлением, иначе есть риск потери входящих запросов, а, следовательно, и деградация качества сервиса. Атомарные операции предоставляют гарантии (неделимости), и к ним нужно прибегать, когда эти гарантии необходимы.
Кроме того, атомарные операции линеаризуемы - грубо говоря, их выполнение можно разложить в одну линейную историю, в то время как просто операции могут производить граф историй, что в ряде случаев неприемлимо.
Для некоторых случаев удобно использовать классы AtomicInteger counter = new AtomicInteger(0); // И его аналоги AtomicLong, AtomicBoolean Это аналоги volatile полей, но кроме того они добавляют методы, которые выполняются атомарно:
int newValue = counter.addAndGet(delta); // Аналог “counter += delta” int oldValue = counter.getAndAdd(delta); // Аналог “counter += delta” int newValue = counter.incrementAndGet(); // Аналог “++counter”
int oldValue = counter.getAndIncrement(); // Аналог “counter++”
В частности, вместо “volatile boolean ready” можно использовать “AtomicBoolean ready”

 Иногда при взаимодействии потоков встает вопрос о извещении одних потоков о действиях других. Например, действия одного потока зависят от результата действий другого потока, и надо как-то известить один поток, что второй поток произвел некую работу. И для подобных ситуаций у класса Object определено ряд методов:
● wait(): освобождает монитор и переводит вызывающий поток в состояние ожидания до тех пор, пока другой поток не вызовет метод notify()
● notify(): продолжает работу потока, у которого ранее был вызван метод wait()
● notifyAll(): возобновляет работу всех потоков, у которых ранее был вызван метод wait()
Все эти методы вызываются только из синхронизированного контекста - синхронизированного блока или метода.
Метод lock.wait() освобождает монитор lock и переводит текущий поток в режим ожидания монитора (состояние WAITING). Так как монитор освобожден, другие потоки могут выполнять блоки “synchronized (lock)”, пока этот поток находится в режиме ожидания (“спит”).
 
 Метод lock.notifyAll() будет все ожидающие этот монитор потоки. Все эти потоки начинают пытаться захватить монитор (это получится не сразу после вызова notifyAll, а только когда вызвавший notifyAll поток выйдет из блока synchronized). После этого все спавшие потоки по очереди захватят монитор и выполнят блок synchronized.
  
   import java.lang.Thread;
import java.util.concurrent.atomic.AtomicIntegerArray;
/*
* Gonna produce the following output every time: * a0
* b 0123
* c 0123456
* a0
* b 0123
* c 0123456
* a0
* b 0123
* c 0123456
*/
public class A {
    private int d = 0;
    private AtomicIntegerArray e = new AtomicIntegerArray(3);
static <a> void pr(final a b) { System.out.print(b); }

     static void fr(final int a) { for (
        int b = 0, c = a + a * 2;
        b <= c;
        pr(b++)
); }
    void wt(final int a) { try {
        while (d != a)
            wait();
    } catch(final Exception $) {} }
    void cl(final int i) {
        var $ = 0;
        while (($ = e.get(i)) < 3) {
            switch (i) {
                case 0 -> d(0, 'a', 1);
                case 1 -> d(1, 'b', 2);
                case 2 -> d(2, 'c', 0);
}
            e.set(i, $ + 1);
        }
}
    public static void main(final String... $$) {
        final var $ = new A();
        final var a = new Thread(() -> $.cl(0));
        final var b = new Thread(() -> $.cl(1));
        final var c = new Thread(() -> $.cl(2));
        a.start();
        b.start();
        c.start();
}
    synchronized void d(final int i, final char j, final int k) {
        wt(i);
        pr("
" + j + ' ');
        fr(i);
        d = k;
        notifyAll(); // won’t work with ‘notify()’
} }
import java.lang.Thread;
/*
 * Making atomics from non-atomics
 */
public class A {
    volatile String a = "";
    static <a> void $(a b) { System.out.println(b); }
    // The output (#) will be: one or several random letters.
    // Reads the value of the variable, appends new string to it
    // and then assigns the new value.
    void nonAtomic(String b) { a += b; }
    // The output (#) will be: random sequence of 4 letters every time.
    // Thanks to synchronized keyword this method
    // executes as an atomic operation.
    // But there’s no synchronization between the threads so the
    // sequence will be random.
    synchronized void atomic(String b) { a += b; }
    public static void main(String ...$) throws Exception {
        var e = new A();
        Thread a, b, c, d;

                if (false) {
                   a = new Thread(() -> e.nonAtomic("a"));
                   b = new Thread(() -> e.nonAtomic("b"));
                   c = new Thread(() -> e.nonAtomic("c"));
                   d = new Thread(() -> e.nonAtomic("d"));
               } else {
                   a = new Thread(() -> e.atomic("a"));
                   b = new Thread(() -> e.atomic("b"));
                   c = new Thread(() -> e.atomic("c"));
                   d = new Thread(() -> e.atomic("d"));
}
               a.start(); b.start(); c.start(); d.start();
               a.join(); b.join(); c.join(); d.join();
               $(e.a); $(e.a.length()); // (#)
               e.a = "";
               e.nonAtomic("a");
               e.nonAtomic("b");
               e.nonAtomic("c");
               e.nonAtomic("d");
               $(e.a); $(e.a.length()); // abcd 
 4
} }
30. Синхронизация потоков с использованием классов пакета java.util.concurrent.locks
 
 Пример использования ReentrantLock
 Наверное у многих возникало чувство некоторого хаоса при беглом взгляде на java.util.concurrent. В одном пакете намешаны разные классы с совершенно разным функционалом, что несколько затрудняет понимание что к чему относится и как это работает. Поэтому, можно схематично поделить классы и интерфейсы по функциональному признаку, а затем пробежаться по реализации конкретных частей.
 
 Concurrent Collections — набор коллекций, более эффективно работающие в многопоточной среде нежели стандартные универсальные коллекции из java.util пакета. Вместо базового враппера Collections.synchronizedList с блокированием доступа ко всей коллекции используются блокировки по сегментам данных или же оптимизируется работа для параллельного чтения данных по wait-free алгоритмам.
Queues — неблокирующие и блокирующие очереди с поддержкой многопоточности. Неблокирующие очереди заточены на скорость и работу без блокирования потоков. Блокирующие очереди используются, когда нужно «притормозить» потоки «Producer» или «Consumer», если не выполнены какие-либо условия, например, очередь пуста или перепонена, или же нет свободного «Consumer»'a.
Synchronizers — вспомогательные утилиты для синхронизации потоков. Представляют собой мощное оружие в «параллельных» вычислениях.
Executors — содержит в себе отличные фрейморки для создания пулов потоков, планирования работы асинхронных задач с получением результатов.
Locks — представляет собой альтернативные и более гибкие механизмы синхронизации потоков по сравнению с базовыми synchronized, wait, notify, notifyAll.
Atomics — классы с поддержкой атомарных операций над примитивами и ссылками.
Лучше глянуть предыдущий номер, там можно взять некоторые ответы
31. Запуск и прерывание потоков. Приостановка и прерывание выполнения нити
Во-первых, должны соблюдаться правила happens-before. Смотреть 27 вопрос.
https://metanit.com/java/tutorial/8.4.php - ссылка на источник
Распространенный способ завершения потока представляет опрос логической переменной. И если она равна, например, false, то поток завершает бесконечный
 
 цикл и заканчивает свое выполнение. Пишем метод, далее, когда необходимо сбрасываем флаг, вызываем исключение - поток завершён
Или через метод interrrupt(), используя исключение
32. Обработка операции прерывания потока
https://urvanov.ru/2016/05/27/java-8-многопоточность/ - ссылочка неплохая
Прерывание (interrupt) — это сигнал для потока, что он должен прекратить делать то, что он делает сейчас, и делать что-то другое. Что должен делать поток в ответ на прерывание, решает программист, но обычно поток завершается.
Поток отправляет прерывание вызывая метод public void interrupt() класса Thread. Для того чтобы механизм прерывания работал корректно, прерываемый поток должен поддерживать возможность прерывания своей работы.
Как поток должен поддерживать прерывание своей работы? Это зависит от того, что он сейчас делает. Если поток часто вызывает методы, которые могут бросить InterruptedException, то он просто вызывает return при перехвате подобного исключения. Пример:
Java
      
   1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
for (int i = 0; i < importantInfo.length; i++) {
 // Пауза 4 секунды
try {
Thread.sleep(4000);
} catch (InterruptedException e) {
// Ожидание было прервано! Больше не нужно сообщений.
return;
}
// Пишем сообщение
System.out.println(importantInfo[i]);
}
Многие методы, которые бросают InterruptedException, например методы sleep, останавливают своё выполнение и возвращают управление в вызвавший их код при получении прерывания (interrupt).
Что если поток выполняется длительное время без вызова методов, которые бросают исключение InterruptedException? Тогда он может периодически вызывать метод Thread.interrupted(), который возвращает true, если получен сигнал о прерывании. Например:
Java
         1 2 3 4 5 6 7
for (int i = 0; i < inputs.length; i++) {
heavyCrunch(inputs[i]);
if (Thread.interrupted()) {
// Мы были прерваны: no more crunching.
return;
   }
}

 В этом примере код просто проверяет на наличие сигнала о прерывании, и выходит из потока, если сигнал есть. В более сложных приложениях имеет смысл бросить исключение InterruptedException:
Java
}
Это позволяет располагать код обработки прерывания потока в одной
клаузе catch.
Механизм прерывания реализован с помощью внутреннего флага, известного как статус прерывания (interrupt status). Вызов Thread.interrupt() устанавливает этот флаг. Когда поток проверяет наличие прерывания вызовов Thread.interrupted(), то флаг статуса прерывания сбрасывается. Нестатический метод isInterrupted(), который используется одним потоком для проверки статуса прерывания другого потока, не меняет флаг статуса прерывания.
По соглашению любой метод, который прерывает свою выполнение бросая исключение InterruptedException, очищает флаг статуса прерывания, когда он бросает это исключение. Однако есть вероятность, что флаг статуса прерывания будет сразу же установлен ещё раз, если другой поток вызовет interrupt().
   1 2 3
if (Thread.interrupted()) {
throw new InterruptedException();
       
 33. Ожидание и присоединение запущенной нити основным потоком управления
Соединение
Метод join позволяет одному потоку ждать завершения другого потока. Если t является экземпляром класса Thread, чей поток в данный момент продолжает выполняться, то
t.join();
приведёт к приостановке выполнения текущего потока до тех пор, пока поток t не завершит свою работу. Метод join() имеет варианты с параметрами:
Java
     public final void join(long millis)
                     throws InterruptedException
       1 2
 
  Java
     public final void join(long millis,
int nanos)
                     throws InterruptedException
Они позволяют задать время в миллисекундах и дополнительно количество наносекунд, в течение которых ждать завершения выполнения потока. Однако, как и с методами sleep, методы join зависят от возможностей операционной системы, поэтому вы не должны полагаться на то, что join будет ждать точно указанное время.
Как и методы sleep, методы join отвечают на сигнал прерывания, останавливая процесс ожидания и бросая исключение InterruptedException.
Простой пример
Пример состоит из двух потоков. Первый поток является главным потоком приложения, который имеет каждая программа на Java. Главный поток создаёт новый поток и ждёт его завершения. Если второй поток выполняется слишком долго, то главный поток прерывает его.
Java
 1 2 3
        
 public class SimpleThreads {
 // Выводим сообщение
// с именем текущего потока в начале.
static void threadMessage(String message) {
    String threadName =
        Thread.currentThread().getName();
    System.out.format("%s: %s%n",
   threadName,
message);
 }
 private static class MessageLoop
    implements Runnable {
    public void run() {
        String importantInfo[] = {
            "Mares eat oats",
            "Does eat oats",
            "Little lambs eat ivy",
            "A kid will eat ivy too"
};
try {
for (int i = 0;
                i < importantInfo.length;
i++) {
                // Ждём 4 секунды
                Thread.sleep(4000);
                // Пишем сообщение
                threadMessage(importantInfo[i]);
          1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29

   30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
}
        } catch (InterruptedException e) {
            threadMessage("I wasn't done!");
}
}
}
public static void main(String args[])
    throws InterruptedException {
    // Задержка в миллисекундах
    // перед тем как мы прерываем MessageLoop
    // (по умолчанию один час).
    long patience = 1000 * 60 * 60;
    // Если есть аргумент командной строки,
    // то он указывает ожидание в секундах.
    if (args.length > 0) {
try {
            patience = Long.parseLong(args[0]) * 1000;
        } catch (NumberFormatException e) {
            System.err.println("Argument must be an integer.");
            System.exit(1);
}
}
    threadMessage("Starting MessageLoop thread");
    long startTime = System.currentTimeMillis();
    Thread t = new Thread(new MessageLoop());
              
  59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
t.start();
               threadMessage("Waiting for MessageLoop thread to finish");
              // ждём пока MessageLoop
              // существует
              while (t.isAlive()) {
                  threadMessage("Still waiting...");
                  // Ждём максимум 1 секунду
                  // завершения потока MessageLoop
                  t.join(1000);
                  if (((System.currentTimeMillis() - startTime) > patience)
                        && t.isAlive()) {
                      threadMessage("Tired of waiting!");
                      t.interrupt();
                      // Должно быть недолго теперь.
                      // -- Ждём до конца
t.join();
}
}
              threadMessage("Finally!");
}
}
34. Жизненный цикл потока на языке Джава. Состояние потока
Жизненный цикл потока. При выполнении программы объект Thread может находиться в одном из четырех основных состояний: «новый», «работоспособный», «неработоспособный» и «пассивный». При создании потока он получает состояние «новый» (NEW) и не выполняется. Для перевода потока
          
 из состояния «новый» в «работоспособный» (RUNNABLE) следует выполнить метод start(), вызывающий метод run().
 Планировщик  —  это программное обеспечение, которое используется для отслеживания задач компьютера. Он отвечает за назначение задач ресурсам, которые могут совершать работу. Мы не будем углубляться в логику, которую реализует планировщик. На данный момент достаточно знать, что планировщик имеет контроль над тем, какая задача должна быть назначена какому аппаратному ресурсу и когда, исходя из доступности ресурса и состояния задачи.

 35. Многопоточные примитивы и их использование
Может быть имелись в виду AtomicInteger и прочие? Многопоточные примитивы
• Класс Thread с методами start/join
• Блоки synchronized
• Методы wait/notify/notifyAll
• Поля с модификатором volatile
• Классы java.util.concurrent.atomic.*
• Классы java.util.concurrent.locks.*
• Метод interrupt(), InterruptedException и interrupted state Все это низкоуровневые механизмы работы с потоками.
36. Интерфейс Executor в Джава и его использование. ExecutorService
Потоки потребляют довольно много ресурсов компьютера:
• Переключение между потоками занимает заметное время (context switch)
• Каждый поток требует отдельного стека вызовов (размер по умолчанию – 1 Мб)
• Потоки конкурируют между собой за процессор
• Запуск потока занимает довольно много времени Операционные системы плохо справляются с ситуациями ~10000 потоков и более.
Одно из решений: пулы потоков (thread pools); позволяют ограничить количество одновременно запущенных потоков, не ограничивая количество задач.
Runnable
code = () -> { ... // Код задачи };
Executor executor = ...; executor.execute(code);

 Интерфейс Executor – абстракция для запуска задач. Он может запускать потоки по необходимости. Интерфейс java.util.concurrent.Executor — это простой интерфейс для поддержки запуска новых задач
Стандартные реализации интерфейса Executor: Executors.newSingleThreadExecutor() Executors.newFixedThreadPool(int nThreads) Executors.newCachedThreadPool() Все они на самом деле возвращают объект класса ThreadPoolExecutor – реализацию пула потоков. Он состоит из набора потоков и очереди задач. “Под капотом” у него то же класс Thread с методом start и примитивы синхронизации.
 Ещё раз вспомним. У нас есть Executor для execute (т.е. выполнения) некой задачи в потоке, когда реализация создания потока скрыта от нас. У нас есть ExecutorService — особый Executor, который имеет набор возможностей по управлению ходом выполнения. И у нас есть фабрика Executors, которая позволяет создавать ExecutorService. Давайте теперь это проделаем сами:

 public static void main(String[] args) throws ExecutionException, InterruptedException {
Callable<String> task = () -> Thread.currentThread().getName();
ExecutorService service Executors.newFixedThreadPool(2);
    for (int i = 0; i < 5; i++) {
         Future result = service.submit(task);
         System.out.println(result.get());
    }
    service.shutdown();
    }
=
Как мы видим, мы указали фиксированный пул потоков (Fixed Thread Pool) размером 2. После чего мы поочередно отправляем в пул задачи. Каждая задача возвращает строку (String), содержащую имя потока (currentThread().getName()). Важно в самом конце выполнить shutdown для ExecutorService, потому что в противном случае наша программа не завершится.
В фабрике Executors есть и другие фабричные методы. Например, мы можем создать пул всего из одного потока — newSingleThreadExecutor или пул с кэшированием newCachedThreadPool, когда потоки будут убираться из пула, если они простаивают 1 минуту.
На самом деле, за этими ExecutorService прячется блокирующая очередь, в которую помещаются задачи и из которой эти задачи выполняются. Подробнее про блокирующие очереди можно посмотреть в видео "Блокирующая очередь - Collections #5 - Advanced Java". А так же можно прочитать обзор "Блокирующие очереди пакета
   
 concurrent" и ответ на вопрос "When to prefer LinkedBlockingQueue over ArrayBlockingQueue?". Супер упрощённо — BlockingQueue (блокирующая очередь) блокирует поток, в двух случаях:
● поток пытается получить элементы из пустой очереди
● поток пытается положить элементы в полную очередь
import java.lang.Thread; import java.util.ArrayDeque;
/** Task */
@FunctionalInterface interface C { void a(); }
/**
 * Background single thread task executor,
 * illustrates basic principles
 */
class B extends Thread {
private ArrayDeque<C> aa = new ArrayDeque<>(); private volatile boolean bb = true;
@Override public void run() { while (bb) { C a = aa.poll();
if (a == null) continue;
a.a(); // each task can be launched
   }}
// within its own thread if
// there's such need
void a(C a) { aa.add(a); }
    /*
     * Stops the execution without
     * interrupting running tasks
     */
void b() throws Exception { bb = false;
super.join(); }
}
public class Main {
/**
* Output will be: *a
*b
*c
* every time
*/
public static void main(String...$) { var a = new B();
a.start();
        a.a(() -> System.out.println('a'));
        a.a(() -> System.out.println('b'));
        a.a(() -> System.out.println('c'));
try { Thread.sleep(1000); a.b(); }
catch (Exception $$) {} }
}

 37. Интерфейс Future в Джава. Основное назначение использования его в программах
Не всегда нам достаточно просто запустить задачу и забыть про нее; часто нужно узнать результат ее выполнения. Для этого используются интерфейсы: public interface ExecutorService extends Executor { Future submit(Runnable task); Future submit(Callable task); ... } public interface Callable { T call() throws Exception; }
Future представляет собой будущий результат выполнения задачи:
ExecutorService es = Executors.newFixedThreadPool(10);
Future f1 = es.submit(() -> { Thread.sleep(1000); return “Hello future”; }); // Задача начинает выполняться параллельно // и завершится через 1 секунду System.out.println(f1.isDone()); // скорее всего false
Метод isDone() возвращает true, если задача успешно выполнена и ее результат можно получить:
String result1 = f1.get(); // “Hello future”
Если задача еще не выполнена, метод get блокирует выполнение текущего потока до тех пор, пока не произойдет одно из:
• задача выполнится успешно и метод get вернет ее результат
• задача выполнится с исключением и метод get выбросит ExecutionException (исходное исключение – ex.getCause())
• задача будет отменена (см. далее) и метод get выбросит CancellationException
• текущий поток будет прерван и метод get выбросит InterruptedException
Если задача становится неактуальной, ее можно отменить: boolean cancelled = f1.cancel(true); // или f1.cancel(false)
При этом:

 1. Если задача уже завершена или уже отменена, то ничего не происходит (cancel возвращает false)
2. Если задача еще не начала выполняться (стоит в очереди), то она просто убирается из очереди
3. Если задача уже начала выполняться (т.е. ей выделен поток из пула), то:
1. Если параметр mayInterruptIfRunning=false, то задача все равно выполняется до конца, отмена игнорируется
2. Если параметр mayInterruptIfRunning=true, то для потока выполняется метод interrupt(). Если задача проверяет состояние прерывания потока, она будет прекращена.
Futures – повышение уровня абстракции поверх примитивов многопоточной
работы. Но нужно помнить, что при обращении разных задач к одному и тому
же shared mutable state возникают все те же проблемы многопоточности.
Future хранит результат асинхронного вычисления.
Класс-оболочка FutureTask представляет собой удобный механизм для превращения Callable одновременно в Future и Runnable, реализуя оба интерфейса.
    
 38. Коллекции java.util.concurrent. Состав коллекции. Основные методы
Наверное у многих возникало чувство некоторого хаоса при беглом взгляде на java.util.concurrent. В одном пакете намешаны разные классы с совершенно разным функционалом, что несколько затрудняет понимание что к чему относится и как это работает. Поэтому, можно схематично поделить классы и интерфейсы по функциональному признаку, а затем пробежаться по реализации конкретных частей.
 Concurrent Collections — набор коллекций, более эффективно работающих в многопоточной среде нежели стандартные универсальные коллекции из java.util пакета. Вместо базового враппера Collections.synchronizedList с блокированием доступа ко всей коллекции используются блокировки по сегментам данных или же оптимизируется работа для параллельного чтения данных по wait-free алгоритмам.
Queues — неблокирующие и блокирующие очереди с поддержкой многопоточности. Неблокирующие очереди заточены на скорость и работу без блокирования потоков. Блокирующие очереди используются, когда нужно «притормозить» потоки «Producer» или «Consumer», если не выполнены какие-либо условия, например, очередь пуста или перепонена, или же нет свободного «Consumer»'a.
Synchronizers — вспомогательные утилиты для синхронизации потоков. Представляют собой мощное оружие в «параллельных» вычислениях.
Executors — содержит в себе отличные фрейморки для создания пулов потоков, планирования работы асинхронных задач с получением результатов.

 Locks — представляет собой альтернативные и более гибкие механизмы синхронизации потоков по сравнению с базовыми synchronized, wait, notify, notifyAll.
Atomics — классы с поддержкой атомарных операций над примитивами и ссылками.
  Классы, реализующие интерфейс BlockingQueue: LinkedBlockingQueue: на основе двусвязного списка, размер может быть неограничен ArrayBlockingQueue: на основе массива, размер фиксирован SynchronousQueue: очередь “нулевой длины”; добавление элемента в хвост

 блокируется, пока другой поток не заберет этот элемент из головы Все эти классы являются потокобезопасными, т.к. спроектированы специально для использования разными потоками одновременно.
 Другие интерфейсы, связанные с очередями:
TransferQueue – блокирующая очередь с подтверждением доставки BlockingDeque – блокирующая двусторонняя очередь
Другие классы, связанные с очередями:
ConcurrentLinkedQueue – неблокирующая очередь ConcurrentLinkedDeque – неблокирующая двусторонняя очередь DelayQueue – блокирующая очередь с задержкой
LinkedBlockingDeque – блокирующая двусторонняя очередь LinkedTransferQueue – блокирующая очередь с подтверждением
доставки
PriorityBlockingQueue – блокирующая отсортированная очередь Наиболее полезным является класс ConcurrentHashMap – он позволяет
делать кэши, которые можно использовать из нескольких потоков: private final ConcurrentMap primes = new ConcurrentHashMap<>(); // Этот метод потокобезопасен: public int getNthPrime(int n) { return primes.computeIfAbsent(n, k -> { // вычисление n-го простого числа }); }

 Класс ConcurrentHashMap оптимизирован для использования многими потоками: если несколько потоков только читают данные из него, то они не блокируются; только при одновременной записи в ConcurrentHashMap возможна блокировка потоков, но и при этом если запись идет в разные buckets, то они не блокируются друг с другом.
39. Потокобезопасные коллекции пакета java.util.concurrent:
Смотреть предыдущий вопрос
TransferQueue – блокирующая очередь с подтверждением доставки BlockingDeque – блокирующая двусторонняя очередь
Другие классы, связанные с очередями:
ConcurrentLinkedQueue – неблокирующая очередь ConcurrentLinkedDeque – неблокирующая двусторонняя очередь DelayQueue – блокирующая очередь с задержкой
LinkedBlockingDeque – блокирующая двусторонняя очередь LinkedTransferQueue – блокирующая очередь с подтверждением Классы, реализующие интерфейс BlockingQueue: LinkedBlockingQueue:
на основе двусвязного списка, размер может быть неограничен ArrayBlockingQueue: на основе массива, размер фиксирован SynchronousQueue: очередь “нулевой длины”; добавление элемента в хвост блокируется, пока другой поток не заберет этот элемент из головы Все эти классы являются потокобезопасными, т.к. спроектированы специально для использования разными потоками одновременно.
40. Реализация асинхронного выполнения в Джава
Отсюда рождается идея дробить обработку запроса на более мелкие части, чтобы на время ожидания ввода/вывода отдать поток другим ожидающим запросам. Вместо: String text = readFromFile(); processText(text); пишем: readFromFile(text -> { processText(text); }); где метод readFromFile,

 пока файл не будет прочитан, отдает поток другим запросам; processText может быть вызван уже не в том потоке, что изначальный вызов readFromFile
В Java это реализовано через CompletableFuture (аналог Promise в JavaScript). К сожалению, асинхронное программирование очень плохо ложится на традиционные инструменты разработки и идиомы императивного программирования. Асинхронный код трудно писать, читать, тестировать и отлаживать.
В будущих версиях Java планируется добавление виртуальных потоков (Project Loom). В отличие от текущей реализации, где поток Java = потоку операционной системы, виртуальные потоки будут управляться JVM. Такие потоки используют меньше памяти и намного быстрее запускаются. При этом при использовании виртуальным потоком блокирующих операций он отдает “физический поток” другим виртуальным потокам. Поэтому простой подход “поток на каждый запрос” в модели виртуальных потоков будет работать и для большого количества запросов, и не нужно будет уродовать программу асинхронным подходом.
41. Паттерн “Одиночка” (Singleton) и его использование в Джава программах
public static class A {
    public static final A INSTANCE = new A();
    private A() {}
}
OR
public static class B {
    private static B b = null;
    private B() {}
    public static B getInstance()
    { return b == null ? b = new B() : b; }
}

 
 
 42. Использование статических методов для создания экземпляра объекта вместо конструкторов
Используется, когда нужно много разных способов создания объекта, и не нужно плодить лишние конструкторы.
Преимущества:
● Статическому методу можно дать осмысленной имя;
● Следуя из первого, возможно наличие методов с одинаковыми
параметрами но разной логикой;
● Из статического метода можно вернуть null если что то пошло не так.
Конструктор же всегда вернет что-то, или же выбросит исключение
● Можно вернуть тип, отличный от объявленного (например, вернуть
класс-наследник)
● Необходим для синглтона
Статические и нестатические методы отличаются (главным образом) только наличием одной вещи - контекстом. Если код суммирует два аргумента (пресловутый Math) или преобразовывает массив в список (Arrays.asList()), то ему не нужен для этого внешний контекст (состояние), и такой код, по логике, должен быть статическим. В случаях, когда вызов метода меняет состояние, и без экземпляра класса не обойтись (например, добавление новой секции к отчету), код, конечно, не должен быть статическим, и метод ReportSectionAppender.append(Report report, ReportSection section) без дополнительных условий появляться не должен.
Однако лично у меня есть сильные предубеждения против статических вызовов, из-за которых лично я этой логике не следую. Статические вызовы облегчают написание кода, но у них есть два минуса, которые (лично для меня) перевешивают плюсы. Во-первых, статические вызовы скрывают зависимости и вносят небольшую долю глобального контекста в код - в конструктор класса может передаваться три объекта, а внутри использоваться еще с десяток статических классов, что обнаружится только в тот момент, когда на рефакторинг будет дан зеленый свет, "потому что этот класс почти не затрагивает другие". И, во-вторых, это довольно жесткий хардкод - статический вызов сам по себе нельзя ни подменить другой реализацией, ни обернуть в прокси, не изменив сам код. В случае того же самого рефакторинга это может встать

 серьезным боком, если архитектура не была продумана идеально изначально (это как раз мой случай).
Что по поводу "лишь бы не создавать экземпляр класса" - это обычные опасения, от которых стоит избавляться. Когда вы пишете программу, ваша первая задача - реализовать поставленные к ней требования, оптимизацией - если она вообще потребуется - можно будет заняться позже. Делайте так, как удобно.
Резюмируя: писать бесконтекстные методы статикой и выносить их в utility-классы - это обычная практика, принятая коммьюнити. Тем не менее, у этого подхода есть минусы, которые заставляют некоторых ее не использовать или использовать по минимуму.
При использовании static нужно быть внимательным к тому где и как вы его используете.
Так как static, фактически, означает, что этот объект singleton, т.е. он (класс) и его поля существуют в единственном экземпляре, и используя его в других классах вы используете один и тот же объект, а изменяя его состояние, к примеру, в классе N, вы изменяете его и для остальных классов.
Зачастую их используют как util-ные классы, к примеру когда вам нужно в каком то месте в коде произвести подсчет, или конвертацию какого то значения. Хороший пример java.lang.Math, класс который используется для математических операции. Либо как объект который содержит в себе значения которые могут быть нужны и являются общими для остальных классов, к примеру это могут быть какие то константы которые могут использовать остальные классы из этого приложения. И чтобы каждый раз не создавать объект который содержит всегда одинаковую информацию - создают его один для всех.
Мое мнение:
1. для приватных методов класса, если можно сделать метод статически -
обязательно делайте его статическим, это покажет всем что метод не связан с контекстом класса и его можно вынести в другой класс или легко рефакторить.
2. для публичным методов класса - используйте static очень ограниченно:
○ во-первых, лучше если static методы будут находится в
отдельных Utils классах. Не стоит смешивать в одном классе
статические и обычные методы
○ во-вторых, статические публичные методы лучше использовать
только для методов, которые делают простые операции одним единственным способом. Например, такие как взятие синуса, округление и т.п.
 
 ○ в-третьих, никогда не используйте статические методы если возможно потребуется их расширение на разные сущности или разные виды реализации. Например, если вы делаете методы parseXML(url), parseTxt(url), parseHTML(url), которые делают похожие вещи но с разными источниками намного лучше создать интерфейс, имеющий метод parse(url) и три класса XmlPraser, TxtPraser и HTMLParser, которые реализуют этот метод. Это упростит понимание и позволит потом легко и просто добавить четвертый и пятый источник.
3. Чтобы избавится от необходимости "создавать экземпляр класса" советую посмотреть на dependency injection фреймворки, такие как Spring или guice. Они позволяют легко и незаметно "создавать экземпляры класса", например сравните:
код с использованием DI
public class myClass { @Inject Parser parser; public void myMethod() { parser.parser(url); }
код с использованием статических методов
public class myClass { public void myMethod() { Parser.parser(url); }
Не такая большая разница, не так ли? При этом, при использовании DI вы сохраните гибкость, возможность переопределения при Unit тестировании, легкость расширения и т.п.
public static User createWithDefaultCountry(String name, String email) {
return new User(name, email, "Argentina"); }
Статические методы используются вместо конструкторов, чтобы не рефакторить код конструктора, когда нужно значение по умолчанию и тд.
43. Паттерн “Строитель” и его использование большом количестве параметров конструктора
Напишу про паттерн “Строитель” - Давай, одобряю, но выше он уже был)(Ссылка https://habr.com/ru/post/86252/)
Крч, он упрощает ситуацию, вместо трёхкилометрового кода, будет трехкилометровый паттерн, но зато вы можете понтануться им.
 
 Ну вот еще ссылка, но там более сложный случай рассматривется (https://habr.com/ru/company/otus/blog/552412/)
Паттерн проектирования Builder
● Паттерн проектирования Builder разработан для обеспечения гибкого решения различных задач создания объектов в объектно-ориентированном программировании.
● Паттерн проектирования Builder позволяет отделить построение сложного объекта от его представления.
● Паттерн Builder создает сложные объекты, используя простые объекты и поэтапный подход.
● Паттерн предоставляет один из лучших способов создания сложных объектов.
● Это один из паттернов проектирования банды четырех (GoF), которые описывают, как решать периодически возникающие задачи проектирования в объектно-ориентированном программном обеспечении.
● Этот паттерн полезен для создания разных иммутабельных объектов с помощью одного и того же процесса построения объекта.
Паттерн Builder — это паттерн проектирования, который позволяет поэтапно создавать сложные объекты с помощью четко определенной последовательности действий. Строительство контролируется объектом-распорядителем (director), которому нужно знать только тип создаваемого объекта.
Вместо непосредственного создания желаемого объекта, клиент вызывает конструктор (или статическую фабрику) со всеми необходимыми параметрами и получает объект строителя. Затем клиент вызывает сеттер-подобные методы у объекта строителя для установки каждого дополнительного параметра. Наконец, клиент вызывает метод build() для генерации объекта, который будет являться неизменным(immutable). Строитель является статическим внутренним классом в классе, который он строит.
     // паттерн Builder
     public class NutritionFacts {
       private final int servingSize;
       private final int servings;
     
         private final int calories;
       private final int fat;
       private final int sodium;
       private final int carbohydrate;
       public static class Builder {
         // Обязательные параметры
         private final int servingSize;
         private final int servings;
// Дополнительные параметры - инициализируются значениями по умолчанию
         private int calories = 0;
         private int fat = 0;
         private int carbohydrate = 0;
         private int sodium = 0;
         public Builder(int servingSize, int servings) {
           this.servingSize = servingSize;
           this.servings = servings;
}
         public Builder calories(int val) {
           calories = val;
           return this;
}
         public Builder fat(int val) {
           fat = val;
           return this;
}
         public Builder carbohydrate(int val) {
           carbohydrate = val;
           return this;
}
                             
           public Builder sodium(int val) {
           sodium = val;
           return this;
}
         public NutritionFacts build() {
           return new NutritionFacts(this);
}
}
       private NutritionFacts(Builder builder) {
         servingSize = builder.servingSize;
         servings = builder.servings;
         calories = builder.calories;
         fat = builder.fat;
         sodium = builder.sodium;
         carbohydrate = builder.carbohydrate;
} }
44. Понятие dependency injection (внедрение зависимости). Преимущества использования внедрения зависимостей при написании программ на языке Джава. Преимущества этого подхода перед паттерном Одиночка
Внедрение зависимостей — это стиль настройки объекта, при котором поля объекта задаются внешней сущностью. Другими словами, объекты настраиваются внешними объектами. DI — это альтернатива самонастройке объектов
Главный плюс в том, что мы можем рассматривать приложение, как набор сервисов или модулей. Сам по себе код получается чуть компактней и не нужно завязываться на имя класса.
             
 При развитии программ очень часто оказывается, что некоторая сущность, которая ранее присутствовала в 1 экземпляре, требуется в нескольких экземплярах.
Поэтому использованию Singleton предпочитайте dependency injection
45. Преимущество использования try-с-ресурсами по сравнению с использованием try-finally. Интерфейс интерфейса AutoCloseable
При завершении работы с потоком его надо закрыть с помощью метода close(), который определен в интерфейсе Closeable.
При закрытии потока освобождаются все выделенные для него ресурсы, например, файл. В случае, если поток окажется не закрыт, может происходить утечка памяти.
Есть два способа закрытия файла. Первый традиционный заключается в использовании блока try..catch..finally.
Поскольку при открытии или считывании файла может произойти ошибка ввода-вывода, то код считывания помещается в блок try. И чтобы быть уверенным, что поток в любом случае закроется, даже если при работе с ним возникнет ошибка, вызов метода close() помещается в блок finally. И, так как метод close() также в случае ошибки может генерировать исключение IOException, то его вызов также помещается во вложенный блок try..catch
Начиная с Java 7 можно использовать еще один способ, который автоматически вызывает метод close. Этот способ заключается в использовании конструкции try-with-resources (try-с-ресурсами). Данная конструкция работает с объектами, которые реализуют интерфейс AutoCloseable. Так как все классы потоков реализуют интерфейс Closeable,

 который в свою очередь наследуется от AutoCloseable, то их также можно использовать в данной конструкции
Синтаксис конструкции следующий: try(название_класса имя_переменной = конструктор_класса). Данная конструкция также не исключает использования блоков catch.
После окончания работы в блоке try у ресурса (в данном случае у объекта FileInputStream) автоматически вызывается метод close().
Если нам надо использовать несколько потоков, которые после
выполнения надо закрыть, то мы можем указать объекты потоков через точку
с запятой:
try(FileInputStream fin=new FileInputStream("C://SomeDir//Hello.txt");
FileOutputStream fos = new FileOutputStream("C://SomeDir//Hello2.txt"))
      {
          //..................
}
46. Паттерн Декоратор (Decorator) Преимущества его использовании (например композиция по сравнению с наследованием)
Главное отличие декоратора от наследования: декоратор позволяет добавлять функционал к отдельному объекту в рантайме. Наследование добавляет логику только на этапе компиляции и для всех объектов этого типа.
https://javarush.ru/groups/posts/3833-pattern-proektirovanija-dekorator-s-pri merami
Декоратор (англ. Decorator) — структурный шаблон проектирования, предназначенный для динамического подключения дополнительного поведения к объекту. Шаблон Декоратор предоставляет гибкую альтернативу практике создания подклассов с целью расширения функциональности.
    
 Адаптор - частный случай декоратора. Отличие скорее в том, что декоратор может быть масштабнее (содержать в себе много сущностей, в то время как адаптор, как правило, реализует интерфейс для определенного типа). Прокси - противоположность первых двух, т.к. ее задача - быть прозрачной на стыке взаимодействия типов и не менять интерфейс.
 
  47. Преимущества использования списков перед массивами
Массив выигрывает в скорости, однако его предпочтительнее использовать в том случае, когда заранее известно число элементов.
Списки более медленные, однако работать с ними удобнее и проще, дженерики можно применять. Сами по себе являются динамическими. Кроме того возможно изменение подтипа за счет задания через интерфейс, что обеспечивает гибкость (List<String> list = new ArrayList<String>();)
 
 48. Основные системы сборки Gradle и Maven. Использование Gradle и основная терминология. Управление зависимостями в Gradle
Основные используемые системы сборки – Maven и Gradle.
Gradle создан в 2007 году, текущая версия – 7.0.
Gradle использует для конфигурации проекта полноценный язык
программирования; изначально Groovy, с версии 3.0 также поддерживается Kotlin.
Gradle tasks
Как правило, задачи (tasks) создаются плагинами (рекомендуемый способ). Но можно их создавать и вручную:
tasks.register(“hello”) { doLast {
println(“Hello task”)
} }
создает задачу hello, которую можно выполнить: gradlew hello Фазы выполнения
 
 Файлы settings.gradle и build.gradle содержат обычный исполняемый код на языке Groovy (для Kotlin эти файлы должны называться settings.gradle.kts и build.gradle.kts).
Фазы выполнения
При запуске Gradle эти файлы выполняются. Но выполнение идет в три фазы:
• фаза инциализации: выполнение settings.gradle
• фаза конфигурации: при выполнении build.gradle создаются и конфигурируются задачи
• фаза выполнения: запускается указанная при запуске Gradle задача и те задачи, от которых она зависит
Конфигурация проектов
• параметры group и version описывают группу и версию, под которой проект будет публиковаться Если вы планируете использование вашего проекта другими разработчиками, эти параметры нужно указывать
• параметр description – человекочитаемое описание проекта
• sourceCompatibility указывает, какую версию Java использует проект
• options.encoding указывает кодировку исходного кода
Управление зависимостями
Кроме запуска компиляции, Gradle умеет автоматически скачивать нужные для сборки приложения библиотеки. Для этого нужно указать:
• репозиторий, из которого качать библиотеки
(обычно это mavenCentral: https://repo1.maven.org/maven2) • “адрес” библиотеки в виде тройки
• group – группа, в которую входит библиотека • name – имя библиотеки
• version – версия библиотеки

 Проекты Maven в первую очередь определяются файлами объектной модели проекта (POM), написанными в XML. Эти файлы POM.xml содержат зависимости проекта, плагины, свойства и данные конфигурации. Maven использует декларативный подход и имеет предопределенный жизненный цикл.
Maven или Gradle: различия
Некоторые из ключевых различий между Maven и Gradle:
● Язык сценария сборки: сценарий сборки Gradle по своей сути более универсален и эффективен, чем Maven. Это связано с тем, что Gradle основан на языке программирования (Groovy), а Maven — на языке разметки (XML). Предостережение здесь в том, что скрипт сборки Gradle уязвим для ошибок, поскольку он основан на языке программирования.
● Производительность: Gradle реализует такие стратегии, как кэш сборки
и инкрементные компиляции, чтобы обеспечить высокую производительность. Gradle утверждает, что он работает до семи раз быстрее, чем Maven для инкрементных изменений, и в три раза быстрее, когда выходные данные задачи кэшируются. Однако отнеситесь к этому с недоверием. Есть разработчики, которые считают Maven более быстрым из двух.
● Гибкость и простота настройки: скрипт сборки Gradle на основе Groovy предлагает большую гибкость, чем Maven XML. Например, вы можете написать настройки плагина прямо в скрипт сборки Gradle. Gradle также более эффективен, если вы хотите настроить артефакты сборки и структуру проекта. Хотя Maven также обладает широкими возможностями настройки, его конфигурация на основе XML требует нескольких дополнительных шагов для настройки вашей сборки.

 ● Плагины: Maven существует дольше, чем Gradle. По этой причине доступно больше плагинов Maven, и больше крупных поставщиков поддерживают плагины Maven, чем плагины Gradle.
● Управление зависимостями: два инструмента сборки используют разные подходы для разрешения конфликтов зависимостей. Maven следует порядку объявления, а Gradle ссылается на дерево зависимостей.
49. Анатомия jar. Сканирование пакетов
50. Реализация REST API с помощью Spring Framework
Задача веб-сервера – выдать данные для отображения в браузере (обычно в формате JSON). Эти данные обрабатываются отдельным frontend приложением.
  
 REST – стиль взаимодействия клиента с сервером. Обычно он подразумевает запросы и ответы в формате JSON, где адрес запроса содержит информацию о том, что хочет сделать клиент:
• GET /api/books – получить список всех книг
• GET /api/books/11 – получить информацию о книге с id=11 • POST /api/books – создание записи о книге; данные о создаваемой книге передаются в теле запроса
• PUT /api/books/15 – обновление записи о книге с id=15; новые данные о книге передаются в теле запроса
Итого задача серверной части веб-приложения при обработке запроса:
1. Понять, какой запрос пришел (например, запрос /api/books для получения списка всех книг)
2. Обратиться к базе данных (или другому источнику данных) для получения запрошенных данных в виде обычных Java-объектов (в нашем примере списка книг)
3. Сериализовать Java-объекты в формат JSON и отправить в качестве ответа на запрос
Архитектуры реализуем с помощью MVC:
1. Слой представления отвечает за взаимодействие с клиентом: сериализацию/десериализацию JSON, маршрутизацию (routing) – определение, какое действие было запрошено (/api/books или /api/books/{id})
2. Слой бизнес-логики отвечает за логику работы приложения (в простейшем случае просто перенаправление запроса к слою хранения данных)
3. Слой хранения данных отвечает за взаимодействие с базой данных: получение данных из БД и сохранение данных в БД (в случае запроса /api/books – получение из БД списка книг)
Поверх веб-сервера часто используется фреймворк, упрощающий рутинную работу: Например, Spring/Spring Boot

 Spring Boot – расширение Spring Framework, предоставляющее конфигурации для решения стандартных задач, таких как веб-приложения. Включает в себя:
• предустановленный набор библиотек • встроенный веб-сервер
• средства мониторинга приложения
• логика задается аннотациями
Как тестировать REST API?
• встроенный в IntelliJ IDEA клиент HTTP • curl – утилита командной строки
• Postman
51. Понятие Инверсии управления
Инверсия управления - предоставление callback-а в качестве реакции на какие либо события извне, вместо того, чтобы реализовывать логику обработки события на месте.
Инверсия управления (англ. Inversion of Control, IoC) — важный принцип объектно-ориентированного программирования, используемый для уменьшения зацепления (связанности) в компьютерных программах. Также архитектурное решение интеграции, упрощающее расширение возможностей системы, при котором поток управления программы контролируется фреймворком.
Одной из реализаций инверсии управления в применении к управлению зависимостями является внедрение зависимостей (англ. dependency injection)[2][3]. Внедрение зависимости используется во многих фреймворках, которые называются IoC-контейнерами.
Если сравнить с более низкоуровневыми технологиями, IoC-контейнер — это компоновщик, который собирает не объектные файлы, а объекты ООП (экземпляры класса) во время исполнения программы. Очевидно, для реализации подобной идеи было необходимо создать
 
 не только сам компоновщик, но и фабрику, производящую объекты. Аналогом такого компоновщика (естественно, более функциональным) является компилятор, одной из функций которого является создание объектных файлов. В идее компоновки программы во время исполнения нет ничего нового. Предоставление программисту инструментов внедрения зависимостей дало значительно бо́льшую гибкость в разработке и удобство в тестировании
кода[4].
The Inversion-of-Control (IoC) pattern, is about providing any kind of callback (which controls reaction), instead of acting ourself directly (in other words, inversion and/or redirecting control to external handler/controller). The Dependency-Injection (DI) pattern is a more specific version of IoC pattern, and is all about removing dependencies from your code.
Every DI implementation can be considered IoC, but one should not call it IoC, because implementing Dependency-Injection is harder than callback (Don't lower your product's worth by using general term "IoC" instead).
For DI example, say your application has a text-editor component, and you want to provide spell checking. Your standard code would look something like this:
public class TextEditor { private SpellChecker checker; public TextEditor() { this.checker = new SpellChecker(); } }
What we've done here creates a dependency between the TextEditor and the SpellChecker. In an IoC scenario we would instead do something like this:
public class TextEditor { private IocSpellChecker checker; public TextEditor(IocSpellChecker checker) { this.checker = checker; } }
In the first code example we are instantiating SpellChecker (this.checker = new SpellChecker();), which means the TextEditor class directly depends on the SpellChecker class.
In the second code example we are creating an abstraction by having the SpellChecker dependency class in TextEditor's constructor signature (not initializing dependency in class). This allows us to call the dependency then pass it to the TextEditor class like so:
SpellChecker sc = new SpellChecker(); // dependency TextEditor textEditor = new TextEditor(sc);
Now the client creating the TextEditor class has control over which SpellChecker implementation to use because we're injecting the dependency into the TextEditor signature.
class TodoService {
TodoRepository todoRepsitory; TodoService(TodoRepository todoRepository) {

 this.todoRepository = todoRepository; }
}
class Application {
public static void main(String[] args) {
TodoRepository todoRepository = new TodoRepository();
TodoService todoService = new TodoService(todoRepository); }
}
52. Spring Boot и его использование
В чем разница между Spring и Spring Boot?
Как отмечено выше, Spring — это платформа приложений на основе Java с открытым кодом, которая охватывает множество небольших проектов. К таким проектам Spring, помимо прочего, относятся Spring Data, Spring Cloud и Spring Security. Чтобы понять разницу между Spring Boot и Spring, важно знать, что, несмотря на различия в основных возможностях, они входят в семейство Spring.
Иными словами, Spring - Платформа веб-приложений с открытым кодом на Java, а Spring Boot - расширение/модуль, созданный на платформе Spring.
Spring boot Предоставляет возможность создавать автономные приложения Spring, которые можно запускать сразу же без заметок, конфигурации XML и написания больших объемов дополнительного кода.
Используйте Spring Boot, когда захотите:
● Простота использования
● Подход на основе рекомендаций*.
● Для быстрого создания качественных приложений и сокращения времени разработки.
● Отказ от необходимости писать шаблонный код и настраивать XML.
● Разработка API REST.
Spring Boot удобен для написания микросервисов.
 
 Spring Boot Берет на себя все рутинные действия по созданию Spring-приложений и ускоряет вашу работу настолько, насколько это возможно.
53. Работа с базами данных в джава приложениях. Встроенные СУБД для Джава приложений.
JDBC в своей основе имеет концепцию драйверов. Driver позволяет получать соединение (getconnection) с БД. Для реализации поставленной задачи задействуют специальные URL-адреса. Драйверы заключаются динамически (тогда, когда используемая утилита функционирует). Алгоритм «активации» будет следующим:
1. Происходит загрузка софта.
2. Драйвер инициализируется и загружается.
3. Осуществляется самостоятельная регистрация drivers.
4. Вызов производится «автоматом». Это происходит тогда, когда
используемое приложение требует URL с протоколом, за который отвечают драйверы.
JDBC использует экземпляры классов java.sql. После того, как это было сделано, происходит передача тех или иных команд для корректировки информации. JDBC посредством драйверов взаимодействует с СУБД и выводит тот или иной результат.

 JDBC работает с «электронными хранилищами информации» через специальные запросы. О них необходимо знать каждому потенциальному разработчику до того, как будет рассмотрен образец применения БД на практике в приложении.
Загрузка драйвера в память производится так: class.ForName ( «com.mysql.jdbc.Driver»);. Далее происходит установка соединения с имеющимся хранилищем. Для этого используют команду Connection Connection cn = DriverManager.getConnection( “jdbc:mysql://localhost/my_db”, “login”, “password”);. Для URL применяется следующий шаблон:
jdbc: <название_драйвера>Ж [//хост[: порт/]] <название подключаемой базы данных>
После установления connections происходит import java information. Система получает запрос и создает специальный объект для его последующей передачи. Завершающий этап работы JDBC – это закрытие всех имеющихся соединений.

  Клиент-серверные СУБД (системы управления базами данных):
• PostgreSQL
• Oracle
• MySQL
• Microsoft SQL Server
Встроенные СУБД: • H2
• Apache Derby
54. Реляционные СУБД для приложениями. Пакет java.sql и его классы
работы с
джава
Реляционная база данных — это набор таблиц, между которыми установлены определенные взаимосвязи. Для обслуживания реляционной базы данных и создания запросов к ней система управления базой данных использует язык структурированных запросов (Structured Query Language, SQL) — обычное пользовательское приложение, предоставляющее простой интерфейс программирования для взаимодействия с базой данных.

 Реляционные базы данных состоят из строк, называемых кортежами, и столбцов, называемых атрибутами.
  
 55. Роль интерфейса JDBC для работы с джава приложениями
JDBC создает прослойку между Java приложением и драйвером базы данных. JDBC позволяет устанавливать соединение с источником данных, отправлять запросы и операторы обновления, а также обрабатывать результаты. Проще говоря, JDBC позволяет делать в Java-приложении следующие вещи: Устанавливать соединение с источником данных. Отправляйте запросы и операторы обновления в источник данных.
Получается, что программисту не важно, какая реализация находится под капотом JDBC Driver Manager - приложение работает через интерфейс JDBC и никак не зависит от драйвера.
56. Основные компоненты JDBC API
  
 57. JDBC URL и его использование
 58. Работа JDBC драйвера
 
 59. В чем заключается роль DI в Spring. Использования ServiceLoader
Dependency Injection (DI) — это шаблон разработки программного обеспечения, который реализует инверсию управления для разрешения зависимостей. Инъекция — это передача зависимости зависимому объекту, который будет ее использовать. DI — это процесс, посредством которого объекты определяют свои зависимости.
 60. Интерфейс Connection. Пулы соединений
Интерфейс Connection описывает активное соединение с БД (в случае клиент-серверной БД – это сетевое соединение).
public class BookRepository { public List getAllBooks() {
try (Connection connection = ???) { }
} }
Плохие варианты работы с соединением:

 1. Открывать соединение каждый раз в методах BookRepository: Connection connection = DriverManager.getConnection("...") Соединение открывается медленно (порядка 0.1 секунд). Наше приложение не будет справляться с большой нагрузкой
2. Держать Connection в поле BookRepository. Как правило, только один поток может одновременно работать с одним соединением. Хотя соединения обычно потокобезопасны, но это достигается с помощью синхронизации. Поэтому при большом количестве параллельных запросов к BookRepository только один из них будет работать, остальные будут ждать.
Поэтому используются пулы соединений (по аналогии с пулами потоков). Например, пул с максимальным количеством соединений = 20 позволяет параллельно работать с БД 20 потокам. При этом соединения не закрываются, а по возможности переиспользуются.
Есть несколько реализаций пулов соединений: • HikariCP
• Apache Commons DBCP • C3PO
 
 61. Принципы SOLID и их использование на Джава
SOLID
SOLID (сокр. от англ. single responsibility, open–closed, Liskov substitution, interface segregation и dependency inversion) в программировании — мнемонический акроним, введённый Майклом Фэзерсом (Michael Feathers) для первых пяти принципов, названных
Робертом Мартином[1][2] в начале 2000-х[3], которые означали 5 основных принципов объектно-ориентированного программирования и проектирования.
S (принцип единой ответственности) - (single responsibility principle) Для каждого класса должно быть определено единственное назначение. Все ресурсы, необходимые для его осуществления, должны быть инкапсулированы в этот класс и подчинены только этой задаче.
O(принцип открытости/закрытости) - (open-closed principle) «программные сущности ... должны быть открыты для расширения, но закрыты для модификации».
L(принцип подстановки Лисков) - (Liskov substitution principle) «функции, которые используют базовый тип, должны иметь возможность использовать подтипы базового типа не зная об этом».
I(принцип разделение интерфейсов) - (interface segregation principle) «много интерфейсов, специально предназначенных для клиентов, лучше, чем один интерфейс общего назначения».
D(принцип инверсии зависимостей) - (dependency inversion principle) «Зависимость на Абстракциях. Нет зависимости на что-то конкретное»
*Тут нужно написать про использование SOLID в Java*

 Примеры задач
3. Опишите паттерн синглтон, приведите пример реализации

 
 
 4. Опишите паттерн фабрика, приведите пример реализации
// aka abstract product
interface $ { int $(); }
// aka specific products
class A implements $ { @Override public int $() { return 0; } } class B implements $ { @Override public int $() { return 1; } } class C implements $ { @Override public int $() { return 2; } }
enum D { AA, BB, CC; }
// Factory producing specific products either with reflection or by hand
public class F {
public static <T extends $> T get(Class<T> a)
throws Exception { return a.newInstance(); }
public static $ get(D a) { return switch (a) { case AA -> new A();
case BB -> new B();
case CC -> new C();
default -> throw new RuntimeException("stub"); }; }
public static void main(String... $$) throws Exception { int a = get(A.class).$(),
            b = get(B.class).$(),
            c = get(C.class).$();
assert a == get(D.AA).$() && a == 0; assert b == get(D.BB).$() && b == 1; assert c == get(D.CC).$() && c == 2;
System.out.println("" +
a + ' ' + b +' ' + c
); // 0 1 2 }
}

 
 
  5. Опишите паттерн стратегия, приведите пример реализации
смотреть вопрос 6
abstract class OnDeleteStrategy { abstract void onDelete(); } class CascadeOnDeleteStrategy extends OnDeleteStrategy
{ @Override public void onDelete() { /*smth*/ } }
class KeepOthersOnDeleteStrategy extends OnDeleteStrategy
{ @Override public void onDelete() { /*another smth*/ } } public class A {
public static void main(String... $) {
final OnDeleteStrategy strategyToBeUsedWhenDeletingSmth
= new CascadeOnDeleteStrategy(); // ...
        strategyToBeUsedWhenDeletingSmth.onDelete();
// ...
} }
6. Опишите паттерн строитель, приведите пример реализации

 смотреть вопрос 12
import static java.lang.String.valueOf;
// smth buildable
class A {
// some fields
int a; int b; int c; A(int d, int e, int f)
    { a = d; b = e; c = f; }
// for debug
@Override public String toString() { return valueOf(a) + ' ' +
valueOf(b) + ' ' +
valueOf(c);
}
// builder
static class B { int a = 0; int b = 0; int c = 0;
        // aka setters
B a(int _a) { a = _a; return this; } B b(int _b) { b = _b; return this; } B c(int _c) { c = _c; return this; }
// build
A $() { return new A(a, b, c); } }
}
// smth using buildable through the builder
public class C {
public static void main(String... $) { System.out.println(new A.B().a(0).b(1).c(2).$()); // 0 1 2
System.out.println(new A.B().a(6).b(7).c(8).$()); // 6 7 8
} }

 
 7. Опишите паттерн абстрактная фабрика, приведите пример реализации
Абстрактная фабрика (англ. Abstract factory) — порождающий шаблон проектирования, предоставляет интерфейс для создания семейств взаимосвязанных или взаимозависимых объектов, не специфицируя их конкретных классов. Шаблон реализуется созданием абстрактного класса Factory, который представляет собой интерфейс для создания компонентов системы (например, для оконного интерфейса он может создавать окна и
кнопки). Затем пишутся классы, реализующие этот интерфейс[2].

   
 
  8. Опишите паттерн адаптер, его отличие от декоратора, приведите пример реализации
Адаптер (англ. Adapter) — структурный шаблон проектирования, предназначенный для организации использования функций объекта, недоступного для модификации, через специально созданный интерфейс. Другими словами — это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе.

  
  
  
  А ниче что тут (в примере выше ~~~^) вместо завтра получаем прокладку, вместо ланча трубу, а вместо ужина гайку? Вот клиент то порадуется... На следующий день все звезды у ресторана отнимут
Попроще пример

    
 9. Опишите паттерн декоратор, его отличие от адаптера, приведите пример реализации
Декоратор (англ. Decorator) — структурный шаблон проектирования, предназначенный для динамического подключения дополнительного поведения к объекту. Шаблон Декоратор предоставляет гибкую альтернативу практике создания подклассов с целью расширения функциональности.
Адаптер - частный случай декоратора. Отличие скорее в том, что декоратор может быть масштабнее (содержать в себе много сущностей, в то время как адаптор, как правило, реализует интерфейс для определенного типа). Прокси - противоположность первых двух, т.к. ее задача - быть прозрачной на стыке взаимодействия типов и не менять интерфейс.

  
  10. Опишите паттерн фасад, приведите пример реализации
Шаблон фасад (англ. Facade) — структурный шаблон проектирования, позволяющий скрыть сложность системы путём сведения всех возможных внешних вызовов к одному объекту, делегирующему их соответствующим объектам системы.

  
  // one of possible Facade pattern implementations
// from the real world
// Facade hiding the true logic
public interface Context { // ...
SharedPreferences getSharedPreferences();
// ...
}
// Wrapper delegating all calls to the hidden implementation
class ContextWrapper implements Context {
private Context delegate;
// ...
public ContextWrapper(Context a) { delegate = a; } //...
@Override public SharedPreferences
getSharedPreferences() { return delegate.getSharedPreferences(); } }
// Implementation whose logic is needed to be hidden
class ContextImpl implements Context { private SharedPreferences sp;
// ...
@Override public SharedPreferences getSharedPreferences() { /*true logic*/ } // ...
}
// and the implementation is injected by reflection
`;function Df(e){return e.replace(/[^a-zA-Zа-яА-ЯёЁ]/g,"").toLowerCase()}function Af(e){const t=[],n=e.split(/\d+. /).slice(1);for(const r of n){const[l,i]=r.replace(`
`,"DELETE").split("DELETE");t.push({[l]:i})}return t}function Mf(){const[e,t]=qe.useState(!1),[n,r]=qe.useState(),[l,i]=qe.useState(""),[o,u]=qe.useState("rus");qe.useEffect(()=>{r(Af(If))},[]);function a(m){const p=m.target;p.tagName==="LI"&&("vibrate"in navigator&&navigator.vibrate(200),p.className==="but"&&i(y=>y+p.innerHTML),p.className==="language"&&u(y=>y==="rus"?"eng":"rus"))}function c(){i(m=>m.slice(0,-1))}function h(){document.querySelectorAll("h1").forEach(p=>{Df(p.innerHTML).includes(l.toLowerCase())&&p.scrollIntoView()}),i(""),t(!1)}return n?S.jsxs(S.Fragment,{children:[e&&S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"input_div",children:l}),S.jsx("img",{className:"delete",src:zf,alt:"delete",onClick:c}),S.jsxs("ul",{className:"wrapper",onClick:m=>a(m),children:[o==="rus"?S.jsxs(S.Fragment,{children:[S.jsx("li",{className:"but",children:"A"}),S.jsx("li",{className:"but",children:"Б"}),S.jsx("li",{className:"but",children:"В"}),S.jsx("li",{className:"but",children:"Г"}),S.jsx("li",{className:"but",children:"Д"}),S.jsx("li",{className:"but",children:"Е"}),S.jsx("li",{className:"but",children:"Ё"}),S.jsx("li",{className:"but",children:"Ж"}),S.jsx("li",{className:"but",children:"З"}),S.jsx("li",{className:"but",children:"И"}),S.jsx("li",{className:"but",children:"Й"}),S.jsx("li",{className:"but",children:"К"}),S.jsx("li",{className:"but",children:"Л"}),S.jsx("li",{className:"but",children:"М"}),S.jsx("li",{className:"but",children:"Н"}),S.jsx("li",{className:"but",children:"О"}),S.jsx("li",{className:"but",children:"П"}),S.jsx("li",{className:"but",children:"Р"}),S.jsx("li",{className:"but",children:"С"}),S.jsx("li",{className:"but",children:"Т"}),S.jsx("li",{className:"but",children:"У"}),S.jsx("li",{className:"but",children:"Ф"}),S.jsx("li",{className:"but",children:"Х"}),S.jsx("li",{className:"but",children:"Ц"}),S.jsx("li",{className:"but",children:"Ч"}),S.jsx("li",{className:"but",children:"Ш"}),S.jsx("li",{className:"but",children:"Щ"}),S.jsx("li",{className:"but",children:"Ы"}),S.jsx("li",{className:"but",children:"Ъ"}),S.jsx("li",{className:"but",children:"Э"}),S.jsx("li",{className:"but",children:"Ь"}),S.jsx("li",{className:"but",children:"Ю"}),S.jsx("li",{className:"but",children:"Я"})]}):S.jsxs(S.Fragment,{children:[S.jsx("li",{className:"but",children:"A"}),S.jsx("li",{className:"but",children:"B"}),S.jsx("li",{className:"but",children:"C"}),S.jsx("li",{className:"but",children:"D"}),S.jsx("li",{className:"but",children:"E"}),S.jsx("li",{className:"but",children:"F"}),S.jsx("li",{className:"but",children:"G"}),S.jsx("li",{className:"but",children:"H"}),S.jsx("li",{className:"but",children:"I"}),S.jsx("li",{className:"but",children:"J"}),S.jsx("li",{className:"but",children:"K"}),S.jsx("li",{className:"but",children:"L"}),S.jsx("li",{className:"but",children:"M"}),S.jsx("li",{className:"but",children:"N"}),S.jsx("li",{className:"but",children:"O"}),S.jsx("li",{className:"but",children:"P"}),S.jsx("li",{className:"but",children:"Q"}),S.jsx("li",{className:"but",children:"R"}),S.jsx("li",{className:"but",children:"S"}),S.jsx("li",{className:"but",children:"T"}),S.jsx("li",{className:"but",children:"U"}),S.jsx("li",{className:"but",children:"V"}),S.jsx("li",{className:"but",children:"W"}),S.jsx("li",{className:"but",children:"X"}),S.jsx("li",{className:"but",children:"Y"}),S.jsx("li",{className:"but",children:"Z"})]}),S.jsx("li",{className:"language",children:"@"}),S.jsx("button",{className:"enter",onClick:h,children:"найти"})]})]}),e===!1&&S.jsx("div",{onClick:()=>t(!0),className:"open_input",children:"открыть ввод"}),S.jsx("div",{className:"main_info",children:n.map((m,p)=>{const[y,w]=Object.entries(m)[0];return S.jsxs("article",{children:[S.jsx("h1",{children:y}),S.jsx("pre",{children:w})]},p)})})]}):S.jsx("div",{children:"Нет информации"})}Wl.createRoot(document.getElementById("root")).render(S.jsx(yc.StrictMode,{children:S.jsx(Mf,{})}));
