import { MarkdownComponents } from "../../../components/blog/MarkdownComponents";
import ReactMarkdown from "react-markdown";
import dedent from "dedent";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import BlogPost from "../../../components/blog/BlogPost";

export const metadata = {
  title: "What in the Whirled? | Jimmy Quach",
  description: "Next-gen social media? Or one boy's garage dream project?",
  tags: ["software", "whirled"],
  created: new Date("2026-5-29"),
};

export default function Page() {
  return (
    <BlogPost>
      <div className="w-5/6 sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 flex flex-col gap-6">
        <ReactMarkdown
          components={MarkdownComponents}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          children={dedent`
        # What in the Whirled?
        ...still writing this blog post! I can't believe you're here early!
      `}
        />
      </div>
    </BlogPost>
  );
}
