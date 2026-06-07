import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import PropertiesSection from '@/components/home/PropertiesSection';
import ServicesSection from '@/components/home/ServicesSection';
import SmartSearchCTA from '@/components/home/SmartSearchCTA';
import ProfileSection from '@/components/home/ProfileSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Agencia | Asesoría Inmobiliaria con Respaldo Jurídico</title>
        <meta
          name="description"
          content="Renta tu inmueble de forma segura. Asesoría inmobiliaria profesional con respaldo jurídico en Saltillo y la Región Sureste de Coahuila."
        />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <PropertiesSection />
        <SmartSearchCTA />
        <ProfileSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
