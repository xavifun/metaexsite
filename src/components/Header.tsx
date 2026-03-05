import React from 'react';
import { Menu, X } from 'lucide-react';
import { smoothScroll } from '../utils/smoothScroll';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    smoothScroll(e, e.currentTarget.getAttribute('href') || '');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <a href="/">
            <img 
              src="/metaextec.webp"
              alt="MET"
              className="h-12 w-auto"
            />
          </a>
        </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Cases', 'About us', 'Contact us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '_')}`}
                className="text-gray-700 hover:text-accent transition-colors text-xl"
                onClick={handleNavClick}
              >
                {item}
              </a>
            ))}
          </nav>          

          <button
            className="md:hidden text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Cases', 'About us', 'Contact us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '_')}`}
                className="block px-3 py-2 text-gray-700 hover:text-accent transition-colors"
                onClick={handleNavClick}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}