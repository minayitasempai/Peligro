import React, { useRef } from 'react';
import { Leaf, Trees as Tree, ShieldCheck, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const solutions = [
  {
    title: 'Esfuerzos de Conservación',
    description: 'Áreas protegidas, parques nacionales y refugios de vida silvestre ayudan a preservar ecosistemas forestales críticos.',
    icon: ShieldCheck,
    color: 'bg-green-700'
  },
  {
    title: 'Silvicultura Sostenible',
    description: 'Prácticas que mantienen la biodiversidad forestal, la productividad y la capacidad de regeneración.',
    icon: Tree,
    color: 'bg-green-600'
  },
  {
    title: 'Reforestación',
    description: 'Replantación de árboles en áreas deforestadas para restaurar ecosistemas y capturar carbono.',
    icon: Leaf,
    color: 'bg-green-500'
  },
  {
    title: 'Participación Comunitaria',
    description: 'Involucrar a las comunidades locales en la gestión y conservación de los bosques.',
    icon: Users,
    color: 'bg-green-400'
  }
];

const actions = [
  "Apoyar productos con certificaciones sostenibles (FSC, RSPO)",
  "Reducir el consumo de papel y reciclar productos de papel",
  "Elegir alimentos de origen vegetal para reducir la demanda de tierra deforestada",
  "Apoyar organizaciones que trabajan para proteger los bosques",
  "Abogar por políticas más fuertes de protección forestal"
];

const Solutions: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="soluciones" 
      ref={sectionRef}
      className="py-20 px-4 bg-green-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-green-800" 
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Soluciones para un <span className="text-green-700">Futuro más Verde</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Abordar la deforestación requiere esfuerzos coordinados a nivel global, nacional e individual.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={solution.title}
              className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-700 delay-${index * 150} ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className={`h-2 ${solution.color}`}></div>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg ${solution.color} text-white flex items-center justify-center mb-4`}>
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Take Action Section */}
        <div 
          id="tomar-accion"
          className={`bg-white rounded-lg p-8 shadow-xl transition-all duration-1000 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Qué Puedes Hacer</h3>
            <p className="text-gray-600">Pequeños cambios en tu vida diaria pueden tener un gran impacto en la conservación de los bosques.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-green-700 mb-4">Acciones Individuales</h4>
              <ul className="space-y-3">
                {actions.map((action, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 font-semibold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-green-700 mb-4">Haz un Compromiso</h4>
              <p className="text-gray-600 mb-4">
                Comprométete a tomar acciones específicas para reducir tu huella ambiental y proteger los bosques.
              </p>
              <div className="space-y-3">
                <div>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 rounded focus:ring-green-500" />
                    <span className="ml-2 text-gray-700">Reduciré mi consumo de papel</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 rounded focus:ring-green-500" />
                    <span className="ml-2 text-gray-700">Elegiré productos certificados FSC</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 rounded focus:ring-green-500" />
                    <span className="ml-2 text-gray-700">Comeré más comidas vegetales</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600 rounded focus:ring-green-500" />
                    <span className="ml-2 text-gray-700">Donaré a la conservación forestal</span>
                  </label>
                </div>
                <button className="w-full mt-2 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors">
                  Enviar Mi Compromiso
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;