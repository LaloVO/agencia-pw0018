import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSiteUser } from '@/hooks/useSiteUser';
import { MessageCircle, Sparkles } from 'lucide-react';

const ProfileSection = () => {
  const { user } = useSiteUser();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const whatsappNumber = user?.telefono_usuario?.replace(/\D/g, '') ?? '528441651652';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section ref={ref} className="py-20 md:py-0 md:min-h-[80vh] flex items-center bg-navy">
      <div className="luxury-container w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 items-center">
          {/* Image — left, larger on desktop */}
          <div
            className={`md:col-span-3 relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/5] md:aspect-auto md:h-[70vh] transition-all duration-1000 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <img
              src={user?.imagen_perfil_usuario ?? '/iris-profile.png'}
              alt={user?.nombre_usuario ?? 'Iris Medina RN'}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy/80 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent md:hidden" />
          </div>

          {/* Text — right */}
          <div
            className={`md:col-span-2 md:pl-12 py-12 md:py-0 transition-all duration-1000 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <p className="text-gold text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-4">
              Tu Asesora de Confianza
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              {user?.nombre_usuario ?? 'Iris Medina RN'}
            </h2>
            <p className="font-sans text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Especialista en asesoría inmobiliaria con respaldo jurídico en Saltillo y la Región Sureste de Coahuila.
              Te ayudo a rentar tu inmueble de forma segura, con contratos verificados y total transparencia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-burgundy text-white font-sans font-medium text-sm rounded-full hover:bg-burgundy-light transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Contactar por WhatsApp
              </a>

              <Link
                to="/solicita-inmueble"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold text-gold font-sans font-medium text-sm rounded-full hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <Sparkles className="w-4 h-4" />
                Búsqueda Inteligente
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
