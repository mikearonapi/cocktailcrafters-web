// app/components/LoadingAnimations.tsx
"use client";

import { useEffect, useState } from 'react';

export function LoadingScreen({ 
  questionnaire 
}: { 
  questionnaire?: 'personalized' | 'knowledge' | 'pairings' | 'recipe' 
}) {
  const [isShaking, setIsShaking] = useState(false);
  const [rotation, setRotation] = useState(10);

  useEffect(() => {
    // Start shaking animation
    setIsShaking(true);
    
    // Rotation animation for recipe
    if (questionnaire === 'recipe') {
      const interval = setInterval(() => {
        setRotation(prev => prev === 10 ? -10 : 10);
      }, 800);
      return () => clearInterval(interval);
    }
  }, [questionnaire]);

  const getContent = () => {
    switch (questionnaire) {
      case 'personalized':
        return {
          icon: <ShakerIcon isShaking={isShaking} />,
          text: "Mike is mixing up your drink options"
        };
      case 'knowledge':
        return {
          icon: (
            <div className={`text-6xl transition-transform duration-1000 ${isShaking ? 'scale-110' : 'scale-100'}`}>
              📚
            </div>
          ),
          text: "Mike is combing through the library"
        };
      case 'pairings':
        return {
          icon: (
            <div className={`text-6xl transition-transform duration-800 ${isShaking ? '-translate-y-2' : 'translate-y-0'}`}>
              🍴
            </div>
          ),
          text: "Mike is analyzing your meal pairing"
        };
      case 'recipe':
        return {
          icon: (
            <div 
              className="text-6xl transition-transform duration-800"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              📄
            </div>
          ),
          text: "Mike is finalizing your recipe"
        };
      default:
        return {
          icon: <LoadingIndicator />,
          text: "Loading..."
        };
    }
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {content.icon}
        <p className="text-lg font-medium text-gray-800 px-8">
          {content.text}
        </p>
        <LoadingIndicator />
      </div>
    </div>
  );
}

function ShakerIcon({ isShaking }: { isShaking: boolean }) {
  return (
    <div 
      className={`transition-transform duration-300 ${
        isShaking ? 'animate-shake' : ''
      }`}
    >
      <svg
        width="64"
        height="96"
        viewBox="0 0 64 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cap */}
        <rect
          x="16"
          y="0"
          width="32"
          height="12"
          rx="6"
          fill="#9CA3AF"
        />
        {/* Body */}
        <rect
          x="10"
          y="12"
          width="44"
          height="84"
          rx="8"
          fill="#D1D5DB"
        />
        {/* Stripes */}
        <rect x="18" y="30" width="28" height="1" fill="white" opacity="0.3" />
        <rect x="18" y="50" width="28" height="1" fill="white" opacity="0.3" />
        <rect x="18" y="70" width="28" height="1" fill="white" opacity="0.3" />
      </svg>
    </div>
  );
}

export function LoadingIndicator() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex space-x-1 justify-center">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full bg-primary transition-all duration-300 ${
            index === activeIndex ? 'scale-100 opacity-100' : 'scale-75 opacity-50'
          }`}
          style={{
            animationDelay: `${index * 200}ms`
          }}
        />
      ))}
    </div>
  );
}