import { lazy, Suspense } from "react"
import { Comments } from "../../../components/blog/Comments"

interface Props {
  post: string
  pageHtml: string
}

export const metaData = {
  title: 'Jimmy forgot a title for this blog post...',
  description: "Jimmy forgot a description for this blog post..."
}

export const Page: React.FC<Props> = ({post, pageHtml}) => {
  const BlogPost = lazy(() => import(`./posts/${post}/index.tsx`).then(module => ({ default: module.Page })));
  
  return <>
    <div className="sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6">
      <span className="text-red-400 pb-4">
        reader@jimmyqua.ch:~/blog/{post}$
      </span>
    </div>
    <Suspense fallback={<div className="w-full flex justify-center" dangerouslySetInnerHTML={{__html: pageHtml}}/>}>
      <BlogPost/>
    </Suspense>
    <div className="w-5/6 sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 pt-6 -mb-8">
      <Comments post={post}/>
    </div>
  </>
}