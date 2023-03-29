/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react';
import { Themes } from "@src/styles/themes";
import { useTheme } from '../../../styles/ThemeProvider';
import { style, textInputStyle, steperWrapperStyle } from '../style';
import Icon from "../../Icon";

interface IStepper {
    name: string;
    value: number;
    onChange: (e: any) => any;
}

const Stepper = ({ name, value = 0, onChange }: IStepper) => {
    const { theme } = useTheme();
    const callTheme = Themes[theme];
    const numberInputRef = useRef<HTMLInputElement>(null);
    const [stepNumber, setStepNumber] = React.useState<number>(value!);
    return (
        <div css={style("80px", callTheme)}>
            <input type="number" ref={numberInputRef} readOnly css={textInputStyle(callTheme)} name={name} value={stepNumber} />
            <div className='steperwrapper' css={steperWrapperStyle(callTheme)}>
                <button data-testid='upSteper' onClick={() => {
                    setStepNumber(prev => prev + 1);
                    if(numberInputRef.current) {
                        onChange(numberInputRef.current);
                    }
                }}>
                    <Icon type="angleUp" />
                </button>
                <button data-testid='downSteper' onClick={() => {
                    setStepNumber(prev => prev - 1);
                    if(numberInputRef.current) {
                        onChange(numberInputRef.current);
                    }
                }}>
                    <Icon type="angleDown" />
                </button>
            </div>
        </div>
    );
};

export default Stepper;