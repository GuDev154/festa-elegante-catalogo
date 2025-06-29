
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-vampeta-charcoal">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Entre em <span className="text-vampeta-gold">Contato</span>
          </h2>
          <p className="text-xl text-white/80 font-inter max-w-2xl mx-auto">
            Agende seu horário ou tire suas dúvidas. Estamos aqui para oferecer 
            a melhor experiência em barbearia premium.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-vampeta-black border-vampeta-gold/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-vampeta-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-vampeta-black" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-inter font-semibold mb-2">Endereço</h3>
                    <p className="text-white/70 font-inter">
                      Rua Augusta, 1234<br />
                      Consolação - São Paulo/SP<br />
                      CEP: 01305-100
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-vampeta-black border-vampeta-gold/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-vampeta-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-vampeta-black" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-inter font-semibold mb-2">Telefone</h3>
                    <p className="text-white/70 font-inter">
                      (11) 99999-9999<br />
                      WhatsApp disponível
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-vampeta-black border-vampeta-gold/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-vampeta-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-vampeta-black" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-inter font-semibold mb-2">Horário de Funcionamento</h3>
                    <p className="text-white/70 font-inter">
                      Segunda à Sexta: 09:00 - 19:00<br />
                      Sábado: 08:00 - 17:00<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-vampeta-black border-vampeta-gold/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-vampeta-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-vampeta-black" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-inter font-semibold mb-2">E-mail</h3>
                    <p className="text-white/70 font-inter">
                      contato@vampetabarbearia.com<br />
                      Respondemos em até 24h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-vampeta-black border-vampeta-gold/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                  Agende seu Horário
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white font-inter font-medium mb-2 block">Nome</label>
                      <Input 
                        placeholder="Seu nome completo"
                        className="bg-vampeta-charcoal border-vampeta-gold/30 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div>
                      <label className="text-white font-inter font-medium mb-2 block">Telefone</label>
                      <Input 
                        placeholder="(11) 99999-9999"
                        className="bg-vampeta-charcoal border-vampeta-gold/30 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white font-inter font-medium mb-2 block">E-mail</label>
                    <Input 
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-vampeta-charcoal border-vampeta-gold/30 text-white placeholder:text-white/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white font-inter font-medium mb-2 block">Serviço</label>
                      <select className="w-full h-10 px-3 py-2 bg-vampeta-charcoal border border-vampeta-gold/30 rounded-md text-white">
                        <option value="">Selecione o serviço</option>
                        <option value="corte">Corte Masculino</option>
                        <option value="barba">Barba & Bigode</option>
                        <option value="tratamento">Tratamento Capilar</option>
                        <option value="premium">Pacote Premium</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-white font-inter font-medium mb-2 block">Data Preferida</label>
                      <Input 
                        type="date"
                        className="bg-vampeta-charcoal border-vampeta-gold/30 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white font-inter font-medium mb-2 block">Mensagem</label>
                    <textarea 
                      placeholder="Conte-nos mais sobre o que você deseja..."
                      rows={4}
                      className="w-full px-3 py-2 bg-vampeta-charcoal border border-vampeta-gold/30 rounded-md text-white placeholder:text-white/50 resize-none"
                    />
                  </div>

                  <Button className="w-full bg-vampeta-gold text-vampeta-black hover:bg-vampeta-lightGold font-inter font-semibold text-lg py-3">
                    Enviar Agendamento
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
