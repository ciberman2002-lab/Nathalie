// import React, { useState, useEffect } from "react";

// interface HeaderProps {
//   onHomeClick: () => void;
//   currentView: "home" | "blog" | "article";
//   onOpenMenu: () => void;
// }

// const Header: React.FC<HeaderProps> = ({
//   onHomeClick,
//   currentView,
//   onOpenMenu,
// }) => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogoClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     onHomeClick();
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleLinkClick = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     targetId: string,
//   ) => {
//     e.preventDefault();

//     if (currentView !== "home") {
//       onHomeClick();
//       setTimeout(() => {
//         scrollToSection(targetId);
//       }, 300);
//     } else {
//       scrollToSection(targetId);
//     }
//   };

//   const scrollToSection = (targetId: string) => {
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

//   const headerClasses = `fixed top-0 left-0 w-full z-[140] transition-all duration-500
//     ${
//       isScrolled
//         ? "bg-white/95 backdrop-blur-md py-3 shadow-[0_5px_30px_rgba(0,0,0,0.03)]"
//         : "bg-transparent py-4 lg:py-10 shadow-none"
//     }
//   `;

//   return (
//     <header className={headerClasses}>
//       <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
//         {/* Links Esquerdos (Desktop) */}
//         <nav className="hidden lg:flex items-center space-x-12 text-[10px] tracking-[0.4em] font-classic uppercase bordeaux-text">
//           <a
//             href="#expertise"
//             onClick={(e) => handleLinkClick(e, "expertise")}
//             className="hover:text-[#c5a028] transition-colors relative group"
//           >
//             Expertise
//             <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a028] group-hover:w-full transition-all" />
//           </a>
//           <a
//             href="#sobre"
//             onClick={(e) => handleLinkClick(e, "sobre")}
//             className="hover:text-[#c5a028] transition-colors relative group"
//           >
//             Sobre
//             <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a028] group-hover:w-full transition-all" />
//           </a>
//         </nav>

//         {/* Logo Central */}
//         <a
//           href="#"
//           onClick={handleLogoClick}
//           className="text-center group cursor-pointer flex flex-col items-center"
//         >
//           <h1 className="font-classic text-sm md:text-2xl tracking-[0.2em] md:tracking-[0.3em] bordeaux-text leading-tight group-hover:text-[#c5a028] transition-colors">
//             NATHALIE ALMEIDA
//           </h1>
//           <div className="h-[1px] w-4 md:w-6 bg-[#c5a028] my-0.5 md:my-1 opacity-50" />
//           <p className="text-[7px] md:text-[8px] tracking-[0.3em] md:tracking-[0.5em] gold-text uppercase font-medium">
//             Advocacia de Prestígio
//           </p>
//         </a>

//         {/* Links Direitos (Desktop) */}
//         <nav className="hidden lg:flex items-center space-x-12 text-[10px] tracking-[0.4em] font-classic uppercase bordeaux-text">
//           <a
//             href="#artigos"
//             onClick={(e) => handleLinkClick(e, "artigos")}
//             className="hover:text-[#c5a028] transition-colors relative group"
//           >
//             Insights
//             <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a028] group-hover:w-full transition-all" />
//           </a>
//           <a
//             href="#faq"
//             onClick={(e) => handleLinkClick(e, "faq")}
//             className="hover:text-[#c5a028] transition-colors relative group"
//           >
//             FAQ
//             <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a028] group-hover:w-full transition-all" />
//           </a>
//         </nav>

//         {/* Mobile Toggle */}
//         <button
//           onClick={onOpenMenu}
//           className="lg:hidden bordeaux-text p-2 -mr-2"
//           aria-label="Abrir Menu"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="1"
//               d="M4 8h16M4 16h16"
//             />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import { AnimatePresence } from "framer-motion";
// import MobileMenu from "./MobileMenu";

// const Header: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Controle de scroll para mudar a aparência do header
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Bloquear o scroll do corpo quando o menu mobile estiver aberto
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [isMenuOpen]);

//   const handleLogoClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const scrollToSection = (targetId: string) => {
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

//   const handleLinkClick = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     targetId: string,
//   ) => {
//     e.preventDefault();
//     scrollToSection(targetId);
//   };

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-[140] transition-all duration-500 ${
//           isScrolled
//             ? "bg-white/95 backdrop-blur-md py-3 shadow-[0_5px_30px_rgba(0,0,0,0.03)]"
//             : "bg-transparent py-4 lg:py-10 shadow-none"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
//           {/* Links Esquerdos (Desktop) */}
//           <nav className="hidden lg:flex items-center space-x-12 text-[10px] tracking-[0.4em] font-classic uppercase bordeaux-text">
//             <a
//               href="#expertise"
//               onClick={(e) => handleLinkClick(e, "expertise")}
//               className="hover:text-[#c5a028] transition-colors relative group"
//             >
//               Expertise
//               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a028] group-hover:w-full transition-all" />
//             </a>
//             <a
//               href="#sobre"
//               onClick={(e) => handleLinkClick(e, "sobre")}
//               className="hover:text-[#c5a028] transition-colors relative group"
//             >
//               Sobre
//               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a028] group-hover:w-full transition-all" />
//             </a>
//           </nav>

//           {/* Logo Central */}
//           <a
//             href="#"
//             onClick={handleLogoClick}
//             className="text-center group cursor-pointer flex flex-col items-center"
//           >
//             <h1 className="font-classic text-sm md:text-2xl tracking-[0.2em] md:tracking-[0.3em] bordeaux-text leading-tight group-hover:text-[#c5a028] transition-colors">
//               NATHALIE ALMEIDA
//             </h1>
//             <div className="h-[1px] w-4 md:w-6 bg-[#c5a028] my-0.5 md:my-1 opacity-50" />
//             <p className="text-[7px] md:text-[8px] tracking-[0.3em] md:tracking-[0.5em] gold-text uppercase font-medium">
//               Advocacia de Prestígio
//             </p>
//           </a>

//           {/* Links Direitos (Desktop) */}
//           <nav className="hidden lg:flex items-center space-x-12 text-[10px] tracking-[0.4em] font-classic uppercase bordeaux-text">
//             <a
//               href="#artigos"
//               onClick={(e) => handleLinkClick(e, "insights")}
//               className="hover:text-[#c5a028] transition-colors relative group"
//             >
//               Insights
//               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a028] group-hover:w-full transition-all" />
//             </a>
//             <a
//               href="#faq"
//               onClick={(e) => handleLinkClick(e, "faq")}
//               className="hover:text-[#c5a028] transition-colors relative group"
//             >
//               FAQ
//               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a028] group-hover:w-full transition-all" />
//             </a>
//           </nav>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setIsMenuOpen(true)}
//             className="lg:hidden bordeaux-text p-2 -mr-2"
//             aria-label="Abrir Menu"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1"
//                 d="M4 8h16M4 16h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </header>

//       {/* Menu Mobile Integrado com Framer Motion */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <MobileMenu
//             onClose={() => setIsMenuOpen(false)}
//             onHomeClick={() => {
//               window.scrollTo({ top: 0, behavior: "smooth" });
//               setIsMenuOpen(false);
//             }}
//             onLinkClick={(id) => {
//               setIsMenuOpen(false);
//               setTimeout(() => scrollToSection(id), 300);
//             }}
//             onBlogClick={() => {}} // Deixado vazio conforme pedido (sem blog por enquanto)
//           />
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Header;

// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const handleSectionLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();

    // Se já estamos na home, scroll direto
    if (window.location.pathname === "/" || window.location.pathname === "") {
      scrollToSection(sectionId);
    } else {
      // Redireciona para home com parâmetro de seção
      window.location.href = `/?section=${sectionId}`;
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === "/" || window.location.pathname === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[140] transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-3 shadow-[0_5px_30px_rgba(0,0,0,0.03)]"
            : "bg-transparent py-4 lg:py-10 shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Links Esquerdos (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-12 text-[10px] tracking-[0.4em] font-classic uppercase bordeaux-text">
            <a
              href="/"
              onClick={(e) => handleSectionLink(e, "expertise")}
              className="hover:text-[#c5a028] transition-colors relative group"
            >
              Expertise
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a028] group-hover:w-full transition-all" />
            </a>
            <a
              href="/"
              onClick={(e) => handleSectionLink(e, "sobre")}
              className="hover:text-[#c5a028] transition-colors relative group"
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a028] group-hover:w-full transition-all" />
            </a>
          </nav>

          {/* Logo Central */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="text-center group cursor-pointer flex flex-col items-center"
          >
            <h1 className="font-classic text-sm md:text-2xl tracking-[0.2em] md:tracking-[0.3em] bordeaux-text leading-tight group-hover:text-[#c5a028] transition-colors">
              NATHALIE ALMEIDA
            </h1>
            <div className="h-[1px] w-4 md:w-6 bg-[#c5a028] my-0.5 md:my-1 opacity-50" />
            <p className="text-[7px] md:text-[8px] tracking-[0.3em] md:tracking-[0.5em] gold-text uppercase font-medium">
              Advocacia de Prestígio
            </p>
          </a>

          {/* Links Direitos (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-12 text-[10px] tracking-[0.4em] font-classic uppercase bordeaux-text">
            <a
              href="/"
              onClick={(e) => handleSectionLink(e, "insights")}
              className="hover:text-[#c5a028] transition-colors relative group"
            >
              Insights
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a028] group-hover:w-full transition-all" />
            </a>
            <a
              href="/"
              onClick={(e) => handleSectionLink(e, "faq")}
              className="hover:text-[#c5a028] transition-colors relative group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a028] group-hover:w-full transition-all" />
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden bordeaux-text p-2 -mr-2"
            aria-label="Abrir Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            onClose={() => setIsMenuOpen(false)}
            onHomeClick={() => {
              if (
                window.location.pathname === "/" ||
                window.location.pathname === ""
              ) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                window.location.href = "/";
              }
              setIsMenuOpen(false);
            }}
            onLinkClick={(id) => {
              setIsMenuOpen(false);
              if (
                window.location.pathname === "/" ||
                window.location.pathname === ""
              ) {
                setTimeout(() => scrollToSection(id), 300);
              } else {
                window.location.href = `/?section=${id}`;
              }
            }}
            onBlogClick={() => (window.location.href = "/blog")}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
