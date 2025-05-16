// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import { ChevronRight, SlidersHorizontal, X, Search } from 'lucide-react';
// import ProductCard from '../components/product/ProductCard';
// import Button from '../components/ui/Button';
// import { categories, products } from '../data/products';
// import { motion, AnimatePresence } from 'framer-motion';

// const CategoryPage = () => {
//   const { categoryId, subCategoryId } = useParams();
//   const [sortBy, setSortBy] = useState('featured');
//   const [priceRange, setPriceRange] = useState([0, 500]);
//   const [filterOpen, setFilterOpen] = useState(false);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   const category = categories.find(cat => cat.id === categoryId);

//   const categoryProducts = products.filter(product =>
//     product.category === categoryId &&
//     (!subCategoryId || product.childCategory === subCategoryId)
//   );

//   const allColors = Array.from(new Set(
//     categoryProducts
//       .filter(p => p.colors)
//       .flatMap(p => p.colors || [])
//   ));

//   const allSizes = Array.from(new Set(
//     categoryProducts
//       .filter(p => p.sizes)
//       .flatMap(p => p.sizes || [])
//   ));

//   const filteredProducts = categoryProducts
//     .filter(product =>
//       (product.price >= priceRange[0] && product.price <= priceRange[1]) &&
//       (selectedColors.length === 0 || (product.colors && selectedColors.some(c => product.colors.includes(c)))) &&
//       (selectedSizes.length === 0 || (product.sizes && selectedSizes.some(s => product.sizes.includes(s)))) &&
//       (searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
//     )
//     .sort((a, b) => {
//       switch (sortBy) {
//         case 'price-low-high': return a.price - b.price;
//         case 'price-high-low': return b.price - a.price;
//         case 'newest': return a.isNew ? -1 : b.isNew ? 1 : 0;
//         case 'bestselling': return a.isBestseller ? -1 : b.isBestseller ? 1 : 0;
//         case 'rating': return b.rating - a.rating;
//         default: return a.isFeatured ? -1 : b.isFeatured ? 1 : 0;
//       }
//     });

//   const toggleColor = (color) => {
//     setSelectedColors(prev =>
//       prev.includes(color)
//         ? prev.filter(c => c !== color)
//         : [...prev, color]
//     );
//   };

//   const toggleSize = (size) => {
//     setSelectedSizes(prev =>
//       prev.includes(size)
//         ? prev.filter(s => s !== size)
//         : [...prev, size]
//     );
//   };

//   const clearFilters = () => {
//     setPriceRange([0, 500]);
//     setSelectedColors([]);
//     setSelectedSizes([]);
//     setSearchQuery('');
//   };

//   if (!category) {
//     return (
//       <div className="container mx-auto px-4 py-16 text-center">
//         <h1 className="text-2xl font-bold text-slate-900 mb-4">Category Not Found</h1>
//         <p className="text-slate-600 mb-8">The category you're looking for doesn't exist or has been removed.</p>
//         <Button as={Link} to="/">Return to Home</Button>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>{`${category.name}${subCategoryId ? ` / ${subCategoryId}` : ''} | ShopHub`}</title>
//         <meta name="description" content={category.description} />
//       </Helmet>

//       <main className="py-8">
//         <div className="container mx-auto px-4">
//           {/* Breadcrumbs */}
//           <nav className="mb-6">
//             <ol className="flex items-center text-sm">
//               <li>
//                 <Link to="/" className="text-slate-500 hover:text-indigo-600 transition-colors">Home</Link>
//               </li>
//               <ChevronRight size={14} className="mx-2 text-slate-400" />
//               <li>
//                 <Link to="/category" className="text-slate-500 hover:text-indigo-600 transition-colors">Collections</Link>
//               </li>
//               <ChevronRight size={14} className="mx-2 text-slate-400" />
//               <li className="text-slate-900 font-medium capitalize">
//                 {category.name}
//                 {subCategoryId && (
//                   <span className="text-slate-500 ml-1">/ {subCategoryId.replace(/-/g, ' ')}</span>
//                 )}
//               </li>
//             </ol>
//           </nav>

//           {/* Category Hero */}
//           <div className="relative h-64 rounded-xl overflow-hidden mb-8">
//             <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-transparent flex items-center">
//               <div className="p-8">
//                 <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
//                   {category.name}
//                   {subCategoryId && ` / ${subCategoryId.replace(/-/g, ' ')}`}
//                 </h1>
//                 <p className="text-white/90 max-w-md">{category.description}</p>
//               </div>
//             </div>
//           </div>

        
//   {/* Filters and products */}
//   <div className="flex flex-col lg:flex-row gap-8">
//   {/* Mobile filter button */}
//   <div className="lg:hidden">
//     <Button 
//       onClick={() => setFilterOpen(true)}
//       variant="outline" 
//       fullWidth
//       leftIcon={<SlidersHorizontal size={18} />}
//     >
//       Filters ({selectedColors.length + selectedSizes.length + (priceRange[0] > 0 || priceRange[1] < 500 ? 1 : 0)})
//     </Button>
//   </div>

//   {/* Mobile filter sidebar */}
//   <AnimatePresence>
//     {filterOpen && (
//       <motion.div 
//         initial={{ x: '-100%' }}
//         animate={{ x: 0 }}
//         exit={{ x: '-100%' }}
//         transition={{ type: 'spring', damping: 25 }}
//         className="fixed inset-0 z-50 bg-white p-6 overflow-y-auto lg:hidden"
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-bold text-slate-900">Filters</h2>
//           <button 
//             onClick={() => setFilterOpen(false)}
//             className="p-2 rounded-full hover:bg-slate-100"
//           >
//             <X size={20} className="text-slate-700" />
//           </button>
//         </div>
        
//         {/* Filter content - same as desktop but adapted for mobile */}
//         <div className="space-y-8">
//           {/* Search */}
//           <div>
//             <h3 className="text-sm font-medium text-slate-900 mb-4">Search</h3>
//             <div className="relative">
//               <input 
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//               />
//               <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
//             </div>
//           </div>

//           {/* Price range */}
//           <div>
//             <h3 className="text-sm font-medium text-slate-900 mb-4">Price Range</h3>
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm text-slate-600">${priceRange[0]}</span>
//               <span className="text-sm text-slate-600">${priceRange[1]}</span>
//             </div>
//             <input 
//               type="range"
//               min="0"
//               max="500"
//               value={priceRange[1]}
//               onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
//               className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
//             />
//           </div>

//           {/* Colors */}
//           {allColors.length > 0 && (
//             <div>
//               <h3 className="text-sm font-medium text-slate-900 mb-4">Colors</h3>
//               <div className="flex flex-wrap gap-2">
//                 {allColors.map(color => (
//                   <button
//                     key={color}
//                     onClick={() => toggleColor(color)}
//                     className={`px-3 py-1 rounded-full border text-sm transition-colors ${
//                       selectedColors.includes(color)
//                         ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
//                         : 'border-slate-300 text-slate-700 hover:border-slate-400'
//                     }`}
//                   >
//                     {color}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Sizes */}
//           {allSizes.length > 0 && (
//             <div>
//               <h3 className="text-sm font-medium text-slate-900 mb-4">Sizes</h3>
//               <div className="flex flex-wrap gap-2">
//                 {allSizes.map(size => (
//                   <button
//                     key={size}
//                     onClick={() => toggleSize(size)}
//                     className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${
//                       selectedSizes.includes(size)
//                         ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
//                         : 'border-slate-300 text-slate-700 hover:border-slate-400'
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Actions */}
//           <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
//             <Button onClick={clearFilters} variant="outline">Clear All Filters</Button>
//             <Button onClick={() => setFilterOpen(false)}>Apply Filters</Button>
//           </div>
//         </div>
//       </motion.div>
//     )}
//   </AnimatePresence>

//   {/* Desktop sidebar filters */}
//   <div className="hidden lg:block w-64 shrink-0">
//     <div className="sticky top-24 space-y-8">
//       <h2 className="text-lg font-bold text-slate-900 mb-6">Filters</h2>

//       {/* Search */}
//       <div>
//         <h3 className="text-sm font-medium text-slate-900 mb-4">Search</h3>
//         <div className="relative">
//           <input 
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//           />
//           <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
//         </div>
//       </div>

//       {/* Price range */}
//       <div>
//         <h3 className="text-sm font-medium text-slate-900 mb-4">Price Range</h3>
//         <div className="flex items-center justify-between mb-2">
//           <span className="text-sm text-slate-600">${priceRange[0]}</span>
//           <span className="text-sm text-slate-600">${priceRange[1]}</span>
//         </div>
//         <input 
//           type="range"
//           min="0"
//           max="500"
//           value={priceRange[1]}
//           onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
//           className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
//         />
//       </div>

//       {/* Colors */}
//       {allColors.length > 0 && (
//         <div>
//           <h3 className="text-sm font-medium text-slate-900 mb-4">Colors</h3>
//           <div className="flex flex-wrap gap-2">
//             {allColors.map(color => (
//               <button
//                 key={color}
//                 onClick={() => toggleColor(color)}
//                 className={`px-3 py-1 rounded-full border text-sm transition-colors ${
//                   selectedColors.includes(color)
//                     ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
//                     : 'border-slate-300 text-slate-700 hover:border-slate-400'
//                 }`}
//               >
//                 {color}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Sizes */}
//       {allSizes.length > 0 && (
//         <div>
//           <h3 className="text-sm font-medium text-slate-900 mb-4">Sizes</h3>
//           <div className="flex flex-wrap gap-2">
//             {allSizes.map(size => (
//               <button
//                 key={size}
//                 onClick={() => toggleSize(size)}
//                 className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${
//                   selectedSizes.includes(size)
//                     ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
//                     : 'border-slate-300 text-slate-700 hover:border-slate-400'
//                 }`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Clear filters */}
//       {(selectedColors.length > 0 || selectedSizes.length > 0 || priceRange[0] > 0 || priceRange[1] < 500 || searchQuery) && (
//         <Button onClick={clearFilters} variant="outline">Clear All Filters</Button>
//       )}
//     </div>
//   </div>

//   {/* Products grid */}
//   <div className="flex-1">
//     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//       <div>
//         <p className="text-slate-600 mb-1">{filteredProducts.length} products</p>
//       </div>
//       <div className="mt-4 sm:mt-0 w-full sm:w-auto">
//         <select
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//           className="w-full sm:w-auto px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//         >
//           <option value="featured">Featured</option>
//           <option value="price-low-high">Price: Low to High</option>
//           <option value="price-high-low">Price: High to Low</option>
//           <option value="newest">Newest</option>
//           <option value="bestselling">Best Selling</option>
//           <option value="rating">Top Rated</option>
//         </select>
//       </div>
//     </div>

//     {filteredProducts.length > 0 ? (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {filteredProducts.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     ) : (
//       <div className="text-center py-16 bg-slate-50 rounded-xl">
//         <h3 className="text-xl font-semibold text-slate-900">No products found</h3>
//         <p className="text-slate-600">Try adjusting your filters or clearing them to see more products.</p>
//       </div>
//     )}
//   </div>
// </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default CategoryPage;


// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import { ChevronRight, SlidersHorizontal, X, Search } from 'lucide-react';
// import ProductCard from '../components/product/ProductCard';
// import Button from '../components/ui/Button';
// import { categories, products } from '../data/products';
// import { motion, AnimatePresence } from 'framer-motion';

// const CategoryPage = () => {
//   const { categoryId, subCategoryId } = useParams();
//   const [sortBy, setSortBy] = useState('featured');
//   const [priceRange, setPriceRange] = useState([0, 500]);
//   const [filterOpen, setFilterOpen] = useState(false);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [minRating, setMinRating] = useState(0);
//   const [minDiscount, setMinDiscount] = useState(0);
//   const [availability, setAvailability] = useState('all');
//   const [deliveryOption, setDeliveryOption] = useState('all');
//   const [isFilterApplied, setIsFilterApplied] = useState(false);

//   const category = categories.find(cat => cat.id === categoryId);

//   const categoryProducts = products.filter(product =>
//     product.category === categoryId &&
//     (!subCategoryId || product.childCategory === subCategoryId)
//   );

//   // Extract unique filter options
//   const allColors = Array.from(new Set(
//     categoryProducts.filter(p => p.colors).flatMap(p => p.colors || [])
//   ));

//   const allSizes = Array.from(new Set(
//     categoryProducts.filter(p => p.sizes).flatMap(p => p.sizes || [])
//   ));

//   const allBrands = Array.from(new Set(
//     categoryProducts.map(p => p.brand).filter(Boolean)
//   ));

//   // Console log initial products (unfiltered)
//   console.log("Initial Category Products:", categoryProducts);

//   // Check if any filter is applied
//   useEffect(() => {
//     const hasFilters = (
//       priceRange[0] > 0 || priceRange[1] < 500 ||
//       selectedColors.length > 0 ||
//       selectedSizes.length > 0 ||
//       searchQuery !== '' ||
//       selectedBrands.length > 0 ||
//       minRating > 0 ||
//       minDiscount > 0 ||
//       availability !== 'all' ||
//       deliveryOption !== 'all'
//     );
//     setIsFilterApplied(hasFilters);
//   }, [priceRange, selectedColors, selectedSizes, searchQuery, selectedBrands, minRating, minDiscount, availability, deliveryOption]);

//   // Filter products only if a filter is applied
//   let displayedProducts = [...categoryProducts];
//   if (isFilterApplied) {
//     displayedProducts = categoryProducts
//       .filter(product => {
//         const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
//         const matchesColors = selectedColors.length === 0 || (product.colors && selectedColors.some(c => product.colors.includes(c)));
//         const matchesSizes = selectedSizes.length === 0 || (product.sizes && selectedSizes.some(s => product.sizes.includes(s)));
//         const matchesSearch = searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase());
//         const matchesBrands = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
//         const matchesRating = product.rating >= minRating;
//         const matchesDiscount = product.discount >= minDiscount;
//         const matchesAvailability = availability === 'all' || 
//           (availability === 'inStock' && product.inStock) || 
//           (availability === 'outOfStock' && !product.inStock);
//         const matchesDelivery = deliveryOption === 'all' || 
//           (deliveryOption === 'sameDay' && product.sameDayDelivery) || 
//           (deliveryOption === 'freeShipping' && product.freeShipping);

//         return matchesPrice && matchesColors && matchesSizes && matchesSearch && 
//                matchesBrands && matchesRating && matchesDiscount && matchesAvailability && matchesDelivery;
//       });
//   }

//   // Apply sorting (sorting can be applied even without filters)
//   displayedProducts = displayedProducts.sort((a, b) => {
//     switch (sortBy) {
//       case 'price-low-high': return a.price - b.price;
//       case 'price-high-low': return b.price - a.price;
//       case 'newest': return a.isNew ? -1 : b.isNew ? 1 : 0;
//       case 'bestselling': return a.isBestseller ? -1 : b.isBestseller ? 1 : 0;
//       case 'rating': return b.rating - a.rating;
//       default: return a.isFeatured ? -1 : b.isFeatured ? 1 : 0;
//     }
//   });

//   // Console log filters and displayed products
//   useEffect(() => {
//     console.log("Applied Filters:", {
//       priceRange,
//       selectedColors,
//       selectedSizes,
//       searchQuery,
//       selectedBrands,
//       minRating,
//       minDiscount,
//       availability,
//       deliveryOption,
//       sortBy,
//       isFilterApplied
//     });
//     console.log("Displayed Products:", displayedProducts);
//   }, [priceRange, selectedColors, selectedSizes, searchQuery, selectedBrands, minRating, minDiscount, availability, deliveryOption, sortBy, displayedProducts, isFilterApplied]);

//   const toggleColor = (color) => {
//     setSelectedColors(prev =>
//       prev.includes(color)
//         ? prev.filter(c => c !== color)
//         : [...prev, color]
//     );
//   };

//   const toggleSize = (size) => {
//     setSelectedSizes(prev =>
//       prev.includes(size)
//         ? prev.filter(s => s !== size)
//         : [...prev, size]
//     );
//   };

//   const toggleBrand = (brand) => {
//     setSelectedBrands(prev =>
//       prev.includes(brand)
//         ? prev.filter(b => b !== brand)
//         : [...prev, brand]
//     );
//   };

//   const clearFilters = () => {
//     setPriceRange([0, 500]);
//     setSelectedColors([]);
//     setSelectedSizes([]);
//     setSearchQuery('');
//     setSelectedBrands([]);
//     setMinRating(0);
//     setMinDiscount(0);
//     setAvailability('all');
//     setDeliveryOption('all');
//     setIsFilterApplied(false);
//   };

//   if (!category) {
//     return (
//       <div className="container mx-auto px-4 py-16 text-center">
//         <h1 className="text-2xl font-bold text-slate-900 mb-4">Category Not Found</h1>
//         <p className="text-slate-600 mb-8">The category you're looking for doesn't exist or has been removed.</p>
//         <Button as={Link} to="/">Return to Home</Button>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>{`${category.name}${subCategoryId ? ` / ${subCategoryId}` : ''} | ShopHub`}</title>
//         <meta name="description" content={category.description} />
//       </Helmet>

//       <main className="py-8">
//         <div className="container mx-auto px-4">
//           {/* Breadcrumbs */}
//           <nav className="mb-6">
//             <ol className="flex items-center text-sm">
//               <li>
//                 <Link to="/" className="text-slate-500 hover:text-indigo-600 transition-colors">Home</Link>
//               </li>
//               <ChevronRight size={14} className="mx-2 text-slate-400" />
//               <li>
//                 <Link to="/category" className="text-slate-500 hover:text-indigo-600 transition-colors">Collections</Link>
//               </li>
//               <ChevronRight size={14} className="mx-2 text-slate-400" />
//               <li className="text-slate-900 font-medium capitalize">
//                 {category.name}
//                 {subCategoryId && (
//                   <span className="text-slate-500 ml-1">/ {subCategoryId.replace(/-/g, ' ')}</span>
//                 )}
//               </li>
//             </ol>
//           </nav>

//           {/* Category Hero */}
//           <div className="relative h-64 rounded-xl overflow-hidden mb-8">
//             <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-transparent flex items-center">
//               <div className="p-8">
//                 <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
//                   {category.name}
//                   {subCategoryId && ` / ${subCategoryId.replace(/-/g, ' ')}`}
//                 </h1>
//                 <p className="text-white/90 max-w-md">{category.description}</p>
//               </div>
//             </div>
//           </div>

//           {/* Filters and products */}
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Mobile filter button */}
//             <div className="lg:hidden">
//               <Button 
//                 onClick={() => setFilterOpen(true)}
//                 variant="outline" 
//                 fullWidth
//                 leftIcon={<SlidersHorizontal size={18} />}
//               >
//                 Filters ({selectedColors.length + selectedSizes.length + selectedBrands.length + 
//                          (priceRange[0] > 0 || priceRange[1] < 500 ? 1 : 0) + 
//                          (minRating > 0 ? 1 : 0) + (minDiscount > 0 ? 1 : 0) + 
//                          (availability !== 'all' ? 1 : 0) + (deliveryOption !== 'all' ? 1 : 0)})
//               </Button>
//             </div>

//             {/* Mobile filter sidebar */}
//             <AnimatePresence>
//               {filterOpen && (
//                 <motion.div 
//                   initial={{ x: '-100%' }}
//                   animate={{ x: 0 }}
//                   exit={{ x: '-100%' }}
//                   transition={{ type: 'spring', damping: 25 }}
//                   className="fixed inset-0 z-50 bg-white p-6 overflow-y-auto lg:hidden"
//                 >
//                   <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-xl font-bold text-slate-900">Filters</h2>
//                     <button 
//                       onClick={() => setFilterOpen(false)}
//                       className="p-2 rounded-full hover:bg-slate-100"
//                     >
//                       <X size={20} className="text-slate-700" />
//                     </button>
//                   </div>
                  
//                   {/* Filter content */}
//                   <div className="space-y-8">
//                     {/* Search */}
//                     <div>
//                       <h3 className="text-sm font-medium text-slate-900 mb-4">Search</h3>
//                       <div className="relative">
//                         <input 
//                           type="text"
//                           placeholder="Search products..."
//                           value={searchQuery}
//                           onChange={(e) => setSearchQuery(e.target.value)}
//                           className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                         />
//                         <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                       </div>
//                     </div>

//                     {/* Price range */}
//                     <div>
//                       <h3 className="text-sm font-medium text-slate-900 mb-4">Price Range</h3>
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm text-slate-600">${priceRange[0]}</span>
//                         <span className="text-sm text-slate-600">${priceRange[1]}</span>
//                       </div>
//                       <input 
//                         type="range"
//                         min="0"
//                         max="500"
//                         value={priceRange[1]}
//                         onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
//                         className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
//                       />
//                     </div>

//                     {/* Brands */}
//                     {allBrands.length > 0 && (
//                       <div>
//                         <h3 className="text-sm font-medium text-slate-900 mb-4">Brands</h3>
//                         <div className="space-y-2">
//                           {allBrands.map(brand => (
//                             <label key={brand} className="flex items-center">
//                               <input
//                                 type="checkbox"
//                                 checked={selectedBrands.includes(brand)}
//                                 onChange={() => toggleBrand(brand)}
//                                 className="h-4 w-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
//                               />
//                               <span className="ml-2 text-sm text-slate-700">{brand}</span>
//                             </label>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Colors */}
//                     {allColors.length > 0 && (
//                       <div>
//                         <h3 className="text-sm font-medium text-slate-900 mb-4">Colors</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {allColors.map(color => (
//                             <button
//                               key={color}
//                               onClick={() => toggleColor(color)}
//                               className={`px-3 py-1 rounded-full border text-sm transition-colors ${
//                                 selectedColors.includes(color)
//                                   ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
//                                   : 'border-slate-300 text-slate-700 hover:border-slate-400'
//                               }`}
//                             >
//                               {color}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Sizes */}
//                     {allSizes.length > 0 && (
//                       <div>
//                         <h3 className="text-sm font-medium text-slate-900 mb-4">Sizes</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {allSizes.map(size => (
//                             <button
//                               key={size}
//                               onClick={() => toggleSize(size)}
//                               className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${
//                                 selectedSizes.includes(size)
//                                   ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
//                                   : 'border-slate-300 text-slate-700 hover:border-slate-400'
//                               }`}
//                             >
//                               {size}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Customer Ratings */}
//                     <div>
//                       <h3 className="text-sm font-medium text-slate-900 mb-4">Customer Ratings</h3>
//                       <div className="space-y-2">
//                         {[4, 3, 2, 1].map(rating => (
//                           <label key={rating} className="flex items-center">
//                             <input
//                               type="radio"
//                               name="rating"
//                               checked={minRating === rating}
//                               onChange={() => setMinRating(rating)}
//                               className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                             />
//                             <span className="ml-2 text-sm text-slate-700">{rating}+ Stars</span>
//                           </label>
//                         ))}
//                         <label className="flex items-center">
//                           <input
//                             type="radio"
//                             name="rating"
//                             checked={minRating === 0}
//                             onChange={() => setMinRating(0)}
//                             className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                           />
//                           <span className="ml-2 text-sm text-slate-700">All Ratings</span>
//                         </label>
//                       </div>
//                     </div>

//                     {/* Discount */}
//                     <div>
//                       <h3 className="text-sm font-medium text-slate-900 mb-4">Discount</h3>
//                       <div className="space-y-2">
//                         {[50, 40, 30, 20, 10].map(discount => (
//                           <label key={discount} className="flex items-center">
//                             <input
//                               type="radio"
//                               name="discount"
//                               checked={minDiscount === discount}
//                               onChange={() => setMinDiscount(discount)}
//                               className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                             />
//                             <span className="ml-2 text-sm text-slate-700">{discount}% and Above</span>
//                           </label>
//                         ))}
//                         <label className="flex items-center">
//                           <input
//                             type="radio"
//                             name="discount"
//                             checked={minDiscount === 0}
//                             onChange={() => setMinDiscount(0)}
//                             className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                           />
//                           <span className="ml-2 text-sm text-slate-700">All Discounts</span>
//                         </label>
//                       </div>
//                     </div>

//                     {/* Availability */}
//                     <div>
//                       <h3 className="text-sm font-medium text-slate-900 mb-4">Availability</h3>
//                       <div className="space-y-2">
//                         <label className="flex items-center">
//                           <input
//                             type="radio"
//                             name="availability"
//                             checked={availability === 'all'}
//                             onChange={() => setAvailability('all')}
//                             className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                           />
//                           <span className="ml-2 text-sm text-slate-700">All</span>
//                         </label>
//                         <label className="flex items-center">
//                           <input
//                             type="radio"
//                             name="availability"
//                             checked={availability === 'inStock'}
//                             onChange={() => setAvailability('inStock')}
//                             className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                           />
//                           <span className="ml-2 text-sm text-slate-700">In Stock</span>
//                         </label>
//                         <label className="flex items-center">
//                           <input
//                             type="radio"
//                             name="availability"
//                             checked={availability === 'outOfStock'}
//                             onChange={() => setAvailability('outOfStock')}
//                             className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                           />
//                           <span className="ml-2 text-sm text-slate-700">Out of Stock</span>
//                         </label>
//                       </div>
//                     </div>

//                     {/* Delivery Options */}
//                     <div>
//                       <h3 className="text-sm font-medium text-slate-900 mb-4">Delivery Options</h3>
//                       <div className="space-y-2">
//                         <label className="flex items-center">
//                           <input
//                             type="radio"
//                             name="delivery"
//                             checked={deliveryOption === 'all'}
//                             onChange={() => setDeliveryOption('all')}
//                             className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                           />
//                           <span className="ml-2 text-sm text-slate-700">All</span>
//                         </label>
//                         <label className="flex items-center">
//                           <input
//                             type="radio"
//                             name="delivery"
//                             checked={deliveryOption === 'sameDay'}
//                             onChange={() => setDeliveryOption('sameDay')}
//                             className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                           />
//                           <span className="ml-2 text-sm text-slate-700">Same Day Delivery</span>
//                         </label>
//                         <label className="flex items-center">
//                           <input
//                             type="radio"
//                             name="delivery"
//                             checked={deliveryOption === 'freeShipping'}
//                             onChange={() => setDeliveryOption('freeShipping')}
//                             className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                           />
//                           <span className="ml-2 text-sm text-slate-700">Free Shipping</span>
//                         </label>
//                       </div>
//                     </div>

//                     {/* Actions */}
//                     <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
//                       <Button onClick={clearFilters} variant="outline">Clear All Filters</Button>
//                       <Button onClick={() => setFilterOpen(false)}>Apply Filters</Button>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* Desktop sidebar filters */}
//             <div className="hidden lg:block w-64 shrink-0">
//               <div className="sticky top-24 space-y-8">
//                 <h2 className="text-lg font-bold text-slate-900 mb-6">Filters</h2>

//                 {/* Search */}
//                 <div>
//                   <h3 className="text-sm font-medium text-slate-900 mb-4">Search</h3>
//                   <div className="relative">
//                     <input 
//                       type="text"
//                       placeholder="Search products..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                     />
//                     <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                   </div>
//                 </div>

//                 {/* Price range */}
//                 <div>
//                   <h3 className="text-sm font-medium text-slate-900 mb-4">Price Range</h3>
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm text-slate-600">${priceRange[0]}</span>
//                     <span className="text-sm text-slate-600">${priceRange[1]}</span>
//                   </div>
//                   <input 
//                     type="range"
//                     min="0"
//                     max="500"
//                     value={priceRange[1]}
//                     onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
//                     className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
//                   />
//                 </div>

//                 {/* Brands */}
//                 {allBrands.length > 0 && (
//                   <div>
//                     <h3 className="text-sm font-medium text-slate-900 mb-4">Brands</h3>
//                     <div className="space-y-2">
//                       {allBrands.map(brand => (
//                         <label key={brand} className="flex items-center">
//                           <input
//                             type="checkbox"
//                             checked={selectedBrands.includes(brand)}
//                             onChange={() => toggleBrand(brand)}
//                             className="h-4 w-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
//                           />
//                           <span className="ml-2 text-sm text-slate-700">{brand}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Colors */}
//                 {allColors.length > 0 && (
//                   <div>
//                     <h3 className="text-sm font-medium text-slate-900 mb-4">Colors</h3>
//                     <div className="flex flex-wrap gap-2">
//                       {allColors.map(color => (
//                         <button
//                           key={color}
//                           onClick={() => toggleColor(color)}
//                           className={`px-3 py-1 rounded-full border text-sm transition-colors ${
//                             selectedColors.includes(color)
//                               ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
//                               : 'border-slate-300 text-slate-700 hover:border-slate-400'
//                           }`}
//                         >
//                           {color}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Sizes */}
//                 {allSizes.length > 0 && (
//                   <div>
//                     <h3 className="text-sm font-medium text-slate-900 mb-4">Sizes</h3>
//                     <div className="flex flex-wrap gap-2">
//                       {allSizes.map(size => (
//                         <button
//                           key={size}
//                           onClick={() => toggleSize(size)}
//                           className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${
//                             selectedSizes.includes(size)
//                               ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
//                               : 'border-slate-300 text-slate-700 hover:border-slate-400'
//                           }`}
//                         >
//                           {size}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Customer Ratings */}
//                 <div>
//                   <h3 className="text-sm font-medium text-slate-900 mb-4">Customer Ratings</h3>
//                   <div className="space-y-2">
//                     {[4, 3, 2, 1].map(rating => (
//                       <label key={rating} className="flex items-center">
//                         <input
//                           type="radio"
//                           name="rating"
//                           checked={minRating === rating}
//                           onChange={() => setMinRating(rating)}
//                           className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                         />
//                         <span className="ml-2 text-sm text-slate-700">{rating}+ Stars</span>
//                       </label>
//                     ))}
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="rating"
//                         checked={minRating === 0}
//                         onChange={() => setMinRating(0)}
//                         className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                       />
//                       <span className="ml-2 text-sm text-slate-700">All Ratings</span>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Discount */}
//                 <div>
//                   <h3 className="text-sm font-medium text-slate-900 mb-4">Discount</h3>
//                   <div className="space-y-2">
//                     {[50, 40, 30, 20, 10].map(discount => (
//                       <label key={discount} className="flex items-center">
//                         <input
//                           type="radio"
//                           name="discount"
//                           checked={minDiscount === discount}
//                           onChange={() => setMinDiscount(discount)}
//                           className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                         />
//                         <span className="ml-2 text-sm text-slate-700">{discount}% and Above</span>
//                       </label>
//                     ))}
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="discount"
//                         checked={minDiscount === 0}
//                         onChange={() => setMinDiscount(0)}
//                         className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                       />
//                       <span className="ml-2 text-sm text-slate-700">All Discounts</span>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Availability */}
//                 <div>
//                   <h3 className="text-sm font-medium text-slate-900 mb-4">Availability</h3>
//                   <div className="space-y-2">
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="availability"
//                         checked={availability === 'all'}
//                         onChange={() => setAvailability('all')}
//                         className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                       />
//                       <span className="ml-2 text-sm text-slate-700">All</span>
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="availability"
//                         checked={availability === 'inStock'}
//                         onChange={() => setAvailability('inStock')}
//                         className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                       />
//                       <span className="ml-2 text-sm text-slate-700">In Stock</span>
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="availability"
//                         checked={availability === 'outOfStock'}
//                         onChange={() => setAvailability('outOfStock')}
//                         className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                       />
//                       <span className="ml-2 text-sm text-slate-700">Out of Stock</span>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Delivery Options */}
//                 <div>
//                   <h3 className="text-sm font-medium text-slate-900 mb-4">Delivery Options</h3>
//                   <div className="space-y-2">
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="delivery"
//                         checked={deliveryOption === 'all'}
//                         onChange={() => setDeliveryOption('all')}
//                         className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                       />
//                       <span className="ml-2 text-sm text-slate-700">All</span>
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="delivery"
//                         checked={deliveryOption === 'sameDay'}
//                         onChange={() => setDeliveryOption('sameDay')}
//                         className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                       />
//                       <span className="ml-2 text-sm text-slate-700">Same Day Delivery</span>
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="delivery"
//                         checked={deliveryOption === 'freeShipping'}
//                         onChange={() => setDeliveryOption('freeShipping')}
//                         className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
//                       />
//                       <span className="ml-2 text-sm text-slate-700">Free Shipping</span>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Clear filters */}
//                 {(selectedColors.length > 0 || selectedSizes.length > 0 || selectedBrands.length > 0 || 
//                   priceRange[0] > 0 || priceRange[1] < 500 || searchQuery || minRating > 0 || 
//                   minDiscount > 0 || availability !== 'all' || deliveryOption !== 'all') && (
//                   <Button onClick={clearFilters} variant="outline">Clear All Filters</Button>
//                 )}
//               </div>
//             </div>

//             {/* Products grid */}
//             <div className="flex-1">
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//                 <div>
//                   <p className="text-slate-600 mb-1">{displayedProducts.length} products</p>
//                 </div>
//                 <div className="mt-4 sm:mt-0 w-full sm:w-auto">
//                   <select
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                     className="w-full sm:w-auto px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                   >
//                     <option value="featured">Featured</option>
//                     <option value="price-low-high">Price: Low to High</option>
//                     <option value="price-high-low">Price: High to Low</option>
//                     <option value="newest">Newest</option>
//                     <option value="bestselling">Best Selling</option>
//                     <option value="rating">Top Rated</option>
//                   </select>
//                 </div>
//               </div>

//               {displayedProducts.length > 0 ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                   {displayedProducts.map(product => (
//                     <ProductCard key={product.id} product={product} />
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-16 bg-slate-50 rounded-xl">
//                   <h3 className="text-xl font-semibold text-slate-900">No products found</h3>
//                   <p className="text-slate-600">Try adjusting your filters or clearing them to see more products.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default CategoryPage;



import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ChevronRight, SlidersHorizontal, X, Search, ChevronDown, ChevronUp } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/ui/Button';
import { categories, products } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

const CategoryPage = () => {
  const { categoryId, subCategoryId } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]); // Adjusted max to accommodate product prices
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [minDiscount, setMinDiscount] = useState(0);
  const [availability, setAvailability] = useState('all');
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  // State for collapsible filter sections
  const [openSections, setOpenSections] = useState({
    search: true,
    price: true,
    brands: true,
    ratings: true,
    discount: true,
    availability: true,
  });

  const category = categories.find(cat => cat.id === categoryId);

  const categoryProducts = products.filter(product =>
    product.category === categoryId &&
    (!subCategoryId || product.childCategory === subCategoryId)
  );

  // Extract unique filter options
  const allBrands = Array.from(new Set(
    categoryProducts.map(p => p.specifications?.Brand).filter(Boolean)
  ));

  // Console log initial products (unfiltered)
  console.log("Initial Category Products:", categoryProducts);

  // Check if any filter is applied
  useEffect(() => {
    const hasFilters = (
      priceRange[0] > 0 || priceRange[1] < 1000 ||
      searchQuery !== '' ||
      selectedBrands.length > 0 ||
      minRating > 0 ||
      minDiscount > 0 ||
      availability !== 'all'
    );
    setIsFilterApplied(hasFilters);
  }, [priceRange, searchQuery, selectedBrands, minRating, minDiscount, availability]);

  // Filter products only if a filter is applied
  let displayedProducts = [...categoryProducts];
  if (isFilterApplied) {
    displayedProducts = categoryProducts
      .filter(product => {
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        const matchesSearch = searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesBrands = selectedBrands.length === 0 || selectedBrands.includes(product.specifications?.Brand);
        const matchesRating = product.rating >= minRating;
        const matchesDiscount = product.discount ? product.discount >= minDiscount : minDiscount === 0;
        const matchesAvailability = availability === 'all' || 
          (availability === 'inStock' && product.inStock) || 
          (availability === 'outOfStock' && !product.inStock);

        return matchesPrice && matchesSearch && matchesBrands && matchesRating && matchesDiscount && matchesAvailability;
      });
  }

  // Apply sorting
  displayedProducts = displayedProducts.sort((a, b) => {
    switch (sortBy) {
      case 'price-low-high': return a.price - b.price;
      case 'price-high-low': return b.price - a.price;
      case 'newest': return a.isNew ? -1 : b.isNew ? 1 : 0;
      case 'bestselling': return a.isBestseller ? -1 : b.isBestseller ? 1 : 0;
      case 'rating': return b.rating - a.rating;
      default: return a.isFeatured ? -1 : b.isFeatured ? 1 : 0;
    }
  });

  // Console log filters and displayed products
  useEffect(() => {
    console.log("Applied Filters:", {
      priceRange,
      searchQuery,
      selectedBrands,
      minRating,
      minDiscount,
      availability,
      sortBy,
      isFilterApplied
    });
    console.log("Displayed Products:", displayedProducts);
  }, [priceRange, searchQuery, selectedBrands, minRating, minDiscount, availability, sortBy, displayedProducts, isFilterApplied]);

  const toggleBrand = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setSearchQuery('');
    setSelectedBrands([]);
    setMinRating(0);
    setMinDiscount(0);
    setAvailability('all');
    setIsFilterApplied(false);
  };

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Category Not Found</h1>
        <p className="text-slate-600 mb-8">The category you're looking for doesn't exist or has been removed.</p>
        <Button as={Link} to="/">Return to Home</Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${category.name}${subCategoryId ? ` / ${subCategoryId}` : ''} | ShopHub`}</title>
        <meta name="description" content={category.description} />
      </Helmet>

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-6">
            <ol className="flex items-center text-sm">
              <li>
                <Link to="/" className="text-slate-500 hover:text-color transition-colors">Home</Link>
              </li>
              <ChevronRight size={14} className="mx-2 text-slate-400" />
              <li>
                <Link to="/category" className="text-slate-500 hover:text-color transition-colors">Collections</Link>
              </li>
              <ChevronRight size={14} className="mx-2 text-slate-400" />
              <li className="text-slate-900 font-medium capitalize">
                {category.name}
                {subCategoryId && (
                  <span className="text-slate-500 ml-1">/ {subCategoryId.replace(/-/g, ' ')}</span>
                )}
              </li>
            </ol>
          </nav>

          {/* Category Hero */}
          <div className="relative h-64 rounded-xl overflow-hidden mb-8">
            <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-transparent flex items-center">
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {category.name}
                  {subCategoryId && ` / ${subCategoryId.replace(/-/g, ' ')}`}
                </h1>
                <p className="text-white/90 max-w-md">{category.description}</p>
              </div>
            </div>
          </div>

          {/* Filters and products */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile filter button */}
            <div className="lg:hidden">
              <Button 
                onClick={() => setFilterOpen(true)}
                variant="outline" 
                fullWidth
                leftIcon={<SlidersHorizontal size={18} />}
              >
                Filters ({selectedBrands.length + 
                         (priceRange[0] > 0 || priceRange[1] < 1000 ? 1 : 0) + 
                         (minRating > 0 ? 1 : 0) + (minDiscount > 0 ? 1 : 0) + 
                         (availability !== 'all' ? 1 : 0)})
              </Button>
            </div>

            {/* Mobile filter sidebar */}
            <AnimatePresence>
              {filterOpen && (
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 25 }}
                  className="fixed inset-0 z-50 bg-white p-6 overflow-y-auto lg:hidden"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-slate-900">Filters</h2>
                    <button 
                      onClick={() => setFilterOpen(false)}
                      className="p-2 rounded-full hover:bg-slate-100"
                    >
                      <X size={20} className="text-slate-700" />
                    </button>
                  </div>
                  
                  {/* Filter content */}
                  <div className="space-y-4">
                    {/* Search */}
                    <div className="border-b border-slate-200">
                      <button
                        onClick={() => toggleSection('search')}
                        className="w-full flex justify-between items-center py-3 text-sm font-medium text-slate-900"
                      >
                        <span>Search</span>
                        {openSections.search ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      {openSections.search && (
                        <div className="py-2">
                          <div className="relative">
                            <input 
                              type="text"
                              placeholder="Search products..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Price range */}
                    <div className="border-b border-slate-200">
                      <button
                        onClick={() => toggleSection('price')}
                        className="w-full flex justify-between items-center py-3 text-sm font-medium text-slate-900"
                      >
                        <span>Price Range</span>
                        {openSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      {openSections.price && (
                        <div className="py-2">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-slate-600">${priceRange[0]}</span>
                            <span className="text-sm text-slate-600">${priceRange[1]}</span>
                          </div>
                          <input 
                            type="range"
                            min="0"
                            max="1000"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                          />
                        </div>
                      )}
                    </div>

                    {/* Brands */}
                    {allBrands.length > 0 && (
                      <div className="border-b border-slate-200">
                        <button
                          onClick={() => toggleSection('brands')}
                          className="w-full flex justify-between items-center py-3 text-sm font-medium text-slate-900"
                        >
                          <span>Brands</span>
                          {openSections.brands ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        {openSections.brands && (
                          <div className="py-2 space-y-2 max-h-48 overflow-y-auto">
                            {allBrands.map(brand => (
                              <label key={brand} className="flex items-center">
                                <input
                                  type="checkbox"
                                  checked={selectedBrands.includes(brand)}
                                  onChange={() => toggleBrand(brand)}
                                  className="h-4 w-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-sm text-slate-700">{brand}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Customer Ratings */}
                    <div className="border-b border-slate-200">
                      <button
                        onClick={() => toggleSection('ratings')}
                        className="w-full flex justify-between items-center py-3 text-sm font-medium text-slate-900"
                      >
                        <span>Customer Ratings</span>
                        {openSections.ratings ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      {openSections.ratings && (
                        <div className="py-2 space-y-2">
                          {[4, 3, 2, 1].map(rating => (
                            <label key={rating} className="flex items-center">
                              <input
                                type="radio"
                                name="rating"
                                checked={minRating === rating}
                                onChange={() => setMinRating(rating)}
                                className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                              />
                              <span className="ml-2 text-sm text-slate-700">{rating}+ Stars</span>
                            </label>
                          ))}
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="rating"
                              checked={minRating === 0}
                              onChange={() => setMinRating(0)}
                              className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                            />
                            <span className="ml-2 text-sm text-slate-700">All Ratings</span>
                          </label>
                        </div>
                      )}
                    </div>

                    {/* Discount */}
                    <div className="border-b border-slate-200">
                      <button
                        onClick={() => toggleSection('discount')}
                        className="w-full flex justify-between items-center py-3 text-sm font-medium text-slate-900"
                      >
                        <span>Discount</span>
                        {openSections.discount ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      {openSections.discount && (
                        <div className="py-2 space-y-2">
                          {[50, 40, 30, 20, 10].map(discount => (
                            <label key={discount} className="flex items-center">
                              <input
                                type="radio"
                                name="discount"
                                checked={minDiscount === discount}
                                onChange={() => setMinDiscount(discount)}
                                className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                              />
                              <span className="ml-2 text-sm text-slate-700">{discount}% and Above</span>
                            </label>
                          ))}
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="discount"
                              checked={minDiscount === 0}
                              onChange={() => setMinDiscount(0)}
                              className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                            />
                            <span className="ml-2 text-sm text-slate-700">All Discounts</span>
                          </label>
                        </div>
                      )}
                    </div>

                    {/* Availability */}
                    <div className="border-b border-slate-200">
                      <button
                        onClick={() => toggleSection('availability')}
                        className="w-full flex justify-between items-center py-3 text-sm font-medium text-slate-900"
                      >
                        <span>Availability</span>
                        {openSections.availability ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      {openSections.availability && (
                        <div className="py-2 space-y-2">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="availability"
                              checked={availability === 'all'}
                              onChange={() => setAvailability('all')}
                              className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                            />
                            <span className="ml-2 text-sm text-slate-700">All</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="availability"
                              checked={availability === 'inStock'}
                              onChange={() => setAvailability('inStock')}
                              className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                            />
                            <span className="ml-2 text-sm text-slate-700">In Stock</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="availability"
                              checked={availability === 'outOfStock'}
                              onChange={() => setAvailability('outOfStock')}
                              className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                            />
                            <span className="ml-2 text-sm text-slate-700">Out of Stock</span>
                          </label>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
                      <Button onClick={clearFilters} variant="outline">Clear All Filters</Button>
                      <Button onClick={() => setFilterOpen(false)}>Apply Filters</Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop sidebar filters */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 space-y-4">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Filters</h2>

                {/* Search */}
                <div className="border-b border-slate-200">
                  <button
                    onClick={() => toggleSection('search')}
                    className="w-full flex justify-between items-center py-3 text-sm font-medium text-slate-900"
                  >
                    <span>Search</span>
                    {openSections.search ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {openSections.search && (
                    <div className="py-2">
                      <div className="relative">
                        <input 
                          type="text"
                          placeholder="Search products..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Price range */}
                <div className="border-b border-slate-200">
                  <button
                    onClick={() => toggleSection('price')}
                    className="w-full flex justify-between items-center py-3 text-sm font-medium text-slate-900"
                  >
                    <span>Price Range</span>
                    {openSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {openSections.price && (
                    <div className="py-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-600">${priceRange[0]}</span>
                        <span className="text-sm text-slate-600">${priceRange[1]}</span>
                      </div>
                      <input 
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                      />
                    </div>
                  )}
                </div>

                {/* Brands */}
                {allBrands.length > 0 && (
                  <div className="border-b border-slate-200">
                    <button
                      onClick={() => toggleSection('brands')}
                      className="w-full flex justify-between items-center py-3 text-sm font-medium text-slate-900"
                    >
                      <span>Brands</span>
                      {openSections.brands ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openSections.brands && (
                      <div className="py-2 space-y-2 max-h-48 overflow-y-auto">
                        {allBrands.map(brand => (
                          <label key={brand} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={selectedBrands.includes(brand)}
                              onChange={() => toggleBrand(brand)}
                              className="h-4 w-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                            />
                            <span className="ml-2 text-sm text-slate-700">{brand}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Customer Ratings */}
                <div className="border-b border-slate-200">
                  <button
                    onClick={() => toggleSection('ratings')}
                    className="w-full flex justify-between items-center py-3 text-sm font-medium text-slate-900"
                  >
                    <span>Customer Ratings</span>
                    {openSections.ratings ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {openSections.ratings && (
                    <div className="py-2 space-y-2">
                      {[4, 3, 2, 1].map(rating => (
                        <label key={rating} className="flex items-center">
                          <input
                            type="radio"
                            name="rating"
                            checked={minRating === rating}
                            onChange={() => setMinRating(rating)}
                            className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                          />
                          <span className="ml-2 text-sm text-slate-700">{rating}+ Stars</span>
                        </label>
                      ))}
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="rating"
                          checked={minRating === 0}
                          onChange={() => setMinRating(0)}
                          className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-slate-700">All Ratings</span>
                      </label>
                    </div>
                  )}
                </div>

                {/* Discount */}
                <div className="border-b border-slate-200">
                  <button
                    onClick={() => toggleSection('discount')}
                    className="w-full flex justify-between items-center py-3 text-sm font-medium text-slate-900"
                  >
                    <span>Discount</span>
                    {openSections.discount ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {openSections.discount && (
                    <div className="py-2 space-y-2">
                      {[50, 40, 30, 20, 10].map(discount => (
                        <label key={discount} className="flex items-center">
                          <input
                            type="radio"
                            name="discount"
                            checked={minDiscount === discount}
                            onChange={() => setMinDiscount(discount)}
                            className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                          />
                          <span className="ml-2 text-sm text-slate-700">{discount}% and Above</span>
                        </label>
                      ))}
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="discount"
                          checked={minDiscount === 0}
                          onChange={() => setMinDiscount(0)}
                          className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-slate-700">All Discounts</span>
                      </label>
                    </div>
                  )}
                </div>

                {/* Availability */}
                <div className="border-b border-slate-200">
                  <button
                    onClick={() => toggleSection('availability')}
                    className="w-full flex justify-between items-center py-3 text-sm font-medium text-slate-900"
                  >
                    <span>Availability</span>
                    {openSections.availability ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {openSections.availability && (
                    <div className="py-2 space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="availability"
                          checked={availability === 'all'}
                          onChange={() => setAvailability('all')}
                          className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-slate-700">All</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="availability"
                          checked={availability === 'inStock'}
                          onChange={() => setAvailability('inStock')}
                          className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-slate-700">In Stock</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="availability"
                          checked={availability === 'outOfStock'}
                          onChange={() => setAvailability('outOfStock')}
                          className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-slate-700">Out of Stock</span>
                      </label>
                    </div>
                  )}
                </div>

                {/* Clear filters */}
                {(selectedBrands.length > 0 || priceRange[0] > 0 || priceRange[1] < 1000 || searchQuery || minRating > 0 || minDiscount > 0 || availability !== 'all') && (
                  <Button onClick={clearFilters} variant="outline">Clear All Filters</Button>
                )}
              </div>
            </div>

            {/* Products grid */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div>
                  <p className="text-slate-600 mb-1">{displayedProducts.length} products</p>
                </div>
                <div className="mt-4 sm:mt-0 w-full sm:w-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full sm:w-auto px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="newest">Newest</option>
                    <option value="bestselling">Best Selling</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>

              {displayedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {displayedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-slate-50 rounded-xl">
                  <h3 className="text-xl font-semibold text-slate-900">No products found</h3>
                  <p className="text-slate-600">Try adjusting your filters or clearing them to see more products.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CategoryPage;