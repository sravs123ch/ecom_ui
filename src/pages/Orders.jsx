// import React, { useState } from 'react';
// import { Package, Search, Filter, Calendar, Truck, MapPin, Clock, CheckCircle2 } from 'lucide-react';
// import Header from '../components/common/Header';
// import OrderCard from '../components/orders/OrderCard';
// import { mockOrders } from '../data/mockData';

// const Orders = () => {
//   const [orders, setOrders] = useState(mockOrders);
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   const filteredOrders = orders.filter(order =>
//     filterStatus === 'all' ? true : order.status === filterStatus
//   );

//   const handleViewDetails = (orderId) => {
//     const order = orders.find(o => o.id === orderId);
//     if (order) {
//       setSelectedOrder(order);
//     }
//   };

//   const getTrackingSteps = (order) => {
//     const steps = [
//       { status: 'ordered', label: 'Order Placed', icon: CheckCircle2, date: order.date },
//       { status: 'processing', label: 'Processing', icon: Clock, date: null },
//       { status: 'shipped', label: 'Shipped', icon: Truck, date: null },
//       { status: 'delivered', label: 'Delivered', icon: MapPin, date: null }
//     ];

//     let currentStepFound = false;
//     return steps.map(step => {
//       if (step.status === order.status) {
//         currentStepFound = true;
//         return { ...step, isCompleted: true, isCurrent: true };
//       }
//       return {
//         ...step,
//         isCompleted: !currentStepFound,
//         isCurrent: false
//       };
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 pb-16 md:pb-0 md:pl-14">
   
//       <main className="pt-16 max-w-6xl mx-auto px-4">
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
//           <p className="text-gray-600 mt-1">Track and manage your orders</p>
//         </div>

//         <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
//           <div className="flex items-center space-x-4">
//             <div className="flex-1 relative">
//               <input
//                 type="text"
//                 placeholder="Search orders by ID or product name..."
//                 className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
//               />
//               <Search size={20} className="absolute left-3 top-3.5 text-gray-400" />
//             </div>

//             <button className="p-3 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
//               <Filter size={20} />
//             </button>

//             <button className="p-3 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
//               <Calendar size={20} />
//             </button>
//           </div>

//           <div className="flex space-x-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
//             {['all', 'pending', 'processing', 'shipped', 'delivered', 'cancelled', 'returned'].map((status) => (
//               <button
//                 key={status}
//                 onClick={() => setFilterStatus(status)}
//                 className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
//                   filterStatus === status
//                     ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
//                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                 }`}
//               >
//                 {status.charAt(0).toUpperCase() + status.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>

//         {selectedOrder ? (
//           <div className="bg-white rounded-xl shadow-sm overflow-hidden">
//             <div className="p-6 border-b border-gray-100">
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-800">Order #{selectedOrder.id}</h2>
//                   <p className="text-gray-600 mt-1">Placed on {new Date(selectedOrder.date).toLocaleDateString()}</p>
//                 </div>
//                 <button
//                   onClick={() => setSelectedOrder(null)}
//                   className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-all"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>

//               <div className="bg-blue-50 rounded-xl p-4 mb-6">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                     <Truck size={24} className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-900">Order Status</h3>
//                     <p className="text-blue-600 font-medium">
//                       {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200"></div>
//                 {getTrackingSteps(selectedOrder).map((step, index) => (
//                   <div key={step.status} className="flex items-start mb-8 relative">
//                     <div className={`w-16 flex-shrink-0 flex justify-center ${
//                       index === getTrackingSteps(selectedOrder).length - 1 ? '' : 'pb-8'
//                     }`}>
//                       <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                         step.isCompleted
//                           ? 'bg-green-100'
//                           : step.isCurrent
//                           ? 'bg-blue-100'
//                           : 'bg-gray-100'
//                       }`}>
//                         <step.icon size={16} className={
//                           step.isCompleted
//                             ? 'text-green-600'
//                             : step.isCurrent
//                             ? 'text-blue-600'
//                             : 'text-gray-400'
//                         } />
//                       </div>
//                     </div>
//                     <div>
//                       <p className={`font-medium ${
//                         step.isCurrent ? 'text-blue-600' : 'text-gray-800'
//                       }`}>{step.label}</p>
//                       {step.date && (
//                         <p className="text-sm text-gray-500 mt-1">
//                           {new Date(step.date).toLocaleDateString()} at {new Date(step.date).toLocaleTimeString()}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//                 <div className="bg-gray-50 rounded-xl p-4">
//                   <div className="flex items-start space-x-4">
//                     <div className="p-2 bg-white rounded-lg">
//                       <Truck size={24} className="text-blue-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-medium text-gray-800">Shipping Details</h3>
//                       <p className="text-gray-600 text-sm mt-1">
//                         {selectedOrder.trackingNumber && (
//                           <>Tracking Number: {selectedOrder.trackingNumber}<br /></>
//                         )}
//                         Expected Delivery: {selectedOrder.expectedDelivery 
//                           ? new Date(selectedOrder.expectedDelivery).toLocaleDateString()
//                           : 'To be updated'}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 rounded-xl p-4">
//                   <div className="flex items-start space-x-4">
//                     <div className="p-2 bg-white rounded-lg">
//                       <MapPin size={24} className="text-blue-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-medium text-gray-800">Delivery Address</h3>
//                       <p className="text-gray-600 text-sm mt-1">
//                         {selectedOrder.shippingAddress.line1}<br />
//                         {selectedOrder.shippingAddress.line2 && (
//                           <>{selectedOrder.shippingAddress.line2}<br /></>
//                         )}
//                         {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state}<br />
//                         {selectedOrder.shippingAddress.postalCode}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8 border rounded-xl overflow-hidden">
//                 <div className="p-4 bg-gray-50 border-b">
//                   <h3 className="font-medium text-gray-800">Order Items</h3>
//                 </div>
//                 <div className="divide-y">
//                   {selectedOrder.items.map(item => (
//                     <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors">
//                       <div className="flex items-center space-x-4">
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="w-20 h-20 rounded-xl object-cover"
//                         />
//                         <div className="flex-1">
//                           <h4 className="font-medium text-gray-800">{item.name}</h4>
//                           {item.variant && (
//                             <p className="text-sm text-gray-500 mt-1">{item.variant}</p>
//                           )}
//                           <div className="flex items-center justify-between mt-2">
//                             <p className="text-sm text-gray-600">
//                               Qty: {item.quantity}
//                             </p>
//                             <p className="font-medium text-gray-900">
//                               ₹{item.price.toLocaleString()}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="p-4 bg-gray-50 border-t">
//                   <div className="flex justify-between items-center">
//                     <span className="font-medium text-gray-800">Total Amount</span>
//                     <span className="text-xl font-bold text-gray-900">₹{selectedOrder.totalAmount.toLocaleString()}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           filteredOrders.length > 0 ? (
//             <div className="space-y-4">
//               {filteredOrders.map(order => (
//                 <OrderCard
//                   key={order.id}
//                   order={order}
//                   onViewDetails={handleViewDetails}
//                 />
//               ))}
//             </div>
//           ) : (
//             <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
//                 <Package size={32} className="text-blue-600" />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">No orders found</h2>
//               <p className="text-gray-600 max-w-md mx-auto mb-6">
//                 {filterStatus === 'all'
//                   ? "You haven't placed any orders yet. Start shopping to see your orders here."
//                   : `No ${filterStatus} orders found. Try selecting a different filter.`}
//               </p>
//               {filterStatus === 'all' && (
//                 <button className="bg-blue-600 text-white py-2.5 px-6 rounded-xl hover:bg-blue-700 transition-colors">
//                   Start shopping
//                 </button>
//               )}
//             </div>
//           )
//         )}
//       </main>
//     </div>
//   );
// };

// export default Orders;


import React, { useState } from 'react';
import { Package, Search, Filter, Calendar, Truck, MapPin, Clock, CheckCircle2, XCircle, Package2, Loader2 } from 'lucide-react';
import Header from '../components/common/Header';
import OrderCard from '../components/orders/OrderCard';
import { mockOrders } from '../data/mockData';

const Orders = () => {
  const [orders, setOrders] = useState(mockOrders.map(order => ({
    ...order,
    // Adding detailed timeline for each order
    timeline: {
      ordered: new Date(order.date),
      confirmed: order.status !== 'pending' ? new Date(new Date(order.date).getTime() + 30 * 60 * 1000) : null,
      processing: order.status === 'processing' || order.status === 'shipped' || order.status === 'delivered' 
        ? new Date(new Date(order.date).getTime() + 2 * 60 * 60 * 1000) 
        : null,
      shipped: order.status === 'shipped' || order.status === 'delivered' 
        ? new Date(new Date(order.date).getTime() + 24 * 60 * 60 * 1000) 
        : null,
      outForDelivery: order.status === 'delivered' 
        ? new Date(new Date(order.date).getTime() + 48 * 60 * 60 * 1000) 
        : null,
      delivered: order.status === 'delivered' 
        ? new Date(new Date(order.date).getTime() + 50 * 60 * 60 * 1000) 
        : null,
      cancelled: order.status === 'cancelled' 
        ? new Date(new Date(order.date).getTime() + 12 * 60 * 60 * 1000) 
        : null,
      returned: order.status === 'returned' 
        ? new Date(new Date(order.date).getTime() + 72 * 60 * 60 * 1000) 
        : null
    }
  })));
  
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
      { 
        status: 'ordered', 
        label: 'Order Placed', 
        icon: CheckCircle2, 
        description: 'We have received your order',
        date: order.timeline.ordered 
      },
      { 
        status: 'confirmed', 
        label: 'Order Confirmed', 
        icon: CheckCircle2, 
        description: 'Seller has confirmed your order',
        date: order.timeline.confirmed 
      },
      { 
        status: 'processing', 
        label: 'Processing', 
        icon: Package2, 
        description: 'Seller is preparing your order',
        date: order.timeline.processing 
      },
      { 
        status: 'shipped', 
        label: 'Shipped', 
        icon: Truck, 
        description: 'Seller has shipped your item',
        date: order.timeline.shipped 
      },
      { 
        status: 'outForDelivery', 
        label: 'Out for Delivery', 
        icon: Truck, 
        description: 'Item has reached your nearest hub',
        date: order.timeline.outForDelivery 
      },
      { 
        status: 'delivered', 
        label: 'Delivered', 
        icon: MapPin, 
        description: 'Item has been delivered',
        date: order.timeline.delivered 
      }
    ];

    // For cancelled/returned orders
    if (order.status === 'cancelled' || order.status === 'returned') {
      steps.push({
        status: order.status,
        label: order.status === 'cancelled' ? 'Cancelled' : 'Returned',
        icon: XCircle,
        description: order.status === 'cancelled' 
          ? 'Order was cancelled' 
          : 'Order was returned',
        date: order.timeline[order.status]
      });
    }

    let currentStepFound = false;
    return steps.map(step => {
      // Skip steps that don't have a date (haven't happened yet)
      if (!step.date) return null;
      
      if (step.status === order.status || 
          (order.status === 'delivered' && step.status === 'outForDelivery') ||
          (order.status === 'cancelled' && step.status !== 'cancelled') ||
          (order.status === 'returned' && step.status !== 'returned')) {
        currentStepFound = true;
        return { 
          ...step, 
          isCompleted: true, 
          isCurrent: step.status === order.status,
          isCancelledOrReturned: order.status === 'cancelled' || order.status === 'returned'
        };
      }
      
      return {
        ...step,
        isCompleted: !currentStepFound,
        isCurrent: false,
        isCancelledOrReturned: false
      };
    }).filter(step => step !== null); // Remove null steps
  };

  const formatDateTime = (date) => {
    if (!date) return null;
    return (
      <>
        {date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
        <br />
        {date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
      </>
    );
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
                    ? 'bg-login-gradient text-white shadow-md shadow-blue-200'
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
                  <p className="text-gray-600 mt-1">Placed on {formatDateTime(new Date(selectedOrder.date))}</p>
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
                  <div>
                    <h3 className="font-medium text-gray-900">Order Status</h3>
                    <p className={
                      selectedOrder.status === 'delivered' ? 'text-green-600 font-medium' :
                      selectedOrder.status === 'cancelled' || selectedOrder.status === 'returned' ? 'text-red-600 font-medium' :
                      'text-blue-600 font-medium'
                    }>
                      {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                    </p>
                    {selectedOrder.status === 'shipped' && selectedOrder.trackingNumber && (
                      <p className="text-sm text-gray-600 mt-1">
                        Tracking ID: {selectedOrder.trackingNumber}
                      </p>
                    )}
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
                        step.isCompleted && !step.isCancelledOrReturned
                          ? 'bg-green-100'
                          : step.isCurrent
                          ? step.isCancelledOrReturned
                            ? 'bg-red-100'
                            : 'bg-blue-100'
                          : 'bg-gray-100'
                      }`}>
                        <step.icon size={16} className={
                          step.isCompleted && !step.isCancelledOrReturned
                            ? 'text-green-600'
                            : step.isCurrent
                            ? step.isCancelledOrReturned
                              ? 'text-red-600'
                              : 'text-blue-600'
                            : 'text-gray-400'
                        } />
                      </div>
                    </div>
                    <div className="pb-6">
                      <p className={`font-medium ${
                        step.isCurrent 
                          ? step.isCancelledOrReturned
                            ? 'text-red-600'
                            : 'text-blue-600'
                          : step.isCompleted
                          ? 'text-gray-800'
                          : 'text-gray-400'
                      }`}>{step.label}</p>
                      <p className="text-sm text-gray-500 mt-1">{step.description}</p>
                      {step.date && (
                        <p className="text-xs text-gray-500 mt-2">
                          {formatDateTime(step.date)}
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
                          <>Tracking Number: <span className="font-medium">{selectedOrder.trackingNumber}</span><br /></>
                        )}
                        Carrier: {selectedOrder.carrier || 'Standard Shipping'}<br />
                        Expected Delivery: {selectedOrder.expectedDelivery 
                          ? formatDateTime(new Date(selectedOrder.expectedDelivery))
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
                        <span className="font-medium">{selectedOrder.shippingAddress.name}</span><br />
                        {selectedOrder.shippingAddress.line1}<br />
                        {selectedOrder.shippingAddress.line2 && (
                          <>{selectedOrder.shippingAddress.line2}<br /></>
                        )}
                        {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state}<br />
                        {selectedOrder.shippingAddress.postalCode}<br />
                        Phone: {selectedOrder.shippingAddress.phone}
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
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-800">₹{selectedOrder.items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-gray-800">₹{selectedOrder.shippingFee ? selectedOrder.shippingFee.toLocaleString() : 'Free'}</span>
                    </div>
                    {selectedOrder.discount > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Discount</span>
                        <span className="text-green-600">-₹{selectedOrder.discount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span className="font-medium text-gray-800">Total Amount</span>
                      <span className="text-xl font-bold text-gray-900">₹{selectedOrder.totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {selectedOrder.status === 'delivered' && (
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    Rate & Review Products
                  </button>
                )}
                {selectedOrder.status === 'shipped' && (
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    Track Package
                  </button>
                )}
                {(selectedOrder.status === 'processing' || selectedOrder.status === 'pending') && (
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    Cancel Order
                  </button>
                )}
                {selectedOrder.status === 'delivered' && (
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    Return or Replace Items
                  </button>
                )}
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  Download Invoice
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  Need Help?
                </button>
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