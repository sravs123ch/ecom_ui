
import React from 'react';
import { Home, Briefcase, MapPin, Edit, Trash } from 'lucide-react';

const AddressCard = ({ address, onEdit, onDelete, onSetDefault }) => {
  const getIcon = () => {
    const commonProps = { size: 18 };
    switch (address.type) {
      case 'home':
        return <Home {...commonProps} className="text-white" />;
      case 'work':
        return <Briefcase {...commonProps} className="text-purple-600" />;
      default:
        return <MapPin {...commonProps} className="text-gray-600" />;
    }
  };

  return (
    <div
      className={`border rounded-lg p-4 mb-3 ${
        address.isDefault ? 'border-color bg-color' : 'border-gray-200'
      }`}
    >
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex items-center">
          {getIcon()}
          <span className="ml-2 font-medium capitalize text-gray-700">
            {address.type}
          </span>
          {address.isDefault && (
            <span className="ml-2 text-xs bg-white text-color px-2 py-0.5 rounded-full">
              Default
            </span>
          )}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(address.id)}
            className="p-1.5 text-gray-500 text-color-hover hover:bg-blue-50 rounded-full transition-colors"
            aria-label="Edit address"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => onDelete(address.id)}
            className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
            aria-label="Delete address"
          >
            <Trash size={16} />
          </button>
        </div>
      </div>

      {/* Address Body */}
      <div className="mt-2 text-gray-700">
        <p>{address.line1}</p>
        {address.line2 && <p>{address.line2}</p>}
        <p>{`${address.city}, ${address.state} ${address.postalCode}`}</p>
      </div>

      {/* Set Default Button */}
      {!address.isDefault && (
        <button
          onClick={() => onSetDefault(address.id)}
          className="mt-3 text-sm text-color text-color-hover"
        >
          Set as default
        </button>
      )}
    </div>
  );
};

export default AddressCard;
