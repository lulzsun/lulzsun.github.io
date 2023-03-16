interface Props {
  post: string
  pageHtml: string
}

export const Page: React.FC<Props> = ({post, pageHtml}) => {
  return <>
    {post}
    {/* this is for sure a bad idea... but it works for my purposes */}
    <td dangerouslySetInnerHTML={{__html: pageHtml}} />
  </>
}

export const metaData = {
  title: 'Jimmy forgot a title for this blog post...',
  description: "Jimmy forgot a description for this blog post..."
}