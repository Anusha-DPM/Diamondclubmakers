'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Apply', path: '/apply' },
    { name: 'Community', path: '/community' },
    { name: 'Submit', path: '/submit' },
    { name: 'Other', path: '/other' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-t border-gray-100 shadow-lg" style={{
      background: 'linear-gradient(to right, rgb(188, 153, 61), rgb(248, 242, 163))'
    }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4 sm:py-2">
          {/* Mobile Menu Button - Only visible on very small screens */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden absolute left-3 text-white hover:text-gray-200 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Menu - centered */}
          <nav className="flex items-center justify-center md:flex">
            <ul className="hidden md:flex flex-row items-center space-x-1 sm:space-x-2 md:space-x-3">
              {menuItems.map((item, index) => (
                <li key={item.name} className="flex items-center">
                  <Link
                    href={item.path}
                    className={`px-1 sm:px-2 md:px-3 py-1 font-sansation-regular transition-colors duration-200 ${
                      pathname === item.path 
                        ? 'text-[#004681] border-b-2 border-[#029fde]' 
                        : 'text-[#004681] hover:text-[#024093]'
                    }`}
                    style={{ 
                      fontSize: 'clamp(14px, 3.5vw, 19px)',
                      minWidth: 'max-content'
                    }}
                  >
                    {item.name}
                  </Link>
                  {index < menuItems.length - 1 && (
                    <span className="text-[#004681] mx-1 sm:mx-1.5 md:mx-2">|</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu - Slide down/up animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div 
            className="border-t border-yellow-300"
            style={{
              height: 'auto'
            }}
          >
            <div className="px-4 py-2">
              <ul className="space-y-0">
                {menuItems.map((item, index) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-4 font-sansation-regular text-white hover:text-gray-200 transition-colors duration-200"
                      style={{ 
                        fontSize: '16px',
                        borderBottom: index < menuItems.length - 1 ? '1px solid rgba(255, 255, 255, 0.3)' : 'none'
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
