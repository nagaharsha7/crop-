import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <Loader2 className="h-8 w-8 text-brand-600 animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
