import { useNavigate } from "react-router";
// import explore from "../Images/explore.png"
import ExploreBoots3 from "../Images/ExploreBoots3.mp4"
import DSLR from "../Images/DSLR Booth/DSLR.png"
import MirrorBooth1 from "../Images/Mirror Booth/MirrorBooth1.jpeg"
import MagazineBooth1 from "../Images/Magazine Booth/MagazineBooth1.png"




const ExploreOurBooths = () => {
  const navigate = useNavigate();
  return (
    <section className="my-10 lg:px-20 ">
      <div>
        <h1 className="text-3xl lg:text-6xl lg:font-pinyon font-rig-solid  md:text-black text-center mb-10">
          Explore our Booths
        </h1>
      </div>
      <div className="font-baskerville">
      <div className="flex lg:flex-row flex-col lg:justify-evenly">
        <img src={MirrorBooth1} alt="explore image" className="md:w-[456px]" />
        <div className="lg:w-[26rem] w-full mr-10">
            <h2 className="lg:pb-7 py-5 text-2xl">Mirror Boot</h2>
        <p className="text-lg ">
        Your Reflection, Redefined! A statement piece, a conversation starter, and a photo booth like no other. 
Snap, sign, and shine with custom overlays and instant prints. Step up, strike a pose, and watch the magic unfold! 

        </p>
        <button className="btn block"  onClick={() => navigate("/packages")}>Book Now</button>
        </div>
      </div>
      <div className="flex lg:flex-row my-10 flex-col-reverse lg:justify-evenly lg:items-center lg:mt-10">
       
        <div className="lg:w-[26rem] w-full mr-10">
            <h2 className="lg:pb-7 py-5 text-2xl">DSLR Booth</h2>
        <p className="text-lg ">Timeless, Frame by Frame! Crisp, clear, and classic. Our DSLR Booth delivers studio-quality snapshots with a touch of fun. Strike a pose, choose your backdrop, and let the pro-grade camera do the rest—because every detail deserves to shine.
        </p>
        <button className="btn block"  onClick={() => navigate("/packages")}>Book Now</button>
        </div>
        <img src={DSLR} alt="explore image" className="md:w-[456px]" />
      </div>
      <div className="flex lg:flex-row flex-col lg:justify-evenly lg:mt-10">
        <div className="md:h-[600px] object-contain overflow-hidden">
      <video 
  src={ExploreBoots3} 
  className="md:w-[456px] " 
  autoPlay 
  muted 
  loop
>
  Your browser does not support the video tag.
</video>
</div>

        <div className="lg:w-[26rem] w-full lg:mr-10">
            <h2 className="lg:pb-7 py-5 text-2xl">360 Booth</h2>
        <p className="text-lg "> Every Angle, Every Moment! Why take one shot when you can have them all? Step onto the platform, let the camera spin, and capture the magic in motion. Slow-mo, boomerang, or a full cinematic spin—your moment, your way.
        </p>
        <button className="btn block "  onClick={() => navigate("/packages")}>Book Now</button>
        </div>
      </div>
      
      <div className="flex lg:flex-row my-10 flex-col-reverse lg:justify-evenly lg:items-center lg:mt-10">
       
       <div className="lg:w-[26rem] w-full mr-10">
           <h2 className="lg:pb-7 py-5 text-2xl">Magazine Booth</h2>
       <p className="text-lg ">Every Frame, Cover-Worthy! Step into the spotlight and onto the cover. With flawless lighting and editorial-style flair, FotoRoo’s Magazine Booth transforms every shot into an editorial masterpiece. Instant. Iconic. Unforgettable.

       </p>
       <button className="btn block"  onClick={() => navigate("/packages")}>Book Now</button>
       </div>
       <img src={MagazineBooth1} alt="explore image" className="md:w-[456px]" />
     </div>
      </div>
      
    </section>
  );
};

export default ExploreOurBooths;
