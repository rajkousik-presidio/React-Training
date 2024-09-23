import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import InfoSection from './components/InfoSection/InfoSection';
import CardSection from './components/CardSection/CardSection';
import OrganicAddons from './components/OrganicAddons/OrganicAddons';
import FreshVegSection from './components/FreshVegSection/FreshVegSection';
import './App.css';
import FreshOrganicProducts from './components/FreshOrganicProducts/FreshOrganicProducts';
import WhatOurCustomersSay from './components/WhatOurCustomerSay/WhatOurCustomerSay';
import BlogPost from './components/BlogPost/BlogPost';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <InfoSection />
      <CardSection /> 
      <OrganicAddons/>
      <FreshVegSection/>
      <FreshOrganicProducts />
      <WhatOurCustomersSay />
      <BlogPost />
      <Footer/>
    </div>
  );
}

export default App;
