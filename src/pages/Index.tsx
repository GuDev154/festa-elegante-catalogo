
import ModernHeader from '@/components/modern/ModernHeader';
import ModernHero from '@/components/modern/ModernHero';
import ModernServices from '@/components/modern/ModernServices';
import ModernProducts from '@/components/modern/ModernProducts';
import ModernAbout from '@/components/modern/ModernAbout';
import ModernGallery from '@/components/modern/ModernGallery';
import ModernTestimonials from '@/components/modern/ModernTestimonials';
import ModernContact from '@/components/modern/ModernContact';
import ModernFooter from '@/components/modern/ModernFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-vampeta-black text-white overflow-hidden">
      <ModernHeader />
      <ModernHero />
      <ModernServices />
      <ModernProducts />
      <ModernAbout />
      <ModernGallery />
      <ModernTestimonials />
      <ModernContact />
      <ModernFooter />
    </div>
  );
};

export default Index;
