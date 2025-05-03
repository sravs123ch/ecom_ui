import React, { useState } from 'react';
import { Package, Search, Filter, Calendar } from 'lucide-react';
import Header from '../components/common/Header';
import OrderCard from '../components/orders/OrderCard';
import { mockOrders } from '../data/mockData';

const Orders = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredOrders = orders.filter(order => 
    filterStatus === 'all' ? true : order.status === filterStatus
  );

  const handleViewDetails = (orderId) => {
    // Navigate to order details page
    console.log('View order details:', orderId);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0 md:pl-14">
      {/* <Header showBack /> */}

      <main className="pt-16 max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
          <p className="text-gray-600 mt-1">Track and manage your orders</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
            </div>

            <button className="p-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              <Filter size={20} />
            </button>

            <button className="p-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              <Calendar size={20} />
            </button>
          </div>

          <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
            {['all', 'pending', 'processing', 'shipped', 'delivered', 'cancelled', 'returned'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
                  filterStatus === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {filteredOrders.length > 0 ? (
          <div className="space-y-4">
            {filteredOrders.map(order => (
              <OrderCard
                key={order.id}
                order={order}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Package size={32} className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">No orders found</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              {filterStatus === 'all'
                ? "You haven't placed any orders yet. Start shopping to see your orders here."
                : `No ${filterStatus} orders found. Try selecting a different filter.`}
            </p>
            {filterStatus === 'all' && (
              <button className="bg-blue-600 text-white py-2.5 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Start shopping
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Orders;
