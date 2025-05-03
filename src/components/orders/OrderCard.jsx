import React from 'react';
import { Package, ChevronRight, FileText, Truck } from 'lucide-react';
import { formatDate, formatCurrency } from '../../utils/formatters';

const OrderCard = ({ order, onViewDetails }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'returned':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <Package size={20} className="text-blue-600" />
            <span className="font-medium text-gray-900">Order #{order.id}</span>
          </div>
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
            {getStatusText(order.status)}
          </span>
        </div>

        <div className="space-y-3">
          {order.items.map(item => (
            <div key={item.id} className="flex items-center space-x-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {item.name}
                </p>
                {item.variant && (
                  <p className="text-xs text-gray-500">{item.variant}</p>
                )}
                <p className="text-sm text-gray-600">
                  Qty: {item.quantity} × {formatCurrency(item.price)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Ordered on {formatDate(order.date)}</span>
            <span className="font-medium text-gray-900">
              Total: {formatCurrency(order.totalAmount)}
            </span>
          </div>

          {order.status === 'shipped' && order.trackingNumber && (
            <div className="mt-2 flex items-center text-sm text-blue-600">
              <Truck size={16} className="mr-1" />
              <span>Tracking ID: {order.trackingNumber}</span>
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between">
          {order.invoice && (
            <button className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
              <FileText size={16} className="mr-1" />
              <span>Download Invoice</span>
            </button>
          )}

          <button
            onClick={() => onViewDetails(order.id)}
            className="flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>View Details</span>
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
