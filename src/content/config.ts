import { PersonSchema } from "../schemas/person"
import { TeamSchema } from "../schemas/team";
import { FamousQuoteSchema } from "../schemas/famousQuote";


export const collections = {
    "people": PersonSchema,
    "teams": TeamSchema,
    "famousQuotes": FamousQuoteSchema,
}