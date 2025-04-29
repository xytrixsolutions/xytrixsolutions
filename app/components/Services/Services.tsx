"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { projectData } from "@/data/projects";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, CardProps as Service } from "../Projects/Card";
import { JSX } from "react";

export const Services = (): JSX.Element => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-16"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Services</h2>
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
          {projectData.map(
            (service: Service, index): JSX.Element => (
              // projects.tsx
              <SwiperSlide key={index} className="flex h-full items-stretch">
                <Card {...service} />
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </section>
  );
};
