'use client';

import Spline from '@splinetool/react-spline';
import { useState } from 'react';

export default function Hero3D() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-b from-gray-50 to-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-2xl shadow-primary/5">
        
        {/* Loading State */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
              <p className="text-gray-400 text-sm font-medium">Chargement de l'expérience 3D...</p>
            </div>
          </div>
        )}

        <div className="w-full h-full">
          {/* 
             NOTE POUR L'UTILISATEUR:
             Pour changer l'animation 3D :
             1. Allez sur https://spline.design/
             2. Créez ou choisissez une scène
             3. Cliquez sur "Export" -> "Viewer" -> Copiez l'URL .splinecode
             4. Remplacez l'URL ci-dessous
          */}
          <Spline 
            onLoad={() => setLoading(false)}
            scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
