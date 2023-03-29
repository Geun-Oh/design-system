/** @jsxImportSource @emotion/react */
import React from 'react';
import { style } from './style';
import { useTheme } from '../../../styles/ThemeProvider';
import { Themes } from "@src/styles/themes";

const WrapperArea = ({ children, width }: { children: any, width: string }) => {  
    const { theme } = useTheme();
    const callTheme = Themes[theme];
    
    return (
        <div data-testid="Stepper-Default-Wrapper" css={style(width, callTheme)}>
            {children}
        </div>
    );
};

export default WrapperArea;