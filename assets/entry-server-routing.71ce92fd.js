import{g as p,k as d,n as c,o as s,c as u,A as _,q as f,e as v,L as y,J as E,I as h}from"./chunks/aeeb5bf5.js";import{_ as o}from"./chunks/7fb08ce2.js";const i={},m={},x={},F={},C=[],b={},L=!0,P=[],R={onBeforeRoute:null},w=null,A=Object.assign({"/src/pages/blog.page.tsx":()=>o(()=>import("./src/pages/blog.page.413bc6b7.js"),["assets/src/pages/blog.page.413bc6b7.js","assets/chunks/fd325986.js","assets/chunks/1ab61c05.js","assets/chunks/8f284688.js"]),"/src/pages/blog/@post/index.page.tsx":()=>o(()=>import("./src/pages/blog/@post/index.page.7d7670d0.js"),["assets/src/pages/blog/@post/index.page.7d7670d0.js","assets/chunks/7fb08ce2.js","assets/chunks/fd325986.js"]),"/src/pages/index.page.tsx":()=>o(()=>import("./src/pages/index.page.fe51d526.js"),["assets/src/pages/index.page.fe51d526.js","assets/chunks/fd325986.js","assets/chunks/61d7d091.js","assets/chunks/8f284688.js","assets/chunks/1ab61c05.js"]),"/src/renderer/_error.page.tsx":()=>o(()=>import("./src/renderer/error.page.19f0ec82.js"),["assets/src/renderer/error.page.19f0ec82.js","assets/chunks/fd325986.js"])}),I={...A};i[".page"]=I;const O=Object.assign({"/src/renderer/_default.page.client.tsx":()=>o(()=>import("./src/renderer/default.page.client.d2983199.js"),["assets/src/renderer/default.page.client.d2983199.js","assets/chunks/61d7d091.js","assets/chunks/fd325986.js","assets/chunks/8f284688.js","assets/chunks/53706c28.js","assets/static/src/renderer/default.page.client.df5caac8.css"])}),z={...O};i[".page.client"]=z;const S=Object.freeze(Object.defineProperty({__proto__:null,pageFilesLazy:i,pageFilesEager:m,pageFilesExportNamesLazy:x,pageFilesExportNamesEager:F,pageFilesList:C,neverLoaded:b,isGeneratedFile:L,pageConfigs:P,pageConfigGlobal:R,invalidator:w},Symbol.toStringTag,{value:"Module"}));p(S);const g=d({withoutHash:!0});async function H(){const e=c();return s(e,{isHydration:!0,isBackwardNavigation:null}),s(e,await j(e._pageId)),T(),e}function T(){const e=d({withoutHash:!0});u(g===e,`URL manipulated before hydration finished (\`${g}\` to \`${e}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`)}async function j(e){const a={},{pageFilesAll:t,pageConfigs:l}=await _(!0);return s(a,{_pageFilesAll:t,_pageConfigs:l}),s(a,await f(t,l,e)),t.filter(r=>r.fileType!==".page.server").forEach(r=>{var n;v(!(!((n=r.fileExports)===null||n===void 0)&&n.onBeforeRender),`\`export { onBeforeRender }\` of ${r.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,{showStackTrace:!1,onlyOnce:!0})}),a}y(!0);B();async function B(){var e,a;const t=await H();await E(t,!1),h(t,"onHydrationEnd"),await((a=(e=t.exports).onHydrationEnd)===null||a===void 0?void 0:a.call(e,t))}