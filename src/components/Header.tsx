import React, { useState, useEffect } from 'react';
import { TreePine, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <TreePine className={`h-8 w-8 ${isScrolled ? 'text-green-700' : 'text-white'}`} />
          <span className={`font-semibold text-xl ${isScrolled ? 'text-green-700' : 'text-white'}`}>
            GuardaBosques
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Causas', 'Impactos', 'Estadísticas', 'Soluciones', 'Recursos'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium hover:text-green-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <a 
            href="#tomar-accion" 
            className={`px-4 py-2 rounded-full ${
              isScrolled 
                ? 'bg-green-700 text-white hover:bg-green-800' 
                : 'bg-white text-green-700 hover:bg-gray-100'
            } transition-colors`}
          >
            Tomar Acción
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Alternar menú"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['Causas', 'Impactos', 'Estadísticas', 'Soluciones', 'Recursos'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 font-medium hover:text-green-600 transition-colors"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
            <a 
              href="#tomar-accion" 
              className="px-4 py-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition-colors text-center"
              onClick={toggleMenu}
            >
              Tomar Acción
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;