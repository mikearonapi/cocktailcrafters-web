export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full" />
          <h1 className="text-xl font-bold">Cocktail Crafters</h1>
        </div>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </nav>

      {/* Hero Section */}
      <div className="px-6 py-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 tracking-wide">
          GOOD EVENING, THERE
        </h2>
        <p className="text-gray-600 mb-12 max-w-md mx-auto">
          Craft amazing cocktails with personalized recommendations and expert techniques
        </p>

        {/* Feature Cards */}
        <div className="space-y-4 max-w-md mx-auto">
          <FeatureCard 
            emoji="✨"
            title="Personalized Recipes"
            description="Get cocktail suggestions tailored to your taste preferences"
            gradientFrom="from-teal-600"
            gradientTo="to-teal-700"
          />
          <FeatureCard 
            emoji="🎓"
            title="Expert Knowledge"
            description="Learn professional techniques and cocktail history"
            gradientFrom="from-green-600"
            gradientTo="to-green-700"
          />
          <FeatureCard 
            emoji="🍽️"
            title="Perfect Pairings"
            description="Find the ideal cocktail for any meal or occasion"
            gradientFrom="from-purple-600"
            gradientTo="to-purple-700"
          />
        </div>

        {/* Coming Soon */}
        <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Mike is preparing the bar...</h3>
          <p className="text-gray-600 mb-4">Our AI mixologist is getting ready to serve you amazing cocktails!</p>
          <p className="text-sm text-gray-500">Web app coming soon • iOS app in development</p>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ emoji, title, description, gradientFrom, gradientTo }: {
  emoji: string;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}) {
  return (
    <button className="w-full flex items-start gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors text-left group">
      <div className={`w-12 h-12 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
        {emoji}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
      <svg className="w-5 h-5 text-gray-400 mt-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}