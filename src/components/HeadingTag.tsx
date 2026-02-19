import React from "react";
import type { HeadingData } from "@/types";

interface HeadingProps extends HeadingData {
  className?: string; // lehetővé teszi kívülről a CSS osztály átadását
}

const HeadingTag: React.FC<HeadingProps> = ({
  title,
  htag = "p",
  className,
}) => {
  const Tag = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(htag) ? htag : "p";

  return <Tag className={className}>{title}</Tag>;
};

export default HeadingTag;
