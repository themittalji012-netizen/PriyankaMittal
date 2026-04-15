import { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { useTypewriter } from '@/hooks/useTypewriter';

export default function HomeSection() {
  const [subtitleStarted, setSubtitleStarted] = useState(false);

  // Main name typing animation - Now only typing "Mittal"
  const { displayedText: mittalText, isComplete: mittalComplete } = useTypewriter({
    text: 'yanka Mittal', // Only the part that loops
    speed: 80,
    delay: 800,
    loop: true,
    pause: 3000,
    onComplete: () => {
      if (!subtitleStarted) setSubtitleStarted(true);
    },
  });

  // Subtitle typing animation with Loop
  const { displayedText: subtitleText } = useTypewriter({
    text: 'CA Finalist with clarity, confidence, and ambition',
    speed: 40,
    delay: 1000,
    loop: true,
    pause: 4000,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const blinkVariants = {
    blink: {
      opacity: [1, 1, 0, 0],
      transition: { duration: 0.8, repeat: Infinity },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background to-secondary/10 pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center max-w-4xl relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-white">
            <span className="bg-linear-to-r from-white via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
              {/* "Priyanka" stays static, "Mittal" types */}
              Pri{mittalText}
            </span>
            
            {/* The cursor now blinks after the typing part */}
            {!mittalComplete && (
              <motion.span
                variants={blinkVariants}
                animate="blink"
                className="inline-block w-1 h-12 md:h-20 bg-cyan-400 ml-2 align-middle"
              />
            )}
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8 min-h-12">
          <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide">
            {subtitleText}
          </p>
        </motion.div>

        <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
           CA Finalist with a strong interest in finance, audit, and taxation, focused on building practical expertise and delivering accurate, value-driven insights.
        </motion.p>

        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="https://drive.google.com/drive/folders/14JdKMNEU06lRPcFoQo2VTutetD77yeWJ?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contents"
          >
            <MagneticButton variant="primary">
              Download Resume
            </MagneticButton>
          </a>

          <MagneticButton 
            variant="secondary" 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}