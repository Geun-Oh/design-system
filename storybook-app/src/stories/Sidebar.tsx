import React from 'react';
import { css } from '@emotion/react';
import { BaseStyles } from "../themes";
import { Icon, IconProps } from "./Icon";
import foldedLogo from "../icon/&.png";
import nonFoldedLogo from "../icon/RESON&CE.png";

type navType = {
    icon: IconProps["type"];
    name: string;
}

interface SidebarProps {
    width: string;
    logoUrl: string;
    foldedLogoUrl: string;
    nav: navType[];
    name: string;
    current: string;
    backgroundColor: string;
}

export const Sidebar = ({ width, logoUrl, foldedLogoUrl, nav, name, current, backgroundColor }: SidebarProps) => {
    const [folded, setFolded] = React.useState<boolean>(false);
    const logo = folded === false ? nonFoldedLogo : foldedLogo;
    return (
        <div>
            <div className='titlewrapper'>
                <img src={logo} alt="logo" />
            </div>
            <div className='navwrapper'>
                {nav && nav.map((item: navType) => {
                    return (
                        <div>
                            <Icon type={item.icon} />
                            {item.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const style = (width: string, backgroundColor: string) => css`
    width: ${width};
    height: 100vh;
    padding: 1rem 1rem;
    border-radius: 1rem;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    background-color: ${backgroundColor};
    transition-duration: 0.5s;
    .titlewrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`