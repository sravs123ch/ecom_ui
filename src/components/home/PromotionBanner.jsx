import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button  from '../ui/Button';

const PromotionBanner = ({ 
  title, 
  description, 
  image, 
  link 
}) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <motion.div 
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-2xl overflow-hidden h-80 md:h-96"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-xl">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                {title}
              </h3>
              <p className="text-white/90 text-lg mb-6">
                {description}
              </p>
              <Button 
                as={Link}
                to={link}
                size="lg"
                className="bg-white text-indigo-700 hover:bg-indigo-50"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromotionBanner;
