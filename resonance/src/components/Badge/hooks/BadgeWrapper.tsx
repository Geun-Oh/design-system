/** @jsxImportSource @emotion/react */
import React from 'react';
import Indicate from './Indicate';
import { css } from "@emotion/react";
import { ColorType } from '../style';

const BadgeWrapper = ({ children, color, innerText }: { children: any, color: ColorType, innerText?: string }) => {
    return (
        <div css={style} data-testid="Badge-Wrapper">
            <Indicate color={color} innerText={innerText} />
            {children}
        </div>
    )
}

const style = css`
    width: auto;
    background: none;
    padding: none;
    border: 1px soild black;
    height: auto;
    display: inline-block;
  `;

export default BadgeWrapper;