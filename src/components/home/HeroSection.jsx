// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import  Button  from '../ui/Button';
// import { Link } from 'react-router-dom';

// export const HeroSection = () => {
//   return (
//     <section className="relative overflow-hidden bg-slate-900 text-white">
//       <div className="absolute inset-0 z-0">
//         <img 
//           src="https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           alt="Hero background" 
//           className="h-full w-full object-cover opacity-30"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/70"></div>
//       </div>

//       <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
//         <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
//               Summer Collection <span className="text-indigo-400">2025</span>
//             </h1>
//             <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-lg">
//               Discover our latest products with exceptional quality and trendsetting designs. Limited time offers available.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Button 
//                 size="lg" 
//                 rightIcon={<ArrowRight size={18} />}
//                 as={Link}
//                 to="/collections/summer"
//               >
//                 Shop Now
//               </Button>
//               <Button 
//                 variant="outline" 
//                 size="lg"
//                 className="bg-transparent border-white text-white hover:bg-white/10"
//                 as={Link}
//                 to="/category/clothing"
//               >
//                 Explore Categories
//               </Button>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="hidden md:block relative"
//           >
//             <div className="relative rounded-lg overflow-hidden">
//               <img 
//                 src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                 alt="Summer collection preview" 
//                 className="w-full h-full object-cover rounded-lg"
//               />
//               <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
//                 <p className="text-slate-900 font-medium">New Arrivals</p>
//                 <p className="text-sm text-slate-700">Up to 40% off selected items</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Summer Collection",
    year: "2025",
    subtitle:
      "Discover our latest products with exceptional quality and trendsetting designs. Limited time offers available.",
    ctaPrimary: { text: "Shop Now", link: "/collections/summer" },
    ctaSecondary: { text: "Explore Categories", link: "/category/clothing" },
    mainImage:
      "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg",
    backgroundImage:
      "https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg",
    overlayText: "New Arrivals",
    overlaySubtext: "Up to 40% off selected items",
    glowColor: "rgba(34, 197, 94, 0.4)", // green glow
  },
  {
    title: "Winter Essentials",
    year: "2025",
    subtitle:
      "Stay warm with our premium winter wear. Exclusive early bird discounts available for limited period.",
    ctaPrimary: { text: "Shop Jackets", link: "/category/jackets" },
    ctaSecondary: { text: "View All", link: "/collections" },
    mainImage:
      "https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg",
    backgroundImage:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    overlayText: "Winter Special",
    overlaySubtext: "Up to 50% off on outerwear",
    glowColor: "rgba(147, 51, 234, 0.4)", // purple glow
  },
  {
    title: "Spring Fashion",
    year: "2025",
    subtitle:
      "Fresh styles for the new season. Lightweight fabrics and vibrant colors for your spring wardrobe.",
    ctaPrimary: { text: "New Arrivals", link: "/new-arrivals" },
    ctaSecondary: { text: "Shop Dresses", link: "/category/dresses" },
    mainImage:
      "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg",
    backgroundImage:
      "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg",
    overlayText: "Spring Refresh",
    overlaySubtext: "30% off select styles",
    glowColor: "rgba(59, 130, 246, 0.4)", // blue glow
  },
  {
    title: "Electronics Sale",
    year: "2025",
    subtitle:
      "Upgrade your tech with our latest gadgets and devices. Premium brands at unbeatable prices.",
    ctaPrimary: { text: "Shop Electronics", link: "/category/electronics" },
    ctaSecondary: { text: "Deals Zone", link: "/sales" },
    mainImage:
      "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
    backgroundImage:
      "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg",
    overlayText: "Tech Week",
    overlaySubtext: "Free shipping on orders over $499",
    glowColor: "rgba(147, 51, 234, 0.4)", // purple glow
  },
  {
    title: "Home & Living",
    year: "2025",
    subtitle:
      "Refresh your space with our curated home collection. Modern designs for every room in your house.",
    ctaPrimary: { text: "Shop Furniture", link: "/category/furniture" },
    ctaSecondary: { text: "View Decor", link: "/category/home-decor" },
    mainImage:
      "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg",
    backgroundImage:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    overlayText: "Room Makeover",
    overlaySubtext: "15% off first order",
    glowColor: "rgba(34, 197, 94, 0.4)", // green glow
  },
  {
    title: "Fitness Gear",
    year: "2025",
    subtitle:
      "Achieve your fitness goals with premium equipment and activewear. New collections dropping weekly.",
    ctaPrimary: { text: "Shop Activewear", link: "/category/activewear" },
    ctaSecondary: {
      text: "View Equipment",
      link: "/category/fitness-equipment",
    },
    mainImage:
      "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
    backgroundImage: "https://images.pexels.com/photos/17840/pexels-photo.jpg",
    overlayText: "New Collection",
    overlaySubtext: "Free water bottle with $99+ purchase",
    glowColor: "rgba(59, 130, 246, 0.4)", // blue glow
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white h-[600px] md:h-[700px] p-8">
      {/* Background Glow Animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 0% 0%, ${currentSlide.glowColor} 0%, transparent 80%)`,
            `radial-gradient(circle at 100% 0%, ${currentSlide.glowColor} 0%, transparent 80%)`,
            `radial-gradient(circle at 100% 100%, ${currentSlide.glowColor} 0%, transparent 80%)`,
            `radial-gradient(circle at 0% 100%, ${currentSlide.glowColor} 0%, transparent 80%)`,
            `radial-gradient(circle at 0% 0%, ${currentSlide.glowColor} 0%, transparent 80%)`,
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Left Slide */}
          <div className="w-[60%] relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                className="relative h-[580px] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="hidden md:block relative h-full overflow-hidden">
                  <motion.div
                    key={currentIndex}
                    className="h-full"
                    transition={{ delay: 0.1 }}
                  >
                    <div className="relative h-full rounded-lg overflow-hidden">
                      <img
                        src={currentSlide.mainImage}
                        alt="Collection preview"
                        className="w-full h-full object-cover rounded-lg transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-white/90 to-slate-700/70 backdrop-blur-sm p-4 rounded-lg z-0 h-1/3">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-[rgba(0,0,0,0.7)]">
                          {currentSlide.title}{" "}
                          <span
                            style={{
                              color: currentSlide.glowColor.replace(
                                /rgba\((\d+), (\d+), (\d+), [^)]+\)/,
                                "rgba($1, $2, $3, 1)"
                              ),
                            }}
                          >
                            {currentSlide.year}
                          </span>
                        </h1>
                        <p className="text-base text-slate-900 max-w-lg">
                          {currentSlide.subtitle}
                        </p>
                        <p className="text-slate-300 font-medium text-right">
                          {currentSlide.overlayText}
                        </p>
                        <p className="text-sm text-slate-300 text-right">
                          {currentSlide.overlaySubtext}
                        </p>
                        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center">
                          <Link
                            to={currentSlide.ctaPrimary.link}
                            className="inline-flex py-3 px-3 justify-center bg-[rgba(255,255,255,0.8)] text-gray-900 rounded-full hover:bg-gray-100 transition-colors items-center shadow-md"
                          >
                            <ArrowRight className="h-5 w-5" />
                          </Link>
                        </div>
                        <div className="absolute top-1/4 right-4 transform -translate-y-2/3 flex items-center">
                          <Link
                            to={currentSlide.ctaPrimary.link}
                            className="inline-flex py-3 px-3 justify-center bg-[rgba(255,255,255,0.8)] text-gray-900 rounded-full hover:bg-gray-100 transition-colors items-center shadow-md"
                          >
                            <ShoppingCart className="h-5 w-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-all duration-300"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-all duration-300"
            >
              <ChevronRight size={32} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? "right" : "left");
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="w-[40%] space-y-6 h-[580px]">
            <div className="h-[242px] rounded-2xl overflow-hidden relative bg-gradient-to-br from-orange-500 to-red-600 transition-transform duration-700 hover:scale-105">
              <div className="absolute inset-0 backdrop-blur-[100px] mix-blend-soft-light" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
              <div className="relative h-full px-6 flex justify-between items-center py-2">
                <div>
                  <h3 className="text-2xl font-bold text-white">Beyond April Sale</h3>
                  <p className="text-white/90 mt-2">Save up to 75% on selected products</p>
                </div>
                <div className="flex gap-4 w-3/6">
                  {[1, 2].map((_, i) => (
                    <div key={i} className="flex flex-col gap-2 w-1/2">
                      <img
                        src={`https://picsum.photos/200/100?random=${i * 2 + 1}`}
                        className="w-full h-24 rounded-lg object-cover transition-transform duration-700 hover:scale-110"
                        alt="Promo"
                      />
                      <img
                        src={`https://picsum.photos/200/100?random=${i * 2 + 2}`}
                        className="w-full h-24 rounded-lg object-cover transition-transform duration-700 hover:scale-110"
                        alt="Promo"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Four small cards */}
            <div className="grid grid-cols-2 gap-4">
            {[
              ["from-blue-600", "to-indigo-700", "Exclusive Drops", "Be the first to shop new arrivals"],
              ["from-green-600", "to-emerald-700", "Member Deals", "Special prices for logged-in users"],
              ["from-violet-600", "to-purple-700", "Editor's Picks", "Top curated styles for you"],
              ["from-cyan-500", "to-teal-600", "Trending Now", "Shop what's hot this week"],
            ].map(([from, to, title, subtitle], i) => (
              <div
                key={i}
                className={`h-[144.5px] rounded-2xl overflow-hidden relative bg-gradient-to-br ${from} ${to} transition-transform duration-700 hover:scale-105`}
              >
                <div className="absolute inset-0 backdrop-blur-[100px] mix-blend-soft-light" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
                <div className="relative h-full p-6">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="text-white/90 mt-2">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
