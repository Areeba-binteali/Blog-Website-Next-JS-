import styles from './blog.module.css'


export default function Blog2(){
    return(
        <div className={`${styles.singleBlog} ${styles.blog2anime}`}>
            <img src="/images/blog2.png" alt="blog2" />
            <div>
            <h3>Quick Tips to Spark Creativity When You’re Feeling Stuck</h3>
            <p>Ever hit a creative block? Don’t worry, it happens to the best of us. Here are five quick tips to get the creative juices flowing: Take a...</p>
            <button>read more »</button>
            </div>
        </div>
    );
}