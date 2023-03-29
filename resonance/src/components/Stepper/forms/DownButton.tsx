import React from 'react';
import DownButtonArea from '../ui/DownButtonArea';
import { useStepper } from './StepperMain';

const DownButton = () => {
    const { minus } = useStepper();
    
    return (
        <DownButtonArea onClick={minus} />
    );
};

export default DownButton;