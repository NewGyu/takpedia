import { z, defineCollection } from "astro:content";
import { PersonSchema, TeamSchema } from "./schemas";


export const collections = {
    "people": PersonSchema,
    "teams": TeamSchema,
}