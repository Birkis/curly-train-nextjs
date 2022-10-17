import styles  from '../styles/topBanner.module.scss'
import  Image from  'next/image'
import Link from 'next/link';
import { useEffect } from 'react';

// typical import
import gsap from "gsap";
// get other plugins:
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export function BannerSection({phrase}) {
  gsap.registerPlugin(ScrollTrigger)
  
  useEffect(()=> {
    gsap.fromTo('#bannerImage', 
    {opacity:0}, {opacity:1, duration:2})
  
  },
  [])

    return (
      <div className={styles.bannerContainer}>
        <Image 
            src="/homepage/desktop/image-homepage-hero.jpg" 
            width={1100}  
            height={600} 
            className={styles.image}
            id={"bannerImage"}
            alt="Hero image for portfolio page"
            />

        <div className={styles.textSection}>
          <h1>{phrase}
          </h1>
          <Link href="/about">
            <button  className='button-primary'>
              Read more
            </button>
          </Link>
        </div>  
      </div>
    );
  }