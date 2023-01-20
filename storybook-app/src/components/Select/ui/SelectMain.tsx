import { SelectProvider } from "../hooks/SelectContext";
import React from "react";

export const SelectMain = ({ children, values }) => {
    return (
        <SelectProvider values={values}>
            {children}
        </SelectProvider>
    )
}