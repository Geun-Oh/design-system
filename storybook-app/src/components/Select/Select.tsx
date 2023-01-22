import React from 'react';
import { SelectMain } from "./hooks/Select";
import { Selected } from "./hooks/Selected";
import { SelectOption } from "./hooks/SelectOption";

const Select = Object.assign(SelectMain, {
    Option: SelectOption,
    SelectedArea: Selected
});

const NewSelect = () => {
    return (
        <Select next={(value: any) => console.log(value)}>
            <Select.SelectedArea />
            <Select.Option>Option 1</Select.Option>
            <Select.Option>Option 2</Select.Option>
        </Select>
    )
}

export default NewSelect;