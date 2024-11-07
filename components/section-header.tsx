import React from "react";
import Image from "next/image";
import HeaderPic from "@/public/header.jpg";
import Waves from "@/components/waves";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="relative w-screen h-[60vh] lg:h-[70vh] bg-gradient-to-tl from-sky-900/[0.7] to-teal-900/[0.7] flex flex-col justify-center items-center text-slate-100 px-5 text-center">
      <Image
        src={HeaderPic}
        alt={"IIT Mandi"}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="px-8 py-2 text-base font-medium rounded-full max-w-full border border-slate-100/[0.3] backdrop-blur-2xl truncate">
        Worth trying: making the background image move slightly based on the
        cursor position
      </div>
      <div className="text-4xl sm:text-6xl font-raleway font-bold mt-5">
        {title}
      </div>
      <div className="text-xl sm:text-2xl font-raleway font-bold text-slate-300">
        Centre for Continuing Education, IIT Mandi
      </div>
      <div className="absolute bottom-0 left-0 w-screen h-fit">
        <Waves color={"#F1F5F9"} />
      </div>
    </div>
  );
};

export default SectionHeader;
