import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from '@/components/Testimonials/Testimonials.module.scss';
import Title from '../Title/Title';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface TestimonialData {
  id: number;
  quote: string;
  photo: string;
  name: string;
  jobtitle: string;
  company: string;
}

const Testimonials: React.FC = () => {
  const [data, setData] = useState<{ testimonials: TestimonialData[] } | null>(
    null
  );
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(3);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 999) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '12px',
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next);
    },
  };

  return (
    <>
      {data ? (
        <>
                  <div className={styles.testimonials_section__title}><Title firstLine="Kind words" secondLine="from our clients" /></div>

        <div className={styles.testimonials_slider}>

          <Slider {...settings}>
            {data.testimonials.map((testimonial: TestimonialData, index: number) => (
              <div key={testimonial.id}>
                <div
                  className={classNames(styles.testimonial_card, {
                    [styles.testimonial_card__active]: activeSlide === index,
                  })}
                >
                  <p className={styles.testimonial_card__quote}>
                    {testimonial.quote}
                  </p>
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className={styles.testimonial_card__image}
                    width={96}
                    height={96}
                    priority
                  />
                  <p className={styles.testimonial_card__name}>
                    {testimonial.name}
                  </p>
                  <p className={styles.testimonial_card__job}>
                    {testimonial.jobtitle}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default Testimonials;