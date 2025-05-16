import React from 'react';

const ToggleSwitch = ({ checked, onChange, label, disabled = false }) => {
  const inputElement = React.createElement('input', {
    type: 'checkbox',
    className: 'sr-only peer',
    checked,
    onChange,
    disabled,
  });

  const trackClasses = `w-11 h-6 rounded-full peer transition-colors ${
    disabled
      ? 'bg-gray-200'
      : 'bg-gray-300 peer-checked:bg-color peer-focus:ring-2 custom-focus-ring'
  }`;

  const trackElement = React.createElement('div', {
    className: trackClasses,
  });

  const thumbElement = React.createElement('div', {
    className: `absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all ${
      checked ? 'translate-x-5' : 'translate-x-0'
    }`,
  });

  const switchWrapper = React.createElement(
    'div',
    { className: 'relative' },
    [inputElement, trackElement, thumbElement]
  );

  const children = [];

  if (label) {
    children.push(
      React.createElement(
        'span',
        { className: 'mr-3 text-sm text-gray-700', key: 'label' },
        label
      )
    );
  }

  children.push(switchWrapper);

  return React.createElement(
    'label',
    {
      className: `inline-flex items-center ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      }`,
    },
    children
  );
};

export default ToggleSwitch;
