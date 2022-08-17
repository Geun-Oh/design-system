/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles, Themes } from "../themes";
import { Icon, IconProps } from "./Icon";

type ThemeType = "lightMode" | "darkMode";

interface HeaderProps {
    themeType: ThemeType;
    imgUrl?: string;
    iconType?: IconProps["type"];
    navOptions: string[];
}

export const Header = ({ themeType, imgUrl, iconType, navOptions }: HeaderProps) => {
    const theme = themeType === "lightMode" ? Themes.LightMode : Themes.DarkMode;

    return (
        <div className='headerWrapper' css={style(theme)}>
            <img src={imgUrl} alt="headerLogo" />
            <div className='navWrapper'>
                {navOptions && navOptions.map((item, index) => {
                    return <span key={index}>{item}</span>
                })}
            </div>
            <Icon type={iconType} scale={2} />
        </div>
    )
}

Header.defaultProps = {
    themeType: "lightMode",
    iconType: "donorRight",
    navOptions: ["Home", "About", "Reservation", "More"]
}

const style = (theme) => css`
    width: 100vw;
    height: 60px;
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    background-color: ${theme.BackgroundColor};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    img {
        height: 24px;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        span {
            margin-right: 5vw;
            margin-left: 5vw;
            font-size: 1.5rem;
            color: ${theme.Color};
            font-family: ${BaseStyles.Font.FiraCode};
            font-weight: ${BaseStyles.Text.Border1};
        }
    }
`