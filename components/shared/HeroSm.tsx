
type heroSmprops = {
    header: string,
    subHeader: string
}
const HeroSm = ({header, subHeader}: heroSmprops ) => {
  return (
    <section className='min-h-[70vh]   flex flex-col items-center justify-center  bg-herosm bg-center bg-fixed  pt-10'>
        <h1 className="text-6xl font-bold text-white tracking-tight text-center capitalize">
            {header}
        </h1>
        <p className="text-lg font-semibold text-gray-200 mt-4 capitalize">{subHeader}</p>
    </section>
  )
}

export default HeroSm