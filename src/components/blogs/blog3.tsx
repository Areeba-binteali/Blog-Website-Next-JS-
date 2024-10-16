import styles from './blog.module.css'

export default function Blog3(){
    return(
        <div className={`${styles.singleBlog} ${styles.blog3anime}`}>
            <img src="/images/blog3.png" alt="blog3" />
            <div>
            <h3>DIY Wall Art: Transform Your Space with Simple Materials</h3>
            <p>Looking to add some personality to your space without breaking the bank? Try your hand at DIY wall art! You don’t need expensive...</p>
            <button>read more »</button>
            </div>
        </div>
    );
}