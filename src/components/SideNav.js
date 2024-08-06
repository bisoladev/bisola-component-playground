"use client";

import { ArrowLeftIcon } from "@/assets/icons";
import { useSidebar } from "@/hooks/useSidebar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SideNav() {
  const [collapse, setCollapse] = useState(false);
  const { list } = useSidebar();

  return (
    <aside
      className={cn(
        collapse ? "w-[80px]" : "w-[210px] xl:w-[250px] border-r",
        "hidden lg:block bg-white  h-dvh py-6 sticky top-0 z-[6] transition-all duration-500"
      )}
    >
      <Link
        href="/"
        className={cn(
          collapse ? "justify-center" : "mx-7",
          "flex items-center gap-[14px] text-[#343C6A] font-bold text-2xl"
        )}
      >
        {collapse ? "BB" : "Bisola's Code Playground"}
      </Link>

      <ul className="mt-14">
        {list.map(({ active, href, Icon, label }) => (
          <li
            key={label}
            className={cn(
              active
                ? "text-primary before:content-[''] before:w-[6px] before:rounded-r-[6px] before:h-full before:absolute before:-left-[2px] before:bg-primary"
                : "text-gray-400",
              "relative"
            )}
          >
            <Link
              href={href}
              className="flex gap-3 items-center text-base font-medium px-7 py-4"
            >
              <Icon /> {!collapse && label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="absolute center-item top-14 -right-3 size-6 rounded-full bg-white shadow-lg"
        onClick={() => setCollapse((prevS) => !prevS)}
      >
        <ArrowLeftIcon />
      </button>
    </aside>
  );
}
