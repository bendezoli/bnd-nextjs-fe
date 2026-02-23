"use client";
import type { SubscribeProps } from "@/types";
import HeadingTag from "../HeadingTag";
import ModuleBase from "../ModulaBase";
import { colorFromType, isThemeLight } from "@/utils/color-utils";
import { subscribeAction } from "@/data/actions";
import { useActionState } from "react";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  erroMessage: null,
  successMessage: null,
};

export function Subscribe({
  headline,
  content,
  placeholder,
  buttonText,
  headingTag,
  padding,
  backgroundColor,
}: Readonly<SubscribeProps>) {
  const [state, formAction, isPending] = useActionState(
    subscribeAction,
    INITIAL_STATE,
  );

  const zodErrors = state?.zodErrors?.email;
  const strapiErrors = state?.strapiErrors?.message;

  console.log(strapiErrors, "strapi errors from state");

  const errorMessage = state?.errorMessage || strapiErrors || zodErrors;
  const successMessage = state?.successMessage;

  console.log(errorMessage, "error message from state");
  console.log(successMessage, "success message from state");

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
          action={formAction}
        >
          <input
            name="email"
            type="text"
            placeholder={errorMessage || successMessage || placeholder}
            className={`newsletter__email outline-0 w-full sm:flex-1 px-4 py-3 ${successMessage ? "text-green-900 font-bold border border-green-900" : ""} ${errorMessage ? "border font-bold border-red-500 text-red-500" : ""}  rounded-md ${isThemeLight(backgroundColor) === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}
          />
          <button
            type="submit"
            className={`link link-primary ${isPending ? "opacity-50 cursor-not-allowed" : ""} ${isThemeLight(backgroundColor) === "light" ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-800 hover:bg-blue-900 text-white"}`}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </ModuleBase>
  );
}
