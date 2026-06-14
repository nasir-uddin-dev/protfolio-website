import { useEffect, useRef, useState } from 'react';

export function useInView(threshold: number | number[] | { threshold?: number | number[] } = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const thresholdValue = typeof threshold === 'object' && !Array.isArray(threshold)
      ? threshold.threshold ?? 0.1
      : threshold;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: thresholdValue,
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView, inView: isInView };
}
