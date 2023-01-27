/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { BaseStyles, Themes } from "../../../themes";

type Theme = typeof Themes.LightMode;

const TextArea = ({ width, theme, name, value, onChange }: { width: string, theme: string, name: string, value: string, onChange: (e: any) => any}) => {
    const mode = Themes[theme];

    return (
        <div css={style(width, mode)}>
            <input css={textInputStyle(mode)} placeholder="Input Text" type="text" name={name} value={value} onChange={(e: any) => onChange(e)} />
        </div>
    )
}

const style = (width: string, mode: Theme) => css`
    width: ${width};
    background-color: ${mode.BackgroundColor};
    color: ${mode.Color};
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    border: 0.3px solid ${BaseStyles.Color.Black0};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    border-radius: 1rem;
    &:hover {
        border: 1px solid ${BaseStyles.Color.Beige2};
    }
    input::placeholder {
        color: ${mode.Color};
    }
`

const textInputStyle = (mode: Theme) => css`
    width: 100%;
    background-color: ${mode.BackgroundColor};
    color: ${mode.Color};
    font-family: ${BaseStyles.Font.FiraCode};
    font-size: 1rem;
    border: none;
    outline: none;
    text-decoration: none;
`

export default TextArea;