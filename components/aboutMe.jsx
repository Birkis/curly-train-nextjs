import React, {useEffect, useRef} from 'react'
import styles from  '../styles/aboutMe.module.scss'
import Link from 'next/link'
import { gsap } from 'gsap'

export function AboutMe({aboutMeTitle, aboutMeBody, profileImage }) {

    //WILL FINISH ANIMATION HERE COMMENTED OUT FOR THE TIME BEING

    const imgRef = useRef(null)

    useEffect(()=>{
        const el = imgRef.current

        gsap.fromTo('.animation',
            {y:80},
            {y:0, 
            duration:3,
            scrollTrigger:{
                trigger: ".animation-start",
                start: "top 90%",
                markers: true
            }}
        )
        gsap.fromTo('.button-secondary', 
            {y:-20}, 
            {y:0, 
            duration:2,
            scrollTrigger: {
                trigger: '.animation',
                start: 'top center'
            }})
        gsap.fromTo(el, 
            {y: 100},
            {y: 0, 
                duration:2,
                scrollTrigger: {
                    trigger: el,
                    start:  "top 100%"
                }
            })
    },
    [])

    return (
        <div className={styles.aboutMe}>
            <div className={styles.profileImage}>
                <img
                    src="/homepage/desktop/image-homepage-profile.jpg"
                    alt=""
                    ref={imgRef}
                />
            </div>
        <div className={`${styles.aboutMeText} animation-start`}>
            <h2 className="">{aboutMeTitle}</h2>
            <p className="body-1 animation">
                {aboutMeBody}
            </p>
            <Link href="/portfolio"><button className='button-secondary'>Go to Portfolio</button></Link>
        </div>
        </div>
    )

}