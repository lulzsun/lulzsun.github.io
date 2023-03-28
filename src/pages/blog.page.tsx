import { HouseDoor } from "react-bootstrap-icons";
import BlogCard from "../components/blog/BlogCard";
import Header from "../components/Header";

interface Props {
  posts: {
    metaData: {
      id: string,
      title: string,
      description: string,
      createdAt: Date
    }
  }[]
  pageHtml: string
}

export const metaData = {
  title: 'Blog | Jimmy Quach',
  description: "Jimmy Quach's amazingly awesome and cool blog."
}

export const Page: React.FC<Props> = ({posts}) => {
  return <>
{/*        */}
{/* HEADER */}
{/*        */}
    <div className="sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6">
      <Header greeting="Hey! Welcome to" title="Jimmy Quach's" description={<>
        Blog.
        <span className="pl-1 text-xs text-stone-400 whitespace-pre-line">
          (where I write about stuff no one else will read)
        </span>
      </>}>
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
        <a href="/" className="cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-28 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
          <div className="md:fixed left-3.5 inline-flex items-center place-content-center">
            <HouseDoor/> <span className="pl-3.5">Home</span>
          </div>
        </a>
      </div>
    </div>
{/*            */}
{/* BLOG CARDS */}
{/*            */}
    <div className="grid gap-4 sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6 -my-6">
      {Object.keys(posts).map((_post, i) => {
        return <BlogCard key={i} metaData={posts[i].metaData} >{}</BlogCard>;
      })}
    </div>
  </>
}