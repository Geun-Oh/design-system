import React, { useEffect } from 'react';
import { BaseStyles } from '../../../themes';
import Text from '../../Text';
import { useSelect } from "./SelectMain"

export const SelectOption = ({ children }: { children: string }) => {
    const { setOptions, setSelected } = useSelect();
    useEffect(() => {
        setOptions(children);
    }, []);

    return (
        <div onClick={() => setSelected(children)}>
            <Text innerText={children} fontSize={BaseStyles.Text.Heading3} />
        </div>
    );
};