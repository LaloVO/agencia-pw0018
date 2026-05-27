import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop"
        alt="Propiedad premium"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Burgundy overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/40 to-burgundy/20" />
      <div className="absolute inset-0 bg-navy/30" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-end pb-20 md:pb-28 px-6 text-center">
        <div
          className={`transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight max-w-4xl">
            Tu inmueble
            <br />
            <span className="italic">en las mejores manos</span>
          </h1>
          <p className="font-sans text-white/80 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
            Saltillo y la Región Sureste de Coahuila. Tu patrimonio protegido con respaldo legal y experiencia inmobiliaria.
          </p>
        </div>

        {/* Buscador CTA */}
        <div
          className={`w-full max-w-3xl transition-all duration-1000 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            to="/propiedades"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy font-sans font-medium text-sm rounded-full hover:bg-gold hover:text-white transition-all duration-300 shadow-glass"
          >
            <Search className="w-4 h-4" />
            Explorar propiedades disponibles
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
};

export default HeroSection;
