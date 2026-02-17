import Link from "next/link";
import { StrapiImage } from "../StrapiImage";
import type { HeroSectionProps } from "../../types";

export function HeroSection({
  heading,
  cta,
  backgroundImage,

  author,
  publishedAt,
  darken = false,
}: Readonly<HeroSectionProps>) {
  return (
    <section className="hero">
      <div className="hero__background relative w-full h-screen">
        <StrapiImage
          src={backgroundImage.url}
          alt={
            backgroundImage.alternativeText || "No alternative text provided"
          }
          className=""
        />
        {darken && <div className="absolute inset-0 bg-black/50"></div>}
      </div>
      <div className="hero-text-wrapper absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
        <div className={`hero__heading hero__heading--`}>
          <h1>{heading}</h1>
          {author && <p className="hero__author">{author}</p>}
          {publishedAt && <p className="hero__published-at">{publishedAt}</p>}
        </div>
        {cta && (
          <button className={`btn btn--medium btn--`}>
            <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
              {cta.text}
            </Link>
          </button>
        )}
      </div>
    </section>
  );
}
