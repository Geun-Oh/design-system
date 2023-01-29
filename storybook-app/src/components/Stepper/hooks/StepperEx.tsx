import React from 'react';
import { StepperMain } from './StepperMain';
import Wrapper from './Wrapper';

const StepperEx = ({ children, value, next, width }: { children: any, value: number, next: (e: any) => any, width?: string }) => {
    return (
        <StepperMain next={next} value={value} width={width}>
            <Wrapper>
                {children}
            </Wrapper>
        </StepperMain>
    );
};

export default StepperEx;