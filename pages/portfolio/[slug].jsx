import react from "react"
import Image from 'next/image'
import styles from  '../../styles/portfolioPage.module.scss'
import Link from 'next/link'


export default function PortfolioPage() {

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
                            Manage
                        </h2>
                        <p className="body-2">
                                This project required me to build a fully responsive landing page
                                to the designs provided. I used HTML5, along with CSS Grid and
                                JavaScript for the areas that required interactivity, such as the
                                testimonial slider.
                        </p>
                        <div className={`body-1 ${styles.statementText}`}>
                            <p> Interaction design / Front End Development </p>
                            <p> HTML/CSS/JS</p>
                        </div>
                        <button className={`button-secondary ${styles.cta}`}>
                            <Link  href="#">visit website</Link>
                        </button>
                    </div>
                    <div className={styles.col60}>
                        <h3>Project Background</h3>
                        <p className="body-2">This project was a front-end  challenge from Frontend Mentor.
                            It’s a platform that enables you to practice building websites to a design and project brief.
                            Each challenge includes mobile and desktop designs to show how the website should look at
                            different screen sizes. Creating these projects has helped me refine my workflow and solve
                            real-world coding problems. I’ve learned something new with each project,
                            helping me to improve and adapt my style.</p>
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