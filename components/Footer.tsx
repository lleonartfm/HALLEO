import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-neutral-950">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-display font-black text-2xl tracking-tighter">HALLEO</h3>
            <p className="text-white/30 text-xs uppercase tracking-widest">© {new Date().getFullYear()} HALLEO Agency.</p>
        </div>
        
        <div className="flex gap-8">
          {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map((social) => (
             <a key={social} href="#" className="text-white/50 hover:text-accent text-xs font-bold uppercase tracking-widest transition-colors relative group">
                {social}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
             </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;