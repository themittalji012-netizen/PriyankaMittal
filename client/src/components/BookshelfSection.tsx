import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const books = [
  {
  id: 1,
  title: 'Rich Dad Poor Dad',
  author: 'Robert Kiyosaki',
  category: 'Financial Literacy',
  rating: 5,
  description: 'A fundamental guide that redefines the relationship between income and assets, emphasizing financial independence through investing.',
  coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg',
},,
  {
    id: 2,
    title: 'Psychology of Money',
    author: 'Morgan Housel',
    category: 'Financial Behavior',
    rating: 5,
    description: 'Explores how emotions and psychology shape our financial decisions.',
    coverImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663026883998/DFe6GETEsFqsu5d67uuwcC/psychology-money-cover-BAKo2YvkaD9VNxKGYzhCEi.webp',
  },
];

export default function BookshelfSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section
      id="bookshelf"
      ref={ref}
      className="py-24 px-4 md:px-0 relative overflow-hidden"
    >
      {/* Dark background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20 pointer-events-none" />

      <div className="container max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Bookshelf</h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            Books that inspire my financial thinking and professional growth. Each selection reflects my commitment to continuous learning and excellence in chartered accountancy.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-cyan-400/40 rounded-full mt-6 origin-left"
          />
        </motion.div>

        {/* Books Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              variants={itemVariants}
              className="group"
            >
              {/* Book Card Container - Professional Layout */}
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50 p-6 flex flex-col"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/0 via-transparent to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

                {/* Currently Reading Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="absolute top-6 right-6 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 z-20"
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Currently Reading
                </motion.div>

                {/* Content Wrapper */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Book Cover Image - Left Side */}
                  <div className="mb-6 flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ delay: index * 0.2 + 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="h-64 w-auto rounded-lg shadow-xl border-2 border-slate-700/50 object-cover"
                      />
                      {/* Image shine effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="mb-3"
                  >
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                      {book.category}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.35 }}
                    className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300"
                  >
                    {book.title}
                  </motion.h3>

                  {/* Author */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                    className="text-slate-400 text-sm mb-4"
                  >
                    {book.author}
                  </motion.p>

                  {/* Star Rating */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.45 }}
                    className="flex gap-1 mb-4"
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: index * 0.2 + 0.5 + i * 0.05 }}
                      >
                        <Star
                          size={16}
                          className={i < book.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow"
                  >
                    {book.description}
                  </motion.p>

                  
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
