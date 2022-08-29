import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { BannerSection, AboutMe } from '../components'


export default function Home({content}) {

  const {banner, about} = content
  console.log(content)
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <BannerSection {...banner} />
        <AboutMe {...about} />
      </div>
    </div>
  )
}


export async function getStaticProps() {

  const res = await fetch("http://localhost:3000/content/home.json")
  const content = await res.json()

  return {
    props: {
      content,
    },
  }
}

