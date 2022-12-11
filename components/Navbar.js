import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>User List</h1>
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