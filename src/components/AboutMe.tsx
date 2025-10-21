import React from "react";
import { User } from "lucide-react";

/**
 * AboutMe - Seção de apresentação pessoal
 * 
 * Características:
 * - Espaço para foto pessoal
 * - Texto autêntico de apresentação
 * - Fundo mais claro com nuvens sutis em paralaxe
 * - Layout responsivo (foto acima no mobile, ao lado no desktop)
 */

export const AboutMe = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradiente mais claro */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(263,60%,25%)] to-[hsl(270,50%,35%)]" />

      {/* Efeito de nuvens sutis */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,_hsl(270,70%,75%)_0%,_transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Grid responsivo: coluna única no mobile, 2 colunas no desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Foto - Placeholder circular com ícone */}
            <div className="flex justify-center md:justify-end scroll-reveal">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden card-mystic">
                {/* Placeholder - será substituído por foto real */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-cosmic">
                  <User className="w-32 h-32 text-foreground/60" />
                </div>
                {/* Borda dourada decorativa */}
                <div className="absolute inset-0 rounded-full border-4 border-accent/30" />
              </div>
            </div>

            {/* Texto de apresentação */}
            <div className="text-center md:text-left scroll-reveal">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Sobre <span className="text-accent">Mim</span>
              </h2>
              
              <div className="space-y-4 text-base md:text-lg text-foreground/90">
                <p>
                  Há mais de uma década, dedico minha vida ao estudo profundo do 
                  autoconhecimento, astrologia e desenvolvimento pessoal.
                </p>
                
                <p>
                  Minha jornada começou quando percebi que cada pessoa carrega um 
                  mapa único de potenciais e desafios. Através da combinação de 
                  sabedoria ancestral e técnicas modernas, desenvolvi um método 
                  personalizado que já transformou centenas de vidas.
                </p>
                
                <p className="text-accent font-medium">
                  Minha missão é guiar você a descobrir e ativar seu verdadeiro 
                  potencial, alinhando sua energia com seus objetivos mais profundos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
