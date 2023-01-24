import React from 'react'
import { SelectMain } from "./SelectMain";
import { Selected } from "./Selected";
import MarginBox from '../../Marginbox';
import { SelectOptionBox } from './SelectOptionBox';

export const SelectEx = ({ children, ...props }) => {
    const nextfc = (value: string) => console.log(value);

    return (
        <SelectMain next={nextfc} {...props}>
            <Selected />
            <MarginBox marginBottom='0.5rem' />
            <SelectOptionBox>
                {children}
            </SelectOptionBox>
        </SelectMain>
    )
}

