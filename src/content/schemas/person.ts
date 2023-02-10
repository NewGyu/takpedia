import { z, defineCollection } from "astro:content";

export const PersonSchema = defineCollection({
    schema: z.object({
        name: z.string(),
        kana: z.string(),
        summary: z.string(),
    }),
});
