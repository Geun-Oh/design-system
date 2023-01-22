import React, { useEffect } from 'react';
import { useSelect } from './Select';

export const Selected = () => {
    const { next, selected } = useSelect();

    useEffect(() => {
        next(selected);
    }, [selected]);

    return (
        <div>
            <span>{selected || "defaultValue"}</span>
        </div>
    );
};