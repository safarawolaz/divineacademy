import HeroSm from '@/components/shared/HeroSm'
import React from 'react'
import Blogs from '../landingPage/Blogs'

const blogPage = () => {
  return (
    <section>
        <HeroSm header='news and insights' subHeader='our blogs' />
        <Blogs />
    </section>
  )
}

export default blogPage