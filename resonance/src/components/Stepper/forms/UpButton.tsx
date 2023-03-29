import React from 'react';
import UpButtonArea from '../ui/UpButtonArea';
import { useStepper } from './StepperMain';

const UpButton = () => {
    const { plus } = useStepper();
    
    return (
        <UpButtonArea onClick={plus} />
    );
};

export default UpButton;