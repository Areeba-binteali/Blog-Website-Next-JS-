import styles from './banner.module.css'

export default function Banner() {
  return (
    <div className={styles.main}>
        <div className={styles.sub}>
          <h1>Unleash Your <span>Creativity,</span><br /> One <span>Idea</span> at a Time</h1>
        </div>
        <div className={styles.sub}>
          <img src="/images/banner.png" alt="banner" />
        </div>
    </div>
  )
}