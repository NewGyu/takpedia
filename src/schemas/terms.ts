import { z, defineCollection } from "astro:content";
import exp from "constants";

const Example = z.object({
    sentence: z.string(),
    note: z.string().optional(),
});
const Term = z.object({
    word: z.string(),
    kana: z.string(),
    summary: z.string(),
    desc: z.string().optional(),
    examples: z.array(Example).optional()
});

export const ListOfTermsSchema = defineCollection({
    schema: z.object({
        gyou: z.string(),
        order: z.number(),
        items: z.array(Term)
    })
});

export const TermDescSchema = defineCollection({});