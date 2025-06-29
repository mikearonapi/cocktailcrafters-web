// app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import SplashScreens from './components/SplashScreens';
import { PersonalizedQuestionnaire, KnowledgeQuestionnaire, PairingsQuestionnaire } from './components/Questionnaires';
import { 
  MagnifyingGlassIcon, 
  HomeIcon, 
  HeartIcon, 
  BookOpenIcon, 
  UserCircleIcon,
  ChevronLeftIcon,
  SparklesIcon
} from '@heroicons/react/24/solid';

type AppStep = 'welcome' | 'questionnaire' | 'suggestions' | 'chat' | 'search';
type QuestionnaireType = 'personalized' | 'knowledge' | 'pairings';
type TabSelection = 'home' | 'saved' | 'history' | 'profile';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentStep, setCurrentStep] = useState<AppStep>('welcome');
  const [currentQuestionnaire, setCurrentQuestionnaire] = useState<QuestionnaireType>('personalized');
  const [selectedTab, setSelectedTab] = useState<TabSelection>('home');
  const [navigationStack, setNavigationStack] = useState<AppStep[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4500); // 1.5s + 3s for both splash screens

    return () => clearTimeout(timer);
  }, []);

  const navigateBack = () => {
    if (navigationStack.length > 0) {
      const newStack = [...navigationStack];
      const previousStep = newStack.pop() as AppStep;
      setNavigationStack(newStack);
      setCurrentStep(previousStep);
    } else {
      setCurrentStep('welcome');
    }
  };

  const handleQuestionnaireComplete = (responses: Record<string, string>) => {
    console.log('Questionnaire responses:', responses);
    // TODO: Handle responses and move to next step
    if (currentQuestionnaire === 'personalized') {
      setCurrentStep('suggestions');
      setNavigationStack([...navigationStack, 'questionnaire']);
    } else {
      setCurrentStep('chat');
      setNavigationStack([...navigationStack, 'questionnaire']);
    }
  };

  const startQuestionnaire = (type: QuestionnaireType) => {
    setCurrentQuestionnaire(type);
    setCurrentStep('questionnaire');
    setNavigationStack([...navigationStack, 'welcome']);
  };

  if (showSplash) {
    return <SplashScreens />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 px-5 py-3 flex items-center justify-between">
        {currentStep !== 'welcome' && selectedTab === 'home' ? (
          <button 
            onClick={navigateBack}
            className="flex items-center space-x-1 text-primary"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            <span className="text-base font-medium">Back</span>
          </button>
        ) : (
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded-full" />
            <span className="text-xl font-bold">Cocktail Crafters</span>
          </div>
        )}
        
        <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {selectedTab === 'home' && (
          <>
            {currentStep === 'welcome' && (
              <div className="px-5 py-6">
                {/* Header */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold mb-2 tracking-wider">
                    GOOD EVENING, THERE
                  </h1>
                  <p className="text-gray-600 px-10">
                    Craft amazing cocktails with personalized recommendations and expert techniques
                  </p>
                </div>

                {/* Feature Cards */}
                <div className="space-y-4">
                  <FeatureCard
                    icon="✨"
                    gradientFrom="rgb(13, 102, 128)"
                    gradientTo="rgb(5, 77, 102)"
                    title="Personalized Recipes"
                    description="Get cocktail suggestions tailored to your taste preferences"
                    onPress={() => startQuestionnaire('personalized')}
                  />
                  
                  <FeatureCard
                    icon="🎓"
                    gradientFrom="rgb(77, 179, 102)"
                    gradientTo="rgb(102, 204, 128)"
                    title="Expert Knowledge"
                    description="Learn professional techniques and cocktail history"
                    onPress={() => startQuestionnaire('knowledge')}
                  />
                  
                  <FeatureCard
                    icon="🍽️"
                    gradientFrom="rgb(128, 102, 230)"
                    gradientTo="rgb(153, 128, 255)"
                    title="Perfect Pairings"
                    description="Find the ideal cocktail for any meal or occasion"
                    onPress={() => startQuestionnaire('pairings')}
                  />
                </div>

                {/* Sign In Section */}
                <div className="mt-8 space-y-3">
                  <div className="h-px bg-gray-200 mx-10" />
                  <p className="text-center text-sm text-gray-500">
                    Sign in to save your recipes and preferences
                  </p>
                  <button className="w-full bg-black text-white py-3.5 rounded-xl font-medium">
                    Sign in with Apple
                  </button>
                  <button className="w-full bg-gray-100 text-gray-900 py-3.5 rounded-xl font-medium flex items-center justify-center space-x-2">
                    <span>🌐</span>
                    <span>Sign in with Google</span>
                  </button>
                </div>
              </div>
            )}

            {currentStep === 'questionnaire' && (
              <div className="px-5 py-6">
                {currentQuestionnaire === 'personalized' && (
                  <PersonalizedQuestionnaire onComplete={handleQuestionnaireComplete} />
                )}
                {currentQuestionnaire === 'knowledge' && (
                  <KnowledgeQuestionnaire onComplete={handleQuestionnaireComplete} userLevel={3} />
                )}
                {currentQuestionnaire === 'pairings' && (
                  <PairingsQuestionnaire onComplete={handleQuestionnaireComplete} />
                )}
              </div>
            )}

            {currentStep === 'suggestions' && (
              <div className="px-5 py-6">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold mb-2">Mike's Recommendations</h1>
                  <p className="text-gray-600">Based on your preferences, here are cocktails you'll love</p>
                </div>
                
                {/* Placeholder for cocktail suggestions */}
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-2xl p-4 h-32 flex items-center justify-center">
                    <p className="text-gray-500">Cocktail suggestions will appear here</p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 'chat' && (
              <div className="px-5 py-6">
                <div className="bg-gray-100 rounded-2xl p-4 h-64 flex items-center justify-center">
                  <p className="text-gray-500">Chat interface coming soon</p>
                </div>
              </div>
            )}
          </>
        )}

        {/* Other tab content */}
        {selectedTab === 'saved' && (
          <div className="px-5 py-6">
            <h1 className="text-3xl font-bold mb-4">Saved Recipes</h1>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <HeartIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-700 mb-1">No saved recipes yet</h3>
              <p className="text-gray-500 text-sm">Save your favorite cocktails to access them anytime!</p>
            </div>
          </div>
        )}

        {selectedTab === 'history' && (
          <div className="px-5 py-6">
            <h1 className="text-3xl font-bold mb-2">Mix Journal</h1>
            <p className="text-gray-600 mb-4">Your cocktail making journey</p>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <p className="text-gray-500">Your cocktail history will appear here</p>
            </div>
          </div>
        )}

        {selectedTab === 'profile' && (
          <div className="px-5 py-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-teal to-teal-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">1</span>
              </div>
              <h2 className="text-2xl font-bold">Mixologist</h2>
              <p className="text-gray-600">Level 1 • 0 cocktails made</p>
            </div>
            
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-teal to-teal-dark text-white py-4 rounded-2xl font-semibold">
                Edit Profile
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tab Bar */}
      {(currentStep === 'welcome' || selectedTab !== 'home') && (
        <div className="bg-white border-t border-gray-100 px-5 py-2">
          <div className="flex justify-around">
            <TabButton
              icon={<HomeIcon className="w-5 h-5" />}
              label="Home"
              isSelected={selectedTab === 'home'}
              onPress={() => setSelectedTab('home')}
            />
            <TabButton
              icon={<HeartIcon className="w-5 h-5" />}
              label="Saved"
              isSelected={selectedTab === 'saved'}
              onPress={() => setSelectedTab('saved')}
            />
            <TabButton
              icon={<BookOpenIcon className="w-5 h-5" />}
              label="Mix Journal"
              isSelected={selectedTab === 'history'}
              onPress={() => setSelectedTab('history')}
            />
            <TabButton
              icon={<UserCircleIcon className="w-5 h-5" />}
              label="Profile"
              isSelected={selectedTab === 'profile'}
              onPress={() => setSelectedTab('profile')}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function FeatureCard({ 
  icon, 
  gradientFrom, 
  gradientTo, 
  title, 
  description, 
  onPress 
}: {
  icon: string;
  gradientFrom: string;
  gradientTo: string;
  title: string;
  description: string;
  onPress: () => void;
}) {
  return (
    <button
      onClick={onPress}
      className="w-full bg-gray-50 rounded-2xl p-4 flex items-center space-x-4 text-left hover:bg-gray-100 transition-colors"
    >
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`
        }}
      >
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-base mb-1">{title}</h3>
        <p className="text-sm text-gray-600 leading-tight">{description}</p>
      </div>
      <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

function TabButton({ 
  icon, 
  label, 
  isSelected, 
  onPress 
}: {
  icon: React.ReactNode;
  label: string;
  isSelected: boolean;
  onPress: () => void;
}) {
  return (
    <button
      onClick={onPress}
      className="flex flex-col items-center space-y-1 py-2"
    >
      <div className={isSelected ? 'text-primary' : 'text-gray-400'}>
        {icon}
      </div>
      <span className={`text-xs ${isSelected ? 'text-primary' : 'text-gray-400'}`}>
        {label}
      </span>
    </button>
  );
}