import React from "react";
import { motion } from "framer-motion";

interface EthicsProps {
  onBackClick: () => void;
}

const Ethics: React.FC<EthicsProps> = ({ onBackClick }) => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-20 pt-32 selection:bg-[#4a0404] selection:text-white">
      <section className="px-6 mb-12">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBackClick}
            className="flex items-center space-x-3 bordeaux-text hover:text-gold transition-colors mb-12 group"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-[10px] tracking-[0.3em] font-classic uppercase">
              Voltar ao Início
            </span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif-luxury text-4xl md:text-6xl bordeaux-text mb-8 leading-[1.1]">
              Código de Ética e Conduta
            </h1>
            <p className="text-slate-500 font-classic text-[10px] tracking-widest uppercase mb-12">
              Última atualização: Março de 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6">
        <article className="max-w-4xl mx-auto">
          <div className="prose prose-slate max-w-none font-light text-slate-700 leading-[1.8] space-y-8">
            <p className="text-lg italic bordeaux-text border-l-4 gold-border pl-8 mb-12">
              "A advocacia não é apenas uma profissão, mas um múnus público
              exercido com integridade, sigilo e respeito incondicional à
              justiça."
            </p>

            <h2 className="font-serif-luxury text-3xl bordeaux-text pt-8">
              1. Compromisso Ético e Institucional
            </h2>
            <p>
              O escritório Nathalie Almeida Advocacia pauta sua atuação pelo
              estrito cumprimento do Estatuto da Advocacia e do Código de Ética
              e Disciplina da OAB. Nossa conduta é guiada pela transparência,
              lealdade e pela busca técnica da melhor solução jurídica, sempre
              preservando a dignidade da profissão.
            </p>

            <h2 className="font-serif-luxury text-3xl bordeaux-text pt-8">
              2. Sigilo Profissional e Proteção de Dados
            </h2>
            <p>
              O sigilo profissional é a pedra angular da nossa relação com o
              cliente. Todas as informações e documentos compartilhados conosco
              gozam de proteção absoluta, sendo preservados sob segredo
              profissional (Art. 7º, XIX do Estatuto da OAB) e tratados em
              conformidade com a Lei Geral de Proteção de Dados (LGPD),
              garantindo a máxima confidencialidade.
            </p>

            <h2 className="font-serif-luxury text-3xl bordeaux-text pt-8">
              3. Publicidade Jurídica e Informação
            </h2>
            <p>
              Em observância ao Provimento 205/21 da OAB, nossa comunicação
              digital tem caráter meramente informativo, educativo e
              ilustrativo. Não utilizamos nossos canais para captação indevida
              de clientela ou mercantilização da advocacia. O conteúdo
              compartilhado visa o esclarecimento de direitos e o fomento da
              cidadania.
            </p>

            <h2 className="font-serif-luxury text-3xl bordeaux-text pt-8">
              4. Conflito de Interesses e Independência
            </h2>
            <p>
              Mantemos protocolos rigorosos para identificação de potenciais
              conflitos de interesses. Não aceitamos causas que possam
              comprometer nossa independência técnica ou que colidam com os
              interesses de clientes já atendidos, garantindo total isenção e
              fidelidade ao constituinte.
            </p>

            <h2 className="font-serif-luxury text-3xl bordeaux-text pt-8">
              5. Transparência, Honorários e Contratação
            </h2>
            <p>
              Toda prestação de serviços é formalizada por contrato escrito,
              detalhando o escopo do trabalho e as responsabilidades das partes.
              A fixação de honorários respeita os critérios de moderação,
              complexidade da causa e os parâmetros estabelecidos pela Tabela de
              Honorários da OAB, vedando-se qualquer prática de aviltamento.
            </p>

            <h2 className="font-serif-luxury text-3xl bordeaux-text pt-8">
              6. Responsabilidade Social e Pro Bono
            </h2>
            <p>
              Reconhecemos a função social da advocacia. Dedicamos parte de
              nossa expertise ao fomento da educação jurídica e, eventualmente,
              à advocacia pro bono em favor de instituições sociais ou pessoas
              hipossuficientes, contribuindo para uma sociedade mais justa e
              consciente.
            </p>

            <div className="mt-16 p-8 bg-slate-50 border border-slate-100 italic text-sm text-center">
              <h3 className="font-classic text-[11px] tracking-widest uppercase bordeaux-text mb-4">
                Canal de Integridade
              </h3>
              <p className="mb-4">
                Para dúvidas sobre nossa conduta, sugestões ou para reportar
                qualquer desconformidade com este Código, entre em contato
                diretamente com nossa gestão através do canal exclusivo:
              </p>
              <span className="bordeaux-text font-medium">
                adv.nathalie.ac@gmail.com
              </span>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Ethics;
