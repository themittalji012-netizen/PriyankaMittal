import { motion } from 'framer-motion';

interface GradientDividerProps {
  className?: string;
}

export default function GradientDivider({ className = '' }: GradientDividerProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      className={`h-1 bg-gradient-to-r from-accent via-accent to-accent/20 rounded-full origin-left ${className}`}
    />
  );
}
