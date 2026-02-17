import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
  children,
  direction = 'up',
  distance = 50,
  duration = 0.8,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => { 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `translateY(${distance}px)`;
        case 'down':
          return `translateY(-${distance}px)`;
        case 'left':
          return `translateX(${distance}px)`;
        case 'right':
          return `translateX(-${distance}px)`;
        default:
          return `translateY(${distance}px)`;
      }
    }
    return 'translateY(0)';
  };

  return (
    <div
      ref={ref}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `all ${duration}s ease-out`,
      }}
    >
      {children}
    </div>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="pt-4 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              Let's Connect
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
