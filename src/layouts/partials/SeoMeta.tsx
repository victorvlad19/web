"use client";

import config from "@/config/config.json";
import { plainify } from "@/lib/utils/textConverter";
import { usePathname } from "next/navigation";

const SeoMeta = ({
  title,
  meta_title,
  image,
  description,
  canonical,
  noindex,
}: {
  title?: string;
  meta_title?: string;
  image?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;
  const pathname = usePathname();

  return (
    <>
      {/* title */}
      <title>
        {plainify(meta_title ? meta_title : title ? title : config.site.title)}
      </title>

      {/* canonical url */}
      {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

      {/* noindex robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* meta-description */}
      <meta
        name="description"
        content={plainify(description ? description : meta_description)}
      />

      {/* author from config.json */}
      <meta name="author" content={meta_author} />

    </>
  );
};

export default SeoMeta;
