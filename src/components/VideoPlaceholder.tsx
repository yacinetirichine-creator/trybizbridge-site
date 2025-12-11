'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoPlaceholder() {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Découvrez BizBridge en Action
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-700 group cursor-pointer"
        >
          {/* Thumbnail Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center" />
            
            {/* Play Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative z-10 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-xl group-hover:bg-primary transition-colors duration-300"
            >
              <Play className="w-10 h-10 text-white fill-current ml-1" />
              
              {/* Pulse Effect */}
              <div className="absolute inset-0 rounded-full border border-white/30 animate-ping" />
            </motion.div>
          </div>

          {/* UI Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Démonstration Complète</h3>
                <p className="text-gray-300 text-sm">2:45 • HD</p>
              </div>
              <div className="px-3 py-1 bg-white/20 rounded text-xs font-mono">
                DEMO
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
