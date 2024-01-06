import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { IconArrowRight } from "@/icons/IconArrowRight";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {[...Array(8)].map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 xl:grid-rows-1 gap-4 cursor-pointer">
              {[...Array(4)].map((item) => (
                <div className="relative rounded-lg bg-white/50 overflow-hidden flex justify-center items-center group">
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    <Image
                      src="/ayazay.png"
                      alt="image"
                      width={500}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#374151] to-[#404958] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 tracking-[0.2em] text-[13px] text-white">
                        <div className="delay-100">LIVE</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJECT
                        </div>
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <IconArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
