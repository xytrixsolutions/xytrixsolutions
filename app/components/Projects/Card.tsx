/* eslint-disable @next/next/no-img-element */
import { JSX } from "react";

export interface CardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const Card = ({
  title,
  description,
  tech,
  link,
}: CardProps): JSX.Element => (
  <div className="bg-[#1e293b] flex flex-col justify-between h-max p-6 rounded-xl shadow-md">
    {/* Image container with fixed aspect ratio */}
    <div className="relative pt-[56.25%]">
      {" "}
      {/* 16:9 aspect ratio */}
      <img
        src="https://picsum.photos/400/300"
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
      />
    </div>

    {/* Content container with constrained height */}
    <div className="flex-1 flex flex-col pt-4">
      {" "}
      {/* Added flex-1 and flex-col */}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 flex-1 overflow-auto line-clamp-5">
        {description}
      </p>
      <div className="flex gap-2 mt-3 text-sm text-gray-400 flex-wrap">
        {tech.map((t) => (
          <span key={t} className="inline-block">
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-6">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors w-full text-center"
      >
        View
      </a>
    </div>
  </div>
);
