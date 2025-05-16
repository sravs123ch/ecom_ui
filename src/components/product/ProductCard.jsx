import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import  Badge  from '../ui/Badge';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-100">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Product badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {discount > 0 && (
              <Badge variant="error">-{discount}%</Badge>
            )}
            {product.isNew && (
              <Badge variant="secondary">New</Badge>
            )}
            {product.isBestseller && (
              <Badge variant="warning">Bestseller</Badge>
            )}
          </div>

          {/* Quick actions */}
          <div className="absolute bottom-2 right-2 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button
              onClick={handleWishlistToggle}
              className={`rounded-full p-2.5 ${isInWishlist(product.id) ? 'bg-color text-white' : 'bg-white text-slate-700 hover:text-color'} shadow-md transition-colors`}
              aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart size={18} className={isInWishlist(product.id) ? "fill-text-color" : ""} />
            </button>
            <button
              onClick={handleAddToCart}
              className="rounded-full bg-white p-2.5 text-slate-700 shadow-md hover:bg-color transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-medium text-slate-700 group-hover:text-color-hover transition-colors">
            {product.name}
          </h3>
          <div className="mt-1 flex items-center justify-between">
            <div className="flex items-center">
              {product.originalPrice ? (
                <>
                  <span className="text-sm font-medium text-color">${product.price.toFixed(2)}</span>
                  <span className="ml-2 text-xs text-slate-500 line-through">${product.originalPrice.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-sm font-medium text-color">${product.price.toFixed(2)}</span>
              )}
            </div>
            <div className="flex items-center">
              <span className="text-xs text-amber-500">★★★★</span>
              <span className="ml-1 text-xs text-slate-500">({product.reviews})</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
