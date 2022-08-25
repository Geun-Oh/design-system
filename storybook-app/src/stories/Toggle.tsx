/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";

type ToggleTypes = "Basic" | "DenyAccept";

interface ToggleProps {
    /**토글의 타입을 정해주세요. 기본 타입과 승인/거절 타입이 있습니다. */
    type: ToggleTypes;
    /**토글 여부에 대한 초깃값을 설정해주세요. */
    toggled: boolean;
    /**토글의 크기를 지정해주세요. 기본은 12*12px 이며, 입력받은 수만큼 비율이 변화합니다. */
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