'use client';

import { useRef, useState, useEffect } from 'react';

const testimonialsData = [
  {
    quote: 'The excellent voice recognition quality of Curio app makes it perfect for dictation and note taking. I have never come across such accuracy before',
    name: 'Adam Jordan',
    role: 'CEO, Go Design Studio',
    image: '/1.png',
    bgColor: 'bg-blue-200',
  },
  {
    quote: 'With the help of Curio, my work has become much easier and efficient. It provides quick and accurate answers to any questions I come across',
    name: 'Jidu Akita',
    role: 'Head of HR, Kario',
    image: '/2.png',
    bgColor: 'bg-green-200',
  },
  {
    quote: 'I love how Curio personalizes to my needs and offers recommendations and solutions based on my preferences and behaviors',
    name: 'Mike Donavan',
    role: 'Designer, Stilll',
    image: '/3.png',
    bgColor: 'bg-pink-200',
  },
  {
    quote: 'The excellent voice recognition quality of Curio app makes it perfect for dictation and note taking. I have never come across such accuracy before',
    name: 'Amber Reav',
    role: 'Musician, Ohio College',
    image: '/4.png',
    bgColor: 'bg-blue-200',
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
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold">Testimonials</h2>
            <p className="text-lg text-gray-600 mt-4">
              Don't just take our word for it - hear from our satisfied clients who have experienced the transformative impact of our Al text tool.
            </p>
          </div>
          <div className="flex gap-4">
              <button  onClick={() => canScrollLeft && scroll('left')} disabled={!canScrollLeft} className="bg-purple-600 text-white p-3 rounded-full disabled:opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <button onClick={() => canScrollRight && scroll('right')} disabled={!canScrollRight} className="bg-purple-600 text-white p-3 rounded-full disabled:opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-8 pb-8" ref={scrollContainerRef}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className={`flex-shrink-0 w-96 p-8 rounded-lg ${testimonial.bgColor}`}>
              <p className="text-lg mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img src={testimonial.image} className="w-12 h-12 rounded-full mr-4" alt={testimonial.name} />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
