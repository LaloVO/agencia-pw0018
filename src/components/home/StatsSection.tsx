import { useEffect, useRef, useState } from 'react';
import { Shield, FileCheck, Home, Award } from 'lucide-react';

const stats = [
  { icon: Shield, value: '100%', label: 'Respaldo Jurídico', desc: 'Protección legal en cada operación' },
  { icon: FileCheck, value: '0', label: 'Conflictos', desc: 'Transparencia y seguridad garantizada' },
  { icon: Home, value: '+500', label: 'Propiedades', desc: 'Gestionadas con éxito en la región' },
  { icon: Award, value: '10+', label: 'Años de Experiencia', desc: 'Especialista en arrendamiento' },
];

const StatsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-burgundy py-16 md:py-24">
      <div className="luxury-container">
        <div className="text-center mb-12">
          <h2
            className={`font-serif text-3xl md:text-4xl text-white transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Tu patrimonio, nuestra prioridad
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 md:px-10 text-center transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <stat.icon className="w-6 h-6 text-gold mx-auto mb-4" />
              <p className="text-4xl md:text-5xl font-serif text-white mb-2">{stat.value}</p>
              <p className="text-sm font-sans font-medium text-white/90 uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-xs font-sans text-white/50">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
