import React, { useEffect } from 'react';
import SelectedArea from '../ui/SelectedArea';
import { useSelect } from './SelectMain';

export const Selected = () => {
    const { next, selected } = useSelect();

    useEffect(() => {
        next(selected);
    }, [selected]);

    return <SelectedArea innerText={selected || "defaultValue"} />
};