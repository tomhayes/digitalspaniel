import React, { FC } from 'react';

interface TitleProps {
  firstLine: string;
  secondLine?: string;
}

const Title: FC<TitleProps> = ({ firstLine, secondLine }) => {
  return (
    <div>
      <h2>{firstLine}
      {secondLine && <span><br />{secondLine}</span>}
    </h2></div>
  );
};

export default Title;