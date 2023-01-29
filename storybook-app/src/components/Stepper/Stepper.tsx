import React from 'react';
import Stepper from './index';

const StepperComponent = () => {
    const nextfc = (value: string) => console.log(value);

    return (
        <Stepper next={nextfc} width="80px" value={0}>
            <Stepper.Value />
            <Stepper.UpButton />
            <Stepper.DownButton />
        </Stepper>
    );
};

export default StepperComponent;