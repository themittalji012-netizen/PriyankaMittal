import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, CheckCircle, Send } from 'lucide-react';

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Replace YOUR_FORM_ID with the ID from Formspree
    const FORM_ID = "YOUR_FORM_ID"; 

    try {
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset to idle after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 px-4 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a question or want to collaborate? Feel free to reach out. I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <a href="mailto:priyankamittal2612@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Email Me</p>
                  <p className="text-white font-medium">priyankamittal2612@gmail.com</p>
                </div>
              </a>

              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Call Me</p>
                  <p className="text-white font-medium">+91 98XXX XXXXX</p>
                </div>
              </a>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <p className="text-sm text-slate-500 mb-4">Connect on Socials</p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/priyanka-mittal-729036301/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:border-cyan-400 hover:text-cyan-400 transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:border-cyan-400 hover:text-cyan-400 transition-all">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-cyan-500/10 rounded-2xl border border-cyan-500/20"
                >
                  <CheckCircle className="text-cyan-400 mb-4" size={60} />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Thank you, Priyanka will get back to you shortly.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-800 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? "Sending..." : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">Failed to send. Please try again.</p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}