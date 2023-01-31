import React, { useEffect } from 'react';
import WrapperArea from '../ui/WrapperArea';
import { useStepper } from './StepperMain';

const Wrapper = ({ children }: { children: any }) => {
    const { width, setValue } = useStepper();

    useEffect(() => {
        setValue();
    }, []);

    return (
            <WrapperArea width={width!}>
                {children}
            </WrapperArea>
    );
};

export default Wrapper;