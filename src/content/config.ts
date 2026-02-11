import { defineCollection, z } from 'astro:content';

const artigos = defineCollection({
  // 'content' é necessário para arquivos .mdoc (Markdoc)
  type: 'content', 
  schema: z.object({
    title: z.string(),
    category: z.enum(["Direito de Família", "Sucessões", "Trabalhista", "Governança", "Jurisprudência"]),
    date: z.string(),
    author: z.object({
      name: z.string(),
      specialty: z.string(),
      image: z.string(),
    }),
    heroImage: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    quote: z.string().optional(),
    specialistNote: z.object({
      title: z.string(),
      content: z.string(),
      linkText: z.string(),
      linkUrl: z.string(),
    }).optional(),
    tags: z.array(z.string()).optional(),
    recommended: z.array(
      z.object({
        title: z.string(),
        subtitle: z.string(),
        isNext: z.boolean(),
      })
    ).optional(),
  }),
});

export const collections = { artigos };
