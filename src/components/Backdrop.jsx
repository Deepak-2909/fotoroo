import  backdrops from "../Images/backdrops.png";
// import packageImage from "../Images/packageImage.png";
import Blue from "../Images/backdrops/Blue.png";
import Golden1 from "../Images/backdrops/Golden1.png";
import Golden2 from "../Images/backdrops/Golden2.png";
import Golden from "../Images/backdrops/Golden.png";
import Golden4 from "../Images/backdrops/Golden4.png";
import Golden5 from "../Images/backdrops/Golden5.png";
import Rose from "../Images/backdrops/Rose.png";
import Silver from "../Images/backdrops/Silver.png";
import Symphony from "../Images/backdrops/Symphony.png";
import white from "../Images/backdrops/white.png";
import snow from "../Images/backdrops/snow.png";
import Royal from "../Images/backdrops/Royal.png";
import pink from "../Images/backdrops/pink.png";
import { useNavigate } from "react-router";

const Backdrop = () => {
  const navigate = useNavigate();
  const Backdrops = [
    { id: 1, name: "Blue Garden", price: "8x8ft", image: Blue },
    { id: 2, name: "Golden Confetti", price: "8x8ft", image: Golden1 },
    { id: 3, name: "Golden Geometry", price: "8x8ft", image: Golden2 },
    { id: 5, name: "Golden Sparkle", price: "8x8ft", image: Golden4 },
    { id: 6, name: "Golden Foliage", price: "8x8ft", image: Golden5 },
    { id: 9, name: "Symphony", price: "8x8ft", image: Symphony },
    { id: 4, name: "Golden Glamour", price: "7x7ft", image: Golden },
    { id: 7, name: "Rose Garden", price: "7x7ft", image: Rose },
    { id: 8, name: "Silver Sparkle", price: "7x7ft", image: Silver },
    { id: 10, name: "White Tranquility", price: "7x7ft", image: white },
    { id: 11, name: "Snow White", price: "7x7ft", image: snow },
    { id: 12, name: "Royal Midnight Elegance", price: "7x7ft", image: Royal },
    { id: 13, name: "Soft Pink Serenity", price: "7x7ft", image: pink },
];


  return (
    <section className="mx-auto w-full">
      <div className="relative">
        <img
          src={backdrops}
          // className="md:w-[1500px] opacity-100 rounded-lg  hover:scale-110 transition-transform duration-300  my-5 md:h-[400px]  flex justify-center  z-0"
          className="w-full rounded-lg my-5 h-auto max-h-[400px] flex justify-center overflow-hidden z-0"
          alt="Home Image"
        />
        <p className="absolute inset-0 flex items-center md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-5xl justify-center text-white ">
          Our{" "}
          <span className="md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-5xl md:font-dhaks md:pl-3 pl-1 ">
            Backdrops
          </span>
        </p>
      </div>
      
      <div className="my-10">
        
        <div className="grid px-2 md:px-0 grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {Backdrops.map((booth) => (
            <div
              key={booth.id}
              className="text-center mx-auto flex flex-col items-center justify-center"
            >
              <div className="mx-auto">
                <img
                  src={booth.image}
                  alt={booth.name}
                  className="w-auto md:h-96 object-cover hover:scale-110 transition-transform duration-300  rounded-lg overflow-hidden "
                />
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <h3 className="text-lg lg:text-xl xl:text-2xl font-rische font-semibold mb-2">{booth.name}</h3>
                <p className="text-gray-600 mb-4">{booth.price}</p>
                <button
                  className="btn block"
                  onClick={() => navigate("/enquire")}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Backdrop;
