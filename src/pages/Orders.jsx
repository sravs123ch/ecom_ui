import React, { useState } from 'react';
import { Package, Search, Filter, Calendar, Truck, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import Header from '../components/common/Header';
import OrderCard from '../components/orders/OrderCard';
import { mockOrders } from '../data/mockData';

const Orders = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = orders.filter(order =>
    filterStatus === 'all' ? true : order.status === filterStatus
  );

  const handleViewDetails = (orderId) => {
    const order = orders.find(o => o.id === orderId);
    if (order) {
      setSelectedOrder(order);
    }
  };

  const getTrackingSteps = (order) => {
    const steps = [
      { status: 'ordered', label: 'Order Placed', icon: CheckCircle2, date: order.date },
      { status: 'processing', label: 'Processing', icon: Clock, date: null },
      { status: 'shipped', label: 'Shipped', icon: Truck, date: null },
      { status: 'delivered', label: 'Delivered', icon: MapPin, date: null }
    ];

    let currentStepFound = false;
    return steps.map(step => {
      if (step.status === order.status) {
        currentStepFound = true;
        return { ...step, isCompleted: true, isCurrent: true };
      }
      return {
        ...step,
        isCompleted: !currentStepFound,
        isCurrent: false
      };
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0 md:pl-14">
   
      <main className="pt-16 max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
          <p className="text-gray-600 mt-1">Track and manage your orders</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search orders by ID or product name..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
              <Search size={20} className="absolute left-3 top-3.5 text-gray-400" />
            </div>

            <button className="p-3 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
              <Filter size={20} />
            </button>

            <button className="p-3 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
              <Calendar size={20} />
            </button>
          </div>

          <div className="flex space-x-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {['all', 'pending', 'processing', 'shipped', 'delivered', 'cancelled', 'returned'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  filterStatus === status
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {selectedOrder ? (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Order #{selectedOrder.id}</h2>
                  <p className="text-gray-600 mt-1">Placed on {new Date(selectedOrder.date).toLocaleDateString()}</p>
                </div>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Truck size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Order Status</h3>
                    <p className="text-blue-600 font-medium">
                      {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200"></div>
                {getTrackingSteps(selectedOrder).map((step, index) => (
                  <div key={step.status} className="flex items-start mb-8 relative">
                    <div className={`w-16 flex-shrink-0 flex justify-center ${
                      index === getTrackingSteps(selectedOrder).length - 1 ? '' : 'pb-8'
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.isCompleted
                          ? 'bg-green-100'
                          : step.isCurrent
                          ? 'bg-blue-100'
                          : 'bg-gray-100'
                      }`}>
                        <step.icon size={16} className={
                          step.isCompleted
                            ? 'text-green-600'
                            : step.isCurrent
                            ? 'text-blue-600'
                            : 'text-gray-400'
                        } />
                      </div>
                    </div>
                    <div>
                      <p className={`font-medium ${
                        step.isCurrent ? 'text-blue-600' : 'text-gray-800'
                      }`}>{step.label}</p>
                      {step.date && (
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(step.date).toLocaleDateString()} at {new Date(step.date).toLocaleTimeString()}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-white rounded-lg">
                      <Truck size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Shipping Details</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {selectedOrder.trackingNumber && (
                          <>Tracking Number: {selectedOrder.trackingNumber}<br /></>
                        )}
                        Expected Delivery: {selectedOrder.expectedDelivery 
                          ? new Date(selectedOrder.expectedDelivery).toLocaleDateString()
                          : 'To be updated'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-white rounded-lg">
                      <MapPin size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Delivery Address</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {selectedOrder.shippingAddress.line1}<br />
                        {selectedOrder.shippingAddress.line2 && (
                          <>{selectedOrder.shippingAddress.line2}<br /></>
                        )}
                        {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state}<br />
                        {selectedOrder.shippingAddress.postalCode}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border rounded-xl overflow-hidden">
                <div className="p-4 bg-gray-50 border-b">
                  <h3 className="font-medium text-gray-800">Order Items</h3>
                </div>
                <div className="divide-y">
                  {selectedOrder.items.map(item => (
                    <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-xl object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">{item.name}</h4>
                          {item.variant && (
                            <p className="text-sm text-gray-500 mt-1">{item.variant}</p>
                          )}
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-sm text-gray-600">
                              Qty: {item.quantity}
                            </p>
                            <p className="font-medium text-gray-900">
                              ₹{item.price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-gray-50 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">Total Amount</span>
                    <span className="text-xl font-bold text-gray-900">₹{selectedOrder.totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          filteredOrders.length > 0 ? (
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
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
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
                <button className="bg-blue-600 text-white py-2.5 px-6 rounded-xl hover:bg-blue-700 transition-colors">
                  Start shopping
                </button>
              )}
            </div>
          )
        )}
      </main>
    </div>
  );
};

export default Orders;
