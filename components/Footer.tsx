import Image from "next/image";
import Link from "next/link";
import {MdPhone,  MdLocationPin, MdEmail} from 'react-icons/md'


export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className="w-full mb-6 p-4  bg-[#ce93d8] grid md:grid-cols-5 gap-4">
        <section className="md:col-span-2 text-center">
            <Image  src='/brand.png' width={180} height={120} alt="brand" />
            <p>
                 MolysTechie is tech startup, specialized on developing Mobile Apps, Web Apps and Wep APIs. It's senior Developer is John L. Lyimo, the guy who developed this Website using Next.js Framework that is built on top of React. This web app is hosted on Vercel, the company developed Next.js Framework.
            </p>
        </section>

        <section className="grid md:col-span-3 gap-6 text-center">
            <div className="grid gap-y-6 md:flex md:justify-around">
                <div className="flex flex-col gap-y-2">
                    <h1 className="font-bold ">
                        Follow Me
                    </h1>
                    <div className="grid gap-y-1">
                        <Link href='https://github.com/johnnylyimo' target={'_blank'} className='text-lg text-blue-500 font-bold'>
                            GitHub
                        </Link>
                        <Link href='https://twitter.com/johnnylyimo' target={'_blank'} className='text-lg text-blue-500 font-bold'>
                                Twitter
                        </Link>
                        <Link href="https://www.linkedin.com/in/johnnylyimo" target={'_blank'} className='text-lg text-blue-500 font-bold'>
                                LinkedIn
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h1 className="font-bold mb-2">
                        Find Me
                    </h1>
                    <div className="flex justify-center gap-x-1">
                        <MdLocationPin size={25} />
                        MolysTechie SiliconLab, Kijitonyama, Dar-es-Salaam
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h1 className="font-bold">
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
            <div className="grid text-xl font-semibold">
                <p><span className="text-2xl">&copy;</span> {year} MolysTechie. All Rights Reserved</p>
            </div>

        </section>
        
    </footer>
	
  )
}
