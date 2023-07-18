import React, { FC } from 'react';

interface ButtonProps {
  text: string;
  url: string;
}

const Title: FC<ButtonProps> = ({ text, url }) => {
  return (
      <a href={url}>{text}</a>
  );
};

export default Title;