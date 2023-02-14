import { z, defineCollection } from "astro:content";

export const PersonSchema = defineCollection({
    schema: z.object({
        name: z.string(),
        kana: z.string(),
        summary: z.string(),
        nickname: z.string().optional(),
        faceImg: z.string().optional(),
    }),
});
