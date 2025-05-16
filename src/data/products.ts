// import { Product, Category } from '../types';

// export const categories: Category[] = [
//   {
//     id: 'electronics',
//     name: 'Electronics',
//     description: 'Latest tech gadgets and devices',
//     image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     featured: true
//   },
//   {
//     id: 'clothing',
//     name: 'Clothing',
//     description: 'Trendy apparel for all seasons',
//     image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     featured: true
//   },
//   {
//     id: 'home-decor',
//     name: 'Home & Decor',
//     description: 'Stylish interior decoration items',
//     image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     featured: true
//   },
//   {
//     id: 'sports',
//     name: 'Sports & Fitness',
//     description: 'Equipment for active lifestyles',
//     image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     featured: false
//   },
//   {
//     id: 'beauty',
//     name: 'Beauty & Personal Care',
//     description: 'Premium cosmetics and self-care products',
//     image: 'https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     featured: true
//   },
//   {
//     id: 'books',
//     name: 'Books & Media',
//     description: 'Bestselling titles and entertainment',
//     image: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     featured: false
//   }
// ];

// export const products: Product[] = [
//   {
//     id: 'p1',
//     name: 'Wireless Noise-Cancelling Headphones',
//     description: 'Premium over-ear headphones with active noise cancellation, Bluetooth 5.0, and 30-hour battery life.',
//     price: 249.99,
//     originalPrice: 299.99,
//     images: [
//       'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       'https://images.pexels.com/photos/3394654/pexels-photo-3394654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     ],
//     category: 'electronics',
//     rating: 4.8,
//     reviews: 356,
//     inStock: true,
//     isFeatured: true,
//     colors: ['Black', 'Silver', 'Navy']
//   },
//   {
//     id: 'p2',
//     name: 'Ultra HD Smart TV - 55"',
//     description: 'Crystal clear 4K resolution with HDR, smart features, and voice control. Includes multiple HDMI and USB ports.',
//     price: 699.99,
//     originalPrice: 799.99,
//     images: [
//       'https://images.pexels.com/photos/6782570/pexels-photo-6782570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     ],
//     category: 'electronics',
//     rating: 4.7,
//     reviews: 218,
//     inStock: true,
//     isFeatured: true
//   },
//   {
//     id: 'p3',
//     name: 'Modern Leather Jacket',
//     description: 'Premium genuine leather jacket with stylish design, perfect for fall and winter seasons. Includes inner lining and multiple pockets.',
//     price: 199.99,
//     originalPrice: 249.99,
//     images: [
//       'https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     ],
//     category: 'clothing',
//     rating: 4.6,
//     reviews: 142,
//     inStock: true,
//     colors: ['Black', 'Brown', 'Tan'],
//     sizes: ['S', 'M', 'L', 'XL']
//   },
//   {
//     id: 'p4',
//     name: 'Designer Desk Lamp',
//     description: 'Elegant desk lamp with adjustable arm, touch control, and multiple light modes. Perfect for home office or bedroom.',
//     price: 79.99,
//     images: [
//       'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       'https://images.pexels.com/photos/6444365/pexels-photo-6444365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     ],
//     category: 'home-decor',
//     rating: 4.5,
//     reviews: 87,
//     inStock: true,
//     colors: ['White', 'Black', 'Brass']
//   },
//   {
//     id: 'p5',
//     name: 'Premium Yoga Mat',
//     description: 'Extra thick and cushioned yoga mat made from eco-friendly materials. Non-slip surface and includes carrying strap.',
//     price: 45.99,
//     images: [
//       'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       'https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     ],
//     category: 'sports',
//     rating: 4.7,
//     reviews: 113,
//     inStock: true,
//     isBestseller: true,
//     colors: ['Blue', 'Purple', 'Black', 'Green']
//   },
//   {
//     id: 'p6',
//     name: 'Luxury Skincare Set',
//     description: 'Complete skincare routine with cleanser, toner, serum, and moisturizer. Made with natural ingredients for all skin types.',
//     price: 89.99,
//     originalPrice: 110.00,
//     images: [
//       'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       'https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     ],
//     category: 'beauty',
//     rating: 4.9,
//     reviews: 76,
//     inStock: true,
//     isFeatured: true
//   },
//   {
//     id: 'p7',
//     name: 'Bestselling Novel Collection',
//     description: 'Set of five award-winning novels from contemporary authors. Perfect gift for book lovers.',
//     price: 65.99,
//     images: [
//       'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     ],
//     category: 'books',
//     rating: 4.6,
//     reviews: 52,
//     inStock: true
//   },
//   {
//     id: 'p8',
//     name: 'Smart Fitness Watch',
//     description: 'Advanced fitness tracker with heart rate monitoring, GPS, sleep tracking, and smartphone notifications. Waterproof design.',
//     price: 129.99,
//     originalPrice: 149.99,
//     images: [
//       'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//     ],
//     category: 'electronics',
//     rating: 4.7,
//     reviews: 185,
//     inStock: true,
//     isNew: true,
//     colors: ['Black', 'Silver', 'Rose Gold']
//   }
// ];

// // Featured collections for homepage
// export const collections = [
//   {
//     id: 'new-arrivals',
//     title: 'New Arrivals',
//     products: products.filter(p => p.isNew)
//   },
//   {
//     id: 'bestsellers',
//     title: 'Bestsellers',
//     products: products.filter(p => p.isBestseller)
//   },
//   {
//     id: 'featured',
//     title: 'Featured Products',
//     products: products.filter(p => p.isFeatured)
//   }
// ];

// // Banner promotions for homepage
// export const promotions = [
//   {
//     id: 'summer-sale',
//     title: 'Summer Sale',
//     description: 'Up to 40% off selected items',
//     image: 'https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     link: '/collections/summer-sale'
//   },
//   {
//     id: 'new-season',
//     title: 'New Season Collection',
//     description: 'Discover the latest trends',
//     image: 'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     link: '/collections/new-season'
//   }
// ];


import { Product, Category } from "../types";

export const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    description: "Latest tech gadgets and devices",
    image:
      "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
  },
  {
    id: "clothing",
    name: "Clothing",
    description: "Trendy apparel for all seasons",
    image:
      "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
  },
  {
    id: "home-decor",
    name: "Home & Decor",
    description: "Stylish interior decoration items",
    image:
      "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
  },
  {
    id: "sports",
    name: "Sports & Fitness",
    description: "Equipment for active lifestyles",
    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    description: "Premium cosmetics and self-care products",
    image:
      "https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
  },
  {
    id: "books",
    name: "Books & Media",
    description: "Bestselling titles and entertainment",
    image:
      "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
  },
  {
    id: "toys",
    name: "Toys & Games",
    description: "Fun and educational toys for all ages",
    image:
      "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
  },
  {
    id: "groceries",
    name: "Groceries",
    description: "Fresh produce and pantry essentials",
    image:
      "https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
  },
  {
    id: "automotive",
    name: "Automotive",
    description: "Parts, accessories, and tools for your vehicle",
    image:
      "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
  },
  {
    id: "pets",
    name: "Pet Supplies",
    description: "Everything for your furry friends",
    image:
      "https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
  },
  {
    id: "tools",
    name: "Tools & Hardware",
    description: "Reliable gear for home improvement",
    image:
      "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
  },
  {
    id: "garden",
    name: "Garden & Outdoor",
    description: "Grow, relax, and entertain outdoors",
    image:
      "https://images.pexels.com/photos/4503269/pexels-photo-4503269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
  },
  {
    id: "office",
    name: "Office Supplies",
    description: "Essential gear for work and productivity",
    image:
      "https://images.pexels.com/photos/3747485/pexels-photo-3747485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
  },
];


// export const products: Product[] = [
//   {
//     id: "p1",
//     name: "Wireless Noise-Cancelling Headphones",
//     description: "Premium over-ear headphones with active noise cancellation, Bluetooth 5.0, and 30-hour battery life.",
//     price: 249.99,
//     originalPrice: 299.99,
//     images: [
//       "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       "https://images.pexels.com/photos/3394654/pexels-photo-3394654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     ],
//     category: "electronics",
//     childcategory: "audio", // Added childcategory
//     rating: 4.8,
//     reviews: 356,
//     inStock: true,
//     isFeatured: true,
//     colors: ["Black", "Silver", "Navy"],
//   },
//   {
//     id: "p2",
//     name: 'Ultra HD Smart TV - 55"',
//     description: "Crystal clear 4K resolution with HDR, smart features, and voice control. Includes multiple HDMI and USB ports.",
//     price: 699.99,
//     originalPrice: 799.99,
//     images: [
//       "https://images.pexels.com/photos/6782570/pexels-photo-6782570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       "https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     ],
//     category: "electronics",
//     childcategory: "laptops", // TV would typically be in its own category, but using "laptops" as closest match
//     rating: 4.7,
//     reviews: 218,
//     inStock: true,
//     isFeatured: true,
//   },
//   {
//     id: "p3",
//     name: "Modern Leather Jacket",
//     description: "Premium genuine leather jacket with stylish design, perfect for fall and winter seasons. Includes inner lining and multiple pockets.",
//     price: 199.99,
//     originalPrice: 249.99,
//     images: [
//       "https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     ],
//     category: "clothing",
//     childcategory: "men", // Added childcategory
//     rating: 4.6,
//     reviews: 142,
//     inStock: true,
//     colors: ["Black", "Brown", "Tan"],
//     sizes: ["S", "M", "L", "XL"],
//     isFeatured: true,
//   },
//   {
//     id: "c1",
//     name: "Classic Denim Jeans",
//     description: "Premium quality denim jeans with comfortable stretch fabric. Perfect fit with modern styling and durable construction.",
//     price: 59.99,
//     originalPrice: 79.99,
//     images: [
//       "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80",
//       "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
//     ],
//     category: "clothing",
//     childcategory: "men", // Added childcategory
//     rating: 4.5,
//     reviews: 215,
//     inStock: true,
//     colors: ["Blue", "Black", "Light Wash"],
//     sizes: ["28", "30", "32", "34", "36"],
//     isFeatured: true,
//   },
//   {
//     id: "c2",
//     name: "Oversized Hoodie",
//     description: "Comfortable oversized hoodie made from premium cotton blend. Features kangaroo pocket and adjustable drawstrings.",
//     price: 45.99,
//     originalPrice: 59.99,
//     images: [
//       "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80",
//       "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
//     ],
//     category: "clothing",
//     childcategory: "women", // Added childcategory
//     rating: 4.7,
//     reviews: 183,
//     inStock: true,
//     colors: ["Black", "Gray", "Navy", "Olive"],
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     isFeatured: true,
//   },
//   {
//     id: "c3",
//     name: "Wool Blend Coat",
//     description: "Elegant winter coat made from premium wool blend. Features notched lapels, inner lining, and functional buttons.",
//     price: 179.99,
//     originalPrice: 229.99,
//     images: [
//       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
//     ],
//     category: "clothing",
//     childcategory: "women", // Added childcategory
//     rating: 4.8,
//     reviews: 97,
//     inStock: true,
//     colors: ["Camel", "Charcoal", "Navy"],
//     sizes: ["XS", "S", "M", "L", "XL"],
//     isFeatured: true,
//   },
//   {
//     id: "p6",
//     name: "Bluetooth Smartwatch",
//     description: "Feature-rich smartwatch with fitness tracking, heart rate monitor, and customizable watch faces. Compatible with iOS and Android.",
//     price: 129.99,
//     originalPrice: 159.99,
//     images: [
//       "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     ],
//     category: "electronics",
//     childcategory: "wearables",
//     rating: 4.4,
//     reviews: 278,
//     inStock: true,
//     colors: ["Black", "Rose Gold", "Gray"],
//     isFeatured: true
//   },
//   {
//     id: "p7",
//     name: "Stainless Steel Cookware Set",
//     description: "Durable 10-piece cookware set with non-stick interior and tempered glass lids. Oven and dishwasher safe.",
//     price: 149.99,
//     originalPrice: 199.99,
//     images: [
//       "https://images.pexels.com/photos/276287/pexels-photo-276287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       "https://images.pexels.com/photos/276289/pexels-photo-276289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     ],
//     category: "home-decor",
//     childcategory: "kitchen",
//     rating: 4.6,
//     reviews: 134,
//     inStock: true,
//     colors: ["Silver"]
//   },
//   {
//     id: "c4",
//     name: "Cotton Summer Dress",
//     description: "Lightweight and breathable cotton dress, perfect for warm weather. Available in floral and solid prints.",
//     price: 39.99,
//     originalPrice: 54.99,
//     images: [
//       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
//       "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
//     ],
//     category: "clothing",
//     childcategory: "women",
//     rating: 4.3,
//     reviews: 201,
//     inStock: true,
//     colors: ["Yellow", "White", "Pink"],
//     sizes: ["XS", "S", "M", "L"],
//     isFeatured: true
//   },
//   {
//     id: "s1",
//     name: "Adjustable Dumbbell Set",
//     description: "Space-saving adjustable dumbbells with weights ranging from 5 to 52.5 lbs. Ideal for home workouts.",
//     price: 199.99,
//     originalPrice: 249.99,
//     images: [
//       "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     ],
//     category: "sports",
//     childcategory: "gym",
//     rating: 4.9,
//     reviews: 322,
//     inStock: true,
//     isBestseller: true,
//     colors: ["Black", "Gray"]
//   },
//   {
//     id: "f1",
//     name: "Foldable Laptop Table",
//     description: "Multipurpose portable laptop table with adjustable height and angle. Includes cup holder and tablet slot.",
//     price: 39.99,
//     originalPrice: 49.99,
//     images: [
//       "https://images.pexels.com/photos/5721903/pexels-photo-5721903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       "https://images.pexels.com/photos/5721904/pexels-photo-5721904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     ],
//     category: "home-decor",
//     childcategory: "furniture",
//     rating: 4.6,
//     reviews: 98,
//     inStock: true,
//     colors: ["Wood", "White", "Black"],
//     isFeatured: false
//   },
  
//   {
//     id: "p4",
//     name: "Designer Desk Lamp",
//     description: "Elegant desk lamp with adjustable arm, touch control, and multiple light modes. Perfect for home office or bedroom.",
//     price: 79.99,
//     images: [
//       "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       "https://images.pexels.com/photos/6444365/pexels-photo-6444365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     ],
//     category: "home-decor",
//     childcategory: "lighting", // Added childcategory
//     rating: 4.5,
//     reviews: 87,
//     inStock: true,
//     colors: ["White", "Black", "Brass"],
//   },
//   {
//     id: "p5",
//     name: "Premium Yoga Mat",
//     description: "Extra thick and cushioned yoga mat made from eco-friendly materials. Non-slip surface and includes carrying strap.",
//     price: 45.99,
//     images: [
//       "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     ],
//     category: "sports",
//     childcategory: "gym", // Added childcategory
//     rating: 4.7,
//     reviews: 113,
//     inStock: true,
//     isBestseller: true,
//     colors: ["Blue", "Purple", "Black", "Green"],
//   },
//   // ... (continue with similar pattern for all products)
// ];


export const products: Product[] = [
  {
    id: "p1",
    name: "Wireless Noise-Cancelling Headphones",
    description: "Premium over-ear headphones with active noise cancellation, Bluetooth 5.0, and 30-hour battery life.",
    price: 249.99,
    originalPrice: 299.99,
    images: [
      "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3394654/pexels-photo-3394654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "electronics",
    childcategory: "audio",
    rating: 4.8,
    reviews: 356,
    inStock: true,
    isFeatured: true,
    colors: ["Black", "Silver", "Navy"],
    highlights: [
      "Active Noise Cancellation",
      "Bluetooth 5.0",
      "30 Hours Battery Life",
      "Over-ear Comfort",
      "Premium Audio Drivers"
    ],
    specifications: {
      "Brand": "AudioZen",
      "Model": "AZ-HX500",
      "Color Options": "Black, Silver, Navy",
      "Headphone Type": "Over-ear",
      "Battery Life": "30 Hours",
      "Connectivity": "Wireless"
    },
    seller: {
      name: "SoundWave",
      rating: 4.9,
      reliability: "98%"
    }
  },
  {
    id: "p2",
    name: 'Ultra HD Smart TV - 55"',
    description: "Crystal clear 4K resolution with HDR, smart features, and voice control. Includes multiple HDMI and USB ports.",
    price: 699.99,
    originalPrice: 799.99,
    images: [
      "https://images.pexels.com/photos/6782570/pexels-photo-6782570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "electronics",
    childcategory: "laptops", // temporary mapping
    rating: 4.7,
    reviews: 218,
    inStock: true,
    isFeatured: true,
    highlights: [
      "4K UHD Resolution",
      "HDR10+ Compatible",
      "Voice Assistant Support",
      "Multiple HDMI/USB Ports",
      "Smart TV Features"
    ],
    specifications: {
      "Brand": "VisionTech",
      "Model": "VT-55UHD",
      "Screen Size": '55"',
      "Resolution": "3840 x 2160",
      "Connectivity": "WiFi, HDMI, USB, Bluetooth",
      "OS": "Smart OS"
    },
    seller: {
      name: "TechWorld",
      rating: 4.7,
      reliability: "95%"
    }
  },
    {
      "id": "p3",
      "name": "Wireless Soundbar with Subwoofer",
      "description": "Immersive surround sound with a wireless subwoofer, Bluetooth connectivity, and easy setup. Perfect for enhancing your TV audio experience.",
      "price": 249.99,
      "originalPrice": 299.99,
      "images": [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',

      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',

 
      ],
      "category": "electronics",
      "childcategory": "audio",
      "rating": 4.5,
      "reviews": 142,
      "inStock": true,
      "isFeatured": false,
      "highlights": [
        "Dolby Audio Support",
        "Wireless Subwoofer",
        "Bluetooth 5.0",
        "HDMI ARC Compatible",
        "Wall Mountable"
      ],
      "specifications": {
        "Brand": "SoundMax",
        "Model": "SM-300WS",
        "Power Output": "320W",
        "Connectivity": "Bluetooth, HDMI ARC, Optical, AUX",
        "Subwoofer": "Wireless 6.5-inch",
        "Dimensions": "Soundbar: 38\" x 2.5\" x 3\", Subwoofer: 8\" x 12\" x 12\""
      },
      "seller": {
        "name": "AudioZone",
        "rating": 4.6,
        "reliability": "92%"
      }
    },
  {
    id: "p3",
    name: "Modern Leather Jacket",
    description: "Premium genuine leather jacket with stylish design, perfect for fall and winter seasons. Includes inner lining and multiple pockets.",
    price: 199.99,
    originalPrice: 249.99,
    images: [
      "https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "clothing",
    childcategory: "men",
    rating: 4.6,
    reviews: 142,
    inStock: true,
    colors: ["Black", "Brown", "Tan"],
    sizes: ["S", "M", "L", "XL"],
    isFeatured: true,
    highlights: [
      "Genuine Leather",
      "Soft Inner Lining",
      "Stylish Slim Fit",
      "Multiple Utility Pockets",
      "Durable Stitching"
    ],
    specifications: {
      "Brand": "UrbanEdge",
      "Material": "Genuine Leather",
      "Fit": "Slim",
      "Color Options": "Black, Brown, Tan",
      "Season": "Fall/Winter"
    },
    seller: {
      name: "FashionMania",
      rating: 4.8,
      reliability: "97%"
    }
  },
 
  {
    id: "p4",
    name: "Floral A-Line Summer Dress",
    description: "Lightweight and breathable floral dress with a flattering A-line silhouette. Perfect for summer outings and casual wear.",
    price: 49.99,
    originalPrice: 69.99,
    images: [
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2983466/pexels-photo-2983466.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "clothing",
    childcategory: "women",
    rating: 4.5,
    reviews: 87,
    inStock: true,
    colors: ["Pink", "Yellow", "Blue"],
    sizes: ["XS", "S", "M", "L"],
    isFeatured: false,
    highlights: [
      "A-Line Cut",
      "Floral Print",
      "Breathable Cotton Blend",
      "Machine Washable",
      "Side Pockets"
    ],
    specifications: {
      "Brand": "BlossomWear",
      "Material": "Cotton Blend",
      "Style": "A-Line",
      "Color Options": "Pink, Yellow, Blue",
      "Sleeve Type": "Sleeveless"
    },
    seller: {
      name: "TrendyApparel",
      rating: 4.6,
      reliability: "93%"
    }
  },
  {
    id: "p5",
    name: "NitroX Gaming Laptop 16”",
    description: "High-performance gaming laptop with a 12th-gen Intel processor, RTX 4060 GPU, and a 144Hz display.",
    price: 1499.99,
    originalPrice: 1699.99,
    images: [
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "electronics",
    childcategory: "laptops",
    rating: 4.9,
    reviews: 289,
    inStock: true,
    colors: ["Black", "Red"],
    isFeatured: true,
    highlights: [
      "12th Gen Intel i7",
      "NVIDIA RTX 4060",
      "16GB RAM, 1TB SSD",
      "144Hz IPS Display",
      "RGB Backlit Keyboard"
    ],
    specifications: {
      "Brand": "NitroX",
      "Processor": "Intel Core i7-12700H",
      "Graphics": "NVIDIA GeForce RTX 4060",
      "RAM": "16GB DDR5",
      "Storage": "1TB SSD",
      "Display": "16\" FHD 144Hz"
    },
    seller: {
      name: "EliteGears",
      rating: 4.9,
      reliability: "99%"
    }
  },
  {
    id: "p6",
    name: "FlexRun Pro Running Shoes",
    description: "Ultra-lightweight running shoes with breathable mesh and cushioned soles for maximum comfort and performance.",
    price: 89.99,
    originalPrice: 109.99,
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2529152/pexels-photo-2529152.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "footwear",
    childcategory: "sports",
    rating: 4.4,
    reviews: 134,
    inStock: true,
    colors: ["Gray", "Blue", "Green"],
    sizes: ["7", "8", "9", "10", "11"],
    isFeatured: false,
    highlights: [
      "Cushioned EVA Sole",
      "Mesh Upper for Breathability",
      "Lace-Up Closure",
      "Durable Rubber Grip",
      "Heel Support"
    ],
    specifications: {
      "Brand": "FlexRun",
      "Material": "Mesh & EVA",
      "Type": "Running Shoes",
      "Gender": "Unisex",
      "Weight": "280g (Size 9)"
    },
    seller: {
      name: "StrideNation",
      rating: 4.5,
      reliability: "92%"
    }
  },
  
    {
      "id": "home1",
      "name": "Macrame Wall Hanging",
      "price": 1299,
      "images": [
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
        "https://images.unsplash.com/photo-1583744946564-b52d01e2da64"
      ],
      "description": "Handcrafted cotton macrame wall hanging for boho vibes.",
      "rating": 4.7,
      "category": "home-decor",
      "subcategory": "Wall Art",
      "colors": ["Cream", "Beige"],
      "sizes": ["Standard"],
      "highlights": ["100% cotton", "Handmade", "Bohemian style"]
    },
    {
      "id": "home2",
      "name": "Ceramic Flower Vase Set",
      "price": 1899,
      "images": [
        // "https://images.unsplash.com/photo-1585238342024-5d3a6d81e4a3",
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6"
      ],
      "description": "Minimalist ceramic vases perfect for living room or entryway.",
      "rating": 4.5,
      "category": "home-decor",
      "subcategory": "Vases",
      "colors": ["White", "Grey", "Pastel Blue"],
      "sizes": ["Small", "Medium"],
      "highlights": ["Set of 3", "Matte finish", "Waterproof"]
    },
    {
      "id": "home3",
      "name": "LED Fairy Light String",
      "price": 599,
      "images": [
        "https://images.unsplash.com/photo-1514464750060-00e6e34c8b8c",
        "https://images.unsplash.com/photo-1518134346374-184f9d21cea0"
      ],
      "description": "Warm white LED string lights for cozy ambient lighting.",
      "rating": 4.6,
      "category": "home-decor",
      "subcategory": "Lighting",
      "colors": ["Warm White"],
      "sizes": ["5m", "10m"],
      "highlights": ["Battery & USB powered", "Weather-resistant", "Safe for indoor/outdoor"]
    },
    {
      "id": "home4",
      "name": "Abstract Canvas Art Set",
      "price": 2499,
      "images": [
        "https://images.unsplash.com/photo-1579547945413-497e1b99dac0",
        "https://images.unsplash.com/photo-1578926375605-eaf7559b1458"
      ],
      "description": "Set of 3 framed abstract prints to elevate your space.",
      "rating": 4.8,
      "category": "home-decor",
      "subcategory": "Wall Art",
      "colors": ["Blue", "Gold", "Black"],
      "sizes": ["40x50cm", "50x70cm"],
      "highlights": ["Framed", "Ready to hang", "UV-resistant prints"]
    },
    {
      "id": "home5",
      "name": "Cotton Throw Blanket",
      "price": 999,
      "images": [
        "https://images.unsplash.com/photo-1592078615290-033ee584e267",
        "https://images.unsplash.com/photo-1520302630591-fd1a5fbcee91"
      ],
      "description": "Soft, breathable cotton throw for couch or bed.",
      "rating": 4.4,
      "category": "Home Decor",
      "subcategory": "Textiles",
      "colors": ["Mustard", "Olive Green", "Charcoal"],
      "sizes": ["130x170cm"],
      "highlights": ["100% cotton", "Machine washable", "Lightweight"]
    }
  
];

export const collections = [
  {
    id: "new-arrivals",
    title: "New Arrivals",
    products: products.filter((p) => p.isNew),
  },
  {
    id: "bestsellers",
    title: "Bestsellers",
    products: products.filter((p) => p.isBestseller),
  },
  {
    id: "featured",
    title: "Featured Products",
    products: products.filter((p) => p.isFeatured),
  },
];

// Banner promotions for homepage
export const promotions = [
  {
    id: "summer-sale",
    title: "Summer Sale",
    description: "Up to 40% off selected items",
    image:
      "https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/collections/summer-sale",
  },
  {
    id: "new-season",
    title: "New Season Collection",
    description: "Discover the latest trends",
    image:
      "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/collections/new-season",
  },

  
];
