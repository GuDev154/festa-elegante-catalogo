
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Excelência Profissional",
      description: "Barbeiros certificados e especializados em técnicas clássicas e modernas"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atenção individual e serviço sob medida"
    },
    {
      icon: Clock,
      title: "Pontualidade Garantida",
      description: "Respeitamos seu tempo com agendamentos precisos e sem atrasos"
    },
    {
      icon: Shield,
      title: "Produtos Premium",
      description: "Utilizamos apenas produtos de alta qualidade e equipamentos profissionais"
    }
  ];

  return (
    <section id="about" className="py-20 bg-vampeta-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Tradição e <span className="text-vampeta-gold">Modernidade</span>
            </h2>
            
            <p className="text-lg text-white/80 font-inter mb-8 leading-relaxed">
              A Vampeta Barbearia nasceu da paixão pela arte de cuidar da aparência masculina. 
              Com mais de 15 anos de experiência, combinamos técnicas tradicionais com 
              as tendências mais modernas do mercado.
            </p>

            <p className="text-white/70 font-inter mb-10 leading-relaxed">
              Nossa missão é proporcionar uma experiência única, onde cada cliente se sente 
              especial e sai renovado. Investimos constantemente em capacitação e nos melhores 
              produtos do mercado para garantir resultados excepcionais.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-vampeta-gold/10 border border-vampeta-gold/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-vampeta-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-inter font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 font-inter text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-gold-lg">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
                alt="Interior elegante da Vampeta Barbearia"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vampeta-black/60 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-vampeta-gold text-vampeta-black p-6 rounded-xl shadow-gold">
              <div className="text-3xl font-playfair font-bold">15+</div>
              <div className="font-inter font-medium">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
