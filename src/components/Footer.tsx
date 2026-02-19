import type { LinkProps, LogoProps } from "@/types";
import Link from "next/link";
import { StrapiImage } from "../components/StrapiImage";

interface FooterProps {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
    policies: LinkProps[];
    copy: string;
  };
}

export function Footer({ data }: FooterProps) {
  if (!data) return null;

  const { logo, navigation, policies, copy } = data;

  return (
    <footer className="bg-brand-primary-aveblue text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start">
          {/* Left side */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="relative w-[80px] h-[80px]">
              <StrapiImage
                src={logo.logo.url}
                alt={logo.logo.alternativeText || "Logo"}
                className="object-contain"
              />
            </div>

            <ul className="flex flex-col items-center gap-3 lg:flex-row lg:gap-6">
              {navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    target={item.isExternal ? "_blank" : "_self"}
                    className="hover:opacity-80 transition-opacity uppercase"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-center justify-start gap-6 lg:items-end mt-auto">
            <p className="text-sm text-center lg:text-right">
              &copy; {new Date().getFullYear()} {copy}
            </p>
            <ul className="flex flex-col items-center gap-3 lg:flex-row lg:gap-6 ">
              {policies.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    target={item.isExternal ? "_blank" : "_self"}
                    className="text-sm hover:opacity-80 transition-opacity uppercase underline underline-offset-4"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
