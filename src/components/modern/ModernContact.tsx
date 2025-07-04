
import { MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react';

const ModernContact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      details: ["Rua Augusta, 1234", "Consolação - São Paulo/SP", "CEP: 01305-100"],
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Contato",
      details: ["(11) 99999-9999", "WhatsApp disponível", "Ligação direta"],
      link: "tel:+5511999999999"
    },
    {
      icon: Clock,
      title: "Funcionamento",
      details: ["Segunda à Sexta: 09:00 - 19:00", "Sábado: 08:00 - 17:00", "Domingo: Fechado"],
      link: "#"
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["contato@vampetabarbearia.com", "Respondemos em até 24h", "Suporte completo"],
      link: "mailto:contato@vampetabarbearia.com"
    }
  ];

  const handleAgendamento = () => {
    // Redireciona para a plataforma de agendamento externa
    window.open('https://agendamento.vampetabarbearia.com', '_blank');
  };

  return (
    <section id="contact" className="py-32 bg-vampeta-black relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-playfair font-light text-white mb-4">
            Fale <span className="text-vampeta-gold">Conosco</span>
          </h2>
          <div className="w-16 h-px bg-vampeta-gold mx-auto mb-8"></div>
          <p className="text-lg text-white/60 font-inter font-light max-w-2xl mx-auto">
            Entre em contato conosco ou agende seu horário na nossa plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-start gap-6 p-6 bg-vampeta-charcoal/50 backdrop-blur-sm border border-vampeta-gold/10 rounded-2xl hover:border-vampeta-gold/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-14 h-14 bg-vampeta-gold/10 rounded-xl flex items-center justify-center group-hover:bg-vampeta-gold/20 transition-colors duration-300">
                  <info.icon className="text-vampeta-gold" size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-inter font-medium mb-3 text-lg flex items-center gap-2">
                    {info.title}
                    {info.link.startsWith('http') && <ExternalLink size={16} className="text-vampeta-gold/60" />}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-white/70 font-inter font-light">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Agendamento Section */}
          <div className="bg-vampeta-charcoal/50 backdrop-blur-sm border border-vampeta-gold/10 rounded-3xl p-8 text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-playfair font-light text-white mb-4">
                Agende seu Horário
              </h3>
              <p className="text-white/60 font-inter font-light mb-8">
                Acesse nossa plataforma de agendamento online e escolha o melhor horário para você
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-vampeta-gold/10 border border-vampeta-gold/20 rounded-2xl p-6">
                <h4 className="text-vampeta-gold font-inter font-medium mb-2">Agendamento Online</h4>
                <p className="text-white/70 font-inter font-light text-sm mb-4">
                  • Escolha data e horário disponível<br/>
                  • Selecione seus serviços preferidos<br/>
                  • Confirmação instantânea
                </p>
              </div>

              <button 
                onClick={handleAgendamento}
                className="w-full bg-vampeta-gold text-vampeta-black py-4 rounded-xl font-inter font-medium hover:bg-vampeta-lightGold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Acessar Plataforma de Agendamento
                <ExternalLink size={18} />
              </button>

              <p className="text-white/50 font-inter font-light text-sm">
                Ou entre em contato pelos canais ao lado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;
