import { useState } from "react";
import { MobileMenuButton } from "./ExpandButton";
import { Menu } from "./Menu";

export const MobileMenu = () => {
    const [opened, setOpened] = useState(false);
    const onClickHandler = () => {
        setOpened(!opened);
    };

    return (
        <>
            <Menu display={opened} />
            <MobileMenuButton onClick={onClickHandler} opened={opened} />
        </>
    );
}