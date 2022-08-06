/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";

type BreadcrumbProps = {
    params: string[];
}

export const Breadcrumb = ({ params }: BreadcrumbProps) => {
    return (
        <div css={style(params)}>
            {paramElement(params)}
        </div>
    )
}

Breadcrumb.defaultProps = {
    params: ["Home"],
}

const paramElement = (params: string[]): JSX.Element | JSX.Element[] | null => {
    if (params.length > 0 && params.length < 4) {
        return params.map(item => <div style={{ display: "flex", flexDirection: "row" }}><div style={{ width: "50px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{item}</div>/</div>)
    } else if(params.length > 3) {
        return <div style={{ display: "flex", flexDirection: "row", whiteSpace: "nowrap" }}>{params[0]} / ... /<div style={{ width: "60px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{params[params.length - 1]}</div>/</div>
    } 
    return null;
}

const style = (params) => css`
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    outline: none;
    border: none;
    height: 48px;
    width: ${params.length > 3 ? 200 : 80 * params.length}px;
    box-sizing: border-box;
    background: ${BaseStyles.Color.Black0};
    padding: 0.5rem 1rem;
    font-size: ${BaseStyles.Text.Heading4};
    font-family: "Fira Code";
    font-weight: ${BaseStyles.Text.Border1};
    border-radius: 0 1rem 1rem 0;
    line-height: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`