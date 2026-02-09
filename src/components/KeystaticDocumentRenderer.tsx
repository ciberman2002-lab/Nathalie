// // src/components/KeystaticDocumentRenderer.tsx
// import React from "react";

// type DocumentNode = {
//   type: string;
//   text?: string;
//   bold?: boolean;
//   italic?: boolean;
//   code?: boolean;
//   children?: DocumentNode[];
//   level?: number;
//   href?: string;
// };

// interface KeystaticDocumentRendererProps {
//   document: { type: string; children: DocumentNode[] } | DocumentNode[];
// }

// const KeystaticDocumentRenderer: React.FC<KeystaticDocumentRendererProps> = ({
//   document,
// }) => {
//   // Normaliza para array de nodes (Keystatic retorna root com children)
//   const nodes = Array.isArray(document)
//     ? document
//     : (document as any).children || [];

//   const renderNode = (node: DocumentNode, index: number): React.ReactNode => {
//     switch (node.type) {
//       case "paragraph":
//         return (
//           <p key={index} className="mb-6 leading-relaxed">
//             {node.children?.map(renderNode)}
//           </p>
//         );

//       case "heading":
//         const level = node.level || 2;
//         let HeadingComponent: React.ElementType;

//         switch (level) {
//           case 1:
//             HeadingComponent = "h1";
//             break;
//           case 2:
//             HeadingComponent = "h2";
//             break;
//           case 3:
//             HeadingComponent = "h3";
//             break;
//           case 4:
//             HeadingComponent = "h4";
//             break;
//           case 5:
//             HeadingComponent = "h5";
//             break;
//           case 6:
//             HeadingComponent = "h6";
//             break;
//           default:
//             HeadingComponent = "h2";
//         }

//         return (
//           <HeadingComponent
//             key={index}
//             className="font-serif-luxury text-2xl md:text-3xl bordeaux-text mt-10 mb-5 leading-tight"
//           >
//             {node.children?.map((child, i) => renderNode(child, i))}
//           </HeadingComponent>
//         );

//       case "unordered-list":
//         return (
//           <ul key={index} className="list-disc pl-8 mb-6 space-y-2">
//             {node.children?.map(renderNode)}
//           </ul>
//         );

//       case "ordered-list":
//         return (
//           <ol key={index} className="list-decimal pl-8 mb-6 space-y-2">
//             {node.children?.map(renderNode)}
//           </ol>
//         );

//       case "list-item":
//         return <li key={index}>{node.children?.map(renderNode)}</li>;

//       case "blockquote":
//         return (
//           <blockquote
//             key={index}
//             className="border-l-4 border-gold pl-6 italic text-xl bordeaux-text my-10"
//           >
//             {node.children?.map(renderNode)}
//           </blockquote>
//         );

//       case "link":
//         return (
//           <a
//             key={index}
//             href={node.href}
//             className="gold-text underline hover:gold-text/80 transition-colors"
//           >
//             {node.children?.map(renderNode)}
//           </a>
//         );

//       case "text":
//         let text: React.ReactNode = node.text || "";
//         if (node.bold) text = <strong>{text}</strong>;
//         if (node.italic) text = <em>{text}</em>;
//         if (node.code)
//           text = (
//             <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-sm">
//               {text}
//             </code>
//           );
//         return <React.Fragment key={index}>{text}</React.Fragment>;

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="prose prose-slate max-w-none prose-serif text-lg leading-relaxed bordeaux-text/80 space-y-8">
//       {nodes.map(renderNode)}
//     </div>
//   );
// };

// export default KeystaticDocumentRenderer;

// import React from "react";

// type Node = {
//   type: string;
//   children?: Node[];
//   text?: string;
//   bold?: boolean;
//   italic?: boolean;
//   code?: boolean;
//   level?: number;
//   href?: string;
//   // Suporte básico a imagens e outros, se necessário
//   src?: string;
//   alt?: string;
// };

// interface Props {
//   document: Node | { type: "root"; children: Node[] } | null;
// }

// const KeystaticDocumentRenderer: React.FC<Props> = ({ document }) => {
//   if (!document) return null;

//   // Normaliza para array de children
//   const rootChildren =
//     "children" in document && Array.isArray(document.children)
//       ? document.children
//       : Array.isArray(document)
//         ? document
//         : [];

//   const renderNode = (node: Node, index: number): React.ReactNode => {
//     const key = index;

//     switch (node.type) {
//       case "paragraph":
//         return (
//           <p key={key} className="mb-6 leading-relaxed text-lg">
//             {renderChildren(node.children)}
//           </p>
//         );

//       case "heading":
//         const level = node.level || 2;
//         const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
//         return (
//           <HeadingTag
//             key={key}
//             className="font-serif-luxury text-3xl md:text-4xl bordeaux-text mt-12 mb-6 leading-tight"
//           >
//             {renderChildren(node.children)}
//           </HeadingTag>
//         );

//       case "unordered-list":
//         return (
//           <ul key={key} className="list-disc pl-6 mb-6 space-y-2">
//             {renderChildren(node.children)}
//           </ul>
//         );

//       case "ordered-list":
//         return (
//           <ol key={key} className="list-decimal pl-6 mb-6 space-y-2">
//             {renderChildren(node.children)}
//           </ol>
//         );

//       case "list-item":
//         return <li key={key}>{renderChildren(node.children)}</li>;

//       case "blockquote":
//         return (
//           <blockquote
//             key={key}
//             className="border-l-4 border-gold pl-6 italic text-xl bordeaux-text my-10"
//           >
//             {renderChildren(node.children)}
//           </blockquote>
//         );

//       case "link":
//         return (
//           <a
//             key={key}
//             href={node.href}
//             className="gold-text underline hover:opacity-80 transition-opacity"
//           >
//             {renderChildren(node.children)}
//           </a>
//         );

//       case "text":
//         let content: React.ReactNode = node.text || "";
//         if (node.bold) content = <strong>{content}</strong>;
//         if (node.italic) content = <em>{content}</em>;
//         if (node.code)
//           content = (
//             <code className="bg-slate-100 px-1.5 rounded font-mono text-sm">
//               {content}
//             </code>
//           );
//         return <span key={key}>{content}</span>;

//       // Suporte básico a imagem (se você usar no Keystatic)
//       case "image":
//         return (
//           <img
//             key={key}
//             src={node.src}
//             alt={node.alt || ""}
//             className="my-8 rounded-lg shadow-md max-w-full h-auto"
//           />
//         );

//       default:
//         return null;
//     }
//   };

//   const renderChildren = (children?: Node[]) => {
//     if (!children || children.length === 0) return null;
//     return children.map((child, i) => renderNode(child, i));
//   };

//   return (
//     <div className="prose prose-slate max-w-none prose-serif text-lg leading-relaxed bordeaux-text/80 space-y-8">
//       {renderChildren(rootChildren)}
//     </div>
//   );
// };

// export default KeystaticDocumentRenderer;

// import React from "react";

// type Node = {
//   type: string;
//   children?: Node[];
//   text?: string;
//   bold?: boolean;
//   italic?: boolean;
//   code?: boolean;
//   level?: number;
//   href?: string;
//   src?: string;
//   alt?: string;
// };

// interface Props {
//   document: any; // Flexível para evitar erros de tipo
// }

// const KeystaticDocumentRenderer: React.FC<Props> = ({ document }) => {
//   // Normaliza para array de nodes (Keystatic retorna { type: 'root', children: [...] })
//   const nodes = document?.children || (Array.isArray(document) ? document : []);

//   if (nodes.length === 0) {
//     return <p className="text-red-600">Conteúdo vazio ou não carregado.</p>;
//   }

//   const renderNode = (node: Node, index: number): React.ReactNode => {
//     const key = index;

//     switch (node.type) {
//       case "paragraph":
//         return (
//           <p key={key} className="mb-6 leading-relaxed">
//             {renderChildren(node.children)}
//           </p>
//         );

//       case "heading":
//         const level = node.level || 2;
//         const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
//         return (
//           <HeadingTag
//             key={key}
//             className="font-serif-luxury text-3xl md:text-4xl bordeaux-text mt-12 mb-6 leading-tight"
//           >
//             {renderChildren(node.children)}
//           </HeadingTag>
//         );

//       case "unordered-list":
//         return (
//           <ul key={key} className="list-disc pl-8 mb-6 space-y-2">
//             {renderChildren(node.children)}
//           </ul>
//         );

//       case "ordered-list":
//         return (
//           <ol key={key} className="list-decimal pl-8 mb-6 space-y-2">
//             {renderChildren(node.children)}
//           </ol>
//         );

//       case "list-item":
//         return <li key={key}>{renderChildren(node.children)}</li>;

//       case "blockquote":
//         return (
//           <blockquote
//             key={key}
//             className="border-l-4 border-gold pl-6 italic text-xl bordeaux-text my-10"
//           >
//             {renderChildren(node.children)}
//           </blockquote>
//         );

//       case "link":
//         return (
//           <a
//             key={key}
//             href={node.href}
//             className="gold-text underline hover:opacity-80"
//           >
//             {renderChildren(node.children)}
//           </a>
//         );

//       case "text":
//         let content: React.ReactNode = node.text || "";
//         if (node.bold) content = <strong>{content}</strong>;
//         if (node.italic) content = <em>{content}</em>;
//         if (node.code)
//           content = (
//             <code className="bg-slate-100 px-1.5 rounded font-mono text-sm">
//               {content}
//             </code>
//           );
//         return <span key={key}>{content}</span>;

//       default:
//         return null;
//     }
//   };

//   const renderChildren = (children?: Node[]) =>
//     children?.map((child, i) => renderNode(child, i)) ?? null;

//   return (
//     <div className="prose prose-slate max-w-none prose-serif text-lg leading-relaxed bordeaux-text/80 space-y-8">
//       {nodes.map((node, i) => renderNode(node, i))}
//     </div>
//   );
// };

// export default KeystaticDocumentRenderer;

// src/components/KeystaticDocumentRenderer.tsx

//###############################################################################################################
// import React from "react";

// type Node = {
//   type: string;
//   children?: Node[];
//   text?: string;
//   bold?: boolean;
//   italic?: boolean;
//   code?: boolean;
//   level?: number;
//   href?: string;
//   src?: string;
//   alt?: string;
// };

// interface Props {
//   document: any; // Flexível para evitar erros de tipo
// }

// const KeystaticDocumentRenderer: React.FC<Props> = ({ document }) => {
//   // Normaliza para array de nodes (Keystatic retorna { type: 'root', children: [...] })
//   const nodes = document?.children || (Array.isArray(document) ? document : []);

//   if (nodes.length === 0) {
//     return <p className="text-red-600">Conteúdo vazio ou não carregado.</p>;
//   }

//   const renderNode = (node: Node, index: number): React.ReactNode => {
//     const key = index;

//     switch (node.type) {
//       case "paragraph":
//         return (
//           <p
//             key={key}
//             className="mb-6 leading-relaxed text-lg bordeaux-text/80"
//           >
//             {renderChildren(node.children)}
//           </p>
//         );

//       case "heading": {
//         const level = node.level || 2;
//         if (level === 1)
//           return (
//             <h1 key={key} className="...">
//               {renderChildren(node.children)}
//             </h1>
//           );
//         if (level === 2)
//           return (
//             <h2 key={key} className="...">
//               {renderChildren(node.children)}
//             </h2>
//           );
//         if (level === 3)
//           return (
//             <h3 key={key} className="...">
//               {renderChildren(node.children)}
//             </h3>
//           );
//         if (level === 4)
//           return (
//             <h4 key={key} className="...">
//               {renderChildren(node.children)}
//             </h4>
//           );
//         if (level === 5)
//           return (
//             <h5 key={key} className="...">
//               {renderChildren(node.children)}
//             </h5>
//           );
//         if (level === 6)
//           return (
//             <h6 key={key} className="...">
//               {renderChildren(node.children)}
//             </h6>
//           );
//         return (
//           <h2 key={key} className="...">
//             {renderChildren(node.children)}
//           </h2>
//         ); // fallback
//       }

//       case "unordered-list":
//         return (
//           <ul
//             key={key}
//             className="list-disc pl-8 mb-6 space-y-2 bordeaux-text/80"
//           >
//             {renderChildren(node.children)}
//           </ul>
//         );

//       case "ordered-list":
//         return (
//           <ol
//             key={key}
//             className="list-decimal pl-8 mb-6 space-y-2 bordeaux-text/80"
//           >
//             {renderChildren(node.children)}
//           </ol>
//         );

//       case "list-item":
//         return <li key={key}>{renderChildren(node.children)}</li>;

//       case "blockquote":
//         return (
//           <blockquote
//             key={key}
//             className="border-l-4 border-gold pl-6 italic text-xl bordeaux-text my-10"
//           >
//             {renderChildren(node.children)}
//           </blockquote>
//         );

//       case "link":
//         return (
//           <a
//             key={key}
//             href={node.href}
//             className="gold-text underline hover:opacity-80 transition-opacity"
//           >
//             {renderChildren(node.children)}
//           </a>
//         );

//       case "image":
//         return (
//           <img
//             key={key}
//             src={node.src}
//             alt={node.alt || ""}
//             className="my-8 rounded-lg shadow-md max-w-full h-auto mx-auto"
//           />
//         );

//       case "text":
//         let content: React.ReactNode = node.text || "";
//         if (node.bold) content = <strong>{content}</strong>;
//         if (node.italic) content = <em>{content}</em>;
//         if (node.code)
//           content = (
//             <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-sm">
//               {content}
//             </code>
//           );
//         return <span key={key}>{content}</span>;

//       default:
//         return null;
//     }
//   };

//   const renderChildren = (children?: Node[]) =>
//     children?.map((child, i) => renderNode(child, i)) ?? null;

//   return (
//     <div className="prose prose-slate max-w-none text-lg leading-relaxed bordeaux-text/80 space-y-8">
//       {nodes.map((node, i) => renderNode(node, i))}
//     </div>
//   );
// };

// export default KeystaticDocumentRenderer;

// src/components/KeystaticDocumentRenderer.tsx

//#################################################################################################
//#################################################################################################
//#################################################################################################
//#################################################################################################
//#################################################################################################
//#################################################################################################
//#################################################################################################

// import React from "react";

// /// <reference types="react" />
// /// <reference types="react/jsx-runtime" />

// type Node = {
//   type: string;
//   children?: Node[];
//   text?: string;
//   bold?: boolean;
//   italic?: boolean;
//   code?: boolean;
//   level?: number;
//   href?: string;
//   src?: string;
//   alt?: string;
// };

// interface Props {
//   document: any; // Mantido flexível pois o Keystatic retorna tipos complexos
// }

// const KeystaticDocumentRenderer: React.FC<Props> = ({ document }) => {
//   // Normaliza para array de nodes
//   const nodes: Node[] =
//     document?.children || (Array.isArray(document) ? document : []);

//   if (nodes.length === 0) {
//     return <p className="text-red-600">Conteúdo vazio ou não carregado.</p>;
//   }

//   const renderNode = (node: Node, index: number): React.ReactNode => {
//     const key = index;

//     switch (node.type) {
//       case "paragraph":
//         return (
//           <p
//             key={key}
//             className="mb-6 leading-relaxed text-lg bordeaux-text/80"
//           >
//             {renderChildren(node.children)}
//           </p>
//         );

//       case "heading": {
//         const level = node.level || 2;
//         const safeLevel = Math.min(Math.max(level, 1), 6);

//         if (safeLevel === 1) {
//           return (
//             <h1
//               key={key}
//               className="font-serif-luxury text-4xl md:text-5xl bordeaux-text mt-16 mb-8 leading-tight"
//             >
//               {renderChildren(node.children)}
//             </h1>
//           );
//         }
//         if (safeLevel === 2) {
//           return (
//             <h2
//               key={key}
//               className="font-serif-luxury text-3xl md:text-4xl bordeaux-text mt-12 mb-6 leading-tight"
//             >
//               {renderChildren(node.children)}
//             </h2>
//           );
//         }
//         if (safeLevel === 3) {
//           return (
//             <h3
//               key={key}
//               className="font-serif-luxury text-2xl md:text-3xl bordeaux-text mt-10 mb-5 leading-tight"
//             >
//               {renderChildren(node.children)}
//             </h3>
//           );
//         }
//         if (safeLevel === 4) {
//           return (
//             <h4
//               key={key}
//               className="font-serif-luxury text-xl md:text-2xl bordeaux-text mt-8 mb-4 leading-tight"
//             >
//               {renderChildren(node.children)}
//             </h4>
//           );
//         }
//         if (safeLevel === 5) {
//           return (
//             <h5
//               key={key}
//               className="font-serif-luxury text-lg md:text-xl bordeaux-text mt-6 mb-3 leading-tight"
//             >
//               {renderChildren(node.children)}
//             </h5>
//           );
//         }
//         return (
//           <h6
//             key={key}
//             className="font-serif-luxury text-base md:text-lg bordeaux-text mt-6 mb-3 leading-tight"
//           >
//             {renderChildren(node.children)}
//           </h6>
//         );
//       }

//       case "unordered-list":
//         return (
//           <ul
//             key={key}
//             className="list-disc pl-8 mb-6 space-y-2 bordeaux-text/80"
//           >
//             {renderChildren(node.children)}
//           </ul>
//         );

//       case "ordered-list":
//         return (
//           <ol
//             key={key}
//             className="list-decimal pl-8 mb-6 space-y-2 bordeaux-text/80"
//           >
//             {renderChildren(node.children)}
//           </ol>
//         );

//       case "list-item":
//         return <li key={key}>{renderChildren(node.children)}</li>;

//       case "blockquote":
//         return (
//           <blockquote
//             key={key}
//             className="border-l-4 border-gold pl-6 italic text-xl bordeaux-text my-10"
//           >
//             {renderChildren(node.children)}
//           </blockquote>
//         );

//       case "link":
//         return (
//           <a
//             key={key}
//             href={node.href}
//             className="gold-text underline hover:opacity-80 transition-opacity"
//           >
//             {renderChildren(node.children)}
//           </a>
//         );

//       case "image":
//         return (
//           <img
//             key={key}
//             src={node.src}
//             alt={node.alt || "Imagem do artigo"}
//             className="my-8 rounded-lg shadow-md max-w-full h-auto mx-auto"
//           />
//         );

//       case "text":
//         let content: React.ReactNode = node.text || "";
//         if (node.bold) content = <strong>{content}</strong>;
//         if (node.italic) content = <em>{content}</em>;
//         if (node.code) {
//           content = (
//             <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-sm">
//               {content}
//             </code>
//           );
//         }
//         return <span key={key}>{content}</span>;

//       default:
//         return null;
//     }
//   };

//   const renderChildren = (children?: Node[]): React.ReactNode => {
//     if (!children || children.length === 0) return null;
//     return children.map((node, i) => renderNode(node, i));
//   };

//   return (
//     <div className="prose prose-slate max-w-none text-lg leading-relaxed bordeaux-text/80 space-y-8">
//       {nodes.map((node, i) => renderNode(node, i))}
//     </div>
//   );
// };

// export default KeystaticDocumentRenderer;

// import React from "react";

// /// <reference types="react" />
// /// <reference types="react/jsx-runtime" />

// type Node = {
//   type: string;
//   children?: Node[];
//   text?: string;
//   bold?: boolean;
//   italic?: boolean;
//   code?: boolean;
//   level?: number;
//   href?: string;
//   src?: string;
//   alt?: string;
// };

// interface Props {
//   document: any;
// }

// const KeystaticDocumentRenderer: React.FC<Props> = ({ document }) => {
//   // Normalização segura e determinística
//   const nodes: Node[] =
//     document?.children ?? (Array.isArray(document) ? document : []);

//   if (nodes.length === 0) {
//     return null; // Retorna vazio no SSR para evitar mismatch
//   }

//   const renderNode = (node: Node, index: number): React.ReactNode => {
//     const key = `node-${index}`;

//     switch (node.type) {
//       case "paragraph":
//         return (
//           <p
//             key={key}
//             className="mb-6 leading-relaxed text-lg bordeaux-text/80"
//           >
//             {renderChildren(node.children)}
//           </p>
//         );

//       case "heading": {
//         const level = node.level || 2;
//         const safeLevel = Math.min(Math.max(level, 1), 6);

//         if (safeLevel === 1) {
//           return (
//             <h1
//               key={key}
//               className="font-serif-luxury text-4xl md:text-5xl bordeaux-text mt-16 mb-8 leading-tight"
//             >
//               {renderChildren(node.children)}
//             </h1>
//           );
//         }
//         if (safeLevel === 2) {
//           return (
//             <h2
//               key={key}
//               className="font-serif-luxury text-3xl md:text-4xl bordeaux-text mt-12 mb-6 leading-tight"
//             >
//               {renderChildren(node.children)}
//             </h2>
//           );
//         }
//         if (safeLevel === 3) {
//           return (
//             <h3
//               key={key}
//               className="font-serif-luxury text-2xl md:text-3xl bordeaux-text mt-10 mb-5 leading-tight"
//             >
//               {renderChildren(node.children)}
//             </h3>
//           );
//         }
//         if (safeLevel === 4) {
//           return (
//             <h4
//               key={key}
//               className="font-serif-luxury text-xl md:text-2xl bordeaux-text mt-8 mb-4 leading-tight"
//             >
//               {renderChildren(node.children)}
//             </h4>
//           );
//         }
//         if (safeLevel === 5) {
//           return (
//             <h5
//               key={key}
//               className="font-serif-luxury text-lg md:text-xl bordeaux-text mt-6 mb-3 leading-tight"
//             >
//               {renderChildren(node.children)}
//             </h5>
//           );
//         }
//         return (
//           <h6
//             key={key}
//             className="font-serif-luxury text-base md:text-lg bordeaux-text mt-6 mb-3 leading-tight"
//           >
//             {renderChildren(node.children)}
//           </h6>
//         );
//       }

//       case "unordered-list":
//         return (
//           <ul
//             key={key}
//             className="list-disc pl-8 mb-6 space-y-2 bordeaux-text/80"
//           >
//             {renderChildren(node.children)}
//           </ul>
//         );

//       case "ordered-list":
//         return (
//           <ol
//             key={key}
//             className="list-decimal pl-8 mb-6 space-y-2 bordeaux-text/80"
//           >
//             {renderChildren(node.children)}
//           </ol>
//         );

//       case "list-item":
//         return <li key={key}>{renderChildren(node.children)}</li>;

//       case "blockquote":
//         return (
//           <blockquote
//             key={key}
//             className="border-l-4 border-gold pl-6 italic text-xl bordeaux-text my-10"
//           >
//             {renderChildren(node.children)}
//           </blockquote>
//         );

//       case "link":
//         return (
//           <a
//             key={key}
//             href={node.href}
//             className="gold-text underline hover:opacity-80 transition-opacity"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {renderChildren(node.children)}
//           </a>
//         );

//       case "image":
//         return (
//           <img
//             key={key}
//             src={node.src}
//             alt={node.alt || "Imagem do artigo"}
//             className="my-8 rounded-lg shadow-md max-w-full h-auto mx-auto"
//           />
//         );

//       case "text":
//         let content: React.ReactNode = node.text || "";
//         if (node.bold) content = <strong>{content}</strong>;
//         if (node.italic) content = <em>{content}</em>;
//         if (node.code)
//           content = (
//             <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-sm">
//               {content}
//             </code>
//           );
//         return <React.Fragment key={key}>{content}</React.Fragment>;

//       default:
//         return null; // Ignora tipos desconhecidos silenciosamente
//     }
//   };

//   const renderChildren = (children?: Node[]): React.ReactNode =>
//     children ? children.map((child, i) => renderNode(child, i)) : null;

//   return (
//     <div className="prose prose-slate max-w-none text-lg leading-relaxed bordeaux-text/80 space-y-8">
//       {nodes.map((node, i) => renderNode(node, i))}
//     </div>
//   );
// };

// export default KeystaticDocumentRenderer;

import React from "react";

type Node = {
  type: string;
  children?: Node[];
  text?: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  level?: number;
  href?: string;
  src?: string;
  alt?: string;
};

interface Props {
  document: any;
}

const KeystaticDocumentRenderer: React.FC<Props> = ({ document }) => {
  const nodes: Node[] =
    document?.children ?? (Array.isArray(document) ? document : []);

  // Sem fallback visível no SSR para evitar mismatch
  if (nodes.length === 0) {
    return null;
  }

  const renderNode = (node: Node, index: number): React.ReactNode => {
    const key = `node-${index}`;

    // 🔥 Texto inline SEM type (Keystatic real)
    if (!node.type && node.text) {
      let content: React.ReactNode = node.text;

      if (node.bold) content = <strong>{content}</strong>;
      if (node.italic) content = <em>{content}</em>;
      if (node.code) {
        content = (
          <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-sm">
            {content}
          </code>
        );
      }

      return <React.Fragment key={key}>{content}</React.Fragment>;
    }

    switch (node.type) {
      case "paragraph":
        return (
          <p
            key={key}
            className="mb-6 leading-relaxed text-lg bordeaux-text/80"
          >
            {renderChildren(node.children)}
          </p>
        );

      case "list-item":
        return <li key={key}>{renderChildren(node.children)}</li>;

      case "text":
        let content: React.ReactNode = node.text || "";
        if (node.bold) content = <strong>{content}</strong>;
        if (node.italic) content = <em>{content}</em>;
        if (node.code) content = <code>{content}</code>;
        return <React.Fragment key={key}>{content}</React.Fragment>;

      default:
        return null;
    }
  };

  const renderChildren = (children?: Node[]): React.ReactNode =>
    children ? children.map((child, i) => renderNode(child, i)) : null;

  return (
    <div className="prose prose-slate max-w-none text-lg leading-relaxed bordeaux-text/80 space-y-8">
      {nodes.map((node, i) => renderNode(node, i))}
    </div>
  );
};

export default KeystaticDocumentRenderer;
