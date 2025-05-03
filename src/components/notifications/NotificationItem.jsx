import React from 'react';
import { Bell, Package, Tag, CreditCard, Info, AlertTriangle } from 'lucide-react';
import { formatRelativeTime } from '../../utils/formatters';


const NotificationItem = ({ notification, onMarkAsRead }) => {
  const getIcon = () => {
    const commonProps = { size: 22 };
    switch (notification.type) {
      case 'order':
        return React.createElement(Package, { ...commonProps, className: 'text-green-600' });
      case 'offer':
        return React.createElement(Tag, { ...commonProps, className: 'text-purple-600' });
      case 'payment':
        return React.createElement(CreditCard, { ...commonProps, className: 'text-blue-600' });
      case 'info':
        return React.createElement(Info, { ...commonProps, className: 'text-gray-600' });
      case 'alert':
        return React.createElement(AlertTriangle, { ...commonProps, className: 'text-orange-600' });
      default:
        return React.createElement(Bell, { ...commonProps, className: 'text-blue-600' });
    }
  };

  const handleClick = () => {
    if (!notification.isRead) {
      onMarkAsRead(notification.id);
    }
  };

  return React.createElement(
    'div',
    {
      className: `flex p-4 border-b border-gray-100 transition-colors cursor-pointer ${
        notification.isRead ? 'bg-white' : 'bg-blue-50'
      } hover:bg-gray-50`,
      onClick: handleClick,
    },
    [
      React.createElement(
        'div',
        { className: 'mr-3 mt-1', key: 'icon' },
        getIcon()
      ),
      React.createElement(
        'div',
        { className: 'flex-1', key: 'content' },
        [
          React.createElement(
            'div',
            { className: 'flex items-start justify-between', key: 'title-row' },
            [
              React.createElement(
                'h3',
                {
                  className: `font-medium text-gray-900 ${
                    !notification.isRead ? 'font-semibold' : ''
                  }`,
                  key: 'title',
                },
                notification.title
              ),
              React.createElement(
                'span',
                {
                  className: 'text-xs text-gray-500 ml-2 whitespace-nowrap',
                  key: 'time',
                },
                formatRelativeTime(notification.timestamp)
              )
            ]
          ),
          React.createElement(
            'p',
            { className: 'text-sm text-gray-600 mt-1', key: 'message' },
            notification.message
          ),
          notification.imageUrl &&
            React.createElement(
              'div',
              { className: 'mt-2', key: 'image' },
              React.createElement('img', {
                src: notification.imageUrl,
                alt: notification.title,
                className: 'rounded-md h-20 w-auto object-cover'
              })
            ),
          notification.actionUrl &&
            React.createElement(
              'button',
              {
                className: 'text-sm text-blue-600 font-medium mt-2 hover:text-blue-700 transition-colors',
                key: 'button'
              },
              'View Details'
            )
        ]
      ),
      !notification.isRead &&
        React.createElement(
          'div',
          { className: 'ml-2 mt-2', key: 'unread-indicator' },
          React.createElement('div', {
            className: 'h-2 w-2 rounded-full bg-blue-600'
          })
        )
    ]
  );
};

export default NotificationItem;
