import React from 'react';
import { StepperMain } from './StepperMain';
import Wrapper from './Wrapper';

interface IStepperEx {
    /** 자식 요소입니다. */
    children: any;
    /** 초기값입니다. */
    defaultValue: number;
    /**해당 Input 컴포넌트에 변화가 발생했을 때 수행할 함수를 지정해주세요. */
    next: (e: any) => any;
    width?: string;
}

const StepperEx = ({ children, defaultValue, next, width }: IStepperEx) => {
    return (
        <StepperMain next={next} defaultValue={defaultValue} width={width}>
            <Wrapper>
                {children}
            </Wrapper>
        </StepperMain>
    );
};

export default StepperEx;