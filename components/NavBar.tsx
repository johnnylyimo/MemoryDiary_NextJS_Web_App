import Link from "next/link"

export const NavBar = () => {
  return (
    <nav className="flex justify-center">
       <Link href="/">
            <a className="text-4xl font-bold">
                Home
            </a>
       </Link>
    </nav>
  )
}
