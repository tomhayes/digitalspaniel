import React from 'react';
import Image from 'next/image'
import Title from '../Title/Title'
import Button from '../Button/Button'
import styles from './Footer.module.scss'
import InstagramIcon from '../Socials/instagram'
import FacebookIcon from '../Socials/facebook'
import LinkedinIcon from '../Socials/linkedin'
import TwitterIcon from '../Socials/twitter'

const Footer: React.FC = () => {

  let year = new Date().getFullYear()

  return (

    <div className={styles.footer}>
    <div className={styles.footer__inner}>

    <div className={styles.footer__main}>
      <Title firstLine="We're a brand's" secondLine="best friend" />

      <Button text="Let's talk" url="#" />

    </div>
    <div className={styles.footer__menus}>
      <div className={styles.footer__menus__menu}>
        <h3>Explore</h3>
        <ul>
          <li><a href="#">Services</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div className={styles.footer__menus__menu}>
        <h3>Services</h3>
        <ul>
          <li><a href="#">Brand</a></li>
          <li><a href="#">Development</a></li>
          <li><a href="#">Marketing</a></li>
        </ul>
      </div>
      <div className={styles.footer__menus__menu}>
        <h3>Questions?</h3>
        <div className={styles.footer__contact}>
          <h4>Call Us</h4>
          <a href="tel:0121 345 678">0121 345 678</a>
        </div>
        <div className={styles.footer__contact}>
          <h4>Email Us</h4>
          <a href="mailto:info@digitalspaniel.co.uk">info@digitalspaniel.co.uk</a>
        </div>
      </div>
    </div>

    <div className={styles.footer__bottom}>
      <p>Copyright &copy; Digital Spaniel { year }. All rights reserved.</p> 
      <ul className={styles.footer__socials}>
        <li><a className={styles.footer__social_link} href="#" target="_blank"><FacebookIcon /></a></li>
        <li><a className={styles.footer__social_link} href="#" target="_blank"><TwitterIcon /></a></li>
        <li><a className={styles.footer__social_link} href="#" target="_blank"><InstagramIcon /></a></li>
        <li><a className={styles.footer__social_link} href="#" target="_blank"><LinkedinIcon /></a></li>
      </ul>
    </div>
    </div>
    </div>
  );
};

export default Footer;