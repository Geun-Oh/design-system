import React, { useEffect } from 'react';
import { useSelect } from "./Select"

export const SelectOption = ({ children }: { children: string }) => {
    const { setOptions, setSelected } = useSelect();
    useEffect(() => {
        setOptions(children);
    }, [])
    return (
        <div onClick={() => setSelected(children)} style={{ backgroundColor: "red" }}>
            <span>{children}</span>
        </div>
    )
}