'use client';

import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-br from-gray-50 to-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-2xl shadow-gray-200/50 flex items-center justify-center">
        
        {/* Background Abstract Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[length:30px_30px]"></div>

        {/* Animated Network Nodes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <Node key={i} index={i} />
          ))}
        </div>

        {/* Central Message */}
        <div className="relative z-10 text-center p-10 backdrop-blur-md bg-white/60 rounded-3xl border border-white/50 shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connectez votre <span className="text-primary">Business</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
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
  const duration = 15 + Math.random() * 20;

  return (
    <motion.div
      className="absolute w-3 h-3 bg-primary/80 rounded-full"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
      }}
      animate={{
        x: [0, Math.random() * 100 - 50, 0],
        y: [0, Math.random() * 100 - 50, 0],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Connection Lines (Simulated) */}
      <div className="absolute top-1/2 left-1/2 w-[200px] h-[1px] bg-gradient-to-r from-primary/20 to-transparent origin-left transform -rotate-45 opacity-30" />
      <div className="absolute top-1/2 left-1/2 w-[150px] h-[1px] bg-gradient-to-r from-primary/10 to-transparent origin-left transform rotate-12 opacity-30" />
    </motion.div>
  );
}
