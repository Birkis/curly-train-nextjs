import React, {useState,  useRef, useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import HamburgerButton from './hamburgerButton'

export function Navbar() {

    const menuButton = useRef()
    const linkButton = useRef()
    const navRef = useRef()
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const router = useRouter()
    const pageRef = useRef(router.asPath)

    const [menuSlideClose, setMenuSlideClose] = useState('')

    useEffect(() => {

      //Listen for mousedown and handle event
      const handler = (e) => {
        //If the menu is not a part of the area clicked, then close the menu
        if(menuIsOpen && !navRef.current.contains(e.target)){
          
          const someTarget = e.target          
          if(!menuButton.current.contains(someTarget)){
            setMenuIsOpen(!menuIsOpen)
          }
        } 
      }
      document.addEventListener("mousedown",handler)


      //Check if path has changed. If new route, set menuIsOpen to false
      if(router.asPath !== pageRef.current){
        setMenuIsOpen(false)

      }

      //reset event listener
      return ()=> {
        document.removeEventListener("mousedown", handler)
        pageRef.current = router.asPath
      }


    },[menuIsOpen, pageRef, router.asPath])


    return (
        <nav className={styles.navbar}>
        <div className={styles.logo}>
        <Link href="/"><span><Image src="/logo.png" width={286} height={126} alt="the logo image"/></span></Link>
        </div>

        <div className={styles.navWrapper}>
          <button  
            ref={menuButton} 
            className={styles.mobileNavToggle}  
            onClick={()=> {
              setMenuIsOpen(!menuIsOpen)
            }
          }>
            <HamburgerButton menuIsOpen={menuIsOpen}/>
            <span className='visually-hidden'>menu</span>
          </button>
          <nav 
            ref={navRef}
            className={`
            ${styles.primaryNavigation} 
            ${menuIsOpen ? styles.primaryNavigationShowing : styles.primaryNavigationSlideClose}`}>
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