import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/organisms/footer/footer'
import Header from '../components/organisms/header/header'
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
          I see myself as a designer, developer, facilitator and researcher. I am a freelance software developer (full stack), interaction designer and workshop leader. I am currently studying and working at the University of Siegen. I like creating experiences - in presence, hybrid and digital - and helping people with their challenges. I am interested in psychology, design, culture and history.
        </p>
        <Image
          className={styles.authorImage}
          src="/jkamphausen-scaled-small.jpg"
          alt="Picture of the author"
          width={256}
          height={256}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        />
        <section className={styles.listSection}>
          <h2>Work Experience</h2>
          <ul>
            <li>
              Scientific Assistent @ Work Group (Human-centered) Cyber-Physical Systems
              <br /><span className={styles.annotation}>University of Siegen, 2021 - now</span>
            </li>
            <li>
              Freelance Designer &amp; Developer
              <br /><span className={styles.annotation}>Kamphausen GbR, 2020 - now</span>
              <br /><span className={styles.annotation}>Kamphausen - Bureau for Design &amp; Interaction, 2016 - now</span>
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
            <li>Participation by Design <span className={styles.annotation}>Jugendbeteiligung in modernen Demokratien · Weimar, 07/2022</span></li>
            <li>Participation by Design <br /><span className={styles.annotation}>Innovation for democratic participation (Geman-Norwegian Exchange Workshop) · Weimar, 03/2022</span></li>
            <li>Europa-Projekttage <span className={styles.annotation}>Civic Initiatives, Grassroots Movements &amp; Design · Budapest/Pécs, 12/2021</span></li>
            <li>Quadratur des Kreises <span className={styles.annotation}>Democracy &amp; Design · Berlin, 11/2021</span></li>
          </ul>
          <ul>
            <li>Bridging Europe <span className={styles.annotation}>Health, Education &amp; the Corona Virus · Online, 2020</span></li>
            <li>Heimat &amp; Europa <span className={styles.annotation}>Concept of Home &amp; Rootedness · Mönchengladbach, 2020</span></li>
            <li>Europa-Projekttage <br /><span className={styles.annotation}>Contemporary Media &amp; Our Way of Communication · Naumburg an der Saale, 2019</span></li>
            <li>Europa-Projekttage <span className={styles.annotation}>The Bauhaus & the Weimar Republic · Weimar, 2018</span></li>
            <li>Europa-Projekttage <span className={styles.annotation}>Learning Venue Weimar · Weimar, 2017</span></li>
          </ul>
          <ul>
            <li>SchulBrücke <span className={styles.annotation}>Workshop Assistant · Misc. cities, 2016 - 2018</span></li>
          </ul>
        </section>

        <section className={styles.listSection}>
          <h2>Current &amp; Recent Research Topics</h2>
          <ul>
            <li>
              Explainable Artificial Intelligence (XAI)
              <br /><span className={styles.annotation}>@Work Group (Human-centered) Cyber-Physical Systems, 2021-</span>
              <br /><span className={styles.annotation}>How can AI-enhanced systems be designed to be transparent, understandable and participatory?</span>
            </li>
            <li>
              Design (Thinking) for Participation / Participation by Design?
              <br /><span className={styles.annotation}>@Kamphausen Design and Interaction &amp; Alumniverein der SchulBrücken e.V., 2019-</span>
              <br /><span className={styles.annotation}>How can we leverage creative methods from the design field for democratic, sustainable innovation?</span>
            </li>
            <li>
              Sustainable Interaction Design (SIxD)
              <br /><span className={styles.annotation}>@University of Siegen, 2022-</span>
              <br /><span className={styles.annotation}>How can we change our behaviour patterns and habit in favour of sustainability through 'Pleasurable Troublemakers' and playful interventions?</span>
            </li>
            <li>
              Animal-Computer Interaction (ACI) &amp; Sustainability in Design
              <br /><span className={styles.annotation}>@University of Siegen, 2021-2022</span>
              <br /><span className={styles.annotation}>Human-centred design may be a good advance in UX and usability - but is it enough in today's world? It's time to pay attention to the climate and other living beings!</span>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default About
