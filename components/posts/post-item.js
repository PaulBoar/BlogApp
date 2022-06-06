import Link from 'next/link';
import Image from 'next/image';

import styles from './post-item.module.css';

function PostItem({ post }) {
  const { title, image, description, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const pathImage = `/imgs/posts/${slug}/${image}`;
  const pathLink = `/posts/${slug}`;

  return (
    <li>
        <a className={styles.post}>
            <Link href={pathLink}>
          <div className={styles.image}>
            <Image
              src={pathImage}
              alt={title}
              width={400}
              height={200}
              layout='responsive'
            />
          </div>
      </Link>
          <div className={styles.content}>
      <Link href={pathLink}>
            <h3>{title}</h3>
      </Link>
            <time>{formattedDate}</time>
            <p>{description}</p>
          </div>
        </a>
    </li>
  );
}

export default PostItem;
