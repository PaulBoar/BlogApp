import { Fragment } from 'react';
import HeroHeader from '../components/home-page/hero-header';
import PostsGrid from '../components/posts/posts-grid';
import styles from '../styles/Home.module.css';
import {createClient} from 'contentful'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY ,
  })

  const res = await client.getEntries({content_type: 'blog'})
 
  return {
    props: {
      blogPost: res.items
    }
  }
}

const DUMMY_POSTS = [
  {
   title: 'dummy TITLE',
   slug: 'dummy-post',
   image: 'hero-big.jpg',
   description: 'bla bla bla blal balbla bla',
   date: '2022-07-10'
  },
  {
   title: 'dummy TITLE',
   slug: 'dummy-post2',
   image: 'hero-big.jpg',
   description: 'bla bla bla blal balbla bla',
   date: '2022-07-10'
  },
  {
   title: 'dummy TITLE',
   slug: 'dummy-post3',
   image: 'hero-big.jpg',
   description: 'bla bla bla blal balbla bla',
   date: '2022-07-10'
  },
  {
   title: 'dummy TITLE',
   slug: 'dummy-post4',
   image: 'hero-big.jpg',
   description: 'bla bla bla blal balbla bla',
   date: '2022-07-10'
  },
 ]

function HomePage({blogPost}) {
  console.log(blogPost)
  return (
    <Fragment>
      <HeroHeader />
      <PostsGrid posts={blogPost}/>
    </Fragment>
  );
}

export default HomePage;
