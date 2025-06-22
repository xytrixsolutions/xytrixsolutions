import Image from "next/image";
import { JSX } from "react";

export interface CardProps {
  image: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

// Card.tsx
export const Card = ({
  image,
  title,
  tech,
  description,
  link,
}: CardProps): JSX.Element => (
  <div className="bg-white flex flex-col justify-between h-full p-3 rounded-xl shadow-2xl border border-gray-300">
    <div className="relative pt-[56.25%]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover rounded-md"
        style={{ objectFit: 'cover' }}
      />
    </div>
    <div className="flex-1 flex flex-col pt-4">
      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-800 flex-1 overflow-auto line-clamp-5">
        {description}
      </p>
      <div className="flex gap-2 mt-3 text-sm text-black font-bold flex-wrap">
        {tech.map((t) => (
          <span key={t} className="inline-block bg-gray-500 rounded-xs text-white p-1">
            {t}
          </span>
        ))}
      </div>
    </div>
    <div className="mt-6 flex">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-black hover:bg-white border border-black hover:text-black text-white font-semibold py-2 px-4 rounded-lg transition-colors w-full text-center"
      >
        Visit
      </a>
    </div>
  </div>
);
