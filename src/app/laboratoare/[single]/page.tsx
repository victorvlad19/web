import BlogCard from "@/components/BlogCard";
import Disqus from "@/components/Disqus";
import Share from "@/components/Share";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import dateFormat from "@/lib/utils/dateFormat";
import similerItems from "@/lib/utils/similarItems";
import { humanize, markdownify, slugify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";
import Link from "next/link";
import { FaRegClock, FaRegFolder, FaRegUserCircle } from "react-icons/fa";

const { blog_folder } = config.settings;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const posts: Post[] = getSinglePage(blog_folder);

  const paths = posts.map((post) => ({
    single: post.slug!,
  }));

  return paths;
};

const PostSingle = ({ params }: { params: { single: string } }) => {
  const posts: Post[] = getSinglePage(blog_folder);
  const post = posts.filter((page) => page.slug === params.single)[0];

  const { frontmatter, content } = post;
  const {
    title,
    meta_title,
    description,
    image,
    author,
    categories,
    date,
    tags,
  } = frontmatter;
  const similarPosts = similerItems(post, posts, post.slug!);

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section pt-7">
        <div className="container">
          <div className="row justify-center">
            <article className="lg:col-10">
              <h1
                dangerouslySetInnerHTML={markdownify(title)}
                className="h2 mb-4 text-center"
              />
              <ul className="mb-4 text-center">
                <li className="mr-4 inline-block">
                  <FaRegFolder className={"-mt-1 mr-2 inline-block"} />
                  {categories?.map((category: string, index: number) => (
                    <span
                      key={category}
                    >
                      {humanize(category)}
                      {index !== categories.length - 1 && ", "}
                    </span>
                  ))}
                </li>
              </ul>
              <div className="content mb-10">
                <MDXContent content={content} />
              </div>
              <Disqus className="mt-20" />
            </article>
          </div>

        </div>
      </section>
    </>
  );
};

export default PostSingle;
