'use client';
import { useRef, type MouseEventHandler, type ReactNode } from 'react';
// Adapted from React Bits SpotlightCard: https://reactbits.dev/components/spotlight-card
export default function SpotlightCard({ children }: { children: ReactNode }) {
 const ref = useRef<HTMLDivElement>(null);
 const move: MouseEventHandler<HTMLDivElement> = event => {
  if (!ref.current) return;
  const rect = ref.current.getBoundingClientRect();
  ref.current.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
  ref.current.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
 };
 return <div ref={ref} onMouseMove={move} className="spotlight-card h-full">{children}</div>;
}
