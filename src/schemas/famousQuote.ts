import { z, defineCollection } from "astro:content";

export const FamousQuoteSchema = z.object({
    sentence: z.string(),
    said_by: z.string().optional()
});