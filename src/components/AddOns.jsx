import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import Audio from "../Images/addOns/Audio.png"
import AudioGB from "../Images/addOns/package_AudioGuestBook.png";

export default function AddOns() {
  const addOns = [
    {
      title: "Audio Guest Book",
      description: "Because Voices Hold More Than Words",
      content: `Some moments are too special to be left on paper. FotoRoo's Audio Guest Book captures the raw emotions, laughter, and heartfelt messages of your guests—preserved in sound, not just ink.

At weddings, milestone celebrations, and corporate galas, this elegant, vintage-inspired phone lets guests leave timeless audio keepsakes that you can relive forever. From tearful toasts to inside jokes, their voices become an unforgettable part of your story.

No apps. No awkward typing. Just pure nostalgia, bottled in sound.
Ditch the pen. Dial in the magic.
\nHow Does It Work?
\nStep 1 – Pick up the phone.\nStep 2 – Leave your message after the beep.\nStep 3 – Hang up to save your recording.`,
      image: AudioGB, 
    }
    // {
    //   title: "Keep Sake Album",
    //   description: "Timeless Memories, Beautifully Preserved",
    //   content: `Turn your special moments into a lasting keepsake with the FotoRoo Keepsake Album. It's the perfect way to collect all the photos taken in the booth, along with heartfelt messages from your guests. After your event, you'll have a beautifully crafted album to look back on and cherish for years to come.`,
    //   image: Audio, 
    // },
  ]

  return (
    <section className="w-full pb-12 bg-muted/30">
      <div className="container mx-auto">
        <div className="mx-auto">
          {addOns.map((booth, index) => (
            <div
              key={booth.title}
              className={`flex my-5 flex-col-reverse sm:px-24 md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="md:w-2/5 mx-auto text-center md:text-start my-9 md:my-0">
                <h2 className="text-3xl my-4 md:text-4xl font-dhaks">{booth.title}</h2>
                <p className="font-rische font-semibold md:text-lg leading-5 text-textCol md:w-4/5 mb-4">
                  {booth.description}
                </p>
                <p className="font-rische font-medium md:text-lg leading-5 text-textCol md:w-4/5 whitespace-pre-line">
                  {booth.content}
                </p>
              </div>
              <div className="md:w-2/4">
                <img src={booth.image} alt={booth.title} className="w-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
