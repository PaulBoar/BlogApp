import { Fragment } from 'react';
import HeroHeader from '../components/home-page/hero-header';
import PostsGrid from '../components/posts/posts-grid';
import {createClient} from 'contentful'

export async function getStaticProps() {

  const client = createClient({
   space: 'b4jprng2bg3x',
   accessToken: 'WETw-UQFoMNtZRbTT-cd9-YLivrYEZiQa2eOesiBqVM',
  //  space: process.env.CONTENTFUL_SPACE_ID,
  //  accessToken: process.env.CONTENTFUL_ACCESS_KEY,

  })

  const res = await client.getEntries({content_type: 'blog'})
 
  return {
    props: {
      blogPost: res.items
    }
  }
}

function HomePage({blogPost}) {
  return (
    <Fragment>
      <HeroHeader />
      <PostsGrid posts={blogPost}/>
    </Fragment>
  );
}

export default HomePage;
