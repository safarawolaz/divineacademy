
const advantages = [
  {
    id: 1,
    desc: "learnerships"
  },
  {
    id: 2,
    desc: "skills programs"
  },
  {
    id: 3,
    desc: "consultancy"
  },
  {
    id: 4,
    desc: "assessment & moderation"
  },
  {
    id: 5,
    desc: "project management"
  },
  {
    id: 6,
    desc: "business profilling"
  },
]

const CourseOverview = () => {
  return (
    <section className='w-full min-h-[50vh] flex items-center justify-center py-20 -mt-40'>
        <div className=" w-full h-full hidden  sm:grid sm:grid-cols-3 gap-8 mx-40">
             
             {
              advantages.map(advantage => (
                <div className="bg-[#283891] w-full h-40 rounded-lg flex items-center justify-center shadow-sm" key={advantage.id}>
                <h3 className='text-2xl font-bold capitalize px-10 text-center text-white'>{advantage.desc}</h3>
              </div> 
              ))
             }
        </div>
    </section>
  )
}

export default CourseOverview