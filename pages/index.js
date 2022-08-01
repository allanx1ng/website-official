
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import App from './_app'
import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className={styles.app}>
        <Head>
        <title>Allan Xing 🚀🌙</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Header/>
        <Projects/>
        <Footer/>
      </div>

  )
}
