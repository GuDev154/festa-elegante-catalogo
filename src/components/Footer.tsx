
import { Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vampeta-black border-t border-vampeta-gold/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <h3 className="text-3xl font-playfair font-bold text-vampeta-gold">
                VAMPETA
              </h3>
              <span className="text-sm text-white/70 font-inter ml-2">BARBEARIA</span>
            </div>
            <p className="text-white/70 font-inter mb-6 leading-relaxed max-w-md">
              Tradição, estilo e sofisticação em cada corte. A experiência premium 
              que todo homem merece, com mais de 15 anos de excelência em São Paulo.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-vampeta-gold/10 border border-vampeta-gold/30 rounded-full flex items-center justify-center hover:bg-vampeta-gold hover:text-vampeta-black transition-all"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-vampeta-gold/10 border border-vampeta-gold/30 rounded-full flex items-center justify-center hover:bg-vampeta-gold hover:text-vampeta-black transition-all"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-playfair font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-vampeta-gold font-inter transition-colors">Corte Masculino</a></li>
              <li><a href="#" className="text-white/70 hover:text-vampeta-gold font-inter transition-colors">Barba & Bigode</a></li>
              <li><a href="#" className="text-white/70 hover:text-vampeta-gold font-inter transition-colors">Tratamentos Capilares</a></li>
              <li><a href="#" className="text-white/70 hover:text-vampeta-gold font-inter transition-colors">Pacote Premium</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-playfair font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="text-vampeta-gold" size={16} />
                <span className="text-white/70 font-inter text-sm">Rua Augusta, 1234 - São Paulo/SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-vampeta-gold" size={16} />
                <span className="text-white/70 font-inter text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-vampeta-gold" size={16} />
                <span className="text-white/70 font-inter text-sm">contato@vampetabarbearia.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-vampeta-gold/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 font-inter text-sm">
              © 2024 Vampeta Barbearia. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-vampeta-gold font-inter text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-vampeta-gold font-inter text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
