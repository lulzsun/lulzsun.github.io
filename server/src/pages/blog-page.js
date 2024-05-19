import { HouseDoor } from "react-bootstrap-icons";
import { j as jsxs, a as jsx, F as Fragment } from "../../chunks/afe7bc3e.js";
import { H as Header } from "../../chunks/e64bf330.js";
import "react/jsx-runtime";
const BlogCard = ({
  metaData: metaData2,
  children
}) => {
  var _a;
  if (!metaData2.tags) {
    metaData2.tags = ["jimmy", "forgot", "tags"];
  }
  return /* @__PURE__ */ jsxs("a", {
    href: "/blog/" + metaData2.id,
    className: "cursor-pointer w-full rounded-xl overflow-hidden bg-stone-800 shadow-lg",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "px-6 py-4",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "font-bold text-xl mb-2",
        children: ["// ", ((_a = metaData2.title) == null ? void 0 : _a.replace(" | Jimmy Quach", "")) || "(jimmy forgot the title)"]
      }), /* @__PURE__ */ jsx("p", {
        className: "text-base",
        children: metaData2.description || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "px-6 pt-4 pb-2",
      children: metaData2.tags && metaData2.tags.map((tag, i) => {
        return /* @__PURE__ */ jsxs("span", {
          className: "inline-block bg-neutral-800 drop-shadow-lg rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 duration-300",
          children: ["#", tag]
        }, i);
      })
    })]
  });
};
const metaData = {
  title: "Blog | Jimmy Quach",
  description: "Jimmy Quach's amazingly awesome and cool blog."
};
const Page = ({
  posts
}) => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: "sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6",
      children: /* @__PURE__ */ jsx(Header, {
        greeting: "Hey! Welcome to",
        title: "Jimmy Quach's",
        description: /* @__PURE__ */ jsxs(Fragment, {
          children: ["Blog.", /* @__PURE__ */ jsx("span", {
            className: "pl-1 text-xs text-stone-400 whitespace-pre-line",
            children: "(where I write about stuff no one else will read)"
          })]
        }),
        children: /* @__PURE__ */ jsx("div", {
          className: "text-stone-200",
          children: "This is a small spot on the internet of where I talk about my interests and vent my frustrations. Enjoy."
        })
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "items-left md:block md:w-4/6 lg:w-3/5 xl:w-2/5 md:mr-24 pb-6 md:pb-0 px-6 md:px-0",
      children: /* @__PURE__ */ jsx("div", {
        className: "justify-center flex flex-wrap md:flex-col md:fixed top-24 z-50 gap-2",
        children: /* @__PURE__ */ jsx("a", {
          href: "/",
          className: "cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-28 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300",
          children: /* @__PURE__ */ jsxs("div", {
            className: "md:fixed left-3.5 inline-flex items-center place-content-center",
            children: [/* @__PURE__ */ jsx(HouseDoor, {}), " ", /* @__PURE__ */ jsx("span", {
              className: "pl-3.5",
              children: "Home"
            })]
          })
        })
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "grid gap-4 sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6 -my-6",
      children: Object.keys(posts).map((_post, i) => {
        return /* @__PURE__ */ jsx(BlogCard, {
          metaData: posts[i].metaData
        }, i);
      })
    })]
  });
};
export {
  Page,
  metaData
};
