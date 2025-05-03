import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, ShoppingCart, Menu } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({
  title,
  showBack = false,
  showSearch = true,
  showCart = true,
  showMenu = true,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getPageTitle = () => {
    if (title) return title;

    switch (location.pathname) {
      case '/notifications':
        return 'Notifications';
      case '/profile':
        return 'My Profile';
      case '/settings':
        return 'Settings';
      case '/wishlist':
        return 'My Wishlist';
      default:
        return 'ShopEase';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="mr-3 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
            </button>
          )}

          <h1 className="text-lg font-semibold text-gray-800">
            {getPageTitle()}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          {showSearch && (
            <button
              onClick={() => navigate('/search')}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          )}

          {showCart && (
            <button
              onClick={() => navigate('/cart')}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          )}

          {showMenu && (
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors md:hidden"
              aria-label="Menu"
            >
              <Menu size={20} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
