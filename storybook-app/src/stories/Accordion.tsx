/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";
import ArrowDown from '../images/angle.svg';

type AccordionProps = {
    innerText: string;
}

export const Accordion = ({ innerText }: AccordionProps) => {
    return (
        <div>
            {innerText}
            <ArrowDown />
        </div>
    )
}