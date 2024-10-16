import styles from './blog.module.css'
    

export default function Blog1(){
    return(
        <div id='blog1' className={`${styles.singleBlog}  ${styles.blog1anime}`}>
            <img src="/images/blog1.png" alt="blog1" />
            <div>
            <h3>Unleashing Your Inner Artist: Inspiration in Everyday Life</h3>
            <p>Creativity can be found in the most unexpected places—whether it’s the morning sunlight streaming through your window...</p>
            <button>read more »</button>
            </div>
        </div>
    );
}