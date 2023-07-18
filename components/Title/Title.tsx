import React, { FC } from 'react';
import styles from './Title.module.scss'

interface TitleProps {
  firstLine: string;
  secondLine?: string;
}

const Title: FC<TitleProps> = ({ firstLine, secondLine }) => {
  return (
    <div>
      <h2 className={styles.title}>{firstLine}
      {secondLine && <span><br />{secondLine}</span>}
    </h2></div>
  );
};

export default Title;