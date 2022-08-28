import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import List from '../components/atoms/list/list'
import Footer from '../components/organisms/footer/footer'
import Header from '../components/organisms/header/header'
import styles from '../styles/Base.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Julian Kamphausen</title>
        <meta name="description" content="Website of Julian Kamphausen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>

        <h1 style={{ display: 'none' }}>Home</h1>

        <section className={styles.listSection}>
          <h2>Recent Projects</h2>
          <List>
            {/* <li><Link href="#">Sammlung Bitter</Link>, <span className={styles.annotation}>upcoming</span></li>
            <li><Link href="#">SchoolBridges Alumni Association e.V.</Link>, <span className={styles.annotation}>upcoming</span></li> */}
            <li>
              Sammlung Bitter,
              <span className={styles.annotation}> upcoming</span>
              <br /><span className={styles.annotation}>Digitally capture, prepare and make available selected pieces of the 'Bitter Collection' - a Stone Age collection of a local historian & archaeologist.</span>
            </li>
            {/* <li>
              SchoolBridges Alumni Association e.V.,
              <span className={styles.annotation}> upcoming</span>
            </li> */}
            <li>
              Schola Vitae e.V., <span className={styles.annotation}>2019 - 2021</span>
              <br/><span className={styles.annotation}>Advice on setting up associations, non-profit status and projects.</span>
            </li>
            <li>
              Management of the first-time voter project of the Free State of Thuringia,
              <span className={styles.annotation}>2018 - 2019</span>
              <br /><span className={styles.annotation}>Including in-house development of a local election simulator used in schools based on the example of real ballots. </span>
            </li>

          </List>
        </section>

        <section className={styles.listSection}>
          <h2>Blog</h2>

          {/* <List>
            <li><Link href="#">Article A</Link>, <span className={styles.annotation}>upcoming</span></li>
            <li><Link href="#">Article B</Link>, <span className={styles.annotation}>upcoming</span></li>
          </List> */}

          <ul>
            {/* <li><span className={styles.annotation}>upcoming</span></li> */}
          </ul>
        </section>

        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <Footer />
    </div>
  )
}

export default Home
