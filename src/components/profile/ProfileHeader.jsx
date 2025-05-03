import React from 'react';
import { User as UserIcon, Edit } from 'lucide-react';

const ProfileHeader = ({ user }) => {
  const getMembershipBadge = () => {
    switch (user.membershipTier) {
      case 'platinum':
        return 'bg-gradient-to-r from-gray-700 to-gray-900 text-white';
      case 'gold':
        return 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white';
      case 'silver':
        return 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800';
      default:
        return 'bg-gradient-to-r from-amber-700 to-amber-800 text-white';
    }
  };

  const avatarElement = user.avatar
    ? React.createElement('img', {
        src: user.avatar,
        alt: user.name,
        className: 'h-16 w-16 rounded-full object-cover border-2 border-white shadow-sm',
      })
    : React.createElement(
        'div',
        {
          className: 'h-16 w-16 rounded-full bg-white/20 flex items-center justify-center',
        },
        React.createElement(UserIcon, { size: 32 })
      );

  return React.createElement(
    'div',
    {
      className: 'relative bg-blue-600 text-white p-6 pb-24 rounded-b-3xl shadow-md',
    },
    [
      React.createElement(
        'div',
        { className: 'flex justify-between items-start', key: 'header' },
        [
          React.createElement(
            'div',
            { className: 'flex items-center', key: 'left' },
            [
              avatarElement,
              React.createElement(
                'div',
                { className: 'ml-4', key: 'userDetails' },
                [
                  React.createElement(
                    'h2',
                    { className: 'text-xl font-bold', key: 'name' },
                    user.name
                  ),
                  React.createElement(
                    'p',
                    { className: 'text-blue-100', key: 'email' },
                    user.email
                  ),
                  React.createElement(
                    'p',
                    { className: 'text-blue-100 text-sm', key: 'phone' },
                    user.phone
                  )
                ]
              )
            ]
          ),
          React.createElement(
            'button',
            {
              className: 'p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors',
              'aria-label': 'Edit profile',
              key: 'editButton',
            },
            React.createElement(Edit, { size: 18 })
          )
        ]
      ),
      React.createElement(
        'div',
        { className: 'mt-5', key: 'membership' },
        React.createElement(
          'span',
          {
            className: `inline-block px-3 py-1 rounded-full text-sm font-medium ${getMembershipBadge()}`
          },
          `${user.membershipTier.charAt(0).toUpperCase() + user.membershipTier.slice(1)} Member`
        )
      ),
      React.createElement(
        'div',
        { className: 'absolute -bottom-20 left-4 right-4', key: 'stats' },
        React.createElement(
          'div',
          { className: 'bg-white rounded-xl shadow-lg p-4' },
          React.createElement(
            'div',
            { className: 'grid grid-cols-3 gap-4' },
            [
              React.createElement(
                'div',
                { className: 'text-center', key: 'orders' },
                [
                  React.createElement('p', { className: 'text-xs text-gray-500' }, 'Orders'),
                  React.createElement(
                    'p',
                    { className: 'text-lg font-bold text-gray-900' },
                    user.totalOrders
                  )
                ]
              ),
              React.createElement(
                'div',
                { className: 'text-center border-x border-gray-100', key: 'spent' },
                [
                  React.createElement('p', { className: 'text-xs text-gray-500' }, 'Spent'),
                  React.createElement(
                    'p',
                    { className: 'text-lg font-bold text-gray-900' },
                    `₹${(user.totalSpent / 1000).toFixed(1)}K`
                  )
                ]
              ),
              React.createElement(
                'div',
                { className: 'text-center', key: 'saved' },
                [
                  React.createElement('p', { className: 'text-xs text-gray-500' }, 'Saved'),
                  React.createElement(
                    'p',
                    { className: 'text-lg font-bold text-green-600' },
                    `₹${(user.savedAmount / 1000).toFixed(1)}K`
                  )
                ]
              )
            ]
          )
        )
      )
    ]
  );
};

export default ProfileHeader;
