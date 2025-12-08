'use client';

import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';
import { motion } from 'framer-motion';
import { 
  Users, 
  DollarSign, 
  FileText, 
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Globe
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

export default function HomePage() {
  const t = useTranslations();
  const params = useParams();
  const router = useRouter();
  const locale = params.locale as string;

  const changeLanguage = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  const appUrl = 'https://app.trybizbridge.com';

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-xl text-emerald-700">BizBridge</span>
            </div>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-emerald-600 transition">{t('nav.home')}</a>
              <a href="#how" className="text-gray-600 hover:text-emerald-600 transition">{t('nav.how_it_works')}</a>
              <a href="#pricing" className="text-gray-600 hover:text-emerald-600 transition">{t('nav.pricing')}</a>
              <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition">{t('nav.contact')}</a>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <div className="flex gap-1">
                <button onClick={() => changeLanguage('fr')} className={`px-2 py-1 rounded text-sm ${locale === 'fr' ? 'bg-emerald-600 text-white' : 'bg-gray-100'}`}>🇫🇷</button>
                <button onClick={() => changeLanguage('en')} className={`px-2 py-1 rounded text-sm ${locale === 'en' ? 'bg-emerald-600 text-white' : 'bg-gray-100'}`}>🇬🇧</button>
                <button onClick={() => changeLanguage('ar')} className={`px-2 py-1 rounded text-sm ${locale === 'ar' ? 'bg-emerald-600 text-white' : 'bg-gray-100'}`}>🇸🇦</button>
                <button onClick={() => changeLanguage('es')} className={`px-2 py-1 rounded text-sm ${locale === 'es' ? 'bg-emerald-600 text-white' : 'bg-gray-100'}`}>🇪🇸</button>
                <button onClick={() => changeLanguage('zh')} className={`px-2 py-1 rounded text-sm ${locale === 'zh' ? 'bg-emerald-600 text-white' : 'bg-gray-100'}`}>🇨🇳</button>
              </div>

              <a 
                href={appUrl}
                target="_blank"
                className="hidden sm:inline-flex px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
              >
                {t('nav.open_app')}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href={appUrl}
              target="_blank"
              className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold text-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
            >
              {t('hero.cta_start')} <ArrowRight className="inline ml-2 w-5 h-5" />
            </a>
            <a 
              href="#how"
              className="px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition border-2 border-emerald-200"
            >
              {t('hero.cta_demo')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {t('features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: t('features.feature1_title'), desc: t('features.feature1_desc') },
              { icon: DollarSign, title: t('features.feature2_title'), desc: t('features.feature2_desc') },
              { icon: FileText, title: t('features.feature3_title'), desc: t('features.feature3_desc') },
              { icon: MessageSquare, title: t('features.feature4_title'), desc: t('features.feature4_desc') },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-emerald-50 rounded-2xl hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how" className="py-20 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {t('how.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* For Developers */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-emerald-600 mb-6">{t('how.for_developers')}</h3>
              <div className="space-y-4">
                {[t('how.step1_dev'), t('how.step2_dev'), t('how.step3_dev'), t('how.step4_dev')].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* For Companies */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-emerald-600 mb-6">{t('how.for_companies')}</h3>
              <div className="space-y-4">
                {[t('how.step1_comp'), t('how.step2_comp'), t('how.step3_comp'), t('how.step4_comp')].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {t('pricing.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="p-8 bg-gray-50 rounded-2xl border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('pricing.free')}</h3>
              <p className="text-gray-600 mb-6">{t('pricing.free_desc')}</p>
              <div className="space-y-3 mb-8">
                {[t('pricing.free_feature1'), t('pricing.free_feature2'), t('pricing.free_feature3'), t('pricing.free_feature4')].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <a 
                href={appUrl}
                target="_blank"
                className="block w-full py-3 text-center bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition"
              >
                {t('hero.cta_start')}
              </a>
            </div>

            {/* Pro Plan */}
            <div className="p-8 bg-emerald-600 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('pricing.pro')}</h3>
              <p className="text-emerald-100 mb-6">{t('pricing.pro_desc')}</p>
              <div className="space-y-3 mb-8">
                {[t('pricing.pro_feature1'), t('pricing.pro_feature2'), t('pricing.pro_feature3'), t('pricing.pro_feature4')].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-200" />
                    <span className="text-emerald-50">{feature}</span>
                  </div>
                ))}
              </div>
              <a 
                href={appUrl}
                target="_blank"
                className="block w-full py-3 text-center bg-white text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition"
              >
                {t('hero.cta_start')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-emerald-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            {t('cta.subtitle')}
          </p>
          <a 
            href={appUrl}
            target="_blank"
            className="inline-flex px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition shadow-lg"
          >
            {t('cta.button')} <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="font-bold text-xl text-white">BizBridge</span>
              </div>
              <p className="text-gray-400">{t('footer.description')}</p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.links')}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition">{t('footer.legal')}</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">{t('footer.privacy')}</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">{t('footer.terms')}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.contact')}</h4>
              <ul className="space-y-2">
                <li>contact@trybizbridge.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} BizBridge. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}