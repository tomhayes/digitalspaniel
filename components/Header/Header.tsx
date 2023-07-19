import 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'



type ScrollDirection = "up" | "down" | null;

function useScrollDirection(): ScrollDirection {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction: ScrollDirection = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

function usePageScrolled(): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScrollPosition = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return isScrolled;
}

const Header: React.FC = () => {
  const scrollDirection = useScrollDirection();
  const isScrolled = usePageScrolled();
  return (
    <div className={`
    ${styles.header} 
    ${scrollDirection === "down" ? styles.header__hidden : styles.header__show}
    ${isScrolled === true ? styles.header__scrolled : styles.header__unscrolled}
  }`}>
      <div className={ styles.header__inner}>
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

        <ul className={ styles.nav } >
          <li>Services</li>
          <li>Work</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
    </div>
    </div>
  );
};

export default Header;