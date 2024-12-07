import React from "react";
import Link from "next/link";

const DocsSection = () => {
  return (
    <div className="flex w-full max-w-[1200px] flex-col items-center gap-5">
      <div className="font-raleway text-4xl sm:text-6xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 inline-block text-transparent bg-clip-text">
        Important Documents
      </div>
      <div className="w-full my-5 flex flex-wrap justify-center gap-5">
        <Link href={"/"} target="_blank">
          <div className="bg-slate-200 rounded-md p-5 min-w-72">Link 1</div>
        </Link>
        <Link href={"/"} target="_blank">
          <div className="bg-slate-200 rounded-md p-5 min-w-72">Link 2</div>
        </Link>
        <Link href={"/"} target="_blank">
          <div className="bg-slate-200 rounded-md p-5 min-w-72">Link 3</div>
        </Link>
        <Link href={"/"} target="_blank">
          <div className="bg-slate-200 rounded-md p-5 min-w-72">Link 4</div>
        </Link>
        <Link href={"/"} target="_blank">
          <div className="bg-slate-200 rounded-md p-5 min-w-72">Link 5</div>
        </Link>
      </div>
    </div>
  );
};

export default DocsSection;
