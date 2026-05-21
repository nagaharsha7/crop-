import React from 'react';
import { useAuth } from '../context/AuthContext';

const Checkout = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Checkout</h1>
        <div className="bg-brand-50 p-6 rounded-lg text-left">
          <h2 className="text-2xl font-bold text-brand-700 mb-4">Order Summary</h2>
          <p className="text-gray-700 mb-2"><strong>Logged in as:</strong> {user?.email}</p>
          <p className="text-gray-700 mb-6">Proceed to complete your purchase.</p>
          <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
