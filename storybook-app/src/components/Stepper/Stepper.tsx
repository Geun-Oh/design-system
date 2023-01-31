import React from 'react';
import Stepper from './index';

const StepperComponent = () => {
    const nextfc = (value: string) => console.log(value);

    return (
        <Stepper next={nextfc} defaultValue={21} width="80px">
            <Stepper.Value />
            <Stepper.UpButton />
            <Stepper.DownButton />
        </Stepper>
    );
};

export default StepperComponent;