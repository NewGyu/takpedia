import { z, defineCollection } from "astro:content";

export const schema = defineCollection({
    schema: z.object({
        name: z.string(),
        kana: z.string(),
        summary: z.string(),
    }),
});
