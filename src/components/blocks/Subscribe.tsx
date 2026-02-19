"use client";
import type { SubscribeProps } from "@/types";
import HeadingTag from "../HeadingTag";
import ModuleBase from "../ModulaBase";
import { colorFromType, isThemeLight } from "@/utils/color-utils";
import { subscribeAction } from "@/data/actions";

export function Subscribe({
  headline,
  content,
  placeholder,
  buttonText,
  headingTag,
  padding,
  backgroundColor,
}: Readonly<SubscribeProps>) {
  return (
    <ModuleBase
      data={{
        moduleName: "subscribe-module",
        paddingTop: padding,
        paddingBottom: padding,
        backgroundColourClass: backgroundColor,
      }}
    >
      <div className="newsletter container flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div
          className="newsletter__info md:w-1/2"
          style={{ color: colorFromType(backgroundColor) }}
        >
          <HeadingTag
            title={headline}
            htag={headingTag}
            className="newsletter__headline text-2xl md:text-4xl font-bold "
          />
          <p className=" text-base md:text-lg mt-4">{content}</p>
        </div>

        <form
          className="newsletter__form flex flex-col sm:flex-row gap-4 md:w-1/2"
          action={subscribeAction}
        >
          <input
            name="email"
            type="text"
            placeholder={placeholder}
            className={`newsletter__email outline-0 w-full sm:flex-1 px-4 py-3  rounded-md ${isThemeLight(backgroundColor) === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}
          />
          <button
            type="submit"
            className={`link link-primary ${isThemeLight(backgroundColor)}`}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </ModuleBase>
  );
}
