const btnStyle = {
    base: [
        "rounded-md",
        "opacity-50",
        "bg-gray-800",
        "p-2",
        "text-gray-400",
        "z-100"
    ],
    position: [
        "absolute", "top-4", "right-2"
    ],
    hover: ["hover:bg-gray-700", "hover:text-white"],
    focus: [
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-white",
        "focus:ring-offset-2",
        "focus:ring-offset-gray-800",
    ],
};

interface Props {
    opened: boolean;
    onClick: () => void;
}

const ThreeBar = <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />;
const XMark = <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />;

export const MobileMenuButton = (props: Props) => {
    return (
        <button
            type="button"
            className={[...btnStyle.base, ...btnStyle.position, ...btnStyle.hover, ...btnStyle.focus].join(" ")}
            onClick={props.onClick}
        >
            <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
            >
                {props.opened ? XMark : ThreeBar}
            </svg>
            <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>

    );
}
