
import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const LoginForm = () => {
  return (
    <div className="absolute right-0 w-1/2 h-full bg-white flex items-center text-gray-800 text-center p-10 z-10 transition-all duration-700 ease-in-out">
      <form className="w-full">
        <h1 className="text-[36px] -my-2.5">Login</h1>
        <div className="relative my-8">
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full py-3 px-5 pl-20 bg-gray-200 rounded-lg border-none outline-none text-gray-800 font-medium"
          />
          <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl" />
        </div>
        <div className="relative my-8">
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full py-3 px-5 pl-20 bg-gray-200 rounded-lg border-none outline-none text-gray-800 font-medium"
          />
          <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl" />
        </div>
        <div className="-my-3.5 mb-4">
          <a href="#" className="text-sm text-gray-800">Forgot Password?</a>
        </div>
        <button
          type="submit"
          className="w-full h-12 bg-[#7494ec] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] border-none cursor-pointer text-white font-semibold text-base"
        >
          Login
        </button>
        {/* <p className="my-4">or login with social platforms</p>
        <div className="flex justify-center">
          <a href="#" className="inline-flex p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-800 mx-2"><FcGoogle /></a>
          <a href="#" className="inline-flex p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-800 mx-2 text-blue-600"><FaFacebook /></a>
          <a href="#" className="inline-flex p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-800 mx-2"><FaGithub /></a>
          <a href="#" className="inline-flex p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-800 mx-2 text-blue-700"><FaLinkedin /></a>
        </div> */}
      </form>
    </div>
  );
};

export default LoginForm;