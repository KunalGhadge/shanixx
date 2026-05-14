import React, { useState, useRef, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const resetPosition = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || !isHovered) return;

      // Only calculate rect once when hovered to save performance
      if (!rectRef.current) {
        rectRef.current = ref.current.getBoundingClientRect();
      }

      const { left, top, width, height } = rectRef.current;
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      if (Math.abs(distanceX) < padding && Math.abs(distanceY) < padding) {
        setPosition({ x: distanceX / strength, y: distanceY / strength });
      } else {
        resetPosition();
      }
    };

    const handleScroll = () => {
      rectRef.current = null; // Invalidate rect on scroll
      resetPosition();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHovered, padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      onMouseEnter={() => {
        setIsHovered(true);
        if (ref.current) rectRef.current = ref.current.getBoundingClientRect();
      }}
      onMouseLeave={() => {
        resetPosition();
        rectRef.current = null;
      }}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered ? activeTransition : inactiveTransition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};
