import React from 'react'
import styles from  '../styles/aboutMe.module.scss'
import Link from 'next/link'

export function AboutMe({aboutMeTitle, aboutMeBody, profileImage }) {


    return (
        <div className={styles.aboutMe}>
            <div className={styles.profileImage}>
                <img
                    src="/homepage/desktop/image-homepage-profile.jpg"
                    alt=""
                />
            </div>
        <div className={styles.aboutMeText}>
            <h2 className="">{aboutMeTitle}</h2>
            <p className="body-1">
                {aboutMeBody}
            </p>
            <Link href="/portfolio"><button className='button-secondary'>Go to Portfolio</button></Link>
        </div>
        </div>
    )

}