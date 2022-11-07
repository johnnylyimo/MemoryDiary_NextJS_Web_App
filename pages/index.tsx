import type { NextPage } from 'next'
import { Memory } from "@prisma/client";
import { useRouter } from 'next/router'
import { useState,FormEventHandler } from 'react';
import {MdNotes, MdEdit} from 'react-icons/md'


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
  const [isEmptyEditedMemory, setIsEmptyEditedMemory] = useState(false)
  const [editMemoryPopUp, setEditMemoryPopUp]=useState(false);
  const [inputedMemory, setInputedMemory] = useState({
    title: "",
    memory: ""
  });
  const [editedMemory, setEditedMemory] = useState({
    id: "",
    title:"",
    memory: ""
  });

  // method to handle on adding new memory
  const onSubmitMemory:FormEventHandler<HTMLFormElement> = async (e) =>{
    e.preventDefault()
    if (inputedMemory.memory !== ""){
      const response = await fetch('/api/read_create', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          memory: inputedMemory.memory,
          title: inputedMemory.memory.slice(0, inputedMemory.memory.length)
        })
      })

      const newMemory = await response.json()
      setInputedMemory({memory: "", title:''});
      router.replace(router.asPath)
    } else{
      setIsEmptyMemory(true)
    }
  }

// method to handle on editing memory
  const submitEditMemory = async () =>{
    if (editedMemory.memory !== ""){
      const response = await fetch('/api/update_delete', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id:editedMemory.id,
          title: editedMemory.memory.slice(0, editedMemory.memory.length),
          memory: editedMemory.memory,
        })
      })
      setEditMemoryPopUp(false)
      router.replace(router.asPath)
    } else{
      setIsEmptyEditedMemory(true)
    }

  }

// method to handle on deleting memory
  const submitDeleteMemory = async () =>{
    await fetch('/api/update_delete', {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:editedMemory.id
      })
    })
    router.reload()

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
            <form className='text-center mt-6 p-2'  onSubmit={onSubmitMemory}>

            {isEmptyMemory && inputedMemory.memory === '' ? 
              <label htmlFor='memory' className='inline-block mb-1 bg-red-500 text-md font-medium text-white py-1 px-2 rounded-md'>
                Write new memory below
              </label>:<label htmlFor="memory" className='inline-block mb-1 text-md font-medium text-gray-900'>
                Write new memory below
              </label>
            }

              <textarea rows={4} value={inputedMemory.memory || ""}  className='block p-2 w-full text-base text-gray-900 bg-[#ce93d8] rounded-lg border-4 border-[#ac5eb9dc] focus:outline-none' placeholder='Write new memory here ...' onChange={({target})=> setInputedMemory({...inputedMemory, memory: target.value})}>
              </textarea>
              <button type="submit"  className='bg-[#ac5eb9dc]  py-2 px-3 mt-6 text-2xl font-medium text-white cursor-pointer rounded-lg hover:bg-[#800080]'>
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

            {/* all available memories */}
            {
              memories.map(({memory, id}) =>(
                <div key={id} className="w-full bg-white flex justify-between space-x-4 text-black rounded-md p-2 m-2 cursor-pointer" onClick={() => {
                  setEditMemoryPopUp(true)
                  setEditedMemory({id:id, memory: memory,title:''})
                }} >
                  <MdNotes size={25}/>
                  <p>{memory}</p>
                  <MdEdit size={25} className='cursor-pointer' onClick={() => setEditMemoryPopUp(true)}/>
                </div>
              ))
            }
             




          {/* Edit Popup */}
            {
            editMemoryPopUp ? (
              <div className="absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#E1BEE7] w-[90%]  md:w-[45%]  flex justify-center items-center flex-col rounded-lg shadow-xl h-auto p-2 mx-auto">
              {
                isEmptyEditedMemory && editedMemory.memory === '' ? 
                <label htmlFor='emptyMemory' className='inline-block mb-1 text-md font-medium text-white bg-red-500 py-1 px-2 rounded-md'>
                  Edit your memory below, don't leave blank
                </label>:<label htmlFor='memory' className='inline-block mb-1 text-md font-medium text-gray-900'>
                  Edit your memory below
                </label>
             }

                <textarea rows={4} value={editedMemory.memory || ""} placeholder='Write new memory here ...' className='block p-2 w-full text-base text-gray-900 bg-[#ce93d8] rounded-lg border-4 border-[#ac5eb9dc] focus:outline-none' onChange={({target})=> setEditedMemory({...editedMemory, memory: target.value})}>
                </textarea>

                <div className="w-full flex justify-around">
                  <button type="submit" className='my-5 w-auto px-8 h-10 bg-red-600 font-semibold text-white t rounded-md shadow-md hover:shadow-lg'  onClick={()=>submitDeleteMemory()}>
                    Delete
                  </button>
                  <button type="submit" className='my-5 w-auto px-8 h-10 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg' onClick={()=>submitEditMemory()}>
                    Save
                  </button>
                  <button type="submit" className='bg-[#ac5eb9dc] my-5 h-10 px-8 font-semibold text-white shadow-md rounded-lg hover:bg-[#800080]' onClick={()=>setEditMemoryPopUp(false)}>
                    Close
                  </button>

                </div>
              </div>
            ) :null

            }

        </section>
    </main>
  )
}

export default Home
