import React from "react"
import { useState, useEffect } from "react"
import Image from 'next/image'
import styles from  '../../styles/portfolioPage.module.scss'
import Link from 'next/link'
import sanityClient  from "../../sanity";
import urlFor from "../../imageUrlFor";
import getRef from "../../getRef";

export const getServerSideProps = async pageContext => {
    
    const pageSlug = pageContext.query.slug

    if(!pageSlug) {
        return {
            notFound: true
        }
    }

    const query = `*[ _type == "portfolioPage"  && slug.current == "${pageSlug}"]`
    const portfoliopage = await sanityClient.fetch(query)
    const pageData =  portfoliopage[0]

   
    const next = pageData.next._ref
    const prev = pageData.last._ref

    const refQuery = `*[ _type == 'portfolioPage' &&  _id=="${next}" || _id=="${prev}"  ]`
    const references = await sanityClient.fetch(refQuery)
    
    
    const refs =  references

    if (!portfoliopage) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {pageData:pageData, refs: refs}
        }
    }

}

export default function PortfolioPage(data) {


    const {description, imageOne, imageThumb, imageTwo, ingress, projectDetails, slug, title} = data.pageData


    return (
        <div className="wrapper">
            <div className={styles.container}>
                <div className={styles.bannerImage}>
                    <Image src={urlFor(imageOne).url()}
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
                                <Image src={urlFor(imageOne).url()} width={635} height={400} alt="Some alt" ></Image>
                            </div>
                            <div className={styles.twoColImage}>
                                <Image src={urlFor(imageTwo).url()} width={635} height={400} alt="Some alt" ></Image>
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
                            <Link href={data.refs[0].slug.current}>
                                <h2>{data.refs[0].title}</h2>
                            </Link>
                            <p>Past project</p>
                        </div>
                    </div>
                    <div className={styles.center}></div>
                    <div className={styles.next}>
                        <div className={styles.icon}>
                            <Image src="/icons/arrow-right.svg" width={10} height={10}></Image>
                        </div>
                        <div>
                            <Link  href={data.refs[1].slug.current}>
                                <h2>{data.refs[1].title}</h2>
                            </Link>
                            <p>Next project</p>
                        </div>
                    </div>
                </section>

            </div>
        
        </div>
    )

}



