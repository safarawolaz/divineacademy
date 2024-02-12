import Image from "next/image"
import Link from "next/link"

const posts = [
    {
        imgUrl: "/post-1.jpg",
        date: "31 Jul",
        category: "training",
        comments: "2 comments",
        heading: "Basic rules of getting a new skill"
    },
    {
        imgUrl: "/post-2.jpg",
        date: "26 Jul",
        category: "consultancy",
        comments: "2 comments",
        heading: "Why a companies need skills"
    },
    {
        imgUrl: "/post-3.jpg",
        date: "25 Jul",
        category: "consultancy",
        comments: "2 comments",
        heading: "Basic rules of hiring the best"
    },
  ]

const Blogs = () => {
  return (
    <section className='min-h-screen w-full bg-neutral-100 px-4 sm:px-10 flex items-center justify-center flex-col py-20'>
        <h3 className='text-[#1b1b1b]  text-center text-4xl sm:text-5xl tracking-tight capitalize font-bold'>News & Insights</h3>
        <div className="grid sm:grid-cols-3 gap-8  w-full mt-12">

            {
                posts.map(post => (
                        <Link href='#' className="w-full  rounded-lg overflow-hidden" key={post.imgUrl}>
                            <div className="relative h-[300px] ">
                            <Image src={post.imgUrl} objectFit='cover' fill alt='post 1 img' />
                            <p className='bg-[#000] p-1 text-white absolute top-2 left-2 rounded-sm'>{post.date}</p>
                        </div>
                        <div className="flex items-center justify-between px-6 mt-4">
                            <p className="text-black font-semibold capitalize">{post.category}</p>
                            <p className="text-black font-semibold capitalize">{post.comments}</p>
                        </div>
                        <h3 className='text-black px-6 pb-6 text-xl font-bold mt-4'>{post.heading} ...</h3>
                    </Link>
                ))
            }
        </div>
    </section>
  )
}

export default Blogs