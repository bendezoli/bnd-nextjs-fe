import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import { ContentList } from "@/components/ContentList";
import { BlogCards } from "@/components/cards/BlogCards";

const loader = async () => {
  const data = await getHomePage();

  if (!data) notFound();
  return { ...data.data };
};

export default async function Home() {
  const data = await loader();
  const blocks = data.blocks || [];

  return (
    <div>
      <main>
        <BlockRenderer blocks={blocks} />
        <ContentList
          headline="Featured Articles"
          path="api/articles"
          component={BlogCards}
          featured
        />
      </main>
    </div>
  );
}
