import React from 'react';
import { ChevronRight } from 'lucide-react';

const SettingItem = ({
  icon,
  title,
  description,
  onClick,
  rightElement,
  showChevron = true,
  divider = true
}) => {
  const containerClass = `flex items-center justify-between py-3 ${onClick ? 'cursor-pointer hover:bg-gray-50' : ''}`;

  const mainItem = React.createElement(
    'div',
    {
      className: containerClass,
      onClick: onClick || undefined
    },
    [
      React.createElement(
        'div',
        { className: 'flex items-center', key: 'left' },
        [
          React.createElement(
            'div',
            { className: 'text-gray-500 mr-4', key: 'icon' },
            icon
          ),
          React.createElement(
            'div',
            { key: 'text' },
            [
              React.createElement(
                'h3',
                { className: 'text-gray-800 font-medium', key: 'title' },
                title
              ),
              description &&
                React.createElement(
                  'p',
                  {
                    className: 'text-xs text-gray-500 mt-0.5',
                    key: 'desc'
                  },
                  description
                )
            ]
          )
        ]
      ),
      React.createElement(
        'div',
        { className: 'flex items-center', key: 'right' },
        [
          rightElement,
          showChevron &&
            React.createElement(ChevronRight, {
              size: 18,
              className: 'text-gray-400 ml-2',
              key: 'chevron'
            })
        ]
      )
    ]
  );

  const dividerElement =
    divider &&
    React.createElement('div', {
      className: 'h-px bg-gray-100',
      key: 'divider'
    });

  return React.createElement(React.Fragment, null, [mainItem, dividerElement]);
};

export default SettingItem;
