import Link from "next/link"

export const NavBar = () => {
  return (
    <nav className="flex justify-center mt-5">
       <Link href="/">
            <a className="text-4xl font-bold text-[#ac5eb9dc] underline hover:text-[#800080]">
                Home
            </a>
       </Link>
    </nav>
  )
}
