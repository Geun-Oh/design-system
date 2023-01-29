import React from 'react';
import UpButtonArea from '../ui/UpButtonArea';
import { useStepper } from './StepperMain';

const UpButton = () => {
    const { plus, value } = useStepper();
    
    return (
        <UpButtonArea onClick={() => {
            plus();
            console.log(plus, value);
        }} />
    );
};

export default UpButton;