import React from 'react'
import { SelectMain } from "./hooks/SelectMain";
import { Selected } from "./hooks/Selected";
import { SelectOption } from "./hooks/SelectOption";
import MarginBox from '../Marginbox';
import SelectBoxArea from './ui/SelectBoxArea';

const Select = Object.assign(SelectMain, {
    Option: SelectOption,
    SelectedArea: Selected
});

export const SelectEx = ({ children, ...props }) => {
    const nextfc = (value: string) => console.log(value)

    return (
        <Select next={nextfc} {...props}>
            <Select.SelectedArea />
            <MarginBox marginBottom='0.5rem' />
            <SelectBoxArea>
                {children}
            </SelectBoxArea>
        </Select>
    )
}

export default Select;