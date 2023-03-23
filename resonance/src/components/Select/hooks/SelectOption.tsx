import React, { useEffect } from 'react';
import { BaseStyles } from '../../../themes';
import MarginBox from '../../Marginbox';
import Text from '../../Text';
import { useSelect } from "./SelectMain"

export const SelectOption = ({ children }: { children: string }) => {
    const { setOptions, setSelected, setToggled, toggled } = useSelect();
    useEffect(() => {
        setOptions(children);
    }, []);

    return (
        <div onClick={() => {
            setSelected(children);
            setToggled();
            console.log(toggled);
        }}>
            <MarginBox marginTop='0.2rem' />
            <Text innerText={children} fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border4} />
            <MarginBox marginTop='0.2rem' />
        </div>
    );
};