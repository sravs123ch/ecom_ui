import React from 'react';

const Input = ({ 
  label, 
  error, 
  className = '', 
  id,
  ...props 
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full px-4 py-2 rounded-md border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                   placeholder:text-gray-400 transition-colors
                   ${error ? 'border-red-500 focus:ring-red-500' : ''}
                   ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;
