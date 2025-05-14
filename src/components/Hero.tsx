import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const causesSection = document.getElementById('causes');
    if (causesSection) {
      causesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg")'
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Nuestros Bosques Están <span className="text-green-400">Desapareciendo</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200">
          Cada segundo, un área de bosque del tamaño de un campo de fútbol es destruida. 
          Aprende sobre la deforestación y cómo puedes ayudar a detenerla.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#tomar-accion" 
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-colors text-lg"
          >
            Tomar Acción
          </a>
          <a 
            href="#causas" 
            className="px-8 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full font-medium transition-colors text-lg"
          >
            Saber Más
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Desplazar hacia abajo"
      >
        <ArrowDown className="h-10 w-10 text-white" />
      </button>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-stone-50 to-transparent"></div>
    </div>
  );
};

export default Hero;