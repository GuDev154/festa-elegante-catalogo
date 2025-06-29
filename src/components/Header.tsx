
import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-vampeta-black/95 backdrop-blur-sm border-b border-vampeta-gold/20">
      {/* Top Bar */}
      <div className="bg-vampeta-gold text-vampeta-black py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm font-inter">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Rua Augusta, 1234 - São Paulo/SP</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>(11) 99999-9999</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-vampeta-gold">
              VAMPETA
            </h1>
            <span className="text-sm text-white/70 font-inter ml-2">BARBEARIA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-vampeta-gold transition-colors font-inter font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-vampeta-gold transition-colors font-inter font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-vampeta-gold transition-colors font-inter font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-vampeta-gold transition-colors font-inter font-medium"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-vampeta-gold transition-colors font-inter font-medium"
            >
              Contato
            </button>
            <Button className="bg-vampeta-gold text-vampeta-black hover:bg-vampeta-lightGold font-inter font-semibold">
              Agendar Horário
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-vampeta-gold/20">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-vampeta-gold transition-colors font-inter font-medium text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-vampeta-gold transition-colors font-inter font-medium text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-vampeta-gold transition-colors font-inter font-medium text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-white hover:text-vampeta-gold transition-colors font-inter font-medium text-left"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-vampeta-gold transition-colors font-inter font-medium text-left"
              >
                Contato
              </button>
              <Button className="bg-vampeta-gold text-vampeta-black hover:bg-vampeta-lightGold font-inter font-semibold w-full mt-4">
                Agendar Horário
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
