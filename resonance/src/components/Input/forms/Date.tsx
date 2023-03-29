/** @jsxImportSource @emotion/react */
import React from 'react';
import { Themes } from "@src/styles/themes";
import { useTheme } from '../../../styles/ThemeProvider';
import { style, textInputStyle } from '../style';

interface IDate {
    name: string;
    value: string;
    onChange: (e: any) => any;
}

const Date = ({ name, value, onChange }: IDate) => {
    const { width, theme } = useTheme();
    const callTheme = Themes[theme];
    const [inputValue, setInputValue] = React.useState<string>(value!);
    const handleChange = (e: any) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
    };
    return (
        <div css={style(width, callTheme)}>
            <input css={textInputStyle(callTheme)} placeholder="Input Text" type="date" name={name} value={inputValue} onChange={(e) => handleChange(e)} />
        </div>
    );
};

export default Date;