
import React, { useState } from 'react';

import Breadcrumbs from '../components/Breadcrumbs';
import { Layers } from 'lucide-react';
import { CategorySection } from '../components/home/CategorySection';
import { categories } from '../data/products';


const CategoriesPage = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const handleBreadcrumbNavigate = (id) => {
    if (id === 'home') {
      setBreadcrumbs([]);
      return;
    }

    const index = breadcrumbs.findIndex((b) => b.id === id);
    if (index >= 0) {
      setBreadcrumbs(breadcrumbs.slice(0, index + 1));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-6">
        <Breadcrumbs items={breadcrumbs} onNavigate={handleBreadcrumbNavigate} />
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Layers size={24} className="text-indigo-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">All Categories</h1>
        </div>
        <p className="text-gray-500 text-sm">
          {categories.reduce((total, category) => total + (category.productCount || 0), 0)}{' '}
          products across {categories.length} categories
        </p>
      </div>

      {/* This is the shared section from the HomePage */}
      {/* <CategorySection categories={categories} /> */}
      <CategorySection categories={categories} showViewAllLink={false} />

    </div>
  );
};

export default CategoriesPage;

