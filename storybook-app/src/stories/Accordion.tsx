/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";
import angleDownSrc from '../images/angle-down-soild.svg';

export const Accordion = ({ innerText }) => {
    return (
        <div>
            <img src={angleDownSrc} alt="angeDown" />
        </div>
    )
}