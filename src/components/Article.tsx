// import React from 'react';
// import { motion } from 'framer-motion';

// interface ArticleProps {
//   onBackClick: () => void;
// }

// const Article: React.FC<ArticleProps> = ({ onBackClick }) => {
//   return (
//     <div className="bg-[#fcfcfc] min-h-screen pb-20 pt-32 selection:bg-[#4a0404] selection:text-white">
//       {/* Article Header */}
//       <section className="px-6 mb-12">
//         <div className="max-w-5xl mx-auto">
//           <button
//             onClick={onBackClick}
//             className="flex items-center space-x-3 bordeaux-text hover:text-gold transition-colors mb-12 group"
//           >
//             <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
//             </svg>
//             <span className="text-[10px] tracking-[0.3em] font-classic uppercase">Voltar ao Blog</span>
//           </button>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="flex items-center space-x-4 mb-6 text-[10px] tracking-[0.2em] font-classic uppercase gold-text">
//               <span>Direito de Família</span>
//               <span className="w-1 h-1 bg-[#c5a028] rounded-full" />
//               <span className="text-slate-400">15 de Abril, 2024</span>
//             </div>

//             <h1 className="font-serif-luxury text-4xl md:text-6xl bordeaux-text mb-8 leading-[1.1]">
//               Holding Familiar como Instrumento de Paz e Longevidade Patrimonial
//             </h1>

//             <div className="flex items-center space-x-4 py-8 border-y border-slate-100">
//               <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
//                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Nathalie Almeida" className="w-full h-full object-cover" />
//               </div>
//               <div>
//                 <p className="text-[11px] tracking-[0.1em] font-classic uppercase bordeaux-text">Dra. Nathalie Almeida</p>
//                 <p className="text-[9px] tracking-widest text-slate-400 uppercase">Especialista em Direito Sucessório</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Hero Image */}
//       <section className="px-0 md:px-6 mb-16">
//         <div className="max-w-5xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             className="aspect-[21/9] w-full overflow-hidden shadow-2xl md:rounded-sm"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=1200"
//               alt="Holding Familiar"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Content Body */}
//       <section className="px-6">
//         <article className="max-w-5xl mx-auto">
//           <div className="prose prose-slate lg:prose-xl max-w-none font-light text-slate-700 leading-[1.8] space-y-8">
//             <p className="max-w-3xl mx-auto text-xl md:text-3xl font-serif-luxury italic bordeaux-text leading-relaxed border-l-4 gold-border pl-8 mb-16 mt-4">
//               "A estruturação de uma holding não é apenas uma manobra tributária, mas sim a criação de uma governança que protege o legado emocional e financeiro de uma família."
//             </p>

//             <p>
//               A sucessão patrimonial é, historicamente, um dos momentos de maior fragilidade para as famílias brasileiras. A ausência de um planejamento adequado costuma resultar em inventários judiciais que se arrastam por anos, corroendo o patrimônio com custas processuais, impostos elevados e, principalmente, gerando rupturas nos laços afetivos.
//             </p>

//             <h2 className="font-serif-luxury text-3xl md:text-4xl bordeaux-text pt-8">O Concept de Holding</h2>
//             <p>
//               Uma <strong>Holding Familiar</strong> nada mais é do que uma empresa constituída com o propósito de deter o patrimônio de uma família (imóveis, participações societárias, investimentos). Ao invés de os bens estarem em nome das pessoas físicas, eles passam a pertencer a esta estrutura jurídica.
//             </p>

//             <h2 className="font-serif-luxury text-3xl md:text-4xl bordeaux-text pt-8">Vantagens Primordiais</h2>
//             <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none pl-0 py-8">
//               <li className="flex flex-col space-y-4">
//                 <span className="text-gold text-3xl font-classic leading-none">01</span>
//                 <div>
//                   <strong className="bordeaux-text block text-[11px] tracking-widest uppercase mb-2 font-classic">Eficiência Tributária</strong>
//                   <span className="text-sm">A carga de impostos sobre aluguéis e a futura sucessão (ITCMD) pode ser reduzida drasticamente quando comparada à tributação na pessoa física.</span>
//                 </div>
//               </li>
//               <li className="flex flex-col space-y-4">
//                 <span className="text-gold text-3xl font-classic leading-none">02</span>
//                 <div>
//                   <strong className="bordeaux-text block text-[11px] tracking-widest uppercase mb-2 font-classic">Proteção de Ativos</strong>
//                   <span className="text-sm">Cria-se uma camada de blindagem ética contra riscos operacionais de outras empresas da família, separando o patrimônio imobiliário dos riscos do negócio.</span>
//                 </div>
//               </li>
//               <li className="flex flex-col space-y-4">
//                 <span className="text-gold text-3xl font-classic leading-none">03</span>
//                 <div>
//                   <strong className="bordeaux-text block text-[11px] tracking-widest uppercase mb-2 font-classic">Evitação do Inventário</strong>
//                   <span className="text-sm">Com as cláusulas de doação de cotas com reserva de usufruto, a sucessão ocorre de forma automática no falecimento dos patriarcas.</span>
//                 </div>
//               </li>
//             </ul>

//             <div className="max-w-3xl mx-auto bg-slate-50 p-10 md:p-12 border border-slate-100 my-16">
//               <h3 className="font-classic text-sm tracking-[0.3em] uppercase bordeaux-text mb-6 text-center">Nota da Especialista</h3>
//               <p className="text-sm italic leading-relaxed">
//                 É fundamental compreender que cada família possui uma dinâmica única. Não existe uma "holding de prateleira". A personalização das cláusulas de inalienabilidade, impenhorabilidade e incomunicabilidade é o que garante que o desejo dos fundadores seja respeitado pelas gerações futuras.
//               </p>
//               <div className="text-center mt-8">
//                 <a href="https://wa.me/5511900000000" className="inline-block bordeaux-text hover:text-gold transition-colors font-classic text-[10px] tracking-widest uppercase border-b border-gold pb-1">Consultar Viabilidade Técnica</a>
//               </div>
//             </div>

//             <p>
//               Em conclusão, antecipar-se aos eventos inevitáveis da vida é a maior prova de amor e responsabilidade que um provedor pode oferecer aos seus herdeiros. A paz familiar no futuro é construída com as decisões estratégicas que tomamos hoje.
//             </p>
//           </div>

//           <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
//             <div className="flex space-x-3">
//               <span className="px-4 py-2 bg-slate-50 text-[9px] tracking-widest uppercase text-slate-400 font-classic">#Sucessão</span>
//               <span className="px-4 py-2 bg-slate-50 text-[9px] tracking-widest uppercase text-slate-400 font-classic">#Patrimônio</span>
//               <span className="px-4 py-2 bg-slate-50 text-[9px] tracking-widest uppercase text-slate-400 font-classic">#Holding</span>
//             </div>

//             <div className="flex items-center space-x-6">
//               <span className="text-[9px] tracking-widest uppercase text-slate-400 font-classic">Compartilhar:</span>
//               <div className="flex space-x-4">
//                 <button className="bordeaux-text hover:text-gold transition-colors font-classic text-[10px]">LinkedIn</button>
//                 <button className="bordeaux-text hover:text-gold transition-colors font-classic text-[10px]">WhatsApp</button>
//               </div>
//             </div>
//           </div>
//         </article>
//       </section>

//       {/* Recommended Reading */}
//       <section className="mt-32 bg-white py-24 border-t border-slate-100">
//         <div className="max-w-5xl mx-auto px-6">
//           <h4 className="font-serif-luxury text-2xl bordeaux-text mb-12 text-center italic">Leituras Recomendadas</h4>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//             <div className="group cursor-pointer border border-slate-50 p-5 md:p-8 hover:border-gold transition-all duration-500">
//               <p className="text-[7px] md:text-[9px] tracking-widest uppercase gold-text mb-1.5 md:mb-2 font-classic">Próximo Insight</p>
//               <h5 className="font-serif-luxury text-sm md:text-xl bordeaux-text group-hover:text-gold transition-colors leading-tight md:leading-snug">A Nova Era do Trabalho: Gestão de Riscos para Executivos</h5>
//             </div>
//             <div className="group cursor-pointer border border-slate-50 p-5 md:p-8 hover:border-gold transition-all duration-500">
//               <p className="text-[7px] md:text-[9px] tracking-widest uppercase gold-text mb-1.5 md:mb-2 font-classic">Anterior</p>
//               <h5 className="font-serif-luxury text-sm md:text-xl bordeaux-text group-hover:text-gold transition-colors leading-tight md:leading-snug">Inventário em Cartório: Agilidade e Sigilo Patrimonial</h5>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Article;

// import React from "react";
// import { motion } from "framer-motion";

// interface ArticleProps {
//   title: string;
//   category: string;
//   date: string; // ISO string ou Date
//   author: {
//     name: string;
//     specialty: string;
//     image: string;
//   };
//   heroImage: {
//     src: string;
//     alt: string;
//   };
//   quote: string;
//   content: string; // HTML ou Markdown renderizado
//   specialistNote: {
//     title: string;
//     content: string;
//     linkText: string;
//     linkUrl: string;
//   };
//   tags: string[];
//   recommended: Array<{
//     title: string;
//     subtitle: string;
//     isNext: boolean;
//   }>;
//   onBackClick: () => void;
// }

// const Article: React.FC<ArticleProps> = ({
//   title,
//   category,
//   date,
//   author,
//   heroImage,
//   quote,
//   content,
//   specialistNote,
//   tags,
//   recommended,
//   onBackClick,
// }) => {
//   const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });

//   return (
//     <div className="bg-[#fcfcfc] min-h-screen pb-20 pt-32 selection:bg-[#4a0404] selection:text-white">
//       {/* Article Header */}
//       <section className="px-6 mb-12">
//         <div className="max-w-5xl mx-auto">
//           <button
//             onClick={onBackClick}
//             className="flex items-center space-x-3 bordeaux-text hover:text-gold transition-colors mb-12 group"
//           >
//             <svg
//               className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1.5"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             <span className="text-[10px] tracking-[0.3em] font-classic uppercase">
//               Voltar ao Blog
//             </span>
//           </button>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="flex items-center space-x-4 mb-6 text-[10px] tracking-[0.2em] font-classic uppercase gold-text">
//               <span>{category}</span>
//               <span className="w-1 h-1 bg-[#c5a028] rounded-full" />
//               <span className="text-slate-400">{formattedDate}</span>
//             </div>

//             <h1 className="font-serif-luxury text-4xl md:text-6xl bordeaux-text mb-8 leading-[1.1]">
//               {title}
//             </h1>

//             <div className="flex items-center space-x-4 py-8 border-y border-slate-100">
//               <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
//                 <img
//                   src={author.image}
//                   alt={author.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div>
//                 <p className="text-[11px] tracking-[0.1em] font-classic uppercase bordeaux-text">
//                   {author.name}
//                 </p>
//                 <p className="text-[9px] tracking-widest text-slate-400 uppercase">
//                   {author.specialty}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Hero Image */}
//       <section className="px-0 md:px-6 mb-16">
//         <div className="max-w-5xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             className="aspect-[21/9] w-full overflow-hidden shadow-2xl"
//           >
//             <img
//               src={heroImage.src}
//               alt={heroImage.alt}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="px-6">
//         <div className="max-w-5xl mx-auto">
//           <article className="prose prose-slate max-w-none">
//             {/* Quote inicial */}
//             {quote && (
//               <blockquote className="border-l-4 border-gold pl-6 italic text-xl bordeaux-text mb-12">
//                 {quote}
//               </blockquote>
//             )}

//             {/* Conteúdo rico vindo do Keystatic */}
//             <div dangerouslySetInnerHTML={{ __html: content }} />

//             {/* Nota da Especialista */}
//             {specialistNote && (
//               <div className="mt-12 p-8 bg-slate-50 border border-gold/20 rounded-lg">
//                 <h4 className="font-serif-luxury text-2xl bordeaux-text mb-4 italic">
//                   {specialistNote.title}
//                 </h4>
//                 <p className="text-slate-700 mb-6">{specialistNote.content}</p>
//                 <a
//                   href={specialistNote.linkUrl}
//                   className="inline-block px-6 py-3 bg-bordeaux text-white font-classic text-sm tracking-wider uppercase hover:bg-black transition-colors"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {specialistNote.linkText}
//                 </a>
//               </div>
//             )}

//             {/* Tags */}
//             {tags.length > 0 && (
//               <div className="mt-12 flex flex-wrap gap-3">
//                 {tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-4 py-2 bg-slate-50 text-[9px] tracking-widest uppercase text-slate-400 font-classic"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* Compartilhamento */}
//             <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
//               <div className="flex items-center space-x-6">
//                 <span className="text-[9px] tracking-widest uppercase text-slate-400 font-classic">
//                   Compartilhar:
//                 </span>
//                 <div className="flex space-x-4">
//                   <button className="bordeaux-text hover:text-gold transition-colors font-classic text-[10px]">
//                     LinkedIn
//                   </button>
//                   <button className="bordeaux-text hover:text-gold transition-colors font-classic text-[10px]">
//                     WhatsApp
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </article>

//           {/* Leituras Recomendadas */}
//           {recommended.length > 0 && (
//             <section className="mt-32 bg-white py-24 border-t border-slate-100">
//               <div className="max-w-5xl mx-auto px-6">
//                 <h4 className="font-serif-luxury text-2xl bordeaux-text mb-12 text-center italic">
//                   Leituras Recomendadas
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//                   {recommended.map((rec, idx) => (
//                     <div
//                       key={idx}
//                       className="group cursor-pointer border border-slate-50 p-5 md:p-8 hover:border-gold transition-all duration-500"
//                     >
//                       <p className="text-[7px] md:text-[9px] tracking-widest uppercase gold-text mb-1.5 md:mb-2 font-classic">
//                         {rec.isNext ? "Próximo Insight" : "Anterior"}
//                       </p>
//                       <h5 className="font-serif-luxury text-sm md:text-xl bordeaux-text group-hover:text-gold transition-colors leading-tight md:leading-snug">
//                         {rec.title}
//                       </h5>
//                       <p className="text-slate-500 text-sm mt-2">
//                         {rec.subtitle}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Article;

// import React from "react";
// import { motion } from "framer-motion";

// interface ArticleProps {
//   title: string;
//   category: string;
//   date: string; // ISO string ou Date
//   author: {
//     name: string;
//     specialty: string;
//     image: string;
//   };
//   heroImage: {
//     src: string;
//     alt: string;
//   };
//   quote: string;
//   content: any; // Pode ser string HTML ou objeto AST do Keystatic
//   specialistNote: {
//     title: string;
//     content: string;
//     linkText: string;
//     linkUrl: string;
//   };
//   tags: string[];
//   recommended: Array<{
//     title: string;
//     subtitle: string;
//     isNext: boolean;
//   }>;
//   onBackClick: () => void;
// }

// const Article: React.FC<ArticleProps> = ({
//   title,
//   category,
//   date,
//   author,
//   heroImage,
//   quote,
//   content,
//   specialistNote,
//   tags,
//   recommended,
//   onBackClick,
// }) => {
//   const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });

//   return (
//     <div className="bg-[#fcfcfc] min-h-screen pb-20 pt-32 selection:bg-[#4a0404] selection:text-white">
//       {/* Article Header */}
//       <section className="px-6 mb-12">
//         <div className="max-w-5xl mx-auto">
//           <button
//             onClick={onBackClick}
//             className="flex items-center space-x-3 bordeaux-text hover:text-gold transition-colors mb-12 group"
//           >
//             <svg
//               className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1.5"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             <span className="text-[10px] tracking-[0.3em] font-classic uppercase">
//               Voltar ao Blog
//             </span>
//           </button>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="flex items-center space-x-4 mb-6 text-[10px] tracking-[0.2em] font-classic uppercase gold-text">
//               <span>{category}</span>
//               <span className="w-1 h-1 bg-[#c5a028] rounded-full" />
//               <span className="text-slate-400">{formattedDate}</span>
//             </div>

//             <h1 className="font-serif-luxury text-4xl md:text-6xl bordeaux-text mb-8 leading-[1.1]">
//               {title}
//             </h1>

//             <div className="flex items-center space-x-4 py-8 border-y border-slate-100">
//               <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
//                 <img
//                   src={author.image}
//                   alt={author.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div>
//                 <p className="text-[11px] tracking-[0.1em] font-classic uppercase bordeaux-text">
//                   {author.name}
//                 </p>
//                 <p className="text-[9px] tracking-widest text-slate-400 uppercase">
//                   {author.specialty}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Hero Image */}
//       <section className="px-0 md:px-6 mb-16">
//         <div className="max-w-5xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             className="aspect-[21/9] w-full overflow-hidden shadow-2xl"
//           >
//             <img
//               src={heroImage.src}
//               alt={heroImage.alt}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="px-6">
//         <div className="max-w-5xl mx-auto">
//           <article className="prose prose-slate max-w-none">
//             {/* Quote inicial */}
//             {quote && (
//               <blockquote className="border-l-4 border-gold pl-6 italic text-xl bordeaux-text mb-12">
//                 {quote}
//               </blockquote>
//             )}

//             {/* DEBUG: Valor do prop content */}
//             <div className="bg-red-100 p-6 mb-8 border border-red-500 rounded-lg">
//               <h3 className="text-red-800 font-bold mb-2">
//                 DEBUG: Prop 'content' recebido
//               </h3>
//               <pre className="bg-red-50 p-4 rounded overflow-auto text-sm whitespace-pre-wrap">
//                 {JSON.stringify(content, null, 2)}
//               </pre>
//             </div>

//             {/* Renderizador do conteúdo (se for objeto AST) */}
//             {/* <KeystaticDocumentRenderer document={content} client:load /> */}

//             {/* Fallback se content for string HTML */}
//             {typeof content === "string" && content && (
//               <div dangerouslySetInnerHTML={{ __html: content }} />
//             )}

//             {/* Nota da Especialista */}
//             {specialistNote && (
//               <div className="mt-12 p-8 bg-slate-50 border border-gold/20 rounded-lg">
//                 <h4 className="font-serif-luxury text-2xl bordeaux-text mb-4 italic">
//                   {specialistNote.title}
//                 </h4>
//                 <p className="text-slate-700 mb-6">{specialistNote.content}</p>
//                 <a
//                   href={specialistNote.linkUrl}
//                   className="inline-block px-6 py-3 bg-bordeaux text-white font-classic text-sm tracking-wider uppercase hover:bg-black transition-colors"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {specialistNote.linkText}
//                 </a>
//               </div>
//             )}

//             {/* Tags */}
//             {tags.length > 0 && (
//               <div className="mt-12 flex flex-wrap gap-3">
//                 {tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-4 py-2 bg-slate-50 text-[9px] tracking-widest uppercase text-slate-400 font-classic"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* Compartilhamento */}
//             <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
//               <div className="flex items-center space-x-6">
//                 <span className="text-[9px] tracking-widest uppercase text-slate-400 font-classic">
//                   Compartilhar:
//                 </span>
//                 <div className="flex space-x-4">
//                   <button className="bordeaux-text hover:text-gold transition-colors font-classic text-[10px]">
//                     LinkedIn
//                   </button>
//                   <button className="bordeaux-text hover:text-gold transition-colors font-classic text-[10px]">
//                     WhatsApp
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </article>

//           {/* Leituras Recomendadas */}
//           {recommended.length > 0 && (
//             <section className="mt-32 bg-white py-24 border-t border-slate-100">
//               <div className="max-w-5xl mx-auto px-6">
//                 <h4 className="font-serif-luxury text-2xl bordeaux-text mb-12 text-center italic">
//                   Leituras Recomendadas
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//                   {recommended.map((rec, idx) => (
//                     <div
//                       key={idx}
//                       className="group cursor-pointer border border-slate-50 p-5 md:p-8 hover:border-gold transition-all duration-500"
//                     >
//                       <p className="text-[7px] md:text-[9px] tracking-widest uppercase gold-text mb-1.5 md:mb-2 font-classic">
//                         {rec.isNext ? "Próximo Insight" : "Anterior"}
//                       </p>
//                       <h5 className="font-serif-luxury text-sm md:text-xl bordeaux-text group-hover:text-gold transition-colors leading-tight md:leading-snug">
//                         {rec.title}
//                       </h5>
//                       <p className="text-slate-500 text-sm mt-2">
//                         {rec.subtitle}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Article;

// import React from "react";
// import { motion } from "framer-motion";

// interface ArticleProps {
//   title: string;
//   category: string;
//   date: string; // ISO string ou Date
//   author: {
//     name: string;
//     specialty: string;
//     image: string;
//   };
//   heroImage: {
//     src: string;
//     alt: string;
//   };
//   quote: string;
//   content: any; // Pode ser string HTML ou objeto AST do Keystatic
//   specialistNote: {
//     title: string;
//     content: string;
//     linkText: string;
//     linkUrl: string;
//   };
//   tags: string[];
//   recommended: Array<{
//     title: string;
//     subtitle: string;
//     isNext: boolean;
//   }>;
//   onBackClick: () => void;
// }

// const Article: React.FC<ArticleProps> = ({
//   title,
//   category,
//   date,
//   author,
//   heroImage,
//   quote,
//   content,
//   specialistNote,
//   tags,
//   recommended,
//   onBackClick,
// }) => {
//   const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });

//   return (
//     <div className="bg-[#fcfcfc] min-h-screen pb-20 pt-32 selection:bg-[#4a0404] selection:text-white">
//       {/* Article Header */}
//       <section className="px-6 mb-12">
//         <div className="max-w-5xl mx-auto">
//           <button
//             onClick={onBackClick}
//             className="flex items-center space-x-3 bordeaux-text hover:text-gold transition-colors mb-12 group"
//           >
//             <svg
//               className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1.5"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             <span className="text-[10px] tracking-[0.3em] font-classic uppercase">
//               Voltar ao Blog
//             </span>
//           </button>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="flex items-center space-x-4 mb-6 text-[10px] tracking-[0.2em] font-classic uppercase gold-text">
//               <span>{category}</span>
//               <span className="w-1 h-1 bg-[#c5a028] rounded-full" />
//               <span className="text-slate-400">{formattedDate}</span>
//             </div>

//             <h1 className="font-serif-luxury text-4xl md:text-6xl bordeaux-text mb-8 leading-[1.1]">
//               {title}
//             </h1>

//             <div className="flex items-center space-x-4 py-8 border-y border-slate-100">
//               <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
//                 <img
//                   src={author.image}
//                   alt={author.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div>
//                 <p className="text-[11px] tracking-[0.1em] font-classic uppercase bordeaux-text">
//                   {author.name}
//                 </p>
//                 <p className="text-[9px] tracking-widest text-slate-400 uppercase">
//                   {author.specialty}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Hero Image */}
//       <section className="px-0 md:px-6 mb-16">
//         <div className="max-w-5xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             className="aspect-[21/9] w-full overflow-hidden shadow-2xl"
//           >
//             <img
//               src={heroImage.src}
//               alt={heroImage.alt}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="px-6">
//         <div className="max-w-5xl mx-auto">
//           <article className="prose prose-slate max-w-none">
//             {/* Quote inicial */}
//             {quote && (
//               <blockquote className="border-l-4 border-gold pl-6 italic text-xl bordeaux-text mb-12">
//                 {quote}
//               </blockquote>
//             )}

//             {/* DEBUG: Valor do prop content */}
//             <div className="bg-red-100 p-6 mb-8 border border-red-500 rounded-lg">
//               <h3 className="text-red-800 font-bold mb-2">
//                 DEBUG: Prop 'content' recebido
//               </h3>
//               <pre className="bg-red-50 p-4 rounded overflow-auto text-sm whitespace-pre-wrap">
//                 {JSON.stringify(content, null, 2)}
//               </pre>
//             </div>

//             {/* Renderizador do conteúdo */}
//             {content && (
//               <div className="mb-12">
//                 {/* Fallback simples se for string HTML */}
//                 {typeof content === "string" && content && (
//                   <div dangerouslySetInnerHTML={{ __html: content }} />
//                 )}

//                 {/* Se for objeto AST do Keystatic */}
//                 {typeof content === "object" &&
//                   content !== null &&
//                   content.children && (
//                     <div className="space-y-6">
//                       {content.children.map((node: any, index: number) => (
//                         <div
//                           key={index}
//                           className="border-l-4 border-blue-500 pl-4"
//                         >
//                           <pre className="text-sm text-gray-700">
//                             {JSON.stringify(node, null, 2)}
//                           </pre>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//               </div>
//             )}

//             {/* Nota da Especialista */}
//             {specialistNote && (
//               <div className="mt-12 p-8 bg-slate-50 border border-gold/20 rounded-lg">
//                 <h4 className="font-serif-luxury text-2xl bordeaux-text mb-4 italic">
//                   {specialistNote.title}
//                 </h4>
//                 <p className="text-slate-700 mb-6">{specialistNote.content}</p>
//                 <a
//                   href={specialistNote.linkUrl}
//                   className="inline-block px-6 py-3 bg-bordeaux text-white font-classic text-sm tracking-wider uppercase hover:bg-black transition-colors"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {specialistNote.linkText}
//                 </a>
//               </div>
//             )}

//             {/* Tags */}
//             {tags.length > 0 && (
//               <div className="mt-12 flex flex-wrap gap-3">
//                 {tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-4 py-2 bg-slate-50 text-[9px] tracking-widest uppercase text-slate-400 font-classic"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* Compartilhamento */}
//             <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
//               <div className="flex items-center space-x-6">
//                 <span className="text-[9px] tracking-widest uppercase text-slate-400 font-classic">
//                   Compartilhar:
//                 </span>
//                 <div className="flex space-x-4">
//                   <button className="bordeaux-text hover:text-gold transition-colors font-classic text-[10px]">
//                     LinkedIn
//                   </button>
//                   <button className="bordeaux-text hover:text-gold transition-colors font-classic text-[10px]">
//                     WhatsApp
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </article>

//           {/* Leituras Recomendadas */}
//           {recommended.length > 0 && (
//             <section className="mt-32 bg-white py-24 border-t border-slate-100">
//               <div className="max-w-5xl mx-auto px-6">
//                 <h4 className="font-serif-luxury text-2xl bordeaux-text mb-12 text-center italic">
//                   Leituras Recomendadas
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//                   {recommended.map((rec, idx) => (
//                     <div
//                       key={idx}
//                       className="group cursor-pointer border border-slate-50 p-5 md:p-8 hover:border-gold transition-all duration-500"
//                     >
//                       <p className="text-[7px] md:text-[9px] tracking-widest uppercase gold-text mb-1.5 md:mb-2 font-classic">
//                         {rec.isNext ? "Próximo Insight" : "Anterior"}
//                       </p>
//                       <h5 className="font-serif-luxury text-sm md:text-xl bordeaux-text group-hover:text-gold transition-colors leading-tight md:leading-snug">
//                         {rec.title}
//                       </h5>
//                       <p className="text-slate-500 text-sm mt-2">
//                         {rec.subtitle}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Article;

// src/components/Article.tsx
import React from "react";
import { motion } from "framer-motion";
// Importação essencial para renderizar o conteúdo do Keystatic corretamente
import { DocumentRenderer } from "@keystatic/core/renderer";

interface ArticleProps {
  title: string;
  category: string;
  date: string;
  author: {
    name: string;
    specialty: string;
    image: string;
  };
  heroImage: {
    src: string;
    alt: string;
  };
  quote: string;
  content: any; // O AST/JSON vindo do reader do Keystatic
  specialistNote: {
    title: string;
    content: string;
    linkText: string;
    linkUrl: string;
  };
  tags: string[];
  recommended: Array<{
    title: string;
    subtitle: string;
    isNext: boolean;
  }>;
  onBackClick: () => void;
}

const Article: React.FC<ArticleProps> = ({
  title,
  category,
  date,
  author,
  heroImage,
  quote,
  content,
  specialistNote,
  tags,
  recommended,
}) => {
  return (
    <div className="bg-[#fdfbf7] min-h-screen pb-20 pt-12 selection:bg-[#4a0404] selection:text-white">
      {/* Article Header */}
      <section className="px-6 mb-12">
        <div className="max-w-5xl mx-auto">
          <button
            type="button"
            onClick={() => {
              window.location.href = "/blog";
            }}
            className="flex items-center space-x-3 bordeaux-text hover:text-gold transition-colors mb-12 group cursor-pointer"
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
              Voltar ao Blog
            </span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-6 text-[10px] tracking-[0.2em] font-classic uppercase gold-text">
              <span>{category}</span>
              <span className="w-1 h-1 bg-[#c5a028] rounded-full" />
              {/* <span className="text-slate-400">{date}</span> */}
              <span className="text-slate-400">
  {date instanceof Date ? date.toLocaleDateString('pt-BR') : String(date)}
</span>

            </div>

            <h1 className="font-serif-luxury text-4xl md:text-6xl bordeaux-text mb-8 leading-[1.1]">
              {title}
            </h1>

            <div className="flex items-center space-x-4 py-8 border-y border-slate-100">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-100">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[12px] tracking-[0.1em] font-semibold font-classic uppercase bordeaux-text">
                  {author.name}
                </p>
                <p className="text-[9px] tracking-widest text-slate-400 uppercase">
                  {author.specialty}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-0 md:px-6 mb-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="aspect-[21/9] w-full overflow-hidden shadow-2xl md:rounded-sm"
          >
            {/* <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="w-full h-full object-cover"
            /> */}
            {heroImage && (
              <img
                src={heroImage.src}
                alt={heroImage.alt || title}
                className="w-full rounded-lg shadow-xl"
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          <article className="prose prose-slate max-w-none text-lg leading-relaxed bordeaux-text/80 space-y-8">
            {/* Quote inicial */}
            {quote && (
              <blockquote className="max-w-3xl mx-auto text-xl md:text-3xl font-serif-luxury italic bordeaux-text leading-relaxed border-l-4 gold-border pl-8 mb-16 mt-4">
                {quote}
              </blockquote>
            )}

            {/* CONTEÚDO PRINCIPAL - Renderizado via Keystatic DocumentRenderer oficial */}

            <div className="prose prose-slate max-w-none prose-lg bordeaux-text/80 space-y-8 marker:text-[#c5a028] marker:font-bold">
              {content && (
                <DocumentRenderer
                  document={content}
                  renderers={{
                    block: {
                      // Em vez de 'paragraph', o Keystatic usa o componente direto para parágrafos
                      paragraph: ({ children }) => (
                        <p className="mb-8 leading-relaxed block">{children}</p>
                      ),
                      // Heading precisa de uma lógica simples para o nível
                      heading: ({ level, children }) => {
                        const headingStyles = {
                          1: "hidden", // H1 geralmente já é o título do post
                          2: "text-3xl font-serif-luxury bordeaux-text mt-16 mb-6 block",
                          3: "text-2xl font-serif-luxury bordeaux-text mt-12 mb-4 block",
                          4: "text-xl font-serif bordeaux-text mt-10 mb-4 block",
                          5: "text-lg font-serif bordeaux-text mt-8 mb-2 block",
                          6: "text-base font-serif bordeaux-text mt-8 mb-2 block",
                        };

                        const Tag = `h${level}` as const;
                        // @ts-ignore - Fallback de estilo se o level for estranho
                        const className =
                          headingStyles[level] || headingStyles[2];

                        return <Tag className={className}>{children}</Tag>;
                      },

                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-[#c5a028] pl-6 my-12 font-serif-luxury italic text-2xl bordeaux-text/90 bg-slate-50/40 py-6 pr-4 shadow-sm">
                          {children}
                        </blockquote>
                      ),
                      // image: ({ src, alt }) => <img src={src} alt={alt} />,
                      image: ({ src, alt, title }) => {
                        return (
                          <img
                            src={src}
                            alt={alt}
                            title={title}
                            className="my-8 rounded-lg shadow-md max-w-[50%] h-auto mx-auto"
                          />
                        );
                      },
                    },
                    inline: {
                      bold: ({ children }) => (
                        <strong className="font-bold bordeaux-text">
                          {children}
                        </strong>
                      ),
                      italic: ({ children }) => (
                        <em className="italic">{children}</em>
                      ),
                      link: ({ children, href }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bordeaux-text underline decoration-gold/50 hover:decoration-gold transition-all underline-offset-4 font-medium"
                        >
                          {children}
                        </a>
                      ),
                    },
                  }}
                />
              )}
            </div>

            {/* Nota da Especialista */}
            {specialistNote && (
              <div className="mt-12 p-8 bg-slate-50 border border-gold/20 rounded-lg">
                <h4 className="font-serif-luxury text-2xl bordeaux-text mb-4 italic">
                  {specialistNote.title}
                </h4>
                <p className="text-slate-700 mb-6">{specialistNote.content}</p>
                <a
                  href={specialistNote.linkUrl}
                  className="inline-block px-6 py-3 bg-bordeaux text-white font-classic text-sm tracking-wider uppercase hover:bg-black transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {specialistNote.linkText}
                </a>
              </div>
            )}

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-slate-50 text-[9px] tracking-widest uppercase text-slate-400 font-classic"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Compartilhamento */}
            <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex items-center space-x-6">
                <span className="text-[9px] tracking-widest uppercase text-slate-400 font-classic">
                  Compartilhar:
                </span>
                <div className="flex space-x-4">
                  <button className="bordeaux-text hover:text-gold transition-colors font-classic text-[10px]">
                    LinkedIn
                  </button>
                  <button className="bordeaux-text hover:text-gold transition-colors font-classic text-[10px]">
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Leituras Recomendadas */}
          {recommended && recommended.length > 0 && (
            <section className="mt-32 bg-white py-24 border-t border-slate-100">
              <div className="max-w-5xl mx-auto px-6">
                <h4 className="font-serif-luxury text-2xl bordeaux-text mb-12 text-center italic">
                  Leituras Recomendadas
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {recommended.map((rec, idx) => (
                    <div
                      key={idx}
                      className="group cursor-pointer border border-slate-50 p-5 md:p-8 hover:border-gold transition-all duration-500"
                    >
                      <p className="text-[7px] md:text-[9px] tracking-widest uppercase gold-text mb-1.5 md:mb-2 font-classic">
                        {rec.isNext ? "Próximo Insight" : "Anterior"}
                      </p>
                      <h5 className="font-serif-luxury text-sm md:text-xl bordeaux-text group-hover:text-gold transition-colors leading-tight md:leading-snug">
                        {rec.title}
                      </h5>
                      <p className="text-slate-500 text-sm mt-2">
                        {rec.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  );
};

export default Article;
