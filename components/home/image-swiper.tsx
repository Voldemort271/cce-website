"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { swiperData } from "@/lib/swiper";
import "./swiper.css";

const ImageSwiper = () => {
  return (
    <div className="w-full max-w-4xl mt-10">
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
        {swiperData.map((elem) => {
          return (
            <SwiperSlide>
              <div className="sm:p-4 rounded-lg" id="div">
                <div className="flex flex-col items-center overflow-y-auto text-wrap p-4 ">
                  <img
                    src={elem.img}
                    alt={elem.alt}
                    className="w-[100%] sm:w-[80%] sm:h-[80%] md:w-[90%] lg:w-[700px] lg:h-[400px] object-cover rounded-lg"
                    id="img"
                  />
                  <Link
                    href={elem.mainLink}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                  >
                    <p>{elem.mainLinkData}</p>
                  </Link>
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
