import React, { useState } from 'react';
import { Heart, Grid, List, SlidersHorizontal, Search } from 'lucide-react';
import Header from '../components/common/Header';
import BottomNavigation from '../components/common/BottomNavigation';
import WishlistCard from '../components/wishlist/WishlistCard';
import { mockWishlistItems } from '../data/mockData';

const Wishlist = () => {
  const [items, setItems] = useState(mockWishlistItems);
  const [viewType, setViewType] = useState('grid');
  
  const handleRemove = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const handleAddToCart = (id) => {
    // In a real app, this would add to cart
    console.log('Add to cart:', id);
  };
  
  const toggleView = () => {
    setViewType(prev => (prev === 'grid' ? 'list' : 'grid'));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0 md:pl-14">
      {/* <Header showBack /> */}
      
      <main className="pt-16 max-w-6xl mx-auto px-4">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">My Wishlist</h1>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleView}
              className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors"
              aria-label={viewType === 'grid' ? 'Switch to list view' : 'Switch to grid view'}
            >
              {viewType === 'grid' ? <List size={18} /> : <Grid size={18} />}
            </button>
            
            <button 
              className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors"
              aria-label="Filter"
            >
              <SlidersHorizontal size={18} />
            </button>
            
            <button 
              className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>
        </div>
        
        {items.length > 0 ? (
          <>
            <p className="text-gray-600 mb-4">{items.length} items saved to wishlist</p>
            
            <div className={`grid ${
              viewType === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            } gap-4`}>
              {items.map(item => (
                <WishlistCard
                  key={item.id}
                  item={item}
                  onRemove={handleRemove}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Heart size={32} className="text-red-500" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              Save items you love to your wishlist. Review them anytime and easily move them to the cart.
            </p>
            <button className="bg-blue-600 text-white py-2.5 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              Start shopping
            </button>
          </div>
        )}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Wishlist;
