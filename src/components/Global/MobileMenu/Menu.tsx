interface Props {
    display: boolean;
}

export const Menu = (props: Props) => {
    if (props.display) {
        return (
            <aside>
                <ul>
                    <li><a href="/people/">登場人物</a></li>
                    <li><a href="/teams/">族(チーム)</a></li>
                    <li><a href="/orgs/">組織</a></li>
                    <li><a href="/bikes/">愛車</a></li>
                    <li><a href="/quotes/">名言</a></li>
                    <li><a href="/terms/">用語</a></li>
                </ul>
            </aside >
        )
    } else {
        return <aside />
    }
}