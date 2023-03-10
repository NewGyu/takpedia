import { z, defineCollection } from "astro:content";

const TeamMember = z.object({
    slug: z.string(),
    role: z.string().optional(),
});

export type TeamMemberType = z.infer<typeof TeamMember>;

export const TeamSchema = defineCollection({
    schema: z.object({
        name: z.string(),
        kana: z.string(),
        summary: z.string(),
        leader: TeamMember.optional(),
        member: TeamMember.array().optional(),
        kanban: z.string().array().optional()
    })
});
