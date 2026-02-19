"use client";

import { useState, useEffect } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!data) return null;

  const { logo, navigation, cta } = data;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-brand-primary-navy ${
          headerLight ? "header--light" : ""
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-[60px] md:h-[112px]">
          {/* Logo */}
          <div className="relative w-10 md:w-[80px] h-10 md:h-[80px]">
            <Link href="/">
              <StrapiImage
                src={logo.logo.url}
                alt={logo.logo.alternativeText || "Logo"}
                className={`object-contain !relative`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-6 items-center">
              {navigation.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    target={item.isExternal ? "_blank" : "_self"}
                    className="text-white uppercase hover:opacity-80 transition"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>

            <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
              <button className="link link-primary light">{cta.text}</button>
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center items-center gap-1 w-8 h-8"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-brand-primary-navy z-40 transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-center">
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target={item.isExternal ? "_blank" : "_self"}
              onClick={() => setIsOpen(false)}
              className="text-white text-xl uppercase hover:opacity-80 transition"
            >
              {item.text}
            </Link>
          ))}

          <Link
            href={cta.href}
            target={cta.isExternal ? "_blank" : "_self"}
            onClick={() => setIsOpen(false)}
          >
            <button className="link link-primary light mt-4">{cta.text}</button>
          </Link>
        </div>
      </div>
    </>
  );
}
