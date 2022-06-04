import { Fragment } from 'react';
import HeroHeader from '../components/home-page/hero-header';
import Posts from '../components/home-page/posts';
import styles from '../styles/Home.module.css';

function HomePage() {
  return (
    <Fragment>
      <HeroHeader />
      <Posts />
    </Fragment>
  );
}

export default HomePage;
