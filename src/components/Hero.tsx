
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-black to-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/1939105094828012.jpeg')] bg-cover bg-center opacity-5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="flex justify-center mb-8 animate-fade-in" style={{animationDelay: '0s'}}>
            <img 
              src="/lovable-uploads/dbaaa598-5dd5-4ac8-837b-56b5f9c0cb7e.png" 
              alt="A&M Boné & Cia" 
              className="h-32 md:h-40"
            />
          </div>
          
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6 animate-fade-in`} style={{
          animationDelay: '0.1s'
          }}>
            Sua loja online de bonés
          </h1>
          
          <p className="text-lg text-amber-200 mb-10 animate-fade-in" style={{
          animationDelay: '0.2s'
          }}>
            Bonés originais, de qualidade, conforto e estilo. Country e Dad Hat - atacado e varejista mais completa da cidade.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
          animationDelay: '0.3s'
          }}>
            <a href="https://wa.me/5595984163641?text=Olá! Gostaria de ver os bonés disponíveis" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-bold">
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
              <span>Comprar agora</span>
            </a>
            <a href="#gallery" className="bg-transparent hover:bg-white/10 border border-amber-400 text-amber-400 px-6 py-3 rounded-md transition-all flex items-center justify-center">
              Ver coleção
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
