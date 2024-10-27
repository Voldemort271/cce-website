"use client";

import React, { useEffect, useState } from "react";

const Navbar = () => {
  const height = (3 * window.innerHeight) / 5;
  const [isShrunk, setShrunk] = useState(false);

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
      className={`font-raleway transition-all mx-12 my-5 rounded-full flex flex-row justify-between items-center gap-5 border backdrop-blur-2xl px-12 py-5 ${isShrunk ? "text-slate-900 border-slate-300/[0.5]" : "text-slate-100 border-slate-100/[0.5]"}`}
    >
      <div className="font-semibold text-2xl">Brand</div>
      <div className="flex flex-row gap-12 text-lg font-medium">
        <div>People</div>
        <div>Programmes</div>
        <div>Media</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default Navbar;
