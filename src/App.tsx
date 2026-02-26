import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Cases } from './components/Cases';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { BlogPost } from './components/BlogPost';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function App() {
  // Simple route handling
  const path = window.location.pathname;

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main className="flex-grow">
        {path === '/blog' ? (
          <BlogPost />
        ) : (
          <>
            <section id="home">
              <Hero />
            </section>
            <section id="cases">
              <Cases />
            </section>
            <section id="about_us">
              <About />
            </section>
            <section id="contact_us">
              <Contact />
            </section>
          </>
        )}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
export default App;