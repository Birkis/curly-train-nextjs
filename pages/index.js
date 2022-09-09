import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  sanityClient  from '../sanity'

import { BannerSection, AboutMe } from '../components'


export default function Home(frontpage) {

  const {phrase, aboutMeTitle, aboutMeBody, profileImage} = frontpage
  console.log(frontpage)
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <BannerSection phrase={phrase} />
        <AboutMe aboutMeTitle={aboutMeTitle} aboutMeBody={aboutMeBody} profileImage={profileImage} />
      </div>
    </div>
  )
}


export const getServerSideProps = async pageContext => {

  const query = '*[_type == "frontPage"]'
  const frontpage = await sanityClient.fetch (query)

  if (!frontpage) {
    return {
        notFound: true
    }
  } else {
      return {
          props: frontpage[0]
      }
  }



}

