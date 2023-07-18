import React from 'react';
import Image from 'next/image'
import Title from '../Title/Title'
import Button from '../Button/Button'

const Footer: React.FC = () => {

  let year = new Date().getFullYear()

  return (
    <>
    <div>
      <Title firstLine="We're a brand's" secondLine="best friend" />

      <Button text="Let's talk" url="#" />
    </div>
    <div>
      <div>
        <h3>Explore</h3>
        <ul>
          <li>Services</li>
          <li>Work</li>
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <h3>Services</h3>
        <ul>
          <li>Brand</li>
          <li>Development</li>
          <li>Marketing</li>
        </ul>
      </div>
      <div>
        <h3>Questions?</h3>
        <div>
          <h4>Call Us</h4>
          <a>0121 345 678</a>
        </div>
        <div>
          <h4>Email Us</h4>
          <a>info@digitalspaniel.co.uk</a>
        </div>
      </div>
    </div>

    <div>
      <p>Copyright &copy; Digital Spaniel { year }. All rights reserved.</p> 
      <ul>
        <li>         
          <Image
            // className={styles.logo}
            src="/facebook.svg"
            alt="Digital Spaniel"
            width={17}
            height={32}
            priority
          /></li>
        <li>          
          <Image
            // className={styles.logo}
            src="/twitter.svg"
            alt="Digital Spaniel"
            width={39}
            height={32}
            priority
          /></li>
        <li>          
          <Image
            // className={styles.logo}
            src="/instagram.svg"
            alt="Digital Spaniel"
            width={32}
            height={32}
            priority
          /></li>
        <li>         
          <Image
            // className={styles.logo}
            src="/linkedin.svg"
            alt="Digital Spaniel"
            width={33}
            height={32}
            priority
          /></li>
      </ul>
    </div>
    </>
  );
};

export default Footer;