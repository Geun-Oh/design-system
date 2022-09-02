/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { BaseStyles } from "../themes";
import { Icon, IconProps } from "./Icon";
import foldedLogo from "../icons/&.png";
import Logo from "../icons/RESON&CE.png";

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
    const logo = folded === true ? logoUrl : foldedLogoUrl;
    return (
        <div css={style(width, backgroundColor, folded)} onClick={() => setFolded(prev => !prev)}>
            <div className='titlewrapper'>
                <img src={logo} alt="logo" style={{ height: "30px" }} />
            </div>
            <div className='navwrapper'>
                {nav && nav.map((item: navType) => {
                    return (
                        <div css={navwrapperStyle(current, item.name)}>
                            <div>
                                <Icon type={item.icon} scale={2.5} />
                            </div>
                            {folded ? <p>{item.name}</p> : null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

Sidebar.defaultProps = {
    width: "300px",
    logoUrl: Logo,
    foldedLogoUrl: foldedLogo,
    nav: [{icon: "file", name: "File"}, {icon: "home", name: "Home"}],
    backgroundColor: "#D2AFFF",
    current: "Home",
}

const style = (width: string, backgroundColor: string, folded: boolean) => css`
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 999;    
    width: ${folded ? width : "40px"};
    height: calc(100vh - 20px);
    padding: 1rem 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${backgroundColor};
    transition-duration: 0.5s;
    .titlewrapper {
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .navwrapper {
        margin-top: 30px;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: ${folded ? "flex-start" : "center"};
    }
`

const navwrapperStyle = (current: string, name: string) => css`
    display: flex;
    margin-top: 20px;
    opacity: ${current === name ? 1 : 0.2};
    transition-duration: 0.5s;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.5rem;
    font-weight: ${BaseStyles.Text.Border1};
    p {
        margin: 0;
        margin-left: 40px;
    }
    &:hover {
        opacity: 0.8;
    }
`