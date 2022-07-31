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
            <p className='text-xl font-bold text-center'>
              Today will be better than yesterday
            </p>
            <p className='text-xl text-center font-medium mt-6'>
              Anytime something positive happens, make a note of it and come back to it later
            </p>
            <form className='text-center mt-6 p-2'>
              <label htmlFor="message" className='block mb-2 text-md font-medium text-gray-900'>
                Write new memory here below
              </label>
              <textarea rows={4} className='block p-2 w-full text-base text-gray-900 bg-[#cc99cc] rounded-lg border-2 border-purple-400' placeholder='Write new memory here ...'>
              </textarea>
              <button className='bg-purple-400 p-2 mt-6 text-2xl font-medium text-white cursor-pointer rounded-lg'>
                Save
              </button>
              <label className='block text-xl text-center font-medium mt-4'>
                Remember the good times
              </label>
            </form>
        </div>
        <div className="col-span-4 lg:col-span-3">

        </div>
      </section>
    </main>
  )
}

export default Home
