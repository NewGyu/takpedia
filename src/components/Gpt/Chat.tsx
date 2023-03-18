import { useState } from "react";
import { InputArea } from "./Input";
import { Conversations } from "./Timeline";
import type { Comment } from "./conversation";

export const Chat = () => {
    const [conversations, setConversations] =
        useState<Comment[]>([{ role: "assistant", content: "武丸だよぅ…　テメェ、俺に何か用か？" }]);
    const handleCommented = async (newCommnet: string) => {
        const convs = [...conversations, { role: "user", content: newCommnet } as Comment];
        setConversations(convs);
        const res = await askTakemaru(convs);
        setConversations([...convs, ...res]);
    }
    return (
        <>
            <Conversations conversations={conversations} />
            <InputArea onCommented={handleCommented} />
        </>
    );
}

async function askTakemaru(conversations: Comment[]): Promise<Comment[]> {
    const r = await fetch("/gpt/takemaru", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(conversations)
    })
    const res = await r.json();
    return res.choices.map(c => c.message as Comment);
}