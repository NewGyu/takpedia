import { z, defineCollection } from "astro:content";

export const BikeSchema = defineCollection({
    schema: z.object({
        name: z.string(),
        kana: z.string(),
        petname: z.string().optional(),
        owned_by: z.string(),
        temp_used_by: z.string().array().optional(),
        summary: z.string().optional(),
    })
});