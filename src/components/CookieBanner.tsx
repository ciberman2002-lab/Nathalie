
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    functional: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', 'none');
    setShowBanner(false);
    setShowModal(false);
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && !showModal && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-6 right-6 z-[60] flex flex-col md:flex-row items-center justify-between p-6 bg-[#fdfbf7] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t-2 border-[#c5a028] max-w-7xl mx-auto"
          >
            <div className="mb-6 md:mb-0 md:mr-8 text-left">
              <h4 className="font-classic text-[10px] tracking-[0.2em] uppercase bordeaux-text mb-2">Transparência & Privacidade</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed max-w-2xl">
                Em conformidade com a LGPD e o Provimento 205/2021 da CFOAB, utilizamos cookies para garantir a funcionalidade técnica e analisar o tráfego de forma anônima. Sua privacidade é tratada com o rigor do sigilo profissional.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 w-full md:w-auto">
              <button 
                onClick={() => setShowModal(true)}
                className="flex-1 md:flex-none px-4 py-2.5 text-[9px] font-classic tracking-widest uppercase border border-slate-200 text-slate-500 hover:bg-white transition-all"
              >
                Configurar
              </button>
              <button 
                onClick={handleRejectAll}
                className="flex-1 md:flex-none px-4 py-2.5 text-[9px] font-classic tracking-widest uppercase border border-slate-200 text-slate-500 hover:bg-white transition-all"
              >
                Recusar
              </button>
              <button 
                onClick={handleAcceptAll}
                className="w-full md:w-auto px-8 py-2.5 text-[9px] font-classic tracking-widest uppercase bordeaux-bg text-white hover:bg-black transition-all"
              >
                Aceitar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#fdfbf7] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-[#c5a028]/20"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <span className="text-[9px] tracking-[0.4em] gold-text uppercase block mb-2 font-classic">Gestão de Consentimento</span>
                    <h2 className="font-serif-luxury text-3xl bordeaux-text">Preferências de Cookies</h2>
                  </div>
                  <button onClick={() => setShowModal(false)} className="bordeaux-text opacity-40 hover:opacity-100 transition-opacity">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-10 pb-8 border-b border-slate-100">
                  Conforme as diretrizes de ética e transparência da advocacia (Provimento 205/21), informamos que o tratamento de seus dados é restrito às finalidades abaixo, prezando pela sobriedade e segurança da sua navegação.
                </p>

                <div className="space-y-8">
                  {/* Necessários */}
                  <div className="flex items-start justify-between">
                    <div className="pr-6">
                      <h3 className="font-classic text-[11px] tracking-widest uppercase bordeaux-text mb-1">Cookies Necessários</h3>
                      <p className="text-[10px] text-slate-400 leading-relaxed">Essenciais para o funcionamento seguro e técnico do site. Não podem ser desativados.</p>
                    </div>
                    <div className="h-5 w-10 bg-slate-200 rounded-full relative flex items-center px-1">
                      <div className="h-3 w-3 bg-white rounded-full shadow-sm translate-x-5" />
                    </div>
                  </div>

                  {/* Analíticos */}
                  <div className="flex items-start justify-between">
                    <div className="pr-6">
                      <h3 className="font-classic text-[11px] tracking-widest uppercase bordeaux-text mb-1">Cookies Analíticos</h3>
                      <p className="text-[10px] text-slate-400 leading-relaxed">Permitem medir o tráfego de forma anônima para melhorar nossos informativos jurídicos.</p>
                    </div>
                    <button 
                      onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                      className={`h-5 w-10 rounded-full relative flex items-center px-1 transition-colors ${preferences.analytics ? 'bordeaux-bg' : 'bg-slate-200'}`}
                    >
                      <motion.div 
                        animate={{ x: preferences.analytics ? 20 : 0 }}
                        className="h-3 w-3 bg-white rounded-full shadow-sm" 
                      />
                    </button>
                  </div>

                  {/* Funcionais */}
                  <div className="flex items-start justify-between">
                    <div className="pr-6">
                      <h3 className="font-classic text-[11px] tracking-widest uppercase bordeaux-text mb-1">Cookies Funcionais</h3>
                      <p className="text-[10px] text-slate-400 leading-relaxed">Utilizados para lembrar suas preferências e otimizar o carregamento de conteúdos exclusivos.</p>
                    </div>
                    <button 
                      onClick={() => setPreferences(prev => ({ ...prev, functional: !prev.functional }))}
                      className={`h-5 w-10 rounded-full relative flex items-center px-1 transition-colors ${preferences.functional ? 'bordeaux-bg' : 'bg-slate-200'}`}
                    >
                      <motion.div 
                        animate={{ x: preferences.functional ? 20 : 0 }}
                        className="h-3 w-3 bg-white rounded-full shadow-sm" 
                      />
                    </button>
                  </div>
                </div>

                <div className="mt-16 flex flex-col md:flex-row gap-4">
                  <button 
                    onClick={handleAcceptAll}
                    className="flex-1 py-4 text-[10px] font-classic tracking-[0.2em] uppercase border border-[#c5a028] text-[#c5a028] hover:bg-white transition-all"
                  >
                    Aceitar Todos
                  </button>
                  <button 
                    onClick={handleSavePreferences}
                    className="flex-1 py-4 text-[10px] font-classic tracking-[0.2em] uppercase bordeaux-bg text-white hover:bg-black transition-all"
                  >
                    Salvar Preferências
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieBanner;
