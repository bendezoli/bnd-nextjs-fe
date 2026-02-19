import { StrapiImage } from "../StrapiImage";
import Link from "next/link";
import type { InfoBlockProps } from "@/types";
import MarkdownRenderer from "../MarkdownRenderer";
import ModuleBase from "../ModulaBase";
import { colorFromType, isThemeLight } from "@/utils/color-utils";

export function InfoBlock({
  reversed,
  image,
  title,
  description,
  primaryCta,
  secondaryCta,
  padding,
  backgroundColor,
}: Readonly<InfoBlockProps>) {
  return (
    <ModuleBase
      data={{
        moduleName: "info-block",
        paddingTop: padding,
        paddingBottom: padding,
        backgroundColourClass: backgroundColor,
      }}
    >
      <div className={`info-block ${reversed && "info--reversed"}`}>
        <div
          className={`
          info-block-wrapper 
          container
          flex 
          flex-col 
          lg:flex-row 
          justify-between 
          items-center
          ${reversed ? "lg:flex-row-reverse" : ""}
        `}
        >
          {image && (
            <div className="relative w-[200px] h-[300px] md:w-[500px] md:h-[700px]">
              <StrapiImage
                src={image.url}
                alt={image.alternativeText || "No alternative text provided"}
                className="info__image object-cover w-full h-full"
              />
            </div>
          )}

          <div
            className={`info__text w-full md:w-[40%] lg:w-[60%] flex flex-col items-center justify-center mt-6 md:mt-0`}
            style={{ color: colorFromType(backgroundColor) }}
          >
            <h2 className="info__headline  text-[32px] leading-[38px] md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[56px]">
              {title}
            </h2>

            <div className="info__description my-10">
              <MarkdownRenderer
                content={description}
                className="text-center text-4 leading-6"
              />
            </div>

            <div className="btn-wrapper flex gap-5">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  target={primaryCta.isExternal ? "_blank" : "_self"}
                >
                  <button
                    className={`link link-primary ${isThemeLight(backgroundColor)}`}
                  >
                    {primaryCta.text}
                  </button>
                </Link>
              )}

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  target={secondaryCta.isExternal ? "_blank" : "_self"}
                >
                  <button
                    className={`link link-secondary ${isThemeLight(backgroundColor)}`}
                  >
                    {secondaryCta.text}
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </ModuleBase>
  );
}
