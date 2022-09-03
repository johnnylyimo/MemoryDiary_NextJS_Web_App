import Image from "next/image";
import Link from "next/link";
import {MdPhone,  MdLocationPin, MdEmail} from 'react-icons/md'


export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className="w-full mb-6 p-4  bg-[#ce93d8] grid md:grid-cols-5 gap-4">
        <section className="md:col-span-2 text-center">
            <Image  src='/brand.png' width={180} height={120} layout='fixed' />
            <p></p>

        </section>
        
    </footer>
	
  )
}
