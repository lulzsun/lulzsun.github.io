import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/7095cc45.js";
import { useEffect, lazy, Suspense } from "react";
import { a as jsx, j as jsxs, F as Fragment } from "../../../../chunks/afe7bc3e.js";
import "react/jsx-runtime";
const Comments = ({
  post
}) => {
  function componentDidMount() {
    let script = document.createElement("script");
    let anchor = document.getElementById("inject-comments-for-uterances");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", "true");
    script.setAttribute("repo", "lulzsun/lulzsun.github.io");
    script.setAttribute("issue-term", post);
    script.setAttribute("theme", "github-dark");
    anchor == null ? void 0 : anchor.appendChild(script);
  }
  useEffect(() => {
    componentDidMount();
  }, []);
  return /* @__PURE__ */ jsx("div", {
    id: "inject-comments-for-uterances"
  });
};
const metaData = {
  title: "Jimmy forgot a title for this blog post...",
  description: "Jimmy forgot a description for this blog post..."
};
const Page = ({
  post,
  pageHtml
}) => {
  const BlogPost = lazy(() => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./posts/my-first-blog-post/index.tsx": () => import("./posts/my-first-blog-post/index.js"), "./posts/thinkpad-x330/index.tsx": () => import("./posts/thinkpad-x330/index.js") }), `./posts/${post}/index.tsx`).then((module) => ({
    default: module.Page
  })));
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: "sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6 flex flex-col",
      children: /* @__PURE__ */ jsxs("span", {
        className: "",
        children: [/* @__PURE__ */ jsx("a", {
          href: "/",
          className: "text-red-400 hover:underline underline-offset-2 hover:text-red-300",
          children: "reader@jimmyqua.ch: ~"
        }), "/", /* @__PURE__ */ jsx("a", {
          href: "/blog",
          className: "text-red-400 hover:underline underline-offset-2 hover:text-red-300",
          children: "blog"
        }), "/", post, " $"]
      })
    }), /* @__PURE__ */ jsx(Suspense, {
      fallback: /* @__PURE__ */ jsx("div", {
        className: "w-full flex justify-center",
        dangerouslySetInnerHTML: {
          __html: pageHtml
        }
      }),
      children: /* @__PURE__ */ jsx(BlogPost, {})
    }), /* @__PURE__ */ jsx("div", {
      className: "w-5/6 sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 pt-6 -mb-8",
      children: /* @__PURE__ */ jsx(Comments, {
        post
      })
    })]
  });
};
export {
  Page,
  metaData
};
