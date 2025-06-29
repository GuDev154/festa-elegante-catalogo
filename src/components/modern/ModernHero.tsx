
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

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

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-vampeta-black via-vampeta-charcoal/50 to-vampeta-black"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.1) 0%, transparent 50%)`
          }}
        ></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-vampeta-gold/5 border border-vampeta-gold/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
          <div className="w-2 h-2 bg-vampeta-gold rounded-full animate-pulse"></div>
          <span className="text-vampeta-gold font-inter font-light tracking-wide">Barbearia Premium</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-playfair font-light mb-8 leading-none">
          <span className="block text-white/90">VAMPETA</span>
          <span className="block text-vampeta-gold font-normal">BARBEARIA</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/60 font-inter font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Onde tradição encontra modernidade.<br />
          <span className="text-vampeta-gold/80">Uma experiência única em cada corte.</span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group bg-vampeta-gold text-vampeta-black px-8 py-4 rounded-full font-inter font-medium text-lg transition-all duration-300 hover:bg-vampeta-lightGold hover:scale-105 hover:shadow-gold">
            <span className="relative">
              Agendar Horário
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </span>
          </button>
          <button className="group text-vampeta-gold border border-vampeta-gold/50 px-8 py-4 rounded-full font-inter font-light text-lg transition-all duration-300 hover:bg-vampeta-gold/10 hover:border-vampeta-gold">
            Ver Portfólio
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-playfair font-light text-vampeta-gold mb-1">15+</div>
            <div className="text-sm text-white/60 font-inter">Anos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-light text-vampeta-gold mb-1">5k+</div>
            <div className="text-sm text-white/60 font-inter">Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-light text-vampeta-gold mb-1">98%</div>
            <div className="text-sm text-white/60 font-inter">Satisfação</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-vampeta-gold to-transparent"></div>
          <ChevronDown className="text-vampeta-gold/60" size={20} />
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
