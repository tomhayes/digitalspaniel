import React from 'react'
import Image from 'next/image'
import styles from './Hero.module.scss'
import Title from '../Title/Title'
import Button from '../Button/Button'

const Hero: React.FC = () => {
  return (
    <div className={styles.hero__background_holder}>

<div className={styles.hero__background}>
<Image
            className={styles.hero__background_image}
            src="/spaniel.png"
            alt="Digital Spaniel"

            fill={true}
            priority
          />

</div>

    <div className={styles.hero}>
      <div className={styles.hero__content}>
        <div className={styles.hero__inner}>
          <h2 className={styles.hero__subheading}>BRAND, DEV, ECOM, MARKETING</h2>
          <Title firstLine="We unleash" secondLine="business potential" />
          <p>We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.</p>
          <Button text="Let's talk" url="#" />
        </div>
      </div>

    </div>

    </div>
  );
};

export default Hero;