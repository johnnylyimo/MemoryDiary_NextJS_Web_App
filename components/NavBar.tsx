import Link from "next/link"

export const NavBar = () => {
  return (
    <nav className="flex justify-center">
       <Link href="/">
            <a>Home</a>
       </Link>
    </nav>
  )
}
