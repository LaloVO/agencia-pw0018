import { Link } from 'react-router-dom';
import { Bed, Bath, Square } from 'lucide-react';
import { CBFProperty, formatPrice } from '@/lib/cbf';

interface PropertyCardProps {
  property: CBFProperty;
  variant?: 'default' | 'compact' | 'masonry';
}

const PropertyCard = ({ property, variant = 'default' }: PropertyCardProps) => {
  const image = property.imagenes_propiedades?.[0]?.image_url ?? 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop';
  const badge = property.id_tipo_accion === 2 ? 'Renta' : 'Venta';
  const location = [property.colonia, property.direccion].filter(Boolean).join(' • ') || '';

  if (variant === 'compact') {
    return (
      <Link to={`/properties/${property.id}`} className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={image} alt={property.nombre} className="w-full h-full object-cover image-zoom" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-burgundy text-white text-xs font-sans font-medium rounded-full">
              {badge}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-white font-sans font-medium text-lg">
              {formatPrice(property.precio)}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-serif text-lg text-foreground group-hover:text-burgundy transition-colors mb-1 truncate">
            {property.nombre}
          </h3>
          <p className="font-sans text-sm text-muted-foreground mb-3 truncate">{location}</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            {property.habitaciones != null && (
              <span className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5" />
                {property.habitaciones}
              </span>
            )}
            {property.banios != null && (
              <span className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5" />
                {property.banios}
              </span>
            )}
            {property.area != null && (
              <span className="flex items-center gap-1">
                <Square className="w-3.5 h-3.5" />
                {property.area}m²
              </span>
            )}
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'masonry') {
    return (
      <Link to={`/properties/${property.id}`} className="group block relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500">
        <div className="relative aspect-[4/3]">
          <img src={image} alt={property.nombre} className="w-full h-full object-cover image-zoom" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-burgundy text-white text-xs font-sans font-medium rounded-full">
              {badge}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-serif text-xl text-white mb-1 group-hover:text-gold transition-colors truncate">
              {property.nombre}
            </h3>
            <p className="font-sans text-sm text-white/70 truncate">{location}</p>
            <p className="font-sans font-medium text-white mt-2">
              {formatPrice(property.precio)}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/properties/${property.id}`} className="min-w-[85vw] md:min-w-[40vw] group cursor-pointer snap-center block">
      <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl">
        <img src={image} alt={property.nombre} className="w-full h-full object-cover image-zoom" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-burgundy text-white text-xs font-sans font-medium rounded-full">
            {badge}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-serif text-2xl text-foreground mb-1 group-hover:text-burgundy transition-colors">
            {property.nombre}
          </h3>
          <p className="font-sans text-sm text-muted-foreground">
            {location}{property.area ? ` • ${property.area}m²` : ''}
          </p>
        </div>
        <span className="font-sans font-medium text-lg whitespace-nowrap ml-4 text-burgundy">
          {formatPrice(property.precio)}
        </span>
      </div>
    </Link>
  );
};

export default PropertyCard;
