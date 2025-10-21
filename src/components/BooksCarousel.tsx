import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";

/**
 * BooksCarousel - Carrossel horizontal de livros
 * 
 * Características:
 * - Rolagem lateral por toque no mobile e setas no desktop
 * - Blocos translúcidos com reflexos dourados
 * - Animação suave de transição
 * - Totalmente responsivo
 */

const booksData = [
  {
    image: book1,
    title: "Caminho Interior",
    description: "Guia completo para descobrir sua essência através da introspecção guiada.",
  },
  {
    image: book2,
    title: "Alquimia da Alma",
    description: "Transforme desafios em oportunidades de crescimento espiritual profundo.",
  },
  {
    image: book3,
    title: "Despertar Consciente",
    description: "Técnicas práticas para ativar seu potencial latente e viver com propósito.",
  },
];

export const BooksCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBook = () => {
    setCurrentIndex((prev) => (prev + 1) % booksData.length);
  };

  const prevBook = () => {
    setCurrentIndex((prev) => (prev - 1 + booksData.length) % booksData.length);
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(260,60%,30%)] to-[hsl(250,60%,25%)]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Título da seção */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Meus <span className="text-accent">Livros</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Obras que complementam sua jornada de autoconhecimento
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Setas de navegação - visíveis apenas no desktop */}
          <button
            onClick={prevBook}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-12 h-12 items-center justify-center rounded-full card-mystic hover:bg-accent/20 transition-all"
            aria-label="Livro anterior"
          >
            <ChevronLeft className="w-6 h-6 text-accent" />
          </button>

          <button
            onClick={nextBook}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-12 h-12 items-center justify-center rounded-full card-mystic hover:bg-accent/20 transition-all"
            aria-label="Próximo livro"
          >
            <ChevronRight className="w-6 h-6 text-accent" />
          </button>

          {/* Container de livros com scroll horizontal */}
          <div className="overflow-x-auto md:overflow-hidden scrollbar-hide">
            <div
              className="flex transition-transform duration-500 ease-out md:justify-center"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {booksData.map((book, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-auto px-4 scroll-reveal"
                >
                  <div className="card-mystic p-8 rounded-2xl max-w-md mx-auto">
                    {/* Imagem do livro */}
                    <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Título do livro */}
                    <h3 className="text-2xl font-bold mb-4 text-foreground text-center">
                      {book.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-foreground/80 text-center leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de posição */}
          <div className="flex justify-center gap-2 mt-8">
            {booksData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-foreground/30 hover:bg-foreground/50"
                }`}
                aria-label={`Ir para livro ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
