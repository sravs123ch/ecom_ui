// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import { motion } from 'framer-motion';
// import { 
//   Star, Truck, ShieldCheck, RotateCcw, Heart, ShoppingCart, 
//   ChevronRight, Share2, Minus, Plus, Info
// } from 'lucide-react';

// import Badge from '../components/ui/Badge';
// import Button from '../components/ui/Button';
// import { FeaturedProducts } from '../components/home/FeaturedProducts';
// import { products } from '../data/products';
// import { useCart } from '../context/CartContext';
// import { useWishlist } from '../context/WishlistContext';

// const ProductDetailPage = () => {
//   const { productId } = useParams();
//   const { addToCart } = useCart();
//   const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  
//   const product = products.find(p => p.id === productId);
  
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
//   const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  
//   if (!product) {
//     return (
//       <div className="container mx-auto px-4 py-16 text-center">
//         <h1 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h1>
//         <p className="text-slate-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
//         <Button as={Link} to="/">Return to Home</Button>
//       </div>
//     );
//   }

//   // Get similar products (same category)
//   const similarProducts = products
//     .filter(p => p.category === product.category && p.id !== product.id)
//     .slice(0, 4);

//   const handleAddToCart = () => {
//     addToCart(product, quantity, selectedColor, selectedSize);
//   };

//   const handleWishlistToggle = () => {
//     if (isInWishlist(product.id)) {
//       removeFromWishlist(product.id);
//     } else {
//       addToWishlist(product);
//     }
//   };

//   const handleQuantityChange = (value) => {
//     setQuantity(Math.max(1, value));
//   };

//   return (
//     <>
//       <Helmet>
//         <title>{`${product.name} | ShopHub`}</title>
//         <meta name="description" content={product.description} />
//       </Helmet>

//       <main className="pt-10 pb-16">
//         <div className="container mx-auto px-4">
//           {/* Breadcrumbs */}
//           <nav className="mb-8">
//             <ol className="flex items-center text-sm">
//               <li>
//                 <Link to="/" className="text-slate-500 hover:text-indigo-600 transition-colors">Home</Link>
//               </li>
//               <ChevronRight size={14} className="mx-2 text-slate-400" />
//               <li>
//                 <Link 
//                   to={`/category/${product.category}`} 
//                   className="text-slate-500 hover:text-indigo-600 transition-colors capitalize"
//                 >
//                   {product.category.replace('-', ' ')}
//                 </Link>
//               </li>
//               <ChevronRight size={14} className="mx-2 text-slate-400" />
//               <li className="text-slate-900 font-medium truncate max-w-[200px]">
//                 {product.name}
//               </li>
//             </ol>
//           </nav>

//           {/* Product details */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {/* Product images */}
//             <div>
//               <div className="relative aspect-square mb-4 bg-slate-100 rounded-xl overflow-hidden">
//                 <motion.img 
//                   key={selectedImage}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   src={product.images[selectedImage]} 
//                   alt={product.name}
//                   className="w-full h-full object-cover object-center"
//                 />
//               </div>
//               <div className="grid grid-cols-4 gap-4">
//                 {product.images.map((image, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setSelectedImage(idx)}
//                     className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
//                       selectedImage === idx 
//                         ? 'border-indigo-600' 
//                         : 'border-transparent hover:border-indigo-300'
//                     }`}
//                   >
//                     <img 
//                       src={image} 
//                       alt={`${product.name} - view ${idx + 1}`}
//                       className="w-full h-full object-cover object-center"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Product info */}
//             <div>
//               <div className="mb-6">
//                 <div className="flex items-center mb-2">
//                   {product.isNew && (
//                     <Badge variant="secondary" className="mr-2">New</Badge>
//                   )}
//                   {product.isBestseller && (
//                     <Badge variant="warning">Bestseller</Badge>
//                   )}
//                 </div>
//                 <h1 className="text-3xl font-bold text-slate-900 mb-2">{product.name}</h1>
//                 <div className="flex items-center mb-4">
//                   <div className="flex items-center mr-4">
//                     {Array.from({ length: 5 }).map((_, idx) => (
//                       <Star 
//                         key={idx} 
//                         size={18} 
//                         className={idx < Math.floor(product.rating) 
//                           ? "fill-amber-400 text-amber-400" 
//                           : "fill-slate-200 text-slate-200"
//                         }
//                       />
//                     ))}
//                     <span className="ml-2 text-sm text-slate-600">{product.rating} ({product.reviews} reviews)</span>
//                   </div>
//                 </div>
//                 <div className="mb-4">
//                   <div className="flex items-baseline">
//                     <span className="text-2xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
//                     {product.originalPrice && (
//                       <span className="ml-3 text-lg text-slate-500 line-through">${product.originalPrice.toFixed(2)}</span>
//                     )}
//                     {product.originalPrice && (
//                       <Badge variant="error" className="ml-3">
//                         Save ${(product.originalPrice - product.price).toFixed(2)}
//                       </Badge>
//                     )}
//                   </div>
//                 </div>
//                 <p className="text-slate-700">{product.description}</p>
//               </div>

//               {/* Color selection */}
//               {product.colors && product.colors.length > 0 && (
//                 <div className="mb-6">
//                   <h3 className="text-sm font-medium text-slate-700 mb-3">Color</h3>
//                   <div className="flex flex-wrap gap-3">
//                     {product.colors.map((color) => (
//                       <button
//                         key={color}
//                         onClick={() => setSelectedColor(color)}
//                         className={`px-3 py-1 rounded-full border transition-colors ${
//                           selectedColor === color
//                             ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
//                             : 'border-slate-300 hover:border-slate-400'
//                         }`}
//                       >
//                         {color}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Size selection */}
//               {product.sizes && product.sizes.length > 0 && (
//                 <div className="mb-6">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-sm font-medium text-slate-700">Size</h3>
//                     <button className="text-xs text-indigo-600 inline-flex items-center">
//                       <Info size={14} className="mr-1" />
//                       Size Guide
//                     </button>
//                   </div>
//                   <div className="flex flex-wrap gap-3">
//                     {product.sizes.map((size) => (
//                       <button
//                         key={size}
//                         onClick={() => setSelectedSize(size)}
//                         className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${
//                           selectedSize === size
//                             ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
//                             : 'border-slate-300 hover:border-slate-400'
//                         }`}
//                       >
//                         {size}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Quantity */}
//               <div className="mb-8">
//                 <h3 className="text-sm font-medium text-slate-700 mb-3">Quantity</h3>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => handleQuantityChange(quantity - 1)}
//                     className="w-10 h-10 rounded-l-md border border-r-0 border-slate-300 flex items-center justify-center"
//                     disabled={quantity <= 1}
//                   >
//                     <Minus size={16} className={quantity <= 1 ? "text-slate-400" : "text-slate-700"} />
//                   </button>
//                   <input
//                     type="number"
//                     value={quantity}
//                     onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
//                     min="1"
//                     className="w-16 h-10 border-y border-slate-300 text-center focus:outline-none"
//                   />
//                   <button
//                     onClick={() => handleQuantityChange(quantity + 1)}
//                     className="w-10 h-10 rounded-r-md border border-l-0 border-slate-300 flex items-center justify-center"
//                   >
//                     <Plus size={16} className="text-slate-700" />
//                   </button>
//                 </div>
//               </div>

//               {/* Action buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                 <Button 
//                   variant="primary" 
//                   size="lg" 
//                   fullWidth
//                   onClick={handleAddToCart}
//                   leftIcon={<ShoppingCart size={18} />}
//                 >
//                   Add to Cart
//                 </Button>
//                 <Button 
//                   variant={isInWishlist(product.id) ? "secondary" : "outline"} 
//                   size="lg" 
//                   fullWidth
//                   onClick={handleWishlistToggle}
//                   leftIcon={<Heart size={18} />}
//                 >
//                   {isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
//                 </Button>
//               </div>
//             </div>
//           </div>
//           {/* Similar Products */}
//           {similarProducts.length > 0 && (
//             <section>
//               <h2 className="text-xl font-semibold text-slate-900 mb-4">Similar Products</h2>
//               <div>
//                 <FeaturedProducts products={similarProducts} />
//               </div>
//             </section>
//           )}

//         </div>
//       </main>
//     </>
//   );
// };

// export default ProductDetailPage;



// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import { motion } from 'framer-motion';
// import { 
//   Star, Truck, ShieldCheck, RotateCcw, Heart, ShoppingCart, 
//   ChevronRight, Share2, Minus, Plus, Info,ShoppingBag,MapPin,Shield,CheckCircle2 ,Clock
// } from 'lucide-react';

// import Badge from '../components/ui/Badge';
// import Button from '../components/ui/Button';
// import { FeaturedProducts } from '../components/home/FeaturedProducts';
// import { products } from '../data/products';
// import { useCart } from '../context/CartContext';
// import { useWishlist } from '../context/WishlistContext';
// import { useNavigate} from 'react-router-dom';

// const ProductDetailPage = () => {
//   const navigate = useNavigate();
//   const { addItem } = useCart();
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(0);

//   const product = {
//     id: 'p1',
//     name: 'Premium Wireless Headphones',
//     brand: 'SoundMaster',
//     price: 149.99,
//     originalPrice: 199.99,
//     rating: 4.5,
//     reviews: 2847,
//     images: [
//       'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       'https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     ],
//     highlights: [
//       'Active Noise Cancellation',
//       '40 Hours Battery Life',
//       'Premium Sound Quality',
//       'Bluetooth 5.0',
//       'Voice Assistant Support'
//     ],
//     specifications: {
//       'Brand': 'SoundMaster',
//       'Model': 'SM-WH1000',
//       'Color': 'Midnight Black',
//       'Headphone Type': 'Over-ear',
//       'Connectivity': 'Wireless',
//       'Battery Life': '40 Hours'
//     },
//     seller: {
//       name: 'ElectroHub',
//       rating: 4.8,
//       reliability: '96%',
//     }
//   };

//   const handleAddToCart = () => {
//     addItem({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.images[0],
//       description: product.highlights.join(', '),
//       quantity: quantity
//     });
//   };
//   const similarProducts = products
//     .filter(p => p.category === product.category && p.id !== product.id)
//     .slice(0, 4);

    
//   // const handleAddToCart = () => {
//   //   addToCart(product, quantity, selectedColor, selectedSize);
//   // };
//   return (
  
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left Column - Images */}
//           <div className="lg:w-2/5">
//             <div className="sticky top-24">
//               <div className="aspect-square rounded-lg overflow-hidden mb-4 border border-gray-200">
//                 <img
//                   src={product.images[selectedImage]}
//                   alt={product.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="grid grid-cols-6 gap-2">
//                 {product.images.map((image, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedImage(index)}
//                     className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
//                       selectedImage === index ? 'border-blue-500' : 'border-gray-200'
//                     }`}
//                   >
//                     <img
//                       src={image}
//                       alt={`${product.name} view ${index + 1}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//               <div className="flex gap-2 mt-4">
//                 <Button
//                   onClick={handleAddToCart}
//                   leftIcon={<ShoppingBag size={20} />}
//                   className="flex-1 bg-yellow-500 hover:bg-yellow-600"
//                 >
//                   ADD TO CART
//                 </Button>
//                 <Button
//                   onClick={() => navigate('/checkout')}
//                   className="flex-1 bg-orange-500 hover:bg-orange-600"
//                 >
//                   BUY NOW
//                 </Button>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Details */}
//           <div className="lg:w-3/5">
//             <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
//               <div className="text-gray-500 text-sm mb-1">{product.brand}</div>
//               <h1 className="text-xl font-medium text-gray-900 mb-2">{product.name}</h1>
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-sm">
//                   <span className="font-medium">{product.rating}</span>
//                   <Star size={14} className="ml-1" />
//                 </div>
//                 <span className="text-gray-500">{product.reviews.toLocaleString()} Ratings</span>
//               </div>

//               <div className="mb-4">
//                 <div className="flex items-baseline gap-2">
//                   <span className="text-3xl font-medium">₹{product.price.toLocaleString()}</span>
//                   {product.originalPrice && (
//                     <>
//                       <span className="text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
//                       <span className="text-green-600">
//                         {Math.round((1 - product.price / product.originalPrice) * 100)}% off
//                       </span>
//                     </>
//                   )}
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 mb-6">
//                 <span className="text-gray-700">Quantity:</span>
//                 <div className="flex items-center border rounded">
//                   <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     className="p-2 hover:bg-gray-100"
//                   >
//                     <Minus size={16} />
//                   </button>
//                   <span className="px-4 py-2 border-x">{quantity}</span>
//                   <button
//                     onClick={() => setQuantity(quantity + 1)}
//                     className="p-2 hover:bg-gray-100"
//                   >
//                     <Plus size={16} />
//                   </button>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <div className="flex items-start gap-4">
//                   <MapPin className="text-gray-400 mt-1" size={20} />
//                   <div>
//                     <div className="flex items-center gap-2 mb-1">
//                       <span className="font-medium">Delivery</span>
//                       <input
//                         type="text"
//                         placeholder="Enter Pincode"
//                         className="border-b border-gray-300 focus:border-blue-500 outline-none px-1 py-0.5"
//                       />
//                       <button className="text-blue-600 font-medium">Check</button>
//                     </div>
//                     <p className="text-sm text-gray-600">
//                       Usually delivered in 5-7 days
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <Shield className="text-gray-400 mt-1" size={20} />
//                   <div>
//                     <span className="font-medium">Warranty</span>
//                     <p className="text-sm text-gray-600">
//                       1 Year Manufacturer Warranty
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <Truck className="text-gray-400 mt-1" size={20} />
//                   <div>
//                     <span className="font-medium">Free Delivery</span>
//                     <p className="text-sm text-gray-600">
//                       Orders above ₹500
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

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

//             <div className="bg-white rounded-lg p-6 shadow-sm">
//               <h2 className="font-medium mb-4">Product Details</h2>

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

//               <div>
//                 <h3 className="text-gray-700 mb-2">Specifications</h3>
//                 <div className="border rounded-lg">
//                   {Object.entries(product.specifications).map(([key, value], index) => (
//                     <div
//                       key={key}
//                       className={`flex ${
//                         index !== 0 ? 'border-t' : ''
//                       }`}
//                     >
//                       <div className="w-1/3 p-3 bg-gray-50 text-gray-600">{key}</div>
//                       <div className="w-2/3 p-3 text-gray-800">{value}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//             {/* Similar Products */}
//             {similarProducts.length > 0 && (
//             <section>
//               <h2 className="text-xl font-semibold text-slate-900 mb-4">Similar Products</h2>
//               <div>
//                 <FeaturedProducts products={similarProducts} />
//               </div>
//             </section>
//           )}

//         </div>
//       </div>
   
//   );
// };

// export default ProductDetailPage;



// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Star, Truck, Shield, Plus, Minus, ShoppingBag, MapPin, CheckCircle2, Clock,ThumbsUp,ChevronRight, ThumbsDown } from 'lucide-react';
// import Button from '../components/ui/Button';
// import { FeaturedProducts } from '../components/home/FeaturedProducts';
// import { products } from '../data/products';
// import { useCart } from '../context/CartContext';

// const ProductDetailPage = () => {
//   const { productId } = useParams();
//   const navigate = useNavigate();
//   // const { addItem } = useCart();
//   const { addToCart } = useCart();
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(0);

//   // const product = products.find(p => p.id === id);
//   const product = products.find(p => p.id === productId);
//   if (!product) {
//     return <div className="text-center py-20 text-gray-500">Product not found.</div>;
//   }

//   const handleAddToCart = () => {
//     addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.images[0],
//       description: product.highlights?.join(', ') || '',
//       quantity: quantity
//     });
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
//                 className="flex-1 bg-yellow-500 hover:bg-yellow-600"
//               >
//                 ADD TO CART
//               </Button>
//               <Button
//                 onClick={() => navigate('/checkout')}
//                 className="flex-1 bg-orange-500 hover:bg-orange-600"
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

//         {/* Customer Ratings & Reviews - Flipkart Style */}
// <div className="bg-white p-4 rounded-sm shadow-sm mt-6">
//   <h3 className="text-lg font-medium text-gray-900 mb-4">Ratings & Reviews</h3>
  
//   <div className="flex flex-col md:flex-row gap-6">
//     {/* Rating Summary */}
//     <div className="md:w-1/3 border-r border-gray-200 pr-6">
//       <div className="flex flex-col items-center justify-center mb-4">
//         <div className="text-4xl font-bold text-gray-900 mb-1">
//           {product.rating}
//           <span className="text-xl text-gray-500">/5</span>
//         </div>
//         <div className="flex items-center mb-2">
//           {Array.from({ length: 5 }).map((_, idx) => (
//             <Star 
//               key={idx} 
//               size={18} 
//               className={idx < Math.floor(product.rating) 
//                 ? "fill-yellow-400 text-yellow-400" 
//                 : "fill-gray-300 text-gray-300"
//               }
//             />
//           ))}
//         </div>
//         <span className="text-sm text-gray-600">
//           {product.reviews?.toLocaleString()} Ratings & {Math.floor(product.reviews * 0.7)?.toLocaleString()} Reviews
//         </span>
//       </div>
      
//       {/* Rating Breakdown */}
//       <div className="space-y-2">
//         {[5, 4, 3, 2, 1].map(star => (
//           <div key={star} className="flex items-center gap-2">
//             <button className="text-sm text-blue-500 font-medium w-6 text-left">
//               {star}
//               <Star size={12} className="inline fill-blue-500 text-blue-500 ml-0.5" />
//             </button>
//             <div className="flex-1 bg-gray-200 rounded-full h-2">
//               <div 
//                 className="bg-green-500 h-2 rounded-full" 
//                 style={{ width: `${(Math.random() * 30 + 70 - (5-star)*15)}%` }} 
//               />
//             </div>
//             <span className="text-xs text-gray-500 w-8 text-right">
//               {Math.floor((Math.random() * 30 + 70 - (5-star)*15))}%
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
    
//     {/* Review Filters */}
//     <div className="md:w-3/4">
//       <div>
//         <h1>Images uploaded by customers:</h1>
//         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 my-4">
//   {[
//     "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop&auto=format", // Headphones
//     "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop&auto=format", // Sneakers
//     "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=100&h=100&fit=crop&auto=format", // Plant
//     "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop&auto=format", // Watch
//     "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&h=100&fit=crop&auto=format", // Laptop
//   ].map((url, idx) => (
//     <img
//       key={idx}
//       src={url}
//       alt={`Customer uploaded ${idx + 1}`}
//       className="w-full h-auto rounded object-cover border"
//     />
//   ))}
// </div>
//       </div>
      
//       {/* Sample Reviews */}
//       <div className="space-y-6">
//         {[1, 2].map((_, i) => (
//           <div key={i} className="border-b border-gray-200 pb-4">
//             <div className="flex items-center mb-2">
//               <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-sm mr-2">
//                 {String.fromCharCode(65 + i)}
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-900">User {i+1}</p>
//                 <div className="flex items-center">
//                   {Array.from({ length: 5 }).map((_, idx) => (
//                     <Star 
//                       key={idx} 
//                       size={14} 
//                       className={idx < 4 
//                         ? "fill-yellow-400 text-yellow-400" 
//                         : "fill-gray-300 text-gray-300"
//                       }
//                     />
//                   ))}
//                   <span className="text-xs text-gray-500 ml-2">1 day ago</span>
//                 </div>
//               </div>
//             </div>
//             <p className="text-sm text-gray-700 mb-2">
//               {i === 0 
//                 ? "Great product! Works exactly as described. The quality is excellent and it arrived sooner than expected."
//                 : "Good product but the color is slightly different than shown in pictures. Otherwise working fine."
//               }
//             </p>
//             <div className="flex gap-2 mb-2">
//               <div className="w-16 h-16 bg-gray-100 rounded-sm"></div>
//               <div className="w-16 h-16 bg-gray-100 rounded-sm"></div>
//             </div>
//             <div className="flex items-center text-xs text-gray-500">
//               <button className="flex items-center mr-4">
//                 <ThumbsUp size={14} className="mr-1" /> Helpful (12)
//               </button>
//               <button className="flex items-center">
//                 <ThumbsDown size={14} className="mr-1" /> Not Helpful (2)
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <button className="mt-4 text-blue-500 text-sm font-medium flex items-center">
//         See All Reviews
//         <ChevronRight size={16} />
//       </button>
//     </div>
//   </div>
// </div>

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
import { Star, Truck, Shield, Plus, Minus, ShoppingBag, MapPin, CheckCircle2, Clock, ThumbsUp, ChevronRight, ThumbsDown } from 'lucide-react';
import Button from '../components/ui/Button';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false); // State for feedback

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

    // Log the item being added for debugging
    console.log("Adding to cart:", cartItem);

    // Call the context's addToCart function
    addToCart(cartItem);

    // Show feedback to the user
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000); // Hide feedback after 2 seconds
  };

  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

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
               ADD TO CART
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

            <div className="flex items-center gap-4 mb-6">
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

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-gray-400 mt-1" size={20} />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">Delivery</span>
                    <input
                      type="text"
                      placeholder="Enter Pincode"
                      className="border-b border-gray-300 focus:border-blue-500 outline-none px-1 py-0.5"
                    />
                    <button className="text-blue-600 font-medium">Check</button>
                  </div>
                  <p className="text-sm text-gray-600">Usually delivered in 5-7 days</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Shield className="text-gray-400 mt-1" size={20} />
                <div>
                  <span className="font-medium">Warranty</span>
                  <p className="text-sm text-gray-600">1 Year Manufacturer Warranty</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Truck className="text-gray-400 mt-1" size={20} />
                <div>
                  <span className="font-medium">Free Delivery</span>
                  <p className="text-sm text-gray-600">Orders above ₹500</p>
                </div>
              </div>
            </div>
          </div>

          {/* Seller Info */}
          {product.seller && (
            <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
              <h2 className="font-medium mb-4">Seller Information</h2>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-gray-700">{product.seller.name}</span>
                <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-sm">
                  <span>{product.seller.rating}</span>
                  <Star size={14} className="ml-1" />
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  {product.seller.reliability} Positive Seller Ratings
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={16} className="text-blue-600" />
                  Quick Response Time
                </li>
              </ul>
            </div>
          )}

          {/* Product Details */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="font-medium mb-4">Product Details</h2>

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

            {product.specifications && (
              <div>
                <h3 className="text-gray-700 mb-2">Specifications</h3>
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
              </div>
            )}
          </div>

          {/* Customer Ratings & Reviews - Flipkart Style */}
          <div className="bg-white p-4 rounded-sm shadow-sm mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Ratings & Reviews</h3>
            
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
                
                {/* Rating Breakdown */}
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map(star => (
                    <div key={star} className="flex items-center gap-2">
                      <button className="text-sm text-blue-500 font-medium w-6 text-left">
                        {star}
                        <Star size={12} className="inline fill-blue-500 text-blue-500 ml-0.5" />
                      </button>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${(Math.random() * 30 + 70 - (5-star)*15)}%` }} 
                        />
                      </div>
                      <span className="text-xs text-gray-500 w-8 text-right">
                        {Math.floor((Math.random() * 30 + 70 - (5-star)*15))}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Review Filters */}
              <div className="md:w-3/4">
                <div>
                  <h1>Images uploaded by customers:</h1>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 my-4">
                    {[
                      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop&auto=format", // Headphones
                      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop&auto=format", // Sneakers
                      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=100&h=100&fit=crop&auto=format", // Plant
                      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop&auto=format", // Watch
                      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&h=100&fit=crop&auto=format", // Laptop
                    ].map((url, idx) => (
                      <img
                        key={idx}
                        src={url}
                        alt={`Customer uploaded ${idx + 1}`}
                        className="w-full h-auto rounded object-cover border"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Sample Reviews */}
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
                      <div className="flex gap-2 mb-2">
                        <div className="w-16 h-16 bg-gray-100 rounded-sm"></div>
                        <div className="w-16 h-16 bg-gray-100 rounded-sm"></div>
                      </div>
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
                
                <button className="mt-4 text-blue-500 text-sm font-medium flex items-center">
                  See All Reviews
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
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