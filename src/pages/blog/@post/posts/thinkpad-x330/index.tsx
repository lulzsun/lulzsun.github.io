import ReactMarkdown from 'react-markdown';
import dedent from "dedent";
import { MarkdownComponents } from '../../../../../components/blog/MarkdownComponents';
import rehypeRaw from 'rehype-raw';

export const metaData = {
  title: 'ThinkPad x230 (x330) | Jimmy Quach',
  description: "My documented adventure where I mod my personal laptop.",
  tags: ["hardware", "modding"],
  createdAt: new Date("2023-3-27")
}

export function Page() {
  return <>
    <div className='w-5/6 sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 flex flex-col gap-6'>
      <ReactMarkdown components={MarkdownComponents}
        rehypePlugins={[rehypeRaw]} children={dedent`
        # ThinkPad x230 (x330)
        Blog to be written...
      `}/>
    </div>
  </>
}