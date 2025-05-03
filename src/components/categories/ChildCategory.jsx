import React from 'react';

const ChildCategory = ({ category, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(category);
    }
  };

  return (
    <div 
      className="pl-6 py-2 border-l-2 border-gray-200 group cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <span className="text-gray-700 group-hover:text-indigo-600 transition-colors duration-200">
            {category.name}
          </span>
        </div>
        {category.productCount !== undefined && (
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {category.productCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChildCategory;
