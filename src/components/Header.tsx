"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StrapiImage } from "../components/StrapiImage";
import type { LogoProps, LinkProps } from "@/types";

interface HeaderProps {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
    cta: LinkProps;
  };
}

export function Header({ data }: HeaderProps) {
  const pathname = usePathname();
  const headerLight = pathname === "/experience";

  if (!data) return null;

  const { logo, navigation, cta } = data;

  return (
    <header
      className={`header fixed top-0 left-0 bg-brand-primary-aveblue flex itemes-center justify-around w-full z-10 ${headerLight ? "header--light" : ""}`}
    >
      <div className="relative w-full h-[80px] max-w-[80px]">
        <Link href="/">
          <StrapiImage
            src={logo.logo.url}
            alt={logo.logo.alternativeText || "No alternative text provided"}
            className={`header__logo header__logo--${
              headerLight ? "white" : "black"
            }`}
          />
        </Link>
      </div>
      <ul className="flex gap-5 items-center">
        {navigation.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              target={item.isExternal ? "_blank" : "_self"}
            >
              <div className="text-white uppercase">{item.text}</div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className="my-auto"
        href={cta.href}
        target={cta.isExternal ? "_blank" : "_self"}
      >
        <button className=" link link-primary">{cta.text}</button>
      </Link>
    </header>
  );
}
