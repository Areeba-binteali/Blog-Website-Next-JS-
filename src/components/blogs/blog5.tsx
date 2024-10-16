import styles from './blog.module.css'

export default function Blog5(){
    return(
        <div className={`${styles.singleBlog} ${styles.blog5anime}`}>
            <img src="/images/blog5.png" alt="blog5" />
            <div>
            <h3>Behind the Brush: How Artists Create Magic</h3>
            <p>Ever wonder how artists transform a blank canvas into a masterpiece? In our Behind the Scenes series, we interview creators to uncover...</p>
            <button>read more »</button>
            </div>
        </div>
    );
}