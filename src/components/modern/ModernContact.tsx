
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

const ModernContact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      details: ["Rua Augusta, 1234", "Consolação - São Paulo/SP", "CEP: 01305-100"],
      link: "#"
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

  return (
    <section id="contact" className="py-32 bg-vampeta-charcoal relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-playfair font-light text-white mb-4">
            Fale <span className="text-vampeta-gold">Conosco</span>
          </h2>
          <div className="w-16 h-px bg-vampeta-gold mx-auto mb-8"></div>
          <p className="text-lg text-white/60 font-inter font-light max-w-2xl mx-auto">
            Estamos prontos para criar a experiência perfeita para você
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group flex items-start gap-6 p-6 bg-vampeta-black/30 backdrop-blur-sm border border-vampeta-gold/10 rounded-2xl hover:border-vampeta-gold/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-vampeta-gold/10 rounded-xl flex items-center justify-center group-hover:bg-vampeta-gold/20 transition-colors duration-300">
                  <info.icon className="text-vampeta-gold" size={22} />
                </div>
                <div>
                  <h3 className="text-white font-inter font-medium mb-3 text-lg">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-white/70 font-inter font-light">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="flex gap-4 pt-8">
              <a 
                href="#" 
                className="w-12 h-12 bg-vampeta-gold/10 border border-vampeta-gold/20 rounded-xl flex items-center justify-center hover:bg-vampeta-gold hover:text-vampeta-black transition-all duration-300 group"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-vampeta-gold/10 border border-vampeta-gold/20 rounded-xl flex items-center justify-center hover:bg-vampeta-gold hover:text-vampeta-black transition-all duration-300 group"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-vampeta-black/30 backdrop-blur-sm border border-vampeta-gold/10 rounded-3xl p-8">
            <h3 className="text-2xl font-playfair font-light text-white mb-8">
              Agende seu Horário
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white/80 font-inter font-light mb-3 block">Nome</label>
                  <input 
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full bg-vampeta-charcoal/50 border border-vampeta-gold/20 rounded-xl px-4 py-3 text-white font-inter font-light focus:border-vampeta-gold/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/80 font-inter font-light mb-3 block">Telefone</label>
                  <input 
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="w-full bg-vampeta-charcoal/50 border border-vampeta-gold/20 rounded-xl px-4 py-3 text-white font-inter font-light focus:border-vampeta-gold/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/80 font-inter font-light mb-3 block">E-mail</label>
                <input 
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full bg-vampeta-charcoal/50 border border-vampeta-gold/20 rounded-xl px-4 py-3 text-white font-inter font-light focus:border-vampeta-gold/50 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white/80 font-inter font-light mb-3 block">Serviço</label>
                  <select className="w-full bg-vampeta-charcoal/50 border border-vampeta-gold/20 rounded-xl px-4 py-3 text-white font-inter font-light focus:border-vampeta-gold/50 focus:outline-none transition-colors">
                    <option value="">Selecione</option>
                    <option value="corte">Corte Clássico</option>
                    <option value="barba">Barba Premium</option>
                    <option value="tratamento">Tratamentos</option>
                    <option value="vip">Experiência VIP</option>
                  </select>
                </div>
                <div>
                  <label className="text-white/80 font-inter font-light mb-3 block">Data</label>
                  <input 
                    type="date"
                    className="w-full bg-vampeta-charcoal/50 border border-vampeta-gold/20 rounded-xl px-4 py-3 text-white font-inter font-light focus:border-vampeta-gold/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/80 font-inter font-light mb-3 block">Mensagem</label>
                <textarea 
                  placeholder="Conte-nos mais sobre o que você deseja..."
                  rows={4}
                  className="w-full bg-vampeta-charcoal/50 border border-vampeta-gold/20 rounded-xl px-4 py-3 text-white font-inter font-light focus:border-vampeta-gold/50 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-vampeta-gold text-vampeta-black py-4 rounded-xl font-inter font-medium hover:bg-vampeta-lightGold transition-all duration-300 hover:scale-[1.02]"
              >
                Enviar Agendamento
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;
