
// import React from "react";
// import { motion } from "framer-motion";

// const areas = [
//   {
//     title: "Direito do Trabalho",
//     desc: "Assessoria estratégica em relações de trabalho de alto nível, com foco em executivos e compliance trabalhista para empresas que buscam segurança jurídica absoluta.",
//     icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
//     id: "01",
//   },
//   {
//     title: "Direito das Sucessões",
//     desc: "Planejamento sucessório, inventários complexos e testamentos. Atuação dedicada à preservação do patrimônio familiar e à resolução harmoniosa de conflitos intergeracionais.",
//     icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011-1v5m-4 0h4",
//     id: "02",
//   },
//   {
//     title: "Advocacia Extrajudicial",
//     desc: "Soluções ágeis e preventivas via cartórios, mediação e conciliação. Agilidade na regularização de bens e direitos sem a necessidade de morosos processos judiciais.",
//     icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
//     id: "03",
//   },
// ];

// const Expertise: React.FC = () => {
//   return (
//     <section
//       id="expertise"
//       className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#fdfbf7]"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.1 }} // amount: 0.2 faz com que anime quando 20% da div aparecer
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16 md:mb-24"
//         >
//           <span className="text-[10px] tracking-[0.5em] gold-text uppercase block mb-4 font-classic">
//             Serviços Exclusivos
//           </span>
//           <h2 className="font-serif-luxury text-3xl md:text-5xl bordeaux-text mb-6">
//             Expertise que Transmite Confiança
//           </h2>
//           <div className="h-[1px] w-24 bg-[#c5a028] opacity-20 mx-auto" />
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
//           {areas.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 50 }} // Efeito opcional ao sair
//               viewport={{ once: false, amount: 0.1 }} // Re-anima toda vez que entra na tela
//               transition={{
//                 delay: index * 0.1,
//                 duration: 0.8,
//                 ease: "easeOut",
//               }}
//               className="p-10 md:p-12 lg:p-16 text-center lg:text-left transition-all duration-700 group relative bg-white border border-slate-50 shadow-[0_15px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
//             >
//               {/* Background Number */}
//               <div className="text-[70px] md:text-[90px] font-classic bordeaux-text opacity-[0.04] absolute top-6 right-10 lg:right-12 group-hover:opacity-[0.08] transition-all duration-700 select-none pointer-events-none">
//                 {item.id}
//               </div>

//               {/* Icon Container */}
//               <div className="w-10 h-10 flex items-center justify-center mb-10 border-b border-[#c5a028]/30 mx-auto lg:mx-0">
//                 <svg
//                   className="w-5 h-5 gold-text"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1"
//                     d={item.icon}
//                   />
//                 </svg>
//               </div>

//               <h3 className="font-classic text-sm md:text-base bordeaux-text mb-8 tracking-[0.2em] uppercase leading-tight">
//                 {item.title}
//               </h3>

//               <p className="text-[13px] text-slate-500 leading-relaxed font-light mb-4 min-h-[80px]">
//                 {item.desc}
//               </p>

//               {/* Hover Line */}
//               <div className="w-0 h-[1px] bg-[#c5a028] opacity-30 group-hover:w-full transition-all duration-1000 mt-8" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Expertise;



import React from "react";
import { motion } from "framer-motion";

const areas = [
  {
    title: "Direito do Trabalho",
    desc: "Assessoria estratégica em relações de trabalho de alto nível, com foco em executivos e compliance trabalhista. Atuação voltada à proteção jurídica preventiva e à defesa técnica qualificada dos interesses corporativos.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    id: "01",
  },
  {
    title: "Direito das Sucessões",
    desc: "Planejamento sucessório, inventários complexos e testamentos. Atuação dedicada à preservação do patrimônio familiar, com análise técnica aprofundada para a resolução harmoniosa de conflitos intergeracionais.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011-1v5m-4 0h4",
    id: "02",
  },
  {
    title: "Advocacia Extrajudicial",
    desc: "Soluções preventivas via cartórios, mediação e conciliação. Agilidade na regularização de bens e direitos, priorizando alternativas extrajudiciais quando viáveis para evitar a judicialização desnecessária.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    id: "03",
  },
];

const Expertise: React.FC = () => {
  return (
    <section
      id="expertise"
      className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#fdfbf7]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }} // amount: 0.2 faz com que anime quando 20% da div aparecer
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[10px] tracking-[0.5em] gold-text uppercase block mb-4 font-classic">
            Áreas de Atuação
          </span>
          <h2 className="font-serif-luxury text-3xl md:text-5xl bordeaux-text mb-6">
            Experiência Profissional nas Seguintes Áreas
          </h2>
          <div className="h-[1px] w-24 bg-[#c5a028] opacity-20 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {areas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }} // Efeito opcional ao sair
              viewport={{ once: false, amount: 0.1 }} // Re-anima toda vez que entra na tela
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="p-10 md:p-12 lg:p-16 text-center lg:text-left transition-all duration-700 group relative bg-white border border-slate-50 shadow-[0_15px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
            >
              {/* Background Number */}
              <div className="text-[70px] md:text-[90px] font-classic bordeaux-text opacity-[0.04] absolute top-6 right-10 lg:right-12 group-hover:opacity-[0.08] transition-all duration-700 select-none pointer-events-none">
                {item.id}
              </div>

              {/* Icon Container */}
              <div className="w-10 h-10 flex items-center justify-center mb-10 border-b border-[#c5a028]/30 mx-auto lg:mx-0">
                <svg
                  className="w-5 h-5 gold-text"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d={item.icon}
                  />
                </svg>
              </div>

              <h3 className="font-classic text-sm md:text-base bordeaux-text mb-8 tracking-[0.2em] uppercase leading-tight">
                {item.title}
              </h3>

              <p className="text-[14px] text-slate-600 leading-relaxed font-light mb-4 min-h-[80px]">
                {item.desc}
              </p>

              {/* Hover Line */}
              <div className="w-0 h-[1px] bg-[#c5a028] opacity-30 group-hover:w-full transition-all duration-1000 mt-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
