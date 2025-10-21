import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

/**
 * TestimonialsCarousel - Carrossel de depoimentos
 * 
 * Características:
 * - Cartões translúcidos com bordas iluminadas
 * - Navegação por setas e indicadores
 * - Animação de fade-up na entrada
 * - Design emocional e inspirador
 */

const testimonialsData = [
  {
    name: "Maria Silva",
    testimonial: "O método transformou completamente minha relação com o dinheiro. Hoje tenho abundância e paz financeira que nunca imaginei possível.",
    rating: 5,
  },
  {
    name: "João Santos",
    testimonial: "Finalmente encontrei clareza mental e emocional. As técnicas me ajudaram a superar traumas antigos e construir relacionamentos saudáveis.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    testimonial: "Minha vida familiar mudou radicalmente. Consegui equilibrar carreira, família e saúde de forma harmoniosa. Gratidão eterna!",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    testimonial: "O autoconhecimento que adquiri foi a chave para desbloquear meu verdadeiro potencial. Recomendo de coração!",
    rating: 5,
  },
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(250,60%,25%)] to-[hsl(240,60%,28%)]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Título da seção */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Testemunhos de <span className="text-accent">Vitória e Superação</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas
          </p>
        </div>

        {/* Card do depoimento */}
        <div className="relative max-w-3xl mx-auto">
          {/* Setas de navegação */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full card-mystic hover:bg-accent/20 transition-all"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full card-mystic hover:bg-accent/20 transition-all"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          </button>

          {/* Conteúdo do depoimento com animação */}
          <div className="card-mystic p-8 md:p-12 rounded-2xl animate-fade-in">
            {/* Estrelas de avaliação */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>

            {/* Texto do depoimento */}
            <blockquote className="text-xl md:text-2xl text-foreground/90 text-center mb-8 leading-relaxed">
              "{currentTestimonial.testimonial}"
            </blockquote>

            {/* Nome do depoente */}
            <p className="text-lg text-accent font-medium text-center">
              — {currentTestimonial.name}
            </p>
          </div>

          {/* Indicadores de posição */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-foreground/30 hover:bg-foreground/50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
