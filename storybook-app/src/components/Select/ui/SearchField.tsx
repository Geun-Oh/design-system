import React from "react";
import { useSearch } from "../hooks/useSearch";

export const SearchField = () => {
    const { input, onChange } = useSearch();

    return (
        <>
            <input
                id="input-search"
                value={input}
                onChange={onChange}
                placeholder="Search..."
            />
        </>
    )
}