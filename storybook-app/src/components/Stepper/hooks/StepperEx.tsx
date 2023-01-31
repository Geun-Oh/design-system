import React from 'react';
import { StepperMain } from './StepperMain';
import Wrapper from './Wrapper';

const StepperEx = ({ children, defaultValue, next, width }: { children: any, defaultValue: number, next: (e: any) => any, width?: string }) => {
    return (
        <StepperMain next={next} defaultValue={defaultValue} width={width}>
            <Wrapper>
                {children}
            </Wrapper>
        </StepperMain>
    );
};

export default StepperEx;