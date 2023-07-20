import React, { useState, useEffect } from 'react';
import styles from './MobileMenu.module.scss';
import 'hamburgers/_sass/hamburgers/hamburgers.scss';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 900) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.mobileMenu}>
        <button
          className={`${styles.hamburger} ${isOpen ? `is-active` : ''} hamburger hamburger--collapse `}
          type="button"
          onClick={handleMenuToggle}
        >
          <span className="hamburger-box">
            <span className={`${styles.hamburger_inner} hamburger-inner `}></span>
          </span>
        </button>
      </div>

      <nav className={`${styles.menu__nav} ${isOpen ? `is-active` : ''} menu__nav`}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a href="#" className={styles.menu__link} onClick={handleLinkClick}>
              Services
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="#" className={styles.menu__link} onClick={handleLinkClick}>
              Work
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="#" className={styles.menu__link} onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="#" className={styles.menu__link} onClick={handleLinkClick}>
              Blog
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="#" className={styles.menu__link} onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
