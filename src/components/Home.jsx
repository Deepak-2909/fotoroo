
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
      <div className="home" >
        
        <div className="my-10 flex justify-center rounded-lg overflow-hidden">
         <video src={videoHome} 
            className="md:w-[1500px] sm:h-[600px]  object-fill"
        
            autoPlay 
            loop 
            muted
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