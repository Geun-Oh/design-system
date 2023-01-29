/** @jsxImportSource @emotion/react */
import React from 'react';
import { Themes } from "../../../themes";
import { useTheme } from '../../../ThemeProvider';
import { style, textInputStyle } from '../style';
import Icon from "../.././Icon";

interface ISerachField {
    name: string;
    value: string;
    onChange: (e: any) => any;
}

const SerachField = ({ name, value, onChange }: ISerachField) => {
    const { width, theme } = useTheme();
    const callTheme = Themes[theme];
    const [inputValue, setInputValue] = React.useState<string>(value!);
    const handleChange = (e: any) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
    };
    return (
        <div css={style(width, callTheme)}>
            <Icon type="magnifyingGlass" />
            <input css={textInputStyle(callTheme)} style={{ paddingLeft: "16px" }} placeholder="Search..." type="text" name={name} value={inputValue} onChange={(e) => handleChange(e)} />
        </div>
    );
};

export default SerachField;