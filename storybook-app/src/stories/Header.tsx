/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles, Themes } from "../themes";
import { Icon, IconProps } from "./Icon";
// import { useAppDispatch, useAppSelector } from '../store/config';
// import { setCounter } from '../store/slices/themeSlice';

type ThemeType = "lightMode" | "darkMode";

type HeaderProps = { // interface는 주석을 달 수 없었기에 type을 정의했다!
    themeType: ThemeType;
    /** 원하는 기업의 로고 링크를 걸어두면 됩니다. 현재는 darkMode를 적용했을 때 RESON&CE 로고와 색이 겹치는 현상이 있는데, 이는 컴포넌트 구현 시에 현재 테마에 따라 imgUrl을 다르게 설정해주는 방식으로 해결하면 됩니다. */
    imgUrl?: string;
    /**아이콘의 종류를 선택해주세요. */
    iconType?: IconProps["type"];
    /**네비게이션 바에 지정할 옵션들을 설정해주세요. 배열을 받습니다. */
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