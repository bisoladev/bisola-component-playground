"use client";

import { useSidebar } from "@/hooks/useSidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MobileBottomNav = () => {
  const { list } = useSidebar();

  return (
    <div className="h-14 md:h-20 lg:hidden bg-white sticky bottom-0">
      <ul className="max-w-[500px] flex items-center justify-around mx-auto h-full">
        {list.map(({ active, href, Icon, label }) => (
          <li
            key={label}
            className={cn(active ? "text-primary " : "text-[#B1B1B1]")}
          >
            <Link href={href} className="">
              <Icon className="size-[26px] md:size-[34px] mx-auto" />
              <span className="block text-xs md:text-sm">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileBottomNav;
