import { FC, forwardRef, ReactNode, useEffect, useRef } from "react"
import { Comments } from "../../../components/blog/Comments"
import type { Override } from "react";

interface Props {
  post: string
  pageHtml: string
}

export const metaData = {
  title: 'Jimmy forgot a title for this blog post...',
  description: "Jimmy forgot a description for this blog post..."
}

export const Page: React.FC<Props> = ({post, pageHtml}) => {
  return <>
    <div className="sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6">
      <span className="text-red-400 pb-4">
        reader@jimmyqua.ch:~/blog/{post}$
      </span>
    </div>
    <RawHtml html={pageHtml}/>
    <div className="w-5/6 sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 pt-6 -mb-8">
      <Comments post={post}/>
    </div>
  </>
}

interface RawHtmlProps {
  html: string
}

const RawHtml: FC<RawHtmlProps> = ({ html }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
      if (!ref.current) return

      // make a js fragment element
      const fragment = document.createDocumentFragment()

      // move every child from our div to new fragment
      while (ref.current.childNodes[0]) {
          fragment.appendChild(ref.current.childNodes[0])
      }

      // and after all replace the div with fragment
      ref.current.replaceWith(fragment)
  }, [ref])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }}></div>
}