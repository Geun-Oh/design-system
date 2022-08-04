/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";

type IconProps = {
    type?: 'angleDown';
}

export const Icon = ({ type }: IconProps) => {
    if(type === 'angleDown') return (
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_8_3734)">
            <path d="M4.99996 9C4.78673 9 4.5734 8.92676 4.4109 8.78027L0.244232 5.03027C-0.0812887 4.7373 -0.0812887 4.2627 0.244232 3.96973C0.569753 3.67676 1.0971 3.67676 1.42262 3.96973L4.99996 7.19062L8.57809 3.97031C8.90361 3.67734 9.43095 3.67734 9.75647 3.97031C10.082 4.26328 10.082 4.73789 9.75647 5.03086L5.58981 8.78086C5.42704 8.92734 5.2135 9 4.99996 9Z" fill="black"/>
        </g>
        <defs>
            <clipPath id="clip0_8_3734">
                <rect width="10" height="12" fill="white"/>
            </clipPath>
        </defs>
    </svg>
    )
    return null;
}

Icon.defaultProps = {
    type: 'angleDown'
};