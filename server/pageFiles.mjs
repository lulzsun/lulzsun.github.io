import { resolveRoute } from "vite-plugin-ssr/routing";
const exportNames$a = ["metaData", "Page"];
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$a
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$9 = ["metaData", "Page"];
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$9
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$8 = ["metaData", "Page"];
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$8
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$7 = ["metaData", "Page"];
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$7
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$6 = ["metaData", "Page"];
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$6
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$5 = ["metaData", "Page"];
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$5
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$4 = ["metaData", "Page"];
const __vite_glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$4
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$3 = ["onBeforeRender", "prerender"];
const __vite_glob_3_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$3
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$2 = ["onBeforeRender", "prerender"];
const __vite_glob_3_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$2
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$1 = ["render", "passToClient"];
const __vite_glob_3_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$1
}, Symbol.toStringTag, { value: "Module" }));
const index_page_route = (pageContext) => {
  if (pageContext.urlPathname === "/blog" || pageContext.urlPathname === "/blog/") {
    const post = "anonymous";
    return { routeParams: { post } };
  }
  return resolveRoute("/blog/@post", pageContext.urlPathname);
};
const __vite_glob_4_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_page_route
}, Symbol.toStringTag, { value: "Module" }));
const exportNames = ["render", "clientRouting", "prefetchStaticAssets", "hydrationCanBeAborted"];
const __vite_glob_5_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames
}, Symbol.toStringTag, { value: "Module" }));
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigs = [];
const pageConfigGlobal = {
  ["onBeforeRoute"]: null,
  ["onPrerenderStart"]: null
};
const invalidator = null;
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/src/pages/blog.page.tsx": () => import("./src/pages/blog-page.js"), "/src/pages/blog/@post/index.page.tsx": () => import("./src/pages/blog/@post/index-page.js"), "/src/pages/git/gecgos.io.page.tsx": () => import("./src/pages/git/gecgos.io-page.js"), "/src/pages/git/replays.page.tsx": () => import("./src/pages/git/replays-page.js"), "/src/pages/git/whirled.page.tsx": () => import("./src/pages/git/whirled-page.js"), "/src/pages/index.page.tsx": () => import("./src/pages/index-page.js"), "/src/renderer/_error.page.tsx": () => import("./src/renderer/error-page.js") });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({ "/src/pages/blog.page.tsx": __vite_glob_1_0, "/src/pages/blog/@post/index.page.tsx": __vite_glob_1_1, "/src/pages/git/gecgos.io.page.tsx": __vite_glob_1_2, "/src/pages/git/replays.page.tsx": __vite_glob_1_3, "/src/pages/git/whirled.page.tsx": __vite_glob_1_4, "/src/pages/index.page.tsx": __vite_glob_1_5, "/src/renderer/_error.page.tsx": __vite_glob_1_6 });
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({ "/src/pages/blog.page.server.tsx": () => import("./src/pages/blog-page-server.js"), "/src/pages/blog/@post/index.page.server.tsx": () => import("./src/pages/blog/@post/index-page-server.js"), "/src/renderer/_default.page.server.tsx": () => import("./src/renderer/default-page-server.js") });
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({ "/src/pages/blog.page.server.tsx": __vite_glob_3_0, "/src/pages/blog/@post/index.page.server.tsx": __vite_glob_3_1, "/src/renderer/_default.page.server.tsx": __vite_glob_3_2 });
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({ "/src/pages/blog/@post/index.page.route.ts": __vite_glob_4_0 });
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({ "/src/renderer/_default.page.client.tsx": __vite_glob_5_0 });
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
export {
  invalidator,
  isGeneratedFile,
  neverLoaded,
  pageConfigGlobal,
  pageConfigs,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
};
