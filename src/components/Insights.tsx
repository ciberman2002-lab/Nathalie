// import React from 'react';
// import { motion } from 'framer-motion';

// interface InsightsProps {
//   onSeeAllClick: () => void;
// }

// const articles = [
//   {
//     category: "Governança",
//     title: "A Proteção de Ativos em Tempos de Incerteza Global",
//     date: "12 Março, 2024",
//     image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     category: "Sucessão",
//     title: "Family Offices: A Transição do Legado Intergeracional",
//     date: "28 Fevereiro, 2024",
//     image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     category: "Jurisprudência",
//     title: "Novas Diretrizes para o Planejamento Tributário Internacional",
//     date: "05 Fevereiro, 2024",
//     image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
//   }
// ];

// const Insights: React.FC<InsightsProps> = ({ onSeeAllClick }) => {
//   return (
//     <section id="artigos" className="py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 space-y-6 md:space-y-0">
//           <div className="text-left">
//             <span className="text-[10px] tracking-[0.5em] gold-text uppercase block mb-4 font-classic">Perspectivas Jurídicas</span>
//             <h2 className="font-serif-luxury text-4xl bordeaux-text">Insights & Artigos</h2>
//           </div>
//           <button
//             onClick={onSeeAllClick}
//             className="text-[10px] tracking-[0.3em] font-classic uppercase bordeaux-text border-b border-[#c5a028] pb-1 hover:text-[#c5a028] transition-colors"
//           >
//             Ver Todos os Artigos
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {articles.map((art, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               className="group cursor-pointer"
//             >
//               <div className="overflow-hidden aspect-[16/10] mb-6">
//                 <img
//                   src={art.image}
//                   alt={art.title}
//                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
//                 />
//               </div>
//               <span className="text-[9px] tracking-[0.2em] uppercase text-slate-400 mb-2 block">{art.category} — {art.date}</span>
//               <h3 className="font-serif-luxury text-xl bordeaux-text mb-4 leading-snug group-hover:text-[#c5a028] transition-colors">
//                 {art.title}
//               </h3>
//               <div className="w-8 h-[1px] bg-[#c5a028] group-hover:w-full transition-all duration-500" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Insights;

// import React from "react";
// import { motion } from "framer-motion";

// const posts = [
//   {
//     title: "Planejamento Sucessório: Como proteger seu patrimônio",
//     category: "Sucessões",
//     date: "15 Jan, 2024",
//     image:
//       "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     title: "Direitos do Executivo em rescisões de alto escalão",
//     category: "Trabalhista",
//     date: "10 Jan, 2024",
//     image:
//       "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
//   },
// ];

// const Insights: React.FC = () => {
//   return (
//     <section id="insights" className="py-24 px-6 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false }}
//           className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
//         >
//           <div>
//             <span className="text-[10px] tracking-[0.5em] gold-text uppercase block mb-4 font-classic">
//               Conhecimento
//             </span>
//             <h2 className="font-serif-luxury text-3xl md:text-5xl bordeaux-text italic">
//               Insights Jurídicos
//             </h2>
//           </div>
//           <button className="font-classic text-[10px] tracking-[0.3em] uppercase bordeaux-text border-b border-bordeaux/20 pb-2 hover:border-gold transition-all">
//             Ver todas as publicações
//           </button>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {posts.map((post, index) => (
//             <motion.article
//               key={index}
//               initial={{ opacity: 0, scale: 0.98 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: false }}
//               transition={{ delay: index * 0.2 }}
//               className="group cursor-pointer"
//             >
//               <div className="relative overflow-hidden mb-6 aspect-[16/9]">
//                 <img
//                   src={post.image}
//                   className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
//                   alt={post.title}
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
//               </div>
//               <span className="text-[9px] tracking-[0.3em] gold-text uppercase font-classic">
//                 {post.category} — {post.date}
//               </span>
//               <h3 className="font-serif-luxury text-xl md:text-2xl bordeaux-text mt-4 group-hover:gold-text transition-colors">
//                 {post.title}
//               </h3>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Insights;

// import React from "react";
// import { motion } from "framer-motion";

// interface ArticleCard {
//   slug: string;
//   title: string;
//   category: string;
//   date: string;
//   excerpt: string;
//   image: string;
// }

// interface InsightsProps {
//   posts: ArticleCard[]; // Recebe os posts como prop do Astro
// }

// const Insights: React.FC<InsightsProps> = ({ posts }) => {
//   const handleSeeAllClick = () => {
//     window.location.href = '/blog'; // Redireciona para a página de blog
//   };

// const Insights: React.FC<InsightsProps> = ({ posts }) => {
//   return (
//     <section id="insights" className="py-24 px-6 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false }}
//           className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
//         >
//           <div>
//             <span className="text-[10px] tracking-[0.5em] gold-text uppercase block mb-4 font-classic">
//               Conhecimento
//             </span>
//             <h2 className="font-serif-luxury text-3xl md:text-5xl bordeaux-text italic">
//               Insights Jurídicos
//             </h2>
//           </div>
//           <button onClick={handleSeeAllClick} className="font-classic text-[10px] tracking-[0.3em] uppercase bordeaux-text border-b border-bordeaux/20 pb-2 hover:border-gold transition-all">
//             Ver todas as publicações
//           </button>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {posts.map((post, index) => (
//             <motion.article
//               key={post.slug} // Usa slug como key única
//               initial={{ opacity: 0, scale: 0.98 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: false }}
//               transition={{ delay: index * 0.2 }}
//               className="group cursor-pointer"
//             >
//               <div className="relative overflow-hidden mb-6 aspect-[16/9]">
//                 <img
//                   src={post.image}
//                   className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
//                   alt={post.title}
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
//               </div>
//               <span className="text-[9px] tracking-[0.3em] gold-text uppercase font-classic">
//                 {post.category} — {post.date}
//               </span>
//               <h3 className="font-serif-luxury text-xl md:text-2xl bordeaux-text mt-4 group-hover:gold-text transition-colors">
//                 {post.title}
//               </h3>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Insights;

// import React from "react";
// import { motion } from "framer-motion";

// interface ArticleCard {
//   slug: string;
//   title: string;
//   category: string;
//   date: string;
//   excerpt: string;
//   image: string;
// }

// interface InsightsProps {
//   posts: ArticleCard[]; // Recebe os posts como prop do Astro
// }

// const Insights: React.FC<InsightsProps> = ({ posts }) => {
//   const handleSeeAllClick = () => {
//     window.location.href = "/blog"; // Redireciona para a página de blog
//   };

//   return (
//     <section id="insights" className="py-24 px-6 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false }}
//           className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
//         >
//           <div>
//             <span className="text-[10px] tracking-[0.5em] gold-text uppercase block mb-4 font-classic">
//               Conhecimento
//             </span>
//             <h2 className="font-serif-luxury text-3xl md:text-5xl bordeaux-text italic">
//               Insights Jurídicos
//             </h2>
//           </div>
//           <button
//             onClick={handleSeeAllClick}
//             className="font-classic text-[10px] tracking-[0.3em] uppercase bordeaux-text border-b border-bordeaux/20 pb-2 hover:border-gold transition-all cursor-pointer"
//           >
//             Ver todas as publicações
//           </button>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {posts.map((post, index) => (
//             <motion.article
//               key={post.slug}
//               initial={{ opacity: 0, scale: 0.98 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: false }}
//               transition={{ delay: index * 0.2 }}
//               className="group cursor-pointer"
//             >
//               <div className="relative overflow-hidden mb-6 aspect-[16/9]">
//                 <img
//                   src={post.image}
//                   className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
//                   alt={post.title}
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
//               </div>
//               <span className="text-[9px] tracking-[0.3em] gold-text uppercase font-classic">
//                 {post.category} — {post.date}
//               </span>
//               <h3 className="font-serif-luxury text-xl md:text-2xl bordeaux-text mt-4 group-hover:gold-text transition-colors">
//                 {post.title}
//               </h3>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Insights;

import React from "react";
import { motion } from "framer-motion";

interface ArticleCard {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

interface InsightsProps {
  posts: ArticleCard[];
}

const Insights: React.FC<InsightsProps> = ({ posts }) => {
  const handleSeeAllClick = () => {
    window.location.href = "/blog";
  };

  const handleArticleClick = (slug: string) => {
    window.location.href = `/blog/${slug}`;
  };

  return (
    <section id="insights" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6"
        >
          <div>
            <span className="text-[10px] tracking-[0.5em] gold-text uppercase block mb-4 font-classic">
              Conhecimento
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-5xl bordeaux-text italic">
              Insights Jurídicos
            </h2>
          </div>
          <button
            onClick={handleSeeAllClick}
            className="font-classic text-[10px] tracking-[0.3em] uppercase bordeaux-text border-b border-bordeaux/20 pb-2 hover:border-gold transition-all cursor-pointer mobileView"
          >
            Ver todas as publicações
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2 }}
              onClick={() => handleArticleClick(post.slug)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6 aspect-[16/9]">
                <img
                  src={post.image}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  alt={post.title}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
              </div>
              <span className="text-[9px] tracking-[0.3em] gold-text uppercase font-classic">
                {post.category} — {post.date}
              </span>
              <h3 className="font-serif-luxury text-xl md:text-2xl bordeaux-text mt-4 group-hover:gold-text transition-colors">
                {post.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
      {/* <button
        onClick={handleSeeAllClick}
        className="font-classic text-[10px] tracking-[0.3em] pt-12 uppercase bordeaux-text border-b border-bordeaux/20 pb-2 hover:border-gold transition-all cursor-pointer mobileView"
      >
        Ver todas as publicações
      </button> */}
    </section>
  );
};

export default Insights;
