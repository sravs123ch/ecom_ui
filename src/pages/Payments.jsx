
import React, { useState } from 'react';
import {
  CreditCard,
  Smartphone,
  Wallet,
  Plus,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  X
} from 'lucide-react';
import Header from '../components/common/Header';
import { mockPaymentMethods } from '../data/mockData';
import { formatDate } from '../utils/formatters';

const Payments = () => {
  const [paymentMethods, setPaymentMethods] = useState(mockPaymentMethods);
  const [showAddCard, setShowAddCard] = useState(false);
  const [newCard, setNewCard] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

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
    setPaymentMethods((methods) =>
      methods.map((method) => ({
        ...method,
        primary: method.id === id
      }))
    );
  };

  const handleRemove = (id) => {
    setPaymentMethods((methods) =>
      methods.filter((method) => method.id !== id)
    );
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    // Add validation and card processing logic here
    setShowAddCard(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0 md:pl-14">
      <main className="pt-16 max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Payment Methods</h1>
          <p className="text-gray-600 mt-1">Manage your payment options</p>
        </div>

        <div className="bg-login-gradient rounded-lg p-6 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-blue-100 text-sm">Available Balance</p>
              <p className="text-white text-3xl font-bold mt-1">₹2,450</p>
              <p className="text-blue-200 text-sm mt-2">
                Last updated: {formatDate(new Date().toISOString())}
              </p>
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
              <button
                onClick={() => setShowAddCard(true)}
                className="flex items-center text-sm text-blue-600 hover:text-blue-700"
              >
                <Plus size={16} className="mr-1" />
                <span>Add New Card</span>
              </button>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {paymentMethods.map((method) => (
              <div key={method.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                      {getPaymentIcon(method.type)}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">{method.name}</h3>
                      <p className="text-sm text-gray-600">
                        {method.maskedNumber}
                        {method.lastUsed && (
                          <span className="ml-2 text-gray-400">
                            • Last used {formatDate(method.lastUsed)}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  {method.primary ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <CheckCircle2 size={12} className="mr-1" />
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

        {showAddCard && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md mx-4">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-semibold">Add New Card</h3>
                <button
                  onClick={() => setShowAddCard(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleAddCard} className="p-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      value={newCard.number}
                      onChange={(e) => setNewCard({ ...newCard, number: e.target.value })}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      value={newCard.name}
                      onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        value={newCard.expiry}
                        onChange={(e) => setNewCard({ ...newCard, expiry: e.target.value })}
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={newCard.cvv}
                        onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value })}
                        placeholder="123"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowAddCard(false)}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                  >
                    Add Card
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

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
