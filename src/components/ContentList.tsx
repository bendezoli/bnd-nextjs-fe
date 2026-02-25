import { ArticleProps } from "@/types";
import { getContent } from "@/data/loaders";
import { Search } from "./Search";

interface ContentListProps {
  headline: string;
  query?: string;
  path: string;
  featured?: boolean;
  component: React.ComponentType<ArticleProps & { basePath: string }>;
  headlineAlignment?: "center" | "right" | "left";
  showSearch?: boolean;
}

async function loader(path: string, featured?: boolean, query?: string) {
  const { data, meta } = await getContent(path, featured, query);
  return {
    articles: (data as ArticleProps[]) || [],
  };
}

export async function ContentList({
  headline,
  path,
  component,
  headlineAlignment,
  featured,
  showSearch,
  query,
}: Readonly<ContentListProps>) {
  const { articles } = await loader(path, featured, query);
  const Component = component;
  // console.log("ContentList loaded with articles:", articles);
  // console.log("Using component:", Component);
  // console.log("Path:", path);
  return (
    <div className="content-items container my-10">
      <div
        className={`content-items__headline text-2xl md:text-4xl font-bold feature-title-wrapper mb-10 ${headlineAlignment ?? ""}`}
      >
        {headline || "Featured Articles"}
      </div>
      {showSearch && <Search />}
      <div className="content-items__container--card grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Component key={article.documentId} {...article} basePath={path} />
        ))}
      </div>
    </div>
  );
}
