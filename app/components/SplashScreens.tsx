"use client";
import { useState, useEffect } from 'react';

export function SplashScreens({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(1);
  const [showLogo, setShowLogo] = useState(false);
  const [showMike, setShowMike] = useState(false);

  useEffect(() => {
    // Logo splash animation
    setTimeout(() => setShowLogo(true), 100);
    
    // Switch to Mike splash
    setTimeout(() => {
      setStage(2);
      setTimeout(() => setShowMike(true), 100);
    }, 1500);
    
    // Complete splash sequence
    setTimeout(() => {
      onComplete();
    }, 4500);
  }, [onComplete]);

  if (stage === 1) {
    return (
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#0d2633] to-[#051420] flex items-center justify-center">
        <div className={`transition-opacity duration-500 ${showLogo ? 'opacity-100' : 'opacity-0'}`}>
          {/* Logo placeholder - replace with your actual logo */}
          <div className="w-64 h-64 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center">
            <span className="text-white text-4xl font-bold">CC</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className={`transition-all duration-800 ${showMike ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="px-10 max-w-2xl">
          <div className="space-y-12">
            <div className="space-y-0">
              <h1 className="text-white text-[40px] font-bold tracking-wider">HI, I'M MIKE,</h1>
              <h1 className="text-white text-[40px] font-bold tracking-wider">YOUR AI</h1>
              <h1 className="text-white text-[40px] font-bold tracking-wider">MIXOLOGIST.</h1>
            </div>
            
            <div className="space-y-2">
              <p className="text-white text-xl tracking-[0.1em]">LET'S RAISE THE BAR.</p>
              <p className="text-white text-xl tracking-[0.1em]">TOGETHER.</p>
            </div>
          </div>
          
          {/* Mike avatar placeholder */}
          <div className="mt-16 flex justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}