import React from 'react';
import { ClientMarquee } from './ClientMarquee';

export function Hero() {
  return (
    <div className="max-w-8xl mx-auto relative overflow-hidden bg-white mt-5 sm:mt-20 md:mt-16 px-8 sm:px-16 md:px-16">
      <div className="flex flex-wrap mt-14">
        <div className="md:w-3/5">
        <h1 className="text-6xl font-bold flex flex-wrap items-center leading-relaxed">
          <span>Have you</span>
          <img 
            src="/metaextec.webp"
            alt="met"
            className="h-[0.9em] mx-2 inline-block"
          />
          <span>your tech Sherpa?</span>
        </h1>
          
          <div className="mt-6 text-lg text-gray-600">
            <p>Bringing your ideas to life with technology and trusted digital guidance.</p>
          </div>
          <div className="mt-10">
            <a
              href="#contact_us"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors duration-200"
            >
              Let's work together →
            </a>
          </div>
        </div>
        <div className="hidden sm:w-2/5 sm:block px-4">
        <div className="aspect-square w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-xl">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source 
                    src="https://videos.pexels.com/video-files/18069237/18069237-uhd_1440_1440_24fps.mp4" 
                    type="video/mp4" 
                  />
                </video>
              </div>
        </div>
        <ClientMarquee />
      </div>
    </div>
  );
}