/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";

type BadgeProps = {
    innerText: String;
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
            padding: 0.5rem 1rem;
            border-radius: 1rem;
            height: 3rem;
            font-size: ${BaseStyles.Text.Heading4};
            font-family: "Fira Code";
            div {
            background: ${badgeTheme[state]};
                width: "6px";
                height: "6px";
                border-radius: "3px";
            }
            `
        }
    }

    const badgeTheme = {
        Access: `${BaseStyles.Color.Lime1}`,
        Warning: `${BaseStyles.Color.Orange2}`,
        Error: `${BaseStyles.Color.Red1}`,
        New: `${BaseStyles.Color.Purple1}`,
        Disabled: `${BaseStyles.Color.Black1}`,
    }

    return (
        <div css={style}>
            {innerText}
            <div css={badgeTheme}></div>
        </div>
    )
}

