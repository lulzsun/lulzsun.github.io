import{_ as r,g as d,k as c,n as p,o,c as u,A as f,q as _,e as y,L as v,J as h,I as E}from"./chunks/53e1064b.js";const i={},F={},x={},C={},m=[],b={},L=!0,w=[],P={onBeforeRoute:null},R=null,z=Object.assign({"/src/renderer/_error.page.tsx":()=>r(()=>import("./src/renderer/error.page.cf0b29a7.js"),["assets/src/renderer/error.page.cf0b29a7.js","assets/chunks/949a628a.js"])}),A={...z};i[".page"]=A;const I=Object.assign({"/src/pages/index.page.client.tsx":()=>r(()=>import("./src/pages/index.page.client.0c23617a.js"),["assets/src/pages/index.page.client.0c23617a.js","assets/chunks/949a628a.js","assets/chunks/c6cda039.js"]),"/src/renderer/_default.page.client.tsx":()=>r(()=>import("./src/renderer/default.page.client.24fc9986.js"),["assets/src/renderer/default.page.client.24fc9986.js","assets/chunks/949a628a.js","assets/chunks/c6cda039.js","assets/static/src/renderer/default.page.client.73fadada.css"])}),O={...I};i[".page.client"]=O;const S=Object.freeze(Object.defineProperty({__proto__:null,pageFilesLazy:i,pageFilesEager:F,pageFilesExportNamesLazy:x,pageFilesExportNamesEager:C,pageFilesList:m,neverLoaded:b,isGeneratedFile:L,pageConfigs:w,pageConfigGlobal:P,invalidator:R},Symbol.toStringTag,{value:"Module"}));d(S);const g=c({withoutHash:!0});async function H(){const e=p();return o(e,{isHydration:!0,isBackwardNavigation:null}),o(e,await B(e._pageId)),j(),e}function j(){const e=c({withoutHash:!0});u(g===e,`URL manipulated before hydration finished (\`${g}\` to \`${e}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`)}async function B(e){const a={},{pageFilesAll:t,pageConfigs:l}=await f(!0);return o(a,{_pageFilesAll:t,_pageConfigs:l}),o(a,await _(t,l,e)),t.filter(n=>n.fileType!==".page.server").forEach(n=>{var s;y(!(!((s=n.fileExports)===null||s===void 0)&&s.onBeforeRender),`\`export { onBeforeRender }\` of ${n.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,{showStackTrace:!1,onlyOnce:!0})}),a}v(!0);T();async function T(){var e,a;const t=await H();await h(t,!1),E(t,"onHydrationEnd"),await((a=(e=t.exports).onHydrationEnd)===null||a===void 0?void 0:a.call(e,t))}
