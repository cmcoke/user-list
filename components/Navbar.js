import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src='/logo.png' width={128} height={77} alt='logo' />
      </div>
      <Link href='/' legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href='/about' legacyBehavior>
        <a>About</a>
      </Link>
      <Link href='/users' legacyBehavior>
        <a>User Listing</a>
      </Link>
    </nav>
  )
}
export default Navbar