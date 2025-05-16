
import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Real hat images from lovable-uploads
const hatImages = [
  { id: 1, src: "/lovable-uploads/672976642029408.jpeg", alt: "Boné Country" },
  { id: 2, src: "/lovable-uploads/1862300144561758.jpeg", alt: "Boné Dad Hat" },
  { id: 3, src: "/lovable-uploads/1934583266947780.jpeg", alt: "Boné Country Premium" },
  { id: 4, src: "/lovable-uploads/1052511813464571.jpeg", alt: "Boné Dad Hat Classic" },
  { id: 5, src: "/lovable-uploads/686070720685166.jpeg", alt: "Boné Country Special" },
  { id: 6, src: "/lovable-uploads/1699956213965913.jpeg", alt: "Boné Dad Hat Premium" },
  { id: 7, src: "/lovable-uploads/9297529937014291.jpeg", alt: "Boné Country Elite" },
  { id: 8, src: "/lovable-uploads/577118098737398.jpeg", alt: "Boné Dad Hat Comfort" },
  { id: 9, src: "/lovable-uploads/1039105094828012.jpeg", alt: "Boné Country Original" },
  { id: 10, src: "/lovable-uploads/556642347505090.jpeg", alt: "Boné Dad Hat Style" },
  { id: 11, src: "/lovable-uploads/1258760839010603.jpeg", alt: "Boné Country Deluxe" },
  { id: 12, src: "/lovable-uploads/669155292489236.jpeg", alt: "Boné Dad Hat Fashion" },
  { id: 13, src: "/lovable-uploads/1407743103980170.jpeg", alt: "Boné Country Pro" },
  { id: 14, src: "/lovable-uploads/1835669633960201.jpeg", alt: "Boné Dad Hat Urban" },
  { id: 15, src: "/lovable-uploads/1029064288753165.jpeg", alt: "Boné Country Fashion" },
  { id: 16, src: "/lovable-uploads/716127317651917.jpeg", alt: "Boné Dad Hat Modern" },
  { id: 17, src: "/lovable-uploads/3969620896623138.jpeg", alt: "Boné Country Western" },
  { id: 18, src: "/lovable-uploads/1610726109525762.jpeg", alt: "Boné Dad Hat Casual" },
  { id: 19, src: "/lovable-uploads/1610407272952132.jpeg", alt: "Boné Country Classic" },
  { id: 20, src: "/lovable-uploads/1772038437084133.jpeg", alt: "Boné Dad Hat Retro" },
  { id: 21, src: "/lovable-uploads/711342364911349.jpeg", alt: "Boné Country Comfort" },
  { id: 22, src: "/lovable-uploads/704694838635814.jpeg", alt: "Boné Dad Hat Elite" },
  { id: 23, src: "/lovable-uploads/9709495302467333.jpeg", alt: "Boné Country Limited" },
  { id: 24, src: "/lovable-uploads/2923082561205415.jpeg", alt: "Boné Dad Hat Special" },
  { id: 25, src: "/lovable-uploads/960862149306944.jpeg", alt: "Boné Country Style" },
  { id: 26, src: "/lovable-uploads/1030518952368091.jpeg", alt: "Boné Dad Hat Signature" }
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
    <section id="gallery" className="section bg-neutral-50 py-16 relative">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-amber-100 text-amber-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossa Coleção
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Bonés Country e Dad Hat
          </h2>
          <p className="text-gray-600 text-lg">
            Conheça nossa variedade de bonés originais, com qualidade, conforto e estilo.
            Clique nas imagens para ver mais detalhes.
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
              className="p-2 rounded-full bg-gray-100 hover:bg-amber-100 text-gray-600 hover:text-amber-600 transition-colors duration-300"
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
                    currentPage === index ? 'bg-amber-500 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para página ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNextPage}
              className="p-2 rounded-full bg-gray-100 hover:bg-amber-100 text-gray-600 hover:text-amber-600 transition-colors duration-300"
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
                    Comprar este boné
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/5595984163641?text=Olá! Gostaria de ver todos os modelos disponíveis" 
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
