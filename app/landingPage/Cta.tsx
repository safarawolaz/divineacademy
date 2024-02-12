import Btn from '@/components/shared/Btn'
import Link from 'next/link'
import React from 'react'

const Cta = () => {
  return (
    <section className='min-h-[70vh] bg-black w-full flex flex-col items-center justify-center bg-cta bg-left bg-cover bg-fixed'>
        <h3 className='text-5xl sm:text-6xl text-white font-bold tracking-tight capitalize'>find out more</h3>
        
        <Link className='mt-8' href='/contact'>
            <Btn text='get in touch' />
        </Link>
    </section>
  )
}

export default Cta