import { useParams } from "react-router"
import HomeImage from "../../Images/HomeImage.png";
import heroImage1 from "../../Images/packageDetails/heroImages/1.png";
import heroImage2 from "../../Images/packageDetails/heroImages/2.png";
import heroImage3 from "../../Images/packageDetails/heroImages/3.png";
import heroImage4 from "../../Images/packageDetails/heroImages/4.png";
import packagedetail1 from "../../Images/packagedetail1.png";
import packagedetail2 from "../../Images/packagedetail2.png";
import packagedetail3 from "../../Images/packagedetail3.png";
import props from "../../Images/packageDetails/props.png";
import gifimg from "../../Images/packageDetails/gifimg.png";
import qrcodeimg from "../../Images/packageDetails/qr.png";
import airdrop from "../../Images/packageDetails/airdrop.png";
import redcarpet from "../../Images/packageDetails/red-carpet.png";
import delivery from "../../Images/packageDetails/delivery.png";
import gallery from "../../Images/packageDetails/secure_online_gallery.png";
import backdrop from "../../Images/packageDetails/customizable_backdrop.png";
import lighting from "../../Images/packageDetails/studio_grade_lighting.png";
import led from "../../Images/packageDetails/led.png";
import overlays from "../../Images/packageDetails/overlays.png";
import personalizePrints from "../../Images/packageDetails/personalize_prints.png";
import bgm from "../../Images/packageDetails/bgm.png";
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
    heroImg: heroImage1,
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
        imageURL: props
      },
      {
        title: "GIF",
        paragraph: "Turn still moments into fun, shareable animations that bring your memories to life.",
        imageURL: gifimg
      },
      {
        title: "Studio-Grade Lighting",
        paragraph: "Flawless, well-lit photos with professional lighting that makes every guest look their best.",
        imageURL: lighting
      },
      {
        title: "Customizable Backdrops",
        paragraph: "A variety of elegant and themed backgrounds tailored to match your event’s aesthetic.",
        imageURL: backdrop
      },
      {
        title: "Personalized Print Designs",
        paragraph: "Custom overlays and templates to match your event theme, branding, or personal style.",
        imageURL: personalizePrints
      },
      {
        title: "Secure Online Gallery",
        paragraph: "A private digital album where guests can view, download, and share their photos easily.",
        imageURL: gallery
      },
      {
        title: "Hassle-Free Delivery & Setup",
        paragraph: "We handle everything from transport to assembly, ensuring a hassle-free, seamless experience for you.",
        imageURL: delivery
      },
      {
        title: "Red Carpet and Bollards",
        paragraph: "Elevate the experience with a VIP entrance, creating a glamorous touch for your event.",
        imageURL: redcarpet
      },
      {
        title: "Airdrop",
        paragraph: "Instant, wireless photo sharing for Apple users, making it easy to save and share moments.",
        imageURL: airdrop
      },
      {
        title: "QR Code",
        paragraph: "Quick and convenient access to event photos, allowing guests to download their pictures instantly.",
        imageURL: qrcodeimg
      }
    ]
  },
  {
    id: 2,
    name: "Mirror",
    price: "$200",
    heroImg: heroImage2,
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
        imageURL: props
      },
      {
        title: "GIF",
        paragraph: "Turn still moments into fun, shareable animations that bring your memories to life.",
        imageURL: gifimg
      },
      {
        title: "Studio-Grade Lighting",
        paragraph: "Flawless, well-lit photos with professional lighting that makes every guest look their best.",
        imageURL: lighting
      },
      {
        title: "Customizable Backdrops",
        paragraph: "A variety of elegant and themed backgrounds tailored to match your event’s aesthetic.",
        imageURL: backdrop
      },
      {
        title: "Personalized Print Designs",
        paragraph: "Custom overlays and templates to match your event theme, branding, or personal style.",
        imageURL: personalizePrints
      },
      {
        title: "Secure Online Gallery",
        paragraph: "A private digital album where guests can view, download, and share their photos easily.",
        imageURL: gallery
      },
      {
        title: "Hassle-Free Delivery & Setup",
        paragraph: "We handle everything from transport to assembly, ensuring a hassle-free, seamless experience for you.",
        imageURL: delivery
      },
      {
        title: "Red Carpet and Bollards",
        paragraph: "Elevate the experience with a VIP entrance, creating a glamorous touch for your event.",
        imageURL: redcarpet
      },
      {
        title: "Airdrop",
        paragraph: "Instant, wireless photo sharing for Apple users, making it easy to save and share moments.",
        imageURL: airdrop
      },
      {
        title: "QR Code",
        paragraph: "Quick and convenient access to event photos, allowing guests to download their pictures instantly.",
        imageURL: qrcodeimg
      }
    ]
  },
  {
    id: 4,
    name: "Magazine",
    price: "$250",
    heroImg: heroImage4,
    details: [
      {
        title: "Photo Booth Attendant",
        paragraph: "A dedicated professional to guide guests, operate the booth, and ensure a smooth and fun experience.",
        imageURL: packagedetail1
      },
      {
        title: "Trendy Props",
        paragraph: "A curated selection of stylish and playful props to add personality and creativity to every shot.",
        imageURL: props
      },
      {
        title: "Studio-Grade Lighting",
        paragraph: "Flawless, well-lit photos with professional lighting that makes every guest look their best.",
        imageURL: lighting
      },
      {
        title: "Red Carpet and Bollards",
        paragraph: "Elevate the experience with a VIP entrance, creating a glamorous touch for your event.",
        imageURL: redcarpet
      },
      {
        title: "Hassle-Free Delivery & Setup",
        paragraph: "We handle everything from transport to assembly, ensuring a hassle-free, seamless experience for you.",
        imageURL: delivery
      },
      {
        title: "Secure Online Gallery",
        paragraph: "A private digital album where guests can view, download, and share their photos easily.",
        imageURL: gallery
      }
    ]
  },
  {
    id: 3,
    name: "360",
    price: "$300",
    heroImg: heroImage3,
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
        imageURL: overlays
      },
      {
        title: "Colorful LED Tubes",
        paragraph: "Vibrant LED lighting adds an exciting visual effect, creating a dynamic and immersive video experience.",
        imageURL: led
      },
      {
        title: "Custom Background Music",
        paragraph: "Enhance your 360 videos with personalized background music that matches the vibe of your event.",
        imageURL: bgm
      },
      {
        title: "Red Carpet and Bollards",
        paragraph: "Elevate the experience with a VIP entrance, creating a glamorous touch for your event.",
        imageURL: redcarpet
      },
      {
        title: "Trendy Party Props",
        paragraph: "Fun and stylish props to bring personality and creativity to every video.",
        imageURL: props
      },
      {
        title: "Secure Online Gallery",
        paragraph: "A private digital album where guests can access, download, and share their videos instantly.",
        imageURL: gallery
      },
      {
        title: "Hassle-Free Delivery & Setup",
        paragraph: "We handle everything from transport to assembly, ensuring a hassle-free, seamless experience for you.",
        imageURL: delivery
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
                      src={packItem.heroImg}
                      // className="md:w-[1500px]  my-5 md:h-[400px] h-[350px] flex justify-center overflow-hidden z-0"
                      // className="md:w-[1500px] rounded-lg   my-5 md:h-[400px]  flex justify-center overflow-hidden z-0"
                      className="w-full rounded-lg my-5 h-auto max-h-[400px]ßß flex justify-center overflow-hidden z-0"
                      alt="Home Image"
                    />
                    <p className="absolute inset-0 flex items-center md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-5xl tracking-tighter justify-center  text-white ">
                      {packItem.name} <span className="md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-5xl  md:pl-3 pl-1 mt-4 tracking-tight">Booth</span>
                    </p>
                  </div>
                  <div>
                  {packItem.details.map(((item,index)=>(
                    < >
                    <div key={item.paragraph} className={`flex flex-col justify-center sm:px-24 md:flex-row ${
                        index % 2 === 0 ? "md:flex-row-reverse md:items-center flex-col-reverse" : "md:flex-row md:items-center flex-col-reverse" 
                      }`}>
                        <div className="md:w-2/5 mx-auto text-center md:text-start my-9 md:my-0">
                        <h2 className="text-2xl md:my-4 my-2 md:text-4xl lg:text-3xl xl:text-4xl font-dhaks">{item.title}</h2>
                        <p className="font-rische text-lg lg:text-xl xl:text-2xl leading-5 text-textCol md:w-4/5 lg:w-3/5">{item.paragraph}</p>
                        </div>
                        <div className="md:w-2/4 ">
                        <img src={item.imageURL} alt={item.title} className="w-full object-cover" /></div>
                    </div>
                    </>
                  )))}
                  </div>
                </div>
            )))}

<h2 className="md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-5xl text-center mt-16">
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