import { z, defineCollection } from "astro:content";

const TeamMember = z.object({
    slug: z.string(),
    role: z.string().optional(),
});

export type TeamMemberType = z.infer<typeof TeamMember>;

export const schema = defineCollection({
    schema: z.object({
        name: z.string(),
        kana: z.string(),
        summary: z.string(),
        leader: TeamMember,
        member: TeamMember.array(),
        kanban: z.string().array().optional()
    })
});
