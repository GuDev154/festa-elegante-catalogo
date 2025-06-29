
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-vampeta-black/90 backdrop-blur-xl border-b border-vampeta-gold/10' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative group cursor-pointer">
            <div className="text-3xl font-playfair font-bold text-vampeta-gold tracking-wider">
              VAMPETA
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vampeta-gold transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {['home', 'services', 'about', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-white/80 hover:text-vampeta-gold transition-colors duration-300 font-inter font-light tracking-wide capitalize group"
              >
                {item === 'home' ? 'início' : item === 'services' ? 'serviços' : item === 'about' ? 'sobre' : item === 'gallery' ? 'galeria' : 'contato'}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-vampeta-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button className="bg-vampeta-gold text-vampeta-black px-6 py-2 rounded-full font-inter font-medium hover:bg-vampeta-lightGold transition-all duration-300 hover:scale-105">
              Agendar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-vampeta-black/95 backdrop-blur-xl border-b border-vampeta-gold/10 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="container mx-auto px-6 py-8 space-y-6">
            {['home', 'services', 'about', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block text-white/80 hover:text-vampeta-gold transition-colors duration-300 font-inter font-light tracking-wide capitalize"
              >
                {item === 'home' ? 'início' : item === 'services' ? 'serviços' : item === 'about' ? 'sobre' : item === 'gallery' ? 'galeria' : 'contato'}
              </button>
            ))}
            <button className="bg-vampeta-gold text-vampeta-black px-6 py-2 rounded-full font-inter font-medium hover:bg-vampeta-lightGold transition-all duration-300">
              Agendar
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ModernHeader;
