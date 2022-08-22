import React from 'react'
import styles from '../styles/navbar.module.css'
import Image from 'next/image'

export default function Navbar() {

    return (
        <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/logo.png" width={286} height={126} />
        </div>
        <div>
          <ul className={`${styles.links} body-2`}>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
          
          </ul>
        </div>
      </nav>  
    )

}