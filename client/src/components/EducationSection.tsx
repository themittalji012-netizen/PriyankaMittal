import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, GraduationCap, Briefcase } from 'lucide-react';

const educationData = [
  {
    id: 1,
    year: 'NOV 2025 - PRESENT',
    title: 'Consulting & Audit Associate (Articleship)',
    institution: 'DKBS & Co. (Chartered Accountants)',
    description: 'Driving value through statutory audits, complex tax advisory, and financial compliance. Specialized in identifying fiscal risks and optimizing reporting frameworks for diverse corporate clients.',
    icon: Briefcase,
  },
  {
    id: 2,
    year: 'MAY - 2025',
    title: 'CA Intermediate',
    institution: 'Institute of Chartered Accountants of India (ICAI)',
    description: 'Advanced studies in audit, taxation, financial reporting, and management accounting.',
    icon: Award,
  },
  {
    id: 3,
    year: 'MAY - 2024',
    title: 'CA Foundation',
    institution: 'Institute of Chartered Accountants of India (ICAI)',
    description: 'Fundamental knowledge in accounting, law, and business management.',
    icon: Award,
  },
  {
    id: 4,
    year: '2023 - 2026',
    title: 'Bachelor of Commerce (B.Com)',
    institution: 'Maharaja Agrasen University , Baddi ',
    description: 'Comprehensive business education with specialization in accounting and finance.',
    icon: GraduationCap,
  },
  {
    id: 5,
    year: '2022 -2023',
    title: '12th Standard',
    institution: 'V.R Public School, Baddi (CBSE)',
    description: 'Advanced studies in commerce with distinction in accounting and economics.',
    icon: BookOpen,
  },
  {
    id: 6,
    year: '2020 -2021',
    title: '10th Standard',
    institution: 'V.R Public School, Baddi (CBSE)',
    description: 'Foundation in academics with focus on mathematics and commerce subjects.',
    icon: BookOpen,
  },
];

export default function EducationSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-24 px-4 md:px-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none" />

      <motion.div
        className="absolute top-40 right-20 w-80 h-80 bg-accent/3 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container max-w-4xl relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Journey & Qualifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-6">
            A comprehensive journey through academic excellence and professional certification, building a strong foundation in chartered accountancy.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-cyan-400/40 rounded-full origin-left"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-400 to-cyan-400/10 origin-top"
          />

          <div className="space-y-8 md:space-y-16">
            {educationData.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative md:pl-40"
                >
                  {/* Timeline Dot - Desktop Only */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{
                      delay: index * 0.15 + 0.3,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    className="hidden md:flex absolute left-0 top-6 w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full items-center justify-center shadow-lg shadow-cyan-400/30 border-4 border-background"
                  >
                    <motion.div
                      animate={inView ? { rotate: 360 } : { rotate: 0 }}
                      transition={{
                        delay: index * 0.15 + 0.5,
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      <IconComponent className="text-white" size={28} />
                    </motion.div>
                  </motion.div>

                  {/* Card Content */}
                  <motion.div
                    whileHover={{
                      y: -8,
                      boxShadow: '0 20px 60px rgba(16, 185, 129, 0.15)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700/50 overflow-hidden group"
                  >
                    {/* MOBILE ICON - Moved inside the card */}
                    <div className="md:hidden flex items-center justify-center w-10 h-10 mb-4 bg-cyan-400 rounded-lg shadow-lg">
                       <IconComponent className="text-white" size={20} />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <motion.h3
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: index * 0.15 + 0.4 }}
                            className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300"
                          >
                            {item.title}
                          </motion.h3>
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: index * 0.15 + 0.45 }}
                            className="text-cyan-400 font-semibold text-sm"
                          >
                            {item.institution}
                          </motion.p>
                        </div>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.15 + 0.5 }}
                            className="text-sm font-bold text-cyan-400 mt-3 md:mt-0 px-4 py-2 bg-cyan-400/10 rounded-full inline-block border border-cyan-400/30 self-start"
                          >
                            {item.year}
                          </motion.span>
                      </div>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: index * 0.15 + 0.5 }}
                        className="text-slate-300 text-sm leading-relaxed"
                      >
                        {item.description}
                      </motion.p>

                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: '100%' } : { width: 0 }}
                        transition={{ delay: index * 0.15 + 0.6, duration: 0.8 }}
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-cyan-400/40 rounded-b-xl"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-12 border-t border-slate-700/30 text-center"
        >
          <p className="text-muted-foreground text-lg text-slate-400">
            Learning with consistency and purpose
          </p>
        </motion.div>
      </div>
    </section>
  );
}