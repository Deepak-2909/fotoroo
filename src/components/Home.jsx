
import videoHome from "../Images/videoHome.mp4";
import CaptureMemories from "./CaptureMemories";
import CustomPrints from "./CustomPrints";
import EventCompleted from "./EventCompleted";
import ExploreOurBooths from "./ExploreOurBooths";
import Faq from "./Faq";
import OurBomb from "./OurBomb";
import OurService from "./OurService";
import Testimonials from "./Testimonials";

const Home = () => {

  return (
    <section className="flex flex-col">
      <div className="home mt-10 -mx-3 md:-mx-7 w-screen relative" >
        
        <div className="w-full">
         <video src={videoHome} 
            // className="md:w-[1500px] sm:h-[600px]  object-fill"
            className="w-screen h-auto object-cover m-0 p-0"
        
            autoPlay 
            loop 
            muted
            playsInline
            aria-label="Promotional video"/>
        </div>
      </div>
      <OurService />
      <OurBomb />
      <EventCompleted />
      <CaptureMemories />
      <ExploreOurBooths />
      <CustomPrints />
      <Testimonials />
      {/* <BookNow/> */}
      <Faq />
    </section>
  );
};

export default Home;