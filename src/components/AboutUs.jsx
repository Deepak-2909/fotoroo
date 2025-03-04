import aboutUsGif from "../Images/aboutUs.mp4";

const AboutUs = () => {
  return (
    <section>
      <h1 className="text-textCol md:text-8xl text-5xl text-center font-pinyon my-10">
        About <span className="font-baskerville">US</span>
      </h1>
      <div className="flex md:flex-row flex-col-reverse  gap-4 mx-auto">
        <div className="flex-col px-7 md:w-full text-bgSecond rounded-xl lg:text-lg  ">
          <h2 className="text-[25px] leading-8">
            At FotoRoo, Every Event Deserves a Touch of Magic and Lasting
            Memories.
          </h2>
          <p className="md:mt-7 my-3">
            With our passion for creating unforgettable experiences, we ensure
            your celebration stands out. Whether it’s a wedding, birthday,
            corporate event, or any special occasion, our photo booths bring
            joy, laughter, and unique keepsakes for you and your guests. We
            proudly serve Sydney, Blue Mountains, and Wollongong, offering
            modern photo booth technology, personalized overlays, and a variety
            of backdrops to complement your theme. Our dedicated team makes the
            process seamless and stress-free, so you can focus on enjoying your
            big day. Reach out to us today to start planning your
            picture-perfect event—we can’t wait to be part of your special
            moments! 
          </p>
          <p>Follow up - Automatic feedback updates on the website. 
          </p>
        </div>

        {/* <img src={aboutUsGif} alt="" className="md:w-full h-96 " /> */}
        <video src={aboutUsGif} autoPlay loop muted playsInline className="md:w-full h-full object-cover" />

      </div>
    </section>
  );
};

export default AboutUs;
