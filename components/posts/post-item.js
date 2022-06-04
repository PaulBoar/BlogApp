import Link from 'next/link';
import Image from 'next/image';

import styles from './post-item.module.css'

function PostItem({post}) {
 const {title, image, description, date, slug} = post

 const formattedDate = new Date(date).toLocaleDateString('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
 })

 const pathImage = `/imgs/posts/${slug}/${image}`
 const pathLink = `/posts/${slug}`

  return (
    <li className={styles.post}>
      <Link href={pathLink}>
        <a>
          <div className={styles.image}>
            <Image src={pathImage} alt={title} width={300} height={200}/>
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{description}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
