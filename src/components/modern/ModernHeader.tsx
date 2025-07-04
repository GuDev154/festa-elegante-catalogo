
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, MapPin } from 'lucide-react';

const ModernHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'services', label: 'Serviços' },
    { id: 'products', label: 'Produtos' },
    { id: 'about', label: 'Sobre' },
    { id: 'gallery', label: 'Galeria' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-vampeta-black/95 backdrop-blur-xl border-b border-vampeta-gold/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <div 
            className="relative group cursor-pointer flex items-center gap-3"
            onClick={() => scrollToSection('home')}
          >
            <div className="text-2xl md:text-3xl font-playfair font-bold text-vampeta-gold tracking-wider transition-all duration-300 group-hover:scale-105">
              VAMPETA
            </div>
            <div className="hidden md:block h-6 w-px bg-vampeta-gold/50"></div>
            <div className="hidden md:block text-xs text-white/70 font-inter uppercase tracking-widest">
              Barbearia
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vampeta-gold transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-white/80 hover:text-vampeta-gold transition-all duration-300 font-inter font-light tracking-wide group py-2"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-vampeta-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 text-white/60">
              <a 
                href="tel:+5511999999999" 
                className="flex items-center gap-2 hover:text-vampeta-gold transition-colors text-sm"
              >
                <Phone size={16} />
                <span className="font-inter">(11) 99999-9999</span>
              </a>
              <div className="w-px h-4 bg-white/20"></div>
              <a 
                href="https://instagram.com/vampetabarbearia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-vampeta-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-vampeta-gold text-vampeta-black px-6 py-2.5 rounded-full font-inter font-semibold hover:bg-vampeta-lightGold transition-all duration-300 hover:scale-105 hover:shadow-gold"
            >
              Agendar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:text-vampeta-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 visible transform translate-y-0' 
            : 'opacity-0 invisible transform -translate-y-4'
        }`}>
          <div className="bg-vampeta-black/98 backdrop-blur-xl border-b border-vampeta-gold/20 shadow-xl">
            <div className="container mx-auto px-6 py-8">
              {/* Mobile Contact Info */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-vampeta-gold/20">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <MapPin size={16} className="text-vampeta-gold" />
                  <span className="font-inter">Rua Augusta, São Paulo</span>
                </div>
                <a 
                  href="tel:+5511999999999" 
                  className="flex items-center gap-2 text-vampeta-gold hover:text-vampeta-lightGold transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span className="font-inter font-medium">(11) 99999-9999</span>
                </a>
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-4 mb-8">
                {menuItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-white/80 hover:text-vampeta-gold transition-all duration-300 font-inter font-light tracking-wide py-3 text-lg group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      {item.label}
                      <div className="w-0 h-px bg-vampeta-gold transition-all duration-300 group-hover:w-8"></div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="space-y-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-vampeta-gold text-vampeta-black py-4 rounded-full font-inter font-semibold hover:bg-vampeta-lightGold transition-all duration-300 text-lg"
                >
                  Agendar Horário
                </button>
                
                <div className="flex justify-center">
                  <a 
                    href="https://instagram.com/vampetabarbearia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-vampeta-gold transition-colors text-sm"
                  >
                    <Instagram size={18} />
                    <span className="font-inter">@vampetabarbearia</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ModernHeader;
