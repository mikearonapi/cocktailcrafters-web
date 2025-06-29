// app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  SparklesIcon, 
  AcademicCapIcon, 
  ChartBarIcon,
  CheckCircleIcon,
  StarIcon,
  ChevronDownIcon
} from '@heroicons/react/24/solid';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">🍸</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Cocktail Crafters</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">How it Works</a>
            <a href="#mike" className="text-gray-700 hover:text-primary transition-colors">Meet Mike</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Craft Perfect Cocktails with
            <span className="text-primary block">Your AI Mixologist</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Get personalized cocktail recommendations, learn professional techniques, 
            and discover perfect pairings with Mike, your AI-powered bartender.
          </p>

          <a 
            href="https://apps.apple.com/app/cocktail-crafters" 
            className="inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              width={200}
              height={60}
              className="mx-auto"
            />
          </a>

          {/* Phone Mockup */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent blur-3xl"></div>
            <div className="relative bg-black rounded-[3rem] p-2 max-w-sm mx-auto shadow-2xl">
              <div className="bg-black rounded-[2.5rem] p-4">
                <div className="bg-gray-900 rounded-[2rem] h-[600px] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">🍸</span>
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-2">Cocktail Crafters</h3>
                    <p className="text-gray-400">Your AI Mixologist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Master Mixology
            </h2>
            <p className="text-xl text-gray-600">
              Professional bartending knowledge at your fingertips
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<SparklesIcon className="w-8 h-8 text-white" />}
              iconBg="bg-gradient-to-br from-teal to-teal-dark"
              title="Personalized Recipes"
              description="Get cocktail suggestions tailored to your taste preferences, mood, and available ingredients"
            />
            
            <FeatureCard
              icon={<AcademicCapIcon className="w-8 h-8 text-white" />}
              iconBg="bg-gradient-to-br from-green to-green-light"
              title="Expert Knowledge"
              description="Learn professional techniques, cocktail history, and advanced mixology methods"
            />
            
            <FeatureCard
              icon={<ChartBarIcon className="w-8 h-8 text-white" />}
              iconBg="bg-gradient-to-br from-purple to-purple-light"
              title="Perfect Pairings"
              description="Discover the ideal cocktail for any meal, occasion, or dietary preference"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <FeatureCard
              icon={<span className="text-2xl">📊</span>}
              iconBg="bg-gradient-to-br from-orange-500 to-orange-600"
              title="Track Your Journey"
              description="Monitor your mixology progress, save favorite recipes, and build your cocktail portfolio"
            />
            
            <FeatureCard
              icon={<span className="text-2xl">⏰</span>}
              iconBg="bg-gradient-to-br from-blue-500 to-blue-600"
              title="Smart Timers"
              description="Built-in timers for perfect shaking, stirring, and infusion techniques"
            />
            
            <FeatureCard
              icon={<span className="text-2xl">🎯</span>}
              iconBg="bg-gradient-to-br from-red-500 to-red-600"
              title="Difficulty Levels"
              description="From simple 3-ingredient drinks to complex craft cocktails - perfect for any skill level"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Your personalized cocktail journey starts here
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <StepCard
                number="1"
                title="Tell Mike Your Preferences"
                description="Answer a few quick questions about your favorite spirits, flavors, and occasions"
              />
              
              <StepCard
                number="2"
                title="Get Personalized Recommendations"
                description="Mike analyzes your preferences and suggests perfect cocktails matched to your taste"
              />
              
              <StepCard
                number="3"
                title="Master Professional Techniques"
                description="Follow step-by-step instructions with timers, tips, and video demonstrations"
              />
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="bg-gray-100 rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500">Cocktail Score</span>
                    <span className="text-3xl font-bold text-green-600">92</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Perfect balance of sweet and sour</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Uses your favorite spirits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Matched to your skill level</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Mike Section */}
      <section id="mike" className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Meet Mike, Your AI Mixologist
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Mike isn't just another recipe app. He's your personal bartender, 
                teacher, and cocktail companion rolled into one.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Learns Your Taste</h3>
                    <p className="text-gray-400">Mike remembers your preferences and improves recommendations over time</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Natural Conversations</h3>
                    <p className="text-gray-400">Chat with Mike like a real bartender - ask questions, get tips, and learn techniques</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Professional Expertise</h3>
                    <p className="text-gray-400">Trained on thousands of recipes and bartending techniques from world-class mixologists</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-6xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Hi, I'm Mike!</h3>
                <p className="text-gray-400 mb-6">Your AI-powered mixologist</p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-gray-500">Recipes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-gray-500">Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5★</div>
                    <div className="text-sm text-gray-500">Rated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Elevate Your Cocktail Game?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of home bartenders crafting amazing cocktails with Mike
          </p>
          
          <a 
            href="https://apps.apple.com/app/cocktail-crafters" 
            className="inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/app-store-badge-white.svg"
              alt="Download on the App Store"
              width={200}
              height={60}
              className="mx-auto"
            />
          </a>
          
          <div className="mt-8 flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg">4.9 rating • 2,000+ reviews</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🍸</span>
              </div>
              <span className="text-lg font-semibold text-white">Cocktail Crafters</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            © 2024 Cocktail Crafters. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, iconBg, title, description }: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex space-x-4">
      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}