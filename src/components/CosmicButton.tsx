import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * CosmicButton - Botão CTA principal com animação dourada interna
 * 
 * Características:
 * - Animação de brilho dourado passando por dentro ao hover
 * - Pulso suave contínuo
 * - Design destacado para conversão
 * 
 * Props:
 * - children: conteúdo do botão
 * - className: classes adicionais
 * - onClick: função ao clicar
 */

interface CosmicButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CosmicButton = ({ children, className, onClick }: CosmicButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        // Layout e tamanho
        "px-8 py-6 text-lg font-bold rounded-full",
        // Cores - fundo gradiente dourado
        "bg-gradient-golden text-background",
        // Animação de brilho dourado interno
        "golden-glow animate-pulse-golden",
        // Transição suave
        "transition-all duration-300",
        // Hover - aumenta levemente
        "hover:scale-105",
        // Sombra dramática
        "shadow-lg hover:shadow-2xl",
        className
      )}
    >
      {children}
    </Button>
  );
};
