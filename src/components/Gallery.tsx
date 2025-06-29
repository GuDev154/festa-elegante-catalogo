
const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
      alt: "Corte masculino clássico"
    },
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2088&auto=format&fit=crop",
      alt: "Barba bem cuidada"
    },
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
      alt: "Interior da barbearia"
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
      alt: "Ambiente sofisticado"
    },
    {
      src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=2070&auto=format&fit=crop",
      alt: "Produtos premium"
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2074&auto=format&fit=crop",
      alt: "Cadeira de barbeiro vintage"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-vampeta-charcoal">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Nossa <span className="text-vampeta-gold">Galeria</span>
          </h2>
          <p className="text-xl text-white/80 font-inter max-w-2xl mx-auto">
            Conheça nosso ambiente sofisticado e veja alguns dos nossos trabalhos mais recentes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-gold transition-all duration-300"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-vampeta-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-12 h-12 bg-vampeta-gold rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-vampeta-black font-bold">+</span>
                  </div>
                  <p className="font-inter font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/70 font-inter mb-6">
            Siga-nos no Instagram para ver mais trabalhos
          </p>
          <button className="bg-vampeta-gold text-vampeta-black hover:bg-vampeta-lightGold font-inter font-semibold px-8 py-3 rounded-lg transition-colors">
            @vampetabarbearia
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
