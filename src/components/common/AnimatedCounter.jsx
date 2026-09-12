import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ end, duration = 1800, prefix = '', suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTimestamp = null;
    const startValue = 0;
    const endValue = Number(end);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (endValue - startValue) * easeProgress;

      setCount(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasAnimated, end, duration]);

  return (
    <span ref={counterRef} className="counter-value" style={{ display: 'inline-flex', alignItems: 'baseline', justifyContent: 'center' }}>
      {prefix && <span>{prefix}</span>}
      <span>{count.toFixed(decimals)}</span>
      {suffix && (
        <span style={{ fontSize: suffix.trim().length > 2 ? '0.55em' : '0.85em', marginLeft: suffix.startsWith(' ') ? '0.25em' : '0.05em' }}>
          {suffix.trim()}
        </span>
      )}
    </span>
  );
}
