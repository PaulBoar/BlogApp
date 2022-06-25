import styles from './about.module.css'
import Image from 'next/iamge'

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
        <Image
        src={'../public/imgs/aboutpng.png'}
        loader={contentfulLoader}
        alt={'working crew'}
        width={400}
        height={215}
        layout='responsive' />
      </div>
    </div>
    </div>
  )
}

export default About