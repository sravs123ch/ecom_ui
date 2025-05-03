import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "" }) => {
  return <div className={`px-4 py-3 ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardFooter = ({ children, className = "" }) => {
  return <div className={`px-4 py-3 bg-gray-50 ${className}`}>{children}</div>;
};
