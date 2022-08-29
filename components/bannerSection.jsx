import styles  from '../styles/topBanner.module.scss'
import  Image from  'next/image'
import Link from 'next/link';

export function BannerSection({title,  buttonText, url}) {

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
          <Link href={url}>
            <button  className='button-primary'>
              {buttonText}
            </button>
          </Link>
        </div>  
      </div>
    );
  }