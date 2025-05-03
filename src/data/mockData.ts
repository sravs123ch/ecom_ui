// import { User, Notification, Address, PaymentMethod, WishlistItem, NotificationPreference } from '../types';

import { User, Notification, Address, PaymentMethod, WishlistItem, NotificationPreference, Order, PrivacySettings, AppSettings } from '../types';
export const mockUser: User = {
  id: '123456',
  name: 'Rahul Sharma',
  email: 'rahul.sharma@example.com',
  phone: '+91 98765 43210',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  joinedDate: '2021-05-15',
  totalOrders: 37,
  totalSpent: 24850,
  savedAmount: 3600,
  membershipTier: 'gold'
};

export const mockAddresses: Address[] = [
  {
    id: 'addr1',
    type: 'home',
    line1: '123, Sunshine Apartments',
    line2: 'Sector 18',
    city: 'Noida',
    state: 'Uttar Pradesh',
    postalCode: '201301',
    isDefault: true
  },
  {
    id: 'addr2',
    type: 'work',
    line1: 'Block D, Tech Park',
    line2: 'Sector 62',
    city: 'Noida',
    state: 'Uttar Pradesh',
    postalCode: '201309',
    isDefault: false
  }
];

export const mockNotifications: Notification[] = [
  {
    id: 'notif1',
    type: 'order',
    title: 'Order Delivered',
    message: 'Your order #OD123456789 has been delivered. Rate your experience now!',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    isRead: false,
    actionUrl: '/orders/OD123456789',
    imageUrl: 'https://images.pexels.com/photos/1803956/pexels-photo-1803956.jpeg?auto=compress&cs=tinysrgb&w=250'
  },
  {
    id: 'notif2',
    type: 'offer',
    title: 'Flash Sale!',
    message: '50% off on electronics. Limited time offer ends in 6 hours!',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    isRead: true,
    actionUrl: '/offers/electronics',
    imageUrl: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=250'
  },
  {
    id: 'notif3',
    type: 'payment',
    title: 'Payment Successful',
    message: 'Your payment of ₹2,499 has been processed successfully.',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    isRead: true
  },
  {
    id: 'notif4',
    type: 'info',
    title: 'Account Updated',
    message: 'Your account details have been updated successfully.',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    isRead: true
  },
  {
    id: 'notif5',
    type: 'alert',
    title: 'Price Drop Alert',
    message: 'Samsung Galaxy S23 price dropped by ₹5,000. Check it out now!',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    isRead: false,
    actionUrl: '/products/samsung-galaxy-s23',
    imageUrl: 'https://images.pexels.com/photos/13218022/pexels-photo-13218022.jpeg?auto=compress&cs=tinysrgb&w=250'
  }
];

export const mockPaymentMethods: PaymentMethod[] = [
  {
    id: 'pay1',
    type: 'card',
    name: 'HDFC Debit Card',
    icon: 'credit-card',
    primary: true,
    lastUsed: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    maskedNumber: '•••• 4578'
  },
  {
    id: 'pay2',
    type: 'upi',
    name: 'Google Pay UPI',
    icon: 'smartphone',
    primary: false,
    lastUsed: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    maskedNumber: 'rahul@okicici'
  },
  {
    id: 'pay3',
    type: 'wallet',
    name: 'Paytm Wallet',
    icon: 'wallet',
    primary: false
  }
];

export const mockNotificationPreferences: NotificationPreference = {
  type: 'push',
  orderUpdates: true,
  promotions: true,
  recommendations: false,
  priceAlerts: true
};

export const mockWishlistItems: WishlistItem[] = [
  {
    id: 'wish1',
    name: 'Apple iPhone 15 Pro Max',
    brand: 'Apple',
    price: 139900,
    originalPrice: 149900,
    discount: 7,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300',
    dateAdded: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    inStock: true,
    hasOffers: true
  },
  {
    id: 'wish2',
    name: 'Sony WH-1000XM5 Noise Cancelling Headphones',
    brand: 'Sony',
    price: 24990,
    originalPrice: 29990,
    discount: 17,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=300',
    dateAdded: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    inStock: true,
    hasOffers: false
  },
  {
    id: 'wish3',
    name: 'Samsung 55-inch QN90C Neo QLED 4K Smart TV',
    brand: 'Samsung',
    price: 89999,
    originalPrice: 109999,
    discount: 18,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&w=300',
    dateAdded: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
    inStock: true,
    hasOffers: true
  },
  {
    id: 'wish4',
    name: 'Apple Watch Series 9',
    brand: 'Apple',
    price: 41900,
    originalPrice: 45900,
    discount: 9,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300',
    dateAdded: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    inStock: false,
    hasOffers: false
  },
  {
    id: 'wish5',
    name: 'MacBook Air M3',
    brand: 'Apple',
    price: 114900,
    originalPrice: 119900,
    discount: 4,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=300',
    dateAdded: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    inStock: true,
    hasOffers: true
  }
];

export const mockOrders: Order[] = [
  {
    id: 'OD123456789',
    date: '2024-03-15T10:30:00Z',
    status: 'delivered',
    items: [
      {
        id: 'item1',
        name: 'Apple iPhone 15 Pro Max',
        image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300',
        price: 139900,
        quantity: 1,
        variant: '256GB, Natural Titanium'
      }
    ],
    totalAmount: 139900,
    shippingAddress: mockAddresses[0],
    paymentMethod: 'HDFC Credit Card',
    trackingNumber: 'IN123456789',
    expectedDelivery: '2024-03-18T18:00:00Z',
    invoice: 'https://example.com/invoice/OD123456789.pdf'
  },
  {
    id: 'OD123456788',
    date: '2024-03-10T14:20:00Z',
    status: 'shipped',
    items: [
      {
        id: 'item2',
        name: 'Sony WH-1000XM5',
        image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=300',
        price: 24990,
        quantity: 1,
        variant: 'Black'
      }
    ],
    totalAmount: 24990,
    shippingAddress: mockAddresses[1],
    paymentMethod: 'Google Pay UPI',
    trackingNumber: 'IN123456788',
    expectedDelivery: '2024-03-20T18:00:00Z'
  },
  {
    id: 'OD123456787',
    date: '2024-03-05T09:15:00Z',
    status: 'delivered',
    items: [
      {
        id: 'item3',
        name: 'Samsung 55-inch QN90C Neo QLED 4K Smart TV',
        image: 'https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&w=300',
        price: 89999,
        quantity: 1,
        variant: '55-inch'
      }
    ],
    totalAmount: 89999,
    shippingAddress: mockAddresses[0],
    paymentMethod: 'HDFC Credit Card',
    trackingNumber: 'IN123456787',
    invoice: 'https://example.com/invoice/OD123456787.pdf'
  }
];
export const mockPrivacySettings: PrivacySettings = {
  profileVisibility: 'public',
  showRecentlyViewed: true,
  shareWishlist: false,
  allowRecommendations: true
};

export const mockAppSettings: AppSettings = {
  language: 'English (IN)',
  currency: 'INR',
  darkMode: false,
  autoPlayVideos: true,
  enablePushNotifications: true
};
