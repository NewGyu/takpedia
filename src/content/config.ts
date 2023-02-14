import { PersonSchema } from "../schemas/person"
import { TeamSchema } from "../schemas/team";
import { FamousQuoteSchema } from "../schemas/famousQuote";
import { BikeSchema } from "../schemas/bikes";


export const collections = {
    "people": PersonSchema,
    "teams": TeamSchema,
    "famousQuotes": FamousQuoteSchema,
    "bikes": BikeSchema,
}