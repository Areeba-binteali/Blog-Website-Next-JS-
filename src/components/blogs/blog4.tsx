import styles from './blog.module.css'

export default function Blog4(){
    return(
        <div className={`${styles.singleBlog}  ${styles.blog3anime}`}>
            <img src="/images/blog4.png" alt="blog4" />
            <div>
            <h3>Creative Trends to Watch: What’s Hot in 2024</h3>
            <p>The world of creativity is constantly evolving, and 2024 is no different! From vibrant color palettes to minimalist designs...</p>
            <button>read more »</button>
            </div>
        </div>
    );
}