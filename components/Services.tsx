import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Brand Strategy",
    description: "We define your brand's core purpose, positioning, and voice to separate you from the noise. We build the foundation that all communication stands upon.",
    tags: ["Research", "Positioning", "Identity System", "Tone of Voice"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "We design immersive digital products that are not only beautiful but intuitive. User-centric design that converts and delights at every touchpoint.",
    tags: ["Web Design", "App Design", "Prototyping", "Design Systems"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Development",
    description: "Clean code and robust architecture. We bring designs to life with performance, accessibility, and scalability in mind using the latest tech stacks.",
    tags: ["Frontend", "Backend", "eCommerce", "WebGL/Three.js"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Content Production",
    description: "Visual storytelling that moves audiences. From photography to motion graphics, we create assets that amplify your brand's narrative.",
    tags: ["Photography", "Video", "3D Motion", "Copywriting"],
    image: "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?q=80&w=2670&auto=format&fit=crop"
  }
];

const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="services" className="pt-24 pb-32 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-accent uppercase tracking-widest text-sm mb-4">Our Expertise</p>
            <h2 className="font-display font-bold text-[8.5vw] md:text-7xl leading-none">
              COMPREHENSIVE <br /> SOLUTIONS.
            </h2>
          </div>
          <div className="hidden md:block pb-2">
             <p className="text-white/40 max-w-sm text-sm text-right">
                We combine creative thinking with technical excellence to deliver results that matter.
             </p>
          </div>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="border-t border-white/10 last:border-b"
            >
              <button
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className="w-full py-10 flex items-center justify-between text-left group hover:bg-white/5 transition-colors px-4 md:px-8 focus:outline-none"
              >
                <div className="flex items-center gap-8">
                  <span className="text-sm font-mono text-white/30 hidden md:block">
                    0{service.id}
                  </span>
                  <h3 className={`text-3xl md:text-5xl font-display font-medium transition-colors duration-300 ${expandedId === service.id ? 'text-white' : 'text-white/50 group-hover:text-white'}`}>
                    {service.title}
                  </h3>
                </div>
                <div className={`p-4 rounded-full border transition-all duration-300 ${expandedId === service.id ? 'bg-accent border-accent text-white rotate-180' : 'border-white/20 text-white'}`}>
                  {expandedId === service.id ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden bg-white/5"
                  >
                    <div className={`p-8 md:p-12 flex flex-col gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      
                      {/* Visual Content Side */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="w-full md:w-1/2"
                      >
                         <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-sm group cursor-none">
                            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10"></div>
                            <img 
                              src={service.image} 
                              alt={service.title} 
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            />
                         </div>
                      </motion.div>

                      {/* Text Content Side */}
                      <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h4 className="text-2xl font-display font-bold mb-6 text-white">
                          Building the future of <span className="text-accent">{service.title}</span>
                        </h4>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                          {service.description}
                        </p>
                        
                        <div className="mb-8">
                          <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">Capabilities</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map(tag => (
                              <span key={tag} className="px-4 py-2 bg-black/40 border border-white/10 rounded-full text-xs uppercase tracking-wider text-white hover:border-accent/50 transition-colors">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a href="#contact" className="inline-flex items-center gap-2 text-sm uppercase font-bold tracking-widest text-accent hover:text-white transition-colors group self-start">
                          Start a Project <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;