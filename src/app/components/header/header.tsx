import Link from 'next/link'
import styles from './header.module.css'


export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.subdiv1}>
            <Link href="/"><h1>The <span>Creative</span> Corner</h1></Link>
        </div>
        <div className={styles.subdiv2}>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/blogs">Blogs</Link>
                <Link href="/contact">Contact</Link>
            </ul>
            <span className={styles.icon}><i className="fa-solid fa-bars-staggered"></i></span>
        </div>
    </div>
  )
}