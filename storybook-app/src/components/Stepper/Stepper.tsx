import React from 'react';
import Stepper from './index';

interface IStepper {
    /** 너비를 설정해주세요. */
    width?: string;
}

/**
 * Stepper 컴포넌트의 구현체입니다. next함수는 console.log, defaultValue는 2001로 설정되어있습니다.
 * @param width - 너비를 설정해주세요.
 * @returns 
 */
const StepperComponent = ({ width }: IStepper) => {
    const nextfc = (value: string) => console.log(value);

    return (
        <Stepper next={nextfc} defaultValue={2001} width={width}>
            <Stepper.Value />
            <Stepper.UpButton />
            <Stepper.DownButton />
        </Stepper>
    );
};

export default StepperComponent;