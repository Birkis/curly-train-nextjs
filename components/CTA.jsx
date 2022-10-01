import Link from 'next/link'
import styles from '../styles/CTA.module.scss'

export default function CTA() {
    return (
        <div className={styles.CTA}>
            <h1>Interested in doing a project together?</h1>
            <button>
                <Link href="/contact">Contact</Link>
            </button>
        </div> 
    )

}