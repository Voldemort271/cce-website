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
import IITPic from "../public/iitmd.jpg";
import Image from "next/image";

const Navbar = () => {
  const [height, setHeight] = useState(0);
  const [isShrunk, setShrunk] = useState(false);
  const [toggle, setToggle] = useState(false);

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
      className={`font-raleway transition-all mx-5 lg:mx-12 my-2.5 lg:my-5 rounded-full flex flex-row justify-between items-center gap-5 border backdrop-blur-2xl px-12 py-2.5 sm:py-5 ${isShrunk ? "text-slate-900 border-slate-300/[0.5]" : "text-slate-100 border-slate-100/[0.5]"} shadow-2xl shadow-zinc-900/[0.1]`}
    >
      <Link href={"/"} className="flex flex-row gap-2.5 items-center">
        <Image src={IITPic} alt={"Logo"} className="h-8 w-12 object-cover" />
        <Image src={LogoPic} alt={"Logo"} className="w-8 h-8" />
        <div className="font-bold">CCE IIT Mandi</div>
      </Link>
      <div className="hidden sm:flex flex-row gap-12 items-center text-base lg:text-lg font-semibold">
        <Link href={"/people"}>People</Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            Activities
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-100/[0.3] font-raleway font-medium backdrop-blur-2xl border border-slate-100/[0.5]">
            <DropdownMenuLabel>Our Activities</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-100/[0.5]" />
            <DropdownMenuItem>
              <Link href={"/activities/leadership-training"}>
                Leadership Training Programme
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/activities/pm-vishwakarma"}>PM Vishwakarma</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/activities/capacity-building"}>
                Capacity Building Programme
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/activities/short-term-courses"}>
                Short-term Courses
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/activities/online-courses"}>Online Courses</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href={"/mous"}>MOUs</Link>
        <Link href={"/gallery"}>Gallery</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div
        className="inline sm:hidden cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? <X size={24} /> : <Menu size={24} />}
      </div>
      <div
        className={`${toggle ? "flex" : "hidden"} transition-all sm:hidden absolute right-0 -bottom-44 text-right w-fit px-12 py-5 backdrop-blur-2xl rounded-xl text-base lg:text-lg font-semibold border ${isShrunk ? "text-slate-900 border-slate-300/[0.5]" : "text-slate-100 border-slate-100/[0.5]"} flex-col gap-2.5`}
      >
        <Link href={"/people"}>People</Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            Activities
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-100/[0.3] font-raleway font-medium backdrop-blur-2xl border border-slate-100/[0.5]">
            <DropdownMenuLabel>Our Activities</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-100/[0.5]" />
            <DropdownMenuItem>
              <Link href={"/activities/leadership-training"}>
                Leadership Training Programme
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/activities/pm-vishwakarma"}>PM Vishwakarma</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/activities/capacity-building"}>
                Capacity Building Programme
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/activities/short-term-courses"}>
                Short-term Courses
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/activities/online-courses"}>Online Courses</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href={"/mous"}>MOUs</Link>
        <Link href={"/gallery"}>Gallery</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
