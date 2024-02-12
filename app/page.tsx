'use client'

import Footer from "@/components/shared/Footer"
import AboutSection from "./landingPage/AboutSection"
import Blogs from "./landingPage/Blogs"
import Categories from "./landingPage/Categories"
import CourseOverview from "./landingPage/CourseOverview"
import Cta from "./landingPage/Cta"
import FeaturedCourses from "./landingPage/FeaturedCourses"
import Hero from "./landingPage/Hero"




export default function Home() {
  
  return (
    <div className=''>
      <Hero />
      <CourseOverview />
      <FeaturedCourses />
      <AboutSection />
      <Categories />
      <Cta />
      <Blogs />
      <Footer />
    </div>
  )
}
