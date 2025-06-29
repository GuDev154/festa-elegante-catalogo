
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Empresário",
      content: "Excelente atendimento! O ambiente é sofisticado e o resultado sempre superou minhas expectativas. Já sou cliente há 3 anos.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Roberto Santos",
      role: "Advogado",
      content: "Profissionalismo em primeiro lugar. A Vampeta entende exatamente o que preciso para manter minha imagem profissional impecável.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "André Oliveira",
      role: "Médico",
      content: "A atenção aos detalhes é impressionante. Cada visita é uma experiência única. Recomendo para qualquer homem que se preocupa com a aparência.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-vampeta-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            O que Dizem Nossos <span className="text-vampeta-gold">Clientes</span>
          </h2>
          <p className="text-xl text-white/80 font-inter max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja alguns depoimentos de quem confia no nosso trabalho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-vampeta-charcoal border-vampeta-gold/20 hover:border-vampeta-gold/50 transition-all duration-300 hover:shadow-gold"
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-vampeta-gold fill-current" size={20} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/80 font-inter mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-inter font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-vampeta-gold font-inter text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-vampeta-gold/20">
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-vampeta-gold mb-2">5000+</div>
            <div className="text-white/70 font-inter">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-vampeta-gold mb-2">4.9</div>
            <div className="text-white/70 font-inter">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-vampeta-gold mb-2">98%</div>
            <div className="text-white/70 font-inter">Clientes Satisfeitos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
