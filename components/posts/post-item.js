import Link from 'next/link';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


import styles from './post-item.module.css';

function PostItem({ post }) {
  const { title, description, thumbnail, image, readTime, postContent, date, slug } = post.fields;

  const formattedDate = new Date(post.sys.createdAt).toLocaleDateString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const pathLink = `/posts/${slug}`;

  return (
    <li>
        <a className={styles.post}>
            <Link href={pathLink}>
          <div className={styles.image}>
            <Image
              src={`http:${thumbnail.fields.file.url}`}
              alt={title}
              width={400}
              height={215}
              layout='responsive'
            />
          </div>
      </Link>
          <div className={styles.content}>
      <Link href={pathLink}>
            <h3>{title}</h3>
      </Link>
            <time>{formattedDate}</time>
            <div>
              {description}
            </div>
            <p>estimated read time {readTime}</p>
            
          </div>
        </a>
            {/* {documentToReactComponents(postContent)} */}
    </li>
  );
}

export default PostItem;
