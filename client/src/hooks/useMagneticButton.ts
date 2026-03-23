import { useRef, useEffect } from 'react';

export function useMagneticButton() {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = ref.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
      const maxDistance = 100;

      if (distance < maxDistance) {
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const force = (maxDistance - distance) / maxDistance;
        const moveX = Math.cos(angle) * force * 20;
        const moveY = Math.sin(angle) * force * 20;

        button.style.transform = `translate(${moveX}px, ${moveY}px)`;
      } else {
        button.style.transform = 'translate(0, 0)';
      }
    };

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0, 0)';
    };

    document.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
}
