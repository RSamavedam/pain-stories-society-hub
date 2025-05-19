
import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up' | 'piece-by-piece';
  delay?: number; // delay in milliseconds
  duration?: number; // duration in milliseconds
  threshold?: number;
  rootMargin?: string;
}

export default function AnimatedSection({
  children,
  className,
  animationType = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  rootMargin = '0px',
}: AnimatedSectionProps) {
  const { ref, state } = useScrollAnimation({ threshold, rootMargin, animateOnce: true });

  // Base animation styles
  const animations = {
    'fade-up': 'opacity-0 translate-y-10',
    'fade-in': 'opacity-0',
    'slide-left': 'opacity-0 translate-x-10',
    'slide-right': 'opacity-0 -translate-x-10',
    'scale-up': 'opacity-0 scale-95',
    'piece-by-piece': 'opacity-0',
  };

  const animationClasses = animations[animationType] || animations['fade-up'];
  const sectionRef = React.useRef<HTMLDivElement>(null);
  
  // Combine refs
  const setRefs = (element: HTMLDivElement | null) => {
    if (ref.current !== null && typeof ref.current === 'object') {
      // @ts-ignore - assigning to a ref
      ref.current = element;
    } else if (typeof ref.current === 'function') {
      ref.current(element);
    }
    sectionRef.current = element;
  };

  return (
    <div
      ref={setRefs}
      className={cn(
        className,
        animationClasses,
        state === 'visible' && 'transition-all motion-reduce:transition-none',
        state === 'visible' && 'opacity-100 translate-y-0 translate-x-0 scale-100'
      )}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
    </div>
  );
}
