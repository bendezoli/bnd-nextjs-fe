import type { FeaturedArticleProps } from "@/types";
import Link from "next/link";
import { StrapiImage } from "@/components/StrapiImage";
import MarkdownRenderer from "../MarkdownRenderer";
import HeadingTag from "../HeadingTag";
import ModuleBase from "../ModulaBase";
import { colorFromType, isThemeLight } from "@/utils/color-utils";

export function FeaturedArticle({
  title,
  link,
  description,
  image,
  reversed,
  headingTag,
  padding,
  backgroundColor,
}: Readonly<FeaturedArticleProps>) {
  return (
    <ModuleBase
      data={{
        moduleName: "info-block",
        paddingTop: padding,
        paddingBottom: padding,
        backgroundColourClass: backgroundColor,
      }}
    >
      <article className="container mx-auto">
        <div
          className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8`}
        >
          <div className="lg:w-1/2 flex flex-col justify-center gap-4">
            <div
              className="text-2xl md:text-4xl font-bold feature-title-wrapper"
              style={{ color: colorFromType(backgroundColor) }}
            >
              <HeadingTag
                title={title}
                htag={headingTag}
                className="feature-title"
              />
            </div>
            <div style={{ color: colorFromType(backgroundColor) }}>
              <MarkdownRenderer
                content={description}
                className=" text-base md:text-lg"
              />
            </div>

            <Link
              href={link.href}
              className={`link link-primary w-fit ${isThemeLight(backgroundColor)}`}
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
    </ModuleBase>
  );
}
