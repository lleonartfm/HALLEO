
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  objectPosition?: string;
  linkedin?: string;
}

const team: TeamMember[] = [
  {
    name: "Alvaro Lleonart",
    role: "CTO & FOUNDER",
    image: "https://raw.githubusercontent.com/lleonartfm/BODABODA/40cc3431441415916b6911c63a1223f0223ccb67/tito.png",
    bio: "Trained in engineering and law, sharpened with an MBA and forged in the trenches of digital transformation, Álvaro Lleonart Morales stands as the kind of heavyweight strategist businesses call when they need to reinvent themselves. With a track record at BIG-players like Telefónica / Qaracter, he doesn’t just manage projects — he drives transformation, combining LegalTech know-how, industrial-engineering discipline and business acumen to reshape operations end-to-end.\n\nÁlvaro is known for cutting through complexity fast, aligning technology, regulation and business goals with ruthless clarity, and delivering results that matter. When you need somebody who can lead Digital Transformation with technical depth, legal awareness and strategic vision — no consultants, no excuses — you want Álvaro at the wheel.",
    objectPosition: "center top",
    linkedin: "https://www.linkedin.com/in/alvarolleonartmorales/"
  },
  {
    name: "Daniela Hawach",
    role: "CDO & FOUNDER",
    image: "https://raw.githubusercontent.com/lleonartfm/BODABODA/ba7407c7db712f25b69681c1e3f8dd84daefef99/1605608309724.jpeg",
    bio: "Trained in cutting-edge environments and currently driving Cyber Marketing for a major insurer, Daniela Hawach Torres has positioned herself at the forefront of B2B marketing and cybersecurity risk disruption. Backed by her tenure at Telefónica Seguros and a robust academic background, she doesn’t just market services — she reshapes markets, turning complexity into opportunity and regulation into competitive edge.\n\nDaniela excels at pinpointing latent risks, crafting strategies that resonate with stakeholders, and executing communications with razor-sharp clarity. Her international mindset, razor-focus on results and fearless approach to innovation make her the powerhouse teams call when they want impact — not promises.",
    objectPosition: "center top",
    linkedin: "https://www.linkedin.com/in/danielahawachtorres/"
  },
  {
    name: "Juan H. Torres",
    role: "CREATIVE DIRECTOR",
    image: "https://raw.githubusercontent.com/lleonartfm/BODABODA/ba7407c7db712f25b69681c1e3f8dd84daefef99/1745451576824.jpeg",
    bio: "Trained in the United States and sharpened in high-performance environments, Juan Hawach has become one of those rare hybrid profiles who blend strategic vision, creative instinct, and data intelligence with absolute precision. His work — already backed by organizations such as LALIGA, Babolat, and leading financial institutions — positions him as a marketer who doesn’t just execute campaigns, but elevates brands with measurable impact and a bold, modern approach.\n\nJuan stands out for his ability to diagnose problems fast, simplify complexity, and turn insights into action. He operates with an international mindset, a competitive drive, and a standard of excellence that pushes every project beyond expectations. Whether optimizing digital ecosystems, shaping high-conversion campaigns, or crafting strategies that move the needle, he is the talent teams want when they need ambition, clarity, and results — not excuses.",
    objectPosition: "center center",
    linkedin: "https://www.linkedin.com/in/juan-hawach/"
  }
];

const TeamCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col group">
      {/* 3D Card Container */}
      <div 
        className="relative aspect-[3/4] cursor-pointer perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          className="w-full h-full relative preserve-3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* FRONT FACE (Photo) */}
          <div className="absolute inset-0 backface-hidden bg-neutral-900 rounded-sm overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
             <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none"></div>
             
             {/* Interaction Hint Icon */}
             <div className={`absolute top-4 right-4 z-20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <div className="bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/20">
                  <RefreshCw size={14} className="text-white" />
                </div>
             </div>

             <img
               src={member.image}
               alt={member.name}
               className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
               style={{ objectPosition: member.objectPosition || 'center' }}
             />
          </div>

          {/* BACK FACE (Info/Bio) */}
          <div 
            className="absolute inset-0 backface-hidden bg-neutral-900 border border-white/10 rounded-sm p-6 md:p-8 flex flex-col items-start text-left"
            style={{ 
              backfaceVisibility: 'hidden', 
              transform: 'rotateY(180deg)' 
            }}
          >
             <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-50 pointer-events-none"></div>
             
             <RefreshCw size={14} className="text-white/20 absolute top-4 right-4" />
             
             <h4 className="relative font-display font-bold text-lg md:text-xl text-white mb-4 uppercase tracking-wider text-accent">{member.role}</h4>
             <div className="w-8 h-[2px] bg-white/20 mb-4 relative flex-shrink-0"></div>
             
             <div className="relative overflow-y-auto pr-2 scrollbar-hide w-full h-full">
                <p className="text-white/80 text-xs md:text-sm leading-relaxed font-light whitespace-pre-line">
                  {member.bio}
                </p>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Static Info Below - Directly touching the image bottom via border */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="relative border-t border-white/20 pt-6 group-hover:border-accent transition-colors duration-500 bg-neutral-950"
      >
        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2">{member.role}</span>
        <div className="flex items-center gap-4">
            <h3 className="text-4xl font-display font-bold text-white">{member.name}</h3>
            {member.linkedin && (
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/30 hover:text-[#0077b5] transition-colors duration-300 transform hover:scale-110"
                  title="LinkedIn Profile"
                >
                    <Linkedin size={24} strokeWidth={1.5} />
                </a>
            )}
        </div>
      </motion.div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

const Agency: React.FC = () => {
  return (
    <section id="agency" className="relative py-32 bg-neutral-950 overflow-hidden">
       {/* Ambient Background Effects */}
       <div className="absolute inset-0 pointer-events-none">
          {/* Moving Accent Blob */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1], 
              x: [0, 50, 0],
              y: [0, -50, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "linear" 
            }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen"
          />
          {/* Subtle White/Blue Blob */}
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.05, 0.08, 0.05],
              x: [0, -30, 0] 
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              ease: "linear" 
            }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] mix-blend-screen"
          />
       </div>

       <div className="container mx-auto px-6 relative z-10">
          <div className="mb-24 text-center md:text-left">
              <h2 className="font-display font-black text-[15vw] md:text-9xl tracking-tighter leading-[0.8] mb-8 text-white mix-blend-difference">
                THE <br/> <span className="text-accent">MINDS.</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light">
                We are a collective of dreamers and doers, united by a single obsession: elevating brands beyond the ordinary.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <TeamCard key={index} member={member} index={index} />
              ))}
          </div>
       </div>
    </section>
  );
};

export default Agency;
