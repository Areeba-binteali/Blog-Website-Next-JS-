import Blog1 from './blog1'
import Blog2 from './blog2'
import Blog3 from './blog3'
import Blog4 from './blog4'
import Blog5 from './blog5'
import Blog6 from './blog6'
import styles from './blogs.module.css'

export default function Blogs() {
  return (
    <div className={styles.main}>
      <h2><span>Creative</span> Resources</h2>

      <div className={styles.blogs}>
          <Blog1/>
          <Blog2 />
          <Blog3 />
          <Blog4 />
          <Blog5 />
          <Blog6 />
      </div>

    </div>
  )
}
