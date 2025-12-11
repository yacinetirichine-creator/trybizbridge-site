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
    { icon: Users, title: t('features.feature1_title'), desc: t('features.feature1_desc'), color: 'bg-blue-500' },
    { icon: DollarSign, title: t('features.feature2_title'), desc: t('features.feature2_desc'), color: 'bg-green-500' },
    { icon: FileText, title: t('features.feature3_title'), desc: t('features.feature3_desc'), color: 'bg-purple-500' },
    { icon: MessageSquare, title: t('features.feature4_title'), desc: t('features.feature4_desc'), color: 'bg-orange-500' },
    { icon: Shield, title: "Sécurité Maximale", desc: "Vos données sont chiffrées et protégées selon les normes RGPD.", color: 'bg-red-500' },
    { icon: Zap, title: "Matching IA", desc: "Notre algorithme connecte instantanément les bons profils.", color: 'bg-yellow-500' },
    { icon: Globe, title: "Multi-langues", desc: "Interface disponible en 5 langues pour une portée internationale.", color: 'bg-cyan-500' },
    { icon: BarChart, title: "Analytics", desc: "Suivez vos performances en temps réel avec des tableaux de bord détaillés.", color: 'bg-indigo-500' },
  ];

  return (
    <section id="features" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            Fonctionnalités
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6"
          >
            {t('features.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Tout ce dont vous avez besoin pour gérer vos affaires, au même endroit.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
