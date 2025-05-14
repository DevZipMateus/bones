
import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Placeholder hat images - in a real scenario, these would be replaced with actual hat images
const hatImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=500", alt: "Boné Country Preto" },
  { id: 2, src: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=500", alt: "Boné Dad Hat Azul" },
  { id: 3, src: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=500", alt: "Boné Country Marrom" },
  { id: 4, src: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?q=80&w=500", alt: "Boné Dad Hat Vermelho" },
  { id: 5, src: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=500", alt: "Boné Country Verde" },
  { id: 6, src: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=500", alt: "Boné Dad Hat Preto" },
  { id: 7, src: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=500", alt: "Boné Country Azul" },
  { id: 8, src: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=500", alt: "Boné Dad Hat Marrom" },
  { id: 9, src: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?q=80&w=500", alt: "Boné Country Vermelho" },
  { id: 10, src: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=500", alt: "Boné Dad Hat Verde" },
  { id: 11, src: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=500", alt: "Boné Country Preto" },
  { id: 12, src: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=500", alt: "Boné Dad Hat Azul" },
  { id: 13, src: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=500", alt: "Boné Country Marrom" },
  { id: 14, src: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=500", alt: "Boné Dad Hat Vermelho" },
  { id: 15, src: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?q=80&w=500", alt: "Boné Country Verde" },
  { id: 16, src: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=500", alt: "Boné Dad Hat Preto" },
  { id: 17, src: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=500", alt: "Boné Country Azul" },
  { id: 18, src: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=500", alt: "Boné Dad Hat Marrom" },
  { id: 19, src: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=500", alt: "Boné Country Vermelho" },
  { id: 20, src: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=500", alt: "Boné Dad Hat Verde" },
  { id: 21, src: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?q=80&w=500", alt: "Boné Country Preto" },
  { id: 22, src: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=500", alt: "Boné Dad Hat Azul" },
  { id: 23, src: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=500", alt: "Boné Country Marrom" },
  { id: 24, src: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=500", alt: "Boné Dad Hat Vermelho" },
  { id: 25, src: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=500", alt: "Boné Country Verde" },
  { id: 26, src: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=500", alt: "Boné Dad Hat Preto" },
];

const ITEMS_PER_PAGE = 8;

const HatsGallery = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string }>(null);
  
  const pageCount = Math.ceil(hatImages.length / ITEMS_PER_PAGE);
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };
  
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };
  
  const currentImages = hatImages.slice(
    currentPage * ITEMS_PER_PAGE, 
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <section id="gallery" className="section bg-neutral-50 py-16">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossa Coleção
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Bonés Country e Dad Hat
          </h2>
          <p className="text-gray-600 text-lg">
            Conheça nossa variedade de bonés originais, com qualidade, conforto e estilo.
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentImages.map((image) => (
            <div 
              key={image.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer animate-fade-in"
              onClick={() => setSelectedImage(image)}
              style={{ animationDelay: `${image.id * 0.05}s` }}
            >
              <div className="relative h-60 w-full">
                <AspectRatio ratio={1} className="bg-neutral-100">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </AspectRatio>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{image.alt}</h3>
                <p className="text-amber-600 font-medium mt-1">R$ 50,00</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        {pageCount > 1 && (
          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={handlePrevPage}
              className="p-2 rounded-full bg-gray-100 hover:bg-corporate-blue/10 text-gray-600 hover:text-corporate-blue transition-colors duration-300"
              aria-label="Página anterior"
            >
              <ArrowLeft size={20} />
            </button>
            
            {/* Page Indicator */}
            <div className="flex items-center space-x-2">
              {Array.from({ length: pageCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentPage === index ? 'bg-corporate-blue w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para página ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNextPage}
              className="p-2 rounded-full bg-gray-100 hover:bg-corporate-blue/10 text-gray-600 hover:text-corporate-blue transition-colors duration-300"
              aria-label="Próxima página"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        )}
        
        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-3xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 bg-black/50 rounded-full p-1 text-white hover:bg-black transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <ArrowRight className="rotate-45" size={20} />
              </button>
              <div className="p-4 bg-white">
                <img 
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>
              <div className="p-4 border-t">
                <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
                <p className="text-amber-600 font-bold text-xl mt-2">R$ 50,00</p>
                <div className="mt-4 flex justify-end">
                  <a 
                    href={`https://wa.me/5595984163641?text=Olá! Estou interessado no ${selectedImage.alt}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-amber-400 px-6 py-2 rounded-md hover:bg-neutral-800 transition-colors"
                  >
                    Comprar agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/5595984163641" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-neutral-800 text-amber-400 px-8 py-4 rounded-md transition-all inline-flex items-center gap-2 font-bold text-lg"
          >
            <span>Ver todos os modelos</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HatsGallery;
