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
              src="/metaextec.webp" 
              alt="Metaex Technology Services Private Limited" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold">Metaex Technology Services Private Limited</span>
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
            <Link href="#about_us" className="block text-white hover:text-gray-300">About</Link>
            <Link href="/blog" className="block text-white hover:text-gray-300">Blog</Link>
            <Link href="#contact_us" className="block text-white hover:text-gray-300">Contact us</Link>
            <Link href="/privacy-policy" className="block text-white hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="block text-white hover:text-gray-300">Terms &amp; Conditions</Link>
            <Link href="/refund-policy" className="block text-white hover:text-gray-300">Refund &amp; Cancellation Policy</Link>
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
              <span>+91-73382-08303</span>
            </a>
            <div className="flex justify-center md:justify-start items-center space-x-2 text-gray-300">
              <MapPin size={18} />
              <span>Metaex Technology Services Private Limited,
                <br />#2117, Prestige Royale Gardens,
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
          © {new Date().getFullYear()} Metaex Technology Services Private Limited. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  
  );
}