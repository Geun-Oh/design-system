import { DropdownProvider } from "../hooks/SelectContext";
import React from "react";

export const DropdownMain = ({ children, values }) => {
    return (
        <DropdownProvider values={values}>
            {children}
        </DropdownProvider>
    )
}