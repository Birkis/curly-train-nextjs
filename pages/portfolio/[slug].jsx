import react from "react"
import Image from 'next/image'
import styles from  '../../styles/portfolioPage.module.scss'
import Link from 'next/link'

import { sanityClient } from "../../sanity";


export const getServerSideProps = async pageContext => {
    
    const pageSlug = pageContext.query.slug

    if(!pageSlug) {
        return {
            notFound: true
        }
    }

    const query = `*[ _type == "portfolioPage"  && slug.current == "${pageSlug}"]`
    const portfoliopage = await sanityClient.fetch(query)

    if (!portfoliopage) {
        return {
            notFound: true
        }
    } else {
        return {
            props: portfoliopage[0]
        }
    }

}



export default function PortfolioPage(portfoliopage) {

    console.log(portfoliopage)

    const {description, imageOne, imageThumb, imageTwo, ingress, projectDetails, slug, title} = portfoliopage

    return (
        <div className="wrapper">
            <div className={styles.container}>
                <div className={styles.bannerImage}>
                    <Image src="/portfolio/desktop/image-portfolio-bookmark.jpg"
                            width={1100}
                            height={600}
                
                            alt="some Alt" />
                
                </div>
                <section className={styles.twoCol}>
                    <div className={styles.col40}>
                        <div className={styles.borderTop}>
                        </div>
                        <h2>
                            {title}
                        </h2>
                        <p className="body-2">
                                {ingress}
                        </p>
                        <div className={`body-1 ${styles.statementText}`}>
                            <p> Interaction design / Front End Development </p>
                            <p> HTML/CSS/JS</p>
                            <p>{projectDetails}</p>
                        </div>
                        <button className={`button-secondary ${styles.cta}`}>
                            <Link  href="#">visit website</Link>
                        </button>
                    </div>
                    <div className={styles.col60}>
                        <h3>Project Background</h3>
                        <p className="body-2">{description}</p>
                        <h3>Static Previews</h3>
                        <div className={styles.twoColImageContainer}>
                            <div className={styles.twoColImage}>
                                <Image src="/portfolio/desktop/image-portfolio-bookmark.jpg" width={635} height={400} alt="Some alt" ></Image>
                            </div>
                            <div className={styles.twoColImage}>
                                <Image src="/portfolio/desktop/image-portfolio-bookmark.jpg" width={635} height={400} alt="Some alt" ></Image>
                            </div>
                        </div>
                    </div>
                
                </section>

                <section className={styles.prevNext}>
                    <div className={styles.prev}>
                        <div className={styles.icon}>
                            <Image src="/icons/arrow-left.svg" width={10} height={10}></Image>
                        </div>
                        <div>
                            <h2>Some Past Project</h2>
                            <p>Past project</p>
                        </div>
                    </div>
                    <div className={styles.center}></div>
                    <div className={styles.next}>
                        <div className={styles.icon}>
                            <Image src="/icons/arrow-right.svg" width={10} height={10}></Image>
                        </div>
                        <div>
                            <h2>Some other project</h2>
                            <p>Next project</p>
                        </div>
                    </div>
                </section>

            </div>
        
        </div>
    )

}



