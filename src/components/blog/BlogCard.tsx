interface Props {
  metaData: {
    id: string,
    title?: string,
    description?: string,
    image?: string,
    tags?: string[],
  }
  children?: JSX.Element|JSX.Element[]|string;
}

export const BlogCard: React.FC<Props> = ({metaData, children}) => {
  if (!metaData.tags) {
    metaData.tags = ["jimmy", "forgot", "tags"]
  }

  return (
    <a href={"/blog/" + metaData.id} className="cursor-pointer w-full rounded-xl overflow-hidden bg-stone-800 shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">// {metaData.title?.replace(" | Jimmy Quach", "") || "(jimmy forgot the title)"}</div>
        <p className="text-base">
          {metaData.description || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {metaData.tags && metaData.tags.map((tag, i) => {
          return <span key={i} className="inline-block bg-neutral-800 drop-shadow-lg rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 duration-300">#{tag}</span>;
        })}
      </div>
    </a>
  )
}

export default BlogCard;