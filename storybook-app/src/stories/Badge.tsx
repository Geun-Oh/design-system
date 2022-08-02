/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";

type BadgeProps = {
    innerText: string;
    state: "Access" | "Warning" | "Error" | "New" | "Wait";
    size: "Large" | "Medium" | "Small";
}

export const Badge = ({ innerText, state, size }: BadgeProps) => {
    const style = () => {
        if(size === "Large") {
            return css`
            box-shadow: ${BaseStyles.Shadow.BottomDefault};
            transition-duration: 0.5s;
            outline: none;
            border: none;
            box-sizing: border-box;
            background: white;
            padding: 12px 16px;
            border-radius: 16px;
            height: 48px;
            font-size: ${BaseStyles.Text.Heading4};
            font-family: "Fira Code";
            font-weight: ${BaseStyles.Text.Border3};
            div {
                position: relative;
                float: right;
                transition-duration: 0.5s;
                transform: translate(16px, -24px);
                background: ${badgeTheme[state]};
                border-radius: 1px soild black;
                width: 24px;
                height: 24px;
                border-radius: 12px;
            }
            `
        }
    }

    const badgeTheme = {
        Access: `${BaseStyles.Color.Lime1}`,
        Warning: `${BaseStyles.Color.Orange2}`,
        Error: `${BaseStyles.Color.Red1}`,
        New: `${BaseStyles.Color.Purple1}`,
        Wait: `${BaseStyles.Color.Black1}`,
    }

    return (
        <div css={style()}>
            {innerText}
            <div css={badgeTheme}></div>
        </div>
    )
}

