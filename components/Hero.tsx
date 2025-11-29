import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax only for the central content
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  return (
    <section id="home" ref={containerRef} className="relative h-screen flex flex-col justify-between overflow-hidden pt-32 pb-10 md:pb-12">
       {/* Background Ambiance */}
       <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen opacity-30" />
       </div>

       {/* Main Content with Parallax */}
       <motion.div style={{ y, opacity }} className="container mx-auto px-6 z-10 relative flex-grow flex flex-col justify-center items-center">
          
          <div className="flex flex-col items-center w-full">
            <div className="w-full text-center">
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col relative z-20"
              >
                <h1 className="font-display font-black text-[9vw] md:text-[10vw] leading-[0.9] tracking-tighter uppercase text-white mix-blend-difference">
                  We Build <br />
                  <span className="text-transparent stroke-text hover:text-white transition-colors duration-500 cursor-default">Digital</span> <br />
                  Stories
                </h1>
              </motion.div>
            </div>

            <div className="w-full flex justify-center mt-12 relative z-20">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5, duration: 1 }}
                 className="flex flex-col items-center text-center max-w-xl"
               >
                 <p className="text-white/80 md:text-white/60 text-lg leading-relaxed mb-8 font-light">
                   Transforming brands through data-driven strategy and high-end aesthetics. We don't just make you look good; we make you impossible to ignore.
                 </p>
                 <a href="#contact" className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-accent hover:text-white transition-colors cursor-pointer">
                    Start Project
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                       <ArrowDownRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                 </a>
               </motion.div>
            </div>
          </div>
       </motion.div>

       {/* Bottom Bar - Static / No Parallax to prevent displacement issues */}
       <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="container mx-auto px-6 w-full border-t border-white/10 pt-6 flex justify-between items-center relative z-20 mt-auto"
        >
           <div className="hidden md:flex gap-16">
              <div>
                 <span className="block text-xs text-white/40 uppercase tracking-widest mb-1">Location</span>
                 <span className="text-sm font-medium">Madrid / Worldwide</span>
              </div>
              <div>
                 <span className="block text-xs text-white/40 uppercase tracking-widest mb-1">Focus</span>
                 <span className="text-sm font-medium">Growth & Branding</span>
              </div>
           </div>
           
           <div className="animate-spin-slow opacity-60 hover:opacity-100 transition-opacity ml-auto md:ml-0">
             <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="circlePath" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" fill="none" />
                <text className="text-[11px] font-bold uppercase tracking-[0.22em] fill-white">
                   <textPath href="#circlePath" startOffset="0%">Scroll Down • Scroll Down • </textPath>
                </text>
             </svg>
           </div>
        </motion.div>

       <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
        }
        @media (min-width: 768px) {
           .stroke-text {
             -webkit-text-stroke: 2px rgba(255, 255, 255, 0.8);
           }
        }
        @media (min-width: 1024px) {
           .stroke-text {
             -webkit-text-stroke: 3px rgba(255, 255, 255, 0.8);
           }
        }
       `}</style>
    </section>
  );
};

export default Hero;