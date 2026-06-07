import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormularioMultiStep from "@/components/home/FormularioMultiStep";
import { useSiteUser } from "@/hooks/useSiteUser";

export default function SolicitaInmueble() {
  const { user } = useSiteUser();

  return (
    <>
      <Helmet>
        <title>Búsqueda Inteligente | {user?.nombre_usuario ?? "Agencia"}</title>
        <meta
          name="description"
          content="Completa nuestra solicitud inteligente de 6 pasos para encontrar tu propiedad ideal en Saltillo y la Región Sureste de Coahuila."
        />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 space-y-3">
            <span className="text-[10px] md:text-xs tracking-[0.2em] font-sans font-semibold text-burgundy uppercase">
              Patrimonio a tu medida
            </span>
            <h1 className="font-serif text-3xl md:text-5xl text-foreground font-medium tracking-tight">
              Búsqueda Inteligente Inmobiliaria
            </h1>
            <p className="font-sans text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Define tu presupuesto, expediente y cuéntanos sobre tu rutina diaria. Nuestro motor buscará y filtrará las mejores residencias para ti.
            </p>
          </div>

          <FormularioMultiStep />
        </div>
      </main>

      <Footer />
    </>
  );
}
