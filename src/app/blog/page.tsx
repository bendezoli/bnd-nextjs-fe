import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/BlockRenderer";
import { ContentList } from "@/components/ContentList";
import { BlogCards } from "@/components/cards/BlogCards";

async function loader(slug: string) {
  console.log("Loading page with slug:", slug);
  const { data } = await getPageBySlug(slug);

  if (data.length === 0) notFound();
  return { blocks: data[0]?.blocks ?? [] };
}

export default async function BlogRoute() {
  const { blocks } = await loader("blog");

  return (
    <div className="blog-page">
      <BlockRenderer blocks={blocks} />
      <div className=" flex">
        <ContentList
          headline="Latest Articles"
          path="api/articles"
          component={BlogCards}
        />
      </div>
    </div>
  );
}
