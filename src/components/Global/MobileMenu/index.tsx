import { useState } from "react";
import { MobileMenuButton } from "./ExpandButton";
import { Menu } from "./Menu";

export const MobileMenu = () => {
    const [display, setDisplay] = useState(false);
    const onClickHandler = () => {
        setDisplay(!display);
    };

    return (
        <>
            <MobileMenuButton onClick={onClickHandler} />
            <Menu display={display} />
        </>
    );
}