// import React from 'react';

// const Contact: React.FC = () => {
//   return (
//     <section id="contato" className="py-24 px-6 bordeaux-bg text-white">
//       <div className="max-w-4xl mx-auto text-center">
//         <span className="text-[10px] tracking-[0.5em] gold-text uppercase block mb-4 font-classic">Atendimento VIP</span>
//         <h2 className="font-serif-luxury text-4xl mb-6">Inicie uma Conversa Privada</h2>
//         <p className="text-[#e8d082] text-sm tracking-widest uppercase font-classic mb-12">Total Confidencialidade e Sigilo Profissional</p>

//         <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
//           <div className="space-y-2">
//             <label className="text-[10px] tracking-widest uppercase font-bold text-white/50">Nome Completo</label>
//             <input
//               type="text"
//               className="w-full bg-white/5 border border-white/10 p-4 focus:border-[#c5a028] outline-none transition-colors"
//               placeholder="Ex: Dr. Alberto Ferreira"
//             />
//           </div>
//           <div className="space-y-2">
//             <label className="text-[10px] tracking-widest uppercase font-bold text-white/50">E-mail Corporativo</label>
//             <input
//               type="email"
//               className="w-full bg-white/5 border border-white/10 p-4 focus:border-[#c5a028] outline-none transition-colors"
//               placeholder="exemplo@empresa.com"
//             />
//           </div>
//           <div className="md:col-span-2 space-y-2">
//             <label className="text-[10px] tracking-widest uppercase font-bold text-white/50">Assunto</label>
//             <select className="w-full bg-white/5 border border-white/10 p-4 focus:border-[#c5a028] outline-none transition-colors">
//               <option className="text-black">Planejamento Sucessório</option>
//               <option className="text-black">Consultoria Societária</option>
//               <option className="text-black">Proteção de Ativos</option>
//               <option className="text-black">Outros Assuntos</option>
//             </select>
//           </div>
//           <div className="md:col-span-2 space-y-2">
//             <label className="text-[10px] tracking-widest uppercase font-bold text-white/50">Breve Mensagem</label>
//             <textarea
//               rows={4}
//               className="w-full bg-white/5 border border-white/10 p-4 focus:border-[#c5a028] outline-none transition-colors"
//               placeholder="Descreva brevemente sua necessidade..."
//             />
//           </div>

//           <div className="md:col-span-2 flex flex-col items-center">
//             <div className="flex items-center space-x-2 mb-6 text-xs text-white/60 font-light">
//               <input type="checkbox" className="w-4 h-4 rounded border-white/20" />
//               <span>Autorizo o tratamento dos meus dados conforme a <a href="#" className="underline gold-text">Política de Privacidade</a> (LGPD).</span>
//             </div>
//             <button className="px-16 py-5 bg-[#c5a028] text-white font-classic text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-[#4a0404] transition-all duration-500 shadow-2xl">
//               Solicitar Contato
//             </button>
//           </div>
//         </form>

//         <div className="mt-16 text-[9px] text-white/40 tracking-[0.1em] uppercase max-w-lg mx-auto leading-relaxed">
//           * Em conformidade com o Provimento 205/2021 da OAB, este canal destina-se exclusivamente ao fornecimento de informações institucionais e agendamento de consultas.
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 px-6 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
        >
          <span className="text-[10px] tracking-[0.5em] gold-text uppercase block mb-6 font-classic">
            Contato
          </span>
          <h2 className="font-serif-luxury text-4xl md:text-5xl bordeaux-text mb-8">
            Agende sua <br />
            <span className="italic font-light">Consultoria</span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed font-light mb-12 max-w-md">
            Sua demanda será tratada com o máximo rigor técnico e sigilo
            absoluto. Escolha o canal de sua preferência.
          </p>

          <div className="space-y-8 font-classic text-[10px] tracking-[0.2em] uppercase bordeaux-text">
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold/50" />
              <span>contato@nathaliealmeida.com.br</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold/50" />
              <span>Atendimento Nacional e Internacional</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="NOME COMPLETO"
              className="w-full bg-transparent border-b border-slate-200 py-4 text-[10px] tracking-widest outline-none focus:border-gold transition-colors font-classic uppercase"
            />
            <input
              type="email"
              placeholder="E-MAIL"
              className="w-full bg-transparent border-b border-slate-200 py-4 text-[10px] tracking-widest outline-none focus:border-gold transition-colors font-classic uppercase"
            />
          </div>
          <input
            type="text"
            placeholder="ASSUNTO"
            className="w-full bg-transparent border-b border-slate-200 py-4 text-[10px] tracking-widest outline-none focus:border-gold transition-colors font-classic uppercase"
          />
          <textarea
            rows={4}
            placeholder="MENSAGEM"
            className="w-full bg-transparent border-b border-slate-200 py-4 text-[10px] tracking-widest outline-none focus:border-gold transition-colors font-classic uppercase resize-none"
          ></textarea>

          <button className="w-full lg:w-auto px-12 py-5 bordeaux-bg text-white font-classic text-[10px] tracking-[0.3em] uppercase hover:bg-black transition-all duration-500 mt-8">
            Enviar Solicitação
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
