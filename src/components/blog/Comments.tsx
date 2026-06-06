import { useEffect } from "react";

interface Props {
  post: string;
}

export const Comments: React.FC<Props> = ({ post }) => {
  useEffect(() => {
    if (!post) return;
    const anchor = document.getElementById("inject-comments-for-uterances");
    if (!anchor) return;

    // clear any existing utterances
    anchor.innerHTML = "";

    const script = document.createElement("script");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", "true");
    script.setAttribute("repo", "lulzsun/lulzsun.github.io");
    script.setAttribute("issue-term", post);
    script.setAttribute("theme", "github-dark");
    anchor.appendChild(script);
  }, [post]);

  return <div id="inject-comments-for-uterances" />;
};
