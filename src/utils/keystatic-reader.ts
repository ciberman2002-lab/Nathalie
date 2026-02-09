// src/utils/keystatic-reader.ts
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

const isDev = import.meta.env.DEV;

console.log("[Keystatic Reader] Iniciando reader...");
console.log("[Keystatic Reader] Ambiente DEV:", isDev);
console.log("[Keystatic Reader] Caminho base:", isDev ? "./" : process.cwd());

export const reader = createReader(
  isDev ? "./" : process.cwd(),
  keystaticConfig,
);

type ArticleCategory =
  | "Direito de Família"
  | "Sucessões"
  | "Trabalhista"
  | "Governança"
  | "Jurisprudência";

export interface ArticleCard {
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  excerpt: string;
  image: string;
}

export async function getAllArticles(): Promise<ArticleCard[]> {
  console.log('[getAllArticles] Iniciando leitura da coleção "artigos"...');

  let slugs: string[] = [];
  try {
    slugs = await reader.collections.artigos.list();
    // console.log("[getAllArticles] Slugs encontrados:", slugs);
  } catch (err) {
    console.error("[getAllArticles] Erro ao listar slugs:", err);
  }

  // if (slugs.length === 0) {
  //   console.warn("[getAllArticles] Nenhum artigo encontrado. Verifique:");
  //   console.warn("  - Pasta: src/content/artigos/");
  //   console.warn("  - Arquivos: *.mdoc");
  //   console.warn('  - Nome da coleção no config: "artigos"');
  // }

  const articles = await Promise.all(
    slugs.map(async (slug) => {
      // console.log(`[getAllArticles] Lendo slug: ${slug}`);
      const entry = await reader.collections.artigos.read(slug);
      if (!entry) {
        console.warn(
          `[getAllArticles] Entry não encontrado para slug: ${slug}`,
        );
        return null;
      }

      const rawDate = entry.date ?? "Data não disponível";
      const formattedDate = new Date(rawDate).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      return {
        slug,
        title: entry.title,
        category: entry.category as ArticleCategory,
        date: formattedDate,
        excerpt:
          entry.quote?.trim() ||
          (entry.specialistNote?.content ?? "").slice(0, 150).trim() + "..." ||
          "Artigo jurídico especializado pela Dra. Nathalie Almeida.",
        image: entry.heroImage?.src
          ? entry.heroImage.src.startsWith("/")
            ? entry.heroImage.src
            : `${entry.heroImage.src}`
          : "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
      };
    }),
  );

  const validArticles = articles.filter(
    (article): article is ArticleCard => article !== null,
  );

  // console.log(
  //   "[getAllArticles] Artigos válidos encontrados:",
  //   validArticles.length,
  // );
  // console.log("[getAllArticles] Retornando:", validArticles);

  return validArticles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
