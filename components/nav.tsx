"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import LogoPic from "../public/logo.png";
import IITPic from "../public/iitmd-bg.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [height, setHeight] = useState(0);
  const [isShrunk, setShrunk] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setHeight((5 * window.innerHeight) / 10);
  }, []);

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > height + 10 ||
            document.documentElement.scrollTop > height + 10)
        )
          return true;

        if (
          isShrunk &&
          document.body.scrollTop < height - 10 &&
          document.documentElement.scrollTop < height - 10
        )
          return false;
        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [height]);

  return (
    <div
      className={`font-raleway transition-all mx-5 lg:mx-12 my-2.5 lg:my-5 rounded-full flex flex-row justify-between items-center gap-5 border backdrop-blur-2xl px-12 py-2.5 sm:py-5 ${
        isShrunk
          ? "text-slate-900 border-slate-300/[0.5]"
          : "text-slate-100 border-slate-100/[0.5]"
      } shadow-2xl shadow-zinc-900/[0.1]`}
    >
      <Link href={"/"} className="flex flex-row gap-2.5 items-center">
        <Image src={IITPic} alt={"Logo"} className="h-8 w-12 object-cover" />
        <Image src={LogoPic} alt={"Logo"} className="w-8 h-8" />
        <div className="font-bold">CCE, IIT Mandi</div>
      </Link>
      <div className="hidden md:flex flex-row gap-12 items-center text-base lg:text-lg font-semibold">
        <Link
          href={"/people"}
          className={`rounded-lg px-3 py-1 transition-all ${
            pathname === "/people" ? "bg-white text-black" : "hover:bg-white/20"
          }`}
        >
          People
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <DropdownMenu open={isOpen}>
            <DropdownMenuTrigger
              className={`outline-none rounded-lg px-3 py-1 transition-all ${
                pathname.startsWith("/activities") || isOpen
                  ? "bg-white text-black"
                  : "hover:bg-white/20"
              }`}
            >
              Activities
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-slate-100/[0.3] font-raleway font-medium backdrop-blur-2xl border border-slate-100/[0.5]">
              <DropdownMenuLabel>Activities</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-slate-100/[0.5]" />
              <DropdownMenuItem>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={"/activities/leadership-training"}
                >
                  Leadership Training Programme
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={"/activities/pm-vishwakarma"}
                >
                  PM Vishwakarma
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={"/activities/capacity-building"}
                >
                  Capacity Building Programme
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={"/activities/short-term-courses"}
                >
                  Short-term Courses
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={"/activities/online-courses"}
                >
                  Online Courses
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Link
          href={"/mous"}
          className={`rounded-lg px-3 py-1 transition-all ${
            pathname === "/mous" ? "bg-white text-black" : "hover:bg-white/20"
          }`}
        >
          MOUs
        </Link>
        <Link
          href={"/contact"}
          className={`rounded-lg px-3 py-1 transition-all ${
            pathname === "/contact"
              ? "bg-white text-black"
              : "hover:bg-white/20"
          }`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
