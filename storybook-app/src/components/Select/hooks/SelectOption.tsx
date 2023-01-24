import React, { useEffect } from 'react';
import { BaseStyles } from '../../../themes';
import Text from '../../Text';
import { useSelect } from "./SelectMain"

export const SelectOption = ({ children }: { children: string }) => {
    const { setOptions, setSelected, setToggled, toggled } = useSelect();
    useEffect(() => {
        setOptions(children);
    }, []);

    return (
        <div onClick={() => {
            setSelected(children)
            setToggled()
            console.log(toggled)
        }}>
            <Text innerText={children} fontSize={BaseStyles.Text.Heading3} />
        </div>
    );
};