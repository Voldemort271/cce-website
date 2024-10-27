"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [height, setHeight] = useState(0);
  const [isShrunk, setShrunk] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setHeight((3 * window.innerHeight) / 5);
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
      className={`font-raleway transition-all mx-5 lg:mx-12 my-2.5 lg:my-5 rounded-full flex flex-row justify-between items-center gap-5 border backdrop-blur-2xl px-12 py-5 ${isShrunk ? "text-slate-900 border-slate-300/[0.5]" : "text-slate-100 border-slate-100/[0.5]"}`}
    >
      <div className="font-semibold text-2xl">Brand</div>
      <div className="hidden sm:flex flex-row gap-12 items-center text-base lg:text-lg font-medium">
        <div>People</div>
        <div>Programmes</div>
        <div>Media</div>
        <div>Contact</div>
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
        className={`${toggle ? "flex" : "hidden"} transition-all sm:hidden absolute right-0 -bottom-44 text-right w-fit px-12 py-5 backdrop-blur-2xl rounded-xl text-base lg:text-lg font-medium border ${isShrunk ? "text-slate-900 border-slate-300/[0.5]" : "text-slate-100 border-slate-100/[0.5]"} flex-col gap-2.5`}
      >
        <div>People</div>
        <div>Programmes</div>
        <div>Media</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default Navbar;
