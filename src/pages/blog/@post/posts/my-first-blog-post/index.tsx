import ReactMarkdown from 'react-markdown';
import dedent from "dedent";
import { MarkdownComponents } from '../../../../../components/blog/MarkdownComponents';
import rehypeRaw from 'rehype-raw';
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

export const metaData = {
  title: 'My first blog post! | Jimmy Quach',
  description: "Jimmy Quach's amazingly awesome and cool blog.",
  tags: ["epic"],
  createdAt: new Date("2023-3-16")
}

export const Page: React.FC = () => {
  return <>
    <div className='w-5/6 sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 flex flex-col gap-6'>
      <ReactMarkdown components={MarkdownComponents}
        rehypePlugins={[rehypeRaw]} children={dedent`
        # My first blog post!
        This is the start of my awesome and amazing blog! <span class='text-xs'>(sarcasm)</span>

        As part of a front-end course at my university, I was tasked to create a project built using front-end technologies. At the time, I wasn't sure
        what I wanted to make, so I settled to create this portfolio website.

        However, I didn't want to make a simple single page portfolio, that was something I could do in like a day if you just gave me React and TailwindCSS.

        So I decided that this portfolio website would also host blog posts.

        I had put a lot of thought into what I wanted for a blog, here were my requirements designing my blog content management system:
        1. Markdown
        2. Custom javascript
        3. Comments

        ## Markdown
        I wanted to write my blog posts in markdown to simplify things, so I opted to use [ReactMarkdown](https://github.com/remarkjs/react-markdown).

        It lets me use markdown syntax to do things such as displaying code:
        \`\`\`js
        console.log("hello world");
        \`\`\`

        This way, I don't have to build out HTML/JSX components to write simple blog posts like this whenever I want to create a simple text post.

        ## Custom javascript
        Markdown is cool and all, but really useful for just documentation, articles, text posts with no interactivity.
        
        So I decided that I wanted to incorperate javascript elements as well. This gives me the freedom to do things like this:
      `}/>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      <ReactMarkdown components={MarkdownComponents}
        rehypePlugins={[rehypeRaw]} children={dedent`
        ...while still allowing me to write most of the blog post in markdown.

        ## Comments
        What kind of blog doesn't allow comments? So I had to decide how to implement comments, I settled for a couple of ideas:

        - Statically-built comments
        - Use a third-party package/library/service
        - Write and host a backend

        At the time of building this site, I wanted the whole site to be statically-generated and did not want to write a backend nor host one. I also did not want
        to use a third-party package/library/service to hold all my data (comments). Ultimately, I had to compromise (because I was lazy) and used a 
        [third-party](https://utteranc.es/).

        However, this wasn't a terrible idea compared to my initial plan, which was to use GitHub issues as a way to store user comments and statically generate them
        on the deployment of GitHub Pages. I could have then used a GitHub workflow to redeploy/update the comments anytime there were new comments.

        Utteranc.es does something similar, in that it uses GitHub issues for comments. So I decided on using this to save me time and my sanity building something like
        that from scratch.

        # Conclusion
        I didn't really want a blog... I'm not really the best with words and have trouble with expressing my thoughts through words, especially to others. 

        But I will try my best at documenting my life, interests, and whatnot here when I feel like I'm in the mood to write blog posts.

        Thanks for reading this terrible mess of a blog post. Bet there's not even a dozen readers of this post 🙄.
      `}/>
    </div>
  </>
}

function Box(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}