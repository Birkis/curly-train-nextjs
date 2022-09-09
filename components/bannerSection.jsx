import styles  from '../styles/topBanner.module.scss'
import  Image from  'next/image'
import Link from 'next/link';

export function BannerSection({phrase}) {

  console.log(phrase)
    return (
      <div className={styles.bannerContainer}>

        <Image 
            src="/homepage/desktop/image-homepage-hero.jpg" 
            width={1100}  
            height={600} 
            className={styles.image}
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