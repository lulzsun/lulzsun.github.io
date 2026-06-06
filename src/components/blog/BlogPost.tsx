import { usePageContext } from "vike-react/usePageContext";
import { Comments } from "./Comments";
import { useEffect, useState } from "react";

interface Props {
  comments?: Boolean;
  children?: React.ReactNode;
}

export const BlogPost: React.FC<Props> = ({ children, comments }) => {
  const pageContext = usePageContext();
  const post = pageContext.urlPathname.replace(/\/$/, "").split("/").pop();

  return (
    <>
      <div className="sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6 flex flex-col">
        <span className="">
          <a href="/" className="text-red-400 hover:underline underline-offset-2 hover:text-red-300">
            reader@jimmyqua.ch: ~
          </a>
          /
          <a href="/blog" className="text-red-400 hover:underline underline-offset-2 hover:text-red-300">
            blog
          </a>
          /{post} $
        </span>
      </div>
      {children}
      <div className="w-5/6 sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 pt-6 -mb-8">
        {comments !== false && post !== undefined && <Comments post={post} />}
      </div>
    </>
  );
};

export default BlogPost;
