import React from 'react'
import styles from  '../styles/portfolioItem.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import imageUrlFor from '../imageUrlFor'

export function PortfolioItem({pagenum,  item} ) {

    const {description, id, ingress, projectDetails, slug, title } = item

    return (
        <div className={`${styles.portfolioItem}  ${pagenum ? styles.reverse :  ""}`}>
            <div className={styles.profileImage}>
                
                <Image src={imageUrlFor(item.imageThumb).url()} width={540} height={600}  />
                {/* <img
                    src="/homepage/desktop/image-homepage-profile.jpg"
                    alt=""
                /> */}
            </div>
        <div className={styles.portfolioItemText}>
            <h2 className="">{title} </h2>
            <p className="body-1">
                {description} This is the Index
            </p>
            <Link href={ "/portfolio/" + slug.current  }><button className='button-secondary'>View case</button></Link>
        </div>
        </div>
    )

}