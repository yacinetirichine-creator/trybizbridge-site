'use client';

import { motion } from 'framer-motion';
import { Users, DollarSign, FileText, MessageSquare, Shield, Zap, Globe, BarChart } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function FeaturesSection({ t }: { t: any }) {
  const features = [
    { 
      icon: Users, 
      title: t('features.feature1_title'), 
      desc: t('features.feature1_desc'), 
      gradient: 'from-blue-500 to-cyan-400',
      shadow: 'shadow-blue-500/20'
    },
    { 
      icon: DollarSign, 
      title: t('features.feature2_title'), 
      desc: t('features.feature2_desc'), 
      gradient: 'from-emerald-500 to-teal-400',
      shadow: 'shadow-emerald-500/20'
    },
    { 
      icon: FileText, 
      title: t('features.feature3_title'), 
      desc: t('features.feature3_desc'), 
      gradient: 'from-violet-500 to-purple-400',
      shadow: 'shadow-violet-500/20'
    },
    { 
      icon: MessageSquare, 
      title: t('features.feature4_title'), 
      desc: t('features.feature4_desc'), 
      gradient: 'from-orange-500 to-amber-400',
      shadow: 'shadow-orange-500/20'
    },
    { 
      icon: Shield, 
      title: "Sécurité Maximale", 
      desc: "Vos données sont chiffrées et protégées selon les normes RGPD.", 
      gradient: 'from-red-500 to-rose-400',
      shadow: 'shadow-red-500/20'
    },
    { 
      icon: Zap, 
      title: "Matching IA", 
      desc: "Notre algorithme connecte instantanément les bons profils.", 
      gradient: 'from-yellow-400 to-orange-400',
      shadow: 'shadow-yellow-500/20'
    },
    { 
      icon: Globe, 
      title: "Multi-langues", 
      desc: "Interface disponible en 5 langues pour une portée internationale.", 
      gradient: 'from-cyan-500 to-blue-400',
      shadow: 'shadow-cyan-500/20'
    },
    { 
      icon: BarChart, 
      title: "Analytics", 
      desc: "Suivez vos performances en temps réel avec des tableaux de bord détaillés.", 
      gradient: 'from-indigo-500 to-blue-500',
      shadow: 'shadow-indigo-500/20'
    },
  ];

  return (
    <section id="features" className="py-24 px-4 bg-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="text-primary font-semibold tracking-wide uppercase text-xs">
              Fonctionnalités Clés
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            {t('features.title')}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Une suite complète d'outils conçus pour accélérer votre croissance et simplifier vos connexions.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="group relative p-8 bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/80 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 text-white ${feature.shadow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-7 h-7" strokeWidth={2} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed text-sm font-medium">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
