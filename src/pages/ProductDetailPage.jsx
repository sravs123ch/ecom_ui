import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Star, Truck, ShieldCheck, RotateCcw, Heart, ShoppingCart, 
  ChevronRight, Share2, Minus, Plus, Info
} from 'lucide-react';

import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  
  const product = products.find(p => p.id === productId);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h1>
        <p className="text-slate-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button as={Link} to="/">Return to Home</Button>
      </div>
    );
  }

  // Get similar products (same category)
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleQuantityChange = (value) => {
    setQuantity(Math.max(1, value));
  };

  return (
    <>
      <Helmet>
        <title>{`${product.name} | ShopHub`}</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <main className="pt-10 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center text-sm">
              <li>
                <Link to="/" className="text-slate-500 hover:text-indigo-600 transition-colors">Home</Link>
              </li>
              <ChevronRight size={14} className="mx-2 text-slate-400" />
              <li>
                <Link 
                  to={`/category/${product.category}`} 
                  className="text-slate-500 hover:text-indigo-600 transition-colors capitalize"
                >
                  {product.category.replace('-', ' ')}
                </Link>
              </li>
              <ChevronRight size={14} className="mx-2 text-slate-400" />
              <li className="text-slate-900 font-medium truncate max-w-[200px]">
                {product.name}
              </li>
            </ol>
          </nav>

          {/* Product details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product images */}
            <div>
              <div className="relative aspect-square mb-4 bg-slate-100 rounded-xl overflow-hidden">
                <motion.img 
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === idx 
                        ? 'border-indigo-600' 
                        : 'border-transparent hover:border-indigo-300'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - view ${idx + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  {product.isNew && (
                    <Badge variant="secondary" className="mr-2">New</Badge>
                  )}
                  {product.isBestseller && (
                    <Badge variant="warning">Bestseller</Badge>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star 
                        key={idx} 
                        size={18} 
                        className={idx < Math.floor(product.rating) 
                          ? "fill-amber-400 text-amber-400" 
                          : "fill-slate-200 text-slate-200"
                        }
                      />
                    ))}
                    <span className="ml-2 text-sm text-slate-600">{product.rating} ({product.reviews} reviews)</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="ml-3 text-lg text-slate-500 line-through">${product.originalPrice.toFixed(2)}</span>
                    )}
                    {product.originalPrice && (
                      <Badge variant="error" className="ml-3">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-slate-700">{product.description}</p>
              </div>

              {/* Color selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-slate-700 mb-3">Color</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1 rounded-full border transition-colors ${
                          selectedColor === color
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                            : 'border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-slate-700">Size</h3>
                    <button className="text-xs text-indigo-600 inline-flex items-center">
                      <Info size={14} className="mr-1" />
                      Size Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${
                          selectedSize === size
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                            : 'border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-slate-700 mb-3">Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="w-10 h-10 rounded-l-md border border-r-0 border-slate-300 flex items-center justify-center"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} className={quantity <= 1 ? "text-slate-400" : "text-slate-700"} />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    min="1"
                    className="w-16 h-10 border-y border-slate-300 text-center focus:outline-none"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="w-10 h-10 rounded-r-md border border-l-0 border-slate-300 flex items-center justify-center"
                  >
                    <Plus size={16} className="text-slate-700" />
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  onClick={handleAddToCart}
                  leftIcon={<ShoppingCart size={18} />}
                >
                  Add to Cart
                </Button>
                <Button 
                  variant={isInWishlist(product.id) ? "secondary" : "outline"} 
                  size="lg" 
                  fullWidth
                  onClick={handleWishlistToggle}
                  leftIcon={<Heart size={18} />}
                >
                  {isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                </Button>
              </div>
            </div>
          </div>
          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Similar Products</h2>
              <div>
                <FeaturedProducts products={similarProducts} />
              </div>
            </section>
          )}

        </div>
      </main>
    </>
  );
};

export default ProductDetailPage;
