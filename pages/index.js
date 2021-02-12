import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaelin List | Home</title>
        <meta name="keywords" content="lists" />
      </Head>    
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae, eius praesentium facere doloremque iusto omnis ab magni magnam neque consequatur aut itaque asperiores debitis soluta expedita quas, obcaecati earum!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda perferendis quae enim laboriosam iure possimus pariatur numquam molestiae. Dolores magni officiis in iure dolorem. Animi quibusdam ipsa quidem! Nisi?</p>
        <Link href="/friends"><a className={styles.btn}>See Friend Listing</a></Link>
      </div>
    </>
  )
}
