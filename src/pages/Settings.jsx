import React, { useState } from 'react';
import {
  Bell,
  User,
  Lock,
  CreditCard,
  MapPin,
  Smartphone,
  Globe,
  Moon,
  HelpCircle,
  LogOut,
  Info
} from 'lucide-react';
import Header from '../components/common/Header';
import BottomNavigation from '../components/common/BottomNavigation';
import SettingItem from '../components/settings/SettingItem';
import ToggleSwitch from '../components/settings/ToggleSwitch';
import { mockNotificationPreferences, mockPaymentMethods } from '../data/mockData';

const Settings = () => {
  const [notificationPrefs, setNotificationPrefs] = useState(mockNotificationPreferences);
  const [darkMode, setDarkMode] = useState(false);
  
  const handleNotificationToggle = (key) => {
    setNotificationPrefs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0 md:pl-14">
      {/* <Header showBack /> */}
      
      <main className="pt-16 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Account</h2>
          </div>
          
          <div className="p-2">
            <SettingItem
              icon={<User size={20} />}
              title="Personal Information"
              description="Update your basic profile details"
              onClick={() => {}}
            />
            
            <SettingItem
              icon={<Lock size={20} />}
              title="Security & Login"
              description="Manage your password and account security"
              onClick={() => {}}
            />
            
            <SettingItem
              icon={<CreditCard size={20} />}
              title="Payment Methods"
              description={`${mockPaymentMethods.length} saved payment methods`}
              onClick={() => {}}
            />
            
            <SettingItem
              icon={<MapPin size={20} />}
              title="Addresses"
              description="Manage your shipping and billing addresses"
              onClick={() => {}}
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Notifications</h2>
          </div>
          
          <div className="p-2">
            <SettingItem
              icon={<Smartphone size={20} />}
              title="Push Notifications"
              showChevron={false}
              rightElement={<ToggleSwitch 
                checked={true} 
                onChange={() => {}} 
              />}
            />
            
            <SettingItem
              icon={<Bell size={20} />}
              title="Order Updates"
              description="Get notified about your order status"
              showChevron={false}
              rightElement={<ToggleSwitch 
                checked={notificationPrefs.orderUpdates} 
                onChange={() => handleNotificationToggle('orderUpdates')} 
              />}
            />
            
            <SettingItem
              icon={<Bell size={20} />}
              title="Promotions & Offers"
              description="Receive deals, discounts and coupon codes"
              showChevron={false}
              rightElement={<ToggleSwitch 
                checked={notificationPrefs.promotions} 
                onChange={() => handleNotificationToggle('promotions')} 
              />}
            />
            
            <SettingItem
              icon={<Bell size={20} />}
              title="Price Alerts"
              description="Get notified when items in your wishlist drop in price"
              showChevron={false}
              rightElement={<ToggleSwitch 
                checked={notificationPrefs.priceAlerts} 
                onChange={() => handleNotificationToggle('priceAlerts')} 
              />}
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">App Settings</h2>
          </div>
          
          <div className="p-2">
            <SettingItem
              icon={<Globe size={20} />}
              title="Language"
              description="English (US)"
              onClick={() => {}}
            />
            
            <SettingItem
              icon={<Moon size={20} />}
              title="Dark Mode"
              showChevron={false}
              rightElement={<ToggleSwitch 
                checked={darkMode} 
                onChange={() => setDarkMode(!darkMode)} 
              />}
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="p-2">
            <SettingItem
              icon={<HelpCircle size={20} />}
              title="Help Center"
              onClick={() => {}}
            />
            
            <SettingItem
              icon={<Info size={20} />}
              title="About Us"
              onClick={() => {}}
            />
            
            <SettingItem
              icon={<LogOut size={20} className="text-red-500" />}
              title="Logout"
              showChevron={false}
              divider={false}
              onClick={() => {}}
            />
          </div>
        </div>
        
        <p className="text-center text-xs text-gray-500 mb-6">
          App Version 1.0.0 • Terms of Service • Privacy Policy
        </p>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Settings;
