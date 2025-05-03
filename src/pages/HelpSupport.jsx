import React, { useState } from 'react';
import {
  Search,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  HelpCircle,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import Header from '../components/common/Header';

const HelpSupport = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    { id: 'orders', title: 'Orders & Shipping', count: 12 },
    { id: 'returns', title: 'Returns & Refunds', count: 8 },
    { id: 'payments', title: 'Payments & Wallet', count: 10 },
    { id: 'account', title: 'Account & Security', count: 6 },
  ];

  const commonQuestions = [
    { id: 1, question: 'How do I track my order?' },
    { id: 2, question: 'What is your return policy?' },
    { id: 3, question: 'How do I cancel my order?' },
    { id: 4, question: 'When will I receive my refund?' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0 md:pl-12">
      {/* <Header showBack /> */}

      <main className="pt-16 max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Help & Support</h1>
          <p className="text-gray-600 mt-1">How can we help you today?</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search size={20} className="absolute left-4 top-3.5 text-gray-400" />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageCircle size={20} className="text-blue-600" />
              </div>
              <div className="ml-4 text-left">
                <h3 className="font-medium text-gray-900">Live Chat</h3>
                <p className="text-sm text-gray-600">Chat with our support team</p>
              </div>
              <ArrowRight size={18} className="ml-auto text-gray-400 group-hover:text-blue-600" />
            </button>

            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone size={20} className="text-blue-600" />
              </div>
              <div className="ml-4 text-left">
                <h3 className="font-medium text-gray-900">Call Us</h3>
                <p className="text-sm text-gray-600">24/7 toll-free support</p>
              </div>
              <ArrowRight size={18} className="ml-auto text-gray-400 group-hover:text-blue-600" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Browse Help Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <div className="flex items-center">
                  <HelpCircle size={20} className="text-blue-600" />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.count} articles</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Common Questions</h2>
          <div className="space-y-3">
            {commonQuestions.map((question) => (
              <button
                key={question.id}
                className="w-full flex items-center justify-between p-3 text-left border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <div className="flex items-center">
                  <FileText size={18} className="text-blue-600" />
                  <span className="ml-3 text-gray-700">{question.question}</span>
                </div>
                <ChevronRight size={18} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">Still need help?</p>
          <button className="flex items-center justify-center space-x-2 mx-auto mt-2 text-blue-600 hover:text-blue-700">
            <Mail size={18} />
            <span>Email our support team</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default HelpSupport;
