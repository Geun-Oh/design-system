import React from 'react';
import MarginBox from '../Marginbox';
import Select from './index';

const SelectEx = () => {
    const nextfc = (value: string) => console.log(value)

    return (
        <Select next={nextfc}>
            <Select.SelectedArea />
            <MarginBox marginBottom='0.5rem' />
            <Select.Option>Option 1</Select.Option>
            <Select.Option>Option 2</Select.Option>
        </Select>
    )
}

export default SelectEx;