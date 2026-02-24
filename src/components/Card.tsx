import { ImageProps } from "@/types";

import Link from "next/link";
import { StrapiImage } from "./StrapiImage";
import { formatDate } from "../utils/format-date";

export interface CardProps {
  documentId: string;
  title: string;
  description: string;
  slug: string;
  image: ImageProps;
  price?: number;
  startDate?: string;
  createdAt: string;
  basePath: string;
}

export function Card({
  title,
  description,
  slug,
  image,
  price,
  createdAt,
  startDate,
  basePath,
}: Readonly<CardProps>) {
  return (
    <Link
      href={`/${basePath}/${slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative w-full h-[400px] overflow-hidden">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "No alternative text provided"}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-3 p-6">
        <div className="text-lg font-semibold leading-snug text-gray-900 group-hover:text-black">
          {title}
        </div>

        {price && (
          <p className="text-sm font-medium text-gray-700">
            <span className="font-semibold">Price: </span>
            {price}
          </p>
        )}

        {(startDate ?? createdAt) && (
          <p className="text-xs text-gray-500">
            {formatDate(startDate ?? createdAt)}
          </p>
        )}

        <p className="text-sm leading-relaxed text-gray-600">
          {description.slice(0, 144)}...
        </p>
      </div>
    </Link>
  );
}
