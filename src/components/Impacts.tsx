import React, { useRef } from 'react';
import { Cloud, Droplets, Fish, Bird } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const impacts = [
  {
    title: 'Pérdida de Biodiversidad',
    description: 'Los bosques albergan el 80% de la biodiversidad terrestre del mundo. La deforestación amenaza a innumerables especies con la extinción.',
    icon: Bird,
    color: 'from-green-500 to-blue-500'
  },
  {
    title: 'Cambio Climático',
    description: 'Los árboles absorben CO₂, ayudando a regular el clima. La deforestación contribuye aproximadamente al 15% de todas las emisiones de gases de efecto invernadero.',
    icon: Cloud,
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: 'Alteración del Ciclo del Agua',
    description: 'Los bosques ayudan a regular los ciclos del agua. Su pérdida conduce a inundaciones, sequías y reducción de la calidad del agua.',
    icon: Droplets,
    color: 'from-blue-400 to-teal-500'
  },
  {
    title: 'Erosión del Suelo',
    description: 'Sin las raíces de los árboles para mantener el suelo en su lugar, aumenta la erosión, reduciendo la productividad agrícola y la calidad del agua.',
    icon: Fish,
    color: 'from-amber-500 to-orange-600'
  }
];

const Impacts: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="impacts" 
      ref={sectionRef}
      className="py-20 px-4 bg-green-50"
    >
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Los <span className="text-red-600">Impactos Devastadores</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La deforestación afecta a nuestro planeta de numerosas formas, creando una cascada de problemas ambientales.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {impacts.map((impact, index) => (
            <div 
              key={impact.title}
              className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-700 delay-${index * 150} ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className={`h-3 bg-gradient-to-r ${impact.color}`}></div>
              <div className="p-6 flex items-start">
                <div className={`p-3 rounded-full bg-gradient-to-r ${impact.color} text-white mr-4 flex-shrink-0`}>
                  <impact.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{impact.title}</h3>
                  <p className="text-gray-600">{impact.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impacts;