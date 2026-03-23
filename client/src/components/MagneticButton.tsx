import { motion } from 'framer-motion';
import { useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function MagneticButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
    const maxDistance = 100;

    if (distance < maxDistance) {
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const force = (maxDistance - distance) / maxDistance;
      const moveX = Math.cos(angle) * force * 15;
      const moveY = Math.sin(angle) * force * 15;

      setPosition({ x: moveX, y: moveY });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses =
    variant === 'primary'
      ? 'px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-lg'
      : 'px-8 py-3 border-2 border-accent text-accent rounded-lg font-medium transition-all duration-300 hover:bg-accent/5';

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </motion.button>
  );
}
