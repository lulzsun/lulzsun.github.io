import { a as jsx, F as Fragment, j as jsxs } from "../../../chunks/afe7bc3e.js";
import "react/jsx-runtime";
const metaData = {
  title: "Redirecting...",
  description: "Redirect to another URL",
  redirectUrl: "https://github.com/lulzsun/gecgos.io"
};
function Page() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("h1", {
      children: ["If you are not redirected automatically, click ", /* @__PURE__ */ jsx("a", {
        className: "underline underline-offset-2 text-red-300",
        href: metaData.redirectUrl,
        children: "here"
      }), "."]
    })
  });
}
export {
  Page,
  metaData
};
