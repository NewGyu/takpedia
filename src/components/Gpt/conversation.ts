export type Role = "user" | "assistant";

export interface Comment {
    role: Role,
    content: string
}
