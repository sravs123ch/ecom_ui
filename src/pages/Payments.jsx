import React, { useState } from 'react';
import { CreditCard, Smartphone, Wallet, Plus, ChevronRight, AlertCircle } from 'lucide-react';
import Header from '../components/common/Header';
import { mockPaymentMethods } from '../data/mockData';
import { formatDate } from '../utils/formatters';

const Payments = () => {
  const [paymentMethods, setPaymentMethods] = useState(mockPaymentMethods);

  const getPaymentIcon = (type) => {
    switch (type) {
      case 'card':
        return <CreditCard size={24} className="text-purple-600" />;
      case 'upi':
        return <Smartphone size={24} className="text-green-600" />;
      case 'wallet':
        return <Wallet size={24} className="text-blue-600" />;
      default:
        return <CreditCard size={24} className="text-gray-600" />;
    }
  };

  const handleSetPrimary = (id) => {
    setPaymentMethods(methods =>
      methods.map(method => ({
        ...method,
        primary: method.id === id
      }))
    );
  };

  const handleRemove = (id) => {
    setPaymentMethods(methods =>
      methods.filter(method => method.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0 md:pl-14">
      {/* <Header showBack /> */}

      <main className="pt-16 max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Payment Methods</h1>
          <p className="text-gray-600 mt-1">Manage your payment options</p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-blue-100 text-sm">Available Balance</p>
              <p className="text-white text-2xl font-bold mt-1">₹2,450</p>
            </div>
            <button className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/30 transition-colors">
              Add Money
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-gray-800">Saved Payment Methods</h2>
              <button className="flex items-center text-sm text-blue-600 hover:text-blue-700">
                <Plus size={16} className="mr-1" />
                <span>Add New</span>
              </button>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {paymentMethods.map((method) => (
              <div key={method.id} className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                      {getPaymentIcon(method.type)}
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium text-gray-900">{method.name}</h3>
                      <p className="text-sm text-gray-600">
                        {method.maskedNumber}
                        {method.lastUsed && (
                          <span className="ml-2">• Last used {formatDate(method.lastUsed)}</span>
                        )}
                      </p>
                    </div>
                  </div>
                  {method.primary ? (
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      Primary
                    </span>
                  ) : (
                    <button
                      onClick={() => handleSetPrimary(method.id)}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Set as Primary
                    </button>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-end space-x-3">
                  <button
                    onClick={() => handleRemove(method.id)}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                  <button className="text-sm text-gray-600 hover:text-gray-700">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Recent Transactions</h2>
          </div>

          <div className="p-6 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertCircle size={24} className="text-gray-400" />
            </div>
            <h3 className="text-gray-800 font-medium">No recent transactions</h3>
            <p className="text-gray-600 text-sm mt-1">
              Your transaction history will appear here
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AlertCircle size={20} className="text-blue-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Secure Payments</h3>
              <p className="text-sm text-blue-600 mt-1">
                All your payment information is stored securely using industry-standard encryption.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payments;
