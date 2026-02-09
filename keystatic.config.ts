// import { config, fields, collection } from "@keystatic/core";

// export default config({
//   storage: {
//     kind: "local",
//   },
//   collections: {
//     artigos: collection({
//       label: "Artigos",
//       slugField: "title",
//       path: "src/content/artigos/*",
//       format: { contentField: "content" },
//       schema: {
//         title: fields.slug({
//           name: {
//             label: "Título do Artigo",
//             description: "Usado também na URL (slug gerado automaticamente)",
//           },
//         }),
//         category: fields.select({
//           label: "Categoria",
//           options: [
//             { label: "Direito de Família", value: "Direito de Família" },
//             { label: "Sucessões", value: "Sucessões" },
//             { label: "Trabalhista", value: "Trabalhista" },
//             { label: "Governança", value: "Governança" },
//             { label: "Jurisprudência", value: "Jurisprudência" },
//           ],
//           defaultValue: "Sucessões",
//         }),
//         date: fields.date({
//           label: "Data de Publicação",
//           defaultValue: { kind: "today" },
//         }),
//         author: fields.object({
//           name: fields.text({
//             label: "Nome do Autor",
//             defaultValue: "Dra. Nathalie Almeida",
//           }),
//           specialty: fields.text({
//             label: "Especialidade",
//             defaultValue: "Especialista em Direito Sucessório",
//           }),
//           image: fields.text({
//             label: "URL da Foto do Autor",
//             description:
//               "URL completa da imagem (ex: Unsplash ou seu servidor)",
//             defaultValue:
//               "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100",
//           }),
//         }),
//         heroImage: fields.object({
//           src: fields.text({
//             label: "URL da Imagem Hero",
//             description: "Imagem principal do artigo",
//           }),
//           alt: fields.text({ label: "Texto Alternativo da Imagem Hero" }),
//         }),
//         quote: fields.text({
//           label: "Citação Inicial (em destaque)",
//           multiline: true,
//           description: "Texto em itálico com borda à esquerda",
//         }),
//         content: fields.document({
//           label: "Conteúdo Principal do Artigo",
//           formatting: {
//             heading: [1, 2, 3, 4],
//             bold: true,
//             italic: true,
//             listTypes: ["bullet", "numbered"],
//             blockquote: true,
//             code: true,
//           },
//           dividers: true,
//           links: true,
//           images: true,
//         }),
//         specialistNote: fields.object({
//           title: fields.text({
//             label: "Título da Nota da Especialista",
//             defaultValue: "Nota da Especialista",
//           }),
//           content: fields.text({
//             label: "Conteúdo da Nota",
//             multiline: true,
//           }),
//           linkText: fields.text({
//             label: "Texto do Link",
//             defaultValue: "Consultar Viabilidade Técnica",
//           }),
//           linkUrl: fields.text({
//             label: "URL do Link",
//             defaultValue: "https://wa.me/5511900000000",
//           }),
//         }),
//         tags: fields.array(fields.text({ label: "Tag" }), {
//           label: "Tags",
//           itemLabel: (props) => props.value,
//           description: "Ex: #Sucessão, #Patrimônio, #Holding",
//         }),
//         recommended: fields.array(
//           fields.object({
//             title: fields.text({ label: "Título do Artigo Recomendado" }),
//             subtitle: fields.text({ label: "Subtítulo ou Descrição" }),
//             isNext: fields.checkbox({
//               label: 'É o "Próximo Insight"?',
//               defaultValue: false,
//             }),
//           }),
//           {
//             label: "Leituras Recomendadas",
//             description:
//               'Adicione dois itens: um para "Próximo" e um para "Anterior"',
//             max: 2,
//           },
//         ),
//       },
//     }),
//   },
// });

import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    artigos: collection({
      label: "Artigos",
      slugField: "title",
      path: "src/content/artigos/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: {
            label: "Título do Artigo",
            description: "Usado também na URL (slug gerado automaticamente)",
          },
        }),
        category: fields.select({
          label: "Categoria",
          options: [
            { label: "Direito de Família", value: "Direito de Família" },
            { label: "Sucessões", value: "Sucessões" },
            { label: "Trabalhista", value: "Trabalhista" },
            { label: "Governança", value: "Governança" },
            { label: "Jurisprudência", value: "Jurisprudência" },
          ],
          defaultValue: "Sucessões",
        }),
        date: fields.date({
          label: "Data de Publicação",
          defaultValue: { kind: "today" },
        }),
        author: fields.object({
          name: fields.text({
            label: "Nome do Autor",
            defaultValue: "Dra. Nathalie Almeida",
          }),
          specialty: fields.text({
            label: "Especialidade",
            defaultValue: "Especialista em Direito Sucessório",
          }),
          image: fields.text({
            label: "URL da Foto do Autor",
            description:
              "URL completa da imagem (ex: Unsplash ou seu servidor)",
            defaultValue: "/nathalie-almeida-de-carvalho-advogada.webp",
          }),
        }),
        heroImage: fields.object({
          src: fields.text({
            label: "URL da Imagem Hero",
            description: "Imagem principal do artigo",
          }),
          alt: fields.text({ label: "Texto Alternativo da Imagem Hero" }),
        }),
        quote: fields.text({
          label: "Citação Inicial (em destaque)",
          multiline: true,
          description: "Texto em itálico com borda à esquerda",
        }),
        // content: fields.document({
        //   label: "Conteúdo Principal do Artigo",
        //   formatting: {
        //     heading: true, // Habilita todos os níveis de heading (h1–h6)
        //     bold: true,
        //     italic: true,
        //     listTypes: true, // Habilita listas ordenadas e não ordenadas
        //     blockquote: true,
        //     code: true,
        //   },
        //   dividers: true,
        //   links: true,
        //   images: true,
        // }),

        content: fields.document({
          label: "Conteúdo Principal do Artigo",
          // formatting: {
          //   headingLevels: {
          //     levels: [1, 2, 3, 4, 5, 6],
          //   },
          //   bold: true,
          //   italic: true,
          //   listTypes: true,
          //   blockquote: true,
          //   code: true,
          // },
          images: {
            directory: "public/artigos/images", // Crie essa pasta manualmente se necessário
            publicPath: "/artigos/images/", // Caminho absoluto servido pelo servidor
          },
          formatting: {
            // headingLevels fica no nível superior de formatting:
            headingLevels: [2, 3, 4, 5, 6],

            // 'bold', 'italic', etc. ficam DENTRO de inlineMarks:
            inlineMarks: {
              bold: true, // Isso resolve o erro de TypeScript
              italic: true, // Você pode adicionar itálico aqui também
              strikethrough: true,
              code: true,
            },

            // Outras opções de formatação (listas, blocos de código) também ficam no nível superior:
            listTypes: {
              ordered: true,
              unordered: true,
            },
            blockTypes: {
              blockquote: true,
              code: true,
            },
            softBreaks: true,
          },

          dividers: true,
          links: true,
          // images: true,
        }),

        specialistNote: fields.object({
          title: fields.text({
            label: "Título da Nota da Especialista",
            defaultValue: "Nota da Especialista",
          }),
          content: fields.text({
            label: "Conteúdo da Nota",
            multiline: true,
          }),
          linkText: fields.text({
            label: "Texto do Link",
            defaultValue: "Consultar Viabilidade Técnica",
          }),
          linkUrl: fields.text({
            label: "URL do Link",
            defaultValue: "https://wa.me/5511900000000",
          }),
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
          description: "Ex: #Sucessão, #Patrimônio, #Holding",
        }),
        recommended: fields.array(
          fields.object({
            title: fields.text({ label: "Título do Artigo Recomendado" }),
            subtitle: fields.text({ label: "Subtítulo ou Descrição" }),
            isNext: fields.checkbox({
              label: 'É o "Próximo Insight"?',
              defaultValue: false,
            }),
          }),
          {
            label: "Leituras Recomendadas",
            description:
              'Adicione até dois itens: um para "Próximo" e um para "Anterior"',
          },
        ),
      },
    }),
  },
});
