import React from 'react';
import Select, { SelectEx } from './index';

const SelectComponenet = () => {
    const nextfc = (value: string) => console.log(value)

    return (
        <SelectEx next={nextfc}>
            <Select.Option>Option 1</Select.Option>
            <Select.Option>Option 2</Select.Option>
        </SelectEx>
    )
}

export default SelectComponenet;