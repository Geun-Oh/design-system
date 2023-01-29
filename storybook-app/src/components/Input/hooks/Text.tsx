/** @jsxImportSource @emotion/react */
import React from 'react';
import { Themes } from "../../../themes";
import { useTheme } from '../../../ThemeProvider';
import { style, textInputStyle } from '../style';

interface IText {
    name: string;
    value: string;
    onChange: (e: any) => any;
}

const Text = ({ name, value, onChange }: IText) => {
    const { width, theme } = useTheme();
    const callTheme = Themes[theme];
    const [inputValue, setInputValue] = React.useState<string>(value!);
    const handleChange = (e: any) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
    };
    return (
        <div css={style(width, callTheme)}>
            <input css={textInputStyle(callTheme)} placeholder="Input Text" type="text" name={name} value={inputValue} onChange={(e) => handleChange(e)} />
        </div>
    );
};

export default Text;