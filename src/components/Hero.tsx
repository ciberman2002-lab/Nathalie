// import React from "react";
// import { motion } from "framer-motion";

// const Hero: React.FC = () => {
//   const handleInternalLink = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     targetId: string,
//   ) => {
//     e.preventDefault();
//     const element = document.getElementById(targetId);
//     if (element) {
//       const offset = 100;
//       const bodyRect = document.body.getBoundingClientRect().top;
//       const elementRect = element.getBoundingClientRect().top;
//       const elementPosition = elementRect - bodyRect;
//       const offsetPosition = elementPosition - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center md:pt-20 pb-12 overflow-hidden">
//       {/* MOBILE IMAGE CONTAINER (Positioned high, colored, with soft fade) */}
//       <div className="lg:hidden w-full relative flex justify-center z-10 pt-3">
//         {" "}
//         {/* pt-4 → pt-3 para subir ~4px */}
//         <div className="relative w-full aspect-[4/5] overflow-hidden">
//           {/* <motion.img
//             initial={{ opacity: 0, scale: 1.05 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             src="/nathalie-almeida-de-carvalho-advogada.webp"
//             alt="Dra. Nathalie Almeida"
//             className="w-full h-full object-cover object-top"
//           /> */}
//           <motion.img
//             src="/nathalie-almeida-de-carvalho-advogada.webp"
//             alt="Dra. Nathalie Almeida"
//             fetchPriority="high" // O "P" deve ser maiúsculo no React/TS
//             loading="eager"
//             decoding="async"
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="w-full h-full object-cover object-top"
//           />
//           {/* White gradient fade over the bottom of the image */}
//           <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7] via-[#fdfbf7]/90 via-[#fdfbf7]/40 to-transparent pointer-events-none" />
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-20">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="text-center lg:text-left mt-[-175px] sm:mt-[-190px] lg:mt-0 relative"
//         >
//           {/* Tag Excellence */}
//           <div className="mb-4 md:mb-6">
//             <span className="text-[9px] md:text-[10px] tracking-[0.5em] gold-text uppercase block font-classic">
//               Excelência em Advocacia
//             </span>
//             <div className="h-[1px] w-10 bg-[#c5a028] mt-2 opacity-50 mx-auto lg:ml-0" />
//           </div>

//           <h2 className="font-serif-luxury text-[34px] sm:text-5xl md:text-7xl lg:text-8xl bordeaux-text leading-[1.1] mb-6 md:mb-8">
//             A arte da <br className="hidden sm:block" />
//             <span className="italic font-light">estratégia jurídica.</span>
//           </h2>

//           <p className="text-slate-600 lg:text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed text-sm md:text-base tracking-wide mb-8 md:mb-10 font-medium lg:font-light px-2 lg:px-0">
//             Especializada em Direito do Trabalho, Sucessões e soluções
//             Extrajudiciais. Um atendimento boutique, pautado pela discrição
//             absoluta e pelo rigor técnico.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center lg:justify-start items-center">
//             <a
//               href="#expertise"
//               onClick={(e) => handleInternalLink(e, "expertise")}
//               className="group flex items-center space-x-3 cursor-pointer transition-all duration-300"
//             >
//               <span className="font-classic text-[11px] md:text-[12px] tracking-[0.3em] uppercase bordeaux-text border-b border-transparent group-hover:border-[#c5a028] group-hover:text-[#c5a028] transition-all pb-1">
//                 Conheça os Serviços
//               </span>
//               <svg
//                 className="w-4 h-4 gold-text transform group-hover:translate-x-2 transition-transform duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.2"
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </a>
//           </div>
//         </motion.div>

//         {/* DESKTOP IMAGE CONTAINER */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.5 }}
//           className="relative hidden lg:flex justify-end"
//         >
//           <div className="relative w-full max-w-md aspect-[3/4] group">
//             {/* Decorative Golden Frames */}
//             <div className="absolute -inset-6 border gold-border border-opacity-20 translate-x-3 translate-y-3 pointer-events-none group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-1000" />
//             <div className="absolute -inset-3 border gold-border border-opacity-40 -translate-x-2 -translate-y-2 pointer-events-none" />

//             <div className="w-full h-full overflow-hidden shadow-2xl">
//               <img
//                 src="/nathalie-almeida-de-carvalho-advogada.webp"
//                 alt="Dra. Nathalie Almeida"
//                 className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
//               />
//             </div>

//             {/* Floating Tag / Selo */}
//             <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-2xl border-l-4 gold-border max-w-[200px]">
//               <p className="font-classic text-[10px] tracking-[0.2em] gold-text uppercase mb-2">
//                 Especialista
//               </p>
//               <p className="font-serif-luxury text-sm bordeaux-text leading-tight italic">
//                 Excelência em Direito do Trabalho e Sucessões
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const handleInternalLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center md:pt-20 pb-12 overflow-hidden">
      {/* MOBILE IMAGE CONTAINER (Positioned high, colored, with soft fade) */}
      <div className="lg:hidden w-full relative flex justify-center z-10 pt-3">
        {" "}
        {/* pt-4 → pt-3 para subir ~4px */}
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          {/* <motion.img
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/nathalie-almeida-de-carvalho-advogada.webp"
            alt="Dra. Nathalie Almeida"
            className="w-full h-full object-cover object-top"
          /> */}
          <motion.img
            src="/nathalie-almeida-de-carvalho-advogada.webp"
            alt="Dra. Nathalie Almeida"
            fetchPriority="high" // O "P" deve ser maiúsculo no React/TS
            loading="eager"
            decoding="async"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full object-cover object-top"
          />
          {/* White gradient fade over the bottom of the image */}
          <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7] via-[#fdfbf7]/90 via-[#fdfbf7]/40 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center lg:text-left mt-[-175px] sm:mt-[-190px] lg:mt-0 relative"
        >
          {/* Tag Excellence */}
          <div className="mb-4 md:mb-6">
            <span className="text-[9px] md:text-[10px] tracking-[0.5em] gold-text uppercase block font-classic">
              Advocacia Sob Medida
            </span>
            <div className="h-[1px] w-10 bg-[#c5a028] mt-2 opacity-50 mx-auto lg:ml-0" />
          </div>

          <h1 className="font-serif-luxury text-[34px] sm:text-5xl md:text-6xl lg:text-7xl bordeaux-text leading-[1.1] mb-6 md:mb-8">
            Atuação ética pautada na <br className="hidden sm:block" />
            <span className="italic font-light">
              técnica e segurança jurídica.
            </span>
          </h1>

          <p className="text-slate-600 lg:text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed text-sm md:text-base tracking-wide mb-8 md:mb-10 font-medium lg:font-light px-2 lg:px-0">
            Atuação em Direito do Trabalho, Sucessões e soluções extrajudiciais.
            Atendimento personalizado com sigilo profissional, análise técnica
            aprofundada e defesa estratégica dos seus interesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center lg:justify-start items-center">
            <a
              href="#expertise"
              onClick={(e) => handleInternalLink(e, "expertise")}
              className="group flex items-center space-x-3 cursor-pointer transition-all duration-300"
            >
              <span className="font-classic text-[11px] md:text-[12px] tracking-[0.3em] uppercase bordeaux-text border-b border-transparent group-hover:border-[#c5a028] group-hover:text-[#c5a028] transition-all pb-1">
                Conheça os Serviços
              </span>
              <svg
                className="w-4 h-4 gold-text transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* DESKTOP IMAGE CONTAINER */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="relative hidden lg:flex justify-end"
        >
          <div className="relative w-full max-w-md aspect-[3/4] group">
            {/* Decorative Golden Frames */}
            <div className="absolute -inset-6 border gold-border border-opacity-20 translate-x-3 translate-y-3 pointer-events-none group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-1000" />
            <div className="absolute -inset-3 border gold-border border-opacity-40 -translate-x-2 -translate-y-2 pointer-events-none" />

            <div className="w-full h-full overflow-hidden shadow-2xl">
              <img
                src="/nathalie-almeida-de-carvalho-advogada.webp"
                alt="Dra. Nathalie Almeida"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
              />
            </div>

            {/* Floating Tag / Selo */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-2xl border-l-4 gold-border max-w-[200px]">
              <p className="font-classic text-[10px] tracking-[0.2em] gold-text uppercase mb-2">
                Foco em
              </p>
              <p className="font-serif-luxury text-sm bordeaux-text leading-tight italic">
                Direito do Trabalho, Inventários e Planejamento Sucessório
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
