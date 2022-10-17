import React, {useState,  useRef, useEffect} from 'react'
import styles from '../styles/navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {

    const linkButton = useRef()
    const navRef = useRef()
    const [menuIsOpen, setMenuIsOpen] = useState(false)
 

    useEffect(() => {
      
      const handler = (e) => {
        //If the menu is not a part of the area clicked, then close the menu
        if(!navRef.current.contains(e.target) || linkButton.current.contains(e.target)){
          setMenuIsOpen(!menuIsOpen)
        } 
      }
      document.addEventListener("mousedown",handler)



      return ()=> {
        document.removeEventListener("mousedown", handler)
      }
    },[menuIsOpen])


    return (
        <nav className={styles.navbar}>
        <div className={styles.logo}>
        <Link href="/"><span><Image src="/logo.png" width={286} height={126} alt="the logo image"/></span></Link>
        </div>

        <div className={styles.navWrapper}>
          <button className={styles.mobileNavToggle}  onClick={()=> {
              setMenuIsOpen(!menuIsOpen)
            }
          }>

              {!menuIsOpen && <Image src="/icons/hamburger.svg" 
                width={25} 
                height={13} 
                className={`${styles.iconHamburger}`} 
                alt='hamburger icon' />}

              {menuIsOpen && <Image src="/icons/close.svg" 
                width={15}
                height={15}
                className={`${styles.iconclose}`} 
                alt="the close button"  />}

            <span className='visually-hidden'>menu</span>
          </button>
          <nav 
            ref={navRef}
            className={`${styles.primaryNavigation} ${menuIsOpen ? styles.primaryNavigationShowing : styles.primaryNavigationHidden}`}>
            <ul ref={linkButton} className={`${styles.links} body-2`} role='list'>
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