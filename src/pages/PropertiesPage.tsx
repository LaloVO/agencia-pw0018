import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { useProperties } from '@/hooks/useProperties';

const PropertiesPage = () => {
  const { properties, isLoading } = useProperties({ limit: 100 });

  return (
    <>
      <Helmet>
        <title>Propiedades | Iris Medina RN</title>
        <meta
          name="description"
          content="Explora el catálogo de propiedades en renta y venta gestionadas por Iris Medina RN en Saltillo y la Región Sureste de Coahuila."
        />
      </Helmet>

      <Navbar />

      <main className="pt-28 pb-20 bg-background min-h-screen">
        <div className="luxury-container">
          <div className="mb-12">
            <p className="text-burgundy text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-3">
              Catálogo completo
            </p>
            <h1 className="font-serif text-3xl md:text-5xl text-foreground">
              Propiedades
              <span className="italic text-muted-foreground"> disponibles</span>
            </h1>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-muted rounded-2xl aspect-[4/3] animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} variant="compact" />
              ))}
            </div>
          )}

          {!isLoading && properties.length === 0 && (
            <div className="text-center py-24">
              <p className="font-serif text-xl text-muted-foreground mb-4">No hay propiedades disponibles</p>
              <p className="font-sans text-sm text-muted-foreground">Vuelve pronto o usa la Búsqueda Inteligente.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PropertiesPage;
