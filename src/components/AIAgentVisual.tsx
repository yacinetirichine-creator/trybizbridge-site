'use client';

import { motion } from 'framer-motion';

export default function AIAgentVisual() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center perspective-1000">
      {/* Central Core */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 0 20px rgba(12, 124, 106, 0.3)',
            '0 0 50px rgba(12, 124, 106, 0.6)',
            '0 0 20px rgba(12, 124, 106, 0.3)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-light relative z-10 flex items-center justify-center"
      >
        <div className="text-white text-4xl font-bold">AI</div>
      </motion.div>

      {/* Orbiting Rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute border border-primary/30 rounded-full"
          style={{
            width: `${200 + i * 80}px`,
            height: `${200 + i * 80}px`,
            borderStyle: i % 2 === 0 ? 'dashed' : 'solid',
          }}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
            rotateX: [0, 10, 0, -10, 0],
            rotateY: [0, 10, 0, -10, 0],
          }}
          transition={{
            rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}

      {/* Floating Data Nodes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border border-primary/20 z-20"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: Math.cos(i * 60 * (Math.PI / 180)) * 180,
            y: Math.sin(i * 60 * (Math.PI / 180)) * 180,
            opacity: 1,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.2,
            scale: { duration: 2, repeat: Infinity, repeatDelay: i * 0.5 },
          }}
        >
          {['📄', '💰', '🤝', '📊', '🔔', '⚡'][i]}
        </motion.div>
      ))}

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1="50%"
            y1="50%"
            x2="50%"
            y2="50%"
            stroke="#0C7C6A"
            strokeWidth="2"
            strokeOpacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{
              x2: `${50 + Math.cos(i * 60 * (Math.PI / 180)) * 35}%`,
              y2: `${50 + Math.sin(i * 60 * (Math.PI / 180)) * 35}%`,
              pathLength: [0, 1, 0],
              strokeOpacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Scanning Beam */}
      <motion.div
        className="absolute w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
