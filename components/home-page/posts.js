import PostsGrid from '../posts/posts-grid'
import styles from './posts.module.css'

function Posts({posts}) {
  return (
    <section className={styles.posts}>
     <h2>Posts</h2>
     <PostsGrid posts={posts} />
    </section>
  )
}

export default Posts