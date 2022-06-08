import Image from 'next/image';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './[slug].module.css'
import CommentsSection from '../../components/comments-section/comments-section';

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
  const {title, featuredImage, postContent} = blog.fields
  // const width = featuredImage.fields.file.details.image.width
  // const height = featuredImage.fields.file.details.image.height
  console.log(blog)
  return <section className={styles['blog-post']}>
    <div className={styles.image}>
    <Image src={`http:${featuredImage.fields.file.url}`} width={720} height={400}/>
    </div>
    <div>
     <h2> {title}</h2>
     <div>{documentToReactComponents(postContent)}</div>
     {/* <div className={styles.image}>
     <Image src={`http:${postContent.content[8].data.target.fields.file.url}`} width={520} height={300} layout='responsive'></Image>
     </div> */}
     <CommentsSection />
    </div>
  </section>;
}

export default Post;
