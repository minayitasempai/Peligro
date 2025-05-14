import React, { useRef } from 'react';
import { ExternalLink, BookOpen, Globe, Video } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const resources = [
  {
    title: 'Organizaciones',
    icon: Globe,
    items: [
      { name: 'Alianza para los Bosques', url: 'https://www.rainforest-alliance.org/es/' },
      { name: 'WWF España', url: 'https://www.wwf.es/' },
      { name: 'Conservación Internacional', url: 'https://www.conservation.org/es' },
      { name: 'Equipo de Conservación Amazónica', url: 'https://www.amazonteam.org/es/' },
    ]
  },
  {
    title: 'Artículos e Informes',
    icon: BookOpen,
    items: [
      { name: 'Estado de los Bosques del Mundo', url: 'https://www.fao.org/state-of-forests/es/' },
      { name: 'Global Forest Watch', url: 'https://www.globalforestwatch.org/es/' },
      { name: 'La Economía de la Biodiversidad', url: '#' },
      { name: 'Bosques y Cambio Climático', url: '#' },
    ]
  },
  {
    title: 'Videos y Documentales',
    icon: Video,
    items: [
      { name: 'Nuestro Planeta: Bosques', url: 'https://www.netflix.com/title/80049832' },
      { name: 'La Selva Amazónica', url: '#' },
      { name: 'Deforestación Explicada', url: '#' },
      { name: 'La Vida Secreta de los Árboles', url: '#' },
    ]
  }
];

const Resources: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="recursos" 
      ref={sectionRef}
      className="py-20 px-4 bg-stone-50"
    >
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-green-700">Recursos</span> y Lecturas Adicionales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora estos recursos para profundizar tu comprensión sobre la deforestación y los esfuerzos de conserv
ación.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((category, index) => (
            <div 
              key={category.title}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 delay-${index * 150} ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center">
                  <category.icon className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                      >
                        <span className="mr-auto">{item.name}</span>
                        <ExternalLink className="h-4 w-4 ml-2 flex-shrink-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;