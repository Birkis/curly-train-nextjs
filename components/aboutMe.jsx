import React from 'react'
import styles from  '../styles/aboutMe.module.scss'
import Link from 'next/link'

export function AboutMe({title, body, url}) {

    console.log(url)

    return (
        <div className={styles.aboutMe}>
            <div className={styles.profileImage}>
                <img
                    src="/homepage/desktop/image-homepage-profile.jpg"
                    alt=""
                />
            </div>
        <div className={styles.aboutMeText}>
            <h2 className="">{title}</h2>
            <p className="body-1">
                {body}
            </p>
            <Link href={url}><button className='button-secondary'>Go to Portfolio</button></Link>
        </div>
        </div>
    )

}