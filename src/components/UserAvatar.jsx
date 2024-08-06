"use client";

import Link from "next/link";
import Image from "next/image";
import MobileSidebar from "./MobileSidebar";
import { useCloseOnOutsideClick } from "@/hooks/useCloseOnOutsideClick";
import { useTitleContext } from "@/context/TitleProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserIcon, Settings, User } from "@/assets/icons";

const UserAvatar = ({ userData }) => {
  const { visible, setVisible, ref } = useCloseOnOutsideClick(false);
  const { title } = useTitleContext();

  const toggleMobileSidebar = () => {
    setVisible((prevS) => !prevS);
  };

  return (
    <header className="h-[75px] md:h-[88px] bg-white sticky top-0 z-[5] border-b">
      <MobileSidebar
        open={visible}
        passRef={ref}
        handleClose={toggleMobileSidebar}
      />

      <nav className="px-5 md:px-8 lg:px-10 h-full flex justify-between items-center">
        <div className="lg:hidden flex gap-2 items-center">
          {/* <HamburgerIcon onClick={toggleMobileSidebar} /> */}

          <Link href="/" className="flex items-center gap-2">
            <p className="font-bold text-sm text-[#343C6A]">
              Bisola&apos;s Code Playground
            </p>
          </Link>
        </div>

        <p className="text-[22px] font-semibold text-[#343C6A] max-md:hidden">
          {title}
        </p>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="size-[42px] md:size-[58px] center-item rounded-full bg-[#E7EDFF] outline-none"
            >
              <UserIcon className="size-[26px] md:size-[30px] text-[#333B69] ml-[3px]" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel asChild>
              <div className="">
                <p className="font-medium">{userData.firstName}</p>
                <p className="text-sm font-normal text-gray-400">
                  {userData.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};

export default UserAvatar;
