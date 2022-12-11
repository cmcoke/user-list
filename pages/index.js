import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero perferendis, sapiente minus id voluptas earum voluptate assumenda neque hic? Porro maxime commodi ratione minus cum perspiciatis quas ipsum eos.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero perferendis, sapiente minus id voluptas earum voluptate assumenda neque hic? Porro maxime commodi ratione minus cum perspiciatis quas ipsum eos.</p>
      <Link href='/users' legacyBehavior>
        <a className={styles.btn}>User Listing</a>
      </Link>
    </div>
  )
}
