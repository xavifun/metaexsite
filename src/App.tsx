import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Cases } from './components/Cases';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { BlogPost } from './components/BlogPost';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';
import { RefundPolicy } from './components/RefundPolicy';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function App() {
  // Simple route handling
  const path = window.location.pathname;

  const renderPage = () => {
    if (path === '/blog') return <BlogPost />;
    if (path === '/privacy-policy') return <PrivacyPolicy />;
    if (path === '/terms-and-conditions') return <TermsAndConditions />;
    if (path === '/refund-policy') return <RefundPolicy />;
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main className="flex-grow">
        {renderPage() !== null ? (
          renderPage()
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