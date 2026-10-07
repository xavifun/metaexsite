import React from 'react';
import { Shield } from 'lucide-react';

export function About() {
  return (
    <section className="py-12 bg-white bg-opacity-90">
      {/* Background image previously loaded from metaextec.com/wp-content (now 404
          after the migration off WordPress/S3). Removed to avoid a dead cross-origin
          request. To restore a background, drop an image at public/bg-scaled.webp and
          re-add: style={{ backgroundImage: 'url(/bg-scaled.webp)', backgroundSize:
          'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }} */}
      <div className="max-w-8xl mx-auto px-8 md:px=16 lg:px-16">
          <div className="flex items-center py-12">
            <Shield className="w-12 h-12 text-accent mr-4" />
            <h2 className="text-7xl font-bold text-secondary">About us</h2>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-gray-600 leading-relaxed text-lg">
                We're Metaex Technology (or MET), your go-to team for a smooth and hassle-free digital journey. Think of us as your trusted guides to tech success—or better yet, the Batman of the digital world. But instead of battling crime, we're here to tackle your toughest tech challenges!
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-2">Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Redefine software development by creating custom-built solutions that adapt seamlessly to evolving user needs and that empower users to focus on their goals and deliver results.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-2">Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Deliver custom software by combining deep expertise with a commitment to understanding and solving unique challenges in a fast and efficient way.
              </p>
            </div>
            
            <div className="pt-6">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-accent hover:bg-accent/90 transition-colors duration-200"
              >
                Talk to us →
              </a>
            </div>
          </div>
      </div>
    </section>
  );
}