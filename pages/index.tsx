import type { NextPage } from 'next'

export const getServerSideProps = async () => {
  
}

const Home: NextPage = () => {
  return (
    <main className='w-full h-full p-4 my-10 grid grid-cols-1 lg:grid-cols-6'>
        <section className='col-span-2 lg:col-span-3 bg-[#ce93d8] rounded-lg m-4 '>
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
                Write new memory below
              </label>
              <textarea rows={4} className='block p-2 w-full text-base text-gray-900 bg-[#ce93d8] rounded-lg border-4 border-[#ac5eb9dc] focus:outline-none' placeholder='Write new memory here ...'>
              </textarea>
              <button className='bg-[#ac5eb9dc]  py-2 px-3 mt-6 text-2xl font-medium text-white cursor-pointer rounded-lg hover:bg-[#800080]'>
                Save
              </button>
              <label className='block text-xl text-center font-medium mt-4'>
                Remember the good times
              </label>
            </form>
        </section>
        <section className="col-span-4 lg:col-span-3 h-[50vh] m-4">
            <h1 className='text-2xl font-bold'>
                Highlights
            </h1>
        </section>
    </main>
  )
}

export default Home
