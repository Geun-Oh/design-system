/** @jsxImportSource @emotion/react */
import React from 'react';
import { Themes } from "../../../themes";
import { useTheme } from '../../../ThemeProvider';
import { style, textInputStyle } from '../style';

interface IText {
    /**해당 Input 컴포넌트의 name 속성을 지정해주세요. */
    name: string;
    /**해당 Input 컴포넌트의 value 속성을 지정해주세요. */
    value: string;
    /**해당 Input 컴포넌트에 변화가 발생했을 때 수행할 함수를 지정해주세요. */
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