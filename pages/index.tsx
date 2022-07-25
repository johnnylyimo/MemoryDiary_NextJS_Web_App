import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <main className='flex flex-col items-center space-y-4 [#e5cce5] w-full h-full p-8 '>
      <h1 className='text-4xl text-purple-400 font-bold underline'>
        Home
      </h1>
      <section className='grid grid-cols-1 lg:grid-cols-6 gap-6 p-10 self-stretch'>
        <div className='col-span-2'>

        </div>
      </section>
    </main>
  )
}

export default Home
