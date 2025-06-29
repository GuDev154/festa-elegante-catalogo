
import { Scissors, Beard, Sparkles, Crown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Corte Masculino",
      description: "Cortes clássicos e modernos executados com precisão e técnica apurada.",
      price: "A partir de R$ 45",
      features: ["Consulta de estilo", "Corte personalizado", "Finalização premium"]
    },
    {
      icon: Beard,
      title: "Barba & Bigode",
      description: "Modelagem e cuidados especiais para barba e bigode com produtos premium.",
      price: "A partir de R$ 35",
      features: ["Aparar e modelar", "Hidratação profunda", "Produtos importados"]
    },
    {
      icon: Sparkles,
      title: "Tratamentos Capilares",
      description: "Cuidados especializados para cabelo e couro cabeludo com técnicas avançadas.",
      price: "A partir de R$ 60",
      features: ["Análise capilar", "Tratamento personalizado", "Produtos profissionais"]
    },
    {
      icon: Crown,
      title: "Pacote Premium",
      description: "Experiência completa incluindo todos os serviços e cuidados especiais.",
      price: "A partir de R$ 120",
      features: ["Corte + Barba", "Tratamento capilar", "Relaxamento completo"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-vampeta-charcoal">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Nossos <span className="text-vampeta-gold">Serviços</span>
          </h2>
          <p className="text-xl text-white/80 font-inter max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de barbearia com padrão premium 
            e atendimento personalizado para cada cliente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-vampeta-black border-vampeta-gold/20 hover:border-vampeta-gold/50 transition-all duration-300 hover:shadow-gold group"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-vampeta-black" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-playfair font-semibold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 font-inter mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-white/60 font-inter">
                      <div className="w-1.5 h-1.5 bg-vampeta-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-lg font-playfair font-semibold text-vampeta-gold">
                  {service.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/70 font-inter mb-6">
            Todos os serviços incluem consulta personalizada e produtos premium
          </p>
          <button className="bg-vampeta-gold text-vampeta-black hover:bg-vampeta-lightGold font-inter font-semibold px-8 py-3 rounded-lg transition-colors">
            Ver Todos os Preços
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
