import React from 'react';

const words = ["Strategy", "Branding", "Development", "Marketing", "Art Direction", "Motion", "Content"];

const Marquee: React.FC = () => {
  return (
    <div className="w-full py-12 md:py-20 border-y border-white/5 bg-neutral-950 overflow-hidden relative flex">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* Triple the content to ensure smooth looping without gaps */}
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <div key={index} className="flex items-center mx-8 md:mx-16">
            <span className="text-4xl md:text-7xl font-display font-bold uppercase text-transparent stroke-text hover:text-accent transition-colors duration-300 cursor-default">
              {word}
            </span>
            <span className="w-2 h-2 md:w-4 md:h-4 bg-white/20 rounded-full ml-8 md:ml-16"></span>
          </div>
        ))}
      </div>
      
      {/* Second marquee layer for absolute smoothness (optional technique, here utilizing just CSS animation on one long strip) */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
        .stroke-text:hover {
          -webkit-text-stroke: 1px #FF3300;
          color: #FF3300;
        }
      `}</style>
    </div>
  );
};

export default Marquee;