
import { Scissors, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-vampeta-black via-vampeta-black/90 to-vampeta-black/70">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-vampeta-gold/10 border border-vampeta-gold/30 rounded-full px-6 py-2 mb-8">
            <Star className="text-vampeta-gold" size={16} />
            <span className="text-vampeta-gold font-inter font-medium">Barbearia Premium</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            <span className="text-white">VAMPETA</span>
            <br />
            <span className="text-vampeta-gold">BARBEARIA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 font-inter mb-8 leading-relaxed">
            Tradição, estilo e sofisticação em cada corte.<br />
            A experiência premium que todo homem merece.
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-vampeta-gold rounded-full flex items-center justify-center">
                <Scissors className="text-vampeta-black" size={20} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-playfair font-bold text-vampeta-gold">15+</div>
                <div className="text-white/70 font-inter">Anos de Experiência</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-vampeta-gold rounded-full flex items-center justify-center">
                <Star className="text-vampeta-black" size={20} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-playfair font-bold text-vampeta-gold">5000+</div>
                <div className="text-white/70 font-inter">Clientes Satisfeitos</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-vampeta-gold rounded-full flex items-center justify-center">
                <Clock className="text-vampeta-black" size={20} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-playfair font-bold text-vampeta-gold">100%</div>
                <div className="text-white/70 font-inter">Pontualidade</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-vampeta-gold text-vampeta-black hover:bg-vampeta-lightGold font-inter font-semibold text-lg px-8 py-4 shadow-gold"
            >
              Agendar Agora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-vampeta-gold text-vampeta-gold hover:bg-vampeta-gold hover:text-vampeta-black font-inter font-semibold text-lg px-8 py-4"
            >
              Ver Serviços
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-vampeta-gold rounded-full flex justify-center">
              <div className="w-1 h-3 bg-vampeta-gold rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
