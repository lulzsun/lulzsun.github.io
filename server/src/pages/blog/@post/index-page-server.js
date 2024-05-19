import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/7095cc45.js";
import { RenderErrorPage } from "vite-plugin-ssr";
import ReactDOMServer from "react-dom/server";
import path from "path";
import url from "url";
import fs from "fs";
import { a as jsx } from "../../../../chunks/afe7bc3e.js";
import "react/jsx-runtime";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
async function onBeforeRender(pageContext) {
  const postIds = fs.readdirSync(path.join(__dirname, "/posts"), {
    withFileTypes: true
  }).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
  const {
    post
  } = pageContext.routeParams;
  if (postIds.length == 0 || !postIds.includes(post)) {
    const is404 = false;
    throw RenderErrorPage({
      pageContext: {
        pageProps: {
          is404,
          postIds
        }
      }
    });
  }
  const {
    Page,
    metaData
  } = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./posts/my-first-blog-post/index.tsx": () => import("./posts/my-first-blog-post/index.js"), "./posts/thinkpad-x330/index.tsx": () => import("./posts/thinkpad-x330/index.js") }), `./posts/${post}/index.tsx`);
  const pageHtml = ReactDOMServer.renderToString(/* @__PURE__ */ jsx(Page, {}));
  const pageProps = {
    post,
    pageHtml
  };
  return {
    pageContext: {
      pageProps,
      metaData
    }
  };
}
function prerender() {
  const postIds = fs.readdirSync(path.join(__dirname, "/posts"), {
    withFileTypes: true
  }).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
  return [...postIds.map((post) => `/blog/${post}`)];
}
export {
  onBeforeRender,
  prerender
};
