/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";
import { Icon } from "./Icon";

type AccordionProps = {
    innerText: string;
    width: string;
    extraAction?: string;
    src: string;
    loading: boolean;
}

export const Accordion = ({ innerText, width, extraAction, src, loading }: AccordionProps) => {
    return (
        <div css={style(width)}>
            <p>{innerText}</p>
            {src && extraAction ? <a href={src} style={{ textDecoration: "none" }} ><p style={{ color: `${BaseStyles.Color.Orange3}` }}>{extraAction}</p></a> : null}
            <Icon type={loading === true ? "loading" : "angleDown"} />
        </div>
    )
}

Accordion.defaultProps = {
    innerText: "Accordion InnerText",
    width: "400px",
    loading: false,
};

const style = (width: string) => css`
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    outline: none;
    border: none;
    width: ${width};
    height: 48px;
    box-sizing: border-box;
    background: white;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    font-size: ${BaseStyles.Text.Heading4};
    font-family: "Fira Code";
    font-weight: ${BaseStyles.Text.Border4};
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    line-height: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`