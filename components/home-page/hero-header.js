import styles from './hero-header.module.css';

function HeroHeader() {
  return (
    <section className={styles.hero}>
      <div className={styles.img}></div>
      <h1>Explore your life</h1>
      <p>Blog about mind, body and soul</p>
    </section>
  );
}

export default HeroHeader;
