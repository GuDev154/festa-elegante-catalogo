
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ModernGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
      alt: "Corte masculino clássico",
      category: "Cortes"
    },
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2088&auto=format&fit=crop",
      alt: "Barba modelada",
      category: "Barba"
    },
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
      alt: "Interior moderno",
      category: "Ambiente"
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
      alt: "Produtos premium",
      category: "Produtos"
    },
    {
      src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=2070&auto=format&fit=crop",
      alt: "Equipamentos profissionais",
      category: "Equipamentos"
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2074&auto=format&fit=crop",
      alt: "Ambiente vintage",
      category: "Ambiente"
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-vampeta-charcoal">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-playfair font-light text-white mb-4">
            Nossa <span className="text-vampeta-gold">Galeria</span>
          </h2>
          <div className="w-16 h-px bg-vampeta-gold mx-auto mb-8"></div>
          <p className="text-lg text-white/60 font-inter font-light max-w-2xl mx-auto">
            Cada imagem conta uma história de dedicação, arte e paixão pelo que fazemos
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-vampeta-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-12 h-12 border-2 border-vampeta-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-vampeta-gold text-xl">+</span>
                  </div>
                  <h3 className="font-inter font-medium mb-1">{image.alt}</h3>
                  <p className="text-vampeta-gold text-sm font-light">{image.category}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-vampeta-gold/20 backdrop-blur-sm text-vampeta-gold px-3 py-1 rounded-full text-xs font-inter">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-vampeta-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-2xl"
              />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-vampeta-gold text-vampeta-black rounded-full flex items-center justify-center hover:bg-vampeta-lightGold transition-colors"
              >
                <X size={20} />
              </button>

              {/* Navigation */}
              {selectedImage > 0 && (
                <button
                  onClick={() => setSelectedImage(selectedImage - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-vampeta-gold/20 backdrop-blur-sm text-vampeta-gold rounded-full flex items-center justify-center hover:bg-vampeta-gold/30 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
              )}
              
              {selectedImage < images.length - 1 && (
                <button
                  onClick={() => setSelectedImage(selectedImage + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-vampeta-gold/20 backdrop-blur-sm text-vampeta-gold rounded-full flex items-center justify-center hover:bg-vampeta-gold/30 transition-colors"
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
