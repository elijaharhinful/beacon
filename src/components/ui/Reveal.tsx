'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: ReactNode;
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  className?: string;
  /** Entrance direction. */
  direction?: Direction;
  /** Delay in ms before the transition starts (use for stagger). */
  delay?: number;
  /** Transition duration in ms. */
  duration?: number;
  /** Animate only the first time it enters the viewport. */
  once?: boolean;
}

const offset: Record<Direction, string> = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
  none: '',
};

/**
 * Scroll-reveal wrapper. Fades + slides its children into place when they
 * enter the viewport, using an IntersectionObserver and CSS transitions
 * (no animation dependency). Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  as,
  className,
  direction = 'up',
  delay = 0,
  duration = 600,
  once = true,
}: RevealProps) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-[opacity,transform] ease-out will-change-transform motion-reduce:transition-none',
        visible ? 'opacity-100 translate-x-0 translate-y-0' : cn('opacity-0', offset[direction]),
        className,
      )}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
