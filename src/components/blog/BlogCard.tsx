import { PageMetadata } from "../../types";
import { BlogFile } from "../Icons";

interface Props {
  metadata: PageMetadata;
  children?: React.ReactNode;
}

export const BlogCard: React.FC<Props> = ({ metadata, children }) => {
  if (!metadata.tags) {
    metadata.tags = ["jimmy", "forgot", "tags"];
  }

  return (
    <li>
      <a href={`/blog/${metadata.id}`}>
        <BlogFile />
        {metadata.id}.html
      </a>
      <ul className="pointer-events-none">
        <li>
          <a>
            <span className="text-base-content/50 -mt-2">
              <span className="font-bold">{metadata.title?.replace(" | Jimmy Quach", "") || "(missing title)"}</span> ·{" "}
              <span className="text-xs italic ">{metadata.description || "(missing description)"}</span>
            </span>
            <div className="text-base-content/50 text-xs ml-auto flex gap-2">
              {metadata.tags &&
                metadata.tags.map((tag, i) => {
                  return (
                    <span key={i} className="">
                      #{tag}
                    </span>
                  );
                })}
            </div>
          </a>
        </li>
      </ul>
    </li>
  );
};

export default BlogCard;
