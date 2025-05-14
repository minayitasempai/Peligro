import React, { useState, useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

const stats = [
  { value: 4.7, unit: 'millones', label: 'Hectáreas de bosque perdidas anualmente', color: 'text-red-600' },
  { value: 17, unit: '%', label: 'Del Amazonas perdido en los últimos 50 años', color: 'text-orange-500' },
  { value: 80, unit: '%', label: 'De animales y plantas terrestres viven en bosques', color: 'text-green-600' },
  { value: 25, unit: '%', label: 'De medicinas modernas derivadas de plantas tropicales', color: 'text-blue-500' }
];

const regions = [
  { 
    id: 'amazon', 
    name: 'Amazonas', 
    deforestationRate: '17% perdido en 50 años',
    causes: 'Agricultura, tala, minería',
    impact: 'Hogar del 10% de las especies conocidas, crítico para la regulación del clima'
  },
  { 
    id: 'borneo', 
    name: 'Borneo', 
    deforestationRate: '50% perdido desde 1950',
    causes: 'Plantaciones de palma aceitera, tala, minería',
    impact: 'Hábitat crítico para orangutanes y miles de especies únicas'
  },
  { 
    id: 'congo', 
    name: 'Cuenca del Congo', 
    deforestationRate: '10% perdido en los últimos 20 años',
    causes: 'Agricultura, tala, construcción de carreteras',
    impact: 'Segunda selva tropical más grande, sumidero crucial de carbono'
  },
  { 
    id: 'indonesia', 
    name: 'Indonesia', 
    deforestationRate: 'Perdió 40% de bosques desde 1950',
    causes: 'Aceite de palma, producción de papel',
    impact: 'Pérdida extrema de biodiversidad, especies en peligro'
  }
];

const Statistics: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const isCounterInView = useInView(counterRef, { threshold: 0.1, triggerOnce: true });
  
  const [counts, setCounts] = useState(stats.map(() => 0));
  
  useEffect(() => {
    if (isCounterInView) {
      const intervals = stats.map((stat, index) => {
        return setInterval(() => {
          setCounts(prev => {
            const newCounts = [...prev];
            if (newCounts[index] < stat.value) {
              newCounts[index] = Math.min(newCounts[index] + stat.value / 50, stat.value);
            }
            return newCounts;
          });
        }, 30);
      });
      
      return () => intervals.forEach(interval => clearInterval(interval));
    }
  }, [isCounterInView]);

  return (
    <section 
      id="estadisticas" 
      ref={sectionRef}
      className="py-20 px-4 bg-stone-50 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-green-700">Deforestación</span> en Números
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La escala de la deforestación global es alarmante - pero los números solo cuentan parte de la historia.
          </p>
        </div>
        
        {/* Stats Counter */}
        <div 
          ref={counterRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 flex justify-center">
                <span className={`${stat.color}`}>
                  {counts[index].toFixed(stat.value % 1 === 0 ? 0 : 1)}
                </span>
                <span className="text-gray-700 ml-1">{stat.unit}</span>
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Region Selector */}
        <div className={`bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto scrollbar-hide">
              {regions.map((region) => (
                <button
                  key={region.id}
                  className={`px-6 py-4 font-medium text-sm focus:outline-none whitespace-nowrap ${
                    selectedRegion.id === region.id 
                      ? 'text-green-700 border-b-2 border-green-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setSelectedRegion(region)}
                >
                  {region.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <img 
                  src={`https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} 
                  alt={selectedRegion.name}
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedRegion.name}</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-700">Tasa de Deforestación</h4>
                    <p className="text-red-600">{selectedRegion.deforestationRate}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Causas Principales</h4>
                    <p>{selectedRegion.causes}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Impacto Ambiental</h4>
                  <p className="text-gray-600">{selectedRegion.impact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;