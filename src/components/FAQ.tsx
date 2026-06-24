import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Como funciona o inventário extrajudicial em cartório?",
    answer:
      "O inventário extrajudicial é realizado por escritura pública em Cartório de Notas, quando todos os herdeiros são maiores, capazes e estão de acordo quanto à partilha dos bens. A legislação exige a participação de advogado. O procedimento observa os requisitos legais e produz efeitos jurídicos equivalentes ao inventário judicial.",
  },
  {
    question: "Quais as vantagens do planejamento sucessório para a família?",
    answer:
      "O planejamento sucessório consiste na organização prévia da transmissão do patrimônio, por meio de instrumentos previstos em lei, como testamento, doação com reserva de usufruto e constituição de holding familiar. Cada medida deve ser analisada conforme a realidade patrimonial e familiar, respeitando os limites legais e tributários aplicáveis.",
  },
  {
    question: "O acordo extrajudicial trabalhista tem validade jurídica?",
    answer:
      "Sim. Desde a Reforma Trabalhista, o acordo ganha validade jurídica total e força de sentença após a homologação do juiz. Para o setor patronal, o grande benefício é que o termo pode dar quitação geral e irrevogável ao contrato de trabalho, blindando a empresa contra processos futuros sobre o período pactuado. É obrigatório que empresa e empregado usem advogados diferentes.",
  },
  {
    question: "Como o compliance trabalhista ajuda a proteger empresas?",
    answer:
      "Compliance trabalhista é o conjunto de práticas destinadas à adequação das rotinas empresariais à legislação trabalhista. Envolve revisão de contratos, políticas internas e procedimentos operacionais, com a finalidade de identificar inconsistências e reduzir a exposição a riscos jurídicos e administrativos.",
  },
  {
    question:
      "É possível realizar divórcio e partilha de bens sem processo judicial?",
    answer:
      "O divórcio pode ser realizado em cartório, por escritura pública, quando há consenso entre as partes e inexistem filhos menores ou incapazes. Nessa hipótese, o procedimento observa os requisitos legais e possui validade jurídica, assim como o divórcio realizado judicialmente.",
  },
  {
    question: "O que é a Usucapião Extrajudicial e quando utilizá-la?",
    answer:
      "A usucapião extrajudicial é um procedimento realizado perante o Cartório de Registro de Imóveis, destinado à regularização da propriedade imobiliária quando preenchidos os requisitos legais, como posse contínua e incontestada pelo prazo previsto em lei. A viabilidade depende da análise do caso concreto e da documentação exigida.",
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
          <h2 className="font-serif-luxury text-4xl md:text-5xl mb-6 ">
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
            href="https://wa.me/5574998043491"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 border border-[#c5a028] text-[#e8d082] font-classic text-[10px] tracking-[0.3em] uppercase hover:bg-[#c5a028] hover:text-white transition-all duration-500"
          >
            Agendar Atendimento
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
