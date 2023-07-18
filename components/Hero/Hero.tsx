import React from 'react'
import Title from '../Title/Title'
import Button from '../Button/Button'

const Hero: React.FC = () => {
  return (
    <div>
      <h2>BRAND, DEV, ECOM, MARKETING</h2>
      <Title firstLine="We unleash" secondLine="business potential" />
      <p>We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.</p>
      <Button text="Let's talk" url="#" />
    </div>
  );
};

export default Hero;