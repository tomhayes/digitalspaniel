import React from 'react'
import Title from '../Title/Title'
import styles from './Services.module.scss'
import Button from '../Button/Button'

const Services: React.FC = () => {
  return (
    <>
    <div className={styles.services}>
      <div className={styles.services__inner}>
      <div className={styles.services__content}>
      <Title firstLine="What are" secondLine="we capable of" />
      
      <p>By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.</p>

      <Button text="Our process" url="#"  />
    </div>

    <div className={styles.services__links}>
      <div className={styles.services__list}>
        <h3>Brand</h3>
        <ul>
          <li><a href="#">Brand Strategy</a></li>
          <li><a href="#">Logo & Name</a></li>
          <li><a href="#">Identity & Collateral</a></li>
        </ul>
      </div>


      <div className={styles.services__list}>
        <h3>Marketing</h3>
        <ul>
          <li><a href="#">Digital</a></li>
          <li><a href="#">Market Research</a></li>
        </ul>
      </div>


      <div className={styles.services__list}>
        <h3>Development</h3>
          <ul>
            <li><a href="#">Development</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Mobile Apps</a></li>
          </ul>
      </div>


    </div>
    </div>
    </div>
    </>
  );
};

export default Services;