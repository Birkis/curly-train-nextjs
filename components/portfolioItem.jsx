import React from 'react'
import styles from  '../styles/portfolioItem.module.scss'
import Link from 'next/link'

export function PortfolioItem({ title, description, url, index}) {

    const slugify = (str) => {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');   
    } 

    return (
        <div className={`${styles.portfolioItem}  ${index % 2 === 0 ? styles.reverse :  ""}`}>
            <div className={styles.profileImage}>
                <img
                    src="/homepage/desktop/image-homepage-profile.jpg"
                    alt=""
                />
            </div>
        <div className={styles.portfolioItemText}>
            <h2 className="">{title} </h2>
            <p className="body-1">
                {description} This is the Index {index}
            </p>
            <Link href={ "/portfolio/" + `${slugify(title)}`  }><button className='button-secondary'>View case</button></Link>
        </div>
        </div>
    )

}