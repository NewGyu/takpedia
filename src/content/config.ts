import { PersonSchema } from "../schemas/person"
import { TeamSchema } from "../schemas/team";
import { FamousQuoteSchema } from "../schemas/famousQuote";
import { BikeSchema } from "../schemas/bikes";
import { ListOfTermsSchema } from "../schemas/terms";
import { OrgSchema } from "../schemas/orgs";


export const collections = {
    "people": PersonSchema,
    "teams": TeamSchema,
    "famousQuotes": FamousQuoteSchema,
    "bikes": BikeSchema,
    "terminologies": ListOfTermsSchema,
    "orgs": OrgSchema,
}