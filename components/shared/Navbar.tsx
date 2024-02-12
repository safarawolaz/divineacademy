'use client'
import { cn } from '@/lib/utils'
import { AlignRight, ChevronDown, DotIcon, DribbbleIcon, FacebookIcon, InstagramIcon, MailCheck, MapPinIcon, PhoneIncoming, TwitterIcon, XIcon, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import MobileLink from './MobileLink'

const links = [
    {
        id: 1,
        title: 'about',
        url: "/about"
    },
    {
        id: 2,
        title: 'our programs',
        url: "/programs"
    },
    {
        id: 3,
        title: 'blogs',
        url: "/blogs"
    },
    {
        id: 5,
        title: 'contact',
        url: "/contact"
    },
]

const Navbar = () => {
    const [navBar, setNavbar] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    
        return () => {
          window.removeEventListener('scroll', changeBackground);
        };
      }, [])
    
      const changeBackground = () => {
        if (window.scrollY >= 70) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }
  return (
    <header className={cn(
        'max-w-[1440px] mx-auto sticky top-0 left-0  w-full z-40 ',
        )}>
            <div className="w-full hidden lg:px-10  py-2 bg-[#283891] lg:flex justify-between">
            <div className="flex gap-8">
                <div className="flex items-center">
                    <MailCheck className='w-4 h-4 text-white mr-2' />
                    <p className='text-gray-300 text-sm'>admin@divineacademy.co.za</p>
                </div>
                <div className="flex items-center">
                    <MapPinIcon className='w-4 h-4 text-white mr-2' />
                    <p className='text-gray-300 text-sm'>1466 Chris Hani St Kanyamazane Mbombela</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <p className='text-white text-base font-medium'>Follow Us</p>
                <XIcon className='w-4 h-4 text-white'/>
                <FacebookIcon className='w-4 h-4 text-white'/>
                <DribbbleIcon className='w-4 h-4 text-white'/>
                <InstagramIcon className='w-4 h-4 text-white'/>
            </div>
        </div>
        <nav className='flex items-center py-6 lg:py-0 px-4 lg:px-10 justify-between bg-white shadow-lg  z-40'> 
        <Link href='/' className="h-[48px] w-[180px] relative z-10">
            <Image src='/logo.png' fill alt='logo image' />
        </Link>
            <div className="flex gap-4  lg:gap-10 items-center">
               
                <ul className='hidden lg:flex lg:gap-2 xl:gap-8 items-center'>
                    {
                        links.map(link => (
                    <li key={link.id} className='py-6 px-3 '>
                        <Link href={link.url} className={cn('uppercase font-bold text-base tracking-widest flex items-center text-[#535666] gap-1 ', 
                            {
                            'font-bold' : pathname === link.url, 
                            }) }>
                                
                          {link.title}
                        </Link>
                    </li>))
                    }
                </ul>
               <div className="flex items-center gap-3">
                <Link href='/contact'>
                    <Button className='hidden sm:flex text-sm  font-semibold tracking-widest rounded-lg bg-[#283891] hover:bg-[#344294]' size='lg'>GET IN TOUCH</Button>
                </Link>
                <MobileLink />
            </div>
            </div>
           
        </nav>  
    </header>
  )
}

export default Navbar