import React from 'react';
import WrapperArea from '../ui/WrapperArea';
import { useStepper } from './StepperMain';

const Wrapper = ({ children }: { children: any }) => {
    const { width } = useStepper();

    return (
            <WrapperArea width={width!}>
                {children}
            </WrapperArea>
    );
};

export default Wrapper;