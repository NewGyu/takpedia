interface Props {
    display: boolean;
}

interface LinkProps {
    href: string;
    text: string;
}
const Link = (props: LinkProps) => {
    return <a className="py-4" style={{ color: "white" }} href={props.href}>{props.text}</a>
}

const MENU_LINKS = [
    { text: "登場人物", href: "/people/" },
    { text: "族(チーム)", href: "/teams/" },
    { text: "組織", href: "/orgs/" },
    { text: "愛車", href: "/bikes/" },
    { text: "名言", href: "/quotes/" },
    { text: "用語", href: "/terms/" },
];

export const Menu = (props: Props) => {
    if (props.display) {
        return (
            <aside className="absolute top-0 right-0 z-1 w-max p-4 rounded-md bg-bukkomi-blue-dark opacity-80">
                <ul className="pr-12 text-lg">
                    {MENU_LINKS.map(x => <li className="py-1"><a className="text-white" href={x.href}>{x.text}</a></li>)}
                </ul>
            </aside >
        )
    } else {
        return <></>
    }
}