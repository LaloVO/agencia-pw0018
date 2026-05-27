import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import { useProperties } from '@/hooks/useProperties';

const PropertiesSection = () => {
  const { properties, isLoading } = useProperties({ limit: 6 });
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
    <section ref={ref} className="py-20 md:py-32 bg-background">
      <div className="luxury-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight">
              Propiedades
              <br />
              <span className="italic text-muted-foreground">disponibles</span>
            </h2>
          </div>

          <Link
            to="/propiedades"
            className={`inline-flex items-center gap-2 px-6 py-3 bg-burgundy text-white font-sans font-medium text-sm rounded-full hover:bg-burgundy-dark transition-all duration-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Ver todas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Masonry-like asymmetric grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-muted rounded-2xl aspect-[4/3] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
            {properties.slice(0, 6).map((property, i) => (
              <div
                key={property.id}
                className={`transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <PropertyCard
                  property={property}
                  variant={i === 0 ? 'masonry' : 'compact'}
                />
              </div>
            ))}
          </div>
        )}

        {!isLoading && properties.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-muted-foreground">No hay propiedades disponibles</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesSection;
