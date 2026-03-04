"use client";
import { FC } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface PaginationProps {
  pageCount: number;
}

interface PaginationArrowProps {
  direction: "left" | "right";
  href: string;
  isDisabled: boolean;
}

const PaginationArrow: FC<PaginationArrowProps> = ({
  direction,
  href,
  isDisabled,
}) => {
  const router = useRouter();
  const isLeft = direction === "left";

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        router.push(href, { scroll: false });
      }}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={`
        w-10 h-10 flex items-center justify-center rounded-full cursor-pointer
        text-white font-bold text-lg
        transition-transform duration-200
        ${
          isDisabled
            ? "bg-gray-700 text-gray-400 cursor-not-allowed opacity-60 shadow-none"
            : "bg-brand-primary-navy shadow-lg hover:scale-105 "
        }
      `}
    >
      {isLeft ? "«" : "»"}
    </button>
  );
};

export function PaginationComponent({ pageCount }: Readonly<PaginationProps>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className="flex justify-center mt-8"
    >
      <ul className="flex items-center gap-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-inner">
        <li>
          <PaginationArrow
            direction="left"
            href={createPageURL(currentPage - 1)}
            isDisabled={currentPage <= 1}
          />
        </li>
        <li>
          <span
            className="px-4 py-1 rounded-full text-white font-semibold text-sm
            bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 shadow-inner"
          >
            Page {currentPage}
          </span>
        </li>
        <li>
          <PaginationArrow
            direction="right"
            href={createPageURL(currentPage + 1)}
            isDisabled={currentPage >= pageCount}
          />
        </li>
      </ul>
    </nav>
  );
}
