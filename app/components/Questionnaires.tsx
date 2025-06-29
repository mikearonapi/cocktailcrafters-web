// app/components/Questionnaires.tsx
"use client";

import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface QuestionnaireProps {
  onComplete: (responses: Record<string, string>) => void;
  userProfile?: {
    preferredSpirits: Set<string>;
    preferredFlavors: Set<string>;
    mixologyLevel: number;
  };
}

export function PersonalizedQuestionnaire({ onComplete, userProfile }: QuestionnaireProps) {
  const [selectedSpirits, setSelectedSpirits] = useState<Set<string>>(new Set());
  const [selectedFlavors, setSelectedFlavors] = useState<Set<string>>(new Set());
  const [selectedMood, setSelectedMood] = useState('');

  const spirits = ['Vodka', 'Gin', 'Whiskey', 'Rum', 'Tequila', 'Bourbon', 'Scotch', 'Brandy', 'Mezcal'];
  const flavors = ['Sweet', 'Sour', 'Bitter', 'Spicy', 'Fruity', 'Herbal', 'Smoky', 'Creamy', 'Refreshing'];
  const moods = ['Relaxing evening', 'Party time', 'Date night', 'After work', 'Weekend brunch', 'Celebration', 'Nightcap'];

  const toggleSpirit = (spirit: string) => {
    const newSpirits = new Set(selectedSpirits);
    if (newSpirits.has(spirit)) {
      newSpirits.delete(spirit);
    } else {
      newSpirits.add(spirit);
    }
    setSelectedSpirits(newSpirits);
  };

  const toggleFlavor = (flavor: string) => {
    const newFlavors = new Set(selectedFlavors);
    if (newFlavors.has(flavor)) {
      newFlavors.delete(flavor);
    } else {
      newFlavors.add(flavor);
    }
    setSelectedFlavors(newFlavors);
  };

  const handleSubmit = () => {
    const responses = {
      spirits: Array.from(selectedSpirits).join(', '),
      flavors: Array.from(selectedFlavors).join(', '),
      mood: selectedMood
    };
    onComplete(responses);
  };

  const isValid = selectedSpirits.size > 0 && selectedFlavors.size > 0 && selectedMood;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Let's find your perfect cocktail!</h1>
        <p className="text-gray-600">Tell me about your preferences</p>
      </div>

      {/* Previous preferences reminder */}
      {userProfile && userProfile.preferredSpirits.size > 0 && (
        <div className="bg-orange-50 p-3 rounded-xl flex items-center space-x-2">
          <span className="text-orange-500">💡</span>
          <p className="text-sm">
            Based on your profile, you enjoy {Array.from(userProfile.preferredSpirits).slice(0, 3).join(', ')}
          </p>
        </div>
      )}

      {/* Spirits Selection */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">What spirits do you enjoy?</h2>
        <div className="grid grid-cols-3 gap-2">
          {spirits.map((spirit) => (
            <button
              key={spirit}
              onClick={() => toggleSpirit(spirit)}
              className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                selectedSpirits.has(spirit)
                  ? 'bg-gradient-to-r from-primary to-orange-400 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {spirit}
            </button>
          ))}
        </div>
      </div>

      {/* Flavors Selection */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">What flavors do you prefer?</h2>
        <div className="grid grid-cols-3 gap-2">
          {flavors.map((flavor) => (
            <button
              key={flavor}
              onClick={() => toggleFlavor(flavor)}
              className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                selectedFlavors.has(flavor)
                  ? 'bg-gradient-to-r from-primary to-orange-400 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {flavor}
            </button>
          ))}
        </div>
      </div>

      {/* Mood Selection */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">What's the occasion?</h2>
        <div className="space-y-2">
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => setSelectedMood(mood)}
              className={`w-full p-3 rounded-xl text-left flex items-center justify-between transition-all ${
                selectedMood === mood
                  ? 'bg-orange-50 border-primary'
                  : 'bg-gray-100'
              }`}
            >
              <span className="text-sm font-medium">{mood}</span>
              {selectedMood === mood && (
                <span className="text-primary">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!isValid}
        className={`w-full py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 transition-all ${
          isValid
            ? 'bg-gradient-to-r from-primary to-orange-400 text-white'
            : 'bg-gray-200 text-gray-400'
        }`}
      >
        <span>Get My Recommendations</span>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
}

export function KnowledgeQuestionnaire({ onComplete, userLevel = 1 }: QuestionnaireProps & { userLevel?: number }) {
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set());
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedFocus, setSelectedFocus] = useState('');

  const topics = [
    'Cocktail History', 'Classic Recipes', 'Modern Techniques', 
    'Spirits Knowledge', 'Garnishing', 'Glassware', 'Bar Tools', 'Mixology Theory'
  ];
  const levels = ['Complete beginner', 'Some knowledge', 'Intermediate', 'Advanced', 'Expert'];
  const focuses = [
    'Basic techniques', 'Advanced methods', 'Ingredient knowledge', 
    'Presentation & garnishing', 'Cocktail science', 'Bar management'
  ];

  const toggleTopic = (topic: string) => {
    const newTopics = new Set(selectedTopics);
    if (newTopics.has(topic)) {
      newTopics.delete(topic);
    } else {
      newTopics.add(topic);
    }
    setSelectedTopics(newTopics);
  };

  const handleRandomFact = () => {
    onComplete({ randomFact: 'true' });
  };

  const handleSubmit = () => {
    const responses = {
      topics: Array.from(selectedTopics).join(', '),
      level: selectedLevel,
      focus: selectedFocus
    };
    onComplete(responses);
  };

  const isValid = selectedTopics.size > 0 && selectedLevel && selectedFocus;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Let's expand your knowledge!</h1>
        <p className="text-gray-600">What would you like to learn today?</p>
      </div>

      {/* Current level indicator */}
      <div className="bg-orange-50 p-3 rounded-xl flex items-center justify-center space-x-2">
        <span className="text-orange-500">⭐</span>
        <p className="text-sm font-medium">Your current level: {userLevel}</p>
      </div>

      {/* Surprise Me Button */}
      <button
        onClick={handleRandomFact}
        className="w-full p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 bg-opacity-10 flex items-center space-x-4"
      >
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
          <span className="text-white text-xl">🎲</span>
        </div>
        <div className="text-left">
          <h3 className="font-semibold">Surprise Me!</h3>
          <p className="text-sm text-gray-600">Get a random fascinating cocktail fact</p>
        </div>
        <span className="ml-auto text-purple-500">✨</span>
      </button>

      <p className="text-center text-gray-500 text-sm">Or choose specific topics:</p>

      {/* Topics Selection */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">What interests you most?</h2>
        <div className="grid grid-cols-2 gap-2">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => toggleTopic(topic)}
              className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                selectedTopics.has(topic)
                  ? 'bg-gradient-to-r from-green-500 to-green-400 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Level Selection */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Your current knowledge level?</h2>
        <div className="space-y-2">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`w-full p-3 rounded-xl text-left flex items-center justify-between transition-all ${
                selectedLevel === level
                  ? 'bg-green-50 border-green-500'
                  : 'bg-gray-100'
              }`}
            >
              <span className="text-sm font-medium">{level}</span>
              {selectedLevel === level && (
                <span className="text-green-500">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Focus Selection */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">What would you like to focus on?</h2>
        <div className="space-y-2">
          {focuses.map((focus) => (
            <button
              key={focus}
              onClick={() => setSelectedFocus(focus)}
              className={`w-full p-3 rounded-xl text-left flex items-center justify-between transition-all ${
                selectedFocus === focus
                  ? 'bg-green-50 border-green-500'
                  : 'bg-gray-100'
              }`}
            >
              <span className="text-sm font-medium">{focus}</span>
              {selectedFocus === focus && (
                <span className="text-green-500">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!isValid}
        className={`w-full py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 transition-all ${
          isValid
            ? 'bg-gradient-to-r from-green-500 to-green-400 text-white'
            : 'bg-gray-200 text-gray-400'
        }`}
      >
        <span>Start Learning!</span>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
}

export function PairingsQuestionnaire({ onComplete }: QuestionnaireProps) {
  const [foodText, setFoodText] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [selectedPreferences, setSelectedPreferences] = useState<Set<string>>(new Set());
  const [dietaryRestrictions, setDietaryRestrictions] = useState<Set<string>>(new Set());

  const cuisines = [
    'Italian', 'Asian', 'Mexican', 'French', 'Mediterranean', 
    'American', 'Indian', 'Japanese', 'Thai', 'Other'
  ];
  const occasions = [
    'Casual dinner', 'Date night', 'Family gathering', 'Business dinner', 
    'Celebration', 'Holiday meal', 'Outdoor BBQ', 'Brunch'
  ];
  const preferences = [
    'Light & refreshing', 'Bold & strong', 'Sweet cocktails', 'Classic cocktails', 
    'Wine-based', 'Beer cocktails', 'Low ABV', 'Spirit-forward'
  ];
  const restrictions = ['Vegetarian', 'Vegan', 'Gluten-free', 'Nut allergies', 'Dairy-free', 'Low sugar'];

  const togglePreference = (pref: string) => {
    const newPrefs = new Set(selectedPreferences);
    if (newPrefs.has(pref)) {
      newPrefs.delete(pref);
    } else {
      newPrefs.add(pref);
    }
    setSelectedPreferences(newPrefs);
  };

  const toggleRestriction = (restriction: string) => {
    const newRestrictions = new Set(dietaryRestrictions);
    if (newRestrictions.has(restriction)) {
      newRestrictions.delete(restriction);
    } else {
      newRestrictions.add(restriction);
    }
    setDietaryRestrictions(newRestrictions);
  };

  const handleSubmit = () => {
    const responses = {
      food: foodText,
      cuisine: selectedCuisine,
      occasion: selectedOccasion,
      preferences: Array.from(selectedPreferences).join(', '),
      restrictions: Array.from(dietaryRestrictions).join(', ')
    };
    onComplete(responses);
  };

  const isValid = foodText && selectedCuisine && selectedOccasion;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Let's find the perfect pairing!</h1>
        <p className="text-gray-600">Tell me about your meal</p>
      </div>

      {/* Food Input */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">What food or meal are you having?</h2>
        <input
          type="text"
          placeholder="e.g., Grilled salmon, pasta carbonara, spicy tacos..."
          value={foodText}
          onChange={(e) => setFoodText(e.target.value)}
          className="w-full p-4 rounded-xl bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Cuisine Selection */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">What type of cuisine?</h2>
        <div className="grid grid-cols-2 gap-2">
          {cuisines.map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => setSelectedCuisine(cuisine)}
              className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                selectedCuisine === cuisine
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </div>

      {/* Occasion Selection */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">What's the occasion?</h2>
        <div className="grid grid-cols-2 gap-2">
          {occasions.map((occasion) => (
            <button
              key={occasion}
              onClick={() => setSelectedOccasion(occasion)}
              className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                selectedOccasion === occasion
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {occasion}
            </button>
          ))}
        </div>
      </div>

      {/* Drink Preferences */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Drink preferences?</h2>
        <div className="grid grid-cols-2 gap-2">
          {preferences.map((pref) => (
            <button
              key={pref}
              onClick={() => togglePreference(pref)}
              className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                selectedPreferences.has(pref)
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {pref}
            </button>
          ))}
        </div>
      </div>

      {/* Dietary Restrictions */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Any dietary restrictions?</h2>
        <div className="grid grid-cols-2 gap-2">
          {restrictions.map((restriction) => (
            <button
              key={restriction}
              onClick={() => toggleRestriction(restriction)}
              className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                dietaryRestrictions.has(restriction)
                  ? 'bg-gradient-to-r from-green-500 to-green-400 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {restriction}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!isValid}
        className={`w-full py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 transition-all ${
          isValid
            ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
            : 'bg-gray-200 text-gray-400'
        }`}
      >
        <span>Find Perfect Pairings</span>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
}