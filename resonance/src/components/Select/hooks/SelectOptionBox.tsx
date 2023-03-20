import React from 'react';
import SelectBoxArea from '../ui/SelectBoxArea';
import { useSelect } from './SelectMain';

export const SelectOptionBox = ({ children }) => {
    const { toggled } = useSelect();

    return (
        toggled ? <SelectBoxArea>
            {children}
        </SelectBoxArea>
            :
            <></>
    )
}