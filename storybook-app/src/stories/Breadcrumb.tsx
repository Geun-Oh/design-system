/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";

type BreadcrumbProps = {
    params: string[];
}

export const Breadcrumb = ({ params }: BreadcrumbProps) => {
    return (
        <div css={style}>
            {paramElement(params)}
        </div>
    )
}

const paramElement = (params: string[]): JSX.Element => {
    params && params.map((item) => {
        return <p>{item}/</p>
    })
    return <p></p>;
}

const style = () => css`
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    outline: none;
    border: none;
    height: 48px;
    box-sizing: border-box;
    background: ${BaseStyles.Color.Black0};
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    font-size: ${BaseStyles.Text.Heading4};
    font-family: "Fira Code";
    font-weight: ${BaseStyles.Text.Border4};
    padding: 0.5rem 2rem;
    border-radius: 0 1rem 1rem 0;
    line-height: 1;
    display: inline-block;
`