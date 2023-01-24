import React from 'react';
import Select from './index';

const SelectComponenet = () => {
    const nextfc = (value: string) => console.log(value)

    return (
        <Select.Select next={nextfc}>
            <Select.Option>Option 1</Select.Option>
            <Select.Option>Option 2</Select.Option>
        </Select.Select>
    )
}

export default SelectComponenet;