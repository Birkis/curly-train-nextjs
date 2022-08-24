import styles  from '../styles/topBanner.module.scss'
import  Image from  'next/image'

export function BannerSection({title,  buttonText}) {

  console.log(title)
    return (
      <div className={styles.bannerContainer}>

        <Image 
            src="/homepage/desktop/image-homepage-hero.jpg" 
            width={1100}  
            height={600} 
            className={styles.image}
            />

        <div className={styles.textSection}>
          <h1>{title}
          </h1>
          <button  className='button-primary'>
            About me
          </button>
        </div>  

      </div>
    );
  }