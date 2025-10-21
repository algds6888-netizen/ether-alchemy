import { useEffect } from "react";

/**
 * useScrollReveal - Hook para animações de reveal ao scroll
 * 
 * Detecta quando elementos com classe .scroll-reveal entram no viewport
 * e adiciona a classe .revealed para ativar as animações CSS
 */

export const useScrollReveal = () => {
  useEffect(() => {
    // Configura o Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.1, // Elemento precisa estar 10% visível
        rootMargin: "0px 0px -50px 0px", // Margem inferior para trigger mais cedo
      }
    );

    // Observa todos os elementos com classe scroll-reveal
    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    // Cleanup ao desmontar
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
