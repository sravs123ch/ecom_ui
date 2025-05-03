import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Bell, Heart, User, Settings } from 'lucide-react';

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/notifications', icon: Bell, label: 'Notifications', badge: 2 },
    { path: '/wishlist', icon: Heart, label: 'Wishlist' },
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10 md:hidden">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-2 flex-1 transition-colors ${
                isActive(item.path)
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="relative">
                <Icon size={20} strokeWidth={isActive(item.path) ? 2.5 : 2} />
                {item.badge ? (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-medium rounded-full h-4 w-4 flex items-center justify-center">
                    {item.badge}
                  </span>
                ) : null}
              </div>
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
