import styles  from '../styles/topBanner.module.scss'
import  Image from  'next/image'
import { MiddlewareNotFoundError } from 'next/dist/shared/lib/utils';


export default function BannerSection() {
    return (
      <div className={styles.bannerContainer}>

        <Image 
            src="/homepage/desktop/image-homepage-hero.jpg" 
            width={1100}  
            height={600} 
            className={styles.image}
            />

        <div className={styles.textSection}>
          <h1>Hey, I'm Max 
              and I love building 
              beautiful websites
          </h1>
          <button  className='button-primary'>
            About me
          </button>
        </div>  

      </div>
    );
  }