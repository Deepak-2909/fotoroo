import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Australian1 from "../Images/eventImage/Australian1.jpg"
import Australian2 from "../Images/eventImage/Australian2.jpg"
import Birthday from "../Images/eventImage/Birthday.jpg"
import DandD from "../Images/eventImage/DandD.jpg"
import IheartUni from "../Images/eventImage/IheartUni.jpg"
import IheartUni1 from "../Images/eventImage/IheartUni1.jpg"
import Lux from "../Images/eventImage/Lux.png"
import Uttarakhandi from "../Images/eventImage/Uttarakhandi.jpg"

const EventCompleted = () => {
  const images = [
    Australian1,
    Australian2,
    Birthday,
    DandD,
    IheartUni,
    IheartUni1,
    Lux,
    Uttarakhandi
  ];

  

  return (
    <section className="flex flex-col md:my-16 my-2 items-center">
      <div className="overflow-hidden w-full">
        <h1 
          className="md:font-pinyon font-rig-solid text-center text-4xl md:text-6xl"
          
        >
          Events Completed
        </h1>
      </div>

      <div className="relative lg:h-72 md:h-64 h-36 w-full overflow-hidden my-10">
        <div className="animate-marquee">
          {images.map((src, index) => (
            <img
              key={`img1-${index}`}
              src={src}
              alt={`Scrolling image ${index + 1}`}
              className="lg:h-72 md:h-64 h-36 object-cover rounded-lg"
            />
          ))}

          {images.map((src, index) => (
            <img
              key={`img2-${index}`}
              src={src}
              alt={`Scrolling image ${index + 1}`}
              className="lg:h-72 md:h-64 h-36 object-cover"
            />
          ))}
        </div>

        <style >{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
            display: flex;
            gap: 20px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default EventCompleted;