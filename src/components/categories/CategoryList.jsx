import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import ParentCategory from './ParentCategory';
import Input from '../ui/Input';

const CategoryList = ({ categories, onCategorySelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return categories;

    const term = searchTerm.toLowerCase();

    return categories
      .map((category) => {
        const parentMatches =
          category.name.toLowerCase().includes(term) ||
          (category.description?.toLowerCase().includes(term) || false);

        const matchingChildren =
          category.children?.filter((child) =>
            child.name.toLowerCase().includes(term)
          ) || [];

        if (parentMatches) {
          return category;
        } else if (matchingChildren.length > 0) {
          return {
            ...category,
            children: matchingChildren,
          };
        }

        return null;
      })
      .filter(Boolean);
  }, [categories, searchTerm]);

  const handleCategorySelect = (category) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="space-y-4">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <ParentCategory
              key={category.id}
              category={category}
              onCategorySelect={handleCategorySelect}
            />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No categories found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
