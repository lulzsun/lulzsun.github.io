import BlogCard from "../../components/blog/BlogCard.js";
import Header from "../../components/Header.js";
import { BlogFile, DocumentFile, Folder } from "../../components/Icons.js";
import { PageMetadata } from "../../types.js";

export const metadata = {
  title: "Blog | Jimmy Quach",
  description: "Jimmy Quach's amazingly awesome and cool blog.",
};

export default function Page() {
  const posts = import.meta.glob("./**/+Page.tsx", { eager: true }) as Record<string, { metadata: PageMetadata }>;
  return (
    <>
      {/*        */}
      {/* HEADER */}
      {/*        */}
      <div className="sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6">
        <Header
          greeting="Hey! Welcome to"
          title="Jimmy Quach's"
          description={
            <>
              Blog.
              <span className="pl-1 text-xs text-stone-400 whitespace-pre-line">
                (where I write about stuff no one else will read)
              </span>
            </>
          }
        >
          <div className="text-stone-200">
            This is a small spot on the internet of where I talk about my interests and vent my frustrations. Enjoy.
          </div>
        </Header>
      </div>
      {/*              */}
      {/* STICKY LINKS */}
      {/*              */}
      <div className="items-left md:block md:w-4/6 lg:w-3/5 xl:w-2/5 md:mr-24 pb-6 md:pb-0 px-6 md:px-0">
        <div className="justify-center flex flex-wrap md:flex-col md:fixed top-24 z-50 gap-2">
          <a
            href="/"
            className="cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-28 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300"
          >
            <div className="md:fixed left-3.5 inline-flex items-center place-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
              </svg>{" "}
              <span className="pl-3.5">Home</span>
            </div>
          </a>
        </div>
      </div>
      {/*               */}
      {/* BLOG EXPLORER */}
      {/*               */}
      <ul className="menu rounded-box sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6 -my-6">
        <li>
          <details open>
            <summary>
              <Folder />
              My Blog Posts
            </summary>
            <ul>
              {Object.entries(posts)
                .filter(([, post]) => post.metadata && !post.metadata.tags?.includes("recipe"))
                .sort(([, a], [, b]) => {
                  const dateA = new Date(a.metadata!.created ?? 0).getTime();
                  const dateB = new Date(b.metadata!.created ?? 0).getTime();
                  return dateA - dateB; // old to new
                })
                .map(([path, post]) => {
                  if (post.metadata) {
                    if (post.metadata.tags?.includes("recipe")) return null;
                    const slug = path.replace("./", "").replace("/+Page.tsx", "");
                    const metadata = { ...post.metadata, id: post.metadata.id ?? slug };
                    return <BlogCard metadata={metadata} />;
                  }
                  return null;
                })}
              <li>
                <details open>
                  <summary>
                    <Folder />
                    Recipes
                  </summary>
                  <ul>
                    {Object.entries(posts).map(([path, post]) => {
                      if (post.metadata) {
                        if (!post.metadata.tags?.includes("recipe")) return;
                        const slug = path.replace("./", "").replace("/+Page.tsx", "");
                        const metadata = { ...post.metadata, id: post.metadata.id ?? slug };
                        return <BlogCard metadata={metadata} />;
                      }
                    })}
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <DocumentFile />
            bitcoin-wallet-private-keys.txt
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              document.getElementById("resumePdf")?.click();
            }}
          >
            <DocumentFile />
            resume.pdf
          </a>
        </li>
      </ul>
    </>
  );
}
