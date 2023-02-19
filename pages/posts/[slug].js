import Image from 'next/image';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import contentful_space from '../../.github/workflows/node.js.yml'
import contentful_token from '../../.github/workflows/node.js.yml'
import styles from './[slug].module.css';
import CommentsSection from '../../components/comments-section/comments-section';

const client = createClient({
    space: contentful_space,
    accessToken: contentful_token,
    // space: process.env.CONTENTFUL_SPACE_ID,
    // accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blog',
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug,
  });

  return {
    props: { blog: items[0] },
  };
};

function Post({ blog, isLogged, user }) {
  const { title, featuredImage, postContent, slug } = blog.fields;
  
  const contentfulLoader = ({ src, quality, width }) => {
    const params = [`w=${width}`];
  
    if (quality) {
      params.push(`q=${quality}`);
    }
    return `${src}?${params.join('&')}`;
  };
  
  return (
    <section className={styles['blog-post']}>
      <div className={styles.image}>
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          loader={contentfulLoader}
          width={720}
          height={400}
          alt='post image'
        />
      </div>
      <div className={styles.container}>
        <h2> {title}</h2>
        <div className={styles.content}>
          {documentToReactComponents(postContent)}
        </div>
        <CommentsSection slug={slug} logged={isLogged} user={user} />
      </div>
    </section>
  );
}

export default Post;
