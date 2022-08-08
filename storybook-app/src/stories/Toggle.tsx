/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";

type ToggleTypes = "Basic" | "DenyAccept";

interface ToggleProps {
    type: ToggleTypes;
    toggled: boolean;
    scale: number;
}

export const Toggle = ({ type, toggled, scale }: ToggleProps) => {
    
    const [ isToggled, setIsToggled ] = React.useState(!toggled);
    const typeColor: string[] = type === "Basic" ? ["#D9D9D9", "#00FF19"] : ["#FF3D3D", "#00FF19"];

    const style = () => css`
        width: 28px;
        height: 16px;
        box-shadow: ${BaseStyles.Shadow.BottomSmall};
        transition-duration: 0.5s;
        background: ${isToggled ? typeColor[0] : typeColor[1]};
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        transform: scale(${scale});
        div {
            transition-duration: 0.5s;
            margin-left: ${isToggled ? 1 : 13}px;
            width: 14px;
            height: 14px;
            background: white;
            border-radius: 7px;
        }
    `

    return (
        <div css={style}>
            <div onClick={() => setIsToggled(prev => !prev)}></div>
        </div>
    )
}