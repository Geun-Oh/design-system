import React from 'react'
import { SelectMain } from "./SelectMain";
import { Selected } from "./Selected";
import MarginBox from '../../Marginbox';
import { SelectOptionBox } from './SelectOptionBox';

export const SelectEx = ({ children, next }: { children: React.ReactNode, next: (e: any) => any }) => {
    return (
        <SelectMain next={next}>
            <Selected />
            <MarginBox marginBottom='0.5rem' />
            <SelectOptionBox>
                {children}
            </SelectOptionBox>
        </SelectMain>
    )
}

