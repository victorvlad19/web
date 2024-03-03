import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import dateFormat from "@/lib/utils/dateFormat";
import { humanize, plainify, slugify } from "@/lib/utils/textConverter";
import { Post } from "@/types";
import Link from "next/link";
import { FaRegFolder, FaRegUserCircle } from "react-icons/fa";
import { FaThList } from "react-icons/fa";

const BlogCard = ({ data }: { data: Post }) => {
  const { summary_length, blog_folder } = config.settings;
  const { title, image, author, categories, date } = data.frontmatter;
  return (
    <div className="bg-body dark:bg-darkmode-body">
      <Link href={`/${blog_folder}/${data.slug}`}>
      {image && (
        <ImageFallback
          className="mb-6 w-full rounded"
          src={image}
          alt={title}
          width={445}
          height={230}
        />
      )}
      </Link>
      <h4 className="mb-3">
        <Link href={`/${blog_folder}/${data.slug}`}>{title}</Link>
      </h4>
      <ul className="mb-4">

        <li className="mr-4 inline-block">
          <FaThList className={"-mt-1 mr-2 inline-block"} />
          {categories?.map((category: string, index: number) => (
            <span key={index}>
              {humanize(category)}
              {index !== categories.length - 1 && ", "}
            </span>
          ))}
        </li>

      </ul>
    </div>
  );
};

export default BlogCard;
