import React from 'react';

const TogglePanel = ({ isActive, onToggle }) => {
  return (
    <div className="absolute w-full h-full">
      {/* Blue background animation */}
      <div className={`absolute w-[300%] h-full bg-[#7494ec] rounded-[150px] z-20 transition-all duration-1000 ease-in-out ${isActive ? "left-1/2" : "left-[-250%]"}`}></div>
      
      {/* Left Toggle Panel */}
      <div className={`absolute left-0 w-1/2 h-full text-white flex flex-col justify-center items-center z-30 transition-all duration-700 ease-in-out ${isActive ? "-left-1/2" : "left-0"}`}>
        <h1 className="text-[36px]">Hello, Welcome!</h1>
        <p className="text-sm my-4">Don't have an account?</p>
        <button
          onClick={onToggle}
          className="w-40 h-[46px] bg-transparent border-2 border-white cursor-pointer text-white font-semibold rounded-lg hover:bg-white hover:text-[#7494ec] transition-colors duration-300"
        >
          Register
        </button>
      </div>
      
      {/* Right Toggle Panel */}
      <div className={`absolute right-0 w-1/2 h-full text-white flex flex-col justify-center items-center z-30 transition-all duration-700 ease-in-out ${isActive ? "right-0" : "-right-1/2"}`}>
        <h1 className="text-[36px]">Welcome Back!</h1>
        <p className="text-sm my-4">Already have an account?</p>
        <button
          onClick={onToggle}
          className="w-40 h-[46px] bg-transparent border-2 border-white cursor-pointer text-white font-semibold rounded-lg hover:bg-white hover:text-[#7494ec] transition-colors duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default TogglePanel;