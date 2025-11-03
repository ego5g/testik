'use client';

import { useRef, useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    quote: 'The excellent voice recognition quality of Curio app makes it perfect for dictation and note taking. I have never come across such accuracy before',
    name: 'Adam Jordan',
    role: 'CEO, Go Design Studio',
    image: '/1.png',
    bgColor: '#B2E3F7',
  },
  {
    quote: 'With the help of Curio, my work has become much easier and efficient. It provides quick and accurate answers to any questions I come across',
    name: 'Jidu Akita',
    role: 'Head of HR, Kario',
    image: '/2.png',
    bgColor: '#C8F7A8',
  },
  {
    quote: 'I love how Curio personalizes to my needs and offers recommendations and solutions based on my preferences and behaviors',
    name: 'Mike Donavan',
    role: 'Designer, Stilll',
    image: '/3.png',
    bgColor: '#FF99CA',
  },
  {
    quote: 'The excellent voice recognition quality of Curio app makes it perfect for dictation and note taking. I have never come across such accuracy before',
    name: 'Amber Reav',
    role: 'Musician, Ohio College',
    image: '/4.png',
    bgColor: '#B2E3F7',
  },
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScrollability();
    const scrollContainer = scrollContainerRef.current;
    scrollContainer?.addEventListener('scroll', checkScrollability);
    return () => {
      scrollContainer?.removeEventListener('scroll', checkScrollability);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 434; // Width of a card + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <h2 className={styles.title}>Testimonials</h2>
          <p className={styles.subtitle}>
            Don\'t just take our word for it - hear from our satisfied clients who have experienced the transformative impact of our Al text tool.
          </p>
        </div>
        <div className={styles.arrows}>
        <svg width="112" height="48" viewBox="0 0 112 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity={canScrollLeft ? 1 : 0.5} onClick={() => canScrollLeft && scroll('left')} style={{ cursor: 'pointer' }}>
          <rect width="48" height="48" rx="16" fill="#6A65FD"/>
          <path d="M29.8333 24H18.1666M18.1666 24L24 18.1666M18.1666 24L24 29.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <g opacity={canScrollRight ? 1 : 0.5} onClick={() => canScrollRight && scroll('right')} style={{ cursor: 'pointer' }}>
          <rect x="64" width="48" height="48" rx="16" fill="#6A65FD"/>
          <path d="M82.1667 24H93.8334M93.8334 24L88 18.1666M93.8334 24L88 29.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          </svg>
        </div>
      </div>
      <div className={styles.cards} ref={scrollContainerRef}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className={styles.card} style={{ backgroundColor: testimonial.bgColor }}>
            <p className={styles.quote}>{testimonial.quote}</p>
            <div className={styles.authorInfo}>
              <img src={testimonial.image} className={styles.authorImage} alt={testimonial.name} />
              <div className={styles.authorDetails}>
                <span className={styles.authorName}>{testimonial.name}</span>
                <span className={styles.authorRole}>{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
