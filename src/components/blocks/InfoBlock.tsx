import { StrapiImage } from "../StrapiImage";
import Link from "next/link";
import type { InfoBlockProps } from "@/types";

export function InfoBlock({
  reversed,
  image,
  title,
  description,
  primaryCta,
  secondaryCta,
}: Readonly<InfoBlockProps>) {
  return (
    <section className={`info  ${reversed && "info--reversed"}`}>
      <div
        className={`info-block-wrapper flex justify-between ${reversed ? "flex-row-reverse" : "flex-row"}`}
      >
        <div className="relative w-[500px] h-[500px]">
          <StrapiImage
            src={image.url}
            alt={image.alternativeText || "No alternative text provided"}
            className="info__image"
          />
        </div>
        <div className="info__text w-[40%] flex flex-col items-center justify-center">
          <h2 className={`info__headline info__headline`}>{title}</h2>
          <div>{description}</div>

          {primaryCta && (
            <Link
              href={primaryCta.href}
              target={primaryCta.isExternal ? "_blank" : "_self"}
            >
              <button className={`btn btn--medium`}>{primaryCta.text}</button>
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              target={secondaryCta.isExternal ? "_blank" : "_self"}
            >
              <button className={`btn btn--medium`}>{secondaryCta.text}</button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
