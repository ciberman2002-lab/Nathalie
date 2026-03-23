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
          {/* <AnimatePresence mode="wait">
            {currentPosts.map((post, index) => ( */}
          <AnimatePresence mode="wait">
          {[...posts]
      .sort((a, b) => b.date.localeCompare(a.date)) // 1. Ordena tudo (Mais novo primeiro)
      .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage) // 2. Pega só os 4 da página atual
      .map((post, index) => (
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
