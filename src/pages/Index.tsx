/**
 * Index - Landing Page Principal
 * 
 * Landing page completa para mentoria de desenvolvimento pessoal
 * com tema astrológico e místico
 * 
 * Características:
 * - Design mobile-first, 100% responsivo
 * - Gradiente progressivo de roxo profundo → ciano claro
 * - Efeitos de paralaxe com nuvens
 * - Animações suaves e orgânicas
 * - Scroll reveal em todos os elementos
 * - CTA destacado com animação dourada
 * 
 * Seções:
 * 1. Hero - Introdução com mensagem principal
 * 2. AboutMe - Apresentação pessoal
 * 3. Benefits - 4 áreas de transformação
 * 4. BooksCarousel - Livros publicados
 * 5. TestimonialsCarousel - Depoimentos de clientes
 * 6. WhatIWillDo - Benefícios do método
 * 7. FAQ - Perguntas frequentes
 * 8. FinalCTA - Chamada final para ação
 */

import React, { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Benefits } from "@/components/Benefits";
import { BooksCarousel } from "@/components/BooksCarousel";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { WhatIWillDo } from "@/components/WhatIWillDo";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  // Ativa animações de scroll reveal
  useScrollReveal();

  // Efeito de paralaxe nas nuvens ao scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll(".parallax-clouds");
      
      parallaxElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        // Move as nuvens mais devagar que o scroll (efeito paralaxe)
        htmlEl.style.transform = `translateY(${scrolled * 0.3}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative overflow-hidden">
      {/* Todas as seções em ordem */}
      <Hero />
      <AboutMe />
      <Benefits />
      <BooksCarousel />
      <TestimonialsCarousel />
      <WhatIWillDo />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Index;
