import React, { useEffect } from 'react';
import SelectedArea from '../ui/SelectedArea';
import { useSelect } from "./SelectMain"

export const SelectOption = ({ children }: { children: string }) => {
    const { setOptions, setSelected } = useSelect();
    useEffect(() => {
        setOptions(children);
    }, [])
    return (
        <div onClick={() => setSelected(children)}>
            <SelectedArea innerText={children}/>
        </div>
    )
}