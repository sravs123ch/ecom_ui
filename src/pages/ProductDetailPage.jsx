// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Star, Truck, Shield, Plus, Minus, ShoppingBag, MapPin, CheckCircle2, Clock, ThumbsUp, ChevronRight, ThumbsDown } from 'lucide-react';
// import Button from '../components/ui/Button';
// import { FeaturedProducts } from '../components/home/FeaturedProducts';
// import { products } from '../data/products';
// import { useCart } from '../context/CartContext';

// const ProductDetailPage = () => {
//   const { productId } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [isAddedToCart, setIsAddedToCart] = useState(false); // State for feedback

//   const product = products.find(p => p.id === productId);
//   if (!product) {
//     return <div className="text-center py-20 text-gray-500">Product not found.</div>;
//   }

//   const handleAddToCart = () => {
//     const cartItem = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.images[0],
//       description: product.highlights?.join(', ') || '',
//       quantity: quantity,
//     };

//     // Log the item being added for debugging
//     console.log("Adding to cart:", cartItem);

//     // Call the context's addToCart function
//     addToCart(cartItem);

//     // Show feedback to the user
//     setIsAddedToCart(true);
//     setTimeout(() => setIsAddedToCart(false), 2000); // Hide feedback after 2 seconds
//   };

//   const similarProducts = products
//     .filter(p => p.category === product.category && p.id !== product.id)
//     .slice(0, 4);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left Column - Images */}
//         <div className="lg:w-2/5">
//           <div className="sticky top-24">
//             <div className="aspect-square rounded-lg overflow-hidden mb-4 border border-gray-200">
//               <img
//                 src={product.images[selectedImage]}
//                 alt={product.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="grid grid-cols-6 gap-2">
//               {product.images.map((image, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedImage(index)}
//                   className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
//                     selectedImage === index ? 'border-blue-500' : 'border-gray-200'
//                   }`}
//                 >
//                   <img
//                     src={image}
//                     alt={`${product.name} view ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//             <div className="flex gap-2 mt-4">
//               <Button
//                 onClick={handleAddToCart}
//                 leftIcon={<ShoppingBag size={20} />}
//                 className={`flex-1 transition-colors bg-login-gradient`}
//               >
//                ADD TO CART
//               </Button>
//               <Button
//                 onClick={() => navigate('/checkout')}
//                 className="flex-1 bg-login-gradient"
//               >
//                 BUY NOW
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Details */}
//         <div className="lg:w-3/5">
//           <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
//             <div className="text-gray-500 text-sm mb-1">{product.brand}</div>
//             <h1 className="text-xl font-medium text-gray-900 mb-2">{product.name}</h1>
//             <div className="flex items-center gap-4 mb-4">
//               <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-sm">
//                 <span className="font-medium">{product.rating}</span>
//                 <Star size={14} className="ml-1" />
//               </div>
//               <span className="text-gray-500">{product.reviews?.toLocaleString()} Ratings</span>
//             </div>

//             <div className="mb-4">
//               <div className="flex items-baseline gap-2">
//                 <span className="text-3xl font-medium">₹{product.price.toLocaleString()}</span>
//                 {product.originalPrice && (
//                   <>
//                     <span className="text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
//                     <span className="text-green-600">
//                       {Math.round((1 - product.price / product.originalPrice) * 100)}% off
//                     </span>
//                   </>
//                 )}
//               </div>
//             </div>

//             <div className="flex items-center gap-4 mb-6">
//               <span className="text-gray-700">Quantity:</span>
//               <div className="flex items-center border rounded">
//                 <button
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   className="p-2 hover:bg-gray-100"
//                 >
//                   <Minus size={16} />
//                 </button>
//                 <span className="px-4 py-2 border-x">{quantity}</span>
//                 <button
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="p-2 hover:bg-gray-100"
//                 >
//                   <Plus size={16} />
//                 </button>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="flex items-start gap-4">
//                 <MapPin className="text-gray-400 mt-1" size={20} />
//                 <div>
//                   <div className="flex items-center gap-2 mb-1">
//                     <span className="font-medium">Delivery</span>
//                     <input
//                       type="text"
//                       placeholder="Enter Pincode"
//                       className="border-b border-gray-300 focus:border-blue-500 outline-none px-1 py-0.5"
//                     />
//                     <button className="text-blue-600 font-medium">Check</button>
//                   </div>
//                   <p className="text-sm text-gray-600">Usually delivered in 5-7 days</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <Shield className="text-gray-400 mt-1" size={20} />
//                 <div>
//                   <span className="font-medium">Warranty</span>
//                   <p className="text-sm text-gray-600">1 Year Manufacturer Warranty</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <Truck className="text-gray-400 mt-1" size={20} />
//                 <div>
//                   <span className="font-medium">Free Delivery</span>
//                   <p className="text-sm text-gray-600">Orders above ₹500</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Seller Info */}
//           {product.seller && (
//             <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
//               <h2 className="font-medium mb-4">Seller Information</h2>
//               <div className="flex items-center gap-4 mb-2">
//                 <span className="text-gray-700">{product.seller.name}</span>
//                 <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-sm">
//                   <span>{product.seller.rating}</span>
//                   <Star size={14} className="ml-1" />
//                 </div>
//               </div>
//               <ul className="text-sm text-gray-600 space-y-2">
//                 <li className="flex items-center gap-2">
//                   <CheckCircle2 size={16} className="text-green-600" />
//                   {product.seller.reliability} Positive Seller Ratings
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Clock size={16} className="text-blue-600" />
//                   Quick Response Time
//                 </li>
//               </ul>
//             </div>
//           )}

//           {/* Product Details */}
//           <div className="bg-white rounded-lg p-6 shadow-sm">
//             <h2 className="font-medium mb-4">Product Details</h2>

//             {product.highlights?.length > 0 && (
//               <div className="mb-6">
//                 <h3 className="text-gray-700 mb-2">Highlights</h3>
//                 <ul className="space-y-2">
//                   {product.highlights.map((highlight, index) => (
//                     <li key={index} className="flex items-center gap-2 text-gray-600">
//                       <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
//                       {highlight}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {product.specifications && (
//               <div>
//                 <h3 className="text-gray-700 mb-2">Specifications</h3>
//                 <div className="border rounded-lg">
//                   {Object.entries(product.specifications).map(([key, value], index) => (
//                     <div
//                       key={key}
//                       className={`flex ${index !== 0 ? 'border-t' : ''}`}
//                     >
//                       <div className="w-1/3 p-3 bg-gray-50 text-gray-600">{key}</div>
//                       <div className="w-2/3 p-3 text-gray-800">{value}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Customer Ratings & Reviews - Flipkart Style */}
//           <div className="bg-white p-4 rounded-sm shadow-sm mt-6">
//             <h3 className="text-lg font-medium text-gray-900 mb-4">Ratings & Reviews</h3>
            
//             <div className="flex flex-col md:flex-row gap-6">
//               {/* Rating Summary */}
//               <div className="md:w-1/3 border-r border-gray-200 pr-6">
//                 <div className="flex flex-col items-center justify-center mb-4">
//                   <div className="text-4xl font-bold text-gray-900 mb-1">
//                     {product.rating}
//                     <span className="text-xl text-gray-500">/5</span>
//                   </div>
//                   <div className="flex items-center mb-2">
//                     {Array.from({ length: 5 }).map((_, idx) => (
//                       <Star 
//                         key={idx} 
//                         size={18} 
//                         className={idx < Math.floor(product.rating) 
//                           ? "fill-yellow-400 text-yellow-400" 
//                           : "fill-gray-300 text-gray-300"
//                         }
//                       />
//                     ))}
//                   </div>
//                   <span className="text-sm text-gray-600">
//                     {product.reviews?.toLocaleString()} Ratings & {Math.floor(product.reviews * 0.7)?.toLocaleString()} Reviews
//                   </span>
//                 </div>
                
//                 {/* Rating Breakdown */}
//                 <div className="space-y-2">
//                   {[5, 4, 3, 2, 1].map(star => (
//                     <div key={star} className="flex items-center gap-2">
//                       <button className="text-sm text-blue-500 font-medium w-6 text-left">
//                         {star}
//                         <Star size={12} className="inline fill-blue-500 text-blue-500 ml-0.5" />
//                       </button>
//                       <div className="flex-1 bg-gray-200 rounded-full h-2">
//                         <div 
//                           className="bg-green-500 h-2 rounded-full" 
//                           style={{ width: `${(Math.random() * 30 + 70 - (5-star)*15)}%` }} 
//                         />
//                       </div>
//                       <span className="text-xs text-gray-500 w-8 text-right">
//                         {Math.floor((Math.random() * 30 + 70 - (5-star)*15))}%
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Review Filters */}
//               <div className="md:w-3/4">
//                 <div>
//                   <h1>Images uploaded by customers:</h1>
//                   <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 my-4">
//                     {[
//                       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop&auto=format", // Headphones
//                       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop&auto=format", // Sneakers
//                       "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=100&h=100&fit=crop&auto=format", // Plant
//                       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop&auto=format", // Watch
//                       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&h=100&fit=crop&auto=format", // Laptop
//                     ].map((url, idx) => (
//                       <img
//                         key={idx}
//                         src={url}
//                         alt={`Customer uploaded ${idx + 1}`}
//                         className="w-full h-auto rounded object-cover border"
//                       />
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Sample Reviews */}
//                 <div className="space-y-6">
//                   {[1, 2].map((_, i) => (
//                     <div key={i} className="border-b border-gray-200 pb-4">
//                       <div className="flex items-center mb-2">
//                         <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-sm mr-2">
//                           {String.fromCharCode(65 + i)}
//                         </div>
//                         <div>
//                           <p className="text-sm font-medium text-gray-900">User {i+1}</p>
//                           <div className="flex items-center">
//                             {Array.from({ length: 5 }).map((_, idx) => (
//                               <Star 
//                                 key={idx} 
//                                 size={14} 
//                                 className={idx < 4 
//                                   ? "fill-yellow-400 text-yellow-400" 
//                                   : "fill-gray-300 text-gray-300"
//                                 }
//                               />
//                             ))}
//                             <span className="text-xs text-gray-500 ml-2">1 day ago</span>
//                           </div>
//                         </div>
//                       </div>
//                       <p className="text-sm text-gray-700 mb-2">
//                         {i === 0 
//                           ? "Great product! Works exactly as described. The quality is excellent and it arrived sooner than expected."
//                           : "Good product but the color is slightly different than shown in pictures. Otherwise working fine."
//                         }
//                       </p>
//                       <div className="flex gap-2 mb-2">
//                         <div className="w-16 h-16 bg-gray-100 rounded-sm"></div>
//                         <div className="w-16 h-16 bg-gray-100 rounded-sm"></div>
//                       </div>
//                       <div className="flex items-center text-xs text-gray-500">
//                         <button className="flex items-center mr-4">
//                           <ThumbsUp size={14} className="mr-1" /> Helpful (12)
//                         </button>
//                         <button className="flex items-center">
//                           <ThumbsDown size={14} className="mr-1" /> Not Helpful (2)
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <button className="mt-4 text-blue-500 text-sm font-medium flex items-center">
//                   See All Reviews
//                   <ChevronRight size={16} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Similar Products */}
//       {similarProducts.length > 0 && (
//         <section className="mt-12">
//           <h2 className="text-xl font-semibold text-slate-900 mb-4">Similar Products</h2>
//           <FeaturedProducts products={similarProducts} />
//         </section>
//       )}
//     </div>
//   );
// };

// export default ProductDetailPage;

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Truck, Shield, Plus, Minus, ShoppingBag, MapPin, CheckCircle2, ThumbsUp, ThumbsDown } from 'lucide-react';
import Button from '../components/ui/Button';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import {  RotateCcw, Share2 } from 'lucide-react';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.id === productId);
  if (!product) {
    return <div className="text-center py-20 text-gray-500">Product not found.</div>;
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      description: product.highlights?.join(', ') || '',
      quantity: quantity,
    };

    addToCart(cartItem);
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'specifications':
        return (
          <div className="py-4">
            {product.specifications && (
              <div className="border rounded-lg">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div
                    key={key}
                    className={`flex ${index !== 0 ? 'border-t' : ''}`}
                  >
                    <div className="w-1/3 p-3 bg-gray-50 text-gray-600">{key}</div>
                    <div className="w-2/3 p-3 text-gray-800">{value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'reviews':
        return (
          <div className="py-4">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Rating Summary */}
              <div className="md:w-1/3 border-r border-gray-200 pr-6">
                <div className="flex flex-col items-center justify-center mb-4">
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    {product.rating}
                    <span className="text-xl text-gray-500">/5</span>
                  </div>
                  <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star 
                        key={idx} 
                        size={18} 
                        className={idx < Math.floor(product.rating) 
                          ? "fill-yellow-400 text-yellow-400" 
                          : "fill-gray-300 text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.reviews?.toLocaleString()} Ratings & {Math.floor(product.reviews * 0.7)?.toLocaleString()} Reviews
                  </span>
                </div>
              </div>
              
              {/* Reviews */}
              <div className="md:w-3/4">
                <div className="space-y-6">
                  {[1, 2].map((_, i) => (
                    <div key={i} className="border-b border-gray-200 pb-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-sm mr-2">
                          {String.fromCharCode(65 + i)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">User {i+1}</p>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <Star 
                                key={idx} 
                                size={14} 
                                className={idx < 4 
                                  ? "fill-yellow-400 text-yellow-400" 
                                  : "fill-gray-300 text-gray-300"
                                }
                              />
                            ))}
                            <span className="text-xs text-gray-500 ml-2">1 day ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        {i === 0 
                          ? "Great product! Works exactly as described. The quality is excellent and it arrived sooner than expected."
                          : "Good product but the color is slightly different than shown in pictures. Otherwise working fine."
                        }
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <button className="flex items-center mr-4">
                          <ThumbsUp size={14} className="mr-1" /> Helpful (12)
                        </button>
                        <button className="flex items-center">
                          <ThumbsDown size={14} className="mr-1" /> Not Helpful (2)
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'description':
      default:
        return (
          <div className="py-4">
            {product.highlights?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-gray-700 mb-2">Highlights</h3>
                <ul className="space-y-2">
                  {product.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Images */}
        <div className="lg:w-2/5">
          <div className="sticky top-24">
            <div className="aspect-square rounded-lg overflow-hidden mb-4 border border-gray-200">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-6 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              <Button
                onClick={handleAddToCart}
                leftIcon={<ShoppingBag size={20} />}
                className={`flex-1 transition-colors bg-login-gradient`}
              >
               {isAddedToCart ? 'Added to Cart!' : 'ADD TO CART'}
              </Button>
              <Button
                onClick={() => navigate('/checkout')}
                className="flex-1 bg-login-gradient"
              >
                BUY NOW
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="lg:w-3/5">
          <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
            <div className="text-gray-500 text-sm mb-1">{product.brand}</div>
            <h1 className="text-xl font-medium text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-sm">
                <span className="font-medium">{product.rating}</span>
                <Star size={14} className="ml-1" />
              </div>
              <span className="text-gray-500">{product.reviews?.toLocaleString()} Ratings</span>
            </div>

            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-medium">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    <span className="text-green-600">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                    </span>
                  </>
                )}
              </div>
            </div>

<div className="space-y-4 mb-6">
  {/* Size */}
  <div className="flex items-center gap-4">
    <span className="text-gray-700">Size:</span>
    <div className="flex gap-2">
      <span className="px-3 py-1 border rounded text-sm">Standard</span>
      {/* Add more sizes if needed */}
    </div>
  </div>

  {/* Color */}
  <div className="flex items-center gap-4">
    <span className="text-gray-700">Color:</span>
    <div className="flex gap-2">
      <span className="w-6 h-6 rounded-full border-2 border-gray-300 bg-black"></span>
      <span className="w-6 h-6 rounded-full border-2 border-gray-300 bg-gray-400"></span>
      <span className="w-6 h-6 rounded-full border-2 border-gray-300 bg-blue-800"></span>
    </div>
  </div>

  {/* Quantity */}
  <div className="flex items-center gap-4">
    <span className="text-gray-700">Quantity:</span>
    <div className="flex items-center border rounded">
      <button
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        className="p-2 hover:bg-gray-100"
      >
        <Minus size={16} />
      </button>
      <span className="px-4 py-2 border-x">{quantity}</span>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="p-2 hover:bg-gray-100"
      >
        <Plus size={16} />
      </button>
    </div>
  </div>
</div>

               {/* Shipping & Returns */}
      <div className="border-t border-gray-200 pt-6 space-y-4">
        <div className="flex">
          <Truck size={20} className="text-gray-400 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-gray-900">Free Shipping</h4>
            <p className="text-sm text-gray-500">Free standard shipping on orders over $99</p>
          </div>
        </div>
        <div className="flex">
          <RotateCcw size={20} className="text-gray-400 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-gray-900">Easy Returns</h4>
            <p className="text-sm text-gray-500">30-day return policy</p>
          </div>
        </div>
        <div className="flex">
          <Shield size={20} className="text-gray-400 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-gray-900">2-Year Warranty</h4>
            <p className="text-sm text-gray-500">Full coverage for manufacturing defects</p>
          </div>
        </div>
      </div>

      {/* Share */}
      <div className="mt-6 flex items-center">
        <Share2 size={18} className="text-gray-400 mr-2" />
        <span className="text-sm text-gray-700 mr-4">Share:</span>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-blue-600">Facebook</button>
          <span className="text-gray-300">|</span>
          <button className="text-gray-400 hover:text-blue-400">Twitter</button>
          <span className="text-gray-300">|</span>
          <button className="text-gray-400 hover:text-red-600">Pinterest</button>
        </div>
      </div>
    
          </div>

        
        </div>
      </div>
  {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-4 py-3 font-medium text-sm ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`px-4 py-3 font-medium text-sm ${activeTab === 'specifications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-4 py-3 font-medium text-sm ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              >
                Reviews
              </button>
            </div>
            <div className="p-6">
              {renderTabContent()}
            </div>
          </div>
      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Similar Products</h2>
          <FeaturedProducts products={similarProducts} />
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;