// import React from 'react';
// import { motion } from 'framer-motion';

// const About: React.FC = () => {
//   return (
//     <section id="sobre" className="py-24 px-6 relative overflow-hidden">
//       {/* Background Decorative Element */}
//       <div className="absolute right-0 top-0 opacity-[0.03] pointer-events-none transform translate-x-1/2 -translate-y-1/4">
//         <h2 className="text-[120px] md:text-[200px] font-classic bordeaux-text select-none">NA</h2>
//       </div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="relative">
//             <div className="absolute -inset-4 border gold-border border-opacity-10 translate-x-2 translate-y-2 pointer-events-none" />
//             <img
//               src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
//               alt="Escritório Boutique"
//               className="w-full aspect-[4/5] md:aspect-square object-cover shadow-2xl rounded-sm"
//             />
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <span className="text-[10px] tracking-[0.5em] gold-text uppercase block mb-4 font-classic">Fundadora</span>
//           <h2 className="font-serif-luxury text-3xl md:text-4xl bordeaux-text mb-8">Dra. Nathalie Almeida</h2>

//           <div className="space-y-6 text-slate-600 leading-relaxed font-light text-base italic border-l-2 gold-border pl-6 md:pl-8 mb-10">
//             <p>
//               "A advocacia de excelência exige não apenas o conhecimento das leis, mas a sensibilidade para compreender o momento e a necessidade de cada cliente."
//             </p>
//           </div>

//           <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
//             <p>
//               Dra. Nathalie Almeida é reconhecida pela atuação técnica impecável e pelo compromisso ético na resolução de conflitos. Com sólida formação e experiência em casos de alta complexidade, sua banca dedica-se a oferecer soluções personalizadas.
//             </p>
//             <p>
//               Especialista em Direito do Trabalho e Sucessões, atua de forma consultiva e contenciosa, priorizando sempre que possível a via extrajudicial para garantir celeridade e eficiência aos interesses de seus constituintes.
//             </p>
//           </div>

//           <div className="mt-12 grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
//             <div>
//               <h4 className="font-classic text-xl md:text-2xl bordeaux-text tracking-widest">+12 Anos</h4>
//               <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-slate-400">Atuação Profissional</p>
//             </div>
//             <div>
//               <h4 className="font-classic text-xl md:text-2xl bordeaux-text tracking-widest">Excelência</h4>
//               <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-slate-400">Padrão de Atendimento</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute right-0 top-0 opacity-[0.03] pointer-events-none transform translate-x-1/2 -translate-y-1/4">
        <h2 className="text-[120px] md:text-[200px] font-classic bordeaux-text select-none">
          NA
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 border gold-border border-opacity-10  pointer-events-none" />
            <img
              src="/nathalie-almeida-de-carvalho-advogada-sobre.webp"
              alt="Escritório Boutique"
              className="w-full aspect-[4/5] md:aspect-square object-cover object-top shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] tracking-[0.5em] gold-text uppercase block mb-6 font-classic">
            Perfil Profissional
          </span>
          <h2 className="font-serif-luxury text-4xl md:text-5xl bordeaux-text mb-8 leading-tight">
            Compromisso com a <br />
            <span className="italic font-light">Excelência Jurídica</span>
          </h2>

          <div className="mb-8 border-l-2 border-[#c5a028] pl-6">
            <p className="font-serif-luxury text-xl text-slate-700 italic leading-relaxed">
              "A verdadeira advocacia exige não apenas o conhecimento das leis,
              mas a sensibilidade para compreender o momento e a necessidade de
              cada cliente."
            </p>
          </div>

          <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
            <p>
              Dra. Nathalie Almeida é reconhecida pela atuação técnica impecável
              e pelo compromisso ético na resolução de conflitos. Com sólida
              formação e experiência em casos de alta complexidade, sua banca
              dedica-se a oferecer soluções personalizadas.
            </p>
            <p>
              Especialista em Direito do Trabalho e Sucessões, atua de forma
              consultiva e contenciosa, priorizando sempre que possível a via
              extrajudicial para garantir celeridade e eficiência aos interesses
              de seus constituintes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
            <div>
              <h4 className="font-classic text-xl md:text-2xl bordeaux-text tracking-widest">
                +12 Anos
              </h4>
              <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-slate-400">
                Atuação Profissional
              </p>
            </div>
            <div>
              <h4 className="font-classic text-xl md:text-2xl bordeaux-text tracking-widest">
                Excelência
              </h4>
              <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-slate-400">
                Padrão de Atendimento
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
