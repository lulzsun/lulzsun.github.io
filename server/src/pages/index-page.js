import { Github, Linkedin, FileEarmarkPdf, ChatLeftQuoteFill } from "react-bootstrap-icons";
import { H as Header, I as Image } from "../../chunks/e64bf330.js";
import Modal from "react-modal";
import { j as jsxs, F as Fragment, a as jsx } from "../../chunks/afe7bc3e.js";
import "react/jsx-runtime";
Modal.setAppElement("#root");
const metaData = {
  title: "Portfolio | Jimmy Quach",
  description: "Jimmy Quach's home on the web!"
};
function Page() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: "sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6",
      children: /* @__PURE__ */ jsx(Header, {
        greeting: "Hello! My name is",
        title: "Jimmy Quach",
        description: "I build cool stuff.",
        children: /* @__PURE__ */ jsx("span", {
          className: "text-stone-200",
          children: "I'm a software engineer passionate about building amazing applications for users, currently specializing in web and desktop applications."
        })
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "items-left md:block md:w-4/6 lg:w-3/5 xl:w-2/5 md:mr-24 pb-6 md:pb-0 px-6 md:px-0",
      children: /* @__PURE__ */ jsxs("div", {
        className: "justify-center flex flex-wrap md:flex-col md:fixed top-24 z-50 gap-2",
        children: [/* @__PURE__ */ jsx("a", {
          "aria-label": "Visit GitHub profile",
          href: "https://github.com/lulzsun",
          className: "cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-28 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300",
          children: /* @__PURE__ */ jsxs("div", {
            className: "md:fixed left-3.5 inline-flex items-center place-content-center",
            children: [/* @__PURE__ */ jsx(Github, {}), " ", /* @__PURE__ */ jsx("span", {
              className: "pl-3.5",
              children: "GitHub"
            })]
          })
        }), /* @__PURE__ */ jsx("a", {
          "aria-label": "Visit LinkedIn profile",
          href: "https://www.linkedin.com/in/jminquach/",
          className: "cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-32 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300",
          children: /* @__PURE__ */ jsxs("div", {
            className: "md:fixed left-3.5 inline-flex items-center place-content-center",
            children: [/* @__PURE__ */ jsx(Linkedin, {}), " ", /* @__PURE__ */ jsx("span", {
              className: "pl-3.5",
              children: "Linkedin"
            })]
          })
        }), /* @__PURE__ */ jsx("button", {
          "aria-label": "View resume",
          onClick: () => {
            var _a;
            (_a = document.getElementById("resumePdf")) == null ? void 0 : _a.click();
          },
          className: "cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-32 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300",
          children: /* @__PURE__ */ jsxs("div", {
            className: "md:fixed left-3.5 inline-flex items-center place-content-center",
            children: [/* @__PURE__ */ jsx(FileEarmarkPdf, {}), " ", /* @__PURE__ */ jsx("span", {
              className: "pl-3.5",
              children: "Resume"
            })]
          })
        }), /* @__PURE__ */ jsx("a", {
          "aria-label": "Visit blog",
          href: "/blog",
          className: "cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-24 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300",
          children: /* @__PURE__ */ jsxs("div", {
            className: "md:fixed left-3.5 inline-flex items-center place-content-center",
            children: [/* @__PURE__ */ jsx(ChatLeftQuoteFill, {}), " ", /* @__PURE__ */ jsx("span", {
              className: "pl-3.5",
              children: "Blog"
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6",
      children: [/* @__PURE__ */ jsx("div", {
        className: "pb-4 text-white-400 text-2xl",
        children: /* @__PURE__ */ jsx("span", {
          className: "text-stone-400",
          children: "/* About Me */"
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "text-stone-200",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex flex-row",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "flex flex-col space-y-2 mr-2",
            children: [/* @__PURE__ */ jsx("span", {
              children: "My first ever computer was some Windows 95 machine that my parents picked up from the side of the road."
            }), /* @__PURE__ */ jsx("span", {
              children: "I grew up fascinated with computers ever since, and eventually found myself to be a self-taught programmer all the way until college."
            }), /* @__PURE__ */ jsxs("span", {
              children: ["Now with a bachelor's degree in computer science, I am looking to find my footing in the ever-growing world of technology. Check out my ", /* @__PURE__ */ jsx("a", {
                className: "cursor-pointer underline underline-offset-2 text-red-300",
                onClick: () => {
                  var _a;
                  (_a = document.getElementById("resumePdf")) == null ? void 0 : _a.click();
                },
                children: "resume"
              }), "."]
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "h-40 rounded-full overflow-hidden drop-shadow-lg",
            style: {
              "minWidth": "10rem"
            },
            children: /* @__PURE__ */ jsx(Image, {
              alt: "baby jimmy in front of windows 95 computer",
              className: "h-44 max-w-none relative -top-0.5 -left-4",
              src: "/win95-2.png"
            })
          })]
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6",
      children: [/* @__PURE__ */ jsx("div", {
        className: "pb-4 text-slate-200 text-2xl",
        children: /* @__PURE__ */ jsx("span", {
          className: "text-stone-400",
          children: "/* Projects */"
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "pb-4 text-stone-200",
        children: "Here are the highlights of some of the projects that I have worked on:"
      }), /* @__PURE__ */ jsxs("span", {
        className: "flex",
        children: [/* @__PURE__ */ jsx("span", {
          className: "px-2 select-none",
          children: "\u2022"
        }), /* @__PURE__ */ jsxs("span", {
          children: [/* @__PURE__ */ jsx("a", {
            className: "underline underline-offset-2 text-red-300",
            href: "https://github.com/lulzsun/RePlays",
            children: "RePlays"
          }), " is a free and open source program that automatically manages recording of detected running games, with a clip editor that allows for quick video sharing."]
        })]
      }), /* @__PURE__ */ jsxs("span", {
        className: "flex",
        children: [/* @__PURE__ */ jsx("span", {
          className: "px-2 select-none",
          children: "\u2022"
        }), /* @__PURE__ */ jsxs("span", {
          children: [/* @__PURE__ */ jsx("a", {
            className: "underline underline-offset-2 text-red-300",
            href: "https://github.com/lulzsun/gecgos.io",
            children: "Gecgos.io"
          }), " is a reimplementation of ", /* @__PURE__ */ jsx("a", {
            className: "underline underline-offset-2 text-red-300",
            href: "https://github.com/geckosio/geckos.io",
            children: "geckos.io"
          }), " in written in Go, which is a library for real-time UDP client/server communication using WebRTC."]
        })]
      })]
    })]
  });
}
export {
  Page,
  metaData
};
