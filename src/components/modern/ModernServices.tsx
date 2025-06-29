
import { Scissors, User, Sparkles, Crown } from 'lucide-react';

const ModernServices = () => {
  const services = [
    {
      icon: Scissors,
      title: "Corte Clássico",
      description: "Técnicas tradicionais com toque contemporâneo",
      price: "45",
      duration: "45min"
    },
    {
      icon: User,
      title: "Barba Premium",
      description: "Modelagem artística com produtos selecionados",
      price: "35",
      duration: "30min"
    },
    {
      icon: Sparkles,
      title: "Tratamentos",
      description: "Cuidados especializados para cabelo e couro",
      price: "60",
      duration: "60min"
    },
    {
      icon: Crown,
      title: "Experiência VIP",
      description: "Serviço completo com máximo conforto",
      price: "120",
      duration: "90min"
    }
  ];

  return (
    <section id="services" className="py-32 bg-vampeta-charcoal relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-vampeta-gold rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-px h-32 bg-vampeta-gold -rotate-45"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-playfair font-light text-white mb-4">
              Nossos <span className="text-vampeta-gold">Serviços</span>
            </h2>
            <div className="w-24 h-px bg-vampeta-gold mx-auto"></div>
          </div>
          <p className="text-lg text-white/60 font-inter font-light mt-8 max-w-2xl mx-auto">
            Cada serviço é uma obra de arte, executada com precisão e dedicação
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-vampeta-black/50 backdrop-blur-sm border border-vampeta-gold/10 rounded-3xl p-8 hover:border-vampeta-gold/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-vampeta-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-vampeta-gold/20 transition-colors duration-300">
                  <service.icon className="text-vampeta-gold" size={24} />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-vampeta-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-playfair font-medium text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-white/60 font-inter font-light mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Price and Duration */}
              <div className="flex items-center justify-between">
                <div className="text-2xl font-playfair font-light text-vampeta-gold">
                  R$ {service.price}
                </div>
                <div className="text-sm text-white/40 font-inter">
                  {service.duration}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-vampeta-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-vampeta-gold text-vampeta-black px-8 py-4 rounded-full font-inter font-medium hover:bg-vampeta-lightGold transition-all duration-300 hover:scale-105">
            Ver Todos os Preços
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModernServices;
