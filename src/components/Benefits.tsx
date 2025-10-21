import React from "react";
import { DollarSign, Heart, Sparkles, Home } from "lucide-react";

/**
 * Benefits - Seção de benefícios únicos do método
 * 
 * Características:
 * - 4 blocos representando áreas de transformação
 * - Cards translúcidos com iluminação roxa
 * - Cores temáticas intuitivas para cada área
 * - Animações de entrada com scroll reveal
 * - Grid responsivo (1 coluna mobile, 2 desktop)
 */

const benefitsData = [
  {
    icon: DollarSign,
    title: "Transformação Financeira",
    description: "Desbloqueie sua abundância interior e atraia prosperidade alinhada com seu propósito de vida.",
    color: "hsl(140, 70%, 50%)", // Verde próspero
  },
  {
    icon: Heart,
    title: "Relacionamentos Plenos",
    description: "Desenvolva conexões autênticas e amorosas, atraindo pessoas que ressoam com sua verdadeira essência.",
    color: "hsl(340, 80%, 60%)", // Rosa amoroso
  },
  {
    icon: Sparkles,
    title: "Saúde Integral do Ser",
    description: "Harmonize corpo, mente e espírito através do autoconhecimento profundo e práticas energéticas.",
    color: "hsl(190, 80%, 55%)", // Ciano vital
  },
  {
    icon: Home,
    title: "Equilíbrio Familiar & Mental",
    description: "Conquiste paz interior, controle emocional e harmonia em todas as áreas da sua vida.",
    color: "hsl(270, 70%, 65%)", // Lilás equilibrado
  },
];

export const Benefits = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradiente intermediário */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(270,50%,35%)] to-[hsl(260,60%,30%)]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Título da seção */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Conheça os <span className="text-accent">Benefícios Únicos</span> do Método
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Uma jornada completa de transformação em todas as áreas essenciais da sua vida
          </p>
        </div>

        {/* Grid de benefícios - 1 coluna mobile, 2 colunas desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefitsData.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <div
                key={index}
                className="card-mystic p-8 rounded-2xl scroll-reveal"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  borderLeftColor: benefit.color,
                  borderLeftWidth: '4px',
                }}
              >
                {/* Ícone com cor temática */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0"
                  style={{ backgroundColor: `${benefit.color}20` }}
                >
                  <Icon 
                    className="w-8 h-8" 
                    style={{ color: benefit.color }}
                  />
                </div>

                {/* Título do benefício */}
                <h3 className="text-2xl font-bold mb-4 text-foreground text-center md:text-left">
                  {benefit.title}
                </h3>

                {/* Descrição */}
                <p className="text-foreground/80 leading-relaxed text-center md:text-left">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
