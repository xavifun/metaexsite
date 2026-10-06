import React from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { smoothScroll } from '../utils/smoothScroll';

const navItems = ['Cases', 'About us', 'Contact us'];

const products = [
  { name: 'Jobberdash', href: 'https://jobberdash.com/' },
  { name: 'Skillnormer', href: 'https://skillnormer.com/' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    smoothScroll(e, e.currentTarget.getAttribute('href') || '');
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

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
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '_')}`}
                className="text-gray-700 hover:text-accent transition-colors text-xl"
                onClick={handleNavClick}
              >
                {item}
              </a>
            ))}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 text-gray-700 group-hover:text-accent transition-colors text-xl"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
                <ChevronDown className="w-5 h-5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="min-w-[11rem] rounded-md bg-white shadow-lg ring-1 ring-black/5 py-1">
                  {products.map((product) => (
                    <a
                      key={product.name}
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors text-lg"
                    >
                      {product.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
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
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '_')}`}
                className="block px-3 py-2 text-gray-700 hover:text-accent transition-colors"
                onClick={handleNavClick}
              >
                {item}
              </a>
            ))}
            <div className="px-3 pt-2 pb-1 text-gray-500 text-sm font-medium">Products</div>
            {products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block pl-6 pr-3 py-2 text-gray-700 hover:text-accent transition-colors"
                onClick={closeMenu}
              >
                {product.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}