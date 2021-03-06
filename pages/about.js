import styles from './about.module.css'

function About() {

  const contentfulLoader = ({ src, quality, width }) => {
    const params = [`w=${width}`];
  
    if (quality) {
      params.push(`q=${quality}`);
    }
    return `${src}?${params.join('&')}`;
  };

  return (
   
    <div className={styles.about}>
    <div className={styles.content}>
      <div>
      <h2>About Mindworks</h2>
      <p>We are team of journalists writting about scientific methods which can improve your performance and general well-being.</p>
      </div>
      <div className={styles.image}>
      </div>
    </div>
    </div>
  )
}

export default About