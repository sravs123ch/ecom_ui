import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ items, onNavigate }) => {
  const handleClick = (id) => {
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              handleClick('home');
            }}
            className="inline-flex items-center text-sm text-gray-700 hover:text-indigo-600"
          >
            <Home size={16} className="mr-2" />
            Home
          </a>
        </li>
        
        {items.map((item, index) => (
          <li key={item.id} className="flex items-center">
            <ChevronRight size={16} className="text-gray-400 mx-1" />
            <a
              href={item.href || '#'}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.id);
              }}
              className={`text-sm ${
                index === items.length - 1
                  ? 'text-indigo-600 font-medium'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
