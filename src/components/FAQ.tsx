import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * FAQ - Seção de perguntas frequentes
 * 
 * Características:
 * - Accordion interativo do shadcn
 * - Animações suaves de abertura/fechamento
 * - Cards translúcidos com iluminação roxa
 * - Totalmente acessível
 */

const faqData = [
  {
    question: "Como funciona o método personalizado?",
    answer: "Após você preencher o formulário com suas informações, eu realizo uma análise profunda do seu perfil energético e objetivos. Em seguida, gravo vídeos exclusivos com orientações, técnicas e rituais específicos para sua jornada. Você recebe tudo organizado e pronto para implementar.",
  },
  {
    question: "Quanto tempo leva para receber meu método?",
    answer: "O processo completo leva entre 5 a 7 dias úteis. Este tempo é necessário para garantir a qualidade e personalização total do seu material. Cada vídeo é cuidadosamente preparado pensando em você.",
  },
  {
    question: "Preciso ter conhecimento prévio em astrologia?",
    answer: "Não! O método é desenvolvido de forma didática e acessível. Mesmo sem conhecimento prévio, você conseguirá aplicar todas as técnicas e orientações. Tudo é explicado passo a passo nos vídeos.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Você só realiza o pagamento APÓS receber todo o material completo e verificar a qualidade. Primeiro você investe seu tempo no formulário, depois eu invisto meu conhecimento no seu método, e só então você decide se quer prosseguir. Sem riscos!",
  },
  {
    question: "O método funciona para qualquer pessoa?",
    answer: "Sim! O método é personalizado justamente para se adaptar ao seu perfil único, independente de idade, momento de vida ou objetivos. Já ajudei pessoas nas mais diversas situações a encontrarem clareza e transformação.",
  },
  {
    question: "Terei suporte após receber o método?",
    answer: "Sim! Você terá um canal direto comigo para tirar dúvidas durante 30 dias após receber seu material. Estou comprometida com sua transformação real.",
  },
];

export const FAQ = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradiente ciano claro */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(200,60%,35%)] to-[hsl(190,70%,40%)]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Título da seção */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Tira-Dúvidas Sobre o <span className="text-accent">Método</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Respostas para as perguntas mais comuns
          </p>
        </div>

        {/* Accordion de perguntas */}
        <div className="max-w-3xl mx-auto scroll-reveal">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-mystic rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-accent transition-colors py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
