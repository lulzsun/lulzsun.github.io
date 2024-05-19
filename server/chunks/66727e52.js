import { Prism } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism/index.js";
import { a as jsx } from "./afe7bc3e.js";
const MarkdownComponents = {
  a: ({
    href,
    children
  }) => /* @__PURE__ */ jsx("a", {
    href,
    className: "underline underline-offset-2 text-red-300",
    children
  }),
  h1: ({
    children
  }) => /* @__PURE__ */ jsx("h1", {
    className: "text-3xl font-bold",
    children
  }),
  h2: ({
    children
  }) => /* @__PURE__ */ jsx("h2", {
    className: "text-2xl font-bold",
    children
  }),
  h3: ({
    children
  }) => /* @__PURE__ */ jsx("h3", {
    className: "text-xl font-bold",
    children
  }),
  h4: ({
    children
  }) => /* @__PURE__ */ jsx("h4", {
    className: "text-lg font-bold",
    children
  }),
  ul: ({
    children
  }) => /* @__PURE__ */ jsx("ul", {
    className: "list-disc ml-4",
    children
  }),
  ol: ({
    children
  }) => /* @__PURE__ */ jsx("ul", {
    className: "list-decimal ml-4",
    children
  }),
  code({
    node,
    inline,
    className,
    children,
    style,
    ...props
  }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? /* @__PURE__ */ jsx(Prism, {
      children: String(children).replace(/\n$/, ""),
      style: a11yDark,
      language: match[1],
      PreTag: "div",
      ...props
    }) : /* @__PURE__ */ jsx("code", {
      className,
      ...props,
      children
    });
  }
};
export {
  MarkdownComponents as M
};
