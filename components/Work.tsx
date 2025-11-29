import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight, Play, Pause } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "URBAN SHIFT",
    category: "Branding / Strategy",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop",
    video: "https://raw.githubusercontent.com/lleonartfm/BODABODA/cdead3146f2a1ef489ffc2f0e3e2623289c249f3/IMG_9133.MOV",
    year: "2023"
  },
  {
    id: 2,
    title: "NEON HORIZON",
    category: "Web Design / 3D",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    video: "https://raw.githubusercontent.com/lleonartfm/BODABODA/afd25ae021dbe322f2ff6aa4d313a6c266bedf9e/IMG_7802.MOV",
    year: "2024"
  },
  {
    id: 3,
    title: "FEZ LAYERS",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop",
    video: "https://raw.githubusercontent.com/lleonartfm/BODABODA/09c56dcdaba53c262ae284b76bed5c1c2f562e92/IMG_4939.mov",
    year: "2024"
  },
  {
    id: 4,
    title: "MONO CULTURE",
    category: "Art Direction",
    image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2670&auto=format&fit=crop",
    video: "https://raw.githubusercontent.com/lleonartfm/BODABODA/98e3bcc87ec64bc86bca96b4f154a89ed87d37ad/IMG_0325.mov",
    year: "2023"
  }
];

const WorkItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group relative ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={`#case-study-${project.id}`} className="block relative cursor-none">
        <div className="relative overflow-hidden mb-8 rounded-sm aspect-[4/3] bg-neutral-900">
           {/* Overlay Darkener */}
           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />

           {/* View Case Study Button - Centered */}
           <div className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
              <div className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold uppercase tracking-widest text-xs md:text-sm group-hover:bg-accent group-hover:border-accent transition-all duration-300 shadow-2xl">
                View Case Study
              </div>
           </div>

           {/* Video Control - Bottom Right */}
           {project.video && (
             <button
               onClick={togglePlay}
               className={`absolute bottom-6 right-6 z-30 w-12 h-12 flex items-center justify-center bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-white transition-all duration-300 hover:bg-white hover:text-black ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
               title={isPlaying ? "Pause" : "Play"}
             >
               {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
             </button>
           )}

           {/* Media */}
           {project.video ? (
             <video 
               ref={videoRef}
               src={project.video}
               poster={project.image}
               autoPlay
               loop
               muted
               playsInline
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
             />
           ) : (
             <img 
               src={project.image} 
               alt={project.title}
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
             />
           )}
        </div>
      </a>

      {/* Info */}
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl md:text-5xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3">
              <span className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white/60 group-hover:border-accent group-hover:text-accent transition-colors">
                  {project.category}
              </span>
               <span className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white/60">
                  {project.year}
              </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Work: React.FC = () => {
  return (
    <section id="work" className="pt-32 pb-0 md:pb-16 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 border-b border-white/10 pb-8 text-center md:text-left">
        <h2 className="font-display font-black text-[10vw] md:text-8xl tracking-tighter leading-[0.9]">
          SELECTED <br/> 
          <span className="text-transparent stroke-text text-accent-outline">WORK</span>
        </h2>
        <a href="#" className="hidden md:flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] hover:text-accent transition-colors mt-8 md:mt-0 group">
          View All Cases <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"/>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-32">
        {projects.map((project, index) => (
          <WorkItem key={project.id} project={project} index={index} />
        ))}
      </div>
      
      <div className="mt-20 text-center md:hidden pb-12">
         <a href="#" className="inline-flex items-center gap-2 text-sm uppercase font-bold tracking-widest hover:text-accent transition-colors">
          View All Cases <ArrowUpRight size={16} />
        </a>
      </div>

       <style>{`
        .text-accent-outline {
             -webkit-text-stroke: 2px #FF3300;
             color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Work;