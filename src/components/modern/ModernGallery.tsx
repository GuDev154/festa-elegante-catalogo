
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Instagram, ExternalLink } from 'lucide-react';

const ModernGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
      alt: "Corte masculino premium - Cliente satisfeito",
      category: "Cortes Premium",
      description: "Corte moderno com técnicas avançadas"
    },
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2088&auto=format&fit=crop",
      alt: "Barba modelada profissionalmente",
      category: "Barba & Bigode",
      description: "Modelagem precisa e acabamento impecável"
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
      alt: "Interior sofisticado da barbearia",
      category: "Ambiente",
      description: "Ambiente elegante e acolhedor"
    },
    {
      src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=2070&auto=format&fit=crop",
      alt: "Equipamentos profissionais premium",
      category: "Equipamentos",
      description: "Ferramentas de última geração"
    },
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
      alt: "Design interior moderno",
      category: "Ambiente",
      description: "Arquitetura contemporânea e funcional"
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2074&auto=format&fit=crop",
      alt: "Cadeira vintage premium",
      category: "Mobiliário",
      description: "Tradição encontra modernidade"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2070&auto=format&fit=crop",
      alt: "Produtos de cuidado masculino",
      category: "Produtos",
      description: "Linha premium de cuidados masculinos"
    },
    {
      src: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=2070&auto=format&fit=crop",
      alt: "Atendimento personalizado",
      category: "Serviços",
      description: "Experiência única para cada cliente"
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-vampeta-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-vampeta-gold rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-vampeta-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-vampeta-gold font-inter font-medium text-sm uppercase tracking-widest">Nossos Trabalhos</span>
            <div className="w-full h-px bg-vampeta-gold mt-2"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-light text-white mb-6">
            Galeria <span className="text-vampeta-gold">Premium</span>
          </h2>
          
          <p className="text-lg text-white/70 font-inter font-light max-w-3xl mx-auto leading-relaxed">
            Cada imagem representa nossa dedicação à excelência. Veja alguns dos nossos trabalhos mais recentes e descubra por que somos referência em São Paulo.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 hover:scale-105 ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              } ${index === 3 ? 'md:col-span-2' : ''}`}
              onClick={() => setSelectedImage(index)}
            >
              <div className={`aspect-square ${index === 0 ? 'lg:aspect-[2/2]' : ''} ${index === 3 ? 'md:aspect-[2/1]' : ''}`}>
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-vampeta-black/80 via-vampeta-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 border border-vampeta-gold rounded-full flex items-center justify-center">
                      <ExternalLink className="text-vampeta-gold" size={14} />
                    </div>
                    <span className="text-vampeta-gold text-xs font-inter uppercase tracking-wide">{image.category}</span>
                  </div>
                  <p className="font-inter font-light text-sm leading-relaxed">{image.description}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-vampeta-gold/90 backdrop-blur-sm text-vampeta-black px-3 py-1 rounded-full text-xs font-inter font-medium">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-white/60 font-inter font-light mb-6 text-lg">
            Acompanhe nossos trabalhos diários no Instagram
          </p>
          <a 
            href="https://instagram.com/vampetabarbearia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-vampeta-gold to-vampeta-lightGold text-vampeta-black hover:from-vampeta-lightGold hover:to-vampeta-gold font-inter font-semibold px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-gold-lg"
          >
            <Instagram size={20} />
            @vampetabarbearia
          </a>
        </div>

        {/* Enhanced Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-vampeta-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              <img 
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-gold-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-16 bg-vampeta-black/80 backdrop-blur-md text-white p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-vampeta-gold text-sm font-inter uppercase tracking-wide">
                    {images[selectedImage].category}
                  </span>
                </div>
                <p className="font-inter font-light text-sm">{images[selectedImage].description}</p>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 w-12 h-12 bg-vampeta-gold hover:bg-vampeta-lightGold text-vampeta-black rounded-full flex items-center justify-center transition-colors shadow-gold"
              >
                <X size={24} />
              </button>

              {/* Navigation */}
              {selectedImage > 0 && (
                <button
                  onClick={() => setSelectedImage(selectedImage - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-vampeta-gold/20 backdrop-blur-md text-vampeta-gold rounded-full flex items-center justify-center hover:bg-vampeta-gold/30 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
              )}
              
              {selectedImage < images.length - 1 && (
                <button
                  onClick={() => setSelectedImage(selectedImage + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-vampeta-gold/20 backdrop-blur-md text-vampeta-gold rounded-full flex items-center justify-center hover:bg-vampeta-gold/30 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModernGallery;
