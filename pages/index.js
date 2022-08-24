import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import TopBanner  from  '../components/topBanner'
import AboutMe from '../components/aboutMe'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <Navbar/>
        <TopBanner />
        <AboutMe  />
      </div>
      <Footer/>
    </div>
  )
}
