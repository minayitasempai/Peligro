import React, { useEffect, useRef } from 'react';
import { Axe, Factory, Trees, Wheat } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const causes = [
  {
    title: 'Expansión Agrícola',
    description: 'La limpieza de bosques para agricultura, ganadería y plantaciones representa el 80% de la deforestación mundial.',
    icon: Wheat,
    color: 'bg-amber-100 text-amber-700'
  },
  {
    title: 'Tala',
    description: 'Las operaciones comerciales de tala, que proporcionan los productos de madera y papel del mundo, también talan innumerables árboles cada año.',
    icon: Axe,
    color: 'bg-orange-100 text-orange-700'
  },
  {
    title: 'Expansión de Infraestructura',
    description: 'Las carreteras, autopistas y el desarrollo urbano fragmentan los bosques y abren áreas remotas a más deforestación.',
    icon: Factory,
    color: 'bg-gray-100 text-gray-700'
  },
  {
    title: 'Cambio Climático',
    description: 'Los cambios en la temperatura y los patrones climáticos pueden debilitar los bosques y hacerlos más susceptibles al fuego y los insectos.',
    icon: Trees,
    color: 'bg-red-100 text-red-700'
  }
];

const Causes: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  return (
    <section 
      id="causas" 
      ref={sectionRef}
      className="py-20 px-4 bg-stone-50"
    >
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ¿Qué Causa la <span className="text-green-700">Deforestación</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entender las causas de la deforestación es el primer paso para abordar este desafío global.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {causes.map((cause, index) => (
            <div 
              key={cause.title}
              className={`rounded-lg p-6 shadow-md transition-all duration-700 delay-${index * 150} ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className={`w-16 h-16 rounded-full ${cause.color} flex items-center justify-center mb-6 mx-auto`}>
                <cause.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{cause.title}</h3>
              <p className="text-gray-600 text-center">{cause.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Causes;