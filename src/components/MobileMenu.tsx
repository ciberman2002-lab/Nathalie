import React from "react";
import { motion } from "framer-motion";

interface MobileMenuProps {
  onClose: () => void;
  onHomeClick: () => void;
  onLinkClick: (targetId: string) => void;
  onBlogClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  onClose,
  onHomeClick,
  onLinkClick,
  onBlogClick,
}) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 bg-[#fdfbf7] z-[200] flex flex-col items-center justify-center"
    >
      {/* Botão de Fechar */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 bordeaux-text p-2"
        aria-label="Fechar Menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Ornamentos de Fundo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.11] pointer-events-none flex items-center justify-center overflow-hidden">
        <img
          src="/logo/Nathalie_Advogada_logo.png"
          alt="Nathalie Almeida Advocacia"
          className="w-auto h-[300px] object-contain select-none"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex flex-col items-center space-y-8 text-[14px] tracking-[0.4em] font-classic uppercase bordeaux-text relative z-10 w-full px-8 text-center">
        <div className="mb-12">
          <h2 className="font-classic text-xl md:text-2xl bordeaux-text tracking-[0.3em] mb-2">
            NATHALIE ALMEIDA
          </h2>
          <div className="h-[1px] w-12 bg-gold mx-auto opacity-40" />
        </div>

        <button
          onClick={() => {
            onHomeClick();
            onClose();
          }}
          className="hover:text-gold transition-colors py-2 block w-full"
        >
          Início
        </button>
        <button
          onClick={() => onLinkClick("expertise")}
          className="hover:text-gold transition-colors py-2 block w-full"
        >
          Expertise
        </button>
        <button
          onClick={() => onLinkClick("sobre")}
          className="hover:text-gold transition-colors py-2 block w-full"
        >
          Sobre
        </button>
        <button
          onClick={() => onLinkClick("insights")}
          className="hover:text-gold transition-colors py-2 block w-full"
        >
          Insights
        </button>
        <button
          onClick={() => onLinkClick("faq")}
          className="hover:text-gold transition-colors py-2 block w-full"
        >
          Faqs
        </button>

        <div className="pt-12">
          <a
            href="https://wa.me/5574998043491"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 border border-gold gold-text text-[10px] tracking-[0.3em] font-classic bg-white/50 backdrop-blur shadow-sm hover:bg-white transition-all"
          >
            Agendar Consulta
          </a>
        </div>
      </div>

      {/* Footer do Menu */}
      <div className="absolute bottom-12 text-center w-full">
        <p className="text-[9px] tracking-[0.2em] text-slate-400 uppercase font-classic">
          Dra. Nathalie Almeida | OAB/BA 88.476
        </p>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
