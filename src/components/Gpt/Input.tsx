import { useState } from "react";

interface Props {
    onCommented: (comment: string) => void;
}

export const InputArea = ({ onCommented }: Props) => {
    const [newComment, setComment] = useState<string>("");
    const handleButtonClick = () => {
        const c = newComment.trim();
        if (c) {
            onCommented(newComment);
            setComment("");
        }
    };

    return (
        <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)]">
            <TextArea comment={newComment} valueChanged={(v) => setComment(v)} />
            <Button onClick={handleButtonClick} />
        </div >
    )
}

interface TextAreaProps {
    comment: string,
    valueChanged: (val: string) => void,
}
const TextArea = ({ comment, valueChanged }: TextAreaProps) => {
    const css = {
        maxHeight: "200px",
        height: "24px",
        overFlowY: "hidden",
        outline: "none",
    };

    return (
        <textarea
            style={css}
            rows={1}
            className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 pl-2 md:pl-0"
            value={comment}
            onChange={e => { valueChanged(e.target.value) }}
        />
    )
}

interface ButtonProps {
    onClick: () => void
}
const Button = ({ onClick }: ButtonProps) => {
    return (
        <button
            className="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 disabled:hover:bg-transparent right-1 md:right-2"
            onClick={onClick}
        >
            <svg stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
        </button>

    )
}