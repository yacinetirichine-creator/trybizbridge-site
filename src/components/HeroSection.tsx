'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import AIAgentVisual from './AIAgentVisual';

export default function HeroSection({ t, appUrl }: { t: any, appUrl: string }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-light/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div 
          style={{ y: y1 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
              🚀 {t('hero.badge') || "La plateforme #1 pour apporteurs d'affaires"}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
              <span className="text-primary block mt-2">
                {t('hero.highlight') || "Simplifié."}
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href={appUrl}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary-dark transition shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
              >
                {t('hero.cta_start')} <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:bg-gray-50 transition border-2 border-primary/20 flex items-center justify-center gap-2 group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                {t('hero.cta_demo')}
              </motion.button>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p>Rejoint par +2,000 professionnels</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Content (AI Agent) */}
        <motion.div 
          style={{ y: y2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-[100px]" />
          <AIAgentVisual />
          
          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 glass p-4 rounded-xl shadow-xl max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">💰</div>
              <div>
                <div className="text-xs text-gray-500">Commission</div>
                <div className="font-bold text-green-600">+ 1,250€</div>
              </div>
            </div>
            <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[70%] bg-green-500" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 -right-5 glass p-4 rounded-xl shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-semibold text-sm">Nouveau Lead Détecté</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
