import { createClient } from 'contentful';

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
  console.log(blog)
  return <div>Post</div>;
}

export default Post;
