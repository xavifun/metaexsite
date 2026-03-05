import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-16">
        <h2 className="text-4xl font-bold text-secondary mb-20 font-josefin">Contact us</h2>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-10">
              <form className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors duration-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors duration-200"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-200 font-medium"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Cards */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Mail className="text-accent" size={24} />
                <h3 className="text-xl font-semibold text-secondary">Email us</h3>
              </div>
              <p className="text-gray-600">
                Our friendly team is always there to respond to your email. Write to us at:{' '}
                <a href="mailto:hi@metaextec.com" className="text-accent hover:text-accent/80">
                  hi@metaextec.com
                </a>
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Phone className="text-accent" size={24} />
                <h3 className="text-xl font-semibold text-secondary">Talk to us</h3>
              </div>
              <p className="text-gray-600">
                Call us Mon-Fri between 9 am to 6 pm at +91-73382-08303
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <MapPin className="text-accent" size={24} />
                <h3 className="text-xl font-semibold text-secondary">Visit us</h3>
              </div>
              <p className="text-gray-600">
                Drop by for a coffee with us at Metaex Technology Services Private Limited, #2117, Prestige Royale Gardens, Bangalore - 560 064, Karnataka, India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}