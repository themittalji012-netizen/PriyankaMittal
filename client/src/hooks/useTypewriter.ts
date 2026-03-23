import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  pause?: number; // How long to stay on the full text before restarting
}

export const useTypewriter = ({ 
  text, 
  speed = 60, 
  delay = 0, 
  loop = true, 
  pause = 2000 
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    const startTyping = () => {
      // Reset states for a new loop
      setDisplayedText('');
      setIsComplete(false);

      timeout = setTimeout(() => {
        let index = 0;
        interval = setInterval(() => {
          if (index < text.length) {
            setDisplayedText(text.slice(0, index + 1));
            index++;
          } else {
            clearInterval(interval);
            setIsComplete(true);

            // If looping is enabled, wait 'pause' ms then restart
            if (loop) {
              setTimeout(startTyping, pause);
            }
          }
        }, speed);
      }, delay);
    };

    startTyping();

    // Clean up timers on unmount
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay, loop, pause]);

  return { displayedText, isComplete };
};