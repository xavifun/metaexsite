import React from 'react';
import { Link } from './Link';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
    <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <img 
              src="https://metaextec.com/wp-content/uploads/2025/01/metaextech_dp.png" 
              alt="MetaExTechnology" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold">MetaEdge Technology</span>
          </div>
          <p className="mt-4 text-gray-300">
            Transforming ideas into digital reality with cutting-edge technology.
          </p>
        </div>
  
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <Link href="#home" className="block text-white hover:text-gray-300">Home</Link>
            <Link href="#cases" className="block text-white hover:text-gray-300">Cases</Link>
            <Link href="#about" className="block text-white hover:text-gray-300">About</Link>
            <Link href="/blog" className="block text-white hover:text-gray-300">Blog</Link>
            <Link href="#contact" className="block text-white hover:text-gray-300">Contact us</Link>
          </div>
        </div>
  
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
          <div className="space-y-2">
            <a href="mailto:info@metaex.tech" className="flex justify-center md:justify-start items-center space-x-2 text-gray-300 hover:text-white">
              <Mail size={18} />
              <span>hi@metaextec.com</span>
            </a>
            <a href="tel:+1234567890" className="flex justify-center md:justify-start items-center space-x-2 text-gray-300 hover:text-white">
              <Phone size={18} />
              <span>+91-99999-99999</span>
            </a>
            <div className="flex justify-center md:justify-start items-center space-x-2 text-gray-300">
              <MapPin size={18} />
              <span>#2117, Prestige Royale Gardens, 
                <br />Bangalore - 560 064, 
                <br />Karnataka, India</span>
            </div>
          </div>
        </div>
  
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a 
              href="https://www.linkedin.com/company/metaex-technology" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
  
      <div className="mt-12 pt-8 border-t border-gray-700">
        <p className="text-center text-gray-300">
          © {new Date().getFullYear()} MetaEdge Technology. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  
  );
}