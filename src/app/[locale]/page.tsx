'use client';

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import ChatBot from '../../components/ChatBot';
import HeroSection from '../../components/HeroSection';
import FeaturesSection from '../../components/FeaturesSection';
import VideoPlaceholder from '../../components/VideoPlaceholder';
import HowItWorksSection from '../../components/HowItWorksSection';
import PricingSection from '../../components/PricingSection';

export default function HomePage() {
  const t = useTranslations();
  const params = useParams();
  const router = useRouter();
  const locale = params.locale as string;
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
  );
  const navBackdrop = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );
  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.05)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  const appUrl = 'https://app.trybizbridge.com';

  return (
    <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <motion.nav 
        style={{ 
          backgroundColor: navBackground,
          backdropFilter: navBackdrop,
          borderBottomColor: navBorder,
          borderBottomWidth: 1,
          borderBottomStyle: 'solid'
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">BizBridge</span>
            </div>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {['features', 'how', 'pricing', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors relative group"
                >
                  {t(`nav.${item === 'how' ? 'how_it_works' : item}`)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="flex gap-1 bg-gray-100/50 p-1 rounded-lg border border-gray-200/50">
                {['fr', 'en', 'ar', 'es', 'zh'].map((lang) => (
                  <button 
                    key={lang}
                    onClick={() => changeLanguage(lang)} 
                    className={`w-8 h-8 rounded-md text-sm flex items-center justify-center transition-all ${
                      locale === lang 
                        ? 'bg-white text-gray-900 shadow-sm font-medium' 
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-200/50'
                    }`}
                  >
                    {lang === 'fr' ? '🇫🇷' : lang === 'en' ? '🇬🇧' : lang === 'ar' ? '🇸🇦' : lang === 'es' ? '🇪🇸' : '🇨🇳'}
                  </button>
                ))}
              </div>

              <a 
                href={appUrl}
                target="_blank"
                className="hidden sm:inline-flex px-5 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t('nav.open_app')}
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      <main>
        <HeroSection t={t} appUrl={appUrl} />
        
        <VideoPlaceholder />
        
        <FeaturesSection t={t} />
        
        <HowItWorksSection t={t} />
        
        <PricingSection t={t} appUrl={appUrl} />

        {/* Contact Section (Simple Footer for now) */}
        <section id="contact" className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">{t('nav.contact')}</h2>
            <p className="text-gray-400 mb-8">contact@trybizbridge.com</p>
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} BizBridge. All rights reserved.
            </div>
          </div>
        </section>
      </main>

      <ChatBot locale={locale} />
    </div>
  );
}
