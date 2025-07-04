
import { useEffect, useRef } from 'react';
import { ChevronDown, Star, MapPin, Clock } from 'lucide-react';

const ModernHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}%`);
      heroRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-vampeta-black/90 via-vampeta-black/70 to-vampeta-black/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
          alt="Vampeta Barbearia - Interior Profissional"
          className="w-full h-full object-cover"
          loading="eager"
        />
        
        {/* Interactive gradient overlay */}
        <div 
          className="absolute inset-0 opacity-20 z-20"
          style={{
            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.15) 0%, transparent 60%)`
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-40 text-center max-w-5xl mx-auto px-6">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-3 bg-vampeta-gold/10 border border-vampeta-gold/30 rounded-full px-6 py-3 mb-8 backdrop-blur-md">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-vampeta-gold fill-vampeta-gold" />
            ))}
          </div>
          <span className="text-vampeta-gold font-inter font-medium tracking-wide">Barbearia Premium • 15+ Anos</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-light mb-8 leading-none">
          <span className="block text-white/95 drop-shadow-lg">VAMPETA</span>
          <span className="block text-vampeta-gold font-medium bg-gradient-to-r from-vampeta-gold to-vampeta-lightGold bg-clip-text text-transparent">BARBEARIA</span>
        </h1>

        {/* Subtitle */}
        <div className="mb-12 space-y-4">
          <p className="text-xl md:text-2xl text-white/80 font-inter font-light max-w-3xl mx-auto leading-relaxed">
            Tradição e sofisticação em cada corte.<br />
            <span className="text-vampeta-gold/90 font-medium">A experiência premium que você merece.</span>
          </p>
          
          {/* Location and hours */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 font-inter text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-vampeta-gold" />
              <span>Rua Augusta, São Paulo</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-vampeta-gold" />
              <span>Seg-Sex: 9h-19h | Sab: 8h-17h</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative bg-vampeta-gold text-vampeta-black px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-500 hover:bg-vampeta-lightGold hover:scale-105 hover:shadow-gold-lg overflow-hidden"
          >
            <span className="relative z-10">Agendar Horário</span>
            <div className="absolute inset-0 bg-gradient-to-r from-vampeta-lightGold to-vampeta-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <button 
            onClick={() => scrollToSection('products')}
            className="group relative text-vampeta-gold border-2 border-vampeta-gold/60 px-8 py-4 rounded-full font-inter font-medium text-lg transition-all duration-500 hover:bg-vampeta-gold/15 hover:border-vampeta-gold hover:scale-105 backdrop-blur-sm"
          >
            <span className="relative z-10">Ver Produtos</span>
          </button>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-playfair font-light text-vampeta-gold mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
            <div className="text-sm text-white/70 font-inter uppercase tracking-wide">Anos de Tradição</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-playfair font-light text-vampeta-gold mb-2 group-hover:scale-110 transition-transform duration-300">5k+</div>
            <div className="text-sm text-white/70 font-inter uppercase tracking-wide">Clientes Satisfeitos</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-playfair font-light text-vampeta-gold mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
            <div className="text-sm text-white/70 font-inter uppercase tracking-wide">Satisfação</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex flex-col items-center space-y-3 animate-bounce cursor-pointer" onClick={() => scrollToSection('services')}>
          <div className="w-px h-8 bg-gradient-to-b from-vampeta-gold to-transparent"></div>
          <ChevronDown className="text-vampeta-gold/80 hover:text-vampeta-gold transition-colors" size={24} />
          <span className="text-xs text-white/50 font-inter uppercase tracking-widest">Descubra</span>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
