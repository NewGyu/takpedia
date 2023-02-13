import { z, defineCollection } from "astro:content";
import { PersonSchema, TeamSchema, FamousQuoteSchema } from "./schemas";


export const collections = {
    "people": PersonSchema,
    "teams": TeamSchema,
    "famousQuotes": FamousQuoteSchema,
}