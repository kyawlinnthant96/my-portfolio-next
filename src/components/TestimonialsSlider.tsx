import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { IconArrowRight } from "@/icons/IconArrowRight";

const TestimonialsSlider = () => {
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
            <div className="">
              {/* avatar, name, image */}
              <div className="">
                <div className="">
                  <div>Avatar Image</div>
                  <div>name</div>
                  <div>position</div>
                </div>
              </div>

              {/* quote & message */}
              <div> quote and message</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialsSlider;
