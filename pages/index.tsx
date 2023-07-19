import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Testimonials from '@/components/Testimonials/Testimonials'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Services from '@/components/Services/Services'
import Projects from '@/components/Projects/Projects'
import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'
import CaseStudies from '@/components/CaseStudies/CaseStudies'



export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Spaniel</title>
        <meta name="description" content="We're a brand's best friend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Hero />
        <Services />
        <Projects />
        <CaseStudies />
        <About />
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}
