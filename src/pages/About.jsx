import { Users, Info, Cpu } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Smart Crop Analyser</h1>
          <p className="text-xl text-gray-600">Bridging the gap between traditional farming and modern AI.</p>
        </div>

        <div className="bg-brand-50 rounded-2xl p-8 mb-8 border border-brand-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Info className="h-6 w-6 text-brand-600" />
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Smart Crop Analyser is an academic project designed to empower the agricultural sector 
            with artificial intelligence. Our goal is to provide farmers with an easy-to-use platform 
            where they can seek guidance on crop selection, disease management, and irrigation techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Cpu className="h-5 w-5 text-brand-600" />
              Technology Stack
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">• React & Vite for fast frontend</li>
              <li className="flex items-center gap-2">• React Router & Context API</li>
              <li className="flex items-center gap-2">• Python Flask Backend</li>
              <li className="flex items-center gap-2">• OpenAI API Integration</li>
              <li className="flex items-center gap-2">• Tailwind CSS Styling</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Users className="h-5 w-5 text-brand-600" />
              Target Audience
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Designed for farmers, agricultural students, and researchers looking for 
              quick, reliable, and AI-driven insights specifically focused on agriculture 
              and livestock management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
