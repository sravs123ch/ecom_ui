import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import ChildCategory from './ChildCategory';
import { Card, CardHeader, CardContent } from '../ui/Card';

const ParentCategory = ({ category, onCategorySelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCategorySelect = (category) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  return (
    <Card className="mb-4 transition-all duration-300 hover:shadow-lg">
      <CardHeader className="border-b border-gray-100">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleExpanded}
        >
          <div className="flex items-center space-x-3">
            {category.imageUrl && (
              <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                <img 
                  src={category.imageUrl} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="font-medium text-lg text-gray-900">{category.name}</h3>
              {category.description && (
                <p className="text-sm text-gray-500 mt-0.5">{category.description}</p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {category.productCount !== undefined && (
              <span className="text-sm px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-full">
                {category.productCount}
              </span>
            )}
            <div className="text-gray-400 transition-transform duration-200 transform">
              {isExpanded ? (
                <ChevronDown size={20} className="text-indigo-600" />
              ) : (
                <ChevronRight size={20} />
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      {isExpanded && category.children && category.children.length > 0 && (
        <CardContent className="bg-gray-50 border-t border-gray-100">
          <div className="space-y-1">
            {category.children.map((child) => (
              <ChildCategory 
                key={child.id} 
                category={child} 
                onClick={() => handleCategorySelect(child)}
              />
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default ParentCategory;
