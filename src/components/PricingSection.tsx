'use client';

import { motion } from 'framer-motion';
import { Users, DollarSign, CheckCircle, Star, ArrowRight } from 'lucide-react';

export default function PricingSection({ t, appUrl }: { t: any, appUrl: string }) {
  return (
    <section id="pricing" className="py-24 px-4 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            Tarifs
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-6"
          >
            {t('pricing.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {t('pricing.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Apporteur Plan */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-8 bg-white rounded-3xl border border-gray-200 hover:border-primary/50 transition-all hover:shadow-2xl group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Users className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{t('pricing.apporteur')}</h3>
                <p className="text-sm text-gray-500">Pour les connecteurs</p>
              </div>
            </div>
            
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-bold text-gray-900">{t('pricing.apporteur_price')}</span>
              <span className="text-gray-500 text-lg">{t('pricing.apporteur_period')}</span>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">{t('pricing.apporteur_desc')}</p>
            
            <div className="space-y-4 mb-8">
              {[
                t('pricing.apporteur_feature1'),
                t('pricing.apporteur_feature2'),
                t('pricing.apporteur_feature3'),
                t('pricing.apporteur_feature4'),
                t('pricing.apporteur_feature5'),
                t('pricing.apporteur_feature6')
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <a 
              href={appUrl}
              target="_blank"
              className="block w-full py-4 text-center bg-gray-900 text-white rounded-xl font-semibold text-lg hover:bg-gray-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('hero.cta_start')}
            </a>
          </motion.div>

          {/* Entreprise Plan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-8 bg-gray-900 rounded-3xl text-white hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-800"
          >
            {/* Badge Popular */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-primary to-primary-light text-white text-sm font-bold px-6 py-2 rounded-full flex items-center gap-2 shadow-lg shadow-primary/30">
                <Star className="w-4 h-4 fill-current" /> POPULAIRE
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-2">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <DollarSign className="w-7 h-7 text-primary-light" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{t('pricing.pro')}</h3>
                <p className="text-sm text-gray-400">Pour les entreprises</p>
              </div>
            </div>
            
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-bold text-white">{t('pricing.pro_price')}</span>
              <span className="text-gray-400 text-lg">{t('pricing.pro_period')}</span>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">{t('pricing.pro_desc')}</p>
            
            <div className="space-y-4 mb-8">
              {[
                t('pricing.pro_feature1'),
                t('pricing.pro_feature2'),
                t('pricing.pro_feature3'),
                t('pricing.pro_feature4'),
                t('pricing.pro_feature5'),
                t('pricing.pro_feature6')
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-primary-light" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <a 
              href={appUrl}
              target="_blank"
              className="block w-full py-4 text-center bg-gradient-to-r from-primary to-primary-light text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-primary/30 transition transform hover:-translate-y-1"
            >
              {t('hero.cta_start')} <ArrowRight className="inline ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Info supplémentaire */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 text-sm text-gray-500 bg-white px-8 py-4 rounded-full shadow-sm border border-gray-100">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              {t('pricing.commission_info')}
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              {t('pricing.no_hidden_fees')}
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              {t('pricing.cancel_anytime')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
