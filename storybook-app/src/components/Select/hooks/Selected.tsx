import React, { useEffect } from 'react';
import SelectedArea from '../ui/SelectedArea';
import { useSelect } from './SelectMain';

export const Selected = () => {
    const { next, selected, setToggled, toggled } = useSelect();

    useEffect(() => {
        next(selected);
    }, [selected]);

    return (
        <div onClick={() => {
            setToggled()
            console.log(toggled)
        }}>
            <SelectedArea innerText={selected || "defaultValue"} />
        </div>
    )
};