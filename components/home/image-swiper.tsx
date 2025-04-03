"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { swiperData } from "@/lib/swiper";
import "./swiper.css";
import Image from "next/image";

const ImageSwiper = () => {
  return (
    <div className="w-full max-w-4xl mt-10" key={`xyz`}>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 7000 }}
        pagination={{ clickable: true }}
        id="swiper"
        className="scale-110 md:w-[90%]"
      >
        {swiperData.map((elem, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="sm:p-4 rounded-lg" id="div">
                <div className="flex flex-col items-center overflow-y-auto text-wrap p-4 ">
                  <Image
                    src={elem.img}
                    alt={elem.alt}
                    width={700}
                    height={400}
                    className="object-cover rounded-lg"
                    key={idx}
                  />
                  <p style={{ marginTop: "10px", marginBottom: "10px" }}>
                    {elem.mainLinkData}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
