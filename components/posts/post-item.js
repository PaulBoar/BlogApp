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
  console.log(`https:${thumbnail.fields.file.url}`)

  const contentfulLoader = ({ src, quality, width }) => {
    const params = [`w=${width}`];
  
    if (quality) {
      params.push(`q=${quality}`);
    }
    return `${src}?${params.join('&')}`;
  };

  return (
    <li>
        <a className={styles.post}>
            <Link href={pathLink}>
          <div className={styles.image}>
            <Image
              src={`https:${thumbnail.fields.file.url}`}
              loader={contentfulLoader}
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


// "//images.ctfassets.net/b4jprng2bg3x/69BnO8f8ou7TPHLm3wPR2e/1cf8427989891b942de87ff56d644d71/buddhism_t.jpg"

// https://images.ctfassets.net/b4jprng2bg3x/69BnO8f8ou7TPHLm3wPR2e/1cf8427989891b942de87ff56d644d71/buddhism_t.jpg?imwidth=750