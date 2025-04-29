"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Card } from "./Card";
import { projectData } from "@/data/projects";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-16" // Changed h-screen to min-h-screen and added padding
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>

      <div className="w-full max-w-[1400px] h-full px-4">
        {" "}
        {/* Added h-full and padding */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          className="!pb-14 h-full" // Added !pb-14 for pagination space and h-full
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          <style>
            {`.swiper-slide {
     height: auto;
    }`}
          </style>
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              {" "}
              {/* Added h-auto */}
              <Card {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
