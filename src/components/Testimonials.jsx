
import TestimonialCard from "./TestimonialCard";
import testicon from "../Images/testicon.png"
import { useState } from "react";



const Testimonials = () => {

  // const [testimonials, setTestimonials] = useState([]);

  // const fetchTestimonials = async () => {
  //   try {
  //     const response = await fetch("/api/get_reviews");
  //     const data = await response.json();
      
  //     if (data.success) {
  //       setTestimonials(data.testimonials);
  //       console.log("Testimonials:", testimonials);
  //     } else {
  //       console.error("Error fetching testimonials:", data.error);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  
  // fetchTestimonials();
  
  const testimonials = [
    {
      image: testicon,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    {
      image: testicon,
      name: "Jane Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      rating: 5,
    },
    {
      image: testicon,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    {
      image: testicon,
      name: "Jane Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      rating: 5,
    },
    {
      image: testicon,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    {
      image: testicon,
      name: "Jane Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      rating: 5,
    },
    {
      image: testicon,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    {
      image: testicon,
      name: "Jane Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      rating: 5,
    },
    {
      image: testicon,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    {
      image: testicon,
      name: "Jane Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      rating: 5,
    },
    {
      image: testicon,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    {
      image: testicon,
      name: "Jane Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      rating: 5,
    },
    
  ];

 
  

  return (
    <section className="flex flex-col items-center mt-16">
      <h1 className="font-pinyon text-6xl mb-10">Testimonials</h1>
      <div className="relative h-72 w-full overflow-hidden">
        <div className="animate-marquee flex gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
          width: 200%; /* To create space for a seamless loop */
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
