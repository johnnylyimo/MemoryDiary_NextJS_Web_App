import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <main className='flex flex-col items-center space-y-4 [#e5cce5] w-full h-full p-8 '>
      <h1 className='text-4xl text-purple-400 font-bold underline'>
        Home
      </h1>
      <section className='grid grid-cols-1 lg:grid-cols-6 gap-6 p-10 self-stretch'>
        <div className='col-span-2 lg:col-span-3 h-[500px] bg-[#cc99cc] ml-12 lg:ml-0 rounded-lg'>
            <h1 className='text-2xl text-center font-bold uppercase pt-4 tracking-wide'>
            World of the day
            </h1>
            <p className='text-xl font-bold'>
              Today will be better than yesterday
            </p>

        </div>
      </section>
    </main>
  )
}

export default Home
