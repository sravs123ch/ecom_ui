import React, { useState } from 'react';
import { PlusCircle, MapPin } from 'lucide-react';
import Header from '../components/common/Header';
import BottomNavigation from '../components/common/BottomNavigation';
import ProfileHeader from '../components/profile/ProfileHeader';
import AddressCard from '../components/profile/AddressCard';
import { mockUser, mockAddresses } from '../data/mockData';

const Profile = () => {
  const [addresses, setAddresses] = useState(mockAddresses);
  
  const handleEditAddress = (id) => {
    // In a real app, this would open an edit form
    console.log('Edit address:', id);
  };
  
  const handleDeleteAddress = (id) => {
    setAddresses(prevAddresses => 
      prevAddresses.filter(address => address.id !== id)
    );
  };
  
  const handleSetDefaultAddress = (id) => {
    setAddresses(prevAddresses => 
      prevAddresses.map(address => ({
        ...address,
        isDefault: address.id === id
      }))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0 md:pl-14 mt-10">
      {/* <Header showBack /> */}
      
      <ProfileHeader user={mockUser} />
      
      <main className="pt-24 px-4 max-w-4xl mx-auto">
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">My Addresses</h2>
            <button className="flex items-center text-sm text-color text-color-hover transition-colors">
              <PlusCircle size={16} className="mr-1" />
              <span>Add New</span>
            </button>
          </div>
          
          {addresses.length > 0 ? (
            addresses.map(address => (
              <AddressCard
                key={address.id}
                address={address}
                onEdit={handleEditAddress}
                onDelete={handleDeleteAddress}
                onSetDefault={handleSetDefaultAddress}
              />
            ))
          ) : (
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <MapPin size={24} className="text-color" />
              </div>
              <h3 className="text-gray-800 font-medium mb-2">No saved addresses</h3>
              <p className="text-gray-600 text-sm mb-4">
                Add a delivery address to streamline your checkout experience.
              </p>
              <button className="bg-color text-white py-2 px-4 rounded-lg text-sm text-color-hover transition-colors">
                Add a new address
              </button>
            </div>
          )}
        </div>
        
        <div className="mt-8 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-color-100 rounded-full mb-4">
              <MapPin size={24} className="text-color" />
            </div>
            <h3 className="text-gray-800 font-medium mb-2">No recent orders</h3>
            <p className="text-gray-600 text-sm mb-4">
              Your order history will appear here once you've made a purchase.
            </p>
            <button className="bg-color text-white py-2 px-4 rounded-lg text-sm hover:bg-color transition-colors">
              Start shopping
            </button>
          </div>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Profile;
