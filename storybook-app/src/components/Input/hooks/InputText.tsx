import React from 'react';
import TextArea from '../ui/InputTextArea';
import { useInput } from './InputMain';

const InputText = ({ name, value, onChange }) => {
    const { width, theme } = useInput();
    return (
        <TextArea width={width} theme={theme} name={name} value={value} onChange={onChange} />
    )
}

export default InputText;