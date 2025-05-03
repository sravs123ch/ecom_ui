import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

const WishlistCard = ({ item, onRemove, onAddToCart }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        React.createElement('span', { key: `star-${i}`, className: 'text-yellow-500' }, '★')
      );
    }

    if (hasHalfStar) {
      stars.push(
        React.createElement('span', { key: 'half-star', className: 'text-yellow-500' }, '★')
      );
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        React.createElement('span', { key: `empty-${i}`, className: 'text-gray-300' }, '★')
      );
    }

    return stars;
  };

  const outOfStock = item.inStock ? null : 
    React.createElement(
      'div',
      { className: 'absolute inset-0 bg-black/50 flex items-center justify-center' },
      React.createElement(
        'span',
        { className: 'bg-red-500 text-white px-3 py-1 rounded font-medium text-sm' },
        'Out of Stock'
      )
    );

  const offerTag = item.hasOffers ? 
    React.createElement(
      'div',
      { className: 'absolute top-2 left-2' },
      React.createElement(
        'span',
        { className: 'bg-green-500 text-white text-xs px-2 py-0.5 rounded' },
        'Offer'
      )
    ) : null;

  const removeButton = React.createElement(
    'button',
    {
      onClick: () => onRemove(item.id),
      className: 'absolute top-2 right-2 p-1.5 bg-white/90 hover:bg-red-50 rounded-full shadow-sm transition-colors',
      'aria-label': 'Remove from wishlist',
    },
    React.createElement(Heart, { size: 18, className: 'text-red-500 fill-red-500' })
  );

  const priceElement = React.createElement(
    'p',
    { className: 'text-lg font-bold text-gray-900' },
    formatCurrency(item.price)
  );

  const originalPriceElement = item.originalPrice && 
    React.createElement(
      'p',
      { className: 'ml-2 text-sm text-gray-500 line-through' },
      formatCurrency(item.originalPrice)
    );

  const discountElement = item.discount && 
    React.createElement(
      'p',
      { className: 'ml-2 text-sm text-green-600 font-medium' },
      `${item.discount}% off`
    );

  const addToCartButton = React.createElement(
    'button',
    {
      onClick: () => onAddToCart(item.id),
      disabled: !item.inStock,
      className: `flex items-center text-sm px-3 py-1.5 rounded-full transition-colors ${
        item.inStock
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
      }`,
    },
    [
      React.createElement(ShoppingCart, { size: 14, className: 'mr-1.5' }),
      React.createElement('span', null, 'Add to Cart'),
    ]
  );

  return React.createElement(
    'div',
    { className: 'bg-white rounded-lg border border-gray-200 overflow-hidden transition-shadow hover:shadow-md' },
    [
      React.createElement(
        'div',
        { className: 'relative' },
        [
          React.createElement('img', {
            src: item.image,
            alt: item.name,
            className: 'w-full h-40 object-cover',
          }),
          outOfStock,
          offerTag,
          removeButton,
        ]
      ),
      React.createElement(
        'div',
        { className: 'p-4' },
        [
          React.createElement(
            'div',
            { className: 'flex items-center' },
            [
              React.createElement('p', { className: 'text-xs text-gray-500' }, item.brand),
              React.createElement(
                'div',
                { className: 'ml-auto text-xs flex' },
                renderStars(item.rating)
              ),
            ]
          ),
          React.createElement(
            'h3',
            { className: 'font-medium text-gray-800 mt-1 line-clamp-2 h-12' },
            item.name
          ),
          React.createElement(
            'div',
            { className: 'mt-2 flex items-center' },
            [priceElement, originalPriceElement, discountElement]
          ),
          React.createElement(
            'div',
            { className: 'mt-3 flex justify-between items-center' },
            [
              React.createElement(
                'p',
                { className: 'text-xs text-gray-500' },
                `Added on ${formatDate(item.dateAdded)}`
              ),
              addToCartButton,
            ]
          ),
        ]
      ),
    ]
  );
};

export default WishlistCard;
