import { z, defineCollection } from "astro:content";

export const OrgSchema = defineCollection({
    schema: z.object({
        name: z.string(),
        kana: z.string(),
        nickname: z.string().optional()
    })
});