import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 container mx-auto px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent uppercase tracking-[0.3em] text-sm mb-8 font-bold"
        >
          Project Inquiry
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-display font-black text-6xl md:text-9xl leading-[0.9] mb-12 tracking-tighter"
        >
          READY TO <br />
          <span className="text-white/20 hover:text-white transition-colors duration-700 cursor-none">SCALE UP?</span>
        </motion.h2>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative inline-block"
        >
          <div className="absolute inset-0 bg-accent blur-[60px] opacity-20 animate-pulse"></div>
          <a 
            href="mailto:hello@halleo.com"
            className="relative z-10 inline-block group"
          >
            <button className="relative px-16 py-8 bg-white text-black rounded-full font-bold text-xl uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 overflow-hidden" data-cursor="hover">
              <span className="relative z-10 group-hover:scale-110 inline-block transition-transform duration-300">Start the Dialogue</span>
            </button>
          </a>
        </motion.div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left border-t border-white/10 pt-16">
            <div className="group">
                <h4 className="text-xs text-white/40 uppercase tracking-[0.2em] mb-4 group-hover:text-accent transition-colors">Contact</h4>
                <a href="mailto:hello@halleo.com" className="text-xl md:text-2xl font-display font-bold hover:text-white/60 transition-colors">hello@halleo.com</a>
            </div>
            <div className="group">
                <h4 className="text-xs text-white/40 uppercase tracking-[0.2em] mb-4 group-hover:text-accent transition-colors">Call Us</h4>
                <a href="tel:+15550000000" className="text-xl md:text-2xl font-display font-bold hover:text-white/60 transition-colors">+1 (555) HAL-LEO1</a>
            </div>
             <div className="group">
                <h4 className="text-xs text-white/40 uppercase tracking-[0.2em] mb-4 group-hover:text-accent transition-colors">Headquarters</h4>
                <p className="text-xl md:text-2xl font-display font-bold text-white">Madrid, Spain<br/><span className="text-white/50 text-base font-sans font-normal">Available Worldwide</span></p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;