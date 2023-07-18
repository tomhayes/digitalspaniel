import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Header: React.FC = () => {
  return (
    <div>
      <h1>Header</h1>

      <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
    </div>
  );
};

export default Header;