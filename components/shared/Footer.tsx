import { Clock1, FacebookIcon, InstagramIcon, PhoneIncoming, XIcon } from "lucide-react"
import Image from "next/image"

const col1 = [
    {
        heading: "educate",
        desc: "providing life changing experiences through education. class that fit your busy life. closer to home",
        icon1: <PhoneIncoming className="w-4 h-4 text-white" />,
        number: "+27 65923 6199",
        icon2: <Clock1 className="w-4 h-4 text-white" />,
        time: "Mon-Sat 0800-1800"
    },
    {
        heading: "latest news",
        news1: "graduate admissions",
        author: "by craig murphy",
        news2: "continuing education",
        news3: "current students"
    },
    {
        heading: "usefull links",
        links: ["popular courses", "forums", "our teachers", "upcoming events", "contact us"]
    }
]

const Footer = () => {
  return (
   <section className=' pt-10 bg-[#222222] px-10 '>
        <div className="grid  sm:grid-cols-4 gap-10 py-10">
            <div className="">
                <h3 className="text-white text-xl font-bold capitalize">educate</h3>
                <p className="text-base text-muted-foreground mt-4 capitalize">providing life changing experiences through education. class that fit your busy life. closer to home</p>
                <div className="mt-10 flex items-center gap-2">
                    <PhoneIncoming className="w-4 h-4 text-white" />
                    <p className="text-base text-muted-foreground">+27 65923 6199</p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                    <Clock1 className="w-4 h-4 text-white" />
                    <p className="text-base text-muted-foreground">Mon-Sat 0800-1800</p>
                </div>
            </div>

            <div className="">
                <h3 className="text-white text-xl font-semibold capitalize">latest news</h3>
                <p className="text-base text-muted-foreground font-bold mt-4 capitalize">graduate admissions</p>
                <p className="text-base text-muted-foreground">by Craig Murphy</p>
                <p className="text-base text-muted-foreground font-bold mt-2 capitalize">continuing education</p>
                <p className="text-base text-muted-foreground">by Craig Murphy</p>
                <p className="text-base text-muted-foreground font-bold mt-2 capitalize">current students</p>
                <p className="text-base text-muted-foreground">by Craig Murphy</p>
            </div>

            <div className="">
                <h3 className="text-white text-xl font-bold capitalize">usefull links</h3>
                <p className="text-muted-foreground text-base mt-4 capitalize">popular courses</p>
                <p className="text-muted-foreground text-base mt-2 capitalize">forums</p>
                <p className="text-muted-foreground text-base mt-2 capitalize">our teachers</p>
                <p className="text-muted-foreground text-base mt-2 capitalize">upcoming events</p>
                <p className="text-muted-foreground text-base mt-2 capitalize">contact us</p>
            </div>

            <div className="">
                <h3 className="text-white text-xl font-bold capitalize">flexible learning</h3>
                <div className="h-[150px] w-[160px] relative mt-4 rounded-lg overflow-hidden">
                    <Image src='/footerImg.jpg' fill alt='footer image' objectFit="cover" />
                </div>
            </div>
        </div>
        <div className="py-10 border-t border-dashed border-muted-foreground flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <p className="text-muted-foreground">&copy; 2024 Divine Academy. All rights reserved</p>
            <div className="flex items-center gap-4">
                <p className="text-muted-foreground uppercase text-sm">call +27 65 923 6199</p>
                <div className="text-muted-foreground text-sm uppercase font-semibold">follow us</div>
                <div className="flex items-center gap-2">
                    <FacebookIcon className="w-3 h-3 text-muted-foreground" />
                    <InstagramIcon className="w-3 h-3 text-muted-foreground" />
                    <XIcon className="w-3 h-3 text-muted-foreground" />
                </div>
            </div>
        </div>
   </section>
  )
}

export default Footer