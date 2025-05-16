import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
const AboutUs = () => {
  return <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-amber-500/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img alt="Bonés estilosos" className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]" src="https://i.pinimg.com/736x/30/88/2a/30882a3e556a1b46e29ae28d50ce88e8.jpg" />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-black rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Qualidade</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Estilo</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">2025</div>
                <div className="text-sm text-gray-600">Tendência em bonés</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-amber-500/10 text-amber-700 font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              A&M Boné & Cia: Qualidade e estilo para você
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              A A&M Boné & Cia é uma loja online de bonés localizada na cidade de Boa Vista, Roraima. 
              Aqui você encontra bonés originais com qualidade, conforto e estilo, incluindo bonés Country e Dad Hat.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              Nossa equipe está comprometida em oferecer os melhores produtos, com preços acessíveis tanto para 
              atacado quanto para varejo, garantindo que você encontre o boné perfeito para completar seu visual.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
                <div className="bg-amber-500/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-amber-700" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Bonés Originais</h4>
                  <p className="text-gray-600">Produtos de alta qualidade e durabilidade</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.5s'
            }}>
                <div className="bg-amber-500/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-amber-700" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Atacado e Varejo</h4>
                  <p className="text-gray-600">Preços especiais para compras em quantidade</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>
                <div className="bg-amber-500/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-amber-700" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Envio para Todo Brasil</h4>
                  <p className="text-gray-600">Entregamos em qualquer lugar do país</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="bg-black hover:bg-neutral-800 text-amber-400 px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" style={{
            animationDelay: '0.7s'
          }}>
              <span>Entre em Contato</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;