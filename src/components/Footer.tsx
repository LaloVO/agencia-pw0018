import { Link } from 'react-router-dom';
import { useSiteUser } from '@/hooks/useSiteUser';

const Footer = () => {
  const { user } = useSiteUser();
  const phone = user?.telefono_usuario?.replace(/\D/g, '') ?? '528441651652';

  return (
    <footer className="bg-navy pt-20 pb-12 px-6 md:px-12 text-white">
      <div className="luxury-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <Link to="/" className="font-serif text-3xl italic mb-6 block text-white">
              Iris Medina RN.
            </Link>
            <p className="font-sans text-sm text-white/60 max-w-sm leading-relaxed">
              Asesoría inmobiliaria con respaldo jurídico. Tu patrimonio, nuestra prioridad.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-xs uppercase tracking-widest font-sans font-medium">
            <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition-colors">
              WhatsApp
            </a>
            <Link to="/propiedades" className="text-white/70 hover:text-gold transition-colors">
              Propiedades
            </Link>
            <Link to="/solicita-inmueble" className="text-white/70 hover:text-gold transition-colors">
              Búsqueda Inteligente
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-[10px] text-white/40 uppercase tracking-wide flex flex-col sm:flex-row justify-between gap-4">
          <span>© 2025 Iris Medina RN — Inmobiliaria con respaldo jurídico</span>
          <span>Poliza Jurídica de Arrendamiento</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
