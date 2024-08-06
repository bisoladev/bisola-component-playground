"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import {
  DashboardIcon,
  CustomersIcon,
  CreateLoanIcon,
  CategoriesIcon,
} from "@/assets/icons";

export const useSidebar = () => {
  const pathname = usePathname();
  const list = useMemo(() => {
    return [
      {
        Icon: DashboardIcon,
        label: "Dashboard",
        href: "/dashboard",
        active: pathname === "/dashboard",
      },
      // {
      //   Icon: CustomersIcon,
      //   label: "Customers",
      //   href: "/customers",
      //   active: pathname.startsWith("/customers"),
      // },
      // {
      //   Icon: CreateLoanIcon,
      //   label: "All Loans",
      //   href: "/loans",
      //   active: pathname.startsWith("/loans"),
      // },
      // {
      //   Icon: CategoriesIcon,
      //   label: "Categories",
      //   href: "/categories",
      //   active: pathname.startsWith("/categories"),
      // },
    ];
  }, [pathname]);

  return { list };
};
