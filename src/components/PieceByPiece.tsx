
import React, { ReactNode, useEffect, useState, Children, cloneElement, isValidElement } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface PieceByPieceProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number; // delay between each child in ms
  baseDelay?: number; // initial delay before animations start
  duration?: number; // duration for each animation
  threshold?: number;
  rootMargin?: string;
  animationType?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up';
}

export default function PieceByPiece({
  children,
  className,
  staggerDelay = 100,
  baseDelay = 0,
  duration = 600,
  threshold = 0.1,
  rootMargin = '0px',
  animationType = 'fade-up',
}: PieceByPieceProps) {
  const { ref, state } = useScrollAnimation({ threshold, rootMargin, animateOnce: true });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Base animation styles
  const animations = {
    'fade-up': 'opacity-0 translate-y-10',
    'fade-in': 'opacity-0',
    'slide-left': 'opacity-0 translate-x-10',
    'slide-right': 'opacity-0 -translate-x-10',
    'scale-up': 'opacity-0 scale-95',
  };

  const animationClasses = animations[animationType] || animations['fade-up'];

  useEffect(() => {
    if (state === 'visible') {
      setShouldAnimate(true);
    }
  }, [state]);

  return (
    <div
      //@ts-ignore - ref is correctly typed but TS doesn't recognize it
      ref={ref}
      className={cn(className)}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        return cloneElement(child, {
          className: cn(
            child.props.className,
            animationClasses,
            shouldAnimate && 'transition-all opacity-100 translate-y-0 translate-x-0 scale-100'
          ),
          style: {
            ...child.props.style,
            transitionProperty: 'opacity, transform',
            transitionDuration: `${duration}ms`,
            transitionDelay: `${shouldAnimate ? baseDelay + index * staggerDelay : 0}ms`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          },
        });
      })}
    </div>
  );
}
