"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Palette, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white dark:bg-gray-800 shadow-lg' 
        : 'bg-gray-100 dark:bg-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 group">
              <Palette className={`h-8 w-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-transform duration-300 group-hover:rotate-180`} />
            </a>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {['Inicio', 'Diseños', 'Sobre Mí', 'Contacto'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300
                      ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}
                      group overflow-hidden`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Buscar..."
                className={`pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
                }`}
              />
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
            </div>
            <button
              onClick={toggleDarkMode}
              className={`relative overflow-hidden p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-300
                ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-yellow-100 text-yellow-800'}`}
            >
              <span className="sr-only">Cambiar tema</span>
              <Sun className={`h-5 w-5 transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`} />
              <Moon className={`h-5 w-5 absolute top-2 left-2 transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`} />
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-white hover:bg-blue-500'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-300`}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden ${scrolled ? 'bg-white dark:bg-gray-800' : 'bg-gray-100 dark:bg-gray-900'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['Inicio', 'Diseños', 'Sobre Mí', 'Contacto'].map((item) => (
            <a
              key={item}
              href="#"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'} transition-colors duration-300`}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="px-2 pt-4 pb-3 border-t border-gray-700">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Buscar..."
              className={`w-full pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            />
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-300
                ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-yellow-100 text-yellow-800'}`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;