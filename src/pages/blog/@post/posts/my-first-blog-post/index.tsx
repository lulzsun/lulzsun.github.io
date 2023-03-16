import ReactMarkdown from 'react-markdown';
import dedent from "dedent";

export const metaData = {
  title: 'My first blog post! | Jimmy Quach',
  description: "Jimmy Quach's amazingly awesome and cool blog."
}

export function Page() {
  return <>
    <ReactMarkdown className='whitespace-pre-wrap' children={dedent`
      # Hello, *world*!
      This is the start of my awesome blog, testing React Markdown!
      \`\`\`js
        console.log("hello world");
      \`\`\`
    `}/>
  </>
}