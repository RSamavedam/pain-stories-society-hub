
import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number; // how much of the element needs to be visible
  rootMargin?: string; // margin around the root
  animateOnce?: boolean; // whether to animate only once or every time it comes into view
}

type AnimationState = 'hidden' | 'visible' | 'animated';

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = '0px',
  animateOnce = true
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<AnimationState>('hidden');

  useEffect(() => {
    const currentElement = ref.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState('visible');
            
            // If we only want to animate once, disconnect the observer after the animation
            if (animateOnce) {
              observer.disconnect();
            }
          } else if (!animateOnce) {
            setState('hidden');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(currentElement);
    
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, animateOnce]);

  return { ref, state };
}
