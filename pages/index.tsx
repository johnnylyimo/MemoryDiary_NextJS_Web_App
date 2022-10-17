import type { NextPage } from 'next'
import { Memory } from "@prisma/client";
import { useRouter } from 'next/router'
import { useState,FormEventHandler } from 'react';

// To fetch data from api
export const getServerSideProps = async () => {
  const res = await fetch(
    `http://localhost:3000/api/read_create`
  );
  const memories: Memory[] = await res.json();
  return {
    props: {memories}
  }
}

interface HomeProps{
  memories: Memory[]
}

const Home: NextPage<HomeProps>  = ({memories}) => {
  const router =useRouter()
  const [isEmptyMemory, setIsEmptyMemory] = useState(false)
  const [inputedMemory, setInputedMemory] = useState({
    title: "",
    memory: ""
  });

  const onSubmitMemory:FormEventHandler<HTMLFormElement> = async (e) =>{
    e.preventDefault()
  }
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
              <textarea rows={4} value={inputedMemory.memory || ""}  className='block p-2 w-full text-base text-gray-900 bg-[#ce93d8] rounded-lg border-4 border-[#ac5eb9dc] focus:outline-none' placeholder='Write new memory here ...' onChange={({target})=> setInputedMemory({...inputedMemory, memory: target.value})}>
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
