import Hero from './components/Hero';
import WhatWeProvide from './components/WhatWeProvide';
import WhoWeServe from './components/WhoWeServe';
import ProductCategories from './components/ProductCategories';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhatWeProvide />
      <WhoWeServe />
      <ProductCategories />
      <TrustSection />
      <Footer />
    </div>
  );
}

export default App;
