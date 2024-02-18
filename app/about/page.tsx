import HeroSm from "@/components/shared/HeroSm"
import Image from "next/image"



const page = () => {
  return (
    <section className="w-full min-h-screen">
        <HeroSm header="about us" subHeader="our story" />
        <div className="grid sm:grid-cols-2 gap-8 py-20 sm:py-40">
          <div className="relative  rounded-lg overflow-hidden">
            <Image src='/aboutUs.jpg' width={1000} height={884} alt='about section image'/>
          </div>
          <div className="px-4 sm:px-10">
            <h3 className="text-4xl text-[#1b1b1b] font-bold tracking-tight">About Us</h3>
            <p className="mt-4 text-muted-foreground text base leading-[1.7]">At Divine Academy, we are dedicated to empowering individuals with the knowledge and skills they need to thrive in today's rapidly changing world. We understand that continuous learning and upskilling are essential for personal growth and professional success.</p>
            <h3 className="text-4xl text-[#1b1b1b] font-bold tracking-tight mt-6">Our Vision</h3>
            <p className="mt-4 text-muted-foreground text base leading-[1.7]">
            Our vision is to be the leading skills training institute, recognized for our commitment to excellence in education and our ability to shape the future workforce. 
            </p>
            <h3 className="text-4xl text-[#1b1b1b] font-bold tracking-tight mt-6">Our Mission</h3>
            <p className="mt-4 text-muted-foreground text base leading-[1.7]">
            Our mission is to provide industry-relevant training programs that empower individuals to develop practical skills and achieve their career goals. We strive to deliver exceptional education and hands-on learning experiences, guided by expert instructors who bring real-world expertise to the classroom. 
            </p>
          </div>
          </div> 
    </section>
  )
} 

export default page