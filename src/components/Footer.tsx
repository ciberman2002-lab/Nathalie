import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-slate-100 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <h2 className="font-classic text-lg bordeaux-text tracking-widest mb-4">
            NATHALIE ALMEIDA
          </h2>
          <p className="text-[9px] text-slate-400 tracking-[0.2em] uppercase mb-6 italic">
            Advocacia de Prestígio
          </p>
          <div className="flex space-x-4">
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-[#c5a028] transition-colors cursor-pointer group">
              <span className="text-[10px] bordeaux-text group-hover:text-[#c5a028]">
                In
              </span>
            </div>
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-[#c5a028] transition-colors cursor-pointer group">
              <span className="text-[10px] bordeaux-text group-hover:text-[#c5a028]">
                Ig
              </span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-classic text-[10px] tracking-[0.3em] uppercase bordeaux-text mb-6">
            Localização
          </h4>
          <p className="text-xs text-slate-500 leading-loose">
            Atendimento Presencial e Digital <br />
            Principais Centros Jurídicos <br />
            Presidente Dutra, BA
          </p>
        </div>

        <div>
          <h4 className="font-classic text-[10px] tracking-[0.3em] uppercase bordeaux-text mb-6">
            Expertise
          </h4>
          <p className="text-xs text-slate-500 leading-loose">
            Direito do Trabalho <br />
            Direito das Sucessões <br />
            Advocacia Extrajudicial
          </p>
        </div>

        <div>
          <h4 className="font-classic text-[10px] tracking-[0.3em] uppercase bordeaux-text mb-6">
            Contato
          </h4>
          <p className="text-xs text-slate-500 leading-loose">
            +55 74 99804-3491 <br />
            nathalie@almeida.adv.br <br />
            Agendamentos via WhatsApp
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-20 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-[9px] text-slate-400 tracking-[0.1em] uppercase text-center md:text-left space-y-4 md:space-y-0">
        <div>© 2026 Nathalie Almeida Advocacia | OAB/BA 88.476</div>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <a href="#" className="hover:text-[#c5a028] transition-colors">
            Privacidade (LGPD)
          </a>
          <a href="#" className="hover:text-[#c5a028] transition-colors">
            Código de Ética OAB
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
