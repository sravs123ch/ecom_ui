import React from 'react';
import { Home, Briefcase, MapPin, Edit, Trash } from 'lucide-react';

const AddressCard = ({ address, onEdit, onDelete, onSetDefault }) => {
  const getIcon = () => {
    const commonProps = { size: 18 };
    switch (address.type) {
      case 'home':
        return React.createElement(Home, { ...commonProps, className: 'text-blue-600' });
      case 'work':
        return React.createElement(Briefcase, { ...commonProps, className: 'text-purple-600' });
      default:
        return React.createElement(MapPin, { ...commonProps, className: 'text-gray-600' });
    }
  };

  return React.createElement(
    'div',
    {
      className: `border rounded-lg p-4 mb-3 ${
        address.isDefault ? 'border-blue-200 bg-blue-50' : 'border-gray-200'
      }`
    },
    [
      React.createElement(
        'div',
        { className: 'flex justify-between', key: 'header' },
        [
          React.createElement(
            'div',
            { className: 'flex items-center', key: 'left' },
            [
              getIcon(),
              React.createElement(
                'span',
                { className: 'ml-2 font-medium capitalize text-gray-700', key: 'type' },
                address.type
              ),
              address.isDefault &&
                React.createElement(
                  'span',
                  {
                    className: 'ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full',
                    key: 'defaultLabel'
                  },
                  'Default'
                )
            ]
          ),
          React.createElement(
            'div',
            { className: 'flex space-x-2', key: 'right' },
            [
              React.createElement(
                'button',
                {
                  onClick: () => onEdit(address.id),
                  className: 'p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors',
                  'aria-label': 'Edit address',
                  key: 'editBtn'
                },
                React.createElement(Edit, { size: 16 })
              ),
              React.createElement(
                'button',
                {
                  onClick: () => onDelete(address.id),
                  className: 'p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors',
                  'aria-label': 'Delete address',
                  key: 'deleteBtn'
                },
                React.createElement(Trash, { size: 16 })
              )
            ]
          )
        ]
      ),
      React.createElement(
        'div',
        { className: 'mt-2 text-gray-700', key: 'addressBody' },
        [
          React.createElement('p', { key: 'line1' }, address.line1),
          address.line2 && React.createElement('p', { key: 'line2' }, address.line2),
          React.createElement(
            'p',
            { key: 'cityState' },
            `${address.city}, ${address.state} ${address.postalCode}`
          )
        ]
      ),
      !address.isDefault &&
        React.createElement(
          'button',
          {
            onClick: () => onSetDefault(address.id),
            className: 'mt-3 text-sm text-blue-600 hover:text-blue-700',
            key: 'setDefault'
          },
          'Set as default'
        )
    ]
  );
};

export default AddressCard;
