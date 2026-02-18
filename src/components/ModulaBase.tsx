import React, { HTMLAttributes, JSX } from "react";
import classnames from "classnames";
// import { isColorDark, fixColor } from "@/utils";

type PaddingSize = "none" | "small" | "medium" | "large";

interface ModuleData {
  backgroundColour?: string;
  paddingTop?: string;
  paddingBottom?: string;
  moduleName?: string;
  anchor?: string;
}

interface ModuleBaseProps extends HTMLAttributes<HTMLElement> {
  data: ModuleData;
  className?: string;
  hTag?: keyof JSX.IntrinsicElements;
}

const ModuleBase: React.FC<ModuleBaseProps> = ({
  data,
  className,
  hTag,
  ...props
}) => {
  const classes: (string | null)[] = ["module", className || null];

  //   const backgroundColor = fixColor(data?.backgroundColour);

  // Padding top
  if (data?.paddingTop) {
    const top = data.paddingTop.toLowerCase();
    if (top === "medium") {
      classes.push("pt-8 md:pt-10 lg:pt-22");
    } else if (top === "large") {
      classes.push("pt-10 md:pt-14 lg:pt-28");
    } else if (top !== "none") {
      classes.push("pt-6 md:pt-8 lg:pt-10");
    }
  }

  // Padding bottom
  if (data?.paddingBottom) {
    const bottom = data.paddingBottom.toLowerCase();
    if (bottom === "medium") {
      classes.push("pb-8 md:pb-10 lg:pb-22");
    } else if (bottom === "large") {
      classes.push("pb-10 md:pb-14 lg:pb-28");
    } else if (bottom !== "none") {
      classes.push("pb-6 md:pb-8 lg:pb-10");
    }
  }

  // Text color based on background
  //   if (isColorDark(backgroundColor)) {
  //     classes.push("[&_.color-from-bg]:text-silk");
  //   } else {
  //     classes.push("[&_.color-from-bg]:text-charcoal");
  //   }

  classes.push(data?.moduleName || null);

  const Tag = hTag?.toLowerCase() || "section";

  return React.createElement(Tag, {
    id: data?.anchor || undefined,
    // style: { backgroundColor },
    className: classnames(classes),
    ...props,
  });
};

export default ModuleBase;
