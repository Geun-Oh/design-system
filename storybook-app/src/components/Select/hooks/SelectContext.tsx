import React, { createContext, ReducerAction, useContext, useReducer, useState } from 'react';

export const SelectContext = createContext({
    listData: [] as Array<unknown>,
    selectedData: undefined as unknown,
    searchedList: [] as Array<unknown>,
    setListData: (e: any) => { },
    setSelectedData: (e: any) => { },
    setSearchedList: (e: any) => { },
    defaultValue: undefined as unknown,
    setIsOpen: (e: boolean) => { }
})

SelectContext.displayName = 'SelectContext'

export const useDropdown = () => {
    const context = useContext(SelectContext)

    if (context === undefined) {
        throw new Error("useDropdown must be used within a <Dropdown />")
    }
    return context
}

interface ActionType<V> {
    type: string;
    value: V;
}

const reducer = (state: string, action: ActionType<string>): string | string[] => {
    switch (action.type) {
        case "ADD":
            return [ ...state, action.value ];
        default:
            return state;
    }
}

export const SelectProvider = ({ children, values }) => {
    // 23.01.19 reducer 타입 확실히 확인하고 수정하기!!
    const [state, dispatch] = useReducer<>(reducer, []);

    return (
        <SelectContext.Provider value={{ ...values }}>
            {children}
        </SelectContext.Provider>
    )
}