import React from "react";
import { CheckCircle2 } from "lucide-react";
import cloudsParallax from "@/assets/clouds-parallax.png";

/**
 * WhatIWillDo - Seção explicando o que será feito pelo cliente
 * 
 * Características:
 * - Efeito de paralaxe com nuvens ao fundo
 * - Gradiente mais claro (aproximando do ciano)
 * - Lista de benefícios com ícones
 * - Sensação de expansão e transcendência
 */

const features = [
  "Análise profunda do seu mapa energético e potencial único",
  "Vídeos personalizados com orientações práticas para cada área da sua vida",
  "Técnicas exclusivas de ativação de abundância e prosperidade",
  "Exercícios de autoconhecimento adaptados ao seu perfil",
  "Rituais energéticos alinhados com seus objetivos pessoais",
  "Acompanhamento completo da sua jornada de transformação",
];

export const WhatIWillDo = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradiente mais claro (transição para ciano) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(240,60%,28%)] to-[hsl(200,60%,35%)]" />

      {/* Nuvens com paralaxe - movimento sutil */}
      <div
        className="parallax-clouds"
        style={{
          backgroundImage: `url(${cloudsParallax})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Título da seção */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            O Que <span className="text-accent">Farei Por Você</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Um método completo e personalizado para sua transformação total
          </p>
        </div>

        {/* Grid de features */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 card-mystic p-6 rounded-xl scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Ícone de check dourado */}
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                
                {/* Texto do benefício */}
                <p className="text-foreground/90 leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Destaque especial */}
          <div className="mt-12 text-center card-mystic p-8 rounded-2xl scroll-reveal">
            <p className="text-xl md:text-2xl text-accent font-bold mb-4">
              ✨ Tudo isso criado EXCLUSIVAMENTE para você ✨
            </p>
            <p className="text-foreground/80 text-lg">
              Não é um curso genérico. É sua jornada única de transformação, 
              guiada por quem entende profundamente seu potencial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
