import { Link } from 'react-router-dom';
import { ArrowRight, Sprout } from 'lucide-react';
import FeatureCards from '../components/FeatureCards';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-brand-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="bg-brand-100 text-brand-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 flex items-center gap-2">
            <Sprout className="h-4 w-4" />
            AI-Powered Agriculture
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Smart Crop <span className="text-brand-600">Analyser</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
            Empowering farmers with advanced AI to make data-driven decisions on crop selection, irrigation, and disease management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/login" 
              className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              Get Started <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="bg-white border-2 border-brand-200 hover:border-brand-600 text-brand-700 px-8 py-3 rounded-lg font-bold text-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How We Help You Grow</h2>
          <p className="mt-4 text-gray-600">Comprehensive tools for modern farming</p>
        </div>
        <FeatureCards />
      </div>
    </div>
  );
};

export default Home;
