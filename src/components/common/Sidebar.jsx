
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bell, Heart, User, Settings,
  ShoppingBag, Headphones, LogOut, CreditCard
} from 'lucide-react';
import { mockUser } from '../../data/mockData';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/profile', icon: User, label: 'My Profile' },
    { path: '/notifications', icon: Bell, label: 'Notifications', badge: 2 },
    { path: '/orders', icon: ShoppingBag, label: 'My Orders' },
    { path: '/wishlist', icon: Heart, label: 'My Wishlist' },
    { path: '/payments', icon: CreditCard, label: 'Payments' },
    { path: '/settings', icon: Settings, label: 'Settings' },
    { path: '/support', icon: Headphones, label: 'Help & Support' },
    // Logout is handled separately now
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-white border-r border-gray-200 sticky top-0">
      <div className="flex-1 overflow-y-auto mt-10">
        <div className="px-6 mb-6">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <img
              src={mockUser.avatar}
              alt={mockUser.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="font-medium text-gray-900">{mockUser.name}</p>
              <p className="text-xs text-gray-500">{mockUser.email}</p>
            </div>
          </div>
        </div>

        <nav>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-6 py-3 transition-colors relative ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50 font-medium border-r-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon size={20} className="mr-3" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}

            {/* Logout Button moved here */}
            <li>
              <button className="flex w-full items-center px-6 py-3 text-gray-700 hover:text-red-600 transition-colors">
                <LogOut size={20} className="mr-3" />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

