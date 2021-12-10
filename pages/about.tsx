import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from '../styles/Base.module.css'

const About: NextPage = () => {

  const pageTitle: string = "About - Julian Kamphausen";

  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="About the background and experiences of Julian Kamphausen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>About</h1>
        <p>
          I develop websites and software for the web, study and work at the University of Siegen and conduct international workshops. I like to create experiences and help people with their challenges.
        </p>
        <Image
          className={styles.authorImage}
          src="/jkamphausen-scaled.jpg"
          alt="Picture of the author"
          width={256}
          height={256}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        />
        <section className={styles.listSection}>
          <h2>Experience</h2>
          <ul>
            <li>
              Scientific Assistent @ Work Group Cyber-Physical Systems
              <br /><span className={styles.annotation}>University of Siegen, 2021 - now</span>
            </li>
            <li>
              Freelancer
              <br /><span className={styles.annotation}>Kamphausen Consulting, 2020 - now</span>
              <br /><span className={styles.annotation}>jkamphausen, 2018 - now</span>
            </li>
            <li>
              Lead Project Manager @ First-time Voter Project of the Free State of Thuringia
              <br /><span className={styles.annotation}>Cooperation with Landeszentrale für pol. Bildung Thüringen &amp; <br /> EJB Weimar · Weimar, 2018 - 2019</span>
            </li>
            <li>
              Student Assistent @ Department for Digital Humanities
              <br /><span className={styles.annotation}>University of Cologne, 2015 - 2019</span>
            </li>

            {/* <li><span className={styles.annotation}>upcoming</span></li> */}
          </ul>
        </section>

        <section className={styles.listSection}>
          <h2>Education</h2>
          <ul>
            <li>Human-Computer Interaction M.Sc. <span className={styles.annotation}>University of Siegen, 2021 - now</span></li>
            <li>Media Sciences/Media Informatics B.A. <span className={styles.annotation}>University of Cologne, 2015 - 2019</span></li>
            <li>Exchange @ Bauhaus-Universität Weimar <span className={styles.annotation}>Weimar, 2018 - 2019</span></li>
            <li>Erasmus+ @ Budapest University of Technology and Economics <span className={styles.annotation}>Budapest, 2018</span></li>
            {/* <li>SchulBrücke Europa <span className={styles.annotation}>Alumnus, 2011 - now</span></li> */}
          </ul>
        </section>

        <section className={styles.listSection}>
          <h2>Workshops</h2>
          <ul>
            <li>Europa-Projekttage <span className={styles.annotation}>Civic Initiatives, Grassroots Movements &amp; Design · Budapest/Pécs, 2021</span></li>
            <li>Quadratur des Kreises <span className={styles.annotation}>Democracy &amp; Design · Berlin, 2021</span></li>
          </ul>
          <ul>
            <li>Bridging Europe <span className={styles.annotation}>Health, Education &amp; the Corona Virus · Online, 2020</span></li>
            <li>Heimat &amp; Europa <span className={styles.annotation}>Concept of Home &amp; Rootedness · Mönchengladbach, 2020</span></li>
          </ul>
          <ul>
            <li>Europa-Projekttage <span className={styles.annotation}>Contemporary Media &amp; Our Way of Communication · Naumburg an der Saale, 2019</span></li>
          </ul>
          <ul>
            <li>Europa-Projekttage <span className={styles.annotation}>The Bauhaus & the Weimar Republic · Weimar, 2018</span></li>
          </ul>
          <ul>
            <li>Europa-Projekttage <span className={styles.annotation}>Learning Venue Weimar · Weimar, 2017</span></li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default About
