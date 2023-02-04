import { z, defineCollection } from "astro:content";
const peopleCollection = defineCollection({
    schema: z.object({
        name: z.string(),
        kana: z.string(),
        summary: z.string(),
    }),
});
export const collections = {
    "people": peopleCollection
}