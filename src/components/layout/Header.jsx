
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Heart,
  User,
  Search,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { categories } from "../../data/products";

const categoryStructure = [
  {
    id: "electronics",
    name: "Electronics",
    subCategories: [
      {
        id: "smartphones",
        name: "Smartphones",
        items: ["Android Phones", "iPhones", "Gaming Phones"],
      },
      {
        id: "laptops",
        name: "Laptops",
        items: ["Gaming Laptops", "Ultrabooks", "2-in-1 Laptops"],
      },
      {
        id: "audio",
        name: "Audio Devices",
        items: ["Headphones", "Bluetooth Speakers", "Earbuds"],
      },
    ],
  },
  {
    id: "clothing",
    name: "Clothing",
    subCategories: [
      {
        id: "men",
        name: "Men",
        items: ["T-Shirts", "Jeans", "Jackets"],
      },
      {
        id: "women",
        name: "Women",
        items: ["Dresses", "Tops", "Activewear"],
      },
      {
        id: "kids",
        name: "Kids",
        items: ["Shirts", "Shorts", "Sleepwear"],
      },
    ],
  },
  {
    id: "home-decor",
    name: "Home & Decor",
    subCategories: [
      {
        id: "furniture",
        name: "Furniture",
        items: ["Sofas", "Coffee Tables", "Beds"],
      },
      {
        id: "lighting",
        name: "Lighting",
        items: ["Ceiling Lights", "Table Lamps", "Wall Lights"],
      },
      {
        id: "textiles",
        name: "Textiles",
        items: ["Curtains", "Rugs", "Cushions"],
      },
    ],
  },
  {
    id: "sports",
    name: "Sports & Fitness",
    subCategories: [
      {
        id: "gym",
        name: "Gym Equipment",
        items: ["Treadmills", "Dumbbells", "Yoga Mats"],
      },
      {
        id: "outdoor",
        name: "Outdoor Sports",
        items: ["Cycling", "Football", "Tennis"],
      },
    ],
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    subCategories: [
      {
        id: "skincare",
        name: "Skincare",
        items: ["Moisturizers", "Cleansers", "Sunscreens"],
      },
      {
        id: "makeup",
        name: "Makeup",
        items: ["Lipsticks", "Foundations", "Mascaras"],
      },
    ],
  },
  {
    id: "books",
    name: "Books & Media",
    subCategories: [
      {
        id: "fiction",
        name: "Fiction",
        items: ["Novels", "Fantasy", "Mystery"],
      },
      {
        id: "non-fiction",
        name: "Non-Fiction",
        items: ["Biographies", "Self-Help", "Business"],
      },
      {
        id: "media",
        name: "Media",
        items: ["Audiobooks", "DVDs", "Magazines"],
      },
    ],
  },
  {
    id: "toys",
    name: "Toys & Games",
    subCategories: [
      {
        id: "educational",
        name: "Educational Toys",
        items: ["STEM Kits", "Puzzles", "Flash Cards"],
      },
      {
        id: "action",
        name: "Action & Figures",
        items: ["Superheroes", "Dolls", "RC Toys"],
      },
    ],
  },
  {
    id: "groceries",
    name: "Groceries",
    subCategories: [
      {
        id: "fruits",
        name: "Fruits & Vegetables",
        items: ["Apples", "Tomatoes", "Spinach"],
      },
      {
        id: "staples",
        name: "Staples",
        items: ["Rice", "Wheat Flour", "Lentils"],
      },
      {
        id: "snacks",
        name: "Snacks & Beverages",
        items: ["Chips", "Soda", "Juice"],
      },
    ],
  },
  {
    id: "automotive",
    name: "Automotive",
    subCategories: [
      {
        id: "parts",
        name: "Parts & Accessories",
        items: ["Brakes", "Wipers", "Spark Plugs"],
      },
      {
        id: "tools",
        name: "Tools",
        items: ["Jacks", "Air Compressors", "Repair Kits"],
      },
    ],
  },
  {
    id: "pets",
    name: "Pet Supplies",
    subCategories: [
      {
        id: "food",
        name: "Food",
        items: ["Dry Food", "Wet Food", "Treats"],
      },
      {
        id: "accessories",
        name: "Accessories",
        items: ["Leashes", "Beds", "Toys"],
      },
    ],
  },
  {
    id: "tools",
    name: "Tools & Hardware",
    subCategories: [
      {
        id: "hand-tools",
        name: "Hand Tools",
        items: ["Hammers", "Screwdrivers", "Wrenches"],
      },
      {
        id: "power-tools",
        name: "Power Tools",
        items: ["Drills", "Grinders", "Saws"],
      },
    ],
  },
  {
    id: "garden",
    name: "Garden & Outdoor",
    subCategories: [
      {
        id: "plants",
        name: "Plants & Seeds",
        items: ["Flower Seeds", "Vegetable Seeds", "Potted Plants"],
      },
      {
        id: "furniture",
        name: "Outdoor Furniture",
        items: ["Patio Sets", "Hammocks", "Benches"],
      },
    ],
  },
  {
    id: "office",
    name: "Office Supplies",
    subCategories: [
      {
        id: "stationery",
        name: "Stationery",
        items: ["Pens", "Notebooks", "Markers"],
      },
      {
        id: "electronics",
        name: "Electronics",
        items: ["Printers", "Scanners", "Monitors"],
      },
    ],
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const location = useLocation();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const getCategoryStructure = (categoryId) => {
    return (
      categoryStructure.find((c) => c.id === categoryId)?.subCategories || []
    );
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-indigo-700">
              ShopHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 relative">
            {categoryStructure.slice(0, 5).map((category) => (
              <div
                key={category.id}
                className="relative group"
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="flex items-center space-x-1 cursor-pointer">
                  <Link
                    to={`/category/${category.id}`}
                    className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                  >
                    {category.name}
                  </Link>
                  <ChevronDown size={16} className="text-slate-500" />
                </div>

                <AnimatePresence>
                  {hoveredCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-96 bg-white shadow-lg rounded-lg p-4 mt-1"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {category.subCategories?.map((subCategory) => (
                          <div key={subCategory.id}>
                            <h3 className="font-medium text-slate-900 mb-2">
                              {subCategory.name}
                            </h3>
                            <ul className="space-y-1">
                              {subCategory.items?.map((item) => (
                                <li key={item}>
                                  <Link
                                    to={`/category/${category.id}/${subCategory.id}/${item
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                    className="text-sm text-slate-600 hover:text-indigo-600"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 border-t pt-4">
                        <Link
                          to={`/category/${category.id}`}
                          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                        >
                          View All {category.name} →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link
              to="/category"
              className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
            >
              All Collections
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Search"
            >
              <Search size={20} className="text-slate-700" />
            </button>

            <Link
              to="/wishlist"
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <Heart size={20} className="text-slate-700" />
            </Link>

            <Link
              to="/cart"
              className="p-2 rounded-full hover:bg-slate-100 transition-colors relative"
            >
              <ShoppingCart size={20} className="text-slate-700" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                  {itemCount}
                </span>
              )}
            </Link>

            <Link
              to="/profile"
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <User size={20} className="text-slate-700" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-slate-700" />
              ) : (
                <Menu size={20} className="text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="py-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-4 pr-10 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    aria-label="Search"
                  >
                    <Search size={18} className="text-slate-500" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {categoryStructure.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="text-base font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
                <Link
                  to="/collections"
                  className="text-base font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                >
                  All Collections
                </Link>
                <div className="pt-2 border-t border-slate-200">
                  <Link
                    to="/account"
                    className="flex items-center py-2 text-base font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                  >
                    <User size={18} className="mr-2" />
                    My Account
                  </Link>
                  <Link
                    to="/wishlist"
                    className="flex items-center py-2 text-base font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                  >
                    <Heart size={18} className="mr-2" />
                    Wishlist
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;


// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   ShoppingCart,
//   Heart,
//   User,
//   Search,
//   Menu,
//   X,
//   ChevronDown,
//   Bell,
//   ShoppingBag,
//   CreditCard,
//   Settings,
//   Headphones,
//   LogOut,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useCart } from "../../context/CartContext";

// const categoryStructure = [
//   {
//     id: "electronics",
//     name: "Electronics",
//     subCategories: [
//       {
//         id: "smartphones",
//         name: "Smartphones",
//         items: ["Android Phones", "iPhones", "Gaming Phones"],
//       },
//       {
//         id: "laptops",
//         name: "Laptops",
//         items: ["Gaming Laptops", "Ultrabooks", "2-in-1 Laptops"],
//       },
//       {
//         id: "audio",
//         name: "Audio Devices",
//         items: ["Headphones", "Bluetooth Speakers", "Earbuds"],
//       },
//     ],
//   },
//   {
//     id: "clothing",
//     name: "Clothing",
//     subCategories: [
//       {
//         id: "men",
//         name: "Men",
//         items: ["T-Shirts", "Jeans", "Jackets"],
//       },
//       {
//         id: "women",
//         name: "Women",
//         items: ["Dresses", "Tops", "Activewear"],
//       },
//       {
//         id: "kids",
//         name: "Kids",
//         items: ["Shirts", "Shorts", "Sleepwear"],
//       },
//     ],
//   },
//   {
//     id: "home-decor",
//     name: "Home & Decor",
//     subCategories: [
//       {
//         id: "furniture",
//         name: "Furniture",
//         items: ["Sofas", "Coffee Tables", "Beds"],
//       },
//       {
//         id: "lighting",
//         name: "Lighting",
//         items: ["Ceiling Lights", "Table Lamps", "Wall Lights"],
//       },
//       {
//         id: "textiles",
//         name: "Textiles",
//         items: ["Curtains", "Rugs", "Cushions"],
//       },
//     ],
//   },
//   {
//     id: "sports",
//     name: "Sports & Fitness",
//     subCategories: [
//       {
//         id: "gym",
//         name: "Gym Equipment",
//         items: ["Treadmills", "Dumbbells", "Yoga Mats"],
//       },
//       {
//         id: "outdoor",
//         name: "Outdoor Sports",
//         items: ["Cycling", "Football", "Tennis"],
//       },
//     ],
//   },
//   {
//     id: "beauty",
//     name: "Beauty & Personal Care",
//     subCategories: [
//       {
//         id: "skincare",
//         name: "Skincare",
//         items: ["Moisturizers", "Cleansers", "Sunscreens"],
//       },
//       {
//         id: "makeup",
//         name: "Makeup",
//         items: ["Lipsticks", "Foundations", "Mascaras"],
//       },
//     ],
//   },
//   {
//     id: "books",
//     name: "Books & Media",
//     subCategories: [
//       {
//         id: "fiction",
//         name: "Fiction",
//         items: ["Novels", "Fantasy", "Mystery"],
//       },
//       {
//         id: "non-fiction",
//         name: "Non-Fiction",
//         items: ["Biographies", "Self-Help", "Business"],
//       },
//       {
//         id: "media",
//         name: "Media",
//         items: ["Audiobooks", "DVDs", "Magazines"],
//       },
//     ],
//   },
//   {
//     id: "toys",
//     name: "Toys & Games",
//     subCategories: [
//       {
//         id: "educational",
//         name: "Educational Toys",
//         items: ["STEM Kits", "Puzzles", "Flash Cards"],
//       },
//       {
//         id: "action",
//         name: "Action & Figures",
//         items: ["Superheroes", "Dolls", "RC Toys"],
//       },
//     ],
//   },
//   {
//     id: "groceries",
//     name: "Groceries",
//     subCategories: [
//       {
//         id: "fruits",
//         name: "Fruits & Vegetables",
//         items: ["Apples", "Tomatoes", "Spinach"],
//       },
//       {
//         id: "staples",
//         name: "Staples",
//         items: ["Rice", "Wheat Flour", "Lentils"],
//       },
//       {
//         id: "snacks",
//         name: "Snacks & Beverages",
//         items: ["Chips", "Soda", "Juice"],
//       },
//     ],
//   },
//   {
//     id: "automotive",
//     name: "Automotive",
//     subCategories: [
//       {
//         id: "parts",
//         name: "Parts & Accessories",
//         items: ["Brakes", "Wipers", "Spark Plugs"],
//       },
//       {
//         id: "tools",
//         name: "Tools",
//         items: ["Jacks", "Air Compressors", "Repair Kits"],
//       },
//     ],
//   },
//   {
//     id: "pets",
//     name: "Pet Supplies",
//     subCategories: [
//       {
//         id: "food",
//         name: "Food",
//         items: ["Dry Food", "Wet Food", "Treats"],
//       },
//       {
//         id: "accessories",
//         name: "Accessories",
//         items: ["Leashes", "Beds", "Toys"],
//       },
//     ],
//   },
//   {
//     id: "tools",
//     name: "Tools & Hardware",
//     subCategories: [
//       {
//         id: "hand-tools",
//         name: "Hand Tools",
//         items: ["Hammers", "Screwdrivers", "Wrenches"],
//       },
//       {
//         id: "power-tools",
//         name: "Power Tools",
//         items: ["Drills", "Grinders", "Saws"],
//       },
//     ],
//   },
//   {
//     id: "garden",
//     name: "Garden & Outdoor",
//     subCategories: [
//       {
//         id: "plants",
//         name: "Plants & Seeds",
//         items: ["Flower Seeds", "Vegetable Seeds", "Potted Plants"],
//       },
//       {
//         id: "furniture",
//         name: "Outdoor Furniture",
//         items: ["Patio Sets", "Hammocks", "Benches"],
//       },
//     ],
//   },
//   {
//     id: "office",
//     name: "Office Supplies",
//     subCategories: [
//       {
//         id: "stationery",
//         name: "Stationery",
//         items: ["Pens", "Notebooks", "Markers"],
//       },
//       {
//         id: "electronics",
//         name: "Electronics",
//         items: ["Printers", "Scanners", "Monitors"],
//       },
//     ],
//   },
// ];

// const menuItems = [
//   { path: '/profile', icon: User, label: 'My Profile' },
//   { path: '/notifications', icon: Bell, label: 'Notifications', badge: 2 },
//   { path: '/orders', icon: ShoppingBag, label: 'My Orders' },
//   { path: '/wishlist', icon: Heart, label: 'My Wishlist' },
//   { path: '/payments', icon: CreditCard, label: 'Payments' },
//   { path: '/settings', icon: Settings, label: 'Settings' },
//   { path: '/support', icon: Headphones, label: 'Help & Support' },
// ];

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
//   const location = useLocation();
//   const { itemCount } = useCart();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//     setIsSearchOpen(false);
//     setIsUserMenuOpen(false);
//   }, [location]);

//   const getCategoryStructure = (categoryId) => {
//     return (
//       categoryStructure.find((c) => c.id === categoryId)?.subCategories || []
//     );
//   };

//   return (
//     <header
//       className={`sticky top-0 z-40 w-full transition-all duration-200 ${
//         isScrolled ? "bg-white shadow-sm" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <span className="text-xl font-bold tracking-tight text-indigo-700">
//               ShopHub
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8 relative">
//             {categoryStructure.slice(0, 5).map((category) => (
//               <div
//                 key={category.id}
//                 className="relative group"
//                 onMouseEnter={() => setHoveredCategory(category.id)}
//                 onMouseLeave={() => setHoveredCategory(null)}
//               >
//                 <div className="flex items-center space-x-1 cursor-pointer">
//                   <Link
//                     to={`/category/${category.id}`}
//                     className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
//                   >
//                     {category.name}
//                   </Link>
//                   <ChevronDown size={16} className="text-slate-500" />
//                 </div>

//                 <AnimatePresence>
//                   {hoveredCategory === category.id && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 10 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute top-full left-0 w-96 bg-white shadow-lg rounded-lg p-4 mt-1"
//                     >
//                       <div className="grid grid-cols-2 gap-4">
//                         {category.subCategories?.map((subCategory) => (
//                           <div key={subCategory.id}>
//                             <h3 className="font-medium text-slate-900 mb-2">
//                               {subCategory.name}
//                             </h3>
//                             <ul className="space-y-1">
//                               {subCategory.items?.map((item) => (
//                                 <li key={item}>
//                                   <Link
//                                     to={`/category/${category.id}/${subCategory.id}/${item
//                                       .toLowerCase()
//                                       .replace(/\s+/g, "-")}`}
//                                     className="text-sm text-slate-600 hover:text-indigo-600"
//                                   >
//                                     {item}
//                                   </Link>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                       </div>
//                       <div className="mt-4 border-t pt-4">
//                         <Link
//                           to={`/category/${category.id}`}
//                           className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
//                         >
//                           View All {category.name} →
//                         </Link>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//             <Link
//               to="/category"
//               className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
//             >
//               All Collections
//             </Link>
//           </nav>

//           {/* Actions */}
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={() => setIsSearchOpen(!isSearchOpen)}
//               className="p-2 rounded-full hover:bg-slate-100 transition-colors"
//               aria-label="Search"
//             >
//               <Search size={20} className="text-slate-700" />
//             </button>

//             {/* User Menu (Login Button with Dropdown) */}
//             <div
//               className="relative group"
//               onMouseEnter={() => setIsUserMenuOpen(true)}
//               onMouseLeave={() => setIsUserMenuOpen(false)}
//             >
          
//                 <button
//                 className="flex items-center px-3 py-2 bg-white border border-slate-200 hover:bg-slate-100 transition-colors shadow-sm"
//                 aria-label="User menu"
//               >
//                 <User size={20} className="text-slate-700" />
//                 <span className="ml-2 text-sm font-medium text-slate-700 hidden md:inline">
//                   Login
//                 </span>
//               </button>

//               <AnimatePresence>
//                 {isUserMenuOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute top-full right-0 w-56 bg-white shadow-lg rounded-lg p-2 mt-1"
//                   >
//                     {menuItems.map((item) => (
//                       <Link
//                         key={item.path}
//                         to={item.path}
//                         className="flex items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-md"
//                       >
//                         <item.icon size={16} className="mr-2" />
//                         <span>{item.label}</span>
//                         {item.badge && (
//                           <span className="ml-auto bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                             {item.badge}
//                           </span>
//                         )}
//                       </Link>
//                     ))}
//                     <div className="border-t my-1"></div>
//                     <Link
//                       to="/logout"
//                       className="flex items-center px-3 py-2 text-sm text-red-600 hover:bg-slate-100 rounded-md"
//                     >
//                       <LogOut size={16} className="mr-2" />
//                       <span>Logout</span>
//                     </Link>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
//               aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
//             >
//               {isMobileMenuOpen ? (
//                 <X size={20} className="text-slate-700" />
//               ) : (
//                 <Menu size={20} className="text-slate-700" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <AnimatePresence>
//           {isSearchOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               className="overflow-hidden"
//             >
//               <div className="py-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Search for products..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full h-10 pl-4 pr-10 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                   />
//                   <button
//                     className="absolute right-3 top-1/2 -translate-y-1/2"
//                     aria-label="Search"
//                   >
//                     <Search size={18} className="text-slate-500" />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="md:hidden bg-white border-t overflow-hidden"
//           >
//             <div className="container mx-auto px-4 py-4">
//               <nav className="flex flex-col space-y-4">
//                 {categoryStructure.map((category) => (
//                   <Link
//                     key={category.id}
//                     to={`/category/${category.id}`}
//                     className="text-base font-medium text-slate-700 hover:text-indigo-600 transition-colors"
//                   >
//                     {category.name}
//                   </Link>
//                 ))}
//                 <Link
//                   to="/collections"
//                   className="text-base font-medium text-slate-700 hover:text-indigo-600 transition-colors"
//                 >
//                   All Collections
//                 </Link>
//                 <div className="pt-2 border-t border-slate-200">
//                   {menuItems.map((item) => (
//                     <Link
//                       key={item.path}
//                       to={item.path}
//                       className="flex items-center py-2 text-base font-medium text-slate-700 hover:text-indigo-600 transition-colors"
//                     >
//                       <item.icon size={18} className="mr-2" />
//                       <span>{item.label}</span>
//                       {item.badge && (
//                         <span className="ml-auto bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                           {item.badge}
//                         </span>
//                       )}
//                     </Link>
//                   ))}
//                   <Link
//                     to="/logout"
//                     className="flex items-center py-2 text-base font-medium text-red-600 hover:text-red-700 transition-colors"
//                   >
//                     <LogOut size={18} className="mr-2" />
//                     <span>Logout</span>
//                   </Link>
//                 </div>
//               </nav>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;