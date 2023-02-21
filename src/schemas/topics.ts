import { z, defineCollection } from "astro:content";

export const TopicSchema = defineCollection({
    schema: z.object({
        title: z.string(),
        published_at: z.string().transform(str => new Date(str))
    })
});