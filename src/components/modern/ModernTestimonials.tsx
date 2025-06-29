
import { Star, Quote } from 'lucide-react';

const ModernTestimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Empresário",
      content: "A Vampeta redefiniu minha experiência com barbearias. Cada visita é um momento de relaxamento e renovação.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      rating: 5
    },
    {
      name: "Roberto Silva",
      role: "Advogado",
      content: "Profissionalismo excepcional. O ambiente é sofisticado e o resultado sempre supera as expectativas.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop",
      rating: 5
    },
    {
      name: "André Costa",
      role: "Médico",
      content: "Mais que uma barbearia, é uma experiência sensorial. Recomendo a todos que buscam excelência.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-vampeta-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <Quote className="absolute top-1/4 left-10 text-vampeta-gold" size={100} />
        <Quote className="absolute bottom-1/4 right-10 text-vampeta-gold rotate-180" size={100} />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-playfair font-light text-white mb-4">
            Nossos <span className="text-vampeta-gold">Clientes</span>
          </h2>
          <div className="w-16 h-px bg-vampeta-gold mx-auto mb-8"></div>
          <p className="text-lg text-white/60 font-inter font-light max-w-2xl mx-auto">
            Histórias reais de transformação e satisfação
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-vampeta-charcoal/50 backdrop-blur-sm border border-vampeta-gold/10 rounded-3xl p-8 hover:border-vampeta-gold/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-vampeta-gold rounded-full flex items-center justify-center">
                  <Quote className="text-vampeta-black" size={16} />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-vampeta-gold fill-current" size={16} />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 font-inter font-light mb-8 leading-relaxed italic">
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
                  <h4 className="text-white font-inter font-medium">
                    {testimonial.name}
                  </h4>
                  <p className="text-vampeta-gold/80 font-inter font-light text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-vampeta-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-vampeta-gold/10">
          <div className="text-center">
            <div className="text-4xl font-playfair font-light text-vampeta-gold mb-2">5000+</div>
            <div className="text-white/60 font-inter font-light">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-playfair font-light text-vampeta-gold mb-2">4.9</div>
            <div className="text-white/60 font-inter font-light">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-playfair font-light text-vampeta-gold mb-2">98%</div>
            <div className="text-white/60 font-inter font-light">Taxa de Retorno</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernTestimonials;
