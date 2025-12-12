'use client';

import { motion } from 'framer-motion';
import { Handshake, Users, Building2, Globe2, Briefcase, Award } from 'lucide-react';

export default function AIAgentVisual() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center perspective-1000">
      {/* Central Core - Handshake for Business Relationship */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 30px rgba(12, 124, 106, 0.2)',
            '0 0 60px rgba(12, 124, 106, 0.4)',
            '0 0 30px rgba(12, 124, 106, 0.2)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-40 h-40 rounded-full bg-white border-4 border-primary/10 relative z-10 flex items-center justify-center shadow-2xl"
      >
        <div className="relative z-10 bg-gradient-to-br from-primary to-primary-light w-32 h-32 rounded-full flex items-center justify-center shadow-inner">
          <Handshake className="w-16 h-16 text-white" strokeWidth={1.5} />
        </div>
        
        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-20" />
      </motion.div>

      {/* Orbiting Rings - Representing Global Network */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute border border-gray-200 rounded-full"
          style={{
            width: `${240 + i * 100}px`,
            height: `${240 + i * 100}px`,
            borderStyle: 'solid',
            borderWidth: '1px',
            opacity: 0.3
          }}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
            scale: [1, 1.02, 1],
          }}
          transition={{
            rotate: { duration: 40 + i * 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}

      {/* Floating Business Nodes */}
      {[
        { icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
        { icon: Building2, color: 'text-purple-500', bg: 'bg-purple-50' },
        { icon: Globe2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { icon: Briefcase, color: 'text-orange-500', bg: 'bg-orange-50' },
        { icon: Award, color: 'text-yellow-500', bg: 'bg-yellow-50' },
        { icon: Handshake, color: 'text-cyan-500', bg: 'bg-cyan-50' }
      ].map((item, i) => (
        <motion.div
          key={`node-${i}`}
          className={`absolute w-14 h-14 ${item.bg} rounded-2xl shadow-lg flex items-center justify-center border border-white/50 z-20 backdrop-blur-sm`}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: Math.cos(i * 60 * (Math.PI / 180)) * 200,
            y: Math.sin(i * 60 * (Math.PI / 180)) * 200,
            opacity: 1,
            y: [
              Math.sin(i * 60 * (Math.PI / 180)) * 200,
              Math.sin(i * 60 * (Math.PI / 180)) * 200 - 10,
              Math.sin(i * 60 * (Math.PI / 180)) * 200
            ]
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
          }}
        >
          <item.icon className={`w-7 h-7 ${item.color}`} strokeWidth={1.5} />
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
            strokeWidth="1.5"
            strokeOpacity="0.1"
            strokeDasharray="4 4"
            animate={{
              x2: `${50 + Math.cos(i * 60 * (Math.PI / 180)) * 40}%`,
              y2: `${50 + Math.sin(i * 60 * (Math.PI / 180)) * 40}%`,
              strokeOpacity: [0.1, 0.3, 0.1],
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
    </div>
  );
}
