import ReactDOMServer from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { Github, Linkedin, FileEarmarkPdf, ChatLeftQuoteFill, Envelope, Download, Printer, XLg } from "react-bootstrap-icons";
import { j as jsxs, F as Fragment, a as jsx } from "../../chunks/afe7bc3e.js";
import Modal from "react-modal";
import { useState } from "react";
import { Font, StyleSheet, Document, Page, View, Text, PDFViewer, pdf } from "@react-pdf/renderer";
import fileSaver from "file-saver";
import "react/jsx-runtime";
const Footer = ({
  openResume
}) => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex flex-row sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 pt-16 md:pb-16 place-content-center items-center gap-6",
      children: [/* @__PURE__ */ jsx("a", {
        "aria-label": "Visit GitHub profile",
        className: "hover:underline underline-offset-2 hover:text-red-300",
        href: "https://github.com/lulzsun",
        children: /* @__PURE__ */ jsxs("div", {
          className: "inline-flex items-center place-content-center",
          children: [/* @__PURE__ */ jsx(Github, {}), " ", /* @__PURE__ */ jsx("span", {
            className: "pl-3.5",
            children: "GitHub"
          })]
        })
      }), /* @__PURE__ */ jsx("span", {
        children: "\u2022"
      }), /* @__PURE__ */ jsx("a", {
        "aria-label": "Visit LinkedIn profile",
        className: "hover:underline underline-offset-2 hover:text-red-300",
        href: "https://www.linkedin.com/in/jminquach/",
        children: /* @__PURE__ */ jsxs("div", {
          className: "inline-flex items-center place-content-center",
          children: [/* @__PURE__ */ jsx(Linkedin, {}), " ", /* @__PURE__ */ jsx("span", {
            className: "pl-3.5",
            children: "LinkedIn"
          })]
        })
      }), /* @__PURE__ */ jsx("span", {
        children: "\u2022"
      }), /* @__PURE__ */ jsx("button", {
        "aria-label": "View resume",
        id: "resumePdf",
        onClick: openResume,
        className: "hover:underline underline-offset-2 hover:text-red-300 cursor-pointer",
        children: /* @__PURE__ */ jsxs("div", {
          className: "inline-flex items-center place-content-center",
          children: [/* @__PURE__ */ jsx(FileEarmarkPdf, {}), " ", /* @__PURE__ */ jsx("span", {
            className: "pl-3.5",
            children: "Resume"
          })]
        })
      }), /* @__PURE__ */ jsx("span", {
        className: "hidden md:block",
        children: "\u2022"
      }), /* @__PURE__ */ jsx("a", {
        "aria-label": "Visit blog",
        className: "hidden md:block hover:underline underline-offset-2 hover:text-red-300",
        href: "/blog",
        children: /* @__PURE__ */ jsxs("div", {
          className: "inline-flex items-center place-content-center",
          children: [/* @__PURE__ */ jsx(ChatLeftQuoteFill, {}), " ", /* @__PURE__ */ jsx("span", {
            className: "pl-3.5 whitespace-nowrap",
            children: "Blog"
          })]
        })
      }), /* @__PURE__ */ jsx("span", {
        className: "hidden md:block",
        children: "\u2022"
      }), /* @__PURE__ */ jsx("a", {
        "aria-label": "Send me an email",
        className: "hidden md:block hover:underline underline-offset-2 hover:text-red-300",
        href: "mailto:jminquach@gmail.com",
        children: /* @__PURE__ */ jsxs("div", {
          className: "inline-flex items-center place-content-center",
          children: [/* @__PURE__ */ jsx(Envelope, {}), " ", /* @__PURE__ */ jsx("span", {
            className: "pl-3.5 whitespace-nowrap",
            children: "Contact Me"
          })]
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "md:hidden flex items-center gap-6",
      children: [/* @__PURE__ */ jsx("a", {
        "aria-label": "Visit blog",
        className: "pb-16 pt-3 hover:underline underline-offset-2 hover:text-red-300",
        href: "/blog",
        children: /* @__PURE__ */ jsxs("div", {
          className: "inline-flex items-center place-content-center",
          children: [/* @__PURE__ */ jsx(ChatLeftQuoteFill, {}), " ", /* @__PURE__ */ jsx("span", {
            className: "pl-3.5 whitespace-nowrap",
            children: "Blog"
          })]
        })
      }), /* @__PURE__ */ jsx("span", {
        className: "pb-16 pt-3",
        children: "\u2022"
      }), /* @__PURE__ */ jsx("a", {
        "aria-label": "Send me an email",
        className: "pb-16 pt-3 md:hidden block hover:underline underline-offset-2 hover:text-red-300",
        href: "mailto:jminquach@gmail.com",
        children: /* @__PURE__ */ jsxs("div", {
          className: "inline-flex items-center place-content-center",
          children: [/* @__PURE__ */ jsx(Envelope, {}), " ", /* @__PURE__ */ jsx("span", {
            className: "pl-3.5 whitespace-nowrap",
            children: "Contact Me"
          })]
        })
      })]
    })]
  });
};
Font.register({
  family: "Petrona",
  fonts: [{
    src: "/fonts/Petrona-Regular.ttf"
  }, {
    src: "/fonts/Petrona-Bold.ttf",
    fontStyle: "bold"
  }, {
    src: "/fonts/Petrona-Italic.ttf",
    fontStyle: "italic"
  }]
});
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    margin: "1in",
    marginTop: "0.85in"
  },
  header: {
    fontFamily: "Petrona",
    alignContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "6.3in",
    marginBottom: "8pt"
  },
  contact: {
    fontFamily: "Petrona",
    display: "flex",
    flexDirection: "row",
    fontSize: "11pt",
    width: "6.3in",
    paddingLeft: "0.5in",
    paddingRight: "0.5in",
    marginBottom: "8pt"
  },
  heading: {
    fontFamily: "Petrona",
    fontSize: "12pt",
    borderBottomWidth: "1px",
    width: "6.3in",
    borderBottomColor: "#0",
    marginBottom: "8pt"
  },
  section: {
    paddingLeft: "16pt",
    fontFamily: "Petrona",
    fontSize: "11pt",
    flexDirection: "column",
    width: "6.3in",
    marginBottom: "4pt"
  }
});
const Resume = () => /* @__PURE__ */ jsx(Document, {
  children: /* @__PURE__ */ jsxs(Page, {
    size: "A4",
    style: styles.page,
    children: [/* @__PURE__ */ jsx(View, {
      style: styles.header,
      children: /* @__PURE__ */ jsx(Text, {
        style: {
          fontSize: "25pt",
          fontStyle: "bold",
          borderBottomWidth: "1px",
          width: "6.3in",
          borderBottomColor: "#0",
          paddingBottom: "4pt"
        },
        children: "JIMMY QUACH"
      })
    }), /* @__PURE__ */ jsxs(View, {
      style: styles.contact,
      children: [/* @__PURE__ */ jsx(Text, {
        style: {
          textAlign: "center"
        },
        children: "(714) 623-3495"
      }), /* @__PURE__ */ jsx(Text, {
        style: {
          flex: 1,
          textAlign: "center",
          fontSize: "20pt",
          fontStyle: "bold",
          marginTop: "-5pt"
        },
        children: "\u2022"
      }), /* @__PURE__ */ jsx(Text, {
        style: {
          textAlign: "center"
        },
        children: "Fullerton, CA"
      }), /* @__PURE__ */ jsx(Text, {
        style: {
          flex: 1,
          textAlign: "center",
          fontSize: "20pt",
          fontStyle: "bold",
          marginTop: "-5pt"
        },
        children: "\u2022"
      }), /* @__PURE__ */ jsx(Text, {
        style: {
          textAlign: "center"
        },
        children: "jminquach@gmail.com"
      }), /* @__PURE__ */ jsx(Text, {
        style: {
          flex: 1,
          textAlign: "center",
          fontSize: "20pt",
          fontStyle: "bold",
          marginTop: "-5pt"
        },
        children: "\u2022"
      }), /* @__PURE__ */ jsx(Text, {
        style: {
          textAlign: "center"
        },
        children: "www.jimmyqua.ch"
      })]
    }), /* @__PURE__ */ jsx(View, {
      style: styles.heading,
      children: /* @__PURE__ */ jsx(Text, {
        children: "EDUCATION"
      })
    }), /* @__PURE__ */ jsxs(View, {
      style: styles.section,
      children: [/* @__PURE__ */ jsxs(View, {
        style: {
          paddingBottom: "2pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            fontStyle: "bold"
          },
          children: "California State University, Fullerton"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            textAlign: "right"
          },
          children: "Fullerton, CA"
        })]
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingBottom: "4pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1
          },
          children: "Bachelor of Science In Computer Science"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            textAlign: "right"
          },
          children: "Expected: June 2024"
        })]
      }), "o", /* @__PURE__ */ jsxs(View, {
        style: {
          paddingBottom: "2pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            fontStyle: "bold"
          },
          children: "Fullerton College"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            textAlign: "right"
          },
          children: "Fullerton, CA"
        })]
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingBottom: "4pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1
          },
          children: "Associate of Science In Computer Science"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            textAlign: "right"
          },
          children: "May 2022"
        })]
      }), /* @__PURE__ */ jsx(View, {
        style: {
          paddingBottom: "2pt",
          flexDirection: "row"
        },
        children: /* @__PURE__ */ jsx(Text, {
          style: {
            fontStyle: "bold"
          },
          children: "Noteworthy Courses: "
        })
      }), /* @__PURE__ */ jsx(View, {
        style: {
          paddingBottom: "4pt",
          flexDirection: "row"
        },
        children: /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1
          },
          children: "Algorithm Engineering, Assembly Language Programming, Compilers and Languages, File Structure & Database, Java Programming, Software Engineering, Web Front-End Engineering"
        })
      })]
    }), /* @__PURE__ */ jsx(View, {
      style: styles.heading,
      children: /* @__PURE__ */ jsx(Text, {
        children: "SKILLS"
      })
    }), /* @__PURE__ */ jsxs(View, {
      style: styles.section,
      children: [/* @__PURE__ */ jsxs(View, {
        style: {
          paddingBottom: "5pt",
          width: "6.3in",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.4pt"
          },
          children: "Programming Languages:"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1
          },
          children: "C#, Go, Javascript, Typescript, SQL"
        })]
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingBottom: "5pt",
          width: "6.3in",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.4pt"
          },
          children: "Markup Languages:"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1
          },
          children: "CSS, HTML, JSON, XML"
        })]
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingBottom: "5pt",
          width: "6.3in",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.4pt"
          },
          children: "Frameworks/Libraries:"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1
          },
          children: ".NET Core, Node.js, Next.js, React, TailwindCSS, Three.js"
        })]
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingBottom: "5pt",
          width: "6.3in",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.4pt"
          },
          children: "Software/Tools:"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1
          },
          children: "Git, Visual Studio, VS Code, MongoDB, PostgreSQL, SQLite"
        })]
      })]
    }), /* @__PURE__ */ jsx(View, {
      style: styles.heading,
      children: /* @__PURE__ */ jsx(Text, {
        children: "PROJECTS"
      })
    }), /* @__PURE__ */ jsxs(View, {
      style: styles.section,
      children: [/* @__PURE__ */ jsxs(View, {
        style: {
          paddingBottom: "4pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            fontStyle: "bold"
          },
          children: "RePlays"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            textAlign: "right"
          },
          children: "github.com/lulzsun/RePlays"
        })]
      }), /* @__PURE__ */ jsx(View, {
        style: {
          paddingBottom: "4pt",
          flexDirection: "row"
        },
        children: /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1
          },
          children: "A desktop application that automatically screen captures full recordings of detected video games on the system, with a built-in clip editor that allows for quick video editing and sharing."
        })
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingLeft: "32pt",
          marginTop: "-6pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.04pt",
            fontSize: "20pt",
            fontStyle: "bold",
            marginLeft: "-16pt"
          },
          children: "\u2022"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            marginTop: "6pt"
          },
          children: "Utilization of GitHub's CI/CD pipeline to automatically generate builds on conditions"
        })]
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingLeft: "32pt",
          marginTop: "-6pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.04pt",
            fontSize: "20pt",
            fontStyle: "bold",
            marginLeft: "-16pt"
          },
          children: "\u2022"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            marginTop: "6pt"
          },
          children: "Desktop application back-end powered by .NET Core/C# and is cross-platform capable"
        })]
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingLeft: "32pt",
          marginTop: "-6pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.04pt",
            fontSize: "20pt",
            fontStyle: "bold",
            marginLeft: "-16pt"
          },
          children: "\u2022"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            marginTop: "6pt"
          },
          children: "Desktop application front-end powered by React & TailwindCSS, written in Typescript"
        })]
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingLeft: "32pt",
          marginTop: "-6pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.04pt",
            fontSize: "20pt",
            fontStyle: "bold",
            marginLeft: "-16pt"
          },
          children: "\u2022"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            marginTop: "6pt"
          },
          children: "Developed assisting C# wrapper around C++ library to hook into low level functions"
        })]
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingLeft: "32pt",
          marginTop: "-6pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.04pt",
            fontSize: "20pt",
            fontStyle: "bold",
            marginLeft: "-16pt"
          },
          children: "\u2022"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            marginTop: "6pt"
          },
          children: "Managed open-source collaborators who assist in development by doing code reviews"
        })]
      })]
    }), /* @__PURE__ */ jsxs(View, {
      style: styles.section,
      children: [/* @__PURE__ */ jsxs(View, {
        style: {
          paddingBottom: "4pt",
          paddingTop: "4pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            fontStyle: "bold"
          },
          children: "Gecgos.io"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            textAlign: "right"
          },
          children: "github.com/lulzsun/gecgos.io"
        })]
      }), /* @__PURE__ */ jsx(View, {
        style: {
          paddingBottom: "4pt",
          flexDirection: "row"
        },
        children: /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1
          },
          children: "A re-implementation of an open source library called Geckos.io written in Go, allowing for performant, real-time, client-server model UDP network communication using WebRTC."
        })
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingLeft: "32pt",
          marginTop: "-6pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.04pt",
            fontSize: "20pt",
            fontStyle: "bold",
            marginLeft: "-16pt"
          },
          children: "\u2022"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            marginTop: "6pt"
          },
          children: "Rewrote original library's Node.js/Typescript codebase to Go for better performance"
        })]
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingLeft: "32pt",
          marginTop: "-6pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.04pt",
            fontSize: "20pt",
            fontStyle: "bold",
            marginLeft: "-16pt"
          },
          children: "\u2022"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            marginTop: "6pt"
          },
          children: "Developed using event-driven architecture for ease of use with future developers"
        })]
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingLeft: "32pt",
          marginTop: "-6pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.04pt",
            fontSize: "20pt",
            fontStyle: "bold",
            marginLeft: "-16pt"
          },
          children: "\u2022"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            marginTop: "6pt"
          },
          children: "Designed with a concurrent design pattern for efficient use of I/O and multiple CPUs"
        })]
      })]
    }), /* @__PURE__ */ jsxs(View, {
      style: styles.section,
      children: [/* @__PURE__ */ jsxs(View, {
        style: {
          paddingBottom: "4pt",
          paddingTop: "4pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            fontStyle: "bold"
          },
          children: "Whirled"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            textAlign: "right"
          },
          children: "In Progress"
        })]
      }), /* @__PURE__ */ jsx(View, {
        style: {
          paddingBottom: "4pt",
          flexDirection: "row"
        },
        children: /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1
          },
          children: "A social media platform in which users interact with each other in 3-Dimensional virtual spaces with virtual avatars. Heavily inspired by Metaverse & VRChat's virtual realities."
        })
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingLeft: "32pt",
          marginTop: "-6pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.04pt",
            fontSize: "20pt",
            fontStyle: "bold",
            marginLeft: "-16pt"
          },
          children: "\u2022"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            marginTop: "6pt"
          },
          children: "Using Pocketbase, an open-source Firebase alternative for managing a SQL database"
        })]
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingLeft: "32pt",
          marginTop: "-6pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.04pt",
            fontSize: "20pt",
            fontStyle: "bold",
            marginLeft: "-16pt"
          },
          children: "\u2022"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            marginTop: "6pt"
          },
          children: "Developed with React and Vite, with custom framework for server-side rendering"
        })]
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingLeft: "32pt",
          marginTop: "-6pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.04pt",
            fontSize: "20pt",
            fontStyle: "bold",
            marginLeft: "-16pt"
          },
          children: "\u2022"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            marginTop: "6pt"
          },
          children: "Designed with TailwindCSS & Mantine UI, with Three.js to render 3D environments"
        })]
      }), /* @__PURE__ */ jsxs(View, {
        style: {
          paddingLeft: "32pt",
          marginTop: "-6pt",
          flexDirection: "row"
        },
        children: [/* @__PURE__ */ jsx(Text, {
          style: {
            flex: "0.04pt",
            fontSize: "20pt",
            fontStyle: "bold",
            marginLeft: "-16pt"
          },
          children: "\u2022"
        }), /* @__PURE__ */ jsx(Text, {
          style: {
            flex: 1,
            marginTop: "6pt"
          },
          children: "Back-end written in Go to sync player movements using UDP network communication"
        })]
      })]
    }), /* @__PURE__ */ jsx(View, {
      style: styles.heading,
      children: /* @__PURE__ */ jsx(Text, {
        children: "PERSONAL INTERESTS"
      })
    }), /* @__PURE__ */ jsx(View, {
      style: styles.section,
      children: /* @__PURE__ */ jsx(View, {
        style: {
          paddingBottom: "5pt",
          width: "6.3in",
          flexDirection: "row"
        },
        children: /* @__PURE__ */ jsx(Text, {
          children: "3D printing, Electronics & soldering, Hardware development (PCB Schematics & Design), Self-hosted web services, Video games (League of Legends, Tekken), Virtualization (Proxmox)"
        })
      })
    })]
  })
});
const ResumePDF = () => /* @__PURE__ */ jsx(PDFViewer, {
  className: "w-full h-full",
  children: /* @__PURE__ */ jsx(Resume, {})
});
const {
  saveAs
} = fileSaver;
const PageShell = ({
  children
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col items-center h-screen pt-10 font-ptsans",
      children: [/* @__PURE__ */ jsx(Modal, {
        isOpen: modalIsOpen,
        onRequestClose: closeModal,
        onAfterOpen: () => document.body.style.overflow = "hidden",
        onAfterClose: () => document.body.style.overflow = "unset",
        overlayClassName: "fixed inset-0 z-50",
        className: "focus:outline-none absolute top-0 bottom-0 right-0 left-0 md:top-20 md:bottom-20 md:right-20 md:left-20 p-6 md:rounded-lg",
        style: {
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          },
          content: {
            backgroundColor: "rgb(32 32 32)"
          }
        },
        contentLabel: "Resume Modal",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col h-full",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "w-full flex-initial",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex gap-3 md:absolute md:mt-0 -mt-2 mb-4 float-left left-0 -top-5 -left-5",
              children: [/* @__PURE__ */ jsx("a", {
                onClick: async () => {
                  let blob = await pdf(Resume()).toBlob();
                  saveAs(blob, "Jimmy Quach's Resume.pdf");
                },
                className: "cursor-pointer group overflow-hidden bg-neutral-800 w-auto h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "inline-flex items-center place-content-center px-4",
                  children: [/* @__PURE__ */ jsx(Download, {}), " ", /* @__PURE__ */ jsx("span", {
                    className: "pl-3.5 whitespace-nowrap",
                    children: "Download"
                  })]
                })
              }), /* @__PURE__ */ jsx("a", {
                onClick: async () => {
                  let blob = await pdf(Resume()).toBlob();
                  let pdfFile = URL.createObjectURL(blob);
                  window.open(pdfFile, "PRINT");
                },
                className: "cursor-pointer group overflow-hidden bg-neutral-800 w-11 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300",
                children: /* @__PURE__ */ jsx("div", {
                  className: "inline-flex items-center place-content-center",
                  children: /* @__PURE__ */ jsx(Printer, {})
                })
              })]
            }), /* @__PURE__ */ jsx("a", {
              onClick: closeModal,
              className: "md:absolute md:mt-0 -mt-2 mb-4 float-right right-0 -top-5 -right-5 cursor-pointer group overflow-hidden bg-neutral-800 w-11 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300",
              children: /* @__PURE__ */ jsx("div", {
                className: "items-center place-content-center",
                children: /* @__PURE__ */ jsx(XLg, {})
              })
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "pt-0 md:pt-4 flex-auto",
            children: /* @__PURE__ */ jsx(ResumePDF, {})
          })]
        })
      }), children, /* @__PURE__ */ jsx(Footer, {
        openResume: openModal
      })]
    })
  });
};
const passToClient = ["pageProps", "documentProps", "someAsyncProps"];
async function render(pageContext) {
  const {
    Page: Page2,
    pageProps
  } = pageContext;
  let {
    metaData
  } = pageContext.exports;
  if (pageContext.metaData) {
    metaData = pageContext.metaData;
  }
  const title = metaData && metaData.title || "Jimmy forgot to put a title";
  const description = metaData && metaData.description || "Jimmy forgot to put a description";
  const redirectUrl = metaData && metaData.redirectUrl || "";
  const pageHtml = ReactDOMServer.renderToString(/* @__PURE__ */ jsx(PageShell, {
    children: /* @__PURE__ */ jsx(Page2, {
      ...pageProps
    })
  }));
  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
        <meta name="description" content="${description}"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Refresh" content="${redirectUrl !== "" ? "0" : "-1"}; url='${redirectUrl}'" />
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
export {
  passToClient,
  render
};
