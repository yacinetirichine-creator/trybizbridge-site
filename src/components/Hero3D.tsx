'use client';

import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2rem] overflow-hidden border border-gray-700 shadow-2xl shadow-primary/20 flex items-center justify-center">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>

        {/* Animated Network Nodes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <Node key={i} index={i} />
          ))}
        </div>

        {/* Central Message */}
        <div className="relative z-10 text-center p-8 backdrop-blur-sm bg-gray-900/30 rounded-3xl border border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connectez votre <span className="text-primary-light">Business</span>
            </h3>
            <p className="text-gray-300 text-lg max-w-md mx-auto">
              Une plateforme unique pour créer des opportunités illimitées.
            </p>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}

function Node({ index }: { index: number }) {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const duration = 10 + Math.random() * 20;

  return (
    <motion.div
      className="absolute w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(47,184,154,0.6)]"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
      }}
      animate={{
        x: [0, Math.random() * 100 - 50, 0],
        y: [0, Math.random() * 100 - 50, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Connection Lines (Simulated) */}
      <div className="absolute top-1/2 left-1/2 w-[200px] h-[1px] bg-gradient-to-r from-primary/50 to-transparent origin-left transform -rotate-45 opacity-20" />
      <div className="absolute top-1/2 left-1/2 w-[150px] h-[1px] bg-gradient-to-r from-primary/30 to-transparent origin-left transform rotate-12 opacity-20" />
    </motion.div>
  );
}
