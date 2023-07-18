import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '@/components/Testimonials/Testimonials.module.css'
import Title from '../Title/Title';

const Testimonials: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/content');
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
              <p className={styles.testimonial_card__job}>{testimonial.jobtitle}, {testimonial.company}</p>

            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default Testimonials;