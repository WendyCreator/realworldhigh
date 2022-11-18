import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layouts from '../Components/Layouts'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Result Calculator</title>
        <meta name="description" content="Designed by Wendy Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Student Result Calculator
        </h1>

        <p className={styles.description}>
          Login to get started{' '}
          
          <Link href='login/' className='bg-gray-400 p-3 rounded shadow-sm text-bold'>Login</Link>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={`${styles.card} shadow-sm hover:shadow-lg`}>
            <h2>Check Result &rarr;</h2>
            <p>You can Check different Student results</p>
           
          </a>

          <a href="https://nextjs.org/learn" className={`${styles.card} shadow-sm hover:shadow-lg`}>
            <h2>Report Student &rarr;</h2>
            {/* <p>You can report student's activities</p> */}
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={`${styles.card} shadow-sm hover:shadow-lg`}
          >
            <h2>Calculate CGPA &rarr;</h2>
            <p>You can calculate student Cummlative Grade Point</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} shadow-sm hover:shadow-lg`}
          >
            <h2>Send Result &rarr;</h2>
            {/* <p>
              You can send Student results to student's guardian
            </p> */}
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

