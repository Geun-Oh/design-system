/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";

type AccordionProps = {
    innetText: string;
    width: string;
    extraAction: string;
    loading: boolean;
}