
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const ModernFooter = () => {
  return (
    <footer className="bg-vampeta-black border-t border-vampeta-gold/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-4xl font-playfair font-light text-vampeta-gold mb-2">
                VAMPETA
              </h3>
              <span className="text-white/60 font-inter font-light">BARBEARIA</span>
            </div>
            <p className="text-white/70 font-inter font-light leading-relaxed max-w-md">
              Onde tradição encontra modernidade. Uma experiência única em cada corte, 
              com mais de 15 anos de excelência em São Paulo.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-vampeta-gold/10 border border-vampeta-gold/20 rounded-lg flex items-center justify-center hover:bg-vampeta-gold hover:text-vampeta-black transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-vampeta-gold/10 border border-vampeta-gold/20 rounded-lg flex items-center justify-center hover:bg-vampeta-gold hover:text-vampeta-black transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-inter font-medium mb-6">Serviços</h4>
            <ul className="space-y-3">
              {['Corte Clássico', 'Barba Premium', 'Tratamentos', 'Experiência VIP'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/60 hover:text-vampeta-gold font-inter font-light transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-inter font-medium mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-vampeta-gold mt-1" size={16} />
                <span className="text-white/60 font-inter font-light text-sm">
                  Rua Augusta, 1234<br />São Paulo/SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-vampeta-gold" size={16} />
                <span className="text-white/60 font-inter font-light text-sm">
                  (11) 99999-9999
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-vampeta-gold" size={16} />
                <span className="text-white/60 font-inter font-light text-sm">
                  contato@vampetabarbearia.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-vampeta-gold/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 font-inter font-light text-sm">
              © 2024 Vampeta Barbearia. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-vampeta-gold font-inter font-light text-sm transition-colors">
                Privacidade
              </a>
              <a href="#" className="text-white/50 hover:text-vampeta-gold font-inter font-light text-sm transition-colors">
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
