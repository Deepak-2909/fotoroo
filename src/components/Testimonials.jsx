
import TestimonialCard from "./TestimonialCard";
import testicon from "../Images/testicon.png"
import { useState, useEffect } from "react";



const Testimonials = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/get_reviews");
        const data = await response.json();
        console.log("Response:", response);
        console.log("Data:", data);
        
        if (response.status !== 200) {
          console.error("Error fetching testimonials:", data.error);
          return;
        } else {
          setReviews(data.reviews);
          console.log("Testimonials:", data.reviews);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    
    fetchTestimonials();
  }, []);

  return (
    <section className="flex flex-col items-center mt-16">
      <h1 className="font-pinyon text-6xl mb-10">Testimonials</h1>
      <div className="relative h-80 w-full overflow-hidden">
        <div className="animate-marquee flex gap-6">
          {reviews.concat(reviews).map((testimonial, index) => (
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
