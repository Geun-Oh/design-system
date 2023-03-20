import React from 'react';
import ValueArea from '../ui/ValueArea';
import { useStepper } from './StepperMain';

const Value = () => {
    const { value, next } = useStepper();
    
    return (
        <ValueArea value={value} onChange={next} />
    );
};

export default Value;