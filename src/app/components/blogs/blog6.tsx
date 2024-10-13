import styles from './blog.module.css'


export default function Blog6(){
    return(
        <div className={`${styles.singleBlog} ${styles.blog3anime}`}>
            <img src="/images/blog6.png" alt="blog6" />
            <div>
            <h3>Join the Creative Community: Share Your Work with Us</h3>
            <p>At The Creative Corner, we’re all about building a vibrant community of creators. Whether you’re a seasoned artist or just starting...</p>
            <button>read more »</button>
            </div>
        </div>
    );
}