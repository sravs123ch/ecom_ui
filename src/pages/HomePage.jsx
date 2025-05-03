import React from 'react';
import { Helmet } from 'react-helmet';
import  HeroSection from '../components/home/HeroSection';
import { CategorySection } from '../components/home/CategorySection';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import PromotionBanner from '../components/home/PromotionBanner';
import { PromoGridSection } from '../components/home/PromoGridSection';
import { Newsletter } from '../components/home/Newsletter';
import { categories, products, promotions } from '../data/products';

const HomePage = () => {
  const featuredProducts = products.filter(product => product.isFeatured);
  const newProducts = products.filter(product => product.isNew || Math.random() > 0.5).slice(0, 8);
  
  return (
    <>
      <Helmet>
        <title>ShopHub - Online Shopping Destination</title>
        <meta name="description" content="Discover the latest trends and products at ShopHub. Shop electronics, fashion, home decor and more." />
      </Helmet>

      <main>
        <HeroSection />
        {/* <CategorySection categories={categories} /> */}
        <CategorySection categories={categories} showViewAllLink={true} />

        <FeaturedProducts 
          title="Featured Products" 
          products={featuredProducts}
          viewAllLink="/collections/featured" 
        />
        <PromotionBanner {...promotions[0]} />
        <PromoGridSection />
        <FeaturedProducts 
          title="New Arrivals" 
          products={newProducts}
          viewAllLink="/collections/new" 
        />
        <Newsletter />
      </main>
    </>
  );
};

export default HomePage;
