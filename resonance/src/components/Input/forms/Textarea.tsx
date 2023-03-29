/** @jsxImportSource @emotion/react */
import React from 'react';
import { Themes } from "@src/styles/themes";
import { useTheme } from '../../../styles/ThemeProvider';
import { textAreaStyle, textAreaInputStyle } from '../style';

interface ITextarea {
    name: string;
    value: string;
    height: string;
    onChange: (e: any) => any;
}

const Textarea = ({ name, value, height, onChange }: ITextarea) => {
    const { width, theme } = useTheme();
    const callTheme = Themes[theme];
    const [inputValue, setInputValue] = React.useState<string>(value!);
    const handleChange = (e: any) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
    };
    return (
        <div css={textAreaStyle(width, callTheme)}>
            <textarea css={textAreaInputStyle(height!, callTheme)} placeholder="Input Text" name={name} value={inputValue} onChange={(e) => handleChange(e)} />
        </div>
    );
};

export default Textarea;