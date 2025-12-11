'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HowItWorksSection({ t }: { t: any }) {
  return (
    <section id="how" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            Processus
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mt-2"
          >
            {t('how.title')}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* For Developers */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-gray-50 to-white rounded-3xl -z-10 transform -rotate-1" />
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full" />
              {t('how.for_developers')}
            </h3>
            <div className="space-y-8">
              {[t('how.step1_dev'), t('how.step2_dev'), t('how.step3_dev'), t('how.step4_dev')].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:border-primary/50 group-hover:shadow-md transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <span className="text-primary font-bold relative z-10">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 pt-2 text-lg leading-relaxed">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* For Companies */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-bl from-gray-50 to-white rounded-3xl -z-10 transform rotate-1" />
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-gray-900 rounded-full" />
              {t('how.for_companies')}
            </h3>
            <div className="space-y-8">
              {[t('how.step1_comp'), t('how.step2_comp'), t('how.step3_comp'), t('how.step4_comp')].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-gray-900/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 pt-2 text-lg leading-relaxed">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
