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
  console.log(backgroundImage.url, "backgroundImage");
  return (
    <section className="hero">
      <div className="hero__background relative w-full h-screen">
        <StrapiImage
          src={backgroundImage.url}
          alt={
            backgroundImage.alternativeText || "No alternative text provided"
          }
          className="hero__background-image"
        />
        {darken && <div className="hero__background__overlay"></div>}
      </div>
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
    </section>
  );
}
