import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero perferendis, sapiente minus id voluptas earum voluptate assumenda neque hic? Porro maxime commodi ratione minus cum perspiciatis quas ipsum eos.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero perferendis, sapiente minus id voluptas earum voluptate assumenda neque hic? Porro maxime commodi ratione minus cum perspiciatis quas ipsum eos.</p>
      <Link href='/users' legacyBehavior>
        <a>User Listing</a>
      </Link>
      <Footer />
    </div>
  )
}
