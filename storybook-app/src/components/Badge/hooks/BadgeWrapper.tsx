/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from "@emotion/react";
import Indicate from './Indicate';

const BadgeWrapper = ({ children }) => {
    return (
        <div css={style}>
            <Indicate color='Standard' innerText='1' />
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