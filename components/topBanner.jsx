import styles  from '../styles/topBanner.module.css'
import  Image from  'next/image'


export default function BannerSection() {
    return (
      <div className={styles.bannerContainer}>

        <Image 
            src="/homepage/desktop/image-homepage-hero.jpg" 
            width={1110}  
            height={600} />

      </div>
    );
  }