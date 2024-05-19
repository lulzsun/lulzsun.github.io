import { _ as __variableDynamicImportRuntimeHelper } from "../../chunks/7095cc45.js";
import path from "path";
import url from "url";
import fs from "fs";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
async function onBeforeRender() {
  const posts = await getAllBlogPosts();
  return {
    pageContext: {
      pageProps: {
        posts
      }
    }
  };
}
async function prerender() {
  const posts = await getAllBlogPosts();
  return [{
    url: "/blog",
    pageContext: {
      pageProps: {
        posts
      }
    }
  }];
}
async function getAllBlogPosts() {
  const posts = fs.readdirSync(path.join(__dirname, "/blog/@post/posts"), {
    withFileTypes: true
  }).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
  let postsWithMetadata = [];
  for (const post of posts) {
    const {
      metaData
    } = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./blog/@post/posts/my-first-blog-post/index.tsx": () => import("./blog/@post/posts/my-first-blog-post/index.js"), "./blog/@post/posts/thinkpad-x330/index.tsx": () => import("./blog/@post/posts/thinkpad-x330/index.js") }), `./blog/@post/posts/${post}/index.tsx`);
    metaData.id = post;
    postsWithMetadata.push({
      metaData
    });
  }
  return postsWithMetadata;
}
export {
  onBeforeRender,
  prerender
};
