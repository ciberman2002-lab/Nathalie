// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const allPosts = [
//   {
//     category: "Direito de Família",
//     title: "Holding Familiar como Instrumento de Paz e Longevidade Patrimonial",
//     excerpt: "Entenda como a estruturação de uma holding pode não apenas reduzir a carga tributária, mas principalmente evitar o desgaste emocional de inventários judiciais que se arrastam por décadas.",
//     date: "15 Abr, 2024",
//     image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     category: "Compliance",
//     title: "A Nova Era do Trabalho: Gestão de Riscos para Executivos C-Level",
//     excerpt: "No cenário atual de transformações digitais, o compliance trabalhista deixou de ser opcional. Discutimos as responsabilidades e as proteções necessárias para a alta gestão.",
//     date: "02 Abr, 2024",
//     image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     category: "Extrajudicial",
//     title: "Inventário em Cartório: Agilidade e Sigilo para o Patrimônio de Luxo",
//     excerpt: "A via extrajudicial oferece ferramentas fundamentais para famílias que prezam pela discrição. Saiba quais são os requisitos e o passo-a-passo para a resolução em cartório.",
//     date: "25 Mar, 2024",
//     image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     category: "Patrimônio",
//     title: "Planejamento Sucessório Internacional: Estruturas em Jurisdições Estrangeiras",
//     excerpt: "Um olhar técnico sobre o uso de trusts e fundações no exterior para a proteção de bens, observando a nova legislação tributária brasileira.",
//     date: "18 Mar, 2024",
//     image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     category: "Jurisprudência",
//     title: "O Vínculo Empregatício em Plataformas de Tecnologia: Tendências e Decisões",
//     excerpt: "Análise aprofundada das recentes decisões dos tribunais superiores sobre a uberização do trabalho e o impacto para as empresas de base tecnológica.",
//     date: "10 Mar, 2024",
//     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     category: "Estilo de Vida Jurídico",
//     title: "A Ética da Elegância: O Papel do Advogado Boutique na Contemporaneidade",
//     excerpt: "Mais do que resolver problemas, a advocacia boutique trata de antecipar crises e oferecer um porto seguro para as decisões mais sensíveis de uma família ou empresa.",
//     date: "01 Mar, 2024",
//     image: "https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     category: "Direito do Trabalho",
//     title: "Impactos da LGPD nas Relações de Trabalho e Gestão de Pessoas",
//     excerpt: "Como as novas regras de proteção de dados estão redefinindo os processos de contratação e monitoramento de colaboradores no ambiente corporativo.",
//     date: "20 Fev, 2024",
//     image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     category: "Civil",
//     title: "A Responsabilidade Civil na Era da Inteligência Artificial",
//     excerpt: "Quem responde pelos danos causados por algoritmos? Uma análise das tendências legislativas e decisões recentes no Brasil e Europa.",
//     date: "10 Fev, 2024",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
//   }
// ];

// const POSTS_PER_PAGE = 4;

// interface BlogProps {
//   onArticleClick: () => void;
// }

// const Blog: React.FC<BlogProps> = ({ onArticleClick }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

//   const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
//   const currentPosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handlePostClick = (index: number) => {
//     // Apenas o primeiro artigo leva para a página interna (índice 0 na primeira página)
//     if (currentPage === 1 && index === 0) {
//       onArticleClick();
//     }
//   };

//   return (
//     <div className="bg-[#fdfbf7] min-h-screen pb-16 pt-24 md:pt-32">
//       <section className="px-6 mb-12 md:mb-20">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <span className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] gold-text uppercase block mb-4 md:mb-6 font-classic">O Gabinete de Estudos</span>
//             <h1 className="font-serif-luxury text-4xl md:text-7xl bordeaux-text mb-6 md:mb-8 italic leading-tight">Insights Jurídicos</h1>
//             <div className="w-32 md:w-48 h-[1px] bg-[#c5a028]/30 mx-auto relative">
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 border border-[#c5a028] bg-[#fdfbf7] rotate-45" />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section className="px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
//             <AnimatePresence mode="wait">
//               {currentPosts.map((post, index) => (
//                 <motion.article
//                   key={`${currentPage}-${index}`}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ delay: index * 0.1, duration: 0.5 }}
//                   className={`group flex flex-col h-full ${currentPage === 1 && index === 0 ? 'cursor-pointer' : ''}`}
//                   onClick={() => handlePostClick(index)}
//                 >
//                   <div className="relative p-1.5 md:p-2 mb-6 md:mb-8 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-slate-100">
//                     <div className="absolute inset-0 border border-[#c5a028]/15 m-1 pointer-events-none" />
//                     <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000">
//                       <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4 text-[8px] md:text-[9px] tracking-[0.2em] font-classic uppercase gold-text">
//                     <span>{post.category}</span>
//                     <span className="w-0.5 h-0.5 md:w-1 md:h-1 bg-[#c5a028] rounded-full" />
//                     <span className="text-slate-400">{post.date}</span>
//                   </div>

//                   <h2 className="font-serif-luxury text-xl md:text-3xl bordeaux-text mb-4 md:mb-6 leading-tight group-hover:text-[#c5a028] transition-colors line-clamp-2 min-h-[3rem] md:min-h-[4rem]">
//                     {post.title}
//                   </h2>
//                   <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed font-light mb-6 md:mb-8 line-clamp-3 flex-grow">
//                     {post.excerpt}
//                   </p>

//                   <div className="mt-auto">
//                     <div className="flex items-center space-x-2 cursor-pointer group/link inline-flex">
//                       <span className="text-[9px] md:text-[10px] tracking-[0.3em] font-classic uppercase bordeaux-text border-b border-transparent group-hover/link:border-gold transition-all pb-0.5">
//                         Ler Artigo Completo
//                       </span>
//                       <svg className="w-3 h-3 md:w-4 md:h-4 gold-text transform translate-x-0 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </div>
//                   </div>
//                 </motion.article>
//               ))}
//             </AnimatePresence>
//           </div>

//           {totalPages > 1 && (
//             <div className="mt-16 md:mt-24 pt-12 border-t border-[#c5a028]/10 text-center">
//               <nav className="inline-flex items-center space-x-2 md:space-x-6">
//                 <button
//                   onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   className={`text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] font-classic uppercase bordeaux-text transition-all py-2 px-3 ${currentPage === 1 ? 'opacity-20 cursor-not-allowed' : 'hover:text-gold cursor-pointer'}`}
//                 >
//                   <span className="hidden md:inline">Anterior</span>
//                   <span className="md:hidden">←</span>
//                 </button>

//                 <div className="flex items-center space-x-1 md:space-x-2">
//                   {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
//                     <button
//                       key={pageNum}
//                       onClick={() => handlePageChange(pageNum)}
//                       className={`w-8 h-8 md:w-10 md:h-10 text-[9px] md:text-[10px] font-classic transition-all flex items-center justify-center border ${
//                         currentPage === pageNum
//                         ? 'bordeaux-bg text-white border-gold'
//                         : 'border-[#c5a028]/20 text-slate-400 hover:border-gold hover:text-gold'
//                       }`}
//                     >
//                       {String(pageNum).padStart(2, '0')}
//                     </button>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   className={`text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] font-classic uppercase bordeaux-text transition-all py-2 px-3 ${currentPage === totalPages ? 'opacity-20 cursor-not-allowed' : 'hover:text-gold cursor-pointer'}`}
//                 >
//                   <span className="hidden md:inline">Próxima</span>
//                   <span className="md:hidden">→</span>
//                 </button>
//               </nav>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Blog;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ArticleCard {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

interface BlogProps {
  posts: ArticleCard[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  const limitedPosts = posts.slice(0, 9); // Limita a 9 posts
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; // Mantém o original
  const totalPages = Math.ceil(limitedPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = limitedPosts.slice(
    startIndex,
    startIndex + postsPerPage,
  );

  return (
    <div className="bg-[#fdfbf7] min-h-screen pb-16 pt-24 md:pt-32">
      <section className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-20 md:mb-32">
          <span className="text-[10px] md:text-[11px] tracking-[0.5em] gold-text uppercase block mb-4 md:mb-6 font-classic">
            Conhecimento Estratégico
          </span>
          <h1 className="font-serif-luxury text-4xl md:text-6xl bordeaux-text italic mb-6 md:mb-8">
            Artigos & Insights
          </h1>
          <div className="h-[1px] w-24 md:w-32 bg-[#c5a028] opacity-20 mx-auto"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          <AnimatePresence mode="wait">
            {currentPosts.map((post, index) => (
              <motion.article
                key={`${post.slug}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => (window.location.href = `/blog/${post.slug}`)}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative overflow-hidden mb-6 md:mb-8 aspect-[16/9] shadow-sm">
                  {/* <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  /> */}
                  <img 
                      src={post.image} 
                      alt={post.title}
                      width="800"
                      height="450"
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchpriority={index === 0 ? "high" : "auto"}
                      decoding="async"
                      class="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
                    />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700"></div>
                </div>

                <div className="space-y-4 md:space-y-6 flex flex-col h-full">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] md:text-[10px] tracking-[0.3em] gold-text uppercase font-classic font-bold">
                      {post.category}
                    </span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-slate-400 uppercase font-classic">
                      {post.date}
                    </span>
                  </div>

                  <h2 className="font-serif-luxury text-2xl md:text-3xl bordeaux-text leading-snug group-hover:gold-text transition-colors duration-500">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed font-light mb-6 md:mb-8 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                    <div className="flex items-center space-x-2 cursor-pointer group/link inline-flex">
                      <span className="text-[9px] md:text-[10px] tracking-[0.3em] font-classic uppercase bordeaux-text border-b border-transparent group-hover/link:border-gold transition-all pb-0.5">
                        Ler Artigo Completo
                      </span>
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 gold-text transform translate-x-0 group-hover/link:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="mt-16 md:mt-24 pt-12 border-t border-[#c5a028]/10 text-center">
            <nav className="inline-flex items-center space-x-2 md:space-x-6">
              <button
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
                disabled={currentPage === 1}
                className={`text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] font-classic uppercase bordeaux-text transition-all py-2 px-3 ${currentPage === 1 ? "opacity-20 cursor-not-allowed" : "hover:text-gold cursor-pointer"}`}
              >
                <span className="hidden md:inline">Anterior</span>
                <span className="md:hidden">←</span>
              </button>

              <div className="flex items-center space-x-1 md:space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-8 h-8 md:w-10 md:h-10 text-[9px] md:text-[10px] font-classic transition-all flex items-center justify-center border ${
                        currentPage === pageNum
                          ? "bordeaux-bg text-white border-gold"
                          : "border-[#c5a028]/20 text-slate-400 hover:border-gold hover:text-gold"
                      }`}
                    >
                      {String(pageNum).padStart(2, "0")}
                    </button>
                  ),
                )}
              </div>

              <button
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
                disabled={currentPage === totalPages}
                className={`text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] font-classic uppercase bordeaux-text transition-all py-2 px-3 ${currentPage === totalPages ? "opacity-20 cursor-not-allowed" : "hover:text-gold cursor-pointer"}`}
              >
                <span className="hidden md:inline">Próxima</span>
                <span className="md:hidden">→</span>
              </button>
            </nav>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
