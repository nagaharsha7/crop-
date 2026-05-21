import { Sprout, Search, ShieldCheck } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      id: 1,
      title: 'Smart Crop Selection',
      description: 'Get AI-driven recommendations for the best crops to plant based on your specific conditions.',
      icon: <Sprout className="h-8 w-8 text-brand-600" />
    },
    {
      id: 2,
      title: 'Disease Analysis',
      description: 'Identify potential pests and diseases with expert guidance on prevention and treatment.',
      icon: <Search className="h-8 w-8 text-brand-600" />
    },
    {
      id: 3,
      title: 'Best Practices',
      description: 'Learn modern and sustainable farming techniques to maximize your yield safely.',
      icon: <ShieldCheck className="h-8 w-8 text-brand-600" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      {features.map((feature) => (
        <div key={feature.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
