import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, CheckCircle } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Articleship',
    firm: 'Chartered Accountancy Firm',
    duration: '2024 - Present',
    competencies: ['Audit', 'Tax', 'GST', 'Financial Reporting', 'Compliance'],
    description: 'Gaining practical experience in audit procedures, tax compliance, and financial statement preparation.',
  },
];

export default function ExperienceSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 md:px-0 bg-secondary/30"
    >
      <div className="container max-w-4xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Briefcase className="text-accent" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-accent font-medium mb-1">{exp.firm}</p>
                  <p className="text-sm text-muted-foreground">{exp.duration}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Competencies */}
              <div className="mb-0">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Core Competencies
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.competencies.map((comp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      <CheckCircle size={14} />
                      {comp}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
