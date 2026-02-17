

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
//   posts: ArticleCard[];
// }

// const Insights: React.FC<InsightsProps> = ({ posts }) => {
//   const handleSeeAllClick = () => {
//     window.location.href = "/blog";
//   };

//   const handleArticleClick = (slug: string) => {
//     window.location.href = `/blog/${slug}`;
//   };

//   return (
//     <section id="insights" className="py-24 px-6 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false }}
//           className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6"
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
//             className="font-classic text-[10px] tracking-[0.3em] uppercase bordeaux-text border-b border-bordeaux/20 pb-2 hover:border-gold transition-all cursor-pointer mobileView"
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
//               onClick={() => handleArticleClick(post.slug)}
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
//       {/* <button
//         onClick={handleSeeAllClick}
//         className="font-classic text-[10px] tracking-[0.3em] pt-12 uppercase bordeaux-text border-b border-bordeaux/20 pb-2 hover:border-gold transition-all cursor-pointer mobileView"
//       >
//         Ver todas as publicações
//       </button> */}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts
            .slice(-3) 
            .reverse()
            .map((post, index) => (
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
                    loading="lazy"
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
