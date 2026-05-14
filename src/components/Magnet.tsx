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

  const resetPosition = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const isWithinPadding = 
        Math.abs(distanceX) < width / 2 + padding && 
        Math.abs(distanceY) < height / 2 + padding;

      if (isWithinPadding) {
        setIsHovered(true);
        setPosition({
          x: distanceX / strength,
          y: distanceY / strength,
        });
      } else {
        resetPosition();
      }
    };

    const handleMouseLeaveWindow = (e: MouseEvent) => {
      if (!e.relatedTarget && !e.toElement) {
        resetPosition();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeaveWindow);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeaveWindow);
    };
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      onMouseLeave={resetPosition}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
