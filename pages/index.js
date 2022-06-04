import { Fragment } from 'react';
import HeroHeader from '../components/home-page/hero-header';
import PostsGrid from '../components/posts/posts-grid';
import styles from '../styles/Home.module.css';

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

function HomePage() {
  return (
    <Fragment>
      <HeroHeader />
      <PostsGrid posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
