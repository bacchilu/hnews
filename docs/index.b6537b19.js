let e,t;function n(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var i,a,o,s,l,u,c,d,f,h,p,m,g,v,y,b,w,_,k,S,E,I,C,T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},x={},N={},P=T.parcelRequiref4b0;null==P&&((P=function(e){if(e in x)return x[e].exports;if(e in N){var t=N[e];delete N[e];var n={id:e,exports:{}};return x[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){N[e]=t},T.parcelRequiref4b0=P);var R=P.register;R("8pxar",function(e,t){n(e.exports,"Fragment",function(){return r},function(e){return r=e}),n(e.exports,"jsx",function(){return i},function(e){return i=e}),n(e.exports,"jsxs",function(){return a},function(e){return a=e});var r,i,a,o=P("6SgHj"),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,n){var r,i={},a=null,o=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(o=t.ref),t)u.call(t,r)&&!d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:a,ref:o,props:i,_owner:c.current}}r=l,i=f,a=f}),R("6SgHj",function(e,t){e.exports=P("dn406")}),R("dn406",function(e,t){n(e.exports,"Children",function(){return r},function(e){return r=e}),n(e.exports,"Component",function(){return i},function(e){return i=e}),n(e.exports,"Fragment",function(){return a},function(e){return a=e}),n(e.exports,"Profiler",function(){return o},function(e){return o=e}),n(e.exports,"PureComponent",function(){return s},function(e){return s=e}),n(e.exports,"StrictMode",function(){return l},function(e){return l=e}),n(e.exports,"Suspense",function(){return u},function(e){return u=e}),n(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",function(){return c},function(e){return c=e}),n(e.exports,"cloneElement",function(){return d},function(e){return d=e}),n(e.exports,"createContext",function(){return f},function(e){return f=e}),n(e.exports,"createElement",function(){return h},function(e){return h=e}),n(e.exports,"createFactory",function(){return p},function(e){return p=e}),n(e.exports,"createRef",function(){return m},function(e){return m=e}),n(e.exports,"forwardRef",function(){return g},function(e){return g=e}),n(e.exports,"isValidElement",function(){return v},function(e){return v=e}),n(e.exports,"lazy",function(){return y},function(e){return y=e}),n(e.exports,"memo",function(){return b},function(e){return b=e}),n(e.exports,"startTransition",function(){return w},function(e){return w=e}),n(e.exports,"unstable_act",function(){return _},function(e){return _=e}),n(e.exports,"useCallback",function(){return k},function(e){return k=e}),n(e.exports,"useContext",function(){return S},function(e){return S=e}),n(e.exports,"useDebugValue",function(){return E},function(e){return E=e}),n(e.exports,"useDeferredValue",function(){return I},function(e){return I=e}),n(e.exports,"useEffect",function(){return C},function(e){return C=e}),n(e.exports,"useId",function(){return T},function(e){return T=e}),n(e.exports,"useImperativeHandle",function(){return x},function(e){return x=e}),n(e.exports,"useInsertionEffect",function(){return N},function(e){return N=e}),n(e.exports,"useLayoutEffect",function(){return P},function(e){return P=e}),n(e.exports,"useMemo",function(){return R},function(e){return R=e}),n(e.exports,"useReducer",function(){return O},function(e){return O=e}),n(e.exports,"useRef",function(){return L},function(e){return L=e}),n(e.exports,"useState",function(){return D},function(e){return D=e}),n(e.exports,"useSyncExternalStore",function(){return A},function(e){return A=e}),n(e.exports,"useTransition",function(){return M},function(e){return M=e}),n(e.exports,"version",function(){return j},function(e){return j=e});var r,i,a,o,s,l,u,c,d,f,h,p,m,g,v,y,b,w,_,k,S,E,I,C,T,x,N,P,R,O,L,D,A,M,j,U=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),B=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),G=Symbol.iterator,J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,X={};function Z(e,t,n){this.props=e,this.context=t,this.refs=X,this.updater=n||J}function ee(){}function et(e,t,n){this.props=e,this.context=t,this.refs=X,this.updater=n||J}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var en=et.prototype=new ee;en.constructor=et,Y(en,Z.prototype),en.isPureReactComponent=!0;var er=Array.isArray,ei=Object.prototype.hasOwnProperty,ea={current:null},eo={key:!0,ref:!0,__self:!0,__source:!0};function es(e,t,n){var r,i={},a=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(a=""+t.key),t)ei.call(t,r)&&!eo.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:U,type:e,key:a,ref:o,props:i,_owner:ea.current}}function el(e){return"object"==typeof e&&null!==e&&e.$$typeof===U}var eu=/\/+/g;function ec(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function ed(e,t,n){if(null==e)return e;var r=[],i=0;return function e(t,n,r,i,a){var o,s,l,u=typeof t;("undefined"===u||"boolean"===u)&&(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case U:case z:c=!0}}if(c)return a=a(c=t),t=""===i?"."+ec(c,0):i,er(a)?(r="",null!=t&&(r=t.replace(eu,"$&/")+"/"),e(a,n,r,"",function(e){return e})):null!=a&&(el(a)&&(o=a,s=r+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(eu,"$&/")+"/")+t,a={$$typeof:U,type:o.type,key:s,ref:o.ref,props:o.props,_owner:o._owner}),n.push(a)),1;if(c=0,i=""===i?".":i+":",er(t))for(var d=0;d<t.length;d++){var f=i+ec(u=t[d],d);c+=e(u,n,r,f,a)}else if("function"==typeof(f=null===(l=t)||"object"!=typeof l?null:"function"==typeof(l=G&&l[G]||l["@@iterator"])?l:null))for(t=f.call(t),d=0;!(u=t.next()).done;)f=i+ec(u=u.value,d++),c+=e(u,n,r,f,a);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}(e,r,"","",function(e){return t.call(n,e,i++)}),r}function ef(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var eh={current:null},ep={transition:null};r={map:ed,forEach:function(e,t,n){ed(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ed(e,function(){t++}),t},toArray:function(e){return ed(e,function(e){return e})||[]},only:function(e){if(!el(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i=Z,a=F,o=H,s=et,l=V,u=K,c={ReactCurrentDispatcher:eh,ReactCurrentBatchConfig:ep,ReactCurrentOwner:ea},d=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Y({},e.props),i=e.key,a=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,o=ea.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ei.call(t,l)&&!eo.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:U,type:e.type,key:i,ref:a,props:r,_owner:o}},f=function(e){return(e={$$typeof:B,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:$,_context:e},e.Consumer=e},h=es,p=function(e){var t=es.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:W,render:e}},v=el,y=function(e){return{$$typeof:Q,_payload:{_status:-1,_result:e},_init:ef}},b=function(e,t){return{$$typeof:q,type:e,compare:void 0===t?null:t}},w=function(e){var t=ep.transition;ep.transition={};try{e()}finally{ep.transition=t}},_=function(){throw Error("act(...) is not supported in production builds of React.")},k=function(e,t){return eh.current.useCallback(e,t)},S=function(e){return eh.current.useContext(e)},E=function(){},I=function(e){return eh.current.useDeferredValue(e)},C=function(e,t){return eh.current.useEffect(e,t)},T=function(){return eh.current.useId()},x=function(e,t,n){return eh.current.useImperativeHandle(e,t,n)},N=function(e,t){return eh.current.useInsertionEffect(e,t)},P=function(e,t){return eh.current.useLayoutEffect(e,t)},R=function(e,t){return eh.current.useMemo(e,t)},O=function(e,t,n){return eh.current.useReducer(e,t,n)},L=function(e){return eh.current.useRef(e)},D=function(e){return eh.current.useState(e)},A=function(e,t,n){return eh.current.useSyncExternalStore(e,t,n)},M=function(){return eh.current.useTransition()},j="18.2.0"}),R("a9mMY",function(e,t){n(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",function(){return $},function(e){return $=e}),n(e.exports,"createPortal",function(){return B},function(e){return B=e}),n(e.exports,"createRoot",function(){return W},function(e){return W=e}),n(e.exports,"findDOMNode",function(){return K},function(e){return K=e}),n(e.exports,"flushSync",function(){return q},function(e){return q=e}),n(e.exports,"hydrate",function(){return Q},function(e){return Q=e}),n(e.exports,"hydrateRoot",function(){return G},function(e){return G=e}),n(e.exports,"render",function(){return J},function(e){return J=e}),n(e.exports,"unmountComponentAtNode",function(){return Y},function(e){return Y=e}),n(e.exports,"unstable_batchedUpdates",function(){return X},function(e){return X=e}),n(e.exports,"unstable_renderSubtreeIntoContainer",function(){return Z},function(e){return Z=e}),n(e.exports,"version",function(){return ee},function(e){return ee=e});var r,i,a,o,s,l,u=P("6SgHj"),c=P("jM0cN");function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,h={};function p(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(h[e]=t,e=0;e<t.length;e++)f.add(t[e])}var g=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),v=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},w={};function _(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new _(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];k[t]=new _(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new _(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new _(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new _(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new _(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function E(e){return e[1].toUpperCase()}function I(e,t,n,r){var i,a=k.hasOwnProperty(t)?k[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(r)return!1;if(null!==n)return!n.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?(i=t,(!!v.call(w,i)||!v.call(b,i)&&(y.test(i)?w[i]=!0:(b[i]=!0,!1)))&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n))):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(S,E);k[t]=new _(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(S,E);k[t]=new _(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(S,E);k[t]=new _(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)});var C=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,T=Symbol.for("react.element"),x=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),D=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),z=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var F=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var V=Symbol.iterator;function H(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=V&&e[V]||e["@@iterator"])?e:null}var $,B,W,K,q,Q,G,J,Y,X,Z,ee,et,en=Object.assign;function er(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var ei=!1;function ea(e,t){if(!e||ei)return"";ei=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s)break}}}finally{ei=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function eo(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function es(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function el(e){e._valueTracker||(e._valueTracker=function(e){var t=es(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=es(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ec(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ed(e,t){var n=t.checked;return en({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ef(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=eo(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function eh(e,t){null!=(t=t.checked)&&I(e,"checked",t,!1)}function ep(e,t){eh(e,t);var n=eo(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r){e.removeAttribute("value");return}t.hasOwnProperty("value")?eg(e,t.type,n):t.hasOwnProperty("defaultValue")&&eg(e,t.type,eo(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function em(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function eg(e,t,n){("number"!==t||ec(e.ownerDocument)!==e)&&(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ev=Array.isArray;function ey(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(i=0,n=""+eo(n),t=null;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function eb(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(d(91));return en({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ew(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(d(92));if(ev(n)){if(1<n.length)throw Error(d(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:eo(n)}}function e_(e,t){var n=eo(t.value),r=eo(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ek(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function eS(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eE(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?eS(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var eI,eC,eT=(eI=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((eC=eC||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eC.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return eI(e,t,n,r)})}:eI);function ex(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType){n.nodeValue=t;return}}e.textContent=t}var eN={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eP=["Webkit","ms","Moz","O"];function eR(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||eN.hasOwnProperty(e)&&eN[e]?(""+t).trim():t+"px"}function eO(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=eR(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(eN).forEach(function(e){eP.forEach(function(t){eN[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=eN[e]})});var eL=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eD(e,t){if(t){if(eL[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(d(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(d(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(d(62))}}function eA(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eM=null;function ej(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var eU=null,ez=null,eF=null;function eV(e){if(e=rG(e)){if("function"!=typeof eU)throw Error(d(280));var t=e.stateNode;t&&(t=rY(t),eU(e.stateNode,e.type,t))}}function eH(e){ez?eF?eF.push(e):eF=[e]:ez=e}function e$(){if(ez){var e=ez,t=eF;if(eF=ez=null,eV(e),t)for(e=0;e<t.length;e++)eV(t[e])}}function eB(e,t){return e(t)}function eW(){}var eK=!1;function eq(e,t,n){if(eK)return e(t,n);eK=!0;try{return eB(e,t,n)}finally{eK=!1,(null!==ez||null!==eF)&&(eW(),e$())}}function eQ(e,t){var n=e.stateNode;if(null===n)return null;var r=rY(n);if(null===r)return null;switch(n=r[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(d(231,t,typeof n));return n}var eG=!1;if(g)try{var eJ={};Object.defineProperty(eJ,"passive",{get:function(){eG=!0}}),window.addEventListener("test",eJ,eJ),window.removeEventListener("test",eJ,eJ)}catch(e){eG=!1}function eY(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var eX=!1,eZ=null,e0=!1,e1=null,e2={onError:function(e){eX=!0,eZ=e}};function e3(e,t,n,r,i,a,o,s,l){eX=!1,eZ=null,eY.apply(e2,arguments)}function e4(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(n=t.return),e=t.return;while(e)}return 3===t.tag?n:null}function e6(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e8(e){if(e4(e)!==e)throw Error(d(188))}function e5(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e4(e)))throw Error(d(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return e8(i),e;if(a===r)return e8(i),t;a=a.sibling}throw Error(d(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(d(189))}}if(n.alternate!==r)throw Error(d(190))}if(3!==n.tag)throw Error(d(188));return n.stateNode.current===n?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var n=e(t);if(null!==n)return n;t=t.sibling}return null}(e):null}var e9=c.unstable_scheduleCallback,e7=c.unstable_cancelCallback,te=c.unstable_shouldYield,tt=c.unstable_requestPaint,tn=c.unstable_now,tr=c.unstable_getCurrentPriorityLevel,ti=c.unstable_ImmediatePriority,ta=c.unstable_UserBlockingPriority,to=c.unstable_NormalPriority,ts=c.unstable_LowPriority,tl=c.unstable_IdlePriority,tu=null,tc=null,td=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(tf(e)/th|0)|0},tf=Math.log,th=Math.LN2,tp=64,tm=4194304;function tg(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tv(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~i;0!==s?r=tg(s):0!=(a&=o)&&(r=tg(a))}else 0!=(o=n&~i)?r=tg(o):0!==a&&(r=tg(a));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&0!=(4194240&a)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-td(t)),r|=e[n],t&=~i;return r}function ty(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function tb(){var e=tp;return 0==(4194240&(tp<<=1))&&(tp=64),e}function tw(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function t_(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-td(t)]=n}function tk(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-td(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var tS=0;function tE(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var tI,tC,tT,tx,tN,tP=!1,tR=[],tO=null,tL=null,tD=null,tA=new Map,tM=new Map,tj=[],tU="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tz(e,t){switch(e){case"focusin":case"focusout":tO=null;break;case"dragenter":case"dragleave":tL=null;break;case"mouseover":case"mouseout":tD=null;break;case"pointerover":case"pointerout":tA.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tM.delete(t.pointerId)}}function tF(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&null!==(t=rG(t))&&tC(t)):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i)),e}function tV(e){var t=rQ(e.target);if(null!==t){var n=e4(t);if(null!==n){if(13===(t=n.tag)){if(null!==(t=e6(n))){e.blockedOn=t,tN(e.priority,function(){tT(n)});return}}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===n.tag?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tH(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=tZ(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=rG(n))&&tC(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);eM=r,n.target.dispatchEvent(r),eM=null,t.shift()}return!0}function t$(e,t,n){tH(e)&&n.delete(t)}function tB(){tP=!1,null!==tO&&tH(tO)&&(tO=null),null!==tL&&tH(tL)&&(tL=null),null!==tD&&tH(tD)&&(tD=null),tA.forEach(t$),tM.forEach(t$)}function tW(e,t){e.blockedOn===t&&(e.blockedOn=null,tP||(tP=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tB)))}function tK(e){function t(t){return tW(t,e)}if(0<tR.length){tW(tR[0],e);for(var n=1;n<tR.length;n++){var r=tR[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==tO&&tW(tO,e),null!==tL&&tW(tL,e),null!==tD&&tW(tD,e),tA.forEach(t),tM.forEach(t),n=0;n<tj.length;n++)(r=tj[n]).blockedOn===e&&(r.blockedOn=null);for(;0<tj.length&&null===(n=tj[0]).blockedOn;)tV(n),null===n.blockedOn&&tj.shift()}var tq=C.ReactCurrentBatchConfig,tQ=!0;function tG(e,t,n,r){var i=tS,a=tq.transition;tq.transition=null;try{tS=1,tY(e,t,n,r)}finally{tS=i,tq.transition=a}}function tJ(e,t,n,r){var i=tS,a=tq.transition;tq.transition=null;try{tS=4,tY(e,t,n,r)}finally{tS=i,tq.transition=a}}function tY(e,t,n,r){if(tQ){var i=tZ(e,t,n,r);if(null===i)rw(e,t,r,tX,n),tz(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return tO=tF(tO,e,t,n,r,i),!0;case"dragenter":return tL=tF(tL,e,t,n,r,i),!0;case"mouseover":return tD=tF(tD,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return tA.set(a,tF(tA.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,tM.set(a,tF(tM.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(tz(e,r),4&t&&-1<tU.indexOf(e)){for(;null!==i;){var a=rG(i);if(null!==a&&tI(a),null===(a=tZ(e,t,n,r))&&rw(e,t,r,tX,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else rw(e,t,r,null,n)}}var tX=null;function tZ(e,t,n,r){if(tX=null,null!==(e=rQ(e=ej(r)))){if(null===(t=e4(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=e6(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return tX=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tr()){case ti:return 1;case ta:return 4;case to:case ts:return 16;case tl:return 536870912;default:return 16}default:return 16}}var t1=null,t2=null,t3=null;function t4(){if(t3)return t3;var e,t,n=t2,r=n.length,i="value"in t1?t1.value:t1.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return t3=i.slice(e,1<t?1-t:void 0)}function t6(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function t8(){return!0}function t5(){return!1}function t9(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?t8:t5,this.isPropagationStopped=t5,this}return en(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=t8)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=t8)},persist:function(){},isPersistent:t8}),t}var t7,ne,nt,nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=t9(nn),ni=en({},nn,{view:0,detail:0}),na=t9(ni),no=en({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nv,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nt&&(nt&&"mousemove"===e.type?(t7=e.screenX-nt.screenX,ne=e.screenY-nt.screenY):ne=t7=0,nt=e),t7)},movementY:function(e){return"movementY"in e?e.movementY:ne}}),ns=t9(no),nl=t9(en({},no,{dataTransfer:0})),nu=t9(en({},ni,{relatedTarget:0})),nc=t9(en({},nn,{animationName:0,elapsedTime:0,pseudoElement:0})),nd=t9(en({},nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),nf=t9(en({},nn,{data:0})),nh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ng(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=nm[e])&&!!t[e]}function nv(){return ng}var ny=t9(en({},ni,{key:function(e){if(e.key){var t=nh[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=t6(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?np[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nv,charCode:function(e){return"keypress"===e.type?t6(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?t6(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),nb=t9(en({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nw=t9(en({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nv})),n_=t9(en({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),nk=t9(en({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),nS=[9,13,27,32],nE=g&&"CompositionEvent"in window,nI=null;g&&"documentMode"in document&&(nI=document.documentMode);var nC=g&&"TextEvent"in window&&!nI,nT=g&&(!nE||nI&&8<nI&&11>=nI),nx=!1;function nN(e,t){switch(e){case"keyup":return -1!==nS.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nP(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var nR=!1,nO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nL(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nO[e.type]:"textarea"===t}function nD(e,t,n,r){eH(r),0<(t=rk(t,"onChange")).length&&(n=new nr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nA=null,nM=null;function nj(e){rp(e,0)}function nU(e){if(eu(rJ(e)))return e}function nz(e,t){if("change"===e)return t}var nF=!1;if(g){if(g){var nV="oninput"in document;if(!nV){var nH=document.createElement("div");nH.setAttribute("oninput","return;"),nV="function"==typeof nH.oninput}r=nV}else r=!1;nF=r&&(!document.documentMode||9<document.documentMode)}function n$(){nA&&(nA.detachEvent("onpropertychange",nB),nM=nA=null)}function nB(e){if("value"===e.propertyName&&nU(nM)){var t=[];nD(t,nM,e,ej(e)),eq(nj,t)}}function nW(e,t,n){"focusin"===e?(n$(),nA=t,nM=n,nA.attachEvent("onpropertychange",nB)):"focusout"===e&&n$()}function nK(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return nU(nM)}function nq(e,t){if("click"===e)return nU(t)}function nQ(e,t){if("input"===e||"change"===e)return nU(t)}var nG="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function nJ(e,t){if(nG(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!v.call(t,i)||!nG(e[i],t[i]))return!1}return!0}function nY(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nX(e,t){var n,r=nY(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=nY(r)}}function nZ(){for(var e=window,t=ec();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(n)e=t.contentWindow;else break;t=ec(e.document)}return t}function n0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var n1=g&&"documentMode"in document&&11>=document.documentMode,n2=null,n3=null,n4=null,n6=!1;function n8(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;n6||null==n2||n2!==ec(r)||(r="selectionStart"in(r=n2)&&n0(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},n4&&nJ(n4,r)||(n4=r,0<(r=rk(n3,"onSelect")).length&&(t=new nr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=n2)))}function n5(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var n9={animationend:n5("Animation","AnimationEnd"),animationiteration:n5("Animation","AnimationIteration"),animationstart:n5("Animation","AnimationStart"),transitionend:n5("Transition","TransitionEnd")},n7={},re={};function rt(e){if(n7[e])return n7[e];if(!n9[e])return e;var t,n=n9[e];for(t in n)if(n.hasOwnProperty(t)&&t in re)return n7[e]=n[t];return e}g&&(re=document.createElement("div").style,"AnimationEvent"in window||(delete n9.animationend.animation,delete n9.animationiteration.animation,delete n9.animationstart.animation),"TransitionEvent"in window||delete n9.transitionend.transition);var rn=rt("animationend"),rr=rt("animationiteration"),ri=rt("animationstart"),ra=rt("transitionend"),ro=new Map,rs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rl(e,t){ro.set(e,t),p(t,[e])}for(var ru=0;ru<rs.length;ru++){var rc=rs[ru];rl(rc.toLowerCase(),"on"+(rc[0].toUpperCase()+rc.slice(1)))}rl(rn,"onAnimationEnd"),rl(rr,"onAnimationIteration"),rl(ri,"onAnimationStart"),rl("dblclick","onDoubleClick"),rl("focusin","onFocus"),rl("focusout","onBlur"),rl(ra,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(rd));function rh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,o,s,l){if(e3.apply(this,arguments),eX){if(eX){var u=eZ;eX=!1,eZ=null}else throw Error(d(198));e0||(e0=!0,e1=u)}}(r,t,void 0,e),e.currentTarget=null}function rp(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;rh(i,s,u),a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;rh(i,s,u),a=l}}}if(e0)throw e=e1,e0=!1,e1=null,e}function rm(e,t){var n=t[rW];void 0===n&&(n=t[rW]=new Set);var r=e+"__bubble";n.has(r)||(rb(t,e,2,!1),n.add(r))}function rg(e,t,n){var r=0;t&&(r|=4),rb(n,e,r,t)}var rv="_reactListening"+Math.random().toString(36).slice(2);function ry(e){if(!e[rv]){e[rv]=!0,f.forEach(function(t){"selectionchange"!==t&&(rf.has(t)||rg(t,!1,e),rg(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[rv]||(t[rv]=!0,rg("selectionchange",!1,t))}}function rb(e,t,n,r){switch(t0(t)){case 1:var i=tG;break;case 4:i=tJ;break;default:i=tY}n=i.bind(null,t,n,e),i=void 0,eG&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rw(e,t,n,r,i){var a=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=rQ(s)))return;if(5===(l=o.tag)||6===l){r=a=o;continue e}s=s.parentNode}}r=r.return}eq(function(){var r=a,i=ej(n),o=[];e:{var s=ro.get(e);if(void 0!==s){var l=nr,u=e;switch(e){case"keypress":if(0===t6(n))break e;case"keydown":case"keyup":l=ny;break;case"focusin":u="focus",l=nu;break;case"focusout":u="blur",l=nu;break;case"beforeblur":case"afterblur":l=nu;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=nl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=nw;break;case rn:case rr:case ri:l=nc;break;case ra:l=n_;break;case"scroll":l=na;break;case"wheel":l=nk;break;case"copy":case"cut":case"paste":l=nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=nb}var c=0!=(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var h,p=r;null!==p;){var m=(h=p).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==f&&null!=(m=eQ(p,f))&&c.push(r_(p,m,h))),d)break;p=p.return}0<c.length&&(s=new l(s,u,null,n,i),o.push({event:s,listeners:c}))}}if(0==(7&t)){if(s="mouseover"===e||"pointerover"===e,l="mouseout"===e||"pointerout"===e,!(s&&n!==eM&&(u=n.relatedTarget||n.fromElement)&&(rQ(u)||u[rB]))&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,null!==(u=u?rQ(u):null)&&(d=e4(u),u!==d||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=ns,m="onMouseLeave",f="onMouseEnter",p="mouse",("pointerout"===e||"pointerover"===e)&&(c=nb,m="onPointerLeave",f="onPointerEnter",p="pointer"),d=null==l?s:rJ(l),h=null==u?s:rJ(u),(s=new c(m,p+"leave",l,n,i)).target=d,s.relatedTarget=h,m=null,rQ(i)===r&&((c=new c(f,p+"enter",u,n,i)).target=h,c.relatedTarget=d,m=c),d=m,l&&u)t:{for(c=l,f=u,p=0,h=c;h;h=rS(h))p++;for(h=0,m=f;m;m=rS(m))h++;for(;0<p-h;)c=rS(c),p--;for(;0<h-p;)f=rS(f),h--;for(;p--;){if(c===f||null!==f&&c===f.alternate)break t;c=rS(c),f=rS(f)}c=null}else c=null;null!==l&&rE(o,s,l,c,!1),null!==u&&null!==d&&rE(o,d,u,c,!0)}e:{if("select"===(l=(s=r?rJ(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g,v=nz;else if(nL(s)){if(nF)v=nQ;else{v=nK;var y=nW}}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(v=nq);if(v&&(v=v(e,r))){nD(o,v,n,i);break e}y&&y(e,s,r),"focusout"===e&&(y=s._wrapperState)&&y.controlled&&"number"===s.type&&eg(s,"number",s.value)}switch(y=r?rJ(r):window,e){case"focusin":(nL(y)||"true"===y.contentEditable)&&(n2=y,n3=r,n4=null);break;case"focusout":n4=n3=n2=null;break;case"mousedown":n6=!0;break;case"contextmenu":case"mouseup":case"dragend":n6=!1,n8(o,n,i);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":n8(o,n,i)}if(nE)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else nR?nN(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(nT&&"ko"!==n.locale&&(nR||"onCompositionStart"!==b?"onCompositionEnd"===b&&nR&&(g=t4()):(t2="value"in(t1=i)?t1.value:t1.textContent,nR=!0)),0<(y=rk(r,b)).length&&(b=new nf(b,e,null,n,i),o.push({event:b,listeners:y}),g?b.data=g:null!==(g=nP(n))&&(b.data=g))),(g=nC?function(e,t){switch(e){case"compositionend":return nP(t);case"keypress":if(32!==t.which)return null;return nx=!0," ";case"textInput":return" "===(e=t.data)&&nx?null:e;default:return null}}(e,n):function(e,t){if(nR)return"compositionend"===e||!nE&&nN(e,t)?(e=t4(),t3=t2=t1=null,nR=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nT&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(r=rk(r,"onBeforeInput")).length&&(i=new nf("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=g)}rp(o,t)})}function r_(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rk(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=eQ(e,n))&&r.unshift(r_(e,a,i)),null!=(a=eQ(e,t))&&r.push(r_(e,a,i))),e=e.return}return r}function rS(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function rE(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=eQ(n,a))&&o.unshift(r_(n,l,s)):i||null!=(l=eQ(n,a))&&o.push(r_(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var rI=/\r\n?/g,rC=/\u0000|\uFFFD/g;function rT(e){return("string"==typeof e?e:""+e).replace(rI,"\n").replace(rC,"")}function rx(e,t,n){if(t=rT(t),rT(e)!==t&&n)throw Error(d(425))}function rN(){}var rP=null,rR=null;function rO(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var rL="function"==typeof setTimeout?setTimeout:void 0,rD="function"==typeof clearTimeout?clearTimeout:void 0,rA="function"==typeof Promise?Promise:void 0,rM="function"==typeof queueMicrotask?queueMicrotask:void 0!==rA?function(e){return rA.resolve(null).then(e).catch(rj)}:rL;function rj(e){setTimeout(function(){throw e})}function rU(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType){if("/$"===(n=i.data)){if(0===r){e.removeChild(i),tK(t);return}r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++}n=i}while(n)tK(t)}function rz(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function rF(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var rV=Math.random().toString(36).slice(2),rH="__reactFiber$"+rV,r$="__reactProps$"+rV,rB="__reactContainer$"+rV,rW="__reactEvents$"+rV,rK="__reactListeners$"+rV,rq="__reactHandles$"+rV;function rQ(e){var t=e[rH];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rB]||n[rH]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=rF(e);null!==e;){if(n=e[rH])return n;e=rF(e)}return t}n=(e=n).parentNode}return null}function rG(e){return(e=e[rH]||e[rB])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function rJ(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(d(33))}function rY(e){return e[r$]||null}var rX=[],rZ=-1;function r0(e){return{current:e}}function r1(e){0>rZ||(e.current=rX[rZ],rX[rZ]=null,rZ--)}function r2(e,t){rX[++rZ]=e.current,e.current=t}var r3={},r4=r0(r3),r6=r0(!1),r8=r3;function r5(e,t){var n=e.type.contextTypes;if(!n)return r3;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function r9(e){return null!=(e=e.childContextTypes)}function r7(){r1(r6),r1(r4)}function ie(e,t,n){if(r4.current!==r3)throw Error(d(168));r2(r4,t),r2(r6,n)}function it(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(d(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case N:return"Fragment";case x:return"Portal";case O:return"Profiler";case R:return"StrictMode";case M:return"Suspense";case j:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case D:return(t.displayName||"Context")+".Consumer";case L:return(t._context.displayName||"Context")+".Provider";case A:var n=t.render;return(t=t.displayName)||(t=""!==(t=n.displayName||n.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case U:return null!==(n=t.displayName||null)?n:e(t.type)||"Memo";case z:n=t._payload,t=t._init;try{return e(t(n))}catch(e){}}return null}(t);case 8:return t===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",i));return en({},n,r)}function ir(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||r3,r8=r4.current,r2(r4,e),r2(r6,r6.current),!0}function ii(e,t,n){var r=e.stateNode;if(!r)throw Error(d(169));n?(e=it(e,t,r8),r.__reactInternalMemoizedMergedChildContext=e,r1(r6),r1(r4),r2(r4,e)):r1(r6),r2(r6,n)}var ia=null,io=!1,is=!1;function il(e){null===ia?ia=[e]:ia.push(e)}function iu(){if(!is&&null!==ia){is=!0;var e=0,t=tS;try{var n=ia;for(tS=1;e<n.length;e++){var r=n[e];do r=r(!0);while(null!==r)}ia=null,io=!1}catch(t){throw null!==ia&&(ia=ia.slice(e+1)),e9(ti,iu),t}finally{tS=t,is=!1}}return null}var ic=[],id=0,ih=null,ip=0,im=[],ig=0,iv=null,iy=1,ib="";function iw(e,t){ic[id++]=ip,ic[id++]=ih,ih=e,ip=t}function i_(e,t,n){im[ig++]=iy,im[ig++]=ib,im[ig++]=iv,iv=e;var r=iy;e=ib;var i=32-td(r)-1;r&=~(1<<i),n+=1;var a=32-td(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,iy=1<<32-td(t)+i|n<<i|r,ib=a+e}else iy=1<<a|n<<i|r,ib=e}function ik(e){null!==e.return&&(iw(e,1),i_(e,1,0))}function iS(e){for(;e===ih;)ih=ic[--id],ic[id]=null,ip=ic[--id],ic[id]=null;for(;e===iv;)iv=im[--ig],im[ig]=null,ib=im[--ig],im[ig]=null,iy=im[--ig],im[ig]=null}var iE=null,iI=null,iC=!1,iT=null;function ix(e,t){var n=s9(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function iN(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,iE=e,iI=rz(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,iE=e,iI=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==iv?{id:iy,overflow:ib}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=s9(18,null,null,0)).stateNode=t,n.return=e,e.child=n,iE=e,iI=null,!0);default:return!1}}function iP(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function iR(e){if(iC){var t=iI;if(t){var n=t;if(!iN(e,t)){if(iP(e))throw Error(d(418));t=rz(n.nextSibling);var r=iE;t&&iN(e,t)?ix(r,n):(e.flags=-4097&e.flags|2,iC=!1,iE=e)}}else{if(iP(e))throw Error(d(418));e.flags=-4097&e.flags|2,iC=!1,iE=e}}}function iO(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;iE=e}function iL(e){if(e!==iE)return!1;if(!iC)return iO(e),iC=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!rO(e.type,e.memoizedProps)),t&&(t=iI)){if(iP(e))throw iD(),Error(d(418));for(;t;)ix(e,t),t=rz(t.nextSibling)}if(iO(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(d(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,n=e.data;if("/$"===n){if(0===t){iI=rz(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}iI=null}}else iI=iE?rz(e.stateNode.nextSibling):null;return!0}function iD(){for(var e=iI;e;)e=rz(e.nextSibling)}function iA(){iI=iE=null,iC=!1}function iM(e){null===iT?iT=[e]:iT.push(e)}var ij=C.ReactCurrentBatchConfig;function iU(e,t){if(e&&e.defaultProps)for(var n in t=en({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var iz=r0(null),iF=null,iV=null,iH=null;function i$(){iH=iV=iF=null}function iB(e){var t=iz.current;r1(iz),e._currentValue=t}function iW(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function iK(e,t){iF=e,iH=iV=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(o_=!0),e.firstContext=null)}function iq(e){var t=e._currentValue;if(iH!==e){if(e={context:e,memoizedValue:t,next:null},null===iV){if(null===iF)throw Error(d(308));iV=e,iF.dependencies={lanes:0,firstContext:e}}else iV=iV.next=e}return t}var iQ=null;function iG(e){null===iQ?iQ=[e]:iQ.push(e)}function iJ(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,iG(t)):(n.next=i.next,i.next=n),t.interleaved=n,iY(e,r)}function iY(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var iX=!1;function iZ(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function i1(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function i2(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&sl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,iY(e,n)}return null===(i=r.interleaved)?(t.next=t,iG(r)):(t.next=i.next,i.next=t),r.interleaved=t,iY(e,n)}function i3(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tk(e,n)}}function i4(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n)null===a?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function i6(e,t,n,r){var i=e.updateQueue;iX=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===o?a=u:o.next=u,o=l;var c=e.alternate;null!==c&&(s=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l)}if(null!==a){var d=i.baseState;for(o=0,c=u=l=null,s=a;;){var f=s.lane,h=s.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,m=s;switch(f=t,h=n,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(f="function"==typeof(p=m.payload)?p.call(h,d,f):p))break e;d=en({},d,f);break e;case 2:iX=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[s]:f.push(s))}else h={eventTime:h,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=h,l=d):c=c.next=h,o|=f;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do o|=i.lane,i=i.next;while(i!==t)}else null===a&&(i.shared.lanes=0);sg|=o,e.lanes=o,e.memoizedState=d}}function i8(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(d(191,i));i.call(r)}}}var i5=(new u.Component).refs;function i9(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:en({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var i7={isMounted:function(e){return!!(e=e._reactInternals)&&e4(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=sD(),i=sA(e),a=i1(r,i);a.payload=t,null!=n&&(a.callback=n),null!==(t=i2(e,a,i))&&(sM(t,e,i,r),i3(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=sD(),i=sA(e),a=i1(r,i);a.tag=1,a.payload=t,null!=n&&(a.callback=n),null!==(t=i2(e,a,i))&&(sM(t,e,i,r),i3(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=sD(),r=sA(e),i=i1(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=i2(e,i,r))&&(sM(t,e,r,n),i3(t,e,r))}};function ae(e,t,n,r,i,a,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||!nJ(n,r)||!nJ(i,a)}function at(e,t,n){var r=!1,i=r3,a=t.contextType;return"object"==typeof a&&null!==a?a=iq(a):(i=r9(t)?r8:r4.current,a=(r=null!=(r=t.contextTypes))?r5(e,i):r3),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=i7,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function an(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&i7.enqueueReplaceState(t,t.state,null)}function ar(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=i5,iZ(e);var a=t.contextType;"object"==typeof a&&null!==a?i.context=iq(a):(a=r9(t)?r8:r4.current,i.context=r5(e,a)),i.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(i9(e,t,a,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&i7.enqueueReplaceState(i,i.state,null),i6(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function ai(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(d(309));var r=n.stateNode}if(!r)throw Error(d(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===a?t.ref:((t=function(e){var t=i.refs;t===i5&&(t=i.refs={}),null===e?delete t[a]:t[a]=e})._stringRef=a,t)}if("string"!=typeof e)throw Error(d(284));if(!n._owner)throw Error(d(290,e))}return e}function aa(e,t){throw Error(d(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ao(e){return(0,e._init)(e._payload)}function as(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=le(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return(t.index=r,e)?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?(t=li(n,e.mode,r)).return=e:(t=i(t,n)).return=e,t}function l(e,t,n,r){var a=n.type;return a===N?c(e,t,n.props.children,r,n.key):(null!==t&&(t.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===z&&ao(a)===t.type)?(r=i(t,n.props)).ref=ai(e,t,n):(r=lt(n.type,n.key,n.props,null,e.mode,r)).ref=ai(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=la(n,e.mode,r)).return=e:(t=i(t,n.children||[])).return=e,t}function c(e,t,n,r,a){return null===t||7!==t.tag?(t=ln(n,e.mode,r,a)).return=e:(t=i(t,n)).return=e,t}function f(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=li(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case T:return(n=lt(t.type,t.key,t.props,null,e.mode,n)).ref=ai(e,null,t),n.return=e,n;case x:return(t=la(t,e.mode,n)).return=e,t;case z:return f(e,(0,t._init)(t._payload),n)}if(ev(t)||H(t))return(t=ln(t,e.mode,n,null)).return=e,t;aa(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case T:return n.key===i?l(e,t,n,r):null;case x:return n.key===i?u(e,t,n,r):null;case z:return h(e,t,(i=n._init)(n._payload),r)}if(ev(n)||H(n))return null!==i?null:c(e,t,n,r,null);aa(e,n)}return null}function p(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case T:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case x:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case z:return p(e,t,n,(0,r._init)(r._payload),i)}if(ev(r)||H(r))return c(t,e=e.get(n)||null,r,i,null);aa(t,r)}return null}return function s(l,u,c,m){if("object"==typeof c&&null!==c&&c.type===N&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case T:e:{for(var g=c.key,v=u;null!==v;){if(v.key===g){if((g=c.type)===N){if(7===v.tag){n(l,v.sibling),(u=i(v,c.props.children)).return=l,l=u;break e}}else if(v.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===z&&ao(g)===v.type){n(l,v.sibling),(u=i(v,c.props)).ref=ai(l,v,c),u.return=l,l=u;break e}n(l,v);break}t(l,v),v=v.sibling}c.type===N?((u=ln(c.props.children,l.mode,m,c.key)).return=l,l=u):((m=lt(c.type,c.key,c.props,null,l.mode,m)).ref=ai(l,u,c),m.return=l,l=m)}return o(l);case x:e:{for(v=c.key;null!==u;){if(u.key===v){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=la(c,l.mode,m)).return=l,l=u}return o(l);case z:return s(l,u,(v=c._init)(c._payload),m)}if(ev(c))return function(i,o,s,l){for(var u=null,c=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=h(i,d,s[m],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(i,d),o=a(v,o,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===s.length)return n(i,d),iC&&iw(i,m),u;if(null===d){for(;m<s.length;m++)null!==(d=f(i,s[m],l))&&(o=a(d,o,m),null===c?u=d:c.sibling=d,c=d);return iC&&iw(i,m),u}for(d=r(i,d);m<s.length;m++)null!==(g=p(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(i,e)}),iC&&iw(i,m),u}(l,u,c,m);if(H(c))return function(i,o,s,l){var u=H(s);if("function"!=typeof u)throw Error(d(150));if(null==(s=u.call(s)))throw Error(d(151));for(var c=u=null,m=o,g=o=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=h(i,m,y.value,l);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(i,m),o=a(b,o,g),null===c?u=b:c.sibling=b,c=b,m=v}if(y.done)return n(i,m),iC&&iw(i,g),u;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=f(i,y.value,l))&&(o=a(y,o,g),null===c?u=y:c.sibling=y,c=y);return iC&&iw(i,g),u}for(m=r(i,m);!y.done;g++,y=s.next())null!==(y=p(m,i,g,y.value,l))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),o=a(y,o,g),null===c?u=y:c.sibling=y,c=y);return e&&m.forEach(function(e){return t(i,e)}),iC&&iw(i,g),u}(l,u,c,m);aa(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=i(u,c)).return=l):(n(l,u),(u=li(c,l.mode,m)).return=l),o(l=u)):n(l,u)}}var al=as(!0),au=as(!1),ac={},ad=r0(ac),af=r0(ac),ah=r0(ac);function ap(e){if(e===ac)throw Error(d(174));return e}function am(e,t){switch(r2(ah,t),r2(af,e),r2(ad,ac),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eE(null,"");break;default:t=eE(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}r1(ad),r2(ad,t)}function ag(){r1(ad),r1(af),r1(ah)}function av(e){ap(ah.current);var t=ap(ad.current),n=eE(t,e.type);t!==n&&(r2(af,e),r2(ad,n))}function ay(e){af.current===e&&(r1(ad),r1(af))}var ab=r0(0);function aw(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var a_=[];function ak(){for(var e=0;e<a_.length;e++)a_[e]._workInProgressVersionPrimary=null;a_.length=0}var aS=C.ReactCurrentDispatcher,aE=C.ReactCurrentBatchConfig,aI=0,aC=null,aT=null,ax=null,aN=!1,aP=!1,aR=0,aO=0;function aL(){throw Error(d(321))}function aD(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nG(e[n],t[n]))return!1;return!0}function aA(e,t,n,r,i,a){if(aI=a,aC=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,aS.current=null===e||null===e.memoizedState?ol:ou,e=n(r,i),aP){a=0;do{if(aP=!1,aR=0,25<=a)throw Error(d(301));a+=1,ax=aT=null,t.updateQueue=null,aS.current=oc,e=n(r,i)}while(aP)}if(aS.current=os,t=null!==aT&&null!==aT.next,aI=0,ax=aT=aC=null,aN=!1,t)throw Error(d(300));return e}function aM(){var e=0!==aR;return aR=0,e}function aj(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ax?aC.memoizedState=ax=e:ax=ax.next=e,ax}function aU(){if(null===aT){var e=aC.alternate;e=null!==e?e.memoizedState:null}else e=aT.next;var t=null===ax?aC.memoizedState:ax.next;if(null!==t)ax=t,aT=e;else{if(null===e)throw Error(d(310));e={memoizedState:(aT=e).memoizedState,baseState:aT.baseState,baseQueue:aT.baseQueue,queue:aT.queue,next:null},null===ax?aC.memoizedState=ax=e:ax=ax.next=e}return ax}function az(e,t){return"function"==typeof t?t(e):t}function aF(e){var t=aU(),n=t.queue;if(null===n)throw Error(d(311));n.lastRenderedReducer=e;var r=aT,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((aI&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(s=l=f,o=r):l=l.next=f,aC.lanes|=c,sg|=c}u=u.next}while(null!==u&&u!==a)null===l?o=r:l.next=s,nG(r,t.memoizedState)||(o_=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do a=i.lane,aC.lanes|=a,sg|=a,i=i.next;while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function aV(e){var t=aU(),n=t.queue;if(null===n)throw Error(d(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i)nG(a,t.memoizedState)||(o_=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function aH(){}function a$(e,t){var n=aC,r=aU(),i=t(),a=!nG(r.memoizedState,i);if(a&&(r.memoizedState=i,o_=!0),r=r.queue,a1(aK.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ax&&1&ax.memoizedState.tag){if(n.flags|=2048,aJ(9,aW.bind(null,n,r,i,t),void 0,null),null===su)throw Error(d(349));0!=(30&aI)||aB(n,t,i)}return i}function aB(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=aC.updateQueue)?(t={lastEffect:null,stores:null},aC.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function aW(e,t,n,r){t.value=n,t.getSnapshot=r,aq(t)&&aQ(e)}function aK(e,t,n){return n(function(){aq(t)&&aQ(e)})}function aq(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nG(e,n)}catch(e){return!0}}function aQ(e){var t=iY(e,1);null!==t&&sM(t,e,1,-1)}function aG(e){var t=aj();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:az,lastRenderedState:e},t.queue=e,e=e.dispatch=or.bind(null,aC,e),[t.memoizedState,e]}function aJ(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=aC.updateQueue)?(t={lastEffect:null,stores:null},aC.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function aY(){return aU().memoizedState}function aX(e,t,n,r){var i=aj();aC.flags|=e,i.memoizedState=aJ(1|t,n,void 0,void 0===r?null:r)}function aZ(e,t,n,r){var i=aU();r=void 0===r?null:r;var a=void 0;if(null!==aT){var o=aT.memoizedState;if(a=o.destroy,null!==r&&aD(r,o.deps)){i.memoizedState=aJ(t,n,a,r);return}}aC.flags|=e,i.memoizedState=aJ(1|t,n,a,r)}function a0(e,t){return aX(8390656,8,e,t)}function a1(e,t){return aZ(2048,8,e,t)}function a2(e,t){return aZ(4,2,e,t)}function a3(e,t){return aZ(4,4,e,t)}function a4(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function a6(e,t,n){return n=null!=n?n.concat([e]):null,aZ(4,4,a4.bind(null,t,e),n)}function a8(){}function a5(e,t){var n=aU();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&aD(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function a9(e,t){var n=aU();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&aD(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function a7(e,t,n){return 0==(21&aI)?(e.baseState&&(e.baseState=!1,o_=!0),e.memoizedState=n):(nG(n,t)||(n=tb(),aC.lanes|=n,sg|=n,e.baseState=!0),t)}function oe(e,t){var n=tS;tS=0!==n&&4>n?n:4,e(!0);var r=aE.transition;aE.transition={};try{e(!1),t()}finally{tS=n,aE.transition=r}}function ot(){return aU().memoizedState}function on(e,t,n){var r=sA(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oi(e)?oa(t,n):null!==(n=iJ(e,t,n,r))&&(sM(n,e,r,sD()),oo(n,t,r))}function or(e,t,n){var r=sA(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oi(e))oa(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,nG(s,o)){var l=t.interleaved;null===l?(i.next=i,iG(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch(e){}finally{}null!==(n=iJ(e,t,i,r))&&(sM(n,e,r,i=sD()),oo(n,t,r))}}function oi(e){var t=e.alternate;return e===aC||null!==t&&t===aC}function oa(e,t){aP=aN=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oo(e,t,n){if(0!=(4194240&n)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tk(e,n)}}var os={readContext:iq,useCallback:aL,useContext:aL,useEffect:aL,useImperativeHandle:aL,useInsertionEffect:aL,useLayoutEffect:aL,useMemo:aL,useReducer:aL,useRef:aL,useState:aL,useDebugValue:aL,useDeferredValue:aL,useTransition:aL,useMutableSource:aL,useSyncExternalStore:aL,useId:aL,unstable_isNewReconciler:!1},ol={readContext:iq,useCallback:function(e,t){return aj().memoizedState=[e,void 0===t?null:t],e},useContext:iq,useEffect:a0,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,aX(4194308,4,a4.bind(null,t,e),n)},useLayoutEffect:function(e,t){return aX(4194308,4,e,t)},useInsertionEffect:function(e,t){return aX(4,2,e,t)},useMemo:function(e,t){var n=aj();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=aj();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=on.bind(null,aC,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},aj().memoizedState=e},useState:aG,useDebugValue:a8,useDeferredValue:function(e){return aj().memoizedState=e},useTransition:function(){var e=aG(!1),t=e[0];return e=oe.bind(null,e[1]),aj().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=aC,i=aj();if(iC){if(void 0===n)throw Error(d(407));n=n()}else{if(n=t(),null===su)throw Error(d(349));0!=(30&aI)||aB(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,a0(aK.bind(null,r,a,e),[e]),r.flags|=2048,aJ(9,aW.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=aj(),t=su.identifierPrefix;if(iC){var n=ib,r=iy;t=":"+t+"R"+(n=(r&~(1<<32-td(r)-1)).toString(32)+n),0<(n=aR++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=aO++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ou={readContext:iq,useCallback:a5,useContext:iq,useEffect:a1,useImperativeHandle:a6,useInsertionEffect:a2,useLayoutEffect:a3,useMemo:a9,useReducer:aF,useRef:aY,useState:function(){return aF(az)},useDebugValue:a8,useDeferredValue:function(e){return a7(aU(),aT.memoizedState,e)},useTransition:function(){return[aF(az)[0],aU().memoizedState]},useMutableSource:aH,useSyncExternalStore:a$,useId:ot,unstable_isNewReconciler:!1},oc={readContext:iq,useCallback:a5,useContext:iq,useEffect:a1,useImperativeHandle:a6,useInsertionEffect:a2,useLayoutEffect:a3,useMemo:a9,useReducer:aV,useRef:aY,useState:function(){return aV(az)},useDebugValue:a8,useDeferredValue:function(e){var t=aU();return null===aT?t.memoizedState=e:a7(t,aT.memoizedState,e)},useTransition:function(){return[aV(az)[0],aU().memoizedState]},useMutableSource:aH,useSyncExternalStore:a$,useId:ot,unstable_isNewReconciler:!1};function od(e,t){try{var n="",r=t;do n+=function(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=ea(e.type,!1);case 11:return e=ea(e.type.render,!1);case 1:return e=ea(e.type,!0);default:return""}}(r),r=r.return;while(r)var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function of(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function oh(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var op="function"==typeof WeakMap?WeakMap:Map;function om(e,t,n){(n=i1(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sE||(sE=!0,sI=r),oh(e,t)},n}function og(e,t,n){(n=i1(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){oh(e,t)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(n.callback=function(){oh(e,t),"function"!=typeof r&&(null===sC?sC=new Set([this]):sC.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}function ov(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new op;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=s3.bind(null,e,t,n),t.then(e,e))}function oy(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function ob(e,t,n,r,i){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=i1(-1,1)).tag=2,i2(n,t,1))),n.lanes|=1):(e.flags|=65536,e.lanes=i),e}var ow=C.ReactCurrentOwner,o_=!1;function ok(e,t,n,r){t.child=null===e?au(t,null,n,r):al(t,e.child,n,r)}function oS(e,t,n,r,i){n=n.render;var a=t.ref;return(iK(t,i),r=aA(e,t,n,r,a,i),n=aM(),null===e||o_)?(iC&&n&&ik(t),t.flags|=1,ok(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,oH(e,t,i))}function oE(e,t,n,r,i){if(null===e){var a=n.type;return"function"!=typeof a||s7(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=lt(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,oI(e,t,a,r,i))}if(a=e.child,0==(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:nJ)(o,r)&&e.ref===t.ref)return oH(e,t,i)}return t.flags|=1,(e=le(a,r)).ref=t.ref,e.return=t,t.child=e}function oI(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(nJ(a,r)&&e.ref===t.ref){if(o_=!1,t.pendingProps=r=a,0==(e.lanes&i))return t.lanes=e.lanes,oH(e,t,i);0!=(131072&e.flags)&&(o_=!0)}}return ox(e,t,n,r,i)}function oC(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r2(sh,sf),sf|=n;else{if(0==(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,r2(sh,sf),sf|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,r2(sh,sf),sf|=r}}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,r2(sh,sf),sf|=r;return ok(e,t,i,n),t.child}function oT(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ox(e,t,n,r,i){var a=r9(n)?r8:r4.current;return(a=r5(t,a),iK(t,i),n=aA(e,t,n,r,a,i),r=aM(),null===e||o_)?(iC&&r&&ik(t),t.flags|=1,ok(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,oH(e,t,i))}function oN(e,t,n,r,i){if(r9(n)){var a=!0;ir(t)}else a=!1;if(iK(t,i),null===t.stateNode)oV(e,t),at(t,n,r),ar(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;u="object"==typeof u&&null!==u?iq(u):r5(t,u=r9(n)?r8:r4.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;d||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==r||l!==u)&&an(t,o,r,u),iX=!1;var f=t.memoizedState;o.state=f,i6(t,r,o,i),l=t.memoizedState,s!==r||f!==l||r6.current||iX?("function"==typeof c&&(i9(t,n,c,r),l=t.memoizedState),(s=iX||ae(t,n,s,r,f,l,u))?(d||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,i0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:iU(t.type,s),o.props=u,d=t.pendingProps,f=o.context,l="object"==typeof(l=n.contextType)&&null!==l?iq(l):r5(t,l=r9(n)?r8:r4.current);var h=n.getDerivedStateFromProps;(c="function"==typeof h||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==d||f!==l)&&an(t,o,r,l),iX=!1,f=t.memoizedState,o.state=f,i6(t,r,o,i);var p=t.memoizedState;s!==d||f!==p||r6.current||iX?("function"==typeof h&&(i9(t,n,h,r),p=t.memoizedState),(u=iX||ae(t,n,u,r,f,p,l)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return oP(e,t,n,r,a,i)}function oP(e,t,n,r,i,a){oT(e,t);var o=0!=(128&t.flags);if(!r&&!o)return i&&ii(t,n,!1),oH(e,t,a);r=t.stateNode,ow.current=t;var s=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=al(t,e.child,null,a),t.child=al(t,null,s,a)):ok(e,t,s,a),t.memoizedState=r.state,i&&ii(t,n,!0),t.child}function oR(e){var t=e.stateNode;t.pendingContext?ie(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ie(e,t.context,!1),am(e,t.containerInfo)}function oO(e,t,n,r,i){return iA(),iM(i),t.flags|=256,ok(e,t,n,r),t.child}var oL={dehydrated:null,treeContext:null,retryLane:0};function oD(e){return{baseLanes:e,cachePool:null,transitions:null}}function oA(e,t,n){var r,i=t.pendingProps,a=ab.current,o=!1,s=0!=(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!=(2&a)),r?(o=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(a|=1),r2(ab,1&a),null===e)return(iR(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,o?(i=t.mode,o=t.child,s={mode:"hidden",children:s},0==(1&i)&&null!==o?(o.childLanes=0,o.pendingProps=s):o=lr(s,i,0,null),e=ln(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=oD(n),t.memoizedState=oL,e):oM(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,o){if(n)return 256&t.flags?(t.flags&=-257,oj(e,t,o,r=of(Error(d(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=lr({mode:"visible",children:r.children},i,0,null),a=ln(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!=(1&t.mode)&&al(t,e.child,null,o),t.child.memoizedState=oD(o),t.memoizedState=oL,a);if(0==(1&t.mode))return oj(e,t,o,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var s=r.dgst;return r=s,oj(e,t,o,r=of(a=Error(d(419)),r,void 0))}if(s=0!=(o&e.childLanes),o_||s){if(null!==(r=su)){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|o))?0:i)&&i!==a.retryLane&&(a.retryLane=i,iY(e,i),sM(r,e,i,-1))}return sG(),oj(e,t,o,r=of(Error(d(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=s6.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,iI=rz(i.nextSibling),iE=t,iC=!0,iT=null,null!==e&&(im[ig++]=iy,im[ig++]=ib,im[ig++]=iv,iy=e.id,ib=e.overflow,iv=t),t=oM(t,r.children),t.flags|=4096,t)}(e,t,s,i,r,a,n);if(o){o=i.fallback,s=t.mode,r=(a=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&s)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null):(i=le(a,l)).subtreeFlags=14680064&a.subtreeFlags,null!==r?o=le(r,o):(o=ln(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,s=null===(s=e.child.memoizedState)?oD(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=oL,i}return e=(o=e.child).sibling,i=le(o,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function oM(e,t){return(t=lr({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function oj(e,t,n,r){return null!==r&&iM(r),al(t,e.child,null,n),e=oM(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oU(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),iW(e.return,t,n)}function oz(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function oF(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ok(e,t,r.children,n),0!=(2&(r=ab.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&oU(e,n,t);else if(19===e.tag)oU(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(r2(ab,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(i=null,n=t.child;null!==n;)null!==(e=n.alternate)&&null===aw(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),oz(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===aw(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}oz(t,!0,n,null,a);break;case"together":oz(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oV(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function oH(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),sg|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(d(153));if(null!==t.child){for(n=le(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=le(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function o$(e,t){if(!iC)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oB(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}i=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},a=function(){},o=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ap(ad.current);var a,o=null;switch(n){case"input":i=ed(e,i),r=ed(e,r),o=[];break;case"select":i=en({},i,{value:void 0}),r=en({},r,{value:void 0}),o=[];break;case"textarea":i=eb(e,i),r=eb(e,r),o=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=rN)}for(u in eD(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u]){if("style"===u){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(h.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null))}for(u in r){var l=r[u];if(s=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(null!=l||null!=s)){if("style"===u){if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l}else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(o=o||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(h.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&rm("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},s=function(e,t,n,r){n!==r&&(t.flags|=4)};var oW=!1,oK=!1,oq="function"==typeof WeakSet?WeakSet:Set,oQ=null;function oG(e,t){var n=e.ref;if(null!==n){if("function"==typeof n)try{n(null)}catch(n){s2(e,t,n)}else n.current=null}}function oJ(e,t,n){try{n()}catch(n){s2(e,t,n)}}var oY=!1;function oX(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&oJ(t,n,a)}i=i.next}while(i!==r)}}function oZ(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function o0(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function o1(e){return 5===e.tag||3===e.tag||4===e.tag}function o2(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||o1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var o3=null,o4=!1;function o6(e,t,n){for(n=n.child;null!==n;)o8(e,t,n),n=n.sibling}function o8(e,t,n){if(tc&&"function"==typeof tc.onCommitFiberUnmount)try{tc.onCommitFiberUnmount(tu,n)}catch(e){}switch(n.tag){case 5:oK||oG(n,t);case 6:var r=o3,i=o4;o3=null,o6(e,t,n),o3=r,o4=i,null!==o3&&(o4?(e=o3,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):o3.removeChild(n.stateNode));break;case 18:null!==o3&&(o4?(e=o3,n=n.stateNode,8===e.nodeType?rU(e.parentNode,n):1===e.nodeType&&rU(e,n),tK(e)):rU(o3,n.stateNode));break;case 4:r=o3,i=o4,o3=n.stateNode.containerInfo,o4=!0,o6(e,t,n),o3=r,o4=i;break;case 0:case 11:case 14:case 15:if(!oK&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!=(2&a)?oJ(n,t,o):0!=(4&a)&&oJ(n,t,o)),i=i.next}while(i!==r)}o6(e,t,n);break;case 1:if(!oK&&(oG(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){s2(n,t,e)}o6(e,t,n);break;case 21:default:o6(e,t,n);break;case 22:1&n.mode?(oK=(r=oK)||null!==n.memoizedState,o6(e,t,n),oK=r):o6(e,t,n)}}function o5(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new oq),t.forEach(function(t){var r=s8.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function o9(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=t,o=a;e:for(;null!==o;){switch(o.tag){case 5:o3=o.stateNode,o4=!1;break e;case 3:case 4:o3=o.stateNode.containerInfo,o4=!0;break e}o=o.return}if(null===o3)throw Error(d(160));o8(e,a,i),o3=null,o4=!1;var s=i.alternate;null!==s&&(s.return=null),i.return=null}catch(e){s2(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)o7(t,e),t=t.sibling}function o7(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(o9(t,e),se(e),4&r){try{oX(3,e,e.return),oZ(3,e)}catch(t){s2(e,e.return,t)}try{oX(5,e,e.return)}catch(t){s2(e,e.return,t)}}break;case 1:o9(t,e),se(e),512&r&&null!==n&&oG(n,n.return);break;case 5:if(o9(t,e),se(e),512&r&&null!==n&&oG(n,n.return),32&e.flags){var i=e.stateNode;try{ex(i,"")}catch(t){s2(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,o=null!==n?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===s&&"radio"===a.type&&null!=a.name&&eh(i,a),eA(s,o);var u=eA(s,a);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];"style"===c?eO(i,f):"dangerouslySetInnerHTML"===c?eT(i,f):"children"===c?ex(i,f):I(i,c,f,u)}switch(s){case"input":ep(i,a);break;case"textarea":e_(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;null!=p?ey(i,!!a.multiple,p,!1):!!a.multiple!==h&&(null!=a.defaultValue?ey(i,!!a.multiple,a.defaultValue,!0):ey(i,!!a.multiple,a.multiple?[]:"",!1))}i[r$]=a}catch(t){s2(e,e.return,t)}}break;case 6:if(o9(t,e),se(e),4&r){if(null===e.stateNode)throw Error(d(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(t){s2(e,e.return,t)}}break;case 3:if(o9(t,e),se(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tK(t.containerInfo)}catch(t){s2(e,e.return,t)}break;case 4:default:o9(t,e),se(e);break;case 13:o9(t,e),se(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,a&&(null===i.alternate||null===i.alternate.memoizedState)&&(s_=tn())),4&r&&o5(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(oK=(u=oK)||c,o9(t,e),oK=u):o9(t,e),se(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(oQ=e,c=e.child;null!==c;){for(f=oQ=c;null!==oQ;){switch(p=(h=oQ).child,h.tag){case 0:case 11:case 14:case 15:oX(4,h,h.return);break;case 1:oG(h,h.return);var m=h.stateNode;if("function"==typeof m.componentWillUnmount){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(e){s2(r,n,e)}}break;case 5:oG(h,h.return);break;case 22:if(null!==h.memoizedState){sn(f);continue}}null!==p?(p.return=h,oQ=p):sn(f)}c=c.sibling}e:for(c=null,f=e;;){if(5===f.tag){if(null===c){c=f;try{i=f.stateNode,u?(a=i.style,"function"==typeof a.setProperty?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,o=null!=(l=f.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,s.style.display=eR("display",o))}catch(t){s2(e,e.return,t)}}}else if(6===f.tag){if(null===c)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(t){s2(e,e.return,t)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:o9(t,e),se(e),4&r&&o5(e);case 21:}}function se(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(o1(n)){var r=n;break e}n=n.return}throw Error(d(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(ex(i,""),r.flags&=-33);var a=o2(e);!function e(t,n,r){var i=t.tag;if(5===i||6===i)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=o2(e);!function e(t,n,r){var i=t.tag;if(5===i||6===i)t=t.stateNode,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!=(r=r._reactRootContainer)||null!==n.onclick||(n.onclick=rN));else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,s,o);break;default:throw Error(d(161))}}catch(t){s2(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function st(e){for(;null!==oQ;){var t=oQ;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:oK||oZ(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!oK){if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:iU(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}}var a=t.updateQueue;null!==a&&i8(t,a,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}i8(t,o,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var f=c.dehydrated;null!==f&&tK(f)}}}break;default:throw Error(d(163))}oK||512&t.flags&&o0(t)}catch(e){s2(t,t.return,e)}}if(t===e){oQ=null;break}if(null!==(n=t.sibling)){n.return=t.return,oQ=n;break}oQ=t.return}}function sn(e){for(;null!==oQ;){var t=oQ;if(t===e){oQ=null;break}var n=t.sibling;if(null!==n){n.return=t.return,oQ=n;break}oQ=t.return}}function sr(e){for(;null!==oQ;){var t=oQ;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oZ(4,t)}catch(e){s2(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){s2(t,i,e)}}var a=t.return;try{o0(t)}catch(e){s2(t,a,e)}break;case 5:var o=t.return;try{o0(t)}catch(e){s2(t,o,e)}}}catch(e){s2(t,t.return,e)}if(t===e){oQ=null;break}var s=t.sibling;if(null!==s){s.return=t.return,oQ=s;break}oQ=t.return}}var si=Math.ceil,sa=C.ReactCurrentDispatcher,so=C.ReactCurrentOwner,ss=C.ReactCurrentBatchConfig,sl=0,su=null,sc=null,sd=0,sf=0,sh=r0(0),sp=0,sm=null,sg=0,sv=0,sy=0,sb=null,sw=null,s_=0,sk=1/0,sS=null,sE=!1,sI=null,sC=null,sT=!1,sx=null,sN=0,sP=0,sR=null,sO=-1,sL=0;function sD(){return 0!=(6&sl)?tn():-1!==sO?sO:sO=tn()}function sA(e){return 0==(1&e.mode)?1:0!=(2&sl)&&0!==sd?sd&-sd:null!==ij.transition?(0===sL&&(sL=tb()),sL):0!==(e=tS)?e:e=void 0===(e=window.event)?16:t0(e.type)}function sM(e,t,n,r){if(50<sP)throw sP=0,sR=null,Error(d(185));t_(e,n,r),(0==(2&sl)||e!==su)&&(e===su&&(0==(2&sl)&&(sv|=n),4===sp&&sV(e,sd)),sj(e,r),1===n&&0===sl&&0==(1&t.mode)&&(sk=tn()+500,io&&iu()))}function sj(e,t){var n,r,i,a=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-td(a),s=1<<o,l=i[o];-1===l?(0==(s&n)||0!=(s&r))&&(i[o]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var o=tv(e,e===su?sd:0);if(0===o)null!==a&&e7(a),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(null!=a&&e7(a),1===t)0===e.tag?(i=sH.bind(null,e),io=!0,il(i)):il(sH.bind(null,e)),rM(function(){0==(6&sl)&&iu()}),a=null;else{switch(tE(o)){case 1:a=ti;break;case 4:a=ta;break;case 16:default:a=to;break;case 536870912:a=tl}a=e9(a,sU.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function sU(e,t){if(sO=-1,sL=0,0!=(6&sl))throw Error(d(327));var n=e.callbackNode;if(s0()&&e.callbackNode!==n)return null;var r=tv(e,e===su?sd:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=sJ(e,r);else{t=r;var i=sl;sl|=2;var a=sQ();for((su!==e||sd!==t)&&(sS=null,sk=tn()+500,sK(e,t));;)try{(function(){for(;null!==sc&&!te();)sY(sc)})();break}catch(t){sq(e,t)}i$(),sa.current=a,sl=i,null!==sc?t=0:(su=null,sd=0,t=sp)}if(0!==t){if(2===t&&0!==(i=ty(e))&&(r=i,t=sz(e,i)),1===t)throw n=sm,sK(e,0),sV(e,r),sj(e,tn()),n;if(6===t)sV(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!nG(a(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=sJ(e,r))&&0!==(a=ty(e))&&(r=a,t=sz(e,a)),1===t))throw n=sm,sK(e,0),sV(e,r),sj(e,tn()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(d(345));case 2:case 5:sZ(e,sw,sS);break;case 3:if(sV(e,r),(130023424&r)===r&&10<(t=s_+500-tn())){if(0!==tv(e,0))break;if(((i=e.suspendedLanes)&r)!==r){sD(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rL(sZ.bind(null,e,sw,sS),t);break}sZ(e,sw,sS);break;case 4:if(sV(e,r),(4194240&r)===r)break;for(i=-1,t=e.eventTimes;0<r;){var o=31-td(r);a=1<<o,(o=t[o])>i&&(i=o),r&=~a}if(r=i,10<(r=(120>(r=tn()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*si(r/1960))-r)){e.timeoutHandle=rL(sZ.bind(null,e,sw,sS),r);break}sZ(e,sw,sS);break;default:throw Error(d(329))}}}return sj(e,tn()),e.callbackNode===n?sU.bind(null,e):null}function sz(e,t){var n=sb;return e.current.memoizedState.isDehydrated&&(sK(e,t).flags|=256),2!==(e=sJ(e,t))&&(t=sw,sw=n,null!==t&&sF(t)),e}function sF(e){null===sw?sw=e:sw.push.apply(sw,e)}function sV(e,t){for(t&=~sy,t&=~sv,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-td(t),r=1<<n;e[n]=-1,t&=~r}}function sH(e){if(0!=(6&sl))throw Error(d(327));s0();var t=tv(e,0);if(0==(1&t))return sj(e,tn()),null;var n=sJ(e,t);if(0!==e.tag&&2===n){var r=ty(e);0!==r&&(t=r,n=sz(e,r))}if(1===n)throw n=sm,sK(e,0),sV(e,t),sj(e,tn()),n;if(6===n)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sZ(e,sw,sS),sj(e,tn()),null}function s$(e,t){var n=sl;sl|=1;try{return e(t)}finally{0===(sl=n)&&(sk=tn()+500,io&&iu())}}function sB(e){null!==sx&&0===sx.tag&&0==(6&sl)&&s0();var t=sl;sl|=1;var n=ss.transition,r=tS;try{if(ss.transition=null,tS=1,e)return e()}finally{tS=r,ss.transition=n,0==(6&(sl=t))&&iu()}}function sW(){sf=sh.current,r1(sh)}function sK(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rD(n)),null!==sc)for(n=sc.return;null!==n;){var r=n;switch(iS(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&r7();break;case 3:ag(),r1(r6),r1(r4),ak();break;case 5:ay(r);break;case 4:ag();break;case 13:case 19:r1(ab);break;case 10:iB(r.type._context);break;case 22:case 23:sW()}n=n.return}if(su=e,sc=e=le(e.current,null),sd=sf=t,sp=0,sm=null,sy=sv=sg=0,sw=sb=null,null!==iQ){for(t=0;t<iQ.length;t++)if(null!==(r=(n=iQ[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}iQ=null}return e}function sq(e,t){for(;;){var n=sc;try{if(i$(),aS.current=os,aN){for(var r=aC.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}aN=!1}if(aI=0,ax=aT=aC=null,aP=!1,aR=0,so.current=null,null===n||null===n.return){sp=1,sm=t,sc=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=sd,s.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=s,f=c.tag;if(0==(1&c.mode)&&(0===f||11===f||15===f)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=oy(o);if(null!==p){p.flags&=-257,ob(p,o,s,a,t),1&p.mode&&ov(a,u,t),t=p,l=u;var m=t.updateQueue;if(null===m){var g=new Set;g.add(l),t.updateQueue=g}else m.add(l);break e}if(0==(1&t)){ov(a,u,t),sG();break e}l=Error(d(426))}else if(iC&&1&s.mode){var v=oy(o);if(null!==v){0==(65536&v.flags)&&(v.flags|=256),ob(v,o,s,a,t),iM(od(l,s));break e}}a=l=od(l,s),4!==sp&&(sp=2),null===sb?sb=[a]:sb.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=om(a,l,t);i4(a,y);break e;case 1:s=l;var b=a.type,w=a.stateNode;if(0==(128&a.flags)&&("function"==typeof b.getDerivedStateFromError||null!==w&&"function"==typeof w.componentDidCatch&&(null===sC||!sC.has(w)))){a.flags|=65536,t&=-t,a.lanes|=t;var _=og(a,s,t);i4(a,_);break e}}a=a.return}while(null!==a)}sX(n)}catch(e){t=e,sc===n&&null!==n&&(sc=n=n.return);continue}break}}function sQ(){var e=sa.current;return sa.current=os,null===e?os:e}function sG(){(0===sp||3===sp||2===sp)&&(sp=4),null===su||0==(268435455&sg)&&0==(268435455&sv)||sV(su,sd)}function sJ(e,t){var n=sl;sl|=2;var r=sQ();for((su!==e||sd!==t)&&(sS=null,sK(e,t));;)try{(function(){for(;null!==sc;)sY(sc)})();break}catch(t){sq(e,t)}if(i$(),sl=n,sa.current=r,null!==sc)throw Error(d(261));return su=null,sd=0,sp}function sY(e){var t=l(e.alternate,e,sf);e.memoizedProps=e.pendingProps,null===t?sX(e):sc=t,so.current=null}function sX(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=function(e,t,n){var r=t.pendingProps;switch(iS(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oB(t),null;case 1:case 17:return r9(t.type)&&r7(),oB(t),null;case 3:return r=t.stateNode,ag(),r1(r6),r1(r4),ak(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(null===e||null===e.child)&&(iL(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==iT&&(sF(iT),iT=null))),a(e,t),oB(t),null;case 5:ay(t);var l=ap(ah.current);if(n=t.type,null!==e&&null!=t.stateNode)o(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(d(166));return oB(t),null}if(e=ap(ad.current),iL(t)){r=t.stateNode,n=t.type;var u=t.memoizedProps;switch(r[rH]=t,r[r$]=u,e=0!=(1&t.mode),n){case"dialog":rm("cancel",r),rm("close",r);break;case"iframe":case"object":case"embed":rm("load",r);break;case"video":case"audio":for(l=0;l<rd.length;l++)rm(rd[l],r);break;case"source":rm("error",r);break;case"img":case"image":case"link":rm("error",r),rm("load",r);break;case"details":rm("toggle",r);break;case"input":ef(r,u),rm("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},rm("invalid",r);break;case"textarea":ew(r,u),rm("invalid",r)}for(var c in eD(n,u),l=null,u)if(u.hasOwnProperty(c)){var f=u[c];"children"===c?"string"==typeof f?r.textContent!==f&&(!0!==u.suppressHydrationWarning&&rx(r.textContent,f,e),l=["children",f]):"number"==typeof f&&r.textContent!==""+f&&(!0!==u.suppressHydrationWarning&&rx(r.textContent,f,e),l=["children",""+f]):h.hasOwnProperty(c)&&null!=f&&"onScroll"===c&&rm("scroll",r)}switch(n){case"input":el(r),em(r,u,!0);break;case"textarea":el(r),ek(r);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(r.onclick=rN)}r=l,t.updateQueue=r,null!==r&&(t.flags|=4)}else{c=9===l.nodeType?l:l.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=eS(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=c.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),"select"===n&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[rH]=t,e[r$]=r,i(e,t,!1,!1),t.stateNode=e;e:{switch(c=eA(n,r),n){case"dialog":rm("cancel",e),rm("close",e),l=r;break;case"iframe":case"object":case"embed":rm("load",e),l=r;break;case"video":case"audio":for(l=0;l<rd.length;l++)rm(rd[l],e);l=r;break;case"source":rm("error",e),l=r;break;case"img":case"image":case"link":rm("error",e),rm("load",e),l=r;break;case"details":rm("toggle",e),l=r;break;case"input":ef(e,r),l=ed(e,r),rm("invalid",e);break;case"option":default:l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=en({},r,{value:void 0}),rm("invalid",e);break;case"textarea":ew(e,r),l=eb(e,r),rm("invalid",e)}for(u in eD(n,l),f=l)if(f.hasOwnProperty(u)){var p=f[u];"style"===u?eO(e,p):"dangerouslySetInnerHTML"===u?null!=(p=p?p.__html:void 0)&&eT(e,p):"children"===u?"string"==typeof p?("textarea"!==n||""!==p)&&ex(e,p):"number"==typeof p&&ex(e,""+p):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(h.hasOwnProperty(u)?null!=p&&"onScroll"===u&&rm("scroll",e):null!=p&&I(e,u,p,c))}switch(n){case"input":el(e),em(e,r,!1);break;case"textarea":el(e),ek(e);break;case"option":null!=r.value&&e.setAttribute("value",""+eo(r.value));break;case"select":e.multiple=!!r.multiple,null!=(u=r.value)?ey(e,!!r.multiple,u,!1):null!=r.defaultValue&&ey(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof l.onClick&&(e.onclick=rN)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return oB(t),null;case 6:if(e&&null!=t.stateNode)s(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(d(166));if(n=ap(ah.current),ap(ad.current),iL(t)){if(r=t.stateNode,n=t.memoizedProps,r[rH]=t,(u=r.nodeValue!==n)&&null!==(e=iE))switch(e.tag){case 3:rx(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&rx(r.nodeValue,n,0!=(1&e.mode))}u&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[rH]=t,t.stateNode=r}return oB(t),null;case 13:if(r1(ab),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(iC&&null!==iI&&0!=(1&t.mode)&&0==(128&t.flags))iD(),iA(),t.flags|=98560,u=!1;else if(u=iL(t),null!==r&&null!==r.dehydrated){if(null===e){if(!u)throw Error(d(318));if(!(u=null!==(u=t.memoizedState)?u.dehydrated:null))throw Error(d(317));u[rH]=t}else iA(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;oB(t),u=!1}else null!==iT&&(sF(iT),iT=null),u=!0;if(!u)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=n,t;return(r=null!==r)!=(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ab.current)?0===sp&&(sp=3):sG())),null!==t.updateQueue&&(t.flags|=4),oB(t),null;case 4:return ag(),a(e,t),null===e&&ry(t.stateNode.containerInfo),oB(t),null;case 10:return iB(t.type._context),oB(t),null;case 19:if(r1(ab),null===(u=t.memoizedState))return oB(t),null;if(r=0!=(128&t.flags),null===(c=u.rendering)){if(r)o$(u,!1);else{if(0!==sp||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=aw(e))){for(t.flags|=128,o$(u,!1),null!==(r=c.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)u=n,e=r,u.flags&=14680066,null===(c=u.alternate)?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=c.childLanes,u.lanes=c.lanes,u.child=c.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=c.memoizedProps,u.memoizedState=c.memoizedState,u.updateQueue=c.updateQueue,u.type=c.type,e=c.dependencies,u.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return r2(ab,1&ab.current|2),t.child}e=e.sibling}null!==u.tail&&tn()>sk&&(t.flags|=128,r=!0,o$(u,!1),t.lanes=4194304)}}else{if(!r){if(null!==(e=aw(c))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),o$(u,!0),null===u.tail&&"hidden"===u.tailMode&&!c.alternate&&!iC)return oB(t),null}else 2*tn()-u.renderingStartTime>sk&&1073741824!==n&&(t.flags|=128,r=!0,o$(u,!1),t.lanes=4194304)}u.isBackwards?(c.sibling=t.child,t.child=c):(null!==(n=u.last)?n.sibling=c:t.child=c,u.last=c)}if(null!==u.tail)return t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=tn(),t.sibling=null,n=ab.current,r2(ab,r?1&n|2:1&n),t;return oB(t),null;case 22:case 23:return sW(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&sf)&&(oB(t),6&t.subtreeFlags&&(t.flags|=8192)):oB(t),null;case 24:case 25:return null}throw Error(d(156,t.tag))}(n,t,sf))){sc=n;return}}else{if(null!==(n=function(e,t){switch(iS(t),t.tag){case 1:return r9(t.type)&&r7(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ag(),r1(r6),r1(r4),ak(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return ay(t),null;case 13:if(r1(ab),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(d(340));iA()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return r1(ab),null;case 4:return ag(),null;case 10:return iB(t.type._context),null;case 22:case 23:return sW(),null;default:return null}}(n,t))){n.flags&=32767,sc=n;return}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{sp=6,sc=null;return}}if(null!==(t=t.sibling)){sc=t;return}sc=t=e}while(null!==t)0===sp&&(sp=5)}function sZ(e,t,n){var r=tS,i=ss.transition;try{ss.transition=null,tS=1,function(e,t,n,r){do s0();while(null!==sx)if(0!=(6&sl))throw Error(d(327));n=e.finishedWork;var i=e.finishedLanes;if(null!==n){if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-td(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,a),e===su&&(sc=su=null,sd=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||sT||(sT=!0,o=to,s=function(){return s0(),null},e9(o,s)),a=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||a){a=ss.transition,ss.transition=null;var o,s,l,u,c,f=tS;tS=1;var h=sl;sl|=4,so.current=null,function(e,t){if(rP=tQ,n0(e=nZ())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i,a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(e){n=null;break e}var s=0,l=-1,u=-1,c=0,f=0,h=e,p=null;t:for(;;){for(;h!==n||0!==a&&3!==h.nodeType||(l=s+a),h!==o||0!==r&&3!==h.nodeType||(u=s+r),3===h.nodeType&&(s+=h.nodeValue.length),null!==(i=h.firstChild);)p=h,h=i;for(;;){if(h===e)break t;if(p===n&&++c===a&&(l=s),p===o&&++f===r&&(u=s),null!==(i=h.nextSibling))break;p=(h=p).parentNode}h=i}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rR={focusedElem:e,selectionRange:n},tQ=!1,oQ=t;null!==oQ;)if(e=(t=oQ).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,oQ=e;else for(;null!==oQ;){t=oQ;try{var m=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:iU(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(d(163))}}catch(e){s2(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,oQ=e;break}oQ=t.return}m=oY,oY=!1}(e,n),o7(n,e),function(e){var t=nZ(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&function e(t,n){return!!t&&!!n&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(n.ownerDocument.documentElement,n)){if(null!==r&&n0(n)){if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=nX(n,a);var o=nX(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(rR),tQ=!!rP,rR=rP=null,e.current=n,l=n,u=e,c=i,oQ=l,function e(t,n,r){for(var i=0!=(1&t.mode);null!==oQ;){var a=oQ,o=a.child;if(22===a.tag&&i){var s=null!==a.memoizedState||oW;if(!s){var l=a.alternate,u=null!==l&&null!==l.memoizedState||oK;l=oW;var c=oK;if(oW=s,(oK=u)&&!c)for(oQ=a;null!==oQ;)u=(s=oQ).child,22===s.tag&&null!==s.memoizedState?sr(a):null!==u?(u.return=s,oQ=u):sr(a);for(;null!==o;)oQ=o,e(o,n,r),o=o.sibling;oQ=a,oW=l,oK=c}st(t,n,r)}else 0!=(8772&a.subtreeFlags)&&null!==o?(o.return=a,oQ=o):st(t,n,r)}}(l,u,c),tt(),sl=h,tS=f,ss.transition=a}else e.current=n;if(sT&&(sT=!1,sx=e,sN=i),0===(a=e.pendingLanes)&&(sC=null),function(e){if(tc&&"function"==typeof tc.onCommitFiberRoot)try{tc.onCommitFiberRoot(tu,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode,r),sj(e,tn()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r((i=t[n]).value,{componentStack:i.stack,digest:i.digest});if(sE)throw sE=!1,e=sI,sI=null,e;0!=(1&sN)&&0!==e.tag&&s0(),0!=(1&(a=e.pendingLanes))?e===sR?sP++:(sP=0,sR=e):sP=0,iu()}}(e,t,n,r)}finally{ss.transition=i,tS=r}return null}function s0(){if(null!==sx){var e=tE(sN),t=ss.transition,n=tS;try{if(ss.transition=null,tS=16>e?16:e,null===sx)var r=!1;else{if(e=sx,sx=null,sN=0,0!=(6&sl))throw Error(d(331));var i=sl;for(sl|=4,oQ=e.current;null!==oQ;){var a=oQ,o=a.child;if(0!=(16&oQ.flags)){var s=a.deletions;if(null!==s){for(var l=0;l<s.length;l++){var u=s[l];for(oQ=u;null!==oQ;){var c=oQ;switch(c.tag){case 0:case 11:case 15:oX(8,c,a)}var f=c.child;if(null!==f)f.return=c,oQ=f;else for(;null!==oQ;){var h=(c=oQ).sibling,p=c.return;if(function e(t){var n=t.alternate;null!==n&&(t.alternate=null,e(n)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(n=t.stateNode)&&(delete n[rH],delete n[r$],delete n[rW],delete n[rK],delete n[rq]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(c),c===u){oQ=null;break}if(null!==h){h.return=p,oQ=h;break}oQ=p}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}oQ=a}}if(0!=(2064&a.subtreeFlags)&&null!==o)o.return=a,oQ=o;else for(;null!==oQ;){if(a=oQ,0!=(2048&a.flags))switch(a.tag){case 0:case 11:case 15:oX(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,oQ=y;break}oQ=a.return}}var b=e.current;for(oQ=b;null!==oQ;){var w=(o=oQ).child;if(0!=(2064&o.subtreeFlags)&&null!==w)w.return=o,oQ=w;else for(o=b;null!==oQ;){if(s=oQ,0!=(2048&s.flags))try{switch(s.tag){case 0:case 11:case 15:oZ(9,s)}}catch(e){s2(s,s.return,e)}if(s===o){oQ=null;break}var _=s.sibling;if(null!==_){_.return=s.return,oQ=_;break}oQ=s.return}}if(sl=i,iu(),tc&&"function"==typeof tc.onPostCommitFiberRoot)try{tc.onPostCommitFiberRoot(tu,e)}catch(e){}r=!0}return r}finally{tS=n,ss.transition=t}}return!1}function s1(e,t,n){t=om(e,t=od(n,t),1),e=i2(e,t,1),t=sD(),null!==e&&(t_(e,1,t),sj(e,t))}function s2(e,t,n){if(3===e.tag)s1(e,e,n);else for(;null!==t;){if(3===t.tag){s1(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===sC||!sC.has(r))){e=og(t,e=od(n,e),1),t=i2(t,e,1),e=sD(),null!==t&&(t_(t,1,e),sj(t,e));break}}t=t.return}}function s3(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=sD(),e.pingedLanes|=e.suspendedLanes&n,su===e&&(sd&n)===n&&(4===sp||3===sp&&(130023424&sd)===sd&&500>tn()-s_?sK(e,0):sy|=n),sj(e,t)}function s4(e,t){0===t&&(0==(1&e.mode)?t=1:(t=tm,0==(130023424&(tm<<=1))&&(tm=4194304)));var n=sD();null!==(e=iY(e,t))&&(t_(e,t,n),sj(e,n))}function s6(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),s4(e,n)}function s8(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(d(314))}null!==r&&r.delete(t),s4(e,n)}function s5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function s9(e,t,n,r){return new s5(e,t,n,r)}function s7(e){return!(!(e=e.prototype)||!e.isReactComponent)}function le(e,t){var n=e.alternate;return null===n?((n=s9(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lt(e,t,n,r,i,a){var o=2;if(r=e,"function"==typeof e)s7(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case N:return ln(n.children,i,a,t);case R:o=8,i|=8;break;case O:return(e=s9(12,n,t,2|i)).elementType=O,e.lanes=a,e;case M:return(e=s9(13,n,t,i)).elementType=M,e.lanes=a,e;case j:return(e=s9(19,n,t,i)).elementType=j,e.lanes=a,e;case F:return lr(n,i,a,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case L:o=10;break e;case D:o=9;break e;case A:o=11;break e;case U:o=14;break e;case z:o=16,r=null;break e}throw Error(d(130,null==e?e:typeof e,""))}return(t=s9(o,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function ln(e,t,n,r){return(e=s9(7,e,r,t)).lanes=n,e}function lr(e,t,n,r){return(e=s9(22,e,r,t)).elementType=F,e.lanes=n,e.stateNode={isHidden:!1},e}function li(e,t,n){return(e=s9(6,e,null,t)).lanes=n,e}function la(e,t,n){return(t=s9(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lo(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tw(0),this.expirationTimes=tw(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tw(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ls(e,t,n,r,i,a,o,s,l){return e=new lo(e,t,n,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=s9(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},iZ(a),e}function ll(e){if(!e)return r3;e=e._reactInternals;e:{if(e4(e)!==e||1!==e.tag)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(r9(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(d(171))}if(1===e.tag){var n=e.type;if(r9(n))return it(e,n,t)}return t}function lu(e,t,n,r,i,a,o,s,l){return(e=ls(n,r,!0,e,i,a,o,s,l)).context=ll(null),n=e.current,(a=i1(r=sD(),i=sA(n))).callback=null!=t?t:null,i2(n,a,i),e.current.lanes=i,t_(e,i,r),sj(e,r),e}function lc(e,t,n,r){var i=t.current,a=sD(),o=sA(i);return n=ll(n),null===t.context?t.context=n:t.pendingContext=n,(t=i1(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=i2(i,t,o))&&(sM(e,i,o,a),i3(e,i,o)),o}function ld(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function lf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function lh(e,t){lf(e,t),(e=e.alternate)&&lf(e,t)}l=function(e,t,n){if(null!==e){if(e.memoizedProps!==t.pendingProps||r6.current)o_=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return o_=!1,function(e,t,n){switch(t.tag){case 3:oR(t),iA();break;case 5:av(t);break;case 1:r9(t.type)&&ir(t);break;case 4:am(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;r2(iz,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState)){if(null!==r.dehydrated)return r2(ab,1&ab.current),t.flags|=128,null;if(0!=(n&t.child.childLanes))return oA(e,t,n);return r2(ab,1&ab.current),null!==(e=oH(e,t,n))?e.sibling:null}r2(ab,1&ab.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return oF(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),r2(ab,ab.current),!r)return null;break;case 22:case 23:return t.lanes=0,oC(e,t,n)}return oH(e,t,n)}(e,t,n);o_=0!=(131072&e.flags)}}else o_=!1,iC&&0!=(1048576&t.flags)&&i_(t,ip,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oV(e,t),e=t.pendingProps;var i=r5(t,r4.current);iK(t,n),i=aA(null,t,r,e,i,n);var a=aM();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,r9(r)?(a=!0,ir(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,iZ(t),i.updater=i7,t.stateNode=i,i._reactInternals=t,ar(t,r,e,n),t=oP(null,t,r,!0,a,n)):(t.tag=0,iC&&a&&ik(t),ok(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oV(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return s7(e)?1:0;if(null!=e){if((e=e.$$typeof)===A)return 11;if(e===U)return 14}return 2}(r),e=iU(r,e),i){case 0:t=ox(null,t,r,e,n);break e;case 1:t=oN(null,t,r,e,n);break e;case 11:t=oS(null,t,r,e,n);break e;case 14:t=oE(null,t,r,iU(r.type,e),n);break e}throw Error(d(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iU(r,i),ox(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iU(r,i),oN(e,t,r,i,n);case 3:e:{if(oR(t),null===e)throw Error(d(387));r=t.pendingProps,i=(a=t.memoizedState).element,i0(e,t),i6(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){i=od(Error(d(423)),t),t=oO(e,t,r,n,i);break e}if(r!==i){i=od(Error(d(424)),t),t=oO(e,t,r,n,i);break e}for(iI=rz(t.stateNode.containerInfo.firstChild),iE=t,iC=!0,iT=null,n=au(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(iA(),r===i){t=oH(e,t,n);break e}ok(e,t,r,n)}t=t.child}return t;case 5:return av(t),null===e&&iR(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,o=i.children,rO(r,i)?o=null:null!==a&&rO(r,a)&&(t.flags|=32),oT(e,t),ok(e,t,o,n),t.child;case 6:return null===e&&iR(t),null;case 13:return oA(e,t,n);case 4:return am(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=al(t,null,r,n):ok(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iU(r,i),oS(e,t,r,i,n);case 7:return ok(e,t,t.pendingProps,n),t.child;case 8:case 12:return ok(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,r2(iz,r._currentValue),r._currentValue=o,null!==a){if(nG(a.value,o)){if(a.children===i.children&&!r6.current){t=oH(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){o=a.child;for(var l=s.firstContext;null!==l;){if(l.context===r){if(1===a.tag){(l=i1(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),iW(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(10===a.tag)o=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(o=a.return))throw Error(d(341));o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),iW(o,n,t),o=a.sibling}else o=a.child;if(null!==o)o.return=a;else for(o=a;null!==o;){if(o===t){o=null;break}if(null!==(a=o.sibling)){a.return=o.return,o=a;break}o=o.return}a=o}}ok(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,iK(t,n),r=r(i=iq(i)),t.flags|=1,ok(e,t,r,n),t.child;case 14:return i=iU(r=t.type,t.pendingProps),i=iU(r.type,i),oE(e,t,r,i,n);case 15:return oI(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iU(r,i),oV(e,t),t.tag=1,r9(r)?(e=!0,ir(t)):e=!1,iK(t,n),at(t,r,i),ar(t,r,i,n),oP(null,t,r,!0,e,n);case 19:return oF(e,t,n);case 22:return oC(e,t,n)}throw Error(d(156,t.tag))};var lp="function"==typeof reportError?reportError:function(e){console.error(e)};function lm(e){this._internalRoot=e}function lg(e){this._internalRoot=e}function lv(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function ly(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function lb(){}function lw(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"==typeof i){var s=i;i=function(){var e=ld(o);s.call(e)}}lc(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"==typeof r){var a=r;r=function(){var e=ld(o);a.call(e)}}var o=lu(t,r,e,0,null,!1,!1,"",lb);return e._reactRootContainer=o,e[rB]=o.current,ry(8===e.nodeType?e.parentNode:e),sB(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var s=r;r=function(){var e=ld(l);s.call(e)}}var l=ls(e,0,!1,null,null,!1,!1,"",lb);return e._reactRootContainer=l,e[rB]=l.current,ry(8===e.nodeType?e.parentNode:e),sB(function(){lc(t,l,n,r)}),l}(n,t,e,i,r);return ld(o)}lg.prototype.render=lm.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(d(409));lc(e,t,null,null)},lg.prototype.unmount=lm.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;sB(function(){lc(null,e,null,null)}),t[rB]=null}},lg.prototype.unstable_scheduleHydration=function(e){if(e){var t=tx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tj.length&&0!==t&&t<tj[n].priority;n++);tj.splice(n,0,e),0===n&&tV(e)}},tI=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tg(t.pendingLanes);0!==n&&(tk(t,1|n),sj(t,tn()),0==(6&sl)&&(sk=tn()+500,iu()))}break;case 13:sB(function(){var t=iY(e,1);null!==t&&sM(t,e,1,sD())}),lh(e,1)}},tC=function(e){if(13===e.tag){var t=iY(e,134217728);null!==t&&sM(t,e,134217728,sD()),lh(e,134217728)}},tT=function(e){if(13===e.tag){var t=sA(e),n=iY(e,t);null!==n&&sM(n,e,t,sD()),lh(e,t)}},tx=function(){return tS},tN=function(e,t){var n=tS;try{return tS=e,t()}finally{tS=n}},eU=function(e,t,n){switch(t){case"input":if(ep(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=rY(r);if(!i)throw Error(d(90));eu(r),ep(r,i)}}}break;case"textarea":e_(e,n);break;case"select":null!=(t=n.value)&&ey(e,!!n.multiple,t,!1)}},eB=s$,eW=sB;var l_={findFiberByHostInstance:rQ,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lk={bundleType:l_.bundleType,version:l_.version,rendererPackageName:l_.rendererPackageName,rendererConfig:l_.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e5(e))?null:e.stateNode},findFiberByHostInstance:l_.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var lS=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lS.isDisabled&&lS.supportsFiber)try{tu=lS.inject(lk),tc=lS}catch(e){}}$={usingClientEntryPoint:!1,Events:[rG,rJ,rY,eH,e$,s$]},B=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!lv(t))throw Error(d(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:x,key:null==r?null:""+r,children:e,containerInfo:t,implementation:null}}(e,t,null,n)},W=function(e,t){if(!lv(e))throw Error(d(299));var n=!1,r="",i=lp;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=ls(e,1,!1,null,null,n,!1,r,i),e[rB]=t.current,ry(8===e.nodeType?e.parentNode:e),new lm(t)},K=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(d(188));throw Error(d(268,e=Object.keys(e).join(",")))}return e=null===(e=e5(t))?null:e.stateNode},q=function(e){return sB(e)},Q=function(e,t,n){if(!ly(t))throw Error(d(200));return lw(null,e,t,!0,n)},G=function(e,t,n){if(!lv(e))throw Error(d(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",o=lp;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=lu(t,null,e,1,null!=n?n:null,i,!1,a,o),e[rB]=t.current,ry(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new lg(t)},J=function(e,t,n){if(!ly(t))throw Error(d(200));return lw(null,e,t,!1,n)},Y=function(e){if(!ly(e))throw Error(d(40));return!!e._reactRootContainer&&(sB(function(){lw(null,null,e,!1,function(){e._reactRootContainer=null,e[rB]=null})}),!0)},X=s$,Z=function(e,t,n,r){if(!ly(n))throw Error(d(200));if(null==e||void 0===e._reactInternals)throw Error(d(38));return lw(e,t,n,!1,r)},ee="18.2.0-next-9e3b772b8-20220608"}),R("jM0cN",function(e,t){e.exports=P("7ugxT")}),R("7ugxT",function(e,t){function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<o(i,t))e[r]=t,e[n]=i,n=r;else break}}function i(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>o(l,n))u<i&&0>o(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else if(u<i&&0>o(c,n))e[r]=c,e[u]=n,r=u;else break}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n(e.exports,"unstable_now",function(){return s},function(e){return s=e}),n(e.exports,"unstable_IdlePriority",function(){return l},function(e){return l=e}),n(e.exports,"unstable_ImmediatePriority",function(){return u},function(e){return u=e}),n(e.exports,"unstable_LowPriority",function(){return c},function(e){return c=e}),n(e.exports,"unstable_NormalPriority",function(){return d},function(e){return d=e}),n(e.exports,"unstable_Profiling",function(){return f},function(e){return f=e}),n(e.exports,"unstable_UserBlockingPriority",function(){return h},function(e){return h=e}),n(e.exports,"unstable_cancelCallback",function(){return p},function(e){return p=e}),n(e.exports,"unstable_continueExecution",function(){return m},function(e){return m=e}),n(e.exports,"unstable_forceFrameRate",function(){return g},function(e){return g=e}),n(e.exports,"unstable_getCurrentPriorityLevel",function(){return v},function(e){return v=e}),n(e.exports,"unstable_getFirstCallbackNode",function(){return y},function(e){return y=e}),n(e.exports,"unstable_next",function(){return b},function(e){return b=e}),n(e.exports,"unstable_pauseExecution",function(){return w},function(e){return w=e}),n(e.exports,"unstable_requestPaint",function(){return _},function(e){return _=e}),n(e.exports,"unstable_runWithPriority",function(){return k},function(e){return k=e}),n(e.exports,"unstable_scheduleCallback",function(){return S},function(e){return S=e}),n(e.exports,"unstable_shouldYield",function(){return E},function(e){return E=e}),n(e.exports,"unstable_wrapCallback",function(){return I},function(e){return I=e}),"object"==typeof performance&&"function"==typeof performance.now){var s,l,u,c,d,f,h,p,m,g,v,y,b,w,_,k,S,E,I,C,T=performance;s=function(){return T.now()}}else{var x=Date,N=x.now();s=function(){return x.now()-N}}var P=[],R=[],O=1,L=null,D=3,A=!1,M=!1,j=!1,U="function"==typeof setTimeout?setTimeout:null,z="function"==typeof clearTimeout?clearTimeout:null,F="undefined"!=typeof setImmediate?setImmediate:null;function V(e){for(var t=i(R);null!==t;){if(null===t.callback)a(R);else if(t.startTime<=e)a(R),t.sortIndex=t.expirationTime,r(P,t);else break;t=i(R)}}function H(e){if(j=!1,V(e),!M){if(null!==i(P))M=!0,Z($);else{var t=i(R);null!==t&&ee(H,t.startTime-e)}}}function $(e,t){M=!1,j&&(j=!1,z(K),K=-1),A=!0;var n=D;try{for(V(t),L=i(P);null!==L&&(!(L.expirationTime>t)||e&&!G());){var r=L.callback;if("function"==typeof r){L.callback=null,D=L.priorityLevel;var o=r(L.expirationTime<=t);t=s(),"function"==typeof o?L.callback=o:L===i(P)&&a(P),V(t)}else a(P);L=i(P)}if(null!==L)var l=!0;else{var u=i(R);null!==u&&ee(H,u.startTime-t),l=!1}return l}finally{L=null,D=n,A=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var B=!1,W=null,K=-1,q=5,Q=-1;function G(){return!(s()-Q<q)}function J(){if(null!==W){var e=s();Q=e;var t=!0;try{t=W(!0,e)}finally{t?C():(B=!1,W=null)}}else B=!1}if("function"==typeof F)C=function(){F(J)};else if("undefined"!=typeof MessageChannel){var Y=new MessageChannel,X=Y.port2;Y.port1.onmessage=J,C=function(){X.postMessage(null)}}else C=function(){U(J,0)};function Z(e){W=e,B||(B=!0,C())}function ee(e,t){K=U(function(){e(s())},t)}l=5,u=1,c=4,d=3,f=null,h=2,p=function(e){e.callback=null},m=function(){M||A||(M=!0,Z($))},g=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<e?Math.floor(1e3/e):5},v=function(){return D},y=function(){return i(P)},b=function(e){switch(D){case 1:case 2:case 3:var t=3;break;default:t=D}var n=D;D=t;try{return e()}finally{D=n}},w=function(){},_=function(){},k=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=D;D=e;try{return t()}finally{D=n}},S=function(e,t,n){var a=s();switch(n="object"==typeof n&&null!==n&&"number"==typeof(n=n.delay)&&0<n?a+n:a,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:O++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>a?(e.sortIndex=n,r(R,e),null===i(P)&&e===i(R)&&(j?(z(K),K=-1):j=!0,ee(H,n-a))):(e.sortIndex=o,r(P,e),M||A||(M=!0,Z($))),e},E=G,I=function(e){var t=D;return function(){var n=D;D=t;try{return e.apply(this,arguments)}finally{D=n}}}}),R("286J8",function(e,t){n(e.exports,"useSyncExternalStore",function(){return r},function(e){return r=e});var r,i=P("6SgHj"),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useState,s=i.useEffect,l=i.useLayoutEffect,u=i.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!a(e,n)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,a=r[1];return l(function(){i.value=n,i.getSnapshot=t,c(i)&&a({inst:i})},[e,n,t]),s(function(){return c(i)&&a({inst:i}),e(function(){c(i)&&a({inst:i})})},[e]),u(n),n};r=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:d});var O={};O=P("8pxar"),P("6SgHj");var L={};!// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
function e(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(e)}}(),v=(L=P("a9mMY")).createRoot,L.hydrateRoot;/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var D=P("6SgHj");/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}/**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */(a=y||(y={})).Pop="POP",/**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */a.Push="PUSH",/**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */a.Replace="REPLACE";const M="popstate";function j(e,t){if(!1===e||null==e)throw Error(t)}function U(e,t){if(!e){// eslint-disable-next-line no-console
"undefined"!=typeof console&&console.warn(t);try{// Welcome to debugging history!
//
// This error is thrown as a convenience, so you can more easily
// find the source for a warning that appears in the console by
// enabling "pause on exceptions" in your JavaScript debugger.
throw Error(t);// eslint-disable-next-line no-empty
}catch(e){}}}/**
 * For browser-based histories, we combine the state and key into an object
 */function z(e,t){return{usr:e.state,key:e.key,idx:t}}/**
 * Creates a Location object with a unique key from the given Path
 */function F(e,t,n,r){return void 0===n&&(n=null),A({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?H(t):t,{state:n,// TODO: This could be cleaned up.  push/replace should probably just take
// full Locations now and avoid the need to run through this flow at all
// But that's a pretty big refactor to the current test suite so going to
// keep as is for the time being and just let any incoming keys take precedence
key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */function V(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */function H(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}(o=b||(b={})).data="data",o.deferred="deferred",o.redirect="redirect",o.error="error";const $=/^:\w+$/,B=e=>"*"===e;/**
 * @private
 */function W(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;// We want to leave trailing slash behavior in the user's control, so if they
// specify a basename with a trailing slash, we should support it
let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function K(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t)+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */function q(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}/**
 * @private
 */function Q(e,t,n,r){let i,a;void 0===r&&(r=!1),"string"==typeof e?i=H(e):(j(!(i=A({},e)).pathname||!i.pathname.includes("?"),K("?","pathname","search",i)),j(!i.pathname||!i.pathname.includes("#"),K("#","pathname","hash",i)),j(!i.search||!i.search.includes("#"),K("#","search","hash",i)));let o=""===e||""===i.pathname,s=o?"/":i.pathname;// Routing is relative to the current pathname if explicitly requested.
//
// If a pathname is explicitly provided in `to`, it should be relative to the
// route context. This is explained in `Note on `<Link to>` values` in our
// migration guide from v5 as a means of disambiguation between `to` values
// that begin with `/` and those that do not. However, this is problematic for
// `to` values that do not provide a pathname. `to` can simply be a search or
// hash string, in which case we should assume that the navigation is relative
// to the current location's pathname and *not* the route pathname.
if(r||null==s)a=n;else{let e=t.length-1;if(s.startsWith("..")){let t=s.split("/");// Each leading .. segment means "go up one route" instead of "go up one
// URL segment".  This is a key difference from how <a href> works and a
// major reason we call this a "to" value instead of a "href".
for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}// If there are more ".." segments than parent routes, resolve relative to
// the root / URL.
a=e>=0?t[e]:"/"}let l=/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */function(e,t){let n;void 0===t&&(t="/");let{pathname:r,search:i="",hash:a=""}="string"==typeof e?H(e):e;return{pathname:r?r.startsWith("/")?r:(n=t.replace(/\/+$/,"").split("/"),r.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"):t,search:Y(i),hash:X(a)}}(i,a),u=s&&"/"!==s&&s.endsWith("/"),c=(o||"."===s)&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}/**
 * @private
 */const G=e=>e.join("/").replace(/\/\/+/g,"/"),J=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Y=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",X=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Symbol("deferred");/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var D=P("6SgHj");function Z(){return(Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const ee=/*#__PURE__*/D.createContext(null),et=/*#__PURE__*/D.createContext(null),en=/*#__PURE__*/D.createContext(null),er=/*#__PURE__*/D.createContext(null),ei=/*#__PURE__*/D.createContext({outlet:null,matches:[],isDataRoute:!1}),ea=/*#__PURE__*/D.createContext(null);/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */function eo(){return null!=D.useContext(er)}/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */function es(){return eo()||j(!1),D.useContext(er).location}// Mute warnings for calls to useNavigate in SSR environments
function el(e){D.useContext(en).static||// See: https://github.com/facebook/react/pull/26395
// eslint-disable-next-line react-hooks/rules-of-hooks
D.useLayoutEffect(e)}/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */function eu(e,t){let{relative:n}=void 0===t?{}:t,{matches:r}=D.useContext(ei),{pathname:i}=es(),a=JSON.stringify(q(r).map(e=>e.pathnameBase));return D.useMemo(()=>Q(e,JSON.parse(a),i,"path"===n),[e,a,i,n])}const ec=/*#__PURE__*/D.createElement(function(){var e;let t,n,r;let i=(n=D.useContext(ea),ep.UseRouteError,(t=D.useContext(et))||j(!1),r=em(ep.UseRouteError),// If this was a render error, we put it in a RouteError context inside
// of RenderErrorBoundary
n||(null==(e=t.errors)?void 0:e[r])),a=null!=i&&"number"==typeof i.status&&"string"==typeof i.statusText&&"boolean"==typeof i.internal&&"data"in i?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),o=i instanceof Error?i.stack:null;return /*#__PURE__*/D.createElement(D.Fragment,null,/*#__PURE__*/D.createElement("h2",null,"Unexpected Application Error!"),/*#__PURE__*/D.createElement("h3",{style:{fontStyle:"italic"}},a),o?/*#__PURE__*/D.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},o):null,null)},null);class ed extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return(// When we get into an error state, the user will likely click "back" to the
// previous page that didn't have an error. Because this wraps the entire
// application, that will have no effect--the error page continues to display.
// This gives us a mechanism to recover from the error when the location changes.
//
// Whether we're in an error state or not, we update the location in state
// so that when we are in an error state, it gets reset when a new location
// comes in and the user recovers from the error.
t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation})}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?/*#__PURE__*/D.createElement(ei.Provider,{value:this.props.routeContext},/*#__PURE__*/D.createElement(ea.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ef(e){let{routeContext:t,match:n,children:r}=e,i=D.useContext(ee);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),/*#__PURE__*/D.createElement(ei.Provider,{value:t},r)}var eh=((s=eh||{}).UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s),ep=((l=ep||{}).UseBlocker="useBlocker",l.UseLoaderData="useLoaderData",l.UseActionData="useActionData",l.UseRouteError="useRouteError",l.UseNavigation="useNavigation",l.UseRouteLoaderData="useRouteLoaderData",l.UseMatches="useMatches",l.UseRevalidator="useRevalidator",l.UseNavigateStable="useNavigate",l.UseRouteId="useRouteId",l);// Internal version with hookName-aware debugging
function em(e){let t;let n=((t=D.useContext(ei))||j(!1),t),r=n.matches[n.matches.length-1];return r.route.id||j(!1),r.route.id}/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */function eg(e){j(!1)}/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */function ev(e){let{basename:t="/",children:n=null,location:r,navigationType:i=y.Pop,navigator:a,static:o=!1}=e;eo()&&j(!1);// Preserve trailing slashes on basename, so we can let the user control
// the enforcement of trailing slashes throughout the app
let s=t.replace(/^\/*/,"/"),l=D.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);"string"==typeof r&&(r=H(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:h="default"}=r,p=D.useMemo(()=>{let e=W(u,s);return null==e?null:{location:{pathname:e,search:c,hash:d,state:f,key:h},navigationType:i}},[s,u,c,d,f,h,i]);return null==p?null:/*#__PURE__*/D.createElement(en.Provider,{value:l},/*#__PURE__*/D.createElement(er.Provider,{children:n,value:p}))}/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */function ey(e){let{children:t,location:n}=e;return(// Internal implementation with accept optional param for RouterProvider usage
function(e,t,n){let r;eo()||j(!1);let{navigator:i}=D.useContext(en),{matches:a}=D.useContext(ei),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=es();if(t){var c;let e="string"==typeof t?H(t):t;"/"===l||(null==(c=e.pathname)?void 0:c.startsWith(l))||j(!1),r=e}else r=u;let d=r.pathname||"/",f=/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */function(e,t,n){void 0===n&&(n="/");let r=W(("string"==typeof t?H(t):t).pathname||"/",n);if(null==r)return null;let i=function e(t,n,r,i){void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i="");let a=(t,a,o)=>{var s;let l,u,c={relativePath:void 0===o?t.path||"":o,caseSensitive:!0===t.caseSensitive,childrenIndex:a,route:t};c.relativePath.startsWith("/")&&(j(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path "'+i+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),c.relativePath=c.relativePath.slice(i.length));let d=G([i,c.relativePath]),f=r.concat(c);t.children&&t.children.length>0&&(j(// @ts-expect-error
!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+d+'".'),e(t.children,n,f,d)),(null!=t.path||t.index)&&n.push({path:d,score:(s=t.index,u=(l=d.split("/")).length,l.some(B)&&(u+=-2),s&&(u+=2),l.filter(e=>!B(e)).reduce((e,t)=>e+($.test(t)?3:""===t?1:10),u)),routesMeta:f})};return t.forEach((e,t)=>{var n;// coarse-grain check for optional params
if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of /**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...i]=n,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(0===i.length)// `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
return a?[o,""]:[o];let s=e(i.join("/")),l=[];// for absolute paths, ensure `/` instead of empty segment
return(// All child paths with the prefix.  Do this for all children before the
// optional version for all children, so we get consistent ordering where the
// parent optional aspect is preferred as required.  Otherwise, we can get
// child sections interspersed where deeper optional segments are higher than
// parent optional segments, where for example, /:two would explode _earlier_
// then /:one.  By always including the parent as required _for all children_
// first, we avoid this issue
l.push(...s.map(e=>""===e?o:[o,e].join("/"))),a&&l.push(...s),l.map(e=>t.startsWith("/")&&""===e?"/":e))}(e.path))a(e,t,n);else a(e,t)}),n}(e);!function(e){e.sort((e,t)=>{var n,r;return e.score!==t.score?t.score-e.score// Higher score first
:(n=e.routesMeta.map(e=>e.childrenIndex),r=t.routesMeta.map(e=>e.childrenIndex),n.length===r.length&&n.slice(0,-1).every((e,t)=>e===r[t])?// first. This allows people to have fine-grained control over the matching
// behavior by simply putting routes with identical paths in the order they
// want them tried.
n[n.length-1]-r[r.length-1]:// so they sort equally.
0)})}(i);let a=null;for(let e=0;null==a&&e<i.length;++e)a=function(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let e=0;e<n.length;++e){let o=n[e],s=e===n.length-1,l="/"===i?t:t.slice(i.length)||"/",u=/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */function(e,t){var n,r,i;let a,o;"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[s,l]=(n=e.path,r=e.caseSensitive,i=e.end,void 0===r&&(r=!1),void 0===i&&(i=!0),U("*"===n||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were "'+n.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+n.replace(/\*$/,"/*")+'".'),a=[],o="^"+n.replace(/\/*\*?$/,"")// Ignore trailing / and /*, we'll handle it below
.replace(/^\/*/,"/")// Make sure it has a leading /
.replace(/[\\.*+^${}|()[\]]/g,"\\$&")// Escape special regex chars
.replace(/\/:(\w+)(\?)?/g,(e,t,n)=>(a.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")),n.endsWith("*")?(a.push({paramName:"*"}),o+="*"===n||"/*"===n?"(.*)$"// Already matched the initial /, just match the rest
:"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":""!==n&&"/"!==n&&// then we have _some_ form of path in our regex, so we should expect to
// match only if we find the end of this path segment.  Look for an optional
// non-captured trailing slash (to match a portion of the URL) or the end
// of the path (if we've matched to the end).  We used to do this with a
// word boundary but that gives false positives on routes like
// /user-preferences since `-` counts as a word boundary.
(o+="(?:(?=\\/|$))"),[new RegExp(o,r?void 0:"i"),a]),u=t.match(s);if(!u)return null;let c=u[0],d=c.replace(/(.)\/+$/,"$1"),f=u.slice(1);return{params:l.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;// We need to compute the pathnameBase here using the raw splat value
// instead of using params["*"] later because it will be decoded then
if("*"===r){let e=f[n]||"";d=c.slice(0,c.length-e.length).replace(/(.)\/+$/,"$1")}let a=f[n];return i&&!a?e[r]=void 0:e[r]=function(e,t){try{return decodeURIComponent(e)}catch(n){return U(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(a||"",r),e},{}),pathname:c,pathnameBase:d,pattern:e}}({path:o.relativePath,caseSensitive:o.caseSensitive,end:s},l);if(!u)return null;Object.assign(r,u.params);let c=o.route;a.push({// TODO: Can this as be avoided?
params:r,pathname:G([i,u.pathname]),pathnameBase:J(G([i,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(i=G([i,u.pathnameBase]))}return a}(i[e],// or from router.navigate, but we want to match against the unencoded
// paths in the route definitions.  Memory router locations won't be
// encoded here but there also shouldn't be anything to decode so this
// should be a safe operation.  This avoids needing matchRoutes to be
// history-aware.
function(e){try{return decodeURI(e)}catch(t){return U(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}(r));return a}(e,{pathname:"/"===l?d:d.slice(l.length)||"/"}),h=function(e,t,n){var r,i;if(void 0===t&&(t=[]),void 0===n&&(n=null),null==e){if(null==(i=n)||!i.errors)return null;// boundary.  Use the pre-matched (or shimmed) matches
e=n.matches}let a=e,o=null==(r=n)?void 0:r.errors;if(null!=o){let e=a.findIndex(e=>e.route.id&&(null==o?void 0:o[e.route.id]));e>=0||j(!1),a=a.slice(0,Math.min(a.length,e+1))}return a.reduceRight((e,r,i)=>{let s=r.route.id?null==o?void 0:o[r.route.id]:null,l=null;n&&(l=r.route.errorElement||ec);let u=t.concat(a.slice(0,i+1)),c=()=>{let t;return t=s?l:r.route.Component?/*#__PURE__*/D.createElement(r.route.Component,null):r.route.element?r.route.element:e,/*#__PURE__*/D.createElement(ef,{match:r,routeContext:{outlet:e,matches:u,isDataRoute:null!=n},children:t})};// Only wrap in an error boundary within data router usages when we have an
// ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
// an ancestor ErrorBoundary/errorElement
return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?/*#__PURE__*/D.createElement(ed,{location:n.location,revalidation:n.revalidation,component:l,error:s,children:c(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):c()},null)}(f&&f.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:G([l,// Re-encode pathnames that were decoded inside matchRoutes
    i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:G([l,// Re-encode pathnames that were decoded inside matchRoutes
    i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,void 0);return(// When a user passes in a `locationArg`, the associated routes need to
// be wrapped in a new `LocationContext.Provider` in order for `useLocation`
// to use the scoped location instead of the global location.
t&&h?/*#__PURE__*/D.createElement(er.Provider,{value:{location:Z({pathname:"/",search:"",hash:"",state:null,key:"default"},r),navigationType:y.Pop}},h):h)}(///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */function e(t,n){void 0===n&&(n=[]);let r=[];return D.Children.forEach(t,(t,i)=>{if(!/*#__PURE__*/D.isValidElement(t))// conditionals in their route config.
return;let a=[...n,i];if(t.type===D.Fragment){// Transparently support React.Fragment and its children.
r.push.apply(r,e(t.props.children,a));return}t.type!==eg&&j(!1),t.props.index&&t.props.children&&j(!1);let o={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(o.children=e(t.props.children,a)),r.push(o)}),r}(t),n))}D.startTransition;var eb=((u=eb||{})[u.pending=0]="pending",u[u.success=1]="success",u[u.error=2]="error",u);function ew(){return(ew=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}new Promise(()=>{});const e_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ek=D.startTransition;/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */function eS(e){let{basename:t,children:n,future:r,window:i}=e,a=D.useRef();null==a.current&&(a.current=function(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=y.Pop,l=null,u=c();function c(){return(o.state||{idx:null}).idx}function d(){s=y.Pop;let e=c(),t=null==e?null:e-u;u=e,l&&l({action:s,location:h.location,delta:t})}function f(e){// window.location.origin is "null" (the literal string value) in Firefox
// under certain conditions, notably when serving from a local HTML file
// See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:V(e);return j(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==u&&(u=0,o.replaceState(A({},o.state,{idx:u}),""));let h={get action(){return s},get location(){return e(i,o)},listen(e){if(l)throw Error("A history only accepts one active listener");return i.addEventListener(M,d),l=e,()=>{i.removeEventListener(M,d),l=null}},createHref:e=>t(i,e),createURL:f,encodeLocation(e){// Encode a Location the same way window.location would
let t=f(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=y.Push;let r=F(h.location,e,t);n&&n(r,e);let d=z(r,u=c()+1),f=h.createHref(r);// try...catch because iOS limits us to 100 pushState calls :/
try{o.pushState(d,"",f)}catch(e){// If the exception is because `state` can't be serialized, let that throw
// outwards just like a replace call would so the dev knows the cause
// https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
// https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;// They are going to lose state here, but there is no real
// way to warn them about it since the page will refresh...
i.location.assign(f)}a&&l&&l({action:s,location:h.location,delta:1})},replace:function(e,t){s=y.Replace;let r=F(h.location,e,t);n&&n(r,e);let i=z(r,u=c()),d=h.createHref(r);o.replaceState(i,"",d),a&&l&&l({action:s,location:h.location,delta:0})},go:e=>o.go(e)};return h}(function(e,t){let{pathname:n="/",search:r="",hash:i=""}=H(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),F("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"==typeof t?t:V(t))},function(e,t){U("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")},{window:i,v5Compat:!0}));let o=a.current,[s,l]=D.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=D.useCallback(e=>{u&&ek?ek(()=>l(e)):l(e)},[l,u]);return D.useLayoutEffect(()=>o.listen(c),[o,c]),/*#__PURE__*/D.createElement(ev,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const eE="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,eI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eC=/*#__PURE__*/D.forwardRef(function(e,t){let n,{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,e_),{basename:h}=D.useContext(en),p=!1;if("string"==typeof u&&eI.test(u)&&(// Render the absolute href server- and client-side
n=u,eE))try{let e=new URL(window.location.href),t=new URL(u.startsWith("//")?e.protocol+u:u),n=W(t.pathname,h);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:p=!0}catch(e){}// Rendered into <a href> for relative URLs
let m=/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */function(e,t){let{relative:n}=void 0===t?{}:t;eo()||j(!1);let{basename:r,navigator:i}=D.useContext(en),{hash:a,pathname:o,search:s}=eu(e,{relative:n}),l=o;return"/"!==r&&(l="/"===o?r:G([r,o])),i.createHref({pathname:l,search:s,hash:a})}(u,{relative:i}),g=// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */function(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s}=void 0===t?{}:t,l=/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */function(){let{isDataRoute:e}=D.useContext(ei);// Conditional usage is OK here because the usage of a data router is static
// eslint-disable-next-line react-hooks/rules-of-hooks
return e?/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */function(){let e;let{router:t}=(eh.UseNavigateStable,(e=D.useContext(ee))||j(!1),e),n=em(ep.UseNavigateStable),r=D.useRef(!1);return el(()=>{r.current=!0}),D.useCallback(function(e,i){void 0===i&&(i={}),r.current&&("number"==typeof e?t.navigate(e):t.navigate(e,Z({fromRouteId:n},i)))},[t,n])}():function(){eo()||j(!1);let e=D.useContext(ee),{basename:t,navigator:n}=D.useContext(en),{matches:r}=D.useContext(ei),{pathname:i}=es(),a=JSON.stringify(q(r).map(e=>e.pathnameBase)),o=D.useRef(!1);return el(()=>{o.current=!0}),D.useCallback(function(r,s){// Short circuit here since if this happens on first render the navigate
// is useless because we haven't wired up our history listener yet
if(void 0===s&&(s={}),!o.current)return;if("number"==typeof r){n.go(r);return}let l=Q(r,JSON.parse(a),i,"path"===s.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:G([t,l.pathname])),(s.replace?n.replace:n.push)(l,s.state,s)},[t,n,a,i,e])}()}(),u=es(),c=eu(e,{relative:o});return D.useCallback(t=>{0!==t.button||// Ignore everything but left clicks
n&&"_self"!==n||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),l(e,{replace:void 0!==r?r:V(u)===V(c),state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s}))},[u,l,c,r,i,n,e,a,o,s])}(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});return /*#__PURE__*/D.createElement("a",ew({},f,{href:n||m,onClick:p||a?r:function(e){r&&r(e),e.defaultPrevented||g(e)},ref:t,target:l}))});(c=w||(w={})).UseScrollRestoration="useScrollRestoration",c.UseSubmit="useSubmit",c.UseSubmitFetcher="useSubmitFetcher",c.UseFetcher="useFetcher",c.useViewTransitionState="useViewTransitionState",(d=_||(_={})).UseFetcher="useFetcher",d.UseFetchers="useFetchers",d.UseScrollRestoration="useScrollRestoration";var eT={};eT=JSON.parse('{"name":"hnews","version":"4.5.0","description":"HNews","private":true,"source":"src/index.html","browserslist":"defaults","scripts":{"update":"ncu -u","serve":"parcel -p 8000 --lazy","watch":"parcel watch","build":"rm -rf dist && rm -rf docs && parcel build --no-source-maps --dist-dir docs --public-url=/hnews"},"author":"Luca Bacchi <bacchilu@gmail.com> (http://www.lucabacchi.it)","license":"ISC","prettier":{"arrowParens":"always","bracketSpacing":false,"embeddedLanguageFormatting":"auto","htmlWhitespaceSensitivity":"css","insertPragma":false,"jsxBracketSameLine":false,"jsxSingleQuote":false,"printWidth":120,"proseWrap":"preserve","quoteProps":"as-needed","requirePragma":false,"semi":true,"singleQuote":true,"tabWidth":4,"trailingComma":"es5","useTabs":false,"vueIndentScriptAndStyle":false},"devDependencies":{"@types/human-date":"^1.4.4","@types/react":"^18.2.34","@types/react-dom":"^18.2.14","npm-check-updates":"^16.14.6","parcel":"^2.10.2","process":"^0.11.10"},"dependencies":{"firebase":"^10.5.2","human-date":"^1.4.0","react":"^18.2.0","react-dom":"^18.2.0","react-intersection-observer-hook":"^2.1.1","react-router-dom":"^6.18.0","swr":"^2.2.4"}}'),P("6SgHj");var ex={};!function(){var e={months:["January","February","March","April","May","June","July","August","September","October","November","December"],toUTC:function(e){var t=e?new Date(e):new Date;return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds())},monthName:function(t){var n;return n="number"==typeof t?t:new Date(t).getMonth()+1,e.months[n-1]},relativeTime:function(e,t){var n,r,i,a,o,s,l=[];if("number"==typeof e?n=e:(a=new Date(e).getTime(),n=-((new Date().getTime()-a)/1e3*1)),t||(t={}),t.futureSuffix||(t.futureSuffix="from now"),t.pastSuffix||(t.pastSuffix="ago"),t.presentText||(t.presentText="now"),t.returnObject||(t.returnObject=!1),o=n<0,r={seconds:Math.floor((n=Math.abs(n))%31536e3%86400%3600%60),minutes:Math.floor(n%31536e3%86400%3600/60),hours:Math.floor(n%31536e3%86400/3600),days:Math.floor(n%31536e3/86400),years:Math.floor(n/31536e3),past:o},t.returnObject)return r;if(0===n)return t.presentText;function u(e,n){s&&(s=t.allUnits,l.push(e+" "+n+(e>1?"s":"")))}return i=r.past?t.pastSuffix:t.futureSuffix,s=!0,r.years&&u(r.years,"year"),r.days&&u(r.days,"day"),r.hours&&u(r.hours,"hour"),r.minutes&&u(r.minutes,"minute"),r.seconds&&u(r.seconds,"second"),l.join(", ")+" "+i},prettyPrint:function(e,t){var n,r,i,a,o,s,l,u,c;return e?"number"==typeof e&&(e=new Date().setSeconds(e)):e=new Date,t||(t={}),t.showTime||(t.showTime=!1),a=(i=(n=new Date(e)).getDate())>3&&i<21?i+"th":i%10==1?i+"st":i%10==2?i+"nd":i%10==3?i+"rd":i+"th",o=n.getFullYear(),r=this.monthName(n.getMonth()+1)+" "+a+", "+o,l=n.getHours(),u=n.getMinutes(),c=l>=12?"pm":"am",s=(l=l%12?l%12:12)+":"+(u=u<10?"0"+u:u)+" "+c,t.showTime?r+" at "+s:r}};/* istanbul ignore next: code loaders */if(ex)ex=e;else{if("function"==typeof define&&define.amd)return define([],function(){return e});this.humandate=e}}();var D=P("6SgHj"),eN={},eP=eN={};function eR(){throw Error("setTimeout has not been defined")}function eO(){throw Error("clearTimeout has not been defined")}function eL(e){if(k===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((k===eR||!k)&&setTimeout)return k=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return k(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return k.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return k.call(this,e,0)}}}!function(){try{k="function"==typeof setTimeout?setTimeout:eR}catch(e){k=eR}try{S="function"==typeof clearTimeout?clearTimeout:eO}catch(e){S=eO}}();var eD=[],eA=!1,eM=-1;function ej(){eA&&E&&(eA=!1,E.length?eD=E.concat(eD):eM=-1,eD.length&&eU())}function eU(){if(!eA){var e=eL(ej);eA=!0;for(var t=eD.length;t;){for(E=eD,eD=[];++eM<t;)E&&E[eM].run();eM=-1,t=eD.length}E=null,eA=!1,function(e){if(S===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((S===eO||!S)&&clearTimeout)return S=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
S(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return S.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return S.call(this,e)}}}(e)}}// v8 likes predictible objects
function ez(e,t){this.fun=e,this.array=t}function eF(){}eP.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];eD.push(new ez(e,t)),1!==eD.length||eA||eL(eU)},ez.prototype.run=function(){this.fun.apply(null,this.array)},eP.title="browser",eP.browser=!0,eP.env={},eP.argv=[],eP.version="",eP.versions={},eP.on=eF,eP.addListener=eF,eP.once=eF,eP.off=eF,eP.removeListener=eF,eP.removeAllListeners=eF,eP.emit=eF,eP.prependListener=eF,eP.prependOnceListener=eF,eP.listeners=function(e){return[]},eP.binding=function(e){throw Error("process.binding is not supported")},eP.cwd=function(){return"/"},eP.chdir=function(e){throw Error("process.chdir is not supported")},eP.umask=function(){return 0};/**
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
 */const eV=function(e){// TODO(user): Use native implementations if/when available
let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(// Surrogate Pair
i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},eH=function(e){// TODO(user): Use native implementations if/when available
let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){// Surrogate Pair
let a=e[n++],o=e[n++],s=e[n++],l=((7&i)<<18|(63&a)<<12|(63&o)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{let a=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")},e$={/**
     * Maps bytes to characters.
     */byteToCharMap_:null,/**
     * Maps characters to bytes.
     */charToByteMap_:null,/**
     * Maps bytes to websafe characters.
     * @private
     */byteToCharMapWebSafe_:null,/**
     * Maps websafe characters to bytes.
     * @private
     */charToByteMapWebSafe_:null,/**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",/**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},/**
     * Our websafe alphabet.
     */get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},/**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */HAS_NATIVE_SUPPORT:"function"==typeof atob,/**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,u=i>>2,c=(3&i)<<4|o>>4,d=(15&o)<<2|l>>6,f=63&l;s||(f=64,a||(d=64)),r.push(n[u],n[c],n[d],n[f])}return r.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(eV(e),t))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?atob(e):eH(this.decodeStringToByteArray(e,t)))},/**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],a=t<e.length,o=a?n[e.charAt(t)]:0;++t;let s=t<e.length,l=s?n[e.charAt(t)]:64;++t;let u=t<e.length,c=u?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==l||null==c)throw new eB;let d=i<<2|o>>4;if(r.push(d),64!==l){let e=o<<4&240|l>>2;if(r.push(e),64!==c){let e=l<<6&192|c;r.push(e)}}}return r},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * An error encountered while decoding base64 string.
 */class eB extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */const eW=function(e){let t=eV(e);return e$.encodeByteArray(t,!0)},eK=function(e){// Use base64url encoding and remove padding in the end (dot characters).
return eW(e).replace(/\./g,"")},eq=function(e){try{return e$.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},eQ=()=>/**
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
 *//**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==T)return T;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,eG=()=>{if(void 0===eN||void 0===eN.env)return;let e=void 0;if(e)return JSON.parse(e)},eJ=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let t=e&&eq(e[1]);return t&&JSON.parse(t)},eY=()=>{try{return eQ()||eG()||eJ()}catch(e){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},eX=e=>{var t,n;return null===(n=null===(t=eY())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},eZ=()=>{var e;return null===(e=eY())||void 0===e?void 0:e.config},e0=e=>{var t;return null===(t=eY())||void 0===t?void 0:t[`_${e}`]};/**
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
 */class e1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}/**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(// Attaching noop handler just in case developer wasn't expecting
// promises
this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
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
 *//**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */function e2(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class e3 extends Error{constructor(/** The error code for this error. */e,t,/** Custom data for this error. */n){super(t),this.code=e,this.customData=n,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,e3.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,e4.prototype.create)}}class e4{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?i.replace(e6,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${a} (${r}).`,s=new e3(r,o,n);return s}}const e6=/\{\$([^}]+)}/g;/**
 * Deep equal two objects. Support Arrays and Objects.
 */function e8(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],a=t[i];if(e5(n)&&e5(a)){if(!e8(n,a))return!1}else if(n!==a)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function e5(e){return null!==e&&"object"==typeof e}/**
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
 *//**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */function e9(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */function e7(e){let t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */function te(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */class tt{/**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,// Micro-task scheduling by calling task.then().
this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,// Call the executor asynchronously so subscribers that are called
// synchronously after the creation of the subscribe function
// can still receive the very first value generated in the executor.
this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}/**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!/**
 * Return true if the object passed in implements any of the named methods.
 */function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=tn),void 0===r.error&&(r.error=tn),void 0===r.complete&&(r.complete=tn);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){// nothing
}}),this.observers.push(r),i}// Unsubscribe is synchronous - we guarantee that no events are sent to
// any unsubscribed Observer.
unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)// Since sendOne calls asynchronously - there is no chance that
// this.observers will become undefined.
for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}// Call the Observer via one of it's callback function. We are careful to
// confirm that the observe has not been unsubscribed since this asynchronous
// function had been queued.
sendOne(e,t){// Execute the callback asynchronously
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){// Ignore exceptions raised in Observers or missing methods of an
// Observer.
// Log error to console. b/31404806
"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),// Proxy is no longer needed - garbage collect references
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tn(){// do nothing
}/**
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
 */function tr(e){return e&&e._delegate?e._delegate:e}/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class ti{/**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,/**
         * Properties to be added to the service namespace
         */this.serviceProps={},this.instantiationMode="LAZY"/* InstantiationMode.LAZY */,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ta="[DEFAULT]";/**
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
 *//**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */class to{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(e){// if multipleInstances is not supported, use the default name
let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new e1;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;// if multipleInstances is not supported, use the default name
let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=e,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:ta})}catch(e){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(e=ta){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=ta){return this.instances.has(e)}getOptions(e=ta){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});// resolve any pending promise waiting for the service instance
for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);n===i&&t.resolve(r)}return r}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===ta?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){// ignore errors in the onInstanceCreatedCallback
}return n||null}normalizeInstanceIdentifier(e=ta){return this.component?this.component.multipleInstances?e:ta:e// assume multiple instances are supported before the component is provided.
}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"/* InstantiationMode.EXPLICIT */!==this.component.instantiationMode}}/**
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
 *//**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */class ts{constructor(e){this.name=e,this.providers=new Map}/**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}/**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */getProvider(e){if(this.providers.has(e))return this.providers.get(e);// create a Provider for a service that hasn't registered with Firebase
let t=new to(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 *//**
 * A container for all of the Logger instances
 */const tl=[];(f=I||(I={}))[f.DEBUG=0]="DEBUG",f[f.VERBOSE=1]="VERBOSE",f[f.INFO=2]="INFO",f[f.WARN=3]="WARN",f[f.ERROR=4]="ERROR",f[f.SILENT=5]="SILENT";const tu={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},tc=I.INFO,td={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},tf=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=td[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class th{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(e){this.name=e,/**
         * The log level of the given Logger instance.
         */this._logLevel=tc,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=tf,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */tl.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in I))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}// Workaround for setter/getter having to be the same type.
setLogLevel(e){this._logLevel="string"==typeof e?tu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}/**
     * The functions below are all based on the `console` interface
     */debug(...e){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...e),this._logHandler(this,I.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...e),this._logHandler(this,I.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,I.INFO,...e),this._logHandler(this,I.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,I.WARN,...e),this._logHandler(this,I.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...e),this._logHandler(this,I.ERROR,...e)}}const tp=(e,t)=>t.some(t=>e instanceof t),tm=new WeakMap,tg=new WeakMap,tv=new WeakMap,ty=new WeakMap,tb=new WeakMap;let tw={get(e,t,n){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return tg.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||tv.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}// Else transform whatever we get back.
return t_(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function t_(n){var r;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(t_(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{// Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
// (see wrapFunction).
t instanceof IDBCursor&&tm.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
tb.set(t,e),t}(n);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(ty.has(n))return ty.get(n);let i="function"==typeof(r=n)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
r!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(r)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
r.apply(tk(this),e),t_(tm.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return t_(r.apply(tk(this),e))}:function(e,...t){let n=r.call(tk(this),e,...t);return tv.set(n,e.sort?e.sort():[e]),t_(n)}:(r instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(tg.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});// Cache it for later retrieval.
tg.set(e,t)}(r),tp(r,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(r,tw):r;return i!==n&&(ty.set(n,i),tb.set(i,n)),i}const tk=e=>tb.get(e),tS=["get","getKey","getAll","getAllKeys","count"],tE=["put","add","delete","clear"],tI=new Map;function tC(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(tI.get(t))return tI.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=tE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tS.includes(n)))return;let a=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let a=this.transaction(e,i?"readwrite":"readonly"),o=a.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return tI.set(t,a),a}tw={...i=tw,get:(e,t,n)=>tC(e,t)||i.get(e,t,n),has:(e,t)=>!!tC(e,t)||i.has(e,t)};/**
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
 */class tT{constructor(e){this.container=e}// In initial implementation, this will be called by installations on
// auth token refresh, and installations will send this string.
getPlatformInfoString(){let e=this.container.getProviders();// Loop through providers and get library/version pairs from any that are
// version components.
return e.map(e=>{if(!/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"/* ComponentType.VERSION */}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const tx="@firebase/app",tN="0.9.22",tP=new th("@firebase/app"),tR="[DEFAULT]",tO={[tx]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},tL=new Map,tD=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function tA(e){let t=e.name;if(tD.has(t))return tP.debug(`There were multiple attempts to register component ${t}.`),!1;// add the component to existing app instances
for(let n of(tD.set(t,e),tL.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(e,t){try{e.container.addComponent(t)}catch(n){tP.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */function tM(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const tj=new e4("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class tU{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ti("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw tj.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}/**
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
 *//**
 * The current SDK version.
 *
 * @public
 */const tz="10.5.2";function tF(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let r=Object.assign({name:tR,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw tj.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(i)});if(n||(n=eZ()),!n)throw tj.create("no-options"/* AppError.NO_OPTIONS */);let a=tL.get(i);if(a){// return the existing app if options and config deep equal the ones in the existing app.
if(e8(n,a.options)&&e8(r,a.config))return a;throw tj.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:i})}let o=new ts(i);for(let e of tD.values())o.addComponent(e);let s=new tU(n,r,o);return tL.set(i,s),s}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function tV(e,t,n){var r;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let i=null!==(r=tO[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){let e=[`Unable to register library "${i}" with version "${t}":`];a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tP.warn(e.join(" "));return}tA(new ti(`${i}-version`,()=>({library:i,version:t}),"VERSION"/* ComponentType.VERSION */))}const tH="firebase-heartbeat-store";let t$=null;function tB(){return t$||(t$=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,1),s=t_(o);return r&&o.addEventListener("upgradeneeded",e=>{r(t_(o.result),e.oldVersion,e.newVersion,t_(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{// We don't use 'break' in this switch statement, the fall-through
// behavior is what we want, because if there are multiple versions between
// the old version and the current version, we want ALL the migrations
// that correspond to those versions to run, not only the last one.
// eslint-disable-next-line default-case
0===t&&e.createObjectStore(tH)}}).catch(e=>{throw tj.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:e.message})})),t$}async function tW(e){try{let t=await tB(),n=await t.transaction(tH).objectStore(tH).get(tq(e));return n}catch(e){if(e instanceof e3)tP.warn(e.message);else{let t=tj.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==e?void 0:e.message});tP.warn(t.message)}}}async function tK(e,t){try{let n=await tB(),r=n.transaction(tH,"readwrite"),i=r.objectStore(tH);await i.put(t,tq(e)),await r.done}catch(e){if(e instanceof e3)tP.warn(e.message);else{let t=tj.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==e?void 0:e.message});tP.warn(t.message)}}}function tq(e){return`${e.name}!${e.options.appId}`}class tQ{constructor(e){this.container=e,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tJ(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=tG();return(// Do not store a heartbeat if one is already stored for this day
// or if a header has already been sent today.
(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=tG(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let n=[],r=e.slice();for(let i of e){// Look for an existing entry with the same user agent.
let e=n.find(e=>e.agent===i.agent);if(e)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(e.dates.push(i.date),tY(n)>t){e.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
n.push({agent:i.agent,dates:[i.date]}),tY(n)>t){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
n.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=eK(JSON.stringify({version:2,heartbeats:t}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=n,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],// Do not wait for this, to reduce latency.
this._storage.overwrite(this._heartbeatsCache)),r)}}function tG(){let e=new Date;// Returns date format 'YYYY-MM-DD'
return e.toISOString().substring(0,10)}class tJ{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await tW(this.app);return e||{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return tK(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}// add heartbeats
async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return tK(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function tY(e){// base64 has a restricted set of characters, all of which should be 1 byte.
return eK(JSON.stringify({version:2,heartbeats:e})).length}function tX(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function tZ(){// We will include this one message in the prod error map since by the very
// nature of this error, developers will never be able to see the message
// using the debugErrorMap (which is installed during auth initialization).
return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}tA(new ti("platform-logger",e=>new tT(e),"PRIVATE"/* ComponentType.PRIVATE */)),tA(new ti("heartbeat",e=>new tQ(e),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
tV(tx,tN,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
tV(tx,tN,"esm2017"),// Register platform SDK identifier (no version).
tV("fire-js",""),tV("firebase","10.5.2","app"),"function"==typeof SuppressedError&&SuppressedError;const t0=new e4("auth","Firebase",tZ()),t1=new th("@firebase/auth");function t2(e,...t){t1.logLevel<=I.ERROR&&t1.error(`Auth (${tz}): ${e}`,...t)}/**
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
 */function t3(e,...t){throw t8(e,...t)}function t4(e,...t){return t8(e,...t)}function t6(e,t,n){let r=Object.assign(Object.assign({},tZ()),{[t]:n}),i=new e4("auth","Firebase",r);return i.create(t,{appName:e.name})}function t8(e,...t){if("string"!=typeof e){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return t0.create(e,...t)}function t5(e,t,...n){if(!e)throw t8(t,...n)}/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */function t9(e){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t="INTERNAL ASSERTION FAILED: "+e;// NOTE: We don't use FirebaseError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw t2(t),Error(t)}/**
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
 */function t7(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ne(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
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
 *//**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */class nt{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||t9("Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&// @ts-ignore Setting up an broadly applicable index signature for Window
// just to deal with this case would probably be a bad idea.
!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(e2())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&// Apply only for traditional web apps and Chrome extensions.
// This is especially true for Cordova apps which have unreliable
// navigator.onLine behavior unless cordova-plugin-network-information is
// installed which overwrites the native navigator.onLine value and
// defines navigator.connection.
("http:"===ne()||"https:"===ne()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3/* DelayMin.OFFLINE */,this.shortDelay)}}/**
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
 */function nn(e,t){e.emulator||t9("Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class nr{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void t9("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void t9("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void t9("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 *//**
 * Map from errors returned by the server to errors to developer visible errors
 */const ni={CREDENTIAL_MISMATCH:"custom-token-mismatch"/* AuthErrorCode.CREDENTIAL_MISMATCH */,MISSING_CUSTOM_TOKEN:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_IDENTIFIER:"invalid-email"/* AuthErrorCode.INVALID_EMAIL */,MISSING_CONTINUE_URI:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_PASSWORD:"wrong-password"/* AuthErrorCode.INVALID_PASSWORD */,MISSING_PASSWORD:"missing-password"/* AuthErrorCode.MISSING_PASSWORD */,EMAIL_EXISTS:"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,PASSWORD_LOGIN_DISABLED:"operation-not-allowed"/* AuthErrorCode.OPERATION_NOT_ALLOWED */,INVALID_IDP_RESPONSE:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,INVALID_PENDING_TOKEN:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,MISSING_REQ_TYPE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,EMAIL_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */,RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,EXPIRED_OOB_CODE:"expired-action-code"/* AuthErrorCode.EXPIRED_OOB_CODE */,INVALID_OOB_CODE:"invalid-action-code"/* AuthErrorCode.INVALID_OOB_CODE */,MISSING_OOB_CODE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login"/* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */,INVALID_ID_TOKEN:"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */,TOKEN_EXPIRED:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,USER_NOT_FOUND:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements"/* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */,INVALID_CODE:"invalid-verification-code"/* AuthErrorCode.INVALID_CODE */,INVALID_SESSION_INFO:"invalid-verification-id"/* AuthErrorCode.INVALID_SESSION_INFO */,INVALID_TEMPORARY_PROOF:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,MISSING_SESSION_INFO:"missing-verification-id"/* AuthErrorCode.MISSING_SESSION_INFO */,SESSION_EXPIRED:"code-expired"/* AuthErrorCode.CODE_EXPIRED */,MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name"/* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */,UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri"/* AuthErrorCode.UNAUTHORIZED_DOMAIN */,INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id"/* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */,ADMIN_ONLY_OPERATION:"admin-restricted-operation"/* AuthErrorCode.ADMIN_ONLY_OPERATION */,INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session"/* AuthErrorCode.INVALID_MFA_SESSION */,MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found"/* AuthErrorCode.MFA_INFO_NOT_FOUND */,MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */,MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session"/* AuthErrorCode.MISSING_MFA_SESSION */,SECOND_FACTOR_EXISTS:"second-factor-already-in-use"/* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */,SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"/* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */,BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled"/* AuthErrorCode.RECAPTCHA_NOT_ENABLED */,MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token"/* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token"/* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action"/* AuthErrorCode.INVALID_RECAPTCHA_ACTION */,MISSING_CLIENT_TYPE:"missing-client-type"/* AuthErrorCode.MISSING_CLIENT_TYPE */,MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version"/* AuthErrorCode.MISSING_RECAPTCHA_VERSION */,INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version"/* AuthErrorCode.INVALID_RECAPTCHA_VERSION */,INVALID_REQ_TYPE:"invalid-req-type"/* AuthErrorCode.INVALID_REQ_TYPE */},na=new nt(3e4,6e4);function no(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ns(e,t,n,r,i={}){return nl(e,i,async()=>{let i={},a={};r&&("GET"/* HttpMethod.GET */===t?a=r:i={body:JSON.stringify(r)});let o=e9(Object.assign({key:e.config.apiKey},a)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/json",e.languageCode&&(s["X-Firebase-Locale"/* HttpHeader.X_FIREBASE_LOCALE */]=e.languageCode),nr.fetch()(nc(e,e.config.apiHost,n,o),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},i))})}async function nl(e,t,n){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},ni),t);try{let t=new nd(e),i=await Promise.race([n(),t.promise]);// If we've reached this point, the fetch succeeded and the networkTimeout
// didn't throw; clear the network timeout delay so that Node won't hang
t.clearNetworkTimeout();let a=await i.json();if("needConfirmation"in a)throw nf(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,a);if(i.ok&&!("errorMessage"in a))return a;{let t=i.ok?a.errorMessage:a.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"/* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */===n)throw nf(e,"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,a);if("EMAIL_EXISTS"/* ServerError.EMAIL_EXISTS */===n)throw nf(e,"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,a);if("USER_DISABLED"/* ServerError.USER_DISABLED */===n)throw nf(e,"user-disabled"/* AuthErrorCode.USER_DISABLED */,a);let s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw t6(e,s,o);t3(e,s)}}catch(t){if(t instanceof e3)throw t;// Changing this to a different error code will log user out when there is a network error
// because we treat any error other than NETWORK_REQUEST_FAILED as token is invalid.
// https://github.com/firebase/firebase-js-sdk/blob/4fbc73610d70be4e0852e7de63a39cb7897e8546/packages/auth/src/core/auth/auth_impl.ts#L309-L316
t3(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */,{message:String(t)})}}async function nu(e,t,n,r,i={}){let a=await ns(e,t,n,r,i);return"mfaPendingCredential"in a&&t3(e,"multi-factor-auth-required"/* AuthErrorCode.MFA_REQUIRED */,{_serverResponse:a}),a}function nc(e,t,n,r){let i=`${t}${n}?${r}`;return e.config.emulator?nn(e.config,i):`${e.config.apiScheme}://${i}`}class nd{constructor(e){this.auth=e,// Node timers and browser timers are fundamentally incompatible, but we
// don't care about the value here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(t4(this.auth,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */)),na.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nf(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=t4(e,t,r);return(// We know customData is defined on error because errorParams is defined
i.customData._tokenResponse=n,i)}function nh(e){return void 0!==e&&void 0!==e.enterprise}class np{constructor(e){if(/**
         * The reCAPTCHA site key.
         */this.siteKey="",/**
         * The list of providers and their enablement status for reCAPTCHA Enterprise.
         */this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");// Example response.recaptchaKey: "projects/proj123/keys/sitekey123"
this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}/**
     * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
     *
     * @param providerStr - The provider whose enforcement state is to be returned.
     * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
     */getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE"/* EnforcementState.ENFORCE */;case"AUDIT":return"AUDIT"/* EnforcementState.AUDIT */;case"OFF":return"OFF"/* EnforcementState.OFF */;default:return"ENFORCEMENT_STATE_UNSPECIFIED"/* EnforcementState.ENFORCEMENT_STATE_UNSPECIFIED */}}(t.enforcementState);return null}/**
     * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
     *
     * @param providerStr - The provider whose enablement state is to be returned.
     * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
     */isProviderEnabled(e){return"ENFORCE"/* EnforcementState.ENFORCE */===this.getProviderEnforcementState(e)||"AUDIT"/* EnforcementState.AUDIT */===this.getProviderEnforcementState(e)}}async function nm(e,t){return ns(e,"GET"/* HttpMethod.GET */,"/v2/recaptchaConfig"/* Endpoint.GET_RECAPTCHA_CONFIG */,no(e,t))}/**
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
 */async function ng(e,t){return ns(e,"POST"/* HttpMethod.POST */,"/v1/accounts:delete"/* Endpoint.DELETE_ACCOUNT */,t)}async function nv(e,t){return ns(e,"POST"/* HttpMethod.POST */,"/v1/accounts:lookup"/* Endpoint.GET_ACCOUNT_INFO */,t)}/**
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
 */function ny(e){if(e)try{// Convert to date object.
let t=new Date(Number(e));// Test date is valid.
if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){// Do nothing. undefined will be returned.
}}/**
 * Returns a deserialized JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */async function nb(e,t=!1){let n=tr(e),r=await n.getIdToken(t),i=n_(r);t5(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let a="object"==typeof i.firebase?i.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:ny(nw(i.auth_time)),issuedAtTime:ny(nw(i.iat)),expirationTime:ny(nw(i.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}function nw(e){return 1e3*Number(e)}function n_(e){let[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return t2("JWT malformed, contained fewer than 3 sections"),null;try{let e=eq(n);if(!e)return t2("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return t2("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
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
 */async function nk(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof e3&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
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
 */class nS{constructor(e){this.user=e,this.isRunning=!1,// Node timers and browser timers return fundamentally different types.
// We don't actually care what the value is but TS won't accept unknown and
// we can't cast properly in both environments.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timerId=null,this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4/* Duration.RETRY_BACKOFF_MAX */),e}{// Reset the error backoff
this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5/* Duration.OFFSET */;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){// Only retry on network errors
(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(/* wasError */!0);return}this.schedule()}}/**
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
 */class nE{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ny(this.lastLoginAt),this.creationTime=ny(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nI(e){var t;let n=e.auth,r=await e.getIdToken(),i=await nk(e,nv(n,{idToken:r}));t5(null==i?void 0:i.users.length,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let a=i.users[0];e._notifyReloadListener(a);let o=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?a.providerUserInfo.map(e=>{var{providerId:t}=e,n=tX(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[],s=function(e,t){let n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(null==s?void 0:s.length),c={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new nE(a.createdAt,a.lastLoginAt),isAnonymous:!!l&&u};Object.assign(e,c)}/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */async function nC(e){let t=tr(e);await nI(t),// Even though the current user hasn't changed, update
// current user will trigger a persistence update w/ the
// new info.
await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
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
 */async function nT(e,t){let n=await nl(e,{},async()=>{let n=e9({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=nc(e,r,"/v1/token"/* Endpoint.TOKEN */,`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/x-www-form-urlencoded",nr.fetch()(a,{method:"POST"/* HttpMethod.POST */,headers:o,body:n})});// The response comes back in snake_case. Convert to camel:
return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 *//**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */class nx{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4/* Buffer.TOKEN_REFRESH */}updateFromServerResponse(e){t5(e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t5(void 0!==e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t5(void 0!==e.refreshToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */function(e){let t=n_(e);return t5(t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t5(void 0!==t.exp,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t5(void 0!==t.iat,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(t5(!this.accessToken||this.refreshToken,e,"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await nT(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:r,expirationTime:i}=t,a=new nx;return n&&(t5("string"==typeof n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),a.refreshToken=n),r&&(t5("string"==typeof r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),a.accessToken=r),i&&(t5("number"==typeof i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nx,this.toJSON())}_performRefresh(){return t9("not implemented")}}/**
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
 */function nN(e,t){t5("string"==typeof e||void 0===e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:t})}class nP{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=tX(e,["uid","auth","stsTokenManager"]);// For the user object, provider is always Firebase.
this.providerId="firebase"/* ProviderId.FIREBASE */,this.proactiveRefresh=new nS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nE(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await nk(this,this.stsTokenManager.getToken(this.auth,e));return t5(t,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nb(this,e)}reload(){return nC(this)}_assign(e){this!==e&&(t5(this.uid===e.uid,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new nP(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){// There should only ever be one listener, and that is a single instance of MultiFactorUser
t5(!this.reloadListener,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await nI(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();// TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
//       cancels pending actions...
return await nk(this,ng(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),// Redirect event ID must be maintained in case there is a pending
// redirect event.
_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{// Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,a,o,s,l,u;let c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(a=t.photoURL)&&void 0!==a?a:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:k}=t;t5(y&&k,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let S=nx.fromJSON(this.name,k);t5("string"==typeof y,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),nN(c,e.name),nN(d,e.name),t5("boolean"==typeof b,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t5("boolean"==typeof w,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),nN(f,e.name),nN(h,e.name),nN(p,e.name),nN(m,e.name),nN(g,e.name),nN(v,e.name);let E=new nP({uid:y,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:w,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(E.providerData=_.map(e=>Object.assign({},e))),m&&(E._redirectEventId=m),E}/**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */static async _fromIdTokenResponse(e,t,n=!1){let r=new nx;r.updateFromServerResponse(t);// Initialize the Firebase Auth user.
let i=new nP({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return(// Updates the user info and data and resolves with a user instance.
await nI(i),i)}}/**
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
 */const nR=new Map;function nO(e){e instanceof Function||t9("Expected a class definition");let t=nR.get(e);return t?t instanceof e||t9("Instance stored in cache mismatched with class"):(t=new e,nR.set(e,t)),t}/**
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
 */class nL{constructor(){this.type="NONE"/* PersistenceType.NONE */,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
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
 */function nD(e,t,n){return`firebase:${e}:${t}:${n}`}nL.type="NONE";class nA{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=nD(this.userKey,r.apiKey,i),this.fullPersistenceKey=nD("persistence"/* KeyName.PERSISTENCE_USER */,r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?nP._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"/* KeyName.AUTH_USER */){if(!t.length)return new nA(nO(nL),e,n);// Eliminate any persistences that are not available
let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=r[0]||nO(nL),a=nD(n,e.config.apiKey,e.name),o=null;// Note, here we check for a user in _all_ persistences, not just the
// ones deemed available. If we can migrate a user out of a broken
// persistence, we will (but only if that persistence supports migration).
for(let n of t)try{let t=await n._get(a);if(t){let r=nP._fromJSON(e,t);// throws for unparsable blob (wrong format)
n!==i&&(o=r),i=n;break}}catch(e){}// If we find the user in a persistence that does support migration, use
// that migration path (of only persistences that support migration)
let s=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&s.length&&(i=s[0],o&&// we'll just let it bubble to surface the error.
await i._set(a,o.toJSON()),// Attempt to clear the key in other persistences but ignore errors. This helps prevent issues
// such as users getting stuck with a previous account after signing out and refreshing the tab.
await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(a)}catch(e){}}))),new nA(i,e,n)}}/**
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
 *//**
 * Determine the browser for the purposes of reporting usage to the API
 */function nM(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera"/* BrowserName.OPERA */;{if(nF(t))return"IEMobile"/* BrowserName.IEMOBILE */;if(t.includes("msie")||t.includes("trident/"))return"IE"/* BrowserName.IE */;if(t.includes("edge/"))return"Edge"/* BrowserName.EDGE */;if(nj(t))return"Firefox"/* BrowserName.FIREFOX */;if(t.includes("silk/"))return"Silk"/* BrowserName.SILK */;if(nH(t))return"Blackberry"/* BrowserName.BLACKBERRY */;if(n$(t))return"Webos"/* BrowserName.WEBOS */;if(nU(t))return"Safari"/* BrowserName.SAFARI */;if((t.includes("chrome/")||nz(t))&&!t.includes("edge/"))return"Chrome"/* BrowserName.CHROME */;if(nV(t))return"Android"/* BrowserName.ANDROID */;let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"/* BrowserName.OTHER */}function nj(e=e2()){return/firefox\//i.test(e)}function nU(e=e2()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function nz(e=e2()){return/crios\//i.test(e)}function nF(e=e2()){return/iemobile/i.test(e)}function nV(e=e2()){return/android/i.test(e)}function nH(e=e2()){return/blackberry/i.test(e)}function n$(e=e2()){return/webos/i.test(e)}function nB(e=e2()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function nW(e=e2()){// TODO: implement getBrowserName equivalent for OS.
return nB(e)||nV(e)||n$(e)||nH(e)||/windows phone/i.test(e)||nF(e)}/**
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
 *//*
 * Determine the SDK version string
 */function nK(e,t=[]){let n;switch(e){case"Browser"/* ClientPlatform.BROWSER */:// In a browser environment, report the browser name.
n=nM(e2());break;case"Worker"/* ClientPlatform.WORKER */:// Technically a worker runs from a browser but we need to differentiate a
// worker from a browser.
// For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
n=`${nM(e2())}-${e}`;break;default:n=e}let r=t.length?t.join(","):"FirebaseCore-web";/* default value if no other framework is used */return`${n}/JsCore/${tz}/${r}`}/**
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
 */class nq{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){// The callback could be sync or async. Wrap it into a
// function that is always async.
let n=t=>new Promise((n,r)=>{try{let r=e(t);// Either resolve with existing promise or wrap a non-promise
    // return value into a promise.
    n(r)}catch(e){// Sync callback throws.
    r(e)}});// Attach the onAbort if present
n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{// Unsubscribe. Replace with no-op. Do not remove from array, or it will disturb
// indexing of other elements.
this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;// While running the middleware, build a temporary stack of onAbort
// callbacks to call if one middleware callback rejects.
let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){for(let e of(// Run all onAbort, with separate try/catch to ignore any errors and
// continue
t.reverse(),t))try{e()}catch(e){/* swallow error */}throw this.auth._errorFactory.create("login-blocked"/* AuthErrorCode.LOGIN_BLOCKED */,{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 *//**
 * Fetches the password policy for the currently set tenant or the project if no tenant is set.
 *
 * @param auth Auth object.
 * @param request Password policy request.
 * @returns Password policy response.
 */async function nQ(e,t={}){return ns(e,"GET"/* HttpMethod.GET */,"/v2/passwordPolicy"/* Endpoint.GET_PASSWORD_POLICY */,no(e,t))}/**
 * Stores password policy requirements and provides password validation against the policy.
 *
 * @internal
 */class nG{constructor(e){var t,n,r,i;// Only include custom strength options defined in the response.
let a=e.customStrengthOptions;this.customStrengthOptions={},// TODO: Remove once the backend is updated to include the minimum min password length instead of undefined when there is no minimum length set.
this.customStrengthOptions.minPasswordLength=null!==(t=a.minPasswordLength)&&void 0!==t?t:6,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),void 0!==a.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),void 0!==a.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),void 0!==a.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),void 0!==a.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),// Use an empty string if no non-alphanumeric characters are specified in the response.
this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,a,o;let s={isValid:!0,passwordPolicy:this};return(// Check the password length and character options.
this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),// Combine the status into single isValid property.
s.isValid&&(s.isValid=null===(t=s.meetsMinPasswordLength)||void 0===t||t),s.isValid&&(s.isValid=null===(n=s.meetsMaxPasswordLength)||void 0===n||n),s.isValid&&(s.isValid=null===(r=s.containsLowercaseLetter)||void 0===r||r),s.isValid&&(s.isValid=null===(i=s.containsUppercaseLetter)||void 0===i||i),s.isValid&&(s.isValid=null===(a=s.containsNumericCharacter)||void 0===a||a),s.isValid&&(s.isValid=null===(o=s.containsNonAlphanumericCharacter)||void 0===o||o),s)}/**
     * Validates that the password meets the length options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}/**
     * Validates that the password meets the character options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordCharacterOptions(e,t){let n;// Assign statuses for requirements even if the password is an empty string.
this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */!1,/* containsUppercaseCharacter= */!1,/* containsNumericCharacter= */!1,/* containsNonAlphanumericCharacter= */!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */n>="a"&&n<="z",/* containsUppercaseCharacter= */n>="A"&&n<="Z",/* containsNumericCharacter= */n>="0"&&n<="9",/* containsNonAlphanumericCharacter= */this.allowedNonAlphanumericCharacters.includes(n))}/**
     * Updates the running validation status with the statuses for the character options.
     * Expected to be called each time a character is processed to update each option status
     * based on the current character.
     *
     * @param status Validation status.
     * @param containsLowercaseCharacter Whether the character is a lowercase letter.
     * @param containsUppercaseCharacter Whether the character is an uppercase letter.
     * @param containsNumericCharacter Whether the character is a numeric character.
     * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
     */updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class nJ{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nY(this),this.idTokenSubscription=new nY(this),this.beforeStateQueue=new nq(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,// Any network calls will set this to true and prevent subsequent emulator
// initialization
this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},// Tracks the last notified UID for state change listeners to prevent
// repeated calls to the callbacks. Undefined means it's never been
// called, whereas null means it's been called with a signed out user
this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nO(t)),// Have to check for app deletion throughout initialization (after each
// promise resolution)
this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await nA.create(this,e),!this._deleted)){// Initialize the resolver early if necessary (only applicable to web:
// this will cause the iframe to load immediately in certain cases)
if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){/* Ignore the error */}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}/**
     * If the persistence is changed in another window, the user manager will let us know
     */async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){// If the same user is to be synchronized.
if(this.currentUser&&e&&this.currentUser.uid===e.uid){// Data update, simply copy data changes.
this._currentUser._assign(e),// If tokens changed from previous user tokens, this will trigger
// notifyAuthListeners_.
await this.currentUser.getIdToken();return}// Update current Auth state. Either a new login or logout.
// Skip blocking callbacks, they should not apply to a change in another tab.
await this._updateCurrentUser(e,/* skipBeforeStateCallbacks */!0)}}async initializeCurrentUser(e){var t;// First check to see if we have a pending redirect event.
let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,a=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);// If the stored user (i.e. the old "currentUser") has a redirectId that
// matches the redirect user, then we want to initially sign in with the
// new user object from result.
// TODO(samgho): More thoroughly test all of this
(!n||n===a)&&(null==o?void 0:o.user)&&(r=o.user,i=!0)}// If no user in persistence, there is no current user. Set to null.
if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){// This isn't a redirect link operation, we can reload and bail.
// First though, ensure that we check the middleware is happy.
if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,// We know this is available since the bit is only set when the
// resolver is available
this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(// If the redirect user's event ID matches the current user's event ID,
// DO NOT reload the current user, otherwise they'll be cleared from storage.
// This is important for the reauthenticateWithRedirect() flow.
(t5(this._popupRedirectResolver,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r))}async tryRedirectSignIn(e){// The redirect user needs to be checked (and signed in if available)
// during auth initialization. All of the normal sign in and link/reauth
// flows call back into auth and push things onto the promise queue. We
// need to await the result of the redirect sign in *inside the promise
// queue*. This presents a problem: we run into deadlock. See:
//    ┌> [Initialization] ─────┐
//    ┌> [<other queue tasks>] │
//    └─ [getRedirectResult] <─┘
//    where [] are tasks on the queue and arrows denote awaits
// Initialization will never complete because it's waiting on something
// that's waiting for initialization to complete!
//
// Instead, this method calls getRedirectResult() (stored in
// _completeRedirectFn) with an optional parameter that instructs all of
// the underlying auth operations to skip anything that mutates auth state.
let t=null;try{// We know this._popupRedirectResolver is set since redirectResolver
// is passed in. The _completeRedirectFn expects the unwrapped extern.
t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){// Swallow any errors here; the code can retrieve them in
// getRedirectResult().
await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await nI(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")// them from storage
return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||// Supported in most browsers, but returns the language of the browser
// UI, not the language set in browser settings.
e.language||// Couldn't determine language.
null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){// The public updateCurrentUser method needs to make a copy of the user,
// and also check that the project matches
let t=e?tr(e):null;return t&&t5(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&t5(this.tenantId===e.tenantId,this,"tenant-id-mismatch"/* AuthErrorCode.TENANT_ID_MISMATCH */),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){// Prevent callbacks from being called again in _updateCurrentUser, as
// they were already called in the first line.
return(// Run first, to block _setRedirectUser() if any callbacks fail.
await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,/* skipBeforeStateCallbacks */!0))}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nO(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();// Password policy will be defined after fetching.
let t=this._getPasswordPolicyInternal();return(// Check that the policy schema version is supported by the SDK.
// TODO: Update this logic to use a max supported policy schema version once we have multiple schema versions.
t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version"/* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */,{})):t.validatePassword(e))}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await nQ(this),t=new nG(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new e4("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&nO(e)||this._popupRedirectResolver;t5(t,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.redirectPersistenceManager=await nA.create(this,[nO(t._redirectPersistence)],"redirectUser"/* KeyName.REDIRECT_USER */),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}/** Notifies listeners only if the user is current */_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}/** Returns the current user cast as the internal type */get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),a=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(t5(o,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),// The callback needs to be called asynchronously per the spec.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
o.then(()=>{a||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,n,r);return()=>{a=!0,i()}}{let n=e.addObserver(t);return()=>{a=!0,n()}}}/**
     * Unprotected (from race conditions) method to set the current user. This
     * should only be called from within a queued callback. This is necessary
     * because the queue shouldn't rely on another queued callback.
     */async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return(// In case something errors, the callback still should be called in order
// to keep the promise chain alive
this.operations=this.operations.then(e,e),this.operations)}get assertedPersistence(){return t5(this.persistenceManager,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),// Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
// "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.
this.frameworks.sort(),this.clientVersion=nK(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;// Additional headers on every request
let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"/* HttpHeader.X_FIREBASE_GMPID */]=this.app.options.appId);// If the heartbeat service exists, add the heartbeat string
let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"/* HttpHeader.X_FIREBASE_CLIENT */]=n);// If the App Check service exists, add the App Check token in the headers
let r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"/* HttpHeader.X_FIREBASE_APP_CHECK */]=r),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&// In the error case, a dummy token will be returned along with an error field describing
// the error. In general, we shouldn't care about the error condition and just use
// the token (actual or dummy) to send requests.
function(e,...t){t1.logLevel<=I.WARN&&t1.warn(`Auth (${tz}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}/** Helper class to wrap subscriber logic */class nY{constructor(e){this.auth=e,this.observer=null,this.addObserver=/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */function(e,t){let n=new tt(e,void 0);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return t5(this.observer,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.observer.next.bind(this.observer)}}function nX(e){// TODO: consider adding timeout support & cancellation
return new Promise((t,n)=>{var r,i;let a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=e=>{let t=t4("internal-error"/* AuthErrorCode.INTERNAL_ERROR */);t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)})}function nZ(e){return`__${e}${Math.floor(1e6*Math.random())}`}class n0{/**
     *
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     */constructor(e){/**
         * Identifies the type of application verifier (e.g. "recaptcha-enterprise").
         */this.type="recaptcha-enterprise",this.auth=tr(e)}/**
     * Executes the verification process.
     *
     * @returns A Promise for a token that can be used to assert the validity of a request.
     */async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{nm(e,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */,version:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}).then(r=>{if(void 0===r.recaptchaKey)n(Error("recaptcha Enterprise site key undefined"));else{let n=new np(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}}).catch(e=>{n(e)})})}function r(t,n,r){let i=window.grecaptcha;nh(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n("NO_RECAPTCHA")})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&nh(window.grecaptcha))r(n,e,i);else{if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}nX("https://www.google.com/recaptcha/enterprise.js?render="+n).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function n1(e,t,n,r=!1){let i;let a=new n0(e);try{i=await a.verify(n)}catch(e){i=await a.verify(n,!0)}let o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}),o}async function n2(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i||!i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"/* RecaptchaProvider.EMAIL_PASSWORD_PROVIDER */))return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await n1(e,t,n,"getOobCode"/* RecaptchaActionName.GET_OOB_CODE */===n);return r(e,i)}});{let i=await n1(e,t,n,"getOobCode"/* RecaptchaActionName.GET_OOB_CODE */===n);return r(e,i)}}function n3(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function n4(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
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
 *//**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class n6{/** @internal */constructor(/**
     * The authentication provider ID for the credential.
     *
     * @remarks
     * For example, 'facebook.com', or 'google.com'.
     */e,/**
     * The authentication sign in method for the credential.
     *
     * @remarks
     * For example, {@link SignInMethod}.EMAIL_PASSWORD, or
     * {@link SignInMethod}.EMAIL_LINK. This corresponds to the sign-in method
     * identifier as returned in {@link fetchSignInMethodsForEmail}.
     */t){this.providerId=e,this.signInMethod=t}/**
     * Returns a JSON-serializable representation of this object.
     *
     * @returns a JSON-serializable representation of this object.
     */toJSON(){return t9("not implemented")}/** @internal */_getIdTokenResponse(e){return t9("not implemented")}/** @internal */_linkToIdToken(e,t){return t9("not implemented")}/** @internal */_getReauthenticationResolver(e){return t9("not implemented")}}async function n8(e,t){return ns(e,"POST"/* HttpMethod.POST */,"/v1/accounts:update"/* Endpoint.SET_ACCOUNT_INFO */,t)}/**
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
 */async function n5(e,t){return nu(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPassword"/* Endpoint.SIGN_IN_WITH_PASSWORD */,no(e,t))}/**
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
 */async function n9(e,t){return nu(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,no(e,t))}async function n7(e,t){return nu(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,no(e,t))}/**
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
 *//**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */class re extends n6{/** @internal */constructor(/** @internal */e,/** @internal */t,n,/** @internal */r=null){super("password"/* ProviderId.PASSWORD */,n),this._email=e,this._password=t,this._tenantId=r}/** @internal */static _fromEmailAndPassword(e,t){return new re(e,t,"password"/* SignInMethod.EMAIL_PASSWORD */)}/** @internal */static _fromEmailAndCode(e,t,n=null){return new re(e,t,"emailLink"/* SignInMethod.EMAIL_LINK */,n)}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}/**
     * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
     *
     * @param json - Either `object` or the stringified representation of the object. When string is
     * provided, `JSON.parse` would be called first.
     *
     * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"/* SignInMethod.EMAIL_PASSWORD */===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"/* SignInMethod.EMAIL_LINK */===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}/** @internal */async _getIdTokenResponse(e){switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};return n2(e,t,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */,n5);case"emailLink"/* SignInMethod.EMAIL_LINK */:return n9(e,{email:this._email,oobCode:this._password});default:t3(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */async _linkToIdToken(e,t){switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:return n8(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink"/* SignInMethod.EMAIL_LINK */:return n7(e,{idToken:t,email:this._email,oobCode:this._password});default:t3(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function rt(e,t){return nu(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithIdp"/* Endpoint.SIGN_IN_WITH_IDP */,no(e,t))}/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class rn extends n6{constructor(){super(...arguments),this.pendingToken=null}/** @internal */static _fromParams(e){let t=new rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(// OAuth 1 and OAuth token with token secret
t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):t3("argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),t}/** {@inheritdoc AuthCredential.toJSON}  */toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}/**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=tX(t,["providerId","signInMethod"]);if(!n||!r)return null;let a=new rn(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}/** @internal */_getIdTokenResponse(e){let t=this.buildRequest();return rt(e,t)}/** @internal */_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,rt(e,n)}/** @internal */_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,rt(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=e9(t)}return e}}/**
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
 */async function rr(e,t){return ns(e,"POST"/* HttpMethod.POST */,"/v1/accounts:sendVerificationCode"/* Endpoint.SEND_VERIFICATION_CODE */,no(e,t))}async function ri(e,t){return nu(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,no(e,t))}async function ra(e,t){let n=await nu(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,no(e,t));if(n.temporaryProof)throw nf(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,n);return n}const ro={USER_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */};async function rs(e,t){let n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return nu(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,no(e,n),ro)}/**
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
 *//**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */class rl extends n6{constructor(e){super("phone"/* ProviderId.PHONE */,"phone"/* SignInMethod.PHONE */),this.params=e}/** @internal */static _fromVerification(e,t){return new rl({verificationId:e,verificationCode:t})}/** @internal */static _fromTokenResponse(e,t){return new rl({phoneNumber:e,temporaryProof:t})}/** @internal */_getIdTokenResponse(e){return ri(e,this._makeVerificationRequest())}/** @internal */_linkToIdToken(e,t){return ra(e,Object.assign({idToken:t},this._makeVerificationRequest()))}/** @internal */_getReauthenticationResolver(e){return rs(e,this._makeVerificationRequest())}/** @internal */_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}/** Generates a phone credential based on a plain object or a JSON string. */static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new rl({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}/**
 * A utility class to parse email action URLs such as password reset, email verification,
 * email link sign in, etc.
 *
 * @public
 */class ru{/**
     * @param actionLink - The link from which to extract the URL.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @internal
     */constructor(e){var t,n,r,i,a,o;let s=e7(te(e)),l=null!==(t=s.apiKey)&&void 0!==t?t:null,u=null!==(n=s.oobCode)&&void 0!==n?n:null,c=/**
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
 *//**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL"/* ActionCodeOperation.RECOVER_EMAIL */;case"resetPassword":return"PASSWORD_RESET"/* ActionCodeOperation.PASSWORD_RESET */;case"signIn":return"EMAIL_SIGNIN"/* ActionCodeOperation.EMAIL_SIGNIN */;case"verifyEmail":return"VERIFY_EMAIL"/* ActionCodeOperation.VERIFY_EMAIL */;case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL"/* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */;case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION"/* ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION */;default:return null}}(null!==(r=s.mode)&&void 0!==r?r:null);// Validate API key, code and mode.
t5(l&&u&&c,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=s.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(a=s.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(o=s.tenantId)&&void 0!==o?o:null}/**
     * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
     * otherwise returns null.
     *
     * @param link  - The email action link string.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @public
     */static parseLink(e){let t=/**
 * Helper to parse FDL links
 *
 * @param url
 */function(e){let t=e7(te(e)).link,n=t?e7(te(t)).deep_link_id:null,r=e7(te(e)).deep_link_id,i=r?e7(te(r)).link:null;return i||r||n||t||e}(e);try{return new ru(t)}catch(e){return null}}}/**
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
 *//**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */class rc{constructor(){/**
         * Always set to {@link ProviderId}.PASSWORD, even for email link.
         */this.providerId=rc.PROVIDER_ID}/**
     * Initialize an {@link AuthCredential} using an email and password.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credential(email, password);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * const userCredential = await signInWithEmailAndPassword(auth, email, password);
     * ```
     *
     * @param email - Email address.
     * @param password - User account password.
     * @returns The auth provider credential.
     */static credential(e,t){return re._fromEmailAndPassword(e,t)}/**
     * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
     * email link operation.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * await sendSignInLinkToEmail(auth, email);
     * // Obtain emailLink from user.
     * const userCredential = await signInWithEmailLink(auth, email, emailLink);
     * ```
     *
     * @param auth - The {@link Auth} instance used to verify the link.
     * @param email - Email address.
     * @param emailLink - Sign-in email link.
     * @returns - The auth provider credential.
     */static credentialWithLink(e,t){let n=ru.parseLink(t);return t5(n,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),re._fromEmailAndCode(e,n.code,n.tenantId)}}/**
 * Always set to {@link ProviderId}.PASSWORD, even for email link.
 */rc.PROVIDER_ID="password"/* ProviderId.PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
 */rc.EMAIL_PASSWORD_SIGN_IN_METHOD="password"/* SignInMethod.EMAIL_PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_LINK.
 */rc.EMAIL_LINK_SIGN_IN_METHOD="emailLink"/* SignInMethod.EMAIL_LINK */;/**
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
 *//**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */class rd{/**
     * Constructor for generic OAuth providers.
     *
     * @param providerId - Provider for which credentials should be generated.
     */constructor(e){this.providerId=e,/** @internal */this.defaultLanguageCode=null,/** @internal */this.customParameters={}}/**
     * Set the language gode.
     *
     * @param languageCode - language code
     */setDefaultLanguage(e){this.defaultLanguageCode=e}/**
     * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
     * operations.
     *
     * @remarks
     * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
     * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
     *
     * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
     */setCustomParameters(e){return this.customParameters=e,this}/**
     * Retrieve the current list of {@link CustomParameters}.
     */getCustomParameters(){return this.customParameters}}/**
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
 *//**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */class rf extends rd{constructor(){super(...arguments),/** @internal */this.scopes=[]}/**
     * Add an OAuth scope to the credential.
     *
     * @param scope - Provider OAuth scope to add.
     */addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}/**
     * Retrieve the current list of OAuth scopes.
     */getScopes(){return[...this.scopes]}}/**
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
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class rh extends rf{constructor(){super("facebook.com"/* ProviderId.FACEBOOK */)}/**
     * Creates a credential for Facebook.
     *
     * @example
     * ```javascript
     * // `event` from the Facebook auth.authResponseChange callback.
     * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param accessToken - Facebook access token.
     */static credential(e){return rn._fromParams({providerId:rh.PROVIDER_ID,signInMethod:rh.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return rh.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return rh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rh.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.FACEBOOK. */rh.FACEBOOK_SIGN_IN_METHOD="facebook.com"/* SignInMethod.FACEBOOK */,/** Always set to {@link ProviderId}.FACEBOOK. */rh.PROVIDER_ID="facebook.com"/* ProviderId.FACEBOOK */;/**
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
 *//**
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class rp extends rf{constructor(){super("google.com"/* ProviderId.GOOGLE */),this.addScope("profile")}/**
     * Creates a credential for Google. At least one of ID token and access token is required.
     *
     * @example
     * ```javascript
     * // \`googleUser\` from the onsuccess Google Sign In callback.
     * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param idToken - Google ID token.
     * @param accessToken - Google access token.
     */static credential(e,t){return rn._fromParams({providerId:rp.PROVIDER_ID,signInMethod:rp.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return rp.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return rp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return rp.credential(t,n)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GOOGLE. */rp.GOOGLE_SIGN_IN_METHOD="google.com"/* SignInMethod.GOOGLE */,/** Always set to {@link ProviderId}.GOOGLE. */rp.PROVIDER_ID="google.com"/* ProviderId.GOOGLE */;/**
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
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */class rm extends rf{constructor(){super("github.com"/* ProviderId.GITHUB */)}/**
     * Creates a credential for Github.
     *
     * @param accessToken - Github access token.
     */static credential(e){return rn._fromParams({providerId:rm.PROVIDER_ID,signInMethod:rm.GITHUB_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return rm.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return rm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rm.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GITHUB. */rm.GITHUB_SIGN_IN_METHOD="github.com"/* SignInMethod.GITHUB */,/** Always set to {@link ProviderId}.GITHUB. */rm.PROVIDER_ID="github.com"/* ProviderId.GITHUB */;/**
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
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */class rg extends rf{constructor(){super("twitter.com"/* ProviderId.TWITTER */)}/**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */static credential(e,t){return rn._fromParams({providerId:rg.PROVIDER_ID,signInMethod:rg.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return rg.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return rg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rg.credential(t,n)}catch(e){return null}}}/** Always set to {@link SignInMethod}.TWITTER. */rg.TWITTER_SIGN_IN_METHOD="twitter.com"/* SignInMethod.TWITTER */,/** Always set to {@link ProviderId}.TWITTER. */rg.PROVIDER_ID="twitter.com"/* ProviderId.TWITTER */;/**
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
 */class rv{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){let i=await nP._fromIdTokenResponse(e,n,r),a=ry(n),o=new rv({user:i,providerId:a,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,/* reload */!0);let r=ry(n);return new rv({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ry(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone"/* ProviderId.PHONE */:null}/**
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
 */class rb extends e3{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,rb.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new rb(e,t,n,r)}}function rw(e,t,n,r){let i="reauthenticate"/* OperationType.REAUTHENTICATE */===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw rb._fromErrorAndOperation(e,n,t,r);throw n})}async function r_(e,t,n=!1){let r=await nk(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return rv._forOperation(e,"link"/* OperationType.LINK */,r)}/**
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
 */async function rk(e,t,n=!1){let{auth:r}=e,i="reauthenticate"/* OperationType.REAUTHENTICATE */;try{let a=await nk(e,rw(r,i,t,e),n);t5(a.idToken,r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let o=n_(a.idToken);t5(o,r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let{sub:s}=o;return t5(e.uid===s,r,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),rv._forOperation(e,i,a)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&t3(r,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),e}}/**
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
 */async function rS(e,t,n=!1){let r="signIn"/* OperationType.SIGN_IN */,i=await rw(e,r,t),a=await rv._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}new WeakMap;const rE="__sak";/**
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
 */// There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class rI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(rE,"1"),this.storage.removeItem(rE),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class rC extends rI{constructor(){super(()=>window.localStorage,"LOCAL"/* PersistenceType.LOCAL */),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,// Safari or iOS browser and embedded in an iframe.
this.safariLocalStorageNotSynced=/**
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
 */function(){let e=e2();return nU(e)||nB(e)}()&&function(){try{// Check that the current window is not the top window.
// If so, return true.
return!!(window&&window!==window.top)}catch(e){return!1}}(),// Whether to use polling instead of depending on window events
this.fallbackToPolling=nW(),this._shouldAllowMigration=!0}forAllChangedKeys(e){// Check all keys with listeners on them.
for(let t of Object.keys(this.listeners)){// Get value from localStorage.
let n=this.storage.getItem(t),r=this.localCache[t];// If local map value does not match, trigger listener with storage event.
// Differentiate this simulated event from the real storage event.
n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){// Key would be null in some situations, like when localStorage is cleared
if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;// Safari embedded iframe. Storage event will trigger with the delta
// changes but no changes will be applied to the iframe localStorage.
if(t?// Remove storage event listener to prevent possible event duplication.
this.detachListener():// Remove polling listener to prevent possible event duplication.
this.stopPolling(),this.safariLocalStorageNotSynced){// Get current iframe page value.
let r=this.storage.getItem(n);// Value not synchronized, synchronize manually.
if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let r=()=>{// Keep local map up to date in case storage event is triggered before
// poll.
let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);/** Detects Internet Explorer. */(function(){let e=e2();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?// correct key, oldValue and newValue but localStorage.getItem(key) does
// not yield the updated value until a few milliseconds. This ensures
// this recovers from that situation.
setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),/* poll */!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}// Update local cache on base operations:
async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rC.type="LOCAL";/**
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
 */class rT extends rI{constructor(){super(()=>window.sessionStorage,"SESSION"/* PersistenceType.SESSION */)}_addListener(e,t){}_removeListener(e,t){}}rT.type="SESSION";/**
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
 *//**
 * Interface class for receiving messages.
 *
 */class rx{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}/**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */static _getInstance(e){// The results are stored in an array since objects can't be keys for other
// objects. In addition, setting a unique property on an event target as a
// hash map key may not be allowed due to CORS restrictions.
let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new rx(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}/**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */async handleEvent(e){let{eventId:t,eventType:n,data:r}=e.data,i=this.handlersMap[n];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack"/* _Status.ACK */,eventId:t,eventType:n});let a=Array.from(i).map(async t=>t(e.origin,r)),o=await Promise.all(a.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done"/* _Status.DONE */,eventId:t,eventType:n,response:o})}/**
     * Subscribe an event handler for a particular event.
     *
     * @param eventType - Event name to subscribe to.
     * @param eventHandler - The event handler which should receive the events.
     *
     */_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}/**
     * Unsubscribe an event handler from a particular event.
     *
     * @param eventType - Event name to unsubscribe from.
     * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
     *
     */_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
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
 */function rN(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}rx.receivers=[];/**
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
 *//**
 * Interface for sending messages and waiting for a completion response.
 *
 */class rP{constructor(e){this.target=e,this.handlers=new Set}/**
     * Unsubscribe the handler and remove it from our tracking Set.
     *
     * @param handler - The handler to unsubscribe.
     */removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}/**
     * Send a message to the Receiver located at {@link target}.
     *
     * @remarks
     * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
     * receiver has had a chance to fully process the event.
     *
     * @param eventType - Type of event to send.
     * @param data - The payload of the event.
     * @param timeout - Timeout for waiting on an ACK from the receiver.
     *
     * @returns An array of settled promises from all the handlers that were listening on the receiver.
     */async _send(e,t,n=50/* _TimeoutDuration.ACK */){let r,i;let a="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!a)throw Error("connection_unavailable"/* _MessageError.CONNECTION_UNAVAILABLE */);return new Promise((o,s)=>{let l=rN("",20);a.port1.start();let u=setTimeout(()=>{s(Error("unsupported_event"/* _MessageError.UNSUPPORTED_EVENT */))},n);i={messageChannel:a,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack"/* _Status.ACK */:// The receiver should ACK first.
clearTimeout(u),r=setTimeout(()=>{s(Error("timeout"/* _MessageError.TIMEOUT */))},3e3/* _TimeoutDuration.COMPLETION */);break;case"done"/* _Status.DONE */:// Once the receiver's handlers are finished we will get the results.
clearTimeout(r),o(e.data.response);break;default:clearTimeout(u),clearTimeout(r),s(Error("invalid_response"/* _MessageError.INVALID_RESPONSE */))}}},this.handlers.add(i),a.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[a.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
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
 *//**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */function rR(){return window}/**
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
 */function rO(){return void 0!==rR().WorkerGlobalScope&&"function"==typeof rR().importScripts}async function rL(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
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
 */const rD="firebaseLocalStorageDb",rA="firebaseLocalStorage",rM="fbase_key";/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */class rj{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rU(e,t){return e.transaction([rA],t?"readwrite":"readonly").objectStore(rA)}function rz(){let e=indexedDB.open(rD,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(rA,{keyPath:rM})}catch(e){n(e)}}),e.addEventListener("success",async()=>{let n=e.result;// Strange bug that occurs in Firefox when multiple tabs are opened at the
// same time. The only way to recover seems to be deleting the database
// and re-initializing it.
// https://github.com/firebase/firebase-js-sdk/issues/634
n.objectStoreNames.contains(rA)?t(n):(// Need to close the database or else you get a `blocked` event
n.close(),await function(){let e=indexedDB.deleteDatabase(rD);return new rj(e).toPromise()}(),t(await rz()))})})}async function rF(e,t,n){let r=rU(e,!0).put({[rM]:t,value:n});return new rj(r).toPromise()}async function rV(e,t){let n=rU(e,!1).get(t),r=await new rj(n).toPromise();return void 0===r?null:r.value}function rH(e,t){let n=rU(e,!0).delete(t);return new rj(n).toPromise()}class r${constructor(){this.type="LOCAL"/* PersistenceType.LOCAL */,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,// Fire & forget the service worker registration as it may never resolve
this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await rz()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0);// TODO: consider adding exponential backoff
}}/**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */async initializeServiceWorkerMessaging(){return rO()?this.initializeReceiver():this.initializeSender()}/**
     * As the worker we should listen to events from the main window.
     */async initializeReceiver(){this.receiver=rx._getInstance(rO()?self:null),// Refresh from persistence if we receive a KeyChanged message.
this.receiver._subscribe("keyChanged"/* _EventType.KEY_CHANGED */,async(e,t)=>{let n=await this._poll();return{keyProcessed:n.includes(t.key)}}),// Let the sender know that we are listening so they give us more timeout.
this.receiver._subscribe("ping"/* _EventType.PING */,async(e,t)=>["keyChanged"/* _EventType.KEY_CHANGED */])}/**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */async initializeSender(){var e,t;if(// Check to see if there's an active service worker.
this.activeServiceWorker=await rL(),!this.activeServiceWorker)return;this.sender=new rP(this.activeServiceWorker);// Ping the service worker to check what events they can handle.
let n=await this.sender._send("ping"/* _EventType.PING */,{},800/* _TimeoutDuration.LONG_ACK */);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"/* _EventType.KEY_CHANGED */))&&(this.serviceWorkerReceiverAvailable=!0)}/**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged"/* _EventType.KEY_CHANGED */,{key:e},this.serviceWorkerReceiverAvailable?800/* _TimeoutDuration.LONG_ACK */:50/* _TimeoutDuration.ACK */)}catch(e){// This is a best effort approach. Ignore errors.
}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await rz();return await rF(e,rE,"1"),await rH(e,rE),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>rF(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>rV(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rH(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){// TODO: check if we need to fallback if getAll is not supported
let e=await this._withRetries(e=>{let t=rU(e,!1).getAll();return new rj(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(// Deleted
this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * Returns a verification ID to be used in conjunction with the SMS code that is sent.
 *
 */async function rB(e,t,n){var r,i,a;let o=await n.verify();try{let s;if(t5("string"==typeof o,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),t5("recaptcha"===n.type,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){let t=s.session;if("phoneNumber"in s){t5("enroll"/* MultiFactorSessionType.ENROLL */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let n=await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}},ns(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:start"/* Endpoint.START_MFA_ENROLLMENT */,no(e,i)));return n.phoneSessionInfo.sessionInfo}{t5("signin"/* MultiFactorSessionType.SIGN_IN */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;t5(n,e,"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */);let i=await (a={mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}},ns(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:start"/* Endpoint.START_MFA_SIGN_IN */,no(e,a)));return i.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await rr(e,{phoneNumber:s.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}r$.type="LOCAL",nZ("rcb"),new nt(3e4,6e4);/**
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
 *//**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @remarks
 * `PhoneAuthProvider` does not work in a Node.js environment.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */class rW{/**
     * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
     *
     */constructor(e){/** Always set to {@link ProviderId}.PHONE. */this.providerId=rW.PROVIDER_ID,this.auth=tr(e)}/**
     *
     * Starts a phone number authentication flow by sending a verification code to the given phone
     * number.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
     * E.164 format (e.g. +16505550101).
     * @param applicationVerifier - For abuse prevention, this method also requires a
     * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
     * {@link RecaptchaVerifier}.
     *
     * @returns A Promise for a verification ID that can be passed to
     * {@link PhoneAuthProvider.credential} to identify this flow..
     */verifyPhoneNumber(e,t){return rB(this.auth,e,tr(t))}/**
     * Creates a phone auth credential, given the verification ID from
     * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
     * mobile device.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = await confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
     * @param verificationCode - The verification code sent to the user's mobile device.
     *
     * @returns The auth provider credential.
     */static credential(e,t){return rl._fromVerification(e,t)}/**
     * Generates an {@link AuthCredential} from a {@link UserCredential}.
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return rW.credentialFromTaggedObject(e)}/**
     * Returns an {@link AuthCredential} when passed an error.
     *
     * @remarks
     *
     * This method works for errors like
     * `auth/account-exists-with-different-credentials`. This is useful for
     * recovering when attempting to set a user's phone number but the number
     * in question is already tied to another account. For example, the following
     * code tries to update the current user's phone number, and if that
     * fails, links the user with the account associated with that number:
     *
     * ```js
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(number, verifier);
     * try {
     *   const code = ''; // Prompt the user for the verification code
     *   await updatePhoneNumber(
     *       auth.currentUser,
     *       PhoneAuthProvider.credential(verificationId, code));
     * } catch (e) {
     *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
     *     const cred = PhoneAuthProvider.credentialFromError(e);
     *     await linkWithCredential(auth.currentUser, cred);
     *   }
     * }
     *
     * // At this point, auth.currentUser.phoneNumber === number.
     * ```
     *
     * @param error - The error to generate a credential from.
     */static credentialFromError(e){return rW.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?rl._fromTokenResponse(t,n):null}}/**
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
 *//**
 * Chooses a popup/redirect resolver to use. This prefers the override (which
 * is directly passed in), and falls back to the property set on the auth
 * object. If neither are available, this function errors w/ an argument error.
 */function rK(e,t){return t?nO(t):(t5(e._popupRedirectResolver,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),e._popupRedirectResolver)}/** Always set to {@link ProviderId}.PHONE. */rW.PROVIDER_ID="phone"/* ProviderId.PHONE */,/** Always set to {@link SignInMethod}.PHONE. */rW.PHONE_SIGN_IN_METHOD="phone"/* SignInMethod.PHONE */;/**
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
 */class rq extends n6{constructor(e){super("custom"/* ProviderId.CUSTOM */,"custom"/* ProviderId.CUSTOM */),this.params=e}_getIdTokenResponse(e){return rt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rt(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rQ(e){return rS(e.auth,new rq(e),e.bypassAuthState)}function rG(e){let{auth:t,user:n}=e;return t5(n,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),rk(n,new rq(e),e.bypassAuthState)}async function rJ(e){let{auth:t,user:n}=e;return t5(n,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),r_(n,new rq(e),e.bypassAuthState)}/**
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
 *//**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */class rY{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:o}=e;if(a){this.reject(a);return}let s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup"/* AuthEventType.SIGN_IN_VIA_POPUP */:case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:return rQ;case"linkViaPopup"/* AuthEventType.LINK_VIA_POPUP */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:return rJ;case"reauthViaPopup"/* AuthEventType.REAUTH_VIA_POPUP */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return rG;default:t3(this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}resolve(e){this.pendingPromise||t9("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||t9("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rX=new nt(2e3,1e4);/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */class rZ extends rY{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,rZ.currentPopupAction&&rZ.currentPopupAction.cancel(),rZ.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return t5(e,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),e}async onExecution(){1===this.filter.length||t9("Popup operations only handle one event");let e=rN();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,// Check for web storage support and origin validation _after_ the popup is
// loaded. These operations are slow (~1 second or so) Rather than
// waiting on them before opening the window, optimistically open the popup
// and check for storage support at the same time. If storage support is
// not available, this will cause the whole thing to reject properly. It
// will also close the popup, but since the promise has already rejected,
// the popup closed by user poll will reject into the void.
this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(t4(this.auth,"web-storage-unsupported"/* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */))}),// Handle user closure. Notice this does *not* use await
this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(t4(this.auth,"cancelled-popup-request"/* AuthErrorCode.EXPIRED_POPUP_REQUEST */))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rZ.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){// Make sure that there is sufficient time for whatever action to
// complete. The window could have closed but the sign in network
// call could still be in flight. This is specifically true for
// Firefox or if the opener is in an iframe, in which case the oauth
// helper closes the popup.
this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(t4(this.auth,"popup-closed-by-user"/* AuthErrorCode.POPUP_CLOSED_BY_USER */))},8e3/* _Timeout.AUTH_EVENT */);return}this.pollId=window.setTimeout(e,rX.get())};e()}}// Only one popup is ever shown at once. The lifecycle of the current popup
// can be managed / cancelled by the constructor.
rZ.currentPopupAction=null;// We only get one redirect outcome for any one auth, so just store it
// in here.
const r0=new Map;class r1 extends rY{constructor(e,t,n=!1){super(e,["signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */,"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */,"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */,"unknown"/* AuthEventType.UNKNOWN */],t,void 0,n),this.eventId=null}/**
     * Override the execute function; if we already have a redirect result, then
     * just return it.
     */async execute(){let e=r0.get(this.auth._key());if(!e){try{let t=await r2(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}r0.set(this.auth._key(),e)}return this.bypassAuthState||r0.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */===e.type)return super.onAuthEvent(e);if("unknown"/* AuthEventType.UNKNOWN */===e.type){// This is a sentinel value indicating there's no pending redirect
this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r2(e,t){let n=r8(t),r=r6(e);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}async function r3(e,t){return r6(e)._set(r8(t),"true")}function r4(e,t){r0.set(e._key(),t)}function r6(e){return nO(e._redirectPersistence)}function r8(e){return nD("pendingRedirect",e.config.apiKey,e.name)}async function r5(e,t,n){let r=tr(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&t3(e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),t6(e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */,`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,rd),// Wait for auth initialization to complete, this will process pending redirects and clear the
// PENDING_REDIRECT_KEY in persistence. This should be completed before starting a new
// redirect and creating a PENDING_REDIRECT_KEY entry.
await r._initializationPromise;let i=rK(r,n);return await r3(i,r),i._openRedirect(r,t,"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */)}async function r9(e,t,n=!1){let r=tr(e),i=rK(r,t),a=new r1(r,i,n),o=await a.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class r7{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){// Check if the event has already been handled
if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return!0;case"unknown"/* AuthEventType.UNKNOWN */:return it(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!it(e)){let r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error"/* AuthErrorCode.INTERNAL_ERROR */;t.onError(t4(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ie(e))}saveEventToCache(e){this.cachedEventUids.add(ie(e)),this.lastProcessedEventTime=Date.now()}}function ie(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function it({type:e,error:t}){return"unknown"/* AuthEventType.UNKNOWN */===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
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
 */async function ir(e,t={}){return ns(e,"GET"/* HttpMethod.GET */,"/v1/projects"/* Endpoint.GET_PROJECT_CONFIG */,t)}/**
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
 */const ii=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ia=/^https?/;async function io(e){// Skip origin validation if we are in an emulated environment
if(e.config.emulator)return;let{authorizedDomains:t}=await ir(e);for(let e of t)try{if(function(e){let t=t7(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ia.test(n))return!1;if(ii.test(e))// only contain the IP, no extra character.
return r===e;// Dots in pattern should be escaped.
let i=e.replace(/\./g,"\\."),a=RegExp("^(.+\\."+i+"|"+i+")$","i");return a.test(r)}(e))return}catch(e){// Do nothing if there's a URL error; just continue searching
}// In the old SDK, this error also provides helpful messages.
t3(e,"unauthorized-domain"/* AuthErrorCode.INVALID_ORIGIN */)}/**
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
 */const is=new nt(3e4,6e4);/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */function il(){// Clear last failed gapi.load state to force next gapi.load to first
// load the failed gapi.iframes module.
// Get gapix.beacon context.
let e=rR().___jsl;// Get current hint.
if(null==e?void 0:e.H){for(let t of Object.keys(e.H))// Clear pending callbacks.
if(// Requested modules.
e.H[t].r=e.H[t].r||[],// Loaded modules.
e.H[t].L=e.H[t].L||[],// Set requested modules to a copy of the loaded modules.
e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let iu=null;/**
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
 */const ic=new nt(5e3,15e3),id={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ih=new Map([["identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,"p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]// test
]);async function ip(e){let t=await (iu=iu||new Promise((t,n)=>{var r,i,a;// Function to run when gapi.load is ready.
function o(){// The developer may have tried to previously run gapi.load and failed.
// Run this to fix that.
il(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{// The above reset may be sufficient, but having this reset after
// failure ensures that if the developer calls gapi.load after the
// connection is re-established and before another attempt to embed
// the iframe, it would work and would not be broken because of our
// failed attempt.
// Timeout when gapi.iframes.Iframe not loaded.
il(),n(t4(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},timeout:is.get()})}if(null===(i=null===(r=rR().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(a=rR().gapi)||void 0===a?void 0:a.load)o();else{// Create a new iframe callback when this is called so as not to overwrite
// any previous defined callback. This happens if this method is called
// multiple times in parallel and could result in the later callback
// overwriting the previous one. This would end up with a iframe
// timeout.
let t=nZ("iframefcb");// Load GApi loader.
return(// GApi loader not available, dynamically load platform.js.
rR()[t]=()=>{// GApi loader should be ready.
gapi.load?o():n(t4(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},nX(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>n(e)))}}).catch(e=>{throw(// Reset cached promise to allow for retrial.
iu=null,e)})),n=rR().gapi;return t5(n,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t.open({where:document.body,url:function(e){let t=e.config;t5(t.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */);let n=t.emulator?nn(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:tz},i=ih.get(e.config.apiHost);i&&(r.eid=i);let a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${e9(r).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:id,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({// Prevent iframe from closing on mouse out.
    setHideOnLeave:!1});let i=t4(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */),a=rR().setTimeout(()=>{r(i)},ic.get());// Clear timer and resolve pending iframe ready promise.
    function o(){rR().clearTimeout(a),n(t)}// This returns an IThenable. However the reject part does not call
    // when the iframe is not loaded.
    t.ping(o).then(o,()=>{r(i)})}))}/**
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
 */const im={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}/**
 * Fragment name for the App Check token that gets passed to the widget
 *
 * @internal
 */const iv=encodeURIComponent("fac");async function iy(e,t,n,r,i,a){t5(e.config.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */),t5(e.config.apiKey,e,"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */);let o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:tz,eventId:i};if(t instanceof rd)// TODO set additionalParams from the provider as well?
for(let[n,r]of(t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(o.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))o[n]=r;if(t instanceof rf){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}for(let t of(e.tenantId&&(o.tid=e.tenantId),Object.keys(o)))void 0===o[t]&&delete o[t];// Sets the App Check token to pass to the widget
let s=await e._getAppCheckToken(),l=s?`#${iv}=${encodeURIComponent(s)}`:"";// Start at index 1 to skip the leading '&' in the query string
return`${function({config:e}){return e.emulator?nn(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${e9(o).slice(1)}${l}`}/**
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
 *//**
 * The special web storage event
 *
 */const ib="webStorageSupport",iw=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rT,this._completeRedirectFn=r9,this._overrideRedirectResult=r4}// Wrapping in async even though we don't await anywhere in order
// to make sure errors are raised as promise rejections
async _openPopup(e,t,n,r){var i;(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager)||t9("_initialize() not called before _openPopup()");let a=await iy(e,t,n,t7(),r);return function(e,t,n,r=500,i=600){let a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),s="",l=Object.assign(Object.assign({},im),{width:r.toString(),height:i.toString(),top:a,left:o}),u=e2().toLowerCase();n&&(s=nz(u)?"_blank":n),nj(u)&&(// Firefox complains when invalid URLs are popped out. Hacky way to bypass.
t=t||"http://localhost",// Firefox disables by default scrolling on popup windows, which can create
// issues when the user has many Google accounts, for instance.
l.scrollbars="yes");let c=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=e2()){var t;return nB(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==s)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",s),new ig(null);// about:blank getting sanitized causing browsers like IE/Edge to display
// brief error message before redirecting to handler.
let d=window.open(t||"",s,c);t5(d,e,"popup-blocked"/* AuthErrorCode.POPUP_BLOCKED */);// Flaky on IE edge, encapsulate with a try and catch.
try{d.focus()}catch(e){}return new ig(d)}(e,a,rN())}async _openRedirect(e,t,n,r){await this._originValidation(e);let i=await iy(e,t,n,t7(),r);return rR().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(n||t9("If manager is not set, promise should be"),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},// If the promise is rejected, the key should be removed so that the
// operation can be retried later.
n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await ip(e),n=new r7(e);return t.register("authEvent",t=>{t5(null==t?void 0:t.authEvent,e,"invalid-auth-event"/* AuthErrorCode.INVALID_AUTH_EVENT */);// TODO: Consider splitting redirect and popup events earlier on
let r=n.onEvent(t.authEvent);return{status:r?"ACK"/* GapiOutcome.ACK */:"ERROR"/* GapiOutcome.ERROR */}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){let n=this.iframes[e._key()];n.send(ib,{type:ib},n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[ib];void 0!==i&&t(!!i),t3(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=io(e)),this.originValidationPromises[t]}get _shouldInitProactively(){// Mobile browsers and Safari need to optimistically initialize
return nW()||nU()||nB()}};class i_{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll"/* MultiFactorSessionType.ENROLL */:return this._finalizeEnroll(e,t.credential,n);case"signin"/* MultiFactorSessionType.SIGN_IN */:return this._finalizeSignIn(e,t.credential);default:return t9("unexpected MultiFactorSessionType")}}}/**
 * {@inheritdoc PhoneMultiFactorAssertion}
 *
 * @public
 */class ik extends i_{constructor(e){super("phone"/* FactorId.PHONE */),this.credential=e}/** @internal */static _fromCredential(e){return new ik(e)}/** @internal */_finalizeEnroll(e,t,n){return ns(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,no(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}/** @internal */_finalizeSignIn(e,t){return ns(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,no(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class iS extends i_{constructor(e,t,n){super("totp"/* FactorId.TOTP */),this.otp=e,this.enrollmentId=t,this.secret=n}/** @internal */static _fromSecret(e,t){return new iS(t,void 0,e)}/** @internal */static _fromEnrollmentId(e,t){return new iS(t,e)}/** @internal */async _finalizeEnroll(e,t,n){return t5(void 0!==this.secret,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),ns(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,no(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}/** @internal */async _finalizeSignIn(e,t){t5(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */);let n={verificationCode:this.otp};return ns(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,no(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n}))}}/**
 * Provider for generating a {@link TotpMultiFactorAssertion}.
 *
 * Stores the shared secret key and other parameters to generate time-based OTPs.
 * Implements methods to retrieve the shared secret key and generate a QR code URL.
 * @public
 */class iE{// The public members are declared outside the constructor so the docs can be generated.
constructor(e,t,n,r,i,a,o){this.sessionInfo=a,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}/** @internal */static _fromStartTotpMfaEnrollmentResponse(e,t){return new iE(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}/** @internal */_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}/**
     * Returns a QR code URL as described in
     * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
     * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
     * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
     *
     * @param accountName the name of the account/app along with a user identifier.
     * @param issuer issuer of the TOTP (likely the app name).
     * @returns A QR code URL string.
     */generateQrCodeUrl(e,t){var n;let r=!1;return(iI(e)||iI(t))&&(r=!0),r&&(iI(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),iI(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}/** @internal */function iI(e){return void 0===e||(null==e?void 0:e.length)===0}var iC="@firebase/auth",iT="1.3.2";/**
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
 */class ix{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){t5(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth"/* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const iN=e0("authIdTokenMaxAge")||300;let iP=null;const iR=e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iN)return;// Specifically trip null => undefined when logged out, to delete any existing cookie
    let i=null==n?void 0:n.token;iP!==i&&(iP=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};h="Browser"/* ClientPlatform.BROWSER */,tA(new ti("auth"/* _ComponentName.AUTH */,(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;t5(a&&!a.includes(":"),"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */,{appName:n.name});let s={apiKey:a,authDomain:o,clientPlatform:h,apiHost:"identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,tokenApiHost:"securetoken.googleapis.com"/* DefaultConfig.TOKEN_API_HOST */,apiScheme:"https"/* DefaultConfig.API_SCHEME */,sdkClientVersion:nK(h)},l=new nJ(n,r,i,s);return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nO);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),// This promise is intended to float; auth initialization happens in the
// background, meanwhile the auth object may be used by the app.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC"/* ComponentType.PUBLIC */)/**
         * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
         * For why we do this, See go/firebase-next-auth-init
         */.setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)/**
         * Because all firebase products that depend on auth depend on auth-internal directly,
         * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
         */.setInstanceCreatedCallback((e,t,n)=>{let r=e.getProvider("auth-internal"/* _ComponentName.AUTH_INTERNAL */);r.initialize()})),tA(new ti("auth-internal"/* _ComponentName.AUTH_INTERNAL */,e=>{let t=tr(e.getProvider("auth"/* _ComponentName.AUTH */).getImmediate());return new ix(t)},"PRIVATE"/* ComponentType.PRIVATE */).setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)),tV(iC,iT,/**
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
 */function(e){switch(e){case"Node"/* ClientPlatform.NODE */:return"node";case"ReactNative"/* ClientPlatform.REACT_NATIVE */:return"rn";case"Worker"/* ClientPlatform.WORKER */:return"webworker";case"Cordova"/* ClientPlatform.CORDOVA */:return"cordova";default:return}}(h)),tV(iC,iT,"esm2017");const iO=tF({apiKey:"AIzaSyAC-lbWPT-60lPwbJGBMKp_1mLKWCljW4A",authDomain:"hnews-f845a.firebaseapp.com",projectId:"hnews-f845a",storageBucket:"hnews-f845a.appspot.com",messagingSenderId:"734364993587",appId:"1:734364993587:web:f0020375ba6ff35b8efb46"}),iL=function(e){let t=/**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */function(e=/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */function(e=tR){let t=tL.get(e);if(!t&&e===tR&&eZ())return tF();if(!t)throw tj.create("no-app"/* AppError.NO_APP */,{appName:e});return t}()){let t=tM(e,"auth");if(t.isInitialized())return t.getImmediate();let n=/**
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
 *//**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */function(e,t){let n=tM(e,"auth");if(n.isInitialized()){let e=n.getImmediate(),r=n.getOptions();if(e8(r,null!=t?t:{}))return e;t3(e,"already-initialized"/* AuthErrorCode.ALREADY_INITIALIZED */)}let r=n.initialize({options:t});return r}(e,{popupRedirectResolver:iw,persistence:[r$,rC,rT]}),r=e0("authTokenSyncURL");if(r){let e=iR(r);tr(n).beforeAuthStateChanged(e,()=>e(n.currentUser)),tr(n).onIdTokenChanged(t=>e(t),void 0,void 0)}let i=eX("auth");return i&&/**
 * Changes the {@link Auth} instance to communicate with the Firebase Auth Emulator, instead of production
 * Firebase Auth services.
 *
 * @remarks
 * This must be called synchronously immediately following the first call to
 * {@link initializeAuth}.  Do not use with production credentials as emulator
 * traffic is not encrypted.
 *
 *
 * @example
 * ```javascript
 * connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param url - The URL at which the emulator is running (eg, 'http://localhost:9099').
 * @param options - Optional. `options.disableWarnings` defaults to `false`. Set it to
 * `true` to disable the warning banner attached to the DOM.
 *
 * @public
 */function(e,t,n){let r=tr(e);t5(r._canInitEmulator,r,"emulator-config-failed"/* AuthErrorCode.EMULATOR_CONFIG_FAILED */),t5(/^https?:\/\//.test(t),r,"invalid-emulator-scheme"/* AuthErrorCode.INVALID_EMULATOR_SCHEME */);let i=!!(null==n?void 0:n.disableWarnings),a=n3(t),{host:o,port:s}=function(e){let t=n3(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);// Strip out "username:password@".
if(i){let e=i[1];return{host:e,port:n4(r.substr(e.length+1))}}{let[e,t]=r.split(":");return{host:e,port:n4(t)}}}(t),l=null===s?"":`:${s}`;// Always replace path with "/" (even if input url had no path at all, or had a different one).
r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${i}`),n}(e);return{signIn:async function(){let e=new rp;e.setCustomParameters({prompt:"select_account"});try{let n=await r5(t,e,void 0),r=n.user;console.log(r.displayName,r.email,r.photoURL)}catch(n){let e=n.code,t=n.message;console.log(e,t)}},signOut:function(){tr(t).signOut()},onAuthStateChanged:function(e){return tr(t).onAuthStateChanged(e,void 0,void 0)}}}(iO),iD=iL.signIn,iA=iL.signOut,iM=iL.onAuthStateChanged;var D=P("6SgHj");const ij=function(){let e={};return{get:async function(t){return void 0!==e[t]||(e[t]=await (await fetch(`https://hacker-news.firebaseio.com/v0/user/${t}.json`)).json()),e[t]}}}(),iU=function(e){let t=/*@__PURE__*/r(D).useRef(null);return /*@__PURE__*/r(D).useEffect(function(){if(void 0===e)return;let n=new bootstrap.Popover(t.current,{content:`
                <div class="spinner-grow spinner-grow-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            `,html:!0,placement:"auto",trigger:"click hover"}),r=async function(){let t=await ij.get(e),r=`
                <p class="fw-lighter">
                    <small>
                        <em title=${iF(1e3*t.created)}>${iz(1e3*t.created)}</em>
                        <br />
                        ${void 0!==t.about?t.about:""}
                    </small>
                </p>
            `;null!==n.tip&&(n.tip.getElementsByClassName("popover-body")[0].innerHTML=r)};return t.current.addEventListener("inserted.bs.popover",r),function(){// domEl.current.removeEventListener('inserted.bs.popover', listener);
n.dispose()}},[]),t},iz=function(e,t=!1){let n;return t?(n=new Date(0)).setUTCSeconds(e):n=new Date(e),/*@__PURE__*/r(ex).relativeTime(n)},iF=function(e,t=!1){let n;return t?(n=new Date(0)).setUTCSeconds(e):n=new Date(e),n.toLocaleString("en-US",{hour12:!1})};(p=C||(C={})).DANGER="danger",p.WARNING="warning",p.SUCCESS="success",p.PRIMARY="primary",p.INFO="info",p.SECONDARY="secondary";const iV=function({score:e}){return/*#__PURE__*/(0,O.jsx)("span",{className:`badge bg-${e>=3200?"danger":e>=1600?"warning":e>=800?"success":e>=400?"primary":e>=200?"info":"secondary"}`,children:e})},iH=function(){let[e,t]=/*@__PURE__*/r(D).useState(null);return /*@__PURE__*/r(D).useEffect(function(){return iM(t)},[]),e},i$=function({user:e}){return null!==e?/*#__PURE__*/(0,O.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(e){e.preventDefault(),iA()},children:[/*#__PURE__*/(0,O.jsx)("i",{className:"bi bi-box-arrow-in-left"})," ",/*#__PURE__*/(0,O.jsx)("em",{children:e.displayName})]}):/*#__PURE__*/(0,O.jsx)("button",{className:"btn btn-outline-success",onClick:function(e){e.preventDefault(),iD()},children:/*#__PURE__*/(0,O.jsx)("i",{className:"bi bi-box-arrow-in-right"})})},iB=function(){return/*#__PURE__*/(0,O.jsx)("div",{className:"d-flex justify-content-center",children:/*#__PURE__*/(0,O.jsx)("div",{className:"spinner-border",style:{width:"3rem",height:"3rem"},role:"status",children:/*#__PURE__*/(0,O.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},iW=function({item:e}){let t=new URL("https://twitter.com/intent/tweet");return t.searchParams.append("text",e.title),t.searchParams.append("url",null!==e.url?e.url:`https://news.ycombinator.com/item?id=${e.objectID}`),t.searchParams.append("hashtags","hackernews"),/*#__PURE__*/(0,O.jsx)("a",{href:t.href,children:/*#__PURE__*/(0,O.jsx)("i",{className:"bi bi-twitter"})})};P("6SgHj");const iK=function({to:e,disabled:t,children:n}){return t?/*#__PURE__*/(0,O.jsx)(eC,{to:`/${e}`,style:{pointerEvents:"none"},children:n}):/*#__PURE__*/(0,O.jsx)(eC,{to:e,children:n})},iq=function({item:e}){return/*#__PURE__*/(0,O.jsx)(iK,{to:`/${e.objectID}`,disabled:null===e.num_comments,children:/*#__PURE__*/(0,O.jsxs)("span",{className:"btn btn-primary btn-sm position-relative me-4",children:[/*#__PURE__*/(0,O.jsx)("i",{className:"bi bi-people-fill"}),/*#__PURE__*/(0,O.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",children:e.num_comments})]})})},iQ=function({item:e}){let t=/*#__PURE__*/(0,O.jsx)("span",{children:e.url});if(void 0!==e.url){let n=e.url.split("/"),r=n.slice(0,2).join("/"),i=n[2],a=n.slice(3).join("/");t=/*#__PURE__*/(0,O.jsxs)("span",{children:[r,"/",/*#__PURE__*/(0,O.jsx)("strong",{children:i}),"/",a]})}return t},iG=function({item:e}){return/*#__PURE__*/(0,O.jsxs)(O.Fragment,{children:[null!==e.story_text&&/*#__PURE__*/(0,O.jsx)("p",{children:/*#__PURE__*/(0,O.jsx)("em",{dangerouslySetInnerHTML:{__html:e.story_text}})}),/*#__PURE__*/(0,O.jsx)("p",{className:"card-text text-truncate",children:/*#__PURE__*/(0,O.jsx)("a",{href:e.url,target:"_blank",children:/*#__PURE__*/(0,O.jsx)(iQ,{item:e})})})]})},iJ=function({item:e,inModal:t}){let n=iU(e.author);return/*#__PURE__*/(0,O.jsx)("div",{className:"card text-dark bg-light mb-1 shadow rounded",children:/*#__PURE__*/(0,O.jsxs)("div",{className:"card-body",children:[/*#__PURE__*/(0,O.jsxs)("p",{children:[/*#__PURE__*/(0,O.jsx)("strong",{className:"card-title",children:e.title}),/*#__PURE__*/(0,O.jsx)("span",{className:"float-end",children:/*#__PURE__*/(0,O.jsx)(iV,{score:e.points})})]}),/*#__PURE__*/(0,O.jsxs)("p",{className:"card-subtitle mb-2 text-muted",children:[/*#__PURE__*/(0,O.jsx)("span",{ref:n,style:{cursor:"pointer"},children:e.author}),/*#__PURE__*/(0,O.jsx)("em",{className:"float-end",title:iF(e.created_at),children:iz(e.created_at)})]}),/*#__PURE__*/(0,O.jsx)(iG,{item:e}),/*#__PURE__*/(0,O.jsxs)("p",{children:[/*#__PURE__*/(0,O.jsx)(iW,{item:e}),/*#__PURE__*/(0,O.jsx)("span",{className:"float-end",children:/*#__PURE__*/(0,O.jsx)(iq,{item:e})})]})]})})};P("6SgHj");var D=(P("6SgHj"),P("6SgHj"),P("6SgHj")),iY={};iY=P("286J8");var D=P("6SgHj");// Shared state between server components and client components
const iX=()=>{},iZ=/*#__NOINLINE__*/iX(),i0=Object,i1=e=>e===iZ,i2=e=>"function"==typeof e,i3=(e,t)=>({...e,...t}),i4=e=>i2(e.then),i6=new WeakMap;// counter of the key
let i8=0;// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const i5=e=>{let t,n;let r=typeof e,i=e&&e.constructor,a=i==Date;if(i0(e)!==e||a||i==RegExp)t=a?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(// Object/function, not null/date/regexp. Use WeakMap to store the id first.
// If it's already hashed, directly return the result.
t=i6.get(e))return t;if(// Store the hash first for circular reference detection before entering the
// recursive `stableHash` calls.
// For other objects like set and map, we use this id directly as the hash.
t=++i8+"~",i6.set(e,t),i==Array){for(n=0,// Array.
t="@";n<e.length;n++)t+=i5(e[n])+",";i6.set(e,t)}if(i==i0){// Object, sort keys.
t="#";let r=i0.keys(e).sort();for(;!i1(n=r.pop());)i1(e[n])||(t+=n+":"+i5(e[n])+",");i6.set(e,t)}}return t},i9=new WeakMap,i7={},ae={},at="undefined",an=typeof window!=at,ar=typeof document!=at,ai=()=>an&&typeof window.requestAnimationFrame!=at,aa=(e,t)=>{let n=i9.get(e);return[// Getter
()=>!i1(t)&&e.get(t)||i7,// Setter
r=>{if(!i1(t)){let i=e.get(t);t in ae||(ae[t]=i),n[5](t,i3(i,r),i||i7)}},// Subscriber
n[6],// Get server cache snapshot
()=>!i1(t)&&t in ae?ae[t]:!i1(t)&&e.get(t)||i7]}// export { UNDEFINED, OBJECT, isUndefined, isFunction, mergeObjects, isPromiseLike }
;/**
 * Due to the bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a workaround, we always assume it's online on the first load, and change
 * the status upon `online` or `offline` events.
 */let ao=!0;// For node and React Native, `add/removeEventListener` doesn't exist on window.
const[as,al]=an&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[iX,iX],au={initFocus:e=>(ar&&document.addEventListener("visibilitychange",e),as("focus",e),()=>{ar&&document.removeEventListener("visibilitychange",e),al("focus",e)}),initReconnect:e=>{// revalidate on reconnected
let t=()=>{ao=!0,e()},n=()=>{ao=!1};return as("online",t),as("offline",n),()=>{al("online",t),al("offline",n)}}},ac=!/*@__PURE__*/r(D).useId,ad=!an||"Deno"in window,af=e=>ai()?window.requestAnimationFrame(e):setTimeout(e,1),ah=ad?D.useEffect:D.useLayoutEffect,ap="undefined"!=typeof navigator&&navigator.connection,am=!ad&&ap&&(["slow-2g","2g"].includes(ap.effectiveType)||ap.saveData),ag=e=>{if(i2(e))try{e=e()}catch(t){// dependencies not ready
e=""}// Use the original key as the argument of fetcher. This can be a string or an
// array of values.
let t=e;return[// If key is not falsy, or not an empty array, hash it.
e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?i5(e):"",t]};// Global timestamp.
let av=0;const ay=()=>++av;var ab={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function aw(...e){let[t,n,r,i]=e,a=i3({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),o=a.populateCache,s=a.rollbackOnError,l=a.optimisticData,u=!1!==a.revalidate,c=e=>"function"==typeof s?s(e):!1!==s,d=a.throwOnError;// If the second argument is a key filter, return the mutation results for all
// filtered keys.
if(i2(n)){let e=[],r=t.keys();for(let i of r)!/^\$(inf|sub)\$/.test(i)&&n(t.get(i)._k)&&e.push(i);return Promise.all(e.map(f))}return f(n);async function f(n){let i;// Serialize key
let[a]=ag(n);if(!a)return;let[s,f]=aa(t,a),[h,p,m,g]=i9.get(t),v=()=>{let e=h[a];return u&&(// Invalidate the key by deleting the concurrent request markers so new
// requests will not be deduped.
delete m[a],delete g[a],e&&e[0])?e[0](2).then(()=>s().data):s().data};// If there is no new data provided, revalidate the key with current state.
if(e.length<3)return v();let y=r,b=ay();p[a]=[b,0];let w=!i1(l),_=s(),k=_.data,S=_._c,E=i1(S)?k:S;if(w&&// When we set optimistic data, backup the current committedData data in `_c`.
f({data:l=i2(l)?l(E,k):l,_c:E}),i2(y))try{y=y(E)}catch(e){// If it throws an error synchronously, we shouldn't update the cache.
i=e}// `data` is a promise/thenable, resolve the final data first.
if(y&&i4(y)){// Check if other mutations have occurred since we've started this mutation.
// If there's a race we don't update cache or broadcast the change,
// just return the data.
if(// This means that the mutation is async, we need to check timestamps to
// avoid race conditions.
y=await y.catch(e=>{i=e}),b!==p[a][0]){if(i)throw i;return y}i&&w&&c(i)&&(// Rollback. Always populate the cache in this case but without
// transforming the data.
o=!0,// Reset data to be the latest committed data, and clear the `_c` value.
f({data:E,_c:iZ}))}// If we should write back the cache after request.
if(o&&!i){// Transform the result into data.
if(i2(o)){let e=o(y,E);f({data:e,error:iZ,_c:iZ})}else f({data:y,error:iZ,_c:iZ})}// Throw error or return data
if(// Reset the timestamp to mark the mutation has ended.
p[a][1]=ay(),// Update existing SWR Hooks' internal states:
Promise.resolve(v()).then(()=>{// The mutation and revalidation are ended, we can clear it since the data is
// not an optimistic value anymore.
f({_c:iZ})}),i){if(d)throw i;return}return y}}const a_=(e,t)=>{for(let n in e)e[n][0]&&e[n][0](t)},ak=(e,t)=>{// The global state for a specific provider will be used to deduplicate
// requests and store listeners. As well as a mutate function that is bound to
// the cache.
// The provider's global state might be already initialized. Let's try to get the
// global state associated with the provider first.
if(!i9.has(e)){let n=i3(au,t),r={},i=aw.bind(iZ,e),a=iX,o={},s=(e,t)=>{let n=o[e]||[];return o[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},l=(t,n,r)=>{e.set(t,n);let i=o[t];if(i)for(let e of i)e(n,r)},u=()=>{if(!i9.has(e)&&(// Update the state if it's new, or if the provider has been extended.
i9.set(e,[r,{},{},{},i,l,s]),!ad)){// When listening to the native events for auto revalidations,
// we intentionally put a delay (setTimeout) here to make sure they are
// fired after immediate JavaScript executions, which can be
// React's state updates.
// This avoids some unnecessary revalidations such as
// https://github.com/vercel/swr/issues/1680.
let t=n.initFocus(setTimeout.bind(iZ,a_.bind(iZ,r,0))),i=n.initReconnect(setTimeout.bind(iZ,a_.bind(iZ,r,1)));a=()=>{t&&t(),i&&i(),// When un-mounting, we need to remove the cache provider from the state
// storage too because it's a side-effect. Otherwise, when re-mounting we
// will not re-register those event listeners.
i9.delete(e)}}};// This is a new provider, we need to initialize it and setup DOM events
// listeners for `focus` and `reconnect` actions.
// We might want to inject an extra layer on top of `provider` in the future,
// such as key serialization, auto GC, etc.
// For now, it's just a `Map` interface without any modifications.
return u(),[e,i,u,a]}return[e,i9.get(e)[4]]},[aS,aE]=ak(new Map),aI=i3({// events
onLoadingSlow:iX,onSuccess:iX,onError:iX,onErrorRetry:(e,t,n,r,i)=>{let a=n.errorRetryCount,o=i.retryCount,s=~~((Math.random()+.5)*(1<<(o<8?o:8)))*n.errorRetryInterval;(i1(a)||!(o>a))&&setTimeout(r,s,i)},onDiscarded:iX,// switches
revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,// timeouts
errorRetryInterval:am?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:am?5e3:3e3,compare:(e,t)=>i5(e)==i5(t),isPaused:()=>!1,cache:aS,mutate:aE,fallback:{}},{isOnline:()=>ao,isVisible:()=>{let e=ar&&document.visibilityState;return i1(e)||"hidden"!==e}}),aC=(e,t)=>{// Need to create a new object to avoid mutating the original here.
let n=i3(e,t);// If two configs are provided, merge their `use` and `fallback` options.
if(t){let{use:r,fallback:i}=e,{use:a,fallback:o}=t;r&&a&&(n.use=r.concat(a)),i&&o&&(n.fallback=i3(i,o))}return n},aT=(0,D.createContext)({}),ax=an&&window.__SWR_DEVTOOLS_USE__,aN=ax?window.__SWR_DEVTOOLS_USE__:[],aP=e=>i2(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],aR=()=>i3(aI,(0,D.useContext)(aT)),aO=aN.concat(e=>(t,n,r)=>{// fetcher might be a sync function, so this should not be an async function
    let i=n&&((...e)=>{let[r]=ag(t),[,,,i]=i9.get(aS);if(r.startsWith("$inf$"))// handling of the PRELOAD cache happens there.
    return n(...e);let a=i[r];return i1(a)?n(...e):(delete i[r],a)});return e(t,i,r)}),aL=(e,t,n)=>{let r=t[e]||(t[e]=[]);return r.push(n),()=>{let e=r.indexOf(n);e>=0&&(// O(1): faster than splice
r[e]=r[r.length-1],r.pop())}};ax&&(window.__SWR_DEVTOOLS_REACT__=/*@__PURE__*/r(D));/// <reference types="react/experimental" />
const aD=/*@__PURE__*/r(D).use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),aA={dedupe:!0};i0.defineProperty(e=>{let{value:t}=e,n=(0,D.useContext)(aT),r=i2(t),i=(0,D.useMemo)(()=>r?t(n):t,[r,n,t]),a=(0,D.useMemo)(()=>r?i:aC(n,i),[r,n,i]),o=i&&i.provider,s=(0,D.useRef)(iZ);o&&!s.current&&(s.current=ak(o(a.cache||aS),i));let l=s.current;return l&&(a.cache=l[0],a.mutate=l[1]),// Unsubscribe events.
ah(()=>{if(l)return l[2]&&l[2](),l[3]},[]),(0,D.createElement)(aT.Provider,i3(e,{value:a}))},"defaultValue",{value:aI});/**
 * A hook to fetch data.
 *
 * @link https://swr.vercel.app
 * @example
 * ```jsx
 * import useSWR from 'swr'
 * function Profile() {
 *   const { data, error, isLoading } = useSWR('/api/user', fetcher)
 *   if (error) return <div>failed to load</div>
 *   if (isLoading) return <div>loading...</div>
 *   return <div>hello {data.name}!</div>
 * }
 * ```
 */const aM=(m=(e,t,n)=>{let{cache:r,compare:i,suspense:a,fallbackData:o,revalidateOnMount:s,revalidateIfStale:l,refreshInterval:u,refreshWhenHidden:c,refreshWhenOffline:d,keepPreviousData:f}=n,[h,p,m,g]=i9.get(r),[v,y]=ag(e),b=(0,D.useRef)(!1),w=(0,D.useRef)(!1),_=(0,D.useRef)(v),k=(0,D.useRef)(t),S=(0,D.useRef)(n),E=()=>S.current,I=()=>E().isVisible()&&E().isOnline(),[C,T,x,N]=aa(r,v),P=(0,D.useRef)({}).current,R=i1(o)?n.fallback[v]:o,O=(e,t)=>{for(let n in P)if("data"===n){if(!i(e[n],t[n])&&(!i1(e[n])||!i(H,t[n])))return!1}else if(t[n]!==e[n])return!1;return!0},L=(0,D.useMemo)(()=>{let e=!!v&&!!t&&(i1(s)?!E().isPaused()&&!a&&(!!i1(l)||l):s),n=t=>{// We only select the needed fields from the state.
let n=i3(t);return(delete n._k,e)?{isValidating:!0,isLoading:!0,...n}:n},r=C(),i=N(),o=n(r),u=r===i?o:n(i),c=o;return[()=>{let e=n(C()),t=O(e,c);return t?(// Mentally, we should always return the `memorizedSnapshot` here
// as there's no change between the new and old snapshots.
// However, since the `isEqual` function only compares selected fields,
// the values of the unselected fields might be changed. That's
// simply because we didn't track them.
// To support the case in https://github.com/vercel/swr/pull/2576,
// we need to update these fields in the `memorizedSnapshot` too
// with direct mutations to ensure the snapshot is always up-to-date
// even for the unselected fields, but only trigger re-renders when
// the selected fields are changed.
c.data=e.data,c.isLoading=e.isLoading,c.isValidating=e.isValidating,c.error=e.error,c):(c=e,e)},()=>u];// eslint-disable-next-line react-hooks/exhaustive-deps
},[r,v]),A=(0,iY.useSyncExternalStore)((0,D.useCallback)(e=>x(v,(t,n)=>{O(n,t)||e()}),[r,v]),L[0],L[1]),M=!b.current,j=h[v]&&h[v].length>0,U=A.data,z=i1(U)?R:U,F=A.error,V=(0,D.useRef)(z),H=f?i1(U)?V.current:U:z,$=// if a key already has revalidators and also has error, we should not trigger revalidation
(!j||!!i1(F))&&(M&&!i1(s)?s:!E().isPaused()&&(a?!i1(z)&&l:i1(z)||l)),B=!!(v&&t&&M&&$),W=i1(A.isValidating)?B:A.isValidating,K=i1(A.isLoading)?B:A.isLoading,q=(0,D.useCallback)(async e=>{let t,r;let a=k.current;if(!v||!a||w.current||E().isPaused())return!1;let o=!0,s=e||{},l=!m[v]||!s.dedupe,u=()=>ac?!w.current&&v===_.current&&b.current:v===_.current,c={isValidating:!1,isLoading:!1},d=()=>{T(c)},f=()=>{// Check if it's still the same request before deleting it.
let e=m[v];e&&e[1]===r&&delete m[v]},g={isValidating:!0};i1(C().data)&&(g.isLoading=!0);try{// If there're other ongoing request(s), started after the current one,
// we need to ignore the current one to avoid possible race conditions:
//   req1------------------>res1        (current one)
//        req2---------------->res2
// the request that fired later will always be kept.
// The timestamp maybe be `undefined` or a number
if(l&&(T(g),n.loadingTimeout&&i1(C().data)&&setTimeout(()=>{o&&u()&&E().onLoadingSlow(v,n)},n.loadingTimeout),// Start the request and save the timestamp.
// Key must be truthy if entering here.
m[v]=[a(y),ay()]),[t,r]=m[v],t=await t,l&&// deduplication interval.
setTimeout(f,n.dedupingInterval),!m[v]||m[v][1]!==r)return l&&u()&&E().onDiscarded(v),!1;// Clear error.
c.error=iZ;// If there're other mutations(s), that overlapped with the current revalidation:
// case 1:
//   req------------------>res
//       mutate------>end
// case 2:
//         req------------>res
//   mutate------>end
// case 3:
//   req------------------>res
//       mutate-------...---------->
// we have to ignore the revalidation result (res) because it's no longer fresh.
// meanwhile, a new revalidation should be triggered when the mutation ends.
let e=p[v];if(!i1(e)&&// case 1
(r<=e[0]||// case 2
r<=e[1]||// case 3
0===e[1]))return d(),l&&u()&&E().onDiscarded(v),!1;// Deep compare with the latest state to avoid extra re-renders.
// For local state, compare and assign.
let s=C().data;// Since the compare fn could be custom fn
// cacheData might be different from newData even when compare fn returns True
c.data=i(s,t)?s:t,l&&u()&&E().onSuccess(t,v,n)}catch(n){f();let e=E(),{shouldRetryOnError:t}=e;// Not paused, we continue handling the error. Otherwise, discard it.
!e.isPaused()&&(// Get a new error, don't use deep comparison for errors.
c.error=n,l&&u()&&(e.onError(n,v,e),(!0===t||i2(t)&&t(n))&&I()&&// refocusing or reconnecting.
// When retrying, deduplication is always enabled.
e.onErrorRetry(n,v,e,e=>{let t=h[v];t&&t[0]&&t[0](ab.ERROR_REVALIDATE_EVENT,e)},{retryCount:(s.retryCount||0)+1,dedupe:!0})))}return(// Mark loading as stopped.
o=!1,// Update the current hook's state.
d(),!0)},// the deps array.
//
// FIXME:
// `fn` and `config` might be changed during the lifecycle,
// but they might be changed every render like this.
// `useSWR('key', () => fetch('/api/'), { suspense: true })`
// So we omit the values from the deps array
// even though it might cause unexpected behaviors.
// eslint-disable-next-line react-hooks/exhaustive-deps
[v,r]),Q=(0,D.useCallback)((...e)=>aw(r,_.current,...e),[]);// In Suspense mode, we can't return the empty `data` state.
// If there is an `error`, the `error` needs to be thrown to the error boundary.
// If there is no `error`, the `revalidation` promise needs to be thrown to
// the suspense boundary.
if(ah(()=>{k.current=t,S.current=n,i1(U)||(V.current=U)}),ah(()=>{if(!v)return;let e=q.bind(iZ,aA),t=0,n=aL(v,h,(n,r={})=>{if(n==ab.FOCUS_EVENT){let n=Date.now();E().revalidateOnFocus&&n>t&&I()&&(t=n+E().focusThrottleInterval,e())}else if(n==ab.RECONNECT_EVENT)E().revalidateOnReconnect&&I()&&e();else if(n==ab.MUTATE_EVENT)return q();else if(n==ab.ERROR_REVALIDATE_EVENT)return q(r)});return(// Mark the component as mounted and update corresponding refs.
w.current=!1,_.current=v,b.current=!0,// Keep the original key in the cache.
T({_k:y}),$&&(i1(z)||ad?e():af(e)),()=>{// Mark it as unmounted.
w.current=!0,n()})},[v]),ah(()=>{let e;function t(){// Use the passed interval
// ...or invoke the function with the updated data to get the interval
let t=i2(u)?u(C().data):u;// We only start the next interval if `refreshInterval` is not 0, and:
// - `force` is true, which is the start of polling
// - or `timer` is not 0, which means the effect wasn't canceled
t&&-1!==e&&(e=setTimeout(n,t))}function n(){// Check if it's OK to execute:
// Only revalidate when the page is visible, online, and not errored.
!C().error&&(c||E().isVisible())&&(d||E().isOnline())?q(aA).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[u,c,d,v]),// Display debug info in React DevTools.
(0,D.useDebugValue)(H),a&&i1(z)&&v){// SWR should throw when trying to use Suspense on the server with React 18,
// without providing any initial data. See:
// https://github.com/vercel/swr/issues/1832
if(!ac&&ad)throw Error("Fallback data is required when using suspense in SSR.");// Always update fetcher and config refs even with the Suspense mode.
k.current=t,S.current=n,w.current=!1;let e=g[v];if(!i1(e)){let t=Q(e);aD(t)}if(i1(F)){let e=q(aA);i1(H)||(e.status="fulfilled",e.value=!0),aD(e)}else throw F}return{mutate:Q,get data(){return P.data=!0,H},get error(){return P.error=!0,F},get isValidating(){return P.isValidating=!0,W},get isLoading(){return P.isLoading=!0,K}}},function(...e){// Get the default and inherited configuration.
let t=aR(),[n,r,i]=aP(e),a=aC(t,i),o=m,{use:s}=a,l=(s||[]).concat(aO);for(let e=l.length;e--;)o=l[e](o);return o(n,r||a.fetcher||null,a)});P("6SgHj");var D=P("6SgHj"),aj=[0],aU=(g=new Map,{getObserver:function(e){var t=e.root,n=e.rootMargin,r=e.threshold,i=g.get(t);i||(i=new Map,g.set(t,i));var a=JSON.stringify({rootMargin:n,threshold:r}),o=i.get(a);if(!o){var s=new Map;o={observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=s.get(e.target);null==t||t(e)})},{root:t,rootMargin:n,threshold:r}),entryCallbacks:s},i.set(a,o)}return{observe:function(e,t){var n,r;null==(n=o)||n.entryCallbacks.set(e,t),null==(r=o)||r.observer.observe(e)},unobserve:function(e){var t,n;null==(t=o)||t.entryCallbacks.delete(e),null==(n=o)||n.observer.unobserve(e)}}}});function az(){return(az=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const aF=function(){var e,t,n,r,i,a,o,s,l,u,c,d,f,h,p,m;let[g,{isVisible:v,wasEverVisible:y}]=(c=(e=(0,D.useRef)(null),t=(0,D.useRef)(null),n=(0,D.useRef)(null),i=(r=(0,D.useState)())[0],a=r[1],o=(0,D.useCallback)(function(){var r=e.current;if(!r){a(void 0);return}var i=aU.getObserver({root:t.current,rootMargin:"0px",threshold:aj});i.observe(r,function(e){a(e)}),n.current=i},["0px",aj]),s=(0,D.useCallback)(function(){var t=n.current,r=e.current;r&&(null==t||t.unobserve(r)),n.current=null},[]),u=[(0,D.useCallback)(function(t){s(),e.current=t,o()},[o,s]),{entry:i,rootRef:(0,D.useCallback)(function(e){s(),t.current=e,o()},[o,s])}])[0],f=!!(null==(l=(d=u[1]).entry)?void 0:l.isIntersecting),p=(h=(0,D.useState)(f))[0],m=h[1],f&&!p&&m(!0),[c,az({},d,{isVisible:f,wasEverVisible:p})]);return{ref:g,isVisible:v,wasEverVisible:y}},aV=function({spinner:e,children:t}){let{ref:n,isVisible:r,wasEverVisible:i}=aF();return/*#__PURE__*/(0,O.jsxs)("span",{ref:n,children:[!r&&!i&&e,(r||i)&&t]})},aH=e=>fetch(e).then(e=>e.json()),a$=function(){return/*#__PURE__*/(0,O.jsx)("div",{className:"spinner-grow spinner-grow-sm me-5"})},aB=function({item:e,isItemSelected:t,setSelected:n}){let{data:r,error:i}=aM(`https://hacker-news.firebaseio.com/v0/item/${e}.json`,aH,{dedupingInterval:6e4});return void 0!==i?/*#__PURE__*/(0,O.jsx)("span",{className:"badge rounded-pill bg-danger",children:"error"}):void 0===r?/*#__PURE__*/(0,O.jsx)(a$,{}):t?/*#__PURE__*/(0,O.jsx)("span",{className:"badge rounded-pill bg-secondary",children:r.by}):/*#__PURE__*/(0,O.jsx)("a",{href:`https://news.ycombinator.com/item?id=${e}`,className:"badge rounded-pill bg-light text-dark",onClick:function(e){e.preventDefault(),n()},children:r.by})},aW=function({kids:e,selectComment:t}){let[n,i]=/*@__PURE__*/r(D).useState(null),a=e.map(function(e){return/*#__PURE__*/(0,O.jsx)(aV,{spinner:/*#__PURE__*/(0,O.jsx)(a$,{}),children:/*#__PURE__*/(0,O.jsx)(aB,{item:e,isItemSelected:e===n,setSelected:function(){i(e),t(e)}})},e)});return/*#__PURE__*/(0,O.jsx)("div",{className:"text-muted",style:{overflowX:"auto",whiteSpace:"nowrap"},children:a})};P("6SgHj");const aK=(...e)=>fetch(...e).then(e=>e.json()),aq=function(e){return aM(`https://hacker-news.firebaseio.com/v0/item/${e}.json`,aK)},aQ=function({item:e}){return void 0!==e.text?/*#__PURE__*/(0,O.jsx)("em",{dangerouslySetInnerHTML:{__html:e.text}}):/*#__PURE__*/(0,O.jsx)("p",{className:"card-text text-truncate",children:/*#__PURE__*/(0,O.jsx)("a",{href:e.url,target:"_blank",children:e.url})})},aG=function({item:e}){return/*#__PURE__*/(0,O.jsxs)("a",{href:`https://news.ycombinator.com/item?id=${e.id}`,target:"_blank",className:"btn btn-primary btn-sm position-relative me-4 float-end",children:[/*#__PURE__*/(0,O.jsx)("i",{className:"bi bi-people-fill"}),/*#__PURE__*/(0,O.jsxs)("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",children:[e.descendants,/*#__PURE__*/(0,O.jsx)("span",{className:"visually-hidden",children:"comments"})]})]})},aJ=function({item:e}){let{data:t,error:n}=aq(e),i=iU(t?.by),[a,o]=/*@__PURE__*/r(D).useState(null);return(/*@__PURE__*/r(D).useEffect(function(){o(null)},[e]),void 0!==n)?/*#__PURE__*/(0,O.jsx)("div",{className:"alert alert-danger",role:"alert",children:n.message}):void 0===t?/*#__PURE__*/(0,O.jsx)(iB,{}):/*#__PURE__*/(0,O.jsxs)(/*@__PURE__*/r(D).Fragment,{children:[/*#__PURE__*/(0,O.jsx)("div",{className:"card text-dark bg-light mb-1 shadow rounded",children:/*#__PURE__*/(0,O.jsxs)("div",{className:"card-body",children:[/*#__PURE__*/(0,O.jsxs)("h6",{className:"card-subtitle mb-2 text-muted",children:[/*#__PURE__*/(0,O.jsx)("span",{ref:i,children:t.by}),/*#__PURE__*/(0,O.jsx)("em",{className:"float-end",title:iF(1e3*t.time),children:iz(1e3*t.time)})]}),/*#__PURE__*/(0,O.jsx)(aQ,{item:t}),/*#__PURE__*/(0,O.jsx)("p",{children:/*#__PURE__*/(0,O.jsxs)("a",{href:`https://news.ycombinator.com/item?id=${t.id}`,target:"_blank",className:"float-end",children:[void 0!==t.kids?t.kids.length:0," Comments"]})}),/*#__PURE__*/(0,O.jsx)(aW,{kids:t.kids||[],selectComment:o})]})}),null!==a&&/*#__PURE__*/(0,O.jsx)(aJ,{item:a})]})},aY=function({data:e}){let t=iU(e.by),[n,i]=/*@__PURE__*/r(D).useState(null);return/*#__PURE__*/(0,O.jsxs)(O.Fragment,{children:[/*#__PURE__*/(0,O.jsx)("div",{className:"card text-dark bg-light mb-1 shadow rounded",children:/*#__PURE__*/(0,O.jsxs)("div",{className:"card-body",children:[/*#__PURE__*/(0,O.jsxs)("p",{children:[/*#__PURE__*/(0,O.jsx)("strong",{className:"card-title",children:e.title}),/*#__PURE__*/(0,O.jsx)("span",{className:"float-end",children:/*#__PURE__*/(0,O.jsx)(iV,{score:e.score})})]}),/*#__PURE__*/(0,O.jsxs)("p",{className:"card-subtitle mb-2 text-muted",children:[/*#__PURE__*/(0,O.jsx)("span",{ref:t,style:{cursor:"pointer"},children:e.by}),/*#__PURE__*/(0,O.jsx)("em",{className:"float-end",title:iF(1e3*e.time),children:iz(1e3*e.time)})]}),/*#__PURE__*/(0,O.jsx)(aQ,{item:e}),/*#__PURE__*/(0,O.jsxs)("p",{children:[/*#__PURE__*/(0,O.jsx)(iW,{item:e}),/*#__PURE__*/(0,O.jsx)(aG,{item:e})]}),/*#__PURE__*/(0,O.jsx)(aW,{kids:e.kids,selectComment:i})]})}),null!==n&&/*#__PURE__*/(0,O.jsx)(aJ,{item:n})]})},aX=function(){let{commentId:e}=/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */function(){let{matches:e}=D.useContext(ei),t=e[e.length-1];return t?t.params:{}}(),{data:t,error:n}=aq(e);return void 0!==n?/*#__PURE__*/(0,O.jsx)("div",{className:"alert alert-danger",role:"alert",children:n.message}):void 0===t?/*#__PURE__*/(0,O.jsx)(iB,{}):/*#__PURE__*/(0,O.jsx)(aY,{data:t})},aZ=function(){let e=async function(e,t,n){let r=new URLSearchParams({query:"",numericFilters:`created_at_i>${e},created_at_i<=${t}`,hitsPerPage:`${n}`}),i=`https://hn.algolia.com/api/v1/search?${r.toString()}`,a=await fetch(i);if(!a.ok)throw Error("An error occurred while fetching the data.");return(await a.json()).hits};return{getData:function(){return async()=>{let t=Date.now()/1e3,n=await Promise.all([0,1,2,3,4,5,6].map(n=>e(t-(7-n)*86400,t-(6-n)*86400,2**n)));return n.reduce((e,t)=>[...e,...t],[]).sort((e,t)=>e.points<t.points?1:e.points>t.points?-1:0)}}}}(),a0=function({items:e}){let t=e.map(function(e){return/*#__PURE__*/(0,O.jsx)(iJ,{item:e,inModal:!1},e.objectID)});return/*#__PURE__*/(0,O.jsx)(O.Fragment,{children:t})},a1=function(){let{data:e,error:t}=aM("HN_ITEMS",aZ.getData(),{dedupingInterval:6e4});return void 0!==t?/*#__PURE__*/(0,O.jsx)("div",{className:"alert alert-danger",role:"alert",children:t.message}):void 0===e?/*#__PURE__*/(0,O.jsx)(iB,{}):/*#__PURE__*/(0,O.jsx)(a0,{items:e})},a2=function(){let e=iH();return/*#__PURE__*/(0,O.jsx)(i$,{user:e})},a3=function(){let e="navbarCollapse";return/*#__PURE__*/(0,O.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:/*#__PURE__*/(0,O.jsxs)("div",{className:"container-fluid",children:[/*#__PURE__*/(0,O.jsxs)("a",{className:"navbar-brand",href:"/",children:[/*#__PURE__*/(0,O.jsx)("strong",{style:{color:"#ff6600"},children:"HN"}),"ews ",/*#__PURE__*/(0,O.jsx)("sub",{children:eT.version})]}),/*#__PURE__*/(0,O.jsx)("button",{className:"navbar-toggler","data-bs-toggle":"collapse","data-bs-target":`#${e}`,children:/*#__PURE__*/(0,O.jsx)("span",{className:"navbar-toggler-icon"})}),/*#__PURE__*/(0,O.jsxs)("div",{className:"collapse navbar-collapse",id:e,children:[/*#__PURE__*/(0,O.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"}),/*#__PURE__*/(0,O.jsx)("form",{className:"d-flex",children:/*#__PURE__*/(0,O.jsx)(a2,{})})]})]})})};v(document.getElementById("app")).render(/*#__PURE__*/(0,O.jsx)(function(){return/*#__PURE__*/(0,O.jsxs)(O.Fragment,{children:[/*#__PURE__*/(0,O.jsx)(a3,{}),/*#__PURE__*/(0,O.jsx)("div",{className:"container",style:{paddingTop:"1em"},children:/*#__PURE__*/(0,O.jsx)(eS,{children:/*#__PURE__*/(0,O.jsxs)(ey,{children:[/*#__PURE__*/(0,O.jsx)(eg,{path:"/:commentId",element:/*#__PURE__*/(0,O.jsx)(aX,{})}),/*#__PURE__*/(0,O.jsx)(eg,{path:"/",element:/*#__PURE__*/(0,O.jsx)(a1,{})})]})})})]})},{}));