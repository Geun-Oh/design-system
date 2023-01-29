import React, { useEffect } from 'react';
import ValueArea from '../ui/ValueArea';
import { useStepper } from './StepperMain';

const Value = () => {
    const { value, next } = useStepper();

    useEffect(() => {
        next(value);
    }, [value]);
    
    return (
        <ValueArea value={value} />
    );
};

export default Value;