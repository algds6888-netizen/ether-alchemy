import React from "react";
import { CosmicButton } from "./CosmicButton";

/**
 * FinalCTA - Chamada para ação final
 * 
 * Características:
 * - Reforça a proposta de valor
 * - Botão CTA destacado
 * - Gradiente final mais claro (ciano)
 * - Design minimalista e impactante
 */

export const FinalCTA = () => {
  const scrollToForm = () => {
    // TODO: Implementar scroll suave até o formulário quando for adicionado
    console.log("Scroll to form");
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradiente ciano claro final */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(190,70%,40%)] to-[hsl(188,80%,45%)]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          {/* Título final */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground">
            Sua <span className="text-accent">Transformação</span> Começa Agora
          </h2>

          {/* Descrição */}
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 leading-relaxed">
            Preencha o formulário e receba seu método personalizado. 
            Descubra o caminho para a vida que você sempre sonhou.
          </p>

          {/* Reforço de garantia */}
          <div className="mb-12 card-mystic inline-block px-8 py-4 rounded-full">
            <p className="text-lg md:text-xl text-accent font-bold">
              🔒 Você só paga após receber o método completo
            </p>
          </div>

          {/* CTA Principal */}
          <div>
            <CosmicButton onClick={scrollToForm} className="text-xl px-12 py-8">
              ✨ Quero Começar Minha Transformação
            </CosmicButton>
          </div>

          {/* Texto de confiança */}
          <p className="mt-8 text-foreground/70 text-sm md:text-base">
            Junte-se a centenas de pessoas que já transformaram suas vidas
          </p>
        </div>
      </div>
    </section>
  );
};
