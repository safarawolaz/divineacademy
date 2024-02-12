import { Button } from "@/components/ui/button"
import { ArrowUpRight, CheckCircle2, LucideBookOpenText, LucideBookText, LucideBrain, LucideBriefcase } from "lucide-react"
import Link from "next/link"

const courses = [
    {
        id: 1,
        name: "Learnerships",
        link: "/learnerships",
        icon: <LucideBookText className="w-10 h-10 text-white" />,
        desc: "We offer learnership programs in the following areas and more:",
        areas: ["Business & Management", "Information Technology", "Occupationally Directed EDTP", "Agriculture"]
    },
    {
        id: 2,
        name: "Skills Programs",
        link: "/skills",
        icon:<LucideBrain className="w-10 h-10 text-white" />,
        desc: "We offer Skills Programs in the following areas and more:",
        areas: ["Entrepreneurship", "Personal Development", "Computer Literacy", "Agricultural Skills"]
    },
    {
        id: 3,
        name: "Consultancy",
        link: "/consultancy",
        icon: <LucideBriefcase className="w-10 h-10 text-white" />,
        desc: "We do Consultancy & offer assistance in the following areas:",
        areas: ["Assessment & Moderation", "Business Profiling", "Value Chain Analysis", "Business Plans", "Development of Manuals"]
    },
]
const Categories = () => {
  return (
    <section className="min-h-screen py-20 bg-neutral-100 w-full px-4 sm:px-10">
        <h3 className='text-[#1b1b1b]  text-center text-4xl sm:text-5xl tracking-tight capitalize font-bold'>Our Programs</h3>
        <p className="mt-4 text-lg text-muted-foreground text-center">Our programs and services are divided into three broad categories <br /> which are listed below.</p>
        <div className="grid sm:grid-cols-3 gap-8  rounded-lg w-full mt-12 ">
            {
                courses.map(course => (
                <Link href={course.link} className="w-full bg-white flex flex-col items-center justify-center px-6 py-10 border border-transparent hover:border-[#283891] transition-all rounded-lg">
                    <div className="w-20 h-20 bg-[#283891] flex items-center justify-center rounded-full">
                        {course.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1b1b1b] mt-4">{course.name}</h3>
                    <p className="mt-4 text-base text-center">{course.desc}</p>
                    <ul>
                        {
                            course.areas.map(area =>(
                                <li className="flex items-center font-bold"><CheckCircle2 className="mr-2 h-5 w-5" />{area}</li>
                            ))
                        }
                    </ul>
                    <Button className="uppercase font-bold tracking-wider text-base mt-6" variant='ghost' size='lg'><span className="hover:mr-1 transition-all">Learn More</span> <ArrowUpRight className="text-[#283891] w-4 h-4 ml-2" /></Button>
                </Link>
                ))
            }
        </div>
    </section>
  )
}

export default Categories