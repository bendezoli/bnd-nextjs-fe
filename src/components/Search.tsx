"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { isThemeLight } from "@/utils/color-utils";

type SearchProps = {
  backgroundColor?: string;
};

export function Search({ backgroundColor = "blue" }: SearchProps) {
  const searchParams = useSearchParams();

  const { replace } = useRouter();

  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <div className="searche">
      <div className="search w-full md:w-1/2">
        <input
          type="text"
          placeholder="Search"
          defaultValue={searchParams.get("query")?.toString()}
          onChange={(e) => handleSearch(e.target.value)}
          className={`search outline-0 w-full px-4 py-3 rounded-md border transition-all duration-200 mb-10
            ${
              isThemeLight(backgroundColor) === "light"
                ? "bg-white text-black border-gray-300 "
                : "bg-gray-800 text-white border-gray-600 "
            }`}
        />
      </div>
    </div>
  );
}
