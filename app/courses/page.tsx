import HeroSm from '@/components/shared/HeroSm'
import React from 'react'
import Categories from '../landingPage/Categories'

const Courses = () => {
  return (
    <section className='w-full'>
        <HeroSm header='Our Programs' subHeader='What We Offer' />
        <div className="">
          <Categories />
        </div>
    </section>
  )
}

export default Courses