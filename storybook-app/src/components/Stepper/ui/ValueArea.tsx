/** @jsxImportSource @emotion/react */
import React from 'react';
import { textInputStyle } from './style';
import { Themes } from "../../../themes";
import { useTheme } from '../../../ThemeProvider';

const Value = ({ value }: { value: number }) => {
    const { theme } = useTheme();
    const callTheme = Themes[theme];

    return (
        <input type="number" readOnly css={textInputStyle(callTheme)} value={value} />
    );
};

export default Value;