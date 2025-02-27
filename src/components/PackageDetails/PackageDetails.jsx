import { useParams } from "react-router"
import HomeImage from "../../Images/HomeImage.png";
import packagedetail1 from "../../Images/packagedetail1.png";
import packagedetail2 from "../../Images/packagedetail2.png";
import packagedetail3 from "../../Images/packagedetail3.png";
import gif1 from "../../Images/PI_gif.mp4";
import AddOns from "../AddOns";
import { useEffect } from "react";


// const items = [
//     {
//       id: 1,
//       name: "DSLR",
//       price: "$200",
//       details: [
//         {
//           title: "Photo Booth Attendant",
//           paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//           imageURL: packagedetail1
//         },
//         {
//           title: "Unlimited 2x Photo Strips",
//           paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//           imageURL: packagedetail2
//         },
//         {
//           title: "Another Example Title",
//           paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//           imageURL: packagedetail3
//         }
//       ]
//     },
//     {
//       id: 2,
//       name: "Mirror",
//       price: "$250",
//       details: [
//         {
//           title: "Photo Booth Attendant",
//           paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//           imageURL: packagedetail1
//         },
//         {
//           title: "Unlimited 2x Photo Strips",
//           paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//           imageURL: packagedetail2
//         },
//         {
//           title: "Another Example Title",
//           paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//           imageURL: packagedetail3
//         }
//       ]
//     },
//     {
//       id: 3,
//       name: "360 Booth",
//       price: "$300",
//       details: [
//         {
//           title: "Photo Booth Attendant",
//           paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//           imageURL: packagedetail1
//         },
//         {
//           title: "Unlimited 2x Photo Strips",
//           paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//           imageURL: packagedetail2
//         },
//         {
//           title: "Another Example Title",
//           paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//           imageURL: packagedetail3
//         }
//       ]
//     },
//     {
//       id: 4,
//       name: "Magazine Booth",
//       price: "$300",
//       details: [
//         {
//           title: "Photo Booth Attendant",
//           paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//           imageURL: packagedetail1
//         },
//         {
//           title: "Unlimited 2x Photo Strips",
//           paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//           imageURL: packagedetail2
//         },
//         {
//           title: "Another Example Title",
//           paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//           imageURL: packagedetail3
//         }
//       ]
//     }
//   ];

 
const items = [
  {
    id: 1,
    name: "DSLR",
    price: "$200",
    details: [
      {
        title: "Photo Booth Attendant",
        paragraph: "A dedicated professional to guide guests, operate the booth, and ensure a smooth and fun experience.",
        imageURL: packagedetail1
      },
      {
        title: "Unlimited 2x Photo Strips",
        paragraph: "Classic and fun photo strips printed instantly, letting guests take home unlimited keepsakes.",
        imageURL: packagedetail2
      },
      {
        title: "High-Quality DSLR Camera",
        paragraph: "Capturing every moment in stunning high resolution for crisp, vibrant photos.",
        imageURL: packagedetail3
      },
      {
        title: "Trendy Props",
        paragraph: "A curated selection of stylish and playful props to add personality and creativity to every shot.",
        imageURL: packagedetail1
      },
      {
        title: "GIF",
        paragraph: "Turn still moments into fun, shareable animations that bring your memories to life.",
        imageURL: gif1
      },
      {
        title: "Studio-Grade Lighting",
        paragraph: "Flawless, well-lit photos with professional lighting that makes every guest look their best.",
        imageURL: packagedetail3
      },
      {
        title: "Customizable Backdrops",
        paragraph: "A variety of elegant and themed backgrounds tailored to match your event’s aesthetic.",
        imageURL: packagedetail1
      },
      {
        title: "Personalized Print Designs",
        paragraph: "Custom overlays and templates to match your event theme, branding, or personal style.",
        imageURL: packagedetail1
      },
      {
        title: "Secure Online Gallery",
        paragraph: "A private digital album where guests can view, download, and share their photos easily.",
        imageURL: packagedetail1
      },
      {
        title: "Hassle-Free Delivery & Setup",
        paragraph: "We handle everything from transport to assembly, ensuring a hassle-free, seamless experience for you.",
        imageURL: packagedetail1
      },
      {
        title: "Red Carpet and Bollards",
        paragraph: "Elevate the experience with a VIP entrance, creating a glamorous touch for your event.",
        imageURL: packagedetail1
      },
      {
        title: "Airdrop",
        paragraph: "Instant, wireless photo sharing for Apple users, making it easy to save and share moments.",
        imageURL: packagedetail1
      },
      {
        title: "QR Code",
        paragraph: "Quick and convenient access to event photos, allowing guests to download their pictures instantly.",
        imageURL: packagedetail1
      }
    ]
  },
  {
    id: 2,
    name: "Mirror",
    price: "$200",
    details: [
      {
        title: "Photo Booth Attendant",
        paragraph: "A dedicated professional to guide guests, operate the booth, and ensure a smooth and fun experience.",
        imageURL: packagedetail1
      },
      {
        title: "Unlimited 2x Photo Strips",
        paragraph: "Classic and fun photo strips printed instantly, letting guests take home unlimited keepsakes.",
        imageURL: packagedetail2
      },
      {
        title: "High-Quality DSLR Camera",
        paragraph: "Capturing every moment in stunning high resolution for crisp, vibrant photos.",
        imageURL: packagedetail3
      },
      {
        title: "Trendy Props",
        paragraph: "A curated selection of stylish and playful props to add personality and creativity to every shot.",
        imageURL: packagedetail1
      },
      {
        title: "GIF",
        paragraph: "Turn still moments into fun, shareable animations that bring your memories to life.",
        imageURL: gif1
      },
      {
        title: "Studio-Grade Lighting",
        paragraph: "Flawless, well-lit photos with professional lighting that makes every guest look their best.",
        imageURL: packagedetail3
      },
      {
        title: "Customizable Backdrops",
        paragraph: "A variety of elegant and themed backgrounds tailored to match your event’s aesthetic.",
        imageURL: packagedetail1
      },
      {
        title: "Personalized Print Designs",
        paragraph: "Custom overlays and templates to match your event theme, branding, or personal style.",
        imageURL: packagedetail1
      },
      {
        title: "Secure Online Gallery",
        paragraph: "A private digital album where guests can view, download, and share their photos easily.",
        imageURL: packagedetail1
      },
      {
        title: "Hassle-Free Delivery & Setup",
        paragraph: "We handle everything from transport to assembly, ensuring a hassle-free, seamless experience for you.",
        imageURL: packagedetail1
      },
      {
        title: "Red Carpet and Bollards",
        paragraph: "Elevate the experience with a VIP entrance, creating a glamorous touch for your event.",
        imageURL: packagedetail1
      },
      {
        title: "Airdrop",
        paragraph: "Instant, wireless photo sharing for Apple users, making it easy to save and share moments.",
        imageURL: packagedetail1
      },
      {
        title: "QR Code",
        paragraph: "Quick and convenient access to event photos, allowing guests to download their pictures instantly.",
        imageURL: packagedetail1
      }
    ]
  },
  {
    id: 4,
    name: "Magazine",
    price: "$250",
    details: [
      {
        title: "Photo Booth Attendant",
        paragraph: "A dedicated professional to guide guests, operate the booth, and ensure a smooth and fun experience.",
        imageURL: packagedetail1
      },
      {
        title: "Trendy Props",
        paragraph: "A curated selection of stylish and playful props to add personality and creativity to every shot.",
        imageURL: packagedetail2
      },
      {
        title: "Studio-Grade Lighting",
        paragraph: "Flawless, well-lit photos with professional lighting that makes every guest look their best.",
        imageURL: packagedetail3
      },
      {
        title: "Red Carpet and Bollards",
        paragraph: "Elevate the experience with a VIP entrance, creating a glamorous touch for your event.",
        imageURL: packagedetail1
      },
      {
        title: "Hassle-Free Delivery & Setup",
        paragraph: "We handle everything from transport to assembly, ensuring a hassle-free, seamless experience for you.",
        imageURL: packagedetail2
      },
      {
        title: "Secure Online Gallery",
        paragraph: "A private digital album where guests can view, download, and share their photos easily.",
        imageURL: packagedetail3
      }
    ]
  },
  {
    id: 3,
    name: "360",
    price: "$300",
    details: [
      {
        title: "Photo Booth Attendant",
        paragraph: "A dedicated professional to guide guests, operate the booth, and ensure a smooth and fun experience.",
        imageURL: packagedetail1
      },
      {
        title: "Unlimited 360 Video Sessions",
        paragraph: "Guests can step onto the platform and record unlimited dynamic slow-motion videos, capturing every angle.",
        imageURL: packagedetail2
      },
      {
        title: "Custom Overlays",
        paragraph: "Personalized video overlays to match your event’s theme, branding, or unique style for a premium touch.",
        imageURL: packagedetail3
      },
      {
        title: "Colorful LED Tubes",
        paragraph: "Vibrant LED lighting adds an exciting visual effect, creating a dynamic and immersive video experience.",
        imageURL: packagedetail1
      },
      {
        title: "Custom Background Music",
        paragraph: "Enhance your 360 videos with personalized background music that matches the vibe of your event.",
        imageURL: packagedetail2
      },
      {
        title: "Red Carpet and Bollards",
        paragraph: "Elevate the experience with a VIP entrance, creating a glamorous touch for your event.",
        imageURL: packagedetail3
      },
      {
        title: "Trendy Party Props",
        paragraph: "Fun and stylish props to bring personality and creativity to every video.",
        imageURL: packagedetail1
      },
      {
        title: "Secure Online Gallery",
        paragraph: "A private digital album where guests can access, download, and share their videos instantly.",
        imageURL: packagedetail1
      },
      {
        title: "Hassle-Free Delivery & Setup",
        paragraph: "We handle everything from transport to assembly, ensuring a hassle-free, seamless experience for you.",
        imageURL: packagedetail1
      }
    ]
  }
];




const PackageDetails = () => {
    const {id}= useParams()
    console.log(id)
  const filterValue= items.filter(item=> item.id===Number(id))
  console.log(filterValue)

 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="PackageDetails">
            {filterValue.map((packItem=>(
                <div key={packItem.id}>
                    <div className="relative"> 
                    <img
                      src={HomeImage}
                      className="md:w-[1500px]  my-5 md:h-[400px] h-[350px] flex justify-center overflow-hidden z-0"
                      alt="Home Image"
                    />
                    <p className="absolute inset-0 flex items-center md:text-8xl font-baskerville tracking-tighter justify-center  text-white text-3xl ">
                      {packItem.name} <span className="font-pinyon md:pl-3 pl-1 md:text-8xl mt-4 tracking-tight">Booth</span>
                    </p>
                  </div>
                  <div>
                  {packItem.details.map(((item,index)=>(
                    < >
                    <div key={item.paragraph} className={`flex flex-col justify-center sm:px-24 md:flex-row ${
                        index % 2 === 0 ? "md:flex-row-reverse md:items-center flex-col-reverse" : "md:flex-row md:items-center flex-col-reverse" 
                      }`}>
                        <div className="md:w-2/5 mx-auto text-center md:text-start my-9 md:my-0">
                        <h2 className="text-xl my-4 md:text-4xl font-rig-solid">{item.title}</h2>
                        <p className="font-courgette font-medium md:text-lg leading-5 text-textCol md:w-4/5">{item.paragraph}</p>
                        </div>
                        <div className="md:w-2/4 ">
                        <img src={item.imageURL} alt={item.title} className="w-full object-cover" /></div>
                    </div>
                    </>
                  )))}
                  </div>
                </div>
            )))}

<h2 className="text-4xl md:text-6xl font-pinyon text-center mt-16">
        Add Ons
      </h2>
      <div className="grid ">
        {/* i remove this */}
        {/* {addons.map((addon) => ( 
          <div
            key={addon.id}
            className="text-center mx-auto flex flex-col items-center justify-center"
          >
            <div className="mx-auto">
              <img
                src={addon.image}
                alt={addon.name}
                 className="w-80 h-96 object-cover  rounded-lg overflow-hidden "
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
              <p className="text-gray-600 mb-4">{addon.price}</p>
              <button
                className="btn"
                onClick={() => handleLearnMore(addon.id)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))} */}

        <AddOns />
      </div>
      
    </section>
  )
}

export default PackageDetails