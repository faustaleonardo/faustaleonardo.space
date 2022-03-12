/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

type WorkCardProps = {
  link: string;
  imageUrl: string;
  name: string;
  index: number;
};

const WorkCard: React.FC<WorkCardProps> = ({ link, imageUrl, name, index }) => {
  return (
    <div data-aos="zoom-in" data-aos-delay={50 + index * 100}>
      <a
        href={link}
        className="w-full block shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        target="_blank"
      >
        <div className="relative overflow-hidden group">
          <img
            src={imageUrl}
            alt={name}
            className="transform group-hover:scale-125 hover:opacity-25 transition duration-500 ease-out"
          />
          <div className="hidden group-hover:block transition duration-300 ease-in absolute inset-x-1/4 inset-y-1/2">
            <h3 className="text-base text-gray-600 dark:text-gray-300 text-center font-bold lg:text-xl  uppercase tracking-widest border border-1 p-1 rounded border-sky-500">
              {name}
            </h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default WorkCard;
