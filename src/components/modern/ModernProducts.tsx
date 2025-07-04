
import { ShoppingBag, Star, Truck, Shield } from 'lucide-react';

const ModernProducts = () => {
  const products = [
    {
      id: 1,
      name: "Pomada Modeladora Premium",
      description: "Fixação forte com brilho natural para penteados sofisticados",
      price: "89",
      originalPrice: "120",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
      rating: 4.9,
      category: "Modelador"
    },
    {
      id: 2,
      name: "Shampoo Revitalizante",
      description: "Fórmula exclusiva para cabelos masculinos com ingredientes naturais",
      price: "65",
      originalPrice: "85",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
      rating: 4.8,
      category: "Cuidados"
    },
    {
      id: 3,
      name: "Óleo para Barba Artesanal",
      description: "Blend exclusivo de óleos essenciais para nutrição e brilho",
      price: "75",
      originalPrice: "95",
      image: "https://images.unsplash.com/photo-1595348020949-87cdfbb44174?q=80&w=800&auto=format&fit=crop",
      rating: 5.0,
      category: "Barba"
    },
    {
      id: 4,
      name: "Cera Texturizante Gold",
      description: "Textura matte com fixação flexível para looks naturais",
      price: "95",
      originalPrice: "130",
      image: "https://images.unsplash.com/photo-1619451334792-150d723e8096?q=80&w=800&auto=format&fit=crop",
      rating: 4.7,
      category: "Modelador"
    },
    {
      id: 5,
      name: "Kit Completo Vampeta",
      description: "Conjunto premium com todos os produtos essenciais",
      price: "280",
      originalPrice: "390",
      image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=800&auto=format&fit=crop",
      rating: 4.9,
      category: "Kit Completo"
    },
    {
      id: 6,
      name: "Spray Finalizador",
      description: "Fixação profissional com proteção térmica e UV",
      price: "55",
      originalPrice: "75",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
      rating: 4.6,
      category: "Finalizador"
    }
  ];

  return (
    <section id="products" className="py-32 bg-vampeta-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-vampeta-gold rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-vampeta-gold rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-vampeta-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-playfair font-light text-white mb-4">
              Produtos <span className="text-vampeta-gold">Premium</span>
            </h2>
            <div className="w-24 h-px bg-vampeta-gold mx-auto"></div>
          </div>
          <p className="text-lg text-white/60 font-inter font-light mt-8 max-w-2xl mx-auto">
            Produtos profissionais selecionados especialmente para o cuidado masculino
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-vampeta-charcoal/80 backdrop-blur-sm border border-vampeta-gold/10 rounded-3xl overflow-hidden hover:border-vampeta-gold/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vampeta-black/80 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-vampeta-gold/90 text-vampeta-black px-3 py-1 rounded-full text-xs font-inter font-medium">
                    {product.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-vampeta-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 text-vampeta-gold fill-vampeta-gold" />
                  <span className="text-white text-xs font-inter">{product.rating}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-playfair font-medium text-white mb-2">
                  {product.name}
                </h3>
                
                <p className="text-white/60 font-inter font-light mb-4 leading-relaxed text-sm">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-playfair font-light text-vampeta-gold">
                    R$ {product.price}
                  </span>
                  <span className="text-sm text-white/40 font-inter line-through">
                    R$ {product.originalPrice}
                  </span>
                </div>

                {/* Buy Button */}
                <button className="w-full bg-vampeta-gold text-vampeta-black py-3 rounded-full font-inter font-medium hover:bg-vampeta-lightGold transition-all duration-300 flex items-center justify-center gap-2">
                  <ShoppingBag size={16} />
                  Comprar Agora
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-vampeta-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-vampeta-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Truck className="text-vampeta-gold" size={24} />
            </div>
            <h4 className="text-lg font-playfair font-medium text-white mb-2">Entrega Rápida</h4>
            <p className="text-white/60 font-inter text-sm">Receba em casa em até 24h em São Paulo</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-vampeta-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="text-vampeta-gold" size={24} />
            </div>
            <h4 className="text-lg font-playfair font-medium text-white mb-2">Garantia Premium</h4>
            <p className="text-white/60 font-inter text-sm">30 dias para troca ou devolução</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-vampeta-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="text-vampeta-gold" size={24} />
            </div>
            <h4 className="text-lg font-playfair font-medium text-white mb-2">Produtos Exclusivos</h4>
            <p className="text-white/60 font-inter text-sm">Selecionados pelos nossos barbeiros</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernProducts;
