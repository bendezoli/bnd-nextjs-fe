import type { FeaturedArticleProps } from "@/types";
import Link from "next/link";
import { StrapiImage } from "@/components/StrapiImage";
import MarkdownRenderer from "../MarkdownRenderer";
import HeadingTag from "../HeadingTag";

export function FeaturedArticle({
  title,
  link,
  description,
  image,
  reversed,
  headingTag,
}: Readonly<FeaturedArticleProps>) {
  return (
    <article className="container mx-auto px-4 py-8 md:py-16">
      <div
        className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8`}
      >
        <div className="lg:w-1/2 flex flex-col justify-center gap-4">
          <div className="text-2xl md:text-4xl font-bold text-brand-primary-navy">
            <HeadingTag
              title={title}
              htag={headingTag}
              className="feature-title"
            />
          </div>
          <MarkdownRenderer
            content={description}
            className="text-brand-primary-navy text-base md:text-lg"
          />
          <Link
            href={link.href}
            className="inline-block link link-primary w-fit"
          >
            {link.text}
          </Link>
        </div>

        <div className="lg:w-1/2 w-full h-64 md:h-96 lg:h-[500px] relative rounded-lg overflow-hidden shadow-lg">
          <StrapiImage
            src={image.url}
            alt={image.alternativeText || "No alternative text provided"}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </article>
  );
}
