import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Leaf, LogOut, User } from 'lucide-react';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-brand-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6" />
            <Link to="/" className="font-bold text-xl tracking-tight">Smart Crop Analyser</Link>
          </div>
          
          <div className="flex space-x-4">
            <Link to="/" className="hover:bg-brand-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
            <Link to="/about" className="hover:bg-brand-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="hover:bg-brand-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Dashboard</Link>
                <Link to="/checkout" className="hover:bg-brand-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Checkout</Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-1 hover:bg-brand-700 px-3 py-2 rounded-md text-sm font-medium transition-colors bg-brand-700 border border-brand-500"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="flex items-center gap-1 bg-white text-brand-700 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-bold transition-colors"
                >
                  <User className="h-4 w-4" />
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="flex items-center gap-1 bg-brand-700 text-white hover:bg-brand-800 border border-brand-500 px-4 py-2 rounded-md text-sm font-bold transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
