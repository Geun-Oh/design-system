import React from 'react'
import { SelectContextProvider } from "../context/Select.contextProvider";
import { Selected } from "./Selected";
import MarginBox from '../../Marginbox/Marginbox';
import { SelectOptionBox } from './SelectOptionBox';

export const SelectWrapper = ({ children, next }: { children: React.ReactNode, next: (e: any) => any }) => {
    return (
        <SelectContextProvider next={next}>
            <Selected />
            <MarginBox marginBottom='0.5rem' />
            <SelectOptionBox>
                {children}
            </SelectOptionBox>
        </SelectContextProvider>
    )
}

