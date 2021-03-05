/*! For license information please see component---src-pages-events-js-bd086f7888dd7e15e57b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2mql":function(e,t,n){"use strict";var r=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function i(e){return r.isMemo(e)?l:s[e.$$typeof]||o}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=l;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(p){var o=f(n);o&&o!==p&&e(t,o,r)}var l=u(n);d&&(l=l.concat(d(n)));for(var s=i(t),y=i(n),h=0;h<l.length;++h){var v=l[h];if(!(a[v]||r&&r[v]||y&&y[v]||s&&s[v])){var g=m(n,v);try{c(t,v,g)}catch(b){}}}}return t}},F2aA:function(e,t,n){e.exports={Event:"styles-module--Event--3TWD0",view_emphasized:"styles-module--view_emphasized--3WBoq",Header:"styles-module--Header--2gXcE",HeaderContent:"styles-module--HeaderContent--HE4vZ",HeaderTitle:"styles-module--HeaderTitle--1fSFw",HeaderSubTitle:"styles-module--HeaderSubTitle--NPX0U",Logo:"styles-module--Logo--1r7i8",Content:"styles-module--Content--33j0L",Date:"styles-module--Date--bwuWG",Location:"styles-module--Location--1D0rF",AddToCalendar:"styles-module--AddToCalendar--3ORjk"}},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},UV5A:function(e,t,n){"use strict";n.r(t);var r=n("zLVn"),o=n("q1tI"),a=n.n(o),l=n("nn5T"),s=n("vrFN"),i=n("Qs7Y"),c=n("TSYQ"),u=n.n(c),d=n("F2aA"),m=n.n(d);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=n("JX7q"),y=n("dI71"),h=n("TOwV"),v=n("2mql"),g=n.n(v);function b(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var _=a.a.createContext();var S={initialChunks:{}};var E=function(e){return e};function w(e){var t=e.defaultResolveComponent,n=void 0===t?E:t,o=e.render,l=e.onLoad;function s(e,t){void 0===t&&(t={});var s=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),i={};function c(e){return t.cacheKey?t.cacheKey(e):s.resolve?s.resolve(e):"static"}function u(e,r,o){var a=t.resolveComponent?t.resolveComponent(e,r):n(e);if(t.resolveComponent&&!Object(h.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return g()(o,a,{preload:!0}),a}var d,m=function(e){function n(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:c(n)},b(!n.__chunkExtractor||s.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(s.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(s.chunkName(n))),Object(p.a)(r)):(!1!==t.ssr&&(s.isReady&&s.isReady(n)||s.chunkName&&S.initialChunks[s.chunkName(n)])&&r.loadSync(),r)}Object(y.a)(n,e),n.getDerivedStateFromProps=function(e,t){var n=c(e);return f({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var a=n.prototype;return a.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},a.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},a.componentWillUnmount=function(){this.mounted=!1},a.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},a.getCacheKey=function(){return c(this.props)},a.getCache=function(){return i[this.getCacheKey()]},a.setCache=function(e){void 0===e&&(e=void 0),i[this.getCacheKey()]=e},a.triggerOnLoad=function(){var e=this;l&&setTimeout((function(){l(e.state.result,e.props)}))},a.loadSync=function(){if(this.state.loading)try{var e=u(s.requireSync(this.props),this.props,E);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:s.resolve(this.props),chunkName:s.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},a.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=u(t,e.props,{Loadable:E});e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},a.resolveAsync=function(){var e=this,t=this.props,n=(t.__chunkExtractor,t.forwardedRef,Object(r.a)(t,["__chunkExtractor","forwardedRef"])),o=this.getCache();return o||((o=s.requireAsync(n)).status="PENDING",this.setCache(o),o.then((function(){o.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:s.resolve(e.props),chunkName:s.chunkName(e.props),error:t?t.message:t}),o.status="REJECTED"}))),o},a.render=function(){var e=this.props,n=e.forwardedRef,a=e.fallback,l=(e.__chunkExtractor,Object(r.a)(e,["forwardedRef","fallback","__chunkExtractor"])),s=this.state,i=s.error,c=s.loading,u=s.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(i)throw i;var d=a||t.fallback||null;return c?d:o({fallback:d,result:u,options:t,props:f({},l,{ref:n})})},n}(a.a.Component),v=(d=m,function(e){return a.a.createElement(_.Consumer,null,(function(t){return a.a.createElement(d,Object.assign({__chunkExtractor:t},e))}))}),E=a.a.forwardRef((function(e,t){return a.a.createElement(v,Object.assign({forwardedRef:t},e))}));return E.preload=function(e){s.requireAsync(e)},E.load=function(e){return s.requireAsync(e)},E}return{loadable:s,lazy:function(e,t){return s(e,f({},t,{suspense:!0}))}}}var C=w({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return a.a.createElement(t,n)}}),T=C.loadable,k=C.lazy,O=w({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),N=O.loadable,x=O.lazy;var P=T;P.lib=N,k.lib=x;var $=P,A=$((function(){return Promise.all([n.e(0),n.e(4),n.e(15)]).then(n.bind(null,"AU0j"))})),D=$((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"u6M9"))})),R=new Intl.DateTimeFormat("en-GB",{month:"long"}),j=new Intl.DateTimeFormat("en-GB",{day:"numeric"}),F=new Intl.DateTimeFormat("en-GB",{year:"numeric"}),L=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric"}),q=function(e){var t,n=e.data,r=e.emphasized,l=e.showAddToCalendar,s=n.title,i=n.subTitle,c=n.startDate,d=n.endDate,f=n.location,p=n.logo,y=n.url,h=n.recordingUrl,v=n.external,g=Object(o.useState)(!1),b=g[0],_=g[1],S=Object(o.useRef)(),E=Object(o.useState)(!1),w=E[0],C=E[1],T=new Date(c),k=new Date(d);if(c.match(/^\d{4}\/\d{2}\/\d{2}$/)){var O="";T.getDate()!=k.getDate()&&(O=T.getMonth()!==k.getMonth()?" - "+R.format(k)+" "+j.format(k):" - "+j.format(k)),t=R.format(T)+" "+j.format(T)+O+", "+F.format(T)}else t=R.format(T)+" "+j.format(T)+", "+F.format(T)+", "+L.format(T);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:u()(m.a.Event,r?m.a.view_emphasized:null),onClick:function(){v?window.open(y||h,"_blank").focus():_(!0)}},a.a.createElement("div",{className:m.a.Header},a.a.createElement("div",{className:m.a.HeaderContent},a.a.createElement("div",{className:m.a.HeaderTitle},s),a.a.createElement("div",{className:m.a.HeaderSubTitle},i)),p?a.a.createElement("div",{className:m.a.Logo},a.a.createElement("img",{src:p})):null),a.a.createElement("div",{className:m.a.Content},a.a.createElement("div",{className:m.a.Date},t),a.a.createElement("div",{className:m.a.Location},f)),l?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:m.a.AddToCalendar,onClick:function(e){C((function(e){return!e})),e.stopPropagation()},ref:S},"+ Add to calendar"),a.a.createElement(D,{event:n,isOpen:w,targetRef:S.current,onAfterClose:function(){C(!1)}})):null,null),v?null:a.a.createElement(A,{isOpen:b,onAfterClose:function(){_(!1)},showAddToCalendar:l,data:n}))};q.defaultProps={emphasized:!1};var z=q,M=n("aPQa"),H=n.n(M),I=function(e){var t=e.column,n=e.children;return a.a.createElement("div",{className:u()(H.a.Grid,H.a["column_"+t])},n)};t.default=function(e){var t=e.data,n=t.eventsJson,o=n.title,c=n.upcomingTitle,u=n.pastTitle,d=function(e){return e.map((function(e){var t=e.node,n=t.frontmatter,o=n.logo,a=n.speakers,l=void 0===a?[]:a,s=Object(r.a)(n,["logo","speakers"]);return Object.assign({},s,{logo:o&&o.publicURL||null,description:t.html,speakers:l.map((function(e){var t=e.frontmatter,n=t.photo,o=Object(r.a)(t,["photo"]);return Object.assign({},o,{photo:n&&n.publicURL||null,description:e.html})}))})}))}(t.allMarkdownRemark.edges),m=d.findIndex((function(e){return(new Date).getTime()>new Date(e.startDate).getTime()})),f=d.slice(0,m).reverse(),p=d.slice(m);return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,{title:o}),a.a.createElement(l.a,null,a.a.createElement(i.a,{size:"1",style:{marginBottom:"var(--default-margin-half)"}},c),a.a.createElement(I,{column:"2"},f.map((function(e,t){return a.a.createElement(z,{key:t,emphasized:!0,showAddToCalendar:!0,data:e})}))),a.a.createElement("div",{style:{marginTop:"80px"}},a.a.createElement(i.a,{size:"2",style:{marginBottom:"var(--default-margin-half)"}},u),a.a.createElement(I,{column:"3"},p.map((function(e,t){return a.a.createElement(z,{key:t,data:e})}))))))}},aPQa:function(e,t,n){e.exports={Grid:"styles-module--Grid--42MG0",column_2:"styles-module--column_2--38q6u",column_3:"styles-module--column_3--blfTQ"}},nn5T:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("TSYQ"),l=n.n(a),s=n("xp5T"),i=n.n(s),c=(n("SGh4"),function(e){var t=e.children,n=e.hasPadding,r=e.color,a=e.align;return o.a.createElement("div",{className:l()(i.a.Section,r?i.a["color_"+r]:null)},o.a.createElement("div",{className:l()(i.a.SectionContent,a?i.a["align_"+a]:null,n?null:i.a.no_padding)},t))});c.defaultProps={color:null,align:null,hasPadding:!0},t.a=c},qT12:function(e,t,n){"use strict";var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,m=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,_=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case d:case m:case l:case i:case s:case p:return e;default:switch(e=e&&e.$$typeof){case u:case f:case v:case h:case c:return e;default:return t}}case a:return t}}}function w(e){return E(e)===m}t.AsyncMode=d,t.ConcurrentMode=m,t.ContextConsumer=u,t.ContextProvider=c,t.Element=o,t.ForwardRef=f,t.Fragment=l,t.Lazy=v,t.Memo=h,t.Portal=a,t.Profiler=i,t.StrictMode=s,t.Suspense=p,t.isAsyncMode=function(e){return w(e)||E(e)===d},t.isConcurrentMode=w,t.isContextConsumer=function(e){return E(e)===u},t.isContextProvider=function(e){return E(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return E(e)===f},t.isFragment=function(e){return E(e)===l},t.isLazy=function(e){return E(e)===v},t.isMemo=function(e){return E(e)===h},t.isPortal=function(e){return E(e)===a},t.isProfiler=function(e){return E(e)===i},t.isStrictMode=function(e){return E(e)===s},t.isSuspense=function(e){return E(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===l||e===m||e===i||e===s||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===h||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f||e.$$typeof===b||e.$$typeof===_||e.$$typeof===S||e.$$typeof===g)},t.typeOf=E},xp5T:function(e,t,n){e.exports={Section:"styles-module--Section--2msLZ",color_lightblue:"styles-module--color_lightblue--iZCLv",SectionContent:"styles-module--SectionContent--2N40e",no_padding:"styles-module--no_padding--1IpKa",align_center:"styles-module--align_center--2qbFY",Section__title:"styles-module--Section__title--2Fxw0",size_1:"styles-module--size_1--3FZ21",size_2:"styles-module--size_2--2aSvM",Section__bar:"styles-module--Section__bar--2hl7Y",bar__item:"styles-module--bar__item--25d1g",mod_features:"styles-module--mod_features--3yAiS",mod_startcoding:"styles-module--mod_startcoding--2V69b",Section__editor:"styles-module--Section__editor--wRssY",mod_documentation:"styles-module--mod_documentation--3n6Bc",mod_comparison:"styles-module--mod_comparison--3TE6y",Section__text:"styles-module--Section__text--2p2e_",mod_guidelines:"styles-module--mod_guidelines--201Bb",mod_guidelines_intro:"styles-module--mod_guidelines_intro--1QYIm",mod_releases:"styles-module--mod_releases--2AN3d",mod_releasesHeader:"styles-module--mod_releasesHeader--3uYAo",mod_consume:"styles-module--mod_consume--CpZa4",mod_allreleases:"styles-module--mod_allreleases--22cy0"}}}]);
//# sourceMappingURL=component---src-pages-events-js-bd086f7888dd7e15e57b.js.map