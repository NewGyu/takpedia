import { z, defineCollection } from "astro:content";

const Example = z.object({
    sentence: z.string(),
    note: z.string().optional(),
});
const Term = z.object({
    word: z.string(),
    kana: z.string(),
    desc: z.string(),
    examples: z.array(Example).optional()
});

export const ListOfTermsSchema = defineCollection({
    schema: z.object({
        gyou: z.string(),
        order: z.number(),
        items: z.array(Term)
    })
});