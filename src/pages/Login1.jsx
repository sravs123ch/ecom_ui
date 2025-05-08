import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication
  };

  // Updated carouselImages with unique images
  const carouselImages = [
    'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260',
    'https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1260' // Ecommerce shopping image
    // 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260',
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic carousel sliding with pause on manual interaction
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const newSlide = (prevSlide + 1) % carouselImages.length;
        console.log(`Automatic slide change: ${newSlide}`); // Debugging
        return newSlide;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [carouselImages.length]);

  // Handle manual dot click and reset timer
  const handleDotClick = (idx) => {
    console.log(`Manual slide change to: ${idx}`); // Debugging
    setCurrentSlide(idx);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl flex overflow-hidden relative min-h-[600px]">
        {/* Left Panel – with carousel */}
        <div className="hidden lg:block w-1/2 relative">
          <img
            src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260"
            alt="Fashion"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-login-gradient flex flex-col items-center justify-center p-12">
            {/* Headings */}
            <motion.h2
              className="text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {isLogin ? "Welcome Back!" : "Looks like you're new here!"}
            </motion.h2>
            <motion.p
              className="text-lg text-indigo-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {isLogin
                ? "Discover amazing products and exclusive offers tailored just for you."
                : "Create an account to start shopping and get personalized recommendations."}
            </motion.p>

            {/* Carousel */}
            <div className="relative w-full max-w-md">
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={currentSlide} // Use index as key to ensure uniqueness
                  src={carouselImages[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  className="rounded-lg shadow-lg w-full h-64 object-cover" // Fixed height for consistency
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentSlide ? 'bg-white scale-125' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-8">
                {isLogin ? "Sign in to your account" : "Create your account"}
              </h1>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field (only for Sign Up) */}
              <AnimatePresence>
                {!isLogin && (
                  <motion.div
                    key="name"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors pl-11"
                        placeholder="John Doe"
                        required
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Email field */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors pl-11"
                    placeholder="you@example.com"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </motion.div>

              {/* Password field */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors pl-11"
                    placeholder="••••••••"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </motion.div>

              {/* "Remember me" and "Forgot password?" (only for Sign In) */}
              <AnimatePresence>
                {isLogin && (
                  <motion.div
                    key="login-options"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-login-gradient focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {isLogin ? "Sign in" : "Create account"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </form>

            <motion.p
              className="mt-8 text-center text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;