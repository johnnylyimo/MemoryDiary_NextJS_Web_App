import Image from "next/image";
import Link from "next/link";
import {MdPhone,  MdLocationPin, MdEmail} from 'react-icons/md'
import Link from "next/link";


export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className="w-full mb-6 p-4  bg-[#ce93d8] grid md:grid-cols-5 gap-4">
        <section className="md:col-span-2 text-center">
            <Image  src='/brand.png' width={180} height={120} layout='fixed' />
            <p>
                 MolysTechie is tech startup, specialized on developing Mobile Apps, Web Apps and Wep APIs. It's senior Developer is John L. Lyimo, the guy who developed this Website using Next.js Framework that is built on top of React and hosted on Vercel, the company developed Next.js Framework.
            </p>
        </section>

        <section className="md:col-span-3 gap-10 text-center">
            <div className="grid gap-y-6 md:flex md:justify-around">
                <div className="flex-col">
                    <h1 className="font-bold mb-2">
                        Follow Me
                    </h1>
                    <div className="grid gap-y-1">
                        <Link>
                        </Link>
                    </div>
                    
                </div>
                
            </div>

        </section>
        
    </footer>
	
  )
}
