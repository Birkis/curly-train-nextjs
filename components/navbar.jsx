import React, {useState} from 'react'
import styles from '../styles/navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'






export function Navbar() {

    const [hideNav, setHideNav] = useState(true)




    return (
        <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/"><Image src="/logo.png" width={286} height={126} /></Link>
        </div>
        <div className={styles.navWrapper}>
          <button className={styles.mobileNavToggle}  onClick={()=> setHideNav(!hideNav)}>
            <img className={`${styles.iconHamburger} ${hideNav ? "" : "visually-hidden"}`} src="/icons/hamburger.svg" alt="" />
            <img  className={`${styles.iconclose} ${hideNav ? "visually-hidden" : ""}`} src="/icons/close.svg" alt="" />
            <span className='visually-hidden'>menu</span>
          </button>
          <nav className={ hideNav ? `${styles.primaryNavigationHidden}` : `${styles.primaryNavigation}`   }>
            <ul className={`${styles.links} body-2`} role='list'>
              <Link href="/"><li><a>Home </a></li></Link>
              <Link href="/portfolio"><li><a>Portfolio </a></li></Link>
              <Link href="/contact"><li><a>Contact Me </a></li></Link>
              <Link href="/about"><li><a>About </a></li></Link>          
            </ul>
          </nav>
        </div>
      </nav>  
    )

}