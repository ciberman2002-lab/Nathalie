import React from "react";
import { motion } from "framer-motion";

interface PrivacyProps {
  onBackClick: () => void;
}

const Privacy: React.FC<PrivacyProps> = ({ onBackClick }) => {
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
              Política de Privacidade e Proteção de Dados Pessoais
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
              Para a Dra. Nathalie Almeida de Carvalho, a privacidade e a
              proteção dos seus dados pessoais são prioridade. Esta Política
              descreve como coletamos, utilizamos e protegemos suas informações,
              em conformidade com a Lei Geral de Proteção de Dados (Lei nº
              13.709/18) e as normas éticas da OAB.
            </p>

            <h2 className="font-serif-luxury text-3xl bordeaux-text pt-8">
              1. Identificação do Controlador
            </h2>
            <p>
              O responsável pelo tratamento dos seus dados pessoais é Nathalie
              Almeida de Carvalho, inscrita no CPF sob o nº 863.283.905-56, com
              sede profissional em Presidente Dutra, BA.
            </p>

            <h2 className="font-serif-luxury text-3xl bordeaux-text pt-8">
              2. Coleta de Dados e Finalidade
            </h2>
            <p>
              Tratamos seus dados apenas para finalidades legítimas e
              específicas:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Dados de Contato:</strong> Nome, e-mail e telefone,
                utilizados para responder a consultas iniciadas por você ou
                enviar informativos jurídicos (quando autorizado).
              </li>
              <li>
                <strong>Dados Jurídicos:</strong> Informações necessárias para a
                prestação de serviços advocatícios, consultoria ou representação
                em processos judiciais e administrativos.
              </li>
              <li>
                <strong>Base Legal:</strong> O tratamento fundamenta-se na
                execução de contrato, no cumprimento de obrigação legal e no
                exercício regular de direitos em processos (Art. 7º, II, V e VI
                da LGPD).
              </li>
            </ul>

            <h2 className="font-serif-luxury text-3xl bordeaux-text pt-8">
              3. Sigilo Profissional e Segurança
            </h2>
            <p>
              Além da proteção legal da LGPD, os dados compartilhados conosco
              estão resguardados pelo Sigilo Profissional, conforme o Estatuto
              da Advocacia e o Código de Ética e Disciplina da OAB. Adotamos
              protocolos de segurança digital e física para prevenir acessos não
              autorizados, perda ou alteração de dados.
            </p>

            <h2 className="font-serif-luxury text-3xl bordeaux-text pt-8">
              4. Política de Cookies
            </h2>
            <p>
              Utilizamos cookies para melhorar sua experiência de navegação.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cookies Necessários:</strong> Essenciais para o
                funcionamento básico do site.
              </li>
              <li>
                <strong>Cookies de Desempenho/Analíticos:</strong> (Ex: Google
                Analytics) Coletam informações anônimas sobre como os visitantes
                interagem com o site, sem identificar indivíduos.
              </li>
              <li>
                <strong>Gestão de Cookies:</strong> Você pode configurar seu
                navegador para recusar cookies, mas isso pode afetar a
                funcionalidade de algumas áreas do site.
              </li>
            </ul>

            <h2 className="font-serif-luxury text-3xl bordeaux-text pt-8">
              5. Compartilhamento de Dados
            </h2>
            <p>
              Não comercializamos dados pessoais. O compartilhamento ocorre
              apenas quando estritamente necessário para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Protocolos em tribunais e órgãos públicos;</li>
              <li>
                Parceiros técnicos (sistemas de gestão jurídica ou provedores de
                nuvem) que garantam níveis adequados de proteção;
              </li>
              <li>Cumprimento de ordens judiciais.</li>
            </ul>

            <h2 className="font-serif-luxury text-3xl bordeaux-text pt-8">
              6. Seus Direitos
            </h2>
            <p>
              Você possui o direito de confirmar a existência do tratamento,
              acessar, corrigir, anonimizar ou solicitar a exclusão de seus
              dados (desde que não haja obrigação legal de retenção para fins de
              processo judicial).
            </p>

            <h2 className="font-serif-luxury text-3xl bordeaux-text pt-8">
              7. Canal de Contato (Encarregado/DPO)
            </h2>
            <p>
              Para exercer seus direitos ou tirar dúvidas sobre como seus dados
              são tratados, entre em contato com nosso Encarregado de Proteção
              de Dados:
            </p>
            <div className="mt-8 p-8 bg-slate-50 border border-slate-100 italic text-sm">
              <p>
                <strong>Nome:</strong> Dra. Nathalie Almeida de Carvalho
              </p>
              <p>
                <strong>E-mail:</strong>{" "}
                <span className="bordeaux-text font-medium">
                  adv.nathalie.ac@gmail.com
                </span>
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Privacy;
