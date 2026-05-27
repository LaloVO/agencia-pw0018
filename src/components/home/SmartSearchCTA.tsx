import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SmartSearchCTA = () => {
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
    <section ref={ref} className="py-20 md:py-32 bg-navy relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px]" />

      <div className="luxury-container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`font-serif text-3xl md:text-5xl text-white mb-6 leading-tight transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            ¿No encuentras lo que buscas?
            <br />
            <span className="italic text-gold">Déjanos buscar por ti</span>
          </h2>

          <p
            className={`font-sans text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Nuestro sistema de búsqueda inteligente analiza tu presupuesto, necesidades y estilo de vida
            para encontrar la propiedad perfecta para ti en Saltillo y la Región Sureste.
          </p>

          <Link
            to="/solicita-inmueble"
            className={`inline-flex items-center gap-2 px-8 py-4 bg-burgundy text-white font-sans font-medium text-sm rounded-full hover:bg-burgundy-light transition-all duration-300 shadow-glass ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Iniciar Búsqueda Inteligente
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SmartSearchCTA;
