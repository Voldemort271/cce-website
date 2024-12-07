import React from "react";
import SectionHeader from "../../components/section-header";
import Waves from "../../components/waves";
import Image from "next/image";
import Pic from "../../public/header.jpg";

const GalleryPage = () => {
  return (
    <div className="relative">
      <SectionHeader title={"Our Gallery"} />
      <div className="w-full py-24">
        <div className="flex flex-col gap-12 bg-slate-100 px-5 md:px-12 lg:px-24 pb-24">
          <div className="flex flex-row justify-center flex-wrap gap-5">
            {Array(10)
              .fill(0)
              .map((el, i) => (
                <Image
                  src={Pic}
                  alt={"Test pic"}
                  key={i}
                  className="max-w-sm rounded-md"
                />
              ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -bottom-10 md:-bottom-24 left-1/2 -translate-x-1/2 rotate-180 z-10">
            <Waves color={"#f1f5f9"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
