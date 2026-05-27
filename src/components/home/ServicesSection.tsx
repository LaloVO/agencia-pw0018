import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, Handshake, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Póliza Jurídica',
    desc: 'Protección legal integral para arrendadores y arrendatarios. Resolvemos cualquier contingencia.',
  },
  {
    icon: FileText,
    title: 'Contratos Verificados',
    desc: 'Elaboración y revisión de contratos con respaldo jurídico. Cada cláusula a tu favor.',
  },
  {
    icon: Handshake,
    title: 'Gestión Completa',
    desc: 'Desde la publicación hasta la entrega de llaves. Te acompañamos en todo el proceso.',
  },
];

const ServicesSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2
            className={`font-serif text-3xl md:text-4xl text-foreground transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Todo lo que necesitas, en un solo lugar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group p-8 md:p-10 bg-card border border-border rounded-3xl hover:border-burgundy/30 hover:shadow-elegant transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="w-12 h-12 bg-burgundy/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-burgundy/20 transition-colors">
                <service.icon className="w-5 h-5 text-burgundy" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <Link
            to="/solicita-inmueble"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-sans font-medium text-sm rounded-full hover:bg-navy-light transition-all duration-300"
          >
            Solicitar una asesoría
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
