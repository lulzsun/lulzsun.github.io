import{i as L,h as j,a as l,s as E,b as Ge,c as u,d,e as S,p as V,m as O,f as A,o as h,g as Ke,j as D,k,l as de,n as Ye,q as I,r as ge,t as Me,u as Je,v as pe,w as qe,x as M,y as Xe,z as Qe,A as Ze,B as he,C as me,D as et,E as tt,F as nt,G as ye,H as X,I as z,J as rt,K as ot}from"./chunks/aeeb5bf5.js";import{_ as F}from"./chunks/7fb08ce2.js";function v(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function ne(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function G(e,t){const n=Object.getOwnPropertyDescriptor(e,t);return!!n&&!("value"in n)&&!!n.get}function _e(e){return typeof e=="object"&&e!==null&&"then"in e&&L(e.then)}function st(e,t){if(!v(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function it(e){return typeof e=="object"&&e!==null&&Object.values(e).every(t=>typeof t=="string")}function at(e,t){const o=t.filter(({filesystemRoot:s})=>e.startsWith(s)).sort(j(({filesystemRoot:s})=>s.length))[0];let r;if(o){const{filesystemRoot:s,routeRoot:i}=o,a={pageId:e,filesystemRoot:s,routeRoot:i};l(i.startsWith("/")&&e.startsWith("/")&&s.startsWith("/"),a),l(e.startsWith(s),a),s!=="/"?(l(!s.endsWith("/"),a),r=E(e,s.length,0)):r=e,l(r.startsWith("/"),a),r=i+(i.endsWith("/")?"":"/")+E(r,1,0)}else r=e;return l(r.startsWith("/")),r=r.split("/").filter(s=>s!=="pages"&&s!=="src"&&s!=="index").join("/"),l(!r.includes(".page.")),l(!r.endsWith(".")),r.endsWith("/index")&&(r=E(r,0,-6)),r===""&&(r="/"),l(r.startsWith("/")),l(!r.endsWith("/")||r==="/"),r}async function lt(e,t,n,o){await Promise.all(e.filter(a=>a.fileType===".page.route").map(a=>{var c;return(c=a.loadFile)===null||c===void 0?void 0:c.call(a)}));const{onBeforeRouteHook:r,filesystemRoots:s}=ct(e,t,n);return{pageRoutes:ut(s,e,t,o),onBeforeRouteHook:r}}function ut(e,t,n,o){const r=[];let s=[...o];return n.length>0&&n.filter(a=>!a.isErrorPage).forEach(a=>{const c=a.pageId2;s=gt(s,c);let f=null;{const m=a.configSources.route;if(m){l("configValue"in m);const g=m.configValue,y=m.configSrc;if(l(y),typeof g=="string")f={pageId:c,comesFromV1PageConfig:!0,routeString:g,pageRouteFilePath:y,routeType:"STRING"};else{l(L(g));let _=!1;const p=a.configSources.iKnowThePerformanceRisksOfAsyncRouteFunctions;if(p){l(!("codeFilePath"in p));const R=p.configValue;l(typeof R=="boolean"),_=R}f={pageId:c,comesFromV1PageConfig:!0,routeFunction:g,pageRouteFilePath:y,routeType:"FUNCTION",allowAsync:_}}}}if(!f){const{routeFilesystem:m,routeFilesystemDefinedBy:g}=a;l(m),l(m.startsWith("/")),l(g),f={pageId:c,routeFilesystemDefinedBy:g,comesFromV1PageConfig:!0,routeString:m,pageRouteFilePath:null,routeType:"FILESYSTEM"}}l(f),r.push(f)}),n.length===0&&s.filter(a=>!Ge(a)).forEach(a=>{const c=ft(a,t);if(c){const{filePath:f,fileExports:m}=c;if(l(m),u("default"in m,`${f} should have a default export.`),d(m,"default","string")){const g=m.default;u(g.startsWith("/"),`A Route String should start with a leading \`/\` but \`${f}\` has \`export default '${g}'\`. Make sure to \`export default '/${g}'\` instead.`),r.push({pageId:a,comesFromV1PageConfig:!1,routeString:g,pageRouteFilePath:f,routeType:"STRING"});return}if(d(m,"default","function")){const g=m.default;let y=!1;const _="iKnowThePerformanceRisksOfAsyncRouteFunctions";_ in m&&(u(d(m,_,"boolean"),`The export \`${_}\` of ${f} should be a boolean.`),y=m[_]),r.push({pageId:a,comesFromV1PageConfig:!1,routeFunction:g,pageRouteFilePath:f,allowAsync:y,routeType:"FUNCTION"});return}u(!1,`The default export of ${f} should be a string or a function.`)}else{const f=at(a,e);l(f.startsWith("/")),l(!f.endsWith("/")||f==="/"),r.push({pageId:a,comesFromV1PageConfig:!1,routeString:f,pageRouteFilePath:null,routeFilesystemDefinedBy:`${a}.page.*`,routeType:"FILESYSTEM"})}}),r}function ct(e,t,n){if(t.length>0){if(n.onBeforeRoute){const s=n.onBeforeRoute.configValue;if(s){const i=n.onBeforeRoute.codeFilePath2;return l(i),u(L(s),`The hook onBeforeRoute() defined by ${i} should be a function.`),{onBeforeRouteHook:{hookSrc:i,onBeforeRoute:s},filesystemRoots:[]}}}return{onBeforeRouteHook:null,filesystemRoots:[]}}let o=null;const r=[];return e.filter(s=>s.fileType===".page.route"&&s.isDefaultPageFile).forEach(({filePath:s,fileExports:i})=>{if(l(i),"onBeforeRoute"in i){u(d(i,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${s} should be a function.`);const{onBeforeRoute:a}=i;o={hookSrc:`${s} > \`export { onBeforeRoute }\``,onBeforeRoute:a}}"filesystemRoutingRoot"in i&&(u(d(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} should be a string.`),u(d(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} is \`'${i.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),r.push({filesystemRoot:dt(s),routeRoot:i.filesystemRoutingRoot}))}),{onBeforeRouteHook:o,filesystemRoots:r}}function ft(e,t){return t.find(n=>n.pageId===e&&n.fileType===".page.route")}function dt(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=E(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}function gt(e,t){const{length:n}=e;return e=e.filter(o=>o!==t),l(e.length===n-1),e}function be(e){l(e.urlOriginal),"urlPathname"in e?l(G(e,"urlPathname")):Object.defineProperty(e,"urlPathname",{get:ve,enumerable:!0,configurable:!0}),"url"in e?l(G(e,"url")):Object.defineProperty(e,"url",{get:pt,enumerable:!1,configurable:!0}),"urlParsed"in e?l(G(e,"urlParsed")):Object.defineProperty(e,"urlParsed",{get:ht,enumerable:!0,configurable:!0})}function Se(e){let t=e._urlHandler;t||(t=r=>r);const n=t(e.urlOriginal),o=e._baseServer;return l(o.startsWith("/")),V(n,o)}function ve(){const{pathname:e}=Se(this),t=e;return l(t.startsWith("/")),t}function pt(){return S(!1,"`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)",{onlyOnce:!0,showStackTrace:!0}),ve.call(this)}function ht(){const e=Se(this),{origin:t,pathname:n,pathnameOriginal:o,search:r,searchAll:s,searchOriginal:i,hash:a,hashOriginal:c}=e,f={origin:t,pathname:n,pathnameOriginal:o,search:r,searchAll:s,searchOriginal:i,hash:a,hashOriginal:c,get hashString(){return S(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0,showStackTrace:!0}),c},get searchString(){return S(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0,showStackTrace:!0}),i}};return re(f,"hashString"),re(f,"searchString"),f}function re(e,t){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(e,t,{...n,enumerable:!1})}function mt(e){l(typeof e.urlOriginal=="string"),l(typeof e.urlPathname=="string"),l(v(e.urlParsed)),l(e.urlPathname===e.urlParsed.pathname)}const Pe="@",J=":";function yt(e,t){t?t=t+" invalid":t="Invalid",u(e==="*"||e.startsWith("/"),`${t} route string '${e}'${e===""?" (empty string)":""}: route strings should start with a leading slash '/' (or be '*')`)}function H(e,t){yt(e),l(t.startsWith("/"));const n=e.split("/"),o=t.split("/"),r={};_t(e),e==="*"&&(e="/*");for(let s=0;s<Math.max(n.length,o.length);s++){const i=n[s],a=o[s];if(i==="*")return r["*"]=o.slice(Math.max(1,s)).join("/"),{routeParams:r};if(i&&$(i)){if(S(!i.startsWith(J),`Outdated route string \`${e}\`, use \`${e.split(J).join(Pe)}\` instead.`,{showStackTrace:!1,onlyOnce:!0}),!a)return null;r[i.slice(1)]=a}else if((i||"")!==(a||""))return null}return{routeParams:r}}function _t(e){const t=e.split("*").length-1;u(t<=1,`Invalid route string \`${e}\`: route strings are not allowed to contain more than one glob character \`*\`.`),u(t===0||t===1&&e.endsWith("*"),`Invalid route string \`${e}\`: make sure your route string ends with the glob character \`*\`.`)}function T(e){const t=e.split("/").filter(i=>i!==""&&i!=="*");let n=0;for(const i of t){if($(i))break;n++}const o=t.filter(i=>!$(i)).length,r=t.filter(i=>$(i)).length,s=e.endsWith("*");return{numberOfParameterSegments:r,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:o,isCatchAll:s}}function $(e){return e.startsWith(Pe)||e.startsWith(J)}function oe(e){const n=H(e,e);return l(n),Object.keys(n.routeParams).length===0}function bt(e){e.sort(St).sort(O(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(O(t=>t.routeType==="STRING"&&oe(t.routeString)===!1)).sort(O(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(O(t=>t.routeType==="STRING"&&oe(t.routeString)===!0)).sort(O(t=>t.routeType==="FILESYSTEM")).sort(O(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function St(e,t){var n,o;{const r=(n=e.precedence)!==null&&n!==void 0?n:0,s=(o=t.precedence)!==null&&o!==void 0?o:0;if(r!==s)return r>s?-1:1}if(!t.routeString||!e.routeString)return 0;{const s=j(i=>T(i).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(s!==0)return s}{const s=j(i=>T(i).numberOfStaticSegements)(e.routeString,t.routeString);if(s!==0)return s}{const s=j(i=>T(i).numberOfParameterSegments)(e.routeString,t.routeString);if(s!==0)return s}{if(T(t.routeString).isCatchAll)return-1;if(T(e.routeString).isCatchAll)return 1}return 0}async function vt(e,t,n,o){mt(n);let r=e(n);if(u(!_e(r)||t,`The Route Function ${o} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`),r=await r,r===!1)return null;if(r===!0&&(r={}),u(v(r),`The Route Function ${o} should return a boolean or a plain JavaScript object, instead it returns \`${d(r,"constructor")?r.constructor:r}\`.`),"match"in r){const{match:a}=r;if(u(typeof a=="boolean",`The \`match\` value returned by the Route Function ${o} should be a boolean.`),!a)return null}let s=null;"precedence"in r&&(s=r.precedence,u(typeof s=="number",`The \`precedence\` value returned by the Route Function ${o} should be a number.`)),Re(r,`The \`routeParams\` object returned by the Route Function ${o} should`);const i=r.routeParams||{};return u(!("pageContext"in r),"Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#cannot-provide-pagecontext"),l(v(i)),Object.keys(r).forEach(a=>{u(a==="match"||a==="routeParams"||a==="precedence",`The Route Function ${o} returned an object with an unknown key \`{ ${a} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:s,routeParams:i}}function Re(e,t){l(t.endsWith(" should")),d(e,"routeParams")&&(l(t.endsWith(" should")),u(v(e.routeParams),`${t} be a plain JavaScript object.`),u(it(e.routeParams),`${t} only hold string values.`))}function we(e,{hook:t,errorMessagePrefix:n,canBePromise:o}){if(!n){l(t);const{hookName:r,hookSrc:s}=t;l(!r.endsWith(")")),n=`The \`pageContext\` provided by the ${r}() hook defined by ${s}`}if(o&&!A(e)){u(L(e)||_e(e),`${n} should be an object, or an async function https://vite-plugin-ssr.com/stream#initial-data-after-stream-end`);return}u(A(e),`${n} should be an object.`),u(!("_objectCreatedByVitePluginSsr"in e),`${n} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),S(!("_pageId"in e),"You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.",{showStackTrace:!1,onlyOnce:!0})}async function Pt(e,t){const n=await e.onBeforeRoute(t),o=`The \`onBeforeRoute()\` hook defined by ${e.hookSrc}`;if(u(n==null||st(n,["pageContext"])&&d(n,"pageContext"),`${o} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),n==null)return null;if(u(d(n,"pageContext","object"),`${o} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`),d(n.pageContext,"_pageId")&&!d(n.pageContext,"_pageId","null")){const s=`${o} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;u(d(n.pageContext,"_pageId","string"),`${s} a string or \`null\``),u(t._allPageIds.includes(n.pageContext._pageId),`${s} one of following values: \`[${t._allPageIds.map(i=>`'${i}'`).join(", ")}]\`.`)}d(n.pageContext,"routeParams")&&Re(n.pageContext,`${o} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);const r={};return d(n.pageContext,"url")&&(S(!1,`${o} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,{showStackTrace:!1,onlyOnce:!0}),n.pageContext.urlOriginal=n.pageContext.url,delete n.pageContext.url),d(n.pageContext,"urlOriginal")&&(u(d(n.pageContext,"urlOriginal","string"),`${o} returned \`{ pageContext: { urlOriginal } }\` but \`urlOriginal\` should be a string`),h(r,{_urlPristine:t.urlOriginal})),we(n.pageContext,{hook:{hookSrc:e.hookSrc,hookName:"onBeforeRoute"}}),h(r,n.pageContext),r}var N;function se(...e){var t,n;N||(N=(n=(t=globalThis).__brillout_debug_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),N&&N(...e)}async function Oe(e){be(e);const{pageRoutes:t,onBeforeRouteHook:n}=await lt(e._pageFilesAll,e._pageConfigs,e._pageConfigGlobal,e._allPageIds);se("Pages routes:",t);const o={};if(n){const c=await Pt(n,e);if(c){if(h(o,c),d(o,"_pageId","string")||d(o,"_pageId","null"))return d(o,"routeParams")?l(d(o,"routeParams","object")):h(o,{routeParams:{}}),h(o,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:o};h(e,o)}}h(o,{_routingProvidedByOnBeforeRouteHook:!1});const r=e._allPageIds;l(r.length>=0),u(e._pageFilesAll.length>0||e._pageConfigs.length>0,"No *.page.js file found. You must create at least one *.page.js file."),u(r.length>0,"You must create at least one *.page.js file that isn't _default.page.*");const{urlPathname:s}=e;l(s.startsWith("/"));const i=[];await Promise.all(t.map(async c=>{const{pageId:f,routeType:m}=c;if(c.routeType==="FILESYSTEM"){const{routeString:g}=c,y=H(g,s);if(y){const{routeParams:_}=y;i.push({pageId:f,routeParams:_,routeString:g,routeType:m})}return}if(c.routeType==="STRING"){const{routeString:g}=c,y=H(g,s);if(y){const{routeParams:_}=y;l(m==="STRING"),i.push({pageId:f,routeString:g,routeParams:_,routeType:m})}return}if(c.routeType==="FUNCTION"){const{routeFunction:g,allowAsync:y,pageRouteFilePath:_}=c,p=await vt(g,y,e,_);if(p){const{routeParams:R,precedence:C}=p;i.push({pageId:f,precedence:C,routeParams:R,routeType:m})}return}l(!1)})),bt(i);const a=i[0];if(se(`Route matches for URL \`${s}\` (in precedence order):`,i),h(o,{_routeMatches:i}),!a)return h(o,{_pageId:null,routeParams:{}}),{pageContextAddendum:o};{const{routeParams:c}=a;l(v(c)),h(o,{_pageId:a.pageId,routeParams:a.routeParams})}return{pageContextAddendum:o}}const Rt=["metaData","Page"],wt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Rt},Symbol.toStringTag,{value:"Module"})),Ot=["metaData","Page"],Ct=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ot},Symbol.toStringTag,{value:"Module"})),Tt=["metaData","Page"],Ft=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Tt},Symbol.toStringTag,{value:"Module"})),Et=["metaData","Page"],xt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Et},Symbol.toStringTag,{value:"Module"})),At=["onBeforeRender","prerender"],It=Object.freeze(Object.defineProperty({__proto__:null,exportNames:At},Symbol.toStringTag,{value:"Module"})),kt=["onBeforeRender","prerender"],Nt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:kt},Symbol.toStringTag,{value:"Module"})),jt=["render","passToClient"],$t=Object.freeze(Object.defineProperty({__proto__:null,exportNames:jt},Symbol.toStringTag,{value:"Module"}));function Ht(e,t){var n;const o=(s,i="a non-empty string")=>`[resolveRoute(routeString, urlPathname)] \`${s}\` should be `+i;u(e,o("routeString")),u(t,o("urlPathname")),u(t.startsWith("/"),o("urlPathname","`pageContext.urlPathname`"));const r=H(e,t);return{match:!!r,routeParams:(n=r==null?void 0:r.routeParams)!==null&&n!==void 0?n:{}}}const Bt=e=>e.urlPathname==="/blog"||e.urlPathname==="/blog/"?{routeParams:{post:"anonymous"}}:Ht("/blog/@post",e.urlPathname),Wt=Object.freeze(Object.defineProperty({__proto__:null,default:Bt},Symbol.toStringTag,{value:"Module"})),Lt=["render","clientRouting","prefetchStaticAssets","hydrationCanBeAborted"],Vt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Lt},Symbol.toStringTag,{value:"Module"})),Q={},Ce={},Dt={},U={},Ut=[],zt={},Gt=!0,Kt=[],Yt={onBeforeRoute:null},Mt=null,Jt=Object.assign({"/src/pages/blog.page.tsx":()=>F(()=>import("./src/pages/blog.page.413bc6b7.js"),["assets/src/pages/blog.page.413bc6b7.js","assets/chunks/fd325986.js","assets/chunks/1ab61c05.js","assets/chunks/8f284688.js"]),"/src/pages/blog/@post/index.page.tsx":()=>F(()=>import("./src/pages/blog/@post/index.page.b21b2ea4.js"),["assets/src/pages/blog/@post/index.page.b21b2ea4.js","assets/chunks/7fb08ce2.js","assets/chunks/fd325986.js"]),"/src/pages/index.page.tsx":()=>F(()=>import("./src/pages/index.page.708ae9e1.js"),["assets/src/pages/index.page.708ae9e1.js","assets/chunks/fd325986.js","assets/chunks/61d7d091.js","assets/chunks/8f284688.js","assets/chunks/1ab61c05.js"]),"/src/renderer/_error.page.tsx":()=>F(()=>import("./src/renderer/error.page.19f0ec82.js"),["assets/src/renderer/error.page.19f0ec82.js","assets/chunks/fd325986.js"])}),qt={...Jt};Q[".page"]=qt;const Xt=Object.assign({"/src/pages/blog.page.tsx":wt,"/src/pages/blog/@post/index.page.tsx":Ct,"/src/pages/index.page.tsx":Ft,"/src/renderer/_error.page.tsx":xt}),Qt={...Xt};U[".page"]=Qt;const Zt=Object.assign({"/src/pages/blog.page.server.tsx":It,"/src/pages/blog/@post/index.page.server.tsx":Nt,"/src/renderer/_default.page.server.tsx":$t}),en={...Zt};U[".page.server"]=en;const tn=Object.assign({"/src/pages/blog/@post/index.page.route.ts":Wt}),nn={...tn};Ce[".page.route"]=nn;const rn=Object.assign({"/src/renderer/_default.page.client.tsx":()=>F(()=>import("./src/renderer/default.page.client.d2983199.js"),["assets/src/renderer/default.page.client.d2983199.js","assets/chunks/61d7d091.js","assets/chunks/fd325986.js","assets/chunks/8f284688.js","assets/chunks/53706c28.js","assets/static/src/renderer/default.page.client.75aa8b39.css"])}),on={...rn};Q[".page.client"]=on;const sn=Object.assign({"/src/renderer/_default.page.client.tsx":Vt}),an={...sn};U[".page.client"]=an;const ln=Object.freeze(Object.defineProperty({__proto__:null,pageFilesLazy:Q,pageFilesEager:Ce,pageFilesExportNamesLazy:Dt,pageFilesExportNamesEager:U,pageFilesList:Ut,neverLoaded:zt,isGeneratedFile:Gt,pageConfigs:Kt,pageConfigGlobal:Yt,invalidator:Mt},Symbol.toStringTag,{value:"Module"}));Ke(ln);function Te(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function un(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}function cn(e){return V(e,"/").pathname}function B(e){window.location.href=e}function fn(){var e,t,n,o;const r=!!(!((t=(e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||e===void 0?void 0:e.renderers)===null||t===void 0)&&t.size),s=!!(!((o=(n=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||n===void 0?void 0:n.rendererInterfaces)===null||o===void 0)&&o.size),i=!!window.__vite_plugin_react_preamble_installed__;return r||s||i}function dn(e,t){return(e==null?void 0:e.message)===(t==null?void 0:t.message)}function gn(e){return new Promise(t=>setTimeout(t,e))}const ie=D("navigationState.ts",{}),pn=k(),Fe={markNavigationChange(){ie.navigationChanged=!0},get noNavigationChangeYet(){return!ie.navigationChanged&&this.isFirstUrl(k())},isFirstUrl(e){return e===pn}};async function hn(e,t){const o=de(e,t).filter(s=>s.fileType===".page.server");return await Promise.all(o.map(async s=>{s.exportNames||(l(s.loadExportNames,t),await s.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:o.some(({exportNames:s})=>(l(s),s.includes("onBeforeRender")))}}function mn(e,t,n,o,r=!1){l(!t.endsWith(")"));const s=`The ${t}() hook defined by ${o}`;u(e==null||v(e),`${s} should return \`null\`, \`undefined\`, or a plain JavaScript object.`),e!=null&&(yn(e,n,s),"pageContext"in e&&we(e.pageContext,{hook:{hookName:t,hookSrc:o},canBePromise:r}))}function yn(e,t,n){const o=[],r=Object.keys(e);for(const s of r)t.includes(s)||o.push(s);u(o.length===0,[n,"returned an object with unknown keys",ne(o)+".","Only following keys are allowed:",ne(t)+"."].join(" "))}const ae=["urlPathname","urlParsed"],_n=["Page","pageExports","exports"];function Ee(e){[..._n,...ae].forEach(n=>{n in e&&(ae.includes(n)?(l(n.startsWith("url")),S(!1,`\`pageContext.${n}\` is already available in the browser when using Client Routing; including \`${n}\` in \`passToClient\` has no effect.`,{showStackTrace:!1,onlyOnce:!0})):S(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{showStackTrace:!1,onlyOnce:!0}),delete e[n])})}const bn="/";function Sn(e,t,n){const{pathnameOriginal:o,searchOriginal:r,hashOriginal:s}=V(e,bn);e.startsWith("/")&&l(e===`${o}${r||""}${s||""}`,{url:e});const i=o.endsWith("/");let a;return n&&o!=="/"?(i?a=E(o,0,-1):a=o,l(!a.endsWith("/"),{url:e}),l(a!=="")):a=o+(i?"":"/")+"index",l(a),a=a+t,`${a}${r||""}${s||""}`}const vn=".pageContext.json",Pn=!1;function Rn(e){return Sn(e,vn,Pn)}async function wn(e){return e._isFirstRenderAttempt&&Fe.isFirstUrl(e.urlOriginal)?(l(d(e,"_isFirstRenderAttempt","true")),On(e)):(l(d(e,"_isFirstRenderAttempt","false")),Tn(e))}async function On(e){const t=Ye();return Ee(t),h(t,{isHydration:!0,_comesDirectlyFromServer:!0}),h(t,await I(e._pageFilesAll,e._pageConfigs,t._pageId)),t}async function Cn(e){const t=ge(e._pageFilesAll,e._pageConfigs);if(!t)throw new Error("No error page");const n={isHydration:!1,_pageId:t,_pageContextRetrievedFromServer:null,_comesDirectlyFromServer:!1};return h(n,await I(e._pageFilesAll,e._pageConfigs,n._pageId)),n}async function Tn(e){let t={};h(t,{isHydration:!1}),h(t,await xn(e)),h(t,await I(e._pageFilesAll,e._pageConfigs,t._pageId));const n=await Fn({...e,...t});if(l([!0,!1].includes(n._comesDirectlyFromServer)),n._isError){t={},l(n._comesDirectlyFromServer===!0),l(d(n,"is404","boolean")),l(d(n,"pageProps","object")),l(d(n.pageProps,"is404","boolean")),l(!("serverSideError"in n));const o=ge(e._pageFilesAll,e._pageConfigs);return l(o),h(t,{isHydration:!1,_pageId:o}),h(t,n),h(t,await I(e._pageFilesAll,e._pageConfigs,t._pageId)),t}else return h(t,n),t}async function Fn(e){const t=Me(e,"onBeforeRender");if(t){const o=t.hook,r={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},s=Je({...e,...r},!0),i=await pe(()=>o(s),"onBeforeRender",t.hookSrc);mn(i,"onBeforeRender",["pageContext"],t.hookSrc);const a=i==null?void 0:i.pageContext;return h(r,a),r}if(await En(e)){const o=await kn(e),r={};return Object.assign(r,o),h(r,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:o}),r}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function En(e){if(e._pageConfigs.length>0){const t=qe(e._pageId,e._pageConfigs);return!!M(t,"onBeforeRender")&&t.configSources.onBeforeRender.c_env==="server-only"}else{const{hasOnBeforeRenderServerSideOnlyHook:t}=await hn(e._pageFilesAll,e._pageId);return t}}async function xn(e){const n=(await Oe(e)).pageContextAddendum;if(!n._pageId){const o=new Error("No routing match");throw An(o),o}return l(d(n,"_pageId","string")),n}function An(e){h(e,{_is404:!0})}function In(e){return A(e)&&e._is404===!0}async function kn(e){var t;const n=Rn((t=e._urlPristine)!==null&&t!==void 0?t:e.urlOriginal),o=await fetch(n);{const a=o.headers.get("content-type"),c=a&&a.includes("application/json");if(!c&&o.status===404){B(e.urlOriginal);const f=new Error("Page doesn't exist");throw Object.assign(f,{_abortRendering:!0}),f}u(c,`Wrong HTTP Response Header \`content-type\` value for URL ${n} (it should be \`application/json\` but we got \`${a}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const r=await o.text(),s=Xe(r);if("serverSideError"in s)throw Qe("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");l(d(s,"pageContext"));const i=s.pageContext;return l(v(i)),l(d(i,"_pageId","string")),Ee(i),i}function xe(){const e="/";return l(Nn(e)),e}function Nn(e){return e.startsWith("/")}const K=D("createPageContext.ts",{});async function Ae(e){K.pageFilesData||(K.pageFilesData=await Ze(!0));const{pageFilesAll:t,allPageIds:n,pageConfigs:o,pageConfigGlobal:r}=K.pageFilesData,s=xe();l(he(s));const i={_objectCreatedByVitePluginSsr:!0,_urlHandler:null,_baseServer:s,_isProduction:!0,_pageFilesAll:t,_pageConfigs:o,_pageConfigGlobal:r,_allPageIds:n};return h(i,e),be(i),i}async function Ie(e){const t=await Ae({urlOriginal:e}),n=await Oe(t),o=t._pageFilesAll,r=t._pageConfigs;if(!("pageContextAddendum"in n))return{pageId:null,pageFilesAll:o,pageConfigs:r};const s=n.pageContextAddendum._pageId;return s?{pageId:s,pageFilesAll:o,pageConfigs:r}:{pageId:null,pageFilesAll:o,pageConfigs:r}}function x(e){return e.fileType===".css"?[]:e.exportNames?e.exportNames:(l(e.fileExports,e.filePath),Object.keys(e.fileExports))}function jn({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:o(),isClientRouting:s()};function o(){return t.some(a=>a.pageId===n&&a.fileType===".page")?(r(),!1):!(!t.some(a=>a.pageId===n&&a.fileType===".page.server")||e.some(a=>a.pageId===n&&a.fileType===".page.client"&&x(a).includes("render")))}function r(){const i=e.some(a=>x(a).includes("render"));u(i,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,c)=>` (${c+1}): ${a.filePath}`)].join(`
`)].join(" "))}function s(){return e.some(a=>x(a).includes("clientRouting"))}}function $n({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:o}){let r=[];const s=t.filter(a=>!e.includes(a)),i=[];if(i.push(...e.map(a=>({id:a.filePath,onlyAssets:!1,eagerlyImported:!1}))),i.push(...s.map(a=>({id:a.filePath,onlyAssets:!0,eagerlyImported:!1}))),n)r=e.map(a=>a.filePath);else{const a=Hn(o);i.push({id:a,onlyAssets:!1,eagerlyImported:!1}),r=[a]}return{clientEntries:r,clientDependencies:i}}function Hn(e){return e?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js"}function Bn(e,t){let n=me(e,t);const o=de(e,t),{isHtmlOnly:r,isClientRouting:s}=jn({pageFilesClientSide:n,pageFilesServerSide:o,pageId:t});r&&(n=n.filter(c=>c.isEnv("CLIENT_ONLY")&&!x(c).includes("render")),n=Ln(n));const{clientEntries:i,clientDependencies:a}=$n({pageFilesClientSide:n,pageFilesServerSide:o,isHtmlOnly:r,isClientRouting:s});return{isHtmlOnly:r,isClientRouting:s,clientEntries:i,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:o}}async function Wn(e,t,{sharedPageFilesAlreadyLoaded:n}){const o=me(e,t);await Promise.all(o.map(async r=>{var s;l(r.isEnv("CLIENT_ONLY")||r.isEnv("CLIENT_AND_SERVER")),!(n&&r.isEnv("CLIENT_AND_SERVER"))&&await((s=r.loadExportNames)===null||s===void 0?void 0:s.call(r))}))}function Ln(e){const t=[];for(const n of e)if(t.push(n),x(n).includes("overrideDefaultPages"))break;return t}function Vn(e,t,n){var o;if(e){const r=(o=et(e,"clientRouting","boolean"))!==null&&o!==void 0?o:!1,s=!!M(e,"onRenderClient"),i=!!M(e,"Page")&&e.configSources.Page.c_env!=="server-only";return{isClientSideRenderable:s&&i,isClientRouting:r}}else{const{isHtmlOnly:r,isClientRouting:s}=Bn(t,n);return{isClientSideRenderable:!r,isClientRouting:s}}}async function ke(e){const{pageId:t,pageFilesAll:n,pageConfigs:o}=await Ie(e);if(!t)return!1;await Wn(n,t,{sharedPageFilesAlreadyLoaded:!1});const r=tt(o,t),{isClientSideRenderable:s,isClientRouting:i}=Vn(r,n,t);return s&&i}function Ne(e){const t=e.getAttribute("href");return!!(t===null||t===""||Te(t)||Dn(e)||Un(t)||!zn(t)||!nt(t))}function Dn(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function Un(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function zn(e){const t=xe();l(he(t));const{hasBaseServer:n}=V(e,t);return n}function Gn(e,t){return{prefetchPageContext:!1,prefetchStaticAssets:Kn(e,t)}}function Kn(e,t){let n=Yn(t),o=(()=>{if(n!==null)return n===!0?{when:"VIEWPORT"}:{when:"HOVER"};if("prefetchLinks"in e.exports&&u(n===null,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:r}=e.exports;if(r===!1)return!1;const s="`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";u(v(r),s);const i=Object.keys(r);u(i.length===1&&i[0]==="when",s);const{when:a}=r;if(a==="HOVER"||a==="VIEWPORT")return{when:a};u(!1,s)}return{when:"HOVER"}})();return o&&o.when==="VIEWPORT"&&!e._isProduction&&(ye(!1,"Viewport prefetching is disabled in development",{onlyOnce:!0}),o={when:"HOVER"}),o}function Yn(e){let t=e.getAttribute("data-prefetch");if(S(t===null,"The `data-prefetch` attribute is outdated.",{showStackTrace:!1,onlyOnce:!0}),t===null)return null;if(l(typeof t=="string"),t==="true")return!0;if(t==="false")return!1;u(!1,`Wrong data-prefetch value: \`"${t}"\`; it should be \`"true"\` or \`"false"\`.`)}const je=new Map;function $e(e){const t=Be(e);return je.has(t)}function He(e){const t=Be(e);je.set(t,!0)}function Be(e){return cn(e)}const le=new Map;async function Y(e){if(u(!Te(e),`You are trying to prefetch ${e} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`),$e(e))return;He(e);const{pageId:t,pageFilesAll:n,pageConfigs:o}=await Ie(e);if(t)try{await I(n,o,t)}catch(r){if(X(r))q(r,!0);else throw r}}function Mn(e){He(e.urlOriginal),[...document.getElementsByTagName("A")].forEach(async n=>{if(le.has(n))return;le.set(n,!0);const o=n.getAttribute("href");if(Ne(n)||(l(o),!await ke(o))||$e(o))return;const r=Gn(e,n);if(r.prefetchStaticAssets){if(r.prefetchStaticAssets.when==="HOVER")n.addEventListener("mouseover",()=>Y(o)),n.addEventListener("touchstart",()=>Y(o),{passive:!0});else if(r.prefetchStaticAssets.when==="VIEWPORT"){const s=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(Y(o),s.disconnect())})});s.observe(n)}}else return})}function We(){let e=window.history.state;e||(e={});let t=!1;"timestamp"in e||(t=!0,e.timestamp=Ve()),"scrollPosition"in e||(t=!0,e.scrollPosition=Le()),De(e),t&&ee(e)}function Z(){const e=window.history.state||{};return De(e),e}function Le(){return{x:window.scrollX,y:window.scrollY}}function Ve(){return new Date().getTime()}function ue(){const e=Le(),t=Z();ee({...t,scrollPosition:e})}function Jn(e,t){if(t)ee(Z(),e);else{const n=Ve();qn({timestamp:n,scrollPosition:null},e)}}function De(e){if(l(A(e)),"timestamp"in e){const{timestamp:t}=e;l(typeof t=="number")}if("scrollPosition"in e){const{scrollPosition:t}=e;t!==null&&l(d(t,"x","number")&&d(t,"y","number"))}}function ee(e,t){window.history.replaceState(e,"",t!=null?t:null)}function qn(e,t){window.history.pushState(e,"",t)}const Xn=D("navigate.ts",{});function Qn(e){Xn.navigate=e}const b=D("useClientRouter.ts",{previousState:W()});ir();We();function q(e,t){l(X(e)),b.clientRoutingIsDisabled=!0,t&&console.log(e),ye(!1,"New deployed frontend detected. The next page navigation will use Server Routing instead of Client Routing.",{onlyOnce:!0})}function Zn(){or(),er((r,{keepScrollPosition:s})=>{o({scrollTarget:s?"preserve-scroll":"scroll-to-top-or-hash",url:r,isBackwardNavigation:!1,checkClientSideRenderable:!0})}),tr((r,s)=>{o({scrollTarget:r,isBackwardNavigation:s})}),Qn(async(r,{keepScrollPosition:s=!1,overwriteLastHistoryEntry:i=!1}={})=>{await o({scrollTarget:s?"preserve-scroll":"scroll-to-top-or-hash",url:r,overwriteLastHistoryEntry:i,isBackwardNavigation:!1,checkClientSideRenderable:!0})});let e=0,t,n=!1;o({scrollTarget:"preserve-scroll",isBackwardNavigation:null});return;async function o({scrollTarget:r,url:s=k(),overwriteLastHistoryEntry:i=!1,isBackwardNavigation:a,checkClientSideRenderable:c}){var f;if(b.clientRoutingIsDisabled){B(s);return}if(c&&!await ke(s)){B(s);return}const m={urlOriginal:s,isBackwardNavigation:a},g=++e;l(g>=1),g>1&&n===!1&&((f=b.onPageTransitionStart)===null||f===void 0||f.call(b,m),n=!0);let y=!1;const _=()=>g===1&&y===!1?!1:g!==e,p=await Ae(m);if(_())return;const R=g===1;h(p,{_isFirstRenderAttempt:R});let C;try{C=await wn(p)}catch(P){if(fe(P,p))return;In(P)?h(p,{is404:!0}):console.error(P);try{C=await Cn(p)}catch(w){if(fe(w,p)||(R||setTimeout(()=>{window.location.pathname=s},0),dn(P,w)))return;throw w}}if(h(p,C),z(p,"onPageTransitionStart"),b.onPageTransitionStart=p.exports.onPageTransitionStart,p.exports.hydrationCanBeAborted?y=!0:S(!fn(),"You seem to be using React; we recommend setting `hydrationCanBeAborted` to `true`, see https://vite-plugin-ssr.com/clientRouting",{showStackTrace:!1,onlyOnce:!0}),!_()&&(t&&await t,!_())){if(nr(s,i),Fe.markNavigationChange(),l(t===void 0),t=(async()=>{await rt(p,!0),Mn(p)})(),await t,t=void 0,p._isFirstRenderAttempt){z(p,"onHydrationEnd");const{onHydrationEnd:P}=p.exports;if(P){const w=p.exportsAll.onHydrationEnd[0].exportSource;l(w),await pe(()=>P(p),"onHydrationEnd",w)}}else g===e&&(p.exports.onPageTransitionEnd&&(z(p,"onPageTransitionEnd"),p.exports.onPageTransitionEnd(p)),n=!1);Ue(r),te(),b.initialRenderIsDone=!0}}}function er(e){document.addEventListener("click",t);return;async function t(r){if(!n(r))return;const s=o(r.target);if(!s)return;const i=s.getAttribute("href");if(Ne(s))return;l(i),r.preventDefault();const a=![null,"false"].includes(s.getAttribute("keep-scroll-position"));e(i,{keepScrollPosition:a})}function n(r){return r.button===0&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey}function o(r){for(;r.tagName!=="A";){const{parentNode:s}=r;if(!s)return null;r=s}return r}}function tr(e){window.addEventListener("popstate",()=>{const t=W(),n=t.historyState.scrollPosition||"scroll-to-top-or-hash",o=t.urlWithoutHash===b.previousState.urlWithoutHash,r=!t.historyState.timestamp||!b.previousState.historyState.timestamp?null:t.historyState.timestamp<b.previousState.historyState.timestamp;b.previousState=t,o?window.history.state===null?(We(),b.previousState=W()):Ue(n):e(n,r)})}function nr(e,t){k()!==e&&(te(),Jn(e,t),b.previousState=W())}function W(){return{urlWithoutHash:k({withoutHash:!0}),historyState:Z()}}function Ue(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const n=sr();if(n&&n!=="top"){const o=document.getElementById(n)||document.getElementsByName(n)[0];if(o){o.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;rr(t)}function rr(e){const t=()=>window.scrollTo(e.x,e.y),n=()=>window.scrollX===e.x&&window.scrollY===e.y;n()||(t(),!n()&&requestAnimationFrame(()=>{t(),!n()&&setTimeout(async()=>{if(t(),n())return;const o=new Date().getTime();for(;;)if(await gn(10),t(),n()||new Date().getTime()-o>100)return},0)}))}function or(){window.addEventListener("scroll",un(ue,Math.ceil(1e3/3)),{passive:!0}),ze(ue)}function sr(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}function ir(){ce(),ze(ce),ar(()=>b.initialRenderIsDone&&te())}function te(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function ce(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function ze(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function ar(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}function fe(e,t){return!!(A(e)&&e._abortRendering||lr(e,t))}function lr(e,t){if(!X(e))return!1;if(t._isFirstRenderAttempt)throw q(e,!1),e;return q(e,!0),B(t.urlOriginal),!0}ot(!0);Zn();
