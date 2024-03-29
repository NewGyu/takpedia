import userIcon from "./icon/user.jpg";
import assistantIcon from "./icon/assistant.jpg";
import type { Comment, Role } from "./conversation";

interface ConversationsProps {
    conversations: Comment[]
}

export const Conversations = ({ conversations }: ConversationsProps) => {
    return (
        <div>
            {
                conversations.map((c, i) => (<Comment role={c.role} content={c.content} key={i} />))
            }
        </div>
    );
}


const Comment = ({ role, content }: Comment) => {
    return (
        <div className="w-full">
            <div className="flex gap-4 p-4 md:py-6 items-center">
                <div className="w-[64px]">
                    <RoleIcon role={role} />
                </div>
                <div>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}

interface RoleIconProps {
    role: Role
}

const RoleIcon = (props: RoleIconProps) => {
    const iconPath = props.role == "user" ? userIcon : assistantIcon;
    return (
        <img style={{ minWidth: 64 }} src={iconPath} />
    );
}