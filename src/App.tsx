import React from 'react';
import './App.scss';
import AboutUs from './components/about-us/AboutUs';
import FactsAndFigures from './components/facts-figures/Facts';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import Header from './components/header/Header';
import OurProducts from './components/our-products/Products';
import OurTeam from './components/our-team/Team';
import Review from './components/review/Review';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <FactsAndFigures />
      <OurProducts />
      <Services />
      <Gallery />
      <OurTeam />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
