import React from 'react'
import styles from '../styles/navbar.module.scss'

export default function hamburgerButton({menuIsOpen}) {

  return (
    <div id={styles.hamburgerIcon}>
        <div id={styles.topLine} className={`${!menuIsOpen ? styles.topLineAnimationOpen :styles.topLineAnimationClose}`}></div>
        <div id={styles.midLine}  className={`${!menuIsOpen ? styles.midLineAnimationOpen :styles.midLineAnimationClose}`}></div>
        <div id={styles.bottomLine}  className={`${!menuIsOpen ? styles.bottomLineAnimationOpen :styles.bottomLineAnimationClose}`}></div>

    </div>
  )
}
