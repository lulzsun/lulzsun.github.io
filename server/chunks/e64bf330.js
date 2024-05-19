import { a as jsx, j as jsxs, F as Fragment } from "./afe7bc3e.js";
const Image = (props) => {
  var _a;
  return /* @__PURE__ */ jsx("img", {
    ...props,
    src: !((_a = props.src) == null ? void 0 : _a.includes(".svg")) && process.env.NODE_ENV !== "development" ? props.src + ".webp" : props.src
  });
};
const Portrait = () => {
  const todaysDate = new Date();
  let isBirthday = todaysDate.getMonth() === 4 && todaysDate.getDay() === 7;
  return /* @__PURE__ */ jsxs("div", {
    className: "relative",
    children: [/* @__PURE__ */ jsx(Image, {
      alt: "a picture of jimmy",
      className: "relative h-40 max-w-none rounded-full overflow-hidden",
      src: "/linkedin-profilepic.jpg"
    }), isBirthday && /* @__PURE__ */ jsx(Image, {
      alt: "party hat on top of jimmy",
      className: "absolute -top-9 left-14",
      src: "/partyhat.svg",
      width: "42"
    })]
  });
};
const Header = ({
  greeting,
  title,
  description,
  children
}) => {
  const todaysDate = new Date();
  todaysDate.getMonth() === 4 && todaysDate.getDay() === 7;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "relative flex flex-row",
      children: [/* @__PURE__ */ jsxs("span", {
        className: "inline-block text-red-400 pb-4",
        children: [greeting, /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("span", {
          className: "inline-block py-4 text-red-300 text-3xl md:text-4xl lg:text-5xl whitespace-nowrap",
          children: title
        }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("span", {
          className: "inline-block text-stone-400 text-3xl md:text-4xl lg:text-5xl whitespace-nowrap",
          children: description
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "grow"
      }), /* @__PURE__ */ jsx("div", {
        className: "h-40 w-40 drop-shadow-lg",
        style: {
          "minWidth": "10rem"
        },
        children: /* @__PURE__ */ jsx(Portrait, {})
      })]
    }), children]
  });
};
export {
  Header as H,
  Image as I
};
