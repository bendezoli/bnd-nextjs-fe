import Image from "next/image";
import { getStrapiURL } from "@/utils/get-strapi-url";

interface StrapiImageProps {
  src: string;
  alt: string;
  className?: string;
  [key: string]: string | number | boolean | undefined;
}

export function StrapiImage({
  src,
  alt,
  className,
  ...rest
}: Readonly<StrapiImageProps>) {
  // const imageUrl =
  //   process.env.NODE_ENV === "development"
  //     ? `/api/image-proxy?url=${encodeURIComponent(getStrapiMedia(src))}`
  //     : getStrapiMedia(src);
  const imageUrl = getStrapiMedia(src);

  if (!imageUrl) return null;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      className={className}
      {...rest}
      fill
      style={{ objectFit: "cover" }}
    />
  );
  //   return <pre>{JSON.stringify(imageUrl, null, 2)}</pre>;
}

export function getStrapiMedia(url: string | null) {
  if (!url) return "";
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return getStrapiURL() + url;
}
