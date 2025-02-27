
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


import image1 from "../Images/image1.png";
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.png";
import  ImageSlider from "./ImageSlider";


const CustomPrints = () => {
  const images = [ image1, image2, image3,image1, image2, image3, image1, image2, image3,image1, image2, image3, ];

  return (
   <section className="my-10">
    <div className="text-center mx-auto w-[72%]">
      <h1 className="lg:text-8xl text-5xl font-rig-solid">Custom Prints</h1>
      <p className="font-baskerville text-textCol font-medium text-lg my-5">Personalize your event memories with custom photo prints! <span className="font-semibold">At FotoRoo</span>, we design photo templates that perfectly match your event theme, making each print unique and special. From elegant designs to fun graphics, your prints will leave a lasting impression on your guests.</p>
    </div>
    <div>
    <ImageSlider images={images}/>
    </div>
   
   </section>
  );
};

export default CustomPrints;
