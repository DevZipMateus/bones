
import React from 'react';
import { Check, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { cn } from '../lib/utils';

const plans = [
  {
    id: 1,
    name: 'Bonés Country - Varejo',
    price: '50,00',
    description: 'Perfeito para quem busca estilo country autêntico com qualidade premium.',
    features: [
      {
        text: 'Entrega em todo Brasil',
        included: true
      },
      {
        text: 'Produto original',
        included: true
      },
      {
        text: 'Diversas marcas',
        included: true
      },
      {
        text: 'Conforto garantido',
        included: true
      },
      {
        text: 'Alta durabilidade',
        included: true
      },
      {
        text: 'Frete grátis',
        included: false
      },
      {
        text: 'Desconto em quantidade',
        included: false
      }
    ],
    popular: false,
    delay: '0s',
    color: 'bg-neutral-50'
  },
  {
    id: 2,
    name: 'Bonés Dad Hat - Varejo',
    price: '50,00',
    description: 'Estilo moderno e casual, perfeito para qualquer ocasião com máximo conforto.',
    features: [
      {
        text: 'Entrega em todo Brasil',
        included: true
      },
      {
        text: 'Produto original',
        included: true
      },
      {
        text: 'Diversas cores',
        included: true
      },
      {
        text: 'Design moderno',
        included: true
      },
      {
        text: 'Ajuste perfeito',
        included: true
      },
      {
        text: 'Frete grátis',
        included: false
      },
      {
        text: 'Desconto em quantidade',
        included: false
      }
    ],
    popular: true,
    delay: '0.1s',
    color: 'bg-amber-50'
  },
  {
    id: 3,
    name: 'Atacado',
    price: '23,00',
    description: 'Ideal para revendedores e lojistas. Preço especial por unidade para compras em grande quantidade.',
    features: [
      {
        text: 'Entrega em todo Brasil',
        included: true
      },
      {
        text: 'Produto original',
        included: true
      },
      {
        text: 'Preço especial por unidade',
        included: true
      },
      {
        text: 'Suporte exclusivo',
        included: true
      },
      {
        text: 'Variedade de modelos',
        included: true
      },
      {
        text: 'Pedido mínimo: 5 unidades',
        included: true
      },
      {
        text: 'Frete grátis acima de 10 unidades',
        included: true
      }
    ],
    popular: false,
    delay: '0.2s',
    color: 'bg-neutral-50'
  }
];

const Plans = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="plans" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block bg-amber-100 text-amber-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Preços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Encontre o melhor valor para você
          </h2>
          <p className="text-neutral-600 text-lg">
            Oferecemos preços especiais tanto para clientes individuais quanto para revendedores.
          </p>
        </div>
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map(plan => (
            <div 
              key={plan.id} 
              className={cn(
                "rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in border", 
                plan.popular ? "shadow-lg border-amber-200 transform md:-translate-y-4" : "shadow-md border-neutral-200"
              )} 
              style={{animationDelay: plan.delay}}
            >
              {/* Plan Header */}
              <div className={cn("p-6 md:p-8", plan.popular ? "bg-gradient-to-br from-amber-100 to-amber-50" : plan.color)}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="bg-black text-amber-400 text-xs font-semibold px-3 py-1 rounded-full absolute top-4 right-4">
                    MAIS VENDIDO
                  </div>
                )}
                
                {/* Plan Name and Price */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-neutral-900">R$ {plan.price}</span>
                  <span className="text-neutral-600 ml-1 mb-1">/unidade</span>
                </div>
                
                {/* Description */}
                <p className="text-neutral-700 mb-6">
                  {plan.description}
                </p>
                
                {/* CTA Button */}
                <a 
                  href="https://wa.me/5595984163641" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-center py-3 px-6 rounded-lg transition-colors duration-300 w-full bg-black hover:bg-neutral-900 text-amber-400"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>Comprar Agora</span>
                  </div>
                </a>
              </div>
              
              {/* Features */}
              <div className="p-6 md:p-8 bg-white">
                <h4 className="font-semibold text-neutral-900 mb-4">O que está incluso:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className={cn(
                        "p-1 rounded-full mr-3 mt-0.5 flex-shrink-0", 
                        feature.included ? "bg-amber-100 text-amber-600" : "bg-neutral-100 text-neutral-400"
                      )}>
                        {feature.included ? <Check size={isMobile ? 14 : 16} /> : <X size={isMobile ? 14 : 16} />}
                      </div>
                      <span className={cn(
                        "text-sm", 
                        feature.included ? "text-neutral-700" : "text-neutral-400 line-through"
                      )}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Custom Plans */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">
            Necessita de um pedido personalizado?
          </p>
          <a 
            href="https://wa.me/5595984163641" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-6 py-3 bg-black hover:bg-neutral-900 text-amber-400 rounded-md transition-all duration-300 gap-2"
          >
            <span>Solicitar proposta personalizada</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;
