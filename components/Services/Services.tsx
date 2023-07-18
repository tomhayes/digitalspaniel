import React from 'react';
import Title from '../Title/Title';

const Services: React.FC = () => {
  return (
    <>
    <div>
      <Title firstLine="What are" secondLine="we capable of" />
      <p>By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.</p>

      <a>Our process</a>
    </div>

    <div>
      <div>
        <h3>Brand</h3>
        <ul>
          <li>Brand Strategy</li>
          <li>Logo & Name</li>
          <li>Identity & Collateral</li>
        </ul>
      </div>
      <div>
        <h3>Development</h3>
          <ul>
            <li>Development</li>
            <li>Web Development</li>
            <li>Mobile Apps</li>
          </ul>
      </div>

      <div>
        <h3>Marketing</h3>
        <ul>
          <li>Digital</li>
          <li>Market Research</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Services;