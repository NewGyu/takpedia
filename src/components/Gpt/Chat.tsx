import { useState } from "react";
import { InputArea } from "./Input";
import { Conversations } from "./Timeline";
import type { Comment } from "./conversation";

export const Chat = () => {
    const [conversations, setConversations] =
        useState<Comment[]>([{ role: "assistant", content: "武丸だよぅ…　テメェ、俺に何か用か？" }]);
    const handleCommented = (newCommnet: string) => {
        setConversations([...conversations, { role: "user", content: newCommnet }]);
    }
    return (
        <>
            <Conversations conversations={conversations} />
            <InputArea onCommented={handleCommented} />
        </>
    );
}