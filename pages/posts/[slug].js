import Image from 'next/image';
import { createClient } from 'contentful';

import styles from './[slug].module.css'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
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
  const {items} = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug
  });
  
  return {
    props: { blog: items[0] },
  };
};

function Post({blog}) {
  const {featuredImage} = blog.fields
  console.log(blog)
  return <section className={styles['blog-post']}>
    <Image src={`http:${featuredImage.fields.file.url}`} width={500} height={400}/>
  </section>;
}

export default Post;
