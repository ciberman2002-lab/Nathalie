import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Como o planejamento sucessório evita conflitos familiares?",
    answer:
      "Através de instrumentos como a Holding Familiar e o Testamento, definimos a partilha em vida. Isso reduz drasticamente a chance de litígios judiciais, além de minimizar custos com impostos (ITCMD) e honorários de inventários morosos.",
  },
  {
    question:
      "É possível realizar inventários e divórcios de forma rápida em cartório?",
    answer:
      "Sim, através da via extrajudicial. Desde que haja consenso entre as partes e não existam herdeiros menores ou incapazes, o processo pode ser finalizado em poucos dias, garantindo celeridade e total discrição patrimonial.",
  },
  {
    question: "Quais são as vantagens do compliance trabalhista para empresas?",
    answer:
      "O compliance atua na prevenção. Realizamos auditorias em contratos e rotinas para mitigar riscos de passivos judiciais milionários, garantindo que a empresa opere com segurança jurídica e proteção ao patrimônio dos sócios.",
  },
  {
    question: "Como funciona a regularização de imóveis via extrajudicial?",
    answer:
      "Muitos casos de usucapião ou retificação de registros podem ser resolvidos diretamente no Cartório de Registro de Imóveis. É uma solução muito mais ágil que o processo judicial tradicional para garantir a titularidade do bem.",
  },
  {
    question: "Como proteger meus bens pessoais de dívidas da minha empresa?",
    answer:
      "Utilizamos estratégias de blindagem patrimonial ética, estabelecendo uma separação clara entre os ativos da pessoa física e jurídica. Isso é feito através de estruturas societárias sólidas, sempre dentro da legalidade e boa-fé.",
  },
  {
    question: "Acordos extrajudiciais no Direito do Trabalho são seguros?",
    answer:
      "Sim, a Reforma Trabalhista trouxe segurança para a homologação de acordos extrajudiciais perante a Justiça do Trabalho. É uma forma excelente de encerrar vínculos sem a incerteza de um processo longo e custoso.",
  },
];

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-8 flex justify-between items-center text-left group transition-all"
      >
        <span
          className={`font-classic text-[11px] md:text-[13px] tracking-[0.2em] uppercase transition-colors duration-300 ${isOpen ? "gold-text" : "text-white group-hover:text-[#e8d082]"}`}
        >
          {question}
        </span>
        <span
          className={`transform transition-transform duration-500 text-gold ${isOpen ? "rotate-180" : ""}`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-white/60 text-sm leading-relaxed font-light max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-6 bordeaux-bg text-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[0.5em] gold-text uppercase block mb-4 font-classic">
            Esclarecimentos Jurídicos
          </span>
          <h2 className="font-serif-luxury text-4xl md:text-5xl mb-6">
            Perguntas Frequentes
          </h2>
          <div className="ornament-line opacity-20" />
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-8 font-classic">
            Ainda possui dúvidas específicas?
          </p>
          <a
            href="https://wa.me/5511900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 border border-[#c5a028] text-[#e8d082] font-classic text-[10px] tracking-[0.3em] uppercase hover:bg-[#c5a028] hover:text-white transition-all duration-500"
          >
            Consultoria Personalizada
          </a>
        </div>
      </div>

      <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden xl:block">
        <span className="text-[180px] font-classic rotate-90 inline-block text-white">
          LEX
        </span>
      </div>
    </section>
  );
};

export default FAQ;
