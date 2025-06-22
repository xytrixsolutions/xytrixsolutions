"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Card, CardProps as Project } from "./Card";
import { projectData } from "@/data/projects";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { JSX } from "react";

export const Projects = (): JSX.Element => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-16"
    >
      <p className="text-sm uppercase text-gray-500">Our Projects</p>
      <h2 className="text-3xl font-bold mb-12 text-black">Crafted Solutions, Real Impact</h2>
      <div className="w-full max-w-[1400px] h-full px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          <style>
            {`
                .swiper-slide {
                    display: flex !important;
                    height: auto !important;
                }
            `}
          </style>
          {projectData.map((project: Project, index) => (
            // projects.tsx
            <SwiperSlide key={index} className="flex h-full items-stretch">
              <Card {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
