import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Header: React.FC = () => {
  return (
    <div>
      <div>
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="Digital Spaniel"
            width={197}
            height={90}
            priority
          />
        </div>

        <ul>
          <li>Services</li>
          <li>Work</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
    </div>
  );
};

export default Header;