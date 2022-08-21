import Link from "next/link"

export const NavBar = () => {
  return (
    <nav className="flex justify-center">
       <Link href="/">
            <a className="text-4xl font-bold text-[#ac5eb9dc]">
                Home
            </a>
       </Link>
    </nav>
  )
}
