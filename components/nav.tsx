"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React, { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import LogoPic from "../public/CCE.png";
import IITPic from "../public/IIT-Mandi.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [height, setHeight] = useState(0);
  const [isShrunk, setShrunk] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [toggle, setToggle] = useState(false);

  const pathname = usePathname();

  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setToggle(false); // Close the navbar if clicked outside
      }
    }

    if (toggle) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggle, setToggle]);

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
      className={`font-raleway transition-all mx-5 lg:mx-12 my-2.5 lg:my-5 rounded-full flex flex-row justify-between items-center gap-5 border bg-[#48829e] px-12 py-2.5 sm:py-5 text-slate-100 border-slate-100/[0.5] shadow-2xl shadow-zinc-900/[0.1]`}
    >
      <Link href={"/"} className="flex flex-row gap-2.5 items-center">
        <Image src={IITPic} alt={"Logo"} className="h-12 w-12 object-cover" />
        <Image src={LogoPic} alt={"Logo"} className="w-12 h-12" />
        <div className="font-bold">CCE, IIT Mandi</div>
      </Link>
      <div className="hidden xl:flex flex-row gap-12 items-center text-base lg:text-lg font-semibold">
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
              <DropdownMenuItem>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={"/activities/fdps"}
                >
                  Faculty Development Programs (FDPs)
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={"/activities/conferences"}
                >
                  Conferences, Workshops & Symposiums
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={"/activities/gian-courses"}
                >
                  GIAN Courses
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={"/activities/nptel-courses"}
                >
                  NPTEL Courses
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  onClick={() => {
                    setToggle(false);
                    setIsOpen1(false);
                  }}
                  href={"/activities/msme-courses"}
                >
                  MSME Courses
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={"/activities/exposure-gateway-day"}
                >
                  Exposure Gateway Day
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
          href={"/tinkeringlab"}
          className={`rounded-lg px-3 py-1 transition-all ${
            pathname === "/tinkeringlab"
              ? "bg-white text-black"
              : "hover:bg-white/20"
          }`}
        >
          Tinkering Lab
        </Link>
        <Link
          href={"/facilities"}
          className={`rounded-lg px-3 py-1 transition-all ${
            pathname === "/facilities"
              ? "bg-white text-black"
              : "hover:bg-white/20"
          }`}
        >
          Facilities
        </Link>
        <Link
          href={"/people"}
          className={`rounded-lg px-3 py-1 transition-all ${
            pathname === "/people" ? "bg-white text-black" : "hover:bg-white/20"
          }`}
        >
          People
        </Link>
        <Link
          href={"/downloads"}
          className={`rounded-lg px-3 py-1 transition-all ${
            pathname === "/downloads"
              ? "bg-white text-black"
              : "hover:bg-white/20"
          }`}
        >
          Downloads
        </Link>
      </div>
      <div
        className="inline xl:hidden cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
          console.log(toggle);
        }}
      >
        {toggle ? <X size={24} /> : <Menu size={24} />}
      </div>
      <div
        ref={navbarRef}
        className={`${
          toggle ? "flex" : "hidden"
        } bg-slate-100/[0.3] backdrop-blur transition-all xl:hidden absolute right-[30px] -bottom-[274px] text-right w-fit px-12 py-5 rounded-xl text-base lg:text-lg font-semibold border ${
          isShrunk
            ? "text-slate-900 border-slate-300/[0.5]"
            : "text-slate-100 border-slate-100/[0.5]"
        } flex-col gap-2.5`}
      >
        <Link
          href={"/people"}
          className={`outline-none rounded-lg px-3 py-1 transition-all ${
            pathname.startsWith("/people")
              ? "bg-white text-black"
              : "hover:bg-white/20"
          }`}
          onClick={() => setToggle(false)}
        >
          <center>People</center>
        </Link>
        <DropdownMenu open={isOpen1} onOpenChange={setIsOpen1}>
          <DropdownMenuTrigger
            className={`outline-none rounded-lg px-3 py-1 transition-all ${
              pathname.startsWith("/activities")
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
                onClick={() => {
                  setToggle(false);
                  setIsOpen1(false);
                }}
                href={"/activities/leadership-training"}
              >
                Leadership Training Programme
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => {
                  setToggle(false);
                  setIsOpen1(false);
                }}
                href={"/activities/pm-vishwakarma"}
              >
                PM Vishwakarma
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => {
                  setToggle(false);
                  setIsOpen1(false);
                }}
                href={"/activities/capacity-building"}
              >
                Capacity Building Programme
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => {
                  setToggle(false);
                  setIsOpen1(false);
                }}
                href={"/activities/short-term-courses"}
              >
                Short-term Courses
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => {
                  setToggle(false);
                  setIsOpen1(false);
                }}
                href={"/activities/online-courses"}
              >
                Online Courses
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => {
                  setToggle(false);
                  setIsOpen1(false);
                }}
                href={"/activities/fdps"}
              >
                Faculty Development Programs (FDPs)
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => {
                  setToggle(false);
                  setIsOpen1(false);
                }}
                href={"/activities/conferences"}
              >
                Conferences, Workshops & Symposiums
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => {
                  setToggle(false);
                  setIsOpen1(false);
                }}
                href={"/activities/gian-courses"}
              >
                GIAN Courses
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => {
                  setToggle(false);
                  setIsOpen1(false);
                }}
                href={"/activities/nptel-courses"}
              >
                NPTEL Courses
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => {
                  setToggle(false);
                  setIsOpen1(false);
                }}
                href={"/activities/msme-courses"}
              >
                MSME Courses
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => {
                  setToggle(false);
                  setIsOpen1(false);
                }}
                href={"/activities/exposure-gateway-day"}
              >
                Exposure Gateway Day
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href={"/mous"}
          className={`outline-none rounded-lg px-3 py-1 transition-all ${
            pathname.startsWith("/mous")
              ? "bg-white text-black"
              : "hover:bg-white/20"
          }`}
          onClick={() => setToggle(false)}
        >
          <center>MOUs</center>
        </Link>
        <Link
          href={"/downloads"}
          className={`outline-none rounded-lg px-3 py-1 transition-all ${
            pathname.startsWith("/downloads")
              ? "bg-white text-black"
              : "hover:bg-white/20"
          }`}
          onClick={() => setToggle(false)}
        >
          <center>Downloads</center>
        </Link>
        <Link
          href={"/facilities"}
          className={`outline-none rounded-lg px-3 py-1 transition-all ${
            pathname.startsWith("/contact")
              ? "bg-white text-black"
              : "hover:bg-white/20"
          }`}
          onClick={() => setToggle(false)}
        >
          <center>Facilities</center>
        </Link>
        <Link
          href={"/tinkeringlab"}
          className={`outline-none rounded-lg px-3 py-1 transition-all ${
            pathname.startsWith("/tinkeringlab")
              ? "bg-white text-black"
              : "hover:bg-white/20"
          }`}
          onClick={() => setToggle(false)}
        >
          <center>Tinkering Lab</center>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
