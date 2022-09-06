import React from 'react'
import styles from '../styles/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {

    return (
        <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/"><Image src="/logo.png" width={286} height={126} /></Link>
        </div>
        <div>
          <ul className={`${styles.links} body-2`}>
            <Link href="/"><li><a>Home </a></li></Link>
            <Link href="/portfolio"><li><a>Portfolio </a></li></Link>
            <Link href="/contact"><li><a>Contact Me </a></li></Link>
            <Link href="/about"><li><a>About </a></li></Link>
          
          </ul>
        </div>
      </nav>  
    )

}