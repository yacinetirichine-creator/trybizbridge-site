'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Petit délai pour ne pas agresser l'utilisateur dès l'arrivée
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    // Ici, vous pourriez initialiser vos scripts d'analytics (GA4, Pixel, etc.)
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍪</span>
                <h3 className="font-bold text-gray-900">Cookies & Confidentialité</h3>
              </div>
              <button 
                onClick={handleDecline}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. 
              Vos données sont protégées conformément au RGPD.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                Accepter tout
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Refuser
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <a href="/fr/confidentialite" className="text-xs text-gray-400 hover:text-primary underline decoration-dotted">
                En savoir plus sur notre politique
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
