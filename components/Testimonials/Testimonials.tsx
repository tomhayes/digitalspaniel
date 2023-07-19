import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '@/components/Testimonials/Testimonials.module.scss'
import Title from '../Title/Title';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Testimonials: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/testimonials');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {data ? (
      <div>
        <Title firstLine="Kind words" secondLine="from our clients" />
        <Slider dots={true} infinite={true} slidesToShow={3} slidesToScroll={1}>
          {data.testimonials.map((testimonial: any) => (
            <div className={styles.testimonial_card} key={testimonial.id}>
              <p className={styles.testimonial_card__quote}>{testimonial.quote}</p>
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                className={styles.testimonial_card__image}
                width={96}
                height={96}
                priority
              />
              <p className={styles.testimonial_card__name}>{testimonial.name}</p>
              <p className={styles.testimonial_card__job}>
                {testimonial.jobtitle}, {testimonial.company}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    ) : (
      <p>Loading data...</p>
    )}
  </>
  );
};

export default Testimonials;