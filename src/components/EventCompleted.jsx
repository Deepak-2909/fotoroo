import React from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// import Australian1 from "../Images/eventImage/Australian1.jpg"
// import Australian2 from "../Images/eventImage/Australian2.jpg"
// import Birthday from "../Images/eventImage/Birthday.jpg"
// import DandD from "../Images/eventImage/DandD.jpg"
// import IheartUni from "../Images/eventImage/IheartUni.jpg"
// import IheartUni1 from "../Images/eventImage/IheartUni1.jpg"
// import Lux from "../Images/eventImage/Lux.png"
// import Uttarakhandi from "../Images/eventImage/Uttarakhandi.jpg"

// Import all images dynamically
const images = Object.values(
  import.meta.glob("../Images/eventsCompleted/*.{jpg,jpeg,png,PNG}", { eager: true })
).map((mod) => mod.default);

// 🔹 Seeded PRNG (Mulberry32 Algorithm)
const mulberry32 = (seed) => {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

// 🔹 Seeded Shuffle Function
const seededShuffle = (array, seed) => {
  const rng = mulberry32(seed);
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// 🌟 Set your seed value (e.g., Date.now() % 100000 for daily variation)
const seed = 12345; // Change this to modify shuffle pattern
const shuffledImages = seededShuffle(images, seed);

const totalImages = shuffledImages.length;
const animationDuration = Math.max(15, totalImages * 1.2);

const EventCompleted = () => {
  // const images = [
  //   Australian1,
  //   Australian2,
  //   Birthday,
  //   DandD,
  //   IheartUni,
  //   IheartUni1,
  //   Lux,
  //   Uttarakhandi
  // ];
  console.log("Total Images:", totalImages);

  

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
        <div className="animate-marquee" style={{ animationDuration: `${animationDuration}s`, width: `${shuffledImages.length * 220}px` }}>
          {shuffledImages.map((src, index) => (
            <img
              key={`img1-${index}`}
              src={src}
              alt={`Scrolling image ${index + 1}`}
              className="lg:h-72 md:h-64 h-36 object-cover rounded-lg"
            />
          ))}

          {shuffledImages.map((src, index) => (
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
            animation: marquee linear infinite;
            display: flex;
            gap: 20px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default EventCompleted;