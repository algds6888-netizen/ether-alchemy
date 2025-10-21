import React from "react";
import { CosmicButton } from "./CosmicButton";
import heroBackground from "@/assets/hero-cosmic-bg.jpg";
import cloudsParallax from "@/assets/clouds-parallax.png";

/**
 * Hero - Seção de introdução com mensagem principal
 * 
 * Características:
 * - Background cósmico com imagem hero
 * - Efeito de paralaxe com nuvens
 * - Gradiente animado
 * - CTA principal destacado
 * - Totalmente responsivo (mobile-first)
 */

export const Hero = () => {
  const scrollToForm = () => {
    // TODO: Implementar scroll suave até o formulário quando for adicionado
    console.log("Scroll to form");
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Efeito paralaxe no background
      }}
    >
      {/* Overlay gradiente para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />

      {/* Nuvens com paralaxe - movem-se com o scroll */}
      <div
        className="parallax-clouds"
        style={{
          backgroundImage: `url(${cloudsParallax})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Título principal - Fonte mística Cinzel Decorative */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground animate-fade-in">
          Descubra Seu{" "}
          <span className="text-accent">Propósito Interior</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-foreground/90 max-w-3xl mx-auto animate-fade-in">
          Transforme sua vida com mentoria personalizada guiada por autoconhecimento profundo
        </p>

        {/* Descrição */}
        <p className="text-base md:text-lg mb-12 text-foreground/80 max-w-2xl mx-auto animate-fade-in">
          Receba um método exclusivo em vídeo, criado especialmente para você, 
          alinhando suas energias com seus objetivos de vida.
        </p>

        {/* CTA Principal com animação dourada */}
        <div className="animate-slide-up">
          <CosmicButton onClick={scrollToForm}>
            ✨ Quero Meu Método Personalizado
          </CosmicButton>
        </div>

        {/* Badge de garantia */}
        <p className="mt-8 text-sm md:text-base text-accent font-medium">
          🔒 Você só paga após receber seu método completo
        </p>
      </div>
    </section>
  );
};
