import { CheckCheckIcon } from 'lucide-react'
import Image from 'next/image'

const whyUs = [
  {
    id: 1,
    heading: "Comprehensive Training Programs:",
    desc: "We offer a wide range of comprehensive training programs tailored to meet the demands of various industries. From technical skills to soft skills, our courses are designed to equip learners with the knowledge and expertise needed to excel in their chosen professions."
  },
  {
    id: 2,
    heading: "Expert Instructors: ",
    desc: "Our team of expert instructors brings a wealth of industry experience to the classroom. They are passionate about teaching and are dedicated to helping you succeed. With their guidance and mentorship, learners will gain valuable insights and practical knowledge that will accelerate their professional growth."
  },
  {
    id: 3,
    heading: "Hands-on Learning: ",
    desc: "We believe in learning by doing. Our training programs emphasize hands-on experiences and practical application of skills. Through real-world projects, simulations, and interactive workshops, learners will develop the confidence and competence to tackle the challenges of their chosen fields."
  },
]

const AboutSection = () => {
  return (
    <section className='w-full min-h-screen  lg:grid grid-cols-2 gap-10 py-20'>
        <div className="w-full h-full">
        <Image src='/aboutSecImg.jpg' height={3067} width={2469} alt='about image' objectFit='contain' />
        </div>
        <div className="px-4">
            <h3 className='text-[#1b1b1b] text-4xl  sm:text-5xl tracking-tight capitalize font-bold mt-12'>Why Choose Us?</h3>
            <p className='text-base text-muted-foreground leading-[1.7] mt-8'>We are dedicated to empowering individuals with the knowledge and skills they need to thrive in today's rapidly changing world. We understand that continuous learning and upskilling are essential for personal growth and professional success. That's why we provide high-quality skills training programs designed to equip our students with the tools they need to excel in their chosen fields.</p>
            <h3 className='mt-4 text-3xl font-bold capitalize'>What we offer</h3>
            <div className="mt-4">
              {
                whyUs.map(why => (
                <div className="mt-4" key={why.id}>
                  <p><span className='leading-[1.7]'><span className='font-bold flex items-center text-lg '><CheckCheckIcon className='w-6 h-6 mr-2 text-[#283891]' />{why.heading}</span> <span className='text-muted-foreground'> {why.desc}</span></span></p>
                </div>
                ))
              }
              
            </div>
        </div>
    </section>
  )
}

export default AboutSection