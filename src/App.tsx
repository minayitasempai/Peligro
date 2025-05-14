import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Causes from './components/Causes';
import Impacts from './components/Impacts';
import Statistics from './components/Statistics';
import Solutions from './components/Solutions';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-gray-800">
      <Header />
      <Hero />
      <Causes />
      <Impacts />
      <Statistics />
      <Solutions />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;