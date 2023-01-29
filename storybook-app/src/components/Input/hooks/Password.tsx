/** @jsxImportSource @emotion/react */
import React from 'react';
import { Themes } from "../../../themes";
import { useTheme } from '../../../ThemeProvider';
import { style, textInputStyle } from '../style';
import Icon from "../.././Icon";

interface IPassword {
    name: string;
    value: string;
    onChange: (e: any) => any;
}

const Password = ({ name, value, onChange }: IPassword) => {
    const { width, theme } = useTheme();
    const callTheme = Themes[theme];
    const [passwordType, setPasswordType] = React.useState("password");
    const [inputValue, setInputValue] = React.useState<string>(value!);
    const handleChange = (e: any) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
    };
    return (
        <div css={style(width, callTheme)}>
            <input type={passwordType} css={textInputStyle(callTheme)} name={name} value={inputValue} onChange={(e) => handleChange(e)} />
            <button onMouseDown={() => setPasswordType("text")} onMouseUp={() => setPasswordType("password")} style={{ width: "16px", height: "16px", border: "none", outline: "none", background: "none" }}>
                <Icon type="eye" />
            </button>
        </div>
    )
};

export default Password;