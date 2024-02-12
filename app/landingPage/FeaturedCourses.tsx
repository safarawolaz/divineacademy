import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const populaCrs = [
  {
    id: 1,
    imgUrl: '/course1.jpg',
    program: 'project management',
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facere?'
  },
  {
    id: 2,
    imgUrl: '/course2.jpg',
    program: 'business management',
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facere?'
  },
  {
    id: 3,
    imgUrl: '/course3.jpg',
    program: 'computer literacy',
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facere?'
  },
  {
    id: 4,
    imgUrl: '/course4.jpg',
    program: 'agriculture',
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facere?'
  },
  {
    id: 5,
    imgUrl: '/course5.jpg',
    program: 'entrepreneurship',
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facere?'
  },
  {
    id: 6,
    imgUrl: '/course6.jpg',
    program: 'end user computing',
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facere?'
  },
]

const FeaturedCourses = () => {
  return (
    <section className='py-20 -mt-36 sm:mt-0  bg-neutral-100 flex flex-col items-center justify-center'>
        <h3 className='text-[#1b1b1b]  text-center text-4xl sm:text-5xl tracking-tight capitalize font-bold'>Popular Programs</h3>
        <p className="mt-4 text-lg text-muted-foreground text-center">Here are some programs which are popular with <br /> most of our students as of now</p>
        <div className="grid sm:grid-cols-3 gap-8 rounded-lg w-full mt-12 px-4 sm:px-10">

          {
            populaCrs.map(course => (
               <div className="bg-neutral-50 w-full pb-10 rounded-lg overflow-hidden" key={course.id}>
                <div className="h-[180px] bg-white relative overflow-hidden">
                  <Image src={course.imgUrl} fill alt="course image" objectFit="cover" />
                </div>
                <h3 className="px-4 mt-4 text-2xl font-bold capitalize">{course.program}</h3>
                <p className="px-4 mt-4 text-base text-muted-foreground">{course.desc}</p>
                <div className="flex justify-center">
                  <Button className="uppercase text-base font-bold tracking-wider mt-6 flex items-center" variant='ghost'><span className="hover:mr-1 transition-all">learn more</span> <ArrowUpRight className="text-[#283891] w-4 h-4 ml-2" />
                  </Button>
                </div>
               </div>
            ))
          }
        </div>
    </section>
  )
}

export default FeaturedCourses