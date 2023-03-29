/** @jsxImportSource @emotion/react */
import React from 'react';
import { Themes } from "@src/styles/themes";
import { useTheme } from '../../../styles/ThemeProvider';
import { style, textInputStyle } from '../style';

interface IPhoneNumber {
    name: string;
    value: string;
    onChange: (e: any) => any;
}

const PhoneNumber = ({ name, value = "", onChange }: IPhoneNumber) => {
    const { width, theme } = useTheme();
    const callTheme = Themes[theme];
    const [inputValue, setInputValue] = React.useState<string>(value!);

    React.useEffect(() => {
        if (inputValue.length === 10) {
            setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (inputValue.length === 13) {
            setInputValue(inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }, [inputValue]);

    const handlePress = (e: any) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if (regex.test(e.target.value)) {
            setInputValue(e.target.value);
            onChange(e.target.value);
        }
    };

    return (
        <div css={style(width, callTheme)}>
            <input css={textInputStyle(callTheme)} type="text" onChange={(e) => handlePress(e)} name={name} value={inputValue} placeholder="010-1234-5678" maxLength={13} />
        </div>
    );
};

export default PhoneNumber;