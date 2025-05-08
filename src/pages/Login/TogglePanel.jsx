// import React from 'react';

// const TogglePanel = ({ isActive, onToggle }) => {
//   return (
//     <div className="absolute w-full h-full">
//       {/* Blue background animation */}
//       <div
//         className={`absolute w-[300%] h-full bg-[#7494ec] rounded-[150px] z-20 transition-all duration-1000 ease-in-out ${
//           isActive ? 'left-1/2' : 'left-[-250%]'
//         }`}
//       ></div>

//       {/* Left Panel - Register */}
//       {!isActive && (
//         <div className="absolute left-0 w-1/2 h-full text-white flex flex-col justify-center items-center z-30 transition-all duration-700 ease-in-out">
//           <h1 className="text-[36px]">Hello, Welcome!</h1>
//           <p className="text-sm my-4">Don't have an account?</p>
//           <button
//             onClick={onToggle}
//             className="w-40 h-[46px] bg-transparent border-2 border-white cursor-pointer text-white font-semibold rounded-lg hover:bg-white hover:text-[#7494ec] transition-colors duration-300"
//           >
//             Register
//           </button>
//         </div>
//       )}

//       {/* Right Panel - Login */}
//       {isActive && (
//         <div className="absolute right-0 w-1/2 h-full text-white flex flex-col justify-center items-center z-30 transition-all duration-700 ease-in-out">
//           <h1 className="text-[36px]">Welcome Back!</h1>
//           <p className="text-sm my-4">Already have an account?</p>
//           <button
//             onClick={onToggle}
//             className="w-40 h-[46px] bg-transparent border-2 border-white cursor-pointer text-white font-semibold rounded-lg hover:bg-white hover:text-[#7494ec] transition-colors duration-300"
//           >
//             Login
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TogglePanel;


// import React from 'react';

// const TogglePanel = ({ isActive, onToggle }) => {
//   return (
//     <div className="absolute w-full h-full overflow-hidden">
//       {/* Image background animation on active side only */}
//       <div
//         className={`absolute w-[300%] h-full rounded-[150px] z-20 transition-all duration-1000 ease-in-out bg-cover bg-center ${
//           isActive
//             ? 'left-1/2 bg-[url("https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")]'
//             : 'left-[-250%] bg-[url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")]'
//         }`}
//       >
//         {/* Optional dark overlay for text readability */}
//         <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[150px]"></div>
//       </div>

//       {/* Left Panel - Register */}
//       {!isActive && (
//         <div className="absolute left-0 w-1/2 h-full text-white flex flex-col justify-center items-center z-30 transition-all duration-700 ease-in-out">
//           <h1 className="text-[36px]">Hello, Welcome!</h1>
//           <p className="text-sm my-4">Don't have an account?</p>
//           <button
//             onClick={onToggle}
//             className="w-40 h-[46px] bg-transparent border-2 border-white cursor-pointer text-white font-semibold rounded-lg hover:bg-white hover:text-[#7494ec] transition-colors duration-300"
//           >
//             Register
//           </button>
//         </div>
//       )}

//       {/* Right Panel - Login */}
//       {isActive && (
//         <div className="absolute right-0 w-1/2 h-full text-white flex flex-col justify-center items-center z-30 transition-all duration-700 ease-in-out">
//           <h1 className="text-[36px]">Welcome Back!</h1>
//           <p className="text-sm my-4">Already have an account?</p>
//           <button
//             onClick={onToggle}
//             className="w-40 h-[46px] bg-transparent border-2 border-white cursor-pointer text-white font-semibold rounded-lg hover:bg-white hover:text-[#7494ec] transition-colors duration-300"
//           >
//             Login
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TogglePanel;


import React from 'react';

const TogglePanel = ({ isActive, onToggle }) => {
  return (
    <div className="absolute w-full h-full overflow-hidden">
      {/* Image background animation on active side only */}
      <div
        className={`absolute w-[300%] h-full rounded-[150px] z-20 transition-all duration-1000 ease-in-out bg-cover bg-center ${
          isActive
            ? 'left-1/2 bg-[url("https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")] bg-[size:70%_100%] bg-[position:0%_0%]'
            : 'left-[-250%] bg-[url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")]'
        }`}
      >
        {/* Optional dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[150px]"></div>
      </div>

      {/* Left Panel - Register */}
      {!isActive && (
        <div className="absolute left-0 w-1/2 h-full text-white flex flex-col justify-center items-center z-30 transition-all duration-700 ease-in-out">
          <h1 className="text-[36px]">Hello, Welcome!</h1>
          <p className="text-sm my-4">Don't have an account?</p>
          <button
            onClick={onToggle}
            className="w-40 h-[46px] bg-transparent border-2 border-white cursor-pointer text-white font-semibold rounded-lg hover:bg-white hover:text-[#7494ec] transition-colors duration-300"
          >
            Register
          </button>
        </div>
      )}

      {/* Right Panel - Login */}
      {isActive && (
        <div className="absolute right-0 w-1/2 h-full text-white flex flex-col justify-center items-center z-30 transition-all duration-700 ease-in-out">
          <h1 className="text-[36px]">Welcome Back!</h1>
          <p className="text-sm my-4">Already have an account?</p>
          <button
            onClick={onToggle}
            className="w-40 h-[46px] bg-transparent border-2 border-white cursor-pointer text-white font-semibold rounded-lg hover:bg-white hover:text-[#7494ec] transition-colors duration-300"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default TogglePanel;

