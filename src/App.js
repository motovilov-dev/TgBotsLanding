import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ForWhom from './components/ForWhom';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import seo from './data/seo';

function App() {
  return (
    <div className="font-main bg-gradient-to-b from-bg-primary to-bg-secondary min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(seo.schemaOrg.application)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(seo.schemaOrg.organization)}
        </script>
      </Helmet>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ForWhom />
        <Features />
        <Benefits />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
