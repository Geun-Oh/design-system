/** @jsxImportSource @emotion/react */
import React from 'react';
import { textInputStyle } from './style';
import { Themes } from "@src/styles/themes";
import { useTheme } from '../../../styles/ThemeProvider';

const Value = ({ value, onChange }: { value: number, onChange: (e: any) => any }) => {
    const { theme } = useTheme();
    const callTheme = Themes[theme];

    return (
        <input data-testid="Stepper-Default-Value" type="number" readOnly css={textInputStyle(callTheme)} value={value} onChange={onChange}/>
    );
};

export default Value;