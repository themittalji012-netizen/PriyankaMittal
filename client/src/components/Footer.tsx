import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-4 md:px-0">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 4, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground">Priyanka Mittal</h3>
            <p className="text-sm text-muted-foreground">CA Finalist | B.Com</p>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {currentYear} Priyanka Mittal. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
