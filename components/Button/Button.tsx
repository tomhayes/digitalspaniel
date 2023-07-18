import React, { FC } from 'react';
import styles from './Button.module.scss'


interface ButtonProps {
  text: string;
  url: string;
}

const Title: FC<ButtonProps> = ({ text, url }) => {
  return (
      <a className={styles.button} href={url}>{text}</a>
  );
};

export default Title;