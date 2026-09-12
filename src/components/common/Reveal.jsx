import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({
  children,
  effect = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = '',
  style = {}
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getInitialTransform = () => {
    switch (effect) {
      case 'fade-up':
        return 'translateY(32px)';
      case 'fade-down':
        return 'translateY(-32px)';
      case 'fade-left':
        return 'translateX(-40px)';
      case 'fade-right':
        return 'translateX(40px)';
      case 'zoom-in':
        return 'scale(0.92)';
      case 'fade':
      default:
        return 'none';
    }
  };

  const animStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0, 0) scale(1)' : getInitialTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
    ...style
  };

  return (
    <div ref={ref} className={`reveal-wrapper ${className}`} style={animStyle}>
      {children}
    </div>
  );
}
