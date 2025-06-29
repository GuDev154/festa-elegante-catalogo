
import { Award, Users, Clock, Shield } from 'lucide-react';

const ModernAbout = () => {
  const features = [
    { icon: Award, title: "Excelência", desc: "Padrão premium" },
    { icon: Users, title: "Personalizado", desc: "Cada cliente único" },
    { icon: Clock, title: "Pontualidade", desc: "Tempo respeitado" },
    { icon: Shield, title: "Qualidade", desc: "Produtos selecionados" }
  ];

  return (
    <section id="about" className="py-32 bg-vampeta-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-vampeta-gold/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-playfair font-light text-white mb-6">
                Tradição & <span className="text-vampeta-gold">Inovação</span>
              </h2>
              <div className="w-16 h-px bg-vampeta-gold mb-8"></div>
            </div>
            
            <p className="text-xl text-white/70 font-inter font-light leading-relaxed">
              Há mais de 15 anos, a Vampeta Barbearia combina a arte tradicional da barbearia 
              com técnicas contemporâneas, criando uma experiência única para cada cliente.
            </p>

            <p className="text-lg text-white/60 font-inter font-light leading-relaxed">
              Nossa filosofia é simples: cada corte é uma obra de arte, cada cliente é único, 
              e cada visita deve ser memorável.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="group flex items-start gap-4">
                  <div className="w-12 h-12 bg-vampeta-gold/10 rounded-xl flex items-center justify-center group-hover:bg-vampeta-gold/20 transition-colors duration-300">
                    <feature.icon className="text-vampeta-gold" size={18} />
                  </div>
                  <div>
                    <h3 className="text-white font-inter font-medium mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 font-inter font-light text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
                alt="Interior da Vampeta Barbearia"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vampeta-black/60 via-transparent to-transparent"></div>
              
              {/* Floating Element */}
              <div className="absolute -bottom-8 -left-8 bg-vampeta-gold text-vampeta-black p-8 rounded-2xl">
                <div className="text-4xl font-playfair font-light mb-2">15+</div>
                <div className="font-inter font-light">Anos de História</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 border border-vampeta-gold/30 rounded-full"></div>
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-vampeta-gold/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;
