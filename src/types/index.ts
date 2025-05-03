export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  subcategory?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isFeatured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  colors?: string[];
  sizes?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  color?: string;
  size?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
  shippingAddress: Address;
  paymentMethod: string;
}

// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  joinedDate: string;
  totalOrders: number;
  totalSpent: number;
  savedAmount: number;
  membershipTier: 'bronze' | 'silver' | 'gold' | 'platinum';
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  isDefault: boolean;
}

// Order related types
export interface OrderItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  variant?: string;
}

export interface Order {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'returned';
  items: OrderItem[];
  totalAmount: number;
  shippingAddress: Address;
  paymentMethod: string;
  trackingNumber?: string;
  expectedDelivery?: string;
  invoice?: string;
}

// Notification related types
export interface Notification {
  id: string;
  type: 'order' | 'offer' | 'payment' | 'info' | 'alert';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
  imageUrl?: string;
}

// Settings related types
export interface NotificationPreference {
  type: 'email' | 'sms' | 'push';
  orderUpdates: boolean;
  promotions: boolean;
  recommendations: boolean;
  priceAlerts: boolean;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'upi' | 'wallet' | 'netbanking';
  name: string;
  icon: string;
  primary: boolean;
  lastUsed?: string;
  maskedNumber?: string;
}

export interface PrivacySettings {
  profileVisibility: 'public' | 'private';
  showRecentlyViewed: boolean;
  shareWishlist: boolean;
  allowRecommendations: boolean;
}

export interface AppSettings {
  language: string;
  currency: string;
  darkMode: boolean;
  autoPlayVideos: boolean;
  enablePushNotifications: boolean;
}

// Wishlist related types
export interface WishlistItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  image: string;
  dateAdded: string;
  inStock: boolean;
  hasOffers: boolean;
}


export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  parentId?: string;
  children?: Category[];
  productCount?: number;
}