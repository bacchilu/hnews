!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequiref4b0;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequiref4b0=a),a.register("2nacn",(function(t,n){var r,i,o;e(t.exports,"Fragment",(function(){return r}),(function(e){return r=e})),e(t.exports,"jsx",(function(){return i}),(function(e){return i=e})),e(t.exports,"jsxs",(function(){return o}),(function(e){return o=e}));var s=a("jE8J5"),l=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,n){var r,i={},a=null,o=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(o=t.ref),t)c.call(t,r)&&!f.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:l,type:e,key:a,ref:o,props:i,_owner:d.current}}r=u,i=h,o=h})),a.register("jE8J5",(function(e,t){"use strict";e.exports=a("gxKzV")})),a.register("gxKzV",(function(t,n){var r,i,a,o,s,l,u,c,d,f,h,p,m,g,v,y,b,w,k,_,S,E,I,x,C,T,N,P,R,O,L,D,A,M,j;e(t.exports,"Children",(function(){return r}),(function(e){return r=e})),e(t.exports,"Component",(function(){return i}),(function(e){return i=e})),e(t.exports,"Fragment",(function(){return a}),(function(e){return a=e})),e(t.exports,"Profiler",(function(){return o}),(function(e){return o=e})),e(t.exports,"PureComponent",(function(){return s}),(function(e){return s=e})),e(t.exports,"StrictMode",(function(){return l}),(function(e){return l=e})),e(t.exports,"Suspense",(function(){return u}),(function(e){return u=e})),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(function(){return c}),(function(e){return c=e})),e(t.exports,"cloneElement",(function(){return d}),(function(e){return d=e})),e(t.exports,"createContext",(function(){return f}),(function(e){return f=e})),e(t.exports,"createElement",(function(){return h}),(function(e){return h=e})),e(t.exports,"createFactory",(function(){return p}),(function(e){return p=e})),e(t.exports,"createRef",(function(){return m}),(function(e){return m=e})),e(t.exports,"forwardRef",(function(){return g}),(function(e){return g=e})),e(t.exports,"isValidElement",(function(){return v}),(function(e){return v=e})),e(t.exports,"lazy",(function(){return y}),(function(e){return y=e})),e(t.exports,"memo",(function(){return b}),(function(e){return b=e})),e(t.exports,"startTransition",(function(){return w}),(function(e){return w=e})),e(t.exports,"unstable_act",(function(){return k}),(function(e){return k=e})),e(t.exports,"useCallback",(function(){return _}),(function(e){return _=e})),e(t.exports,"useContext",(function(){return S}),(function(e){return S=e})),e(t.exports,"useDebugValue",(function(){return E}),(function(e){return E=e})),e(t.exports,"useDeferredValue",(function(){return I}),(function(e){return I=e})),e(t.exports,"useEffect",(function(){return x}),(function(e){return x=e})),e(t.exports,"useId",(function(){return C}),(function(e){return C=e})),e(t.exports,"useImperativeHandle",(function(){return T}),(function(e){return T=e})),e(t.exports,"useInsertionEffect",(function(){return N}),(function(e){return N=e})),e(t.exports,"useLayoutEffect",(function(){return P}),(function(e){return P=e})),e(t.exports,"useMemo",(function(){return R}),(function(e){return R=e})),e(t.exports,"useReducer",(function(){return O}),(function(e){return O=e})),e(t.exports,"useRef",(function(){return L}),(function(e){return L=e})),e(t.exports,"useState",(function(){return D}),(function(e){return D=e})),e(t.exports,"useSyncExternalStore",(function(){return A}),(function(e){return A=e})),e(t.exports,"useTransition",(function(){return M}),(function(e){return M=e})),e(t.exports,"version",(function(){return j}),(function(e){return j=e}));var U=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),Q=Symbol.iterator;var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,X={};function Z(e,t,n){this.props=e,this.context=t,this.refs=X,this.updater=n||G}function ee(){}function te(e,t,n){this.props=e,this.context=t,this.refs=X,this.updater=n||G}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var ne=te.prototype=new ee;ne.constructor=te,Y(ne,Z.prototype),ne.isPureReactComponent=!0;var re=Array.isArray,ie=Object.prototype.hasOwnProperty,ae={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function se(e,t,n){var r,i={},a=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(a=""+t.key),t)ie.call(t,r)&&!oe.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:U,type:e,key:a,ref:o,props:i,_owner:ae.current}}function le(e){return"object"==typeof e&&null!==e&&e.$$typeof===U}var ue=/\/+/g;function ce(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function de(e,t,n,r,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var o=!1;if(null===e)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case U:case z:o=!0}}if(o)return i=i(o=e),e=""===r?"."+ce(o,0):r,re(i)?(n="",null!=e&&(n=e.replace(ue,"$&/")+"/"),de(i,t,n,"",(function(e){return e}))):null!=i&&(le(i)&&(i=function(e,t){return{$$typeof:U,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ue,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=""===r?".":r+":",re(e))for(var s=0;s<e.length;s++){var l=r+ce(a=e[s],s);o+=de(a,t,n,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Q&&e[Q]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(a=e.next()).done;)o+=de(a=a.value,t,n,l=r+ce(a,s++),i);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function fe(e,t,n){if(null==e)return e;var r=[],i=0;return de(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function he(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var pe={current:null},me={transition:null};r={map:fe,forEach:function(e,t,n){fe(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return fe(e,(function(){t++})),t},toArray:function(e){return fe(e,(function(e){return e}))||[]},only:function(e){if(!le(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i=Z,a=F,o=$,s=te,l=V,u=q,c={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:me,ReactCurrentOwner:ae},d=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Y({},e.props),i=e.key,a=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,o=ae.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ie.call(t,l)&&!oe.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:U,type:e.type,key:i,ref:a,props:r,_owner:o}},f=function(e){return(e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:B,_context:e},e.Consumer=e},h=se,p=function(e){var t=se.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:W,render:e}},v=le,y=function(e){return{$$typeof:J,_payload:{_status:-1,_result:e},_init:he}},b=function(e,t){return{$$typeof:K,type:e,compare:void 0===t?null:t}},w=function(e){var t=me.transition;me.transition={};try{e()}finally{me.transition=t}},k=function(){throw Error("act(...) is not supported in production builds of React.")},_=function(e,t){return pe.current.useCallback(e,t)},S=function(e){return pe.current.useContext(e)},E=function(){},I=function(e){return pe.current.useDeferredValue(e)},x=function(e,t){return pe.current.useEffect(e,t)},C=function(){return pe.current.useId()},T=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)},N=function(e,t){return pe.current.useInsertionEffect(e,t)},P=function(e,t){return pe.current.useLayoutEffect(e,t)},R=function(e,t){return pe.current.useMemo(e,t)},O=function(e,t,n){return pe.current.useReducer(e,t,n)},L=function(e){return pe.current.useRef(e)},D=function(e){return pe.current.useState(e)},A=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)},M=function(){return pe.current.useTransition()},j="18.2.0"})),a.register("2wM5b",(function(t,n){var r,i,o,s,l,u,c,d,f,h,p,m;e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(function(){return r}),(function(e){return r=e})),e(t.exports,"createPortal",(function(){return i}),(function(e){return i=e})),e(t.exports,"createRoot",(function(){return o}),(function(e){return o=e})),e(t.exports,"findDOMNode",(function(){return s}),(function(e){return s=e})),e(t.exports,"flushSync",(function(){return l}),(function(e){return l=e})),e(t.exports,"hydrate",(function(){return u}),(function(e){return u=e})),e(t.exports,"hydrateRoot",(function(){return c}),(function(e){return c=e})),e(t.exports,"render",(function(){return d}),(function(e){return d=e})),e(t.exports,"unmountComponentAtNode",(function(){return f}),(function(e){return f=e})),e(t.exports,"unstable_batchedUpdates",(function(){return h}),(function(e){return h=e})),e(t.exports,"unstable_renderSubtreeIntoContainer",(function(){return p}),(function(e){return p=e})),e(t.exports,"version",(function(){return m}),(function(e){return m=e}));var g=a("jE8J5"),v=a("hnwcm");function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b=new Set,w={};function k(e,t){_(e,t),_(e+"Capture",t)}function _(e,t){for(w[e]=t,e=0;e<t.length;e++)b.add(t[e])}var S=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),E=Object.prototype.hasOwnProperty,I=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},C={};function T(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){N[e]=new T(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];N[t]=new T(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){N[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){N[e]=new T(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){N[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){N[e]=new T(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){N[e]=new T(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){N[e]=new T(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){N[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)}));var P=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}function O(e,t,n,r){var i=N.hasOwnProperty(t)?N[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!E.call(C,e)||!E.call(x,e)&&(I.test(e)?C[e]=!0:(x[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(P,R);N[t]=new T(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(P,R);N[t]=new T(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(P,R);N[t]=new T(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){N[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)})),N.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){N[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)}));var L=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),A=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),F=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),W=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var q=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var K=Symbol.iterator;function J(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=K&&e[K]||e["@@iterator"])?e:null}var Q,G=Object.assign;function Y(e){if(void 0===Q)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Q=t&&t[1]||""}return"\n"+Q+e}var X=!1;function Z(e,t){if(!e||X)return"";X=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do{if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{X=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Y(e):""}function ee(e){switch(e.tag){case 5:return Y(e.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1);case 11:return e=Z(e.type.render,!1);case 1:return e=Z(e.type,!0);default:return""}}function te(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case M:return"Fragment";case A:return"Portal";case U:return"Profiler";case j:return"StrictMode";case $:return"Suspense";case B:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case F:return(e.displayName||"Context")+".Consumer";case z:return(e._context.displayName||"Context")+".Provider";case V:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case H:return null!==(t=e.displayName||null)?t:te(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return te(e(t))}catch(e){}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ae(e){e._valueTracker||(e._valueTracker=function(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function oe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function se(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function le(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ue(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=re(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ce(e,t){null!=(t=t.checked)&&O(e,"checked",t,!1)}function de(e,t){ce(e,t);var n=re(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?he(e,t.type,n):t.hasOwnProperty("defaultValue")&&he(e,t.type,re(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function fe(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function he(e,t,n){"number"===t&&se(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pe=Array.isArray;function me(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+re(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ge(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(y(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ve(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(y(92));if(pe(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:re(n)}}function ye(e,t){var n=re(t.value),r=re(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function be(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function we(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ke(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?we(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var _e,Se,Ee=(Se=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((_e=_e||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_e.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return Se(e,t)}))}:Se);function Ie(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];function Te(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||xe.hasOwnProperty(e)&&xe[e]?(""+t).trim():t+"px"}function Ne(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=Te(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(xe).forEach((function(e){Ce.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xe[t]=xe[e]}))}));var Pe=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Re(e,t){if(t){if(Pe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(y(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(y(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(y(62))}}function Oe(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function De(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ae=null,Me=null,je=null;function Ue(e){if(e=Oi(e)){if("function"!=typeof Ae)throw Error(y(280));var t=e.stateNode;t&&(t=Di(t),Ae(e.stateNode,e.type,t))}}function ze(e){Me?je?je.push(e):je=[e]:Me=e}function Fe(){if(Me){var e=Me,t=je;if(je=Me=null,Ue(e),t)for(e=0;e<t.length;e++)Ue(t[e])}}function Ve(e,t){return e(t)}function $e(){}var Be=!1;function He(e,t,n){if(Be)return e(t,n);Be=!0;try{return Ve(e,t,n)}finally{Be=!1,(null!==Me||null!==je)&&($e(),Fe())}}function We(e,t){var n=e.stateNode;if(null===n)return null;var r=Di(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(y(231,t,typeof n));return n}var qe=!1;if(S)try{var Ke={};Object.defineProperty(Ke,"passive",{get:function(){qe=!0}}),window.addEventListener("test",Ke,Ke),window.removeEventListener("test",Ke,Ke)}catch(Se){qe=!1}function Je(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var Qe=!1,Ge=null,Ye=!1,Xe=null,Ze={onError:function(e){Qe=!0,Ge=e}};function et(e,t,n,r,i,a,o,s,l){Qe=!1,Ge=null,Je.apply(Ze,arguments)}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function nt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function rt(e){if(tt(e)!==e)throw Error(y(188))}function it(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=tt(e)))throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return rt(i),e;if(a===r)return rt(i),t;a=a.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(3!==n.tag)throw Error(y(188));return n.stateNode.current===n?e:t}(e))?at(e):null}function at(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=at(e);if(null!==t)return t;e=e.sibling}return null}var ot=v.unstable_scheduleCallback,st=v.unstable_cancelCallback,lt=v.unstable_shouldYield,ut=v.unstable_requestPaint,ct=v.unstable_now,dt=v.unstable_getCurrentPriorityLevel,ft=v.unstable_ImmediatePriority,ht=v.unstable_UserBlockingPriority,pt=v.unstable_NormalPriority,mt=v.unstable_LowPriority,gt=v.unstable_IdlePriority,vt=null,yt=null;var bt=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(wt(e)/kt|0)|0},wt=Math.log,kt=Math.LN2;var _t=64,St=4194304;function Et(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function It(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~i;0!==s?r=Et(s):0!==(a&=o)&&(r=Et(a))}else 0!==(o=n&~i)?r=Et(o):0!==a&&(r=Et(a));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&0!=(4194240&a)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-bt(t)),r|=e[n],t&=~i;return r}function xt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ct(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Tt(){var e=_t;return 0==(4194240&(_t<<=1))&&(_t=64),e}function Nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-bt(t)]=n}function Rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ot=0;function Lt(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var Dt,At,Mt,jt,Ut,zt=!1,Ft=[],Vt=null,$t=null,Bt=null,Ht=new Map,Wt=new Map,qt=[],Kt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jt(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Ht.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wt.delete(t.pointerId)}}function Qt(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=Oi(t))&&At(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Gt(e){var t=Ri(e.target);if(null!==t){var n=tt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=nt(n)))return e.blockedOn=t,void Ut(e.priority,(function(){Mt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Yt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=un(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=Oi(n))&&At(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Le=r,n.target.dispatchEvent(r),Le=null,t.shift()}return!0}function Xt(e,t,n){Yt(e)&&n.delete(t)}function Zt(){zt=!1,null!==Vt&&Yt(Vt)&&(Vt=null),null!==$t&&Yt($t)&&($t=null),null!==Bt&&Yt(Bt)&&(Bt=null),Ht.forEach(Xt),Wt.forEach(Xt)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,zt||(zt=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,Zt)))}function tn(e){function t(t){return en(t,e)}if(0<Ft.length){en(Ft[0],e);for(var n=1;n<Ft.length;n++){var r=Ft[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Vt&&en(Vt,e),null!==$t&&en($t,e),null!==Bt&&en(Bt,e),Ht.forEach(t),Wt.forEach(t),n=0;n<qt.length;n++)(r=qt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&null===(n=qt[0]).blockedOn;)Gt(n),null===n.blockedOn&&qt.shift()}var nn=L.ReactCurrentBatchConfig,rn=!0;function an(e,t,n,r){var i=Ot,a=nn.transition;nn.transition=null;try{Ot=1,sn(e,t,n,r)}finally{Ot=i,nn.transition=a}}function on(e,t,n,r){var i=Ot,a=nn.transition;nn.transition=null;try{Ot=4,sn(e,t,n,r)}finally{Ot=i,nn.transition=a}}function sn(e,t,n,r){if(rn){var i=un(e,t,n,r);if(null===i)ri(e,t,r,ln,n),Jt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Vt=Qt(Vt,e,t,n,r,i),!0;case"dragenter":return $t=Qt($t,e,t,n,r,i),!0;case"mouseover":return Bt=Qt(Bt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Ht.set(a,Qt(Ht.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Wt.set(a,Qt(Wt.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Jt(e,r),4&t&&-1<Kt.indexOf(e)){for(;null!==i;){var a=Oi(i);if(null!==a&&Dt(a),null===(a=un(e,t,n,r))&&ri(e,t,r,ln,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else ri(e,t,r,null,n)}}var ln=null;function un(e,t,n,r){if(ln=null,null!==(e=Ri(e=De(r))))if(null===(t=tt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=nt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ln=e,null}function cn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dt()){case ft:return 1;case ht:return 4;case pt:case mt:return 16;case gt:return 536870912;default:return 16}default:return 16}}var dn=null,fn=null,hn=null;function pn(){if(hn)return hn;var e,t,n=fn,r=n.length,i="value"in dn?dn.value:dn.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return hn=i.slice(e,1<t?1-t:void 0)}function mn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function gn(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?gn:vn,this.isPropagationStopped=vn,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var bn,wn,kn,_n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=yn(_n),En=G({},_n,{view:0,detail:0}),In=yn(En),xn=G({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&"mousemove"===e.type?(bn=e.screenX-kn.screenX,wn=e.screenY-kn.screenY):wn=bn=0,kn=e),bn)},movementY:function(e){return"movementY"in e?e.movementY:wn}}),Cn=yn(xn),Tn=yn(G({},xn,{dataTransfer:0})),Nn=yn(G({},En,{relatedTarget:0})),Pn=yn(G({},_n,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=G({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),On=yn(Rn),Ln=yn(G({},_n,{data:0})),Dn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},An={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Mn[e])&&!!t[e]}function Un(){return jn}var zn=G({},En,{key:function(e){if(e.key){var t=Dn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=mn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?An[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return"keypress"===e.type?mn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?mn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Fn=yn(zn),Vn=yn(G({},xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),$n=yn(G({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),Bn=yn(G({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0})),Hn=G({},xn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wn=yn(Hn),qn=[9,13,27,32],Kn=S&&"CompositionEvent"in window,Jn=null;S&&"documentMode"in document&&(Jn=document.documentMode);var Qn=S&&"TextEvent"in window&&!Jn,Gn=S&&(!Kn||Jn&&8<Jn&&11>=Jn),Yn=String.fromCharCode(32),Xn=!1;function Zn(e,t){switch(e){case"keyup":return-1!==qn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function er(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var tr=!1;var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nr[e.type]:"textarea"===t}function ir(e,t,n,r){ze(r),0<(t=ai(t,"onChange")).length&&(n=new Sn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ar=null,or=null;function sr(e){Yr(e,0)}function lr(e){if(oe(Li(e)))return e}function ur(e,t){if("change"===e)return t}var cr=!1;if(S){var dr;if(S){var fr="oninput"in document;if(!fr){var hr=document.createElement("div");hr.setAttribute("oninput","return;"),fr="function"==typeof hr.oninput}dr=fr}else dr=!1;cr=dr&&(!document.documentMode||9<document.documentMode)}function pr(){ar&&(ar.detachEvent("onpropertychange",mr),or=ar=null)}function mr(e){if("value"===e.propertyName&&lr(or)){var t=[];ir(t,or,e,De(e)),He(sr,t)}}function gr(e,t,n){"focusin"===e?(pr(),or=n,(ar=t).attachEvent("onpropertychange",mr)):"focusout"===e&&pr()}function vr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return lr(or)}function yr(e,t){if("click"===e)return lr(t)}function br(e,t){if("input"===e||"change"===e)return lr(t)}var wr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function kr(e,t){if(wr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!E.call(t,i)||!wr(e[i],t[i]))return!1}return!0}function _r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sr(e,t){var n,r=_r(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=_r(r)}}function Er(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Er(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Ir(){for(var e=window,t=se();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=se((e=t.contentWindow).document)}return t}function xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Cr(e){var t=Ir(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Er(n.ownerDocument.documentElement,n)){if(null!==r&&xr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Sr(n,a);var o=Sr(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tr=S&&"documentMode"in document&&11>=document.documentMode,Nr=null,Pr=null,Rr=null,Or=!1;function Lr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Or||null==Nr||Nr!==se(r)||("selectionStart"in(r=Nr)&&xr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Rr&&kr(Rr,r)||(Rr=r,0<(r=ai(Pr,"onSelect")).length&&(t=new Sn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ar={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},Mr={},jr={};function Ur(e){if(Mr[e])return Mr[e];if(!Ar[e])return e;var t,n=Ar[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Mr[e]=n[t];return e}S&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);var zr=Ur("animationend"),Fr=Ur("animationiteration"),Vr=Ur("animationstart"),$r=Ur("transitionend"),Br=new Map,Hr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(e,t){Br.set(e,t),k(t,[e])}for(var qr=0;qr<Hr.length;qr++){var Kr=Hr[qr];Wr(Kr.toLowerCase(),"on"+(Kr[0].toUpperCase()+Kr.slice(1)))}Wr(zr,"onAnimationEnd"),Wr(Fr,"onAnimationIteration"),Wr(Vr,"onAnimationStart"),Wr("dblclick","onDoubleClick"),Wr("focusin","onFocus"),Wr("focusout","onBlur"),Wr($r,"onTransitionEnd"),_("onMouseEnter",["mouseout","mouseover"]),_("onMouseLeave",["mouseout","mouseover"]),_("onPointerEnter",["pointerout","pointerover"]),_("onPointerLeave",["pointerout","pointerover"]),k("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),k("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),k("onBeforeInput",["compositionend","keypress","textInput","paste"]),k("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function Gr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,o,s,l){if(et.apply(this,arguments),Qe){if(!Qe)throw Error(y(198));var u=Ge;Qe=!1,Ge=null,Ye||(Ye=!0,Xe=u)}}(r,t,void 0,e),e.currentTarget=null}function Yr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Gr(i,s,u),a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Gr(i,s,u),a=l}}}if(Ye)throw e=Xe,Ye=!1,Xe=null,e}function Xr(e,t){var n=t[Ti];void 0===n&&(n=t[Ti]=new Set);var r=e+"__bubble";n.has(r)||(ni(t,e,2,!1),n.add(r))}function Zr(e,t,n){var r=0;t&&(r|=4),ni(n,e,r,t)}var ei="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[ei]){e[ei]=!0,b.forEach((function(t){"selectionchange"!==t&&(Qr.has(t)||Zr(t,!1,e),Zr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ei]||(t[ei]=!0,Zr("selectionchange",!1,t))}}function ni(e,t,n,r){switch(cn(t)){case 1:var i=an;break;case 4:i=on;break;default:i=sn}n=i.bind(null,t,n,e),i=void 0,!qe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ri(e,t,n,r,i){var a=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=Ri(s)))return;if(5===(l=o.tag)||6===l){r=a=o;continue e}s=s.parentNode}}r=r.return}He((function(){var r=a,i=De(n),o=[];e:{var s=Br.get(e);if(void 0!==s){var l=Sn,u=e;switch(e){case"keypress":if(0===mn(n))break e;case"keydown":case"keyup":l=Fn;break;case"focusin":u="focus",l=Nn;break;case"focusout":u="blur",l=Nn;break;case"beforeblur":case"afterblur":l=Nn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=Cn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=Tn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=$n;break;case zr:case Fr:case Vr:l=Pn;break;case $r:l=Bn;break;case"scroll":l=In;break;case"wheel":l=Wn;break;case"copy":case"cut":case"paste":l=On;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Vn}var c=0!=(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var h,p=r;null!==p;){var m=(h=p).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==f&&(null!=(m=We(p,f))&&c.push(ii(p,m,h)))),d)break;p=p.return}0<c.length&&(s=new l(s,u,null,n,i),o.push({event:s,listeners:c}))}}if(0==(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===Le||!(u=n.relatedTarget||n.fromElement)||!Ri(u)&&!u[Ci])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ri(u):null)&&(u!==(d=tt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=Cn,m="onMouseLeave",f="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=Vn,m="onPointerLeave",f="onPointerEnter",p="pointer"),d=null==l?s:Li(l),h=null==u?s:Li(u),(s=new c(m,p+"leave",l,n,i)).target=d,s.relatedTarget=h,m=null,Ri(i)===r&&((c=new c(f,p+"enter",u,n,i)).target=h,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(f=u,p=0,h=c=l;h;h=oi(h))p++;for(h=0,m=f;m;m=oi(m))h++;for(;0<p-h;)c=oi(c),p--;for(;0<h-p;)f=oi(f),h--;for(;p--;){if(c===f||null!==f&&c===f.alternate)break e;c=oi(c),f=oi(f)}c=null}else c=null;null!==l&&si(o,s,l,c,!1),null!==u&&null!==d&&si(o,d,u,c,!0)}if("select"===(l=(s=r?Li(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=ur;else if(rr(s))if(cr)g=br;else{g=vr;var v=gr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=yr);switch(g&&(g=g(e,r))?ir(o,g,n,i):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&he(s,"number",s.value)),v=r?Li(r):window,e){case"focusin":(rr(v)||"true"===v.contentEditable)&&(Nr=v,Pr=r,Rr=null);break;case"focusout":Rr=Pr=Nr=null;break;case"mousedown":Or=!0;break;case"contextmenu":case"mouseup":case"dragend":Or=!1,Lr(o,n,i);break;case"selectionchange":if(Tr)break;case"keydown":case"keyup":Lr(o,n,i)}var y;if(Kn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else tr?Zn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Gn&&"ko"!==n.locale&&(tr||"onCompositionStart"!==b?"onCompositionEnd"===b&&tr&&(y=pn()):(fn="value"in(dn=i)?dn.value:dn.textContent,tr=!0)),0<(v=ai(r,b)).length&&(b=new Ln(b,e,null,n,i),o.push({event:b,listeners:v}),y?b.data=y:null!==(y=er(n))&&(b.data=y))),(y=Qn?function(e,t){switch(e){case"compositionend":return er(t);case"keypress":return 32!==t.which?null:(Xn=!0,Yn);case"textInput":return(e=t.data)===Yn&&Xn?null:e;default:return null}}(e,n):function(e,t){if(tr)return"compositionend"===e||!Kn&&Zn(e,t)?(e=pn(),hn=fn=dn=null,tr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=ai(r,"onBeforeInput")).length&&(i=new Ln("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=y))}Yr(o,t)}))}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ai(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=We(e,n))&&r.unshift(ii(e,a,i)),null!=(a=We(e,t))&&r.push(ii(e,a,i))),e=e.return}return r}function oi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function si(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=We(n,a))&&o.unshift(ii(n,l,s)):i||null!=(l=We(n,a))&&o.push(ii(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var li=/\r\n?/g,ui=/\u0000|\uFFFD/g;function ci(e){return("string"==typeof e?e:""+e).replace(li,"\n").replace(ui,"")}function di(e,t,n){if(t=ci(t),ci(e)!==t&&n)throw Error(y(425))}function fi(){}var hi=null,pi=null;function mi(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var gi="function"==typeof setTimeout?setTimeout:void 0,vi="function"==typeof clearTimeout?clearTimeout:void 0,yi="function"==typeof Promise?Promise:void 0,bi="function"==typeof queueMicrotask?queueMicrotask:void 0!==yi?function(e){return yi.resolve(null).then(e).catch(wi)}:gi;function wi(e){setTimeout((function(){throw e}))}function ki(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void tn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);tn(t)}function _i(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function Si(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),Ii="__reactFiber$"+Ei,xi="__reactProps$"+Ei,Ci="__reactContainer$"+Ei,Ti="__reactEvents$"+Ei,Ni="__reactListeners$"+Ei,Pi="__reactHandles$"+Ei;function Ri(e){var t=e[Ii];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ci]||n[Ii]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Si(e);null!==e;){if(n=e[Ii])return n;e=Si(e)}return t}n=(e=n).parentNode}return null}function Oi(e){return!(e=e[Ii]||e[Ci])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Li(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(y(33))}function Di(e){return e[xi]||null}var Ai=[],Mi=-1;function ji(e){return{current:e}}function Ui(e){0>Mi||(e.current=Ai[Mi],Ai[Mi]=null,Mi--)}function zi(e,t){Mi++,Ai[Mi]=e.current,e.current=t}var Fi={},Vi=ji(Fi),$i=ji(!1),Bi=Fi;function Hi(e,t){var n=e.type.contextTypes;if(!n)return Fi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Wi(e){return null!=(e=e.childContextTypes)}function qi(){Ui($i),Ui(Vi)}function Ki(e,t,n){if(Vi.current!==Fi)throw Error(y(168));zi(Vi,t),zi($i,n)}function Ji(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(y(108,ne(e)||"Unknown",i));return G({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fi,Bi=Vi.current,zi(Vi,e),zi($i,$i.current),!0}function Gi(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Ji(e,t,Bi),r.__reactInternalMemoizedMergedChildContext=e,Ui($i),Ui(Vi),zi(Vi,e)):Ui($i),zi($i,n)}var Yi=null,Xi=!1,Zi=!1;function ea(e){null===Yi?Yi=[e]:Yi.push(e)}function ta(){if(!Zi&&null!==Yi){Zi=!0;var e=0,t=Ot;try{var n=Yi;for(Ot=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Yi=null,Xi=!1}catch(t){throw null!==Yi&&(Yi=Yi.slice(e+1)),ot(ft,ta),t}finally{Ot=t,Zi=!1}}return null}var na=[],ra=0,ia=null,aa=0,oa=[],sa=0,la=null,ua=1,ca="";function da(e,t){na[ra++]=aa,na[ra++]=ia,ia=e,aa=t}function fa(e,t,n){oa[sa++]=ua,oa[sa++]=ca,oa[sa++]=la,la=e;var r=ua;e=ca;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var a=32-bt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ua=1<<32-bt(t)+i|n<<i|r,ca=a+e}else ua=1<<a|n<<i|r,ca=e}function ha(e){null!==e.return&&(da(e,1),fa(e,1,0))}function pa(e){for(;e===ia;)ia=na[--ra],na[ra]=null,aa=na[--ra],na[ra]=null;for(;e===la;)la=oa[--sa],oa[sa]=null,ca=oa[--sa],oa[sa]=null,ua=oa[--sa],oa[sa]=null}var ma=null,ga=null,va=!1,ya=null;function ba(e,t){var n=Hu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function wa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ma=e,ga=_i(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ma=e,ga=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==la?{id:ua,overflow:ca}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Hu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ma=e,ga=null,!0);default:return!1}}function ka(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function _a(e){if(va){var t=ga;if(t){var n=t;if(!wa(e,t)){if(ka(e))throw Error(y(418));t=_i(n.nextSibling);var r=ma;t&&wa(e,t)?ba(r,n):(e.flags=-4097&e.flags|2,va=!1,ma=e)}}else{if(ka(e))throw Error(y(418));e.flags=-4097&e.flags|2,va=!1,ma=e}}}function Sa(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ma=e}function Ea(e){if(e!==ma)return!1;if(!va)return Sa(e),va=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!mi(e.type,e.memoizedProps)),t&&(t=ga)){if(ka(e))throw Ia(),Error(y(418));for(;t;)ba(e,t),t=_i(t.nextSibling)}if(Sa(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ga=_i(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ga=null}}else ga=ma?_i(e.stateNode.nextSibling):null;return!0}function Ia(){for(var e=ga;e;)e=_i(e.nextSibling)}function xa(){ga=ma=null,va=!1}function Ca(e){null===ya?ya=[e]:ya.push(e)}var Ta=L.ReactCurrentBatchConfig;function Na(e,t){if(e&&e.defaultProps){for(var n in t=G({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var Pa=ji(null),Ra=null,Oa=null,La=null;function Da(){La=Oa=Ra=null}function Aa(e){var t=Pa.current;Ui(Pa),e._currentValue=t}function Ma(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ja(e,t){Ra=e,La=Oa=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(Ls=!0),e.firstContext=null)}function Ua(e){var t=e._currentValue;if(La!==e)if(e={context:e,memoizedValue:t,next:null},null===Oa){if(null===Ra)throw Error(y(308));Oa=e,Ra.dependencies={lanes:0,firstContext:e}}else Oa=Oa.next=e;return t}var za=null;function Fa(e){null===za?za=[e]:za.push(e)}function Va(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Fa(t)):(n.next=i.next,i.next=n),t.interleaved=n,$a(e,r)}function $a(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ba=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qa(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&Vl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$a(e,n)}return null===(i=r.interleaved)?(t.next=t,Fa(r)):(t.next=i.next,i.next=t),r.interleaved=t,$a(e,n)}function Ja(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Rt(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ga(e,t,n,r){var i=e.updateQueue;Ba=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===o?a=u:o.next=u,o=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,c=u=l=null,s=a;;){var f=s.lane,h=s.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,m=s;switch(f=t,h=n,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(f="function"==typeof(p=m.payload)?p.call(h,d,f):p))break e;d=G({},d,f);break e;case 2:Ba=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[s]:f.push(s))}else h={eventTime:h,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=h,l=d):c=c.next=h,o|=f;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Ql|=o,e.lanes=o,e.memoizedState=d}}function Ya(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(y(191,i));i.call(r)}}}var Xa=(new g.Component).refs;function Za(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:G({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var eo={isMounted:function(e){return!!(e=e._reactInternals)&&tt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=hu(),i=pu(e),a=qa(r,i);a.payload=t,null!=n&&(a.callback=n),null!==(t=Ka(e,a,i))&&(mu(t,e,i,r),Ja(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=hu(),i=pu(e),a=qa(r,i);a.tag=1,a.payload=t,null!=n&&(a.callback=n),null!==(t=Ka(e,a,i))&&(mu(t,e,i,r),Ja(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=hu(),r=pu(e),i=qa(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Ka(e,i,r))&&(mu(t,e,r,n),Ja(t,e,r))}};function to(e,t,n,r,i,a,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!kr(n,r)||!kr(i,a))}function no(e,t,n){var r=!1,i=Fi,a=t.contextType;return"object"==typeof a&&null!==a?a=Ua(a):(i=Wi(t)?Bi:Vi.current,a=(r=null!=(r=t.contextTypes))?Hi(e,i):Fi),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=eo,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ro(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&eo.enqueueReplaceState(t,t.state,null)}function io(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Xa,Ha(e);var a=t.contextType;"object"==typeof a&&null!==a?i.context=Ua(a):(a=Wi(t)?Bi:Vi.current,i.context=Hi(e,a)),i.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(Za(e,t,a,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&eo.enqueueReplaceState(i,i.state,null),Ga(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function ao(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;t===Xa&&(t=i.refs={}),null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!=typeof e)throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function so(e){return(0,e._init)(e._payload)}function lo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=qu(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Gu(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var a=n.type;return a===M?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===W&&so(a)===t.type)?((r=i(t,n.props)).ref=ao(e,t,n),r.return=e,r):((r=Ku(n.type,n.key,n.props,null,e.mode,r)).ref=ao(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Yu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,a){return null===t||7!==t.tag?((t=Ju(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Gu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case D:return(n=Ku(t.type,t.key,t.props,null,e.mode,n)).ref=ao(e,null,t),n.return=e,n;case A:return(t=Yu(t,e.mode,n)).return=e,t;case W:return d(e,(0,t._init)(t._payload),n)}if(pe(t)||J(t))return(t=Ju(t,e.mode,n,null)).return=e,t;oo(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case D:return n.key===i?l(e,t,n,r):null;case A:return n.key===i?u(e,t,n,r):null;case W:return f(e,t,(i=n._init)(n._payload),r)}if(pe(n)||J(n))return null!==i?null:c(e,t,n,r,null);oo(e,n)}return null}function h(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case D:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case A:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case W:return h(e,t,n,(0,r._init)(r._payload),i)}if(pe(r)||J(r))return c(t,e=e.get(n)||null,r,i,null);oo(t,r)}return null}function p(i,o,s,l){for(var u=null,c=null,p=o,m=o=0,g=null;null!==p&&m<s.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var v=f(i,p,s[m],l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),o=a(v,o,m),null===c?u=v:c.sibling=v,c=v,p=g}if(m===s.length)return n(i,p),va&&da(i,m),u;if(null===p){for(;m<s.length;m++)null!==(p=d(i,s[m],l))&&(o=a(p,o,m),null===c?u=p:c.sibling=p,c=p);return va&&da(i,m),u}for(p=r(i,p);m<s.length;m++)null!==(g=h(p,i,m,s[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),o=a(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),va&&da(i,m),u}function m(i,o,s,l){var u=J(s);if("function"!=typeof u)throw Error(y(150));if(null==(s=u.call(s)))throw Error(y(151));for(var c=u=null,p=o,m=o=0,g=null,v=s.next();null!==p&&!v.done;m++,v=s.next()){p.index>m?(g=p,p=null):g=p.sibling;var b=f(i,p,v.value,l);if(null===b){null===p&&(p=g);break}e&&p&&null===b.alternate&&t(i,p),o=a(b,o,m),null===c?u=b:c.sibling=b,c=b,p=g}if(v.done)return n(i,p),va&&da(i,m),u;if(null===p){for(;!v.done;m++,v=s.next())null!==(v=d(i,v.value,l))&&(o=a(v,o,m),null===c?u=v:c.sibling=v,c=v);return va&&da(i,m),u}for(p=r(i,p);!v.done;m++,v=s.next())null!==(v=h(p,i,m,v.value,l))&&(e&&null!==v.alternate&&p.delete(null===v.key?m:v.key),o=a(v,o,m),null===c?u=v:c.sibling=v,c=v);return e&&p.forEach((function(e){return t(i,e)})),va&&da(i,m),u}return function e(r,a,s,l){if("object"==typeof s&&null!==s&&s.type===M&&null===s.key&&(s=s.props.children),"object"==typeof s&&null!==s){switch(s.$$typeof){case D:e:{for(var u=s.key,c=a;null!==c;){if(c.key===u){if((u=s.type)===M){if(7===c.tag){n(r,c.sibling),(a=i(c,s.props.children)).return=r,r=a;break e}}else if(c.elementType===u||"object"==typeof u&&null!==u&&u.$$typeof===W&&so(u)===c.type){n(r,c.sibling),(a=i(c,s.props)).ref=ao(r,c,s),a.return=r,r=a;break e}n(r,c);break}t(r,c),c=c.sibling}s.type===M?((a=Ju(s.props.children,r.mode,l,s.key)).return=r,r=a):((l=Ku(s.type,s.key,s.props,null,r.mode,l)).ref=ao(r,a,s),l.return=r,r=l)}return o(r);case A:e:{for(c=s.key;null!==a;){if(a.key===c){if(4===a.tag&&a.stateNode.containerInfo===s.containerInfo&&a.stateNode.implementation===s.implementation){n(r,a.sibling),(a=i(a,s.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Yu(s,r.mode,l)).return=r,r=a}return o(r);case W:return e(r,a,(c=s._init)(s._payload),l)}if(pe(s))return p(r,a,s,l);if(J(s))return m(r,a,s,l);oo(r,s)}return"string"==typeof s&&""!==s||"number"==typeof s?(s=""+s,null!==a&&6===a.tag?(n(r,a.sibling),(a=i(a,s)).return=r,r=a):(n(r,a),(a=Gu(s,r.mode,l)).return=r,r=a),o(r)):n(r,a)}}var uo=lo(!0),co=lo(!1),fo={},ho=ji(fo),po=ji(fo),mo=ji(fo);function go(e){if(e===fo)throw Error(y(174));return e}function vo(e,t){switch(zi(mo,t),zi(po,e),zi(ho,fo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ke(null,"");break;default:t=ke(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ui(ho),zi(ho,t)}function yo(){Ui(ho),Ui(po),Ui(mo)}function bo(e){go(mo.current);var t=go(ho.current),n=ke(t,e.type);t!==n&&(zi(po,e),zi(ho,n))}function wo(e){po.current===e&&(Ui(ho),Ui(po))}var ko=ji(0);function _o(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var So=[];function Eo(){for(var e=0;e<So.length;e++)So[e]._workInProgressVersionPrimary=null;So.length=0}var Io=L.ReactCurrentDispatcher,xo=L.ReactCurrentBatchConfig,Co=0,To=null,No=null,Po=null,Ro=!1,Oo=!1,Lo=0,Do=0;function Ao(){throw Error(y(321))}function Mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function jo(e,t,n,r,i,a){if(Co=a,To=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Io.current=null===e||null===e.memoizedState?ws:ks,e=n(r,i),Oo){a=0;do{if(Oo=!1,Lo=0,25<=a)throw Error(y(301));a+=1,Po=No=null,t.updateQueue=null,Io.current=_s,e=n(r,i)}while(Oo)}if(Io.current=bs,t=null!==No&&null!==No.next,Co=0,Po=No=To=null,Ro=!1,t)throw Error(y(300));return e}function Uo(){var e=0!==Lo;return Lo=0,e}function zo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Po?To.memoizedState=Po=e:Po=Po.next=e,Po}function Fo(){if(null===No){var e=To.alternate;e=null!==e?e.memoizedState:null}else e=No.next;var t=null===Po?To.memoizedState:Po.next;if(null!==t)Po=t,No=e;else{if(null===e)throw Error(y(310));e={memoizedState:(No=e).memoizedState,baseState:No.baseState,baseQueue:No.baseQueue,queue:No.queue,next:null},null===Po?To.memoizedState=Po=e:Po=Po.next=e}return Po}function Vo(e,t){return"function"==typeof t?t(e):t}function $o(e){var t=Fo(),n=t.queue;if(null===n)throw Error(y(311));n.lastRenderedReducer=e;var r=No,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((Co&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(s=l=d,o=r):l=l.next=d,To.lanes|=c,Ql|=c}u=u.next}while(null!==u&&u!==a);null===l?o=r:l.next=s,wr(r,t.memoizedState)||(Ls=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,To.lanes|=a,Ql|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bo(e){var t=Fo(),n=t.queue;if(null===n)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var o=i=i.next;do{a=e(a,o.action),o=o.next}while(o!==i);wr(a,t.memoizedState)||(Ls=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ho(){}function Wo(e,t){var n=To,r=Fo(),i=t(),a=!wr(r.memoizedState,i);if(a&&(r.memoizedState=i,Ls=!0),r=r.queue,rs(Jo.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==Po&&1&Po.memoizedState.tag){if(n.flags|=2048,Xo(9,Ko.bind(null,n,r,i,t),void 0,null),null===$l)throw Error(y(349));0!=(30&Co)||qo(n,t,i)}return i}function qo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=To.updateQueue)?(t={lastEffect:null,stores:null},To.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Qo(t)&&Go(e)}function Jo(e,t,n){return n((function(){Qo(t)&&Go(e)}))}function Qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch(e){return!0}}function Go(e){var t=$a(e,1);null!==t&&mu(t,e,1,-1)}function Yo(e){var t=zo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},t.queue=e,e=e.dispatch=ms.bind(null,To,e),[t.memoizedState,e]}function Xo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=To.updateQueue)?(t={lastEffect:null,stores:null},To.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Zo(){return Fo().memoizedState}function es(e,t,n,r){var i=zo();To.flags|=e,i.memoizedState=Xo(1|t,n,void 0,void 0===r?null:r)}function ts(e,t,n,r){var i=Fo();r=void 0===r?null:r;var a=void 0;if(null!==No){var o=No.memoizedState;if(a=o.destroy,null!==r&&Mo(r,o.deps))return void(i.memoizedState=Xo(t,n,a,r))}To.flags|=e,i.memoizedState=Xo(1|t,n,a,r)}function ns(e,t){return es(8390656,8,e,t)}function rs(e,t){return ts(2048,8,e,t)}function is(e,t){return ts(4,2,e,t)}function as(e,t){return ts(4,4,e,t)}function os(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function ss(e,t,n){return n=null!=n?n.concat([e]):null,ts(4,4,os.bind(null,t,e),n)}function ls(){}function us(e,t){var n=Fo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cs(e,t){var n=Fo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ds(e,t,n){return 0==(21&Co)?(e.baseState&&(e.baseState=!1,Ls=!0),e.memoizedState=n):(wr(n,t)||(n=Tt(),To.lanes|=n,Ql|=n,e.baseState=!0),t)}function fs(e,t){var n=Ot;Ot=0!==n&&4>n?n:4,e(!0);var r=xo.transition;xo.transition={};try{e(!1),t()}finally{Ot=n,xo.transition=r}}function hs(){return Fo().memoizedState}function ps(e,t,n){var r=pu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gs(e))vs(t,n);else if(null!==(n=Va(e,t,n,r))){mu(n,e,r,hu()),ys(n,t,r)}}function ms(e,t,n){var r=pu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gs(e))vs(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,wr(s,o)){var l=t.interleaved;return null===l?(i.next=i,Fa(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(e){}null!==(n=Va(e,t,i,r))&&(mu(n,e,r,i=hu()),ys(n,t,r))}}function gs(e){var t=e.alternate;return e===To||null!==t&&t===To}function vs(e,t){Oo=Ro=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ys(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Rt(e,n)}}var bs={readContext:Ua,useCallback:Ao,useContext:Ao,useEffect:Ao,useImperativeHandle:Ao,useInsertionEffect:Ao,useLayoutEffect:Ao,useMemo:Ao,useReducer:Ao,useRef:Ao,useState:Ao,useDebugValue:Ao,useDeferredValue:Ao,useTransition:Ao,useMutableSource:Ao,useSyncExternalStore:Ao,useId:Ao,unstable_isNewReconciler:!1},ws={readContext:Ua,useCallback:function(e,t){return zo().memoizedState=[e,void 0===t?null:t],e},useContext:Ua,useEffect:ns,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,es(4194308,4,os.bind(null,t,e),n)},useLayoutEffect:function(e,t){return es(4194308,4,e,t)},useInsertionEffect:function(e,t){return es(4,2,e,t)},useMemo:function(e,t){var n=zo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ps.bind(null,To,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},zo().memoizedState=e},useState:Yo,useDebugValue:ls,useDeferredValue:function(e){return zo().memoizedState=e},useTransition:function(){var e=Yo(!1),t=e[0];return e=fs.bind(null,e[1]),zo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=To,i=zo();if(va){if(void 0===n)throw Error(y(407));n=n()}else{if(n=t(),null===$l)throw Error(y(349));0!=(30&Co)||qo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ns(Jo.bind(null,r,a,e),[e]),r.flags|=2048,Xo(9,Ko.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=zo(),t=$l.identifierPrefix;if(va){var n=ca;t=":"+t+"R"+(n=(ua&~(1<<32-bt(ua)-1)).toString(32)+n),0<(n=Lo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=Do++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ks={readContext:Ua,useCallback:us,useContext:Ua,useEffect:rs,useImperativeHandle:ss,useInsertionEffect:is,useLayoutEffect:as,useMemo:cs,useReducer:$o,useRef:Zo,useState:function(){return $o(Vo)},useDebugValue:ls,useDeferredValue:function(e){return ds(Fo(),No.memoizedState,e)},useTransition:function(){return[$o(Vo)[0],Fo().memoizedState]},useMutableSource:Ho,useSyncExternalStore:Wo,useId:hs,unstable_isNewReconciler:!1},_s={readContext:Ua,useCallback:us,useContext:Ua,useEffect:rs,useImperativeHandle:ss,useInsertionEffect:is,useLayoutEffect:as,useMemo:cs,useReducer:Bo,useRef:Zo,useState:function(){return Bo(Vo)},useDebugValue:ls,useDeferredValue:function(e){var t=Fo();return null===No?t.memoizedState=e:ds(t,No.memoizedState,e)},useTransition:function(){return[Bo(Vo)[0],Fo().memoizedState]},useMutableSource:Ho,useSyncExternalStore:Wo,useId:hs,unstable_isNewReconciler:!1};function Ss(e,t){try{var n="",r=t;do{n+=ee(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function Es(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function Is(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var xs="function"==typeof WeakMap?WeakMap:Map;function Cs(e,t,n){(n=qa(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ru||(ru=!0,iu=r),Is(0,t)},n}function Ts(e,t,n){(n=qa(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Is(0,t)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(n.callback=function(){Is(0,t),"function"!=typeof r&&(null===au?au=new Set([this]):au.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function Ns(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new xs;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Uu.bind(null,e,t,n),t.then(e,e))}function Ps(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function Rs(e,t,n,r,i){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=qa(-1,1)).tag=2,Ka(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Os=L.ReactCurrentOwner,Ls=!1;function Ds(e,t,n,r){t.child=null===e?co(t,null,n,r):uo(t,e.child,n,r)}function As(e,t,n,r,i){n=n.render;var a=t.ref;return ja(t,i),r=jo(e,t,n,r,a,i),n=Uo(),null===e||Ls?(va&&n&&ha(t),t.flags|=1,Ds(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rl(e,t,i))}function Ms(e,t,n,r,i){if(null===e){var a=n.type;return"function"!=typeof a||Wu(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ku(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,js(e,t,a,r,i))}if(a=e.child,0==(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:kr)(o,r)&&e.ref===t.ref)return rl(e,t,i)}return t.flags|=1,(e=qu(a,r)).ref=t.ref,e.return=t,t.child=e}function js(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref){if(Ls=!1,t.pendingProps=r=a,0==(e.lanes&i))return t.lanes=e.lanes,rl(e,t,i);0!=(131072&e.flags)&&(Ls=!0)}}return Fs(e,t,n,r,i)}function Us(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},zi(ql,Wl),Wl|=n;else{if(0==(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,zi(ql,Wl),Wl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,zi(ql,Wl),Wl|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,zi(ql,Wl),Wl|=r;return Ds(e,t,i,n),t.child}function zs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fs(e,t,n,r,i){var a=Wi(n)?Bi:Vi.current;return a=Hi(t,a),ja(t,i),n=jo(e,t,n,r,a,i),r=Uo(),null===e||Ls?(va&&r&&ha(t),t.flags|=1,Ds(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rl(e,t,i))}function Vs(e,t,n,r,i){if(Wi(n)){var a=!0;Qi(t)}else a=!1;if(ja(t,i),null===t.stateNode)nl(e,t),no(t,n,r),io(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;"object"==typeof u&&null!==u?u=Ua(u):u=Hi(t,u=Wi(n)?Bi:Vi.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;d||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==r||l!==u)&&ro(t,o,r,u),Ba=!1;var f=t.memoizedState;o.state=f,Ga(t,r,o,i),l=t.memoizedState,s!==r||f!==l||$i.current||Ba?("function"==typeof c&&(Za(t,n,c,r),l=t.memoizedState),(s=Ba||to(t,n,s,r,f,l,u))?(d||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Wa(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Na(t.type,s),o.props=u,d=t.pendingProps,f=o.context,"object"==typeof(l=n.contextType)&&null!==l?l=Ua(l):l=Hi(t,l=Wi(n)?Bi:Vi.current);var h=n.getDerivedStateFromProps;(c="function"==typeof h||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==d||f!==l)&&ro(t,o,r,l),Ba=!1,f=t.memoizedState,o.state=f,Ga(t,r,o,i);var p=t.memoizedState;s!==d||f!==p||$i.current||Ba?("function"==typeof h&&(Za(t,n,h,r),p=t.memoizedState),(u=Ba||to(t,n,u,r,f,p,l)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return $s(e,t,n,r,a,i)}function $s(e,t,n,r,i,a){zs(e,t);var o=0!=(128&t.flags);if(!r&&!o)return i&&Gi(t,n,!1),rl(e,t,a);r=t.stateNode,Os.current=t;var s=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=uo(t,e.child,null,a),t.child=uo(t,null,s,a)):Ds(e,t,s,a),t.memoizedState=r.state,i&&Gi(t,n,!0),t.child}function Bs(e){var t=e.stateNode;t.pendingContext?Ki(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ki(0,t.context,!1),vo(e,t.containerInfo)}function Hs(e,t,n,r,i){return xa(),Ca(i),t.flags|=256,Ds(e,t,n,r),t.child}var Ws,qs,Ks,Js={dehydrated:null,treeContext:null,retryLane:0};function Qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gs(e,t,n){var r,i=t.pendingProps,a=ko.current,o=!1,s=0!=(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!=(2&a)),r?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),zi(ko,1&a),null===e)return _a(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,o?(i=t.mode,o=t.child,s={mode:"hidden",children:s},0==(1&i)&&null!==o?(o.childLanes=0,o.pendingProps=s):o=Qu(s,i,0,null),e=Ju(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Qs(n),t.memoizedState=Js,e):Ys(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,o){if(n)return 256&t.flags?(t.flags&=-257,Xs(e,t,o,r=Es(Error(y(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Qu({mode:"visible",children:r.children},i,0,null),(a=Ju(a,i,o,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!=(1&t.mode)&&uo(t,e.child,null,o),t.child.memoizedState=Qs(o),t.memoizedState=Js,a);if(0==(1&t.mode))return Xs(e,t,o,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var s=r.dgst;return r=s,Xs(e,t,o,r=Es(a=Error(y(419)),r,void 0))}if(s=0!=(o&e.childLanes),Ls||s){if(null!==(r=$l)){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|o))?0:i)&&i!==a.retryLane&&(a.retryLane=i,$a(e,i),mu(r,e,i,-1))}return Tu(),Xs(e,t,o,r=Es(Error(y(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Fu.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ga=_i(i.nextSibling),ma=t,va=!0,ya=null,null!==e&&(oa[sa++]=ua,oa[sa++]=ca,oa[sa++]=la,ua=e.id,ca=e.overflow,la=t),(t=Ys(t,r.children)).flags|=4096,t)}(e,t,s,i,r,a,n);if(o){o=i.fallback,s=t.mode,r=(a=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&s)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null):(i=qu(a,l)).subtreeFlags=14680064&a.subtreeFlags,null!==r?o=qu(r,o):(o=Ju(o,s,n,null)).flags|=2,o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,s=null===(s=e.child.memoizedState)?Qs(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Js,i}return e=(o=e.child).sibling,i=qu(o,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ys(e,t){return(t=Qu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Xs(e,t,n,r){return null!==r&&Ca(r),uo(t,e.child,null,n),(e=Ys(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Zs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ma(e.return,t,n)}function el(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function tl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ds(e,t,r.children,n),0!=(2&(r=ko.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Zs(e,n,t);else if(19===e.tag)Zs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(zi(ko,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===_o(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),el(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===_o(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}el(t,!0,n,null,a);break;case"together":el(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function nl(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ql|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(y(153));if(null!==t.child){for(n=qu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=qu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function il(e,t){if(!va)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function al(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ol(e,t,n){var r=t.pendingProps;switch(pa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return al(t),null;case 1:case 17:return Wi(t.type)&&qi(),al(t),null;case 3:return r=t.stateNode,yo(),Ui($i),Ui(Vi),Eo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Ea(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==ya&&(bu(ya),ya=null))),al(t),null;case 5:wo(t);var i=go(mo.current);if(n=t.type,null!==e&&null!=t.stateNode)qs(e,t,n,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(y(166));return al(t),null}if(e=go(ho.current),Ea(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ii]=t,r[xi]=a,e=0!=(1&t.mode),n){case"dialog":Xr("cancel",r),Xr("close",r);break;case"iframe":case"object":case"embed":Xr("load",r);break;case"video":case"audio":for(i=0;i<Jr.length;i++)Xr(Jr[i],r);break;case"source":Xr("error",r);break;case"img":case"image":case"link":Xr("error",r),Xr("load",r);break;case"details":Xr("toggle",r);break;case"input":ue(r,a),Xr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Xr("invalid",r);break;case"textarea":ve(r,a),Xr("invalid",r)}for(var o in Re(n,a),i=null,a)if(a.hasOwnProperty(o)){var s=a[o];"children"===o?"string"==typeof s?r.textContent!==s&&(!0!==a.suppressHydrationWarning&&di(r.textContent,s,e),i=["children",s]):"number"==typeof s&&r.textContent!==""+s&&(!0!==a.suppressHydrationWarning&&di(r.textContent,s,e),i=["children",""+s]):w.hasOwnProperty(o)&&null!=s&&"onScroll"===o&&Xr("scroll",r)}switch(n){case"input":ae(r),fe(r,a,!0);break;case"textarea":ae(r),be(r);break;case"select":case"option":break;default:"function"==typeof a.onClick&&(r.onclick=fi)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{o=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=we(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ii]=t,e[xi]=r,Ws(e,t),t.stateNode=e;e:{switch(o=Oe(n,r),n){case"dialog":Xr("cancel",e),Xr("close",e),i=r;break;case"iframe":case"object":case"embed":Xr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Jr.length;i++)Xr(Jr[i],e);i=r;break;case"source":Xr("error",e),i=r;break;case"img":case"image":case"link":Xr("error",e),Xr("load",e),i=r;break;case"details":Xr("toggle",e),i=r;break;case"input":ue(e,r),i=le(e,r),Xr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),Xr("invalid",e);break;case"textarea":ve(e,r),i=ge(e,r),Xr("invalid",e)}for(a in Re(n,i),s=i)if(s.hasOwnProperty(a)){var l=s[a];"style"===a?Ne(e,l):"dangerouslySetInnerHTML"===a?null!=(l=l?l.__html:void 0)&&Ee(e,l):"children"===a?"string"==typeof l?("textarea"!==n||""!==l)&&Ie(e,l):"number"==typeof l&&Ie(e,""+l):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(w.hasOwnProperty(a)?null!=l&&"onScroll"===a&&Xr("scroll",e):null!=l&&O(e,a,l,o))}switch(n){case"input":ae(e),fe(e,r,!1);break;case"textarea":ae(e),be(e);break;case"option":null!=r.value&&e.setAttribute("value",""+re(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?me(e,!!r.multiple,a,!1):null!=r.defaultValue&&me(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=fi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return al(t),null;case 6:if(e&&null!=t.stateNode)Ks(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(y(166));if(n=go(mo.current),go(ho.current),Ea(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ii]=t,(a=r.nodeValue!==n)&&null!==(e=ma))switch(e.tag){case 3:di(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&di(r.nodeValue,n,0!=(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Ii]=t,t.stateNode=r}return al(t),null;case 13:if(Ui(ko),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(va&&null!==ga&&0!=(1&t.mode)&&0==(128&t.flags))Ia(),xa(),t.flags|=98560,a=!1;else if(a=Ea(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(y(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(y(317));a[Ii]=t}else xa(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;al(t),a=!1}else null!==ya&&(bu(ya),ya=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ko.current)?0===Kl&&(Kl=3):Tu())),null!==t.updateQueue&&(t.flags|=4),al(t),null);case 4:return yo(),null===e&&ti(t.stateNode.containerInfo),al(t),null;case 10:return Aa(t.type._context),al(t),null;case 19:if(Ui(ko),null===(a=t.memoizedState))return al(t),null;if(r=0!=(128&t.flags),null===(o=a.rendering))if(r)il(a,!1);else{if(0!==Kl||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=_o(e))){for(t.flags|=128,il(a,!1),null!==(r=o.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(o=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return zi(ko,1&ko.current|2),t.child}e=e.sibling}null!==a.tail&&ct()>tu&&(t.flags|=128,r=!0,il(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=_o(o))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),il(a,!0),null===a.tail&&"hidden"===a.tailMode&&!o.alternate&&!va)return al(t),null}else 2*ct()-a.renderingStartTime>tu&&1073741824!==n&&(t.flags|=128,r=!0,il(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=a.last)?n.sibling=o:t.child=o,a.last=o)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ct(),t.sibling=null,n=ko.current,zi(ko,r?1&n|2:1&n),t):(al(t),null);case 22:case 23:return Eu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Wl)&&(al(t),6&t.subtreeFlags&&(t.flags|=8192)):al(t),null;case 24:case 25:return null}throw Error(y(156,t.tag))}function sl(e,t){switch(pa(t),t.tag){case 1:return Wi(t.type)&&qi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return yo(),Ui($i),Ui(Vi),Eo(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return wo(t),null;case 13:if(Ui(ko),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(y(340));xa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ui(ko),null;case 4:return yo(),null;case 10:return Aa(t.type._context),null;case 22:case 23:return Eu(),null;default:return null}}Ws=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},qs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,go(ho.current);var a,o=null;switch(n){case"input":i=le(e,i),r=le(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=ge(e,i),r=ge(e,r),o=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=fi)}for(u in Re(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(w.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(null!=l||null!=s))if("style"===u)if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(o=o||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(w.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Xr("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Ks=function(e,t,n,r){n!==r&&(t.flags|=4)};var ll=!1,ul=!1,cl="function"==typeof WeakSet?WeakSet:Set,dl=null;function fl(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){ju(e,t,n)}else n.current=null}function hl(e,t,n){try{n()}catch(n){ju(e,t,n)}}var pl=!1;function ml(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&hl(t,n,a)}i=i.next}while(i!==r)}}function gl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function yl(e){var t=e.alternate;null!==t&&(e.alternate=null,yl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[Ii],delete t[xi],delete t[Ti],delete t[Ni],delete t[Pi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bl(e){return 5===e.tag||3===e.tag||4===e.tag}function wl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||bl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function kl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=fi));else if(4!==r&&null!==(e=e.child))for(kl(e,t,n),e=e.sibling;null!==e;)kl(e,t,n),e=e.sibling}function _l(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(_l(e,t,n),e=e.sibling;null!==e;)_l(e,t,n),e=e.sibling}var Sl=null,El=!1;function Il(e,t,n){for(n=n.child;null!==n;)xl(e,t,n),n=n.sibling}function xl(e,t,n){if(yt&&"function"==typeof yt.onCommitFiberUnmount)try{yt.onCommitFiberUnmount(vt,n)}catch(e){}switch(n.tag){case 5:ul||fl(n,t);case 6:var r=Sl,i=El;Sl=null,Il(e,t,n),El=i,null!==(Sl=r)&&(El?(e=Sl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):Sl.removeChild(n.stateNode));break;case 18:null!==Sl&&(El?(e=Sl,n=n.stateNode,8===e.nodeType?ki(e.parentNode,n):1===e.nodeType&&ki(e,n),tn(e)):ki(Sl,n.stateNode));break;case 4:r=Sl,i=El,Sl=n.stateNode.containerInfo,El=!0,Il(e,t,n),Sl=r,El=i;break;case 0:case 11:case 14:case 15:if(!ul&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!=(2&a)||0!=(4&a))&&hl(n,t,o),i=i.next}while(i!==r)}Il(e,t,n);break;case 1:if(!ul&&(fl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){ju(n,t,e)}Il(e,t,n);break;case 21:Il(e,t,n);break;case 22:1&n.mode?(ul=(r=ul)||null!==n.memoizedState,Il(e,t,n),ul=r):Il(e,t,n);break;default:Il(e,t,n)}}function Cl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new cl),t.forEach((function(t){var r=Vu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function Tl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;null!==s;){switch(s.tag){case 5:Sl=s.stateNode,El=!1;break e;case 3:case 4:Sl=s.stateNode.containerInfo,El=!0;break e}s=s.return}if(null===Sl)throw Error(y(160));xl(a,o,i),Sl=null,El=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(e){ju(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)Nl(t,e),t=t.sibling}function Nl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tl(t,e),Pl(e),4&r){try{ml(3,e,e.return),gl(3,e)}catch(t){ju(e,e.return,t)}try{ml(5,e,e.return)}catch(t){ju(e,e.return,t)}}break;case 1:Tl(t,e),Pl(e),512&r&&null!==n&&fl(n,n.return);break;case 5:if(Tl(t,e),Pl(e),512&r&&null!==n&&fl(n,n.return),32&e.flags){var i=e.stateNode;try{Ie(i,"")}catch(t){ju(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,o=null!==n?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===s&&"radio"===a.type&&null!=a.name&&ce(i,a),Oe(s,o);var u=Oe(s,a);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];"style"===c?Ne(i,d):"dangerouslySetInnerHTML"===c?Ee(i,d):"children"===c?Ie(i,d):O(i,c,d,u)}switch(s){case"input":de(i,a);break;case"textarea":ye(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?me(i,!!a.multiple,h,!1):f!==!!a.multiple&&(null!=a.defaultValue?me(i,!!a.multiple,a.defaultValue,!0):me(i,!!a.multiple,a.multiple?[]:"",!1))}i[xi]=a}catch(t){ju(e,e.return,t)}}break;case 6:if(Tl(t,e),Pl(e),4&r){if(null===e.stateNode)throw Error(y(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(t){ju(e,e.return,t)}}break;case 3:if(Tl(t,e),Pl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(t){ju(e,e.return,t)}break;case 4:default:Tl(t,e),Pl(e);break;case 13:Tl(t,e),Pl(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(eu=ct())),4&r&&Cl(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(ul=(u=ul)||c,Tl(t,e),ul=u):Tl(t,e),Pl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(dl=e,c=e.child;null!==c;){for(d=dl=c;null!==dl;){switch(h=(f=dl).child,f.tag){case 0:case 11:case 14:case 15:ml(4,f,f.return);break;case 1:fl(f,f.return);var p=f.stateNode;if("function"==typeof p.componentWillUnmount){r=f,n=f.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(e){ju(r,n,e)}}break;case 5:fl(f,f.return);break;case 22:if(null!==f.memoizedState){Dl(d);continue}}null!==h?(h.return=f,dl=h):Dl(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d;try{i=d.stateNode,u?"function"==typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(s=d.stateNode,o=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,s.style.display=Te("display",o))}catch(t){ju(e,e.return,t)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(t){ju(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Tl(t,e),Pl(e),4&r&&Cl(e);case 21:}}function Pl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(bl(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(Ie(i,""),r.flags&=-33),_l(e,wl(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;kl(e,wl(e),a);break;default:throw Error(y(161))}}catch(t){ju(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Rl(e,t,n){dl=e,Ol(e,t,n)}function Ol(e,t,n){for(var r=0!=(1&e.mode);null!==dl;){var i=dl,a=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||ll;if(!o){var s=i.alternate,l=null!==s&&null!==s.memoizedState||ul;s=ll;var u=ul;if(ll=o,(ul=l)&&!u)for(dl=i;null!==dl;)l=(o=dl).child,22===o.tag&&null!==o.memoizedState?Al(i):null!==l?(l.return=o,dl=l):Al(i);for(;null!==a;)dl=a,Ol(a,t,n),a=a.sibling;dl=i,ll=s,ul=u}Ll(e)}else 0!=(8772&i.subtreeFlags)&&null!==a?(a.return=i,dl=a):Ll(e)}}function Ll(e){for(;null!==dl;){var t=dl;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:ul||gl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!ul)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Na(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Ya(t,a,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ya(t,o,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var d=c.dehydrated;null!==d&&tn(d)}}}break;default:throw Error(y(163))}ul||512&t.flags&&vl(t)}catch(e){ju(t,t.return,e)}}if(t===e){dl=null;break}if(null!==(n=t.sibling)){n.return=t.return,dl=n;break}dl=t.return}}function Dl(e){for(;null!==dl;){var t=dl;if(t===e){dl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,dl=n;break}dl=t.return}}function Al(e){for(;null!==dl;){var t=dl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{gl(4,t)}catch(e){ju(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){ju(t,i,e)}}var a=t.return;try{vl(t)}catch(e){ju(t,a,e)}break;case 5:var o=t.return;try{vl(t)}catch(e){ju(t,o,e)}}}catch(e){ju(t,t.return,e)}if(t===e){dl=null;break}var s=t.sibling;if(null!==s){s.return=t.return,dl=s;break}dl=t.return}}var Ml,jl=Math.ceil,Ul=L.ReactCurrentDispatcher,zl=L.ReactCurrentOwner,Fl=L.ReactCurrentBatchConfig,Vl=0,$l=null,Bl=null,Hl=0,Wl=0,ql=ji(0),Kl=0,Jl=null,Ql=0,Gl=0,Yl=0,Xl=null,Zl=null,eu=0,tu=1/0,nu=null,ru=!1,iu=null,au=null,ou=!1,su=null,lu=0,uu=0,cu=null,du=-1,fu=0;function hu(){return 0!=(6&Vl)?ct():-1!==du?du:du=ct()}function pu(e){return 0==(1&e.mode)?1:0!=(2&Vl)&&0!==Hl?Hl&-Hl:null!==Ta.transition?(0===fu&&(fu=Tt()),fu):0!==(e=Ot)?e:e=void 0===(e=window.event)?16:cn(e.type)}function mu(e,t,n,r){if(50<uu)throw uu=0,cu=null,Error(y(185));Pt(e,n,r),0!=(2&Vl)&&e===$l||(e===$l&&(0==(2&Vl)&&(Gl|=n),4===Kl&&wu(e,Hl)),gu(e,r),1===n&&0===Vl&&0==(1&t.mode)&&(tu=ct()+500,Xi&&ta()))}function gu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-bt(a),s=1<<o,l=i[o];-1===l?0!=(s&n)&&0==(s&r)||(i[o]=xt(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var r=It(e,e===$l?Hl:0);if(0===r)null!==n&&st(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&st(n),1===t)0===e.tag?function(e){Xi=!0,ea(e)}(ku.bind(null,e)):ea(ku.bind(null,e)),bi((function(){0==(6&Vl)&&ta()})),n=null;else{switch(Lt(r)){case 1:n=ft;break;case 4:n=ht;break;case 16:default:n=pt;break;case 536870912:n=gt}n=$u(n,vu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vu(e,t){if(du=-1,fu=0,0!=(6&Vl))throw Error(y(327));var n=e.callbackNode;if(Au()&&e.callbackNode!==n)return null;var r=It(e,e===$l?Hl:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=Nu(e,r);else{t=r;var i=Vl;Vl|=2;var a=Cu();for($l===e&&Hl===t||(nu=null,tu=ct()+500,Iu(e,t));;)try{Ru();break}catch(t){xu(e,t)}Da(),Ul.current=a,Vl=i,null!==Bl?t=0:($l=null,Hl=0,t=Kl)}if(0!==t){if(2===t&&(0!==(i=Ct(e))&&(r=i,t=yu(e,i))),1===t)throw n=Jl,Iu(e,0),wu(e,r),gu(e,ct()),n;if(6===t)wu(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!wr(a(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=Nu(e,r))&&(0!==(a=Ct(e))&&(r=a,t=yu(e,a))),1===t))throw n=Jl,Iu(e,0),wu(e,r),gu(e,ct()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:case 5:Du(e,Zl,nu);break;case 3:if(wu(e,r),(130023424&r)===r&&10<(t=eu+500-ct())){if(0!==It(e,0))break;if(((i=e.suspendedLanes)&r)!==r){hu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gi(Du.bind(null,e,Zl,nu),t);break}Du(e,Zl,nu);break;case 4:if(wu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-bt(r);a=1<<o,(o=t[o])>i&&(i=o),r&=~a}if(r=i,10<(r=(120>(r=ct()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jl(r/1960))-r)){e.timeoutHandle=gi(Du.bind(null,e,Zl,nu),r);break}Du(e,Zl,nu);break;default:throw Error(y(329))}}}return gu(e,ct()),e.callbackNode===n?vu.bind(null,e):null}function yu(e,t){var n=Xl;return e.current.memoizedState.isDehydrated&&(Iu(e,t).flags|=256),2!==(e=Nu(e,t))&&(t=Zl,Zl=n,null!==t&&bu(t)),e}function bu(e){null===Zl?Zl=e:Zl.push.apply(Zl,e)}function wu(e,t){for(t&=~Yl,t&=~Gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function ku(e){if(0!=(6&Vl))throw Error(y(327));Au();var t=It(e,0);if(0==(1&t))return gu(e,ct()),null;var n=Nu(e,t);if(0!==e.tag&&2===n){var r=Ct(e);0!==r&&(t=r,n=yu(e,r))}if(1===n)throw n=Jl,Iu(e,0),wu(e,t),gu(e,ct()),n;if(6===n)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Du(e,Zl,nu),gu(e,ct()),null}function _u(e,t){var n=Vl;Vl|=1;try{return e(t)}finally{0===(Vl=n)&&(tu=ct()+500,Xi&&ta())}}function Su(e){null!==su&&0===su.tag&&0==(6&Vl)&&Au();var t=Vl;Vl|=1;var n=Fl.transition,r=Ot;try{if(Fl.transition=null,Ot=1,e)return e()}finally{Ot=r,Fl.transition=n,0==(6&(Vl=t))&&ta()}}function Eu(){Wl=ql.current,Ui(ql)}function Iu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,vi(n)),null!==Bl)for(n=Bl.return;null!==n;){var r=n;switch(pa(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&qi();break;case 3:yo(),Ui($i),Ui(Vi),Eo();break;case 5:wo(r);break;case 4:yo();break;case 13:case 19:Ui(ko);break;case 10:Aa(r.type._context);break;case 22:case 23:Eu()}n=n.return}if($l=e,Bl=e=qu(e.current,null),Hl=Wl=t,Kl=0,Jl=null,Yl=Gl=Ql=0,Zl=Xl=null,null!==za){for(t=0;t<za.length;t++)if(null!==(r=(n=za[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}za=null}return e}function xu(e,t){for(;;){var n=Bl;try{if(Da(),Io.current=bs,Ro){for(var r=To.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}Ro=!1}if(Co=0,Po=No=To=null,Oo=!1,Lo=0,zl.current=null,null===n||null===n.return){Kl=1,Jl=t,Bl=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=Hl,s.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=s,d=c.tag;if(0==(1&c.mode)&&(0===d||11===d||15===d)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Ps(o);if(null!==h){h.flags&=-257,Rs(h,o,s,0,t),1&h.mode&&Ns(a,u,t),l=u;var p=(t=h).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(0==(1&t)){Ns(a,u,t),Tu();break e}l=Error(y(426))}else if(va&&1&s.mode){var g=Ps(o);if(null!==g){0==(65536&g.flags)&&(g.flags|=256),Rs(g,o,s,0,t),Ca(Ss(l,s));break e}}a=l=Ss(l,s),4!==Kl&&(Kl=2),null===Xl?Xl=[a]:Xl.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Qa(a,Cs(0,l,t));break e;case 1:s=l;var v=a.type,b=a.stateNode;if(0==(128&a.flags)&&("function"==typeof v.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===au||!au.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t,Qa(a,Ts(a,s,t));break e}}a=a.return}while(null!==a)}Lu(n)}catch(e){t=e,Bl===n&&null!==n&&(Bl=n=n.return);continue}break}}function Cu(){var e=Ul.current;return Ul.current=bs,null===e?bs:e}function Tu(){0!==Kl&&3!==Kl&&2!==Kl||(Kl=4),null===$l||0==(268435455&Ql)&&0==(268435455&Gl)||wu($l,Hl)}function Nu(e,t){var n=Vl;Vl|=2;var r=Cu();for($l===e&&Hl===t||(nu=null,Iu(e,t));;)try{Pu();break}catch(t){xu(e,t)}if(Da(),Vl=n,Ul.current=r,null!==Bl)throw Error(y(261));return $l=null,Hl=0,Kl}function Pu(){for(;null!==Bl;)Ou(Bl)}function Ru(){for(;null!==Bl&&!lt();)Ou(Bl)}function Ou(e){var t=Ml(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,null===t?Lu(e):Bl=t,zl.current=null}function Lu(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=ol(n,t,Wl)))return void(Bl=n)}else{if(null!==(n=sl(n,t)))return n.flags&=32767,void(Bl=n);if(null===e)return Kl=6,void(Bl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Bl=t);Bl=t=e}while(null!==t);0===Kl&&(Kl=5)}function Du(e,t,n){var r=Ot,i=Fl.transition;try{Fl.transition=null,Ot=1,function(e,t,n,r){do{Au()}while(null!==su);if(0!=(6&Vl))throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,a),e===$l&&(Bl=$l=null,Hl=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||ou||(ou=!0,$u(pt,(function(){return Au(),null}))),a=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||a){a=Fl.transition,Fl.transition=null;var o=Ot;Ot=1;var s=Vl;Vl|=4,zl.current=null,function(e,t){if(hi=rn,xr(e=Ir())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(e){n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var h;d!==n||0!==i&&3!==d.nodeType||(s=o+i),d!==a||0!==r&&3!==d.nodeType||(l=o+r),3===d.nodeType&&(o+=d.nodeValue.length),null!==(h=d.firstChild);)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++u===i&&(s=o),f===a&&++c===r&&(l=o),null!==(h=d.nextSibling))break;f=(d=f).parentNode}d=h}n=-1===s||-1===l?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pi={focusedElem:e,selectionRange:n},rn=!1,dl=t;null!==dl;)if(e=(t=dl).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,dl=e;else for(;null!==dl;){t=dl;try{var p=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?m:Na(t.type,m),g);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(y(163))}}catch(e){ju(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,dl=e;break}dl=t.return}p=pl,pl=!1}(e,n),Nl(n,e),Cr(pi),rn=!!hi,pi=hi=null,e.current=n,Rl(n,e,i),ut(),Vl=s,Ot=o,Fl.transition=a}else e.current=n;if(ou&&(ou=!1,su=e,lu=i),0===(a=e.pendingLanes)&&(au=null),function(e){if(yt&&"function"==typeof yt.onCommitFiberRoot)try{yt.onCommitFiberRoot(vt,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),gu(e,ct()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ru)throw ru=!1,e=iu,iu=null,e;0!=(1&lu)&&0!==e.tag&&Au(),0!=(1&(a=e.pendingLanes))?e===cu?uu++:(uu=0,cu=e):uu=0,ta()}(e,t,n,r)}finally{Fl.transition=i,Ot=r}return null}function Au(){if(null!==su){var e=Lt(lu),t=Fl.transition,n=Ot;try{if(Fl.transition=null,Ot=16>e?16:e,null===su)var r=!1;else{if(e=su,su=null,lu=0,0!=(6&Vl))throw Error(y(331));var i=Vl;for(Vl|=4,dl=e.current;null!==dl;){var a=dl,o=a.child;if(0!=(16&dl.flags)){var s=a.deletions;if(null!==s){for(var l=0;l<s.length;l++){var u=s[l];for(dl=u;null!==dl;){var c=dl;switch(c.tag){case 0:case 11:case 15:ml(8,c,a)}var d=c.child;if(null!==d)d.return=c,dl=d;else for(;null!==dl;){var f=(c=dl).sibling,h=c.return;if(yl(c),c===u){dl=null;break}if(null!==f){f.return=h,dl=f;break}dl=h}}}var p=a.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}dl=a}}if(0!=(2064&a.subtreeFlags)&&null!==o)o.return=a,dl=o;else e:for(;null!==dl;){if(0!=(2048&(a=dl).flags))switch(a.tag){case 0:case 11:case 15:ml(9,a,a.return)}var v=a.sibling;if(null!==v){v.return=a.return,dl=v;break e}dl=a.return}}var b=e.current;for(dl=b;null!==dl;){var w=(o=dl).child;if(0!=(2064&o.subtreeFlags)&&null!==w)w.return=o,dl=w;else e:for(o=b;null!==dl;){if(0!=(2048&(s=dl).flags))try{switch(s.tag){case 0:case 11:case 15:gl(9,s)}}catch(e){ju(s,s.return,e)}if(s===o){dl=null;break e}var k=s.sibling;if(null!==k){k.return=s.return,dl=k;break e}dl=s.return}}if(Vl=i,ta(),yt&&"function"==typeof yt.onPostCommitFiberRoot)try{yt.onPostCommitFiberRoot(vt,e)}catch(e){}r=!0}return r}finally{Ot=n,Fl.transition=t}}return!1}function Mu(e,t,n){e=Ka(e,t=Cs(0,t=Ss(n,t),1),1),t=hu(),null!==e&&(Pt(e,1,t),gu(e,t))}function ju(e,t,n){if(3===e.tag)Mu(e,e,n);else for(;null!==t;){if(3===t.tag){Mu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===au||!au.has(r))){t=Ka(t,e=Ts(t,e=Ss(n,e),1),1),e=hu(),null!==t&&(Pt(t,1,e),gu(t,e));break}}t=t.return}}function Uu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=hu(),e.pingedLanes|=e.suspendedLanes&n,$l===e&&(Hl&n)===n&&(4===Kl||3===Kl&&(130023424&Hl)===Hl&&500>ct()-eu?Iu(e,0):Yl|=n),gu(e,t)}function zu(e,t){0===t&&(0==(1&e.mode)?t=1:(t=St,0==(130023424&(St<<=1))&&(St=4194304)));var n=hu();null!==(e=$a(e,t))&&(Pt(e,t,n),gu(e,n))}function Fu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),zu(e,n)}function Vu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}null!==r&&r.delete(t),zu(e,n)}function $u(e,t){return ot(e,t)}function Bu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hu(e,t,n,r){return new Bu(e,t,n,r)}function Wu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function qu(e,t){var n=e.alternate;return null===n?((n=Hu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ku(e,t,n,r,i,a){var o=2;if(r=e,"function"==typeof e)Wu(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case M:return Ju(n.children,i,a,t);case j:o=8,i|=8;break;case U:return(e=Hu(12,n,t,2|i)).elementType=U,e.lanes=a,e;case $:return(e=Hu(13,n,t,i)).elementType=$,e.lanes=a,e;case B:return(e=Hu(19,n,t,i)).elementType=B,e.lanes=a,e;case q:return Qu(n,i,a,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case z:o=10;break e;case F:o=9;break e;case V:o=11;break e;case H:o=14;break e;case W:o=16,r=null;break e}throw Error(y(130,null==e?e:typeof e,""))}return(t=Hu(o,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Ju(e,t,n,r){return(e=Hu(7,e,r,t)).lanes=n,e}function Qu(e,t,n,r){return(e=Hu(22,e,r,t)).elementType=q,e.lanes=n,e.stateNode={isHidden:!1},e}function Gu(e,t,n){return(e=Hu(6,e,null,t)).lanes=n,e}function Yu(e,t,n){return(t=Hu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nt(0),this.expirationTimes=Nt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zu(e,t,n,r,i,a,o,s,l){return e=new Xu(e,t,n,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Hu(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ha(a),e}function ec(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:A,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function tc(e){if(!e)return Fi;e:{if(tt(e=e._reactInternals)!==e||1!==e.tag)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Wi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(y(171))}if(1===e.tag){var n=e.type;if(Wi(n))return Ji(e,n,t)}return t}function nc(e,t,n,r,i,a,o,s,l){return(e=Zu(n,r,!0,e,0,a,0,s,l)).context=tc(null),n=e.current,(a=qa(r=hu(),i=pu(n))).callback=null!=t?t:null,Ka(n,a,i),e.current.lanes=i,Pt(e,i,r),gu(e,r),e}function rc(e,t,n,r){var i=t.current,a=hu(),o=pu(i);return n=tc(n),null===t.context?t.context=n:t.pendingContext=n,(t=qa(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ka(i,t,o))&&(mu(e,i,o,a),Ja(e,i,o)),o}function ic(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function ac(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function oc(e,t){ac(e,t),(e=e.alternate)&&ac(e,t)}Ml=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||$i.current)Ls=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return Ls=!1,function(e,t,n){switch(t.tag){case 3:Bs(t),xa();break;case 5:bo(t);break;case 1:Wi(t.type)&&Qi(t);break;case 4:vo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;zi(Pa,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(zi(ko,1&ko.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Gs(e,t,n):(zi(ko,1&ko.current),null!==(e=rl(e,t,n))?e.sibling:null);zi(ko,1&ko.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return tl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),zi(ko,ko.current),r)break;return null;case 22:case 23:return t.lanes=0,Us(e,t,n)}return rl(e,t,n)}(e,t,n);Ls=0!=(131072&e.flags)}else Ls=!1,va&&0!=(1048576&t.flags)&&fa(t,aa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;nl(e,t),e=t.pendingProps;var i=Hi(t,Vi.current);ja(t,n),i=jo(null,t,r,e,i,n);var a=Uo();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Wi(r)?(a=!0,Qi(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Ha(t),i.updater=eo,t.stateNode=i,i._reactInternals=t,io(t,r,e,n),t=$s(null,t,r,!0,a,n)):(t.tag=0,va&&a&&ha(t),Ds(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(nl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Wu(e)?1:0;if(null!=e){if((e=e.$$typeof)===V)return 11;if(e===H)return 14}return 2}(r),e=Na(r,e),i){case 0:t=Fs(null,t,r,e,n);break e;case 1:t=Vs(null,t,r,e,n);break e;case 11:t=As(null,t,r,e,n);break e;case 14:t=Ms(null,t,r,Na(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Fs(e,t,r,i=t.elementType===r?i:Na(r,i),n);case 1:return r=t.type,i=t.pendingProps,Vs(e,t,r,i=t.elementType===r?i:Na(r,i),n);case 3:e:{if(Bs(t),null===e)throw Error(y(387));r=t.pendingProps,i=(a=t.memoizedState).element,Wa(e,t),Ga(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Hs(e,t,r,n,i=Ss(Error(y(423)),t));break e}if(r!==i){t=Hs(e,t,r,n,i=Ss(Error(y(424)),t));break e}for(ga=_i(t.stateNode.containerInfo.firstChild),ma=t,va=!0,ya=null,n=co(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(xa(),r===i){t=rl(e,t,n);break e}Ds(e,t,r,n)}t=t.child}return t;case 5:return bo(t),null===e&&_a(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,o=i.children,mi(r,i)?o=null:null!==a&&mi(r,a)&&(t.flags|=32),zs(e,t),Ds(e,t,o,n),t.child;case 6:return null===e&&_a(t),null;case 13:return Gs(e,t,n);case 4:return vo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=uo(t,null,r,n):Ds(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,As(e,t,r,i=t.elementType===r?i:Na(r,i),n);case 7:return Ds(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ds(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,zi(Pa,r._currentValue),r._currentValue=o,null!==a)if(wr(a.value,o)){if(a.children===i.children&&!$i.current){t=rl(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){o=a.child;for(var l=s.firstContext;null!==l;){if(l.context===r){if(1===a.tag){(l=qa(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),Ma(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(10===a.tag)o=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(o=a.return))throw Error(y(341));o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),Ma(o,n,t),o=a.sibling}else o=a.child;if(null!==o)o.return=a;else for(o=a;null!==o;){if(o===t){o=null;break}if(null!==(a=o.sibling)){a.return=o.return,o=a;break}o=o.return}a=o}Ds(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ja(t,n),r=r(i=Ua(i)),t.flags|=1,Ds(e,t,r,n),t.child;case 14:return i=Na(r=t.type,t.pendingProps),Ms(e,t,r,i=Na(r.type,i),n);case 15:return js(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Na(r,i),nl(e,t),t.tag=1,Wi(r)?(e=!0,Qi(t)):e=!1,ja(t,n),no(t,r,i),io(t,r,i,n),$s(null,t,r,!0,e,n);case 19:return tl(e,t,n);case 22:return Us(e,t,n)}throw Error(y(156,t.tag))};var sc="function"==typeof reportError?reportError:function(e){console.error(e)};function lc(e){this._internalRoot=e}function uc(e){this._internalRoot=e}function cc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function dc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function fc(){}function hc(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"==typeof i){var s=i;i=function(){var e=ic(o);s.call(e)}}rc(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"==typeof r){var a=r;r=function(){var e=ic(o);a.call(e)}}var o=nc(t,r,e,0,null,!1,0,"",fc);return e._reactRootContainer=o,e[Ci]=o.current,ti(8===e.nodeType?e.parentNode:e),Su(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var s=r;r=function(){var e=ic(l);s.call(e)}}var l=Zu(e,0,!1,null,0,!1,0,"",fc);return e._reactRootContainer=l,e[Ci]=l.current,ti(8===e.nodeType?e.parentNode:e),Su((function(){rc(t,l,n,r)})),l}(n,t,e,i,r);return ic(o)}uc.prototype.render=lc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(y(409));rc(e,t,null,null)},uc.prototype.unmount=lc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Su((function(){rc(null,e,null,null)})),t[Ci]=null}},uc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&0!==t&&t<qt[n].priority;n++);qt.splice(n,0,e),0===n&&Gt(e)}},Dt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Et(t.pendingLanes);0!==n&&(Rt(t,1|n),gu(t,ct()),0==(6&Vl)&&(tu=ct()+500,ta()))}break;case 13:Su((function(){var t=$a(e,1);if(null!==t){var n=hu();mu(t,e,1,n)}})),oc(e,1)}},At=function(e){if(13===e.tag){var t=$a(e,134217728);if(null!==t)mu(t,e,134217728,hu());oc(e,134217728)}},Mt=function(e){if(13===e.tag){var t=pu(e),n=$a(e,t);if(null!==n)mu(n,e,t,hu());oc(e,t)}},jt=function(){return Ot},Ut=function(e,t){var n=Ot;try{return Ot=e,t()}finally{Ot=n}},Ae=function(e,t,n){switch(t){case"input":if(de(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Di(r);if(!i)throw Error(y(90));oe(r),de(r,i)}}}break;case"textarea":ye(e,n);break;case"select":null!=(t=n.value)&&me(e,!!n.multiple,t,!1)}},Ve=_u,$e=Su;var pc={usingClientEntryPoint:!1,Events:[Oi,Li,Di,ze,Fe,_u]},mc={findFiberByHostInstance:Ri,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gc={bundleType:mc.bundleType,version:mc.version,rendererPackageName:mc.rendererPackageName,rendererConfig:mc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=it(e))?null:e.stateNode},findFiberByHostInstance:mc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{vt=vc.inject(gc),yt=vc}catch(e){}}r=pc,i=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!cc(t))throw Error(y(200));return ec(e,t,null,n)},o=function(e,t){if(!cc(e))throw Error(y(299));var n=!1,r="",i=sc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Zu(e,1,!1,null,0,n,0,r,i),e[Ci]=t.current,ti(8===e.nodeType?e.parentNode:e),new lc(t)},s=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(y(188));throw e=Object.keys(e).join(","),Error(y(268,e))}return e=null===(e=it(t))?null:e.stateNode},l=function(e){return Su(e)},u=function(e,t,n){if(!dc(t))throw Error(y(200));return hc(null,e,t,!0,n)},c=function(e,t,n){if(!cc(e))throw Error(y(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",o=sc;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=nc(t,null,e,1,null!=n?n:null,i,0,a,o),e[Ci]=t.current,ti(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new uc(t)},d=function(e,t,n){if(!dc(t))throw Error(y(200));return hc(null,e,t,!1,n)},f=function(e){if(!dc(e))throw Error(y(40));return!!e._reactRootContainer&&(Su((function(){hc(null,null,e,!1,(function(){e._reactRootContainer=null,e[Ci]=null}))})),!0)},h=_u,p=function(e,t,n,r){if(!dc(n))throw Error(y(200));if(null==e||void 0===e._reactInternals)throw Error(y(38));return hc(e,t,n,!1,r)},m="18.2.0-next-9e3b772b8-20220608"})),a.register("hnwcm",(function(e,t){"use strict";e.exports=a("7yTEO")})),a.register("7yTEO",(function(t,n){var r,i,a,o,s,l,u,c,d,f,h,p,m,g,v,y,b,w,k;function _(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<I(i,t)))break e;e[r]=t,e[n]=i,n=r}}function S(e){return 0===e.length?null:e[0]}function E(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var o=2*(r+1)-1,s=e[o],l=o+1,u=e[l];if(0>I(s,n))l<i&&0>I(u,s)?(e[r]=u,e[l]=n,r=l):(e[r]=s,e[o]=n,r=o);else{if(!(l<i&&0>I(u,n)))break e;e[r]=u,e[l]=n,r=l}}}return t}function I(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e(t.exports,"unstable_now",(function(){return r}),(function(e){return r=e})),e(t.exports,"unstable_IdlePriority",(function(){return i}),(function(e){return i=e})),e(t.exports,"unstable_ImmediatePriority",(function(){return a}),(function(e){return a=e})),e(t.exports,"unstable_LowPriority",(function(){return o}),(function(e){return o=e})),e(t.exports,"unstable_NormalPriority",(function(){return s}),(function(e){return s=e})),e(t.exports,"unstable_Profiling",(function(){return l}),(function(e){return l=e})),e(t.exports,"unstable_UserBlockingPriority",(function(){return u}),(function(e){return u=e})),e(t.exports,"unstable_cancelCallback",(function(){return c}),(function(e){return c=e})),e(t.exports,"unstable_continueExecution",(function(){return d}),(function(e){return d=e})),e(t.exports,"unstable_forceFrameRate",(function(){return f}),(function(e){return f=e})),e(t.exports,"unstable_getCurrentPriorityLevel",(function(){return h}),(function(e){return h=e})),e(t.exports,"unstable_getFirstCallbackNode",(function(){return p}),(function(e){return p=e})),e(t.exports,"unstable_next",(function(){return m}),(function(e){return m=e})),e(t.exports,"unstable_pauseExecution",(function(){return g}),(function(e){return g=e})),e(t.exports,"unstable_requestPaint",(function(){return v}),(function(e){return v=e})),e(t.exports,"unstable_runWithPriority",(function(){return y}),(function(e){return y=e})),e(t.exports,"unstable_scheduleCallback",(function(){return b}),(function(e){return b=e})),e(t.exports,"unstable_shouldYield",(function(){return w}),(function(e){return w=e})),e(t.exports,"unstable_wrapCallback",(function(){return k}),(function(e){return k=e})),"object"==typeof performance&&"function"==typeof performance.now){var x=performance;r=function(){return x.now()}}else{var C=Date,T=C.now();r=function(){return C.now()-T}}var N=[],P=[],R=1,O=null,L=3,D=!1,A=!1,M=!1,j="function"==typeof setTimeout?setTimeout:null,U="function"==typeof clearTimeout?clearTimeout:null,z="undefined"!=typeof setImmediate?setImmediate:null;function F(e){for(var t=S(P);null!==t;){if(null===t.callback)E(P);else{if(!(t.startTime<=e))break;E(P),t.sortIndex=t.expirationTime,_(N,t)}t=S(P)}}function V(e){if(M=!1,F(e),!A)if(null!==S(N))A=!0,Z($);else{var t=S(P);null!==t&&ee(V,t.startTime-e)}}function $(e,t){A=!1,M&&(M=!1,U(q),q=-1),D=!0;var n=L;try{for(F(t),O=S(N);null!==O&&(!(O.expirationTime>t)||e&&!Q());){var i=O.callback;if("function"==typeof i){O.callback=null,L=O.priorityLevel;var a=i(O.expirationTime<=t);t=r(),"function"==typeof a?O.callback=a:O===S(N)&&E(N),F(t)}else E(N);O=S(N)}if(null!==O)var o=!0;else{var s=S(P);null!==s&&ee(V,s.startTime-t),o=!1}return o}finally{O=null,L=n,D=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var B,H=!1,W=null,q=-1,K=5,J=-1;function Q(){return!(r()-J<K)}function G(){if(null!==W){var e=r();J=e;var t=!0;try{t=W(!0,e)}finally{t?B():(H=!1,W=null)}}else H=!1}if("function"==typeof z)B=function(){z(G)};else if("undefined"!=typeof MessageChannel){var Y=new MessageChannel,X=Y.port2;Y.port1.onmessage=G,B=function(){X.postMessage(null)}}else B=function(){j(G,0)};function Z(e){W=e,H||(H=!0,B())}function ee(e,t){q=j((function(){e(r())}),t)}i=5,a=1,o=4,s=3,l=null,u=2,c=function(e){e.callback=null},d=function(){A||D||(A=!0,Z($))},f=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<e?Math.floor(1e3/e):5},h=function(){return L},p=function(){return S(N)},m=function(e){switch(L){case 1:case 2:case 3:var t=3;break;default:t=L}var n=L;L=t;try{return e()}finally{L=n}},g=function(){},v=function(){},y=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=L;L=e;try{return t()}finally{L=n}},b=function(e,t,n){var i=r();switch("object"==typeof n&&null!==n?n="number"==typeof(n=n.delay)&&0<n?i+n:i:n=i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return e={id:R++,callback:t,priorityLevel:e,startTime:n,expirationTime:a=n+a,sortIndex:-1},n>i?(e.sortIndex=n,_(P,e),null===S(N)&&e===S(P)&&(M?(U(q),q=-1):M=!0,ee(V,n-i))):(e.sortIndex=a,_(N,e),A||D||(A=!0,Z($))),e},w=Q,k=function(e){var t=L;return function(){var n=L;L=t;try{return e.apply(this,arguments)}finally{L=n}}}}));var o,s;o=a("2nacn"),a("jE8J5");var l;!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),s=(l=a("2wM5b")).createRoot,l.hydrateRoot;var u,c,d=a("jE8J5");
/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}(c=u||(u={})).Pop="POP",c.Push="PUSH",c.Replace="REPLACE";const h="popstate";function p(e){return void 0===e&&(e={}),w((function(e,t){let{pathname:n="/",search:r="",hash:i=""}=b(e.location.hash.substr(1));return v("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"==typeof t?t:y(t))}),(function(e,t){m("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),e)}function m(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function g(e){return{usr:e.state,key:e.key}}function v(e,t,n,r){return void 0===n&&(n=null),f({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?b(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function y(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function b(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function w(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=u.Pop,l=null;function c(){s=u.Pop,l&&l({action:s,location:d.location})}let d={get action(){return s},get location(){return e(i,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(h,c),l=e,()=>{i.removeEventListener(h,c),l=null}},createHref:e=>t(i,e),push:function(e,t){s=u.Push;let r=v(d.location,e,t);n&&n(r,e);let c=g(r),f=d.createHref(r);try{o.pushState(c,"",f)}catch(e){i.location.assign(f)}a&&l&&l({action:s,location:r})},replace:function(e,t){s=u.Replace;let r=v(d.location,e,t);n&&n(r,e);let i=g(r),c=d.createHref(r);o.replaceState(i,"",c),a&&l&&l({action:s,location:r})},go:e=>o.go(e)};return d}var k,_;function S(e,t,n){void 0===n&&(n="/");let r=P(("string"==typeof t?b(t):t).pathname||"/",n);if(null==r)return null;let i=E(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let e=0;null==a&&e<i.length;++e)a=T(i[e],r);return a}function E(e,t,n,r){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=""),e.forEach(((e,i)=>{let a={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(R(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let o=A([r,a.relativePath]),s=n.concat(a);e.children&&e.children.length>0&&(R(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+o+'".'),E(e.children,t,s,o)),(null!=e.path||e.index)&&t.push({path:o,score:C(o,e.index),routesMeta:s})})),t}(_=k||(k={})).data="data",_.deferred="deferred",_.redirect="redirect",_.error="error";const I=/^:\w+$/,x=e=>"*"===e;function C(e,t){let n=e.split("/"),r=n.length;return n.some(x)&&(r+=-2),t&&(r+=2),n.filter((e=>!x(e))).reduce(((e,t)=>e+(I.test(t)?3:""===t?1:10)),r)}function T(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let e=0;e<n.length;++e){let o=n[e],s=e===n.length-1,l="/"===i?t:t.slice(i.length)||"/",u=N({path:o.relativePath,caseSensitive:o.caseSensitive,end:s},l);if(!u)return null;Object.assign(r,u.params);let c=o.route;a.push({params:r,pathname:A([i,u.pathname]),pathnameBase:M(A([i,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(i=A([i,u.pathnameBase]))}return a}function N(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);O("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(r.push(t),"([^\\/]+)")));e.endsWith("*")?(r.push("*"),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");return[new RegExp(i,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return O(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(s[n]||"",t),e}),{}),pathname:a,pathnameBase:o,pattern:e}}function P(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function R(e,t){if(!1===e||null==e)throw new Error(t)}function O(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function L(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function D(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=b(e):(i=f({},e),R(!i.pathname||!i.pathname.includes("?"),L("?","pathname","search",i)),R(!i.pathname||!i.pathname.includes("#"),L("#","pathname","hash",i)),R(!i.search||!i.search.includes("#"),L("#","search","hash",i)));let a,o=""===e||""===i.pathname,s=o?"/":i.pathname;if(r||null==s)a=n;else{let e=t.length-1;if(s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?b(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:j(r),hash:U(i)}}(i,a),u=s&&"/"!==s&&s.endsWith("/"),c=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}const A=e=>e.join("/").replace(/\/\/+/g,"/"),M=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),j=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",U=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class z extends Error{}class F{constructor(e,t,n){this.status=e,this.statusText=t||"",this.data=n}}function V(e){return e instanceof F}d=a("jE8J5");function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}const B="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:H,useEffect:W,useLayoutEffect:q,useDebugValue:K}=d;function J(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!B(n,e)}catch(e){return!0}}const Q=!!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)?function(e,t,n){return t()}:function(e,t,n){const r=t(),[{inst:i},a]=H({inst:{value:r,getSnapshot:t}});return q((()=>{i.value=r,i.getSnapshot=t,J(i)&&a({inst:i})}),[e,r,t]),W((()=>{J(i)&&a({inst:i});return e((()=>{J(i)&&a({inst:i})}))}),[e]),K(r),r};"useSyncExternalStore"in d&&d.useSyncExternalStore;const G=d.createContext(null),Y=d.createContext(null),X=d.createContext(null),Z=d.createContext(null),ee=d.createContext(null),te=d.createContext({outlet:null,matches:[]}),ne=d.createContext(null);function re(e,t){let{relative:n}=void 0===t?{}:t;!ie()&&R(!1);let{basename:r,navigator:i}=d.useContext(Z),{hash:a,pathname:o,search:s}=ue(e,{relative:n}),l=o;return"/"!==r&&(l="/"===o?r:A([r,o])),i.createHref({pathname:l,search:s,hash:a})}function ie(){return null!=d.useContext(ee)}function ae(){return!ie()&&R(!1),d.useContext(ee).location}function oe(e){return e.filter(((t,n)=>0===n||!t.route.index&&t.pathnameBase!==e[n-1].pathnameBase))}function se(){!ie()&&R(!1);let{basename:e,navigator:t}=d.useContext(Z),{matches:n}=d.useContext(te),{pathname:r}=ae(),i=JSON.stringify(oe(n).map((e=>e.pathnameBase))),a=d.useRef(!1);return d.useEffect((()=>{a.current=!0})),d.useCallback((function(n,o){if(void 0===o&&(o={}),!a.current)return;if("number"==typeof n)return void t.go(n);let s=D(n,JSON.parse(i),r,"path"===o.relative);"/"!==e&&(s.pathname="/"===s.pathname?e:A([e,s.pathname])),(o.replace?t.replace:t.push)(s,o.state,o)}),[e,t,i,r])}function le(){let{matches:e}=d.useContext(te),t=e[e.length-1];return t?t.params:{}}function ue(e,t){let{relative:n}=void 0===t?{}:t,{matches:r}=d.useContext(te),{pathname:i}=ae(),a=JSON.stringify(oe(r).map((e=>e.pathnameBase)));return d.useMemo((()=>D(e,JSON.parse(a),i,"path"===n)),[e,a,i,n])}function ce(){let e=function(){var e;let t=d.useContext(ne),n=ve(me.UseRouteError),r=d.useContext(te),i=r.matches[r.matches.length-1];return t||(!r&&R(!1),!i.route.id&&R(!1),null==(e=n.errors)?void 0:e[i.route.id])}(),t=V(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r};return d.createElement(d.Fragment,null,d.createElement("h2",null,"Unhandled Thrown Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),n?d.createElement("pre",{style:i},n):null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:a},"errorElement")," props on ",d.createElement("code",{style:a},"<Route>")))}class de extends d.Component{static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?d.createElement(ne.Provider,{value:this.state.error,children:this.props.component}):this.props.children}constructor(e){super(e),this.state={location:e.location,error:e.error}}}function fe(e){let{routeContext:t,match:n,children:r}=e,i=d.useContext(G);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),d.createElement(te.Provider,{value:t},r)}function he(e,t,n){if(void 0===t&&(t=[]),null==e){if(null==n||!n.errors)return null;e=n.matches}let r=e,i=null==n?void 0:n.errors;if(null!=i){let e=r.findIndex((e=>e.route.id&&(null==i?void 0:i[e.route.id])));!(e>=0)&&R(!1),r=r.slice(0,Math.min(r.length,e+1))}return r.reduceRight(((e,a,o)=>{let s=a.route.id?null==i?void 0:i[a.route.id]:null,l=n?a.route.errorElement||d.createElement(ce,null):null,u=()=>d.createElement(fe,{match:a,routeContext:{outlet:e,matches:t.concat(r.slice(0,o+1))}},s?l:void 0!==a.route.element?a.route.element:e);return n&&(a.route.errorElement||0===o)?d.createElement(de,{location:n.location,component:l,error:s,children:u()}):u()}),null)}var pe,me,ge;function ve(e){let t=d.useContext(X);return!t&&R(!1),t}(pe||(pe={})).UseRevalidator="useRevalidator",(ge=me||(me={})).UseLoaderData="useLoaderData",ge.UseActionData="useActionData",ge.UseRouteError="useRouteError",ge.UseNavigation="useNavigation",ge.UseRouteLoaderData="useRouteLoaderData",ge.UseMatches="useMatches",ge.UseRevalidator="useRevalidator";function ye(e){R(!1)}function be(e){let{basename:t="/",children:n=null,location:r,navigationType:i=u.Pop,navigator:a,static:o=!1}=e;ie()&&R(!1);let s=t.replace(/^\/*/,"/"),l=d.useMemo((()=>({basename:s,navigator:a,static:o})),[s,a,o]);"string"==typeof r&&(r=b(r));let{pathname:c="/",search:f="",hash:h="",state:p=null,key:m="default"}=r,g=d.useMemo((()=>{let e=P(c,s);return null==e?null:{pathname:e,search:f,hash:h,state:p,key:m}}),[s,c,f,h,p,m]);return null==g?null:d.createElement(Z.Provider,{value:l},d.createElement(ee.Provider,{children:n,value:{location:g,navigationType:i}}))}function we(e){let{children:t,location:n}=e,r=d.useContext(Y);return function(e,t){!ie()&&R(!1);let n,r=d.useContext(X),{matches:i}=d.useContext(te),a=i[i.length-1],o=a?a.params:{},s=(a&&a.pathname,a?a.pathnameBase:"/"),l=(a&&a.route,ae());if(t){var c;let e="string"==typeof t?b(t):t;"/"!==s&&!(null==(c=e.pathname)?void 0:c.startsWith(s))&&R(!1),n=e}else n=l;let f=n.pathname||"/",h=S(e,{pathname:"/"===s?f:f.slice(s.length)||"/"}),p=he(h&&h.map((e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:A([s,e.pathname]),pathnameBase:"/"===e.pathnameBase?s:A([s,e.pathnameBase])}))),i,r||void 0);return t?d.createElement(ee.Provider,{value:{location:$({pathname:"/",search:"",hash:"",state:null,key:"default"},n),navigationType:u.Pop}},p):p}(r&&!t?r.router.routes:Ee(t),n)}var ke,_e;(_e=ke||(ke={}))[_e.pending=0]="pending",_e[_e.success=1]="success",_e[_e.error=2]="error";new Promise((()=>{}));class Se extends d.Component{static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:n}=this.props,r=null,i=ke.pending;if(n instanceof Promise)if(this.state.error){ke.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>e})}else n._tracked?(n,void 0!==r._error?ke.error:void 0!==r._data?ke.success:ke.pending):(ke.pending,Object.defineProperty(n,"_tracked",{get:()=>!0}),n.then((e=>Object.defineProperty(n,"_data",{get:()=>e})),(e=>Object.defineProperty(n,"_error",{get:()=>e}))));else ke.success,Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>n});if(i===ke.error&&r._error instanceof z)throw $9467111a9b363da5$var$neverSettledPromise;if(i===ke.error&&!t)throw r._error;if(i===ke.error)return d.createElement($9467111a9b363da5$var$AwaitContext.Provider,{value:r,children:t});if(i===ke.success)return d.createElement($9467111a9b363da5$var$AwaitContext.Provider,{value:r,children:e});throw r}constructor(e){super(e),this.state={error:null}}}function Ee(e,t){void 0===t&&(t=[]);let n=[];return d.Children.forEach(e,((e,r)=>{if(!d.isValidElement(e))return;if(e.type===d.Fragment)return void n.push.apply(n,Ee(e.props.children,t));e.type!==ye&&R(!1),e.props.index&&e.props.children&&R(!1);let i=[...t,r],a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,hasErrorBoundary:null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle};e.props.children&&(a.children=Ee(e.props.children,i)),n.push(a)})),n}function Ie(){return Ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ie.apply(this,arguments)}function xe(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}const Ce=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Te(e){let{basename:t,children:n,window:r}=e,i=d.useRef();null==i.current&&(i.current=p({window:r,v5Compat:!0}));let a=i.current,[o,s]=d.useState({action:a.action,location:a.location});return d.useLayoutEffect((()=>a.listen(s)),[a]),d.createElement(be,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})}const Ne=d.forwardRef((function(e,t){let{onClick:n,relative:r,reloadDocument:i,replace:a,state:o,target:s,to:l,preventScrollReset:u}=e,c=xe(e,Ce),f=re(l,{relative:r}),h=function(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=void 0===t?{}:t,s=se(),l=ae(),u=ue(e,{relative:o});return d.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:y(l)===y(u);s(e,{replace:n,state:i,preventScrollReset:a,relative:o})}}),[l,s,u,r,i,n,e,a,o])}(l,{replace:a,state:o,target:s,preventScrollReset:u,relative:r});return d.createElement("a",Ie({},c,{href:f,onClick:i?n:function(e){n&&n(e),e.defaultPrevented||h(e)},ref:t,target:s}))}));var Pe,Re;!function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"}(Pe||(Pe={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Re||(Re={}));var Oe;Oe=JSON.parse('{"name":"hnews","version":"3.2.2","description":"HNews","private":true,"source":"src/index.html","browserslist":"defaults","scripts":{"update":"ncu -u","serve":"parcel -p 8000 --lazy","watch":"parcel watch","build":"rm -rf dist && rm -rf docs && parcel build --no-source-maps --dist-dir docs --public-url=/hnews"},"author":"Luca Bacchi <bacchilu@gmail.com> (http://www.lucabacchi.it)","license":"ISC","prettier":{"arrowParens":"always","bracketSpacing":false,"embeddedLanguageFormatting":"auto","htmlWhitespaceSensitivity":"css","insertPragma":false,"jsxBracketSameLine":false,"jsxSingleQuote":false,"printWidth":120,"proseWrap":"preserve","quoteProps":"as-needed","requirePragma":false,"semi":true,"singleQuote":true,"tabWidth":4,"trailingComma":"es5","useTabs":false,"vueIndentScriptAndStyle":false},"devDependencies":{"@parcel/packager-raw-url":"^2.7.0","@parcel/transformer-webmanifest":"^2.7.0","@types/human-date":"^1.4.2","@types/react":"^18.0.21","@types/react-dom":"^18.0.6","npm-check-updates":"^16.3.14","parcel":"^2.7.0","process":"^0.11.10"},"dependencies":{"firebase":"^9.12.1","human-date":"^1.4.0","react":"^18.2.0","react-dom":"^18.2.0","react-intersection-observer-hook":"^2.0.6","react-router-dom":"^6.4.2","swr":"^1.3.0"}}'),a("jE8J5");var Le={};!function(){var e={months:["January","February","March","April","May","June","July","August","September","October","November","December"],toUTC:function(e){var t=e?new Date(e):new Date;return t=new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds())},monthName:function(t){var n;return n="number"==typeof t?t:new Date(t).getMonth()+1,e.months[n-1]},relativeTime:function(e,t){var n,r,i,a,o,s,l=[];if("number"==typeof e?n=e:(a=new Date(e).getTime(),n=((new Date).getTime()-a)/1e3*-1),t||(t={}),t.futureSuffix||(t.futureSuffix="from now"),t.pastSuffix||(t.pastSuffix="ago"),t.presentText||(t.presentText="now"),t.returnObject||(t.returnObject=!1),o=n<0,n=Math.abs(n),r={seconds:Math.floor(n%31536e3%86400%3600%60),minutes:Math.floor(n%31536e3%86400%3600/60),hours:Math.floor(n%31536e3%86400/3600),days:Math.floor(n%31536e3/86400),years:Math.floor(n/31536e3),past:o},t.returnObject)return r;if(0===n)return t.presentText;function u(e,n){s&&(s=t.allUnits,l.push(e+" "+n+(e>1?"s":"")))}return i=r.past?t.pastSuffix:t.futureSuffix,s=!0,r.years&&u(r.years,"year"),r.days&&u(r.days,"day"),r.hours&&u(r.hours,"hour"),r.minutes&&u(r.minutes,"minute"),r.seconds&&u(r.seconds,"second"),l.join(", ")+" "+i},prettyPrint:function(e,t){var n,r,i,a,o,s,l,u,c;return e?"number"==typeof e&&(e=(new Date).setSeconds(e)):e=new Date,t||(t={}),t.showTime||(t.showTime=!1),a=(i=(n=new Date(e)).getDate())>3&&i<21?i+"th":i%10==1?i+"st":i%10==2?i+"nd":i%10==3?i+"rd":i+"th",o=n.getFullYear(),r=this.monthName(n.getMonth()+1)+" "+a+", "+o,c=(l=n.getHours())>=12?"pm":"am",s=(l=l%12?l%12:12)+":"+(u=(u=n.getMinutes())<10?"0"+u:u)+" "+c,t.showTime?r+" at "+s:r}};if(Le)Le=e;else{if("function"==typeof define&&define.amd)return define([],(function(){return e}));this.humandate=e}}();d=a("jE8J5");var De,Ae,Me,je=De={};function Ue(){throw new Error("setTimeout has not been defined")}function ze(){throw new Error("clearTimeout has not been defined")}function Fe(e){if(Ae===setTimeout)return setTimeout(e,0);if((Ae===Ue||!Ae)&&setTimeout)return Ae=setTimeout,setTimeout(e,0);try{return Ae(e,0)}catch(t){try{return Ae.call(null,e,0)}catch(t){return Ae.call(this,e,0)}}}!function(){try{Ae="function"==typeof setTimeout?setTimeout:Ue}catch(e){Ae=Ue}try{Me="function"==typeof clearTimeout?clearTimeout:ze}catch(e){Me=ze}}();var Ve,$e=[],Be=!1,He=-1;function We(){Be&&Ve&&(Be=!1,Ve.length?$e=Ve.concat($e):He=-1,$e.length&&qe())}function qe(){if(!Be){var e=Fe(We);Be=!0;for(var t=$e.length;t;){for(Ve=$e,$e=[];++He<t;)Ve&&Ve[He].run();He=-1,t=$e.length}Ve=null,Be=!1,function(e){if(Me===clearTimeout)return clearTimeout(e);if((Me===ze||!Me)&&clearTimeout)return Me=clearTimeout,clearTimeout(e);try{Me(e)}catch(t){try{return Me.call(null,e)}catch(t){return Me.call(this,e)}}}(e)}}function Ke(e,t){this.fun=e,this.array=t}function Je(){}je.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];$e.push(new Ke(e,t)),1!==$e.length||Be||Fe(qe)},Ke.prototype.run=function(){this.fun.apply(null,this.array)},je.title="browser",je.browser=!0,je.env={},je.argv=[],je.version="",je.versions={},je.on=Je,je.addListener=Je,je.once=Je,je.off=Je,je.removeListener=Je,je.removeAllListeners=Je,je.emit=Je,je.prependListener=Je,je.prependOnceListener=Je,je.listeners=function(e){return[]},je.binding=function(e){throw new Error("process.binding is not supported")},je.cwd=function(){return"/"},je.chdir=function(e){throw new Error("process.chdir is not supported")},je.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qe=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ge={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,u=i>>2,c=(3&i)<<4|o>>4;let d=(15&o)<<2|l>>6,f=63&l;s||(f=64,a||(d=64)),r.push(n[u],n[c],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qe(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){const a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==a||null==o||null==s)throw Error();const l=i<<2|a>>4;if(r.push(l),64!==o){const e=a<<4&240|o>>2;if(r.push(e),64!==s){const e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ye=function(e){return function(e){const t=Qe(e);return Ge.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Xe=function(e){try{return Ge.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ze(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function et(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function tt(){const e=Ze();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nt=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,rt=()=>{try{return nt()||(()=>{if(void 0===De||void 0===De.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Xe(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},it=e=>{var t,n;return null===(n=null===(t=rt())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},at=e=>{var t;return null===(t=rt())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lt.prototype.create)}}class lt{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?function(e,t){return e.replace(ut,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${a} (${r}).`;return new st(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const ut=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function dt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],a=t[i];if(ft(n)&&ft(a)){if(!dt(n,a))return!1}else if(n!==a)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function ft(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function pt(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function mt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e,t){const n=new vt(e,t);return n.subscribe.bind(n)}class vt{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=yt),void 0===r.error&&(r.error=yt),void 0===r.complete&&(r.complete=yt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function yt(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bt(e){return e&&e._delegate?e._delegate:e}class wt{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ot;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===kt?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class St{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _t(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=[];var It,xt;(xt=It||(It={}))[xt.DEBUG=0]="DEBUG",xt[xt.VERBOSE=1]="VERBOSE",xt[xt.INFO=2]="INFO",xt[xt.WARN=3]="WARN",xt[xt.ERROR=4]="ERROR",xt[xt.SILENT=5]="SILENT";const Ct={debug:It.DEBUG,verbose:It.VERBOSE,info:It.INFO,warn:It.WARN,error:It.ERROR,silent:It.SILENT},Tt=It.INFO,Nt={[It.DEBUG]:"log",[It.VERBOSE]:"log",[It.INFO]:"info",[It.WARN]:"warn",[It.ERROR]:"error"},Pt=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Nt[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Rt{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in It))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ct[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,It.DEBUG,...e),this._logHandler(this,It.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,It.VERBOSE,...e),this._logHandler(this,It.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,It.INFO,...e),this._logHandler(this,It.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,It.WARN,...e),this._logHandler(this,It.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,It.ERROR,...e),this._logHandler(this,It.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Tt,this._logHandler=Pt,this._userLogHandler=null,Et.push(this)}}let Ot,Lt;const Dt=new WeakMap,At=new WeakMap,Mt=new WeakMap,jt=new WeakMap,Ut=new WeakMap;let zt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return At.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Mt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $t(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ft(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Lt||(Lt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Bt(this),t),$t(Dt.get(this))}:function(...t){return $t(e.apply(Bt(this),t))}:function(t,...n){const r=e.call(Bt(this),t,...n);return Mt.set(r,t.sort?t.sort():[t]),$t(r)}}function Vt(e){return"function"==typeof e?Ft(e):(e instanceof IDBTransaction&&function(e){if(At.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));At.set(e,t)}(e),t=e,(Ot||(Ot=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,zt):e);var t}function $t(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t($t(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&Dt.set(t,e)})).catch((()=>{})),Ut.set(t,e),t}(e);if(jt.has(e))return jt.get(e);const t=Vt(e);return t!==e&&(jt.set(e,t),Ut.set(t,e)),t}const Bt=e=>Ut.get(e);function Ht(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=$t(o);return r&&o.addEventListener("upgradeneeded",(e=>{r($t(o.result),e.oldVersion,e.newVersion,$t(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),s.then((e=>{a&&e.addEventListener("close",(()=>a())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),s}const Wt=["get","getKey","getAll","getAllKeys","count"],qt=["put","add","delete","clear"],Kt=new Map;function Jt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Kt.get(t))return Kt.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=qt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Wt.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,i?"readwrite":"readonly");let o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return Kt.set(t,a),a}zt=(e=>({...e,get:(t,n,r)=>Jt(t,n)||e.get(t,n,r),has:(t,n)=>!!Jt(t,n)||e.has(t,n)}))(zt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Gt="@firebase/app",Yt="0.8.2",Xt=new Rt("@firebase/app"),Zt="[DEFAULT]",en={[Gt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},tn=new Map,nn=new Map;function rn(e,t){try{e.container.addComponent(t)}catch(n){Xt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function an(e){const t=e.name;if(nn.has(t))return Xt.debug(`There were multiple attempts to register component ${t}.`),!1;nn.set(t,e);for(const t of tn.values())rn(t,e);return!0}function on(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sn=new lt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ln{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new wt("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="9.12.1";function cn(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Zt,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw sn.create("bad-app-name",{appName:String(i)});var a;if(n||(n=null===(a=rt())||void 0===a?void 0:a.config),!n)throw sn.create("no-options");const o=tn.get(i);if(o){if(dt(n,o.options)&&dt(r,o.config))return o;throw sn.create("duplicate-app",{appName:i})}const s=new St(i);for(const e of nn.values())s.addComponent(e);const l=new ln(n,r,s);return tn.set(i,l),l}function dn(e="[DEFAULT]"){const t=tn.get(e);if(!t&&e===Zt)return cn();if(!t)throw sn.create("no-app",{appName:e});return t}function fn(e,t,n){var r;let i=null!==(r=en[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const e=[`Unable to register library "${i}" with version "${t}":`];return a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Xt.warn(e.join(" "))}an(new wt(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hn="firebase-heartbeat-store";let pn=null;function mn(){return pn||(pn=Ht("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(hn)}}).catch((e=>{throw sn.create("idb-open",{originalErrorMessage:e.message})}))),pn}async function gn(e,t){var n;try{const n=(await mn()).transaction(hn,"readwrite"),r=n.objectStore(hn);return await r.put(t,vn(e)),n.done}catch(e){if(e instanceof st)Xt.warn(e.message);else{const t=sn.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});Xt.warn(t.message)}}}function vn(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=bn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=bn(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),kn(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Ye(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wn(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function bn(){return(new Date).toISOString().substring(0,10)}class wn{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await mn()).transaction(hn).objectStore(hn).get(vn(e))}catch(e){if(e instanceof st)Xt.warn(e.message);else{const n=sn.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});Xt.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return gn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return gn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function kn(e){return Ye(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _n;_n="",an(new wt("platform-logger",(e=>new Qt(e)),"PRIVATE")),an(new wt("heartbeat",(e=>new yn(e)),"PRIVATE")),fn(Gt,Yt,_n),fn(Gt,Yt,"esm2017"),fn("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
fn("firebase","9.12.1","app");function Sn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function En(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const In=En,xn=new lt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Cn=new Rt("@firebase/auth");function Tn(e,...t){Cn.logLevel<=It.ERROR&&Cn.error(`Auth (9.12.1): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(e,...t){throw Ln(e,...t)}function Pn(e,...t){return Ln(e,...t)}function Rn(e,t,n){const r=Object.assign(Object.assign({},In()),{[t]:n});return new lt("auth","Firebase",r).create(t,{appName:e.name})}function On(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Nn(e,"argument-error"),Rn(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ln(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return xn.create(e,...t)}function Dn(e,t,...n){if(!e)throw Ln(t,...n)}function An(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Tn(t),new Error(t)}function Mn(e,t){e||An(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Map;function Un(e){Mn(e instanceof Function,"Expected a class definition");let t=jn.get(e);return t?(Mn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,jn.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Fn(){return"http:"===Vn()||"https:"===Vn()}function Vn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Fn()||et()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bn{get(){return $n()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Mn(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e,t){Mn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Kn=new Bn(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Qn(e,t,n,r,i={}){return Gn(e,i,(async()=>{let i={},a={};r&&("GET"===t?a=r:i={body:JSON.stringify(r)});const o=ht(Object.assign({key:e.config.apiKey},a)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode),Wn.fetch()(Xn(e,e.config.apiHost,n,o),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},i))}))}async function Gn(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},qn),t);try{const t=new Zn(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw er(e,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const t=i.ok?a.errorMessage:a.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw er(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===n)throw er(e,"email-already-in-use",a);if("USER_DISABLED"===n)throw er(e,"user-disabled",a);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Rn(e,s,o);Nn(e,s)}}catch(t){if(t instanceof st)throw t;Nn(e,"network-request-failed")}}async function Yn(e,t,n,r,i={}){const a=await Qn(e,t,n,r,i);return"mfaPendingCredential"in a&&Nn(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Xn(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Hn(e.config,i):`${e.config.apiScheme}://${i}`}class Zn{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Pn(this.auth,"network-request-failed"))),Kn.get())}))}}function er(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pn(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e){return 1e3*Number(e)}function rr(e){var t;const[n,r,i]=e.split(".");if(void 0===n||void 0===r||void 0===i)return Tn("JWT malformed, contained fewer than 3 sections"),null;try{const e=Xe(r);return e?JSON.parse(e):(Tn("Failed to decode base64 JWT payload"),null)}catch(e){return Tn("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ir(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof st&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class ar{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{_initializeTime(){this.lastSignInTime=tr(this.lastLoginAt),this.creationTime=tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ir(e,async function(e,t){return Qn(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Dn(null==i?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?a.providerUserInfo.map((e=>{var{providerId:t}=e,n=Sn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const s=(l=e.providerData,u=o,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const c=e.isAnonymous,d=!(e.email&&a.passwordHash||(null==s?void 0:s.length)),f=!!c&&d,h={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new or(a.createdAt,a.lastLoginAt),isAnonymous:f};Object.assign(e,h)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lr{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Dn(e.idToken,"internal-error"),Dn(void 0!==e.idToken,"internal-error"),Dn(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=rr(e);return Dn(t,"internal-error"),Dn(void 0!==t.exp,"internal-error"),Dn(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Dn(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Gn(e,{},(async()=>{const n=ht({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=Xn(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Wn.fetch()(a,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,a=new lr;return n&&(Dn("string"==typeof n,"internal-error",{appName:e}),a.refreshToken=n),r&&(Dn("string"==typeof r,"internal-error",{appName:e}),a.accessToken=r),i&&(Dn("number"==typeof i,"internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lr,this.toJSON())}_performRefresh(){return An("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e,t){Dn("string"==typeof e||void 0===e,"internal-error",{appName:t})}class cr{async getIdToken(e){const t=await ir(this,this.stsTokenManager.getToken(this.auth,e));return Dn(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=bt(e),r=await n.getIdToken(t),i=rr(r);Dn(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a="object"==typeof i.firebase?i.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:tr(nr(i.auth_time)),issuedAtTime:tr(nr(i.iat)),expirationTime:tr(nr(i.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=bt(e);await sr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Dn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Dn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await sr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ir(this,async function(e,t){return Qn(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,a,o,s,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(a=t.photoURL)&&void 0!==a?a:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:k,stsTokenManager:_}=t;Dn(y&&_,e,"internal-error");const S=lr.fromJSON(this.name,_);Dn("string"==typeof y,e,"internal-error"),ur(c,e.name),ur(d,e.name),Dn("boolean"==typeof b,e,"internal-error"),Dn("boolean"==typeof w,e,"internal-error"),ur(f,e.name),ur(h,e.name),ur(p,e.name),ur(m,e.name),ur(g,e.name),ur(v,e.name);const E=new cr({uid:y,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:w,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:v});return k&&Array.isArray(k)&&(E.providerData=k.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new lr;r.updateFromServerResponse(t);const i=new cr({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await sr(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Sn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ar(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new or(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}dr.type="NONE";const fr=dr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e,t,n){return`firebase:${e}:${t}:${n}`}class pr{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pr(Un(fr),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Un(fr);const a=hr(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(a);if(t){const r=cr._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const s=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&s.length?(i=s[0],o&&await i._set(a,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(a)}catch(e){}}))),new pr(i,e,n)):new pr(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=hr(this.userKey,r.apiKey,i),this.fullPersistenceKey=hr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(br(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(gr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(kr(t))return"Blackberry";if(_r(t))return"Webos";if(vr(t))return"Safari";if((t.includes("chrome/")||yr(t))&&!t.includes("edge/"))return"Chrome";if(wr(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function gr(e=Ze()){return/firefox\//i.test(e)}function vr(e=Ze()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yr(e=Ze()){return/crios\//i.test(e)}function br(e=Ze()){return/iemobile/i.test(e)}function wr(e=Ze()){return/android/i.test(e)}function kr(e=Ze()){return/blackberry/i.test(e)}function _r(e=Ze()){return/webos/i.test(e)}function Sr(e=Ze()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Er(){return tt()&&10===document.documentMode}function Ir(e=Ze()){return Sr(e)||wr(e)||_r(e)||kr(e)||/windows phone/i.test(e)||br(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xr(e,t=[]){let n;switch(e){case"Browser":n=mr(Ze());break;case"Worker":n=`${mr(Ze())}-${e}`;break;default:n=e}return`${n}/JsCore/9.12.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Un(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pr.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,a=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==a||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Dn(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await sr(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?bt(e):null;return t&&Dn(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Dn(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Un(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Un(e)||this._popupRedirectResolver;Dn(t,this,"argument-error"),this.redirectPersistenceManager=await pr.create(this,[Un(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return Dn(a,this,"internal-error"),a.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Dn(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pr(this),this.idTokenSubscription=new Pr(this),this.beforeStateQueue=new Cr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function Nr(e){return bt(e)}class Pr{get next(){return Dn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=gt((e=>this.observer=e))}}function Rr(e,t,n){const r=Nr(e);Dn(r._canInitEmulator,r,"emulator-config-failed"),Dn(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),a=Or(t),{host:o,port:s}=function(e){const t=Or(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Lr(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Lr(t)}}}(t),l=null===s?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Or(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Lr(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Dr{toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,t){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(e,t){return Qn(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr extends Dr{static _fromEmailAndPassword(e,t){return new Mr(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Mr(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Yn(e,"POST","/v1/accounts:signInWithPassword",Jn(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Yn(e,"POST","/v1/accounts:signInWithEmailLink",Jn(e,t))}(e,{email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ar(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Yn(e,"POST","/v1/accounts:signInWithEmailLink",Jn(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(e,t){return Yn(e,"POST","/v1/accounts:signInWithIdp",Jn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Dr{static _fromParams(e){const t=new Ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Nn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Sn(t,["providerId","signInMethod"]);if(!n||!r)return null;const a=new Ur(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){return jr(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,jr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jr(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ht(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr extends Dr{static _fromVerification(e,t){return new Fr({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Fr({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Yn(e,"POST","/v1/accounts:signInWithPhoneNumber",Jn(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Yn(e,"POST","/v1/accounts:signInWithPhoneNumber",Jn(e,t));if(n.temporaryProof)throw er(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Yn(e,"POST","/v1/accounts:signInWithPhoneNumber",Jn(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),zr)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Fr({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{static parseLink(e){const t=function(e){const t=pt(mt(e)).link,n=t?pt(mt(t)).deep_link_id:null,r=pt(mt(e)).deep_link_id;return(r?pt(mt(r)).link:null)||r||n||t||e}(e);try{return new Vr(t)}catch(e){return null}}constructor(e){var t,n,r,i,a,o;const s=pt(mt(e)),l=null!==(t=s.apiKey)&&void 0!==t?t:null,u=null!==(n=s.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=s.mode)&&void 0!==r?r:null);Dn(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=s.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(a=s.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(o=s.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $r{static credential(e,t){return Mr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Vr.parseLink(t);return Dn(n,"argument-error"),Mr._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=$r.PROVIDER_ID}}$r.PROVIDER_ID="password",$r.EMAIL_PASSWORD_SIGN_IN_METHOD="password",$r.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Br{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Br{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wr extends Hr{static credential(e){return Ur._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Wr.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Wr.FACEBOOK_SIGN_IN_METHOD="facebook.com",Wr.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qr extends Hr{static credential(e,t){return Ur._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return qr.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}qr.GOOGLE_SIGN_IN_METHOD="google.com",qr.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr extends Hr{static credential(e){return Ur._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Kr.GITHUB_SIGN_IN_METHOD="github.com",Kr.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jr extends Hr{static credential(e,t){return Ur._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Jr.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}Jr.TWITTER_SIGN_IN_METHOD="twitter.com",Jr.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qr{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await cr._fromIdTokenResponse(e,n,r),a=Gr(n);return new Qr({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Gr(n);return new Qr({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Gr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr extends st{static _fromErrorAndOperation(e,t,n,r){return new Yr(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Yr.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Xr(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Yr._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(e,t,n=!1){const r=await ir(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Qr._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ei(e,t,n=!1){var r;const{auth:i}=e,a="reauthenticate";try{const r=await ir(e,Xr(i,a,t,e),n);Dn(r.idToken,i,"internal-error");const o=rr(r.idToken);Dn(o,i,"internal-error");const{sub:s}=o;return Dn(e.uid===s,i,"user-mismatch"),Qr._forOperation(e,a,r)}catch(e){throw"auth/user-not-found"===(null===(r=e)||void 0===r?void 0:r.code)&&Nn(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(e,t,n=!1){const r="signIn",i=await Xr(e,r,t),a=await Qr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}function ni(e,t,n,r){return bt(e).onAuthStateChanged(t,n,r)}function ri(e){return bt(e).signOut()}new WeakMap;const ii="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{_isAvailable(){try{return this.storage?(this.storage.setItem(ii,"1"),this.storage.removeItem(ii),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends ai{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Er()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Ze();return vr(e)||Sr(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ir(),this._shouldAllowMigration=!0}}oi.type="LOCAL";const si=oi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends ai{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}li.type="SESSION";const ui=li;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ci{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new ci(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(null==a?void 0:a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(a).map((async e=>e(t.origin,i))),s=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function di(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ci.receivers=[];class fi{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise(((o,s)=>{const l=di("",20);r.port1.start();const u=setTimeout((()=>{s(new Error("unsupported_event"))}),n);a={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),s(new Error("invalid_response"))}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{a&&this.removeMessageHandler(a)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pi(){return void 0!==hi().WorkerGlobalScope&&"function"==typeof hi().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mi="firebaseLocalStorageDb",gi="firebaseLocalStorage",vi="fbase_key";class yi{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function bi(e,t){return e.transaction([gi],t?"readwrite":"readonly").objectStore(gi)}function wi(){const e=indexedDB.open(mi,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(gi,{keyPath:vi})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(gi)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(mi);return new yi(e).toPromise()}(),t(await wi()))}))}))}async function ki(e,t,n){const r=bi(e,!0).put({[vi]:t,value:n});return new yi(r).toPromise()}function _i(e,t){const n=bi(e,!0).delete(t);return new yi(n).toPromise()}class Si{async _openDb(){return this.db||(this.db=await wi()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ci._getInstance(pi()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new fi(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wi();return await ki(e,ii,"1"),await _i(e,ii),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ki(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=bi(e,!1).get(t),r=await new yi(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>_i(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=bi(e,!1).getAll();return new yi(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Si.type="LOCAL";const Ei=Si;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,a;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Pn("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(a=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==a?a:document).appendChild(r)}))}function xi(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
xi("rcb"),new Bn(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ci="recaptcha";async function Ti(e,t,n){var r;const i=await n.verify();try{let a;if(Dn("string"==typeof i,e,"argument-error"),Dn(n.type===Ci,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){const t=a.session;if("phoneNumber"in a){Dn("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Qn(e,"POST","/v2/accounts/mfaEnrollment:start",Jn(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Dn("signin"===t.type,e,"internal-error");const n=(null===(r=a.multiFactorHint)||void 0===r?void 0:r.uid)||a.multiFactorUid;Dn(n,e,"missing-multi-factor-info");const o=await function(e,t){return Qn(e,"POST","/v2/accounts/mfaSignIn:start",Jn(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Qn(e,"POST","/v1/accounts:sendVerificationCode",Jn(e,t))}(e,{phoneNumber:a.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ni{verifyPhoneNumber(e,t){return Ti(this.auth,e,bt(t))}static credential(e,t){return Fr._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ni.credentialFromTaggedObject(t)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Fr._fromTokenResponse(t,n):null}constructor(e){this.providerId=Ni.PROVIDER_ID,this.auth=Nr(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pi(e,t){return t?Un(t):(Dn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ni.PROVIDER_ID="phone",Ni.PHONE_SIGN_IN_METHOD="phone";class Ri extends Dr{_getIdTokenResponse(e){return jr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Oi(e){return ti(e.auth,new Ri(e),e.bypassAuthState)}function Li(e){const{auth:t,user:n}=e;return Dn(n,t,"internal-error"),ei(n,new Ri(e),e.bypassAuthState)}async function Di(e){const{auth:t,user:n}=e;return Dn(n,t,"internal-error"),Zr(n,new Ri(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:o}=e;if(a)return void this.reject(a);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Oi;case"linkViaPopup":case"linkViaRedirect":return Di;case"reauthViaPopup":case"reauthViaRedirect":return Li;default:Nn(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new Bn(2e3,1e4);class ji extends Ai{async executeNotNull(){const e=await this.execute();return Dn(e,this.auth,"internal-error"),e}async onExecution(){Mn(1===this.filter.length,"Popup operations only handle one event");const e=di();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Pn(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Mi.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ji.currentPopupAction&&ji.currentPopupAction.cancel(),ji.currentPopupAction=this}}ji.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ui=new Map;class zi extends Ai{async execute(){let e=Ui.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Bi(t),r=$i(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ui.set(this.auth._key(),e)}return this.bypassAuthState||Ui.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function Fi(e,t){return $i(e)._set(Bi(t),"true")}function Vi(e,t){Ui.set(e._key(),t)}function $i(e){return Un(e._redirectPersistence)}function Bi(e){return hr("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(e,t,n){return async function(e,t,n){const r=Nr(e);On(e,t,Br);const i=Pi(r,n);return await Fi(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}async function Wi(e,t,n=!1){const r=Nr(e),i=Pi(r,t),a=new zi(r,i,n),o=await a.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class qi{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ji(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ji(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Pn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ki(e))}saveEventToCache(e){this.cachedEventUids.add(Ki(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Ki(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ji({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gi=/^https?/;async function Yi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Qn(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Xi(e))return}catch(e){}Nn(e,"unauthorized-domain")}function Xi(e){const t=zn(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Gi.test(n))return!1;if(Qi.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Bn(3e4,6e4);function ea(){const e=hi().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let ta=null;function na(e){return ta=ta||function(e){return new Promise(((t,n)=>{var r,i,a;function o(){ea(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ea(),n(Pn(e,"network-request-failed"))},timeout:Zi.get()})}if(null===(i=null===(r=hi().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=hi().gapi)||void 0===a?void 0:a.load)){const t=xi("iframefcb");return hi()[t]=()=>{gapi.load?o():n(Pn(e,"network-request-failed"))},Ii(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw ta=null,e}))}(e),ta}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new Bn(5e3,15e3),ia={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oa(e){const t=e.config;Dn(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Hn(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:un},i=aa.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${ht(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class la{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function ua(e,t,n,r=500,i=600){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},sa),{width:r.toString(),height:i.toString(),top:a,left:o}),u=Ze().toLowerCase();n&&(s=yr(u)?"_blank":n),gr(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Ze()){var t;return Sr(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==s)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",s),new la(null);const d=window.open(t||"",s,c);Dn(d,e,"popup-blocked");try{d.focus()}catch(e){}return new la(d)}const ca="emulator/auth/handler";function da(e,t,n,r,i,a){Dn(e.config.authDomain,e,"auth-domain-config-required"),Dn(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:un,eventId:i};if(t instanceof Br){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ct(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))o[e]=t}if(t instanceof Hr){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const e of Object.keys(s))void 0===s[e]&&delete s[e];return`${function({config:e}){return e.emulator?Hn(e,ca):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${ht(s).slice(1)}`}const fa="webStorageSupport";const ha=class{async _openPopup(e,t,n,r){var i;Mn(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return ua(e,da(e,t,n,zn(),r),di())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=da(e,t,n,zn(),r),hi().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Mn(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await na(e),n=hi().gapi;return Dn(n,e,"internal-error"),t.open({where:document.body,url:oa(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ia,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Pn(e,"network-request-failed"),a=hi().setTimeout((()=>{r(i)}),ra.get());function o(){hi().clearTimeout(a),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new qi(e);return t.register("authEvent",(t=>{Dn(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fa,{type:fa},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Nn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ir()||vr()||Sr()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ui,this._completeRedirectFn=Wi,this._overrideRedirectResult=Vi}};var pa="@firebase/auth",ma="0.20.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ga{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Dn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const va=at("authIdTokenMaxAge")||300;let ya=null;function ba(e=dn()){const t=on(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=on(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(dt(n.getOptions(),null!=t?t:{}))return e;Nn(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:ha,persistence:[Ei,si,ui]}),r=at("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>va)return;const r=null==t?void 0:t.token;ya!==r&&(ya=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){bt(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){bt(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const a=it("auth");return a&&Rr(n,`http://${a}`),n}var wa;wa="Browser",an(new wt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:a}=n.options;return((e,n)=>{Dn(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),Dn(!(null==a?void 0:a.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:a,clientPlatform:wa,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xr(wa)},o=new Tr(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),an(new wt("auth-internal",(e=>(e=>new ga(e))(Nr(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),fn(pa,ma,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(wa)),fn(pa,ma,"esm2017");const ka=function(e){const t=ba(e);return{signIn:async function(){const e=new qr;e.setCustomParameters({prompt:"select_account"});try{const n=(await Hi(t,e)).user;console.log(n.displayName,n.email,n.photoURL)}catch(e){const t=e.code,n=e.message;console.log(t,n)}},signOut:function(){ri(t)},onAuthStateChanged:function(e){return ni(t,e)}}}(cn({apiKey:"AIzaSyAC-lbWPT-60lPwbJGBMKp_1mLKWCljW4A",authDomain:"hnews-f845a.firebaseapp.com",projectId:"hnews-f845a",storageBucket:"hnews-f845a.appspot.com",messagingSenderId:"734364993587",appId:"1:734364993587:web:f0020375ba6ff35b8efb46"})),_a=ka.signIn,Sa=ka.signOut,Ea=ka.onAuthStateChanged;d=a("jE8J5");const Ia=function(){const e={};return{get:async function(t){return void 0!==e[t]||(e[t]=await(await fetch(`https://hacker-news.firebaseio.com/v0/user/${t}.json`)).json()),e[t]}}}(),xa=function(e){const n=t(d).useRef(null);return t(d).useEffect((function(){if(void 0===e)return;const t=new bootstrap.Popover(n.current,{content:'\n                <div class="spinner-grow spinner-grow-sm" role="status">\n                    <span class="visually-hidden">Loading...</span>\n                </div>\n            ',html:!0,placement:"auto",trigger:"click hover"});return n.current.addEventListener("inserted.bs.popover",(async function(){const n=await Ia.get(e),r=`\n                <p class="fw-lighter">\n                    <small>\n                        <em title=${Ta(1e3*n.created)}>${Ca(1e3*n.created)}</em>\n                        <br />\n                        ${void 0!==n.about?n.about:""}\n                    </small>\n                </p>\n            `;t.tip.getElementsByClassName("popover-body")[0].innerHTML=r})),function(){t.dispose()}}),[]),n},Ca=function(e,n=!1){let r;return n?(r=new Date(0),r.setUTCSeconds(e)):r=new Date(e),t(Le).relativeTime(r)},Ta=function(e,t=!1){let n;return t?(n=new Date(0),n.setUTCSeconds(e)):n=new Date(e),n.toLocaleString("en-US",{hour12:!1})};let Na;var Pa;(Pa=Na||(Na={})).DANGER="danger",Pa.WARNING="warning",Pa.SUCCESS="success",Pa.PRIMARY="primary",Pa.INFO="info",Pa.SECONDARY="secondary";const Ra=function({score:e}){return(0,o.jsx)("span",{className:`badge bg-${t=e,t>=3200?Na.DANGER:t>=1600?Na.WARNING:t>=800?Na.SUCCESS:t>=400?Na.PRIMARY:t>=200?Na.INFO:Na.SECONDARY}`,children:e});var t},Oa=function(){const[e,n]=t(d).useState(null);return t(d).useEffect((function(){return Ea(n)}),[]),e},La=function({user:e}){return null!==e?(0,o.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(e){e.preventDefault(),Sa()},children:[(0,o.jsx)("i",{className:"bi bi-box-arrow-in-left"})," ",(0,o.jsx)("em",{children:e.displayName})]}):(0,o.jsx)("button",{className:"btn btn-outline-success",onClick:function(e){e.preventDefault(),_a()},children:(0,o.jsx)("i",{className:"bi bi-box-arrow-in-right"})})},Da=function(e){return(0,o.jsx)("div",{className:"d-flex justify-content-center",children:(0,o.jsx)("div",{className:"spinner-border",style:{width:"3rem",height:"3rem"},role:"status",children:(0,o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},Aa=function({item:e}){const t=new URL("https://twitter.com/intent/tweet");return t.searchParams.append("text",e.title),t.searchParams.append("url",null!==e.url?e.url:`https://news.ycombinator.com/item?id=${e.objectID}`),t.searchParams.append("hashtags","hackernews"),(0,o.jsx)("a",{href:t.href,children:(0,o.jsx)("i",{className:"bi bi-twitter"})})};a("jE8J5");const Ma=function({to:e,disabled:t,children:n}){return t?(0,o.jsx)(Ne,{to:`/${e}`,style:{pointerEvents:"none"},children:n}):(0,o.jsx)(Ne,{to:`/${e}`,children:n})},ja=function({item:e}){return(0,o.jsx)(Ma,{to:`/${e.objectID}`,disabled:null===e.num_comments,children:(0,o.jsxs)("span",{className:"btn btn-primary btn-sm position-relative me-4",children:[(0,o.jsx)("i",{className:"bi bi-people-fill"}),(0,o.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",children:e.num_comments})]})})},Ua=function({item:e}){let t=(0,o.jsx)("span",{children:e.url});if(null!==e.url){const n=e.url.split("/"),r=n.slice(0,2).join("/"),i=n[2],a=n.slice(3).join("/");t=(0,o.jsxs)("span",{children:[r,"/",(0,o.jsx)("strong",{children:i}),"/",a]})}return t},za=function({item:e}){return null!==e.story_text?(0,o.jsx)("em",{dangerouslySetInnerHTML:{__html:e.story_text}}):(0,o.jsx)("p",{className:"card-text text-truncate",children:(0,o.jsx)("a",{href:e.url,target:"_blank",children:(0,o.jsx)(Ua,{item:e})})})},Fa=function({item:e,inModal:t}){const n=xa(e.author);return(0,o.jsx)("div",{className:"card text-dark bg-light mb-1 shadow rounded",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{className:"card-title",children:e.title}),(0,o.jsx)("span",{className:"float-end",children:(0,o.jsx)(Ra,{score:e.points})})]}),(0,o.jsxs)("p",{className:"card-subtitle mb-2 text-muted",children:[(0,o.jsx)("span",{ref:n,style:{cursor:"pointer"},children:e.author}),(0,o.jsx)("em",{className:"float-end",title:Ta(e.created_at),children:Ca(e.created_at)})]}),(0,o.jsx)(za,{item:e}),(0,o.jsxs)("p",{children:[(0,o.jsx)(Aa,{item:e}),(0,o.jsx)("span",{className:"float-end",children:(0,o.jsx)(ja,{item:e})})]})]})})};a("jE8J5");d=a("jE8J5"),d=a("jE8J5"),d=a("jE8J5");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Va(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(e){a(e)}}function s(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((r=r.apply(e,t||[])).next())}))}function $a(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}var Ba,Ha=function(){},Wa=Ha(),qa=Object,Ka=function(e){return e===Wa},Ja=function(e){return"function"==typeof e},Qa=function(e,t){return qa.assign({},e,t)},Ga="undefined",Ya=function(){return typeof window!=Ga},Xa=new WeakMap,Za=0,eo=function(e){var t,n,r=typeof e,i=e&&e.constructor,a=i==Date;if(qa(e)!==e||a||i==RegExp)t=a?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=Xa.get(e))return t;if(t=++Za+"~",Xa.set(e,t),i==Array){for(t="@",n=0;n<e.length;n++)t+=eo(e[n])+",";Xa.set(e,t)}if(i==qa){t="#";for(var o=qa.keys(e).sort();!Ka(n=o.pop());)Ka(e[n])||(t+=n+":"+eo(e[n])+",");Xa.set(e,t)}}return t},to=!0,no=Ya(),ro=typeof document!=Ga,io=no&&window.addEventListener?window.addEventListener.bind(window):Ha,ao=ro?document.addEventListener.bind(document):Ha,oo=no&&window.removeEventListener?window.removeEventListener.bind(window):Ha,so=ro?document.removeEventListener.bind(document):Ha,lo={isOnline:function(){return to},isVisible:function(){var e=ro&&document.visibilityState;return Ka(e)||"hidden"!==e}},uo={initFocus:function(e){return ao("visibilitychange",e),io("focus",e),function(){so("visibilitychange",e),oo("focus",e)}},initReconnect:function(e){var t=function(){to=!0,e()},n=function(){to=!1};return io("online",t),io("offline",n),function(){oo("online",t),oo("offline",n)}}},co=!Ya()||"Deno"in window,fo=function(e){return Ya()&&typeof window.requestAnimationFrame!=Ga?window.requestAnimationFrame(e):setTimeout(e,1)},ho=co?d.useEffect:d.useLayoutEffect,po="undefined"!=typeof navigator&&navigator.connection,mo=!co&&po&&(["slow-2g","2g"].includes(po.effectiveType)||po.saveData),go=function(e){if(Ja(e))try{e=e()}catch(t){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?eo(e):"",t,e?"$swr$"+e:""]},vo=new WeakMap,yo=function(e,t,n,r,i,a,o){void 0===o&&(o=!0);var s=vo.get(e),l=s[0],u=s[1],c=s[3],d=l[t],f=u[t];if(o&&f)for(var h=0;h<f.length;++h)f[h](n,r,i);return a&&(delete c[t],d&&d[0])?d[0](2).then((function(){return e.get(t)})):e.get(t)},bo=0,wo=function(){return++bo},ko=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Va(void 0,void 0,void 0,(function(){var t,n,r,i,a,o,s,l,u,c,d,f,h,p,m,g,v,y,b,w,k;return $a(this,(function(_){switch(_.label){case 0:if(t=e[0],n=e[1],r=e[2],i=e[3],o=!!Ka((a="boolean"==typeof i?{revalidate:i}:i||{}).populateCache)||a.populateCache,s=!1!==a.revalidate,l=!1!==a.rollbackOnError,u=a.optimisticData,c=go(n),d=c[0],f=c[2],!d)return[2];if(h=vo.get(t),p=h[2],e.length<3)return[2,yo(t,d,t.get(d),Wa,Wa,s,!0)];if(m=r,v=wo(),p[d]=[v,0],y=!Ka(u),b=t.get(d),y&&(w=Ja(u)?u(b):u,t.set(d,w),yo(t,d,w)),Ja(m))try{m=m(t.get(d))}catch(e){g=e}return m&&Ja(m.then)?[4,m.catch((function(e){g=e}))]:[3,2];case 1:if(m=_.sent(),v!==p[d][0]){if(g)throw g;return[2,m]}g&&y&&l&&(o=!0,m=b,t.set(d,b)),_.label=2;case 2:return o&&(g||(Ja(o)&&(m=o(m,b)),t.set(d,m)),t.set(f,Qa(t.get(f),{error:g}))),p[d][1]=wo(),[4,yo(t,d,m,g,Wa,s,!!o)];case 3:if(k=_.sent(),g)throw g;return[2,o?k:m]}}))}))},_o=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},So=function(e,t){if(!vo.has(e)){var n=Qa(uo,t),r={},i=ko.bind(Wa,e),a=Ha;if(vo.set(e,[r,{},{},{},i]),!co){var o=n.initFocus(setTimeout.bind(Wa,_o.bind(Wa,r,0))),s=n.initReconnect(setTimeout.bind(Wa,_o.bind(Wa,r,1)));a=function(){o&&o(),s&&s(),vo.delete(e)}}return[e,i,a]}return[e,vo.get(e)[4]]},Eo=So(new Map),Io=Eo[0],xo=Eo[1],Co=Qa({onLoadingSlow:Ha,onSuccess:Ha,onError:Ha,onErrorRetry:function(e,t,n,r,i){var a=n.errorRetryCount,o=i.retryCount,s=~~((Math.random()+.5)*(1<<(o<8?o:8)))*n.errorRetryInterval;!Ka(a)&&o>a||setTimeout(r,s,i)},onDiscarded:Ha,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:mo?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:mo?5e3:3e3,compare:function(e,t){return eo(e)==eo(t)},isPaused:function(){return!1},cache:Io,mutate:xo,fallback:{}},lo),To=function(e,t){var n=Qa(e,t);if(t){var r=e.use,i=e.fallback,a=t.use,o=t.fallback;r&&a&&(n.use=r.concat(a)),i&&o&&(n.fallback=Qa(i,o))}return n},No=(0,d.createContext)({}),Po=function(e){return Ja(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},Ro=function(){return Qa(Co,(0,d.useContext)(No))},Oo=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},Lo={dedupe:!0},Do=(qa.defineProperty((function(e){var t=e.value,n=To((0,d.useContext)(No),t),r=t&&t.provider,i=(0,d.useState)((function(){return r?So(r(n.cache||Io),t):Wa}))[0];return i&&(n.cache=i[0],n.mutate=i[1]),ho((function(){return i?i[2]:Wa}),[]),(0,d.createElement)(No.Provider,Qa(e,{value:n}))}),"default",{value:Co}),Ba=function(e,t,n){var r=n.cache,i=n.compare,a=n.fallbackData,o=n.suspense,s=n.revalidateOnMount,l=n.refreshInterval,u=n.refreshWhenHidden,c=n.refreshWhenOffline,f=vo.get(r),h=f[0],p=f[1],m=f[2],g=f[3],v=go(e),y=v[0],b=v[1],w=v[2],k=(0,d.useRef)(!1),_=(0,d.useRef)(!1),S=(0,d.useRef)(y),E=(0,d.useRef)(t),I=(0,d.useRef)(n),x=function(){return I.current},C=function(){return x().isVisible()&&x().isOnline()},T=function(e){return r.set(w,Qa(r.get(w),e))},N=r.get(y),P=Ka(a)?n.fallback[y]:a,R=Ka(N)?P:N,O=r.get(w)||{},L=O.error,D=!k.current,A=function(){return D&&!Ka(s)?s:!x().isPaused()&&(o?!Ka(R)&&n.revalidateIfStale:Ka(R)||n.revalidateIfStale)},M=!(!y||!t)&&(!!O.isValidating||D&&A()),j=function(e,t){var n=(0,d.useState)({})[1],r=(0,d.useRef)(e),i=(0,d.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,d.useCallback)((function(e){var a=!1,o=r.current;for(var s in e){var l=s;o[l]!==e[l]&&(o[l]=e[l],i.current[l]&&(a=!0))}a&&!t.current&&n({})}),[]);return ho((function(){r.current=e})),[r,i.current,a]}({data:R,error:L,isValidating:M},_),U=j[0],z=j[1],F=j[2],V=(0,d.useCallback)((function(e){return Va(void 0,void 0,void 0,(function(){var t,a,o,s,l,u,c,d,f,h,p,v,w;return $a(this,(function(I){switch(I.label){case 0:if(t=E.current,!y||!t||_.current||x().isPaused())return[2,!1];s=!0,l=e||{},u=!g[y]||!l.dedupe,c=function(){return!_.current&&y===S.current&&k.current},d=function(){var e=g[y];e&&e[1]===o&&delete g[y]},f={isValidating:!1},h=function(){T({isValidating:!1}),c()&&F(f)},T({isValidating:!0}),F({isValidating:!0}),I.label=1;case 1:return I.trys.push([1,3,,4]),u&&(yo(r,y,U.current.data,U.current.error,!0),n.loadingTimeout&&!r.get(y)&&setTimeout((function(){s&&c()&&x().onLoadingSlow(y,n)}),n.loadingTimeout),g[y]=[t.apply(void 0,b),wo()]),w=g[y],a=w[0],o=w[1],[4,a];case 2:return a=I.sent(),u&&setTimeout(d,n.dedupingInterval),g[y]&&g[y][1]===o?(T({error:Wa}),f.error=Wa,p=m[y],!Ka(p)&&(o<=p[0]||o<=p[1]||0===p[1])?(h(),u&&c()&&x().onDiscarded(y),[2,!1]):(i(U.current.data,a)?f.data=U.current.data:f.data=a,i(r.get(y),a)||r.set(y,a),u&&c()&&x().onSuccess(a,y,n),[3,4])):(u&&c()&&x().onDiscarded(y),[2,!1]);case 3:return v=I.sent(),d(),x().isPaused()||(T({error:v}),f.error=v,u&&c()&&(x().onError(v,y,n),("boolean"==typeof n.shouldRetryOnError&&n.shouldRetryOnError||Ja(n.shouldRetryOnError)&&n.shouldRetryOnError(v))&&C()&&x().onErrorRetry(v,y,n,V,{retryCount:(l.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return s=!1,h(),c()&&u&&yo(r,y,f.data,f.error,!1),[2,!0]}}))}))}),[y]),$=(0,d.useCallback)(ko.bind(Wa,r,(function(){return S.current})),[]);if(ho((function(){E.current=t,I.current=n})),ho((function(){if(y){var e=y!==S.current,t=V.bind(Wa,Lo),n=0,r=Oo(y,p,(function(e,t,n){F(Qa({error:t,isValidating:n},i(U.current.data,e)?Wa:{data:e}))})),a=Oo(y,h,(function(e){if(0==e){var r=Date.now();x().revalidateOnFocus&&r>n&&C()&&(n=r+x().focusThrottleInterval,t())}else if(1==e)x().revalidateOnReconnect&&C()&&t();else if(2==e)return V()}));return _.current=!1,S.current=y,k.current=!0,e&&F({data:R,error:L,isValidating:M}),A()&&(Ka(R)||co?t():fo(t)),function(){_.current=!0,r(),a()}}}),[y,V]),ho((function(){var e;function t(){var t=Ja(l)?l(R):l;t&&-1!==e&&(e=setTimeout(n,t))}function n(){U.current.error||!u&&!x().isVisible()||!c&&!x().isOnline()?t():V(Lo).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[l,u,c,V]),(0,d.useDebugValue)(R),o&&Ka(R)&&y)throw E.current=t,I.current=n,_.current=!1,Ka(L)?V(Lo):L;return{mutate:$,get data(){return z.data=!0,R},get error(){return z.error=!0,L},get isValidating(){return z.isValidating=!0,M}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Ro(),r=Po(e),i=r[0],a=r[1],o=r[2],s=To(n,o),l=Ba,u=s.use;if(u)for(var c=u.length;c-- >0;)l=u[c](l);return l(i,a||s.fetcher,s)});a("jE8J5");d=a("jE8J5");var Ao=[0];function Mo(){return Mo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mo.apply(this,arguments)}function jo(e){var t,n=function(e){var t,n,r=null!=(t=null==e?void 0:e.rootMargin)?t:"0px",i=null!=(n=null==e?void 0:e.threshold)?n:Ao,a=(0,d.useRef)(null),o=(0,d.useRef)(null),s=(0,d.useRef)(null),l=(0,d.useState)(),u=l[0],c=l[1],f=(0,d.useCallback)((function(){var e=s.current;null==e||e.disconnect(),s.current=null}),[]),h=(0,d.useCallback)((function(){var e=a.current;if(e){var t=o.current,n=new IntersectionObserver((function(e){var t=e[0];c(t)}),{root:t,rootMargin:r,threshold:i});n.observe(e),s.current=n}}),[r,i]),p=(0,d.useCallback)((function(){f(),h()}),[h,f]),m=(0,d.useCallback)((function(e){a.current=e,p()}),[p]),g=(0,d.useCallback)((function(e){o.current=e,p()}),[p]);return(0,d.useEffect)((function(){return p(),function(){f()}}),[p,f]),[m,{entry:u,rootRef:g}]}(e),r=n[0],i=n[1],a=Boolean(null==(t=i.entry)?void 0:t.isIntersecting),o=(0,d.useState)(a),s=o[0],l=o[1];return a&&!s&&l(!0),[r,Mo({},i,{isVisible:a,wasEverVisible:s})]}const Uo=function({spinner:e,children:t}){const{ref:n,isVisible:r,wasEverVisible:i}=function(){const[e,{isVisible:t,wasEverVisible:n}]=jo();return{ref:e,isVisible:t,wasEverVisible:n}}();return(0,o.jsxs)("span",{ref:n,children:[!r&&!i&&e,(r||i)&&t]})},zo=e=>fetch(e).then((e=>e.json())),Fo=function(){return(0,o.jsx)("div",{className:"spinner-grow spinner-grow-sm me-5"})},Vo=function({item:e,isItemSelected:t,setSelected:n}){const{data:r,error:i}=Do(`https://hacker-news.firebaseio.com/v0/item/${e}.json`,zo,{dedupingInterval:6e4});if(void 0!==i)return(0,o.jsx)("span",{className:"badge rounded-pill bg-danger",children:"error"});if(void 0===r)return(0,o.jsx)(Fo,{});return t?(0,o.jsx)("span",{className:"badge rounded-pill bg-secondary",children:r.by}):(0,o.jsx)("a",{href:`https://news.ycombinator.com/item?id=${e}`,className:"badge rounded-pill bg-light text-dark",onClick:function(e){e.preventDefault(),n()},children:r.by})},$o=function({kids:e,selectComment:n}){const[r,i]=t(d).useState(null),a=e.map((function(e){return(0,o.jsx)(Uo,{spinner:(0,o.jsx)(Fo,{}),children:(0,o.jsx)(Vo,{item:e,isItemSelected:e===r,setSelected:function(){i(e),n(e)}})},e)}));return(0,o.jsx)("div",{className:"text-muted",style:{overflowX:"auto",whiteSpace:"nowrap"},children:a})};a("jE8J5");const Bo=(...e)=>fetch(...e).then((e=>e.json())),Ho=function(e){return Do(`https://hacker-news.firebaseio.com/v0/item/${e}.json`,Bo)},Wo=function({item:e}){return void 0!==e.text?(0,o.jsx)("em",{dangerouslySetInnerHTML:{__html:e.text}}):(0,o.jsx)("p",{className:"card-text text-truncate",children:(0,o.jsx)("a",{href:e.url,target:"_blank",children:e.url})})},qo=function({item:e}){return(0,o.jsxs)("a",{href:`https://news.ycombinator.com/item?id=${e.id}`,target:"_blank",className:"btn btn-primary btn-sm position-relative me-4 float-end",children:[(0,o.jsx)("i",{className:"bi bi-people-fill"}),(0,o.jsxs)("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",children:[e.descendants,(0,o.jsx)("span",{className:"visually-hidden",children:"comments"})]})]})},Ko=function({item:e}){const{data:n,error:r}=Ho(e),i=xa(null==n?void 0:n.by),[a,s]=t(d).useState(null);return t(d).useEffect((function(){s(null)}),[e]),void 0!==r?(0,o.jsx)("div",{className:"alert alert-danger",role:"alert",children:r.message}):void 0===n?(0,o.jsx)(Da,{}):(0,o.jsxs)(t(d).Fragment,{children:[(0,o.jsx)("div",{className:"card text-dark bg-light mb-1 shadow rounded",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsxs)("h6",{className:"card-subtitle mb-2 text-muted",children:[(0,o.jsx)("span",{ref:i,children:n.by}),(0,o.jsx)("em",{className:"float-end",title:Ta(1e3*n.time),children:Ca(1e3*n.time)})]}),(0,o.jsx)(Wo,{item:n}),(0,o.jsx)("p",{children:(0,o.jsxs)("a",{href:`https://news.ycombinator.com/item?id=${n.id}`,target:"_blank",className:"float-end",children:[void 0!==n.kids?n.kids.length:0," Comments"]})}),(0,o.jsx)($o,{kids:n.kids||[],selectComment:s})]})}),null!==a&&(0,o.jsx)(Ko,{item:a})]})},Jo=function({data:e}){const n=xa(e.by),[r,i]=t(d).useState(null);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"card text-dark bg-light mb-1 shadow rounded",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{className:"card-title",children:e.title}),(0,o.jsx)("span",{className:"float-end",children:(0,o.jsx)(Ra,{score:e.score})})]}),(0,o.jsxs)("p",{className:"card-subtitle mb-2 text-muted",children:[(0,o.jsx)("span",{ref:n,style:{cursor:"pointer"},children:e.by}),(0,o.jsx)("em",{className:"float-end",title:Ta(1e3*e.time),children:Ca(1e3*e.time)})]}),(0,o.jsx)(Wo,{item:e}),(0,o.jsxs)("p",{children:[(0,o.jsx)(Aa,{item:e}),(0,o.jsx)(qo,{item:e})]}),(0,o.jsx)($o,{kids:e.kids,selectComment:i})]})}),null!==r&&(0,o.jsx)(Ko,{item:r})]})},Qo=function(){const{commentId:e}=le(),{data:t,error:n}=Ho(e);return void 0!==n?(0,o.jsx)("div",{className:"alert alert-danger",role:"alert",children:n.message}):void 0===t?(0,o.jsx)(Da,{}):(0,o.jsx)(Jo,{data:t})},Go=function(){const e=async function(e,t,n){return(await async function(e,t,n){const r=`https://hn.algolia.com/api/v1/search?${new URLSearchParams({query:"",numericFilters:`created_at_i>${e},created_at_i<=${t}`,hitsPerPage:n}).toString()}`,i=await fetch(r);if(!i.ok)throw new Error("An error occurred while fetching the data.");return i.json()}(e,t,n)).hits};return{getData:async function(){const t=new Date/1e3;return(await Promise.all([0,1,2,3,4,5,6].map((function(n){return e(t-86400*(7-n),t-86400*(6-n),2**n)})))).reduce((function(e,t){return[...e,...t]}),[]).sort((function(e,t){return e.points<t.points?1:e.points>t.points?-1:0}))}}}(),Yo=function({items:e}){const t=e.map((function(e){return(0,o.jsx)(Fa,{item:e,inModal:!1},e.objectID)}));return(0,o.jsx)(o.Fragment,{children:t})},Xo=function(){const{data:e,error:t}=Do("hn_items",Go.getData,{dedupingInterval:6e4});return void 0!==t?(0,o.jsx)("div",{className:"alert alert-danger",role:"alert",children:t.message}):void 0===e?(0,o.jsx)(Da,{}):(0,o.jsx)(Yo,{items:e})},Zo=function(){const e=Oa();return(0,o.jsx)(La,{user:e})},es=function(){const e="navbarCollapse";return(0,o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsxs)("a",{className:"navbar-brand",href:"/",children:[(0,o.jsx)("strong",{style:{color:"#ff6600"},children:"HN"}),"ews ",(0,o.jsx)("sub",{children:Oe.version})]}),(0,o.jsx)("button",{className:"navbar-toggler","data-bs-toggle":"collapse","data-bs-target":`#${e}`,children:(0,o.jsx)("span",{className:"navbar-toggler-icon"})}),(0,o.jsxs)("div",{className:"collapse navbar-collapse",id:e,children:[(0,o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"}),(0,o.jsx)("form",{className:"d-flex",children:(0,o.jsx)(Zo,{})})]})]})})},ts=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(es,{}),(0,o.jsx)("div",{className:"container",style:{paddingTop:"1em"},children:(0,o.jsx)(Te,{children:(0,o.jsxs)(we,{children:[(0,o.jsx)(ye,{path:"/:commentId",element:(0,o.jsx)(Qo,{})}),(0,o.jsx)(ye,{path:"/",element:(0,o.jsx)(Xo,{})})]})})})]})};s(document.getElementById("app")).render((0,o.jsx)(ts,{}))}();