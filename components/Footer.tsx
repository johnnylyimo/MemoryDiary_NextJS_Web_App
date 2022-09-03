import Image from "next/image";
import Link from "next/link";
import {MdPhone,  MdLocationPin, MdEmail} from 'react-icons/md'


export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className="w-full mb-6 p-4  bg-[#ce93d8] grid md:grid-cols-5 gap-4">
        <section className="md:col-span-2 text-center">
            <Image  src='/brand.png' width={180} height={120} layout='fixed' />
            <p>
                 MolysTechie is tech startup, specialized on developing Mobile Apps, Web Apps and Wep APIs. It's senior Developer is John L. Lyimo, the guy who developed this Website using Next.js Framework that is built on top of React. This web app is hosted on Vercel, the company developed Next.js Framework.
            </p>
        </section>

        <section className="md:col-span-3 gap-10 text-center">
            <div className="grid gap-y-6 md:flex md:justify-around">
                <div className="grid">
                    <h1 className="font-bold mb-2">
                        Follow Me
                    </h1>
                    <div className="grid gap-y-1">
                        <Link href='https://github.com/johnnylyimo'>
                            <a target={'_blank'} className='text-lg text-blue-500 font-bold'>
                                Github
                            </a>
                        </Link>
                        <Link href='https://twitter.com/johnnylyimo'>
                            <a target={'_blank'} className='text-lg text-blue-500 font-bold'>
                                Twitter
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/johnnylyimo">
                            <a target={'_blank'} className='text-lg text-blue-500 font-bold'>
                                LinkedIn
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="grid">
                    <h1 className="font-bold mb-2">
                        Find Me
                    </h1>
                    <div className="flex justify-center">
                        <MdLocationPin size={25} />
                        Buni at Costech Building, Sayansi, Dar-es-Salaam.
                    </div>
                </div>
                <div className="grid">
                    <h1 className="font-bold mb-2">
                        Contact Me
                    </h1>
                    <div className="flex justify-center gap-x-2">
                        <MdPhone size={25}/>
                        <p>0715 291029</p>
                    </div>
                    <div className="flex justify-center gap-x-2">
                        <MdEmail size={25} />
                        <p>molystechie@gmail.com</p>
                    </div>
                </div>
            </div>
            <hr className="max-w-xxl border-t-2 border-[#ac5eb9dc]" />
            <div className="grid ">
                <p>&copy; {year} MolysTechie. All Rights Reserved</p>
                
            </div>

        </section>
        
    </footer>
	
  )
}
